import{l as at}from"./index.BFqC5wTN.js";const mt=!1;var Mn=Array.isArray,Yn=Array.from,Hn=Object.defineProperty,ht=Object.getOwnPropertyDescriptor,Xt=Object.getOwnPropertyDescriptors,jn=Object.prototype,Bn=Array.prototype,Qt=Object.getPrototypeOf;const Un=()=>{};function Vn(t){return typeof(t==null?void 0:t.then)=="function"}function Gn(t){return t()}function tn(t){for(var n=0;n<t.length;n++)t[n]()}const E=2,Tt=4,U=8,ot=16,g=32,W=64,tt=128,k=256,$=512,h=1024,x=2048,F=4096,b=8192,q=16384,nn=32768,gt=65536,rn=1<<17,en=1<<19,At=1<<20,dt=Symbol("$state"),Kn=Symbol("legacy props"),$n=Symbol("");function xt(t){return t===this.v}function sn(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function Rt(t){return!sn(t,this.v)}function ln(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function an(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function on(t){throw new Error("https://svelte.dev/e/effect_orphan")}function un(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Zn(){throw new Error("https://svelte.dev/e/hydration_failed")}function zn(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function Jn(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Wn(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function fn(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function _n(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}const Xn=1,Qn=2,tr=16,nr=1,rr=2,er=4,sr=8,lr=16,ar=1,or=2,cn="[",vn="[!",pn="]",St={},ur=Symbol();function ut(t,n){var r={f:0,v:t,reactions:null,equals:xt,version:0};return r}function ir(t){return It(ut(t))}function hn(t,n=!1){var e;const r=ut(t);return n||(r.equals=Rt),at&&i!==null&&i.l!==null&&((e=i.l).s??(e.s=[])).push(r),r}function fr(t,n=!1){return It(hn(t,n))}function It(t){return u!==null&&u.f&E&&(T===null?In([t]):T.push(t)),t}function dn(t,n){return u!==null&&ct()&&u.f&(E|ot)&&(T===null||!T.includes(t))&&_n(),nt(t,n)}function nt(t,n){return t.equals(n)||(t.v=n,t.version=Kt(),Ot(t,x),ct()&&o!==null&&o.f&h&&!(o.f&g)&&(v!==null&&v.includes(t)?(m(o,x),Q(o)):A===null?On([t]):A.push(t))),n}function Ot(t,n){var r=t.reactions;if(r!==null)for(var e=ct(),s=r.length,l=0;l<s;l++){var a=r[l],f=a.f;f&x||!e&&a===o||(m(a,n),f&(h|k)&&(f&E?Ot(a,F):Q(a)))}}function Dt(t){console.warn("https://svelte.dev/e/hydration_mismatch")}let O=!1;function _r(t){O=t}let w;function Y(t){if(t===null)throw Dt(),St;return w=t}function cr(){return Y(N(w))}function vr(t){if(O){if(N(w)!==null)throw Dt(),St;w=t}}function pr(t=1){if(O){for(var n=t,r=w;n--;)r=N(r);w=r}}function hr(){for(var t=0,n=w;;){if(n.nodeType===8){var r=n.data;if(r===pn){if(t===0)return n;t-=1}else(r===cn||r===vn)&&(t+=1)}var e=N(n);n.remove(),n=e}}var yt,yn,kt,Nt;function dr(){if(yt===void 0){yt=window,yn=document;var t=Element.prototype,n=Node.prototype;kt=ht(n,"firstChild").get,Nt=ht(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function rt(t=""){return document.createTextNode(t)}function et(t){return kt.call(t)}function N(t){return Nt.call(t)}function yr(t,n){if(!O)return et(t);var r=et(w);if(r===null)r=w.appendChild(rt());else if(n&&r.nodeType!==3){var e=rt();return r==null||r.before(e),Y(e),e}return Y(r),r}function Er(t,n){if(!O){var r=et(t);return r instanceof Comment&&r.data===""?N(r):r}return w}function wr(t,n=1,r=!1){let e=O?w:t;for(var s;n--;)s=e,e=N(e);if(!O)return e;var l=e==null?void 0:e.nodeType;if(r&&l!==3){var a=rt();return e===null?s==null||s.after(a):e.before(a),Y(a),a}return Y(e),e}function mr(t){t.textContent=""}function En(t){var n=E|x;o===null?n|=k:o.f|=At;var r=u!==null&&u.f&E?u:null;const e={children:null,ctx:i,deps:null,equals:xt,f:n,fn:t,reactions:null,v:null,version:0,parent:r??o};return r!==null&&(r.children??(r.children=[])).push(e),e}function Tr(t){const n=En(t);return n.equals=Rt,n}function Ct(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&E?it(e):D(e)}}}function wn(t){for(var n=t.parent;n!==null;){if(!(n.f&E))return n;n=n.parent}return null}function Pt(t){var n,r=o;J(wn(t));try{Ct(t),n=$t(t)}finally{J(r)}return n}function bt(t){var n=Pt(t),r=(I||t.f&k)&&t.deps!==null?F:h;m(t,r),t.equals(n)||(t.v=n,t.version=Kt())}function it(t){Ct(t),B(t,0),m(t,q),t.v=t.children=t.deps=t.ctx=t.reactions=null}function Ft(t){o===null&&u===null&&on(),u!==null&&u.f&k&&an(),_t&&ln()}function mn(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function L(t,n,r,e=!0){var s=(t&W)!==0,l=o,a={ctx:i,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|x,first:null,fn:n,last:null,next:null,parent:s?null:l,prev:null,teardown:null,transitions:null,version:0};if(r){var f=C;try{Et(!0),V(a),a.f|=nn}catch(_){throw D(a),_}finally{Et(f)}}else n!==null&&Q(a);var p=r&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&At)===0;if(!p&&!s&&e&&(l!==null&&mn(a,l),u!==null&&u.f&E)){var d=u;(d.children??(d.children=[])).push(a)}return a}function gr(t){const n=L(U,null,!1);return m(n,h),n.teardown=t,n}function Ar(t){Ft();var n=o!==null&&(o.f&g)!==0&&i!==null&&!i.m;if(n){var r=i;(r.e??(r.e=[])).push({fn:t,effect:o,reaction:u})}else{var e=qt(t);return e}}function xr(t){return Ft(),ft(t)}function Rr(t){const n=L(W,t,!0);return(r={})=>new Promise(e=>{r.outro?An(n,()=>{D(n),e(void 0)}):(D(n),e(void 0))})}function qt(t){return L(Tt,t,!1)}function Sr(t,n){var r=i,e={effect:null,ran:!1};r.l.r1.push(e),e.effect=ft(()=>{t(),!e.ran&&(e.ran=!0,dn(r.l.r2,!0),vt(n))})}function Ir(){var t=i;ft(()=>{if(bn(t.l.r2)){for(var n of t.l.r1){var r=n.effect;r.f&h&&m(r,F),M(r)&&V(r),n.ran=!1}t.l.r2.v=!1}})}function ft(t){return L(U,t,!0)}function Or(t){return Tn(t)}function Tn(t,n=0){return L(U|ot|n,t,!0)}function Dr(t,n=!0){return L(U|g,t,!0,n)}function Lt(t){var n=t.teardown;if(n!==null){const r=_t,e=u;wt(!0),z(null);try{n.call(null)}finally{wt(r),z(e)}}}function Mt(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)it(n[r])}}function Yt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;D(r,n),r=e}}function gn(t){for(var n=t.first;n!==null;){var r=n.next;n.f&g||D(n),n=r}}function D(t,n=!0){var r=!1;if((n||t.f&en)&&t.nodes_start!==null){for(var e=t.nodes_start,s=t.nodes_end;e!==null;){var l=e===s?null:N(e);e.remove(),e=l}r=!0}Yt(t,n&&!r),Mt(t),B(t,0),m(t,q);var a=t.transitions;if(a!==null)for(const p of a)p.stop();Lt(t);var f=t.parent;f!==null&&f.first!==null&&Ht(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function Ht(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function An(t,n){var r=[];jt(t,r,!0),xn(r,()=>{D(t),n&&n()})}function xn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var s of t)s.out(e)}else n()}function jt(t,n,r){if(!(t.f&b)){if(t.f^=b,t.transitions!==null)for(const a of t.transitions)(a.is_global||r)&&n.push(a);for(var e=t.first;e!==null;){var s=e.next,l=(e.f&gt)!==0||(e.f&g)!==0;jt(e,n,l?r:!1),e=s}}}function kr(t){Bt(t,!0)}function Bt(t,n){if(t.f&b){M(t)&&V(t),t.f^=b;for(var r=t.first;r!==null;){var e=r.next,s=(r.f&gt)!==0||(r.f&g)!==0;Bt(r,s?n:!1),r=e}if(t.transitions!==null)for(const l of t.transitions)(l.is_global||n)&&l.in()}}let Z=!1,st=[];function Ut(){Z=!1;const t=st.slice();st=[],tn(t)}function Nr(t){Z||(Z=!0,queueMicrotask(Ut)),st.push(t)}function Rn(){Z&&Ut()}const Vt=0,Sn=1;let G=!1,K=Vt,H=!1,j=null,C=!1,_t=!1;function Et(t){C=t}function wt(t){_t=t}let S=[],P=0;let u=null;function z(t){u=t}let o=null;function J(t){o=t}let T=null;function In(t){T=t}let v=null,y=0,A=null;function On(t){A=t}let Gt=0,I=!1,R=null,i=null;function Cr(t){i=t}function Kt(){return++Gt}function ct(){return!at||i!==null&&i.l===null}function M(t){var a,f;var n=t.f;if(n&x)return!0;if(n&F){var r=t.deps,e=(n&k)!==0;if(r!==null){var s;if(n&$){for(s=0;s<r.length;s++)((a=r[s]).reactions??(a.reactions=[])).push(t);t.f^=$}for(s=0;s<r.length;s++){var l=r[s];if(M(l)&&bt(l),e&&o!==null&&!I&&!((f=l==null?void 0:l.reactions)!=null&&f.includes(t))&&(l.reactions??(l.reactions=[])).push(t),l.version>t.version)return!0}}(!e||o!==null&&!I)&&m(t,h)}return!1}function Dn(t,n){for(var r=n;r!==null;){if(r.f&tt)try{r.fn(t);return}catch{r.f^=tt}r=r.parent}throw G=!1,t}function kn(t){return(t.f&q)===0&&(t.parent===null||(t.parent.f&tt)===0)}function X(t,n,r,e){if(G){if(r===null&&(G=!1),kn(n))throw t;return}r!==null&&(G=!0);{Dn(t,n);return}}function $t(t){var pt;var n=v,r=y,e=A,s=u,l=I,a=T,f=i,p=t.f;v=null,y=0,A=null,u=p&(g|W)?null:t,I=!C&&(p&k)!==0,T=null,i=t.ctx;try{var d=(0,t.fn)(),_=t.deps;if(v!==null){var c;if(B(t,y),_!==null&&y>0)for(_.length=y+v.length,c=0;c<v.length;c++)_[y+c]=v[c];else t.deps=_=v;if(!I)for(c=y;c<_.length;c++)((pt=_[c]).reactions??(pt.reactions=[])).push(t)}else _!==null&&y<_.length&&(B(t,y),_.length=y);return d}finally{v=n,y=r,A=e,u=s,I=l,T=a,i=f}}function Nn(t,n){let r=n.reactions;if(r!==null){var e=r.indexOf(t);if(e!==-1){var s=r.length-1;s===0?r=n.reactions=null:(r[e]=r[s],r.pop())}}r===null&&n.f&E&&(v===null||!v.includes(n))&&(m(n,F),n.f&(k|$)||(n.f^=$),B(n,0))}function B(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)Nn(t,r[e])}function V(t){var n=t.f;if(!(n&q)){m(t,h);var r=o,e=i;o=t;try{n&ot?gn(t):Yt(t),Mt(t),Lt(t);var s=$t(t);t.teardown=typeof s=="function"?s:null,t.version=Gt}catch(l){X(l,t,r,e||t.ctx)}finally{o=r}}}function Zt(){if(P>1e3){P=0;try{un()}catch(t){if(j!==null)X(t,j,null);else throw t}}P++}function zt(t){var n=t.length;if(n!==0){Zt();var r=C;C=!0;try{for(var e=0;e<n;e++){var s=t[e];s.f&h||(s.f^=h);var l=[];Jt(s,l),Cn(l)}}finally{C=r}}}function Cn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];if(!(e.f&(q|b)))try{M(e)&&(V(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Ht(e):e.fn=null))}catch(s){X(s,e,null,e.ctx)}}}function Pn(){if(H=!1,P>1001)return;const t=S;S=[],zt(t),H||(P=0,j=null)}function Q(t){K===Vt&&(H||(H=!0,queueMicrotask(Pn))),j=t;for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(W|g)){if(!(r&h))return;n.f^=h}}S.push(n)}function Jt(t,n){var r=t.first,e=[];t:for(;r!==null;){var s=r.f,l=(s&g)!==0,a=l&&(s&h)!==0,f=r.next;if(!a&&!(s&b))if(s&U){if(l)r.f^=h;else try{M(r)&&V(r)}catch(c){X(c,r,null,r.ctx)}var p=r.first;if(p!==null){r=p;continue}}else s&Tt&&e.push(r);if(f===null){let c=r.parent;for(;c!==null;){if(t===c)break t;var d=c.next;if(d!==null){r=d;continue t}c=c.parent}}r=f}for(var _=0;_<e.length;_++)p=e[_],n.push(p),Jt(p,n)}function Wt(t){var n=K,r=S;try{Zt();const s=[];K=Sn,S=s,H=!1,zt(r);var e=t==null?void 0:t();return Rn(),(S.length>0||s.length>0)&&Wt(),P=0,j=null,e}finally{K=n,S=r}}async function Pr(){await Promise.resolve(),Wt()}function bn(t){var _;var n=t.f,r=(n&E)!==0;if(r&&n&q){var e=Pt(t);return it(t),e}if(R!==null&&R.add(t),u!==null){T!==null&&T.includes(t)&&fn();var s=u.deps;v===null&&s!==null&&s[y]===t?y++:v===null?v=[t]:v.push(t),A!==null&&o!==null&&o.f&h&&!(o.f&g)&&A.includes(t)&&(m(o,x),Q(o))}else if(r&&t.deps===null)for(var l=t,a=l.parent,f=l;a!==null;)if(a.f&E){var p=a;f=p,a=p.parent}else{var d=a;(_=d.deriveds)!=null&&_.includes(f)||(d.deriveds??(d.deriveds=[])).push(f);break}return r&&(l=t,M(l)&&bt(l)),t.v}function Fn(t){var n=R;R=new Set;var r=R,e;try{if(vt(t),n!==null)for(e of R)n.add(e)}finally{R=n}return r}function br(t){var n=Fn(()=>vt(t));for(var r of n)if(r.f&rn)for(const e of r.deps||[])e.f&E||nt(e,e.v);else nt(r,r.v)}function vt(t){const n=u;try{return u=null,t()}finally{u=n}}const qn=~(x|F|h);function m(t,n){t.f=t.f&qn|n}function Fr(t,n=!1,r){i={p:i,c:null,e:null,m:!1,s:t,x:null,l:null},at&&!n&&(i.l={s:null,u:null,r1:[],r2:ut(!1)})}function qr(t){const n=i;if(n!==null){const a=n.e;if(a!==null){var r=o,e=u;n.e=null;try{for(var s=0;s<a.length;s++){var l=a[s];J(l.effect),z(l.reaction),qt(l.fn)}}finally{J(r),z(e)}}i=n.p,n.m=!0}return{}}function Lr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(dt in t)lt(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&dt in r&&lt(r)}}}function lt(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{lt(t[e],n)}catch{}const r=Qt(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Xt(r);for(let s in e){const l=e[s].get;if(l)try{l.call(t)}catch{}}}}}export{yn as $,o as A,Wn as B,Mn as C,Un as D,gr as E,hn as F,ct as G,Tn as H,cr as I,Vn as J,nt as K,$n as L,Dr as M,Nr as N,J as O,z as P,Cr as Q,kr as R,dt as S,An as T,ur as U,Wt as V,w as W,rt as X,en as Y,cn as Z,N as _,Ar as a,_r as a0,Y as a1,et as a2,ar as a3,or as a4,u as a5,Hn as a6,dr as a7,St as a8,pn as a9,W as aA,nr as aB,rr as aC,sr as aD,Kn as aE,Tr as aF,lr as aG,R as aH,Pr as aI,ir as aJ,sn as aK,Dt as aa,Zn as ab,mr as ac,Yn as ad,Rr as ae,vn as af,hr as ag,b as ah,jt as ai,xn as aj,D as ak,Qn as al,Xn as am,tr as an,qt as ao,Sr as ap,Ir as aq,fr as ar,br as as,gt as at,ft as au,zn as av,rn as aw,er as ax,Rt as ay,g as az,vt as b,i as c,Gn as d,Lr as e,En as f,bn as g,O as h,Qt as i,Xt as j,Er as k,qr as l,yr as m,pr as n,vr as o,Fr as p,jn as q,tn as r,wr as s,Or as t,xr as u,Bn as v,ut as w,Jn as x,dn as y,ht as z};
