(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{426:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return h}));var o=t(0),r=t.n(o);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),u=function(e){var n=r.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=u(e.components);return r.a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},b=r.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(t),b=o,h=d["".concat(i,".").concat(b)]||d[b]||p[b]||a;return t?r.a.createElement(h,c(c({ref:n},l),{},{components:t})):r.a.createElement(h,c({ref:n},l))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=b;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=t[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},79:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return u}));var o=t(1),r=t(6),a=(t(0),t(426)),i={id:"custom-android-back-button-handling",title:"Custom Android back button behavior",sidebar_label:"Custom Android back button behavior"},c={unversionedId:"custom-android-back-button-handling",id:"version-3.x/custom-android-back-button-handling",isDocsHomePage:!1,title:"Custom Android back button behavior",description:"By default, when user presses the Android hardware back button, react-navigation will pop a screen or exit the app if there are no screens to pop. This is a sensible default behavior, but there are situations when you might want to implement custom handling.",source:"@site/versioned_docs/version-3.x/custom-android-back-button-handling.md",slug:"/custom-android-back-button-handling",permalink:"/docs/3.x/custom-android-back-button-handling",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-3.x/custom-android-back-button-handling.md",version:"3.x",sidebar_label:"Custom Android back button behavior",sidebar:"version-3.x-docs",previous:{title:"Navigation options resolution",permalink:"/docs/3.x/navigation-options-resolution"},next:{title:"Access the navigation prop from any component",permalink:"/docs/3.x/connecting-navigation-prop"}},s=[{value:"Why not use component lifecycle methods?",id:"why-not-use-component-lifecycle-methods",children:[]}],l={rightToc:s};function u(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"By default, when user presses the Android hardware back button, react-navigation will pop a screen or exit the app if there are no screens to pop. This is a sensible default behavior, but there are situations when you might want to implement custom handling."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"If you're looking for an easy-to-use solution, you can check out a community-developed package ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/vonovak/react-navigation-backhandler"}),"react-navigation-backhandler"),". The following text shows what the package does under the cover.")),Object(a.b)("p",null,'As an example, consider a screen where user is selecting items in a list, and a "selection mode" is active. On a back button press, you would first want the "selection mode" to be deactivated, and the screen should be popped only on the second back button press. The following code snippet demonstrates the situation. We make use of ',Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://reactnative.dev/docs/backhandler.html"}),Object(a.b)("inlineCode",{parentName:"a"},"BackHandler"))," which comes with react-native and we ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/3.x/navigation-prop#addlistener-subscribe-to-updates-to-navigation-lifecycle"}),"subscribe to navigation lifecycle updates")," to add our custom ",Object(a.b)("inlineCode",{parentName:"p"},"hardwareBackPress")," listener."),Object(a.b)("p",null,"Returning ",Object(a.b)("inlineCode",{parentName:"p"},"true")," from ",Object(a.b)("inlineCode",{parentName:"p"},"onBackButtonPressAndroid")," denotes that we have handled the event, and react-navigation's listener will not get called, thus not popping the screen. Returning ",Object(a.b)("inlineCode",{parentName:"p"},"false")," will cause the event to bubble up and react-navigation's listener will pop the screen."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"import React from \"react\";\nimport { BackHandler } from \"react-native\";\n\nclass ScreenWithCustomBackBehavior extends React.Component {\n  _didFocusSubscription;\n  _willBlurSubscription;\n\n  constructor(props) {\n    super(props);\n    this._didFocusSubscription = props.navigation.addListener('didFocus', payload =>\n      BackHandler.addEventListener('hardwareBackPress', this.onBackButtonPressAndroid)\n    );\n  }\n\n  componentDidMount() {\n    this._willBlurSubscription = this.props.navigation.addListener('willBlur', payload =>\n      BackHandler.removeEventListener('hardwareBackPress', this.onBackButtonPressAndroid)\n    );\n  }\n\n  onBackButtonPressAndroid = () => {\n    if (this.isSelectionModeEnabled()) {\n      this.disableSelectionMode();\n      return true;\n    } else {\n      return false;\n    }\n  };\n\n  componentWillUnmount() {\n    this._didFocusSubscription && this._didFocusSubscription.remove();\n    this._willBlurSubscription && this._willBlurSubscription.remove();\n  }\n\n  render() {\n    // ...\n  }\n}\n")),Object(a.b)("p",null,"The presented approach will work well for screens that are shown in a ",Object(a.b)("inlineCode",{parentName:"p"},"StackNavigator"),". Custom back button handling in other situations may not be supported at the moment (eg. A known case when this does not work is when you want to handle back button press in an open drawer. PRs for such use cases are welcome!)."),Object(a.b)("h3",{id:"why-not-use-component-lifecycle-methods"},"Why not use component lifecycle methods?"),Object(a.b)("p",null,"At first, you may be inclined to use ",Object(a.b)("inlineCode",{parentName:"p"},"componentDidMount")," to subscribe for the back press event and ",Object(a.b)("inlineCode",{parentName:"p"},"componentWillUnmount")," to unsubscribe. This approach will not work - learn more about this in ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/3.x/navigation-lifecycle"}),"navigation lifecycle"),"."))}u.isMDXComponent=!0}}]);