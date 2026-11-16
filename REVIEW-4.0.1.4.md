# Documentation verification: Core 4.0.1.4

## Provenance

- Destination base: `gh-pages` at `4a42d9fdc395a98be083cc04f77e9d9c2aa15595`.
- Editable baseline: `develop` at `42c0695339497894d2cd09285d3fed40d6529dcf`, with missing asset/X16R routes and current static images recovered from `main` at `7d1219e618da2197196672e98be17e7f405c1d8c`.
- Core binary source: `f0e2dde5673580d5d5cac9aa21e16ebe6936dd05` (the `4.0.1.4` branch at inspection).
- Release: https://github.com/The-Yerbas-Endeavor/yerbas/releases/tag/v4.0.1.4 . The tag remains at `f939795`, unlike the refreshed binary source.
- Ubuntu 22.04 archive was downloaded from the release, verified against its SHA256SUMS, extracted, and reported `v4.0.1.4-f0e2dde`.

The PR includes the complete editable source under `_source/` and a regenerated site at the repository root. Review prose under `_source/docs/`; generated HTML, JavaScript and search indexes reflect the same build. No branch merge or deployment was performed.

## Content verification

- `src/chainparams.cpp`: mainnet 120-second target, P2P 15420, checkpoint 1,152,420, collateral schedule and founder/asset reward shares.
- `src/chainparamsbase.cpp`: mainnet RPC 15419.
- `src/version.h`: advertised protocol 70224 (not a claim that all legacy peers are disconnected).
- `src/smartnode/smartnode-collaterals.cpp`: inclusive schedule boundaries; mainnet 69,000 YERB for heights 1,096,421–1,369,420, then 100,000.
- `src/evo/deterministicmns.cpp`: confirmation, PoSe and registration behavior; removed fixed readiness/restart guarantees.
- `src/validation.cpp`: previous-height subsidy boundaries, payment conditions, and asset-fee allocation. MAX_MONEY is not presented as a total-supply schedule.
- `src/assets/assets.cpp`: fee table, including 42 YERB qualifier fee, 4.2 YERB message channel fee, and zero additional NULL_ADD_QUALIFIER fee (ordinary fees still apply).
- `src/wallet/assetissuance.h`: mainnet tip 1,195,400 safeguard, not consensus; testnet/regtest exclusion and re-lock below height.
- `src/rpc/rpcquorums.cpp` and `src/llmq/quorums_recovery.cpp`: signed recovery, first 720-block/later 30-block boundaries, no automatic expiry, upgrade before mining records, no safe legacy downgrade after OFF.
- `src/rpc/rpcevo.cpp`: registration arguments and returned `operatorPublic`/`operatorSecret`; documented the mismatch with old labels in RPC help.
- `.github/workflows/build.yaml` and `doc/ci-qt-artifacts.md`: seven release platform layouts and runtime distinctions.

Every source link uses the exact binary commit. Historical PDFs are clearly marked and exposed as download/open links rather than a native-canvas-backed viewer. Obsolete exchange/bridge claims and RTM market links were removed; no new trading recommendations were added.

## Checks

- Locked dependency installation: `npm ci --ignore-scripts --no-audit --no-fund` with checked-in `.npmrc` enabling legacy peer resolution. Modern peer resolution without that setting rejects the existing lockfile. Dependency versions were not upgraded.
- Production `npm run build`, with broken Docusaurus links and Markdown links configured as errors.
- Built HTML link/fragment/resource check: `python3 tools/check-links.py build`.
- All original gh-pages HTML routes retained; asset pages recovered rather than dropped.
- 188 RPC method help entries captured from the checksum-verified release in an empty regtest wallet with peer networking disabled. Five additional subcommand help pages were captured with separate method/subcommand arguments.
- Read-only `getblockchaininfo`, `getnetworkinfo`, and `getwalletinfo` succeeded with zero peers. `quorum recovery status` correctly returned unsupported-network error -8 on default regtest; this is not a successful mainnet recovery test. Test node stopped cleanly.
- HTTP examples normalize the temporary test RPC port to mainnet 15419; help text otherwise reflects release output apart from whitespace. RPC help can contain upstream wording defects; the known quick_setup result-field defect is noted explicitly.
- Desktop/mobile rendered pages, client-side Assets navigation, and mobile navigation checked in a temporary headless browser. No local HTTP failures or JavaScript exceptions.
- External URL reachability checked with read-only HTTP HEAD requests; reachable does not mean a third-party service is endorsed or its contents audited.

## Limits

This is a documentation verification, not a new full historical mainnet replay or consensus test suite. Transactions, real-money registration, recovery ON/OFF, and payouts were not broadcast. Only the Ubuntu 22.04 release was executed locally; other package layouts were checked against the release and pinned build workflow. Historical videos, screenshots, third-party miners and wallets are not newly certified for 4.0.1.4. Prior release validation is not represented as newly repeated evidence.

## Rebuild without deploying

From `_source/`:

```sh
npm ci --ignore-scripts --no-audit --no-fund
npm run build
python3 tools/check-links.py build
```

Review the resulting `build/` before copying generated files to a review branch. Do not invoke the deployment script during review. Search index names include build timestamps, so byte-for-byte reproducibility requires controlling that build input; source and content provenance are pinned here.
