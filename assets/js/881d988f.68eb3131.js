"use strict";(self.webpackChunkyerbas_docs=self.webpackChunkyerbas_docs||[]).push([[9906],{2440:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>d,toc:()=>p});var s=a(7462),l=(a(7294),a(3905)),n=a(2004);const r={sidebar_position:31},i="listaddressgroupings",d={unversionedId:"wallet/cli-wallet/commands/wallet/listaddressgroupings",id:"wallet/cli-wallet/commands/wallet/listaddressgroupings",title:"listaddressgroupings",description:"listaddressgroupings",source:"@site/docs/wallet/cli-wallet/commands/wallet/listaddressgroupings.mdx",sourceDirName:"wallet/cli-wallet/commands/wallet",slug:"/wallet/cli-wallet/commands/wallet/listaddressgroupings",permalink:"/docs/wallet/cli-wallet/commands/wallet/listaddressgroupings",draft:!1,editUrl:"https://github.com/The-Yerbas-Endeavor/yerbas-docs/tree/develop/docs/wallet/cli-wallet/commands/wallet/listaddressgroupings.mdx",tags:[],version:"current",sidebarPosition:31,frontMatter:{sidebar_position:31},sidebar:"sidebarWallet",previous:{title:"listaddressbalances",permalink:"/docs/wallet/cli-wallet/commands/wallet/listaddressbalances"},next:{title:"listlockunspent",permalink:"/docs/wallet/cli-wallet/commands/wallet/listlockunspent"}},o={},p=[{value:"Output",id:"output",level:2},{value:"Examples",id:"examples",level:2}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,s.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"listaddressgroupings"},"listaddressgroupings"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"listaddressgroupings")),(0,l.kt)("p",null,"Lists groups of addresses which have had their common ownership\nmade public by common use as inputs or as the resulting change\nin past transactions"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"yerbas-cli listaddressgroupings ")),(0,l.kt)(n.Z,{playing:!0,controls:!0,url:[{src:`${a(2621).Z}`,type:"video/webm"}],mdxType:"ReactPlayer"}),(0,l.kt)("h2",{id:"output"},"Output"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Result"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},'"address"'),(0,l.kt)("td",{parentName:"tr",align:null},"(string)"),(0,l.kt)("td",{parentName:"tr",align:null},"The yerbas address")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'Result:\n[\n  [\n    [\n      "address",            (string) The yerbas address\n      amount,                 (numeric) The amount in YERB\n      "account"             (string, optional) DEPRECATED. The account\n    ]\n    ,...\n  ]\n  ,...\n]\n')),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "listaddressgroupings", "params": [] }\' -H \'content-type: text/plain;\' http://127.0.0.1:9998/\n')))}u.isMDXComponent=!0},2621:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/medias/listaddressgroupings-b04e2ea7b9f55c40ca1030cf13d59edc.webm"}}]);