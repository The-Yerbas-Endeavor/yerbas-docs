"use strict";(self.webpackChunkyerbas_docs=self.webpackChunkyerbas_docs||[]).push([[7563],{8147:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(7462),i=(n(7294),n(3905)),s=n(2004);const r={sidebar_position:1},o="getblocktemplate",l={unversionedId:"wallet/cli-wallet/commands/mining/getblocktemplate",id:"wallet/cli-wallet/commands/mining/getblocktemplate",title:"getblocktemplate",description:"getblocktemplate ( TemplateRequest )",source:"@site/docs/wallet/cli-wallet/commands/mining/getblocktemplate.mdx",sourceDirName:"wallet/cli-wallet/commands/mining",slug:"/wallet/cli-wallet/commands/mining/getblocktemplate",permalink:"/docs/wallet/cli-wallet/commands/mining/getblocktemplate",draft:!1,editUrl:"https://github.com/The-Yerbas-Endeavor/yerbas-docs/tree/develop/docs/wallet/cli-wallet/commands/mining/getblocktemplate.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"sidebarWallet",previous:{title:"setgenerate",permalink:"/docs/wallet/cli-wallet/commands/generating/setgenerate"},next:{title:"getmininginfo",permalink:"/docs/wallet/cli-wallet/commands/mining/getmininginfo"}},c={},p=[{value:"Arguments",id:"arguments",level:2},{value:"Output",id:"output",level:2},{value:"Examples",id:"examples",level:2}],m={toc:p};function d(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"getblocktemplate"},"getblocktemplate"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"getblocktemplate ( TemplateRequest )")),(0,i.kt)("p",null,"If the request parameters include a 'mode' key, that is used to explicitly select between the default 'template' request or a 'proposal'.\nIt returns data needed to construct a block to work on.\nFor full specification, see BIPs 22, 23, and 9: - ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/bitcoin/bips/blob/master/bip-0022.mediawiki"},"https://github.com/bitcoin/bips/blob/master/bip-0022.mediawiki")," - ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/bitcoin/bips/blob/master/bip-0023.mediawiki"},"https://github.com/bitcoin/bips/blob/master/bip-0023.mediawiki")," - ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/bitcoin/bips/blob/master/bip-0009.mediawiki#getblocktemplate_changes"},"https://github.com/bitcoin/bips/blob/master/bip-0009.mediawiki#getblocktemplate_changes")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"yerbas-cli getblocktemplate")),(0,i.kt)(s.Z,{playing:!0,controls:!0,url:[{src:`${n(7158).Z}`,type:"video/webm"}],mdxType:"ReactPlayer"}),(0,i.kt)("h2",{id:"arguments"},"Arguments"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Argument"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},'"template_request"'),(0,i.kt)("td",{parentName:"tr",align:null},"(json object)"),(0,i.kt)("td",{parentName:"tr",align:null},"A json object in the following spec")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'Arguments:\n1. template_request         (json object, optional) A json object in the following spec\n     {\n       "mode":"template"    (string, optional) This must be set to "template", "proposal" (see BIP 23), or omitted\n       "capabilities":[     (array, optional) A list of strings\n           "support"          (string) client side supported feature, \'longpoll\', \'coinbasetxn\', \'coinbasevalue\', \'proposal\', \'serverlist\', \'workid\'\n           ,...\n       ],\n       "rules":[            (array, optional) A list of strings\n           "support"          (string) client side supported softfork deployment\n           ,...\n       ]\n     }\n\n')),(0,i.kt)("h2",{id:"output"},"Output"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Result"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},'"capabilities"'),(0,i.kt)("td",{parentName:"tr",align:null},"(string)"),(0,i.kt)("td",{parentName:"tr",align:null},"specific client side supported features")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'Result:\n{\n  "capabilities" : [ "capability", ... ],    (array of strings) specific client side supported features\n  "version" : n,                    (numeric) The preferred block version\n  "rules" : [ "rulename", ... ],    (array of strings) specific block rules that are to be enforced\n  "vbavailable" : {                 (json object) set of pending, supported versionbit (BIP 9) softfork deployments\n      "rulename" : bitnumber          (numeric) identifies the bit number as indicating acceptance and readiness for the named softfork rule\n      ,...\n  },\n  "vbrequired" : n,                 (numeric) bit mask of versionbits the server requires set in submissions\n  "previousblockhash" : "xxxx",     (string) The hash of current highest block\n  "transactions" : [                (array) contents of non-coinbase transactions that should be included in the next block\n      {\n         "data" : "xxxx",             (string) transaction data encoded in hexadecimal (byte-for-byte)\n         "hash" : "xxxx",             (string) hash/id encoded in little-endian hexadecimal\n         "depends" : [                (array) array of numbers\n             n                          (numeric) transactions before this one (by 1-based index in \'transactions\' list) that must be present in the final block if this one is\n             ,...\n         ],\n         "fee": n,                    (numeric) difference in value between transaction inputs and outputs (in duffs); for coinbase transactions, this is a negative Number of the total collected block fees (ie, not including the block subsidy); if key is not present, fee is unknown and clients MUST NOT assume there isn\'t one\n         "sigops" : n,                (numeric) total number of SigOps, as counted for purposes of block limits; if key is not present, sigop count is unknown and clients MUST NOT assume there aren\'t any\n         "required" : true|false      (boolean) if provided and true, this transaction must be in the final block\n      }\n      ,...\n  ],\n  "coinbaseaux" : {                 (json object) data that should be included in the coinbase\'s scriptSig content\n      "flags" : "xx"                  (string) key name is to be ignored, and value included in scriptSig\n  },\n  "coinbasevalue" : n,              (numeric) maximum allowable input to coinbase transaction, including the generation award and transaction fees (in duffs)\n  "coinbasetxn" : { ... },          (json object) information for coinbase transaction\n  "target" : "xxxx",                (string) The hash target\n  "mintime" : xxx,                  (numeric) The minimum timestamp appropriate for next block time in seconds since epoch (Jan 1 1970 GMT)\n  "mutable" : [                     (array of string) list of ways the block template may be changed\n     "value"                          (string) A way the block template may be changed, e.g. \'time\', \'transactions\', \'prevblock\'\n     ,...\n  ],\n  "noncerange" : "00000000ffffffff",(string) A range of valid nonces\n  "sigoplimit" : n,                 (numeric) limit of sigops in blocks\n  "sizelimit" : n,                  (numeric) limit of block size\n  "curtime" : ttt,                  (numeric) current timestamp in seconds since epoch (Jan 1 1970 GMT)\n  "bits" : "xxxxxxxx",              (string) compressed target of next block\n  "previousbits" : "xxxxxxxx",      (string) compressed target of current highest block\n  "height" : n                      (numeric) The height of the next block\n  "smartnode" : [                  (array) required smartnode payments that must be included in the next block\n      {\n         "payee" : "xxxx",          (string) payee address\n         "script" : "xxxx",         (string) payee scriptPubKey\n         "amount": n                (numeric) required amount to pay\n      }\n  },\n  "smartnode_payments_started" :  true|false, (boolean) true, if smartnode payments started\n  "smartnode_payments_enforced" : true|false, (boolean) true, if smartnode payments are enforced\n  "superblock" : [                  (array) required superblock payees that must be included in the next block\n      {\n         "payee" : "xxxx",          (string) payee address\n         "script" : "xxxx",         (string) payee scriptPubKey\n         "amount": n                (numeric) required amount to pay\n      }\n      ,...\n  ],\n  "superblocks_started" : true|false, (boolean) true, if superblock payments started\n  "superblocks_enabled" : true|false, (boolean) true, if superblock payments are enabled\n  "coinbase_payload" : "xxxxxxxx"    (string) coinbase transaction payload data encoded in hexadecimal\n}\n')),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "getblocktemplate", "params": [] }\' -H \'content-type: text/plain;\' http://127.0.0.1:9998/\n')))}d.isMDXComponent=!0},7158:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/medias/getblocktemplate-cd902dd256bda502ffdf7023fd49abfd.webm"}}]);