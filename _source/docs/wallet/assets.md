---
sidebar_position: 3
---

# Assets in Core 4.0.1.4

The Qt 6 Asset Manager offers **My Assets**, asset search, balances, selected-asset sending, metadata/details, and wallet asset history. History is local to the selected wallet, not a network-wide asset index.

## Mainnet availability

Creation, sending, reissuance, ownership transfers, and asset reward payouts are blocked by v4 wallet policy below **tip height 1,195,400**. Receiving/viewing assets and ordinary YERB payments remain available. Testnet and regtest are unaffected. A rollback below the height relocks these operations.

The estimated date was January 1, 2027, 00:00 UTC; the actual height controls availability. This is a **wallet safeguard, not a consensus prohibition** on older wallets or custom/raw transaction tools.

## Backup and recovery

Back up the complete wallet using the GUI backup function or `backupwallet`. Asset/reward records and payout-job state are persisted in `wallet.dat`; private keys or a seed alone do not preserve all of this local state. Keep referenced metadata separately. Interrupted payout reservations can remain for diagnosis; do not blindly resend a payout.

[Activation policy](https://github.com/The-Yerbas-Endeavor/yerbas/blob/f0e2dde5673580d5d5cac9aa21e16ebe6936dd05/src/wallet/assetissuance.h) · [Asset Manager](https://github.com/The-Yerbas-Endeavor/yerbas/blob/f0e2dde5673580d5d5cac9aa21e16ebe6936dd05/doc/asset-manager.md) · [Wallet storage](https://github.com/The-Yerbas-Endeavor/yerbas/blob/f0e2dde5673580d5d5cac9aa21e16ebe6936dd05/doc/wallet-asset-storage.md)
