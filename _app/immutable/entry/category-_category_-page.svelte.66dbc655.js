import{S as Z,i as $,s as x,k as d,q as A,a as q,l as _,m as p,r as I,h,c as H,n as E,b as Y,D as l,u as N,Q as T,X as ee}from"../chunks/index.8f8a4d5c.js";function U(i,e,o){const r=i.slice();return r[1]=e[o],r}function W(i){let e,o,r,n,g,y=i[1].category+"",v,m,s,a,c=i[1].date+"",t,P,D,b,S,V=i[1].title+"",Q,B,k,C=i[1].description+"",X,j,F;return{c(){e=d("div"),o=d("p"),r=d("span"),n=d("a"),g=d("span"),v=A(y),s=q(),a=d("p"),t=A(c),P=q(),D=d("div"),b=d("a"),S=d("h3"),Q=A(V),B=q(),k=d("p"),X=A(C),F=q(),this.h()},l(u){e=_(u,"DIV",{class:!0});var f=p(e);o=_(f,"P",{});var G=p(o);r=_(G,"SPAN",{class:!0});var w=p(r);n=_(w,"A",{href:!0});var J=p(n);g=_(J,"SPAN",{class:!0});var K=p(g);v=I(K,y),K.forEach(h),J.forEach(h),s=H(w),a=_(w,"P",{class:!0});var L=p(a);t=I(L,c),L.forEach(h),w.forEach(h),G.forEach(h),P=H(f),D=_(f,"DIV",{});var M=p(D);b=_(M,"A",{href:!0});var z=p(b);S=_(z,"H3",{});var O=p(S);Q=I(O,V),O.forEach(h),B=H(z),k=_(z,"P",{});var R=p(k);X=I(R,C),R.forEach(h),z.forEach(h),M.forEach(h),F=H(f),f.forEach(h),this.h()},h(){E(g,"class","badge variant-filled-primary"),E(n,"href",m="/category/"+i[1].category),E(a,"class","inline opacity-50"),E(r,"class","space-x-2"),E(b,"href",j=i[1].path),E(e,"class","space-y-2")},m(u,f){Y(u,e,f),l(e,o),l(o,r),l(r,n),l(n,g),l(g,v),l(r,s),l(r,a),l(a,t),l(e,P),l(e,D),l(D,b),l(b,S),l(S,Q),l(b,B),l(b,k),l(k,X),l(e,F)},p(u,f){f&1&&y!==(y=u[1].category+"")&&N(v,y),f&1&&m!==(m="/category/"+u[1].category)&&E(n,"href",m),f&1&&c!==(c=u[1].date+"")&&N(t,c),f&1&&V!==(V=u[1].title+"")&&N(Q,V),f&1&&C!==(C=u[1].description+"")&&N(X,C),f&1&&j!==(j=u[1].path)&&E(b,"href",j)},d(u){u&&h(e)}}}function ae(i){let e,o,r,n=i[0].category+"",g,y,v,m=i[0].posts,s=[];for(let a=0;a<m.length;a+=1)s[a]=W(U(i,m,a));return{c(){e=d("div"),o=d("h2"),r=A("Category: "),g=A(n),y=q(),v=d("div");for(let a=0;a<s.length;a+=1)s[a].c();this.h()},l(a){e=_(a,"DIV",{class:!0});var c=p(e);o=_(c,"H2",{class:!0});var t=p(o);r=I(t,"Category: "),g=I(t,n),t.forEach(h),y=H(c),v=_(c,"DIV",{class:!0});var P=p(v);for(let D=0;D<s.length;D+=1)s[D].l(P);P.forEach(h),c.forEach(h),this.h()},h(){E(o,"class","my-12"),E(v,"class","space-y-8"),E(e,"class","container")},m(a,c){Y(a,e,c),l(e,o),l(o,r),l(o,g),l(e,y),l(e,v);for(let t=0;t<s.length;t+=1)s[t]&&s[t].m(v,null)},p(a,[c]){if(c&1&&n!==(n=a[0].category+"")&&N(g,n),c&1){m=a[0].posts;let t;for(t=0;t<m.length;t+=1){const P=U(a,m,t);s[t]?s[t].p(P,c):(s[t]=W(P),s[t].c(),s[t].m(v,null))}for(;t<s.length;t+=1)s[t].d(1);s.length=m.length}},i:T,o:T,d(a){a&&h(e),ee(s,a)}}}function te(i,e,o){let{data:r}=e;return i.$$set=n=>{"data"in n&&o(0,r=n.data)},[r]}class se extends Z{constructor(e){super(),$(this,e,te,ae,x,{data:0})}}export{se as default};