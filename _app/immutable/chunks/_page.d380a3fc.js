import{_ as s}from"./preload-helper.41c905a7.js";import{H as m}from"./control.e7f5239e.js";import{a as l}from"./post.81c879ca.js";const p=(o,e)=>{const r=o[e];return r?typeof r=="function"?r():Promise.resolve(r):new Promise((t,a)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(a.bind(null,new Error("Unknown variable dynamic import: "+e)))})};function _(o,e){return new m(o,e)}new TextEncoder;async function u({params:o,url:e,fetch:r}){try{const t=await p(Object.assign({"../../../posts/ad-free-alternatives-on-android/post.md":()=>s(()=>import("./post.ec190a6d.js"),["./post.ec190a6d.js","./index.5d0e62ae.js","./default.e9485e12.js","../assets/default.5c045b07.css"],import.meta.url),"../../../posts/create-button-component-for-svelte/post.md":()=>s(()=>import("./post.39a9df54.js"),["./post.39a9df54.js","./index.5d0e62ae.js","./default.e9485e12.js","../assets/default.5c045b07.css","./ProgressBar.svelte_svelte_type_style_lang.7368aea6.js","./index.6e46b5de.js","../assets/ProgressBar.4f1e9ba5.css","../assets/post.8ac2c1fb.css"],import.meta.url),"../../../posts/create-horizontal-scroll-section-html-css-js/post.md":()=>s(()=>import("./post.2013cbf5.js"),["./post.2013cbf5.js","./index.5d0e62ae.js","./default.e9485e12.js","../assets/default.5c045b07.css"],import.meta.url),"../../../posts/seo-component-for-svelte/post.md":()=>s(()=>import("./post.e722f515.js"),["./post.e722f515.js","./index.5d0e62ae.js","./default.e9485e12.js","../assets/default.5c045b07.css"],import.meta.url),"../../../posts/the-last-tool-for-colors/post.md":()=>s(()=>import("./post.9adc5acc.js"),["./post.9adc5acc.js","./index.5d0e62ae.js","./default.e9485e12.js","../assets/default.5c045b07.css"],import.meta.url)}),`../../../posts/${o.slug}/post.md`),a=await r(`${e.origin}/api/posts`).then(i=>i.json()),n=await l(a,t.metadata.title,t.metadata.category,t.metadata.tags);return{content:t.default,meta:t.metadata,related:n}}catch{throw _(404,`Could not find ${o.slug}`)}}const v=Object.freeze(Object.defineProperty({__proto__:null,load:u},Symbol.toStringTag,{value:"Module"}));export{v as _,u as l};