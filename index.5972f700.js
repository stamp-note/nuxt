import{r as b,o as n,c as a,a as _,t as x,g as i,_ as r,h as u,b as s,w as m,f as $,i as w,j as y,k as l,l as p}from"./entry.42847024.js";import{_ as v,a as S}from"./ThemeBtn.vue.43536a1d.js";import f from"./Icon.3a801a6c.js";const k={id:"storeName"},N={__name:"StoreName",setup(c){const o=b("Macko's Cafe에 오신것을 환영합니다.");return(e,t)=>(n(),a("div",null,[_("h1",k,x(i(o)),1)]))}};const M={},V=u('<section data-v-96e87ec3><div class="storeBankInfo" data-v-96e87ec3><p class="bankName" data-v-96e87ec3> 신한은행 </p><p class="bankDepositor" data-v-96e87ec3> 홍길동 </p><p class="bankAccountNum" data-v-96e87ec3> 110-123-123123 </p></div><div class="storeAddressInfo" data-v-96e87ec3><p class="address" data-v-96e87ec3> 서울특별시 강남구 테헤란로 152 강남파이낸스센터 </p><p class="addressDesc" data-v-96e87ec3> 건물 들어오셔서 오른쪽 엘레베이터 타시고 n층으로 오시면 됩니다. </p></div><div class="storeParkingInfo" data-v-96e87ec3><p class="parkingDesc" data-v-96e87ec3> 주차는 건물 지하에 하시면 됩니다. </p></div></section>',1),C=[V];function A(c,o){return n(),a("div",null,C)}const I=r(M,[["render",A],["__scopeId","data-v-96e87ec3"]]);const D={},B=u('<section data-v-8f64b982><div class="storeOperHours" data-v-8f64b982><p class="operDay" data-v-8f64b982> 월, 화, 수, 목, 금 </p><p class="operHours" data-v-8f64b982> 10:00 ~ 22:00 </p></div><div class="storeOperHours storeOperHours2" data-v-8f64b982><p class="operDay" data-v-8f64b982> 토, 일 </p><p class="operHours" data-v-8f64b982> 08:00 ~ 22:00 </p></div><div class="storeClosedDay" data-v-8f64b982><p class="closeDay" data-v-8f64b982> 연중무휴 </p></div></section>',1),H=[B];function z(c,o){return n(),a("div",null,H)}const P=r(D,[["render",z],["__scopeId","data-v-8f64b982"]]),O={};function W(c,o){const e=N,t=I,d=P;return n(),a("div",null,[s(e),s(t),s(d)])}const j=r(O,[["render",W]]),E={};function T(c,o){const e=f,t=v;return n(),a("div",null,[s(t,{size:"md",ui:{background:"bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 cursor-pointer"}},{default:m(()=>[s(e,{name:"wpf:statistics",size:"20"})]),_:1})])}const q=r(E,[["render",T]]),F={};function G(c,o){const e=f,t=v;return n(),a("div",null,[s(t,{size:"md",ui:{background:"bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 cursor-pointer"}},{default:m(()=>[s(e,{name:"mdi:gear",size:"20"})]),_:1})])}const J=r(F,[["render",G]]),K={},L={class:"relative w-full h-full flex"},Q=_("div",{class:"m-auto"}," 어드민 페이지 입니다. ",-1),R={class:"absolute bottom-3 right-3 flex gap-2"};function U(c,o){const e=q,t=J;return n(),a("div",L,[Q,_("div",R,[s(e),s(t)])])}const X=r(K,[["render",U]]),Y=$({id:"main",state:()=>({options:[{label:"Customer & Admin"},{label:"Admin"},{label:"Customer"}],viewMode:"Customer & Admin"}),getters:{},actions:{setViewMode(c){this.viewMode=c,this.saveViewMode()},loadViewMode(){this.viewMode=localStorage.getItem("viewMode")||"Customer & Admin"},saveViewMode(){localStorage.setItem("viewMode",this.viewMode)}}}),Z={class:"h-full"},ee={class:"absolute top-2 right-2 z-10 flex gap-2"},te={class:"flex gap-2 h-full"},se={key:0,class:"flex-1 flex"},oe={key:1,class:"flex-1 flex"},ne=w({__name:"View",setup(c){const o=Y();o.loadViewMode();const e=y(()=>o.viewMode);return(t,d)=>{const h=S,g=X;return n(),a("div",Z,[l(t.$slots,"top-right",{},()=>[_("div",ee,[s(h)])]),l(t.$slots,"default",{},()=>[_("div",te,[i(e).startsWith("Customer")?(n(),a("div",se)):p("",!0),i(e).endsWith("Admin")?(n(),a("div",oe,[s(g)])):p("",!0)])])])}}}),ae={},ce={class:"grid grid-cols-10 gap-1 min-h-[inherit]"},_e={class:"col-span-3"},re={class:"m-3"},ie={class:"col-span-7 border-l-2"};function de(c,o){const e=j,t=ne;return n(),a("div",ce,[_("div",_e,[_("div",re,[s(e)])]),_("div",ie,[s(t)])])}const me=r(ae,[["render",de]]);export{me as default};
