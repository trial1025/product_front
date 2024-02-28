import{_ as F,af as I,K as M,L as T,M as N,x as R,A as $,P as z,Q as D,c as e,S as a,ag as E,U as L,a2 as U,a6 as h,V,ah as j,Z as n,a1 as u,aa as d,a3 as l,X as c,a7 as O,a8 as J,a9 as K,J as Q,a4 as X,a5 as Z}from"./index-4a966991.js";import{_ as G}from"./user-a7f6648a.js";import{c as H,e as W,u as Y,d as ee,V as te}from"./index.esm-3898fa9e.js";import{V as ae}from"./VContainer-e5707eb0.js";import{V as x}from"./VRow-31edcf30.js";import{V as p}from"./VCol-bab0fbf3.js";import{V as se}from"./VDivider-c54ae779.js";const _=m=>(X("data-v-1bcdf12b"),m=m(),Z(),m),oe=_(()=>l("h3",null,"商品狀況",-1)),le=_(()=>l("h3",null,"商品描述",-1)),re={style:{"white-space":"pre"}},ue=_(()=>l("h4",null,"商品類別",-1)),ne=["loading"],ce=_(()=>l("h1",{class:"text-red text-h1"},"已下架",-1)),ie={__name:"ProductView",setup(m){const w=I(),f=M(),{api:S,apiAuth:C}=U(),v=T(),y=N(),t=R({_id:"",account:"",name:"",price:0,description:"",condition:"",image:"",sell:!0,category:"",createdAt:""}),q=()=>{f.push("/orderreq")},A=H({quantity:W().typeError("缺少數量").required("缺少數量").min(1,"數量最小為 1")}),{isSubmitting:b,handleSubmit:k}=Y({validationSchema:A,initialValues:{quantity:1}}),g=ee("quantity"),B=k(async i=>{var o,s;if(!y.isLogin){f.push("/login");return}try{const{data:r}=await C.patch("/users/cart",{product:t.value._id,quantity:i.quantity});y.cart=r.result,v({text:"新增成功",showCloseButton:!1,snackbarProps:{timeout:2e3,color:"green",location:"bottom"}})}catch(r){const P=((s=(o=r==null?void 0:r.response)==null?void 0:o.data)==null?void 0:s.message)||"發生錯誤，請稍後再試";v({text:P,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}});return $(async()=>{var i,o;try{const{data:s}=await S.get("/products/"+w.params.id);t.value._id=s.result._id,t.value.account=s.result.account,t.value.name=s.result.name,t.value.price=s.result.price,t.value.description=s.result.description,t.value.condition=s.result.condition,t.value.image=s.result.image,t.value.sell=s.result.sell,t.value.category=s.result.category,t.value.createdAt=new Date(s.result.createdAt).toLocaleString(),document.title=`購物網 | ${t.value.name}`}catch(s){const r=((o=(i=s==null?void 0:s.response)==null?void 0:i.data)==null?void 0:o.message)||"發生錯誤，請稍後再試";v({text:r,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}}),f.push("/")}}),(i,o)=>(z(),D(L,null,[e(ae,{class:"mt-6","d-flex":""},{default:a(()=>[e(x,{justify:"center"},{default:a(()=>[e(p,{md:"6"},{default:a(()=>[e(h,null,{default:a(()=>[e(V,{src:t.value.image,cover:"",style:{width:"95%",margin:"auto",borderRadius:"10px"}},null,8,["src"])]),_:1})]),_:1}),e(p,{md:"4"},{default:a(()=>[e(h,null,{default:a(()=>[e(j,{style:{"font-size":"x-large"}},{default:a(()=>[n(u(t.value.name),1)]),_:1}),e(d,{style:{color:"#E53935","font-size":"x-large","font-weight":"bolder"}},{default:a(()=>[n("NT$"+u(t.value.price),1)]),_:1}),e(se,{class:"mt-1"}),e(d,null,{default:a(()=>[oe,l("p",null,u(t.value.condition),1),le,l("p",re,u(t.value.description),1),ue,l("p",null,u(t.value.category),1),e(te,{disabled:c(b),onSubmit:O(c(B),["prevent"])},{default:a(()=>[e(J,{class:"my-3",type:"number",min:"0",modelValue:c(g).value.value,"onUpdate:modelValue":o[0]||(o[0]=s=>c(g).value.value=s),modelModifiers:{number:!0},"error-messages":c(g).errorMessage.value,variant:"outlined",label:"數量",required:"",density:"compact"},null,8,["modelValue","error-messages"]),l("button",{class:"btn-red",type:"submit",loading:c(b),onClick:q},"購買",8,ne)]),_:1},8,["disabled","onSubmit"])]),_:1})]),_:1}),e(h,{class:"mt-2"},{default:a(()=>[e(d,null,{default:a(()=>[n("賣家資訊")]),_:1}),e(x,null,{default:a(()=>[e(p,{cols:"2"},{default:a(()=>[e(K,{class:"mb-2 ml-3",size:"30"},{default:a(()=>[e(V,{src:G})]),_:1})]),_:1}),e(p,{cols:"10"},{default:a(()=>[e(d,{class:"py-1 m-0"},{default:a(()=>[n("@"+u(t.value.account),1)]),_:1})]),_:1})]),_:1}),e(d,null,{default:a(()=>[n("上架時間: "+u(t.value.createdAt),1)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(E,{class:"align-center justify-center text-center","model-value":!t.value.sell,persistent:""},{default:a(()=>[ce,e(Q,{to:"/",color:"green"},{default:a(()=>[n("回首頁")]),_:1})]),_:1},8,["model-value"])],64))}},he=F(ie,[["__scopeId","data-v-1bcdf12b"]]);export{he as default};
