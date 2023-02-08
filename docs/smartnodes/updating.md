---
title: "Updating"
sidebar_position: 3
---

# Updating your smartnode

Yerbas Smartnodes do require some maintenance to ensure they are up to date, available and providing service to the network. In order to maintain availability and receive consistent payments you should monitor your Smartnode and keep it always up to date.

## Manual update

Login to your Smartnode VIA SSH client.

```bash
./yerbas-cli stop
```

Confirm the daemon has stopped:

```bash
ps aux | grep raptoreumd
```

Obtain update from `https://yerbas.com/latest`

## Automatic update

Yerbas community member `dk808` created a great Update Script. If you installed your Smartnode **using `dk808`'s installation script**, this update script is the recommended way of updating.

Login with ssh and from the directory containing update.sh do:

```bash
./update.sh
```