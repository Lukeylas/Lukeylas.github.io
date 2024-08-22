(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
* @vue/shared v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function uu(n,e){const t=new Set(n.split(","));return i=>t.has(i)}const ht={},tr=[],Sn=()=>{},i_=()=>!1,Za=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),du=n=>n.startsWith("onUpdate:"),wt=Object.assign,fu=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},s_=Object.prototype.hasOwnProperty,et=(n,e)=>s_.call(n,e),ke=Array.isArray,Kr=n=>Eo(n)==="[object Map]",r_=n=>Eo(n)==="[object Set]",o_=n=>Eo(n)==="[object RegExp]",qe=n=>typeof n=="function",At=n=>typeof n=="string",bo=n=>typeof n=="symbol",xt=n=>n!==null&&typeof n=="object",Mp=n=>(xt(n)||qe(n))&&qe(n.then)&&qe(n.catch),a_=Object.prototype.toString,Eo=n=>a_.call(n),l_=n=>Eo(n).slice(8,-1),c_=n=>Eo(n)==="[object Object]",hu=n=>At(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Yr=uu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ja=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},u_=/-(\w)/g,Hn=Ja(n=>n.replace(u_,(e,t)=>t?t.toUpperCase():"")),d_=/\B([A-Z])/g,Sr=Ja(n=>n.replace(d_,"-$1").toLowerCase()),Qa=Ja(n=>n.charAt(0).toUpperCase()+n.slice(1)),Sl=Ja(n=>n?`on${Qa(n)}`:""),Wi=(n,e)=>!Object.is(n,e),Zr=(n,e)=>{for(let t=0;t<n.length;t++)n[t](e)},bp=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},f_=n=>{const e=parseFloat(n);return isNaN(e)?n:e},h_=n=>{const e=At(n)?Number(n):NaN;return isNaN(e)?n:e};let Zu;const Ep=()=>Zu||(Zu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function pu(n){if(ke(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=At(i)?__(i):pu(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(At(n)||xt(n))return n}const p_=/;(?![^(]*\))/g,m_=/:([^]+)/,g_=/\/\*[^]*?\*\//g;function __(n){const e={};return n.replace(g_,"").split(p_).forEach(t=>{if(t){const i=t.split(m_);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Dn(n){let e="";if(At(n))e=n;else if(ke(n))for(let t=0;t<n.length;t++){const i=Dn(n[t]);i&&(e+=i+" ")}else if(xt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const v_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",x_=uu(v_);function Tp(n){return!!n||n===""}/**
* @vue/reactivity v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let dn;class wp{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=dn,!e&&dn&&(this.index=(dn.scopes||(dn.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=dn;try{return dn=this,e()}finally{dn=t}}}on(){dn=this}off(){dn=this.parent}stop(e){if(this._active){let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Ap(n){return new wp(n)}function y_(n,e=dn){e&&e.active&&e.effects.push(n)}function Rp(){return dn}function S_(n){dn&&dn.cleanups.push(n)}let xs;class mu{constructor(e,t,i,s){this.fn=e,this.trigger=t,this.scheduler=i,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,y_(this,s)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,ji();for(let e=0;e<this._depsLength;e++){const t=this.deps[e];if(t.computed&&(M_(t.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),$i()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=zi,t=xs;try{return zi=!0,xs=this,this._runnings++,Ju(this),this.fn()}finally{Qu(this),this._runnings--,xs=t,zi=e}}stop(){this.active&&(Ju(this),Qu(this),this.onStop&&this.onStop(),this.active=!1)}}function M_(n){return n.value}function Ju(n){n._trackId++,n._depsLength=0}function Qu(n){if(n.deps.length>n._depsLength){for(let e=n._depsLength;e<n.deps.length;e++)Cp(n.deps[e],n);n.deps.length=n._depsLength}}function Cp(n,e){const t=n.get(e);t!==void 0&&e._trackId!==t&&(n.delete(e),n.size===0&&n.cleanup())}let zi=!0,Cc=0;const Pp=[];function ji(){Pp.push(zi),zi=!1}function $i(){const n=Pp.pop();zi=n===void 0?!0:n}function gu(){Cc++}function _u(){for(Cc--;!Cc&&Pc.length;)Pc.shift()()}function Lp(n,e,t){if(e.get(n)!==n._trackId){e.set(n,n._trackId);const i=n.deps[n._depsLength];i!==e?(i&&Cp(i,n),n.deps[n._depsLength++]=e):n._depsLength++}}const Pc=[];function Ip(n,e,t){gu();for(const i of n.keys()){let s;i._dirtyLevel<e&&(s??(s=n.get(i)===i._trackId))&&(i._shouldSchedule||(i._shouldSchedule=i._dirtyLevel===0),i._dirtyLevel=e),i._shouldSchedule&&(s??(s=n.get(i)===i._trackId))&&(i.trigger(),(!i._runnings||i.allowRecurse)&&i._dirtyLevel!==2&&(i._shouldSchedule=!1,i.scheduler&&Pc.push(i.scheduler)))}_u()}const Dp=(n,e)=>{const t=new Map;return t.cleanup=n,t.computed=e,t},wa=new WeakMap,ys=Symbol(""),Lc=Symbol("");function rn(n,e,t){if(zi&&xs){let i=wa.get(n);i||wa.set(n,i=new Map);let s=i.get(t);s||i.set(t,s=Dp(()=>i.delete(t))),Lp(xs,s)}}function ai(n,e,t,i,s,r){const o=wa.get(n);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&ke(n)){const l=Number(i);o.forEach((c,u)=>{(u==="length"||!bo(u)&&u>=l)&&a.push(c)})}else switch(t!==void 0&&a.push(o.get(t)),e){case"add":ke(n)?hu(t)&&a.push(o.get("length")):(a.push(o.get(ys)),Kr(n)&&a.push(o.get(Lc)));break;case"delete":ke(n)||(a.push(o.get(ys)),Kr(n)&&a.push(o.get(Lc)));break;case"set":Kr(n)&&a.push(o.get(ys));break}gu();for(const l of a)l&&Ip(l,4);_u()}function b_(n,e){const t=wa.get(n);return t&&t.get(e)}const E_=uu("__proto__,__v_isRef,__isVue"),Np=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(bo)),ed=T_();function T_(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const i=tt(this);for(let r=0,o=this.length;r<o;r++)rn(i,"get",r+"");const s=i[e](...t);return s===-1||s===!1?i[e](...t.map(tt)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){ji(),gu();const i=tt(this)[e].apply(this,t);return _u(),$i(),i}}),n}function w_(n){bo(n)||(n=String(n));const e=tt(this);return rn(e,"has",n),e.hasOwnProperty(n)}class Up{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?k_:kp:r?Bp:Fp).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=ke(e);if(!s){if(o&&et(ed,t))return Reflect.get(ed,t,i);if(t==="hasOwnProperty")return w_}const a=Reflect.get(e,t,i);return(bo(t)?Np.has(t):E_(t))||(s||rn(e,"get",t),r)?a:St(a)?o&&hu(t)?a:a.value:xt(a)?s?zp(a):Mr(a):a}}class Op extends Up{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];if(!this._isShallow){const l=uo(r);if(!Aa(i)&&!uo(i)&&(r=tt(r),i=tt(i)),!ke(e)&&St(r)&&!St(i))return l?!1:(r.value=i,!0)}const o=ke(e)&&hu(t)?Number(t)<e.length:et(e,t),a=Reflect.set(e,t,i,s);return e===tt(s)&&(o?Wi(i,r)&&ai(e,"set",t,i):ai(e,"add",t,i)),a}deleteProperty(e,t){const i=et(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&ai(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!bo(t)||!Np.has(t))&&rn(e,"has",t),i}ownKeys(e){return rn(e,"iterate",ke(e)?"length":ys),Reflect.ownKeys(e)}}class A_ extends Up{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const R_=new Op,C_=new A_,P_=new Op(!0);const vu=n=>n,el=n=>Reflect.getPrototypeOf(n);function No(n,e,t=!1,i=!1){n=n.__v_raw;const s=tt(n),r=tt(e);t||(Wi(e,r)&&rn(s,"get",e),rn(s,"get",r));const{has:o}=el(s),a=i?vu:t?Su:fo;if(o.call(s,e))return a(n.get(e));if(o.call(s,r))return a(n.get(r));n!==s&&n.get(e)}function Uo(n,e=!1){const t=this.__v_raw,i=tt(t),s=tt(n);return e||(Wi(n,s)&&rn(i,"has",n),rn(i,"has",s)),n===s?t.has(n):t.has(n)||t.has(s)}function Oo(n,e=!1){return n=n.__v_raw,!e&&rn(tt(n),"iterate",ys),Reflect.get(n,"size",n)}function td(n){n=tt(n);const e=tt(this);return el(e).has.call(e,n)||(e.add(n),ai(e,"add",n,n)),this}function nd(n,e){e=tt(e);const t=tt(this),{has:i,get:s}=el(t);let r=i.call(t,n);r||(n=tt(n),r=i.call(t,n));const o=s.call(t,n);return t.set(n,e),r?Wi(e,o)&&ai(t,"set",n,e):ai(t,"add",n,e),this}function id(n){const e=tt(this),{has:t,get:i}=el(e);let s=t.call(e,n);s||(n=tt(n),s=t.call(e,n)),i&&i.call(e,n);const r=e.delete(n);return s&&ai(e,"delete",n,void 0),r}function sd(){const n=tt(this),e=n.size!==0,t=n.clear();return e&&ai(n,"clear",void 0,void 0),t}function Fo(n,e){return function(i,s){const r=this,o=r.__v_raw,a=tt(o),l=e?vu:n?Su:fo;return!n&&rn(a,"iterate",ys),o.forEach((c,u)=>i.call(s,l(c),l(u),r))}}function Bo(n,e,t){return function(...i){const s=this.__v_raw,r=tt(s),o=Kr(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),u=t?vu:e?Su:fo;return!e&&rn(r,"iterate",l?Lc:ys),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:a?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function _i(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function L_(){const n={get(r){return No(this,r)},get size(){return Oo(this)},has:Uo,add:td,set:nd,delete:id,clear:sd,forEach:Fo(!1,!1)},e={get(r){return No(this,r,!1,!0)},get size(){return Oo(this)},has:Uo,add:td,set:nd,delete:id,clear:sd,forEach:Fo(!1,!0)},t={get(r){return No(this,r,!0)},get size(){return Oo(this,!0)},has(r){return Uo.call(this,r,!0)},add:_i("add"),set:_i("set"),delete:_i("delete"),clear:_i("clear"),forEach:Fo(!0,!1)},i={get(r){return No(this,r,!0,!0)},get size(){return Oo(this,!0)},has(r){return Uo.call(this,r,!0)},add:_i("add"),set:_i("set"),delete:_i("delete"),clear:_i("clear"),forEach:Fo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=Bo(r,!1,!1),t[r]=Bo(r,!0,!1),e[r]=Bo(r,!1,!0),i[r]=Bo(r,!0,!0)}),[n,t,e,i]}const[I_,D_,N_,U_]=L_();function xu(n,e){const t=e?n?U_:N_:n?D_:I_;return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(et(t,s)&&s in i?t:i,s,r)}const O_={get:xu(!1,!1)},F_={get:xu(!1,!0)},B_={get:xu(!0,!1)};const Fp=new WeakMap,Bp=new WeakMap,kp=new WeakMap,k_=new WeakMap;function z_(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function H_(n){return n.__v_skip||!Object.isExtensible(n)?0:z_(l_(n))}function Mr(n){return uo(n)?n:yu(n,!1,R_,O_,Fp)}function V_(n){return yu(n,!1,P_,F_,Bp)}function zp(n){return yu(n,!0,C_,B_,kp)}function yu(n,e,t,i,s){if(!xt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const r=s.get(n);if(r)return r;const o=H_(n);if(o===0)return n;const a=new Proxy(n,o===2?i:t);return s.set(n,a),a}function Ss(n){return uo(n)?Ss(n.__v_raw):!!(n&&n.__v_isReactive)}function uo(n){return!!(n&&n.__v_isReadonly)}function Aa(n){return!!(n&&n.__v_isShallow)}function Hp(n){return n?!!n.__v_raw:!1}function tt(n){const e=n&&n.__v_raw;return e?tt(e):n}function To(n){return Object.isExtensible(n)&&bp(n,"__v_skip",!0),n}const fo=n=>xt(n)?Mr(n):n,Su=n=>xt(n)?zp(n):n;class Vp{constructor(e,t,i,s){this.getter=e,this._setter=t,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new mu(()=>e(this._value),()=>ya(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=i}get value(){const e=tt(this);return(!e._cacheable||e.effect.dirty)&&Wi(e._value,e._value=e.effect.run())&&ya(e,4),Gp(e),e.effect._dirtyLevel>=2&&ya(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function G_(n,e,t=!1){let i,s;const r=qe(n);return r?(i=n,s=Sn):(i=n.get,s=n.set),new Vp(i,s,r||!s,t)}function Gp(n){var e;zi&&xs&&(n=tt(n),Lp(xs,(e=n.dep)!=null?e:n.dep=Dp(()=>n.dep=void 0,n instanceof Vp?n:void 0)))}function ya(n,e=4,t){n=tt(n);const i=n.dep;i&&Ip(i,e)}function St(n){return!!(n&&n.__v_isRef===!0)}function ut(n){return W_(n,!1)}function W_(n,e){return St(n)?n:new q_(n,e)}class q_{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:tt(e),this._value=t?e:fo(e)}get value(){return Gp(this),this._value}set value(e){const t=this.__v_isShallow||Aa(e)||uo(e);e=t?e:tt(e),Wi(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:fo(e),ya(this,4))}}function ct(n){return St(n)?n.value:n}const X_={get:(n,e,t)=>ct(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return St(s)&&!St(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function Wp(n){return Ss(n)?n:new Proxy(n,X_)}function j_(n){const e=ke(n)?new Array(n.length):{};for(const t in n)e[t]=K_(n,t);return e}class $_{constructor(e,t,i){this._object=e,this._key=t,this._defaultValue=i,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return b_(tt(this._object),this._key)}}function K_(n,e,t){const i=n[e];return St(i)?i:new $_(n,e,t)}/**
* @vue/runtime-core v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Hi(n,e,t,i){try{return i?n(...i):n()}catch(s){tl(s,e,t)}}function bn(n,e,t,i){if(qe(n)){const s=Hi(n,e,t,i);return s&&Mp(s)&&s.catch(r=>{tl(r,e,t)}),s}if(ke(n)){const s=[];for(let r=0;r<n.length;r++)s.push(bn(n[r],e,t,i));return s}}function tl(n,e,t,i=!0){const s=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${t}`;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](n,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){ji(),Hi(l,null,10,[n,o,a]),$i();return}}Y_(n,t,s,i)}function Y_(n,e,t,i=!0){console.error(n)}let ho=!1,Ic=!1;const qt=[];let On=0;const nr=[];let Ri=null,hs=0;const qp=Promise.resolve();let Mu=null;function Ts(n){const e=Mu||qp;return n?e.then(this?n.bind(this):n):e}function Z_(n){let e=On+1,t=qt.length;for(;e<t;){const i=e+t>>>1,s=qt[i],r=po(s);r<n||r===n&&s.pre?e=i+1:t=i}return e}function bu(n){(!qt.length||!qt.includes(n,ho&&n.allowRecurse?On+1:On))&&(n.id==null?qt.push(n):qt.splice(Z_(n.id),0,n),Xp())}function Xp(){!ho&&!Ic&&(Ic=!0,Mu=qp.then($p))}function J_(n){const e=qt.indexOf(n);e>On&&qt.splice(e,1)}function Q_(n){ke(n)?nr.push(...n):(!Ri||!Ri.includes(n,n.allowRecurse?hs+1:hs))&&nr.push(n),Xp()}function rd(n,e,t=ho?On+1:0){for(;t<qt.length;t++){const i=qt[t];if(i&&i.pre){if(n&&i.id!==n.uid)continue;qt.splice(t,1),t--,i()}}}function jp(n){if(nr.length){const e=[...new Set(nr)].sort((t,i)=>po(t)-po(i));if(nr.length=0,Ri){Ri.push(...e);return}for(Ri=e,hs=0;hs<Ri.length;hs++)Ri[hs]();Ri=null,hs=0}}const po=n=>n.id==null?1/0:n.id,ev=(n,e)=>{const t=po(n)-po(e);if(t===0){if(n.pre&&!e.pre)return-1;if(e.pre&&!n.pre)return 1}return t};function $p(n){Ic=!1,ho=!0,qt.sort(ev);try{for(On=0;On<qt.length;On++){const e=qt[On];e&&e.active!==!1&&Hi(e,null,14)}}finally{On=0,qt.length=0,jp(),ho=!1,Mu=null,(qt.length||nr.length)&&$p()}}function tv(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||ht;let s=t;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:d}=i[u]||ht;d&&(s=t.map(h=>At(h)?h.trim():h)),f&&(s=t.map(f_))}let a,l=i[a=Sl(e)]||i[a=Sl(Hn(e))];!l&&r&&(l=i[a=Sl(Sr(e))]),l&&bn(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,bn(c,n,6,s)}}function Kp(n,e,t=!1){const i=e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!qe(n)){const l=c=>{const u=Kp(c,e,!0);u&&(a=!0,wt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(xt(n)&&i.set(n,null),null):(ke(r)?r.forEach(l=>o[l]=null):wt(o,r),xt(n)&&i.set(n,o),o)}function nl(n,e){return!n||!Za(e)?!1:(e=e.slice(2).replace(/Once$/,""),et(n,e[0].toLowerCase()+e.slice(1))||et(n,Sr(e))||et(n,e))}let Xt=null,il=null;function Ra(n){const e=Xt;return Xt=n,il=n&&n.type.__scopeId||null,e}function br(n){il=n}function Er(){il=null}function Rt(n,e=Xt,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&xd(-1);const r=Ra(e);let o;try{o=n(...s)}finally{Ra(r),i._d&&xd(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Ml(n){const{type:e,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:d,setupState:h,ctx:g,inheritAttrs:_}=n,p=Ra(n);let m,S;try{if(t.shapeFlag&4){const E=s||i,P=E;m=Nn(c.call(P,E,u,f,h,d,g)),S=a}else{const E=e;m=Nn(E.length>1?E(f,{attrs:a,slots:o,emit:l}):E(f,null)),S=e.props?a:nv(a)}}catch(E){no.length=0,tl(E,n,1),m=Le(Mn)}let y=m;if(S&&_!==!1){const E=Object.keys(S),{shapeFlag:P}=y;E.length&&P&7&&(r&&E.some(du)&&(S=iv(S,r)),y=ci(y,S,!1,!0))}return t.dirs&&(y=ci(y,null,!1,!0),y.dirs=y.dirs?y.dirs.concat(t.dirs):t.dirs),t.transition&&(y.transition=t.transition),m=y,Ra(p),m}const nv=n=>{let e;for(const t in n)(t==="class"||t==="style"||Za(t))&&((e||(e={}))[t]=n[t]);return e},iv=(n,e)=>{const t={};for(const i in n)(!du(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function sv(n,e,t){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?od(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(o[d]!==i[d]&&!nl(c,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?od(i,o,c):!0:!!o;return!1}function od(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==n[r]&&!nl(t,r))return!0}return!1}function rv({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const ov="components";function Dc(n,e){return lv(ov,n,!0,e)||n}const av=Symbol.for("v-ndc");function lv(n,e,t=!0,i=!1){const s=Xt||Nt;if(s){const r=s.type;{const a=Gc(r,!1);if(a&&(a===e||a===Hn(e)||a===Qa(Hn(e))))return r}const o=ad(s[n]||r[n],e)||ad(s.appContext[n],e);return!o&&i?r:o}}function ad(n,e){return n&&(n[e]||n[Hn(e)]||n[Qa(Hn(e))])}const Yp=n=>n.__isSuspense;function cv(n,e){e&&e.pendingBranch?ke(n)?e.effects.push(...n):e.effects.push(n):Q_(n)}const uv=Symbol.for("v-scx"),dv=()=>eo(uv),ko={};function Ut(n,e,t){return Zp(n,e,t)}function Zp(n,e,{immediate:t,deep:i,flush:s,once:r,onTrack:o,onTrigger:a}=ht){if(e&&r){const R=e;e=(...A)=>{R(...A),P()}}const l=Nt,c=R=>i===!0?R:gs(R,i===!1?1:void 0);let u,f=!1,d=!1;if(St(n)?(u=()=>n.value,f=Aa(n)):Ss(n)?(u=()=>c(n),f=!0):ke(n)?(d=!0,f=n.some(R=>Ss(R)||Aa(R)),u=()=>n.map(R=>{if(St(R))return R.value;if(Ss(R))return c(R);if(qe(R))return Hi(R,l,2)})):qe(n)?e?u=()=>Hi(n,l,2):u=()=>(h&&h(),bn(n,l,3,[g])):u=Sn,e&&i){const R=u;u=()=>gs(R())}let h,g=R=>{h=y.onStop=()=>{Hi(R,l,4),h=y.onStop=void 0}},_;if(ll)if(g=Sn,e?t&&bn(e,l,3,[u(),d?[]:void 0,g]):u(),s==="sync"){const R=dv();_=R.__watcherHandles||(R.__watcherHandles=[])}else return Sn;let p=d?new Array(n.length).fill(ko):ko;const m=()=>{if(!(!y.active||!y.dirty))if(e){const R=y.run();(i||f||(d?R.some((A,C)=>Wi(A,p[C])):Wi(R,p)))&&(h&&h(),bn(e,l,3,[R,p===ko?void 0:d&&p[0]===ko?[]:p,g]),p=R)}else y.run()};m.allowRecurse=!!e;let S;s==="sync"?S=m:s==="post"?S=()=>Bt(m,l&&l.suspense):(m.pre=!0,l&&(m.id=l.uid),S=()=>bu(m));const y=new mu(u,Sn,S),E=Rp(),P=()=>{y.stop(),E&&fu(E.effects,y)};return e?t?m():p=y.run():s==="post"?Bt(y.run.bind(y),l&&l.suspense):y.run(),_&&_.push(P),P}function fv(n,e,t){const i=this.proxy,s=At(n)?n.includes(".")?Jp(i,n):()=>i[n]:n.bind(i,i);let r;qe(e)?r=e:(r=e.handler,t=e);const o=wo(this),a=Zp(s,r.bind(i),t);return o(),a}function Jp(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}function gs(n,e=1/0,t){if(e<=0||!xt(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,St(n))gs(n.value,e,t);else if(ke(n))for(let i=0;i<n.length;i++)gs(n[i],e,t);else if(r_(n)||Kr(n))n.forEach(i=>{gs(i,e,t)});else if(c_(n))for(const i in n)gs(n[i],e,t);return n}function Qp(n,e){if(Xt===null)return n;const t=cl(Xt)||Xt.proxy,i=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,a,l=ht]=e[s];r&&(qe(r)&&(r={mounted:r,updated:r}),r.deep&&gs(o),i.push({dir:r,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function es(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(ji(),bn(l,t,8,[n.el,a,n,e]),$i())}}const Ci=Symbol("_leaveCb"),zo=Symbol("_enterCb");function hv(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return As(()=>{n.isMounted=!0}),In(()=>{n.isUnmounting=!0}),n}const gn=[Function,Array],em={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:gn,onEnter:gn,onAfterEnter:gn,onEnterCancelled:gn,onBeforeLeave:gn,onLeave:gn,onAfterLeave:gn,onLeaveCancelled:gn,onBeforeAppear:gn,onAppear:gn,onAfterAppear:gn,onAppearCancelled:gn},pv={name:"BaseTransition",props:em,setup(n,{slots:e}){const t=Ft(),i=hv();return()=>{const s=e.default&&nm(e.default(),!0);if(!s||!s.length)return;let r=s[0];if(s.length>1){for(const d of s)if(d.type!==Mn){r=d;break}}const o=tt(n),{mode:a}=o;if(i.isLeaving)return bl(r);const l=ld(r);if(!l)return bl(r);const c=Nc(l,o,i,t);Ca(l,c);const u=t.subTree,f=u&&ld(u);if(f&&f.type!==Mn&&!Ni(l,f)){const d=Nc(f,o,i,t);if(Ca(f,d),a==="out-in"&&l.type!==Mn)return i.isLeaving=!0,d.afterLeave=()=>{i.isLeaving=!1,t.update.active!==!1&&(t.effect.dirty=!0,t.update())},bl(r);a==="in-out"&&l.type!==Mn&&(d.delayLeave=(h,g,_)=>{const p=tm(i,f);p[String(f.key)]=f,h[Ci]=()=>{g(),h[Ci]=void 0,delete c.delayedLeave},c.delayedLeave=_})}return r}}},mv=pv;function tm(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function Nc(n,e,t,i){const{appear:s,mode:r,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:f,onLeave:d,onAfterLeave:h,onLeaveCancelled:g,onBeforeAppear:_,onAppear:p,onAfterAppear:m,onAppearCancelled:S}=e,y=String(n.key),E=tm(t,n),P=(C,b)=>{C&&bn(C,i,9,b)},R=(C,b)=>{const M=b[1];P(C,b),ke(C)?C.every(I=>I.length<=1)&&M():C.length<=1&&M()},A={mode:r,persisted:o,beforeEnter(C){let b=a;if(!t.isMounted)if(s)b=_||a;else return;C[Ci]&&C[Ci](!0);const M=E[y];M&&Ni(n,M)&&M.el[Ci]&&M.el[Ci](),P(b,[C])},enter(C){let b=l,M=c,I=u;if(!t.isMounted)if(s)b=p||l,M=m||c,I=S||u;else return;let N=!1;const U=C[zo]=F=>{N||(N=!0,F?P(I,[C]):P(M,[C]),A.delayedLeave&&A.delayedLeave(),C[zo]=void 0)};b?R(b,[C,U]):U()},leave(C,b){const M=String(n.key);if(C[zo]&&C[zo](!0),t.isUnmounting)return b();P(f,[C]);let I=!1;const N=C[Ci]=U=>{I||(I=!0,b(),U?P(g,[C]):P(h,[C]),C[Ci]=void 0,E[M]===n&&delete E[M])};E[M]=n,d?R(d,[C,N]):N()},clone(C){return Nc(C,e,t,i)}};return A}function bl(n){if(sl(n))return n=ci(n),n.children=null,n}function ld(n){if(!sl(n))return n;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&qe(t.default))return t.default()}}function Ca(n,e){n.shapeFlag&6&&n.component?Ca(n.component.subTree,e):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function nm(n,e=!1,t){let i=[],s=0;for(let r=0;r<n.length;r++){let o=n[r];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:r);o.type===nn?(o.patchFlag&128&&s++,i=i.concat(nm(o.children,e,a))):(e||o.type!==Mn)&&i.push(a!=null?ci(o,{key:a}):o)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}/*! #__NO_SIDE_EFFECTS__ */function gv(n,e){return qe(n)?wt({name:n.name},e,{setup:n}):n}const Jr=n=>!!n.type.__asyncLoader,sl=n=>n.type.__isKeepAlive,_v={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(n,{slots:e}){const t=Ft(),i=t.ctx;if(!i.renderer)return()=>{const S=e.default&&e.default();return S&&S.length===1?S[0]:S};const s=new Map,r=new Set;let o=null;const a=t.suspense,{renderer:{p:l,m:c,um:u,o:{createElement:f}}}=i,d=f("div");i.activate=(S,y,E,P,R)=>{const A=S.component;c(S,y,E,0,a),l(A.vnode,S,y,E,A,a,P,S.slotScopeIds,R),Bt(()=>{A.isDeactivated=!1,A.a&&Zr(A.a);const C=S.props&&S.props.onVnodeMounted;C&&xn(C,A.parent,S)},a)},i.deactivate=S=>{const y=S.component;c(S,d,null,1,a),Bt(()=>{y.da&&Zr(y.da);const E=S.props&&S.props.onVnodeUnmounted;E&&xn(E,y.parent,S),y.isDeactivated=!0},a)};function h(S){El(S),u(S,t,a,!0)}function g(S){s.forEach((y,E)=>{const P=Gc(y.type);P&&(!S||!S(P))&&_(E)})}function _(S){const y=s.get(S);!o||!Ni(y,o)?h(y):o&&El(o),s.delete(S),r.delete(S)}Ut(()=>[n.include,n.exclude],([S,y])=>{S&&g(E=>Vr(S,E)),y&&g(E=>!Vr(y,E))},{flush:"post",deep:!0});let p=null;const m=()=>{p!=null&&s.set(p,Tl(t.subTree))};return As(m),sm(m),In(()=>{s.forEach(S=>{const{subTree:y,suspense:E}=t,P=Tl(y);if(S.type===P.type&&S.key===P.key){El(P);const R=P.component.da;R&&Bt(R,E);return}h(S)})}),()=>{if(p=null,!e.default)return null;const S=e.default(),y=S[0];if(S.length>1)return o=null,S;if(!La(y)||!(y.shapeFlag&4)&&!(y.shapeFlag&128))return o=null,y;let E=Tl(y);const P=E.type,R=Gc(Jr(E)?E.type.__asyncResolved||{}:P),{include:A,exclude:C,max:b}=n;if(A&&(!R||!Vr(A,R))||C&&R&&Vr(C,R))return o=E,y;const M=E.key==null?P:E.key,I=s.get(M);return E.el&&(E=ci(E),y.shapeFlag&128&&(y.ssContent=E)),p=M,I?(E.el=I.el,E.component=I.component,E.transition&&Ca(E,E.transition),E.shapeFlag|=512,r.delete(M),r.add(M)):(r.add(M),b&&r.size>parseInt(b,10)&&_(r.values().next().value)),E.shapeFlag|=256,o=E,Yp(y.type)?y:E}}},vv=_v;function Vr(n,e){return ke(n)?n.some(t=>Vr(t,e)):At(n)?n.split(",").includes(e):o_(n)?n.test(e):!1}function xv(n,e){im(n,"a",e)}function Eu(n,e){im(n,"da",e)}function im(n,e,t=Nt){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(rl(e,i,t),t){let s=t.parent;for(;s&&s.parent;)sl(s.parent.vnode)&&yv(i,e,t,s),s=s.parent}}function yv(n,e,t,i){const s=rl(e,n,i,!0);ol(()=>{fu(i[e],s)},t)}function El(n){n.shapeFlag&=-257,n.shapeFlag&=-513}function Tl(n){return n.shapeFlag&128?n.ssContent:n}function rl(n,e,t=Nt,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;ji();const a=wo(t),l=bn(e,t,n,o);return a(),$i(),l});return i?s.unshift(r):s.push(r),r}}const fi=n=>(e,t=Nt)=>(!ll||n==="sp")&&rl(n,(...i)=>e(...i),t),Sv=fi("bm"),As=fi("m"),Mv=fi("bu"),sm=fi("u"),In=fi("bum"),ol=fi("um"),bv=fi("sp"),Ev=fi("rtg"),Tv=fi("rtc");function wv(n,e=Nt){rl("ec",n,e)}const Uc=n=>n?xm(n)?cl(n)||n.proxy:Uc(n.parent):null,Qr=wt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Uc(n.parent),$root:n=>Uc(n.root),$emit:n=>n.emit,$options:n=>Tu(n),$forceUpdate:n=>n.f||(n.f=()=>{n.effect.dirty=!0,bu(n.update)}),$nextTick:n=>n.n||(n.n=Ts.bind(n.proxy)),$watch:n=>fv.bind(n)}),wl=(n,e)=>n!==ht&&!n.__isScriptSetup&&et(n,e),Av={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;let c;if(e[0]!=="$"){const h=o[e];if(h!==void 0)switch(h){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(wl(i,e))return o[e]=1,i[e];if(s!==ht&&et(s,e))return o[e]=2,s[e];if((c=n.propsOptions[0])&&et(c,e))return o[e]=3,r[e];if(t!==ht&&et(t,e))return o[e]=4,t[e];Oc&&(o[e]=0)}}const u=Qr[e];let f,d;if(u)return e==="$attrs"&&rn(n.attrs,"get",""),u(n);if((f=a.__cssModules)&&(f=f[e]))return f;if(t!==ht&&et(t,e))return o[e]=4,t[e];if(d=l.config.globalProperties,et(d,e))return d[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return wl(s,e)?(s[e]=t,!0):i!==ht&&et(i,e)?(i[e]=t,!0):et(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!t[o]||n!==ht&&et(n,o)||wl(e,o)||(a=r[0])&&et(a,o)||et(i,o)||et(Qr,o)||et(s.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:et(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function cd(n){return ke(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Oc=!0;function Rv(n){const e=Tu(n),t=n.proxy,i=n.ctx;Oc=!1,e.beforeCreate&&ud(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:h,updated:g,activated:_,deactivated:p,beforeDestroy:m,beforeUnmount:S,destroyed:y,unmounted:E,render:P,renderTracked:R,renderTriggered:A,errorCaptured:C,serverPrefetch:b,expose:M,inheritAttrs:I,components:N,directives:U,filters:F}=e;if(c&&Cv(c,i,null),o)for(const te in o){const q=o[te];qe(q)&&(i[te]=q.bind(t))}if(s){const te=s.call(t,t);xt(te)&&(n.data=Mr(te))}if(Oc=!0,r)for(const te in r){const q=r[te],me=qe(q)?q.bind(t,t):qe(q.get)?q.get.bind(t,t):Sn,Se=!qe(q)&&qe(q.set)?q.set.bind(t):Sn,ye=_e({get:me,set:Se});Object.defineProperty(i,te,{enumerable:!0,configurable:!0,get:()=>ye.value,set:Ie=>ye.value=Ie})}if(a)for(const te in a)rm(a[te],i,t,te);if(l){const te=qe(l)?l.call(t):l;Reflect.ownKeys(te).forEach(q=>{Uv(q,te[q])})}u&&ud(u,n,"c");function G(te,q){ke(q)?q.forEach(me=>te(me.bind(t))):q&&te(q.bind(t))}if(G(Sv,f),G(As,d),G(Mv,h),G(sm,g),G(xv,_),G(Eu,p),G(wv,C),G(Tv,R),G(Ev,A),G(In,S),G(ol,E),G(bv,b),ke(M))if(M.length){const te=n.exposed||(n.exposed={});M.forEach(q=>{Object.defineProperty(te,q,{get:()=>t[q],set:me=>t[q]=me})})}else n.exposed||(n.exposed={});P&&n.render===Sn&&(n.render=P),I!=null&&(n.inheritAttrs=I),N&&(n.components=N),U&&(n.directives=U)}function Cv(n,e,t=Sn){ke(n)&&(n=Fc(n));for(const i in n){const s=n[i];let r;xt(s)?"default"in s?r=eo(s.from||i,s.default,!0):r=eo(s.from||i):r=eo(s),St(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function ud(n,e,t){bn(ke(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function rm(n,e,t,i){const s=i.includes(".")?Jp(t,i):()=>t[i];if(At(n)){const r=e[n];qe(r)&&Ut(s,r)}else if(qe(n))Ut(s,n.bind(t));else if(xt(n))if(ke(n))n.forEach(r=>rm(r,e,t,i));else{const r=qe(n.handler)?n.handler.bind(t):e[n.handler];qe(r)&&Ut(s,r,n)}}function Tu(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(c=>Pa(l,c,o,!0)),Pa(l,e,o)),xt(e)&&r.set(e,l),l}function Pa(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&Pa(n,r,t,!0),s&&s.forEach(o=>Pa(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=Pv[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const Pv={data:dd,props:fd,emits:fd,methods:Gr,computed:Gr,beforeCreate:Yt,created:Yt,beforeMount:Yt,mounted:Yt,beforeUpdate:Yt,updated:Yt,beforeDestroy:Yt,beforeUnmount:Yt,destroyed:Yt,unmounted:Yt,activated:Yt,deactivated:Yt,errorCaptured:Yt,serverPrefetch:Yt,components:Gr,directives:Gr,watch:Iv,provide:dd,inject:Lv};function dd(n,e){return e?n?function(){return wt(qe(n)?n.call(this,this):n,qe(e)?e.call(this,this):e)}:e:n}function Lv(n,e){return Gr(Fc(n),Fc(e))}function Fc(n){if(ke(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Yt(n,e){return n?[...new Set([].concat(n,e))]:e}function Gr(n,e){return n?wt(Object.create(null),n,e):e}function fd(n,e){return n?ke(n)&&ke(e)?[...new Set([...n,...e])]:wt(Object.create(null),cd(n),cd(e??{})):e}function Iv(n,e){if(!n)return e;if(!e)return n;const t=wt(Object.create(null),n);for(const i in e)t[i]=Yt(n[i],e[i]);return t}function om(){return{app:null,config:{isNativeTag:i_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Dv=0;function Nv(n,e){return function(i,s=null){qe(i)||(i=wt({},i)),s!=null&&!xt(s)&&(s=null);const r=om(),o=new WeakSet;let a=!1;const l=r.app={_uid:Dv++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:cx,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&qe(c.install)?(o.add(c),c.install(l,...u)):qe(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,f){if(!a){const d=Le(i,s);return d.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),u&&e?e(d,c):n(d,c,f),a=!0,l._container=c,c.__vue_app__=l,cl(d.component)||d.component.proxy}},unmount(){a&&(n(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l},runWithContext(c){const u=ir;ir=l;try{return c()}finally{ir=u}}};return l}}let ir=null;function Uv(n,e){if(Nt){let t=Nt.provides;const i=Nt.parent&&Nt.parent.provides;i===t&&(t=Nt.provides=Object.create(i)),t[n]=e}}function eo(n,e,t=!1){const i=Nt||Xt;if(i||ir){const s=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:ir._context.provides;if(s&&n in s)return s[n];if(arguments.length>1)return t&&qe(e)?e.call(i&&i.proxy):e}}function Ov(){return!!(Nt||Xt||ir)}const am={},lm=()=>Object.create(am),cm=n=>Object.getPrototypeOf(n)===am;function Fv(n,e,t,i=!1){const s={},r=lm();n.propsDefaults=Object.create(null),um(n,e,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);t?n.props=i?s:V_(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function Bv(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=tt(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(nl(n.emitsOptions,d))continue;const h=e[d];if(l)if(et(r,d))h!==r[d]&&(r[d]=h,c=!0);else{const g=Hn(d);s[g]=Bc(l,a,g,h,n,!1)}else h!==r[d]&&(r[d]=h,c=!0)}}}else{um(n,e,s,r)&&(c=!0);let u;for(const f in a)(!e||!et(e,f)&&((u=Sr(f))===f||!et(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(s[f]=Bc(l,a,f,void 0,n,!0)):delete s[f]);if(r!==a)for(const f in r)(!e||!et(e,f))&&(delete r[f],c=!0)}c&&ai(n.attrs,"set","")}function um(n,e,t,i){const[s,r]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(Yr(l))continue;const c=e[l];let u;s&&et(s,u=Hn(l))?!r||!r.includes(u)?t[u]=c:(a||(a={}))[u]=c:nl(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=tt(t),c=a||ht;for(let u=0;u<r.length;u++){const f=r[u];t[f]=Bc(s,l,f,c[f],n,!et(c,f))}}return o}function Bc(n,e,t,i,s,r){const o=n[t];if(o!=null){const a=et(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&qe(l)){const{propsDefaults:c}=s;if(t in c)i=c[t];else{const u=wo(s);i=c[t]=l.call(null,e),u()}}else i=l}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===Sr(t))&&(i=!0))}return i}function dm(n,e,t=!1){const i=e.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!qe(n)){const u=f=>{l=!0;const[d,h]=dm(f,e,!0);wt(o,d),h&&a.push(...h)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return xt(n)&&i.set(n,tr),tr;if(ke(r))for(let u=0;u<r.length;u++){const f=Hn(r[u]);hd(f)&&(o[f]=ht)}else if(r)for(const u in r){const f=Hn(u);if(hd(f)){const d=r[u],h=o[f]=ke(d)||qe(d)?{type:d}:wt({},d);if(h){const g=gd(Boolean,h.type),_=gd(String,h.type);h[0]=g>-1,h[1]=_<0||g<_,(g>-1||et(h,"default"))&&a.push(f)}}}const c=[o,a];return xt(n)&&i.set(n,c),c}function hd(n){return n[0]!=="$"&&!Yr(n)}function pd(n){return n===null?"null":typeof n=="function"?n.name||"":typeof n=="object"&&n.constructor&&n.constructor.name||""}function md(n,e){return pd(n)===pd(e)}function gd(n,e){return ke(e)?e.findIndex(t=>md(t,n)):qe(e)&&md(e,n)?0:-1}const fm=n=>n[0]==="_"||n==="$stable",wu=n=>ke(n)?n.map(Nn):[Nn(n)],kv=(n,e,t)=>{if(e._n)return e;const i=Rt((...s)=>wu(e(...s)),t);return i._c=!1,i},hm=(n,e,t)=>{const i=n._ctx;for(const s in n){if(fm(s))continue;const r=n[s];if(qe(r))e[s]=kv(s,r,i);else if(r!=null){const o=wu(r);e[s]=()=>o}}},pm=(n,e)=>{const t=wu(e);n.slots.default=()=>t},zv=(n,e)=>{const t=n.slots=lm();if(n.vnode.shapeFlag&32){const i=e._;i?(wt(t,e),bp(t,"_",i,!0)):hm(e,t)}else e&&pm(n,e)},Hv=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,o=ht;if(i.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:(wt(s,e),!t&&a===1&&delete s._):(r=!e.$stable,hm(e,s)),o=e}else e&&(pm(n,e),o={default:1});if(r)for(const a in s)!fm(a)&&o[a]==null&&delete s[a]};function kc(n,e,t,i,s=!1){if(ke(n)){n.forEach((d,h)=>kc(d,e&&(ke(e)?e[h]:e),t,i,s));return}if(Jr(i)&&!s)return;const r=i.shapeFlag&4?cl(i.component)||i.component.proxy:i.el,o=s?null:r,{i:a,r:l}=n,c=e&&e.r,u=a.refs===ht?a.refs={}:a.refs,f=a.setupState;if(c!=null&&c!==l&&(At(c)?(u[c]=null,et(f,c)&&(f[c]=null)):St(c)&&(c.value=null)),qe(l))Hi(l,a,12,[o,u]);else{const d=At(l),h=St(l);if(d||h){const g=()=>{if(n.f){const _=d?et(f,l)?f[l]:u[l]:l.value;s?ke(_)&&fu(_,r):ke(_)?_.includes(r)||_.push(r):d?(u[l]=[r],et(f,l)&&(f[l]=u[l])):(l.value=[r],n.k&&(u[n.k]=l.value))}else d?(u[l]=o,et(f,l)&&(f[l]=o)):h&&(l.value=o,n.k&&(u[n.k]=o))};o?(g.id=-1,Bt(g,t)):g()}}}const Bt=cv;function Vv(n){return Gv(n)}function Gv(n,e){const t=Ep();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:h=Sn,insertStaticContent:g}=n,_=(L,O,H,Q=null,J=null,ie=null,fe=void 0,T=null,v=!!O.dynamicChildren)=>{if(L===O)return;L&&!Ni(L,O)&&(Q=ce(L),Ie(L,J,ie,!0),L=null),O.patchFlag===-2&&(v=!1,O.dynamicChildren=null);const{type:D,ref:V,shapeFlag:K}=O;switch(D){case al:p(L,O,H,Q);break;case Mn:m(L,O,H,Q);break;case Rl:L==null&&S(O,H,Q,fe);break;case nn:N(L,O,H,Q,J,ie,fe,T,v);break;default:K&1?P(L,O,H,Q,J,ie,fe,T,v):K&6?U(L,O,H,Q,J,ie,fe,T,v):(K&64||K&128)&&D.process(L,O,H,Q,J,ie,fe,T,v,Ne)}V!=null&&J&&kc(V,L&&L.ref,ie,O||L,!O)},p=(L,O,H,Q)=>{if(L==null)i(O.el=a(O.children),H,Q);else{const J=O.el=L.el;O.children!==L.children&&c(J,O.children)}},m=(L,O,H,Q)=>{L==null?i(O.el=l(O.children||""),H,Q):O.el=L.el},S=(L,O,H,Q)=>{[L.el,L.anchor]=g(L.children,O,H,Q,L.el,L.anchor)},y=({el:L,anchor:O},H,Q)=>{let J;for(;L&&L!==O;)J=d(L),i(L,H,Q),L=J;i(O,H,Q)},E=({el:L,anchor:O})=>{let H;for(;L&&L!==O;)H=d(L),s(L),L=H;s(O)},P=(L,O,H,Q,J,ie,fe,T,v)=>{O.type==="svg"?fe="svg":O.type==="math"&&(fe="mathml"),L==null?R(O,H,Q,J,ie,fe,T,v):b(L,O,J,ie,fe,T,v)},R=(L,O,H,Q,J,ie,fe,T)=>{let v,D;const{props:V,shapeFlag:K,transition:$,dirs:ue}=L;if(v=L.el=o(L.type,ie,V&&V.is,V),K&8?u(v,L.children):K&16&&C(L.children,v,null,Q,J,Al(L,ie),fe,T),ue&&es(L,null,Q,"created"),A(v,L,L.scopeId,fe,Q),V){for(const ae in V)ae!=="value"&&!Yr(ae)&&r(v,ae,null,V[ae],ie,L.children,Q,J,oe);"value"in V&&r(v,"value",null,V.value,ie),(D=V.onVnodeBeforeMount)&&xn(D,Q,L)}ue&&es(L,null,Q,"beforeMount");const re=Wv(J,$);re&&$.beforeEnter(v),i(v,O,H),((D=V&&V.onVnodeMounted)||re||ue)&&Bt(()=>{D&&xn(D,Q,L),re&&$.enter(v),ue&&es(L,null,Q,"mounted")},J)},A=(L,O,H,Q,J)=>{if(H&&h(L,H),Q)for(let ie=0;ie<Q.length;ie++)h(L,Q[ie]);if(J){let ie=J.subTree;if(O===ie){const fe=J.vnode;A(L,fe,fe.scopeId,fe.slotScopeIds,J.parent)}}},C=(L,O,H,Q,J,ie,fe,T,v=0)=>{for(let D=v;D<L.length;D++){const V=L[D]=T?Pi(L[D]):Nn(L[D]);_(null,V,O,H,Q,J,ie,fe,T)}},b=(L,O,H,Q,J,ie,fe)=>{const T=O.el=L.el;let{patchFlag:v,dynamicChildren:D,dirs:V}=O;v|=L.patchFlag&16;const K=L.props||ht,$=O.props||ht;let ue;if(H&&ts(H,!1),(ue=$.onVnodeBeforeUpdate)&&xn(ue,H,O,L),V&&es(O,L,H,"beforeUpdate"),H&&ts(H,!0),D?M(L.dynamicChildren,D,T,H,Q,Al(O,J),ie):fe||q(L,O,T,null,H,Q,Al(O,J),ie,!1),v>0){if(v&16)I(T,O,K,$,H,Q,J);else if(v&2&&K.class!==$.class&&r(T,"class",null,$.class,J),v&4&&r(T,"style",K.style,$.style,J),v&8){const re=O.dynamicProps;for(let ae=0;ae<re.length;ae++){const Ee=re[ae],le=K[Ee],Me=$[Ee];(Me!==le||Ee==="value")&&r(T,Ee,le,Me,J,L.children,H,Q,oe)}}v&1&&L.children!==O.children&&u(T,O.children)}else!fe&&D==null&&I(T,O,K,$,H,Q,J);((ue=$.onVnodeUpdated)||V)&&Bt(()=>{ue&&xn(ue,H,O,L),V&&es(O,L,H,"updated")},Q)},M=(L,O,H,Q,J,ie,fe)=>{for(let T=0;T<O.length;T++){const v=L[T],D=O[T],V=v.el&&(v.type===nn||!Ni(v,D)||v.shapeFlag&70)?f(v.el):H;_(v,D,V,null,Q,J,ie,fe,!0)}},I=(L,O,H,Q,J,ie,fe)=>{if(H!==Q){if(H!==ht)for(const T in H)!Yr(T)&&!(T in Q)&&r(L,T,H[T],null,fe,O.children,J,ie,oe);for(const T in Q){if(Yr(T))continue;const v=Q[T],D=H[T];v!==D&&T!=="value"&&r(L,T,D,v,fe,O.children,J,ie,oe)}"value"in Q&&r(L,"value",H.value,Q.value,fe)}},N=(L,O,H,Q,J,ie,fe,T,v)=>{const D=O.el=L?L.el:a(""),V=O.anchor=L?L.anchor:a("");let{patchFlag:K,dynamicChildren:$,slotScopeIds:ue}=O;ue&&(T=T?T.concat(ue):ue),L==null?(i(D,H,Q),i(V,H,Q),C(O.children||[],H,V,J,ie,fe,T,v)):K>0&&K&64&&$&&L.dynamicChildren?(M(L.dynamicChildren,$,H,J,ie,fe,T),(O.key!=null||J&&O===J.subTree)&&Au(L,O,!0)):q(L,O,H,V,J,ie,fe,T,v)},U=(L,O,H,Q,J,ie,fe,T,v)=>{O.slotScopeIds=T,L==null?O.shapeFlag&512?J.ctx.activate(O,H,Q,fe,v):F(O,H,Q,J,ie,fe,v):X(L,O,v)},F=(L,O,H,Q,J,ie,fe)=>{const T=L.component=ix(L,Q,J);if(sl(L)&&(T.ctx.renderer=Ne),sx(T),T.asyncDep){if(J&&J.registerDep(T,G),!L.el){const v=T.subTree=Le(Mn);m(null,v,O,H)}}else G(T,L,O,H,J,ie,fe)},X=(L,O,H)=>{const Q=O.component=L.component;if(sv(L,O,H))if(Q.asyncDep&&!Q.asyncResolved){te(Q,O,H);return}else Q.next=O,J_(Q.update),Q.effect.dirty=!0,Q.update();else O.el=L.el,Q.vnode=O},G=(L,O,H,Q,J,ie,fe)=>{const T=()=>{if(L.isMounted){let{next:V,bu:K,u:$,parent:ue,vnode:re}=L;{const He=mm(L);if(He){V&&(V.el=re.el,te(L,V,fe)),He.asyncDep.then(()=>{L.isUnmounted||T()});return}}let ae=V,Ee;ts(L,!1),V?(V.el=re.el,te(L,V,fe)):V=re,K&&Zr(K),(Ee=V.props&&V.props.onVnodeBeforeUpdate)&&xn(Ee,ue,V,re),ts(L,!0);const le=Ml(L),Me=L.subTree;L.subTree=le,_(Me,le,f(Me.el),ce(Me),L,J,ie),V.el=le.el,ae===null&&rv(L,le.el),$&&Bt($,J),(Ee=V.props&&V.props.onVnodeUpdated)&&Bt(()=>xn(Ee,ue,V,re),J)}else{let V;const{el:K,props:$}=O,{bm:ue,m:re,parent:ae}=L,Ee=Jr(O);if(ts(L,!1),ue&&Zr(ue),!Ee&&(V=$&&$.onVnodeBeforeMount)&&xn(V,ae,O),ts(L,!0),K&&Xe){const le=()=>{L.subTree=Ml(L),Xe(K,L.subTree,L,J,null)};Ee?O.type.__asyncLoader().then(()=>!L.isUnmounted&&le()):le()}else{const le=L.subTree=Ml(L);_(null,le,H,Q,L,J,ie),O.el=le.el}if(re&&Bt(re,J),!Ee&&(V=$&&$.onVnodeMounted)){const le=O;Bt(()=>xn(V,ae,le),J)}(O.shapeFlag&256||ae&&Jr(ae.vnode)&&ae.vnode.shapeFlag&256)&&L.a&&Bt(L.a,J),L.isMounted=!0,O=H=Q=null}},v=L.effect=new mu(T,Sn,()=>bu(D),L.scope),D=L.update=()=>{v.dirty&&v.run()};D.id=L.uid,ts(L,!0),D()},te=(L,O,H)=>{O.component=L;const Q=L.vnode.props;L.vnode=O,L.next=null,Bv(L,O.props,Q,H),Hv(L,O.children,H),ji(),rd(L),$i()},q=(L,O,H,Q,J,ie,fe,T,v=!1)=>{const D=L&&L.children,V=L?L.shapeFlag:0,K=O.children,{patchFlag:$,shapeFlag:ue}=O;if($>0){if($&128){Se(D,K,H,Q,J,ie,fe,T,v);return}else if($&256){me(D,K,H,Q,J,ie,fe,T,v);return}}ue&8?(V&16&&oe(D,J,ie),K!==D&&u(H,K)):V&16?ue&16?Se(D,K,H,Q,J,ie,fe,T,v):oe(D,J,ie,!0):(V&8&&u(H,""),ue&16&&C(K,H,Q,J,ie,fe,T,v))},me=(L,O,H,Q,J,ie,fe,T,v)=>{L=L||tr,O=O||tr;const D=L.length,V=O.length,K=Math.min(D,V);let $;for($=0;$<K;$++){const ue=O[$]=v?Pi(O[$]):Nn(O[$]);_(L[$],ue,H,null,J,ie,fe,T,v)}D>V?oe(L,J,ie,!0,!1,K):C(O,H,Q,J,ie,fe,T,v,K)},Se=(L,O,H,Q,J,ie,fe,T,v)=>{let D=0;const V=O.length;let K=L.length-1,$=V-1;for(;D<=K&&D<=$;){const ue=L[D],re=O[D]=v?Pi(O[D]):Nn(O[D]);if(Ni(ue,re))_(ue,re,H,null,J,ie,fe,T,v);else break;D++}for(;D<=K&&D<=$;){const ue=L[K],re=O[$]=v?Pi(O[$]):Nn(O[$]);if(Ni(ue,re))_(ue,re,H,null,J,ie,fe,T,v);else break;K--,$--}if(D>K){if(D<=$){const ue=$+1,re=ue<V?O[ue].el:Q;for(;D<=$;)_(null,O[D]=v?Pi(O[D]):Nn(O[D]),H,re,J,ie,fe,T,v),D++}}else if(D>$)for(;D<=K;)Ie(L[D],J,ie,!0),D++;else{const ue=D,re=D,ae=new Map;for(D=re;D<=$;D++){const Re=O[D]=v?Pi(O[D]):Nn(O[D]);Re.key!=null&&ae.set(Re.key,D)}let Ee,le=0;const Me=$-re+1;let He=!1,Ue=0;const ve=new Array(Me);for(D=0;D<Me;D++)ve[D]=0;for(D=ue;D<=K;D++){const Re=L[D];if(le>=Me){Ie(Re,J,ie,!0);continue}let Qe;if(Re.key!=null)Qe=ae.get(Re.key);else for(Ee=re;Ee<=$;Ee++)if(ve[Ee-re]===0&&Ni(Re,O[Ee])){Qe=Ee;break}Qe===void 0?Ie(Re,J,ie,!0):(ve[Qe-re]=D+1,Qe>=Ue?Ue=Qe:He=!0,_(Re,O[Qe],H,null,J,ie,fe,T,v),le++)}const Ve=He?qv(ve):tr;for(Ee=Ve.length-1,D=Me-1;D>=0;D--){const Re=re+D,Qe=O[Re],x=Re+1<V?O[Re+1].el:Q;ve[D]===0?_(null,Qe,H,x,J,ie,fe,T,v):He&&(Ee<0||D!==Ve[Ee]?ye(Qe,H,x,2):Ee--)}}},ye=(L,O,H,Q,J=null)=>{const{el:ie,type:fe,transition:T,children:v,shapeFlag:D}=L;if(D&6){ye(L.component.subTree,O,H,Q);return}if(D&128){L.suspense.move(O,H,Q);return}if(D&64){fe.move(L,O,H,Ne);return}if(fe===nn){i(ie,O,H);for(let K=0;K<v.length;K++)ye(v[K],O,H,Q);i(L.anchor,O,H);return}if(fe===Rl){y(L,O,H);return}if(Q!==2&&D&1&&T)if(Q===0)T.beforeEnter(ie),i(ie,O,H),Bt(()=>T.enter(ie),J);else{const{leave:K,delayLeave:$,afterLeave:ue}=T,re=()=>i(ie,O,H),ae=()=>{K(ie,()=>{re(),ue&&ue()})};$?$(ie,re,ae):ae()}else i(ie,O,H)},Ie=(L,O,H,Q=!1,J=!1)=>{const{type:ie,props:fe,ref:T,children:v,dynamicChildren:D,shapeFlag:V,patchFlag:K,dirs:$}=L;if(T!=null&&kc(T,null,H,L,!0),V&256){O.ctx.deactivate(L);return}const ue=V&1&&$,re=!Jr(L);let ae;if(re&&(ae=fe&&fe.onVnodeBeforeUnmount)&&xn(ae,O,L),V&6)he(L.component,H,Q);else{if(V&128){L.suspense.unmount(H,Q);return}ue&&es(L,null,O,"beforeUnmount"),V&64?L.type.remove(L,O,H,J,Ne,Q):D&&(ie!==nn||K>0&&K&64)?oe(D,O,H,!1,!0):(ie===nn&&K&384||!J&&V&16)&&oe(v,O,H),Q&&Ze(L)}(re&&(ae=fe&&fe.onVnodeUnmounted)||ue)&&Bt(()=>{ae&&xn(ae,O,L),ue&&es(L,null,O,"unmounted")},H)},Ze=L=>{const{type:O,el:H,anchor:Q,transition:J}=L;if(O===nn){se(H,Q);return}if(O===Rl){E(L);return}const ie=()=>{s(H),J&&!J.persisted&&J.afterLeave&&J.afterLeave()};if(L.shapeFlag&1&&J&&!J.persisted){const{leave:fe,delayLeave:T}=J,v=()=>fe(H,ie);T?T(L.el,ie,v):v()}else ie()},se=(L,O)=>{let H;for(;L!==O;)H=d(L),s(L),L=H;s(O)},he=(L,O,H)=>{const{bum:Q,scope:J,update:ie,subTree:fe,um:T}=L;Q&&Zr(Q),J.stop(),ie&&(ie.active=!1,Ie(fe,L,O,H)),T&&Bt(T,O),Bt(()=>{L.isUnmounted=!0},O),O&&O.pendingBranch&&!O.isUnmounted&&L.asyncDep&&!L.asyncResolved&&L.suspenseId===O.pendingId&&(O.deps--,O.deps===0&&O.resolve())},oe=(L,O,H,Q=!1,J=!1,ie=0)=>{for(let fe=ie;fe<L.length;fe++)Ie(L[fe],O,H,Q,J)},ce=L=>L.shapeFlag&6?ce(L.component.subTree):L.shapeFlag&128?L.suspense.next():d(L.anchor||L.el);let De=!1;const pe=(L,O,H)=>{L==null?O._vnode&&Ie(O._vnode,null,null,!0):_(O._vnode||null,L,O,null,null,null,H),De||(De=!0,rd(),jp(),De=!1),O._vnode=L},Ne={p:_,um:Ie,m:ye,r:Ze,mt:F,mc:C,pc:q,pbc:M,n:ce,o:n};let B,Xe;return{render:pe,hydrate:B,createApp:Nv(pe,B)}}function Al({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function ts({effect:n,update:e},t){n.allowRecurse=e.allowRecurse=t}function Wv(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Au(n,e,t=!1){const i=n.children,s=e.children;if(ke(i)&&ke(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Pi(s[r]),a.el=o.el),t||Au(o,a)),a.type===al&&(a.el=o.el)}}function qv(n){const e=n.slice(),t=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=t[t.length-1],n[s]<c){e[i]=s,t.push(i);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,n[t[a]]<c?r=a+1:o=a;c<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}function mm(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:mm(e)}const Xv=n=>n.__isTeleport,to=n=>n&&(n.disabled||n.disabled===""),_d=n=>typeof SVGElement<"u"&&n instanceof SVGElement,vd=n=>typeof MathMLElement=="function"&&n instanceof MathMLElement,zc=(n,e)=>{const t=n&&n.to;return At(t)?e?e(t):null:t},jv={name:"Teleport",__isTeleport:!0,process(n,e,t,i,s,r,o,a,l,c){const{mc:u,pc:f,pbc:d,o:{insert:h,querySelector:g,createText:_,createComment:p}}=c,m=to(e.props);let{shapeFlag:S,children:y,dynamicChildren:E}=e;if(n==null){const P=e.el=_(""),R=e.anchor=_("");h(P,t,i),h(R,t,i);const A=e.target=zc(e.props,g),C=e.targetAnchor=_("");A&&(h(C,A),o==="svg"||_d(A)?o="svg":(o==="mathml"||vd(A))&&(o="mathml"));const b=(M,I)=>{S&16&&u(y,M,I,s,r,o,a,l)};m?b(t,R):A&&b(A,C)}else{e.el=n.el;const P=e.anchor=n.anchor,R=e.target=n.target,A=e.targetAnchor=n.targetAnchor,C=to(n.props),b=C?t:R,M=C?P:A;if(o==="svg"||_d(R)?o="svg":(o==="mathml"||vd(R))&&(o="mathml"),E?(d(n.dynamicChildren,E,b,s,r,o,a),Au(n,e,!0)):l||f(n,e,b,M,s,r,o,a,!1),m)C?e.props&&n.props&&e.props.to!==n.props.to&&(e.props.to=n.props.to):Ho(e,t,P,c,1);else if((e.props&&e.props.to)!==(n.props&&n.props.to)){const I=e.target=zc(e.props,g);I&&Ho(e,I,null,c,0)}else C&&Ho(e,R,A,c,1)}gm(e)},remove(n,e,t,i,{um:s,o:{remove:r}},o){const{shapeFlag:a,children:l,anchor:c,targetAnchor:u,target:f,props:d}=n;if(f&&r(u),o&&r(c),a&16){const h=o||!to(d);for(let g=0;g<l.length;g++){const _=l[g];s(_,e,t,h,!!_.dynamicChildren)}}},move:Ho,hydrate:$v};function Ho(n,e,t,{o:{insert:i},m:s},r=2){r===0&&i(n.targetAnchor,e,t);const{el:o,anchor:a,shapeFlag:l,children:c,props:u}=n,f=r===2;if(f&&i(o,e,t),(!f||to(u))&&l&16)for(let d=0;d<c.length;d++)s(c[d],e,t,2);f&&i(a,e,t)}function $v(n,e,t,i,s,r,{o:{nextSibling:o,parentNode:a,querySelector:l}},c){const u=e.target=zc(e.props,l);if(u){const f=u._lpa||u.firstChild;if(e.shapeFlag&16)if(to(e.props))e.anchor=c(o(n),e,a(n),t,i,s,r),e.targetAnchor=f;else{e.anchor=o(n);let d=f;for(;d;)if(d=o(d),d&&d.nodeType===8&&d.data==="teleport anchor"){e.targetAnchor=d,u._lpa=e.targetAnchor&&o(e.targetAnchor);break}c(f,e,u,t,i,s,r)}gm(e)}return e.anchor&&o(e.anchor)}const Kv=jv;function gm(n){const e=n.ctx;if(e&&e.ut){let t=n.children[0].el;for(;t&&t!==n.targetAnchor;)t.nodeType===1&&t.setAttribute("data-v-owner",e.uid),t=t.nextSibling;e.ut()}}const nn=Symbol.for("v-fgt"),al=Symbol.for("v-txt"),Mn=Symbol.for("v-cmt"),Rl=Symbol.for("v-stc"),no=[];let Cn=null;function yt(n=!1){no.push(Cn=n?null:[])}function Yv(){no.pop(),Cn=no[no.length-1]||null}let mo=1;function xd(n){mo+=n}function _m(n){return n.dynamicChildren=mo>0?Cn||tr:null,Yv(),mo>0&&Cn&&Cn.push(n),n}function Dt(n,e,t,i,s,r){return _m(Ye(n,e,t,i,s,r,!0))}function Hc(n,e,t,i,s){return _m(Le(n,e,t,i,s,!0))}function La(n){return n?n.__v_isVNode===!0:!1}function Ni(n,e){return n.type===e.type&&n.key===e.key}const vm=({key:n})=>n??null,Sa=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?At(n)||St(n)||qe(n)?{i:Xt,r:n,k:e,f:!!t}:n:null);function Ye(n,e=null,t=null,i=0,s=null,r=n===nn?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&vm(e),ref:e&&Sa(e),scopeId:il,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Xt};return a?(Ru(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=At(t)?8:16),mo>0&&!o&&Cn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Cn.push(l),l}const Le=Zv;function Zv(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===av)&&(n=Mn),La(n)){const a=ci(n,e,!0);return t&&Ru(a,t),mo>0&&!r&&Cn&&(a.shapeFlag&6?Cn[Cn.indexOf(n)]=a:Cn.push(a)),a.patchFlag|=-2,a}if(lx(n)&&(n=n.__vccOpts),e){e=Jv(e);let{class:a,style:l}=e;a&&!At(a)&&(e.class=Dn(a)),xt(l)&&(Hp(l)&&!ke(l)&&(l=wt({},l)),e.style=pu(l))}const o=At(n)?1:Yp(n)?128:Xv(n)?64:xt(n)?4:qe(n)?2:0;return Ye(n,e,t,i,s,o,r,!0)}function Jv(n){return n?Hp(n)||cm(n)?wt({},n):n:null}function ci(n,e,t=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,c=e?ex(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&vm(c),ref:e&&e.ref?t&&r?ke(r)?r.concat(Sa(e)):[r,Sa(e)]:Sa(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==nn?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&ci(n.ssContent),ssFallback:n.ssFallback&&ci(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&(u.transition=l.clone(u)),u}function Ui(n=" ",e=0){return Le(al,null,n,e)}function Qv(n="",e=!1){return e?(yt(),Hc(Mn,null,n)):Le(Mn,null,n)}function Nn(n){return n==null||typeof n=="boolean"?Le(Mn):ke(n)?Le(nn,null,n.slice()):typeof n=="object"?Pi(n):Le(al,null,String(n))}function Pi(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:ci(n)}function Ru(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(ke(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),Ru(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!cm(e)?e._ctx=Xt:s===3&&Xt&&(Xt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else qe(e)?(e={default:e,_ctx:Xt},t=32):(e=String(e),i&64?(t=16,e=[Ui(e)]):t=8);n.children=e,n.shapeFlag|=t}function ex(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=Dn([e.class,i.class]));else if(s==="style")e.style=pu([e.style,i.style]);else if(Za(s)){const r=e[s],o=i[s];o&&r!==o&&!(ke(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function xn(n,e,t,i=null){bn(n,e,7,[t,i])}const tx=om();let nx=0;function ix(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||tx,r={uid:nx++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new wp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:dm(i,s),emitsOptions:Kp(i,s),emit:null,emitted:null,propsDefaults:ht,inheritAttrs:i.inheritAttrs,ctx:ht,data:ht,props:ht,attrs:ht,slots:ht,refs:ht,setupState:ht,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=tv.bind(null,r),n.ce&&n.ce(r),r}let Nt=null;const Ft=()=>Nt||Xt;let Ia,Vc;{const n=Ep(),e=(t,i)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};Ia=e("__VUE_INSTANCE_SETTERS__",t=>Nt=t),Vc=e("__VUE_SSR_SETTERS__",t=>ll=t)}const wo=n=>{const e=Nt;return Ia(n),n.scope.on(),()=>{n.scope.off(),Ia(e)}},yd=()=>{Nt&&Nt.scope.off(),Ia(null)};function xm(n){return n.vnode.shapeFlag&4}let ll=!1;function sx(n,e=!1){e&&Vc(e);const{props:t,children:i}=n.vnode,s=xm(n);Fv(n,t,s,e),zv(n,i);const r=s?rx(n,e):void 0;return e&&Vc(!1),r}function rx(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Av);const{setup:i}=t;if(i){const s=n.setupContext=i.length>1?ax(n):null,r=wo(n);ji();const o=Hi(i,n,0,[n.props,s]);if($i(),r(),Mp(o)){if(o.then(yd,yd),e)return o.then(a=>{Sd(n,a,e)}).catch(a=>{tl(a,n,0)});n.asyncDep=o}else Sd(n,o,e)}else ym(n,e)}function Sd(n,e,t){qe(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:xt(e)&&(n.setupState=Wp(e)),ym(n,t)}let Md;function ym(n,e,t){const i=n.type;if(!n.render){if(!e&&Md&&!i.render){const s=i.template||Tu(n).template;if(s){const{isCustomElement:r,compilerOptions:o}=n.appContext.config,{delimiters:a,compilerOptions:l}=i,c=wt(wt({isCustomElement:r,delimiters:a},o),l);i.render=Md(s,c)}}n.render=i.render||Sn}{const s=wo(n);ji();try{Rv(n)}finally{$i(),s()}}}const ox={get(n,e){return rn(n,"get",""),n[e]}};function ax(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,ox),slots:n.slots,emit:n.emit,expose:e}}function cl(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(Wp(To(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Qr)return Qr[t](n)},has(e,t){return t in e||t in Qr}}))}function Gc(n,e=!0){return qe(n)?n.displayName||n.name:n.name||e&&n.__name}function lx(n){return qe(n)&&"__vccOpts"in n}const _e=(n,e)=>G_(n,e,ll);function we(n,e,t){const i=arguments.length;return i===2?xt(e)&&!ke(e)?La(e)?Le(n,null,[e]):Le(n,e):Le(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&La(t)&&(t=[t]),Le(n,e,t))}const cx="3.4.27";/**
* @vue/runtime-dom v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const ux="http://www.w3.org/2000/svg",dx="http://www.w3.org/1998/Math/MathML",Li=typeof document<"u"?document:null,bd=Li&&Li.createElement("template"),fx={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e==="svg"?Li.createElementNS(ux,n):e==="mathml"?Li.createElementNS(dx,n):Li.createElement(n,t?{is:t}:void 0);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>Li.createTextNode(n),createComment:n=>Li.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Li.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const o=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{bd.innerHTML=i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n;const a=bd.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},vi="transition",Lr="animation",go=Symbol("_vtc"),ui=(n,{slots:e})=>we(mv,hx(n),e);ui.displayName="Transition";const Sm={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};ui.props=wt({},em,Sm);const ns=(n,e=[])=>{ke(n)?n.forEach(t=>t(...e)):n&&n(...e)},Ed=n=>n?ke(n)?n.some(e=>e.length>1):n.length>1:!1;function hx(n){const e={};for(const N in n)N in Sm||(e[N]=n[N]);if(n.css===!1)return e;const{name:t="v",type:i,duration:s,enterFromClass:r=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:f=`${t}-leave-from`,leaveActiveClass:d=`${t}-leave-active`,leaveToClass:h=`${t}-leave-to`}=n,g=px(s),_=g&&g[0],p=g&&g[1],{onBeforeEnter:m,onEnter:S,onEnterCancelled:y,onLeave:E,onLeaveCancelled:P,onBeforeAppear:R=m,onAppear:A=S,onAppearCancelled:C=y}=e,b=(N,U,F)=>{is(N,U?u:a),is(N,U?c:o),F&&F()},M=(N,U)=>{N._isLeaving=!1,is(N,f),is(N,h),is(N,d),U&&U()},I=N=>(U,F)=>{const X=N?A:S,G=()=>b(U,N,F);ns(X,[U,G]),Td(()=>{is(U,N?l:r),xi(U,N?u:a),Ed(X)||wd(U,i,_,G)})};return wt(e,{onBeforeEnter(N){ns(m,[N]),xi(N,r),xi(N,o)},onBeforeAppear(N){ns(R,[N]),xi(N,l),xi(N,c)},onEnter:I(!1),onAppear:I(!0),onLeave(N,U){N._isLeaving=!0;const F=()=>M(N,U);xi(N,f),xi(N,d),_x(),Td(()=>{N._isLeaving&&(is(N,f),xi(N,h),Ed(E)||wd(N,i,p,F))}),ns(E,[N,F])},onEnterCancelled(N){b(N,!1),ns(y,[N])},onAppearCancelled(N){b(N,!0),ns(C,[N])},onLeaveCancelled(N){M(N),ns(P,[N])}})}function px(n){if(n==null)return null;if(xt(n))return[Cl(n.enter),Cl(n.leave)];{const e=Cl(n);return[e,e]}}function Cl(n){return h_(n)}function xi(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[go]||(n[go]=new Set)).add(e)}function is(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const t=n[go];t&&(t.delete(e),t.size||(n[go]=void 0))}function Td(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let mx=0;function wd(n,e,t,i){const s=n._endId=++mx,r=()=>{s===n._endId&&i()};if(t)return setTimeout(r,t);const{type:o,timeout:a,propCount:l}=gx(n,e);if(!o)return i();const c=o+"end";let u=0;const f=()=>{n.removeEventListener(c,d),r()},d=h=>{h.target===n&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},a+1),n.addEventListener(c,d)}function gx(n,e){const t=window.getComputedStyle(n),i=g=>(t[g]||"").split(", "),s=i(`${vi}Delay`),r=i(`${vi}Duration`),o=Ad(s,r),a=i(`${Lr}Delay`),l=i(`${Lr}Duration`),c=Ad(a,l);let u=null,f=0,d=0;e===vi?o>0&&(u=vi,f=o,d=r.length):e===Lr?c>0&&(u=Lr,f=c,d=l.length):(f=Math.max(o,c),u=f>0?o>c?vi:Lr:null,d=u?u===vi?r.length:l.length:0);const h=u===vi&&/\b(transform|all)(,|$)/.test(i(`${vi}Property`).toString());return{type:u,timeout:f,propCount:d,hasTransform:h}}function Ad(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>Rd(t)+Rd(n[i])))}function Rd(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function _x(){return document.body.offsetHeight}function vx(n,e,t){const i=n[go];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Cd=Symbol("_vod"),xx=Symbol("_vsh"),yx=Symbol(""),Sx=/(^|;)\s*display\s*:/;function Mx(n,e,t){const i=n.style,s=At(t);let r=!1;if(t&&!s){if(e)if(At(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&Ma(i,a,"")}else for(const o in e)t[o]==null&&Ma(i,o,"");for(const o in t)o==="display"&&(r=!0),Ma(i,o,t[o])}else if(s){if(e!==t){const o=i[yx];o&&(t+=";"+o),i.cssText=t,r=Sx.test(t)}}else e&&n.removeAttribute("style");Cd in n&&(n[Cd]=r?i.display:"",n[xx]&&(i.display="none"))}const Pd=/\s*!important$/;function Ma(n,e,t){if(ke(t))t.forEach(i=>Ma(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=bx(n,e);Pd.test(t)?n.setProperty(Sr(i),t.replace(Pd,""),"important"):n[i]=t}}const Ld=["Webkit","Moz","ms"],Pl={};function bx(n,e){const t=Pl[e];if(t)return t;let i=Hn(e);if(i!=="filter"&&i in n)return Pl[e]=i;i=Qa(i);for(let s=0;s<Ld.length;s++){const r=Ld[s]+i;if(r in n)return Pl[e]=r}return e}const Id="http://www.w3.org/1999/xlink";function Ex(n,e,t,i,s){if(i&&e.startsWith("xlink:"))t==null?n.removeAttributeNS(Id,e.slice(6,e.length)):n.setAttributeNS(Id,e,t);else{const r=x_(e);t==null||r&&!Tp(t)?n.removeAttribute(e):n.setAttribute(e,r?"":t)}}function Tx(n,e,t,i,s,r,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,s,r),n[e]=t??"";return}const a=n.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){const c=a==="OPTION"?n.getAttribute("value")||"":n.value,u=t??"";(c!==u||!("_value"in n))&&(n.value=u),t==null&&n.removeAttribute(e),n._value=t;return}let l=!1;if(t===""||t==null){const c=typeof n[e];c==="boolean"?t=Tp(t):t==null&&c==="string"?(t="",l=!0):c==="number"&&(t=0,l=!0)}try{n[e]=t}catch{}l&&n.removeAttribute(e)}function wx(n,e,t,i){n.addEventListener(e,t,i)}function Ax(n,e,t,i){n.removeEventListener(e,t,i)}const Dd=Symbol("_vei");function Rx(n,e,t,i,s=null){const r=n[Dd]||(n[Dd]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=Cx(e);if(i){const c=r[e]=Ix(i,s);wx(n,a,c,l)}else o&&(Ax(n,a,o,l),r[e]=void 0)}}const Nd=/(?:Once|Passive|Capture)$/;function Cx(n){let e;if(Nd.test(n)){e={};let i;for(;i=n.match(Nd);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Sr(n.slice(2)),e]}let Ll=0;const Px=Promise.resolve(),Lx=()=>Ll||(Px.then(()=>Ll=0),Ll=Date.now());function Ix(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;bn(Dx(i,t.value),e,5,[i])};return t.value=n,t.attached=Lx(),t}function Dx(n,e){if(ke(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const Ud=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Nx=(n,e,t,i,s,r,o,a,l)=>{const c=s==="svg";e==="class"?vx(n,i,c):e==="style"?Mx(n,t,i):Za(e)?du(e)||Rx(n,e,t,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Ux(n,e,i,c))?Tx(n,e,i,r,o,a,l):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Ex(n,e,i,c))};function Ux(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Ud(e)&&qe(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Ud(e)&&At(t)?!1:e in n}const Ox=wt({patchProp:Nx},fx);let Od;function Fx(){return Od||(Od=Vv(Ox))}const Bx=(...n)=>{const e=Fx().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=zx(i);if(!s)return;const r=e._component;!qe(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const o=t(s,!1,kx(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function kx(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function zx(n){return At(n)?document.querySelector(n):n}const Ki=(n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t},Hx={},Vx=n=>(br("data-v-5993bbb0"),n=n(),Er(),n),Gx=Vx(()=>Ye("nav",{class:"row q-mt-xl"},[Ye("div",{class:"col column items-end justify-center text-h2"},"Portfolio (WIP)"),Ye("div",{class:"col-3"}),Ye("div",{class:"col column items-start justify-center text-h2"},"Welkom")],-1)),Wx=[Gx];function qx(n,e){return yt(),Dt("section",null,Wx)}const Xx=Ki(Hx,[["render",qx],["__scopeId","data-v-5993bbb0"]]),Wc={xs:18,sm:24,md:32,lg:38,xl:46},Mm={size:String};function bm(n,e=Wc){return _e(()=>n.size!==void 0?{fontSize:n.size in e?`${e[n.size]}px`:n.size}:null)}function Ao(n,e,t,i){return Object.defineProperty(n,e,{get:t,set:i,enumerable:!0}),n}function jt(n){return To(gv(n))}function Cu(n){return To(n)}const ul=(n,e)=>{const t=Mr(n);for(const i in n)Ao(e,i,()=>t[i],s=>{t[i]=s});return e};function pn(n,e){return n!==void 0&&n()||e}function Wr(n,e){return n!==void 0?e.concat(n()):e}function Em(n,e,t,i,s,r){e.key=i+s;const o=we(n,e,t);return s===!0?Qp(o,r()):o}const Fd="0 0 24 24",Bd=n=>n,Il=n=>`ionicons ${n}`,Tm={"mdi-":n=>`mdi ${n}`,"icon-":Bd,"bt-":n=>`bt ${n}`,"eva-":n=>`eva ${n}`,"ion-md":Il,"ion-ios":Il,"ion-logo":Il,"iconfont ":Bd,"ti-":n=>`themify-icon ${n}`,"bi-":n=>`bootstrap-icons ${n}`},wm={o_:"-outlined",r_:"-round",s_:"-sharp"},Am={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},jx=new RegExp("^("+Object.keys(Tm).join("|")+")"),$x=new RegExp("^("+Object.keys(wm).join("|")+")"),kd=new RegExp("^("+Object.keys(Am).join("|")+")"),Kx=/^[Mm]\s?[-+]?\.?\d/,Yx=/^img:/,Zx=/^svguse:/,Jx=/^ion-/,Qx=/^(fa-(sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /,Qs=jt({name:"QIcon",props:{...Mm,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(n,{slots:e}){const{proxy:{$q:t}}=Ft(),i=bm(n),s=_e(()=>"q-icon"+(n.left===!0?" on-left":"")+(n.right===!0?" on-right":"")+(n.color!==void 0?` text-${n.color}`:"")),r=_e(()=>{let o,a=n.name;if(a==="none"||!a)return{none:!0};if(t.iconMapFn!==null){const u=t.iconMapFn(a);if(u!==void 0)if(u.icon!==void 0){if(a=u.icon,a==="none"||!a)return{none:!0}}else return{cls:u.cls,content:u.content!==void 0?u.content:" "}}if(Kx.test(a)===!0){const[u,f=Fd]=a.split("|");return{svg:!0,viewBox:f,nodes:u.split("&&").map(d=>{const[h,g,_]=d.split("@@");return we("path",{style:g,d:h,transform:_})})}}if(Yx.test(a)===!0)return{img:!0,src:a.substring(4)};if(Zx.test(a)===!0){const[u,f=Fd]=a.split("|");return{svguse:!0,src:u.substring(7),viewBox:f}}let l=" ";const c=a.match(jx);if(c!==null)o=Tm[c[1]](a);else if(Qx.test(a)===!0)o=a;else if(Jx.test(a)===!0)o=`ionicons ion-${t.platform.is.ios===!0?"ios":"md"}${a.substring(3)}`;else if(kd.test(a)===!0){o="notranslate material-symbols";const u=a.match(kd);u!==null&&(a=a.substring(6),o+=Am[u[1]]),l=a}else{o="notranslate material-icons";const u=a.match($x);u!==null&&(a=a.substring(2),o+=wm[u[1]]),l=a}return{cls:o,content:l}});return()=>{const o={class:s.value,style:i.value,"aria-hidden":"true",role:"presentation"};return r.value.none===!0?we(n.tag,o,pn(e.default)):r.value.img===!0?we(n.tag,o,Wr(e.default,[we("img",{src:r.value.src})])):r.value.svg===!0?we(n.tag,o,Wr(e.default,[we("svg",{viewBox:r.value.viewBox||"0 0 24 24"},r.value.nodes)])):r.value.svguse===!0?we(n.tag,o,Wr(e.default,[we("svg",{viewBox:r.value.viewBox},[we("use",{"xlink:href":r.value.src})])])):(r.value.cls!==void 0&&(o.class+=" "+r.value.cls),we(n.tag,o,Wr(e.default,[r.value.content])))}}}),e0={size:{type:[String,Number],default:"1em"},color:String};function t0(n){return{cSize:_e(()=>n.size in Wc?`${Wc[n.size]}px`:n.size),classes:_e(()=>"q-spinner"+(n.color?` text-${n.color}`:""))}}const Rm=jt({name:"QSpinner",props:{...e0,thickness:{type:Number,default:5}},setup(n){const{cSize:e,classes:t}=t0(n);return()=>we("svg",{class:t.value+" q-spinner-mat",width:e.value,height:e.value,viewBox:"25 25 50 50"},[we("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":n.thickness,"stroke-miterlimit":"10"})])}});function qc(n,e){const t=n.style;for(const i in e)t[i]=e[i]}function n0(n){if(n==null)return;if(typeof n=="string")try{return document.querySelector(n)||void 0}catch{return}const e=ct(n);if(e)return e.$el||e}function Cm(n,e){if(n==null||n.contains(e)===!0)return!0;for(let t=n.nextElementSibling;t!==null;t=t.nextElementSibling)if(t.contains(e))return!0;return!1}const kt={hasPassive:!1,passiveCapture:!0,notPassiveCapture:!0};try{const n=Object.defineProperty({},"passive",{get(){Object.assign(kt,{hasPassive:!0,passive:{passive:!0},notPassive:{passive:!1},passiveCapture:{passive:!0,capture:!0},notPassiveCapture:{passive:!1,capture:!0}})}});window.addEventListener("qtest",null,n),window.removeEventListener("qtest",null,n)}catch{}function lr(){}function i0(n){return n.button===0}function Da(n){return n.touches&&n.touches[0]?n=n.touches[0]:n.changedTouches&&n.changedTouches[0]?n=n.changedTouches[0]:n.targetTouches&&n.targetTouches[0]&&(n=n.targetTouches[0]),{top:n.clientY,left:n.clientX}}function s0(n){if(n.path)return n.path;if(n.composedPath)return n.composedPath();const e=[];let t=n.target;for(;t;){if(e.push(t),t.tagName==="HTML")return e.push(document),e.push(window),e;t=t.parentElement}}function Pm(n){n.stopPropagation()}function _o(n){n.cancelable!==!1&&n.preventDefault()}function An(n){n.cancelable!==!1&&n.preventDefault(),n.stopPropagation()}function Dl(n,e){if(n===void 0||e===!0&&n.__dragPrevented===!0)return;const t=e===!0?i=>{i.__dragPrevented=!0,i.addEventListener("dragstart",_o,kt.notPassiveCapture)}:i=>{delete i.__dragPrevented,i.removeEventListener("dragstart",_o,kt.notPassiveCapture)};n.querySelectorAll("a, img").forEach(t)}function _s(n,e,t){const i=`__q_${e}_evt`;n[i]=n[i]!==void 0?n[i].concat(t):t,t.forEach(s=>{s[0].addEventListener(s[1],n[s[2]],kt[s[3]])})}function io(n,e){const t=`__q_${e}_evt`;n[t]!==void 0&&(n[t].forEach(i=>{i[0].removeEventListener(i[1],n[i[2]],kt[i[3]])}),n[t]=void 0)}let Lm=!1;function r0(n){Lm=n.isComposing===!0}function o0(n){return Lm===!0||n!==Object(n)||n.isComposing===!0||n.qKeyEvent===!0}function vo(n,e){return o0(n)===!0?!1:[].concat(e).includes(n.keyCode)}function a0(n,e=250){let t=!1,i;return function(){return t===!1&&(t=!0,setTimeout(()=>{t=!1},e),i=n.apply(this,arguments)),i}}function zd(n,e,t,i){t.modifiers.stop===!0&&Pm(n);const s=t.modifiers.color;let r=t.modifiers.center;r=r===!0||i===!0;const o=document.createElement("span"),a=document.createElement("span"),l=Da(n),{left:c,top:u,width:f,height:d}=e.getBoundingClientRect(),h=Math.sqrt(f*f+d*d),g=h/2,_=`${(f-h)/2}px`,p=r?_:`${l.left-c-g}px`,m=`${(d-h)/2}px`,S=r?m:`${l.top-u-g}px`;a.className="q-ripple__inner",qc(a,{height:`${h}px`,width:`${h}px`,transform:`translate3d(${p},${S},0) scale3d(.2,.2,1)`,opacity:0}),o.className=`q-ripple${s?" text-"+s:""}`,o.setAttribute("dir","ltr"),o.appendChild(a),e.appendChild(o);const y=()=>{o.remove(),clearTimeout(E)};t.abort.push(y);let E=setTimeout(()=>{a.classList.add("q-ripple__inner--enter"),a.style.transform=`translate3d(${_},${m},0) scale3d(1,1,1)`,a.style.opacity=.2,E=setTimeout(()=>{a.classList.remove("q-ripple__inner--enter"),a.classList.add("q-ripple__inner--leave"),a.style.opacity=0,E=setTimeout(()=>{o.remove(),t.abort.splice(t.abort.indexOf(y),1)},275)},250)},50)}function Hd(n,{modifiers:e,value:t,arg:i}){const s=Object.assign({},n.cfg.ripple,e,t);n.modifiers={early:s.early===!0,stop:s.stop===!0,center:s.center===!0,color:s.color||i,keyCodes:[].concat(s.keyCodes||13)}}const l0=Cu({name:"ripple",beforeMount(n,e){const t=e.instance.$.appContext.config.globalProperties.$q.config||{};if(t.ripple===!1)return;const i={cfg:t,enabled:e.value!==!1,modifiers:{},abort:[],start(s){i.enabled===!0&&s.qSkipRipple!==!0&&s.type===(i.modifiers.early===!0?"pointerdown":"click")&&zd(s,n,i,s.qKeyEvent===!0)},keystart:a0(s=>{i.enabled===!0&&s.qSkipRipple!==!0&&vo(s,i.modifiers.keyCodes)===!0&&s.type===`key${i.modifiers.early===!0?"down":"up"}`&&zd(s,n,i,!0)},300)};Hd(i,e),n.__qripple=i,_s(i,"main",[[n,"pointerdown","start","passive"],[n,"click","start","passive"],[n,"keydown","keystart","passive"],[n,"keyup","keystart","passive"]])},updated(n,e){if(e.oldValue!==e.value){const t=n.__qripple;t!==void 0&&(t.enabled=e.value!==!1,t.enabled===!0&&Object(e.value)===e.value&&Hd(t,e))}},beforeUnmount(n){const e=n.__qripple;e!==void 0&&(e.abort.forEach(t=>{t()}),io(e,"main"),delete n._qripple)}}),Im={left:"start",center:"center",right:"end",between:"between",around:"around",evenly:"evenly",stretch:"stretch"},c0=Object.keys(Im),u0={align:{type:String,validator:n=>c0.includes(n)}};function d0(n){return _e(()=>{const e=n.align===void 0?n.vertical===!0?"stretch":"left":n.align;return`${n.vertical===!0?"items":"justify"}-${Im[e]}`})}function Nl(n){if(Object(n.$parent)===n.$parent)return n.$parent;let{parent:e}=n.$;for(;Object(e)===e;){if(Object(e.proxy)===e.proxy)return e.proxy;e=e.parent}}function Dm(n,e){typeof e.type=="symbol"?Array.isArray(e.children)===!0&&e.children.forEach(t=>{Dm(n,t)}):n.add(e)}function f0(n){const e=new Set;return n.forEach(t=>{Dm(e,t)}),Array.from(e)}function Nm(n){return n.appContext.config.globalProperties.$router!==void 0}function so(n){return n.isUnmounted===!0||n.isDeactivated===!0}function Vd(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}function Gd(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function h0(n,e){for(const t in e){const i=e[t],s=n[t];if(typeof i=="string"){if(i!==s)return!1}else if(Array.isArray(s)===!1||s.length!==i.length||i.some((r,o)=>r!==s[o]))return!1}return!0}function Wd(n,e){return Array.isArray(e)===!0?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function p0(n,e){return Array.isArray(n)===!0?Wd(n,e):Array.isArray(e)===!0?Wd(e,n):n===e}function m0(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(p0(n[t],e[t])===!1)return!1;return!0}const g0={to:[String,Object],replace:Boolean,href:String,target:String,disable:Boolean};function _0({fallbackTag:n,useDisableForRouterLinkProps:e=!0}={}){const t=Ft(),{props:i,proxy:s,emit:r}=t,o=Nm(t),a=_e(()=>i.disable!==!0&&i.href!==void 0),l=_e(e===!0?()=>o===!0&&i.disable!==!0&&a.value!==!0&&i.to!==void 0&&i.to!==null&&i.to!=="":()=>o===!0&&a.value!==!0&&i.to!==void 0&&i.to!==null&&i.to!==""),c=_e(()=>l.value===!0?S(i.to):null),u=_e(()=>c.value!==null),f=_e(()=>a.value===!0||u.value===!0),d=_e(()=>i.type==="a"||f.value===!0?"a":i.tag||n||"div"),h=_e(()=>a.value===!0?{href:i.href,target:i.target}:u.value===!0?{href:c.value.href,target:i.target}:{}),g=_e(()=>{if(u.value===!1)return-1;const{matched:P}=c.value,{length:R}=P,A=P[R-1];if(A===void 0)return-1;const C=s.$route.matched;if(C.length===0)return-1;const b=C.findIndex(Gd.bind(null,A));if(b!==-1)return b;const M=Vd(P[R-2]);return R>1&&Vd(A)===M&&C[C.length-1].path!==M?C.findIndex(Gd.bind(null,P[R-2])):b}),_=_e(()=>u.value===!0&&g.value!==-1&&h0(s.$route.params,c.value.params)),p=_e(()=>_.value===!0&&g.value===s.$route.matched.length-1&&m0(s.$route.params,c.value.params)),m=_e(()=>u.value===!0?p.value===!0?` ${i.exactActiveClass} ${i.activeClass}`:i.exact===!0?"":_.value===!0?` ${i.activeClass}`:"":"");function S(P){try{return s.$router.resolve(P)}catch{}return null}function y(P,{returnRouterError:R,to:A=i.to,replace:C=i.replace}={}){if(i.disable===!0)return P.preventDefault(),Promise.resolve(!1);if(P.metaKey||P.altKey||P.ctrlKey||P.shiftKey||P.button!==void 0&&P.button!==0||i.target==="_blank")return Promise.resolve(!1);P.preventDefault();const b=s.$router[C===!0?"replace":"push"](A);return R===!0?b:b.then(()=>{}).catch(()=>{})}function E(P){if(u.value===!0){const R=A=>y(P,A);r("click",P,R),P.defaultPrevented!==!0&&R()}else r("click",P)}return{hasRouterLink:u,hasHrefLink:a,hasLink:f,linkTag:d,resolvedLink:c,linkIsActive:_,linkIsExactActive:p,linkClass:m,linkAttrs:h,getLink:S,navigateToRouterLink:y,navigateOnClick:E}}const qd={none:0,xs:4,sm:8,md:16,lg:24,xl:32},v0={xs:8,sm:10,md:14,lg:20,xl:24},x0=["button","submit","reset"],y0=/[^\s]\/[^\s]/,S0=["flat","outline","push","unelevated"];function M0(n,e){return n.flat===!0?"flat":n.outline===!0?"outline":n.push===!0?"push":n.unelevated===!0?"unelevated":e}const b0={...Mm,...g0,type:{type:String,default:"button"},label:[Number,String],icon:String,iconRight:String,...S0.reduce((n,e)=>(n[e]=Boolean)&&n,{}),square:Boolean,rounded:Boolean,glossy:Boolean,size:String,fab:Boolean,fabMini:Boolean,padding:String,color:String,textColor:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,tabindex:[Number,String],ripple:{type:[Boolean,Object],default:!0},align:{...u0.align,default:"center"},stack:Boolean,stretch:Boolean,loading:{type:Boolean,default:null},disable:Boolean},E0={...b0,round:Boolean};function T0(n){const e=bm(n,v0),t=d0(n),{hasRouterLink:i,hasLink:s,linkTag:r,linkAttrs:o,navigateOnClick:a}=_0({fallbackTag:"button"}),l=_e(()=>{const p=n.fab===!1&&n.fabMini===!1?e.value:{};return n.padding!==void 0?Object.assign({},p,{padding:n.padding.split(/\s+/).map(m=>m in qd?qd[m]+"px":m).join(" "),minWidth:"0",minHeight:"0"}):p}),c=_e(()=>n.rounded===!0||n.fab===!0||n.fabMini===!0),u=_e(()=>n.disable!==!0&&n.loading!==!0),f=_e(()=>u.value===!0?n.tabindex||0:-1),d=_e(()=>M0(n,"standard")),h=_e(()=>{const p={tabindex:f.value};return s.value===!0?Object.assign(p,o.value):x0.includes(n.type)===!0&&(p.type=n.type),r.value==="a"?(n.disable===!0?p["aria-disabled"]="true":p.href===void 0&&(p.role="button"),i.value!==!0&&y0.test(n.type)===!0&&(p.type=n.type)):n.disable===!0&&(p.disabled="",p["aria-disabled"]="true"),n.loading===!0&&n.percentage!==void 0&&Object.assign(p,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":n.percentage}),p}),g=_e(()=>{let p;n.color!==void 0?n.flat===!0||n.outline===!0?p=`text-${n.textColor||n.color}`:p=`bg-${n.color} text-${n.textColor||"white"}`:n.textColor&&(p=`text-${n.textColor}`);const m=n.round===!0?"round":`rectangle${c.value===!0?" q-btn--rounded":n.square===!0?" q-btn--square":""}`;return`q-btn--${d.value} q-btn--${m}`+(p!==void 0?" "+p:"")+(u.value===!0?" q-btn--actionable q-focusable q-hoverable":n.disable===!0?" disabled":"")+(n.fab===!0?" q-btn--fab":n.fabMini===!0?" q-btn--fab-mini":"")+(n.noCaps===!0?" q-btn--no-uppercase":"")+(n.dense===!0?" q-btn--dense":"")+(n.stretch===!0?" no-border-radius self-stretch":"")+(n.glossy===!0?" glossy":"")+(n.square?" q-btn--square":"")}),_=_e(()=>t.value+(n.stack===!0?" column":" row")+(n.noWrap===!0?" no-wrap text-no-wrap":"")+(n.loading===!0?" q-btn__content--hidden":""));return{classes:g,style:l,innerClasses:_,attributes:h,hasLink:s,linkTag:r,navigateOnClick:a,isActionable:u}}const{passiveCapture:_n}=kt;let Cs=null,Ps=null,Ls=null;const si=jt({name:"QBtn",props:{...E0,percentage:Number,darkPercentage:Boolean,onTouchstart:[Function,Array]},emits:["click","keydown","mousedown","keyup"],setup(n,{slots:e,emit:t}){const{proxy:i}=Ft(),{classes:s,style:r,innerClasses:o,attributes:a,hasLink:l,linkTag:c,navigateOnClick:u,isActionable:f}=T0(n),d=ut(null),h=ut(null);let g=null,_,p=null;const m=_e(()=>n.label!==void 0&&n.label!==null&&n.label!==""),S=_e(()=>n.disable===!0||n.ripple===!1?!1:{keyCodes:l.value===!0?[13,32]:[13],...n.ripple===!0?{}:n.ripple}),y=_e(()=>({center:n.round})),E=_e(()=>{const F=Math.max(0,Math.min(100,n.percentage));return F>0?{transition:"transform 0.6s",transform:`translateX(${F-100}%)`}:{}}),P=_e(()=>{if(n.loading===!0)return{onMousedown:U,onTouchstart:U,onClick:U,onKeydown:U,onKeyup:U};if(f.value===!0){const F={onClick:A,onKeydown:C,onMousedown:M};if(i.$q.platform.has.touch===!0){const X=n.onTouchstart!==void 0?"":"Passive";F[`onTouchstart${X}`]=b}return F}return{onClick:An}}),R=_e(()=>({ref:d,class:"q-btn q-btn-item non-selectable no-outline "+s.value,style:r.value,...a.value,...P.value}));function A(F){if(d.value!==null){if(F!==void 0){if(F.defaultPrevented===!0)return;const X=document.activeElement;if(n.type==="submit"&&X!==document.body&&d.value.contains(X)===!1&&X.contains(d.value)===!1){d.value.focus();const G=()=>{document.removeEventListener("keydown",An,!0),document.removeEventListener("keyup",G,_n),d.value!==null&&d.value.removeEventListener("blur",G,_n)};document.addEventListener("keydown",An,!0),document.addEventListener("keyup",G,_n),d.value.addEventListener("blur",G,_n)}}u(F)}}function C(F){d.value!==null&&(t("keydown",F),vo(F,[13,32])===!0&&Ps!==d.value&&(Ps!==null&&N(),F.defaultPrevented!==!0&&(d.value.focus(),Ps=d.value,d.value.classList.add("q-btn--active"),document.addEventListener("keyup",I,!0),d.value.addEventListener("blur",I,_n)),An(F)))}function b(F){d.value!==null&&(t("touchstart",F),F.defaultPrevented!==!0&&(Cs!==d.value&&(Cs!==null&&N(),Cs=d.value,g=F.target,g.addEventListener("touchcancel",I,_n),g.addEventListener("touchend",I,_n)),_=!0,p!==null&&clearTimeout(p),p=setTimeout(()=>{p=null,_=!1},200)))}function M(F){d.value!==null&&(F.qSkipRipple=_===!0,t("mousedown",F),F.defaultPrevented!==!0&&Ls!==d.value&&(Ls!==null&&N(),Ls=d.value,d.value.classList.add("q-btn--active"),document.addEventListener("mouseup",I,_n)))}function I(F){if(d.value!==null&&!(F!==void 0&&F.type==="blur"&&document.activeElement===d.value)){if(F!==void 0&&F.type==="keyup"){if(Ps===d.value&&vo(F,[13,32])===!0){const X=new MouseEvent("click",F);X.qKeyEvent=!0,F.defaultPrevented===!0&&_o(X),F.cancelBubble===!0&&Pm(X),d.value.dispatchEvent(X),An(F),F.qKeyEvent=!0}t("keyup",F)}N()}}function N(F){const X=h.value;F!==!0&&(Cs===d.value||Ls===d.value)&&X!==null&&X!==document.activeElement&&(X.setAttribute("tabindex",-1),X.focus()),Cs===d.value&&(g!==null&&(g.removeEventListener("touchcancel",I,_n),g.removeEventListener("touchend",I,_n)),Cs=g=null),Ls===d.value&&(document.removeEventListener("mouseup",I,_n),Ls=null),Ps===d.value&&(document.removeEventListener("keyup",I,!0),d.value!==null&&d.value.removeEventListener("blur",I,_n),Ps=null),d.value!==null&&d.value.classList.remove("q-btn--active")}function U(F){An(F),F.qSkipRipple=!0}return In(()=>{N(!0)}),Object.assign(i,{click:F=>{f.value===!0&&A(F)}}),()=>{let F=[];n.icon!==void 0&&F.push(we(Qs,{name:n.icon,left:n.stack!==!0&&m.value===!0,role:"img","aria-hidden":"true"})),m.value===!0&&F.push(we("span",{class:"block"},[n.label])),F=Wr(e.default,F),n.iconRight!==void 0&&n.round===!1&&F.push(we(Qs,{name:n.iconRight,right:n.stack!==!0&&m.value===!0,role:"img","aria-hidden":"true"}));const X=[we("span",{class:"q-focus-helper",ref:h})];return n.loading===!0&&n.percentage!==void 0&&X.push(we("span",{class:"q-btn__progress absolute-full overflow-hidden"+(n.darkPercentage===!0?" q-btn__progress--dark":"")},[we("span",{class:"q-btn__progress-indicator fit block",style:E.value})])),X.push(we("span",{class:"q-btn__content text-center col items-center q-anchor--skip "+o.value},F)),n.loading!==null&&X.push(we(ui,{name:"q-transition--fade"},()=>n.loading===!0?[we("span",{key:"loading",class:"absolute-full flex flex-center"},e.loading!==void 0?e.loading():[we(Rm)])]:null)),Qp(we(c.value,R.value,X),[[l0,S.value,void 0,y.value]])}}});var w0=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let Um;const dl=n=>Um=n,Om=Symbol();function Xc(n){return n&&typeof n=="object"&&Object.prototype.toString.call(n)==="[object Object]"&&typeof n.toJSON!="function"}var ro;(function(n){n.direct="direct",n.patchObject="patch object",n.patchFunction="patch function"})(ro||(ro={}));function A0(){const n=Ap(!0),e=n.run(()=>ut({}));let t=[],i=[];const s=To({install(r){dl(s),s._a=r,r.provide(Om,s),r.config.globalProperties.$pinia=s,i.forEach(o=>t.push(o)),i=[]},use(r){return!this._a&&!w0?i.push(r):t.push(r),this},_p:t,_a:null,_e:n,_s:new Map,state:e});return s}const Fm=()=>{};function Xd(n,e,t,i=Fm){n.push(e);const s=()=>{const r=n.indexOf(e);r>-1&&(n.splice(r,1),i())};return!t&&Rp()&&S_(s),s}function Is(n,...e){n.slice().forEach(t=>{t(...e)})}const R0=n=>n();function jc(n,e){n instanceof Map&&e instanceof Map&&e.forEach((t,i)=>n.set(i,t)),n instanceof Set&&e instanceof Set&&e.forEach(n.add,n);for(const t in e){if(!e.hasOwnProperty(t))continue;const i=e[t],s=n[t];Xc(s)&&Xc(i)&&n.hasOwnProperty(t)&&!St(i)&&!Ss(i)?n[t]=jc(s,i):n[t]=i}return n}const C0=Symbol();function P0(n){return!Xc(n)||!n.hasOwnProperty(C0)}const{assign:Ai}=Object;function L0(n){return!!(St(n)&&n.effect)}function I0(n,e,t,i){const{state:s,actions:r,getters:o}=e,a=t.state.value[n];let l;function c(){a||(t.state.value[n]=s?s():{});const u=j_(t.state.value[n]);return Ai(u,r,Object.keys(o||{}).reduce((f,d)=>(f[d]=To(_e(()=>{dl(t);const h=t._s.get(n);return o[d].call(h,h)})),f),{}))}return l=Bm(n,c,e,t,i,!0),l}function Bm(n,e,t={},i,s,r){let o;const a=Ai({actions:{}},t),l={deep:!0};let c,u,f=[],d=[],h;const g=i.state.value[n];!r&&!g&&(i.state.value[n]={}),ut({});let _;function p(C){let b;c=u=!1,typeof C=="function"?(C(i.state.value[n]),b={type:ro.patchFunction,storeId:n,events:h}):(jc(i.state.value[n],C),b={type:ro.patchObject,payload:C,storeId:n,events:h});const M=_=Symbol();Ts().then(()=>{_===M&&(c=!0)}),u=!0,Is(f,b,i.state.value[n])}const m=r?function(){const{state:b}=t,M=b?b():{};this.$patch(I=>{Ai(I,M)})}:Fm;function S(){o.stop(),f=[],d=[],i._s.delete(n)}function y(C,b){return function(){dl(i);const M=Array.from(arguments),I=[],N=[];function U(G){I.push(G)}function F(G){N.push(G)}Is(d,{args:M,name:C,store:P,after:U,onError:F});let X;try{X=b.apply(this&&this.$id===n?this:P,M)}catch(G){throw Is(N,G),G}return X instanceof Promise?X.then(G=>(Is(I,G),G)).catch(G=>(Is(N,G),Promise.reject(G))):(Is(I,X),X)}}const E={_p:i,$id:n,$onAction:Xd.bind(null,d),$patch:p,$reset:m,$subscribe(C,b={}){const M=Xd(f,C,b.detached,()=>I()),I=o.run(()=>Ut(()=>i.state.value[n],N=>{(b.flush==="sync"?u:c)&&C({storeId:n,type:ro.direct,events:h},N)},Ai({},l,b)));return M},$dispose:S},P=Mr(E);i._s.set(n,P);const A=(i._a&&i._a.runWithContext||R0)(()=>i._e.run(()=>(o=Ap()).run(e)));for(const C in A){const b=A[C];if(St(b)&&!L0(b)||Ss(b))r||(g&&P0(b)&&(St(b)?b.value=g[C]:jc(b,g[C])),i.state.value[n][C]=b);else if(typeof b=="function"){const M=y(C,b);A[C]=M,a.actions[C]=b}}return Ai(P,A),Ai(tt(P),A),Object.defineProperty(P,"$state",{get:()=>i.state.value[n],set:C=>{p(b=>{Ai(b,C)})}}),i._p.forEach(C=>{Ai(P,o.run(()=>C({store:P,app:i._a,pinia:i,options:a})))}),g&&r&&t.hydrate&&t.hydrate(P.$state,g),c=!0,u=!0,P}function D0(n,e,t){let i,s;const r=typeof e=="function";i=n,s=r?t:e;function o(a,l){const c=Ov();return a=a||(c?eo(Om,null):null),a&&dl(a),a=Um,a._s.has(i)||(r?Bm(i,e,s,a):I0(i,s,a)),a._s.get(i)}return o.$id=i,o}const Tr=D0("settings",{state:()=>({siteMode:null,tab:"home"})}),km=n=>(br("data-v-8702b5f3"),n=n(),Er(),n),N0={class:"row"},U0={class:"col column items-center"},O0=km(()=>Ye("p",{class:"text-h3 self-end q-pb-lg"},"2D/Website",-1)),F0={class:"col column items-center"},B0=km(()=>Ye("p",{class:"text-h3 self-end q-pb-lg"},"3D/Omgeving",-1)),k0={__name:"IndexSelection",setup(n){const e=Tr();return(t,i)=>(yt(),Dt("main",null,[Ye("div",N0,[Ye("div",U0,[Le(si,{class:"bigButton",onClick:i[0]||(i[0]=s=>ct(e).siteMode="2D")},{default:Rt(()=>[Le(Qs,{name:"desktop_windows",size:"15vh",id:"leftIcon"}),Le(Qs,{name:"smartphone",size:"15vh",id:"rightIcon"}),O0]),_:1})]),Ye("div",F0,[Le(si,{class:"bigButton",onClick:i[1]||(i[1]=s=>ct(e).siteMode="3D")},{default:Rt(()=>[Le(Qs,{name:"videocam",size:"15vh",id:"leftIcon"}),Le(Qs,{name:"sports_esports",size:"15vh",id:"rightIcon"}),B0]),_:1})])])]))}},z0=Ki(k0,[["__scopeId","data-v-8702b5f3"]]),H0={__name:"Index",setup(n){return(e,t)=>(yt(),Dt("main",null,[Le(Xx),Le(z0)]))}},Vn=ut(!1);let $c;function V0(n,e){const t=/(edg|edge|edga|edgios)\/([\w.]+)/.exec(n)||/(opr)[\/]([\w.]+)/.exec(n)||/(vivaldi)[\/]([\w.]+)/.exec(n)||/(chrome|crios)[\/]([\w.]+)/.exec(n)||/(version)(applewebkit)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(n)||/(webkit)[\/]([\w.]+).*(version)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(n)||/(firefox|fxios)[\/]([\w.]+)/.exec(n)||/(webkit)[\/]([\w.]+)/.exec(n)||/(opera)(?:.*version|)[\/]([\w.]+)/.exec(n)||[];return{browser:t[5]||t[3]||t[1]||"",version:t[4]||t[2]||"0",platform:e[0]||""}}function G0(n){return/(ipad)/.exec(n)||/(ipod)/.exec(n)||/(windows phone)/.exec(n)||/(iphone)/.exec(n)||/(kindle)/.exec(n)||/(silk)/.exec(n)||/(android)/.exec(n)||/(win)/.exec(n)||/(mac)/.exec(n)||/(linux)/.exec(n)||/(cros)/.exec(n)||/(playbook)/.exec(n)||/(bb)/.exec(n)||/(blackberry)/.exec(n)||[]}const zm="ontouchstart"in window||window.navigator.maxTouchPoints>0;function W0(n){const e=n.toLowerCase(),t=G0(e),i=V0(e,t),s={};i.browser&&(s[i.browser]=!0,s.version=i.version,s.versionNumber=parseInt(i.version,10)),i.platform&&(s[i.platform]=!0);const r=s.android||s.ios||s.bb||s.blackberry||s.ipad||s.iphone||s.ipod||s.kindle||s.playbook||s.silk||s["windows phone"];if(r===!0||e.indexOf("mobile")!==-1?s.mobile=!0:s.desktop=!0,s["windows phone"]&&(s.winphone=!0,delete s["windows phone"]),s.edga||s.edgios||s.edg?(s.edge=!0,i.browser="edge"):s.crios?(s.chrome=!0,i.browser="chrome"):s.fxios&&(s.firefox=!0,i.browser="firefox"),(s.ipod||s.ipad||s.iphone)&&(s.ios=!0),s.vivaldi&&(i.browser="vivaldi",s.vivaldi=!0),(s.chrome||s.opr||s.safari||s.vivaldi||s.mobile===!0&&s.ios!==!0&&r!==!0)&&(s.webkit=!0),s.opr&&(i.browser="opera",s.opera=!0),s.safari&&(s.blackberry||s.bb?(i.browser="blackberry",s.blackberry=!0):s.playbook?(i.browser="playbook",s.playbook=!0):s.android?(i.browser="android",s.android=!0):s.kindle?(i.browser="kindle",s.kindle=!0):s.silk&&(i.browser="silk",s.silk=!0)),s.name=i.browser,s.platform=i.platform,e.indexOf("electron")!==-1)s.electron=!0;else if(document.location.href.indexOf("-extension://")!==-1)s.bex=!0;else{if(window.Capacitor!==void 0?(s.capacitor=!0,s.nativeMobile=!0,s.nativeMobileWrapper="capacitor"):(window._cordovaNative!==void 0||window.cordova!==void 0)&&(s.cordova=!0,s.nativeMobile=!0,s.nativeMobileWrapper="cordova"),Vn.value===!0&&($c={is:{...s}}),zm===!0&&s.mac===!0&&(s.desktop===!0&&s.safari===!0||s.nativeMobile===!0&&s.android!==!0&&s.ios!==!0&&s.ipad!==!0)){delete s.mac,delete s.desktop;const o=Math.min(window.innerHeight,window.innerWidth)>414?"ipad":"iphone";Object.assign(s,{mobile:!0,ios:!0,platform:o,[o]:!0})}s.mobile!==!0&&window.navigator.userAgentData&&window.navigator.userAgentData.mobile&&(delete s.desktop,s.mobile=!0)}return s}const jd=navigator.userAgent||navigator.vendor||window.opera,q0={has:{touch:!1,webStorage:!1},within:{iframe:!1}},pt={userAgent:jd,is:W0(jd),has:{touch:zm},within:{iframe:window.self!==window.top}},Na={install(n){const{$q:e}=n;Vn.value===!0?(n.onSSRHydrated.push(()=>{Object.assign(e.platform,pt),Vn.value=!1}),e.platform=Mr(this)):e.platform=this}};{let n;Ao(pt.has,"webStorage",()=>{if(n!==void 0)return n;try{if(window.localStorage)return n=!0,!0}catch{}return n=!1,!1}),Object.assign(Na,pt),Vn.value===!0&&(Object.assign(Na,$c,q0),$c=null)}const Pu={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},X0=Object.keys(Pu);Pu.all=!0;function $d(n){const e={};for(const t of X0)n[t]===!0&&(e[t]=!0);return Object.keys(e).length===0?Pu:(e.horizontal===!0?e.left=e.right=!0:e.left===!0&&e.right===!0&&(e.horizontal=!0),e.vertical===!0?e.up=e.down=!0:e.up===!0&&e.down===!0&&(e.vertical=!0),e.horizontal===!0&&e.vertical===!0&&(e.all=!0),e)}const j0=["INPUT","TEXTAREA"];function Kd(n,e){return e.event===void 0&&n.target!==void 0&&n.target.draggable!==!0&&typeof e.handler=="function"&&j0.includes(n.target.nodeName.toUpperCase())===!1&&(n.qClonedBy===void 0||n.qClonedBy.indexOf(e.uid)===-1)}function Hm(){if(window.getSelection!==void 0){const n=window.getSelection();n.empty!==void 0?n.empty():n.removeAllRanges!==void 0&&(n.removeAllRanges(),Na.is.mobile!==!0&&n.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}function $0(n){const e=[.06,6,50];return typeof n=="string"&&n.length&&n.split(":").forEach((t,i)=>{const s=parseFloat(t);s&&(e[i]=s)}),e}const K0=Cu({name:"touch-swipe",beforeMount(n,{value:e,arg:t,modifiers:i}){if(i.mouse!==!0&&pt.has.touch!==!0)return;const s=i.mouseCapture===!0?"Capture":"",r={handler:e,sensitivity:$0(t),direction:$d(i),noop:lr,mouseStart(o){Kd(o,r)&&i0(o)&&(_s(r,"temp",[[document,"mousemove","move",`notPassive${s}`],[document,"mouseup","end","notPassiveCapture"]]),r.start(o,!0))},touchStart(o){if(Kd(o,r)){const a=o.target;_s(r,"temp",[[a,"touchmove","move","notPassiveCapture"],[a,"touchcancel","end","notPassiveCapture"],[a,"touchend","end","notPassiveCapture"]]),r.start(o)}},start(o,a){pt.is.firefox===!0&&Dl(n,!0);const l=Da(o);r.event={x:l.left,y:l.top,time:Date.now(),mouse:a===!0,dir:!1}},move(o){if(r.event===void 0)return;if(r.event.dir!==!1){An(o);return}const a=Date.now()-r.event.time;if(a===0)return;const l=Da(o),c=l.left-r.event.x,u=Math.abs(c),f=l.top-r.event.y,d=Math.abs(f);if(r.event.mouse!==!0){if(u<r.sensitivity[1]&&d<r.sensitivity[1]){r.end(o);return}}else if(window.getSelection().toString()!==""){r.end(o);return}else if(u<r.sensitivity[2]&&d<r.sensitivity[2])return;const h=u/a,g=d/a;r.direction.vertical===!0&&u<d&&u<100&&g>r.sensitivity[0]&&(r.event.dir=f<0?"up":"down"),r.direction.horizontal===!0&&u>d&&d<100&&h>r.sensitivity[0]&&(r.event.dir=c<0?"left":"right"),r.direction.up===!0&&u<d&&f<0&&u<100&&g>r.sensitivity[0]&&(r.event.dir="up"),r.direction.down===!0&&u<d&&f>0&&u<100&&g>r.sensitivity[0]&&(r.event.dir="down"),r.direction.left===!0&&u>d&&c<0&&d<100&&h>r.sensitivity[0]&&(r.event.dir="left"),r.direction.right===!0&&u>d&&c>0&&d<100&&h>r.sensitivity[0]&&(r.event.dir="right"),r.event.dir!==!1?(An(o),r.event.mouse===!0&&(document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Hm(),r.styleCleanup=_=>{r.styleCleanup=void 0,document.body.classList.remove("non-selectable");const p=()=>{document.body.classList.remove("no-pointer-events--children")};_===!0?setTimeout(p,50):p()}),r.handler({evt:o,touch:r.event.mouse!==!0,mouse:r.event.mouse,direction:r.event.dir,duration:a,distance:{x:u,y:d}})):r.end(o)},end(o){r.event!==void 0&&(io(r,"temp"),pt.is.firefox===!0&&Dl(n,!1),r.styleCleanup!==void 0&&r.styleCleanup(!0),o!==void 0&&r.event.dir!==!1&&An(o),r.event=void 0)}};if(n.__qtouchswipe=r,i.mouse===!0){const o=i.mouseCapture===!0||i.mousecapture===!0?"Capture":"";_s(r,"main",[[n,"mousedown","mouseStart",`passive${o}`]])}pt.has.touch===!0&&_s(r,"main",[[n,"touchstart","touchStart",`passive${i.capture===!0?"Capture":""}`],[n,"touchmove","noop","notPassiveCapture"]])},updated(n,e){const t=n.__qtouchswipe;t!==void 0&&(e.oldValue!==e.value&&(typeof e.value!="function"&&t.end(),t.handler=e.value),t.direction=$d(e.modifiers))},beforeUnmount(n){const e=n.__qtouchswipe;e!==void 0&&(io(e,"main"),io(e,"temp"),pt.is.firefox===!0&&Dl(n,!1),e.styleCleanup!==void 0&&e.styleCleanup(),delete n.__qtouchswipe)}});function Y0(){let n=Object.create(null);return{getCache:(e,t)=>n[e]===void 0?n[e]=typeof t=="function"?t():t:n[e],setCache(e,t){n[e]=t},hasCache(e){return Object.hasOwnProperty.call(n,e)},clearCache(e){e!==void 0?delete n[e]:n=Object.create(null)}}}const Z0={name:{required:!0},disable:Boolean},Yd={setup(n,{slots:e}){return()=>we("div",{class:"q-panel scroll",role:"tabpanel"},pn(e.default))}},J0={modelValue:{required:!0},animated:Boolean,infinite:Boolean,swipeable:Boolean,vertical:Boolean,transitionPrev:String,transitionNext:String,transitionDuration:{type:[String,Number],default:300},keepAlive:Boolean,keepAliveInclude:[String,Array,RegExp],keepAliveExclude:[String,Array,RegExp],keepAliveMax:Number},Q0=["update:modelValue","beforeTransition","transition"];function ey(){const{props:n,emit:e,proxy:t}=Ft(),{getCache:i}=Y0();let s,r;const o=ut(null),a=ut(null);function l(U){const F=n.vertical===!0?"up":"left";A((t.$q.lang.rtl===!0?-1:1)*(U.direction===F?1:-1))}const c=_e(()=>[[K0,l,void 0,{horizontal:n.vertical!==!0,vertical:n.vertical,mouse:!0}]]),u=_e(()=>n.transitionPrev||`slide-${n.vertical===!0?"down":"right"}`),f=_e(()=>n.transitionNext||`slide-${n.vertical===!0?"up":"left"}`),d=_e(()=>`--q-transition-duration: ${n.transitionDuration}ms`),h=_e(()=>typeof n.modelValue=="string"||typeof n.modelValue=="number"?n.modelValue:String(n.modelValue)),g=_e(()=>({include:n.keepAliveInclude,exclude:n.keepAliveExclude,max:n.keepAliveMax})),_=_e(()=>n.keepAliveInclude!==void 0||n.keepAliveExclude!==void 0);Ut(()=>n.modelValue,(U,F)=>{const X=y(U)===!0?E(U):-1;r!==!0&&R(X===-1?0:X<E(F)?-1:1),o.value!==X&&(o.value=X,e("beforeTransition",U,F),Ts(()=>{e("transition",U,F)}))});function p(){A(1)}function m(){A(-1)}function S(U){e("update:modelValue",U)}function y(U){return U!=null&&U!==""}function E(U){return s.findIndex(F=>F.props.name===U&&F.props.disable!==""&&F.props.disable!==!0)}function P(){return s.filter(U=>U.props.disable!==""&&U.props.disable!==!0)}function R(U){const F=U!==0&&n.animated===!0&&o.value!==-1?"q-transition--"+(U===-1?u.value:f.value):null;a.value!==F&&(a.value=F)}function A(U,F=o.value){let X=F+U;for(;X!==-1&&X<s.length;){const G=s[X];if(G!==void 0&&G.props.disable!==""&&G.props.disable!==!0){R(U),r=!0,e("update:modelValue",G.props.name),setTimeout(()=>{r=!1});return}X+=U}n.infinite===!0&&s.length!==0&&F!==-1&&F!==s.length&&A(U,U===-1?s.length:-1)}function C(){const U=E(n.modelValue);return o.value!==U&&(o.value=U),!0}function b(){const U=y(n.modelValue)===!0&&C()&&s[o.value];return n.keepAlive===!0?[we(vv,g.value,[we(_.value===!0?i(h.value,()=>({...Yd,name:h.value})):Yd,{key:h.value,style:d.value},()=>U)])]:[we("div",{class:"q-panel scroll",style:d.value,key:h.value,role:"tabpanel"},[U])]}function M(){if(s.length!==0)return n.animated===!0?[we(ui,{name:a.value},b)]:b()}function I(U){return s=f0(pn(U.default,[])).filter(F=>F.props!==null&&F.props.slot===void 0&&y(F.props.name)===!0),s.length}function N(){return s}return Object.assign(t,{next:p,previous:m,goTo:S}),{panelIndex:o,panelDirectives:c,updatePanelsList:I,updatePanelIndex:C,getPanelContent:M,getEnabledPanels:P,getPanels:N,isValidPanelName:y,keepAliveProps:g,needsUniqueKeepAliveWrapper:_,goToPanelByOffset:A,goToPanel:S,nextPanel:p,previousPanel:m}}const Ul=jt({name:"QTabPanel",props:Z0,setup(n,{slots:e}){return()=>we("div",{class:"q-tab-panel",role:"tabpanel"},pn(e.default))}}),Ro={dark:{type:Boolean,default:null}};function Co(n,e){return _e(()=>n.dark===null?e.dark.isActive:n.dark)}const ty=jt({name:"QTabPanels",props:{...J0,...Ro},emits:Q0,setup(n,{slots:e}){const t=Ft(),i=Co(n,t.proxy.$q),{updatePanelsList:s,getPanelContent:r,panelDirectives:o}=ey(),a=_e(()=>"q-tab-panels q-panel-parent"+(i.value===!0?" q-tab-panels--dark q-dark":""));return()=>(s(e),Em("div",{class:a.value},r(),"pan",n.swipeable,()=>o.value))}}),ny=we("div",{class:"q-space"}),iy=jt({name:"QSpace",setup(){return()=>ny}}),Vm=jt({name:"QCard",props:{...Ro,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(n,{slots:e}){const{proxy:{$q:t}}=Ft(),i=Co(n,t),s=_e(()=>"q-card"+(i.value===!0?" q-card--dark q-dark":"")+(n.bordered===!0?" q-card--bordered":"")+(n.square===!0?" q-card--square no-border-radius":"")+(n.flat===!0?" q-card--flat no-shadow":""));return()=>we(n.tag,{class:s.value},pn(e.default))}}),Gm=()=>!0;function sy(n){return typeof n=="string"&&n!==""&&n!=="/"&&n!=="#/"}function ry(n){return n.startsWith("#")===!0&&(n=n.substring(1)),n.startsWith("/")===!1&&(n="/"+n),n.endsWith("/")===!0&&(n=n.substring(0,n.length-1)),"#"+n}function oy(n){if(n.backButtonExit===!1)return()=>!1;if(n.backButtonExit==="*")return Gm;const e=["#/"];return Array.isArray(n.backButtonExit)===!0&&e.push(...n.backButtonExit.filter(sy).map(ry)),()=>e.includes(window.location.hash)}const Kc={__history:[],add:lr,remove:lr,install({$q:n}){if(this.__installed===!0)return;const{cordova:e,capacitor:t}=pt.is;if(e!==!0&&t!==!0)return;const i=n.config[e===!0?"cordova":"capacitor"];if(i!==void 0&&i.backButton===!1||t===!0&&(window.Capacitor===void 0||window.Capacitor.Plugins.App===void 0))return;this.add=o=>{o.condition===void 0&&(o.condition=Gm),this.__history.push(o)},this.remove=o=>{const a=this.__history.indexOf(o);a>=0&&this.__history.splice(a,1)};const s=oy(Object.assign({backButtonExit:!0},i)),r=()=>{if(this.__history.length){const o=this.__history[this.__history.length-1];o.condition()===!0&&(this.__history.pop(),o.handler())}else s()===!0?navigator.app.exitApp():window.history.back()};e===!0?document.addEventListener("deviceready",()=>{document.addEventListener("backbutton",r,!1)}):window.Capacitor.Plugins.App.addListener("backButton",r)}};function ay(n,e,t){let i;function s(){i!==void 0&&(Kc.remove(i),i=void 0)}return In(()=>{n.value===!0&&s()}),{removeFromHistory:s,addToHistory(){i={condition:()=>t.value===!0,handler:e},Kc.add(i)}}}function Ua(){let n=null;const e=Ft();function t(){n!==null&&(clearTimeout(n),n=null)}return Eu(t),In(t),{removeTimeout:t,registerTimeout(i,s){t(),so(e)===!1&&(n=setTimeout(()=>{n=null,i()},s))}}}function Wm(){let n;const e=Ft();function t(){n=void 0}return Eu(t),In(t),{removeTick:t,registerTick(i){n=i,Ts(()=>{n===i&&(so(e)===!1&&n(),n=void 0)})}}}const qm={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},Xm=["beforeShow","show","beforeHide","hide"];function jm({showing:n,canShow:e,hideOnRouteChange:t,handleShow:i,handleHide:s,processOnMount:r}){const o=Ft(),{props:a,emit:l,proxy:c}=o;let u;function f(S){n.value===!0?g(S):d(S)}function d(S){if(a.disable===!0||S!==void 0&&S.qAnchorHandled===!0||e!==void 0&&e(S)!==!0)return;const y=a["onUpdate:modelValue"]!==void 0;y===!0&&(l("update:modelValue",!0),u=S,Ts(()=>{u===S&&(u=void 0)})),(a.modelValue===null||y===!1)&&h(S)}function h(S){n.value!==!0&&(n.value=!0,l("beforeShow",S),i!==void 0?i(S):l("show",S))}function g(S){if(a.disable===!0)return;const y=a["onUpdate:modelValue"]!==void 0;y===!0&&(l("update:modelValue",!1),u=S,Ts(()=>{u===S&&(u=void 0)})),(a.modelValue===null||y===!1)&&_(S)}function _(S){n.value!==!1&&(n.value=!1,l("beforeHide",S),s!==void 0?s(S):l("hide",S))}function p(S){a.disable===!0&&S===!0?a["onUpdate:modelValue"]!==void 0&&l("update:modelValue",!1):S===!0!==n.value&&(S===!0?h:_)(u)}Ut(()=>a.modelValue,p),t!==void 0&&Nm(o)===!0&&Ut(()=>c.$route.fullPath,()=>{t.value===!0&&n.value===!0&&g()}),r===!0&&As(()=>{p(a.modelValue)});const m={show:d,hide:g,toggle:f};return Object.assign(c,m),m}const $m={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function Km(n,e=()=>{},t=()=>{}){return{transitionProps:_e(()=>{const i=`q-transition--${n.transitionShow||e()}`,s=`q-transition--${n.transitionHide||t()}`;return{appear:!0,enterFromClass:`${i}-enter-from`,enterActiveClass:`${i}-enter-active`,enterToClass:`${i}-enter-to`,leaveFromClass:`${s}-leave-from`,leaveActiveClass:`${s}-leave-active`,leaveToClass:`${s}-leave-to`}}),transitionStyle:_e(()=>`--q-transition-duration: ${n.transitionDuration}ms`)}}let qr=[],xo=[];function Ym(n){xo=xo.filter(e=>e!==n)}function ly(n){Ym(n),xo.push(n)}function Zd(n){Ym(n),xo.length===0&&qr.length!==0&&(qr[qr.length-1](),qr=[])}function Zm(n){xo.length===0?n():qr.push(n)}const Oa={};let Jm=!1;function cy(){Jm=!0}let uy=1,dy=document.body;function fy(n,e){const t=document.createElement("div");if(t.id=e!==void 0?`q-portal--${e}--${uy++}`:n,Oa.globalNodes!==void 0){const i=Oa.globalNodes.class;i!==void 0&&(t.className=i)}return dy.appendChild(t),t}function hy(n){n.remove()}const oo=[];function py(n,e){do{if(n.$options.name==="QMenu"){if(n.hide(e),n.$props.separateClosePopup===!0)return Nl(n)}else if(n.__qPortal===!0){const t=Nl(n);return t!==void 0&&t.$options.name==="QPopupProxy"?(n.hide(e),t):n}n=Nl(n)}while(n!=null)}const my=jt({name:"QPortal",setup(n,{slots:e}){return()=>e.default()}});function gy(n){for(n=n.parent;n!=null;){if(n.type.name==="QGlobalDialog")return!0;if(n.type.name==="QDialog"||n.type.name==="QMenu")return!1;n=n.parent}return!1}function Qm(n,e,t,i){const s=ut(!1),r=ut(!1);let o=null;const a={},l=i==="dialog"&&gy(n);function c(f){if(f===!0){Zd(a),r.value=!0;return}r.value=!1,s.value===!1&&(l===!1&&o===null&&(o=fy(!1,i)),s.value=!0,oo.push(n.proxy),ly(a))}function u(f){if(r.value=!1,f!==!0)return;Zd(a),s.value=!1;const d=oo.indexOf(n.proxy);d!==-1&&oo.splice(d,1),o!==null&&(hy(o),o=null)}return ol(()=>{u(!0)}),n.proxy.__qPortal=!0,Ao(n.proxy,"contentEl",()=>e.value),{showPortal:c,hidePortal:u,portalIsActive:s,portalIsAccessible:r,renderPortal:()=>l===!0?t():s.value===!0?[we(Kv,{to:o},we(my,t))]:void 0}}const _y=[Element,String],vy=[null,document,document.body,document.scrollingElement,document.documentElement];function xy(n,e){let t=n0(e);if(t===void 0){if(n==null)return window;t=n.closest(".scroll,.scroll-y,.overflow-auto")}return vy.includes(t)?window:t}function yy(n){return n===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:n.scrollTop}function Sy(n){return n===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:n.scrollLeft}let Vo;function My(){if(Vo!==void 0)return Vo;const n=document.createElement("p"),e=document.createElement("div");qc(n,{width:"100%",height:"200px"}),qc(e,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),e.appendChild(n),document.body.appendChild(e);const t=n.offsetWidth;e.style.overflow="scroll";let i=n.offsetWidth;return t===i&&(i=e.clientWidth),e.remove(),Vo=t-i,Vo}function by(n,e=!0){return!n||n.nodeType!==Node.ELEMENT_NODE?!1:e?n.scrollHeight>n.clientHeight&&(n.classList.contains("scroll")||n.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(n)["overflow-y"])):n.scrollWidth>n.clientWidth&&(n.classList.contains("scroll")||n.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(n)["overflow-x"]))}let Ir=0,Ol,Fl,Xr,Bl=!1,Jd,Qd,ef,ss=null;function Ey(n){Ty(n)&&An(n)}function Ty(n){if(n.target===document.body||n.target.classList.contains("q-layout__backdrop"))return!0;const e=s0(n),t=n.shiftKey&&!n.deltaX,i=!t&&Math.abs(n.deltaX)<=Math.abs(n.deltaY),s=t||i?n.deltaY:n.deltaX;for(let r=0;r<e.length;r++){const o=e[r];if(by(o,i))return i?s<0&&o.scrollTop===0?!0:s>0&&o.scrollTop+o.clientHeight===o.scrollHeight:s<0&&o.scrollLeft===0?!0:s>0&&o.scrollLeft+o.clientWidth===o.scrollWidth}return!0}function tf(n){n.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function Go(n){Bl!==!0&&(Bl=!0,requestAnimationFrame(()=>{Bl=!1;const{height:e}=n.target,{clientHeight:t,scrollTop:i}=document.scrollingElement;(Xr===void 0||e!==window.innerHeight)&&(Xr=t-e,document.scrollingElement.scrollTop=i),i>Xr&&(document.scrollingElement.scrollTop-=Math.ceil((i-Xr)/8))}))}function nf(n){const e=document.body,t=window.visualViewport!==void 0;if(n==="add"){const{overflowY:i,overflowX:s}=window.getComputedStyle(e);Ol=Sy(window),Fl=yy(window),Jd=e.style.left,Qd=e.style.top,ef=window.location.href,e.style.left=`-${Ol}px`,e.style.top=`-${Fl}px`,s!=="hidden"&&(s==="scroll"||e.scrollWidth>window.innerWidth)&&e.classList.add("q-body--force-scrollbar-x"),i!=="hidden"&&(i==="scroll"||e.scrollHeight>window.innerHeight)&&e.classList.add("q-body--force-scrollbar-y"),e.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,pt.is.ios===!0&&(t===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",Go,kt.passiveCapture),window.visualViewport.addEventListener("scroll",Go,kt.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",tf,kt.passiveCapture))}pt.is.desktop===!0&&pt.is.mac===!0&&window[`${n}EventListener`]("wheel",Ey,kt.notPassive),n==="remove"&&(pt.is.ios===!0&&(t===!0?(window.visualViewport.removeEventListener("resize",Go,kt.passiveCapture),window.visualViewport.removeEventListener("scroll",Go,kt.passiveCapture)):window.removeEventListener("scroll",tf,kt.passiveCapture)),e.classList.remove("q-body--prevent-scroll"),e.classList.remove("q-body--force-scrollbar-x"),e.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,e.style.left=Jd,e.style.top=Qd,window.location.href===ef&&window.scrollTo(Ol,Fl),Xr=void 0)}function wy(n){let e="add";if(n===!0){if(Ir++,ss!==null){clearTimeout(ss),ss=null;return}if(Ir>1)return}else{if(Ir===0||(Ir--,Ir>0))return;if(e="remove",pt.is.ios===!0&&pt.is.nativeMobile===!0){ss!==null&&clearTimeout(ss),ss=setTimeout(()=>{nf(e),ss=null},100);return}}nf(e)}function Ay(){let n;return{preventBodyScroll(e){e!==n&&(n!==void 0||e===!0)&&(n=e,wy(e))}}}const Ms=[];let cr;function Ry(n){cr=n.keyCode===27}function Cy(){cr===!0&&(cr=!1)}function Py(n){cr===!0&&(cr=!1,vo(n,27)===!0&&Ms[Ms.length-1](n))}function eg(n){window[n]("keydown",Ry),window[n]("blur",Cy),window[n]("keyup",Py),cr=!1}function tg(n){pt.is.desktop===!0&&(Ms.push(n),Ms.length===1&&eg("addEventListener"))}function Fa(n){const e=Ms.indexOf(n);e!==-1&&(Ms.splice(e,1),Ms.length===0&&eg("removeEventListener"))}const bs=[];function ng(n){bs[bs.length-1](n)}function Lu(n){pt.is.desktop===!0&&(bs.push(n),bs.length===1&&document.body.addEventListener("focusin",ng))}function Ba(n){const e=bs.indexOf(n);e!==-1&&(bs.splice(e,1),bs.length===0&&document.body.removeEventListener("focusin",ng))}let Wo=0;const Ly={standard:"fixed-full flex-center",top:"fixed-top justify-center",bottom:"fixed-bottom justify-center",right:"fixed-right items-center",left:"fixed-left items-center"},sf={standard:["scale","scale"],top:["slide-down","slide-up"],bottom:["slide-up","slide-down"],right:["slide-left","slide-right"],left:["slide-right","slide-left"]},ig=jt({name:"QDialog",inheritAttrs:!1,props:{...qm,...$m,transitionShow:String,transitionHide:String,persistent:Boolean,autoClose:Boolean,allowFocusOutside:Boolean,noEscDismiss:Boolean,noBackdropDismiss:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,noShake:Boolean,seamless:Boolean,maximized:Boolean,fullWidth:Boolean,fullHeight:Boolean,square:Boolean,backdropFilter:String,position:{type:String,default:"standard",validator:n=>["standard","top","bottom","left","right"].includes(n)}},emits:[...Xm,"shake","click","escapeKey"],setup(n,{slots:e,emit:t,attrs:i}){const s=Ft(),r=ut(null),o=ut(!1),a=ut(!1);let l=null,c=null,u,f;const d=_e(()=>n.persistent!==!0&&n.noRouteDismiss!==!0&&n.seamless!==!0),{preventBodyScroll:h}=Ay(),{registerTimeout:g}=Ua(),{registerTick:_,removeTick:p}=Wm(),{transitionProps:m,transitionStyle:S}=Km(n,()=>sf[n.position][0],()=>sf[n.position][1]),y=_e(()=>S.value+(n.backdropFilter!==void 0?`;backdrop-filter:${n.backdropFilter};-webkit-backdrop-filter:${n.backdropFilter}`:"")),{showPortal:E,hidePortal:P,portalIsAccessible:R,renderPortal:A}=Qm(s,r,he,"dialog"),{hide:C}=jm({showing:o,hideOnRouteChange:d,handleShow:X,handleHide:G,processOnMount:!0}),{addToHistory:b,removeFromHistory:M}=ay(o,C,d),I=_e(()=>`q-dialog__inner flex no-pointer-events q-dialog__inner--${n.maximized===!0?"maximized":"minimized"} q-dialog__inner--${n.position} ${Ly[n.position]}`+(a.value===!0?" q-dialog__inner--animating":"")+(n.fullWidth===!0?" q-dialog__inner--fullwidth":"")+(n.fullHeight===!0?" q-dialog__inner--fullheight":"")+(n.square===!0?" q-dialog__inner--square":"")),N=_e(()=>o.value===!0&&n.seamless!==!0),U=_e(()=>n.autoClose===!0?{onClick:Ie}:{}),F=_e(()=>[`q-dialog fullscreen no-pointer-events q-dialog--${N.value===!0?"modal":"seamless"}`,i.class]);Ut(()=>n.maximized,oe=>{o.value===!0&&ye(oe)}),Ut(N,oe=>{h(oe),oe===!0?(Lu(se),tg(me)):(Ba(se),Fa(me))});function X(oe){b(),c=n.noRefocus===!1&&document.activeElement!==null?document.activeElement:null,ye(n.maximized),E(),a.value=!0,n.noFocus!==!0?(document.activeElement!==null&&document.activeElement.blur(),_(te)):p(),g(()=>{if(s.proxy.$q.platform.is.ios===!0){if(n.seamless!==!0&&document.activeElement){const{top:ce,bottom:De}=document.activeElement.getBoundingClientRect(),{innerHeight:pe}=window,Ne=window.visualViewport!==void 0?window.visualViewport.height:pe;ce>0&&De>Ne/2&&(document.scrollingElement.scrollTop=Math.min(document.scrollingElement.scrollHeight-Ne,De>=pe?1/0:Math.ceil(document.scrollingElement.scrollTop+De-Ne/2))),document.activeElement.scrollIntoView()}f=!0,r.value.click(),f=!1}E(!0),a.value=!1,t("show",oe)},n.transitionDuration)}function G(oe){p(),M(),Se(!0),a.value=!0,P(),c!==null&&(((oe&&oe.type.indexOf("key")===0?c.closest('[tabindex]:not([tabindex^="-"])'):void 0)||c).focus(),c=null),g(()=>{P(!0),a.value=!1,t("hide",oe)},n.transitionDuration)}function te(oe){Zm(()=>{let ce=r.value;if(ce!==null){if(oe!==void 0){const De=ce.querySelector(oe);if(De!==null){De.focus({preventScroll:!0});return}}ce.contains(document.activeElement)!==!0&&(ce=ce.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||ce.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||ce.querySelector("[autofocus], [data-autofocus]")||ce,ce.focus({preventScroll:!0}))}})}function q(oe){oe&&typeof oe.focus=="function"?oe.focus({preventScroll:!0}):te(),t("shake");const ce=r.value;ce!==null&&(ce.classList.remove("q-animate--scale"),ce.classList.add("q-animate--scale"),l!==null&&clearTimeout(l),l=setTimeout(()=>{l=null,r.value!==null&&(ce.classList.remove("q-animate--scale"),te())},170))}function me(){n.seamless!==!0&&(n.persistent===!0||n.noEscDismiss===!0?n.maximized!==!0&&n.noShake!==!0&&q():(t("escapeKey"),C()))}function Se(oe){l!==null&&(clearTimeout(l),l=null),(oe===!0||o.value===!0)&&(ye(!1),n.seamless!==!0&&(h(!1),Ba(se),Fa(me))),oe!==!0&&(c=null)}function ye(oe){oe===!0?u!==!0&&(Wo<1&&document.body.classList.add("q-body--dialog"),Wo++,u=!0):u===!0&&(Wo<2&&document.body.classList.remove("q-body--dialog"),Wo--,u=!1)}function Ie(oe){f!==!0&&(C(oe),t("click",oe))}function Ze(oe){n.persistent!==!0&&n.noBackdropDismiss!==!0?C(oe):n.noShake!==!0&&q()}function se(oe){n.allowFocusOutside!==!0&&R.value===!0&&Cm(r.value,oe.target)!==!0&&te('[tabindex]:not([tabindex="-1"])')}Object.assign(s.proxy,{focus:te,shake:q,__updateRefocusTarget(oe){c=oe||null}}),In(Se);function he(){return we("div",{role:"dialog","aria-modal":N.value===!0?"true":"false",...i,class:F.value},[we(ui,{name:"q-transition--fade",appear:!0},()=>N.value===!0?we("div",{class:"q-dialog__backdrop fixed-full",style:y.value,"aria-hidden":"true",tabindex:-1,onClick:Ze}):null),we(ui,m.value,()=>o.value===!0?we("div",{ref:r,class:I.value,style:S.value,tabindex:-1,...U.value},pn(e.default)):null)])}return A}}),sg=n=>(br("data-v-73d65c6b"),n=n(),Er(),n),Iy={key:0,style:{"border-bottom":"2px solid",height:"60px"},class:"row bg-white rounded-borders shadow-4 z-top"},Dy=sg(()=>Ye("img",{src:"images/logo.png",height:"100%"},null,-1)),Ny={key:1,class:"z-top"},Uy={class:"row menu"},Oy={class:"col column bg-white nav-items left"},Fy={class:"q-ml-sm q-pt-sm"},By={class:"col column bg-white nav-items right q-pt-sm"},ky={class:"self-end q-mr-lg"},zy=sg(()=>Ye("div",{id:"modeToggle",class:"row justify-center items-center"},[Ye("img",{src:"images/3dToggleImage.png",class:"overflow-hidden absolute-center",alt:""}),Ye("p",{class:"modeToggleText"},"3D")],-1)),Hy=[zy],Vy={__name:"Navbar",setup(n){const e=Tr(),t=ut(!1);return(i,s)=>(yt(),Dt(nn,null,[ct(e).mobile?(yt(),Dt("nav",Iy,[t.value?(yt(),Hc(si,{key:1,icon:"close",flat:"",round:"",dense:"",onClick:s[1]||(s[1]=r=>t.value=!1)})):(yt(),Hc(si,{key:0,flat:"",round:"",dense:"",icon:"menu",onClick:s[0]||(s[0]=r=>t.value=!0)})),Le(iy),Dy])):(yt(),Dt("nav",Ny,[Ye("div",Uy,[Ye("div",Oy,[Ye("ul",Fy,[Ye("li",{style:{"margin-right":"6vw"},class:Dn({selected:ct(e).tab==="home"}),onClick:s[2]||(s[2]=r=>ct(e).tab="home")},"Home",2),Ye("li",{class:Dn({selected:ct(e).tab==="projects"}),onClick:s[3]||(s[3]=r=>ct(e).tab="projects")},"Projects",2)])]),Ye("div",By,[Ye("ul",ky,[Ye("li",{class:Dn({selected:ct(e).tab==="contact"}),onClick:s[4]||(s[4]=r=>ct(e).tab="contact")},"Contact",2),Ye("li",{onClick:s[5]||(s[5]=r=>ct(e).siteMode="3D"),style:{"margin-left":"6vw","margin-right":"2vw"}},Hy)])])])])),Le(ig,{modelValue:t.value,"onUpdate:modelValue":s[10]||(s[10]=r=>t.value=r),position:"left","full-height":"",class:"sideBar"},{default:Rt(()=>[Le(Vm,{class:"q-pt-lg q-pr-xl"},{default:Rt(()=>[Ye("ul",{onClick:s[9]||(s[9]=r=>t.value=!1),style:{"font-family":"'cooper-black-std', serif"}},[Ye("li",{class:Dn({selected:ct(e).tab==="home"}),onClick:s[6]||(s[6]=r=>ct(e).tab="home")},"Home",2),Ye("li",{class:Dn({selected:ct(e).tab==="projects"}),onClick:s[7]||(s[7]=r=>ct(e).tab="projects")},"Projects",2),Ye("li",{class:Dn({selected:ct(e).tab==="contact"}),onClick:s[8]||(s[8]=r=>ct(e).tab="contact")},"Contact",2)])]),_:1})]),_:1},8,["modelValue"])],64))}},Gy=Ki(Vy,[["__scopeId","data-v-73d65c6b"]]),Wy={true:"inset",item:"item-inset","item-thumbnail":"item-thumbnail-inset"},kl={xs:2,sm:4,md:8,lg:16,xl:24},qy=jt({name:"QSeparator",props:{...Ro,spaced:[Boolean,String],inset:[Boolean,String],vertical:Boolean,color:String,size:String},setup(n){const e=Ft(),t=Co(n,e.proxy.$q),i=_e(()=>n.vertical===!0?"vertical":"horizontal"),s=_e(()=>` q-separator--${i.value}`),r=_e(()=>n.inset!==!1?`${s.value}-${Wy[n.inset]}`:""),o=_e(()=>`q-separator${s.value}${r.value}`+(n.color!==void 0?` bg-${n.color}`:"")+(t.value===!0?" q-separator--dark":"")),a=_e(()=>{const l={};if(n.size!==void 0&&(l[n.vertical===!0?"width":"height"]=n.size),n.spaced!==!1){const c=n.spaced===!0?`${kl.md}px`:n.spaced in kl?`${kl[n.spaced]}px`:n.spaced,u=n.vertical===!0?["Left","Right"]:["Top","Bottom"];l[`margin${u[0]}`]=l[`margin${u[1]}`]=c}return l});return()=>we("hr",{class:o.value,style:a.value,"aria-orientation":i.value})}}),Xy={ratio:[String,Number]};function jy(n,e){return _e(()=>{const t=Number(n.ratio||(e!==void 0?e.value:void 0));return isNaN(t)!==!0&&t>0?{paddingBottom:`${100/t}%`}:null})}const $y=1.7778,Yc=jt({name:"QImg",props:{...Xy,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},loadingShowDelay:{type:[Number,String],default:0},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:$y},placeholderSrc:String,errorSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(n,{slots:e,emit:t}){const i=ut(n.initialRatio),s=jy(n,i),r=Ft(),{registerTimeout:o,removeTimeout:a}=Ua(),{registerTimeout:l,removeTimeout:c}=Ua(),u=_e(()=>n.placeholderSrc!==void 0?{src:n.placeholderSrc}:null),f=_e(()=>n.errorSrc!==void 0?{src:n.errorSrc,__qerror:!0}:null),d=[ut(null),ut(u.value)],h=ut(0),g=ut(!1),_=ut(!1),p=_e(()=>`q-img q-img--${n.noNativeMenu===!0?"no-":""}menu`),m=_e(()=>({width:n.width,height:n.height})),S=_e(()=>`q-img__image ${n.imgClass!==void 0?n.imgClass+" ":""}q-img__image--with${n.noTransition===!0?"out":""}-transition q-img__image--`),y=_e(()=>({...n.imgStyle,objectFit:n.fit,objectPosition:n.position}));function E(){if(c(),n.loadingShowDelay===0){g.value=!0;return}l(()=>{g.value=!0},n.loadingShowDelay)}function P(){c(),g.value=!1}function R({target:N}){so(r)===!1&&(a(),i.value=N.naturalHeight===0?.5:N.naturalWidth/N.naturalHeight,A(N,1))}function A(N,U){U===1e3||so(r)===!0||(N.complete===!0?C(N):o(()=>{A(N,U+1)},50))}function C(N){so(r)!==!0&&(h.value=h.value^1,d[h.value].value=null,P(),N.getAttribute("__qerror")!=="true"&&(_.value=!1),t("load",N.currentSrc||N.src))}function b(N){a(),P(),_.value=!0,d[h.value].value=f.value,d[h.value^1].value=u.value,t("error",N)}function M(N){const U=d[N].value,F={key:"img_"+N,class:S.value,style:y.value,alt:n.alt,crossorigin:n.crossorigin,decoding:n.decoding,referrerpolicy:n.referrerpolicy,height:n.height,width:n.width,loading:n.loading,fetchpriority:n.fetchpriority,"aria-hidden":"true",draggable:n.draggable,...U};return h.value===N?Object.assign(F,{class:F.class+"current",onLoad:R,onError:b}):F.class+="loaded",we("div",{class:"q-img__container absolute-full",key:"img"+N},we("img",F))}function I(){return g.value===!1?we("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},pn(e[_.value===!0?"error":"default"])):we("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},e.loading!==void 0?e.loading():n.noSpinner===!0?void 0:[we(Rm,{color:n.spinnerColor,size:n.spinnerSize})])}{let N=function(){Ut(()=>n.src||n.srcset||n.sizes?{src:n.src,srcset:n.srcset,sizes:n.sizes}:null,U=>{a(),_.value=!1,U===null?(P(),d[h.value^1].value=u.value):E(),d[h.value].value=U},{immediate:!0})};Vn.value===!0?As(N):N()}return()=>{const N=[];return s.value!==null&&N.push(we("div",{key:"filler",style:s.value})),d[0].value!==null&&N.push(M(0)),d[1].value!==null&&N.push(M(1)),N.push(we(ui,{name:"q-transition--fade"},I)),we("div",{key:"main",class:p.value,style:m.value,role:"img","aria-label":n.alt},N)}}}),rf=jt({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(n,{slots:e}){const t=_e(()=>`q-card__section q-card__section--${n.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>we(n.tag,{class:t.value},pn(e.default))}}),Ky={},Yy=n=>(br("data-v-763c4b9f"),n=n(),Er(),n),Zy=Yy(()=>Ye("p",{class:"text-h5"},[Ui(" Ik heb altijd al interesse gehad in game-development en design, "),Ye("br"),Ui(" maar ik ben pas echt begonnen met programeren als keuzevak van mijn mbo ict-support opleiding."),Ye("br"),Ye("br"),Ui(" Hierna begon ik een 3 jarige software development opleiding waar ik mezelf echt vond in coderen."),Ye("br"),Ui(" daar kwam ik erachter hoe interresant de techniek achter het maken van software is."),Ye("br"),Ye("br"),Ui(" Ik houd van creatief zijn in coderen en problemen oplossen op de meest efficiente manier. ")],-1));function Jy(n,e){const t=Dc("q-card-header");return yt(),Dt(nn,null,[Ye("section",null,[Le(Vm,{id:"context",class:"scroll self-end"},{default:Rt(()=>[Le(t,{class:"text-h3 q-ma-md"},{default:Rt(()=>[Ui(" Hallo, ik ben Luke! ")]),_:1}),Le(qy),Le(rf,{class:"q-pa-none"},{default:Rt(()=>[Le(Yc,{class:"lt-sm q-pa-none rounded-borders",width:"100%",src:"/images/homePicture.png"})]),_:1}),Le(rf,null,{default:Rt(()=>[Zy]),_:1})]),_:1})]),Le(Yc,{class:"fixed-bottom-right gt-xs",width:"25%",height:"90%",src:"/images/homePicture.png"})],64)}const Qy=Ki(Ky,[["render",Jy],["__scopeId","data-v-763c4b9f"]]);function ba(n,e){if(n===e)return!0;if(n!==null&&e!==null&&typeof n=="object"&&typeof e=="object"){if(n.constructor!==e.constructor)return!1;let t,i;if(n.constructor===Array){if(t=n.length,t!==e.length)return!1;for(i=t;i--!==0;)if(ba(n[i],e[i])!==!0)return!1;return!0}if(n.constructor===Map){if(n.size!==e.size)return!1;let r=n.entries();for(i=r.next();i.done!==!0;){if(e.has(i.value[0])!==!0)return!1;i=r.next()}for(r=n.entries(),i=r.next();i.done!==!0;){if(ba(i.value[1],e.get(i.value[0]))!==!0)return!1;i=r.next()}return!0}if(n.constructor===Set){if(n.size!==e.size)return!1;const r=n.entries();for(i=r.next();i.done!==!0;){if(e.has(i.value[0])!==!0)return!1;i=r.next()}return!0}if(n.buffer!=null&&n.buffer.constructor===ArrayBuffer){if(t=n.length,t!==e.length)return!1;for(i=t;i--!==0;)if(n[i]!==e[i])return!1;return!0}if(n.constructor===RegExp)return n.source===e.source&&n.flags===e.flags;if(n.valueOf!==Object.prototype.valueOf)return n.valueOf()===e.valueOf();if(n.toString!==Object.prototype.toString)return n.toString()===e.toString();const s=Object.keys(n).filter(r=>n[r]!==void 0);if(t=s.length,t!==Object.keys(e).filter(r=>e[r]!==void 0).length)return!1;for(i=t;i--!==0;){const r=s[i];if(ba(n[r],e[r])!==!0)return!1}return!0}return n!==n&&e!==e}function of(n){return n!==null&&typeof n=="object"&&Array.isArray(n)!==!0}const af={threshold:0,root:null,rootMargin:"0px"};function lf(n,e,t){let i,s,r;typeof t=="function"?(i=t,s=af,r=e.cfg===void 0):(i=t.handler,s=Object.assign({},af,t.cfg),r=e.cfg===void 0||ba(e.cfg,s)===!1),e.handler!==i&&(e.handler=i),r===!0&&(e.cfg=s,e.observer!==void 0&&e.observer.unobserve(n),e.observer=new IntersectionObserver(([o])=>{if(typeof e.handler=="function"){if(o.rootBounds===null&&document.body.contains(n)===!0){e.observer.unobserve(n),e.observer.observe(n);return}(e.handler(o,e.observer)===!1||e.once===!0&&o.isIntersecting===!0)&&rg(n)}},s),e.observer.observe(n))}function rg(n){const e=n.__qvisible;e!==void 0&&(e.observer!==void 0&&e.observer.unobserve(n),delete n.__qvisible)}const eS=Cu({name:"intersection",mounted(n,{modifiers:e,value:t}){const i={once:e.once===!0};lf(n,i,t),n.__qvisible=i},updated(n,e){const t=n.__qvisible;t!==void 0&&lf(n,t,e.value)},beforeUnmount:rg}),tS=jt({name:"QIntersection",props:{tag:{type:String,default:"div"},once:Boolean,transition:String,transitionDuration:{type:[String,Number],default:300},ssrPrerender:Boolean,margin:String,threshold:[Number,Array],root:{default:null},disable:Boolean,onVisibility:Function},setup(n,{slots:e,emit:t}){const i=ut(Vn.value===!0?n.ssrPrerender:!1),s=_e(()=>n.root!==void 0||n.margin!==void 0||n.threshold!==void 0?{handler:l,cfg:{root:n.root,rootMargin:n.margin,threshold:n.threshold}}:l),r=_e(()=>n.disable!==!0&&(Vn.value!==!0||n.once!==!0||n.ssrPrerender!==!0)),o=_e(()=>[[eS,s.value,void 0,{once:n.once}]]),a=_e(()=>`--q-transition-duration: ${n.transitionDuration}ms`);function l(u){i.value!==u.isIntersecting&&(i.value=u.isIntersecting,n.onVisibility!==void 0&&t("visibility",i.value))}function c(){if(i.value===!0)return[we("div",{key:"content",style:a.value},pn(e.default))];if(e.hidden!==void 0)return[we("div",{key:"hidden",style:a.value},e.hidden())]}return()=>{const u=n.transition?[we(ui,{name:"q-transition--"+n.transition},c)]:c();return Em(n.tag,{class:"q-intersection"},u,"main",r.value,()=>o.value)}}}),nS=n=>(br("data-v-a36958bb"),n=n(),Er(),n),iS={id:"projects"},sS=nS(()=>Ye("p",{class:"absolute-center-bottom text-h3"},"Fabriek",-1)),rS={__name:"Projects",setup(n){const e=Tr();function t(){window.open("https://dev.moogue-presentation-04.pages.dev/","_blank")}return(i,s)=>(yt(),Dt("section",iS,[Le(tS,{style:{width:"100%"},transition:"scale"},{default:Rt(()=>[Ye("div",{class:Dn(["projectRow",{row:ct(e).mobile===!1}])},[Le(si,{class:"projectButton col-4",onClick:s[0]||(s[0]=r=>t())},{default:Rt(()=>[Le(Yc,{src:"images/projects/roller.png"}),sS]),_:1})],2)]),_:1})]))}},oS=Ki(rS,[["__scopeId","data-v-a36958bb"]]),aS=jt({name:"QBanner",props:{...Ro,inlineActions:Boolean,dense:Boolean,rounded:Boolean},setup(n,{slots:e}){const{proxy:{$q:t}}=Ft(),i=Co(n,t),s=_e(()=>"q-banner row items-center"+(n.dense===!0?" q-banner--dense":"")+(i.value===!0?" q-banner--dark q-dark":"")+(n.rounded===!0?" rounded-borders":"")),r=_e(()=>`q-banner__actions row items-center justify-end col-${n.inlineActions===!0?"auto":"all"}`);return()=>{const o=[we("div",{class:"q-banner__avatar col-auto row items-center self-start"},pn(e.avatar)),we("div",{class:"q-banner__content col text-body2"},pn(e.default))],a=pn(e.action);return a!==void 0&&o.push(we("div",{class:r.value},a)),we("div",{class:s.value+(n.inlineActions===!1&&a!==void 0?" q-banner--top-padding":""),role:"alert"},o)}}}),lS={target:{type:[Boolean,String,Element],default:!0},noParentEvent:Boolean},og={...lS,contextMenu:Boolean};function ag({showing:n,avoidEmit:e,configureAnchorEl:t}){const{props:i,proxy:s,emit:r}=Ft(),o=ut(null);let a=null;function l(h){return o.value===null?!1:h===void 0||h.touches===void 0||h.touches.length<=1}const c={};t===void 0&&(Object.assign(c,{hide(h){s.hide(h)},toggle(h){s.toggle(h),h.qAnchorHandled=!0},toggleKey(h){vo(h,13)===!0&&c.toggle(h)},contextClick(h){s.hide(h),_o(h),Ts(()=>{s.show(h),h.qAnchorHandled=!0})},prevent:_o,mobileTouch(h){if(c.mobileCleanup(h),l(h)!==!0)return;s.hide(h),o.value.classList.add("non-selectable");const g=h.target;_s(c,"anchor",[[g,"touchmove","mobileCleanup","passive"],[g,"touchend","mobileCleanup","passive"],[g,"touchcancel","mobileCleanup","passive"],[o.value,"contextmenu","prevent","notPassive"]]),a=setTimeout(()=>{a=null,s.show(h),h.qAnchorHandled=!0},300)},mobileCleanup(h){o.value.classList.remove("non-selectable"),a!==null&&(clearTimeout(a),a=null),n.value===!0&&h!==void 0&&Hm()}}),t=function(h=i.contextMenu){if(i.noParentEvent===!0||o.value===null)return;let g;h===!0?s.$q.platform.is.mobile===!0?g=[[o.value,"touchstart","mobileTouch","passive"]]:g=[[o.value,"mousedown","hide","passive"],[o.value,"contextmenu","contextClick","notPassive"]]:g=[[o.value,"click","toggle","passive"],[o.value,"keyup","toggleKey","passive"]],_s(c,"anchor",g)});function u(){io(c,"anchor")}function f(h){for(o.value=h;o.value.classList.contains("q-anchor--skip");)o.value=o.value.parentNode;t()}function d(){if(i.target===!1||i.target===""||s.$el.parentNode===null)o.value=null;else if(i.target===!0)f(s.$el.parentNode);else{let h=i.target;if(typeof i.target=="string")try{h=document.querySelector(i.target)}catch{h=void 0}h!=null?(o.value=h.$el||h,t()):(o.value=null,console.error(`Anchor: target "${i.target}" not found`))}}return Ut(()=>i.contextMenu,h=>{o.value!==null&&(u(),t(h))}),Ut(()=>i.target,()=>{o.value!==null&&u(),d()}),Ut(()=>i.noParentEvent,h=>{o.value!==null&&(h===!0?u():t())}),As(()=>{d(),e!==!0&&i.modelValue===!0&&o.value===null&&r("update:modelValue",!1)}),In(()=>{a!==null&&clearTimeout(a),u()}),{anchorEl:o,canShow:l,anchorEvents:c}}function cS(n,e){const t=ut(null);let i;function s(a,l){const c=`${l!==void 0?"add":"remove"}EventListener`,u=l!==void 0?l:i;a!==window&&a[c]("scroll",u,kt.passive),window[c]("scroll",u,kt.passive),i=l}function r(){t.value!==null&&(s(t.value),t.value=null)}const o=Ut(()=>n.noParentEvent,()=>{t.value!==null&&(r(),e())});return In(o),{localScrollTarget:t,unconfigureScrollTarget:r,changeScrollEvent:s}}const{notPassiveCapture:ka}=kt,Es=[];function za(n){const e=n.target;if(e===void 0||e.nodeType===8||e.classList.contains("no-pointer-events")===!0)return;let t=oo.length-1;for(;t>=0;){const i=oo[t].$;if(i.type.name==="QTooltip"){t--;continue}if(i.type.name!=="QDialog")break;if(i.props.seamless!==!0)return;t--}for(let i=Es.length-1;i>=0;i--){const s=Es[i];if((s.anchorEl.value===null||s.anchorEl.value.contains(e)===!1)&&(e===document.body||s.innerRef.value!==null&&s.innerRef.value.contains(e)===!1))n.qClickOutside=!0,s.onClickOutside(n);else return}}function uS(n){Es.push(n),Es.length===1&&(document.addEventListener("mousedown",za,ka),document.addEventListener("touchstart",za,ka))}function cf(n){const e=Es.findIndex(t=>t===n);e!==-1&&(Es.splice(e,1),Es.length===0&&(document.removeEventListener("mousedown",za,ka),document.removeEventListener("touchstart",za,ka)))}let uf,df;function ff(n){const e=n.split(" ");return e.length!==2?!1:["top","center","bottom"].includes(e[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(e[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function dS(n){return n?!(n.length!==2||typeof n[0]!="number"||typeof n[1]!="number"):!0}const Zc={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(n=>{Zc[`${n}#ltr`]=n,Zc[`${n}#rtl`]=n});function hf(n,e){const t=n.split(" ");return{vertical:t[0],horizontal:Zc[`${t[1]}#${e===!0?"rtl":"ltr"}`]}}function fS(n,e){let{top:t,left:i,right:s,bottom:r,width:o,height:a}=n.getBoundingClientRect();return e!==void 0&&(t-=e[1],i-=e[0],r+=e[1],s+=e[0],o+=e[0],a+=e[1]),{top:t,bottom:r,height:a,left:i,right:s,width:o,middle:i+(s-i)/2,center:t+(r-t)/2}}function hS(n,e,t){let{top:i,left:s}=n.getBoundingClientRect();return i+=e.top,s+=e.left,t!==void 0&&(i+=t[1],s+=t[0]),{top:i,bottom:i+1,height:1,left:s,right:s+1,width:1,middle:s,center:i}}function pS(n,e){return{top:0,center:e/2,bottom:e,left:0,middle:n/2,right:n}}function pf(n,e,t,i){return{top:n[t.vertical]-e[i.vertical],left:n[t.horizontal]-e[i.horizontal]}}function lg(n,e=0){if(n.targetEl===null||n.anchorEl===null||e>5)return;if(n.targetEl.offsetHeight===0||n.targetEl.offsetWidth===0){setTimeout(()=>{lg(n,e+1)},10);return}const{targetEl:t,offset:i,anchorEl:s,anchorOrigin:r,selfOrigin:o,absoluteOffset:a,fit:l,cover:c,maxHeight:u,maxWidth:f}=n;if(pt.is.ios===!0&&window.visualViewport!==void 0){const R=document.body.style,{offsetLeft:A,offsetTop:C}=window.visualViewport;A!==uf&&(R.setProperty("--q-pe-left",A+"px"),uf=A),C!==df&&(R.setProperty("--q-pe-top",C+"px"),df=C)}const{scrollLeft:d,scrollTop:h}=t,g=a===void 0?fS(s,c===!0?[0,0]:i):hS(s,a,i);Object.assign(t.style,{top:0,left:0,minWidth:null,minHeight:null,maxWidth:f||"100vw",maxHeight:u||"100vh",visibility:"visible"});const{offsetWidth:_,offsetHeight:p}=t,{elWidth:m,elHeight:S}=l===!0||c===!0?{elWidth:Math.max(g.width,_),elHeight:c===!0?Math.max(g.height,p):p}:{elWidth:_,elHeight:p};let y={maxWidth:f,maxHeight:u};(l===!0||c===!0)&&(y.minWidth=g.width+"px",c===!0&&(y.minHeight=g.height+"px")),Object.assign(t.style,y);const E=pS(m,S);let P=pf(g,E,r,o);if(a===void 0||i===void 0)zl(P,g,E,r,o);else{const{top:R,left:A}=P;zl(P,g,E,r,o);let C=!1;if(P.top!==R){C=!0;const b=2*i[1];g.center=g.top-=b,g.bottom-=b+2}if(P.left!==A){C=!0;const b=2*i[0];g.middle=g.left-=b,g.right-=b+2}C===!0&&(P=pf(g,E,r,o),zl(P,g,E,r,o))}y={top:P.top+"px",left:P.left+"px"},P.maxHeight!==void 0&&(y.maxHeight=P.maxHeight+"px",g.height>P.maxHeight&&(y.minHeight=y.maxHeight)),P.maxWidth!==void 0&&(y.maxWidth=P.maxWidth+"px",g.width>P.maxWidth&&(y.minWidth=y.maxWidth)),Object.assign(t.style,y),t.scrollTop!==h&&(t.scrollTop=h),t.scrollLeft!==d&&(t.scrollLeft=d)}function zl(n,e,t,i,s){const r=t.bottom,o=t.right,a=My(),l=window.innerHeight-a,c=document.body.clientWidth;if(n.top<0||n.top+r>l)if(s.vertical==="center")n.top=e[i.vertical]>l/2?Math.max(0,l-r):0,n.maxHeight=Math.min(r,l);else if(e[i.vertical]>l/2){const u=Math.min(l,i.vertical==="center"?e.center:i.vertical===s.vertical?e.bottom:e.top);n.maxHeight=Math.min(r,u),n.top=Math.max(0,u-r)}else n.top=Math.max(0,i.vertical==="center"?e.center:i.vertical===s.vertical?e.top:e.bottom),n.maxHeight=Math.min(r,l-n.top);if(n.left<0||n.left+o>c)if(n.maxWidth=Math.min(o,c),s.horizontal==="middle")n.left=e[i.horizontal]>c/2?Math.max(0,c-o):0;else if(e[i.horizontal]>c/2){const u=Math.min(c,i.horizontal==="middle"?e.middle:i.horizontal===s.horizontal?e.right:e.left);n.maxWidth=Math.min(o,u),n.left=Math.max(0,u-n.maxWidth)}else n.left=Math.max(0,i.horizontal==="middle"?e.middle:i.horizontal===s.horizontal?e.left:e.right),n.maxWidth=Math.min(o,c-n.left)}const mS=jt({name:"QMenu",inheritAttrs:!1,props:{...og,...qm,...Ro,...$m,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:ff},self:{type:String,validator:ff},offset:{type:Array,validator:dS},scrollTarget:_y,touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...Xm,"click","escapeKey"],setup(n,{slots:e,emit:t,attrs:i}){let s=null,r,o,a;const l=Ft(),{proxy:c}=l,{$q:u}=c,f=ut(null),d=ut(!1),h=_e(()=>n.persistent!==!0&&n.noRouteDismiss!==!0),g=Co(n,u),{registerTick:_,removeTick:p}=Wm(),{registerTimeout:m}=Ua(),{transitionProps:S,transitionStyle:y}=Km(n),{localScrollTarget:E,changeScrollEvent:P,unconfigureScrollTarget:R}=cS(n,Ze),{anchorEl:A,canShow:C}=ag({showing:d}),{hide:b}=jm({showing:d,canShow:C,handleShow:Se,handleHide:ye,hideOnRouteChange:h,processOnMount:!0}),{showPortal:M,hidePortal:I,renderPortal:N}=Qm(l,f,De,"menu"),U={anchorEl:A,innerRef:f,onClickOutside(pe){if(n.persistent!==!0&&d.value===!0)return b(pe),(pe.type==="touchstart"||pe.target.classList.contains("q-dialog__backdrop"))&&An(pe),!0}},F=_e(()=>hf(n.anchor||(n.cover===!0?"center middle":"bottom start"),u.lang.rtl)),X=_e(()=>n.cover===!0?F.value:hf(n.self||"top start",u.lang.rtl)),G=_e(()=>(n.square===!0?" q-menu--square":"")+(g.value===!0?" q-menu--dark q-dark":"")),te=_e(()=>n.autoClose===!0?{onClick:se}:{}),q=_e(()=>d.value===!0&&n.persistent!==!0);Ut(q,pe=>{pe===!0?(tg(oe),uS(U)):(Fa(oe),cf(U))});function me(){Zm(()=>{let pe=f.value;pe&&pe.contains(document.activeElement)!==!0&&(pe=pe.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||pe.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||pe.querySelector("[autofocus], [data-autofocus]")||pe,pe.focus({preventScroll:!0}))})}function Se(pe){if(s=n.noRefocus===!1?document.activeElement:null,Lu(he),M(),Ze(),r=void 0,pe!==void 0&&(n.touchPosition||n.contextMenu)){const Ne=Da(pe);if(Ne.left!==void 0){const{top:B,left:Xe}=A.value.getBoundingClientRect();r={left:Ne.left-Xe,top:Ne.top-B}}}o===void 0&&(o=Ut(()=>u.screen.width+"|"+u.screen.height+"|"+n.self+"|"+n.anchor+"|"+u.lang.rtl,ce)),n.noFocus!==!0&&document.activeElement.blur(),_(()=>{ce(),n.noFocus!==!0&&me()}),m(()=>{u.platform.is.ios===!0&&(a=n.autoClose,f.value.click()),ce(),M(!0),t("show",pe)},n.transitionDuration)}function ye(pe){p(),I(),Ie(!0),s!==null&&(pe===void 0||pe.qClickOutside!==!0)&&(((pe&&pe.type.indexOf("key")===0?s.closest('[tabindex]:not([tabindex^="-"])'):void 0)||s).focus(),s=null),m(()=>{I(!0),t("hide",pe)},n.transitionDuration)}function Ie(pe){r=void 0,o!==void 0&&(o(),o=void 0),(pe===!0||d.value===!0)&&(Ba(he),R(),cf(U),Fa(oe)),pe!==!0&&(s=null)}function Ze(){(A.value!==null||n.scrollTarget!==void 0)&&(E.value=xy(A.value,n.scrollTarget),P(E.value,ce))}function se(pe){a!==!0?(py(c,pe),t("click",pe)):a=!1}function he(pe){q.value===!0&&n.noFocus!==!0&&Cm(f.value,pe.target)!==!0&&me()}function oe(pe){t("escapeKey"),b(pe)}function ce(){lg({targetEl:f.value,offset:n.offset,anchorEl:A.value,anchorOrigin:F.value,selfOrigin:X.value,absoluteOffset:r,fit:n.fit,cover:n.cover,maxHeight:n.maxHeight,maxWidth:n.maxWidth})}function De(){return we(ui,S.value,()=>d.value===!0?we("div",{role:"menu",...i,ref:f,tabindex:-1,class:["q-menu q-position-engine scroll"+G.value,i.class],style:[i.style,y.value],...te.value},pn(e.default)):null)}return In(Ie),Object.assign(c,{focus:me,updatePosition:ce}),N}}),gS=jt({name:"QPopupProxy",props:{...og,breakpoint:{type:[String,Number],default:450}},emits:["show","hide"],setup(n,{slots:e,emit:t,attrs:i}){const{proxy:s}=Ft(),{$q:r}=s,o=ut(!1),a=ut(null),l=_e(()=>parseInt(n.breakpoint,10)),{canShow:c}=ag({showing:o});function u(){return r.screen.width<l.value||r.screen.height<l.value?"dialog":"menu"}const f=ut(u()),d=_e(()=>f.value==="menu"?{maxHeight:"99vh"}:{});Ut(()=>u(),_=>{o.value!==!0&&(f.value=_)});function h(_){o.value=!0,t("show",_)}function g(_){o.value=!1,f.value=u(),t("hide",_)}return Object.assign(s,{show(_){c(_)===!0&&a.value.show(_)},hide(_){a.value.hide(_)},toggle(_){a.value.toggle(_)}}),Ao(s,"currentComponent",()=>({type:f.value,ref:a.value})),()=>{const _={ref:a,...d.value,...i,onShow:h,onHide:g};let p;return f.value==="dialog"?p=ig:(p=mS,Object.assign(_,{target:n.target,contextMenu:n.contextMenu,noParentEvent:!0,separateClosePopup:!0})),we(p,_,e.default)}}});function _S(n){const e=document.createElement("textarea");e.value=n,e.contentEditable="true",e.style.position="fixed";const t=()=>{};Lu(t),document.body.appendChild(e),e.focus(),e.select();const i=document.execCommand("copy");return e.remove(),Ba(t),i}function vS(n){return navigator.clipboard!==void 0?navigator.clipboard.writeText(n):new Promise((e,t)=>{const i=_S(n);i?e(!0):t(i)})}const xS=n=>(br("data-v-691009e2"),n=n(),Er(),n),yS={class:"q-pa-sm"},SS={key:0},MS=xS(()=>Ye("p",{class:"text-h4"},"Contact",-1)),bS={key:1},ES={__name:"Contact",setup(n){const e=Tr();function t(){window.open("https://www.linkedin.com/in/luke-dorlas-456768292/","_blank").focus()}function i(){window.open("mailto:lukedorlas@gmail.com")}return(s,r)=>(yt(),Dt("section",yS,[ct(e).mobile?(yt(),Dt("div",SS,[MS,Le(si,{class:"q-ma-sm",icon:"mail",label:"lukedorlas@gmail.com",size:"20px",onClick:i,rounded:"","no-caps":""}),Le(si,{class:"q-ma-sm",icon:"img:images/linkedin.png",label:"Luke Dorlas",size:"20px",onClick:t,rounded:"","no-caps":""})])):(yt(),Dt("div",bS,[Le(si,{class:"q-ma-sm contactButton",icon:"mail",label:"lukedorlas@gmail.com",size:"45px","no-caps":"",rounded:"",onClick:r[0]||(r[0]=o=>ct(vS)("lukedorlas@gmail.com")),onDblclick:r[1]||(r[1]=o=>i())},{default:Rt(()=>[Le(gS,null,{default:Rt(()=>[Le(aS,null,{default:Rt(()=>[Ui(" Gekopiëerd! ")]),_:1})]),_:1})]),_:1}),Le(si,{class:"q-ma-sm contactButton",icon:"img:images/linkedin.png",label:"Luke Dorlas",size:"45px","no-caps":"",rounded:"",onClick:r[2]||(r[2]=o=>t())})]))]))}},TS=Ki(ES,[["__scopeId","data-v-691009e2"]]),wS={__name:"Website",setup(n){const e=Tr();return(t,i)=>{const s=Dc("project-showcase-panel"),r=Dc("q-tab-pan");return yt(),Dt(nn,null,[Le(Gy),Le(ty,{modelValue:ct(e).tab,"onUpdate:modelValue":i[0]||(i[0]=o=>ct(e).tab=o)},{default:Rt(()=>[Le(Ul,{name:"home",id:"home"},{default:Rt(()=>[Le(Qy)]),_:1}),Le(Ul,{name:"projects",id:"projects",class:"column items-center q-pa-sm"},{default:Rt(()=>[Le(oS)]),_:1}),Le(r,{name:"projectShowcase",id:"projectShowcase"},{default:Rt(()=>[Le(s)]),_:1}),Le(Ul,{name:"contact",id:"contact"},{default:Rt(()=>[Le(TS)]),_:1})]),_:1},8,["modelValue"])],64)}}},AS=Ki(wS,[["__scopeId","data-v-f7f8764b"]]);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Iu="165",Ds={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ns={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},RS=0,mf=1,CS=2,cg=1,PS=2,ni=3,di=0,sn=1,Fn=2,Vi=0,sr=1,gf=2,_f=3,vf=4,LS=5,ps=100,IS=101,DS=102,NS=103,US=104,OS=200,FS=201,BS=202,kS=203,Jc=204,Qc=205,zS=206,HS=207,VS=208,GS=209,WS=210,qS=211,XS=212,jS=213,$S=214,KS=0,YS=1,ZS=2,Ha=3,JS=4,QS=5,eM=6,tM=7,ug=0,nM=1,iM=2,Gi=0,sM=1,rM=2,dg=3,oM=4,aM=5,lM=6,cM=7,xf="attached",uM="detached",fg=300,ur=301,dr=302,eu=303,tu=304,fl=306,fr=1e3,Fi=1001,Va=1002,en=1003,hg=1004,jr=1005,fn=1006,Ea=1007,ri=1008,qi=1009,dM=1010,fM=1011,Ga=1012,pg=1013,hr=1014,kn=1015,hl=1016,mg=1017,gg=1018,pr=1020,hM=35902,pM=1021,mM=1022,Pn=1023,gM=1024,_M=1025,rr=1026,mr=1027,_g=1028,vg=1029,vM=1030,xg=1031,yg=1033,Hl=33776,Vl=33777,Gl=33778,Wl=33779,yf=35840,Sf=35841,Mf=35842,bf=35843,Ef=36196,Tf=37492,wf=37496,Af=37808,Rf=37809,Cf=37810,Pf=37811,Lf=37812,If=37813,Df=37814,Nf=37815,Uf=37816,Of=37817,Ff=37818,Bf=37819,kf=37820,zf=37821,ql=36492,Hf=36494,Vf=36495,xM=36283,Gf=36284,Wf=36285,qf=36286,yo=2300,So=2301,Xl=2302,Xf=2400,jf=2401,$f=2402,yM=2500,SM=0,Sg=1,nu=2,MM=3200,bM=3201,Mg=0,EM=1,Oi="",Jt="srgb",Ht="srgb-linear",Du="display-p3",pl="display-p3-linear",Wa="linear",ft="srgb",qa="rec709",Xa="p3",Us=7680,Kf=519,TM=512,wM=513,AM=514,bg=515,RM=516,CM=517,PM=518,LM=519,iu=35044,Yf="300 es",oi=2e3,ja=2001;class hi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Zf=1234567;const ao=Math.PI/180,gr=180/Math.PI;function Ln(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Vt[n&255]+Vt[n>>8&255]+Vt[n>>16&255]+Vt[n>>24&255]+"-"+Vt[e&255]+Vt[e>>8&255]+"-"+Vt[e>>16&15|64]+Vt[e>>24&255]+"-"+Vt[t&63|128]+Vt[t>>8&255]+"-"+Vt[t>>16&255]+Vt[t>>24&255]+Vt[i&255]+Vt[i>>8&255]+Vt[i>>16&255]+Vt[i>>24&255]).toLowerCase()}function zt(n,e,t){return Math.max(e,Math.min(t,n))}function Nu(n,e){return(n%e+e)%e}function IM(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function DM(n,e,t){return n!==e?(t-n)/(e-n):0}function lo(n,e,t){return(1-t)*n+t*e}function NM(n,e,t,i){return lo(n,e,1-Math.exp(-t*i))}function UM(n,e=1){return e-Math.abs(Nu(n,e*2)-e)}function OM(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function FM(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function BM(n,e){return n+Math.floor(Math.random()*(e-n+1))}function kM(n,e){return n+Math.random()*(e-n)}function zM(n){return n*(.5-Math.random())}function HM(n){n!==void 0&&(Zf=n);let e=Zf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function VM(n){return n*ao}function GM(n){return n*gr}function WM(n){return(n&n-1)===0&&n!==0}function qM(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function XM(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function jM(n,e,t,i,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),u=o((e+i)/2),f=r((e-i)/2),d=o((e-i)/2),h=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*u,l*f,l*d,a*c);break;case"YZY":n.set(l*d,a*u,l*f,a*c);break;case"ZXZ":n.set(l*f,l*d,a*u,a*c);break;case"XZX":n.set(a*u,l*g,l*h,a*c);break;case"YXY":n.set(l*h,a*u,l*g,a*c);break;case"ZYZ":n.set(l*g,l*h,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Rn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ot(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Eg={DEG2RAD:ao,RAD2DEG:gr,generateUUID:Ln,clamp:zt,euclideanModulo:Nu,mapLinear:IM,inverseLerp:DM,lerp:lo,damp:NM,pingpong:UM,smoothstep:OM,smootherstep:FM,randInt:BM,randFloat:kM,randFloatSpread:zM,seededRandom:HM,degToRad:VM,radToDeg:GM,isPowerOfTwo:WM,ceilPowerOfTwo:qM,floorPowerOfTwo:XM,setQuaternionFromProperEuler:jM,normalize:ot,denormalize:Rn};class Fe{constructor(e=0,t=0){Fe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(zt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ke{constructor(e,t,i,s,r,o,a,l,c){Ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],h=i[5],g=i[8],_=s[0],p=s[3],m=s[6],S=s[1],y=s[4],E=s[7],P=s[2],R=s[5],A=s[8];return r[0]=o*_+a*S+l*P,r[3]=o*p+a*y+l*R,r[6]=o*m+a*E+l*A,r[1]=c*_+u*S+f*P,r[4]=c*p+u*y+f*R,r[7]=c*m+u*E+f*A,r[2]=d*_+h*S+g*P,r[5]=d*p+h*y+g*R,r[8]=d*m+h*E+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,d=a*l-u*r,h=c*r-o*l,g=t*f+i*d+s*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(s*c-u*i)*_,e[2]=(a*i-s*o)*_,e[3]=d*_,e[4]=(u*t-s*l)*_,e[5]=(s*r-a*t)*_,e[6]=h*_,e[7]=(i*l-c*t)*_,e[8]=(o*t-i*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(jl.makeScale(e,t)),this}rotate(e){return this.premultiply(jl.makeRotation(-e)),this}translate(e,t){return this.premultiply(jl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const jl=new Ke;function Tg(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Mo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function $M(){const n=Mo("canvas");return n.style.display="block",n}const Jf={};function Uu(n){n in Jf||(Jf[n]=!0,console.warn(n))}function KM(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const Qf=new Ke().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),eh=new Ke().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),qo={[Ht]:{transfer:Wa,primaries:qa,toReference:n=>n,fromReference:n=>n},[Jt]:{transfer:ft,primaries:qa,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[pl]:{transfer:Wa,primaries:Xa,toReference:n=>n.applyMatrix3(eh),fromReference:n=>n.applyMatrix3(Qf)},[Du]:{transfer:ft,primaries:Xa,toReference:n=>n.convertSRGBToLinear().applyMatrix3(eh),fromReference:n=>n.applyMatrix3(Qf).convertLinearToSRGB()}},YM=new Set([Ht,pl]),it={enabled:!0,_workingColorSpace:Ht,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!YM.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=qo[e].toReference,s=qo[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return qo[n].primaries},getTransfer:function(n){return n===Oi?Wa:qo[n].transfer}};function or(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function $l(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Os;class ZM{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Os===void 0&&(Os=Mo("canvas")),Os.width=e.width,Os.height=e.height;const i=Os.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Os}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Mo("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=or(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(or(t[i]/255)*255):t[i]=or(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let JM=0;class wg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:JM++}),this.uuid=Ln(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Kl(s[o].image)):r.push(Kl(s[o]))}else r=Kl(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function Kl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ZM.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let QM=0;class Ot extends hi{constructor(e=Ot.DEFAULT_IMAGE,t=Ot.DEFAULT_MAPPING,i=Fi,s=Fi,r=fn,o=ri,a=Pn,l=qi,c=Ot.DEFAULT_ANISOTROPY,u=Oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:QM++}),this.uuid=Ln(),this.name="",this.source=new wg(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Fe(0,0),this.repeat=new Fe(1,1),this.center=new Fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==fg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case fr:e.x=e.x-Math.floor(e.x);break;case Fi:e.x=e.x<0?0:1;break;case Va:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case fr:e.y=e.y-Math.floor(e.y);break;case Fi:e.y=e.y<0?0:1;break;case Va:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ot.DEFAULT_IMAGE=null;Ot.DEFAULT_MAPPING=fg;Ot.DEFAULT_ANISOTROPY=1;class dt{constructor(e=0,t=0,i=0,s=1){dt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],h=l[5],g=l[9],_=l[2],p=l[6],m=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+h+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,E=(h+1)/2,P=(m+1)/2,R=(u+d)/4,A=(f+_)/4,C=(g+p)/4;return y>E&&y>P?y<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(y),s=R/i,r=A/i):E>P?E<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),i=R/s,r=C/s):P<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),i=A/r,s=C/r),this.set(i,s,r,t),this}let S=Math.sqrt((p-g)*(p-g)+(f-_)*(f-_)+(d-u)*(d-u));return Math.abs(S)<.001&&(S=1),this.x=(p-g)/S,this.y=(f-_)/S,this.z=(d-u)/S,this.w=Math.acos((c+h+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class eb extends hi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new Ot(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new wg(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ws extends eb{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Ag extends Ot{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=en,this.minFilter=en,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class tb extends Ot{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=en,this.minFilter=en,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gn{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],f=i[s+3];const d=r[o+0],h=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=d,e[t+1]=h,e[t+2]=g,e[t+3]=_;return}if(f!==_||l!==d||c!==h||u!==g){let p=1-a;const m=l*d+c*h+u*g+f*_,S=m>=0?1:-1,y=1-m*m;if(y>Number.EPSILON){const P=Math.sqrt(y),R=Math.atan2(P,m*S);p=Math.sin(p*R)/P,a=Math.sin(a*R)/P}const E=a*S;if(l=l*p+d*E,c=c*p+h*E,u=u*p+g*E,f=f*p+_*E,p===1-a){const P=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=P,c*=P,u*=P,f*=P}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],f=r[o],d=r[o+1],h=r[o+2],g=r[o+3];return e[t]=a*g+u*f+l*h-c*d,e[t+1]=l*g+u*d+c*f-a*h,e[t+2]=c*g+u*h+a*d-l*f,e[t+3]=u*g-a*f-l*d-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),f=a(r/2),d=l(i/2),h=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*u*f+c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f-d*h*g;break;case"YXZ":this._x=d*u*f+c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f+d*h*g;break;case"ZXY":this._x=d*u*f-c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f-d*h*g;break;case"ZYX":this._x=d*u*f-c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f+d*h*g;break;case"YZX":this._x=d*u*f+c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f-d*h*g;break;case"XZY":this._x=d*u*f-c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f+d*h*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],d=i+a+f;if(d>0){const h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(u-l)*h,this._y=(r-c)*h,this._z=(o-s)*h}else if(i>a&&i>f){const h=2*Math.sqrt(1+i-a-f);this._w=(u-l)/h,this._x=.25*h,this._y=(s+o)/h,this._z=(r+c)/h}else if(a>f){const h=2*Math.sqrt(1+a-i-f);this._w=(r-c)/h,this._x=(s+o)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+f-i-a);this._w=(o-s)/h,this._x=(r+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(zt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const h=1-t;return this._w=h*o+t*this._w,this._x=h*i+t*this._x,this._y=h*s+t*this._y,this._z=h*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=s*f+this._y*d,this._z=r*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,t=0,i=0){k.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(th.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(th.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),f=2*(r*i-o*t);return this.x=t+l*c+o*f-a*u,this.y=i+l*u+a*c-r*f,this.z=s+l*f+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Yl.copy(this).projectOnVector(e),this.sub(Yl)}reflect(e){return this.sub(Yl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(zt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Yl=new k,th=new Gn;class pi{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(En.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(En.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=En.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,En):En.fromBufferAttribute(r,o),En.applyMatrix4(e.matrixWorld),this.expandByPoint(En);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Xo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Xo.copy(i.boundingBox)),Xo.applyMatrix4(e.matrixWorld),this.union(Xo)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,En),En.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Dr),jo.subVectors(this.max,Dr),Fs.subVectors(e.a,Dr),Bs.subVectors(e.b,Dr),ks.subVectors(e.c,Dr),yi.subVectors(Bs,Fs),Si.subVectors(ks,Bs),rs.subVectors(Fs,ks);let t=[0,-yi.z,yi.y,0,-Si.z,Si.y,0,-rs.z,rs.y,yi.z,0,-yi.x,Si.z,0,-Si.x,rs.z,0,-rs.x,-yi.y,yi.x,0,-Si.y,Si.x,0,-rs.y,rs.x,0];return!Zl(t,Fs,Bs,ks,jo)||(t=[1,0,0,0,1,0,0,0,1],!Zl(t,Fs,Bs,ks,jo))?!1:($o.crossVectors(yi,Si),t=[$o.x,$o.y,$o.z],Zl(t,Fs,Bs,ks,jo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,En).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(En).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Yn=[new k,new k,new k,new k,new k,new k,new k,new k],En=new k,Xo=new pi,Fs=new k,Bs=new k,ks=new k,yi=new k,Si=new k,rs=new k,Dr=new k,jo=new k,$o=new k,os=new k;function Zl(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){os.fromArray(n,r);const a=s.x*Math.abs(os.x)+s.y*Math.abs(os.y)+s.z*Math.abs(os.z),l=e.dot(os),c=t.dot(os),u=i.dot(os);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const nb=new pi,Nr=new k,Jl=new k;class qn{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):nb.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Nr.subVectors(e,this.center);const t=Nr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Nr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Jl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Nr.copy(e.center).add(Jl)),this.expandByPoint(Nr.copy(e.center).sub(Jl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Zn=new k,Ql=new k,Ko=new k,Mi=new k,ec=new k,Yo=new k,tc=new k;class wr{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Zn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Zn.copy(this.origin).addScaledVector(this.direction,t),Zn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Ql.copy(e).add(t).multiplyScalar(.5),Ko.copy(t).sub(e).normalize(),Mi.copy(this.origin).sub(Ql);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Ko),a=Mi.dot(this.direction),l=-Mi.dot(Ko),c=Mi.lengthSq(),u=Math.abs(1-o*o);let f,d,h,g;if(u>0)if(f=o*l-a,d=o*a-l,g=r*u,f>=0)if(d>=-g)if(d<=g){const _=1/u;f*=_,d*=_,h=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=r,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;else d=-r,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-o*r+a)),d=f>0?-r:Math.min(Math.max(-r,-l),r),h=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-r,-l),r),h=d*(d+2*l)+c):(f=Math.max(0,-(o*r+a)),d=f>0?r:Math.min(Math.max(-r,-l),r),h=-f*f+d*(d+2*l)+c);else d=o>0?-r:r,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Ql).addScaledVector(Ko,d),h}intersectSphere(e,t){Zn.subVectors(e.center,this.origin);const i=Zn.dot(this.direction),s=Zn.dot(Zn)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Zn)!==null}intersectTriangle(e,t,i,s,r){ec.subVectors(t,e),Yo.subVectors(i,e),tc.crossVectors(ec,Yo);let o=this.direction.dot(tc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Mi.subVectors(this.origin,e);const l=a*this.direction.dot(Yo.crossVectors(Mi,Yo));if(l<0)return null;const c=a*this.direction.dot(ec.cross(Mi));if(c<0||l+c>o)return null;const u=-a*Mi.dot(tc);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class je{constructor(e,t,i,s,r,o,a,l,c,u,f,d,h,g,_,p){je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,f,d,h,g,_,p)}set(e,t,i,s,r,o,a,l,c,u,f,d,h,g,_,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=f,m[14]=d,m[3]=h,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new je().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/zs.setFromMatrixColumn(e,0).length(),r=1/zs.setFromMatrixColumn(e,1).length(),o=1/zs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const d=o*u,h=o*f,g=a*u,_=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=h+g*c,t[5]=d-_*c,t[9]=-a*l,t[2]=_-d*c,t[6]=g+h*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,h=l*f,g=c*u,_=c*f;t[0]=d+_*a,t[4]=g*a-h,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=h*a-g,t[6]=_+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,h=l*f,g=c*u,_=c*f;t[0]=d-_*a,t[4]=-o*f,t[8]=g+h*a,t[1]=h+g*a,t[5]=o*u,t[9]=_-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,h=o*f,g=a*u,_=a*f;t[0]=l*u,t[4]=g*c-h,t[8]=d*c+_,t[1]=l*f,t[5]=_*c+d,t[9]=h*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,h=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-d*f,t[8]=g*f+h,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=h*f+g,t[10]=d-_*f}else if(e.order==="XZY"){const d=o*l,h=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=d*f+_,t[5]=o*u,t[9]=h*f-g,t[2]=g*f-h,t[6]=a*u,t[10]=_*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ib,e,sb)}lookAt(e,t,i){const s=this.elements;return cn.subVectors(e,t),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),bi.crossVectors(i,cn),bi.lengthSq()===0&&(Math.abs(i.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),bi.crossVectors(i,cn)),bi.normalize(),Zo.crossVectors(cn,bi),s[0]=bi.x,s[4]=Zo.x,s[8]=cn.x,s[1]=bi.y,s[5]=Zo.y,s[9]=cn.y,s[2]=bi.z,s[6]=Zo.z,s[10]=cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],h=i[13],g=i[2],_=i[6],p=i[10],m=i[14],S=i[3],y=i[7],E=i[11],P=i[15],R=s[0],A=s[4],C=s[8],b=s[12],M=s[1],I=s[5],N=s[9],U=s[13],F=s[2],X=s[6],G=s[10],te=s[14],q=s[3],me=s[7],Se=s[11],ye=s[15];return r[0]=o*R+a*M+l*F+c*q,r[4]=o*A+a*I+l*X+c*me,r[8]=o*C+a*N+l*G+c*Se,r[12]=o*b+a*U+l*te+c*ye,r[1]=u*R+f*M+d*F+h*q,r[5]=u*A+f*I+d*X+h*me,r[9]=u*C+f*N+d*G+h*Se,r[13]=u*b+f*U+d*te+h*ye,r[2]=g*R+_*M+p*F+m*q,r[6]=g*A+_*I+p*X+m*me,r[10]=g*C+_*N+p*G+m*Se,r[14]=g*b+_*U+p*te+m*ye,r[3]=S*R+y*M+E*F+P*q,r[7]=S*A+y*I+E*X+P*me,r[11]=S*C+y*N+E*G+P*Se,r[15]=S*b+y*U+E*te+P*ye,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],h=e[14],g=e[3],_=e[7],p=e[11],m=e[15];return g*(+r*l*f-s*c*f-r*a*d+i*c*d+s*a*h-i*l*h)+_*(+t*l*h-t*c*d+r*o*d-s*o*h+s*c*u-r*l*u)+p*(+t*c*f-t*a*h-r*o*f+i*o*h+r*a*u-i*c*u)+m*(-s*a*u-t*l*f+t*a*d+s*o*f-i*o*d+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],h=e[11],g=e[12],_=e[13],p=e[14],m=e[15],S=f*p*c-_*d*c+_*l*h-a*p*h-f*l*m+a*d*m,y=g*d*c-u*p*c-g*l*h+o*p*h+u*l*m-o*d*m,E=u*_*c-g*f*c+g*a*h-o*_*h-u*a*m+o*f*m,P=g*f*l-u*_*l-g*a*d+o*_*d+u*a*p-o*f*p,R=t*S+i*y+s*E+r*P;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/R;return e[0]=S*A,e[1]=(_*d*r-f*p*r-_*s*h+i*p*h+f*s*m-i*d*m)*A,e[2]=(a*p*r-_*l*r+_*s*c-i*p*c-a*s*m+i*l*m)*A,e[3]=(f*l*r-a*d*r-f*s*c+i*d*c+a*s*h-i*l*h)*A,e[4]=y*A,e[5]=(u*p*r-g*d*r+g*s*h-t*p*h-u*s*m+t*d*m)*A,e[6]=(g*l*r-o*p*r-g*s*c+t*p*c+o*s*m-t*l*m)*A,e[7]=(o*d*r-u*l*r+u*s*c-t*d*c-o*s*h+t*l*h)*A,e[8]=E*A,e[9]=(g*f*r-u*_*r-g*i*h+t*_*h+u*i*m-t*f*m)*A,e[10]=(o*_*r-g*a*r+g*i*c-t*_*c-o*i*m+t*a*m)*A,e[11]=(u*a*r-o*f*r-u*i*c+t*f*c+o*i*h-t*a*h)*A,e[12]=P*A,e[13]=(u*_*s-g*f*s+g*i*d-t*_*d-u*i*p+t*f*p)*A,e[14]=(g*a*s-o*_*s-g*i*l+t*_*l+o*i*p-t*a*p)*A,e[15]=(o*f*s-u*a*s+u*i*l-t*f*l-o*i*d+t*a*d)*A,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,f=a+a,d=r*c,h=r*u,g=r*f,_=o*u,p=o*f,m=a*f,S=l*c,y=l*u,E=l*f,P=i.x,R=i.y,A=i.z;return s[0]=(1-(_+m))*P,s[1]=(h+E)*P,s[2]=(g-y)*P,s[3]=0,s[4]=(h-E)*R,s[5]=(1-(d+m))*R,s[6]=(p+S)*R,s[7]=0,s[8]=(g+y)*A,s[9]=(p-S)*A,s[10]=(1-(d+_))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=zs.set(s[0],s[1],s[2]).length();const o=zs.set(s[4],s[5],s[6]).length(),a=zs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Tn.copy(this);const c=1/r,u=1/o,f=1/a;return Tn.elements[0]*=c,Tn.elements[1]*=c,Tn.elements[2]*=c,Tn.elements[4]*=u,Tn.elements[5]*=u,Tn.elements[6]*=u,Tn.elements[8]*=f,Tn.elements[9]*=f,Tn.elements[10]*=f,t.setFromRotationMatrix(Tn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=oi){const l=this.elements,c=2*r/(t-e),u=2*r/(i-s),f=(t+e)/(t-e),d=(i+s)/(i-s);let h,g;if(a===oi)h=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===ja)h=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=h,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=oi){const l=this.elements,c=1/(t-e),u=1/(i-s),f=1/(o-r),d=(t+e)*c,h=(i+s)*u;let g,_;if(a===oi)g=(o+r)*f,_=-2*f;else if(a===ja)g=r*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-h,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const zs=new k,Tn=new je,ib=new k(0,0,0),sb=new k(1,1,1),bi=new k,Zo=new k,cn=new k,nh=new je,ih=new Gn;class Wn{constructor(e=0,t=0,i=0,s=Wn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],f=s[2],d=s[6],h=s[10];switch(t){case"XYZ":this._y=Math.asin(zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-zt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(zt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-zt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return nh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(nh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ih.setFromEuler(this),this.setFromQuaternion(ih,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Wn.DEFAULT_ORDER="XYZ";class Ou{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let rb=0;const sh=new k,Hs=new Gn,Jn=new je,Jo=new k,Ur=new k,ob=new k,ab=new Gn,rh=new k(1,0,0),oh=new k(0,1,0),ah=new k(0,0,1),lh={type:"added"},lb={type:"removed"},Vs={type:"childadded",child:null},nc={type:"childremoved",child:null};class mt extends hi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rb++}),this.uuid=Ln(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mt.DEFAULT_UP.clone();const e=new k,t=new Wn,i=new Gn,s=new k(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new je},normalMatrix:{value:new Ke}}),this.matrix=new je,this.matrixWorld=new je,this.matrixAutoUpdate=mt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ou,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Hs.setFromAxisAngle(e,t),this.quaternion.multiply(Hs),this}rotateOnWorldAxis(e,t){return Hs.setFromAxisAngle(e,t),this.quaternion.premultiply(Hs),this}rotateX(e){return this.rotateOnAxis(rh,e)}rotateY(e){return this.rotateOnAxis(oh,e)}rotateZ(e){return this.rotateOnAxis(ah,e)}translateOnAxis(e,t){return sh.copy(e).applyQuaternion(this.quaternion),this.position.add(sh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(rh,e)}translateY(e){return this.translateOnAxis(oh,e)}translateZ(e){return this.translateOnAxis(ah,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Jn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Jo.copy(e):Jo.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Ur.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jn.lookAt(Ur,Jo,this.up):Jn.lookAt(Jo,Ur,this.up),this.quaternion.setFromRotationMatrix(Jn),s&&(Jn.extractRotation(s.matrixWorld),Hs.setFromRotationMatrix(Jn),this.quaternion.premultiply(Hs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(lh),Vs.child=e,this.dispatchEvent(Vs),Vs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(lb),nc.child=e,this.dispatchEvent(nc),nc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Jn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Jn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Jn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(lh),Vs.child=e,this.dispatchEvent(Vs),Vs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ur,e,ob),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ur,ab,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++){const r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),h=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),h.length>0&&(i.animations=h),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}mt.DEFAULT_UP=new k(0,1,0);mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const wn=new k,Qn=new k,ic=new k,ei=new k,Gs=new k,Ws=new k,ch=new k,sc=new k,rc=new k,oc=new k;class Bn{constructor(e=new k,t=new k,i=new k){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),wn.subVectors(e,t),s.cross(wn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){wn.subVectors(s,t),Qn.subVectors(i,t),ic.subVectors(e,t);const o=wn.dot(wn),a=wn.dot(Qn),l=wn.dot(ic),c=Qn.dot(Qn),u=Qn.dot(ic),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;const d=1/f,h=(c*l-a*u)*d,g=(o*u-a*l)*d;return r.set(1-h-g,g,h)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,ei)===null?!1:ei.x>=0&&ei.y>=0&&ei.x+ei.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,ei)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ei.x),l.addScaledVector(o,ei.y),l.addScaledVector(a,ei.z),l)}static isFrontFacing(e,t,i,s){return wn.subVectors(i,t),Qn.subVectors(e,t),wn.cross(Qn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wn.subVectors(this.c,this.b),Qn.subVectors(this.a,this.b),wn.cross(Qn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Bn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Bn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return Bn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Bn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Bn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;Gs.subVectors(s,i),Ws.subVectors(r,i),sc.subVectors(e,i);const l=Gs.dot(sc),c=Ws.dot(sc);if(l<=0&&c<=0)return t.copy(i);rc.subVectors(e,s);const u=Gs.dot(rc),f=Ws.dot(rc);if(u>=0&&f<=u)return t.copy(s);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Gs,o);oc.subVectors(e,r);const h=Gs.dot(oc),g=Ws.dot(oc);if(g>=0&&h<=g)return t.copy(r);const _=h*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(Ws,a);const p=u*g-h*f;if(p<=0&&f-u>=0&&h-g>=0)return ch.subVectors(r,s),a=(f-u)/(f-u+(h-g)),t.copy(s).addScaledVector(ch,a);const m=1/(p+_+d);return o=_*m,a=d*m,t.copy(i).addScaledVector(Gs,o).addScaledVector(Ws,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Rg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ei={h:0,s:0,l:0},Qo={h:0,s:0,l:0};function ac(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class We{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Jt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=it.workingColorSpace){return this.r=e,this.g=t,this.b=i,it.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=it.workingColorSpace){if(e=Nu(e,1),t=zt(t,0,1),i=zt(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=ac(o,r,e+1/3),this.g=ac(o,r,e),this.b=ac(o,r,e-1/3)}return it.toWorkingColorSpace(this,s),this}setStyle(e,t=Jt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Jt){const i=Rg[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=or(e.r),this.g=or(e.g),this.b=or(e.b),this}copyLinearToSRGB(e){return this.r=$l(e.r),this.g=$l(e.g),this.b=$l(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Jt){return it.fromWorkingColorSpace(Gt.copy(this),e),Math.round(zt(Gt.r*255,0,255))*65536+Math.round(zt(Gt.g*255,0,255))*256+Math.round(zt(Gt.b*255,0,255))}getHexString(e=Jt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=it.workingColorSpace){it.fromWorkingColorSpace(Gt.copy(this),t);const i=Gt.r,s=Gt.g,r=Gt.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=it.workingColorSpace){return it.fromWorkingColorSpace(Gt.copy(this),t),e.r=Gt.r,e.g=Gt.g,e.b=Gt.b,e}getStyle(e=Jt){it.fromWorkingColorSpace(Gt.copy(this),e);const t=Gt.r,i=Gt.g,s=Gt.b;return e!==Jt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Ei),this.setHSL(Ei.h+e,Ei.s+t,Ei.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ei),e.getHSL(Qo);const i=lo(Ei.h,Qo.h,t),s=lo(Ei.s,Qo.s,t),r=lo(Ei.l,Qo.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gt=new We;We.NAMES=Rg;let cb=0;class zn extends hi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cb++}),this.uuid=Ln(),this.name="",this.type="Material",this.blending=sr,this.side=di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jc,this.blendDst=Qc,this.blendEquation=ps,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=Ha,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Kf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Us,this.stencilZFail=Us,this.stencilZPass=Us,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==sr&&(i.blending=this.blending),this.side!==di&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Jc&&(i.blendSrc=this.blendSrc),this.blendDst!==Qc&&(i.blendDst=this.blendDst),this.blendEquation!==ps&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ha&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Kf&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Us&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Us&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Us&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class vs extends zn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.combine=ug,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Tt=new k,ea=new Fe;class tn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=iu,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=kn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Uu("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ea.fromBufferAttribute(this,t),ea.applyMatrix3(e),this.setXY(t,ea.x,ea.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix3(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix4(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyNormalMatrix(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.transformDirection(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Rn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ot(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Rn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Rn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Rn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Rn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array),s=ot(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array),s=ot(s,this.array),r=ot(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==iu&&(e.usage=this.usage),e}}class Cg extends tn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Pg extends tn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class li extends tn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let ub=0;const vn=new je,lc=new mt,qs=new k,un=new pi,Or=new pi,It=new k;class Xn extends hi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ub++}),this.uuid=Ln(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Tg(e)?Pg:Cg)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ke().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return vn.makeRotationFromQuaternion(e),this.applyMatrix4(vn),this}rotateX(e){return vn.makeRotationX(e),this.applyMatrix4(vn),this}rotateY(e){return vn.makeRotationY(e),this.applyMatrix4(vn),this}rotateZ(e){return vn.makeRotationZ(e),this.applyMatrix4(vn),this}translate(e,t,i){return vn.makeTranslation(e,t,i),this.applyMatrix4(vn),this}scale(e,t,i){return vn.makeScale(e,t,i),this.applyMatrix4(vn),this}lookAt(e){return lc.lookAt(e),lc.updateMatrix(),this.applyMatrix4(lc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qs).negate(),this.translate(qs.x,qs.y,qs.z),this}setFromPoints(e){const t=[];for(let i=0,s=e.length;i<s;i++){const r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new li(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];un.setFromBufferAttribute(r),this.morphTargetsRelative?(It.addVectors(this.boundingBox.min,un.min),this.boundingBox.expandByPoint(It),It.addVectors(this.boundingBox.max,un.max),this.boundingBox.expandByPoint(It)):(this.boundingBox.expandByPoint(un.min),this.boundingBox.expandByPoint(un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const i=this.boundingSphere.center;if(un.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Or.setFromBufferAttribute(a),this.morphTargetsRelative?(It.addVectors(un.min,Or.min),un.expandByPoint(It),It.addVectors(un.max,Or.max),un.expandByPoint(It)):(un.expandByPoint(Or.min),un.expandByPoint(Or.max))}un.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)It.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(It));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)It.fromBufferAttribute(a,c),l&&(qs.fromBufferAttribute(e,c),It.add(qs)),s=Math.max(s,i.distanceToSquared(It))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new tn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<i.count;C++)a[C]=new k,l[C]=new k;const c=new k,u=new k,f=new k,d=new Fe,h=new Fe,g=new Fe,_=new k,p=new k;function m(C,b,M){c.fromBufferAttribute(i,C),u.fromBufferAttribute(i,b),f.fromBufferAttribute(i,M),d.fromBufferAttribute(r,C),h.fromBufferAttribute(r,b),g.fromBufferAttribute(r,M),u.sub(c),f.sub(c),h.sub(d),g.sub(d);const I=1/(h.x*g.y-g.x*h.y);isFinite(I)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(f,-h.y).multiplyScalar(I),p.copy(f).multiplyScalar(h.x).addScaledVector(u,-g.x).multiplyScalar(I),a[C].add(_),a[b].add(_),a[M].add(_),l[C].add(p),l[b].add(p),l[M].add(p))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let C=0,b=S.length;C<b;++C){const M=S[C],I=M.start,N=M.count;for(let U=I,F=I+N;U<F;U+=3)m(e.getX(U+0),e.getX(U+1),e.getX(U+2))}const y=new k,E=new k,P=new k,R=new k;function A(C){P.fromBufferAttribute(s,C),R.copy(P);const b=a[C];y.copy(b),y.sub(P.multiplyScalar(P.dot(b))).normalize(),E.crossVectors(R,b);const I=E.dot(l[C])<0?-1:1;o.setXYZW(C,y.x,y.y,y.z,I)}for(let C=0,b=S.length;C<b;++C){const M=S[C],I=M.start,N=M.count;for(let U=I,F=I+N;U<F;U+=3)A(e.getX(U+0)),A(e.getX(U+1)),A(e.getX(U+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new tn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,h=i.count;d<h;d++)i.setXYZ(d,0,0,0);const s=new k,r=new k,o=new k,a=new k,l=new k,c=new k,u=new k,f=new k;if(e)for(let d=0,h=e.count;d<h;d+=3){const g=e.getX(d+0),_=e.getX(d+1),p=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,p),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,h=t.count;d<h;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)It.fromBufferAttribute(e,t),It.normalize(),e.setXYZ(t,It.x,It.y,It.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u);let h=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?h=l[_]*a.data.stride+a.offset:h=l[_]*u;for(let m=0;m<u;m++)d[g++]=c[h++]}return new tn(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Xn,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,f=c.length;u<f;u++){const d=c[u],h=e(d,i);l.push(h)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const h=c[f];u.push(h.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],f=r[c];for(let d=0,h=f.length;d<h;d++)u.push(f[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const uh=new je,as=new wr,ta=new qn,dh=new k,Xs=new k,js=new k,$s=new k,cc=new k,na=new k,ia=new Fe,sa=new Fe,ra=new Fe,fh=new k,hh=new k,ph=new k,oa=new k,aa=new k;class hn extends mt{constructor(e=new Xn,t=new vs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){na.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],f=r[l];u!==0&&(cc.fromBufferAttribute(f,e),o?na.addScaledVector(cc,u):na.addScaledVector(cc.sub(t),u))}t.add(na)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ta.copy(i.boundingSphere),ta.applyMatrix4(r),as.copy(e.ray).recast(e.near),!(ta.containsPoint(as.origin)===!1&&(as.intersectSphere(ta,dh)===null||as.origin.distanceToSquared(dh)>(e.far-e.near)**2))&&(uh.copy(r).invert(),as.copy(e.ray).applyMatrix4(uh),!(i.boundingBox!==null&&as.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,as)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,d=r.groups,h=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const p=d[g],m=o[p.materialIndex],S=Math.max(p.start,h.start),y=Math.min(a.count,Math.min(p.start+p.count,h.start+h.count));for(let E=S,P=y;E<P;E+=3){const R=a.getX(E),A=a.getX(E+1),C=a.getX(E+2);s=la(this,m,e,i,c,u,f,R,A,C),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,h.start),_=Math.min(a.count,h.start+h.count);for(let p=g,m=_;p<m;p+=3){const S=a.getX(p),y=a.getX(p+1),E=a.getX(p+2);s=la(this,o,e,i,c,u,f,S,y,E),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const p=d[g],m=o[p.materialIndex],S=Math.max(p.start,h.start),y=Math.min(l.count,Math.min(p.start+p.count,h.start+h.count));for(let E=S,P=y;E<P;E+=3){const R=E,A=E+1,C=E+2;s=la(this,m,e,i,c,u,f,R,A,C),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,h.start),_=Math.min(l.count,h.start+h.count);for(let p=g,m=_;p<m;p+=3){const S=p,y=p+1,E=p+2;s=la(this,o,e,i,c,u,f,S,y,E),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function db(n,e,t,i,s,r,o,a){let l;if(e.side===sn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===di,a),l===null)return null;aa.copy(a),aa.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(aa);return c<t.near||c>t.far?null:{distance:c,point:aa.clone(),object:n}}function la(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,Xs),n.getVertexPosition(l,js),n.getVertexPosition(c,$s);const u=db(n,e,t,i,Xs,js,$s,oa);if(u){s&&(ia.fromBufferAttribute(s,a),sa.fromBufferAttribute(s,l),ra.fromBufferAttribute(s,c),u.uv=Bn.getInterpolation(oa,Xs,js,$s,ia,sa,ra,new Fe)),r&&(ia.fromBufferAttribute(r,a),sa.fromBufferAttribute(r,l),ra.fromBufferAttribute(r,c),u.uv1=Bn.getInterpolation(oa,Xs,js,$s,ia,sa,ra,new Fe)),o&&(fh.fromBufferAttribute(o,a),hh.fromBufferAttribute(o,l),ph.fromBufferAttribute(o,c),u.normal=Bn.getInterpolation(oa,Xs,js,$s,fh,hh,ph,new k),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new k,materialIndex:0};Bn.getNormal(Xs,js,$s,f.normal),u.face=f}return u}class Rs extends Xn{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],f=[];let d=0,h=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new li(c,3)),this.setAttribute("normal",new li(u,3)),this.setAttribute("uv",new li(f,2));function g(_,p,m,S,y,E,P,R,A,C,b){const M=E/A,I=P/C,N=E/2,U=P/2,F=R/2,X=A+1,G=C+1;let te=0,q=0;const me=new k;for(let Se=0;Se<G;Se++){const ye=Se*I-U;for(let Ie=0;Ie<X;Ie++){const Ze=Ie*M-N;me[_]=Ze*S,me[p]=ye*y,me[m]=F,c.push(me.x,me.y,me.z),me[_]=0,me[p]=0,me[m]=R>0?1:-1,u.push(me.x,me.y,me.z),f.push(Ie/A),f.push(1-Se/C),te+=1}}for(let Se=0;Se<C;Se++)for(let ye=0;ye<A;ye++){const Ie=d+ye+X*Se,Ze=d+ye+X*(Se+1),se=d+(ye+1)+X*(Se+1),he=d+(ye+1)+X*Se;l.push(Ie,Ze,he),l.push(Ze,se,he),q+=6}a.addGroup(h,q,b),h+=q,d+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function _r(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Zt(n){const e={};for(let t=0;t<n.length;t++){const i=_r(n[t]);for(const s in i)e[s]=i[s]}return e}function fb(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Lg(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}const hb={clone:_r,merge:Zt};var pb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xi extends zn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pb,this.fragmentShader=mb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_r(e.uniforms),this.uniformsGroups=fb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}let Ig=class extends mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new je,this.projectionMatrix=new je,this.projectionMatrixInverse=new je,this.coordinateSystem=oi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};const Ti=new k,mh=new Fe,gh=new Fe;class Qt extends Ig{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=gr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ao*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return gr*2*Math.atan(Math.tan(ao*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ti.x,Ti.y).multiplyScalar(-e/Ti.z),Ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ti.x,Ti.y).multiplyScalar(-e/Ti.z)}getViewSize(e,t){return this.getViewBounds(e,mh,gh),t.subVectors(gh,mh)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ao*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ks=-90,Ys=1;class gb extends mt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Qt(Ks,Ys,e,t);s.layers=this.layers,this.add(s);const r=new Qt(Ks,Ys,e,t);r.layers=this.layers,this.add(r);const o=new Qt(Ks,Ys,e,t);o.layers=this.layers,this.add(o);const a=new Qt(Ks,Ys,e,t);a.layers=this.layers,this.add(a);const l=new Qt(Ks,Ys,e,t);l.layers=this.layers,this.add(l);const c=new Qt(Ks,Ys,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===oi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ja)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(f,d,h),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Dg extends Ot{constructor(e,t,i,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:ur,super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class _b extends ws{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Dg(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:fn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Rs(5,5,5),r=new Xi({name:"CubemapFromEquirect",uniforms:_r(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:sn,blending:Vi});r.uniforms.tEquirect.value=t;const o=new hn(s,r),a=t.minFilter;return t.minFilter===ri&&(t.minFilter=fn),new gb(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}const uc=new k,vb=new k,xb=new Ke;class Ii{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=uc.subVectors(i,t).cross(vb.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(uc),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||xb.getNormalMatrix(e),s=this.coplanarPoint(uc).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ls=new qn,ca=new k;class Fu{constructor(e=new Ii,t=new Ii,i=new Ii,s=new Ii,r=new Ii,o=new Ii){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=oi){const i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],f=s[6],d=s[7],h=s[8],g=s[9],_=s[10],p=s[11],m=s[12],S=s[13],y=s[14],E=s[15];if(i[0].setComponents(l-r,d-c,p-h,E-m).normalize(),i[1].setComponents(l+r,d+c,p+h,E+m).normalize(),i[2].setComponents(l+o,d+u,p+g,E+S).normalize(),i[3].setComponents(l-o,d-u,p-g,E-S).normalize(),i[4].setComponents(l-a,d-f,p-_,E-y).normalize(),t===oi)i[5].setComponents(l+a,d+f,p+_,E+y).normalize();else if(t===ja)i[5].setComponents(a,f,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ls.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ls.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ls)}intersectsSprite(e){return ls.center.set(0,0,0),ls.radius=.7071067811865476,ls.applyMatrix4(e.matrixWorld),this.intersectsSphere(ls)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(ca.x=s.normal.x>0?e.max.x:e.min.x,ca.y=s.normal.y>0?e.max.y:e.min.y,ca.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ca)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ng(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function yb(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,f=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),a.onUploadCallback();let h;if(c instanceof Float32Array)h=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=n.SHORT;else if(c instanceof Uint32Array)h=n.UNSIGNED_INT;else if(c instanceof Int32Array)h=n.INT;else if(c instanceof Int8Array)h=n.BYTE;else if(c instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l._updateRange,d=l.updateRanges;if(n.bindBuffer(c,a),f.count===-1&&d.length===0&&n.bufferSubData(c,0,u),d.length!==0){for(let h=0,g=d.length;h<g;h++){const _=d[h];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}f.count!==-1&&(n.bufferSubData(c,f.offset*u.BYTES_PER_ELEMENT,u,f.offset,f.count),f.count=-1),l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class ml extends Xn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,f=e/a,d=t/l,h=[],g=[],_=[],p=[];for(let m=0;m<u;m++){const S=m*d-o;for(let y=0;y<c;y++){const E=y*f-r;g.push(E,-S,0),_.push(0,0,1),p.push(y/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let S=0;S<a;S++){const y=S+c*m,E=S+c*(m+1),P=S+1+c*(m+1),R=S+1+c*m;h.push(y,E,R),h.push(E,P,R)}this.setIndex(h),this.setAttribute("position",new li(g,3)),this.setAttribute("normal",new li(_,3)),this.setAttribute("uv",new li(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ml(e.width,e.height,e.widthSegments,e.heightSegments)}}var Sb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Mb=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,bb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Eb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Tb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,wb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ab=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Rb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Cb=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Pb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Lb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ib=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Db=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Nb=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ub=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ob=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Fb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Bb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Hb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Vb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Gb=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( batchId );
	vColor.xyz *= batchingColor.xyz;
#endif`,Wb=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,qb=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Xb=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,jb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$b=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Kb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Yb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Zb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Jb=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Qb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,eE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,tE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,nE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,iE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,sE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,oE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,aE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,cE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,uE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,hE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,pE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_E=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,xE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,yE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,SE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ME=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,EE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,TE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,AE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,RE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,CE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,PE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,LE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,IE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,DE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,NE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,UE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,OE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,FE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,BE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,kE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,zE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,HE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,VE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,GE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,WE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,XE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$E=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,KE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,YE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ZE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,JE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,QE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,eT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,nT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,iT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,sT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,rT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,oT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,aT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,lT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,uT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,pT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,mT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,gT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_T=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,xT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const yT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ST=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,MT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ET=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,TT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,AT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,RT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,CT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,PT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,LT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,DT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,NT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,UT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,FT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,BT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,kT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,HT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,VT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,GT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,qT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$T=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,KT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,YT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ZT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,JT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,QT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$e={alphahash_fragment:Sb,alphahash_pars_fragment:Mb,alphamap_fragment:bb,alphamap_pars_fragment:Eb,alphatest_fragment:Tb,alphatest_pars_fragment:wb,aomap_fragment:Ab,aomap_pars_fragment:Rb,batching_pars_vertex:Cb,batching_vertex:Pb,begin_vertex:Lb,beginnormal_vertex:Ib,bsdfs:Db,iridescence_fragment:Nb,bumpmap_pars_fragment:Ub,clipping_planes_fragment:Ob,clipping_planes_pars_fragment:Fb,clipping_planes_pars_vertex:Bb,clipping_planes_vertex:kb,color_fragment:zb,color_pars_fragment:Hb,color_pars_vertex:Vb,color_vertex:Gb,common:Wb,cube_uv_reflection_fragment:qb,defaultnormal_vertex:Xb,displacementmap_pars_vertex:jb,displacementmap_vertex:$b,emissivemap_fragment:Kb,emissivemap_pars_fragment:Yb,colorspace_fragment:Zb,colorspace_pars_fragment:Jb,envmap_fragment:Qb,envmap_common_pars_fragment:eE,envmap_pars_fragment:tE,envmap_pars_vertex:nE,envmap_physical_pars_fragment:hE,envmap_vertex:iE,fog_vertex:sE,fog_pars_vertex:rE,fog_fragment:oE,fog_pars_fragment:aE,gradientmap_pars_fragment:lE,lightmap_pars_fragment:cE,lights_lambert_fragment:uE,lights_lambert_pars_fragment:dE,lights_pars_begin:fE,lights_toon_fragment:pE,lights_toon_pars_fragment:mE,lights_phong_fragment:gE,lights_phong_pars_fragment:_E,lights_physical_fragment:vE,lights_physical_pars_fragment:xE,lights_fragment_begin:yE,lights_fragment_maps:SE,lights_fragment_end:ME,logdepthbuf_fragment:bE,logdepthbuf_pars_fragment:EE,logdepthbuf_pars_vertex:TE,logdepthbuf_vertex:wE,map_fragment:AE,map_pars_fragment:RE,map_particle_fragment:CE,map_particle_pars_fragment:PE,metalnessmap_fragment:LE,metalnessmap_pars_fragment:IE,morphinstance_vertex:DE,morphcolor_vertex:NE,morphnormal_vertex:UE,morphtarget_pars_vertex:OE,morphtarget_vertex:FE,normal_fragment_begin:BE,normal_fragment_maps:kE,normal_pars_fragment:zE,normal_pars_vertex:HE,normal_vertex:VE,normalmap_pars_fragment:GE,clearcoat_normal_fragment_begin:WE,clearcoat_normal_fragment_maps:qE,clearcoat_pars_fragment:XE,iridescence_pars_fragment:jE,opaque_fragment:$E,packing:KE,premultiplied_alpha_fragment:YE,project_vertex:ZE,dithering_fragment:JE,dithering_pars_fragment:QE,roughnessmap_fragment:eT,roughnessmap_pars_fragment:tT,shadowmap_pars_fragment:nT,shadowmap_pars_vertex:iT,shadowmap_vertex:sT,shadowmask_pars_fragment:rT,skinbase_vertex:oT,skinning_pars_vertex:aT,skinning_vertex:lT,skinnormal_vertex:cT,specularmap_fragment:uT,specularmap_pars_fragment:dT,tonemapping_fragment:fT,tonemapping_pars_fragment:hT,transmission_fragment:pT,transmission_pars_fragment:mT,uv_pars_fragment:gT,uv_pars_vertex:_T,uv_vertex:vT,worldpos_vertex:xT,background_vert:yT,background_frag:ST,backgroundCube_vert:MT,backgroundCube_frag:bT,cube_vert:ET,cube_frag:TT,depth_vert:wT,depth_frag:AT,distanceRGBA_vert:RT,distanceRGBA_frag:CT,equirect_vert:PT,equirect_frag:LT,linedashed_vert:IT,linedashed_frag:DT,meshbasic_vert:NT,meshbasic_frag:UT,meshlambert_vert:OT,meshlambert_frag:FT,meshmatcap_vert:BT,meshmatcap_frag:kT,meshnormal_vert:zT,meshnormal_frag:HT,meshphong_vert:VT,meshphong_frag:GT,meshphysical_vert:WT,meshphysical_frag:qT,meshtoon_vert:XT,meshtoon_frag:jT,points_vert:$T,points_frag:KT,shadow_vert:YT,shadow_frag:ZT,sprite_vert:JT,sprite_frag:QT},xe={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new Fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new Fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},Un={basic:{uniforms:Zt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:Zt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new We(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:Zt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:Zt([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:Zt([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new We(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:Zt([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:Zt([xe.points,xe.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:Zt([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:Zt([xe.common,xe.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:Zt([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:Zt([xe.sprite,xe.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distanceRGBA:{uniforms:Zt([xe.common,xe.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distanceRGBA_vert,fragmentShader:$e.distanceRGBA_frag},shadow:{uniforms:Zt([xe.lights,xe.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};Un.physical={uniforms:Zt([Un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new Fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new Fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new Fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const ua={r:0,b:0,g:0},cs=new Wn,ew=new je;function tw(n,e,t,i,s,r,o){const a=new We(0);let l=r===!0?0:1,c,u,f=null,d=0,h=null;function g(S){let y=S.isScene===!0?S.background:null;return y&&y.isTexture&&(y=(S.backgroundBlurriness>0?t:e).get(y)),y}function _(S){let y=!1;const E=g(S);E===null?m(a,l):E&&E.isColor&&(m(E,1),y=!0);const P=n.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(S,y){const E=g(y);E&&(E.isCubeTexture||E.mapping===fl)?(u===void 0&&(u=new hn(new Rs(1,1,1),new Xi({name:"BackgroundCubeMaterial",uniforms:_r(Un.backgroundCube.uniforms),vertexShader:Un.backgroundCube.vertexShader,fragmentShader:Un.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,R,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),cs.copy(y.backgroundRotation),cs.x*=-1,cs.y*=-1,cs.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(cs.y*=-1,cs.z*=-1),u.material.uniforms.envMap.value=E,u.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(ew.makeRotationFromEuler(cs)),u.material.toneMapped=it.getTransfer(E.colorSpace)!==ft,(f!==E||d!==E.version||h!==n.toneMapping)&&(u.material.needsUpdate=!0,f=E,d=E.version,h=n.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new hn(new ml(2,2),new Xi({name:"BackgroundMaterial",uniforms:_r(Un.background.uniforms),vertexShader:Un.background.vertexShader,fragmentShader:Un.background.fragmentShader,side:di,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=it.getTransfer(E.colorSpace)!==ft,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(f!==E||d!==E.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,f=E,d=E.version,h=n.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function m(S,y){S.getRGB(ua,Lg(n)),i.buffers.color.setClear(ua.r,ua.g,ua.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(S,y=1){a.set(S),l=y,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,m(a,l)},render:_,addToRenderList:p}}function nw(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,o=!1;function a(M,I,N,U,F){let X=!1;const G=f(U,N,I);r!==G&&(r=G,c(r.object)),X=h(M,U,N,F),X&&g(M,U,N,F),F!==null&&e.update(F,n.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,E(M,I,N,U),F!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function u(M){return n.deleteVertexArray(M)}function f(M,I,N){const U=N.wireframe===!0;let F=i[M.id];F===void 0&&(F={},i[M.id]=F);let X=F[I.id];X===void 0&&(X={},F[I.id]=X);let G=X[U];return G===void 0&&(G=d(l()),X[U]=G),G}function d(M){const I=[],N=[],U=[];for(let F=0;F<t;F++)I[F]=0,N[F]=0,U[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:N,attributeDivisors:U,object:M,attributes:{},index:null}}function h(M,I,N,U){const F=r.attributes,X=I.attributes;let G=0;const te=N.getAttributes();for(const q in te)if(te[q].location>=0){const Se=F[q];let ye=X[q];if(ye===void 0&&(q==="instanceMatrix"&&M.instanceMatrix&&(ye=M.instanceMatrix),q==="instanceColor"&&M.instanceColor&&(ye=M.instanceColor)),Se===void 0||Se.attribute!==ye||ye&&Se.data!==ye.data)return!0;G++}return r.attributesNum!==G||r.index!==U}function g(M,I,N,U){const F={},X=I.attributes;let G=0;const te=N.getAttributes();for(const q in te)if(te[q].location>=0){let Se=X[q];Se===void 0&&(q==="instanceMatrix"&&M.instanceMatrix&&(Se=M.instanceMatrix),q==="instanceColor"&&M.instanceColor&&(Se=M.instanceColor));const ye={};ye.attribute=Se,Se&&Se.data&&(ye.data=Se.data),F[q]=ye,G++}r.attributes=F,r.attributesNum=G,r.index=U}function _(){const M=r.newAttributes;for(let I=0,N=M.length;I<N;I++)M[I]=0}function p(M){m(M,0)}function m(M,I){const N=r.newAttributes,U=r.enabledAttributes,F=r.attributeDivisors;N[M]=1,U[M]===0&&(n.enableVertexAttribArray(M),U[M]=1),F[M]!==I&&(n.vertexAttribDivisor(M,I),F[M]=I)}function S(){const M=r.newAttributes,I=r.enabledAttributes;for(let N=0,U=I.length;N<U;N++)I[N]!==M[N]&&(n.disableVertexAttribArray(N),I[N]=0)}function y(M,I,N,U,F,X,G){G===!0?n.vertexAttribIPointer(M,I,N,F,X):n.vertexAttribPointer(M,I,N,U,F,X)}function E(M,I,N,U){_();const F=U.attributes,X=N.getAttributes(),G=I.defaultAttributeValues;for(const te in X){const q=X[te];if(q.location>=0){let me=F[te];if(me===void 0&&(te==="instanceMatrix"&&M.instanceMatrix&&(me=M.instanceMatrix),te==="instanceColor"&&M.instanceColor&&(me=M.instanceColor)),me!==void 0){const Se=me.normalized,ye=me.itemSize,Ie=e.get(me);if(Ie===void 0)continue;const Ze=Ie.buffer,se=Ie.type,he=Ie.bytesPerElement,oe=se===n.INT||se===n.UNSIGNED_INT||me.gpuType===pg;if(me.isInterleavedBufferAttribute){const ce=me.data,De=ce.stride,pe=me.offset;if(ce.isInstancedInterleavedBuffer){for(let Ne=0;Ne<q.locationSize;Ne++)m(q.location+Ne,ce.meshPerAttribute);M.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Ne=0;Ne<q.locationSize;Ne++)p(q.location+Ne);n.bindBuffer(n.ARRAY_BUFFER,Ze);for(let Ne=0;Ne<q.locationSize;Ne++)y(q.location+Ne,ye/q.locationSize,se,Se,De*he,(pe+ye/q.locationSize*Ne)*he,oe)}else{if(me.isInstancedBufferAttribute){for(let ce=0;ce<q.locationSize;ce++)m(q.location+ce,me.meshPerAttribute);M.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let ce=0;ce<q.locationSize;ce++)p(q.location+ce);n.bindBuffer(n.ARRAY_BUFFER,Ze);for(let ce=0;ce<q.locationSize;ce++)y(q.location+ce,ye/q.locationSize,se,Se,ye*he,ye/q.locationSize*ce*he,oe)}}else if(G!==void 0){const Se=G[te];if(Se!==void 0)switch(Se.length){case 2:n.vertexAttrib2fv(q.location,Se);break;case 3:n.vertexAttrib3fv(q.location,Se);break;case 4:n.vertexAttrib4fv(q.location,Se);break;default:n.vertexAttrib1fv(q.location,Se)}}}}S()}function P(){C();for(const M in i){const I=i[M];for(const N in I){const U=I[N];for(const F in U)u(U[F].object),delete U[F];delete I[N]}delete i[M]}}function R(M){if(i[M.id]===void 0)return;const I=i[M.id];for(const N in I){const U=I[N];for(const F in U)u(U[F].object),delete U[F];delete I[N]}delete i[M.id]}function A(M){for(const I in i){const N=i[I];if(N[M.id]===void 0)continue;const U=N[M.id];for(const F in U)u(U[F].object),delete U[F];delete N[M.id]}}function C(){b(),o=!0,r!==s&&(r=s,c(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:C,resetDefaultState:b,dispose:P,releaseStatesOfGeometry:R,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:p,disableUnusedAttributes:S}}function iw(n,e,t){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function a(c,u,f){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let h=0;h<f;h++)this.render(c[h],u[h]);else{d.multiDrawArraysWEBGL(i,c,0,u,0,f);let h=0;for(let g=0;g<f;g++)h+=u[g];t.update(h,i,1)}}function l(c,u,f,d){if(f===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<c.length;g++)o(c[g],u[g],d[g]);else{h.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_];for(let _=0;_<d.length;_++)t.update(g,i,d[_])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function sw(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==Pn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const A=R===hl&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==qi&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==kn&&!A)}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),h=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=h>0,P=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,maxTextures:d,maxVertexTextures:h,maxTextureSize:g,maxCubemapSize:_,maxAttributes:p,maxVertexUniforms:m,maxVaryings:S,maxFragmentUniforms:y,vertexTextures:E,maxSamples:P}}function rw(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new Ii,a=new Ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const h=f.length!==0||d||i!==0||s;return s=d,i=f.length,h},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,h){const g=f.clippingPlanes,_=f.clipIntersection,p=f.clipShadows,m=n.get(f);if(!s||g===null||g.length===0||r&&!p)r?u(null):c();else{const S=r?0:i,y=S*4;let E=m.clippingState||null;l.value=E,E=u(g,d,y,h);for(let P=0;P!==y;++P)E[P]=t[P];m.clippingState=E,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,h,g){const _=f!==null?f.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const m=h+_*4,S=d.matrixWorldInverse;a.getNormalMatrix(S),(p===null||p.length<m)&&(p=new Float32Array(m));for(let y=0,E=h;y!==_;++y,E+=4)o.copy(f[y]).applyMatrix4(S,a),o.normal.toArray(p,E),p[E+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function ow(n){let e=new WeakMap;function t(o,a){return a===eu?o.mapping=ur:a===tu&&(o.mapping=dr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===eu||a===tu)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new _b(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class Bu extends Ig{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const er=4,_h=[.125,.215,.35,.446,.526,.582],ms=20,dc=new Bu,vh=new We;let fc=null,hc=0,pc=0,mc=!1;const fs=(1+Math.sqrt(5))/2,Zs=1/fs,xh=[new k(-fs,Zs,0),new k(fs,Zs,0),new k(-Zs,0,fs),new k(Zs,0,fs),new k(0,fs,-Zs),new k(0,fs,Zs),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)];class yh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){fc=this._renderer.getRenderTarget(),hc=this._renderer.getActiveCubeFace(),pc=this._renderer.getActiveMipmapLevel(),mc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(fc,hc,pc),this._renderer.xr.enabled=mc,e.scissorTest=!1,da(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ur||e.mapping===dr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),fc=this._renderer.getRenderTarget(),hc=this._renderer.getActiveCubeFace(),pc=this._renderer.getActiveMipmapLevel(),mc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:hl,format:Pn,colorSpace:Ht,depthBuffer:!1},s=Sh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sh(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=aw(r)),this._blurMaterial=lw(r,e,t)}return s}_compileMaterial(e){const t=new hn(this._lodPlanes[0],e);this._renderer.compile(t,dc)}_sceneToCubeUV(e,t,i,s){const a=new Qt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(vh),u.toneMapping=Gi,u.autoClear=!1;const h=new vs({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1}),g=new hn(new Rs,h);let _=!1;const p=e.background;p?p.isColor&&(h.color.copy(p),e.background=null,_=!0):(h.color.copy(vh),_=!0);for(let m=0;m<6;m++){const S=m%3;S===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):S===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const y=this._cubeSize;da(s,S*y,m>2?y:0,y,y),u.setRenderTarget(s),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===ur||e.mapping===dr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=bh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new hn(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;da(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,dc)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=xh[(s-r-1)%xh.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new hn(this._lodPlanes[s],c),d=c.uniforms,h=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*h):2*Math.PI/(2*ms-1),_=r/g,p=isFinite(r)?1+Math.floor(u*_):ms;p>ms&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ms}`);const m=[];let S=0;for(let A=0;A<ms;++A){const C=A/_,b=Math.exp(-C*C/2);m.push(b),A===0?S+=b:A<p&&(S+=2*b)}for(let A=0;A<m.length;A++)m[A]=m[A]/S;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-i;const E=this._sizeLods[s],P=3*E*(s>y-er?s-y+er:0),R=4*(this._cubeSize-E);da(t,P,R,3*E,2*E),l.setRenderTarget(t),l.render(f,dc)}}function aw(n){const e=[],t=[],i=[];let s=n;const r=n-er+1+_h.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>n-er?l=_h[o-n+er-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],h=6,g=6,_=3,p=2,m=1,S=new Float32Array(_*g*h),y=new Float32Array(p*g*h),E=new Float32Array(m*g*h);for(let R=0;R<h;R++){const A=R%3*2/3-1,C=R>2?0:-1,b=[A,C,0,A+2/3,C,0,A+2/3,C+1,0,A,C,0,A+2/3,C+1,0,A,C+1,0];S.set(b,_*g*R),y.set(d,p*g*R);const M=[R,R,R,R,R,R];E.set(M,m*g*R)}const P=new Xn;P.setAttribute("position",new tn(S,_)),P.setAttribute("uv",new tn(y,p)),P.setAttribute("faceIndex",new tn(E,m)),e.push(P),s>er&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Sh(n,e,t){const i=new ws(n,e,t);return i.texture.mapping=fl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function da(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function lw(n,e,t){const i=new Float32Array(ms),s=new k(0,1,0);return new Xi({name:"SphericalGaussianBlur",defines:{n:ms,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ku(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function Mh(){return new Xi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ku(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function bh(){return new Xi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ku(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function ku(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function cw(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===eu||l===tu,u=l===ur||l===dr;if(c||u){let f=e.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new yh(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const h=a.image;return c&&h&&h.height>0||u&&h&&s(h)?(t===null&&(t=new yh(n)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function uw(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Uu("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function dw(n,e,t,i){const s={},r=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let p=0,m=_.length;p<m;p++)e.remove(_[p])}d.removeEventListener("dispose",o),delete s[d.id];const h=r.get(d);h&&(e.remove(h),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(f,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const g in d)e.update(d[g],n.ARRAY_BUFFER);const h=f.morphAttributes;for(const g in h){const _=h[g];for(let p=0,m=_.length;p<m;p++)e.update(_[p],n.ARRAY_BUFFER)}}function c(f){const d=[],h=f.index,g=f.attributes.position;let _=0;if(h!==null){const S=h.array;_=h.version;for(let y=0,E=S.length;y<E;y+=3){const P=S[y+0],R=S[y+1],A=S[y+2];d.push(P,R,R,A,A,P)}}else if(g!==void 0){const S=g.array;_=g.version;for(let y=0,E=S.length/3-1;y<E;y+=3){const P=y+0,R=y+1,A=y+2;d.push(P,R,R,A,A,P)}}else return;const p=new(Tg(d)?Pg:Cg)(d,1);p.version=_;const m=r.get(f);m&&e.remove(m),r.set(f,p)}function u(f){const d=r.get(f);if(d){const h=f.index;h!==null&&d.version<h.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function fw(n,e,t){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,h){n.drawElements(i,h,r,d*o),t.update(h,i,1)}function c(d,h,g){g!==0&&(n.drawElementsInstanced(i,h,r,d*o,g),t.update(h,i,g))}function u(d,h,g){if(g===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let p=0;p<g;p++)this.render(d[p]/o,h[p]);else{_.multiDrawElementsWEBGL(i,h,0,r,d,0,g);let p=0;for(let m=0;m<g;m++)p+=h[m];t.update(p,i,1)}}function f(d,h,g,_){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<d.length;m++)c(d[m]/o,h[m],_[m]);else{p.multiDrawElementsInstancedWEBGL(i,h,0,r,d,0,_,0,g);let m=0;for(let S=0;S<g;S++)m+=h[S];for(let S=0;S<_.length;S++)t.update(m,i,_[S])}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function hw(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function pw(n,e,t){const i=new WeakMap,s=new dt;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==f){let M=function(){C.dispose(),i.delete(a),a.removeEventListener("dispose",M)};var h=M;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],S=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let E=0;g===!0&&(E=1),_===!0&&(E=2),p===!0&&(E=3);let P=a.attributes.position.count*E,R=1;P>e.maxTextureSize&&(R=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const A=new Float32Array(P*R*4*f),C=new Ag(A,P,R,f);C.type=kn,C.needsUpdate=!0;const b=E*4;for(let I=0;I<f;I++){const N=m[I],U=S[I],F=y[I],X=P*R*4*I;for(let G=0;G<N.count;G++){const te=G*b;g===!0&&(s.fromBufferAttribute(N,G),A[X+te+0]=s.x,A[X+te+1]=s.y,A[X+te+2]=s.z,A[X+te+3]=0),_===!0&&(s.fromBufferAttribute(U,G),A[X+te+4]=s.x,A[X+te+5]=s.y,A[X+te+6]=s.z,A[X+te+7]=0),p===!0&&(s.fromBufferAttribute(F,G),A[X+te+8]=s.x,A[X+te+9]=s.y,A[X+te+10]=s.z,A[X+te+11]=F.itemSize===4?s.w:1)}}d={count:f,texture:C,size:new Fe(P,R)},i.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function mw(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(s.get(f)!==c&&(e.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return f}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class Ug extends Ot{constructor(e,t,i,s,r,o,a,l,c,u=rr){if(u!==rr&&u!==mr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===rr&&(i=hr),i===void 0&&u===mr&&(i=pr),super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:en,this.minFilter=l!==void 0?l:en,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Og=new Ot,Fg=new Ug(1,1);Fg.compareFunction=bg;const Bg=new Ag,kg=new tb,zg=new Dg,Eh=[],Th=[],wh=new Float32Array(16),Ah=new Float32Array(9),Rh=new Float32Array(4);function Ar(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Eh[s];if(r===void 0&&(r=new Float32Array(s),Eh[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Ct(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Pt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function gl(n,e){let t=Th[e];t===void 0&&(t=new Int32Array(e),Th[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function gw(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function _w(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;n.uniform2fv(this.addr,e),Pt(t,e)}}function vw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ct(t,e))return;n.uniform3fv(this.addr,e),Pt(t,e)}}function xw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;n.uniform4fv(this.addr,e),Pt(t,e)}}function yw(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ct(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,i))return;Rh.set(i),n.uniformMatrix2fv(this.addr,!1,Rh),Pt(t,i)}}function Sw(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ct(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,i))return;Ah.set(i),n.uniformMatrix3fv(this.addr,!1,Ah),Pt(t,i)}}function Mw(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ct(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,i))return;wh.set(i),n.uniformMatrix4fv(this.addr,!1,wh),Pt(t,i)}}function bw(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Ew(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;n.uniform2iv(this.addr,e),Pt(t,e)}}function Tw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;n.uniform3iv(this.addr,e),Pt(t,e)}}function ww(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;n.uniform4iv(this.addr,e),Pt(t,e)}}function Aw(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Rw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;n.uniform2uiv(this.addr,e),Pt(t,e)}}function Cw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;n.uniform3uiv(this.addr,e),Pt(t,e)}}function Pw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;n.uniform4uiv(this.addr,e),Pt(t,e)}}function Lw(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);const r=this.type===n.SAMPLER_2D_SHADOW?Fg:Og;t.setTexture2D(e||r,s)}function Iw(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||kg,s)}function Dw(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||zg,s)}function Nw(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Bg,s)}function Uw(n){switch(n){case 5126:return gw;case 35664:return _w;case 35665:return vw;case 35666:return xw;case 35674:return yw;case 35675:return Sw;case 35676:return Mw;case 5124:case 35670:return bw;case 35667:case 35671:return Ew;case 35668:case 35672:return Tw;case 35669:case 35673:return ww;case 5125:return Aw;case 36294:return Rw;case 36295:return Cw;case 36296:return Pw;case 35678:case 36198:case 36298:case 36306:case 35682:return Lw;case 35679:case 36299:case 36307:return Iw;case 35680:case 36300:case 36308:case 36293:return Dw;case 36289:case 36303:case 36311:case 36292:return Nw}}function Ow(n,e){n.uniform1fv(this.addr,e)}function Fw(n,e){const t=Ar(e,this.size,2);n.uniform2fv(this.addr,t)}function Bw(n,e){const t=Ar(e,this.size,3);n.uniform3fv(this.addr,t)}function kw(n,e){const t=Ar(e,this.size,4);n.uniform4fv(this.addr,t)}function zw(n,e){const t=Ar(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Hw(n,e){const t=Ar(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Vw(n,e){const t=Ar(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Gw(n,e){n.uniform1iv(this.addr,e)}function Ww(n,e){n.uniform2iv(this.addr,e)}function qw(n,e){n.uniform3iv(this.addr,e)}function Xw(n,e){n.uniform4iv(this.addr,e)}function jw(n,e){n.uniform1uiv(this.addr,e)}function $w(n,e){n.uniform2uiv(this.addr,e)}function Kw(n,e){n.uniform3uiv(this.addr,e)}function Yw(n,e){n.uniform4uiv(this.addr,e)}function Zw(n,e,t){const i=this.cache,s=e.length,r=gl(t,s);Ct(i,r)||(n.uniform1iv(this.addr,r),Pt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Og,r[o])}function Jw(n,e,t){const i=this.cache,s=e.length,r=gl(t,s);Ct(i,r)||(n.uniform1iv(this.addr,r),Pt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||kg,r[o])}function Qw(n,e,t){const i=this.cache,s=e.length,r=gl(t,s);Ct(i,r)||(n.uniform1iv(this.addr,r),Pt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||zg,r[o])}function eA(n,e,t){const i=this.cache,s=e.length,r=gl(t,s);Ct(i,r)||(n.uniform1iv(this.addr,r),Pt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Bg,r[o])}function tA(n){switch(n){case 5126:return Ow;case 35664:return Fw;case 35665:return Bw;case 35666:return kw;case 35674:return zw;case 35675:return Hw;case 35676:return Vw;case 5124:case 35670:return Gw;case 35667:case 35671:return Ww;case 35668:case 35672:return qw;case 35669:case 35673:return Xw;case 5125:return jw;case 36294:return $w;case 36295:return Kw;case 36296:return Yw;case 35678:case 36198:case 36298:case 36306:case 35682:return Zw;case 35679:case 36299:case 36307:return Jw;case 35680:case 36300:case 36308:case 36293:return Qw;case 36289:case 36303:case 36311:case 36292:return eA}}class nA{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Uw(t.type)}}class iA{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=tA(t.type)}}class sA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const gc=/(\w+)(\])?(\[|\.)?/g;function Ch(n,e){n.seq.push(e),n.map[e.id]=e}function rA(n,e,t){const i=n.name,s=i.length;for(gc.lastIndex=0;;){const r=gc.exec(i),o=gc.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Ch(t,c===void 0?new nA(a,n,e):new iA(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new sA(a),Ch(t,f)),t=f}}}class Ta{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);rA(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function Ph(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const oA=37297;let aA=0;function lA(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function cA(n){const e=it.getPrimaries(it.workingColorSpace),t=it.getPrimaries(n);let i;switch(e===t?i="":e===Xa&&t===qa?i="LinearDisplayP3ToLinearSRGB":e===qa&&t===Xa&&(i="LinearSRGBToLinearDisplayP3"),n){case Ht:case pl:return[i,"LinearTransferOETF"];case Jt:case Du:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Lh(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+lA(n.getShaderSource(e),o)}else return s}function uA(n,e){const t=cA(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function dA(n,e){let t;switch(e){case sM:t="Linear";break;case rM:t="Reinhard";break;case dg:t="OptimizedCineon";break;case oM:t="ACESFilmic";break;case lM:t="AgX";break;case cM:t="Neutral";break;case aM:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function fA(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($r).join(`
`)}function hA(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function pA(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function $r(n){return n!==""}function Ih(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Dh(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const mA=/^[ \t]*#include +<([\w\d./]+)>/gm;function su(n){return n.replace(mA,_A)}const gA=new Map;function _A(n,e){let t=$e[e];if(t===void 0){const i=gA.get(e);if(i!==void 0)t=$e[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return su(t)}const vA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nh(n){return n.replace(vA,xA)}function xA(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Uh(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function yA(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===cg?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===PS?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ni&&(e="SHADOWMAP_TYPE_VSM"),e}function SA(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ur:case dr:e="ENVMAP_TYPE_CUBE";break;case fl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function MA(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case dr:e="ENVMAP_MODE_REFRACTION";break}return e}function bA(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case ug:e="ENVMAP_BLENDING_MULTIPLY";break;case nM:e="ENVMAP_BLENDING_MIX";break;case iM:e="ENVMAP_BLENDING_ADD";break}return e}function EA(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function TA(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=yA(t),c=SA(t),u=MA(t),f=bA(t),d=EA(t),h=fA(t),g=hA(r),_=s.createProgram();let p,m,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter($r).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter($r).join(`
`),m.length>0&&(m+=`
`)):(p=[Uh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($r).join(`
`),m=[Uh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Gi?"#define TONE_MAPPING":"",t.toneMapping!==Gi?$e.tonemapping_pars_fragment:"",t.toneMapping!==Gi?dA("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,uA("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter($r).join(`
`)),o=su(o),o=Ih(o,t),o=Dh(o,t),a=su(a),a=Ih(a,t),a=Dh(a,t),o=Nh(o),a=Nh(a),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,p=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===Yf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Yf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const y=S+p+o,E=S+m+a,P=Ph(s,s.VERTEX_SHADER,y),R=Ph(s,s.FRAGMENT_SHADER,E);s.attachShader(_,P),s.attachShader(_,R),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function A(I){if(n.debug.checkShaderErrors){const N=s.getProgramInfoLog(_).trim(),U=s.getShaderInfoLog(P).trim(),F=s.getShaderInfoLog(R).trim();let X=!0,G=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(X=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,P,R);else{const te=Lh(s,P,"vertex"),q=Lh(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+N+`
`+te+`
`+q)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(U===""||F==="")&&(G=!1);G&&(I.diagnostics={runnable:X,programLog:N,vertexShader:{log:U,prefix:p},fragmentShader:{log:F,prefix:m}})}s.deleteShader(P),s.deleteShader(R),C=new Ta(s,_),b=pA(s,_)}let C;this.getUniforms=function(){return C===void 0&&A(this),C};let b;this.getAttributes=function(){return b===void 0&&A(this),b};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(_,oA)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=aA++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=P,this.fragmentShader=R,this}let wA=0;class AA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new RA(e),t.set(e,i)),i}}class RA{constructor(e){this.id=wA++,this.code=e,this.usedTimes=0}}function CA(n,e,t,i,s,r,o){const a=new Ou,l=new AA,c=new Set,u=[],f=s.logarithmicDepthBuffer,d=s.vertexTextures;let h=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return c.add(b),b===0?"uv":`uv${b}`}function p(b,M,I,N,U){const F=N.fog,X=U.geometry,G=b.isMeshStandardMaterial?N.environment:null,te=(b.isMeshStandardMaterial?t:e).get(b.envMap||G),q=te&&te.mapping===fl?te.image.height:null,me=g[b.type];b.precision!==null&&(h=s.getMaxPrecision(b.precision),h!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",h,"instead."));const Se=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ye=Se!==void 0?Se.length:0;let Ie=0;X.morphAttributes.position!==void 0&&(Ie=1),X.morphAttributes.normal!==void 0&&(Ie=2),X.morphAttributes.color!==void 0&&(Ie=3);let Ze,se,he,oe;if(me){const nt=Un[me];Ze=nt.vertexShader,se=nt.fragmentShader}else Ze=b.vertexShader,se=b.fragmentShader,l.update(b),he=l.getVertexShaderID(b),oe=l.getFragmentShaderID(b);const ce=n.getRenderTarget(),De=U.isInstancedMesh===!0,pe=U.isBatchedMesh===!0,Ne=!!b.map,B=!!b.matcap,Xe=!!te,L=!!b.aoMap,O=!!b.lightMap,H=!!b.bumpMap,Q=!!b.normalMap,J=!!b.displacementMap,ie=!!b.emissiveMap,fe=!!b.metalnessMap,T=!!b.roughnessMap,v=b.anisotropy>0,D=b.clearcoat>0,V=b.dispersion>0,K=b.iridescence>0,$=b.sheen>0,ue=b.transmission>0,re=v&&!!b.anisotropyMap,ae=D&&!!b.clearcoatMap,Ee=D&&!!b.clearcoatNormalMap,le=D&&!!b.clearcoatRoughnessMap,Me=K&&!!b.iridescenceMap,He=K&&!!b.iridescenceThicknessMap,Ue=$&&!!b.sheenColorMap,ve=$&&!!b.sheenRoughnessMap,Ve=!!b.specularMap,Re=!!b.specularColorMap,Qe=!!b.specularIntensityMap,x=ue&&!!b.transmissionMap,ee=ue&&!!b.thicknessMap,j=!!b.gradientMap,ne=!!b.alphaMap,de=b.alphaTest>0,Ce=!!b.alphaHash,Ge=!!b.extensions;let gt=Gi;b.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(gt=n.toneMapping);const Mt={shaderID:me,shaderType:b.type,shaderName:b.name,vertexShader:Ze,fragmentShader:se,defines:b.defines,customVertexShaderID:he,customFragmentShaderID:oe,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:h,batching:pe,batchingColor:pe&&U._colorsTexture!==null,instancing:De,instancingColor:De&&U.instanceColor!==null,instancingMorph:De&&U.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ce===null?n.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:Ht,alphaToCoverage:!!b.alphaToCoverage,map:Ne,matcap:B,envMap:Xe,envMapMode:Xe&&te.mapping,envMapCubeUVHeight:q,aoMap:L,lightMap:O,bumpMap:H,normalMap:Q,displacementMap:d&&J,emissiveMap:ie,normalMapObjectSpace:Q&&b.normalMapType===EM,normalMapTangentSpace:Q&&b.normalMapType===Mg,metalnessMap:fe,roughnessMap:T,anisotropy:v,anisotropyMap:re,clearcoat:D,clearcoatMap:ae,clearcoatNormalMap:Ee,clearcoatRoughnessMap:le,dispersion:V,iridescence:K,iridescenceMap:Me,iridescenceThicknessMap:He,sheen:$,sheenColorMap:Ue,sheenRoughnessMap:ve,specularMap:Ve,specularColorMap:Re,specularIntensityMap:Qe,transmission:ue,transmissionMap:x,thicknessMap:ee,gradientMap:j,opaque:b.transparent===!1&&b.blending===sr&&b.alphaToCoverage===!1,alphaMap:ne,alphaTest:de,alphaHash:Ce,combine:b.combine,mapUv:Ne&&_(b.map.channel),aoMapUv:L&&_(b.aoMap.channel),lightMapUv:O&&_(b.lightMap.channel),bumpMapUv:H&&_(b.bumpMap.channel),normalMapUv:Q&&_(b.normalMap.channel),displacementMapUv:J&&_(b.displacementMap.channel),emissiveMapUv:ie&&_(b.emissiveMap.channel),metalnessMapUv:fe&&_(b.metalnessMap.channel),roughnessMapUv:T&&_(b.roughnessMap.channel),anisotropyMapUv:re&&_(b.anisotropyMap.channel),clearcoatMapUv:ae&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:Ee&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Me&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:He&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:ve&&_(b.sheenRoughnessMap.channel),specularMapUv:Ve&&_(b.specularMap.channel),specularColorMapUv:Re&&_(b.specularColorMap.channel),specularIntensityMapUv:Qe&&_(b.specularIntensityMap.channel),transmissionMapUv:x&&_(b.transmissionMap.channel),thicknessMapUv:ee&&_(b.thicknessMap.channel),alphaMapUv:ne&&_(b.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Q||v),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!X.attributes.uv&&(Ne||ne),fog:!!F,useFog:b.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:U.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:ye,morphTextureStride:Ie,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:gt,decodeVideoTexture:Ne&&b.map.isVideoTexture===!0&&it.getTransfer(b.map.colorSpace)===ft,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Fn,flipSided:b.side===sn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ge&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Ge&&b.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Mt.vertexUv1s=c.has(1),Mt.vertexUv2s=c.has(2),Mt.vertexUv3s=c.has(3),c.clear(),Mt}function m(b){const M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(const I in b.defines)M.push(I),M.push(b.defines[I]);return b.isRawShaderMaterial===!1&&(S(M,b),y(M,b),M.push(n.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function S(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function y(b,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.skinning&&a.enable(4),M.morphTargets&&a.enable(5),M.morphNormals&&a.enable(6),M.morphColors&&a.enable(7),M.premultipliedAlpha&&a.enable(8),M.shadowMapEnabled&&a.enable(9),M.doubleSided&&a.enable(10),M.flipSided&&a.enable(11),M.useDepthPacking&&a.enable(12),M.dithering&&a.enable(13),M.transmission&&a.enable(14),M.sheen&&a.enable(15),M.opaque&&a.enable(16),M.pointsUvs&&a.enable(17),M.decodeVideoTexture&&a.enable(18),M.alphaToCoverage&&a.enable(19),b.push(a.mask)}function E(b){const M=g[b.type];let I;if(M){const N=Un[M];I=hb.clone(N.uniforms)}else I=b.uniforms;return I}function P(b,M){let I;for(let N=0,U=u.length;N<U;N++){const F=u[N];if(F.cacheKey===M){I=F,++I.usedTimes;break}}return I===void 0&&(I=new TA(n,M,b,r),u.push(I)),I}function R(b){if(--b.usedTimes===0){const M=u.indexOf(b);u[M]=u[u.length-1],u.pop(),b.destroy()}}function A(b){l.remove(b)}function C(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:E,acquireProgram:P,releaseProgram:R,releaseShaderCache:A,programs:u,dispose:C}}function PA(){let n=new WeakMap;function e(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function t(r){n.delete(r)}function i(r,o,a){n.get(r)[o]=a}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function LA(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Oh(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Fh(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(f,d,h,g,_,p){let m=n[e];return m===void 0?(m={id:f.id,object:f,geometry:d,material:h,groupOrder:g,renderOrder:f.renderOrder,z:_,group:p},n[e]=m):(m.id=f.id,m.object=f,m.geometry=d,m.material=h,m.groupOrder=g,m.renderOrder=f.renderOrder,m.z=_,m.group=p),e++,m}function a(f,d,h,g,_,p){const m=o(f,d,h,g,_,p);h.transmission>0?i.push(m):h.transparent===!0?s.push(m):t.push(m)}function l(f,d,h,g,_,p){const m=o(f,d,h,g,_,p);h.transmission>0?i.unshift(m):h.transparent===!0?s.unshift(m):t.unshift(m)}function c(f,d){t.length>1&&t.sort(f||LA),i.length>1&&i.sort(d||Oh),s.length>1&&s.sort(d||Oh)}function u(){for(let f=e,d=n.length;f<d;f++){const h=n[f];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function IA(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new Fh,n.set(i,[o])):s>=r.length?(o=new Fh,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function DA(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new We};break;case"SpotLight":t={position:new k,direction:new k,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new We,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new We,groundColor:new We};break;case"RectAreaLight":t={color:new We,position:new k,halfWidth:new k,halfHeight:new k};break}return n[e.id]=t,t}}}function NA(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let UA=0;function OA(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function FA(n){const e=new DA,t=NA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new k);const s=new k,r=new je,o=new je;function a(c){let u=0,f=0,d=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let h=0,g=0,_=0,p=0,m=0,S=0,y=0,E=0,P=0,R=0,A=0;c.sort(OA);for(let b=0,M=c.length;b<M;b++){const I=c[b],N=I.color,U=I.intensity,F=I.distance,X=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=N.r*U,f+=N.g*U,d+=N.b*U;else if(I.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(I.sh.coefficients[G],U);A++}else if(I.isDirectionalLight){const G=e.get(I);if(G.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const te=I.shadow,q=t.get(I);q.shadowBias=te.bias,q.shadowNormalBias=te.normalBias,q.shadowRadius=te.radius,q.shadowMapSize=te.mapSize,i.directionalShadow[h]=q,i.directionalShadowMap[h]=X,i.directionalShadowMatrix[h]=I.shadow.matrix,S++}i.directional[h]=G,h++}else if(I.isSpotLight){const G=e.get(I);G.position.setFromMatrixPosition(I.matrixWorld),G.color.copy(N).multiplyScalar(U),G.distance=F,G.coneCos=Math.cos(I.angle),G.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),G.decay=I.decay,i.spot[_]=G;const te=I.shadow;if(I.map&&(i.spotLightMap[P]=I.map,P++,te.updateMatrices(I),I.castShadow&&R++),i.spotLightMatrix[_]=te.matrix,I.castShadow){const q=t.get(I);q.shadowBias=te.bias,q.shadowNormalBias=te.normalBias,q.shadowRadius=te.radius,q.shadowMapSize=te.mapSize,i.spotShadow[_]=q,i.spotShadowMap[_]=X,E++}_++}else if(I.isRectAreaLight){const G=e.get(I);G.color.copy(N).multiplyScalar(U),G.halfWidth.set(I.width*.5,0,0),G.halfHeight.set(0,I.height*.5,0),i.rectArea[p]=G,p++}else if(I.isPointLight){const G=e.get(I);if(G.color.copy(I.color).multiplyScalar(I.intensity),G.distance=I.distance,G.decay=I.decay,I.castShadow){const te=I.shadow,q=t.get(I);q.shadowBias=te.bias,q.shadowNormalBias=te.normalBias,q.shadowRadius=te.radius,q.shadowMapSize=te.mapSize,q.shadowCameraNear=te.camera.near,q.shadowCameraFar=te.camera.far,i.pointShadow[g]=q,i.pointShadowMap[g]=X,i.pointShadowMatrix[g]=I.shadow.matrix,y++}i.point[g]=G,g++}else if(I.isHemisphereLight){const G=e.get(I);G.skyColor.copy(I.color).multiplyScalar(U),G.groundColor.copy(I.groundColor).multiplyScalar(U),i.hemi[m]=G,m++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=xe.LTC_FLOAT_1,i.rectAreaLTC2=xe.LTC_FLOAT_2):(i.rectAreaLTC1=xe.LTC_HALF_1,i.rectAreaLTC2=xe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const C=i.hash;(C.directionalLength!==h||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==p||C.hemiLength!==m||C.numDirectionalShadows!==S||C.numPointShadows!==y||C.numSpotShadows!==E||C.numSpotMaps!==P||C.numLightProbes!==A)&&(i.directional.length=h,i.spot.length=_,i.rectArea.length=p,i.point.length=g,i.hemi.length=m,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=E+P-R,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=A,C.directionalLength=h,C.pointLength=g,C.spotLength=_,C.rectAreaLength=p,C.hemiLength=m,C.numDirectionalShadows=S,C.numPointShadows=y,C.numSpotShadows=E,C.numSpotMaps=P,C.numLightProbes=A,i.version=UA++)}function l(c,u){let f=0,d=0,h=0,g=0,_=0;const p=u.matrixWorldInverse;for(let m=0,S=c.length;m<S;m++){const y=c[m];if(y.isDirectionalLight){const E=i.directional[f];E.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),f++}else if(y.isSpotLight){const E=i.spot[h];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),h++}else if(y.isRectAreaLight){const E=i.rectArea[g];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(p),o.identity(),r.copy(y.matrixWorld),r.premultiply(p),o.extractRotation(r),E.halfWidth.set(y.width*.5,0,0),E.halfHeight.set(0,y.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const E=i.point[d];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(p),d++}else if(y.isHemisphereLight){const E=i.hemi[_];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(p),_++}}}return{setup:a,setupView:l,state:i}}function Bh(n){const e=new FA(n),t=[],i=[];function s(u){c.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function BA(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Bh(n),e.set(s,[a])):r>=o.length?(a=new Bh(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class kA extends zn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=MM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class zA extends zn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const HA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,VA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function GA(n,e,t){let i=new Fu;const s=new Fe,r=new Fe,o=new dt,a=new kA({depthPacking:bM}),l=new zA,c={},u=t.maxTextureSize,f={[di]:sn,[sn]:di,[Fn]:Fn},d=new Xi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Fe},radius:{value:4}},vertexShader:HA,fragmentShader:VA}),h=d.clone();h.defines.HORIZONTAL_PASS=1;const g=new Xn;g.setAttribute("position",new tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new hn(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cg;let m=this.type;this.render=function(R,A,C){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;const b=n.getRenderTarget(),M=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),N=n.state;N.setBlending(Vi),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const U=m!==ni&&this.type===ni,F=m===ni&&this.type!==ni;for(let X=0,G=R.length;X<G;X++){const te=R[X],q=te.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);const me=q.getFrameExtents();if(s.multiply(me),r.copy(q.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/me.x),s.x=r.x*me.x,q.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/me.y),s.y=r.y*me.y,q.mapSize.y=r.y)),q.map===null||U===!0||F===!0){const ye=this.type!==ni?{minFilter:en,magFilter:en}:{};q.map!==null&&q.map.dispose(),q.map=new ws(s.x,s.y,ye),q.map.texture.name=te.name+".shadowMap",q.camera.updateProjectionMatrix()}n.setRenderTarget(q.map),n.clear();const Se=q.getViewportCount();for(let ye=0;ye<Se;ye++){const Ie=q.getViewport(ye);o.set(r.x*Ie.x,r.y*Ie.y,r.x*Ie.z,r.y*Ie.w),N.viewport(o),q.updateMatrices(te,ye),i=q.getFrustum(),E(A,C,q.camera,te,this.type)}q.isPointLightShadow!==!0&&this.type===ni&&S(q,C),q.needsUpdate=!1}m=this.type,p.needsUpdate=!1,n.setRenderTarget(b,M,I)};function S(R,A){const C=e.update(_);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,h.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new ws(s.x,s.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(A,null,C,d,_,null),h.uniforms.shadow_pass.value=R.mapPass.texture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(A,null,C,h,_,null)}function y(R,A,C,b){let M=null;const I=C.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(I!==void 0)M=I;else if(M=C.isPointLight===!0?l:a,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const N=M.uuid,U=A.uuid;let F=c[N];F===void 0&&(F={},c[N]=F);let X=F[U];X===void 0&&(X=M.clone(),F[U]=X,A.addEventListener("dispose",P)),M=X}if(M.visible=A.visible,M.wireframe=A.wireframe,b===ni?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:f[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,C.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const N=n.properties.get(M);N.light=C}return M}function E(R,A,C,b,M){if(R.visible===!1)return;if(R.layers.test(A.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&M===ni)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,R.matrixWorld);const U=e.update(R),F=R.material;if(Array.isArray(F)){const X=U.groups;for(let G=0,te=X.length;G<te;G++){const q=X[G],me=F[q.materialIndex];if(me&&me.visible){const Se=y(R,me,b,M);R.onBeforeShadow(n,R,A,C,U,Se,q),n.renderBufferDirect(C,null,U,Se,R,q),R.onAfterShadow(n,R,A,C,U,Se,q)}}}else if(F.visible){const X=y(R,F,b,M);R.onBeforeShadow(n,R,A,C,U,X,null),n.renderBufferDirect(C,null,U,X,R,null),R.onAfterShadow(n,R,A,C,U,X,null)}}const N=R.children;for(let U=0,F=N.length;U<F;U++)E(N[U],A,C,b,M)}function P(R){R.target.removeEventListener("dispose",P);for(const C in c){const b=c[C],M=R.target.uuid;M in b&&(b[M].dispose(),delete b[M])}}}function WA(n){function e(){let x=!1;const ee=new dt;let j=null;const ne=new dt(0,0,0,0);return{setMask:function(de){j!==de&&!x&&(n.colorMask(de,de,de,de),j=de)},setLocked:function(de){x=de},setClear:function(de,Ce,Ge,gt,Mt){Mt===!0&&(de*=gt,Ce*=gt,Ge*=gt),ee.set(de,Ce,Ge,gt),ne.equals(ee)===!1&&(n.clearColor(de,Ce,Ge,gt),ne.copy(ee))},reset:function(){x=!1,j=null,ne.set(-1,0,0,0)}}}function t(){let x=!1,ee=null,j=null,ne=null;return{setTest:function(de){de?oe(n.DEPTH_TEST):ce(n.DEPTH_TEST)},setMask:function(de){ee!==de&&!x&&(n.depthMask(de),ee=de)},setFunc:function(de){if(j!==de){switch(de){case KS:n.depthFunc(n.NEVER);break;case YS:n.depthFunc(n.ALWAYS);break;case ZS:n.depthFunc(n.LESS);break;case Ha:n.depthFunc(n.LEQUAL);break;case JS:n.depthFunc(n.EQUAL);break;case QS:n.depthFunc(n.GEQUAL);break;case eM:n.depthFunc(n.GREATER);break;case tM:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}j=de}},setLocked:function(de){x=de},setClear:function(de){ne!==de&&(n.clearDepth(de),ne=de)},reset:function(){x=!1,ee=null,j=null,ne=null}}}function i(){let x=!1,ee=null,j=null,ne=null,de=null,Ce=null,Ge=null,gt=null,Mt=null;return{setTest:function(nt){x||(nt?oe(n.STENCIL_TEST):ce(n.STENCIL_TEST))},setMask:function(nt){ee!==nt&&!x&&(n.stencilMask(nt),ee=nt)},setFunc:function(nt,bt,Et){(j!==nt||ne!==bt||de!==Et)&&(n.stencilFunc(nt,bt,Et),j=nt,ne=bt,de=Et)},setOp:function(nt,bt,Et){(Ce!==nt||Ge!==bt||gt!==Et)&&(n.stencilOp(nt,bt,Et),Ce=nt,Ge=bt,gt=Et)},setLocked:function(nt){x=nt},setClear:function(nt){Mt!==nt&&(n.clearStencil(nt),Mt=nt)},reset:function(){x=!1,ee=null,j=null,ne=null,de=null,Ce=null,Ge=null,gt=null,Mt=null}}}const s=new e,r=new t,o=new i,a=new WeakMap,l=new WeakMap;let c={},u={},f=new WeakMap,d=[],h=null,g=!1,_=null,p=null,m=null,S=null,y=null,E=null,P=null,R=new We(0,0,0),A=0,C=!1,b=null,M=null,I=null,N=null,U=null;const F=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,G=0;const te=n.getParameter(n.VERSION);te.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(te)[1]),X=G>=1):te.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),X=G>=2);let q=null,me={};const Se=n.getParameter(n.SCISSOR_BOX),ye=n.getParameter(n.VIEWPORT),Ie=new dt().fromArray(Se),Ze=new dt().fromArray(ye);function se(x,ee,j,ne){const de=new Uint8Array(4),Ce=n.createTexture();n.bindTexture(x,Ce),n.texParameteri(x,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(x,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ge=0;Ge<j;Ge++)x===n.TEXTURE_3D||x===n.TEXTURE_2D_ARRAY?n.texImage3D(ee,0,n.RGBA,1,1,ne,0,n.RGBA,n.UNSIGNED_BYTE,de):n.texImage2D(ee+Ge,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,de);return Ce}const he={};he[n.TEXTURE_2D]=se(n.TEXTURE_2D,n.TEXTURE_2D,1),he[n.TEXTURE_CUBE_MAP]=se(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),he[n.TEXTURE_2D_ARRAY]=se(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),he[n.TEXTURE_3D]=se(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),oe(n.DEPTH_TEST),r.setFunc(Ha),H(!1),Q(mf),oe(n.CULL_FACE),L(Vi);function oe(x){c[x]!==!0&&(n.enable(x),c[x]=!0)}function ce(x){c[x]!==!1&&(n.disable(x),c[x]=!1)}function De(x,ee){return u[x]!==ee?(n.bindFramebuffer(x,ee),u[x]=ee,x===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ee),x===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ee),!0):!1}function pe(x,ee){let j=d,ne=!1;if(x){j=f.get(ee),j===void 0&&(j=[],f.set(ee,j));const de=x.textures;if(j.length!==de.length||j[0]!==n.COLOR_ATTACHMENT0){for(let Ce=0,Ge=de.length;Ce<Ge;Ce++)j[Ce]=n.COLOR_ATTACHMENT0+Ce;j.length=de.length,ne=!0}}else j[0]!==n.BACK&&(j[0]=n.BACK,ne=!0);ne&&n.drawBuffers(j)}function Ne(x){return h!==x?(n.useProgram(x),h=x,!0):!1}const B={[ps]:n.FUNC_ADD,[IS]:n.FUNC_SUBTRACT,[DS]:n.FUNC_REVERSE_SUBTRACT};B[NS]=n.MIN,B[US]=n.MAX;const Xe={[OS]:n.ZERO,[FS]:n.ONE,[BS]:n.SRC_COLOR,[Jc]:n.SRC_ALPHA,[WS]:n.SRC_ALPHA_SATURATE,[VS]:n.DST_COLOR,[zS]:n.DST_ALPHA,[kS]:n.ONE_MINUS_SRC_COLOR,[Qc]:n.ONE_MINUS_SRC_ALPHA,[GS]:n.ONE_MINUS_DST_COLOR,[HS]:n.ONE_MINUS_DST_ALPHA,[qS]:n.CONSTANT_COLOR,[XS]:n.ONE_MINUS_CONSTANT_COLOR,[jS]:n.CONSTANT_ALPHA,[$S]:n.ONE_MINUS_CONSTANT_ALPHA};function L(x,ee,j,ne,de,Ce,Ge,gt,Mt,nt){if(x===Vi){g===!0&&(ce(n.BLEND),g=!1);return}if(g===!1&&(oe(n.BLEND),g=!0),x!==LS){if(x!==_||nt!==C){if((p!==ps||y!==ps)&&(n.blendEquation(n.FUNC_ADD),p=ps,y=ps),nt)switch(x){case sr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case gf:n.blendFunc(n.ONE,n.ONE);break;case _f:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case vf:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",x);break}else switch(x){case sr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case gf:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case _f:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case vf:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",x);break}m=null,S=null,E=null,P=null,R.set(0,0,0),A=0,_=x,C=nt}return}de=de||ee,Ce=Ce||j,Ge=Ge||ne,(ee!==p||de!==y)&&(n.blendEquationSeparate(B[ee],B[de]),p=ee,y=de),(j!==m||ne!==S||Ce!==E||Ge!==P)&&(n.blendFuncSeparate(Xe[j],Xe[ne],Xe[Ce],Xe[Ge]),m=j,S=ne,E=Ce,P=Ge),(gt.equals(R)===!1||Mt!==A)&&(n.blendColor(gt.r,gt.g,gt.b,Mt),R.copy(gt),A=Mt),_=x,C=!1}function O(x,ee){x.side===Fn?ce(n.CULL_FACE):oe(n.CULL_FACE);let j=x.side===sn;ee&&(j=!j),H(j),x.blending===sr&&x.transparent===!1?L(Vi):L(x.blending,x.blendEquation,x.blendSrc,x.blendDst,x.blendEquationAlpha,x.blendSrcAlpha,x.blendDstAlpha,x.blendColor,x.blendAlpha,x.premultipliedAlpha),r.setFunc(x.depthFunc),r.setTest(x.depthTest),r.setMask(x.depthWrite),s.setMask(x.colorWrite);const ne=x.stencilWrite;o.setTest(ne),ne&&(o.setMask(x.stencilWriteMask),o.setFunc(x.stencilFunc,x.stencilRef,x.stencilFuncMask),o.setOp(x.stencilFail,x.stencilZFail,x.stencilZPass)),ie(x.polygonOffset,x.polygonOffsetFactor,x.polygonOffsetUnits),x.alphaToCoverage===!0?oe(n.SAMPLE_ALPHA_TO_COVERAGE):ce(n.SAMPLE_ALPHA_TO_COVERAGE)}function H(x){b!==x&&(x?n.frontFace(n.CW):n.frontFace(n.CCW),b=x)}function Q(x){x!==RS?(oe(n.CULL_FACE),x!==M&&(x===mf?n.cullFace(n.BACK):x===CS?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ce(n.CULL_FACE),M=x}function J(x){x!==I&&(X&&n.lineWidth(x),I=x)}function ie(x,ee,j){x?(oe(n.POLYGON_OFFSET_FILL),(N!==ee||U!==j)&&(n.polygonOffset(ee,j),N=ee,U=j)):ce(n.POLYGON_OFFSET_FILL)}function fe(x){x?oe(n.SCISSOR_TEST):ce(n.SCISSOR_TEST)}function T(x){x===void 0&&(x=n.TEXTURE0+F-1),q!==x&&(n.activeTexture(x),q=x)}function v(x,ee,j){j===void 0&&(q===null?j=n.TEXTURE0+F-1:j=q);let ne=me[j];ne===void 0&&(ne={type:void 0,texture:void 0},me[j]=ne),(ne.type!==x||ne.texture!==ee)&&(q!==j&&(n.activeTexture(j),q=j),n.bindTexture(x,ee||he[x]),ne.type=x,ne.texture=ee)}function D(){const x=me[q];x!==void 0&&x.type!==void 0&&(n.bindTexture(x.type,null),x.type=void 0,x.texture=void 0)}function V(){try{n.compressedTexImage2D.apply(n,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function K(){try{n.compressedTexImage3D.apply(n,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function $(){try{n.texSubImage2D.apply(n,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function ue(){try{n.texSubImage3D.apply(n,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function re(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function ae(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function Ee(){try{n.texStorage2D.apply(n,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function le(){try{n.texStorage3D.apply(n,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function Me(){try{n.texImage2D.apply(n,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function He(){try{n.texImage3D.apply(n,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function Ue(x){Ie.equals(x)===!1&&(n.scissor(x.x,x.y,x.z,x.w),Ie.copy(x))}function ve(x){Ze.equals(x)===!1&&(n.viewport(x.x,x.y,x.z,x.w),Ze.copy(x))}function Ve(x,ee){let j=l.get(ee);j===void 0&&(j=new WeakMap,l.set(ee,j));let ne=j.get(x);ne===void 0&&(ne=n.getUniformBlockIndex(ee,x.name),j.set(x,ne))}function Re(x,ee){const ne=l.get(ee).get(x);a.get(ee)!==ne&&(n.uniformBlockBinding(ee,ne,x.__bindingPointIndex),a.set(ee,ne))}function Qe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},q=null,me={},u={},f=new WeakMap,d=[],h=null,g=!1,_=null,p=null,m=null,S=null,y=null,E=null,P=null,R=new We(0,0,0),A=0,C=!1,b=null,M=null,I=null,N=null,U=null,Ie.set(0,0,n.canvas.width,n.canvas.height),Ze.set(0,0,n.canvas.width,n.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:oe,disable:ce,bindFramebuffer:De,drawBuffers:pe,useProgram:Ne,setBlending:L,setMaterial:O,setFlipSided:H,setCullFace:Q,setLineWidth:J,setPolygonOffset:ie,setScissorTest:fe,activeTexture:T,bindTexture:v,unbindTexture:D,compressedTexImage2D:V,compressedTexImage3D:K,texImage2D:Me,texImage3D:He,updateUBOMapping:Ve,uniformBlockBinding:Re,texStorage2D:Ee,texStorage3D:le,texSubImage2D:$,texSubImage3D:ue,compressedTexSubImage2D:re,compressedTexSubImage3D:ae,scissor:Ue,viewport:ve,reset:Qe}}function qA(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Fe,u=new WeakMap;let f;const d=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,v){return h?new OffscreenCanvas(T,v):Mo("canvas")}function _(T,v,D){let V=1;const K=fe(T);if((K.width>D||K.height>D)&&(V=D/Math.max(K.width,K.height)),V<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const $=Math.floor(V*K.width),ue=Math.floor(V*K.height);f===void 0&&(f=g($,ue));const re=v?g($,ue):f;return re.width=$,re.height=ue,re.getContext("2d").drawImage(T,0,0,$,ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+$+"x"+ue+")."),re}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),T;return T}function p(T){return T.generateMipmaps&&T.minFilter!==en&&T.minFilter!==fn}function m(T){n.generateMipmap(T)}function S(T,v,D,V,K=!1){if(T!==null){if(n[T]!==void 0)return n[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let $=v;if(v===n.RED&&(D===n.FLOAT&&($=n.R32F),D===n.HALF_FLOAT&&($=n.R16F),D===n.UNSIGNED_BYTE&&($=n.R8)),v===n.RED_INTEGER&&(D===n.UNSIGNED_BYTE&&($=n.R8UI),D===n.UNSIGNED_SHORT&&($=n.R16UI),D===n.UNSIGNED_INT&&($=n.R32UI),D===n.BYTE&&($=n.R8I),D===n.SHORT&&($=n.R16I),D===n.INT&&($=n.R32I)),v===n.RG&&(D===n.FLOAT&&($=n.RG32F),D===n.HALF_FLOAT&&($=n.RG16F),D===n.UNSIGNED_BYTE&&($=n.RG8)),v===n.RG_INTEGER&&(D===n.UNSIGNED_BYTE&&($=n.RG8UI),D===n.UNSIGNED_SHORT&&($=n.RG16UI),D===n.UNSIGNED_INT&&($=n.RG32UI),D===n.BYTE&&($=n.RG8I),D===n.SHORT&&($=n.RG16I),D===n.INT&&($=n.RG32I)),v===n.RGB&&D===n.UNSIGNED_INT_5_9_9_9_REV&&($=n.RGB9_E5),v===n.RGBA){const ue=K?Wa:it.getTransfer(V);D===n.FLOAT&&($=n.RGBA32F),D===n.HALF_FLOAT&&($=n.RGBA16F),D===n.UNSIGNED_BYTE&&($=ue===ft?n.SRGB8_ALPHA8:n.RGBA8),D===n.UNSIGNED_SHORT_4_4_4_4&&($=n.RGBA4),D===n.UNSIGNED_SHORT_5_5_5_1&&($=n.RGB5_A1)}return($===n.R16F||$===n.R32F||$===n.RG16F||$===n.RG32F||$===n.RGBA16F||$===n.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function y(T,v){let D;return T?v===null||v===hr||v===pr?D=n.DEPTH24_STENCIL8:v===kn?D=n.DEPTH32F_STENCIL8:v===Ga&&(D=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===hr||v===pr?D=n.DEPTH_COMPONENT24:v===kn?D=n.DEPTH_COMPONENT32F:v===Ga&&(D=n.DEPTH_COMPONENT16),D}function E(T,v){return p(T)===!0||T.isFramebufferTexture&&T.minFilter!==en&&T.minFilter!==fn?Math.log2(Math.max(v.width,v.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?v.mipmaps.length:1}function P(T){const v=T.target;v.removeEventListener("dispose",P),A(v),v.isVideoTexture&&u.delete(v)}function R(T){const v=T.target;v.removeEventListener("dispose",R),b(v)}function A(T){const v=i.get(T);if(v.__webglInit===void 0)return;const D=T.source,V=d.get(D);if(V){const K=V[v.__cacheKey];K.usedTimes--,K.usedTimes===0&&C(T),Object.keys(V).length===0&&d.delete(D)}i.remove(T)}function C(T){const v=i.get(T);n.deleteTexture(v.__webglTexture);const D=T.source,V=d.get(D);delete V[v.__cacheKey],o.memory.textures--}function b(T){const v=i.get(T);if(T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(v.__webglFramebuffer[V]))for(let K=0;K<v.__webglFramebuffer[V].length;K++)n.deleteFramebuffer(v.__webglFramebuffer[V][K]);else n.deleteFramebuffer(v.__webglFramebuffer[V]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[V])}else{if(Array.isArray(v.__webglFramebuffer))for(let V=0;V<v.__webglFramebuffer.length;V++)n.deleteFramebuffer(v.__webglFramebuffer[V]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let V=0;V<v.__webglColorRenderbuffer.length;V++)v.__webglColorRenderbuffer[V]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[V]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const D=T.textures;for(let V=0,K=D.length;V<K;V++){const $=i.get(D[V]);$.__webglTexture&&(n.deleteTexture($.__webglTexture),o.memory.textures--),i.remove(D[V])}i.remove(T)}let M=0;function I(){M=0}function N(){const T=M;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),M+=1,T}function U(T){const v=[];return v.push(T.wrapS),v.push(T.wrapT),v.push(T.wrapR||0),v.push(T.magFilter),v.push(T.minFilter),v.push(T.anisotropy),v.push(T.internalFormat),v.push(T.format),v.push(T.type),v.push(T.generateMipmaps),v.push(T.premultiplyAlpha),v.push(T.flipY),v.push(T.unpackAlignment),v.push(T.colorSpace),v.join()}function F(T,v){const D=i.get(T);if(T.isVideoTexture&&J(T),T.isRenderTargetTexture===!1&&T.version>0&&D.__version!==T.version){const V=T.image;if(V===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ze(D,T,v);return}}t.bindTexture(n.TEXTURE_2D,D.__webglTexture,n.TEXTURE0+v)}function X(T,v){const D=i.get(T);if(T.version>0&&D.__version!==T.version){Ze(D,T,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,D.__webglTexture,n.TEXTURE0+v)}function G(T,v){const D=i.get(T);if(T.version>0&&D.__version!==T.version){Ze(D,T,v);return}t.bindTexture(n.TEXTURE_3D,D.__webglTexture,n.TEXTURE0+v)}function te(T,v){const D=i.get(T);if(T.version>0&&D.__version!==T.version){se(D,T,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+v)}const q={[fr]:n.REPEAT,[Fi]:n.CLAMP_TO_EDGE,[Va]:n.MIRRORED_REPEAT},me={[en]:n.NEAREST,[hg]:n.NEAREST_MIPMAP_NEAREST,[jr]:n.NEAREST_MIPMAP_LINEAR,[fn]:n.LINEAR,[Ea]:n.LINEAR_MIPMAP_NEAREST,[ri]:n.LINEAR_MIPMAP_LINEAR},Se={[TM]:n.NEVER,[LM]:n.ALWAYS,[wM]:n.LESS,[bg]:n.LEQUAL,[AM]:n.EQUAL,[PM]:n.GEQUAL,[RM]:n.GREATER,[CM]:n.NOTEQUAL};function ye(T,v){if(v.type===kn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===fn||v.magFilter===Ea||v.magFilter===jr||v.magFilter===ri||v.minFilter===fn||v.minFilter===Ea||v.minFilter===jr||v.minFilter===ri)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,q[v.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,q[v.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,q[v.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,me[v.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,me[v.minFilter]),v.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,Se[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===en||v.minFilter!==jr&&v.minFilter!==ri||v.type===kn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const D=e.get("EXT_texture_filter_anisotropic");n.texParameterf(T,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function Ie(T,v){let D=!1;T.__webglInit===void 0&&(T.__webglInit=!0,v.addEventListener("dispose",P));const V=v.source;let K=d.get(V);K===void 0&&(K={},d.set(V,K));const $=U(v);if($!==T.__cacheKey){K[$]===void 0&&(K[$]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,D=!0),K[$].usedTimes++;const ue=K[T.__cacheKey];ue!==void 0&&(K[T.__cacheKey].usedTimes--,ue.usedTimes===0&&C(v)),T.__cacheKey=$,T.__webglTexture=K[$].texture}return D}function Ze(T,v,D){let V=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(V=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(V=n.TEXTURE_3D);const K=Ie(T,v),$=v.source;t.bindTexture(V,T.__webglTexture,n.TEXTURE0+D);const ue=i.get($);if($.version!==ue.__version||K===!0){t.activeTexture(n.TEXTURE0+D);const re=it.getPrimaries(it.workingColorSpace),ae=v.colorSpace===Oi?null:it.getPrimaries(v.colorSpace),Ee=v.colorSpace===Oi||re===ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);let le=_(v.image,!1,s.maxTextureSize);le=ie(v,le);const Me=r.convert(v.format,v.colorSpace),He=r.convert(v.type);let Ue=S(v.internalFormat,Me,He,v.colorSpace,v.isVideoTexture);ye(V,v);let ve;const Ve=v.mipmaps,Re=v.isVideoTexture!==!0,Qe=ue.__version===void 0||K===!0,x=$.dataReady,ee=E(v,le);if(v.isDepthTexture)Ue=y(v.format===mr,v.type),Qe&&(Re?t.texStorage2D(n.TEXTURE_2D,1,Ue,le.width,le.height):t.texImage2D(n.TEXTURE_2D,0,Ue,le.width,le.height,0,Me,He,null));else if(v.isDataTexture)if(Ve.length>0){Re&&Qe&&t.texStorage2D(n.TEXTURE_2D,ee,Ue,Ve[0].width,Ve[0].height);for(let j=0,ne=Ve.length;j<ne;j++)ve=Ve[j],Re?x&&t.texSubImage2D(n.TEXTURE_2D,j,0,0,ve.width,ve.height,Me,He,ve.data):t.texImage2D(n.TEXTURE_2D,j,Ue,ve.width,ve.height,0,Me,He,ve.data);v.generateMipmaps=!1}else Re?(Qe&&t.texStorage2D(n.TEXTURE_2D,ee,Ue,le.width,le.height),x&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,le.width,le.height,Me,He,le.data)):t.texImage2D(n.TEXTURE_2D,0,Ue,le.width,le.height,0,Me,He,le.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Re&&Qe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ee,Ue,Ve[0].width,Ve[0].height,le.depth);for(let j=0,ne=Ve.length;j<ne;j++)if(ve=Ve[j],v.format!==Pn)if(Me!==null)if(Re){if(x)if(v.layerUpdates.size>0){for(const de of v.layerUpdates){const Ce=ve.width*ve.height;t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,de,ve.width,ve.height,1,Me,ve.data.slice(Ce*de,Ce*(de+1)),0,0)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,ve.width,ve.height,le.depth,Me,ve.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,j,Ue,ve.width,ve.height,le.depth,0,ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Re?x&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,ve.width,ve.height,le.depth,Me,He,ve.data):t.texImage3D(n.TEXTURE_2D_ARRAY,j,Ue,ve.width,ve.height,le.depth,0,Me,He,ve.data)}else{Re&&Qe&&t.texStorage2D(n.TEXTURE_2D,ee,Ue,Ve[0].width,Ve[0].height);for(let j=0,ne=Ve.length;j<ne;j++)ve=Ve[j],v.format!==Pn?Me!==null?Re?x&&t.compressedTexSubImage2D(n.TEXTURE_2D,j,0,0,ve.width,ve.height,Me,ve.data):t.compressedTexImage2D(n.TEXTURE_2D,j,Ue,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Re?x&&t.texSubImage2D(n.TEXTURE_2D,j,0,0,ve.width,ve.height,Me,He,ve.data):t.texImage2D(n.TEXTURE_2D,j,Ue,ve.width,ve.height,0,Me,He,ve.data)}else if(v.isDataArrayTexture)if(Re){if(Qe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ee,Ue,le.width,le.height,le.depth),x)if(v.layerUpdates.size>0){let j;switch(He){case n.UNSIGNED_BYTE:switch(Me){case n.ALPHA:j=1;break;case n.LUMINANCE:j=1;break;case n.LUMINANCE_ALPHA:j=2;break;case n.RGB:j=3;break;case n.RGBA:j=4;break;default:throw new Error(`Unknown texel size for format ${Me}.`)}break;case n.UNSIGNED_SHORT_4_4_4_4:case n.UNSIGNED_SHORT_5_5_5_1:case n.UNSIGNED_SHORT_5_6_5:j=1;break;default:throw new Error(`Unknown texel size for type ${He}.`)}const ne=le.width*le.height*j;for(const de of v.layerUpdates)t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,de,le.width,le.height,1,Me,He,le.data.slice(ne*de,ne*(de+1)));v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,Me,He,le.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ue,le.width,le.height,le.depth,0,Me,He,le.data);else if(v.isData3DTexture)Re?(Qe&&t.texStorage3D(n.TEXTURE_3D,ee,Ue,le.width,le.height,le.depth),x&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,Me,He,le.data)):t.texImage3D(n.TEXTURE_3D,0,Ue,le.width,le.height,le.depth,0,Me,He,le.data);else if(v.isFramebufferTexture){if(Qe)if(Re)t.texStorage2D(n.TEXTURE_2D,ee,Ue,le.width,le.height);else{let j=le.width,ne=le.height;for(let de=0;de<ee;de++)t.texImage2D(n.TEXTURE_2D,de,Ue,j,ne,0,Me,He,null),j>>=1,ne>>=1}}else if(Ve.length>0){if(Re&&Qe){const j=fe(Ve[0]);t.texStorage2D(n.TEXTURE_2D,ee,Ue,j.width,j.height)}for(let j=0,ne=Ve.length;j<ne;j++)ve=Ve[j],Re?x&&t.texSubImage2D(n.TEXTURE_2D,j,0,0,Me,He,ve):t.texImage2D(n.TEXTURE_2D,j,Ue,Me,He,ve);v.generateMipmaps=!1}else if(Re){if(Qe){const j=fe(le);t.texStorage2D(n.TEXTURE_2D,ee,Ue,j.width,j.height)}x&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Me,He,le)}else t.texImage2D(n.TEXTURE_2D,0,Ue,Me,He,le);p(v)&&m(V),ue.__version=$.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function se(T,v,D){if(v.image.length!==6)return;const V=Ie(T,v),K=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+D);const $=i.get(K);if(K.version!==$.__version||V===!0){t.activeTexture(n.TEXTURE0+D);const ue=it.getPrimaries(it.workingColorSpace),re=v.colorSpace===Oi?null:it.getPrimaries(v.colorSpace),ae=v.colorSpace===Oi||ue===re?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae);const Ee=v.isCompressedTexture||v.image[0].isCompressedTexture,le=v.image[0]&&v.image[0].isDataTexture,Me=[];for(let ne=0;ne<6;ne++)!Ee&&!le?Me[ne]=_(v.image[ne],!0,s.maxCubemapSize):Me[ne]=le?v.image[ne].image:v.image[ne],Me[ne]=ie(v,Me[ne]);const He=Me[0],Ue=r.convert(v.format,v.colorSpace),ve=r.convert(v.type),Ve=S(v.internalFormat,Ue,ve,v.colorSpace),Re=v.isVideoTexture!==!0,Qe=$.__version===void 0||V===!0,x=K.dataReady;let ee=E(v,He);ye(n.TEXTURE_CUBE_MAP,v);let j;if(Ee){Re&&Qe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ee,Ve,He.width,He.height);for(let ne=0;ne<6;ne++){j=Me[ne].mipmaps;for(let de=0;de<j.length;de++){const Ce=j[de];v.format!==Pn?Ue!==null?Re?x&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,de,0,0,Ce.width,Ce.height,Ue,Ce.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,de,Ve,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Re?x&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,de,0,0,Ce.width,Ce.height,Ue,ve,Ce.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,de,Ve,Ce.width,Ce.height,0,Ue,ve,Ce.data)}}}else{if(j=v.mipmaps,Re&&Qe){j.length>0&&ee++;const ne=fe(Me[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ee,Ve,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(le){Re?x&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Me[ne].width,Me[ne].height,Ue,ve,Me[ne].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Ve,Me[ne].width,Me[ne].height,0,Ue,ve,Me[ne].data);for(let de=0;de<j.length;de++){const Ge=j[de].image[ne].image;Re?x&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,de+1,0,0,Ge.width,Ge.height,Ue,ve,Ge.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,de+1,Ve,Ge.width,Ge.height,0,Ue,ve,Ge.data)}}else{Re?x&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Ue,ve,Me[ne]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Ve,Ue,ve,Me[ne]);for(let de=0;de<j.length;de++){const Ce=j[de];Re?x&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,de+1,0,0,Ue,ve,Ce.image[ne]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,de+1,Ve,Ue,ve,Ce.image[ne])}}}p(v)&&m(n.TEXTURE_CUBE_MAP),$.__version=K.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function he(T,v,D,V,K,$){const ue=r.convert(D.format,D.colorSpace),re=r.convert(D.type),ae=S(D.internalFormat,ue,re,D.colorSpace);if(!i.get(v).__hasExternalTextures){const le=Math.max(1,v.width>>$),Me=Math.max(1,v.height>>$);K===n.TEXTURE_3D||K===n.TEXTURE_2D_ARRAY?t.texImage3D(K,$,ae,le,Me,v.depth,0,ue,re,null):t.texImage2D(K,$,ae,le,Me,0,ue,re,null)}t.bindFramebuffer(n.FRAMEBUFFER,T),Q(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,V,K,i.get(D).__webglTexture,0,H(v)):(K===n.TEXTURE_2D||K>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,V,K,i.get(D).__webglTexture,$),t.bindFramebuffer(n.FRAMEBUFFER,null)}function oe(T,v,D){if(n.bindRenderbuffer(n.RENDERBUFFER,T),v.depthBuffer){const V=v.depthTexture,K=V&&V.isDepthTexture?V.type:null,$=y(v.stencilBuffer,K),ue=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,re=H(v);Q(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,re,$,v.width,v.height):D?n.renderbufferStorageMultisample(n.RENDERBUFFER,re,$,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,$,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ue,n.RENDERBUFFER,T)}else{const V=v.textures;for(let K=0;K<V.length;K++){const $=V[K],ue=r.convert($.format,$.colorSpace),re=r.convert($.type),ae=S($.internalFormat,ue,re,$.colorSpace),Ee=H(v);D&&Q(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ee,ae,v.width,v.height):Q(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ee,ae,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,ae,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ce(T,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,T),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),F(v.depthTexture,0);const V=i.get(v.depthTexture).__webglTexture,K=H(v);if(v.depthTexture.format===rr)Q(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,V,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,V,0);else if(v.depthTexture.format===mr)Q(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,V,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,V,0);else throw new Error("Unknown depthTexture format")}function De(T){const v=i.get(T),D=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!v.__autoAllocateDepthBuffer){if(D)throw new Error("target.depthTexture not supported in Cube render targets");ce(v.__webglFramebuffer,T)}else if(D){v.__webglDepthbuffer=[];for(let V=0;V<6;V++)t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[V]),v.__webglDepthbuffer[V]=n.createRenderbuffer(),oe(v.__webglDepthbuffer[V],T,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=n.createRenderbuffer(),oe(v.__webglDepthbuffer,T,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function pe(T,v,D){const V=i.get(T);v!==void 0&&he(V.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),D!==void 0&&De(T)}function Ne(T){const v=T.texture,D=i.get(T),V=i.get(v);T.addEventListener("dispose",R);const K=T.textures,$=T.isWebGLCubeRenderTarget===!0,ue=K.length>1;if(ue||(V.__webglTexture===void 0&&(V.__webglTexture=n.createTexture()),V.__version=v.version,o.memory.textures++),$){D.__webglFramebuffer=[];for(let re=0;re<6;re++)if(v.mipmaps&&v.mipmaps.length>0){D.__webglFramebuffer[re]=[];for(let ae=0;ae<v.mipmaps.length;ae++)D.__webglFramebuffer[re][ae]=n.createFramebuffer()}else D.__webglFramebuffer[re]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){D.__webglFramebuffer=[];for(let re=0;re<v.mipmaps.length;re++)D.__webglFramebuffer[re]=n.createFramebuffer()}else D.__webglFramebuffer=n.createFramebuffer();if(ue)for(let re=0,ae=K.length;re<ae;re++){const Ee=i.get(K[re]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=n.createTexture(),o.memory.textures++)}if(T.samples>0&&Q(T)===!1){D.__webglMultisampledFramebuffer=n.createFramebuffer(),D.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let re=0;re<K.length;re++){const ae=K[re];D.__webglColorRenderbuffer[re]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,D.__webglColorRenderbuffer[re]);const Ee=r.convert(ae.format,ae.colorSpace),le=r.convert(ae.type),Me=S(ae.internalFormat,Ee,le,ae.colorSpace,T.isXRRenderTarget===!0),He=H(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,He,Me,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+re,n.RENDERBUFFER,D.__webglColorRenderbuffer[re])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(D.__webglDepthRenderbuffer=n.createRenderbuffer(),oe(D.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if($){t.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture),ye(n.TEXTURE_CUBE_MAP,v);for(let re=0;re<6;re++)if(v.mipmaps&&v.mipmaps.length>0)for(let ae=0;ae<v.mipmaps.length;ae++)he(D.__webglFramebuffer[re][ae],T,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+re,ae);else he(D.__webglFramebuffer[re],T,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);p(v)&&m(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ue){for(let re=0,ae=K.length;re<ae;re++){const Ee=K[re],le=i.get(Ee);t.bindTexture(n.TEXTURE_2D,le.__webglTexture),ye(n.TEXTURE_2D,Ee),he(D.__webglFramebuffer,T,Ee,n.COLOR_ATTACHMENT0+re,n.TEXTURE_2D,0),p(Ee)&&m(n.TEXTURE_2D)}t.unbindTexture()}else{let re=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(re=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(re,V.__webglTexture),ye(re,v),v.mipmaps&&v.mipmaps.length>0)for(let ae=0;ae<v.mipmaps.length;ae++)he(D.__webglFramebuffer[ae],T,v,n.COLOR_ATTACHMENT0,re,ae);else he(D.__webglFramebuffer,T,v,n.COLOR_ATTACHMENT0,re,0);p(v)&&m(re),t.unbindTexture()}T.depthBuffer&&De(T)}function B(T){const v=T.textures;for(let D=0,V=v.length;D<V;D++){const K=v[D];if(p(K)){const $=T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ue=i.get(K).__webglTexture;t.bindTexture($,ue),m($),t.unbindTexture()}}}const Xe=[],L=[];function O(T){if(T.samples>0){if(Q(T)===!1){const v=T.textures,D=T.width,V=T.height;let K=n.COLOR_BUFFER_BIT;const $=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ue=i.get(T),re=v.length>1;if(re)for(let ae=0;ae<v.length;ae++)t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let ae=0;ae<v.length;ae++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(K|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(K|=n.STENCIL_BUFFER_BIT)),re){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ue.__webglColorRenderbuffer[ae]);const Ee=i.get(v[ae]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ee,0)}n.blitFramebuffer(0,0,D,V,0,0,D,V,K,n.NEAREST),l===!0&&(Xe.length=0,L.length=0,Xe.push(n.COLOR_ATTACHMENT0+ae),T.depthBuffer&&T.resolveDepthBuffer===!1&&(Xe.push($),L.push($),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,L)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Xe))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),re)for(let ae=0;ae<v.length;ae++){t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.RENDERBUFFER,ue.__webglColorRenderbuffer[ae]);const Ee=i.get(v[ae]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.TEXTURE_2D,Ee,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const v=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function H(T){return Math.min(s.maxSamples,T.samples)}function Q(T){const v=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function J(T){const v=o.render.frame;u.get(T)!==v&&(u.set(T,v),T.update())}function ie(T,v){const D=T.colorSpace,V=T.format,K=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||D!==Ht&&D!==Oi&&(it.getTransfer(D)===ft?(V!==Pn||K!==qi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",D)),v}function fe(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=I,this.setTexture2D=F,this.setTexture2DArray=X,this.setTexture3D=G,this.setTextureCube=te,this.rebindTextures=pe,this.setupRenderTarget=Ne,this.updateRenderTargetMipmap=B,this.updateMultisampleRenderTarget=O,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=he,this.useMultisampledRTT=Q}function XA(n,e){function t(i,s=Oi){let r;const o=it.getTransfer(s);if(i===qi)return n.UNSIGNED_BYTE;if(i===mg)return n.UNSIGNED_SHORT_4_4_4_4;if(i===gg)return n.UNSIGNED_SHORT_5_5_5_1;if(i===hM)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===dM)return n.BYTE;if(i===fM)return n.SHORT;if(i===Ga)return n.UNSIGNED_SHORT;if(i===pg)return n.INT;if(i===hr)return n.UNSIGNED_INT;if(i===kn)return n.FLOAT;if(i===hl)return n.HALF_FLOAT;if(i===pM)return n.ALPHA;if(i===mM)return n.RGB;if(i===Pn)return n.RGBA;if(i===gM)return n.LUMINANCE;if(i===_M)return n.LUMINANCE_ALPHA;if(i===rr)return n.DEPTH_COMPONENT;if(i===mr)return n.DEPTH_STENCIL;if(i===_g)return n.RED;if(i===vg)return n.RED_INTEGER;if(i===vM)return n.RG;if(i===xg)return n.RG_INTEGER;if(i===yg)return n.RGBA_INTEGER;if(i===Hl||i===Vl||i===Gl||i===Wl)if(o===ft)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Hl)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Vl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Gl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Wl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Hl)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Vl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Gl)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Wl)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===yf||i===Sf||i===Mf||i===bf)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===yf)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Sf)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Mf)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===bf)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ef||i===Tf||i===wf)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Ef||i===Tf)return o===ft?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===wf)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Af||i===Rf||i===Cf||i===Pf||i===Lf||i===If||i===Df||i===Nf||i===Uf||i===Of||i===Ff||i===Bf||i===kf||i===zf)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Af)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Rf)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Cf)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Pf)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Lf)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===If)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Df)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Nf)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Uf)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Of)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ff)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Bf)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===kf)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===zf)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ql||i===Hf||i===Vf)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===ql)return o===ft?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Hf)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Vf)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===xM||i===Gf||i===Wf||i===qf)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===ql)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Gf)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Wf)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===qf)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===pr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class jA extends Qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Bi extends mt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const $A={type:"move"};class _c{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,i),m=this._getHandJoint(c,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),h=.02,g=.005;c.inputState.pinching&&d>h+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=h-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent($A)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Bi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const KA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,YA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class ZA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new Ot,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Xi({vertexShader:KA,fragmentShader:YA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new hn(new ml(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}}class JA extends hi{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,d=null,h=null,g=null;const _=new ZA,p=t.getContextAttributes();let m=null,S=null;const y=[],E=[],P=new Fe;let R=null;const A=new Qt;A.layers.enable(1),A.viewport=new dt;const C=new Qt;C.layers.enable(2),C.viewport=new dt;const b=[A,C],M=new jA;M.layers.enable(1),M.layers.enable(2);let I=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let he=y[se];return he===void 0&&(he=new _c,y[se]=he),he.getTargetRaySpace()},this.getControllerGrip=function(se){let he=y[se];return he===void 0&&(he=new _c,y[se]=he),he.getGripSpace()},this.getHand=function(se){let he=y[se];return he===void 0&&(he=new _c,y[se]=he),he.getHandSpace()};function U(se){const he=E.indexOf(se.inputSource);if(he===-1)return;const oe=y[he];oe!==void 0&&(oe.update(se.inputSource,se.frame,c||o),oe.dispatchEvent({type:se.type,data:se.inputSource}))}function F(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",F),s.removeEventListener("inputsourceschange",X);for(let se=0;se<y.length;se++){const he=E[se];he!==null&&(E[se]=null,y[se].disconnect(he))}I=null,N=null,_.reset(),e.setRenderTarget(m),h=null,d=null,f=null,s=null,S=null,Ze.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){r=se,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){a=se,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(se){c=se},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(se){if(s=se,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",F),s.addEventListener("inputsourceschange",X),p.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(P),s.renderState.layers===void 0){const he={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(s,t,he),s.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),S=new ws(h.framebufferWidth,h.framebufferHeight,{format:Pn,type:qi,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let he=null,oe=null,ce=null;p.depth&&(ce=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=p.stencil?mr:rr,oe=p.stencil?pr:hr);const De={colorFormat:t.RGBA8,depthFormat:ce,scaleFactor:r};f=new XRWebGLBinding(s,t),d=f.createProjectionLayer(De),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new ws(d.textureWidth,d.textureHeight,{format:Pn,type:qi,depthTexture:new Ug(d.textureWidth,d.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Ze.setContext(s),Ze.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function X(se){for(let he=0;he<se.removed.length;he++){const oe=se.removed[he],ce=E.indexOf(oe);ce>=0&&(E[ce]=null,y[ce].disconnect(oe))}for(let he=0;he<se.added.length;he++){const oe=se.added[he];let ce=E.indexOf(oe);if(ce===-1){for(let pe=0;pe<y.length;pe++)if(pe>=E.length){E.push(oe),ce=pe;break}else if(E[pe]===null){E[pe]=oe,ce=pe;break}if(ce===-1)break}const De=y[ce];De&&De.connect(oe)}}const G=new k,te=new k;function q(se,he,oe){G.setFromMatrixPosition(he.matrixWorld),te.setFromMatrixPosition(oe.matrixWorld);const ce=G.distanceTo(te),De=he.projectionMatrix.elements,pe=oe.projectionMatrix.elements,Ne=De[14]/(De[10]-1),B=De[14]/(De[10]+1),Xe=(De[9]+1)/De[5],L=(De[9]-1)/De[5],O=(De[8]-1)/De[0],H=(pe[8]+1)/pe[0],Q=Ne*O,J=Ne*H,ie=ce/(-O+H),fe=ie*-O;he.matrixWorld.decompose(se.position,se.quaternion,se.scale),se.translateX(fe),se.translateZ(ie),se.matrixWorld.compose(se.position,se.quaternion,se.scale),se.matrixWorldInverse.copy(se.matrixWorld).invert();const T=Ne+ie,v=B+ie,D=Q-fe,V=J+(ce-fe),K=Xe*B/v*T,$=L*B/v*T;se.projectionMatrix.makePerspective(D,V,K,$,T,v),se.projectionMatrixInverse.copy(se.projectionMatrix).invert()}function me(se,he){he===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(he.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(s===null)return;_.texture!==null&&(se.near=_.depthNear,se.far=_.depthFar),M.near=C.near=A.near=se.near,M.far=C.far=A.far=se.far,(I!==M.near||N!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),I=M.near,N=M.far,A.near=I,A.far=N,C.near=I,C.far=N,A.updateProjectionMatrix(),C.updateProjectionMatrix(),se.updateProjectionMatrix());const he=se.parent,oe=M.cameras;me(M,he);for(let ce=0;ce<oe.length;ce++)me(oe[ce],he);oe.length===2?q(M,A,C):M.projectionMatrix.copy(A.projectionMatrix),Se(se,M,he)};function Se(se,he,oe){oe===null?se.matrix.copy(he.matrixWorld):(se.matrix.copy(oe.matrixWorld),se.matrix.invert(),se.matrix.multiply(he.matrixWorld)),se.matrix.decompose(se.position,se.quaternion,se.scale),se.updateMatrixWorld(!0),se.projectionMatrix.copy(he.projectionMatrix),se.projectionMatrixInverse.copy(he.projectionMatrixInverse),se.isPerspectiveCamera&&(se.fov=gr*2*Math.atan(1/se.projectionMatrix.elements[5]),se.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&h===null))return l},this.setFoveation=function(se){l=se,d!==null&&(d.fixedFoveation=se),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=se)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let ye=null;function Ie(se,he){if(u=he.getViewerPose(c||o),g=he,u!==null){const oe=u.views;h!==null&&(e.setRenderTargetFramebuffer(S,h.framebuffer),e.setRenderTarget(S));let ce=!1;oe.length!==M.cameras.length&&(M.cameras.length=0,ce=!0);for(let pe=0;pe<oe.length;pe++){const Ne=oe[pe];let B=null;if(h!==null)B=h.getViewport(Ne);else{const L=f.getViewSubImage(d,Ne);B=L.viewport,pe===0&&(e.setRenderTargetTextures(S,L.colorTexture,d.ignoreDepthValues?void 0:L.depthStencilTexture),e.setRenderTarget(S))}let Xe=b[pe];Xe===void 0&&(Xe=new Qt,Xe.layers.enable(pe),Xe.viewport=new dt,b[pe]=Xe),Xe.matrix.fromArray(Ne.transform.matrix),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe.projectionMatrix.fromArray(Ne.projectionMatrix),Xe.projectionMatrixInverse.copy(Xe.projectionMatrix).invert(),Xe.viewport.set(B.x,B.y,B.width,B.height),pe===0&&(M.matrix.copy(Xe.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ce===!0&&M.cameras.push(Xe)}const De=s.enabledFeatures;if(De&&De.includes("depth-sensing")){const pe=f.getDepthInformation(oe[0]);pe&&pe.isValid&&pe.texture&&_.init(e,pe,s.renderState)}}for(let oe=0;oe<y.length;oe++){const ce=E[oe],De=y[oe];ce!==null&&De!==void 0&&De.update(ce,he,c||o)}ye&&ye(se,he),he.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:he}),g=null}const Ze=new Ng;Ze.setAnimationLoop(Ie),this.setAnimationLoop=function(se){ye=se},this.dispose=function(){}}}const us=new Wn,QA=new je;function eR(n,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,Lg(n)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,S,y,E){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),f(p,m)):m.isMeshPhongMaterial?(r(p,m),u(p,m)):m.isMeshStandardMaterial?(r(p,m),d(p,m),m.isMeshPhysicalMaterial&&h(p,m,E)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),_(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,S,y):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===sn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===sn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const S=e.get(m),y=S.envMap,E=S.envMapRotation;y&&(p.envMap.value=y,us.copy(E),us.x*=-1,us.y*=-1,us.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(us.y*=-1,us.z*=-1),p.envMapRotation.value.setFromMatrix4(QA.makeRotationFromEuler(us)),p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,S,y){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*S,p.scale.value=y*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function f(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function h(p,m,S){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===sn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){const S=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function tR(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,y){const E=y.program;i.uniformBlockBinding(S,E)}function c(S,y){let E=s[S.id];E===void 0&&(g(S),E=u(S),s[S.id]=E,S.addEventListener("dispose",p));const P=y.program;i.updateUBOMapping(S,P);const R=e.render.frame;r[S.id]!==R&&(d(S),r[S.id]=R)}function u(S){const y=f();S.__bindingPointIndex=y;const E=n.createBuffer(),P=S.__size,R=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,P,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,E),E}function f(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const y=s[S.id],E=S.uniforms,P=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let R=0,A=E.length;R<A;R++){const C=Array.isArray(E[R])?E[R]:[E[R]];for(let b=0,M=C.length;b<M;b++){const I=C[b];if(h(I,R,b,P)===!0){const N=I.__offset,U=Array.isArray(I.value)?I.value:[I.value];let F=0;for(let X=0;X<U.length;X++){const G=U[X],te=_(G);typeof G=="number"||typeof G=="boolean"?(I.__data[0]=G,n.bufferSubData(n.UNIFORM_BUFFER,N+F,I.__data)):G.isMatrix3?(I.__data[0]=G.elements[0],I.__data[1]=G.elements[1],I.__data[2]=G.elements[2],I.__data[3]=0,I.__data[4]=G.elements[3],I.__data[5]=G.elements[4],I.__data[6]=G.elements[5],I.__data[7]=0,I.__data[8]=G.elements[6],I.__data[9]=G.elements[7],I.__data[10]=G.elements[8],I.__data[11]=0):(G.toArray(I.__data,F),F+=te.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,N,I.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(S,y,E,P){const R=S.value,A=y+"_"+E;if(P[A]===void 0)return typeof R=="number"||typeof R=="boolean"?P[A]=R:P[A]=R.clone(),!0;{const C=P[A];if(typeof R=="number"||typeof R=="boolean"){if(C!==R)return P[A]=R,!0}else if(C.equals(R)===!1)return C.copy(R),!0}return!1}function g(S){const y=S.uniforms;let E=0;const P=16;for(let A=0,C=y.length;A<C;A++){const b=Array.isArray(y[A])?y[A]:[y[A]];for(let M=0,I=b.length;M<I;M++){const N=b[M],U=Array.isArray(N.value)?N.value:[N.value];for(let F=0,X=U.length;F<X;F++){const G=U[F],te=_(G),q=E%P;q!==0&&P-q<te.boundary&&(E+=P-q),N.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=E,E+=te.storage}}}const R=E%P;return R>0&&(E+=P-R),S.__size=E,S.__cache={},this}function _(S){const y={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=48,y.storage=48):S.isMatrix4?(y.boundary=64,y.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),y}function p(S){const y=S.target;y.removeEventListener("dispose",p);const E=o.indexOf(y.__bindingPointIndex);o.splice(E,1),n.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function m(){for(const S in s)n.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:l,update:c,dispose:m}}class nR{constructor(e={}){const{canvas:t=$M(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const h=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const m=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Jt,this.toneMapping=Gi,this.toneMappingExposure=1;const y=this;let E=!1,P=0,R=0,A=null,C=-1,b=null;const M=new dt,I=new dt;let N=null;const U=new We(0);let F=0,X=t.width,G=t.height,te=1,q=null,me=null;const Se=new dt(0,0,X,G),ye=new dt(0,0,X,G);let Ie=!1;const Ze=new Fu;let se=!1,he=!1;const oe=new je,ce=new k,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let pe=!1;function Ne(){return A===null?te:1}let B=i;function Xe(w,z){return t.getContext(w,z)}try{const w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Iu}`),t.addEventListener("webglcontextlost",ee,!1),t.addEventListener("webglcontextrestored",j,!1),t.addEventListener("webglcontextcreationerror",ne,!1),B===null){const z="webgl2";if(B=Xe(z,w),B===null)throw Xe(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let L,O,H,Q,J,ie,fe,T,v,D,V,K,$,ue,re,ae,Ee,le,Me,He,Ue,ve,Ve,Re;function Qe(){L=new uw(B),L.init(),ve=new XA(B,L),O=new sw(B,L,e,ve),H=new WA(B),Q=new hw(B),J=new PA,ie=new qA(B,L,H,J,O,ve,Q),fe=new ow(y),T=new cw(y),v=new yb(B),Ve=new nw(B,v),D=new dw(B,v,Q,Ve),V=new mw(B,D,v,Q),Me=new pw(B,O,ie),ae=new rw(J),K=new CA(y,fe,T,L,O,Ve,ae),$=new eR(y,J),ue=new IA,re=new BA(L),le=new tw(y,fe,T,H,V,d,l),Ee=new GA(y,V,O),Re=new tR(B,Q,O,H),He=new iw(B,L,Q),Ue=new fw(B,L,Q),Q.programs=K.programs,y.capabilities=O,y.extensions=L,y.properties=J,y.renderLists=ue,y.shadowMap=Ee,y.state=H,y.info=Q}Qe();const x=new JA(y,B);this.xr=x,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const w=L.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=L.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(w){w!==void 0&&(te=w,this.setSize(X,G,!1))},this.getSize=function(w){return w.set(X,G)},this.setSize=function(w,z,Y=!0){if(x.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=w,G=z,t.width=Math.floor(w*te),t.height=Math.floor(z*te),Y===!0&&(t.style.width=w+"px",t.style.height=z+"px"),this.setViewport(0,0,w,z)},this.getDrawingBufferSize=function(w){return w.set(X*te,G*te).floor()},this.setDrawingBufferSize=function(w,z,Y){X=w,G=z,te=Y,t.width=Math.floor(w*Y),t.height=Math.floor(z*Y),this.setViewport(0,0,w,z)},this.getCurrentViewport=function(w){return w.copy(M)},this.getViewport=function(w){return w.copy(Se)},this.setViewport=function(w,z,Y,Z){w.isVector4?Se.set(w.x,w.y,w.z,w.w):Se.set(w,z,Y,Z),H.viewport(M.copy(Se).multiplyScalar(te).round())},this.getScissor=function(w){return w.copy(ye)},this.setScissor=function(w,z,Y,Z){w.isVector4?ye.set(w.x,w.y,w.z,w.w):ye.set(w,z,Y,Z),H.scissor(I.copy(ye).multiplyScalar(te).round())},this.getScissorTest=function(){return Ie},this.setScissorTest=function(w){H.setScissorTest(Ie=w)},this.setOpaqueSort=function(w){q=w},this.setTransparentSort=function(w){me=w},this.getClearColor=function(w){return w.copy(le.getClearColor())},this.setClearColor=function(){le.setClearColor.apply(le,arguments)},this.getClearAlpha=function(){return le.getClearAlpha()},this.setClearAlpha=function(){le.setClearAlpha.apply(le,arguments)},this.clear=function(w=!0,z=!0,Y=!0){let Z=0;if(w){let W=!1;if(A!==null){const ge=A.texture.format;W=ge===yg||ge===xg||ge===vg}if(W){const ge=A.texture.type,be=ge===qi||ge===hr||ge===Ga||ge===pr||ge===mg||ge===gg,Te=le.getClearColor(),Ae=le.getClearAlpha(),Be=Te.r,ze=Te.g,Oe=Te.b;be?(h[0]=Be,h[1]=ze,h[2]=Oe,h[3]=Ae,B.clearBufferuiv(B.COLOR,0,h)):(g[0]=Be,g[1]=ze,g[2]=Oe,g[3]=Ae,B.clearBufferiv(B.COLOR,0,g))}else Z|=B.COLOR_BUFFER_BIT}z&&(Z|=B.DEPTH_BUFFER_BIT),Y&&(Z|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ee,!1),t.removeEventListener("webglcontextrestored",j,!1),t.removeEventListener("webglcontextcreationerror",ne,!1),ue.dispose(),re.dispose(),J.dispose(),fe.dispose(),T.dispose(),V.dispose(),Ve.dispose(),Re.dispose(),K.dispose(),x.dispose(),x.removeEventListener("sessionstart",bt),x.removeEventListener("sessionend",Et),on.stop()};function ee(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function j(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const w=Q.autoReset,z=Ee.enabled,Y=Ee.autoUpdate,Z=Ee.needsUpdate,W=Ee.type;Qe(),Q.autoReset=w,Ee.enabled=z,Ee.autoUpdate=Y,Ee.needsUpdate=Z,Ee.type=W}function ne(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function de(w){const z=w.target;z.removeEventListener("dispose",de),Ce(z)}function Ce(w){Ge(w),J.remove(w)}function Ge(w){const z=J.get(w).programs;z!==void 0&&(z.forEach(function(Y){K.releaseProgram(Y)}),w.isShaderMaterial&&K.releaseShaderCache(w))}this.renderBufferDirect=function(w,z,Y,Z,W,ge){z===null&&(z=De);const be=W.isMesh&&W.matrixWorld.determinant()<0,Te=Qg(w,z,Y,Z,W);H.setMaterial(Z,be);let Ae=Y.index,Be=1;if(Z.wireframe===!0){if(Ae=D.getWireframeAttribute(Y),Ae===void 0)return;Be=2}const ze=Y.drawRange,Oe=Y.attributes.position;let st=ze.start*Be,_t=(ze.start+ze.count)*Be;ge!==null&&(st=Math.max(st,ge.start*Be),_t=Math.min(_t,(ge.start+ge.count)*Be)),Ae!==null?(st=Math.max(st,0),_t=Math.min(_t,Ae.count)):Oe!=null&&(st=Math.max(st,0),_t=Math.min(_t,Oe.count));const vt=_t-st;if(vt<0||vt===1/0)return;Ve.setup(W,Z,Te,Y,Ae);let ln,rt=He;if(Ae!==null&&(ln=v.get(Ae),rt=Ue,rt.setIndex(ln)),W.isMesh)Z.wireframe===!0?(H.setLineWidth(Z.wireframeLinewidth*Ne()),rt.setMode(B.LINES)):rt.setMode(B.TRIANGLES);else if(W.isLine){let Pe=Z.linewidth;Pe===void 0&&(Pe=1),H.setLineWidth(Pe*Ne()),W.isLineSegments?rt.setMode(B.LINES):W.isLineLoop?rt.setMode(B.LINE_LOOP):rt.setMode(B.LINE_STRIP)}else W.isPoints?rt.setMode(B.POINTS):W.isSprite&&rt.setMode(B.TRIANGLES);if(W.isBatchedMesh)W._multiDrawInstances!==null?rt.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances):rt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else if(W.isInstancedMesh)rt.renderInstances(st,vt,W.count);else if(Y.isInstancedBufferGeometry){const Pe=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,$t=Math.min(Y.instanceCount,Pe);rt.renderInstances(st,vt,$t)}else rt.render(st,vt)};function gt(w,z,Y){w.transparent===!0&&w.side===Fn&&w.forceSinglePass===!1?(w.side=sn,w.needsUpdate=!0,Io(w,z,Y),w.side=di,w.needsUpdate=!0,Io(w,z,Y),w.side=Fn):Io(w,z,Y)}this.compile=function(w,z,Y=null){Y===null&&(Y=w),p=re.get(Y),p.init(z),S.push(p),Y.traverseVisible(function(W){W.isLight&&W.layers.test(z.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),w!==Y&&w.traverseVisible(function(W){W.isLight&&W.layers.test(z.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),p.setupLights();const Z=new Set;return w.traverse(function(W){const ge=W.material;if(ge)if(Array.isArray(ge))for(let be=0;be<ge.length;be++){const Te=ge[be];gt(Te,Y,W),Z.add(Te)}else gt(ge,Y,W),Z.add(ge)}),S.pop(),p=null,Z},this.compileAsync=function(w,z,Y=null){const Z=this.compile(w,z,Y);return new Promise(W=>{function ge(){if(Z.forEach(function(be){J.get(be).currentProgram.isReady()&&Z.delete(be)}),Z.size===0){W(w);return}setTimeout(ge,10)}L.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let Mt=null;function nt(w){Mt&&Mt(w)}function bt(){on.stop()}function Et(){on.start()}const on=new Ng;on.setAnimationLoop(nt),typeof self<"u"&&on.setContext(self),this.setAnimationLoop=function(w){Mt=w,x.setAnimationLoop(w),w===null?on.stop():on.start()},x.addEventListener("sessionstart",bt),x.addEventListener("sessionend",Et),this.render=function(w,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),x.enabled===!0&&x.isPresenting===!0&&(x.cameraAutoUpdate===!0&&x.updateCamera(z),z=x.getCamera()),w.isScene===!0&&w.onBeforeRender(y,w,z,A),p=re.get(w,S.length),p.init(z),S.push(p),oe.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Ze.setFromProjectionMatrix(oe),he=this.localClippingEnabled,se=ae.init(this.clippingPlanes,he),_=ue.get(w,m.length),_.init(),m.push(_),x.enabled===!0&&x.isPresenting===!0){const ge=y.xr.getDepthSensingMesh();ge!==null&&an(ge,z,-1/0,y.sortObjects)}an(w,z,0,y.sortObjects),_.finish(),y.sortObjects===!0&&_.sort(q,me),pe=x.enabled===!1||x.isPresenting===!1||x.hasDepthSensing()===!1,pe&&le.addToRenderList(_,w),this.info.render.frame++,se===!0&&ae.beginShadows();const Y=p.state.shadowsArray;Ee.render(Y,w,z),se===!0&&ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const Z=_.opaque,W=_.transmissive;if(p.setupLights(),z.isArrayCamera){const ge=z.cameras;if(W.length>0)for(let be=0,Te=ge.length;be<Te;be++){const Ae=ge[be];Zi(Z,W,w,Ae)}pe&&le.render(w);for(let be=0,Te=ge.length;be<Te;be++){const Ae=ge[be];mi(_,w,Ae,Ae.viewport)}}else W.length>0&&Zi(Z,W,w,z),pe&&le.render(w),mi(_,w,z);A!==null&&(ie.updateMultisampleRenderTarget(A),ie.updateRenderTargetMipmap(A)),w.isScene===!0&&w.onAfterRender(y,w,z),Ve.resetDefaultState(),C=-1,b=null,S.pop(),S.length>0?(p=S[S.length-1],se===!0&&ae.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function an(w,z,Y,Z){if(w.visible===!1)return;if(w.layers.test(z.layers)){if(w.isGroup)Y=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(z);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Ze.intersectsSprite(w)){Z&&ce.setFromMatrixPosition(w.matrixWorld).applyMatrix4(oe);const be=V.update(w),Te=w.material;Te.visible&&_.push(w,be,Te,Y,ce.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Ze.intersectsObject(w))){const be=V.update(w),Te=w.material;if(Z&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),ce.copy(w.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),ce.copy(be.boundingSphere.center)),ce.applyMatrix4(w.matrixWorld).applyMatrix4(oe)),Array.isArray(Te)){const Ae=be.groups;for(let Be=0,ze=Ae.length;Be<ze;Be++){const Oe=Ae[Be],st=Te[Oe.materialIndex];st&&st.visible&&_.push(w,be,st,Y,ce.z,Oe)}}else Te.visible&&_.push(w,be,Te,Y,ce.z,null)}}const ge=w.children;for(let be=0,Te=ge.length;be<Te;be++)an(ge[be],z,Y,Z)}function mi(w,z,Y,Z){const W=w.opaque,ge=w.transmissive,be=w.transparent;p.setupLightsView(Y),se===!0&&ae.setGlobalState(y.clippingPlanes,Y),Z&&H.viewport(M.copy(Z)),W.length>0&&Ji(W,z,Y),ge.length>0&&Ji(ge,z,Y),be.length>0&&Ji(be,z,Y),H.buffers.depth.setTest(!0),H.buffers.depth.setMask(!0),H.buffers.color.setMask(!0),H.setPolygonOffset(!1)}function Zi(w,z,Y,Z){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Z.id]===void 0&&(p.state.transmissionRenderTarget[Z.id]=new ws(1,1,{generateMipmaps:!0,type:L.has("EXT_color_buffer_half_float")||L.has("EXT_color_buffer_float")?hl:qi,minFilter:ri,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:it.workingColorSpace}));const ge=p.state.transmissionRenderTarget[Z.id],be=Z.viewport||M;ge.setSize(be.z,be.w);const Te=y.getRenderTarget();y.setRenderTarget(ge),y.getClearColor(U),F=y.getClearAlpha(),F<1&&y.setClearColor(16777215,.5),pe?le.render(Y):y.clear();const Ae=y.toneMapping;y.toneMapping=Gi;const Be=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),p.setupLightsView(Z),se===!0&&ae.setGlobalState(y.clippingPlanes,Z),Ji(w,Y,Z),ie.updateMultisampleRenderTarget(ge),ie.updateRenderTargetMipmap(ge),L.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let Oe=0,st=z.length;Oe<st;Oe++){const _t=z[Oe],vt=_t.object,ln=_t.geometry,rt=_t.material,Pe=_t.group;if(rt.side===Fn&&vt.layers.test(Z.layers)){const $t=rt.side;rt.side=sn,rt.needsUpdate=!0,ju(vt,Y,Z,ln,rt,Pe),rt.side=$t,rt.needsUpdate=!0,ze=!0}}ze===!0&&(ie.updateMultisampleRenderTarget(ge),ie.updateRenderTargetMipmap(ge))}y.setRenderTarget(Te),y.setClearColor(U,F),Be!==void 0&&(Z.viewport=Be),y.toneMapping=Ae}function Ji(w,z,Y){const Z=z.isScene===!0?z.overrideMaterial:null;for(let W=0,ge=w.length;W<ge;W++){const be=w[W],Te=be.object,Ae=be.geometry,Be=Z===null?be.material:Z,ze=be.group;Te.layers.test(Y.layers)&&ju(Te,z,Y,Ae,Be,ze)}}function ju(w,z,Y,Z,W,ge){w.onBeforeRender(y,z,Y,Z,W,ge),w.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),W.onBeforeRender(y,z,Y,Z,w,ge),W.transparent===!0&&W.side===Fn&&W.forceSinglePass===!1?(W.side=sn,W.needsUpdate=!0,y.renderBufferDirect(Y,z,Z,W,w,ge),W.side=di,W.needsUpdate=!0,y.renderBufferDirect(Y,z,Z,W,w,ge),W.side=Fn):y.renderBufferDirect(Y,z,Z,W,w,ge),w.onAfterRender(y,z,Y,Z,W,ge)}function Io(w,z,Y){z.isScene!==!0&&(z=De);const Z=J.get(w),W=p.state.lights,ge=p.state.shadowsArray,be=W.state.version,Te=K.getParameters(w,W.state,ge,z,Y),Ae=K.getProgramCacheKey(Te);let Be=Z.programs;Z.environment=w.isMeshStandardMaterial?z.environment:null,Z.fog=z.fog,Z.envMap=(w.isMeshStandardMaterial?T:fe).get(w.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&w.envMap===null?z.environmentRotation:w.envMapRotation,Be===void 0&&(w.addEventListener("dispose",de),Be=new Map,Z.programs=Be);let ze=Be.get(Ae);if(ze!==void 0){if(Z.currentProgram===ze&&Z.lightsStateVersion===be)return Ku(w,Te),ze}else Te.uniforms=K.getUniforms(w),w.onBuild(Y,Te,y),w.onBeforeCompile(Te,y),ze=K.acquireProgram(Te,Ae),Be.set(Ae,ze),Z.uniforms=Te.uniforms;const Oe=Z.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Oe.clippingPlanes=ae.uniform),Ku(w,Te),Z.needsLights=t_(w),Z.lightsStateVersion=be,Z.needsLights&&(Oe.ambientLightColor.value=W.state.ambient,Oe.lightProbe.value=W.state.probe,Oe.directionalLights.value=W.state.directional,Oe.directionalLightShadows.value=W.state.directionalShadow,Oe.spotLights.value=W.state.spot,Oe.spotLightShadows.value=W.state.spotShadow,Oe.rectAreaLights.value=W.state.rectArea,Oe.ltc_1.value=W.state.rectAreaLTC1,Oe.ltc_2.value=W.state.rectAreaLTC2,Oe.pointLights.value=W.state.point,Oe.pointLightShadows.value=W.state.pointShadow,Oe.hemisphereLights.value=W.state.hemi,Oe.directionalShadowMap.value=W.state.directionalShadowMap,Oe.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Oe.spotShadowMap.value=W.state.spotShadowMap,Oe.spotLightMatrix.value=W.state.spotLightMatrix,Oe.spotLightMap.value=W.state.spotLightMap,Oe.pointShadowMap.value=W.state.pointShadowMap,Oe.pointShadowMatrix.value=W.state.pointShadowMatrix),Z.currentProgram=ze,Z.uniformsList=null,ze}function $u(w){if(w.uniformsList===null){const z=w.currentProgram.getUniforms();w.uniformsList=Ta.seqWithValue(z.seq,w.uniforms)}return w.uniformsList}function Ku(w,z){const Y=J.get(w);Y.outputColorSpace=z.outputColorSpace,Y.batching=z.batching,Y.batchingColor=z.batchingColor,Y.instancing=z.instancing,Y.instancingColor=z.instancingColor,Y.instancingMorph=z.instancingMorph,Y.skinning=z.skinning,Y.morphTargets=z.morphTargets,Y.morphNormals=z.morphNormals,Y.morphColors=z.morphColors,Y.morphTargetsCount=z.morphTargetsCount,Y.numClippingPlanes=z.numClippingPlanes,Y.numIntersection=z.numClipIntersection,Y.vertexAlphas=z.vertexAlphas,Y.vertexTangents=z.vertexTangents,Y.toneMapping=z.toneMapping}function Qg(w,z,Y,Z,W){z.isScene!==!0&&(z=De),ie.resetTextureUnits();const ge=z.fog,be=Z.isMeshStandardMaterial?z.environment:null,Te=A===null?y.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Ht,Ae=(Z.isMeshStandardMaterial?T:fe).get(Z.envMap||be),Be=Z.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,ze=!!Y.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Oe=!!Y.morphAttributes.position,st=!!Y.morphAttributes.normal,_t=!!Y.morphAttributes.color;let vt=Gi;Z.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(vt=y.toneMapping);const ln=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,rt=ln!==void 0?ln.length:0,Pe=J.get(Z),$t=p.state.lights;if(se===!0&&(he===!0||w!==b)){const mn=w===b&&Z.id===C;ae.setState(Z,w,mn)}let lt=!1;Z.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==$t.state.version||Pe.outputColorSpace!==Te||W.isBatchedMesh&&Pe.batching===!1||!W.isBatchedMesh&&Pe.batching===!0||W.isBatchedMesh&&Pe.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Pe.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Pe.instancing===!1||!W.isInstancedMesh&&Pe.instancing===!0||W.isSkinnedMesh&&Pe.skinning===!1||!W.isSkinnedMesh&&Pe.skinning===!0||W.isInstancedMesh&&Pe.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Pe.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Pe.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Pe.instancingMorph===!1&&W.morphTexture!==null||Pe.envMap!==Ae||Z.fog===!0&&Pe.fog!==ge||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==ae.numPlanes||Pe.numIntersection!==ae.numIntersection)||Pe.vertexAlphas!==Be||Pe.vertexTangents!==ze||Pe.morphTargets!==Oe||Pe.morphNormals!==st||Pe.morphColors!==_t||Pe.toneMapping!==vt||Pe.morphTargetsCount!==rt)&&(lt=!0):(lt=!0,Pe.__version=Z.version);let Kn=Pe.currentProgram;lt===!0&&(Kn=Io(Z,z,W));let Do=!1,Qi=!1,vl=!1;const Lt=Kn.getUniforms(),gi=Pe.uniforms;if(H.useProgram(Kn.program)&&(Do=!0,Qi=!0,vl=!0),Z.id!==C&&(C=Z.id,Qi=!0),Do||b!==w){Lt.setValue(B,"projectionMatrix",w.projectionMatrix),Lt.setValue(B,"viewMatrix",w.matrixWorldInverse);const mn=Lt.map.cameraPosition;mn!==void 0&&mn.setValue(B,ce.setFromMatrixPosition(w.matrixWorld)),O.logarithmicDepthBuffer&&Lt.setValue(B,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&Lt.setValue(B,"isOrthographic",w.isOrthographicCamera===!0),b!==w&&(b=w,Qi=!0,vl=!0)}if(W.isSkinnedMesh){Lt.setOptional(B,W,"bindMatrix"),Lt.setOptional(B,W,"bindMatrixInverse");const mn=W.skeleton;mn&&(mn.boneTexture===null&&mn.computeBoneTexture(),Lt.setValue(B,"boneTexture",mn.boneTexture,ie))}W.isBatchedMesh&&(Lt.setOptional(B,W,"batchingTexture"),Lt.setValue(B,"batchingTexture",W._matricesTexture,ie),Lt.setOptional(B,W,"batchingColorTexture"),W._colorsTexture!==null&&Lt.setValue(B,"batchingColorTexture",W._colorsTexture,ie));const xl=Y.morphAttributes;if((xl.position!==void 0||xl.normal!==void 0||xl.color!==void 0)&&Me.update(W,Y,Kn),(Qi||Pe.receiveShadow!==W.receiveShadow)&&(Pe.receiveShadow=W.receiveShadow,Lt.setValue(B,"receiveShadow",W.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(gi.envMap.value=Ae,gi.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&z.environment!==null&&(gi.envMapIntensity.value=z.environmentIntensity),Qi&&(Lt.setValue(B,"toneMappingExposure",y.toneMappingExposure),Pe.needsLights&&e_(gi,vl),ge&&Z.fog===!0&&$.refreshFogUniforms(gi,ge),$.refreshMaterialUniforms(gi,Z,te,G,p.state.transmissionRenderTarget[w.id]),Ta.upload(B,$u(Pe),gi,ie)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(Ta.upload(B,$u(Pe),gi,ie),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&Lt.setValue(B,"center",W.center),Lt.setValue(B,"modelViewMatrix",W.modelViewMatrix),Lt.setValue(B,"normalMatrix",W.normalMatrix),Lt.setValue(B,"modelMatrix",W.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const mn=Z.uniformsGroups;for(let yl=0,n_=mn.length;yl<n_;yl++){const Yu=mn[yl];Re.update(Yu,Kn),Re.bind(Yu,Kn)}}return Kn}function e_(w,z){w.ambientLightColor.needsUpdate=z,w.lightProbe.needsUpdate=z,w.directionalLights.needsUpdate=z,w.directionalLightShadows.needsUpdate=z,w.pointLights.needsUpdate=z,w.pointLightShadows.needsUpdate=z,w.spotLights.needsUpdate=z,w.spotLightShadows.needsUpdate=z,w.rectAreaLights.needsUpdate=z,w.hemisphereLights.needsUpdate=z}function t_(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(w,z,Y){J.get(w.texture).__webglTexture=z,J.get(w.depthTexture).__webglTexture=Y;const Z=J.get(w);Z.__hasExternalTextures=!0,Z.__autoAllocateDepthBuffer=Y===void 0,Z.__autoAllocateDepthBuffer||L.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,z){const Y=J.get(w);Y.__webglFramebuffer=z,Y.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(w,z=0,Y=0){A=w,P=z,R=Y;let Z=!0,W=null,ge=!1,be=!1;if(w){const Ae=J.get(w);Ae.__useDefaultFramebuffer!==void 0?(H.bindFramebuffer(B.FRAMEBUFFER,null),Z=!1):Ae.__webglFramebuffer===void 0?ie.setupRenderTarget(w):Ae.__hasExternalTextures&&ie.rebindTextures(w,J.get(w.texture).__webglTexture,J.get(w.depthTexture).__webglTexture);const Be=w.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(be=!0);const ze=J.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(ze[z])?W=ze[z][Y]:W=ze[z],ge=!0):w.samples>0&&ie.useMultisampledRTT(w)===!1?W=J.get(w).__webglMultisampledFramebuffer:Array.isArray(ze)?W=ze[Y]:W=ze,M.copy(w.viewport),I.copy(w.scissor),N=w.scissorTest}else M.copy(Se).multiplyScalar(te).floor(),I.copy(ye).multiplyScalar(te).floor(),N=Ie;if(H.bindFramebuffer(B.FRAMEBUFFER,W)&&Z&&H.drawBuffers(w,W),H.viewport(M),H.scissor(I),H.setScissorTest(N),ge){const Ae=J.get(w.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+z,Ae.__webglTexture,Y)}else if(be){const Ae=J.get(w.texture),Be=z||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ae.__webglTexture,Y||0,Be)}C=-1},this.readRenderTargetPixels=function(w,z,Y,Z,W,ge,be){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=J.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&be!==void 0&&(Te=Te[be]),Te){H.bindFramebuffer(B.FRAMEBUFFER,Te);try{const Ae=w.texture,Be=Ae.format,ze=Ae.type;if(!O.textureFormatReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!O.textureTypeReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=w.width-Z&&Y>=0&&Y<=w.height-W&&B.readPixels(z,Y,Z,W,ve.convert(Be),ve.convert(ze),ge)}finally{const Ae=A!==null?J.get(A).__webglFramebuffer:null;H.bindFramebuffer(B.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(w,z,Y,Z,W,ge,be){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=J.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&be!==void 0&&(Te=Te[be]),Te){H.bindFramebuffer(B.FRAMEBUFFER,Te);try{const Ae=w.texture,Be=Ae.format,ze=Ae.type;if(!O.textureFormatReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!O.textureTypeReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(z>=0&&z<=w.width-Z&&Y>=0&&Y<=w.height-W){const Oe=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Oe),B.bufferData(B.PIXEL_PACK_BUFFER,ge.byteLength,B.STREAM_READ),B.readPixels(z,Y,Z,W,ve.convert(Be),ve.convert(ze),0),B.flush();const st=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);await KM(B,st,4);try{B.bindBuffer(B.PIXEL_PACK_BUFFER,Oe),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,ge)}finally{B.deleteBuffer(Oe),B.deleteSync(st)}return ge}}finally{const Ae=A!==null?J.get(A).__webglFramebuffer:null;H.bindFramebuffer(B.FRAMEBUFFER,Ae)}}},this.copyFramebufferToTexture=function(w,z=null,Y=0){w.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),z=arguments[0]||null,w=arguments[1]);const Z=Math.pow(2,-Y),W=Math.floor(w.image.width*Z),ge=Math.floor(w.image.height*Z),be=z!==null?z.x:0,Te=z!==null?z.y:0;ie.setTexture2D(w,0),B.copyTexSubImage2D(B.TEXTURE_2D,Y,0,0,be,Te,W,ge),H.unbindTexture()},this.copyTextureToTexture=function(w,z,Y=null,Z=null,W=0){w.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),Z=arguments[0]||null,w=arguments[1],z=arguments[2],W=arguments[3]||0,Y=null);let ge,be,Te,Ae,Be,ze;Y!==null?(ge=Y.max.x-Y.min.x,be=Y.max.y-Y.min.y,Te=Y.min.x,Ae=Y.min.y):(ge=w.image.width,be=w.image.height,Te=0,Ae=0),Z!==null?(Be=Z.x,ze=Z.y):(Be=0,ze=0);const Oe=ve.convert(z.format),st=ve.convert(z.type);ie.setTexture2D(z,0),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,z.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,z.unpackAlignment);const _t=B.getParameter(B.UNPACK_ROW_LENGTH),vt=B.getParameter(B.UNPACK_IMAGE_HEIGHT),ln=B.getParameter(B.UNPACK_SKIP_PIXELS),rt=B.getParameter(B.UNPACK_SKIP_ROWS),Pe=B.getParameter(B.UNPACK_SKIP_IMAGES),$t=w.isCompressedTexture?w.mipmaps[W]:w.image;B.pixelStorei(B.UNPACK_ROW_LENGTH,$t.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,$t.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Te),B.pixelStorei(B.UNPACK_SKIP_ROWS,Ae),w.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,W,Be,ze,ge,be,Oe,st,$t.data):w.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,W,Be,ze,$t.width,$t.height,Oe,$t.data):B.texSubImage2D(B.TEXTURE_2D,W,Be,ze,Oe,st,$t),B.pixelStorei(B.UNPACK_ROW_LENGTH,_t),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,vt),B.pixelStorei(B.UNPACK_SKIP_PIXELS,ln),B.pixelStorei(B.UNPACK_SKIP_ROWS,rt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Pe),W===0&&z.generateMipmaps&&B.generateMipmap(B.TEXTURE_2D),H.unbindTexture()},this.copyTextureToTexture3D=function(w,z,Y=null,Z=null,W=0){w.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Y=arguments[0]||null,Z=arguments[1]||null,w=arguments[2],z=arguments[3],W=arguments[4]||0);let ge,be,Te,Ae,Be,ze,Oe,st,_t;const vt=w.isCompressedTexture?w.mipmaps[W]:w.image;Y!==null?(ge=Y.max.x-Y.min.x,be=Y.max.y-Y.min.y,Te=Y.max.z-Y.min.z,Ae=Y.min.x,Be=Y.min.y,ze=Y.min.z):(ge=vt.width,be=vt.height,Te=vt.depth,Ae=0,Be=0,ze=0),Z!==null?(Oe=Z.x,st=Z.y,_t=Z.z):(Oe=0,st=0,_t=0);const ln=ve.convert(z.format),rt=ve.convert(z.type);let Pe;if(z.isData3DTexture)ie.setTexture3D(z,0),Pe=B.TEXTURE_3D;else if(z.isDataArrayTexture||z.isCompressedArrayTexture)ie.setTexture2DArray(z,0),Pe=B.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,z.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,z.unpackAlignment);const $t=B.getParameter(B.UNPACK_ROW_LENGTH),lt=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Kn=B.getParameter(B.UNPACK_SKIP_PIXELS),Do=B.getParameter(B.UNPACK_SKIP_ROWS),Qi=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,vt.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,vt.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Ae),B.pixelStorei(B.UNPACK_SKIP_ROWS,Be),B.pixelStorei(B.UNPACK_SKIP_IMAGES,ze),w.isDataTexture||w.isData3DTexture?B.texSubImage3D(Pe,W,Oe,st,_t,ge,be,Te,ln,rt,vt.data):z.isCompressedArrayTexture?B.compressedTexSubImage3D(Pe,W,Oe,st,_t,ge,be,Te,ln,vt.data):B.texSubImage3D(Pe,W,Oe,st,_t,ge,be,Te,ln,rt,vt),B.pixelStorei(B.UNPACK_ROW_LENGTH,$t),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,lt),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Kn),B.pixelStorei(B.UNPACK_SKIP_ROWS,Do),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Qi),W===0&&z.generateMipmaps&&B.generateMipmap(Pe),H.unbindTexture()},this.initRenderTarget=function(w){J.get(w).__webglFramebuffer===void 0&&ie.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?ie.setTextureCube(w,0):w.isData3DTexture?ie.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?ie.setTexture2DArray(w,0):ie.setTexture2D(w,0),H.unbindTexture()},this.resetState=function(){P=0,R=0,A=null,H.reset(),Ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Du?"display-p3":"srgb",t.unpackColorSpace=it.workingColorSpace===pl?"display-p3":"srgb"}}class iR extends mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wn,this.environmentIntensity=1,this.environmentRotation=new Wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class sR{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=iu,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Ln()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Uu("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ln()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ln()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Kt=new k;class zu{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix4(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.applyNormalMatrix(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.transformDirection(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Rn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ot(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Rn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Rn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Rn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Rn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array),s=ot(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array),s=ot(s,this.array),r=ot(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new tn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new zu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const kh=new k,zh=new dt,Hh=new dt,rR=new k,Vh=new je,fa=new k,vc=new qn,Gh=new je,xc=new wr;class oR extends hn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=xf,this.bindMatrix=new je,this.bindMatrixInverse=new je,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new pi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,fa),this.boundingBox.expandByPoint(fa)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new qn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,fa),this.boundingSphere.expandByPoint(fa)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),vc.copy(this.boundingSphere),vc.applyMatrix4(s),e.ray.intersectsSphere(vc)!==!1&&(Gh.copy(s).invert(),xc.copy(e.ray).applyMatrix4(Gh),!(this.boundingBox!==null&&xc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,xc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new dt,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===xf?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===uM?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,s=this.geometry;zh.fromBufferAttribute(s.attributes.skinIndex,e),Hh.fromBufferAttribute(s.attributes.skinWeight,e),kh.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=Hh.getComponent(r);if(o!==0){const a=zh.getComponent(r);Vh.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(rR.copy(kh).applyMatrix4(Vh),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Hg extends mt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Vg extends Ot{constructor(e=null,t=1,i=1,s,r,o,a,l,c=en,u=en,f,d){super(null,o,a,l,c,u,s,r,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Wh=new je,aR=new je;class Hu{constructor(e=[],t=[]){this.uuid=Ln(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new je)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new je;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:aR;Wh.multiplyMatrices(a,t[r]),Wh.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Hu(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new Vg(t,e,e,Pn,kn);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){const r=e.bones[i];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Hg),this.bones.push(o),this.boneInverses.push(new je().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const a=i[s];e.boneInverses.push(a.toArray())}return e}}class ru extends tn{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Js=new je,qh=new je,ha=[],Xh=new pi,lR=new je,Fr=new hn,Br=new qn;class cR extends hn{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ru(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,lR)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new pi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Js),Xh.copy(e.boundingBox).applyMatrix4(Js),this.boundingBox.union(Xh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new qn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Js),Br.copy(e.boundingSphere).applyMatrix4(Js),this.boundingSphere.union(Br)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(Fr.geometry=this.geometry,Fr.material=this.material,Fr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Br.copy(this.boundingSphere),Br.applyMatrix4(i),e.ray.intersectsSphere(Br)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Js),qh.multiplyMatrices(i,Js),Fr.matrixWorld=qh,Fr.raycast(e,ha);for(let o=0,a=ha.length;o<a;o++){const l=ha[o];l.instanceId=r,l.object=this,t.push(l)}ha.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ru(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Vg(new Float32Array(s*this.count),s,this.count,_g,kn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Gg extends zn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new We(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const $a=new k,Ka=new k,jh=new je,kr=new wr,pa=new qn,yc=new k,$h=new k;class Vu extends mt{constructor(e=new Xn,t=new Gg){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)$a.fromBufferAttribute(t,s-1),Ka.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=$a.distanceTo(Ka);e.setAttribute("lineDistance",new li(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),pa.copy(i.boundingSphere),pa.applyMatrix4(s),pa.radius+=r,e.ray.intersectsSphere(pa)===!1)return;jh.copy(s).invert(),kr.copy(e.ray).applyMatrix4(jh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const h=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=h,p=g-1;_<p;_+=c){const m=u.getX(_),S=u.getX(_+1),y=ma(this,e,kr,l,m,S);y&&t.push(y)}if(this.isLineLoop){const _=u.getX(g-1),p=u.getX(h),m=ma(this,e,kr,l,_,p);m&&t.push(m)}}else{const h=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=h,p=g-1;_<p;_+=c){const m=ma(this,e,kr,l,_,_+1);m&&t.push(m)}if(this.isLineLoop){const _=ma(this,e,kr,l,g-1,h);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function ma(n,e,t,i,s,r){const o=n.geometry.attributes.position;if($a.fromBufferAttribute(o,s),Ka.fromBufferAttribute(o,r),t.distanceSqToSegment($a,Ka,yc,$h)>i)return;yc.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(yc);if(!(l<e.near||l>e.far))return{distance:l,point:$h.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,object:n}}const Kh=new k,Yh=new k;class uR extends Vu{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Kh.fromBufferAttribute(t,s),Yh.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Kh.distanceTo(Yh);e.setAttribute("lineDistance",new li(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class dR extends Vu{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Wg extends zn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new We(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Zh=new je,ou=new wr,ga=new qn,_a=new k;class fR extends mt{constructor(e=new Xn,t=new Wg){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ga.copy(i.boundingSphere),ga.applyMatrix4(s),ga.radius+=r,e.ray.intersectsSphere(ga)===!1)return;Zh.copy(s).invert(),ou.copy(e.ray).applyMatrix4(Zh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const d=Math.max(0,o.start),h=Math.min(c.count,o.start+o.count);for(let g=d,_=h;g<_;g++){const p=c.getX(g);_a.fromBufferAttribute(f,p),Jh(_a,p,l,s,e,t,this)}}else{const d=Math.max(0,o.start),h=Math.min(f.count,o.start+o.count);for(let g=d,_=h;g<_;g++)_a.fromBufferAttribute(f,g),Jh(_a,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Jh(n,e,t,i,s,r,o){const a=ou.distanceSqToPoint(n);if(a<t){const l=new k;ou.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class Po extends zn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new We(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mg,this.normalScale=new Fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class jn extends Po{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Fe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return zt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new We(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new We(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new We(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function va(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function hR(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function pR(n){function e(s,r){return n[s]-n[r]}const t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function Qh(n,e,t){const i=n.length,s=new n.constructor(i);for(let r=0,o=0;o!==i;++r){const a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=n[a+l]}return s}function qg(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let o=r[i];if(o!==void 0)if(Array.isArray(o))do o=r[i],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=n[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[i],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do o=r[i],o!==void 0&&(e.push(r.time),t.push(o)),r=n[s++];while(r!==void 0)}class Lo{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){const a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class mR extends Lo{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Xf,endingEnd:Xf}}intervalChanged_(e,t,i){const s=this.parameterPositions;let r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case jf:r=e,a=2*t-i;break;case $f:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case jf:o=e,l=2*i-t;break;case $f:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}const c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,h=this._weightNext,g=(i-t)/(s-t),_=g*g,p=_*g,m=-d*p+2*d*_-d*g,S=(1+d)*p+(-1.5-2*d)*_+(-.5+d)*g+1,y=(-1-h)*p+(1.5+h)*_+.5*g,E=h*p-h*_;for(let P=0;P!==a;++P)r[P]=m*o[u+P]+S*o[c+P]+y*o[l+P]+E*o[f+P];return r}}class gR extends Lo{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(s-t),f=1-u;for(let d=0;d!==a;++d)r[d]=o[c+d]*f+o[l+d]*u;return r}}class _R extends Lo{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class $n{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=va(t,this.TimeBufferType),this.values=va(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:va(e.times,Array),values:va(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new _R(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new gR(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new mR(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case yo:t=this.InterpolantFactoryMethodDiscrete;break;case So:t=this.InterpolantFactoryMethodLinear;break;case Xl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return yo;case this.InterpolantFactoryMethodLinear:return So;case this.InterpolantFactoryMethodSmooth:return Xl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){const i=this.times,s=i.length;let r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&hR(s))for(let a=0,l=s.length;a!==l;++a){const c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Xl,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{const f=a*i,d=f-i,h=f+i;for(let g=0;g!==i;++g){const _=t[f+g];if(_!==t[d+g]||_!==t[h+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const f=a*i,d=o*i;for(let h=0;h!==i;++h)t[d+h]=t[f+h]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}$n.prototype.TimeBufferType=Float32Array;$n.prototype.ValueBufferType=Float32Array;$n.prototype.DefaultInterpolation=So;class Rr extends $n{constructor(e,t,i){super(e,t,i)}}Rr.prototype.ValueTypeName="bool";Rr.prototype.ValueBufferType=Array;Rr.prototype.DefaultInterpolation=yo;Rr.prototype.InterpolantFactoryMethodLinear=void 0;Rr.prototype.InterpolantFactoryMethodSmooth=void 0;class Xg extends $n{}Xg.prototype.ValueTypeName="color";class vr extends $n{}vr.prototype.ValueTypeName="number";class vR extends Lo{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t);let c=e*a;for(let u=c+a;c!==u;c+=4)Gn.slerpFlat(r,0,o,c-a,o,c,l);return r}}class xr extends $n{InterpolantFactoryMethodLinear(e){return new vR(this.times,this.values,this.getValueSize(),e)}}xr.prototype.ValueTypeName="quaternion";xr.prototype.InterpolantFactoryMethodSmooth=void 0;class Cr extends $n{constructor(e,t,i){super(e,t,i)}}Cr.prototype.ValueTypeName="string";Cr.prototype.ValueBufferType=Array;Cr.prototype.DefaultInterpolation=yo;Cr.prototype.InterpolantFactoryMethodLinear=void 0;Cr.prototype.InterpolantFactoryMethodSmooth=void 0;class yr extends $n{}yr.prototype.ValueTypeName="vector";class xR{constructor(e="",t=-1,i=[],s=yM){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=Ln(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,s=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(SR(i[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=i.length;r!==o;++r)t.push($n.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const u=pR(l);l=Qh(l,1,u),c=Qh(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new vr(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(r);if(u&&u.length>1){const f=u[1];let d=s[f];d||(s[f]=d=[]),d.push(c)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(f,d,h,g,_){if(h.length!==0){const p=[],m=[];qg(h,p,m,g),p.length!==0&&_.push(new f(d,p,m))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let f=0;f<c.length;f++){const d=c[f].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const h={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)h[d[g].morphTargets[_]]=-1;for(const _ in h){const p=[],m=[];for(let S=0;S!==d[g].morphTargets.length;++S){const y=d[g];p.push(y.time),m.push(y.morphTarget===_?1:0)}s.push(new vr(".morphTargetInfluence["+_+"]",p,m))}l=h.length*o}else{const h=".bones["+t[f].name+"]";i(yr,h+".position",d,"pos",s),i(xr,h+".quaternion",d,"rot",s),i(yr,h+".scale",d,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,s=e.length;i!==s;++i){const r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function yR(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return vr;case"vector":case"vector2":case"vector3":case"vector4":return yr;case"color":return Xg;case"quaternion":return xr;case"bool":case"boolean":return Rr;case"string":return Cr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function SR(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=yR(n.type);if(n.times===void 0){const t=[],i=[];qg(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const ki={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class MR{constructor(e,t,i){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,d=c.length;f<d;f+=2){const h=c[f],g=c[f+1];if(h.global&&(h.lastIndex=0),h.test(u))return g}return null}}}const bR=new MR;class Pr{constructor(e){this.manager=e!==void 0?e:bR,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Pr.DEFAULT_MATERIAL_NAME="__DEFAULT";const ti={};class ER extends Error{constructor(e,t){super(e),this.response=t}}class jg extends Pr{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=ki.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(ti[e]!==void 0){ti[e].push({onLoad:t,onProgress:i,onError:s});return}ti[e]=[],ti[e].push({onLoad:t,onProgress:i,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=ti[e],f=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),h=d?parseInt(d):0,g=h!==0;let _=0;const p=new ReadableStream({start(m){S();function S(){f.read().then(({done:y,value:E})=>{if(y)m.close();else{_+=E.byteLength;const P=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:h});for(let R=0,A=u.length;R<A;R++){const C=u[R];C.onProgress&&C.onProgress(P)}m.enqueue(E),S()}},y=>{m.error(y)})}}});return new Response(p)}else throw new ER(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),d=f&&f[1]?f[1].toLowerCase():void 0,h=new TextDecoder(d);return c.arrayBuffer().then(g=>h.decode(g))}}}).then(c=>{ki.add(e,c);const u=ti[e];delete ti[e];for(let f=0,d=u.length;f<d;f++){const h=u[f];h.onLoad&&h.onLoad(c)}}).catch(c=>{const u=ti[e];if(u===void 0)throw this.manager.itemError(e),c;delete ti[e];for(let f=0,d=u.length;f<d;f++){const h=u[f];h.onError&&h.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class TR extends Pr{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=ki.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=Mo("img");function l(){u(),ki.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(f){u(),s&&s(f),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class $g extends Pr{constructor(e){super(e)}load(e,t,i,s){const r=new Ot,o=new TR(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}}class _l extends mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new We(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Sc=new je,ep=new k,tp=new k;class Gu{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Fe(512,512),this.map=null,this.mapPass=null,this.matrix=new je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Fu,this._frameExtents=new Fe(1,1),this._viewportCount=1,this._viewports=[new dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;ep.setFromMatrixPosition(e.matrixWorld),t.position.copy(ep),tp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(tp),t.updateMatrixWorld(),Sc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Sc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class wR extends Gu{constructor(){super(new Qt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=gr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class AR extends _l{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.target=new mt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new wR}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const np=new je,zr=new k,Mc=new k;class RR extends Gu{constructor(){super(new Qt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Fe(4,2),this._viewportCount=6,this._viewports=[new dt(2,1,1,1),new dt(0,1,1,1),new dt(3,1,1,1),new dt(1,1,1,1),new dt(3,0,1,1),new dt(1,0,1,1)],this._cubeDirections=[new k(1,0,0),new k(-1,0,0),new k(0,0,1),new k(0,0,-1),new k(0,1,0),new k(0,-1,0)],this._cubeUps=[new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,0,1),new k(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),zr.setFromMatrixPosition(e.matrixWorld),i.position.copy(zr),Mc.copy(i.position),Mc.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Mc),i.updateMatrixWorld(),s.makeTranslation(-zr.x,-zr.y,-zr.z),np.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(np)}}class CR extends _l{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new RR}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class PR extends Gu{constructor(){super(new Bu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Kg extends _l{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.target=new mt,this.shadow=new PR}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class LR extends _l{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class co{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,s=e.length;i<s;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class IR extends Pr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=ki.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return ki.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),ki.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});ki.add(e,l),r.manager.itemStart(e)}}const Wu="\\[\\]\\.:\\/",DR=new RegExp("["+Wu+"]","g"),qu="[^"+Wu+"]",NR="[^"+Wu.replace("\\.","")+"]",UR=/((?:WC+[\/:])*)/.source.replace("WC",qu),OR=/(WCOD+)?/.source.replace("WCOD",NR),FR=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",qu),BR=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",qu),kR=new RegExp("^"+UR+OR+FR+BR+"$"),zR=["material","materials","bones","map"];class HR{constructor(e,t,i){const s=i||at.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class at{constructor(e,t,i){this.path=t,this.parsedPath=i||at.parseTrackName(t),this.node=at.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new at.Composite(e,t,i):new at(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(DR,"")}static parseTrackName(e){const t=kR.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=i.nodeName.substring(s+1);zR.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=at.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[s];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}at.Composite=HR;at.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};at.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};at.prototype.GetterByBindingType=[at.prototype._getValue_direct,at.prototype._getValue_array,at.prototype._getValue_arrayElement,at.prototype._getValue_toArray];at.prototype.SetterByBindingTypeAndVersioning=[[at.prototype._setValue_direct,at.prototype._setValue_direct_setNeedsUpdate,at.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[at.prototype._setValue_array,at.prototype._setValue_array_setNeedsUpdate,at.prototype._setValue_array_setMatrixWorldNeedsUpdate],[at.prototype._setValue_arrayElement,at.prototype._setValue_arrayElement_setNeedsUpdate,at.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[at.prototype._setValue_fromArray,at.prototype._setValue_fromArray_setNeedsUpdate,at.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const ip=new je;class VR{constructor(e,t,i=0,s=1/0){this.ray=new wr(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Ou,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return ip.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ip),this}intersectObject(e,t=!0,i=[]){return au(e,this,i,t),i.sort(sp),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)au(e[s],this,i,t);return i.sort(sp),i}}function sp(n,e){return n.distance-e.distance}function au(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)au(r[o],e,t,!0)}}class rp{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(zt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Iu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Iu);const op={type:"change"},bc={type:"start"},ap={type:"end"},xa=new wr,lp=new Ii,GR=Math.cos(70*Eg.DEG2RAD);class WR extends hi{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new k,this.cursor=new k,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ds.ROTATE,MIDDLE:Ds.DOLLY,RIGHT:Ds.PAN},this.touches={ONE:Ns.ROTATE,TWO:Ns.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(x){x.addEventListener("keydown",ae),this._domElementKeyEvents=x},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",ae),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(op),i.update(),r=s.NONE},this.update=function(){const x=new k,ee=new Gn().setFromUnitVectors(e.up,new k(0,1,0)),j=ee.clone().invert(),ne=new k,de=new Gn,Ce=new k,Ge=2*Math.PI;return function(Mt=null){const nt=i.object.position;x.copy(nt).sub(i.target),x.applyQuaternion(ee),a.setFromVector3(x),i.autoRotate&&r===s.NONE&&N(M(Mt)),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let bt=i.minAzimuthAngle,Et=i.maxAzimuthAngle;isFinite(bt)&&isFinite(Et)&&(bt<-Math.PI?bt+=Ge:bt>Math.PI&&(bt-=Ge),Et<-Math.PI?Et+=Ge:Et>Math.PI&&(Et-=Ge),bt<=Et?a.theta=Math.max(bt,Math.min(Et,a.theta)):a.theta=a.theta>(bt+Et)/2?Math.max(bt,a.theta):Math.min(Et,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor);let on=!1;if(i.zoomToCursor&&R||i.object.isOrthographicCamera)a.radius=Se(a.radius);else{const an=a.radius;a.radius=Se(a.radius*c),on=an!=a.radius}if(x.setFromSpherical(a),x.applyQuaternion(j),nt.copy(i.target).add(x),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),i.zoomToCursor&&R){let an=null;if(i.object.isPerspectiveCamera){const mi=x.length();an=Se(mi*c);const Zi=mi-an;i.object.position.addScaledVector(E,Zi),i.object.updateMatrixWorld(),on=!!Zi}else if(i.object.isOrthographicCamera){const mi=new k(P.x,P.y,0);mi.unproject(i.object);const Zi=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),on=Zi!==i.object.zoom;const Ji=new k(P.x,P.y,0);Ji.unproject(i.object),i.object.position.sub(Ji).add(mi),i.object.updateMatrixWorld(),an=x.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;an!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(an).add(i.object.position):(xa.origin.copy(i.object.position),xa.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(xa.direction))<GR?e.lookAt(i.target):(lp.setFromNormalAndCoplanarPoint(i.object.up,i.target),xa.intersectPlane(lp,i.target))))}else if(i.object.isOrthographicCamera){const an=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),an!==i.object.zoom&&(i.object.updateProjectionMatrix(),on=!0)}return c=1,R=!1,on||ne.distanceToSquared(i.object.position)>o||8*(1-de.dot(i.object.quaternion))>o||Ce.distanceToSquared(i.target)>o?(i.dispatchEvent(op),ne.copy(i.object.position),de.copy(i.object.quaternion),Ce.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",Me),i.domElement.removeEventListener("pointerdown",fe),i.domElement.removeEventListener("pointercancel",v),i.domElement.removeEventListener("wheel",K),i.domElement.removeEventListener("pointermove",T),i.domElement.removeEventListener("pointerup",v),i.domElement.getRootNode().removeEventListener("keydown",ue,{capture:!0}),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",ae),i._domElementKeyEvents=null)};const i=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=s.NONE;const o=1e-6,a=new rp,l=new rp;let c=1;const u=new k,f=new Fe,d=new Fe,h=new Fe,g=new Fe,_=new Fe,p=new Fe,m=new Fe,S=new Fe,y=new Fe,E=new k,P=new Fe;let R=!1;const A=[],C={};let b=!1;function M(x){return x!==null?2*Math.PI/60*i.autoRotateSpeed*x:2*Math.PI/60/60*i.autoRotateSpeed}function I(x){const ee=Math.abs(x*.01);return Math.pow(.95,i.zoomSpeed*ee)}function N(x){l.theta-=x}function U(x){l.phi-=x}const F=function(){const x=new k;return function(j,ne){x.setFromMatrixColumn(ne,0),x.multiplyScalar(-j),u.add(x)}}(),X=function(){const x=new k;return function(j,ne){i.screenSpacePanning===!0?x.setFromMatrixColumn(ne,1):(x.setFromMatrixColumn(ne,0),x.crossVectors(i.object.up,x)),x.multiplyScalar(j),u.add(x)}}(),G=function(){const x=new k;return function(j,ne){const de=i.domElement;if(i.object.isPerspectiveCamera){const Ce=i.object.position;x.copy(Ce).sub(i.target);let Ge=x.length();Ge*=Math.tan(i.object.fov/2*Math.PI/180),F(2*j*Ge/de.clientHeight,i.object.matrix),X(2*ne*Ge/de.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(F(j*(i.object.right-i.object.left)/i.object.zoom/de.clientWidth,i.object.matrix),X(ne*(i.object.top-i.object.bottom)/i.object.zoom/de.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function te(x){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=x:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function q(x){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=x:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function me(x,ee){if(!i.zoomToCursor)return;R=!0;const j=i.domElement.getBoundingClientRect(),ne=x-j.left,de=ee-j.top,Ce=j.width,Ge=j.height;P.x=ne/Ce*2-1,P.y=-(de/Ge)*2+1,E.set(P.x,P.y,1).unproject(i.object).sub(i.object.position).normalize()}function Se(x){return Math.max(i.minDistance,Math.min(i.maxDistance,x))}function ye(x){f.set(x.clientX,x.clientY)}function Ie(x){me(x.clientX,x.clientX),m.set(x.clientX,x.clientY)}function Ze(x){g.set(x.clientX,x.clientY)}function se(x){d.set(x.clientX,x.clientY),h.subVectors(d,f).multiplyScalar(i.rotateSpeed);const ee=i.domElement;N(2*Math.PI*h.x/ee.clientHeight),U(2*Math.PI*h.y/ee.clientHeight),f.copy(d),i.update()}function he(x){S.set(x.clientX,x.clientY),y.subVectors(S,m),y.y>0?te(I(y.y)):y.y<0&&q(I(y.y)),m.copy(S),i.update()}function oe(x){_.set(x.clientX,x.clientY),p.subVectors(_,g).multiplyScalar(i.panSpeed),G(p.x,p.y),g.copy(_),i.update()}function ce(x){me(x.clientX,x.clientY),x.deltaY<0?q(I(x.deltaY)):x.deltaY>0&&te(I(x.deltaY)),i.update()}function De(x){let ee=!1;switch(x.code){case i.keys.UP:x.ctrlKey||x.metaKey||x.shiftKey?U(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):G(0,i.keyPanSpeed),ee=!0;break;case i.keys.BOTTOM:x.ctrlKey||x.metaKey||x.shiftKey?U(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):G(0,-i.keyPanSpeed),ee=!0;break;case i.keys.LEFT:x.ctrlKey||x.metaKey||x.shiftKey?N(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):G(i.keyPanSpeed,0),ee=!0;break;case i.keys.RIGHT:x.ctrlKey||x.metaKey||x.shiftKey?N(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):G(-i.keyPanSpeed,0),ee=!0;break}ee&&(x.preventDefault(),i.update())}function pe(x){if(A.length===1)f.set(x.pageX,x.pageY);else{const ee=Re(x),j=.5*(x.pageX+ee.x),ne=.5*(x.pageY+ee.y);f.set(j,ne)}}function Ne(x){if(A.length===1)g.set(x.pageX,x.pageY);else{const ee=Re(x),j=.5*(x.pageX+ee.x),ne=.5*(x.pageY+ee.y);g.set(j,ne)}}function B(x){const ee=Re(x),j=x.pageX-ee.x,ne=x.pageY-ee.y,de=Math.sqrt(j*j+ne*ne);m.set(0,de)}function Xe(x){i.enableZoom&&B(x),i.enablePan&&Ne(x)}function L(x){i.enableZoom&&B(x),i.enableRotate&&pe(x)}function O(x){if(A.length==1)d.set(x.pageX,x.pageY);else{const j=Re(x),ne=.5*(x.pageX+j.x),de=.5*(x.pageY+j.y);d.set(ne,de)}h.subVectors(d,f).multiplyScalar(i.rotateSpeed);const ee=i.domElement;N(2*Math.PI*h.x/ee.clientHeight),U(2*Math.PI*h.y/ee.clientHeight),f.copy(d)}function H(x){if(A.length===1)_.set(x.pageX,x.pageY);else{const ee=Re(x),j=.5*(x.pageX+ee.x),ne=.5*(x.pageY+ee.y);_.set(j,ne)}p.subVectors(_,g).multiplyScalar(i.panSpeed),G(p.x,p.y),g.copy(_)}function Q(x){const ee=Re(x),j=x.pageX-ee.x,ne=x.pageY-ee.y,de=Math.sqrt(j*j+ne*ne);S.set(0,de),y.set(0,Math.pow(S.y/m.y,i.zoomSpeed)),te(y.y),m.copy(S);const Ce=(x.pageX+ee.x)*.5,Ge=(x.pageY+ee.y)*.5;me(Ce,Ge)}function J(x){i.enableZoom&&Q(x),i.enablePan&&H(x)}function ie(x){i.enableZoom&&Q(x),i.enableRotate&&O(x)}function fe(x){i.enabled!==!1&&(A.length===0&&(i.domElement.setPointerCapture(x.pointerId),i.domElement.addEventListener("pointermove",T),i.domElement.addEventListener("pointerup",v)),!ve(x)&&(He(x),x.pointerType==="touch"?Ee(x):D(x)))}function T(x){i.enabled!==!1&&(x.pointerType==="touch"?le(x):V(x))}function v(x){switch(Ue(x),A.length){case 0:i.domElement.releasePointerCapture(x.pointerId),i.domElement.removeEventListener("pointermove",T),i.domElement.removeEventListener("pointerup",v),i.dispatchEvent(ap),r=s.NONE;break;case 1:const ee=A[0],j=C[ee];Ee({pointerId:ee,pageX:j.x,pageY:j.y});break}}function D(x){let ee;switch(x.button){case 0:ee=i.mouseButtons.LEFT;break;case 1:ee=i.mouseButtons.MIDDLE;break;case 2:ee=i.mouseButtons.RIGHT;break;default:ee=-1}switch(ee){case Ds.DOLLY:if(i.enableZoom===!1)return;Ie(x),r=s.DOLLY;break;case Ds.ROTATE:if(x.ctrlKey||x.metaKey||x.shiftKey){if(i.enablePan===!1)return;Ze(x),r=s.PAN}else{if(i.enableRotate===!1)return;ye(x),r=s.ROTATE}break;case Ds.PAN:if(x.ctrlKey||x.metaKey||x.shiftKey){if(i.enableRotate===!1)return;ye(x),r=s.ROTATE}else{if(i.enablePan===!1)return;Ze(x),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&i.dispatchEvent(bc)}function V(x){switch(r){case s.ROTATE:if(i.enableRotate===!1)return;se(x);break;case s.DOLLY:if(i.enableZoom===!1)return;he(x);break;case s.PAN:if(i.enablePan===!1)return;oe(x);break}}function K(x){i.enabled===!1||i.enableZoom===!1||r!==s.NONE||(x.preventDefault(),i.dispatchEvent(bc),ce($(x)),i.dispatchEvent(ap))}function $(x){const ee=x.deltaMode,j={clientX:x.clientX,clientY:x.clientY,deltaY:x.deltaY};switch(ee){case 1:j.deltaY*=16;break;case 2:j.deltaY*=100;break}return x.ctrlKey&&!b&&(j.deltaY*=10),j}function ue(x){x.key==="Control"&&(b=!0,i.domElement.getRootNode().addEventListener("keyup",re,{passive:!0,capture:!0}))}function re(x){x.key==="Control"&&(b=!1,i.domElement.getRootNode().removeEventListener("keyup",re,{passive:!0,capture:!0}))}function ae(x){i.enabled===!1||i.enablePan===!1||De(x)}function Ee(x){switch(Ve(x),A.length){case 1:switch(i.touches.ONE){case Ns.ROTATE:if(i.enableRotate===!1)return;pe(x),r=s.TOUCH_ROTATE;break;case Ns.PAN:if(i.enablePan===!1)return;Ne(x),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(i.touches.TWO){case Ns.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Xe(x),r=s.TOUCH_DOLLY_PAN;break;case Ns.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;L(x),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&i.dispatchEvent(bc)}function le(x){switch(Ve(x),r){case s.TOUCH_ROTATE:if(i.enableRotate===!1)return;O(x),i.update();break;case s.TOUCH_PAN:if(i.enablePan===!1)return;H(x),i.update();break;case s.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;J(x),i.update();break;case s.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;ie(x),i.update();break;default:r=s.NONE}}function Me(x){i.enabled!==!1&&x.preventDefault()}function He(x){A.push(x.pointerId)}function Ue(x){delete C[x.pointerId];for(let ee=0;ee<A.length;ee++)if(A[ee]==x.pointerId){A.splice(ee,1);return}}function ve(x){for(let ee=0;ee<A.length;ee++)if(A[ee]==x.pointerId)return!0;return!1}function Ve(x){let ee=C[x.pointerId];ee===void 0&&(ee=new Fe,C[x.pointerId]=ee),ee.set(x.pageX,x.pageY)}function Re(x){const ee=x.pointerId===A[0]?A[1]:A[0];return C[ee]}i.domElement.addEventListener("contextmenu",Me),i.domElement.addEventListener("pointerdown",fe),i.domElement.addEventListener("pointercancel",v),i.domElement.addEventListener("wheel",K,{passive:!1}),i.domElement.getRootNode().addEventListener("keydown",ue,{passive:!0,capture:!0}),this.update()}}function cp(n,e){if(e===SM)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===nu||e===Sg){let t=n.getIndex();if(t===null){const o=[],a=n.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);n.setIndex(o),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const i=t.count-2,s=[];if(e===nu)for(let o=1;o<=i;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=n.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}class qR extends Pr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new YR(t)}),this.register(function(t){return new ZR(t)}),this.register(function(t){return new oC(t)}),this.register(function(t){return new aC(t)}),this.register(function(t){return new lC(t)}),this.register(function(t){return new QR(t)}),this.register(function(t){return new eC(t)}),this.register(function(t){return new tC(t)}),this.register(function(t){return new nC(t)}),this.register(function(t){return new KR(t)}),this.register(function(t){return new iC(t)}),this.register(function(t){return new JR(t)}),this.register(function(t){return new rC(t)}),this.register(function(t){return new sC(t)}),this.register(function(t){return new jR(t)}),this.register(function(t){return new cC(t)}),this.register(function(t){return new uC(t)})}load(e,t,i,s){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=co.extractUrlBase(e);o=co.resolveURL(c,this.path)}else o=co.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new jg(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Yg){try{o[Je.KHR_BINARY_GLTF]=new dC(e)}catch(f){s&&s(f);return}r=JSON.parse(o[Je.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new EC(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const f=this.pluginCallbacks[u](c);f.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[f.name]=f,o[f.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const f=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(f){case Je.KHR_MATERIALS_UNLIT:o[f]=new $R;break;case Je.KHR_DRACO_MESH_COMPRESSION:o[f]=new fC(r,this.dracoLoader);break;case Je.KHR_TEXTURE_TRANSFORM:o[f]=new hC;break;case Je.KHR_MESH_QUANTIZATION:o[f]=new pC;break;default:d.indexOf(f)>=0&&a[f]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+f+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(i,s)}parseAsync(e,t){const i=this;return new Promise(function(s,r){i.parse(e,t,s,r)})}}function XR(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}const Je={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class jR{constructor(e){this.parser=e,this.name=Je.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){const r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let s=t.cache.get(i);if(s)return s;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new We(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Ht);const f=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Kg(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new CR(u),c.distance=f;break;case"spot":c=new AR(u),c.distance=f,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,ii(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,r=i.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return i._getNodeRef(t.cache,a,l)})}}class $R{constructor(){this.name=Je.KHR_MATERIALS_UNLIT}getMaterialType(){return vs}extendParams(e,t,i){const s=[];e.color=new We(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Ht),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",r.baseColorTexture,Jt))}return Promise.all(s)}}class KR{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class YR{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:jn}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(i.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Fe(a,a)}return Promise.all(r)}}class ZR{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_DISPERSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:jn}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class JR{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:jn}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class QR{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:jn}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new We(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Ht)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(i.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Jt)),o.sheenRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class eC{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:jn}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(i.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class tC{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:jn}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(i.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new We().setRGB(a[0],a[1],a[2],Ht),Promise.all(r)}}class nC{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:jn}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class iC{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:jn}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(i.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new We().setRGB(a[0],a[1],a[2],Ht),o.specularColorTexture!==void 0&&r.push(i.assignTexture(t,"specularColorMap",o.specularColorTexture,Jt)),Promise.all(r)}}class sC{constructor(e){this.parser=e,this.name=Je.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:jn}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(i.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class rC{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:jn}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(i.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class oC{constructor(e){this.parser=e,this.name=Je.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class aC{constructor(e){this.parser=e,this.name=Je.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class lC{constructor(e){this.parser=e,this.name=Je.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class cC{constructor(e){this.name=Je.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const s=i.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=s.byteOffset||0,c=s.byteLength||0,u=s.count,f=s.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,f,d,s.mode,s.filter).then(function(h){return h.buffer}):o.ready.then(function(){const h=new ArrayBuffer(u*f);return o.decodeGltfBuffer(new Uint8Array(h),u,f,d,s.mode,s.filter),h})})}else return null}}class uC{constructor(e){this.name=Je.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const s=t.meshes[i.mesh];for(const c of s.primitives)if(c.mode!==yn.TRIANGLES&&c.mode!==yn.TRIANGLE_STRIP&&c.mode!==yn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=i.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),f=u.isGroup?u.children:[u],d=c[0].count,h=[];for(const g of f){const _=new je,p=new k,m=new Gn,S=new k(1,1,1),y=new cR(g.geometry,g.material,d);for(let E=0;E<d;E++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,E),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,E),l.SCALE&&S.fromBufferAttribute(l.SCALE,E),y.setMatrixAt(E,_.compose(p,m,S));for(const E in l)if(E==="_COLOR_0"){const P=l[E];y.instanceColor=new ru(P.array,P.itemSize,P.normalized)}else E!=="TRANSLATION"&&E!=="ROTATION"&&E!=="SCALE"&&g.geometry.setAttribute(E,l[E]);mt.prototype.copy.call(y,g),this.parser.assignFinalMaterial(y),h.push(y)}return u.isGroup?(u.clear(),u.add(...h),u):h[0]}))}}const Yg="glTF",Hr=12,up={JSON:1313821514,BIN:5130562};class dC{constructor(e){this.name=Je.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Hr),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Yg)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-Hr,r=new DataView(e,Hr);let o=0;for(;o<s;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===up.JSON){const c=new Uint8Array(e,Hr+o,a);this.content=i.decode(c)}else if(l===up.BIN){const c=Hr+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class fC{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Je.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const f=lu[u]||u.toLowerCase();a[f]=o[u]}for(const u in e.attributes){const f=lu[u]||u.toLowerCase();if(o[u]!==void 0){const d=i.accessors[e.attributes[u]],h=ar[d.componentType];c[f]=h.name,l[f]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(f,d){s.decodeDracoFile(u,function(h){for(const g in h.attributes){const _=h.attributes[g],p=l[g];p!==void 0&&(_.normalized=p)}f(h)},a,c,Ht,d)})})}}class hC{constructor(){this.name=Je.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class pC{constructor(){this.name=Je.KHR_MESH_QUANTIZATION}}class Zg extends Lo{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=i[r+o];return t}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=s-t,f=(i-t)/u,d=f*f,h=d*f,g=e*c,_=g-c,p=-2*h+3*d,m=h-d,S=1-p,y=m-d+f;for(let E=0;E!==a;E++){const P=o[_+E+a],R=o[_+E+l]*u,A=o[g+E+a],C=o[g+E]*u;r[E]=S*P+y*R+p*A+m*C}return r}}const mC=new Gn;class gC extends Zg{interpolate_(e,t,i,s){const r=super.interpolate_(e,t,i,s);return mC.fromArray(r).normalize().toArray(r),r}}const yn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},ar={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},dp={9728:en,9729:fn,9984:hg,9985:Ea,9986:jr,9987:ri},fp={33071:Fi,33648:Va,10497:fr},Ec={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},lu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},wi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},_C={CUBICSPLINE:void 0,LINEAR:So,STEP:yo},Tc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function vC(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new Po({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:di})),n.DefaultMaterial}function ds(n,e,t){for(const i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function ii(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function xC(n,e,t){let i=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const f=e[c];if(f.POSITION!==void 0&&(i=!0),f.NORMAL!==void 0&&(s=!0),f.COLOR_0!==void 0&&(r=!0),i&&s&&r)break}if(!i&&!s&&!r)return Promise.resolve(n);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const f=e[c];if(i){const d=f.POSITION!==void 0?t.getDependency("accessor",f.POSITION):n.attributes.position;o.push(d)}if(s){const d=f.NORMAL!==void 0?t.getDependency("accessor",f.NORMAL):n.attributes.normal;a.push(d)}if(r){const d=f.COLOR_0!==void 0?t.getDependency("accessor",f.COLOR_0):n.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],f=c[1],d=c[2];return i&&(n.morphAttributes.position=u),s&&(n.morphAttributes.normal=f),r&&(n.morphAttributes.color=d),n.morphTargetsRelative=!0,n})}function yC(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function SC(n){let e;const t=n.extensions&&n.extensions[Je.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+wc(t.attributes):e=n.indices+":"+wc(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,s=n.targets.length;i<s;i++)e+=":"+wc(n.targets[i]);return e}function wc(n){let e="";const t=Object.keys(n).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+n[t[i]]+";";return e}function cu(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function MC(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const bC=new je;class EC{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new XR,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=!1,r=-1;typeof navigator<"u"&&(i=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,s=navigator.userAgent.indexOf("Firefox")>-1,r=s?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||i||s&&r<98?this.textureLoader=new $g(this.options.manager):this.textureLoader=new IR(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new jg(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:i,userData:{}};return ds(r,a,s),ii(a,s),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const s=i.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())r(u,a.children[c])};return r(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const s=e(t[i]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&i.push(r)}return i}getDependency(e,t){const i=e+":"+t;let s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Je.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){i.load(co.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const s=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+s)})}loadAccessor(e){const t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const o=Ec[s.type],a=ar[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new tn(c,o,l))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=Ec[s.type],c=ar[s.componentType],u=c.BYTES_PER_ELEMENT,f=u*l,d=s.byteOffset||0,h=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let _,p;if(h&&h!==f){const m=Math.floor(d/h),S="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+m+":"+s.count;let y=t.cache.get(S);y||(_=new c(a,m*h,s.count*h/u),y=new sR(_,h/u),t.cache.add(S,y)),p=new zu(y,l,d%h/u,g)}else a===null?_=new c(s.count*l):_=new c(a,d,s.count*l),p=new tn(_,l,g);if(s.sparse!==void 0){const m=Ec.SCALAR,S=ar[s.sparse.indices.componentType],y=s.sparse.indices.byteOffset||0,E=s.sparse.values.byteOffset||0,P=new S(o[1],y,s.sparse.count*m),R=new c(o[2],E,s.sparse.count*l);a!==null&&(p=new tn(p.array.slice(),p.itemSize,p.normalized));for(let A=0,C=P.length;A<C;A++){const b=P[A];if(p.setX(b,R[A*l]),l>=2&&p.setY(b,R[A*l+1]),l>=3&&p.setZ(b,R[A*l+2]),l>=4&&p.setW(b,R[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return p})}loadTexture(e){const t=this.json,i=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=i.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,i){const s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,i).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return u.magFilter=dp[d.magFilter]||fn,u.minFilter=dp[d.minFilter]||ri,u.wrapS=fp[d.wrapS]||fr,u.wrapT=fp[d.wrapT]||fr,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const i=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());const o=s.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=i.getDependency("bufferView",o.bufferView).then(function(f){c=!0;const d=new Blob([f],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(f){return new Promise(function(d,h){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){const p=new Ot(_);p.needsUpdate=!0,d(p)}),t.load(co.resolveURL(f,r.path),g,void 0,h)})}).then(function(f){return c===!0&&a.revokeObjectURL(l),ii(f,o),f.userData.mimeType=o.mimeType||MC(o.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),f});return this.sourceCache[e]=u,u}assignTexture(e,t,i,s){const r=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),r.extensions[Je.KHR_TEXTURE_TRANSFORM]){const a=i.extensions!==void 0?i.extensions[Je.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[Je.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new Wg,zn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(a,l)),i=l}else if(e.isLine){const a="LineBasicMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new Gg,zn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(a,l)),i=l}if(s||r||o){let a="ClonedMaterial:"+i.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=i.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return Po}loadMaterial(e){const t=this,i=this.json,s=this.extensions,r=i.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[Je.KHR_MATERIALS_UNLIT]){const f=s[Je.KHR_MATERIALS_UNLIT];o=f.getMaterialType(),c.push(f.extendParams(a,r,t))}else{const f=r.pbrMetallicRoughness||{};if(a.color=new We(1,1,1),a.opacity=1,Array.isArray(f.baseColorFactor)){const d=f.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Ht),a.opacity=d[3]}f.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",f.baseColorTexture,Jt)),a.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,a.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",f.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",f.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Fn);const u=r.alphaMode||Tc.OPAQUE;if(u===Tc.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Tc.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==vs&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Fe(1,1),r.normalTexture.scale!==void 0)){const f=r.normalTexture.scale;a.normalScale.set(f,f)}if(r.occlusionTexture!==void 0&&o!==vs&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==vs){const f=r.emissiveFactor;a.emissive=new We().setRGB(f[0],f[1],f[2],Ht)}return r.emissiveTexture!==void 0&&o!==vs&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Jt)),Promise.all(c).then(function(){const f=new o(a);return r.name&&(f.name=r.name),ii(f,r),t.associations.set(f,{materials:e}),r.extensions&&ds(s,f,r),f})}createUniqueName(e){const t=at.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,s=this.primitiveCache;function r(a){return i[Je.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return hp(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=SC(c),f=s[u];if(f)o.push(f.promise);else{let d;c.extensions&&c.extensions[Je.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=hp(new Xn,c,t),s[u]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,i=this.json,s=this.extensions,r=i.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?vC(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],f=[];for(let h=0,g=u.length;h<g;h++){const _=u[h],p=o[h];let m;const S=c[h];if(p.mode===yn.TRIANGLES||p.mode===yn.TRIANGLE_STRIP||p.mode===yn.TRIANGLE_FAN||p.mode===void 0)m=r.isSkinnedMesh===!0?new oR(_,S):new hn(_,S),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),p.mode===yn.TRIANGLE_STRIP?m.geometry=cp(m.geometry,Sg):p.mode===yn.TRIANGLE_FAN&&(m.geometry=cp(m.geometry,nu));else if(p.mode===yn.LINES)m=new uR(_,S);else if(p.mode===yn.LINE_STRIP)m=new Vu(_,S);else if(p.mode===yn.LINE_LOOP)m=new dR(_,S);else if(p.mode===yn.POINTS)m=new fR(_,S);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(m.geometry.morphAttributes).length>0&&yC(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),ii(m,r),p.extensions&&ds(s,m,p),t.assignFinalMaterial(m),f.push(m)}for(let h=0,g=f.length;h<g;h++)t.associations.set(f[h],{meshes:e,primitives:h});if(f.length===1)return r.extensions&&ds(s,f[0],r),f[0];const d=new Bi;r.extensions&&ds(s,d,r),t.associations.set(d,{meshes:e});for(let h=0,g=f.length;h<g;h++)d.add(f[h]);return d})}loadCamera(e){let t;const i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Qt(Eg.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new Bu(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),ii(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let s=0,r=t.joints.length;s<r;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){const r=s.pop(),o=s,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const f=o[c];if(f){a.push(f);const d=new je;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Hu(a,l)})}loadAnimation(e){const t=this.json,i=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let f=0,d=s.channels.length;f<d;f++){const h=s.channels[f],g=s.samplers[h.sampler],_=h.target,p=_.node,m=s.parameters!==void 0?s.parameters[g.input]:g.input,S=s.parameters!==void 0?s.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",p)),a.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",S)),c.push(g),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(f){const d=f[0],h=f[1],g=f[2],_=f[3],p=f[4],m=[];for(let S=0,y=d.length;S<y;S++){const E=d[S],P=h[S],R=g[S],A=_[S],C=p[S];if(E===void 0)continue;E.updateMatrix&&E.updateMatrix();const b=i._createAnimationTracks(E,P,R,A,C);if(b)for(let M=0;M<b.length;M++)m.push(b[M])}return new xR(r,void 0,m)})}createNodeMesh(e){const t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(r){const o=i._getNodeRef(i.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){const t=this.json,i=this,s=t.nodes[e],r=i._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,u=a.length;c<u;c++)o.push(i.getDependency("node",a[c]));const l=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const u=c[0],f=c[1],d=c[2];d!==null&&u.traverse(function(h){h.isSkinnedMesh&&h.bind(d,bC)});for(let h=0,g=f.length;h<g;h++)u.add(f[h]);return u})}_loadNodeShallow(e){const t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new Hg:c.length>1?u=new Bi:c.length===1?u=c[0]:u=new mt,u!==c[0])for(let f=0,d=c.length;f<d;f++)u.add(c[f]);if(r.name&&(u.userData.name=r.name,u.name=o),ii(u,r),r.extensions&&ds(i,u,r),r.matrix!==void 0){const f=new je;f.fromArray(r.matrix),u.applyMatrix4(f)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return s.associations.has(u)||s.associations.set(u,{}),s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],s=this,r=new Bi;i.name&&(r.name=s.createUniqueName(i.name)),ii(r,i),i.extensions&&ds(t,r,i);const o=i.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,f=l.length;u<f;u++)r.add(l[u]);const c=u=>{const f=new Map;for(const[d,h]of s.associations)(d instanceof zn||d instanceof Ot)&&f.set(d,h);return u.traverse(d=>{const h=s.associations.get(d);h!=null&&f.set(d,h)}),f};return s.associations=c(r),r})}_createAnimationTracks(e,t,i,s,r){const o=[],a=e.name?e.name:e.uuid,l=[];wi[r.path]===wi.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(wi[r.path]){case wi.weights:c=vr;break;case wi.rotation:c=xr;break;case wi.position:case wi.scale:c=yr;break;default:switch(i.itemSize){case 1:c=vr;break;case 2:case 3:default:c=yr;break}break}const u=s.interpolation!==void 0?_C[s.interpolation]:So,f=this._getArrayFromAccessor(i);for(let d=0,h=l.length;d<h;d++){const g=new c(l[d]+"."+wi[r.path],t.array,f,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=cu(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const s=this instanceof xr?gC:Zg;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function TC(n,e,t){const i=e.attributes,s=new pi;if(i.POSITION!==void 0){const a=t.json.accessors[i.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new k(l[0],l[1],l[2]),new k(c[0],c[1],c[2])),a.normalized){const u=cu(ar[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new k,l=new k;for(let c=0,u=r.length;c<u;c++){const f=r[c];if(f.POSITION!==void 0){const d=t.json.accessors[f.POSITION],h=d.min,g=d.max;if(h!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(h[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(h[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(h[2]),Math.abs(g[2]))),d.normalized){const _=cu(ar[d.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}n.boundingBox=s;const o=new qn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,n.boundingSphere=o}function hp(n,e,t){const i=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){n.setAttribute(a,l)})}for(const o in i){const a=lu[o]||o.toLowerCase();a in n.attributes||s.push(r(i[o],a))}if(e.indices!==void 0&&!n.index){const o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});s.push(o)}return it.workingColorSpace!==Ht&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${it.workingColorSpace}" not supported.`),ii(n,e),TC(n,e,t),Promise.all(s).then(function(){return e.targets!==void 0?xC(n,e.targets,t):n})}class wC extends hi{constructor(){super(),this.setWidth(),this.setHeight(),this.pixelRatio=Math.min(window.devicePixelRatio,2),window.addEventListener("resize",()=>{this.setWidth(),this.setHeight(),this.pixelRatio=Math.min(window.devicePixelRatio,2),this.dispatchEvent({type:"resize",message:"Screen Resized!"})})}setWidth(){this.width=window.innerWidth}setHeight(){this.height=window.innerHeight}}class AC extends hi{constructor(){super(),this.start=Date.now(),this.current=this.start,this.elapsed=0,this.delta=16,this.playing=!0,window.requestAnimationFrame(()=>{this.tick()})}tick(){const e=Date.now();this.delta=e-this.current,this.current=e,this.elapsed=this.current-this.start,this.dispatchEvent({type:"tick",message:"Tick occured!"}),window.requestAnimationFrame(()=>{this.playing&&this.tick()})}pause(){this.playing=!1}play(){this.playing=!0,window.requestAnimationFrame(()=>{this.tick()})}}class pp{constructor(){this.position=new k(0,0,0),this.fov=60,this.near=1,this.far=150,this.experience=new Yi,this.sizes=this.experience.sizes,this.scene=this.experience.scene,this.canvas=this.experience.canvas,this.setInstance(),this.instance.position.set(0,0,0),this.setOrbitControls()}setInstance(){this.instance=new Qt(this.fov,this.sizes.width/this.sizes.height,this.near,this.far),this.scene.add(this.instance)}setOrbitControls(){this.controls&&this.controls.dispose(),this.controls=new WR(this.instance,this.canvas),this.controls.enableDamping=!0,this.controls.minDistance=1,this.controls.maxDistance=5,this.controls.minPolarAngle=Math.PI*.4,this.controls.maxPolarAngle=Math.PI*.6,this.controls.minAzimuthAngle=Math.PI*-.2,this.controls.maxAzimuthAngle=Math.PI*.2}setProjectsView(){this.controls.dispose(),this.controls=null,this.instance.position.set(-6,0,-2),this.instance.lookAt(-6,0,-3),this.view="Projects"}setBaseView(){this.instance.position.set(0,0,0),this.instance.lookAt(0,1,0),this.setOrbitControls(),this.view=null}update(){this.controls&&this.controls.update()}resize(){this.instance.aspect=this.sizes.width/this.sizes.height,this.instance.updateProjectionMatrix()}}class mp{constructor(){this.backgroundColor="#ebebeb",this.experience=new Yi,this.sizes=this.experience.sizes,this.scene=this.experience.scene,this.canvas=this.experience.canvas,this.camera=this.experience.camera,this.counter=1,this.setInstance()}setInstance(){this.instance=new nR({canvas:this.canvas,antialias:!0}),this.instance.toneMapping=dg,this.instance.toneMappingExposure=1.75,this.instance.setClearColor(this.backgroundColor),this.instance.setSize(this.sizes.width,this.sizes.height),this.instance.setPixelRatio(this.sizes.pixelRatio),this.instance.shadowMap.enabled=!0}resize(){this.instance.setSize(this.sizes.width,this.sizes.height),this.instance.setPixelRatio(this.sizes.pixelRatio)}update(){this.instance.render(this.scene,this.camera.instance)}}class RC{constructor(){this.modelPath="models/desk.gltf",this.experience=new Yi,this.scene=this.experience.scene,this.gltfLoader=this.experience.gltfLoader,this.textureLoader=this.experience.textureLoader,this.setGeometry(),this.setMaterial(),this.setInstance()}setGeometry(){this.geometry=new Rs(8,1,2)}setMaterial(){const e=this.textureLoader.load("textures/tableTexture.png");this.material=new Po({map:e}),console.log("loading")}setInstance(){this.gltfLoader.load(this.modelPath,e=>{this.instance=e.scene,this.instance.position.y=-5,this.instance.position.z=-7,this.scene.add(this.instance),this.startText=this.instance.getObjectByName("StartText"),this.startText.visible=!1,this.projectText=this.instance.getObjectByName("ProjectText")},e=>{console.log(e)})}dispose(){this.instance&&this.scene.remove(this.instance)}}class CC{constructor(){this.experience=new Yi,this.scene=this.experience.scene,this.ambientLight=this.newAmbientLight(),this.topLight=this.newDirectionLight(new k(0,2,4))}newAmbientLight(){const e=new LR("#ffffff",.5);return this.scene.add(e),e}newDirectionLight(e){const t=new Kg("#fffff2",2);return t.position.add(e),this.scene.add(t),t}dispose(){this.scene.remove(this.ambientLight),this.scene.remove(this.topLight)}}class PC{constructor(e,t){this.experience=new Yi,this.scene=this.experience.scene,this.gltfLoader=this.experience.gltfLoader,this.textureloader=this.experience.textureLoader,this.world=this.experience.world,console.log(this.world),this.number=e,this.group=t,this.setInstance()}setGeometry(){this.geometry=new Rs(.4,2.6,2)}setMaterial(){this.material=new Po({color:"#ffffff"})}setInstance(){this.gltfLoader.load("models/project.gltf",e=>{this.instance=e.scene,this.group.add(this.instance)})}}class LC{constructor(){this.experience=new Yi,this.scene=this.experience.scene,this.setup()}dispose(){this.scene.remove(this.projectsGroup),this.table.dispose(),this.lighting.dispose()}setup(){this.table=new RC,this.lighting=new CC,this.projectsGroup=new Bi,this.scene.add(this.projectsGroup),this.projectsGroup.position.set(-9,-.2,-9.4),this.project0=new PC(0,this.projectsGroup)}}class gp{constructor(){this.experience=new Yi,this.canvas=this.experience.canvas,this.scene=this.experience.scene,this.sizes=this.experience.sizes,this.camera=this.experience.camera,this.world=this.experience.world,this.position=new Fe,this.raycaster=new VR,this.handleMouseMove=e=>{console.log("move"),this.position.x=e.clientX/this.sizes.width*2-1,this.position.y=-(e.clientY/this.sizes.height)*2+1,this.raycaster.setFromCamera(this.position,this.camera.instance),this.intersectObjects=this.raycaster.intersectObjects(this.scene.children,!0),this.intersectObjects.length>0&&(this.intersectObjects[0].object.name.includes("Project")?(this.world.table.projectText.material.color.set("#12e8c0"),this.currentHighlight="Projects"):(this.world.table.instance&&this.camera.view!="Projects"&&this.world.table.projectText.material.color.set("#ffffff"),this.currentHighlight=null))},this.handlePointerDown=e=>{this.currentHighlight==="Projects"?this.camera.setProjectsView():this.camera.view!=null&&(console.log(this.camera.view),this.camera.setBaseView(),this.world.table.projectText.material.color.set("#ffffff")),this.intersectObjects[0].object},this.addEvents()}addEvents(){window.addEventListener("mousemove",this.handleMouseMove),window.addEventListener("pointerdown",this.handlePointerDown)}removeEvents(){window.removeEventListener("mousemove",this.handleMouseMove),window.removeEventListener("pointerdown",this.handlePointerDown)}}let Ac=null;class Yi{constructor(e){if(Ac)return Ac;Ac=this,window.experience=this,this.canvas=e,this.textureLoader=new $g,this.gltfLoader=new qR,this.sizes=new wC,this.time=new AC,this.scene=new iR,this.camera=new pp,this.renderer=new mp,this.world=new LC,this.cursor=new gp,this.time.addEventListener("tick",t=>{this.update()}),this.sizes.addEventListener("resize",t=>{this.resize()}),window.addEventListener("mousemove",this.cursor.handleMouseMove),window.addEventListener("pointerdown",this.cursor.handlePointerDown)}resize(){this.camera.resize(),this.renderer.resize()}update(){this.renderer.update(),this.camera.update()}pause(){this.time.pause(),this.camera.controls.dispose(),this.renderer.instance.dispose(),this.world.dispose(),this.cursor.removeEvents()}play(e){this.canvas=e,this.time.play(),this.camera=new pp,this.renderer=new mp,this.world.setup(),this.cursor=new gp}}const IC={id:"webgl",class:"fixed-top"},DC={__name:"ThreeEnvironment",setup(n){return As(()=>{const e=document.querySelector("canvas#webgl");window.experience?window.experience.play(e):new Yi(e)}),ol(()=>{window.experience.pause()}),(e,t)=>(yt(),Dt("canvas",IC))}},NC={key:0},UC={key:1,class:"q-pa-none q-ma-none"},OC={key:2},FC=["src"],BC={__name:"App",setup(n){const e=Tr();let t=ut("./images/logo.png");function i(){window.innerWidth<1200?(e.mobile=!0,e.siteMode="2D"):e.mobile=!1}return window.addEventListener("resize",()=>{console.log(window.innerWidth),i()}),i(),(s,r)=>(yt(),Dt(nn,null,[ct(e).siteMode==="2D"?(yt(),Dt("main",NC,[Le(AS,{class:"content"})])):ct(e).siteMode==="3D"?(yt(),Dt("main",UC,[Le(DC)])):(yt(),Dt("main",OC,[Le(H0)])),ct(e).mobile?Qv("",!0):(yt(),Dt("div",{key:3,id:"logo",class:"fixed-top z-top shadow-5",onClick:r[2]||(r[2]=o=>ct(e).siteMode=null)},[Ye("img",{src:ct(t),alt:"Logo",onMouseenter:r[0]||(r[0]=o=>St(t)?t.value="/images/highlightedLogo.png":t="/images/highlightedLogo.png"),onMouseleave:r[1]||(r[1]=o=>St(t)?t.value="/images/logo.png":t="/images/logo.png")},null,40,FC)]))],64))}},kC=Ki(BC,[["__scopeId","data-v-de526b0e"]]);function zC(n,e=250,t){let i=null;function s(){const r=arguments,o=()=>{i=null,n.apply(this,r)};i!==null&&clearTimeout(i),i=setTimeout(o,e)}return s.cancel=()=>{i!==null&&clearTimeout(i)},s}const Rc=["sm","md","lg","xl"],{passive:_p}=kt,HC=ul({width:0,height:0,name:"xs",sizes:{sm:600,md:1024,lg:1440,xl:1920},lt:{sm:!0,md:!0,lg:!0,xl:!0},gt:{xs:!1,sm:!1,md:!1,lg:!1},xs:!0,sm:!1,md:!1,lg:!1,xl:!1},{setSizes:lr,setDebounce:lr,install({$q:n,onSSRHydrated:e}){if(n.screen=this,this.__installed===!0){n.config.screen!==void 0&&(n.config.screen.bodyClasses===!1?document.body.classList.remove(`screen--${this.name}`):this.__update(!0));return}const{visualViewport:t}=window,i=t||window,s=document.scrollingElement||document.documentElement,r=t===void 0||pt.is.mobile===!0?()=>[Math.max(window.innerWidth,s.clientWidth),Math.max(window.innerHeight,s.clientHeight)]:()=>[t.width*t.scale+window.innerWidth-s.clientWidth,t.height*t.scale+window.innerHeight-s.clientHeight],o=n.config.screen!==void 0&&n.config.screen.bodyClasses===!0;this.__update=f=>{const[d,h]=r();if(h!==this.height&&(this.height=h),d!==this.width)this.width=d;else if(f!==!0)return;let g=this.sizes;this.gt.xs=d>=g.sm,this.gt.sm=d>=g.md,this.gt.md=d>=g.lg,this.gt.lg=d>=g.xl,this.lt.sm=d<g.sm,this.lt.md=d<g.md,this.lt.lg=d<g.lg,this.lt.xl=d<g.xl,this.xs=this.lt.sm,this.sm=this.gt.xs===!0&&this.lt.md===!0,this.md=this.gt.sm===!0&&this.lt.lg===!0,this.lg=this.gt.md===!0&&this.lt.xl===!0,this.xl=this.gt.lg,g=this.xs===!0&&"xs"||this.sm===!0&&"sm"||this.md===!0&&"md"||this.lg===!0&&"lg"||"xl",g!==this.name&&(o===!0&&(document.body.classList.remove(`screen--${this.name}`),document.body.classList.add(`screen--${g}`)),this.name=g)};let a,l={},c=16;this.setSizes=f=>{Rc.forEach(d=>{f[d]!==void 0&&(l[d]=f[d])})},this.setDebounce=f=>{c=f};const u=()=>{const f=getComputedStyle(document.body);f.getPropertyValue("--q-size-sm")&&Rc.forEach(d=>{this.sizes[d]=parseInt(f.getPropertyValue(`--q-size-${d}`),10)}),this.setSizes=d=>{Rc.forEach(h=>{d[h]&&(this.sizes[h]=d[h])}),this.__update(!0)},this.setDebounce=d=>{a!==void 0&&i.removeEventListener("resize",a,_p),a=d>0?zC(this.__update,d):this.__update,i.addEventListener("resize",a,_p)},this.setDebounce(c),Object.keys(l).length!==0?(this.setSizes(l),l=void 0):this.__update(),o===!0&&this.name==="xs"&&document.body.classList.add("screen--xs")};Vn.value===!0?e.push(u):u()}}),Wt=ul({isActive:!1,mode:!1},{__media:void 0,set(n){Wt.mode=n,n==="auto"?(Wt.__media===void 0&&(Wt.__media=window.matchMedia("(prefers-color-scheme: dark)"),Wt.__updateMedia=()=>{Wt.set("auto")},Wt.__media.addListener(Wt.__updateMedia)),n=Wt.__media.matches):Wt.__media!==void 0&&(Wt.__media.removeListener(Wt.__updateMedia),Wt.__media=void 0),Wt.isActive=n===!0,document.body.classList.remove(`body--${n===!0?"light":"dark"}`),document.body.classList.add(`body--${n===!0?"dark":"light"}`)},toggle(){Wt.set(Wt.isActive===!1)},install({$q:n,ssrContext:e}){const{dark:t}=n.config;n.dark=this,this.__installed!==!0&&this.set(t!==void 0?t:!1)}});function VC(n,e,t=document.body){if(typeof n!="string")throw new TypeError("Expected a string as propName");if(typeof e!="string")throw new TypeError("Expected a string as value");if(!(t instanceof Element))throw new TypeError("Expected a DOM element");t.style.setProperty(`--q-${n}`,e)}function Jg(n){if(n.ios===!0)return"ios";if(n.android===!0)return"android"}function GC({is:n,has:e,within:t},i){const s=[n.desktop===!0?"desktop":"mobile",`${e.touch===!1?"no-":""}touch`];if(n.mobile===!0){const r=Jg(n);r!==void 0&&s.push("platform-"+r)}if(n.nativeMobile===!0){const r=n.nativeMobileWrapper;s.push(r),s.push("native-mobile"),n.ios===!0&&(i[r]===void 0||i[r].iosStatusBarPadding!==!1)&&s.push("q-ios-padding")}else n.electron===!0?s.push("electron"):n.bex===!0&&s.push("bex");return t.iframe===!0&&s.push("within-iframe"),s}function WC(){const{is:n}=pt,e=document.body.className,t=new Set(e.replace(/ {2}/g," ").split(" "));if(n.nativeMobile!==!0&&n.electron!==!0&&n.bex!==!0){if(n.desktop===!0)t.delete("mobile"),t.delete("platform-ios"),t.delete("platform-android"),t.add("desktop");else if(n.mobile===!0){t.delete("desktop"),t.add("mobile"),t.delete("platform-ios"),t.delete("platform-android");const s=Jg(n);s!==void 0&&t.add(`platform-${s}`)}}pt.has.touch===!0&&(t.delete("no-touch"),t.add("touch")),pt.within.iframe===!0&&t.add("within-iframe");const i=Array.from(t).join(" ");e!==i&&(document.body.className=i)}function qC(n){for(const e in n)VC(e,n[e])}const XC={install(n){if(this.__installed!==!0){if(Vn.value===!0)WC();else{const{$q:e}=n;e.config.brand!==void 0&&qC(e.config.brand);const t=GC(pt,e.config);document.body.classList.add.apply(document.body.classList,t)}pt.is.ios===!0&&document.body.addEventListener("touchstart",lr),window.addEventListener("keydown",r0,!0)}}},vp={isoName:"en-US",nativeName:"English (US)",label:{clear:"Clear",ok:"OK",cancel:"Cancel",close:"Close",set:"Set",select:"Select",reset:"Reset",remove:"Remove",update:"Update",create:"Create",search:"Search",filter:"Filter",refresh:"Refresh",expand:n=>n?`Expand "${n}"`:"Expand",collapse:n=>n?`Collapse "${n}"`:"Collapse"},date:{days:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),daysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),firstDayOfWeek:0,format24h:!1,pluralDay:"days"},table:{noData:"No data available",noResults:"No matching records found",loading:"Loading...",selectedRecords:n=>n===1?"1 record selected.":(n===0?"No":n)+" records selected.",recordsPerPage:"Records per page:",allRows:"All",pagination:(n,e,t)=>n+"-"+e+" of "+t,columns:"Columns"},editor:{url:"URL",bold:"Bold",italic:"Italic",strikethrough:"Strikethrough",underline:"Underline",unorderedList:"Unordered List",orderedList:"Ordered List",subscript:"Subscript",superscript:"Superscript",hyperlink:"Hyperlink",toggleFullscreen:"Toggle Fullscreen",quote:"Quote",left:"Left align",center:"Center align",right:"Right align",justify:"Justify align",print:"Print",outdent:"Decrease indentation",indent:"Increase indentation",removeFormat:"Remove formatting",formatting:"Formatting",fontSize:"Font Size",align:"Align",hr:"Insert Horizontal Rule",undo:"Undo",redo:"Redo",heading1:"Heading 1",heading2:"Heading 2",heading3:"Heading 3",heading4:"Heading 4",heading5:"Heading 5",heading6:"Heading 6",paragraph:"Paragraph",code:"Code",size1:"Very small",size2:"A bit small",size3:"Normal",size4:"Medium-large",size5:"Big",size6:"Very big",size7:"Maximum",defaultFont:"Default Font",viewSource:"View Source"},tree:{noNodes:"No nodes available",noResults:"No matching nodes found"}};function xp(){const n=Array.isArray(navigator.languages)===!0&&navigator.languages.length!==0?navigator.languages[0]:navigator.language;if(typeof n=="string")return n.split(/[-_]/).map((e,t)=>t===0?e.toLowerCase():t>1||e.length<4?e.toUpperCase():e[0].toUpperCase()+e.slice(1).toLowerCase()).join("-")}const Di=ul({__qLang:{}},{getLocale:xp,set(n=vp,e){const t={...n,rtl:n.rtl===!0,getLocale:xp};{if(t.set=Di.set,Di.__langConfig===void 0||Di.__langConfig.noHtmlAttrs!==!0){const i=document.documentElement;i.setAttribute("dir",t.rtl===!0?"rtl":"ltr"),i.setAttribute("lang",t.isoName)}Object.assign(Di.__qLang,t)}},install({$q:n,lang:e,ssrContext:t}){n.lang=Di.__qLang,Di.__langConfig=n.config.lang,this.__installed===!0?e!==void 0&&this.set(e):(this.props=new Proxy(this.__qLang,{get(){return Reflect.get(...arguments)},ownKeys(i){return Reflect.ownKeys(i).filter(s=>s!=="set"&&s!=="getLocale")}}),this.set(e||vp))}}),jC={name:"material-icons",type:{positive:"check_circle",negative:"warning",info:"info",warning:"priority_high"},arrow:{up:"arrow_upward",right:"arrow_forward",down:"arrow_downward",left:"arrow_back",dropdown:"arrow_drop_down"},chevron:{left:"chevron_left",right:"chevron_right"},colorPicker:{spectrum:"gradient",tune:"tune",palette:"style"},pullToRefresh:{icon:"refresh"},carousel:{left:"chevron_left",right:"chevron_right",up:"keyboard_arrow_up",down:"keyboard_arrow_down",navigationIcon:"lens"},chip:{remove:"cancel",selected:"check"},datetime:{arrowLeft:"chevron_left",arrowRight:"chevron_right",now:"access_time",today:"today"},editor:{bold:"format_bold",italic:"format_italic",strikethrough:"strikethrough_s",underline:"format_underlined",unorderedList:"format_list_bulleted",orderedList:"format_list_numbered",subscript:"vertical_align_bottom",superscript:"vertical_align_top",hyperlink:"link",toggleFullscreen:"fullscreen",quote:"format_quote",left:"format_align_left",center:"format_align_center",right:"format_align_right",justify:"format_align_justify",print:"print",outdent:"format_indent_decrease",indent:"format_indent_increase",removeFormat:"format_clear",formatting:"text_format",fontSize:"format_size",align:"format_align_left",hr:"remove",undo:"undo",redo:"redo",heading:"format_size",code:"code",size:"format_size",font:"font_download",viewSource:"code"},expansionItem:{icon:"keyboard_arrow_down",denseIcon:"arrow_drop_down"},fab:{icon:"add",activeIcon:"close"},field:{clear:"cancel",error:"error"},pagination:{first:"first_page",prev:"keyboard_arrow_left",next:"keyboard_arrow_right",last:"last_page"},rating:{icon:"grade"},stepper:{done:"check",active:"edit",error:"warning"},tabs:{left:"chevron_left",right:"chevron_right",up:"keyboard_arrow_up",down:"keyboard_arrow_down"},table:{arrowUp:"arrow_upward",warning:"warning",firstPage:"first_page",prevPage:"chevron_left",nextPage:"chevron_right",lastPage:"last_page"},tree:{icon:"play_arrow"},uploader:{done:"done",clear:"clear",add:"add_box",upload:"cloud_upload",removeQueue:"clear_all",removeUploaded:"done_all"}},Ya=ul({iconMapFn:null,__qIconSet:{}},{set(n,e){const t={...n};t.set=Ya.set,Object.assign(Ya.__qIconSet,t)},install({$q:n,iconSet:e,ssrContext:t}){n.config.iconMapFn!==void 0&&(this.iconMapFn=n.config.iconMapFn),n.iconSet=this.__qIconSet,Ao(n,"iconMapFn",()=>this.iconMapFn,i=>{this.iconMapFn=i}),this.__installed===!0?e!==void 0&&this.set(e):(this.props=new Proxy(this.__qIconSet,{get(){return Reflect.get(...arguments)},ownKeys(i){return Reflect.ownKeys(i).filter(s=>s!=="set")}}),this.set(e||jC))}}),$C="_q_",yp=[Na,XC,Wt,HC,Kc,Di,Ya];function Sp(n,e){e.forEach(t=>{t.install(n),t.__installed=!0})}function KC(n,e,t){n.config.globalProperties.$q=t.$q,n.provide($C,t.$q),Sp(t,yp),e.components!==void 0&&Object.values(e.components).forEach(i=>{of(i)===!0&&i.name!==void 0&&n.component(i.name,i)}),e.directives!==void 0&&Object.values(e.directives).forEach(i=>{of(i)===!0&&i.name!==void 0&&n.directive(i.name,i)}),e.plugins!==void 0&&Sp(t,Object.values(e.plugins).filter(i=>typeof i.install=="function"&&yp.includes(i)===!1)),Vn.value===!0&&(t.$q.onSSRHydrated=()=>{t.onSSRHydrated.forEach(i=>{i()}),t.$q.onSSRHydrated=()=>{}})}const YC=function(n,e={}){const t={version:"2.16.4"};Jm===!1?(e.config!==void 0&&Object.assign(Oa,e.config),t.config={...Oa},cy()):t.config=e.config||{},KC(n,e,{parentApp:n,$q:t,lang:e.lang,iconSet:e.iconSet,onSSRHydrated:[]})},ZC={name:"Quasar",version:"2.16.4",install:YC,lang:Di,iconSet:Ya},Xu=Bx(kC),JC=A0();Xu.use(JC);Xu.use(ZC,{plugins:{}});Xu.mount("#app");
