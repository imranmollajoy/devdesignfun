import{S as et,i as tt,s as at,x as Oe,a as T,k as m,q as V,y as de,c as y,l as _,m as p,r as L,h as u,z as ye,n as d,b as Q,D as r,A as pe,d as ae,f as je,g as le,u as z,B as ge,X as Ze,W as Be,v as Fe}from"../chunks/index.a3b8d16d.js";import{S as xe}from"../chunks/SEO.eb89c16a.js";function ve(s){return new Date(s).toLocaleDateString("en-US",{day:"numeric",month:"long",year:"numeric"})}function Ue(s,e,a){const t=s.slice();return t[1]=e[a],t}function We(s,e,a){const t=s.slice();return t[4]=e[a],t}function lt(s){let e,a;return e=new xe({props:{title:s[0].meta.title,description:s[0].meta.description,tags:s[0].meta.tags,ogType:"article"}}),{c(){de(e.$$.fragment)},l(t){ye(e.$$.fragment,t)},m(t,n){pe(e,t,n),a=!0},p(t,n){const f={};n&1&&(f.title=t[0].meta.title),n&1&&(f.description=t[0].meta.description),n&1&&(f.tags=t[0].meta.tags),e.$set(f)},i(t){a||(le(e.$$.fragment,t),a=!0)},o(t){ae(e.$$.fragment,t),a=!1},d(t){ge(e,t)}}}function st(s){let e,a;return e=new xe({props:{title:s[0].meta.title,description:s[0].meta.description,tags:s[0].meta.tags,ogType:"article",ogImage:"./"+s[0].meta.slug+"/"+s[0].meta.cover.image}}),{c(){de(e.$$.fragment)},l(t){ye(e.$$.fragment,t)},m(t,n){pe(e,t,n),a=!0},p(t,n){const f={};n&1&&(f.title=t[0].meta.title),n&1&&(f.description=t[0].meta.description),n&1&&(f.tags=t[0].meta.tags),n&1&&(f.ogImage="./"+t[0].meta.slug+"/"+t[0].meta.cover.image),e.$set(f)},i(t){a||(le(e.$$.fragment,t),a=!0)},o(t){ae(e.$$.fragment,t),a=!1},d(t){ge(e,t)}}}function Xe(s){let e,a;return{c(){e=m("img"),this.h()},l(t){e=_(t,"IMG",{src:!0,alt:!0,loading:!0,class:!0}),this.h()},h(){var t;Be(e.src,a="./"+s[0].meta.slug+"/"+((t=s[0].meta.cover)==null?void 0:t.image))||d(e,"src",a),d(e,"alt",""),d(e,"loading","lazy"),d(e,"class","max-w-96 mx-auto")},m(t,n){Q(t,e,n)},p(t,n){var f;n&1&&!Be(e.src,a="./"+t[0].meta.slug+"/"+((f=t[0].meta.cover)==null?void 0:f.image))&&d(e,"src",a)},d(t){t&&u(e)}}}function Je(s){let e,a,t=s[4]+"",n,f,c;return{c(){e=m("a"),a=m("span"),n=V(t),f=T(),this.h()},l(i){e=_(i,"A",{href:!0});var o=p(e);a=_(o,"SPAN",{class:!0});var v=p(a);n=L(v,t),v.forEach(u),f=y(o),o.forEach(u),this.h()},h(){d(a,"class","chip variant-filled-secondary"),d(e,"href",c="/tag/"+s[4])},m(i,o){Q(i,e,o),r(e,a),r(a,n),r(e,f)},p(i,o){o&1&&t!==(t=i[4]+"")&&z(n,t),o&1&&c!==(c="/tag/"+i[4])&&d(e,"href",c)},d(i){i&&u(e)}}}function Ke(s){let e,a,t,n=ve(s[0].meta.updated)+"",f;return{c(){e=m("p"),a=m("strong"),t=V("Last updated: "),f=V(n),this.h()},l(c){e=_(c,"P",{class:!0});var i=p(e);a=_(i,"STRONG",{});var o=p(a);t=L(o,"Last updated: "),f=L(o,n),o.forEach(u),i.forEach(u),this.h()},h(){d(e,"class","opacity-50 py-16")},m(c,i){Q(c,e,i),r(e,a),r(a,t),r(a,f)},p(c,i){i&1&&n!==(n=ve(c[0].meta.updated)+"")&&z(f,n)},d(c){c&&u(e)}}}function Qe(s){let e,a,t,n,f,c=s[0].related,i=[];for(let o=0;o<c.length;o+=1)i[o]=Ye(Ue(s,c,o));return{c(){e=m("div"),a=m("div"),t=m("h3"),n=V("Related"),f=T();for(let o=0;o<i.length;o+=1)i[o].c();this.h()},l(o){e=_(o,"DIV",{class:!0});var v=p(e);a=_(v,"DIV",{class:!0});var h=p(a);t=_(h,"H3",{});var A=p(t);n=L(A,"Related"),A.forEach(u),f=y(h);for(let N=0;N<i.length;N+=1)i[N].l(h);h.forEach(u),v.forEach(u),this.h()},h(){d(a,"class","space-y-4"),d(e,"class","py-8")},m(o,v){Q(o,e,v),r(e,a),r(a,t),r(t,n),r(a,f);for(let h=0;h<i.length;h+=1)i[h]&&i[h].m(a,null)},p(o,v){if(v&1){c=o[0].related;let h;for(h=0;h<c.length;h+=1){const A=Ue(o,c,h);i[h]?i[h].p(A,v):(i[h]=Ye(A),i[h].c(),i[h].m(a,null))}for(;h<i.length;h+=1)i[h].d(1);i.length=c.length}},d(o){o&&u(e),Ze(i,o)}}}function Ye(s){let e,a,t=s[1].date+"",n,f,c,i,o=s[1].title+"",v,h,A,N=s[1].description+"",O,R,C;return{c(){e=m("article"),a=m("p"),n=V(t),f=T(),c=m("a"),i=m("h3"),v=V(o),h=T(),A=m("p"),O=V(N),C=T(),this.h()},l(D){e=_(D,"ARTICLE",{});var b=p(e);a=_(b,"P",{class:!0});var Y=p(a);n=L(Y,t),Y.forEach(u),f=y(b),c=_(b,"A",{href:!0});var j=p(c);i=_(j,"H3",{});var B=p(i);v=L(B,o),B.forEach(u),h=y(j),A=_(j,"P",{});var F=p(A);O=L(F,N),F.forEach(u),j.forEach(u),C=y(b),b.forEach(u),this.h()},h(){d(a,"class","opacity-50"),d(c,"href",R="/article/"+s[1].slug)},m(D,b){Q(D,e,b),r(e,a),r(a,n),r(e,f),r(e,c),r(c,i),r(i,v),r(c,h),r(c,A),r(A,O),r(e,C)},p(D,b){b&1&&t!==(t=D[1].date+"")&&z(n,t),b&1&&o!==(o=D[1].title+"")&&z(v,o),b&1&&N!==(N=D[1].description+"")&&z(O,N),b&1&&R!==(R="/article/"+D[1].slug)&&d(c,"href",R)},d(D){D&&u(e)}}}function rt(s){var Re;let e,a,t,n,f,c,i,o,v=s[0].meta.category+"",h,A,N,O,R,C,D=s[0].meta.readingTime+"",b,Y,j,B,F=ve(s[0].meta.date)+"",fe,$e,se,re=s[0].meta.title+"",ce,Ee,Z,W,ne=((Re=s[0].meta.author)==null?void 0:Re.name)+"",ue,he,be,ke,G,q,M,ie,Ie,Ae,$,De,X,Se,we,H;const Ne=[st,lt],U=[];function Ve(l,g){return l[0].meta.cover?0:1}e=Ve(s),a=U[e]=Ne[e](s);let S=s[0].meta.cover&&Xe(s);var x=s[0].content;function Le(l){return{}}x&&($=Oe(x,Le()));let ee=s[0].meta.tags,k=[];for(let l=0;l<ee.length;l+=1)k[l]=Je(We(s,ee,l));let w=s[0].meta.updated&&Ke(s),P=s[0].related.length>0&&Qe(s);return{c(){a.c(),t=T(),n=m("div"),f=m("div"),c=m("div"),i=m("a"),o=m("span"),h=V(v),O=T(),R=m("p"),C=m("span"),b=V(D),Y=V(" to read"),j=T(),B=m("span"),fe=V(F),$e=T(),se=m("h1"),ce=V(re),Ee=T(),Z=m("p"),W=m("a"),ue=V(ne),be=T(),S&&S.c(),ke=T(),G=m("div"),q=m("article"),M=m("main"),ie=m("h3"),Ie=V("Table of contents"),Ae=T(),$&&de($.$$.fragment),De=T(),X=m("div");for(let l=0;l<k.length;l+=1)k[l].c();Se=T(),w&&w.c(),we=T(),P&&P.c(),this.h()},l(l){a.l(l),t=y(l),n=_(l,"DIV",{class:!0});var g=p(n);f=_(g,"DIV",{class:!0});var I=p(f);c=_(I,"DIV",{class:!0});var J=p(c);i=_(J,"A",{href:!0});var oe=p(i);o=_(oe,"SPAN",{class:!0});var E=p(o);h=L(E,v),E.forEach(u),oe.forEach(u),O=y(J),R=_(J,"P",{class:!0});var K=p(R);C=_(K,"SPAN",{});var Pe=p(C);b=L(Pe,D),Y=L(Pe," to read"),Pe.forEach(u),j=y(K),B=_(K,"SPAN",{});var He=p(B);fe=L(He,F),He.forEach(u),K.forEach(u),J.forEach(u),$e=y(I),se=_(I,"H1",{});var qe=p(se);ce=L(qe,re),qe.forEach(u),Ee=y(I),Z=_(I,"P",{class:!0});var Ce=p(Z);W=_(Ce,"A",{href:!0});var ze=p(W);ue=L(ze,ne),ze.forEach(u),Ce.forEach(u),be=y(I),S&&S.l(I),I.forEach(u),ke=y(g),G=_(g,"DIV",{class:!0});var me=p(G);q=_(me,"ARTICLE",{class:!0});var te=p(q);M=_(te,"MAIN",{class:!0});var _e=p(M);ie=_(_e,"H3",{});var Ge=p(ie);Ie=L(Ge,"Table of contents"),Ge.forEach(u),Ae=y(_e),$&&ye($.$$.fragment,_e),_e.forEach(u),De=y(te),X=_(te,"DIV",{class:!0});var Me=p(X);for(let Te=0;Te<k.length;Te+=1)k[Te].l(Me);Me.forEach(u),Se=y(te),w&&w.l(te),te.forEach(u),we=y(me),P&&P.l(me),me.forEach(u),g.forEach(u),this.h()},h(){var l;d(o,"class",A="badge "+s[0].meta.category),d(i,"href",N="/category/"+s[0].meta.category),d(R,"class","opacity-50 space-x-4"),d(c,"class","flex gap-4 flex-wrap align-center justify-center"),d(W,"href",he=(l=s[0].meta.author)==null?void 0:l.link),d(Z,"class","underline"),d(f,"class","space-y-4 my-16 mx-auto text-center"),d(M,"class","prose-xl max-w-none"),d(X,"class","tags space-x-4"),d(q,"class","col-span-3 lg:col-span-2 space-y-8"),d(G,"class","max-w-[1000px] mx-auto px-4"),d(n,"class","container my-8")},m(l,g){U[e].m(l,g),Q(l,t,g),Q(l,n,g),r(n,f),r(f,c),r(c,i),r(i,o),r(o,h),r(c,O),r(c,R),r(R,C),r(C,b),r(C,Y),r(R,j),r(R,B),r(B,fe),r(f,$e),r(f,se),r(se,ce),r(f,Ee),r(f,Z),r(Z,W),r(W,ue),r(f,be),S&&S.m(f,null),r(n,ke),r(n,G),r(G,q),r(q,M),r(M,ie),r(ie,Ie),r(M,Ae),$&&pe($,M,null),r(q,De),r(q,X);for(let I=0;I<k.length;I+=1)k[I]&&k[I].m(X,null);r(q,Se),w&&w.m(q,null),r(G,we),P&&P.m(G,null),H=!0},p(l,[g]){var J,oe;let I=e;if(e=Ve(l),e===I?U[e].p(l,g):(Fe(),ae(U[I],1,1,()=>{U[I]=null}),je(),a=U[e],a?a.p(l,g):(a=U[e]=Ne[e](l),a.c()),le(a,1),a.m(t.parentNode,t)),(!H||g&1)&&v!==(v=l[0].meta.category+"")&&z(h,v),(!H||g&1&&A!==(A="badge "+l[0].meta.category))&&d(o,"class",A),(!H||g&1&&N!==(N="/category/"+l[0].meta.category))&&d(i,"href",N),(!H||g&1)&&D!==(D=l[0].meta.readingTime+"")&&z(b,D),(!H||g&1)&&F!==(F=ve(l[0].meta.date)+"")&&z(fe,F),(!H||g&1)&&re!==(re=l[0].meta.title+"")&&z(ce,re),(!H||g&1)&&ne!==(ne=((J=l[0].meta.author)==null?void 0:J.name)+"")&&z(ue,ne),(!H||g&1&&he!==(he=(oe=l[0].meta.author)==null?void 0:oe.link))&&d(W,"href",he),l[0].meta.cover?S?S.p(l,g):(S=Xe(l),S.c(),S.m(f,null)):S&&(S.d(1),S=null),g&1&&x!==(x=l[0].content)){if($){Fe();const E=$;ae(E.$$.fragment,1,0,()=>{ge(E,1)}),je()}x?($=Oe(x,Le()),de($.$$.fragment),le($.$$.fragment,1),pe($,M,null)):$=null}if(g&1){ee=l[0].meta.tags;let E;for(E=0;E<ee.length;E+=1){const K=We(l,ee,E);k[E]?k[E].p(K,g):(k[E]=Je(K),k[E].c(),k[E].m(X,null))}for(;E<k.length;E+=1)k[E].d(1);k.length=ee.length}l[0].meta.updated?w?w.p(l,g):(w=Ke(l),w.c(),w.m(q,null)):w&&(w.d(1),w=null),l[0].related.length>0?P?P.p(l,g):(P=Qe(l),P.c(),P.m(G,null)):P&&(P.d(1),P=null)},i(l){H||(le(a),$&&le($.$$.fragment,l),H=!0)},o(l){ae(a),$&&ae($.$$.fragment,l),H=!1},d(l){U[e].d(l),l&&u(t),l&&u(n),S&&S.d(),$&&ge($),Ze(k,l),w&&w.d(),P&&P.d()}}}function nt(s,e,a){let{data:t}=e;return s.$$set=n=>{"data"in n&&a(0,t=n.data)},[t]}class ft extends et{constructor(e){super(),tt(this,e,nt,rt,at,{data:0})}}export{ft as default};
