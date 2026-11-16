import tempfile
import unittest
from pathlib import Path
from unittest.mock import patch

import verify_deployment as v


class DeploymentTests(unittest.TestCase):
    def test_routes(self):
        self.assertEqual(v.route('index.html'), '/')
        self.assertEqual(v.route('docs/example/index.html'), '/docs/example/')
        self.assertEqual(v.route('search-doc.json'), '/search-doc.json')

    def test_mismatch_and_http_failure_fail(self):
        self.assertFalse(v.compare('index.html', b'expected', lambda _: b'old')['ok'])
        def unavailable(_):
            raise OSError('HTTP 503')
        self.assertIn('503', v.compare('index.html', b'expected', unavailable)['error'])

    def test_cache_retry_and_persistent_mismatch(self):
        responses = iter([b'old', b'new'])
        result = v.verify_files({'index.html': b'new'}, 2, 0,
                                fetch=lambda _: next(responses), sleep=lambda _: None)
        self.assertTrue(result[0]['ok'])
        result = v.verify_files({'index.html': b'new'}, 2, 0,
                                fetch=lambda _: b'old', sleep=lambda _: None)
        self.assertFalse(result[0]['ok'])

    def test_manifest_rejects_missing_release_and_retired_links(self):
        with tempfile.TemporaryDirectory() as directory:
            root = Path(directory)
            for name in v.REQUIRED:
                p = root / name
                p.parent.mkdir(parents=True, exist_ok=True)
                p.write_bytes(b'4.0.1.4')
            names = '\0'.join(v.REQUIRED).encode() + b'\0'
            with patch.object(v.subprocess, 'check_output', return_value=names):
                self.assertEqual(len(v.manifest(root)), len(v.REQUIRED))
                p = root / v.RELEASE_PAGES[0]
                p.write_bytes(b'old release')
                with self.assertRaisesRegex(ValueError, '4.0.1.4'):
                    v.manifest(root)
                p.write_bytes(b'4.0.1.4 Telegram')
                with self.assertRaisesRegex(ValueError, 'Telegram'):
                    v.manifest(root)
                p.unlink()
                with self.assertRaisesRegex(ValueError, 'Missing'):
                    v.manifest(root)

    def test_requires_exact_successful_pages_run(self):
        run = dict(id=1, head_sha='expected', head_branch='gh-pages',
                   path='dynamic/pages/pages-build-deployment', status='completed',
                   conclusion='success', html_url='https://github.com/run/1')
        self.assertIsNone(v.pages_run([run], 'different'))
        self.assertIsNone(v.pages_run([dict(run, path='other')], 'expected'))
        def api(endpoint):
            if endpoint == 'branches/gh-pages':
                return {'commit': {'sha': 'expected'}}
            return {'workflow_runs': [run]}
        self.assertEqual(v.wait_for_pages(api, 'expected'), run['html_url'])
        run['conclusion'] = 'failure'
        with self.assertRaisesRegex(ValueError, 'deployment failed'):
            v.wait_for_pages(api, 'expected')
        with self.assertRaisesRegex(ValueError, 'superseded'):
            v.ensure_current(api, 'older')

    def test_deployment_timeout(self):
        def api(endpoint):
            return {'commit': {'sha': 'expected'}} if endpoint == 'branches/gh-pages' else {'workflow_runs': []}
        ticks = iter([0, 0, 2])
        with self.assertRaises(TimeoutError):
            v.wait_for_pages(api, 'expected', timeout=1, sleep=lambda _: None, clock=lambda: next(ticks))


if __name__ == '__main__':
    unittest.main()
