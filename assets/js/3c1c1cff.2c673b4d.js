"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[6887],{3905:(t,e,r)=>{r.d(e,{Zo:()=>d,kt:()=>k});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=n.createContext({}),s=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},d=function(t){var e=s(t.components);return n.createElement(p.Provider,{value:e},t.children)},m="mdxType",f={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,i=t.originalType,p=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),m=s(r),c=a,k=m["".concat(p,".").concat(c)]||m[c]||f[c]||i;return r?n.createElement(k,l(l({ref:e},d),{},{components:r})):n.createElement(k,l({ref:e},d))}));function k(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=r.length,l=new Array(i);l[0]=c;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[m]="string"==typeof t?t:a,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},71:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const i={title:"ink! vs. Solidity",slug:"/ink-vs-solidity"},l=void 0,o={unversionedId:"intro/ink-vs-solidity",id:"version-4.0.0-alpha.1/intro/ink-vs-solidity",title:"ink! vs. Solidity",description:"Here is a brief comparison of features between ink! and Solidity:",source:"@site/versioned_docs/version-4.0.0-alpha.1/intro/ink-vs-solidity.md",sourceDirName:"intro",slug:"/ink-vs-solidity",permalink:"/4.0.0-alpha.1/ink-vs-solidity",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/versioned_docs/version-4.0.0-alpha.1/intro/ink-vs-solidity.md",tags:[],version:"4.0.0-alpha.1",frontMatter:{title:"ink! vs. Solidity",slug:"/ink-vs-solidity"},sidebar:"reference",previous:{title:"How it Works \u2012 Substrate",permalink:"/4.0.0-alpha.1/how-it-works"},next:{title:"ink! vs. CosmWasm",permalink:"/4.0.0-alpha.1/ink-vs-cosmwasm"}},p={},s=[],d={toc:s};function m(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Here is a brief comparison of features between ink! and Solidity:"),(0,a.kt)("div",{class:"comparison"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"}),(0,a.kt)("th",{parentName:"tr",align:"left"},"ink!"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Solidity"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Virtual Machine"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Any Wasm VM"),(0,a.kt)("td",{parentName:"tr",align:"left"},"EVM")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Encoding"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Wasm"),(0,a.kt)("td",{parentName:"tr",align:"left"},"EVM Byte Code")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Language"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Rust"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Standalone")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Overflow Protection"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Enabled by default"),(0,a.kt)("td",{parentName:"tr",align:"left"},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Constructor Functions"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Multiple"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Single")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Tooling"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Anything that supports Rust"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Custom")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Versioning"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Semantic"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Semantic")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Has Metadata?"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Multi-File Project"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Planned"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Storage Entries"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Variable"),(0,a.kt)("td",{parentName:"tr",align:"left"},"256 bits")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Supported Types"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Docs"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Docs")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Has Interfaces?"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Yes (Rust Traits)"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Yes"))))))}m.isMDXComponent=!0}}]);