(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[536],{9378:function(e,n,t){Promise.resolve().then(t.bind(t,3914))},3914:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return c}});var r=t(9268),i=t(1235),o=t.n(i),s=t(6006);function c(){let[e,n]=(0,s.useState)(null),[t,i]=(0,s.useState)(!1),[c,a]=(0,s.useState)(!1),[u,l]=(0,s.useState)(1);if((0,s.useEffect)(()=>{i(!0),fetch("/api/c4p/").then(e=>e.json()).then(e=>{n(e),i(!1)})},[u]),t)return(0,r.jsx)("p",{children:"Loading..."});if(!e)return(0,r.jsx)("p",{children:"No Proposals"});function f(e,n){try{i(!0),fetch("/api/c4p/"+e+"/decide",{method:"POST",body:JSON.stringify({approved:n}),headers:{accept:"application/json"}}).then(e=>e.json()).then(e=>{l(u+1),i(!1)})}catch(e){i(!1),a(!0)}}return(0,r.jsxs)("main",{className:o().main,children:[(0,r.jsx)("h1",{children:"Backend"}),(0,r.jsx)("h2",{children:"Review Proposals (Tab)"}),(0,r.jsx)("div",{children:(0,r.jsx)("ul",{children:e.map(e=>(0,r.jsxs)("li",{children:[e.Id," - ",e.Title," - ",e.Description," - ",e.Author," - ",e.Email,"  - ",e.Status.Status,"  - ",e.Approved.toString(),(0,r.jsx)("button",{main:!0,onClick:()=>f(e.Id,!0),children:"Approve"}),(0,r.jsx)("button",{main:!0,onClick:()=>f(e.Id,!1),children:"Reject"})]},e.Id))})}),(0,r.jsx)("h2",{children:"Notifications (Tab)"}),"(TBD)",(0,r.jsx)("h2",{children:"Events (Tab)"}),"(TBD)"]})}},1235:function(e){e.exports={main:"backend_main__KRnfq"}},3177:function(e,n,t){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=t(6006),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function u(e,n,t){var r,o={},u=null,l=null;for(r in void 0!==t&&(u=""+t),void 0!==n.key&&(u=""+n.key),void 0!==n.ref&&(l=n.ref),n)s.call(n,r)&&!a.hasOwnProperty(r)&&(o[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===o[r]&&(o[r]=n[r]);return{$$typeof:i,type:e,key:u,ref:l,props:o,_owner:c.current}}n.Fragment=o,n.jsx=u,n.jsxs=u},9268:function(e,n,t){"use strict";e.exports=t(3177)}},function(e){e.O(0,[253,488,744],function(){return e(e.s=9378)}),_N_E=e.O()}]);