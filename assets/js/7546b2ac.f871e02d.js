"use strict";(self.webpackChunkyerbas_docs=self.webpackChunkyerbas_docs||[]).push([[4485],{9275:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>g});var n=a(7462),l=(a(7294),a(3905));a(2004);const r={sidebar_position:3},s="getgenerate",i={unversionedId:"wallet/cli-wallet/commands/generating/getgenerate",id:"wallet/cli-wallet/commands/generating/getgenerate",title:"getgenerate",description:"getgenerate",source:"@site/docs/wallet/cli-wallet/commands/generating/getgenerate.mdx",sourceDirName:"wallet/cli-wallet/commands/generating",slug:"/wallet/cli-wallet/commands/generating/getgenerate",permalink:"/docs/wallet/cli-wallet/commands/generating/getgenerate",draft:!1,editUrl:"https://github.com/The-Yerbas-Endeavor/yerbas-docs/tree/develop/docs/wallet/cli-wallet/commands/generating/getgenerate.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"sidebarWallet",previous:{title:"generatetoaddress",permalink:"/docs/wallet/cli-wallet/commands/generating/generatetoaddress"},next:{title:"setgenerate",permalink:"/docs/wallet/cli-wallet/commands/generating/setgenerate"}},o={},g=[{value:"Output",id:"output",level:2},{value:"Examples",id:"examples",level:2}],d={toc:g};function m(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"getgenerate"},"getgenerate"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"getgenerate")),(0,l.kt)("p",null,"Return if the server is set to generate coins or not. The default is false.\nIt is set with the command line argument -gen (or yerbas.conf setting gen)\nIt can also be set with the setgenerate call."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"yerbas-cli getgenerate")),(0,l.kt)("h2",{id:"output"},"Output"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Result"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"(boolean)"),(0,l.kt)("td",{parentName:"tr",align:null},"If the server is set to generate coins or not")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"Result\ntrue|false      (boolean) If the server is set to generate coins or not\n")),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "getgenerate", "params": [] }\' -H \'content-type: text/plain;\' http://127.0.0.1:9998/\n')))}m.isMDXComponent=!0}}]);