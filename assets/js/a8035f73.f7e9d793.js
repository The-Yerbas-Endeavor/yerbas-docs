"use strict";(self.webpackChunkyerbas_docs=self.webpackChunkyerbas_docs||[]).push([[9132],{8071:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>p});var n=a(7462),l=(a(7294),a(3905));a(2004);const i={sidebar_position:10},s="ping",r={unversionedId:"wallet/cli-wallet/commands/network/ping",id:"wallet/cli-wallet/commands/network/ping",title:"ping",description:"ping",source:"@site/docs/wallet/cli-wallet/commands/network/ping.mdx",sourceDirName:"wallet/cli-wallet/commands/network",slug:"/wallet/cli-wallet/commands/network/ping",permalink:"/docs/wallet/cli-wallet/commands/network/ping",draft:!1,editUrl:"https://github.com/The-Yerbas-Endeavor/yerbas-docs/tree/develop/docs/wallet/cli-wallet/commands/network/ping.mdx",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"sidebarWallet",previous:{title:"listbanned",permalink:"/docs/wallet/cli-wallet/commands/network/listbanned"},next:{title:"setban",permalink:"/docs/wallet/cli-wallet/commands/network/setban"}},o={},p=[{value:"Output",id:"output",level:2},{value:"Examples",id:"examples",level:2}],d={toc:p};function m(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"ping"},"ping"),(0,l.kt)("p",null,"ping"),(0,l.kt)("p",null,"Requests that a ping be sent to all other nodes, to measure ping time.\nResults provided in getpeerinfo, pingtime and pingwait fields are decimal seconds.\nPing command is handled in queue with all other commands, so it measures processing backlog, not just network ping."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"yerbas-cli ping ")),(0,l.kt)("h2",{id:"output"},"Output"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Result"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"..."),(0,l.kt)("td",{parentName:"tr",align:null},"..."),(0,l.kt)("td",{parentName:"tr",align:null},"...")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"Result:\n{\n}\n")),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "ping", "params": [] }\' -H \'content-type: text/plain;\' http://127.0.0.1:9998/\n')))}m.isMDXComponent=!0}}]);