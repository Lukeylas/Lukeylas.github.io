(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
* @vue/shared v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Yc(n,e){const t=new Set(n.split(","));return i=>t.has(i)}const ft={},Zs=[],Sn=()=>{},wg=()=>!1,Ba=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Zc=n=>n.startsWith("onUpdate:"),Tt=Object.assign,Jc=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Rg=Object.prototype.hasOwnProperty,et=(n,e)=>Rg.call(n,e),Be=Array.isArray,Xr=n=>go(n)==="[object Map]",Cg=n=>go(n)==="[object Set]",Pg=n=>go(n)==="[object RegExp]",Xe=n=>typeof n=="function",At=n=>typeof n=="string",mo=n=>typeof n=="symbol",vt=n=>n!==null&&typeof n=="object",lp=n=>(vt(n)||Xe(n))&&Xe(n.then)&&Xe(n.catch),Lg=Object.prototype.toString,go=n=>Lg.call(n),Ig=n=>go(n).slice(8,-1),Dg=n=>go(n)==="[object Object]",Qc=n=>At(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,qr=Yc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ka=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Ng=/-(\w)/g,zn=ka(n=>n.replace(Ng,(e,t)=>t?t.toUpperCase():"")),Ug=/\B([A-Z])/g,vr=ka(n=>n.replace(Ug,"-$1").toLowerCase()),za=ka(n=>n.charAt(0).toUpperCase()+n.slice(1)),cl=ka(n=>n?`on${za(n)}`:""),Vi=(n,e)=>!Object.is(n,e),jr=(n,e)=>{for(let t=0;t<n.length;t++)n[t](e)},cp=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},Og=n=>{const e=parseFloat(n);return isNaN(e)?n:e},Fg=n=>{const e=At(n)?Number(n):NaN;return isNaN(e)?n:e};let Bu;const up=()=>Bu||(Bu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function eu(n){if(Be(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=At(i)?Hg(i):eu(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(At(n)||vt(n))return n}const Bg=/;(?![^(]*\))/g,kg=/:([^]+)/,zg=/\/\*[^]*?\*\//g;function Hg(n){const e={};return n.replace(zg,"").split(Bg).forEach(t=>{if(t){const i=t.split(kg);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Ht(n){let e="";if(At(n))e=n;else if(Be(n))for(let t=0;t<n.length;t++){const i=Ht(n[t]);i&&(e+=i+" ")}else if(vt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Vg="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Gg=Yc(Vg);function dp(n){return!!n||n===""}/**
* @vue/reactivity v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let fn;class fp{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=fn,!e&&fn&&(this.index=(fn.scopes||(fn.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=fn;try{return fn=this,e()}finally{fn=t}}}on(){fn=this}off(){fn=this.parent}stop(e){if(this._active){let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function hp(n){return new fp(n)}function Wg(n,e=fn){e&&e.active&&e.effects.push(n)}function pp(){return fn}function Xg(n){fn&&fn.cleanups.push(n)}let _s;class tu{constructor(e,t,i,s){this.fn=e,this.trigger=t,this.scheduler=i,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Wg(this,s)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,qi();for(let e=0;e<this._depsLength;e++){const t=this.deps[e];if(t.computed&&(qg(t.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),ji()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=Bi,t=_s;try{return Bi=!0,_s=this,this._runnings++,ku(this),this.fn()}finally{zu(this),this._runnings--,_s=t,Bi=e}}stop(){this.active&&(ku(this),zu(this),this.onStop&&this.onStop(),this.active=!1)}}function qg(n){return n.value}function ku(n){n._trackId++,n._depsLength=0}function zu(n){if(n.deps.length>n._depsLength){for(let e=n._depsLength;e<n.deps.length;e++)mp(n.deps[e],n);n.deps.length=n._depsLength}}function mp(n,e){const t=n.get(e);t!==void 0&&e._trackId!==t&&(n.delete(e),n.size===0&&n.cleanup())}let Bi=!0,gc=0;const gp=[];function qi(){gp.push(Bi),Bi=!1}function ji(){const n=gp.pop();Bi=n===void 0?!0:n}function nu(){gc++}function iu(){for(gc--;!gc&&_c.length;)_c.shift()()}function _p(n,e,t){if(e.get(n)!==n._trackId){e.set(n,n._trackId);const i=n.deps[n._depsLength];i!==e?(i&&mp(i,n),n.deps[n._depsLength++]=e):n._depsLength++}}const _c=[];function vp(n,e,t){nu();for(const i of n.keys()){let s;i._dirtyLevel<e&&(s??(s=n.get(i)===i._trackId))&&(i._shouldSchedule||(i._shouldSchedule=i._dirtyLevel===0),i._dirtyLevel=e),i._shouldSchedule&&(s??(s=n.get(i)===i._trackId))&&(i.trigger(),(!i._runnings||i.allowRecurse)&&i._dirtyLevel!==2&&(i._shouldSchedule=!1,i.scheduler&&_c.push(i.scheduler)))}iu()}const xp=(n,e)=>{const t=new Map;return t.cleanup=n,t.computed=e,t},va=new WeakMap,vs=Symbol(""),vc=Symbol("");function rn(n,e,t){if(Bi&&_s){let i=va.get(n);i||va.set(n,i=new Map);let s=i.get(t);s||i.set(t,s=xp(()=>i.delete(t))),_p(_s,s)}}function ri(n,e,t,i,s,r){const o=va.get(n);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&Be(n)){const l=Number(i);o.forEach((c,u)=>{(u==="length"||!mo(u)&&u>=l)&&a.push(c)})}else switch(t!==void 0&&a.push(o.get(t)),e){case"add":Be(n)?Qc(t)&&a.push(o.get("length")):(a.push(o.get(vs)),Xr(n)&&a.push(o.get(vc)));break;case"delete":Be(n)||(a.push(o.get(vs)),Xr(n)&&a.push(o.get(vc)));break;case"set":Xr(n)&&a.push(o.get(vs));break}nu();for(const l of a)l&&vp(l,4);iu()}function jg(n,e){const t=va.get(n);return t&&t.get(e)}const $g=Yc("__proto__,__v_isRef,__isVue"),yp=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(mo)),Hu=Kg();function Kg(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const i=tt(this);for(let r=0,o=this.length;r<o;r++)rn(i,"get",r+"");const s=i[e](...t);return s===-1||s===!1?i[e](...t.map(tt)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){qi(),nu();const i=tt(this)[e].apply(this,t);return iu(),ji(),i}}),n}function Yg(n){mo(n)||(n=String(n));const e=tt(this);return rn(e,"has",n),e.hasOwnProperty(n)}class Sp{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?c_:Tp:r?Ep:bp).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Be(e);if(!s){if(o&&et(Hu,t))return Reflect.get(Hu,t,i);if(t==="hasOwnProperty")return Yg}const a=Reflect.get(e,t,i);return(mo(t)?yp.has(t):$g(t))||(s||rn(e,"get",t),r)?a:yt(a)?o&&Qc(t)?a:a.value:vt(a)?s?Ap(a):xr(a):a}}class Mp extends Sp{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];if(!this._isShallow){const l=so(r);if(!xa(i)&&!so(i)&&(r=tt(r),i=tt(i)),!Be(e)&&yt(r)&&!yt(i))return l?!1:(r.value=i,!0)}const o=Be(e)&&Qc(t)?Number(t)<e.length:et(e,t),a=Reflect.set(e,t,i,s);return e===tt(s)&&(o?Vi(i,r)&&ri(e,"set",t,i):ri(e,"add",t,i)),a}deleteProperty(e,t){const i=et(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&ri(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!mo(t)||!yp.has(t))&&rn(e,"has",t),i}ownKeys(e){return rn(e,"iterate",Be(e)?"length":vs),Reflect.ownKeys(e)}}class Zg extends Sp{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Jg=new Mp,Qg=new Zg,e_=new Mp(!0);const su=n=>n,Ha=n=>Reflect.getPrototypeOf(n);function Ao(n,e,t=!1,i=!1){n=n.__v_raw;const s=tt(n),r=tt(e);t||(Vi(e,r)&&rn(s,"get",e),rn(s,"get",r));const{has:o}=Ha(s),a=i?su:t?au:ro;if(o.call(s,e))return a(n.get(e));if(o.call(s,r))return a(n.get(r));n!==s&&n.get(e)}function wo(n,e=!1){const t=this.__v_raw,i=tt(t),s=tt(n);return e||(Vi(n,s)&&rn(i,"has",n),rn(i,"has",s)),n===s?t.has(n):t.has(n)||t.has(s)}function Ro(n,e=!1){return n=n.__v_raw,!e&&rn(tt(n),"iterate",vs),Reflect.get(n,"size",n)}function Vu(n){n=tt(n);const e=tt(this);return Ha(e).has.call(e,n)||(e.add(n),ri(e,"add",n,n)),this}function Gu(n,e){e=tt(e);const t=tt(this),{has:i,get:s}=Ha(t);let r=i.call(t,n);r||(n=tt(n),r=i.call(t,n));const o=s.call(t,n);return t.set(n,e),r?Vi(e,o)&&ri(t,"set",n,e):ri(t,"add",n,e),this}function Wu(n){const e=tt(this),{has:t,get:i}=Ha(e);let s=t.call(e,n);s||(n=tt(n),s=t.call(e,n)),i&&i.call(e,n);const r=e.delete(n);return s&&ri(e,"delete",n,void 0),r}function Xu(){const n=tt(this),e=n.size!==0,t=n.clear();return e&&ri(n,"clear",void 0,void 0),t}function Co(n,e){return function(i,s){const r=this,o=r.__v_raw,a=tt(o),l=e?su:n?au:ro;return!n&&rn(a,"iterate",vs),o.forEach((c,u)=>i.call(s,l(c),l(u),r))}}function Po(n,e,t){return function(...i){const s=this.__v_raw,r=tt(s),o=Xr(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),u=t?su:e?au:ro;return!e&&rn(r,"iterate",l?vc:vs),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:a?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function mi(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function t_(){const n={get(r){return Ao(this,r)},get size(){return Ro(this)},has:wo,add:Vu,set:Gu,delete:Wu,clear:Xu,forEach:Co(!1,!1)},e={get(r){return Ao(this,r,!1,!0)},get size(){return Ro(this)},has:wo,add:Vu,set:Gu,delete:Wu,clear:Xu,forEach:Co(!1,!0)},t={get(r){return Ao(this,r,!0)},get size(){return Ro(this,!0)},has(r){return wo.call(this,r,!0)},add:mi("add"),set:mi("set"),delete:mi("delete"),clear:mi("clear"),forEach:Co(!0,!1)},i={get(r){return Ao(this,r,!0,!0)},get size(){return Ro(this,!0)},has(r){return wo.call(this,r,!0)},add:mi("add"),set:mi("set"),delete:mi("delete"),clear:mi("clear"),forEach:Co(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=Po(r,!1,!1),t[r]=Po(r,!0,!1),e[r]=Po(r,!1,!0),i[r]=Po(r,!0,!0)}),[n,t,e,i]}const[n_,i_,s_,r_]=t_();function ru(n,e){const t=e?n?r_:s_:n?i_:n_;return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(et(t,s)&&s in i?t:i,s,r)}const o_={get:ru(!1,!1)},a_={get:ru(!1,!0)},l_={get:ru(!0,!1)};const bp=new WeakMap,Ep=new WeakMap,Tp=new WeakMap,c_=new WeakMap;function u_(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function d_(n){return n.__v_skip||!Object.isExtensible(n)?0:u_(Ig(n))}function xr(n){return so(n)?n:ou(n,!1,Jg,o_,bp)}function f_(n){return ou(n,!1,e_,a_,Ep)}function Ap(n){return ou(n,!0,Qg,l_,Tp)}function ou(n,e,t,i,s){if(!vt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const r=s.get(n);if(r)return r;const o=d_(n);if(o===0)return n;const a=new Proxy(n,o===2?i:t);return s.set(n,a),a}function xs(n){return so(n)?xs(n.__v_raw):!!(n&&n.__v_isReactive)}function so(n){return!!(n&&n.__v_isReadonly)}function xa(n){return!!(n&&n.__v_isShallow)}function wp(n){return n?!!n.__v_raw:!1}function tt(n){const e=n&&n.__v_raw;return e?tt(e):n}function _o(n){return Object.isExtensible(n)&&cp(n,"__v_skip",!0),n}const ro=n=>vt(n)?xr(n):n,au=n=>vt(n)?Ap(n):n;class Rp{constructor(e,t,i,s){this.getter=e,this._setter=t,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new tu(()=>e(this._value),()=>da(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=i}get value(){const e=tt(this);return(!e._cacheable||e.effect.dirty)&&Vi(e._value,e._value=e.effect.run())&&da(e,4),Cp(e),e.effect._dirtyLevel>=2&&da(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function h_(n,e,t=!1){let i,s;const r=Xe(n);return r?(i=n,s=Sn):(i=n.get,s=n.set),new Rp(i,s,r||!s,t)}function Cp(n){var e;Bi&&_s&&(n=tt(n),_p(_s,(e=n.dep)!=null?e:n.dep=xp(()=>n.dep=void 0,n instanceof Rp?n:void 0)))}function da(n,e=4,t){n=tt(n);const i=n.dep;i&&vp(i,e)}function yt(n){return!!(n&&n.__v_isRef===!0)}function xt(n){return p_(n,!1)}function p_(n,e){return yt(n)?n:new m_(n,e)}class m_{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:tt(e),this._value=t?e:ro(e)}get value(){return Cp(this),this._value}set value(e){const t=this.__v_isShallow||xa(e)||so(e);e=t?e:tt(e),Vi(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:ro(e),da(this,4))}}function nt(n){return yt(n)?n.value:n}const g_={get:(n,e,t)=>nt(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return yt(s)&&!yt(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function Pp(n){return xs(n)?n:new Proxy(n,g_)}function __(n){const e=Be(n)?new Array(n.length):{};for(const t in n)e[t]=x_(n,t);return e}class v_{constructor(e,t,i){this._object=e,this._key=t,this._defaultValue=i,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return jg(tt(this._object),this._key)}}function x_(n,e,t){const i=n[e];return yt(i)?i:new v_(n,e,t)}/**
* @vue/runtime-core v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ki(n,e,t,i){try{return i?n(...i):n()}catch(s){Va(s,e,t)}}function bn(n,e,t,i){if(Xe(n)){const s=ki(n,e,t,i);return s&&lp(s)&&s.catch(r=>{Va(r,e,t)}),s}if(Be(n)){const s=[];for(let r=0;r<n.length;r++)s.push(bn(n[r],e,t,i));return s}}function Va(n,e,t,i=!0){const s=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${t}`;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](n,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){qi(),ki(l,null,10,[n,o,a]),ji();return}}y_(n,t,s,i)}function y_(n,e,t,i=!0){console.error(n)}let oo=!1,xc=!1;const Vt=[];let Un=0;const Js=[];let Ai=null,fs=0;const Lp=Promise.resolve();let lu=null;function sr(n){const e=lu||Lp;return n?e.then(this?n.bind(this):n):e}function S_(n){let e=Un+1,t=Vt.length;for(;e<t;){const i=e+t>>>1,s=Vt[i],r=ao(s);r<n||r===n&&s.pre?e=i+1:t=i}return e}function cu(n){(!Vt.length||!Vt.includes(n,oo&&n.allowRecurse?Un+1:Un))&&(n.id==null?Vt.push(n):Vt.splice(S_(n.id),0,n),Ip())}function Ip(){!oo&&!xc&&(xc=!0,lu=Lp.then(Np))}function M_(n){const e=Vt.indexOf(n);e>Un&&Vt.splice(e,1)}function b_(n){Be(n)?Js.push(...n):(!Ai||!Ai.includes(n,n.allowRecurse?fs+1:fs))&&Js.push(n),Ip()}function qu(n,e,t=oo?Un+1:0){for(;t<Vt.length;t++){const i=Vt[t];if(i&&i.pre){if(n&&i.id!==n.uid)continue;Vt.splice(t,1),t--,i()}}}function Dp(n){if(Js.length){const e=[...new Set(Js)].sort((t,i)=>ao(t)-ao(i));if(Js.length=0,Ai){Ai.push(...e);return}for(Ai=e,fs=0;fs<Ai.length;fs++)Ai[fs]();Ai=null,fs=0}}const ao=n=>n.id==null?1/0:n.id,E_=(n,e)=>{const t=ao(n)-ao(e);if(t===0){if(n.pre&&!e.pre)return-1;if(e.pre&&!n.pre)return 1}return t};function Np(n){xc=!1,oo=!0,Vt.sort(E_);try{for(Un=0;Un<Vt.length;Un++){const e=Vt[Un];e&&e.active!==!1&&ki(e,null,14)}}finally{Un=0,Vt.length=0,Dp(),oo=!1,lu=null,(Vt.length||Js.length)&&Np()}}function T_(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||ft;let s=t;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:d}=i[u]||ft;d&&(s=t.map(h=>At(h)?h.trim():h)),f&&(s=t.map(Og))}let a,l=i[a=cl(e)]||i[a=cl(zn(e))];!l&&r&&(l=i[a=cl(vr(e))]),l&&bn(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,bn(c,n,6,s)}}function Up(n,e,t=!1){const i=e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!Xe(n)){const l=c=>{const u=Up(c,e,!0);u&&(a=!0,Tt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(vt(n)&&i.set(n,null),null):(Be(r)?r.forEach(l=>o[l]=null):Tt(o,r),vt(n)&&i.set(n,o),o)}function Ga(n,e){return!n||!Ba(e)?!1:(e=e.slice(2).replace(/Once$/,""),et(n,e[0].toLowerCase()+e.slice(1))||et(n,vr(e))||et(n,e))}let Gt=null,Wa=null;function ya(n){const e=Gt;return Gt=n,Wa=n&&n.type.__scopeId||null,e}function vo(n){Wa=n}function xo(){Wa=null}function tn(n,e=Gt,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&od(-1);const r=ya(e);let o;try{o=n(...s)}finally{ya(r),i._d&&od(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function ul(n){const{type:e,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:d,setupState:h,ctx:g,inheritAttrs:_}=n,p=ya(n);let m,S;try{if(t.shapeFlag&4){const E=s||i,L=E;m=In(c.call(L,E,u,f,h,d,g)),S=a}else{const E=e;m=In(E.length>1?E(f,{attrs:a,slots:o,emit:l}):E(f,null)),S=e.props?a:A_(a)}}catch(E){Jr.length=0,Va(E,n,1),m=Ae(Mn)}let y=m;if(S&&_!==!1){const E=Object.keys(S),{shapeFlag:L}=y;E.length&&L&7&&(r&&E.some(Zc)&&(S=w_(S,r)),y=ai(y,S,!1,!0))}return t.dirs&&(y=ai(y,null,!1,!0),y.dirs=y.dirs?y.dirs.concat(t.dirs):t.dirs),t.transition&&(y.transition=t.transition),m=y,ya(p),m}const A_=n=>{let e;for(const t in n)(t==="class"||t==="style"||Ba(t))&&((e||(e={}))[t]=n[t]);return e},w_=(n,e)=>{const t={};for(const i in n)(!Zc(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function R_(n,e,t){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?ju(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(o[d]!==i[d]&&!Ga(c,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?ju(i,o,c):!0:!!o;return!1}function ju(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==n[r]&&!Ga(t,r))return!0}return!1}function C_({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const P_="components";function L_(n,e){return D_(P_,n,!0,e)||n}const I_=Symbol.for("v-ndc");function D_(n,e,t=!0,i=!1){const s=Gt||Dt;if(s){const r=s.type;{const a=Cc(r,!1);if(a&&(a===e||a===zn(e)||a===za(zn(e))))return r}const o=$u(s[n]||r[n],e)||$u(s.appContext[n],e);return!o&&i?r:o}}function $u(n,e){return n&&(n[e]||n[zn(e)]||n[za(zn(e))])}const Op=n=>n.__isSuspense;function N_(n,e){e&&e.pendingBranch?Be(n)?e.effects.push(...n):e.effects.push(n):b_(n)}const U_=Symbol.for("v-scx"),O_=()=>Yr(U_),Lo={};function Pn(n,e,t){return Fp(n,e,t)}function Fp(n,e,{immediate:t,deep:i,flush:s,once:r,onTrack:o,onTrigger:a}=ft){if(e&&r){const R=e;e=(...w)=>{R(...w),L()}}const l=Dt,c=R=>i===!0?R:ms(R,i===!1?1:void 0);let u,f=!1,d=!1;if(yt(n)?(u=()=>n.value,f=xa(n)):xs(n)?(u=()=>c(n),f=!0):Be(n)?(d=!0,f=n.some(R=>xs(R)||xa(R)),u=()=>n.map(R=>{if(yt(R))return R.value;if(xs(R))return c(R);if(Xe(R))return ki(R,l,2)})):Xe(n)?e?u=()=>ki(n,l,2):u=()=>(h&&h(),bn(n,l,3,[g])):u=Sn,e&&i){const R=u;u=()=>ms(R())}let h,g=R=>{h=y.onStop=()=>{ki(R,l,4),h=y.onStop=void 0}},_;if(Ka)if(g=Sn,e?t&&bn(e,l,3,[u(),d?[]:void 0,g]):u(),s==="sync"){const R=O_();_=R.__watcherHandles||(R.__watcherHandles=[])}else return Sn;let p=d?new Array(n.length).fill(Lo):Lo;const m=()=>{if(!(!y.active||!y.dirty))if(e){const R=y.run();(i||f||(d?R.some((w,P)=>Vi(w,p[P])):Vi(R,p)))&&(h&&h(),bn(e,l,3,[R,p===Lo?void 0:d&&p[0]===Lo?[]:p,g]),p=R)}else y.run()};m.allowRecurse=!!e;let S;s==="sync"?S=m:s==="post"?S=()=>Ut(m,l&&l.suspense):(m.pre=!0,l&&(m.id=l.uid),S=()=>cu(m));const y=new tu(u,Sn,S),E=pp(),L=()=>{y.stop(),E&&Jc(E.effects,y)};return e?t?m():p=y.run():s==="post"?Ut(y.run.bind(y),l&&l.suspense):y.run(),_&&_.push(L),L}function F_(n,e,t){const i=this.proxy,s=At(n)?n.includes(".")?Bp(i,n):()=>i[n]:n.bind(i,i);let r;Xe(e)?r=e:(r=e.handler,t=e);const o=yo(this),a=Fp(s,r.bind(i),t);return o(),a}function Bp(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}function ms(n,e=1/0,t){if(e<=0||!vt(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,yt(n))ms(n.value,e,t);else if(Be(n))for(let i=0;i<n.length;i++)ms(n[i],e,t);else if(Cg(n)||Xr(n))n.forEach(i=>{ms(i,e,t)});else if(Dg(n))for(const i in n)ms(n[i],e,t);return n}function kp(n,e){if(Gt===null)return n;const t=Ya(Gt)||Gt.proxy,i=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,a,l=ft]=e[s];r&&(Xe(r)&&(r={mounted:r,updated:r}),r.deep&&ms(o),i.push({dir:r,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function Qi(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(qi(),bn(l,t,8,[n.el,a,n,e]),ji())}}const wi=Symbol("_leaveCb"),Io=Symbol("_enterCb");function B_(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return yr(()=>{n.isMounted=!0}),$i(()=>{n.isUnmounting=!0}),n}const gn=[Function,Array],zp={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:gn,onEnter:gn,onAfterEnter:gn,onEnterCancelled:gn,onBeforeLeave:gn,onLeave:gn,onAfterLeave:gn,onLeaveCancelled:gn,onBeforeAppear:gn,onAppear:gn,onAfterAppear:gn,onAppearCancelled:gn},k_={name:"BaseTransition",props:zp,setup(n,{slots:e}){const t=on(),i=B_();return()=>{const s=e.default&&Vp(e.default(),!0);if(!s||!s.length)return;let r=s[0];if(s.length>1){for(const d of s)if(d.type!==Mn){r=d;break}}const o=tt(n),{mode:a}=o;if(i.isLeaving)return dl(r);const l=Ku(r);if(!l)return dl(r);const c=yc(l,o,i,t);Sa(l,c);const u=t.subTree,f=u&&Ku(u);if(f&&f.type!==Mn&&!Ii(l,f)){const d=yc(f,o,i,t);if(Sa(f,d),a==="out-in"&&l.type!==Mn)return i.isLeaving=!0,d.afterLeave=()=>{i.isLeaving=!1,t.update.active!==!1&&(t.effect.dirty=!0,t.update())},dl(r);a==="in-out"&&l.type!==Mn&&(d.delayLeave=(h,g,_)=>{const p=Hp(i,f);p[String(f.key)]=f,h[wi]=()=>{g(),h[wi]=void 0,delete c.delayedLeave},c.delayedLeave=_})}return r}}},z_=k_;function Hp(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function yc(n,e,t,i){const{appear:s,mode:r,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:f,onLeave:d,onAfterLeave:h,onLeaveCancelled:g,onBeforeAppear:_,onAppear:p,onAfterAppear:m,onAppearCancelled:S}=e,y=String(n.key),E=Hp(t,n),L=(P,b)=>{P&&bn(P,i,9,b)},R=(P,b)=>{const M=b[1];L(P,b),Be(P)?P.every(I=>I.length<=1)&&M():P.length<=1&&M()},w={mode:r,persisted:o,beforeEnter(P){let b=a;if(!t.isMounted)if(s)b=_||a;else return;P[wi]&&P[wi](!0);const M=E[y];M&&Ii(n,M)&&M.el[wi]&&M.el[wi](),L(b,[P])},enter(P){let b=l,M=c,I=u;if(!t.isMounted)if(s)b=p||l,M=m||c,I=S||u;else return;let N=!1;const U=P[Io]=F=>{N||(N=!0,F?L(I,[P]):L(M,[P]),w.delayedLeave&&w.delayedLeave(),P[Io]=void 0)};b?R(b,[P,U]):U()},leave(P,b){const M=String(n.key);if(P[Io]&&P[Io](!0),t.isUnmounting)return b();L(f,[P]);let I=!1;const N=P[wi]=U=>{I||(I=!0,b(),U?L(g,[P]):L(h,[P]),P[wi]=void 0,E[M]===n&&delete E[M])};E[M]=n,d?R(d,[P,N]):N()},clone(P){return yc(P,e,t,i)}};return w}function dl(n){if(Xa(n))return n=ai(n),n.children=null,n}function Ku(n){if(!Xa(n))return n;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&Xe(t.default))return t.default()}}function Sa(n,e){n.shapeFlag&6&&n.component?Sa(n.component.subTree,e):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Vp(n,e=!1,t){let i=[],s=0;for(let r=0;r<n.length;r++){let o=n[r];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:r);o.type===en?(o.patchFlag&128&&s++,i=i.concat(Vp(o.children,e,a))):(e||o.type!==Mn)&&i.push(a!=null?ai(o,{key:a}):o)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}/*! #__NO_SIDE_EFFECTS__ */function H_(n,e){return Xe(n)?Tt({name:n.name},e,{setup:n}):n}const $r=n=>!!n.type.__asyncLoader,Xa=n=>n.type.__isKeepAlive,V_={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(n,{slots:e}){const t=on(),i=t.ctx;if(!i.renderer)return()=>{const S=e.default&&e.default();return S&&S.length===1?S[0]:S};const s=new Map,r=new Set;let o=null;const a=t.suspense,{renderer:{p:l,m:c,um:u,o:{createElement:f}}}=i,d=f("div");i.activate=(S,y,E,L,R)=>{const w=S.component;c(S,y,E,0,a),l(w.vnode,S,y,E,w,a,L,S.slotScopeIds,R),Ut(()=>{w.isDeactivated=!1,w.a&&jr(w.a);const P=S.props&&S.props.onVnodeMounted;P&&xn(P,w.parent,S)},a)},i.deactivate=S=>{const y=S.component;c(S,d,null,1,a),Ut(()=>{y.da&&jr(y.da);const E=S.props&&S.props.onVnodeUnmounted;E&&xn(E,y.parent,S),y.isDeactivated=!0},a)};function h(S){fl(S),u(S,t,a,!0)}function g(S){s.forEach((y,E)=>{const L=Cc(y.type);L&&(!S||!S(L))&&_(E)})}function _(S){const y=s.get(S);!o||!Ii(y,o)?h(y):o&&fl(o),s.delete(S),r.delete(S)}Pn(()=>[n.include,n.exclude],([S,y])=>{S&&g(E=>Fr(S,E)),y&&g(E=>!Fr(y,E))},{flush:"post",deep:!0});let p=null;const m=()=>{p!=null&&s.set(p,hl(t.subTree))};return yr(m),Wp(m),$i(()=>{s.forEach(S=>{const{subTree:y,suspense:E}=t,L=hl(y);if(S.type===L.type&&S.key===L.key){fl(L);const R=L.component.da;R&&Ut(R,E);return}h(S)})}),()=>{if(p=null,!e.default)return null;const S=e.default(),y=S[0];if(S.length>1)return o=null,S;if(!ba(y)||!(y.shapeFlag&4)&&!(y.shapeFlag&128))return o=null,y;let E=hl(y);const L=E.type,R=Cc($r(E)?E.type.__asyncResolved||{}:L),{include:w,exclude:P,max:b}=n;if(w&&(!R||!Fr(w,R))||P&&R&&Fr(P,R))return o=E,y;const M=E.key==null?L:E.key,I=s.get(M);return E.el&&(E=ai(E),y.shapeFlag&128&&(y.ssContent=E)),p=M,I?(E.el=I.el,E.component=I.component,E.transition&&Sa(E,E.transition),E.shapeFlag|=512,r.delete(M),r.add(M)):(r.add(M),b&&r.size>parseInt(b,10)&&_(r.values().next().value)),E.shapeFlag|=256,o=E,Op(y.type)?y:E}}},G_=V_;function Fr(n,e){return Be(n)?n.some(t=>Fr(t,e)):At(n)?n.split(",").includes(e):Pg(n)?n.test(e):!1}function W_(n,e){Gp(n,"a",e)}function uu(n,e){Gp(n,"da",e)}function Gp(n,e,t=Dt){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(qa(e,i,t),t){let s=t.parent;for(;s&&s.parent;)Xa(s.parent.vnode)&&X_(i,e,t,s),s=s.parent}}function X_(n,e,t,i){const s=qa(e,n,i,!0);ja(()=>{Jc(i[e],s)},t)}function fl(n){n.shapeFlag&=-257,n.shapeFlag&=-513}function hl(n){return n.shapeFlag&128?n.ssContent:n}function qa(n,e,t=Dt,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;qi();const a=yo(t),l=bn(e,t,n,o);return a(),ji(),l});return i?s.unshift(r):s.push(r),r}}const ci=n=>(e,t=Dt)=>(!Ka||n==="sp")&&qa(n,(...i)=>e(...i),t),q_=ci("bm"),yr=ci("m"),j_=ci("bu"),Wp=ci("u"),$i=ci("bum"),ja=ci("um"),$_=ci("sp"),K_=ci("rtg"),Y_=ci("rtc");function Z_(n,e=Dt){qa("ec",n,e)}const Sc=n=>n?rm(n)?Ya(n)||n.proxy:Sc(n.parent):null,Kr=Tt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Sc(n.parent),$root:n=>Sc(n.root),$emit:n=>n.emit,$options:n=>du(n),$forceUpdate:n=>n.f||(n.f=()=>{n.effect.dirty=!0,cu(n.update)}),$nextTick:n=>n.n||(n.n=sr.bind(n.proxy)),$watch:n=>F_.bind(n)}),pl=(n,e)=>n!==ft&&!n.__isScriptSetup&&et(n,e),J_={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;let c;if(e[0]!=="$"){const h=o[e];if(h!==void 0)switch(h){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(pl(i,e))return o[e]=1,i[e];if(s!==ft&&et(s,e))return o[e]=2,s[e];if((c=n.propsOptions[0])&&et(c,e))return o[e]=3,r[e];if(t!==ft&&et(t,e))return o[e]=4,t[e];Mc&&(o[e]=0)}}const u=Kr[e];let f,d;if(u)return e==="$attrs"&&rn(n.attrs,"get",""),u(n);if((f=a.__cssModules)&&(f=f[e]))return f;if(t!==ft&&et(t,e))return o[e]=4,t[e];if(d=l.config.globalProperties,et(d,e))return d[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return pl(s,e)?(s[e]=t,!0):i!==ft&&et(i,e)?(i[e]=t,!0):et(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!t[o]||n!==ft&&et(n,o)||pl(e,o)||(a=r[0])&&et(a,o)||et(i,o)||et(Kr,o)||et(s.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:et(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Yu(n){return Be(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Mc=!0;function Q_(n){const e=du(n),t=n.proxy,i=n.ctx;Mc=!1,e.beforeCreate&&Zu(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:h,updated:g,activated:_,deactivated:p,beforeDestroy:m,beforeUnmount:S,destroyed:y,unmounted:E,render:L,renderTracked:R,renderTriggered:w,errorCaptured:P,serverPrefetch:b,expose:M,inheritAttrs:I,components:N,directives:U,filters:F}=e;if(c&&ev(c,i,null),o)for(const ne in o){const j=o[ne];Xe(j)&&(i[ne]=j.bind(t))}if(s){const ne=s.call(t,t);vt(ne)&&(n.data=xr(ne))}if(Mc=!0,r)for(const ne in r){const j=r[ne],me=Xe(j)?j.bind(t,t):Xe(j.get)?j.get.bind(t,t):Sn,xe=!Xe(j)&&Xe(j.set)?j.set.bind(t):Sn,ve=Se({get:me,set:xe});Object.defineProperty(i,ne,{enumerable:!0,configurable:!0,get:()=>ve.value,set:Ne=>ve.value=Ne})}if(a)for(const ne in a)Xp(a[ne],i,t,ne);if(l){const ne=Xe(l)?l.call(t):l;Reflect.ownKeys(ne).forEach(j=>{ov(j,ne[j])})}u&&Zu(u,n,"c");function W(ne,j){Be(j)?j.forEach(me=>ne(me.bind(t))):j&&ne(j.bind(t))}if(W(q_,f),W(yr,d),W(j_,h),W(Wp,g),W(W_,_),W(uu,p),W(Z_,P),W(Y_,R),W(K_,w),W($i,S),W(ja,E),W($_,b),Be(M))if(M.length){const ne=n.exposed||(n.exposed={});M.forEach(j=>{Object.defineProperty(ne,j,{get:()=>t[j],set:me=>t[j]=me})})}else n.exposed||(n.exposed={});L&&n.render===Sn&&(n.render=L),I!=null&&(n.inheritAttrs=I),N&&(n.components=N),U&&(n.directives=U)}function ev(n,e,t=Sn){Be(n)&&(n=bc(n));for(const i in n){const s=n[i];let r;vt(s)?"default"in s?r=Yr(s.from||i,s.default,!0):r=Yr(s.from||i):r=Yr(s),yt(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function Zu(n,e,t){bn(Be(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Xp(n,e,t,i){const s=i.includes(".")?Bp(t,i):()=>t[i];if(At(n)){const r=e[n];Xe(r)&&Pn(s,r)}else if(Xe(n))Pn(s,n.bind(t));else if(vt(n))if(Be(n))n.forEach(r=>Xp(r,e,t,i));else{const r=Xe(n.handler)?n.handler.bind(t):e[n.handler];Xe(r)&&Pn(s,r,n)}}function du(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(c=>Ma(l,c,o,!0)),Ma(l,e,o)),vt(e)&&r.set(e,l),l}function Ma(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&Ma(n,r,t,!0),s&&s.forEach(o=>Ma(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=tv[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const tv={data:Ju,props:Qu,emits:Qu,methods:Br,computed:Br,beforeCreate:qt,created:qt,beforeMount:qt,mounted:qt,beforeUpdate:qt,updated:qt,beforeDestroy:qt,beforeUnmount:qt,destroyed:qt,unmounted:qt,activated:qt,deactivated:qt,errorCaptured:qt,serverPrefetch:qt,components:Br,directives:Br,watch:iv,provide:Ju,inject:nv};function Ju(n,e){return e?n?function(){return Tt(Xe(n)?n.call(this,this):n,Xe(e)?e.call(this,this):e)}:e:n}function nv(n,e){return Br(bc(n),bc(e))}function bc(n){if(Be(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function qt(n,e){return n?[...new Set([].concat(n,e))]:e}function Br(n,e){return n?Tt(Object.create(null),n,e):e}function Qu(n,e){return n?Be(n)&&Be(e)?[...new Set([...n,...e])]:Tt(Object.create(null),Yu(n),Yu(e??{})):e}function iv(n,e){if(!n)return e;if(!e)return n;const t=Tt(Object.create(null),n);for(const i in e)t[i]=qt(n[i],e[i]);return t}function qp(){return{app:null,config:{isNativeTag:wg,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let sv=0;function rv(n,e){return function(i,s=null){Xe(i)||(i=Tt({},i)),s!=null&&!vt(s)&&(s=null);const r=qp(),o=new WeakSet;let a=!1;const l=r.app={_uid:sv++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:Nv,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&Xe(c.install)?(o.add(c),c.install(l,...u)):Xe(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,f){if(!a){const d=Ae(i,s);return d.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),u&&e?e(d,c):n(d,c,f),a=!0,l._container=c,c.__vue_app__=l,Ya(d.component)||d.component.proxy}},unmount(){a&&(n(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l},runWithContext(c){const u=Qs;Qs=l;try{return c()}finally{Qs=u}}};return l}}let Qs=null;function ov(n,e){if(Dt){let t=Dt.provides;const i=Dt.parent&&Dt.parent.provides;i===t&&(t=Dt.provides=Object.create(i)),t[n]=e}}function Yr(n,e,t=!1){const i=Dt||Gt;if(i||Qs){const s=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:Qs._context.provides;if(s&&n in s)return s[n];if(arguments.length>1)return t&&Xe(e)?e.call(i&&i.proxy):e}}function av(){return!!(Dt||Gt||Qs)}const jp={},$p=()=>Object.create(jp),Kp=n=>Object.getPrototypeOf(n)===jp;function lv(n,e,t,i=!1){const s={},r=$p();n.propsDefaults=Object.create(null),Yp(n,e,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);t?n.props=i?s:f_(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function cv(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=tt(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(Ga(n.emitsOptions,d))continue;const h=e[d];if(l)if(et(r,d))h!==r[d]&&(r[d]=h,c=!0);else{const g=zn(d);s[g]=Ec(l,a,g,h,n,!1)}else h!==r[d]&&(r[d]=h,c=!0)}}}else{Yp(n,e,s,r)&&(c=!0);let u;for(const f in a)(!e||!et(e,f)&&((u=vr(f))===f||!et(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(s[f]=Ec(l,a,f,void 0,n,!0)):delete s[f]);if(r!==a)for(const f in r)(!e||!et(e,f))&&(delete r[f],c=!0)}c&&ri(n.attrs,"set","")}function Yp(n,e,t,i){const[s,r]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(qr(l))continue;const c=e[l];let u;s&&et(s,u=zn(l))?!r||!r.includes(u)?t[u]=c:(a||(a={}))[u]=c:Ga(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=tt(t),c=a||ft;for(let u=0;u<r.length;u++){const f=r[u];t[f]=Ec(s,l,f,c[f],n,!et(c,f))}}return o}function Ec(n,e,t,i,s,r){const o=n[t];if(o!=null){const a=et(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Xe(l)){const{propsDefaults:c}=s;if(t in c)i=c[t];else{const u=yo(s);i=c[t]=l.call(null,e),u()}}else i=l}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===vr(t))&&(i=!0))}return i}function Zp(n,e,t=!1){const i=e.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!Xe(n)){const u=f=>{l=!0;const[d,h]=Zp(f,e,!0);Tt(o,d),h&&a.push(...h)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return vt(n)&&i.set(n,Zs),Zs;if(Be(r))for(let u=0;u<r.length;u++){const f=zn(r[u]);ed(f)&&(o[f]=ft)}else if(r)for(const u in r){const f=zn(u);if(ed(f)){const d=r[u],h=o[f]=Be(d)||Xe(d)?{type:d}:Tt({},d);if(h){const g=id(Boolean,h.type),_=id(String,h.type);h[0]=g>-1,h[1]=_<0||g<_,(g>-1||et(h,"default"))&&a.push(f)}}}const c=[o,a];return vt(n)&&i.set(n,c),c}function ed(n){return n[0]!=="$"&&!qr(n)}function td(n){return n===null?"null":typeof n=="function"?n.name||"":typeof n=="object"&&n.constructor&&n.constructor.name||""}function nd(n,e){return td(n)===td(e)}function id(n,e){return Be(e)?e.findIndex(t=>nd(t,n)):Xe(e)&&nd(e,n)?0:-1}const Jp=n=>n[0]==="_"||n==="$stable",fu=n=>Be(n)?n.map(In):[In(n)],uv=(n,e,t)=>{if(e._n)return e;const i=tn((...s)=>fu(e(...s)),t);return i._c=!1,i},Qp=(n,e,t)=>{const i=n._ctx;for(const s in n){if(Jp(s))continue;const r=n[s];if(Xe(r))e[s]=uv(s,r,i);else if(r!=null){const o=fu(r);e[s]=()=>o}}},em=(n,e)=>{const t=fu(e);n.slots.default=()=>t},dv=(n,e)=>{const t=n.slots=$p();if(n.vnode.shapeFlag&32){const i=e._;i?(Tt(t,e),cp(t,"_",i,!0)):Qp(e,t)}else e&&em(n,e)},fv=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,o=ft;if(i.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:(Tt(s,e),!t&&a===1&&delete s._):(r=!e.$stable,Qp(e,s)),o=e}else e&&(em(n,e),o={default:1});if(r)for(const a in s)!Jp(a)&&o[a]==null&&delete s[a]};function Tc(n,e,t,i,s=!1){if(Be(n)){n.forEach((d,h)=>Tc(d,e&&(Be(e)?e[h]:e),t,i,s));return}if($r(i)&&!s)return;const r=i.shapeFlag&4?Ya(i.component)||i.component.proxy:i.el,o=s?null:r,{i:a,r:l}=n,c=e&&e.r,u=a.refs===ft?a.refs={}:a.refs,f=a.setupState;if(c!=null&&c!==l&&(At(c)?(u[c]=null,et(f,c)&&(f[c]=null)):yt(c)&&(c.value=null)),Xe(l))ki(l,a,12,[o,u]);else{const d=At(l),h=yt(l);if(d||h){const g=()=>{if(n.f){const _=d?et(f,l)?f[l]:u[l]:l.value;s?Be(_)&&Jc(_,r):Be(_)?_.includes(r)||_.push(r):d?(u[l]=[r],et(f,l)&&(f[l]=u[l])):(l.value=[r],n.k&&(u[n.k]=l.value))}else d?(u[l]=o,et(f,l)&&(f[l]=o)):h&&(l.value=o,n.k&&(u[n.k]=o))};o?(g.id=-1,Ut(g,t)):g()}}}const Ut=N_;function hv(n){return pv(n)}function pv(n,e){const t=up();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:h=Sn,insertStaticContent:g}=n,_=(C,O,H,Q=null,J=null,ie=null,de=void 0,T=null,v=!!O.dynamicChildren)=>{if(C===O)return;C&&!Ii(C,O)&&(Q=fe(C),Ne(C,J,ie,!0),C=null),O.patchFlag===-2&&(v=!1,O.dynamicChildren=null);const{type:D,ref:V,shapeFlag:K}=O;switch(D){case $a:p(C,O,H,Q);break;case Mn:m(C,O,H,Q);break;case gl:C==null&&S(O,H,Q,de);break;case en:N(C,O,H,Q,J,ie,de,T,v);break;default:K&1?L(C,O,H,Q,J,ie,de,T,v):K&6?U(C,O,H,Q,J,ie,de,T,v):(K&64||K&128)&&D.process(C,O,H,Q,J,ie,de,T,v,ke)}V!=null&&J&&Tc(V,C&&C.ref,ie,O||C,!O)},p=(C,O,H,Q)=>{if(C==null)i(O.el=a(O.children),H,Q);else{const J=O.el=C.el;O.children!==C.children&&c(J,O.children)}},m=(C,O,H,Q)=>{C==null?i(O.el=l(O.children||""),H,Q):O.el=C.el},S=(C,O,H,Q)=>{[C.el,C.anchor]=g(C.children,O,H,Q,C.el,C.anchor)},y=({el:C,anchor:O},H,Q)=>{let J;for(;C&&C!==O;)J=d(C),i(C,H,Q),C=J;i(O,H,Q)},E=({el:C,anchor:O})=>{let H;for(;C&&C!==O;)H=d(C),s(C),C=H;s(O)},L=(C,O,H,Q,J,ie,de,T,v)=>{O.type==="svg"?de="svg":O.type==="math"&&(de="mathml"),C==null?R(O,H,Q,J,ie,de,T,v):b(C,O,J,ie,de,T,v)},R=(C,O,H,Q,J,ie,de,T)=>{let v,D;const{props:V,shapeFlag:K,transition:$,dirs:ce}=C;if(v=C.el=o(C.type,ie,V&&V.is,V),K&8?u(v,C.children):K&16&&P(C.children,v,null,Q,J,ml(C,ie),de,T),ce&&Qi(C,null,Q,"created"),w(v,C,C.scopeId,de,Q),V){for(const ae in V)ae!=="value"&&!qr(ae)&&r(v,ae,null,V[ae],ie,C.children,Q,J,oe);"value"in V&&r(v,"value",null,V.value,ie),(D=V.onVnodeBeforeMount)&&xn(D,Q,C)}ce&&Qi(C,null,Q,"beforeMount");const re=mv(J,$);re&&$.beforeEnter(v),i(v,O,H),((D=V&&V.onVnodeMounted)||re||ce)&&Ut(()=>{D&&xn(D,Q,C),re&&$.enter(v),ce&&Qi(C,null,Q,"mounted")},J)},w=(C,O,H,Q,J)=>{if(H&&h(C,H),Q)for(let ie=0;ie<Q.length;ie++)h(C,Q[ie]);if(J){let ie=J.subTree;if(O===ie){const de=J.vnode;w(C,de,de.scopeId,de.slotScopeIds,J.parent)}}},P=(C,O,H,Q,J,ie,de,T,v=0)=>{for(let D=v;D<C.length;D++){const V=C[D]=T?Ri(C[D]):In(C[D]);_(null,V,O,H,Q,J,ie,de,T)}},b=(C,O,H,Q,J,ie,de)=>{const T=O.el=C.el;let{patchFlag:v,dynamicChildren:D,dirs:V}=O;v|=C.patchFlag&16;const K=C.props||ft,$=O.props||ft;let ce;if(H&&es(H,!1),(ce=$.onVnodeBeforeUpdate)&&xn(ce,H,O,C),V&&Qi(O,C,H,"beforeUpdate"),H&&es(H,!0),D?M(C.dynamicChildren,D,T,H,Q,ml(O,J),ie):de||j(C,O,T,null,H,Q,ml(O,J),ie,!1),v>0){if(v&16)I(T,O,K,$,H,Q,J);else if(v&2&&K.class!==$.class&&r(T,"class",null,$.class,J),v&4&&r(T,"style",K.style,$.style,J),v&8){const re=O.dynamicProps;for(let ae=0;ae<re.length;ae++){const be=re[ae],le=K[be],ye=$[be];(ye!==le||be==="value")&&r(T,be,le,ye,J,C.children,H,Q,oe)}}v&1&&C.children!==O.children&&u(T,O.children)}else!de&&D==null&&I(T,O,K,$,H,Q,J);((ce=$.onVnodeUpdated)||V)&&Ut(()=>{ce&&xn(ce,H,O,C),V&&Qi(O,C,H,"updated")},Q)},M=(C,O,H,Q,J,ie,de)=>{for(let T=0;T<O.length;T++){const v=C[T],D=O[T],V=v.el&&(v.type===en||!Ii(v,D)||v.shapeFlag&70)?f(v.el):H;_(v,D,V,null,Q,J,ie,de,!0)}},I=(C,O,H,Q,J,ie,de)=>{if(H!==Q){if(H!==ft)for(const T in H)!qr(T)&&!(T in Q)&&r(C,T,H[T],null,de,O.children,J,ie,oe);for(const T in Q){if(qr(T))continue;const v=Q[T],D=H[T];v!==D&&T!=="value"&&r(C,T,D,v,de,O.children,J,ie,oe)}"value"in Q&&r(C,"value",H.value,Q.value,de)}},N=(C,O,H,Q,J,ie,de,T,v)=>{const D=O.el=C?C.el:a(""),V=O.anchor=C?C.anchor:a("");let{patchFlag:K,dynamicChildren:$,slotScopeIds:ce}=O;ce&&(T=T?T.concat(ce):ce),C==null?(i(D,H,Q),i(V,H,Q),P(O.children||[],H,V,J,ie,de,T,v)):K>0&&K&64&&$&&C.dynamicChildren?(M(C.dynamicChildren,$,H,J,ie,de,T),(O.key!=null||J&&O===J.subTree)&&hu(C,O,!0)):j(C,O,H,V,J,ie,de,T,v)},U=(C,O,H,Q,J,ie,de,T,v)=>{O.slotScopeIds=T,C==null?O.shapeFlag&512?J.ctx.activate(O,H,Q,de,v):F(O,H,Q,J,ie,de,v):q(C,O,v)},F=(C,O,H,Q,J,ie,de)=>{const T=C.component=Rv(C,Q,J);if(Xa(C)&&(T.ctx.renderer=ke),Cv(T),T.asyncDep){if(J&&J.registerDep(T,W),!C.el){const v=T.subTree=Ae(Mn);m(null,v,O,H)}}else W(T,C,O,H,J,ie,de)},q=(C,O,H)=>{const Q=O.component=C.component;if(R_(C,O,H))if(Q.asyncDep&&!Q.asyncResolved){ne(Q,O,H);return}else Q.next=O,M_(Q.update),Q.effect.dirty=!0,Q.update();else O.el=C.el,Q.vnode=O},W=(C,O,H,Q,J,ie,de)=>{const T=()=>{if(C.isMounted){let{next:V,bu:K,u:$,parent:ce,vnode:re}=C;{const He=tm(C);if(He){V&&(V.el=re.el,ne(C,V,de)),He.asyncDep.then(()=>{C.isUnmounted||T()});return}}let ae=V,be;es(C,!1),V?(V.el=re.el,ne(C,V,de)):V=re,K&&jr(K),(be=V.props&&V.props.onVnodeBeforeUpdate)&&xn(be,ce,V,re),es(C,!0);const le=ul(C),ye=C.subTree;C.subTree=le,_(ye,le,f(ye.el),fe(ye),C,J,ie),V.el=le.el,ae===null&&C_(C,le.el),$&&Ut($,J),(be=V.props&&V.props.onVnodeUpdated)&&Ut(()=>xn(be,ce,V,re),J)}else{let V;const{el:K,props:$}=O,{bm:ce,m:re,parent:ae}=C,be=$r(O);if(es(C,!1),ce&&jr(ce),!be&&(V=$&&$.onVnodeBeforeMount)&&xn(V,ae,O),es(C,!0),K&&Ye){const le=()=>{C.subTree=ul(C),Ye(K,C.subTree,C,J,null)};be?O.type.__asyncLoader().then(()=>!C.isUnmounted&&le()):le()}else{const le=C.subTree=ul(C);_(null,le,H,Q,C,J,ie),O.el=le.el}if(re&&Ut(re,J),!be&&(V=$&&$.onVnodeMounted)){const le=O;Ut(()=>xn(V,ae,le),J)}(O.shapeFlag&256||ae&&$r(ae.vnode)&&ae.vnode.shapeFlag&256)&&C.a&&Ut(C.a,J),C.isMounted=!0,O=H=Q=null}},v=C.effect=new tu(T,Sn,()=>cu(D),C.scope),D=C.update=()=>{v.dirty&&v.run()};D.id=C.uid,es(C,!0),D()},ne=(C,O,H)=>{O.component=C;const Q=C.vnode.props;C.vnode=O,C.next=null,cv(C,O.props,Q,H),fv(C,O.children,H),qi(),qu(C),ji()},j=(C,O,H,Q,J,ie,de,T,v=!1)=>{const D=C&&C.children,V=C?C.shapeFlag:0,K=O.children,{patchFlag:$,shapeFlag:ce}=O;if($>0){if($&128){xe(D,K,H,Q,J,ie,de,T,v);return}else if($&256){me(D,K,H,Q,J,ie,de,T,v);return}}ce&8?(V&16&&oe(D,J,ie),K!==D&&u(H,K)):V&16?ce&16?xe(D,K,H,Q,J,ie,de,T,v):oe(D,J,ie,!0):(V&8&&u(H,""),ce&16&&P(K,H,Q,J,ie,de,T,v))},me=(C,O,H,Q,J,ie,de,T,v)=>{C=C||Zs,O=O||Zs;const D=C.length,V=O.length,K=Math.min(D,V);let $;for($=0;$<K;$++){const ce=O[$]=v?Ri(O[$]):In(O[$]);_(C[$],ce,H,null,J,ie,de,T,v)}D>V?oe(C,J,ie,!0,!1,K):P(O,H,Q,J,ie,de,T,v,K)},xe=(C,O,H,Q,J,ie,de,T,v)=>{let D=0;const V=O.length;let K=C.length-1,$=V-1;for(;D<=K&&D<=$;){const ce=C[D],re=O[D]=v?Ri(O[D]):In(O[D]);if(Ii(ce,re))_(ce,re,H,null,J,ie,de,T,v);else break;D++}for(;D<=K&&D<=$;){const ce=C[K],re=O[$]=v?Ri(O[$]):In(O[$]);if(Ii(ce,re))_(ce,re,H,null,J,ie,de,T,v);else break;K--,$--}if(D>K){if(D<=$){const ce=$+1,re=ce<V?O[ce].el:Q;for(;D<=$;)_(null,O[D]=v?Ri(O[D]):In(O[D]),H,re,J,ie,de,T,v),D++}}else if(D>$)for(;D<=K;)Ne(C[D],J,ie,!0),D++;else{const ce=D,re=D,ae=new Map;for(D=re;D<=$;D++){const we=O[D]=v?Ri(O[D]):In(O[D]);we.key!=null&&ae.set(we.key,D)}let be,le=0;const ye=$-re+1;let He=!1,Ie=0;const ge=new Array(ye);for(D=0;D<ye;D++)ge[D]=0;for(D=ce;D<=K;D++){const we=C[D];if(le>=ye){Ne(we,J,ie,!0);continue}let Qe;if(we.key!=null)Qe=ae.get(we.key);else for(be=re;be<=$;be++)if(ge[be-re]===0&&Ii(we,O[be])){Qe=be;break}Qe===void 0?Ne(we,J,ie,!0):(ge[Qe-re]=D+1,Qe>=Ie?Ie=Qe:He=!0,_(we,O[Qe],H,null,J,ie,de,T,v),le++)}const Ve=He?gv(ge):Zs;for(be=Ve.length-1,D=ye-1;D>=0;D--){const we=re+D,Qe=O[we],x=we+1<V?O[we+1].el:Q;ge[D]===0?_(null,Qe,H,x,J,ie,de,T,v):He&&(be<0||D!==Ve[be]?ve(Qe,H,x,2):be--)}}},ve=(C,O,H,Q,J=null)=>{const{el:ie,type:de,transition:T,children:v,shapeFlag:D}=C;if(D&6){ve(C.component.subTree,O,H,Q);return}if(D&128){C.suspense.move(O,H,Q);return}if(D&64){de.move(C,O,H,ke);return}if(de===en){i(ie,O,H);for(let K=0;K<v.length;K++)ve(v[K],O,H,Q);i(C.anchor,O,H);return}if(de===gl){y(C,O,H);return}if(Q!==2&&D&1&&T)if(Q===0)T.beforeEnter(ie),i(ie,O,H),Ut(()=>T.enter(ie),J);else{const{leave:K,delayLeave:$,afterLeave:ce}=T,re=()=>i(ie,O,H),ae=()=>{K(ie,()=>{re(),ce&&ce()})};$?$(ie,re,ae):ae()}else i(ie,O,H)},Ne=(C,O,H,Q=!1,J=!1)=>{const{type:ie,props:de,ref:T,children:v,dynamicChildren:D,shapeFlag:V,patchFlag:K,dirs:$}=C;if(T!=null&&Tc(T,null,H,C,!0),V&256){O.ctx.deactivate(C);return}const ce=V&1&&$,re=!$r(C);let ae;if(re&&(ae=de&&de.onVnodeBeforeUnmount)&&xn(ae,O,C),V&6)he(C.component,H,Q);else{if(V&128){C.suspense.unmount(H,Q);return}ce&&Qi(C,null,O,"beforeUnmount"),V&64?C.type.remove(C,O,H,J,ke,Q):D&&(ie!==en||K>0&&K&64)?oe(D,O,H,!1,!0):(ie===en&&K&384||!J&&V&16)&&oe(v,O,H),Q&&Je(C)}(re&&(ae=de&&de.onVnodeUnmounted)||ce)&&Ut(()=>{ae&&xn(ae,O,C),ce&&Qi(C,null,O,"unmounted")},H)},Je=C=>{const{type:O,el:H,anchor:Q,transition:J}=C;if(O===en){se(H,Q);return}if(O===gl){E(C);return}const ie=()=>{s(H),J&&!J.persisted&&J.afterLeave&&J.afterLeave()};if(C.shapeFlag&1&&J&&!J.persisted){const{leave:de,delayLeave:T}=J,v=()=>de(H,ie);T?T(C.el,ie,v):v()}else ie()},se=(C,O)=>{let H;for(;C!==O;)H=d(C),s(C),C=H;s(O)},he=(C,O,H)=>{const{bum:Q,scope:J,update:ie,subTree:de,um:T}=C;Q&&jr(Q),J.stop(),ie&&(ie.active=!1,Ne(de,C,O,H)),T&&Ut(T,O),Ut(()=>{C.isUnmounted=!0},O),O&&O.pendingBranch&&!O.isUnmounted&&C.asyncDep&&!C.asyncResolved&&C.suspenseId===O.pendingId&&(O.deps--,O.deps===0&&O.resolve())},oe=(C,O,H,Q=!1,J=!1,ie=0)=>{for(let de=ie;de<C.length;de++)Ne(C[de],O,H,Q,J)},fe=C=>C.shapeFlag&6?fe(C.component.subTree):C.shapeFlag&128?C.suspense.next():d(C.anchor||C.el);let Le=!1;const Oe=(C,O,H)=>{C==null?O._vnode&&Ne(O._vnode,null,null,!0):_(O._vnode||null,C,O,null,null,null,H),Le||(Le=!0,qu(),Dp(),Le=!1),O._vnode=C},ke={p:_,um:Ne,m:ve,r:Je,mt:F,mc:P,pc:j,pbc:M,n:fe,o:n};let B,Ye;return{render:Oe,hydrate:B,createApp:rv(Oe,B)}}function ml({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function es({effect:n,update:e},t){n.allowRecurse=e.allowRecurse=t}function mv(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function hu(n,e,t=!1){const i=n.children,s=e.children;if(Be(i)&&Be(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Ri(s[r]),a.el=o.el),t||hu(o,a)),a.type===$a&&(a.el=o.el)}}function gv(n){const e=n.slice(),t=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=t[t.length-1],n[s]<c){e[i]=s,t.push(i);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,n[t[a]]<c?r=a+1:o=a;c<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}function tm(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:tm(e)}const _v=n=>n.__isTeleport,Zr=n=>n&&(n.disabled||n.disabled===""),sd=n=>typeof SVGElement<"u"&&n instanceof SVGElement,rd=n=>typeof MathMLElement=="function"&&n instanceof MathMLElement,Ac=(n,e)=>{const t=n&&n.to;return At(t)?e?e(t):null:t},vv={name:"Teleport",__isTeleport:!0,process(n,e,t,i,s,r,o,a,l,c){const{mc:u,pc:f,pbc:d,o:{insert:h,querySelector:g,createText:_,createComment:p}}=c,m=Zr(e.props);let{shapeFlag:S,children:y,dynamicChildren:E}=e;if(n==null){const L=e.el=_(""),R=e.anchor=_("");h(L,t,i),h(R,t,i);const w=e.target=Ac(e.props,g),P=e.targetAnchor=_("");w&&(h(P,w),o==="svg"||sd(w)?o="svg":(o==="mathml"||rd(w))&&(o="mathml"));const b=(M,I)=>{S&16&&u(y,M,I,s,r,o,a,l)};m?b(t,R):w&&b(w,P)}else{e.el=n.el;const L=e.anchor=n.anchor,R=e.target=n.target,w=e.targetAnchor=n.targetAnchor,P=Zr(n.props),b=P?t:R,M=P?L:w;if(o==="svg"||sd(R)?o="svg":(o==="mathml"||rd(R))&&(o="mathml"),E?(d(n.dynamicChildren,E,b,s,r,o,a),hu(n,e,!0)):l||f(n,e,b,M,s,r,o,a,!1),m)P?e.props&&n.props&&e.props.to!==n.props.to&&(e.props.to=n.props.to):Do(e,t,L,c,1);else if((e.props&&e.props.to)!==(n.props&&n.props.to)){const I=e.target=Ac(e.props,g);I&&Do(e,I,null,c,0)}else P&&Do(e,R,w,c,1)}nm(e)},remove(n,e,t,i,{um:s,o:{remove:r}},o){const{shapeFlag:a,children:l,anchor:c,targetAnchor:u,target:f,props:d}=n;if(f&&r(u),o&&r(c),a&16){const h=o||!Zr(d);for(let g=0;g<l.length;g++){const _=l[g];s(_,e,t,h,!!_.dynamicChildren)}}},move:Do,hydrate:xv};function Do(n,e,t,{o:{insert:i},m:s},r=2){r===0&&i(n.targetAnchor,e,t);const{el:o,anchor:a,shapeFlag:l,children:c,props:u}=n,f=r===2;if(f&&i(o,e,t),(!f||Zr(u))&&l&16)for(let d=0;d<c.length;d++)s(c[d],e,t,2);f&&i(a,e,t)}function xv(n,e,t,i,s,r,{o:{nextSibling:o,parentNode:a,querySelector:l}},c){const u=e.target=Ac(e.props,l);if(u){const f=u._lpa||u.firstChild;if(e.shapeFlag&16)if(Zr(e.props))e.anchor=c(o(n),e,a(n),t,i,s,r),e.targetAnchor=f;else{e.anchor=o(n);let d=f;for(;d;)if(d=o(d),d&&d.nodeType===8&&d.data==="teleport anchor"){e.targetAnchor=d,u._lpa=e.targetAnchor&&o(e.targetAnchor);break}c(f,e,u,t,i,s,r)}nm(e)}return e.anchor&&o(e.anchor)}const yv=vv;function nm(n){const e=n.ctx;if(e&&e.ut){let t=n.children[0].el;for(;t&&t!==n.targetAnchor;)t.nodeType===1&&t.setAttribute("data-v-owner",e.uid),t=t.nextSibling;e.ut()}}const en=Symbol.for("v-fgt"),$a=Symbol.for("v-txt"),Mn=Symbol.for("v-cmt"),gl=Symbol.for("v-stc"),Jr=[];let Rn=null;function It(n=!1){Jr.push(Rn=n?null:[])}function Sv(){Jr.pop(),Rn=Jr[Jr.length-1]||null}let lo=1;function od(n){lo+=n}function im(n){return n.dynamicChildren=lo>0?Rn||Zs:null,Sv(),lo>0&&Rn&&Rn.push(n),n}function Yt(n,e,t,i,s,r){return im(qe(n,e,t,i,s,r,!0))}function wc(n,e,t,i,s){return im(Ae(n,e,t,i,s,!0))}function ba(n){return n?n.__v_isVNode===!0:!1}function Ii(n,e){return n.type===e.type&&n.key===e.key}const sm=({key:n})=>n??null,fa=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?At(n)||yt(n)||Xe(n)?{i:Gt,r:n,k:e,f:!!t}:n:null);function qe(n,e=null,t=null,i=0,s=null,r=n===en?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&sm(e),ref:e&&fa(e),scopeId:Wa,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Gt};return a?(pu(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=At(t)?8:16),lo>0&&!o&&Rn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Rn.push(l),l}const Ae=Mv;function Mv(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===I_)&&(n=Mn),ba(n)){const a=ai(n,e,!0);return t&&pu(a,t),lo>0&&!r&&Rn&&(a.shapeFlag&6?Rn[Rn.indexOf(n)]=a:Rn.push(a)),a.patchFlag|=-2,a}if(Dv(n)&&(n=n.__vccOpts),e){e=bv(e);let{class:a,style:l}=e;a&&!At(a)&&(e.class=Ht(a)),vt(l)&&(wp(l)&&!Be(l)&&(l=Tt({},l)),e.style=eu(l))}const o=At(n)?1:Op(n)?128:_v(n)?64:vt(n)?4:Xe(n)?2:0;return qe(n,e,t,i,s,o,r,!0)}function bv(n){return n?wp(n)||Kp(n)?Tt({},n):n:null}function ai(n,e,t=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,c=e?Tv(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&sm(c),ref:e&&e.ref?t&&r?Be(r)?r.concat(fa(e)):[r,fa(e)]:fa(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==en?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&ai(n.ssContent),ssFallback:n.ssFallback&&ai(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&(u.transition=l.clone(u)),u}function Di(n=" ",e=0){return Ae($a,null,n,e)}function Ev(n="",e=!1){return e?(It(),wc(Mn,null,n)):Ae(Mn,null,n)}function In(n){return n==null||typeof n=="boolean"?Ae(Mn):Be(n)?Ae(en,null,n.slice()):typeof n=="object"?Ri(n):Ae($a,null,String(n))}function Ri(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:ai(n)}function pu(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Be(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),pu(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!Kp(e)?e._ctx=Gt:s===3&&Gt&&(Gt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Xe(e)?(e={default:e,_ctx:Gt},t=32):(e=String(e),i&64?(t=16,e=[Di(e)]):t=8);n.children=e,n.shapeFlag|=t}function Tv(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=Ht([e.class,i.class]));else if(s==="style")e.style=eu([e.style,i.style]);else if(Ba(s)){const r=e[s],o=i[s];o&&r!==o&&!(Be(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function xn(n,e,t,i=null){bn(n,e,7,[t,i])}const Av=qp();let wv=0;function Rv(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||Av,r={uid:wv++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new fp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Zp(i,s),emitsOptions:Up(i,s),emit:null,emitted:null,propsDefaults:ft,inheritAttrs:i.inheritAttrs,ctx:ft,data:ft,props:ft,attrs:ft,slots:ft,refs:ft,setupState:ft,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=T_.bind(null,r),n.ce&&n.ce(r),r}let Dt=null;const on=()=>Dt||Gt;let Ea,Rc;{const n=up(),e=(t,i)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};Ea=e("__VUE_INSTANCE_SETTERS__",t=>Dt=t),Rc=e("__VUE_SSR_SETTERS__",t=>Ka=t)}const yo=n=>{const e=Dt;return Ea(n),n.scope.on(),()=>{n.scope.off(),Ea(e)}},ad=()=>{Dt&&Dt.scope.off(),Ea(null)};function rm(n){return n.vnode.shapeFlag&4}let Ka=!1;function Cv(n,e=!1){e&&Rc(e);const{props:t,children:i}=n.vnode,s=rm(n);lv(n,t,s,e),dv(n,i);const r=s?Pv(n,e):void 0;return e&&Rc(!1),r}function Pv(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,J_);const{setup:i}=t;if(i){const s=n.setupContext=i.length>1?Iv(n):null,r=yo(n);qi();const o=ki(i,n,0,[n.props,s]);if(ji(),r(),lp(o)){if(o.then(ad,ad),e)return o.then(a=>{ld(n,a,e)}).catch(a=>{Va(a,n,0)});n.asyncDep=o}else ld(n,o,e)}else om(n,e)}function ld(n,e,t){Xe(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:vt(e)&&(n.setupState=Pp(e)),om(n,t)}let cd;function om(n,e,t){const i=n.type;if(!n.render){if(!e&&cd&&!i.render){const s=i.template||du(n).template;if(s){const{isCustomElement:r,compilerOptions:o}=n.appContext.config,{delimiters:a,compilerOptions:l}=i,c=Tt(Tt({isCustomElement:r,delimiters:a},o),l);i.render=cd(s,c)}}n.render=i.render||Sn}{const s=yo(n);qi();try{Q_(n)}finally{ji(),s()}}}const Lv={get(n,e){return rn(n,"get",""),n[e]}};function Iv(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Lv),slots:n.slots,emit:n.emit,expose:e}}function Ya(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(Pp(_o(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Kr)return Kr[t](n)},has(e,t){return t in e||t in Kr}}))}function Cc(n,e=!0){return Xe(n)?n.displayName||n.name:n.name||e&&n.__name}function Dv(n){return Xe(n)&&"__vccOpts"in n}const Se=(n,e)=>h_(n,e,Ka);function Pe(n,e,t){const i=arguments.length;return i===2?vt(e)&&!Be(e)?ba(e)?Ae(n,null,[e]):Ae(n,e):Ae(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&ba(t)&&(t=[t]),Ae(n,e,t))}const Nv="3.4.27";/**
* @vue/runtime-dom v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Uv="http://www.w3.org/2000/svg",Ov="http://www.w3.org/1998/Math/MathML",Ci=typeof document<"u"?document:null,ud=Ci&&Ci.createElement("template"),Fv={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e==="svg"?Ci.createElementNS(Uv,n):e==="mathml"?Ci.createElementNS(Ov,n):Ci.createElement(n,t?{is:t}:void 0);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>Ci.createTextNode(n),createComment:n=>Ci.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Ci.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const o=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{ud.innerHTML=i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n;const a=ud.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},gi="transition",Ar="animation",co=Symbol("_vtc"),Gi=(n,{slots:e})=>Pe(z_,Bv(n),e);Gi.displayName="Transition";const am={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Gi.props=Tt({},zp,am);const ts=(n,e=[])=>{Be(n)?n.forEach(t=>t(...e)):n&&n(...e)},dd=n=>n?Be(n)?n.some(e=>e.length>1):n.length>1:!1;function Bv(n){const e={};for(const N in n)N in am||(e[N]=n[N]);if(n.css===!1)return e;const{name:t="v",type:i,duration:s,enterFromClass:r=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:f=`${t}-leave-from`,leaveActiveClass:d=`${t}-leave-active`,leaveToClass:h=`${t}-leave-to`}=n,g=kv(s),_=g&&g[0],p=g&&g[1],{onBeforeEnter:m,onEnter:S,onEnterCancelled:y,onLeave:E,onLeaveCancelled:L,onBeforeAppear:R=m,onAppear:w=S,onAppearCancelled:P=y}=e,b=(N,U,F)=>{ns(N,U?u:a),ns(N,U?c:o),F&&F()},M=(N,U)=>{N._isLeaving=!1,ns(N,f),ns(N,h),ns(N,d),U&&U()},I=N=>(U,F)=>{const q=N?w:S,W=()=>b(U,N,F);ts(q,[U,W]),fd(()=>{ns(U,N?l:r),_i(U,N?u:a),dd(q)||hd(U,i,_,W)})};return Tt(e,{onBeforeEnter(N){ts(m,[N]),_i(N,r),_i(N,o)},onBeforeAppear(N){ts(R,[N]),_i(N,l),_i(N,c)},onEnter:I(!1),onAppear:I(!0),onLeave(N,U){N._isLeaving=!0;const F=()=>M(N,U);_i(N,f),_i(N,d),Vv(),fd(()=>{N._isLeaving&&(ns(N,f),_i(N,h),dd(E)||hd(N,i,p,F))}),ts(E,[N,F])},onEnterCancelled(N){b(N,!1),ts(y,[N])},onAppearCancelled(N){b(N,!0),ts(P,[N])},onLeaveCancelled(N){M(N),ts(L,[N])}})}function kv(n){if(n==null)return null;if(vt(n))return[_l(n.enter),_l(n.leave)];{const e=_l(n);return[e,e]}}function _l(n){return Fg(n)}function _i(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[co]||(n[co]=new Set)).add(e)}function ns(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const t=n[co];t&&(t.delete(e),t.size||(n[co]=void 0))}function fd(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let zv=0;function hd(n,e,t,i){const s=n._endId=++zv,r=()=>{s===n._endId&&i()};if(t)return setTimeout(r,t);const{type:o,timeout:a,propCount:l}=Hv(n,e);if(!o)return i();const c=o+"end";let u=0;const f=()=>{n.removeEventListener(c,d),r()},d=h=>{h.target===n&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},a+1),n.addEventListener(c,d)}function Hv(n,e){const t=window.getComputedStyle(n),i=g=>(t[g]||"").split(", "),s=i(`${gi}Delay`),r=i(`${gi}Duration`),o=pd(s,r),a=i(`${Ar}Delay`),l=i(`${Ar}Duration`),c=pd(a,l);let u=null,f=0,d=0;e===gi?o>0&&(u=gi,f=o,d=r.length):e===Ar?c>0&&(u=Ar,f=c,d=l.length):(f=Math.max(o,c),u=f>0?o>c?gi:Ar:null,d=u?u===gi?r.length:l.length:0);const h=u===gi&&/\b(transform|all)(,|$)/.test(i(`${gi}Property`).toString());return{type:u,timeout:f,propCount:d,hasTransform:h}}function pd(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>md(t)+md(n[i])))}function md(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function Vv(){return document.body.offsetHeight}function Gv(n,e,t){const i=n[co];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const gd=Symbol("_vod"),Wv=Symbol("_vsh"),Xv=Symbol(""),qv=/(^|;)\s*display\s*:/;function jv(n,e,t){const i=n.style,s=At(t);let r=!1;if(t&&!s){if(e)if(At(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&ha(i,a,"")}else for(const o in e)t[o]==null&&ha(i,o,"");for(const o in t)o==="display"&&(r=!0),ha(i,o,t[o])}else if(s){if(e!==t){const o=i[Xv];o&&(t+=";"+o),i.cssText=t,r=qv.test(t)}}else e&&n.removeAttribute("style");gd in n&&(n[gd]=r?i.display:"",n[Wv]&&(i.display="none"))}const _d=/\s*!important$/;function ha(n,e,t){if(Be(t))t.forEach(i=>ha(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=$v(n,e);_d.test(t)?n.setProperty(vr(i),t.replace(_d,""),"important"):n[i]=t}}const vd=["Webkit","Moz","ms"],vl={};function $v(n,e){const t=vl[e];if(t)return t;let i=zn(e);if(i!=="filter"&&i in n)return vl[e]=i;i=za(i);for(let s=0;s<vd.length;s++){const r=vd[s]+i;if(r in n)return vl[e]=r}return e}const xd="http://www.w3.org/1999/xlink";function Kv(n,e,t,i,s){if(i&&e.startsWith("xlink:"))t==null?n.removeAttributeNS(xd,e.slice(6,e.length)):n.setAttributeNS(xd,e,t);else{const r=Gg(e);t==null||r&&!dp(t)?n.removeAttribute(e):n.setAttribute(e,r?"":t)}}function Yv(n,e,t,i,s,r,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,s,r),n[e]=t??"";return}const a=n.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){const c=a==="OPTION"?n.getAttribute("value")||"":n.value,u=t??"";(c!==u||!("_value"in n))&&(n.value=u),t==null&&n.removeAttribute(e),n._value=t;return}let l=!1;if(t===""||t==null){const c=typeof n[e];c==="boolean"?t=dp(t):t==null&&c==="string"?(t="",l=!0):c==="number"&&(t=0,l=!0)}try{n[e]=t}catch{}l&&n.removeAttribute(e)}function Zv(n,e,t,i){n.addEventListener(e,t,i)}function Jv(n,e,t,i){n.removeEventListener(e,t,i)}const yd=Symbol("_vei");function Qv(n,e,t,i,s=null){const r=n[yd]||(n[yd]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=ex(e);if(i){const c=r[e]=ix(i,s);Zv(n,a,c,l)}else o&&(Jv(n,a,o,l),r[e]=void 0)}}const Sd=/(?:Once|Passive|Capture)$/;function ex(n){let e;if(Sd.test(n)){e={};let i;for(;i=n.match(Sd);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):vr(n.slice(2)),e]}let xl=0;const tx=Promise.resolve(),nx=()=>xl||(tx.then(()=>xl=0),xl=Date.now());function ix(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;bn(sx(i,t.value),e,5,[i])};return t.value=n,t.attached=nx(),t}function sx(n,e){if(Be(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const Md=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,rx=(n,e,t,i,s,r,o,a,l)=>{const c=s==="svg";e==="class"?Gv(n,i,c):e==="style"?jv(n,t,i):Ba(e)?Zc(e)||Qv(n,e,t,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):ox(n,e,i,c))?Yv(n,e,i,r,o,a,l):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Kv(n,e,i,c))};function ox(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Md(e)&&Xe(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Md(e)&&At(t)?!1:e in n}const ax=Tt({patchProp:rx},Fv);let bd;function lx(){return bd||(bd=hv(ax))}const cx=(...n)=>{const e=lx().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=dx(i);if(!s)return;const r=e._component;!Xe(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const o=t(s,!1,ux(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function ux(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function dx(n){return At(n)?document.querySelector(n):n}const bs=(n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t},fx={},hx=n=>(vo("data-v-5993bbb0"),n=n(),xo(),n),px=hx(()=>qe("nav",{class:"row q-mt-xl"},[qe("div",{class:"col column items-end justify-center text-h2"},"Portfolio (WIP)"),qe("div",{class:"col-3"}),qe("div",{class:"col column items-start justify-center text-h2"},"Welkom")],-1)),mx=[px];function gx(n,e){return It(),Yt("section",null,mx)}const _x=bs(fx,[["render",gx],["__scopeId","data-v-5993bbb0"]]),Pc={xs:18,sm:24,md:32,lg:38,xl:46},lm={size:String};function cm(n,e=Pc){return Se(()=>n.size!==void 0?{fontSize:n.size in e?`${e[n.size]}px`:n.size}:null)}function Za(n,e,t,i){return Object.defineProperty(n,e,{get:t,set:i,enumerable:!0}),n}function pn(n){return _o(H_(n))}function mu(n){return _o(n)}const Ja=(n,e)=>{const t=xr(n);for(const i in n)Za(e,i,()=>t[i],s=>{t[i]=s});return e};function ui(n,e){return n!==void 0&&n()||e}function kr(n,e){return n!==void 0?e.concat(n()):e}function um(n,e,t,i,s,r){e.key=i+s;const o=Pe(n,e,t);return s===!0?kp(o,r()):o}const Ed="0 0 24 24",Td=n=>n,yl=n=>`ionicons ${n}`,dm={"mdi-":n=>`mdi ${n}`,"icon-":Td,"bt-":n=>`bt ${n}`,"eva-":n=>`eva ${n}`,"ion-md":yl,"ion-ios":yl,"ion-logo":yl,"iconfont ":Td,"ti-":n=>`themify-icon ${n}`,"bi-":n=>`bootstrap-icons ${n}`},fm={o_:"-outlined",r_:"-round",s_:"-sharp"},hm={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},vx=new RegExp("^("+Object.keys(dm).join("|")+")"),xx=new RegExp("^("+Object.keys(fm).join("|")+")"),Ad=new RegExp("^("+Object.keys(hm).join("|")+")"),yx=/^[Mm]\s?[-+]?\.?\d/,Sx=/^img:/,Mx=/^svguse:/,bx=/^ion-/,Ex=/^(fa-(sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /,Ks=pn({name:"QIcon",props:{...lm,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(n,{slots:e}){const{proxy:{$q:t}}=on(),i=cm(n),s=Se(()=>"q-icon"+(n.left===!0?" on-left":"")+(n.right===!0?" on-right":"")+(n.color!==void 0?` text-${n.color}`:"")),r=Se(()=>{let o,a=n.name;if(a==="none"||!a)return{none:!0};if(t.iconMapFn!==null){const u=t.iconMapFn(a);if(u!==void 0)if(u.icon!==void 0){if(a=u.icon,a==="none"||!a)return{none:!0}}else return{cls:u.cls,content:u.content!==void 0?u.content:" "}}if(yx.test(a)===!0){const[u,f=Ed]=a.split("|");return{svg:!0,viewBox:f,nodes:u.split("&&").map(d=>{const[h,g,_]=d.split("@@");return Pe("path",{style:g,d:h,transform:_})})}}if(Sx.test(a)===!0)return{img:!0,src:a.substring(4)};if(Mx.test(a)===!0){const[u,f=Ed]=a.split("|");return{svguse:!0,src:u.substring(7),viewBox:f}}let l=" ";const c=a.match(vx);if(c!==null)o=dm[c[1]](a);else if(Ex.test(a)===!0)o=a;else if(bx.test(a)===!0)o=`ionicons ion-${t.platform.is.ios===!0?"ios":"md"}${a.substring(3)}`;else if(Ad.test(a)===!0){o="notranslate material-symbols";const u=a.match(Ad);u!==null&&(a=a.substring(6),o+=hm[u[1]]),l=a}else{o="notranslate material-icons";const u=a.match(xx);u!==null&&(a=a.substring(2),o+=fm[u[1]]),l=a}return{cls:o,content:l}});return()=>{const o={class:s.value,style:i.value,"aria-hidden":"true",role:"presentation"};return r.value.none===!0?Pe(n.tag,o,ui(e.default)):r.value.img===!0?Pe(n.tag,o,kr(e.default,[Pe("img",{src:r.value.src})])):r.value.svg===!0?Pe(n.tag,o,kr(e.default,[Pe("svg",{viewBox:r.value.viewBox||"0 0 24 24"},r.value.nodes)])):r.value.svguse===!0?Pe(n.tag,o,kr(e.default,[Pe("svg",{viewBox:r.value.viewBox},[Pe("use",{"xlink:href":r.value.src})])])):(r.value.cls!==void 0&&(o.class+=" "+r.value.cls),Pe(n.tag,o,kr(e.default,[r.value.content])))}}}),Tx={size:{type:[String,Number],default:"1em"},color:String};function Ax(n){return{cSize:Se(()=>n.size in Pc?`${Pc[n.size]}px`:n.size),classes:Se(()=>"q-spinner"+(n.color?` text-${n.color}`:""))}}const pm=pn({name:"QSpinner",props:{...Tx,thickness:{type:Number,default:5}},setup(n){const{cSize:e,classes:t}=Ax(n);return()=>Pe("svg",{class:t.value+" q-spinner-mat",width:e.value,height:e.value,viewBox:"25 25 50 50"},[Pe("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":n.thickness,"stroke-miterlimit":"10"})])}});function wx(n,e){const t=n.style;for(const i in e)t[i]=e[i]}function Rx(n,e){if(n==null||n.contains(e)===!0)return!0;for(let t=n.nextElementSibling;t!==null;t=t.nextElementSibling)if(t.contains(e))return!0;return!1}const Qt={hasPassive:!1,passiveCapture:!0,notPassiveCapture:!0};try{const n=Object.defineProperty({},"passive",{get(){Object.assign(Qt,{hasPassive:!0,passive:{passive:!0},notPassive:{passive:!1},passiveCapture:{passive:!0,capture:!0},notPassiveCapture:{passive:!1,capture:!0}})}});window.addEventListener("qtest",null,n),window.removeEventListener("qtest",null,n)}catch{}function rr(){}function Cx(n){return n.button===0}function Lc(n){return n.touches&&n.touches[0]?n=n.touches[0]:n.changedTouches&&n.changedTouches[0]?n=n.changedTouches[0]:n.targetTouches&&n.targetTouches[0]&&(n=n.targetTouches[0]),{top:n.clientY,left:n.clientX}}function Px(n){if(n.path)return n.path;if(n.composedPath)return n.composedPath();const e=[];let t=n.target;for(;t;){if(e.push(t),t.tagName==="HTML")return e.push(document),e.push(window),e;t=t.parentElement}}function mm(n){n.stopPropagation()}function Ic(n){n.cancelable!==!1&&n.preventDefault()}function Dn(n){n.cancelable!==!1&&n.preventDefault(),n.stopPropagation()}function Sl(n,e){if(n===void 0||e===!0&&n.__dragPrevented===!0)return;const t=e===!0?i=>{i.__dragPrevented=!0,i.addEventListener("dragstart",Ic,Qt.notPassiveCapture)}:i=>{delete i.__dragPrevented,i.removeEventListener("dragstart",Ic,Qt.notPassiveCapture)};n.querySelectorAll("a, img").forEach(t)}function zr(n,e,t){const i=`__q_${e}_evt`;n[i]=n[i]!==void 0?n[i].concat(t):t,t.forEach(s=>{s[0].addEventListener(s[1],n[s[2]],Qt[s[3]])})}function pa(n,e){const t=`__q_${e}_evt`;n[t]!==void 0&&(n[t].forEach(i=>{i[0].removeEventListener(i[1],n[i[2]],Qt[i[3]])}),n[t]=void 0)}let gm=!1;function Lx(n){gm=n.isComposing===!0}function Ix(n){return gm===!0||n!==Object(n)||n.isComposing===!0||n.qKeyEvent===!0}function Ta(n,e){return Ix(n)===!0?!1:[].concat(e).includes(n.keyCode)}function Dx(n,e=250){let t=!1,i;return function(){return t===!1&&(t=!0,setTimeout(()=>{t=!1},e),i=n.apply(this,arguments)),i}}function wd(n,e,t,i){t.modifiers.stop===!0&&mm(n);const s=t.modifiers.color;let r=t.modifiers.center;r=r===!0||i===!0;const o=document.createElement("span"),a=document.createElement("span"),l=Lc(n),{left:c,top:u,width:f,height:d}=e.getBoundingClientRect(),h=Math.sqrt(f*f+d*d),g=h/2,_=`${(f-h)/2}px`,p=r?_:`${l.left-c-g}px`,m=`${(d-h)/2}px`,S=r?m:`${l.top-u-g}px`;a.className="q-ripple__inner",wx(a,{height:`${h}px`,width:`${h}px`,transform:`translate3d(${p},${S},0) scale3d(.2,.2,1)`,opacity:0}),o.className=`q-ripple${s?" text-"+s:""}`,o.setAttribute("dir","ltr"),o.appendChild(a),e.appendChild(o);const y=()=>{o.remove(),clearTimeout(E)};t.abort.push(y);let E=setTimeout(()=>{a.classList.add("q-ripple__inner--enter"),a.style.transform=`translate3d(${_},${m},0) scale3d(1,1,1)`,a.style.opacity=.2,E=setTimeout(()=>{a.classList.remove("q-ripple__inner--enter"),a.classList.add("q-ripple__inner--leave"),a.style.opacity=0,E=setTimeout(()=>{o.remove(),t.abort.splice(t.abort.indexOf(y),1)},275)},250)},50)}function Rd(n,{modifiers:e,value:t,arg:i}){const s=Object.assign({},n.cfg.ripple,e,t);n.modifiers={early:s.early===!0,stop:s.stop===!0,center:s.center===!0,color:s.color||i,keyCodes:[].concat(s.keyCodes||13)}}const Nx=mu({name:"ripple",beforeMount(n,e){const t=e.instance.$.appContext.config.globalProperties.$q.config||{};if(t.ripple===!1)return;const i={cfg:t,enabled:e.value!==!1,modifiers:{},abort:[],start(s){i.enabled===!0&&s.qSkipRipple!==!0&&s.type===(i.modifiers.early===!0?"pointerdown":"click")&&wd(s,n,i,s.qKeyEvent===!0)},keystart:Dx(s=>{i.enabled===!0&&s.qSkipRipple!==!0&&Ta(s,i.modifiers.keyCodes)===!0&&s.type===`key${i.modifiers.early===!0?"down":"up"}`&&wd(s,n,i,!0)},300)};Rd(i,e),n.__qripple=i,zr(i,"main",[[n,"pointerdown","start","passive"],[n,"click","start","passive"],[n,"keydown","keystart","passive"],[n,"keyup","keystart","passive"]])},updated(n,e){if(e.oldValue!==e.value){const t=n.__qripple;t!==void 0&&(t.enabled=e.value!==!1,t.enabled===!0&&Object(e.value)===e.value&&Rd(t,e))}},beforeUnmount(n){const e=n.__qripple;e!==void 0&&(e.abort.forEach(t=>{t()}),pa(e,"main"),delete n._qripple)}}),_m={left:"start",center:"center",right:"end",between:"between",around:"around",evenly:"evenly",stretch:"stretch"},Ux=Object.keys(_m),Ox={align:{type:String,validator:n=>Ux.includes(n)}};function Fx(n){return Se(()=>{const e=n.align===void 0?n.vertical===!0?"stretch":"left":n.align;return`${n.vertical===!0?"items":"justify"}-${_m[e]}`})}function vm(n,e){typeof e.type=="symbol"?Array.isArray(e.children)===!0&&e.children.forEach(t=>{vm(n,t)}):n.add(e)}function Bx(n){const e=new Set;return n.forEach(t=>{vm(e,t)}),Array.from(e)}function xm(n){return n.appContext.config.globalProperties.$router!==void 0}function Qr(n){return n.isUnmounted===!0||n.isDeactivated===!0}function Cd(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}function Pd(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function kx(n,e){for(const t in e){const i=e[t],s=n[t];if(typeof i=="string"){if(i!==s)return!1}else if(Array.isArray(s)===!1||s.length!==i.length||i.some((r,o)=>r!==s[o]))return!1}return!0}function Ld(n,e){return Array.isArray(e)===!0?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function zx(n,e){return Array.isArray(n)===!0?Ld(n,e):Array.isArray(e)===!0?Ld(e,n):n===e}function Hx(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(zx(n[t],e[t])===!1)return!1;return!0}const Vx={to:[String,Object],replace:Boolean,href:String,target:String,disable:Boolean};function Gx({fallbackTag:n,useDisableForRouterLinkProps:e=!0}={}){const t=on(),{props:i,proxy:s,emit:r}=t,o=xm(t),a=Se(()=>i.disable!==!0&&i.href!==void 0),l=Se(e===!0?()=>o===!0&&i.disable!==!0&&a.value!==!0&&i.to!==void 0&&i.to!==null&&i.to!=="":()=>o===!0&&a.value!==!0&&i.to!==void 0&&i.to!==null&&i.to!==""),c=Se(()=>l.value===!0?S(i.to):null),u=Se(()=>c.value!==null),f=Se(()=>a.value===!0||u.value===!0),d=Se(()=>i.type==="a"||f.value===!0?"a":i.tag||n||"div"),h=Se(()=>a.value===!0?{href:i.href,target:i.target}:u.value===!0?{href:c.value.href,target:i.target}:{}),g=Se(()=>{if(u.value===!1)return-1;const{matched:L}=c.value,{length:R}=L,w=L[R-1];if(w===void 0)return-1;const P=s.$route.matched;if(P.length===0)return-1;const b=P.findIndex(Pd.bind(null,w));if(b!==-1)return b;const M=Cd(L[R-2]);return R>1&&Cd(w)===M&&P[P.length-1].path!==M?P.findIndex(Pd.bind(null,L[R-2])):b}),_=Se(()=>u.value===!0&&g.value!==-1&&kx(s.$route.params,c.value.params)),p=Se(()=>_.value===!0&&g.value===s.$route.matched.length-1&&Hx(s.$route.params,c.value.params)),m=Se(()=>u.value===!0?p.value===!0?` ${i.exactActiveClass} ${i.activeClass}`:i.exact===!0?"":_.value===!0?` ${i.activeClass}`:"":"");function S(L){try{return s.$router.resolve(L)}catch{}return null}function y(L,{returnRouterError:R,to:w=i.to,replace:P=i.replace}={}){if(i.disable===!0)return L.preventDefault(),Promise.resolve(!1);if(L.metaKey||L.altKey||L.ctrlKey||L.shiftKey||L.button!==void 0&&L.button!==0||i.target==="_blank")return Promise.resolve(!1);L.preventDefault();const b=s.$router[P===!0?"replace":"push"](w);return R===!0?b:b.then(()=>{}).catch(()=>{})}function E(L){if(u.value===!0){const R=w=>y(L,w);r("click",L,R),L.defaultPrevented!==!0&&R()}else r("click",L)}return{hasRouterLink:u,hasHrefLink:a,hasLink:f,linkTag:d,resolvedLink:c,linkIsActive:_,linkIsExactActive:p,linkClass:m,linkAttrs:h,getLink:S,navigateToRouterLink:y,navigateOnClick:E}}const Id={none:0,xs:4,sm:8,md:16,lg:24,xl:32},Wx={xs:8,sm:10,md:14,lg:20,xl:24},Xx=["button","submit","reset"],qx=/[^\s]\/[^\s]/,jx=["flat","outline","push","unelevated"];function $x(n,e){return n.flat===!0?"flat":n.outline===!0?"outline":n.push===!0?"push":n.unelevated===!0?"unelevated":e}const Kx={...lm,...Vx,type:{type:String,default:"button"},label:[Number,String],icon:String,iconRight:String,...jx.reduce((n,e)=>(n[e]=Boolean)&&n,{}),square:Boolean,rounded:Boolean,glossy:Boolean,size:String,fab:Boolean,fabMini:Boolean,padding:String,color:String,textColor:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,tabindex:[Number,String],ripple:{type:[Boolean,Object],default:!0},align:{...Ox.align,default:"center"},stack:Boolean,stretch:Boolean,loading:{type:Boolean,default:null},disable:Boolean},Yx={...Kx,round:Boolean};function Zx(n){const e=cm(n,Wx),t=Fx(n),{hasRouterLink:i,hasLink:s,linkTag:r,linkAttrs:o,navigateOnClick:a}=Gx({fallbackTag:"button"}),l=Se(()=>{const p=n.fab===!1&&n.fabMini===!1?e.value:{};return n.padding!==void 0?Object.assign({},p,{padding:n.padding.split(/\s+/).map(m=>m in Id?Id[m]+"px":m).join(" "),minWidth:"0",minHeight:"0"}):p}),c=Se(()=>n.rounded===!0||n.fab===!0||n.fabMini===!0),u=Se(()=>n.disable!==!0&&n.loading!==!0),f=Se(()=>u.value===!0?n.tabindex||0:-1),d=Se(()=>$x(n,"standard")),h=Se(()=>{const p={tabindex:f.value};return s.value===!0?Object.assign(p,o.value):Xx.includes(n.type)===!0&&(p.type=n.type),r.value==="a"?(n.disable===!0?p["aria-disabled"]="true":p.href===void 0&&(p.role="button"),i.value!==!0&&qx.test(n.type)===!0&&(p.type=n.type)):n.disable===!0&&(p.disabled="",p["aria-disabled"]="true"),n.loading===!0&&n.percentage!==void 0&&Object.assign(p,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":n.percentage}),p}),g=Se(()=>{let p;n.color!==void 0?n.flat===!0||n.outline===!0?p=`text-${n.textColor||n.color}`:p=`bg-${n.color} text-${n.textColor||"white"}`:n.textColor&&(p=`text-${n.textColor}`);const m=n.round===!0?"round":`rectangle${c.value===!0?" q-btn--rounded":n.square===!0?" q-btn--square":""}`;return`q-btn--${d.value} q-btn--${m}`+(p!==void 0?" "+p:"")+(u.value===!0?" q-btn--actionable q-focusable q-hoverable":n.disable===!0?" disabled":"")+(n.fab===!0?" q-btn--fab":n.fabMini===!0?" q-btn--fab-mini":"")+(n.noCaps===!0?" q-btn--no-uppercase":"")+(n.dense===!0?" q-btn--dense":"")+(n.stretch===!0?" no-border-radius self-stretch":"")+(n.glossy===!0?" glossy":"")+(n.square?" q-btn--square":"")}),_=Se(()=>t.value+(n.stack===!0?" column":" row")+(n.noWrap===!0?" no-wrap text-no-wrap":"")+(n.loading===!0?" q-btn__content--hidden":""));return{classes:g,style:l,innerClasses:_,attributes:h,hasLink:s,linkTag:r,navigateOnClick:a,isActionable:u}}const{passiveCapture:_n}=Qt;let Ts=null,As=null,ws=null;const wt=pn({name:"QBtn",props:{...Yx,percentage:Number,darkPercentage:Boolean,onTouchstart:[Function,Array]},emits:["click","keydown","mousedown","keyup"],setup(n,{slots:e,emit:t}){const{proxy:i}=on(),{classes:s,style:r,innerClasses:o,attributes:a,hasLink:l,linkTag:c,navigateOnClick:u,isActionable:f}=Zx(n),d=xt(null),h=xt(null);let g=null,_,p=null;const m=Se(()=>n.label!==void 0&&n.label!==null&&n.label!==""),S=Se(()=>n.disable===!0||n.ripple===!1?!1:{keyCodes:l.value===!0?[13,32]:[13],...n.ripple===!0?{}:n.ripple}),y=Se(()=>({center:n.round})),E=Se(()=>{const F=Math.max(0,Math.min(100,n.percentage));return F>0?{transition:"transform 0.6s",transform:`translateX(${F-100}%)`}:{}}),L=Se(()=>{if(n.loading===!0)return{onMousedown:U,onTouchstart:U,onClick:U,onKeydown:U,onKeyup:U};if(f.value===!0){const F={onClick:w,onKeydown:P,onMousedown:M};if(i.$q.platform.has.touch===!0){const q=n.onTouchstart!==void 0?"":"Passive";F[`onTouchstart${q}`]=b}return F}return{onClick:Dn}}),R=Se(()=>({ref:d,class:"q-btn q-btn-item non-selectable no-outline "+s.value,style:r.value,...a.value,...L.value}));function w(F){if(d.value!==null){if(F!==void 0){if(F.defaultPrevented===!0)return;const q=document.activeElement;if(n.type==="submit"&&q!==document.body&&d.value.contains(q)===!1&&q.contains(d.value)===!1){d.value.focus();const W=()=>{document.removeEventListener("keydown",Dn,!0),document.removeEventListener("keyup",W,_n),d.value!==null&&d.value.removeEventListener("blur",W,_n)};document.addEventListener("keydown",Dn,!0),document.addEventListener("keyup",W,_n),d.value.addEventListener("blur",W,_n)}}u(F)}}function P(F){d.value!==null&&(t("keydown",F),Ta(F,[13,32])===!0&&As!==d.value&&(As!==null&&N(),F.defaultPrevented!==!0&&(d.value.focus(),As=d.value,d.value.classList.add("q-btn--active"),document.addEventListener("keyup",I,!0),d.value.addEventListener("blur",I,_n)),Dn(F)))}function b(F){d.value!==null&&(t("touchstart",F),F.defaultPrevented!==!0&&(Ts!==d.value&&(Ts!==null&&N(),Ts=d.value,g=F.target,g.addEventListener("touchcancel",I,_n),g.addEventListener("touchend",I,_n)),_=!0,p!==null&&clearTimeout(p),p=setTimeout(()=>{p=null,_=!1},200)))}function M(F){d.value!==null&&(F.qSkipRipple=_===!0,t("mousedown",F),F.defaultPrevented!==!0&&ws!==d.value&&(ws!==null&&N(),ws=d.value,d.value.classList.add("q-btn--active"),document.addEventListener("mouseup",I,_n)))}function I(F){if(d.value!==null&&!(F!==void 0&&F.type==="blur"&&document.activeElement===d.value)){if(F!==void 0&&F.type==="keyup"){if(As===d.value&&Ta(F,[13,32])===!0){const q=new MouseEvent("click",F);q.qKeyEvent=!0,F.defaultPrevented===!0&&Ic(q),F.cancelBubble===!0&&mm(q),d.value.dispatchEvent(q),Dn(F),F.qKeyEvent=!0}t("keyup",F)}N()}}function N(F){const q=h.value;F!==!0&&(Ts===d.value||ws===d.value)&&q!==null&&q!==document.activeElement&&(q.setAttribute("tabindex",-1),q.focus()),Ts===d.value&&(g!==null&&(g.removeEventListener("touchcancel",I,_n),g.removeEventListener("touchend",I,_n)),Ts=g=null),ws===d.value&&(document.removeEventListener("mouseup",I,_n),ws=null),As===d.value&&(document.removeEventListener("keyup",I,!0),d.value!==null&&d.value.removeEventListener("blur",I,_n),As=null),d.value!==null&&d.value.classList.remove("q-btn--active")}function U(F){Dn(F),F.qSkipRipple=!0}return $i(()=>{N(!0)}),Object.assign(i,{click:F=>{f.value===!0&&w(F)}}),()=>{let F=[];n.icon!==void 0&&F.push(Pe(Ks,{name:n.icon,left:n.stack!==!0&&m.value===!0,role:"img","aria-hidden":"true"})),m.value===!0&&F.push(Pe("span",{class:"block"},[n.label])),F=kr(e.default,F),n.iconRight!==void 0&&n.round===!1&&F.push(Pe(Ks,{name:n.iconRight,right:n.stack!==!0&&m.value===!0,role:"img","aria-hidden":"true"}));const q=[Pe("span",{class:"q-focus-helper",ref:h})];return n.loading===!0&&n.percentage!==void 0&&q.push(Pe("span",{class:"q-btn__progress absolute-full overflow-hidden"+(n.darkPercentage===!0?" q-btn__progress--dark":"")},[Pe("span",{class:"q-btn__progress-indicator fit block",style:E.value})])),q.push(Pe("span",{class:"q-btn__content text-center col items-center q-anchor--skip "+o.value},F)),n.loading!==null&&q.push(Pe(Gi,{name:"q-transition--fade"},()=>n.loading===!0?[Pe("span",{key:"loading",class:"absolute-full flex flex-center"},e.loading!==void 0?e.loading():[Pe(pm)])]:null)),kp(Pe(c.value,R.value,q),[[Nx,S.value,void 0,y.value]])}}});var Jx=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let ym;const Qa=n=>ym=n,Sm=Symbol();function Dc(n){return n&&typeof n=="object"&&Object.prototype.toString.call(n)==="[object Object]"&&typeof n.toJSON!="function"}var eo;(function(n){n.direct="direct",n.patchObject="patch object",n.patchFunction="patch function"})(eo||(eo={}));function Qx(){const n=hp(!0),e=n.run(()=>xt({}));let t=[],i=[];const s=_o({install(r){Qa(s),s._a=r,r.provide(Sm,s),r.config.globalProperties.$pinia=s,i.forEach(o=>t.push(o)),i=[]},use(r){return!this._a&&!Jx?i.push(r):t.push(r),this},_p:t,_a:null,_e:n,_s:new Map,state:e});return s}const Mm=()=>{};function Dd(n,e,t,i=Mm){n.push(e);const s=()=>{const r=n.indexOf(e);r>-1&&(n.splice(r,1),i())};return!t&&pp()&&Xg(s),s}function Rs(n,...e){n.slice().forEach(t=>{t(...e)})}const e0=n=>n();function Nc(n,e){n instanceof Map&&e instanceof Map&&e.forEach((t,i)=>n.set(i,t)),n instanceof Set&&e instanceof Set&&e.forEach(n.add,n);for(const t in e){if(!e.hasOwnProperty(t))continue;const i=e[t],s=n[t];Dc(s)&&Dc(i)&&n.hasOwnProperty(t)&&!yt(i)&&!xs(i)?n[t]=Nc(s,i):n[t]=i}return n}const t0=Symbol();function n0(n){return!Dc(n)||!n.hasOwnProperty(t0)}const{assign:Ti}=Object;function i0(n){return!!(yt(n)&&n.effect)}function s0(n,e,t,i){const{state:s,actions:r,getters:o}=e,a=t.state.value[n];let l;function c(){a||(t.state.value[n]=s?s():{});const u=__(t.state.value[n]);return Ti(u,r,Object.keys(o||{}).reduce((f,d)=>(f[d]=_o(Se(()=>{Qa(t);const h=t._s.get(n);return o[d].call(h,h)})),f),{}))}return l=bm(n,c,e,t,i,!0),l}function bm(n,e,t={},i,s,r){let o;const a=Ti({actions:{}},t),l={deep:!0};let c,u,f=[],d=[],h;const g=i.state.value[n];!r&&!g&&(i.state.value[n]={}),xt({});let _;function p(P){let b;c=u=!1,typeof P=="function"?(P(i.state.value[n]),b={type:eo.patchFunction,storeId:n,events:h}):(Nc(i.state.value[n],P),b={type:eo.patchObject,payload:P,storeId:n,events:h});const M=_=Symbol();sr().then(()=>{_===M&&(c=!0)}),u=!0,Rs(f,b,i.state.value[n])}const m=r?function(){const{state:b}=t,M=b?b():{};this.$patch(I=>{Ti(I,M)})}:Mm;function S(){o.stop(),f=[],d=[],i._s.delete(n)}function y(P,b){return function(){Qa(i);const M=Array.from(arguments),I=[],N=[];function U(W){I.push(W)}function F(W){N.push(W)}Rs(d,{args:M,name:P,store:L,after:U,onError:F});let q;try{q=b.apply(this&&this.$id===n?this:L,M)}catch(W){throw Rs(N,W),W}return q instanceof Promise?q.then(W=>(Rs(I,W),W)).catch(W=>(Rs(N,W),Promise.reject(W))):(Rs(I,q),q)}}const E={_p:i,$id:n,$onAction:Dd.bind(null,d),$patch:p,$reset:m,$subscribe(P,b={}){const M=Dd(f,P,b.detached,()=>I()),I=o.run(()=>Pn(()=>i.state.value[n],N=>{(b.flush==="sync"?u:c)&&P({storeId:n,type:eo.direct,events:h},N)},Ti({},l,b)));return M},$dispose:S},L=xr(E);i._s.set(n,L);const w=(i._a&&i._a.runWithContext||e0)(()=>i._e.run(()=>(o=hp()).run(e)));for(const P in w){const b=w[P];if(yt(b)&&!i0(b)||xs(b))r||(g&&n0(b)&&(yt(b)?b.value=g[P]:Nc(b,g[P])),i.state.value[n][P]=b);else if(typeof b=="function"){const M=y(P,b);w[P]=M,a.actions[P]=b}}return Ti(L,w),Ti(tt(L),w),Object.defineProperty(L,"$state",{get:()=>i.state.value[n],set:P=>{p(b=>{Ti(b,P)})}}),i._p.forEach(P=>{Ti(L,o.run(()=>P({store:L,app:i._a,pinia:i,options:a})))}),g&&r&&t.hydrate&&t.hydrate(L.$state,g),c=!0,u=!0,L}function r0(n,e,t){let i,s;const r=typeof e=="function";i=n,s=r?t:e;function o(a,l){const c=av();return a=a||(c?Yr(Sm,null):null),a&&Qa(a),a=ym,a._s.has(i)||(r?bm(i,e,s,a):s0(i,s,a)),a._s.get(i)}return o.$id=i,o}const So=r0("settings",{state:()=>({siteMode:null,tab:"home"})}),Em=n=>(vo("data-v-8702b5f3"),n=n(),xo(),n),o0={class:"row"},a0={class:"col column items-center"},l0=Em(()=>qe("p",{class:"text-h3 self-end q-pb-lg"},"2D/Website",-1)),c0={class:"col column items-center"},u0=Em(()=>qe("p",{class:"text-h3 self-end q-pb-lg"},"3D/Omgeving",-1)),d0={__name:"IndexSelection",setup(n){const e=So();return(t,i)=>(It(),Yt("main",null,[qe("div",o0,[qe("div",a0,[Ae(wt,{class:"bigButton",onClick:i[0]||(i[0]=s=>nt(e).siteMode="2D")},{default:tn(()=>[Ae(Ks,{name:"desktop_windows",size:"15vh",id:"leftIcon"}),Ae(Ks,{name:"smartphone",size:"15vh",id:"rightIcon"}),l0]),_:1})]),qe("div",c0,[Ae(wt,{class:"bigButton",onClick:i[1]||(i[1]=s=>nt(e).siteMode="3D")},{default:tn(()=>[Ae(Ks,{name:"videocam",size:"15vh",id:"leftIcon"}),Ae(Ks,{name:"sports_esports",size:"15vh",id:"rightIcon"}),u0]),_:1})])])]))}},f0=bs(d0,[["__scopeId","data-v-8702b5f3"]]),h0={__name:"Index",setup(n){return(e,t)=>(It(),Yt("main",null,[Ae(_x),Ae(f0)]))}},Hn=xt(!1);let Uc;function p0(n,e){const t=/(edg|edge|edga|edgios)\/([\w.]+)/.exec(n)||/(opr)[\/]([\w.]+)/.exec(n)||/(vivaldi)[\/]([\w.]+)/.exec(n)||/(chrome|crios)[\/]([\w.]+)/.exec(n)||/(version)(applewebkit)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(n)||/(webkit)[\/]([\w.]+).*(version)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(n)||/(firefox|fxios)[\/]([\w.]+)/.exec(n)||/(webkit)[\/]([\w.]+)/.exec(n)||/(opera)(?:.*version|)[\/]([\w.]+)/.exec(n)||[];return{browser:t[5]||t[3]||t[1]||"",version:t[4]||t[2]||"0",platform:e[0]||""}}function m0(n){return/(ipad)/.exec(n)||/(ipod)/.exec(n)||/(windows phone)/.exec(n)||/(iphone)/.exec(n)||/(kindle)/.exec(n)||/(silk)/.exec(n)||/(android)/.exec(n)||/(win)/.exec(n)||/(mac)/.exec(n)||/(linux)/.exec(n)||/(cros)/.exec(n)||/(playbook)/.exec(n)||/(bb)/.exec(n)||/(blackberry)/.exec(n)||[]}const Tm="ontouchstart"in window||window.navigator.maxTouchPoints>0;function g0(n){const e=n.toLowerCase(),t=m0(e),i=p0(e,t),s={};i.browser&&(s[i.browser]=!0,s.version=i.version,s.versionNumber=parseInt(i.version,10)),i.platform&&(s[i.platform]=!0);const r=s.android||s.ios||s.bb||s.blackberry||s.ipad||s.iphone||s.ipod||s.kindle||s.playbook||s.silk||s["windows phone"];if(r===!0||e.indexOf("mobile")!==-1?s.mobile=!0:s.desktop=!0,s["windows phone"]&&(s.winphone=!0,delete s["windows phone"]),s.edga||s.edgios||s.edg?(s.edge=!0,i.browser="edge"):s.crios?(s.chrome=!0,i.browser="chrome"):s.fxios&&(s.firefox=!0,i.browser="firefox"),(s.ipod||s.ipad||s.iphone)&&(s.ios=!0),s.vivaldi&&(i.browser="vivaldi",s.vivaldi=!0),(s.chrome||s.opr||s.safari||s.vivaldi||s.mobile===!0&&s.ios!==!0&&r!==!0)&&(s.webkit=!0),s.opr&&(i.browser="opera",s.opera=!0),s.safari&&(s.blackberry||s.bb?(i.browser="blackberry",s.blackberry=!0):s.playbook?(i.browser="playbook",s.playbook=!0):s.android?(i.browser="android",s.android=!0):s.kindle?(i.browser="kindle",s.kindle=!0):s.silk&&(i.browser="silk",s.silk=!0)),s.name=i.browser,s.platform=i.platform,e.indexOf("electron")!==-1)s.electron=!0;else if(document.location.href.indexOf("-extension://")!==-1)s.bex=!0;else{if(window.Capacitor!==void 0?(s.capacitor=!0,s.nativeMobile=!0,s.nativeMobileWrapper="capacitor"):(window._cordovaNative!==void 0||window.cordova!==void 0)&&(s.cordova=!0,s.nativeMobile=!0,s.nativeMobileWrapper="cordova"),Hn.value===!0&&(Uc={is:{...s}}),Tm===!0&&s.mac===!0&&(s.desktop===!0&&s.safari===!0||s.nativeMobile===!0&&s.android!==!0&&s.ios!==!0&&s.ipad!==!0)){delete s.mac,delete s.desktop;const o=Math.min(window.innerHeight,window.innerWidth)>414?"ipad":"iphone";Object.assign(s,{mobile:!0,ios:!0,platform:o,[o]:!0})}s.mobile!==!0&&window.navigator.userAgentData&&window.navigator.userAgentData.mobile&&(delete s.desktop,s.mobile=!0)}return s}const Nd=navigator.userAgent||navigator.vendor||window.opera,_0={has:{touch:!1,webStorage:!1},within:{iframe:!1}},ht={userAgent:Nd,is:g0(Nd),has:{touch:Tm},within:{iframe:window.self!==window.top}},Aa={install(n){const{$q:e}=n;Hn.value===!0?(n.onSSRHydrated.push(()=>{Object.assign(e.platform,ht),Hn.value=!1}),e.platform=xr(this)):e.platform=this}};{let n;Za(ht.has,"webStorage",()=>{if(n!==void 0)return n;try{if(window.localStorage)return n=!0,!0}catch{}return n=!1,!1}),Object.assign(Aa,ht),Hn.value===!0&&(Object.assign(Aa,Uc,_0),Uc=null)}const gu={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},v0=Object.keys(gu);gu.all=!0;function Ud(n){const e={};for(const t of v0)n[t]===!0&&(e[t]=!0);return Object.keys(e).length===0?gu:(e.horizontal===!0?e.left=e.right=!0:e.left===!0&&e.right===!0&&(e.horizontal=!0),e.vertical===!0?e.up=e.down=!0:e.up===!0&&e.down===!0&&(e.vertical=!0),e.horizontal===!0&&e.vertical===!0&&(e.all=!0),e)}const x0=["INPUT","TEXTAREA"];function Od(n,e){return e.event===void 0&&n.target!==void 0&&n.target.draggable!==!0&&typeof e.handler=="function"&&x0.includes(n.target.nodeName.toUpperCase())===!1&&(n.qClonedBy===void 0||n.qClonedBy.indexOf(e.uid)===-1)}function y0(){if(window.getSelection!==void 0){const n=window.getSelection();n.empty!==void 0?n.empty():n.removeAllRanges!==void 0&&(n.removeAllRanges(),Aa.is.mobile!==!0&&n.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}function S0(n){const e=[.06,6,50];return typeof n=="string"&&n.length&&n.split(":").forEach((t,i)=>{const s=parseFloat(t);s&&(e[i]=s)}),e}const M0=mu({name:"touch-swipe",beforeMount(n,{value:e,arg:t,modifiers:i}){if(i.mouse!==!0&&ht.has.touch!==!0)return;const s=i.mouseCapture===!0?"Capture":"",r={handler:e,sensitivity:S0(t),direction:Ud(i),noop:rr,mouseStart(o){Od(o,r)&&Cx(o)&&(zr(r,"temp",[[document,"mousemove","move",`notPassive${s}`],[document,"mouseup","end","notPassiveCapture"]]),r.start(o,!0))},touchStart(o){if(Od(o,r)){const a=o.target;zr(r,"temp",[[a,"touchmove","move","notPassiveCapture"],[a,"touchcancel","end","notPassiveCapture"],[a,"touchend","end","notPassiveCapture"]]),r.start(o)}},start(o,a){ht.is.firefox===!0&&Sl(n,!0);const l=Lc(o);r.event={x:l.left,y:l.top,time:Date.now(),mouse:a===!0,dir:!1}},move(o){if(r.event===void 0)return;if(r.event.dir!==!1){Dn(o);return}const a=Date.now()-r.event.time;if(a===0)return;const l=Lc(o),c=l.left-r.event.x,u=Math.abs(c),f=l.top-r.event.y,d=Math.abs(f);if(r.event.mouse!==!0){if(u<r.sensitivity[1]&&d<r.sensitivity[1]){r.end(o);return}}else if(window.getSelection().toString()!==""){r.end(o);return}else if(u<r.sensitivity[2]&&d<r.sensitivity[2])return;const h=u/a,g=d/a;r.direction.vertical===!0&&u<d&&u<100&&g>r.sensitivity[0]&&(r.event.dir=f<0?"up":"down"),r.direction.horizontal===!0&&u>d&&d<100&&h>r.sensitivity[0]&&(r.event.dir=c<0?"left":"right"),r.direction.up===!0&&u<d&&f<0&&u<100&&g>r.sensitivity[0]&&(r.event.dir="up"),r.direction.down===!0&&u<d&&f>0&&u<100&&g>r.sensitivity[0]&&(r.event.dir="down"),r.direction.left===!0&&u>d&&c<0&&d<100&&h>r.sensitivity[0]&&(r.event.dir="left"),r.direction.right===!0&&u>d&&c>0&&d<100&&h>r.sensitivity[0]&&(r.event.dir="right"),r.event.dir!==!1?(Dn(o),r.event.mouse===!0&&(document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),y0(),r.styleCleanup=_=>{r.styleCleanup=void 0,document.body.classList.remove("non-selectable");const p=()=>{document.body.classList.remove("no-pointer-events--children")};_===!0?setTimeout(p,50):p()}),r.handler({evt:o,touch:r.event.mouse!==!0,mouse:r.event.mouse,direction:r.event.dir,duration:a,distance:{x:u,y:d}})):r.end(o)},end(o){r.event!==void 0&&(pa(r,"temp"),ht.is.firefox===!0&&Sl(n,!1),r.styleCleanup!==void 0&&r.styleCleanup(!0),o!==void 0&&r.event.dir!==!1&&Dn(o),r.event=void 0)}};if(n.__qtouchswipe=r,i.mouse===!0){const o=i.mouseCapture===!0||i.mousecapture===!0?"Capture":"";zr(r,"main",[[n,"mousedown","mouseStart",`passive${o}`]])}ht.has.touch===!0&&zr(r,"main",[[n,"touchstart","touchStart",`passive${i.capture===!0?"Capture":""}`],[n,"touchmove","noop","notPassiveCapture"]])},updated(n,e){const t=n.__qtouchswipe;t!==void 0&&(e.oldValue!==e.value&&(typeof e.value!="function"&&t.end(),t.handler=e.value),t.direction=Ud(e.modifiers))},beforeUnmount(n){const e=n.__qtouchswipe;e!==void 0&&(pa(e,"main"),pa(e,"temp"),ht.is.firefox===!0&&Sl(n,!1),e.styleCleanup!==void 0&&e.styleCleanup(),delete n.__qtouchswipe)}});function b0(){let n=Object.create(null);return{getCache:(e,t)=>n[e]===void 0?n[e]=typeof t=="function"?t():t:n[e],setCache(e,t){n[e]=t},hasCache(e){return Object.hasOwnProperty.call(n,e)},clearCache(e){e!==void 0?delete n[e]:n=Object.create(null)}}}const E0={name:{required:!0},disable:Boolean},Fd={setup(n,{slots:e}){return()=>Pe("div",{class:"q-panel scroll",role:"tabpanel"},ui(e.default))}},T0={modelValue:{required:!0},animated:Boolean,infinite:Boolean,swipeable:Boolean,vertical:Boolean,transitionPrev:String,transitionNext:String,transitionDuration:{type:[String,Number],default:300},keepAlive:Boolean,keepAliveInclude:[String,Array,RegExp],keepAliveExclude:[String,Array,RegExp],keepAliveMax:Number},A0=["update:modelValue","beforeTransition","transition"];function w0(){const{props:n,emit:e,proxy:t}=on(),{getCache:i}=b0();let s,r;const o=xt(null),a=xt(null);function l(U){const F=n.vertical===!0?"up":"left";w((t.$q.lang.rtl===!0?-1:1)*(U.direction===F?1:-1))}const c=Se(()=>[[M0,l,void 0,{horizontal:n.vertical!==!0,vertical:n.vertical,mouse:!0}]]),u=Se(()=>n.transitionPrev||`slide-${n.vertical===!0?"down":"right"}`),f=Se(()=>n.transitionNext||`slide-${n.vertical===!0?"up":"left"}`),d=Se(()=>`--q-transition-duration: ${n.transitionDuration}ms`),h=Se(()=>typeof n.modelValue=="string"||typeof n.modelValue=="number"?n.modelValue:String(n.modelValue)),g=Se(()=>({include:n.keepAliveInclude,exclude:n.keepAliveExclude,max:n.keepAliveMax})),_=Se(()=>n.keepAliveInclude!==void 0||n.keepAliveExclude!==void 0);Pn(()=>n.modelValue,(U,F)=>{const q=y(U)===!0?E(U):-1;r!==!0&&R(q===-1?0:q<E(F)?-1:1),o.value!==q&&(o.value=q,e("beforeTransition",U,F),sr(()=>{e("transition",U,F)}))});function p(){w(1)}function m(){w(-1)}function S(U){e("update:modelValue",U)}function y(U){return U!=null&&U!==""}function E(U){return s.findIndex(F=>F.props.name===U&&F.props.disable!==""&&F.props.disable!==!0)}function L(){return s.filter(U=>U.props.disable!==""&&U.props.disable!==!0)}function R(U){const F=U!==0&&n.animated===!0&&o.value!==-1?"q-transition--"+(U===-1?u.value:f.value):null;a.value!==F&&(a.value=F)}function w(U,F=o.value){let q=F+U;for(;q!==-1&&q<s.length;){const W=s[q];if(W!==void 0&&W.props.disable!==""&&W.props.disable!==!0){R(U),r=!0,e("update:modelValue",W.props.name),setTimeout(()=>{r=!1});return}q+=U}n.infinite===!0&&s.length!==0&&F!==-1&&F!==s.length&&w(U,U===-1?s.length:-1)}function P(){const U=E(n.modelValue);return o.value!==U&&(o.value=U),!0}function b(){const U=y(n.modelValue)===!0&&P()&&s[o.value];return n.keepAlive===!0?[Pe(G_,g.value,[Pe(_.value===!0?i(h.value,()=>({...Fd,name:h.value})):Fd,{key:h.value,style:d.value},()=>U)])]:[Pe("div",{class:"q-panel scroll",style:d.value,key:h.value,role:"tabpanel"},[U])]}function M(){if(s.length!==0)return n.animated===!0?[Pe(Gi,{name:a.value},b)]:b()}function I(U){return s=Bx(ui(U.default,[])).filter(F=>F.props!==null&&F.props.slot===void 0&&y(F.props.name)===!0),s.length}function N(){return s}return Object.assign(t,{next:p,previous:m,goTo:S}),{panelIndex:o,panelDirectives:c,updatePanelsList:I,updatePanelIndex:P,getPanelContent:M,getEnabledPanels:L,getPanels:N,isValidPanelName:y,keepAliveProps:g,needsUniqueKeepAliveWrapper:_,goToPanelByOffset:w,goToPanel:S,nextPanel:p,previousPanel:m}}const Ml=pn({name:"QTabPanel",props:E0,setup(n,{slots:e}){return()=>Pe("div",{class:"q-tab-panel",role:"tabpanel"},ui(e.default))}}),_u={dark:{type:Boolean,default:null}};function vu(n,e){return Se(()=>n.dark===null?e.dark.isActive:n.dark)}const R0=pn({name:"QTabPanels",props:{...T0,..._u},emits:A0,setup(n,{slots:e}){const t=on(),i=vu(n,t.proxy.$q),{updatePanelsList:s,getPanelContent:r,panelDirectives:o}=w0(),a=Se(()=>"q-tab-panels q-panel-parent"+(i.value===!0?" q-tab-panels--dark q-dark":""));return()=>(s(e),um("div",{class:a.value},r(),"pan",n.swipeable,()=>o.value))}}),C0=Pe("div",{class:"q-space"}),P0=pn({name:"QSpace",setup(){return()=>C0}}),Am=pn({name:"QCard",props:{..._u,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(n,{slots:e}){const{proxy:{$q:t}}=on(),i=vu(n,t),s=Se(()=>"q-card"+(i.value===!0?" q-card--dark q-dark":"")+(n.bordered===!0?" q-card--bordered":"")+(n.square===!0?" q-card--square no-border-radius":"")+(n.flat===!0?" q-card--flat no-shadow":""));return()=>Pe(n.tag,{class:s.value},ui(e.default))}}),wm=()=>!0;function L0(n){return typeof n=="string"&&n!==""&&n!=="/"&&n!=="#/"}function I0(n){return n.startsWith("#")===!0&&(n=n.substring(1)),n.startsWith("/")===!1&&(n="/"+n),n.endsWith("/")===!0&&(n=n.substring(0,n.length-1)),"#"+n}function D0(n){if(n.backButtonExit===!1)return()=>!1;if(n.backButtonExit==="*")return wm;const e=["#/"];return Array.isArray(n.backButtonExit)===!0&&e.push(...n.backButtonExit.filter(L0).map(I0)),()=>e.includes(window.location.hash)}const Oc={__history:[],add:rr,remove:rr,install({$q:n}){if(this.__installed===!0)return;const{cordova:e,capacitor:t}=ht.is;if(e!==!0&&t!==!0)return;const i=n.config[e===!0?"cordova":"capacitor"];if(i!==void 0&&i.backButton===!1||t===!0&&(window.Capacitor===void 0||window.Capacitor.Plugins.App===void 0))return;this.add=o=>{o.condition===void 0&&(o.condition=wm),this.__history.push(o)},this.remove=o=>{const a=this.__history.indexOf(o);a>=0&&this.__history.splice(a,1)};const s=D0(Object.assign({backButtonExit:!0},i)),r=()=>{if(this.__history.length){const o=this.__history[this.__history.length-1];o.condition()===!0&&(this.__history.pop(),o.handler())}else s()===!0?navigator.app.exitApp():window.history.back()};e===!0?document.addEventListener("deviceready",()=>{document.addEventListener("backbutton",r,!1)}):window.Capacitor.Plugins.App.addListener("backButton",r)}};function N0(n,e,t){let i;function s(){i!==void 0&&(Oc.remove(i),i=void 0)}return $i(()=>{n.value===!0&&s()}),{removeFromHistory:s,addToHistory(){i={condition:()=>t.value===!0,handler:e},Oc.add(i)}}}function Fc(){let n=null;const e=on();function t(){n!==null&&(clearTimeout(n),n=null)}return uu(t),$i(t),{removeTimeout:t,registerTimeout(i,s){t(),Qr(e)===!1&&(n=setTimeout(()=>{n=null,i()},s))}}}function U0(){let n;const e=on();function t(){n=void 0}return uu(t),$i(t),{removeTick:t,registerTick(i){n=i,sr(()=>{n===i&&(Qr(e)===!1&&n(),n=void 0)})}}}const O0={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},F0=["beforeShow","show","beforeHide","hide"];function B0({showing:n,canShow:e,hideOnRouteChange:t,handleShow:i,handleHide:s,processOnMount:r}){const o=on(),{props:a,emit:l,proxy:c}=o;let u;function f(S){n.value===!0?g(S):d(S)}function d(S){if(a.disable===!0||S!==void 0&&S.qAnchorHandled===!0||e!==void 0&&e(S)!==!0)return;const y=a["onUpdate:modelValue"]!==void 0;y===!0&&(l("update:modelValue",!0),u=S,sr(()=>{u===S&&(u=void 0)})),(a.modelValue===null||y===!1)&&h(S)}function h(S){n.value!==!0&&(n.value=!0,l("beforeShow",S),i!==void 0?i(S):l("show",S))}function g(S){if(a.disable===!0)return;const y=a["onUpdate:modelValue"]!==void 0;y===!0&&(l("update:modelValue",!1),u=S,sr(()=>{u===S&&(u=void 0)})),(a.modelValue===null||y===!1)&&_(S)}function _(S){n.value!==!1&&(n.value=!1,l("beforeHide",S),s!==void 0?s(S):l("hide",S))}function p(S){a.disable===!0&&S===!0?a["onUpdate:modelValue"]!==void 0&&l("update:modelValue",!1):S===!0!==n.value&&(S===!0?h:_)(u)}Pn(()=>a.modelValue,p),t!==void 0&&xm(o)===!0&&Pn(()=>c.$route.fullPath,()=>{t.value===!0&&n.value===!0&&g()}),r===!0&&yr(()=>{p(a.modelValue)});const m={show:d,hide:g,toggle:f};return Object.assign(c,m),m}const k0={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function z0(n,e=()=>{},t=()=>{}){return{transitionProps:Se(()=>{const i=`q-transition--${n.transitionShow||e()}`,s=`q-transition--${n.transitionHide||t()}`;return{appear:!0,enterFromClass:`${i}-enter-from`,enterActiveClass:`${i}-enter-active`,enterToClass:`${i}-enter-to`,leaveFromClass:`${s}-leave-from`,leaveActiveClass:`${s}-leave-active`,leaveToClass:`${s}-leave-to`}}),transitionStyle:Se(()=>`--q-transition-duration: ${n.transitionDuration}ms`)}}let Hr=[],uo=[];function Rm(n){uo=uo.filter(e=>e!==n)}function H0(n){Rm(n),uo.push(n)}function Bd(n){Rm(n),uo.length===0&&Hr.length!==0&&(Hr[Hr.length-1](),Hr=[])}function V0(n){uo.length===0?n():Hr.push(n)}const wa={};let Cm=!1;function G0(){Cm=!0}let W0=1,X0=document.body;function q0(n,e){const t=document.createElement("div");if(t.id=`q-portal--${e}--${W0++}`,wa.globalNodes!==void 0){const i=wa.globalNodes.class;i!==void 0&&(t.className=i)}return X0.appendChild(t),t}function j0(n){n.remove()}const bl=[],$0=pn({name:"QPortal",setup(n,{slots:e}){return()=>e.default()}});function K0(n){for(n=n.parent;n!=null;){if(n.type.name==="QGlobalDialog")return!0;if(n.type.name==="QDialog"||n.type.name==="QMenu")return!1;n=n.parent}return!1}function Y0(n,e,t,i){const s=xt(!1),r=xt(!1);let o=null;const a={},l=K0(n);function c(f){if(f===!0){Bd(a),r.value=!0;return}r.value=!1,s.value===!1&&(l===!1&&o===null&&(o=q0(!1,i)),s.value=!0,bl.push(n.proxy),H0(a))}function u(f){if(r.value=!1,f!==!0)return;Bd(a),s.value=!1;const d=bl.indexOf(n.proxy);d!==-1&&bl.splice(d,1),o!==null&&(j0(o),o=null)}return ja(()=>{u(!0)}),n.proxy.__qPortal=!0,Za(n.proxy,"contentEl",()=>e.value),{showPortal:c,hidePortal:u,portalIsActive:s,portalIsAccessible:r,renderPortal:()=>l===!0?t():s.value===!0?[Pe(yv,{to:o},Pe($0,t))]:void 0}}function Z0(n){return n===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:n.scrollTop}function J0(n){return n===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:n.scrollLeft}function Q0(n,e=!0){return!n||n.nodeType!==Node.ELEMENT_NODE?!1:e?n.scrollHeight>n.clientHeight&&(n.classList.contains("scroll")||n.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(n)["overflow-y"])):n.scrollWidth>n.clientWidth&&(n.classList.contains("scroll")||n.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(n)["overflow-x"]))}let wr=0,El,Tl,Vr,Al=!1,kd,zd,Hd,is=null;function ey(n){ty(n)&&Dn(n)}function ty(n){if(n.target===document.body||n.target.classList.contains("q-layout__backdrop"))return!0;const e=Px(n),t=n.shiftKey&&!n.deltaX,i=!t&&Math.abs(n.deltaX)<=Math.abs(n.deltaY),s=t||i?n.deltaY:n.deltaX;for(let r=0;r<e.length;r++){const o=e[r];if(Q0(o,i))return i?s<0&&o.scrollTop===0?!0:s>0&&o.scrollTop+o.clientHeight===o.scrollHeight:s<0&&o.scrollLeft===0?!0:s>0&&o.scrollLeft+o.clientWidth===o.scrollWidth}return!0}function Vd(n){n.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function No(n){Al!==!0&&(Al=!0,requestAnimationFrame(()=>{Al=!1;const{height:e}=n.target,{clientHeight:t,scrollTop:i}=document.scrollingElement;(Vr===void 0||e!==window.innerHeight)&&(Vr=t-e,document.scrollingElement.scrollTop=i),i>Vr&&(document.scrollingElement.scrollTop-=Math.ceil((i-Vr)/8))}))}function Gd(n){const e=document.body,t=window.visualViewport!==void 0;if(n==="add"){const{overflowY:i,overflowX:s}=window.getComputedStyle(e);El=J0(window),Tl=Z0(window),kd=e.style.left,zd=e.style.top,Hd=window.location.href,e.style.left=`-${El}px`,e.style.top=`-${Tl}px`,s!=="hidden"&&(s==="scroll"||e.scrollWidth>window.innerWidth)&&e.classList.add("q-body--force-scrollbar-x"),i!=="hidden"&&(i==="scroll"||e.scrollHeight>window.innerHeight)&&e.classList.add("q-body--force-scrollbar-y"),e.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,ht.is.ios===!0&&(t===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",No,Qt.passiveCapture),window.visualViewport.addEventListener("scroll",No,Qt.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",Vd,Qt.passiveCapture))}ht.is.desktop===!0&&ht.is.mac===!0&&window[`${n}EventListener`]("wheel",ey,Qt.notPassive),n==="remove"&&(ht.is.ios===!0&&(t===!0?(window.visualViewport.removeEventListener("resize",No,Qt.passiveCapture),window.visualViewport.removeEventListener("scroll",No,Qt.passiveCapture)):window.removeEventListener("scroll",Vd,Qt.passiveCapture)),e.classList.remove("q-body--prevent-scroll"),e.classList.remove("q-body--force-scrollbar-x"),e.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,e.style.left=kd,e.style.top=zd,window.location.href===Hd&&window.scrollTo(El,Tl),Vr=void 0)}function ny(n){let e="add";if(n===!0){if(wr++,is!==null){clearTimeout(is),is=null;return}if(wr>1)return}else{if(wr===0||(wr--,wr>0))return;if(e="remove",ht.is.ios===!0&&ht.is.nativeMobile===!0){is!==null&&clearTimeout(is),is=setTimeout(()=>{Gd(e),is=null},100);return}}Gd(e)}function iy(){let n;return{preventBodyScroll(e){e!==n&&(n!==void 0||e===!0)&&(n=e,ny(e))}}}const ys=[];let or;function sy(n){or=n.keyCode===27}function ry(){or===!0&&(or=!1)}function oy(n){or===!0&&(or=!1,Ta(n,27)===!0&&ys[ys.length-1](n))}function Pm(n){window[n]("keydown",sy),window[n]("blur",ry),window[n]("keyup",oy),or=!1}function ay(n){ht.is.desktop===!0&&(ys.push(n),ys.length===1&&Pm("addEventListener"))}function Wd(n){const e=ys.indexOf(n);e!==-1&&(ys.splice(e,1),ys.length===0&&Pm("removeEventListener"))}const Ss=[];function Lm(n){Ss[Ss.length-1](n)}function ly(n){ht.is.desktop===!0&&(Ss.push(n),Ss.length===1&&document.body.addEventListener("focusin",Lm))}function Xd(n){const e=Ss.indexOf(n);e!==-1&&(Ss.splice(e,1),Ss.length===0&&document.body.removeEventListener("focusin",Lm))}let Uo=0;const cy={standard:"fixed-full flex-center",top:"fixed-top justify-center",bottom:"fixed-bottom justify-center",right:"fixed-right items-center",left:"fixed-left items-center"},qd={standard:["scale","scale"],top:["slide-down","slide-up"],bottom:["slide-up","slide-down"],right:["slide-left","slide-right"],left:["slide-right","slide-left"]},uy=pn({name:"QDialog",inheritAttrs:!1,props:{...O0,...k0,transitionShow:String,transitionHide:String,persistent:Boolean,autoClose:Boolean,allowFocusOutside:Boolean,noEscDismiss:Boolean,noBackdropDismiss:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,noShake:Boolean,seamless:Boolean,maximized:Boolean,fullWidth:Boolean,fullHeight:Boolean,square:Boolean,backdropFilter:String,position:{type:String,default:"standard",validator:n=>["standard","top","bottom","left","right"].includes(n)}},emits:[...F0,"shake","click","escapeKey"],setup(n,{slots:e,emit:t,attrs:i}){const s=on(),r=xt(null),o=xt(!1),a=xt(!1);let l=null,c=null,u,f;const d=Se(()=>n.persistent!==!0&&n.noRouteDismiss!==!0&&n.seamless!==!0),{preventBodyScroll:h}=iy(),{registerTimeout:g}=Fc(),{registerTick:_,removeTick:p}=U0(),{transitionProps:m,transitionStyle:S}=z0(n,()=>qd[n.position][0],()=>qd[n.position][1]),y=Se(()=>S.value+(n.backdropFilter!==void 0?`;backdrop-filter:${n.backdropFilter};-webkit-backdrop-filter:${n.backdropFilter}`:"")),{showPortal:E,hidePortal:L,portalIsAccessible:R,renderPortal:w}=Y0(s,r,he,"dialog"),{hide:P}=B0({showing:o,hideOnRouteChange:d,handleShow:q,handleHide:W,processOnMount:!0}),{addToHistory:b,removeFromHistory:M}=N0(o,P,d),I=Se(()=>`q-dialog__inner flex no-pointer-events q-dialog__inner--${n.maximized===!0?"maximized":"minimized"} q-dialog__inner--${n.position} ${cy[n.position]}`+(a.value===!0?" q-dialog__inner--animating":"")+(n.fullWidth===!0?" q-dialog__inner--fullwidth":"")+(n.fullHeight===!0?" q-dialog__inner--fullheight":"")+(n.square===!0?" q-dialog__inner--square":"")),N=Se(()=>o.value===!0&&n.seamless!==!0),U=Se(()=>n.autoClose===!0?{onClick:Ne}:{}),F=Se(()=>[`q-dialog fullscreen no-pointer-events q-dialog--${N.value===!0?"modal":"seamless"}`,i.class]);Pn(()=>n.maximized,oe=>{o.value===!0&&ve(oe)}),Pn(N,oe=>{h(oe),oe===!0?(ly(se),ay(me)):(Xd(se),Wd(me))});function q(oe){b(),c=n.noRefocus===!1&&document.activeElement!==null?document.activeElement:null,ve(n.maximized),E(),a.value=!0,n.noFocus!==!0?(document.activeElement!==null&&document.activeElement.blur(),_(ne)):p(),g(()=>{if(s.proxy.$q.platform.is.ios===!0){if(n.seamless!==!0&&document.activeElement){const{top:fe,bottom:Le}=document.activeElement.getBoundingClientRect(),{innerHeight:Oe}=window,ke=window.visualViewport!==void 0?window.visualViewport.height:Oe;fe>0&&Le>ke/2&&(document.scrollingElement.scrollTop=Math.min(document.scrollingElement.scrollHeight-ke,Le>=Oe?1/0:Math.ceil(document.scrollingElement.scrollTop+Le-ke/2))),document.activeElement.scrollIntoView()}f=!0,r.value.click(),f=!1}E(!0),a.value=!1,t("show",oe)},n.transitionDuration)}function W(oe){p(),M(),xe(!0),a.value=!0,L(),c!==null&&(((oe&&oe.type.indexOf("key")===0?c.closest('[tabindex]:not([tabindex^="-"])'):void 0)||c).focus(),c=null),g(()=>{L(!0),a.value=!1,t("hide",oe)},n.transitionDuration)}function ne(oe){V0(()=>{let fe=r.value;if(fe!==null){if(oe!==void 0){const Le=fe.querySelector(oe);if(Le!==null){Le.focus({preventScroll:!0});return}}fe.contains(document.activeElement)!==!0&&(fe=fe.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||fe.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||fe.querySelector("[autofocus], [data-autofocus]")||fe,fe.focus({preventScroll:!0}))}})}function j(oe){oe&&typeof oe.focus=="function"?oe.focus({preventScroll:!0}):ne(),t("shake");const fe=r.value;fe!==null&&(fe.classList.remove("q-animate--scale"),fe.classList.add("q-animate--scale"),l!==null&&clearTimeout(l),l=setTimeout(()=>{l=null,r.value!==null&&(fe.classList.remove("q-animate--scale"),ne())},170))}function me(){n.seamless!==!0&&(n.persistent===!0||n.noEscDismiss===!0?n.maximized!==!0&&n.noShake!==!0&&j():(t("escapeKey"),P()))}function xe(oe){l!==null&&(clearTimeout(l),l=null),(oe===!0||o.value===!0)&&(ve(!1),n.seamless!==!0&&(h(!1),Xd(se),Wd(me))),oe!==!0&&(c=null)}function ve(oe){oe===!0?u!==!0&&(Uo<1&&document.body.classList.add("q-body--dialog"),Uo++,u=!0):u===!0&&(Uo<2&&document.body.classList.remove("q-body--dialog"),Uo--,u=!1)}function Ne(oe){f!==!0&&(P(oe),t("click",oe))}function Je(oe){n.persistent!==!0&&n.noBackdropDismiss!==!0?P(oe):n.noShake!==!0&&j()}function se(oe){n.allowFocusOutside!==!0&&R.value===!0&&Rx(r.value,oe.target)!==!0&&ne('[tabindex]:not([tabindex="-1"])')}Object.assign(s.proxy,{focus:ne,shake:j,__updateRefocusTarget(oe){c=oe||null}}),$i(xe);function he(){return Pe("div",{role:"dialog","aria-modal":N.value===!0?"true":"false",...i,class:F.value},[Pe(Gi,{name:"q-transition--fade",appear:!0},()=>N.value===!0?Pe("div",{class:"q-dialog__backdrop fixed-full",style:y.value,"aria-hidden":"true",tabindex:-1,onClick:Je}):null),Pe(Gi,m.value,()=>o.value===!0?Pe("div",{ref:r,class:I.value,style:S.value,tabindex:-1,...U.value},ui(e.default)):null)])}return w}}),dy=n=>(vo("data-v-c0901a75"),n=n(),xo(),n),fy={key:0,style:{"border-bottom":"2px solid",height:"60px"},class:"row bg-white rounded-borders shadow-4 z-top"},hy=dy(()=>qe("img",{src:"images/logo.png",height:"100%"},null,-1)),py={key:1,class:"z-top"},my={class:"row menu"},gy={class:"col column bg-white nav-items left"},_y={class:"q-ml-sm q-pt-sm"},vy={class:"col column bg-white nav-items right q-pt-sm"},xy={class:"self-end q-mr-lg"},yy={__name:"Navbar",setup(n){const e=So(),t=xt(!1);return(i,s)=>(It(),Yt(en,null,[nt(e).mobile?(It(),Yt("nav",fy,[t.value?(It(),wc(wt,{key:1,icon:"close",flat:"",round:"",dense:"",onClick:s[1]||(s[1]=r=>t.value=!1)})):(It(),wc(wt,{key:0,flat:"",round:"",dense:"",icon:"menu",onClick:s[0]||(s[0]=r=>t.value=!0)})),Ae(P0),hy])):(It(),Yt("nav",py,[qe("div",my,[qe("div",gy,[qe("ul",_y,[qe("li",{style:{"margin-right":"6vw"},class:Ht({selected:nt(e).tab==="home"}),onClick:s[2]||(s[2]=r=>nt(e).tab="home")},"Home",2),qe("li",{class:Ht({selected:nt(e).tab==="projects"}),onClick:s[3]||(s[3]=r=>nt(e).tab="projects")},"Projects",2)])]),qe("div",vy,[qe("ul",xy,[qe("li",{class:Ht({selected:nt(e).tab==="about"}),onClick:s[4]||(s[4]=r=>nt(e).tab="about")},"About",2),qe("li",{class:Ht({selected:nt(e).tab==="contact"}),onClick:s[5]||(s[5]=r=>nt(e).tab="contact"),style:{"margin-left":"6vw"}},"Contact",2)])])])])),Ae(uy,{modelValue:t.value,"onUpdate:modelValue":s[11]||(s[11]=r=>t.value=r),position:"left","full-height":"",class:"sideBar"},{default:tn(()=>[Ae(Am,{class:"q-pt-lg q-pr-xl"},{default:tn(()=>[qe("ul",{onClick:s[10]||(s[10]=r=>t.value=!1)},[qe("li",{class:Ht({selected:nt(e).tab==="home"}),onClick:s[6]||(s[6]=r=>nt(e).tab="home")},"Home",2),qe("li",{class:Ht({selected:nt(e).tab==="projects"}),onClick:s[7]||(s[7]=r=>nt(e).tab="projects")},"Projects",2),qe("li",{class:Ht({selected:nt(e).tab==="about"}),onClick:s[8]||(s[8]=r=>nt(e).tab="about")},"About",2),qe("li",{class:Ht({selected:nt(e).tab==="contact"}),onClick:s[9]||(s[9]=r=>nt(e).tab="contact")},"Contact",2)])]),_:1})]),_:1},8,["modelValue"])],64))}},Sy=bs(yy,[["__scopeId","data-v-c0901a75"]]),My={true:"inset",item:"item-inset","item-thumbnail":"item-thumbnail-inset"},wl={xs:2,sm:4,md:8,lg:16,xl:24},by=pn({name:"QSeparator",props:{..._u,spaced:[Boolean,String],inset:[Boolean,String],vertical:Boolean,color:String,size:String},setup(n){const e=on(),t=vu(n,e.proxy.$q),i=Se(()=>n.vertical===!0?"vertical":"horizontal"),s=Se(()=>` q-separator--${i.value}`),r=Se(()=>n.inset!==!1?`${s.value}-${My[n.inset]}`:""),o=Se(()=>`q-separator${s.value}${r.value}`+(n.color!==void 0?` bg-${n.color}`:"")+(t.value===!0?" q-separator--dark":"")),a=Se(()=>{const l={};if(n.size!==void 0&&(l[n.vertical===!0?"width":"height"]=n.size),n.spaced!==!1){const c=n.spaced===!0?`${wl.md}px`:n.spaced in wl?`${wl[n.spaced]}px`:n.spaced,u=n.vertical===!0?["Left","Right"]:["Top","Bottom"];l[`margin${u[0]}`]=l[`margin${u[1]}`]=c}return l});return()=>Pe("hr",{class:o.value,style:a.value,"aria-orientation":i.value})}}),Ey={ratio:[String,Number]};function Ty(n,e){return Se(()=>{const t=Number(n.ratio||(e!==void 0?e.value:void 0));return isNaN(t)!==!0&&t>0?{paddingBottom:`${100/t}%`}:null})}const Ay=1.7778,jd=pn({name:"QImg",props:{...Ey,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},loadingShowDelay:{type:[Number,String],default:0},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:Ay},placeholderSrc:String,errorSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(n,{slots:e,emit:t}){const i=xt(n.initialRatio),s=Ty(n,i),r=on(),{registerTimeout:o,removeTimeout:a}=Fc(),{registerTimeout:l,removeTimeout:c}=Fc(),u=Se(()=>n.placeholderSrc!==void 0?{src:n.placeholderSrc}:null),f=Se(()=>n.errorSrc!==void 0?{src:n.errorSrc,__qerror:!0}:null),d=[xt(null),xt(u.value)],h=xt(0),g=xt(!1),_=xt(!1),p=Se(()=>`q-img q-img--${n.noNativeMenu===!0?"no-":""}menu`),m=Se(()=>({width:n.width,height:n.height})),S=Se(()=>`q-img__image ${n.imgClass!==void 0?n.imgClass+" ":""}q-img__image--with${n.noTransition===!0?"out":""}-transition q-img__image--`),y=Se(()=>({...n.imgStyle,objectFit:n.fit,objectPosition:n.position}));function E(){if(c(),n.loadingShowDelay===0){g.value=!0;return}l(()=>{g.value=!0},n.loadingShowDelay)}function L(){c(),g.value=!1}function R({target:N}){Qr(r)===!1&&(a(),i.value=N.naturalHeight===0?.5:N.naturalWidth/N.naturalHeight,w(N,1))}function w(N,U){U===1e3||Qr(r)===!0||(N.complete===!0?P(N):o(()=>{w(N,U+1)},50))}function P(N){Qr(r)!==!0&&(h.value=h.value^1,d[h.value].value=null,L(),N.getAttribute("__qerror")!=="true"&&(_.value=!1),t("load",N.currentSrc||N.src))}function b(N){a(),L(),_.value=!0,d[h.value].value=f.value,d[h.value^1].value=u.value,t("error",N)}function M(N){const U=d[N].value,F={key:"img_"+N,class:S.value,style:y.value,alt:n.alt,crossorigin:n.crossorigin,decoding:n.decoding,referrerpolicy:n.referrerpolicy,height:n.height,width:n.width,loading:n.loading,fetchpriority:n.fetchpriority,"aria-hidden":"true",draggable:n.draggable,...U};return h.value===N?Object.assign(F,{class:F.class+"current",onLoad:R,onError:b}):F.class+="loaded",Pe("div",{class:"q-img__container absolute-full",key:"img"+N},Pe("img",F))}function I(){return g.value===!1?Pe("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},ui(e[_.value===!0?"error":"default"])):Pe("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},e.loading!==void 0?e.loading():n.noSpinner===!0?void 0:[Pe(pm,{color:n.spinnerColor,size:n.spinnerSize})])}{let N=function(){Pn(()=>n.src||n.srcset||n.sizes?{src:n.src,srcset:n.srcset,sizes:n.sizes}:null,U=>{a(),_.value=!1,U===null?(L(),d[h.value^1].value=u.value):E(),d[h.value].value=U},{immediate:!0})};Hn.value===!0?yr(N):N()}return()=>{const N=[];return s.value!==null&&N.push(Pe("div",{key:"filler",style:s.value})),d[0].value!==null&&N.push(M(0)),d[1].value!==null&&N.push(M(1)),N.push(Pe(Gi,{name:"q-transition--fade"},I)),Pe("div",{key:"main",class:p.value,style:m.value,role:"img","aria-label":n.alt},N)}}}),$d=pn({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(n,{slots:e}){const t=Se(()=>`q-card__section q-card__section--${n.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>Pe(n.tag,{class:t.value},ui(e.default))}}),wy={},Ry=n=>(vo("data-v-45e2f542"),n=n(),xo(),n),Cy=Ry(()=>qe("p",{class:"text-h5"},[Di(" Ik heb altijd al interesse gehad in game-development en design, "),qe("br"),Di(" maar ik ben pas echt begonnen met programeren als keuzevak van mijn mbo ict-support opleiding."),qe("br"),qe("br"),Di(" Hierna begon ik een 3 jarige software development opleiding waar ik mezelf echt vond in coderen."),qe("br"),Di(" daar kwam ik erachter hoe interresant de techniek achter het maken van software is."),qe("br"),qe("br"),Di(" Ik houd van creatief zijn in coderen en problemen oplossen op de meest efficiente manier. ")],-1));function Py(n,e){const t=L_("q-card-header");return It(),Yt(en,null,[qe("section",null,[Ae(Am,{id:"context",class:"scroll self-end"},{default:tn(()=>[Ae(t,{class:"text-h3 q-ma-md"},{default:tn(()=>[Di(" Hallo, ik ben Luke! ")]),_:1}),Ae(by),Ae($d,{class:"q-pa-none"},{default:tn(()=>[Ae(jd,{class:"lt-sm q-pa-none rounded-borders",width:"100%",src:"/images/homePicture.png"})]),_:1}),Ae($d,null,{default:tn(()=>[Cy]),_:1})]),_:1})]),Ae(jd,{class:"fixed-bottom-right gt-xs",width:"25%",height:"90%",src:"/images/homePicture.png"})],64)}const Ly=bs(wy,[["render",Py],["__scopeId","data-v-45e2f542"]]);function ma(n,e){if(n===e)return!0;if(n!==null&&e!==null&&typeof n=="object"&&typeof e=="object"){if(n.constructor!==e.constructor)return!1;let t,i;if(n.constructor===Array){if(t=n.length,t!==e.length)return!1;for(i=t;i--!==0;)if(ma(n[i],e[i])!==!0)return!1;return!0}if(n.constructor===Map){if(n.size!==e.size)return!1;let r=n.entries();for(i=r.next();i.done!==!0;){if(e.has(i.value[0])!==!0)return!1;i=r.next()}for(r=n.entries(),i=r.next();i.done!==!0;){if(ma(i.value[1],e.get(i.value[0]))!==!0)return!1;i=r.next()}return!0}if(n.constructor===Set){if(n.size!==e.size)return!1;const r=n.entries();for(i=r.next();i.done!==!0;){if(e.has(i.value[0])!==!0)return!1;i=r.next()}return!0}if(n.buffer!=null&&n.buffer.constructor===ArrayBuffer){if(t=n.length,t!==e.length)return!1;for(i=t;i--!==0;)if(n[i]!==e[i])return!1;return!0}if(n.constructor===RegExp)return n.source===e.source&&n.flags===e.flags;if(n.valueOf!==Object.prototype.valueOf)return n.valueOf()===e.valueOf();if(n.toString!==Object.prototype.toString)return n.toString()===e.toString();const s=Object.keys(n).filter(r=>n[r]!==void 0);if(t=s.length,t!==Object.keys(e).filter(r=>e[r]!==void 0).length)return!1;for(i=t;i--!==0;){const r=s[i];if(ma(n[r],e[r])!==!0)return!1}return!0}return n!==n&&e!==e}function Kd(n){return n!==null&&typeof n=="object"&&Array.isArray(n)!==!0}const Yd={threshold:0,root:null,rootMargin:"0px"};function Zd(n,e,t){let i,s,r;typeof t=="function"?(i=t,s=Yd,r=e.cfg===void 0):(i=t.handler,s=Object.assign({},Yd,t.cfg),r=e.cfg===void 0||ma(e.cfg,s)===!1),e.handler!==i&&(e.handler=i),r===!0&&(e.cfg=s,e.observer!==void 0&&e.observer.unobserve(n),e.observer=new IntersectionObserver(([o])=>{if(typeof e.handler=="function"){if(o.rootBounds===null&&document.body.contains(n)===!0){e.observer.unobserve(n),e.observer.observe(n);return}(e.handler(o,e.observer)===!1||e.once===!0&&o.isIntersecting===!0)&&Im(n)}},s),e.observer.observe(n))}function Im(n){const e=n.__qvisible;e!==void 0&&(e.observer!==void 0&&e.observer.unobserve(n),delete n.__qvisible)}const Iy=mu({name:"intersection",mounted(n,{modifiers:e,value:t}){const i={once:e.once===!0};Zd(n,i,t),n.__qvisible=i},updated(n,e){const t=n.__qvisible;t!==void 0&&Zd(n,t,e.value)},beforeUnmount:Im}),Dy=pn({name:"QIntersection",props:{tag:{type:String,default:"div"},once:Boolean,transition:String,transitionDuration:{type:[String,Number],default:300},ssrPrerender:Boolean,margin:String,threshold:[Number,Array],root:{default:null},disable:Boolean,onVisibility:Function},setup(n,{slots:e,emit:t}){const i=xt(Hn.value===!0?n.ssrPrerender:!1),s=Se(()=>n.root!==void 0||n.margin!==void 0||n.threshold!==void 0?{handler:l,cfg:{root:n.root,rootMargin:n.margin,threshold:n.threshold}}:l),r=Se(()=>n.disable!==!0&&(Hn.value!==!0||n.once!==!0||n.ssrPrerender!==!0)),o=Se(()=>[[Iy,s.value,void 0,{once:n.once}]]),a=Se(()=>`--q-transition-duration: ${n.transitionDuration}ms`);function l(u){i.value!==u.isIntersecting&&(i.value=u.isIntersecting,n.onVisibility!==void 0&&t("visibility",i.value))}function c(){if(i.value===!0)return[Pe("div",{key:"content",style:a.value},ui(e.default))];if(e.hidden!==void 0)return[Pe("div",{key:"hidden",style:a.value},e.hidden())]}return()=>{const u=n.transition?[Pe(Gi,{name:"q-transition--"+n.transition},c)]:c();return um(n.tag,{class:"q-intersection"},u,"main",r.value,()=>o.value)}}}),Ny={id:"projectsContainer"},Uy={__name:"Projects",setup(n){const e=So();return(t,i)=>(It(),Yt("section",Ny,[Ae(Dy,{style:{width:"100%"},transition:"scale"},{default:tn(()=>[qe("div",{class:Ht(["projectRow",{row:nt(e).mobile===!1}])},[Ae(wt,{class:"projectButton col-4"}),Ae(wt,{class:"projectButton col-4"}),Ae(wt,{class:"projectButton col-4"})],2),qe("div",{class:Ht(["projectRow",{row:nt(e).mobile===!1}])},[Ae(wt,{class:"projectButton col-4"}),Ae(wt,{class:"projectButton col-4"}),Ae(wt,{class:"projectButton col-4"})],2),qe("div",{class:Ht(["projectRow",{row:nt(e).mobile===!1}])},[Ae(wt,{class:"projectButton col-4"}),Ae(wt,{class:"projectButton col-4"}),Ae(wt,{class:"projectButton col-4"})],2),qe("div",{class:Ht(["projectRow",{row:nt(e).mobile===!1}])},[Ae(wt,{class:"projectButton col-4"}),Ae(wt,{class:"projectButton col-4"}),Ae(wt,{class:"projectButton col-4"})],2),qe("div",{class:Ht(["projectRow",{row:nt(e).mobile===!1}])},[Ae(wt,{class:"projectButton col-4"}),Ae(wt,{class:"projectButton col-4"}),Ae(wt,{class:"projectButton col-4"})],2)]),_:1})]))}},Oy=bs(Uy,[["__scopeId","data-v-587e8393"]]),Fy=n=>(vo("data-v-aeaf42a8"),n=n(),xo(),n),By=Fy(()=>qe("div",{class:"text-h6"},"Movies",-1)),ky={__name:"Website",setup(n){const e=So();return(t,i)=>(It(),Yt(en,null,[Ae(Sy),Ae(R0,{modelValue:nt(e).tab,"onUpdate:modelValue":i[0]||(i[0]=s=>nt(e).tab=s)},{default:tn(()=>[Ae(Ml,{name:"home",id:"home"},{default:tn(()=>[Ae(Ly)]),_:1}),Ae(Ml,{name:"projects",id:"projects",class:"column items-center q-pa-sm"},{default:tn(()=>[Ae(Oy)]),_:1}),Ae(Ml,{name:"about"},{default:tn(()=>[By,Di(" Lorem ipsum dolor sit amet consectetur adipisicing elit. ")]),_:1})]),_:1},8,["modelValue"])],64))}},zy=bs(ky,[["__scopeId","data-v-aeaf42a8"]]);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const xu="165",Cs={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ps={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Hy=0,Jd=1,Vy=2,Dm=1,Gy=2,ti=3,li=0,sn=1,On=2,zi=0,er=1,Qd=2,ef=3,tf=4,Wy=5,hs=100,Xy=101,qy=102,jy=103,$y=104,Ky=200,Yy=201,Zy=202,Jy=203,Bc=204,kc=205,Qy=206,eS=207,tS=208,nS=209,iS=210,sS=211,rS=212,oS=213,aS=214,lS=0,cS=1,uS=2,Ra=3,dS=4,fS=5,hS=6,pS=7,Nm=0,mS=1,gS=2,Hi=0,_S=1,vS=2,Um=3,xS=4,yS=5,SS=6,MS=7,nf="attached",bS="detached",Om=300,ar=301,lr=302,zc=303,Hc=304,el=306,cr=1e3,Ui=1001,Ca=1002,Zt=1003,Fm=1004,Gr=1005,hn=1006,ga=1007,ii=1008,Wi=1009,ES=1010,TS=1011,Pa=1012,Bm=1013,ur=1014,Bn=1015,tl=1016,km=1017,zm=1018,dr=1020,AS=35902,wS=1021,RS=1022,Cn=1023,CS=1024,PS=1025,tr=1026,fr=1027,Hm=1028,Vm=1029,LS=1030,Gm=1031,Wm=1033,Rl=33776,Cl=33777,Pl=33778,Ll=33779,sf=35840,rf=35841,of=35842,af=35843,lf=36196,cf=37492,uf=37496,df=37808,ff=37809,hf=37810,pf=37811,mf=37812,gf=37813,_f=37814,vf=37815,xf=37816,yf=37817,Sf=37818,Mf=37819,bf=37820,Ef=37821,Il=36492,Tf=36494,Af=36495,IS=36283,wf=36284,Rf=36285,Cf=36286,fo=2300,ho=2301,Dl=2302,Pf=2400,Lf=2401,If=2402,DS=2500,NS=0,Xm=1,Vc=2,US=3200,OS=3201,qm=0,FS=1,Ni="",$t="srgb",Ft="srgb-linear",yu="display-p3",nl="display-p3-linear",La="linear",dt="srgb",Ia="rec709",Da="p3",Ls=7680,Df=519,BS=512,kS=513,zS=514,jm=515,HS=516,VS=517,GS=518,WS=519,Gc=35044,Nf="300 es",si=2e3,Na=2001;class di{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Uf=1234567;const to=Math.PI/180,hr=180/Math.PI;function Ln(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Bt[n&255]+Bt[n>>8&255]+Bt[n>>16&255]+Bt[n>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[t&63|128]+Bt[t>>8&255]+"-"+Bt[t>>16&255]+Bt[t>>24&255]+Bt[i&255]+Bt[i>>8&255]+Bt[i>>16&255]+Bt[i>>24&255]).toLowerCase()}function Ot(n,e,t){return Math.max(e,Math.min(t,n))}function Su(n,e){return(n%e+e)%e}function XS(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function qS(n,e,t){return n!==e?(t-n)/(e-n):0}function no(n,e,t){return(1-t)*n+t*e}function jS(n,e,t,i){return no(n,e,1-Math.exp(-t*i))}function $S(n,e=1){return e-Math.abs(Su(n,e*2)-e)}function KS(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function YS(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function ZS(n,e){return n+Math.floor(Math.random()*(e-n+1))}function JS(n,e){return n+Math.random()*(e-n)}function QS(n){return n*(.5-Math.random())}function eM(n){n!==void 0&&(Uf=n);let e=Uf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function tM(n){return n*to}function nM(n){return n*hr}function iM(n){return(n&n-1)===0&&n!==0}function sM(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function rM(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function oM(n,e,t,i,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),u=o((e+i)/2),f=r((e-i)/2),d=o((e-i)/2),h=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*u,l*f,l*d,a*c);break;case"YZY":n.set(l*d,a*u,l*f,a*c);break;case"ZXZ":n.set(l*f,l*d,a*u,a*c);break;case"XZX":n.set(a*u,l*g,l*h,a*c);break;case"YXY":n.set(l*h,a*u,l*g,a*c);break;case"ZYZ":n.set(l*g,l*h,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function wn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function at(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const $m={DEG2RAD:to,RAD2DEG:hr,generateUUID:Ln,clamp:Ot,euclideanModulo:Su,mapLinear:XS,inverseLerp:qS,lerp:no,damp:jS,pingpong:$S,smoothstep:KS,smootherstep:YS,randInt:ZS,randFloat:JS,randFloatSpread:QS,seededRandom:eM,degToRad:tM,radToDeg:nM,isPowerOfTwo:iM,ceilPowerOfTwo:sM,floorPowerOfTwo:rM,setQuaternionFromProperEuler:oM,normalize:at,denormalize:wn};class Ue{constructor(e=0,t=0){Ue.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ot(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ke{constructor(e,t,i,s,r,o,a,l,c){Ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],h=i[5],g=i[8],_=s[0],p=s[3],m=s[6],S=s[1],y=s[4],E=s[7],L=s[2],R=s[5],w=s[8];return r[0]=o*_+a*S+l*L,r[3]=o*p+a*y+l*R,r[6]=o*m+a*E+l*w,r[1]=c*_+u*S+f*L,r[4]=c*p+u*y+f*R,r[7]=c*m+u*E+f*w,r[2]=d*_+h*S+g*L,r[5]=d*p+h*y+g*R,r[8]=d*m+h*E+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,d=a*l-u*r,h=c*r-o*l,g=t*f+i*d+s*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(s*c-u*i)*_,e[2]=(a*i-s*o)*_,e[3]=d*_,e[4]=(u*t-s*l)*_,e[5]=(s*r-a*t)*_,e[6]=h*_,e[7]=(i*l-c*t)*_,e[8]=(o*t-i*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Nl.makeScale(e,t)),this}rotate(e){return this.premultiply(Nl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Nl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Nl=new Ke;function Km(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function po(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function aM(){const n=po("canvas");return n.style.display="block",n}const Of={};function Mu(n){n in Of||(Of[n]=!0,console.warn(n))}function lM(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const Ff=new Ke().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Bf=new Ke().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Oo={[Ft]:{transfer:La,primaries:Ia,toReference:n=>n,fromReference:n=>n},[$t]:{transfer:dt,primaries:Ia,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[nl]:{transfer:La,primaries:Da,toReference:n=>n.applyMatrix3(Bf),fromReference:n=>n.applyMatrix3(Ff)},[yu]:{transfer:dt,primaries:Da,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Bf),fromReference:n=>n.applyMatrix3(Ff).convertLinearToSRGB()}},cM=new Set([Ft,nl]),st={enabled:!0,_workingColorSpace:Ft,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!cM.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Oo[e].toReference,s=Oo[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Oo[n].primaries},getTransfer:function(n){return n===Ni?La:Oo[n].transfer}};function nr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ul(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Is;class uM{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Is===void 0&&(Is=po("canvas")),Is.width=e.width,Is.height=e.height;const i=Is.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Is}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=po("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=nr(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(nr(t[i]/255)*255):t[i]=nr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let dM=0;class Ym{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:dM++}),this.uuid=Ln(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ol(s[o].image)):r.push(Ol(s[o]))}else r=Ol(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function Ol(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?uM.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let fM=0;class Nt extends di{constructor(e=Nt.DEFAULT_IMAGE,t=Nt.DEFAULT_MAPPING,i=Ui,s=Ui,r=hn,o=ii,a=Cn,l=Wi,c=Nt.DEFAULT_ANISOTROPY,u=Ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fM++}),this.uuid=Ln(),this.name="",this.source=new Ym(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ue(0,0),this.repeat=new Ue(1,1),this.center=new Ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Om)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case cr:e.x=e.x-Math.floor(e.x);break;case Ui:e.x=e.x<0?0:1;break;case Ca:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case cr:e.y=e.y-Math.floor(e.y);break;case Ui:e.y=e.y<0?0:1;break;case Ca:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Nt.DEFAULT_IMAGE=null;Nt.DEFAULT_MAPPING=Om;Nt.DEFAULT_ANISOTROPY=1;class ut{constructor(e=0,t=0,i=0,s=1){ut.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],h=l[5],g=l[9],_=l[2],p=l[6],m=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+h+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,E=(h+1)/2,L=(m+1)/2,R=(u+d)/4,w=(f+_)/4,P=(g+p)/4;return y>E&&y>L?y<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(y),s=R/i,r=w/i):E>L?E<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),i=R/s,r=P/s):L<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),i=w/r,s=P/r),this.set(i,s,r,t),this}let S=Math.sqrt((p-g)*(p-g)+(f-_)*(f-_)+(d-u)*(d-u));return Math.abs(S)<.001&&(S=1),this.x=(p-g)/S,this.y=(f-_)/S,this.z=(d-u)/S,this.w=Math.acos((c+h+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class hM extends di{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ut(0,0,e,t),this.scissorTest=!1,this.viewport=new ut(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new Nt(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Ym(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ms extends hM{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Zm extends Nt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=Ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class pM extends Nt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=Ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vn{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],f=i[s+3];const d=r[o+0],h=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=d,e[t+1]=h,e[t+2]=g,e[t+3]=_;return}if(f!==_||l!==d||c!==h||u!==g){let p=1-a;const m=l*d+c*h+u*g+f*_,S=m>=0?1:-1,y=1-m*m;if(y>Number.EPSILON){const L=Math.sqrt(y),R=Math.atan2(L,m*S);p=Math.sin(p*R)/L,a=Math.sin(a*R)/L}const E=a*S;if(l=l*p+d*E,c=c*p+h*E,u=u*p+g*E,f=f*p+_*E,p===1-a){const L=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=L,c*=L,u*=L,f*=L}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],f=r[o],d=r[o+1],h=r[o+2],g=r[o+3];return e[t]=a*g+u*f+l*h-c*d,e[t+1]=l*g+u*d+c*f-a*h,e[t+2]=c*g+u*h+a*d-l*f,e[t+3]=u*g-a*f-l*d-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),f=a(r/2),d=l(i/2),h=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*u*f+c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f-d*h*g;break;case"YXZ":this._x=d*u*f+c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f+d*h*g;break;case"ZXY":this._x=d*u*f-c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f-d*h*g;break;case"ZYX":this._x=d*u*f-c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f+d*h*g;break;case"YZX":this._x=d*u*f+c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f-d*h*g;break;case"XZY":this._x=d*u*f-c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f+d*h*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],d=i+a+f;if(d>0){const h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(u-l)*h,this._y=(r-c)*h,this._z=(o-s)*h}else if(i>a&&i>f){const h=2*Math.sqrt(1+i-a-f);this._w=(u-l)/h,this._x=.25*h,this._y=(s+o)/h,this._z=(r+c)/h}else if(a>f){const h=2*Math.sqrt(1+a-i-f);this._w=(r-c)/h,this._x=(s+o)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+f-i-a);this._w=(o-s)/h,this._x=(r+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ot(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const h=1-t;return this._w=h*o+t*this._w,this._x=h*i+t*this._x,this._y=h*s+t*this._y,this._z=h*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=s*f+this._y*d,this._z=r*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,t=0,i=0){k.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(kf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(kf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),f=2*(r*i-o*t);return this.x=t+l*c+o*f-a*u,this.y=i+l*u+a*c-r*f,this.z=s+l*f+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Fl.copy(this).projectOnVector(e),this.sub(Fl)}reflect(e){return this.sub(Fl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ot(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Fl=new k,kf=new Vn;class fi{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(En.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(En.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=En.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,En):En.fromBufferAttribute(r,o),En.applyMatrix4(e.matrixWorld),this.expandByPoint(En);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Fo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Fo.copy(i.boundingBox)),Fo.applyMatrix4(e.matrixWorld),this.union(Fo)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,En),En.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Rr),Bo.subVectors(this.max,Rr),Ds.subVectors(e.a,Rr),Ns.subVectors(e.b,Rr),Us.subVectors(e.c,Rr),vi.subVectors(Ns,Ds),xi.subVectors(Us,Ns),ss.subVectors(Ds,Us);let t=[0,-vi.z,vi.y,0,-xi.z,xi.y,0,-ss.z,ss.y,vi.z,0,-vi.x,xi.z,0,-xi.x,ss.z,0,-ss.x,-vi.y,vi.x,0,-xi.y,xi.x,0,-ss.y,ss.x,0];return!Bl(t,Ds,Ns,Us,Bo)||(t=[1,0,0,0,1,0,0,0,1],!Bl(t,Ds,Ns,Us,Bo))?!1:(ko.crossVectors(vi,xi),t=[ko.x,ko.y,ko.z],Bl(t,Ds,Ns,Us,Bo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,En).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(En).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Kn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Kn=[new k,new k,new k,new k,new k,new k,new k,new k],En=new k,Fo=new fi,Ds=new k,Ns=new k,Us=new k,vi=new k,xi=new k,ss=new k,Rr=new k,Bo=new k,ko=new k,rs=new k;function Bl(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){rs.fromArray(n,r);const a=s.x*Math.abs(rs.x)+s.y*Math.abs(rs.y)+s.z*Math.abs(rs.z),l=e.dot(rs),c=t.dot(rs),u=i.dot(rs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const mM=new fi,Cr=new k,kl=new k;class Wn{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):mM.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Cr.subVectors(e,this.center);const t=Cr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Cr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(kl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Cr.copy(e.center).add(kl)),this.expandByPoint(Cr.copy(e.center).sub(kl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Yn=new k,zl=new k,zo=new k,yi=new k,Hl=new k,Ho=new k,Vl=new k;class Sr{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Yn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Yn.copy(this.origin).addScaledVector(this.direction,t),Yn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){zl.copy(e).add(t).multiplyScalar(.5),zo.copy(t).sub(e).normalize(),yi.copy(this.origin).sub(zl);const r=e.distanceTo(t)*.5,o=-this.direction.dot(zo),a=yi.dot(this.direction),l=-yi.dot(zo),c=yi.lengthSq(),u=Math.abs(1-o*o);let f,d,h,g;if(u>0)if(f=o*l-a,d=o*a-l,g=r*u,f>=0)if(d>=-g)if(d<=g){const _=1/u;f*=_,d*=_,h=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=r,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;else d=-r,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-o*r+a)),d=f>0?-r:Math.min(Math.max(-r,-l),r),h=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-r,-l),r),h=d*(d+2*l)+c):(f=Math.max(0,-(o*r+a)),d=f>0?r:Math.min(Math.max(-r,-l),r),h=-f*f+d*(d+2*l)+c);else d=o>0?-r:r,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(zl).addScaledVector(zo,d),h}intersectSphere(e,t){Yn.subVectors(e.center,this.origin);const i=Yn.dot(this.direction),s=Yn.dot(Yn)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Yn)!==null}intersectTriangle(e,t,i,s,r){Hl.subVectors(t,e),Ho.subVectors(i,e),Vl.crossVectors(Hl,Ho);let o=this.direction.dot(Vl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;yi.subVectors(this.origin,e);const l=a*this.direction.dot(Ho.crossVectors(yi,Ho));if(l<0)return null;const c=a*this.direction.dot(Hl.cross(yi));if(c<0||l+c>o)return null;const u=-a*yi.dot(Vl);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class je{constructor(e,t,i,s,r,o,a,l,c,u,f,d,h,g,_,p){je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,f,d,h,g,_,p)}set(e,t,i,s,r,o,a,l,c,u,f,d,h,g,_,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=f,m[14]=d,m[3]=h,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new je().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/Os.setFromMatrixColumn(e,0).length(),r=1/Os.setFromMatrixColumn(e,1).length(),o=1/Os.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const d=o*u,h=o*f,g=a*u,_=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=h+g*c,t[5]=d-_*c,t[9]=-a*l,t[2]=_-d*c,t[6]=g+h*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,h=l*f,g=c*u,_=c*f;t[0]=d+_*a,t[4]=g*a-h,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=h*a-g,t[6]=_+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,h=l*f,g=c*u,_=c*f;t[0]=d-_*a,t[4]=-o*f,t[8]=g+h*a,t[1]=h+g*a,t[5]=o*u,t[9]=_-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,h=o*f,g=a*u,_=a*f;t[0]=l*u,t[4]=g*c-h,t[8]=d*c+_,t[1]=l*f,t[5]=_*c+d,t[9]=h*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,h=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-d*f,t[8]=g*f+h,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=h*f+g,t[10]=d-_*f}else if(e.order==="XZY"){const d=o*l,h=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=d*f+_,t[5]=o*u,t[9]=h*f-g,t[2]=g*f-h,t[6]=a*u,t[10]=_*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gM,e,_M)}lookAt(e,t,i){const s=this.elements;return un.subVectors(e,t),un.lengthSq()===0&&(un.z=1),un.normalize(),Si.crossVectors(i,un),Si.lengthSq()===0&&(Math.abs(i.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),Si.crossVectors(i,un)),Si.normalize(),Vo.crossVectors(un,Si),s[0]=Si.x,s[4]=Vo.x,s[8]=un.x,s[1]=Si.y,s[5]=Vo.y,s[9]=un.y,s[2]=Si.z,s[6]=Vo.z,s[10]=un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],h=i[13],g=i[2],_=i[6],p=i[10],m=i[14],S=i[3],y=i[7],E=i[11],L=i[15],R=s[0],w=s[4],P=s[8],b=s[12],M=s[1],I=s[5],N=s[9],U=s[13],F=s[2],q=s[6],W=s[10],ne=s[14],j=s[3],me=s[7],xe=s[11],ve=s[15];return r[0]=o*R+a*M+l*F+c*j,r[4]=o*w+a*I+l*q+c*me,r[8]=o*P+a*N+l*W+c*xe,r[12]=o*b+a*U+l*ne+c*ve,r[1]=u*R+f*M+d*F+h*j,r[5]=u*w+f*I+d*q+h*me,r[9]=u*P+f*N+d*W+h*xe,r[13]=u*b+f*U+d*ne+h*ve,r[2]=g*R+_*M+p*F+m*j,r[6]=g*w+_*I+p*q+m*me,r[10]=g*P+_*N+p*W+m*xe,r[14]=g*b+_*U+p*ne+m*ve,r[3]=S*R+y*M+E*F+L*j,r[7]=S*w+y*I+E*q+L*me,r[11]=S*P+y*N+E*W+L*xe,r[15]=S*b+y*U+E*ne+L*ve,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],h=e[14],g=e[3],_=e[7],p=e[11],m=e[15];return g*(+r*l*f-s*c*f-r*a*d+i*c*d+s*a*h-i*l*h)+_*(+t*l*h-t*c*d+r*o*d-s*o*h+s*c*u-r*l*u)+p*(+t*c*f-t*a*h-r*o*f+i*o*h+r*a*u-i*c*u)+m*(-s*a*u-t*l*f+t*a*d+s*o*f-i*o*d+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],h=e[11],g=e[12],_=e[13],p=e[14],m=e[15],S=f*p*c-_*d*c+_*l*h-a*p*h-f*l*m+a*d*m,y=g*d*c-u*p*c-g*l*h+o*p*h+u*l*m-o*d*m,E=u*_*c-g*f*c+g*a*h-o*_*h-u*a*m+o*f*m,L=g*f*l-u*_*l-g*a*d+o*_*d+u*a*p-o*f*p,R=t*S+i*y+s*E+r*L;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/R;return e[0]=S*w,e[1]=(_*d*r-f*p*r-_*s*h+i*p*h+f*s*m-i*d*m)*w,e[2]=(a*p*r-_*l*r+_*s*c-i*p*c-a*s*m+i*l*m)*w,e[3]=(f*l*r-a*d*r-f*s*c+i*d*c+a*s*h-i*l*h)*w,e[4]=y*w,e[5]=(u*p*r-g*d*r+g*s*h-t*p*h-u*s*m+t*d*m)*w,e[6]=(g*l*r-o*p*r-g*s*c+t*p*c+o*s*m-t*l*m)*w,e[7]=(o*d*r-u*l*r+u*s*c-t*d*c-o*s*h+t*l*h)*w,e[8]=E*w,e[9]=(g*f*r-u*_*r-g*i*h+t*_*h+u*i*m-t*f*m)*w,e[10]=(o*_*r-g*a*r+g*i*c-t*_*c-o*i*m+t*a*m)*w,e[11]=(u*a*r-o*f*r-u*i*c+t*f*c+o*i*h-t*a*h)*w,e[12]=L*w,e[13]=(u*_*s-g*f*s+g*i*d-t*_*d-u*i*p+t*f*p)*w,e[14]=(g*a*s-o*_*s-g*i*l+t*_*l+o*i*p-t*a*p)*w,e[15]=(o*f*s-u*a*s+u*i*l-t*f*l-o*i*d+t*a*d)*w,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,f=a+a,d=r*c,h=r*u,g=r*f,_=o*u,p=o*f,m=a*f,S=l*c,y=l*u,E=l*f,L=i.x,R=i.y,w=i.z;return s[0]=(1-(_+m))*L,s[1]=(h+E)*L,s[2]=(g-y)*L,s[3]=0,s[4]=(h-E)*R,s[5]=(1-(d+m))*R,s[6]=(p+S)*R,s[7]=0,s[8]=(g+y)*w,s[9]=(p-S)*w,s[10]=(1-(d+_))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=Os.set(s[0],s[1],s[2]).length();const o=Os.set(s[4],s[5],s[6]).length(),a=Os.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Tn.copy(this);const c=1/r,u=1/o,f=1/a;return Tn.elements[0]*=c,Tn.elements[1]*=c,Tn.elements[2]*=c,Tn.elements[4]*=u,Tn.elements[5]*=u,Tn.elements[6]*=u,Tn.elements[8]*=f,Tn.elements[9]*=f,Tn.elements[10]*=f,t.setFromRotationMatrix(Tn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=si){const l=this.elements,c=2*r/(t-e),u=2*r/(i-s),f=(t+e)/(t-e),d=(i+s)/(i-s);let h,g;if(a===si)h=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Na)h=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=h,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=si){const l=this.elements,c=1/(t-e),u=1/(i-s),f=1/(o-r),d=(t+e)*c,h=(i+s)*u;let g,_;if(a===si)g=(o+r)*f,_=-2*f;else if(a===Na)g=r*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-h,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Os=new k,Tn=new je,gM=new k(0,0,0),_M=new k(1,1,1),Si=new k,Vo=new k,un=new k,zf=new je,Hf=new Vn;class Gn{constructor(e=0,t=0,i=0,s=Gn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],f=s[2],d=s[6],h=s[10];switch(t){case"XYZ":this._y=Math.asin(Ot(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ot(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ot(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ot(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ot(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-Ot(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return zf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(zf,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Hf.setFromEuler(this),this.setFromQuaternion(Hf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Gn.DEFAULT_ORDER="XYZ";class bu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let vM=0;const Vf=new k,Fs=new Vn,Zn=new je,Go=new k,Pr=new k,xM=new k,yM=new Vn,Gf=new k(1,0,0),Wf=new k(0,1,0),Xf=new k(0,0,1),qf={type:"added"},SM={type:"removed"},Bs={type:"childadded",child:null},Gl={type:"childremoved",child:null};class pt extends di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vM++}),this.uuid=Ln(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pt.DEFAULT_UP.clone();const e=new k,t=new Gn,i=new Vn,s=new k(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new je},normalMatrix:{value:new Ke}}),this.matrix=new je,this.matrixWorld=new je,this.matrixAutoUpdate=pt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Fs.setFromAxisAngle(e,t),this.quaternion.multiply(Fs),this}rotateOnWorldAxis(e,t){return Fs.setFromAxisAngle(e,t),this.quaternion.premultiply(Fs),this}rotateX(e){return this.rotateOnAxis(Gf,e)}rotateY(e){return this.rotateOnAxis(Wf,e)}rotateZ(e){return this.rotateOnAxis(Xf,e)}translateOnAxis(e,t){return Vf.copy(e).applyQuaternion(this.quaternion),this.position.add(Vf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Gf,e)}translateY(e){return this.translateOnAxis(Wf,e)}translateZ(e){return this.translateOnAxis(Xf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Zn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Go.copy(e):Go.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Pr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zn.lookAt(Pr,Go,this.up):Zn.lookAt(Go,Pr,this.up),this.quaternion.setFromRotationMatrix(Zn),s&&(Zn.extractRotation(s.matrixWorld),Fs.setFromRotationMatrix(Zn),this.quaternion.premultiply(Fs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(qf),Bs.child=e,this.dispatchEvent(Bs),Bs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(SM),Gl.child=e,this.dispatchEvent(Gl),Gl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Zn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Zn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Zn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(qf),Bs.child=e,this.dispatchEvent(Bs),Bs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pr,e,xM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pr,yM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++){const r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),h=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),h.length>0&&(i.animations=h),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}pt.DEFAULT_UP=new k(0,1,0);pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const An=new k,Jn=new k,Wl=new k,Qn=new k,ks=new k,zs=new k,jf=new k,Xl=new k,ql=new k,jl=new k;class Fn{constructor(e=new k,t=new k,i=new k){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),An.subVectors(e,t),s.cross(An);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){An.subVectors(s,t),Jn.subVectors(i,t),Wl.subVectors(e,t);const o=An.dot(An),a=An.dot(Jn),l=An.dot(Wl),c=Jn.dot(Jn),u=Jn.dot(Wl),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;const d=1/f,h=(c*l-a*u)*d,g=(o*u-a*l)*d;return r.set(1-h-g,g,h)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Qn)===null?!1:Qn.x>=0&&Qn.y>=0&&Qn.x+Qn.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Qn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Qn.x),l.addScaledVector(o,Qn.y),l.addScaledVector(a,Qn.z),l)}static isFrontFacing(e,t,i,s){return An.subVectors(i,t),Jn.subVectors(e,t),An.cross(Jn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return An.subVectors(this.c,this.b),Jn.subVectors(this.a,this.b),An.cross(Jn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Fn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Fn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return Fn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Fn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Fn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;ks.subVectors(s,i),zs.subVectors(r,i),Xl.subVectors(e,i);const l=ks.dot(Xl),c=zs.dot(Xl);if(l<=0&&c<=0)return t.copy(i);ql.subVectors(e,s);const u=ks.dot(ql),f=zs.dot(ql);if(u>=0&&f<=u)return t.copy(s);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(ks,o);jl.subVectors(e,r);const h=ks.dot(jl),g=zs.dot(jl);if(g>=0&&h<=g)return t.copy(r);const _=h*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(zs,a);const p=u*g-h*f;if(p<=0&&f-u>=0&&h-g>=0)return jf.subVectors(r,s),a=(f-u)/(f-u+(h-g)),t.copy(s).addScaledVector(jf,a);const m=1/(p+_+d);return o=_*m,a=d*m,t.copy(i).addScaledVector(ks,o).addScaledVector(zs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Jm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mi={h:0,s:0,l:0},Wo={h:0,s:0,l:0};function $l(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class We{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=$t){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=st.workingColorSpace){return this.r=e,this.g=t,this.b=i,st.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=st.workingColorSpace){if(e=Su(e,1),t=Ot(t,0,1),i=Ot(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=$l(o,r,e+1/3),this.g=$l(o,r,e),this.b=$l(o,r,e-1/3)}return st.toWorkingColorSpace(this,s),this}setStyle(e,t=$t){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=$t){const i=Jm[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=nr(e.r),this.g=nr(e.g),this.b=nr(e.b),this}copyLinearToSRGB(e){return this.r=Ul(e.r),this.g=Ul(e.g),this.b=Ul(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=$t){return st.fromWorkingColorSpace(kt.copy(this),e),Math.round(Ot(kt.r*255,0,255))*65536+Math.round(Ot(kt.g*255,0,255))*256+Math.round(Ot(kt.b*255,0,255))}getHexString(e=$t){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=st.workingColorSpace){st.fromWorkingColorSpace(kt.copy(this),t);const i=kt.r,s=kt.g,r=kt.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=st.workingColorSpace){return st.fromWorkingColorSpace(kt.copy(this),t),e.r=kt.r,e.g=kt.g,e.b=kt.b,e}getStyle(e=$t){st.fromWorkingColorSpace(kt.copy(this),e);const t=kt.r,i=kt.g,s=kt.b;return e!==$t?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Mi),this.setHSL(Mi.h+e,Mi.s+t,Mi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Mi),e.getHSL(Wo);const i=no(Mi.h,Wo.h,t),s=no(Mi.s,Wo.s,t),r=no(Mi.l,Wo.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const kt=new We;We.NAMES=Jm;let MM=0;class kn extends di{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:MM++}),this.uuid=Ln(),this.name="",this.type="Material",this.blending=er,this.side=li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bc,this.blendDst=kc,this.blendEquation=hs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=Ra,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Df,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ls,this.stencilZFail=Ls,this.stencilZPass=Ls,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==er&&(i.blending=this.blending),this.side!==li&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Bc&&(i.blendSrc=this.blendSrc),this.blendDst!==kc&&(i.blendDst=this.blendDst),this.blendEquation!==hs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ra&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Df&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ls&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ls&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ls&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class gs extends kn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.combine=Nm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Et=new k,Xo=new Ue;class Jt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Gc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Bn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Mu("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Xo.fromBufferAttribute(this,t),Xo.applyMatrix3(e),this.setXY(t,Xo.x,Xo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix3(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix4(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.applyNormalMatrix(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.transformDirection(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=wn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=at(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=wn(t,this.array)),t}setX(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=wn(t,this.array)),t}setY(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=wn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=wn(t,this.array)),t}setW(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),i=at(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),i=at(i,this.array),s=at(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),i=at(i,this.array),s=at(s,this.array),r=at(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Gc&&(e.usage=this.usage),e}}class Qm extends Jt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class eg extends Jt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class oi extends Jt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let bM=0;const vn=new je,Kl=new pt,Hs=new k,dn=new fi,Lr=new fi,Lt=new k;class Xn extends di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bM++}),this.uuid=Ln(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Km(e)?eg:Qm)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ke().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return vn.makeRotationFromQuaternion(e),this.applyMatrix4(vn),this}rotateX(e){return vn.makeRotationX(e),this.applyMatrix4(vn),this}rotateY(e){return vn.makeRotationY(e),this.applyMatrix4(vn),this}rotateZ(e){return vn.makeRotationZ(e),this.applyMatrix4(vn),this}translate(e,t,i){return vn.makeTranslation(e,t,i),this.applyMatrix4(vn),this}scale(e,t,i){return vn.makeScale(e,t,i),this.applyMatrix4(vn),this}lookAt(e){return Kl.lookAt(e),Kl.updateMatrix(),this.applyMatrix4(Kl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hs).negate(),this.translate(Hs.x,Hs.y,Hs.z),this}setFromPoints(e){const t=[];for(let i=0,s=e.length;i<s;i++){const r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new oi(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];dn.setFromBufferAttribute(r),this.morphTargetsRelative?(Lt.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(Lt),Lt.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(Lt)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const i=this.boundingSphere.center;if(dn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Lr.setFromBufferAttribute(a),this.morphTargetsRelative?(Lt.addVectors(dn.min,Lr.min),dn.expandByPoint(Lt),Lt.addVectors(dn.max,Lr.max),dn.expandByPoint(Lt)):(dn.expandByPoint(Lr.min),dn.expandByPoint(Lr.max))}dn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Lt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Lt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Lt.fromBufferAttribute(a,c),l&&(Hs.fromBufferAttribute(e,c),Lt.add(Hs)),s=Math.max(s,i.distanceToSquared(Lt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Jt(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<i.count;P++)a[P]=new k,l[P]=new k;const c=new k,u=new k,f=new k,d=new Ue,h=new Ue,g=new Ue,_=new k,p=new k;function m(P,b,M){c.fromBufferAttribute(i,P),u.fromBufferAttribute(i,b),f.fromBufferAttribute(i,M),d.fromBufferAttribute(r,P),h.fromBufferAttribute(r,b),g.fromBufferAttribute(r,M),u.sub(c),f.sub(c),h.sub(d),g.sub(d);const I=1/(h.x*g.y-g.x*h.y);isFinite(I)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(f,-h.y).multiplyScalar(I),p.copy(f).multiplyScalar(h.x).addScaledVector(u,-g.x).multiplyScalar(I),a[P].add(_),a[b].add(_),a[M].add(_),l[P].add(p),l[b].add(p),l[M].add(p))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let P=0,b=S.length;P<b;++P){const M=S[P],I=M.start,N=M.count;for(let U=I,F=I+N;U<F;U+=3)m(e.getX(U+0),e.getX(U+1),e.getX(U+2))}const y=new k,E=new k,L=new k,R=new k;function w(P){L.fromBufferAttribute(s,P),R.copy(L);const b=a[P];y.copy(b),y.sub(L.multiplyScalar(L.dot(b))).normalize(),E.crossVectors(R,b);const I=E.dot(l[P])<0?-1:1;o.setXYZW(P,y.x,y.y,y.z,I)}for(let P=0,b=S.length;P<b;++P){const M=S[P],I=M.start,N=M.count;for(let U=I,F=I+N;U<F;U+=3)w(e.getX(U+0)),w(e.getX(U+1)),w(e.getX(U+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Jt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,h=i.count;d<h;d++)i.setXYZ(d,0,0,0);const s=new k,r=new k,o=new k,a=new k,l=new k,c=new k,u=new k,f=new k;if(e)for(let d=0,h=e.count;d<h;d+=3){const g=e.getX(d+0),_=e.getX(d+1),p=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,p),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,h=t.count;d<h;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Lt.fromBufferAttribute(e,t),Lt.normalize(),e.setXYZ(t,Lt.x,Lt.y,Lt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u);let h=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?h=l[_]*a.data.stride+a.offset:h=l[_]*u;for(let m=0;m<u;m++)d[g++]=c[h++]}return new Jt(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Xn,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,f=c.length;u<f;u++){const d=c[u],h=e(d,i);l.push(h)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const h=c[f];u.push(h.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],f=r[c];for(let d=0,h=f.length;d<h;d++)u.push(f[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const $f=new je,os=new Sr,qo=new Wn,Kf=new k,Vs=new k,Gs=new k,Ws=new k,Yl=new k,jo=new k,$o=new Ue,Ko=new Ue,Yo=new Ue,Yf=new k,Zf=new k,Jf=new k,Zo=new k,Jo=new k;class nn extends pt{constructor(e=new Xn,t=new gs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){jo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],f=r[l];u!==0&&(Yl.fromBufferAttribute(f,e),o?jo.addScaledVector(Yl,u):jo.addScaledVector(Yl.sub(t),u))}t.add(jo)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),qo.copy(i.boundingSphere),qo.applyMatrix4(r),os.copy(e.ray).recast(e.near),!(qo.containsPoint(os.origin)===!1&&(os.intersectSphere(qo,Kf)===null||os.origin.distanceToSquared(Kf)>(e.far-e.near)**2))&&($f.copy(r).invert(),os.copy(e.ray).applyMatrix4($f),!(i.boundingBox!==null&&os.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,os)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,d=r.groups,h=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const p=d[g],m=o[p.materialIndex],S=Math.max(p.start,h.start),y=Math.min(a.count,Math.min(p.start+p.count,h.start+h.count));for(let E=S,L=y;E<L;E+=3){const R=a.getX(E),w=a.getX(E+1),P=a.getX(E+2);s=Qo(this,m,e,i,c,u,f,R,w,P),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,h.start),_=Math.min(a.count,h.start+h.count);for(let p=g,m=_;p<m;p+=3){const S=a.getX(p),y=a.getX(p+1),E=a.getX(p+2);s=Qo(this,o,e,i,c,u,f,S,y,E),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const p=d[g],m=o[p.materialIndex],S=Math.max(p.start,h.start),y=Math.min(l.count,Math.min(p.start+p.count,h.start+h.count));for(let E=S,L=y;E<L;E+=3){const R=E,w=E+1,P=E+2;s=Qo(this,m,e,i,c,u,f,R,w,P),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,h.start),_=Math.min(l.count,h.start+h.count);for(let p=g,m=_;p<m;p+=3){const S=p,y=p+1,E=p+2;s=Qo(this,o,e,i,c,u,f,S,y,E),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function EM(n,e,t,i,s,r,o,a){let l;if(e.side===sn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===li,a),l===null)return null;Jo.copy(a),Jo.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Jo);return c<t.near||c>t.far?null:{distance:c,point:Jo.clone(),object:n}}function Qo(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,Vs),n.getVertexPosition(l,Gs),n.getVertexPosition(c,Ws);const u=EM(n,e,t,i,Vs,Gs,Ws,Zo);if(u){s&&($o.fromBufferAttribute(s,a),Ko.fromBufferAttribute(s,l),Yo.fromBufferAttribute(s,c),u.uv=Fn.getInterpolation(Zo,Vs,Gs,Ws,$o,Ko,Yo,new Ue)),r&&($o.fromBufferAttribute(r,a),Ko.fromBufferAttribute(r,l),Yo.fromBufferAttribute(r,c),u.uv1=Fn.getInterpolation(Zo,Vs,Gs,Ws,$o,Ko,Yo,new Ue)),o&&(Yf.fromBufferAttribute(o,a),Zf.fromBufferAttribute(o,l),Jf.fromBufferAttribute(o,c),u.normal=Fn.getInterpolation(Zo,Vs,Gs,Ws,Yf,Zf,Jf,new k),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new k,materialIndex:0};Fn.getNormal(Vs,Gs,Ws,f.normal),u.face=f}return u}class Es extends Xn{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],f=[];let d=0,h=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new oi(c,3)),this.setAttribute("normal",new oi(u,3)),this.setAttribute("uv",new oi(f,2));function g(_,p,m,S,y,E,L,R,w,P,b){const M=E/w,I=L/P,N=E/2,U=L/2,F=R/2,q=w+1,W=P+1;let ne=0,j=0;const me=new k;for(let xe=0;xe<W;xe++){const ve=xe*I-U;for(let Ne=0;Ne<q;Ne++){const Je=Ne*M-N;me[_]=Je*S,me[p]=ve*y,me[m]=F,c.push(me.x,me.y,me.z),me[_]=0,me[p]=0,me[m]=R>0?1:-1,u.push(me.x,me.y,me.z),f.push(Ne/w),f.push(1-xe/P),ne+=1}}for(let xe=0;xe<P;xe++)for(let ve=0;ve<w;ve++){const Ne=d+ve+q*xe,Je=d+ve+q*(xe+1),se=d+(ve+1)+q*(xe+1),he=d+(ve+1)+q*xe;l.push(Ne,Je,he),l.push(Je,se,he),j+=6}a.addGroup(h,j,b),h+=j,d+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Es(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function pr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function jt(n){const e={};for(let t=0;t<n.length;t++){const i=pr(n[t]);for(const s in i)e[s]=i[s]}return e}function TM(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function tg(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}const AM={clone:pr,merge:jt};var wM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,RM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xi extends kn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wM,this.fragmentShader=RM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=pr(e.uniforms),this.uniformsGroups=TM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}let ng=class extends pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new je,this.projectionMatrix=new je,this.projectionMatrixInverse=new je,this.coordinateSystem=si}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};const bi=new k,Qf=new Ue,eh=new Ue;class Kt extends ng{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=hr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(to*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return hr*2*Math.atan(Math.tan(to*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(bi.x,bi.y).multiplyScalar(-e/bi.z),bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(bi.x,bi.y).multiplyScalar(-e/bi.z)}getViewSize(e,t){return this.getViewBounds(e,Qf,eh),t.subVectors(eh,Qf)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(to*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Xs=-90,qs=1;class CM extends pt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Kt(Xs,qs,e,t);s.layers=this.layers,this.add(s);const r=new Kt(Xs,qs,e,t);r.layers=this.layers,this.add(r);const o=new Kt(Xs,qs,e,t);o.layers=this.layers,this.add(o);const a=new Kt(Xs,qs,e,t);a.layers=this.layers,this.add(a);const l=new Kt(Xs,qs,e,t);l.layers=this.layers,this.add(l);const c=new Kt(Xs,qs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===si)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Na)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(f,d,h),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class ig extends Nt{constructor(e,t,i,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:ar,super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class PM extends Ms{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new ig(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:hn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Es(5,5,5),r=new Xi({name:"CubemapFromEquirect",uniforms:pr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:sn,blending:zi});r.uniforms.tEquirect.value=t;const o=new nn(s,r),a=t.minFilter;return t.minFilter===ii&&(t.minFilter=hn),new CM(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}const Zl=new k,LM=new k,IM=new Ke;class Pi{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Zl.subVectors(i,t).cross(LM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Zl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||IM.getNormalMatrix(e),s=this.coplanarPoint(Zl).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const as=new Wn,ea=new k;class Eu{constructor(e=new Pi,t=new Pi,i=new Pi,s=new Pi,r=new Pi,o=new Pi){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=si){const i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],f=s[6],d=s[7],h=s[8],g=s[9],_=s[10],p=s[11],m=s[12],S=s[13],y=s[14],E=s[15];if(i[0].setComponents(l-r,d-c,p-h,E-m).normalize(),i[1].setComponents(l+r,d+c,p+h,E+m).normalize(),i[2].setComponents(l+o,d+u,p+g,E+S).normalize(),i[3].setComponents(l-o,d-u,p-g,E-S).normalize(),i[4].setComponents(l-a,d-f,p-_,E-y).normalize(),t===si)i[5].setComponents(l+a,d+f,p+_,E+y).normalize();else if(t===Na)i[5].setComponents(a,f,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),as.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),as.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(as)}intersectsSprite(e){return as.center.set(0,0,0),as.radius=.7071067811865476,as.applyMatrix4(e.matrixWorld),this.intersectsSphere(as)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(ea.x=s.normal.x>0?e.max.x:e.min.x,ea.y=s.normal.y>0?e.max.y:e.min.y,ea.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ea)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function sg(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function DM(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,f=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),a.onUploadCallback();let h;if(c instanceof Float32Array)h=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=n.SHORT;else if(c instanceof Uint32Array)h=n.UNSIGNED_INT;else if(c instanceof Int32Array)h=n.INT;else if(c instanceof Int8Array)h=n.BYTE;else if(c instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l._updateRange,d=l.updateRanges;if(n.bindBuffer(c,a),f.count===-1&&d.length===0&&n.bufferSubData(c,0,u),d.length!==0){for(let h=0,g=d.length;h<g;h++){const _=d[h];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}f.count!==-1&&(n.bufferSubData(c,f.offset*u.BYTES_PER_ELEMENT,u,f.offset,f.count),f.count=-1),l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class il extends Xn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,f=e/a,d=t/l,h=[],g=[],_=[],p=[];for(let m=0;m<u;m++){const S=m*d-o;for(let y=0;y<c;y++){const E=y*f-r;g.push(E,-S,0),_.push(0,0,1),p.push(y/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let S=0;S<a;S++){const y=S+c*m,E=S+c*(m+1),L=S+1+c*(m+1),R=S+1+c*m;h.push(y,E,R),h.push(E,L,R)}this.setIndex(h),this.setAttribute("position",new oi(g,3)),this.setAttribute("normal",new oi(_,3)),this.setAttribute("uv",new oi(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new il(e.width,e.height,e.widthSegments,e.heightSegments)}}var NM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,UM=`#ifdef USE_ALPHAHASH
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
#endif`,OM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,FM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,BM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,kM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zM=`#ifdef USE_AOMAP
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
#endif`,HM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,VM=`#ifdef USE_BATCHING
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
#endif`,GM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,WM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,XM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,jM=`#ifdef USE_IRIDESCENCE
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
#endif`,$M=`#ifdef USE_BUMPMAP
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
#endif`,KM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,YM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ZM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,JM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,QM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,eb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,tb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,nb=`#if defined( USE_COLOR_ALPHA )
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
#endif`,ib=`#define PI 3.141592653589793
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
} // validated`,sb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,rb=`vec3 transformedNormal = objectNormal;
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
#endif`,ob=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ab=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,lb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ub="gl_FragColor = linearToOutputTexel( gl_FragColor );",db=`
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
}`,fb=`#ifdef USE_ENVMAP
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
#endif`,hb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,pb=`#ifdef USE_ENVMAP
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
#endif`,mb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gb=`#ifdef USE_ENVMAP
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
#endif`,_b=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Sb=`#ifdef USE_GRADIENTMAP
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
}`,Mb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Eb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Tb=`uniform bool receiveShadow;
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
#endif`,Ab=`#ifdef USE_ENVMAP
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
#endif`,wb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Rb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Cb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Pb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Lb=`PhysicalMaterial material;
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
#endif`,Ib=`struct PhysicalMaterial {
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
}`,Db=`
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
#endif`,Nb=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ub=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ob=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Fb=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bb=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kb=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,zb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Hb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Vb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Gb=`#if defined( USE_POINTS_UV )
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
#endif`,Wb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Xb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,jb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$b=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kb=`#ifdef USE_MORPHTARGETS
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
#endif`,Yb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Jb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Qb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,nE=`#ifdef USE_NORMALMAP
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
#endif`,iE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,sE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,rE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,oE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,aE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,lE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,cE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,uE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_E=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,vE=`float getShadowMask() {
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
}`,xE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yE=`#ifdef USE_SKINNING
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
#endif`,SE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ME=`#ifdef USE_SKINNING
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
#endif`,bE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,EE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,TE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,AE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,wE=`#ifdef USE_TRANSMISSION
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
#endif`,RE=`#ifdef USE_TRANSMISSION
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
#endif`,CE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,PE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,LE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,IE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const DE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,NE=`uniform sampler2D t2D;
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
}`,UE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,OE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,FE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,BE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kE=`#include <common>
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
}`,zE=`#if DEPTH_PACKING == 3200
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
}`,HE=`#define DISTANCE
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
}`,VE=`#define DISTANCE
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
}`,GE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,WE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,XE=`uniform float scale;
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
}`,qE=`uniform vec3 diffuse;
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
}`,jE=`#include <common>
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
}`,$E=`uniform vec3 diffuse;
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
}`,KE=`#define LAMBERT
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
}`,YE=`#define LAMBERT
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
}`,ZE=`#define MATCAP
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
}`,JE=`#define MATCAP
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
}`,QE=`#define NORMAL
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
}`,eT=`#define NORMAL
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
}`,tT=`#define PHONG
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
}`,nT=`#define PHONG
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
}`,iT=`#define STANDARD
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
}`,sT=`#define STANDARD
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
}`,rT=`#define TOON
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
}`,oT=`#define TOON
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
}`,aT=`uniform float size;
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
}`,lT=`uniform vec3 diffuse;
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
}`,cT=`#include <common>
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
}`,uT=`uniform vec3 color;
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
}`,dT=`uniform float rotation;
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
}`,fT=`uniform vec3 diffuse;
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
}`,$e={alphahash_fragment:NM,alphahash_pars_fragment:UM,alphamap_fragment:OM,alphamap_pars_fragment:FM,alphatest_fragment:BM,alphatest_pars_fragment:kM,aomap_fragment:zM,aomap_pars_fragment:HM,batching_pars_vertex:VM,batching_vertex:GM,begin_vertex:WM,beginnormal_vertex:XM,bsdfs:qM,iridescence_fragment:jM,bumpmap_pars_fragment:$M,clipping_planes_fragment:KM,clipping_planes_pars_fragment:YM,clipping_planes_pars_vertex:ZM,clipping_planes_vertex:JM,color_fragment:QM,color_pars_fragment:eb,color_pars_vertex:tb,color_vertex:nb,common:ib,cube_uv_reflection_fragment:sb,defaultnormal_vertex:rb,displacementmap_pars_vertex:ob,displacementmap_vertex:ab,emissivemap_fragment:lb,emissivemap_pars_fragment:cb,colorspace_fragment:ub,colorspace_pars_fragment:db,envmap_fragment:fb,envmap_common_pars_fragment:hb,envmap_pars_fragment:pb,envmap_pars_vertex:mb,envmap_physical_pars_fragment:Ab,envmap_vertex:gb,fog_vertex:_b,fog_pars_vertex:vb,fog_fragment:xb,fog_pars_fragment:yb,gradientmap_pars_fragment:Sb,lightmap_pars_fragment:Mb,lights_lambert_fragment:bb,lights_lambert_pars_fragment:Eb,lights_pars_begin:Tb,lights_toon_fragment:wb,lights_toon_pars_fragment:Rb,lights_phong_fragment:Cb,lights_phong_pars_fragment:Pb,lights_physical_fragment:Lb,lights_physical_pars_fragment:Ib,lights_fragment_begin:Db,lights_fragment_maps:Nb,lights_fragment_end:Ub,logdepthbuf_fragment:Ob,logdepthbuf_pars_fragment:Fb,logdepthbuf_pars_vertex:Bb,logdepthbuf_vertex:kb,map_fragment:zb,map_pars_fragment:Hb,map_particle_fragment:Vb,map_particle_pars_fragment:Gb,metalnessmap_fragment:Wb,metalnessmap_pars_fragment:Xb,morphinstance_vertex:qb,morphcolor_vertex:jb,morphnormal_vertex:$b,morphtarget_pars_vertex:Kb,morphtarget_vertex:Yb,normal_fragment_begin:Zb,normal_fragment_maps:Jb,normal_pars_fragment:Qb,normal_pars_vertex:eE,normal_vertex:tE,normalmap_pars_fragment:nE,clearcoat_normal_fragment_begin:iE,clearcoat_normal_fragment_maps:sE,clearcoat_pars_fragment:rE,iridescence_pars_fragment:oE,opaque_fragment:aE,packing:lE,premultiplied_alpha_fragment:cE,project_vertex:uE,dithering_fragment:dE,dithering_pars_fragment:fE,roughnessmap_fragment:hE,roughnessmap_pars_fragment:pE,shadowmap_pars_fragment:mE,shadowmap_pars_vertex:gE,shadowmap_vertex:_E,shadowmask_pars_fragment:vE,skinbase_vertex:xE,skinning_pars_vertex:yE,skinning_vertex:SE,skinnormal_vertex:ME,specularmap_fragment:bE,specularmap_pars_fragment:EE,tonemapping_fragment:TE,tonemapping_pars_fragment:AE,transmission_fragment:wE,transmission_pars_fragment:RE,uv_pars_fragment:CE,uv_pars_vertex:PE,uv_vertex:LE,worldpos_vertex:IE,background_vert:DE,background_frag:NE,backgroundCube_vert:UE,backgroundCube_frag:OE,cube_vert:FE,cube_frag:BE,depth_vert:kE,depth_frag:zE,distanceRGBA_vert:HE,distanceRGBA_frag:VE,equirect_vert:GE,equirect_frag:WE,linedashed_vert:XE,linedashed_frag:qE,meshbasic_vert:jE,meshbasic_frag:$E,meshlambert_vert:KE,meshlambert_frag:YE,meshmatcap_vert:ZE,meshmatcap_frag:JE,meshnormal_vert:QE,meshnormal_frag:eT,meshphong_vert:tT,meshphong_frag:nT,meshphysical_vert:iT,meshphysical_frag:sT,meshtoon_vert:rT,meshtoon_frag:oT,points_vert:aT,points_frag:lT,shadow_vert:cT,shadow_frag:uT,sprite_vert:dT,sprite_frag:fT},_e={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new Ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new Ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},Nn={basic:{uniforms:jt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:jt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new We(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:jt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:jt([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:jt([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new We(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:jt([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:jt([_e.points,_e.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:jt([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:jt([_e.common,_e.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:jt([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:jt([_e.sprite,_e.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distanceRGBA:{uniforms:jt([_e.common,_e.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distanceRGBA_vert,fragmentShader:$e.distanceRGBA_frag},shadow:{uniforms:jt([_e.lights,_e.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};Nn.physical={uniforms:jt([Nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new Ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new Ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new Ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const ta={r:0,b:0,g:0},ls=new Gn,hT=new je;function pT(n,e,t,i,s,r,o){const a=new We(0);let l=r===!0?0:1,c,u,f=null,d=0,h=null;function g(S){let y=S.isScene===!0?S.background:null;return y&&y.isTexture&&(y=(S.backgroundBlurriness>0?t:e).get(y)),y}function _(S){let y=!1;const E=g(S);E===null?m(a,l):E&&E.isColor&&(m(E,1),y=!0);const L=n.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(S,y){const E=g(y);E&&(E.isCubeTexture||E.mapping===el)?(u===void 0&&(u=new nn(new Es(1,1,1),new Xi({name:"BackgroundCubeMaterial",uniforms:pr(Nn.backgroundCube.uniforms),vertexShader:Nn.backgroundCube.vertexShader,fragmentShader:Nn.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,R,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),ls.copy(y.backgroundRotation),ls.x*=-1,ls.y*=-1,ls.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(ls.y*=-1,ls.z*=-1),u.material.uniforms.envMap.value=E,u.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(hT.makeRotationFromEuler(ls)),u.material.toneMapped=st.getTransfer(E.colorSpace)!==dt,(f!==E||d!==E.version||h!==n.toneMapping)&&(u.material.needsUpdate=!0,f=E,d=E.version,h=n.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new nn(new il(2,2),new Xi({name:"BackgroundMaterial",uniforms:pr(Nn.background.uniforms),vertexShader:Nn.background.vertexShader,fragmentShader:Nn.background.fragmentShader,side:li,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=st.getTransfer(E.colorSpace)!==dt,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(f!==E||d!==E.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,f=E,d=E.version,h=n.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function m(S,y){S.getRGB(ta,tg(n)),i.buffers.color.setClear(ta.r,ta.g,ta.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(S,y=1){a.set(S),l=y,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,m(a,l)},render:_,addToRenderList:p}}function mT(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,o=!1;function a(M,I,N,U,F){let q=!1;const W=f(U,N,I);r!==W&&(r=W,c(r.object)),q=h(M,U,N,F),q&&g(M,U,N,F),F!==null&&e.update(F,n.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,E(M,I,N,U),F!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function u(M){return n.deleteVertexArray(M)}function f(M,I,N){const U=N.wireframe===!0;let F=i[M.id];F===void 0&&(F={},i[M.id]=F);let q=F[I.id];q===void 0&&(q={},F[I.id]=q);let W=q[U];return W===void 0&&(W=d(l()),q[U]=W),W}function d(M){const I=[],N=[],U=[];for(let F=0;F<t;F++)I[F]=0,N[F]=0,U[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:N,attributeDivisors:U,object:M,attributes:{},index:null}}function h(M,I,N,U){const F=r.attributes,q=I.attributes;let W=0;const ne=N.getAttributes();for(const j in ne)if(ne[j].location>=0){const xe=F[j];let ve=q[j];if(ve===void 0&&(j==="instanceMatrix"&&M.instanceMatrix&&(ve=M.instanceMatrix),j==="instanceColor"&&M.instanceColor&&(ve=M.instanceColor)),xe===void 0||xe.attribute!==ve||ve&&xe.data!==ve.data)return!0;W++}return r.attributesNum!==W||r.index!==U}function g(M,I,N,U){const F={},q=I.attributes;let W=0;const ne=N.getAttributes();for(const j in ne)if(ne[j].location>=0){let xe=q[j];xe===void 0&&(j==="instanceMatrix"&&M.instanceMatrix&&(xe=M.instanceMatrix),j==="instanceColor"&&M.instanceColor&&(xe=M.instanceColor));const ve={};ve.attribute=xe,xe&&xe.data&&(ve.data=xe.data),F[j]=ve,W++}r.attributes=F,r.attributesNum=W,r.index=U}function _(){const M=r.newAttributes;for(let I=0,N=M.length;I<N;I++)M[I]=0}function p(M){m(M,0)}function m(M,I){const N=r.newAttributes,U=r.enabledAttributes,F=r.attributeDivisors;N[M]=1,U[M]===0&&(n.enableVertexAttribArray(M),U[M]=1),F[M]!==I&&(n.vertexAttribDivisor(M,I),F[M]=I)}function S(){const M=r.newAttributes,I=r.enabledAttributes;for(let N=0,U=I.length;N<U;N++)I[N]!==M[N]&&(n.disableVertexAttribArray(N),I[N]=0)}function y(M,I,N,U,F,q,W){W===!0?n.vertexAttribIPointer(M,I,N,F,q):n.vertexAttribPointer(M,I,N,U,F,q)}function E(M,I,N,U){_();const F=U.attributes,q=N.getAttributes(),W=I.defaultAttributeValues;for(const ne in q){const j=q[ne];if(j.location>=0){let me=F[ne];if(me===void 0&&(ne==="instanceMatrix"&&M.instanceMatrix&&(me=M.instanceMatrix),ne==="instanceColor"&&M.instanceColor&&(me=M.instanceColor)),me!==void 0){const xe=me.normalized,ve=me.itemSize,Ne=e.get(me);if(Ne===void 0)continue;const Je=Ne.buffer,se=Ne.type,he=Ne.bytesPerElement,oe=se===n.INT||se===n.UNSIGNED_INT||me.gpuType===Bm;if(me.isInterleavedBufferAttribute){const fe=me.data,Le=fe.stride,Oe=me.offset;if(fe.isInstancedInterleavedBuffer){for(let ke=0;ke<j.locationSize;ke++)m(j.location+ke,fe.meshPerAttribute);M.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let ke=0;ke<j.locationSize;ke++)p(j.location+ke);n.bindBuffer(n.ARRAY_BUFFER,Je);for(let ke=0;ke<j.locationSize;ke++)y(j.location+ke,ve/j.locationSize,se,xe,Le*he,(Oe+ve/j.locationSize*ke)*he,oe)}else{if(me.isInstancedBufferAttribute){for(let fe=0;fe<j.locationSize;fe++)m(j.location+fe,me.meshPerAttribute);M.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let fe=0;fe<j.locationSize;fe++)p(j.location+fe);n.bindBuffer(n.ARRAY_BUFFER,Je);for(let fe=0;fe<j.locationSize;fe++)y(j.location+fe,ve/j.locationSize,se,xe,ve*he,ve/j.locationSize*fe*he,oe)}}else if(W!==void 0){const xe=W[ne];if(xe!==void 0)switch(xe.length){case 2:n.vertexAttrib2fv(j.location,xe);break;case 3:n.vertexAttrib3fv(j.location,xe);break;case 4:n.vertexAttrib4fv(j.location,xe);break;default:n.vertexAttrib1fv(j.location,xe)}}}}S()}function L(){P();for(const M in i){const I=i[M];for(const N in I){const U=I[N];for(const F in U)u(U[F].object),delete U[F];delete I[N]}delete i[M]}}function R(M){if(i[M.id]===void 0)return;const I=i[M.id];for(const N in I){const U=I[N];for(const F in U)u(U[F].object),delete U[F];delete I[N]}delete i[M.id]}function w(M){for(const I in i){const N=i[I];if(N[M.id]===void 0)continue;const U=N[M.id];for(const F in U)u(U[F].object),delete U[F];delete N[M.id]}}function P(){b(),o=!0,r!==s&&(r=s,c(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:b,dispose:L,releaseStatesOfGeometry:R,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:p,disableUnusedAttributes:S}}function gT(n,e,t){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function a(c,u,f){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let h=0;h<f;h++)this.render(c[h],u[h]);else{d.multiDrawArraysWEBGL(i,c,0,u,0,f);let h=0;for(let g=0;g<f;g++)h+=u[g];t.update(h,i,1)}}function l(c,u,f,d){if(f===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<c.length;g++)o(c[g],u[g],d[g]);else{h.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_];for(let _=0;_<d.length;_++)t.update(g,i,d[_])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function _T(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==Cn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const w=R===tl&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Wi&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Bn&&!w)}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),h=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=h>0,L=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,maxTextures:d,maxVertexTextures:h,maxTextureSize:g,maxCubemapSize:_,maxAttributes:p,maxVertexUniforms:m,maxVaryings:S,maxFragmentUniforms:y,vertexTextures:E,maxSamples:L}}function vT(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new Pi,a=new Ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const h=f.length!==0||d||i!==0||s;return s=d,i=f.length,h},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,h){const g=f.clippingPlanes,_=f.clipIntersection,p=f.clipShadows,m=n.get(f);if(!s||g===null||g.length===0||r&&!p)r?u(null):c();else{const S=r?0:i,y=S*4;let E=m.clippingState||null;l.value=E,E=u(g,d,y,h);for(let L=0;L!==y;++L)E[L]=t[L];m.clippingState=E,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,h,g){const _=f!==null?f.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const m=h+_*4,S=d.matrixWorldInverse;a.getNormalMatrix(S),(p===null||p.length<m)&&(p=new Float32Array(m));for(let y=0,E=h;y!==_;++y,E+=4)o.copy(f[y]).applyMatrix4(S,a),o.normal.toArray(p,E),p[E+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function xT(n){let e=new WeakMap;function t(o,a){return a===zc?o.mapping=ar:a===Hc&&(o.mapping=lr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===zc||a===Hc)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new PM(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class Tu extends ng{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ys=4,th=[.125,.215,.35,.446,.526,.582],ps=20,Jl=new Tu,nh=new We;let Ql=null,ec=0,tc=0,nc=!1;const ds=(1+Math.sqrt(5))/2,js=1/ds,ih=[new k(-ds,js,0),new k(ds,js,0),new k(-js,0,ds),new k(js,0,ds),new k(0,ds,-js),new k(0,ds,js),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)];class sh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Ql=this._renderer.getRenderTarget(),ec=this._renderer.getActiveCubeFace(),tc=this._renderer.getActiveMipmapLevel(),nc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ah(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=oh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ql,ec,tc),this._renderer.xr.enabled=nc,e.scissorTest=!1,na(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ar||e.mapping===lr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ql=this._renderer.getRenderTarget(),ec=this._renderer.getActiveCubeFace(),tc=this._renderer.getActiveMipmapLevel(),nc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:hn,minFilter:hn,generateMipmaps:!1,type:tl,format:Cn,colorSpace:Ft,depthBuffer:!1},s=rh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rh(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=yT(r)),this._blurMaterial=ST(r,e,t)}return s}_compileMaterial(e){const t=new nn(this._lodPlanes[0],e);this._renderer.compile(t,Jl)}_sceneToCubeUV(e,t,i,s){const a=new Kt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(nh),u.toneMapping=Hi,u.autoClear=!1;const h=new gs({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1}),g=new nn(new Es,h);let _=!1;const p=e.background;p?p.isColor&&(h.color.copy(p),e.background=null,_=!0):(h.color.copy(nh),_=!0);for(let m=0;m<6;m++){const S=m%3;S===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):S===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const y=this._cubeSize;na(s,S*y,m>2?y:0,y,y),u.setRenderTarget(s),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===ar||e.mapping===lr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ah()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=oh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new nn(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;na(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Jl)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=ih[(s-r-1)%ih.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new nn(this._lodPlanes[s],c),d=c.uniforms,h=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*h):2*Math.PI/(2*ps-1),_=r/g,p=isFinite(r)?1+Math.floor(u*_):ps;p>ps&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ps}`);const m=[];let S=0;for(let w=0;w<ps;++w){const P=w/_,b=Math.exp(-P*P/2);m.push(b),w===0?S+=b:w<p&&(S+=2*b)}for(let w=0;w<m.length;w++)m[w]=m[w]/S;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-i;const E=this._sizeLods[s],L=3*E*(s>y-Ys?s-y+Ys:0),R=4*(this._cubeSize-E);na(t,L,R,3*E,2*E),l.setRenderTarget(t),l.render(f,Jl)}}function yT(n){const e=[],t=[],i=[];let s=n;const r=n-Ys+1+th.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>n-Ys?l=th[o-n+Ys-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],h=6,g=6,_=3,p=2,m=1,S=new Float32Array(_*g*h),y=new Float32Array(p*g*h),E=new Float32Array(m*g*h);for(let R=0;R<h;R++){const w=R%3*2/3-1,P=R>2?0:-1,b=[w,P,0,w+2/3,P,0,w+2/3,P+1,0,w,P,0,w+2/3,P+1,0,w,P+1,0];S.set(b,_*g*R),y.set(d,p*g*R);const M=[R,R,R,R,R,R];E.set(M,m*g*R)}const L=new Xn;L.setAttribute("position",new Jt(S,_)),L.setAttribute("uv",new Jt(y,p)),L.setAttribute("faceIndex",new Jt(E,m)),e.push(L),s>Ys&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function rh(n,e,t){const i=new Ms(n,e,t);return i.texture.mapping=el,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function na(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function ST(n,e,t){const i=new Float32Array(ps),s=new k(0,1,0);return new Xi({name:"SphericalGaussianBlur",defines:{n:ps,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Au(),fragmentShader:`

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
		`,blending:zi,depthTest:!1,depthWrite:!1})}function oh(){return new Xi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Au(),fragmentShader:`

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
		`,blending:zi,depthTest:!1,depthWrite:!1})}function ah(){return new Xi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Au(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function Au(){return`

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
	`}function MT(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===zc||l===Hc,u=l===ar||l===lr;if(c||u){let f=e.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new sh(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const h=a.image;return c&&h&&h.height>0||u&&h&&s(h)?(t===null&&(t=new sh(n)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function bT(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Mu("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function ET(n,e,t,i){const s={},r=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let p=0,m=_.length;p<m;p++)e.remove(_[p])}d.removeEventListener("dispose",o),delete s[d.id];const h=r.get(d);h&&(e.remove(h),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(f,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const g in d)e.update(d[g],n.ARRAY_BUFFER);const h=f.morphAttributes;for(const g in h){const _=h[g];for(let p=0,m=_.length;p<m;p++)e.update(_[p],n.ARRAY_BUFFER)}}function c(f){const d=[],h=f.index,g=f.attributes.position;let _=0;if(h!==null){const S=h.array;_=h.version;for(let y=0,E=S.length;y<E;y+=3){const L=S[y+0],R=S[y+1],w=S[y+2];d.push(L,R,R,w,w,L)}}else if(g!==void 0){const S=g.array;_=g.version;for(let y=0,E=S.length/3-1;y<E;y+=3){const L=y+0,R=y+1,w=y+2;d.push(L,R,R,w,w,L)}}else return;const p=new(Km(d)?eg:Qm)(d,1);p.version=_;const m=r.get(f);m&&e.remove(m),r.set(f,p)}function u(f){const d=r.get(f);if(d){const h=f.index;h!==null&&d.version<h.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function TT(n,e,t){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,h){n.drawElements(i,h,r,d*o),t.update(h,i,1)}function c(d,h,g){g!==0&&(n.drawElementsInstanced(i,h,r,d*o,g),t.update(h,i,g))}function u(d,h,g){if(g===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let p=0;p<g;p++)this.render(d[p]/o,h[p]);else{_.multiDrawElementsWEBGL(i,h,0,r,d,0,g);let p=0;for(let m=0;m<g;m++)p+=h[m];t.update(p,i,1)}}function f(d,h,g,_){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<d.length;m++)c(d[m]/o,h[m],_[m]);else{p.multiDrawElementsInstancedWEBGL(i,h,0,r,d,0,_,0,g);let m=0;for(let S=0;S<g;S++)m+=h[S];for(let S=0;S<_.length;S++)t.update(m,i,_[S])}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function AT(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function wT(n,e,t){const i=new WeakMap,s=new ut;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==f){let M=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",M)};var h=M;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],S=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let E=0;g===!0&&(E=1),_===!0&&(E=2),p===!0&&(E=3);let L=a.attributes.position.count*E,R=1;L>e.maxTextureSize&&(R=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const w=new Float32Array(L*R*4*f),P=new Zm(w,L,R,f);P.type=Bn,P.needsUpdate=!0;const b=E*4;for(let I=0;I<f;I++){const N=m[I],U=S[I],F=y[I],q=L*R*4*I;for(let W=0;W<N.count;W++){const ne=W*b;g===!0&&(s.fromBufferAttribute(N,W),w[q+ne+0]=s.x,w[q+ne+1]=s.y,w[q+ne+2]=s.z,w[q+ne+3]=0),_===!0&&(s.fromBufferAttribute(U,W),w[q+ne+4]=s.x,w[q+ne+5]=s.y,w[q+ne+6]=s.z,w[q+ne+7]=0),p===!0&&(s.fromBufferAttribute(F,W),w[q+ne+8]=s.x,w[q+ne+9]=s.y,w[q+ne+10]=s.z,w[q+ne+11]=F.itemSize===4?s.w:1)}}d={count:f,texture:P,size:new Ue(L,R)},i.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function RT(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(s.get(f)!==c&&(e.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return f}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class rg extends Nt{constructor(e,t,i,s,r,o,a,l,c,u=tr){if(u!==tr&&u!==fr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===tr&&(i=ur),i===void 0&&u===fr&&(i=dr),super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Zt,this.minFilter=l!==void 0?l:Zt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const og=new Nt,ag=new rg(1,1);ag.compareFunction=jm;const lg=new Zm,cg=new pM,ug=new ig,lh=[],ch=[],uh=new Float32Array(16),dh=new Float32Array(9),fh=new Float32Array(4);function Mr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=lh[s];if(r===void 0&&(r=new Float32Array(s),lh[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Rt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ct(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function sl(n,e){let t=ch[e];t===void 0&&(t=new Int32Array(e),ch[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function CT(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function PT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;n.uniform2fv(this.addr,e),Ct(t,e)}}function LT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Rt(t,e))return;n.uniform3fv(this.addr,e),Ct(t,e)}}function IT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;n.uniform4fv(this.addr,e),Ct(t,e)}}function DT(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,i))return;fh.set(i),n.uniformMatrix2fv(this.addr,!1,fh),Ct(t,i)}}function NT(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,i))return;dh.set(i),n.uniformMatrix3fv(this.addr,!1,dh),Ct(t,i)}}function UT(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,i))return;uh.set(i),n.uniformMatrix4fv(this.addr,!1,uh),Ct(t,i)}}function OT(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function FT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;n.uniform2iv(this.addr,e),Ct(t,e)}}function BT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;n.uniform3iv(this.addr,e),Ct(t,e)}}function kT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;n.uniform4iv(this.addr,e),Ct(t,e)}}function zT(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function HT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;n.uniform2uiv(this.addr,e),Ct(t,e)}}function VT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;n.uniform3uiv(this.addr,e),Ct(t,e)}}function GT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;n.uniform4uiv(this.addr,e),Ct(t,e)}}function WT(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);const r=this.type===n.SAMPLER_2D_SHADOW?ag:og;t.setTexture2D(e||r,s)}function XT(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||cg,s)}function qT(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||ug,s)}function jT(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||lg,s)}function $T(n){switch(n){case 5126:return CT;case 35664:return PT;case 35665:return LT;case 35666:return IT;case 35674:return DT;case 35675:return NT;case 35676:return UT;case 5124:case 35670:return OT;case 35667:case 35671:return FT;case 35668:case 35672:return BT;case 35669:case 35673:return kT;case 5125:return zT;case 36294:return HT;case 36295:return VT;case 36296:return GT;case 35678:case 36198:case 36298:case 36306:case 35682:return WT;case 35679:case 36299:case 36307:return XT;case 35680:case 36300:case 36308:case 36293:return qT;case 36289:case 36303:case 36311:case 36292:return jT}}function KT(n,e){n.uniform1fv(this.addr,e)}function YT(n,e){const t=Mr(e,this.size,2);n.uniform2fv(this.addr,t)}function ZT(n,e){const t=Mr(e,this.size,3);n.uniform3fv(this.addr,t)}function JT(n,e){const t=Mr(e,this.size,4);n.uniform4fv(this.addr,t)}function QT(n,e){const t=Mr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function eA(n,e){const t=Mr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function tA(n,e){const t=Mr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function nA(n,e){n.uniform1iv(this.addr,e)}function iA(n,e){n.uniform2iv(this.addr,e)}function sA(n,e){n.uniform3iv(this.addr,e)}function rA(n,e){n.uniform4iv(this.addr,e)}function oA(n,e){n.uniform1uiv(this.addr,e)}function aA(n,e){n.uniform2uiv(this.addr,e)}function lA(n,e){n.uniform3uiv(this.addr,e)}function cA(n,e){n.uniform4uiv(this.addr,e)}function uA(n,e,t){const i=this.cache,s=e.length,r=sl(t,s);Rt(i,r)||(n.uniform1iv(this.addr,r),Ct(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||og,r[o])}function dA(n,e,t){const i=this.cache,s=e.length,r=sl(t,s);Rt(i,r)||(n.uniform1iv(this.addr,r),Ct(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||cg,r[o])}function fA(n,e,t){const i=this.cache,s=e.length,r=sl(t,s);Rt(i,r)||(n.uniform1iv(this.addr,r),Ct(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||ug,r[o])}function hA(n,e,t){const i=this.cache,s=e.length,r=sl(t,s);Rt(i,r)||(n.uniform1iv(this.addr,r),Ct(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||lg,r[o])}function pA(n){switch(n){case 5126:return KT;case 35664:return YT;case 35665:return ZT;case 35666:return JT;case 35674:return QT;case 35675:return eA;case 35676:return tA;case 5124:case 35670:return nA;case 35667:case 35671:return iA;case 35668:case 35672:return sA;case 35669:case 35673:return rA;case 5125:return oA;case 36294:return aA;case 36295:return lA;case 36296:return cA;case 35678:case 36198:case 36298:case 36306:case 35682:return uA;case 35679:case 36299:case 36307:return dA;case 35680:case 36300:case 36308:case 36293:return fA;case 36289:case 36303:case 36311:case 36292:return hA}}class mA{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=$T(t.type)}}class gA{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=pA(t.type)}}class _A{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const ic=/(\w+)(\])?(\[|\.)?/g;function hh(n,e){n.seq.push(e),n.map[e.id]=e}function vA(n,e,t){const i=n.name,s=i.length;for(ic.lastIndex=0;;){const r=ic.exec(i),o=ic.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){hh(t,c===void 0?new mA(a,n,e):new gA(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new _A(a),hh(t,f)),t=f}}}class _a{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);vA(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function ph(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const xA=37297;let yA=0;function SA(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function MA(n){const e=st.getPrimaries(st.workingColorSpace),t=st.getPrimaries(n);let i;switch(e===t?i="":e===Da&&t===Ia?i="LinearDisplayP3ToLinearSRGB":e===Ia&&t===Da&&(i="LinearSRGBToLinearDisplayP3"),n){case Ft:case nl:return[i,"LinearTransferOETF"];case $t:case yu:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function mh(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+SA(n.getShaderSource(e),o)}else return s}function bA(n,e){const t=MA(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function EA(n,e){let t;switch(e){case _S:t="Linear";break;case vS:t="Reinhard";break;case Um:t="OptimizedCineon";break;case xS:t="ACESFilmic";break;case SS:t="AgX";break;case MS:t="Neutral";break;case yS:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function TA(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wr).join(`
`)}function AA(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function wA(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Wr(n){return n!==""}function gh(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _h(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const RA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wc(n){return n.replace(RA,PA)}const CA=new Map;function PA(n,e){let t=$e[e];if(t===void 0){const i=CA.get(e);if(i!==void 0)t=$e[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Wc(t)}const LA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vh(n){return n.replace(LA,IA)}function IA(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function xh(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function DA(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Dm?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Gy?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ti&&(e="SHADOWMAP_TYPE_VSM"),e}function NA(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ar:case lr:e="ENVMAP_TYPE_CUBE";break;case el:e="ENVMAP_TYPE_CUBE_UV";break}return e}function UA(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case lr:e="ENVMAP_MODE_REFRACTION";break}return e}function OA(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Nm:e="ENVMAP_BLENDING_MULTIPLY";break;case mS:e="ENVMAP_BLENDING_MIX";break;case gS:e="ENVMAP_BLENDING_ADD";break}return e}function FA(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function BA(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=DA(t),c=NA(t),u=UA(t),f=OA(t),d=FA(t),h=TA(t),g=AA(r),_=s.createProgram();let p,m,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Wr).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Wr).join(`
`),m.length>0&&(m+=`
`)):(p=[xh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wr).join(`
`),m=[xh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Hi?"#define TONE_MAPPING":"",t.toneMapping!==Hi?$e.tonemapping_pars_fragment:"",t.toneMapping!==Hi?EA("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,bA("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Wr).join(`
`)),o=Wc(o),o=gh(o,t),o=_h(o,t),a=Wc(a),a=gh(a,t),a=_h(a,t),o=vh(o),a=vh(a),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,p=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===Nf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Nf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const y=S+p+o,E=S+m+a,L=ph(s,s.VERTEX_SHADER,y),R=ph(s,s.FRAGMENT_SHADER,E);s.attachShader(_,L),s.attachShader(_,R),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function w(I){if(n.debug.checkShaderErrors){const N=s.getProgramInfoLog(_).trim(),U=s.getShaderInfoLog(L).trim(),F=s.getShaderInfoLog(R).trim();let q=!0,W=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,L,R);else{const ne=mh(s,L,"vertex"),j=mh(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+N+`
`+ne+`
`+j)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(U===""||F==="")&&(W=!1);W&&(I.diagnostics={runnable:q,programLog:N,vertexShader:{log:U,prefix:p},fragmentShader:{log:F,prefix:m}})}s.deleteShader(L),s.deleteShader(R),P=new _a(s,_),b=wA(s,_)}let P;this.getUniforms=function(){return P===void 0&&w(this),P};let b;this.getAttributes=function(){return b===void 0&&w(this),b};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(_,xA)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=yA++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=L,this.fragmentShader=R,this}let kA=0;class zA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new HA(e),t.set(e,i)),i}}class HA{constructor(e){this.id=kA++,this.code=e,this.usedTimes=0}}function VA(n,e,t,i,s,r,o){const a=new bu,l=new zA,c=new Set,u=[],f=s.logarithmicDepthBuffer,d=s.vertexTextures;let h=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return c.add(b),b===0?"uv":`uv${b}`}function p(b,M,I,N,U){const F=N.fog,q=U.geometry,W=b.isMeshStandardMaterial?N.environment:null,ne=(b.isMeshStandardMaterial?t:e).get(b.envMap||W),j=ne&&ne.mapping===el?ne.image.height:null,me=g[b.type];b.precision!==null&&(h=s.getMaxPrecision(b.precision),h!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",h,"instead."));const xe=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ve=xe!==void 0?xe.length:0;let Ne=0;q.morphAttributes.position!==void 0&&(Ne=1),q.morphAttributes.normal!==void 0&&(Ne=2),q.morphAttributes.color!==void 0&&(Ne=3);let Je,se,he,oe;if(me){const it=Nn[me];Je=it.vertexShader,se=it.fragmentShader}else Je=b.vertexShader,se=b.fragmentShader,l.update(b),he=l.getVertexShaderID(b),oe=l.getFragmentShaderID(b);const fe=n.getRenderTarget(),Le=U.isInstancedMesh===!0,Oe=U.isBatchedMesh===!0,ke=!!b.map,B=!!b.matcap,Ye=!!ne,C=!!b.aoMap,O=!!b.lightMap,H=!!b.bumpMap,Q=!!b.normalMap,J=!!b.displacementMap,ie=!!b.emissiveMap,de=!!b.metalnessMap,T=!!b.roughnessMap,v=b.anisotropy>0,D=b.clearcoat>0,V=b.dispersion>0,K=b.iridescence>0,$=b.sheen>0,ce=b.transmission>0,re=v&&!!b.anisotropyMap,ae=D&&!!b.clearcoatMap,be=D&&!!b.clearcoatNormalMap,le=D&&!!b.clearcoatRoughnessMap,ye=K&&!!b.iridescenceMap,He=K&&!!b.iridescenceThicknessMap,Ie=$&&!!b.sheenColorMap,ge=$&&!!b.sheenRoughnessMap,Ve=!!b.specularMap,we=!!b.specularColorMap,Qe=!!b.specularIntensityMap,x=ce&&!!b.transmissionMap,ee=ce&&!!b.thicknessMap,X=!!b.gradientMap,te=!!b.alphaMap,ue=b.alphaTest>0,Re=!!b.alphaHash,Ge=!!b.extensions;let mt=Hi;b.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(mt=n.toneMapping);const St={shaderID:me,shaderType:b.type,shaderName:b.name,vertexShader:Je,fragmentShader:se,defines:b.defines,customVertexShaderID:he,customFragmentShaderID:oe,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:h,batching:Oe,batchingColor:Oe&&U._colorsTexture!==null,instancing:Le,instancingColor:Le&&U.instanceColor!==null,instancingMorph:Le&&U.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:fe===null?n.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:Ft,alphaToCoverage:!!b.alphaToCoverage,map:ke,matcap:B,envMap:Ye,envMapMode:Ye&&ne.mapping,envMapCubeUVHeight:j,aoMap:C,lightMap:O,bumpMap:H,normalMap:Q,displacementMap:d&&J,emissiveMap:ie,normalMapObjectSpace:Q&&b.normalMapType===FS,normalMapTangentSpace:Q&&b.normalMapType===qm,metalnessMap:de,roughnessMap:T,anisotropy:v,anisotropyMap:re,clearcoat:D,clearcoatMap:ae,clearcoatNormalMap:be,clearcoatRoughnessMap:le,dispersion:V,iridescence:K,iridescenceMap:ye,iridescenceThicknessMap:He,sheen:$,sheenColorMap:Ie,sheenRoughnessMap:ge,specularMap:Ve,specularColorMap:we,specularIntensityMap:Qe,transmission:ce,transmissionMap:x,thicknessMap:ee,gradientMap:X,opaque:b.transparent===!1&&b.blending===er&&b.alphaToCoverage===!1,alphaMap:te,alphaTest:ue,alphaHash:Re,combine:b.combine,mapUv:ke&&_(b.map.channel),aoMapUv:C&&_(b.aoMap.channel),lightMapUv:O&&_(b.lightMap.channel),bumpMapUv:H&&_(b.bumpMap.channel),normalMapUv:Q&&_(b.normalMap.channel),displacementMapUv:J&&_(b.displacementMap.channel),emissiveMapUv:ie&&_(b.emissiveMap.channel),metalnessMapUv:de&&_(b.metalnessMap.channel),roughnessMapUv:T&&_(b.roughnessMap.channel),anisotropyMapUv:re&&_(b.anisotropyMap.channel),clearcoatMapUv:ae&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:be&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:He&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:ge&&_(b.sheenRoughnessMap.channel),specularMapUv:Ve&&_(b.specularMap.channel),specularColorMapUv:we&&_(b.specularColorMap.channel),specularIntensityMapUv:Qe&&_(b.specularIntensityMap.channel),transmissionMapUv:x&&_(b.transmissionMap.channel),thicknessMapUv:ee&&_(b.thicknessMap.channel),alphaMapUv:te&&_(b.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(Q||v),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!q.attributes.uv&&(ke||te),fog:!!F,useFog:b.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:U.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:ve,morphTextureStride:Ne,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:mt,decodeVideoTexture:ke&&b.map.isVideoTexture===!0&&st.getTransfer(b.map.colorSpace)===dt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===On,flipSided:b.side===sn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ge&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Ge&&b.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return St.vertexUv1s=c.has(1),St.vertexUv2s=c.has(2),St.vertexUv3s=c.has(3),c.clear(),St}function m(b){const M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(const I in b.defines)M.push(I),M.push(b.defines[I]);return b.isRawShaderMaterial===!1&&(S(M,b),y(M,b),M.push(n.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function S(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function y(b,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.skinning&&a.enable(4),M.morphTargets&&a.enable(5),M.morphNormals&&a.enable(6),M.morphColors&&a.enable(7),M.premultipliedAlpha&&a.enable(8),M.shadowMapEnabled&&a.enable(9),M.doubleSided&&a.enable(10),M.flipSided&&a.enable(11),M.useDepthPacking&&a.enable(12),M.dithering&&a.enable(13),M.transmission&&a.enable(14),M.sheen&&a.enable(15),M.opaque&&a.enable(16),M.pointsUvs&&a.enable(17),M.decodeVideoTexture&&a.enable(18),M.alphaToCoverage&&a.enable(19),b.push(a.mask)}function E(b){const M=g[b.type];let I;if(M){const N=Nn[M];I=AM.clone(N.uniforms)}else I=b.uniforms;return I}function L(b,M){let I;for(let N=0,U=u.length;N<U;N++){const F=u[N];if(F.cacheKey===M){I=F,++I.usedTimes;break}}return I===void 0&&(I=new BA(n,M,b,r),u.push(I)),I}function R(b){if(--b.usedTimes===0){const M=u.indexOf(b);u[M]=u[u.length-1],u.pop(),b.destroy()}}function w(b){l.remove(b)}function P(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:E,acquireProgram:L,releaseProgram:R,releaseShaderCache:w,programs:u,dispose:P}}function GA(){let n=new WeakMap;function e(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function t(r){n.delete(r)}function i(r,o,a){n.get(r)[o]=a}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function WA(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function yh(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Sh(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(f,d,h,g,_,p){let m=n[e];return m===void 0?(m={id:f.id,object:f,geometry:d,material:h,groupOrder:g,renderOrder:f.renderOrder,z:_,group:p},n[e]=m):(m.id=f.id,m.object=f,m.geometry=d,m.material=h,m.groupOrder=g,m.renderOrder=f.renderOrder,m.z=_,m.group=p),e++,m}function a(f,d,h,g,_,p){const m=o(f,d,h,g,_,p);h.transmission>0?i.push(m):h.transparent===!0?s.push(m):t.push(m)}function l(f,d,h,g,_,p){const m=o(f,d,h,g,_,p);h.transmission>0?i.unshift(m):h.transparent===!0?s.unshift(m):t.unshift(m)}function c(f,d){t.length>1&&t.sort(f||WA),i.length>1&&i.sort(d||yh),s.length>1&&s.sort(d||yh)}function u(){for(let f=e,d=n.length;f<d;f++){const h=n[f];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function XA(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new Sh,n.set(i,[o])):s>=r.length?(o=new Sh,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function qA(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new We};break;case"SpotLight":t={position:new k,direction:new k,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new We,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new We,groundColor:new We};break;case"RectAreaLight":t={color:new We,position:new k,halfWidth:new k,halfHeight:new k};break}return n[e.id]=t,t}}}function jA(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let $A=0;function KA(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function YA(n){const e=new qA,t=jA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new k);const s=new k,r=new je,o=new je;function a(c){let u=0,f=0,d=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let h=0,g=0,_=0,p=0,m=0,S=0,y=0,E=0,L=0,R=0,w=0;c.sort(KA);for(let b=0,M=c.length;b<M;b++){const I=c[b],N=I.color,U=I.intensity,F=I.distance,q=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=N.r*U,f+=N.g*U,d+=N.b*U;else if(I.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(I.sh.coefficients[W],U);w++}else if(I.isDirectionalLight){const W=e.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const ne=I.shadow,j=t.get(I);j.shadowBias=ne.bias,j.shadowNormalBias=ne.normalBias,j.shadowRadius=ne.radius,j.shadowMapSize=ne.mapSize,i.directionalShadow[h]=j,i.directionalShadowMap[h]=q,i.directionalShadowMatrix[h]=I.shadow.matrix,S++}i.directional[h]=W,h++}else if(I.isSpotLight){const W=e.get(I);W.position.setFromMatrixPosition(I.matrixWorld),W.color.copy(N).multiplyScalar(U),W.distance=F,W.coneCos=Math.cos(I.angle),W.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),W.decay=I.decay,i.spot[_]=W;const ne=I.shadow;if(I.map&&(i.spotLightMap[L]=I.map,L++,ne.updateMatrices(I),I.castShadow&&R++),i.spotLightMatrix[_]=ne.matrix,I.castShadow){const j=t.get(I);j.shadowBias=ne.bias,j.shadowNormalBias=ne.normalBias,j.shadowRadius=ne.radius,j.shadowMapSize=ne.mapSize,i.spotShadow[_]=j,i.spotShadowMap[_]=q,E++}_++}else if(I.isRectAreaLight){const W=e.get(I);W.color.copy(N).multiplyScalar(U),W.halfWidth.set(I.width*.5,0,0),W.halfHeight.set(0,I.height*.5,0),i.rectArea[p]=W,p++}else if(I.isPointLight){const W=e.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),W.distance=I.distance,W.decay=I.decay,I.castShadow){const ne=I.shadow,j=t.get(I);j.shadowBias=ne.bias,j.shadowNormalBias=ne.normalBias,j.shadowRadius=ne.radius,j.shadowMapSize=ne.mapSize,j.shadowCameraNear=ne.camera.near,j.shadowCameraFar=ne.camera.far,i.pointShadow[g]=j,i.pointShadowMap[g]=q,i.pointShadowMatrix[g]=I.shadow.matrix,y++}i.point[g]=W,g++}else if(I.isHemisphereLight){const W=e.get(I);W.skyColor.copy(I.color).multiplyScalar(U),W.groundColor.copy(I.groundColor).multiplyScalar(U),i.hemi[m]=W,m++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_e.LTC_FLOAT_1,i.rectAreaLTC2=_e.LTC_FLOAT_2):(i.rectAreaLTC1=_e.LTC_HALF_1,i.rectAreaLTC2=_e.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const P=i.hash;(P.directionalLength!==h||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==p||P.hemiLength!==m||P.numDirectionalShadows!==S||P.numPointShadows!==y||P.numSpotShadows!==E||P.numSpotMaps!==L||P.numLightProbes!==w)&&(i.directional.length=h,i.spot.length=_,i.rectArea.length=p,i.point.length=g,i.hemi.length=m,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=E+L-R,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=w,P.directionalLength=h,P.pointLength=g,P.spotLength=_,P.rectAreaLength=p,P.hemiLength=m,P.numDirectionalShadows=S,P.numPointShadows=y,P.numSpotShadows=E,P.numSpotMaps=L,P.numLightProbes=w,i.version=$A++)}function l(c,u){let f=0,d=0,h=0,g=0,_=0;const p=u.matrixWorldInverse;for(let m=0,S=c.length;m<S;m++){const y=c[m];if(y.isDirectionalLight){const E=i.directional[f];E.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),f++}else if(y.isSpotLight){const E=i.spot[h];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),h++}else if(y.isRectAreaLight){const E=i.rectArea[g];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(p),o.identity(),r.copy(y.matrixWorld),r.premultiply(p),o.extractRotation(r),E.halfWidth.set(y.width*.5,0,0),E.halfHeight.set(0,y.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const E=i.point[d];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(p),d++}else if(y.isHemisphereLight){const E=i.hemi[_];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(p),_++}}}return{setup:a,setupView:l,state:i}}function Mh(n){const e=new YA(n),t=[],i=[];function s(u){c.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function ZA(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Mh(n),e.set(s,[a])):r>=o.length?(a=new Mh(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class JA extends kn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=US,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class QA extends kn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ew=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tw=`uniform sampler2D shadow_pass;
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
}`;function nw(n,e,t){let i=new Eu;const s=new Ue,r=new Ue,o=new ut,a=new JA({depthPacking:OS}),l=new QA,c={},u=t.maxTextureSize,f={[li]:sn,[sn]:li,[On]:On},d=new Xi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ue},radius:{value:4}},vertexShader:ew,fragmentShader:tw}),h=d.clone();h.defines.HORIZONTAL_PASS=1;const g=new Xn;g.setAttribute("position",new Jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new nn(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Dm;let m=this.type;this.render=function(R,w,P){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;const b=n.getRenderTarget(),M=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),N=n.state;N.setBlending(zi),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const U=m!==ti&&this.type===ti,F=m===ti&&this.type!==ti;for(let q=0,W=R.length;q<W;q++){const ne=R[q],j=ne.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;s.copy(j.mapSize);const me=j.getFrameExtents();if(s.multiply(me),r.copy(j.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/me.x),s.x=r.x*me.x,j.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/me.y),s.y=r.y*me.y,j.mapSize.y=r.y)),j.map===null||U===!0||F===!0){const ve=this.type!==ti?{minFilter:Zt,magFilter:Zt}:{};j.map!==null&&j.map.dispose(),j.map=new Ms(s.x,s.y,ve),j.map.texture.name=ne.name+".shadowMap",j.camera.updateProjectionMatrix()}n.setRenderTarget(j.map),n.clear();const xe=j.getViewportCount();for(let ve=0;ve<xe;ve++){const Ne=j.getViewport(ve);o.set(r.x*Ne.x,r.y*Ne.y,r.x*Ne.z,r.y*Ne.w),N.viewport(o),j.updateMatrices(ne,ve),i=j.getFrustum(),E(w,P,j.camera,ne,this.type)}j.isPointLightShadow!==!0&&this.type===ti&&S(j,P),j.needsUpdate=!1}m=this.type,p.needsUpdate=!1,n.setRenderTarget(b,M,I)};function S(R,w){const P=e.update(_);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,h.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Ms(s.x,s.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(w,null,P,d,_,null),h.uniforms.shadow_pass.value=R.mapPass.texture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(w,null,P,h,_,null)}function y(R,w,P,b){let M=null;const I=P.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(I!==void 0)M=I;else if(M=P.isPointLight===!0?l:a,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const N=M.uuid,U=w.uuid;let F=c[N];F===void 0&&(F={},c[N]=F);let q=F[U];q===void 0&&(q=M.clone(),F[U]=q,w.addEventListener("dispose",L)),M=q}if(M.visible=w.visible,M.wireframe=w.wireframe,b===ti?M.side=w.shadowSide!==null?w.shadowSide:w.side:M.side=w.shadowSide!==null?w.shadowSide:f[w.side],M.alphaMap=w.alphaMap,M.alphaTest=w.alphaTest,M.map=w.map,M.clipShadows=w.clipShadows,M.clippingPlanes=w.clippingPlanes,M.clipIntersection=w.clipIntersection,M.displacementMap=w.displacementMap,M.displacementScale=w.displacementScale,M.displacementBias=w.displacementBias,M.wireframeLinewidth=w.wireframeLinewidth,M.linewidth=w.linewidth,P.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const N=n.properties.get(M);N.light=P}return M}function E(R,w,P,b,M){if(R.visible===!1)return;if(R.layers.test(w.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&M===ti)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,R.matrixWorld);const U=e.update(R),F=R.material;if(Array.isArray(F)){const q=U.groups;for(let W=0,ne=q.length;W<ne;W++){const j=q[W],me=F[j.materialIndex];if(me&&me.visible){const xe=y(R,me,b,M);R.onBeforeShadow(n,R,w,P,U,xe,j),n.renderBufferDirect(P,null,U,xe,R,j),R.onAfterShadow(n,R,w,P,U,xe,j)}}}else if(F.visible){const q=y(R,F,b,M);R.onBeforeShadow(n,R,w,P,U,q,null),n.renderBufferDirect(P,null,U,q,R,null),R.onAfterShadow(n,R,w,P,U,q,null)}}const N=R.children;for(let U=0,F=N.length;U<F;U++)E(N[U],w,P,b,M)}function L(R){R.target.removeEventListener("dispose",L);for(const P in c){const b=c[P],M=R.target.uuid;M in b&&(b[M].dispose(),delete b[M])}}}function iw(n){function e(){let x=!1;const ee=new ut;let X=null;const te=new ut(0,0,0,0);return{setMask:function(ue){X!==ue&&!x&&(n.colorMask(ue,ue,ue,ue),X=ue)},setLocked:function(ue){x=ue},setClear:function(ue,Re,Ge,mt,St){St===!0&&(ue*=mt,Re*=mt,Ge*=mt),ee.set(ue,Re,Ge,mt),te.equals(ee)===!1&&(n.clearColor(ue,Re,Ge,mt),te.copy(ee))},reset:function(){x=!1,X=null,te.set(-1,0,0,0)}}}function t(){let x=!1,ee=null,X=null,te=null;return{setTest:function(ue){ue?oe(n.DEPTH_TEST):fe(n.DEPTH_TEST)},setMask:function(ue){ee!==ue&&!x&&(n.depthMask(ue),ee=ue)},setFunc:function(ue){if(X!==ue){switch(ue){case lS:n.depthFunc(n.NEVER);break;case cS:n.depthFunc(n.ALWAYS);break;case uS:n.depthFunc(n.LESS);break;case Ra:n.depthFunc(n.LEQUAL);break;case dS:n.depthFunc(n.EQUAL);break;case fS:n.depthFunc(n.GEQUAL);break;case hS:n.depthFunc(n.GREATER);break;case pS:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}X=ue}},setLocked:function(ue){x=ue},setClear:function(ue){te!==ue&&(n.clearDepth(ue),te=ue)},reset:function(){x=!1,ee=null,X=null,te=null}}}function i(){let x=!1,ee=null,X=null,te=null,ue=null,Re=null,Ge=null,mt=null,St=null;return{setTest:function(it){x||(it?oe(n.STENCIL_TEST):fe(n.STENCIL_TEST))},setMask:function(it){ee!==it&&!x&&(n.stencilMask(it),ee=it)},setFunc:function(it,Mt,bt){(X!==it||te!==Mt||ue!==bt)&&(n.stencilFunc(it,Mt,bt),X=it,te=Mt,ue=bt)},setOp:function(it,Mt,bt){(Re!==it||Ge!==Mt||mt!==bt)&&(n.stencilOp(it,Mt,bt),Re=it,Ge=Mt,mt=bt)},setLocked:function(it){x=it},setClear:function(it){St!==it&&(n.clearStencil(it),St=it)},reset:function(){x=!1,ee=null,X=null,te=null,ue=null,Re=null,Ge=null,mt=null,St=null}}}const s=new e,r=new t,o=new i,a=new WeakMap,l=new WeakMap;let c={},u={},f=new WeakMap,d=[],h=null,g=!1,_=null,p=null,m=null,S=null,y=null,E=null,L=null,R=new We(0,0,0),w=0,P=!1,b=null,M=null,I=null,N=null,U=null;const F=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,W=0;const ne=n.getParameter(n.VERSION);ne.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(ne)[1]),q=W>=1):ne.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),q=W>=2);let j=null,me={};const xe=n.getParameter(n.SCISSOR_BOX),ve=n.getParameter(n.VIEWPORT),Ne=new ut().fromArray(xe),Je=new ut().fromArray(ve);function se(x,ee,X,te){const ue=new Uint8Array(4),Re=n.createTexture();n.bindTexture(x,Re),n.texParameteri(x,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(x,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ge=0;Ge<X;Ge++)x===n.TEXTURE_3D||x===n.TEXTURE_2D_ARRAY?n.texImage3D(ee,0,n.RGBA,1,1,te,0,n.RGBA,n.UNSIGNED_BYTE,ue):n.texImage2D(ee+Ge,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ue);return Re}const he={};he[n.TEXTURE_2D]=se(n.TEXTURE_2D,n.TEXTURE_2D,1),he[n.TEXTURE_CUBE_MAP]=se(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),he[n.TEXTURE_2D_ARRAY]=se(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),he[n.TEXTURE_3D]=se(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),oe(n.DEPTH_TEST),r.setFunc(Ra),H(!1),Q(Jd),oe(n.CULL_FACE),C(zi);function oe(x){c[x]!==!0&&(n.enable(x),c[x]=!0)}function fe(x){c[x]!==!1&&(n.disable(x),c[x]=!1)}function Le(x,ee){return u[x]!==ee?(n.bindFramebuffer(x,ee),u[x]=ee,x===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ee),x===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ee),!0):!1}function Oe(x,ee){let X=d,te=!1;if(x){X=f.get(ee),X===void 0&&(X=[],f.set(ee,X));const ue=x.textures;if(X.length!==ue.length||X[0]!==n.COLOR_ATTACHMENT0){for(let Re=0,Ge=ue.length;Re<Ge;Re++)X[Re]=n.COLOR_ATTACHMENT0+Re;X.length=ue.length,te=!0}}else X[0]!==n.BACK&&(X[0]=n.BACK,te=!0);te&&n.drawBuffers(X)}function ke(x){return h!==x?(n.useProgram(x),h=x,!0):!1}const B={[hs]:n.FUNC_ADD,[Xy]:n.FUNC_SUBTRACT,[qy]:n.FUNC_REVERSE_SUBTRACT};B[jy]=n.MIN,B[$y]=n.MAX;const Ye={[Ky]:n.ZERO,[Yy]:n.ONE,[Zy]:n.SRC_COLOR,[Bc]:n.SRC_ALPHA,[iS]:n.SRC_ALPHA_SATURATE,[tS]:n.DST_COLOR,[Qy]:n.DST_ALPHA,[Jy]:n.ONE_MINUS_SRC_COLOR,[kc]:n.ONE_MINUS_SRC_ALPHA,[nS]:n.ONE_MINUS_DST_COLOR,[eS]:n.ONE_MINUS_DST_ALPHA,[sS]:n.CONSTANT_COLOR,[rS]:n.ONE_MINUS_CONSTANT_COLOR,[oS]:n.CONSTANT_ALPHA,[aS]:n.ONE_MINUS_CONSTANT_ALPHA};function C(x,ee,X,te,ue,Re,Ge,mt,St,it){if(x===zi){g===!0&&(fe(n.BLEND),g=!1);return}if(g===!1&&(oe(n.BLEND),g=!0),x!==Wy){if(x!==_||it!==P){if((p!==hs||y!==hs)&&(n.blendEquation(n.FUNC_ADD),p=hs,y=hs),it)switch(x){case er:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Qd:n.blendFunc(n.ONE,n.ONE);break;case ef:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case tf:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",x);break}else switch(x){case er:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Qd:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case ef:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case tf:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",x);break}m=null,S=null,E=null,L=null,R.set(0,0,0),w=0,_=x,P=it}return}ue=ue||ee,Re=Re||X,Ge=Ge||te,(ee!==p||ue!==y)&&(n.blendEquationSeparate(B[ee],B[ue]),p=ee,y=ue),(X!==m||te!==S||Re!==E||Ge!==L)&&(n.blendFuncSeparate(Ye[X],Ye[te],Ye[Re],Ye[Ge]),m=X,S=te,E=Re,L=Ge),(mt.equals(R)===!1||St!==w)&&(n.blendColor(mt.r,mt.g,mt.b,St),R.copy(mt),w=St),_=x,P=!1}function O(x,ee){x.side===On?fe(n.CULL_FACE):oe(n.CULL_FACE);let X=x.side===sn;ee&&(X=!X),H(X),x.blending===er&&x.transparent===!1?C(zi):C(x.blending,x.blendEquation,x.blendSrc,x.blendDst,x.blendEquationAlpha,x.blendSrcAlpha,x.blendDstAlpha,x.blendColor,x.blendAlpha,x.premultipliedAlpha),r.setFunc(x.depthFunc),r.setTest(x.depthTest),r.setMask(x.depthWrite),s.setMask(x.colorWrite);const te=x.stencilWrite;o.setTest(te),te&&(o.setMask(x.stencilWriteMask),o.setFunc(x.stencilFunc,x.stencilRef,x.stencilFuncMask),o.setOp(x.stencilFail,x.stencilZFail,x.stencilZPass)),ie(x.polygonOffset,x.polygonOffsetFactor,x.polygonOffsetUnits),x.alphaToCoverage===!0?oe(n.SAMPLE_ALPHA_TO_COVERAGE):fe(n.SAMPLE_ALPHA_TO_COVERAGE)}function H(x){b!==x&&(x?n.frontFace(n.CW):n.frontFace(n.CCW),b=x)}function Q(x){x!==Hy?(oe(n.CULL_FACE),x!==M&&(x===Jd?n.cullFace(n.BACK):x===Vy?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):fe(n.CULL_FACE),M=x}function J(x){x!==I&&(q&&n.lineWidth(x),I=x)}function ie(x,ee,X){x?(oe(n.POLYGON_OFFSET_FILL),(N!==ee||U!==X)&&(n.polygonOffset(ee,X),N=ee,U=X)):fe(n.POLYGON_OFFSET_FILL)}function de(x){x?oe(n.SCISSOR_TEST):fe(n.SCISSOR_TEST)}function T(x){x===void 0&&(x=n.TEXTURE0+F-1),j!==x&&(n.activeTexture(x),j=x)}function v(x,ee,X){X===void 0&&(j===null?X=n.TEXTURE0+F-1:X=j);let te=me[X];te===void 0&&(te={type:void 0,texture:void 0},me[X]=te),(te.type!==x||te.texture!==ee)&&(j!==X&&(n.activeTexture(X),j=X),n.bindTexture(x,ee||he[x]),te.type=x,te.texture=ee)}function D(){const x=me[j];x!==void 0&&x.type!==void 0&&(n.bindTexture(x.type,null),x.type=void 0,x.texture=void 0)}function V(){try{n.compressedTexImage2D.apply(n,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function K(){try{n.compressedTexImage3D.apply(n,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function $(){try{n.texSubImage2D.apply(n,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function ce(){try{n.texSubImage3D.apply(n,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function re(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function ae(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function be(){try{n.texStorage2D.apply(n,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function le(){try{n.texStorage3D.apply(n,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function ye(){try{n.texImage2D.apply(n,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function He(){try{n.texImage3D.apply(n,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function Ie(x){Ne.equals(x)===!1&&(n.scissor(x.x,x.y,x.z,x.w),Ne.copy(x))}function ge(x){Je.equals(x)===!1&&(n.viewport(x.x,x.y,x.z,x.w),Je.copy(x))}function Ve(x,ee){let X=l.get(ee);X===void 0&&(X=new WeakMap,l.set(ee,X));let te=X.get(x);te===void 0&&(te=n.getUniformBlockIndex(ee,x.name),X.set(x,te))}function we(x,ee){const te=l.get(ee).get(x);a.get(ee)!==te&&(n.uniformBlockBinding(ee,te,x.__bindingPointIndex),a.set(ee,te))}function Qe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},j=null,me={},u={},f=new WeakMap,d=[],h=null,g=!1,_=null,p=null,m=null,S=null,y=null,E=null,L=null,R=new We(0,0,0),w=0,P=!1,b=null,M=null,I=null,N=null,U=null,Ne.set(0,0,n.canvas.width,n.canvas.height),Je.set(0,0,n.canvas.width,n.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:oe,disable:fe,bindFramebuffer:Le,drawBuffers:Oe,useProgram:ke,setBlending:C,setMaterial:O,setFlipSided:H,setCullFace:Q,setLineWidth:J,setPolygonOffset:ie,setScissorTest:de,activeTexture:T,bindTexture:v,unbindTexture:D,compressedTexImage2D:V,compressedTexImage3D:K,texImage2D:ye,texImage3D:He,updateUBOMapping:Ve,uniformBlockBinding:we,texStorage2D:be,texStorage3D:le,texSubImage2D:$,texSubImage3D:ce,compressedTexSubImage2D:re,compressedTexSubImage3D:ae,scissor:Ie,viewport:ge,reset:Qe}}function sw(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ue,u=new WeakMap;let f;const d=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,v){return h?new OffscreenCanvas(T,v):po("canvas")}function _(T,v,D){let V=1;const K=de(T);if((K.width>D||K.height>D)&&(V=D/Math.max(K.width,K.height)),V<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const $=Math.floor(V*K.width),ce=Math.floor(V*K.height);f===void 0&&(f=g($,ce));const re=v?g($,ce):f;return re.width=$,re.height=ce,re.getContext("2d").drawImage(T,0,0,$,ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+$+"x"+ce+")."),re}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),T;return T}function p(T){return T.generateMipmaps&&T.minFilter!==Zt&&T.minFilter!==hn}function m(T){n.generateMipmap(T)}function S(T,v,D,V,K=!1){if(T!==null){if(n[T]!==void 0)return n[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let $=v;if(v===n.RED&&(D===n.FLOAT&&($=n.R32F),D===n.HALF_FLOAT&&($=n.R16F),D===n.UNSIGNED_BYTE&&($=n.R8)),v===n.RED_INTEGER&&(D===n.UNSIGNED_BYTE&&($=n.R8UI),D===n.UNSIGNED_SHORT&&($=n.R16UI),D===n.UNSIGNED_INT&&($=n.R32UI),D===n.BYTE&&($=n.R8I),D===n.SHORT&&($=n.R16I),D===n.INT&&($=n.R32I)),v===n.RG&&(D===n.FLOAT&&($=n.RG32F),D===n.HALF_FLOAT&&($=n.RG16F),D===n.UNSIGNED_BYTE&&($=n.RG8)),v===n.RG_INTEGER&&(D===n.UNSIGNED_BYTE&&($=n.RG8UI),D===n.UNSIGNED_SHORT&&($=n.RG16UI),D===n.UNSIGNED_INT&&($=n.RG32UI),D===n.BYTE&&($=n.RG8I),D===n.SHORT&&($=n.RG16I),D===n.INT&&($=n.RG32I)),v===n.RGB&&D===n.UNSIGNED_INT_5_9_9_9_REV&&($=n.RGB9_E5),v===n.RGBA){const ce=K?La:st.getTransfer(V);D===n.FLOAT&&($=n.RGBA32F),D===n.HALF_FLOAT&&($=n.RGBA16F),D===n.UNSIGNED_BYTE&&($=ce===dt?n.SRGB8_ALPHA8:n.RGBA8),D===n.UNSIGNED_SHORT_4_4_4_4&&($=n.RGBA4),D===n.UNSIGNED_SHORT_5_5_5_1&&($=n.RGB5_A1)}return($===n.R16F||$===n.R32F||$===n.RG16F||$===n.RG32F||$===n.RGBA16F||$===n.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function y(T,v){let D;return T?v===null||v===ur||v===dr?D=n.DEPTH24_STENCIL8:v===Bn?D=n.DEPTH32F_STENCIL8:v===Pa&&(D=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===ur||v===dr?D=n.DEPTH_COMPONENT24:v===Bn?D=n.DEPTH_COMPONENT32F:v===Pa&&(D=n.DEPTH_COMPONENT16),D}function E(T,v){return p(T)===!0||T.isFramebufferTexture&&T.minFilter!==Zt&&T.minFilter!==hn?Math.log2(Math.max(v.width,v.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?v.mipmaps.length:1}function L(T){const v=T.target;v.removeEventListener("dispose",L),w(v),v.isVideoTexture&&u.delete(v)}function R(T){const v=T.target;v.removeEventListener("dispose",R),b(v)}function w(T){const v=i.get(T);if(v.__webglInit===void 0)return;const D=T.source,V=d.get(D);if(V){const K=V[v.__cacheKey];K.usedTimes--,K.usedTimes===0&&P(T),Object.keys(V).length===0&&d.delete(D)}i.remove(T)}function P(T){const v=i.get(T);n.deleteTexture(v.__webglTexture);const D=T.source,V=d.get(D);delete V[v.__cacheKey],o.memory.textures--}function b(T){const v=i.get(T);if(T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(v.__webglFramebuffer[V]))for(let K=0;K<v.__webglFramebuffer[V].length;K++)n.deleteFramebuffer(v.__webglFramebuffer[V][K]);else n.deleteFramebuffer(v.__webglFramebuffer[V]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[V])}else{if(Array.isArray(v.__webglFramebuffer))for(let V=0;V<v.__webglFramebuffer.length;V++)n.deleteFramebuffer(v.__webglFramebuffer[V]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let V=0;V<v.__webglColorRenderbuffer.length;V++)v.__webglColorRenderbuffer[V]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[V]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const D=T.textures;for(let V=0,K=D.length;V<K;V++){const $=i.get(D[V]);$.__webglTexture&&(n.deleteTexture($.__webglTexture),o.memory.textures--),i.remove(D[V])}i.remove(T)}let M=0;function I(){M=0}function N(){const T=M;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),M+=1,T}function U(T){const v=[];return v.push(T.wrapS),v.push(T.wrapT),v.push(T.wrapR||0),v.push(T.magFilter),v.push(T.minFilter),v.push(T.anisotropy),v.push(T.internalFormat),v.push(T.format),v.push(T.type),v.push(T.generateMipmaps),v.push(T.premultiplyAlpha),v.push(T.flipY),v.push(T.unpackAlignment),v.push(T.colorSpace),v.join()}function F(T,v){const D=i.get(T);if(T.isVideoTexture&&J(T),T.isRenderTargetTexture===!1&&T.version>0&&D.__version!==T.version){const V=T.image;if(V===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Je(D,T,v);return}}t.bindTexture(n.TEXTURE_2D,D.__webglTexture,n.TEXTURE0+v)}function q(T,v){const D=i.get(T);if(T.version>0&&D.__version!==T.version){Je(D,T,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,D.__webglTexture,n.TEXTURE0+v)}function W(T,v){const D=i.get(T);if(T.version>0&&D.__version!==T.version){Je(D,T,v);return}t.bindTexture(n.TEXTURE_3D,D.__webglTexture,n.TEXTURE0+v)}function ne(T,v){const D=i.get(T);if(T.version>0&&D.__version!==T.version){se(D,T,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+v)}const j={[cr]:n.REPEAT,[Ui]:n.CLAMP_TO_EDGE,[Ca]:n.MIRRORED_REPEAT},me={[Zt]:n.NEAREST,[Fm]:n.NEAREST_MIPMAP_NEAREST,[Gr]:n.NEAREST_MIPMAP_LINEAR,[hn]:n.LINEAR,[ga]:n.LINEAR_MIPMAP_NEAREST,[ii]:n.LINEAR_MIPMAP_LINEAR},xe={[BS]:n.NEVER,[WS]:n.ALWAYS,[kS]:n.LESS,[jm]:n.LEQUAL,[zS]:n.EQUAL,[GS]:n.GEQUAL,[HS]:n.GREATER,[VS]:n.NOTEQUAL};function ve(T,v){if(v.type===Bn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===hn||v.magFilter===ga||v.magFilter===Gr||v.magFilter===ii||v.minFilter===hn||v.minFilter===ga||v.minFilter===Gr||v.minFilter===ii)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,j[v.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,j[v.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,j[v.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,me[v.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,me[v.minFilter]),v.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,xe[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Zt||v.minFilter!==Gr&&v.minFilter!==ii||v.type===Bn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const D=e.get("EXT_texture_filter_anisotropic");n.texParameterf(T,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function Ne(T,v){let D=!1;T.__webglInit===void 0&&(T.__webglInit=!0,v.addEventListener("dispose",L));const V=v.source;let K=d.get(V);K===void 0&&(K={},d.set(V,K));const $=U(v);if($!==T.__cacheKey){K[$]===void 0&&(K[$]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,D=!0),K[$].usedTimes++;const ce=K[T.__cacheKey];ce!==void 0&&(K[T.__cacheKey].usedTimes--,ce.usedTimes===0&&P(v)),T.__cacheKey=$,T.__webglTexture=K[$].texture}return D}function Je(T,v,D){let V=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(V=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(V=n.TEXTURE_3D);const K=Ne(T,v),$=v.source;t.bindTexture(V,T.__webglTexture,n.TEXTURE0+D);const ce=i.get($);if($.version!==ce.__version||K===!0){t.activeTexture(n.TEXTURE0+D);const re=st.getPrimaries(st.workingColorSpace),ae=v.colorSpace===Ni?null:st.getPrimaries(v.colorSpace),be=v.colorSpace===Ni||re===ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);let le=_(v.image,!1,s.maxTextureSize);le=ie(v,le);const ye=r.convert(v.format,v.colorSpace),He=r.convert(v.type);let Ie=S(v.internalFormat,ye,He,v.colorSpace,v.isVideoTexture);ve(V,v);let ge;const Ve=v.mipmaps,we=v.isVideoTexture!==!0,Qe=ce.__version===void 0||K===!0,x=$.dataReady,ee=E(v,le);if(v.isDepthTexture)Ie=y(v.format===fr,v.type),Qe&&(we?t.texStorage2D(n.TEXTURE_2D,1,Ie,le.width,le.height):t.texImage2D(n.TEXTURE_2D,0,Ie,le.width,le.height,0,ye,He,null));else if(v.isDataTexture)if(Ve.length>0){we&&Qe&&t.texStorage2D(n.TEXTURE_2D,ee,Ie,Ve[0].width,Ve[0].height);for(let X=0,te=Ve.length;X<te;X++)ge=Ve[X],we?x&&t.texSubImage2D(n.TEXTURE_2D,X,0,0,ge.width,ge.height,ye,He,ge.data):t.texImage2D(n.TEXTURE_2D,X,Ie,ge.width,ge.height,0,ye,He,ge.data);v.generateMipmaps=!1}else we?(Qe&&t.texStorage2D(n.TEXTURE_2D,ee,Ie,le.width,le.height),x&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,le.width,le.height,ye,He,le.data)):t.texImage2D(n.TEXTURE_2D,0,Ie,le.width,le.height,0,ye,He,le.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){we&&Qe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ee,Ie,Ve[0].width,Ve[0].height,le.depth);for(let X=0,te=Ve.length;X<te;X++)if(ge=Ve[X],v.format!==Cn)if(ye!==null)if(we){if(x)if(v.layerUpdates.size>0){for(const ue of v.layerUpdates){const Re=ge.width*ge.height;t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,ue,ge.width,ge.height,1,ye,ge.data.slice(Re*ue,Re*(ue+1)),0,0)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,0,ge.width,ge.height,le.depth,ye,ge.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,X,Ie,ge.width,ge.height,le.depth,0,ge.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else we?x&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,0,ge.width,ge.height,le.depth,ye,He,ge.data):t.texImage3D(n.TEXTURE_2D_ARRAY,X,Ie,ge.width,ge.height,le.depth,0,ye,He,ge.data)}else{we&&Qe&&t.texStorage2D(n.TEXTURE_2D,ee,Ie,Ve[0].width,Ve[0].height);for(let X=0,te=Ve.length;X<te;X++)ge=Ve[X],v.format!==Cn?ye!==null?we?x&&t.compressedTexSubImage2D(n.TEXTURE_2D,X,0,0,ge.width,ge.height,ye,ge.data):t.compressedTexImage2D(n.TEXTURE_2D,X,Ie,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):we?x&&t.texSubImage2D(n.TEXTURE_2D,X,0,0,ge.width,ge.height,ye,He,ge.data):t.texImage2D(n.TEXTURE_2D,X,Ie,ge.width,ge.height,0,ye,He,ge.data)}else if(v.isDataArrayTexture)if(we){if(Qe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ee,Ie,le.width,le.height,le.depth),x)if(v.layerUpdates.size>0){let X;switch(He){case n.UNSIGNED_BYTE:switch(ye){case n.ALPHA:X=1;break;case n.LUMINANCE:X=1;break;case n.LUMINANCE_ALPHA:X=2;break;case n.RGB:X=3;break;case n.RGBA:X=4;break;default:throw new Error(`Unknown texel size for format ${ye}.`)}break;case n.UNSIGNED_SHORT_4_4_4_4:case n.UNSIGNED_SHORT_5_5_5_1:case n.UNSIGNED_SHORT_5_6_5:X=1;break;default:throw new Error(`Unknown texel size for type ${He}.`)}const te=le.width*le.height*X;for(const ue of v.layerUpdates)t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ue,le.width,le.height,1,ye,He,le.data.slice(te*ue,te*(ue+1)));v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,ye,He,le.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ie,le.width,le.height,le.depth,0,ye,He,le.data);else if(v.isData3DTexture)we?(Qe&&t.texStorage3D(n.TEXTURE_3D,ee,Ie,le.width,le.height,le.depth),x&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,ye,He,le.data)):t.texImage3D(n.TEXTURE_3D,0,Ie,le.width,le.height,le.depth,0,ye,He,le.data);else if(v.isFramebufferTexture){if(Qe)if(we)t.texStorage2D(n.TEXTURE_2D,ee,Ie,le.width,le.height);else{let X=le.width,te=le.height;for(let ue=0;ue<ee;ue++)t.texImage2D(n.TEXTURE_2D,ue,Ie,X,te,0,ye,He,null),X>>=1,te>>=1}}else if(Ve.length>0){if(we&&Qe){const X=de(Ve[0]);t.texStorage2D(n.TEXTURE_2D,ee,Ie,X.width,X.height)}for(let X=0,te=Ve.length;X<te;X++)ge=Ve[X],we?x&&t.texSubImage2D(n.TEXTURE_2D,X,0,0,ye,He,ge):t.texImage2D(n.TEXTURE_2D,X,Ie,ye,He,ge);v.generateMipmaps=!1}else if(we){if(Qe){const X=de(le);t.texStorage2D(n.TEXTURE_2D,ee,Ie,X.width,X.height)}x&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ye,He,le)}else t.texImage2D(n.TEXTURE_2D,0,Ie,ye,He,le);p(v)&&m(V),ce.__version=$.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function se(T,v,D){if(v.image.length!==6)return;const V=Ne(T,v),K=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+D);const $=i.get(K);if(K.version!==$.__version||V===!0){t.activeTexture(n.TEXTURE0+D);const ce=st.getPrimaries(st.workingColorSpace),re=v.colorSpace===Ni?null:st.getPrimaries(v.colorSpace),ae=v.colorSpace===Ni||ce===re?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae);const be=v.isCompressedTexture||v.image[0].isCompressedTexture,le=v.image[0]&&v.image[0].isDataTexture,ye=[];for(let te=0;te<6;te++)!be&&!le?ye[te]=_(v.image[te],!0,s.maxCubemapSize):ye[te]=le?v.image[te].image:v.image[te],ye[te]=ie(v,ye[te]);const He=ye[0],Ie=r.convert(v.format,v.colorSpace),ge=r.convert(v.type),Ve=S(v.internalFormat,Ie,ge,v.colorSpace),we=v.isVideoTexture!==!0,Qe=$.__version===void 0||V===!0,x=K.dataReady;let ee=E(v,He);ve(n.TEXTURE_CUBE_MAP,v);let X;if(be){we&&Qe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ee,Ve,He.width,He.height);for(let te=0;te<6;te++){X=ye[te].mipmaps;for(let ue=0;ue<X.length;ue++){const Re=X[ue];v.format!==Cn?Ie!==null?we?x&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ue,0,0,Re.width,Re.height,Ie,Re.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ue,Ve,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):we?x&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ue,0,0,Re.width,Re.height,Ie,ge,Re.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ue,Ve,Re.width,Re.height,0,Ie,ge,Re.data)}}}else{if(X=v.mipmaps,we&&Qe){X.length>0&&ee++;const te=de(ye[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ee,Ve,te.width,te.height)}for(let te=0;te<6;te++)if(le){we?x&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,ye[te].width,ye[te].height,Ie,ge,ye[te].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Ve,ye[te].width,ye[te].height,0,Ie,ge,ye[te].data);for(let ue=0;ue<X.length;ue++){const Ge=X[ue].image[te].image;we?x&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ue+1,0,0,Ge.width,Ge.height,Ie,ge,Ge.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ue+1,Ve,Ge.width,Ge.height,0,Ie,ge,Ge.data)}}else{we?x&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Ie,ge,ye[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Ve,Ie,ge,ye[te]);for(let ue=0;ue<X.length;ue++){const Re=X[ue];we?x&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ue+1,0,0,Ie,ge,Re.image[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ue+1,Ve,Ie,ge,Re.image[te])}}}p(v)&&m(n.TEXTURE_CUBE_MAP),$.__version=K.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function he(T,v,D,V,K,$){const ce=r.convert(D.format,D.colorSpace),re=r.convert(D.type),ae=S(D.internalFormat,ce,re,D.colorSpace);if(!i.get(v).__hasExternalTextures){const le=Math.max(1,v.width>>$),ye=Math.max(1,v.height>>$);K===n.TEXTURE_3D||K===n.TEXTURE_2D_ARRAY?t.texImage3D(K,$,ae,le,ye,v.depth,0,ce,re,null):t.texImage2D(K,$,ae,le,ye,0,ce,re,null)}t.bindFramebuffer(n.FRAMEBUFFER,T),Q(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,V,K,i.get(D).__webglTexture,0,H(v)):(K===n.TEXTURE_2D||K>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,V,K,i.get(D).__webglTexture,$),t.bindFramebuffer(n.FRAMEBUFFER,null)}function oe(T,v,D){if(n.bindRenderbuffer(n.RENDERBUFFER,T),v.depthBuffer){const V=v.depthTexture,K=V&&V.isDepthTexture?V.type:null,$=y(v.stencilBuffer,K),ce=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,re=H(v);Q(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,re,$,v.width,v.height):D?n.renderbufferStorageMultisample(n.RENDERBUFFER,re,$,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,$,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ce,n.RENDERBUFFER,T)}else{const V=v.textures;for(let K=0;K<V.length;K++){const $=V[K],ce=r.convert($.format,$.colorSpace),re=r.convert($.type),ae=S($.internalFormat,ce,re,$.colorSpace),be=H(v);D&&Q(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,be,ae,v.width,v.height):Q(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,be,ae,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,ae,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function fe(T,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,T),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),F(v.depthTexture,0);const V=i.get(v.depthTexture).__webglTexture,K=H(v);if(v.depthTexture.format===tr)Q(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,V,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,V,0);else if(v.depthTexture.format===fr)Q(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,V,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,V,0);else throw new Error("Unknown depthTexture format")}function Le(T){const v=i.get(T),D=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!v.__autoAllocateDepthBuffer){if(D)throw new Error("target.depthTexture not supported in Cube render targets");fe(v.__webglFramebuffer,T)}else if(D){v.__webglDepthbuffer=[];for(let V=0;V<6;V++)t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[V]),v.__webglDepthbuffer[V]=n.createRenderbuffer(),oe(v.__webglDepthbuffer[V],T,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=n.createRenderbuffer(),oe(v.__webglDepthbuffer,T,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Oe(T,v,D){const V=i.get(T);v!==void 0&&he(V.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),D!==void 0&&Le(T)}function ke(T){const v=T.texture,D=i.get(T),V=i.get(v);T.addEventListener("dispose",R);const K=T.textures,$=T.isWebGLCubeRenderTarget===!0,ce=K.length>1;if(ce||(V.__webglTexture===void 0&&(V.__webglTexture=n.createTexture()),V.__version=v.version,o.memory.textures++),$){D.__webglFramebuffer=[];for(let re=0;re<6;re++)if(v.mipmaps&&v.mipmaps.length>0){D.__webglFramebuffer[re]=[];for(let ae=0;ae<v.mipmaps.length;ae++)D.__webglFramebuffer[re][ae]=n.createFramebuffer()}else D.__webglFramebuffer[re]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){D.__webglFramebuffer=[];for(let re=0;re<v.mipmaps.length;re++)D.__webglFramebuffer[re]=n.createFramebuffer()}else D.__webglFramebuffer=n.createFramebuffer();if(ce)for(let re=0,ae=K.length;re<ae;re++){const be=i.get(K[re]);be.__webglTexture===void 0&&(be.__webglTexture=n.createTexture(),o.memory.textures++)}if(T.samples>0&&Q(T)===!1){D.__webglMultisampledFramebuffer=n.createFramebuffer(),D.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let re=0;re<K.length;re++){const ae=K[re];D.__webglColorRenderbuffer[re]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,D.__webglColorRenderbuffer[re]);const be=r.convert(ae.format,ae.colorSpace),le=r.convert(ae.type),ye=S(ae.internalFormat,be,le,ae.colorSpace,T.isXRRenderTarget===!0),He=H(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,He,ye,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+re,n.RENDERBUFFER,D.__webglColorRenderbuffer[re])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(D.__webglDepthRenderbuffer=n.createRenderbuffer(),oe(D.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if($){t.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture),ve(n.TEXTURE_CUBE_MAP,v);for(let re=0;re<6;re++)if(v.mipmaps&&v.mipmaps.length>0)for(let ae=0;ae<v.mipmaps.length;ae++)he(D.__webglFramebuffer[re][ae],T,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+re,ae);else he(D.__webglFramebuffer[re],T,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);p(v)&&m(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ce){for(let re=0,ae=K.length;re<ae;re++){const be=K[re],le=i.get(be);t.bindTexture(n.TEXTURE_2D,le.__webglTexture),ve(n.TEXTURE_2D,be),he(D.__webglFramebuffer,T,be,n.COLOR_ATTACHMENT0+re,n.TEXTURE_2D,0),p(be)&&m(n.TEXTURE_2D)}t.unbindTexture()}else{let re=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(re=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(re,V.__webglTexture),ve(re,v),v.mipmaps&&v.mipmaps.length>0)for(let ae=0;ae<v.mipmaps.length;ae++)he(D.__webglFramebuffer[ae],T,v,n.COLOR_ATTACHMENT0,re,ae);else he(D.__webglFramebuffer,T,v,n.COLOR_ATTACHMENT0,re,0);p(v)&&m(re),t.unbindTexture()}T.depthBuffer&&Le(T)}function B(T){const v=T.textures;for(let D=0,V=v.length;D<V;D++){const K=v[D];if(p(K)){const $=T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ce=i.get(K).__webglTexture;t.bindTexture($,ce),m($),t.unbindTexture()}}}const Ye=[],C=[];function O(T){if(T.samples>0){if(Q(T)===!1){const v=T.textures,D=T.width,V=T.height;let K=n.COLOR_BUFFER_BIT;const $=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=i.get(T),re=v.length>1;if(re)for(let ae=0;ae<v.length;ae++)t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let ae=0;ae<v.length;ae++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(K|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(K|=n.STENCIL_BUFFER_BIT)),re){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ce.__webglColorRenderbuffer[ae]);const be=i.get(v[ae]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,be,0)}n.blitFramebuffer(0,0,D,V,0,0,D,V,K,n.NEAREST),l===!0&&(Ye.length=0,C.length=0,Ye.push(n.COLOR_ATTACHMENT0+ae),T.depthBuffer&&T.resolveDepthBuffer===!1&&(Ye.push($),C.push($),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,C)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ye))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),re)for(let ae=0;ae<v.length;ae++){t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.RENDERBUFFER,ce.__webglColorRenderbuffer[ae]);const be=i.get(v[ae]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.TEXTURE_2D,be,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const v=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function H(T){return Math.min(s.maxSamples,T.samples)}function Q(T){const v=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function J(T){const v=o.render.frame;u.get(T)!==v&&(u.set(T,v),T.update())}function ie(T,v){const D=T.colorSpace,V=T.format,K=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||D!==Ft&&D!==Ni&&(st.getTransfer(D)===dt?(V!==Cn||K!==Wi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",D)),v}function de(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=I,this.setTexture2D=F,this.setTexture2DArray=q,this.setTexture3D=W,this.setTextureCube=ne,this.rebindTextures=Oe,this.setupRenderTarget=ke,this.updateRenderTargetMipmap=B,this.updateMultisampleRenderTarget=O,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=he,this.useMultisampledRTT=Q}function rw(n,e){function t(i,s=Ni){let r;const o=st.getTransfer(s);if(i===Wi)return n.UNSIGNED_BYTE;if(i===km)return n.UNSIGNED_SHORT_4_4_4_4;if(i===zm)return n.UNSIGNED_SHORT_5_5_5_1;if(i===AS)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===ES)return n.BYTE;if(i===TS)return n.SHORT;if(i===Pa)return n.UNSIGNED_SHORT;if(i===Bm)return n.INT;if(i===ur)return n.UNSIGNED_INT;if(i===Bn)return n.FLOAT;if(i===tl)return n.HALF_FLOAT;if(i===wS)return n.ALPHA;if(i===RS)return n.RGB;if(i===Cn)return n.RGBA;if(i===CS)return n.LUMINANCE;if(i===PS)return n.LUMINANCE_ALPHA;if(i===tr)return n.DEPTH_COMPONENT;if(i===fr)return n.DEPTH_STENCIL;if(i===Hm)return n.RED;if(i===Vm)return n.RED_INTEGER;if(i===LS)return n.RG;if(i===Gm)return n.RG_INTEGER;if(i===Wm)return n.RGBA_INTEGER;if(i===Rl||i===Cl||i===Pl||i===Ll)if(o===dt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Rl)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Cl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Pl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ll)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Rl)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Cl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Pl)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ll)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===sf||i===rf||i===of||i===af)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===sf)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===rf)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===of)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===af)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===lf||i===cf||i===uf)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===lf||i===cf)return o===dt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===uf)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===df||i===ff||i===hf||i===pf||i===mf||i===gf||i===_f||i===vf||i===xf||i===yf||i===Sf||i===Mf||i===bf||i===Ef)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===df)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ff)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===hf)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===pf)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===mf)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===gf)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===_f)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===vf)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===xf)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===yf)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Sf)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Mf)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===bf)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ef)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Il||i===Tf||i===Af)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Il)return o===dt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Tf)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Af)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===IS||i===wf||i===Rf||i===Cf)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Il)return r.COMPRESSED_RED_RGTC1_EXT;if(i===wf)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Rf)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Cf)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===dr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class ow extends Kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Oi extends pt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const aw={type:"move"};class sc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Oi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Oi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Oi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,i),m=this._getHandJoint(c,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),h=.02,g=.005;c.inputState.pinching&&d>h+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=h-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(aw)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Oi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const lw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,cw=`
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

}`;class uw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new Nt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Xi({vertexShader:lw,fragmentShader:cw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new nn(new il(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}}class dw extends di{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,d=null,h=null,g=null;const _=new uw,p=t.getContextAttributes();let m=null,S=null;const y=[],E=[],L=new Ue;let R=null;const w=new Kt;w.layers.enable(1),w.viewport=new ut;const P=new Kt;P.layers.enable(2),P.viewport=new ut;const b=[w,P],M=new ow;M.layers.enable(1),M.layers.enable(2);let I=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let he=y[se];return he===void 0&&(he=new sc,y[se]=he),he.getTargetRaySpace()},this.getControllerGrip=function(se){let he=y[se];return he===void 0&&(he=new sc,y[se]=he),he.getGripSpace()},this.getHand=function(se){let he=y[se];return he===void 0&&(he=new sc,y[se]=he),he.getHandSpace()};function U(se){const he=E.indexOf(se.inputSource);if(he===-1)return;const oe=y[he];oe!==void 0&&(oe.update(se.inputSource,se.frame,c||o),oe.dispatchEvent({type:se.type,data:se.inputSource}))}function F(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",F),s.removeEventListener("inputsourceschange",q);for(let se=0;se<y.length;se++){const he=E[se];he!==null&&(E[se]=null,y[se].disconnect(he))}I=null,N=null,_.reset(),e.setRenderTarget(m),h=null,d=null,f=null,s=null,S=null,Je.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){r=se,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){a=se,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(se){c=se},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(se){if(s=se,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",F),s.addEventListener("inputsourceschange",q),p.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(L),s.renderState.layers===void 0){const he={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(s,t,he),s.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),S=new Ms(h.framebufferWidth,h.framebufferHeight,{format:Cn,type:Wi,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let he=null,oe=null,fe=null;p.depth&&(fe=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=p.stencil?fr:tr,oe=p.stencil?dr:ur);const Le={colorFormat:t.RGBA8,depthFormat:fe,scaleFactor:r};f=new XRWebGLBinding(s,t),d=f.createProjectionLayer(Le),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new Ms(d.textureWidth,d.textureHeight,{format:Cn,type:Wi,depthTexture:new rg(d.textureWidth,d.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Je.setContext(s),Je.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function q(se){for(let he=0;he<se.removed.length;he++){const oe=se.removed[he],fe=E.indexOf(oe);fe>=0&&(E[fe]=null,y[fe].disconnect(oe))}for(let he=0;he<se.added.length;he++){const oe=se.added[he];let fe=E.indexOf(oe);if(fe===-1){for(let Oe=0;Oe<y.length;Oe++)if(Oe>=E.length){E.push(oe),fe=Oe;break}else if(E[Oe]===null){E[Oe]=oe,fe=Oe;break}if(fe===-1)break}const Le=y[fe];Le&&Le.connect(oe)}}const W=new k,ne=new k;function j(se,he,oe){W.setFromMatrixPosition(he.matrixWorld),ne.setFromMatrixPosition(oe.matrixWorld);const fe=W.distanceTo(ne),Le=he.projectionMatrix.elements,Oe=oe.projectionMatrix.elements,ke=Le[14]/(Le[10]-1),B=Le[14]/(Le[10]+1),Ye=(Le[9]+1)/Le[5],C=(Le[9]-1)/Le[5],O=(Le[8]-1)/Le[0],H=(Oe[8]+1)/Oe[0],Q=ke*O,J=ke*H,ie=fe/(-O+H),de=ie*-O;he.matrixWorld.decompose(se.position,se.quaternion,se.scale),se.translateX(de),se.translateZ(ie),se.matrixWorld.compose(se.position,se.quaternion,se.scale),se.matrixWorldInverse.copy(se.matrixWorld).invert();const T=ke+ie,v=B+ie,D=Q-de,V=J+(fe-de),K=Ye*B/v*T,$=C*B/v*T;se.projectionMatrix.makePerspective(D,V,K,$,T,v),se.projectionMatrixInverse.copy(se.projectionMatrix).invert()}function me(se,he){he===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(he.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(s===null)return;_.texture!==null&&(se.near=_.depthNear,se.far=_.depthFar),M.near=P.near=w.near=se.near,M.far=P.far=w.far=se.far,(I!==M.near||N!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),I=M.near,N=M.far,w.near=I,w.far=N,P.near=I,P.far=N,w.updateProjectionMatrix(),P.updateProjectionMatrix(),se.updateProjectionMatrix());const he=se.parent,oe=M.cameras;me(M,he);for(let fe=0;fe<oe.length;fe++)me(oe[fe],he);oe.length===2?j(M,w,P):M.projectionMatrix.copy(w.projectionMatrix),xe(se,M,he)};function xe(se,he,oe){oe===null?se.matrix.copy(he.matrixWorld):(se.matrix.copy(oe.matrixWorld),se.matrix.invert(),se.matrix.multiply(he.matrixWorld)),se.matrix.decompose(se.position,se.quaternion,se.scale),se.updateMatrixWorld(!0),se.projectionMatrix.copy(he.projectionMatrix),se.projectionMatrixInverse.copy(he.projectionMatrixInverse),se.isPerspectiveCamera&&(se.fov=hr*2*Math.atan(1/se.projectionMatrix.elements[5]),se.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&h===null))return l},this.setFoveation=function(se){l=se,d!==null&&(d.fixedFoveation=se),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=se)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let ve=null;function Ne(se,he){if(u=he.getViewerPose(c||o),g=he,u!==null){const oe=u.views;h!==null&&(e.setRenderTargetFramebuffer(S,h.framebuffer),e.setRenderTarget(S));let fe=!1;oe.length!==M.cameras.length&&(M.cameras.length=0,fe=!0);for(let Oe=0;Oe<oe.length;Oe++){const ke=oe[Oe];let B=null;if(h!==null)B=h.getViewport(ke);else{const C=f.getViewSubImage(d,ke);B=C.viewport,Oe===0&&(e.setRenderTargetTextures(S,C.colorTexture,d.ignoreDepthValues?void 0:C.depthStencilTexture),e.setRenderTarget(S))}let Ye=b[Oe];Ye===void 0&&(Ye=new Kt,Ye.layers.enable(Oe),Ye.viewport=new ut,b[Oe]=Ye),Ye.matrix.fromArray(ke.transform.matrix),Ye.matrix.decompose(Ye.position,Ye.quaternion,Ye.scale),Ye.projectionMatrix.fromArray(ke.projectionMatrix),Ye.projectionMatrixInverse.copy(Ye.projectionMatrix).invert(),Ye.viewport.set(B.x,B.y,B.width,B.height),Oe===0&&(M.matrix.copy(Ye.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),fe===!0&&M.cameras.push(Ye)}const Le=s.enabledFeatures;if(Le&&Le.includes("depth-sensing")){const Oe=f.getDepthInformation(oe[0]);Oe&&Oe.isValid&&Oe.texture&&_.init(e,Oe,s.renderState)}}for(let oe=0;oe<y.length;oe++){const fe=E[oe],Le=y[oe];fe!==null&&Le!==void 0&&Le.update(fe,he,c||o)}ve&&ve(se,he),he.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:he}),g=null}const Je=new sg;Je.setAnimationLoop(Ne),this.setAnimationLoop=function(se){ve=se},this.dispose=function(){}}}const cs=new Gn,fw=new je;function hw(n,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,tg(n)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,S,y,E){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),f(p,m)):m.isMeshPhongMaterial?(r(p,m),u(p,m)):m.isMeshStandardMaterial?(r(p,m),d(p,m),m.isMeshPhysicalMaterial&&h(p,m,E)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),_(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,S,y):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===sn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===sn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const S=e.get(m),y=S.envMap,E=S.envMapRotation;y&&(p.envMap.value=y,cs.copy(E),cs.x*=-1,cs.y*=-1,cs.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(cs.y*=-1,cs.z*=-1),p.envMapRotation.value.setFromMatrix4(fw.makeRotationFromEuler(cs)),p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,S,y){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*S,p.scale.value=y*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function f(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function h(p,m,S){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===sn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){const S=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function pw(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,y){const E=y.program;i.uniformBlockBinding(S,E)}function c(S,y){let E=s[S.id];E===void 0&&(g(S),E=u(S),s[S.id]=E,S.addEventListener("dispose",p));const L=y.program;i.updateUBOMapping(S,L);const R=e.render.frame;r[S.id]!==R&&(d(S),r[S.id]=R)}function u(S){const y=f();S.__bindingPointIndex=y;const E=n.createBuffer(),L=S.__size,R=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,L,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,E),E}function f(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const y=s[S.id],E=S.uniforms,L=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let R=0,w=E.length;R<w;R++){const P=Array.isArray(E[R])?E[R]:[E[R]];for(let b=0,M=P.length;b<M;b++){const I=P[b];if(h(I,R,b,L)===!0){const N=I.__offset,U=Array.isArray(I.value)?I.value:[I.value];let F=0;for(let q=0;q<U.length;q++){const W=U[q],ne=_(W);typeof W=="number"||typeof W=="boolean"?(I.__data[0]=W,n.bufferSubData(n.UNIFORM_BUFFER,N+F,I.__data)):W.isMatrix3?(I.__data[0]=W.elements[0],I.__data[1]=W.elements[1],I.__data[2]=W.elements[2],I.__data[3]=0,I.__data[4]=W.elements[3],I.__data[5]=W.elements[4],I.__data[6]=W.elements[5],I.__data[7]=0,I.__data[8]=W.elements[6],I.__data[9]=W.elements[7],I.__data[10]=W.elements[8],I.__data[11]=0):(W.toArray(I.__data,F),F+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,N,I.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(S,y,E,L){const R=S.value,w=y+"_"+E;if(L[w]===void 0)return typeof R=="number"||typeof R=="boolean"?L[w]=R:L[w]=R.clone(),!0;{const P=L[w];if(typeof R=="number"||typeof R=="boolean"){if(P!==R)return L[w]=R,!0}else if(P.equals(R)===!1)return P.copy(R),!0}return!1}function g(S){const y=S.uniforms;let E=0;const L=16;for(let w=0,P=y.length;w<P;w++){const b=Array.isArray(y[w])?y[w]:[y[w]];for(let M=0,I=b.length;M<I;M++){const N=b[M],U=Array.isArray(N.value)?N.value:[N.value];for(let F=0,q=U.length;F<q;F++){const W=U[F],ne=_(W),j=E%L;j!==0&&L-j<ne.boundary&&(E+=L-j),N.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=E,E+=ne.storage}}}const R=E%L;return R>0&&(E+=L-R),S.__size=E,S.__cache={},this}function _(S){const y={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=48,y.storage=48):S.isMatrix4?(y.boundary=64,y.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),y}function p(S){const y=S.target;y.removeEventListener("dispose",p);const E=o.indexOf(y.__bindingPointIndex);o.splice(E,1),n.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function m(){for(const S in s)n.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:l,update:c,dispose:m}}class mw{constructor(e={}){const{canvas:t=aM(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const h=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const m=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=$t,this.toneMapping=Hi,this.toneMappingExposure=1;const y=this;let E=!1,L=0,R=0,w=null,P=-1,b=null;const M=new ut,I=new ut;let N=null;const U=new We(0);let F=0,q=t.width,W=t.height,ne=1,j=null,me=null;const xe=new ut(0,0,q,W),ve=new ut(0,0,q,W);let Ne=!1;const Je=new Eu;let se=!1,he=!1;const oe=new je,fe=new k,Le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Oe=!1;function ke(){return w===null?ne:1}let B=i;function Ye(A,z){return t.getContext(A,z)}try{const A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${xu}`),t.addEventListener("webglcontextlost",ee,!1),t.addEventListener("webglcontextrestored",X,!1),t.addEventListener("webglcontextcreationerror",te,!1),B===null){const z="webgl2";if(B=Ye(z,A),B===null)throw Ye(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let C,O,H,Q,J,ie,de,T,v,D,V,K,$,ce,re,ae,be,le,ye,He,Ie,ge,Ve,we;function Qe(){C=new bT(B),C.init(),ge=new rw(B,C),O=new _T(B,C,e,ge),H=new iw(B),Q=new AT(B),J=new GA,ie=new sw(B,C,H,J,O,ge,Q),de=new xT(y),T=new MT(y),v=new DM(B),Ve=new mT(B,v),D=new ET(B,v,Q,Ve),V=new RT(B,D,v,Q),ye=new wT(B,O,ie),ae=new vT(J),K=new VA(y,de,T,C,O,Ve,ae),$=new hw(y,J),ce=new XA,re=new ZA(C),le=new pT(y,de,T,H,V,d,l),be=new nw(y,V,O),we=new pw(B,Q,O,H),He=new gT(B,C,Q),Ie=new TT(B,C,Q),Q.programs=K.programs,y.capabilities=O,y.extensions=C,y.properties=J,y.renderLists=ce,y.shadowMap=be,y.state=H,y.info=Q}Qe();const x=new dw(y,B);this.xr=x,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const A=C.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=C.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(A){A!==void 0&&(ne=A,this.setSize(q,W,!1))},this.getSize=function(A){return A.set(q,W)},this.setSize=function(A,z,Y=!0){if(x.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=A,W=z,t.width=Math.floor(A*ne),t.height=Math.floor(z*ne),Y===!0&&(t.style.width=A+"px",t.style.height=z+"px"),this.setViewport(0,0,A,z)},this.getDrawingBufferSize=function(A){return A.set(q*ne,W*ne).floor()},this.setDrawingBufferSize=function(A,z,Y){q=A,W=z,ne=Y,t.width=Math.floor(A*Y),t.height=Math.floor(z*Y),this.setViewport(0,0,A,z)},this.getCurrentViewport=function(A){return A.copy(M)},this.getViewport=function(A){return A.copy(xe)},this.setViewport=function(A,z,Y,Z){A.isVector4?xe.set(A.x,A.y,A.z,A.w):xe.set(A,z,Y,Z),H.viewport(M.copy(xe).multiplyScalar(ne).round())},this.getScissor=function(A){return A.copy(ve)},this.setScissor=function(A,z,Y,Z){A.isVector4?ve.set(A.x,A.y,A.z,A.w):ve.set(A,z,Y,Z),H.scissor(I.copy(ve).multiplyScalar(ne).round())},this.getScissorTest=function(){return Ne},this.setScissorTest=function(A){H.setScissorTest(Ne=A)},this.setOpaqueSort=function(A){j=A},this.setTransparentSort=function(A){me=A},this.getClearColor=function(A){return A.copy(le.getClearColor())},this.setClearColor=function(){le.setClearColor.apply(le,arguments)},this.getClearAlpha=function(){return le.getClearAlpha()},this.setClearAlpha=function(){le.setClearAlpha.apply(le,arguments)},this.clear=function(A=!0,z=!0,Y=!0){let Z=0;if(A){let G=!1;if(w!==null){const pe=w.texture.format;G=pe===Wm||pe===Gm||pe===Vm}if(G){const pe=w.texture.type,Me=pe===Wi||pe===ur||pe===Pa||pe===dr||pe===km||pe===zm,Ee=le.getClearColor(),Te=le.getClearAlpha(),Fe=Ee.r,ze=Ee.g,De=Ee.b;Me?(h[0]=Fe,h[1]=ze,h[2]=De,h[3]=Te,B.clearBufferuiv(B.COLOR,0,h)):(g[0]=Fe,g[1]=ze,g[2]=De,g[3]=Te,B.clearBufferiv(B.COLOR,0,g))}else Z|=B.COLOR_BUFFER_BIT}z&&(Z|=B.DEPTH_BUFFER_BIT),Y&&(Z|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ee,!1),t.removeEventListener("webglcontextrestored",X,!1),t.removeEventListener("webglcontextcreationerror",te,!1),ce.dispose(),re.dispose(),J.dispose(),de.dispose(),T.dispose(),V.dispose(),Ve.dispose(),we.dispose(),K.dispose(),x.dispose(),x.removeEventListener("sessionstart",Mt),x.removeEventListener("sessionend",bt),an.stop()};function ee(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function X(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const A=Q.autoReset,z=be.enabled,Y=be.autoUpdate,Z=be.needsUpdate,G=be.type;Qe(),Q.autoReset=A,be.enabled=z,be.autoUpdate=Y,be.needsUpdate=Z,be.type=G}function te(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ue(A){const z=A.target;z.removeEventListener("dispose",ue),Re(z)}function Re(A){Ge(A),J.remove(A)}function Ge(A){const z=J.get(A).programs;z!==void 0&&(z.forEach(function(Y){K.releaseProgram(Y)}),A.isShaderMaterial&&K.releaseShaderCache(A))}this.renderBufferDirect=function(A,z,Y,Z,G,pe){z===null&&(z=Le);const Me=G.isMesh&&G.matrixWorld.determinant()<0,Ee=bg(A,z,Y,Z,G);H.setMaterial(Z,Me);let Te=Y.index,Fe=1;if(Z.wireframe===!0){if(Te=D.getWireframeAttribute(Y),Te===void 0)return;Fe=2}const ze=Y.drawRange,De=Y.attributes.position;let rt=ze.start*Fe,gt=(ze.start+ze.count)*Fe;pe!==null&&(rt=Math.max(rt,pe.start*Fe),gt=Math.min(gt,(pe.start+pe.count)*Fe)),Te!==null?(rt=Math.max(rt,0),gt=Math.min(gt,Te.count)):De!=null&&(rt=Math.max(rt,0),gt=Math.min(gt,De.count));const _t=gt-rt;if(_t<0||_t===1/0)return;Ve.setup(G,Z,Ee,Y,Te);let cn,ot=He;if(Te!==null&&(cn=v.get(Te),ot=Ie,ot.setIndex(cn)),G.isMesh)Z.wireframe===!0?(H.setLineWidth(Z.wireframeLinewidth*ke()),ot.setMode(B.LINES)):ot.setMode(B.TRIANGLES);else if(G.isLine){let Ce=Z.linewidth;Ce===void 0&&(Ce=1),H.setLineWidth(Ce*ke()),G.isLineSegments?ot.setMode(B.LINES):G.isLineLoop?ot.setMode(B.LINE_LOOP):ot.setMode(B.LINE_STRIP)}else G.isPoints?ot.setMode(B.POINTS):G.isSprite&&ot.setMode(B.TRIANGLES);if(G.isBatchedMesh)G._multiDrawInstances!==null?ot.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances):ot.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else if(G.isInstancedMesh)ot.renderInstances(rt,_t,G.count);else if(Y.isInstancedBufferGeometry){const Ce=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Wt=Math.min(Y.instanceCount,Ce);ot.renderInstances(rt,_t,Wt)}else ot.render(rt,_t)};function mt(A,z,Y){A.transparent===!0&&A.side===On&&A.forceSinglePass===!1?(A.side=sn,A.needsUpdate=!0,Eo(A,z,Y),A.side=li,A.needsUpdate=!0,Eo(A,z,Y),A.side=On):Eo(A,z,Y)}this.compile=function(A,z,Y=null){Y===null&&(Y=A),p=re.get(Y),p.init(z),S.push(p),Y.traverseVisible(function(G){G.isLight&&G.layers.test(z.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),A!==Y&&A.traverseVisible(function(G){G.isLight&&G.layers.test(z.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),p.setupLights();const Z=new Set;return A.traverse(function(G){const pe=G.material;if(pe)if(Array.isArray(pe))for(let Me=0;Me<pe.length;Me++){const Ee=pe[Me];mt(Ee,Y,G),Z.add(Ee)}else mt(pe,Y,G),Z.add(pe)}),S.pop(),p=null,Z},this.compileAsync=function(A,z,Y=null){const Z=this.compile(A,z,Y);return new Promise(G=>{function pe(){if(Z.forEach(function(Me){J.get(Me).currentProgram.isReady()&&Z.delete(Me)}),Z.size===0){G(A);return}setTimeout(pe,10)}C.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let St=null;function it(A){St&&St(A)}function Mt(){an.stop()}function bt(){an.start()}const an=new sg;an.setAnimationLoop(it),typeof self<"u"&&an.setContext(self),this.setAnimationLoop=function(A){St=A,x.setAnimationLoop(A),A===null?an.stop():an.start()},x.addEventListener("sessionstart",Mt),x.addEventListener("sessionend",bt),this.render=function(A,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),x.enabled===!0&&x.isPresenting===!0&&(x.cameraAutoUpdate===!0&&x.updateCamera(z),z=x.getCamera()),A.isScene===!0&&A.onBeforeRender(y,A,z,w),p=re.get(A,S.length),p.init(z),S.push(p),oe.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Je.setFromProjectionMatrix(oe),he=this.localClippingEnabled,se=ae.init(this.clippingPlanes,he),_=ce.get(A,m.length),_.init(),m.push(_),x.enabled===!0&&x.isPresenting===!0){const pe=y.xr.getDepthSensingMesh();pe!==null&&ln(pe,z,-1/0,y.sortObjects)}ln(A,z,0,y.sortObjects),_.finish(),y.sortObjects===!0&&_.sort(j,me),Oe=x.enabled===!1||x.isPresenting===!1||x.hasDepthSensing()===!1,Oe&&le.addToRenderList(_,A),this.info.render.frame++,se===!0&&ae.beginShadows();const Y=p.state.shadowsArray;be.render(Y,A,z),se===!0&&ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const Z=_.opaque,G=_.transmissive;if(p.setupLights(),z.isArrayCamera){const pe=z.cameras;if(G.length>0)for(let Me=0,Ee=pe.length;Me<Ee;Me++){const Te=pe[Me];Yi(Z,G,A,Te)}Oe&&le.render(A);for(let Me=0,Ee=pe.length;Me<Ee;Me++){const Te=pe[Me];hi(_,A,Te,Te.viewport)}}else G.length>0&&Yi(Z,G,A,z),Oe&&le.render(A),hi(_,A,z);w!==null&&(ie.updateMultisampleRenderTarget(w),ie.updateRenderTargetMipmap(w)),A.isScene===!0&&A.onAfterRender(y,A,z),Ve.resetDefaultState(),P=-1,b=null,S.pop(),S.length>0?(p=S[S.length-1],se===!0&&ae.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function ln(A,z,Y,Z){if(A.visible===!1)return;if(A.layers.test(z.layers)){if(A.isGroup)Y=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(z);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Je.intersectsSprite(A)){Z&&fe.setFromMatrixPosition(A.matrixWorld).applyMatrix4(oe);const Me=V.update(A),Ee=A.material;Ee.visible&&_.push(A,Me,Ee,Y,fe.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Je.intersectsObject(A))){const Me=V.update(A),Ee=A.material;if(Z&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),fe.copy(A.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),fe.copy(Me.boundingSphere.center)),fe.applyMatrix4(A.matrixWorld).applyMatrix4(oe)),Array.isArray(Ee)){const Te=Me.groups;for(let Fe=0,ze=Te.length;Fe<ze;Fe++){const De=Te[Fe],rt=Ee[De.materialIndex];rt&&rt.visible&&_.push(A,Me,rt,Y,fe.z,De)}}else Ee.visible&&_.push(A,Me,Ee,Y,fe.z,null)}}const pe=A.children;for(let Me=0,Ee=pe.length;Me<Ee;Me++)ln(pe[Me],z,Y,Z)}function hi(A,z,Y,Z){const G=A.opaque,pe=A.transmissive,Me=A.transparent;p.setupLightsView(Y),se===!0&&ae.setGlobalState(y.clippingPlanes,Y),Z&&H.viewport(M.copy(Z)),G.length>0&&Zi(G,z,Y),pe.length>0&&Zi(pe,z,Y),Me.length>0&&Zi(Me,z,Y),H.buffers.depth.setTest(!0),H.buffers.depth.setMask(!0),H.buffers.color.setMask(!0),H.setPolygonOffset(!1)}function Yi(A,z,Y,Z){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Z.id]===void 0&&(p.state.transmissionRenderTarget[Z.id]=new Ms(1,1,{generateMipmaps:!0,type:C.has("EXT_color_buffer_half_float")||C.has("EXT_color_buffer_float")?tl:Wi,minFilter:ii,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:st.workingColorSpace}));const pe=p.state.transmissionRenderTarget[Z.id],Me=Z.viewport||M;pe.setSize(Me.z,Me.w);const Ee=y.getRenderTarget();y.setRenderTarget(pe),y.getClearColor(U),F=y.getClearAlpha(),F<1&&y.setClearColor(16777215,.5),Oe?le.render(Y):y.clear();const Te=y.toneMapping;y.toneMapping=Hi;const Fe=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),p.setupLightsView(Z),se===!0&&ae.setGlobalState(y.clippingPlanes,Z),Zi(A,Y,Z),ie.updateMultisampleRenderTarget(pe),ie.updateRenderTargetMipmap(pe),C.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let De=0,rt=z.length;De<rt;De++){const gt=z[De],_t=gt.object,cn=gt.geometry,ot=gt.material,Ce=gt.group;if(ot.side===On&&_t.layers.test(Z.layers)){const Wt=ot.side;ot.side=sn,ot.needsUpdate=!0,Nu(_t,Y,Z,cn,ot,Ce),ot.side=Wt,ot.needsUpdate=!0,ze=!0}}ze===!0&&(ie.updateMultisampleRenderTarget(pe),ie.updateRenderTargetMipmap(pe))}y.setRenderTarget(Ee),y.setClearColor(U,F),Fe!==void 0&&(Z.viewport=Fe),y.toneMapping=Te}function Zi(A,z,Y){const Z=z.isScene===!0?z.overrideMaterial:null;for(let G=0,pe=A.length;G<pe;G++){const Me=A[G],Ee=Me.object,Te=Me.geometry,Fe=Z===null?Me.material:Z,ze=Me.group;Ee.layers.test(Y.layers)&&Nu(Ee,z,Y,Te,Fe,ze)}}function Nu(A,z,Y,Z,G,pe){A.onBeforeRender(y,z,Y,Z,G,pe),A.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),G.onBeforeRender(y,z,Y,Z,A,pe),G.transparent===!0&&G.side===On&&G.forceSinglePass===!1?(G.side=sn,G.needsUpdate=!0,y.renderBufferDirect(Y,z,Z,G,A,pe),G.side=li,G.needsUpdate=!0,y.renderBufferDirect(Y,z,Z,G,A,pe),G.side=On):y.renderBufferDirect(Y,z,Z,G,A,pe),A.onAfterRender(y,z,Y,Z,G,pe)}function Eo(A,z,Y){z.isScene!==!0&&(z=Le);const Z=J.get(A),G=p.state.lights,pe=p.state.shadowsArray,Me=G.state.version,Ee=K.getParameters(A,G.state,pe,z,Y),Te=K.getProgramCacheKey(Ee);let Fe=Z.programs;Z.environment=A.isMeshStandardMaterial?z.environment:null,Z.fog=z.fog,Z.envMap=(A.isMeshStandardMaterial?T:de).get(A.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&A.envMap===null?z.environmentRotation:A.envMapRotation,Fe===void 0&&(A.addEventListener("dispose",ue),Fe=new Map,Z.programs=Fe);let ze=Fe.get(Te);if(ze!==void 0){if(Z.currentProgram===ze&&Z.lightsStateVersion===Me)return Ou(A,Ee),ze}else Ee.uniforms=K.getUniforms(A),A.onBuild(Y,Ee,y),A.onBeforeCompile(Ee,y),ze=K.acquireProgram(Ee,Te),Fe.set(Te,ze),Z.uniforms=Ee.uniforms;const De=Z.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(De.clippingPlanes=ae.uniform),Ou(A,Ee),Z.needsLights=Tg(A),Z.lightsStateVersion=Me,Z.needsLights&&(De.ambientLightColor.value=G.state.ambient,De.lightProbe.value=G.state.probe,De.directionalLights.value=G.state.directional,De.directionalLightShadows.value=G.state.directionalShadow,De.spotLights.value=G.state.spot,De.spotLightShadows.value=G.state.spotShadow,De.rectAreaLights.value=G.state.rectArea,De.ltc_1.value=G.state.rectAreaLTC1,De.ltc_2.value=G.state.rectAreaLTC2,De.pointLights.value=G.state.point,De.pointLightShadows.value=G.state.pointShadow,De.hemisphereLights.value=G.state.hemi,De.directionalShadowMap.value=G.state.directionalShadowMap,De.directionalShadowMatrix.value=G.state.directionalShadowMatrix,De.spotShadowMap.value=G.state.spotShadowMap,De.spotLightMatrix.value=G.state.spotLightMatrix,De.spotLightMap.value=G.state.spotLightMap,De.pointShadowMap.value=G.state.pointShadowMap,De.pointShadowMatrix.value=G.state.pointShadowMatrix),Z.currentProgram=ze,Z.uniformsList=null,ze}function Uu(A){if(A.uniformsList===null){const z=A.currentProgram.getUniforms();A.uniformsList=_a.seqWithValue(z.seq,A.uniforms)}return A.uniformsList}function Ou(A,z){const Y=J.get(A);Y.outputColorSpace=z.outputColorSpace,Y.batching=z.batching,Y.batchingColor=z.batchingColor,Y.instancing=z.instancing,Y.instancingColor=z.instancingColor,Y.instancingMorph=z.instancingMorph,Y.skinning=z.skinning,Y.morphTargets=z.morphTargets,Y.morphNormals=z.morphNormals,Y.morphColors=z.morphColors,Y.morphTargetsCount=z.morphTargetsCount,Y.numClippingPlanes=z.numClippingPlanes,Y.numIntersection=z.numClipIntersection,Y.vertexAlphas=z.vertexAlphas,Y.vertexTangents=z.vertexTangents,Y.toneMapping=z.toneMapping}function bg(A,z,Y,Z,G){z.isScene!==!0&&(z=Le),ie.resetTextureUnits();const pe=z.fog,Me=Z.isMeshStandardMaterial?z.environment:null,Ee=w===null?y.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Ft,Te=(Z.isMeshStandardMaterial?T:de).get(Z.envMap||Me),Fe=Z.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,ze=!!Y.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),De=!!Y.morphAttributes.position,rt=!!Y.morphAttributes.normal,gt=!!Y.morphAttributes.color;let _t=Hi;Z.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(_t=y.toneMapping);const cn=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ot=cn!==void 0?cn.length:0,Ce=J.get(Z),Wt=p.state.lights;if(se===!0&&(he===!0||A!==b)){const mn=A===b&&Z.id===P;ae.setState(Z,A,mn)}let ct=!1;Z.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==Wt.state.version||Ce.outputColorSpace!==Ee||G.isBatchedMesh&&Ce.batching===!1||!G.isBatchedMesh&&Ce.batching===!0||G.isBatchedMesh&&Ce.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Ce.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Ce.instancing===!1||!G.isInstancedMesh&&Ce.instancing===!0||G.isSkinnedMesh&&Ce.skinning===!1||!G.isSkinnedMesh&&Ce.skinning===!0||G.isInstancedMesh&&Ce.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Ce.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Ce.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Ce.instancingMorph===!1&&G.morphTexture!==null||Ce.envMap!==Te||Z.fog===!0&&Ce.fog!==pe||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==ae.numPlanes||Ce.numIntersection!==ae.numIntersection)||Ce.vertexAlphas!==Fe||Ce.vertexTangents!==ze||Ce.morphTargets!==De||Ce.morphNormals!==rt||Ce.morphColors!==gt||Ce.toneMapping!==_t||Ce.morphTargetsCount!==ot)&&(ct=!0):(ct=!0,Ce.__version=Z.version);let $n=Ce.currentProgram;ct===!0&&($n=Eo(Z,z,G));let To=!1,Ji=!1,ol=!1;const Pt=$n.getUniforms(),pi=Ce.uniforms;if(H.useProgram($n.program)&&(To=!0,Ji=!0,ol=!0),Z.id!==P&&(P=Z.id,Ji=!0),To||b!==A){Pt.setValue(B,"projectionMatrix",A.projectionMatrix),Pt.setValue(B,"viewMatrix",A.matrixWorldInverse);const mn=Pt.map.cameraPosition;mn!==void 0&&mn.setValue(B,fe.setFromMatrixPosition(A.matrixWorld)),O.logarithmicDepthBuffer&&Pt.setValue(B,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&Pt.setValue(B,"isOrthographic",A.isOrthographicCamera===!0),b!==A&&(b=A,Ji=!0,ol=!0)}if(G.isSkinnedMesh){Pt.setOptional(B,G,"bindMatrix"),Pt.setOptional(B,G,"bindMatrixInverse");const mn=G.skeleton;mn&&(mn.boneTexture===null&&mn.computeBoneTexture(),Pt.setValue(B,"boneTexture",mn.boneTexture,ie))}G.isBatchedMesh&&(Pt.setOptional(B,G,"batchingTexture"),Pt.setValue(B,"batchingTexture",G._matricesTexture,ie),Pt.setOptional(B,G,"batchingColorTexture"),G._colorsTexture!==null&&Pt.setValue(B,"batchingColorTexture",G._colorsTexture,ie));const al=Y.morphAttributes;if((al.position!==void 0||al.normal!==void 0||al.color!==void 0)&&ye.update(G,Y,$n),(Ji||Ce.receiveShadow!==G.receiveShadow)&&(Ce.receiveShadow=G.receiveShadow,Pt.setValue(B,"receiveShadow",G.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(pi.envMap.value=Te,pi.flipEnvMap.value=Te.isCubeTexture&&Te.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&z.environment!==null&&(pi.envMapIntensity.value=z.environmentIntensity),Ji&&(Pt.setValue(B,"toneMappingExposure",y.toneMappingExposure),Ce.needsLights&&Eg(pi,ol),pe&&Z.fog===!0&&$.refreshFogUniforms(pi,pe),$.refreshMaterialUniforms(pi,Z,ne,W,p.state.transmissionRenderTarget[A.id]),_a.upload(B,Uu(Ce),pi,ie)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(_a.upload(B,Uu(Ce),pi,ie),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&Pt.setValue(B,"center",G.center),Pt.setValue(B,"modelViewMatrix",G.modelViewMatrix),Pt.setValue(B,"normalMatrix",G.normalMatrix),Pt.setValue(B,"modelMatrix",G.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const mn=Z.uniformsGroups;for(let ll=0,Ag=mn.length;ll<Ag;ll++){const Fu=mn[ll];we.update(Fu,$n),we.bind(Fu,$n)}}return $n}function Eg(A,z){A.ambientLightColor.needsUpdate=z,A.lightProbe.needsUpdate=z,A.directionalLights.needsUpdate=z,A.directionalLightShadows.needsUpdate=z,A.pointLights.needsUpdate=z,A.pointLightShadows.needsUpdate=z,A.spotLights.needsUpdate=z,A.spotLightShadows.needsUpdate=z,A.rectAreaLights.needsUpdate=z,A.hemisphereLights.needsUpdate=z}function Tg(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(A,z,Y){J.get(A.texture).__webglTexture=z,J.get(A.depthTexture).__webglTexture=Y;const Z=J.get(A);Z.__hasExternalTextures=!0,Z.__autoAllocateDepthBuffer=Y===void 0,Z.__autoAllocateDepthBuffer||C.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,z){const Y=J.get(A);Y.__webglFramebuffer=z,Y.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(A,z=0,Y=0){w=A,L=z,R=Y;let Z=!0,G=null,pe=!1,Me=!1;if(A){const Te=J.get(A);Te.__useDefaultFramebuffer!==void 0?(H.bindFramebuffer(B.FRAMEBUFFER,null),Z=!1):Te.__webglFramebuffer===void 0?ie.setupRenderTarget(A):Te.__hasExternalTextures&&ie.rebindTextures(A,J.get(A.texture).__webglTexture,J.get(A.depthTexture).__webglTexture);const Fe=A.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(Me=!0);const ze=J.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(ze[z])?G=ze[z][Y]:G=ze[z],pe=!0):A.samples>0&&ie.useMultisampledRTT(A)===!1?G=J.get(A).__webglMultisampledFramebuffer:Array.isArray(ze)?G=ze[Y]:G=ze,M.copy(A.viewport),I.copy(A.scissor),N=A.scissorTest}else M.copy(xe).multiplyScalar(ne).floor(),I.copy(ve).multiplyScalar(ne).floor(),N=Ne;if(H.bindFramebuffer(B.FRAMEBUFFER,G)&&Z&&H.drawBuffers(A,G),H.viewport(M),H.scissor(I),H.setScissorTest(N),pe){const Te=J.get(A.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+z,Te.__webglTexture,Y)}else if(Me){const Te=J.get(A.texture),Fe=z||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Te.__webglTexture,Y||0,Fe)}P=-1},this.readRenderTargetPixels=function(A,z,Y,Z,G,pe,Me){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=J.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Me!==void 0&&(Ee=Ee[Me]),Ee){H.bindFramebuffer(B.FRAMEBUFFER,Ee);try{const Te=A.texture,Fe=Te.format,ze=Te.type;if(!O.textureFormatReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!O.textureTypeReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=A.width-Z&&Y>=0&&Y<=A.height-G&&B.readPixels(z,Y,Z,G,ge.convert(Fe),ge.convert(ze),pe)}finally{const Te=w!==null?J.get(w).__webglFramebuffer:null;H.bindFramebuffer(B.FRAMEBUFFER,Te)}}},this.readRenderTargetPixelsAsync=async function(A,z,Y,Z,G,pe,Me){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=J.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Me!==void 0&&(Ee=Ee[Me]),Ee){H.bindFramebuffer(B.FRAMEBUFFER,Ee);try{const Te=A.texture,Fe=Te.format,ze=Te.type;if(!O.textureFormatReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!O.textureTypeReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(z>=0&&z<=A.width-Z&&Y>=0&&Y<=A.height-G){const De=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,De),B.bufferData(B.PIXEL_PACK_BUFFER,pe.byteLength,B.STREAM_READ),B.readPixels(z,Y,Z,G,ge.convert(Fe),ge.convert(ze),0),B.flush();const rt=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);await lM(B,rt,4);try{B.bindBuffer(B.PIXEL_PACK_BUFFER,De),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,pe)}finally{B.deleteBuffer(De),B.deleteSync(rt)}return pe}}finally{const Te=w!==null?J.get(w).__webglFramebuffer:null;H.bindFramebuffer(B.FRAMEBUFFER,Te)}}},this.copyFramebufferToTexture=function(A,z=null,Y=0){A.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),z=arguments[0]||null,A=arguments[1]);const Z=Math.pow(2,-Y),G=Math.floor(A.image.width*Z),pe=Math.floor(A.image.height*Z),Me=z!==null?z.x:0,Ee=z!==null?z.y:0;ie.setTexture2D(A,0),B.copyTexSubImage2D(B.TEXTURE_2D,Y,0,0,Me,Ee,G,pe),H.unbindTexture()},this.copyTextureToTexture=function(A,z,Y=null,Z=null,G=0){A.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),Z=arguments[0]||null,A=arguments[1],z=arguments[2],G=arguments[3]||0,Y=null);let pe,Me,Ee,Te,Fe,ze;Y!==null?(pe=Y.max.x-Y.min.x,Me=Y.max.y-Y.min.y,Ee=Y.min.x,Te=Y.min.y):(pe=A.image.width,Me=A.image.height,Ee=0,Te=0),Z!==null?(Fe=Z.x,ze=Z.y):(Fe=0,ze=0);const De=ge.convert(z.format),rt=ge.convert(z.type);ie.setTexture2D(z,0),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,z.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,z.unpackAlignment);const gt=B.getParameter(B.UNPACK_ROW_LENGTH),_t=B.getParameter(B.UNPACK_IMAGE_HEIGHT),cn=B.getParameter(B.UNPACK_SKIP_PIXELS),ot=B.getParameter(B.UNPACK_SKIP_ROWS),Ce=B.getParameter(B.UNPACK_SKIP_IMAGES),Wt=A.isCompressedTexture?A.mipmaps[G]:A.image;B.pixelStorei(B.UNPACK_ROW_LENGTH,Wt.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Wt.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Ee),B.pixelStorei(B.UNPACK_SKIP_ROWS,Te),A.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,G,Fe,ze,pe,Me,De,rt,Wt.data):A.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,G,Fe,ze,Wt.width,Wt.height,De,Wt.data):B.texSubImage2D(B.TEXTURE_2D,G,Fe,ze,De,rt,Wt),B.pixelStorei(B.UNPACK_ROW_LENGTH,gt),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,_t),B.pixelStorei(B.UNPACK_SKIP_PIXELS,cn),B.pixelStorei(B.UNPACK_SKIP_ROWS,ot),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Ce),G===0&&z.generateMipmaps&&B.generateMipmap(B.TEXTURE_2D),H.unbindTexture()},this.copyTextureToTexture3D=function(A,z,Y=null,Z=null,G=0){A.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Y=arguments[0]||null,Z=arguments[1]||null,A=arguments[2],z=arguments[3],G=arguments[4]||0);let pe,Me,Ee,Te,Fe,ze,De,rt,gt;const _t=A.isCompressedTexture?A.mipmaps[G]:A.image;Y!==null?(pe=Y.max.x-Y.min.x,Me=Y.max.y-Y.min.y,Ee=Y.max.z-Y.min.z,Te=Y.min.x,Fe=Y.min.y,ze=Y.min.z):(pe=_t.width,Me=_t.height,Ee=_t.depth,Te=0,Fe=0,ze=0),Z!==null?(De=Z.x,rt=Z.y,gt=Z.z):(De=0,rt=0,gt=0);const cn=ge.convert(z.format),ot=ge.convert(z.type);let Ce;if(z.isData3DTexture)ie.setTexture3D(z,0),Ce=B.TEXTURE_3D;else if(z.isDataArrayTexture||z.isCompressedArrayTexture)ie.setTexture2DArray(z,0),Ce=B.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,z.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,z.unpackAlignment);const Wt=B.getParameter(B.UNPACK_ROW_LENGTH),ct=B.getParameter(B.UNPACK_IMAGE_HEIGHT),$n=B.getParameter(B.UNPACK_SKIP_PIXELS),To=B.getParameter(B.UNPACK_SKIP_ROWS),Ji=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,_t.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,_t.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Te),B.pixelStorei(B.UNPACK_SKIP_ROWS,Fe),B.pixelStorei(B.UNPACK_SKIP_IMAGES,ze),A.isDataTexture||A.isData3DTexture?B.texSubImage3D(Ce,G,De,rt,gt,pe,Me,Ee,cn,ot,_t.data):z.isCompressedArrayTexture?B.compressedTexSubImage3D(Ce,G,De,rt,gt,pe,Me,Ee,cn,_t.data):B.texSubImage3D(Ce,G,De,rt,gt,pe,Me,Ee,cn,ot,_t),B.pixelStorei(B.UNPACK_ROW_LENGTH,Wt),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ct),B.pixelStorei(B.UNPACK_SKIP_PIXELS,$n),B.pixelStorei(B.UNPACK_SKIP_ROWS,To),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Ji),G===0&&z.generateMipmaps&&B.generateMipmap(Ce),H.unbindTexture()},this.initRenderTarget=function(A){J.get(A).__webglFramebuffer===void 0&&ie.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?ie.setTextureCube(A,0):A.isData3DTexture?ie.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?ie.setTexture2DArray(A,0):ie.setTexture2D(A,0),H.unbindTexture()},this.resetState=function(){L=0,R=0,w=null,H.reset(),Ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===yu?"display-p3":"srgb",t.unpackColorSpace=st.workingColorSpace===nl?"display-p3":"srgb"}}class gw extends pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gn,this.environmentIntensity=1,this.environmentRotation=new Gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class _w{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Gc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Ln()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Mu("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ln()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ln()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Xt=new k;class wu{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix4(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.applyNormalMatrix(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.transformDirection(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=wn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=at(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=wn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=wn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=wn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=wn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),i=at(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),i=at(i,this.array),s=at(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),i=at(i,this.array),s=at(s,this.array),r=at(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Jt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new wu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const bh=new k,Eh=new ut,Th=new ut,vw=new k,Ah=new je,ia=new k,rc=new Wn,wh=new je,oc=new Sr;class xw extends nn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=nf,this.bindMatrix=new je,this.bindMatrixInverse=new je,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new fi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,ia),this.boundingBox.expandByPoint(ia)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Wn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,ia),this.boundingSphere.expandByPoint(ia)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),rc.copy(this.boundingSphere),rc.applyMatrix4(s),e.ray.intersectsSphere(rc)!==!1&&(wh.copy(s).invert(),oc.copy(e.ray).applyMatrix4(wh),!(this.boundingBox!==null&&oc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,oc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ut,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===nf?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===bS?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,s=this.geometry;Eh.fromBufferAttribute(s.attributes.skinIndex,e),Th.fromBufferAttribute(s.attributes.skinWeight,e),bh.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=Th.getComponent(r);if(o!==0){const a=Eh.getComponent(r);Ah.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(vw.copy(bh).applyMatrix4(Ah),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class dg extends pt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class fg extends Nt{constructor(e=null,t=1,i=1,s,r,o,a,l,c=Zt,u=Zt,f,d){super(null,o,a,l,c,u,s,r,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Rh=new je,yw=new je;class Ru{constructor(e=[],t=[]){this.uuid=Ln(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new je)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new je;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:yw;Rh.multiplyMatrices(a,t[r]),Rh.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Ru(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new fg(t,e,e,Cn,Bn);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){const r=e.bones[i];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new dg),this.bones.push(o),this.boneInverses.push(new je().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const a=i[s];e.boneInverses.push(a.toArray())}return e}}class Xc extends Jt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const $s=new je,Ch=new je,sa=[],Ph=new fi,Sw=new je,Ir=new nn,Dr=new Wn;class Mw extends nn{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Xc(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Sw)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new fi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,$s),Ph.copy(e.boundingBox).applyMatrix4($s),this.boundingBox.union(Ph)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Wn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,$s),Dr.copy(e.boundingSphere).applyMatrix4($s),this.boundingSphere.union(Dr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(Ir.geometry=this.geometry,Ir.material=this.material,Ir.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Dr.copy(this.boundingSphere),Dr.applyMatrix4(i),e.ray.intersectsSphere(Dr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,$s),Ch.multiplyMatrices(i,$s),Ir.matrixWorld=Ch,Ir.raycast(e,sa);for(let o=0,a=sa.length;o<a;o++){const l=sa[o];l.instanceId=r,l.object=this,t.push(l)}sa.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Xc(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new fg(new Float32Array(s*this.count),s,this.count,Hm,Bn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class hg extends kn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new We(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ua=new k,Oa=new k,Lh=new je,Nr=new Sr,ra=new Wn,ac=new k,Ih=new k;class Cu extends pt{constructor(e=new Xn,t=new hg){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Ua.fromBufferAttribute(t,s-1),Oa.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Ua.distanceTo(Oa);e.setAttribute("lineDistance",new oi(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ra.copy(i.boundingSphere),ra.applyMatrix4(s),ra.radius+=r,e.ray.intersectsSphere(ra)===!1)return;Lh.copy(s).invert(),Nr.copy(e.ray).applyMatrix4(Lh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const h=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=h,p=g-1;_<p;_+=c){const m=u.getX(_),S=u.getX(_+1),y=oa(this,e,Nr,l,m,S);y&&t.push(y)}if(this.isLineLoop){const _=u.getX(g-1),p=u.getX(h),m=oa(this,e,Nr,l,_,p);m&&t.push(m)}}else{const h=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=h,p=g-1;_<p;_+=c){const m=oa(this,e,Nr,l,_,_+1);m&&t.push(m)}if(this.isLineLoop){const _=oa(this,e,Nr,l,g-1,h);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function oa(n,e,t,i,s,r){const o=n.geometry.attributes.position;if(Ua.fromBufferAttribute(o,s),Oa.fromBufferAttribute(o,r),t.distanceSqToSegment(Ua,Oa,ac,Ih)>i)return;ac.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(ac);if(!(l<e.near||l>e.far))return{distance:l,point:Ih.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,object:n}}const Dh=new k,Nh=new k;class bw extends Cu{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Dh.fromBufferAttribute(t,s),Nh.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Dh.distanceTo(Nh);e.setAttribute("lineDistance",new oi(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ew extends Cu{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class pg extends kn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new We(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Uh=new je,qc=new Sr,aa=new Wn,la=new k;class Tw extends pt{constructor(e=new Xn,t=new pg){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),aa.copy(i.boundingSphere),aa.applyMatrix4(s),aa.radius+=r,e.ray.intersectsSphere(aa)===!1)return;Uh.copy(s).invert(),qc.copy(e.ray).applyMatrix4(Uh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const d=Math.max(0,o.start),h=Math.min(c.count,o.start+o.count);for(let g=d,_=h;g<_;g++){const p=c.getX(g);la.fromBufferAttribute(f,p),Oh(la,p,l,s,e,t,this)}}else{const d=Math.max(0,o.start),h=Math.min(f.count,o.start+o.count);for(let g=d,_=h;g<_;g++)la.fromBufferAttribute(f,g),Oh(la,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Oh(n,e,t,i,s,r,o){const a=qc.distanceSqToPoint(n);if(a<t){const l=new k;qc.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class Mo extends kn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new We(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qm,this.normalScale=new Ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class qn extends Mo{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ue(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ot(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new We(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new We(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new We(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function ca(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Aw(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function ww(n){function e(s,r){return n[s]-n[r]}const t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function Fh(n,e,t){const i=n.length,s=new n.constructor(i);for(let r=0,o=0;o!==i;++r){const a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=n[a+l]}return s}function mg(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let o=r[i];if(o!==void 0)if(Array.isArray(o))do o=r[i],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=n[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[i],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do o=r[i],o!==void 0&&(e.push(r.time),t.push(o)),r=n[s++];while(r!==void 0)}class bo{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){const a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Rw extends bo{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Pf,endingEnd:Pf}}intervalChanged_(e,t,i){const s=this.parameterPositions;let r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Lf:r=e,a=2*t-i;break;case If:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Lf:o=e,l=2*i-t;break;case If:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}const c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,h=this._weightNext,g=(i-t)/(s-t),_=g*g,p=_*g,m=-d*p+2*d*_-d*g,S=(1+d)*p+(-1.5-2*d)*_+(-.5+d)*g+1,y=(-1-h)*p+(1.5+h)*_+.5*g,E=h*p-h*_;for(let L=0;L!==a;++L)r[L]=m*o[u+L]+S*o[c+L]+y*o[l+L]+E*o[f+L];return r}}class Cw extends bo{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(s-t),f=1-u;for(let d=0;d!==a;++d)r[d]=o[c+d]*f+o[l+d]*u;return r}}class Pw extends bo{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class jn{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ca(t,this.TimeBufferType),this.values=ca(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:ca(e.times,Array),values:ca(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Pw(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Cw(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Rw(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case fo:t=this.InterpolantFactoryMethodDiscrete;break;case ho:t=this.InterpolantFactoryMethodLinear;break;case Dl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return fo;case this.InterpolantFactoryMethodLinear:return ho;case this.InterpolantFactoryMethodSmooth:return Dl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){const i=this.times,s=i.length;let r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&Aw(s))for(let a=0,l=s.length;a!==l;++a){const c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Dl,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{const f=a*i,d=f-i,h=f+i;for(let g=0;g!==i;++g){const _=t[f+g];if(_!==t[d+g]||_!==t[h+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const f=a*i,d=o*i;for(let h=0;h!==i;++h)t[d+h]=t[f+h]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}jn.prototype.TimeBufferType=Float32Array;jn.prototype.ValueBufferType=Float32Array;jn.prototype.DefaultInterpolation=ho;class br extends jn{constructor(e,t,i){super(e,t,i)}}br.prototype.ValueTypeName="bool";br.prototype.ValueBufferType=Array;br.prototype.DefaultInterpolation=fo;br.prototype.InterpolantFactoryMethodLinear=void 0;br.prototype.InterpolantFactoryMethodSmooth=void 0;class gg extends jn{}gg.prototype.ValueTypeName="color";class mr extends jn{}mr.prototype.ValueTypeName="number";class Lw extends bo{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t);let c=e*a;for(let u=c+a;c!==u;c+=4)Vn.slerpFlat(r,0,o,c-a,o,c,l);return r}}class gr extends jn{InterpolantFactoryMethodLinear(e){return new Lw(this.times,this.values,this.getValueSize(),e)}}gr.prototype.ValueTypeName="quaternion";gr.prototype.InterpolantFactoryMethodSmooth=void 0;class Er extends jn{constructor(e,t,i){super(e,t,i)}}Er.prototype.ValueTypeName="string";Er.prototype.ValueBufferType=Array;Er.prototype.DefaultInterpolation=fo;Er.prototype.InterpolantFactoryMethodLinear=void 0;Er.prototype.InterpolantFactoryMethodSmooth=void 0;class _r extends jn{}_r.prototype.ValueTypeName="vector";class Iw{constructor(e="",t=-1,i=[],s=DS){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=Ln(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,s=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(Nw(i[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=i.length;r!==o;++r)t.push(jn.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const u=ww(l);l=Fh(l,1,u),c=Fh(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new mr(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(r);if(u&&u.length>1){const f=u[1];let d=s[f];d||(s[f]=d=[]),d.push(c)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(f,d,h,g,_){if(h.length!==0){const p=[],m=[];mg(h,p,m,g),p.length!==0&&_.push(new f(d,p,m))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let f=0;f<c.length;f++){const d=c[f].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const h={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)h[d[g].morphTargets[_]]=-1;for(const _ in h){const p=[],m=[];for(let S=0;S!==d[g].morphTargets.length;++S){const y=d[g];p.push(y.time),m.push(y.morphTarget===_?1:0)}s.push(new mr(".morphTargetInfluence["+_+"]",p,m))}l=h.length*o}else{const h=".bones["+t[f].name+"]";i(_r,h+".position",d,"pos",s),i(gr,h+".quaternion",d,"rot",s),i(_r,h+".scale",d,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,s=e.length;i!==s;++i){const r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Dw(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return mr;case"vector":case"vector2":case"vector3":case"vector4":return _r;case"color":return gg;case"quaternion":return gr;case"bool":case"boolean":return br;case"string":return Er}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function Nw(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Dw(n.type);if(n.times===void 0){const t=[],i=[];mg(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const Fi={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class Uw{constructor(e,t,i){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,d=c.length;f<d;f+=2){const h=c[f],g=c[f+1];if(h.global&&(h.lastIndex=0),h.test(u))return g}return null}}}const Ow=new Uw;class Tr{constructor(e){this.manager=e!==void 0?e:Ow,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Tr.DEFAULT_MATERIAL_NAME="__DEFAULT";const ei={};class Fw extends Error{constructor(e,t){super(e),this.response=t}}class _g extends Tr{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Fi.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(ei[e]!==void 0){ei[e].push({onLoad:t,onProgress:i,onError:s});return}ei[e]=[],ei[e].push({onLoad:t,onProgress:i,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=ei[e],f=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),h=d?parseInt(d):0,g=h!==0;let _=0;const p=new ReadableStream({start(m){S();function S(){f.read().then(({done:y,value:E})=>{if(y)m.close();else{_+=E.byteLength;const L=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:h});for(let R=0,w=u.length;R<w;R++){const P=u[R];P.onProgress&&P.onProgress(L)}m.enqueue(E),S()}},y=>{m.error(y)})}}});return new Response(p)}else throw new Fw(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),d=f&&f[1]?f[1].toLowerCase():void 0,h=new TextDecoder(d);return c.arrayBuffer().then(g=>h.decode(g))}}}).then(c=>{Fi.add(e,c);const u=ei[e];delete ei[e];for(let f=0,d=u.length;f<d;f++){const h=u[f];h.onLoad&&h.onLoad(c)}}).catch(c=>{const u=ei[e];if(u===void 0)throw this.manager.itemError(e),c;delete ei[e];for(let f=0,d=u.length;f<d;f++){const h=u[f];h.onError&&h.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Bw extends Tr{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Fi.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=po("img");function l(){u(),Fi.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(f){u(),s&&s(f),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class vg extends Tr{constructor(e){super(e)}load(e,t,i,s){const r=new Nt,o=new Bw(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}}class rl extends pt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new We(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const lc=new je,Bh=new k,kh=new k;class Pu{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ue(512,512),this.map=null,this.mapPass=null,this.matrix=new je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Eu,this._frameExtents=new Ue(1,1),this._viewportCount=1,this._viewports=[new ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Bh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Bh),kh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(kh),t.updateMatrixWorld(),lc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(lc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(lc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class kw extends Pu{constructor(){super(new Kt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=hr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class zw extends rl{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.target=new pt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new kw}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const zh=new je,Ur=new k,cc=new k;class Hw extends Pu{constructor(){super(new Kt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ue(4,2),this._viewportCount=6,this._viewports=[new ut(2,1,1,1),new ut(0,1,1,1),new ut(3,1,1,1),new ut(1,1,1,1),new ut(3,0,1,1),new ut(1,0,1,1)],this._cubeDirections=[new k(1,0,0),new k(-1,0,0),new k(0,0,1),new k(0,0,-1),new k(0,1,0),new k(0,-1,0)],this._cubeUps=[new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,0,1),new k(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Ur.setFromMatrixPosition(e.matrixWorld),i.position.copy(Ur),cc.copy(i.position),cc.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(cc),i.updateMatrixWorld(),s.makeTranslation(-Ur.x,-Ur.y,-Ur.z),zh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zh)}}class Vw extends rl{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Hw}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Gw extends Pu{constructor(){super(new Tu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class xg extends rl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.target=new pt,this.shadow=new Gw}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ww extends rl{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class io{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,s=e.length;i<s;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Xw extends Tr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Fi.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Fi.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),Fi.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Fi.add(e,l),r.manager.itemStart(e)}}const Lu="\\[\\]\\.:\\/",qw=new RegExp("["+Lu+"]","g"),Iu="[^"+Lu+"]",jw="[^"+Lu.replace("\\.","")+"]",$w=/((?:WC+[\/:])*)/.source.replace("WC",Iu),Kw=/(WCOD+)?/.source.replace("WCOD",jw),Yw=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Iu),Zw=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Iu),Jw=new RegExp("^"+$w+Kw+Yw+Zw+"$"),Qw=["material","materials","bones","map"];class eR{constructor(e,t,i){const s=i||lt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class lt{constructor(e,t,i){this.path=t,this.parsedPath=i||lt.parseTrackName(t),this.node=lt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new lt.Composite(e,t,i):new lt(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(qw,"")}static parseTrackName(e){const t=Jw.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=i.nodeName.substring(s+1);Qw.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=lt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[s];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}lt.Composite=eR;lt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};lt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};lt.prototype.GetterByBindingType=[lt.prototype._getValue_direct,lt.prototype._getValue_array,lt.prototype._getValue_arrayElement,lt.prototype._getValue_toArray];lt.prototype.SetterByBindingTypeAndVersioning=[[lt.prototype._setValue_direct,lt.prototype._setValue_direct_setNeedsUpdate,lt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_array,lt.prototype._setValue_array_setNeedsUpdate,lt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_arrayElement,lt.prototype._setValue_arrayElement_setNeedsUpdate,lt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_fromArray,lt.prototype._setValue_fromArray_setNeedsUpdate,lt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Hh=new je;class tR{constructor(e,t,i=0,s=1/0){this.ray=new Sr(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new bu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Hh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Hh),this}intersectObject(e,t=!0,i=[]){return jc(e,this,i,t),i.sort(Vh),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)jc(e[s],this,i,t);return i.sort(Vh),i}}function Vh(n,e){return n.distance-e.distance}function jc(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)jc(r[o],e,t,!0)}}class Gh{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Ot(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xu);const Wh={type:"change"},uc={type:"start"},Xh={type:"end"},ua=new Sr,qh=new Pi,nR=Math.cos(70*$m.DEG2RAD);class iR extends di{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new k,this.cursor=new k,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Cs.ROTATE,MIDDLE:Cs.DOLLY,RIGHT:Cs.PAN},this.touches={ONE:Ps.ROTATE,TWO:Ps.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(x){x.addEventListener("keydown",ae),this._domElementKeyEvents=x},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",ae),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Wh),i.update(),r=s.NONE},this.update=function(){const x=new k,ee=new Vn().setFromUnitVectors(e.up,new k(0,1,0)),X=ee.clone().invert(),te=new k,ue=new Vn,Re=new k,Ge=2*Math.PI;return function(St=null){const it=i.object.position;x.copy(it).sub(i.target),x.applyQuaternion(ee),a.setFromVector3(x),i.autoRotate&&r===s.NONE&&N(M(St)),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Mt=i.minAzimuthAngle,bt=i.maxAzimuthAngle;isFinite(Mt)&&isFinite(bt)&&(Mt<-Math.PI?Mt+=Ge:Mt>Math.PI&&(Mt-=Ge),bt<-Math.PI?bt+=Ge:bt>Math.PI&&(bt-=Ge),Mt<=bt?a.theta=Math.max(Mt,Math.min(bt,a.theta)):a.theta=a.theta>(Mt+bt)/2?Math.max(Mt,a.theta):Math.min(bt,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor);let an=!1;if(i.zoomToCursor&&R||i.object.isOrthographicCamera)a.radius=xe(a.radius);else{const ln=a.radius;a.radius=xe(a.radius*c),an=ln!=a.radius}if(x.setFromSpherical(a),x.applyQuaternion(X),it.copy(i.target).add(x),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),i.zoomToCursor&&R){let ln=null;if(i.object.isPerspectiveCamera){const hi=x.length();ln=xe(hi*c);const Yi=hi-ln;i.object.position.addScaledVector(E,Yi),i.object.updateMatrixWorld(),an=!!Yi}else if(i.object.isOrthographicCamera){const hi=new k(L.x,L.y,0);hi.unproject(i.object);const Yi=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),an=Yi!==i.object.zoom;const Zi=new k(L.x,L.y,0);Zi.unproject(i.object),i.object.position.sub(Zi).add(hi),i.object.updateMatrixWorld(),ln=x.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;ln!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(ln).add(i.object.position):(ua.origin.copy(i.object.position),ua.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(ua.direction))<nR?e.lookAt(i.target):(qh.setFromNormalAndCoplanarPoint(i.object.up,i.target),ua.intersectPlane(qh,i.target))))}else if(i.object.isOrthographicCamera){const ln=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),ln!==i.object.zoom&&(i.object.updateProjectionMatrix(),an=!0)}return c=1,R=!1,an||te.distanceToSquared(i.object.position)>o||8*(1-ue.dot(i.object.quaternion))>o||Re.distanceToSquared(i.target)>o?(i.dispatchEvent(Wh),te.copy(i.object.position),ue.copy(i.object.quaternion),Re.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",ye),i.domElement.removeEventListener("pointerdown",de),i.domElement.removeEventListener("pointercancel",v),i.domElement.removeEventListener("wheel",K),i.domElement.removeEventListener("pointermove",T),i.domElement.removeEventListener("pointerup",v),i.domElement.getRootNode().removeEventListener("keydown",ce,{capture:!0}),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",ae),i._domElementKeyEvents=null)};const i=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=s.NONE;const o=1e-6,a=new Gh,l=new Gh;let c=1;const u=new k,f=new Ue,d=new Ue,h=new Ue,g=new Ue,_=new Ue,p=new Ue,m=new Ue,S=new Ue,y=new Ue,E=new k,L=new Ue;let R=!1;const w=[],P={};let b=!1;function M(x){return x!==null?2*Math.PI/60*i.autoRotateSpeed*x:2*Math.PI/60/60*i.autoRotateSpeed}function I(x){const ee=Math.abs(x*.01);return Math.pow(.95,i.zoomSpeed*ee)}function N(x){l.theta-=x}function U(x){l.phi-=x}const F=function(){const x=new k;return function(X,te){x.setFromMatrixColumn(te,0),x.multiplyScalar(-X),u.add(x)}}(),q=function(){const x=new k;return function(X,te){i.screenSpacePanning===!0?x.setFromMatrixColumn(te,1):(x.setFromMatrixColumn(te,0),x.crossVectors(i.object.up,x)),x.multiplyScalar(X),u.add(x)}}(),W=function(){const x=new k;return function(X,te){const ue=i.domElement;if(i.object.isPerspectiveCamera){const Re=i.object.position;x.copy(Re).sub(i.target);let Ge=x.length();Ge*=Math.tan(i.object.fov/2*Math.PI/180),F(2*X*Ge/ue.clientHeight,i.object.matrix),q(2*te*Ge/ue.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(F(X*(i.object.right-i.object.left)/i.object.zoom/ue.clientWidth,i.object.matrix),q(te*(i.object.top-i.object.bottom)/i.object.zoom/ue.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function ne(x){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=x:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function j(x){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=x:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function me(x,ee){if(!i.zoomToCursor)return;R=!0;const X=i.domElement.getBoundingClientRect(),te=x-X.left,ue=ee-X.top,Re=X.width,Ge=X.height;L.x=te/Re*2-1,L.y=-(ue/Ge)*2+1,E.set(L.x,L.y,1).unproject(i.object).sub(i.object.position).normalize()}function xe(x){return Math.max(i.minDistance,Math.min(i.maxDistance,x))}function ve(x){f.set(x.clientX,x.clientY)}function Ne(x){me(x.clientX,x.clientX),m.set(x.clientX,x.clientY)}function Je(x){g.set(x.clientX,x.clientY)}function se(x){d.set(x.clientX,x.clientY),h.subVectors(d,f).multiplyScalar(i.rotateSpeed);const ee=i.domElement;N(2*Math.PI*h.x/ee.clientHeight),U(2*Math.PI*h.y/ee.clientHeight),f.copy(d),i.update()}function he(x){S.set(x.clientX,x.clientY),y.subVectors(S,m),y.y>0?ne(I(y.y)):y.y<0&&j(I(y.y)),m.copy(S),i.update()}function oe(x){_.set(x.clientX,x.clientY),p.subVectors(_,g).multiplyScalar(i.panSpeed),W(p.x,p.y),g.copy(_),i.update()}function fe(x){me(x.clientX,x.clientY),x.deltaY<0?j(I(x.deltaY)):x.deltaY>0&&ne(I(x.deltaY)),i.update()}function Le(x){let ee=!1;switch(x.code){case i.keys.UP:x.ctrlKey||x.metaKey||x.shiftKey?U(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):W(0,i.keyPanSpeed),ee=!0;break;case i.keys.BOTTOM:x.ctrlKey||x.metaKey||x.shiftKey?U(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):W(0,-i.keyPanSpeed),ee=!0;break;case i.keys.LEFT:x.ctrlKey||x.metaKey||x.shiftKey?N(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):W(i.keyPanSpeed,0),ee=!0;break;case i.keys.RIGHT:x.ctrlKey||x.metaKey||x.shiftKey?N(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):W(-i.keyPanSpeed,0),ee=!0;break}ee&&(x.preventDefault(),i.update())}function Oe(x){if(w.length===1)f.set(x.pageX,x.pageY);else{const ee=we(x),X=.5*(x.pageX+ee.x),te=.5*(x.pageY+ee.y);f.set(X,te)}}function ke(x){if(w.length===1)g.set(x.pageX,x.pageY);else{const ee=we(x),X=.5*(x.pageX+ee.x),te=.5*(x.pageY+ee.y);g.set(X,te)}}function B(x){const ee=we(x),X=x.pageX-ee.x,te=x.pageY-ee.y,ue=Math.sqrt(X*X+te*te);m.set(0,ue)}function Ye(x){i.enableZoom&&B(x),i.enablePan&&ke(x)}function C(x){i.enableZoom&&B(x),i.enableRotate&&Oe(x)}function O(x){if(w.length==1)d.set(x.pageX,x.pageY);else{const X=we(x),te=.5*(x.pageX+X.x),ue=.5*(x.pageY+X.y);d.set(te,ue)}h.subVectors(d,f).multiplyScalar(i.rotateSpeed);const ee=i.domElement;N(2*Math.PI*h.x/ee.clientHeight),U(2*Math.PI*h.y/ee.clientHeight),f.copy(d)}function H(x){if(w.length===1)_.set(x.pageX,x.pageY);else{const ee=we(x),X=.5*(x.pageX+ee.x),te=.5*(x.pageY+ee.y);_.set(X,te)}p.subVectors(_,g).multiplyScalar(i.panSpeed),W(p.x,p.y),g.copy(_)}function Q(x){const ee=we(x),X=x.pageX-ee.x,te=x.pageY-ee.y,ue=Math.sqrt(X*X+te*te);S.set(0,ue),y.set(0,Math.pow(S.y/m.y,i.zoomSpeed)),ne(y.y),m.copy(S);const Re=(x.pageX+ee.x)*.5,Ge=(x.pageY+ee.y)*.5;me(Re,Ge)}function J(x){i.enableZoom&&Q(x),i.enablePan&&H(x)}function ie(x){i.enableZoom&&Q(x),i.enableRotate&&O(x)}function de(x){i.enabled!==!1&&(w.length===0&&(i.domElement.setPointerCapture(x.pointerId),i.domElement.addEventListener("pointermove",T),i.domElement.addEventListener("pointerup",v)),!ge(x)&&(He(x),x.pointerType==="touch"?be(x):D(x)))}function T(x){i.enabled!==!1&&(x.pointerType==="touch"?le(x):V(x))}function v(x){switch(Ie(x),w.length){case 0:i.domElement.releasePointerCapture(x.pointerId),i.domElement.removeEventListener("pointermove",T),i.domElement.removeEventListener("pointerup",v),i.dispatchEvent(Xh),r=s.NONE;break;case 1:const ee=w[0],X=P[ee];be({pointerId:ee,pageX:X.x,pageY:X.y});break}}function D(x){let ee;switch(x.button){case 0:ee=i.mouseButtons.LEFT;break;case 1:ee=i.mouseButtons.MIDDLE;break;case 2:ee=i.mouseButtons.RIGHT;break;default:ee=-1}switch(ee){case Cs.DOLLY:if(i.enableZoom===!1)return;Ne(x),r=s.DOLLY;break;case Cs.ROTATE:if(x.ctrlKey||x.metaKey||x.shiftKey){if(i.enablePan===!1)return;Je(x),r=s.PAN}else{if(i.enableRotate===!1)return;ve(x),r=s.ROTATE}break;case Cs.PAN:if(x.ctrlKey||x.metaKey||x.shiftKey){if(i.enableRotate===!1)return;ve(x),r=s.ROTATE}else{if(i.enablePan===!1)return;Je(x),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&i.dispatchEvent(uc)}function V(x){switch(r){case s.ROTATE:if(i.enableRotate===!1)return;se(x);break;case s.DOLLY:if(i.enableZoom===!1)return;he(x);break;case s.PAN:if(i.enablePan===!1)return;oe(x);break}}function K(x){i.enabled===!1||i.enableZoom===!1||r!==s.NONE||(x.preventDefault(),i.dispatchEvent(uc),fe($(x)),i.dispatchEvent(Xh))}function $(x){const ee=x.deltaMode,X={clientX:x.clientX,clientY:x.clientY,deltaY:x.deltaY};switch(ee){case 1:X.deltaY*=16;break;case 2:X.deltaY*=100;break}return x.ctrlKey&&!b&&(X.deltaY*=10),X}function ce(x){x.key==="Control"&&(b=!0,i.domElement.getRootNode().addEventListener("keyup",re,{passive:!0,capture:!0}))}function re(x){x.key==="Control"&&(b=!1,i.domElement.getRootNode().removeEventListener("keyup",re,{passive:!0,capture:!0}))}function ae(x){i.enabled===!1||i.enablePan===!1||Le(x)}function be(x){switch(Ve(x),w.length){case 1:switch(i.touches.ONE){case Ps.ROTATE:if(i.enableRotate===!1)return;Oe(x),r=s.TOUCH_ROTATE;break;case Ps.PAN:if(i.enablePan===!1)return;ke(x),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(i.touches.TWO){case Ps.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Ye(x),r=s.TOUCH_DOLLY_PAN;break;case Ps.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;C(x),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&i.dispatchEvent(uc)}function le(x){switch(Ve(x),r){case s.TOUCH_ROTATE:if(i.enableRotate===!1)return;O(x),i.update();break;case s.TOUCH_PAN:if(i.enablePan===!1)return;H(x),i.update();break;case s.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;J(x),i.update();break;case s.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;ie(x),i.update();break;default:r=s.NONE}}function ye(x){i.enabled!==!1&&x.preventDefault()}function He(x){w.push(x.pointerId)}function Ie(x){delete P[x.pointerId];for(let ee=0;ee<w.length;ee++)if(w[ee]==x.pointerId){w.splice(ee,1);return}}function ge(x){for(let ee=0;ee<w.length;ee++)if(w[ee]==x.pointerId)return!0;return!1}function Ve(x){let ee=P[x.pointerId];ee===void 0&&(ee=new Ue,P[x.pointerId]=ee),ee.set(x.pageX,x.pageY)}function we(x){const ee=x.pointerId===w[0]?w[1]:w[0];return P[ee]}i.domElement.addEventListener("contextmenu",ye),i.domElement.addEventListener("pointerdown",de),i.domElement.addEventListener("pointercancel",v),i.domElement.addEventListener("wheel",K,{passive:!1}),i.domElement.getRootNode().addEventListener("keydown",ce,{passive:!0,capture:!0}),this.update()}}function jh(n,e){if(e===NS)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===Vc||e===Xm){let t=n.getIndex();if(t===null){const o=[],a=n.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);n.setIndex(o),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const i=t.count-2,s=[];if(e===Vc)for(let o=1;o<=i;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=n.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}class sR extends Tr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new cR(t)}),this.register(function(t){return new uR(t)}),this.register(function(t){return new xR(t)}),this.register(function(t){return new yR(t)}),this.register(function(t){return new SR(t)}),this.register(function(t){return new fR(t)}),this.register(function(t){return new hR(t)}),this.register(function(t){return new pR(t)}),this.register(function(t){return new mR(t)}),this.register(function(t){return new lR(t)}),this.register(function(t){return new gR(t)}),this.register(function(t){return new dR(t)}),this.register(function(t){return new vR(t)}),this.register(function(t){return new _R(t)}),this.register(function(t){return new oR(t)}),this.register(function(t){return new MR(t)}),this.register(function(t){return new bR(t)})}load(e,t,i,s){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=io.extractUrlBase(e);o=io.resolveURL(c,this.path)}else o=io.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new _g(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===yg){try{o[Ze.KHR_BINARY_GLTF]=new ER(e)}catch(f){s&&s(f);return}r=JSON.parse(o[Ze.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new FR(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const f=this.pluginCallbacks[u](c);f.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[f.name]=f,o[f.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const f=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(f){case Ze.KHR_MATERIALS_UNLIT:o[f]=new aR;break;case Ze.KHR_DRACO_MESH_COMPRESSION:o[f]=new TR(r,this.dracoLoader);break;case Ze.KHR_TEXTURE_TRANSFORM:o[f]=new AR;break;case Ze.KHR_MESH_QUANTIZATION:o[f]=new wR;break;default:d.indexOf(f)>=0&&a[f]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+f+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(i,s)}parseAsync(e,t){const i=this;return new Promise(function(s,r){i.parse(e,t,s,r)})}}function rR(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}const Ze={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class oR{constructor(e){this.parser=e,this.name=Ze.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){const r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let s=t.cache.get(i);if(s)return s;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new We(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Ft);const f=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new xg(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Vw(u),c.distance=f;break;case"spot":c=new zw(u),c.distance=f,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,ni(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,r=i.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return i._getNodeRef(t.cache,a,l)})}}class aR{constructor(){this.name=Ze.KHR_MATERIALS_UNLIT}getMaterialType(){return gs}extendParams(e,t,i){const s=[];e.color=new We(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Ft),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",r.baseColorTexture,$t))}return Promise.all(s)}}class lR{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class cR{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:qn}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(i.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ue(a,a)}return Promise.all(r)}}class uR{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_DISPERSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:qn}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class dR{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:qn}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class fR{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:qn}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new We(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Ft)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(i.assignTexture(t,"sheenColorMap",o.sheenColorTexture,$t)),o.sheenRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class hR{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:qn}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(i.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class pR{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:qn}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(i.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new We().setRGB(a[0],a[1],a[2],Ft),Promise.all(r)}}class mR{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:qn}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class gR{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:qn}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(i.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new We().setRGB(a[0],a[1],a[2],Ft),o.specularColorTexture!==void 0&&r.push(i.assignTexture(t,"specularColorMap",o.specularColorTexture,$t)),Promise.all(r)}}class _R{constructor(e){this.parser=e,this.name=Ze.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:qn}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(i.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class vR{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:qn}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(i.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class xR{constructor(e){this.parser=e,this.name=Ze.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class yR{constructor(e){this.parser=e,this.name=Ze.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class SR{constructor(e){this.parser=e,this.name=Ze.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class MR{constructor(e){this.name=Ze.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const s=i.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=s.byteOffset||0,c=s.byteLength||0,u=s.count,f=s.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,f,d,s.mode,s.filter).then(function(h){return h.buffer}):o.ready.then(function(){const h=new ArrayBuffer(u*f);return o.decodeGltfBuffer(new Uint8Array(h),u,f,d,s.mode,s.filter),h})})}else return null}}class bR{constructor(e){this.name=Ze.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const s=t.meshes[i.mesh];for(const c of s.primitives)if(c.mode!==yn.TRIANGLES&&c.mode!==yn.TRIANGLE_STRIP&&c.mode!==yn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=i.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),f=u.isGroup?u.children:[u],d=c[0].count,h=[];for(const g of f){const _=new je,p=new k,m=new Vn,S=new k(1,1,1),y=new Mw(g.geometry,g.material,d);for(let E=0;E<d;E++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,E),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,E),l.SCALE&&S.fromBufferAttribute(l.SCALE,E),y.setMatrixAt(E,_.compose(p,m,S));for(const E in l)if(E==="_COLOR_0"){const L=l[E];y.instanceColor=new Xc(L.array,L.itemSize,L.normalized)}else E!=="TRANSLATION"&&E!=="ROTATION"&&E!=="SCALE"&&g.geometry.setAttribute(E,l[E]);pt.prototype.copy.call(y,g),this.parser.assignFinalMaterial(y),h.push(y)}return u.isGroup?(u.clear(),u.add(...h),u):h[0]}))}}const yg="glTF",Or=12,$h={JSON:1313821514,BIN:5130562};class ER{constructor(e){this.name=Ze.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Or),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==yg)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-Or,r=new DataView(e,Or);let o=0;for(;o<s;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===$h.JSON){const c=new Uint8Array(e,Or+o,a);this.content=i.decode(c)}else if(l===$h.BIN){const c=Or+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class TR{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ze.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const f=$c[u]||u.toLowerCase();a[f]=o[u]}for(const u in e.attributes){const f=$c[u]||u.toLowerCase();if(o[u]!==void 0){const d=i.accessors[e.attributes[u]],h=ir[d.componentType];c[f]=h.name,l[f]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(f,d){s.decodeDracoFile(u,function(h){for(const g in h.attributes){const _=h.attributes[g],p=l[g];p!==void 0&&(_.normalized=p)}f(h)},a,c,Ft,d)})})}}class AR{constructor(){this.name=Ze.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class wR{constructor(){this.name=Ze.KHR_MESH_QUANTIZATION}}class Sg extends bo{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=i[r+o];return t}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=s-t,f=(i-t)/u,d=f*f,h=d*f,g=e*c,_=g-c,p=-2*h+3*d,m=h-d,S=1-p,y=m-d+f;for(let E=0;E!==a;E++){const L=o[_+E+a],R=o[_+E+l]*u,w=o[g+E+a],P=o[g+E]*u;r[E]=S*L+y*R+p*w+m*P}return r}}const RR=new Vn;class CR extends Sg{interpolate_(e,t,i,s){const r=super.interpolate_(e,t,i,s);return RR.fromArray(r).normalize().toArray(r),r}}const yn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},ir={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Kh={9728:Zt,9729:hn,9984:Fm,9985:ga,9986:Gr,9987:ii},Yh={33071:Ui,33648:Ca,10497:cr},dc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},$c={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ei={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},PR={CUBICSPLINE:void 0,LINEAR:ho,STEP:fo},fc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function LR(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new Mo({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:li})),n.DefaultMaterial}function us(n,e,t){for(const i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function ni(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function IR(n,e,t){let i=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const f=e[c];if(f.POSITION!==void 0&&(i=!0),f.NORMAL!==void 0&&(s=!0),f.COLOR_0!==void 0&&(r=!0),i&&s&&r)break}if(!i&&!s&&!r)return Promise.resolve(n);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const f=e[c];if(i){const d=f.POSITION!==void 0?t.getDependency("accessor",f.POSITION):n.attributes.position;o.push(d)}if(s){const d=f.NORMAL!==void 0?t.getDependency("accessor",f.NORMAL):n.attributes.normal;a.push(d)}if(r){const d=f.COLOR_0!==void 0?t.getDependency("accessor",f.COLOR_0):n.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],f=c[1],d=c[2];return i&&(n.morphAttributes.position=u),s&&(n.morphAttributes.normal=f),r&&(n.morphAttributes.color=d),n.morphTargetsRelative=!0,n})}function DR(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function NR(n){let e;const t=n.extensions&&n.extensions[Ze.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+hc(t.attributes):e=n.indices+":"+hc(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,s=n.targets.length;i<s;i++)e+=":"+hc(n.targets[i]);return e}function hc(n){let e="";const t=Object.keys(n).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+n[t[i]]+";";return e}function Kc(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function UR(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const OR=new je;class FR{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new rR,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=!1,r=-1;typeof navigator<"u"&&(i=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,s=navigator.userAgent.indexOf("Firefox")>-1,r=s?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||i||s&&r<98?this.textureLoader=new vg(this.options.manager):this.textureLoader=new Xw(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new _g(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:i,userData:{}};return us(r,a,s),ni(a,s),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const s=i.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())r(u,a.children[c])};return r(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const s=e(t[i]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&i.push(r)}return i}getDependency(e,t){const i=e+":"+t;let s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ze.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){i.load(io.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const s=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+s)})}loadAccessor(e){const t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const o=dc[s.type],a=ir[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new Jt(c,o,l))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=dc[s.type],c=ir[s.componentType],u=c.BYTES_PER_ELEMENT,f=u*l,d=s.byteOffset||0,h=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let _,p;if(h&&h!==f){const m=Math.floor(d/h),S="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+m+":"+s.count;let y=t.cache.get(S);y||(_=new c(a,m*h,s.count*h/u),y=new _w(_,h/u),t.cache.add(S,y)),p=new wu(y,l,d%h/u,g)}else a===null?_=new c(s.count*l):_=new c(a,d,s.count*l),p=new Jt(_,l,g);if(s.sparse!==void 0){const m=dc.SCALAR,S=ir[s.sparse.indices.componentType],y=s.sparse.indices.byteOffset||0,E=s.sparse.values.byteOffset||0,L=new S(o[1],y,s.sparse.count*m),R=new c(o[2],E,s.sparse.count*l);a!==null&&(p=new Jt(p.array.slice(),p.itemSize,p.normalized));for(let w=0,P=L.length;w<P;w++){const b=L[w];if(p.setX(b,R[w*l]),l>=2&&p.setY(b,R[w*l+1]),l>=3&&p.setZ(b,R[w*l+2]),l>=4&&p.setW(b,R[w*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return p})}loadTexture(e){const t=this.json,i=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=i.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,i){const s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,i).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return u.magFilter=Kh[d.magFilter]||hn,u.minFilter=Kh[d.minFilter]||ii,u.wrapS=Yh[d.wrapS]||cr,u.wrapT=Yh[d.wrapT]||cr,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const i=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());const o=s.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=i.getDependency("bufferView",o.bufferView).then(function(f){c=!0;const d=new Blob([f],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(f){return new Promise(function(d,h){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){const p=new Nt(_);p.needsUpdate=!0,d(p)}),t.load(io.resolveURL(f,r.path),g,void 0,h)})}).then(function(f){return c===!0&&a.revokeObjectURL(l),ni(f,o),f.userData.mimeType=o.mimeType||UR(o.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),f});return this.sourceCache[e]=u,u}assignTexture(e,t,i,s){const r=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),r.extensions[Ze.KHR_TEXTURE_TRANSFORM]){const a=i.extensions!==void 0?i.extensions[Ze.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[Ze.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new pg,kn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(a,l)),i=l}else if(e.isLine){const a="LineBasicMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new hg,kn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(a,l)),i=l}if(s||r||o){let a="ClonedMaterial:"+i.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=i.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return Mo}loadMaterial(e){const t=this,i=this.json,s=this.extensions,r=i.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[Ze.KHR_MATERIALS_UNLIT]){const f=s[Ze.KHR_MATERIALS_UNLIT];o=f.getMaterialType(),c.push(f.extendParams(a,r,t))}else{const f=r.pbrMetallicRoughness||{};if(a.color=new We(1,1,1),a.opacity=1,Array.isArray(f.baseColorFactor)){const d=f.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Ft),a.opacity=d[3]}f.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",f.baseColorTexture,$t)),a.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,a.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",f.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",f.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=On);const u=r.alphaMode||fc.OPAQUE;if(u===fc.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===fc.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==gs&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Ue(1,1),r.normalTexture.scale!==void 0)){const f=r.normalTexture.scale;a.normalScale.set(f,f)}if(r.occlusionTexture!==void 0&&o!==gs&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==gs){const f=r.emissiveFactor;a.emissive=new We().setRGB(f[0],f[1],f[2],Ft)}return r.emissiveTexture!==void 0&&o!==gs&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,$t)),Promise.all(c).then(function(){const f=new o(a);return r.name&&(f.name=r.name),ni(f,r),t.associations.set(f,{materials:e}),r.extensions&&us(s,f,r),f})}createUniqueName(e){const t=lt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,s=this.primitiveCache;function r(a){return i[Ze.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Zh(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=NR(c),f=s[u];if(f)o.push(f.promise);else{let d;c.extensions&&c.extensions[Ze.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=Zh(new Xn,c,t),s[u]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,i=this.json,s=this.extensions,r=i.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?LR(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],f=[];for(let h=0,g=u.length;h<g;h++){const _=u[h],p=o[h];let m;const S=c[h];if(p.mode===yn.TRIANGLES||p.mode===yn.TRIANGLE_STRIP||p.mode===yn.TRIANGLE_FAN||p.mode===void 0)m=r.isSkinnedMesh===!0?new xw(_,S):new nn(_,S),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),p.mode===yn.TRIANGLE_STRIP?m.geometry=jh(m.geometry,Xm):p.mode===yn.TRIANGLE_FAN&&(m.geometry=jh(m.geometry,Vc));else if(p.mode===yn.LINES)m=new bw(_,S);else if(p.mode===yn.LINE_STRIP)m=new Cu(_,S);else if(p.mode===yn.LINE_LOOP)m=new Ew(_,S);else if(p.mode===yn.POINTS)m=new Tw(_,S);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(m.geometry.morphAttributes).length>0&&DR(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),ni(m,r),p.extensions&&us(s,m,p),t.assignFinalMaterial(m),f.push(m)}for(let h=0,g=f.length;h<g;h++)t.associations.set(f[h],{meshes:e,primitives:h});if(f.length===1)return r.extensions&&us(s,f[0],r),f[0];const d=new Oi;r.extensions&&us(s,d,r),t.associations.set(d,{meshes:e});for(let h=0,g=f.length;h<g;h++)d.add(f[h]);return d})}loadCamera(e){let t;const i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Kt($m.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new Tu(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),ni(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let s=0,r=t.joints.length;s<r;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){const r=s.pop(),o=s,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const f=o[c];if(f){a.push(f);const d=new je;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Ru(a,l)})}loadAnimation(e){const t=this.json,i=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let f=0,d=s.channels.length;f<d;f++){const h=s.channels[f],g=s.samplers[h.sampler],_=h.target,p=_.node,m=s.parameters!==void 0?s.parameters[g.input]:g.input,S=s.parameters!==void 0?s.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",p)),a.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",S)),c.push(g),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(f){const d=f[0],h=f[1],g=f[2],_=f[3],p=f[4],m=[];for(let S=0,y=d.length;S<y;S++){const E=d[S],L=h[S],R=g[S],w=_[S],P=p[S];if(E===void 0)continue;E.updateMatrix&&E.updateMatrix();const b=i._createAnimationTracks(E,L,R,w,P);if(b)for(let M=0;M<b.length;M++)m.push(b[M])}return new Iw(r,void 0,m)})}createNodeMesh(e){const t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(r){const o=i._getNodeRef(i.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){const t=this.json,i=this,s=t.nodes[e],r=i._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,u=a.length;c<u;c++)o.push(i.getDependency("node",a[c]));const l=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const u=c[0],f=c[1],d=c[2];d!==null&&u.traverse(function(h){h.isSkinnedMesh&&h.bind(d,OR)});for(let h=0,g=f.length;h<g;h++)u.add(f[h]);return u})}_loadNodeShallow(e){const t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new dg:c.length>1?u=new Oi:c.length===1?u=c[0]:u=new pt,u!==c[0])for(let f=0,d=c.length;f<d;f++)u.add(c[f]);if(r.name&&(u.userData.name=r.name,u.name=o),ni(u,r),r.extensions&&us(i,u,r),r.matrix!==void 0){const f=new je;f.fromArray(r.matrix),u.applyMatrix4(f)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return s.associations.has(u)||s.associations.set(u,{}),s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],s=this,r=new Oi;i.name&&(r.name=s.createUniqueName(i.name)),ni(r,i),i.extensions&&us(t,r,i);const o=i.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,f=l.length;u<f;u++)r.add(l[u]);const c=u=>{const f=new Map;for(const[d,h]of s.associations)(d instanceof kn||d instanceof Nt)&&f.set(d,h);return u.traverse(d=>{const h=s.associations.get(d);h!=null&&f.set(d,h)}),f};return s.associations=c(r),r})}_createAnimationTracks(e,t,i,s,r){const o=[],a=e.name?e.name:e.uuid,l=[];Ei[r.path]===Ei.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(Ei[r.path]){case Ei.weights:c=mr;break;case Ei.rotation:c=gr;break;case Ei.position:case Ei.scale:c=_r;break;default:switch(i.itemSize){case 1:c=mr;break;case 2:case 3:default:c=_r;break}break}const u=s.interpolation!==void 0?PR[s.interpolation]:ho,f=this._getArrayFromAccessor(i);for(let d=0,h=l.length;d<h;d++){const g=new c(l[d]+"."+Ei[r.path],t.array,f,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=Kc(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const s=this instanceof gr?CR:Sg;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function BR(n,e,t){const i=e.attributes,s=new fi;if(i.POSITION!==void 0){const a=t.json.accessors[i.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new k(l[0],l[1],l[2]),new k(c[0],c[1],c[2])),a.normalized){const u=Kc(ir[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new k,l=new k;for(let c=0,u=r.length;c<u;c++){const f=r[c];if(f.POSITION!==void 0){const d=t.json.accessors[f.POSITION],h=d.min,g=d.max;if(h!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(h[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(h[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(h[2]),Math.abs(g[2]))),d.normalized){const _=Kc(ir[d.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}n.boundingBox=s;const o=new Wn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,n.boundingSphere=o}function Zh(n,e,t){const i=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){n.setAttribute(a,l)})}for(const o in i){const a=$c[o]||o.toLowerCase();a in n.attributes||s.push(r(i[o],a))}if(e.indices!==void 0&&!n.index){const o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});s.push(o)}return st.workingColorSpace!==Ft&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${st.workingColorSpace}" not supported.`),ni(n,e),BR(n,e,t),Promise.all(s).then(function(){return e.targets!==void 0?IR(n,e.targets,t):n})}class kR extends di{constructor(){super(),this.setWidth(),this.setHeight(),this.pixelRatio=Math.min(window.devicePixelRatio,2),window.addEventListener("resize",()=>{this.setWidth(),this.setHeight(),this.pixelRatio=Math.min(window.devicePixelRatio,2),this.dispatchEvent({type:"resize",message:"Screen Resized!"})})}setWidth(){this.width=window.innerWidth}setHeight(){this.height=window.innerHeight}}class zR extends di{constructor(){super(),this.start=Date.now(),this.current=this.start,this.elapsed=0,this.delta=16,this.playing=!0,window.requestAnimationFrame(()=>{this.tick()})}tick(){const e=Date.now();this.delta=e-this.current,this.current=e,this.elapsed=this.current-this.start,this.dispatchEvent({type:"tick",message:"Tick occured!"}),window.requestAnimationFrame(()=>{this.playing&&this.tick()})}pause(){this.playing=!1}play(){this.playing=!0,window.requestAnimationFrame(()=>{this.tick()})}}class Jh{constructor(){this.position=new k(0,0,0),this.fov=60,this.near=1,this.far=150,this.experience=new Ki,this.sizes=this.experience.sizes,this.scene=this.experience.scene,this.canvas=this.experience.canvas,this.setInstance(),this.instance.position.set(0,0,0),this.setOrbitControls()}setInstance(){this.instance=new Kt(this.fov,this.sizes.width/this.sizes.height,this.near,this.far),this.scene.add(this.instance)}setOrbitControls(){this.controls&&this.controls.dispose(),this.controls=new iR(this.instance,this.canvas),this.controls.enableDamping=!0,this.controls.minDistance=1,this.controls.maxDistance=5,this.controls.minPolarAngle=Math.PI*.4,this.controls.maxPolarAngle=Math.PI*.6,this.controls.minAzimuthAngle=Math.PI*-.2,this.controls.maxAzimuthAngle=Math.PI*.2}setProjectsView(){this.controls.dispose(),this.controls=null,this.instance.position.set(-6,0,-2),this.instance.lookAt(-6,0,-3),this.view="Projects"}setBaseView(){this.instance.position.set(0,0,0),this.instance.lookAt(0,1,0),this.setOrbitControls(),this.view=null}update(){this.controls&&this.controls.update()}resize(){this.instance.aspect=this.sizes.width/this.sizes.height,this.instance.updateProjectionMatrix()}}class Qh{constructor(){this.backgroundColor="#ebebeb",this.experience=new Ki,this.sizes=this.experience.sizes,this.scene=this.experience.scene,this.canvas=this.experience.canvas,this.camera=this.experience.camera,this.counter=1,this.setInstance()}setInstance(){this.instance=new mw({canvas:this.canvas,antialias:!0}),this.instance.toneMapping=Um,this.instance.toneMappingExposure=1.75,this.instance.setClearColor(this.backgroundColor),this.instance.setSize(this.sizes.width,this.sizes.height),this.instance.setPixelRatio(this.sizes.pixelRatio),this.instance.shadowMap.enabled=!0}resize(){this.instance.setSize(this.sizes.width,this.sizes.height),this.instance.setPixelRatio(this.sizes.pixelRatio)}update(){this.instance.render(this.scene,this.camera.instance)}}class ep{constructor(){this.modelPath="models/desk.gltf",this.experience=new Ki,this.scene=this.experience.scene,this.gltfLoader=this.experience.gltfLoader,this.textureLoader=this.experience.textureLoader,this.setGeometry(),this.setMaterial(),this.setInstance()}setGeometry(){this.geometry=new Es(8,1,2)}setMaterial(){const e=this.textureLoader.load("textures/tableTexture.png");this.material=new Mo({map:e}),console.log("loading")}setInstance(){this.gltfLoader.load(this.modelPath,e=>{this.instance=e.scene,this.instance.position.y=-5,this.instance.position.z=-7,this.scene.add(this.instance),this.startText=this.instance.getObjectByName("StartText"),this.startText.visible=!1,this.projectText=this.instance.getObjectByName("ProjectText")},e=>{console.log(e)})}dispose(){this.instance&&this.scene.remove(this.instance)}}class tp{constructor(){this.experience=new Ki,this.scene=this.experience.scene,this.ambientLight=this.newAmbientLight(),this.topLight=this.newDirectionLight(new k(0,2,4))}newAmbientLight(){const e=new Ww("#ffffff",.5);return this.scene.add(e),e}newDirectionLight(e){const t=new xg("#fffff2",2);return t.position.add(e),this.scene.add(t),t}dispose(){this.scene.remove(this.ambientLight),this.scene.remove(this.topLight)}}class HR{constructor(){this.experience=new Ki,this.scene=this.experience.scene,this.setGeometry(),this.setMaterial(),this.setInstance()}setGeometry(){this.geometry=new Es(.4,2.8,2)}setMaterial(){this.material=new Mo({color:"black"})}setInstance(){this.instance=new nn(this.geometry,this.material)}}class VR{constructor(){this.experience=new Ki,this.scene=this.experience.scene,this.table=new ep,this.lighting=new tp,this.projectsGroup=new Oi,this.scene.add(this.projectsGroup),this.project1=new HR,this.project1.instance.name="Project1",this.projectsGroup.add(this.project1.instance),this.projectsGroup.position.set(-9,-.2,-9.4)}dispose(){this.table.dispose(),this.lighting.dispose()}reset(){this.table=new ep,this.lighting=new tp}}class np{constructor(){this.experience=new Ki,this.canvas=this.experience.canvas,this.scene=this.experience.scene,this.sizes=this.experience.sizes,this.camera=this.experience.camera,this.world=this.experience.world,this.position=new Ue,this.raycaster=new tR,this.handleMouseMove=e=>{console.log("move"),this.position.x=e.clientX/this.sizes.width*2-1,this.position.y=-(e.clientY/this.sizes.height)*2+1,this.raycaster.setFromCamera(this.position,this.camera.instance),this.intersectObjects=this.raycaster.intersectObjects(this.scene.children,!0),this.intersectObjects.length>0&&(this.intersectObjects[0].object.name.includes("Project")?(this.world.table.projectText.material.color.set("#12e8c0"),this.currentHighlight="Projects"):(this.world.table.instance&&this.camera.view!="Projects"&&this.world.table.projectText.material.color.set("#ffffff"),this.currentHighlight=null))},this.handlePointerDown=e=>{this.currentHighlight==="Projects"?this.camera.setProjectsView():this.camera.view!=null&&(console.log(this.camera.view),this.camera.setBaseView(),this.world.table.projectText.material.color.set("#ffffff")),this.intersectObjects[0].object},this.addEvents()}addEvents(){window.addEventListener("mousemove",this.handleMouseMove),window.addEventListener("pointerdown",this.handlePointerDown)}removeEvents(){window.removeEventListener("mousemove",this.handleMouseMove),window.removeEventListener("pointerdown",this.handlePointerDown)}}let pc=null;class Ki{constructor(e){if(pc)return pc;pc=this,window.experience=this,this.canvas=e,this.textureLoader=new vg,this.gltfLoader=new sR,this.sizes=new kR,this.time=new zR,this.scene=new gw,this.camera=new Jh,this.renderer=new Qh,this.world=new VR,this.cursor=new np,this.time.addEventListener("tick",t=>{this.update()}),this.sizes.addEventListener("resize",t=>{this.resize()}),window.addEventListener("mousemove",this.cursor.handleMouseMove),window.addEventListener("pointerdown",this.cursor.handlePointerDown)}resize(){this.camera.resize(),this.renderer.resize()}update(){this.renderer.update(),this.camera.update()}pause(){this.time.pause(),this.camera.controls.dispose(),this.renderer.instance.dispose(),this.world.dispose(),this.cursor.removeEvents()}play(e){this.canvas=e,this.time.play(),this.camera=new Jh,console.log("new"),this.renderer=new Qh,this.world.reset(),this.cursor=new np}}const GR={id:"webgl",class:"fixed-top"},WR={__name:"ThreeEnvironment",setup(n){return yr(()=>{const e=document.querySelector("canvas#webgl");window.experience?window.experience.play(e):new Ki(e)}),ja(()=>{window.experience.pause()}),(e,t)=>(It(),Yt("canvas",GR))}},XR={key:0},qR={key:1,class:"q-pa-none q-ma-none"},jR={key:2},$R=["src"],KR={__name:"App",setup(n){const e=So();let t=xt("./images/logo.png");function i(){window.innerWidth<1200?(e.mobile=!0,e.siteMode="2D"):e.mobile=!1}return window.addEventListener("resize",()=>{console.log(window.innerWidth),i()}),i(),(s,r)=>(It(),Yt(en,null,[nt(e).siteMode==="2D"?(It(),Yt("main",XR,[Ae(zy,{class:"content"})])):nt(e).siteMode==="3D"?(It(),Yt("main",qR,[Ae(WR)])):(It(),Yt("main",jR,[Ae(h0)])),nt(e).mobile?Ev("",!0):(It(),Yt("div",{key:3,id:"logo",class:"fixed-top z-top shadow-5",onClick:r[2]||(r[2]=o=>nt(e).siteMode=null)},[qe("img",{src:nt(t),alt:"Logo",onMouseenter:r[0]||(r[0]=o=>yt(t)?t.value="/images/highlightedLogo.png":t="/images/highlightedLogo.png"),onMouseleave:r[1]||(r[1]=o=>yt(t)?t.value="/images/logo.png":t="/images/logo.png")},null,40,$R)]))],64))}},YR=bs(KR,[["__scopeId","data-v-de526b0e"]]);function ZR(n,e=250,t){let i=null;function s(){const r=arguments,o=()=>{i=null,n.apply(this,r)};i!==null&&clearTimeout(i),i=setTimeout(o,e)}return s.cancel=()=>{i!==null&&clearTimeout(i)},s}const mc=["sm","md","lg","xl"],{passive:ip}=Qt,JR=Ja({width:0,height:0,name:"xs",sizes:{sm:600,md:1024,lg:1440,xl:1920},lt:{sm:!0,md:!0,lg:!0,xl:!0},gt:{xs:!1,sm:!1,md:!1,lg:!1},xs:!0,sm:!1,md:!1,lg:!1,xl:!1},{setSizes:rr,setDebounce:rr,install({$q:n,onSSRHydrated:e}){if(n.screen=this,this.__installed===!0){n.config.screen!==void 0&&(n.config.screen.bodyClasses===!1?document.body.classList.remove(`screen--${this.name}`):this.__update(!0));return}const{visualViewport:t}=window,i=t||window,s=document.scrollingElement||document.documentElement,r=t===void 0||ht.is.mobile===!0?()=>[Math.max(window.innerWidth,s.clientWidth),Math.max(window.innerHeight,s.clientHeight)]:()=>[t.width*t.scale+window.innerWidth-s.clientWidth,t.height*t.scale+window.innerHeight-s.clientHeight],o=n.config.screen!==void 0&&n.config.screen.bodyClasses===!0;this.__update=f=>{const[d,h]=r();if(h!==this.height&&(this.height=h),d!==this.width)this.width=d;else if(f!==!0)return;let g=this.sizes;this.gt.xs=d>=g.sm,this.gt.sm=d>=g.md,this.gt.md=d>=g.lg,this.gt.lg=d>=g.xl,this.lt.sm=d<g.sm,this.lt.md=d<g.md,this.lt.lg=d<g.lg,this.lt.xl=d<g.xl,this.xs=this.lt.sm,this.sm=this.gt.xs===!0&&this.lt.md===!0,this.md=this.gt.sm===!0&&this.lt.lg===!0,this.lg=this.gt.md===!0&&this.lt.xl===!0,this.xl=this.gt.lg,g=this.xs===!0&&"xs"||this.sm===!0&&"sm"||this.md===!0&&"md"||this.lg===!0&&"lg"||"xl",g!==this.name&&(o===!0&&(document.body.classList.remove(`screen--${this.name}`),document.body.classList.add(`screen--${g}`)),this.name=g)};let a,l={},c=16;this.setSizes=f=>{mc.forEach(d=>{f[d]!==void 0&&(l[d]=f[d])})},this.setDebounce=f=>{c=f};const u=()=>{const f=getComputedStyle(document.body);f.getPropertyValue("--q-size-sm")&&mc.forEach(d=>{this.sizes[d]=parseInt(f.getPropertyValue(`--q-size-${d}`),10)}),this.setSizes=d=>{mc.forEach(h=>{d[h]&&(this.sizes[h]=d[h])}),this.__update(!0)},this.setDebounce=d=>{a!==void 0&&i.removeEventListener("resize",a,ip),a=d>0?ZR(this.__update,d):this.__update,i.addEventListener("resize",a,ip)},this.setDebounce(c),Object.keys(l).length!==0?(this.setSizes(l),l=void 0):this.__update(),o===!0&&this.name==="xs"&&document.body.classList.add("screen--xs")};Hn.value===!0?e.push(u):u()}}),zt=Ja({isActive:!1,mode:!1},{__media:void 0,set(n){zt.mode=n,n==="auto"?(zt.__media===void 0&&(zt.__media=window.matchMedia("(prefers-color-scheme: dark)"),zt.__updateMedia=()=>{zt.set("auto")},zt.__media.addListener(zt.__updateMedia)),n=zt.__media.matches):zt.__media!==void 0&&(zt.__media.removeListener(zt.__updateMedia),zt.__media=void 0),zt.isActive=n===!0,document.body.classList.remove(`body--${n===!0?"light":"dark"}`),document.body.classList.add(`body--${n===!0?"dark":"light"}`)},toggle(){zt.set(zt.isActive===!1)},install({$q:n,ssrContext:e}){const{dark:t}=n.config;n.dark=this,this.__installed!==!0&&this.set(t!==void 0?t:!1)}});function QR(n,e,t=document.body){if(typeof n!="string")throw new TypeError("Expected a string as propName");if(typeof e!="string")throw new TypeError("Expected a string as value");if(!(t instanceof Element))throw new TypeError("Expected a DOM element");t.style.setProperty(`--q-${n}`,e)}function Mg(n){if(n.ios===!0)return"ios";if(n.android===!0)return"android"}function eC({is:n,has:e,within:t},i){const s=[n.desktop===!0?"desktop":"mobile",`${e.touch===!1?"no-":""}touch`];if(n.mobile===!0){const r=Mg(n);r!==void 0&&s.push("platform-"+r)}if(n.nativeMobile===!0){const r=n.nativeMobileWrapper;s.push(r),s.push("native-mobile"),n.ios===!0&&(i[r]===void 0||i[r].iosStatusBarPadding!==!1)&&s.push("q-ios-padding")}else n.electron===!0?s.push("electron"):n.bex===!0&&s.push("bex");return t.iframe===!0&&s.push("within-iframe"),s}function tC(){const{is:n}=ht,e=document.body.className,t=new Set(e.replace(/ {2}/g," ").split(" "));if(n.nativeMobile!==!0&&n.electron!==!0&&n.bex!==!0){if(n.desktop===!0)t.delete("mobile"),t.delete("platform-ios"),t.delete("platform-android"),t.add("desktop");else if(n.mobile===!0){t.delete("desktop"),t.add("mobile"),t.delete("platform-ios"),t.delete("platform-android");const s=Mg(n);s!==void 0&&t.add(`platform-${s}`)}}ht.has.touch===!0&&(t.delete("no-touch"),t.add("touch")),ht.within.iframe===!0&&t.add("within-iframe");const i=Array.from(t).join(" ");e!==i&&(document.body.className=i)}function nC(n){for(const e in n)QR(e,n[e])}const iC={install(n){if(this.__installed!==!0){if(Hn.value===!0)tC();else{const{$q:e}=n;e.config.brand!==void 0&&nC(e.config.brand);const t=eC(ht,e.config);document.body.classList.add.apply(document.body.classList,t)}ht.is.ios===!0&&document.body.addEventListener("touchstart",rr),window.addEventListener("keydown",Lx,!0)}}},sp={isoName:"en-US",nativeName:"English (US)",label:{clear:"Clear",ok:"OK",cancel:"Cancel",close:"Close",set:"Set",select:"Select",reset:"Reset",remove:"Remove",update:"Update",create:"Create",search:"Search",filter:"Filter",refresh:"Refresh",expand:n=>n?`Expand "${n}"`:"Expand",collapse:n=>n?`Collapse "${n}"`:"Collapse"},date:{days:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),daysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),firstDayOfWeek:0,format24h:!1,pluralDay:"days"},table:{noData:"No data available",noResults:"No matching records found",loading:"Loading...",selectedRecords:n=>n===1?"1 record selected.":(n===0?"No":n)+" records selected.",recordsPerPage:"Records per page:",allRows:"All",pagination:(n,e,t)=>n+"-"+e+" of "+t,columns:"Columns"},editor:{url:"URL",bold:"Bold",italic:"Italic",strikethrough:"Strikethrough",underline:"Underline",unorderedList:"Unordered List",orderedList:"Ordered List",subscript:"Subscript",superscript:"Superscript",hyperlink:"Hyperlink",toggleFullscreen:"Toggle Fullscreen",quote:"Quote",left:"Left align",center:"Center align",right:"Right align",justify:"Justify align",print:"Print",outdent:"Decrease indentation",indent:"Increase indentation",removeFormat:"Remove formatting",formatting:"Formatting",fontSize:"Font Size",align:"Align",hr:"Insert Horizontal Rule",undo:"Undo",redo:"Redo",heading1:"Heading 1",heading2:"Heading 2",heading3:"Heading 3",heading4:"Heading 4",heading5:"Heading 5",heading6:"Heading 6",paragraph:"Paragraph",code:"Code",size1:"Very small",size2:"A bit small",size3:"Normal",size4:"Medium-large",size5:"Big",size6:"Very big",size7:"Maximum",defaultFont:"Default Font",viewSource:"View Source"},tree:{noNodes:"No nodes available",noResults:"No matching nodes found"}};function rp(){const n=Array.isArray(navigator.languages)===!0&&navigator.languages.length!==0?navigator.languages[0]:navigator.language;if(typeof n=="string")return n.split(/[-_]/).map((e,t)=>t===0?e.toLowerCase():t>1||e.length<4?e.toUpperCase():e[0].toUpperCase()+e.slice(1).toLowerCase()).join("-")}const Li=Ja({__qLang:{}},{getLocale:rp,set(n=sp,e){const t={...n,rtl:n.rtl===!0,getLocale:rp};{if(t.set=Li.set,Li.__langConfig===void 0||Li.__langConfig.noHtmlAttrs!==!0){const i=document.documentElement;i.setAttribute("dir",t.rtl===!0?"rtl":"ltr"),i.setAttribute("lang",t.isoName)}Object.assign(Li.__qLang,t)}},install({$q:n,lang:e,ssrContext:t}){n.lang=Li.__qLang,Li.__langConfig=n.config.lang,this.__installed===!0?e!==void 0&&this.set(e):(this.props=new Proxy(this.__qLang,{get(){return Reflect.get(...arguments)},ownKeys(i){return Reflect.ownKeys(i).filter(s=>s!=="set"&&s!=="getLocale")}}),this.set(e||sp))}}),sC={name:"material-icons",type:{positive:"check_circle",negative:"warning",info:"info",warning:"priority_high"},arrow:{up:"arrow_upward",right:"arrow_forward",down:"arrow_downward",left:"arrow_back",dropdown:"arrow_drop_down"},chevron:{left:"chevron_left",right:"chevron_right"},colorPicker:{spectrum:"gradient",tune:"tune",palette:"style"},pullToRefresh:{icon:"refresh"},carousel:{left:"chevron_left",right:"chevron_right",up:"keyboard_arrow_up",down:"keyboard_arrow_down",navigationIcon:"lens"},chip:{remove:"cancel",selected:"check"},datetime:{arrowLeft:"chevron_left",arrowRight:"chevron_right",now:"access_time",today:"today"},editor:{bold:"format_bold",italic:"format_italic",strikethrough:"strikethrough_s",underline:"format_underlined",unorderedList:"format_list_bulleted",orderedList:"format_list_numbered",subscript:"vertical_align_bottom",superscript:"vertical_align_top",hyperlink:"link",toggleFullscreen:"fullscreen",quote:"format_quote",left:"format_align_left",center:"format_align_center",right:"format_align_right",justify:"format_align_justify",print:"print",outdent:"format_indent_decrease",indent:"format_indent_increase",removeFormat:"format_clear",formatting:"text_format",fontSize:"format_size",align:"format_align_left",hr:"remove",undo:"undo",redo:"redo",heading:"format_size",code:"code",size:"format_size",font:"font_download",viewSource:"code"},expansionItem:{icon:"keyboard_arrow_down",denseIcon:"arrow_drop_down"},fab:{icon:"add",activeIcon:"close"},field:{clear:"cancel",error:"error"},pagination:{first:"first_page",prev:"keyboard_arrow_left",next:"keyboard_arrow_right",last:"last_page"},rating:{icon:"grade"},stepper:{done:"check",active:"edit",error:"warning"},tabs:{left:"chevron_left",right:"chevron_right",up:"keyboard_arrow_up",down:"keyboard_arrow_down"},table:{arrowUp:"arrow_upward",warning:"warning",firstPage:"first_page",prevPage:"chevron_left",nextPage:"chevron_right",lastPage:"last_page"},tree:{icon:"play_arrow"},uploader:{done:"done",clear:"clear",add:"add_box",upload:"cloud_upload",removeQueue:"clear_all",removeUploaded:"done_all"}},Fa=Ja({iconMapFn:null,__qIconSet:{}},{set(n,e){const t={...n};t.set=Fa.set,Object.assign(Fa.__qIconSet,t)},install({$q:n,iconSet:e,ssrContext:t}){n.config.iconMapFn!==void 0&&(this.iconMapFn=n.config.iconMapFn),n.iconSet=this.__qIconSet,Za(n,"iconMapFn",()=>this.iconMapFn,i=>{this.iconMapFn=i}),this.__installed===!0?e!==void 0&&this.set(e):(this.props=new Proxy(this.__qIconSet,{get(){return Reflect.get(...arguments)},ownKeys(i){return Reflect.ownKeys(i).filter(s=>s!=="set")}}),this.set(e||sC))}}),rC="_q_",op=[Aa,iC,zt,JR,Oc,Li,Fa];function ap(n,e){e.forEach(t=>{t.install(n),t.__installed=!0})}function oC(n,e,t){n.config.globalProperties.$q=t.$q,n.provide(rC,t.$q),ap(t,op),e.components!==void 0&&Object.values(e.components).forEach(i=>{Kd(i)===!0&&i.name!==void 0&&n.component(i.name,i)}),e.directives!==void 0&&Object.values(e.directives).forEach(i=>{Kd(i)===!0&&i.name!==void 0&&n.directive(i.name,i)}),e.plugins!==void 0&&ap(t,Object.values(e.plugins).filter(i=>typeof i.install=="function"&&op.includes(i)===!1)),Hn.value===!0&&(t.$q.onSSRHydrated=()=>{t.onSSRHydrated.forEach(i=>{i()}),t.$q.onSSRHydrated=()=>{}})}const aC=function(n,e={}){const t={version:"2.16.4"};Cm===!1?(e.config!==void 0&&Object.assign(wa,e.config),t.config={...wa},G0()):t.config=e.config||{},oC(n,e,{parentApp:n,$q:t,lang:e.lang,iconSet:e.iconSet,onSSRHydrated:[]})},lC={name:"Quasar",version:"2.16.4",install:aC,lang:Li,iconSet:Fa},Du=cx(YR),cC=Qx();Du.use(cC);Du.use(lC,{plugins:{}});Du.mount("#app");
