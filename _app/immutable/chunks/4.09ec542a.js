import{_ as H}from"./preload-helper.a4192956.js";import{a as rt,b as st}from"./post.ff11ab49.js";import{S as nt,i as it,s as ct,x as We,a as y,k as _,q as O,y as ge,c as L,l as p,m as h,r as S,h as m,z as Se,n as d,b as x,D as s,A as Ee,d as re,f as Xe,g as se,u as q,B as $e,X as lt,o as ft,W as Je,v as Ke}from"./index.0c27b2d7.js";import{S as ot}from"./SEO.8d084338.js";function be(l){return new Date(l).toLocaleDateString("en-US",{day:"numeric",month:"long",year:"numeric"})}function bt(l){if(!l)return;let e=l.split("/");const a=e.pop(),t=a.split(".").pop(),o=a.replace("."+t,"_placeholder."+t);return e.push(o),e.join("/")}const mt=(l,e)=>{const a=l[e];return a?typeof a=="function"?a():Promise.resolve(a):new Promise((t,o)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(o.bind(null,new Error("Unknown variable dynamic import: "+e)))})};new TextEncoder;async function ut({params:l,url:e,fetch:a}){const t=await mt(Object.assign({"../../../posts/ad-free-alternatives-on-android/index.md":()=>H(()=>import("./index.85f673c1.js"),["./index.85f673c1.js","./index.0c27b2d7.js","./default.75651f92.js","../assets/default.b7b96979.css","./Link.1cef3009.js"],import.meta.url),"../../../posts/best-font-pairings/index.md":()=>H(()=>import("./index.6e1d7917.js"),["./index.6e1d7917.js","./index.0c27b2d7.js","./default.75651f92.js","../assets/default.b7b96979.css","./img.f40402ff.js","./use-lazy-image.e38dea70.js","./Link.1cef3009.js"],import.meta.url),"../../../posts/create-button-component-for-svelte/index.md":()=>H(()=>import("./index.440f5e68.js"),["./index.440f5e68.js","./index.0c27b2d7.js","./default.75651f92.js","../assets/default.b7b96979.css","./ProgressBar.svelte_svelte_type_style_lang.45fa0ba8.js","./index.7fb8422d.js","../assets/ProgressBar.4f1e9ba5.css","../assets/index.e5a87918.css"],import.meta.url),"../../../posts/create-horizontal-scroll-section-html-css-js/index.md":()=>H(()=>import("./index.d709ed11.js"),["./index.d709ed11.js","./index.0c27b2d7.js","./default.75651f92.js","../assets/default.b7b96979.css"],import.meta.url),"../../../posts/enter-zoom-unembarrassed/index.md":()=>H(()=>import("./index.b0389dfb.js"),["./index.b0389dfb.js","./index.0c27b2d7.js","./default.75651f92.js","../assets/default.b7b96979.css","./img.f40402ff.js","./use-lazy-image.e38dea70.js"],import.meta.url),"../../../posts/google-new-feature-june23/index.md":()=>H(()=>import("./index.d597663d.js"),["./index.d597663d.js","./index.0c27b2d7.js","./default.75651f92.js","../assets/default.b7b96979.css","./Link.1cef3009.js"],import.meta.url),"../../../posts/latex-errors-and-fixes/index.md":()=>H(()=>import("./index.25cf144b.js"),["./index.25cf144b.js","./index.0c27b2d7.js","./default.75651f92.js","../assets/default.b7b96979.css"],import.meta.url),"../../../posts/seo-component-for-svelte/index.md":()=>H(()=>import("./index.81dde7b9.js"),["./index.81dde7b9.js","./index.0c27b2d7.js","./default.75651f92.js","../assets/default.b7b96979.css"],import.meta.url),"../../../posts/tab-component-for-svelte-and-sveltekit/index.md":()=>H(()=>import("./index.2efde030.js"),["./index.2efde030.js","./index.0c27b2d7.js","./default.75651f92.js","../assets/default.b7b96979.css","../assets/index.11a65b74.css"],import.meta.url),"../../../posts/the-last-tool-for-colors/index.md":()=>H(()=>import("./index.bce8f2c6.js"),["./index.bce8f2c6.js","./index.0c27b2d7.js","./default.75651f92.js","../assets/default.b7b96979.css","./Link.1cef3009.js","./img.f40402ff.js","./use-lazy-image.e38dea70.js"],import.meta.url)}),`../../../posts/${l.slug}/index.md`),o=await a(`${e.origin}/api/posts`).then(G=>G.json()),i=await rt(o,t.metadata.title),{title:f,category:n,tags:c,slug:g}=i,u=await st(o,f,n,c),$="view",I="devdesignfun.com",z={behavior:"view"},P=g,j=await a(`https://counterapi.com/api/${I}/${$}/${P}`);let b;j&&(b=await j.json());const w={key:P,views:b,namespace:I,options:z,action:$};return{content:t.default,meta:i,counter:w,related:u}}const wt=Object.freeze(Object.defineProperty({__proto__:null,load:ut},Symbol.toStringTag,{value:"Module"}));function Qe(l,e,a){const t=l.slice();return t[4]=e[a],t}function Ye(l,e,a){const t=l.slice();return t[7]=e[a],t}function _t(l){let e,a;return e=new ot({props:{title:l[0].meta.title,description:l[0].meta.description,tags:l[0].meta.tags,ogType:"article"}}),{c(){ge(e.$$.fragment)},l(t){Se(e.$$.fragment,t)},m(t,o){Ee(e,t,o),a=!0},p(t,o){const i={};o&1&&(i.title=t[0].meta.title),o&1&&(i.description=t[0].meta.description),o&1&&(i.tags=t[0].meta.tags),e.$set(i)},i(t){a||(se(e.$$.fragment,t),a=!0)},o(t){re(e.$$.fragment,t),a=!1},d(t){$e(e,t)}}}function pt(l){let e,a;return e=new ot({props:{title:l[0].meta.title,description:l[0].meta.description,tags:l[0].meta.tags,ogType:"article",ogImage:l[0].meta.cover.image}}),{c(){ge(e.$$.fragment)},l(t){Se(e.$$.fragment,t)},m(t,o){Ee(e,t,o),a=!0},p(t,o){const i={};o&1&&(i.title=t[0].meta.title),o&1&&(i.description=t[0].meta.description),o&1&&(i.tags=t[0].meta.tags),o&1&&(i.ogImage=t[0].meta.cover.image),e.$set(i)},i(t){a||(se(e.$$.fragment,t),a=!0)},o(t){re(e.$$.fragment,t),a=!1},d(t){$e(e,t)}}}function Ze(l){let e,a,t;return{c(){e=_("img"),this.h()},l(o){e=p(o,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){Je(e.src,a=l[0].meta.cover.image)||d(e,"src",a),d(e,"alt",t="cover image of "+l[0].meta.title),d(e,"class","w-full")},m(o,i){x(o,e,i)},p(o,i){i&1&&!Je(e.src,a=o[0].meta.cover.image)&&d(e,"src",a),i&1&&t!==(t="cover image of "+o[0].meta.title)&&d(e,"alt",t)},d(o){o&&m(e)}}}function xe(l){let e,a,t=l[7]+"",o,i,f;return{c(){e=_("a"),a=_("span"),o=O(t),i=y(),this.h()},l(n){e=p(n,"A",{href:!0});var c=h(e);a=p(c,"SPAN",{class:!0});var g=h(a);o=S(g,t),g.forEach(m),i=L(c),c.forEach(m),this.h()},h(){d(a,"class","chip variant-ghost-secondary"),d(e,"href",f="/tag/"+l[7])},m(n,c){x(n,e,c),s(e,a),s(a,o),s(e,i)},p(n,c){c&1&&t!==(t=n[7]+"")&&q(o,t),c&1&&f!==(f="/tag/"+n[7])&&d(e,"href",f)},d(n){n&&m(e)}}}function et(l){let e,a,t,o=be(l[0].meta.updated)+"",i;return{c(){e=_("p"),a=_("strong"),t=O("Last updated: "),i=O(o),this.h()},l(f){e=p(f,"P",{class:!0});var n=h(e);a=p(n,"STRONG",{});var c=h(a);t=S(c,"Last updated: "),i=S(c,o),c.forEach(m),n.forEach(m),this.h()},h(){d(e,"class","opacity-50 py-16")},m(f,n){x(f,e,n),s(e,a),s(a,t),s(a,i)},p(f,n){n&1&&o!==(o=be(f[0].meta.updated)+"")&&q(i,o)},d(f){f&&m(e)}}}function tt(l){let e,a,t,o,i,f=l[0].related,n=[];for(let c=0;c<f.length;c+=1)n[c]=at(Qe(l,f,c));return{c(){e=_("div"),a=_("div"),t=_("h3"),o=O("Related"),i=y();for(let c=0;c<n.length;c+=1)n[c].c();this.h()},l(c){e=p(c,"DIV",{class:!0});var g=h(e);a=p(g,"DIV",{class:!0});var u=h(a);t=p(u,"H3",{});var $=h(t);o=S($,"Related"),$.forEach(m),i=L(u);for(let I=0;I<n.length;I+=1)n[I].l(u);u.forEach(m),g.forEach(m),this.h()},h(){d(a,"class","space-y-4"),d(e,"class","py-8")},m(c,g){x(c,e,g),s(e,a),s(a,t),s(t,o),s(a,i);for(let u=0;u<n.length;u+=1)n[u]&&n[u].m(a,null)},p(c,g){if(g&1){f=c[0].related;let u;for(u=0;u<f.length;u+=1){const $=Qe(c,f,u);n[u]?n[u].p($,g):(n[u]=at($),n[u].c(),n[u].m(a,null))}for(;u<n.length;u+=1)n[u].d(1);n.length=f.length}},d(c){c&&m(e),lt(n,c)}}}function at(l){let e,a,t=l[4].date+"",o,i,f,n,c=l[4].title+"",g,u,$,I=l[4].description+"",z,P,j;return{c(){e=_("article"),a=_("p"),o=O(t),i=y(),f=_("a"),n=_("h3"),g=O(c),u=y(),$=_("p"),z=O(I),j=y(),this.h()},l(b){e=p(b,"ARTICLE",{});var w=h(e);a=p(w,"P",{class:!0});var G=h(a);o=S(G,t),G.forEach(m),i=L(w),f=p(w,"A",{href:!0});var U=h(f);n=p(U,"H3",{});var B=h(n);g=S(B,c),B.forEach(m),u=L(U),$=p(U,"P",{});var W=h($);z=S(W,I),W.forEach(m),U.forEach(m),j=L(w),w.forEach(m),this.h()},h(){d(a,"class","opacity-50"),d(f,"href",P="/article/"+l[4].slug)},m(b,w){x(b,e,w),s(e,a),s(a,o),s(e,i),s(e,f),s(f,n),s(n,g),s(f,u),s(f,$),s($,z),s(e,j)},p(b,w){w&1&&t!==(t=b[4].date+"")&&q(o,t),w&1&&c!==(c=b[4].title+"")&&q(g,c),w&1&&I!==(I=b[4].description+"")&&q(z,I),w&1&&P!==(P="/article/"+b[4].slug)&&d(f,"href",P)},d(b){b&&m(e)}}}function dt(l){var qe;let e,a,t,o,i,f,n,c,g=l[0].meta.category+"",u,$,I,z,P,j,b=l[0].meta.readingTime+"",w,G,U,B,W=be(l[0].meta.date)+"",ue,we,ee,ne=l[0].counter.views.value+"",_e,Pe,ke,ie,ce=l[0].meta.title+"",pe,Ie,te,J,fe=((qe=l[0].meta.author)==null?void 0:qe.name)+"",de,he,Ae,K,De,C,M,Q,E,Te,Y,Re,Ve,N;const je=[pt,_t],X=[];function Ne(r,v){return r[0].meta.cover?0:1}e=Ne(l),a=X[e]=je[e](l);let T=l[0].meta.cover&&Ze(l);var ae=l[0].content;function Me(r){return{}}ae&&(E=We(ae,Me()));let le=l[0].meta.tags,A=[];for(let r=0;r<le.length;r+=1)A[r]=xe(Ye(l,le,r));let R=l[0].meta.updated&&et(l),V=l[0].related.length>0&&tt(l);return{c(){a.c(),t=y(),o=_("div"),i=_("div"),f=_("div"),n=_("a"),c=_("span"),u=O(g),z=y(),P=_("p"),j=_("span"),w=O(b),G=O(" to read"),U=y(),B=_("span"),ue=O(W),we=y(),ee=_("span"),_e=O(ne),Pe=O(" reads"),ke=y(),ie=_("h1"),pe=O(ce),Ie=y(),te=_("p"),J=_("a"),de=O(fe),Ae=y(),K=_("div"),T&&T.c(),De=y(),C=_("div"),M=_("article"),Q=_("main"),E&&ge(E.$$.fragment),Te=y(),Y=_("div");for(let r=0;r<A.length;r+=1)A[r].c();Re=y(),R&&R.c(),Ve=y(),V&&V.c(),this.h()},l(r){a.l(r),t=L(r),o=p(r,"DIV",{class:!0});var v=h(o);i=p(v,"DIV",{class:!0});var D=h(i);f=p(D,"DIV",{class:!0});var Z=h(f);n=p(Z,"A",{href:!0});var me=h(n);c=p(me,"SPAN",{class:!0});var k=h(c);u=S(k,g),k.forEach(m),me.forEach(m),z=L(Z),P=p(Z,"P",{class:!0});var F=h(P);j=p(F,"SPAN",{});var ye=h(j);w=S(ye,b),G=S(ye," to read"),ye.forEach(m),U=L(F),B=p(F,"SPAN",{});var ze=h(B);ue=S(ze,W),ze.forEach(m),we=L(F),ee=p(F,"SPAN",{});var Le=h(ee);_e=S(Le,ne),Pe=S(Le," reads"),Le.forEach(m),F.forEach(m),Z.forEach(m),ke=L(D),ie=p(D,"H1",{});var He=h(ie);pe=S(He,ce),He.forEach(m),Ie=L(D),te=p(D,"P",{class:!0});var Ce=h(te);J=p(Ce,"A",{href:!0});var Fe=h(J);de=S(Fe,fe),Fe.forEach(m),Ce.forEach(m),Ae=L(D),K=p(D,"DIV",{class:!0});var Ge=h(K);T&&T.l(Ge),Ge.forEach(m),D.forEach(m),De=L(v),C=p(v,"DIV",{class:!0});var ve=h(C);M=p(ve,"ARTICLE",{class:!0});var oe=h(M);Q=p(oe,"MAIN",{class:!0});var Ue=h(Q);E&&Se(E.$$.fragment,Ue),Ue.forEach(m),Te=L(oe),Y=p(oe,"DIV",{class:!0});var Be=h(Y);for(let Oe=0;Oe<A.length;Oe+=1)A[Oe].l(Be);Be.forEach(m),Re=L(oe),R&&R.l(oe),oe.forEach(m),Ve=L(ve),V&&V.l(ve),ve.forEach(m),v.forEach(m),this.h()},h(){var r;d(c,"class",$="badge "+l[0].meta.category),d(n,"href",I="/category/"+l[0].meta.category),d(P,"class","opacity-50 space-x-4"),d(f,"class","flex gap-4 flex-wrap align-center justify-center"),d(J,"href",he=(r=l[0].meta.author)==null?void 0:r.link),d(te,"class","underline"),d(K,"class","max-w-[1200px] mx-auto"),d(i,"class","space-y-4 my-16 mx-auto text-center"),d(Q,"class","prose lg:prose-xl dark:prose-invert max-w-none"),d(Y,"class","tags space-4"),d(M,"class","col-span-3 lg:col-span-2 space-y-8"),d(C,"class","max-w-[1000px] mx-auto px-4"),d(o,"class","container my-8")},m(r,v){X[e].m(r,v),x(r,t,v),x(r,o,v),s(o,i),s(i,f),s(f,n),s(n,c),s(c,u),s(f,z),s(f,P),s(P,j),s(j,w),s(j,G),s(P,U),s(P,B),s(B,ue),s(P,we),s(P,ee),s(ee,_e),s(ee,Pe),s(i,ke),s(i,ie),s(ie,pe),s(i,Ie),s(i,te),s(te,J),s(J,de),s(i,Ae),s(i,K),T&&T.m(K,null),s(o,De),s(o,C),s(C,M),s(M,Q),E&&Ee(E,Q,null),s(M,Te),s(M,Y);for(let D=0;D<A.length;D+=1)A[D]&&A[D].m(Y,null);s(M,Re),R&&R.m(M,null),s(C,Ve),V&&V.m(C,null),N=!0},p(r,[v]){var Z,me;let D=e;if(e=Ne(r),e===D?X[e].p(r,v):(Ke(),re(X[D],1,1,()=>{X[D]=null}),Xe(),a=X[e],a?a.p(r,v):(a=X[e]=je[e](r),a.c()),se(a,1),a.m(t.parentNode,t)),(!N||v&1)&&g!==(g=r[0].meta.category+"")&&q(u,g),(!N||v&1&&$!==($="badge "+r[0].meta.category))&&d(c,"class",$),(!N||v&1&&I!==(I="/category/"+r[0].meta.category))&&d(n,"href",I),(!N||v&1)&&b!==(b=r[0].meta.readingTime+"")&&q(w,b),(!N||v&1)&&W!==(W=be(r[0].meta.date)+"")&&q(ue,W),(!N||v&1)&&ne!==(ne=r[0].counter.views.value+"")&&q(_e,ne),(!N||v&1)&&ce!==(ce=r[0].meta.title+"")&&q(pe,ce),(!N||v&1)&&fe!==(fe=((Z=r[0].meta.author)==null?void 0:Z.name)+"")&&q(de,fe),(!N||v&1&&he!==(he=(me=r[0].meta.author)==null?void 0:me.link))&&d(J,"href",he),r[0].meta.cover?T?T.p(r,v):(T=Ze(r),T.c(),T.m(K,null)):T&&(T.d(1),T=null),v&1&&ae!==(ae=r[0].content)){if(E){Ke();const k=E;re(k.$$.fragment,1,0,()=>{$e(k,1)}),Xe()}ae?(E=We(ae,Me()),ge(E.$$.fragment),se(E.$$.fragment,1),Ee(E,Q,null)):E=null}if(v&1){le=r[0].meta.tags;let k;for(k=0;k<le.length;k+=1){const F=Ye(r,le,k);A[k]?A[k].p(F,v):(A[k]=xe(F),A[k].c(),A[k].m(Y,null))}for(;k<A.length;k+=1)A[k].d(1);A.length=le.length}r[0].meta.updated?R?R.p(r,v):(R=et(r),R.c(),R.m(M,null)):R&&(R.d(1),R=null),r[0].related.length>0?V?V.p(r,v):(V=tt(r),V.c(),V.m(C,null)):V&&(V.d(1),V=null)},i(r){N||(se(a),E&&se(E.$$.fragment,r),N=!0)},o(r){re(a),E&&re(E.$$.fragment,r),N=!1},d(r){X[e].d(r),r&&m(t),r&&m(o),T&&T.d(),E&&$e(E),lt(A,r),R&&R.d(),V&&V.d()}}}function ht(l,e,a){let{data:t}=e;const{action:o,namespace:i,options:f}=t.counter;return ft(()=>{window.counterApi.increment(t.counter.key,o,i,f,function(n,c){})}),l.$$set=n=>{"data"in n&&a(0,t=n.data)},[t]}class Pt extends nt{constructor(e){super(),it(this,e,ht,dt,ct,{data:0})}}export{Pt as P,wt as _,bt as g};
