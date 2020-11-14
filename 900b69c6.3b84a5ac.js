(window.webpackJsonp=window.webpackJsonp||[]).push([[220],{280:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(1),o=n(6),r=(n(0),n(426)),i={id:"hello-react-navigation",title:"Hello React Navigation",sidebar_label:"Hello React Navigation"},c={unversionedId:"hello-react-navigation",id:"version-2.x/hello-react-navigation",isDocsHomePage:!1,title:"Hello React Navigation",description:"In a web browser, you can link to different pages using an anchor (``) tag. When the user clicks on a link, the URL is pushed to the browser history stack. When the user presses the back button, the browser pops the item from the top of the history stack, so the active page is now the previously visited page. React Native doesn't have a built-in idea of a global history stack like a web browser does -- this is where React Navigation enters the story.",source:"@site/versioned_docs/version-2.x/hello-react-navigation.md",slug:"/hello-react-navigation",permalink:"/docs/2.x/hello-react-navigation",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-2.x/hello-react-navigation.md",version:"2.x",sidebar_label:"Hello React Navigation",sidebar:"version-2.x-docs",previous:{title:"Getting started",permalink:"/docs/2.x/getting-started"},next:{title:"Supported React Native versions",permalink:"/docs/2.x/supported-react-native-versions"}},s=[{value:"Creating a stack navigator",id:"creating-a-stack-navigator",children:[]},{value:"Route configuration shorthand",id:"route-configuration-shorthand",children:[]},{value:"Adding a second route",id:"adding-a-second-route",children:[]},{value:"Summary",id:"summary",children:[]}],l={rightToc:s};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"In a web browser, you can link to different pages using an anchor (",Object(r.b)("inlineCode",{parentName:"p"},"<a>"),") tag. When the user clicks on a link, the URL is pushed to the browser history stack. When the user presses the back button, the browser pops the item from the top of the history stack, so the active page is now the previously visited page. React Native doesn't have a built-in idea of a global history stack like a web browser does -- this is where React Navigation enters the story."),Object(r.b)("p",null,"React Navigation's stack navigator provides a way for your app to transition between screens and manage navigation history. If your app uses only one stack navigator then it is conceptually similar to how a web browser handles navigation state - your app pushes and pops items from the navigation stack as users interact with it, and this results in the user seeing different screens. A key difference between how this works in a web browser and in React Navigation is that React Navigation's stack navigator provides the gestures and animations that you would expect on Android and iOS when navigating between routes in the stack."),Object(r.b)("p",null,"All we need to get started using React Navigation is a function called ",Object(r.b)("inlineCode",{parentName:"p"},"createStackNavigator"),"."),Object(r.b)("h2",{id:"creating-a-stack-navigator"},"Creating a stack navigator"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"createStackNavigator")," is a function that returns a React component. It takes ",Object(r.b)("em",{parentName:"p"},"a route configuration object")," and, optionally, ",Object(r.b)("em",{parentName:"p"},"an options object")," (we omit this below, for now). Because the ",Object(r.b)("inlineCode",{parentName:"p"},"createStackNavigator")," function returns a React component, we can export it directly from ",Object(r.b)("inlineCode",{parentName:"p"},"App.js")," to be used as our App's root component."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"// In App.js in a new project\n\nimport React from 'react';\nimport { View, Text } from 'react-native';\nimport { createStackNavigator } from 'react-navigation';\n\nclass HomeScreen extends React.Component {\n  render() {\n    return (\n      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n        <Text>Home Screen</Text>\n      </View>\n    );\n  }\n}\n\nexport default createStackNavigator({\n  Home: {\n    screen: HomeScreen\n  },\n});\n")),Object(r.b)("a",{href:"https://snack.expo.io/@react-navigation/hello-world-v2",target:"blank",class:"run-code-button"},"\u2192 Run this code"),Object(r.b)("p",null,"If you run this code, you will see a screen with an empty navigation bar and a grey content area containing your ",Object(r.b)("inlineCode",{parentName:"p"},"HomeScreen")," component. The styles you see for the navigation bar and the content area are the default configuration for a stack navigator, we'll learn how to configure those later."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"The casing of the route name doesn't matter -- you can use lowercase ",Object(r.b)("inlineCode",{parentName:"p"},"home")," or capitalized ",Object(r.b)("inlineCode",{parentName:"p"},"Home"),", it's up to you. We prefer capitalizing our route names.")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"The only required configuration for a route is the ",Object(r.b)("inlineCode",{parentName:"p"},"screen")," component. You can read more about the other options available in the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/2.x/stack-navigator"}),"StackNavigator reference"),".")),Object(r.b)("p",null,"In React Native, the component exported from ",Object(r.b)("inlineCode",{parentName:"p"},"App.js")," is the entry point (or root component) for your app -- it is the component from which every other component descends. It's often useful to have more control over the component at the root of your app than you would get from exporting the result of ",Object(r.b)("inlineCode",{parentName:"p"},"createStackNavigator"),", so let's export a component that just renders our ",Object(r.b)("inlineCode",{parentName:"p"},"RootStack")," stack navigator."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const RootStack = createStackNavigator({\n  Home: {\n    screen: HomeScreen\n  },\n});\n\nexport default class App extends React.Component {\n  render() {\n    return <RootStack />;\n  }\n}\n")),Object(r.b)("h2",{id:"route-configuration-shorthand"},"Route configuration shorthand"),Object(r.b)("p",null,"Given that the only route configuration we have for ",Object(r.b)("inlineCode",{parentName:"p"},"Home")," is the screen component, we don't need to use the ",Object(r.b)("inlineCode",{parentName:"p"},"{ screen: HomeScreen }")," configuration format, we can use the screen component directly."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const RootStack = createStackNavigator({\n  Home: HomeScreen\n});\n")),Object(r.b)("h2",{id:"adding-a-second-route"},"Adding a second route"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"<RootStack />")," component doesn't accept any props -- all configuration is specified in the ",Object(r.b)("inlineCode",{parentName:"p"},"options")," parameter to the ",Object(r.b)("inlineCode",{parentName:"p"},"createStackNavigator")," function. We left the ",Object(r.b)("inlineCode",{parentName:"p"},"options")," blank, so it just uses the default configuration. To see an example of using the ",Object(r.b)("inlineCode",{parentName:"p"},"options")," object, we will add a second screen to the stack navigator."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// Other code for HomeScreen here...\n\nclass DetailsScreen extends React.Component {\n  render() {\n    return (\n      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n        <Text>Details Screen</Text>\n      </View>\n    );\n  }\n}\n\nconst RootStack = createStackNavigator(\n  {\n    Home: HomeScreen,\n    Details: DetailsScreen,\n  },\n  {\n    initialRouteName: 'Home',\n  }\n);\n\n// Other code for App component here...\n")),Object(r.b)("p",null,"Now our stack has two ",Object(r.b)("em",{parentName:"p"},"routes"),", a ",Object(r.b)("inlineCode",{parentName:"p"},"Home")," route and a ",Object(r.b)("inlineCode",{parentName:"p"},"Details")," route. The ",Object(r.b)("inlineCode",{parentName:"p"},"Home")," route corresponds to the ",Object(r.b)("inlineCode",{parentName:"p"},"HomeScreen")," component, and the ",Object(r.b)("inlineCode",{parentName:"p"},"Details")," route corresponds to the ",Object(r.b)("inlineCode",{parentName:"p"},"DetailsScreen")," component. The initial route for the stack is the ",Object(r.b)("inlineCode",{parentName:"p"},"Home"),' route. The natural question at this point is: "how do I go from the Home route to the Details route?". That is covered in the next section.'),Object(r.b)("h2",{id:"summary"},"Summary"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"React Native doesn't have a built-in API for navigation like a web browser does. React Navigation provides this for you, along with the iOS and Android gestures and animations to transition between screens."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"createStackNavigator")," is a function that takes a route configuration object and an options object and returns a React component."),Object(r.b)("li",{parentName:"ul"},"The keys in the route configuration object are the route names and the values are the configuration for that route. The only required property on the configuration is the ",Object(r.b)("inlineCode",{parentName:"li"},"screen")," (the component to use for the route)."),Object(r.b)("li",{parentName:"ul"},"To specify what the initial route in a stack is, provide an ",Object(r.b)("inlineCode",{parentName:"li"},"initialRouteName")," on the stack options object."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://snack.expo.io/@react-navigation/hello-react-navigation-v2"}),"Full source of what we have built so far"),".")))}p.isMDXComponent=!0},426:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,h=u["".concat(i,".").concat(d)]||u[d]||b[d]||r;return n?o.a.createElement(h,c(c({ref:t},l),{},{components:n})):o.a.createElement(h,c({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<r;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);