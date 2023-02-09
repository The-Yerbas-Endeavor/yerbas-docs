"use strict";(self.webpackChunkyerbas_docs=self.webpackChunkyerbas_docs||[]).push([[4998],{5342:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>d,toc:()=>o});var n=a(7462),r=(a(7294),a(3905));a(2004);const l={sidebar_position:2},s="generatetoaddress",d={unversionedId:"wallet/cli-wallet/commands/generating/generatetoaddress",id:"wallet/cli-wallet/commands/generating/generatetoaddress",title:"generatetoaddress",description:"generatetoaddress nblocks address (maxtries)",source:"@site/docs/wallet/cli-wallet/commands/generating/generatetoaddress.mdx",sourceDirName:"wallet/cli-wallet/commands/generating",slug:"/wallet/cli-wallet/commands/generating/generatetoaddress",permalink:"/docs/wallet/cli-wallet/commands/generating/generatetoaddress",draft:!1,editUrl:"https://github.com/The-Yerbas-Endeavor/yerbas-docs/tree/develop/docs/wallet/cli-wallet/commands/generating/generatetoaddress.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"sidebarWallet",previous:{title:"generate",permalink:"/docs/wallet/cli-wallet/commands/generating/generate"},next:{title:"getgenerate",permalink:"/docs/wallet/cli-wallet/commands/generating/getgenerate"}},i={},o=[{value:"Arguments",id:"arguments",level:2},{value:"Output",id:"output",level:2},{value:"Examples",id:"examples",level:2}],m={toc:o};function g(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"generatetoaddress"},"generatetoaddress"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"generatetoaddress nblocks address (maxtries)")),(0,r.kt)("p",null,"Mine blocks immediately to a specified address (before the RPC call returns)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# Generate 11 blocks to myaddress\nyerbas-cli generatetoaddress 11 "myaddress"\n')),(0,r.kt)("h2",{id:"arguments"},"Arguments"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Argument"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nblocks"),(0,r.kt)("td",{parentName:"tr",align:null},"(numeric)"),(0,r.kt)("td",{parentName:"tr",align:null},"How many blocks are generated immediately.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"address"),(0,r.kt)("td",{parentName:"tr",align:null},"(string)"),(0,r.kt)("td",{parentName:"tr",align:null},"The address to send the newly generated Yerbas to.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"maxtries"),(0,r.kt)("td",{parentName:"tr",align:null},"(numeric)"),(0,r.kt)("td",{parentName:"tr",align:null},"How many iterations to try (default = 1000000).")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Arguments:\n1. nblocks      (numeric, required) How many blocks are generated immediately.\n2. address      (string, required) The address to send the newly generated Yerbas to.\n3. maxtries     (numeric, optional) How many iterations to try (default = 1000000).\n")),(0,r.kt)("h2",{id:"output"},"Output"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Result"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},'"blockhashes"'),(0,r.kt)("td",{parentName:"tr",align:null},"(array)"),(0,r.kt)("td",{parentName:"tr",align:null},"hashes of blocks generated")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Result:\n[ blockhashes ]     (array) hashes of blocks generated\n")),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "generatetoaddress", "params": [11, "address"] }\' -H \'content-type: text/plain;\' http://127.0.0.1:9998/\n')))}g.isMDXComponent=!0}}]);