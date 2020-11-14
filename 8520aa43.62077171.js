(window.webpackJsonp=window.webpackJsonp||[]).push([[199],{259:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(1),i=a(6),r=(a(0),a(426)),o={id:"navigation-actions",title:"NavigationActions reference",sidebar_label:"NavigationActions"},c={unversionedId:"navigation-actions",id:"version-1.x/navigation-actions",isDocsHomePage:!1,title:"NavigationActions reference",description:"All NavigationActions return an object that can be sent to the router using navigation.dispatch() method.",source:"@site/versioned_docs/version-1.x/navigation-actions.md",slug:"/navigation-actions",permalink:"/docs/1.x/navigation-actions",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-1.x/navigation-actions.md",version:"1.x",sidebar_label:"NavigationActions",sidebar:"api",previous:{title:"Navigation prop reference",permalink:"/docs/1.x/navigation-prop"},next:{title:"StackNavigator reference",permalink:"/docs/1.x/stack-navigator"}},l=[{value:"Navigate",id:"navigate",children:[]},{value:"Reset",id:"reset",children:[]},{value:"Replace",id:"replace",children:[]},{value:"Back",id:"back",children:[]},{value:"SetParams",id:"setparams",children:[]}],b={rightToc:l};function p(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"All ",Object(r.b)("inlineCode",{parentName:"p"},"NavigationActions")," return an object that can be sent to the router using ",Object(r.b)("inlineCode",{parentName:"p"},"navigation.dispatch()")," method."),Object(r.b)("p",null,"Note that if you want to dispatch react-navigation actions you should use the action creators provided in this library."),Object(r.b)("p",null,"The following actions are supported:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#navigate"}),"Navigate")," - Navigate to another route"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#back"}),"Back")," - Go back to previous state"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#setparams"}),"Set Params")," - Set Params for given route"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#init"}),"Init")," - Used to initialize first state if state is undefined")),Object(r.b)("p",null,"Within a stack, you can also use:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#reset"}),"Reset")," - Replace current state with a new state"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#replace"}),"Replace")," - Replace a route at a given key with another route"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#push"}),"Push")," - Add a route on the top of the stack, and navigate forward to it"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#pop"}),"Pop")," - Navigate back to previous routes"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#poptotop"}),"PopToTop")," - Navigate to the top route of the stack, dismissing all other routes")),Object(r.b)("p",null,"The action creator functions define ",Object(r.b)("inlineCode",{parentName:"p"},"toString()")," to return the action type, which enables easy usage with third-party Redux libraries, including redux-actions and redux-saga."),Object(r.b)("h3",{id:"navigate"},"Navigate"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"Navigate")," action will update the current state with the result of a ",Object(r.b)("inlineCode",{parentName:"p"},"Navigate")," action."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"routeName")," - ",Object(r.b)("em",{parentName:"li"},"String")," - Required - A destination routeName that has been registered somewhere in the app's router"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"params")," - ",Object(r.b)("em",{parentName:"li"},"Object")," - Optional - Params to merge into the destination route"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"action")," - ",Object(r.b)("em",{parentName:"li"},"Object")," - Optional - (advanced) The sub-action to run in the child router, if the screen is a navigator. Any one of the actions described in this doc can be set as a sub-action."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"key")," - ",Object(r.b)("em",{parentName:"li"},"String")," - Optional - The identifier for the route to navigate to. Navigate back to this route if it already exists")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import { NavigationActions } from 'react-navigation';\n\nconst navigateAction = NavigationActions.navigate({\n  routeName: 'Profile',\n\n  params: {},\n\n  action: NavigationActions.navigate({ routeName: 'SubProfileRoute' }),\n});\n\nthis.props.navigation.dispatch(navigateAction);\n")),Object(r.b)("h3",{id:"reset"},"Reset"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"Reset")," action wipes the whole navigation state and replaces it with the result of several actions."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"index")," - ",Object(r.b)("em",{parentName:"li"},"number")," - required - Index of the active route on ",Object(r.b)("inlineCode",{parentName:"li"},"routes")," array in navigation ",Object(r.b)("inlineCode",{parentName:"li"},"state"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"actions")," - ",Object(r.b)("em",{parentName:"li"},"array")," - required - Array of Navigation Actions that will replace the navigation state."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"key")," - ",Object(r.b)("em",{parentName:"li"},"string or null")," - optional - If set, the navigator with the given key will reset. If null, the root navigator will reset.")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import { NavigationActions } from 'react-navigation';\n\nconst resetAction = NavigationActions.reset({\n  index: 0,\n  actions: [NavigationActions.navigate({ routeName: 'Profile' })],\n});\nthis.props.navigation.dispatch(resetAction);\n")),Object(r.b)("h4",{id:"how-to-use-the-index-parameter"},"How to use the ",Object(r.b)("inlineCode",{parentName:"h4"},"index")," parameter"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"index")," param is used to specify the current active route."),Object(r.b)("p",null,"eg: given a basic stack navigation with two routes ",Object(r.b)("inlineCode",{parentName:"p"},"Profile")," and ",Object(r.b)("inlineCode",{parentName:"p"},"Settings"),".\nTo reset the state to a point where the active screen was ",Object(r.b)("inlineCode",{parentName:"p"},"Settings")," but have it stacked on top of a ",Object(r.b)("inlineCode",{parentName:"p"},"Profile")," screen, you would do the following:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import { NavigationActions } from 'react-navigation';\n\nconst resetAction = NavigationActions.reset({\n  index: 1,\n  actions: [\n    NavigationActions.navigate({ routeName: 'Profile' }),\n    NavigationActions.navigate({ routeName: 'Settings' }),\n  ],\n});\nthis.props.navigation.dispatch(resetAction);\n")),Object(r.b)("h3",{id:"replace"},"Replace"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"Replace")," action replaces the route at the given key with another route."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"key")," - _string - required - Key of the route to replace."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"newKey")," - _string - Key to use for the replacement route. Generated automatically if not provided."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"routeName")," - _string - ",Object(r.b)("inlineCode",{parentName:"li"},"routeName")," to use for replacement route."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"params")," - ",Object(r.b)("em",{parentName:"li"},"object")," - Parameters to pass in to the replacement route."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"action")," - ",Object(r.b)("em",{parentName:"li"},"object")," - Optional sub-action."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"immediate"),Object(r.b)("em",{parentName:"li"}," - ",Object(r.b)("em",{parentName:"em"},"boolean")," - "),"Currently has no effect*, this is a placeholder for when ",Object(r.b)("inlineCode",{parentName:"li"},"StackNavigator")," supports animated replace (it currently does not).")),Object(r.b)("h3",{id:"back"},"Back"),Object(r.b)("p",null,"Go back to previous screen and close current screen. ",Object(r.b)("inlineCode",{parentName:"p"},"back")," action creator takes in one optional parameter:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"key")," - ",Object(r.b)("em",{parentName:"li"},"string or null")," - optional - If set, navigation will go back from the given key. If null, navigation will go back anywhere.")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import { NavigationActions } from 'react-navigation';\n\nconst backAction = NavigationActions.back({\n  key: 'Profile',\n});\nthis.props.navigation.dispatch(backAction);\n")),Object(r.b)("h3",{id:"setparams"},"SetParams"),Object(r.b)("p",null,"When dispatching ",Object(r.b)("inlineCode",{parentName:"p"},"SetParams"),", the router will produce a new state that has changed the params of a particular route, as identified by the key"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"params")," - ",Object(r.b)("em",{parentName:"li"},"object")," - required - New params to be merged into existing route params"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"key")," - ",Object(r.b)("em",{parentName:"li"},"string")," - required - Route key that should get the new params")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import { NavigationActions } from 'react-navigation';\n\nconst setParamsAction = NavigationActions.setParams({\n  params: { title: 'Hello' },\n  key: 'screen-123',\n});\nthis.props.navigation.dispatch(setParamsAction);\n")))}p.isMDXComponent=!0},426:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return d}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var b=i.a.createContext({}),p=function(e){var t=i.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},s=function(e){var t=p(e.components);return i.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),s=p(a),m=n,d=s["".concat(o,".").concat(m)]||s[m]||u[m]||r;return a?i.a.createElement(d,c(c({ref:t},b),{},{components:a})):i.a.createElement(d,c({ref:t},b))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var b=2;b<r;b++)o[b]=a[b];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);