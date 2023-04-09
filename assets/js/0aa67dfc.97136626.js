"use strict";(self.webpackChunkyerbas_docs=self.webpackChunkyerbas_docs||[]).push([[8840],{22132:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>h,contentTitle:()=>o,default:()=>l,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var a=t(87462),n=(t(67294),t(3905));const i={sidebar_position:10,title:"What is stored on the chain"},o=void 0,r={unversionedId:"assets/what_is_on_chain",id:"assets/what_is_on_chain",title:"What is stored on the chain",description:"All asset creations, reissues, transfers, and tags are special scripts and are part of normal transactions.",source:"@site/docs/assets/what_is_on_chain.mdx",sourceDirName:"assets",slug:"/assets/what_is_on_chain",permalink:"/docs/assets/what_is_on_chain",draft:!1,editUrl:"https://github.com/The-Yerbas-Endeavor/yerbas-docs/tree/develop/docs/assets/what_is_on_chain.mdx",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"What is stored on the chain"},sidebar:"sidebarAssets",previous:{title:"Qualifiers, restricted assets, addresses, and tags",permalink:"/docs/assets/creating/qualifiers_restricted_tags"},next:{title:"What is an Egg",permalink:"/docs/assets/Egg"}},h={},c=[],d={toc:c};function l(e){let{components:s,...t}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,t,{components:s,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"All asset creations, reissues, transfers, and tags are special scripts and are part of normal transactions. "),(0,n.kt)("p",null,"When an asset is created, nodes store the asset name, reissuability, divisions, associated data, and respective VOUT information in a database. This is how nodes easily access metadata. During a reissuance, the ownership asset must be sent to prove ownership on-chain and the node will save the new metadata. These asset creation and reissuance transactions are the only places where the metadata is stored on the chain."),(0,n.kt)("p",null,"This means that, say, a 3rd party wallet sends you asset information. Whatever protocol they are using will need to send the client the VOUT of asset creations or reissues so that the client may verify the integrity of the metadata."),(0,n.kt)("p",null,"The same is true for asset tags. They only exist on the chain in one singular transaction. The node then keeps track of where that transaction is in a database for verification later."),(0,n.kt)("p",null,"You may have been surprised earlier when learning that the associated data of an asset is only 32 bytes. You are correct in believing that is not a lot of information. This is an intentional decision to keep clutter off of the chain. Typically, users will use this field for an ",(0,n.kt)("a",{href:"https://ipfs.io/#how"},"IPFS hash")," allowing for websites and files to be stored and hosted off chain whether it be on personal hardware or ",(0,n.kt)("a",{href:"https://yerbasipfs.com/"},"cloud file management hosts"),". IPFS hashs are unique (literally a SHA256 hash of the data) and therefore a user can be confident that an IPFS hash on an asset will always point to the correct data."))}l.isMDXComponent=!0}}]);