import{Q as c,s as d}from"./index.2be31a25.js";const t=[];function g(i,a=c){let n;const o=new Set;function r(e){if(d(i,e)&&(i=e,n)){const b=!t.length;for(const s of o)s[1](),t.push(s,i);if(b){for(let s=0;s<t.length;s+=2)t[s][0](t[s+1]);t.length=0}}}function l(e){r(e(i))}function _(e,b=c){const s=[e,b];return o.add(s),o.size===1&&(n=a(r)||c),e(i),()=>{o.delete(s),o.size===0&&n&&(n(),n=null)}}return{set:r,update:l,subscribe:_}}var f;const h=((f=globalThis.__sveltekit_1dzemy8)==null?void 0:f.base)??"";var u;const m=((u=globalThis.__sveltekit_1dzemy8)==null?void 0:u.assets)??h;export{m as a,h as b,g as w};
