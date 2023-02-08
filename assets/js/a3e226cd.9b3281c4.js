"use strict";(self.webpackChunkyerbas_docs=self.webpackChunkyerbas_docs||[]).push([[3913],{8051:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var n=a(7462),l=(a(7294),a(3905)),r=a(2004);const o={sidebar_position:9},s="getblockheaders",i={unversionedId:"wallet/cli-wallet/commands/blockchain/getblockheaders",id:"wallet/cli-wallet/commands/blockchain/getblockheaders",title:"getblockheaders",description:'getblockheaders "hash" ( count verbose )',source:"@site/docs/wallet/cli-wallet/commands/blockchain/getblockheaders.mdx",sourceDirName:"wallet/cli-wallet/commands/blockchain",slug:"/wallet/cli-wallet/commands/blockchain/getblockheaders",permalink:"/docs/wallet/cli-wallet/commands/blockchain/getblockheaders",draft:!1,editUrl:"https://github.com/Raptor3um/docs/tree/develop/docs/wallet/cli-wallet/commands/blockchain/getblockheaders.mdx",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"sidebarWallet",previous:{title:"getblockheader",permalink:"/docs/wallet/cli-wallet/commands/blockchain/getblockheader"},next:{title:"getblockstats",permalink:"/docs/wallet/cli-wallet/commands/blockchain/getblockstats"}},c={},d=[{value:"Arguments",id:"arguments",level:2},{value:"Output",id:"output",level:2},{value:"Examples",id:"examples",level:2}],h={toc:d};function m(e){let{components:t,...o}=e;return(0,l.kt)("wrapper",(0,n.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"getblockheaders"},"getblockheaders"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},'getblockheaders "hash" ( count verbose )')),(0,l.kt)("p",null,"Returns an array of items with information about count blockheaders starting from hash."),(0,l.kt)("p",null,"If verbose is false, each item is a string that is serialized, hex-encoded data for a single blockheader.\nIf verbose is true, each item is an Object with information about a single blockheader."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},'yerbas-cli getblockheaders "00000000c937983704a73af28acdec37b049d214adbda81d7e2a3dd146f6ed09" 2000')),(0,l.kt)(r.Z,{playing:!0,controls:!0,url:[{src:`${a(343).Z}`,type:"video/webm"}],mdxType:"ReactPlayer"}),(0,l.kt)("h2",{id:"arguments"},"Arguments"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Argument"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},'"hash"'),(0,l.kt)("td",{parentName:"tr",align:null},"(string)"),(0,l.kt)("td",{parentName:"tr",align:null},"The block hash")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"verbose"),(0,l.kt)("td",{parentName:"tr",align:null},"(boolean)"),(0,l.kt)("td",{parentName:"tr",align:null},"(default) true for a json object, false for the hex encoded data")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'Arguments:\n1. "hash"          (string, required) The block hash\n2. count           (numeric, optional, default/max=2000)\n3. verbose         (boolean, optional, default=true) true for a json object, false for the hex encoded data\n')),(0,l.kt)("h2",{id:"output"},"Output"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Result"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},'"hash"'),(0,l.kt)("td",{parentName:"tr",align:null},"(string)"),(0,l.kt)("td",{parentName:"tr",align:null},"The block hash")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'Result (for verbose = true):\n[ {\n  "hash" : "hash",               (string)  The block hash\n  "confirmations" : n,           (numeric) The number of confirmations, or -1 if the block is not on the main chain\n  "height" : n,                  (numeric) The block height or index\n  "version" : n,                 (numeric) The block version\n  "merkleroot" : "xxxx",         (string)  The merkle root\n  "time" : ttt,                  (numeric) The block time in seconds since epoch (Jan 1 1970 GMT)\n  "mediantime" : ttt,            (numeric) The median block time in seconds since epoch (Jan 1 1970 GMT)\n  "nonce" : n,                   (numeric) The nonce\n  "bits" : "1d00ffff",           (string)  The bits\n  "difficulty" : x.xxx,          (numeric) The difficulty\n  "chainwork" : "0000...1f3"     (string)  Expected number of hashes required to produce the current chain (in hex)\n  "previousblockhash" : "hash",  (string)  The hash of the previous block\n  "nextblockhash" : "hash",      (string)  The hash of the next block\n}, {\n       ...\n   },\n...\n]\n\nResult (for verbose=false):\n[\n  "data",                        (string)  A string that is serialized, hex-encoded data for block header.\n  ...\n]\n')),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "getblockheaders", "params": ["00000000c937983704a73af28acdec37b049d214adbda81d7e2a3dd146f6ed09" 2000] }\' -H \'content-type: text/plain;\' http://127.0.0.1:9998/\n')))}m.isMDXComponent=!0},343:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/medias/getblockheaders-5439cb596336d56021884cc0594e5ba8.webm"}}]);