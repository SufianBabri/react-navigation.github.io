(window.webpackJsonp=window.webpackJsonp||[]).push([[232],{292:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return a})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return p}));var r=n(1),o=n(6),s=(n(0),n(426)),c={id:"use-is-focused",title:"useIsFocused",sidebar_label:"useIsFocused"},a={unversionedId:"use-is-focused",id:"version-5.x/use-is-focused",isDocsHomePage:!1,title:"useIsFocused",description:"We might want to render different content based on the current focus state of the screen. The library exports a useIsFocused hook to make this easier:",source:"@site/versioned_docs/version-5.x/use-is-focused.md",slug:"/use-is-focused",permalink:"/docs/use-is-focused",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-5.x/use-is-focused.md",version:"5.x",sidebar_label:"useIsFocused",sidebar:"version-5.x/docs",previous:{title:"useFocusEffect",permalink:"/docs/use-focus-effect"},next:{title:"useLinkTo",permalink:"/docs/use-link-to"}},i=[{value:"Using with class component",id:"using-with-class-component",children:[]}],u={rightToc:i};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"We might want to render different content based on the current focus state of the screen. The library exports a ",Object(s.b)("inlineCode",{parentName:"p"},"useIsFocused")," hook to make this easier:"),Object(s.b)("samp",{id:"use-is-focused"}),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import { useIsFocused } from '@react-navigation/native';\n\n// ...\n\nfunction Profile() {\n  const isFocused = useIsFocused();\n\n  return <Text>{isFocused ? 'focused' : 'unfocused'}</Text>;\n}\n")),Object(s.b)("p",null,"Note that using this hook triggers a re-render for the screen when it changes focus. This might cause lags during the animation if your screen is heavy. You might want to extract the expensive parts to separate components and use ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"https://reactjs.org/docs/react-api.html#reactmemo"}),Object(s.b)("inlineCode",{parentName:"a"},"React.memo"))," or ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"https://reactjs.org/docs/react-api.html#reactpurecomponent"}),Object(s.b)("inlineCode",{parentName:"a"},"React.PureComponent"))," to minimize re-renders for them."),Object(s.b)("h2",{id:"using-with-class-component"},"Using with class component"),Object(s.b)("p",null,"You can wrap your class component in a function component to use the hook:"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"class Profile extends React.Component {\n  render() {\n    // Get it from props\n    const { isFocused } = this.props;\n  }\n}\n\n// Wrap and export\nexport default function(props) {\n  const isFocused = useIsFocused();\n\n  return <Profile {...props} isFocused={isFocused} />;\n}\n")))}p.isMDXComponent=!0},426:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),p=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=p(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(n),f=r,m=d["".concat(c,".").concat(f)]||d[f]||l[f]||s;return n?o.a.createElement(m,a(a({ref:t},u),{},{components:n})):o.a.createElement(m,a({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,c=new Array(s);c[0]=f;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a.mdxType="string"==typeof e?e:r,c[1]=a;for(var u=2;u<s;u++)c[u]=n[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);