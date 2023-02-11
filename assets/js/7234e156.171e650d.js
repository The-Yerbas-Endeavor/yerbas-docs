"use strict";(self.webpackChunkyerbas_docs=self.webpackChunkyerbas_docs||[]).push([[8077],{9159:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var i=t(7462),a=(t(7294),t(3905)),l=t(2004);const r={sidebar_position:2},s="getmininginfo",o={unversionedId:"wallet/cli-wallet/commands/mining/getmininginfo",id:"wallet/cli-wallet/commands/mining/getmininginfo",title:"getmininginfo",description:"getmininginfo",source:"@site/docs/wallet/cli-wallet/commands/mining/getmininginfo.mdx",sourceDirName:"wallet/cli-wallet/commands/mining",slug:"/wallet/cli-wallet/commands/mining/getmininginfo",permalink:"/docs/wallet/cli-wallet/commands/mining/getmininginfo",draft:!1,editUrl:"https://github.com/The-Yerbas-Endeavor/yerbas-docs/tree/develop/docs/wallet/cli-wallet/commands/mining/getmininginfo.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"sidebarWallet",previous:{title:"getblocktemplate",permalink:"/docs/wallet/cli-wallet/commands/mining/getblocktemplate"},next:{title:"getnetworkhashps",permalink:"/docs/wallet/cli-wallet/commands/mining/getnetworkhashps"}},m={},c=[{value:"Output",id:"output",level:2},{value:"Examples",id:"examples",level:2}],p={toc:c};function d(e){let{components:n,...r}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getmininginfo"},"getmininginfo"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"getmininginfo")),(0,a.kt)("p",null,"Returns a json object containing mining-related information."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"yerbas-cli getmininginfo ")),(0,a.kt)(l.Z,{playing:!0,controls:!0,url:[{src:`${t(7817).Z}`,type:"video/webm"}],mdxType:"ReactPlayer"}),(0,a.kt)("h2",{id:"output"},"Output"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Result"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},'"blocks"'),(0,a.kt)("td",{parentName:"tr",align:null},"(number)"),(0,a.kt)("td",{parentName:"tr",align:null},"The current block")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'Result:\n{\n  "blocks": nnn,             (numeric) The current block\n  "currentblocksize": nnn,   (numeric) The last block size\n  "currentblocktx": nnn,     (numeric) The last block transaction\n  "difficulty": xxx.xxxxx    (numeric) The current difficulty\n  "errors": "..."            (string) Current errors\n  "networkhashps": nnn,      (numeric) The network hashes per second\n  "hashespersec": nnn,       (numeric) Your current hashes per second\n  "algos": nnn,              (string) Current solving block algos orders\n  "pooledtx": n              (numeric) The size of the mempool\n  "chain": "xxxx",           (string) current network name as defined in BIP70 (main, test, regtest)\n}\n')),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "getmininginfo", "params": [] }\' -H \'content-type: text/plain;\' http://127.0.0.1:9998/\n')))}d.isMDXComponent=!0},7817:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/medias/getmininginfo-cf24397a711506f66c0cbeadda93e168.webm"}}]);