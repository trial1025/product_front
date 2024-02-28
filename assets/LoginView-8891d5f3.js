import{_ as S,K as k,L as B,M as C,P as F,R as I,S as a,a2 as L,c as e,a6 as M,X as t,a7 as A,a8 as m,J as N,Z as P,a4 as R,a5 as U,a3 as j}from"./index-4a966991.js";import{_ as q}from"./login3-970f23e1.js";import{c as T,a as p,u as $,d as _,V as J}from"./index.esm-3898fa9e.js";import{V as K}from"./VContainer-e5707eb0.js";import{V as u}from"./VCol-bab0fbf3.js";import{V as f}from"./VRow-31edcf30.js";const X=l=>(R("data-v-6e7f2fd3"),l=l(),U(),l),Z=X(()=>j("h1",{class:"text-center mt-6"},"sign in",-1)),z={__name:"LoginView",setup(l){const{api:g}=L(),h=k(),d=B(),V=C(),v=T({account:p().required("帳號為必填欄位").min(4,"使用者帳號長度不符").max(20,"使用者帳號長度不符"),password:p().required("密碼為必填欄位").min(4,"密碼長度不符").max(20,"密碼長度不符")}),{handleSubmit:w,isSubmitting:b}=$({validationSchema:v}),n=_("account"),c=_("password"),x=w(async i=>{var o,s;try{const{data:r}=await g.post("/users/login",{account:i.account,password:i.password});V.login(r.result),d({text:"登入成功",showCloseButton:!1,snackbarProps:{timeout:2e3,color:"green",location:"bottom"}}),h.push("/")}catch(r){console.log(r);const y=((s=(o=r==null?void 0:r.response)==null?void 0:o.data)==null?void 0:s.message)||"發生錯誤，請稍後再試";d({text:y,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}});return(i,o)=>(F(),I(K,{class:"d-flex"},{default:a(()=>[e(f,{justify:"center",align:"center",style:{height:"80vh"}},{default:a(()=>[e(u,{cols:"4"},{default:a(()=>[e(M,{class:"pa-5",elevation:"10",style:{height:"80vh"},rounded:"xl",image:q,theme:"dark"},{default:a(()=>[Z,e(u,{cols:"12"},{default:a(()=>[e(J,{class:"my-6",disabled:t(b),onSubmit:A(t(x),["prevent"])},{default:a(()=>[e(m,{variant:"outlined","hide-details":"auto",label:"帳號",color:"#2A5264",density:"compact",minlength:"4",maxlength:"20",counter:"",modelValue:t(n).value.value,"onUpdate:modelValue":o[0]||(o[0]=s=>t(n).value.value=s),"error-messages":t(n).errorMessage.value,"bg-color":"white"},null,8,["modelValue","error-messages"]),e(m,{variant:"outlined","hide-details":"auto",color:"#2A5264",density:"compact",label:"密碼",type:"password",minlength:"4",maxlength:"20",counter:"",modelValue:t(c).value.value,"onUpdate:modelValue":o[1]||(o[1]=s=>t(c).value.value=s),"error-messages":t(c).errorMessage.value,"bg-color":"white"},null,8,["modelValue","error-messages"]),e(f,{class:"justify-center my-2"},{default:a(()=>[e(u,{cols:"auto"},{default:a(()=>[e(N,{type:"submit",elevation:"1",color:"red-darken-1"},{default:a(()=>[P("login")]),_:1})]),_:1})]),_:1})]),_:1},8,["disabled","onSubmit"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}},W=S(z,[["__scopeId","data-v-6e7f2fd3"]]);export{W as default};
