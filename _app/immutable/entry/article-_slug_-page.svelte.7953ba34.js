import{S as Ne,i as Re,s as qe,k as h,l as g,W as Ae,n as m,b as te,Q as we,h as u,x as De,a as S,q as G,y as ae,c as T,m as $,r as O,z as ie,D as o,A as le,d as C,f as me,g as N,u as x,B as se,X as Se,v as _e}from"../chunks/index.18bd6673.js";import{S as Ce}from"../chunks/SEO.a1ff08d3.js";function ze(r){let e,a;return{c(){e=h("img"),this.h()},l(t){e=g(t,"IMG",{src:!0,alt:!0,loading:!0}),this.h()},h(){Ae(e.src,a=r[0])||m(e,"src",a),m(e,"alt",r[1]),m(e,"loading","lazy")},m(t,l){te(t,e,l)},p(t,[l]){l&1&&!Ae(e.src,a=t[0])&&m(e,"src",a),l&2&&m(e,"alt",t[1])},i:we,o:we,d(t){t&&u(e)}}}function Le(r,e,a){let{src:t}=e,{alt:l}=e;return r.$$set=i=>{"src"in i&&a(0,t=i.src),"alt"in i&&a(1,l=i.alt)},[t,l]}class Me extends Ne{constructor(e){super(),Re(this,e,Le,ze,qe,{src:0,alt:1})}}function Te(r,e,a){const t=r.slice();return t[1]=e[a],t}function Ve(r,e,a){const t=r.slice();return t[4]=e[a],t}function Be(r){let e,a;return e=new Ce({props:{title:r[0].meta.title,description:r[0].meta.description,tags:r[0].meta.tags,ogType:"article"}}),{c(){ae(e.$$.fragment)},l(t){ie(e.$$.fragment,t)},m(t,l){le(e,t,l),a=!0},p(t,l){const i={};l&1&&(i.title=t[0].meta.title),l&1&&(i.description=t[0].meta.description),l&1&&(i.tags=t[0].meta.tags),e.$set(i)},i(t){a||(N(e.$$.fragment,t),a=!0)},o(t){C(e.$$.fragment,t),a=!1},d(t){se(e,t)}}}function Ge(r){let e,a;return e=new Ce({props:{title:r[0].meta.title,description:r[0].meta.description,tags:r[0].meta.tags,ogType:"article",ogImage:"./"+r[0].meta.slug+"/"+r[0].meta.cover.image}}),{c(){ae(e.$$.fragment)},l(t){ie(e.$$.fragment,t)},m(t,l){le(e,t,l),a=!0},p(t,l){const i={};l&1&&(i.title=t[0].meta.title),l&1&&(i.description=t[0].meta.description),l&1&&(i.tags=t[0].meta.tags),l&1&&(i.ogImage="./"+t[0].meta.slug+"/"+t[0].meta.cover.image),e.$set(i)},i(t){a||(N(e.$$.fragment,t),a=!0)},o(t){C(e.$$.fragment,t),a=!1},d(t){se(e,t)}}}function Pe(r){var t;let e,a;return e=new Me({props:{src:"./"+r[0].meta.slug+"/"+((t=r[0].meta.cover)==null?void 0:t.image),alt:""}}),{c(){ae(e.$$.fragment)},l(l){ie(e.$$.fragment,l)},m(l,i){le(e,l,i),a=!0},p(l,i){var f;const c={};i&1&&(c.src="./"+l[0].meta.slug+"/"+((f=l[0].meta.cover)==null?void 0:f.image)),e.$set(c)},i(l){a||(N(e.$$.fragment,l),a=!0)},o(l){C(e.$$.fragment,l),a=!1},d(l){se(e,l)}}}function ye(r){let e,a,t=r[4]+"",l,i,c;return{c(){e=h("a"),a=h("span"),l=G(t),i=S(),this.h()},l(f){e=g(f,"A",{href:!0});var _=$(e);a=g(_,"SPAN",{class:!0});var w=$(a);l=O(w,t),w.forEach(u),i=T(_),_.forEach(u),this.h()},h(){m(a,"class","chip variant-filled-secondary"),m(e,"href",c="/tag/"+r[4])},m(f,_){te(f,e,_),o(e,a),o(a,l),o(e,i)},p(f,_){_&1&&t!==(t=f[4]+"")&&x(l,t),_&1&&c!==(c="/tag/"+f[4])&&m(e,"href",c)},d(f){f&&u(e)}}}function He(r){let e,a,t=r[1].date+"",l,i,c,f,_=r[1].title+"",w,z,V,R=r[1].description+"",P,y,L;return{c(){e=h("article"),a=h("p"),l=G(t),i=S(),c=h("a"),f=h("h3"),w=G(_),z=S(),V=h("p"),P=G(R),L=S(),this.h()},l(A){e=g(A,"ARTICLE",{});var b=$(e);a=g(b,"P",{class:!0});var D=$(a);l=O(D,t),D.forEach(u),i=T(b),c=g(b,"A",{href:!0});var H=$(c);f=g(H,"H3",{});var j=$(f);w=O(j,_),j.forEach(u),z=T(H),V=g(H,"P",{});var F=$(V);P=O(F,R),F.forEach(u),H.forEach(u),L=T(b),b.forEach(u),this.h()},h(){m(a,"class","opacity-50"),m(c,"href",y="/article/"+r[1].slug)},m(A,b){te(A,e,b),o(e,a),o(a,l),o(e,i),o(e,c),o(c,f),o(f,w),o(c,z),o(c,V),o(V,P),o(e,L)},p(A,b){b&1&&t!==(t=A[1].date+"")&&x(l,t),b&1&&_!==(_=A[1].title+"")&&x(w,_),b&1&&R!==(R=A[1].description+"")&&x(P,R),b&1&&y!==(y="/article/"+A[1].slug)&&m(c,"href",y)},d(A){A&&u(e)}}}function Oe(r){let e,a,t,l,i,c,f,_,w=r[0].meta.category+"",z,V,R,P,y=r[0].meta.title+"",L,A,b,D,H,j,F,d,oe,Q,ce,J,K,q,ee,fe,ue,W;const he=[Ge,Be],M=[];function ge(s,v){return s[0].meta.cover?0:1}e=ge(r),a=M[e]=he[e](r);let p=r[0].meta.cover&&Pe(r);var U=r[0].content;function de(s){return{}}U&&(d=De(U,de()));let Y=r[0].meta.tags,k=[];for(let s=0;s<Y.length;s+=1)k[s]=ye(Ve(r,Y,s));let Z=r[0].related,I=[];for(let s=0;s<Z.length;s+=1)I[s]=He(Te(r,Z,s));return{c(){a.c(),t=S(),l=h("div"),i=h("div"),c=h("article"),f=h("a"),_=h("span"),z=G(w),R=S(),P=h("h1"),L=G(y),A=S(),p&&p.c(),b=S(),D=h("main"),H=h("h3"),j=G("Table of contents"),F=S(),d&&ae(d.$$.fragment),oe=S(),Q=h("div");for(let s=0;s<k.length;s+=1)k[s].c();ce=S(),J=h("div"),K=h("div"),q=h("div"),ee=h("h3"),fe=G("Related"),ue=S();for(let s=0;s<I.length;s+=1)I[s].c();this.h()},l(s){a.l(s),t=T(s),l=g(s,"DIV",{class:!0});var v=$(l);i=g(v,"DIV",{class:!0});var E=$(i);c=g(E,"ARTICLE",{class:!0});var n=$(c);f=g(n,"A",{href:!0});var B=$(f);_=g(B,"SPAN",{class:!0});var pe=$(_);z=O(pe,w),pe.forEach(u),B.forEach(u),R=T(n),P=g(n,"H1",{});var ve=$(P);L=O(ve,y),ve.forEach(u),A=T(n),p&&p.l(n),b=T(n),D=g(n,"MAIN",{class:!0});var re=$(D);H=g(re,"H3",{});var $e=$(H);j=O($e,"Table of contents"),$e.forEach(u),F=T(re),d&&ie(d.$$.fragment,re),re.forEach(u),oe=T(n),Q=g(n,"DIV",{class:!0});var Ee=$(Q);for(let X=0;X<k.length;X+=1)k[X].l(Ee);Ee.forEach(u),n.forEach(u),ce=T(E),J=g(E,"DIV",{class:!0});var be=$(J);K=g(be,"DIV",{class:!0});var ke=$(K);q=g(ke,"DIV",{class:!0});var ne=$(q);ee=g(ne,"H3",{});var Ie=$(ee);fe=O(Ie,"Related"),Ie.forEach(u),ue=T(ne);for(let X=0;X<I.length;X+=1)I[X].l(ne);ne.forEach(u),ke.forEach(u),be.forEach(u),E.forEach(u),v.forEach(u),this.h()},h(){m(_,"class","badge variant-filled-primary"),m(f,"href",V="/category/"+r[0].meta.category),m(D,"class","prose-xl max-w-none"),m(Q,"class","tags space-x-4"),m(c,"class","col-span-3 lg:col-span-2 space-y-8"),m(q,"class","space-y-4"),m(K,"class","space-y-8 sticky top-32"),m(J,"class","col col-span-3 lg:col-span-1"),m(i,"class","grid grid-cols-3 gap-8"),m(l,"class","container my-8")},m(s,v){M[e].m(s,v),te(s,t,v),te(s,l,v),o(l,i),o(i,c),o(c,f),o(f,_),o(_,z),o(c,R),o(c,P),o(P,L),o(c,A),p&&p.m(c,null),o(c,b),o(c,D),o(D,H),o(H,j),o(D,F),d&&le(d,D,null),o(c,oe),o(c,Q);for(let E=0;E<k.length;E+=1)k[E]&&k[E].m(Q,null);o(i,ce),o(i,J),o(J,K),o(K,q),o(q,ee),o(ee,fe),o(q,ue);for(let E=0;E<I.length;E+=1)I[E]&&I[E].m(q,null);W=!0},p(s,[v]){let E=e;if(e=ge(s),e===E?M[e].p(s,v):(_e(),C(M[E],1,1,()=>{M[E]=null}),me(),a=M[e],a?a.p(s,v):(a=M[e]=he[e](s),a.c()),N(a,1),a.m(t.parentNode,t)),(!W||v&1)&&w!==(w=s[0].meta.category+"")&&x(z,w),(!W||v&1&&V!==(V="/category/"+s[0].meta.category))&&m(f,"href",V),(!W||v&1)&&y!==(y=s[0].meta.title+"")&&x(L,y),s[0].meta.cover?p?(p.p(s,v),v&1&&N(p,1)):(p=Pe(s),p.c(),N(p,1),p.m(c,b)):p&&(_e(),C(p,1,1,()=>{p=null}),me()),v&1&&U!==(U=s[0].content)){if(d){_e();const n=d;C(n.$$.fragment,1,0,()=>{se(n,1)}),me()}U?(d=De(U,de()),ae(d.$$.fragment),N(d.$$.fragment,1),le(d,D,null)):d=null}if(v&1){Y=s[0].meta.tags;let n;for(n=0;n<Y.length;n+=1){const B=Ve(s,Y,n);k[n]?k[n].p(B,v):(k[n]=ye(B),k[n].c(),k[n].m(Q,null))}for(;n<k.length;n+=1)k[n].d(1);k.length=Y.length}if(v&1){Z=s[0].related;let n;for(n=0;n<Z.length;n+=1){const B=Te(s,Z,n);I[n]?I[n].p(B,v):(I[n]=He(B),I[n].c(),I[n].m(q,null))}for(;n<I.length;n+=1)I[n].d(1);I.length=Z.length}},i(s){W||(N(a),N(p),d&&N(d.$$.fragment,s),W=!0)},o(s){C(a),C(p),d&&C(d.$$.fragment,s),W=!1},d(s){M[e].d(s),s&&u(t),s&&u(l),p&&p.d(),d&&se(d),Se(k,s),Se(I,s)}}}function Qe(r,e,a){let{data:t}=e;return r.$$set=l=>{"data"in l&&a(0,t=l.data)},[t]}class je extends Ne{constructor(e){super(),Re(this,e,Qe,Oe,qe,{data:0})}}export{je as default};
