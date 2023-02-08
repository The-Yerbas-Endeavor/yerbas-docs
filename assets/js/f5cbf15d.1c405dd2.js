"use strict";(self.webpackChunkyerbas_docs=self.webpackChunkyerbas_docs||[]).push([[2642],{2978:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>p,default:()=>o,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var l=a(7462),n=(a(7294),a(3905));a(2004);const r={sidebar_position:25},p="importpubkey",i={unversionedId:"wallet/cli-wallet/commands/wallet/importpubkey",id:"wallet/cli-wallet/commands/wallet/importpubkey",title:"importpubkey",description:'importpubkey "pubkey" ( "label" rescan )',source:"@site/docs/wallet/cli-wallet/commands/wallet/importpubkey.mdx",sourceDirName:"wallet/cli-wallet/commands/wallet",slug:"/wallet/cli-wallet/commands/wallet/importpubkey",permalink:"/docs/wallet/cli-wallet/commands/wallet/importpubkey",draft:!1,editUrl:"https://github.com/The-Yerbas-Endeavor/docs/tree/develop/docs/wallet/cli-wallet/commands/wallet/importpubkey.mdx",tags:[],version:"current",sidebarPosition:25,frontMatter:{sidebar_position:25},sidebar:"sidebarWallet",previous:{title:"importprunedfunds",permalink:"/docs/wallet/cli-wallet/commands/wallet/importprunedfunds"},next:{title:"importwallet",permalink:"/docs/wallet/cli-wallet/commands/wallet/importwallet"}},s={},u=[{value:"Arguments",id:"arguments",level:2},{value:"Output",id:"output",level:2},{value:"Examples",id:"examples",level:2}],m={toc:u};function o(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,l.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"importpubkey"},"importpubkey"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},'importpubkey "pubkey" ( "label" rescan )')),(0,n.kt)("p",null,"Adds a public key (in hex) that can be watched as if it were in your wallet but cannot be used to spend. Requires a new wallet backup."),(0,n.kt)("p",null,"Note: This call can take minutes to complete if rescan is true."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'# Import a public key with rescan\nyerbas-cli importpubkey "mypubkey"\n\n# Import using a label without rescan\nyerbas-cli importpubkey "mypubkey" "testing" false\n')),(0,n.kt)("h2",{id:"arguments"},"Arguments"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Argument"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},'"privkey"'),(0,n.kt)("td",{parentName:"tr",align:null},"(string)"),(0,n.kt)("td",{parentName:"tr",align:null},"TThe private key (see dumpprivkey)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},'"label"'),(0,n.kt)("td",{parentName:"tr",align:null},"(string)"),(0,n.kt)("td",{parentName:"tr",align:null},"An optional label")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"rescan"),(0,n.kt)("td",{parentName:"tr",align:null},"(boolean)"),(0,n.kt)("td",{parentName:"tr",align:null},"Rescan the wallet for transactions")))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'Arguments:\n1. "pubkey"           (string, required) The hex-encoded public key\n2. "label"            (string, optional, default="") An optional label\n3. rescan               (boolean, optional, default=true) Rescan the wallet for transactions\n')),(0,n.kt)("h2",{id:"output"},"Output"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Result"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"..."),(0,n.kt)("td",{parentName:"tr",align:null},"..."),(0,n.kt)("td",{parentName:"tr",align:null},"...")))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"Result:\n{\n  ...\n}\n")),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "importpubkey", "params": ["mypubkey", "testing", false] }\' -H \'content-type: text/plain;\' http://127.0.0.1:9998/\n')))}o.isMDXComponent=!0}}]);