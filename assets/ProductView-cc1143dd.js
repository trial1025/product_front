import{_ as P,av as I,L as N,M as R,N as $,x as F,A as T,Q as z,R as D,c as e,T as a,aw as E,W as L,a6 as M,ao as v,V,au as c,$ as n,a1 as r,a5 as o,Y as h,ar as j,at as O,J,a3 as Q,a4 as U}from"./index-197d9177.js";import{_ as W}from"./user-a7f6648a.js";import{c as Y,e as G,u as H,d as K,V as X}from"./index.esm-a4d5c9b3.js";import{V as Z,a as m}from"./VCol-51a39ae5.js";import{V as b}from"./VRow-6f4481b0.js";import{V as ee}from"./VDivider-bb5790d4.js";const _=d=>(Q("data-v-1351a058"),d=d(),U(),d),te=_(()=>o("h3",null,"商品狀況",-1)),ae=_(()=>o("h3",null,"商品描述",-1)),se={style:{"white-space":"pre"}},oe=_(()=>o("h4",null,"商品類別",-1)),le=["loading"],re=_(()=>o("h1",{class:"text-red text-h1"},"已下架",-1)),ue={__name:"ProductView",setup(d){const w=I(),p=N(),{api:x,apiAuth:S}=M(),f=R(),g=$(),t=F({_id:"",account:"",name:"",price:0,description:"",condition:"",image:"",sell:!0,category:"",createdAt:""}),C=()=>{p.push("/orderreq")},A=Y({quantity:G().typeError("缺少數量").required("缺少數量").min(1,"數量最小為 1")}),{isSubmitting:y,handleSubmit:k}=H({validationSchema:A,initialValues:{quantity:1}});K("quantity");const q=k(async i=>{var u,s;if(!g.isLogin){p.push("/login");return}try{const{data:l}=await S.patch("/users/cart",{product:t.value._id,quantity:i.quantity});g.cart=l.result,f({text:"新增成功",showCloseButton:!1,snackbarProps:{timeout:2e3,color:"green",location:"bottom"}})}catch(l){const B=((s=(u=l==null?void 0:l.response)==null?void 0:u.data)==null?void 0:s.message)||"發生錯誤，請稍後再試";f({text:B,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}});return T(async()=>{var i,u;try{const{data:s}=await x.get("/products/"+w.params.id);t.value._id=s.result._id,t.value.account=s.result.account,t.value.name=s.result.name,t.value.price=s.result.price,t.value.description=s.result.description,t.value.condition=s.result.condition,t.value.image=s.result.image,t.value.sell=s.result.sell,t.value.category=s.result.category,t.value.createdAt=new Date(s.result.createdAt).toLocaleString(),document.title=`購物網 | ${t.value.name}`}catch(s){const l=((u=(i=s==null?void 0:s.response)==null?void 0:i.data)==null?void 0:u.message)||"發生錯誤，請稍後再試";f({text:l,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}}),p.push("/")}}),(i,u)=>(z(),D(L,null,[e(Z,{class:"mt-6","d-flex":""},{default:a(()=>[e(b,{justify:"center"},{default:a(()=>[e(m,{md:"6",sm:"10"},{default:a(()=>[e(v,null,{default:a(()=>[e(V,{src:t.value.image,cover:"",style:{width:"95%",margin:"auto",borderRadius:"10px"}},null,8,["src"])]),_:1})]),_:1}),e(m,{md:"4",sm:"10"},{default:a(()=>[e(v,null,{default:a(()=>[e(c,{class:"product-name",style:{"font-size":"large"}},{default:a(()=>[n(r(t.value.name),1)]),_:1}),e(c,{style:{color:"#E53935","font-size":"x-large","font-weight":"bolder"}},{default:a(()=>[n("NT$"+r(t.value.price),1)]),_:1}),e(ee,{class:"mt-1"}),e(c,null,{default:a(()=>[te,o("p",null,r(t.value.condition),1),ae,o("p",se,r(t.value.description),1),oe,o("p",null,r(t.value.category),1),e(X,{disabled:h(y),onSubmit:j(h(q),["prevent"])},{default:a(()=>[o("button",{class:"btn-red",type:"submit",loading:h(y),onClick:C},"購買",8,le)]),_:1},8,["disabled","onSubmit"])]),_:1})]),_:1}),e(v,{class:"mt-2"},{default:a(()=>[e(c,null,{default:a(()=>[n("賣家資訊")]),_:1}),e(b,null,{default:a(()=>[e(m,{cols:"2"},{default:a(()=>[e(O,{class:"mb-2 ml-3",size:"30"},{default:a(()=>[e(V,{src:W})]),_:1})]),_:1}),e(m,{cols:"10"},{default:a(()=>[e(c,{class:"py-1 m-0"},{default:a(()=>[n("@"+r(t.value.account),1)]),_:1})]),_:1})]),_:1}),e(c,null,{default:a(()=>[n("上架時間: "+r(t.value.createdAt),1)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(E,{class:"align-center justify-center text-center","model-value":!t.value.sell,persistent:""},{default:a(()=>[re,e(J,{to:"/",color:"green"},{default:a(()=>[n("回首頁")]),_:1})]),_:1},8,["model-value"])],64))}},pe=P(ue,[["__scopeId","data-v-1351a058"]]);export{pe as default};