(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{145:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var a=n(1),o=n(6),i=(n(0),n(426)),r={id:"header-buttons",title:"Header buttons",sidebar_label:"Header buttons"},c={unversionedId:"header-buttons",id:"version-1.x/header-buttons",isDocsHomePage:!1,title:"Header buttons",description:"Now that we know how to customize the look of our headers, let's make them sentient! Actually perhaps that's ambitious, let's just make them able to respond to our touches in very well defined ways.",source:"@site/versioned_docs/version-1.x/header-buttons.md",slug:"/header-buttons",permalink:"/docs/1.x/header-buttons",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-1.x/header-buttons.md",version:"1.x",sidebar_label:"Header buttons",sidebar:"version-1.x/docs",previous:{title:"Configuring the header bar",permalink:"/docs/1.x/headers"},next:{title:"Opening a full-screen modal",permalink:"/docs/1.x/modal"}},s=[{value:"Adding a button to the header",id:"adding-a-button-to-the-header",children:[]},{value:"Header interaction with its screen component",id:"header-interaction-with-its-screen-component",children:[]},{value:"Customizing the back button",id:"customizing-the-back-button",children:[]},{value:"Overriding the back button",id:"overriding-the-back-button",children:[]},{value:"Summary",id:"summary",children:[]}],b={rightToc:s};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Now that we know how to customize the look of our headers, let's make them sentient! Actually perhaps that's ambitious, let's just make them able to respond to our touches in very well defined ways."),Object(i.b)("h2",{id:"adding-a-button-to-the-header"},"Adding a button to the header"),Object(i.b)("p",null,"The most common way to interact with a header is by tapping on a button either to the left or the right of the title. Let's add a button to the right side of the header (one of the most difficult places to touch on your entire screen, depending on finger and phone size, but also a normal place to put buttons)."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'class HomeScreen extends React.Component {\n  static navigationOptions = {\n    headerTitle: <LogoTitle />,\n    headerRight: (\n      <Button\n        onPress={() => alert(\'This is a button!\')}\n        title="Info"\n        color="#fff"\n      />\n    ),\n  };\n}\n')),Object(i.b)("a",{href:"https://snack.expo.io/@react-navigation/simple-header-button",target:"blank",class:"run-code-button"},"\u2192 Run this code"),Object(i.b)("p",null,"The binding of ",Object(i.b)("inlineCode",{parentName:"p"},"this")," in ",Object(i.b)("inlineCode",{parentName:"p"},"navigationOptions")," is ",Object(i.b)("em",{parentName:"p"},"not")," the ",Object(i.b)("inlineCode",{parentName:"p"},"HomeScreen")," instance, so you can't call ",Object(i.b)("inlineCode",{parentName:"p"},"setState")," or any instance methods on it. This is pretty important because it's extremely common to want the buttons in your header to interact with the screen that the header belongs to. So, we will look how to do this next."),Object(i.b)("p",null,"There is a community-developed package for rendering buttons in the header with the correct styling available ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/vonovak/react-navigation-header-buttons"}),"react-navigation-header-buttons"),"."),Object(i.b)("h2",{id:"header-interaction-with-its-screen-component"},"Header interaction with its screen component"),Object(i.b)("p",null,"The most commonly used pattern for giving a header button access to a function on the component instance is to use ",Object(i.b)("inlineCode",{parentName:"p"},"params"),". We'll demonstrate this with a classic example, the counter."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'class HomeScreen extends React.Component {\n  static navigationOptions = ({ navigation }) => {\n    const params = navigation.state.params || {};\n\n    return {\n      headerTitle: <LogoTitle />,\n      headerRight: (\n        <Button onPress={params.increaseCount} title="+1" color="#fff" />\n      ),\n    };\n  };\n\n  componentWillMount() {\n    this.props.navigation.setParams({ increaseCount: this._increaseCount });\n  }\n\n  state = {\n    count: 0,\n  };\n\n  _increaseCount = () => {\n    this.setState({ count: this.state.count + 1 });\n  };\n\n  /* later in the render function we display the count */\n}\n')),Object(i.b)("a",{href:"https://snack.expo.io/@react-navigation/header-interacting-with-component-instance",target:"blank",class:"run-code-button"},"\u2192 Run this code"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"React Navigation doesn't guarantee that your screen component will begin mounting before the header for the screen is rendered, and because the ",Object(i.b)("inlineCode",{parentName:"p"},"increaseCount")," param is set in ",Object(i.b)("inlineCode",{parentName:"p"},"componentWillMount"),", we may not have it available to us in ",Object(i.b)("inlineCode",{parentName:"p"},"navigationOptions"),", which is why we include the ",Object(i.b)("inlineCode",{parentName:"p"},"|| {}")," when grabbing the params (there may not be any). We know this is an awkward API and we do plan on improving it!")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"As an alternative to ",Object(i.b)("inlineCode",{parentName:"p"},"setParams"),", you could use a state management library (such as Redux or MobX) and communicate between the header and the screen in the same way you would with two distinct components.")),Object(i.b)("h2",{id:"customizing-the-back-button"},"Customizing the back button"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"StackNavigator"),' provides the platform-specific defaults for the back button. On iOS this includes a label next to the button, which shows the title of the previous screen when the title fits in the available space, otherwise it says "Back".'),Object(i.b)("p",null,"You can change the label behavior with ",Object(i.b)("inlineCode",{parentName:"p"},"headerBackTitle")," and ",Object(i.b)("inlineCode",{parentName:"p"},"headerTruncatedBackTitle")," (",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/1.x/stack-navigator#headerbacktitle"}),"read more"),")."),Object(i.b)("p",null,"To customize the back button image, you can use ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/1.x/stack-navigator#headerbackimage"}),"headerBackImage"),"."),Object(i.b)("h2",{id:"overriding-the-back-button"},"Overriding the back button"),Object(i.b)("p",null,"The back button will be rendered automatically in a ",Object(i.b)("inlineCode",{parentName:"p"},"StackNavigator")," whenever it is possible for the user to go back from their current screen ","\u2014"," in other words, the back button will be rendered whenever there is more than one screen in the stack."),Object(i.b)("p",null,"Generally, this is what you want. But it's possible that in some circumstances that you want to customize the back button more than you can through the options mentioned above, in which case you can specify a ",Object(i.b)("inlineCode",{parentName:"p"},"headerLeft"),", just as we did with ",Object(i.b)("inlineCode",{parentName:"p"},"headerRight"),", and completely override the back button."),Object(i.b)("h2",{id:"summary"},"Summary"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"You can set buttons in the header through the ",Object(i.b)("inlineCode",{parentName:"li"},"headerLeft")," and ",Object(i.b)("inlineCode",{parentName:"li"},"headerRight")," properties in ",Object(i.b)("inlineCode",{parentName:"li"},"navigationOptions"),"."),Object(i.b)("li",{parentName:"ul"},"The back button is fully customizable with ",Object(i.b)("inlineCode",{parentName:"li"},"headerLeft"),", but if you just want to change the title or image, there are other ",Object(i.b)("inlineCode",{parentName:"li"},"navigationOptions")," for that ","\u2014"," ",Object(i.b)("inlineCode",{parentName:"li"},"headerBackTitle"),", ",Object(i.b)("inlineCode",{parentName:"li"},"headerTruncatedBackTitle"),", and ",Object(i.b)("inlineCode",{parentName:"li"},"headerBackImage"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://snack.expo.io/@react-navigation/header-interacting-with-component-instance"}),"Full source of what we have built so far"),".")))}l.isMDXComponent=!0},426:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return p}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var b=o.a.createContext({}),l=function(e){var t=o.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return o.a.createElement(b.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,b=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=a,p=u["".concat(r,".").concat(d)]||u[d]||h[d]||i;return n?o.a.createElement(p,c(c({ref:t},b),{},{components:n})):o.a.createElement(p,c({ref:t},b))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var b=2;b<i;b++)r[b]=n[b];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);