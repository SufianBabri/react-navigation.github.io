(window.webpackJsonp=window.webpackJsonp||[]).push([[214],{274:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var a=n(1),o=n(6),r=(n(0),n(426)),i={id:"redux-integration",title:"Redux integration",sidebar_label:"Redux integration"},c={unversionedId:"redux-integration",id:"version-3.x/redux-integration",isDocsHomePage:!1,title:"Redux integration",description:"It is extremely easy to use Redux in an app with React Navigation. It's basically no different than without React Navigation. The following example shows how to do it end to end//snack.expo.io/@react-navigation/redux-example. The most important piece from it is the following:",source:"@site/versioned_docs/version-3.x/redux-integration.md",slug:"/redux-integration",permalink:"/docs/3.x/redux-integration",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-3.x/redux-integration.md",version:"3.x",sidebar_label:"Redux integration",sidebar:"version-3.x-docs",previous:{title:"State persistence",permalink:"/docs/3.x/state-persistence"},next:{title:"Integrating with MobX State Tree",permalink:"/docs/3.x/MST-integration"}},s=[{value:"What about <code>navigationOptions</code>?",id:"what-about-navigationoptions",children:[{value:"Use a component that is <code>connect</code>ed",id:"use-a-component-that-is-connected",children:[]},{value:"Pass the state you care about as a param to the screen",id:"pass-the-state-you-care-about-as-a-param-to-the-screen",children:[]},{value:"setParams from your screen",id:"setparams-from-your-screen",children:[]}]},{value:"Can I store the navigation state in Redux too?",id:"can-i-store-the-navigation-state-in-redux-too",children:[]}],p={rightToc:s};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"It is extremely easy to use Redux in an app with React Navigation. It's basically no different than without React Navigation. The following example shows how to do it end to end: ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://snack.expo.io/@react-navigation/redux-example"}),"https://snack.expo.io/@react-navigation/redux-example"),". The most important piece from it is the following:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"let RootStack = createStackNavigator({\n  Counter: CounterContainer,\n  StaticCounter: StaticCounterContainer,\n});\n\nlet Navigation = createAppContainer(RootStack);\n\n// Render the app container component with the provider around it\nexport default class App extends React.Component {\n  render() {\n    return (\n      <Provider store={store}>\n        <Navigation />\n      </Provider>\n    );\n  }\n}\n")),Object(r.b)("p",null,"Notice that we take the component returned from ",Object(r.b)("inlineCode",{parentName:"p"},"createAppContainer")," and wrap it in a ",Object(r.b)("inlineCode",{parentName:"p"},"Provider"),". Ta da! Now feel free to use ",Object(r.b)("inlineCode",{parentName:"p"},"connect")," throughout your app."),Object(r.b)("h2",{id:"what-about-navigationoptions"},"What about ",Object(r.b)("inlineCode",{parentName:"h2"},"navigationOptions"),"?"),Object(r.b)("p",null,"Alright fair enough, the answer here isn't the most obvious. Let's say that you want to access the Redux store state from the title, what would you do? There are a couple of options. For these examples let's say that you want to put the count from the above example into the title."),Object(r.b)("h3",{id:"use-a-component-that-is-connected"},"Use a component that is ",Object(r.b)("inlineCode",{parentName:"h3"},"connect"),"ed"),Object(r.b)("p",null,"Create a component, ",Object(r.b)("inlineCode",{parentName:"p"},"connect")," it to the store, then use that component in the ",Object(r.b)("inlineCode",{parentName:"p"},"title"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"class Count extends React.Component {\n  render() {\n    return <Text>Count: {this.props.value}</Text>\n  }\n}\n\nlet CountContainer = connect(state => ({ value: state.count }))(Count);\n\nclass Counter extends React.Component {\n  static navigationOptions = {\n    title: <CountContainer />\n  };\n\n  /* .. the rest of the code */\n}\n")),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://snack.expo.io/@react-navigation/redux-example-with-dynamic-title"}),"See a runnable example"),"."),Object(r.b)("h3",{id:"pass-the-state-you-care-about-as-a-param-to-the-screen"},"Pass the state you care about as a param to the screen"),Object(r.b)("p",null,"If the value isn't expected to change, you can just pass it from a ",Object(r.b)("inlineCode",{parentName:"p"},"connect"),"ed component to the other screen as a param. "),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"<Button\n  title=\"Go to static count screen\"\n  onPress={() =>\n    this.props.navigation.navigate('StaticCounter', {\n      count: this.props.count,\n    })\n  }\n/>\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"class StaticCounter extends React.Component {\n  static navigationOptions = ({ navigation }) => ({\n    title: navigation.getParam('count'),\n  });\n\n  render() {\n    return (\n      <View style={styles.container}>\n        <Text style={styles.paragraph}>\n          {this.props.navigation.getParam('count')}\n        </Text>\n      </View>\n    );\n  }\n}\n")),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://snack.expo.io/@react-navigation/redux-example-with-dynamic-title"}),"See a runnable example"),"."),Object(r.b)("h3",{id:"setparams-from-your-screen"},"setParams from your screen"),Object(r.b)("p",null,"Let's modify the ",Object(r.b)("inlineCode",{parentName:"p"},"StaticCounter")," from the previous example as follows:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"class StaticCounter extends React.Component {\n  static navigationOptions = ({ navigation }) => ({\n    title: navigation.getParam('count'),\n  });\n\n  componentDidMount() {\n    this.updateCount();\n  }\n\n  componentDidUpdate() {\n    this.updateCount();\n  }\n\n  updateCount() {\n    this.props.navigation.setParams({ count: this.props.count });\n  }\n\n  render() {\n    return (\n      <View style={styles.container}>\n        <Text style={styles.paragraph}>\n          {this.props.navigation.getParam('count')}\n        </Text>\n      </View>\n    );\n  }\n}\n")),Object(r.b)("p",null,"Now whenever the store updates we update the ",Object(r.b)("inlineCode",{parentName:"p"},"count")," param and the title updates accordingly."),Object(r.b)("h2",{id:"can-i-store-the-navigation-state-in-redux-too"},"Can I store the navigation state in Redux too?"),Object(r.b)("p",null,"This is technically possible, but we don't recommend it - it's too easy to shoot yourself in the foot and slow down / break your app. We encourage you to leave it up to React Navigation to manage the navigation state. But if you really want to do this, you can use ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/react-navigation/react-navigation-redux-helpers"}),"react-navigation-redux-helpers"),", but this isn't an officially supported workflow."))}u.isMDXComponent=!0},426:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return h}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=u(n),b=a,h=l["".concat(i,".").concat(b)]||l[b]||d[b]||r;return n?o.a.createElement(h,c(c({ref:t},p),{},{components:n})):o.a.createElement(h,c({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<r;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);