import{p as T,at as k,bD as A,bo as S,g as K,D as I,ao as O,av as U,o as y,x as F,aQ as R,bE as g,s as G,ay as H,z as L,G as p,u as N,ag as b,c as V,r as $,aH as j,ac as z,bF as w,bG as Q,bH as E}from"./index-ca79e1a9.js";const q=T({id:String,...k(A({closeDelay:250,closeOnContentClick:!0,locationStrategy:"connected",openDelay:300,scrim:!1,scrollStrategy:"reposition",transition:{component:S}}),["absolute"])},"VMenu"),W=K()({name:"VMenu",props:q(),emits:{"update:modelValue":l=>!0},setup(l,P){let{slots:i}=P;const r=I(l,"modelValue"),{scopeId:x}=O(),D=U(),v=y(()=>l.id||`v-menu-${D}`),n=F(),a=R(g,null),c=G(0);H(g,{register(){++c.value},unregister(){--c.value},closeParents(){setTimeout(()=>{c.value||(r.value=!1,a==null||a.closeParents())},40)}});async function f(e){var s,u,d;const t=e.relatedTarget,o=e.target;await z(),r.value&&t!==o&&((s=n.value)!=null&&s.contentEl)&&((u=n.value)!=null&&u.globalTop)&&![document,n.value.contentEl].includes(o)&&!n.value.contentEl.contains(o)&&((d=w(n.value.contentEl)[0])==null||d.focus())}L(r,e=>{e?(a==null||a.register(),document.addEventListener("focusin",f,{once:!0})):(a==null||a.unregister(),document.removeEventListener("focusin",f))});function h(){a==null||a.closeParents()}function C(e){var t,o,s;l.disabled||e.key==="Tab"&&(Q(w((t=n.value)==null?void 0:t.contentEl,!1),e.shiftKey?"prev":"next",d=>d.tabIndex>=0)||(r.value=!1,(s=(o=n.value)==null?void 0:o.activatorEl)==null||s.focus()))}function m(e){var o;if(l.disabled)return;const t=(o=n.value)==null?void 0:o.contentEl;t&&r.value?e.key==="ArrowDown"?(e.preventDefault(),E(t,"next")):e.key==="ArrowUp"&&(e.preventDefault(),E(t,"prev")):["ArrowDown","ArrowUp"].includes(e.key)&&(r.value=!0,e.preventDefault(),setTimeout(()=>setTimeout(()=>m(e))))}const M=y(()=>p({"aria-haspopup":"menu","aria-expanded":String(r.value),"aria-owns":v.value,onKeydown:m},l.activatorProps));return N(()=>{const e=b.filterProps(l);return V(b,p({ref:n,class:["v-menu",l.class],style:l.style},e,{modelValue:r.value,"onUpdate:modelValue":t=>r.value=t,absolute:!0,activatorProps:M.value,"onClick:outside":h,onKeydown:C},x),{activator:i.activator,default:function(){for(var t=arguments.length,o=new Array(t),s=0;s<t;s++)o[s]=arguments[s];return V($,{root:"VMenu"},{default:()=>{var u;return[(u=i.default)==null?void 0:u.call(i,...o)]}})}})}),j({id:v,ΨopenChildren:c},n)}});export{W as V};
