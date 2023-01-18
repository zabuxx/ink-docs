"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[6647],{3905:(t,e,r)=>{r.d(e,{Zo:()=>l,kt:()=>d});var n=r(7294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var s=n.createContext({}),u=function(t){var e=n.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):c(c({},e),t)),r},l=function(t){var e=u(t.components);return n.createElement(s.Provider,{value:e},t.children)},p="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},f=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,a=t.originalType,s=t.parentName,l=i(t,["components","mdxType","originalType","parentName"]),p=u(r),f=o,d=p["".concat(s,".").concat(f)]||p[f]||m[f]||a;return r?n.createElement(d,c(c({ref:e},l),{},{components:r})):n.createElement(d,c({ref:e},l))}));function d(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=r.length,c=new Array(a);c[0]=f;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i[p]="string"==typeof t?t:o,c[1]=i;for(var u=2;u<a;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},764:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));const a={title:"#[ink(constructor)]",slug:"/macros-attributes/constructor"},c=void 0,i={unversionedId:"macros-attributes/constructor",id:"macros-attributes/constructor",title:"#[ink(constructor)]",description:"Applicable to a method.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/macros-attributes/constructor.md",sourceDirName:"macros-attributes",slug:"/macros-attributes/constructor",permalink:"/es/macros-attributes/constructor",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/macros-attributes/constructor.md",tags:[],version:"current",frontMatter:{title:"#[ink(constructor)]",slug:"/macros-attributes/constructor"},sidebar:"reference",previous:{title:"#[ink(anonymous)]",permalink:"/es/macros-attributes/anonymous"},next:{title:"#[ink(event)]",permalink:"/es/macros-attributes/event"}},s={},u=[{value:"Example",id:"example",level:2}],l={toc:u};function p(t){let{components:e,...r}=t;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Applicable to a method."),(0,o.kt)("p",null,"Flags a method (or multiple methods) for the ink! storage struct as constructor making it available to the API for instantiating the contract."),(0,o.kt)("p",null,"There must be at least one ",(0,o.kt)("inlineCode",{parentName:"p"},"#[ink(constructor)]")," defined method."),(0,o.kt)("p",null,"Methods flagged with ",(0,o.kt)("inlineCode",{parentName:"p"},"#[ink(constructor)]")," are special in that they are dispatchable\nupon contract instantiation. A contract may define multiple such constructors which\nallow users of the contract to instantiate a contract in multiple different ways."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"use ink_lang as ink;\n\n#[ink::contract]\nmod erc20 {\n    #[ink(storage)]\n    pub struct Erc20 { ... }\n\n    impl Erc20 {\n        #[ink(constructor)]\n        pub fn new(initial_supply: Balance) -> Self { .. }\n\n        #[ink(constructor)]\n        pub fn total_supply(&self) -> Balance { .. }\n\n        // etc.\n    }\n}\n")))}p.isMDXComponent=!0}}]);