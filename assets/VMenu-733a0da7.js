import{p as T,aV as k,bX as A,bI as S,g as I,D as K,aR as O,aX as R,o as b,x as U,bc as $,bY as p,s as F,a_ as L,z as N,G as y,u as X,ap as g,c as V,r as j,b5 as z,al as G,bZ as w,b_ as Y,b$ as P}from"./index-1ba776c2.js";const Z=T({id:String,...k(A({closeDelay:250,closeOnContentClick:!0,locationStrategy:"connected",openDelay:300,scrim:!1,scrollStrategy:"reposition",transition:{component:S}}),["absolute"])},"VMenu"),H=I()({name:"VMenu",props:Z(),emits:{"update:modelValue":l=>!0},setup(l,E){let{slots:i}=E;const r=K(l,"modelValue"),{scopeId:x}=O(),D=R(),v=b(()=>l.id||`v-menu-${D}`),n=U(),a=$(p,null),c=F(0);L(p,{register(){++c.value},unregister(){--c.value},closeParents(){setTimeout(()=>{c.value||(r.value=!1,a==null||a.closeParents())},40)}});async function f(e){var s,u,d;const t=e.relatedTarget,o=e.target;await G(),r.value&&t!==o&&((s=n.value)!=null&&s.contentEl)&&((u=n.value)!=null&&u.globalTop)&&![document,n.value.contentEl].includes(o)&&!n.value.contentEl.contains(o)&&((d=w(n.value.contentEl)[0])==null||d.focus())}N(r,e=>{e?(a==null||a.register(),document.addEventListener("focusin",f,{once:!0})):(a==null||a.unregister(),document.removeEventListener("focusin",f))});function h(){a==null||a.closeParents()}function C(e){var t,o,s;l.disabled||e.key==="Tab"&&(Y(w((t=n.value)==null?void 0:t.contentEl,!1),e.shiftKey?"prev":"next",d=>d.tabIndex>=0)||(r.value=!1,(s=(o=n.value)==null?void 0:o.activatorEl)==null||s.focus()))}function m(e){var o;if(l.disabled)return;const t=(o=n.value)==null?void 0:o.contentEl;t&&r.value?e.key==="ArrowDown"?(e.preventDefault(),P(t,"next")):e.key==="ArrowUp"&&(e.preventDefault(),P(t,"prev")):["ArrowDown","ArrowUp"].includes(e.key)&&(r.value=!0,e.preventDefault(),setTimeout(()=>setTimeout(()=>m(e))))}const M=b(()=>y({"aria-haspopup":"menu","aria-expanded":String(r.value),"aria-owns":v.value,onKeydown:m},l.activatorProps));return X(()=>{const e=g.filterProps(l);return V(g,y({ref:n,class:["v-menu",l.class],style:l.style},e,{modelValue:r.value,"onUpdate:modelValue":t=>r.value=t,absolute:!0,activatorProps:M.value,"onClick:outside":h,onKeydown:C},x),{activator:i.activator,default:function(){for(var t=arguments.length,o=new Array(t),s=0;s<t;s++)o[s]=arguments[s];return V(j,{root:"VMenu"},{default:()=>{var u;return[(u=i.default)==null?void 0:u.call(i,...o)]}})}})}),z({id:v,ΨopenChildren:c},n)}});export{H as V};
