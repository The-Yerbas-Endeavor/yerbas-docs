# Yerbas documentation source

This directory contains the editable Docusaurus source for [docs.yerbas.org](https://docs.yerbas.org). The review branch stores the generated website at the repository root and the source under `_source/`.

The documentation targets Core 4.0.1.4 binary source `f0e2dde5673580d5d5cac9aa21e16ebe6936dd05`. Read [verification notes](REVIEW-4.0.1.4.md) before changing release, consensus or wallet guidance.

## Build and inspect locally

Use Node.js and npm (the checked build used Node 22.23.4). From this directory:

```sh
npm ci --ignore-scripts --no-audit --no-fund
npm run build
npm run check:links
npm run test:links
npm run serve -- --host 127.0.0.1
```

The existing lockfile needs the checked-in `.npmrc` legacy peer resolution setting. Search indexes are created by the production build. `serve` previews that build locally; it does not deploy it. The historical Dockerfile has not been validated by this documentation update.

## Reviewing changes

- Edit `docs/`, `src/`, or configuration here, then rebuild and check links.
- Review changed commands against the exact Core source and release help; distinguish wallet policy from consensus.
- Keep the source and generated root website in the same review commit. Preserve `CNAME` and all existing routes unless a replacement is intentional.
- Do not use the deploy script during PR review. Merging a Pages publishing branch is a separate release decision.

`tools/check-links.py` checks a populated build for local files, resources and fragments; it fails for a missing or empty build. External URLs are listed for separate reachability checks.

`tools/capture-rpc-help.py` reads help/status from an already running isolated regtest node. Verify the release archive checksum first. Never point documentation tooling at a funded production wallet. It does not launch a node or submit transactions.
