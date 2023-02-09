"use strict";(self.webpackChunkyerbas_docs=self.webpackChunkyerbas_docs||[]).push([[3822],{9137:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>d,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>i});var n=a(7462),l=(a(7294),a(3905)),r=a(2004);const s={sidebar_position:14},d="getrawchangeaddress",c={unversionedId:"wallet/cli-wallet/commands/wallet/getrawchangeaddress",id:"wallet/cli-wallet/commands/wallet/getrawchangeaddress",title:"getrawchangeaddress",description:"getrawchangeaddress",source:"@site/docs/wallet/cli-wallet/commands/wallet/getrawchangeaddress.mdx",sourceDirName:"wallet/cli-wallet/commands/wallet",slug:"/wallet/cli-wallet/commands/wallet/getrawchangeaddress",permalink:"/docs/wallet/cli-wallet/commands/wallet/getrawchangeaddress",draft:!1,editUrl:"https://github.com/The-Yerbas-Endeavor/yerbas-docs/tree/develop/docs/wallet/cli-wallet/commands/wallet/getrawchangeaddress.mdx",tags:[],version:"current",sidebarPosition:14,frontMatter:{sidebar_position:14},sidebar:"sidebarWallet",previous:{title:"getnewaddress",permalink:"/docs/wallet/cli-wallet/commands/wallet/getnewaddress"},next:{title:"getreceivedbyaccount",permalink:"/docs/wallet/cli-wallet/commands/wallet/getreceivedbyaccount"}},o={},i=[{value:"Arguments",id:"arguments",level:2},{value:"Output",id:"output",level:2},{value:"Examples",id:"examples",level:2}],u={toc:i};function m(e){let{components:t,...s}=e;return(0,l.kt)("wrapper",(0,n.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"getrawchangeaddress"},"getrawchangeaddress"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"getrawchangeaddress")),(0,l.kt)("p",null,"Returns a new Yerbas address, for receiving change.\nThis is for use with raw transactions, NOT normal use."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"yerbas-cli getrawchangeaddress ")),(0,l.kt)(r.Z,{playing:!0,controls:!0,url:[{src:`${a(8920).Z}`,type:"video/webm"}],mdxType:"ReactPlayer"}),(0,l.kt)("h2",{id:"arguments"},"Arguments"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Argument"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},'"account"'),(0,l.kt)("td",{parentName:"tr",align:null},"(string)"),(0,l.kt)("td",{parentName:"tr",align:null},'The account name for the address to be linked to. If not provided, the default account "" is used. It can also be set to the empty string "" to represent the default account. The account does not need to exist, it will be created if there is no account by the given name.')))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'Arguments:\n1. "account"        (string, optional) DEPRECATED. The account name for the address to be linked to. If not provided, the default account "" is used. It can also be set to the empty string "" to represent the default account. The account does not need to exist, it will be created if there is no account by the given name.\n')),(0,l.kt)("h2",{id:"output"},"Output"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Result"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},'"address"'),(0,l.kt)("td",{parentName:"tr",align:null},"(string)"),(0,l.kt)("td",{parentName:"tr",align:null},"The address")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'Result:\n"address"    (string) The address\n')),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "getrawchangeaddress", "params": [] }\' -H \'content-type: text/plain;\' http://127.0.0.1:9998/\n')))}m.isMDXComponent=!0},8920:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/medias/getrawchangeaddress-0d864973e5a8f72ca3a74bc3e209ce71.webm"}}]);