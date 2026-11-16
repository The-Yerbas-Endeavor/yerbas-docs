# Yerbas documentation source

This directory contains the editable Docusaurus source for [docs.yerbas.org](https://docs.yerbas.org). The `main` and `develop` branches contain this source at their root. The `gh-pages` branch contains the generated site and an `_source/` snapshot of the checked source.

The documentation targets Core 4.0.1.4 binary source `f0e2dde5673580d5d5cac9aa21e16ebe6936dd05`. Read [verification notes](REVIEW-4.0.1.4.md) before changing release, consensus or wallet guidance.

## Build and inspect locally

Use Node.js and npm (the checked build used Node 22.23.4). From this directory:

```sh
npm ci --ignore-scripts --no-audit --no-fund
npm run verify
npm run serve -- --host 127.0.0.1
```

The existing lockfile needs the checked-in `.npmrc` legacy peer resolution setting. Search indexes are created by the production build. `serve` previews that build locally; it does not deploy it. The historical Dockerfile has not been validated by this documentation update.

## Reviewing changes

- Edit `docs/`, `src/`, or configuration here, then rebuild and check links.
- Review changed commands against the exact Core source and release help; distinguish wallet policy from consensus.
- Keep `main` and `develop` synchronized with changes published to `gh-pages`, including its `_source/` snapshot. Preserve `CNAME`, `.nojekyll`, and all existing routes unless a replacement is intentional.
- Do not use the deploy script during PR review. Publishing the `gh-pages` branch is a separate release decision.

`tools/check-links.py` checks a populated build for local files, resources and fragments; it fails for a missing or empty build. External URLs are listed for separate reachability checks.

`tools/capture-rpc-help.py` reads help/status from an already running isolated regtest node. Verify the release archive checksum first. Never point documentation tooling at a funded production wallet. It does not launch a node or submit transactions.

## Automated checks

The `Documentation checks` workflow runs on every push to `main` or `develop`, on pull requests targeting either branch, and on manual dispatch. Its `Build and link checks` job installs the lockfile with Node.js 22, runs the link-checker regression tests, builds the production site, validates all local links/resources/fragments, and checks `CNAME` and `.nojekyll`. External URLs still require separate reachability review.

Use `npm run verify` to run the same tests, build and link validation locally. The legacy `npm run deploy` command runs verification through `predeploy`, but then attempts a direct push to `gh-pages`. Branch protection now rejects that push; use the pull-request publishing process below.

## Protected publishing process

The active [Verified documentation changes ruleset](https://github.com/The-Yerbas-Endeavor/yerbas-docs/rules/27348385) protects `main`, `develop`, and `gh-pages`. All changes require a pull request and the GitHub Actions `Build and link checks` result. The PR must be up to date with its target branch. Direct pushes, force pushes and branch deletions are blocked, and the bypass list is empty. Do not disable these rules to publish.

### 1. Merge and identify the source revision

Prepare source changes on a topic branch and open a PR against `main` or `develop`. Wait for `Documentation checks / Build and link checks` to succeed for the latest PR revision before merging. Keep both source branches synchronized through checked PRs.

Select the exact merged source commit to publish and record its full SHA in the release PR. Build that revision in a clean source checkout using Node.js 22:

```sh
npm ci --ignore-scripts --no-audit --no-fund
npm run verify
```

Check the successful post-merge source workflow for that SHA as well. Review release/consensus claims against Core code, external URLs separately, and important pages in a browser. A successful local build alone is not permission to bypass the required PR checks.

### 2. Prepare a gh-pages pull request

Use a separate clean checkout based on the latest `origin/gh-pages`, and create a publishing topic branch there. Do not merge a source branch directly into `gh-pages`: their root layouts differ.

Prepare the publishing commit with:

- The complete production `build/` contents at the repository root, including hidden `.nojekyll` and `CNAME` containing `docs.yerbas.org`. Remove obsolete generated files so old hashed assets and routes do not remain accidentally.
- An exact snapshot of the selected source commit's tracked files under `_source/`. Export with `git archive <source-sha>` from the source checkout; do not copy `node_modules/`, `build/`, `.docusaurus/`, caches or local uncommitted files. Replace the previous snapshot completely.
- The release's `REVIEW-4.0.1.4.md` audit at the root, matching the source audit.
- The entire existing root `.github/` directory preserved, including `workflows/published-docs-checks.yml`, `scripts/` and `POST_DEPLOYMENT.md`. These files implement the publishing and live-verification checks. Source workflows belong inside `_source/.github/`; do not overwrite the publishing automation with them. Preserve the checkout's `.git/` directory.

Review `git diff --stat` and the staged diff. Confirm that only intended generated files, the source snapshot and release metadata changed. Commit and push the publishing topic branch, then open a PR with **base `gh-pages`**. Include the source SHA, build/link results, intentional route changes and any outstanding external-link issues in its description.

### 3. Verify checks before merging

The `Published documentation checks` workflow must report a successful `Build and link checks` job for the latest publishing PR revision. It runs the live verifier's regression tests, installs the snapshot's locked dependencies, tests the link checker, rebuilds and checks `_source/`, then validates local links/resources/fragments in the actual committed site and checks its publishing markers.

The workflow checks both builds but does not prove byte-for-byte equality between the committed site and a fresh rebuild. Review that the published files were copied from the selected source build. Do not treat a source-branch check or the later Pages deployment check as a substitute for this publishing PR check.

If the target branch advances, update the publishing branch and wait for fresh checks. Resolve failures through new commits to the PR; preserve the workflow rather than skipping it. Merge only when the required check succeeds and GitHub reports the PR is mergeable. Merging into `gh-pages` starts publication.

### 4. Verify deployment and the live site

In [Actions](https://github.com/The-Yerbas-Endeavor/yerbas-docs/actions), locate runs for the publishing PR's **merge commit SHA**. Wait for both `pages build and deployment` and the complete `Published documentation checks` workflow to succeed, including its `Verify live 4.0.1.4 docs` job.

After a push to `gh-pages`, the live job runs on `ubuntu-24.04-arm` after `Build and link checks` passes. It checks out that exact publishing commit, waits up to 15 minutes for its successful Pages deployment, and compares every tracked public file with [docs.yerbas.org](https://docs.yerbas.org). Each request must return HTTP 200 without a redirect and byte-for-byte matching content. The expected files are the committed publishing output validated before merge, not a fresh source rebuild.

The verifier requires the home, download/upgrade, consensus, recovery and social pages plus both search indexes. It checks for 4.0.1.4 in the release pages and rejects Telegram labels or links in HTML, JavaScript and JSON. Public-file comparisons exclude `_source/`, `.github/`, hidden metadata, `CNAME`, README and the release audit. Update the explicit release assertions through review when publishing a later release.

Failed requests or mismatches are retried up to eight times, 30 seconds apart, to allow cache propagation; the job has a 30-minute overall timeout. A newer publication cancels an obsolete workflow, and the verifier rejects a commit that has been superseded on `gh-pages`. The live job is intentionally skipped on PRs because their output is not yet published. It is a post-publication alert, not a pre-merge gate or automatic rollback.

Open the live job's summary and download the `live-verification-<commit>` artifact from the workflow run. Its `deployment-verification.json` records the commit, deployment URL, overall result and per-file expected/actual SHA-256 hashes or errors when available. Reports are retained for 14 days. Preserve the report and successful run links in the release record, and manually check navigation/search on desktop and mobile; HTTP/content checks do not exercise browser behavior. See the [live-verification operating notes](https://github.com/The-Yerbas-Endeavor/yerbas-docs/blob/gh-pages/.github/POST_DEPLOYMENT.md) for the implementation's current operating details.

### 5. Investigate a failed or unfinished live check

| Symptom | Investigation and next step |
| --- | --- |
| Job is queued or has no runner | Check the run's runner-capacity message. No tests have failed merely because the job is queued. Keep protection enabled and wait for a runner. |
| Source build, tests or committed-site links fail | Inspect `Build and link checks` first. The live job depends on it and will not run after a failure. Correct the source or publishing output through a checked PR. |
| Pages deployment failed or was not found before the 15-minute wait expired | Check `pages build and deployment` for the exact same merge SHA, including its build and deploy jobs. Resolve the deployment failure or wait for a queued deployment to finish before retrying verification. An older successful deployment is not sufficient. |
| HTTP errors, redirects or different hashes | Read the affected URLs and errors in the JSON report. Fetch those URLs directly with a fresh request and compare with files at the report's commit. Check for transient network/cache issues and confirm `docs.yerbas.org` is serving the intended deployment. Persistent differences require a checked correction PR. |
| Missing release page, search index, 4.0.1.4 text, or restored Telegram content | Inspect the publishing commit and its selected source snapshot. Fix accidental omissions/regressions. For an intentional new release, update the assertions and documentation together through review rather than skipping verification. |
| Superseded commit or cancelled obsolete run | Follow the newer `gh-pages` commit's deployment and live-check run. Do not compare an older commit with the newer live site. |
| Missing report, checkout error, API error or overall job timeout | Inspect the failed step's logs; the verifier may not have reached report creation. Check GitHub service/permission errors and runner availability. Keep credentials out of logs and preserve read-only verification permissions. |

After a transient failure, rerun the failed job for the **current** publishing commit, or manually dispatch `Published documentation checks` with branch `gh-pages` selected. Manual dispatch verifies that branch's current commit and does not publish a new deployment. Recheck both the deployment result and the live job; do not mark the release verified just because the Pages job succeeded.

Make persistent content corrections or rollbacks through another checked `gh-pages` PR. Keep branch protection, the required build/link check, and the live assertions enabled throughout.
