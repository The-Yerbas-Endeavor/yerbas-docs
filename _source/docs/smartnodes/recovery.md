---
sidebar_position: 4
---

# Recorded quorum recovery in 4.0.1.4

The read-only status command is:

```bash
./yerbas-cli quorum recovery status
```

Authority-signed, fee-paying ON/OFF transactions record recovery history in the blockchain. The first ON cutover aligns to a future **720-block** boundary; later transitions use **30-block** boundaries. Submission, confirmation and effective activation are separate events. **ON has no automatic expiry.**

ON/OFF operations require the configured signing authority and a wallet to fund fees; they are not routine smartnode repair commands. The legacy SPORK_21 gossip command does not create a recovery transaction.

Validators must upgrade **before the first record is mined**. OFF retains the cutover and recorded history; it does not permit a safe downgrade to legacy validators. Quorum services can pause while replacement quorums form. LOW_LLMQ changes type 1, not the larger ChainLocks profile; clearing offline registrations and restoring quorum services are separate outcomes.

Eligible unpruned upgrades can automatically index validated pre-record history. Missing/pruned history or missing indexes after recorded transitions can still require restoration or reindexing. Follow the node's diagnostic message rather than deleting recovery databases or `sporks.dat` indiscriminately.

[Recovery RPC](https://github.com/The-Yerbas-Endeavor/yerbas/blob/f0e2dde5673580d5d5cac9aa21e16ebe6936dd05/src/rpc/rpcquorums.cpp) · [Recovery rules](https://github.com/The-Yerbas-Endeavor/yerbas/blob/f0e2dde5673580d5d5cac9aa21e16ebe6936dd05/src/llmq/quorums_recovery.cpp) · [Operator checklist](https://github.com/The-Yerbas-Endeavor/yerbas/blob/f0e2dde5673580d5d5cac9aa21e16ebe6936dd05/doc/signed-spork-release-checklist.txt) · [History migration](https://github.com/The-Yerbas-Endeavor/yerbas/blob/f0e2dde5673580d5d5cac9aa21e16ebe6936dd05/doc/low-llmq-history-migration.md)
