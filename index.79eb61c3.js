import{f as n,_ as o,c as s,t as c,o as r}from"./entry.53c056df.js";const u=n("counter",{state:()=>({count:0}),actions:{increment(){this.count++},decrease(){this.count--}}}),a={setup(){return{store:u()}},computed:{count(){return this.store.count}}};function i(t,p,d,_,f,e){return r(),s("div",null," nuxt "+c(e.count),1)}const m=o(a,[["render",i]]);export{m as default};