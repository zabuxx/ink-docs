"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[7593],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>g});var i=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function n(t,e){if(null==t)return{};var a,i,r=function(t,e){if(null==t)return{};var a,i,r={},l=Object.keys(t);for(i=0;i<l.length;i++)a=l[i],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(i=0;i<l.length;i++)a=l[i],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var c=i.createContext({}),o=function(t){var e=i.useContext(c),a=e;return t&&(a="function"==typeof t?t(e):s(s({},e),t)),a},m=function(t){var e=o(t.components);return i.createElement(c.Provider,{value:e},t.children)},h="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},p=i.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,c=t.parentName,m=n(t,["components","mdxType","originalType","parentName"]),h=o(a),p=r,g=h["".concat(c,".").concat(p)]||h[p]||k[p]||l;return a?i.createElement(g,s(s({ref:e},m),{},{components:a})):i.createElement(g,s({ref:e},m))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,s=new Array(l);s[0]=p;var n={};for(var c in e)hasOwnProperty.call(e,c)&&(n[c]=e[c]);n.originalType=t,n[h]="string"==typeof t?t:r,s[1]=n;for(var o=2;o<l;o++)s[o]=a[o];return i.createElement.apply(null,s)}return i.createElement.apply(null,a)}p.displayName="MDXCreateElement"},5420:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>k,frontMatter:()=>l,metadata:()=>n,toc:()=>o});var i=a(7462),r=(a(7294),a(3905));const l={title:"Welcome!",hide_title:!0,slug:"/",hide_table_of_contents:!1},s=void 0,n={unversionedId:"intro/intro",id:"intro/intro",title:"Welcome!",description:"&nbsp;",source:"@site/docs/intro/intro.mdx",sourceDirName:"intro",slug:"/",permalink:"/",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/intro/intro.mdx",tags:[],version:"current",frontMatter:{title:"Welcome!",hide_title:!0,slug:"/",hide_table_of_contents:!1},sidebar:"reference",next:{title:"Why Rust for Smart Contracts?",permalink:"/why-rust-for-smart-contracts"}},c={},o=[{value:"Learn More",id:"learn-more",level:2},{value:"Our Pitch",id:"our-pitch",level:2},{value:"Where can I deploy ink! contracts?",id:"where-can-i-deploy-ink-contracts",level:2},{value:"What wallets can I use?",id:"what-wallets-can-i-use",level:2},{value:"Smart Contract Examples",id:"smart-contract-examples",level:2}],m={toc:o},h="wrapper";function k(t){let{components:e,...a}=t;return(0,r.kt)(h,(0,i.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("br",null),(0,r.kt)("center",null,(0,r.kt)("img",{src:"/img/title/ink!-4.0.svg",width:"800",style:{marginBottom:10}})),(0,r.kt)("center",null,(0,r.kt)("a",{href:"https://github.com/paritytech/ink-examples"},(0,r.kt)("img",{style:{height:25},src:"https://img.shields.io/badge/click-white.svg?logo=GitHub&logoColor=black&label=ink!%20Examples&labelColor=white&color=blue"})),"\xa0",(0,r.kt)("a",{href:"https://substrate.stackexchange.com/questions/tagged/ink?tab=Votes"},(0,r.kt)("img",{style:{height:25},src:"https://img.shields.io/badge/click-white.svg?logo=StackExchange&label=ink!%20Support%20on%20StackExchange&labelColor=white&color=blue"})),"\xa0",(0,r.kt)("a",{href:"https://twitter.com/ink_lang"},(0,r.kt)("img",{style:{height:25},src:"https://img.shields.io/twitter/follow/ink_lang?label=Follow"})),"\xa0",(0,r.kt)("a",{href:"http://youtube.com/@ink-lang"},(0,r.kt)("img",{style:{height:25},src:"https://img.shields.io/badge/click-white.svg?logo=YouTube&logoColor=eb3f25&label=ink!%20YouTube&labelColor=white&color=blue"}))),(0,r.kt)("h3",{style:{lineHeight:"1.4em",marginTop:"0.5em"}},(0,r.kt)("center",null,(0,r.kt)("em",null,"ink! is a programming language for smart contracts.",(0,r.kt)("br",null),"You can use it with blockchains built on ",(0,r.kt)("a",{href:"https://github.com/paritytech/substrate"},"Substrate"),"."))),(0,r.kt)("h2",{id:"learn-more"},"Learn More"),(0,r.kt)("div",{className:"row"},(0,r.kt)("div",{className:"col text--center"},(0,r.kt)("a",{href:"https://www.parity.io/blog/what-is-paritys-ink"},(0,r.kt)("img",{src:"/img/what-is-ink.png",width:"250",style:{borderRadius:10,border:"1px solid slategrey"}})),(0,r.kt)("p",null,"What is Parity's ink!?",(0,r.kt)("br",null),(0,r.kt)("a",{href:"https://www.parity.io/blog/what-is-paritys-ink"},"\xbb view page"))),(0,r.kt)("div",{className:"col text--center"},(0,r.kt)("a",{href:"https://docs.substrate.io/tutorials/smart-contracts/"},(0,r.kt)("img",{src:"/img/tutorial.png",width:"250",style:{borderRadius:10,border:"1px solid slategrey"}})),(0,r.kt)("p",null,"Guided Beginners Tutorial",(0,r.kt)("br",null),(0,r.kt)("a",{href:"https://docs.substrate.io/tutorials/smart-contracts/"},"\xbb view tutorial"))),(0,r.kt)("div",{className:"col text--center"},(0,r.kt)("a",{target:"_parent",href:"/es/"},(0,r.kt)("img",{src:"/img/es/ink-goes-spanish.jpg",width:"250",style:{borderRadius:10,border:"1px solid slategrey"}})),(0,r.kt)("p",null,"Documentation in Spanish!",(0,r.kt)("br",null),(0,r.kt)("a",{target:"_parent",href:"/es/"},"\xbb view spanish docs")))),(0,r.kt)("h2",{id:"our-pitch"},"Our Pitch"),(0,r.kt)("div",{className:"row"},(0,r.kt)("div",{className:"col text--center"},(0,r.kt)("img",{src:"/img/icons/rust.svg",width:"100"}),(0,r.kt)("p",null,"Inherent safety-guarantees with the Rust programming language.")),(0,r.kt)("div",{className:"col text--center"},(0,r.kt)("img",{src:"/img/icons/ecosystem.svg",width:"100"}),(0,r.kt)("p",null,"Ability to use all the normal Rust tooling \u2012 clippy, crates.io, IDE\u2019s, etc.")),(0,r.kt)("div",{className:"col text--center"},(0,r.kt)("img",{src:"/img/icons/interop.svg",width:"100"}),(0,r.kt)("p",null,"Interoperability with Solidity contracts."))),(0,r.kt)("br",null),"\xa0",(0,r.kt)("br",null),(0,r.kt)("div",{className:"row"},(0,r.kt)("div",{className:"col text--center"},(0,r.kt)("img",{src:"/img/icons/migration-path.svg",width:"100"}),(0,r.kt)("p",null,"Clear migration path for graduating to a parachain.")),(0,r.kt)("div",{className:"col text--center"},(0,r.kt)("img",{src:"/img/icons/wasm.svg",width:"100"}),(0,r.kt)("p",null,"Established industry standard for the compiler target.")),(0,r.kt)("div",{className:"col text--center"},(0,r.kt)("img",{src:"/img/icons/polkadot.svg",width:"100"}),(0,r.kt)("p",null,"Native to Polkadot. Complements your Substrate parachain perfectly."))),(0,r.kt)("h2",{id:"where-can-i-deploy-ink-contracts"},"Where can I deploy ink! contracts?"),(0,r.kt)("div",{className:"row"},(0,r.kt)("div",{className:"col text--left"},(0,r.kt)("h3",null,(0,r.kt)("img",{src:"/img/chains/production.svg",className:"chainHeader"})))),(0,r.kt)("div",{className:"row"},(0,r.kt)("div",{className:"col text--center"},(0,r.kt)("a",{href:"https://alephzero.org"},(0,r.kt)("img",{src:"/img/chains/aleph-zero.svg",className:"chain"}))),(0,r.kt)("div",{className:"col text--center"},(0,r.kt)("a",{href:"https://astar.network"},(0,r.kt)("img",{src:"/img/chains/astar.svg",className:"chain"}))),(0,r.kt)("div",{className:"col text--center"},(0,r.kt)("a",{href:"https://shiden.astar.network"},(0,r.kt)("img",{src:"/img/chains/shiden.svg",className:"chain"})))),(0,r.kt)("div",{className:"row"},(0,r.kt)("div",{className:"col text--center"},(0,r.kt)("a",{href:"http://phala.network"},(0,r.kt)("img",{src:"/img/chains/phala.svg",className:"chain"}))),(0,r.kt)("div",{className:"col text--center"},(0,r.kt)("a",{href:"https://pendulumchain.org"},(0,r.kt)("img",{src:"/img/chains/pendulum.svg",className:"chain"}))),(0,r.kt)("div",{className:"col text--center"},(0,r.kt)("a",{href:"https://pendulumchain.org/amplitude"},(0,r.kt)("img",{src:"/img/chains/amplitude.svg",className:"chain"})))),(0,r.kt)("div",{className:"row"},(0,r.kt)("div",{className:"col text--left"},(0,r.kt)("h3",null,(0,r.kt)("img",{src:"/img/chains/mainnet-soon.svg",className:"chainHeader mainnetSoon"})))),(0,r.kt)("div",{className:"row"},(0,r.kt)("div",{className:"col text--center"},(0,r.kt)("a",{href:"https://t3rn.io"},(0,r.kt)("img",{src:"/img/chains/t3rn.svg",className:"chain"}))),(0,r.kt)("div",{className:"col text--center"},(0,r.kt)("a",{href:"https://enjin.io"},(0,r.kt)("img",{src:"/img/chains/enjin.svg",className:"chain"})))),(0,r.kt)("div",{className:"row"},(0,r.kt)("div",{className:"col text--center"},(0,r.kt)("a",{href:"https://www.peaq.network"},(0,r.kt)("img",{src:"/img/chains/peaq.svg",className:"chain"}))),(0,r.kt)("div",{className:"col text--center"},(0,r.kt)("a",{href:"https://bit.country"},(0,r.kt)("img",{src:"/img/chains/bitcountry.svg",className:"chain"})))),(0,r.kt)("div",{className:"row"},(0,r.kt)("div",{className:"col text--left"},(0,r.kt)("h3",null,(0,r.kt)("img",{src:"/img/chains/on-testnet.svg",className:"chainHeader"})),(0,r.kt)("a",{href:"/testnet"},(0,r.kt)("img",{src:"/img/chains/testnet.svg",className:"chain"}))),(0,r.kt)("div",{className:"col"},"\xa0")),(0,r.kt)("h2",{id:"what-wallets-can-i-use"},"What wallets can I use?"),(0,r.kt)("table",{className:"wallet-table text--center"},(0,r.kt)("tr",null,(0,r.kt)("th",null),(0,r.kt)("th",{className:"text--left"},"Interacting with Contracts"),(0,r.kt)("th",{className:"text--left"},"Token's (PSP-22)"),(0,r.kt)("th",{className:"text--left"},"NFT's (PSP-34)")),(0,r.kt)("tr",null,(0,r.kt)("th",null,(0,r.kt)("a",{href:"https://www.subwallet.app/",title:"SubWallet"},(0,r.kt)("img",{src:"/img/wallets/subwallet.svg",className:"wallet",alt:"SubWallet",width:"200"}))),(0,r.kt)("td",null,"\u2705"),(0,r.kt)("td",null,"\u2705"),(0,r.kt)("td",null,"\u2705")),(0,r.kt)("tr",null,(0,r.kt)("th",null,(0,r.kt)("a",{href:"https://polkadot.js.org/extension/",title:"Polkadot{.js}"},(0,r.kt)("img",{src:"/img/wallets/polkadot-js.svg",className:"wallet",alt:"Polkadot{.js}",width:"200"}))),(0,r.kt)("td",null,"\u2705"),(0,r.kt)("td",null),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("th",null,(0,r.kt)("a",{href:"https://www.talisman.xyz/",title:"Talisman"},(0,r.kt)("img",{src:"/img/wallets/talisman.svg",className:"wallet",alt:"Talisman",width:"200"}))),(0,r.kt)("td",null,"\u2705"),(0,r.kt)("td",null),(0,r.kt)("td",null))),(0,r.kt)("h2",{id:"smart-contract-examples"},"Smart Contract Examples"),(0,r.kt)("div",{className:"row"},(0,r.kt)("div",{className:"col text--center"},(0,r.kt)("a",{href:"https://github.com/paritytech/ink-examples/tree/main/flipper"},(0,r.kt)("img",{src:"/img/icons/flipper.svg",width:"100"})),(0,r.kt)("p",null,'Our "Hello, World!".',(0,r.kt)("br",null),(0,r.kt)("a",{href:"https://github.com/paritytech/ink-examples/tree/main/flipper"},"\xbb view example"))),(0,r.kt)("div",{className:"col text--center"},(0,r.kt)("a",{href:"https://github.com/paritytech/ink-examples/tree/main/erc20"},(0,r.kt)("img",{src:"/img/icons/erc20.svg",width:"100"})),(0,r.kt)("p",null,"An ERC-20 implementation.",(0,r.kt)("br",null),(0,r.kt)("a",{href:"https://github.com/paritytech/ink-examples/tree/main/erc20"},"\xbb view example"))),(0,r.kt)("div",{className:"col text--center"},(0,r.kt)("a",{href:"https://github.com/paritytech/ink-examples/tree/main/erc721"},(0,r.kt)("img",{src:"/img/icons/nft.svg",width:"100"})),(0,r.kt)("p",null,(0,r.kt)("a",{href:"https://github.com/paritytech/ink-examples/tree/main/erc721"},"\xbb view ERC-721"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"https://github.com/paritytech/ink-examples/tree/main/erc1155"},"\xbb view ERC-1155")))),(0,r.kt)("br",null),(0,r.kt)("div",{className:"row"},(0,r.kt)("div",{className:"col text--center"},(0,r.kt)("a",{href:"https://github.com/paritytech/ink-examples/tree/main/upgradeable-contracts"},(0,r.kt)("img",{src:"/img/icons/upgradable.svg",width:"100"})),(0,r.kt)("p",null,"An upgradeable contract.",(0,r.kt)("br",null),(0,r.kt)("a",{href:"https://github.com/paritytech/ink-examples/tree/main/upgradeable-contracts"},"\xbb view example"))),(0,r.kt)("div",{className:"col text--center"},(0,r.kt)("a",{href:"https://github.com/paritytech/ink-examples/tree/main/multisig"},(0,r.kt)("img",{src:"/img/icons/multisig.svg",width:"100"})),(0,r.kt)("p",null,"A multi-signature wallet.",(0,r.kt)("br",null),(0,r.kt)("a",{href:"https://github.com/paritytech/ink-examples/tree/main/multisig"},"\xbb view example"))),(0,r.kt)("div",{className:"col text--center"},(0,r.kt)("a",{href:"https://github.com/paritytech/ink-examples/tree/main/rand-extension"},(0,r.kt)("img",{src:"/img/icons/rand-extension.svg",width:"100"})),(0,r.kt)("p",null,"Allow runtime access.",(0,r.kt)("br",null),(0,r.kt)("a",{href:"https://github.com/paritytech/ink-examples/tree/main/rand-extension"},"\xbb view example")))))}k.isMDXComponent=!0}}]);