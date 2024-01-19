"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[2072],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,g=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(g,l(l({ref:t},p),{},{components:n})):a.createElement(g,l({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},42721:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const o={title:"Debugging",slug:"/basics/contract-debugging",hide_title:!0},l=void 0,i={unversionedId:"testing/debugging",id:"version-5.x/testing/debugging",title:"Debugging",description:"There are three ways to debug your ink! contract currently:",source:"@site/versioned_docs/version-5.x/testing/debugging.md",sourceDirName:"testing",slug:"/basics/contract-debugging",permalink:"/5.x/basics/contract-debugging",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/versioned_docs/version-5.x/testing/debugging.md",tags:[],version:"5.x",frontMatter:{title:"Debugging",slug:"/basics/contract-debugging",hide_title:!0},sidebar:"reference",previous:{title:"Testing with Live State",permalink:"/5.x/basics/contract-testing/with-live-state"},next:{title:"Overview",permalink:"/5.x/macros-attributes"}},c={},s=[{value:"How do I print to the terminal console from ink!?",id:"how-do-i-print-to-the-terminal-console-from-ink",level:3},{value:"Example",id:"example",level:2}],p={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("img",{src:"/img/title/magnifying-glass.svg",className:"titlePic"}),(0,r.kt)("h1",{id:"contract-debugging"},"Contract Debugging"),(0,r.kt)("p",null,"There are three ways to debug your ink! contract currently:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You can write tests using one of the mechanisms described on the\n",(0,r.kt)("a",{parentName:"li",href:"/basics/contract-testing"},"Contract Testing")," page."),(0,r.kt)("li",{parentName:"ul"},"You can interact with your contract via a UI or command-line. This is\ndescribed on the ",(0,r.kt)("a",{parentName:"li",href:"/getting-started/calling-your-contract"},"Call Your Contract")," page."),(0,r.kt)("li",{parentName:"ul"},"You can print debug statements in your contract. Those will appear\non the Substrate node's ",(0,r.kt)("inlineCode",{parentName:"li"},"stdout"),". This is described on this page.")),(0,r.kt)("h3",{id:"how-do-i-print-to-the-terminal-console-from-ink"},"How do I print to the terminal console from ink!?"),(0,r.kt)("p",null,"You can use those two macros:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.rs/ink_env/4.0.0/ink_env/macro.debug_println.html"},(0,r.kt)("inlineCode",{parentName:"a"},"ink::env::debug_println!"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.rs/ink_env/4.0.0/ink_env/macro.debug_print.html"},(0,r.kt)("inlineCode",{parentName:"a"},"ink::env::debug_print!")))),(0,r.kt)("p",null,"There are things you could do to enable debug messages on the client console:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Enable the feature ",(0,r.kt)("inlineCode",{parentName:"strong"},"ink-debug")," for the ",(0,r.kt)("inlineCode",{parentName:"strong"},"ink_env")," crate."),(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"cargo-contract")," does this automatically for you (for versions ",(0,r.kt)("inlineCode",{parentName:"p"},">= 0.13.0"),"), except if\nyou compile a contract in ",(0,r.kt)("inlineCode",{parentName:"p"},"--release")," mode.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Set the log level of your node to ",(0,r.kt)("inlineCode",{parentName:"strong"},"runtime::contracts=debug"),"."),(0,r.kt)("br",null),"\nFor example, to have only errors and debug output show up for the ",(0,r.kt)("inlineCode",{parentName:"p"},"substrate-contracts-node"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"substrate-contracts-node -lerror,runtime::contracts=debug\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Set the log level of your node to ",(0,r.kt)("inlineCode",{parentName:"strong"},"runtime::contracts::strace")," to trace host function calls."),(0,r.kt)("br",null),"\nThese function calls logs will also be displayed in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Debug message")," panel of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/contracts-ui"},"Contracts UI"),".\nFor example, to view these traces in addition to the logs described above:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"substrate-contracts-node -lerror,runtime::contracts=debug,runtime::contracts::strace=trace\n")))),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"The following code depicts how to print debug statements\nfrom a message or constructor."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'#[ink(constructor)]\nfn new() -> Self {\n    ink::env::debug_println!("created new instance at {}", Self::env().block_number());\n    Self { }\n}\n\n#[ink(message)]\nfn print(&self) {\n   let caller = self.env().caller();\n   let message = ink_prelude::format!("got a call from {:?}", caller);\n   ink::env::debug_println!(&message);\n}\n')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Debug output is not printed for transactions!"),(0,r.kt)("p",{parentName:"admonition"},"It is only printed for RPC calls or off-chain tests.")),(0,r.kt)("h1",{id:"decode-data-payload"},"Decode Data Payload"),(0,r.kt)("p",null,"You can use a block explorer or an app like PolkadotJs to retrieve the data payload of a contract transaction, and then use ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/cargo-contract"},"cargo-contract")," to decode it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# From your contract directory\ncargo contract decode message -d fe5bd8ea01000000\n")),(0,r.kt)("p",null,"This command will output the method name and parameters encoded in the data payload:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Decoded data: inc_by { n: 1 }\n")),(0,r.kt)("p",null,"If the contract was called through a cross-contract interaction, the payload will not be available in the transaction. In such cases, you can use the approach described in the next section to access it."),(0,r.kt)("h1",{id:"replay-and-debug-a-block"},"Replay and Debug a Block"),(0,r.kt)("p",null,"To replay a transaction, you can use ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/AcalaNetwork/chopsticks"},"Chopstick")," to create a local fork of the chain and replay the block with trace-level logging."),(0,r.kt)("p",null,"Assuming you have a node that you can connect to at ",(0,r.kt)("inlineCode",{parentName:"p"},"$ENDPOINT")," and the transaction you want to replay is in block ",(0,r.kt)("inlineCode",{parentName:"p"},"$BLOCK_HASH"),", you can use the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx @acala-network/chopsticks@latest run-block \\\n--endpoint $ENDPOINT \\\n--block $BLOCK_HASH \\\n--runtime-log-level 5 \\\n| grep runtime::contracts\n")),(0,r.kt)("p",null,"This command replays the block with trace-level logging enabled. By filtering the output with ",(0,r.kt)("inlineCode",{parentName:"p"},"runtime::contracts"),", you can view all the contract calls in the block:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"runtime::contracts           TRACE: call ExportedFunction::Call account: , input_data: [246, 118, 44, 201]\nruntime::contracts           TRACE: call ExportedFunction::Call account: , input_data: [254, 91, 216, 234, 1, 0, 0, 0]\nruntime::contracts           TRACE: call result ExecReturnValue { flags: (empty), data: [0] }\nruntime::contracts           TRACE: call result ExecReturnValue { flags: (empty), data: [0] }\n")),(0,r.kt)("p",null,"From here, you can identify the call you are interested in and decode the data payload:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"echo 254, 91, 216, 234, 1, 0, 0, 0 \\\n| tr ',' ' ' \\\n| xargs printf '%02x' \\\n| xargs cargo contract decode message -d\n")),(0,r.kt)("p",null,"This command will output the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Decoded data: inc_by { n: 1 }\n")),(0,r.kt)("h1",{id:"fork-node-and-replay-transactions"},"Fork Node and Replay Transactions"),(0,r.kt)("p",null,"You can also use ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/AcalaNetwork/chopsticks"},"Chopstick")," to start a local fork of your chain."),(0,r.kt)("p",null,"This command starts a fork beginning at block ",(0,r.kt)("inlineCode",{parentName:"p"},"$BLOCK_HASH"),". You can connect to this fork using ",(0,r.kt)("inlineCode",{parentName:"p"},"ws://localhost:8000")," to submit extrinsics via PolkadotJs or ",(0,r.kt)("inlineCode",{parentName:"p"},"cargo contract"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx @acala-network/chopsticks@latest \\\n--endpoint $ENDPOINT \\\n--block $BLOCK_HASH \\\n--runtime-log-level 5\n")),(0,r.kt)("p",null,"Here, for example, you can re-run the transaction that we decoded in the previous section:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cargo contract call \\\n--contract $CONTRACT_ADDR \\\n--message inc_by --args 1 \\\n--suri //Alice \\\n--url ws://localhost:8000\n")),(0,r.kt)("p",null,"Since trace-level logging is used, you will receive detailed information about all the host functions called during the execution of the contract:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"runtime::contracts           TRACE: call ExportedFunction::Call account: , input_data: [254, 91, 216, 234, 2, 0, 0, 0]\nruntime::contracts           TRACE: call result ExecReturnValue { flags: (empty), data: [0] }\nruntime::contracts           DEBUG: Execution finished with debug buffer: seal0::value_transferred(out_ptr: 65488, out_len_ptr: 65516) = Ok(())\nseal0::input(out_ptr: 65536, out_len_ptr: 65524) = Ok(())\nseal1::get_storage(key_ptr: 65536, key_len: 4, out_ptr: 65540, out_len_ptr: 65524) = Ok(Success)\nseal2::set_storage(key_ptr: 65536, key_len: 4, value_ptr: 65540, value_len: 4) = Ok(4)\nseal0::seal_return(flags: 0, data_ptr: 65536, data_len: 1) = Err(TrapReason::Return(ReturnData { flags: 0, data: [0] }))\n")))}d.isMDXComponent=!0}}]);