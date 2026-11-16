---
sidebar_position: 4
---

# Powcache and bootstrap

A bootstrap is optional. Normal peer synchronization remains available; synchronization time depends on hardware, network and chain size.

Use the [Yerbas bootstrap repository](https://github.com/The-Yerbas-Endeavor/YERB-Bootstrap/releases) to inspect available snapshots, their network, height, contents and checksums. Do not assume an older bootstrap contains the history/index state needed by 4.0.1.4 recorded recovery.

Before restoring any snapshot, back up the complete wallet and configuration, stop the node, and wait for exit. Keep the original data directory intact until a replacement is verified. Never overwrite wallet files with a bootstrap or combine databases from unrelated snapshots.

`powcache.dat` and blockchain snapshots do not replace wallet backups. Use the [troubleshooting guide](/docs/wallet/troubleshooting/) and the exact startup diagnostic if history or indexes are missing. Do not delete all `.dat` files as a generic repair step.
