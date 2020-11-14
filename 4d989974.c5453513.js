(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{180:function(n,e,t){"use strict";t.r(e),t.d(e,"frontMatter",(function(){return r})),t.d(e,"metadata",(function(){return p})),t.d(e,"rightToc",(function(){return c})),t.d(e,"default",(function(){return u}));var a=t(1),o=t(6),i=(t(0),t(426)),r={id:"navigating-without-navigation-prop",title:"Navigating without the navigation prop",sidebar_label:"Navigating without the navigation prop"},p={unversionedId:"navigating-without-navigation-prop",id:"version-1.x/navigating-without-navigation-prop",isDocsHomePage:!1,title:"Navigating without the navigation prop",description:"Calling functions such as navigate or popToTop on the navigation prop is not the only way to navigate around your app. As an alternative, you can dispatch navigation actions on your top-level navigator, provided you aren't passing your own navigation prop as you would with a redux integration. The presented approach is useful in situations when you want to trigger a navigation action from places where you do not have access to the navigation prop, or if you're looking for an alternative to using the navigation prop.",source:"@site/versioned_docs/version-1.x/navigating-without-navigation-prop.md",slug:"/navigating-without-navigation-prop",permalink:"/docs/1.x/navigating-without-navigation-prop",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-1.x/navigating-without-navigation-prop.md",version:"1.x",sidebar_label:"Navigating without the navigation prop",sidebar:"version-1.x/docs",previous:{title:"Access the navigation prop from any component",permalink:"/docs/1.x/connecting-navigation-prop"},next:{title:"Deep linking",permalink:"/docs/1.x/deep-linking"}},c=[],s={rightToc:c};function u(n){var e=n.components,t=Object(o.a)(n,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Calling functions such as ",Object(i.b)("inlineCode",{parentName:"p"},"navigate")," or ",Object(i.b)("inlineCode",{parentName:"p"},"popToTop")," on the ",Object(i.b)("inlineCode",{parentName:"p"},"navigation")," prop is not the only way to navigate around your app. As an alternative, you can dispatch navigation actions on your top-level navigator, provided you aren't passing your own ",Object(i.b)("inlineCode",{parentName:"p"},"navigation")," prop as you would with a redux integration. The presented approach is useful in situations when you want to trigger a navigation action from places where you do not have access to the ",Object(i.b)("inlineCode",{parentName:"p"},"navigation")," prop, or if you're looking for an alternative to using the ",Object(i.b)("inlineCode",{parentName:"p"},"navigation")," prop."),Object(i.b)("p",null,"You can get access to a navigator through a ",Object(i.b)("inlineCode",{parentName:"p"},"ref")," and pass it to the ",Object(i.b)("inlineCode",{parentName:"p"},"NavigationService")," which we will later use to navigate. Use this only with the top-level (root) navigator of your app."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"// App.js\n\nimport NavigationService from './NavigationService';\n\nconst TopLevelNavigator = StackNavigator({ /* ... */ })\n\nclass App extends React.Component {\n  // ...\n\n  render(): {\n    return (\n      <TopLevelNavigator\n        ref={navigatorRef => {\n          NavigationService.setTopLevelNavigator(navigatorRef);\n        }}\n      />\n    );\n  }\n}\n")),Object(i.b)("p",null,"In the next step, we define ",Object(i.b)("inlineCode",{parentName:"p"},"NavigationService")," which is a simple module with functions that dispatch user-defined navigation actions."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"// NavigationService.js\n\nimport { NavigationActions } from 'react-navigation';\n\nlet _navigator;\n\nfunction setTopLevelNavigator(navigatorRef) {\n  _navigator = navigatorRef;\n}\n\nfunction navigate(routeName, params) {\n  _navigator.dispatch(\n    NavigationActions.navigate({\n      type: NavigationActions.NAVIGATE,\n      routeName,\n      params,\n    })\n  );\n}\n\n// add other navigation functions that you need and export them\n\nexport default {\n  navigate,\n  setTopLevelNavigator,\n};\n")),Object(i.b)("p",null,"Then, in any of your javascript modules, just import the ",Object(i.b)("inlineCode",{parentName:"p"},"NavigationService")," and call functions which you exported from it. You may use this approach outside of your React components and, in fact, it works just as well when used from within them."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"// any js module\nimport NavigationService from 'path-to-NavigationService.js';\n\n// ...\n\nNavigationService.navigate('ChatScreen', { userName: 'Lucy' });\n")),Object(i.b)("p",null,"In ",Object(i.b)("inlineCode",{parentName:"p"},"NavigationService"),", you can create your own navigation actions, or compose multiple navigation actions into one, and then easily reuse them throughout your application. When writing tests, you may mock the navigation functions, and make assertions on whether the correct functions are called, with the correct parameters."))}u.isMDXComponent=!0},426:function(n,e,t){"use strict";t.d(e,"a",(function(){return g})),t.d(e,"b",(function(){return d}));var a=t(0),o=t.n(a);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function r(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function p(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function c(n,e){if(null==n)return{};var t,a,o=function(n,e){if(null==n)return{};var t,a,o={},i=Object.keys(n);for(a=0;a<i.length;a++)t=i[a],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(a=0;a<i.length;a++)t=i[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var s=o.a.createContext({}),u=function(n){var e=o.a.useContext(s),t=e;return n&&(t="function"==typeof n?n(e):p(p({},e),n)),t},g=function(n){var e=u(n.components);return o.a.createElement(s.Provider,{value:e},n.children)},v={inlineCode:"code",wrapper:function(n){var e=n.children;return o.a.createElement(o.a.Fragment,{},e)}},l=o.a.forwardRef((function(n,e){var t=n.components,a=n.mdxType,i=n.originalType,r=n.parentName,s=c(n,["components","mdxType","originalType","parentName"]),g=u(t),l=a,d=g["".concat(r,".").concat(l)]||g[l]||v[l]||i;return t?o.a.createElement(d,p(p({ref:e},s),{},{components:t})):o.a.createElement(d,p({ref:e},s))}));function d(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var i=t.length,r=new Array(i);r[0]=l;var p={};for(var c in e)hasOwnProperty.call(e,c)&&(p[c]=e[c]);p.originalType=n,p.mdxType="string"==typeof n?n:a,r[1]=p;for(var s=2;s<i;s++)r[s]=t[s];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,t)}l.displayName="MDXCreateElement"}}]);