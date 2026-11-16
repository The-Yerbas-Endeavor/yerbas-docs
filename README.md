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

Use `npm run verify` to run the same tests, build and link validation locally. `npm run deploy` runs this verification through `predeploy` and stops if a check fails. The workflow only validates; publication remains a separate release decision. Require a successful check for the exact source revision before publishing. Repository branch protection must require `Build and link checks` if merges are to be blocked automatically; this workflow alone does not change branch protection or prevent direct writes to `gh-pages`.
