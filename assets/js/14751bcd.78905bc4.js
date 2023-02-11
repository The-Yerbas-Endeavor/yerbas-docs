"use strict";(self.webpackChunkyerbas_docs=self.webpackChunkyerbas_docs||[]).push([[6021],{4667:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>m});var a=n(7462),l=(n(7294),n(3905)),r=n(2004);const s={sidebar_position:6},o="getnettotals",i={unversionedId:"wallet/cli-wallet/commands/network/getnettotals",id:"wallet/cli-wallet/commands/network/getnettotals",title:"getnettotals",description:"getnettotals",source:"@site/docs/wallet/cli-wallet/commands/network/getnettotals.mdx",sourceDirName:"wallet/cli-wallet/commands/network",slug:"/wallet/cli-wallet/commands/network/getnettotals",permalink:"/docs/wallet/cli-wallet/commands/network/getnettotals",draft:!1,editUrl:"https://github.com/The-Yerbas-Endeavor/yerbas-docs/tree/develop/docs/wallet/cli-wallet/commands/network/getnettotals.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"sidebarWallet",previous:{title:"getconnectioncount",permalink:"/docs/wallet/cli-wallet/commands/network/getconnectioncount"},next:{title:"getnetworkinfo",permalink:"/docs/wallet/cli-wallet/commands/network/getnetworkinfo"}},c={},m=[{value:"Output",id:"output",level:2},{value:"Examples",id:"examples",level:2}],d={toc:m};function u(t){let{components:e,...s}=t;return(0,l.kt)("wrapper",(0,a.Z)({},d,s,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"getnettotals"},"getnettotals"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"getnettotals")),(0,l.kt)("p",null,"Returns information about network traffic, including bytes in, bytes out,\nand current time."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"yerbas-cli getnettotals")),(0,l.kt)(r.Z,{playing:!0,controls:!0,url:[{src:`${n(3910).Z}`,type:"video/webm"}],mdxType:"ReactPlayer"}),(0,l.kt)("h2",{id:"output"},"Output"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Result"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},'"totalbytesrecv"'),(0,l.kt)("td",{parentName:"tr",align:null},"(number)"),(0,l.kt)("td",{parentName:"tr",align:null},"Total bytes received")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'Result:\n{\n  "totalbytesrecv": n,   (numeric) Total bytes received\n  "totalbytessent": n,   (numeric) Total bytes sent\n  "timemillis": t,       (numeric) Current UNIX time in milliseconds\n  "uploadtarget":\n  {\n    "timeframe": n,                         (numeric) Length of the measuring timeframe in seconds\n    "target": n,                            (numeric) Target in bytes\n    "target_reached": true|false,           (boolean) True if target is reached\n    "serve_historical_blocks": true|false,  (boolean) True if serving historical blocks\n    "bytes_left_in_cycle": t,               (numeric) Bytes left in current time cycle\n    "time_left_in_cycle": t                 (numeric) Seconds left in current time cycle\n  }\n}\n')),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "getnettotals", "params": [] }\' -H \'content-type: text/plain;\' http://127.0.0.1:9998/\n')))}u.isMDXComponent=!0},3910:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/medias/getnettotals-93e7dbaa1de12796b371a58e9d4f79a7.webm"}}]);