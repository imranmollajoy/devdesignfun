import{S as y,i as E,s as $,k as f,q as p,l as v,m as g,r as m,h as u,n as q,b as D,D as _,u as b,Q as x,T as S}from"../chunks/index.a3b8d16d.js";import{p as k}from"../chunks/stores.9ccd8b49.js";function C(l){var d;let e,t,s=l[0].status+"",o,h,i=((d=l[0].error)==null?void 0:d.message)+"",c;return{c(){e=f("div"),t=f("h1"),o=p(s),h=p(": "),c=p(i),this.h()},l(a){e=v(a,"DIV",{class:!0});var r=g(e);t=v(r,"H1",{});var n=g(t);o=m(n,s),h=m(n,": "),c=m(n,i),n.forEach(u),r.forEach(u),this.h()},h(){q(e,"class","error h-screen svelte-14hxc2t")},m(a,r){D(a,e,r),_(e,t),_(t,o),_(t,h),_(t,c)},p(a,[r]){var n;r&1&&s!==(s=a[0].status+"")&&b(o,s),r&1&&i!==(i=((n=a[0].error)==null?void 0:n.message)+"")&&b(c,i)},i:x,o:x,d(a){a&&u(e)}}}function H(l,e,t){let s;return S(l,k,o=>t(0,s=o)),[s]}class T extends y{constructor(e){super(),E(this,e,H,C,$,{})}}export{T as default};