"use strict";(self.webpackChunkyerbas_docs=self.webpackChunkyerbas_docs||[]).push([[751],{15894:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>d,metadata:()=>o,toc:()=>i});var a=n(87462),l=(n(67294),n(3905));n(22004);const d={sidebar_position:3},r="disconnectnode",o={unversionedId:"wallet/cli-wallet/commands/network/disconnectnode",id:"wallet/cli-wallet/commands/network/disconnectnode",title:"disconnectnode",description:'disconnectnode "address" nodeid',source:"@site/docs/wallet/cli-wallet/commands/network/disconnectnode.mdx",sourceDirName:"wallet/cli-wallet/commands/network",slug:"/wallet/cli-wallet/commands/network/disconnectnode",permalink:"/docs/wallet/cli-wallet/commands/network/disconnectnode",draft:!1,editUrl:"https://github.com/The-Yerbas-Endeavor/yerbas-docs/tree/develop/docs/wallet/cli-wallet/commands/network/disconnectnode.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"sidebarWallet",previous:{title:"clearbanned",permalink:"/docs/wallet/cli-wallet/commands/network/clearbanned"},next:{title:"getaddednodeinfo",permalink:"/docs/wallet/cli-wallet/commands/network/getaddednodeinfo"}},s={},i=[{value:"Arguments",id:"arguments",level:2},{value:"Output",id:"output",level:2},{value:"Examples",id:"examples",level:2}],c={toc:i};function p(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"disconnectnode"},"disconnectnode"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},'disconnectnode "address" nodeid')),(0,l.kt)("p",null,"Immediately disconnects from the specified peer node."),(0,l.kt)("p",null,"Strictly one out of 'address' and 'nodeid' can be provided to identify the node."),(0,l.kt)("p",null,"To disconnect by nodeid, either set 'address' to the empty string, or call using the named 'nodeid' argument only."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'yerbas-cli disconnectnode "192.168.0.6:9999"\nyerbas-cli disconnectnode "" 1\n')),(0,l.kt)("h2",{id:"arguments"},"Arguments"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Argument"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},'"address"'),(0,l.kt)("td",{parentName:"tr",align:null},"(string)"),(0,l.kt)("td",{parentName:"tr",align:null},"(string) The IP address/port of the node")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},'"nodeid"'),(0,l.kt)("td",{parentName:"tr",align:null},"(string)"),(0,l.kt)("td",{parentName:"tr",align:null},"(string) The node ID (see getpeerinfo for node IDs)")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'Arguments:\nArguments:\n1. "address"     (string, optional) The IP address/port of the node\n2. "nodeid"      (number, optional) The node ID (see getpeerinfo for node IDs)\n')),(0,l.kt)("h2",{id:"output"},"Output"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Result"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"..."),(0,l.kt)("td",{parentName:"tr",align:null},"..."),(0,l.kt)("td",{parentName:"tr",align:null},"...")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"Result:\n{\n  ...\n}\n")),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "disconnectnode", "params": ["192.168.0.6:9999"] }\' -H \'content-type: text/plain;\' http://127.0.0.1:9998/\ncurl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "disconnectnode", "params": ["", 1] }\' -H \'content-type: text/plain;\' http://127.0.0.1:9998/\n')))}p.isMDXComponent=!0}}]);