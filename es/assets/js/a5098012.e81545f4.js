"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[6582],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),f=a,b=m["".concat(c,".").concat(f)]||m[f]||u[f]||i;return n?r.createElement(b,o(o({ref:t},p),{},{components:n})):r.createElement(b,o({ref:t},p))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[m]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},164:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const i={title:'#[ink(namespace = "\u2026")]',slug:"/macros-attributes/namespace"},o=void 0,s={unversionedId:"macros-attributes/namespace",id:"version-4.0.0-alpha.1/macros-attributes/namespace",title:'#[ink(namespace = "\u2026")]',description:"Applicable to ink! trait implementation blocks.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-4.0.0-alpha.1/macros-attributes/namespace.md",sourceDirName:"macros-attributes",slug:"/macros-attributes/namespace",permalink:"/es/4.0.0-alpha.1/macros-attributes/namespace",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/versioned_docs/version-4.0.0-alpha.1/macros-attributes/namespace.md",tags:[],version:"4.0.0-alpha.1",frontMatter:{title:'#[ink(namespace = "\u2026")]',slug:"/macros-attributes/namespace"},sidebar:"reference",previous:{title:"#[ink(message)]",permalink:"/es/4.0.0-alpha.1/macros-attributes/message"},next:{title:"#[ink(payable)]",permalink:"/es/4.0.0-alpha.1/macros-attributes/payable"}},c={},l=[{value:"Example",id:"example",level:2}],p={toc:l};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Applicable to ink! trait implementation blocks."),(0,a.kt)("p",null,"Applied on ink! trait implementation blocks to disambiguate other trait\nimplementation blocks with equal names."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'#[ink(namespace = "my_namespace")]\nimpl MyTrait for MyStorage {\n    #[ink(message)]\n    fn my_message(&self) {}\n}\n')),(0,a.kt)("p",null,"This changes the resulting selectors of all the ink! messages and ink! constructors within the trait implementation.\nThus allowing disambiguation between trait implementations with overlapping message or constructor names."))}m.isMDXComponent=!0}}]);