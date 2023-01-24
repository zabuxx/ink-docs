"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[1505],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),s=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=s(e.components);return a.createElement(l.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(t),m=r,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return t?a.createElement(g,o(o({ref:n},p),{},{components:t})):a.createElement(g,o({ref:n},p))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[u]="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4987:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var a=t(7462),r=(t(7294),t(3905));const i={title:"Trabajando con Mapping",slug:"/datastructures/mapping"},o=void 0,c={unversionedId:"datastructures/mapping",id:"version-4.0.0-alpha.1/datastructures/mapping",title:"Trabajando con Mapping",description:"En esta secci\xf3n queremos demostrar como trabajar con ink! Mapping.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-4.0.0-alpha.1/datastructures/mapping.md",sourceDirName:"datastructures",slug:"/datastructures/mapping",permalink:"/es/4.0.0-alpha.1/datastructures/mapping",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/versioned_docs/version-4.0.0-alpha.1/datastructures/mapping.md",tags:[],version:"4.0.0-alpha.1",frontMatter:{title:"Trabajando con Mapping",slug:"/datastructures/mapping"},sidebar:"reference",previous:{title:"Introducci\xf3n",permalink:"/es/4.0.0-alpha.1/datastructures/overview"},next:{title:"Dise\xf1o Extendido del Storage",permalink:"/es/4.0.0-alpha.1/datastructures/spread-storage-layout"}},l={},s=[{value:"Inicializar un Mapping",id:"inicializar-un-mapping",level:2}],p={toc:s};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"En esta secci\xf3n queremos demostrar como trabajar con ink! ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/ink_storage/3.3.1/ink_storage/struct.Mapping.html"},(0,r.kt)("inlineCode",{parentName:"a"},"Mapping")),"."),(0,r.kt)("p",null,"Aqu\xed tenemos un ejemplo de un mapping de un usuario a un n\xfamero:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[ink(storage)]\n#[derive(SpreadAllocate)]\npub struct MyContract {\n    // Store a mapping from AccountIds to a u32\n    map: ink_storage::Mapping<AccountId, u32>,\n}\n")),(0,r.kt)("p",null,'Esto significa que dada una clave, puedes almacenar una \xfanica instancia de un tipo valor. En este\ncaso, cada "usuario" obtiene su propio n\xfamero.'),(0,r.kt)("h2",{id:"inicializar-un-mapping"},"Inicializar un Mapping"),(0,r.kt)("p",null,"Para inicializar correctamente un ",(0,r.kt)("inlineCode",{parentName:"p"},"Mapping")," necesitamos dos cosas:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Una implementaci\xf3n del trait ",(0,r.kt)("a",{parentName:"li",href:"https://docs.rs/ink_storage/3.3.1/ink_storage/traits/trait.SpreadAllocate.html"},(0,r.kt)("inlineCode",{parentName:"a"},"SpreadAllocate"))," en nuestro struct storage."),(0,r.kt)("li",{parentName:"ol"},"El inicializador ",(0,r.kt)("a",{parentName:"li",href:"https://docs.rs/ink_lang/3.3.1/ink_lang/utils/fn.initialize_contract.html"},(0,r.kt)("inlineCode",{parentName:"a"},"ink_lang::utils::initalize_contract")),".")),(0,r.kt)("p",null,"No inicializar el storage antes de utilizarlo es un error com\xfan que puede romper tu smart contract.\nSi no inicializas tus ",(0,r.kt)("inlineCode",{parentName:"p"},"Mapping"),"'s correctamente puedes terminar con unos ",(0,r.kt)("inlineCode",{parentName:"p"},"Mapping"),"'s diferentes\noperando en el mismo conjunto de entradas del storage \ud83d\ude31."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'\n#![cfg_attr(not(feature = "std"), no_std)]\n\nuse ink_lang as ink;\n\n#[ink::contract]\nmod mycontract {\n    use ink_storage::traits::SpreadAllocate;\n\n    #[ink(storage)]\n    #[derive(SpreadAllocate)]\n    pub struct MyContract {\n        // Almacena un mapping de AccountIds a u32\n        map: ink_storage::Mapping<AccountId, u32>,\n    }\n\n    impl MyContract {\n        #[ink(constructor)]\n        pub fn new(count: u32) -> Self {\n            // Esta llamada es requerida para inicializar correctamente los\n            // `Mapping`s de nuestro contrato.\n            ink_lang::utils::initialize_contract(|contract: &mut Self| {\n                let caller = Self::env().caller();\n                contract.map.insert(&caller, &count);\n            })\n        }\n\n        #[ink(constructor)]\n        pub fn default() -> Self {\n            // A pesar de que no estamos explicitamente inicializando el `Mapping`,\n            // a\xfan necesitamos llamar esto:\n            ink_lang::utils::initialize_contract(|_| {})\n        }\n\n        // Coge el n\xfamero del AccountID de la persona que llama, si existe\n        #[ink(message)]\n        pub fn get(&self) -> u32 {\n            let caller = Self::env().caller();\n            self.map.get(&caller).unwrap_or_default()\n        }\n    }\n}\n')))}u.isMDXComponent=!0}}]);