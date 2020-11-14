(window.webpackJsonp=window.webpackJsonp||[]).push([[339],{398:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(1),i=n(6),o=(n(0),n(426)),r={id:"navigating",title:"Moving between screens",sidebar_label:"Moving between screens"},c={unversionedId:"navigating",id:"version-5.x/navigating",isDocsHomePage:!1,title:"Moving between screens",description:'In the previous section, "Hello React Navigation", we defined a stack navigator with two routes (Home and Details), but we didn\'t learn how to let a user navigate from Home to Details (although we did learn how to change the initial route in our code, but forcing our users to clone our repository and change the route in our code in order to see another screen is arguably among the worst user experiences one could imagine).',source:"@site/versioned_docs/version-5.x/navigating.md",slug:"/navigating",permalink:"/docs/navigating",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-5.x/navigating.md",version:"5.x",sidebar_label:"Moving between screens",sidebar:"version-5.x/docs",previous:{title:"Hello React Navigation",permalink:"/docs/hello-react-navigation"},next:{title:"Passing parameters to routes",permalink:"/docs/params"}},l=[{value:"Navigating to a new screen",id:"navigating-to-a-new-screen",children:[]},{value:"Navigate to a route multiple times",id:"navigate-to-a-route-multiple-times",children:[]},{value:"Going back",id:"going-back",children:[]},{value:"Summary",id:"summary",children:[]}],s={rightToc:l};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"In the previous section, ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/hello-react-navigation"}),'"Hello React Navigation"'),", we defined a stack navigator with two routes (",Object(o.b)("inlineCode",{parentName:"p"},"Home")," and ",Object(o.b)("inlineCode",{parentName:"p"},"Details"),"), but we didn't learn how to let a user navigate from ",Object(o.b)("inlineCode",{parentName:"p"},"Home")," to ",Object(o.b)("inlineCode",{parentName:"p"},"Details")," (although we did learn how to change the ",Object(o.b)("em",{parentName:"p"},"initial")," route in our code, but forcing our users to clone our repository and change the route in our code in order to see another screen is arguably among the worst user experiences one could imagine)."),Object(o.b)("p",null,"If this was a web browser, we'd be able to write something like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'<a href="details.html">Go to Details</a>\n')),Object(o.b)("p",null,"Another way to write this would be:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"<a\n  onClick={() => {\n    window.location.href = 'details.html';\n  }}\n>\n  Go to Details\n</a>\n")),Object(o.b)("p",null,"We'll do something similar to the latter, but rather than using a ",Object(o.b)("inlineCode",{parentName:"p"},"window.location")," global, we'll use the ",Object(o.b)("inlineCode",{parentName:"p"},"navigation")," prop that is passed down to our screen components."),Object(o.b)("h2",{id:"navigating-to-a-new-screen"},"Navigating to a new screen"),Object(o.b)("samp",{id:"new-screen"}),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import * as React from 'react';\nimport { Button, View, Text } from 'react-native';\nimport { NavigationContainer } from '@react-navigation/native';\nimport { createStackNavigator } from '@react-navigation/stack';\n\nfunction HomeScreen({ navigation }) {\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text>Home Screen</Text>\n      <Button\n        title=\"Go to Details\"\n        onPress={() => navigation.navigate('Details')}\n      />\n    </View>\n  );\n}\n\n// ... other code from the previous section\n")),Object(o.b)("p",null,"Let's break this down:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"navigation")," - the ",Object(o.b)("inlineCode",{parentName:"li"},"navigation")," prop is passed in to every ",Object(o.b)("strong",{parentName:"li"},"screen component")," (",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/glossary-of-terms#screen-component"}),"definition"),") in stack navigator (more about this later in ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/navigation-prop"}),'"The navigation prop in depth"'),")."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"navigate('Details')")," - we call the ",Object(o.b)("inlineCode",{parentName:"li"},"navigate")," function (on the ",Object(o.b)("inlineCode",{parentName:"li"},"navigation")," prop ","\u2014"," naming is hard!) with the name of the route that we'd like to move the user to.")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"If we call ",Object(o.b)("inlineCode",{parentName:"p"},"navigation.navigate")," with a route name that we haven't defined in a navigator, it'll print an error in development builds and nothing will happen in production builds. Said another way, we can only navigate to routes that have been defined on our navigator ","\u2014"," we cannot navigate to an arbitrary component.")),Object(o.b)("p",null,"So we now have a stack with two routes: 1) the ",Object(o.b)("inlineCode",{parentName:"p"},"Home")," route 2) the ",Object(o.b)("inlineCode",{parentName:"p"},"Details")," route. What would happen if we navigated to the ",Object(o.b)("inlineCode",{parentName:"p"},"Details")," route again, from the ",Object(o.b)("inlineCode",{parentName:"p"},"Details")," screen?"),Object(o.b)("h2",{id:"navigate-to-a-route-multiple-times"},"Navigate to a route multiple times"),Object(o.b)("samp",{id:"multiple-navigate"}),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"function DetailsScreen({ navigation }) {\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text>Details Screen</Text>\n      <Button\n        title=\"Go to Details... again\"\n        onPress={() => navigation.navigate('Details')}\n      />\n    </View>\n  );\n}\n")),Object(o.b)("p",null,"If you run this code, you'll notice that when you tap \"Go to Details... again\" that it doesn't do anything! This is because we are already on the Details route. The ",Object(o.b)("inlineCode",{parentName:"p"},"navigate"),' function roughly means "go to this screen", and if you are already on that screen then it makes sense that it would do nothing.'),Object(o.b)("p",null,"Let's suppose that we actually ",Object(o.b)("em",{parentName:"p"},"want")," to add another details screen. This is pretty common in cases where you pass in some unique data to each route (more on that later when we talk about ",Object(o.b)("inlineCode",{parentName:"p"},"params"),"!). To do this, we can change ",Object(o.b)("inlineCode",{parentName:"p"},"navigate")," to ",Object(o.b)("inlineCode",{parentName:"p"},"push"),". This allows us to express the intent to add another route regardless of the existing navigation history."),Object(o.b)("samp",{id:"multiple-push"}),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"<Button\n  title=\"Go to Details... again\"\n  onPress={() => navigation.push('Details')}\n/>\n")),Object(o.b)("div",{style:{display:"flex",margin:"16px 0"}},Object(o.b)("video",{playsInline:!0,autoPlay:!0,muted:!0,loop:!0},Object(o.b)("source",{src:"/assets/navigators/stack/stack-push.mov"}))),Object(o.b)("p",null,"Each time you call ",Object(o.b)("inlineCode",{parentName:"p"},"push")," we add a new route to the navigation stack. When you call ",Object(o.b)("inlineCode",{parentName:"p"},"navigate")," it first tries to find an existing route with that name, and only pushes a new route if there isn't yet one on the stack."),Object(o.b)("h2",{id:"going-back"},"Going back"),Object(o.b)("p",null,"The header provided by stack navigator will automatically include a back button when it is possible to go back from the active screen (if there is only one screen in the navigation stack, there is nothing that you can go back to, and so there is no back button)."),Object(o.b)("p",null,"Sometimes you'll want to be able to programmatically trigger this behavior, and for that you can use ",Object(o.b)("inlineCode",{parentName:"p"},"navigation.goBack();"),"."),Object(o.b)("samp",{id:"go-back"}),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"function DetailsScreen({ navigation }) {\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text>Details Screen</Text>\n      <Button\n        title=\"Go to Details... again\"\n        onPress={() => navigation.push('Details')}\n      />\n      <Button title=\"Go to Home\" onPress={() => navigation.navigate('Home')} />\n      <Button title=\"Go back\" onPress={() => navigation.goBack()} />\n    </View>\n  );\n}\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"On Android, React Navigation hooks in to the hardware back button and fires the ",Object(o.b)("inlineCode",{parentName:"p"},"goBack()")," function for you when the user presses it, so it behaves as the user would expect.")),Object(o.b)("p",null,"Another common requirement is to be able to go back ",Object(o.b)("em",{parentName:"p"},"multiple")," screens -- for example, if you are several screens deep in a stack and want to dismiss all of them to go back to the first screen. In this case, we know that we want to go back to ",Object(o.b)("inlineCode",{parentName:"p"},"Home")," so we can use ",Object(o.b)("inlineCode",{parentName:"p"},"navigate('Home')")," (not ",Object(o.b)("inlineCode",{parentName:"p"},"push"),"! try that out and see the difference). Another alternative would be ",Object(o.b)("inlineCode",{parentName:"p"},"navigation.popToTop()"),", which goes back to the first screen in the stack."),Object(o.b)("samp",{id:"pop-to-top"}),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"function DetailsScreen({ navigation }) {\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text>Details Screen</Text>\n      <Button\n        title=\"Go to Details... again\"\n        onPress={() => navigation.push('Details')}\n      />\n      <Button title=\"Go to Home\" onPress={() => navigation.navigate('Home')} />\n      <Button title=\"Go back\" onPress={() => navigation.goBack()} />\n      <Button\n        title=\"Go back to first screen in stack\"\n        onPress={() => navigation.popToTop()}\n      />\n    </View>\n  );\n}\n")),Object(o.b)("h2",{id:"summary"},"Summary"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"navigation.navigate('RouteName')")," pushes a new route to the stack navigator if it's not already in the stack, otherwise it jumps to that screen."),Object(o.b)("li",{parentName:"ul"},"We can call ",Object(o.b)("inlineCode",{parentName:"li"},"navigation.push('RouteName')")," as many times as we like and it will continue pushing routes."),Object(o.b)("li",{parentName:"ul"},"The header bar will automatically show a back button, but you can programmatically go back by calling ",Object(o.b)("inlineCode",{parentName:"li"},"navigation.goBack()"),". On Android, the hardware back button just works as expected."),Object(o.b)("li",{parentName:"ul"},"You can go back to an existing screen in the stack with ",Object(o.b)("inlineCode",{parentName:"li"},"navigation.navigate('RouteName')"),", and you can go back to the first screen in the stack with ",Object(o.b)("inlineCode",{parentName:"li"},"navigation.popToTop()"),"."),Object(o.b)("li",{parentName:"ul"},"The ",Object(o.b)("inlineCode",{parentName:"li"},"navigation")," prop is available to all screen components (components defined as screens in route configuration and rendered by React Navigation as a route).")))}b.isMDXComponent=!0},426:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),b=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=b(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=b(n),m=a,d=u["".concat(r,".").concat(m)]||u[m]||p[m]||o;return n?i.a.createElement(d,c(c({ref:t},s),{},{components:n})):i.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var s=2;s<o;s++)r[s]=n[s];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);