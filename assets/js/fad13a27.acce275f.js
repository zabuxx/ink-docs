"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[1291],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(t),f=a,d=u["".concat(c,".").concat(f)]||u[f]||m[f]||i;return t?r.createElement(d,o(o({ref:n},p),{},{components:t})):r.createElement(d,o({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=f;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},4715:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=t(7462),a=(t(7294),t(3905));const i={title:"Environment Functions",slug:"/basics/environment-functions"},o=void 0,s={unversionedId:"basics/env-functions",id:"basics/env-functions",title:"Environment Functions",description:"ink! exposes a number of handy environment functions.",source:"@site/docs/basics/env-functions.md",sourceDirName:"basics",slug:"/basics/environment-functions",permalink:"/basics/environment-functions",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/basics/env-functions.md",tags:[],version:"current",frontMatter:{title:"Environment Functions",slug:"/basics/environment-functions"},sidebar:"reference",previous:{title:"Contract Testing",permalink:"/basics/contract-testing"},next:{title:"Metadata",permalink:"/metadata"}},c={},l=[],p={toc:l};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"ink! exposes a number of handy environment functions.\nA full overview ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/ink_env/3.3.1/ink_env/#functions"},"is found here"),"."),(0,a.kt)("p",null,"In an ",(0,a.kt)("inlineCode",{parentName:"p"},"#[ink(constructor)]"),"  use ",(0,a.kt)("inlineCode",{parentName:"p"},"Self::env()")," to access those,\nin an ",(0,a.kt)("inlineCode",{parentName:"p"},"#[ink(message)]")," use ",(0,a.kt)("inlineCode",{parentName:"p"},"self.env()"),".\nSo e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"Self::env().caller()")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"self.env().caller()"),"."),(0,a.kt)("p",null,"Some handy functions include:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.rs/ink_env/3.3.1/ink_env/fn.caller.html"},(0,a.kt)("inlineCode",{parentName:"a"},"caller()")),": Returns the address of the caller of the executed contract."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.rs/ink_env/3.3.1/ink_env/fn.account_id.html"},(0,a.kt)("inlineCode",{parentName:"a"},"account_id()")),": Returns the account ID of the executed contract."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.rs/ink_env/3.3.1/ink_env/fn.balance.html"},(0,a.kt)("inlineCode",{parentName:"a"},"balance()")),": Returns the balance of the executed contract."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.rs/ink_env/3.3.1/ink_env/fn.block_number.html"},(0,a.kt)("inlineCode",{parentName:"a"},"block_number()")),": Returns the current block number."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.rs/ink_env/3.3.1/ink_env/fn.random.html"},(0,a.kt)("inlineCode",{parentName:"a"},"random()")),": Returns a random hash seed."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.rs/ink_env/3.3.1/ink_env/fn.emit_event.html"},(0,a.kt)("inlineCode",{parentName:"a"},"emit_event(\u2026)")),": Emits an event with the given event data."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.rs/ink_env/3.3.1/ink_env/fn.transfer.html"},(0,a.kt)("inlineCode",{parentName:"a"},"transfer(\u2026)")),": Transfers value from the contract to the destination account ID."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.rs/ink_env/3.3.1/ink_env/fn.hash_bytes.html"},(0,a.kt)("inlineCode",{parentName:"a"},"hash_bytes(\u2026)")),": Conducts the crypto hash of the given input and stores the result in output."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.rs/ink_env/3.3.1/ink_env/#functions"},"\u2026and many more"),".")))}u.isMDXComponent=!0}}]);