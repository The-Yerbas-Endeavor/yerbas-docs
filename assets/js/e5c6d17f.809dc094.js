"use strict";(self.webpackChunkyerbas_docs=self.webpackChunkyerbas_docs||[]).push([[2458],{7044:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var n=a(7462),l=(a(7294),a(3905)),s=a(2004);const r={sidebar_position:3},i="getnetworkhashps",o={unversionedId:"wallet/cli-wallet/commands/mining/getnetworkhashps",id:"wallet/cli-wallet/commands/mining/getnetworkhashps",title:"getnetworkhashps",description:"getnetworkhashps ( nblocks height )",source:"@site/docs/wallet/cli-wallet/commands/mining/getnetworkhashps.mdx",sourceDirName:"wallet/cli-wallet/commands/mining",slug:"/wallet/cli-wallet/commands/mining/getnetworkhashps",permalink:"/docs/wallet/cli-wallet/commands/mining/getnetworkhashps",draft:!1,editUrl:"https://github.com/The-Yerbas-Endeavor/docs/tree/develop/docs/wallet/cli-wallet/commands/mining/getnetworkhashps.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"sidebarWallet",previous:{title:"getmininginfo",permalink:"/docs/wallet/cli-wallet/commands/mining/getmininginfo"},next:{title:"prioritisetransaction",permalink:"/docs/wallet/cli-wallet/commands/mining/prioritisetransaction"}},m={},p=[{value:"Arguments",id:"arguments",level:2},{value:"Output",id:"output",level:2},{value:"Examples",id:"examples",level:2}],c={toc:p};function d(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"getnetworkhashps"},"getnetworkhashps"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"getnetworkhashps ( nblocks height )")),(0,l.kt)("p",null,"Returns the estimated network hashes per second based on the last n blocks.\nPass in blocks to override # of blocks, -1 specifies since last difficulty change.\nPass in height to estimate the network speed at the time when a certain block was found."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"yerbas-cli getnetworkhashps")),(0,l.kt)(s.Z,{playing:!0,controls:!0,url:[{src:`${a(9968).Z}`,type:"video/webm"}],mdxType:"ReactPlayer"}),(0,l.kt)("h2",{id:"arguments"},"Arguments"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Argument"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"nblocks"),(0,l.kt)("td",{parentName:"tr",align:null},"(numeric)"),(0,l.kt)("td",{parentName:"tr",align:null},"The number of blocks, or -1 for blocks since last difficulty change.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"height"),(0,l.kt)("td",{parentName:"tr",align:null},"(numeric)"),(0,l.kt)("td",{parentName:"tr",align:null},"To estimate at the time of the given height.")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\nArguments:\n1. nblocks     (numeric, optional, default=120) The number of blocks, or -1 for blocks since last difficulty change.\n2. height      (numeric, optional, default=-1) To estimate at the time of the given height.\n")),(0,l.kt)("h2",{id:"output"},"Output"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Result"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"x"),(0,l.kt)("td",{parentName:"tr",align:null},"(numeric)"),(0,l.kt)("td",{parentName:"tr",align:null},"Hashes per second estimated")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"Result:\nx             (numeric) Hashes per second estimated\n")),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "getnetworkhashps", "params": [] }\' -H \'content-type: text/plain;\' http://127.0.0.1:9998/\n')))}d.isMDXComponent=!0},9968:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/medias/getnetworkhashps-eadc28002a611a6bed8f871a232da941.webm"}}]);