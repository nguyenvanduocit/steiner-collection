import{o as u,b as c,l,s,a0 as d,a1 as f,a2 as m,a3 as h,a4 as _,a5 as y,a6 as A,a7 as g,a8 as P,a9 as v,U as w,d as C,u as b,j as R,y as E,aa as L,ab as x,ac as D,ad as T}from"./chunks/framework.16aab5ce.js";import{t as p}from"./chunks/theme.ad71330f.js";const j={__name:"MyLayout",setup(e){const{Layout:a}=p;return(t,n)=>(u(),c(l(a)))}},O={extends:p,Layout:j};function i(e){if(e.extends){const a=i(e.extends);return{...a,...e,async enhanceApp(t){a.enhanceApp&&await a.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const o=i(O),S=C({name:"VitePressApp",setup(){const{site:e}=b();return R(()=>{E(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),L(),x(),D(),o.setup&&o.setup(),()=>T(o.Layout)}});async function B(){const e=M(),a=F();a.provide(f,e);const t=m(e.route);return a.provide(h,t),a.component("Content",_),a.component("ClientOnly",y),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),o.enhanceApp&&await o.enhanceApp({app:a,router:e,siteData:A}),{app:a,router:e,data:t}}function F(){return g(S)}function M(){let e=s,a;return P(t=>{let n=v(t),r=null;return n&&(e&&(a=n),(e||a===n)&&(n=n.replace(/\.js$/,".lean.js")),r=w(()=>import(n),[])),s&&(e=!1),r},o.NotFound)}s&&B().then(({app:e,router:a,data:t})=>{a.go().then(()=>{d(a.route,t.site),e.mount("#app")})});export{B as createApp};
