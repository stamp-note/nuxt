import{D as Q,E as w,N,q as r,c as y,e as Z,$ as T,ah as ee,a7 as j,a6 as _,r as te,A as $,ai as ne,ac as ae,af as V,ag as se,K as O,a1 as re,aj as oe,_ as I,k as b,l as E,ak as ie,al as W,am as le,s as D,an as ce,ao as ue}from"./entry.3d41c70e.js";import{m as F,a as de,b as me,u as q}from"./dimensions.34864da5.js";const A=Q("stamp",{state:()=>({stampLocationList:[]}),actions:{addStampLocation(e){this.stampLocationList.push(e)}}}),ve=""+new URL("stamp01.25f580a8.png",import.meta.url).href;function fe(e){return{aspectStyles:y(()=>{const i=Number(e.aspectRatio);return i?{paddingBottom:String(1/i*100)+"%"}:void 0})}}const M=w({aspectRatio:[String,Number],contentClass:String,inline:Boolean,...F(),...de()},"VResponsive"),B=N()({name:"VResponsive",props:M(),setup(e,i){let{slots:o}=i;const{aspectStyles:t}=fe(e),{dimensionStyles:c}=me(e);return q(()=>{var a;return r("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[c.value,e.style]},[r("div",{class:"v-responsive__sizer",style:t.value},null),(a=o.additional)==null?void 0:a.call(o),o.default&&r("div",{class:["v-responsive__content",e.contentClass]},[o.default()])])}),{}}}),ge=w({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),h=(e,i)=>{let{slots:o}=i;const{transition:t,disabled:c,...a}=e,{component:s=ee,...d}=typeof t=="object"?t:{};return Z(s,T(typeof t=="string"?{name:c?"":t}:d,a,{disabled:c}),o)};function _e(e,i){if(!j)return;const o=i.modifiers||{},t=i.value,{handler:c,options:a}=typeof t=="object"?t:{handler:t,options:{}},s=new IntersectionObserver(function(){var g;let d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],f=arguments.length>1?arguments[1]:void 0;const l=(g=e._observe)==null?void 0:g[i.instance.$.uid];if(!l)return;const m=d.some(p=>p.isIntersecting);c&&(!o.quiet||l.init)&&(!o.once||m||l.init)&&c(m,d,f),m&&o.once?U(e,i):l.init=!0},a);e._observe=Object(e._observe),e._observe[i.instance.$.uid]={init:!1,observer:s},s.observe(e)}function U(e,i){var t;const o=(t=e._observe)==null?void 0:t[i.instance.$.uid];o&&(o.observer.unobserve(e),delete e._observe[i.instance.$.uid])}const pe={mounted:_e,unmounted:U},Se=pe,he=w({alt:String,cover:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},srcset:String,...M(),...F(),...ge()},"VImg"),H=N()({name:"VImg",directives:{intersect:Se},props:he(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,i){let{emit:o,slots:t}=i;const c=_(""),a=te(),s=_(e.eager?"loading":"idle"),d=_(),f=_(),l=y(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),m=y(()=>l.value.aspect||d.value/f.value||0);$(()=>e.src,()=>{g(s.value!=="idle")}),$(m,(n,u)=>{!n&&u&&a.value&&S(a.value)}),ne(()=>g());function g(n){if(!(e.eager&&n)&&!(j&&!n&&!e.eager)){if(s.value="loading",l.value.lazySrc){const u=new Image;u.src=l.value.lazySrc,S(u,null)}l.value.src&&ae(()=>{var u,v;if(o("loadstart",((u=a.value)==null?void 0:u.currentSrc)||l.value.src),(v=a.value)!=null&&v.complete){if(a.value.naturalWidth||x(),s.value==="error")return;m.value||S(a.value,null),p()}else m.value||S(a.value),z()})}}function p(){var n;z(),s.value="loaded",o("load",((n=a.value)==null?void 0:n.currentSrc)||l.value.src)}function x(){var n;s.value="error",o("error",((n=a.value)==null?void 0:n.currentSrc)||l.value.src)}function z(){const n=a.value;n&&(c.value=n.currentSrc||n.src)}let R=-1;function S(n){let u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const v=()=>{clearTimeout(R);const{naturalHeight:C,naturalWidth:P}=n;C||P?(d.value=P,f.value=C):!n.complete&&s.value==="loading"&&u!=null?R=window.setTimeout(v,u):(n.currentSrc.endsWith(".svg")||n.currentSrc.startsWith("data:image/svg+xml"))&&(d.value=1,f.value=1)};v()}const k=y(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),G=()=>{var v;if(!l.value.src||s.value==="idle")return null;const n=r("img",{class:["v-img__img",k.value],src:l.value.src,srcset:l.value.srcset,alt:e.alt,sizes:e.sizes,ref:a,onLoad:p,onError:x},null),u=(v=t.sources)==null?void 0:v.call(t);return r(h,{transition:e.transition,appear:!0},{default:()=>[V(u?r("picture",{class:"v-img__picture"},[u,n]):n,[[oe,s.value==="loaded"]])]})},K=()=>r(h,{transition:e.transition},{default:()=>[l.value.lazySrc&&s.value!=="loaded"&&r("img",{class:["v-img__img","v-img__img--preload",k.value],src:l.value.lazySrc,alt:e.alt},null)]}),X=()=>t.placeholder?r(h,{transition:e.transition,appear:!0},{default:()=>[(s.value==="loading"||s.value==="error"&&!t.error)&&r("div",{class:"v-img__placeholder"},[t.placeholder()])]}):null,Y=()=>t.error?r(h,{transition:e.transition,appear:!0},{default:()=>[s.value==="error"&&r("div",{class:"v-img__error"},[t.error()])]}):null,J=()=>e.gradient?r("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,L=_(!1);{const n=$(m,u=>{u&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{L.value=!0})}),n())})}return q(()=>{const[n]=B.filterProps(e);return V(r(B,T({class:["v-img",{"v-img--booting":!L.value},e.class],style:[{width:re(e.width==="auto"?d.value:e.width)},e.style]},n,{aspectRatio:m.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>r(O,null,[r(G,null,null),r(K,null,null),r(J,null,null),r(X,null,null),r(Y,null,null)]),default:t.default}),[[se("intersect"),{handler:g,options:e.options},null,{once:!0}]])}),{currentSrc:c,image:a,state:s,naturalWidth:d,naturalHeight:f}}}),ye={setup(){return{store:A()}},data(){return{stamp:{image:ve}}},computed:{stampLocationList(){return this.store.stampLocationList}}};function be(e,i,o,t,c,a){return b(!0),E(O,null,ie(a.stampLocationList,s=>(b(),W(H,{class:"position-absolute stamp-wrap",src:c.stamp.image,width:"50px",contain:"",style:le({left:s[0]+"px",top:s[1]+"px"})},null,8,["src","style"]))),256)}const $e=I(ye,[["render",be],["__scopeId","data-v-365aeeaf"]]),we=""+new URL("coupon01.51ae7aaa.png",import.meta.url).href,Ie={setup(){return{store:A()}},data(){return{coupon:{image:we}}},methods:{onClick(e){console.log(e),this.store.addStampLocation([e.offsetX,e.offsetY])}}};function xe(e,i,o,t,c,a){return b(),E("div",null,[r(H,{class:"position-relative",src:c.coupon.image,onClick:ue(a.onClick,["stop","prevent"]),width:"300px",contain:""},{default:D(()=>[ce(e.$slots,"default")]),_:3},8,["src","onClick"])])}const ze=I(Ie,[["render",xe]]),Re={name:"card-test",setup(){}};function ke(e,i,o,t,c,a){const s=$e,d=ze;return b(),W(d,null,{default:D(()=>[r(s)]),_:1})}const Pe=I(Re,[["render",ke]]);export{Pe as default};
