import{g as Fe}from"../chunks/post.ff11ab49.js";import{S as ie,i as re,s as oe,C as W,k as I,a as B,l as w,m as y,c as F,h as m,n as u,b as z,D,g as C,v as ce,d as R,f as ne,E as Z,F as p,G as x,H as Oe,I as ae,J as se,K as Pe,e as De,L as Ee,M as je,N as qe,O as Le,P as K,Q,R as Ne,T as Ue,o as Ge,U as Ke,V as le,q as Y,r as J,W as Xe,X as ye,u as Ye,Y as Je,y as fe,z as ue,A as he,B as de}from"../chunks/index.0c27b2d7.js";import{s as Qe,m as Te,a as Ie,g as We,b as Ze}from"../chunks/ProgressBar.svelte_svelte_type_style_lang.45fa0ba8.js";const pe=!0,xe="always",$e=async({url:t,fetch:e})=>{const i=await(await e(`${t.origin}/api/posts`)).json();return{categories:await Fe(i)}},Vt=Object.freeze(Object.defineProperty({__proto__:null,load:$e,prerender:pe,trailingSlash:xe},Symbol.toStringTag,{value:"Module"}));const et=t=>({}),we=t=>({}),tt=t=>({}),Me=t=>({}),lt=t=>({}),Se=t=>({});function Ve(t){let e,l,i;const c=t[22].lead,a=W(c,t,t[21],Se);return{c(){e=I("div"),a&&a.c(),this.h()},l(s){e=w(s,"DIV",{class:!0});var f=y(e);a&&a.l(f),f.forEach(m),this.h()},h(){u(e,"class",l="app-bar-slot-lead "+t[4])},m(s,f){z(s,e,f),a&&a.m(e,null),i=!0},p(s,f){a&&a.p&&(!i||f&2097152)&&Z(a,c,s,s[21],i?x(c,s[21],f,lt):p(s[21]),Se),(!i||f&16&&l!==(l="app-bar-slot-lead "+s[4]))&&u(e,"class",l)},i(s){i||(C(a,s),i=!0)},o(s){R(a,s),i=!1},d(s){s&&m(e),a&&a.d(s)}}}function Ce(t){let e,l,i;const c=t[22].trail,a=W(c,t,t[21],Me);return{c(){e=I("div"),a&&a.c(),this.h()},l(s){e=w(s,"DIV",{class:!0});var f=y(e);a&&a.l(f),f.forEach(m),this.h()},h(){u(e,"class",l="app-bar-slot-trail "+t[2])},m(s,f){z(s,e,f),a&&a.m(e,null),i=!0},p(s,f){a&&a.p&&(!i||f&2097152)&&Z(a,c,s,s[21],i?x(c,s[21],f,tt):p(s[21]),Me),(!i||f&4&&l!==(l="app-bar-slot-trail "+s[2]))&&u(e,"class",l)},i(s){i||(C(a,s),i=!0)},o(s){R(a,s),i=!1},d(s){s&&m(e),a&&a.d(s)}}}function He(t){let e,l,i;const c=t[22].headline,a=W(c,t,t[21],we);return{c(){e=I("div"),a&&a.c(),this.h()},l(s){e=w(s,"DIV",{class:!0});var f=y(e);a&&a.l(f),f.forEach(m),this.h()},h(){u(e,"class",l="app-bar-row-headline "+t[5])},m(s,f){z(s,e,f),a&&a.m(e,null),i=!0},p(s,f){a&&a.p&&(!i||f&2097152)&&Z(a,c,s,s[21],i?x(c,s[21],f,et):p(s[21]),we),(!i||f&32&&l!==(l="app-bar-row-headline "+s[5]))&&u(e,"class",l)},i(s){i||(C(a,s),i=!0)},o(s){R(a,s),i=!1},d(s){s&&m(e),a&&a.d(s)}}}function at(t){let e,l,i,c,a,s,f,k,E,g,b=t[8].lead&&Ve(t);const M=t[22].default,_=W(M,t,t[21],null);let o=t[8].trail&&Ce(t),h=t[8].headline&&He(t);return{c(){e=I("div"),l=I("div"),b&&b.c(),i=B(),c=I("div"),_&&_.c(),s=B(),o&&o.c(),k=B(),h&&h.c(),this.h()},l(n){e=w(n,"DIV",{class:!0,"data-testid":!0,role:!0,"aria-label":!0,"aria-labelledby":!0});var d=y(e);l=w(d,"DIV",{class:!0});var T=y(l);b&&b.l(T),i=F(T),c=w(T,"DIV",{class:!0});var S=y(c);_&&_.l(S),S.forEach(m),s=F(T),o&&o.l(T),T.forEach(m),k=F(d),h&&h.l(d),d.forEach(m),this.h()},h(){u(c,"class",a="app-bar-slot-default "+t[3]),u(l,"class",f="app-bar-row-main "+t[6]),u(e,"class",E="app-bar "+t[7]),u(e,"data-testid","app-bar"),u(e,"role","toolbar"),u(e,"aria-label",t[0]),u(e,"aria-labelledby",t[1])},m(n,d){z(n,e,d),D(e,l),b&&b.m(l,null),D(l,i),D(l,c),_&&_.m(c,null),D(l,s),o&&o.m(l,null),D(e,k),h&&h.m(e,null),g=!0},p(n,[d]){n[8].lead?b?(b.p(n,d),d&256&&C(b,1)):(b=Ve(n),b.c(),C(b,1),b.m(l,i)):b&&(ce(),R(b,1,1,()=>{b=null}),ne()),_&&_.p&&(!g||d&2097152)&&Z(_,M,n,n[21],g?x(M,n[21],d,null):p(n[21]),null),(!g||d&8&&a!==(a="app-bar-slot-default "+n[3]))&&u(c,"class",a),n[8].trail?o?(o.p(n,d),d&256&&C(o,1)):(o=Ce(n),o.c(),C(o,1),o.m(l,null)):o&&(ce(),R(o,1,1,()=>{o=null}),ne()),(!g||d&64&&f!==(f="app-bar-row-main "+n[6]))&&u(l,"class",f),n[8].headline?h?(h.p(n,d),d&256&&C(h,1)):(h=He(n),h.c(),C(h,1),h.m(e,null)):h&&(ce(),R(h,1,1,()=>{h=null}),ne()),(!g||d&128&&E!==(E="app-bar "+n[7]))&&u(e,"class",E),(!g||d&1)&&u(e,"aria-label",n[0]),(!g||d&2)&&u(e,"aria-labelledby",n[1])},i(n){g||(C(b),C(_,n),C(o),C(h),g=!0)},o(n){R(b),R(_,n),R(o),R(h),g=!1},d(n){n&&m(e),b&&b.d(),_&&_.d(n),o&&o.d(),h&&h.d()}}}const st="flex flex-col",it="grid items-center",rt="",ot="flex-none flex justify-between items-center",ct="flex-auto",nt="flex-none flex items-center space-x-4";function ft(t,e,l){let i,c,a,s,f,k,{$$slots:E={},$$scope:g}=e;const b=Oe(E);let{background:M="bg-surface-100-800-token"}=e,{border:_=""}=e,{padding:o="p-4"}=e,{shadow:h=""}=e,{spacing:n="space-y-4"}=e,{gridColumns:d="grid-cols-[auto_1fr_auto]"}=e,{gap:T="gap-4"}=e,{regionRowMain:S=""}=e,{regionRowHeadline:O=""}=e,{slotLead:q=""}=e,{slotDefault:A=""}=e,{slotTrail:P=""}=e,{label:U=""}=e,{labelledby:j=""}=e;return t.$$set=r=>{l(23,e=ae(ae({},e),se(r))),"background"in r&&l(9,M=r.background),"border"in r&&l(10,_=r.border),"padding"in r&&l(11,o=r.padding),"shadow"in r&&l(12,h=r.shadow),"spacing"in r&&l(13,n=r.spacing),"gridColumns"in r&&l(14,d=r.gridColumns),"gap"in r&&l(15,T=r.gap),"regionRowMain"in r&&l(16,S=r.regionRowMain),"regionRowHeadline"in r&&l(17,O=r.regionRowHeadline),"slotLead"in r&&l(18,q=r.slotLead),"slotDefault"in r&&l(19,A=r.slotDefault),"slotTrail"in r&&l(20,P=r.slotTrail),"label"in r&&l(0,U=r.label),"labelledby"in r&&l(1,j=r.labelledby),"$$scope"in r&&l(21,g=r.$$scope)},t.$$.update=()=>{l(7,i=`${st} ${M} ${_} ${n} ${o} ${h} ${e.class??""}`),t.$$.dirty&114688&&l(6,c=`${it} ${d} ${T} ${S}`),t.$$.dirty&131072&&l(5,a=`${rt} ${O}`),t.$$.dirty&262144&&l(4,s=`${ot} ${q}`),t.$$.dirty&524288&&l(3,f=`${ct} ${A}`),t.$$.dirty&1048576&&l(2,k=`${nt} ${P}`)},e=se(e),[U,j,k,f,s,a,c,i,b,M,_,o,h,n,d,T,S,O,q,A,P,g,E]}class ut extends ie{constructor(e){super(),re(this,e,ft,at,oe,{background:9,border:10,padding:11,shadow:12,spacing:13,gridColumns:14,gap:15,regionRowMain:16,regionRowHeadline:17,slotLead:18,slotDefault:19,slotTrail:20,label:0,labelledby:1})}}function ht(t){let e,l=`<script nonce="%sveltekit.nonce%">(${Qe.toString()})();<\/script>`,i,c,a,s,f,k,E,g,b,M,_,o,h;return{c(){e=new Pe(!1),i=De(),c=B(),a=I("div"),s=I("div"),f=Ee("svg"),k=Ee("path"),this.h()},l(n){const d=je("svelte-gewkj4",document.head);e=qe(d,!1),i=De(),d.forEach(m),c=F(n),a=w(n,"DIV",{class:!0,role:!0,"aria-label":!0,"aria-checked":!0,title:!0,tabindex:!0});var T=y(a);s=w(T,"DIV",{class:!0});var S=y(s);f=Le(S,"svg",{class:!0,xmlns:!0,viewBox:!0});var O=y(f);k=Le(O,"path",{d:!0}),y(k).forEach(m),O.forEach(m),S.forEach(m),T.forEach(m),this.h()},h(){e.a=i,u(k,"d",E=t[0]?t[4].sun:t[4].moon),u(f,"class",g="lightswitch-icon "+t[1]),u(f,"xmlns","http://www.w3.org/2000/svg"),u(f,"viewBox","0 0 512 512"),u(s,"class",b="lightswitch-thumb "+t[2]),u(a,"class",M="lightswitch-track "+t[3]),u(a,"role","switch"),u(a,"aria-label","Light Switch"),u(a,"aria-checked",t[0]),u(a,"title",_="Toggle "+(t[0]===!0?"Dark":"Light")+" Mode"),u(a,"tabindex","0")},m(n,d){e.m(l,document.head),D(document.head,i),z(n,c,d),z(n,a,d),D(a,s),D(s,f),D(f,k),o||(h=[K(a,"click",t[5]),K(a,"click",t[18]),K(a,"keydown",mt),K(a,"keydown",t[19]),K(a,"keyup",t[20]),K(a,"keypress",t[21])],o=!0)},p(n,[d]){d&1&&E!==(E=n[0]?n[4].sun:n[4].moon)&&u(k,"d",E),d&2&&g!==(g="lightswitch-icon "+n[1])&&u(f,"class",g),d&4&&b!==(b="lightswitch-thumb "+n[2])&&u(s,"class",b),d&8&&M!==(M="lightswitch-track "+n[3])&&u(a,"class",M),d&1&&u(a,"aria-checked",n[0]),d&1&&_!==(_="Toggle "+(n[0]===!0?"Dark":"Light")+" Mode")&&u(a,"title",_)},i:Q,o:Q,d(n){m(i),n&&e.d(),n&&m(c),n&&m(a),o=!1,Ne(h)}}}const dt="cursor-pointer",gt="aspect-square scale-[0.8] flex justify-center items-center",_t="w-[70%] aspect-square";function mt(t){["Enter","Space"].includes(t.code)&&(t.preventDefault(),t.currentTarget.click())}function bt(t,e,l){let i,c,a,s,f,k,E,g;Ue(t,Te,r=>l(0,g=r));let{bgLight:b="bg-surface-50"}=e,{bgDark:M="bg-surface-900"}=e,{fillLight:_="fill-surface-50"}=e,{fillDark:o="fill-surface-900"}=e,{width:h="w-12"}=e,{height:n="h-6"}=e,{ring:d="ring-[1px] ring-surface-500/30"}=e,{rounded:T="rounded-token"}=e;const S="transition-all duration-[200ms]",O={sun:"M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM352 256c0 53-43 96-96 96s-96-43-96-96s43-96 96-96s96 43 96 96zm32 0c0-70.7-57.3-128-128-128s-128 57.3-128 128s57.3 128 128 128s128-57.3 128-128z",moon:"M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"};function q(){Ke(Te,g=!g,g),Ze(g),Ie(g)}Ge(()=>{"modeCurrent"in localStorage||Ie(We())});function A(r){le.call(this,t,r)}function P(r){le.call(this,t,r)}function U(r){le.call(this,t,r)}function j(r){le.call(this,t,r)}return t.$$set=r=>{l(23,e=ae(ae({},e),se(r))),"bgLight"in r&&l(6,b=r.bgLight),"bgDark"in r&&l(7,M=r.bgDark),"fillLight"in r&&l(8,_=r.fillLight),"fillDark"in r&&l(9,o=r.fillDark),"width"in r&&l(10,h=r.width),"height"in r&&l(11,n=r.height),"ring"in r&&l(12,d=r.ring),"rounded"in r&&l(13,T=r.rounded)},t.$$.update=()=>{t.$$.dirty&193&&l(17,i=g===!0?b:M),t.$$.dirty&193&&l(16,c=g===!0?M:b),t.$$.dirty&1&&l(15,a=g===!0?"translate-x-[100%]":""),t.$$.dirty&769&&l(14,s=g===!0?_:o),l(3,f=`${dt} ${S} ${h} ${n} ${d} ${T} ${i} ${e.class??""}`),t.$$.dirty&108544&&l(2,k=`${gt} ${S} ${n} ${T} ${c} ${a}`),t.$$.dirty&16384&&l(1,E=`${_t} ${s}`)},e=se(e),[g,E,k,f,O,q,b,M,_,o,h,n,d,T,s,a,c,i,A,P,U,j]}class vt extends ie{constructor(e){super(),re(this,e,bt,ht,oe,{bgLight:6,bgDark:7,fillLight:8,fillDark:9,width:10,height:11,ring:12,rounded:13})}}function Re(t,e,l){const i=t.slice();return i[2]=e[l],i}function ze(t,e,l){const i=t.slice();return i[5]=e[l],i}function Ae(t){let e,l=t[5].title+"",i;return{c(){e=I("a"),i=Y(l),this.h()},l(c){e=w(c,"A",{href:!0,class:!0});var a=y(e);i=J(a,l),a.forEach(m),this.h()},h(){u(e,"href",t[5].href),u(e,"class","block")},m(c,a){z(c,e,a),D(e,i)},p:Q,d(c){c&&m(e)}}}function Be(t){let e,l=t[2]+"",i,c;return{c(){e=I("a"),i=Y(l),this.h()},l(a){e=w(a,"A",{href:!0,class:!0});var s=y(e);i=J(s,l),s.forEach(m),this.h()},h(){u(e,"href",c="/category/"+t[2]),u(e,"class","block")},m(a,s){z(a,e,s),D(e,i)},p(a,s){s&1&&l!==(l=a[2]+"")&&Ye(i,l),s&1&&c!==(c="/category/"+a[2])&&u(e,"href",c)},d(a){a&&m(e)}}}function kt(t){let e,l,i,c,a,s,f,k,E,g,b,M,_,o,h,n,d,T,S,O,q,A,P,U,j=t[1],r=[];for(let L=0;L<j.length;L+=1)r[L]=Ae(ze(t,j,L));let X=t[0],V=[];for(let L=0;L<X.length;L+=1)V[L]=Be(Re(t,X,L));return{c(){e=I("footer"),l=I("div"),i=I("div"),c=I("div"),a=I("h4"),s=Y("Navigation"),f=B(),k=I("div");for(let L=0;L<r.length;L+=1)r[L].c();E=B(),g=I("div"),b=I("h4"),M=Y("Categories"),_=B(),o=I("div");for(let L=0;L<V.length;L+=1)V[L].c();h=B(),n=I("div"),d=B(),T=I("div"),S=I("img"),q=B(),A=I("a"),P=I("h3"),U=Y("DevDesignFun.com"),this.h()},l(L){e=w(L,"FOOTER",{class:!0});var N=y(e);l=w(N,"DIV",{class:!0});var v=y(l);i=w(v,"DIV",{class:!0});var H=y(i);c=w(H,"DIV",{class:!0});var $=y(c);a=w($,"H4",{});var ge=y(a);s=J(ge,"Navigation"),ge.forEach(m),f=F($),k=w($,"DIV",{class:!0});var _e=y(k);for(let G=0;G<r.length;G+=1)r[G].l(_e);_e.forEach(m),$.forEach(m),E=F(H),g=w(H,"DIV",{class:!0});var ee=y(g);b=w(ee,"H4",{});var me=y(b);M=J(me,"Categories"),me.forEach(m),_=F(ee),o=w(ee,"DIV",{class:!0});var be=y(o);for(let G=0;G<V.length;G+=1)V[G].l(be);be.forEach(m),ee.forEach(m),h=F(H),n=w(H,"DIV",{class:!0}),y(n).forEach(m),d=F(H),T=w(H,"DIV",{class:!0});var te=y(T);S=w(te,"IMG",{src:!0,alt:!0,class:!0}),q=F(te),A=w(te,"A",{href:!0});var ve=y(A);P=w(ve,"H3",{});var ke=y(P);U=J(ke,"DevDesignFun.com"),ke.forEach(m),ve.forEach(m),te.forEach(m),H.forEach(m),v.forEach(m),N.forEach(m),this.h()},h(){u(k,"class","space-y-2"),u(c,"class","col"),u(o,"class","space-y-2"),u(g,"class","col"),u(n,"class","col"),Xe(S.src,O="/ddfllgotransparent.png")||u(S,"src",O),u(S,"alt",""),u(S,"class","w-16"),u(A,"href","/"),u(T,"class","col"),u(i,"class","grid grid-cols-2 lg:grid-cols-4 gap-8"),u(l,"class","container"),u(e,"class","py-32 bg-surface-100-800-token")},m(L,N){z(L,e,N),D(e,l),D(l,i),D(i,c),D(c,a),D(a,s),D(c,f),D(c,k);for(let v=0;v<r.length;v+=1)r[v]&&r[v].m(k,null);D(i,E),D(i,g),D(g,b),D(b,M),D(g,_),D(g,o);for(let v=0;v<V.length;v+=1)V[v]&&V[v].m(o,null);D(i,h),D(i,n),D(i,d),D(i,T),D(T,S),D(T,q),D(T,A),D(A,P),D(P,U)},p(L,[N]){if(N&2){j=L[1];let v;for(v=0;v<j.length;v+=1){const H=ze(L,j,v);r[v]?r[v].p(H,N):(r[v]=Ae(H),r[v].c(),r[v].m(k,null))}for(;v<r.length;v+=1)r[v].d(1);r.length=j.length}if(N&1){X=L[0];let v;for(v=0;v<X.length;v+=1){const H=Re(L,X,v);V[v]?V[v].p(H,N):(V[v]=Be(H),V[v].c(),V[v].m(o,null))}for(;v<V.length;v+=1)V[v].d(1);V.length=X.length}},i:Q,o:Q,d(L){L&&m(e),ye(r,L),ye(V,L)}}}function Dt(t,e,l){const i=[{href:"/",title:"Home"},{href:"/privacy-policy",title:"Privacy Policy"},{href:"/about-us",title:"About Us"}];let{categories:c}=e;return t.$$set=a=>{"categories"in a&&l(0,c=a.categories)},[c,i]}class Et extends ie{constructor(e){super(),re(this,e,Dt,kt,oe,{categories:0})}}function Lt(t){let e,l,i;return{c(){e=I("a"),l=I("h4"),i=Y("Dev.Design.Fun"),this.h()},l(c){e=w(c,"A",{href:!0});var a=y(e);l=w(a,"H4",{});var s=y(l);i=J(s,"Dev.Design.Fun"),s.forEach(m),a.forEach(m),this.h()},h(){u(e,"href","/")},m(c,a){z(c,e,a),D(e,l),D(l,i)},p:Q,d(c){c&&m(e)}}}function yt(t){let e,l;return e=new vt({}),{c(){fe(e.$$.fragment)},l(i){ue(e.$$.fragment,i)},m(i,c){he(e,i,c),l=!0},i(i){l||(C(e.$$.fragment,i),l=!0)},o(i){R(e.$$.fragment,i),l=!1},d(i){de(e,i)}}}function Tt(t){let e=!1,l=()=>{e=!1},i,c,a,s,f,k,E,g,b;Je(t[4]),c=new ut({props:{class:"sticky top-0 z-10 "+t[2],background:"bg-surface-50-900-token ",$$slots:{trail:[yt],lead:[Lt]},$$scope:{ctx:t}}});const M=t[3].default,_=W(M,t,t[5],null);return k=new Et({props:{categories:t[0].categories}}),{c(){fe(c.$$.fragment),a=B(),s=I("div"),_&&_.c(),f=B(),fe(k.$$.fragment),this.h()},l(o){ue(c.$$.fragment,o),a=F(o),s=w(o,"DIV",{class:!0});var h=y(s);_&&_.l(h),h.forEach(m),f=F(o),ue(k.$$.fragment,o),this.h()},h(){u(s,"class","bg-surface-50-900-token")},m(o,h){he(c,o,h),z(o,a,h),z(o,s,h),_&&_.m(s,null),z(o,f,h),he(k,o,h),E=!0,g||(b=K(window,"scroll",()=>{e=!0,clearTimeout(i),i=setTimeout(l,100),t[4]()}),g=!0)},p(o,[h]){h&2&&!e&&(e=!0,clearTimeout(i),scrollTo(window.pageXOffset,o[1]),i=setTimeout(l,100));const n={};h&4&&(n.class="sticky top-0 z-10 "+o[2]),h&32&&(n.$$scope={dirty:h,ctx:o}),c.$set(n),_&&_.p&&(!E||h&32)&&Z(_,M,o,o[5],E?x(M,o[5],h,null):p(o[5]),null);const d={};h&1&&(d.categories=o[0].categories),k.$set(d)},i(o){E||(C(c.$$.fragment,o),C(_,o),C(k.$$.fragment,o),E=!0)},o(o){R(c.$$.fragment,o),R(_,o),R(k.$$.fragment,o),E=!1},d(o){de(c,o),o&&m(a),o&&m(s),_&&_.d(o),o&&m(f),de(k,o),g=!1,b()}}}function It(t,e,l){let{$$slots:i={},$$scope:c}=e,{data:a}=e,s=0,f="";function k(){l(1,s=window.pageYOffset)}return t.$$set=E=>{"data"in E&&l(0,a=E.data),"$$scope"in E&&l(5,c=E.$$scope)},t.$$.update=()=>{t.$$.dirty&2&&l(2,f=s>0?"shadow-lg":"")},[a,s,f,i,k,c]}class Ct extends ie{constructor(e){super(),re(this,e,It,Tt,oe,{data:0})}}export{Ct as component,Vt as universal};
