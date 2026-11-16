---
sidebar_position: 1
---

# Wallet backups and restoration

Use **File → Backup Wallet** or `backupwallet` to create an explicit backup. Keep encrypted copies offline and separately from the node. Automatic backup behavior depends on configuration; verify that a usable backup exists.

For CLI help:

```bash
./yerbas-cli help backupwallet
```

Back up the complete wallet, including local asset/reward and payout-job records. Seeds and private keys alone do not preserve all those records.

To restore or move a wallet, stop the node cleanly and wait for exit, preserve the current wallet and configuration, then restore the intended backup in the correct data directory. Start only one node against that directory and allow synchronization/rescanning as needed. Keep the original backup until balances and history are verified. Do not delete wallet files as a repair step.

See [troubleshooting](/docs/wallet/troubleshooting/) for unavailable history and [asset recovery](/docs/wallet/assets/) for local records.
