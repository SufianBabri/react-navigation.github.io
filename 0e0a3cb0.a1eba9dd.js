(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{426:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(a),d=n,m=p["".concat(o,".").concat(d)]||p[d]||u[d]||i;return a?r.a.createElement(m,c(c({ref:t},s),{},{components:a})):r.a.createElement(m,c({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<i;s++)o[s]=a[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},427:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},428:function(e,t,a){"use strict";var n=a(0),r=a(429);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},429:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r},430:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(428),o=a(427),c=a(49),l=a.n(c),s=37,b=39;t.a=function(e){var t=e.block,a=e.children,c=e.defaultValue,p=e.values,u=e.groupId,d=e.className,m=Object(i.a)(),v=m.tabGroupChoices,f=m.setTabGroupChoices,h=Object(n.useState)(c),j=h[0],g=h[1],O=Object(n.useState)(!1),y=O[0],N=O[1];if(null!=u){var w=v[u];null!=w&&w!==j&&p.some((function(e){return e.value===w}))&&g(w)}var x=function(e){g(e),null!=u&&f(u,e)},k=[],R=function(e){e.metaKey||e.altKey||e.ctrlKey||N(!0)},T=function(){N(!1)};return Object(n.useEffect)((function(){return window.addEventListener("keydown",R),window.addEventListener("mousedown",T),function(){window.removeEventListener("keydown",R),window.removeEventListener("mousedown",T)}}),[]),r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":t},d)},p.map((function(e){var t=e.value,a=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":j===t,className:Object(o.a)("tabs__item",l.a.tabItem,{"tabs__item--active":j===t}),style:y?{}:{outline:"none"},key:t,ref:function(e){return k.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case b:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(k,e.target,e),R(e)},onFocus:function(){return x(t)},onClick:function(){x(t),N(!1)},onPointerDown:function(){return N(!1)}},a)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(a).filter((function(e){return e.props.value===j}))[0]))}},431:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){return r.a.createElement("div",null,e.children)}},77:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return u}));var n=a(1),r=a(6),i=(a(0),a(426)),o=a(430),c=a(431),l={id:"getting-started",title:"Getting started",sidebar_label:"Getting started"},s={unversionedId:"getting-started",id:"version-4.x/getting-started",isDocsHomePage:!1,title:"Getting started",description:"React Navigation is born from the React Native community's need for an extensible yet easy-to-use navigation solution written entirely in JavaScript (so you can read and understand all of the source), on top of powerful native primitives.",source:"@site/versioned_docs/version-4.x/getting-started.md",slug:"/getting-started",permalink:"/docs/4.x/getting-started",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-4.x/getting-started.md",version:"4.x",sidebar_label:"Getting started",sidebar:"version-4.x-docs",next:{title:"Hello React Navigation",permalink:"/docs/4.x/hello-react-navigation"}},b=[{value:"What to expect",id:"what-to-expect",children:[]},{value:"Start from a template",id:"start-from-a-template",children:[]},{value:"Install into an existing project",id:"install-into-an-existing-project",children:[]}],p={rightToc:b};function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"React Navigation is born from the React Native community's need for an extensible yet easy-to-use navigation solution written entirely in JavaScript (so you can read and understand all of the source), on top of powerful native primitives."),Object(i.b)("p",null,"Before you commit to using React Navigation for your project, you might want to read the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.x/pitch"}),"anti-pitch")," ","\u2014"," it will help you to understand the tradeoffs that we have chosen along with the areas where we consider the library to be deficient currently."),Object(i.b)("h2",{id:"what-to-expect"},"What to expect"),Object(i.b)("p",null,"If you're already familiar with React Native then you'll be able to get moving with React Navigation quickly! If not, you may want to read sections 1 to 4 (inclusive) of ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"http://reactnativeexpress.com/"}),"React Native Express")," first, then come back here when you're done."),Object(i.b)("p",null,"What follows within the ",Object(i.b)("em",{parentName:"p"},"Fundamentals")," section of this documentation is a tour of the most important aspects of React Navigation. It should cover enough for you to know how to build your typical small mobile application, and give you the background that you need to dive deeper into the more advanced parts of React Navigation."),Object(i.b)("h2",{id:"start-from-a-template"},"Start from a template"),Object(i.b)("p",null,"The easiest way to get running with ",Object(i.b)("inlineCode",{parentName:"p"},"react-navigation")," is to initialize a project using ",Object(i.b)("inlineCode",{parentName:"p"},"expo-cli"),". You can install this with ",Object(i.b)("inlineCode",{parentName:"p"},"npm i -g expo-cli"),"."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"If you'd like to create a ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.expo.io/versions/latest/introduction/managed-vs-bare"}),"managed React Native project")," then choose the ",Object(i.b)("inlineCode",{parentName:"li"},"blank")," template under the Managed workflow heading."),Object(i.b)("li",{parentName:"ul"},"If you'd like a ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.expo.io/versions/latest/introduction/managed-vs-bare/#bare-workflow"}),"bare React Native project"),", then choose ",Object(i.b)("inlineCode",{parentName:"li"},"minimal")," under the Bare workflow heading."),Object(i.b)("li",{parentName:"ul"},"In both cases you can pick the TypeScript version of the template if you prefer ","\u2014"," React Navigation ships with TypeScript types.")),Object(i.b)("p",null,"Once the project is initialized, in the project directory run ",Object(i.b)("inlineCode",{parentName:"p"},"expo install react-navigation react-native-gesture-handler react-native-reanimated react-native-screens"),", and you're ready to go! You can now continue to ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.x/hello-react-navigation"}),'"Hello React Navigation"')," to start writing some code."),Object(i.b)("h2",{id:"install-into-an-existing-project"},"Install into an existing project"),Object(i.b)("p",null,"Install the ",Object(i.b)("inlineCode",{parentName:"p"},"react-navigation")," package in your React Native project."),Object(i.b)(o.a,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},Object(i.b)(c.a,{value:"npm",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"npm install react-navigation\n"))),Object(i.b)(c.a,{value:"yarn",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"yarn add react-navigation\n")))),Object(i.b)("p",null,"React Navigation is made up of some core utilities and those are then used by navigators to create the navigation structure in your app. Don't worry too much about this for now, it'll become clear soon enough! To frontload the installation work, let's also install and configure dependencies used by most navigators, then we can move forward with starting to write some code."),Object(i.b)("p",null,"The libraries we will install now are ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/software-mansion/react-native-gesture-handler"}),Object(i.b)("inlineCode",{parentName:"a"},"react-native-gesture-handler")),", ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/software-mansion/react-native-reanimated"}),Object(i.b)("inlineCode",{parentName:"a"},"react-native-reanimated")),", ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/software-mansion/react-native-screens"}),Object(i.b)("inlineCode",{parentName:"a"},"react-native-screens"))," and ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/th3rdwave/react-native-safe-area-context"}),Object(i.b)("inlineCode",{parentName:"a"},"react-native-safe-area-context")),". If you already have these libraries installed and at the latest version, you are done here! Otherwise, read on."),Object(i.b)("h4",{id:"installing-dependencies-into-an-expo-managed-project"},"Installing dependencies into an Expo managed project"),Object(i.b)("p",null,"In your project directory, run:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view\n")),Object(i.b)("p",null,"This will install versions of these libraries that are compatible."),Object(i.b)("p",null,"You can now continue to ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.x/hello-react-navigation"}),'"Hello React Navigation"')," to start writing some code."),Object(i.b)("h4",{id:"installing-dependencies-into-a-bare-react-native-project"},"Installing dependencies into a bare React Native project"),Object(i.b)("p",null,"In your project directory, run:"),Object(i.b)(o.a,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},Object(i.b)(c.a,{value:"npm",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view\n"))),Object(i.b)(c.a,{value:"yarn",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"yarn add react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view\n")))),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Note: You might get warnings related to peer dependencies after installation. They are usually caused my incorrect version ranges specified in some packages. You can safely ignore most warnings as long as your app builds.")),Object(i.b)("p",null,"Next, we need to link these libraries. The steps depends on your React Native version:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"React Native 0.60 and higher")),Object(i.b)("p",{parentName:"li"},"On newer versions of React Native, ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/react-native-community/cli/blob/master/docs/autolinking.md"}),"linking is automatic"),"."),Object(i.b)("p",{parentName:"li"},"If you're on a Mac and developing for iOS, you need to install pods to complete the linking. Make sure you have ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://cocoapods.org/"}),"Cocoapods")," installed. Then run:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"cd ios; pod install; cd ..\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"React Native 0.59 and lower")),Object(i.b)("p",{parentName:"li"},"If you're on an older React Native version, you need to manually link the dependencies. To do that, run:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"react-native link react-native-reanimated\nreact-native link react-native-gesture-handler\nreact-native link react-native-screens\nreact-native link react-native-safe-area-context\n")),Object(i.b)("p",{parentName:"li"},"You also need to configure ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikehardy/jetifier"}),"jetifier")," to support dependencies using ",Object(i.b)("inlineCode",{parentName:"p"},"androidx"),":"),Object(i.b)(o.a,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},Object(i.b)(c.a,{value:"npm",mdxType:"TabItem"},Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"npm install --save-dev jetifier\n"))),Object(i.b)(c.a,{value:"yarn",mdxType:"TabItem"},Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"yarn add --save-dev jetifier\n")))),Object(i.b)("p",{parentName:"li"},"Then add it to the ",Object(i.b)("inlineCode",{parentName:"p"},"postinstall")," script in ",Object(i.b)("inlineCode",{parentName:"p"},"package.json"),":"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'"scripts": {\n  "postinstall": "jetifier -r"\n}\n')),Object(i.b)("blockquote",{parentName:"li"},Object(i.b)("p",{parentName:"blockquote"},"Note: Remember to remove this when you upgrade to React Native 0.60 and higher.")),Object(i.b)("p",{parentName:"li"},"Now, run the ",Object(i.b)("inlineCode",{parentName:"p"},"postinstall")," script manually:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"npm run postinstall\n")))),Object(i.b)("p",null,"To finalize installation of ",Object(i.b)("inlineCode",{parentName:"p"},"react-native-gesture-handler")," for Android, make the following modifications to ",Object(i.b)("inlineCode",{parentName:"p"},"MainActivity.java"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-diff"}),'package com.reactnavigation.example;\n\nimport com.facebook.react.ReactActivity;\n+ import com.facebook.react.ReactActivityDelegate;\n+ import com.facebook.react.ReactRootView;\n+ import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;\n\npublic class MainActivity extends ReactActivity {\n\n  @Override\n  protected String getMainComponentName() {\n    return "Example";\n  }\n\n+  @Override\n+  protected ReactActivityDelegate createReactActivityDelegate() {\n+    return new ReactActivityDelegate(this, getMainComponentName()) {\n+      @Override\n+      protected ReactRootView createRootView() {\n+        return new RNGestureHandlerEnabledRootView(MainActivity.this);\n+      }\n+    };\n+  }\n}\n')),Object(i.b)("p",null,"Then add the following at the top of your entry file, such as ",Object(i.b)("inlineCode",{parentName:"p"},"index.js")," or ",Object(i.b)("inlineCode",{parentName:"p"},"App.js"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import 'react-native-gesture-handler';\n")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Note: When you use a navigator (such as stack navigator), you'll need to follow the installation instructions of that navigator for any additional dependencies. If you're getting an error \"Unable to resolve module\", you need to install that module in your project.")),Object(i.b)("p",null,"Now you are ready to build and run your app on the device/simulator."),Object(i.b)("p",null,"Continue to ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.x/hello-react-navigation"}),'"Hello React Navigation"')," to start writing some code."))}u.isMDXComponent=!0}}]);