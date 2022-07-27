"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[459],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(r),g=n,h=d["".concat(l,".").concat(g)]||d[g]||p[g]||o;return r?a.createElement(h,i(i({ref:t},u),{},{components:r})):a.createElement(h,i({ref:t},u))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3148:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const o={title:"Setup",slug:"/getting-started/setup"},i=void 0,s={unversionedId:"getting-started/setup",id:"getting-started/setup",title:"Setup",description:"In case you are looking for a guided tutorial directed",source:"@site/docs/getting-started/setup.md",sourceDirName:"getting-started",slug:"/getting-started/setup",permalink:"/getting-started/setup",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/getting-started/setup.md",tags:[],version:"current",frontMatter:{title:"Setup",slug:"/getting-started/setup"},sidebar:"reference",previous:{title:"March '22",permalink:"/monthly-update/2022/03"},next:{title:"Creating an ink! Project",permalink:"/getting-started/creating-an-ink-project"}},l={},c=[{value:"Rust &amp; Cargo",id:"rust--cargo",level:2},{value:"ink! CLI",id:"ink-cli",level:2},{value:"Substrate Framework Pre-requisites",id:"substrate-framework-pre-requisites",level:2},{value:"Installing The Substrate Smart Contracts Node",id:"installing-the-substrate-smart-contracts-node",level:2}],u={toc:c};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"In case you are looking for a guided tutorial directed\ntowards beginners please check out our ",(0,n.kt)("a",{parentName:"p",href:"https://docs.substrate.io/tutorials/v3/ink-workshop/pt1"},"Guided Tutorial"),"."),(0,n.kt)("h2",{id:"rust--cargo"},"Rust & Cargo"),(0,n.kt)("p",null,"A pre-requisite for compiling smart contracts is to have Rust and Cargo installed. Here's ",(0,n.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/cargo/getting-started/installation.html"},"an installation guide"),"."),(0,n.kt)("h2",{id:"ink-cli"},"ink! CLI"),(0,n.kt)("p",null,"The first tool we will be installing is ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/paritytech/cargo-contract"},(0,n.kt)("inlineCode",{parentName:"a"},"cargo-contract")),", a CLI tool for helping setting up and managing WebAssembly smart contracts written with ink!."),(0,n.kt)("p",null,"As a pre-requisite for the tool you need to install the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/WebAssembly/binaryen"},"binaryen")," package, which is used to optimize the WebAssembly bytecode of the contract."),(0,n.kt)("p",null,"Two other dependencies are needed to lint the ink! contract. This is done to warn users about using e.g. API's in a way that could lead to security issues."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cargo install cargo-dylint dylint-link\n")),(0,n.kt)("p",null,"Many package managers have it available nowadays \u2012 e.g. there is a package for ",(0,n.kt)("a",{parentName:"p",href:"https://tracker.debian.org/pkg/binaryen"},"Debian/Ubuntu"),",\n",(0,n.kt)("a",{parentName:"p",href:"https://formulae.brew.sh/formula/binaryen"},"Homebrew")," and ",(0,n.kt)("a",{parentName:"p",href:"https://archlinux.org/packages/community/x86_64/binaryen/"},"Arch Linux"),"."),(0,n.kt)("p",null,"If there's only an old version in your distributions package manager you can also ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/WebAssembly/binaryen/releases"},"download a binary release directly"),"."),(0,n.kt)("p",null,"After you've installed the package execute:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cargo install cargo-contract --force --locked\n")),(0,n.kt)("p",null,"Use the ",(0,n.kt)("inlineCode",{parentName:"p"},"--force")," to ensure you are updated to the most recent ",(0,n.kt)("inlineCode",{parentName:"p"},"cargo-contract")," version."),(0,n.kt)("p",null,"You can then use ",(0,n.kt)("inlineCode",{parentName:"p"},"cargo contract --help")," to start exploring the commands made available to you."),(0,n.kt)("h2",{id:"substrate-framework-pre-requisites"},"Substrate Framework Pre-requisites"),(0,n.kt)("p",null,"With ink! you can write smart contracts for blockchains built on Substrate."),(0,n.kt)("p",null,"Follow the\n",(0,n.kt)("a",{parentName:"p",href:"https://substrate.dev/docs/en/knowledgebase/getting-started/"},"official installation steps")," from the\nSubstrate Developer Hub Knowledge Base to set up all Substrate pre-requisites.\nOnce you have done this you will also need to run:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"rustup component add rust-src --toolchain nightly\nrustup target add wasm32-unknown-unknown --toolchain nightly\n")),(0,n.kt)("h2",{id:"installing-the-substrate-smart-contracts-node"},"Installing The Substrate Smart Contracts Node"),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate-contracts-node"},"substrate-contracts-node")," is a simple Substrate\nblockchain which is configured to include the Substrate module for smart contract\nfunctionality \u2012 the ",(0,n.kt)("inlineCode",{parentName:"p"},"contracts")," pallet (see ",(0,n.kt)("a",{parentName:"p",href:"/how-it-works"},"How it Works")," for more)."),(0,n.kt)("p",null,"It's a comfortable option if you want to get a quickstart.\nYou can ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate-contracts-node/releases"},"download a binary from our releases page"),"\n(Linux and Mac). Alternatively you can build the node by yourself:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cargo install contracts-node --git https://github.com/paritytech/substrate-contracts-node.git --tag v0.12.0 --force --locked\n")))}p.isMDXComponent=!0}}]);