import{_ as le}from"../chunks/preload-helper.41c905a7.js";import{a as lt}from"../chunks/post.81c879ca.js";import{S as st,i as rt,s as ot,x as Fe,a as y,k as p,q as L,y as ve,c as V,l as d,m as h,r as O,h as m,z as Le,n as _,b as Q,D as i,A as ge,d as se,f as Ue,g as re,u as H,B as Ee,X as tt,W as We,Z as nt,v as Xe}from"../chunks/index.7edcf0da.js";import{a as $e,g as it,u as ct,S as at}from"../chunks/SEO.3118c75d.js";const ft=(l,e)=>{const a=l[e];return a?typeof a=="function"?a():Promise.resolve(a):new Promise((t,r)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(r.bind(null,new Error("Unknown variable dynamic import: "+e)))})};new TextEncoder;async function mt({params:l,url:e,fetch:a}){const t=await ft(Object.assign({"../../../posts/ad-free-alternatives-on-android/post.md":()=>le(()=>import("../chunks/post.7d0f03b9.js"),["../chunks/post.7d0f03b9.js","../chunks/index.7edcf0da.js","../chunks/default.9fa5da0c.js","../assets/default.2511c470.css","../chunks/Link.baceea91.js"],import.meta.url),"../../../posts/create-button-component-for-svelte/post.md":()=>le(()=>import("../chunks/post.08e8a3c1.js"),["../chunks/post.08e8a3c1.js","../chunks/index.7edcf0da.js","../chunks/default.9fa5da0c.js","../assets/default.2511c470.css","../chunks/ProgressBar.svelte_svelte_type_style_lang.2e307dc5.js","../chunks/index.30212c8f.js","../assets/ProgressBar.4f1e9ba5.css","../assets/post.e5a87918.css"],import.meta.url),"../../../posts/create-horizontal-scroll-section-html-css-js/post.md":()=>le(()=>import("../chunks/post.a5c64034.js"),["../chunks/post.a5c64034.js","../chunks/index.7edcf0da.js","../chunks/default.9fa5da0c.js","../assets/default.2511c470.css"],import.meta.url),"../../../posts/seo-component-for-svelte/post.md":()=>le(()=>import("../chunks/post.d88ff647.js"),["../chunks/post.d88ff647.js","../chunks/index.7edcf0da.js","../chunks/default.9fa5da0c.js","../assets/default.2511c470.css"],import.meta.url),"../../../posts/tab-component-for-svelte-and-sveltekit/post.md":()=>le(()=>import("../chunks/post.1ed2f004.js"),["../chunks/post.1ed2f004.js","../chunks/index.7edcf0da.js","../chunks/default.9fa5da0c.js","../assets/default.2511c470.css","../assets/post.11a65b74.css"],import.meta.url),"../../../posts/the-last-tool-for-colors/post.md":()=>le(()=>import("../chunks/post.6d67a504.js"),["../chunks/post.6d67a504.js","../chunks/index.7edcf0da.js","../chunks/default.9fa5da0c.js","../assets/default.2511c470.css","../chunks/SEO.3118c75d.js","../chunks/Link.baceea91.js"],import.meta.url)}),`../../../posts/${l.slug}/post.md`),r=await a(`${e.origin}/api/posts`).then(o=>o.json()),c=await lt(r,t.metadata.title,t.metadata.category,t.metadata.tags),n=t.metadata;return{content:t.default,meta:n,related:c}}const $t=Object.freeze(Object.defineProperty({__proto__:null,load:mt},Symbol.toStringTag,{value:"Module"}));function Ze(l,e,a){const t=l.slice();return t[2]=e[a],t}function Je(l,e,a){const t=l.slice();return t[5]=e[a],t}function ut(l){let e,a;return e=new at({props:{title:l[0].meta.title,description:l[0].meta.description,tags:l[0].meta.tags,ogType:"article"}}),{c(){ve(e.$$.fragment)},l(t){Le(e.$$.fragment,t)},m(t,r){ge(e,t,r),a=!0},p(t,r){const c={};r&1&&(c.title=t[0].meta.title),r&1&&(c.description=t[0].meta.description),r&1&&(c.tags=t[0].meta.tags),e.$set(c)},i(t){a||(re(e.$$.fragment,t),a=!0)},o(t){se(e.$$.fragment,t),a=!1},d(t){Ee(e,t)}}}function _t(l){let e,a;return e=new at({props:{title:l[0].meta.title,description:l[0].meta.description,tags:l[0].meta.tags,ogType:"article",ogImage:"./"+l[0].meta.slug+"/"+l[0].meta.cover.image}}),{c(){ve(e.$$.fragment)},l(t){Le(e.$$.fragment,t)},m(t,r){ge(e,t,r),a=!0},p(t,r){const c={};r&1&&(c.title=t[0].meta.title),r&1&&(c.description=t[0].meta.description),r&1&&(c.tags=t[0].meta.tags),r&1&&(c.ogImage="./"+t[0].meta.slug+"/"+t[0].meta.cover.image),e.$set(c)},i(t){a||(re(e.$$.fragment,t),a=!0)},o(t){se(e.$$.fragment,t),a=!1},d(t){Ee(e,t)}}}function Ke(l){let e,a,t,r,c;return{c(){e=p("img"),this.h()},l(n){e=d(n,"IMG",{src:!0,"data-src":!0,alt:!0,class:!0}),this.h()},h(){var n;We(e.src,a=l[1])||_(e,"src",a),_(e,"data-src",t="./"+l[0].meta.slug+"/"+((n=l[0].meta.cover)==null?void 0:n.image)),_(e,"alt",""),_(e,"class","w-full")},m(n,o){Q(n,e,o),r||(c=nt(ct.call(null,e,{threshold:.5})),r=!0)},p(n,o){var f;o&2&&!We(e.src,a=n[1])&&_(e,"src",a),o&1&&t!==(t="./"+n[0].meta.slug+"/"+((f=n[0].meta.cover)==null?void 0:f.image))&&_(e,"data-src",t)},d(n){n&&m(e),r=!1,c()}}}function Qe(l){let e,a,t=l[5]+"",r,c,n;return{c(){e=p("a"),a=p("span"),r=L(t),c=y(),this.h()},l(o){e=d(o,"A",{href:!0});var f=h(e);a=d(f,"SPAN",{class:!0});var g=h(a);r=O(g,t),g.forEach(m),c=V(f),f.forEach(m),this.h()},h(){_(a,"class","chip variant-filled-secondary"),_(e,"href",n="/tag/"+l[5])},m(o,f){Q(o,e,f),i(e,a),i(a,r),i(e,c)},p(o,f){f&1&&t!==(t=o[5]+"")&&H(r,t),f&1&&n!==(n="/tag/"+o[5])&&_(e,"href",n)},d(o){o&&m(e)}}}function Ye(l){let e,a,t,r=$e(l[0].meta.updated)+"",c;return{c(){e=p("p"),a=p("strong"),t=L("Last updated: "),c=L(r),this.h()},l(n){e=d(n,"P",{class:!0});var o=h(e);a=d(o,"STRONG",{});var f=h(a);t=O(f,"Last updated: "),c=O(f,r),f.forEach(m),o.forEach(m),this.h()},h(){_(e,"class","opacity-50 py-16")},m(n,o){Q(n,e,o),i(e,a),i(a,t),i(a,c)},p(n,o){o&1&&r!==(r=$e(n[0].meta.updated)+"")&&H(c,r)},d(n){n&&m(e)}}}function xe(l){let e,a,t,r,c,n=l[0].related,o=[];for(let f=0;f<n.length;f+=1)o[f]=et(Ze(l,n,f));return{c(){e=p("div"),a=p("div"),t=p("h3"),r=L("Related"),c=y();for(let f=0;f<o.length;f+=1)o[f].c();this.h()},l(f){e=d(f,"DIV",{class:!0});var g=h(e);a=d(g,"DIV",{class:!0});var u=h(a);t=d(u,"H3",{});var I=h(t);r=O(I,"Related"),I.forEach(m),c=V(u);for(let R=0;R<o.length;R+=1)o[R].l(u);u.forEach(m),g.forEach(m),this.h()},h(){_(a,"class","space-y-4"),_(e,"class","py-8")},m(f,g){Q(f,e,g),i(e,a),i(a,t),i(t,r),i(a,c);for(let u=0;u<o.length;u+=1)o[u]&&o[u].m(a,null)},p(f,g){if(g&1){n=f[0].related;let u;for(u=0;u<n.length;u+=1){const I=Ze(f,n,u);o[u]?o[u].p(I,g):(o[u]=et(I),o[u].c(),o[u].m(a,null))}for(;u<o.length;u+=1)o[u].d(1);o.length=n.length}},d(f){f&&m(e),tt(o,f)}}}function et(l){let e,a,t=l[2].date+"",r,c,n,o,f=l[2].title+"",g,u,I,R=l[2].description+"",C,S,q;return{c(){e=p("article"),a=p("p"),r=L(t),c=y(),n=p("a"),o=p("h3"),g=L(f),u=y(),I=p("p"),C=L(R),q=y(),this.h()},l(A){e=d(A,"ARTICLE",{});var b=h(e);a=d(b,"P",{class:!0});var Y=h(a);r=O(Y,t),Y.forEach(m),c=V(b),n=d(b,"A",{href:!0});var G=h(n);o=d(G,"H3",{});var B=h(o);g=O(B,f),B.forEach(m),u=V(G),I=d(G,"P",{});var F=h(I);C=O(F,R),F.forEach(m),G.forEach(m),q=V(b),b.forEach(m),this.h()},h(){_(a,"class","opacity-50"),_(n,"href",S="/article/"+l[2].slug)},m(A,b){Q(A,e,b),i(e,a),i(a,r),i(e,c),i(e,n),i(n,o),i(o,g),i(n,u),i(n,I),i(I,C),i(e,q)},p(A,b){b&1&&t!==(t=A[2].date+"")&&H(r,t),b&1&&f!==(f=A[2].title+"")&&H(g,f),b&1&&R!==(R=A[2].description+"")&&H(C,R),b&1&&S!==(S="/article/"+A[2].slug)&&_(n,"href",S)},d(A){A&&m(e)}}}function pt(l){var je;let e,a,t,r,c,n,o,f,g=l[0].meta.category+"",u,I,R,C,S,q,A=l[0].meta.readingTime+"",b,Y,G,B,F=$e(l[0].meta.date)+"",me,be,oe,ne=l[0].meta.title+"",ue,ke,x,W,ie=((je=l[0].meta.author)==null?void 0:je.name)+"",_e,pe,Pe,X,Ie,M,j,z,ce,Ae,Te,E,we,Z,De,ye,N;const Oe=[_t,ut],U=[];function Se(s,v){return s[0].meta.cover?0:1}e=Se(l),a=U[e]=Oe[e](l);let T=l[0].meta.cover&&Ke(l);var ee=l[0].content;function Ne(s){return{}}ee&&(E=Fe(ee,Ne()));let te=l[0].meta.tags,k=[];for(let s=0;s<te.length;s+=1)k[s]=Qe(Je(l,te,s));let w=l[0].meta.updated&&Ye(l),D=l[0].related.length>0&&xe(l);return{c(){a.c(),t=y(),r=p("div"),c=p("div"),n=p("div"),o=p("a"),f=p("span"),u=L(g),C=y(),S=p("p"),q=p("span"),b=L(A),Y=L(" to read"),G=y(),B=p("span"),me=L(F),be=y(),oe=p("h1"),ue=L(ne),ke=y(),x=p("p"),W=p("a"),_e=L(ie),Pe=y(),X=p("div"),T&&T.c(),Ie=y(),M=p("div"),j=p("article"),z=p("main"),ce=p("h3"),Ae=L("Table of contents"),Te=y(),E&&ve(E.$$.fragment),we=y(),Z=p("div");for(let s=0;s<k.length;s+=1)k[s].c();De=y(),w&&w.c(),ye=y(),D&&D.c(),this.h()},l(s){a.l(s),t=V(s),r=d(s,"DIV",{class:!0});var v=h(r);c=d(v,"DIV",{class:!0});var P=h(c);n=d(P,"DIV",{class:!0});var J=h(n);o=d(J,"A",{href:!0});var fe=h(o);f=d(fe,"SPAN",{class:!0});var $=h(f);u=O($,g),$.forEach(m),fe.forEach(m),C=V(J),S=d(J,"P",{class:!0});var K=h(S);q=d(K,"SPAN",{});var Ve=h(q);b=O(Ve,A),Y=O(Ve," to read"),Ve.forEach(m),G=V(K),B=d(K,"SPAN",{});var qe=h(B);me=O(qe,F),qe.forEach(m),K.forEach(m),J.forEach(m),be=V(P),oe=d(P,"H1",{});var He=h(oe);ue=O(He,ne),He.forEach(m),ke=V(P),x=d(P,"P",{class:!0});var Me=h(x);W=d(Me,"A",{href:!0});var ze=h(W);_e=O(ze,ie),ze.forEach(m),Me.forEach(m),Pe=V(P),X=d(P,"DIV",{class:!0});var Ce=h(X);T&&T.l(Ce),Ce.forEach(m),P.forEach(m),Ie=V(v),M=d(v,"DIV",{class:!0});var de=h(M);j=d(de,"ARTICLE",{class:!0});var ae=h(j);z=d(ae,"MAIN",{class:!0});var he=h(z);ce=d(he,"H3",{});var Ge=h(ce);Ae=O(Ge,"Table of contents"),Ge.forEach(m),Te=V(he),E&&Le(E.$$.fragment,he),he.forEach(m),we=V(ae),Z=d(ae,"DIV",{class:!0});var Be=h(Z);for(let Re=0;Re<k.length;Re+=1)k[Re].l(Be);Be.forEach(m),De=V(ae),w&&w.l(ae),ae.forEach(m),ye=V(de),D&&D.l(de),de.forEach(m),v.forEach(m),this.h()},h(){var s;_(f,"class",I="badge "+l[0].meta.category),_(o,"href",R="/category/"+l[0].meta.category),_(S,"class","opacity-50 space-x-4"),_(n,"class","flex gap-4 flex-wrap align-center justify-center"),_(W,"href",pe=(s=l[0].meta.author)==null?void 0:s.link),_(x,"class","underline"),_(X,"class","max-w-[1200px] mx-auto"),_(c,"class","space-y-4 my-16 mx-auto text-center"),_(z,"class","prose-xl max-w-none"),_(Z,"class","tags space-x-4"),_(j,"class","col-span-3 lg:col-span-2 space-y-8"),_(M,"class","max-w-[1000px] mx-auto px-4"),_(r,"class","container my-8")},m(s,v){U[e].m(s,v),Q(s,t,v),Q(s,r,v),i(r,c),i(c,n),i(n,o),i(o,f),i(f,u),i(n,C),i(n,S),i(S,q),i(q,b),i(q,Y),i(S,G),i(S,B),i(B,me),i(c,be),i(c,oe),i(oe,ue),i(c,ke),i(c,x),i(x,W),i(W,_e),i(c,Pe),i(c,X),T&&T.m(X,null),i(r,Ie),i(r,M),i(M,j),i(j,z),i(z,ce),i(ce,Ae),i(z,Te),E&&ge(E,z,null),i(j,we),i(j,Z);for(let P=0;P<k.length;P+=1)k[P]&&k[P].m(Z,null);i(j,De),w&&w.m(j,null),i(M,ye),D&&D.m(M,null),N=!0},p(s,[v]){var J,fe;let P=e;if(e=Se(s),e===P?U[e].p(s,v):(Xe(),se(U[P],1,1,()=>{U[P]=null}),Ue(),a=U[e],a?a.p(s,v):(a=U[e]=Oe[e](s),a.c()),re(a,1),a.m(t.parentNode,t)),(!N||v&1)&&g!==(g=s[0].meta.category+"")&&H(u,g),(!N||v&1&&I!==(I="badge "+s[0].meta.category))&&_(f,"class",I),(!N||v&1&&R!==(R="/category/"+s[0].meta.category))&&_(o,"href",R),(!N||v&1)&&A!==(A=s[0].meta.readingTime+"")&&H(b,A),(!N||v&1)&&F!==(F=$e(s[0].meta.date)+"")&&H(me,F),(!N||v&1)&&ne!==(ne=s[0].meta.title+"")&&H(ue,ne),(!N||v&1)&&ie!==(ie=((J=s[0].meta.author)==null?void 0:J.name)+"")&&H(_e,ie),(!N||v&1&&pe!==(pe=(fe=s[0].meta.author)==null?void 0:fe.link))&&_(W,"href",pe),s[0].meta.cover?T?T.p(s,v):(T=Ke(s),T.c(),T.m(X,null)):T&&(T.d(1),T=null),v&1&&ee!==(ee=s[0].content)){if(E){Xe();const $=E;se($.$$.fragment,1,0,()=>{Ee($,1)}),Ue()}ee?(E=Fe(ee,Ne()),ve(E.$$.fragment),re(E.$$.fragment,1),ge(E,z,null)):E=null}if(v&1){te=s[0].meta.tags;let $;for($=0;$<te.length;$+=1){const K=Je(s,te,$);k[$]?k[$].p(K,v):(k[$]=Qe(K),k[$].c(),k[$].m(Z,null))}for(;$<k.length;$+=1)k[$].d(1);k.length=te.length}s[0].meta.updated?w?w.p(s,v):(w=Ye(s),w.c(),w.m(j,null)):w&&(w.d(1),w=null),s[0].related.length>0?D?D.p(s,v):(D=xe(s),D.c(),D.m(M,null)):D&&(D.d(1),D=null)},i(s){N||(re(a),E&&re(E.$$.fragment,s),N=!0)},o(s){se(a),E&&se(E.$$.fragment,s),N=!1},d(s){U[e].d(s),s&&m(t),s&&m(r),T&&T.d(),E&&Ee(E),tt(k,s),w&&w.d(),D&&D.d()}}}function dt(l,e,a){let t,{data:r}=e;return l.$$set=c=>{"data"in c&&a(0,r=c.data)},l.$$.update=()=>{var c;l.$$.dirty&1&&a(1,t=it(`${r.meta.slug}/${(c=r.meta.cover)==null?void 0:c.image}`))},[r,t]}class bt extends st{constructor(e){super(),rt(this,e,dt,pt,ot,{data:0})}}export{bt as component,$t as universal};
