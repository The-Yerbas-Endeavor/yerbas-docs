"use strict";(self.webpackChunkyerbas_docs=self.webpackChunkyerbas_docs||[]).push([[345],{7140:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var n=a(7462),r=(a(7294),a(3905)),s=a(2004);const i={sidebar_position:5},l="fundrawtransaction",o={unversionedId:"wallet/cli-wallet/commands/raw-transactions/fundrawtransaction",id:"wallet/cli-wallet/commands/raw-transactions/fundrawtransaction",title:"fundrawtransaction",description:'fundrawtransaction "hexstring" ( options )',source:"@site/docs/wallet/cli-wallet/commands/raw-transactions/fundrawtransaction.mdx",sourceDirName:"wallet/cli-wallet/commands/raw-transactions",slug:"/wallet/cli-wallet/commands/raw-transactions/fundrawtransaction",permalink:"/docs/wallet/cli-wallet/commands/raw-transactions/fundrawtransaction",draft:!1,editUrl:"https://github.com/The-Yerbas-Endeavor/yerbas-docs/tree/develop/docs/wallet/cli-wallet/commands/raw-transactions/fundrawtransaction.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"sidebarWallet",previous:{title:"decodescript",permalink:"/docs/wallet/cli-wallet/commands/raw-transactions/decodescript"},next:{title:"getrawtransaction",permalink:"/docs/wallet/cli-wallet/commands/raw-transactions/getrawtransaction"}},d={},u=[{value:"Arguments",id:"arguments",level:2},{value:"Output",id:"output",level:2},{value:"Examples",id:"examples",level:2}],c={toc:u};function p(t){let{components:e,...i}=t;return(0,r.kt)("wrapper",(0,n.Z)({},c,i,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"fundrawtransaction"},"fundrawtransaction"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},'fundrawtransaction "hexstring" ( options )')),(0,r.kt)("p",null,'Add inputs to a transaction until it has enough in value to meet its out value.\nThis will not modify existing inputs, and will add at most one change output to the outputs.\nNo existing outputs will be modified unless "subtractFeeFromOutputs" is specified.\nNote that inputs which were signed may need to be resigned after completion since in/outputs have been added.\nThe inputs added will not be signed, use signrawtransaction for that.\nNote that all existing inputs must have their previous output transaction be in the wallet.\nNote that all inputs selected must be of standard form and P2SH scripts must be\nin the wallet using importaddress or addmultisigaddress (to calculate fees).\nYou can see whether this is the case by checking the "solvable" field in the listunspent output.\nOnly pay-to-pubkey, multisig, and P2SH versions thereof are currently supported for watch-only'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'#Create a transaction with no inputs\nyerbas-cli createrawtransaction "[]" "{\\"myaddress\\":0.01}"\n\n# Add sufficient unsigned inputs to meet the output value\nyerbas-cli fundrawtransaction "rawtransactionhex"\n\n# Sign the transaction\nyerbas-cli signrawtransaction "fundedtransactionhex"\n\n# Send the transaction\nyerbas-cli sendrawtransaction "signedtransactionhex"\n')),(0,r.kt)(s.Z,{playing:!0,controls:!0,url:[{src:`${a(6925).Z}`,type:"video/webm"}],mdxType:"ReactPlayer"}),(0,r.kt)("h2",{id:"arguments"},"Arguments"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Argument"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},'"hexstring"'),(0,r.kt)("td",{parentName:"tr",align:null},"(string)"),(0,r.kt)("td",{parentName:"tr",align:null},"The hex string of the raw transaction")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'Arguments:\n1. "hexstring"           (string, required) The hex string of the raw transaction\n2. options                 (object, optional)\n   {\n     "changeAddress"          (string, optional, default pool address) The yerbas address to receive the change\n     "changePosition"         (numeric, optional, default random) The index of the change output\n     "includeWatching"        (boolean, optional, default false) Also select inputs which are watch only\n     "lockUnspents"           (boolean, optional, default false) Lock selected unspent outputs\n     "feeRate"                (numeric, optional, default not set: makes wallet determine the fee) Set a specific feerate (YERB per KB)\n     "subtractFeeFromOutputs" (array, optional) A json array of integers.\n                              The fee will be equally deducted from the amount of each specified output.\n                              The outputs are specified by their zero-based index, before any change output is added.\n                              Those recipients will receive less yerbas than you enter in their corresponding amount field.\n                              If no outputs are specified here, the sender pays the fee.\n                                  [vout_index,...]\n     "conf_target"            (numeric, optional) Confirmation target (in blocks)\n     "estimate_mode"          (string, optional, default=UNSET) The fee estimate mode, must be one of:\n         "UNSET"\n         "ECONOMICAL"\n         "CONSERVATIVE"\n   }\n                         for backward compatibility: passing in a true instead of an object will result in {"includeWatching":true}\n')),(0,r.kt)("h2",{id:"output"},"Output"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Result"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},'"hex"'),(0,r.kt)("td",{parentName:"tr",align:null},"(string)"),(0,r.kt)("td",{parentName:"tr",align:null},"The resulting raw transaction (hex-encoded string)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},'"fee"'),(0,r.kt)("td",{parentName:"tr",align:null},"(numeric)"),(0,r.kt)("td",{parentName:"tr",align:null},"Fee in YERB the resulting transaction pays")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},'"changepos"'),(0,r.kt)("td",{parentName:"tr",align:null},"(numeric)"),(0,r.kt)("td",{parentName:"tr",align:null},"The position of the added change output, or -1")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'Result:\n{\n  "hex":       "value", (string)  The resulting raw transaction (hex-encoded string)\n  "fee":       n,         (numeric) Fee in YERB the resulting transaction pays\n  "changepos": n          (numeric) The position of the added change output, or -1\n}\n')),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "getaddressbalance", "params": [{"addresses": ["XwnLY9Tf7Zsef8gMGL2fhWA9ZmMjt4KPwg"]}] }\' -H \'content-type: text/plain;\' http://127.0.0.1:9998/\n')))}p.isMDXComponent=!0},6925:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/medias/fundrawtransaction-492d6e4ccd439acce24a2d8130c7f3df.webm"}}]);