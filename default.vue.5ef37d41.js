import g from"./Icon.86d90590.js";import{u as C}from"./_commonjsHelpers.6253a115.js";import{_ as b}from"./Card.cd2020e4.js";import{k as v,o as a,a1 as B,w as s,a4 as c,c as u,a as p,t as l,b as d,a2 as _,d as f,ab as $}from"./entry.53c056df.js";const N={key:0,class:"flex justify-between items-center p-4"},S={class:"text-xl font-bold"},T={key:0,class:"flex justify-end items-center p-4"},F=v({__name:"default",props:{title:{type:String,default:""},hideHeader:{type:Boolean,default:!1},hideFooter:{type:Boolean,default:!1},okText:{type:String,default:"확인"},cancelText:{type:String,default:"취소"}},emits:["close","ok","cancel"],setup(e,{emit:t}){const r=e,o=$(),m=()=>{t("close"),o.$hideModal()},h=()=>{t("cancel"),o.$hideModal()},k=()=>{t("ok"),o.$hideModal()};return(n,V)=>{const x=g,i=C,y=b;return a(),B(y,{ui:{body:{padding:"p-0"}}},{default:s(()=>[c(n.$slots,"header",{},()=>[e.hideHeader?_("",!0):(a(),u("div",N,[p("div",S,l(e.title),1),p("div",null,[d(x,{class:"cursor-pointer",name:"ant-design:close-outlined",onClick:m})])]))]),c(n.$slots,"default"),c(n.$slots,"footer",{},()=>[e.hideFooter?_("",!0):(a(),u("div",T,[d(i,{onClick:h,variant:"ghost",color:"gray"},{default:s(()=>[f(l(r.cancelText),1)]),_:1}),d(i,{onClick:k,variant:"ghost",color:"primary"},{default:s(()=>[f(l(r.okText),1)]),_:1})]))])]),_:3})}}});export{F as _};