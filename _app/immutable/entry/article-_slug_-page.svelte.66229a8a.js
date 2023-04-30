import{S as Xe,i as je,s as Je,k as _,l as h,W as Ce,n as d,b as ae,Q as ze,h as u,x as Ge,a as S,q as V,y as ne,c as T,m as g,r as y,z as de,D as n,A as ie,d as B,f as De,g as H,u as F,B as oe,X as Me,v as we}from"../chunks/index.18bd6673.js";import{S as Ke}from"../chunks/SEO.a1ff08d3.js";function Ye(r){let e,a;return{c(){e=_("img"),this.h()},l(t){e=h(t,"IMG",{src:!0,alt:!0,loading:!0}),this.h()},h(){Ce(e.src,a=r[0])||d(e,"src",a),d(e,"alt",r[1]),d(e,"loading","lazy")},m(t,l){ae(t,e,l)},p(t,[l]){l&1&&!Ce(e.src,a=t[0])&&d(e,"src",a),l&2&&d(e,"alt",t[1])},i:ze,o:ze,d(t){t&&u(e)}}}function Ze(r,e,a){let{src:t}=e,{alt:l}=e;return r.$$set=o=>{"src"in o&&a(0,t=o.src),"alt"in o&&a(1,l=o.alt)},[t,l]}class xe extends Xe{constructor(e){super(),je(this,e,Ze,Ye,Je,{src:0,alt:1})}}function he(r){return new Date(r).toLocaleDateString("en-US",{day:"numeric",month:"long",year:"numeric"})}function Oe(r,e,a){const t=r.slice();return t[1]=e[a],t}function Be(r,e,a){const t=r.slice();return t[4]=e[a],t}function et(r){let e,a;return e=new Ke({props:{title:r[0].meta.title,description:r[0].meta.description,tags:r[0].meta.tags,ogType:"article"}}),{c(){ne(e.$$.fragment)},l(t){de(e.$$.fragment,t)},m(t,l){ie(e,t,l),a=!0},p(t,l){const o={};l&1&&(o.title=t[0].meta.title),l&1&&(o.description=t[0].meta.description),l&1&&(o.tags=t[0].meta.tags),e.$set(o)},i(t){a||(H(e.$$.fragment,t),a=!0)},o(t){B(e.$$.fragment,t),a=!1},d(t){oe(e,t)}}}function tt(r){let e,a;return e=new Ke({props:{title:r[0].meta.title,description:r[0].meta.description,tags:r[0].meta.tags,ogType:"article",ogImage:"./"+r[0].meta.slug+"/"+r[0].meta.cover.image}}),{c(){ne(e.$$.fragment)},l(t){de(e.$$.fragment,t)},m(t,l){ie(e,t,l),a=!0},p(t,l){const o={};l&1&&(o.title=t[0].meta.title),l&1&&(o.description=t[0].meta.description),l&1&&(o.tags=t[0].meta.tags),l&1&&(o.ogImage="./"+t[0].meta.slug+"/"+t[0].meta.cover.image),e.$set(o)},i(t){a||(H(e.$$.fragment,t),a=!0)},o(t){B(e.$$.fragment,t),a=!1},d(t){oe(e,t)}}}function Fe(r){var t;let e,a;return e=new xe({props:{src:"./"+r[0].meta.slug+"/"+((t=r[0].meta.cover)==null?void 0:t.image),alt:""}}),{c(){ne(e.$$.fragment)},l(l){de(e.$$.fragment,l)},m(l,o){ie(e,l,o),a=!0},p(l,o){var f;const i={};o&1&&(i.src="./"+l[0].meta.slug+"/"+((f=l[0].meta.cover)==null?void 0:f.image)),e.$set(i)},i(l){a||(H(e.$$.fragment,l),a=!0)},o(l){B(e.$$.fragment,l),a=!1},d(l){oe(e,l)}}}function Qe(r){let e,a,t=r[4]+"",l,o,i;return{c(){e=_("a"),a=_("span"),l=V(t),o=S(),this.h()},l(f){e=h(f,"A",{href:!0});var m=g(e);a=h(m,"SPAN",{class:!0});var A=g(a);l=y(A,t),A.forEach(u),o=T(m),m.forEach(u),this.h()},h(){d(a,"class","chip variant-filled-secondary"),d(e,"href",i="/tag/"+r[4])},m(f,m){ae(f,e,m),n(e,a),n(a,l),n(e,o)},p(f,m){m&1&&t!==(t=f[4]+"")&&F(l,t),m&1&&i!==(i="/tag/"+f[4])&&d(e,"href",i)},d(f){f&&u(e)}}}function Ue(r){let e,a,t,l=he(r[0].meta.updated)+"",o;return{c(){e=_("p"),a=_("strong"),t=V("Last updated: "),o=V(l),this.h()},l(i){e=h(i,"P",{class:!0});var f=g(e);a=h(f,"STRONG",{});var m=g(a);t=y(m,"Last updated: "),o=y(m,l),m.forEach(u),f.forEach(u),this.h()},h(){d(e,"class","opacity-50 py-16")},m(i,f){ae(i,e,f),n(e,a),n(a,t),n(a,o)},p(i,f){f&1&&l!==(l=he(i[0].meta.updated)+"")&&F(o,l)},d(i){i&&u(e)}}}function We(r){let e,a,t=r[1].date+"",l,o,i,f,m=r[1].title+"",A,q,L,N=r[1].description+"",Q,P,C;return{c(){e=_("article"),a=_("p"),l=V(t),o=S(),i=_("a"),f=_("h3"),A=V(m),q=S(),L=_("p"),Q=V(N),C=S(),this.h()},l(w){e=h(w,"ARTICLE",{});var I=g(e);a=h(I,"P",{class:!0});var U=g(a);l=y(U,t),U.forEach(u),o=T(I),i=h(I,"A",{href:!0});var z=g(i);f=h(z,"H3",{});var K=g(f);A=y(K,m),K.forEach(u),q=T(z),L=h(z,"P",{});var W=g(L);Q=y(W,N),W.forEach(u),z.forEach(u),C=T(I),I.forEach(u),this.h()},h(){d(a,"class","opacity-50"),d(i,"href",P="/article/"+r[1].slug)},m(w,I){ae(w,e,I),n(e,a),n(a,l),n(e,o),n(e,i),n(i,f),n(f,A),n(i,q),n(i,L),n(L,Q),n(e,C)},p(w,I){I&1&&t!==(t=w[1].date+"")&&F(l,t),I&1&&m!==(m=w[1].title+"")&&F(A,m),I&1&&N!==(N=w[1].description+"")&&F(Q,N),I&1&&P!==(P="/article/"+w[1].slug)&&d(i,"href",P)},d(w){w&&u(e)}}}function at(r){let e,a,t,l,o,i,f,m,A,q=r[0].meta.category+"",L,N,Q,P,C=r[0].meta.readingTime+"",w,I,U=he(r[0].meta.date)+"",z,K,W,le=r[0].meta.title+"",ce,ge,fe,G,se,pe,ve,v,$e,j,Ee,be,Y,Z,M,re,ke,Ie,O;const Ae=[tt,et],X=[];function Se(s,p){return s[0].meta.cover?0:1}e=Se(r),a=X[e]=Ae[e](r);let $=r[0].meta.cover&&Fe(r);var x=r[0].content;function Te(s){return{}}x&&(v=Ge(x,Te()));let ee=r[0].meta.tags,b=[];for(let s=0;s<ee.length;s+=1)b[s]=Qe(Be(r,ee,s));let D=r[0].meta.updated&&Ue(r),te=r[0].related,k=[];for(let s=0;s<te.length;s+=1)k[s]=We(Oe(r,te,s));return{c(){a.c(),t=S(),l=_("div"),o=_("div"),i=_("article"),f=_("div"),m=_("a"),A=_("span"),L=V(q),Q=S(),P=_("p"),w=V(C),I=V(` to read ~
					`),z=V(U),K=S(),W=_("h1"),ce=V(le),ge=S(),$&&$.c(),fe=S(),G=_("main"),se=_("h3"),pe=V("Table of contents"),ve=S(),v&&ne(v.$$.fragment),$e=S(),j=_("div");for(let s=0;s<b.length;s+=1)b[s].c();Ee=S(),D&&D.c(),be=S(),Y=_("div"),Z=_("div"),M=_("div"),re=_("h3"),ke=V("Related"),Ie=S();for(let s=0;s<k.length;s+=1)k[s].c();this.h()},l(s){a.l(s),t=T(s),l=h(s,"DIV",{class:!0});var p=g(l);o=h(p,"DIV",{class:!0});var E=g(o);i=h(E,"ARTICLE",{class:!0});var c=g(i);f=h(c,"DIV",{class:!0});var R=g(f);m=h(R,"A",{href:!0});var Pe=g(m);A=h(Pe,"SPAN",{class:!0});var Ve=g(A);L=y(Ve,q),Ve.forEach(u),Pe.forEach(u),Q=T(R),P=h(R,"P",{class:!0});var ue=g(P);w=y(ue,C),I=y(ue,` to read ~
					`),z=y(ue,U),ue.forEach(u),R.forEach(u),K=T(c),W=h(c,"H1",{});var ye=g(W);ce=y(ye,le),ye.forEach(u),ge=T(c),$&&$.l(c),fe=T(c),G=h(c,"MAIN",{class:!0});var me=g(G);se=h(me,"H3",{});var Le=g(se);pe=y(Le,"Table of contents"),Le.forEach(u),ve=T(me),v&&de(v.$$.fragment,me),me.forEach(u),$e=T(c),j=h(c,"DIV",{class:!0});var Ne=g(j);for(let J=0;J<b.length;J+=1)b[J].l(Ne);Ne.forEach(u),Ee=T(c),D&&D.l(c),c.forEach(u),be=T(E),Y=h(E,"DIV",{class:!0});var Re=g(Y);Z=h(Re,"DIV",{class:!0});var He=g(Z);M=h(He,"DIV",{class:!0});var _e=g(M);re=h(_e,"H3",{});var qe=g(re);ke=y(qe,"Related"),qe.forEach(u),Ie=T(_e);for(let J=0;J<k.length;J+=1)k[J].l(_e);_e.forEach(u),He.forEach(u),Re.forEach(u),E.forEach(u),p.forEach(u),this.h()},h(){d(A,"class","badge variant-filled-primary"),d(m,"href",N="/category/"+r[0].meta.category),d(P,"class","opacity-50"),d(f,"class","flex gap-4 flex-wrap"),d(G,"class","prose-xl max-w-none"),d(j,"class","tags space-x-4"),d(i,"class","col-span-3 lg:col-span-2 space-y-8"),d(M,"class","space-y-4"),d(Z,"class","space-y-8 sticky top-32"),d(Y,"class","col col-span-3 lg:col-span-1"),d(o,"class","grid grid-cols-3 gap-8"),d(l,"class","container my-8")},m(s,p){X[e].m(s,p),ae(s,t,p),ae(s,l,p),n(l,o),n(o,i),n(i,f),n(f,m),n(m,A),n(A,L),n(f,Q),n(f,P),n(P,w),n(P,I),n(P,z),n(i,K),n(i,W),n(W,ce),n(i,ge),$&&$.m(i,null),n(i,fe),n(i,G),n(G,se),n(se,pe),n(G,ve),v&&ie(v,G,null),n(i,$e),n(i,j);for(let E=0;E<b.length;E+=1)b[E]&&b[E].m(j,null);n(i,Ee),D&&D.m(i,null),n(o,be),n(o,Y),n(Y,Z),n(Z,M),n(M,re),n(re,ke),n(M,Ie);for(let E=0;E<k.length;E+=1)k[E]&&k[E].m(M,null);O=!0},p(s,[p]){let E=e;if(e=Se(s),e===E?X[e].p(s,p):(we(),B(X[E],1,1,()=>{X[E]=null}),De(),a=X[e],a?a.p(s,p):(a=X[e]=Ae[e](s),a.c()),H(a,1),a.m(t.parentNode,t)),(!O||p&1)&&q!==(q=s[0].meta.category+"")&&F(L,q),(!O||p&1&&N!==(N="/category/"+s[0].meta.category))&&d(m,"href",N),(!O||p&1)&&C!==(C=s[0].meta.readingTime+"")&&F(w,C),(!O||p&1)&&U!==(U=he(s[0].meta.date)+"")&&F(z,U),(!O||p&1)&&le!==(le=s[0].meta.title+"")&&F(ce,le),s[0].meta.cover?$?($.p(s,p),p&1&&H($,1)):($=Fe(s),$.c(),H($,1),$.m(i,fe)):$&&(we(),B($,1,1,()=>{$=null}),De()),p&1&&x!==(x=s[0].content)){if(v){we();const c=v;B(c.$$.fragment,1,0,()=>{oe(c,1)}),De()}x?(v=Ge(x,Te()),ne(v.$$.fragment),H(v.$$.fragment,1),ie(v,G,null)):v=null}if(p&1){ee=s[0].meta.tags;let c;for(c=0;c<ee.length;c+=1){const R=Be(s,ee,c);b[c]?b[c].p(R,p):(b[c]=Qe(R),b[c].c(),b[c].m(j,null))}for(;c<b.length;c+=1)b[c].d(1);b.length=ee.length}if(s[0].meta.updated?D?D.p(s,p):(D=Ue(s),D.c(),D.m(i,null)):D&&(D.d(1),D=null),p&1){te=s[0].related;let c;for(c=0;c<te.length;c+=1){const R=Oe(s,te,c);k[c]?k[c].p(R,p):(k[c]=We(R),k[c].c(),k[c].m(M,null))}for(;c<k.length;c+=1)k[c].d(1);k.length=te.length}},i(s){O||(H(a),H($),v&&H(v.$$.fragment,s),O=!0)},o(s){B(a),B($),v&&B(v.$$.fragment,s),O=!1},d(s){X[e].d(s),s&&u(t),s&&u(l),$&&$.d(),v&&oe(v),Me(b,s),D&&D.d(),Me(k,s)}}}function lt(r,e,a){let{data:t}=e;return r.$$set=l=>{"data"in l&&a(0,t=l.data)},[t]}class nt extends Xe{constructor(e){super(),je(this,e,lt,at,Je,{data:0})}}export{nt as default};
