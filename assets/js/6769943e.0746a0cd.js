"use strict";(self.webpackChunkyerbas_docs=self.webpackChunkyerbas_docs||[]).push([[9152],{4366:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>d,metadata:()=>i,toc:()=>m});var n=a(7462),l=(a(7294),a(3905)),s=a(2004);const d={sidebar_position:1},r="getaddressbalance",i={unversionedId:"wallet/cli-wallet/commands/address-index/getaddressbalance",id:"wallet/cli-wallet/commands/address-index/getaddressbalance",title:"getaddressbalance",description:"Get balance of specific address",source:"@site/docs/wallet/cli-wallet/commands/address-index/getaddressbalance.mdx",sourceDirName:"wallet/cli-wallet/commands/address-index",slug:"/wallet/cli-wallet/commands/address-index/getaddressbalance",permalink:"/docs/wallet/cli-wallet/commands/address-index/getaddressbalance",draft:!1,editUrl:"https://github.com/The-Yerbas-Endeavor/docs/tree/develop/docs/wallet/cli-wallet/commands/address-index/getaddressbalance.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"sidebarWallet",previous:{title:"Getting started",permalink:"/docs/wallet/cli-wallet/getting-started"},next:{title:"getaddressdeltas",permalink:"/docs/wallet/cli-wallet/commands/address-index/getaddressdeltas"}},c={},m=[{value:"Arguments",id:"arguments",level:2},{value:"Output",id:"output",level:2},{value:"Examples",id:"examples",level:2}],p={toc:m};function u(e){let{components:t,...d}=e;return(0,l.kt)("wrapper",(0,n.Z)({},p,d,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"getaddressbalance"},"getaddressbalance"),(0,l.kt)("p",null,"Get balance of specific address"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},'yerbas-cli getaddressbalance \'{"addresses": ["XwnLY9Tf7Zsef8gMGL2fhWA9ZmMjt4KPwg"]}\'')),(0,l.kt)(s.Z,{playing:!0,controls:!0,url:[{src:`${a(7751).Z}`,type:"video/webm"}],mdxType:"ReactPlayer"}),(0,l.kt)("h2",{id:"arguments"},"Arguments"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Argument"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},'"address"'),(0,l.kt)("td",{parentName:"tr",align:null},"(string)"),(0,l.kt)("td",{parentName:"tr",align:null},"The base58check encoded address")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'Arguments:\n{\n  "addresses"\n    [\n      "address"  (string) The base58check encoded address\n      ,...\n    ]\n}\n')),(0,l.kt)("h2",{id:"output"},"Output"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Result"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},'"balance"'),(0,l.kt)("td",{parentName:"tr",align:null},"(string)"),(0,l.kt)("td",{parentName:"tr",align:null},"The current balance in duffs")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},'"received"'),(0,l.kt)("td",{parentName:"tr",align:null},"(string)"),(0,l.kt)("td",{parentName:"tr",align:null},"The total number of duffs received (including change)")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'Result:\n{\n  "balance"  (string) The current balance in duffs\n  "received"  (string) The total number of duffs received (including change)\n}\n')),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "getaddressbalance", "params": [{"addresses": ["XwnLY9Tf7Zsef8gMGL2fhWA9ZmMjt4KPwg"]}] }\' -H \'content-type: text/plain;\' http://127.0.0.1:9998/\n')))}u.isMDXComponent=!0},7751:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/medias/getaddressbalance-1389f8b24880e010cbde534a4e67a12b.webm"}}]);