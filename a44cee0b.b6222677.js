(window.webpackJsonp=window.webpackJsonp||[]).push([[239],{299:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return s}));var n=a(1),o=a(6),i=(a(0),a(426)),r={id:"bottom-tab-navigator",title:"createBottomTabNavigator",sidebar_label:"createBottomTabNavigator"},b={unversionedId:"bottom-tab-navigator",id:"version-2.x/bottom-tab-navigator",isDocsHomePage:!1,title:"createBottomTabNavigator",description:"A simple tab bar on the bottom of the screen that lets you switch between different routes. Routes are lazily initialized -- their screen components are not mounted until they are first focused.",source:"@site/versioned_docs/version-2.x/bottom-tab-navigator.md",slug:"/bottom-tab-navigator",permalink:"/docs/2.x/bottom-tab-navigator",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-2.x/bottom-tab-navigator.md",version:"2.x",sidebar_label:"createBottomTabNavigator",sidebar:"version-2.x-api",previous:{title:"createTabNavigator",permalink:"/docs/2.x/tab-navigator"},next:{title:"createMaterialBottomTabNavigator",permalink:"/docs/2.x/material-bottom-tab-navigator"}},l=[{value:"RouteConfigs",id:"routeconfigs",children:[]},{value:"BottomTabNavigatorConfig",id:"bottomtabnavigatorconfig",children:[]},{value:"<code>navigationOptions</code> for screens inside of the navigator",id:"navigationoptions-for-screens-inside-of-the-navigator",children:[]}],c={rightToc:l};function s(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"A simple tab bar on the bottom of the screen that lets you switch between different routes. Routes are lazily initialized -- their screen components are not mounted until they are first focused."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"createBottomTabNavigator(RouteConfigs, BottomTabNavigatorConfig);\n")),Object(i.b)("h2",{id:"routeconfigs"},"RouteConfigs"),Object(i.b)("p",null,"The route configs object is a mapping from route name to a route config, which tells the navigator what to present for that route, see ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/2.x/stack-navigator#routeconfigs"}),"example")," from stack navigator."),Object(i.b)("h2",{id:"bottomtabnavigatorconfig"},"BottomTabNavigatorConfig"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"initialRouteName")," - The routeName for the initial tab route when first loading."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"order")," - Array of routeNames which defines the order of the tabs."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"paths")," - Provide a mapping of routeName to path config, which overrides the paths set in the routeConfigs."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"backBehavior")," - Should the back button cause a tab switch to the initial tab? If yes, set to ",Object(i.b)("inlineCode",{parentName:"li"},"initialRoute"),", otherwise ",Object(i.b)("inlineCode",{parentName:"li"},"none"),". Defaults to ",Object(i.b)("inlineCode",{parentName:"li"},"initialRoute")," behavior."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"tabBarComponent")," - Optional, override component to use as the tab bar."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"tabBarOptions")," - An object with the following properties:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"activeTintColor")," - Label and icon color of the active tab."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"activeBackgroundColor")," - Background color of the active tab."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"inactiveTintColor")," - Label and icon color of the inactive tab."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"inactiveBackgroundColor")," - Background color of the inactive tab."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"showLabel")," - Whether to show label for tab, default is true."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"showIcon")," - Whether to show icon for tab, default is true."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"style")," - Style object for the tab bar."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"labelStyle")," - Style object for the tab label."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"tabStyle")," - Style object for the tab."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"allowFontScaling")," - Whether label font should scale to respect Text Size accessibility settings, default is true."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"adaptive")," - Should the tab icons and labels alignment change based on screen size? Defaults to ",Object(i.b)("inlineCode",{parentName:"li"},"true")," for iOS 11. If ",Object(i.b)("inlineCode",{parentName:"li"},"false"),", tab icons and labels align vertically all the time. When ",Object(i.b)("inlineCode",{parentName:"li"},"true"),", tab icons and labels align horizontally on tablet."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"safeAreaInset")," - Override the ",Object(i.b)("inlineCode",{parentName:"li"},"forceInset")," prop for ",Object(i.b)("inlineCode",{parentName:"li"},"<SafeAreaView>"),". Defaults to ",Object(i.b)("inlineCode",{parentName:"li"},"{ bottom: 'always', top: 'never' }"),". Available keys are ",Object(i.b)("inlineCode",{parentName:"li"},"top | bottom | left | right")," provided with the values ",Object(i.b)("inlineCode",{parentName:"li"},"'always' | 'never'"),".")))),Object(i.b)("p",null,"Example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"tabBarOptions: {\n  activeTintColor: '#e91e63',\n  labelStyle: {\n    fontSize: 12,\n  },\n  style: {\n    backgroundColor: 'blue',\n  },\n}\n")),Object(i.b)("p",null,"If you want to customize the ",Object(i.b)("inlineCode",{parentName:"p"},"tabBarComponent"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';\n\nconst TabBarComponent = (props) => (<BottomTabBar {...props} />);\n\nconst TabScreens = createBottomTabNavigator(\n  {\n    tabBarComponent: props =>\n      <TabBarComponent\n        {...props}\n        style={{ borderTopColor: '#605F60' }}\n      />,\n  },\n);\n")),Object(i.b)("h2",{id:"navigationoptions-for-screens-inside-of-the-navigator"},Object(i.b)("inlineCode",{parentName:"h2"},"navigationOptions")," for screens inside of the navigator"),Object(i.b)("h4",{id:"title"},Object(i.b)("inlineCode",{parentName:"h4"},"title")),Object(i.b)("p",null,"Generic title that can be used as a fallback for ",Object(i.b)("inlineCode",{parentName:"p"},"headerTitle")," and ",Object(i.b)("inlineCode",{parentName:"p"},"tabBarLabel"),"."),Object(i.b)("h4",{id:"tabbarvisible"},Object(i.b)("inlineCode",{parentName:"h4"},"tabBarVisible")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"true")," or ",Object(i.b)("inlineCode",{parentName:"p"},"false")," to show or hide the tab bar, if not set then defaults to ",Object(i.b)("inlineCode",{parentName:"p"},"true"),"."),Object(i.b)("h4",{id:"tabbaricon"},Object(i.b)("inlineCode",{parentName:"h4"},"tabBarIcon")),Object(i.b)("p",null,"React Element or a function that given ",Object(i.b)("inlineCode",{parentName:"p"},"{ focused: boolean, horizontal: boolean, tintColor: string }")," returns a React.Node, to display in the tab bar. ",Object(i.b)("inlineCode",{parentName:"p"},"horizontal")," is ",Object(i.b)("inlineCode",{parentName:"p"},"true")," when the device is in landscape and ",Object(i.b)("inlineCode",{parentName:"p"},"false")," when portrait. The icon is re-rendered whenever the device orientation changes."),Object(i.b)("h4",{id:"tabbarlabel"},Object(i.b)("inlineCode",{parentName:"h4"},"tabBarLabel")),Object(i.b)("p",null,"Title string of a tab displayed in the tab bar or React Element or a function that given ",Object(i.b)("inlineCode",{parentName:"p"},"{ focused: boolean, tintColor: string }")," returns a React.Node, to display in tab bar. When undefined, scene ",Object(i.b)("inlineCode",{parentName:"p"},"title")," is used. To hide, see ",Object(i.b)("inlineCode",{parentName:"p"},"tabBarOptions.showLabel")," in the previous section."),Object(i.b)("h4",{id:"tabbarbuttoncomponent"},Object(i.b)("inlineCode",{parentName:"h4"},"tabBarButtonComponent")),Object(i.b)("p",null,"React Component that wraps the icon and label and implements ",Object(i.b)("inlineCode",{parentName:"p"},"onPress"),". The default is a wrapper around ",Object(i.b)("inlineCode",{parentName:"p"},"TouchableWithoutFeedback")," that makes it behave the same as other touchables. ",Object(i.b)("inlineCode",{parentName:"p"},"tabBarButtonComponent: TouchableOpacity")," would use ",Object(i.b)("inlineCode",{parentName:"p"},"TouchableOpacity")," instead."),Object(i.b)("h4",{id:"tabbaraccessibilitylabel"},Object(i.b)("inlineCode",{parentName:"h4"},"tabBarAccessibilityLabel")),Object(i.b)("p",null,"Accessibility label for the tab button. This is read by the screen reader when the user taps the tab. It's recommended to set this if you don't have a label for the tab."),Object(i.b)("h4",{id:"tabbartestid"},Object(i.b)("inlineCode",{parentName:"h4"},"tabBarTestID")),Object(i.b)("p",null,"ID to locate this tab button in tests."),Object(i.b)("h4",{id:"tabbaronpress"},Object(i.b)("inlineCode",{parentName:"h4"},"tabBarOnPress")),Object(i.b)("p",null,"Callback to handle press events; the argument is an object containing:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"navigation"),": navigation prop for the screen"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"defaultHandler"),": the default handler for tab press")),Object(i.b)("p",null,"Useful for adding a custom logic before the transition to the next scene (the tapped one) starts."),Object(i.b)("p",null,"Define this callback without ever invoking ",Object(i.b)("inlineCode",{parentName:"p"},"defaultHandler")," to prevent any navigation from occurring."))}s.isMDXComponent=!0},426:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),o=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=o.a.createContext({}),s=function(e){var t=o.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},p=function(e){var t=s(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,r=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(a),u=n,m=p["".concat(r,".").concat(u)]||p[u]||d[u]||i;return a?o.a.createElement(m,b(b({ref:t},c),{},{components:a})):o.a.createElement(m,b({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,r=new Array(i);r[0]=u;var b={};for(var l in t)hasOwnProperty.call(t,l)&&(b[l]=t[l]);b.originalType=e,b.mdxType="string"==typeof e?e:n,r[1]=b;for(var c=2;c<i;c++)r[c]=a[c];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);