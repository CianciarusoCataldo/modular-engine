"use strict";(self.webpackChunkmodular_engine_app=self.webpackChunkmodular_engine_app||[]).push([[634],{2030:function(n,e,r){var t=r(7313),o=r(6352),l=r(5718),c=r(8755),i=r(529),a=r(6417);e.Z=function(){var n=(0,o.I0)(),e=(0,o.v9)(c.N2),r=(0,t.useCallback)((function(){n((0,c.C8)(!e))}),[n,e]);return(0,a.jsx)(i.ZD,{onIcon:l.xp,offIcon:l.ce,shadow:!0,dark:e,value:!e,onChange:r,className:"mx-1"})}},7185:function(n,e,r){var t=r(6352),o=r(5718),l=r(4092),c=r(529),i=r(6417);e.Z=function(){var n=(0,t.I0)(),e=(0,t.v9)(l.G3),r=Object.keys(o.hv);return(0,i.jsx)(c.Lt,{dark:!1,value:r.findIndex((function(n){return n===e})),shadow:!0,onChange:function(e){n((0,l.D0)(r[e]))},content:Object.keys(o.hv).map((function(n){return{name:n,icon:o.hv[n]}}))})}},7036:function(n,e,r){r.d(e,{zj:function(){return i},GZ:function(){return v},ge:function(){return j},l6:function(){return g},nz:function(){return k},WY:function(){return C}});var t=r(1413),o=r(529),l=r(1131),c=r(6417),i=function(n){var e=(0,l.v)(o.W2);return(0,c.jsx)(e,(0,t.Z)({},n))},a=r(7313),s=r(6352),u=r(8104),d=r(5323),f=r(8755),x=(0,d.P1)(f.Yx,(function(n){return n.isDrawerOpen})),v=function(n){var e=n.logo,r=n.children,t=n.elements,i=(0,s.I0)(),d=(0,s.v9)(x);a.useEffect((function(){if(d){var n=document.getElementById("modular-drawer");document.getElementById("app-container").onclick=function(e){n&&!n.contains(e.target)&&i((0,u.closeDrawer)())}}else document.getElementById("app-container").onclick=null}),[i,d]);var f=(0,l.v)(o.dy);return(0,c.jsx)(f,{logo:e,hide:!d,onClose:function(){i((0,u.closeDrawer)())},elements:t,children:r})},m=r(6123),h=r.n(m),j=(r(5031),r(4059),r(2030),r(7185),function(n){var e=(0,l.v)(o.__);return(0,c.jsx)(e,(0,t.Z)({},n))}),p=r(6241),g=function(n){var e=n.modals,r=(0,s.I0)(),t=(0,a.useCallback)((function(){r((0,p.Mr)())}),[r]),i=(0,s.v9)(p.mV),u=(0,s.v9)(p.gU),d=i&&e[i]?e[i]:function(){return(0,c.jsx)("div",{})},f=(0,l.v)(o.u_);return(0,c.jsx)(f,{onClose:t,hide:!u,children:(0,c.jsx)(d,{})})},k=function(n){var e=n.className,r=n.children,t=(0,l.v)(o.W2);return(0,c.jsx)(t,{animated:!0,unstyled:!0,className:h()("m-2",e),children:r})},y=r(7480),w=r(9651),b=r(8197),C=function(n){var e=n.renderCallback,r=n.history,t=n.style,o=(0,s.v9)(w.tn),l=(0,s.v9)(w.sQ);return(0,c.jsx)(i,{unstyled:!0,style:t,children:(0,c.jsx)(b.F0,{history:r||(0,y.lX)(),children:(0,c.jsxs)(b.rs,{children:[Object.keys(l).map((function(n){return(0,c.jsx)(b.AW,{component:e(n),exact:!0,path:l[n]},n)})),(0,c.jsx)(b.l_,{to:o})]})})})}},7634:function(n,e,r){r.r(e);var t=r(4457),o=r(529),l=r(6352),c=r(7036),i=r(6417);e.default=function(){var n=(0,l.I0)();return(0,i.jsx)(c.nz,{children:(0,i.jsxs)("div",{className:"flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row 2xl:flex-row 3xl:flex-row 4xl:flex-row",children:[(0,i.jsx)(o.Zb,{header:"Installation",body:(0,i.jsxs)("div",{children:[(0,i.jsx)("p",{children:"to use modular-engine inside your project, install it with npm:"}),(0,i.jsx)(o.wh,{enhanced:!0,dark:!0,value:"npm i modular-engine",environment:"terminal"})]})}),(0,i.jsx)(o.Zb,{header:"Selectors",body:"Try all selectors from modular-engine plugins",footer:(0,i.jsx)(o.zx,{dark:!0,onClick:function(){return n((0,t.WF)("Selectors"))},children:"Go to selectors page"})}),(0,i.jsx)(o.Zb,{header:"Actions",body:"Try all different actions from modular-engine plugins",footer:(0,i.jsx)(o.zx,{dark:!0,onClick:function(){return n((0,t.WF)("Actions"))},children:"Go to actions page"})})]})})}}}]);