"use strict";(self.webpackChunkyerbas_docs=self.webpackChunkyerbas_docs||[]).push([[2774],{49568:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>p});var n=t(87462),o=(t(67294),t(3905)),a=t(22004);const s={sidebar_position:2},l="Cross-compiling",r={unversionedId:"mining/compiling/crosscompiling",id:"mining/compiling/crosscompiling",title:"Cross-compiling",description:"Video Guide",source:"@site/docs/mining/compiling/crosscompiling.mdx",sourceDirName:"mining/compiling",slug:"/mining/compiling/crosscompiling",permalink:"/docs/mining/compiling/crosscompiling",draft:!1,editUrl:"https://github.com/The-Yerbas-Endeavor/yerbas-docs/tree/develop/docs/mining/compiling/crosscompiling.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"sidebarMining",previous:{title:"Basic Compiling",permalink:"/docs/mining/compiling/basiccompilation"},next:{title:"Mining Pool Setup",permalink:"/docs/mining/miningpoolsetup"}},d={},p=[{value:"Video Guide",id:"video-guide",level:2},{value:"Cross-compiling Guide",id:"cross-compiling-guide",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Installation",id:"installation",level:3},{value:"Compilation",id:"compilation",level:3},{value:"Addtional Cleanup",id:"addtional-cleanup",level:3},{value:"Accessing CPU Miner Binaries",id:"accessing-cpu-miner-binaries",level:3}],c={toc:p};function u(e){let{components:i,...s}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,s,{components:i,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"cross-compiling"},"Cross-compiling"),(0,o.kt)("h2",{id:"video-guide"},"Video Guide"),(0,o.kt)("sub",null,"Video Guide - credit @Revvz"),(0,o.kt)(a.Z,{playing:!0,controls:!0,url:"https://www.youtube.com/watch?v=RFmkqNmDS9I",muted:!0,playing:!1,mdxType:"ReactPlayer"}),(0,o.kt)("h2",{id:"cross-compiling-guide"},"Cross-compiling Guide"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"This guide will show you how to automatically cross compile EXE files for the Yerbas CPU miner through a tool that utilizes Ubuntu and WSL.")),(0,o.kt)("p",null,"The full offline guide as well as files needed for this guide are here: Cross Compile Files"),(0,o.kt)("h3",{id:"requirements"},"Requirements"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This guide assumes that you have Ubuntu 20.04 installed and running under WSL 2. If you don't have WSL 2 and/or Ubuntu 20.04 installed, please install it.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Enough computing resources and available instruction sets to compile the CPU miner (varies by system)"),(0,o.kt)("li",{parentName:"ul"},"PowerShell Script Execution Policy must be set to Unrestricted. Do it using the following (must run PowerShell as Administrator): ",(0,o.kt)("inlineCode",{parentName:"li"},"Set-ExecutionPolicy unrestricted"),". To revert this change after you finished cross compiling the CPU miner, run ",(0,o.kt)("inlineCode",{parentName:"li"},"Set-ExecutionPolicy restricted"))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Execution Policy Example",src:t(37711).Z,width:"1409",height:"174"})),(0,o.kt)("h3",{id:"installation"},"Installation"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Before installing dependencies, it is highly recommended to update the package list and upgrade Ubuntu. This can be done using the following:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt update && sudo apt upgrade\n")),(0,o.kt)("p",null,"Due to PowerShell not having access to the ",(0,o.kt)("inlineCode",{parentName:"p"},"sudo")," command that is present in Ubuntu 20.04, you will have to install some dependencies using ",(0,o.kt)("inlineCode",{parentName:"p"},"apt"),". This can simply be done using the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install mingw-w64 libz-mingw-w64-dev build-essential automake libssl-dev libcurl4-openssl-dev libjansson-dev libgmp-dev zlib1g-dev git unzip\n")),(0,o.kt)("h3",{id:"compilation"},"Compilation"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Open cross-compile-yerb-miner.ps1 by right clicking on the file and selecting ",(0,o.kt)("inlineCode",{parentName:"li"},"Run With PowerShell"),". A GUI will pop up. This GUI gives you access to everything you need to cross compile the Yerbas CPU miner (based on ",(0,o.kt)("inlineCode",{parentName:"li"},"cpuminer-opt"),")")),(0,o.kt)("p",null,(0,o.kt)("img",{src:t(34216).Z,width:"1152",height:"237"})),(0,o.kt)("p",null,(0,o.kt)("img",{src:t(93774).Z,width:"990",height:"679"})),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Select the output directory of the miner EXEs and the extra libraries by cliking on Click To Set. A File Explorer window will pop up asking you to pick a folder.")),(0,o.kt)("p",null,(0,o.kt)("img",{src:t(70992).Z,width:"990",height:"679"})),(0,o.kt)("p",null,(0,o.kt)("img",{src:t(73060).Z,width:"940",height:"970"})),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"After the ouput directory has been set, you may click ",(0,o.kt)("inlineCode",{parentName:"li"},"Compile"),". This may take a while, so please pe patient. The whole process is automated, so when the compilation is complete, a popup window will show letting you know that compilation is complete. The CPU miner EXEs will be found in the output directory you choose, assuming that is was accessible after compilation. The GUI will freeze, but you will be able to see the step it's on (Indicated by its Status) and the output of the process in the PowerShell window that opened the GUI. If you encounter any errors, please let us know!")),(0,o.kt)("p",null,(0,o.kt)("img",{src:t(5349).Z,width:"811",height:"502"})),(0,o.kt)("h3",{id:"addtional-cleanup"},"Addtional Cleanup"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"While the Cross Compiler does clean up the things that it can, such as the library files that are no longer needed in WSL, there are other things that require manual intervention due to file and command permissions. The following steps are optional, but highly recommended.")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Launch Ubuntu 20.04"),(0,o.kt)("li",{parentName:"ol"},"To remove the unnecessary source repository, run sudo rm -r cpuminer-gr-avx2. It will ask you for your user password. Enter that when prompted."),(0,o.kt)("li",{parentName:"ol"},"To remove the packages that were used during the build (and are no longer necessary), run:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt remove mingw-w64 libz-mingw-w64-dev build-essential automake libssl-dev libcurl4-openssl-dev libjansson-dev libgmp-dev zlib1g-dev git unzip\nsudo apt autoremove\n")),(0,o.kt)("h3",{id:"accessing-cpu-miner-binaries"},"Accessing CPU Miner Binaries"),(0,o.kt)("p",null,"The compiled EXEs (along with the required DLLs and a README) will be found in the output directory that you choose in the GUI before clicking the Compile button."),(0,o.kt)("p",null,(0,o.kt)("img",{src:t(88461).Z,width:"1124",height:"565"})),(0,o.kt)("p",null,"Happy Mining! \ud83c\udf89"))}u.isMDXComponent=!0},37711:(e,i,t)=>{t.d(i,{Z:()=>n});const n=t.p+"assets/images/image1-65403770d75e14234aa7a499200c199f.png"},34216:(e,i,t)=>{t.d(i,{Z:()=>n});const n=t.p+"assets/images/image2-7d4eb0211e2d7c1dd4dd9a1b19802170.png"},93774:(e,i,t)=>{t.d(i,{Z:()=>n});const n=t.p+"assets/images/image3-e113325c9f7ab19b7aedf4f4ae1c53cb.png"},70992:(e,i,t)=>{t.d(i,{Z:()=>n});const n=t.p+"assets/images/image4-ec8b14f92333f8a90457596c29b92c5d.png"},73060:(e,i,t)=>{t.d(i,{Z:()=>n});const n=t.p+"assets/images/image5-ff4cedc333f646b2f30b7341b9843dc8.png"},5349:(e,i,t)=>{t.d(i,{Z:()=>n});const n=t.p+"assets/images/image6-c2da57d44fea81870b6d8aaa089a75b6.png"},88461:(e,i,t)=>{t.d(i,{Z:()=>n});const n=t.p+"assets/images/image7-ffa71cc6e29e82eb58b99a58d0bc13ab.png"}}]);