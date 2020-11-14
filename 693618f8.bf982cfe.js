(window.webpackJsonp=window.webpackJsonp||[]).push([[158],{218:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return s}));var n=a(1),i=a(6),o=(a(0),a(426)),r={id:"bottom-tab-navigator",title:"createBottomTabNavigator",sidebar_label:"createBottomTabNavigator"},b={unversionedId:"bottom-tab-navigator",id:"version-3.x/bottom-tab-navigator",isDocsHomePage:!1,title:"createBottomTabNavigator",description:"A simple tab bar on the bottom of the screen that lets you switch between different routes. Routes are lazily initialized -- their screen components are not mounted until they are first focused.",source:"@site/versioned_docs/version-3.x/bottom-tab-navigator.md",slug:"/bottom-tab-navigator",permalink:"/docs/3.x/bottom-tab-navigator",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-3.x/bottom-tab-navigator.md",version:"3.x",sidebar_label:"createBottomTabNavigator",sidebar:"version-3.x-docs",previous:{title:"createDrawerNavigator",permalink:"/docs/3.x/drawer-navigator"},next:{title:"createMaterialBottomTabNavigator",permalink:"/docs/3.x/material-bottom-tab-navigator"}},l=[{value:"RouteConfigs",id:"routeconfigs",children:[]},{value:"BottomTabNavigatorConfig",id:"bottomtabnavigatorconfig",children:[]},{value:"<code>navigationOptions</code> for screens inside of the navigator",id:"navigationoptions-for-screens-inside-of-the-navigator",children:[]}],c={rightToc:l};function s(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"A simple tab bar on the bottom of the screen that lets you switch between different routes. Routes are lazily initialized -- their screen components are not mounted until they are first focused."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"For a complete usage guide please visit ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/3.x/tab-based-navigation"}),"Tab Navigation"))),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"createBottomTabNavigator(RouteConfigs, BottomTabNavigatorConfig);\n")),Object(o.b)("h2",{id:"routeconfigs"},"RouteConfigs"),Object(o.b)("p",null,"The route configs object is a mapping from route name to a route config, which tells the navigator what to present for that route, see ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/3.x/stack-navigator#routeconfigs"}),"example")," from stack navigator."),Object(o.b)("h2",{id:"bottomtabnavigatorconfig"},"BottomTabNavigatorConfig"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"initialRouteName")," - The routeName for the initial tab route when first loading."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"navigationOptions")," - Navigation options for the navigator itself, to configure a parent navigator"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"defaultNavigationOptions")," - Default navigation options to use for screens"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"resetOnBlur")," - Reset the state of any nested navigators when switching away from a screen. Defaults to ",Object(o.b)("inlineCode",{parentName:"li"},"false"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"order")," - Array of routeNames which defines the order of the tabs."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"paths")," - Provide a mapping of routeName to path config, which overrides the paths set in the routeConfigs."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"backBehavior")," - ",Object(o.b)("inlineCode",{parentName:"li"},"initialRoute")," to return to initial tab, ",Object(o.b)("inlineCode",{parentName:"li"},"order")," to return to previous tab, ",Object(o.b)("inlineCode",{parentName:"li"},"history")," to return to last visited tab, or ",Object(o.b)("inlineCode",{parentName:"li"},"none"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"lazy")," - Defaults to ",Object(o.b)("inlineCode",{parentName:"li"},"true"),". If ",Object(o.b)("inlineCode",{parentName:"li"},"false"),", all tabs are rendered immediately. When ",Object(o.b)("inlineCode",{parentName:"li"},"true"),", tabs are rendered only when they are made active for the first time. Note: tabs are ",Object(o.b)("strong",{parentName:"li"},"not")," re-rendered upon subsequent visits."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"tabBarComponent")," - Optional, override component to use as the tab bar."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"tabBarOptions")," - An object with the following properties:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"activeTintColor")," - Label and icon color of the active tab."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"activeBackgroundColor")," - Background color of the active tab."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"inactiveTintColor")," - Label and icon color of the inactive tab."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"inactiveBackgroundColor")," - Background color of the inactive tab."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"showLabel")," - Whether to show label for tab, default is true."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"showIcon")," - Whether to show icon for tab, default is true."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"style")," - Style object for the tab bar."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"labelStyle")," - Style object for the tab label."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"tabStyle")," - Style object for the tab."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"allowFontScaling")," - Whether label font should scale to respect Text Size accessibility settings, default is true."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"adaptive")," - Should the tab icons and labels alignment change based on screen size? Defaults to ",Object(o.b)("inlineCode",{parentName:"li"},"true")," for iOS 11. If ",Object(o.b)("inlineCode",{parentName:"li"},"false"),", tab icons and labels align vertically all the time. When ",Object(o.b)("inlineCode",{parentName:"li"},"true"),", tab icons and labels align horizontally on tablet."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"safeAreaInset")," - Override the ",Object(o.b)("inlineCode",{parentName:"li"},"forceInset")," prop for ",Object(o.b)("inlineCode",{parentName:"li"},"<SafeAreaView>"),". Defaults to ",Object(o.b)("inlineCode",{parentName:"li"},"{ bottom: 'always', top: 'never' }"),". Available keys are ",Object(o.b)("inlineCode",{parentName:"li"},"top | bottom | left | right")," provided with the values ",Object(o.b)("inlineCode",{parentName:"li"},"'always' | 'never'"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"keyboardHidesTabBar")," - Defaults to ",Object(o.b)("inlineCode",{parentName:"li"},"false"),". If ",Object(o.b)("inlineCode",{parentName:"li"},"true")," hide the tab bar when keyboard opens.")))),Object(o.b)("p",null,"Example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"tabBarOptions: {\n  activeTintColor: '#e91e63',\n  labelStyle: {\n    fontSize: 12,\n  },\n  style: {\n    backgroundColor: 'blue',\n  },\n}\n")),Object(o.b)("p",null,"If you want to customize the ",Object(o.b)("inlineCode",{parentName:"p"},"tabBarComponent"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';\n\nconst TabBarComponent = (props) => (<BottomTabBar {...props} />);\n\nconst TabScreens = createBottomTabNavigator(\n  {\n    tabBarComponent: props =>\n      <TabBarComponent\n        {...props}\n        style={{ borderTopColor: '#605F60' }}\n      />,\n  },\n);\n")),Object(o.b)("h2",{id:"navigationoptions-for-screens-inside-of-the-navigator"},Object(o.b)("inlineCode",{parentName:"h2"},"navigationOptions")," for screens inside of the navigator"),Object(o.b)("h4",{id:"title"},Object(o.b)("inlineCode",{parentName:"h4"},"title")),Object(o.b)("p",null,"Generic title that can be used as a fallback for ",Object(o.b)("inlineCode",{parentName:"p"},"headerTitle")," and ",Object(o.b)("inlineCode",{parentName:"p"},"tabBarLabel"),"."),Object(o.b)("h4",{id:"tabbarvisible"},Object(o.b)("inlineCode",{parentName:"h4"},"tabBarVisible")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"true")," or ",Object(o.b)("inlineCode",{parentName:"p"},"false")," to show or hide the tab bar, if not set then defaults to ",Object(o.b)("inlineCode",{parentName:"p"},"true"),"."),Object(o.b)("h4",{id:"tabbaricon"},Object(o.b)("inlineCode",{parentName:"h4"},"tabBarIcon")),Object(o.b)("p",null,"React Element or a function that given ",Object(o.b)("inlineCode",{parentName:"p"},"{ focused: boolean, horizontal: boolean, tintColor: string }")," returns a React.Node, to display in the tab bar. ",Object(o.b)("inlineCode",{parentName:"p"},"horizontal")," is ",Object(o.b)("inlineCode",{parentName:"p"},"true")," when the device is in landscape and ",Object(o.b)("inlineCode",{parentName:"p"},"false")," when portrait. The icon is re-rendered whenever the device orientation changes."),Object(o.b)("h4",{id:"tabbarlabel"},Object(o.b)("inlineCode",{parentName:"h4"},"tabBarLabel")),Object(o.b)("p",null,"Title string of a tab displayed in the tab bar or React Element or a function that given ",Object(o.b)("inlineCode",{parentName:"p"},"{ focused: boolean, tintColor: string }")," returns a React.Node, to display in tab bar. When undefined, scene ",Object(o.b)("inlineCode",{parentName:"p"},"title")," is used. To hide, see ",Object(o.b)("inlineCode",{parentName:"p"},"tabBarOptions.showLabel")," in the previous section."),Object(o.b)("h4",{id:"tabbarbuttoncomponent"},Object(o.b)("inlineCode",{parentName:"h4"},"tabBarButtonComponent")),Object(o.b)("p",null,"React Component that wraps the icon and label and implements ",Object(o.b)("inlineCode",{parentName:"p"},"onPress"),". The default is a wrapper around ",Object(o.b)("inlineCode",{parentName:"p"},"TouchableWithoutFeedback")," that makes it behave the same as other touchables. ",Object(o.b)("inlineCode",{parentName:"p"},"tabBarButtonComponent: TouchableOpacity")," would use ",Object(o.b)("inlineCode",{parentName:"p"},"TouchableOpacity")," instead."),Object(o.b)("h4",{id:"tabbaraccessibilitylabel"},Object(o.b)("inlineCode",{parentName:"h4"},"tabBarAccessibilityLabel")),Object(o.b)("p",null,"Accessibility label for the tab button. This is read by the screen reader when the user taps the tab. It's recommended to set this if you don't have a label for the tab."),Object(o.b)("h4",{id:"tabbartestid"},Object(o.b)("inlineCode",{parentName:"h4"},"tabBarTestID")),Object(o.b)("p",null,"ID to locate this tab button in tests."),Object(o.b)("h4",{id:"tabbaronpress"},Object(o.b)("inlineCode",{parentName:"h4"},"tabBarOnPress")),Object(o.b)("p",null,"Callback to handle press events; the argument is an object containing:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"navigation"),": navigation prop for the screen"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"defaultHandler"),": the default handler for tab press")),Object(o.b)("p",null,"Useful for adding a custom logic before the transition to the next scene (the\ntapped one) starts."),Object(o.b)("p",null,"Define this callback without ever invoking ",Object(o.b)("inlineCode",{parentName:"p"},"defaultHandler")," to prevent any navigation from occurring."),Object(o.b)("h4",{id:"tabbaronlongpress"},Object(o.b)("inlineCode",{parentName:"h4"},"tabBarOnLongPress")),Object(o.b)("p",null,"Callback to handle long press events; the argument is an object containing:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"navigation"),": navigation prop for the screen"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"defaultHandler"),": the default handler for tab press")))}s.isMDXComponent=!0},426:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),i=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=i.a.createContext({}),s=function(e){var t=i.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},p=function(e){var t=s(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,r=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(a),u=n,m=p["".concat(r,".").concat(u)]||p[u]||d[u]||o;return a?i.a.createElement(m,b(b({ref:t},c),{},{components:a})):i.a.createElement(m,b({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,r=new Array(o);r[0]=u;var b={};for(var l in t)hasOwnProperty.call(t,l)&&(b[l]=t[l]);b.originalType=e,b.mdxType="string"==typeof e?e:n,r[1]=b;for(var c=2;c<o;c++)r[c]=a[c];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);