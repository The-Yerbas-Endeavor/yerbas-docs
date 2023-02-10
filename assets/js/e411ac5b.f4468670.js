"use strict";(self.webpackChunkyerbas_docs=self.webpackChunkyerbas_docs||[]).push([[2708],{54127:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var n=a(87462),r=(a(67294),a(3905)),s=a(22004);const i={sidebar_position:3},l="decoderawtransaction",o={unversionedId:"wallet/cli-wallet/commands/raw-transactions/decoderawtransaction",id:"wallet/cli-wallet/commands/raw-transactions/decoderawtransaction",title:"decoderawtransaction",description:'decoderawtransaction "hexstring"',source:"@site/docs/wallet/cli-wallet/commands/raw-transactions/decoderawtransaction.mdx",sourceDirName:"wallet/cli-wallet/commands/raw-transactions",slug:"/wallet/cli-wallet/commands/raw-transactions/decoderawtransaction",permalink:"/docs/wallet/cli-wallet/commands/raw-transactions/decoderawtransaction",draft:!1,editUrl:"https://github.com/The-Yerbas-Endeavor/yerbas-docs/tree/develop/docs/wallet/cli-wallet/commands/raw-transactions/decoderawtransaction.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"sidebarWallet",previous:{title:"createrawtransaction",permalink:"/docs/wallet/cli-wallet/commands/raw-transactions/createrawtransaction"},next:{title:"decodescript",permalink:"/docs/wallet/cli-wallet/commands/raw-transactions/decodescript"}},c={},d=[{value:"Arguments",id:"arguments",level:2},{value:"Output",id:"output",level:2},{value:"Examples",id:"examples",level:2}],m={toc:d};function p(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"decoderawtransaction"},"decoderawtransaction"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},'decoderawtransaction "hexstring"')),(0,r.kt)("p",null,"Return a JSON object representing the serialized, hex-encoded transaction."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'yerbas-cli decoderawtransaction "hexstring"')),(0,r.kt)(s.Z,{playing:!0,controls:!0,url:[{src:`${a(28222).Z}`,type:"video/webm"}],mdxType:"ReactPlayer"}),(0,r.kt)("h2",{id:"arguments"},"Arguments"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Argument"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},'"hexstring"'),(0,r.kt)("td",{parentName:"tr",align:null},"(string)"),(0,r.kt)("td",{parentName:"tr",align:null},"The transaction hex string")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'Arguments:\n1. "hexstring"      (string, required) The transaction hex string\n')),(0,r.kt)("h2",{id:"output"},"Output"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Result"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"..."),(0,r.kt)("td",{parentName:"tr",align:null},"..."),(0,r.kt)("td",{parentName:"tr",align:null},"...")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'Result:\n{\n  "txid" : "id",        (string) The transaction id\n  "size" : n,             (numeric) The transaction size\n  "version" : n,          (numeric) The version\n  "type" : n,             (numeric) The type\n  "locktime" : ttt,       (numeric) The lock time\n  "vin" : [               (array of json objects)\n     {\n       "txid": "id",    (string) The transaction id\n       "vout": n,         (numeric) The output number\n       "scriptSig": {     (json object) The script\n         "asm": "asm",  (string) asm\n         "hex": "hex"   (string) hex\n       },\n       "sequence": n     (numeric) The script sequence number\n     }\n     ,...\n  ],\n  "vout" : [             (array of json objects)\n     {\n       "value" : x.xxx,            (numeric) The value in YERB\n       "n" : n,                    (numeric) index\n       "scriptPubKey" : {          (json object)\n         "asm" : "asm",          (string) the asm\n         "hex" : "hex",          (string) the hex\n         "reqSigs" : n,            (numeric) The required sigs\n         "type" : "pubkeyhash",  (string) The type, eg \'pubkeyhash\'\n         "addresses" : [           (json array of string)\n           "XwnLY9Tf7Zsef8gMGL2fhWA9ZmMjt4KPwG"   (string) Yerbas address\n           ,...\n         ]\n       }\n     }\n     ,...\n  ],\n  "extraPayloadSize" : n           (numeric) Size of DIP2 extra payload. Only present if it\'s a special TX\n  "extraPayload" : "hex"           (string) Hex encoded DIP2 extra payload data. Only present if it\'s a special TX\n}\n')),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "decoderawtransaction", "params": ["hexstring"] }\' -H \'content-type: text/plain;\' http://127.0.0.1:9998/\n')))}p.isMDXComponent=!0},28222:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/medias/decoderawtransaction-df06c594f7869876b85959d65234a207.webm"}}]);