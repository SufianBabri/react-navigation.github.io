(window.webpackJsonp=window.webpackJsonp||[]).push([[240],{300:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var a=n(1),o=n(6),r=(n(0),n(426)),i={id:"auth-flow",title:"Authentication flows",sidebar_label:"Authentication flows"},c={unversionedId:"auth-flow",id:"version-4.x/auth-flow",isDocsHomePage:!1,title:"Authentication flows",description:"Most apps require that a user authenticate in some way to have access to data associated with a user or other private content. Typically the flow will look like this:",source:"@site/versioned_docs/version-4.x/auth-flow.md",slug:"/auth-flow",permalink:"/docs/4.x/auth-flow",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-4.x/auth-flow.md",version:"4.x",sidebar_label:"Authentication flows",sidebar:"version-4.x-docs",previous:{title:"Drawer navigation",permalink:"/docs/4.x/drawer-based-navigation"},next:{title:"Supporting safe areas",permalink:"/docs/4.x/handling-iphonex"}},s=[{value:"Set up our navigators",id:"set-up-our-navigators",children:[]},{value:"Implement our authentication loading screen",id:"implement-our-authentication-loading-screen",children:[]},{value:"Fill in other components",id:"fill-in-other-components",children:[]}],l={rightToc:s};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Most apps require that a user authenticate in some way to have access to data associated with a user or other private content. Typically the flow will look like this:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The user opens the app."),Object(r.b)("li",{parentName:"ul"},"The app loads some authentication state from persistent storage (for example, ",Object(r.b)("inlineCode",{parentName:"li"},"AsyncStorage"),")."),Object(r.b)("li",{parentName:"ul"},"When the state has loaded, the user is presented with either authentication screens or the main app, depending on whether valid authentication state was loaded."),Object(r.b)("li",{parentName:"ul"},"When the user signs out, we clear the authentication state and send them back to authentication screens.")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},'Note: we say "authentication screens" because usually there is more than one. You may have a main screen with a username and password field, another for "forgot password", and another set for sign up.')),Object(r.b)("h2",{id:"set-up-our-navigators"},"Set up our navigators"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { createAppContainer, createSwitchNavigator } from 'react-navigation';\nimport { createStackNavigator } from 'react-navigation-stack';\n\n// Implementation of HomeScreen, OtherScreen, SignInScreen, AuthLoadingScreen\n// goes here.\n\nconst AppStack = createStackNavigator({ Home: HomeScreen, Other: OtherScreen });\nconst AuthStack = createStackNavigator({ SignIn: SignInScreen });\n\nexport default createAppContainer(\n  createSwitchNavigator(\n    {\n      AuthLoading: AuthLoadingScreen,\n      App: AppStack,\n      Auth: AuthStack,\n    },\n    {\n      initialRouteName: 'AuthLoading',\n    }\n  )\n);\n")),Object(r.b)("p",null,"You may not be familiar with ",Object(r.b)("inlineCode",{parentName:"p"},"SwitchNavigator")," yet. The purpose of ",Object(r.b)("inlineCode",{parentName:"p"},"SwitchNavigator")," is to only ever show one screen at a time. By default, it does not handle back actions and it resets routes to their default state when you switch away. This is the exact behavior that we want from the authentication flow: when users sign in, we want to throw away the state of the authentication flow and unmount all of the screens, and when we press the hardware back button we expect to not be able to go back to the authentication flow. We switch between routes in the ",Object(r.b)("inlineCode",{parentName:"p"},"SwitchNavigator")," by using the ",Object(r.b)("inlineCode",{parentName:"p"},"navigate")," action. You can read more about the ",Object(r.b)("inlineCode",{parentName:"p"},"SwitchNavigator")," in the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/4.x/switch-navigator"}),"API reference"),"."),Object(r.b)("p",null,"We set the ",Object(r.b)("inlineCode",{parentName:"p"},"initialRouteName")," to ",Object(r.b)("inlineCode",{parentName:"p"},"'AuthLoading'")," because we will fetch our authentication state from persistent storage inside of that screen component."),Object(r.b)("h2",{id:"implement-our-authentication-loading-screen"},"Implement our authentication loading screen"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import React from 'react';\nimport {\n  ActivityIndicator,\n  AsyncStorage,\n  StatusBar,\n  StyleSheet,\n  View,\n} from 'react-native';\n\nclass AuthLoadingScreen extends React.Component {\n  componentDidMount() {\n    this._bootstrapAsync();\n  }\n\n  // Fetch the token from storage then navigate to our appropriate place\n  _bootstrapAsync = async () => {\n    const userToken = await AsyncStorage.getItem('userToken');\n\n    // This will switch to the App screen or Auth screen and this loading\n    // screen will be unmounted and thrown away.\n    this.props.navigation.navigate(userToken ? 'App' : 'Auth');\n  };\n\n  // Render any loading content that you like here\n  render() {\n    return (\n      <View>\n        <ActivityIndicator />\n        <StatusBar barStyle=\"default\" />\n      </View>\n    );\n  }\n}\n")),Object(r.b)("h2",{id:"fill-in-other-components"},"Fill in other components"),Object(r.b)("p",null,"Our ",Object(r.b)("inlineCode",{parentName:"p"},"App")," and ",Object(r.b)("inlineCode",{parentName:"p"},"Auth")," routes are both stack navigators, but you could do whatever you like here. As mentioned above, you probably want your authentication route to be a stack for password reset, signup, etc. Similarly for your app, you probably have more than one screen. We won't talk about how to implement the text inputs and buttons for the authentication screen, that is outside of the scope of navigation. We'll just fill in some placeholder content."),Object(r.b)("samp",{id:"auth-flow"},"Auth Flow"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"class SignInScreen extends React.Component {\n  static navigationOptions = {\n    title: 'Please sign in',\n  };\n\n  render() {\n    return (\n      <View>\n        <Button title=\"Sign in!\" onPress={this._signInAsync} />\n      </View>\n    );\n  }\n\n  _signInAsync = async () => {\n    await AsyncStorage.setItem('userToken', 'abc');\n    this.props.navigation.navigate('App');\n  };\n}\n\nclass HomeScreen extends React.Component {\n  static navigationOptions = {\n    title: 'Welcome to the app!',\n  };\n\n  render() {\n    return (\n      <View>\n        <Button title=\"Show me more of the app\" onPress={this._showMoreApp} />\n        <Button title=\"Actually, sign me out :)\" onPress={this._signOutAsync} />\n      </View>\n    );\n  }\n\n  _showMoreApp = () => {\n    this.props.navigation.navigate('Other');\n  };\n\n  _signOutAsync = async () => {\n    await AsyncStorage.clear();\n    this.props.navigation.navigate('Auth');\n  };\n}\n\n// More code like OtherScreen omitted for brevity\n")),Object(r.b)("p",null,"That's about all there is to it. If you're interested in animating the switch between screens, you can read about ",Object(r.b)("inlineCode",{parentName:"p"},"createAnimatedSwitchNavigator")," in the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/4.x/animated-switch-navigator"}),"API reference"),"."))}u.isMDXComponent=!0},426:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),b=a,d=p["".concat(i,".").concat(b)]||p[b]||h[b]||r;return n?o.a.createElement(d,c(c({ref:t},l),{},{components:n})):o.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<r;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);