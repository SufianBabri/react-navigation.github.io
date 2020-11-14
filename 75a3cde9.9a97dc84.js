(window.webpackJsonp=window.webpackJsonp||[]).push([[178],{238:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return b}));var n=a(1),i=a(6),r=(a(0),a(426)),o={id:"navigation-actions",title:"NavigationActions reference",sidebar_label:"NavigationActions"},c={unversionedId:"navigation-actions",id:"version-2.x/navigation-actions",isDocsHomePage:!1,title:"NavigationActions reference",description:"All NavigationActions return an object that can be sent to the router using navigation.dispatch() method.",source:"@site/versioned_docs/version-2.x/navigation-actions.md",slug:"/navigation-actions",permalink:"/docs/2.x/navigation-actions",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-2.x/navigation-actions.md",version:"2.x",sidebar_label:"NavigationActions",sidebar:"version-2.x-api",previous:{title:"Navigation prop reference",permalink:"/docs/2.x/navigation-prop"},next:{title:"StackActions reference",permalink:"/docs/2.x/stack-actions"}},l=[{value:"navigate",id:"navigate",children:[]},{value:"back",id:"back",children:[]},{value:"setParams",id:"setparams",children:[]}],s={rightToc:l};function b(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"All ",Object(r.b)("inlineCode",{parentName:"p"},"NavigationActions")," return an object that can be sent to the router using ",Object(r.b)("inlineCode",{parentName:"p"},"navigation.dispatch()")," method."),Object(r.b)("p",null,"Note that if you want to dispatch react-navigation actions you should use the action creators provided in this library."),Object(r.b)("p",null,"The following actions are supported:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#navigate"}),"Navigate")," - Navigate to another route"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#back"}),"Back")," - Go back to previous state"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#setparams"}),"Set Params")," - Set Params for given route"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#init"}),"Init")," - Used to initialize first state if state is undefined")),Object(r.b)("p",null,"For actions specific to a StackNavigator, see ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/2.x/stack-actions"}),"StackActions"),"."),Object(r.b)("p",null,"The action creator functions define ",Object(r.b)("inlineCode",{parentName:"p"},"toString()")," to return the action type, which enables easy usage with third-party Redux libraries, including redux-actions and redux-saga."),Object(r.b)("h3",{id:"navigate"},"navigate"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"navigate")," action will update the current state with the result of a ",Object(r.b)("inlineCode",{parentName:"p"},"navigate")," action."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"routeName")," - ",Object(r.b)("em",{parentName:"li"},"String")," - Required - A destination routeName that has been registered somewhere in the app's router"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"params")," - ",Object(r.b)("em",{parentName:"li"},"Object")," - Optional - Params to merge into the destination route"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"action")," - ",Object(r.b)("em",{parentName:"li"},"Object")," - Optional - (advanced) The sub-action to run in the child router, if the screen is a navigator. Any one of the actions described in this doc can be set as a sub-action."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"key")," - ",Object(r.b)("em",{parentName:"li"},"String")," - Optional - The identifier for the route to navigate to. Navigate back to this route if it already exists")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import { NavigationActions } from 'react-navigation';\n\nconst navigateAction = NavigationActions.navigate({\n  routeName: 'Profile',\n\n  params: {},\n\n  action: NavigationActions.navigate({ routeName: 'SubProfileRoute' }),\n});\n\nthis.props.navigation.dispatch(navigateAction);\n")),Object(r.b)("h3",{id:"back"},"back"),Object(r.b)("p",null,"Go back to previous screen and close current screen. ",Object(r.b)("inlineCode",{parentName:"p"},"back")," action creator takes in one optional parameter:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"key")," - ",Object(r.b)("em",{parentName:"li"},"string or null")," - optional - If set, navigation will go back from the given key. If null, navigation will go back anywhere.")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import { NavigationActions } from 'react-navigation';\n\nconst backAction = NavigationActions.back({\n  key: 'Profile',\n});\nthis.props.navigation.dispatch(backAction);\n")),Object(r.b)("h3",{id:"setparams"},"setParams"),Object(r.b)("p",null,"When dispatching ",Object(r.b)("inlineCode",{parentName:"p"},"setParams"),", the router will produce a new state that has changed the params of a particular route, as identified by the key"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"params")," - ",Object(r.b)("em",{parentName:"li"},"object")," - required - New params to be merged into existing route params"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"key")," - ",Object(r.b)("em",{parentName:"li"},"string")," - required - Route key that should get the new params")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import { NavigationActions } from 'react-navigation';\n\nconst setParamsAction = NavigationActions.setParams({\n  params: { title: 'Hello' },\n  key: 'screen-123',\n});\nthis.props.navigation.dispatch(setParamsAction);\n")))}b.isMDXComponent=!0},426:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return d}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=i.a.createContext({}),b=function(e){var t=i.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=b(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(a),m=n,d=p["".concat(o,".").concat(m)]||p[m]||u[m]||r;return a?i.a.createElement(d,c(c({ref:t},s),{},{components:a})):i.a.createElement(d,c({ref:t},s))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<r;s++)o[s]=a[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);