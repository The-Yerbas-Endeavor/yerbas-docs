"use strict";(self.webpackChunkyerbas_docs=self.webpackChunkyerbas_docs||[]).push([[6703],{7879:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>d,frontMatter:()=>r,metadata:()=>c,toc:()=>o});var l=a(7462),n=(a(7294),a(3905)),s=a(2004);const r={sidebar_position:8},p="encryptwallet",c={unversionedId:"wallet/cli-wallet/commands/wallet/encryptwallet",id:"wallet/cli-wallet/commands/wallet/encryptwallet",title:"encryptwallet",description:'encryptwallet "passphrase"',source:"@site/docs/wallet/cli-wallet/commands/wallet/encryptwallet.mdx",sourceDirName:"wallet/cli-wallet/commands/wallet",slug:"/wallet/cli-wallet/commands/wallet/encryptwallet",permalink:"/docs/wallet/cli-wallet/commands/wallet/encryptwallet",draft:!1,editUrl:"https://github.com/The-Yerbas-Endeavor/yerbas-docs/tree/develop/docs/wallet/cli-wallet/commands/wallet/encryptwallet.mdx",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"sidebarWallet",previous:{title:"dumpwallet",permalink:"/docs/wallet/cli-wallet/commands/wallet/dumpwallet"},next:{title:"getaccount",permalink:"/docs/wallet/cli-wallet/commands/wallet/getaccount"}},i={},o=[{value:"Arguments",id:"arguments",level:2},{value:"Output",id:"output",level:2},{value:"Examples",id:"examples",level:2}],m={toc:o};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,l.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"encryptwallet"},"encryptwallet"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},'encryptwallet "passphrase"')),(0,n.kt)("p",null,"Encrypts the wallet with 'passphrase'. This is for first time encryption.\nAfter this, any calls that interact with private keys such as sending or signing\nwill require the passphrase to be set prior the making these calls.\nUse the walletpassphrase call for this, and then walletlock call.\nIf the wallet is already encrypted, use the walletpassphrasechange call.\nNote that this will shutdown the server."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'# Encrypt your wallet\nyerbas-cli encryptwallet "my pass phrase"\n\n# Now set the passphrase to use the wallet, such as for signing or sending yerbas\nyerbas-cli walletpassphrase "my pass phrase"\n\n# Now we can do something like sign\nyerbas-cli signmessage "address" "test message"\n\n# Now lock the wallet again by removing the passphrase\nyerbas-cli walletlock\n')),(0,n.kt)(s.Z,{playing:!0,controls:!0,url:[{src:`${a(4370).Z}`,type:"video/webm"}],mdxType:"ReactPlayer"}),(0,n.kt)("h2",{id:"arguments"},"Arguments"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Argument"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},'"passphrase"'),(0,n.kt)("td",{parentName:"tr",align:null},"(string)"),(0,n.kt)("td",{parentName:"tr",align:null},"The pass phrase to encrypt the wallet with. It must be at least 1 character, but should be long.")))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'Arguments:\n1. "passphrase"    (string) The pass phrase to encrypt the wallet with. It must be at least 1 character, but should be long.\n')),(0,n.kt)("h2",{id:"output"},"Output"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Result"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"..."),(0,n.kt)("td",{parentName:"tr",align:null},"..."),(0,n.kt)("td",{parentName:"tr",align:null},"...")))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"Result:\n{\n  ...\n}\n")),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "encryptwallet", "params": ["my pass phrase"] }\' -H \'content-type: text/plain;\' http://127.0.0.1:9998/\n')))}d.isMDXComponent=!0},4370:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/medias/encryptwallet-3d49e68bbe9d7ccb8391526dca0187ca.webm"}}]);