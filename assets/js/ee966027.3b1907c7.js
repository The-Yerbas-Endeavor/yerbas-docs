"use strict";(self.webpackChunkyerbas_docs=self.webpackChunkyerbas_docs||[]).push([[2334],{5634:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>o});var l=a(7462),r=(a(7294),a(3905)),n=a(2004);const i={sidebar_position:23},p="importprivkey",s={unversionedId:"wallet/cli-wallet/commands/wallet/importprivkey",id:"wallet/cli-wallet/commands/wallet/importprivkey",title:"importprivkey",description:'importprivkey "privkey" ( "label" ) ( rescan )',source:"@site/docs/wallet/cli-wallet/commands/wallet/importprivkey.mdx",sourceDirName:"wallet/cli-wallet/commands/wallet",slug:"/wallet/cli-wallet/commands/wallet/importprivkey",permalink:"/docs/wallet/cli-wallet/commands/wallet/importprivkey",draft:!1,editUrl:"https://github.com/The-Yerbas-Endeavor/yerbas-docs/tree/develop/docs/wallet/cli-wallet/commands/wallet/importprivkey.mdx",tags:[],version:"current",sidebarPosition:23,frontMatter:{sidebar_position:23},sidebar:"sidebarWallet",previous:{title:"importmulti",permalink:"/docs/wallet/cli-wallet/commands/wallet/importmulti"},next:{title:"importprunedfunds",permalink:"/docs/wallet/cli-wallet/commands/wallet/importprunedfunds"}},m={},o=[{value:"Arguments",id:"arguments",level:2},{value:"Output",id:"output",level:2},{value:"Examples",id:"examples",level:2}],d={toc:o};function u(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,l.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"importprivkey"},"importprivkey"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},'importprivkey "privkey" ( "label" ) ( rescan )')),(0,r.kt)("p",null,"Adds a private key (as returned by dumpprivkey) to your wallet. Requires a new wallet backup."),(0,r.kt)("p",null,"Note: This call can take minutes to complete if rescan is true."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# Dump a private key\nyerbas-cli dumpprivkey "myaddress"\n\n# Import the private key with rescan\nyerbas-cli importprivkey "mykey"\n\n# Import using a label and without rescan\nyerbas-cli importprivkey "mykey" "testing" false\n\n# Import using default blank label and without rescan\nyerbas-cli importprivkey "mykey" "" false\n')),(0,r.kt)(n.Z,{playing:!0,controls:!0,url:[{src:`${a(4443).Z}`,type:"video/webm"}],mdxType:"ReactPlayer"}),(0,r.kt)("h2",{id:"arguments"},"Arguments"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Argument"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},'"privkey"'),(0,r.kt)("td",{parentName:"tr",align:null},"(string)"),(0,r.kt)("td",{parentName:"tr",align:null},"TThe private key (see dumpprivkey)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},'"label"'),(0,r.kt)("td",{parentName:"tr",align:null},"(string)"),(0,r.kt)("td",{parentName:"tr",align:null},"An optional label")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"rescan"),(0,r.kt)("td",{parentName:"tr",align:null},"(boolean)"),(0,r.kt)("td",{parentName:"tr",align:null},"Rescan the wallet for transactions")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'Arguments:\n1. "privkey"          (string, required) The private key (see dumpprivkey)\n2. "label"            (string, optional, default="") An optional label\n3. rescan               (boolean, optional, default=true) Rescan the wallet for transactions\n')),(0,r.kt)("h2",{id:"output"},"Output"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Result"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"..."),(0,r.kt)("td",{parentName:"tr",align:null},"..."),(0,r.kt)("td",{parentName:"tr",align:null},"...")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Result:\n{\n  ...\n}\n")),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "importprivkey", "params": ["mykey", "testing", false] }\' -H \'content-type: text/plain;\' http://127.0.0.1:9998/\n')))}u.isMDXComponent=!0},4443:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/medias/importprivkey-18f5ff0c927946da4a080eaa4c7bb089.webm"}}]);