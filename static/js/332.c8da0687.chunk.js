"use strict";(self.webpackChunkmodular_engine_app=self.webpackChunkmodular_engine_app||[]).push([[332],{2030:function(n,e,r){var t=r(7313),c=r(6352),l=r(5718),o=r(8755),a=r(529),i=r(6417);e.Z=function(){var n=(0,c.I0)(),e=(0,c.v9)(o.N2),r=(0,t.useCallback)((function(){n((0,o.C8)(!e))}),[n,e]);return(0,i.jsx)(a.ZD,{onIcon:l.xp,offIcon:l.ce,shadow:!0,dark:e,value:!e,onChange:r,className:"mx-1"})}},7185:function(n,e,r){var t=r(6352),c=r(5718),l=r(4092),o=r(529),a=r(6417);e.Z=function(){var n=(0,t.I0)(),e=(0,t.v9)(l.G3),r=Object.keys(c.hv);return(0,a.jsx)(o.Lt,{dark:!1,value:r.findIndex((function(n){return n===e})),shadow:!0,onChange:function(e){n((0,l.D0)(r[e]))},content:Object.keys(c.hv).map((function(n){return{name:n,icon:c.hv[n]}}))})}},7036:function(n,e,r){r.d(e,{zj:function(){return a},GZ:function(){return m},ge:function(){return j},l6:function(){return p},nz:function(){return w},WY:function(){return C}});var t=r(1413),c=r(529),l=r(1131),o=r(6417),a=function(n){var e=(0,l.v)(c.W2);return(0,o.jsx)(e,(0,t.Z)({},n))},i=r(7313),s=r(6352),u=r(8104),f=r(5323),x=r(8755),d=(0,f.P1)(x.Yx,(function(n){return n.isDrawerOpen})),m=function(n){var e=n.logo,r=n.children,t=n.elements,a=(0,s.I0)(),f=(0,s.v9)(d);i.useEffect((function(){if(f){var n=document.getElementById("modular-drawer");document.getElementById("app-container").onclick=function(e){n&&!n.contains(e.target)&&a((0,u.closeDrawer)())}}else document.getElementById("app-container").onclick=null}),[a,f]);var x=(0,l.v)(c.dy);return(0,o.jsx)(x,{logo:e,hide:!f,onClose:function(){a((0,u.closeDrawer)())},elements:t,children:r})},v=r(6123),h=r.n(v),j=(r(5031),r(4059),r(2030),r(7185),function(n){var e=(0,l.v)(c.__);return(0,o.jsx)(e,(0,t.Z)({},n))}),g=r(6241),p=function(n){var e=n.modals,r=(0,s.I0)(),t=(0,i.useCallback)((function(){r((0,g.Mr)())}),[r]),a=(0,s.v9)(g.mV),u=(0,s.v9)(g.gU),f=a&&e[a]?e[a]:function(){return(0,o.jsx)("div",{})},x=(0,l.v)(c.u_);return(0,o.jsx)(x,{onClose:t,hide:!u,children:(0,o.jsx)(f,{})})},w=function(n){var e=n.className,r=n.children,t=(0,l.v)(c.W2);return(0,o.jsx)(t,{animated:!0,unstyled:!0,className:h()("m-2",e),children:r})},k=r(7480),y=r(9651),b=r(8197),C=function(n){var e=n.renderCallback,r=n.history,t=n.style,c=(0,s.v9)(y.tn),l=(0,s.v9)(y.sQ);return(0,o.jsx)(a,{unstyled:!0,style:t,children:(0,o.jsx)(b.F0,{history:r||(0,k.lX)(),children:(0,o.jsxs)(b.rs,{children:[Object.keys(l).map((function(n){return(0,o.jsx)(b.AW,{component:e(n),exact:!0,path:l[n]},n)})),(0,o.jsx)(b.l_,{to:c})]})})})}},332:function(n,e,r){r.r(e),r.d(e,{default:function(){return x}});var t=r(7036),c=r(4457),l=r(529),o=r(1413),a=r(6352),i=r(6417),s=function(n){var e=n.actions,r=function(n){var e=n.name,r=n.action,t=(0,a.I0)();return(0,i.jsx)(l.zx,{className:"m-2",onClick:function(){return t(r)},children:e},e)};return(0,i.jsx)("div",{className:"flex flex-col items-center",children:e.map((function(n,e){return(0,i.jsx)("div",{children:(0,i.jsx)(r,(0,o.Z)({},n))},"button_"+e)}))})},u=function(){var n=[{action:(0,c.D0)("es"),name:"changeLanguage"}];return(0,i.jsx)(l.Zb,{header:"Localization plugin",dark:!0,body:(0,i.jsx)("div",{className:"flex flex-col items-center",children:(0,i.jsx)(s,{actions:n})})},"localization_plugin")},f=function(){var n=[{action:(0,c.WF)("Home"),name:"goTo"},{action:(0,c.Hm)(),name:"goBack"}];return(0,i.jsx)(l.Zb,{header:"Router plugin",dark:!0,body:(0,i.jsx)("div",{className:"flex flex-col items-center",children:(0,i.jsx)(s,{actions:n})})},"router_plugin")},x=function(){return(0,i.jsx)(t.nz,{children:(0,i.jsx)("div",{className:"flex flex-col  items-center",children:(0,i.jsxs)("div",{className:"flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row 2xl:flex-row 3xl:flex-row 4xl:flex-row",children:[(0,i.jsx)(f,{}),(0,i.jsx)("div",{className:"flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row 3xl:flex-row 4xl:flex-row",children:(0,i.jsx)(u,{})})]})})})}}}]);