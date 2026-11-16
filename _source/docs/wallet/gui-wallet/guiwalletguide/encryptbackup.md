---
sidebar_position: 3
---

# Encrypt and back up your wallet

## Encrypting

For an unencrypted wallet, select **Settings → Encrypt Wallet**, choose a strong passphrase, and store it safely. Encryption protects private keys while the wallet is locked; it does not prevent read-only wallet operations or protect a compromised computer.

Core 4.0.1.4 closes the GUI after successful encryption. Wait for it to exit, reopen it, and make a new backup of the encrypted wallet. An old unencrypted HD backup still contains the same seed and can access funds; encrypting the current wallet does not encrypt older copies.

## Complete wallet backups

Use **File → Backup Wallet**, or inspect the CLI command before choosing a destination:

```bash
./yerbas-cli help backupwallet
```

Keep the complete wallet backup separately from the computer. It contains keys and local asset/reward and payout-job records. A seed phrase or private-key export alone does not preserve all of these records. Keep referenced metadata files separately as well.

Do not rely on a fixed number of backups taken at shutdown. In this release, `-createwalletbackups` defaults to **3**, is limited to **0–10**, and **0 disables automatic backups**. Automatic backup attempts occur during wallet initialization and other wallet/mixing operations; they can fail. Check that a usable backup exists and retain your own offline copies.

## Key exports are not complete backups

`dumpprivkey` and `dumpwallet` export sensitive key material. They are not substitutes for a complete wallet backup and must not be posted in support chats or stored as ordinary unprotected documents. `dumpwallet` takes a destination filename; do not assume it writes into the application's executable folder.

See [wallet maintenance](/docs/wallet/maintenance/) for restoration and [asset backup scope](/docs/wallet/assets/).

[Encryption behavior](https://github.com/The-Yerbas-Endeavor/yerbas/blob/f0e2dde5673580d5d5cac9aa21e16ebe6936dd05/src/qt/askpassphrasedialog.cpp) · [Automatic backups](https://github.com/The-Yerbas-Endeavor/yerbas/blob/f0e2dde5673580d5d5cac9aa21e16ebe6936dd05/src/wallet/wallet.cpp)
