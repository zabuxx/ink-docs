(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{78:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(6),c=(n(0),n(90)),o={title:"Contract Template",slug:"/basics/contract-template"},i={unversionedId:"basics/contract-template",id:"basics/contract-template",isDocsHomePage:!1,title:"Contract Template",description:"Let's take a look at a high level what is available to you when developing a smart contract using ink!.",source:"@site/docs/basics/contract-template.md",slug:"/basics/contract-template",permalink:"/ink-docs/basics/contract-template",editUrl:"https://github.com/ink-docs/edit/master/docs/basics/contract-template.md",version:"current",sidebar:"reference",previous:{title:"Troubleshooting",permalink:"/ink-docs/getting-started/troubleshooting"},next:{title:"Storing Values",permalink:"/ink-docs/basics/storing-values"}},l=[{value:"ink!",id:"ink",children:[]},{value:"Your Turn!",id:"your-turn",children:[]}],s={rightToc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Let's take a look at a high level what is available to you when developing a smart contract using ink!."),Object(c.b)("h2",{id:"ink"},"ink!"),Object(c.b)("p",null,"ink! is an ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://wiki.haskell.org/Embedded_domain_specific_language"}),"Embedded Domain Specific Language")," (EDSL) that you can use to write WebAssembly based smart contracts in the Rust programming language."),Object(c.b)("p",null,'ink! is just standard Rust in a well defined "contract format" with specialized ',Object(c.b)("inlineCode",{parentName:"p"},"#[ink(...)]")," attribute macros. These attribute macros tell ink! what the different parts of your Rust smart contract represent, and ultimately allow ink! to do all the magic needed to create Substrate compatible Wasm bytecode!"),Object(c.b)("h2",{id:"your-turn"},"Your Turn!"),Object(c.b)("p",null,"Let's start a new project for the Incrementer contract that you will build in this chapter."),Object(c.b)("p",null,"Change into your working directory and run:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"cargo contract new incrementer\n")),Object(c.b)("p",null,"Just like in previous examples, this will create a new project folder named ",Object(c.b)("inlineCode",{parentName:"p"},"incrementer")," which we will use for the rest of this chapter."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"cd incrementer/\n")),Object(c.b)("p",null,"In the ",Object(c.b)("inlineCode",{parentName:"p"},"lib.rs"),' file, replace the "Flipper" contract source code with the template code provided here.'),Object(c.b)("p",null,"Quickly check that it compiles and the trivial test passes with:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"cargo +nightly test\n")),Object(c.b)("p",null,"Also check that you can build the Wasm file by running:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"cargo +nightly contract build\n")),Object(c.b)("p",null,"If everything looks good, then we are ready to start programming!"))}u.isMDXComponent=!0},90:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,m=p["".concat(o,".").concat(d)]||p[d]||b[d]||c;return n?a.a.createElement(m,i(i({ref:t},s),{},{components:n})):a.a.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<c;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);