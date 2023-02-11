"use strict";(self.webpackChunkyerbas_docs=self.webpackChunkyerbas_docs||[]).push([[1448],{12167:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>m});var n=e(87462),r=(e(67294),e(3905)),l=e(22004);const s={sidebar_position:1},i="combinerawtransaction",o={unversionedId:"wallet/cli-wallet/commands/raw-transactions/combinerawtransaction",id:"wallet/cli-wallet/commands/raw-transactions/combinerawtransaction",title:"combinerawtransaction",description:'combinerawtransaction ["hexstring",...]',source:"@site/docs/wallet/cli-wallet/commands/raw-transactions/combinerawtransaction.mdx",sourceDirName:"wallet/cli-wallet/commands/raw-transactions",slug:"/wallet/cli-wallet/commands/raw-transactions/combinerawtransaction",permalink:"/docs/wallet/cli-wallet/commands/raw-transactions/combinerawtransaction",draft:!1,editUrl:"https://github.com/The-Yerbas-Endeavor/yerbas-docs/tree/develop/docs/wallet/cli-wallet/commands/raw-transactions/combinerawtransaction.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"sidebarWallet",previous:{title:"voteraw",permalink:"/docs/wallet/cli-wallet/commands/yerbas/voteraw"},next:{title:"createrawtransaction",permalink:"/docs/wallet/cli-wallet/commands/raw-transactions/createrawtransaction"}},c={},m=[{value:"Arguments",id:"arguments",level:2},{value:"Output",id:"output",level:2},{value:"Examples",id:"examples",level:2}],d={toc:m};function p(t){let{components:a,...s}=t;return(0,r.kt)("wrapper",(0,n.Z)({},d,s,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"combinerawtransaction"},"combinerawtransaction"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"combinerawtransaction ",'["hexstring",...]')),(0,r.kt)("p",null,"Combine multiple partially signed transactions into one transaction.\nThe combined transaction may be another partially signed transaction or a\nfully signed transaction."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'yerbas-cli combinerawtransaction \'["myhex1", "myhex2", "myhex3"]\'')),(0,r.kt)(l.Z,{playing:!0,controls:!0,url:[{src:`${e(23995).Z}`,type:"video/webm"}],mdxType:"ReactPlayer"}),(0,r.kt)("h2",{id:"arguments"},"Arguments"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Argument"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},'"address"'),(0,r.kt)("td",{parentName:"tr",align:null},"(string)"),(0,r.kt)("td",{parentName:"tr",align:null},"The base58check encoded address")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'Arguments:\n1. "txs"         (string) A json array of hex strings of partially signed transactions\n    [\n      "hexstring"     (string) A transaction hash\n      ,...\n    ]\n')),(0,r.kt)("h2",{id:"output"},"Output"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Argument"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},'"hexstring"'),(0,r.kt)("td",{parentName:"tr",align:null},"(string)"),(0,r.kt)("td",{parentName:"tr",align:null},"The hex-encoded raw transaction with signature(s)")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'Result:\n"hex"            (string) The hex-encoded raw transaction with signature(s)\n')),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "combinerawtransaction", "params": ["hex1", "hex2"] }\' -H \'content-type: text/plain;\' http://127.0.0.1:9998/\n')))}p.isMDXComponent=!0},23995:(t,a,e)=>{e.d(a,{Z:()=>n});const n=e.p+"assets/medias/combinerawtransaction-115598cd9b1f5e07ee8c41384da04fe5.webm"}}]);