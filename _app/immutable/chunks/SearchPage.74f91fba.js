import{s as d,M as p,o as w,y as g,f as S,g as y,h as $,d as c,j as P,i as C,A as v,B as q,C as L}from"./scheduler.295d690e.js";import{S as b,i as D,b as E,d as I,m as M,a as m,t as f,e as R}from"./index.98f641ac.js";import{C as U}from"./CommonPage.cb4b902a.js";function j(r){let t,o;const s=r[3].default,e=g(s,r,r[4],null);return{c(){t=S("div"),e&&e.c(),this.h()},l(a){t=y(a,"DIV",{class:!0});var n=$(t);e&&e.l(n),n.forEach(c),this.h()},h(){P(t,"class","w-100% col flex-1")},m(a,n){C(a,t,n),e&&e.m(t,null),o=!0},p(a,n){e&&e.p&&(!o||n&16)&&v(e,s,a,a[4],o?L(s,a[4],n,null):q(a[4]),null)},i(a){o||(m(e,a),o=!0)},o(a){f(e,a),o=!1},d(a){a&&c(t),e&&e.d(a)}}}function A(r){let t,o;return t=new U({props:{title:r[0],$$slots:{default:[j]},$$scope:{ctx:r}}}),{c(){E(t.$$.fragment)},l(s){I(t.$$.fragment,s)},m(s,e){M(t,s,e),o=!0},p(s,[e]){const a={};e&1&&(a.title=s[0]),e&16&&(a.$$scope={dirty:e,ctx:s}),t.$set(a)},i(s){o||(m(t.$$.fragment,s),o=!0)},o(s){f(t.$$.fragment,s),o=!1},d(s){R(t,s)}}}function B(r,t,o){let{$$slots:s={},$$scope:e}=t,{title:a="Title"}=t,{search:n=""}=t;const u=p();let l=!1;return w(()=>{let i=new URLSearchParams(window.location.search);o(1,n=i.get("q")??""),o(2,l=!0)}),r.$$set=i=>{"title"in i&&o(0,a=i.title),"search"in i&&o(1,n=i.search),"$$scope"in i&&o(4,e=i.$$scope)},r.$$.update=()=>{if(r.$$.dirty&2&&u("search",{search:n.trim().toLowerCase()}),r.$$.dirty&6&&l){let i=new URLSearchParams(window.location.search);i.set("q",n);const _=`${window.location.protocol}//${window.location.host}${window.location.pathname}?${i.toString()}`,h=window.history.state;window.history.replaceState(h,"",_)}},[a,n,l,s,e]}class z extends b{constructor(t){super(),D(this,t,B,A,d,{title:0,search:1})}}export{z as S};
