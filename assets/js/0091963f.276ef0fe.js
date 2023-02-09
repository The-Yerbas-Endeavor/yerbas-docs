"use strict";(self.webpackChunkyerbas_docs=self.webpackChunkyerbas_docs||[]).push([[6472],{9995:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>o});var s=a(7462),n=(a(7294),a(3905)),d=a(2004);const r={sidebar_position:3},l="getaddresstxids",i={unversionedId:"wallet/cli-wallet/commands/address-index/getaddresstxids",id:"wallet/cli-wallet/commands/address-index/getaddresstxids",title:"getaddresstxids",description:"Returns the txids for an address(es) (requires addressindex to be enabled).",source:"@site/docs/wallet/cli-wallet/commands/address-index/getaddresstxids.mdx",sourceDirName:"wallet/cli-wallet/commands/address-index",slug:"/wallet/cli-wallet/commands/address-index/getaddresstxids",permalink:"/docs/wallet/cli-wallet/commands/address-index/getaddresstxids",draft:!1,editUrl:"https://github.com/The-Yerbas-Endeavor/yerbas-docs/tree/develop/docs/wallet/cli-wallet/commands/address-index/getaddresstxids.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"sidebarWallet",previous:{title:"getaddressmempool",permalink:"/docs/wallet/cli-wallet/commands/address-index/getaddressmempool"},next:{title:"getaddressutxos",permalink:"/docs/wallet/cli-wallet/commands/address-index/getaddressutxos"}},m={},o=[{value:"Arguments",id:"arguments",level:2},{value:"Output",id:"output",level:2},{value:"Examples",id:"examples",level:2}],p={toc:o};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,s.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"getaddresstxids"},"getaddresstxids"),(0,n.kt)("p",null,"Returns the txids for an address(es) (requires addressindex to be enabled)."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},'yerbas-cli getaddresstxids \'{"addresses": ["XwnLY9Tf7Zsef8gMGL2fhWA9ZmMjt4KPwg"]}\'')),(0,n.kt)(d.Z,{playing:!0,controls:!0,url:[{src:`${a(1090).Z}`,type:"video/webm"}],mdxType:"ReactPlayer"}),(0,n.kt)("h2",{id:"arguments"},"Arguments"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Argument"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},'"addresses"'),(0,n.kt)("td",{parentName:"tr",align:null},"(string)"),(0,n.kt)("td",{parentName:"tr",align:null},"(string) The base58check encoded address")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},'"start"'),(0,n.kt)("td",{parentName:"tr",align:null},"(number)"),(0,n.kt)("td",{parentName:"tr",align:null},"The start block height")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},'"end"'),(0,n.kt)("td",{parentName:"tr",align:null},"(number)"),(0,n.kt)("td",{parentName:"tr",align:null},"The end block height")))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'Arguments:\n{\n  "addresses"\n    [\n      "address"  (string) The base58check encoded address\n      ,...\n    ]\n  "start" (number) The start block height\n  "end" (number) The end block height\n}\n')),(0,n.kt)("h2",{id:"output"},"Output"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Result"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},'"transactionid"'),(0,n.kt)("td",{parentName:"tr",align:null},"(string)"),(0,n.kt)("td",{parentName:"tr",align:null},"The transaction id")))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'Result:\n[\n  "transactionid"  (string) The transaction id\n  ,...\n]\n')),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "getaddresstxids", "params": [{"addresses": ["XwnLY9Tf7Zsef8gMGL2fhWA9ZmMjt4KPwg"]}] }\' -H \'content-type: text/plain;\' http://127.0.0.1:9998/\n')))}u.isMDXComponent=!0},1090:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/medias/getaddresstxids-14f3107592fc57599e5fb1549d95195d.webm"}}]);