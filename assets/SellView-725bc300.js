import{N as g,M as h,x as u,A as x,am as P,Q as c,S as i,T as t,a6 as k,c as e,R as w,X as v,W as B,a5 as C,ap as b,aq as y}from"./index-71158f2c.js";import{P as S}from"./ProductCard-596f121c.js";import{V as A,a as l}from"./VCol-784b7480.js";import{V as N}from"./VDivider-a357f24b.js";import{V as m}from"./VRow-011ac4ad.js";import"./user-a7f6648a.js";const R=C("h2",null,"商品列表",-1),E={__name:"SellView",setup(M){const d=g(),{apiAuth:p}=k(),f=h(),n=u([]),_=u({account:d.account});return x(async()=>{var s,o;try{const{data:a}=await p.get("/products",{params:{itemsPerPage:-1}}),r=a.result.data.filter(V=>V.account!==_.value.account);n.value.push(...r),await P()}catch(a){console.log(a);const r=((o=(s=a==null?void 0:a.response)==null?void 0:s.data)==null?void 0:o.message)||"發生錯誤，請稍後再試";f({text:r,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}}),(s,o)=>(c(),i(A,null,{default:t(()=>[e(m,{justify:"center","align-item-center":""},{default:t(()=>[e(l,{cols:"10"},{default:t(()=>[R]),_:1}),e(N),e(l,{cols:"12",lg:"10",xl:"10"},{default:t(()=>[e(m,null,{default:t(()=>[(c(!0),w(B,null,v(n.value,a=>(c(),i(l,{class:"mb-4",key:a._id,cols:"12",sm:"6",md:"4",lg:"3",xl:"2"},{default:t(()=>[e(S,b(y(a)),null,16)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})]),_:1}))}};export{E as default};
