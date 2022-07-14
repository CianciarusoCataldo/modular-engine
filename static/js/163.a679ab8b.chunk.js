"use strict";(self.webpackChunkmodular_engine_app=self.webpackChunkmodular_engine_app||[]).push([[163],{7028:function(e,n,r){r.d(n,{B:function(){return a}});var t=r(1413),l=r(4457),o=r(529),c=r(6352),s=r(6417),a=function(e){var n=e.selectors,r=(0,c.I0)(),a=function(e){var n=e.name,t=e.selector,a=(0,c.v9)(t);return(0,s.jsx)(o.zx,{className:"m-2",onClick:function(){return r((0,l.h7)("ContextModal",a))},children:n},n)};return(0,s.jsx)("div",{className:"flex flex-col items-center",children:n.map((function(e,n){return(0,s.jsx)("div",{children:(0,s.jsx)(a,(0,t.Z)({},e))},"button_"+n)}))})}},4919:function(e,n,r){r.d(n,{E:function(){return a}});var t=r(4457),l=r(7191),o=r(529),c=r(7028),s=r(6417),a=function(){var e=[{selector:t.r4,name:"getLocalizationConfig"},{selector:(0,l.to)(t.Vb,(function(e){return{languages:e}})),name:"getLanguages"},{selector:(0,l.to)(t.G3,(function(e){return{language:e}})),name:"getLanguage"}];return(0,s.jsx)(o.Zb,{header:"Localization plugin",dark:!0,body:(0,s.jsx)("div",{className:"flex flex-col items-center",children:(0,s.jsx)(c.B,{selectors:e})})},"localization_plugin")}},2795:function(e,n,r){r.d(n,{p:function(){return a}});var t=r(4457),l=r(7191),o=r(529),c=r(7028),s=r(6417),a=function(){var e=[{selector:t.WM,name:"getModalView"},{selector:(0,l.to)(t.mV,(function(e){return{type:e}})),name:"getModalType"},{selector:(0,l.to)(t.gU,(function(e){return{isVisible:e}})),name:"isModalVisible"},{selector:t.Um,name:"getModalContext"}];return(0,s.jsx)(o.Zb,{header:"Modal plugin",dark:!0,body:(0,s.jsx)("div",{className:"flex flex-col items-center",children:(0,s.jsx)(c.B,{selectors:e})})},"modal_plugin")}},1838:function(e,n,r){r.d(n,{e:function(){return s}});var t=r(4457),l=r(529),o=r(7028),c=r(6417),s=function(){var e=[{name:"getRouterView",selector:t.bn},{name:"getRouterPluginConfig",selector:t.Yk},{name:"getRoutes",selector:t.sQ},{name:"getAppBaseName",selector:t.D6},{selector:t.tn,name:"getHomePage"}];return(0,c.jsx)(l.Zb,{header:"Router plugin",dark:!0,body:(0,c.jsx)("div",{className:"flex flex-col items-center",children:(0,c.jsx)(o.B,{selectors:e})})},"router_plugin")}},5945:function(e,n,r){r.d(n,{c:function(){return s}});var t=r(4457),l=r(529),o=r(7028),c=r(6417),s=function(){var e=[{name:"getUiView",selector:t.Yx},{selector:t.N2,name:"isInDarkMode"}];return(0,c.jsx)(l.Zb,{header:"Ui plugin",dark:!0,body:(0,c.jsx)("div",{className:"flex flex-col items-center",children:(0,c.jsx)(o.B,{selectors:e})})},"ui_plugin")}},2030:function(e,n,r){var t=r(7313),l=r(6352),o=r(5718),c=r(8755),s=r(529),a=r(6417);n.Z=function(){var e=(0,l.I0)(),n=(0,l.v9)(c.N2),r=(0,t.useCallback)((function(){e((0,c.C8)(!n))}),[e,n]);return(0,a.jsx)(s.ZD,{onIcon:o.xp,offIcon:o.ce,shadow:!0,dark:n,value:!n,onChange:r,className:"mx-1"})}},7185:function(e,n,r){var t=r(6352),l=r(5718),o=r(4092),c=r(529),s=r(6417);n.Z=function(){var e=(0,t.I0)(),n=(0,t.v9)(o.G3),r=Object.keys(l.hv);return(0,s.jsx)(c.Lt,{dark:!1,value:r.findIndex((function(e){return e===n})),shadow:!0,onChange:function(n){e((0,o.D0)(r[n]))},content:Object.keys(l.hv).map((function(e){return{name:e,icon:l.hv[e]}}))})}},7036:function(e,n,r){r.d(n,{zj:function(){return s},GZ:function(){return m},ge:function(){return j},l6:function(){return p},nz:function(){return w},WY:function(){return N}});var t=r(1413),l=r(529),o=r(1131),c=r(6417),s=function(e){var n=(0,o.v)(l.W2);return(0,c.jsx)(n,(0,t.Z)({},e))},a=r(7313),i=r(6352),u=r(8104),f=r(5323),x=r(8755),d=(0,f.P1)(x.Yx,(function(e){return e.isDrawerOpen})),m=function(e){var n=e.logo,r=e.children,t=e.elements,s=(0,i.I0)(),f=(0,i.v9)(d);a.useEffect((function(){if(f){var e=document.getElementById("modular-drawer");document.getElementById("app-container").onclick=function(n){e&&!e.contains(n.target)&&s((0,u.closeDrawer)())}}else document.getElementById("app-container").onclick=null}),[s,f]);var x=(0,o.v)(l.dy);return(0,c.jsx)(x,{logo:n,hide:!f,onClose:function(){s((0,u.closeDrawer)())},elements:t,children:r})},v=r(6123),g=r.n(v),j=(r(5031),r(4059),r(2030),r(7185),function(e){var n=(0,o.v)(l.__);return(0,c.jsx)(n,(0,t.Z)({},e))}),h=r(6241),p=function(e){var n=e.modals,r=(0,i.I0)(),t=(0,a.useCallback)((function(){r((0,h.Mr)())}),[r]),s=(0,i.v9)(h.mV),u=(0,i.v9)(h.gU),f=s&&n[s]?n[s]:function(){return(0,c.jsx)("div",{})},x=(0,o.v)(l.u_);return(0,c.jsx)(x,{onClose:t,hide:!u,children:(0,c.jsx)(f,{})})},w=function(e){var n=e.className,r=e.children,t=(0,o.v)(l.W2);return(0,c.jsx)(t,{animated:!0,unstyled:!0,className:g()("m-2",n),children:r})},b=r(7480),k=r(9651),y=r(8197),N=function(e){var n=e.renderCallback,r=e.history,t=e.style,l=(0,i.v9)(k.tn),o=(0,i.v9)(k.sQ);return(0,c.jsx)(s,{unstyled:!0,style:t,children:(0,c.jsx)(y.F0,{history:r||(0,b.lX)(),children:(0,c.jsxs)(y.rs,{children:[Object.keys(o).map((function(e){return(0,c.jsx)(y.AW,{component:n(e),exact:!0,path:o[e]},e)})),(0,c.jsx)(y.l_,{to:l})]})})})}},5163:function(e,n,r){r.r(n);var t=r(7036),l=r(4919),o=r(2795),c=r(1838),s=r(5945),a=r(6417);n.default=function(){return(0,a.jsx)(t.nz,{children:(0,a.jsx)("div",{className:"flex flex-col  items-center",children:(0,a.jsxs)("div",{className:"flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row 2xl:flex-row 3xl:flex-row 4xl:flex-row",children:[(0,a.jsxs)("div",{className:"flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row 3xl:flex-row 4xl:flex-row",children:[(0,a.jsx)(s.c,{}),(0,a.jsx)(c.e,{})]}),(0,a.jsxs)("div",{className:"flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row 3xl:flex-row 4xl:flex-row",children:[(0,a.jsx)(l.E,{}),(0,a.jsx)(o.p,{})]})]})})})}}}]);