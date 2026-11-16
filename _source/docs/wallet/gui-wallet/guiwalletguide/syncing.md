---
sidebar_position: 2
---

# Synchronization

Initial synchronization time depends on the chain size, storage, CPU, peers and network connection. There is no guaranteed minutes-to-an-hour completion time. Core 4.0.1.4 may also perform recovery-history indexing during an eligible upgrade.

Watch the wallet's synchronization indicator and inspect its details. Older screenshots elsewhere in the guide are illustrative; Qt 6 labels and appearance may differ. Until the wallet is caught up, displayed balances and transaction history may be incomplete.

For a daemon with RPC enabled, inspect:

```bash
./yerbas-cli getblockchaininfo
./yerbas-cli getnetworkinfo
./yerbas-cli getpeerinfo
```

In `getblockchaininfo`, review `blocks`, `headers`, `verificationprogress`, and `initialblockdownload` together. A progress estimate alone is not proof that the node has reached the current network tip. Check peer connectivity and startup diagnostics when progress stalls.

A bootstrap is optional. Routine upgrades do not require reindexing; missing history or recovery indexes require following the node's specific diagnostic. Do not delete databases or `.dat` files simply because synchronization is slow.

See [troubleshooting](/docs/wallet/troubleshooting/) and [recorded recovery](/docs/smartnodes/recovery/).
