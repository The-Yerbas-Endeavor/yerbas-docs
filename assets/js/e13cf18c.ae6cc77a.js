"use strict";(self.webpackChunkyerbas_docs=self.webpackChunkyerbas_docs||[]).push([[4150],{2543:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var n=a(7462),l=(a(7294),a(3905));a(2004);const o={sidebar_position:20},r="gettxoutproof",i={unversionedId:"wallet/cli-wallet/commands/blockchain/gettxoutproof",id:"wallet/cli-wallet/commands/blockchain/gettxoutproof",title:"gettxoutproof",description:'gettxoutproof ["txid",...] ( blockhash )',source:"@site/docs/wallet/cli-wallet/commands/blockchain/gettxoutproof.mdx",sourceDirName:"wallet/cli-wallet/commands/blockchain",slug:"/wallet/cli-wallet/commands/blockchain/gettxoutproof",permalink:"/docs/wallet/cli-wallet/commands/blockchain/gettxoutproof",draft:!1,editUrl:"https://github.com/The-Yerbas-Endeavor/docs/tree/develop/docs/wallet/cli-wallet/commands/blockchain/gettxoutproof.mdx",tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20},sidebar:"sidebarWallet",previous:{title:"gettxout",permalink:"/docs/wallet/cli-wallet/commands/blockchain/gettxout"},next:{title:"gettxoutsetinfo",permalink:"/docs/wallet/cli-wallet/commands/blockchain/gettxoutsetinfo"}},s={},d=[{value:"Arguments",id:"arguments",level:2},{value:"Output",id:"output",level:2},{value:"Examples",id:"examples",level:2}],p={toc:d};function c(t){let{components:e,...a}=t;return(0,l.kt)("wrapper",(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"gettxoutproof"},"gettxoutproof"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"gettxoutproof ",'["txid",...]'," ( blockhash )")),(0,l.kt)("p",null,'Returns a hex-encoded proof that "txid" was included in a block.'),(0,l.kt)("p",null,"NOTE: By default this function only works sometimes. This is when there is an\nunspent output in the utxo for this transaction. To make it always work,\nyou need to maintain a transaction index, using the -txindex command line option or\nspecify the block in which the transaction is included manually (by blockhash)."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'Examples:\nyerbas-cli gettxoutproof \'["mytxid",...]\'\nyerbas-cli gettxoutproof \'["mytxid",...]\' "blockhash"\n')),(0,l.kt)("h2",{id:"arguments"},"Arguments"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Argument"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},'"txids"'),(0,l.kt)("td",{parentName:"tr",align:null},"(string)"),(0,l.kt)("td",{parentName:"tr",align:null},"A json array of txids to filter")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},'"blockhash"'),(0,l.kt)("td",{parentName:"tr",align:null},"(string)"),(0,l.kt)("td",{parentName:"tr",align:null},"If specified, looks for txid in the block with this hash")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'Arguments:\n1. "txids"       (string) A json array of txids to filter\n    [\n      "txid"     (string) A transaction hash\n      ,...\n    ]\n2. "blockhash"   (string, optional) If specified, looks for txid in the block with this hash\n')),(0,l.kt)("h2",{id:"output"},"Output"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Result"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},'"data"'),(0,l.kt)("td",{parentName:"tr",align:null},"(string)"),(0,l.kt)("td",{parentName:"tr",align:null},"A string that is a serialized, hex-encoded data for the proof.")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'Result:\n"data"           (string) A string that is a serialized, hex-encoded data for the proof.\n')),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "gettxoutproof", "params": [["mytxid",...], "blockhash"] }\' -H \'content-type: text/plain;\' http://127.0.0.1:9998/\n')))}c.isMDXComponent=!0}}]);