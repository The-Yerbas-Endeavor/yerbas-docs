"use strict";(self.webpackChunkyerbas_docs=self.webpackChunkyerbas_docs||[]).push([[6561],{8208:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>m,metadata:()=>r,toc:()=>c});var a=l(7462),o=(l(7294),l(3905)),n=l(2004);const m={sidebar_position:15},i="getmempoolinfo",r={unversionedId:"wallet/cli-wallet/commands/blockchain/getmempoolinfo",id:"wallet/cli-wallet/commands/blockchain/getmempoolinfo",title:"getmempoolinfo",description:"Returns details on the active state of the TX memory pool.",source:"@site/docs/wallet/cli-wallet/commands/blockchain/getmempoolinfo.mdx",sourceDirName:"wallet/cli-wallet/commands/blockchain",slug:"/wallet/cli-wallet/commands/blockchain/getmempoolinfo",permalink:"/docs/wallet/cli-wallet/commands/blockchain/getmempoolinfo",draft:!1,editUrl:"https://github.com/The-Yerbas-Endeavor/docs/tree/develop/docs/wallet/cli-wallet/commands/blockchain/getmempoolinfo.mdx",tags:[],version:"current",sidebarPosition:15,frontMatter:{sidebar_position:15},sidebar:"sidebarWallet",previous:{title:"getmempoolentry",permalink:"/docs/wallet/cli-wallet/commands/blockchain/getmempoolentry"},next:{title:"getmerkleblocks",permalink:"/docs/wallet/cli-wallet/commands/blockchain/getmerkleblocks"}},s={},c=[{value:"Output",id:"output",level:2},{value:"Examples",id:"examples",level:2}],p={toc:c};function d(e){let{components:t,...m}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,m,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getmempoolinfo"},"getmempoolinfo"),(0,o.kt)("p",null,"Returns details on the active state of the TX memory pool."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"yerbas-cli getmempoolinfo")),(0,o.kt)(n.Z,{playing:!0,controls:!0,url:[{src:`${l(2144).Z}`,type:"video/webm"}],mdxType:"ReactPlayer"}),(0,o.kt)("h2",{id:"output"},"Output"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Result"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},'"size"'),(0,o.kt)("td",{parentName:"tr",align:null},"(numeric)"),(0,o.kt)("td",{parentName:"tr",align:null},"Current tx count")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'Result:\n{\n  "size": xxxxx,               (numeric) Current tx count\n  "bytes": xxxxx,              (numeric) Sum of all tx sizes\n  "usage": xxxxx,              (numeric) Total memory usage for the mempool\n  "maxmempool": xxxxx,         (numeric) Maximum memory usage for the mempool\n  "mempoolminfee": xxxxx       (numeric) Minimum feerate (YERB per KB) for tx to be accepted\n  "instantsendlocks": xxxxx,   (numeric) Number of unconfirmed instant send locks\n}\n')),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "getmempoolinfo", "params": [] }\' -H \'content-type: text/plain;\' http://127.0.0.1:9998/\n')))}d.isMDXComponent=!0},2144:(e,t,l)=>{l.d(t,{Z:()=>a});const a=l.p+"assets/medias/getmempoolinfo-d3af747c9f00ea9fc00ecbe6ed02df97.webm"}}]);