"use strict";(self.webpackChunkyerbas_docs=self.webpackChunkyerbas_docs||[]).push([[9643],{6021:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>c,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var n=a(7462),o=(a(7294),a(3905));a(9960);const s={sidebar_position:3},r=void 0,l={unversionedId:"smartnodes/maintenance",id:"smartnodes/maintenance",title:"maintenance",description:"PoSe Bans",source:"@site/docs/smartnodes/maintenance.mdx",sourceDirName:"smartnodes",slug:"/smartnodes/maintenance",permalink:"/docs/smartnodes/maintenance",draft:!1,editUrl:"https://github.com/The-Yerbas-Endeavor/docs/tree/develop/docs/smartnodes/maintenance.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"sidebarSmartnodes",previous:{title:"Manual Setup",permalink:"/docs/smartnodes/installation/manualsetup"},next:{title:"Updating",permalink:"/docs/smartnodes/updating"}},i={},d=[{value:"PoSe Bans",id:"pose-bans",level:2},{value:"Diagnosing",id:"diagnosing",level:3},{value:"Resolving",id:"resolving",level:3},{value:"Monitoring Your Smartnode",id:"monitoring-your-smartnode",level:2},{value:"Increase Smartnode Collateral",id:"increase-smartnode-collateral",level:2},{value:"Build the protx quick_setup command",id:"build-the-protx-quick_setup-command",level:3}],u={toc:d};function c(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"pose-bans"},"PoSe Bans"),(0,o.kt)("h3",{id:"diagnosing"},"Diagnosing"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},'If there is a problem with your Smartnode and it is not available to properly offer its services to the network it will become "PoSe banned" and will not receive any further payments until it is fixed. Here are some of the most common reasons for receiving a PoSe ban:')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"yerbasd is unavailable or not functioning correctly (hung)."),(0,o.kt)("li",{parentName:"ul"},"Resource shortages (cpu, ram)."),(0,o.kt)("li",{parentName:"ul"},"Unstable network or outage.")),(0,o.kt)("p",null,'You can check if your Smartnode is banned directly in the QT wallet in the Smartnodes tab, check the "My Smartnodes Only". Or by going to the Yerbas explorer > Smartnodes Tab > search for your Smartnode IP address.'),(0,o.kt)("h3",{id:"resolving"},"Resolving"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Check if yerbasd is responsive;")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"./yerbas-cli getblockchaininfo\n")),(0,o.kt)("p",null,'If the daemon responds quickly and "blocks" matches the explorer block height the daemon is fine. Quite possibly the PoSe ban was caused by a temporary issue such as resource issue, or network issues. Your PoSe ban should automatically reduce until 0 and be removed.'),(0,o.kt)("p",null,"If the command from step 1 is very slow to respond or does not respond, yerbasd is in a hung state and needs to be killed. Kill it with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ps aux  |  grep -i yerbasd  |  awk '{print $2}'  |  xargs sudo kill -15\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},'If you see "No such process" kill was successful, if you see a process listed you will need to issue the command again to change -15 to -9 which is a harsher termination. Restart yerbasd:')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"./yerbasd\n")),(0,o.kt)("p",null,"Wait for it to fully sync (same block height as block explorer). For fun you can watch it sync with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"tail -f ~/.yerbascore/debug.log # Ctrl + C to exit tail.\n")),(0,o.kt)("p",null,'An alternative way to check and see when yerbasd is done syncing is to use the "top" command. While syncing yerbasd will consistently use nearly 100% of a core. When that use drops substantially it is done syncing. Depending on the nodes PoSe score it can take anywhere from 2 to 6 hours for PoSe ban to be lifted. To speed that process you can issue a "protx update_service" command and the ban will be lifted in 1-2 blocks.'),(0,o.kt)("p",null,'Here is an example of a "protx update_service" command, this is issued in your local wallet > debug console.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'protx update_service "7d62ce3bcf71825te84y5ca4b93a53583a8f1c9c70989e351c0f470088729a83" "your.smartnode.ip:10226" "3808471d6e52fe3b683474075cdf50192babe3b38203187ec0cg18fg54e439a4"\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'First string in "" is the proTxHash. You can get this by right clicking your Smartnode in the QT wallet Smartnode list > Copy proTxHash.')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Second is self explanatory :)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Third is the Smartnodes BLS private key. This is stored on your Smartnode in ~/.yerbascore/yerbas.conf and you can retrieve it easily by doing:"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cat ~/.yerbascore/yerbas.conf | grep bls\n")),(0,o.kt)("p",null,"After firing the protx update_service command you should see status change on your Smartnode list from PoSe_banned to ENABLED in anywhere from 1 minute to 6 minutes."),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Resolving resource related PoSe ban issues. Make sure yerbasd always has access to at least 2 full CPU cores. We strongly recommend against mining on your Smartnodes. Mining on them will endup in performance issues and PoSe bans. If you find yerbasd is sometimes not running this is often due to it being killed by OOM (Out Of Memory Killer) this is a process of the Linux kernel that will kill certain processes when the system is critically low on memory. Search your system logs to help diagnose the issue, as an example on ubuntu 18:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"grep -i 'killed process' /var/log/syslog\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"As an example, if you have a VPS with 4 cores and want to also use it to mine, make sure the miner only uses max 3 cores. (Replace with) We strongly recommend against mining on your Smartnodes. Mining on them will endup in performance issues and PoSe bans.")),(0,o.kt)("h2",{id:"monitoring-your-smartnode"},"Monitoring Your Smartnode"),(0,o.kt)("p",null,"Uptime is crucial and to make sure your Smartnode is online you should monitor it, there are a few ways to do this:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If you used dk808 script to setup your Smartnode it would have asked you if you wanted to monitor your Smartnode. This check script checks your Smartnode status on our block explorer every hour (VIA cronjob). If it finds that your node has been PoSe banned it will kill yerbasd and restart it.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"External monitoring: This uses an external monitor such as ",(0,o.kt)("a",{parentName:"p",href:"https://uptimerobot.com"},"https://uptimerobot.com")," to check if your Smartnode port is open every 5 minutes. If port is closed you can receive notification to any device and or by email. It is easy to setup and free. Default Smartnode port is ",(0,o.kt)("inlineCode",{parentName:"p"},"10226"),"."))),(0,o.kt)("h2",{id:"increase-smartnode-collateral"},"Increase Smartnode Collateral"),(0,o.kt)("p",null,"As the Yerbas network matures Smartnode collateral ramps up and you will need to recreate your Smartnode in order to increase the collateral amount. Here are the steps needed:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'In your local wallet that holds the Smartnode collateral go to Send > Inputs. If you do not see the "Inputs" button you must enable coin control. ',(0,o.kt)("inlineCode",{parentName:"li"},"Settings > Options > Wallet > Enable coin control features"),".")),(0,o.kt)("p",null,'You will see there your Smartnode collateral and it will be marked with a lock. We need to unlock it, so mark the box for that input and click the "toggle lock state" button to unlock it. That input is now spendable and your Smartnode is deactivated.'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create a new collateral receiving address, make sure to label it well."),(0,o.kt)("li",{parentName:"ul"},"Send the full collateral amount in one transaction to the new collateral receiving address."),(0,o.kt)("li",{parentName:"ul"},"Wait until the transaction has 2 confirmations.")),(0,o.kt)("h3",{id:"build-the-protx-quick_setup-command"},"Build the protx quick_setup command"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"By default the ",(0,o.kt)("inlineCode",{parentName:"p"},"protx quick_setup")," command generates a Smartnode config file in the same directory as the .exe files you use to open the wallet. As an example, if you are running ",(0,o.kt)("inlineCode",{parentName:"p"},"yerbas-qt.exe")," from ",(0,o.kt)("inlineCode",{parentName:"p"},"C:\\Program Files\\")," you will need to open it with Administrator privilege's (right click > Run as Administrator). Otherwise it will fail to create the Smartnode configuration file.")),(0,o.kt)("p",null,"You need the following information:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Smartnode Server IP."),(0,o.kt)("li",{parentName:"ul"},"Port (default = 10226)"),(0,o.kt)("li",{parentName:"ul"},"Collateral fee address. (see below note)"),(0,o.kt)("li",{parentName:"ul"},"Collateral transaction ID."),(0,o.kt)("li",{parentName:"ul"},"Collateral index (this is listed when doing \u201csmartnode outputs usually it will be 1)")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},'Collateral fee address can be any address in your wallet that has funds to pay for the transaction, the transaction fee is small as an example I just made one transaction and the cost was 0.00000525 YERB. To see which of your addresses have funds use "listaddressbalances\u201d in debug console or yerbas-cli.')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"protx quick_setup command example:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'./yerbas-cli protx quick_setup "c4bbcde9771668fa640c263d4b964f688b0f039f7b684e715d92e4012369fea6" "1" "209.151.154.120:10226" "RFbWv94ZfueciwVVpHLMdqFayaXAS4sBxP"\n')),(0,o.kt)("p",null,"So structure is: ",(0,o.kt)("inlineCode",{parentName:"p"},"transaction ID | collateral index | smartnode IP | port | collateral fee address")),(0,o.kt)("p",null,"Using ",(0,o.kt)("inlineCode",{parentName:"p"},"QT > Debug Console"),' just remove "./yerbas-cli" from the above command. Fire the command and if it is successful you will see a bunch of output, the command has created the needed yerbas.conf file for your Smartnode. Check the last line of the output as it will tell you the location of the .conf file, notice that it is named differently for example: ',(0,o.kt)("inlineCode",{parentName:"p"},"RMsneH79j9gioE1jFsuxTFUxaZ1JSp53SN_yerbas.conf")),(0,o.kt)("p",null,"That is your YERB collateral address that you created at the start of this guide and is so the .conf file is easy to identify and link to corresponding smartnode. As this is a collateral upgrade all we need from the generated .conf file is the ",(0,o.kt)("inlineCode",{parentName:"p"},"smartnodeblsprivkey"),"."),(0,o.kt)("p",null,"On your Smartnode VPS / server:"),(0,o.kt)("p",null,"Stop daemon:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"./yerbas-cli stop\n")),(0,o.kt)("p",null,"Edit yerbas.conf:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"nano ~/.yerbascore/yerbas.conf\n")),(0,o.kt)("p",null,"Swap out the old bls private key with the new, exit, and start yerbasd:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"./yerbasd\n")),(0,o.kt)("p",null,"Give it 5 minutes to catch up on any missed blocks.\nCheck smartnode status:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"./yerbas-cli smartnode status\n")),(0,o.kt)("p",null,"The output you want to see is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'},\n"state": "READY",  \n"status": "Ready" \n}\n')),(0,o.kt)("p",null,"If all went well you should now have a functioning Smartnode at the increased collateral."))}c.isMDXComponent=!0}}]);