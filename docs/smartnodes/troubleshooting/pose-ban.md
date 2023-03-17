# PoSe ban
---
sidebar_position: 1
---

import Link from '@docusaurus/Link';

### Diagnosing

:::info

If there is a problem with your Smartnode and it is not available to properly offer its services to the network it will become "PoSe banned" and will not receive any further payments until it is fixed. Here are some of the most common reasons for receiving a PoSe ban:

:::

- yerbasd is unavailable or not functioning correctly (hung).
- Resource shortages (cpu, ram).
- Unstable network or outage.

You can check if your Smartnode is banned directly in the QT wallet in the Smartnodes tab, check the "My Smartnodes Only". Or by going to the Yerbas explorer > Smartnodes Tab > search for your Smartnode IP address.

### Resolving

1. Check if yerbasd is responsive;

```bash
./yerbas-cli getblockchaininfo
```

If the daemon responds quickly and "blocks" matches the explorer block height the daemon is fine. Quite possibly the PoSe ban was caused by a temporary issue such as resource issue, or network issues. Your PoSe ban should automatically reduce until 0 and be removed.

If the command from step 1 is very slow to respond or does not respond, yerbasd is in a hung state and needs to be killed. Kill it with:

```bash
ps aux  |  grep -i yerbasd  |  awk '{print $2}'  |  xargs sudo kill -15
```

2. If you see "No such process" kill was successful, if you see a process listed you will need to issue the command again to change -15 to -9 which is a harsher termination. Restart yerbasd:

```bash
./yerbasd
```

Wait for it to fully sync (same block height as block explorer). For fun you can watch it sync with:

```bash
tail -f ~/.yerbascore/debug.log # Ctrl + C to exit tail.
```

An alternative way to check and see when yerbasd is done syncing is to use the "top" command. While syncing yerbasd will consistently use nearly 100% of a core. When that use drops substantially it is done syncing. Depending on the nodes PoSe score it can take anywhere from 2 to 6 hours for PoSe ban to be lifted. To speed that process you can issue a "protx update_service" command and the ban will be lifted in 1-2 blocks.

Here is an example of a "protx update_service" command, this is issued in your local wallet > debug console.

```bash
protx update_service "7d62ce3bcf71825te84y5ca4b93a53583a8f1c9c70989e351c0f470088729a83" "your.smartnode.ip:10226" "3808471d6e52fe3b683474075cdf50192babe3b38203187ec0cg18fg54e439a4"
```

- First string in "" is the proTxHash. You can get this by right clicking your Smartnode in the QT wallet Smartnode list > Copy proTxHash.

- Second is self explanatory :)

- Third is the Smartnodes BLS private key. This is stored on your Smartnode in ~/.yerbascore/yerbas.conf and you can retrieve it easily by doing:

```bash
cat ~/.yerbascore/yerbas.conf | grep bls
```

After firing the protx update_service command you should see status change on your Smartnode list from PoSe_banned to ENABLED in anywhere from 1 minute to 6 minutes.

3. Resolving resource related PoSe ban issues. Make sure yerbasd always has access to at least 2 full CPU cores. We strongly recommend against mining on your Smartnodes. Mining on them will endup in performance issues and PoSe bans. If you find yerbasd is sometimes not running this is often due to it being killed by OOM (Out Of Memory Killer) this is a process of the Linux kernel that will kill certain processes when the system is critically low on memory. Search your system logs to help diagnose the issue, as an example on ubuntu 18:

```bash
grep -i 'killed process' /var/log/syslog
```

:::note

As an example, if you have a VPS with 4 cores and want to also use it to mine, make sure the miner only uses max 3 cores. (Replace with) We strongly recommend against mining on your Smartnodes. Mining on them will endup in performance issues and PoSe bans.

:::

## Monitoring Your Smartnode

Uptime is crucial and to make sure your Smartnode is online you should monitor it, there are a few ways to do this:

1. If you used dk808 script to setup your Smartnode it would have asked you if you wanted to monitor your Smartnode. This check script checks your Smartnode status on our block explorer every hour (VIA cronjob). If it finds that your node has been PoSe banned it will kill yerbasd and restart it.

2. External monitoring: This uses an external monitor such as https://uptimerobot.com to check if your Smartnode port is open every 5 minutes. If port is closed you can receive notification to any device and or by email. It is easy to setup and free. Default Smartnode port is `10226`.

## Increase Smartnode Collateral

As the Yerbas network matures Smartnode collateral ramps up and you will need to recreate your Smartnode in order to increase the collateral amount. Here are the steps needed:

- In your local wallet that holds the Smartnode collateral go to Send > Inputs. If you do not see the "Inputs" button you must enable coin control. `Settings > Options > Wallet > Enable coin control features`.

You will see there your Smartnode collateral and it will be marked with a lock. We need to unlock it, so mark the box for that input and click the "toggle lock state" button to unlock it. That input is now spendable and your Smartnode is deactivated.

- Create a new collateral receiving address, make sure to label it well.
- Send the full collateral amount in one transaction to the new collateral receiving address.
- Wait until the transaction has 2 confirmations.

### Build the protx quick_setup command

:::note

By default the `protx quick_setup` command generates a Smartnode config file in the same directory as the .exe files you use to open the wallet. As an example, if you are running `yerbas-qt.exe` from `C:\Program Files\` you will need to open it with Administrator privilege's (right click > Run as Administrator). Otherwise it will fail to create the Smartnode configuration file.

:::

You need the following information:

- Smartnode Server IP.
- Port (default = 10226)
- Collateral fee address. (see below note)
- Collateral transaction ID.
- Collateral index (this is listed when doing “smartnode outputs usually it will be 1)

:::note

Collateral fee address can be any address in your wallet that has funds to pay for the transaction, the transaction fee is small as an example I just made one transaction and the cost was 0.00000525 YERB. To see which of your addresses have funds use "listaddressbalances” in debug console or yerbas-cli.

:::

**protx quick_setup command example:**
```bash
./yerbas-cli protx quick_setup "c4bbcde9771668fa640c263d4b964f688b0f039f7b684e715d92e4012369fea6" "1" "209.151.154.120:10226" "RFbWv94ZfueciwVVpHLMdqFayaXAS4sBxP"
```

So structure is: `transaction ID | collateral index | smartnode IP | port | collateral fee address`

Using `QT > Debug Console` just remove "./yerbas-cli" from the above command. Fire the command and if it is successful you will see a bunch of output, the command has created the needed yerbas.conf file for your Smartnode. Check the last line of the output as it will tell you the location of the .conf file, notice that it is named differently for example: `RMsneH79j9gioE1jFsuxTFUxaZ1JSp53SN_yerbas.conf`

That is your YERB collateral address that you created at the start of this guide and is so the .conf file is easy to identify and link to corresponding smartnode. As this is a collateral upgrade all we need from the generated .conf file is the `smartnodeblsprivkey`.

On your Smartnode VPS / server:

Stop daemon:

```bash
./yerbas-cli stop
```

Edit yerbas.conf:

```bash
nano ~/.yerbascore/yerbas.conf
```

Swap out the old bls private key with the new, exit, and start yerbasd:

```bash
./yerbasd
```

Give it 5 minutes to catch up on any missed blocks.
Check smartnode status:

```bash
./yerbas-cli smartnode status
```

The output you want to see is:

```json
},
"state": "READY",  
"status": "Ready" 
}
```

If all went well you should now have a functioning Smartnode at the increased collateral.