/*! For license information please see 238.03314fd2.chunk.js.LICENSE.txt */
(self.webpackChunkmodular_engine_app=self.webpackChunkmodular_engine_app||[]).push([[238],{6123:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)){if(n.length){var c=o.apply(null,n);c&&e.push(c)}}else if("object"===a)if(n.toString===Object.prototype.toString)for(var l in n)r.call(n,l)&&n[l]&&e.push(l);else e.push(n.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},7861:function(e,t,n){"use strict";var r=n(9456),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},c={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},l={};function i(e){return r.isMemo(e)?c:l[e.$$typeof]||o}l[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},l[r.Memo]=c;var s=Object.defineProperty,u=Object.getOwnPropertyNames,f=Object.getOwnPropertySymbols,d=Object.getOwnPropertyDescriptor,m=Object.getPrototypeOf,p=Object.prototype;e.exports=function e(t,n,r){if("string"!==typeof n){if(p){var o=m(n);o&&o!==p&&e(t,o,r)}var c=u(n);f&&(c=c.concat(f(n)));for(var l=i(t),v=i(n),y=0;y<c.length;++y){var h=c[y];if(!a[h]&&(!r||!r[h])&&(!v||!v[h])&&(!l||!l[h])){var b=d(n,h);try{s(t,h,b)}catch(g){}}}}return t}},229:function(e,t){"use strict";var n="function"===typeof Symbol&&Symbol.for,r=n?Symbol.for("react.element"):60103,o=n?Symbol.for("react.portal"):60106,a=n?Symbol.for("react.fragment"):60107,c=n?Symbol.for("react.strict_mode"):60108,l=n?Symbol.for("react.profiler"):60114,i=n?Symbol.for("react.provider"):60109,s=n?Symbol.for("react.context"):60110,u=n?Symbol.for("react.async_mode"):60111,f=n?Symbol.for("react.concurrent_mode"):60111,d=n?Symbol.for("react.forward_ref"):60112,m=n?Symbol.for("react.suspense"):60113,p=n?Symbol.for("react.suspense_list"):60120,v=n?Symbol.for("react.memo"):60115,y=n?Symbol.for("react.lazy"):60116,h=n?Symbol.for("react.block"):60121,b=n?Symbol.for("react.fundamental"):60117,g=n?Symbol.for("react.responder"):60118,E=n?Symbol.for("react.scope"):60119;function w(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case u:case f:case a:case l:case c:case m:return e;default:switch(e=e&&e.$$typeof){case s:case d:case y:case v:case i:return e;default:return t}}case o:return t}}}function x(e){return w(e)===f}t.AsyncMode=u,t.ConcurrentMode=f,t.ContextConsumer=s,t.ContextProvider=i,t.Element=r,t.ForwardRef=d,t.Fragment=a,t.Lazy=y,t.Memo=v,t.Portal=o,t.Profiler=l,t.StrictMode=c,t.Suspense=m,t.isAsyncMode=function(e){return x(e)||w(e)===u},t.isConcurrentMode=x,t.isContextConsumer=function(e){return w(e)===s},t.isContextProvider=function(e){return w(e)===i},t.isElement=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return w(e)===d},t.isFragment=function(e){return w(e)===a},t.isLazy=function(e){return w(e)===y},t.isMemo=function(e){return w(e)===v},t.isPortal=function(e){return w(e)===o},t.isProfiler=function(e){return w(e)===l},t.isStrictMode=function(e){return w(e)===c},t.isSuspense=function(e){return w(e)===m},t.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===a||e===f||e===l||e===c||e===m||e===p||"object"===typeof e&&null!==e&&(e.$$typeof===y||e.$$typeof===v||e.$$typeof===i||e.$$typeof===s||e.$$typeof===d||e.$$typeof===b||e.$$typeof===g||e.$$typeof===E||e.$$typeof===h)},t.typeOf=w},9456:function(e,t,n){"use strict";e.exports=n(229)},4240:function(e,t,n){"use strict";n.d(t,{$:function(){return g}});var r=n(3878);var o=n(181),a=n(5267);function c(e,t){return(0,r.Z)(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],c=!0,l=!1;try{for(n=n.call(e);!(c=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);c=!0);}catch(i){l=!0,o=i}finally{try{c||null==n.return||n.return()}finally{if(l)throw o}}return a}}(e,t)||(0,o.Z)(e,t)||(0,a.Z)()}var l=n(4942),i=n(7313),s=n(412);function u(){if(console&&console.warn){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];"string"===typeof n[0]&&(n[0]="react-i18next:: ".concat(n[0])),(e=console).warn.apply(e,n)}}var f={};function d(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];"string"===typeof t[0]&&f[t[0]]||("string"===typeof t[0]&&(f[t[0]]=new Date),u.apply(void 0,t))}function m(e,t,n){e.loadNamespaces(t,(function(){if(e.isInitialized)n();else{e.on("initialized",(function t(){setTimeout((function(){e.off("initialized",t)}),0),n()}))}}))}function p(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=t.languages[0],o=!!t.options&&t.options.fallbackLng,a=t.languages[t.languages.length-1];if("cimode"===r.toLowerCase())return!0;var c=function(e,n){var r=t.services.backendConnector.state["".concat(e,"|").concat(n)];return-1===r||2===r};return!(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!c(t.isLanguageChangingTo,e))&&(!!t.hasResourceBundle(r,e)||(!(t.services.backendConnector.backend&&(!t.options.resources||t.options.partialBundledLanguages))||!(!c(r,e)||o&&!c(a,e))))}function v(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!t.languages||!t.languages.length)return d("i18n.languages were undefined or empty",t.languages),!0;var r=void 0!==t.options.ignoreJSONStructure;return r?t.hasLoadedNamespace(e,{precheck:function(t,r){if(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!r(t.isLanguageChangingTo,e))return!1}}):p(e,t,n)}function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){(0,l.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var b=function(e,t){var n=(0,i.useRef)();return(0,i.useEffect)((function(){n.current=t?n.current:e}),[e,t]),n.current};function g(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.i18n,r=(0,i.useContext)(s.OO)||{},o=r.i18n,a=r.defaultNS,l=n||o||(0,s.nI)();if(l&&!l.reportNamespaces&&(l.reportNamespaces=new s.zv),!l){d("You will need to pass in an i18next instance by using initReactI18next");var u=function(e){return Array.isArray(e)?e[e.length-1]:e},f=[u,{},!1];return f.t=u,f.i18n={},f.ready=!1,f}l.options.react&&void 0!==l.options.react.wait&&d("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var p=h(h(h({},(0,s.JP)()),l.options.react),t),y=p.useSuspense,g=p.keyPrefix,E=e||a||l.options&&l.options.defaultNS;E="string"===typeof E?[E]:E||["translation"],l.reportNamespaces.addUsedNamespaces&&l.reportNamespaces.addUsedNamespaces(E);var w=(l.isInitialized||l.initializedStoreOnce)&&E.every((function(e){return v(e,l,p)}));function x(){return l.getFixedT(null,"fallback"===p.nsMode?E:E[0],g)}var k=(0,i.useState)(x),N=c(k,2),S=N[0],_=N[1],C=E.join(),O=b(C),P=(0,i.useRef)(!0);(0,i.useEffect)((function(){var e=p.bindI18n,t=p.bindI18nStore;function n(){P.current&&_(x)}return P.current=!0,w||y||m(l,E,(function(){P.current&&_(x)})),w&&O&&O!==C&&P.current&&_(x),e&&l&&l.on(e,n),t&&l&&l.store.on(t,n),function(){P.current=!1,e&&l&&e.split(" ").forEach((function(e){return l.off(e,n)})),t&&l&&t.split(" ").forEach((function(e){return l.store.off(e,n)}))}}),[l,C]);var M=(0,i.useRef)(!0);(0,i.useEffect)((function(){P.current&&!M.current&&_(x),M.current=!1}),[l]);var z=[S,l,w];if(z.t=S,z.i18n=l,z.ready=w,w)return z;if(!w&&!y)return z;throw new Promise((function(e){m(l,E,(function(){e()}))}))}},1624:function(e,t){"use strict";var n=60103,r=60106,o=60107,a=60108,c=60114,l=60109,i=60110,s=60112,u=60113,f=60120,d=60115,m=60116,p=60121,v=60122,y=60117,h=60129,b=60131;if("function"===typeof Symbol&&Symbol.for){var g=Symbol.for;n=g("react.element"),r=g("react.portal"),o=g("react.fragment"),a=g("react.strict_mode"),c=g("react.profiler"),l=g("react.provider"),i=g("react.context"),s=g("react.forward_ref"),u=g("react.suspense"),f=g("react.suspense_list"),d=g("react.memo"),m=g("react.lazy"),p=g("react.block"),v=g("react.server.block"),y=g("react.fundamental"),h=g("react.debug_trace_mode"),b=g("react.legacy_hidden")}function E(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case o:case c:case a:case u:case f:return e;default:switch(e=e&&e.$$typeof){case i:case s:case m:case d:case l:return e;default:return t}}case r:return t}}}},6214:function(e,t,n){"use strict";n(1624)},6352:function(e,t,n){"use strict";n.d(t,{zt:function(){return u},I0:function(){return v},v9:function(){return g}});var r=n(7313),o=r.createContext(null);var a=function(e){e()},c=function(){return a};var l={notify:function(){},get:function(){return[]}};function i(e,t){var n,r=l;function o(){i.onStateChange&&i.onStateChange()}function a(){n||(n=t?t.addNestedSub(o):e.subscribe(o),r=function(){var e=c(),t=null,n=null;return{clear:function(){t=null,n=null},notify:function(){e((function(){for(var e=t;e;)e.callback(),e=e.next}))},get:function(){for(var e=[],n=t;n;)e.push(n),n=n.next;return e},subscribe:function(e){var r=!0,o=n={callback:e,next:null,prev:n};return o.prev?o.prev.next=o:t=o,function(){r&&null!==t&&(r=!1,o.next?o.next.prev=o.prev:n=o.prev,o.prev?o.prev.next=o.next:t=o.next)}}}}())}var i={addNestedSub:function(e){return a(),r.subscribe(e)},notifyNestedSubs:function(){r.notify()},handleChangeWrapper:o,isSubscribed:function(){return Boolean(n)},trySubscribe:a,tryUnsubscribe:function(){n&&(n(),n=void 0,r.clear(),r=l)},getListeners:function(){return r}};return i}var s="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement?r.useLayoutEffect:r.useEffect;var u=function(e){var t=e.store,n=e.context,a=e.children,c=(0,r.useMemo)((function(){var e=i(t);return{store:t,subscription:e}}),[t]),l=(0,r.useMemo)((function(){return t.getState()}),[t]);s((function(){var e=c.subscription;return e.onStateChange=e.notifyNestedSubs,e.trySubscribe(),l!==t.getState()&&e.notifyNestedSubs(),function(){e.tryUnsubscribe(),e.onStateChange=null}}),[c,l]);var u=n||o;return r.createElement(u.Provider,{value:c},a)};n(7861),n(6214);n(7462);function f(){return(0,r.useContext)(o)}function d(e){void 0===e&&(e=o);var t=e===o?f:function(){return(0,r.useContext)(e)};return function(){return t().store}}var m=d();function p(e){void 0===e&&(e=o);var t=e===o?m:d(e);return function(){return t().dispatch}}var v=p(),y=function(e,t){return e===t};function h(e){void 0===e&&(e=o);var t=e===o?f:function(){return(0,r.useContext)(e)};return function(e,n){void 0===n&&(n=y);var o=t(),a=function(e,t,n,o){var a,c=(0,r.useReducer)((function(e){return e+1}),0)[1],l=(0,r.useMemo)((function(){return i(n,o)}),[n,o]),u=(0,r.useRef)(),f=(0,r.useRef)(),d=(0,r.useRef)(),m=(0,r.useRef)(),p=n.getState();try{if(e!==f.current||p!==d.current||u.current){var v=e(p);a=void 0!==m.current&&t(v,m.current)?m.current:v}else a=m.current}catch(y){throw u.current&&(y.message+="\nThe error may be correlated with this previous error:\n"+u.current.stack+"\n\n"),y}return s((function(){f.current=e,d.current=p,m.current=a,u.current=void 0})),s((function(){function e(){try{var e=n.getState();if(e===d.current)return;var r=f.current(e);if(t(r,m.current))return;m.current=r,d.current=e}catch(y){u.current=y}c()}return l.onStateChange=e,l.trySubscribe(),e(),function(){return l.tryUnsubscribe()}}),[n,l]),a}(e,n,o.store,o.subscription);return(0,r.useDebugValue)(a),a}}var b,g=h(),E=n(1168);b=E.unstable_batchedUpdates,a=b},5918:function(e,t,n){"use strict";n(1843);var r=n(7313),o=60103;if(60107,"function"===typeof Symbol&&Symbol.for){var a=Symbol.for;o=a("react.element"),a("react.fragment")}var c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l=Object.prototype.hasOwnProperty,i={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,n){var r,a={},s=null,u=null;for(r in void 0!==n&&(s=""+n),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(u=t.ref),t)l.call(t,r)&&!i.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:o,type:e,key:s,ref:u,props:a,_owner:c.current}}t.jsx=s,t.jsxs=s},6417:function(e,t,n){"use strict";e.exports=n(5918)},529:function(e,t,n){"use strict";n.d(t,{zx:function(){return s},Zb:function(){return b},wh:function(){return m},W2:function(){return g},iz:function(){return p},dy:function(){return w},Lt:function(){return x},rU:function(){return v},u_:function(){return k},ZD:function(){return h}});var r=n(7313),o=n(6123),a=function(){return a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},a.apply(this,arguments)};function c(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}var l=function(e){var t=e.name,n=e.Component,c=e.commonProps,l=e.additionalProps,i=e.wrapper||"div";return r.createElement(i,a({"data-id":c.id,id:t,className:o(c.className,{dark:c.dark,"component-hidden":c.hide,shadowed:c.shadow,styled:!c.unstyled}),style:c.style},l),n)},i=function(e){var t=e.value,n=e.defaultValue,i=e.label,s=e.callBack,u=t||n,f=r.useState(u),d=f[0],m=f[1];r.useEffect((function(){void 0!==t&&null!==t&&m(t)}),[t]);var p=s(d,m),v=p.commonProps,y=p.additionalProps,h=c(p,["commonProps","additionalProps"]);return l(a(a({},h),{commonProps:a(a({},v),{shadow:!1,className:void 0}),Component:r.createElement("div",{className:"box-component"},i&&r.createElement("div",{className:"box-label"},i),r.createElement("div",a({className:o(v.className,{shadowed:v.shadow},"container")},y),h.Component))}))},s=function(e){var t=e.disabled,n=e.children,a=e.onClick,i=e.className,s=e.onMouseEnter,u=e.onMouseLeave,f=c(e,["disabled","children","onClick","className","onMouseEnter","onMouseLeave"]);return l({name:"modular-button",Component:r.createElement("button",{"data-id":f.id,disabled:t,onClick:a,onMouseEnter:s,onMouseLeave:u,className:o(i,{disabled:t,enabled:!t})},n),commonProps:f})},u={common:{DEFAULT_VALUE:"#FFFFF",STRING:"#f6713c"},javascript:{import:"#d81313",from:"#d81313",if:"#d81313",else:"#d81313",try:"#d81313",catch:"#d81313",while:"#d81313",export:"#d81313",default:"#3b82f6",const:"#2432f5",COMPONENT_DECLARATION:"#3b82f6"},python:{pip:"#5b9306"},terminal:{sh:"#5b9306",npm:"#5b9306",node:"#5b9306",git:"#5b9306","gh-pages":"#5b9306",docker:"#5b9306"}},f={javascript:null,common:null,python:null,terminal:null},d=function(e,t){return function(e,t){var n=t,r=[];return e.filter((function(e){return e.code.length>0})).forEach((function(e){e.color?r.push(e):e.code.split(" ").forEach((function(e){r.push({color:u[n][e]||u.common[e]||u.common.DEFAULT_VALUE,code:"".concat(e," ")})}))})),r}(function(e,t){var n=[];return e.split(/(\'.+?\')/g).forEach((function(e,r){r%2!==0?n.push({code:e,color:u.common.STRING}):e.split(/(\".+?\")/g).forEach((function(e,r){r%2!==0?n.push({code:e,color:u.common.STRING}):t?t(e).forEach((function(e){return n.push(e)})):n.push({code:e,color:null})}))})),n}(e,f[t]),t)},m=function(e){var t=e.value,n=e.enhanced,o=e.environment,a=e.label,l=c(e,["value","enhanced","environment","label"]);return i({defaultValue:"",value:t,label:a,callBack:function(e,t){var a=o||"terminal";return{name:"modular-codebox",Component:r.createElement("div",null,n&&r.createElement("div",{key:"key_icon",className:"copy-icon"},r.createElement(s,{unstyled:!0,onClick:function(){return navigator.clipboard.writeText(e)}},r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 60 60",width:"25px",height:"25px",version:"1.0"},r.createElement("rect",{strokeLinejoin:"round",fillRule:"evenodd",stroke:"#4c4c4c",strokeWidth:"3.125",fill:"#ccc",rx:"2.4745",height:"36.513",width:"34.732",y:"4.5767",x:"5.0385"}),r.createElement("rect",{strokeLinejoin:"round",fillRule:"evenodd",stroke:"#4c4c4c",strokeWidth:"3.125",fill:"#b3b3b3",rx:"2.4745",height:"36.513",width:"34.732",y:"20.161",x:"20.178"}),r.createElement("path",{strokeLinejoin:"round",fillRule:"evenodd",stroke:"#333",strokeLinecap:"round",strokeWidth:"3.125",fill:"#7f7f7f",d:"M10.971 22.475C19.445 41.064 33.797 36.69 33.934 36.69v-6.15l8.269 9.459-8.338 8.788v-6.219s-19.887 4.647-22.894-20.093z"})))),r.createElement("code",{key:"code",className:"code"},n?d(e,a).map((function(e,t){return r.createElement("span",{key:"code-block_".concat(a,"_").concat(t),style:{color:e.color}},"".concat(e.code))})):e)),commonProps:l}}})},p=function(e){return l({name:"modular-divider",commonProps:e})},v=function(e){var t=e.to,n=e.children,r=e.newTab,o=c(e,["to","children","newTab"]);return l({name:"modular-link",Component:n,commonProps:o,additionalProps:{href:t,target:r?"_blank":void 0},wrapper:"a"})},y=r.createElement("svg",{x:0,y:0,viewBox:"0 0 64 64",xmlSpace:"preserve",width:"30px",height:"30px"},r.createElement("circle",{cx:32,cy:32,r:32,fill:"var(--svgexternalcolor)"}),r.createElement("g",{className:"wrapper"},r.createElement("path",{className:"external",d:"M32 52c-9.9 0-18-8.1-18-18 0-6.4 3.4-12.3 8.9-15.5 1-.6 2.2-.2 2.7.7.6 1 .2 2.2-.7 2.7C20.7 24.4 18 29.1 18 34c0 7.7 6.3 14 14 14s14-6.3 14-14c0-5.1-2.7-9.7-7.2-12.2-1-.5-1.3-1.8-.8-2.7.5-1 1.8-1.3 2.7-.8C46.5 21.5 50 27.5 50 34c0 9.9-8.1 18-18 18z"})),r.createElement("g",{className:"wrapper"},r.createElement("path",{className:"external",d:"M32 36c-1.1 0-2-.9-2-2V14c0-1.1.9-2 2-2s2 .9 2 2v20c0 1.1-.9 2-2 2z"})),r.createElement("path",{className:"internal",d:"M39.8 18c4.9 2.7 8.2 8 8.2 14 0 8.8-7.2 16-16 16s-16-7.2-16-16c0-5.9 3.2-11 7.9-13.8M32 32V12"})),h=function(e){var t=e.value,n=e.icon,a=e.onChange,l=e.className,s=e.shadow,u=e.label,f=e.offIcon,d=e.onIcon,m=c(e,["value","icon","onChange","className","shadow","label","offIcon","onIcon"]),p=n||y,v=!0===t?d||p:f||p;return i({callBack:function(e,t){return{name:"modular-toggle",Component:r.createElement("div",{className:o("toggle-icon",{flip:!e,"flip-back":e})},v),commonProps:m,additionalProps:{onClick:function(){a&&a(!e),t(e)},className:o("container",l,{off:!e,shadowed:s})}}},defaultValue:!0,value:t,label:u})},b=function(e){var t=e.icon,n=e.header,o=e.body,l=e.footer,s=e.children;e.className;var u=e.label,f=c(e,["icon","header","body","footer","children","className","label"]);return i({callBack:function(){return{name:"modular-card",Component:[n&&r.createElement("div",{key:"modular_card_header"},r.createElement("div",{className:"container-header"},t,r.createElement("div",{className:"header"},n)),r.createElement(p,null)),r.createElement("div",{className:"body",key:"modular_card_body"},o),s,l&&r.createElement("div",{key:"modular_card_footer"},r.createElement(p,null),r.createElement("div",{className:"footer"},l))],commonProps:a({},f)}},defaultValue:"",label:u})},g=(r.createElement("svg",{viewBox:"0 0 194.22 184.73",width:"30px",height:"30px",className:"icon"},r.createElement("path",{d:"M157.096 184.718l-60.01-31.565-60.025 31.542 11.476-66.828-48.546-47.34 67.103-9.737L97.115-.008l29.997 60.811 67.099 9.764-48.564 47.319z",fill:"#fc0"}),r.createElement("path",{d:"M127.315 60.416l-30.72 41.819 97.411-31.899z",fill:"#ffe680"}),r.createElement("path",{d:"M97.095 101.346v51.942l-60.63 31.117zM97.095 101.346l59.613 81.476-11.189-65.984z",fill:"#fd5"}),r.createElement("path",{d:"M.385 70.406L97.1 101.348 67.218 60.506z",fill:"#ffe680"}),r.createElement("path",{d:"M97.095 101.346V.126l29.83 60.357z",fill:"#fd5"}),r.createElement("path",{d:"M37.085 183.566l11.261-66.541 48.757-15.679z",fill:"#ffd42a"})),r.createElement("svg",{viewBox:"0 0 122.88 117.42",width:"30px",height:"30px",className:"icon"},r.createElement("path",{d:"M66.71 3.55L81.1 37.26l36.58 3.28v-.01c1.55.13 2.91.89 3.85 2.01a5.663 5.663 0 011.32 4.13v.01a5.673 5.673 0 01-1.69 3.57c-.12.13-.25.25-.39.36L93.25 74.64l8.19 35.83c.35 1.53.05 3.06-.73 4.29a5.652 5.652 0 01-3.54 2.52l-.14.03c-.71.14-1.43.15-2.12.02v.01c-.75-.13-1.47-.42-2.11-.84l-.05-.03-31.3-18.71-31.55 18.86a5.664 5.664 0 01-7.79-1.96c-.38-.64-.62-1.33-.73-2.02-.1-.63-.09-1.27.02-1.89.02-.13.04-.27.08-.4l8.16-35.7c-9.24-8.07-18.74-16.1-27.83-24.3l-.08-.08a5.64 5.64 0 01-1.72-3.7c-.1-1.45.36-2.93 1.4-4.12l.12-.13.08-.08a5.668 5.668 0 013.77-1.72h.06l36.34-3.26 14.44-33.8c.61-1.44 1.76-2.5 3.11-3.05 1.35-.54 2.9-.57 4.34.04.69.29 1.3.71 1.8 1.22.53.53.94 1.15 1.22 1.82l.02.06zm10.19 37.2L61.85 5.51a.42.42 0 00-.09-.14.42.42 0 00-.14-.09.427.427 0 00-.35 0c-.1.04-.19.12-.24.24L45.98 40.75c-.37.86-1.18 1.49-2.18 1.58l-37.9 3.4c-.08.01-.16.02-.24.02-.06 0-.13.02-.18.05-.03.01-.05.03-.07.05l-.1.12c-.05.08-.07.17-.06.26.01.09.04.18.09.25.06.05.13.11.19.17l28.63 25c.77.61 1.17 1.62.94 2.65l-8.51 37.22-.03.14c-.01.06-.02.12-.01.17a.454.454 0 00.33.36c.12.03.24.02.34-.04l32.85-19.64c.8-.5 1.85-.54 2.72-.02L95.43 112c.08.04.16.09.24.14.05.03.1.05.16.06v.01c.04.01.09.01.14 0l.04-.01c.12-.03.22-.1.28-.2.06-.09.08-.21.05-.33L87.8 74.28a2.6 2.6 0 01.83-2.55l28.86-25.2c.04-.03.07-.08.1-.13.02-.04.03-.1.04-.17a.497.497 0 00-.09-.33.48.48 0 00-.3-.15v-.01c-.01 0-.03 0-.03-.01l-37.97-3.41c-1-.01-1.93-.6-2.34-1.57z",fill:"#ffcf00"})),r.createElement("svg",{viewBox:"0 0 640 480",width:"30px",height:"30px",className:"icon"},r.createElement("defs",null,r.createElement("linearGradient",{id:"prefix__a"},r.createElement("stop",{stopColor:"#fff",offset:0}),r.createElement("stop",{stopColor:"#fff",stopOpacity:0,offset:1})),r.createElement("linearGradient",{y2:.892,x2:.5,y1:0,x1:.5,id:"prefix__b",xlinkHref:"#prefix__a"})),r.createElement("g",{fill:"#fff"},r.createElement("path",{d:"M223.68 193.958h225.4V389h-225.4z"}),r.createElement("path",{d:"M178.596 215.074s156.274-108.026 156.35-109.797c.075-1.772 151.033 106.496 151.033 106.496l-307.383 3.301z"})),r.createElement("circle",{fill:"#ff7f00",cx:330,cy:242,r:230}),r.createElement("path",{opacity:.75,fill:"url(#prefix__b)",fillRule:"evenodd",d:"M527.64 189.227a196.774 157.93 0 11-393.549 0 196.774 157.93 0 11393.55 0z"})),r.createElement("svg",{viewBox:"0 0 400 400",width:"30px",height:"30px",className:"icon"},r.createElement("path",{d:"M349.417 199.627c0 82.844-67.16 150.003-150.004 150.003S49.41 282.471 49.41 199.627 116.57 49.624 199.413 49.624s150.004 67.158 150.004 150.003z",fill:"#999"}),r.createElement("path",{transform:"matrix(2.7878 0 0 2.7878 -647.405 -765.254)",d:"M356.79 346.11c0 29.291-23.745 53.036-53.036 53.036s-53.036-23.745-53.036-53.036 23.745-53.036 53.036-53.036 53.036 23.745 53.036 53.036z",fill:"url(#prefix__b)"}),r.createElement("path",{transform:"matrix(2.53784 0 0 2.53784 -571.472 -678.737)",d:"M356.79 346.11c0 29.291-23.745 53.036-53.036 53.036s-53.036-23.745-53.036-53.036 23.745-53.036 53.036-53.036 53.036 23.745 53.036 53.036z",fill:"#ececec",filter:"url(#prefix__c)"}),r.createElement("path",{transform:"translate(-540.441 -643.38) scale(2.43566)",d:"M356.79 346.11c0 29.291-23.745 53.036-53.036 53.036s-53.036-23.745-53.036-53.036 23.745-53.036 53.036-53.036 53.036 23.745 53.036 53.036z",fill:"#999",filter:"url(#prefix__c)"}),r.createElement("path",{transform:"matrix(2.34121 0 0 2.34121 -511.747 -610.697)",d:"M356.79 346.11c0 29.291-23.745 53.036-53.036 53.036s-53.036-23.745-53.036-53.036 23.745-53.036 53.036-53.036 53.036 23.745 53.036 53.036z",fill:"url(#prefix__e)"}),r.createElement("path",{d:"M193.79 862.76c-13.331.3-26.186 7.358-33.336 19.742-7.69 13.32-6.714 29.266 1.155 41.331.853-26.532 21.132-46.515 46.324-45.054 8.258.48 16.054 3.2 22.859 7.59a39.222 39.222 0 00-16.394-18.326 39.368 39.368 0 00-20.608-5.282z",fill:"url(#prefix__e)",opacity:.318,transform:"translate(-366.51 -2423.6) scale(2.9052)"})),function(e){var t=e.children,n=e.wrapper,r=e.animated,i=c(e,["children","wrapper","animated"]);return l({name:"modular-container",Component:t,commonProps:a(a({},i),{className:o(i.className,{animated:r&&!i.hide})}),wrapper:n})}),E=["right","left","top","bottom","top-left","top-right","bottom-left","bottom-right"],w=function(e){var t=e.children,n=e.onClose,i=e.hide,u=e.className,f=e.position,d=c(e,["children","onClose","hide","className","position"]),m=f&&E.includes(f)?f:"left";return l({name:"modular-drawer",commonProps:a(a({},d),{className:o(m,{"ease-in":!i,"ease-out":i},u)}),Component:r.createElement("div",{className:"container-internal"},r.createElement("div",{className:"buttons-panel"},r.createElement(s,{dark:d.dark,unstyled:!0,id:"drawer_close_button",onClick:function(){n()},className:"close-button"},r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"37",viewBox:"0 0 11 18"},r.createElement("path",{d:"M8.6812.1963l2.1208928 2.120293-8.484 8.4864L.1972 8.6827z"}),r.createElement("path",{d:"M10.8032656 15.0470656l-2.1213 2.1213-8.4852-8.4852 2.1213-2.1213z"})))),r.createElement("div",{className:"elements"},t))})},x=function(e){var t=e.content,n=void 0===t?[]:t,a=e.onChange,l=e.value,u=e.label,f=c(e,["content","onChange","value","label"]),d=r.useState(!1),m=d[0],p=d[1];return i({defaultValue:0,value:l,label:u,callBack:function(e,t){var c=n[e]||{name:"",icon:r.createElement("div",null)};return{name:"modular-dropdown",Component:[r.createElement(s,{unstyled:!0,onClick:function(){p(!m)},dark:f.dark,className:"button",id:"options-menu",key:"options-menu"},r.createElement("div",{key:"label",className:"label"},r.createElement("div",{className:"label"},c.icon),r.createElement("div",{className:"label"},c.name)),r.createElement("div",{key:"icon",className:o("icon",{rotate:m,"rotate-back":!m})},r.createElement("p",null,r.createElement("i",{className:"arrow-icon"})))),r.createElement(g,{key:"options",animated:!0,shadow:f.shadow,dark:f.dark,hide:!m,className:"options"},n.map((function(e,c){return r.createElement("div",{key:"dropdown_option_".concat(c),className:"option"},r.createElement(s,{unstyled:!0,id:"dropdown_option_".concat(c),onClick:function(){a&&a(c),t(c),p(!1)},key:"item_".concat(c),className:o("regular",{first:0===c,last:c===n.length-1})},r.createElement("div",{className:"content"},e.icon,r.createElement("div",{className:"label"},e.name))))})))],commonProps:f}}})},k=function(e){var t=e.children,n=e.onClose,o=e.title,a=c(e,["children","onClose","title"]);return i({callBack:function(){return{name:"modular-modal",Component:[r.createElement("div",{className:"header",key:"modal_header"},r.createElement("div",{className:"title"},o),n&&r.createElement(s,{dark:a.dark,unstyled:!0,className:"close-button",onClick:n},r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 400 400",version:"1.0",height:"1.6rem",width:"1.6rem"},r.createElement("path",{fill:"var(--modular-text-color)",d:"m119.7496 67.5187-52.186 52.186 69.5301 69.5012c5.9668 5.9667 5.9668 15.5958 0 21.5625l-69.53 69.53 52.186 52.186 69.53-69.53c5.9667-5.9668 15.5958-5.9668 21.5625 0l69.53 69.53 52.186-52.186-69.53-69.53c-5.9668-5.9667-5.9668-15.5958 0-21.5625l69.53-69.5013-52.186-52.186-69.53 69.5013c-5.9667 5.9667-15.5958 5.9667-21.5625 0l-69.53-69.5012z"})))),r.createElement("div",{className:"content",key:"modal_content"},t)],commonProps:a}}})};r.createElement("svg",{"data-id":"loading-icon",id:"Layer_1",version:"1.1",viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",xmlSpace:"preserve",className:"rotating"},r.createElement("path",{className:"st0",d:"M281.6 409.6c28.3 0 51.2 22.9 51.2 51.2 0 28.3-22.9 51.2-51.2 51.2s-51.2-22.9-51.2-51.2c0-28.3 22.9-51.2 51.2-51.2zm-160.2-76.8c35.4 0 64 28.7 64 64s-28.6 64-64 64-64-28.6-64-64 28.6-64 64-64zm296.4 12.8c28.3 0 51.2 22.9 51.2 51.2 0 28.3-22.9 51.2-51.2 51.2s-51.2-22.9-51.2-51.2c0-28.3 22.9-51.2 51.2-51.2zm55.8-107c21.2 0 38.4 17.2 38.4 38.4s-17.2 38.4-38.4 38.4-38.4-17.2-38.4-38.4 17.2-38.4 38.4-38.4zM64 153.6c35.3 0 64 28.6 64 64s-28.7 64-64 64-64-28.7-64-64 28.6-64 64-64zm391.3-20.3c14.1 0 25.6 11.5 25.6 25.6 0 14.2-11.5 25.6-25.6 25.6s-25.6-11.4-25.6-25.6c0-14.1 11.5-25.6 25.6-25.6zM204.8 0c42.4 0 76.8 34.4 76.8 76.8s-34.4 76.8-76.8 76.8S128 119.2 128 76.8 162.4 0 204.8 0zm192 76.8c7.1 0 12.8 5.7 12.8 12.8 0 7.1-5.7 12.8-12.8 12.8-7.1 0-12.8-5.7-12.8-12.8 0-7.1 5.7-12.8 12.8-12.8z"})),r.createElement("svg",{viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg","data-id":"success-icon"},r.createElement("defs",null,r.createElement("linearGradient",{id:"a",gradientUnits:"userSpaceOnUse",x1:"258.596",x2:"258.461",y1:"446.746",y2:"64.887"},r.createElement("stop",{offset:"0",stopColor:"#05bc29"}),r.createElement("stop",{offset:"1",stopColor:"#5bf877"}))),r.createElement("path",{d:"m173.898 439.404-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001Z",fill:"url(#a)"})),r.createElement("svg",{version:"1.0",viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg","data-id":"error-icon"},r.createElement("path",{style:{fill:"none",fillRule:"evenodd",stroke:"red",strokeWidth:"18.05195999",strokeLinecap:"butt",strokeLinejoin:"miter",strokeMiterlimit:"4",strokeDasharray:"none",strokeOpacity:"1"},d:"m6.39 6.42 87.19 87.19"}),r.createElement("path",{style:{fill:"none",fillRule:"evenodd",stroke:"red",strokeWidth:"17.80202103",strokeLinecap:"butt",strokeLinejoin:"miter",strokeMiterlimit:"4",strokeDasharray:"none",strokeOpacity:"1"},d:"M6.39 93.61 93.83 6.42"}))}}]);