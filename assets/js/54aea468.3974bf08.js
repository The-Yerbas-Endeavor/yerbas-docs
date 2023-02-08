"use strict";(self.webpackChunkyerbas_docs=self.webpackChunkyerbas_docs||[]).push([[763],{8599:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>d,toc:()=>m});var l=a(7462),n=(a(7294),a(3905)),r=a(2004);const s={sidebar_position:9},i="smartnodelist",d={unversionedId:"wallet/cli-wallet/commands/yerbas/smartnodelist",id:"wallet/cli-wallet/commands/yerbas/smartnodelist",title:"smartnodelist",description:'smartnodelist ( "mode" "filter" )',source:"@site/docs/wallet/cli-wallet/commands/yerbas/smartnodelist.mdx",sourceDirName:"wallet/cli-wallet/commands/yerbas",slug:"/wallet/cli-wallet/commands/yerbas/smartnodelist",permalink:"/docs/wallet/cli-wallet/commands/yerbas/smartnodelist",draft:!1,editUrl:"https://github.com/Raptor3um/docs/tree/develop/docs/wallet/cli-wallet/commands/yerbas/smartnodelist.mdx",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"sidebarWallet",previous:{title:"smartnode",permalink:"/docs/wallet/cli-wallet/commands/yerbas/smartnode"},next:{title:"spork",permalink:"/docs/wallet/cli-wallet/commands/yerbas/spork"}},o={},m=[{value:"Arguments",id:"arguments",level:2},{value:"Output",id:"output",level:2},{value:"Examples",id:"examples",level:2}],p={toc:m};function c(t){let{components:e,...s}=t;return(0,n.kt)("wrapper",(0,l.Z)({},p,s,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"smartnodelist"},"smartnodelist"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},'smartnodelist ( "mode" "filter" )')),(0,n.kt)("p",null,"Get a list of smartnodes in different modes. This call is identical to 'smartnode list' call."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"# Available modes:\n  addr           - Print ip address associated with a smartnode (can be additionally filtered, partial match)\n  full           - Print info in format 'status payee lastpaidtime lastpaidblock IP'\n                   (can be additionally filtered, partial match)\n  info           - Print info in format 'status payee IP'\n                   (can be additionally filtered, partial match)\n  json           - Print info in JSON format (can be additionally filtered, partial match)\n  lastpaidblock  - Print the last block height a node was paid on the network\n  lastpaidtime   - Print the last time a node was paid on the network\n  owneraddress   - Print the smartnode owner Yerbas address\n  payee          - Print the smartnode payout Yerbas address (can be additionally filtered,\n                   partial match)\n  pubKeyOperator - Print the smartnode operator public key\n  status         - Print smartnode status: ENABLED / POSE_BANNED\n                   (can be additionally filtered, partial match)\n  votingaddress  - Print the smartnode voting Yerbas address\n")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"yerbas-cli smartnodelist")),(0,n.kt)(r.Z,{playing:!0,controls:!0,url:[{src:`${a(313).Z}`,type:"video/webm"}],mdxType:"ReactPlayer"}),(0,n.kt)("h2",{id:"arguments"},"Arguments"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Argument"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},'"mode"'),(0,n.kt)("td",{parentName:"tr",align:null},"(string)"),(0,n.kt)("td",{parentName:"tr",align:null},"The mode to run list in")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},'"filter"'),(0,n.kt)("td",{parentName:"tr",align:null},"(string)"),(0,n.kt)("td",{parentName:"tr",align:null},"Filter results. Partial match by outpoint by default in all modes, additional matches in some modes are also available")))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'Arguments:\n1. "mode"      (string, optional/required to use filter, defaults = json) The mode to run list in\n2. "filter"    (string, optional) Filter results. Partial match by outpoint by default in all modes,\n                                    additional matches in some modes are also available\n')),(0,n.kt)("h2",{id:"output"},"Output"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Result"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"..."),(0,n.kt)("td",{parentName:"tr",align:null},"..."),(0,n.kt)("td",{parentName:"tr",align:null},"...")))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"Result:\n{\n}\n")),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "smartnodelist", "params": [] }\' -H \'content-type: text/plain;\' http://127.0.0.1:9998/\n')))}c.isMDXComponent=!0},313:(t,e,a)=>{a.d(e,{Z:()=>l});const l=a.p+"assets/medias/smartnodelist-5c1b0a4569d4eb8bc5cfffe59618ed5a.webm"}}]);