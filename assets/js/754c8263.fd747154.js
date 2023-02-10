"use strict";(self.webpackChunkyerbas_docs=self.webpackChunkyerbas_docs||[]).push([[1903],{50077:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>r,toc:()=>c});var a=n(87462),o=(n(67294),n(3905));n(22004);const l={sidebar_position:12},s="getmempoolancestors",r={unversionedId:"wallet/cli-wallet/commands/blockchain/getmempoolancestors",id:"wallet/cli-wallet/commands/blockchain/getmempoolancestors",title:"getmempoolancestors",description:"getmempoolancestors txid (verbose)",source:"@site/docs/wallet/cli-wallet/commands/blockchain/getmempoolancestors.mdx",sourceDirName:"wallet/cli-wallet/commands/blockchain",slug:"/wallet/cli-wallet/commands/blockchain/getmempoolancestors",permalink:"/docs/wallet/cli-wallet/commands/blockchain/getmempoolancestors",draft:!1,editUrl:"https://github.com/The-Yerbas-Endeavor/yerbas-docs/tree/develop/docs/wallet/cli-wallet/commands/blockchain/getmempoolancestors.mdx",tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12},sidebar:"sidebarWallet",previous:{title:"getdifficulty",permalink:"/docs/wallet/cli-wallet/commands/blockchain/getdifficulty"},next:{title:"getmempooldescendants",permalink:"/docs/wallet/cli-wallet/commands/blockchain/getmempooldescendants"}},i={},c=[{value:"Arguments",id:"arguments",level:2},{value:"Output",id:"output",level:2},{value:"Examples",id:"examples",level:2}],m={toc:c};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getmempoolancestors"},"getmempoolancestors"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"getmempoolancestors txid (verbose)")),(0,o.kt)("p",null,"If txid is in the mempool, returns all in-mempool ancestors."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},'yerbas-cli getmempoolancestors "mytxid" ')),(0,o.kt)("h2",{id:"arguments"},"Arguments"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Argument"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},'"txid"'),(0,o.kt)("td",{parentName:"tr",align:null},"(string)"),(0,o.kt)("td",{parentName:"tr",align:null},"The transaction id (must be in mempool)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"verbose"),(0,o.kt)("td",{parentName:"tr",align:null},"(boolean)"),(0,o.kt)("td",{parentName:"tr",align:null},"True for a json object, false for array of transaction ids")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'Arguments:\n1. "txid"                 (string, required) The transaction id (must be in mempool)\n2. verbose                  (boolean, optional, default=false) True for a json object, false for array of transaction ids\n')),(0,o.kt)("h2",{id:"output"},"Output"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Result"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},'"transactionid"'),(0,o.kt)("td",{parentName:"tr",align:null},"(string)"),(0,o.kt)("td",{parentName:"tr",align:null},"The transaction id of an in-mempool ancestor transaction")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'Result (for verbose=false):\n[                       (json array of strings)\n  "transactionid"           (string) The transaction id of an in-mempool ancestor transaction\n  ,...\n]\n\nResult (for verbose=true):\n{                           (json object)\n  "transactionid" : {       (json object)\n    "size" : n,                 (numeric) transaction size in bytes\n    "fee" : n,                  (numeric) transaction fee in YERB\n    "modifiedfee" : n,          (numeric) transaction fee with fee deltas used for mining priority\n    "time" : n,                 (numeric) local time transaction entered pool in seconds since 1 Jan 1970 GMT\n    "height" : n,               (numeric) block height when transaction entered pool\n    "descendantcount" : n,      (numeric) number of in-mempool descendant transactions (including this one)\n    "descendantsize" : n,       (numeric) size of in-mempool descendants (including this one)\n    "descendantfees" : n,       (numeric) modified fees (see above) of in-mempool descendants (including this one)\n    "ancestorcount" : n,        (numeric) number of in-mempool ancestor transactions (including this one)\n    "ancestorsize" : n,         (numeric) size of in-mempool ancestors (including this one)\n    "ancestorfees" : n,         (numeric) modified fees (see above) of in-mempool ancestors (including this one)\n    "depends" : [               (array) unconfirmed transactions used as inputs for this transaction\n        "transactionid",        (string) parent transaction id\n       ... ],\n    "instantlock" : true|false  (boolean) True if this transaction was locked via InstantSend\n  }, ...\n}\n')),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "getmempoolancestors", "params": ["mytxid"] }\' -H \'content-type: text/plain;\' http://127.0.0.1:9998/\n')))}d.isMDXComponent=!0}}]);