import{f as g,_ as u,o as r,c as _,n as v,q as l,F as L,i as $,a as c,s as w,k as d,v as S,x as M,b as p,w as m}from"./entry.42847024.js";import{_ as C}from"./Card.79ac5893.js";const f=g("stamp",{state:()=>({stampLocationList:[]}),actions:{addStampLocation(s){this.stampLocationList.push(s)}}}),b=""+new URL("stamp01.25f580a8.png",import.meta.url).href;const y={setup(){return{store:f()}},data(){return{stamp:{image:b}}},computed:{stampLocationList(){return this.store.stampLocationList}}},X=["src"];function Y(s,e,a,i,t,o){return r(!0),_(L,null,v(o.stampLocationList,n=>(r(),_("img",{class:"absolute stamp-wrap",alt:"stamp",src:t.stamp.image,style:l({left:n[0]+"px",top:n[1]+"px"})},null,12,X))),256)}const I=u(y,[["render",Y],["__scopeId","data-v-ca0c6577"]]),N=""+new URL("coupon01.51ae7aaa.png",import.meta.url).href,B={class:"relative"},R=["src","onClick"],U=$({__name:"CouponImg",setup(s){const e=f(),a={image:N};function i(t){e.addStampLocation([t.offsetX,t.offsetY])}return(t,o)=>(r(),_("div",B,[c("img",{src:a.image,onClick:w(i,["stop","prevent"]),alt:"coupon",style:{width:"300px"}},null,8,R),d(t.$slots,"default")]))}}),F={};function G(s,e){const a=C;return r(),S(a,{class:"mx-auto w-[300px]",ui:{background:"bg-red-500 dark:bg-red-600"}})}const T=u(F,[["render",G]]),V=""+new URL("stamp-stick.885dd975.png",import.meta.url).href,j={name:"stamp-wrap",setup(){return{stampStick:V}},data(){return{stickX:0,stickY:0}},methods:{onMouseMove(s){this.stickX=s.clientX-20,this.stickY=s.clientY-122},onMouseLeave(){this.stickX=0,this.stickY=0}}},q=["src"];function z(s,e,a,i,t,o){return r(),_("div",{class:"w-100 h-100",onMouseleave:e[0]||(e[0]=(...n)=>o.onMouseLeave&&o.onMouseLeave(...n)),onMousemove:e[1]||(e[1]=(...n)=>o.onMouseMove&&o.onMouseMove(...n))},[d(s.$slots,"default"),c("img",{class:"stamp-stick fixed",alt:"stamp-stick",style:l({left:t.stickX?t.stickX+"px":"auto",top:t.stickY?t.stickY+"px":"auto"}),src:i.stampStick,width:"40"},null,12,q)],32)}const E=u(j,[["render",z]]),P={name:"card-test",setup(){M().getTheme()}},W={class:"flex flex-row"},A={class:"basis-full"},D={class:"flex flex-row justify-center"},H={class:"basis-10"};function J(s,e,a,i,t,o){const n=I,x=U,h=T,k=E;return r(),_("div",null,[p(k,null,{default:m(()=>[c("div",W,[c("div",A,[p(x,null,{default:m(()=>[p(n)]),_:1})])]),c("div",D,[c("div",H,[p(h)])])]),_:1})])}const Q=u(P,[["render",J]]);export{Q as default};
