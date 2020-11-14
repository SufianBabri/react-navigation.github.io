(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{139:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return h}));var o=n(1),a=n(6),r=(n(0),n(426)),i={id:"themes",title:"Themes",sidebar_label:"Themes"},c={unversionedId:"themes",id:"version-3.x/themes",isDocsHomePage:!1,title:"Themes",description:"Providing a light theme and a dark theme is a nice way to let your users adjust the appearance of your app depending on the time of day or their preference. It also signals that you are a hip app developer that keeps up with the trends of the day.",source:"@site/versioned_docs/version-3.x/themes.md",slug:"/themes",permalink:"/docs/3.x/themes",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-3.x/themes.md",version:"3.x",sidebar_label:"Themes",sidebar:"version-3.x-docs",previous:{title:"Screen tracking for analytics",permalink:"/docs/3.x/screen-tracking"},next:{title:"State persistence",permalink:"/docs/3.x/state-persistence"}},s=[{value:"Using the operating system preferences",id:"using-the-operating-system-preferences",children:[]},{value:"Using the currently selected theme",id:"using-the-currently-selected-theme",children:[{value:"Using default theme colors",id:"using-default-theme-colors",children:[]},{value:"Default themed components",id:"default-themed-components",children:[]}]},{value:"Built-in themes inside <code>navigationOptions</code>",id:"built-in-themes-inside-navigationoptions",children:[]},{value:"Built-in themes inside static navigator configuration",id:"built-in-themes-inside-static-navigator-configuration",children:[]},{value:"Themes inside <code>navigationOptions</code>",id:"themes-inside-navigationoptions",children:[]},{value:"Theming tabs and other similar navigators",id:"theming-tabs-and-other-similar-navigators",children:[]}],l={rightToc:s};function h(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Providing a light theme and a dark theme is a nice way to let your users adjust the appearance of your app depending on the time of day or their preference. It also signals that you are a hip app developer that keeps up with the trends of the day."),Object(r.b)("h1",{id:"built-in-themes"},"Built-in themes"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Note: support for built-in themes requires react-navigation@>=3.12.0!")),Object(r.b)("p",null,"As operating systems add built-in support for light and dark modes, supporting dark mode is less about keeping hip to trends and more about conforming to the average user expectations for how apps should work. In order to provide support for light and dark mode in a way that is reasonably consistent with the OS defaults, these themes are built in to React Navigation. You can pass in a ",Object(r.b)("inlineCode",{parentName:"p"},"theme")," prop to your app container component in order to switch between light and dark mode, and the value of that ",Object(r.b)("inlineCode",{parentName:"p"},"theme")," prop can come from whichever API you use to detect user preferences for dark mode, or in the case of older operating system versions, from a custom configuration within your app UI."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),'let Navigation = createAppContainer(RootStack);\n\n// `theme` can be `light` or `dark`. It defaults to `light` if not specified.\nexport default () => <Navigation theme="light">;\n')),Object(r.b)("p",null,"This will take care of styling the stack navigator, bottom tab navigator, and drawer navigator for you. React Navigation also provides several tools to help you make your customizations of those navigators and the screens within the navigators support both themes too."),Object(r.b)("h2",{id:"using-the-operating-system-preferences"},"Using the operating system preferences"),Object(r.b)("p",null,"At the time of writing, ",Object(r.b)("inlineCode",{parentName:"p"},"react-native")," does not currently support detecting the operating system color scheme preferences in the core (",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/facebook/react-native/pull/26172"}),"you can follow this pull request"),"). Until it is part of core and you have updated to the version that includes it, you can use ",Object(r.b)("inlineCode",{parentName:"p"},"react-native-appearance"),"."),Object(r.b)("p",null,"You will need iOS 13 to actually be able to toggle dark mode through system settings."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Note: if you use the Expo managed workflow, this requires SDK 35+")),Object(r.b)("p",null,"First, you need to install ",Object(r.b)("inlineCode",{parentName:"p"},"react-native-appearance"),". ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/expo/react-native-appearance"}),"Follow the instructions in the README"),"."),Object(r.b)("p",null,"Once you've installed it, set your root component up as follows:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"import { AppearanceProvider, useColorScheme } from 'react-native-appearance';\n\n// Other navigation code goes here...\nlet Navigation = createAppContainer(RootStack);\n\nexport default () => {\n  let theme = useColorScheme();\n\n  return (\n    <AppearanceProvider>\n      <Navigation theme={theme}>\n    </AppearanceProvider>\n  )\n}\n")),Object(r.b)("p",null,"If the version of React Native you are using doesn't support hooks yet, you can use the ",Object(r.b)("inlineCode",{parentName:"p"},"Appearance.addChangeListener(cb)")," and ",Object(r.b)("inlineCode",{parentName:"p"},"Appearance.getColorScheme()")," functions as described in the ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/expo/react-native-appearance#usage"}),"usage section of the README"),"."),Object(r.b)("p",null,"See a full working example of theme integration in ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/react-navigation/theme-example"}),"react-navigation/theme-example"),"."),Object(r.b)("h2",{id:"using-the-currently-selected-theme"},"Using the currently selected theme"),Object(r.b)("p",null,"Two tools are available to gain access to the theme in any component that descends from the app navigation container: ",Object(r.b)("inlineCode",{parentName:"p"},"useTheme")," and ",Object(r.b)("inlineCode",{parentName:"p"},"ThemeConext"),"."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"useTheme")," is a simple custom hook that returns the theme."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"import * as React from 'react';\nimport { TouchableOpacity, Text } from 'react-native';\nimport { useTheme } from 'react-navigation';\n\n// Black background and white text in light theme, inverted on dark theme\nfunction MyButton() {\n  let theme = useTheme();\n\n  return (\n    <TouchableOpacity\n      style={{ backgroundColor: theme === 'light' ? '#000' : '#fff' }}>\n      <Text style={{ color: theme === 'light' ? '#fff' : '#000' }}>\n        Button!\n      </Text>\n    </TouchableOpacity>\n  );\n}\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"ThemeContext")," lets you access the theme using the ",Object(r.b)("inlineCode",{parentName:"p"},"ThemeContext.Consumer")," pattern or with ",Object(r.b)("inlineCode",{parentName:"p"},"static contextType"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"import * as React from 'react';\nimport { TouchableOpacity, Text } from 'react-native';\nimport { ThemeContext } from 'react-navigation';\n\nfunction MyButton() {\n  return (\n    <ThemeContext.Consumer>\n      {theme => (\n        <TouchableOpacity\n          style={{ backgroundColor: theme === 'light' ? '#000' : '#fff' }}>\n          <Text style={{ color: theme === 'light' ? '#fff' : '#000' }}>Button!</Text>\n        </TouchableOpacity>\n      )}\n    <ThemeContext.Consumer>\n  );\n}\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"import * as React from 'react';\nimport { TouchableOpacity, Text } from 'react-native';\nimport { ThemeContext } from 'react-navigation';\n\nclass MyButton extends React.Component {\n  static contextType = ThemeContext;\n\n  render() {\n    return (\n      <TouchableOpacity\n        style={{ backgroundColor: theme === 'light' ? '#000' : '#fff' }}>\n        <Text style={{ color: theme === 'light' ? '#fff' : '#000' }}>\n          Button!\n        </Text>\n      </TouchableOpacity>\n    );\n  }\n}\n")),Object(r.b)("h3",{id:"using-default-theme-colors"},"Using default theme colors"),Object(r.b)("p",null,"There is a small but perhaps useful list of colors that are used to style navigators according to the theme. This list of colors is exported under ",Object(r.b)("inlineCode",{parentName:"p"},"ThemeColors"),". See the TypeScript definition for a full list of colors."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"import * as React from 'react';\nimport { TouchableOpacity, Text } from 'react-native';\nimport { ThemeColors, useTheme } from 'react-navigation';\n\nfunction MyButton() {\n  let theme = useTheme();\n  let colors = ThemeColors[theme];\n\n  return (\n    <TouchableOpacity style={{ backgroundColor: colors.bodyContent }}>\n      <Text style={{ color: colors.label }}>Button!</Text>\n    </TouchableOpacity>\n  );\n}\n")),Object(r.b)("h3",{id:"default-themed-components"},"Default themed components"),Object(r.b)("p",null,"Several components have defaults that are biased to a specific theme. ",Object(r.b)("inlineCode",{parentName:"p"},"Text"),", for example, defaults to black. ",Object(r.b)("inlineCode",{parentName:"p"},"StatusBar")," defaults to dark text. React Navigation provides themed alternatives to these."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"import * as React from 'react';\nimport { TouchableOpacity, Text } from 'react-native';\nimport { Themed } from 'react-navigation';\n\nfunction MyButton() {\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <TouchableOpacity style={{ backgroundColor: colors.bodyContent }}>\n        <Themed.Text>Button!</Themed.Text>\n      </TouchableOpacity>\n      <Themed.StatusBar />\n    </View>\n  );\n}\n")),Object(r.b)("h2",{id:"built-in-themes-inside-navigationoptions"},"Built-in themes inside ",Object(r.b)("inlineCode",{parentName:"h2"},"navigationOptions")),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"import {\n  ThemeColors,\n  createAppContainer,\n  createStackNavigator,\n} from 'react-navigation';\n\nclass HomeScreen extends React.Component {\n  static navigationOptions = ({ theme }) => {\n    return {\n      title: 'Home',\n      headerLeft: (\n        <Button\n          color={theme === 'dark' ? 'white' : 'blue'}\n          title=\"Press me\"\n          onPress={() => alert('success!')}\n        />\n      ),\n    };\n  };\n\n  render() {\n    // etc...\n  }\n}\n")),Object(r.b)("h2",{id:"built-in-themes-inside-static-navigator-configuration"},"Built-in themes inside static navigator configuration"),Object(r.b)("p",null,"Colors that are specified within the static configuration options for a navigator can now be specified as objects with ",Object(r.b)("inlineCode",{parentName:"p"},"light")," and ",Object(r.b)("inlineCode",{parentName:"p"},"dark")," keys:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"let Tabs = createBottomTabNavigator(\n  {\n    /* routes */\n  },\n  {\n    tabBarOptions: {\n      activeTintColor: {\n        light: '#000',\n        dark: '#fff',\n      },\n      inactiveTintColor: {\n        light: 'rgba(0,0,0,0.2)',\n        dark: 'rgba(255,255,255,0.2)',\n      },\n    },\n  }\n);\n")),Object(r.b)("p",null,"The old format still works too, but colors specified in the following way will not adapt to themes:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"let Tabs = createBottomTabNavigator(\n  {\n    /* routes */\n  },\n  {\n    tabBarOptions: {\n      activeTintColor: '#000',\n      inactiveTintColor: 'rgba(0,0,0,0.2)',\n    },\n  }\n);\n")),Object(r.b)("h1",{id:"custom-themes-using-react-context"},"Custom themes using React context"),Object(r.b)("p",null,"You may want more control than what you're given with just the built-in themes. In this case, you can build your own themes entirely from scratch."),Object(r.b)("p",null,"Building custom themes into an app with React Navigation is not too much different than a React app without it; the main differences are that you will need to use ",Object(r.b)("inlineCode",{parentName:"p"},"screenProps")," in order to update style properties controlled by ",Object(r.b)("inlineCode",{parentName:"p"},"navigationOptions"),", and when style properties are controlled in navigator configuration we'll need to take another approach. First we're going to recap how you would theme a React app without React Navigation, then we will dive deeper into these differences. Additionally, this guide assumes that you are already comfortable with React Navigation, in particular how to use and configure navigators."),Object(r.b)("p",null,'React\'s context API allows you to share state from an ancestor component to any of its descendants without explicitly passing the value through layers and layers of components ("prop drilling"). This is a useful tool in order to build themes because we can define the theme at the root of the app, and then access it from anywhere else and re-render every themed component whenever the theme changes. If you are not familiar with how to use context already, you might want to read the ',Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://reactjs.org/docs/context.html"}),"React documentation")," for it before continuing."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"import * as React from 'react';\nimport { Text, TouchableOpacity, View } from 'react-native';\n\nconst ThemeContext = React.createContext(null);\nconst ThemeConstants = {\n  light: {\n    backgroundColor: '#fff',\n    fontColor: '#000',\n  },\n  dark: {\n    backgroundColor: '#000',\n    fontColor: '#fff',\n  },\n};\n\nexport default class AppContainer extends React.Component {\n  state = {\n    theme: 'light',\n  };\n\n  toggleTheme = () => {\n    this.setState(({ theme }) => ({\n      theme: theme === 'light' ? 'dark' : 'light',\n    }));\n  };\n\n  render() {\n    return (\n      <ThemeContext.Provider\n        value={{ theme: this.state.theme, toggleTheme: this.toggleTheme }}>\n        <HomeScreen />\n      </ThemeContext.Provider>\n    );\n  }\n}\n\nclass HomeScreen extends React.Component {\n  render() {\n    return (\n      <ThemedView\n        style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n        <ThemeContext.Consumer>\n          {({ toggleTheme }) => (\n            <ThemedButton title=\"Toggle theme\" onPress={toggleTheme} />\n          )}\n        </ThemeContext.Consumer>\n      </ThemedView>\n    );\n  }\n}\n\nclass ThemedButton extends React.Component {\n  render() {\n    let { title, ...props } = this.props;\n    return (\n      <TouchableOpacity {...props}>\n        <ThemeContext.Consumer>\n          {({ theme }) => (\n            <Text style={{ color: ThemeConstants[theme].fontColor }}>\n              {title}\n            </Text>\n          )}\n        </ThemeContext.Consumer>\n      </TouchableOpacity>\n    );\n  }\n}\n\nclass ThemedView extends React.Component {\n  render() {\n    return (\n      <ThemeContext.Consumer>\n        {({ theme }) => (\n          <View\n            {...this.props}\n            style={[\n              this.props.style,\n              { backgroundColor: ThemeConstants[theme].backgroundColor },\n            ]}\n          />\n        )}\n      </ThemeContext.Consumer>\n    );\n  }\n}\n")),Object(r.b)("p",null,"Okay, that's a lot of code. There isn't much going on here aside from passing the theme around through context and then pulling it out of context when we need it inside of themed component. Themed components like ",Object(r.b)("inlineCode",{parentName:"p"},"ThemedView")," and ",Object(r.b)("inlineCode",{parentName:"p"},"ThemedButton")," are useful to help you avoid constantly repeating theme context related boilerplate."),Object(r.b)("h2",{id:"themes-inside-navigationoptions"},"Themes inside ",Object(r.b)("inlineCode",{parentName:"h2"},"navigationOptions")),Object(r.b)("p",null,"A regrettable limitation of the current implementation of ",Object(r.b)("inlineCode",{parentName:"p"},"navigationOptions")," is that we are unable to access React context for use in properties such as ",Object(r.b)("inlineCode",{parentName:"p"},"headerStyle")," and ",Object(r.b)("inlineCode",{parentName:"p"},"headerTintColor"),". We can and should use them in properties that access React components, for example in ",Object(r.b)("inlineCode",{parentName:"p"},"headerRight")," we could provide a component like ",Object(r.b)("inlineCode",{parentName:"p"},"ThemedHeaderButton"),". To apply the theme to other properties we need to use ",Object(r.b)("inlineCode",{parentName:"p"},"screenProps"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"import { createAppContainer, createStackNavigator } from 'react-navigation';\n\nclass HomeScreen extends React.Component {\n  static navigationOptions = ({ screenProps }) => {\n    let currentTheme = ThemeConstants[screenProps.theme];\n\n    return {\n      title: 'Home',\n      headerTintColor: currentTheme.fontColor,\n      headerStyle: { backgroundColor: currentTheme.backgroundColor },\n    };\n  };\n\n  render() {\n    return (\n      <ThemedView\n        style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n        <ThemeContext.Consumer>\n          {({ toggleTheme }) => (\n            <ThemedButton title=\"Toggle theme\" onPress={toggleTheme} />\n          )}\n        </ThemeContext.Consumer>\n      </ThemedView>\n    );\n  }\n}\n\nconst Stack = createStackNavigator({ Home: HomeScreen });\nconst Navigation = createAppContainer(Stack);\n\nexport default class AppContainer extends React.Component {\n  state = {\n    theme: 'light',\n  };\n\n  toggleTheme = () => {\n    this.setState(({ theme }) => ({\n      theme: theme === 'light' ? 'dark' : 'light',\n    }));\n  };\n\n  render() {\n    return (\n      <ThemeContext.Provider\n        value={{ theme: this.state.theme, toggleTheme: this.toggleTheme }}>\n        <Navigation screenProps={{ theme: this.state.theme }} />\n      </ThemeContext.Provider>\n    );\n  }\n}\n")),Object(r.b)("p",null,"Success! The stack header style now updates when the theme changes."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Note: in the future we would like to deprecate ",Object(r.b)("inlineCode",{parentName:"p"},"screenProps")," and move entirely over to React context. For now, ",Object(r.b)("inlineCode",{parentName:"p"},"screenProps")," is the best way to do that, and when this changes it will be easy to migrate.")),Object(r.b)("h2",{id:"theming-tabs-and-other-similar-navigators"},"Theming tabs and other similar navigators"),Object(r.b)("p",null,"Some navigators may have their styles configured in the navigator configuration object when they are initialized. While it may be best to update these navigators so that they can be configured more easily through ",Object(r.b)("inlineCode",{parentName:"p"},"navigationOptions"),", as long as they allow us to override the UI that they render with our own component and give us access to the default component, we can work with them just fine. We'll look at how to theme a bottom tab navigator."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"import {\n  createAppContainer,\n  createStackNavigator,\n  createBottomTabNavigator,\n  BottomTabBar,\n} from 'react-navigation';\n\nconst ThemeConstants = {\n  light: {\n    backgroundColor: '#fff',\n    fontColor: '#000',\n    activeTintColor: 'blue',\n    inactiveTintColor: '#ccc',\n  },\n  dark: {\n    backgroundColor: '#000',\n    fontColor: '#fff',\n    activeTintColor: '#fff',\n    inactiveTintColor: '#888',\n  },\n};\n\n// Notice how we override the `activeTintColor`, `inactiveTintColor` and\n// `backgroundColor` of the tab bar with our theme styles.\nclass ThemedBottomTabBar extends React.Component {\n  render() {\n    return (\n      <ThemeContext.Consumer>\n        {({ theme }) => (\n          <BottomTabBar\n            {...this.props}\n            activeTintColor={ThemeConstants[theme].activeTintColor}\n            inactiveTintColor={ThemeConstants[theme].inactiveTintColor}\n            style={{\n              backgroundColor: ThemeConstants[theme].backgroundColor,\n            }}\n          />\n        )}\n      </ThemeContext.Consumer>\n    );\n  }\n}\n\nconst Stack = createStackNavigator({ Home: HomeScreen });\nconst Tabs = createBottomTabNavigator(\n  { Stack },\n  { tabBarComponent: ThemedBottomTabBar }\n);\nconst Navigation = createAppContainer(Tabs);\n\n// And the rest of the code goes here...\n")),Object(r.b)("p",null,"You will likely want to go a bit further than we detailed in this guide, such as change the status bar color depending on the theme and customize the border color for the header and tab bar as well. You can see all of the above code plus some more changes to make it more complete in ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://snack.expo.io/@react-navigation/themes-example"}),"this Snack"),"."),Object(r.b)("p",null,"I never said it was easy, but this about covers what you need to know to theme an app that uses React Navigation. Good luck, remember me you're a billionaire."))}h.isMDXComponent=!0},426:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),h=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=h(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=h(n),u=o,d=p["".concat(i,".").concat(u)]||p[u]||m[u]||r;return n?a.a.createElement(d,c(c({ref:t},l),{},{components:n})):a.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<r;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);