"use strict";(self.webpackChunkmodular_engine_app=self.webpackChunkmodular_engine_app||[]).push([[332],{2030:function(n,e,r){var t=r(7313),l=r(6352),c=r(5718),o=r(8755),a=r(529),i=r(6417);e.Z=function(){var n=(0,l.I0)(),e=(0,l.v9)(o.N2),r=(0,t.useCallback)((function(){n((0,o.C8)(!e))}),[n,e]);return(0,i.jsx)(a.ZD,{onIcon:c.xp,offIcon:c.ce,shadow:!0,dark:e,value:!e,onChange:r,className:"mx-1"})}},7185:function(n,e,r){var t=r(6352),l=r(5718),c=r(4092),o=r(529),a=r(6417);e.Z=function(){var n=(0,t.I0)(),e=(0,t.v9)(c.G3),r=Object.keys(l.hv);return(0,a.jsx)(o.Lt,{dark:!1,value:r.findIndex((function(n){return n===e})),shadow:!0,onChange:function(e){n((0,c.D0)(r[e]))},content:Object.keys(l.hv).map((function(n){return{name:n,icon:l.hv[n]}}))})}},7036:function(n,e,r){r.d(e,{zj:function(){return a},GZ:function(){return m},l6:function(){return g},nz:function(){return p},WY:function(){return b}});var t=r(1413),l=r(529),c=r(1131),o=r(6417),a=function(n){var e=(0,c.v)(l.W2);return(0,o.jsx)(e,(0,t.Z)({},n))},i=r(7313),s=r(6352),u=r(8104),f=r(5323),x=r(8755),d=(0,f.P1)(x.Yx,(function(n){return n.isDrawerOpen})),m=function(n){var e=n.logo,r=n.children,t=n.elements,a=(0,s.I0)(),f=(0,s.v9)(d);i.useEffect((function(){if(f){var n=document.getElementById("modular-drawer");document.getElementById("app-container").onclick=function(e){n&&!n.contains(e.target)&&a((0,u.closeDrawer)())}}else document.getElementById("app-container").onclick=null}),[a,f]);var x=(0,c.v)(l.dy);return(0,o.jsx)(x,{logo:e,hide:!f,onClose:function(){a((0,u.closeDrawer)())},elements:t,children:r})},v=r(6123),h=r.n(v),j=(r(5031),r(4059),r(2030),r(7185),r(6241)),g=function(n){var e=n.modals,r=(0,s.I0)(),t=(0,i.useCallback)((function(){r((0,j.Mr)())}),[r]),a=(0,s.v9)(j.mV),u=(0,s.v9)(j.gU),f=a&&e[a]?e[a]:function(){return(0,o.jsx)("div",{})},x=(0,c.v)(l.u_);return(0,o.jsx)(x,{onClose:t,hide:!u,children:(0,o.jsx)(f,{})})},p=function(n){var e=n.className,r=n.children,t=(0,c.v)(l.W2);return(0,o.jsx)(t,{animated:!0,unstyled:!0,className:h()("m-2",e),children:r})},w=r(7480),k=r(9651),y=r(8197),b=function(n){var e=n.renderCallback,r=n.history,t=n.style,l=(0,s.v9)(k.tn),c=(0,s.v9)(k.sQ);return(0,o.jsx)(a,{unstyled:!0,style:t,children:(0,o.jsx)(y.F0,{history:r||(0,w.lX)(),children:(0,o.jsxs)(y.rs,{children:[Object.keys(c).map((function(n){return(0,o.jsx)(y.AW,{component:e(n),exact:!0,path:c[n]},n)})),(0,o.jsx)(y.l_,{to:l})]})})})}},332:function(n,e,r){r.r(e),r.d(e,{default:function(){return x}});var t=r(7036),l=r(1715),c=r(529),o=r(1413),a=r(6352),i=r(6417),s=function(n){var e=n.actions,r=function(n){var e=n.name,r=n.action,t=(0,a.I0)();return(0,i.jsx)(c.zx,{className:"m-2",onClick:function(){return t(r)},children:e},e)};return(0,i.jsx)("div",{className:"flex flex-col items-center",children:e.map((function(n,e){return(0,i.jsx)("div",{children:(0,i.jsx)(r,(0,o.Z)({},n))},"button_"+e)}))})},u=function(){var n=[{action:(0,l.D0)("es"),name:"changeLanguage"}];return(0,i.jsx)(c.Zb,{header:"Localization plugin",dark:!0,body:(0,i.jsx)("div",{className:"flex flex-col items-center",children:(0,i.jsx)(s,{actions:n})})},"localization_plugin")},f=function(){var n=[{action:(0,l.WF)("Home"),name:"goTo"},{action:(0,l.Hm)(),name:"goBack"}];return(0,i.jsx)(c.Zb,{header:"Router plugin",dark:!0,body:(0,i.jsx)("div",{className:"flex flex-col items-center",children:(0,i.jsx)(s,{actions:n})})},"router_plugin")},x=function(){return(0,i.jsx)(t.nz,{children:(0,i.jsx)("div",{className:"flex flex-col  items-center",children:(0,i.jsxs)("div",{className:"flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row 2xl:flex-row 3xl:flex-row 4xl:flex-row",children:[(0,i.jsx)(f,{}),(0,i.jsx)("div",{className:"flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row 3xl:flex-row 4xl:flex-row",children:(0,i.jsx)(u,{})})]})})})}}}]);