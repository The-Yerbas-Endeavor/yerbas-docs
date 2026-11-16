---
sidebar_position: 2
---

# Mainnet facts verified against 4.0.1.4

This page describes binary source commit `f0e2dde5673580d5d5cac9aa21e16ebe6936dd05`, not the moving default branch.

| Parameter | Mainnet value | Code |
| --- | --- | --- |
| Target block spacing | 120 seconds; not a guaranteed interval | [Source](https://github.com/The-Yerbas-Endeavor/yerbas/blob/f0e2dde5673580d5d5cac9aa21e16ebe6936dd05/src/chainparams.cpp) |
| P2P port | 15420 | [Source](https://github.com/The-Yerbas-Endeavor/yerbas/blob/f0e2dde5673580d5d5cac9aa21e16ebe6936dd05/src/chainparams.cpp) |
| RPC port | 15419 | [Source](https://github.com/The-Yerbas-Endeavor/yerbas/blob/f0e2dde5673580d5d5cac9aa21e16ebe6936dd05/src/chainparamsbase.cpp) |
| Advertised protocol | 70224; this alone does not exclude older peers | [Source](https://github.com/The-Yerbas-Endeavor/yerbas/blob/f0e2dde5673580d5d5cac9aa21e16ebe6936dd05/src/version.h) |
| Checkpoint | 1,152,420 | [Source](https://github.com/The-Yerbas-Endeavor/yerbas/blob/f0e2dde5673580d5d5cac9aa21e16ebe6936dd05/src/chainparams.cpp) |
| Smartnode collateral | Height-dependent; see [schedule](/docs/smartnodes/requirements/) | [Source](https://github.com/The-Yerbas-Endeavor/yerbas/blob/f0e2dde5673580d5d5cac9aa21e16ebe6936dd05/src/smartnode/smartnode-collaterals.cpp) |

Checkpoint hash: `53c34a2a736776ec3ff6ca11bcaa05c6fe3e4b52853352ab76608b3ff80428fa`.

## Subsidy and payments

`GetBlockSubsidy` uses **the previous block height**. It returns 4.20 YERB below previous height 420, otherwise defaults to 100 until the explicit reductions. The 80-YERB range is strictly **1,000,000 < previous height < 2,000,000**. Subsequent million-height ranges return 70, 50, 40, 20, 10, 9, 8, 7, 6, 5, 4.20, 3, 2, and 1 YERB; from previous height 16,000,000 the function returns 0.420 YERB. Do not derive a Bitcoin-style halving or total supply from `nSubsidyHalvingInterval` or `MAX_MONEY`.

The mainnet founder schedule specifies 5% with its configured activation boundary. Smartnode reward percentage is 0 through height 4,200 and 20 thereafter, but `GetSmartnodePayment` returns zero when the previous deterministic list has fewer than ten registrations. Special asset transaction fees have separate share handling. These are code conditions, not guaranteed individual payouts.

[Subsidy and payment functions](https://github.com/The-Yerbas-Endeavor/yerbas/blob/f0e2dde5673580d5d5cac9aa21e16ebe6936dd05/src/validation.cpp) · [Founder and collateral schedules](https://github.com/The-Yerbas-Endeavor/yerbas/blob/f0e2dde5673580d5d5cac9aa21e16ebe6936dd05/src/chainparams.cpp) · [Money-range constant](https://github.com/The-Yerbas-Endeavor/yerbas/blob/f0e2dde5673580d5d5cac9aa21e16ebe6936dd05/src/amount.h)

## Wallet policy versus consensus

The [asset unlock at tip 1,195,400](/docs/wallet/assets/) is a v4 wallet safeguard. [Recorded recovery](/docs/smartnodes/recovery/) instead affects validation and requires validators to upgrade before records are mined. Testnet/regtest parameters must not be substituted for mainnet values.
