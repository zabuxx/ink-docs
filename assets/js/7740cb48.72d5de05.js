"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[1950],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>d});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),l=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=l(t.components);return a.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},h=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,s=t.parentName,p=c(t,["components","mdxType","originalType","parentName"]),h=l(n),d=r,m=h["".concat(s,".").concat(d)]||h[d]||u[d]||o;return n?a.createElement(m,i(i({ref:e},p),{},{components:n})):a.createElement(m,i({ref:e},p))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,i=new Array(o);i[0]=h;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=t,c.mdxType="string"==typeof t?t:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},199:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const o={title:"Overview",slug:"/testnet",hide_title:!0},i=void 0,c={unversionedId:"testnet/overview",id:"testnet/overview",title:"Overview",description:"Rococo Deployment",source:"@site/docs/testnet/overview.md",sourceDirName:"testnet",slug:"/testnet",permalink:"/testnet",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/testnet/overview.md",tags:[],version:"current",frontMatter:{title:"Overview",slug:"/testnet",hide_title:!0},sidebar:"reference",previous:{title:"Overview",permalink:"/cargo-contract-cli"},next:{title:"Frequently Asked Questions",permalink:"/faq"}},s={},l=[{value:"Rococo Deployment",id:"rococo-deployment",level:2},{value:"What is the <code>Contracts</code> parachain?",id:"what-is-the-contracts-parachain",level:2}],p={toc:l};function u(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"rococo-deployment"},"Rococo Deployment"),(0,r.kt)("p",null,"We have a live testnet named ",(0,r.kt)("inlineCode",{parentName:"p"},"Contracts")," as a parachain on ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/build-pdk#rococo-testnet"},"Rococo")," \u2012\na testnet for Polkadot and Kusama parachains:"),(0,r.kt)("div",{class:"schema"},(0,r.kt)("img",{src:"/img/contracts-on-polkadot-js.png",alt:"Smart contracts parachain on Rococo"})),(0,r.kt)("p",null,"You can interact with the network through Polkadot JS Apps,\n",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frococo-contracts-rpc.polkadot.io#/explorer"},"click here for a direct link to the ",(0,r.kt)("inlineCode",{parentName:"a"},"Contracts")," parachain"),"."),(0,r.kt)("p",null,"Our parachain uses the Rococo relay chain's native token (ROC) instead of having its own token.\nDue to this you'll need ROC in order to deploy contracts on our testnet."),(0,r.kt)("p",null,"As a first step, you should create an account. See ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/learn-account-generation"},"here"),"\nfor a detailed guide."),(0,r.kt)("p",null,"As a second step, you have to get ROC testnet tokens through the ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/learn-DOT#getting-rococo-tokens"},"Rococo Faucet"),".\nThis is a chat room in which you need to write:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"!drip YOUR_SS_58_ADDRESS:1002\n")),(0,r.kt)("p",null,"The number ",(0,r.kt)("inlineCode",{parentName:"p"},"1002")," is the parachain id of ",(0,r.kt)("inlineCode",{parentName:"p"},"Contracts")," on Rococo, by supplying it the faucet will teleport ROC\ntokens directly to your account on the parachain."),(0,r.kt)("p",null,"If everything worked out, the teleported ROC tokens will show up under\n",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frococo-contracts-rpc.polkadot.io#/accounts"},'the "Accounts" tab for ',(0,r.kt)("inlineCode",{parentName:"a"},"Contracts")),"."),(0,r.kt)("p",null,"Once you have ROC on ",(0,r.kt)("inlineCode",{parentName:"p"},"Contracts")," you can deploy a contract as you would normally.\nIf you're unsure about this, our ",(0,r.kt)("a",{parentName:"p",href:"https://docs.substrate.io/tutorials/v3/ink-workshop/pt1/"},"guided tutorial"),"\nwill clarify that for you in no time."),(0,r.kt)("h2",{id:"what-is-the-contracts-parachain"},"What is the ",(0,r.kt)("inlineCode",{parentName:"h2"},"Contracts")," parachain?"),(0,r.kt)("p",null,"It's a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate"},"Substrate"),"\nparachain for smart contracts.\nWe configured it to use Substrate's smart contracts module \u2012 the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate/tree/master/frame/contracts"},(0,r.kt)("inlineCode",{parentName:"a"},"contracts"))," pallet \u2012 in\na default configuration."),(0,r.kt)("p",null,"The code for this parachain can be found ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/cumulus/tree/master/parachains/runtimes/contracts/contracts-rococo"},"in the ",(0,r.kt)("inlineCode",{parentName:"a"},"cumulus")," repository"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"pallet-contracts")," takes smart contracts as WebAssembly blobs and defines an API\nfor everything a smart contract needs (storage access, \u2026).\nAs long as a programming language compiles to WebAssembly and there exists an implementation\nof this API in it, you can write a smart contract for this pallet \u2012 and thus for our the ",(0,r.kt)("inlineCode",{parentName:"p"},"Contracts"),"\nparachain \u2012 in that language."),(0,r.kt)("p",null,"This is a list of languages you can currently choose from:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/paritytech/ink"},"Parity's ink!")," for Rust"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/patractlabs/ask"},"ask!")," for Assembly Script"),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/hyperledger-labs/solang"},"Solang")," compiler for Solidity")),(0,r.kt)("p",null,"The following graphic depicts the idea:"),(0,r.kt)("div",{class:"schema"},(0,r.kt)("img",{src:"/img/pallet-contracts-overview.svg",alt:"`pallet-contracts` Overview"})),(0,r.kt)("p",null,"There are also different user interfaces and command-line tools you can use to deploy\nor interact with contracts:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://contracts-ui.substrate.io/"},"Contracts UI")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/"},"polkadot-js"))))}u.isMDXComponent=!0}}]);