(window.webpackJsonp=window.webpackJsonp||[]).push([[215],{275:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return p}));var a=n(1),i=n(6),r=(n(0),n(426)),o=n(430),l=n(431),c={id:"stack-navigator-1.0",title:"createStackNavigator (1.x)",sidebar_label:"createStackNavigator (1.x)"},s={unversionedId:"stack-navigator-1.0",id:"version-4.x/stack-navigator-1.0",isDocsHomePage:!1,title:"createStackNavigator (1.x)",description:"Provides a way for your app to transition between screens where each new screen is placed on top of a stack.",source:"@site/versioned_docs/version-4.x/stack-navigator-1.0.md",slug:"/stack-navigator-1.0",permalink:"/docs/4.x/stack-navigator-1.0",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-4.x/stack-navigator-1.0.md",version:"4.x",sidebar_label:"createStackNavigator (1.x)",sidebar:"version-4.x-docs",previous:{title:"createStackNavigator",permalink:"/docs/4.x/stack-navigator"},next:{title:"createSwitchNavigator",permalink:"/docs/4.x/switch-navigator"}},b=[{value:"API",id:"api",children:[{value:"RouteConfigs",id:"routeconfigs",children:[]},{value:"StackNavigatorConfig",id:"stacknavigatorconfig",children:[]},{value:"<code>navigationOptions</code> for screens inside of the navigator",id:"navigationoptions-for-screens-inside-of-the-navigator",children:[]},{value:"Examples",id:"examples",children:[]}]},{value:"Peer dependencies",id:"peer-dependencies",children:[]}],d={rightToc:b};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Provides a way for your app to transition between screens where each new screen is placed on top of a stack."),Object(r.b)("p",null,"By default the stack navigator is configured to have the familiar iOS and Android look & feel: new screens slide in from the right on iOS, fade in from the bottom on Android. On iOS the stack navigator can also be configured to a modal style where screens slide in from the bottom."),Object(r.b)("p",null,"To use this navigator, ensure that you have ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/4.x/getting-started"}),"react-navigation and its dependencies installed"),", then install ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/react-navigation/stack/tree/1.0"}),Object(r.b)("inlineCode",{parentName:"a"},"react-navigation-stack")),"."),Object(r.b)(o.a,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},Object(r.b)(l.a,{value:"npm",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npm install react-navigation-stack@^1.10.3\n"))),Object(r.b)(l.a,{value:"yarn",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"yarn add react-navigation-stack@^1.10.3\n")))),Object(r.b)("h2",{id:"api"},"API"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { createStackNavigator } from 'react-navigation-stack';\n\ncreateStackNavigator(RouteConfigs, StackNavigatorConfig);\n")),Object(r.b)("h3",{id:"routeconfigs"},"RouteConfigs"),Object(r.b)("p",null,"The route configs object is a mapping from route name to a route config, which tells the navigator what to present for that route."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"createStackNavigator({\n  // For each screen that you can navigate to, create a new entry like this:\n  Profile: {\n    // `ProfileScreen` is a React component that will be the main content of the screen.\n    screen: ProfileScreen,\n    // When `ProfileScreen` is loaded by the StackNavigator, it will be given a `navigation` prop.\n\n    // Optional: When deep linking or using react-navigation in a web app, this path is used:\n    path: 'people/:name',\n    // The action and route params are extracted from the path.\n\n    // Optional: Override the `navigationOptions` for the screen\n    navigationOptions: ({ navigation }) => ({\n      title: `${navigation.state.params.name}'s Profile'`,\n    }),\n  },\n\n  ...MyOtherRoutes,\n});\n")),Object(r.b)("h3",{id:"stacknavigatorconfig"},"StackNavigatorConfig"),Object(r.b)("p",null,"Options for the router:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"initialRouteName")," - Sets the default screen of the stack. Must match one of the keys in route configs."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"initialRouteParams")," - The params for the initial route"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"initialRouteKey")," - Optional identifier of the initial route")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"navigationOptions")," - Navigation options for the navigator itself, to configure a parent navigator"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"defaultNavigationOptions")," - Default navigation options to use for screens")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"paths")," - A mapping of overrides for the paths set in the route configs"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"disableKeyboardHandling")," - If true, the keyboard will NOT automatically dismiss when navigating to a new screen. Defaults to false. This is ignored in the web platform.")),Object(r.b)("p",null,"Visual options:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"mode")," - Defines the style for rendering and transitions:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"card")," - Use the standard iOS and Android screen transitions. This is the default."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"modal")," - Make the screens slide in from the bottom which is a common iOS pattern. Only works on iOS, has no effect on Android."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"headerMode")," - Specifies how the header should be rendered:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"float")," - Render a single header that stays at the top and animates as screens are changed. This is a common pattern on iOS."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"screen")," - Each screen has a header attached to it and the header fades in and out together with the screen. This is a common pattern on Android."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"none")," - No header will be rendered."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"headerBackTitleVisible")," - A reasonable default is supplied for whether the back button title should be visible or not, but if you want to override that you can use ",Object(r.b)("inlineCode",{parentName:"li"},"true")," or ",Object(r.b)("inlineCode",{parentName:"li"},"false")," in this option."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"headerTransitionPreset")," - Specifies how the header should transition from one screen to another when ",Object(r.b)("inlineCode",{parentName:"li"},"headerMode: float")," is enabled.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"fade-in-place")," - Header components cross-fade without moving, similar to the Twitter, Instagram, and Facebook app for iOS. This is the default value."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"uikit")," - An approximation of the default behavior for iOS."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"headerLayoutPreset")," - Specifies how to lay out the header components.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"left")," - Anchor the title to the left, near the back button or other left component. This is the default on Android. When used on iOS, the header back title is hidden. Content from the left component will overflow underneath the title, if you need to adjust this you can use ",Object(r.b)("inlineCode",{parentName:"li"},"headerLeftContainerStyle")," and ",Object(r.b)("inlineCode",{parentName:"li"},"headerTitleContainerStyle"),". Additionally, this alignment is incompatible with ",Object(r.b)("inlineCode",{parentName:"li"},"headerTransitionPreset: 'uikit'"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"center")," - Center the title, this is the default on iOS."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"cardStyle")," - Use this prop to override or extend the default style for an individual card in stack."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"cardShadowEnabled")," - Use this prop to have visible shadows during transitions. Defaults to ",Object(r.b)("inlineCode",{parentName:"li"},"true")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"cardOverlayEnabled")," - Use this prop to have visible stack card overlays during transitions. Defaults to ",Object(r.b)("inlineCode",{parentName:"li"},"false"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"transitionConfig")," - Function to return an object that is merged with the default screen transitions (take a look at TransitionConfig in ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/react-navigation/stack/blob/1.0/src/types.tsx#L232"}),"type definitions"),"). Provided function will be passed the following arguments:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"transitionProps")," - Transition props for the new screen."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"prevTransitionProps")," - Transitions props for the old screen."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"isModal")," - Boolean specifying if screen is modal."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"onTransitionStart")," - Function to be invoked when the card transition animation is about to start."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"onTransitionEnd")," - Function to be invoked once the card transition animation completes."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"transparentCard")," - ",Object(r.b)("em",{parentName:"li"},"Experimental")," - Prop to keep all cards in the stack visible and add a transparent background instead of a white one. This is useful to implement things like modal dialogs where the previous scene should still be visible underneath the current one.")),Object(r.b)("h3",{id:"navigationoptions-for-screens-inside-of-the-navigator"},Object(r.b)("inlineCode",{parentName:"h3"},"navigationOptions")," for screens inside of the navigator"),Object(r.b)("h4",{id:"title"},Object(r.b)("inlineCode",{parentName:"h4"},"title")),Object(r.b)("p",null,"String that can be used as a fallback for ",Object(r.b)("inlineCode",{parentName:"p"},"headerTitle"),". Additionally, will be used as a fallback for ",Object(r.b)("inlineCode",{parentName:"p"},"tabBarLabel")," (if nested in a TabNavigator) or ",Object(r.b)("inlineCode",{parentName:"p"},"drawerLabel")," (if nested in a DrawerNavigator)."),Object(r.b)("h4",{id:"header"},Object(r.b)("inlineCode",{parentName:"h4"},"header")),Object(r.b)("p",null,"React Element or a function that given ",Object(r.b)("inlineCode",{parentName:"p"},"HeaderProps")," returns a React Element, to display as a header."),Object(r.b)("h4",{id:"headershown"},Object(r.b)("inlineCode",{parentName:"h4"},"headerShown")),Object(r.b)("p",null,"Whether to show or hide the header for the screen. The header is shown by default unless ",Object(r.b)("inlineCode",{parentName:"p"},"headerMode")," was set to ",Object(r.b)("inlineCode",{parentName:"p"},"none"),". Setting this to ",Object(r.b)("inlineCode",{parentName:"p"},"false")," hides the header."),Object(r.b)("h4",{id:"headertitle"},Object(r.b)("inlineCode",{parentName:"h4"},"headerTitle")),Object(r.b)("p",null,"String, React Element or a function that returns a React Element to be used by the header. Defaults to scene ",Object(r.b)("inlineCode",{parentName:"p"},"title"),". When a function is used, it receives an object containing ",Object(r.b)("inlineCode",{parentName:"p"},"allowFontScaling"),", ",Object(r.b)("inlineCode",{parentName:"p"},"style")," and ",Object(r.b)("inlineCode",{parentName:"p"},"children")," properties. The ",Object(r.b)("inlineCode",{parentName:"p"},"children")," property contains the title string."),Object(r.b)("h4",{id:"headertitleallowfontscaling"},Object(r.b)("inlineCode",{parentName:"h4"},"headerTitleAllowFontScaling")),Object(r.b)("p",null,"Whether header title font should scale to respect Text Size accessibility settings. Defaults to true."),Object(r.b)("h4",{id:"headerbackallowfontscaling"},Object(r.b)("inlineCode",{parentName:"h4"},"headerBackAllowFontScaling")),Object(r.b)("p",null,"Whether back button title font should scale to respect Text Size accessibility settings. Defaults to false."),Object(r.b)("h4",{id:"headerbackimage"},Object(r.b)("inlineCode",{parentName:"h4"},"headerBackImage")),Object(r.b)("p",null,"Function which returns a React Element to display custom image in header's back button. When a function is used, it receives the ",Object(r.b)("inlineCode",{parentName:"p"},"tintColor")," in it's argument object. Defaults to Image component with back image source, which is the default back icon image for the platform (a chevron on iOS and an arrow on Android)."),Object(r.b)("h4",{id:"headerbacktitle"},Object(r.b)("inlineCode",{parentName:"h4"},"headerBackTitle")),Object(r.b)("p",null,"Title string used by the back button on iOS, or ",Object(r.b)("inlineCode",{parentName:"p"},"null")," to disable label. Defaults to the previous scene's ",Object(r.b)("inlineCode",{parentName:"p"},"headerTitle"),". ",Object(r.b)("inlineCode",{parentName:"p"},"headerBackTitle")," has to be defined in the origin screen, not in the destination screen. For instance, when you have a transition A to B and you want to disable the ",Object(r.b)("inlineCode",{parentName:"p"},"headerBackTitle")," on ",Object(r.b)("inlineCode",{parentName:"p"},"B"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"StackNavigator({\n  A: {\n    screen: AScreen,\n    navigationOptions: () => ({\n      title: `A`,\n      headerBackTitle: null,\n    }),\n  },\n  B: {\n    screen: BScreen,\n    navigationOptions: () => ({\n      title: `B`,\n    }),\n  },\n});\n")),Object(r.b)("h4",{id:"headertruncatedbacktitle"},Object(r.b)("inlineCode",{parentName:"h4"},"headerTruncatedBackTitle")),Object(r.b)("p",null,"Title string used by the back button when ",Object(r.b)("inlineCode",{parentName:"p"},"headerBackTitle")," doesn't fit on the screen. ",Object(r.b)("inlineCode",{parentName:"p"},'"Back"')," by default. ",Object(r.b)("inlineCode",{parentName:"p"},"headerTruncatedBackTitle")," has to be defined in the origin screen, not in the destination screen. For instance, when you have a transition A to B and you want to truncate the label on ",Object(r.b)("inlineCode",{parentName:"p"},"B"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"StackNavigator({\n  A: {\n    screen: AScreen,\n    navigationOptions: () => ({\n      title: `A`,\n      headerBackTitle: 'A much too long text for back button from B to A',\n      headerTruncatedBackTitle: `to A`,\n    }),\n  },\n  B: {\n    screen: BScreen,\n    navigationOptions: () => ({\n      title: `B`,\n    }),\n  },\n});\n")),Object(r.b)("h4",{id:"headerright"},Object(r.b)("inlineCode",{parentName:"h4"},"headerRight")),Object(r.b)("p",null,"React Element to display on the right side of the header."),Object(r.b)("h4",{id:"headerleft"},Object(r.b)("inlineCode",{parentName:"h4"},"headerLeft")),Object(r.b)("p",null,"Function which returns a React Element to display on the left side of the header. When a function is used, it receives a number of arguments when rendered (",Object(r.b)("inlineCode",{parentName:"p"},"onPress"),", ",Object(r.b)("inlineCode",{parentName:"p"},"title"),", ",Object(r.b)("inlineCode",{parentName:"p"},"titleStyle")," and more)."),Object(r.b)("h4",{id:"headerstyle"},Object(r.b)("inlineCode",{parentName:"h4"},"headerStyle")),Object(r.b)("p",null,"Style object for the header"),Object(r.b)("h4",{id:"headerforceinset"},Object(r.b)("inlineCode",{parentName:"h4"},"headerForceInset")),Object(r.b)("p",null,"Allows to pass ",Object(r.b)("inlineCode",{parentName:"p"},"forceInset")," object to internal SafeAreaView used in the header."),Object(r.b)("h4",{id:"headertitlestyle"},Object(r.b)("inlineCode",{parentName:"h4"},"headerTitleStyle")),Object(r.b)("p",null,"Style object for the title component"),Object(r.b)("h4",{id:"headerbacktitlestyle"},Object(r.b)("inlineCode",{parentName:"h4"},"headerBackTitleStyle")),Object(r.b)("p",null,"Style object for the back title"),Object(r.b)("h4",{id:"headerleftcontainerstyle"},Object(r.b)("inlineCode",{parentName:"h4"},"headerLeftContainerStyle")),Object(r.b)("p",null,"Customize the style for the container of the ",Object(r.b)("inlineCode",{parentName:"p"},"headerLeft")," component, for example to add padding."),Object(r.b)("h4",{id:"headerrightcontainerstyle"},Object(r.b)("inlineCode",{parentName:"h4"},"headerRightContainerStyle")),Object(r.b)("p",null,"Customize the style for the container of the ",Object(r.b)("inlineCode",{parentName:"p"},"headerRight")," component, for example to add padding."),Object(r.b)("h4",{id:"headertitlecontainerstyle"},Object(r.b)("inlineCode",{parentName:"h4"},"headerTitleContainerStyle")),Object(r.b)("p",null,"Customize the style for the container of the ",Object(r.b)("inlineCode",{parentName:"p"},"headerTitle")," component, for example to add padding."),Object(r.b)("p",null,"By default, ",Object(r.b)("inlineCode",{parentName:"p"},"headerTitleContainerStyle")," is with an absolute position style and offsets both ",Object(r.b)("inlineCode",{parentName:"p"},"left")," and ",Object(r.b)("inlineCode",{parentName:"p"},"right"),". This may lead to white space or overlap between ",Object(r.b)("inlineCode",{parentName:"p"},"headerLeft")," and ",Object(r.b)("inlineCode",{parentName:"p"},"headerTitle")," if a customized ",Object(r.b)("inlineCode",{parentName:"p"},"headerLeft")," is used. It can be solved by adjusting ",Object(r.b)("inlineCode",{parentName:"p"},"left")," and ",Object(r.b)("inlineCode",{parentName:"p"},"right")," style in ",Object(r.b)("inlineCode",{parentName:"p"},"headerTitleContainerStyle")," and ",Object(r.b)("inlineCode",{parentName:"p"},"marginHorizontal")," in ",Object(r.b)("inlineCode",{parentName:"p"},"headerTitleStyle"),"."),Object(r.b)("h4",{id:"headertintcolor"},Object(r.b)("inlineCode",{parentName:"h4"},"headerTintColor")),Object(r.b)("p",null,"Tint color for the header"),Object(r.b)("h4",{id:"headerpresscolorandroid"},Object(r.b)("inlineCode",{parentName:"h4"},"headerPressColorAndroid")),Object(r.b)("p",null,"Color for material ripple (Android >= 5.0 only)"),Object(r.b)("h4",{id:"headertransparent"},Object(r.b)("inlineCode",{parentName:"h4"},"headerTransparent")),Object(r.b)("p",null,"Defaults to ",Object(r.b)("inlineCode",{parentName:"p"},"false"),". If ",Object(r.b)("inlineCode",{parentName:"p"},"true"),", the header will not have a background unless you explicitly provide it with ",Object(r.b)("inlineCode",{parentName:"p"},"headerStyle")," or ",Object(r.b)("inlineCode",{parentName:"p"},"headerBackground"),"."),Object(r.b)("h4",{id:"headerbackground"},Object(r.b)("inlineCode",{parentName:"h4"},"headerBackground")),Object(r.b)("p",null,"Use this with ",Object(r.b)("inlineCode",{parentName:"p"},"headerTransparent")," to provide a Function which returns a React Element to render in the background of the header. You can use this with a blur view, for example, to create a translucent header."),Object(r.b)("h4",{id:"headerbackgroundtransitionpreset"},Object(r.b)("inlineCode",{parentName:"h4"},"headerBackgroundTransitionPreset")),Object(r.b)("p",null,"One of ",Object(r.b)("inlineCode",{parentName:"p"},"toggle")," | ",Object(r.b)("inlineCode",{parentName:"p"},"fade")," | ",Object(r.b)("inlineCode",{parentName:"p"},"translate"),"; lets you choose how to transition your custom ",Object(r.b)("inlineCode",{parentName:"p"},"headerBackground")," components between screens."),Object(r.b)("h4",{id:"gesturesenabled"},Object(r.b)("inlineCode",{parentName:"h4"},"gesturesEnabled")),Object(r.b)("p",null,"Whether you can use gestures to dismiss this screen. Defaults to true on iOS, false on Android."),Object(r.b)("h4",{id:"gestureresponsedistance"},Object(r.b)("inlineCode",{parentName:"h4"},"gestureResponseDistance")),Object(r.b)("p",null,"Object to override the distance of touch start from the edge of the screen to recognize gestures. It takes the following properties:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"horizontal")," - ",Object(r.b)("em",{parentName:"li"},"number")," - Distance for horizontal direction. Defaults to 25."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"vertical")," - ",Object(r.b)("em",{parentName:"li"},"number")," - Distance for vertical direction. Defaults to 135.")),Object(r.b)("h4",{id:"gesturedirection"},Object(r.b)("inlineCode",{parentName:"h4"},"gestureDirection")),Object(r.b)("p",null,"String to override the direction for dismiss gesture. ",Object(r.b)("inlineCode",{parentName:"p"},"default")," for normal behaviour or ",Object(r.b)("inlineCode",{parentName:"p"},"inverted")," for right-to-left swipes."),Object(r.b)("h4",{id:"params"},Object(r.b)("inlineCode",{parentName:"h4"},"params")),Object(r.b)("p",null,"You can provide default params inside route definitions:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const Store = createStackNavigator({\n  Playstation: { screen: ProductScreen, params: { product: 'Playstation' } },\n  Xbox: { screen: ProductScreen, params: { product: 'Xbox' } },\n});\n")),Object(r.b)("h3",{id:"examples"},"Examples"),Object(r.b)("p",null,"See the examples ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/react-navigation/react-navigation/blob/4.x/example/src/SimpleStack.tsx"}),"SimpleStack.tsx")," and ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/react-navigation/react-navigation/blob/4.x/example/src/ModalStack.tsx"}),"ModalStack.tsx")," which you can run locally as part of the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/react-navigation/react-navigation/tree/4.x/example"}),"NavigationPlayground")," app."),Object(r.b)("p",null,"You can view these examples directly on your phone by visiting ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://exp.host/@react-navigation/NavigationPlayground"}),"our expo demo"),"."),Object(r.b)("h4",{id:"modal-stacknavigator-with-custom-screen-transitions"},"Modal StackNavigator with Custom Screen Transitions"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const ModalNavigator = createStackNavigator(\n  {\n    Main: { screen: Main },\n    Login: { screen: Login },\n  },\n  {\n    headerMode: 'none',\n    mode: 'modal',\n    defaultNavigationOptions: {\n      gesturesEnabled: false,\n    },\n    transitionConfig: () => ({\n      transitionSpec: {\n        duration: 300,\n        easing: Easing.out(Easing.poly(4)),\n        timing: Animated.timing,\n      },\n      screenInterpolator: sceneProps => {\n        const { layout, position, scene } = sceneProps;\n        const { index } = scene;\n\n        const height = layout.initHeight;\n        const translateY = position.interpolate({\n          inputRange: [index - 1, index, index + 1],\n          outputRange: [height, 0, 0],\n        });\n\n        const opacity = position.interpolate({\n          inputRange: [index - 1, index - 0.99, index],\n          outputRange: [0, 1, 1],\n        });\n\n        return { opacity, transform: [{ translateY }] };\n      },\n    }),\n  }\n);\n")),Object(r.b)("p",null,"Header transitions can also be configured using ",Object(r.b)("inlineCode",{parentName:"p"},"headerLeftInterpolator"),", ",Object(r.b)("inlineCode",{parentName:"p"},"headerTitleInterpolator")," and ",Object(r.b)("inlineCode",{parentName:"p"},"headerRightInterpolator")," fields under ",Object(r.b)("inlineCode",{parentName:"p"},"transitionConfig"),"."),Object(r.b)("h4",{id:"specifying-the-transition-mode-for-a-stacks-screens-explicitly"},"Specifying the transition mode for a stack's screens explicitly"),Object(r.b)("p",null,"We can't set the ",Object(r.b)("inlineCode",{parentName:"p"},"StackNavigatorConfig"),"'s ",Object(r.b)("inlineCode",{parentName:"p"},"mode")," dynamically. Instead we are going to use a custom ",Object(r.b)("inlineCode",{parentName:"p"},"transitionConfig")," to render the specific transition we want - modal or card - on a screen by screen basis."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import {\n  createStackNavigator,\n  StackViewTransitionConfigs,\n} from 'react-navigation';\n\n/* The screens you add to IOS_MODAL_ROUTES will have the modal transition.  */\nconst IOS_MODAL_ROUTES = ['OptionsScreen'];\n\nlet dynamicModalTransition = (transitionProps, prevTransitionProps) => {\n  const isModal = IOS_MODAL_ROUTES.some(\n    screenName =>\n      screenName === transitionProps.scene.route.routeName ||\n      (prevTransitionProps &&\n        screenName === prevTransitionProps.scene.route.routeName)\n  );\n  return StackViewTransitionConfigs.defaultTransitionConfig(\n    transitionProps,\n    prevTransitionProps,\n    isModal\n  );\n};\n\nconst HomeStack = createStackNavigator(\n  { DetailScreen, HomeScreen, OptionsScreen },\n  { initialRouteName: 'HomeScreen', transitionConfig: dynamicModalTransition }\n);\n")),Object(r.b)("h2",{id:"peer-dependencies"},"Peer dependencies"),Object(r.b)("p",null,"react-navigation-stack depends on the following libraries in addition to react-navigation itself:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"react-native-gesture-handler"),Object(r.b)("li",{parentName:"ul"},"react-native-screens")))}p.isMDXComponent=!0},426:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return u}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),b=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=b(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},h=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=b(n),h=a,u=d["".concat(o,".").concat(h)]||d[h]||p[h]||r;return n?i.a.createElement(u,l(l({ref:t},s),{},{components:n})):i.a.createElement(u,l({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},427:function(e,t,n){"use strict";function a(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}t.a=function(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(i&&(i+=" "),i+=t);return i}},428:function(e,t,n){"use strict";var a=n(0),i=n(429);t.a=function(){var e=Object(a.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},429:function(e,t,n){"use strict";var a=n(0),i=Object(a.createContext)(void 0);t.a=i},430:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(428),o=n(427),l=n(49),c=n.n(l),s=37,b=39;t.a=function(e){var t=e.block,n=e.children,l=e.defaultValue,d=e.values,p=e.groupId,h=e.className,u=Object(r.a)(),m=u.tabGroupChoices,O=u.setTabGroupChoices,j=Object(a.useState)(l),f=j[0],g=j[1],N=Object(a.useState)(!1),v=N[0],C=N[1];if(null!=p){var y=m[p];null!=y&&y!==f&&d.some((function(e){return e.value===y}))&&g(y)}var w=function(e){g(e),null!=p&&O(p,e)},k=[],S=function(e){e.metaKey||e.altKey||e.ctrlKey||C(!0)},T=function(){C(!1)};return Object(a.useEffect)((function(){return window.addEventListener("keydown",S),window.addEventListener("mousedown",T),function(){window.removeEventListener("keydown",S),window.removeEventListener("mousedown",T)}}),[]),i.a.createElement("div",null,i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":t},h)},d.map((function(e){var t=e.value,n=e.label;return i.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":f===t,className:Object(o.a)("tabs__item",c.a.tabItem,{"tabs__item--active":f===t}),style:v?{}:{outline:"none"},key:t,ref:function(e){return k.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case b:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(k,e.target,e),S(e)},onFocus:function(){return w(t)},onClick:function(){w(t),C(!1)},onPointerDown:function(){return C(!1)}},n)}))),i.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===f}))[0]))}},431:function(e,t,n){"use strict";var a=n(0),i=n.n(a);t.a=function(e){return i.a.createElement("div",null,e.children)}}}]);