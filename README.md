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
- The existing root `.github/workflows/published-docs-checks.yml` preserved. Source workflows belong inside `_source/.github/`; do not overwrite the publishing workflow with them. Preserve the checkout's `.git/` directory.

Review `git diff --stat` and the staged diff. Confirm that only intended generated files, the source snapshot and release metadata changed. Commit and push the publishing topic branch, then open a PR with **base `gh-pages`**. Include the source SHA, build/link results, intentional route changes and any outstanding external-link issues in its description.

### 3. Verify checks before merging

The `Published documentation checks` workflow must report a successful `Build and link checks` job for the latest publishing PR revision. It installs the snapshot's locked dependencies, tests the checker, rebuilds and checks `_source/`, then validates local links/resources/fragments in the actual committed site and checks its publishing markers.

The workflow checks both builds but does not prove byte-for-byte equality between the committed site and a fresh rebuild. Review that the published files were copied from the selected source build. Do not treat a source-branch check or the later Pages deployment check as a substitute for this publishing PR check.

If the target branch advances, update the publishing branch and wait for fresh checks. Resolve failures through new commits to the PR; preserve the workflow rather than skipping it. Merge only when the required check succeeds and GitHub reports the PR is mergeable. Merging into `gh-pages` starts publication.

### 4. Verify deployment and the live site

In [Actions](https://github.com/The-Yerbas-Endeavor/yerbas-docs/actions), locate runs for the publishing PR's **merge commit SHA**. Wait for both `Published documentation checks` and `pages build and deployment` to complete successfully; inspect the Pages build and deploy jobs if either fails.

Then check [docs.yerbas.org](https://docs.yerbas.org) directly with fresh requests, rather than relying on search-engine caches. Confirm HTTP 200 responses and compare returned content against the reviewed build for the home page, download/upgrade guide, consensus, assets, smartnode recovery and social pages, plus `search-doc.json` and `lunr-index.json`. Confirm the 4.0.1.4 guidance is present, Telegram links remain absent, and navigation/search work on desktop and mobile.

Record the merge SHA, successful run links and live-verification results in the release record. If deployment fails or live content differs, investigate the workflow logs and caching first; make any correction or rollback through another checked `gh-pages` PR.
