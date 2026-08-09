import{_ as Qf,V as es,d as Yf,H as Gf,Q as Xf,e as Lu,F as qf,E as Jf,z as Zf}from"./index-AioNJujd-BVVAomYy.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();var ts={exports:{}},Po={},ns={exports:{}},z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pr=Symbol.for("react.element"),bf=Symbol.for("react.portal"),ed=Symbol.for("react.fragment"),td=Symbol.for("react.strict_mode"),nd=Symbol.for("react.profiler"),rd=Symbol.for("react.provider"),od=Symbol.for("react.context"),id=Symbol.for("react.forward_ref"),ld=Symbol.for("react.suspense"),ud=Symbol.for("react.memo"),ad=Symbol.for("react.lazy"),Du=Symbol.iterator;function sd(e){return e===null||typeof e!="object"?null:(e=Du&&e[Du]||e["@@iterator"],typeof e=="function"?e:null)}var rs={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},os=Object.assign,is={};function kn(e,t,n){this.props=e,this.context=t,this.refs=is,this.updater=n||rs}kn.prototype.isReactComponent={};kn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};kn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ls(){}ls.prototype=kn.prototype;function Ol(e,t,n){this.props=e,this.context=t,this.refs=is,this.updater=n||rs}var jl=Ol.prototype=new ls;jl.constructor=Ol;os(jl,kn.prototype);jl.isPureReactComponent=!0;var zu=Array.isArray,us=Object.prototype.hasOwnProperty,Ll={current:null},as={key:!0,ref:!0,__self:!0,__source:!0};function ss(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)us.call(t,r)&&!as.hasOwnProperty(r)&&(o[r]=t[r]);var u=arguments.length-2;if(u===1)o.children=n;else if(1<u){for(var a=Array(u),c=0;c<u;c++)a[c]=arguments[c+2];o.children=a}if(e&&e.defaultProps)for(r in u=e.defaultProps,u)o[r]===void 0&&(o[r]=u[r]);return{$$typeof:pr,type:e,key:i,ref:l,props:o,_owner:Ll.current}}function cd(e,t){return{$$typeof:pr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Dl(e){return typeof e=="object"&&e!==null&&e.$$typeof===pr}function fd(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Au=/\/+/g;function Qo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?fd(""+e.key):t.toString(36)}function Br(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case pr:case bf:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+Qo(l,0):r,zu(o)?(n="",e!=null&&(n=e.replace(Au,"$&/")+"/"),Br(o,t,n,"",function(c){return c})):o!=null&&(Dl(o)&&(o=cd(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(Au,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",zu(e))for(var u=0;u<e.length;u++){i=e[u];var a=r+Qo(i,u);l+=Br(i,t,n,a,o)}else if(a=sd(e),typeof a=="function")for(e=a.call(e),u=0;!(i=e.next()).done;)i=i.value,a=r+Qo(i,u++),l+=Br(i,t,n,a,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Er(e,t,n){if(e==null)return e;var r=[],o=0;return Br(e,r,"","",function(i){return t.call(n,i,o++)}),r}function dd(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var he={current:null},Vr={transition:null},pd={ReactCurrentDispatcher:he,ReactCurrentBatchConfig:Vr,ReactCurrentOwner:Ll};function cs(){throw Error("act(...) is not supported in production builds of React.")}z.Children={map:Er,forEach:function(e,t,n){Er(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Er(e,function(){t++}),t},toArray:function(e){return Er(e,function(t){return t})||[]},only:function(e){if(!Dl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};z.Component=kn;z.Fragment=ed;z.Profiler=nd;z.PureComponent=Ol;z.StrictMode=td;z.Suspense=ld;z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pd;z.act=cs;z.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=os({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=Ll.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(a in t)us.call(t,a)&&!as.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&u!==void 0?u[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){u=Array(a);for(var c=0;c<a;c++)u[c]=arguments[c+2];r.children=u}return{$$typeof:pr,type:e.type,key:o,ref:i,props:r,_owner:l}};z.createContext=function(e){return e={$$typeof:od,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:rd,_context:e},e.Consumer=e};z.createElement=ss;z.createFactory=function(e){var t=ss.bind(null,e);return t.type=e,t};z.createRef=function(){return{current:null}};z.forwardRef=function(e){return{$$typeof:id,render:e}};z.isValidElement=Dl;z.lazy=function(e){return{$$typeof:ad,_payload:{_status:-1,_result:e},_init:dd}};z.memo=function(e,t){return{$$typeof:ud,type:e,compare:t===void 0?null:t}};z.startTransition=function(e){var t=Vr.transition;Vr.transition={};try{e()}finally{Vr.transition=t}};z.unstable_act=cs;z.useCallback=function(e,t){return he.current.useCallback(e,t)};z.useContext=function(e){return he.current.useContext(e)};z.useDebugValue=function(){};z.useDeferredValue=function(e){return he.current.useDeferredValue(e)};z.useEffect=function(e,t){return he.current.useEffect(e,t)};z.useId=function(){return he.current.useId()};z.useImperativeHandle=function(e,t,n){return he.current.useImperativeHandle(e,t,n)};z.useInsertionEffect=function(e,t){return he.current.useInsertionEffect(e,t)};z.useLayoutEffect=function(e,t){return he.current.useLayoutEffect(e,t)};z.useMemo=function(e,t){return he.current.useMemo(e,t)};z.useReducer=function(e,t,n){return he.current.useReducer(e,t,n)};z.useRef=function(e){return he.current.useRef(e)};z.useState=function(e){return he.current.useState(e)};z.useSyncExternalStore=function(e,t,n){return he.current.useSyncExternalStore(e,t,n)};z.useTransition=function(){return he.current.useTransition()};z.version="18.3.1";ns.exports=z;var T=ns.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hd=T,md=Symbol.for("react.element"),vd=Symbol.for("react.fragment"),yd=Object.prototype.hasOwnProperty,gd=hd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,wd={key:!0,ref:!0,__self:!0,__source:!0};function fs(e,t,n){var r,o={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)yd.call(t,r)&&!wd.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:md,type:e,key:i,ref:l,props:o,_owner:gd.current}}Po.Fragment=vd;Po.jsx=fs;Po.jsxs=fs;ts.exports=Po;var S=ts.exports,ds={exports:{}},Ie={},ps={exports:{}},hs={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(x,R){var L=x.length;x.push(R);e:for(;0<L;){var X=L-1>>>1,te=x[X];if(0<o(te,R))x[X]=R,x[L]=te,L=X;else break e}}function n(x){return x.length===0?null:x[0]}function r(x){if(x.length===0)return null;var R=x[0],L=x.pop();if(L!==R){x[0]=L;e:for(var X=0,te=x.length,Sr=te>>>1;X<Sr;){var Tt=2*(X+1)-1,Ko=x[Tt],Rt=Tt+1,kr=x[Rt];if(0>o(Ko,L))Rt<te&&0>o(kr,Ko)?(x[X]=kr,x[Rt]=L,X=Rt):(x[X]=Ko,x[Tt]=L,X=Tt);else if(Rt<te&&0>o(kr,L))x[X]=kr,x[Rt]=L,X=Rt;else break e}}return R}function o(x,R){var L=x.sortIndex-R.sortIndex;return L!==0?L:x.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,u=l.now();e.unstable_now=function(){return l.now()-u}}var a=[],c=[],p=1,m=null,h=3,g=!1,E=!1,k=!1,j=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,s=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(x){for(var R=n(c);R!==null;){if(R.callback===null)r(c);else if(R.startTime<=x)r(c),R.sortIndex=R.expirationTime,t(a,R);else break;R=n(c)}}function v(x){if(k=!1,f(x),!E)if(n(a)!==null)E=!0,Me(y);else{var R=n(c);R!==null&&A(v,R.startTime-x)}}function y(x,R){E=!1,k&&(k=!1,d(P),P=-1),g=!0;var L=h;try{for(f(R),m=n(a);m!==null&&(!(m.expirationTime>R)||x&&!ve());){var X=m.callback;if(typeof X=="function"){m.callback=null,h=m.priorityLevel;var te=X(m.expirationTime<=R);R=e.unstable_now(),typeof te=="function"?m.callback=te:m===n(a)&&r(a),f(R)}else r(a);m=n(a)}if(m!==null)var Sr=!0;else{var Tt=n(c);Tt!==null&&A(v,Tt.startTime-R),Sr=!1}return Sr}finally{m=null,h=L,g=!1}}var _=!1,C=null,P=-1,W=5,D=-1;function ve(){return!(e.unstable_now()-D<W)}function qe(){if(C!==null){var x=e.unstable_now();D=x;var R=!0;try{R=C(!0,x)}finally{R?O():(_=!1,C=null)}}else _=!1}var O;if(typeof s=="function")O=function(){s(qe)};else if(typeof MessageChannel<"u"){var $=new MessageChannel,Ee=$.port2;$.port1.onmessage=qe,O=function(){Ee.postMessage(null)}}else O=function(){j(qe,0)};function Me(x){C=x,_||(_=!0,O())}function A(x,R){P=j(function(){x(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(x){x.callback=null},e.unstable_continueExecution=function(){E||g||(E=!0,Me(y))},e.unstable_forceFrameRate=function(x){0>x||125<x?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<x?Math.floor(1e3/x):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(x){switch(h){case 1:case 2:case 3:var R=3;break;default:R=h}var L=h;h=R;try{return x()}finally{h=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(x,R){switch(x){case 1:case 2:case 3:case 4:case 5:break;default:x=3}var L=h;h=x;try{return R()}finally{h=L}},e.unstable_scheduleCallback=function(x,R,L){var X=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?X+L:X):L=X,x){case 1:var te=-1;break;case 2:te=250;break;case 5:te=1073741823;break;case 4:te=1e4;break;default:te=5e3}return te=L+te,x={id:p++,callback:R,priorityLevel:x,startTime:L,expirationTime:te,sortIndex:-1},L>X?(x.sortIndex=L,t(c,x),n(a)===null&&x===n(c)&&(k?(d(P),P=-1):k=!0,A(v,L-X))):(x.sortIndex=te,t(a,x),E||g||(E=!0,Me(y))),x},e.unstable_shouldYield=ve,e.unstable_wrapCallback=function(x){var R=h;return function(){var L=h;h=R;try{return x.apply(this,arguments)}finally{h=L}}}})(hs);ps.exports=hs;var Sd=ps.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kd=T,Ne=Sd;function w(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ms=new Set,Kn={};function Ht(e,t){hn(e,t),hn(e+"Capture",t)}function hn(e,t){for(Kn[e]=t,e=0;e<t.length;e++)ms.add(t[e])}var ot=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ni=Object.prototype.hasOwnProperty,Ed=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Mu={},Uu={};function _d(e){return Ni.call(Uu,e)?!0:Ni.call(Mu,e)?!1:Ed.test(e)?Uu[e]=!0:(Mu[e]=!0,!1)}function xd(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Cd(e,t,n,r){if(t===null||typeof t>"u"||xd(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function me(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var le={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){le[e]=new me(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];le[t]=new me(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){le[e]=new me(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){le[e]=new me(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){le[e]=new me(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){le[e]=new me(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){le[e]=new me(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){le[e]=new me(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){le[e]=new me(e,5,!1,e.toLowerCase(),null,!1,!1)});var zl=/[\-:]([a-z])/g;function Al(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(zl,Al);le[t]=new me(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(zl,Al);le[t]=new me(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(zl,Al);le[t]=new me(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){le[e]=new me(e,1,!1,e.toLowerCase(),null,!1,!1)});le.xlinkHref=new me("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){le[e]=new me(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ml(e,t,n,r){var o=le.hasOwnProperty(t)?le[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Cd(t,n,o,r)&&(n=null),r||o===null?_d(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var at=kd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,_r=Symbol.for("react.element"),Xt=Symbol.for("react.portal"),qt=Symbol.for("react.fragment"),Ul=Symbol.for("react.strict_mode"),Ii=Symbol.for("react.profiler"),vs=Symbol.for("react.provider"),ys=Symbol.for("react.context"),$l=Symbol.for("react.forward_ref"),Pi=Symbol.for("react.suspense"),Ti=Symbol.for("react.suspense_list"),Fl=Symbol.for("react.memo"),ct=Symbol.for("react.lazy"),gs=Symbol.for("react.offscreen"),$u=Symbol.iterator;function xn(e){return e===null||typeof e!="object"?null:(e=$u&&e[$u]||e["@@iterator"],typeof e=="function"?e:null)}var Y=Object.assign,Yo;function jn(e){if(Yo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Yo=t&&t[1]||""}return`
`+Yo+e}var Go=!1;function Xo(e,t){if(!e||Go)return"";Go=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,u=i.length-1;1<=l&&0<=u&&o[l]!==i[u];)u--;for(;1<=l&&0<=u;l--,u--)if(o[l]!==i[u]){if(l!==1||u!==1)do if(l--,u--,0>u||o[l]!==i[u]){var a=`
`+o[l].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=l&&0<=u);break}}}finally{Go=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?jn(e):""}function Nd(e){switch(e.tag){case 5:return jn(e.type);case 16:return jn("Lazy");case 13:return jn("Suspense");case 19:return jn("SuspenseList");case 0:case 2:case 15:return e=Xo(e.type,!1),e;case 11:return e=Xo(e.type.render,!1),e;case 1:return e=Xo(e.type,!0),e;default:return""}}function Ri(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case qt:return"Fragment";case Xt:return"Portal";case Ii:return"Profiler";case Ul:return"StrictMode";case Pi:return"Suspense";case Ti:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ys:return(e.displayName||"Context")+".Consumer";case vs:return(e._context.displayName||"Context")+".Provider";case $l:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Fl:return t=e.displayName||null,t!==null?t:Ri(e.type)||"Memo";case ct:t=e._payload,e=e._init;try{return Ri(e(t))}catch{}}return null}function Id(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ri(t);case 8:return t===Ul?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function xt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ws(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Pd(e){var t=ws(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function xr(e){e._valueTracker||(e._valueTracker=Pd(e))}function Ss(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ws(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function br(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Oi(e,t){var n=t.checked;return Y({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Fu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=xt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ks(e,t){t=t.checked,t!=null&&Ml(e,"checked",t,!1)}function ji(e,t){ks(e,t);var n=xt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Li(e,t.type,n):t.hasOwnProperty("defaultValue")&&Li(e,t.type,xt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Bu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Li(e,t,n){(t!=="number"||br(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ln=Array.isArray;function an(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+xt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Di(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(w(91));return Y({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Vu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(w(92));if(Ln(n)){if(1<n.length)throw Error(w(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:xt(n)}}function Es(e,t){var n=xt(t.value),r=xt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Wu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function _s(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function zi(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?_s(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Cr,xs=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Cr=Cr||document.createElement("div"),Cr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Cr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Qn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var An={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Td=["Webkit","ms","Moz","O"];Object.keys(An).forEach(function(e){Td.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),An[t]=An[e]})});function Cs(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||An.hasOwnProperty(e)&&An[e]?(""+t).trim():t+"px"}function Ns(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Cs(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Rd=Y({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ai(e,t){if(t){if(Rd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(w(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(w(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(w(61))}if(t.style!=null&&typeof t.style!="object")throw Error(w(62))}}function Mi(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ui=null;function Bl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var $i=null,sn=null,cn=null;function Hu(e){if(e=vr(e)){if(typeof $i!="function")throw Error(w(280));var t=e.stateNode;t&&(t=Lo(t),$i(e.stateNode,e.type,t))}}function Is(e){sn?cn?cn.push(e):cn=[e]:sn=e}function Ps(){if(sn){var e=sn,t=cn;if(cn=sn=null,Hu(e),t)for(e=0;e<t.length;e++)Hu(t[e])}}function Ts(e,t){return e(t)}function Rs(){}var qo=!1;function Os(e,t,n){if(qo)return e(t,n);qo=!0;try{return Ts(e,t,n)}finally{qo=!1,(sn!==null||cn!==null)&&(Rs(),Ps())}}function Yn(e,t){var n=e.stateNode;if(n===null)return null;var r=Lo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(w(231,t,typeof n));return n}var Fi=!1;if(ot)try{var Cn={};Object.defineProperty(Cn,"passive",{get:function(){Fi=!0}}),window.addEventListener("test",Cn,Cn),window.removeEventListener("test",Cn,Cn)}catch{Fi=!1}function Od(e,t,n,r,o,i,l,u,a){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(p){this.onError(p)}}var Mn=!1,eo=null,to=!1,Bi=null,jd={onError:function(e){Mn=!0,eo=e}};function Ld(e,t,n,r,o,i,l,u,a){Mn=!1,eo=null,Od.apply(jd,arguments)}function Dd(e,t,n,r,o,i,l,u,a){if(Ld.apply(this,arguments),Mn){if(Mn){var c=eo;Mn=!1,eo=null}else throw Error(w(198));to||(to=!0,Bi=c)}}function Kt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function js(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ku(e){if(Kt(e)!==e)throw Error(w(188))}function zd(e){var t=e.alternate;if(!t){if(t=Kt(e),t===null)throw Error(w(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Ku(o),e;if(i===r)return Ku(o),t;i=i.sibling}throw Error(w(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,u=o.child;u;){if(u===n){l=!0,n=o,r=i;break}if(u===r){l=!0,r=o,n=i;break}u=u.sibling}if(!l){for(u=i.child;u;){if(u===n){l=!0,n=i,r=o;break}if(u===r){l=!0,r=i,n=o;break}u=u.sibling}if(!l)throw Error(w(189))}}if(n.alternate!==r)throw Error(w(190))}if(n.tag!==3)throw Error(w(188));return n.stateNode.current===n?e:t}function Ls(e){return e=zd(e),e!==null?Ds(e):null}function Ds(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ds(e);if(t!==null)return t;e=e.sibling}return null}var zs=Ne.unstable_scheduleCallback,Qu=Ne.unstable_cancelCallback,Ad=Ne.unstable_shouldYield,Md=Ne.unstable_requestPaint,q=Ne.unstable_now,Ud=Ne.unstable_getCurrentPriorityLevel,Vl=Ne.unstable_ImmediatePriority,As=Ne.unstable_UserBlockingPriority,no=Ne.unstable_NormalPriority,$d=Ne.unstable_LowPriority,Ms=Ne.unstable_IdlePriority,To=null,Ge=null;function Fd(e){if(Ge&&typeof Ge.onCommitFiberRoot=="function")try{Ge.onCommitFiberRoot(To,e,void 0,(e.current.flags&128)===128)}catch{}}var Ve=Math.clz32?Math.clz32:Wd,Bd=Math.log,Vd=Math.LN2;function Wd(e){return e>>>=0,e===0?32:31-(Bd(e)/Vd|0)|0}var Nr=64,Ir=4194304;function Dn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ro(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var u=l&~o;u!==0?r=Dn(u):(i&=l,i!==0&&(r=Dn(i)))}else l=n&~o,l!==0?r=Dn(l):i!==0&&(r=Dn(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ve(t),o=1<<n,r|=e[n],t&=~o;return r}function Hd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Kd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-Ve(i),u=1<<l,a=o[l];a===-1?(!(u&n)||u&r)&&(o[l]=Hd(u,t)):a<=t&&(e.expiredLanes|=u),i&=~u}}function Vi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Us(){var e=Nr;return Nr<<=1,!(Nr&4194240)&&(Nr=64),e}function Jo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function hr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ve(t),e[t]=n}function Qd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Ve(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function Wl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ve(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var U=0;function $s(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Fs,Hl,Bs,Vs,Ws,Wi=!1,Pr=[],vt=null,yt=null,gt=null,Gn=new Map,Xn=new Map,dt=[],Yd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Yu(e,t){switch(e){case"focusin":case"focusout":vt=null;break;case"dragenter":case"dragleave":yt=null;break;case"mouseover":case"mouseout":gt=null;break;case"pointerover":case"pointerout":Gn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xn.delete(t.pointerId)}}function Nn(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=vr(t),t!==null&&Hl(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Gd(e,t,n,r,o){switch(t){case"focusin":return vt=Nn(vt,e,t,n,r,o),!0;case"dragenter":return yt=Nn(yt,e,t,n,r,o),!0;case"mouseover":return gt=Nn(gt,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Gn.set(i,Nn(Gn.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Xn.set(i,Nn(Xn.get(i)||null,e,t,n,r,o)),!0}return!1}function Hs(e){var t=Lt(e.target);if(t!==null){var n=Kt(t);if(n!==null){if(t=n.tag,t===13){if(t=js(n),t!==null){e.blockedOn=t,Ws(e.priority,function(){Bs(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Wr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Hi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ui=r,n.target.dispatchEvent(r),Ui=null}else return t=vr(n),t!==null&&Hl(t),e.blockedOn=n,!1;t.shift()}return!0}function Gu(e,t,n){Wr(e)&&n.delete(t)}function Xd(){Wi=!1,vt!==null&&Wr(vt)&&(vt=null),yt!==null&&Wr(yt)&&(yt=null),gt!==null&&Wr(gt)&&(gt=null),Gn.forEach(Gu),Xn.forEach(Gu)}function In(e,t){e.blockedOn===t&&(e.blockedOn=null,Wi||(Wi=!0,Ne.unstable_scheduleCallback(Ne.unstable_NormalPriority,Xd)))}function qn(e){function t(o){return In(o,e)}if(0<Pr.length){In(Pr[0],e);for(var n=1;n<Pr.length;n++){var r=Pr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(vt!==null&&In(vt,e),yt!==null&&In(yt,e),gt!==null&&In(gt,e),Gn.forEach(t),Xn.forEach(t),n=0;n<dt.length;n++)r=dt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<dt.length&&(n=dt[0],n.blockedOn===null);)Hs(n),n.blockedOn===null&&dt.shift()}var fn=at.ReactCurrentBatchConfig,oo=!0;function qd(e,t,n,r){var o=U,i=fn.transition;fn.transition=null;try{U=1,Kl(e,t,n,r)}finally{U=o,fn.transition=i}}function Jd(e,t,n,r){var o=U,i=fn.transition;fn.transition=null;try{U=4,Kl(e,t,n,r)}finally{U=o,fn.transition=i}}function Kl(e,t,n,r){if(oo){var o=Hi(e,t,n,r);if(o===null)ui(e,t,r,io,n),Yu(e,r);else if(Gd(o,e,t,n,r))r.stopPropagation();else if(Yu(e,r),t&4&&-1<Yd.indexOf(e)){for(;o!==null;){var i=vr(o);if(i!==null&&Fs(i),i=Hi(e,t,n,r),i===null&&ui(e,t,r,io,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else ui(e,t,r,null,n)}}var io=null;function Hi(e,t,n,r){if(io=null,e=Bl(r),e=Lt(e),e!==null)if(t=Kt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=js(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return io=e,null}function Ks(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ud()){case Vl:return 1;case As:return 4;case no:case $d:return 16;case Ms:return 536870912;default:return 16}default:return 16}}var ht=null,Ql=null,Hr=null;function Qs(){if(Hr)return Hr;var e,t=Ql,n=t.length,r,o="value"in ht?ht.value:ht.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return Hr=o.slice(e,1<r?1-r:void 0)}function Kr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Tr(){return!0}function Xu(){return!1}function Pe(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(n=e[u],this[u]=n?n(i):i[u]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Tr:Xu,this.isPropagationStopped=Xu,this}return Y(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Tr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Tr)},persist:function(){},isPersistent:Tr}),t}var En={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yl=Pe(En),mr=Y({},En,{view:0,detail:0}),Zd=Pe(mr),Zo,bo,Pn,Ro=Y({},mr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Pn&&(Pn&&e.type==="mousemove"?(Zo=e.screenX-Pn.screenX,bo=e.screenY-Pn.screenY):bo=Zo=0,Pn=e),Zo)},movementY:function(e){return"movementY"in e?e.movementY:bo}}),qu=Pe(Ro),bd=Y({},Ro,{dataTransfer:0}),ep=Pe(bd),tp=Y({},mr,{relatedTarget:0}),ei=Pe(tp),np=Y({},En,{animationName:0,elapsedTime:0,pseudoElement:0}),rp=Pe(np),op=Y({},En,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ip=Pe(op),lp=Y({},En,{data:0}),Ju=Pe(lp),up={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ap={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function cp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=sp[e])?!!t[e]:!1}function Gl(){return cp}var fp=Y({},mr,{key:function(e){if(e.key){var t=up[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Kr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ap[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gl,charCode:function(e){return e.type==="keypress"?Kr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Kr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),dp=Pe(fp),pp=Y({},Ro,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zu=Pe(pp),hp=Y({},mr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gl}),mp=Pe(hp),vp=Y({},En,{propertyName:0,elapsedTime:0,pseudoElement:0}),yp=Pe(vp),gp=Y({},Ro,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),wp=Pe(gp),Sp=[9,13,27,32],Xl=ot&&"CompositionEvent"in window,Un=null;ot&&"documentMode"in document&&(Un=document.documentMode);var kp=ot&&"TextEvent"in window&&!Un,Ys=ot&&(!Xl||Un&&8<Un&&11>=Un),bu=" ",ea=!1;function Gs(e,t){switch(e){case"keyup":return Sp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xs(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Jt=!1;function Ep(e,t){switch(e){case"compositionend":return Xs(t);case"keypress":return t.which!==32?null:(ea=!0,bu);case"textInput":return e=t.data,e===bu&&ea?null:e;default:return null}}function _p(e,t){if(Jt)return e==="compositionend"||!Xl&&Gs(e,t)?(e=Qs(),Hr=Ql=ht=null,Jt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ys&&t.locale!=="ko"?null:t.data;default:return null}}var xp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ta(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!xp[e.type]:t==="textarea"}function qs(e,t,n,r){Is(r),t=lo(t,"onChange"),0<t.length&&(n=new Yl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var $n=null,Jn=null;function Cp(e){uc(e,0)}function Oo(e){var t=en(e);if(Ss(t))return e}function Np(e,t){if(e==="change")return t}var Js=!1;if(ot){var ti;if(ot){var ni="oninput"in document;if(!ni){var na=document.createElement("div");na.setAttribute("oninput","return;"),ni=typeof na.oninput=="function"}ti=ni}else ti=!1;Js=ti&&(!document.documentMode||9<document.documentMode)}function ra(){$n&&($n.detachEvent("onpropertychange",Zs),Jn=$n=null)}function Zs(e){if(e.propertyName==="value"&&Oo(Jn)){var t=[];qs(t,Jn,e,Bl(e)),Os(Cp,t)}}function Ip(e,t,n){e==="focusin"?(ra(),$n=t,Jn=n,$n.attachEvent("onpropertychange",Zs)):e==="focusout"&&ra()}function Pp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Oo(Jn)}function Tp(e,t){if(e==="click")return Oo(t)}function Rp(e,t){if(e==="input"||e==="change")return Oo(t)}function Op(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var He=typeof Object.is=="function"?Object.is:Op;function Zn(e,t){if(He(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Ni.call(t,o)||!He(e[o],t[o]))return!1}return!0}function oa(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ia(e,t){var n=oa(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=oa(n)}}function bs(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?bs(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ec(){for(var e=window,t=br();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=br(e.document)}return t}function ql(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function jp(e){var t=ec(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&bs(n.ownerDocument.documentElement,n)){if(r!==null&&ql(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=ia(n,i);var l=ia(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Lp=ot&&"documentMode"in document&&11>=document.documentMode,Zt=null,Ki=null,Fn=null,Qi=!1;function la(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Qi||Zt==null||Zt!==br(r)||(r=Zt,"selectionStart"in r&&ql(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Fn&&Zn(Fn,r)||(Fn=r,r=lo(Ki,"onSelect"),0<r.length&&(t=new Yl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Zt)))}function Rr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var bt={animationend:Rr("Animation","AnimationEnd"),animationiteration:Rr("Animation","AnimationIteration"),animationstart:Rr("Animation","AnimationStart"),transitionend:Rr("Transition","TransitionEnd")},ri={},tc={};ot&&(tc=document.createElement("div").style,"AnimationEvent"in window||(delete bt.animationend.animation,delete bt.animationiteration.animation,delete bt.animationstart.animation),"TransitionEvent"in window||delete bt.transitionend.transition);function jo(e){if(ri[e])return ri[e];if(!bt[e])return e;var t=bt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in tc)return ri[e]=t[n];return e}var nc=jo("animationend"),rc=jo("animationiteration"),oc=jo("animationstart"),ic=jo("transitionend"),lc=new Map,ua="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Nt(e,t){lc.set(e,t),Ht(t,[e])}for(var oi=0;oi<ua.length;oi++){var ii=ua[oi],Dp=ii.toLowerCase(),zp=ii[0].toUpperCase()+ii.slice(1);Nt(Dp,"on"+zp)}Nt(nc,"onAnimationEnd");Nt(rc,"onAnimationIteration");Nt(oc,"onAnimationStart");Nt("dblclick","onDoubleClick");Nt("focusin","onFocus");Nt("focusout","onBlur");Nt(ic,"onTransitionEnd");hn("onMouseEnter",["mouseout","mouseover"]);hn("onMouseLeave",["mouseout","mouseover"]);hn("onPointerEnter",["pointerout","pointerover"]);hn("onPointerLeave",["pointerout","pointerover"]);Ht("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ht("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ht("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ht("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ht("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ht("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ap=new Set("cancel close invalid load scroll toggle".split(" ").concat(zn));function aa(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Dd(r,t,void 0,e),e.currentTarget=null}function uc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var u=r[l],a=u.instance,c=u.currentTarget;if(u=u.listener,a!==i&&o.isPropagationStopped())break e;aa(o,u,c),i=a}else for(l=0;l<r.length;l++){if(u=r[l],a=u.instance,c=u.currentTarget,u=u.listener,a!==i&&o.isPropagationStopped())break e;aa(o,u,c),i=a}}}if(to)throw e=Bi,to=!1,Bi=null,e}function B(e,t){var n=t[Ji];n===void 0&&(n=t[Ji]=new Set);var r=e+"__bubble";n.has(r)||(ac(t,e,2,!1),n.add(r))}function li(e,t,n){var r=0;t&&(r|=4),ac(n,e,r,t)}var Or="_reactListening"+Math.random().toString(36).slice(2);function bn(e){if(!e[Or]){e[Or]=!0,ms.forEach(function(n){n!=="selectionchange"&&(Ap.has(n)||li(n,!1,e),li(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Or]||(t[Or]=!0,li("selectionchange",!1,t))}}function ac(e,t,n,r){switch(Ks(t)){case 1:var o=qd;break;case 4:o=Jd;break;default:o=Kl}n=o.bind(null,t,n,e),o=void 0,!Fi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function ui(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var u=r.stateNode.containerInfo;if(u===o||u.nodeType===8&&u.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var a=l.tag;if((a===3||a===4)&&(a=l.stateNode.containerInfo,a===o||a.nodeType===8&&a.parentNode===o))return;l=l.return}for(;u!==null;){if(l=Lt(u),l===null)return;if(a=l.tag,a===5||a===6){r=i=l;continue e}u=u.parentNode}}r=r.return}Os(function(){var c=i,p=Bl(n),m=[];e:{var h=lc.get(e);if(h!==void 0){var g=Yl,E=e;switch(e){case"keypress":if(Kr(n)===0)break e;case"keydown":case"keyup":g=dp;break;case"focusin":E="focus",g=ei;break;case"focusout":E="blur",g=ei;break;case"beforeblur":case"afterblur":g=ei;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=qu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=ep;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=mp;break;case nc:case rc:case oc:g=rp;break;case ic:g=yp;break;case"scroll":g=Zd;break;case"wheel":g=wp;break;case"copy":case"cut":case"paste":g=ip;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Zu}var k=(t&4)!==0,j=!k&&e==="scroll",d=k?h!==null?h+"Capture":null:h;k=[];for(var s=c,f;s!==null;){f=s;var v=f.stateNode;if(f.tag===5&&v!==null&&(f=v,d!==null&&(v=Yn(s,d),v!=null&&k.push(er(s,v,f)))),j)break;s=s.return}0<k.length&&(h=new g(h,E,null,n,p),m.push({event:h,listeners:k}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",h&&n!==Ui&&(E=n.relatedTarget||n.fromElement)&&(Lt(E)||E[it]))break e;if((g||h)&&(h=p.window===p?p:(h=p.ownerDocument)?h.defaultView||h.parentWindow:window,g?(E=n.relatedTarget||n.toElement,g=c,E=E?Lt(E):null,E!==null&&(j=Kt(E),E!==j||E.tag!==5&&E.tag!==6)&&(E=null)):(g=null,E=c),g!==E)){if(k=qu,v="onMouseLeave",d="onMouseEnter",s="mouse",(e==="pointerout"||e==="pointerover")&&(k=Zu,v="onPointerLeave",d="onPointerEnter",s="pointer"),j=g==null?h:en(g),f=E==null?h:en(E),h=new k(v,s+"leave",g,n,p),h.target=j,h.relatedTarget=f,v=null,Lt(p)===c&&(k=new k(d,s+"enter",E,n,p),k.target=f,k.relatedTarget=j,v=k),j=v,g&&E)t:{for(k=g,d=E,s=0,f=k;f;f=Yt(f))s++;for(f=0,v=d;v;v=Yt(v))f++;for(;0<s-f;)k=Yt(k),s--;for(;0<f-s;)d=Yt(d),f--;for(;s--;){if(k===d||d!==null&&k===d.alternate)break t;k=Yt(k),d=Yt(d)}k=null}else k=null;g!==null&&sa(m,h,g,k,!1),E!==null&&j!==null&&sa(m,j,E,k,!0)}}e:{if(h=c?en(c):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var y=Np;else if(ta(h))if(Js)y=Rp;else{y=Pp;var _=Ip}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(y=Tp);if(y&&(y=y(e,c))){qs(m,y,n,p);break e}_&&_(e,h,c),e==="focusout"&&(_=h._wrapperState)&&_.controlled&&h.type==="number"&&Li(h,"number",h.value)}switch(_=c?en(c):window,e){case"focusin":(ta(_)||_.contentEditable==="true")&&(Zt=_,Ki=c,Fn=null);break;case"focusout":Fn=Ki=Zt=null;break;case"mousedown":Qi=!0;break;case"contextmenu":case"mouseup":case"dragend":Qi=!1,la(m,n,p);break;case"selectionchange":if(Lp)break;case"keydown":case"keyup":la(m,n,p)}var C;if(Xl)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Jt?Gs(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(Ys&&n.locale!=="ko"&&(Jt||P!=="onCompositionStart"?P==="onCompositionEnd"&&Jt&&(C=Qs()):(ht=p,Ql="value"in ht?ht.value:ht.textContent,Jt=!0)),_=lo(c,P),0<_.length&&(P=new Ju(P,e,null,n,p),m.push({event:P,listeners:_}),C?P.data=C:(C=Xs(n),C!==null&&(P.data=C)))),(C=kp?Ep(e,n):_p(e,n))&&(c=lo(c,"onBeforeInput"),0<c.length&&(p=new Ju("onBeforeInput","beforeinput",null,n,p),m.push({event:p,listeners:c}),p.data=C))}uc(m,t)})}function er(e,t,n){return{instance:e,listener:t,currentTarget:n}}function lo(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Yn(e,n),i!=null&&r.unshift(er(e,i,o)),i=Yn(e,t),i!=null&&r.push(er(e,i,o))),e=e.return}return r}function Yt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function sa(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var u=n,a=u.alternate,c=u.stateNode;if(a!==null&&a===r)break;u.tag===5&&c!==null&&(u=c,o?(a=Yn(n,i),a!=null&&l.unshift(er(n,a,u))):o||(a=Yn(n,i),a!=null&&l.push(er(n,a,u)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Mp=/\r\n?/g,Up=/\u0000|\uFFFD/g;function ca(e){return(typeof e=="string"?e:""+e).replace(Mp,`
`).replace(Up,"")}function jr(e,t,n){if(t=ca(t),ca(e)!==t&&n)throw Error(w(425))}function uo(){}var Yi=null,Gi=null;function Xi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var qi=typeof setTimeout=="function"?setTimeout:void 0,$p=typeof clearTimeout=="function"?clearTimeout:void 0,fa=typeof Promise=="function"?Promise:void 0,Fp=typeof queueMicrotask=="function"?queueMicrotask:typeof fa<"u"?function(e){return fa.resolve(null).then(e).catch(Bp)}:qi;function Bp(e){setTimeout(function(){throw e})}function ai(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),qn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);qn(t)}function wt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function da(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var _n=Math.random().toString(36).slice(2),Ye="__reactFiber$"+_n,tr="__reactProps$"+_n,it="__reactContainer$"+_n,Ji="__reactEvents$"+_n,Vp="__reactListeners$"+_n,Wp="__reactHandles$"+_n;function Lt(e){var t=e[Ye];if(t)return t;for(var n=e.parentNode;n;){if(t=n[it]||n[Ye]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=da(e);e!==null;){if(n=e[Ye])return n;e=da(e)}return t}e=n,n=e.parentNode}return null}function vr(e){return e=e[Ye]||e[it],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function en(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(w(33))}function Lo(e){return e[tr]||null}var Zi=[],tn=-1;function It(e){return{current:e}}function V(e){0>tn||(e.current=Zi[tn],Zi[tn]=null,tn--)}function F(e,t){tn++,Zi[tn]=e.current,e.current=t}var Ct={},ce=It(Ct),we=It(!1),Ut=Ct;function mn(e,t){var n=e.type.contextTypes;if(!n)return Ct;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Se(e){return e=e.childContextTypes,e!=null}function ao(){V(we),V(ce)}function pa(e,t,n){if(ce.current!==Ct)throw Error(w(168));F(ce,t),F(we,n)}function sc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(w(108,Id(e)||"Unknown",o));return Y({},n,r)}function so(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ct,Ut=ce.current,F(ce,e),F(we,we.current),!0}function ha(e,t,n){var r=e.stateNode;if(!r)throw Error(w(169));n?(e=sc(e,t,Ut),r.__reactInternalMemoizedMergedChildContext=e,V(we),V(ce),F(ce,e)):V(we),F(we,n)}var Ze=null,Do=!1,si=!1;function cc(e){Ze===null?Ze=[e]:Ze.push(e)}function Hp(e){Do=!0,cc(e)}function Pt(){if(!si&&Ze!==null){si=!0;var e=0,t=U;try{var n=Ze;for(U=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ze=null,Do=!1}catch(o){throw Ze!==null&&(Ze=Ze.slice(e+1)),zs(Vl,Pt),o}finally{U=t,si=!1}}return null}var nn=[],rn=0,co=null,fo=0,Te=[],Re=0,$t=null,et=1,tt="";function Ot(e,t){nn[rn++]=fo,nn[rn++]=co,co=e,fo=t}function fc(e,t,n){Te[Re++]=et,Te[Re++]=tt,Te[Re++]=$t,$t=e;var r=et;e=tt;var o=32-Ve(r)-1;r&=~(1<<o),n+=1;var i=32-Ve(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,et=1<<32-Ve(t)+o|n<<o|r,tt=i+e}else et=1<<i|n<<o|r,tt=e}function Jl(e){e.return!==null&&(Ot(e,1),fc(e,1,0))}function Zl(e){for(;e===co;)co=nn[--rn],nn[rn]=null,fo=nn[--rn],nn[rn]=null;for(;e===$t;)$t=Te[--Re],Te[Re]=null,tt=Te[--Re],Te[Re]=null,et=Te[--Re],Te[Re]=null}var Ce=null,xe=null,H=!1,Be=null;function dc(e,t){var n=je(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ma(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ce=e,xe=wt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ce=e,xe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=$t!==null?{id:et,overflow:tt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=je(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ce=e,xe=null,!0):!1;default:return!1}}function bi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function el(e){if(H){var t=xe;if(t){var n=t;if(!ma(e,t)){if(bi(e))throw Error(w(418));t=wt(n.nextSibling);var r=Ce;t&&ma(e,t)?dc(r,n):(e.flags=e.flags&-4097|2,H=!1,Ce=e)}}else{if(bi(e))throw Error(w(418));e.flags=e.flags&-4097|2,H=!1,Ce=e}}}function va(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ce=e}function Lr(e){if(e!==Ce)return!1;if(!H)return va(e),H=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Xi(e.type,e.memoizedProps)),t&&(t=xe)){if(bi(e))throw pc(),Error(w(418));for(;t;)dc(e,t),t=wt(t.nextSibling)}if(va(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(w(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){xe=wt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}xe=null}}else xe=Ce?wt(e.stateNode.nextSibling):null;return!0}function pc(){for(var e=xe;e;)e=wt(e.nextSibling)}function vn(){xe=Ce=null,H=!1}function bl(e){Be===null?Be=[e]:Be.push(e)}var Kp=at.ReactCurrentBatchConfig;function Tn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(w(309));var r=n.stateNode}if(!r)throw Error(w(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var u=o.refs;l===null?delete u[i]:u[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(w(284));if(!n._owner)throw Error(w(290,e))}return e}function Dr(e,t){throw e=Object.prototype.toString.call(t),Error(w(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ya(e){var t=e._init;return t(e._payload)}function hc(e){function t(d,s){if(e){var f=d.deletions;f===null?(d.deletions=[s],d.flags|=16):f.push(s)}}function n(d,s){if(!e)return null;for(;s!==null;)t(d,s),s=s.sibling;return null}function r(d,s){for(d=new Map;s!==null;)s.key!==null?d.set(s.key,s):d.set(s.index,s),s=s.sibling;return d}function o(d,s){return d=_t(d,s),d.index=0,d.sibling=null,d}function i(d,s,f){return d.index=f,e?(f=d.alternate,f!==null?(f=f.index,f<s?(d.flags|=2,s):f):(d.flags|=2,s)):(d.flags|=1048576,s)}function l(d){return e&&d.alternate===null&&(d.flags|=2),d}function u(d,s,f,v){return s===null||s.tag!==6?(s=vi(f,d.mode,v),s.return=d,s):(s=o(s,f),s.return=d,s)}function a(d,s,f,v){var y=f.type;return y===qt?p(d,s,f.props.children,v,f.key):s!==null&&(s.elementType===y||typeof y=="object"&&y!==null&&y.$$typeof===ct&&ya(y)===s.type)?(v=o(s,f.props),v.ref=Tn(d,s,f),v.return=d,v):(v=Zr(f.type,f.key,f.props,null,d.mode,v),v.ref=Tn(d,s,f),v.return=d,v)}function c(d,s,f,v){return s===null||s.tag!==4||s.stateNode.containerInfo!==f.containerInfo||s.stateNode.implementation!==f.implementation?(s=yi(f,d.mode,v),s.return=d,s):(s=o(s,f.children||[]),s.return=d,s)}function p(d,s,f,v,y){return s===null||s.tag!==7?(s=Mt(f,d.mode,v,y),s.return=d,s):(s=o(s,f),s.return=d,s)}function m(d,s,f){if(typeof s=="string"&&s!==""||typeof s=="number")return s=vi(""+s,d.mode,f),s.return=d,s;if(typeof s=="object"&&s!==null){switch(s.$$typeof){case _r:return f=Zr(s.type,s.key,s.props,null,d.mode,f),f.ref=Tn(d,null,s),f.return=d,f;case Xt:return s=yi(s,d.mode,f),s.return=d,s;case ct:var v=s._init;return m(d,v(s._payload),f)}if(Ln(s)||xn(s))return s=Mt(s,d.mode,f,null),s.return=d,s;Dr(d,s)}return null}function h(d,s,f,v){var y=s!==null?s.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return y!==null?null:u(d,s,""+f,v);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case _r:return f.key===y?a(d,s,f,v):null;case Xt:return f.key===y?c(d,s,f,v):null;case ct:return y=f._init,h(d,s,y(f._payload),v)}if(Ln(f)||xn(f))return y!==null?null:p(d,s,f,v,null);Dr(d,f)}return null}function g(d,s,f,v,y){if(typeof v=="string"&&v!==""||typeof v=="number")return d=d.get(f)||null,u(s,d,""+v,y);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case _r:return d=d.get(v.key===null?f:v.key)||null,a(s,d,v,y);case Xt:return d=d.get(v.key===null?f:v.key)||null,c(s,d,v,y);case ct:var _=v._init;return g(d,s,f,_(v._payload),y)}if(Ln(v)||xn(v))return d=d.get(f)||null,p(s,d,v,y,null);Dr(s,v)}return null}function E(d,s,f,v){for(var y=null,_=null,C=s,P=s=0,W=null;C!==null&&P<f.length;P++){C.index>P?(W=C,C=null):W=C.sibling;var D=h(d,C,f[P],v);if(D===null){C===null&&(C=W);break}e&&C&&D.alternate===null&&t(d,C),s=i(D,s,P),_===null?y=D:_.sibling=D,_=D,C=W}if(P===f.length)return n(d,C),H&&Ot(d,P),y;if(C===null){for(;P<f.length;P++)C=m(d,f[P],v),C!==null&&(s=i(C,s,P),_===null?y=C:_.sibling=C,_=C);return H&&Ot(d,P),y}for(C=r(d,C);P<f.length;P++)W=g(C,d,P,f[P],v),W!==null&&(e&&W.alternate!==null&&C.delete(W.key===null?P:W.key),s=i(W,s,P),_===null?y=W:_.sibling=W,_=W);return e&&C.forEach(function(ve){return t(d,ve)}),H&&Ot(d,P),y}function k(d,s,f,v){var y=xn(f);if(typeof y!="function")throw Error(w(150));if(f=y.call(f),f==null)throw Error(w(151));for(var _=y=null,C=s,P=s=0,W=null,D=f.next();C!==null&&!D.done;P++,D=f.next()){C.index>P?(W=C,C=null):W=C.sibling;var ve=h(d,C,D.value,v);if(ve===null){C===null&&(C=W);break}e&&C&&ve.alternate===null&&t(d,C),s=i(ve,s,P),_===null?y=ve:_.sibling=ve,_=ve,C=W}if(D.done)return n(d,C),H&&Ot(d,P),y;if(C===null){for(;!D.done;P++,D=f.next())D=m(d,D.value,v),D!==null&&(s=i(D,s,P),_===null?y=D:_.sibling=D,_=D);return H&&Ot(d,P),y}for(C=r(d,C);!D.done;P++,D=f.next())D=g(C,d,P,D.value,v),D!==null&&(e&&D.alternate!==null&&C.delete(D.key===null?P:D.key),s=i(D,s,P),_===null?y=D:_.sibling=D,_=D);return e&&C.forEach(function(qe){return t(d,qe)}),H&&Ot(d,P),y}function j(d,s,f,v){if(typeof f=="object"&&f!==null&&f.type===qt&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case _r:e:{for(var y=f.key,_=s;_!==null;){if(_.key===y){if(y=f.type,y===qt){if(_.tag===7){n(d,_.sibling),s=o(_,f.props.children),s.return=d,d=s;break e}}else if(_.elementType===y||typeof y=="object"&&y!==null&&y.$$typeof===ct&&ya(y)===_.type){n(d,_.sibling),s=o(_,f.props),s.ref=Tn(d,_,f),s.return=d,d=s;break e}n(d,_);break}else t(d,_);_=_.sibling}f.type===qt?(s=Mt(f.props.children,d.mode,v,f.key),s.return=d,d=s):(v=Zr(f.type,f.key,f.props,null,d.mode,v),v.ref=Tn(d,s,f),v.return=d,d=v)}return l(d);case Xt:e:{for(_=f.key;s!==null;){if(s.key===_)if(s.tag===4&&s.stateNode.containerInfo===f.containerInfo&&s.stateNode.implementation===f.implementation){n(d,s.sibling),s=o(s,f.children||[]),s.return=d,d=s;break e}else{n(d,s);break}else t(d,s);s=s.sibling}s=yi(f,d.mode,v),s.return=d,d=s}return l(d);case ct:return _=f._init,j(d,s,_(f._payload),v)}if(Ln(f))return E(d,s,f,v);if(xn(f))return k(d,s,f,v);Dr(d,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,s!==null&&s.tag===6?(n(d,s.sibling),s=o(s,f),s.return=d,d=s):(n(d,s),s=vi(f,d.mode,v),s.return=d,d=s),l(d)):n(d,s)}return j}var yn=hc(!0),mc=hc(!1),po=It(null),ho=null,on=null,eu=null;function tu(){eu=on=ho=null}function nu(e){var t=po.current;V(po),e._currentValue=t}function tl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function dn(e,t){ho=e,eu=on=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ge=!0),e.firstContext=null)}function ze(e){var t=e._currentValue;if(eu!==e)if(e={context:e,memoizedValue:t,next:null},on===null){if(ho===null)throw Error(w(308));on=e,ho.dependencies={lanes:0,firstContext:e}}else on=on.next=e;return t}var Dt=null;function ru(e){Dt===null?Dt=[e]:Dt.push(e)}function vc(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,ru(t)):(n.next=o.next,o.next=n),t.interleaved=n,lt(e,r)}function lt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var ft=!1;function ou(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function yc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function nt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function St(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,M&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,lt(e,n)}return o=r.interleaved,o===null?(t.next=t,ru(r)):(t.next=o.next,o.next=t),r.interleaved=t,lt(e,n)}function Qr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Wl(e,n)}}function ga(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function mo(e,t,n,r){var o=e.updateQueue;ft=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,u=o.shared.pending;if(u!==null){o.shared.pending=null;var a=u,c=a.next;a.next=null,l===null?i=c:l.next=c,l=a;var p=e.alternate;p!==null&&(p=p.updateQueue,u=p.lastBaseUpdate,u!==l&&(u===null?p.firstBaseUpdate=c:u.next=c,p.lastBaseUpdate=a))}if(i!==null){var m=o.baseState;l=0,p=c=a=null,u=i;do{var h=u.lane,g=u.eventTime;if((r&h)===h){p!==null&&(p=p.next={eventTime:g,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var E=e,k=u;switch(h=t,g=n,k.tag){case 1:if(E=k.payload,typeof E=="function"){m=E.call(g,m,h);break e}m=E;break e;case 3:E.flags=E.flags&-65537|128;case 0:if(E=k.payload,h=typeof E=="function"?E.call(g,m,h):E,h==null)break e;m=Y({},m,h);break e;case 2:ft=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,h=o.effects,h===null?o.effects=[u]:h.push(u))}else g={eventTime:g,lane:h,tag:u.tag,payload:u.payload,callback:u.callback,next:null},p===null?(c=p=g,a=m):p=p.next=g,l|=h;if(u=u.next,u===null){if(u=o.shared.pending,u===null)break;h=u,u=h.next,h.next=null,o.lastBaseUpdate=h,o.shared.pending=null}}while(!0);if(p===null&&(a=m),o.baseState=a,o.firstBaseUpdate=c,o.lastBaseUpdate=p,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);Bt|=l,e.lanes=l,e.memoizedState=m}}function wa(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(w(191,o));o.call(r)}}}var yr={},Xe=It(yr),nr=It(yr),rr=It(yr);function zt(e){if(e===yr)throw Error(w(174));return e}function iu(e,t){switch(F(rr,t),F(nr,e),F(Xe,yr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:zi(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=zi(t,e)}V(Xe),F(Xe,t)}function gn(){V(Xe),V(nr),V(rr)}function gc(e){zt(rr.current);var t=zt(Xe.current),n=zi(t,e.type);t!==n&&(F(nr,e),F(Xe,n))}function lu(e){nr.current===e&&(V(Xe),V(nr))}var K=It(0);function vo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ci=[];function uu(){for(var e=0;e<ci.length;e++)ci[e]._workInProgressVersionPrimary=null;ci.length=0}var Yr=at.ReactCurrentDispatcher,fi=at.ReactCurrentBatchConfig,Ft=0,Q=null,b=null,ne=null,yo=!1,Bn=!1,or=0,Qp=0;function ue(){throw Error(w(321))}function au(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!He(e[n],t[n]))return!1;return!0}function su(e,t,n,r,o,i){if(Ft=i,Q=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Yr.current=e===null||e.memoizedState===null?qp:Jp,e=n(r,o),Bn){i=0;do{if(Bn=!1,or=0,25<=i)throw Error(w(301));i+=1,ne=b=null,t.updateQueue=null,Yr.current=Zp,e=n(r,o)}while(Bn)}if(Yr.current=go,t=b!==null&&b.next!==null,Ft=0,ne=b=Q=null,yo=!1,t)throw Error(w(300));return e}function cu(){var e=or!==0;return or=0,e}function Qe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ne===null?Q.memoizedState=ne=e:ne=ne.next=e,ne}function Ae(){if(b===null){var e=Q.alternate;e=e!==null?e.memoizedState:null}else e=b.next;var t=ne===null?Q.memoizedState:ne.next;if(t!==null)ne=t,b=e;else{if(e===null)throw Error(w(310));b=e,e={memoizedState:b.memoizedState,baseState:b.baseState,baseQueue:b.baseQueue,queue:b.queue,next:null},ne===null?Q.memoizedState=ne=e:ne=ne.next=e}return ne}function ir(e,t){return typeof t=="function"?t(e):t}function di(e){var t=Ae(),n=t.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=e;var r=b,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var u=l=null,a=null,c=i;do{var p=c.lane;if((Ft&p)===p)a!==null&&(a=a.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var m={lane:p,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};a===null?(u=a=m,l=r):a=a.next=m,Q.lanes|=p,Bt|=p}c=c.next}while(c!==null&&c!==i);a===null?l=r:a.next=u,He(r,t.memoizedState)||(ge=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,Q.lanes|=i,Bt|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function pi(e){var t=Ae(),n=t.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);He(i,t.memoizedState)||(ge=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function wc(){}function Sc(e,t){var n=Q,r=Ae(),o=t(),i=!He(r.memoizedState,o);if(i&&(r.memoizedState=o,ge=!0),r=r.queue,fu(_c.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||ne!==null&&ne.memoizedState.tag&1){if(n.flags|=2048,lr(9,Ec.bind(null,n,r,o,t),void 0,null),re===null)throw Error(w(349));Ft&30||kc(n,t,o)}return o}function kc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Q.updateQueue,t===null?(t={lastEffect:null,stores:null},Q.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ec(e,t,n,r){t.value=n,t.getSnapshot=r,xc(t)&&Cc(e)}function _c(e,t,n){return n(function(){xc(t)&&Cc(e)})}function xc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!He(e,n)}catch{return!0}}function Cc(e){var t=lt(e,1);t!==null&&We(t,e,1,-1)}function Sa(e){var t=Qe();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ir,lastRenderedState:e},t.queue=e,e=e.dispatch=Xp.bind(null,Q,e),[t.memoizedState,e]}function lr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Q.updateQueue,t===null?(t={lastEffect:null,stores:null},Q.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Nc(){return Ae().memoizedState}function Gr(e,t,n,r){var o=Qe();Q.flags|=e,o.memoizedState=lr(1|t,n,void 0,r===void 0?null:r)}function zo(e,t,n,r){var o=Ae();r=r===void 0?null:r;var i=void 0;if(b!==null){var l=b.memoizedState;if(i=l.destroy,r!==null&&au(r,l.deps)){o.memoizedState=lr(t,n,i,r);return}}Q.flags|=e,o.memoizedState=lr(1|t,n,i,r)}function ka(e,t){return Gr(8390656,8,e,t)}function fu(e,t){return zo(2048,8,e,t)}function Ic(e,t){return zo(4,2,e,t)}function Pc(e,t){return zo(4,4,e,t)}function Tc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Rc(e,t,n){return n=n!=null?n.concat([e]):null,zo(4,4,Tc.bind(null,t,e),n)}function du(){}function Oc(e,t){var n=Ae();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&au(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function jc(e,t){var n=Ae();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&au(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Lc(e,t,n){return Ft&21?(He(n,t)||(n=Us(),Q.lanes|=n,Bt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ge=!0),e.memoizedState=n)}function Yp(e,t){var n=U;U=n!==0&&4>n?n:4,e(!0);var r=fi.transition;fi.transition={};try{e(!1),t()}finally{U=n,fi.transition=r}}function Dc(){return Ae().memoizedState}function Gp(e,t,n){var r=Et(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},zc(e))Ac(t,n);else if(n=vc(e,t,n,r),n!==null){var o=de();We(n,e,r,o),Mc(n,t,r)}}function Xp(e,t,n){var r=Et(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(zc(e))Ac(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,u=i(l,n);if(o.hasEagerState=!0,o.eagerState=u,He(u,l)){var a=t.interleaved;a===null?(o.next=o,ru(t)):(o.next=a.next,a.next=o),t.interleaved=o;return}}catch{}finally{}n=vc(e,t,o,r),n!==null&&(o=de(),We(n,e,r,o),Mc(n,t,r))}}function zc(e){var t=e.alternate;return e===Q||t!==null&&t===Q}function Ac(e,t){Bn=yo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Mc(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Wl(e,n)}}var go={readContext:ze,useCallback:ue,useContext:ue,useEffect:ue,useImperativeHandle:ue,useInsertionEffect:ue,useLayoutEffect:ue,useMemo:ue,useReducer:ue,useRef:ue,useState:ue,useDebugValue:ue,useDeferredValue:ue,useTransition:ue,useMutableSource:ue,useSyncExternalStore:ue,useId:ue,unstable_isNewReconciler:!1},qp={readContext:ze,useCallback:function(e,t){return Qe().memoizedState=[e,t===void 0?null:t],e},useContext:ze,useEffect:ka,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Gr(4194308,4,Tc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Gr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Gr(4,2,e,t)},useMemo:function(e,t){var n=Qe();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Qe();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Gp.bind(null,Q,e),[r.memoizedState,e]},useRef:function(e){var t=Qe();return e={current:e},t.memoizedState=e},useState:Sa,useDebugValue:du,useDeferredValue:function(e){return Qe().memoizedState=e},useTransition:function(){var e=Sa(!1),t=e[0];return e=Yp.bind(null,e[1]),Qe().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Q,o=Qe();if(H){if(n===void 0)throw Error(w(407));n=n()}else{if(n=t(),re===null)throw Error(w(349));Ft&30||kc(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,ka(_c.bind(null,r,i,e),[e]),r.flags|=2048,lr(9,Ec.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Qe(),t=re.identifierPrefix;if(H){var n=tt,r=et;n=(r&~(1<<32-Ve(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=or++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Qp++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Jp={readContext:ze,useCallback:Oc,useContext:ze,useEffect:fu,useImperativeHandle:Rc,useInsertionEffect:Ic,useLayoutEffect:Pc,useMemo:jc,useReducer:di,useRef:Nc,useState:function(){return di(ir)},useDebugValue:du,useDeferredValue:function(e){var t=Ae();return Lc(t,b.memoizedState,e)},useTransition:function(){var e=di(ir)[0],t=Ae().memoizedState;return[e,t]},useMutableSource:wc,useSyncExternalStore:Sc,useId:Dc,unstable_isNewReconciler:!1},Zp={readContext:ze,useCallback:Oc,useContext:ze,useEffect:fu,useImperativeHandle:Rc,useInsertionEffect:Ic,useLayoutEffect:Pc,useMemo:jc,useReducer:pi,useRef:Nc,useState:function(){return pi(ir)},useDebugValue:du,useDeferredValue:function(e){var t=Ae();return b===null?t.memoizedState=e:Lc(t,b.memoizedState,e)},useTransition:function(){var e=pi(ir)[0],t=Ae().memoizedState;return[e,t]},useMutableSource:wc,useSyncExternalStore:Sc,useId:Dc,unstable_isNewReconciler:!1};function $e(e,t){if(e&&e.defaultProps){t=Y({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function nl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Y({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ao={isMounted:function(e){return(e=e._reactInternals)?Kt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=de(),o=Et(e),i=nt(r,o);i.payload=t,n!=null&&(i.callback=n),t=St(e,i,o),t!==null&&(We(t,e,o,r),Qr(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=de(),o=Et(e),i=nt(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=St(e,i,o),t!==null&&(We(t,e,o,r),Qr(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=de(),r=Et(e),o=nt(n,r);o.tag=2,t!=null&&(o.callback=t),t=St(e,o,r),t!==null&&(We(t,e,r,n),Qr(t,e,r))}};function Ea(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!Zn(n,r)||!Zn(o,i):!0}function Uc(e,t,n){var r=!1,o=Ct,i=t.contextType;return typeof i=="object"&&i!==null?i=ze(i):(o=Se(t)?Ut:ce.current,r=t.contextTypes,i=(r=r!=null)?mn(e,o):Ct),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ao,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function _a(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ao.enqueueReplaceState(t,t.state,null)}function rl(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},ou(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=ze(i):(i=Se(t)?Ut:ce.current,o.context=mn(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(nl(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Ao.enqueueReplaceState(o,o.state,null),mo(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function wn(e,t){try{var n="",r=t;do n+=Nd(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function hi(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ol(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var bp=typeof WeakMap=="function"?WeakMap:Map;function $c(e,t,n){n=nt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){So||(So=!0,hl=r),ol(e,t)},n}function Fc(e,t,n){n=nt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){ol(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){ol(e,t),typeof r!="function"&&(kt===null?kt=new Set([this]):kt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function xa(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new bp;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=ph.bind(null,e,t,n),t.then(e,e))}function Ca(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Na(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=nt(-1,1),t.tag=2,St(n,t,1))),n.lanes|=1),e)}var eh=at.ReactCurrentOwner,ge=!1;function fe(e,t,n,r){t.child=e===null?mc(t,null,n,r):yn(t,e.child,n,r)}function Ia(e,t,n,r,o){n=n.render;var i=t.ref;return dn(t,o),r=su(e,t,n,r,i,o),n=cu(),e!==null&&!ge?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,ut(e,t,o)):(H&&n&&Jl(t),t.flags|=1,fe(e,t,r,o),t.child)}function Pa(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!Su(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Bc(e,t,i,r,o)):(e=Zr(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:Zn,n(l,r)&&e.ref===t.ref)return ut(e,t,o)}return t.flags|=1,e=_t(i,r),e.ref=t.ref,e.return=t,t.child=e}function Bc(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(Zn(i,r)&&e.ref===t.ref)if(ge=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(ge=!0);else return t.lanes=e.lanes,ut(e,t,o)}return il(e,t,n,r,o)}function Vc(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},F(un,_e),_e|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,F(un,_e),_e|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,F(un,_e),_e|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,F(un,_e),_e|=r;return fe(e,t,o,n),t.child}function Wc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function il(e,t,n,r,o){var i=Se(n)?Ut:ce.current;return i=mn(t,i),dn(t,o),n=su(e,t,n,r,i,o),r=cu(),e!==null&&!ge?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,ut(e,t,o)):(H&&r&&Jl(t),t.flags|=1,fe(e,t,n,o),t.child)}function Ta(e,t,n,r,o){if(Se(n)){var i=!0;so(t)}else i=!1;if(dn(t,o),t.stateNode===null)Xr(e,t),Uc(t,n,r),rl(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,u=t.memoizedProps;l.props=u;var a=l.context,c=n.contextType;typeof c=="object"&&c!==null?c=ze(c):(c=Se(n)?Ut:ce.current,c=mn(t,c));var p=n.getDerivedStateFromProps,m=typeof p=="function"||typeof l.getSnapshotBeforeUpdate=="function";m||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u!==r||a!==c)&&_a(t,l,r,c),ft=!1;var h=t.memoizedState;l.state=h,mo(t,r,l,o),a=t.memoizedState,u!==r||h!==a||we.current||ft?(typeof p=="function"&&(nl(t,n,p,r),a=t.memoizedState),(u=ft||Ea(t,n,u,r,h,a,c))?(m||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),l.props=r,l.state=a,l.context=c,r=u):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,yc(e,t),u=t.memoizedProps,c=t.type===t.elementType?u:$e(t.type,u),l.props=c,m=t.pendingProps,h=l.context,a=n.contextType,typeof a=="object"&&a!==null?a=ze(a):(a=Se(n)?Ut:ce.current,a=mn(t,a));var g=n.getDerivedStateFromProps;(p=typeof g=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u!==m||h!==a)&&_a(t,l,r,a),ft=!1,h=t.memoizedState,l.state=h,mo(t,r,l,o);var E=t.memoizedState;u!==m||h!==E||we.current||ft?(typeof g=="function"&&(nl(t,n,g,r),E=t.memoizedState),(c=ft||Ea(t,n,c,r,h,E,a)||!1)?(p||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,E,a),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,E,a)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||u===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=E),l.props=r,l.state=E,l.context=a,r=c):(typeof l.componentDidUpdate!="function"||u===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return ll(e,t,n,r,i,o)}function ll(e,t,n,r,o,i){Wc(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&ha(t,n,!1),ut(e,t,i);r=t.stateNode,eh.current=t;var u=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=yn(t,e.child,null,i),t.child=yn(t,null,u,i)):fe(e,t,u,i),t.memoizedState=r.state,o&&ha(t,n,!0),t.child}function Hc(e){var t=e.stateNode;t.pendingContext?pa(e,t.pendingContext,t.pendingContext!==t.context):t.context&&pa(e,t.context,!1),iu(e,t.containerInfo)}function Ra(e,t,n,r,o){return vn(),bl(o),t.flags|=256,fe(e,t,n,r),t.child}var ul={dehydrated:null,treeContext:null,retryLane:0};function al(e){return{baseLanes:e,cachePool:null,transitions:null}}function Kc(e,t,n){var r=t.pendingProps,o=K.current,i=!1,l=(t.flags&128)!==0,u;if((u=l)||(u=e!==null&&e.memoizedState===null?!1:(o&2)!==0),u?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),F(K,o&1),e===null)return el(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=$o(l,r,0,null),e=Mt(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=al(n),t.memoizedState=ul,e):pu(t,l));if(o=e.memoizedState,o!==null&&(u=o.dehydrated,u!==null))return th(e,t,l,r,u,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,u=o.sibling;var a={mode:"hidden",children:r.children};return!(l&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=_t(o,a),r.subtreeFlags=o.subtreeFlags&14680064),u!==null?i=_t(u,i):(i=Mt(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?al(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=ul,r}return i=e.child,e=i.sibling,r=_t(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function pu(e,t){return t=$o({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function zr(e,t,n,r){return r!==null&&bl(r),yn(t,e.child,null,n),e=pu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function th(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=hi(Error(w(422))),zr(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=$o({mode:"visible",children:r.children},o,0,null),i=Mt(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&yn(t,e.child,null,l),t.child.memoizedState=al(l),t.memoizedState=ul,i);if(!(t.mode&1))return zr(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var u=r.dgst;return r=u,i=Error(w(419)),r=hi(i,r,void 0),zr(e,t,l,r)}if(u=(l&e.childLanes)!==0,ge||u){if(r=re,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,lt(e,o),We(r,e,o,-1))}return wu(),r=hi(Error(w(421))),zr(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=hh.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,xe=wt(o.nextSibling),Ce=t,H=!0,Be=null,e!==null&&(Te[Re++]=et,Te[Re++]=tt,Te[Re++]=$t,et=e.id,tt=e.overflow,$t=t),t=pu(t,r.children),t.flags|=4096,t)}function Oa(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),tl(e.return,t,n)}function mi(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Qc(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(fe(e,t,r.children,n),r=K.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Oa(e,n,t);else if(e.tag===19)Oa(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(F(K,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&vo(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),mi(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&vo(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}mi(t,!0,n,null,i);break;case"together":mi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Xr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ut(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Bt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(w(153));if(t.child!==null){for(e=t.child,n=_t(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=_t(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function nh(e,t,n){switch(t.tag){case 3:Hc(t),vn();break;case 5:gc(t);break;case 1:Se(t.type)&&so(t);break;case 4:iu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;F(po,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(F(K,K.current&1),t.flags|=128,null):n&t.child.childLanes?Kc(e,t,n):(F(K,K.current&1),e=ut(e,t,n),e!==null?e.sibling:null);F(K,K.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Qc(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),F(K,K.current),r)break;return null;case 22:case 23:return t.lanes=0,Vc(e,t,n)}return ut(e,t,n)}var Yc,sl,Gc,Xc;Yc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};sl=function(){};Gc=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,zt(Xe.current);var i=null;switch(n){case"input":o=Oi(e,o),r=Oi(e,r),i=[];break;case"select":o=Y({},o,{value:void 0}),r=Y({},r,{value:void 0}),i=[];break;case"textarea":o=Di(e,o),r=Di(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=uo)}Ai(n,r);var l;n=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var u=o[c];for(l in u)u.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Kn.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var a=r[c];if(u=o?.[c],r.hasOwnProperty(c)&&a!==u&&(a!=null||u!=null))if(c==="style")if(u){for(l in u)!u.hasOwnProperty(l)||a&&a.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in a)a.hasOwnProperty(l)&&u[l]!==a[l]&&(n||(n={}),n[l]=a[l])}else n||(i||(i=[]),i.push(c,n)),n=a;else c==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,u=u?u.__html:void 0,a!=null&&u!==a&&(i=i||[]).push(c,a)):c==="children"?typeof a!="string"&&typeof a!="number"||(i=i||[]).push(c,""+a):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Kn.hasOwnProperty(c)?(a!=null&&c==="onScroll"&&B("scroll",e),i||u===a||(i=[])):(i=i||[]).push(c,a))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};Xc=function(e,t,n,r){n!==r&&(t.flags|=4)};function Rn(e,t){if(!H)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ae(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function rh(e,t,n){var r=t.pendingProps;switch(Zl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ae(t),null;case 1:return Se(t.type)&&ao(),ae(t),null;case 3:return r=t.stateNode,gn(),V(we),V(ce),uu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Lr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Be!==null&&(yl(Be),Be=null))),sl(e,t),ae(t),null;case 5:lu(t);var o=zt(rr.current);if(n=t.type,e!==null&&t.stateNode!=null)Gc(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(w(166));return ae(t),null}if(e=zt(Xe.current),Lr(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Ye]=t,r[tr]=i,e=(t.mode&1)!==0,n){case"dialog":B("cancel",r),B("close",r);break;case"iframe":case"object":case"embed":B("load",r);break;case"video":case"audio":for(o=0;o<zn.length;o++)B(zn[o],r);break;case"source":B("error",r);break;case"img":case"image":case"link":B("error",r),B("load",r);break;case"details":B("toggle",r);break;case"input":Fu(r,i),B("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},B("invalid",r);break;case"textarea":Vu(r,i),B("invalid",r)}Ai(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var u=i[l];l==="children"?typeof u=="string"?r.textContent!==u&&(i.suppressHydrationWarning!==!0&&jr(r.textContent,u,e),o=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(i.suppressHydrationWarning!==!0&&jr(r.textContent,u,e),o=["children",""+u]):Kn.hasOwnProperty(l)&&u!=null&&l==="onScroll"&&B("scroll",r)}switch(n){case"input":xr(r),Bu(r,i,!0);break;case"textarea":xr(r),Wu(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=uo)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=_s(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[Ye]=t,e[tr]=r,Yc(e,t,!1,!1),t.stateNode=e;e:{switch(l=Mi(n,r),n){case"dialog":B("cancel",e),B("close",e),o=r;break;case"iframe":case"object":case"embed":B("load",e),o=r;break;case"video":case"audio":for(o=0;o<zn.length;o++)B(zn[o],e);o=r;break;case"source":B("error",e),o=r;break;case"img":case"image":case"link":B("error",e),B("load",e),o=r;break;case"details":B("toggle",e),o=r;break;case"input":Fu(e,r),o=Oi(e,r),B("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=Y({},r,{value:void 0}),B("invalid",e);break;case"textarea":Vu(e,r),o=Di(e,r),B("invalid",e);break;default:o=r}Ai(n,o),u=o;for(i in u)if(u.hasOwnProperty(i)){var a=u[i];i==="style"?Ns(e,a):i==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&xs(e,a)):i==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Qn(e,a):typeof a=="number"&&Qn(e,""+a):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Kn.hasOwnProperty(i)?a!=null&&i==="onScroll"&&B("scroll",e):a!=null&&Ml(e,i,a,l))}switch(n){case"input":xr(e),Bu(e,r,!1);break;case"textarea":xr(e),Wu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+xt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?an(e,!!r.multiple,i,!1):r.defaultValue!=null&&an(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=uo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ae(t),null;case 6:if(e&&t.stateNode!=null)Xc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(w(166));if(n=zt(rr.current),zt(Xe.current),Lr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ye]=t,(i=r.nodeValue!==n)&&(e=Ce,e!==null))switch(e.tag){case 3:jr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&jr(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ye]=t,t.stateNode=r}return ae(t),null;case 13:if(V(K),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(H&&xe!==null&&t.mode&1&&!(t.flags&128))pc(),vn(),t.flags|=98560,i=!1;else if(i=Lr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(w(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(w(317));i[Ye]=t}else vn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ae(t),i=!1}else Be!==null&&(yl(Be),Be=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||K.current&1?ee===0&&(ee=3):wu())),t.updateQueue!==null&&(t.flags|=4),ae(t),null);case 4:return gn(),sl(e,t),e===null&&bn(t.stateNode.containerInfo),ae(t),null;case 10:return nu(t.type._context),ae(t),null;case 17:return Se(t.type)&&ao(),ae(t),null;case 19:if(V(K),i=t.memoizedState,i===null)return ae(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)Rn(i,!1);else{if(ee!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=vo(e),l!==null){for(t.flags|=128,Rn(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return F(K,K.current&1|2),t.child}e=e.sibling}i.tail!==null&&q()>Sn&&(t.flags|=128,r=!0,Rn(i,!1),t.lanes=4194304)}else{if(!r)if(e=vo(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Rn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!H)return ae(t),null}else 2*q()-i.renderingStartTime>Sn&&n!==1073741824&&(t.flags|=128,r=!0,Rn(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=q(),t.sibling=null,n=K.current,F(K,r?n&1|2:n&1),t):(ae(t),null);case 22:case 23:return gu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?_e&1073741824&&(ae(t),t.subtreeFlags&6&&(t.flags|=8192)):ae(t),null;case 24:return null;case 25:return null}throw Error(w(156,t.tag))}function oh(e,t){switch(Zl(t),t.tag){case 1:return Se(t.type)&&ao(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return gn(),V(we),V(ce),uu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return lu(t),null;case 13:if(V(K),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(w(340));vn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return V(K),null;case 4:return gn(),null;case 10:return nu(t.type._context),null;case 22:case 23:return gu(),null;case 24:return null;default:return null}}var Ar=!1,se=!1,ih=typeof WeakSet=="function"?WeakSet:Set,N=null;function ln(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){G(e,t,r)}else n.current=null}function cl(e,t,n){try{n()}catch(r){G(e,t,r)}}var ja=!1;function lh(e,t){if(Yi=oo,e=ec(),ql(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,u=-1,a=-1,c=0,p=0,m=e,h=null;t:for(;;){for(var g;m!==n||o!==0&&m.nodeType!==3||(u=l+o),m!==i||r!==0&&m.nodeType!==3||(a=l+r),m.nodeType===3&&(l+=m.nodeValue.length),(g=m.firstChild)!==null;)h=m,m=g;for(;;){if(m===e)break t;if(h===n&&++c===o&&(u=l),h===i&&++p===r&&(a=l),(g=m.nextSibling)!==null)break;m=h,h=m.parentNode}m=g}n=u===-1||a===-1?null:{start:u,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Gi={focusedElem:e,selectionRange:n},oo=!1,N=t;N!==null;)if(t=N,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,N=e;else for(;N!==null;){t=N;try{var E=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(E!==null){var k=E.memoizedProps,j=E.memoizedState,d=t.stateNode,s=d.getSnapshotBeforeUpdate(t.elementType===t.type?k:$e(t.type,k),j);d.__reactInternalSnapshotBeforeUpdate=s}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(w(163))}}catch(v){G(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,N=e;break}N=t.return}return E=ja,ja=!1,E}function Vn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&cl(t,n,i)}o=o.next}while(o!==r)}}function Mo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function fl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function qc(e){var t=e.alternate;t!==null&&(e.alternate=null,qc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ye],delete t[tr],delete t[Ji],delete t[Vp],delete t[Wp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Jc(e){return e.tag===5||e.tag===3||e.tag===4}function La(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Jc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function dl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=uo));else if(r!==4&&(e=e.child,e!==null))for(dl(e,t,n),e=e.sibling;e!==null;)dl(e,t,n),e=e.sibling}function pl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(pl(e,t,n),e=e.sibling;e!==null;)pl(e,t,n),e=e.sibling}var oe=null,Fe=!1;function st(e,t,n){for(n=n.child;n!==null;)Zc(e,t,n),n=n.sibling}function Zc(e,t,n){if(Ge&&typeof Ge.onCommitFiberUnmount=="function")try{Ge.onCommitFiberUnmount(To,n)}catch{}switch(n.tag){case 5:se||ln(n,t);case 6:var r=oe,o=Fe;oe=null,st(e,t,n),oe=r,Fe=o,oe!==null&&(Fe?(e=oe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):oe.removeChild(n.stateNode));break;case 18:oe!==null&&(Fe?(e=oe,n=n.stateNode,e.nodeType===8?ai(e.parentNode,n):e.nodeType===1&&ai(e,n),qn(e)):ai(oe,n.stateNode));break;case 4:r=oe,o=Fe,oe=n.stateNode.containerInfo,Fe=!0,st(e,t,n),oe=r,Fe=o;break;case 0:case 11:case 14:case 15:if(!se&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&cl(n,t,l),o=o.next}while(o!==r)}st(e,t,n);break;case 1:if(!se&&(ln(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(u){G(n,t,u)}st(e,t,n);break;case 21:st(e,t,n);break;case 22:n.mode&1?(se=(r=se)||n.memoizedState!==null,st(e,t,n),se=r):st(e,t,n);break;default:st(e,t,n)}}function Da(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new ih),t.forEach(function(r){var o=mh.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Ue(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,u=l;e:for(;u!==null;){switch(u.tag){case 5:oe=u.stateNode,Fe=!1;break e;case 3:oe=u.stateNode.containerInfo,Fe=!0;break e;case 4:oe=u.stateNode.containerInfo,Fe=!0;break e}u=u.return}if(oe===null)throw Error(w(160));Zc(i,l,o),oe=null,Fe=!1;var a=o.alternate;a!==null&&(a.return=null),o.return=null}catch(c){G(o,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)bc(t,e),t=t.sibling}function bc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ue(t,e),Ke(e),r&4){try{Vn(3,e,e.return),Mo(3,e)}catch(k){G(e,e.return,k)}try{Vn(5,e,e.return)}catch(k){G(e,e.return,k)}}break;case 1:Ue(t,e),Ke(e),r&512&&n!==null&&ln(n,n.return);break;case 5:if(Ue(t,e),Ke(e),r&512&&n!==null&&ln(n,n.return),e.flags&32){var o=e.stateNode;try{Qn(o,"")}catch(k){G(e,e.return,k)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,u=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{u==="input"&&i.type==="radio"&&i.name!=null&&ks(o,i),Mi(u,l);var c=Mi(u,i);for(l=0;l<a.length;l+=2){var p=a[l],m=a[l+1];p==="style"?Ns(o,m):p==="dangerouslySetInnerHTML"?xs(o,m):p==="children"?Qn(o,m):Ml(o,p,m,c)}switch(u){case"input":ji(o,i);break;case"textarea":Es(o,i);break;case"select":var h=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var g=i.value;g!=null?an(o,!!i.multiple,g,!1):h!==!!i.multiple&&(i.defaultValue!=null?an(o,!!i.multiple,i.defaultValue,!0):an(o,!!i.multiple,i.multiple?[]:"",!1))}o[tr]=i}catch(k){G(e,e.return,k)}}break;case 6:if(Ue(t,e),Ke(e),r&4){if(e.stateNode===null)throw Error(w(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(k){G(e,e.return,k)}}break;case 3:if(Ue(t,e),Ke(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{qn(t.containerInfo)}catch(k){G(e,e.return,k)}break;case 4:Ue(t,e),Ke(e);break;case 13:Ue(t,e),Ke(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(vu=q())),r&4&&Da(e);break;case 22:if(p=n!==null&&n.memoizedState!==null,e.mode&1?(se=(c=se)||p,Ue(t,e),se=c):Ue(t,e),Ke(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!p&&e.mode&1)for(N=e,p=e.child;p!==null;){for(m=N=p;N!==null;){switch(h=N,g=h.child,h.tag){case 0:case 11:case 14:case 15:Vn(4,h,h.return);break;case 1:ln(h,h.return);var E=h.stateNode;if(typeof E.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,E.props=t.memoizedProps,E.state=t.memoizedState,E.componentWillUnmount()}catch(k){G(r,n,k)}}break;case 5:ln(h,h.return);break;case 22:if(h.memoizedState!==null){Aa(m);continue}}g!==null?(g.return=h,N=g):Aa(m)}p=p.sibling}e:for(p=null,m=e;;){if(m.tag===5){if(p===null){p=m;try{o=m.stateNode,c?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(u=m.stateNode,a=m.memoizedProps.style,l=a!=null&&a.hasOwnProperty("display")?a.display:null,u.style.display=Cs("display",l))}catch(k){G(e,e.return,k)}}}else if(m.tag===6){if(p===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(k){G(e,e.return,k)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;p===m&&(p=null),m=m.return}p===m&&(p=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Ue(t,e),Ke(e),r&4&&Da(e);break;case 21:break;default:Ue(t,e),Ke(e)}}function Ke(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Jc(n)){var r=n;break e}n=n.return}throw Error(w(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Qn(o,""),r.flags&=-33);var i=La(e);pl(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,u=La(e);dl(e,u,l);break;default:throw Error(w(161))}}catch(a){G(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function uh(e,t,n){N=e,ef(e)}function ef(e,t,n){for(var r=(e.mode&1)!==0;N!==null;){var o=N,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||Ar;if(!l){var u=o.alternate,a=u!==null&&u.memoizedState!==null||se;u=Ar;var c=se;if(Ar=l,(se=a)&&!c)for(N=o;N!==null;)l=N,a=l.child,l.tag===22&&l.memoizedState!==null?Ma(o):a!==null?(a.return=l,N=a):Ma(o);for(;i!==null;)N=i,ef(i),i=i.sibling;N=o,Ar=u,se=c}za(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,N=i):za(e)}}function za(e){for(;N!==null;){var t=N;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:se||Mo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!se)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:$e(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&wa(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}wa(t,l,n)}break;case 5:var u=t.stateNode;if(n===null&&t.flags&4){n=u;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var p=c.memoizedState;if(p!==null){var m=p.dehydrated;m!==null&&qn(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(w(163))}se||t.flags&512&&fl(t)}catch(h){G(t,t.return,h)}}if(t===e){N=null;break}if(n=t.sibling,n!==null){n.return=t.return,N=n;break}N=t.return}}function Aa(e){for(;N!==null;){var t=N;if(t===e){N=null;break}var n=t.sibling;if(n!==null){n.return=t.return,N=n;break}N=t.return}}function Ma(e){for(;N!==null;){var t=N;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Mo(4,t)}catch(a){G(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(a){G(t,o,a)}}var i=t.return;try{fl(t)}catch(a){G(t,i,a)}break;case 5:var l=t.return;try{fl(t)}catch(a){G(t,l,a)}}}catch(a){G(t,t.return,a)}if(t===e){N=null;break}var u=t.sibling;if(u!==null){u.return=t.return,N=u;break}N=t.return}}var ah=Math.ceil,wo=at.ReactCurrentDispatcher,hu=at.ReactCurrentOwner,De=at.ReactCurrentBatchConfig,M=0,re=null,J=null,ie=0,_e=0,un=It(0),ee=0,ur=null,Bt=0,Uo=0,mu=0,Wn=null,ye=null,vu=0,Sn=1/0,Je=null,So=!1,hl=null,kt=null,Mr=!1,mt=null,ko=0,Hn=0,ml=null,qr=-1,Jr=0;function de(){return M&6?q():qr!==-1?qr:qr=q()}function Et(e){return e.mode&1?M&2&&ie!==0?ie&-ie:Kp.transition!==null?(Jr===0&&(Jr=Us()),Jr):(e=U,e!==0||(e=window.event,e=e===void 0?16:Ks(e.type)),e):1}function We(e,t,n,r){if(50<Hn)throw Hn=0,ml=null,Error(w(185));hr(e,n,r),(!(M&2)||e!==re)&&(e===re&&(!(M&2)&&(Uo|=n),ee===4&&pt(e,ie)),ke(e,r),n===1&&M===0&&!(t.mode&1)&&(Sn=q()+500,Do&&Pt()))}function ke(e,t){var n=e.callbackNode;Kd(e,t);var r=ro(e,e===re?ie:0);if(r===0)n!==null&&Qu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Qu(n),t===1)e.tag===0?Hp(Ua.bind(null,e)):cc(Ua.bind(null,e)),Fp(function(){!(M&6)&&Pt()}),n=null;else{switch($s(r)){case 1:n=Vl;break;case 4:n=As;break;case 16:n=no;break;case 536870912:n=Ms;break;default:n=no}n=sf(n,tf.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function tf(e,t){if(qr=-1,Jr=0,M&6)throw Error(w(327));var n=e.callbackNode;if(pn()&&e.callbackNode!==n)return null;var r=ro(e,e===re?ie:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Eo(e,r);else{t=r;var o=M;M|=2;var i=rf();(re!==e||ie!==t)&&(Je=null,Sn=q()+500,At(e,t));do try{fh();break}catch(u){nf(e,u)}while(!0);tu(),wo.current=i,M=o,J!==null?t=0:(re=null,ie=0,t=ee)}if(t!==0){if(t===2&&(o=Vi(e),o!==0&&(r=o,t=vl(e,o))),t===1)throw n=ur,At(e,0),pt(e,r),ke(e,q()),n;if(t===6)pt(e,r);else{if(o=e.current.alternate,!(r&30)&&!sh(o)&&(t=Eo(e,r),t===2&&(i=Vi(e),i!==0&&(r=i,t=vl(e,i))),t===1))throw n=ur,At(e,0),pt(e,r),ke(e,q()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(w(345));case 2:jt(e,ye,Je);break;case 3:if(pt(e,r),(r&130023424)===r&&(t=vu+500-q(),10<t)){if(ro(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){de(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=qi(jt.bind(null,e,ye,Je),t);break}jt(e,ye,Je);break;case 4:if(pt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-Ve(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*ah(r/1960))-r,10<r){e.timeoutHandle=qi(jt.bind(null,e,ye,Je),r);break}jt(e,ye,Je);break;case 5:jt(e,ye,Je);break;default:throw Error(w(329))}}}return ke(e,q()),e.callbackNode===n?tf.bind(null,e):null}function vl(e,t){var n=Wn;return e.current.memoizedState.isDehydrated&&(At(e,t).flags|=256),e=Eo(e,t),e!==2&&(t=ye,ye=n,t!==null&&yl(t)),e}function yl(e){ye===null?ye=e:ye.push.apply(ye,e)}function sh(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!He(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function pt(e,t){for(t&=~mu,t&=~Uo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ve(t),r=1<<n;e[n]=-1,t&=~r}}function Ua(e){if(M&6)throw Error(w(327));pn();var t=ro(e,0);if(!(t&1))return ke(e,q()),null;var n=Eo(e,t);if(e.tag!==0&&n===2){var r=Vi(e);r!==0&&(t=r,n=vl(e,r))}if(n===1)throw n=ur,At(e,0),pt(e,t),ke(e,q()),n;if(n===6)throw Error(w(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,jt(e,ye,Je),ke(e,q()),null}function yu(e,t){var n=M;M|=1;try{return e(t)}finally{M=n,M===0&&(Sn=q()+500,Do&&Pt())}}function Vt(e){mt!==null&&mt.tag===0&&!(M&6)&&pn();var t=M;M|=1;var n=De.transition,r=U;try{if(De.transition=null,U=1,e)return e()}finally{U=r,De.transition=n,M=t,!(M&6)&&Pt()}}function gu(){_e=un.current,V(un)}function At(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,$p(n)),J!==null)for(n=J.return;n!==null;){var r=n;switch(Zl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ao();break;case 3:gn(),V(we),V(ce),uu();break;case 5:lu(r);break;case 4:gn();break;case 13:V(K);break;case 19:V(K);break;case 10:nu(r.type._context);break;case 22:case 23:gu()}n=n.return}if(re=e,J=e=_t(e.current,null),ie=_e=t,ee=0,ur=null,mu=Uo=Bt=0,ye=Wn=null,Dt!==null){for(t=0;t<Dt.length;t++)if(n=Dt[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}Dt=null}return e}function nf(e,t){do{var n=J;try{if(tu(),Yr.current=go,yo){for(var r=Q.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}yo=!1}if(Ft=0,ne=b=Q=null,Bn=!1,or=0,hu.current=null,n===null||n.return===null){ee=1,ur=t,J=null;break}e:{var i=e,l=n.return,u=n,a=t;if(t=ie,u.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var c=a,p=u,m=p.tag;if(!(p.mode&1)&&(m===0||m===11||m===15)){var h=p.alternate;h?(p.updateQueue=h.updateQueue,p.memoizedState=h.memoizedState,p.lanes=h.lanes):(p.updateQueue=null,p.memoizedState=null)}var g=Ca(l);if(g!==null){g.flags&=-257,Na(g,l,u,i,t),g.mode&1&&xa(i,c,t),t=g,a=c;var E=t.updateQueue;if(E===null){var k=new Set;k.add(a),t.updateQueue=k}else E.add(a);break e}else{if(!(t&1)){xa(i,c,t),wu();break e}a=Error(w(426))}}else if(H&&u.mode&1){var j=Ca(l);if(j!==null){!(j.flags&65536)&&(j.flags|=256),Na(j,l,u,i,t),bl(wn(a,u));break e}}i=a=wn(a,u),ee!==4&&(ee=2),Wn===null?Wn=[i]:Wn.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var d=$c(i,a,t);ga(i,d);break e;case 1:u=a;var s=i.type,f=i.stateNode;if(!(i.flags&128)&&(typeof s.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(kt===null||!kt.has(f)))){i.flags|=65536,t&=-t,i.lanes|=t;var v=Fc(i,u,t);ga(i,v);break e}}i=i.return}while(i!==null)}lf(n)}catch(y){t=y,J===n&&n!==null&&(J=n=n.return);continue}break}while(!0)}function rf(){var e=wo.current;return wo.current=go,e===null?go:e}function wu(){(ee===0||ee===3||ee===2)&&(ee=4),re===null||!(Bt&268435455)&&!(Uo&268435455)||pt(re,ie)}function Eo(e,t){var n=M;M|=2;var r=rf();(re!==e||ie!==t)&&(Je=null,At(e,t));do try{ch();break}catch(o){nf(e,o)}while(!0);if(tu(),M=n,wo.current=r,J!==null)throw Error(w(261));return re=null,ie=0,ee}function ch(){for(;J!==null;)of(J)}function fh(){for(;J!==null&&!Ad();)of(J)}function of(e){var t=af(e.alternate,e,_e);e.memoizedProps=e.pendingProps,t===null?lf(e):J=t,hu.current=null}function lf(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=oh(n,t),n!==null){n.flags&=32767,J=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ee=6,J=null;return}}else if(n=rh(n,t,_e),n!==null){J=n;return}if(t=t.sibling,t!==null){J=t;return}J=t=e}while(t!==null);ee===0&&(ee=5)}function jt(e,t,n){var r=U,o=De.transition;try{De.transition=null,U=1,dh(e,t,n,r)}finally{De.transition=o,U=r}return null}function dh(e,t,n,r){do pn();while(mt!==null);if(M&6)throw Error(w(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(w(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Qd(e,i),e===re&&(J=re=null,ie=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Mr||(Mr=!0,sf(no,function(){return pn(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=De.transition,De.transition=null;var l=U;U=1;var u=M;M|=4,hu.current=null,lh(e,n),bc(n,e),jp(Gi),oo=!!Yi,Gi=Yi=null,e.current=n,uh(n),Md(),M=u,U=l,De.transition=i}else e.current=n;if(Mr&&(Mr=!1,mt=e,ko=o),i=e.pendingLanes,i===0&&(kt=null),Fd(n.stateNode),ke(e,q()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(So)throw So=!1,e=hl,hl=null,e;return ko&1&&e.tag!==0&&pn(),i=e.pendingLanes,i&1?e===ml?Hn++:(Hn=0,ml=e):Hn=0,Pt(),null}function pn(){if(mt!==null){var e=$s(ko),t=De.transition,n=U;try{if(De.transition=null,U=16>e?16:e,mt===null)var r=!1;else{if(e=mt,mt=null,ko=0,M&6)throw Error(w(331));var o=M;for(M|=4,N=e.current;N!==null;){var i=N,l=i.child;if(N.flags&16){var u=i.deletions;if(u!==null){for(var a=0;a<u.length;a++){var c=u[a];for(N=c;N!==null;){var p=N;switch(p.tag){case 0:case 11:case 15:Vn(8,p,i)}var m=p.child;if(m!==null)m.return=p,N=m;else for(;N!==null;){p=N;var h=p.sibling,g=p.return;if(qc(p),p===c){N=null;break}if(h!==null){h.return=g,N=h;break}N=g}}}var E=i.alternate;if(E!==null){var k=E.child;if(k!==null){E.child=null;do{var j=k.sibling;k.sibling=null,k=j}while(k!==null)}}N=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,N=l;else e:for(;N!==null;){if(i=N,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Vn(9,i,i.return)}var d=i.sibling;if(d!==null){d.return=i.return,N=d;break e}N=i.return}}var s=e.current;for(N=s;N!==null;){l=N;var f=l.child;if(l.subtreeFlags&2064&&f!==null)f.return=l,N=f;else e:for(l=s;N!==null;){if(u=N,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:Mo(9,u)}}catch(y){G(u,u.return,y)}if(u===l){N=null;break e}var v=u.sibling;if(v!==null){v.return=u.return,N=v;break e}N=u.return}}if(M=o,Pt(),Ge&&typeof Ge.onPostCommitFiberRoot=="function")try{Ge.onPostCommitFiberRoot(To,e)}catch{}r=!0}return r}finally{U=n,De.transition=t}}return!1}function $a(e,t,n){t=wn(n,t),t=$c(e,t,1),e=St(e,t,1),t=de(),e!==null&&(hr(e,1,t),ke(e,t))}function G(e,t,n){if(e.tag===3)$a(e,e,n);else for(;t!==null;){if(t.tag===3){$a(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(kt===null||!kt.has(r))){e=wn(n,e),e=Fc(t,e,1),t=St(t,e,1),e=de(),t!==null&&(hr(t,1,e),ke(t,e));break}}t=t.return}}function ph(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=de(),e.pingedLanes|=e.suspendedLanes&n,re===e&&(ie&n)===n&&(ee===4||ee===3&&(ie&130023424)===ie&&500>q()-vu?At(e,0):mu|=n),ke(e,t)}function uf(e,t){t===0&&(e.mode&1?(t=Ir,Ir<<=1,!(Ir&130023424)&&(Ir=4194304)):t=1);var n=de();e=lt(e,t),e!==null&&(hr(e,t,n),ke(e,n))}function hh(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),uf(e,n)}function mh(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(w(314))}r!==null&&r.delete(t),uf(e,n)}var af;af=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||we.current)ge=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ge=!1,nh(e,t,n);ge=!!(e.flags&131072)}else ge=!1,H&&t.flags&1048576&&fc(t,fo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Xr(e,t),e=t.pendingProps;var o=mn(t,ce.current);dn(t,n),o=su(null,t,r,e,o,n);var i=cu();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Se(r)?(i=!0,so(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,ou(t),o.updater=Ao,t.stateNode=o,o._reactInternals=t,rl(t,r,e,n),t=ll(null,t,r,!0,i,n)):(t.tag=0,H&&i&&Jl(t),fe(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Xr(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=yh(r),e=$e(r,e),o){case 0:t=il(null,t,r,e,n);break e;case 1:t=Ta(null,t,r,e,n);break e;case 11:t=Ia(null,t,r,e,n);break e;case 14:t=Pa(null,t,r,$e(r.type,e),n);break e}throw Error(w(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:$e(r,o),il(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:$e(r,o),Ta(e,t,r,o,n);case 3:e:{if(Hc(t),e===null)throw Error(w(387));r=t.pendingProps,i=t.memoizedState,o=i.element,yc(e,t),mo(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=wn(Error(w(423)),t),t=Ra(e,t,r,n,o);break e}else if(r!==o){o=wn(Error(w(424)),t),t=Ra(e,t,r,n,o);break e}else for(xe=wt(t.stateNode.containerInfo.firstChild),Ce=t,H=!0,Be=null,n=mc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(vn(),r===o){t=ut(e,t,n);break e}fe(e,t,r,n)}t=t.child}return t;case 5:return gc(t),e===null&&el(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,Xi(r,o)?l=null:i!==null&&Xi(r,i)&&(t.flags|=32),Wc(e,t),fe(e,t,l,n),t.child;case 6:return e===null&&el(t),null;case 13:return Kc(e,t,n);case 4:return iu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=yn(t,null,r,n):fe(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:$e(r,o),Ia(e,t,r,o,n);case 7:return fe(e,t,t.pendingProps,n),t.child;case 8:return fe(e,t,t.pendingProps.children,n),t.child;case 12:return fe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,F(po,r._currentValue),r._currentValue=l,i!==null)if(He(i.value,l)){if(i.children===o.children&&!we.current){t=ut(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var u=i.dependencies;if(u!==null){l=i.child;for(var a=u.firstContext;a!==null;){if(a.context===r){if(i.tag===1){a=nt(-1,n&-n),a.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var p=c.pending;p===null?a.next=a:(a.next=p.next,p.next=a),c.pending=a}}i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),tl(i.return,n,t),u.lanes|=n;break}a=a.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(w(341));l.lanes|=n,u=l.alternate,u!==null&&(u.lanes|=n),tl(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}fe(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,dn(t,n),o=ze(o),r=r(o),t.flags|=1,fe(e,t,r,n),t.child;case 14:return r=t.type,o=$e(r,t.pendingProps),o=$e(r.type,o),Pa(e,t,r,o,n);case 15:return Bc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:$e(r,o),Xr(e,t),t.tag=1,Se(r)?(e=!0,so(t)):e=!1,dn(t,n),Uc(t,r,o),rl(t,r,o,n),ll(null,t,r,!0,e,n);case 19:return Qc(e,t,n);case 22:return Vc(e,t,n)}throw Error(w(156,t.tag))};function sf(e,t){return zs(e,t)}function vh(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function je(e,t,n,r){return new vh(e,t,n,r)}function Su(e){return e=e.prototype,!(!e||!e.isReactComponent)}function yh(e){if(typeof e=="function")return Su(e)?1:0;if(e!=null){if(e=e.$$typeof,e===$l)return 11;if(e===Fl)return 14}return 2}function _t(e,t){var n=e.alternate;return n===null?(n=je(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Zr(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")Su(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case qt:return Mt(n.children,o,i,t);case Ul:l=8,o|=8;break;case Ii:return e=je(12,n,t,o|2),e.elementType=Ii,e.lanes=i,e;case Pi:return e=je(13,n,t,o),e.elementType=Pi,e.lanes=i,e;case Ti:return e=je(19,n,t,o),e.elementType=Ti,e.lanes=i,e;case gs:return $o(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case vs:l=10;break e;case ys:l=9;break e;case $l:l=11;break e;case Fl:l=14;break e;case ct:l=16,r=null;break e}throw Error(w(130,e==null?e:typeof e,""))}return t=je(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function Mt(e,t,n,r){return e=je(7,e,r,t),e.lanes=n,e}function $o(e,t,n,r){return e=je(22,e,r,t),e.elementType=gs,e.lanes=n,e.stateNode={isHidden:!1},e}function vi(e,t,n){return e=je(6,e,null,t),e.lanes=n,e}function yi(e,t,n){return t=je(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function gh(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Jo(0),this.expirationTimes=Jo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Jo(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function ku(e,t,n,r,o,i,l,u,a){return e=new gh(e,t,n,u,a),t===1?(t=1,i===!0&&(t|=8)):t=0,i=je(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ou(i),e}function wh(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Xt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function cf(e){if(!e)return Ct;e=e._reactInternals;e:{if(Kt(e)!==e||e.tag!==1)throw Error(w(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Se(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(w(171))}if(e.tag===1){var n=e.type;if(Se(n))return sc(e,n,t)}return t}function ff(e,t,n,r,o,i,l,u,a){return e=ku(n,r,!0,e,o,i,l,u,a),e.context=cf(null),n=e.current,r=de(),o=Et(n),i=nt(r,o),i.callback=t??null,St(n,i,o),e.current.lanes=o,hr(e,o,r),ke(e,r),e}function Fo(e,t,n,r){var o=t.current,i=de(),l=Et(o);return n=cf(n),t.context===null?t.context=n:t.pendingContext=n,t=nt(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=St(o,t,l),e!==null&&(We(e,o,l,i),Qr(e,o,l)),l}function _o(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Fa(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Eu(e,t){Fa(e,t),(e=e.alternate)&&Fa(e,t)}function Sh(){return null}var df=typeof reportError=="function"?reportError:function(e){console.error(e)};function _u(e){this._internalRoot=e}Bo.prototype.render=_u.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(w(409));Fo(e,t,null,null)};Bo.prototype.unmount=_u.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Vt(function(){Fo(null,e,null,null)}),t[it]=null}};function Bo(e){this._internalRoot=e}Bo.prototype.unstable_scheduleHydration=function(e){if(e){var t=Vs();e={blockedOn:null,target:e,priority:t};for(var n=0;n<dt.length&&t!==0&&t<dt[n].priority;n++);dt.splice(n,0,e),n===0&&Hs(e)}};function xu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Vo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ba(){}function kh(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var c=_o(l);i.call(c)}}var l=ff(t,r,e,0,null,!1,!1,"",Ba);return e._reactRootContainer=l,e[it]=l.current,bn(e.nodeType===8?e.parentNode:e),Vt(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var u=r;r=function(){var c=_o(a);u.call(c)}}var a=ku(e,0,!1,null,null,!1,!1,"",Ba);return e._reactRootContainer=a,e[it]=a.current,bn(e.nodeType===8?e.parentNode:e),Vt(function(){Fo(t,a,n,r)}),a}function Wo(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var u=o;o=function(){var a=_o(l);u.call(a)}}Fo(t,l,e,o)}else l=kh(n,t,e,o,r);return _o(l)}Fs=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Dn(t.pendingLanes);n!==0&&(Wl(t,n|1),ke(t,q()),!(M&6)&&(Sn=q()+500,Pt()))}break;case 13:Vt(function(){var r=lt(e,1);if(r!==null){var o=de();We(r,e,1,o)}}),Eu(e,1)}};Hl=function(e){if(e.tag===13){var t=lt(e,134217728);if(t!==null){var n=de();We(t,e,134217728,n)}Eu(e,134217728)}};Bs=function(e){if(e.tag===13){var t=Et(e),n=lt(e,t);if(n!==null){var r=de();We(n,e,t,r)}Eu(e,t)}};Vs=function(){return U};Ws=function(e,t){var n=U;try{return U=e,t()}finally{U=n}};$i=function(e,t,n){switch(t){case"input":if(ji(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Lo(r);if(!o)throw Error(w(90));Ss(r),ji(r,o)}}}break;case"textarea":Es(e,n);break;case"select":t=n.value,t!=null&&an(e,!!n.multiple,t,!1)}};Ts=yu;Rs=Vt;var Eh={usingClientEntryPoint:!1,Events:[vr,en,Lo,Is,Ps,yu]},On={findFiberByHostInstance:Lt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},_h={bundleType:On.bundleType,version:On.version,rendererPackageName:On.rendererPackageName,rendererConfig:On.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:at.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ls(e),e===null?null:e.stateNode},findFiberByHostInstance:On.findFiberByHostInstance||Sh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ur=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ur.isDisabled&&Ur.supportsFiber)try{To=Ur.inject(_h),Ge=Ur}catch{}}Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Eh;Ie.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!xu(t))throw Error(w(200));return wh(e,t,null,n)};Ie.createRoot=function(e,t){if(!xu(e))throw Error(w(299));var n=!1,r="",o=df;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=ku(e,1,!1,null,null,n,!1,r,o),e[it]=t.current,bn(e.nodeType===8?e.parentNode:e),new _u(t)};Ie.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(w(188)):(e=Object.keys(e).join(","),Error(w(268,e)));return e=Ls(t),e=e===null?null:e.stateNode,e};Ie.flushSync=function(e){return Vt(e)};Ie.hydrate=function(e,t,n){if(!Vo(t))throw Error(w(200));return Wo(null,e,t,!0,n)};Ie.hydrateRoot=function(e,t,n){if(!xu(e))throw Error(w(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=df;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=ff(t,null,e,1,n??null,o,!1,i,l),e[it]=t.current,bn(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Bo(t)};Ie.render=function(e,t,n){if(!Vo(t))throw Error(w(200));return Wo(null,e,t,!1,n)};Ie.unmountComponentAtNode=function(e){if(!Vo(e))throw Error(w(40));return e._reactRootContainer?(Vt(function(){Wo(null,null,e,!1,function(){e._reactRootContainer=null,e[it]=null})}),!0):!1};Ie.unstable_batchedUpdates=yu;Ie.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Vo(n))throw Error(w(200));if(e==null||e._reactInternals===void 0)throw Error(w(38));return Wo(e,t,n,!1,r)};Ie.version="18.3.1-next-f1338f8080-20240426";function pf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(pf)}catch(e){console.error(e)}}pf(),ds.exports=Ie;var xh=ds.exports,hf,Va=xh;hf=Va.createRoot,Va.hydrateRoot;function Qt(e,t){Error.captureStackTrace&&Error.captureStackTrace(e,t)}var mf={credentialsUpdated:"CredentialsUpdatedMessage"},pe=class gl extends Error{errorCode;name="TidalError";constructor(t,n){super(t,n),Object.setPrototypeOf(this,gl.prototype),Qt(this,gl),this.errorCode=t}},Ch=class wl extends pe{name="IllegalArgumentError";constructor(t,n){super(t,n),Object.setPrototypeOf(this,wl.prototype),Qt(this,wl)}},vf=class Sl extends pe{name="NetworkError";constructor(t,n){super(t,n),Object.setPrototypeOf(this,Sl.prototype),Qt(this,Sl)}},ar=class kl extends pe{name="RetryableError";constructor(t,n){super(t,n),Object.setPrototypeOf(this,kl.prototype),Qt(this,kl)}},Nh=class{#e;#t=!1;#n;#r;constructor(e){this.#r=new URL(e),this.synchronize()}now(e=Date.now()){return!this.#n||!this.#e?(console.warn("TrueTime is not yet synchronized"),e):this.#n+(e-this.#e)}async synchronize(){if(!(this.#e&&Math.abs(Date.now()-this.#e)<36e5||this.#t)){this.#t=!0;try{let e=await fetch(this.#r);e.ok&&e.headers.has("date")&&(this.#n=new Date(e.headers.get("date")).getTime(),this.#e=Date.now())}catch(e){console.error(e)}this.#t=!1}}timestamp(e,t){let n;if(t){if(n=performance.getEntriesByName(e).find(r=>"detail"in r&&r.detail===t),!n)throw ReferenceError(`There is no performance entry named "${e}" with detail "${t}"`)}else n=performance.getEntriesByName(e).pop();return n?n.startTime:void 0}},Cu=new Nh("https://api.tidal.com/v1/ping"),Ih=class El extends pe{name="AuthenticationError";constructor(t,n){super(t,n),Object.setPrototypeOf(this,El.prototype),Qt(this,El)}},Ph=class _l extends pe{name="TokenResponseError";constructor(t,n){super(t,n),Object.setPrototypeOf(this,_l.prototype),Qt(this,_l)}},Nu=class xl extends pe{name="UnexpectedError";constructor(t,n){super(t,n),Object.setPrototypeOf(this,xl.prototype),Qt(this,xl)}},Z={authenticationError:"A0000",illegalArgumentError:"A0007",initError:"A0001",networkError:"A0002",retryableError:"A0003",storageError:"A0004",tokenResponseError:"A0005",unexpectedError:"A0006"},gi="AuthDB";function Th(e){return String.fromCharCode(...new Uint8Array(e))}function Rh(e){const t=new ArrayBuffer(e.length),n=new Uint8Array(t);for(let r=0,o=e.length;r<o;r++)n[r]=e.charCodeAt(r);return n}var Le={getItem:e=>{const t=globalThis.localStorage.getItem(`${gi}/${e}`);return t?Rh(t):void 0},removeItem:e=>{globalThis.localStorage.removeItem(`${gi}/${e}`)},setItem:(e,t)=>{globalThis.localStorage.setItem(`${gi}/${e}`,Th(t))}},yf=e=>{const t=new TextEncoder;return globalThis.crypto.subtle.importKey("raw",t.encode(e),{name:"PBKDF2"},!1,["deriveBits","deriveKey"])},gf=(e,t)=>globalThis.crypto.subtle.deriveKey({hash:"SHA-256",iterations:1e5,name:"PBKDF2",salt:t},e,{length:256,name:"AES-KW"},!0,["wrapKey","unwrapKey"]),Oh=async(e,t)=>gf(await yf(t),e),jh=e=>new TextEncoder().encode(e),Lh=e=>new TextDecoder().decode(e),Dh=async({keyToWrap:e,password:t,salt:n})=>{const r=await gf(await yf(t),n);return globalThis.crypto.subtle.wrapKey("raw",e,r,"AES-KW")},wf=async({password:e,salt:t,wrappedKeyBuffer:n})=>{const r=await Oh(t,e);return globalThis.crypto.subtle.unwrapKey("raw",n,r,"AES-KW","AES-CTR",!0,["encrypt","decrypt"])},zh=({content:e,counter:t,key:n})=>globalThis.crypto.subtle.encrypt({counter:t,length:64,name:"AES-CTR"},n,e),Ah=({counter:e,encryptedCredentials:t,key:n})=>globalThis.crypto.subtle.decrypt({counter:e,length:64,name:"AES-CTR"},n,t),Mh=()=>globalThis.crypto.subtle.generateKey({length:256,name:"AES-CTR"},!0,["encrypt","decrypt"]),Wt,Uh=e=>{Wt=e},$h=async({password:e,storageKey:t})=>{const n=await Mh(),r=globalThis.crypto.getRandomValues(new Uint8Array(16)),o=globalThis.crypto.getRandomValues(new Uint8Array(16)),i=await Dh({keyToWrap:n,password:e,salt:o});try{Le.setItem(`${t}Counter`,r),Le.setItem(`${t}Salt`,o),Le.setItem(`${t}Key`,i)}catch(l){throw new pe(Z.storageError,{cause:l})}},Sf=e=>({counter:Le.getItem(`${e}Counter`),encryptedCredentials:Le.getItem(`${e}Data`),salt:Le.getItem(`${e}Salt`),wrappedKey:Le.getItem(`${e}Key`)}),kf=async e=>{const{counter:t,encryptedCredentials:n,salt:r,wrappedKey:o}=Sf(e);if(n&&t&&o&&r)try{const i=await Ah({counter:t,encryptedCredentials:n,key:await wf({password:e,salt:r,wrappedKeyBuffer:o})});return JSON.parse(Lh(i))}catch{throw new pe(Z.storageError)}else return $h({password:e,storageKey:e})},Fh=async e=>{const t={...await kf(e.credentialsStorageKey),...e},{counter:n,salt:r,wrappedKey:o}=Sf(e.credentialsStorageKey);if(!o||!n||!r)throw new pe(Z.storageError);try{const i=await wf({password:t.credentialsStorageKey,salt:r,wrappedKeyBuffer:o}),l=await zh({content:jh(JSON.stringify(t)),counter:n,key:i});Le.setItem(`${t.credentialsStorageKey}Data`,l)}catch(i){throw new pe(Z.storageError,{cause:i})}},Bh=e=>{Le.removeItem(`${e}Data`),Le.removeItem(`${e}Counter`),Le.removeItem(`${e}Salt`),Le.removeItem(`${e}Key`)},Ef=async e=>{if(Wt){const t=await Wt.load(e);return t?JSON.parse(t):void 0}return await kf(e)??void 0},Vh=async e=>{if(Wt){const t={...await Ef(e.credentialsStorageKey),...e};await Wt.save(e.credentialsStorageKey,JSON.stringify(t));return}return Fh(e)},Wh=e=>{if(Wt){Wt.remove(e);return}Bh(e)},Hh=async e=>{if(e.status===0)return new vf(Z.networkError);if(e.status>=400&&e.status<500)return new Nu(Z.unexpectedError);if(e.status>=500&&e.status<600)return new ar(Z.retryableError);const{error:t}=await e.json();return new Ph(Z.tokenResponseError,{cause:t})},Iu=async({body:e,credentials:t})=>{const{options:n,url:r}=_f({body:e,credentials:t,path:"oauth2/token"}),o=await xf({request:()=>globalThis.fetch(r,n),retry:i=>i.status>=500&&i.status<600});return o.ok?o:await Hh(o)},_f=({body:e,credentials:t,path:n})=>{const r=`${t.tidalAuthServiceBaseUri}${n}`;return{options:{body:new URLSearchParams(e).toString(),headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"},method:"POST"},url:r}},xf=async({delayInMs:e=500,request:t,retry:n})=>{let r=1;const o=()=>r>32;for(;!o();){await new Promise(l=>setTimeout(l,r*e));const i=await t();if(r*=2,!n(i)||o())return i}throw new Nu(Z.unexpectedError)},sr,Kh=e=>{sr=e},Qh=e=>sr?sr.getRandomValues(e):globalThis.crypto.getRandomValues(e),Yh=(e,t)=>sr?sr.digest(e,t):globalThis.crypto.subtle.digest(e,t),Gh=async e=>{const t=await Yh("SHA-256",new TextEncoder().encode(e)),n=new Uint8Array(t),r=n.byteLength;let o="";for(let i=0;i<r;i+=1)o+=String.fromCharCode(n[i]);return globalThis.btoa(o)},Cf=e=>e.replace(/\+/g,"-").replace(/\//g,"_").replace(/=/g,""),Xh=()=>Cf(btoa(Qh(new Uint8Array(100)).toString())).slice(0,128),I={pending:!1,pendingPromises:[]},qh="https://login.tidal.com/",Jh="https://auth.tidal.com/v1/",Zh=["11003","6001","11001","11002","11101"],Nf=[],bh=e=>{Nf.push(e)},If=e=>{const t={detail:e};for(const n of Nf)n(t)},em=e=>{If({payload:e,type:mf.credentialsUpdated})},tm=async({clientId:e,clientSecret:t,clientUniqueKey:n,credentialsStorageKey:r,crypto:o,scopes:i,storage:l,tidalAuthServiceBaseUri:u,tidalLoginServiceBaseUri:a})=>{o&&Kh(o),l&&Uh(l);const c=await Ef(r);await Tu({...c,clientId:e,...t&&{clientSecret:t},clientUniqueKey:n,credentialsStorageKey:r,previousClientSecret:c?.clientSecret,scopes:i??[],tidalAuthServiceBaseUri:u??c?.tidalAuthServiceBaseUri??Jh,tidalLoginServiceBaseUri:a??c?.tidalLoginServiceBaseUri??qh}),await Cu.synchronize()},nm=async({loginConfig:e,redirectUri:t})=>{if(!I.credentials)throw new pe(Z.initError);const n=Xh(),r=await Gh(n);await Tu({...I.credentials,codeChallenge:n,redirectUri:t});const o={...e,client_id:I.credentials.clientId,...I.credentials.clientUniqueKey&&{client_unique_key:I.credentials.clientUniqueKey},code_challenge:Cf(r),code_challenge_method:"S256",redirect_uri:t,response_type:"code",scope:I.credentials.scopes.join(" ")},i=new URLSearchParams(o).toString();return`${I.credentials.tidalLoginServiceBaseUri}authorize?${i}`},rm=async e=>{if(!I.credentials?.credentialsStorageKey||!I.credentials?.codeChallenge||!I.credentials?.redirectUri)throw new pe(Z.initError);const{clientId:t,clientSecret:n,clientUniqueKey:r,codeChallenge:o,redirectUri:i,scopes:l}=I.credentials,u=Object.fromEntries(new URLSearchParams(e));if(!u.code)throw new Ih(Z.authenticationError);const a=await Iu({body:{client_id:t,...r&&{client_unique_key:r},...n&&{client_secret:n},code:u.code,code_verifier:o,grant_type:"authorization_code",redirect_uri:i,scope:l.join(" ")},credentials:I.credentials});if(a instanceof Error)throw a;await Ho(await a.json())},Wa=()=>{If({type:mf.credentialsUpdated}),I.credentials?.credentialsStorageKey&&Wh(I.credentials.credentialsStorageKey),delete I.credentials,delete I.limitedDeviceResponse},om=async()=>{if(I.credentials?.refreshToken){const e=await Iu({body:{...I.credentials.clientSecret&&{client_secret:I.credentials.clientSecret},client_id:I.credentials.clientId,grant_type:"refresh_token",refresh_token:I.credentials.refreshToken,scope:I.credentials.scopes.join(" ")},credentials:I.credentials});return e instanceof Error?e:Ho(await e.json())}else return Pu()},im=async()=>{if(I.credentials?.refreshToken){const{options:e,url:t}=_f({body:{...I.credentials.clientSecret&&{client_secret:I.credentials.clientSecret},client_id:I.credentials.clientId,grant_type:"update_client",refresh_token:I.credentials.refreshToken,scope:I.credentials.scopes.join(" ")},credentials:I.credentials,path:"oauth2/token"}),n=await xf({request:()=>globalThis.fetch(t,e),retry:r=>r.status>=400&&r.status<600});if(!n.ok)throw n.status===0?new vf(Z.networkError):new ar(Z.retryableError);return Ho(await n.json())}else{if(I.credentials){const e=await Pu();if(e&&"token"in e)return I.credentials.previousClientSecret=I.credentials.clientSecret,e;throw new ar(Z.retryableError)}throw new pe(Z.unexpectedError)}},Pu=async()=>{if(I.credentials?.clientSecret){const e=await Iu({body:{client_id:I.credentials.clientId,client_secret:I.credentials.clientSecret,grant_type:"client_credentials"},credentials:I.credentials});return e instanceof Error?e:Ho(await e.json())}},lm=async e=>(I.pending&&await new Promise(t=>{I.pendingPromises.push(t)}),um(e).finally(()=>{const t=I.pendingPromises.shift();t&&t(),I.pending=!1})),um=async e=>{if(I.credentials){I.pending=!0;const{accessToken:t}=I.credentials,n=60*1e3;if(t){const r=I.credentials.scopes.every(i=>t.grantedScopes?.includes(i));if(I.credentials.clientUniqueKey!==t.clientUniqueKey||t.userId&&r===!1)throw Wa(),new Ch(Z.illegalArgumentError);if(I.credentials.clientId!==t?.clientId||I.credentials.previousClientSecret&&I.credentials.previousClientSecret!==I.credentials.clientSecret){const i=await im();if(i&&"token"in i)return i;throw new ar(Z.retryableError)}if(!(e&&Zh.includes(e))&&t.expires&&t.expires>Cu.now()+n)return t;const o=await om();if(o&&"token"in o)return o;if(o instanceof Nu)throw Wa(),o;if(o instanceof ar)throw o}else if(I.credentials.clientSecret){const r=await Pu();if(r&&"token"in r)return r;if(r instanceof Error)throw r}else return{clientId:I.credentials.clientId,requestedScopes:I.credentials.scopes}}throw new pe(Z.initError)},Tu=e=>(I.credentials=e,em({...I.credentials.accessToken,clientId:I.credentials.clientId,requestedScopes:I.credentials.scopes}),Vh(I.credentials)),Ho=async e=>{if(!I.credentials)throw new pe(Z.initError);const{clientId:t,clientUniqueKey:n,scopes:r}=I.credentials,o=e.scope?.length?e.scope?.split(" "):[],i={clientId:t,clientUniqueKey:n,expires:Cu.now()+e.expires_in*1e3,grantedScopes:o,requestedScopes:r,token:e.access_token,...e.user_id&&{userId:e.user_id.toString()}};return await Tu({...I.credentials,accessToken:i,...e.refresh_token&&{refreshToken:e.refresh_token}}),i},xo={bus:bh,getCredentials:lm},Ha=Object.defineProperty,am=(e,t)=>{let n={};for(var r in e)Ha(n,r,{get:e[r],enumerable:!0});return Ha(n,Symbol.toStringTag,{value:"Module"}),n};function Ru(e,t){Error.captureStackTrace&&Error.captureStackTrace(e,t)}var Pf=class Cl extends Error{errorCode;name="TidalError";constructor(t,n){super(t,n),Object.setPrototypeOf(this,Cl.prototype),Ru(this,Cl),this.errorCode=t}},Tf=class Nl extends Pf{name="IllegalArgumentError";constructor(t,n){super(t,n),Object.setPrototypeOf(this,Nl.prototype),Ru(this,Nl)}},Il=!1,sm=class Pl extends Pf{name="OutageStartError";constructor(t,n){super(t,n),Object.setPrototypeOf(this,Pl.prototype),Ru(this,Pl)}},cm={name:"OutageEndMessage"},wi=e=>{Il!==e&&(Il=e,Rf(e?new sm("1"):cm))},fm=()=>Il,dm=am({bus:()=>pm,postMessage:()=>Rf}),pm=e=>globalThis.addEventListener("eventProducerEventBus",e),Rf=e=>{const t=new CustomEvent("eventProducerEventBus",{detail:e});globalThis.dispatchEvent(t)},cr,hm=e=>{cr=e},mm=e=>{cr.credentialsProvider=e},vm=e=>{cr.blockedConsentCategories={...cr.blockedConsentCategories,...e}},gr=()=>cr,ym=class{#e;#t=!1;#n;#r;constructor(e){this.#r=new URL(e),this.synchronize()}now(e=Date.now()){return!this.#n||!this.#e?(console.warn("TrueTime is not yet synchronized"),e):this.#n+(e-this.#e)}async synchronize(){if(!(this.#e&&Math.abs(Date.now()-this.#e)<36e5||this.#t)){this.#t=!0;try{let e=await fetch(this.#r);e.ok&&e.headers.has("date")&&(this.#n=new Date(e.headers.get("date")).getTime(),this.#e=Date.now())}catch(e){console.error(e)}this.#t=!1}}timestamp(e,t){let n;if(t){if(n=performance.getEntriesByName(e).find(r=>"detail"in r&&r.detail===t),!n)throw ReferenceError(`There is no performance entry named "${e}" with detail "${t}"`)}else n=performance.getEntriesByName(e).pop();return n?n.startTime:void 0}},Ou=new ym("https://api.tidal.com/v1/ping"),Of=`var Fr = Object.create, Ue = Object.defineProperty, Mr = Object.getOwnPropertyDescriptor, Ur = Object.getOwnPropertyNames, Yr = Object.getPrototypeOf, $r = Object.prototype.hasOwnProperty, Wr = (w, R) => () => (R || (w((R = { exports: {} }).exports, R), w = null), R.exports), zr = (w, R, I, A) => {
	if (R && typeof R == "object" || typeof R == "function") for (var Y = Ur(R), E = 0, B = Y.length, m; E < B; E++) m = Y[E], !$r.call(w, m) && m !== I && Ue(w, m, {
		get: ((x) => R[x]).bind(null, m),
		enumerable: !(A = Mr(R, m)) || A.enumerable
	});
	return w;
}, Vr = (w, R, I) => (I = w != null ? Fr(Yr(w)) : {}, zr(R || !w || !w.__esModule ? Ue(I, "default", {
	value: w,
	enumerable: !0
}) : I, w)), te = /* @__PURE__ */ ((w) => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(w, { get: (R, I) => (typeof require < "u" ? require : R)[I] }) : w)(function(w) {
	if (typeof require < "u") return require.apply(this, arguments);
	throw Error("Calling \`require\` for \\"" + w + "\\" in an environment that doesn't expose the \`require\` function. See https://rolldown.rs/in-depth/bundling-cjs#require-external-modules for more details.");
}), Fe = /* @__PURE__ */ Vr((/* @__PURE__ */ Wr(((w, R) => {
	(function(I) {
		if (typeof w == "object" && typeof R < "u") R.exports = I();
		else if (typeof define == "function" && define.amd) define([], I);
		else {
			var A;
			typeof window < "u" ? A = window : typeof global < "u" ? A = global : typeof self < "u" ? A = self : A = this, A.localforage = I();
		}
	})(function() {
		return (function I(A, Y, E) {
			function B(P, $) {
				if (!Y[P]) {
					if (!A[P]) {
						var l = typeof te == "function" && te;
						if (!$ && l) return l(P, !0);
						if (m) return m(P, !0);
						var y = /* @__PURE__ */ new Error("Cannot find module '" + P + "'");
						throw y.code = "MODULE_NOT_FOUND", y;
					}
					var D = Y[P] = { exports: {} };
					A[P][0].call(D.exports, function(N) {
						var W = A[P][1][N];
						return B(W || N);
					}, D, D.exports, I, A, Y, E);
				}
				return Y[P].exports;
			}
			for (var m = typeof te == "function" && te, x = 0; x < E.length; x++) B(E[x]);
			return B;
		})({
			1: [function(I, A, Y) {
				(function(E) {
					"use strict";
					var B = E.MutationObserver || E.WebKitMutationObserver, m;
					if (B) {
						var x = 0, P = new B(N), $ = E.document.createTextNode("");
						P.observe($, { characterData: !0 }), m = function() {
							$.data = x = ++x % 2;
						};
					} else if (!E.setImmediate && typeof E.MessageChannel < "u") {
						var l = new E.MessageChannel();
						l.port1.onmessage = N, m = function() {
							l.port2.postMessage(0);
						};
					} else "document" in E && "onreadystatechange" in E.document.createElement("script") ? m = function() {
						var T = E.document.createElement("script");
						T.onreadystatechange = function() {
							N(), T.onreadystatechange = null, T.parentNode.removeChild(T), T = null;
						}, E.document.documentElement.appendChild(T);
					} : m = function() {
						setTimeout(N, 0);
					};
					var y, D = [];
					function N() {
						y = !0;
						for (var T, z, O = D.length; O;) {
							for (z = D, D = [], T = -1; ++T < O;) z[T]();
							O = D.length;
						}
						y = !1;
					}
					A.exports = W;
					function W(T) {
						D.push(T) === 1 && !y && m();
					}
				}).call(this, typeof global < "u" ? global : typeof self < "u" ? self : typeof window < "u" ? window : {});
			}, {}],
			2: [function(I, A, Y) {
				"use strict";
				var E = I(1);
				function B() {}
				var m = {}, x = ["REJECTED"], P = ["FULFILLED"], $ = ["PENDING"];
				A.exports = l;
				function l(c) {
					if (typeof c != "function") throw new TypeError("resolver must be a function");
					this.state = $, this.queue = [], this.outcome = void 0, c !== B && W(this, c);
				}
				l.prototype.catch = function(c) {
					return this.then(null, c);
				}, l.prototype.then = function(c, b) {
					if (typeof c != "function" && this.state === P || typeof b != "function" && this.state === x) return this;
					var p = new this.constructor(B);
					return this.state !== $ ? D(p, this.state === P ? c : b, this.outcome) : this.queue.push(new y(p, c, b)), p;
				};
				function y(c, b, p) {
					this.promise = c, typeof b == "function" && (this.onFulfilled = b, this.callFulfilled = this.otherCallFulfilled), typeof p == "function" && (this.onRejected = p, this.callRejected = this.otherCallRejected);
				}
				y.prototype.callFulfilled = function(c) {
					m.resolve(this.promise, c);
				}, y.prototype.otherCallFulfilled = function(c) {
					D(this.promise, this.onFulfilled, c);
				}, y.prototype.callRejected = function(c) {
					m.reject(this.promise, c);
				}, y.prototype.otherCallRejected = function(c) {
					D(this.promise, this.onRejected, c);
				};
				function D(c, b, p) {
					E(function() {
						var S;
						try {
							S = b(p);
						} catch (C) {
							return m.reject(c, C);
						}
						S === c ? m.reject(c, /* @__PURE__ */ new TypeError("Cannot resolve promise with itself")) : m.resolve(c, S);
					});
				}
				m.resolve = function(c, b) {
					var p = T(N, b);
					if (p.status === "error") return m.reject(c, p.value);
					var S = p.value;
					if (S) W(c, S);
					else {
						c.state = P, c.outcome = b;
						for (var C = -1, L = c.queue.length; ++C < L;) c.queue[C].callFulfilled(b);
					}
					return c;
				}, m.reject = function(c, b) {
					c.state = x, c.outcome = b;
					for (var p = -1, S = c.queue.length; ++p < S;) c.queue[p].callRejected(b);
					return c;
				};
				function N(c) {
					var b = c && c.then;
					if (c && (typeof c == "object" || typeof c == "function") && typeof b == "function") return function() {
						b.apply(c, arguments);
					};
				}
				function W(c, b) {
					var p = !1;
					function S(M) {
						p || (p = !0, m.reject(c, M));
					}
					function C(M) {
						p || (p = !0, m.resolve(c, M));
					}
					function L() {
						b(C, S);
					}
					var F = T(L);
					F.status === "error" && S(F.value);
				}
				function T(c, b) {
					var p = {};
					try {
						p.value = c(b), p.status = "success";
					} catch (S) {
						p.status = "error", p.value = S;
					}
					return p;
				}
				l.resolve = z;
				function z(c) {
					return c instanceof this ? c : m.resolve(new this(B), c);
				}
				l.reject = O;
				function O(c) {
					var b = new this(B);
					return m.reject(b, c);
				}
				l.all = oe;
				function oe(c) {
					var b = this;
					if (Object.prototype.toString.call(c) !== "[object Array]") return this.reject(/* @__PURE__ */ new TypeError("must be an array"));
					var p = c.length, S = !1;
					if (!p) return this.resolve([]);
					for (var C = new Array(p), L = 0, F = -1, M = new this(B); ++F < p;) V(c[F], F);
					return M;
					function V(q, k) {
						b.resolve(q).then(ie, function(j) {
							S || (S = !0, m.reject(M, j));
						});
						function ie(j) {
							C[k] = j, ++L === p && !S && (S = !0, m.resolve(M, C));
						}
					}
				}
				l.race = X;
				function X(c) {
					var b = this;
					if (Object.prototype.toString.call(c) !== "[object Array]") return this.reject(/* @__PURE__ */ new TypeError("must be an array"));
					var p = c.length, S = !1;
					if (!p) return this.resolve([]);
					for (var C = -1, L = new this(B); ++C < p;) F(c[C]);
					return L;
					function F(M) {
						b.resolve(M).then(function(V) {
							S || (S = !0, m.resolve(L, V));
						}, function(V) {
							S || (S = !0, m.reject(L, V));
						});
					}
				}
			}, { 1: 1 }],
			3: [function(I, A, Y) {
				(function(E) {
					"use strict";
					typeof E.Promise != "function" && (E.Promise = I(2));
				}).call(this, typeof global < "u" ? global : typeof self < "u" ? self : typeof window < "u" ? window : {});
			}, { 2: 2 }],
			4: [function(I, A, Y) {
				"use strict";
				var E = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
					return typeof e;
				} : function(e) {
					return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
				};
				function B(e, n) {
					if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function");
				}
				function m() {
					try {
						if (typeof indexedDB < "u") return indexedDB;
						if (typeof webkitIndexedDB < "u") return webkitIndexedDB;
						if (typeof mozIndexedDB < "u") return mozIndexedDB;
						if (typeof OIndexedDB < "u") return OIndexedDB;
						if (typeof msIndexedDB < "u") return msIndexedDB;
					} catch {
						return;
					}
				}
				var x = m();
				function P() {
					try {
						if (!x || !x.open) return !1;
						var e = typeof openDatabase < "u" && /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) && !/BlackBerry/.test(navigator.platform), n = typeof fetch == "function" && fetch.toString().indexOf("[native code") !== -1;
						return (!e || n) && typeof indexedDB < "u" && typeof IDBKeyRange < "u";
					} catch {
						return !1;
					}
				}
				function $(e, n) {
					e = e || [], n = n || {};
					try {
						return new Blob(e, n);
					} catch (i) {
						if (i.name !== "TypeError") throw i;
						for (var r = new (typeof BlobBuilder < "u" ? BlobBuilder : typeof MSBlobBuilder < "u" ? MSBlobBuilder : typeof MozBlobBuilder < "u" ? MozBlobBuilder : WebKitBlobBuilder)(), t = 0; t < e.length; t += 1) r.append(e[t]);
						return r.getBlob(n.type);
					}
				}
				typeof Promise > "u" && I(3);
				var l = Promise;
				function y(e, n) {
					n && e.then(function(r) {
						n(null, r);
					}, function(r) {
						n(r);
					});
				}
				function D(e, n, r) {
					typeof n == "function" && e.then(n), typeof r == "function" && e.catch(r);
				}
				function N(e) {
					return typeof e != "string" && (console.warn(e + " used as a key, but it is not a string."), e = String(e)), e;
				}
				function W() {
					if (arguments.length && typeof arguments[arguments.length - 1] == "function") return arguments[arguments.length - 1];
				}
				var T = "local-forage-detect-blob-support", z = void 0, O = {}, oe = Object.prototype.toString, X = "readonly", c = "readwrite";
				function b(e) {
					for (var n = e.length, r = new ArrayBuffer(n), t = new Uint8Array(r), i = 0; i < n; i++) t[i] = e.charCodeAt(i);
					return r;
				}
				function p(e) {
					return new l(function(n) {
						var r = e.transaction(T, c), t = $([""]);
						r.objectStore(T).put(t, "key"), r.onabort = function(i) {
							i.preventDefault(), i.stopPropagation(), n(!1);
						}, r.oncomplete = function() {
							var i = navigator.userAgent.match(/Chrome\\/(\\d+)/);
							n(navigator.userAgent.match(/Edge\\//) || !i || parseInt(i[1], 10) >= 43);
						};
					}).catch(function() {
						return !1;
					});
				}
				function S(e) {
					return typeof z == "boolean" ? l.resolve(z) : p(e).then(function(n) {
						return z = n, z;
					});
				}
				function C(e) {
					var n = O[e.name], r = {};
					r.promise = new l(function(t, i) {
						r.resolve = t, r.reject = i;
					}), n.deferredOperations.push(r), n.dbReady ? n.dbReady = n.dbReady.then(function() {
						return r.promise;
					}) : n.dbReady = r.promise;
				}
				function L(e) {
					var n = O[e.name].deferredOperations.pop();
					if (n) return n.resolve(), n.promise;
				}
				function F(e, n) {
					var r = O[e.name].deferredOperations.pop();
					if (r) return r.reject(n), r.promise;
				}
				function M(e, n) {
					return new l(function(r, t) {
						if (O[e.name] = O[e.name] || pe(), e.db) if (n) C(e), e.db.close();
						else return r(e.db);
						var i = [e.name];
						n && i.push(e.version);
						var o = x.open.apply(x, i);
						n && (o.onupgradeneeded = function(a) {
							var f = o.result;
							try {
								f.createObjectStore(e.storeName), a.oldVersion <= 1 && f.createObjectStore(T);
							} catch (u) {
								if (u.name === "ConstraintError") console.warn("The database \\"" + e.name + "\\" has been upgraded from version " + a.oldVersion + " to version " + a.newVersion + ", but the storage \\"" + e.storeName + "\\" already exists.");
								else throw u;
							}
						}), o.onerror = function(a) {
							a.preventDefault(), t(o.error);
						}, o.onsuccess = function() {
							var a = o.result;
							a.onversionchange = function(f) {
								f.target.close();
							}, r(a), L(e);
						};
					});
				}
				function V(e) {
					return M(e, !1);
				}
				function q(e) {
					return M(e, !0);
				}
				function k(e, n) {
					if (!e.db) return !0;
					var r = !e.db.objectStoreNames.contains(e.storeName), t = e.version < e.db.version, i = e.version > e.db.version;
					if (t && (e.version !== n && console.warn("The database \\"" + e.name + \`" can't be downgraded from version \` + e.db.version + " to version " + e.version + "."), e.version = e.db.version), i || r) {
						if (r) {
							var o = e.db.version + 1;
							o > e.version && (e.version = o);
						}
						return !0;
					}
					return !1;
				}
				function ie(e) {
					return new l(function(n, r) {
						var t = new FileReader();
						t.onerror = r, t.onloadend = function(i) {
							n({
								__local_forage_encoded_blob: !0,
								data: btoa(i.target.result || ""),
								type: e.type
							});
						}, t.readAsBinaryString(e);
					});
				}
				function j(e) {
					return $([b(atob(e.data))], { type: e.type });
				}
				function ye(e) {
					return e && e.__local_forage_encoded_blob;
				}
				function Ye(e) {
					var n = this, r = n._initReady().then(function() {
						var t = O[n._dbInfo.name];
						if (t && t.dbReady) return t.dbReady;
					});
					return D(r, e, e), r;
				}
				function $e(e) {
					C(e);
					for (var n = O[e.name], r = n.forages, t = 0; t < r.length; t++) {
						var i = r[t];
						i._dbInfo.db && (i._dbInfo.db.close(), i._dbInfo.db = null);
					}
					return e.db = null, V(e).then(function(o) {
						return e.db = o, k(e) ? q(e) : o;
					}).then(function(o) {
						e.db = n.db = o;
						for (var a = 0; a < r.length; a++) r[a]._dbInfo.db = o;
					}).catch(function(o) {
						throw F(e, o), o;
					});
				}
				function K(e, n, r, t) {
					t === void 0 && (t = 1);
					try {
						r(null, e.db.transaction(e.storeName, n));
					} catch (i) {
						if (t > 0 && (!e.db || i.name === "InvalidStateError" || i.name === "NotFoundError")) return l.resolve().then(function() {
							if (!e.db || i.name === "NotFoundError" && !e.db.objectStoreNames.contains(e.storeName) && e.version <= e.db.version) return e.db && (e.version = e.db.version + 1), q(e);
						}).then(function() {
							return $e(e).then(function() {
								K(e, n, r, t - 1);
							});
						}).catch(r);
						r(i);
					}
				}
				function pe() {
					return {
						forages: [],
						db: null,
						dbReady: null,
						deferredOperations: []
					};
				}
				function We(e) {
					var n = this, r = { db: null };
					if (e) for (var t in e) r[t] = e[t];
					var i = O[r.name];
					i || (i = pe(), O[r.name] = i), i.forages.push(n), n._initReady || (n._initReady = n.ready, n.ready = Ye);
					var o = [];
					function a() {
						return l.resolve();
					}
					for (var f = 0; f < i.forages.length; f++) {
						var u = i.forages[f];
						u !== n && o.push(u._initReady().catch(a));
					}
					var s = i.forages.slice(0);
					return l.all(o).then(function() {
						return r.db = i.db, V(r);
					}).then(function(d) {
						return r.db = d, k(r, n._defaultConfig.version) ? q(r) : d;
					}).then(function(d) {
						r.db = i.db = d, n._dbInfo = r;
						for (var v = 0; v < s.length; v++) {
							var h = s[v];
							h !== n && (h._dbInfo.db = r.db, h._dbInfo.version = r.version);
						}
					});
				}
				function ze(e, n) {
					var r = this;
					e = N(e);
					var t = new l(function(i, o) {
						r.ready().then(function() {
							K(r._dbInfo, X, function(a, f) {
								if (a) return o(a);
								try {
									var u = f.objectStore(r._dbInfo.storeName).get(e);
									u.onsuccess = function() {
										var s = u.result;
										s === void 0 && (s = null), ye(s) && (s = j(s)), i(s);
									}, u.onerror = function() {
										o(u.error);
									};
								} catch (s) {
									o(s);
								}
							});
						}).catch(o);
					});
					return y(t, n), t;
				}
				function Ve(e, n) {
					var r = this, t = new l(function(i, o) {
						r.ready().then(function() {
							K(r._dbInfo, X, function(a, f) {
								if (a) return o(a);
								try {
									var u = f.objectStore(r._dbInfo.storeName).openCursor(), s = 1;
									u.onsuccess = function() {
										var d = u.result;
										if (d) {
											var v = d.value;
											ye(v) && (v = j(v));
											var h = e(v, d.key, s++);
											h !== void 0 ? i(h) : d.continue();
										} else i();
									}, u.onerror = function() {
										o(u.error);
									};
								} catch (d) {
									o(d);
								}
							});
						}).catch(o);
					});
					return y(t, n), t;
				}
				function Ke(e, n, r) {
					var t = this;
					e = N(e);
					var i = new l(function(o, a) {
						var f;
						t.ready().then(function() {
							return f = t._dbInfo, oe.call(n) === "[object Blob]" ? S(f.db).then(function(u) {
								return u ? n : ie(n);
							}) : n;
						}).then(function(u) {
							K(t._dbInfo, c, function(s, d) {
								if (s) return a(s);
								try {
									var v = d.objectStore(t._dbInfo.storeName);
									u === null && (u = void 0);
									var h = v.put(u, e);
									d.oncomplete = function() {
										u === void 0 && (u = null), o(u);
									}, d.onabort = d.onerror = function() {
										a(h.error ? h.error : h.transaction.error);
									};
								} catch (_) {
									a(_);
								}
							});
						}).catch(a);
					});
					return y(i, r), i;
				}
				function Qe(e, n) {
					var r = this;
					e = N(e);
					var t = new l(function(i, o) {
						r.ready().then(function() {
							K(r._dbInfo, c, function(a, f) {
								if (a) return o(a);
								try {
									var u = f.objectStore(r._dbInfo.storeName).delete(e);
									f.oncomplete = function() {
										i();
									}, f.onerror = function() {
										o(u.error);
									}, f.onabort = function() {
										o(u.error ? u.error : u.transaction.error);
									};
								} catch (s) {
									o(s);
								}
							});
						}).catch(o);
					});
					return y(t, n), t;
				}
				function He(e) {
					var n = this, r = new l(function(t, i) {
						n.ready().then(function() {
							K(n._dbInfo, c, function(o, a) {
								if (o) return i(o);
								try {
									var f = a.objectStore(n._dbInfo.storeName).clear();
									a.oncomplete = function() {
										t();
									}, a.onabort = a.onerror = function() {
										i(f.error ? f.error : f.transaction.error);
									};
								} catch (u) {
									i(u);
								}
							});
						}).catch(i);
					});
					return y(r, e), r;
				}
				function Xe(e) {
					var n = this, r = new l(function(t, i) {
						n.ready().then(function() {
							K(n._dbInfo, X, function(o, a) {
								if (o) return i(o);
								try {
									var f = a.objectStore(n._dbInfo.storeName).count();
									f.onsuccess = function() {
										t(f.result);
									}, f.onerror = function() {
										i(f.error);
									};
								} catch (u) {
									i(u);
								}
							});
						}).catch(i);
					});
					return y(r, e), r;
				}
				function je(e, n) {
					var r = this, t = new l(function(i, o) {
						if (e < 0) {
							i(null);
							return;
						}
						r.ready().then(function() {
							K(r._dbInfo, X, function(a, f) {
								if (a) return o(a);
								try {
									var u = f.objectStore(r._dbInfo.storeName), s = !1, d = u.openKeyCursor();
									d.onsuccess = function() {
										var v = d.result;
										if (!v) {
											i(null);
											return;
										}
										e === 0 || s ? i(v.key) : (s = !0, v.advance(e));
									}, d.onerror = function() {
										o(d.error);
									};
								} catch (v) {
									o(v);
								}
							});
						}).catch(o);
					});
					return y(t, n), t;
				}
				function Ge(e) {
					var n = this, r = new l(function(t, i) {
						n.ready().then(function() {
							K(n._dbInfo, X, function(o, a) {
								if (o) return i(o);
								try {
									var f = a.objectStore(n._dbInfo.storeName).openKeyCursor(), u = [];
									f.onsuccess = function() {
										var s = f.result;
										if (!s) {
											t(u);
											return;
										}
										u.push(s.key), s.continue();
									}, f.onerror = function() {
										i(f.error);
									};
								} catch (s) {
									i(s);
								}
							});
						}).catch(i);
					});
					return y(r, e), r;
				}
				function qe(e, n) {
					n = W.apply(this, arguments);
					var r = this.config();
					e = typeof e != "function" && e || {}, e.name || (e.name = e.name || r.name, e.storeName = e.storeName || r.storeName);
					var t = this, i;
					if (!e.name) i = l.reject("Invalid arguments");
					else {
						var o = e.name === r.name && t._dbInfo.db ? l.resolve(t._dbInfo.db) : V(e).then(function(a) {
							var f = O[e.name], u = f.forages;
							f.db = a;
							for (var s = 0; s < u.length; s++) u[s]._dbInfo.db = a;
							return a;
						});
						e.storeName ? i = o.then(function(a) {
							if (a.objectStoreNames.contains(e.storeName)) {
								var f = a.version + 1;
								C(e);
								var u = O[e.name], s = u.forages;
								a.close();
								for (var d = 0; d < s.length; d++) {
									var v = s[d];
									v._dbInfo.db = null, v._dbInfo.version = f;
								}
								return new l(function(h, _) {
									var g = x.open(e.name, f);
									g.onerror = function(U) {
										g.result.close(), _(U);
									}, g.onupgradeneeded = function() {
										g.result.deleteObjectStore(e.storeName);
									}, g.onsuccess = function() {
										var U = g.result;
										U.close(), h(U);
									};
								}).then(function(h) {
									u.db = h;
									for (var _ = 0; _ < s.length; _++) {
										var g = s[_];
										g._dbInfo.db = h, L(g._dbInfo);
									}
								}).catch(function(h) {
									throw (F(e, h) || l.resolve()).catch(function() {}), h;
								});
							}
						}) : i = o.then(function(a) {
							C(e);
							var f = O[e.name], u = f.forages;
							a.close();
							for (var s = 0; s < u.length; s++) {
								var d = u[s];
								d._dbInfo.db = null;
							}
							return new l(function(v, h) {
								var _ = x.deleteDatabase(e.name);
								_.onerror = function() {
									var g = _.result;
									g && g.close(), h(_.error);
								}, _.onblocked = function() {
									console.warn("dropInstance blocked for database \\"" + e.name + "\\" until all open connections are closed");
								}, _.onsuccess = function() {
									var g = _.result;
									g && g.close(), v(g);
								};
							}).then(function(v) {
								f.db = v;
								for (var h = 0; h < u.length; h++) {
									var _ = u[h];
									L(_._dbInfo);
								}
							}).catch(function(v) {
								throw (F(e, v) || l.resolve()).catch(function() {}), v;
							});
						});
					}
					return y(i, n), i;
				}
				var Je = {
					_driver: "asyncStorage",
					_initStorage: We,
					_support: P(),
					iterate: Ve,
					getItem: ze,
					setItem: Ke,
					removeItem: Qe,
					clear: He,
					length: Xe,
					key: je,
					keys: Ge,
					dropInstance: qe
				};
				function Ze() {
					return typeof openDatabase == "function";
				}
				var Q = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", ke = "~~local_forage_type~", me = /^~~local_forage_type~([^~]+)~/, ee = "__lfsc__:", ae = ee.length, fe = "arbf", ue = "blob", ge = "si08", _e = "ui08", be = "uic8", we = "si16", Ee = "si32", Se = "ur16", Ie = "ui32", Re = "fl32", Ae = "fl64", De = ae + fe.length, Ne = Object.prototype.toString;
				function Te(e) {
					var n = e.length * .75, r = e.length, t, i = 0, o, a, f, u;
					e[e.length - 1] === "=" && (n--, e[e.length - 2] === "=" && n--);
					var s = new ArrayBuffer(n), d = new Uint8Array(s);
					for (t = 0; t < r; t += 4) o = Q.indexOf(e[t]), a = Q.indexOf(e[t + 1]), f = Q.indexOf(e[t + 2]), u = Q.indexOf(e[t + 3]), d[i++] = o << 2 | a >> 4, d[i++] = (a & 15) << 4 | f >> 2, d[i++] = (f & 3) << 6 | u & 63;
					return s;
				}
				function se(e) {
					var n = new Uint8Array(e), r = "", t;
					for (t = 0; t < n.length; t += 3) r += Q[n[t] >> 2], r += Q[(n[t] & 3) << 4 | n[t + 1] >> 4], r += Q[(n[t + 1] & 15) << 2 | n[t + 2] >> 6], r += Q[n[t + 2] & 63];
					return n.length % 3 === 2 ? r = r.substring(0, r.length - 1) + "=" : n.length % 3 === 1 && (r = r.substring(0, r.length - 2) + "=="), r;
				}
				function er(e, n) {
					var r = "";
					if (e && (r = Ne.call(e)), e && (r === "[object ArrayBuffer]" || e.buffer && Ne.call(e.buffer) === "[object ArrayBuffer]")) {
						var t, i = ee;
						e instanceof ArrayBuffer ? (t = e, i += fe) : (t = e.buffer, r === "[object Int8Array]" ? i += ge : r === "[object Uint8Array]" ? i += _e : r === "[object Uint8ClampedArray]" ? i += be : r === "[object Int16Array]" ? i += we : r === "[object Uint16Array]" ? i += Se : r === "[object Int32Array]" ? i += Ee : r === "[object Uint32Array]" ? i += Ie : r === "[object Float32Array]" ? i += Re : r === "[object Float64Array]" ? i += Ae : n(/* @__PURE__ */ new Error("Failed to get type for BinaryArray"))), n(i + se(t));
					} else if (r === "[object Blob]") {
						var o = new FileReader();
						o.onload = function() {
							var a = ke + e.type + "~" + se(this.result);
							n(ee + ue + a);
						}, o.readAsArrayBuffer(e);
					} else try {
						n(JSON.stringify(e));
					} catch (a) {
						console.error("Couldn't convert value into a JSON string: ", e), n(null, a);
					}
				}
				function rr(e) {
					if (e.substring(0, ae) !== ee) return JSON.parse(e);
					var n = e.substring(De), r = e.substring(ae, De), t;
					if (r === ue && me.test(n)) {
						var i = n.match(me);
						t = i[1], n = n.substring(i[0].length);
					}
					var o = Te(n);
					switch (r) {
						case fe: return o;
						case ue: return $([o], { type: t });
						case ge: return new Int8Array(o);
						case _e: return new Uint8Array(o);
						case be: return new Uint8ClampedArray(o);
						case we: return new Int16Array(o);
						case Se: return new Uint16Array(o);
						case Ee: return new Int32Array(o);
						case Ie: return new Uint32Array(o);
						case Re: return new Float32Array(o);
						case Ae: return new Float64Array(o);
						default: throw new Error("Unkown type: " + r);
					}
				}
				var ce = {
					serialize: er,
					deserialize: rr,
					stringToBuffer: Te,
					bufferToString: se
				};
				function xe(e, n, r, t) {
					e.executeSql("CREATE TABLE IF NOT EXISTS " + n.storeName + " (id INTEGER PRIMARY KEY, key unique, value)", [], r, t);
				}
				function nr(e) {
					var n = this, r = { db: null };
					if (e) for (var t in e) r[t] = typeof e[t] != "string" ? e[t].toString() : e[t];
					var i = new l(function(o, a) {
						try {
							r.db = openDatabase(r.name, String(r.version), r.description, r.size);
						} catch (f) {
							return a(f);
						}
						r.db.transaction(function(f) {
							xe(f, r, function() {
								n._dbInfo = r, o();
							}, function(u, s) {
								a(s);
							});
						}, a);
					});
					return r.serializer = ce, i;
				}
				function H(e, n, r, t, i, o) {
					e.executeSql(r, t, i, function(a, f) {
						f.code === f.SYNTAX_ERR ? a.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?", [n.storeName], function(u, s) {
							s.rows.length ? o(u, f) : xe(u, n, function() {
								u.executeSql(r, t, i, o);
							}, o);
						}, o) : o(a, f);
					}, o);
				}
				function tr(e, n) {
					var r = this;
					e = N(e);
					var t = new l(function(i, o) {
						r.ready().then(function() {
							var a = r._dbInfo;
							a.db.transaction(function(f) {
								H(f, a, "SELECT * FROM " + a.storeName + " WHERE key = ? LIMIT 1", [e], function(u, s) {
									var d = s.rows.length ? s.rows.item(0).value : null;
									d && (d = a.serializer.deserialize(d)), i(d);
								}, function(u, s) {
									o(s);
								});
							});
						}).catch(o);
					});
					return y(t, n), t;
				}
				function or(e, n) {
					var r = this, t = new l(function(i, o) {
						r.ready().then(function() {
							var a = r._dbInfo;
							a.db.transaction(function(f) {
								H(f, a, "SELECT * FROM " + a.storeName, [], function(u, s) {
									for (var d = s.rows, v = d.length, h = 0; h < v; h++) {
										var _ = d.item(h), g = _.value;
										if (g && (g = a.serializer.deserialize(g)), g = e(g, _.key, h + 1), g !== void 0) {
											i(g);
											return;
										}
									}
									i();
								}, function(u, s) {
									o(s);
								});
							});
						}).catch(o);
					});
					return y(t, n), t;
				}
				function Oe(e, n, r, t) {
					var i = this;
					e = N(e);
					var o = new l(function(a, f) {
						i.ready().then(function() {
							n === void 0 && (n = null);
							var u = n, s = i._dbInfo;
							s.serializer.serialize(n, function(d, v) {
								v ? f(v) : s.db.transaction(function(h) {
									H(h, s, "INSERT OR REPLACE INTO " + s.storeName + " (key, value) VALUES (?, ?)", [e, d], function() {
										a(u);
									}, function(_, g) {
										f(g);
									});
								}, function(h) {
									if (h.code === h.QUOTA_ERR) {
										if (t > 0) {
											a(Oe.apply(i, [
												e,
												u,
												r,
												t - 1
											]));
											return;
										}
										f(h);
									}
								});
							});
						}).catch(f);
					});
					return y(o, r), o;
				}
				function ir(e, n, r) {
					return Oe.apply(this, [
						e,
						n,
						r,
						1
					]);
				}
				function ar(e, n) {
					var r = this;
					e = N(e);
					var t = new l(function(i, o) {
						r.ready().then(function() {
							var a = r._dbInfo;
							a.db.transaction(function(f) {
								H(f, a, "DELETE FROM " + a.storeName + " WHERE key = ?", [e], function() {
									i();
								}, function(u, s) {
									o(s);
								});
							});
						}).catch(o);
					});
					return y(t, n), t;
				}
				function fr(e) {
					var n = this, r = new l(function(t, i) {
						n.ready().then(function() {
							var o = n._dbInfo;
							o.db.transaction(function(a) {
								H(a, o, "DELETE FROM " + o.storeName, [], function() {
									t();
								}, function(f, u) {
									i(u);
								});
							});
						}).catch(i);
					});
					return y(r, e), r;
				}
				function ur(e) {
					var n = this, r = new l(function(t, i) {
						n.ready().then(function() {
							var o = n._dbInfo;
							o.db.transaction(function(a) {
								H(a, o, "SELECT COUNT(key) as c FROM " + o.storeName, [], function(f, u) {
									var s = u.rows.item(0).c;
									t(s);
								}, function(f, u) {
									i(u);
								});
							});
						}).catch(i);
					});
					return y(r, e), r;
				}
				function sr(e, n) {
					var r = this, t = new l(function(i, o) {
						r.ready().then(function() {
							var a = r._dbInfo;
							a.db.transaction(function(f) {
								H(f, a, "SELECT key FROM " + a.storeName + " WHERE id = ? LIMIT 1", [e + 1], function(u, s) {
									i(s.rows.length ? s.rows.item(0).key : null);
								}, function(u, s) {
									o(s);
								});
							});
						}).catch(o);
					});
					return y(t, n), t;
				}
				function cr(e) {
					var n = this, r = new l(function(t, i) {
						n.ready().then(function() {
							var o = n._dbInfo;
							o.db.transaction(function(a) {
								H(a, o, "SELECT key FROM " + o.storeName, [], function(f, u) {
									for (var s = [], d = 0; d < u.rows.length; d++) s.push(u.rows.item(d).key);
									t(s);
								}, function(f, u) {
									i(u);
								});
							});
						}).catch(i);
					});
					return y(r, e), r;
				}
				function lr(e) {
					return new l(function(n, r) {
						e.transaction(function(t) {
							t.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'", [], function(i, o) {
								for (var a = [], f = 0; f < o.rows.length; f++) a.push(o.rows.item(f).name);
								n({
									db: e,
									storeNames: a
								});
							}, function(i, o) {
								r(o);
							});
						}, function(t) {
							r(t);
						});
					});
				}
				function vr(e, n) {
					n = W.apply(this, arguments);
					var r = this.config();
					e = typeof e != "function" && e || {}, e.name || (e.name = e.name || r.name, e.storeName = e.storeName || r.storeName);
					var t = this, i;
					return e.name ? i = new l(function(o) {
						var a;
						e.name === r.name ? a = t._dbInfo.db : a = openDatabase(e.name, "", "", 0), e.storeName ? o({
							db: a,
							storeNames: [e.storeName]
						}) : o(lr(a));
					}).then(function(o) {
						return new l(function(a, f) {
							o.db.transaction(function(u) {
								function s(_) {
									return new l(function(g, U) {
										u.executeSql("DROP TABLE IF EXISTS " + _, [], function() {
											g();
										}, function(ne, Z) {
											U(Z);
										});
									});
								}
								for (var d = [], v = 0, h = o.storeNames.length; v < h; v++) d.push(s(o.storeNames[v]));
								l.all(d).then(function() {
									a();
								}).catch(function(_) {
									f(_);
								});
							}, function(u) {
								f(u);
							});
						});
					}) : i = l.reject("Invalid arguments"), y(i, n), i;
				}
				var dr = {
					_driver: "webSQLStorage",
					_initStorage: nr,
					_support: Ze(),
					iterate: or,
					getItem: tr,
					setItem: ir,
					removeItem: ar,
					clear: fr,
					length: ur,
					key: sr,
					keys: cr,
					dropInstance: vr
				};
				function hr() {
					try {
						return typeof localStorage < "u" && "setItem" in localStorage && !!localStorage.setItem;
					} catch {
						return !1;
					}
				}
				function Be(e, n) {
					var r = e.name + "/";
					return e.storeName !== n.storeName && (r += e.storeName + "/"), r;
				}
				function yr() {
					var e = "_localforage_support_test";
					try {
						return localStorage.setItem(e, !0), localStorage.removeItem(e), !1;
					} catch {
						return !0;
					}
				}
				function pr() {
					return !yr() || localStorage.length > 0;
				}
				function mr(e) {
					var n = this, r = {};
					if (e) for (var t in e) r[t] = e[t];
					return r.keyPrefix = Be(e, n._defaultConfig), pr() ? (n._dbInfo = r, r.serializer = ce, l.resolve()) : l.reject();
				}
				function gr(e) {
					var n = this, r = n.ready().then(function() {
						for (var t = n._dbInfo.keyPrefix, i = localStorage.length - 1; i >= 0; i--) {
							var o = localStorage.key(i);
							o.indexOf(t) === 0 && localStorage.removeItem(o);
						}
					});
					return y(r, e), r;
				}
				function _r(e, n) {
					var r = this;
					e = N(e);
					var t = r.ready().then(function() {
						var i = r._dbInfo, o = localStorage.getItem(i.keyPrefix + e);
						return o && (o = i.serializer.deserialize(o)), o;
					});
					return y(t, n), t;
				}
				function br(e, n) {
					var r = this, t = r.ready().then(function() {
						for (var i = r._dbInfo, o = i.keyPrefix, a = o.length, f = localStorage.length, u = 1, s = 0; s < f; s++) {
							var d = localStorage.key(s);
							if (d.indexOf(o) === 0) {
								var v = localStorage.getItem(d);
								if (v && (v = i.serializer.deserialize(v)), v = e(v, d.substring(a), u++), v !== void 0) return v;
							}
						}
					});
					return y(t, n), t;
				}
				function wr(e, n) {
					var r = this, t = r.ready().then(function() {
						var i = r._dbInfo, o;
						try {
							o = localStorage.key(e);
						} catch {
							o = null;
						}
						return o && (o = o.substring(i.keyPrefix.length)), o;
					});
					return y(t, n), t;
				}
				function Er(e) {
					var n = this, r = n.ready().then(function() {
						for (var t = n._dbInfo, i = localStorage.length, o = [], a = 0; a < i; a++) {
							var f = localStorage.key(a);
							f.indexOf(t.keyPrefix) === 0 && o.push(f.substring(t.keyPrefix.length));
						}
						return o;
					});
					return y(r, e), r;
				}
				function Sr(e) {
					var n = this.keys().then(function(r) {
						return r.length;
					});
					return y(n, e), n;
				}
				function Ir(e, n) {
					var r = this;
					e = N(e);
					var t = r.ready().then(function() {
						var i = r._dbInfo;
						localStorage.removeItem(i.keyPrefix + e);
					});
					return y(t, n), t;
				}
				function Rr(e, n, r) {
					var t = this;
					e = N(e);
					var i = t.ready().then(function() {
						n === void 0 && (n = null);
						var o = n;
						return new l(function(a, f) {
							var u = t._dbInfo;
							u.serializer.serialize(n, function(s, d) {
								if (d) f(d);
								else try {
									localStorage.setItem(u.keyPrefix + e, s), a(o);
								} catch (v) {
									(v.name === "QuotaExceededError" || v.name === "NS_ERROR_DOM_QUOTA_REACHED") && f(v), f(v);
								}
							});
						});
					});
					return y(i, r), i;
				}
				function Ar(e, n) {
					if (n = W.apply(this, arguments), e = typeof e != "function" && e || {}, !e.name) {
						var r = this.config();
						e.name = e.name || r.name, e.storeName = e.storeName || r.storeName;
					}
					var t = this, i;
					return e.name ? i = new l(function(o) {
						e.storeName ? o(Be(e, t._defaultConfig)) : o(e.name + "/");
					}).then(function(o) {
						for (var a = localStorage.length - 1; a >= 0; a--) {
							var f = localStorage.key(a);
							f.indexOf(o) === 0 && localStorage.removeItem(f);
						}
					}) : i = l.reject("Invalid arguments"), y(i, n), i;
				}
				var Dr = {
					_driver: "localStorageWrapper",
					_initStorage: mr,
					_support: hr(),
					iterate: br,
					getItem: _r,
					setItem: Rr,
					removeItem: Ir,
					clear: gr,
					length: Sr,
					key: wr,
					keys: Er,
					dropInstance: Ar
				}, Nr = function(n, r) {
					return n === r || typeof n == "number" && typeof r == "number" && isNaN(n) && isNaN(r);
				}, Tr = function(n, r) {
					for (var t = n.length, i = 0; i < t;) {
						if (Nr(n[i], r)) return !0;
						i++;
					}
					return !1;
				}, Pe = Array.isArray || function(e) {
					return Object.prototype.toString.call(e) === "[object Array]";
				}, J = {}, Ce = {}, G = {
					INDEXEDDB: Je,
					WEBSQL: dr,
					LOCALSTORAGE: Dr
				}, xr = [
					G.INDEXEDDB._driver,
					G.WEBSQL._driver,
					G.LOCALSTORAGE._driver
				], re = ["dropInstance"], le = [
					"clear",
					"getItem",
					"iterate",
					"key",
					"keys",
					"length",
					"removeItem",
					"setItem"
				].concat(re), Or = {
					description: "",
					driver: xr.slice(),
					name: "localforage",
					size: 4980736,
					storeName: "keyvaluepairs",
					version: 1
				};
				function Br(e, n) {
					e[n] = function() {
						var r = arguments;
						return e.ready().then(function() {
							return e[n].apply(e, r);
						});
					};
				}
				function ve() {
					for (var e = 1; e < arguments.length; e++) {
						var n = arguments[e];
						if (n) for (var r in n) n.hasOwnProperty(r) && (Pe(n[r]) ? arguments[0][r] = n[r].slice() : arguments[0][r] = n[r]);
					}
					return arguments[0];
				}
				A.exports = new ((function() {
					function e(n) {
						B(this, e);
						for (var r in G) if (G.hasOwnProperty(r)) {
							var t = G[r], i = t._driver;
							this[r] = i, J[i] || this.defineDriver(t);
						}
						this._defaultConfig = ve({}, Or), this._config = ve({}, this._defaultConfig, n), this._driverSet = null, this._initDriver = null, this._ready = !1, this._dbInfo = null, this._wrapLibraryMethodsWithReady(), this.setDriver(this._config.driver).catch(function() {});
					}
					return e.prototype.config = function(r) {
						if ((typeof r > "u" ? "undefined" : E(r)) === "object") {
							if (this._ready) return /* @__PURE__ */ new Error("Can't call config() after localforage has been used.");
							for (var t in r) {
								if (t === "storeName" && (r[t] = r[t].replace(/\\W/g, "_")), t === "version" && typeof r[t] != "number") return /* @__PURE__ */ new Error("Database version must be a number.");
								this._config[t] = r[t];
							}
							return "driver" in r && r.driver ? this.setDriver(this._config.driver) : !0;
						} else return typeof r == "string" ? this._config[r] : this._config;
					}, e.prototype.defineDriver = function(r, t, i) {
						var o = new l(function(a, f) {
							try {
								var u = r._driver, s = /* @__PURE__ */ new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");
								if (!r._driver) {
									f(s);
									return;
								}
								for (var d = le.concat("_initStorage"), v = 0, h = d.length; v < h; v++) {
									var _ = d[v];
									if ((!Tr(re, _) || r[_]) && typeof r[_] != "function") {
										f(s);
										return;
									}
								}
								(function() {
									for (var ne = function(Cr) {
										return function() {
											var Lr = /* @__PURE__ */ new Error("Method " + Cr + " is not implemented by the current driver"), Le = l.reject(Lr);
											return y(Le, arguments[arguments.length - 1]), Le;
										};
									}, Z = 0, Pr = re.length; Z < Pr; Z++) {
										var de = re[Z];
										r[de] || (r[de] = ne(de));
									}
								})();
								var g = function(ne) {
									J[u] && console.info("Redefining LocalForage driver: " + u), J[u] = r, Ce[u] = ne, a();
								};
								"_support" in r ? r._support && typeof r._support == "function" ? r._support().then(g, f) : g(!!r._support) : g(!0);
							} catch (U) {
								f(U);
							}
						});
						return D(o, t, i), o;
					}, e.prototype.driver = function() {
						return this._driver || null;
					}, e.prototype.getDriver = function(r, t, i) {
						var o = J[r] ? l.resolve(J[r]) : l.reject(/* @__PURE__ */ new Error("Driver not found."));
						return D(o, t, i), o;
					}, e.prototype.getSerializer = function(r) {
						var t = l.resolve(ce);
						return D(t, r), t;
					}, e.prototype.ready = function(r) {
						var t = this, i = t._driverSet.then(function() {
							return t._ready === null && (t._ready = t._initDriver()), t._ready;
						});
						return D(i, r, r), i;
					}, e.prototype.setDriver = function(r, t, i) {
						var o = this;
						Pe(r) || (r = [r]);
						var a = this._getSupportedDrivers(r);
						function f() {
							o._config.driver = o.driver();
						}
						function u(v) {
							return o._extend(v), f(), o._ready = o._initStorage(o._config), o._ready;
						}
						function s(v) {
							return function() {
								var h = 0;
								function _() {
									for (; h < v.length;) {
										var g = v[h];
										return h++, o._dbInfo = null, o._ready = null, o.getDriver(g).then(u).catch(_);
									}
									f();
									var U = /* @__PURE__ */ new Error("No available storage method found.");
									return o._driverSet = l.reject(U), o._driverSet;
								}
								return _();
							};
						}
						var d = this._driverSet !== null ? this._driverSet.catch(function() {
							return l.resolve();
						}) : l.resolve();
						return this._driverSet = d.then(function() {
							var v = a[0];
							return o._dbInfo = null, o._ready = null, o.getDriver(v).then(function(h) {
								o._driver = h._driver, f(), o._wrapLibraryMethodsWithReady(), o._initDriver = s(a);
							});
						}).catch(function() {
							f();
							var v = /* @__PURE__ */ new Error("No available storage method found.");
							return o._driverSet = l.reject(v), o._driverSet;
						}), D(this._driverSet, t, i), this._driverSet;
					}, e.prototype.supports = function(r) {
						return !!Ce[r];
					}, e.prototype._extend = function(r) {
						ve(this, r);
					}, e.prototype._getSupportedDrivers = function(r) {
						for (var t = [], i = 0, o = r.length; i < o; i++) {
							var a = r[i];
							this.supports(a) && t.push(a);
						}
						return t;
					}, e.prototype._wrapLibraryMethodsWithReady = function() {
						for (var r = 0, t = le.length; r < t; r++) Br(this, le[r]);
					}, e.prototype.createInstance = function(r) {
						return new e(r);
					}, e;
				})())();
			}, { 3: 3 }]
		}, {}, [4])(4);
	});
})))(), 1);
const he = Fe.default.createInstance({
	driver: Fe.default.INDEXEDDB,
	name: "EventProducerDB",
	version: 1
});
let Me = !1;
async function Qr() {
	return await he.getItem("events", (w) => {
		if (w) throw console.error("Error in restoring events:", w), w;
	}) ?? void 0;
}
const Hr = async () => {
	Me || (await he.ready(), Me = !0);
};
self.onmessage = async (w) => {
	const { data: R } = w;
	switch (R.action) {
		case "init": {
			await Hr();
			const I = await Qr();
			self.postMessage({
				action: "initSuccess",
				events: I
			});
			break;
		}
		case "persist":
			he.setItem("events", R.events).catch(console.error);
			break;
	}
};
`,Ka=typeof self<"u"&&self.Blob&&new Blob(["URL.revokeObjectURL(import.meta.url);",Of],{type:"text/javascript;charset=utf-8"});function gm(e){let t;try{if(t=Ka&&(self.URL||self.webkitURL).createObjectURL(Ka),!t)throw"";const n=new Worker(t,{type:"module",name:e?.name});return n.addEventListener("error",()=>{(self.URL||self.webkitURL).revokeObjectURL(t)}),n}catch{return new Worker("data:text/javascript;charset=utf-8,"+encodeURIComponent(Of),{type:"module",name:e?.name})}}if(!window.Worker)throw new Error("Web Workers are not supported in this browser");var Tl=new gm,fr=[];function dr(){return fr}function wm(){const e=dr();return e.length>=10?e.slice(0,10):e}function jf(e){fr=e}var Sm=e=>new Promise((t,n)=>{Tl.addEventListener("message",r=>{const{data:o}=r;switch(o.action){case"initSuccess":if(o.events){const i=e?.feralEventTypes??[],l=i.length>0?o.events.filter(u=>!i.includes(u.name)):o.events;jf(dr().concat(l))}t();break;default:console.error("Unknown action:",r),n(new Error("Unknown action"))}}),Tl.postMessage({action:"init"})});function Lf(){Tl.postMessage({action:"persist",events:dr()})}function km(e){fr=fr.filter(t=>!e.includes(t.id)),Lf()}function Em(e){fr.push(e),Lf()}var Df=({appInfo:{appName:e,appVersion:t},authorize:n=!0,consentCategory:r,credentials:o,platformData:{browserName:i,browserVersion:l,osName:u},sentTimestamp:a,suppliedHeaders:c})=>{const p=o?.token,m={"app-name":e,"app-version":t,"browser-name":i,"browser-version":l,"client-id":o?.clientId??"clientIDMissing!","consent-category":r,"os-name":u,"requested-sent-timestamp":a};return n&&p&&(m.authorization=p),c&&Object.entries(c).forEach(([h,g])=>{m[h]=g}),m};function zf(e){const t=new URLSearchParams;return e.forEach((n,r)=>{const o=`SendMessageBatchRequestEntry.${r+1}`,i=`${o}.MessageAttribute`;t.append(`${o}.Id`,n.id),t.append(`${o}.MessageBody`,typeof n.payload=="string"?n.payload:JSON.stringify(n.payload)),t.append(`${i}.1.Name`,"Name"),t.append(`${i}.1.Value.StringValue`,n.name),t.append(`${i}.1.Value.DataType`,"String"),n.headers&&(t.append(`${i}.2.Name`,"Headers"),t.append(`${i}.2.Value.DataType`,"String"),t.append(`${i}.2.Value.StringValue`,JSON.stringify(n.headers)))}),t}var Co=typeof globalThis?.crypto?.randomUUID=="function",_m=()=>globalThis.crypto?.randomUUID(),Af=Co?_m:()=>{if(!Co)throw new Error("Uuid not initialized; run await init(); before using uuid.");return"UUID_NOT_INITIALIZED"};async function xm(){if(!Co){const{nanoid:e}=await Qf(async()=>{const{nanoid:t}=await import("./index.browser-B3btpU3i-BjLWcOsa.js");return{nanoid:t}},[]);Af=()=>e()}Co=!0}var Mf=()=>Af(),rt={consentFilteredEvents:{},storingFailedEvents:{},validationFailedEvents:{}},Cm=()=>{rt.consentFilteredEvents={},rt.storingFailedEvents={},rt.validationFailedEvents={}},Uf=({eventName:e,reason:t})=>{const n=rt[t][e]??0;rt[t][e]=n+1},Nm=()=>Object.keys(rt.consentFilteredEvents).length+Object.keys(rt.storingFailedEvents).length+Object.keys(rt.validationFailedEvents).length>0,Im=async()=>{if(Nm()){const e=gr();if(!e.credentialsProvider)throw new Error("CredentialsProvider not set");const t=new Headers({"Content-Type":"application/x-www-form-urlencoded"}),n={headers:Df({appInfo:e.appInfo,authorize:!1,consentCategory:"NECESSARY",credentials:await e.credentialsProvider?.getCredentials(),platformData:e.platform,sentTimestamp:Ou.now()}),id:Mf(),name:"tep-tl-monitoring",payload:JSON.stringify(rt)};globalThis.__tepTlDebug?.debug&&console.log("monitoringEvent sent:",n);const r=zf([n]);fetch(e.tlPublicConsumerUri,{body:r,headers:t,method:"post"}).catch(console.error),Cm()}return Promise.resolve()},$f=async({config:e})=>{const t=wm();if(t.length===0)return Promise.resolve();const n=new Headers({"Content-Type":"application/x-www-form-urlencoded"});if(!e.credentialsProvider)return Promise.reject(new Tf("CredentialsProvider not set"));const r=(await e.credentialsProvider?.getCredentials()).token;r&&n.set("Authorization",`Bearer ${r}`);const o=r?e.tlConsumerUri:e.tlPublicConsumerUri,i=zf(t),l=new AbortController,u=setTimeout(()=>l.abort(),1e4);let a;try{a=await fetch(o,{body:i,headers:n,method:"post",signal:l.signal})}catch{clearTimeout(u),wi(!0);return}if(clearTimeout(u),a.ok){fm()&&wi(!1);const c=await a.text(),p=new window.DOMParser().parseFromString(c,"text/xml"),m=[];if(p.querySelectorAll("SendMessageBatchResponse SendMessageBatchResult SendMessageBatchResultEntry Id").forEach(h=>{h.textContent&&m.push(h.textContent)}),p.querySelectorAll("SendMessageBatchResponse SendMessageBatchResult BatchResultErrorEntry").forEach(h=>{const g=h.querySelector("Id")?.textContent,E=h.querySelector("SenderFault")?.textContent==="true";if(g&&E){m.push(g);const k=t.find(j=>j.id===g);k&&Uf({eventName:k.name,reason:"validationFailedEvents"})}}),km(m),dr().length>0)return $f({config:e})}else{const c=await a.text();console.error("Error sending event batch:",c),wi(!0);const p=new window.DOMParser().parseFromString(c,"text/xml");if(p.querySelector("ErrorResponse Error Type")?.textContent==="Sender"&&p.querySelector("ErrorResponse Error Code")?.textContent==="AWS.SimpleQueueService.BatchEntryIdsNotDistinct"){const m=dr(),h={},g=new Set(m.map(k=>(h[k.id]=k,k.id))),E=Array.from(g).map(k=>h[k]);jf(E)}}return Promise.resolve()},Pm=30*1e3,Tm=60*1e3,Si,ki,Rm=e=>{Si&&clearInterval(Si);const t=e?.eventBatchInterval??Pm;Si=setInterval(()=>{$f({config:gr()}).catch(console.error)},t),ki&&clearInterval(ki);const n=e?.monitoringInterval??Tm;ki=setInterval(()=>{Im().catch(console.error)},n)},Om=async e=>{hm(e),await Promise.all([Ou.synchronize(),xm(),Sm({feralEventTypes:e.feralEventTypes})]),Rm(gr())},jm=new TextEncoder,Lm=e=>e.isWellFormed?e.isWellFormed():!0,Dm=e=>jm.encode(e).length<20480,zm=({payload:e,...t})=>{const n=JSON.stringify(t)+e;return Dm(n)&&Lm(n)},Am=({event:e,id:t,ts:n})=>{const{consentCategory:r,...o}=e;return JSON.stringify({...o,ts:n,uuid:t})},Mm=async({config:e,credentialsProvider:t,event:n})=>{const r=Mf(),o=Ou.now();return{headers:Df({appInfo:e.appInfo,consentCategory:n.consentCategory,credentials:await t?.getCredentials(),platformData:e.platform,sentTimestamp:o,suppliedHeaders:n.headers}),id:r,name:n.name,payload:Am({event:n,id:r,ts:o})}},Um=e=>{if(!e.payload)throw new Error(`Event is missing payload!: ${JSON.stringify(e)}`);if(!e.name)throw new Error(`Event is missing name! ${JSON.stringify(e)}`);if(!e.consentCategory)throw new Error(`Event is missing consentCategory! ${JSON.stringify(e)}`)},$m=async({config:e,credentialsProvider:t,event:n})=>{if(e.strictMode&&Um(n),e.blockedConsentCategories[n.consentCategory])return Uf({eventName:n.name,reason:"consentFilteredEvents"}),Promise.resolve();const r=await Mm({config:e,credentialsProvider:t,event:n});return zm(r)?Em(r):Promise.resolve()},Fm=e=>{const t=gr(),{credentialsProvider:n}=t;if(n)$m({config:t,credentialsProvider:n,event:e}).catch(console.error);else throw new Tf("CredentialsProvider not set")},Ff=e=>Om(e);const Bm=Object.freeze(Object.defineProperty({__proto__:null,bus:dm,getConfig:gr,init:Ff,sendEvent:Fm,setConsentCategory:vm,setCredentialsProvider:mm},Symbol.toStringTag,{value:"Module"})),Vm="kme2TJ7OPFP0qDSQ",No=()=>localStorage.getItem("crate_client_id")||Vm,Wm=e=>localStorage.setItem("crate_client_id",e.trim()),Hm=["user.read","playlists.read","playlists.write","playback"],Km="https://openapi.tidal.com/v2",Qm="DK",Ym="Crate Inbox",Gm="Crate Dismissed",Xm=()=>window.location.origin+"/crate/";async function Bf(){await tm({clientId:No(),credentialsStorageKey:"crate-tidal",scopes:Hm})}async function qm(){return window.location.search.includes("code=")?(await rm(window.location.search),window.history.replaceState(null,"",window.location.pathname),!0):!1}async function Jm(){const e=await nm({redirectUri:Xm()});window.location.href=e}async function Zm(){try{const e=await xo.getCredentials();return e&&e.token&&e.userId?e:null}catch{return null}}async function wr(e,{method:t="GET",body:n,token:r}={}){const o=e.includes("?")?"&":"?",i=await fetch(`${Km}${e}${o}countryCode=${Qm}`,{method:t,headers:{Authorization:`Bearer ${r}`,"Content-Type":"application/vnd.api+json",Accept:"application/vnd.api+json"},body:n?JSON.stringify(n):void 0});if(!i.ok){const u=await i.text(),a=new Error(`${t} ${e}: ${i.status} ${u}`);throw a.status=i.status,a}if(i.status===204||i.status===202)return null;const l=await i.text();return l?JSON.parse(l):null}function bm(e){if(typeof e=="number")return e;const t=/PT(?:(\d+)H)?(?:(\d+)M)?(?:([\d.]+)S)?/.exec(e||"");return t?+(t[1]||0)*3600+ +(t[2]||0)*60+Math.round(+(t[3]||0)):0}async function ev(e){const t=[];let n=`/playlists?filter[r.owners.id]=${e.userId}`;for(;n;){const r=await wr(n,{token:e.token});for(const o of r.data||[])t.push({id:o.id,name:o.attributes?.name||"(unnamed)",numberOfItems:o.attributes?.numberOfItems??null});n=r.links?.next||null}return t}async function Vf(e,t){const n=await wr("/playlists",{method:"POST",token:e.token,body:{data:{type:"playlists",attributes:{name:t,description:"Made with Crate",accessType:"UNLISTED"}}}});return{id:n.data.id,name:n.data.attributes?.name||t,numberOfItems:0}}async function $r(e,t){const n=[],r=new Map;let o=`/playlists/${t}/relationships/items?include=items,items.artists,items.albums`;for(;o;){const i=await wr(o,{token:e.token});for(const l of i.included||[])r.set(`${l.type}/${l.id}`,l);for(const l of i.data||[]){if(l.type!=="tracks")continue;const u=r.get(`tracks/${l.id}`),a=u?.attributes||{},c=(u?.relationships?.artists?.data||[]).map(m=>r.get(`artists/${m.id}`)?.attributes?.name).filter(Boolean).join(", "),p=(u?.relationships?.albums?.data||[]).map(m=>r.get(`albums/${m.id}`)?.attributes?.title).filter(Boolean)[0];n.push({trackId:l.id,itemId:l.meta?.itemId,title:a.title||`Track ${l.id}`,artist:c||"",album:p||"",duration:bm(a.duration)})}o=i.links?.next||null}return n}async function Qa(e,t,n){await wr(`/playlists/${t}/relationships/items`,{method:"POST",token:e.token,body:{data:[{id:n,type:"tracks"}]}})}async function Ya(e,t,n){await wr(`/playlists/${t}/relationships/items`,{method:"DELETE",token:e.token,body:{data:[{id:n.trackId,type:"tracks",meta:{itemId:n.itemId}}]}})}async function Ga(e,t,n,r){const o=localStorage.getItem(r),l=o&&t.find(u=>u.id===o)||t.find(u=>u.name===n)||await Vf(e,n);return localStorage.setItem(r,l.id),l}async function tv(e){const t=await ev(e),n=await Ga(e,t,Ym,"crate_inbox"),r=await Ga(e,t,Gm,"crate_dismissed");return{inbox:n,dismissed:r,playlists:t.filter(o=>o.id!==n.id&&o.id!==r.id)}}let Fr=null;function nv(){return Fr||(Fr=(async()=>{await Ff({appInfo:{appName:"Crate",appVersion:"0.1.0"},blockedConsentCategories:{NECESSARY:!1,PERFORMANCE:!1,TARGETING:!0},credentialsProvider:xo,platform:{browserName:navigator.userAgent.includes("Firefox")?"Firefox":"Chromium",browserVersion:"unknown",osName:navigator.platform||"unknown"},tlConsumerUri:"https://ec.tidal.com/api/event-batch",tlPublicConsumerUri:"https://ec.tidal.com/api/public/event-batch"}),Gf(xo),Xf(Bm)})().catch(e=>{throw Fr=null,e})),Fr}const rv=12e3;function Xa(e,t,n=rv){return new Promise((r,o)=>{const i=setTimeout(()=>o(new Error(`${t} timed out after ${n/1e3}s`)),n);Promise.resolve(e).then(l=>{clearTimeout(i),r(l)},l=>{clearTimeout(i),o(l)})})}const qa=e=>String(e?.message||e||"unknown"),Wf=e=>e?.name==="NotAllowedError"||/notallowed|not allowed|user (gesture|activation)|interact with the document/i.test(String(e?.message||e)),Ei=e=>/\b(401|403)\b/.test(String(e?.message||e));let _i=!1;const ov=e=>/no active player|mediasource|not supported|unsupported/i.test(String(e?.message||e));function iv(e){if(!e||e<90)return 0;const t=+(localStorage.getItem("crate_start_bias")||0);return Math.max(0,Math.min(Math.round(e*.25),45)+t)}let Hf=!1;const Ja=()=>Hf;let Rl=0,Oe=null,be=!1,xi=!1;const lv="data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAgD4AAAB9AAACABAAZGF0YQAAAAA=";function Kf(){return Oe||(Oe=new Audio,Oe.playsInline=!0,Oe.preload="auto"),Oe}function uv(){if(xi||be)return;const e=Kf();e.src=lv,xi=!0;const t=e.play();t?.catch&&t.catch(()=>{xi=!1})}function ju(){be=!1,Oe&&Gt(()=>Oe.pause())}async function av(e){const t=await xo.getCredentials(),n=await fetch(`https://api.tidal.com/v1/tracks/${e}/playbackinfo?audioquality=LOW&playbackmode=STREAM&assetpresentation=PREVIEW`,{headers:{Authorization:`Bearer ${t.token}`}});if(!n.ok)throw new Error(`preview playbackinfo: ${n.status}`);const r=await n.json(),i=JSON.parse(atob(r.manifest)).urls?.[0];if(!i)throw new Error(`no url in ${r.manifestMimeType} manifest`);const l=Kf();be=!0,l.src=i;try{await l.play()}catch(u){if(!Wf(u))throw be=!1,u;return{mode:"preview",blocked:!0}}return{mode:"preview"}}async function sv(e,t,n){if(await Xa(nv(),"player init"),n())return{stale:!0};if(await Xa(Yf({productId:String(e),productType:"track",sourceId:"crate",sourceType:"OTHER"},t),"track load"),n())return{stale:!0};ju();try{await es()}catch(r){if(!Wf(r))throw r;return{mode:"full",blocked:!0}}return{mode:"full"}}async function cv(e,t){const n=++Rl,r=()=>n!==Rl;let o=_i?new Error("player SDK unavailable in this browser"):null;for(let i=0;!_i&&i<2;i++)try{return await sv(e,t,r)}catch(l){if(r())return{stale:!0};if(o=l,ov(l)){_i=!0;break}if(Ei(l)||i===1)break;console.warn("[crate] full-track load failed, retrying:",l)}console.error("[crate] full-track load failed:",o);try{const i=await av(e);return r()?(ju(),{stale:!0}):i}catch(i){if(r())return{stale:!0};throw console.error("[crate] preview fallback failed too:",i),Ei(o)&&Ei(i)&&(Hf=!0),new Error(`full: ${qa(o)} · preview: ${qa(i)}`)}}function Gt(e,t){try{const n=e();return n&&typeof n.catch=="function"&&n.catch(()=>{}),n}catch{return t}}const fv={play:()=>{try{return Promise.resolve(be?Oe.play():es())}catch(e){return Promise.reject(e)}},pause:()=>Gt(()=>be?Oe.pause():Lu()),seek:e=>Gt(()=>{be?Oe.currentTime=Math.max(0,e):Zf(Math.max(0,e))}),position:()=>Gt(()=>be?Oe.currentTime:Jf(),0)||0,state:()=>Gt(()=>be?Oe.paused?"NOT_PLAYING":"PLAYING":qf(),"NOT_PLAYING"),stop:()=>{Rl++,ju(),Gt(()=>Lu())}};function dv({mode:e,onDone:t,err:n}){const[r,o]=T.useState(No()),[i,l]=T.useState(!1),u=async()=>{l(!0);try{await Bf(),await Jm()}catch(a){alert(a.message||a),l(!1)}};return S.jsxs("div",{className:"app center-col",children:[S.jsx("h1",{className:"logo",children:"Crate"}),S.jsx("p",{className:"muted",children:"Tinder for your DJ pool."}),e==="setup"||!No()?S.jsxs(S.Fragment,{children:[S.jsxs("p",{className:"muted small",children:["One-time setup: create an app at"," ",S.jsx("a",{href:"https://developer.tidal.com",target:"_blank",rel:"noreferrer",children:"developer.tidal.com"})," ","and paste its Client ID. Register this page's URL as a redirect URI:",S.jsx("br",{}),S.jsx("code",{children:window.location.origin+"/crate/"})]}),S.jsx("input",{type:"text",placeholder:"Tidal Client ID",value:r,onChange:a=>o(a.target.value)}),S.jsx("button",{disabled:!r.trim(),onClick:()=>{Wm(r),t()},children:"Save"})]}):S.jsxs(S.Fragment,{children:[S.jsx("button",{onClick:u,disabled:i,children:i?"Connecting…":"Connect Tidal"}),n&&S.jsx("div",{className:"error",children:n})]})]})}function pv({playlists:e,targetId:t,onPick:n,onCreate:r,inboxCount:o}){const[i,l]=T.useState(!1),[u,a]=T.useState(""),c=async()=>{u.trim()&&(await r(u.trim()),a(""),l(!1))};return S.jsxs("div",{className:"picker",children:[S.jsxs("div",{className:"row",children:[S.jsxs("select",{value:t,onChange:p=>n(p.target.value),children:[S.jsx("option",{value:"",children:"→ target playlist…"}),e.map(p=>S.jsxs("option",{value:p.id,children:[p.name,p.numberOfItems!=null?` (${p.numberOfItems})`:""]},p.id))]}),S.jsx("button",{className:"secondary compact",onClick:()=>l(p=>!p),children:"＋"}),S.jsx("span",{className:"muted count",children:o})]}),i&&S.jsxs("div",{className:"row",children:[S.jsx("input",{type:"text",placeholder:"New playlist name (the occasion)",value:u,onChange:p=>a(p.target.value),onKeyDown:p=>p.key==="Enter"&&c(),autoFocus:!0}),S.jsx("button",{className:"compact",onClick:c,children:"Create"})]})]})}const Za=90;function Ci({track:e,canAdd:t}){return S.jsxs(S.Fragment,{children:[S.jsx("div",{className:"track-title",children:e.title}),S.jsx("div",{className:"track-artist",children:e.artist}),S.jsxs("div",{className:"muted",children:[e.album,e.duration?` · ${Math.floor(e.duration/60)}:${String(e.duration%60).padStart(2,"0")}`:""]}),S.jsxs("div",{className:"swipe-hints muted small",children:["← dismiss · tap ⏯ · add →",t?"":" (pick a playlist)"]})]})}function hv({queue:e,onSwipe:t,session:n,onRefresh:r,canAdd:o}){const[i,l]=T.useState(null),[u,a]=T.useState(null),c=T.useRef(null),p=e[0],m=e[1];T.useEffect(()=>l(null),[p?.itemId]);const h=f=>{!p||u||f==="right"&&!o||(a({item:p,dir:f}),l(null),t(f),setTimeout(()=>a(null),240))};if(T.useEffect(()=>{const f=v=>{v.target.tagName==="INPUT"||v.target.tagName==="SELECT"||(v.key==="ArrowLeft"?h("left"):v.key==="ArrowRight"&&h("right"))};return window.addEventListener("keydown",f),()=>window.removeEventListener("keydown",f)}),!p&&!u)return S.jsxs("div",{className:"card deck-empty",children:[S.jsx("p",{className:"big-emoji",children:"📭"}),S.jsx("p",{children:"Inbox empty."}),S.jsx("p",{className:"muted",children:"Add tracks to “Crate Inbox” from the Tidal app, or ask Claude to trawl some charts."}),S.jsxs("p",{className:"muted small",children:["This session: ",n.added," added · ",n.dismissed," dismissed"]}),S.jsx("button",{className:"secondary",onClick:r,children:"Refresh"})]});const g=f=>{u||(c.current={x:f.clientX,y:f.clientY},f.currentTarget.setPointerCapture(f.pointerId))},E=f=>{c.current&&l({dx:f.clientX-c.current.x,dy:f.clientY-c.current.y})},k=()=>{if(!c.current)return;const f=i?.dx||0,v=i?.dy||0;c.current=null,Math.abs(f)>Za?h(f>0?"right":"left"):(Math.abs(f)<8&&Math.abs(v)<8&&window.dispatchEvent(new Event("crate-toggle-play")),l(null))},j=i?.dx||0,d={transform:j?`translateX(${j}px) rotate(${j/20}deg)`:"",transition:i?"none":void 0},s=Math.abs(j)>Za/2?j>0?"add":"dismiss":null;return S.jsxs("div",{className:"deck",children:[S.jsxs("div",{className:"deck-stack",children:[m&&S.jsx("div",{className:"card track-card behind",children:S.jsx(Ci,{track:m,canAdd:o})},m.itemId),p&&S.jsxs("div",{className:`card track-card top ${s||""}`,style:d,onPointerDown:g,onPointerMove:E,onPointerUp:k,onPointerCancel:k,children:[s==="add"&&S.jsx("div",{className:"stamp stamp-add",children:"ADD"}),s==="dismiss"&&S.jsx("div",{className:"stamp stamp-dismiss",children:"NOPE"}),S.jsx(Ci,{track:p,canAdd:o})]},p.itemId),u&&S.jsx("div",{className:`card track-card fling-${u.dir}`,children:S.jsx(Ci,{track:u.item,canAdd:o})},`leaving-${u.item.itemId}`)]}),S.jsxs("div",{className:"deck-buttons row",children:[S.jsx("button",{className:"secondary half",disabled:!p,onClick:()=>h("left"),children:"✕ Dismiss"}),S.jsx("button",{className:"half",disabled:!p||!o,onClick:()=>h("right"),children:"♥ Add"})]})]})}const Io=e=>`${Math.floor(e/60)}:${String(Math.floor(e%60)).padStart(2,"0")}`,ba="https://embed.tidal.com";function mv({track:e,next:t,reason:n,onRetry:r}){const o=T.useRef(new Map),[i,l]=T.useState({currentTime:0,duration:30,paused:!0}),u=T.useRef(!0),a=(p,m)=>{o.current.get(p)?.contentWindow?.postMessage(JSON.stringify({commandName:m}),ba)};T.useEffect(()=>{const p=m=>{if(m.origin!==ba||m.source!==o.current.get(e.itemId)?.contentWindow)return;let h=m.data;if(typeof h=="string")try{h=JSON.parse(h)}catch{return}h&&typeof h.currentTime=="number"&&l({currentTime:h.currentTime,duration:h.duration||30,paused:!!h.paused})};return window.addEventListener("message",p),()=>window.removeEventListener("message",p)},[e.itemId]),T.useEffect(()=>{l({currentTime:0,duration:30,paused:!0});for(const p of o.current.keys())p!==e.itemId&&a(p,"pause");u.current&&a(e.itemId,"play")},[e.itemId]),T.useEffect(()=>{const p=()=>{l(h=>(a(e.itemId,h.paused?"play":"pause"),u.current=h.paused,{...h,paused:!h.paused}))},m=h=>{h.target.tagName==="INPUT"||h.target.tagName==="SELECT"||h.key===" "&&(h.preventDefault(),p())};return window.addEventListener("keydown",m),window.addEventListener("crate-toggle-play",p),()=>{window.removeEventListener("keydown",m),window.removeEventListener("crate-toggle-play",p)}},[e.itemId]);const c=[e,t].filter(Boolean);return S.jsxs("div",{className:"player card",children:[c.map(p=>S.jsx("iframe",{ref:m=>{m?o.current.set(p.itemId,m):o.current.delete(p.itemId)},className:"embed",style:p===e?void 0:{display:"none"},title:`Tidal player ${p.title}`,src:`https://embed.tidal.com/tracks/${p.trackId}`,allow:"encrypted-media; autoplay",onLoad:()=>p===e&&u.current&&a(p.itemId,"play")},p.itemId)),S.jsx("div",{className:"progress-bar",children:S.jsx("div",{className:"progress-bar-fill",style:{width:i.duration?`${i.currentTime/i.duration*100}%`:0}})}),S.jsxs("div",{className:"row",children:[S.jsx("button",{className:"secondary compact",onClick:()=>window.dispatchEvent(new Event("crate-toggle-play")),children:i.paused?"▶":"⏸"}),S.jsxs("span",{className:"stopwatch",children:[Io(i.currentTime)," / ",Io(i.duration)]}),S.jsx("a",{className:"small right",href:`tidal://track/${e.trackId}`,children:"Open in Tidal app"})]}),S.jsxs("div",{className:"row muted small",children:[S.jsxs("span",{className:"embed-reason",children:["Embed mode — ",String(n).slice(0,200)]}),r&&S.jsx("button",{className:"secondary compact right",onClick:r,children:"↻ Retry"})]})]})}function vv({track:e,next:t,controls:n}){const[r,o]=T.useState(0),[i,l]=T.useState(!1),[u,a]=T.useState(!1),[c,p]=T.useState(!1),[m,h]=T.useState(""),[g,E]=T.useState(0),k=T.useRef(null),j=u?30:e.duration||0;T.useEffect(()=>{if(Ja()){h("Tidal is not serving this app in-page audio");return}let y=!1;h(""),p(!1);const _=iv(e.duration||0);return o(_),(async()=>{try{const C=await cv(e.trackId,_);if(y||C.stale)return;a(C.mode==="preview"),p(!!C.blocked),l(!C.blocked)}catch(C){if(y)return;l(!1),a(!1),h(String(C?.message||C))}})(),()=>{y=!0,n.stop()}},[e.trackId,g]),T.useEffect(()=>{const y=setInterval(()=>{o(n.position()||0);const _=n.state()==="PLAYING";l(_),_&&p(!1)},400);return()=>clearInterval(y)},[n]);const d=y=>{n.seek(Math.min(Math.max(0,y),Math.max(0,j-1))),o(y)},s=y=>d(Math.round(j*y)),f=y=>{const _=k.current.getBoundingClientRect();s(Math.min(1,Math.max(0,(y.clientX-_.left)/_.width)))},v=()=>{n.state()==="PLAYING"?n.pause():Promise.resolve(n.play()).then(()=>p(!1)).catch(y=>h(String(y?.message||y)))};return T.useEffect(()=>{const y=_=>{_.target.tagName==="INPUT"||_.target.tagName==="SELECT"||(_.key===" "?(_.preventDefault(),v()):["1","2","3","4"].includes(_.key)?s({1:0,2:.25,3:.5,4:.75}[_.key]):_.key===","?d(r-10):_.key==="."&&d(r+10))};return window.addEventListener("keydown",y),window.addEventListener("crate-toggle-play",v),()=>{window.removeEventListener("keydown",y),window.removeEventListener("crate-toggle-play",v)}}),m?S.jsx(mv,{track:e,next:t,reason:m,onRetry:Ja()?null:()=>E(y=>y+1)}):S.jsxs("div",{className:"player card",children:[u&&S.jsx("div",{className:"muted small",children:"30s preview mode"}),c&&S.jsx("div",{className:"muted small",children:"Autoplay blocked by the browser — hit ▶ or tap the card to start"}),S.jsx("div",{className:"progress-bar tall",ref:k,onPointerDown:f,children:S.jsx("div",{className:"progress-bar-fill",style:{width:j?`${r/j*100}%`:0}})}),S.jsxs("div",{className:"row player-times",children:[S.jsx("span",{className:"stopwatch",children:Io(r)}),S.jsx("span",{className:"stopwatch right",children:Io(j)})]}),S.jsxs("div",{className:"row player-controls",children:[[0,.25,.5,.75].map(y=>S.jsxs("button",{className:"secondary compact",onClick:()=>s(y),children:[y*100,"%"]},y)),S.jsx("button",{className:"secondary compact",onClick:()=>d(r-10),children:"-10s"}),S.jsx("button",{className:"compact",onClick:v,children:i?"⏸":"▶"}),S.jsx("button",{className:"secondary compact",onClick:()=>d(r+10),children:"+10s"})]})]})}function yv(){const[e,t]=T.useState("boot"),[n,r]=T.useState(null),[o,i]=T.useState(null),[l,u]=T.useState(null),[a,c]=T.useState([]),[p,m]=T.useState(localStorage.getItem("crate_playlist")||""),[h,g]=T.useState([]),[E,k]=T.useState({added:0,dismissed:0}),[j,d]=T.useState([]),[s,f]=T.useState(!1),[v,y]=T.useState(""),_=T.useRef(null);_.current=n;const C=T.useCallback(async()=>{y(""),No();try{await Bf(),await qm();const O=await Zm();if(!O)return t("login");r(O),t("loading");const{inbox:$,dismissed:Ee,playlists:Me}=await tv(O);i($),u(Ee),c(Me);const A=await $r(O,$.id);g(A),t("ready")}catch(O){y(String(O.message||O)),t("login")}},[]);T.useEffect(()=>{C()},[C]);const P=T.useCallback(async()=>{if(!(!_.current||!o)){t("loading");try{g(await $r(_.current,o.id))}catch(O){y(String(O.message||O))}t("ready")}},[o]),W=O=>{m(O),localStorage.setItem("crate_playlist",O)},D=async O=>{const $=await Vf(n,O);c(Ee=>[...Ee,$]),W($.id)},ve=T.useCallback(O=>{const $=h[0];if(!$)return;if(O==="right"&&!p){y("Pick a target playlist first");return}const Ee=O==="right"?p:l?.id;y(""),g(A=>A.slice(1)),k(A=>O==="right"?{...A,added:A.added+1}:{...A,dismissed:A.dismissed+1}),d(A=>[{item:$,dir:O,listId:Ee},...A].slice(0,10));const Me=_.current;(async()=>{try{if(Ee)try{await Qa(Me,Ee,$.trackId)}catch(A){if(A.status!==409&&A.status!==400)throw A}await Ya(Me,o.id,$)}catch(A){y(`${$.title}: ${String(A.message||A)}`),g(x=>[$,...x]),k(x=>O==="right"?{...x,added:Math.max(0,x.added-1)}:{...x,dismissed:Math.max(0,x.dismissed-1)}),d(x=>x.filter(R=>R.item.itemId!==$.itemId))}})()},[h,p,o,l]),qe=T.useCallback(async()=>{const O=j[0];if(!O||s)return;f(!0),y("");const $=_.current;try{if(await Qa($,o.id,O.item.trackId),O.listId)try{const x=(await $r($,O.listId)).find(R=>R.trackId===O.item.trackId);x&&await Ya($,O.listId,x)}catch{}const Me=(await $r($,o.id)).find(A=>A.trackId===O.item.trackId);g(A=>Me?[Me,...A]:A),k(A=>O.dir==="right"?{...A,added:Math.max(0,A.added-1)}:{...A,dismissed:Math.max(0,A.dismissed-1)}),d(A=>A.slice(1))}catch(Ee){y(String(Ee.message||Ee))}f(!1)},[j,s,o]);return T.useEffect(()=>{const O=$=>{$.target.tagName==="INPUT"||$.target.tagName==="SELECT"||$.key==="z"&&($.metaKey||$.ctrlKey)&&qe()};return window.addEventListener("keydown",O),()=>window.removeEventListener("keydown",O)},[ve,qe]),T.useEffect(()=>{const O=()=>uv();return window.addEventListener("pointerdown",O,!0),window.addEventListener("keydown",O,!0),()=>{window.removeEventListener("pointerdown",O,!0),window.removeEventListener("keydown",O,!0)}},[]),e==="boot"?S.jsx("div",{className:"app center muted",children:"…"}):e==="setup"||e==="login"?S.jsx(dv,{mode:e,onDone:C,err:v}):S.jsxs("div",{className:"app",children:[S.jsx(pv,{playlists:a,targetId:p,onPick:W,onCreate:D,inboxCount:h.length}),v&&S.jsx("div",{className:"error",children:v}),e==="loading"?S.jsx("div",{className:"center muted",children:"Loading inbox…"}):S.jsxs(S.Fragment,{children:[S.jsx(hv,{queue:h,onSwipe:ve,session:E,onRefresh:P,canAdd:!!p}),h[0]&&S.jsx(vv,{track:h[0],next:h[1],controls:fv}),j.length>0&&S.jsxs("button",{className:"secondary undo",onClick:qe,disabled:s,children:["↩︎ Undo ",j[0].dir==="right"?"add":"dismiss"]}),S.jsx("button",{className:"secondary refresh",onClick:()=>window.location.reload(),children:"↻ Refresh"})]})]})}hf(document.getElementById("root")).render(S.jsx(yv,{}));
