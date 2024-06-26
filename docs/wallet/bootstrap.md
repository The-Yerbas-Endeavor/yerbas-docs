---
sidebar_position: 4
title: "Powcache & Bootstrap"
---

# Using Powcache & Bootstrap

The bootstrap data is provided to speed up syncing. Simply download the bootstrap data and extract to your Yerbas data directory.
Syncing without the bootstrap can take a significant amount of time.

## Download

<div>
  <div className="container padding--sm">
    <h2>v3.1.4.20 or up</h2>
    <div className="row padding--sm">
      <div className="col col--4">POW Cache</div>
      <div className="col col--6">
        <a
          class="button button--primary"
          href="https://github.com/The-Yerbas-Endeavor/yerbas/releases/download/v3.1.4.20/powcache.dat"
          download
        >
          💾 POW Cache (.dat)
        </a>
      </div>
    </div>
    <div className="row padding--sm">
      <div className="col col--4">Classic Bootstrap</div>
      <div className="col col--6">
        <a
          class="button button--primary"
          href="https://github.com/The-Yerbas-Endeavor/yerbas/releases/download/v3.1.4.20/bootstrap.zip"
          download
        >
          💾 Bootstrap without indexes (.tar.gz)
        </a>
      </div>
    </div>
  </div>
</div>

## Usage

Follow these steps:

- Delete folders and files:
  - blocks
  - llmq
  - chainstate
  - evodb
  - powcache.dat
- Extract to the appropriate data directory:
  - Unix/Linux: `~/.yerbascore`
  - Windows: `%AppData%\YerbasCore`
- Restart Yerbas Daemon (yerbasd) and wait for sync

:::danger Wallet.dat
Do not delete your wallet.dat file without having a backup! This file holds your access to your wallet data. Losing it can mean losing your funds!
:::
