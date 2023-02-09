"use strict";(self.webpackChunkyerbas_docs=self.webpackChunkyerbas_docs||[]).push([[6680],{296:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var n=a(7462),l=(a(7294),a(3905)),o=a(2004);const s={sidebar_position:35},i="listsinceblock",r={unversionedId:"wallet/cli-wallet/commands/wallet/listsinceblock",id:"wallet/cli-wallet/commands/wallet/listsinceblock",title:"listsinceblock",description:'listsinceblock ( "blockhash" targetconfirmations includewatchonly includeremoved )_',source:"@site/docs/wallet/cli-wallet/commands/wallet/listsinceblock.mdx",sourceDirName:"wallet/cli-wallet/commands/wallet",slug:"/wallet/cli-wallet/commands/wallet/listsinceblock",permalink:"/docs/wallet/cli-wallet/commands/wallet/listsinceblock",draft:!1,editUrl:"https://github.com/The-Yerbas-Endeavor/yerbas-docs/tree/develop/docs/wallet/cli-wallet/commands/wallet/listsinceblock.mdx",tags:[],version:"current",sidebarPosition:35,frontMatter:{sidebar_position:35},sidebar:"sidebarWallet",previous:{title:"listreceivedbyaddress",permalink:"/docs/wallet/cli-wallet/commands/wallet/listreceivedbyaddress"},next:{title:"listtransactions",permalink:"/docs/wallet/cli-wallet/commands/wallet/listtransactions"}},c={},d=[{value:"Arguments",id:"arguments",level:2},{value:"Output",id:"output",level:2},{value:"Examples",id:"examples",level:2}],m={toc:d};function h(e){let{components:t,...s}=e;return(0,l.kt)("wrapper",(0,n.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"listsinceblock"},"listsinceblock"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},'listsinceblock ( "blockhash" target_confirmations include_watchonly include_removed )')),(0,l.kt)("p",null,"Get all transactions in blocks since block ","[blockhash]",', or all transactions if omitted.\nIf "blockhash" is no longer a part of the main chain, transactions from the fork point onward are included.\nAdditionally, if include_removed is set, transactions affecting the wallet which were removed are returned in the "removed" array.'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'yerbas-cli listsinceblock\nyerbas-cli listsinceblock "000000000000000bacf66f7497b7dc45ef753ee9a7d38571037cdb1a57f663ad" 6\n')),(0,l.kt)(o.Z,{playing:!0,controls:!0,url:[{src:`${a(5319).Z}`,type:"video/webm"}],mdxType:"ReactPlayer"}),(0,l.kt)("h2",{id:"arguments"},"Arguments"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Argument"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},'"blockhash"'),(0,l.kt)("td",{parentName:"tr",align:null},"(string)"),(0,l.kt)("td",{parentName:"tr",align:null},"The block hash to list transactions since")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"target_confirmations"),(0,l.kt)("td",{parentName:"tr",align:null},"(numeric)"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to include transactions locked via InstantSend.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"include_watchonly"),(0,l.kt)("td",{parentName:"tr",align:null},"(bool)"),(0,l.kt)("td",{parentName:"tr",align:null},"Include balances in watch-only addresses (see 'importaddress')")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"include_removed"),(0,l.kt)("td",{parentName:"tr",align:null},"(bool)"),(0,l.kt)("td",{parentName:"tr",align:null},'Show transactions that were removed due to a reorg in the "removed" array')))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'Arguments:\n1. "blockhash"            (string, optional) The block hash to list transactions since\n2. target_confirmations:    (numeric, optional, default=1) Return the nth block hash from the main chain. e.g. 1 would mean the best block hash. Note: this is not used as a filter, but only affects [lastblock] in the return value\n3. include_watchonly:       (bool, optional, default=false) Include transactions to watch-only addresses (see \'importaddress\')\n4. include_removed:         (bool, optional, default=true) Show transactions that were removed due to a reorg in the "removed" array\n                                                           (not guaranteed to work on pruned nodes)\n')),(0,l.kt)("h2",{id:"output"},"Output"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Result"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},'"transactions"'),(0,l.kt)("td",{parentName:"tr",align:null},"(array)"),(0,l.kt)("td",{parentName:"tr",align:null},"[]")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'Result:\n{\n  "transactions": [\n    "account":"accountname",  (string) DEPRECATED. The account name associated with the transaction. Will be "" for the default account.\n    "address":"address",    (string) The yerbas address of the transaction. Not present for move transactions (category = move).\n    "category":"send|receive",  (string) The transaction category. \'send\' has negative amounts, \'receive\' has positive amounts.\n    "amount": x.xxx,          (numeric) The amount in YERB. This is negative for the \'send\' category, and for the \'move\' category for moves\n                                          outbound. It is positive for the \'receive\' category, and for the \'move\' category for inbound funds.\n    "vout" : n,               (numeric) the vout value\n    "fee": x.xxx,             (numeric) The amount of the fee in YERB. This is negative and only available for the \'send\' category of transactions.\n    "confirmations" : n,      (numeric) The number of blockchain confirmations for the transaction. Available for \'send\' and \'receive\' category of transactions.\n                                          When it\'s < 0, it means the transaction conflicted that many blocks ago.\n    "instantlock" : true|false, (bool) Current transaction lock state. Available for \'send\' and \'receive\' category of transactions.\n    "instantlock_internal" : true|false, (bool) Current internal transaction lock state. Available for \'send\' and \'receive\' category of transactions.\n    "chainlock" : true|false, (bool) The state of the corresponding block chainlock\n    "blockhash": "hashvalue", (string) The block hash containing the transaction. Available for \'send\' and \'receive\' category of transactions.\n    "blockindex": n,          (numeric) The index of the transaction in the block that includes it. Available for \'send\' and \'receive\' category of transactions.\n    "blocktime": xxx,         (numeric) The block time in seconds since epoch (1 Jan 1970 GMT).\n    "txid": "transactionid",  (string) The transaction id. Available for \'send\' and \'receive\' category of transactions.\n    "time": xxx,              (numeric) The transaction time in seconds since epoch (Jan 1 1970 GMT).\n    "timereceived": xxx,      (numeric) The time received in seconds since epoch (Jan 1 1970 GMT). Available for \'send\' and \'receive\' category of transactions.\n    "abandoned": xxx,         (bool) \'true\' if the transaction has been abandoned (inputs are respendable). Only available for the \'send\' category of transactions.\n    "comment": "...",         (string) If a comment is associated with the transaction.\n    "label" : "label"         (string) A comment for the address/transaction, if any\n    "to": "...",              (string) If a comment to is associated with the transaction.\n  ],\n  "removed": [\n    <structure is the same as "transactions" above, only present if include_removed=true>\n    Note: transactions that were readded in the active chain will appear as-is in this array, and may thus have a positive confirmation count.\n  ],\n  "lastblock": "lastblockhash"  (string) The hash of the block (target_confirmations-1) from the best block on the main chain. This is typically used to feed back into listsinceblock the next time you call it. So you would generally use a target_confirmations of say 6, so you will be continually re-notified of transactions until they\'ve reached 6 confirmations plus any new ones\n}\n')),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "listsinceblock", "params": ["000000000000000bacf66f7497b7dc45ef753ee9a7d38571037cdb1a57f663ad", 6] }\' -H \'content-type: text/plain;\' http://127.0.0.1:9998/\n')))}h.isMDXComponent=!0},5319:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/medias/listsinceblock-dae3e3e00421ddaab01fad7823749f77.webm"}}]);