"use strict";(self.webpackChunkyerbas_docs=self.webpackChunkyerbas_docs||[]).push([[5620],{2638:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>A,toc:()=>s});var i=n(7462),a=(n(7294),n(3905));const o={sidebar_position:8},l="PrivateSend",A={unversionedId:"wallet/gui-wallet/guiwalletguide/privatesend",id:"wallet/gui-wallet/guiwalletguide/privatesend",title:"PrivateSend",description:"Using PrivateSend",source:"@site/docs/wallet/gui-wallet/guiwalletguide/privatesend.md",sourceDirName:"wallet/gui-wallet/guiwalletguide",slug:"/wallet/gui-wallet/guiwalletguide/privatesend",permalink:"/docs/wallet/gui-wallet/guiwalletguide/privatesend",draft:!1,editUrl:"https://github.com/Raptor3um/docs/tree/develop/docs/wallet/gui-wallet/guiwalletguide/privatesend.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"sidebarWallet",previous:{title:"Menu Options",permalink:"/docs/wallet/gui-wallet/guiwalletguide/menuoptions"},next:{title:"Overview",permalink:"/docs/wallet/gui-wallet/overview"}},r={},s=[{value:"Using PrivateSend",id:"using-privatesend",level:2},{value:"Sending PrivateSend Coins",id:"sending-privatesend-coins",level:2}],d={toc:s};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,i.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"privatesend"},"PrivateSend"),(0,a.kt)("h2",{id:"using-privatesend"},"Using PrivateSend"),(0,a.kt)("admonition",{title:"Info",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"To start you must have automatic backups enabled (on by default) and your wallet must be encrypted.")),(0,a.kt)("p",null,"Go to ",(0,a.kt)("inlineCode",{parentName:"p"},"Settings > Options"),", and set PrivateSend Rounds to use and Target PrivateSend balance. The default amount of rounds is 4, increasing that increases privacy but also mixing time. PrivateSend balance is the balance mixing will stop at AKA your amount of private coins."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"PrivateSend Options menu",src:n(4175).Z,width:"581",height:"537"})),(0,a.kt)("p",null,"There are a few other options in the above screenshot which you can enable or disable as you like."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Enable advanced PrivateSend interface: This will display additional detailed information just above the "Stop Mixing" button.'),(0,a.kt)("li",{parentName:"ul"},"Show popups for PrivateSend transactions: Mixing creates quite a few transactions so you may want to disable this."),(0,a.kt)("li",{parentName:"ul"},"Warn if PrivateSend is running out of keys: Displays a warning if running low on keys. No action is needed by the user here, the wallet will create more as needed. But make sure to create a new backup of your wallet if you see this warning and more keys are created.")),(0,a.kt)("p",null,'To begin the process click the "Start Mixing" button. Mixing transactions are atomic which means they either take place completely or not at all. You can interrupt the mixing process safely at any time. This means stopping the mixing process, closing the wallet, killing the wallet (PC reboots for example), or disabling the PrivateSend feature before mixing is complete.'),(0,a.kt)("h2",{id:"sending-privatesend-coins"},"Sending PrivateSend Coins"),(0,a.kt)("p",null,"In the ",(0,a.kt)("inlineCode",{parentName:"p"},"Receive")," section of your wallet in the bottom right hand corner you will see a box that needs to be marked in order for you to send PrivateSend YERB. When you mark it, the balance will change to show you your current PrivateSend balance."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"PrivateSend show balance",src:n(7231).Z,width:"440",height:"172"})),(0,a.kt)("p",null,"Once that box is marked you may send mixed Yerbas for increased privacy. If you run into an error when sending mixed YERB which mentions not enough inputs selecting the ",(0,a.kt)("inlineCode",{parentName:"p"},"Subtract fee from amount")," box on the sending screen will usually resolve it. PrivateSend transactions must spend all inputs completely so PrivateSend transaction amount will be rounded up to accommodate. PrivateSend transaction size is generally larger then a regular transaction and require a slightly larger fee."),(0,a.kt)("p",null,"You can see all available PrivateSend inputs in your wallets Coin Control section, the ",(0,a.kt)("inlineCode",{parentName:"p"},"PS")," column shows the amount of mixing rounds."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"PrivateSend Coin Selection",src:n(210).Z,width:"1370",height:"702"})),(0,a.kt)("p",null,"Making your PrivateSend transactions can slightly increase your privacy, you can do so by selecting the most efficient (least) amount of inputs from Coin Control when sending."),(0,a.kt)("p",null,'If you want to see what a PrivateSend transaction looks like "on-chain" you can check ',(0,a.kt)("a",{parentName:"p",href:"https://explorer.yerbas.com/tx/531884f12b085c032a5b2987f34fa64731c44c1c51605a9093cd414c6872f7c2"},"here"),"."))}u.isMDXComponent=!0},7231:(e,t,n)=>{n.d(t,{Z:()=>i});const i="data:image/png;base64,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"},210:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/privatesend_coin_selection-81a577b71a7e1d7e598423e2d3cb57f3.png"},4175:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/privatesend_options-5d2aaeaa3fd0d58f3f7edc491cb66d8c.png"}}]);