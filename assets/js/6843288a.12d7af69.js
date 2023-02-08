"use strict";(self.webpackChunkyerbas_docs=self.webpackChunkyerbas_docs||[]).push([[1631],{8763:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var n=a(7462),l=(a(7294),a(3905)),r=a(2004);const i={sidebar_position:33},c="listreceivedbyaccount",o={unversionedId:"wallet/cli-wallet/commands/wallet/listreceivedbyaccount",id:"wallet/cli-wallet/commands/wallet/listreceivedbyaccount",title:"listreceivedbyaccount",description:"listreceivedbyaccount ( minconf addlocked includeempty includewatchonly)",source:"@site/docs/wallet/cli-wallet/commands/wallet/listreceivedbyaccount.mdx",sourceDirName:"wallet/cli-wallet/commands/wallet",slug:"/wallet/cli-wallet/commands/wallet/listreceivedbyaccount",permalink:"/docs/wallet/cli-wallet/commands/wallet/listreceivedbyaccount",draft:!1,editUrl:"https://github.com/The-Yerbas-Endeavor/docs/tree/develop/docs/wallet/cli-wallet/commands/wallet/listreceivedbyaccount.mdx",tags:[],version:"current",sidebarPosition:33,frontMatter:{sidebar_position:33},sidebar:"sidebarWallet",previous:{title:"listlockunspent",permalink:"/docs/wallet/cli-wallet/commands/wallet/listlockunspent"},next:{title:"listreceivedbyaddress",permalink:"/docs/wallet/cli-wallet/commands/wallet/listreceivedbyaddress"}},s={},d=[{value:"Arguments",id:"arguments",level:2},{value:"Output",id:"output",level:2},{value:"Examples",id:"examples",level:2}],u={toc:d};function m(e){let{components:t,...i}=e;return(0,l.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"listreceivedbyaccount"},"listreceivedbyaccount"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"listreceivedbyaccount ( minconf addlocked include_empty include_watchonly)")),(0,l.kt)("p",null,"DEPRECATED. List incoming payments grouped by account."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yerbas-cli listreceivedbyaccount\nyerbas-cli listreceivedbyaccount 6 false true\n")),(0,l.kt)(r.Z,{playing:!0,controls:!0,url:[{src:`${a(8088).Z}`,type:"video/webm"}],mdxType:"ReactPlayer"}),(0,l.kt)("h2",{id:"arguments"},"Arguments"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Argument"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"minconf"),(0,l.kt)("td",{parentName:"tr",align:null},"(numeric)"),(0,l.kt)("td",{parentName:"tr",align:null},"nly include transactions with at least this many confirmations")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"addlocked"),(0,l.kt)("td",{parentName:"tr",align:null},"(bool)"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to include transactions locked via InstantSend.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"include_empty"),(0,l.kt)("td",{parentName:"tr",align:null},"(bool)"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to include accounts that haven't received any payments.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"include_watchonly"),(0,l.kt)("td",{parentName:"tr",align:null},"(bool)"),(0,l.kt)("td",{parentName:"tr",align:null},"Include balances in watch-only addresses (see 'importaddress')")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"Arguments:\n1. minconf           (numeric, optional, default=1) The minimum number of confirmations before payments are included.\n2. addlocked         (bool, optional, default=false) Whether to include transactions locked via InstantSend.\n3. include_empty     (bool, optional, default=false) Whether to include accounts that haven't received any payments.\n4. include_watchonly (bool, optional, default=false) Whether to include watch-only addresses (see 'importaddress').\n\n")),(0,l.kt)("h2",{id:"output"},"Output"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Result"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},'"involvesWatchonly"'),(0,l.kt)("td",{parentName:"tr",align:null},"(bool)"),(0,l.kt)("td",{parentName:"tr",align:null},"Only returned if imported addresses were involved in transaction")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'Result:\n[\n  {\n    "involvesWatchonly" : true,   (bool) Only returned if imported addresses were involved in transaction\n    "account" : "accountname",    (string) The account name of the receiving account\n    "amount" : x.xxx,             (numeric) The total amount received by addresses with this account\n    "confirmations" : n           (numeric) The number of blockchain confirmations of the most recent transaction included\n    "label" : "label"             (string) A comment for the address/transaction, if any\n  }\n  ,...\n]\n')),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "listreceivedbyaccount", "params": [6, false, true, true] }\' -H \'content-type: text/plain;\' http://127.0.0.1:9998/\n')))}m.isMDXComponent=!0},8088:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/medias/listreceivedbyaccount-51c34cf744696282a9352e62f206c804.webm"}}]);