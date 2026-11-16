#!/usr/bin/env python3
"""Compare the deployed site with the exact checked gh-pages commit."""
import argparse
import concurrent.futures
import hashlib
import json
import os
from pathlib import Path
import subprocess
import time
import urllib.parse
import urllib.request

SITE = 'https://docs.yerbas.org'
RELEASE_PAGES = (
    'docs/wallet/quick-start/index.html',
    'docs/yerbas/consensus/index.html',
    'docs/smartnodes/recovery/index.html',
)
REQUIRED = ('index.html', 'search-doc.json', 'lunr-index.json',
            'docs/yerbas/yerbassocial/index.html') + RELEASE_PAGES


def manifest(root):
    names = subprocess.check_output(
        ['git', '-C', str(root), 'ls-files', '-z']).decode().split('\0')
    result = {}
    for name in names:
        if not name or name.split('/')[0].startswith(('.', '_')):
            continue
        if name in ('CNAME', 'REVIEW-4.0.1.4.md', 'README.md'):
            continue
        path = root / name
        if path.is_symlink() or not path.is_file():
            raise ValueError('Missing or unsupported published file: ' + name)
        result[name] = path.read_bytes()
    for name in REQUIRED:
        if name not in result:
            raise ValueError('Required page/index missing: ' + name)
    for name in RELEASE_PAGES:
        if b'4.0.1.4' not in result[name]:
            raise ValueError('Expected 4.0.1.4 guidance missing: ' + name)
    for name, data in result.items():
        if name.endswith(('.html', '.js', '.json')) and (
                b'telegram' in data.lower() or b't.me/' in data.lower()):
            raise ValueError('Retired Telegram link or label present: ' + name)
    return result


def route(name):
    if name == 'index.html':
        return '/'
    if name.endswith('/index.html'):
        return '/' + name[:-10]
    return '/' + name


def fetch_public(url):
    request = urllib.request.Request(url, headers={
        'Cache-Control': 'no-cache', 'Accept-Encoding': 'identity',
        'User-Agent': 'Yerbas-Docs-Deployment-Verification'})
    with urllib.request.urlopen(request, timeout=20) as response:
        if response.status != 200 or response.url != url:
            raise ValueError('Expected HTTP 200 without a redirect')
        return response.read()


def compare(name, expected, fetch=fetch_public):
    url = SITE + urllib.parse.quote(route(name), safe='/')
    record = {'path': name, 'url': url,
              'expected_sha256': hashlib.sha256(expected).hexdigest()}
    try:
        actual = fetch(url)
        record['actual_sha256'] = hashlib.sha256(actual).hexdigest()
        record['ok'] = actual == expected
        if not record['ok']:
            record['error'] = 'Live content differs from checked commit'
    except Exception as error:
        record.update(ok=False, error=str(error))
    return record


def verify_files(files, attempts, delay, fetch=fetch_public, sleep=time.sleep):
    pending = dict(files)
    results = {}
    for attempt in range(attempts):
        with concurrent.futures.ThreadPoolExecutor(max_workers=8) as pool:
            for item in pool.map(lambda pair: compare(*pair, fetch=fetch), pending.items()):
                results[item['path']] = item
        pending = {name: files[name] for name, item in results.items() if not item['ok']}
        print(f'Attempt {attempt + 1}: {len(files) - len(pending)}/{len(files)} files match', flush=True)
        if not pending:
            break
        if attempt + 1 < attempts:
            sleep(delay)
    return [results[name] for name in sorted(results)]


def github_get(repository, endpoint):
    # This token is sent only to the GitHub API, never to the public site.
    headers = {'Accept': 'application/vnd.github+json',
               'User-Agent': 'Yerbas-Docs-Deployment-Verification'}
    if os.environ.get('GH_TOKEN'):
        headers['Authorization'] = 'Bearer ' + os.environ['GH_TOKEN']
    url = 'https://api.github.com/repos/' + repository + '/' + endpoint
    with urllib.request.urlopen(urllib.request.Request(url, headers=headers), timeout=30) as response:
        return json.load(response)


def ensure_current(api, sha):
    if api('branches/gh-pages')['commit']['sha'] != sha:
        raise ValueError('This commit has been superseded on gh-pages; verify the newer deployment')


def pages_run(runs, sha):
    matches = [run for run in runs if run['head_sha'] == sha
               and run['head_branch'] == 'gh-pages'
               and run['path'] == 'dynamic/pages/pages-build-deployment']
    return max(matches, key=lambda run: run['id']) if matches else None


def wait_for_pages(api, sha, timeout=900, sleep=time.sleep, clock=time.monotonic):
    deadline = clock() + timeout
    while clock() < deadline:
        ensure_current(api, sha)
        run = pages_run(api('actions/runs?head_sha=' + sha + '&per_page=100')['workflow_runs'], sha)
        if run and run['status'] == 'completed':
            if run['conclusion'] != 'success':
                raise ValueError('Pages deployment failed: ' + run['html_url'])
            return run['html_url']
        print('Waiting for successful Pages deployment of ' + sha, flush=True)
        sleep(15)
    raise TimeoutError('Pages deployment did not succeed within 15 minutes')


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--root', type=Path, default=Path('.'))
    parser.add_argument('--sha', required=True)
    parser.add_argument('--repository', default='The-Yerbas-Endeavor/yerbas-docs')
    parser.add_argument('--wait-for-pages', action='store_true')
    parser.add_argument('--attempts', type=int, default=8)
    parser.add_argument('--delay', type=int, default=30)
    parser.add_argument('--report', type=Path, default=Path('deployment-verification.json'))
    args = parser.parse_args()
    report = {'commit': args.sha, 'site': SITE, 'ok': False}
    try:
        if args.attempts < 1 or args.delay < 0:
            raise ValueError('Attempts must be positive and delay nonnegative')
        head = subprocess.check_output(['git', '-C', str(args.root), 'rev-parse', 'HEAD'], text=True).strip()
        if head != args.sha:
            raise ValueError('Checkout does not match requested deployment commit')
        files = manifest(args.root)
        api = lambda endpoint: github_get(args.repository, endpoint)
        if args.wait_for_pages:
            report['deployment'] = wait_for_pages(api, args.sha)
        report['files'] = verify_files(files, args.attempts, args.delay)
        if args.wait_for_pages:
            ensure_current(api, args.sha)
        report['ok'] = all(item['ok'] for item in report['files'])
    except Exception as error:
        report['error'] = str(error)
    args.report.write_text(json.dumps(report, indent=2) + '\n')
    matched = sum(item['ok'] for item in report.get('files', []))
    summary = (f"## Live documentation verification\n\nCommit: `{args.sha}`\n\n"
               f"Result: {'PASS' if report['ok'] else 'FAIL'}; {matched} files matched.\n\n"
               f"{report.get('error', '')}\n")
    print(summary)
    if os.environ.get('GITHUB_STEP_SUMMARY'):
        with open(os.environ['GITHUB_STEP_SUMMARY'], 'a') as output:
            output.write(summary)
    return 0 if report['ok'] else 1


if __name__ == '__main__':
    raise SystemExit(main())
