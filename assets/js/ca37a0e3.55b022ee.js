"use strict";(self.webpackChunkyerbas_docs=self.webpackChunkyerbas_docs||[]).push([[3268],{8531:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>k,frontMatter:()=>r,metadata:()=>s,toc:()=>i});var l=a(7462),n=(a(7294),a(3905));a(2004);const r={sidebar_position:16},o="getmerkleblocks",s={unversionedId:"wallet/cli-wallet/commands/blockchain/getmerkleblocks",id:"wallet/cli-wallet/commands/blockchain/getmerkleblocks",title:"getmerkleblocks",description:'getmerkleblocks "filter" "hash" ( count )',source:"@site/docs/wallet/cli-wallet/commands/blockchain/getmerkleblocks.mdx",sourceDirName:"wallet/cli-wallet/commands/blockchain",slug:"/wallet/cli-wallet/commands/blockchain/getmerkleblocks",permalink:"/docs/wallet/cli-wallet/commands/blockchain/getmerkleblocks",draft:!1,editUrl:"https://github.com/The-Yerbas-Endeavor/yerbas-docs/tree/develop/docs/wallet/cli-wallet/commands/blockchain/getmerkleblocks.mdx",tags:[],version:"current",sidebarPosition:16,frontMatter:{sidebar_position:16},sidebar:"sidebarWallet",previous:{title:"getmempoolinfo",permalink:"/docs/wallet/cli-wallet/commands/blockchain/getmempoolinfo"},next:{title:"getrawmempool",permalink:"/docs/wallet/cli-wallet/commands/blockchain/getrawmempool"}},m={},i=[{value:"Arguments",id:"arguments",level:2},{value:"Output",id:"output",level:2},{value:"Examples",id:"examples",level:2}],c={toc:i};function k(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,l.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"getmerkleblocks"},"getmerkleblocks"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},'getmerkleblocks "filter" "hash" ( count )')),(0,n.kt)("p",null,"Returns an array of hex-encoded merkleblocks for count blocks starting from hash which match filter."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'yerbas-cli getmerkleblocks "2303028005802040100040000008008400048141010000f8400420800080025004000004130000000000000001" "00000000007e1432d2af52e8463278bf556b55cf5049262f25634557e2e91202" 2000\n')),(0,n.kt)("h2",{id:"arguments"},"Arguments"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Argument"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},'"filter"'),(0,n.kt)("td",{parentName:"tr",align:null},"(string)"),(0,n.kt)("td",{parentName:"tr",align:null},"The hex encoded bloom filter")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},'"hash"'),(0,n.kt)("td",{parentName:"tr",align:null},"(string)"),(0,n.kt)("td",{parentName:"tr",align:null},"The block hash")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"count"),(0,n.kt)("td",{parentName:"tr",align:null},"(numeric)"),(0,n.kt)("td",{parentName:"tr",align:null},"(optional, default/max=2000)")))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'Arguments:\n1. "filter"        (string, required) The hex encoded bloom filter\n2. "hash"          (string, required) The block hash\n3. count           (numeric, optional, default/max=2000)\n')),(0,n.kt)("h2",{id:"output"},"Output"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Result"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},'"data"'),(0,n.kt)("td",{parentName:"tr",align:null},"(string)"),(0,n.kt)("td",{parentName:"tr",align:null},"The transaction id of an in-mempool ancestor transaction")))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'Result:\n[\n  "data",                        (string)  A string that is serialized, hex-encoded data for a merkleblock.\n  ...\n]\n')),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "getmerkleblocks", "params": ["2303028005802040100040000008008400048141010000f8400420800080025004000004130000000000000001" "00000000007e1432d2af52e8463278bf556b55cf5049262f25634557e2e91202" 2000] }\' -H \'content-type: text/plain;\' http://127.0.0.1:9998/\n')))}k.isMDXComponent=!0}}]);