(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{426:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return d}));var n=a(0),o=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},b=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},h=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=p(a),h=n,d=b["".concat(i,".").concat(h)]||b[h]||u[h]||r;return a?o.a.createElement(d,s(s({ref:t},l),{},{components:a})):o.a.createElement(d,s({ref:t},l))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<r;l++)i[l]=a[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"},69:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a(1),o=a(6),r=(a(0),a(426)),i={title:"React Navigation on the Web",author:"Satyajit Sahoo",author_url:"https://twitter.com/satya164",author_title:"Core Team",author_image_url:"https://avatars2.githubusercontent.com/u/1174278?s=200&v=4",tags:["announcement","web"]},s={permalink:"/blog/2020/05/16/web-support",source:"@site/blog/2020-05-16-web-support.md",description:"React Native has made cross-platform development much easier than before, and with React Native for Web, you can reuse code across Android, iOS and Web too!",date:"2020-05-16T00:00:00.000Z",tags:[{label:"announcement",permalink:"/blog/tags/announcement"},{label:"web",permalink:"/blog/tags/web"}],title:"React Navigation on the Web",readingTime:5.025,truncated:!0,prevItem:{title:"React Navigation joins GitHub Sponsors",permalink:"/blog/2020/05/19/joining-github-sponsors"},nextItem:{title:"React Navigation 5.0 - A new way to navigate",permalink:"/blog/2020/02/06/react-navigation-5.0"}},c=[{value:"Integration with URLs in browsers",id:"integration-with-urls-in-browsers",children:[]},{value:"Improvements to the navigators",id:"improvements-to-the-navigators",children:[{value:"Anchor tags in tabs and drawer",id:"anchor-tags-in-tabs-and-drawer",children:[]},{value:"No gestures and animations",id:"no-gestures-and-animations",children:[]},{value:"Hide address bar on scroll",id:"hide-address-bar-on-scroll",children:[]},{value:"Permanent drawer",id:"permanent-drawer",children:[]}]},{value:"What&#39;s next?",id:"whats-next",children:[]}],l={rightToc:c};function p(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"React Native has made cross-platform development much easier than before, and with React Native for Web, you can reuse code across Android, iOS and Web too!"),Object(r.b)("p",null,"One major pain point of reusing code for the web app has been navigation. React Navigation is one of the most widely used navigation libraries for React Native, but it didn\u2019t support web. While you could run apps using React Navigation on the Web, a lot of things were missing, such as proper integration with URLs on the browser."),Object(r.b)("p",null,"We have finally added preliminary web support to React Navigation. Let's take a look at the changes."),Object(r.b)("h2",{id:"integration-with-urls-in-browsers"},"Integration with URLs in browsers"),Object(r.b)("p",null,"The first step for web support is to have proper URL integration. This means:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Users should be able to navigate to a screen in the app using a URL"),Object(r.b)("li",{parentName:"ul"},"URL in the browser's address bar should update as users navigate in the app"),Object(r.b)("li",{parentName:"ul"},"Users should be able to go backwards and forwards using browser's back/forward buttons"),Object(r.b)("li",{parentName:"ul"},"Buttons that navigate to other screens in the app should be links, and users should be able use standard shortcuts with them")),Object(r.b)("video",{playsInline:!0,autoPlay:!0,muted:!0,loop:!0,style:{maxWidth:"100%",marginBottom:32}},Object(r.b)("source",{src:"/assets/blog/web-support/url-integration.mp4",type:"video/mp4"})),Object(r.b)("p",null,"In native apps, it's already possible to navigate to a screen in the app using a URL via deep links. React Navigation can handle deep links if you provide a configuration in the ",Object(r.b)("inlineCode",{parentName:"p"},"linking")," prop of ",Object(r.b)("inlineCode",{parentName:"p"},"NavigationContainer"),". We now reuse the same configuration for URL integration in browsers. It also works for updating the URL in the browser when users navigates in the app. So if you have configured deep links in your app already, it'll work with URL integration on the web without any changes \ud83e\udd73"),Object(r.b)("p",null,"By default, we'll reuse the route names as paths if you've provided ",Object(r.b)("inlineCode",{parentName:"p"},"linking={{ enabled: true }}")," without any extra configuration. However, you can also customize how the paths and params are parsed by providing mappings under the ",Object(r.b)("inlineCode",{parentName:"p"},"config")," property."),Object(r.b)("p",null,"Example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const linking = {\n  prefixes: ['https://mychat.com', 'mychat://'],\n  config: {\n    screens: {\n      Home: '',\n      Profile: ':id/profile',\n      Settings: ':id/blog',\n    }\n  },\n};\n\nfunction App() {\n  return (\n    <NavigationContainer linking={linking} fallback={<SplashScreen />}>\n      <Stack.Navigator>\n        <Stack.Screen name=\"Home\" component={Home} />\n        <Stack.Screen name=\"Profile\" component={Profile} />\n        <Stack.Screen name=\"Settings\" component={Settings} />\n      </Stack.Navigator>\n    </NavigationContainer>\n  );\n}\n")),Object(r.b)("p",null,"We have a ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/configuring-links/#playground"}),"playground")," where you can try custom configurations and see how it's parsed. Give it a try, and we hope it'll make it easier for you to configure links in your apps."),Object(r.b)("p",null,"There's a new ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/link"}),Object(r.b)("inlineCode",{parentName:"a"},"<Link />")," component")," which lets you use URLs for navigation in the app."),Object(r.b)("p",null,"Example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'<Link to="/profile/jane">Go to Jane\'s profile</Link>\n')),Object(r.b)("p",null,'When you use this component, it renders anchor tags on the web. This means that users can use the same patterns that they are used to on the web, such as "Open in new tab", "Copy link address" etc.'),Object(r.b)("p",null,"Special thanks to ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/osdnk"}),"Micha\u0142")," and ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/WoLewicki"}),"Wojciech")," for their extensive work on URL integration."),Object(r.b)("h2",{id:"improvements-to-the-navigators"},"Improvements to the navigators"),Object(r.b)("p",null,"URL integration isn't enough to have proper web support. The navigators also need to feel at home on the web. We have made several improvements to the built-in navigators so that they behave as you expect on the web."),Object(r.b)("h3",{id:"anchor-tags-in-tabs-and-drawer"},"Anchor tags in tabs and drawer"),Object(r.b)("p",null,"The first change is using anchor tags. When you use built-in navigators such as drawer navigator and tab navigator, they render anchor tags for the drawer and tab items respectively when you have linking configured. This means that they behave the same as normal links on the web."),Object(r.b)("img",{src:"/assets/blog/web-support/link-right-click.png",height:"427"}),Object(r.b)("h3",{id:"no-gestures-and-animations"},"No gestures and animations"),Object(r.b)("p",null,"Another change is the removal of gestures on the web. Gestures are not commonly used on the web because they conflict with a lot of browser functionality and system gestures. For example, in Safari, you can swipe to go back to the previous page. Android has a system gesture to go back to previous pages too. Because of this, we've removed gestures on the web."),Object(r.b)("p",null,"We've also disabled animations on the web by default since they are not commonly used and can be jarring, especially on larger screens. The animations in React Native Web also run entirely in JS, and tend not to be very performant on the web. So we've decided to disable them by default to better overall experience."),Object(r.b)("h3",{id:"hide-address-bar-on-scroll"},"Hide address bar on scroll"),Object(r.b)("p",null,"Phones have small screens, so it's important to maximize the use of available screen size. One of the ways mobile browsers achieve it is by hiding and showing the address bar when scrolling to give more vertical space to the content."),Object(r.b)("p",null,"It's especially important in case of the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/stack-navigator"}),"stack navigator")," because not only we have the browser's address bar, but also the header at the top which is taking vertical space. Now we'll automatically adjust the styles of the stack navigator to get this behavior without you having to write any special code."),Object(r.b)("video",{playsInline:!0,autoPlay:!0,muted:!0,loop:!0,style:{maxWidth:"100%"}},Object(r.b)("source",{src:"/assets/blog/web-support/hide-addressbar.mp4",type:"video/mp4"})),Object(r.b)("h3",{id:"permanent-drawer"},"Permanent drawer"),Object(r.b)("p",null,"Another way we can make maximum us of the available screen size is by making our UIs adapt to different screen sizes. For example, we may want to show a sidebar for navigation on large screens while switching to a drawer on smaller screens. You can now specify ",Object(r.b)("inlineCode",{parentName:"p"},"drawerType")," as ",Object(r.b)("inlineCode",{parentName:"p"},"permanent")," to show an always visible sidebar. See the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/drawer-navigator#drawertype"}),"documentation for ",Object(r.b)("inlineCode",{parentName:"a"},"drawerType"))," for example code on how to achieve it."),Object(r.b)("video",{playsInline:!0,autoPlay:!0,muted:!0,loop:!0,style:{maxWidth:"100%"}},Object(r.b)("source",{src:"/assets/blog/web-support/permanent-drawer.mp4",type:"video/mp4"})),Object(r.b)("p",null,"Special thanks to ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://twitter.com/noemi_rozpara"}),"Noemi")," for implementing this feature."),Object(r.b)("h2",{id:"whats-next"},"What's next?"),Object(r.b)("p",null,"This is just a start. We still need to figure out many things, such as SSR, handling of 404 etc. There is still a lot to do, but we\u2019re excited to announce it and looking forward to feedback and bug reports."),Object(r.b)("p",null,"Take a look at the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/web-support"}),"documentation")," to give it a try and let us know what you think. You can also ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://react-navigation-example.netlify.app/"}),"check the example app")," to see a live demo of web support."))}p.isMDXComponent=!0}}]);