"use strict";(self.webpackChunkyerbas_docs=self.webpackChunkyerbas_docs||[]).push([[4670],{7892:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>m,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>d,toc:()=>i});var a=n(87462),o=(n(67294),n(3905)),l=n(22004);const s={sidebar_position:41},r="sendfrom",d={unversionedId:"wallet/cli-wallet/commands/wallet/sendfrom",id:"wallet/cli-wallet/commands/wallet/sendfrom",title:"sendfrom",description:'sendfrom "fromaccount" "toaddress" amount ( minconf addlocked "comment" "commentto" )_',source:"@site/docs/wallet/cli-wallet/commands/wallet/sendfrom.mdx",sourceDirName:"wallet/cli-wallet/commands/wallet",slug:"/wallet/cli-wallet/commands/wallet/sendfrom",permalink:"/docs/wallet/cli-wallet/commands/wallet/sendfrom",draft:!1,editUrl:"https://github.com/The-Yerbas-Endeavor/yerbas-docs/tree/develop/docs/wallet/cli-wallet/commands/wallet/sendfrom.mdx",tags:[],version:"current",sidebarPosition:41,frontMatter:{sidebar_position:41},sidebar:"sidebarWallet",previous:{title:"removeprunedfunds",permalink:"/docs/wallet/cli-wallet/commands/wallet/removeprunedfunds"},next:{title:"sendmany",permalink:"/docs/wallet/cli-wallet/commands/wallet/sendmany"}},m={},i=[{value:"Arguments",id:"arguments",level:2},{value:"Output",id:"output",level:2},{value:"Examples",id:"examples",level:2}],c={toc:i};function u(t){let{components:e,...s}=t;return(0,o.kt)("wrapper",(0,a.Z)({},c,s,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"sendfrom"},"sendfrom"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},'sendfrom "fromaccount" "toaddress" amount ( minconf addlocked "comment" "comment_to" )')),(0,o.kt)("p",null,"DEPRECATED (use sendtoaddress). Sent an amount from an account to a yerbas address."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# Send 0.01 YERB from the default account to the address, must have at least 1 confirmation\nyerbas-cli sendfrom "" "XwnLY9Tf7Zsef8gMGL2fhWA9ZmMjt4KPwG" 0.01\n\n# Send 0.01 from the tabby account to the given address, funds must have at least 6 confirmations\nyerbas-cli sendfrom "tabby" "XwnLY9Tf7Zsef8gMGL2fhWA9ZmMjt4KPwG" 0.01 6 false "donation" "seans outpost"\n')),(0,o.kt)(l.Z,{playing:!0,controls:!0,url:[{src:`${n(16475).Z}`,type:"video/webm"}],mdxType:"ReactPlayer"}),(0,o.kt)("h2",{id:"arguments"},"Arguments"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Argument"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},'"fromaccount"'),(0,o.kt)("td",{parentName:"tr",align:null},"(string)"),(0,o.kt)("td",{parentName:"tr",align:null},'The name of the account to send funds from. May be the default account using "".')))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'Arguments:\n1. "fromaccount"       (string, required) The name of the account to send funds from. May be the default account using "".\n                       Specifying an account does not influence coin selection, but it does associate the newly created\n                       transaction with the account, so the account\'s balance computation and transaction history can reflect\n                       the spend.\n2. "toaddress"         (string, required) The yerbas address to send funds to.\n3. amount              (numeric or string, required) The amount in YERB (transaction fee is added on top).\n4. minconf             (numeric, optional, default=1) Only use funds with at least this many confirmations.\n5. addlocked         (bool, optional, default=false) Whether to include transactions locked via InstantSend.\n6. "comment"           (string, optional) A comment used to store what the transaction is for.\n                       This is not part of the transaction, just kept in your wallet.\n7. "comment_to"        (string, optional) An optional comment to store the name of the person or organization\n                       to which you\'re sending the transaction. This is not part of the transaction,\n                       it is just kept in your wallet.\n')),(0,o.kt)("h2",{id:"output"},"Output"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Result"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null}))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"true"),(0,o.kt)("td",{parentName:"tr",align:null},"false"),(0,o.kt)("td",{parentName:"tr",align:null},"(boolean)"),(0,o.kt)("td",{parentName:"tr",align:null},"Whether the command was successful or not")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'Result:\n"txid"                 (string) The transaction id.\n')),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "sendfrom", "params": ["tabby", "XwnLY9Tf7Zsef8gMGL2fhWA9ZmMjt4KPwG", 0.01, 6, false, "donation", "seans outpost"] }\' -H \'content-type: text/plain;\' http://127.0.0.1:9998/\n')))}u.isMDXComponent=!0},16475:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/medias/sendfrom-50958f178d0756e0fdfc714674626356.webm"}}]);