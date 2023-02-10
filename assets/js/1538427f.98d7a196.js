"use strict";(self.webpackChunkyerbas_docs=self.webpackChunkyerbas_docs||[]).push([[2633],{96813:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>d,metadata:()=>s,toc:()=>m});var n=a(87462),r=(a(67294),a(3905));a(22004);const d={sidebar_position:3},l="getaddressmempool",s={unversionedId:"wallet/cli-wallet/commands/address-index/getaddressmempool",id:"wallet/cli-wallet/commands/address-index/getaddressmempool",title:"getaddressmempool",description:"Returns all mempool deltas for an address (requires addressindex to be enabled).",source:"@site/docs/wallet/cli-wallet/commands/address-index/getaddressmempool.mdx",sourceDirName:"wallet/cli-wallet/commands/address-index",slug:"/wallet/cli-wallet/commands/address-index/getaddressmempool",permalink:"/docs/wallet/cli-wallet/commands/address-index/getaddressmempool",draft:!1,editUrl:"https://github.com/The-Yerbas-Endeavor/yerbas-docs/tree/develop/docs/wallet/cli-wallet/commands/address-index/getaddressmempool.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"sidebarWallet",previous:{title:"getaddressdeltas",permalink:"/docs/wallet/cli-wallet/commands/address-index/getaddressdeltas"},next:{title:"getaddresstxids",permalink:"/docs/wallet/cli-wallet/commands/address-index/getaddresstxids"}},i={},m=[{value:"Arguments",id:"arguments",level:2},{value:"Output",id:"output",level:2},{value:"Examples",id:"examples",level:2}],o={toc:m};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"getaddressmempool"},"getaddressmempool"),(0,r.kt)("p",null,"Returns all mempool deltas for an address (requires addressindex to be enabled)."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'yerbas-cli getaddressmempool \'{"addresses": ["XwnLY9Tf7Zsef8gMGL2fhWA9ZmMjt4KPwg"]}\'')),(0,r.kt)("h2",{id:"arguments"},"Arguments"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Argument"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},'"addresses"'),(0,r.kt)("td",{parentName:"tr",align:null},"(string)"),(0,r.kt)("td",{parentName:"tr",align:null},"(string) The base58check encoded address")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'Arguments:\n{\n  "addresses"\n    [\n      "address"  (string) The base58check encoded address\n      ,...\n    ]\n}\n')),(0,r.kt)("h2",{id:"output"},"Output"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Result"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},'"address"'),(0,r.kt)("td",{parentName:"tr",align:null},"(string)"),(0,r.kt)("td",{parentName:"tr",align:null},"The base58check encoded address")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},'"txid"'),(0,r.kt)("td",{parentName:"tr",align:null},"(string)"),(0,r.kt)("td",{parentName:"tr",align:null},"The related txid")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},'"index"'),(0,r.kt)("td",{parentName:"tr",align:null},"(number)"),(0,r.kt)("td",{parentName:"tr",align:null},"The related input or output index")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},'"timestamp"'),(0,r.kt)("td",{parentName:"tr",align:null},"(number)"),(0,r.kt)("td",{parentName:"tr",align:null},"The time the transaction entered the mempool (seconds)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},'"prevtxid"'),(0,r.kt)("td",{parentName:"tr",align:null},"(string)"),(0,r.kt)("td",{parentName:"tr",align:null},"The previous txid (if spending)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},'"prevout"'),(0,r.kt)("td",{parentName:"tr",align:null},"(string)"),(0,r.kt)("td",{parentName:"tr",align:null},"The previous transaction output index (if spending)")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'Result:\n[\n  {\n    "address"  (string) The base58check encoded address\n    "txid"  (string) The related txid\n    "index"  (number) The related input or output index\n    "satoshis"  (number) The difference of duffs\n    "timestamp"  (number) The time the transaction entered the mempool (seconds)\n    "prevtxid"  (string) The previous txid (if spending)\n    "prevout"  (string) The previous transaction output index (if spending)\n  }\n]\n')),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "getaddressmempool", "params": [{"addresses": ["XwnLY9Tf7Zsef8gMGL2fhWA9ZmMjt4KPwg"]}] }\' -H \'content-type: text/plain;\' http://127.0.0.1:9998/\n')))}p.isMDXComponent=!0}}]);