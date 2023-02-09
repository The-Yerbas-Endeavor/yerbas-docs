"use strict";(self.webpackChunkyerbas_docs=self.webpackChunkyerbas_docs||[]).push([[4198],{9753:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var n=a(7462),l=(a(7294),a(3905)),c=a(2004);const r={sidebar_position:15},i="getreceivedbyaccount",o={unversionedId:"wallet/cli-wallet/commands/wallet/getreceivedbyaccount",id:"wallet/cli-wallet/commands/wallet/getreceivedbyaccount",title:"getreceivedbyaccount",description:'getreceivedbyaccount "account" ( minconf addlocked )',source:"@site/docs/wallet/cli-wallet/commands/wallet/getreceivedbyaccount.mdx",sourceDirName:"wallet/cli-wallet/commands/wallet",slug:"/wallet/cli-wallet/commands/wallet/getreceivedbyaccount",permalink:"/docs/wallet/cli-wallet/commands/wallet/getreceivedbyaccount",draft:!1,editUrl:"https://github.com/The-Yerbas-Endeavor/yerbas-docs/tree/develop/docs/wallet/cli-wallet/commands/wallet/getreceivedbyaccount.mdx",tags:[],version:"current",sidebarPosition:15,frontMatter:{sidebar_position:15},sidebar:"sidebarWallet",previous:{title:"getrawchangeaddress",permalink:"/docs/wallet/cli-wallet/commands/wallet/getrawchangeaddress"},next:{title:"getreceivedbyaddress",permalink:"/docs/wallet/cli-wallet/commands/wallet/getreceivedbyaddress"}},d={},s=[{value:"Arguments",id:"arguments",level:2},{value:"Output",id:"output",level:2},{value:"Examples",id:"examples",level:2}],u={toc:s};function m(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"getreceivedbyaccount"},"getreceivedbyaccount"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},'getreceivedbyaccount "account" ( minconf addlocked )')),(0,l.kt)("p",null,"DEPRECATED. Returns the total amount received by addresses with account in transactions with specified minimum number of confirmations."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'# Amount received by the default account with at least 1 confirmation\nyerbas-cli getreceivedbyaccount ""\n\n# Amount received at the tabby account including unconfirmed amounts with zero confirmations\nyerbas-cli getreceivedbyaccount "tabby" 0\n\n# The amount with at least 6 confirmations\nyerbas-cli getreceivedbyaccount "tabby" 6\n')),(0,l.kt)(c.Z,{playing:!0,controls:!0,url:[{src:`${a(2867).Z}`,type:"video/webm"}],mdxType:"ReactPlayer"}),(0,l.kt)("h2",{id:"arguments"},"Arguments"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Argument"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},'"account"'),(0,l.kt)("td",{parentName:"tr",align:null},"(string)"),(0,l.kt)("td",{parentName:"tr",align:null},'The selected account, may be the default account using "".')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"minconf"),(0,l.kt)("td",{parentName:"tr",align:null},"(numeric)"),(0,l.kt)("td",{parentName:"tr",align:null},"Only include transactions confirmed at least this many times.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"addlocked"),(0,l.kt)("td",{parentName:"tr",align:null},"(boolean)"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to include transactions locked via InstantSend.")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'Arguments:\n1. "account"      (string, required) The selected account, may be the default account using "".\n2. minconf        (numeric, optional, default=1) Only include transactions confirmed at least this many times.\n3. addlocked      (bool, optional, default=false) Whether to include transactions locked via InstantSend.\n')),(0,l.kt)("h2",{id:"output"},"Output"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Result"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"amount"),(0,l.kt)("td",{parentName:"tr",align:null},"(numeric)"),(0,l.kt)("td",{parentName:"tr",align:null},"The total amount in YERB received for this account.")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"Result:\namount            (numeric) The total amount in YERB received for this account.\n")),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "getreceivedbyaccount", "params": ["tabby", 6] }\' -H \'content-type: text/plain;\' http://127.0.0.1:9998/\n')))}m.isMDXComponent=!0},2867:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/medias/getreceivedbyaccount-575e60f1c36731be2e9421bf1691a12c.webm"}}]);