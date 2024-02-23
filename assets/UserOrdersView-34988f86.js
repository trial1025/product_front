import{Y as f,x as k,A as y,a1 as l,a3 as V,a4 as t,ac as h,c as o,a9 as b,ab as c,af as d,a2 as i,a7 as w,a6 as x}from"./index-1ba776c2.js";import{V as A}from"./VContainer-d84e619b.js";import{V as u,a as g}from"./VRow-598343f9.js";import{V as B}from"./VDataTable-70891b43.js";import"./VList-9ef00251.js";import"./VListItem-e2e77de5.js";import"./VDivider-42de4992.js";import"./VMenu-733a0da7.js";const C=d("h1",null,"訂單管理",-1),M={__name:"UserOrdersView",setup(v){const{apiAuth:m}=h(),p=f(),n=k([]),_=[{title:"訂單編號",key:"_id"},{title:"帳號",key:"user.account"},{title:"日期",key:"createdAt"},{title:"商品",key:"cart",sortable:!1},{title:"金額",key:"price",value:a=>a.cart.reduce((r,e)=>r+e.quantity*e.product.price,0)}];return y(async()=>{var a,r;try{const{data:e}=await m.get("/orders/all");n.value.push(...e.result)}catch(e){const s=((r=(a=e==null?void 0:e.response)==null?void 0:a.data)==null?void 0:r.message)||"發生錯誤，請稍後再試";p({text:s,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}}),(a,r)=>(l(),V(A,null,{default:t(()=>[o(g,null,{default:t(()=>[o(u,{cols:"12"},{default:t(()=>[C]),_:1}),o(u,{cols:"12"},{default:t(()=>[o(B,{items:n.value,headers:_},{"item.createdAt":t(({item:e})=>[b(c(new Date(e.createdAt).toLocaleString()),1)]),"item.cart":t(({item:e})=>[d("ul",null,[(l(!0),i(x,null,w(e.cart,s=>(l(),i("li",{key:s._id},c(s.product.name)+" * "+c(s.quantity),1))),128))])]),_:2},1032,["items"])]),_:1})]),_:1})]),_:1}))}};export{M as default};
