import{S as Ta,i as ja,s as Ia,I as Zs,y as Pa,z as Da,A as Ca,Y as Ha,Z as ia,g as Ma,d as Ra,B as $a,J as ra,k as p,q as l,a as u,l as o,m as c,r as i,h as a,c as k,n as E,b as e,D as t,Q as La}from"../chunks/index.0dec2ec7.js";import{D as Fa}from"../chunks/default.fbab4dae.js";function Ga(C){let r,y,v,b,d,f,w,gs,Y,H,ws,U,m,hs,q,xs,_s,W,Es,bs,Z,Os,Ss,V,h,As,z,Ts,js,X,O,ka=`<code class="language-html"><span class="token comment">&lt;!-- SEO.svelte --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">svelte:</span>head</span><span class="token punctuation">></span></span>
	
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">svelte:</span>head</span><span class="token punctuation">></span></span>
</code>`,ss,g,Is,J,Ps,Ds,K,Cs,Hs,as,S,da=`<code class="language-diff"><span class="token deleted-arrow deleted"><span class="token prefix deleted">&lt;</span><span class="token line">!-- SEO.svelte -->
</span><span class="token prefix deleted">&lt;</span><span class="token line">svelte:head>
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">   &lt;title>An Awesome Title&lt;/title>
</span></span><span class="token deleted-arrow deleted"><span class="token prefix deleted">&lt;</span><span class="token line">/svelte:head>
</span></span></code>`,ns,M,Ms,es,A,fa=`<code class="language-diff"><span class="token deleted-arrow deleted"><span class="token prefix deleted">&lt;</span><span class="token line">!-- SEO.svelte -->
</span><span class="token prefix deleted">&lt;</span><span class="token line">svelte:head>
</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">   &lt;title>An Awesome Title&lt;/title>
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">   &lt;meta name="description" content="Describe what your site is about" />
</span><span class="token prefix inserted">+</span><span class="token line">   &lt;meta name="keywords" content="Awesome, site, very nice, website" />
</span></span><span class="token deleted-arrow deleted"><span class="token prefix deleted">&lt;</span><span class="token line">/svelte:head>
</span></span></code>`,ts,R,Rs,ps,T,ma=`<code class="language-diff"><span class="token deleted-arrow deleted"><span class="token prefix deleted">&lt;</span><span class="token line">!-- SEO.svelte -->
</span><span class="token prefix deleted">&lt;</span><span class="token line">svelte:head>
</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">   &lt;title>An Awesome Title&lt;/title>
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">	&lt;meta property="og:title" content="An Awesome Title" />
</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">   &lt;meta name="description" content="Describe what your site is about" />
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">   &lt;meta property="og:description" content="Describe what your site is about" />
</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">   &lt;meta name="keywords" content="Awesome, site, very nice, website" />
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">   &lt;meta property="og:type" content="website" />
</span></span><span class="token deleted-arrow deleted"><span class="token prefix deleted">&lt;</span><span class="token line">/svelte:head>
</span></span></code>`,ls,$,$s,os,j,va=`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">import</span> <span class="token constant">SEO</span> <span class="token keyword">from</span> <span class="token string">"path/to/SEO.svelte"</span>
    <span class="token comment">// rest of your code</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SEO</span> <span class="token punctuation">/></span></span>
</code>`,cs,L,Ls,is,F,Fs,rs,I,ya=`<code class="language-diff"><span class="token deleted-arrow deleted"><span class="token prefix deleted">&lt;</span><span class="token line">!-- SEO.svelte -->
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line"> &lt;script>
</span><span class="token prefix inserted">+</span><span class="token line">    export let title = "An Awesome Title";
</span><span class="token prefix inserted">+</span><span class="token line">    export let description = "Describe what your site is about";
</span><span class="token prefix inserted">+</span><span class="token line">    export let tags = ["Awesome", "site", "very nice", "website"];
</span><span class="token prefix inserted">+</span><span class="token line">    export let ogType = "website"
</span><span class="token prefix inserted">+</span><span class="token line"> &lt;/script>
</span></span><span class="token deleted-arrow deleted"><span class="token prefix deleted">&lt;</span><span class="token line">svelte:head>
</span></span><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">   &lt;title>An Awesome Title&lt;/title>
</span><span class="token prefix deleted">-</span><span class="token line">   &lt;meta property="og:title" content="An Awesome Title" />
</span><span class="token prefix deleted">-</span><span class="token line">   &lt;meta name="description" content="Describe what your site is about" />
</span><span class="token prefix deleted">-</span><span class="token line">   &lt;meta property="og:description" content="Describe what your site is about" />
</span><span class="token prefix deleted">-</span><span class="token line">   &lt;meta name="keywords" content="Awesome, site, very nice, website" />
</span><span class="token prefix deleted">-</span><span class="token line">   &lt;meta property="og:type" content="website" />
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">   &#123;#if title&#125;
</span><span class="token prefix inserted">+</span><span class="token line">		&lt;title>&#123;title&#125;&lt;/title>
</span><span class="token prefix inserted">+</span><span class="token line">	    &lt;meta property="og:title" content=&#123;title&#125; />
</span><span class="token prefix inserted">+</span><span class="token line">   &#123;/if&#125;
</span><span class="token prefix inserted">+</span><span class="token line">   &#123;#if description&#125;
</span><span class="token prefix inserted">+</span><span class="token line">		&lt;meta name="description" content=&#123;description&#125; />
</span><span class="token prefix inserted">+</span><span class="token line">		&lt;meta property="og:description" content=&#123;description&#125; />
</span><span class="token prefix inserted">+</span><span class="token line">   &#123;/if&#125;
</span><span class="token prefix inserted">+</span><span class="token line">
</span><span class="token prefix inserted">+</span><span class="token line">	&#123;#if tags.length > 0&#125;
</span><span class="token prefix inserted">+</span><span class="token line">		&lt;meta name="keywords" content=&#123;tags.join(',')&#125; />
</span><span class="token prefix inserted">+</span><span class="token line">	&#123;/if&#125;
</span><span class="token prefix inserted">+</span><span class="token line">	&lt;meta property="og:type" content=&#123;ogType&#125; />
</span></span><span class="token deleted-arrow deleted"><span class="token prefix deleted">&lt;</span><span class="token line">/svelte:head>
</span></span></code>`,us,x,Gs,Q,Ns,Bs,ks,P,ga=`<code class="language-svelte"><span class="token comment">&lt;!-- routes/about-us/+page.svelte --></span>
<span class="token comment">&lt;!-- rest of you code --></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SEO</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>About us<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
</code>`,ds,G,qs,fs,N,Ws,ms,D,wa=`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">

	<span class="token comment">/**
	 * The title of the page.
	 */</span>
	<span class="token keyword">export</span> <span class="token keyword">let</span> <span class="token literal-property property">title</span><span class="token operator">:</span> string <span class="token operator">=</span> <span class="token string">"An Awesome Title"</span><span class="token punctuation">;</span>

	<span class="token comment">/**
	 * The description of the page.
	 */</span>
	<span class="token keyword">export</span> <span class="token keyword">let</span> <span class="token literal-property property">description</span><span class="token operator">:</span> string <span class="token operator">=</span> <span class="token string">"Describe what your site is about"</span><span class="token punctuation">;</span>

	<span class="token comment">/**
	 * The keywords associated with the page.
	 */</span>
	<span class="token keyword">export</span> <span class="token keyword">let</span> <span class="token literal-property property">tags</span><span class="token operator">:</span> string<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span>  <span class="token punctuation">[</span><span class="token string">"Awesome"</span><span class="token punctuation">,</span> <span class="token string">"site"</span><span class="token punctuation">,</span> <span class="token string">"very nice"</span><span class="token punctuation">,</span> <span class="token string">"website"</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

	<span class="token comment">/**
	 * The Open Graph (OG) type of the page.
	 * @default 'website'
     * 'website' or 'article'
	 */</span>
	<span class="token keyword">export</span> <span class="token keyword">let</span> <span class="token literal-property property">ogType</span><span class="token operator">:</span> string <span class="token operator">=</span> <span class="token string">'website'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">svelte:</span>head</span><span class="token punctuation">></span></span>
	<span class="token language-javascript"><span class="token punctuation">&#123;</span>#<span class="token keyword">if</span> title<span class="token punctuation">&#125;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span><span class="token language-javascript"><span class="token punctuation">&#123;</span>title<span class="token punctuation">&#125;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>og:title<span class="token punctuation">"</span></span> <span class="token attr-name">content=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>title<span class="token punctuation">&#125;</span></span> <span class="token punctuation">/></span></span>
	<span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token operator">/</span><span class="token keyword">if</span><span class="token punctuation">&#125;</span></span>

	<span class="token language-javascript"><span class="token punctuation">&#123;</span>#<span class="token keyword">if</span> description<span class="token punctuation">&#125;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>description<span class="token punctuation">"</span></span> <span class="token attr-name">content=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>description<span class="token punctuation">&#125;</span></span> <span class="token punctuation">/></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>og:description<span class="token punctuation">"</span></span> <span class="token attr-name">content=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>description<span class="token punctuation">&#125;</span></span> <span class="token punctuation">/></span></span>
	<span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token operator">/</span><span class="token keyword">if</span><span class="token punctuation">&#125;</span></span>
	<span class="token language-javascript"><span class="token punctuation">&#123;</span>#<span class="token keyword">if</span> tags<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">&#125;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>keywords<span class="token punctuation">"</span></span> <span class="token attr-name">content=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>tags<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">','</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span> <span class="token punctuation">/></span></span>
	<span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token operator">/</span><span class="token keyword">if</span><span class="token punctuation">&#125;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>og:type<span class="token punctuation">"</span></span> <span class="token attr-name">content=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>ogType<span class="token punctuation">&#125;</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">svelte:</span>head</span><span class="token punctuation">></span></span></code>`;return{c(){r=p("p"),y=l(`It’s really easy to make a component handling all the SEO stuff which can be used (and reused) throughout your Sveltekit website.
Svelte has a really handy element `),v=p("code"),b=l("svelte:head"),d=l(" which can be used anywhere, and it will automatically inject the data into head in your site."),f=u(),w=p("p"),gs=l("Assuming you already know what SEO means, I’m not going to bother explaining it. All you need is a component for SEO, so here you go:"),Y=u(),H=p("h2"),ws=l("Initial step"),U=u(),m=p("p"),hs=l("Create a "),q=p("code"),xs=l(".svelte"),_s=l(" file and name it "),W=p("code"),Es=l("SEO.svelte"),bs=l(" (or whatever you want) in your desired directory. In my case, it’s "),Z=p("em"),Os=l("src/lib/components"),Ss=l("."),V=u(),h=p("p"),As=l("Next, add "),z=p("code"),Ts=l("<svelte:head> </svelte:head>"),js=l(" in the newly created component like so"),X=u(),O=p("pre"),ss=u(),g=p("p"),Is=l("Inside of that tag, now we can use all the tags that are needed for "),J=p("code"),Ps=l("<head>"),Ds=l(`.
`),K=p("code"),Cs=l("title"),Hs=l(" is the most important part of SEO. So let’s add that next."),as=u(),S=p("pre"),ns=u(),M=p("p"),Ms=l("What about meta tags like description, tags etc? I got you covered."),es=u(),A=p("pre"),ts=u(),R=p("p"),Rs=l("In next step we will add OpenGraph meta tags."),ps=u(),T=p("pre"),ls=u(),$=p("p"),$s=l("If your site contains only one page, you can just import this component in your +page.svelte file like so:"),os=u(),j=p("pre"),cs=u(),L=p("p"),Ls=l("But in most cases, you have multiple pages, each containing different metadata. In that case, we need to make our component dynamic."),is=u(),F=p("h2"),Fs=l("Making the component dynamic"),rs=u(),I=p("pre"),us=u(),x=p("p"),Gs=l("Now you should add this to your "),Q=p("code"),Ns=l("+layout.svelte"),Bs=l(" file. It will use the default values. To use a different value on a page, just pass the value you want to override. For example:"),ks=u(),P=p("pre"),ds=u(),G=p("p"),qs=l("This will overwrite the default value with “About us”. Don’t worry, meta tags won’t be duplicated."),fs=u(),N=p("h2"),Ws=l("Final code"),ms=u(),D=p("pre"),this.h()},l(s){r=o(s,"P",{});var n=c(r);y=i(n,`It’s really easy to make a component handling all the SEO stuff which can be used (and reused) throughout your Sveltekit website.
Svelte has a really handy element `),v=o(n,"CODE",{});var zs=c(v);b=i(zs,"svelte:head"),zs.forEach(a),d=i(n," which can be used anywhere, and it will automatically inject the data into head in your site."),n.forEach(a),f=k(s),w=o(s,"P",{});var Js=c(w);gs=i(Js,"Assuming you already know what SEO means, I’m not going to bother explaining it. All you need is a component for SEO, so here you go:"),Js.forEach(a),Y=k(s),H=o(s,"H2",{});var Ks=c(H);ws=i(Ks,"Initial step"),Ks.forEach(a),U=k(s),m=o(s,"P",{});var _=c(m);hs=i(_,"Create a "),q=o(_,"CODE",{});var Qs=c(q);xs=i(Qs,".svelte"),Qs.forEach(a),_s=i(_," file and name it "),W=o(_,"CODE",{});var Ys=c(W);Es=i(Ys,"SEO.svelte"),Ys.forEach(a),bs=i(_," (or whatever you want) in your desired directory. In my case, it’s "),Z=o(_,"EM",{});var Us=c(Z);Os=i(Us,"src/lib/components"),Us.forEach(a),Ss=i(_,"."),_.forEach(a),V=k(s),h=o(s,"P",{});var vs=c(h);As=i(vs,"Next, add "),z=o(vs,"CODE",{});var Vs=c(z);Ts=i(Vs,"<svelte:head> </svelte:head>"),Vs.forEach(a),js=i(vs," in the newly created component like so"),vs.forEach(a),X=k(s),O=o(s,"PRE",{class:!0});var ha=c(O);ha.forEach(a),ss=k(s),g=o(s,"P",{});var B=c(g);Is=i(B,"Inside of that tag, now we can use all the tags that are needed for "),J=o(B,"CODE",{});var Xs=c(J);Ps=i(Xs,"<head>"),Xs.forEach(a),Ds=i(B,`.
`),K=o(B,"CODE",{});var sa=c(K);Cs=i(sa,"title"),sa.forEach(a),Hs=i(B," is the most important part of SEO. So let’s add that next."),B.forEach(a),as=k(s),S=o(s,"PRE",{class:!0});var xa=c(S);xa.forEach(a),ns=k(s),M=o(s,"P",{});var aa=c(M);Ms=i(aa,"What about meta tags like description, tags etc? I got you covered."),aa.forEach(a),es=k(s),A=o(s,"PRE",{class:!0});var _a=c(A);_a.forEach(a),ts=k(s),R=o(s,"P",{});var na=c(R);Rs=i(na,"In next step we will add OpenGraph meta tags."),na.forEach(a),ps=k(s),T=o(s,"PRE",{class:!0});var Ea=c(T);Ea.forEach(a),ls=k(s),$=o(s,"P",{});var ea=c($);$s=i(ea,"If your site contains only one page, you can just import this component in your +page.svelte file like so:"),ea.forEach(a),os=k(s),j=o(s,"PRE",{class:!0});var ba=c(j);ba.forEach(a),cs=k(s),L=o(s,"P",{});var ta=c(L);Ls=i(ta,"But in most cases, you have multiple pages, each containing different metadata. In that case, we need to make our component dynamic."),ta.forEach(a),is=k(s),F=o(s,"H2",{});var pa=c(F);Fs=i(pa,"Making the component dynamic"),pa.forEach(a),rs=k(s),I=o(s,"PRE",{class:!0});var Oa=c(I);Oa.forEach(a),us=k(s),x=o(s,"P",{});var ys=c(x);Gs=i(ys,"Now you should add this to your "),Q=o(ys,"CODE",{});var la=c(Q);Ns=i(la,"+layout.svelte"),la.forEach(a),Bs=i(ys," file. It will use the default values. To use a different value on a page, just pass the value you want to override. For example:"),ys.forEach(a),ks=k(s),P=o(s,"PRE",{class:!0});var Sa=c(P);Sa.forEach(a),ds=k(s),G=o(s,"P",{});var oa=c(G);qs=i(oa,"This will overwrite the default value with “About us”. Don’t worry, meta tags won’t be duplicated."),oa.forEach(a),fs=k(s),N=o(s,"H2",{});var ca=c(N);Ws=i(ca,"Final code"),ca.forEach(a),ms=k(s),D=o(s,"PRE",{class:!0});var Aa=c(D);Aa.forEach(a),this.h()},h(){E(O,"class","language-html"),E(S,"class","language-diff"),E(A,"class","language-diff"),E(T,"class","language-diff"),E(j,"class","language-svelte"),E(I,"class","language-diff"),E(P,"class","language-svelte"),E(D,"class","language-svelte")},m(s,n){e(s,r,n),t(r,y),t(r,v),t(v,b),t(r,d),e(s,f,n),e(s,w,n),t(w,gs),e(s,Y,n),e(s,H,n),t(H,ws),e(s,U,n),e(s,m,n),t(m,hs),t(m,q),t(q,xs),t(m,_s),t(m,W),t(W,Es),t(m,bs),t(m,Z),t(Z,Os),t(m,Ss),e(s,V,n),e(s,h,n),t(h,As),t(h,z),t(z,Ts),t(h,js),e(s,X,n),e(s,O,n),O.innerHTML=ka,e(s,ss,n),e(s,g,n),t(g,Is),t(g,J),t(J,Ps),t(g,Ds),t(g,K),t(K,Cs),t(g,Hs),e(s,as,n),e(s,S,n),S.innerHTML=da,e(s,ns,n),e(s,M,n),t(M,Ms),e(s,es,n),e(s,A,n),A.innerHTML=fa,e(s,ts,n),e(s,R,n),t(R,Rs),e(s,ps,n),e(s,T,n),T.innerHTML=ma,e(s,ls,n),e(s,$,n),t($,$s),e(s,os,n),e(s,j,n),j.innerHTML=va,e(s,cs,n),e(s,L,n),t(L,Ls),e(s,is,n),e(s,F,n),t(F,Fs),e(s,rs,n),e(s,I,n),I.innerHTML=ya,e(s,us,n),e(s,x,n),t(x,Gs),t(x,Q),t(Q,Ns),t(x,Bs),e(s,ks,n),e(s,P,n),P.innerHTML=ga,e(s,ds,n),e(s,G,n),t(G,qs),e(s,fs,n),e(s,N,n),t(N,Ws),e(s,ms,n),e(s,D,n),D.innerHTML=wa},p:La,d(s){s&&a(r),s&&a(f),s&&a(w),s&&a(Y),s&&a(H),s&&a(U),s&&a(m),s&&a(V),s&&a(h),s&&a(X),s&&a(O),s&&a(ss),s&&a(g),s&&a(as),s&&a(S),s&&a(ns),s&&a(M),s&&a(es),s&&a(A),s&&a(ts),s&&a(R),s&&a(ps),s&&a(T),s&&a(ls),s&&a($),s&&a(os),s&&a(j),s&&a(cs),s&&a(L),s&&a(is),s&&a(F),s&&a(rs),s&&a(I),s&&a(us),s&&a(x),s&&a(ks),s&&a(P),s&&a(ds),s&&a(G),s&&a(fs),s&&a(N),s&&a(ms),s&&a(D)}}}function Na(C){let r,y;const v=[C[0],ua];let b={$$slots:{default:[Ga]},$$scope:{ctx:C}};for(let d=0;d<v.length;d+=1)b=Zs(b,v[d]);return r=new Fa({props:b}),{c(){Pa(r.$$.fragment)},l(d){Da(r.$$.fragment,d)},m(d,f){Ca(r,d,f),y=!0},p(d,[f]){const w=f&1?Ha(v,[f&1&&ia(d[0]),f&0&&ia(ua)]):{};f&2&&(w.$$scope={dirty:f,ctx:d}),r.$set(w)},i(d){y||(Ma(r.$$.fragment,d),y=!0)},o(d){Ra(r.$$.fragment,d),y=!1},d(d){$a(r,d)}}}const ua={title:"SEO Component for Svelte",date:"2023-04-26T00:00:00.000Z",category:"Code",author:"Imran",description:"Robust and flexible SEO component for your Svelte/SvelteKit project",tags:["tutorial","how-to","svelte","web-dev"],slug:"seo-component-for-svelte"};function Ba(C,r,y){return C.$$set=v=>{y(0,r=Zs(Zs({},r),ra(v)))},r=ra(r),[r]}class Za extends Ta{constructor(r){super(),ja(this,r,Ba,Na,Ia,{})}}export{Za as default,ua as metadata};
