"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[1413],{3905:(e,n,a)=>{a.d(n,{Zo:()=>u,kt:()=>f});var t=a(7294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function s(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=t.createContext({}),c=function(e){var n=t.useContext(i),a=n;return e&&(a="function"==typeof e?e(n):s(s({},n),e)),a},u=function(e){var n=c(e.components);return t.createElement(i.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(a),m=r,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return a?t.createElement(f,s(s({ref:n},u),{},{components:a})):t.createElement(f,s({ref:n},u))}));function f(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=m;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l[p]="string"==typeof e?e:r,s[1]=l;for(var c=2;c<o;c++)s[c]=a[c];return t.createElement.apply(null,s)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},92:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var t=a(7462),r=(a(7294),a(3905));const o={title:"Leer Valores del Storage",slug:"/basics/reading-values"},s=void 0,l={unversionedId:"basics/reading-values",id:"version-4.0.0-alpha.1/basics/reading-values",title:"Leer Valores del Storage",description:"Leer los valores almacenados en el storage es \xa1es donde comienza la diversi\xf3n!",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-4.0.0-alpha.1/basics/reading-values.md",sourceDirName:"basics",slug:"/basics/reading-values",permalink:"/es/4.0.0-alpha.1/basics/reading-values",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/versioned_docs/version-4.0.0-alpha.1/basics/reading-values.md",tags:[],version:"4.0.0-alpha.1",frontMatter:{title:"Leer Valores del Storage",slug:"/basics/reading-values"},sidebar:"reference",previous:{title:"Almacenando Valores",permalink:"/es/4.0.0-alpha.1/basics/storing-values"},next:{title:"Mutando Valores del Storage",permalink:"/es/4.0.0-alpha.1/basics/mutating-values"}},i={},c=[{value:"Funciones del Contrato",id:"funciones-del-contrato",level:2},{value:"Funciones P\xfablicas y Privadas",id:"funciones-p\xfablicas-y-privadas",level:3},{value:"Obtener un Valor",id:"obtener-un-valor",level:2}],u={toc:c};function p(e){let{components:n,...a}=e;return(0,r.kt)("wrapper",(0,t.Z)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Leer los valores almacenados en el storage es \xa1es donde comienza la diversi\xf3n!"),(0,r.kt)("h2",{id:"funciones-del-contrato"},"Funciones del Contrato"),(0,r.kt)("p",null,"Como puedes ver en la plantilla del contrato, todas las funciones del contrato son parte del m\xf3dulo del contrato."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"impl MyContract {\n    // Funciones p\xfablicas y privadas van aqu\xed\n}\n")),(0,r.kt)("h3",{id:"funciones-p\xfablicas-y-privadas"},"Funciones P\xfablicas y Privadas"),(0,r.kt)("p",null,"En Rust, puede realizar tantas implementaciones como quieras. Como soluci\xf3n m\xe1s estil\xedstica te recomendamos\ndividir las definiciones de implementaci\xf3n para sus funciones p\xfablicas y privadas:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"impl MyContract {\n    /// Public function\n    #[ink(message)]\n    pub fn my_public_function(&self) {\n        /* --snip-- */\n    }\n\n    /// Private function\n    fn my_private_function(&self) {\n        /* --snip-- */\n    }\n\n    /* --snip-- */\n}\n")),(0,r.kt)("p",null,"Tambi\xe9n puede optar por dividir las cosas como sea m\xe1s claro para t\xfa proyecto."),(0,r.kt)("p",null,"Ten en cuenta que todas las funciones p\xfablicas deben utilizar el atributo ",(0,r.kt)("inlineCode",{parentName:"p"},"#[ink(message)]"),"."),(0,r.kt)("h2",{id:"obtener-un-valor"},"Obtener un Valor"),(0,r.kt)("p",null,"Ya te hemos mostrado como inicializar un valor en el storage en este cap\xedtulo ",(0,r.kt)("a",{parentName:"p",href:"/basics/storing-values"},"Almacenando Valores"),".\nObtener el valor es as\xed de simple:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"impl MyContract {\n    #[ink(message)]\n    pub fn my_getter(&self) -> u32 {\n        self.number\n    }\n}\n")),(0,r.kt)("p",null,"En Rust, si la \xfaltima expresion de una funci\xf3n no tiene un punto y coma, entonces es el valor que retornara."))}p.isMDXComponent=!0}}]);