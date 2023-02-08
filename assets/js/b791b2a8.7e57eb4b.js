"use strict";(self.webpackChunkyerbas_docs=self.webpackChunkyerbas_docs||[]).push([[5861],{3224:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>x,frontMatter:()=>l,metadata:()=>s,toc:()=>m});var a=n(7462),o=(n(7294),n(3905)),r=n(2004);const l={sidebar_position:1},i="getinfo",s={unversionedId:"wallet/cli-wallet/commands/control/getinfo",id:"wallet/cli-wallet/commands/control/getinfo",title:"getinfo",description:"getinfo",source:"@site/docs/wallet/cli-wallet/commands/control/getinfo.mdx",sourceDirName:"wallet/cli-wallet/commands/control",slug:"/wallet/cli-wallet/commands/control/getinfo",permalink:"/docs/wallet/cli-wallet/commands/control/getinfo",draft:!1,editUrl:"https://github.com/The-Yerbas-Endeavor/docs/tree/develop/docs/wallet/cli-wallet/commands/control/getinfo.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"sidebarWallet",previous:{title:"debug",permalink:"/docs/wallet/cli-wallet/commands/control/debug"},next:{title:"getmemoryinfo",permalink:"/docs/wallet/cli-wallet/commands/control/getmemoryinfo"}},c={},m=[{value:"Output",id:"output",level:2},{value:"Examples",id:"examples",level:2}],d={toc:m};function x(e){let{components:t,...l}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getinfo"},"getinfo"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"getinfo")),(0,o.kt)("p",null,"DEPRECATED. Returns an object containing various state info."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"yerbas-cli getinfo ")),(0,o.kt)(r.Z,{playing:!0,controls:!0,url:[{src:`${n(6912).Z}`,type:"video/webm"}],mdxType:"ReactPlayer"}),(0,o.kt)("h2",{id:"output"},"Output"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Result"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},'"deprecation-warning"'),(0,o.kt)("td",{parentName:"tr",align:null},"(string)"),(0,o.kt)("td",{parentName:"tr",align:null},"warning that the getinfo command is deprecated and will be removed in a future version")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'Result:\n{\n  "deprecation-warning": "..." (string) warning that the getinfo command is deprecated and will be removed in a future version\n  "version": xxxxx,           (numeric) the server version\n  "protocolversion": xxxxx,   (numeric) the protocol version\n  "walletversion": xxxxx,     (numeric) the wallet version\n  "balance": xxxxxxx,         (numeric) the total yerbas balance of the wallet\n  "privatesend_balance": xxxxxx, (numeric) the PrivateSend balance in YERB\n  "blocks": xxxxxx,           (numeric) the current number of blocks processed in the server\n  "timeoffset": xxxxx,        (numeric) the time offset\n  "connections": xxxxx,       (numeric) the number of connections\n  "proxy": "host:port",       (string, optional) the proxy used by the server\n  "difficulty": xxxxxx,       (numeric) the current difficulty\n  "testnet": true|false,      (boolean) if the server is using testnet or not\n  "keypoololdest": xxxxxx,    (numeric) the timestamp (seconds since Unix epoch) of the oldest pre-generated key in the key pool\n  "keypoolsize": xxxx,        (numeric) how many new keys are pre-generated\n  "unlocked_until": ttt,      (numeric) the timestamp in seconds since epoch (midnight Jan 1 1970 GMT) that the wallet is unlocked for transfers, or 0 if the wallet is locked\n  "paytxfee": x.xxxx,         (numeric) the transaction fee set in YERB/kB\n  "relayfee": x.xxxx,         (numeric) minimum relay fee for transactions in YERB/kB\n  "errors": "..."             (string) any error messages\n}\n')),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "getinfo", "params": [] }\' -H \'content-type: text/plain;\' http://127.0.0.1:9998/\n')))}x.isMDXComponent=!0},6912:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/medias/getinfo-84f5c71e045fa3db67a01a95f85d7509.webm"}}]);