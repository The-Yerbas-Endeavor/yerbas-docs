"use strict";(self.webpackChunkyerbas_docs=self.webpackChunkyerbas_docs||[]).push([[3160],{7099:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var l=a(7462),n=(a(7294),a(3905)),r=a(2004);const o={sidebar_position:1},s="debug",i={unversionedId:"wallet/cli-wallet/commands/control/debug",id:"wallet/cli-wallet/commands/control/debug",title:"debug",description:'debug "category"',source:"@site/docs/wallet/cli-wallet/commands/control/debug.mdx",sourceDirName:"wallet/cli-wallet/commands/control",slug:"/wallet/cli-wallet/commands/control/debug",permalink:"/docs/wallet/cli-wallet/commands/control/debug",draft:!1,editUrl:"https://github.com/Raptor3um/docs/tree/develop/docs/wallet/cli-wallet/commands/control/debug.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"sidebarWallet",previous:{title:"verifytxoutproof",permalink:"/docs/wallet/cli-wallet/commands/blockchain/verifytxoutproof"},next:{title:"getinfo",permalink:"/docs/wallet/cli-wallet/commands/control/getinfo"}},d={},c=[{value:"Arguments",id:"arguments",level:2},{value:"Output",id:"output",level:2},{value:"Examples",id:"examples",level:2}],m={toc:c};function u(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,l.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"debug"},"debug"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},'debug "category"')),(0,n.kt)("p",null,"Change debug category on the fly. Specify single category or use '+' to specify many.\nThe valid debug categories are: net, tor, mempool, http, bench, zmq, db, rpc, estimatefee, addrman, selectcoins, reindex, cmpctblock, rand, prune, proxy, mempoolrej, libevent, coindb, qt, leveldb, chainlocks, gobject, instantsend, keepass, llmq, llmq-dkg, llmq-sigs, mnpayments, mnsync, privatesend, spork.\nlibevent logging is configured on startup and cannot be modified by this RPC during runtime."),(0,n.kt)("p",null,"There are also a few meta-categories:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'"all", "1" and "" activate all categories at once;'),(0,n.kt)("li",{parentName:"ul"},'"yerbas" activates all Yerbas-specific categories at once;'),(0,n.kt)("li",{parentName:"ul"},'"none" (or "0") deactivates all categories at once.')),(0,n.kt)("p",null,"Note: If specified category doesn't match any of the above, no error is thrown."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"yerbas-cli debug yerbas")),(0,n.kt)(r.Z,{playing:!0,controls:!0,url:[{src:`${a(3570).Z}`,type:"video/webm"}],mdxType:"ReactPlayer"}),(0,n.kt)("h2",{id:"arguments"},"Arguments"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Argument"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},'"category"'),(0,n.kt)("td",{parentName:"tr",align:null},"(string)"),(0,n.kt)("td",{parentName:"tr",align:null},"The name of the debug category to turn on.")))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'Arguments:\n1. "category"          (string, required) The name of the debug category to turn on.\n')),(0,n.kt)("h2",{id:"output"},"Output"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Result"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},'"result"'),(0,n.kt)("td",{parentName:"tr",align:null},"(string)"),(0,n.kt)("td",{parentName:"tr",align:null},'"Debug mode: " followed by the specified category.')))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'Result:\n  result               (string) "Debug mode: " followed by the specified category.\n')),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "debug", "params": [yerbas+net] }\' -H \'content-type: text/plain;\' http://127.0.0.1:9998/\n')))}u.isMDXComponent=!0},3570:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/medias/debug-d4a540177707df1ba6b3620957798d49.webm"}}]);