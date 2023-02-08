"use strict";(self.webpackChunkyerbas_docs=self.webpackChunkyerbas_docs||[]).push([[9875],{5574:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>d,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var n=a(7462),l=(a(7294),a(3905)),s=a(2004);const r={sidebar_position:13},d="getnewaddress",o={unversionedId:"wallet/cli-wallet/commands/wallet/getnewaddress",id:"wallet/cli-wallet/commands/wallet/getnewaddress",title:"getnewaddress",description:'getnewaddress ( "account" )',source:"@site/docs/wallet/cli-wallet/commands/wallet/getnewaddress.mdx",sourceDirName:"wallet/cli-wallet/commands/wallet",slug:"/wallet/cli-wallet/commands/wallet/getnewaddress",permalink:"/docs/wallet/cli-wallet/commands/wallet/getnewaddress",draft:!1,editUrl:"https://github.com/Raptor3um/docs/tree/develop/docs/wallet/cli-wallet/commands/wallet/getnewaddress.mdx",tags:[],version:"current",sidebarPosition:13,frontMatter:{sidebar_position:13},sidebar:"sidebarWallet",previous:{title:"getbalance",permalink:"/docs/wallet/cli-wallet/commands/wallet/getbalance"},next:{title:"getrawchangeaddress",permalink:"/docs/wallet/cli-wallet/commands/wallet/getrawchangeaddress"}},i={},c=[{value:"Arguments",id:"arguments",level:2},{value:"Output",id:"output",level:2},{value:"Examples",id:"examples",level:2}],m={toc:c};function p(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"getnewaddress"},"getnewaddress"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},'getnewaddress ( "account" )')),(0,l.kt)("p",null,"Returns a new Yerbas address for receiving payments.\nIf 'account' is specified (DEPRECATED), it is added to the address book\nso payments received with the address will be credited to 'account'."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"yerbas-cli getnewaddress")),(0,l.kt)(s.Z,{playing:!0,controls:!0,url:[{src:`${a(9421).Z}`,type:"video/webm"}],mdxType:"ReactPlayer"}),(0,l.kt)("h2",{id:"arguments"},"Arguments"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Argument"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},'"account"'),(0,l.kt)("td",{parentName:"tr",align:null},"(string)"),(0,l.kt)("td",{parentName:"tr",align:null},'The account name for the address to be linked to. If not provided, the default account "" is used. It can also be set to the empty string "" to represent the default account. The account does not need to exist, it will be created if there is no account by the given name.')))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'Arguments:\n1. "account"        (string, optional) DEPRECATED. The account name for the address to be linked to. If not provided, the default account "" is used. It can also be set to the empty string "" to represent the default account. The account does not need to exist, it will be created if there is no account by the given name.\n')),(0,l.kt)("h2",{id:"output"},"Output"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Result"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},'"address"'),(0,l.kt)("td",{parentName:"tr",align:null},"(string)"),(0,l.kt)("td",{parentName:"tr",align:null},"The new yerbas address")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'Result:\n"address"    (string) The new yerbas address\n')),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "getnewaddress", "params": [] }\' -H \'content-type: text/plain;\' http://127.0.0.1:9998/\n')))}p.isMDXComponent=!0},9421:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/medias/getnewaddress-3ece047cd241acf68d8ed22746ba3e81.webm"}}]);