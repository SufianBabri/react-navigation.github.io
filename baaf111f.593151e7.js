(window.webpackJsonp=window.webpackJsonp||[]).push([[273],{332:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return l}));var n=a(1),r=a(6),o=(a(0),a(426)),i={id:"params",title:"Passing parameters to routes",sidebar_label:"Passing parameters to routes"},s={unversionedId:"params",id:"version-2.x/params",isDocsHomePage:!1,title:"Passing parameters to routes",description:'Remember when I said "more on that later when we talk about params!"? Well, the time has come.',source:"@site/versioned_docs/version-2.x/params.md",slug:"/params",permalink:"/docs/2.x/params",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-2.x/params.md",version:"2.x",sidebar_label:"Passing parameters to routes",sidebar:"version-2.x-docs",previous:{title:"Navigation lifecycle",permalink:"/docs/2.x/navigation-lifecycle"},next:{title:"Configuring the header bar",permalink:"/docs/2.x/headers"}},c=[{value:"Summary",id:"summary",children:[]}],p={rightToc:c};function l(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,'Remember when I said "more on that later when we talk about ',Object(o.b)("inlineCode",{parentName:"p"},"params"),'!"? Well, the time has come.'),Object(o.b)("p",null,"Now that we know how to ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/2.x/hello-react-navigation"}),"create a stack navigator with some routes")," and ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/2.x/navigating"}),"navigate between those routes"),", let's look at how we can pass data to routes when we navigate to them."),Object(o.b)("p",null,"There are two pieces to this:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Pass params to a route by putting them in an object as a second parameter to the ",Object(o.b)("inlineCode",{parentName:"p"},"navigation.navigate")," function: ",Object(o.b)("inlineCode",{parentName:"p"},"this.props.navigation.navigate('RouteName', { /* params go here */ })"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Read the params in your screen component: ",Object(o.b)("inlineCode",{parentName:"p"},"this.props.navigation.getParam(paramName, defaultValue)"),"."))),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"We recommend that the params you pass are JSON-serializable. That way, you'll be able to use ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/2.x/state-persistence"}),"state persistence")," and your screen components will have the right contract for implementing ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/2.x/deep-linking"}),"deep linking"),".")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"class HomeScreen extends React.Component {\n  render() {\n    return (\n      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n        <Text>Home Screen</Text>\n        <Button\n          title=\"Go to Details\"\n          onPress={() => {\n            /* 1. Navigate to the Details route with params */\n            this.props.navigation.navigate('Details', {\n              itemId: 86,\n              otherParam: 'anything you want here',\n            });\n          }}\n        />\n      </View>\n    );\n  }\n}\n\nclass DetailsScreen extends React.Component {\n  render() {\n    /* 2. Get the param, provide a fallback value if not available */\n    const { navigation } = this.props;\n    const itemId = navigation.getParam('itemId', 'NO-ID');\n    const otherParam = navigation.getParam('otherParam', 'some default value');\n\n    return (\n      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n        <Text>Details Screen</Text>\n        <Text>itemId: {JSON.stringify(itemId)}</Text>\n        <Text>otherParam: {JSON.stringify(otherParam)}</Text>\n        <Button\n          title=\"Go to Details... again\"\n          onPress={() =>\n            this.props.navigation.push('Details', {\n              itemId: Math.floor(Math.random() * 100),\n            })}\n        />\n        <Button\n          title=\"Go to Home\"\n          onPress={() => this.props.navigation.navigate('Home')}\n        />\n        <Button\n          title=\"Go back\"\n          onPress={() => this.props.navigation.goBack()}\n        />\n      </View>\n    );\n  }\n}\n")),Object(o.b)("a",{href:"https://snack.expo.io/@react-navigation/navigate-with-params-v2",target:"blank",class:"run-code-button"},"\u2192 Run this code"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"You can also directly access the params object with ",Object(o.b)("inlineCode",{parentName:"p"},"this.props.navigation.state.params"),". This may be ",Object(o.b)("inlineCode",{parentName:"p"},"null")," if no params were supplied, and so it's usually easier to just use ",Object(o.b)("inlineCode",{parentName:"p"},"getParam")," so you don't have to deal with that case.")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"If you want to access the params directly through props (eg. ",Object(o.b)("inlineCode",{parentName:"p"},"this.props.itemId"),") rather than ",Object(o.b)("inlineCode",{parentName:"p"},"this.props.navigation.getParam"),", you may use a community-developed ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/vonovak/react-navigation-props-mapper"}),"react-navigation-props-mapper")," package.")),Object(o.b)("h2",{id:"summary"},"Summary"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"navigate")," and ",Object(o.b)("inlineCode",{parentName:"li"},"push")," accept an optional second argument to let you pass parameters to the route you are navigating to. For example: ",Object(o.b)("inlineCode",{parentName:"li"},"this.props.navigation.navigate('RouteName', {paramName: 'value'})"),"."),Object(o.b)("li",{parentName:"ul"},"You can read the params through ",Object(o.b)("inlineCode",{parentName:"li"},"this.props.navigation.getParam")),Object(o.b)("li",{parentName:"ul"},"As an alternative to ",Object(o.b)("inlineCode",{parentName:"li"},"getParam"),", you may use ",Object(o.b)("inlineCode",{parentName:"li"},"this.props.navigation.state.params"),". It is ",Object(o.b)("inlineCode",{parentName:"li"},"null")," if no parameters are specified."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://snack.expo.io/@react-navigation/navigate-with-params-v2"}),"Full source of what we have built so far"),".")))}l.isMDXComponent=!0},426:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),l=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},m=function(e){var t=l(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(a),u=n,d=m["".concat(i,".").concat(u)]||m[u]||b[u]||o;return a?r.a.createElement(d,s(s({ref:t},p),{},{components:a})):r.a.createElement(d,s({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);