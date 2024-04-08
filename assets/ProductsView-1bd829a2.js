import{M as ae,L as le,x as n,O as te,P as H,Q as oe,c as l,S as r,ay as se,U as re,a2 as ne,J as g,Z as A,ap as q,az as ue,V as ie,R as de,T as ce,X as t,ao as me,ak as ve,aw as pe,a1 as ge,at as be,ax as Ve,$ as fe,al as ye,Y as ke}from"./index-d1492d82.js";import{c as xe,a as b,e as we,f as Ce,u as Se,d,V as Ue}from"./index.esm-3efa0ddc.js";import{V as Be}from"./VContainer-fcfd6e63.js";import{V as J}from"./VRow-cf36335f.js";import{V}from"./VCol-961f2169.js";import{V as Pe}from"./VDivider-e0f0713b.js";import{V as Me,a as Fe,b as Ae}from"./VTextarea-f7c2ac51.js";import{a as R}from"./VDataTable-11bba87a.js";import"./VList-d895f2bf.js";import"./VListItem-682623aa.js";import"./ssrBoot-5491e99c.js";import"./VMenu-0477ba30.js";const he=ye("h1",{class:"text-center"},"商品管理",-1),je={__name:"ProductsView",setup($e){const Q=ae(),{apiAuth:f}=ne(),p=le(),L=n(null),y=n(!1),i=n(""),N=o=>{o?(i.value=o._id,k.value.value=o.name,x.value.value=o.price,w.value.value=o.description,C.value.value=o.category,S.value.value=o.subs,U.value.value=o.condition,B.value.value=o.sell):i.value="",y.value=!0},z=()=>{y.value=!1,Z(),L.value.deleteFileRecord()},_=["反曲弓","複合弓","傳統弓","周邊商品","其他"],E=["弓身","弓臂","瞄準器","安定桿","箭","護具","配件","其他"],K=["全新","幾乎全新","狀況良好","輕度使用","狀況尚可","狀況差"],X=xe({name:b().required("缺少商品名稱"),price:we().typeError("商品價格格式錯誤").required("缺少商品價格").min(0,"商品價格不能小於 0"),description:b().required("缺少商品說明"),category:b().required("缺少商品分類").test("isCategory","商品分類錯誤",o=>_.includes(o)),subs:b().required("缺少商品子分類").test("isSubs","商品子分類錯誤",o=>E.includes(o)),condition:b().required("缺少商品狀況").test("isCondition","商品狀況錯誤",o=>K.includes(o)),sell:Ce()}),{handleSubmit:Y,isSubmitting:h,resetForm:Z}=Se({validationSchema:X,initialValues:{account:Q.account,name:"",price:0,description:"",category:"",subs:"",condition:"",sell:!1}}),k=d("name"),x=d("price"),w=d("description"),C=d("category"),S=d("subs"),U=d("condition"),B=d("sell"),c=n([]),O=n([]),G=Y(async o=>{var a,u,e;if(!((a=c.value[0])!=null&&a.error)&&!(i.value===""&&c.value.length===0))try{const s=new FormData;for(const v in o)s.append(v,o[v]);c.value.length>0&&s.append("image",c.value[0].file),i.value===""?await f.post("/products",s):await f.patch("/products/"+i.value,s),p({text:i.value===""?"新增成功":"編輯成功",showCloseButton:!1,snackbarProps:{timeout:2e3,color:"green",location:"bottom"}}),z(),T()}catch(s){console.log(s);const v=((e=(u=s==null?void 0:s.response)==null?void 0:u.data)==null?void 0:e.message)||"發生錯誤，請稍後再試";p({text:v,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}}),$=n(10),P=n([{key:"createdAt",order:"desc"}]),M=n(1),D=n([]),W=[{title:"帳號",align:"center",sortable:!1,key:"account"},{title:"名稱",align:"center",sortable:!0,key:"name"},{title:"圖片",align:"center",sortable:!1,key:"image"},{title:"價格",align:"center",sortable:!0,key:"price"},{title:"分類",align:"center",sortable:!0,key:"category"},{title:"子分類",align:"center",sortable:!0,key:"subs"},{title:"商品狀況",align:"center",sortable:!0,key:"condition"},{title:"上架",align:"center",sortable:!0,key:"sell"},{title:"編輯",align:"center",sortable:!1,key:"edit"}],I=n(!0),j=n(0),F=n(""),m=async()=>{var o,a,u,e;I.value=!0;try{const{data:s}=await f.get("/products",{params:{page:M.value,itemsPerPage:$.value,sortBy:((o=P.value[0])==null?void 0:o.key)||"createdAt",sortOrder:((a=P.value[0])==null?void 0:a.order)==="asc"?1:-1,search:F.value}});D.value.splice(0,D.value.length,...s.result.data),j.value=s.result.total}catch(s){console.log(s);const v=((e=(u=s==null?void 0:s.response)==null?void 0:u.data)==null?void 0:e.message)||"發生錯誤，請稍後再試";p({text:v,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}I.value=!1};m();const T=()=>{M.value=1,m()},ee=async o=>{var a,u;try{await f.delete("/products/"+o),p({text:"刪除成功",showCloseButton:!1,snackbarProps:{timeout:2e3,color:"green",location:"bottom"}}),m()}catch(e){const s=((u=(a=e==null?void 0:e.response)==null?void 0:a.data)==null?void 0:u.message)||"發生錯誤，請稍後再試";p({text:s,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}};return(o,a)=>{const u=te("VueFileAgent");return H(),oe(re,null,[l(Be,null,{default:r(()=>[l(J,null,{default:r(()=>[l(V,{cols:"12"},{default:r(()=>[he]),_:1}),l(Pe),l(V,{cols:"12"},{default:r(()=>[l(g,{color:"green",onClick:a[0]||(a[0]=e=>N())},{default:r(()=>[A("新增商品")]),_:1})]),_:1}),l(V,{cols:"12"},{default:r(()=>[l(Me,{"items-per-page":$.value,"onUpdate:itemsPerPage":[a[2]||(a[2]=e=>$.value=e),m],"sort-by":P.value,"onUpdate:sortBy":[a[3]||(a[3]=e=>P.value=e),m],page:M.value,"onUpdate:page":[a[4]||(a[4]=e=>M.value=e),m],items:D.value,headers:W,loading:I.value,"items-length":j.value,search:F.value,hover:""},{top:r(()=>[l(q,{label:"搜尋","append-icon":"mdi-magnify",modelValue:F.value,"onUpdate:modelValue":a[1]||(a[1]=e=>F.value=e),"onClick:append":T,onKeydown:ue(T,["enter"])},null,8,["modelValue"])]),"item.image":r(({item:e})=>[l(ie,{src:e.image,height:"50px"},null,8,["src"])]),"item.sell":r(({item:e})=>[e.sell?(H(),de(ke,{key:0,icon:"mdi-check"})):ce("",!0)]),"item.edit":r(({item:e})=>[l(g,{icon:"mdi-pencil",variant:"text",color:"green",onClick:s=>N(e)},null,8,["onClick"]),l(g,{icon:"mdi-delete",variant:"text",color:"red",onClick:s=>ee(e._id)},null,8,["onClick"])]),_:2},1032,["items-per-page","sort-by","page","items","loading","items-length","search"])]),_:1})]),_:1})]),_:1}),l(se,{modelValue:y.value,"onUpdate:modelValue":a[14]||(a[14]=e=>y.value=e),persistent:"",width:"500px"},{default:r(()=>[l(Ue,{disabled:t(h),onSubmit:me(t(G),["prevent"])},{default:r(()=>[l(ve,{evevation:"8","max-width":"448",rounded:"lg"},{default:r(()=>[l(pe,null,{default:r(()=>[A(ge(i.value===""?"新增商品":"編輯商品"),1)]),_:1}),l(be,null,{default:r(()=>[l(J,null,{default:r(()=>[l(V,{cols:"6"},{default:r(()=>[l(R,{col:"6",clearable:"",label:"分類",density:"compact",variant:"outlined",items:_,modelValue:t(C).value.value,"onUpdate:modelValue":a[5]||(a[5]=e=>t(C).value.value=e),"error-messages":t(C).errorMessage.value},null,8,["modelValue","error-messages"])]),_:1}),l(V,{cols:"6"},{default:r(()=>[l(R,{col:"6",clearable:"",label:"子分類",density:"compact",variant:"outlined",items:E,modelValue:t(S).value.value,"onUpdate:modelValue":a[6]||(a[6]=e=>t(S).value.value=e),"error-messages":t(S).errorMessage.value},null,8,["modelValue","error-messages"])]),_:1})]),_:1}),l(q,{clearable:"",label:"名稱",density:"compact",variant:"outlined",modelValue:t(k).value.value,"onUpdate:modelValue":a[7]||(a[7]=e=>t(k).value.value=e),"error-messages":t(k).errorMessage.value},null,8,["modelValue","error-messages"]),l(R,{clearable:"",label:"商品狀況",variant:"outlined",density:"compact",items:K,modelValue:t(U).value.value,"onUpdate:modelValue":a[8]||(a[8]=e=>t(U).value.value=e),"error-messages":t(U).errorMessage.value},null,8,["modelValue","error-messages"]),l(q,{clearable:"",label:"價格",variant:"outlined",density:"compact",prefix:"$",type:"number",min:"0",modelValue:t(x).value.value,"onUpdate:modelValue":a[9]||(a[9]=e=>t(x).value.value=e),"error-messages":t(x).errorMessage.value},null,8,["modelValue","error-messages"]),l(Fe,{clearable:"",label:"說明",variant:"outlined",density:"compact",rows:"3",modelValue:t(w).value.value,"onUpdate:modelValue":a[10]||(a[10]=e=>t(w).value.value=e),"error-messages":t(w).errorMessage.value},null,8,["modelValue","error-messages"]),l(u,{modelValue:c.value,"onUpdate:modelValue":a[11]||(a[11]=e=>c.value=e),rawModelValue:O.value,"onUpdate:rawModelValue":a[12]||(a[12]=e=>O.value=e),accept:"image/jpeg,image/png",deletable:"","error-text":{type:"檔案格式不支援",size:"檔案超過 1MB 大小限制"},"help-text":"選擇檔案或拖曳到這裡","max-files":1,"max-size":"1MB",ref_key:"fileAgent",ref:L},null,8,["modelValue","rawModelValue"]),l(Ae,{label:"上架",modelValue:t(B).value.value,"onUpdate:modelValue":a[13]||(a[13]=e=>t(B).value.value=e),"error-messages":t(B).errorMessage.value,density:"compact"},null,8,["modelValue","error-messages"])]),_:1}),l(Ve,null,{default:r(()=>[l(fe),l(g,{color:"red",disabled:t(h),onClick:z},{default:r(()=>[A("取消")]),_:1},8,["disabled"]),l(g,{color:"green",type:"submit",loading:t(h)},{default:r(()=>[A("刊登")]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1},8,["disabled","onSubmit"])]),_:1},8,["modelValue"])],64)}}};export{je as default};
