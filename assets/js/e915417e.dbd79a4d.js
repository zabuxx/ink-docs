"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[5826],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(n),f=r,d=m["".concat(l,".").concat(f)]||m[f]||p[f]||o;return n?a.createElement(d,i(i({ref:t},c),{},{components:n})):a.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4444:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const o={title:"Mutating Storage Values",slug:"/basics/mutating-values"},i=void 0,s={unversionedId:"basics/mutating-values",id:"version-4.0.0-alpha.1/basics/mutating-values",title:"Mutating Storage Values",description:"It's time to modify some storage!",source:"@site/versioned_docs/version-4.0.0-alpha.1/basics/mutating-values.md",sourceDirName:"basics",slug:"/basics/mutating-values",permalink:"/4.0.0-alpha.1/basics/mutating-values",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/versioned_docs/version-4.0.0-alpha.1/basics/mutating-values.md",tags:[],version:"4.0.0-alpha.1",frontMatter:{title:"Mutating Storage Values",slug:"/basics/mutating-values"},sidebar:"reference",previous:{title:"Reading Values from Storage",permalink:"/4.0.0-alpha.1/basics/reading-values"},next:{title:"Events",permalink:"/4.0.0-alpha.1/basics/events"}},l={},u=[{value:"Mutable and Immutable Functions",id:"mutable-and-immutable-functions",level:2}],c={toc:u};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"It's time to modify some storage!"),(0,r.kt)("h2",{id:"mutable-and-immutable-functions"},"Mutable and Immutable Functions"),(0,r.kt)("p",null,"You may have noticed that the function template included ",(0,r.kt)("inlineCode",{parentName:"p"},"self")," as the first parameter of the\ncontract functions. It is through ",(0,r.kt)("inlineCode",{parentName:"p"},"self")," that you gain access to all your contract functions and\nstorage items."),(0,r.kt)("p",null,"If you are simply ",(0,r.kt)("em",{parentName:"p"},"reading")," from the contract storage, you only need to pass ",(0,r.kt)("inlineCode",{parentName:"p"},"&self"),". But\nif you want to ",(0,r.kt)("em",{parentName:"p"},"modify")," storage items, you will need to explicitly mark it as mutable,\n",(0,r.kt)("inlineCode",{parentName:"p"},"&mut self"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"impl MyContract {\n    #[ink(message)]\n    pub fn my_getter(&self) -> u32 {\n        self.my_number\n    }\n\n    #[ink(message)]\n    pub fn my_setter(&mut self, new_value: u32) {\n        self.my_number = new_value;\n    }\n}\n")))}m.isMDXComponent=!0}}]);