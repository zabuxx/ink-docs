"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[3031],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>k});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),s=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(r),h=a,k=m["".concat(o,".").concat(h)]||m[h]||u[h]||i;return r?n.createElement(k,l(l({ref:t},p),{},{components:r})):n.createElement(k,l({ref:t},p))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=h;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c[m]="string"==typeof e?e:a,l[1]=c;for(var s=2;s<i;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},9450:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const i={title:"Smart Contracts",slug:"/examples/smart-contracts"},l=void 0,c={unversionedId:"examples/contracts",id:"examples/contracts",title:"Smart Contracts",description:"We have a repository ink-examples,",source:"@site/docs/examples/contracts.md",sourceDirName:"examples",slug:"/examples/smart-contracts",permalink:"/examples/smart-contracts",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/examples/contracts.md",tags:[],version:"current",frontMatter:{title:"Smart Contracts",slug:"/examples/smart-contracts"},sidebar:"reference",previous:{title:"bnToBalance",permalink:"/frontend/utils/substrate/bnToBalance"},next:{title:"Dapps",permalink:"/examples/dapps"}},o={},s=[],p={toc:s},m="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"We have a repository ",(0,a.kt)("a",{href:"https://github.com/paritytech/ink-examples/tree/main"},(0,a.kt)("inlineCode",{parentName:"p"},"ink-examples")),",\nin which you find a number of contracts written in ink!.\nSome of the most interesting ones:"),(0,a.kt)("div",{className:"row"},(0,a.kt)("div",{className:"col text--center"},(0,a.kt)("a",{href:"https://github.com/paritytech/ink-examples/tree/main/flipper"},(0,a.kt)("img",{src:"/img/icons/flipper.svg",width:"100"})),(0,a.kt)("p",null,'Our "Hello, World!".',(0,a.kt)("br",null),(0,a.kt)("a",{href:"https://github.com/paritytech/ink-examples/tree/main/flipper"},"\xbb view example"))),(0,a.kt)("div",{className:"col text--center"},(0,a.kt)("a",{href:"https://github.com/paritytech/ink-examples/tree/main/erc20"},(0,a.kt)("img",{src:"/img/icons/erc20.svg",width:"100"})),(0,a.kt)("p",null,"An ERC-20 implementation.",(0,a.kt)("br",null),(0,a.kt)("a",{href:"https://github.com/paritytech/ink-examples/tree/main/erc20"},"\xbb view example"))),(0,a.kt)("div",{className:"col text--center"},(0,a.kt)("a",{href:"https://github.com/paritytech/ink-examples/tree/main/erc721"},(0,a.kt)("img",{src:"/img/icons/nft.svg",width:"100"})),(0,a.kt)("p",null,(0,a.kt)("a",{href:"https://github.com/paritytech/ink-examples/tree/main/erc721"},"\xbb view ERC-721"),(0,a.kt)("br",null),(0,a.kt)("a",{href:"https://github.com/paritytech/ink-examples/tree/main/erc1155"},"\xbb view ERC-1155")))),(0,a.kt)("br",null),(0,a.kt)("div",{className:"row"},(0,a.kt)("div",{className:"col text--center"},(0,a.kt)("a",{href:"https://github.com/paritytech/ink-examples/tree/main/upgradeable-contracts"},(0,a.kt)("img",{src:"/img/icons/upgradable.svg",width:"100"})),(0,a.kt)("p",null,"An upgradeable contract.",(0,a.kt)("br",null),(0,a.kt)("a",{href:"https://github.com/paritytech/ink-examples/tree/main/upgradeable-contracts"},"\xbb view example"))),(0,a.kt)("div",{className:"col text--center"},(0,a.kt)("a",{href:"https://github.com/paritytech/ink-examples/tree/main/multisig"},(0,a.kt)("img",{src:"/img/icons/multisig.svg",width:"100"})),(0,a.kt)("p",null,"A multi-signature wallet.",(0,a.kt)("br",null),(0,a.kt)("a",{href:"https://github.com/paritytech/ink-examples/tree/main/multisig"},"\xbb view example"))),(0,a.kt)("div",{className:"col text--center"},(0,a.kt)("a",{href:"https://github.com/paritytech/ink-examples/tree/main/rand-extension"},(0,a.kt)("img",{src:"/img/icons/rand-extension.svg",width:"100"})),(0,a.kt)("p",null,"Allow runtime access.",(0,a.kt)("br",null),(0,a.kt)("a",{href:"https://github.com/paritytech/ink-examples/tree/main/rand-extension"},"\xbb view example")))),(0,a.kt)("br",null),(0,a.kt)("div",{className:"row"},(0,a.kt)("div",{className:"col text--center"},(0,a.kt)("a",{href:"https://github.com/paritytech/ink-examples/tree/main/delegator"},(0,a.kt)("img",{src:"/img/icons/delegator.svg",width:"100"})),(0,a.kt)("p",null,"Cross-contract calls.",(0,a.kt)("br",null),(0,a.kt)("a",{href:"https://github.com/paritytech/ink-examples/tree/main/delegator"},"\xbb view example"))),(0,a.kt)("div",{className:"col text--center"},(0,a.kt)("a",{href:"https://github.com/paritytech/ink-examples/tree/main/trait-erc20"},(0,a.kt)("img",{src:"/img/icons/trait-erc20.svg",width:"100"})),(0,a.kt)("p",null,"Implements an ",(0,a.kt)("code",null,"Erc20")," trait.",(0,a.kt)("br",null),(0,a.kt)("a",{href:"https://github.com/paritytech/ink-examples/tree/main/trait-erc20"},"\xbb view example"))),(0,a.kt)("div",{className:"col text--center"},(0,a.kt)("a",{href:"https://github.com/paritytech/ink-examples/tree/main/dns"},(0,a.kt)("img",{src:"/img/icons/dns.svg",width:"100"})),(0,a.kt)("p",null,"Simple ",(0,a.kt)("code",null,"DomainNameService"),".",(0,a.kt)("br",null),(0,a.kt)("a",{href:"https://github.com/paritytech/ink-examples/tree/main/dns"},"\xbb view example")))),(0,a.kt)("br",null),(0,a.kt)("p",null,"If not noted otherwise in the readme, to build a single example navigate to the root of\nthe example and run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cargo contract build\n")),(0,a.kt)("p",null,"As a result you'll get a file ",(0,a.kt)("inlineCode",{parentName:"p"},"target/<example-name>.wasm")," file, a ",(0,a.kt)("inlineCode",{parentName:"p"},"<example-name>.json")," file\nand a ",(0,a.kt)("inlineCode",{parentName:"p"},"<example-name>.contract")," file in the ",(0,a.kt)("inlineCode",{parentName:"p"},"target/")," folder of your contract.\nThe ",(0,a.kt)("inlineCode",{parentName:"p"},".contract")," file combines the Wasm and metadata into one file and needs to be used\nwhen deploying the contract."),(0,a.kt)("p",null,"For further information, please have a look at the\n",(0,a.kt)("a",{parentName:"p",href:"/getting-started/deploy-your-contract"},"Deploy your Contract")," section."))}u.isMDXComponent=!0}}]);