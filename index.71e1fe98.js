import{u as n}from"./counter.e042a0d4.js";import{_ as r,k as o,l as s,q as c,s as d,v as a,t as l}from"./entry.6db1f398.js";import{V as f}from"./VBtn.a4dc608f.js";import"./dimensions.47c0f2bd.js";const x={setup(){return{store:n()}},methods:{increment(){this.store.increment()}}};function $(t,u,i,_,p,e){return o(),s("div",null,[c(f,{onClick:e.increment,color:"primary"},{default:d(()=>[a(" + ")]),_:1},8,["onClick"])])}const h=r(x,[["render",$]]),k={setup(){return{store:n()}},computed:{count(){return this.store.count}}};function C(t,u,i,_,p,e){const m=h;return o(),s("div",null,[a(" nuxt "+l(e.count)+" ",1),c(m)])}const y=r(k,[["render",C]]);export{y as default};
