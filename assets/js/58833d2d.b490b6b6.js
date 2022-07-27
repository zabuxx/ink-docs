"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[2059],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(g,o(o({ref:t},p),{},{components:n})):r.createElement(g,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8760:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={title:"Overview",slug:"/datastructures/overview"},o=void 0,s={unversionedId:"datastructures/overview",id:"datastructures/overview",title:"Overview",description:"The ink_storage crate acts as the standard storage library for ink! smart contracts. At",source:"@site/docs/datastructures/overview.md",sourceDirName:"datastructures",slug:"/datastructures/overview",permalink:"/datastructures/overview",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/datastructures/overview.md",tags:[],version:"current",frontMatter:{title:"Overview",slug:"/datastructures/overview"},sidebar:"reference",previous:{title:"#[ink::chain_extension]",permalink:"/macros-attributes/chain-extension"},next:{title:"Working with Mapping",permalink:"/datastructures/mapping"}},l={},c=[{value:"Eager Loading",id:"eager-loading",level:2}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"ink_storage")," crate acts as the standard storage library for ink! smart contracts. At\nthe moment it only provides a single low-level primitive for interacting with storage,\nthe ",(0,a.kt)("a",{parentName:"p",href:"https://paritytech.github.io/ink/ink_storage/struct.Mapping.html"},(0,a.kt)("inlineCode",{parentName:"a"},"Mapping")),"."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Mapping")," is a mapping of key-value pairs directly to the contract storage. Its main advantage\nis to be simple and lightweight. As such, it does not provide any high-level\nfunctionality, such as iteration or automatic clean-up. Smart contract authors will need\nto implement any high level functionality themselves."),(0,a.kt)("h2",{id:"eager-loading"},"Eager Loading"),(0,a.kt)("p",null,"When executing a contract, all the fields of the ",(0,a.kt)("inlineCode",{parentName:"p"},"#[ink(storage)]")," struct will be pulled\nfrom storage, regardless of whether or not they are used during the message execution."),(0,a.kt)("p",null,"Smart contract authors should be aware of this behaviour since it could potentially\naffect their contract performance. For example, consider the following storage struct:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"#[ink(storage)]\npub struct EagerLoading {\n    a: i32,\n    b: ink_prelude::vec::Vec<i32>,\n}\n\nimpl EagerLoading {\n    #[ink(message)]\n    pub fn read_a(&self) {\n        let a = self.a;\n    }\n}\n")),(0,a.kt)("p",null,"In ",(0,a.kt)("inlineCode",{parentName:"p"},"EagerLoading::read_a()")," we only read the ",(0,a.kt)("inlineCode",{parentName:"p"},"a")," storage item. However, the ",(0,a.kt)("inlineCode",{parentName:"p"},"b")," storage\nitem will still be loaded from storage. As a reminder, this means accessing the\nunderlying database and SCALE decoding the value. This can incur high costs, especially\nas the number of elements in ",(0,a.kt)("inlineCode",{parentName:"p"},"b")," grows."),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Eager loading does ",(0,a.kt)("strong",{parentName:"p"},"not")," apply to ",(0,a.kt)("inlineCode",{parentName:"p"},"Mapping")," fields, though, as key lookups in mappings\nare done directly from contract storage."))))}d.isMDXComponent=!0}}]);