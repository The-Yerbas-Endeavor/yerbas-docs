"use strict";(self.webpackChunkyerbas_docs=self.webpackChunkyerbas_docs||[]).push([[6143],{91625:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>d,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=a(87462),l=(a(67294),a(3905)),r=a(22004);const s={sidebar_position:16},d="getreceivedbyaddress",i={unversionedId:"wallet/cli-wallet/commands/wallet/getreceivedbyaddress",id:"wallet/cli-wallet/commands/wallet/getreceivedbyaddress",title:"getreceivedbyaddress",description:'getreceivedbyaddress "address" ( minconf addlocked )',source:"@site/docs/wallet/cli-wallet/commands/wallet/getreceivedbyaddress.mdx",sourceDirName:"wallet/cli-wallet/commands/wallet",slug:"/wallet/cli-wallet/commands/wallet/getreceivedbyaddress",permalink:"/docs/wallet/cli-wallet/commands/wallet/getreceivedbyaddress",draft:!1,editUrl:"https://github.com/The-Yerbas-Endeavor/yerbas-docs/tree/develop/docs/wallet/cli-wallet/commands/wallet/getreceivedbyaddress.mdx",tags:[],version:"current",sidebarPosition:16,frontMatter:{sidebar_position:16},sidebar:"sidebarWallet",previous:{title:"getreceivedbyaccount",permalink:"/docs/wallet/cli-wallet/commands/wallet/getreceivedbyaccount"},next:{title:"gettransaction",permalink:"/docs/wallet/cli-wallet/commands/wallet/gettransaction"}},o={},c=[{value:"Arguments",id:"arguments",level:2},{value:"Output",id:"output",level:2},{value:"Examples",id:"examples",level:2}],m={toc:c};function u(e){let{components:t,...s}=e;return(0,l.kt)("wrapper",(0,n.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"getreceivedbyaddress"},"getreceivedbyaddress"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},'getreceivedbyaddress "address" ( minconf addlocked )')),(0,l.kt)("p",null,"Returns the total amount received by the given address in transactions with at least minconf confirmations."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'# The amount from transactions with at least 1 confirmation\nyerbas-cli getreceivedbyaddress "XwnLY9Tf7Zsef8gMGL2fhWA9ZmMjt4KPwG"\n\n# The amount including unconfirmed transactions, zero confirmations\nyerbas-cli getreceivedbyaddress "XwnLY9Tf7Zsef8gMGL2fhWA9ZmMjt4KPwG" 0\n\n# The amount with at least 6 confirmations\nyerbas-cli getreceivedbyaddress "XwnLY9Tf7Zsef8gMGL2fhWA9ZmMjt4KPwG" 6\n')),(0,l.kt)(r.Z,{playing:!0,controls:!0,url:[{src:`${a(38730).Z}`,type:"video/webm"}],mdxType:"ReactPlayer"}),(0,l.kt)("h2",{id:"arguments"},"Arguments"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Argument"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},'"address"'),(0,l.kt)("td",{parentName:"tr",align:null},"(string)"),(0,l.kt)("td",{parentName:"tr",align:null},"The yerbas address for transactions.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"minconf"),(0,l.kt)("td",{parentName:"tr",align:null},"(numeric)"),(0,l.kt)("td",{parentName:"tr",align:null},"Only include transactions confirmed at least this many times.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"addlocked"),(0,l.kt)("td",{parentName:"tr",align:null},"(boolean)"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to include transactions locked via InstantSend.")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'Arguments:\n1. "address"         (string, required) The yerbas address for transactions.\n2. minconf             (numeric, optional, default=1) Only include transactions confirmed at least this many times.\n3. addlocked           (bool, optional, default=false) Whether to include transactions locked via InstantSend.\n')),(0,l.kt)("h2",{id:"output"},"Output"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Result"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"amount"),(0,l.kt)("td",{parentName:"tr",align:null},"(numeric)"),(0,l.kt)("td",{parentName:"tr",align:null},"The total amount in YERB received for this address.")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"Result:\namount   (numeric) The total amount in YERB received at this address.\n")),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "getreceivedbyaddress", "params": ["XwnLY9Tf7Zsef8gMGL2fhWA9ZmMjt4KPwG", 6] }\' -H \'content-type: text/plain;\' http://127.0.0.1:9998/\n')))}u.isMDXComponent=!0},38730:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/medias/getreceivedbyaddress-8001346f12a71df733459b81ea550a48.webm"}}]);