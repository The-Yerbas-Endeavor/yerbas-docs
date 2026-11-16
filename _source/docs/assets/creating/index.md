# Creating assets

Mainnet v4 wallet operations are restricted below tip height **1,195,400**. See [availability and backup guidance](/docs/wallet/assets/). This wallet safeguard is distinct from consensus validation.

In the GUI, use Asset Manager → Create and review the name, quantity, units, reissuability, metadata and fee before confirming. Preserve your owner token and wallet backup for administrative operations.

CLI users should inspect `./yerbas-cli help issue`, `./yerbas-cli help issueunique`, and `./yerbas-cli help reissue`. These commands create transactions; help is safe to inspect, but invoking issuance spends funds. See [asset fees](/docs/assets/asset_fees/) and [root/sub/unique assets](/docs/assets/creating/the_big_three/).

[Asset implementation](https://github.com/The-Yerbas-Endeavor/yerbas/blob/f0e2dde5673580d5d5cac9aa21e16ebe6936dd05/src/assets/assets.cpp) · [Asset structures](https://github.com/The-Yerbas-Endeavor/yerbas/blob/f0e2dde5673580d5d5cac9aa21e16ebe6936dd05/src/assets/assets.h) · [RPC implementation](https://github.com/The-Yerbas-Endeavor/yerbas/blob/f0e2dde5673580d5d5cac9aa21e16ebe6936dd05/src/rpc/assets.cpp)
