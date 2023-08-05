import z from"./Icon.f5b20020.js";import{s as _,C as r,D as S,q as t,E as $,G as d,f as w,x as B,o as l,c as i,L as N,M as f,t as m,I as v,K as T,b as h,w as j,a as g,g as C,R as A}from"./entry.09d48932.js";import{_ as E}from"./_plugin-vue_export-helper.c27b6911.js";const P=_({inheritAttrs:!1,props:{src:{type:[String,Boolean],default:null},alt:{type:String,default:null},text:{type:String,default:null},size:{type:String,default:()=>r.ui.avatar.default.size,validator(e){return Object.keys(r.ui.avatar.size).includes(e)}},chipColor:{type:String,default:()=>r.ui.avatar.default.chipColor,validator(e){return["gray",...r.ui.colors].includes(e)}},chipPosition:{type:String,default:()=>r.ui.avatar.default.chipPosition,validator(e){return Object.keys(r.ui.avatar.chip.position).includes(e)}},chipText:{type:[String,Number],default:null},ui:{type:Object,default:()=>r.ui.avatar}},setup(e){const s=S(),a=t(()=>$({},e.ui,s.ui.avatar)),n=t(()=>d(a.value.wrapper,a.value.background,a.value.rounded,a.value.size[e.size])),o=t(()=>d(a.value.rounded,a.value.size[e.size])),u=t(()=>d(a.value.chip.base,a.value.chip.size[e.size],a.value.chip.position[e.chipPosition],a.value.chip.background.replaceAll("{color}",e.chipColor))),p=t(()=>typeof e.src=="boolean"?null:e.src),y=t(()=>(e.alt||"").split(" ").map(k=>k.charAt(0)).join("").substring(0,2)),c=w(!1);B(()=>e.src,()=>{c.value&&(c.value=!1)});function b(){c.value=!0}return{wrapperClass:n,avatarClass:o,chipClass:u,url:p,placeholder:y,error:c,onError:b}}}),O=["alt","src","onerror"];function V(e,s,a,n,o,u){return l(),i("span",{class:f(e.wrapperClass)},[e.url&&!e.error?(l(),i("img",N({key:0,class:e.avatarClass,alt:e.alt,src:e.url},e.$attrs,{onerror:()=>e.onError()}),null,16,O)):e.text||e.placeholder?(l(),i("span",{key:1,class:f(e.ui.placeholder)},m(e.text||e.placeholder),3)):v("",!0),e.chipColor?(l(),i("span",{key:2,class:f(e.chipClass)},m(e.chipText),3)):v("",!0),T(e.$slots,"default")],2)}const D=E(P,[["render",V]]),q={class:"flex dark:hidden"},G={class:"hidden dark:flex"},M=_({__name:"ThemeBtn",setup(e){const{toggleTheme:s}=A();return(a,n)=>{const o=z,u=D;return l(),i("div",{class:"z-20",onClick:n[0]||(n[0]=(...p)=>C(s)&&C(s)(...p))},[h(u,{ui:{background:"bg-red-100 dark:bg-red-800 hover:bg-red-200 dark:hover:bg-red-700 cursor-pointer"}},{default:j(()=>[g("span",q,[h(o,{name:"ph:sun-fill",size:"20"})]),g("span",G,[h(o,{name:"ph:moon-fill",size:"20"})])]),_:1})])}}});export{D as _,M as a};