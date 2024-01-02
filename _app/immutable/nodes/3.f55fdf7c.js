import{s as me,f as C,a as S,l as ne,g as E,h as D,c as P,d,m as le,j as k,i as N,u as p,n as de,v as he,x as W,e as ae,r as _e}from"../chunks/scheduler.295d690e.js";import{S as ue,i as pe,b as I,d as V,m as y,a as _,t as w,e as L,g as te,c as re}from"../chunks/index.98f641ac.js";import{e as O,u as ve,o as we}from"../chunks/each.6632f390.js";import{b as xe,c as oe,g as Q,E as be}from"../chunks/params.f1673cb7.js";import{C as ke}from"../chunks/Card.729aec33.js";import{C as Ce}from"../chunks/CardLogo.e4beb12d.js";import{C as Ee,a as K}from"../chunks/ChipIcon.9e0ebf2f.js";import{b as se}from"../chunks/paths.4053e3df.js";import{U as G}from"../chunks/UIcon.ed501374.js";import{S as De}from"../chunks/SearchPage.2ce31f83.js";import{i as Ie}from"../chunks/index.97b3c5e0.js";function ie(o,t,r){const e=o.slice();return e[5]=t[r],e}function Ve(o){let t,r;return t=new G({props:{icon:"i-carbon-building"}}),{c(){I(t.$$.fragment)},l(e){V(t.$$.fragment,e)},m(e,n){y(t,e,n),r=!0},p:W,i(e){r||(_(t.$$.fragment,e),r=!0)},o(e){w(t.$$.fragment,e),r=!1},d(e){L(t,e)}}}function ye(o){let t,r;return t=new G({props:{icon:"i-carbon-location"}}),{c(){I(t.$$.fragment)},l(e){V(t.$$.fragment,e)},m(e,n){y(t,e,n),r=!0},p:W,i(e){r||(_(t.$$.fragment,e),r=!0)},o(e){w(t.$$.fragment,e),r=!1},d(e){L(t,e)}}}function Le(o){let t,r;return t=new G({props:{icon:"i-carbon-hourglass"}}),{c(){I(t.$$.fragment)},l(e){V(t.$$.fragment,e)},m(e,n){y(t,e,n),r=!0},p:W,i(e){r||(_(t.$$.fragment,e),r=!0)},o(e){w(t.$$.fragment,e),r=!1},d(e){L(t,e)}}}function ce(o){let t,r,e;return t=new K({props:{logo:Q(o[5].logo),name:o[5].name,href:""}}),{c(){I(t.$$.fragment),r=S()},l(n){V(t.$$.fragment,n),r=P(n)},m(n,s){y(t,n,s),N(n,r,s),e=!0},p(n,s){const c={};s&1&&(c.logo=Q(n[5].logo)),s&1&&(c.name=n[5].name),t.$set(c)},i(n){e||(_(t.$$.fragment,n),e=!0)},o(n){w(t.$$.fragment,n),e=!1},d(n){n&&d(r),L(t,n)}}}function Se(o){let t,r,e,n,s,c,$,a,l,f,h,B,g,b,M,F,Z,R,A=o[0].shortDescription+"",J,ee,U,H;r=new Ce({props:{src:Q(o[0].logo),alt:o[0].company,size:75}}),c=new Ee({props:{title:o[0].name}}),l=new K({props:{name:`Company: ${o[0].company}`,$$slots:{default:[Ve]},$$scope:{ctx:o}}}),h=new K({props:{name:`Location: ${o[0].location}`,$$slots:{default:[ye]},$$scope:{ctx:o}}}),g=new K({props:{name:`Contract: ${o[0].contract}`,$$slots:{default:[Le]},$$scope:{ctx:o}}});let q=O(o[0].skills),u=[];for(let i=0;i<q.length;i+=1)u[i]=ce(ie(o,q,i));const ge=i=>w(u[i],1,1,()=>{u[i]=null});return{c(){t=C("div"),I(r.$$.fragment),e=S(),n=C("div"),s=C("h3"),I(c.$$.fragment),$=S(),a=C("div"),I(l.$$.fragment),f=S(),I(h.$$.fragment),B=S(),I(g.$$.fragment),b=S(),M=C("div"),F=ne(o[1]),Z=S(),R=C("div"),J=ne(A),ee=S(),U=C("div");for(let i=0;i<u.length;i+=1)u[i].c();this.h()},l(i){t=E(i,"DIV",{class:!0});var m=D(t);V(r.$$.fragment,m),e=P(m),n=E(m,"DIV",{class:!0});var v=D(n);s=E(v,"H3",{class:!0});var X=D(s);V(c.$$.fragment,X),X.forEach(d),$=P(v),a=E(v,"DIV",{class:!0});var j=D(a);V(l.$$.fragment,j),f=P(j),V(h.$$.fragment,j),B=P(j),V(g.$$.fragment,j),j.forEach(d),b=P(v),M=E(v,"DIV",{class:!0});var T=D(M);F=le(T,o[1]),T.forEach(d),Z=P(v),R=E(v,"DIV",{class:!0});var Y=D(R);J=le(Y,A),Y.forEach(d),ee=P(v),U=E(v,"DIV",{class:!0});var x=D(U);for(let z=0;z<u.length;z+=1)u[z].l(x);x.forEach(d),v.forEach(d),m.forEach(d),this.h()},h(){k(s,"class","flex text-[0.9em] flex-col items-start sm:flex-row sm:items-center justify-between sm:gap-5 md:flex-col md:items-start md:gap-0 lg:flex-row lg:items-center"),k(a,"class","row flex-wrap m-b-2 gap-1 text-0.9em font-300"),k(M,"class","text-[var(--accent-text)] text-[0.9em] font-200"),k(R,"class","experience-description"),k(U,"class","flex flex-row flex-wrap mt-5"),k(n,"class","col ml-0 md:ml-[20px] gap-3 w-full"),k(t,"class","col md:flex-row items-start gap-5 md:gap-1")},m(i,m){N(i,t,m),y(r,t,null),p(t,e),p(t,n),p(n,s),y(c,s,null),p(n,$),p(n,a),y(l,a,null),p(a,f),y(h,a,null),p(a,B),y(g,a,null),p(n,b),p(n,M),p(M,F),p(n,Z),p(n,R),p(R,J),p(n,ee),p(n,U);for(let v=0;v<u.length;v+=1)u[v]&&u[v].m(U,null);H=!0},p(i,m){const v={};m&1&&(v.src=Q(i[0].logo)),m&1&&(v.alt=i[0].company),r.$set(v);const X={};m&1&&(X.title=i[0].name),c.$set(X);const j={};m&1&&(j.name=`Company: ${i[0].company}`),m&256&&(j.$$scope={dirty:m,ctx:i}),l.$set(j);const T={};m&1&&(T.name=`Location: ${i[0].location}`),m&256&&(T.$$scope={dirty:m,ctx:i}),h.$set(T);const Y={};if(m&1&&(Y.name=`Contract: ${i[0].contract}`),m&256&&(Y.$$scope={dirty:m,ctx:i}),g.$set(Y),(!H||m&1)&&A!==(A=i[0].shortDescription+"")&&de(J,A),m&1){q=O(i[0].skills);let x;for(x=0;x<q.length;x+=1){const z=ie(i,q,x);u[x]?(u[x].p(z,m),_(u[x],1)):(u[x]=ce(z),u[x].c(),_(u[x],1),u[x].m(U,null))}for(te(),x=q.length;x<u.length;x+=1)ge(x);re()}},i(i){if(!H){_(r.$$.fragment,i),_(c.$$.fragment,i),_(l.$$.fragment,i),_(h.$$.fragment,i),_(g.$$.fragment,i);for(let m=0;m<q.length;m+=1)_(u[m]);H=!0}},o(i){w(r.$$.fragment,i),w(c.$$.fragment,i),w(l.$$.fragment,i),w(h.$$.fragment,i),w(g.$$.fragment,i),u=u.filter(Boolean);for(let m=0;m<u.length;m+=1)w(u[m]);H=!1},d(i){i&&d(t),L(r),L(c),L(l),L(h),L(g),he(u,i)}}}function Pe(o){let t,r;return t=new ke({props:{margin:"0px 0px 20px 0px",tiltDegree:2,href:`${se}/experience/${o[0].slug}`,$$slots:{default:[Se]},$$scope:{ctx:o}}}),{c(){I(t.$$.fragment)},l(e){V(t.$$.fragment,e)},m(e,n){y(t,e,n),r=!0},p(e,[n]){const s={};n&1&&(s.href=`${se}/experience/${e[0].slug}`),n&257&&(s.$$scope={dirty:n,ctx:e}),t.$set(s)},i(e){r||(_(t.$$.fragment,e),r=!0)},o(e){w(t.$$.fragment,e),r=!1},d(e){L(t,e)}}}function Me(o,t,r){let{experience:e}=t;const n=xe(e.period.from,e.period.to),s=`${oe(e.period.from.getMonth())} ${e.period.from.getFullYear()}`,c=e.period.to?`${oe(e.period.to.getMonth())} ${e.period.to.getFullYear()}`:"Present",$=`${s} - ${c} · ${n}`;return o.$$set=a=>{"experience"in a&&r(0,e=a.experience)},[e,$]}class je extends ue{constructor(t){super(),pe(this,t,Me,Pe,me,{experience:0})}}function fe(o,t,r){const e=o.slice();return e[4]=t[r],e[6]=r,e}function Be(o){let t,r,e=[],n=new Map,s,c,$=O(o[0]);const a=l=>l[4].slug;for(let l=0;l<$.length;l+=1){let f=fe(o,$,l),h=a(f);n.set(h,e[l]=$e(h,f))}return{c(){t=C("div"),r=S();for(let l=0;l<e.length;l+=1)e[l].c();s=ae(),this.h()},l(l){t=E(l,"DIV",{class:!0}),D(t).forEach(d),r=P(l);for(let f=0;f<e.length;f+=1)e[f].l(l);s=ae(),this.h()},h(){k(t,"class","w-[0.5px] hidden lg:flex top-0 bottom-0 py-50px bg-[var(--border)] absolute rounded")},m(l,f){N(l,t,f),N(l,r,f);for(let h=0;h<e.length;h+=1)e[h]&&e[h].m(l,f);N(l,s,f),c=!0},p(l,f){f&1&&($=O(l[0]),te(),e=ve(e,f,a,1,l,$,n,s.parentNode,we,$e,s,fe),re())},i(l){if(!c){for(let f=0;f<$.length;f+=1)_(e[f]);c=!0}},o(l){for(let f=0;f<e.length;f+=1)w(e[f]);c=!1},d(l){l&&(d(t),d(r),d(s));for(let f=0;f<e.length;f+=1)e[f].d(l)}}}function Ne(o){let t,r,e,n,s="Could not find anything...",c;return r=new G({props:{icon:"i-carbon-development",classes:"text-3.5em"}}),{c(){t=C("div"),I(r.$$.fragment),e=S(),n=C("p"),n.textContent=s,this.h()},l($){t=E($,"DIV",{class:!0});var a=D(t);V(r.$$.fragment,a),e=P(a),n=E(a,"P",{class:!0,"data-svelte-h":!0}),_e(n)!=="svelte-1jyyf6v"&&(n.textContent=s),a.forEach(d),this.h()},h(){k(n,"class","font-300"),k(t,"class","p-5 col-center gap-3 m-y-auto text-[var(--accent-text)] flex-1")},m($,a){N($,t,a),y(r,t,null),p(t,e),p(t,n),c=!0},p:W,i($){c||(_(r.$$.fragment,$),c=!0)},o($){w(r.$$.fragment,$),c=!1},d($){$&&d(t),L(r)}}}function $e(o,t){let r,e,n,s,c,$,a,l,f,h,B;return c=new G({props:{icon:"i-carbon-condition-point",classes:""}}),l=new je({props:{experience:t[4]}}),{key:o,first:null,c(){r=C("div"),e=C("div"),n=S(),s=C("div"),I(c.$$.fragment),$=S(),a=C("div"),I(l.$$.fragment),f=S(),this.h()},l(g){r=E(g,"DIV",{class:!0});var b=D(r);e=E(b,"DIV",{class:!0}),D(e).forEach(d),n=P(b),s=E(b,"DIV",{class:!0});var M=D(s);V(c.$$.fragment,M),M.forEach(d),$=P(b),a=E(b,"DIV",{class:!0});var F=D(a);V(l.$$.fragment,F),F.forEach(d),f=P(b),b.forEach(d),this.h()},h(){k(e,"class","flex-1 hidden lg:flex"),k(s,"class","hidden lg:inline p-15px bg-[var(--main)] rounded"),k(a,"class","flex-1 col items-stretch"),k(r,"class",h=`flex ${t[6]%2!==0?"flex-row":"flex-row-reverse"} relative items-center w-full my-[10px]`),this.first=r},m(g,b){N(g,r,b),p(r,e),p(r,n),p(r,s),y(c,s,null),p(r,$),p(r,a),y(l,a,null),p(r,f),B=!0},p(g,b){t=g;const M={};b&1&&(M.experience=t[4]),l.$set(M),(!B||b&1&&h!==(h=`flex ${t[6]%2!==0?"flex-row":"flex-row-reverse"} relative items-center w-full my-[10px]`))&&k(r,"class",h)},i(g){B||(_(c.$$.fragment,g),_(l.$$.fragment,g),B=!0)},o(g){w(c.$$.fragment,g),w(l.$$.fragment,g),B=!1},d(g){g&&d(r),L(c),L(l)}}}function Ue(o){let t,r,e,n;const s=[Ne,Be],c=[];function $(a,l){return a[0].length===0?0:1}return r=$(o),e=c[r]=s[r](o),{c(){t=C("div"),e.c(),this.h()},l(a){t=E(a,"DIV",{class:!0});var l=D(t);e.l(l),l.forEach(d),this.h()},h(){k(t,"class","col items-center relative mt-10 flex-1")},m(a,l){N(a,t,l),c[r].m(t,null),n=!0},p(a,l){let f=r;r=$(a),r===f?c[r].p(a,l):(te(),w(c[f],1,1,()=>{c[f]=null}),re(),e=c[r],e?e.p(a,l):(e=c[r]=s[r](a),e.c()),_(e,1),e.m(t,null))},i(a){n||(_(e),n=!0)},o(a){w(e),n=!1},d(a){a&&d(t),c[r].d()}}}function qe(o){let t,r;return t=new De({props:{title:o[1],$$slots:{default:[Ue]},$$scope:{ctx:o}}}),t.$on("search",o[2]),{c(){I(t.$$.fragment)},l(e){V(t.$$.fragment,e)},m(e,n){y(t,e,n),r=!0},p(e,[n]){const s={};n&129&&(s.$$scope={dirty:n,ctx:e}),t.$set(s)},i(e){r||(_(t.$$.fragment,e),r=!0)},o(e){w(t.$$.fragment,e),r=!1},d(e){L(t,e)}}}function Fe(o,t,r){const{items:e,title:n}=be;let s=[...e];return[s,n,$=>{const a=$.detail.search;Ie(a)&&r(0,s=e),r(0,s=e.filter(l=>l.name.toLowerCase().includes(a)||l.company.toLowerCase().includes(a)||l.description.toLowerCase().includes(a)))}]}class Qe extends ue{constructor(t){super(),pe(this,t,Fe,qe,me,{})}}export{Qe as component};
