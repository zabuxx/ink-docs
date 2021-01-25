(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{109:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),m=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=m(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=m(n),b=r,d=p["".concat(o,".").concat(b)]||p[b]||u[b]||a;return n?i.a.createElement(d,c(c({ref:t},l),{},{components:n})):i.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<a;l++)o[l]=n[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},93:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return m}));var r=n(2),i=n(6),a=(n(0),n(109)),o={title:"#[ink(impl)]",slug:"/macros-attributes/impl"},c={unversionedId:"macros-attributes/implementation",id:"macros-attributes/implementation",isDocsHomePage:!1,title:"#[ink(impl)]",description:"This attribute supports a niche case that is rarely needed.",source:"@site/docs/macros-attributes/implementation.md",slug:"/macros-attributes/impl",permalink:"/ink-docs/macros-attributes/impl",editUrl:"https://github.com/ink-docs/edit/master/docs/macros-attributes/implementation.md",version:"current",sidebar:"reference",previous:{title:"#[ink(event)]",permalink:"/ink-docs/macros-attributes/event"},next:{title:"#[ink(message)]",permalink:"/ink-docs/macros-attributes/message"}},s=[{value:"Example",id:"example",children:[]}],l={rightToc:s};function m(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This attribute supports a niche case that is rarely needed."),Object(a.b)("p",null,"Can be applied on ink! implementation blocks in order to make ink! aware\nof them. This is useful if such an implementation block doesn't contain\nany other ink! attributes, so it would be flagged by ink! as a Rust item.\nAdding ",Object(a.b)("inlineCode",{parentName:"p"},"#[ink(impl)]")," on such implementation blocks makes them treated\nas ink! implementation blocks thus allowing to access the environment\netc."),Object(a.b)("p",null,"Note that ink! messages and constructors still need to be explicitly\nflagged as such."),Object(a.b)("h2",{id:"example"},"Example"),Object(a.b)("p",null,"An implementation block can be defined as a trait implementation\nfor the ink! storage struct using the ",Object(a.b)("inlineCode",{parentName:"p"},"#[ink(impl)]")," annotation \u2012 even\nif none of its interior items have any ink! specific attributes on them:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-rust"}),"use core::convert::TryFrom;\nuse ink_lang_ir as ir;\n\n#[ink::contract]\nmod my_module {\n    #[ink(storage)]\n    pub struct MyStorage {\n        /* storage fields */\n    }\n\n    #[ink(impl)]\n    impl MyStorage {\n        fn my_method(&self) -> i32 {\n            /* method implementation */\n        }\n    }\n\n    impl MyStorage {\n      #[ink(constructor)]\n      pub fn my_constructor() -> Self {\n          /* constructor implementation */\n      }\n\n      #[ink(message)]\n      pub fn my_message(&self) {\n          /* message implementation */\n      }\n    }\n}\n")))}m.isMDXComponent=!0}}]);