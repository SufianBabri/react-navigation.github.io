(window.webpackJsonp=window.webpackJsonp||[]).push([[354],{413:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return p})),t.d(n,"default",(function(){return u}));var o=t(1),a=t(6),i=(t(0),t(426)),r={id:"connecting-navigation-prop",title:"Access the navigation prop from any component",sidebar_label:"Access the navigation prop from any component"},c={unversionedId:"connecting-navigation-prop",id:"version-2.x/connecting-navigation-prop",isDocsHomePage:!1,title:"Access the navigation prop from any component",description:"withNavigation is a higher order component which passes the navigation prop into a wrapped Component. It's useful when you cannot pass the navigation prop into the component directly, or don't want to pass it in case of a deeply nested child.",source:"@site/versioned_docs/version-2.x/connecting-navigation-prop.md",slug:"/connecting-navigation-prop",permalink:"/docs/2.x/connecting-navigation-prop",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-2.x/connecting-navigation-prop.md",version:"2.x",sidebar_label:"Access the navigation prop from any component",sidebar:"version-2.x-docs",previous:{title:"Custom Android back button behavior",permalink:"/docs/2.x/custom-android-back-button-handling"},next:{title:"Navigating without the navigation prop",permalink:"/docs/2.x/navigating-without-navigation-prop"}},p=[],s={rightToc:p};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/2.x/with-navigation"}),Object(i.b)("inlineCode",{parentName:"a"},"withNavigation"))," is a higher order component which passes the ",Object(i.b)("inlineCode",{parentName:"p"},"navigation")," prop into a wrapped Component. It's useful when you cannot pass the ",Object(i.b)("inlineCode",{parentName:"p"},"navigation")," prop into the component directly, or don't want to pass it in case of a deeply nested child."),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-javascript"}),"import React from 'react';\nimport { Button } from 'react-native';\n\nexport default class MyBackButton extends React.Component {\n  render() {\n    // This will throw an 'undefined is not a function' exception because the navigation\n    // prop is undefined.\n    return <Button title=\"Back\" onPress={() => { this.props.navigation.goBack() }} />;\n  }\n}\n")),Object(i.b)("p",null,"To resolve this exception, you could pass the ",Object(i.b)("inlineCode",{parentName:"p"},"navigation")," prop in to ",Object(i.b)("inlineCode",{parentName:"p"},"MyBackButton")," when you render it from a screen, like so: ",Object(i.b)("inlineCode",{parentName:"p"},"<MyBackButton navigation={this.props.navigation} />"),"."),Object(i.b)("p",null,"Alternatively, you can use the ",Object(i.b)("inlineCode",{parentName:"p"},"withNavigation")," function to provide the ",Object(i.b)("inlineCode",{parentName:"p"},"navigation")," prop automatically (through React context, if you're curious). This function behaves similarly to Redux's ",Object(i.b)("inlineCode",{parentName:"p"},"connect")," function, except rather than providing the ",Object(i.b)("inlineCode",{parentName:"p"},"dispatch")," prop to the component it wraps, it provides the ",Object(i.b)("inlineCode",{parentName:"p"},"navigation")," prop."),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"import React from 'react';\nimport { Button } from 'react-native';\nimport { withNavigation } from 'react-navigation';\n\nclass MyBackButton extends React.Component {\n  render() {\n    return <Button title=\"Back\" onPress={() => { this.props.navigation.goBack() }} />;\n  }\n}\n\n// withNavigation returns a component that wraps MyBackButton and passes in the\n// navigation prop\nexport default withNavigation(MyBackButton);\n")),Object(i.b)("p",null,"Using this approach, you can render ",Object(i.b)("inlineCode",{parentName:"p"},"MyBackButton")," anywhere in your app without passing in a ",Object(i.b)("inlineCode",{parentName:"p"},"navigation")," prop explicitly and it will work as expected."))}u.isMDXComponent=!0},426:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return m}));var o=t(0),a=t.n(o);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),u=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},l=function(e){var n=u(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,r=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),l=u(t),b=o,m=l["".concat(r,".").concat(b)]||l[b]||d[b]||i;return t?a.a.createElement(m,c(c({ref:n},s),{},{components:t})):a.a.createElement(m,c({ref:n},s))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,r=new Array(i);r[0]=b;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,r[1]=c;for(var s=2;s<i;s++)r[s]=t[s];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);