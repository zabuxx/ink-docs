"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[8184],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),f=a,d=u["".concat(l,".").concat(f)]||u[f]||m[f]||o;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1544:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={title:"#[ink(storage)]",slug:"/macros-attributes/storage"},i=void 0,s={unversionedId:"macros-attributes/storage",id:"version-4.0.0-alpha.1/macros-attributes/storage",title:"#[ink(storage)]",description:"Applicable on struct definitions.",source:"@site/versioned_docs/version-4.0.0-alpha.1/macros-attributes/storage.md",sourceDirName:"macros-attributes",slug:"/macros-attributes/storage",permalink:"/4.0.0-alpha.1/macros-attributes/storage",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/versioned_docs/version-4.0.0-alpha.1/macros-attributes/storage.md",tags:[],version:"4.0.0-alpha.1",frontMatter:{title:"#[ink(storage)]",slug:"/macros-attributes/storage"},sidebar:"reference",previous:{title:"#[ink(selector = S:u32)]",permalink:"/4.0.0-alpha.1/macros-attributes/selector"},next:{title:"#[ink(topic)]",permalink:"/4.0.0-alpha.1/macros-attributes/topic"}},l={},c=[{value:"Example",id:"example",level:2}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Applicable on ",(0,a.kt)("inlineCode",{parentName:"p"},"struct")," definitions. "),(0,a.kt)("p",null,"Applied on ",(0,a.kt)("inlineCode",{parentName:"p"},"struct")," types in order to flag them for being\nthe contract's storage definition.\nThere can only be one ink! storage definition per contract."),(0,a.kt)("p",null,"There must be exactly one ",(0,a.kt)("inlineCode",{parentName:"p"},"#[ink(storage)]")," struct."),(0,a.kt)("p",null,"This struct defines the layout of the storage that the ink! smart contract operates on.\nThe user is able to use a variety of built-in facilities, combine them in various ways\nor even provide their own implementations of storage data structures."),(0,a.kt)("p",null,"For more information visit the ",(0,a.kt)("inlineCode",{parentName:"p"},"ink_storage")," crate documentation."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"use ink_lang as ink;\n\n#[ink::contract]\nmod flipper {\n\n    #[ink(storage)]\n    pub struct Flipper {\n        value: bool,\n    }\n\n    impl Flipper {\n        #[ink(constructor)]\n        pub fn construct() -> Self { Flipper { value: false } }\n\n        #[ink(message)]\n        pub fn message(&self) {}\n    }\n}\n")))}u.isMDXComponent=!0}}]);