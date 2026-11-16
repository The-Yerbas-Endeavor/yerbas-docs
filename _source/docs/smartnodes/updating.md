---
sidebar_position: 3
---

# Updating your smartnode

Follow the [4.0.1.4 upgrade procedure](/docs/wallet/quick-start/). Back up the control wallet and configuration; stop the daemon cleanly and wait for exit before replacing application files.

```bash
./yerbas-cli stop
```

Start the new daemon with the existing data directory and configuration. After synchronization, inspect:

```bash
./yerbas-cli getnetworkinfo
./yerbas-cli getblockchaininfo
./yerbas-cli smartnode status
./yerbas-cli quorum recovery status
```

Check `protx info` for your registration as needed. Do not assume success from a process merely being present. Review any service manager or installation script for its executable paths before restarting it.

Validators must upgrade before the first recovery record is mined, not just before its effective height. OFF does not undo cutover or make downgrading safe; see [recovery](/docs/smartnodes/recovery/).
