function w(){}const dt=t=>t;function ht(t,e){for(const n in e)t[n]=e[n];return t}function Y(t){return t()}function K(){return Object.create(null)}function v(t){t.forEach(Y)}function G(t){return typeof t=="function"}function Wt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let S;function It(t,e){return S||(S=document.createElement("a")),S.href=e,t===S.href}function mt(t){return Object.keys(t).length===0}function Z(t,...e){if(t==null)return w;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Jt(t){let e;return Z(t,n=>e=n)(),e}function Kt(t,e,n){t.$$.on_destroy.push(Z(e,n))}function Qt(t,e,n,i){if(t){const s=tt(t,e,n,i);return t[0](s)}}function tt(t,e,n,i){return t[1]&&i?ht(n.ctx.slice(),t[1](i(e))):n.ctx}function Ut(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const l=[],r=Math.max(e.dirty.length,s.length);for(let o=0;o<r;o+=1)l[o]=e.dirty[o]|s[o];return l}return e.dirty|s}return e.dirty}function Vt(t,e,n,i,s,l){if(s){const r=tt(e,n,i,l);t.p(r,s)}}function Xt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Yt(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function Zt(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function te(t){const e={};for(const n in t)e[n]=!0;return e}function ee(t,e,n){return t.set(n),e}const et=typeof window<"u";let pt=et?()=>window.performance.now():()=>Date.now(),W=et?t=>requestAnimationFrame(t):w;const b=new Set;function nt(t){b.forEach(e=>{e.c(t)||(b.delete(e),e.f())}),b.size!==0&&W(nt)}function yt(t){let e;return b.size===0&&W(nt),{promise:new Promise(n=>{b.add(e={c:t,f:n})}),abort(){b.delete(e)}}}let H=!1;function gt(){H=!0}function $t(){H=!1}function xt(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function bt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let u=0;u<e.length;u++){const _=e[u];_.claim_order!==void 0&&c.push(_)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let c=0;c<e.length;c++){const u=e[c].claim_order,_=(s>0&&e[n[s]].claim_order<=u?s+1:xt(1,s,h=>e[n[h]].claim_order,u))-1;i[c]=n[_]+1;const a=_+1;n[a]=c,s=Math.max(a,s)}const l=[],r=[];let o=e.length-1;for(let c=n[s]+1;c!=0;c=i[c-1]){for(l.push(e[c-1]);o>=c;o--)r.push(e[o]);o--}for(;o>=0;o--)r.push(e[o]);l.reverse(),r.sort((c,u)=>c.claim_order-u.claim_order);for(let c=0,u=0;c<r.length;c++){for(;u<l.length&&r[c].claim_order>=l[u].claim_order;)u++;const _=u<l.length?l[u]:null;t.insertBefore(r[c],_)}}function Et(t,e){t.appendChild(e)}function it(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function wt(t){const e=I("style");return vt(it(t),e),e.sheet}function vt(t,e){return Et(t.head||t,e),e.sheet}function Nt(t,e){if(H){for(bt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Tt(t,e,n){t.insertBefore(e,n||null)}function At(t,e,n){H&&!n?Nt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function k(t){t.parentNode&&t.parentNode.removeChild(t)}function ne(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function I(t){return document.createElement(t)}function st(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function J(t){return document.createTextNode(t)}function ie(){return J(" ")}function se(){return J("")}function re(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function kt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function oe(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set?t[i]=e[i]:kt(t,i,e[i])}function ce(t){let e;return{p(...n){e=n,e.forEach(i=>t.push(i))},r(){e.forEach(n=>t.splice(t.indexOf(n),1))}}}function Ct(t){return Array.from(t.childNodes)}function rt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function ot(t,e,n,i,s=!1){rt(t);const l=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const o=t[r];if(e(o)){const c=n(o);return c===void 0?t.splice(r,1):t[r]=c,s||(t.claim_info.last_index=r),o}}for(let r=t.claim_info.last_index-1;r>=0;r--){const o=t[r];if(e(o)){const c=n(o);return c===void 0?t.splice(r,1):t[r]=c,s?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,o}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function ct(t,e,n,i){return ot(t,s=>s.nodeName===e,s=>{const l=[];for(let r=0;r<s.attributes.length;r++){const o=s.attributes[r];n[o.name]||l.push(o.name)}l.forEach(r=>s.removeAttribute(r))},()=>i(e))}function le(t,e,n){return ct(t,e,n,I)}function ue(t,e,n){return ct(t,e,n,st)}function Mt(t,e){return ot(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>J(e),!0)}function ae(t){return Mt(t," ")}function Q(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return t.length}function fe(t,e){const n=Q(t,"HTML_TAG_START",0),i=Q(t,"HTML_TAG_END",n);if(n===i)return new U(void 0,e);rt(t);const s=t.splice(n,i-n+1);k(s[0]),k(s[s.length-1]);const l=s.slice(1,s.length-1);for(const r of l)r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new U(l,e)}function _e(t,e){e=""+e,t.data!==e&&(t.data=e)}function de(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function he(t,e,n){t.classList[n?"add":"remove"](e)}function lt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,i,e),s}function me(t,e){const n=[];let i=0;for(const s of e.childNodes)if(s.nodeType===8){const l=s.textContent.trim();l===`HEAD_${t}_END`?(i-=1,n.push(s)):l===`HEAD_${t}_START`&&(i+=1,n.push(s))}else i>0&&n.push(s);return n}class St{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=st(n.nodeName):this.e=I(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)Tt(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(k)}}class U extends St{constructor(e,n=!1){super(n),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)At(this.t,this.n[n],e)}}function pe(t,e){return new t(e)}const D=new Map;let L=0;function jt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Dt(t,e){const n={stylesheet:wt(e),rules:{}};return D.set(t,n),n}function V(t,e,n,i,s,l,r,o=0){const c=16.666/i;let u=`{
`;for(let y=0;y<=1;y+=c){const g=e+(n-e)*l(y);u+=y*100+`%{${r(g,1-g)}}
`}const _=u+`100% {${r(n,1-n)}}
}`,a=`__svelte_${jt(_)}_${o}`,h=it(t),{stylesheet:f,rules:d}=D.get(h)||Dt(h,t);d[a]||(d[a]=!0,f.insertRule(`@keyframes ${a} ${_}`,f.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?`${m}, `:""}${a} ${i}ms linear ${s}ms 1 both`,L+=1,a}function Lt(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?l=>l.indexOf(e)<0:l=>l.indexOf("__svelte")===-1),s=n.length-i.length;s&&(t.style.animation=i.join(", "),L-=s,L||Pt())}function Pt(){W(()=>{L||(D.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&k(e)}),D.clear())})}let C;function A(t){C=t}function N(){if(!C)throw new Error("Function called outside component initialization");return C}function ye(t){N().$$.on_mount.push(t)}function ge(t){N().$$.after_update.push(t)}function $e(t){N().$$.on_destroy.push(t)}function xe(){const t=N();return(e,n,{cancelable:i=!1}={})=>{const s=t.$$.callbacks[e];if(s){const l=lt(e,n,{cancelable:i});return s.slice().forEach(r=>{r.call(t,l)}),!l.defaultPrevented}return!0}}function be(t,e){return N().$$.context.set(t,e),e}function Ee(t){return N().$$.context.get(t)}function we(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const x=[],X=[];let E=[];const z=[],ut=Promise.resolve();let F=!1;function at(){F||(F=!0,ut.then(ft))}function ve(){return at(),ut}function P(t){E.push(t)}function Ne(t){z.push(t)}const q=new Set;let $=0;function ft(){if($!==0)return;const t=C;do{try{for(;$<x.length;){const e=x[$];$++,A(e),Ht(e.$$)}}catch(e){throw x.length=0,$=0,e}for(A(null),x.length=0,$=0;X.length;)X.pop()();for(let e=0;e<E.length;e+=1){const n=E[e];q.has(n)||(q.add(n),n())}E.length=0}while(x.length);for(;z.length;)z.pop()();F=!1,q.clear(),A(t)}function Ht(t){if(t.fragment!==null){t.update(),v(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(P)}}function Ot(t){const e=[],n=[];E.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),E=e}let T;function Rt(){return T||(T=Promise.resolve(),T.then(()=>{T=null})),T}function B(t,e,n){t.dispatchEvent(lt(`${e?"intro":"outro"}${n}`))}const j=new Set;let p;function Te(){p={r:0,c:[],p}}function Ae(){p.r||v(p.c),p=p.p}function qt(t,e){t&&t.i&&(j.delete(t),t.i(e))}function ke(t,e,n,i){if(t&&t.o){if(j.has(t))return;j.add(t),p.c.push(()=>{j.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const Bt={duration:0};function Ce(t,e,n,i){const s={direction:"both"};let l=e(t,n,s),r=i?0:1,o=null,c=null,u=null;function _(){u&&Lt(t,u)}function a(f,d){const m=f.b-r;return d*=Math.abs(m),{a:r,b:f.b,d:m,duration:d,start:f.start,end:f.start+d,group:f.group}}function h(f){const{delay:d=0,duration:m=300,easing:y=dt,tick:g=w,css:O}=l||Bt,R={start:pt()+d,b:f};f||(R.group=p,p.r+=1),o||c?c=R:(O&&(_(),u=V(t,r,f,m,d,y,O)),f&&g(0,1),o=a(R,m),P(()=>B(t,f,"start")),yt(M=>{if(c&&M>c.start&&(o=a(c,m),c=null,B(t,o.b,"start"),O&&(_(),u=V(t,r,o.b,o.duration,0,y,l.css))),o){if(M>=o.end)g(r=o.b,1-r),B(t,o.b,"end"),c||(o.b?_():--o.group.r||v(o.group.c)),o=null;else if(M>=o.start){const _t=M-o.start;r=o.a+o.d*y(_t/o.duration),g(r,1-r)}}return!!(o||c)}))}return{run(f){G(l)?Rt().then(()=>{l=l(s),h(f)}):h(f)},end(){_(),o=c=null}}}function Me(t,e){const n={},i={},s={$$scope:1};let l=t.length;for(;l--;){const r=t[l],o=e[l];if(o){for(const c in r)c in o||(i[c]=1);for(const c in o)s[c]||(n[c]=o[c],s[c]=1);t[l]=o}else for(const c in r)s[c]=1}for(const r in i)r in n||(n[r]=void 0);return n}function Se(t){return typeof t=="object"&&t!==null?t:{}}function je(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function De(t){t&&t.c()}function Le(t,e){t&&t.l(e)}function zt(t,e,n,i){const{fragment:s,after_update:l}=t.$$;s&&s.m(e,n),i||P(()=>{const r=t.$$.on_mount.map(Y).filter(G);t.$$.on_destroy?t.$$.on_destroy.push(...r):v(r),t.$$.on_mount=[]}),l.forEach(P)}function Ft(t,e){const n=t.$$;n.fragment!==null&&(Ot(n.after_update),v(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Gt(t,e){t.$$.dirty[0]===-1&&(x.push(t),at(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Pe(t,e,n,i,s,l,r,o=[-1]){const c=C;A(t);const u=t.$$={fragment:null,ctx:[],props:l,update:w,not_equal:s,bound:K(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:K(),dirty:o,skip_bound:!1,root:e.target||c.$$.root};r&&r(u.root);let _=!1;if(u.ctx=n?n(t,e.props||{},(a,h,...f)=>{const d=f.length?f[0]:h;return u.ctx&&s(u.ctx[a],u.ctx[a]=d)&&(!u.skip_bound&&u.bound[a]&&u.bound[a](d),_&&Gt(t,a)),h}):[],u.update(),_=!0,v(u.before_update),u.fragment=i?i(u.ctx):!1,e.target){if(e.hydrate){gt();const a=Ct(e.target);u.fragment&&u.fragment.l(a),a.forEach(k)}else u.fragment&&u.fragment.c();e.intro&&qt(t.$$.fragment),zt(t,e.target,e.anchor,e.customElement),$t(),ft()}A(c)}class He{$destroy(){Ft(this,1),this.$destroy=w}$on(e,n){if(!G(n))return w;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!mt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Ce as $,zt as A,Ft as B,Qt as C,Nt as D,Vt as E,Xt as F,Ut as G,te as H,ht as I,Yt as J,U as K,st as L,me as M,fe as N,ue as O,re as P,w as Q,v as R,He as S,Kt as T,ee as U,we as V,It as W,ne as X,dt as Y,$e as Z,P as _,ie as a,Me as a0,Se as a1,be as a2,ce as a3,oe as a4,Zt as a5,Ee as a6,he as a7,xe as a8,je as a9,Ne as aa,Jt as ab,At as b,ae as c,ke as d,se as e,Ae as f,qt as g,k as h,Pe as i,ge as j,I as k,le as l,Ct as m,kt as n,ye as o,de as p,J as q,Mt as r,Wt as s,ve as t,_e as u,Te as v,X as w,pe as x,De as y,Le as z};
