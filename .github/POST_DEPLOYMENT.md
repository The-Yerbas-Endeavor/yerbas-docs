# Automatic live documentation verification

`Published documentation checks` retains the required `Build and link checks`
job on publishing PRs. That job also runs regression tests for the live verifier.
PRs do not compare an unpublished commit with the live site.

After a push to `gh-pages`, `Verify live 4.0.1.4 docs` runs on
`ubuntu-24.04-arm` after the build/link job passes. It checks out that exact
commit, waits up to 15 minutes for its successful `pages build and deployment`
run, then compares every tracked public file with `https://docs.yerbas.org`.
The expected files are the committed publishing output checked by the required
job, not a separate rebuild. `_source/`, `.github/`, hidden metadata, `CNAME`,
README and the release audit are excluded from public-file comparisons.

Each request must return HTTP 200 without redirection and exactly matching bytes.
The home page, release/consensus/recovery pages, social page and both search
indexes must exist. Release pages must contain 4.0.1.4; HTML, JavaScript and JSON
must not contain Telegram labels or links. Update these explicit release
assertions through review when publishing a later release.

The verifier retries failed requests or content mismatches up to eight times,
30 seconds apart, to allow cache propagation. It fails on persistent differences,
an unsuccessful deployment, a deployment timeout, or a superseded commit.
Workflow concurrency cancels obsolete runs when a new publication starts.
The job has read-only repository/Actions access and never deploys or changes rules.

Inspect the job summary and the `live-verification-<commit>` JSON artifact
(retained for 14 days) for the exact commit, deployment URL, per-file hashes and
errors. A failed live check is a post-publication alert, not an automatic rollback.
Correct content through another checked `gh-pages` PR. To retry after transient
cache/network issues, rerun the failed job or manually run the workflow on the
current `gh-pages` branch. A superseded commit must not be used to verify a newer
deployment.

Preserve the entire root `.github/` directory when preparing publishing commits,
including this document, the workflow and `.github/scripts/`. The `_source/`
snapshot is separate. Branch protection and its required pre-merge check remain
unchanged; the live check cannot run before the new commit has been published.
