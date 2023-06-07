"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[683],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),d=o,g=p["".concat(i,".").concat(d)]||p[d]||f[d]||a;return n?r.createElement(g,c(c({ref:t},u),{},{components:n})):r.createElement(g,c({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:o,c[1]=s;for(var l=2;l<a;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4915:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>f,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={title:"toAbiMessage",hide_title:!0,description:"Get an instance of an AbiMessage or undefined"},c="toAbiMessage",s={unversionedId:"frontend/core/contracts/to-contract-abi-message",id:"frontend/core/contracts/to-contract-abi-message",title:"toAbiMessage",description:"Get an instance of an AbiMessage or undefined",source:"@site/docs/frontend/core/contracts/to-contract-abi-message.md",sourceDirName:"frontend/core/contracts",slug:"/frontend/core/contracts/to-contract-abi-message",permalink:"/es/frontend/core/contracts/to-contract-abi-message",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/frontend/core/contracts/to-contract-abi-message.md",tags:[],version:"current",frontMatter:{title:"toAbiMessage",hide_title:!0,description:"Get an instance of an AbiMessage or undefined"},sidebar:"reference",previous:{title:"getRegistryError",permalink:"/es/frontend/core/contracts/get-registry-error"},next:{title:"txPaymentInfo",permalink:"/es/frontend/core/contracts/tx-payment-info"}},i={},l=[{value:"Basic Usage",id:"basic-usage",level:2},{value:"Returns",id:"returns",level:2}],u={toc:l},p="wrapper";function f(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"toabimessage"},"toAbiMessage"),(0,o.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"toAbiMessage(contract, 'flip');\n")),(0,o.kt)("h2",{id:"returns"},"Returns"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"interface AbiMessage {\n  args: AbiParam[];\n  docs: string[];\n  fromU8a: (data: Uint8Array) => DecodedMessage;\n  identifier: string;\n  index: number;\n  isConstructor?: boolean;\n  isMutating?: boolean;\n  isPayable?: boolean;\n  method: string;\n  path: string[];\n  returnType?: TypeDef | null;\n  selector: ContractSelector;\n  toU8a: (params: unknown[]) => Uint8Array;\n}\n")))}f.isMDXComponent=!0}}]);