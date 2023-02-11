"use strict";(self.webpackChunkyerbas_docs=self.webpackChunkyerbas_docs||[]).push([[7658],{6677:(t,e,l)=>{l.r(e),l.d(e,{assets:()=>r,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var n=l(7462),a=(l(7294),l(3905)),s=l(2004);const i={sidebar_position:32},c="listlockunspent",o={unversionedId:"wallet/cli-wallet/commands/wallet/listlockunspent",id:"wallet/cli-wallet/commands/wallet/listlockunspent",title:"listlockunspent",description:"listlockunspent",source:"@site/docs/wallet/cli-wallet/commands/wallet/listlockunspent.mdx",sourceDirName:"wallet/cli-wallet/commands/wallet",slug:"/wallet/cli-wallet/commands/wallet/listlockunspent",permalink:"/docs/wallet/cli-wallet/commands/wallet/listlockunspent",draft:!1,editUrl:"https://github.com/The-Yerbas-Endeavor/yerbas-docs/tree/develop/docs/wallet/cli-wallet/commands/wallet/listlockunspent.mdx",tags:[],version:"current",sidebarPosition:32,frontMatter:{sidebar_position:32},sidebar:"sidebarWallet",previous:{title:"listaddressgroupings",permalink:"/docs/wallet/cli-wallet/commands/wallet/listaddressgroupings"},next:{title:"listreceivedbyaccount",permalink:"/docs/wallet/cli-wallet/commands/wallet/listreceivedbyaccount"}},r={},d=[{value:"Output",id:"output",level:2},{value:"Examples",id:"examples",level:2}],p={toc:d};function u(t){let{components:e,...i}=t;return(0,a.kt)("wrapper",(0,n.Z)({},p,i,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"listlockunspent"},"listlockunspent"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"listlockunspent")),(0,a.kt)("p",null,"Returns list of temporarily unspendable outputs.\nSee the lockunspent call to lock and unlock transactions for spending."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'# List the unspent transactions\nyerbas-cli listunspent\n\n# Lock an unspent transaction\nyerbas-cli lockunspent false "[{\\"txid\\":\\"a08e6907dbbd3d809776dbfc5d82e371b764ed838b5655e72f463568df1aadf0\\",\\"vout\\":1}]"\n\n# List the locked transactions\nyerbas-cli listlockunspent\n\n# Unlock the transaction again\nyerbas-cli lockunspent true "[{\\"txid\\":\\"a08e6907dbbd3d809776dbfc5d82e371b764ed838b5655e72f463568df1aadf0\\",\\"vout\\":1}]"\n')),(0,a.kt)(s.Z,{playing:!0,controls:!0,url:[{src:`${l(2105).Z}`,type:"video/webm"}],mdxType:"ReactPlayer"}),(0,a.kt)("h2",{id:"output"},"Output"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Result"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},'"txid"'),(0,a.kt)("td",{parentName:"tr",align:null},"(string)"),(0,a.kt)("td",{parentName:"tr",align:null},"The transaction id locked")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'Result:\n[\n  {\n    "txid" : "transactionid",     (string) The transaction id locked\n    "vout" : n                      (numeric) The vout value\n  }\n  ,...\n]\n')),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "listlockunspent", "params": [] }\' -H \'content-type: text/plain;\' http://127.0.0.1:9998/\n')))}u.isMDXComponent=!0},2105:(t,e,l)=>{l.d(e,{Z:()=>n});const n=l.p+"assets/medias/listlockunspent-41b183ad06cec5bc4fd7ac5790212a9f.webm"}}]);