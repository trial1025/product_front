import{p as T,aK as k,bJ as A,bu as K,g as S,D as I,aF as O,aM as U,o as y,x as F,ah as L,bK as g,s as N,aa as R,z as $,G as p,u as j,aw as b,c as V,r as z,aV as G,am as J,bL as w,bM as q,bN as P}from"./index-eaf8c9cf.js";const B=T({id:String,...k(A({closeDelay:250,closeOnContentClick:!0,locationStrategy:"connected",openDelay:300,scrim:!1,scrollStrategy:"reposition",transition:{component:K}}),["absolute"])},"VMenu"),W=S()({name:"VMenu",props:B(),emits:{"update:modelValue":l=>!0},setup(l,E){let{slots:i}=E;const u=I(l,"modelValue"),{scopeId:x}=O(),h=U(),v=y(()=>l.id||`v-menu-${h}`),n=F(),a=L(g,null),c=N(0);R(g,{register(){++c.value},unregister(){--c.value},closeParents(){setTimeout(()=>{c.value||(u.value=!1,a==null||a.closeParents())},40)}});async function f(e){var s,r,d;const t=e.relatedTarget,o=e.target;await J(),u.value&&t!==o&&((s=n.value)!=null&&s.contentEl)&&((r=n.value)!=null&&r.globalTop)&&![document,n.value.contentEl].includes(o)&&!n.value.contentEl.contains(o)&&((d=w(n.value.contentEl)[0])==null||d.focus())}$(u,e=>{e?(a==null||a.register(),document.addEventListener("focusin",f,{once:!0})):(a==null||a.unregister(),document.removeEventListener("focusin",f))});function D(){a==null||a.closeParents()}function M(e){var t,o,s;l.disabled||e.key==="Tab"&&(q(w((t=n.value)==null?void 0:t.contentEl,!1),e.shiftKey?"prev":"next",d=>d.tabIndex>=0)||(u.value=!1,(s=(o=n.value)==null?void 0:o.activatorEl)==null||s.focus()))}function m(e){var o;if(l.disabled)return;const t=(o=n.value)==null?void 0:o.contentEl;t&&u.value?e.key==="ArrowDown"?(e.preventDefault(),P(t,"next")):e.key==="ArrowUp"&&(e.preventDefault(),P(t,"prev")):["ArrowDown","ArrowUp"].includes(e.key)&&(u.value=!0,e.preventDefault(),setTimeout(()=>setTimeout(()=>m(e))))}const C=y(()=>p({"aria-haspopup":"menu","aria-expanded":String(u.value),"aria-owns":v.value,onKeydown:m},l.activatorProps));return j(()=>{const e=b.filterProps(l);return V(b,p({ref:n,class:["v-menu",l.class],style:l.style},e,{modelValue:u.value,"onUpdate:modelValue":t=>u.value=t,absolute:!0,activatorProps:C.value,"onClick:outside":D,onKeydown:M},x),{activator:i.activator,default:function(){for(var t=arguments.length,o=new Array(t),s=0;s<t;s++)o[s]=arguments[s];return V(z,{root:"VMenu"},{default:()=>{var r;return[(r=i.default)==null?void 0:r.call(i,...o)]}})}})}),G({id:v,ΨopenChildren:c},n)}});export{W as V};