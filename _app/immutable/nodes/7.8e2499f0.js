import{S as O,i as U,s as Y,k as g,q as w,a as k,l as m,m as b,r as A,h as v,c as q,n as f,b as K,D as r,u as M,Q as j,X as Z,W as z}from"../chunks/index.2be31a25.js";import{b as B}from"../chunks/paths.11e73d59.js";function F(o,a,c){const i=o.slice();return i[1]=a[c],i}function J(o){let a,c,i,_,I,u,y,n,p=o[1].date+"",s,t,l,e,E=o[1].title+"",D,N,C,P=o[1].description+"",S,H,Q;return{c(){a=g("article"),c=g("div"),i=g("img"),I=k(),u=g("div"),y=g("span"),n=g("p"),s=w(p),t=k(),l=g("a"),e=g("h3"),D=w(E),N=k(),C=g("p"),S=w(P),Q=k(),this.h()},l(h){a=m(h,"ARTICLE",{class:!0});var d=b(a);c=m(d,"DIV",{class:!0});var V=b(c);i=m(V,"IMG",{src:!0,alt:!0}),V.forEach(v),I=q(d),u=m(d,"DIV",{class:!0});var G=b(u);y=m(G,"SPAN",{class:!0});var R=b(y);n=m(R,"P",{class:!0});var T=b(n);s=A(T,p),T.forEach(v),R.forEach(v),t=q(G),l=m(G,"A",{href:!0});var L=b(l);e=m(L,"H3",{});var W=b(e);D=A(W,E),W.forEach(v),N=q(L),C=m(L,"P",{});var X=b(C);S=A(X,P),X.forEach(v),L.forEach(v),G.forEach(v),Q=q(d),d.forEach(v),this.h()},h(){var h;z(i.src,_=(h=o[1].cover)==null?void 0:h.image)||f(i,"src",_),f(i,"alt",""),f(c,"class","grow lg:basis-1/4"),f(n,"class","inline opacity-50"),f(y,"class","space-x-2"),f(l,"href",H=B+"/article/"+o[1].slug),f(u,"class","grow lg:basis-3/4"),f(a,"class","space-y-2 flex flex-col gap-4 lg:flex-row")},m(h,d){K(h,a,d),r(a,c),r(c,i),r(a,I),r(a,u),r(u,y),r(y,n),r(n,s),r(u,t),r(u,l),r(l,e),r(e,D),r(l,N),r(l,C),r(C,S),r(a,Q)},p(h,d){var V;d&1&&!z(i.src,_=(V=h[1].cover)==null?void 0:V.image)&&f(i,"src",_),d&1&&p!==(p=h[1].date+"")&&M(s,p),d&1&&E!==(E=h[1].title+"")&&M(D,E),d&1&&P!==(P=h[1].description+"")&&M(S,P),d&1&&H!==(H=B+"/article/"+h[1].slug)&&f(l,"href",H)},d(h){h&&v(a)}}}function $(o){let a,c,i,_=o[0].category+"",I,u,y,n,p=o[0].posts,s=[];for(let t=0;t<p.length;t+=1)s[t]=J(F(o,p,t));return{c(){a=g("div"),c=g("h2"),i=w("Category: "),I=w(_),y=k(),n=g("div");for(let t=0;t<s.length;t+=1)s[t].c();this.h()},l(t){a=m(t,"DIV",{class:!0});var l=b(a);c=m(l,"H2",{class:!0});var e=b(c);i=A(e,"Category: "),I=A(e,_),e.forEach(v),y=q(l),n=m(l,"DIV",{class:!0});var E=b(n);for(let D=0;D<s.length;D+=1)s[D].l(E);E.forEach(v),l.forEach(v),this.h()},h(){f(c,"class",u="my-12 text-"+o[0].category),f(n,"class","space-y-8"),f(a,"class","container pb-64")},m(t,l){K(t,a,l),r(a,c),r(c,i),r(c,I),r(a,y),r(a,n);for(let e=0;e<s.length;e+=1)s[e]&&s[e].m(n,null)},p(t,[l]){if(l&1&&_!==(_=t[0].category+"")&&M(I,_),l&1&&u!==(u="my-12 text-"+t[0].category)&&f(c,"class",u),l&1){p=t[0].posts;let e;for(e=0;e<p.length;e+=1){const E=F(t,p,e);s[e]?s[e].p(E,l):(s[e]=J(E),s[e].c(),s[e].m(n,null))}for(;e<s.length;e+=1)s[e].d(1);s.length=p.length}},i:j,o:j,d(t){t&&v(a),Z(s,t)}}}function x(o,a,c){let{data:i}=a;return o.$$set=_=>{"data"in _&&c(0,i=_.data)},[i]}class te extends O{constructor(a){super(),U(this,a,x,$,Y,{data:0})}}export{te as component};
