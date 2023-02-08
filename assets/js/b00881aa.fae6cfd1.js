"use strict";(self.webpackChunkyerbas_docs=self.webpackChunkyerbas_docs||[]).push([[2038],{6920:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>m});var l=a(7462),n=(a(7294),a(3905)),r=a(2004);const s={sidebar_position:7},o="getblockhashes",c={unversionedId:"wallet/cli-wallet/commands/blockchain/getblockhashes",id:"wallet/cli-wallet/commands/blockchain/getblockhashes",title:"getblockhashes",description:"Returns array of hashes of blocks within the timestamp range provided.",source:"@site/docs/wallet/cli-wallet/commands/blockchain/getblockhashes.mdx",sourceDirName:"wallet/cli-wallet/commands/blockchain",slug:"/wallet/cli-wallet/commands/blockchain/getblockhashes",permalink:"/docs/wallet/cli-wallet/commands/blockchain/getblockhashes",draft:!1,editUrl:"https://github.com/Raptor3um/docs/tree/develop/docs/wallet/cli-wallet/commands/blockchain/getblockhashes.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"sidebarWallet",previous:{title:"getblockhash",permalink:"/docs/wallet/cli-wallet/commands/blockchain/getblockhash"},next:{title:"getblockheader",permalink:"/docs/wallet/cli-wallet/commands/blockchain/getblockheader"}},i={},m=[{value:"Arguments",id:"arguments",level:2},{value:"Output",id:"output",level:2},{value:"Examples",id:"examples",level:2}],h={toc:m};function p(e){let{components:t,...s}=e;return(0,n.kt)("wrapper",(0,l.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"getblockhashes"},"getblockhashes"),(0,n.kt)("p",null,"Returns array of hashes of blocks within the timestamp range provided."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"yerbas-cli getblockhashes 1231614698 1231024505")),(0,n.kt)(r.Z,{playing:!0,controls:!0,url:[{src:`${a(5253).Z}`,type:"video/webm"}],mdxType:"ReactPlayer"}),(0,n.kt)("h2",{id:"arguments"},"Arguments"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Argument"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},'"high"'),(0,n.kt)("td",{parentName:"tr",align:null},"(numeric)"),(0,n.kt)("td",{parentName:"tr",align:null},"The newer block timestamp")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},'"low"'),(0,n.kt)("td",{parentName:"tr",align:null},"(numeric)"),(0,n.kt)("td",{parentName:"tr",align:null},"The older block timestamp")))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"Arguments:\n1. high         (numeric, required) The newer block timestamp\n2. low          (numeric, required) The older block timestamp\n")),(0,n.kt)("h2",{id:"output"},"Output"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Result"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},'"hash"'),(0,n.kt)("td",{parentName:"tr",align:null},"(string)"),(0,n.kt)("td",{parentName:"tr",align:null},"The block hash")))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'Result:\n[\n  "hash"         (string) The block hash\n]\n')),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "getblockhashes", "params": [1231614698, 1231024505] }\' -H \'content-type: text/plain;\' http://127.0.0.1:9998/\n')))}p.isMDXComponent=!0},5253:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/medias/getblockhashes-6ce6d0e915302307ff873bc6ee578c28.webm"}}]);