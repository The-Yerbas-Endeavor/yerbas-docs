"use strict";(self.webpackChunkyerbas_docs=self.webpackChunkyerbas_docs||[]).push([[9377],{63160:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>d});var n=a(87462),o=(a(67294),a(3905));a(22004);const l={pagination_previous:"smartnodes/requirements",pagination_next:"wallet/bootstrap"},s="Manual Setup",r={unversionedId:"smartnodes/installation/manualsetup",id:"smartnodes/installation/manualsetup",title:"Manual Setup",description:'For the following part of the guide you need to be root. depending on your VPS provider they may have only provided you with a "sudo" user. You can change to root by doing:',source:"@site/docs/smartnodes/installation/manualsetup.mdx",sourceDirName:"smartnodes/installation",slug:"/smartnodes/installation/manualsetup",permalink:"/docs/smartnodes/installation/manualsetup",draft:!1,editUrl:"https://github.com/The-Yerbas-Endeavor/yerbas-docs/tree/develop/docs/smartnodes/installation/manualsetup.mdx",tags:[],version:"current",frontMatter:{pagination_previous:"smartnodes/requirements",pagination_next:"wallet/bootstrap"},sidebar:"sidebarSmartnodes",previous:{title:"Requirements",permalink:"/docs/smartnodes/requirements"},next:{title:"Powcache & Bootstrap",permalink:"/docs/wallet/bootstrap"}},i={},d=[{value:"Guide",id:"guide",level:2},{value:"1. Update Server",id:"1-update-server",level:3},{value:"2. Add 4GB of SWAP",id:"2-add-4gb-of-swap",level:3},{value:"3. Enable UFW &amp; Open Ports",id:"3-enable-ufw--open-ports",level:3},{value:"4. Configure Fail2Ban",id:"4-configure-fail2ban",level:3},{value:"Local Wallet Setup",id:"local-wallet-setup",level:2},{value:"1. Install and Sync Local Wallet:",id:"1-install-and-sync-local-wallet",level:3},{value:"2. Build protx command for control wallet",id:"build-protx",level:3},{value:"Final steps",id:"final-steps",level:2},{value:"Video guides",id:"video-guides",level:2}],u={toc:d};function p(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"manual-setup"},"Manual Setup"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},'For the following part of the guide you need to be root. depending on your VPS provider they may have only provided you with a "sudo" user. You can change to root by doing:'),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo su\n"))),(0,o.kt)("h2",{id:"guide"},"Guide"),(0,o.kt)("h3",{id:"1-update-server"},"1. Update Server"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"apt update && apt upgrade -y\napt install unzip fail2ban -y\n")),(0,o.kt)("sub",null,"Unzip is required to unpack the bootstrap."),(0,o.kt)("h3",{id:"2-add-4gb-of-swap"},"2. Add 4GB of SWAP"),(0,o.kt)("p",null,"First check to make sure there is not already swap active:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"free -h\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"If no swap it will return:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"Swap:            0B          0B          0B\n"))),(0,o.kt)("p",null,"Create SWAP and Activate:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'dd if=/dev/zero of=/swapfile bs=1k count=4096k\nchmod 600 /swapfile\nmkswap /swapfile\nswapon /swapfile\necho "/swapfile       swap    swap    auto      0       0" | tee -a /etc/fstab\nsysctl -w vm.swappiness=10\necho vm.swappiness = 10 | tee -a /etc/sysctl.conf\n')),(0,o.kt)("div",{class:"alert alert--info",role:"alert"},(0,o.kt)("sub",null,"Note: ",(0,o.kt)("code",null,"swappiness = 10")," tells system only to use it if absolutely needed.")),(0,o.kt)("h3",{id:"3-enable-ufw--open-ports"},"3. Enable UFW & Open Ports"),(0,o.kt)("p",null,"(Optional)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"apt install ufw -y\nufw default deny incoming\nufw default allow outgoing\nufw allow ssh\nufw allow 15420/tcp\nufw enable\n")),(0,o.kt)("h3",{id:"4-configure-fail2ban"},"4. Configure Fail2Ban"),(0,o.kt)("p",null,"As I am not bothering with setting up SSH login with keys rather then password based login need to keep something from the bots and kiddies brute forcing our SSH service."),(0,o.kt)("p",null,"Setup jail for bad guys hitting SSH, and set it to ban after three failed logins to SSH:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"nano /etc/fail2ban/jail.local\n")),(0,o.kt)("p",null,"Copy and paste the following into the file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"[sshd]\nenabled = true\nport = 22\nfilter = sshd\nlogpath = /var/log/auth.log\nmaxretry = 3\n")),(0,o.kt)("p",null,"Reboot the server:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"reboot\n")),(0,o.kt)("p",null,"Add a system user to run yerbasd:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"adduser <username_here>\n")),(0,o.kt)("p",null,"Get Yerbas wallet / daemon and bootstrap:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'wget https://github.com/The-Yerbas-Endeavor/yerbas/releases/download/v2.1.1.4/yerbas-ubuntu20-2.1.1.4.tar.gz\ntar -xvf yerbas-ubuntu20-2.1.1.4.tar.gz\ncd ..\nmkdir ~/.yerbascore && touch ~/.yerbascore/yerbas.conf\necho "daemon=1" >> ~/.yerbascore/yerbas.conf\ncd .yerbascore\nwget https://github.com/The-Yerbas-Endeavor/yerbas/releases/download/v3.0.0.1/powcache.dat\ncd ~/yerbas-build\n./yerbasd\n')),(0,o.kt)("admonition",{title:"Info",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You should see Yerbasd server starting. You can confirm it is running ",(0,o.kt)("code",null,"top -c")," it will be using 100% CPU (1 core). This shows you it is working, we will return to it later.")),(0,o.kt)("h2",{id:"local-wallet-setup"},"Local Wallet Setup"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"This part of the guide is to get your local wallet or control wallet setup. If you already have Yerbas core wallet running you can skip to next section.")),(0,o.kt)("h3",{id:"1-install-and-sync-local-wallet"},"1. Install and Sync Local Wallet:"),(0,o.kt)("p",null,"For this step, you will need the YerbasCore wallet installed. "),(0,o.kt)("p",null,"Follow our ",(0,o.kt)("a",{parentName:"p",href:"docs/wallet/"},"YerbasCore Wallet")," guides for detailed instructions on how to do this."),(0,o.kt)("p",null,"To speed up the synchronization, use our POWCache or Bootstrap packages: ",(0,o.kt)("a",{parentName:"p",href:"docs/wallet/bootstrap"},"Using Powcache & Bootstrap")),(0,o.kt)("p",null,"Grab bootstrap from github release and unpack in the above directory (highly recommended as reduces sync time drastically)"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"If you already have a Yerbas wallet remove the following folders before using the bootstrap (make sure wallet is closed before using bootstrap)\nblocks\nchainstate\nevodb\nllmq\nTo use the bootstrap ",(0,o.kt)("code",null,"right click > unzip"),". Copy contents to the new directory you created above.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Start wallet and let it finish syncing."),(0,o.kt)("li",{parentName:"ul"},"Encrypt wallet (Settings > Encrypt Wallet)"),(0,o.kt)("li",{parentName:"ul"},"Create new receiving address"),(0,o.kt)("li",{parentName:"ul"},"Backup wallet.dat (File > Backup Wallet). Store in multiple locations."),(0,o.kt)("li",{parentName:"ul"},"Dump private key for receiving address (this should be printed and stored offline in multiple locations):")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'walletpassphrase password time (in seconds)\ndumpprivkey "address" (address is the receiving address you sent the 1 million YERB to)\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Send 28,000 YERB to self (this is current collateral amount)"),(0,o.kt)("li",{parentName:"ul"},"Wait for 2 confirmations")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The private key only allows you to restore the matching receiving address. If you setup multiple nodes you should dump the private key for each collateral receiving address.")),(0,o.kt)("h3",{id:"build-protx"},"2. Build protx command for control wallet"),(0,o.kt)("p",null,"Here is an example protx quick_setup command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"d7898f44c6bdc39a49b0917d5c6bcb61455270ddb9e7eb1168a6b745434daf26 1 194.113.73.87:15420 yaDfcdCupB1T5YoVRjYr8fXCvB8U5AuNX8\n")),(0,o.kt)("p",null,"The structure from left to right is:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("code",null,"Transaction ID"),': In your wallet go to "Transactions" right click the one you sent yourself earlier and "Copy Transaction ID". Replace the Transaction ID in example.'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("code",null,"Collateral index"),": Tools > Debug console. Type smartnode outputs to check if 1 or 0. Adjust example command if needed."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("code",null,"Your smartnode server IP and port"),". Replace example IP with your Smartnode server IP, leave port as is."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("code",null,"Fee address"),': This is any address in your wallet which contains enough YERB to pay the fee (cannot be the address which you sent the 1 million YERB to). When you enter the protx quick_setup command it is a transaction and needs to be paid for. It is a very small amount 1/2 an YERB is more than enough. In Debug console do "listaddressbalances" to show all addresses with a balance, choose one and replace address in example command.')),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Enter the protx quick_setup command in Debug console. This will create a .conf file for that node in the same directory you ran the wallet from. Open it and copy the contents. ",(0,o.kt)("u",null,(0,o.kt)("a",{parentName:"p",href:"https://youtu.be/55ot-iT2GFc?t=1196"},"See this part in the video guide.")))),(0,o.kt)("h2",{id:"final-steps"},"Final steps"),(0,o.kt)("p",null,"Back to the smartnode server:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"~./yerbas-cli stop\nnano ~/.yerbascore/yerbas.conf\n")),(0,o.kt)("p",null,"Paste in what you copied from the .conf file made during the protx command, save and exit."),(0,o.kt)("p",null,"When done with this, run yerbasd from the terminal:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"~/./yerbasd\n")),(0,o.kt)("p",null,"When this is done, wait a couple minutes until running ",(0,o.kt)("inlineCode",{parentName:"p"},"~/./yerbas-cli smartnode status")," to check the status of your smartnode. This should return: ",(0,o.kt)("inlineCode",{parentName:"p"},"Ready Ready")),(0,o.kt)("admonition",{title:"Success!",type:"success"},(0,o.kt)("p",{parentName:"admonition"},"Your Smartnode should now be running!")),(0,o.kt)("h2",{id:"video-guides"},"Video guides"))}p.isMDXComponent=!0}}]);