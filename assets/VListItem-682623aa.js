import{ad as I,s as C,a6 as V,bR as w,x as b,p as K,D as T,o as f,B as $,bp as ve,aL as fe,bS as q,a9 as G,bd as x,b as me,m as ye,b3 as ge,bo as pe,d as Se,e as he,be,a as ke,f as we,bc as Ae,g as Pe,b5 as Ce,bi as Ie,z as Ve,l as Me,i as Le,bg as Oe,b7 as Be,bq as De,j as _e,k as Ne,u as Re,bT as je,a7 as Te,a8 as Ge,c as m,bj as xe,U as E,as as F,Y as U,r as H}from"./index-d1492d82.js";const O=Symbol.for("vuetify:list");function We(){const e=I(O,{hasPrepend:C(!1),updateHasPrepend:()=>null}),r={hasPrepend:C(!1),updateHasPrepend:l=>{l&&(r.hasPrepend.value=l)}};return V(O,r),e}function Ee(){return I(O,null)}const Fe={open:e=>{let{id:r,value:l,opened:t,parents:a}=e;if(l){const n=new Set;n.add(r);let s=a.get(r);for(;s!=null;)n.add(s),s=a.get(s);return n}else return t.delete(r),t},select:()=>null},z={open:e=>{let{id:r,value:l,opened:t,parents:a}=e;if(l){let n=a.get(r);for(t.add(r);n!=null&&n!==r;)t.add(n),n=a.get(n);return t}else t.delete(r);return t},select:()=>null},Ue={open:z.open,select:e=>{let{id:r,value:l,opened:t,parents:a}=e;if(!l)return t;const n=[];let s=a.get(r);for(;s!=null;)n.push(s),s=a.get(s);return new Set(n)}},B=e=>{const r={select:l=>{let{id:t,value:a,selected:n}=l;if(t=w(t),e&&!a){const s=Array.from(n.entries()).reduce((c,p)=>{let[S,y]=p;return y==="on"?[...c,S]:c},[]);if(s.length===1&&s[0]===t)return n}return n.set(t,a?"on":"off"),n},in:(l,t,a)=>{let n=new Map;for(const s of l||[])n=r.select({id:s,value:!0,selected:new Map(n),children:t,parents:a});return n},out:l=>{const t=[];for(const[a,n]of l.entries())n==="on"&&t.push(a);return t}};return r},Y=e=>{const r=B(e);return{select:t=>{let{selected:a,id:n,...s}=t;n=w(n);const c=a.has(n)?new Map([[n,a.get(n)]]):new Map;return r.select({...s,id:n,selected:c})},in:(t,a,n)=>{let s=new Map;return t!=null&&t.length&&(s=r.in(t.slice(0,1),a,n)),s},out:(t,a,n)=>r.out(t,a,n)}},He=e=>{const r=B(e);return{select:t=>{let{id:a,selected:n,children:s,...c}=t;return a=w(a),s.has(a)?n:r.select({id:a,selected:n,children:s,...c})},in:r.in,out:r.out}},Ke=e=>{const r=Y(e);return{select:t=>{let{id:a,selected:n,children:s,...c}=t;return a=w(a),s.has(a)?n:r.select({id:a,selected:n,children:s,...c})},in:r.in,out:r.out}},$e=e=>{const r={select:l=>{let{id:t,value:a,selected:n,children:s,parents:c}=l;t=w(t);const p=new Map(n),S=[t];for(;S.length;){const i=S.shift();n.set(i,a?"on":"off"),s.has(i)&&S.push(...s.get(i))}let y=c.get(t);for(;y;){const i=s.get(y),u=i.every(o=>n.get(o)==="on"),d=i.every(o=>!n.has(o)||n.get(o)==="off");n.set(y,u?"on":d?"off":"indeterminate"),y=c.get(y)}return e&&!a&&Array.from(n.entries()).reduce((u,d)=>{let[o,h]=d;return h==="on"?[...u,o]:u},[]).length===0?p:n},in:(l,t,a)=>{let n=new Map;for(const s of l||[])n=r.select({id:s,value:!0,selected:new Map(n),children:t,parents:a});return n},out:(l,t)=>{const a=[];for(const[n,s]of l.entries())s==="on"&&!t.has(n)&&a.push(n);return a}};return r},A=Symbol.for("vuetify:nested"),J={id:C(),root:{register:()=>null,unregister:()=>null,parents:b(new Map),children:b(new Map),open:()=>null,openOnSelect:()=>null,select:()=>null,opened:b(new Set),selected:b(new Map),selectedValues:b([])}},Xe=K({selectStrategy:[String,Function],openStrategy:[String,Object],opened:Array,selected:Array,mandatory:Boolean},"nested"),Ze=e=>{let r=!1;const l=b(new Map),t=b(new Map),a=T(e,"opened",e.opened,i=>new Set(i),i=>[...i.values()]),n=f(()=>{if(typeof e.selectStrategy=="object")return e.selectStrategy;switch(e.selectStrategy){case"single-leaf":return Ke(e.mandatory);case"leaf":return He(e.mandatory);case"independent":return B(e.mandatory);case"single-independent":return Y(e.mandatory);case"classic":default:return $e(e.mandatory)}}),s=f(()=>{if(typeof e.openStrategy=="object")return e.openStrategy;switch(e.openStrategy){case"list":return Ue;case"single":return Fe;case"multiple":default:return z}}),c=T(e,"selected",e.selected,i=>n.value.in(i,l.value,t.value),i=>n.value.out(i,l.value,t.value));$(()=>{r=!0});function p(i){const u=[];let d=i;for(;d!=null;)u.unshift(d),d=t.value.get(d);return u}const S=ve("nested"),y={id:C(),root:{opened:a,selected:c,selectedValues:f(()=>{const i=[];for(const[u,d]of c.value.entries())d==="on"&&i.push(u);return i}),register:(i,u,d)=>{u&&i!==u&&t.value.set(i,u),d&&l.value.set(i,[]),u!=null&&l.value.set(u,[...l.value.get(u)||[],i])},unregister:i=>{if(r)return;l.value.delete(i);const u=t.value.get(i);if(u){const d=l.value.get(u)??[];l.value.set(u,d.filter(o=>o!==i))}t.value.delete(i),a.value.delete(i)},open:(i,u,d)=>{S.emit("click:open",{id:i,value:u,path:p(i),event:d});const o=s.value.open({id:i,value:u,opened:new Set(a.value),children:l.value,parents:t.value,event:d});o&&(a.value=o)},openOnSelect:(i,u,d)=>{const o=s.value.select({id:i,value:u,selected:new Map(c.value),opened:new Set(a.value),children:l.value,parents:t.value,event:d});o&&(a.value=o)},select:(i,u,d)=>{S.emit("click:select",{id:i,value:u,path:p(i),event:d});const o=n.value.select({id:i,value:u,selected:new Map(c.value),children:l.value,parents:t.value,event:d});o&&(c.value=o),y.root.openOnSelect(i,u,d)},children:l,parents:t}};return V(A,y),y.root},qe=(e,r)=>{const l=I(A,J),t=Symbol(fe()),a=f(()=>e.value!==void 0?e.value:t),n={...l,id:a,open:(s,c)=>l.root.open(a.value,s,c),openOnSelect:(s,c)=>l.root.openOnSelect(a.value,s,c),isOpen:f(()=>l.root.opened.value.has(a.value)),parent:f(()=>l.root.parents.value.get(a.value)),select:(s,c)=>l.root.select(a.value,s,c),isSelected:f(()=>l.root.selected.value.get(w(a.value))==="on"),isIndeterminate:f(()=>l.root.selected.value.get(a.value)==="indeterminate"),isLeaf:f(()=>!l.root.children.value.get(a.value)),isGroupActivator:l.isGroupActivator};return!l.isGroupActivator&&l.root.register(a.value,l.id.value,r),$(()=>{!l.isGroupActivator&&l.root.unregister(a.value)}),r&&V(A,n),n},et=()=>{const e=I(A,J);V(A,{...e,isGroupActivator:!0})};const ze=q("v-list-item-subtitle"),Ye=q("v-list-item-title"),Je=K({active:{type:Boolean,default:void 0},activeClass:String,activeColor:String,appendAvatar:String,appendIcon:G,baseColor:String,disabled:Boolean,lines:String,link:{type:Boolean,default:void 0},nav:Boolean,prependAvatar:String,prependIcon:G,ripple:{type:[Boolean,Object],default:!0},slim:Boolean,subtitle:[String,Number],title:[String,Number],value:null,onClick:x(),onClickOnce:x(),...me(),...ye(),...ge(),...pe(),...Se(),...he(),...be(),...ke(),...we(),...Ae({variant:"text"})},"VListItem"),tt=Pe()({name:"VListItem",directives:{Ripple:Ce},props:Je(),emits:{click:e=>!0},setup(e,r){let{attrs:l,slots:t,emit:a}=r;const n=Ie(e,l),s=f(()=>e.value===void 0?n.href.value:e.value),{select:c,isSelected:p,isIndeterminate:S,isGroupActivator:y,root:i,parent:u,openOnSelect:d}=qe(s,!1),o=Ee(),h=f(()=>{var v;return e.active!==!1&&(e.active||((v=n.isActive)==null?void 0:v.value)||p.value)}),D=f(()=>e.link!==!1&&n.isLink.value),k=f(()=>!e.disabled&&e.link!==!1&&(e.link||n.isClickable.value||e.value!=null&&!!o)),Q=f(()=>e.rounded||e.nav),W=f(()=>e.color??e.activeColor),X=f(()=>({color:h.value?W.value??e.baseColor:e.baseColor,variant:e.variant}));Ve(()=>{var v;return(v=n.isActive)==null?void 0:v.value},v=>{v&&u.value!=null&&i.open(u.value,!0),v&&d(v)},{immediate:!0});const{themeClasses:Z}=Me(e),{borderClasses:ee}=Le(e),{colorClasses:te,colorStyles:ne,variantClasses:ae}=Oe(X),{densityClasses:le}=Be(e),{dimensionStyles:se}=De(e),{elevationClasses:ie}=_e(e),{roundedClasses:re}=Ne(Q),ue=f(()=>e.lines?`v-list-item--${e.lines}-line`:void 0),M=f(()=>({isActive:h.value,select:c,isSelected:p.value,isIndeterminate:S.value}));function _(v){var P;a("click",v),!(y||!k.value)&&((P=n.navigate)==null||P.call(n,v),e.value!=null&&c(!p.value,v))}function ce(v){(v.key==="Enter"||v.key===" ")&&(v.preventDefault(),_(v))}return Re(()=>{const v=D.value?"a":e.tag,P=t.title||e.title!=null,oe=t.subtitle||e.subtitle!=null,N=!!(e.appendAvatar||e.appendIcon),de=!!(N||t.append),R=!!(e.prependAvatar||e.prependIcon),L=!!(R||t.prepend);return o==null||o.updateHasPrepend(L),e.activeColor&&je("active-color",["color","base-color"]),Te(m(v,{class:["v-list-item",{"v-list-item--active":h.value,"v-list-item--disabled":e.disabled,"v-list-item--link":k.value,"v-list-item--nav":e.nav,"v-list-item--prepend":!L&&(o==null?void 0:o.hasPrepend.value),"v-list-item--slim":e.slim,[`${e.activeClass}`]:e.activeClass&&h.value},Z.value,ee.value,te.value,le.value,ie.value,ue.value,re.value,ae.value,e.class],style:[ne.value,se.value,e.style],href:n.href.value,tabindex:k.value?o?-2:0:void 0,onClick:_,onKeydown:k.value&&!D.value&&ce},{default:()=>{var j;return[xe(k.value||h.value,"v-list-item"),L&&m("div",{key:"prepend",class:"v-list-item__prepend"},[t.prepend?m(H,{key:"prepend-defaults",disabled:!R,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon},VListItemAction:{start:!0}}},{default:()=>{var g;return[(g=t.prepend)==null?void 0:g.call(t,M.value)]}}):m(E,null,[e.prependAvatar&&m(F,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&m(U,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)]),m("div",{class:"v-list-item__spacer"},null)]),m("div",{class:"v-list-item__content","data-no-activator":""},[P&&m(Ye,{key:"title"},{default:()=>{var g;return[((g=t.title)==null?void 0:g.call(t,{title:e.title}))??e.title]}}),oe&&m(ze,{key:"subtitle"},{default:()=>{var g;return[((g=t.subtitle)==null?void 0:g.call(t,{subtitle:e.subtitle}))??e.subtitle]}}),(j=t.default)==null?void 0:j.call(t,M.value)]),de&&m("div",{key:"append",class:"v-list-item__append"},[t.append?m(H,{key:"append-defaults",disabled:!N,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon},VListItemAction:{end:!0}}},{default:()=>{var g;return[(g=t.append)==null?void 0:g.call(t,M.value)]}}):m(E,null,[e.appendIcon&&m(U,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&m(F,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)]),m("div",{class:"v-list-item__spacer"},null)])]}}),[[Ge("ripple"),k.value&&e.ripple]])}),{}}});export{tt as V,Ye as a,qe as b,Ee as c,We as d,Ze as e,Xe as m,et as u};
