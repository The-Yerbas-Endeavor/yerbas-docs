"use strict";(self.webpackChunkyerbas_docs=self.webpackChunkyerbas_docs||[]).push([[4513],{43325:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var a=n(87462),r=(n(67294),n(3905)),i=n(22004);const s={sidebar_position:8},o="getpeerinfo",l={unversionedId:"wallet/cli-wallet/commands/network/getpeerinfo",id:"wallet/cli-wallet/commands/network/getpeerinfo",title:"getpeerinfo",description:"getpeerinfo",source:"@site/docs/wallet/cli-wallet/commands/network/getpeerinfo.mdx",sourceDirName:"wallet/cli-wallet/commands/network",slug:"/wallet/cli-wallet/commands/network/getpeerinfo",permalink:"/docs/wallet/cli-wallet/commands/network/getpeerinfo",draft:!1,editUrl:"https://github.com/The-Yerbas-Endeavor/yerbas-docs/tree/develop/docs/wallet/cli-wallet/commands/network/getpeerinfo.mdx",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"sidebarWallet",previous:{title:"getnetworkinfo",permalink:"/docs/wallet/cli-wallet/commands/network/getnetworkinfo"},next:{title:"listbanned",permalink:"/docs/wallet/cli-wallet/commands/network/listbanned"}},c={},d=[{value:"Output",id:"output",level:2},{value:"Examples",id:"examples",level:2}],p={toc:d};function m(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"getpeerinfo"},"getpeerinfo"),(0,r.kt)("p",null,"getpeerinfo"),(0,r.kt)("p",null,"Returns data about each connected network node as a json array of objects."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"yerbas-cli getpeerinfo")),(0,r.kt)(i.Z,{playing:!0,controls:!0,url:[{src:`${n(37660).Z}`,type:"video/webm"}],mdxType:"ReactPlayer"}),(0,r.kt)("h2",{id:"output"},"Output"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Result"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},'"id"'),(0,r.kt)("td",{parentName:"tr",align:null},"(number)"),(0,r.kt)("td",{parentName:"tr",align:null},"Peer index")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'Result:\n[\n  {\n    "id": n,                   (numeric) Peer index\n    "addr":"host:port",      (string) The IP address and port of the peer\n    "addrbind":"ip:port",    (string) Bind address of the connection to the peer\n    "addrlocal":"ip:port",   (string) Local address as reported by the peer\n    "services":"xxxxxxxxxxxxxxxx",   (string) The services offered\n    "verified_proregtx_hash": h, (hex) Only present when the peer is a smartnode and succesfully\n                               autheticated via MNAUTH. In this case, this field contains the\n                               protx hash of the smartnode\n    "relaytxes":true|false,    (boolean) Whether peer has asked us to relay transactions to it\n    "lastsend": ttt,           (numeric) The time in seconds since epoch (Jan 1 1970 GMT) of the last send\n    "lastrecv": ttt,           (numeric) The time in seconds since epoch (Jan 1 1970 GMT) of the last receive\n    "bytessent": n,            (numeric) The total bytes sent\n    "bytesrecv": n,            (numeric) The total bytes received\n    "conntime": ttt,           (numeric) The connection time in seconds since epoch (Jan 1 1970 GMT)\n    "timeoffset": ttt,         (numeric) The time offset in seconds\n    "pingtime": n,             (numeric) ping time (if available)\n    "minping": n,              (numeric) minimum observed ping time (if any at all)\n    "pingwait": n,             (numeric) ping wait (if non-zero)\n    "version": v,              (numeric) The peer version, such as 7001\n    "subver": "/Yerbas Core:x.x.x/",  (string) The string version\n    "inbound": true|false,     (boolean) Inbound (true) or Outbound (false)\n    "addnode": true|false,     (boolean) Whether connection was due to addnode/-connect or if it was an automatic/inbound connection\n    "startingheight": n,       (numeric) The starting height (block) of the peer\n    "banscore": n,             (numeric) The ban score\n    "synced_headers": n,       (numeric) The last header we have in common with this peer\n    "synced_blocks": n,        (numeric) The last block we have in common with this peer\n    "inflight": [\n       n,                        (numeric) The heights of blocks we\'re currently asking from this peer\n       ...\n    ],\n    "whitelisted": true|false, (boolean) Whether the peer is whitelisted\n    "bytessent_per_msg": {\n       "addr": n,              (numeric) The total bytes sent aggregated by message type\n       ...\n    },\n    "bytesrecv_per_msg": {\n       "addr": n,              (numeric) The total bytes received aggregated by message type\n       ...\n    }\n  }\n  ,...\n]\n')),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "getpeerinfo", "params": [] }\' -H \'content-type: text/plain;\' http://127.0.0.1:9998/\n')))}m.isMDXComponent=!0},37660:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/medias/getpeerinfo-731cd359c4b427c9a925a0834a1c3118.webm"}}]);