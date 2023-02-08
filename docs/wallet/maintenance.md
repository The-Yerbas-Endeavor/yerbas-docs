
# Maintenance

Learn how to perform routine or special maintenance tasks on your YerbasCore wallet.   
Regular maintenance is recommended for a proper functioning of your wallet.

## Restoring from backup

Each time your wallet closes, it automatically makes a backup of your wallet.dat file. These are automatically renamed by their date of creation, and copied to the `backups` folder in your *YerbasCore Data directory*.

1. Stop the wallet, wait two minutes.
2. Rename the current wallet.dat so it does not get overwritten, if you know for sure it is not used you can delete it.
3. Copy in your backup and if necessary rename it to wallet.dat.
4. Start your wallet, wait for it to rescan and fully resynchronize with the Yerbas blockchain.

To restore a Yerbascore wallet which is using HD mode with mnemonic phrase see below:

:::note Info

You should always have a recent encrypted wallet.dat backup saved in multiple locations as well as offline, such on a safely stored USB drive. One copy is no copies, two copies is one copy.

:::

### Moving Wallet To Another PC

1. Close Yerbascore.
2. Transfer the wallet.dat file from Yerbascore data directory to the other PC.
3. Alternatively you can copy the entire Yerbascore directory over to save time on synchronizing.
4. Create the Yerbascore directory on the destination PC, check the Restoring From Backup part of this guide for paths and naming.
5. Put your wallet.dat in this directory as well as any other files and folders (if you copied over the entire Yerbascore directory).
6. Start Yerbascore.
