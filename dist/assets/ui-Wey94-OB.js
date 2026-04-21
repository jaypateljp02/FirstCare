import{r as Fe,a,R as _e,b as We,c as je}from"./vendor-COIN9PGK.js";var X={exports:{}},D={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ie;function He(){if(ie)return D;ie=1;var e=Fe(),t=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function i(s,f,l){var u,h={},y=null,p=null;l!==void 0&&(y=""+l),f.key!==void 0&&(y=""+f.key),f.ref!==void 0&&(p=f.ref);for(u in f)r.call(f,u)&&!c.hasOwnProperty(u)&&(h[u]=f[u]);if(s&&s.defaultProps)for(u in f=s.defaultProps,f)h[u]===void 0&&(h[u]=f[u]);return{$$typeof:t,type:s,key:y,ref:p,props:h,_owner:o.current}}return D.Fragment=n,D.jsx=i,D.jsxs=i,D}var ue;function ze(){return ue||(ue=1,X.exports=He()),X.exports}var N=ze();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Be=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Ue=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,r)=>r?r.toUpperCase():n.toLowerCase()),le=e=>{const t=Ue(e);return t.charAt(0).toUpperCase()+t.slice(1)},Se=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var qe={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ve=a.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:o="",children:c,iconNode:i,...s},f)=>a.createElement("svg",{ref:f,...qe,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:Se("lucide",o),...s},[...i.map(([l,u])=>a.createElement(l,u)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=(e,t)=>{const n=a.forwardRef(({className:r,...o},c)=>a.createElement(Ve,{ref:c,iconNode:t,className:Se(`lucide-${Be(le(e))}`,`lucide-${e}`,r),...o}));return n.displayName=le(e),n};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ke=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],br=v("activity",Ke);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ze=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],wr=v("arrow-left",Ze);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ye=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],xr=v("arrow-right",Ye);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xe=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],_r=v("award",Xe);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ge=[["path",{d:"M9 12h.01",key:"157uk2"}],["path",{d:"M15 12h.01",key:"1k8ypt"}],["path",{d:"M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5",key:"1u7htd"}],["path",{d:"M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1",key:"5yv0yz"}]],Sr=v("baby",Ge);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Je=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],Cr=v("calendar",Je);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qe=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Mr=v("chevron-down",Qe);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const et=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],Nr=v("chevron-up",et);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tt=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],Rr=v("circle-alert",tt);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nt=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],Ar=v("circle-check-big",nt);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rt=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]],Pr=v("clock",rt);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ot=[["path",{d:"m10 16 1.5 1.5",key:"11lckj"}],["path",{d:"m14 8-1.5-1.5",key:"1ohn8i"}],["path",{d:"M15 2c-1.798 1.998-2.518 3.995-2.807 5.993",key:"80uv8i"}],["path",{d:"m16.5 10.5 1 1",key:"696xn5"}],["path",{d:"m17 6-2.891-2.891",key:"xu6p2f"}],["path",{d:"M2 15c6.667-6 13.333 0 20-6",key:"1pyr53"}],["path",{d:"m20 9 .891.891",key:"3xwk7g"}],["path",{d:"M3.109 14.109 4 15",key:"q76aoh"}],["path",{d:"m6.5 12.5 1 1",key:"cs35ky"}],["path",{d:"m7 18 2.891 2.891",key:"1sisit"}],["path",{d:"M9 22c1.798-1.998 2.518-3.995 2.807-5.993",key:"q3hbxp"}]],Or=v("dna",ot);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const at=[["path",{d:"M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z",key:"c7niix"}]],Lr=v("droplet",at);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ct=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Tr=v("eye",ct);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const st=[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]],$r=v("facebook",st);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const it=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m9 15 2 2 4-4",key:"1grp1n"}]],Dr=v("file-check",it);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ut=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],Ir=v("file-text",ut);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lt=[["path",{d:"M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2",key:"18mbvz"}],["path",{d:"M6.453 15h11.094",key:"3shlmq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}]],Fr=v("flask-conical",lt);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dt=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]],Wr=v("folder-open",dt);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ft=[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]],jr=v("gift",ft);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ht=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]],Hr=v("grid-3x3",ht);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vt=[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}],["path",{d:"M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66",key:"4oyue0"}],["path",{d:"m18 15-2-2",key:"60u0ii"}],["path",{d:"m15 18-2-2",key:"6p76be"}]],zr=v("heart-handshake",vt);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yt=[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]],Br=v("heart",yt);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pt=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]],Ur=v("house",pt);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mt=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],qr=v("image",mt);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kt=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]],Vr=v("instagram",kt);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gt=[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]],Kr=v("layout-dashboard",gt);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Et=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]],Zr=v("link",Et);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bt=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],Yr=v("loader-circle",bt);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wt=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],Xr=v("lock",wt);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xt=[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]],Gr=v("log-out",xt);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _t=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],Jr=v("mail",_t);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const St=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],Qr=v("map-pin",St);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ct=[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]],eo=v("menu",Ct);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mt=[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]],to=v("message-circle",Mt);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nt=[["path",{d:"M6 18h8",key:"1borvv"}],["path",{d:"M3 22h18",key:"8prr45"}],["path",{d:"M14 22a7 7 0 1 0 0-14h-1",key:"1jwaiy"}],["path",{d:"M9 14h2",key:"197e7h"}],["path",{d:"M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z",key:"1bmzmy"}],["path",{d:"M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3",key:"1drr47"}]],no=v("microscope",Nt);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rt=[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]],ro=v("navigation",Rt);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const At=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],oo=v("pen",At);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pt=[["line",{x1:"19",x2:"5",y1:"5",y2:"19",key:"1x9vlm"}],["circle",{cx:"6.5",cy:"6.5",r:"2.5",key:"4mh3h7"}],["circle",{cx:"17.5",cy:"17.5",r:"2.5",key:"1mdrzq"}]],ao=v("percent",Pt);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ot=[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]],co=v("phone",Ot);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lt=[["path",{d:"m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z",key:"wa1lgi"}],["path",{d:"m8.5 8.5 7 7",key:"rvfmvr"}]],so=v("pill",Lt);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tt=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],io=v("plus",Tt);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $t=[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"rib7q0"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"1ymkrd"}]],uo=v("quote",$t);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dt=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]],lo=v("search",Dt);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const It=[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]],fo=v("share-2",It);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ft=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],ho=v("shield",Ft);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wt=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],vo=v("star",Wt);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jt=[["path",{d:"M11 2v2",key:"1539x4"}],["path",{d:"M5 2v2",key:"1yf1q8"}],["path",{d:"M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1",key:"rb5t3r"}],["path",{d:"M8 15a6 6 0 0 0 12 0v-3",key:"x18d4x"}],["circle",{cx:"20",cy:"10",r:"2",key:"ts1r5v"}]],yo=v("stethoscope",jt);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ht=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],po=v("sun",Ht);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zt=[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]],mo=v("tag",zt);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bt=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],ko=v("target",Bt);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ut=[["path",{d:"M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5c-1.4 0-2.5-1.1-2.5-2.5V2",key:"125lnx"}],["path",{d:"M8.5 2h7",key:"csnxdl"}],["path",{d:"M14.5 16h-5",key:"1ox875"}]],go=v("test-tube",Ut);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qt=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],Eo=v("trash-2",qt);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vt=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]],bo=v("upload",Vt);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kt=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]],wo=v("users",Kt);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zt=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],xo=v("x",Zt);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yt=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],_o=v("zap",Yt);function G(e,t,{checkForDefaultPrevented:n=!0}={}){return function(o){if(e?.(o),n===!1||!o.defaultPrevented)return t?.(o)}}function de(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}function Ce(...e){return t=>{let n=!1;const r=e.map(o=>{const c=de(o,t);return!n&&typeof c=="function"&&(n=!0),c});if(n)return()=>{for(let o=0;o<r.length;o++){const c=r[o];typeof c=="function"?c():de(e[o],null)}}}}function K(...e){return a.useCallback(Ce(...e),e)}function So(e,t=[]){let n=[];function r(c,i){const s=a.createContext(i),f=n.length;n=[...n,i];const l=h=>{const{scope:y,children:p,...x}=h,d=y?.[e]?.[f]||s,m=a.useMemo(()=>x,Object.values(x));return N.jsx(d.Provider,{value:m,children:p})};l.displayName=c+"Provider";function u(h,y){const p=y?.[e]?.[f]||s,x=a.useContext(p);if(x)return x;if(i!==void 0)return i;throw new Error(`\`${h}\` must be used within \`${c}\``)}return[l,u]}const o=()=>{const c=n.map(i=>a.createContext(i));return function(s){const f=s?.[e]||c;return a.useMemo(()=>({[`__scope${e}`]:{...s,[e]:f}}),[s,f])}};return o.scopeName=e,[r,Xt(o,...t)]}function Xt(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const r=e.map(o=>({useScope:o(),scopeName:o.scopeName}));return function(c){const i=r.reduce((s,{useScope:f,scopeName:l})=>{const h=f(c)[`__scope${l}`];return{...s,...h}},{});return a.useMemo(()=>({[`__scope${t.scopeName}`]:i}),[i])}};return n.scopeName=t.scopeName,n}var I=globalThis?.document?a.useLayoutEffect:()=>{},Gt=_e[" useInsertionEffect ".trim().toString()]||I;function Co({prop:e,defaultProp:t,onChange:n=()=>{},caller:r}){const[o,c,i]=Jt({defaultProp:t,onChange:n}),s=e!==void 0,f=s?e:o;{const u=a.useRef(e!==void 0);a.useEffect(()=>{const h=u.current;h!==s&&console.warn(`${r} is changing from ${h?"controlled":"uncontrolled"} to ${s?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),u.current=s},[s,r])}const l=a.useCallback(u=>{if(s){const h=Qt(u)?u(e):u;h!==e&&i.current?.(h)}else c(u)},[s,e,c,i]);return[f,l]}function Jt({defaultProp:e,onChange:t}){const[n,r]=a.useState(e),o=a.useRef(n),c=a.useRef(t);return Gt(()=>{c.current=t},[t]),a.useEffect(()=>{o.current!==n&&(c.current?.(n),o.current=n)},[n,o]),[n,r,c]}function Qt(e){return typeof e=="function"}function en(e){const t=tn(e),n=a.forwardRef((r,o)=>{const{children:c,...i}=r,s=a.Children.toArray(c),f=s.find(rn);if(f){const l=f.props.children,u=s.map(h=>h===f?a.Children.count(l)>1?a.Children.only(null):a.isValidElement(l)?l.props.children:null:h);return N.jsx(t,{...i,ref:o,children:a.isValidElement(l)?a.cloneElement(l,void 0,u):null})}return N.jsx(t,{...i,ref:o,children:c})});return n.displayName=`${e}.Slot`,n}function tn(e){const t=a.forwardRef((n,r)=>{const{children:o,...c}=n;if(a.isValidElement(o)){const i=an(o),s=on(c,o.props);return o.type!==a.Fragment&&(s.ref=r?Ce(r,i):i),a.cloneElement(o,s)}return a.Children.count(o)>1?a.Children.only(null):null});return t.displayName=`${e}.SlotClone`,t}var nn=Symbol("radix.slottable");function rn(e){return a.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===nn}function on(e,t){const n={...t};for(const r in t){const o=e[r],c=t[r];/^on[A-Z]/.test(r)?o&&c?n[r]=(...s)=>{const f=c(...s);return o(...s),f}:o&&(n[r]=o):r==="style"?n[r]={...o,...c}:r==="className"&&(n[r]=[o,c].filter(Boolean).join(" "))}return{...e,...n}}function an(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=Object.getOwnPropertyDescriptor(e,"ref")?.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}var cn=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],Z=cn.reduce((e,t)=>{const n=en(`Primitive.${t}`),r=a.forwardRef((o,c)=>{const{asChild:i,...s}=o,f=i?n:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),N.jsx(f,{...s,ref:c})});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{});function sn(e,t){e&&We.flushSync(()=>e.dispatchEvent(t))}function F(e){const t=a.useRef(e);return a.useEffect(()=>{t.current=e}),a.useMemo(()=>(...n)=>t.current?.(...n),[])}function un(e,t=globalThis?.document){const n=F(e);a.useEffect(()=>{const r=o=>{o.key==="Escape"&&n(o)};return t.addEventListener("keydown",r,{capture:!0}),()=>t.removeEventListener("keydown",r,{capture:!0})},[n,t])}var ln="DismissableLayer",ae="dismissableLayer.update",dn="dismissableLayer.pointerDownOutside",fn="dismissableLayer.focusOutside",fe,Me=a.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),hn=a.forwardRef((e,t)=>{const{disableOutsidePointerEvents:n=!1,onEscapeKeyDown:r,onPointerDownOutside:o,onFocusOutside:c,onInteractOutside:i,onDismiss:s,...f}=e,l=a.useContext(Me),[u,h]=a.useState(null),y=u?.ownerDocument??globalThis?.document,[,p]=a.useState({}),x=K(t,g=>h(g)),d=Array.from(l.layers),[m]=[...l.layersWithOutsidePointerEventsDisabled].slice(-1),k=d.indexOf(m),E=u?d.indexOf(u):-1,b=l.layersWithOutsidePointerEventsDisabled.size>0,w=E>=k,_=pn(g=>{const R=g.target,A=[...l.branches].some($=>$.contains(R));!w||A||(o?.(g),i?.(g),g.defaultPrevented||s?.())},y),S=mn(g=>{const R=g.target;[...l.branches].some($=>$.contains(R))||(c?.(g),i?.(g),g.defaultPrevented||s?.())},y);return un(g=>{E===l.layers.size-1&&(r?.(g),!g.defaultPrevented&&s&&(g.preventDefault(),s()))},y),a.useEffect(()=>{if(u)return n&&(l.layersWithOutsidePointerEventsDisabled.size===0&&(fe=y.body.style.pointerEvents,y.body.style.pointerEvents="none"),l.layersWithOutsidePointerEventsDisabled.add(u)),l.layers.add(u),he(),()=>{n&&l.layersWithOutsidePointerEventsDisabled.size===1&&(y.body.style.pointerEvents=fe)}},[u,y,n,l]),a.useEffect(()=>()=>{u&&(l.layers.delete(u),l.layersWithOutsidePointerEventsDisabled.delete(u),he())},[u,l]),a.useEffect(()=>{const g=()=>p({});return document.addEventListener(ae,g),()=>document.removeEventListener(ae,g)},[]),N.jsx(Z.div,{...f,ref:x,style:{pointerEvents:b?w?"auto":"none":void 0,...e.style},onFocusCapture:G(e.onFocusCapture,S.onFocusCapture),onBlurCapture:G(e.onBlurCapture,S.onBlurCapture),onPointerDownCapture:G(e.onPointerDownCapture,_.onPointerDownCapture)})});hn.displayName=ln;var vn="DismissableLayerBranch",yn=a.forwardRef((e,t)=>{const n=a.useContext(Me),r=a.useRef(null),o=K(t,r);return a.useEffect(()=>{const c=r.current;if(c)return n.branches.add(c),()=>{n.branches.delete(c)}},[n.branches]),N.jsx(Z.div,{...e,ref:o})});yn.displayName=vn;function pn(e,t=globalThis?.document){const n=F(e),r=a.useRef(!1),o=a.useRef(()=>{});return a.useEffect(()=>{const c=s=>{if(s.target&&!r.current){let f=function(){Ne(dn,n,l,{discrete:!0})};const l={originalEvent:s};s.pointerType==="touch"?(t.removeEventListener("click",o.current),o.current=f,t.addEventListener("click",o.current,{once:!0})):f()}else t.removeEventListener("click",o.current);r.current=!1},i=window.setTimeout(()=>{t.addEventListener("pointerdown",c)},0);return()=>{window.clearTimeout(i),t.removeEventListener("pointerdown",c),t.removeEventListener("click",o.current)}},[t,n]),{onPointerDownCapture:()=>r.current=!0}}function mn(e,t=globalThis?.document){const n=F(e),r=a.useRef(!1);return a.useEffect(()=>{const o=c=>{c.target&&!r.current&&Ne(fn,n,{originalEvent:c},{discrete:!1})};return t.addEventListener("focusin",o),()=>t.removeEventListener("focusin",o)},[t,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}function he(){const e=new CustomEvent(ae);document.dispatchEvent(e)}function Ne(e,t,n,{discrete:r}){const o=n.originalEvent.target,c=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&o.addEventListener(e,t,{once:!0}),r?sn(o,c):o.dispatchEvent(c)}var J=0;function Mo(){a.useEffect(()=>{const e=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",e[0]??ve()),document.body.insertAdjacentElement("beforeend",e[1]??ve()),J++,()=>{J===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(t=>t.remove()),J--}},[])}function ve(){const e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}var Q="focusScope.autoFocusOnMount",ee="focusScope.autoFocusOnUnmount",ye={bubbles:!1,cancelable:!0},kn="FocusScope",gn=a.forwardRef((e,t)=>{const{loop:n=!1,trapped:r=!1,onMountAutoFocus:o,onUnmountAutoFocus:c,...i}=e,[s,f]=a.useState(null),l=F(o),u=F(c),h=a.useRef(null),y=K(t,d=>f(d)),p=a.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;a.useEffect(()=>{if(r){let d=function(b){if(p.paused||!s)return;const w=b.target;s.contains(w)?h.current=w:M(h.current,{select:!0})},m=function(b){if(p.paused||!s)return;const w=b.relatedTarget;w!==null&&(s.contains(w)||M(h.current,{select:!0}))},k=function(b){if(document.activeElement===document.body)for(const _ of b)_.removedNodes.length>0&&M(s)};document.addEventListener("focusin",d),document.addEventListener("focusout",m);const E=new MutationObserver(k);return s&&E.observe(s,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",d),document.removeEventListener("focusout",m),E.disconnect()}}},[r,s,p.paused]),a.useEffect(()=>{if(s){me.add(p);const d=document.activeElement;if(!s.contains(d)){const k=new CustomEvent(Q,ye);s.addEventListener(Q,l),s.dispatchEvent(k),k.defaultPrevented||(En(Sn(Re(s)),{select:!0}),document.activeElement===d&&M(s))}return()=>{s.removeEventListener(Q,l),setTimeout(()=>{const k=new CustomEvent(ee,ye);s.addEventListener(ee,u),s.dispatchEvent(k),k.defaultPrevented||M(d??document.body,{select:!0}),s.removeEventListener(ee,u),me.remove(p)},0)}}},[s,l,u,p]);const x=a.useCallback(d=>{if(!n&&!r||p.paused)return;const m=d.key==="Tab"&&!d.altKey&&!d.ctrlKey&&!d.metaKey,k=document.activeElement;if(m&&k){const E=d.currentTarget,[b,w]=bn(E);b&&w?!d.shiftKey&&k===w?(d.preventDefault(),n&&M(b,{select:!0})):d.shiftKey&&k===b&&(d.preventDefault(),n&&M(w,{select:!0})):k===E&&d.preventDefault()}},[n,r,p.paused]);return N.jsx(Z.div,{tabIndex:-1,...i,ref:y,onKeyDown:x})});gn.displayName=kn;function En(e,{select:t=!1}={}){const n=document.activeElement;for(const r of e)if(M(r,{select:t}),document.activeElement!==n)return}function bn(e){const t=Re(e),n=pe(t,e),r=pe(t.reverse(),e);return[n,r]}function Re(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const o=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||o?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function pe(e,t){for(const n of e)if(!wn(n,{upTo:t}))return n}function wn(e,{upTo:t}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t!==void 0&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}function xn(e){return e instanceof HTMLInputElement&&"select"in e}function M(e,{select:t=!1}={}){if(e&&e.focus){const n=document.activeElement;e.focus({preventScroll:!0}),e!==n&&xn(e)&&t&&e.select()}}var me=_n();function _n(){let e=[];return{add(t){const n=e[0];t!==n&&n?.pause(),e=ke(e,t),e.unshift(t)},remove(t){e=ke(e,t),e[0]?.resume()}}}function ke(e,t){const n=[...e],r=n.indexOf(t);return r!==-1&&n.splice(r,1),n}function Sn(e){return e.filter(t=>t.tagName!=="A")}var Cn=_e[" useId ".trim().toString()]||(()=>{}),Mn=0;function No(e){const[t,n]=a.useState(Cn());return I(()=>{n(r=>r??String(Mn++))},[e]),e||(t?`radix-${t}`:"")}var Nn="Portal",Rn=a.forwardRef((e,t)=>{const{container:n,...r}=e,[o,c]=a.useState(!1);I(()=>c(!0),[]);const i=n||o&&globalThis?.document?.body;return i?je.createPortal(N.jsx(Z.div,{...r,ref:t}),i):null});Rn.displayName=Nn;function An(e,t){return a.useReducer((n,r)=>t[n][r]??n,e)}var Pn=e=>{const{present:t,children:n}=e,r=On(t),o=typeof n=="function"?n({present:r.isPresent}):a.Children.only(n),c=K(r.ref,Ln(o));return typeof n=="function"||r.isPresent?a.cloneElement(o,{ref:c}):null};Pn.displayName="Presence";function On(e){const[t,n]=a.useState(),r=a.useRef(null),o=a.useRef(e),c=a.useRef("none"),i=e?"mounted":"unmounted",[s,f]=An(i,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return a.useEffect(()=>{const l=j(r.current);c.current=s==="mounted"?l:"none"},[s]),I(()=>{const l=r.current,u=o.current;if(u!==e){const y=c.current,p=j(l);e?f("MOUNT"):p==="none"||l?.display==="none"?f("UNMOUNT"):f(u&&y!==p?"ANIMATION_OUT":"UNMOUNT"),o.current=e}},[e,f]),I(()=>{if(t){let l;const u=t.ownerDocument.defaultView??window,h=p=>{const d=j(r.current).includes(CSS.escape(p.animationName));if(p.target===t&&d&&(f("ANIMATION_END"),!o.current)){const m=t.style.animationFillMode;t.style.animationFillMode="forwards",l=u.setTimeout(()=>{t.style.animationFillMode==="forwards"&&(t.style.animationFillMode=m)})}},y=p=>{p.target===t&&(c.current=j(r.current))};return t.addEventListener("animationstart",y),t.addEventListener("animationcancel",h),t.addEventListener("animationend",h),()=>{u.clearTimeout(l),t.removeEventListener("animationstart",y),t.removeEventListener("animationcancel",h),t.removeEventListener("animationend",h)}}else f("ANIMATION_END")},[t,f]),{isPresent:["mounted","unmountSuspended"].includes(s),ref:a.useCallback(l=>{r.current=l?getComputedStyle(l):null,n(l)},[])}}function j(e){return e?.animationName||"none"}function Ln(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=Object.getOwnPropertyDescriptor(e,"ref")?.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}var Tn=function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},P=new WeakMap,H=new WeakMap,z={},te=0,Ae=function(e){return e&&(e.host||Ae(e.parentNode))},$n=function(e,t){return t.map(function(n){if(e.contains(n))return n;var r=Ae(n);return r&&e.contains(r)?r:(console.error("aria-hidden",n,"in not contained inside",e,". Doing nothing"),null)}).filter(function(n){return!!n})},Dn=function(e,t,n,r){var o=$n(t,Array.isArray(e)?e:[e]);z[n]||(z[n]=new WeakMap);var c=z[n],i=[],s=new Set,f=new Set(o),l=function(h){!h||s.has(h)||(s.add(h),l(h.parentNode))};o.forEach(l);var u=function(h){!h||f.has(h)||Array.prototype.forEach.call(h.children,function(y){if(s.has(y))u(y);else try{var p=y.getAttribute(r),x=p!==null&&p!=="false",d=(P.get(y)||0)+1,m=(c.get(y)||0)+1;P.set(y,d),c.set(y,m),i.push(y),d===1&&x&&H.set(y,!0),m===1&&y.setAttribute(n,"true"),x||y.setAttribute(r,"true")}catch(k){console.error("aria-hidden: cannot operate on ",y,k)}})};return u(t),s.clear(),te++,function(){i.forEach(function(h){var y=P.get(h)-1,p=c.get(h)-1;P.set(h,y),c.set(h,p),y||(H.has(h)||h.removeAttribute(r),H.delete(h)),p||h.removeAttribute(n)}),te--,te||(P=new WeakMap,P=new WeakMap,H=new WeakMap,z={})}},Ro=function(e,t,n){n===void 0&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),o=Tn(e);return o?(r.push.apply(r,Array.from(o.querySelectorAll("[aria-live], script"))),Dn(r,o,n,"aria-hidden")):function(){return null}},C=function(){return C=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(t[c]=n[c])}return t},C.apply(this,arguments)};function Pe(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}function Ao(e,t,n,r){function o(c){return c instanceof n?c:new n(function(i){i(c)})}return new(n||(n=Promise))(function(c,i){function s(u){try{l(r.next(u))}catch(h){i(h)}}function f(u){try{l(r.throw(u))}catch(h){i(h)}}function l(u){u.done?c(u.value):o(u.value).then(s,f)}l((r=r.apply(e,t||[])).next())})}function In(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,c;r<o;r++)(c||!(r in t))&&(c||(c=Array.prototype.slice.call(t,0,r)),c[r]=t[r]);return e.concat(c||Array.prototype.slice.call(t))}var q="right-scroll-bar-position",V="width-before-scroll-bar",Fn="with-scroll-bars-hidden",Wn="--removed-body-scroll-bar-size";function ne(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}function jn(e,t){var n=a.useState(function(){return{value:e,callback:t,facade:{get current(){return n.value},set current(r){var o=n.value;o!==r&&(n.value=r,n.callback(r,o))}}}})[0];return n.callback=t,n.facade}var Hn=typeof window<"u"?a.useLayoutEffect:a.useEffect,ge=new WeakMap;function zn(e,t){var n=jn(null,function(r){return e.forEach(function(o){return ne(o,r)})});return Hn(function(){var r=ge.get(n);if(r){var o=new Set(r),c=new Set(e),i=n.current;o.forEach(function(s){c.has(s)||ne(s,null)}),c.forEach(function(s){o.has(s)||ne(s,i)})}ge.set(n,e)},[e]),n}function Bn(e){return e}function Un(e,t){t===void 0&&(t=Bn);var n=[],r=!1,o={read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:e},useMedium:function(c){var i=t(c,r);return n.push(i),function(){n=n.filter(function(s){return s!==i})}},assignSyncMedium:function(c){for(r=!0;n.length;){var i=n;n=[],i.forEach(c)}n={push:function(s){return c(s)},filter:function(){return n}}},assignMedium:function(c){r=!0;var i=[];if(n.length){var s=n;n=[],s.forEach(c),i=n}var f=function(){var u=i;i=[],u.forEach(c)},l=function(){return Promise.resolve().then(f)};l(),n={push:function(u){i.push(u),l()},filter:function(u){return i=i.filter(u),n}}}};return o}function qn(e){e===void 0&&(e={});var t=Un(null);return t.options=C({async:!0,ssr:!1},e),t}var Oe=function(e){var t=e.sideCar,n=Pe(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw new Error("Sidecar medium not found");return a.createElement(r,C({},n))};Oe.isSideCarExport=!0;function Vn(e,t){return e.useMedium(t),Oe}var Le=qn(),re=function(){},Y=a.forwardRef(function(e,t){var n=a.useRef(null),r=a.useState({onScrollCapture:re,onWheelCapture:re,onTouchMoveCapture:re}),o=r[0],c=r[1],i=e.forwardProps,s=e.children,f=e.className,l=e.removeScrollBar,u=e.enabled,h=e.shards,y=e.sideCar,p=e.noRelative,x=e.noIsolation,d=e.inert,m=e.allowPinchZoom,k=e.as,E=k===void 0?"div":k,b=e.gapMode,w=Pe(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noRelative","noIsolation","inert","allowPinchZoom","as","gapMode"]),_=y,S=zn([n,t]),g=C(C({},w),o);return a.createElement(a.Fragment,null,u&&a.createElement(_,{sideCar:Le,removeScrollBar:l,shards:h,noRelative:p,noIsolation:x,inert:d,setCallbacks:c,allowPinchZoom:!!m,lockRef:n,gapMode:b}),i?a.cloneElement(a.Children.only(s),C(C({},g),{ref:S})):a.createElement(E,C({},g,{className:f,ref:S}),s))});Y.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};Y.classNames={fullWidth:V,zeroRight:q};var Kn=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function Zn(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=Kn();return t&&e.setAttribute("nonce",t),e}function Yn(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function Xn(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var Gn=function(){var e=0,t=null;return{add:function(n){e==0&&(t=Zn())&&(Yn(t,n),Xn(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},Jn=function(){var e=Gn();return function(t,n){a.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},Te=function(){var e=Jn(),t=function(n){var r=n.styles,o=n.dynamic;return e(r,o),null};return t},Qn={left:0,top:0,right:0,gap:0},oe=function(e){return parseInt(e||"",10)||0},er=function(e){var t=window.getComputedStyle(document.body),n=t[e==="padding"?"paddingLeft":"marginLeft"],r=t[e==="padding"?"paddingTop":"marginTop"],o=t[e==="padding"?"paddingRight":"marginRight"];return[oe(n),oe(r),oe(o)]},tr=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return Qn;var t=er(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},nr=Te(),T="data-scroll-locked",rr=function(e,t,n,r){var o=e.left,c=e.top,i=e.right,s=e.gap;return n===void 0&&(n="margin"),`
  .`.concat(Fn,` {
   overflow: hidden `).concat(r,`;
   padding-right: `).concat(s,"px ").concat(r,`;
  }
  body[`).concat(T,`] {
    overflow: hidden `).concat(r,`;
    overscroll-behavior: contain;
    `).concat([t&&"position: relative ".concat(r,";"),n==="margin"&&`
    padding-left: `.concat(o,`px;
    padding-top: `).concat(c,`px;
    padding-right: `).concat(i,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(s,"px ").concat(r,`;
    `),n==="padding"&&"padding-right: ".concat(s,"px ").concat(r,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(q,` {
    right: `).concat(s,"px ").concat(r,`;
  }
  
  .`).concat(V,` {
    margin-right: `).concat(s,"px ").concat(r,`;
  }
  
  .`).concat(q," .").concat(q,` {
    right: 0 `).concat(r,`;
  }
  
  .`).concat(V," .").concat(V,` {
    margin-right: 0 `).concat(r,`;
  }
  
  body[`).concat(T,`] {
    `).concat(Wn,": ").concat(s,`px;
  }
`)},Ee=function(){var e=parseInt(document.body.getAttribute(T)||"0",10);return isFinite(e)?e:0},or=function(){a.useEffect(function(){return document.body.setAttribute(T,(Ee()+1).toString()),function(){var e=Ee()-1;e<=0?document.body.removeAttribute(T):document.body.setAttribute(T,e.toString())}},[])},ar=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,o=r===void 0?"margin":r;or();var c=a.useMemo(function(){return tr(o)},[o]);return a.createElement(nr,{styles:rr(c,!t,o,n?"":"!important")})},ce=!1;if(typeof window<"u")try{var B=Object.defineProperty({},"passive",{get:function(){return ce=!0,!0}});window.addEventListener("test",B,B),window.removeEventListener("test",B,B)}catch{ce=!1}var O=ce?{passive:!1}:!1,cr=function(e){return e.tagName==="TEXTAREA"},$e=function(e,t){if(!(e instanceof Element))return!1;var n=window.getComputedStyle(e);return n[t]!=="hidden"&&!(n.overflowY===n.overflowX&&!cr(e)&&n[t]==="visible")},sr=function(e){return $e(e,"overflowY")},ir=function(e){return $e(e,"overflowX")},be=function(e,t){var n=t.ownerDocument,r=t;do{typeof ShadowRoot<"u"&&r instanceof ShadowRoot&&(r=r.host);var o=De(e,r);if(o){var c=Ie(e,r),i=c[1],s=c[2];if(i>s)return!0}r=r.parentNode}while(r&&r!==n.body);return!1},ur=function(e){var t=e.scrollTop,n=e.scrollHeight,r=e.clientHeight;return[t,n,r]},lr=function(e){var t=e.scrollLeft,n=e.scrollWidth,r=e.clientWidth;return[t,n,r]},De=function(e,t){return e==="v"?sr(t):ir(t)},Ie=function(e,t){return e==="v"?ur(t):lr(t)},dr=function(e,t){return e==="h"&&t==="rtl"?-1:1},fr=function(e,t,n,r,o){var c=dr(e,window.getComputedStyle(t).direction),i=c*r,s=n.target,f=t.contains(s),l=!1,u=i>0,h=0,y=0;do{if(!s)break;var p=Ie(e,s),x=p[0],d=p[1],m=p[2],k=d-m-c*x;(x||k)&&De(e,s)&&(h+=k,y+=x);var E=s.parentNode;s=E&&E.nodeType===Node.DOCUMENT_FRAGMENT_NODE?E.host:E}while(!f&&s!==document.body||f&&(t.contains(s)||t===s));return(u&&Math.abs(h)<1||!u&&Math.abs(y)<1)&&(l=!0),l},U=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},we=function(e){return[e.deltaX,e.deltaY]},xe=function(e){return e&&"current"in e?e.current:e},hr=function(e,t){return e[0]===t[0]&&e[1]===t[1]},vr=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},yr=0,L=[];function pr(e){var t=a.useRef([]),n=a.useRef([0,0]),r=a.useRef(),o=a.useState(yr++)[0],c=a.useState(Te)[0],i=a.useRef(e);a.useEffect(function(){i.current=e},[e]),a.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(o));var d=In([e.lockRef.current],(e.shards||[]).map(xe),!0).filter(Boolean);return d.forEach(function(m){return m.classList.add("allow-interactivity-".concat(o))}),function(){document.body.classList.remove("block-interactivity-".concat(o)),d.forEach(function(m){return m.classList.remove("allow-interactivity-".concat(o))})}}},[e.inert,e.lockRef.current,e.shards]);var s=a.useCallback(function(d,m){if("touches"in d&&d.touches.length===2||d.type==="wheel"&&d.ctrlKey)return!i.current.allowPinchZoom;var k=U(d),E=n.current,b="deltaX"in d?d.deltaX:E[0]-k[0],w="deltaY"in d?d.deltaY:E[1]-k[1],_,S=d.target,g=Math.abs(b)>Math.abs(w)?"h":"v";if("touches"in d&&g==="h"&&S.type==="range")return!1;var R=window.getSelection(),A=R&&R.anchorNode,$=A?A===S||A.contains(S):!1;if($)return!1;var W=be(g,S);if(!W)return!0;if(W?_=g:(_=g==="v"?"h":"v",W=be(g,S)),!W)return!1;if(!r.current&&"changedTouches"in d&&(b||w)&&(r.current=_),!_)return!0;var se=r.current||_;return fr(se,m,d,se==="h"?b:w)},[]),f=a.useCallback(function(d){var m=d;if(!(!L.length||L[L.length-1]!==c)){var k="deltaY"in m?we(m):U(m),E=t.current.filter(function(_){return _.name===m.type&&(_.target===m.target||m.target===_.shadowParent)&&hr(_.delta,k)})[0];if(E&&E.should){m.cancelable&&m.preventDefault();return}if(!E){var b=(i.current.shards||[]).map(xe).filter(Boolean).filter(function(_){return _.contains(m.target)}),w=b.length>0?s(m,b[0]):!i.current.noIsolation;w&&m.cancelable&&m.preventDefault()}}},[]),l=a.useCallback(function(d,m,k,E){var b={name:d,delta:m,target:k,should:E,shadowParent:mr(k)};t.current.push(b),setTimeout(function(){t.current=t.current.filter(function(w){return w!==b})},1)},[]),u=a.useCallback(function(d){n.current=U(d),r.current=void 0},[]),h=a.useCallback(function(d){l(d.type,we(d),d.target,s(d,e.lockRef.current))},[]),y=a.useCallback(function(d){l(d.type,U(d),d.target,s(d,e.lockRef.current))},[]);a.useEffect(function(){return L.push(c),e.setCallbacks({onScrollCapture:h,onWheelCapture:h,onTouchMoveCapture:y}),document.addEventListener("wheel",f,O),document.addEventListener("touchmove",f,O),document.addEventListener("touchstart",u,O),function(){L=L.filter(function(d){return d!==c}),document.removeEventListener("wheel",f,O),document.removeEventListener("touchmove",f,O),document.removeEventListener("touchstart",u,O)}},[]);var p=e.removeScrollBar,x=e.inert;return a.createElement(a.Fragment,null,x?a.createElement(c,{styles:vr(o)}):null,p?a.createElement(ar,{noRelative:e.noRelative,gapMode:e.gapMode}):null)}function mr(e){for(var t=null;e!==null;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}const kr=Vn(Le,pr);var gr=a.forwardRef(function(e,t){return a.createElement(Y,C({},e,{ref:t,sideCar:kr}))});gr.classNames=Y.classNames;export{so as $,br as A,zr as B,Mr as C,hn as D,Sr as E,gn as F,vo as G,Ur as H,Vr as I,ko as J,Tr as K,Yr as L,to as M,_r as N,lo as O,Z as P,Hr as Q,gr as R,yo as S,go as T,wo as U,Wr as V,Nr as W,xo as X,Dr as Y,_o as Z,Ao as _,So as a,Fr as a0,Ir as a1,Pr as a2,ro as a3,uo as a4,Cr as a5,xr as a6,wr as a7,fo as a8,jr as a9,ao as aa,mo as ab,no as ac,Xr as ad,Rr as ae,Kr as af,qr as ag,Gr as ah,io as ai,oo as aj,Eo as ak,bo as al,Zr as am,I as b,Ce as c,F as d,No as e,G as f,Co as g,Pn as h,Rn as i,N as j,Ro as k,sn as l,Mo as m,co as n,eo as o,Jr as p,Qr as q,$r as r,Pe as s,Lr as t,K as u,Br as v,Or as w,po as x,ho as y,Ar as z};
