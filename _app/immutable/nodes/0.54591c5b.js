import{s as W,f as $,a as N,l as S,g,h as x,c as j,m as B,d as v,r as ae,j as p,i as C,u as m,v as ne,w as X,x as re,y as le,z as F,A as oe,B as ce,C as ie,o as ue}from"../chunks/scheduler.295d690e.js";import{S as Y,i as Z,b as L,d as P,m as T,a as A,g as fe,c as me,t as I,e as U}from"../chunks/index.98f641ac.js";import{e as G}from"../chunks/each.6632f390.js";import{p as _e}from"../chunks/stores.da39bba7.js";import{H as J,N as K,o as he,t as de}from"../chunks/params.f79de908.js";import{b as ee}from"../chunks/paths.ef787883.js";import{U as te}from"../chunks/UIcon.ed501374.js";function Q(c,e,t){const a=c.slice();return a[3]=e[t],a}function R(c){let e,t,a,r,_=c[3].title+"",i,h,u;return t=new te({props:{icon:c[3].icon,classes:"text-1.3em"}}),{c(){e=$("a"),L(t.$$.fragment),a=N(),r=$("span"),i=S(_),h=N(),this.h()},l(s){e=g(s,"A",{href:!0,class:!0});var f=x(e);P(t.$$.fragment,f),a=j(f),r=g(f,"SPAN",{class:!0});var b=x(r);i=B(b,_),b.forEach(v),h=j(f),f.forEach(v),this.h()},h(){p(r,"class","nav-menu-item-label svelte-z8k68j"),p(e,"href",`${ee}${c[3].to}`),p(e,"class","nav-menu-item !text-[var(--secondary-text)] svelte-z8k68j")},m(s,f){C(s,e,f),T(t,e,null),m(e,a),m(e,r),m(r,i),m(e,h),u=!0},p:re,i(s){u||(A(t.$$.fragment,s),u=!0)},o(s){I(t.$$.fragment,s),u=!1},d(s){s&&v(e),U(t)}}}function pe(c){let e,t,a,r,_,i,h=J.name+"",u,s,f=J.lastName+"",b,D,y,H,k,q="",M;r=new te({props:{icon:"i-carbon-code",classes:"text-2em"}});let E=G(c[0]),o=[];for(let l=0;l<E.length;l+=1)o[l]=R(Q(c,E,l));const se=l=>I(o[l],1,1,()=>{o[l]=null});return{c(){e=$("div"),t=$("nav"),a=$("a"),L(r.$$.fragment),_=N(),i=$("span"),u=S(h),s=N(),b=S(f),D=N(),y=$("div");for(let l=0;l<o.length;l+=1)o[l].c();H=N(),k=$("div"),k.innerHTML=q,this.h()},l(l){e=g(l,"DIV",{class:!0});var d=x(e);t=g(d,"NAV",{class:!0});var n=x(t);a=g(n,"A",{href:!0,class:!0});var w=x(a);P(r.$$.fragment,w),_=j(w),i=g(w,"SPAN",{class:!0});var V=x(i);u=B(V,h),s=j(V),b=B(V,f),V.forEach(v),w.forEach(v),D=j(n),y=g(n,"DIV",{class:!0});var O=x(y);for(let z=0;z<o.length;z+=1)o[z].l(O);O.forEach(v),H=j(n),k=g(n,"DIV",{class:!0,"data-svelte-h":!0}),ae(k)!=="svelte-1h6gkag"&&(k.innerHTML=q),n.forEach(v),d.forEach(v),this.h()},h(){p(i,"class","ml-2 text-md font-bold hidden md:inline"),p(a,"href",`${ee}/`),p(a,"class","nav-menu-left decoration-none flex flex-row items-center cursor-pointer px-4 text-[var(--secondary-text)] self-stretch hover:bg-[color:var(--main-hover)]"),p(y,"class","flex flex-row flex-1 self-center justify-center"),p(k,"class","flex flex-row self-stretch items-stretch gap-1 text-1.15em"),p(t,"class","container !justify-between flex flex-row items-center text-sm"),p(e,"class","nav-menu svelte-z8k68j")},m(l,d){C(l,e,d),m(e,t),m(t,a),T(r,a,null),m(a,_),m(a,i),m(i,u),m(i,s),m(i,b),m(t,D),m(t,y);for(let n=0;n<o.length;n+=1)o[n]&&o[n].m(y,null);m(t,H),m(t,k),M=!0},p(l,[d]){if(d&1){E=G(l[0]);let n;for(n=0;n<E.length;n+=1){const w=Q(l,E,n);o[n]?(o[n].p(w,d),A(o[n],1)):(o[n]=R(w),o[n].c(),A(o[n],1),o[n].m(y,null))}for(fe(),n=E.length;n<o.length;n+=1)se(n);me()}},i(l){if(!M){A(r.$$.fragment,l);for(let d=0;d<E.length;d+=1)A(o[d]);M=!0}},o(l){I(r.$$.fragment,l),o=o.filter(Boolean);for(let d=0;d<o.length;d+=1)I(o[d]);M=!1},d(l){l&&v(e),U(r),ne(o,l)}}}function ve(c,e,t){let a;X(c,_e,_=>t(1,a=_));const r=[{title:K.personal,to:"/projects",icon:"i-carbon-cube"},{title:K.career,to:"/experience",icon:"i-carbon-development"}];return c.$$.update=()=>{c.$$.dirty&2&&a&&a.url.pathname},[r,a]}class $e extends Y{constructor(e){super(),Z(this,e,ve,pe,W,{})}}function ge(c){let e,t,a,r,_,i;t=new $e({});const h=c[3].default,u=le(h,c,c[2],null);return{c(){e=$("div"),L(t.$$.fragment),a=N(),r=$("div"),u&&u.c(),this.h()},l(s){e=g(s,"DIV",{class:!0});var f=x(e);P(t.$$.fragment,f),a=j(f),r=g(f,"DIV",{class:!0});var b=x(r);u&&u.l(b),b.forEach(v),f.forEach(v),this.h()},h(){p(r,"class","content container svelte-mb6t29"),p(e,"class",_=F(`body contents ${c[0]?"theme-dark":"theme-light"}`)+" svelte-mb6t29")},m(s,f){C(s,e,f),T(t,e,null),m(e,a),m(e,r),u&&u.m(r,null),i=!0},p(s,[f]){u&&u.p&&(!i||f&4)&&oe(u,h,s,s[2],i?ie(h,s[2],f,null):ce(s[2]),null),(!i||f&1&&_!==(_=F(`body contents ${s[0]?"theme-dark":"theme-light"}`)+" svelte-mb6t29"))&&p(e,"class",_)},i(s){i||(A(t.$$.fragment,s),A(u,s),i=!0)},o(s){I(t.$$.fragment,s),I(u,s),i=!1},d(s){s&&v(e),U(t),u&&u.d(s)}}}function be(c,e,t){let a;X(c,de,h=>t(0,a=h));let{$$slots:r={},$$scope:_}=e;const i=!0;return ue(()=>he()),c.$$set=h=>{"$$scope"in h&&t(2,_=h.$$scope)},[a,i,_,r]}class Ae extends Y{constructor(e){super(),Z(this,e,be,ge,W,{prerender:1})}get prerender(){return this.$$.ctx[1]}}export{Ae as component};
