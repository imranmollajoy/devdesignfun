import{_ as F}from"./preload-helper.a4192956.js";import{a as ot,b as rt}from"./post.ff11ab49.js";import{S as nt,i as it,s as ct,x as We,a as y,k as _,q as O,y as ge,c as L,l as p,m as h,r as S,h as m,z as Se,n as d,b as x,D as r,A as Ee,d as oe,f as Xe,g as re,u as q,B as $e,X as lt,o as ft,W as Je,v as Ke}from"./index.0c27b2d7.js";import{S as st}from"./SEO.8d084338.js";const mt=(l,e)=>{const a=l[e];return a?typeof a=="function"?a():Promise.resolve(a):new Promise((t,s)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(s.bind(null,new Error("Unknown variable dynamic import: "+e)))})};new TextEncoder;async function ut({params:l,url:e,fetch:a}){const t=await mt(Object.assign({"../../../posts/ad-free-alternatives-on-android/index.md":()=>F(()=>import("./index.85f673c1.js"),["./index.85f673c1.js","./index.0c27b2d7.js","./default.75651f92.js","../assets/default.b7b96979.css","./Link.1cef3009.js"],import.meta.url),"../../../posts/best-font-pairings/index.md":()=>F(()=>import("./index.aaf650a6.js"),["./index.aaf650a6.js","./index.0c27b2d7.js","./default.75651f92.js","../assets/default.b7b96979.css","./img.4bb9eb9a.js","./use-lazy-image.e38dea70.js","./Link.1cef3009.js"],import.meta.url),"../../../posts/create-button-component-for-svelte/index.md":()=>F(()=>import("./index.440f5e68.js"),["./index.440f5e68.js","./index.0c27b2d7.js","./default.75651f92.js","../assets/default.b7b96979.css","./ProgressBar.svelte_svelte_type_style_lang.45fa0ba8.js","./index.7fb8422d.js","../assets/ProgressBar.4f1e9ba5.css","../assets/index.e5a87918.css"],import.meta.url),"../../../posts/create-horizontal-scroll-section-html-css-js/index.md":()=>F(()=>import("./index.d709ed11.js"),["./index.d709ed11.js","./index.0c27b2d7.js","./default.75651f92.js","../assets/default.b7b96979.css"],import.meta.url),"../../../posts/enter-zoom-unembarrassed/index.md":()=>F(()=>import("./index.f548888a.js"),["./index.f548888a.js","./index.0c27b2d7.js","./default.75651f92.js","../assets/default.b7b96979.css","./img.4bb9eb9a.js","./use-lazy-image.e38dea70.js"],import.meta.url),"../../../posts/google-new-feature-june23/index.md":()=>F(()=>import("./index.d597663d.js"),["./index.d597663d.js","./index.0c27b2d7.js","./default.75651f92.js","../assets/default.b7b96979.css","./Link.1cef3009.js"],import.meta.url),"../../../posts/seo-component-for-svelte/index.md":()=>F(()=>import("./index.81dde7b9.js"),["./index.81dde7b9.js","./index.0c27b2d7.js","./default.75651f92.js","../assets/default.b7b96979.css"],import.meta.url),"../../../posts/tab-component-for-svelte-and-sveltekit/index.md":()=>F(()=>import("./index.2efde030.js"),["./index.2efde030.js","./index.0c27b2d7.js","./default.75651f92.js","../assets/default.b7b96979.css","../assets/index.11a65b74.css"],import.meta.url),"../../../posts/the-last-tool-for-colors/index.md":()=>F(()=>import("./index.4bbf94f8.js"),["./index.4bbf94f8.js","./index.0c27b2d7.js","./default.75651f92.js","../assets/default.b7b96979.css","./Link.1cef3009.js","./img.4bb9eb9a.js","./use-lazy-image.e38dea70.js"],import.meta.url)}),`../../../posts/${l.slug}/index.md`),s=await a(`${e.origin}/api/posts`).then(G=>G.json()),i=await ot(s,t.metadata.title),{title:f,category:n,tags:c,slug:g}=i,u=await rt(s,f,n,c),$="view",I="devdesignfun.com",z={behavior:"view"},k=g,j=await a(`https://counterapi.com/api/${I}/${$}/${k}`);let b;j&&(b=await j.json());const w={key:k,views:b,namespace:I,options:z,action:$};return{content:t.default,meta:i,counter:w,related:u}}const bt=Object.freeze(Object.defineProperty({__proto__:null,load:ut},Symbol.toStringTag,{value:"Module"}));function be(l){return new Date(l).toLocaleDateString("en-US",{day:"numeric",month:"long",year:"numeric"})}function wt(l){if(!l)return;let e=l.split("/");const a=e.pop(),t=a.split(".").pop(),s=a.replace("."+t,"_placeholder."+t);return e.push(s),e.join("/")}function Qe(l,e,a){const t=l.slice();return t[4]=e[a],t}function Ye(l,e,a){const t=l.slice();return t[7]=e[a],t}function _t(l){let e,a;return e=new st({props:{title:l[0].meta.title,description:l[0].meta.description,tags:l[0].meta.tags,ogType:"article"}}),{c(){ge(e.$$.fragment)},l(t){Se(e.$$.fragment,t)},m(t,s){Ee(e,t,s),a=!0},p(t,s){const i={};s&1&&(i.title=t[0].meta.title),s&1&&(i.description=t[0].meta.description),s&1&&(i.tags=t[0].meta.tags),e.$set(i)},i(t){a||(re(e.$$.fragment,t),a=!0)},o(t){oe(e.$$.fragment,t),a=!1},d(t){$e(e,t)}}}function pt(l){let e,a;return e=new st({props:{title:l[0].meta.title,description:l[0].meta.description,tags:l[0].meta.tags,ogType:"article",ogImage:l[0].meta.cover.image}}),{c(){ge(e.$$.fragment)},l(t){Se(e.$$.fragment,t)},m(t,s){Ee(e,t,s),a=!0},p(t,s){const i={};s&1&&(i.title=t[0].meta.title),s&1&&(i.description=t[0].meta.description),s&1&&(i.tags=t[0].meta.tags),s&1&&(i.ogImage=t[0].meta.cover.image),e.$set(i)},i(t){a||(re(e.$$.fragment,t),a=!0)},o(t){oe(e.$$.fragment,t),a=!1},d(t){$e(e,t)}}}function Ze(l){let e,a,t;return{c(){e=_("img"),this.h()},l(s){e=p(s,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){Je(e.src,a=l[0].meta.cover.image)||d(e,"src",a),d(e,"alt",t="cover image of "+l[0].meta.title),d(e,"class","w-full")},m(s,i){x(s,e,i)},p(s,i){i&1&&!Je(e.src,a=s[0].meta.cover.image)&&d(e,"src",a),i&1&&t!==(t="cover image of "+s[0].meta.title)&&d(e,"alt",t)},d(s){s&&m(e)}}}function xe(l){let e,a,t=l[7]+"",s,i,f;return{c(){e=_("a"),a=_("span"),s=O(t),i=y(),this.h()},l(n){e=p(n,"A",{href:!0});var c=h(e);a=p(c,"SPAN",{class:!0});var g=h(a);s=S(g,t),g.forEach(m),i=L(c),c.forEach(m),this.h()},h(){d(a,"class","chip variant-ghost-secondary"),d(e,"href",f="/tag/"+l[7])},m(n,c){x(n,e,c),r(e,a),r(a,s),r(e,i)},p(n,c){c&1&&t!==(t=n[7]+"")&&q(s,t),c&1&&f!==(f="/tag/"+n[7])&&d(e,"href",f)},d(n){n&&m(e)}}}function et(l){let e,a,t,s=be(l[0].meta.updated)+"",i;return{c(){e=_("p"),a=_("strong"),t=O("Last updated: "),i=O(s),this.h()},l(f){e=p(f,"P",{class:!0});var n=h(e);a=p(n,"STRONG",{});var c=h(a);t=S(c,"Last updated: "),i=S(c,s),c.forEach(m),n.forEach(m),this.h()},h(){d(e,"class","opacity-50 py-16")},m(f,n){x(f,e,n),r(e,a),r(a,t),r(a,i)},p(f,n){n&1&&s!==(s=be(f[0].meta.updated)+"")&&q(i,s)},d(f){f&&m(e)}}}function tt(l){let e,a,t,s,i,f=l[0].related,n=[];for(let c=0;c<f.length;c+=1)n[c]=at(Qe(l,f,c));return{c(){e=_("div"),a=_("div"),t=_("h3"),s=O("Related"),i=y();for(let c=0;c<n.length;c+=1)n[c].c();this.h()},l(c){e=p(c,"DIV",{class:!0});var g=h(e);a=p(g,"DIV",{class:!0});var u=h(a);t=p(u,"H3",{});var $=h(t);s=S($,"Related"),$.forEach(m),i=L(u);for(let I=0;I<n.length;I+=1)n[I].l(u);u.forEach(m),g.forEach(m),this.h()},h(){d(a,"class","space-y-4"),d(e,"class","py-8")},m(c,g){x(c,e,g),r(e,a),r(a,t),r(t,s),r(a,i);for(let u=0;u<n.length;u+=1)n[u]&&n[u].m(a,null)},p(c,g){if(g&1){f=c[0].related;let u;for(u=0;u<f.length;u+=1){const $=Qe(c,f,u);n[u]?n[u].p($,g):(n[u]=at($),n[u].c(),n[u].m(a,null))}for(;u<n.length;u+=1)n[u].d(1);n.length=f.length}},d(c){c&&m(e),lt(n,c)}}}function at(l){let e,a,t=l[4].date+"",s,i,f,n,c=l[4].title+"",g,u,$,I=l[4].description+"",z,k,j;return{c(){e=_("article"),a=_("p"),s=O(t),i=y(),f=_("a"),n=_("h3"),g=O(c),u=y(),$=_("p"),z=O(I),j=y(),this.h()},l(b){e=p(b,"ARTICLE",{});var w=h(e);a=p(w,"P",{class:!0});var G=h(a);s=S(G,t),G.forEach(m),i=L(w),f=p(w,"A",{href:!0});var U=h(f);n=p(U,"H3",{});var B=h(n);g=S(B,c),B.forEach(m),u=L(U),$=p(U,"P",{});var W=h($);z=S(W,I),W.forEach(m),U.forEach(m),j=L(w),w.forEach(m),this.h()},h(){d(a,"class","opacity-50"),d(f,"href",k="/article/"+l[4].slug)},m(b,w){x(b,e,w),r(e,a),r(a,s),r(e,i),r(e,f),r(f,n),r(n,g),r(f,u),r(f,$),r($,z),r(e,j)},p(b,w){w&1&&t!==(t=b[4].date+"")&&q(s,t),w&1&&c!==(c=b[4].title+"")&&q(g,c),w&1&&I!==(I=b[4].description+"")&&q(z,I),w&1&&k!==(k="/article/"+b[4].slug)&&d(f,"href",k)},d(b){b&&m(e)}}}function dt(l){var qe;let e,a,t,s,i,f,n,c,g=l[0].meta.category+"",u,$,I,z,k,j,b=l[0].meta.readingTime+"",w,G,U,B,W=be(l[0].meta.date)+"",ue,we,ee,ne=l[0].counter.views.value+"",_e,ke,Pe,ie,ce=l[0].meta.title+"",pe,Ie,te,J,fe=((qe=l[0].meta.author)==null?void 0:qe.name)+"",de,he,Ae,K,De,H,M,Q,E,Te,Y,Re,Ve,N;const je=[pt,_t],X=[];function Ne(o,v){return o[0].meta.cover?0:1}e=Ne(l),a=X[e]=je[e](l);let T=l[0].meta.cover&&Ze(l);var ae=l[0].content;function Me(o){return{}}ae&&(E=We(ae,Me()));let le=l[0].meta.tags,A=[];for(let o=0;o<le.length;o+=1)A[o]=xe(Ye(l,le,o));let R=l[0].meta.updated&&et(l),V=l[0].related.length>0&&tt(l);return{c(){a.c(),t=y(),s=_("div"),i=_("div"),f=_("div"),n=_("a"),c=_("span"),u=O(g),z=y(),k=_("p"),j=_("span"),w=O(b),G=O(" to read"),U=y(),B=_("span"),ue=O(W),we=y(),ee=_("span"),_e=O(ne),ke=O(" reads"),Pe=y(),ie=_("h1"),pe=O(ce),Ie=y(),te=_("p"),J=_("a"),de=O(fe),Ae=y(),K=_("div"),T&&T.c(),De=y(),H=_("div"),M=_("article"),Q=_("main"),E&&ge(E.$$.fragment),Te=y(),Y=_("div");for(let o=0;o<A.length;o+=1)A[o].c();Re=y(),R&&R.c(),Ve=y(),V&&V.c(),this.h()},l(o){a.l(o),t=L(o),s=p(o,"DIV",{class:!0});var v=h(s);i=p(v,"DIV",{class:!0});var D=h(i);f=p(D,"DIV",{class:!0});var Z=h(f);n=p(Z,"A",{href:!0});var me=h(n);c=p(me,"SPAN",{class:!0});var P=h(c);u=S(P,g),P.forEach(m),me.forEach(m),z=L(Z),k=p(Z,"P",{class:!0});var C=h(k);j=p(C,"SPAN",{});var ye=h(j);w=S(ye,b),G=S(ye," to read"),ye.forEach(m),U=L(C),B=p(C,"SPAN",{});var ze=h(B);ue=S(ze,W),ze.forEach(m),we=L(C),ee=p(C,"SPAN",{});var Le=h(ee);_e=S(Le,ne),ke=S(Le," reads"),Le.forEach(m),C.forEach(m),Z.forEach(m),Pe=L(D),ie=p(D,"H1",{});var He=h(ie);pe=S(He,ce),He.forEach(m),Ie=L(D),te=p(D,"P",{class:!0});var Ce=h(te);J=p(Ce,"A",{href:!0});var Fe=h(J);de=S(Fe,fe),Fe.forEach(m),Ce.forEach(m),Ae=L(D),K=p(D,"DIV",{class:!0});var Ge=h(K);T&&T.l(Ge),Ge.forEach(m),D.forEach(m),De=L(v),H=p(v,"DIV",{class:!0});var ve=h(H);M=p(ve,"ARTICLE",{class:!0});var se=h(M);Q=p(se,"MAIN",{class:!0});var Ue=h(Q);E&&Se(E.$$.fragment,Ue),Ue.forEach(m),Te=L(se),Y=p(se,"DIV",{class:!0});var Be=h(Y);for(let Oe=0;Oe<A.length;Oe+=1)A[Oe].l(Be);Be.forEach(m),Re=L(se),R&&R.l(se),se.forEach(m),Ve=L(ve),V&&V.l(ve),ve.forEach(m),v.forEach(m),this.h()},h(){var o;d(c,"class",$="badge "+l[0].meta.category),d(n,"href",I="/category/"+l[0].meta.category),d(k,"class","opacity-50 space-x-4"),d(f,"class","flex gap-4 flex-wrap align-center justify-center"),d(J,"href",he=(o=l[0].meta.author)==null?void 0:o.link),d(te,"class","underline"),d(K,"class","max-w-[1200px] mx-auto"),d(i,"class","space-y-4 my-16 mx-auto text-center"),d(Q,"class","prose lg:prose-xl dark:prose-invert max-w-none"),d(Y,"class","tags space-4"),d(M,"class","col-span-3 lg:col-span-2 space-y-8"),d(H,"class","max-w-[1000px] mx-auto px-4"),d(s,"class","container my-8")},m(o,v){X[e].m(o,v),x(o,t,v),x(o,s,v),r(s,i),r(i,f),r(f,n),r(n,c),r(c,u),r(f,z),r(f,k),r(k,j),r(j,w),r(j,G),r(k,U),r(k,B),r(B,ue),r(k,we),r(k,ee),r(ee,_e),r(ee,ke),r(i,Pe),r(i,ie),r(ie,pe),r(i,Ie),r(i,te),r(te,J),r(J,de),r(i,Ae),r(i,K),T&&T.m(K,null),r(s,De),r(s,H),r(H,M),r(M,Q),E&&Ee(E,Q,null),r(M,Te),r(M,Y);for(let D=0;D<A.length;D+=1)A[D]&&A[D].m(Y,null);r(M,Re),R&&R.m(M,null),r(H,Ve),V&&V.m(H,null),N=!0},p(o,[v]){var Z,me;let D=e;if(e=Ne(o),e===D?X[e].p(o,v):(Ke(),oe(X[D],1,1,()=>{X[D]=null}),Xe(),a=X[e],a?a.p(o,v):(a=X[e]=je[e](o),a.c()),re(a,1),a.m(t.parentNode,t)),(!N||v&1)&&g!==(g=o[0].meta.category+"")&&q(u,g),(!N||v&1&&$!==($="badge "+o[0].meta.category))&&d(c,"class",$),(!N||v&1&&I!==(I="/category/"+o[0].meta.category))&&d(n,"href",I),(!N||v&1)&&b!==(b=o[0].meta.readingTime+"")&&q(w,b),(!N||v&1)&&W!==(W=be(o[0].meta.date)+"")&&q(ue,W),(!N||v&1)&&ne!==(ne=o[0].counter.views.value+"")&&q(_e,ne),(!N||v&1)&&ce!==(ce=o[0].meta.title+"")&&q(pe,ce),(!N||v&1)&&fe!==(fe=((Z=o[0].meta.author)==null?void 0:Z.name)+"")&&q(de,fe),(!N||v&1&&he!==(he=(me=o[0].meta.author)==null?void 0:me.link))&&d(J,"href",he),o[0].meta.cover?T?T.p(o,v):(T=Ze(o),T.c(),T.m(K,null)):T&&(T.d(1),T=null),v&1&&ae!==(ae=o[0].content)){if(E){Ke();const P=E;oe(P.$$.fragment,1,0,()=>{$e(P,1)}),Xe()}ae?(E=We(ae,Me()),ge(E.$$.fragment),re(E.$$.fragment,1),Ee(E,Q,null)):E=null}if(v&1){le=o[0].meta.tags;let P;for(P=0;P<le.length;P+=1){const C=Ye(o,le,P);A[P]?A[P].p(C,v):(A[P]=xe(C),A[P].c(),A[P].m(Y,null))}for(;P<A.length;P+=1)A[P].d(1);A.length=le.length}o[0].meta.updated?R?R.p(o,v):(R=et(o),R.c(),R.m(M,null)):R&&(R.d(1),R=null),o[0].related.length>0?V?V.p(o,v):(V=tt(o),V.c(),V.m(H,null)):V&&(V.d(1),V=null)},i(o){N||(re(a),E&&re(E.$$.fragment,o),N=!0)},o(o){oe(a),E&&oe(E.$$.fragment,o),N=!1},d(o){X[e].d(o),o&&m(t),o&&m(s),T&&T.d(),E&&$e(E),lt(A,o),R&&R.d(),V&&V.d()}}}function ht(l,e,a){let{data:t}=e;const{action:s,namespace:i,options:f}=t.counter;return ft(()=>{window.counterApi.increment(t.counter.key,s,i,f,function(n,c){})}),l.$$set=n=>{"data"in n&&a(0,t=n.data)},[t]}class kt extends nt{constructor(e){super(),it(this,e,ht,dt,ct,{data:0})}}export{kt as P,bt as _,wt as g};
