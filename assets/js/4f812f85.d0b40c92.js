"use strict";(self.webpackChunkyerbas_docs=self.webpackChunkyerbas_docs||[]).push([[5568],{7712:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=t(7462),s=(t(7294),t(3905)),l=t(2004);const o={sidebar_position:6},r="Mining Pool Setup",i={unversionedId:"mining/miningpoolsetup",id:"mining/miningpoolsetup",title:"Mining Pool Setup",description:"- Pool files are released as is with no guarantees and we do not provide support for anybody using them.",source:"@site/docs/mining/miningpoolsetup.mdx",sourceDirName:"mining",slug:"/mining/miningpoolsetup",permalink:"/docs/mining/miningpoolsetup",draft:!1,editUrl:"https://github.com/The-Yerbas-Endeavor/docs/tree/develop/docs/mining/miningpoolsetup.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"sidebarMining",previous:{title:"Cross-compiling",permalink:"/docs/mining/compiling/crosscompiling"},next:{title:"Getting started",permalink:"/docs/mining/"}},p={},u=[{value:"Video Guide",id:"video-guide",level:2},{value:"Procedures:",id:"procedures",level:2},{value:"1. Begin Pool Setup",id:"1-begin-pool-setup",level:3},{value:"2. Install Redis",id:"2-install-redis",level:3},{value:"3. Tweaking Redis",id:"3-tweaking-redis",level:3},{value:"4. Install dependencies",id:"4-install-dependencies",level:3},{value:"5. Quick Pool Configuration",id:"5-quick-pool-configuration",level:3},{value:"6. Secure SSH With Fail2Ban",id:"6-secure-ssh-with-fail2ban",level:3}],d={toc:u};function c(e){let{components:a,...t}=e;return(0,s.kt)("wrapper",(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"mining-pool-setup"},"Mining Pool Setup"),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("ul",{parentName:"admonition"},(0,s.kt)("li",{parentName:"ul"},"Pool files are released as is with no guarantees and we do not provide support for anybody using them."),(0,s.kt)("li",{parentName:"ul"},"Running a pool is tough and requires some systems administration skills."),(0,s.kt)("li",{parentName:"ul"},"Yiimp based pool files are here: ",(0,s.kt)("u",null,(0,s.kt)("a",{parentName:"li",href:"https://github.com/npq7721/gr_pool"},"https://github.com/npq7721/gr_pool"))))),(0,s.kt)("admonition",{title:"Thankyou",type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"Thank you to the ",(0,s.kt)("u",null,(0,s.kt)("a",{parentName:"p",href:"https://zellabs.net/"},"Zel Labs"))," team for the original NOMP based Yerbas stratum code.")),(0,s.kt)("h2",{id:"video-guide"},"Video Guide"),(0,s.kt)("sub",null,"Video Guide - credit @timy_g"),(0,s.kt)(l.Z,{playing:!0,controls:!0,url:"https://www.youtube.com/watch?v=9b4_2cWYiL4",muted:!0,playing:!1,mdxType:"ReactPlayer"}),(0,s.kt)("h2",{id:"procedures"},"Procedures:"),(0,s.kt)("h3",{id:"1-begin-pool-setup"},"1. Begin Pool Setup"),(0,s.kt)("p",null,"Add a sudo user"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"adduser raptor\n")),(0,s.kt)("p",null,"Add user to sudo group"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"sudo usermod -aG sudo raptor\n")),(0,s.kt)("p",null,"Switch to user"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"su - raptor\n")),(0,s.kt)("p",null,"Run system update"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt update -y\nsudo apt upgrade -y\nsudo reboot\n")),(0,s.kt)("p",null,"Get yerbasd and get it syncing while we do the rest of the setup:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://github.com/The-Yerbas-Endeavor/Yerbas/releases/download/1.0.15.1/yerbas-1.0.15.1-x86_64-linux-gnu.tar.xz\ntar -xvf yerbas-1.0.15.1-x86_64-linux-gnu.tar.xz\nmv yerbas-1.0.15.1-x86_64-linux-gnu yerbas_live\n")),(0,s.kt)("p",null,"Create yerbas data directory and .conf file"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir ~/.yerbascore\nnano ~/.yerbascore/yerbas.conf\n")),(0,s.kt)("p",null,"Add these lines changing the user and password:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"rpcuser=rapture\nrpcpassword=ehu489fkndc\nrpcallowip=127.0.0.1\nrpcport=8777\ndaemon=1\nlisten=1\n")),(0,s.kt)("p",null,"Start up yerbasd:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"~/yerbas_live/./yerbasd\n")),(0,s.kt)("p",null,"Get the pool:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://yerbas.com/rtm_easynomp.tar.gz && tar xzvf rtm_easynomp.tar.gz\n")),(0,s.kt)("h3",{id:"2-install-redis"},"2. Install Redis"),(0,s.kt)("p",null,"apt repo is usually far behind the latest stable version of Redis so we will compile from source as well as do a little tweaking."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install build-essential tcl pkg-config -y\ncurl -O http://download.redis.io/redis-stable.tar.gz\ntar xzvf redis-stable.tar.gz\ncd redis-stable\nmake -j2\n")),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"-j2 tells make how many cpu cores to use, default is 1 and it is slow, change it as needed depending on your available cores. Not sure how many cores? Do:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"lscpu | grep 'CPU(s):'\nmake -j2 test\nmake install\nsudo mkdir /etc/redis\nsudo cp redis.conf /etc/redis\nnano /etc/redis/redis.conf\n")),(0,s.kt)("p",null,"Change ",(0,s.kt)("inlineCode",{parentName:"p"},"supervised no")," to ",(0,s.kt)("inlineCode",{parentName:"p"},"supervised systemd")),(0,s.kt)("p",null,"Change ",(0,s.kt)("inlineCode",{parentName:"p"},"dir ./")," to ",(0,s.kt)("inlineCode",{parentName:"p"},"dir /var/lib/redis")),(0,s.kt)("p",null,"Create systemd file"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"sudo nano /etc/systemd/system/redis.service\n")),(0,s.kt)("p",null,"add the following:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"[Unit]\nDescription=Redis In-Memory Data Store\nAfter=network.target\n\n[Service]\nUser=redis\nGroup=redis\nExecStart=/usr/local/bin/redis-server /etc/redis/redis.conf\nExecStop=/usr/local/bin/redis-cli shutdown\nRestart=always\n\n[Install]\nWantedBy=multi-user.target\n")),(0,s.kt)("p",null,"Create a system user and group for redis user:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"sudo adduser --system --group --no-create-home redis\nsudo mkdir /var/lib/redis\nsudo chown redis:redis /var/lib/redis\nsudo chmod 770 /var/lib/redis\n")),(0,s.kt)("p",null,"Start Redis"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl start redis\n")),(0,s.kt)("p",null,"Check Redis Status:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl status redis\n")),(0,s.kt)("p",null,"If status is good, enable redis so it automatically starts on a reboot:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl enable redis\n")),(0,s.kt)("h3",{id:"3-tweaking-redis"},"3. Tweaking Redis"),(0,s.kt)("p",null,"Switch to root user"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"sudo su\n")),(0,s.kt)("p",null,"Run command"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"sudo echo 1024 > /proc/sys/net/core/somaxconn\n")),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"The return should be just an empty line as if you had just hit enter. If so do the following:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"nano /etc/sysctl.conf\n")),(0,s.kt)("p",null,"Add these lines exit and save:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"#Redis tweak\nnet.core.somaxconn=65535\nvm.overcommit_memory=1\n")),(0,s.kt)("p",null,"While we are root lets make a swap file of 2GB size:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"dd if=/dev/zero of=/swapfile bs=2048 count=1048576\nchmod 600 /swapfile\nmkswap /swapfile\nswapon /swapfile\nnano /etc/fstab\n")),(0,s.kt)("p",null,"Add this:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"/swapfile swap swap defaults 0 0\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Reboot the server.")),(0,s.kt)("h3",{id:"4-install-dependencies"},"4. Install dependencies"),(0,s.kt)("p",null,"Install node, npm, and pm2"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"curl -sL https://deb.nodesource.com/setup_8.x -o nodesource_setup.sh\nsudo bash nodesource_setup.sh\nsudo apt install nodejs -y\n")),(0,s.kt)("p",null,"Verify nodejs version:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"node --v\n")),(0,s.kt)("p",null,"This will also have installed npm. Now install PM2:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"sudo npm i -g pm2\n")),(0,s.kt)("h3",{id:"5-quick-pool-configuration"},"5. Quick Pool Configuration"),(0,s.kt)("p",null,"Create config file:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"cp config_example.json config.json\n")),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"Edit pool_configs/yerbas.json as needed, make sure user and password matches what you have in ",(0,s.kt)("code",null,"~/.yerbascore/yerbas.conf"),".")),(0,s.kt)("p",null,"Install certbot and set good paths to certs in config.json:"),(0,s.kt)("p",null,"Make sure you have the a-record / sub-domain you will be using pointed at the pool server IP. If using cloudflare make sure the connection is not proxied yet (orange cloud > white in DNS)."),(0,s.kt)("p",null,"Install dependencies and certbot:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"sudo add-apt-repository ppa:certbot/certbot\nsudo apt update -y\nsudo apt upgrade -y\nsudo apt install certbot -y\n")),(0,s.kt)("p",null,"Before we go any further lets make sure we have UFW installed / enabled and setup correctly. I will assume here that ufw is not installed:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install ufw -y\nsudo ufw default deny incoming\nsudo ufw default allow outgoing\nsudo ufw allow ssh\nsudo ufw allow http\nsudo ufw allow https\nsudo ufw allow 3008/tcp\nsudo ufw allow 19979/tcp\nsudo ufw enable\n")),(0,s.kt)("p",null,"Run certbot:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"sudo certbot certonly --standalone -d your.pooldomain.here\n")),(0,s.kt)("p",null,"Copy the paths to your shiny new certs, mine in this guide looked like:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"/etc/letsencrypt/live/dpool.yerbas.com/privkey.pem\n/etc/letsencrypt/live/dpool.yerbas.com/fullchain.pem\n")),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"Update the existing paths in config.json to match these.")),(0,s.kt)("p",null,"Start pool from inside EasyNOMP directory:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'sudo pm2 start init.js --name "pool"\n')),(0,s.kt)("p",null,"Confirm it started"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"sudo pm2 list\n")),(0,s.kt)("admonition",{type:"info"},(0,s.kt)("p",{parentName:"admonition"},"If you really don't want to run it as root there are ways around it but I am not going to cover them here. Easiest might be to change the https/http port to unprivledged ports (above 1023) and then proxy with nginx to the normal 443/80.")),(0,s.kt)("h3",{id:"6-secure-ssh-with-fail2ban"},"6. Secure SSH With Fail2Ban"),(0,s.kt)("p",null,"Install"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"apt install fail2ban -y\n")),(0,s.kt)("p",null,"Configure"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"nano /etc/fail2ban/jail.local\n")),(0,s.kt)("p",null,"Add the following"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"[sshd]\nenabled = true\nport = 22\nfilter = sshd\nlogpath = /var/log/auth.log\nmaxretry = 3\n")),(0,s.kt)("p",null,"Restart Fail2ban:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl restart fail2ban\n")))}c.isMDXComponent=!0}}]);