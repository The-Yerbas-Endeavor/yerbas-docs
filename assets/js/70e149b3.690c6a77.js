"use strict";(self.webpackChunkyerbas_docs=self.webpackChunkyerbas_docs||[]).push([[5620],{12638:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var i=n(87462),a=(n(67294),n(3905));const o={sidebar_position:8},l="PrivateSend",s={unversionedId:"wallet/gui-wallet/guiwalletguide/privatesend",id:"wallet/gui-wallet/guiwalletguide/privatesend",title:"PrivateSend",description:"Using PrivateSend",source:"@site/docs/wallet/gui-wallet/guiwalletguide/privatesend.md",sourceDirName:"wallet/gui-wallet/guiwalletguide",slug:"/wallet/gui-wallet/guiwalletguide/privatesend",permalink:"/docs/wallet/gui-wallet/guiwalletguide/privatesend",draft:!1,editUrl:"https://github.com/The-Yerbas-Endeavor/yerbas-docs/tree/develop/docs/wallet/gui-wallet/guiwalletguide/privatesend.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"sidebarWallet",previous:{title:"Menu Options",permalink:"/docs/wallet/gui-wallet/guiwalletguide/menuoptions"},next:{title:"Overview",permalink:"/docs/wallet/gui-wallet/overview"}},r={},d=[{value:"Using PrivateSend",id:"using-privatesend",level:2},{value:"Sending PrivateSend Coins",id:"sending-privatesend-coins",level:2}],u={toc:d};function m(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"privatesend"},"PrivateSend"),(0,a.kt)("h2",{id:"using-privatesend"},"Using PrivateSend"),(0,a.kt)("admonition",{title:"Info",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"To start you must have automatic backups enabled (on by default) and your wallet must be encrypted.")),(0,a.kt)("p",null,"Go to ",(0,a.kt)("inlineCode",{parentName:"p"},"Settings > Options"),", and set PrivateSend Rounds to use and Target PrivateSend balance. The default amount of rounds is 4, increasing that increases privacy but also mixing time. PrivateSend balance is the balance mixing will stop at AKA your amount of private coins."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"PrivateSend Options menu",src:n(84175).Z,width:"581",height:"541"})),(0,a.kt)("p",null,"There are a few other options in the above screenshot which you can enable or disable as you like."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Enable advanced PrivateSend interface: This will display additional detailed information just above the "Stop Mixing" button.'),(0,a.kt)("li",{parentName:"ul"},"Show popups for PrivateSend transactions: Mixing creates quite a few transactions so you may want to disable this."),(0,a.kt)("li",{parentName:"ul"},"Warn if PrivateSend is running out of keys: Displays a warning if running low on keys. No action is needed by the user here, the wallet will create more as needed. But make sure to create a new backup of your wallet if you see this warning and more keys are created.")),(0,a.kt)("p",null,'To begin the process click the "Start Mixing" button. Mixing transactions are atomic which means they either take place completely or not at all. You can interrupt the mixing process safely at any time. This means stopping the mixing process, closing the wallet, killing the wallet (PC reboots for example), or disabling the PrivateSend feature before mixing is complete.'),(0,a.kt)("h2",{id:"sending-privatesend-coins"},"Sending PrivateSend Coins"),(0,a.kt)("p",null,"In the ",(0,a.kt)("inlineCode",{parentName:"p"},"Receive")," section of your wallet in the bottom right hand corner you will see a box that needs to be marked in order for you to send PrivateSend YERB. When you mark it, the balance will change to show you your current PrivateSend balance."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"PrivateSend show balance",src:n(87231).Z,width:"339",height:"123"})),(0,a.kt)("p",null,"Once that box is marked you may send mixed Yerbas for increased privacy. If you run into an error when sending mixed YERB which mentions not enough inputs selecting the ",(0,a.kt)("inlineCode",{parentName:"p"},"Subtract fee from amount")," box on the sending screen will usually resolve it. PrivateSend transactions must spend all inputs completely so PrivateSend transaction amount will be rounded up to accommodate. PrivateSend transaction size is generally larger then a regular transaction and require a slightly larger fee."),(0,a.kt)("p",null,"You can see all available PrivateSend inputs in your wallets Coin Control section, the ",(0,a.kt)("inlineCode",{parentName:"p"},"PS")," column shows the amount of mixing rounds."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"PrivateSend Coin Selection",src:n(39901).Z,width:"1277",height:"759"})),(0,a.kt)("p",null,"Making your PrivateSend transactions can slightly increase your privacy, you can do so by selecting the most efficient (least) amount of inputs from Coin Control when sending."),(0,a.kt)("p",null,'If you want to see what a PrivateSend transaction looks like "on-chain" you can check ',(0,a.kt)("a",{parentName:"p",href:"https://explorer.yerbas.org/tx/531884f12b085c032a5b2987f34fa64731c44c1c51605a9093cd414c6872f7c2"},"here"),"."))}m.isMDXComponent=!0},87231:(e,t,n)=>{n.d(t,{Z:()=>i});const i="data:image/png;base64,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"},39901:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/privatesend_coin_selection-62a62ad03ae87212669d6b54596974c5.png"},84175:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/privatesend_options-25bbee8da124aec195b6835aeed1ae06.png"}}]);