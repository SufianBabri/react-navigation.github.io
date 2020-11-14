(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{113:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return s})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return l}));var i=t(1),a=t(6),r=(t(0),t(426)),o={id:"transitioner",title:"Transitioner",sidebar_label:"Transitioner"},s={unversionedId:"transitioner",id:"version-1.x/transitioner",isDocsHomePage:!1,title:"Transitioner",description:"Transitioner is a React component that helps manage transitions for complex animated components. It manages the timing of animations and keeps track of various screens as they enter and leave, but it doesn't know what anything looks like, because rendering is entirely deferred to the developer.",source:"@site/versioned_docs/version-1.x/transitioner.md",slug:"/transitioner",permalink:"/docs/1.x/transitioner",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-1.x/transitioner.md",version:"1.x",sidebar_label:"Transitioner",sidebar:"version-1.x/docs",previous:{title:"Navigation views",permalink:"/docs/1.x/navigation-views"},next:{title:"Pitch & anti-pitch",permalink:"/docs/1.x/pitch"}},c=[{value:"Example",id:"example",children:[]},{value:"Props",id:"props",children:[{value:"<code>configureTransition</code> function",id:"configuretransition-function",children:[]},{value:"<code>navigation</code> prop",id:"navigation-prop",children:[]},{value:"<code>render</code> function",id:"render-function",children:[]},{value:"<code>onTransitionStart</code> function",id:"ontransitionstart-function",children:[]},{value:"<code>onTransitionEnd</code> function",id:"ontransitionend-function",children:[]}]}],p={rightToc:c};function l(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Transitioner")," is a React component that helps manage transitions for complex animated components. It manages the timing of animations and keeps track of various screens as they enter and leave, but it doesn't know what anything looks like, because rendering is entirely deferred to the developer."),Object(r.b)("p",null,"Under the covers, ",Object(r.b)("inlineCode",{parentName:"p"},"Transitioner")," is used to implement ",Object(r.b)("inlineCode",{parentName:"p"},"CardStack"),", and hence the ",Object(r.b)("inlineCode",{parentName:"p"},"StackNavigator"),"."),Object(r.b)("p",null,"The most useful thing ",Object(r.b)("inlineCode",{parentName:"p"},"Transitioner")," does is to take in a prop of the current navigation state. When routes are removed from that navigation state, ",Object(r.b)("inlineCode",{parentName:"p"},"Transitioner")," will coordinate the transition away from those routes, keeping them on screen even though they are gone from the navigation state."),Object(r.b)("h2",{id:"example"},"Example"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-jsx"}),"class MyNavView extends Component {\n  ...\n  render() {\n    return (\n      <Transitioner\n        configureTransition={this._configureTransition}\n        navigation={this.props.navigation}\n        render={this._render}\n        onTransitionStart={this.onTransitionStart}\n        onTransitionEnd={this.onTransitionEnd}\n      />\n    );\n}\n")),Object(r.b)("h2",{id:"props"},"Props"),Object(r.b)("h3",{id:"configuretransition-function"},Object(r.b)("inlineCode",{parentName:"h3"},"configureTransition")," function"),Object(r.b)("p",null,"Invoked on ",Object(r.b)("inlineCode",{parentName:"p"},"Transitioner.componentWillReceiveProps"),", this function allows customization of animation parameters such as ",Object(r.b)("inlineCode",{parentName:"p"},"duration"),". The value returned from this function will be fed into a timing function, by default ",Object(r.b)("inlineCode",{parentName:"p"},"Animated.timing()"),", as its config."),Object(r.b)("h4",{id:"examples"},"Examples"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js"}),"_configureTransition(transitionProps, prevTransitionProps) {\n  return {\n    // duration in milliseconds, default: 250\n    duration: 500,\n    // An easing function from `Easing`, default: Easing.inOut(Easing.ease)\n    easing: Easing.bounce,\n  }\n}\n")),Object(r.b)("p",null,"Note: ",Object(r.b)("inlineCode",{parentName:"p"},"duration")," and ",Object(r.b)("inlineCode",{parentName:"p"},"easing")," are only applicable when the timing function is ",Object(r.b)("inlineCode",{parentName:"p"},"Animated.timing"),". We can also use a different timing function and its corresponding config parameters, like so:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js"}),"_configureTransition(transitionProps, prevTransitionProps) {\n  return {\n    // A timing function, default: Animated.timing.\n    timing: Animated.spring,\n    // Some parameters relevant to Animated.spring\n    friction: 1,\n    tension: 0.5,\n  }\n}\n")),Object(r.b)("h4",{id:"flow-definition"},"Flow definition"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js"}),"  configureTransition: (\n    transitionProps: NavigationTransitionProps,\n    prevTransitionProps: ?NavigationTransitionProps,\n  ) => NavigationTransitionSpec,\n")),Object(r.b)("h4",{id:"parameters"},"Parameters"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"transitionProps"),": the current ",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://github.com/react-navigation/react-navigation/blob/1.x/flow/react-navigation.js"}),"NavigationTransitionProps")," created from the current navigation state and props"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"prevTransitionProps"),": the previous ",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://github.com/react-navigation/react-navigation/blob/1.x/flow/react-navigation.js"}),"NavigationTransitionProps")," created from the previous navigation state and props")),Object(r.b)("h4",{id:"returns"},"Returns"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"An object of type ",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://github.com/react-navigation/react-navigation/blob/1.x/flow/react-navigation.js"}),"NavigationTransitionSpec")," that will be fed into an Animated timing function as its config")),Object(r.b)("h3",{id:"navigation-prop"},Object(r.b)("inlineCode",{parentName:"h3"},"navigation")," prop"),Object(r.b)("p",null,"An object with ",Object(r.b)("inlineCode",{parentName:"p"},"state")," that represents the navigation state, with ",Object(r.b)("inlineCode",{parentName:"p"},"routes")," and an active route ",Object(r.b)("inlineCode",{parentName:"p"},"index"),". Also includes ",Object(r.b)("inlineCode",{parentName:"p"},"dispatch")," and other methods for requesting actions."),Object(r.b)("h4",{id:"example-value"},"Example value"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js"}),"{\n   // Index refers to the active child route in the routes array.\n  index: 1,\n  routes: [\n    { key: 'DF2FGWGAS-12', routeName: 'ContactHome' },\n    { key: 'DF2FGWGAS-13', routeName: 'ContactDetail', params: { personId: 123 } }\n  ]\n}\n")),Object(r.b)("h4",{id:"flow-definition-1"},"Flow definition"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js"}),"export type NavigationState = {\n  index: number,\n  routes: Array<NavigationRoute>,\n};\n")),Object(r.b)("p",null,"For more information about the ",Object(r.b)("inlineCode",{parentName:"p"},"NavigationRoute")," type, check out its ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/react-navigation/react-navigation/blob/1.x/flow/react-navigation.js"}),"flow definition"),"."),Object(r.b)("h3",{id:"render-function"},Object(r.b)("inlineCode",{parentName:"h3"},"render")," function"),Object(r.b)("p",null,"Invoked from ",Object(r.b)("inlineCode",{parentName:"p"},"Transitioner.render()"),". This function performs the actual rendering delegated from ",Object(r.b)("inlineCode",{parentName:"p"},"Transitioner"),". In this function, we can use the information included in the ",Object(r.b)("inlineCode",{parentName:"p"},"transitionProps")," and ",Object(r.b)("inlineCode",{parentName:"p"},"prevTransitionProps")," parameters to render scenes, create animations and handle gestures."),Object(r.b)("p",null,"There are a few important properties of the ",Object(r.b)("inlineCode",{parentName:"p"},"transitionProps")," and ",Object(r.b)("inlineCode",{parentName:"p"},"prevTransitionProps")," parameters that are useful for the tasks mentioned above:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"scenes: Array<NavigationScene>")," - a list of all available scenes"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"position: NavigationAnimatedValue")," - the progressive index of the transitioner's navigation state"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"progress: NavigationAnimatedValue")," - the value that represents the progress of the transition when navigation state changes from one to another. Its numeric value will range from 0 to 1.")),Object(r.b)("p",null,"For the complete list of properties of ",Object(r.b)("inlineCode",{parentName:"p"},"NavigationTransitionProps"),", check out its ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/react-navigation/react-navigation/blob/1.x/flow/react-navigation.js"}),"flow definition"),"."),Object(r.b)("h4",{id:"examples-1"},"Examples"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"transitionProps.scenes")," is the list of all available scenes. It is up to the implementor to determine how to lay them out on the screen. For example, we can render the scenes as a stack of cards like so:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-jsx"}),"_render(transitionProps, prevTransitionProps) {\n  const scenes = transitionProps.scenes.map(scene => this._renderScene(transitionProps, scene));\n  return (\n    <View style={styles.stack}>\n      {scenes}\n    </View>\n  );\n}\n")),Object(r.b)("p",null,"We can then use an ",Object(r.b)("inlineCode",{parentName:"p"},"Animated.View")," to animate the transition. To create necessary animated style properties, such as ",Object(r.b)("inlineCode",{parentName:"p"},"opacity"),", we can interpolate on ",Object(r.b)("inlineCode",{parentName:"p"},"position")," and ",Object(r.b)("inlineCode",{parentName:"p"},"progress")," values that come with ",Object(r.b)("inlineCode",{parentName:"p"},"transitionProps"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-jsx"}),"_renderScene(transitionProps, scene) {\n  const { position } = transitionProps;\n  const { index } = scene;\n  const opacity = position.interpolate({\n    inputRange: [index-1, index, index+1],\n    outputRange: [0, 1, 0],\n  });\n  // The prop `router` is populated when we call `createNavigator`.\n  const Scene = this.props.router.getComponent(scene.route.routeName);\n  return (\n    <Animated.View style={{ opacity }}>\n      { Scene }\n    </Animated.View>\n  )\n}\n")),Object(r.b)("p",null,"The above code creates a cross fade animation during transition."),Object(r.b)("p",null,"For a comprehensive tutorial on how to create custom transitions, see this ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"http://www.reactnativediary.com/2016/12/20/navigation-experimental-custom-transition-1.html"}),"blog post"),"."),Object(r.b)("h4",{id:"flow-definition-2"},"Flow definition"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js"}),"render: (transitionProps: NavigationTransitionProps, prevTransitionProps: ?NavigationTransitionProps) => React.Node,\n")),Object(r.b)("h4",{id:"parameters-1"},"Parameters"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"transitionProps"),": the current ",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://github.com/react-navigation/react-navigation/blob/1.x/flow/react-navigation.js"}),"NavigationTransitionProps")," created from the current state and props"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"prevTransitionProps"),": the previous ",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://github.com/react-navigation/react-navigation/blob/1.x/flow/react-navigation.js"}),"NavigationTransitionProps")," created from the previous state and props")),Object(r.b)("h4",{id:"returns-1"},"Returns"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"A ReactElement, which will be used to render the Transitioner component")),Object(r.b)("h3",{id:"ontransitionstart-function"},Object(r.b)("inlineCode",{parentName:"h3"},"onTransitionStart")," function"),Object(r.b)("p",null,"Invoked when the transition animation is about to start."),Object(r.b)("p",null,"If you return a promise from ",Object(r.b)("inlineCode",{parentName:"p"},"onTransitionStart"),", the transition animation will begin after the promise is resolved."),Object(r.b)("h4",{id:"flow-definition-3"},"Flow definition"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js"}),"onTransitionStart: (transitionProps: NavigationTransitionProps, prevTransitionProps: ?NavigationTransitionProps) => (Promise | void),\n")),Object(r.b)("h4",{id:"parameters-2"},"Parameters"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"transitionProps"),": the current ",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://github.com/react-navigation/react-navigation/blob/1.x/flow/react-navigation.js"}),"NavigationTransitionProps")," created from the current state and props"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"prevTransitionProps"),": the previous ",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://github.com/react-navigation/react-navigation/blob/1.x/flow/react-navigation.js"}),"NavigationTransitionProps")," created from the previous state and props")),Object(r.b)("h4",{id:"returns-2"},"Returns"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Promise")," to delay the start of the transition animation, or none to begin the transition animation immediately.")),Object(r.b)("h3",{id:"ontransitionend-function"},Object(r.b)("inlineCode",{parentName:"h3"},"onTransitionEnd")," function"),Object(r.b)("p",null,"Invoked once the transition animation completes."),Object(r.b)("p",null,"If you return a promise from ",Object(r.b)("inlineCode",{parentName:"p"},"onTransitionEnd"),", any queued transition animations will begin after the promise is resolved."),Object(r.b)("h4",{id:"flow-definition-4"},"Flow definition"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js"}),"onTransitionEnd: () => void\n")),Object(r.b)("h4",{id:"parameters-3"},"Parameters"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"none.")),Object(r.b)("h4",{id:"returns-3"},"Returns"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"none.")))}l.isMDXComponent=!0},426:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var i=t(0),a=t.n(i);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),l=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},b=function(e){var n=l(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},u=a.a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=l(t),u=i,m=b["".concat(o,".").concat(u)]||b[u]||d[u]||r;return t?a.a.createElement(m,s(s({ref:n},p),{},{components:t})):a.a.createElement(m,s({ref:n},p))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=u;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=t[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);