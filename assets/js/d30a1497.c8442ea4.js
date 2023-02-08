"use strict";(self.webpackChunkyerbas_docs=self.webpackChunkyerbas_docs||[]).push([[8489],{1868:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=a(7462),s=(a(7294),a(3905)),i=a(9960);const o={},r="PrivateSend",l={unversionedId:"wallet/privatesend",id:"wallet/privatesend",title:"PrivateSend",description:"Yerbas PrivateSend",source:"@site/docs/wallet/privatesend.mdx",sourceDirName:"wallet",slug:"/wallet/privatesend",permalink:"/docs/wallet/privatesend",draft:!1,editUrl:"https://github.com/Raptor3um/docs/tree/develop/docs/wallet/privatesend.mdx",tags:[],version:"current",frontMatter:{},sidebar:"sidebarWallet",previous:{title:"Stacy's Mom",permalink:"/docs/wallet/other-wallets/stacys-mom"}},d={},u=[{value:"Yerbas PrivateSend",id:"yerbas-privatesend",level:3},{value:"How it Works",id:"how-it-works",level:3}],m={toc:u};function c(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"privatesend"},"PrivateSend"),(0,s.kt)("h3",{id:"yerbas-privatesend"},"Yerbas PrivateSend"),(0,s.kt)("p",null,"Private send is a Yerbas feature inherited from DASH, it allows you to obscure the source of sent YERB. To do this it uses mixing which takes place on the Smartnode network and uses inputs (inputs = coins) from at least two other users that have enabled mixing in their wallets. Your coins never leave your wallet."),(0,s.kt)(i.Z,{to:"docs/wallet/gui-wallet/guiwalletguide/privatesend",mdxType:"Link"},(0,s.kt)("button",{class:"button button--block button--primary"},"GUI Wallet Guide for PrivateSend \xbb")),(0,s.kt)("h3",{id:"how-it-works"},"How it Works"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"When enabling mixing Private Send breaks your inputs down into standard denominations like 0.001, 0.01, 0.1, 1, 10."),(0,s.kt)("li",{parentName:"ul"},"Your mixing request is sent to the Smartnode network. No identifying information is sent to the Smartnode network, IP address for example. Which Smartnodes are used is random so it cannot be anticipated."),(0,s.kt)("li",{parentName:"ul"},"When two other people enable mixing with the same denominations a mixing session begins. The Smartnode mixes the inputs of all three users wallets to pay the mixed denomination (input) back to themselves. Your wallet pays the denomination back to itself using a change address."),(0,s.kt)("li",{parentName:"ul"},"When starting a mixing session you can choose between 1 and 16 rounds. Each round makes it exponentially harder to track where private send coins came from. The default amount of rounds is 4. Your wallet needs to complete X amount of rounds for each denomination."),(0,s.kt)("li",{parentName:"ul"},"Mixing takes time to complete, the less users that are using the longer it might take. If planning to use private send it is best to make a mixing session before you expect to spend private send coins.")),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"By default the core wallet contains 1000 change addresses, each mixing event will use one. If these addresses become depleted the wallet will automatically create more. In order for it to create more automatic backups must be enabled (on by default). This is a failsafe feature to make sure you have a backup of the new keys once they are generated as they would not exist in previous backups.")))}c.isMDXComponent=!0}}]);