import{_ as Df,d as Mf,V as Ka,e as Nu,F as Af,E as Uf,z as Ff,H as $f,Q as Bf}from"./index-AioNJujd-BVVAomYy.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();var Qa={exports:{}},xo={},Ya={exports:{}},z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fr=Symbol.for("react.element"),Vf=Symbol.for("react.portal"),Wf=Symbol.for("react.fragment"),Hf=Symbol.for("react.strict_mode"),Kf=Symbol.for("react.profiler"),Qf=Symbol.for("react.provider"),Yf=Symbol.for("react.context"),Xf=Symbol.for("react.forward_ref"),Gf=Symbol.for("react.suspense"),qf=Symbol.for("react.memo"),Jf=Symbol.for("react.lazy"),Iu=Symbol.iterator;function Zf(e){return e===null||typeof e!="object"?null:(e=Iu&&e[Iu]||e["@@iterator"],typeof e=="function"?e:null)}var Xa={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ga=Object.assign,qa={};function gn(e,t,n){this.props=e,this.context=t,this.refs=qa,this.updater=n||Xa}gn.prototype.isReactComponent={};gn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};gn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ja(){}Ja.prototype=gn.prototype;function xl(e,t,n){this.props=e,this.context=t,this.refs=qa,this.updater=n||Xa}var Cl=xl.prototype=new Ja;Cl.constructor=xl;Ga(Cl,gn.prototype);Cl.isPureReactComponent=!0;var Pu=Array.isArray,Za=Object.prototype.hasOwnProperty,Nl={current:null},ba={key:!0,ref:!0,__self:!0,__source:!0};function es(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)Za.call(t,r)&&!ba.hasOwnProperty(r)&&(o[r]=t[r]);var u=arguments.length-2;if(u===1)o.children=n;else if(1<u){for(var a=Array(u),f=0;f<u;f++)a[f]=arguments[f+2];o.children=a}if(e&&e.defaultProps)for(r in u=e.defaultProps,u)o[r]===void 0&&(o[r]=u[r]);return{$$typeof:fr,type:e,key:i,ref:l,props:o,_owner:Nl.current}}function bf(e,t){return{$$typeof:fr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Il(e){return typeof e=="object"&&e!==null&&e.$$typeof===fr}function ed(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Tu=/\/+/g;function Vo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?ed(""+e.key):t.toString(36)}function Ur(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case fr:case Vf:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+Vo(l,0):r,Pu(o)?(n="",e!=null&&(n=e.replace(Tu,"$&/")+"/"),Ur(o,t,n,"",function(f){return f})):o!=null&&(Il(o)&&(o=bf(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(Tu,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",Pu(e))for(var u=0;u<e.length;u++){i=e[u];var a=r+Vo(i,u);l+=Ur(i,t,n,a,o)}else if(a=Zf(e),typeof a=="function")for(e=a.call(e),u=0;!(i=e.next()).done;)i=i.value,a=r+Vo(i,u++),l+=Ur(i,t,n,a,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Sr(e,t,n){if(e==null)return e;var r=[],o=0;return Ur(e,r,"","",function(i){return t.call(n,i,o++)}),r}function td(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ye={current:null},Fr={transition:null},nd={ReactCurrentDispatcher:ye,ReactCurrentBatchConfig:Fr,ReactCurrentOwner:Nl};function ts(){throw Error("act(...) is not supported in production builds of React.")}z.Children={map:Sr,forEach:function(e,t,n){Sr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Sr(e,function(){t++}),t},toArray:function(e){return Sr(e,function(t){return t})||[]},only:function(e){if(!Il(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};z.Component=gn;z.Fragment=Wf;z.Profiler=Kf;z.PureComponent=xl;z.StrictMode=Hf;z.Suspense=Gf;z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=nd;z.act=ts;z.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ga({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=Nl.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(a in t)Za.call(t,a)&&!ba.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&u!==void 0?u[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){u=Array(a);for(var f=0;f<a;f++)u[f]=arguments[f+2];r.children=u}return{$$typeof:fr,type:e.type,key:o,ref:i,props:r,_owner:l}};z.createContext=function(e){return e={$$typeof:Yf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Qf,_context:e},e.Consumer=e};z.createElement=es;z.createFactory=function(e){var t=es.bind(null,e);return t.type=e,t};z.createRef=function(){return{current:null}};z.forwardRef=function(e){return{$$typeof:Xf,render:e}};z.isValidElement=Il;z.lazy=function(e){return{$$typeof:Jf,_payload:{_status:-1,_result:e},_init:td}};z.memo=function(e,t){return{$$typeof:qf,type:e,compare:t===void 0?null:t}};z.startTransition=function(e){var t=Fr.transition;Fr.transition={};try{e()}finally{Fr.transition=t}};z.unstable_act=ts;z.useCallback=function(e,t){return ye.current.useCallback(e,t)};z.useContext=function(e){return ye.current.useContext(e)};z.useDebugValue=function(){};z.useDeferredValue=function(e){return ye.current.useDeferredValue(e)};z.useEffect=function(e,t){return ye.current.useEffect(e,t)};z.useId=function(){return ye.current.useId()};z.useImperativeHandle=function(e,t,n){return ye.current.useImperativeHandle(e,t,n)};z.useInsertionEffect=function(e,t){return ye.current.useInsertionEffect(e,t)};z.useLayoutEffect=function(e,t){return ye.current.useLayoutEffect(e,t)};z.useMemo=function(e,t){return ye.current.useMemo(e,t)};z.useReducer=function(e,t,n){return ye.current.useReducer(e,t,n)};z.useRef=function(e){return ye.current.useRef(e)};z.useState=function(e){return ye.current.useState(e)};z.useSyncExternalStore=function(e,t,n){return ye.current.useSyncExternalStore(e,t,n)};z.useTransition=function(){return ye.current.useTransition()};z.version="18.3.1";Ya.exports=z;var D=Ya.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rd=D,od=Symbol.for("react.element"),id=Symbol.for("react.fragment"),ld=Object.prototype.hasOwnProperty,ud=rd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ad={key:!0,ref:!0,__self:!0,__source:!0};function ns(e,t,n){var r,o={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)ld.call(t,r)&&!ad.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:od,type:e,key:i,ref:l,props:o,_owner:ud.current}}xo.Fragment=id;xo.jsx=ns;xo.jsxs=ns;Qa.exports=xo;var k=Qa.exports,rs={exports:{}},Pe={},os={exports:{}},is={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(x,R){var L=x.length;x.push(R);e:for(;0<L;){var q=L-1>>>1,ne=x[q];if(0<o(ne,R))x[q]=R,x[L]=ne,L=q;else break e}}function n(x){return x.length===0?null:x[0]}function r(x){if(x.length===0)return null;var R=x[0],L=x.pop();if(L!==R){x[0]=L;e:for(var q=0,ne=x.length,gr=ne>>>1;q<gr;){var It=2*(q+1)-1,Bo=x[It],Pt=It+1,wr=x[Pt];if(0>o(Bo,L))Pt<ne&&0>o(wr,Bo)?(x[q]=wr,x[Pt]=L,q=Pt):(x[q]=Bo,x[It]=L,q=It);else if(Pt<ne&&0>o(wr,L))x[q]=wr,x[Pt]=L,q=Pt;else break e}}return R}function o(x,R){var L=x.sortIndex-R.sortIndex;return L!==0?L:x.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,u=l.now();e.unstable_now=function(){return l.now()-u}}var a=[],f=[],p=1,m=null,h=3,y=!1,w=!1,S=!1,O=typeof setTimeout=="function"?setTimeout:null,c=typeof clearTimeout=="function"?clearTimeout:null,s=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function d(x){for(var R=n(f);R!==null;){if(R.callback===null)r(f);else if(R.startTime<=x)r(f),R.sortIndex=R.expirationTime,t(a,R);else break;R=n(f)}}function v(x){if(S=!1,d(x),!w)if(n(a)!==null)w=!0,lt(E);else{var R=n(f);R!==null&&kn(v,R.startTime-x)}}function E(x,R){w=!1,S&&(S=!1,c(P),P=-1),y=!0;var L=h;try{for(d(R),m=n(a);m!==null&&(!(m.expirationTime>R)||x&&!T());){var q=m.callback;if(typeof q=="function"){m.callback=null,h=m.priorityLevel;var ne=q(m.expirationTime<=R);R=e.unstable_now(),typeof ne=="function"?m.callback=ne:m===n(a)&&r(a),d(R)}else r(a);m=n(a)}if(m!==null)var gr=!0;else{var It=n(f);It!==null&&kn(v,It.startTime-R),gr=!1}return gr}finally{m=null,h=L,y=!1}}var I=!1,N=null,P=-1,V=5,j=-1;function T(){return!(e.unstable_now()-j<V)}function A(){if(N!==null){var x=e.unstable_now();j=x;var R=!0;try{R=N(!0,x)}finally{R?ae():(I=!1,N=null)}}else I=!1}var ae;if(typeof s=="function")ae=function(){s(A)};else if(typeof MessageChannel<"u"){var H=new MessageChannel,K=H.port2;H.port1.onmessage=A,ae=function(){K.postMessage(null)}}else ae=function(){O(A,0)};function lt(x){N=x,I||(I=!0,ae())}function kn(x,R){P=O(function(){x(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(x){x.callback=null},e.unstable_continueExecution=function(){w||y||(w=!0,lt(E))},e.unstable_forceFrameRate=function(x){0>x||125<x?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<x?Math.floor(1e3/x):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(x){switch(h){case 1:case 2:case 3:var R=3;break;default:R=h}var L=h;h=R;try{return x()}finally{h=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(x,R){switch(x){case 1:case 2:case 3:case 4:case 5:break;default:x=3}var L=h;h=x;try{return R()}finally{h=L}},e.unstable_scheduleCallback=function(x,R,L){var q=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?q+L:q):L=q,x){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=L+ne,x={id:p++,callback:R,priorityLevel:x,startTime:L,expirationTime:ne,sortIndex:-1},L>q?(x.sortIndex=L,t(f,x),n(a)===null&&x===n(f)&&(S?(c(P),P=-1):S=!0,kn(v,L-q))):(x.sortIndex=ne,t(a,x),w||y||(w=!0,lt(E))),x},e.unstable_shouldYield=T,e.unstable_wrapCallback=function(x){var R=h;return function(){var L=h;h=R;try{return x.apply(this,arguments)}finally{h=L}}}})(is);os.exports=is;var sd=os.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cd=D,Ie=sd;function g(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ls=new Set,Wn={};function Vt(e,t){fn(e,t),fn(e+"Capture",t)}function fn(e,t){for(Wn[e]=t,e=0;e<t.length;e++)ls.add(t[e])}var tt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Si=Object.prototype.hasOwnProperty,fd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ru={},Ou={};function dd(e){return Si.call(Ou,e)?!0:Si.call(Ru,e)?!1:fd.test(e)?Ou[e]=!0:(Ru[e]=!0,!1)}function pd(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function hd(e,t,n,r){if(t===null||typeof t>"u"||pd(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ge(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var ue={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ue[e]=new ge(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ue[t]=new ge(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ue[e]=new ge(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ue[e]=new ge(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ue[e]=new ge(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ue[e]=new ge(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ue[e]=new ge(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ue[e]=new ge(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ue[e]=new ge(e,5,!1,e.toLowerCase(),null,!1,!1)});var Pl=/[\-:]([a-z])/g;function Tl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Pl,Tl);ue[t]=new ge(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Pl,Tl);ue[t]=new ge(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Pl,Tl);ue[t]=new ge(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ue[e]=new ge(e,1,!1,e.toLowerCase(),null,!1,!1)});ue.xlinkHref=new ge("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ue[e]=new ge(e,1,!1,e.toLowerCase(),null,!0,!0)});function Rl(e,t,n,r){var o=ue.hasOwnProperty(t)?ue[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(hd(t,n,o,r)&&(n=null),r||o===null?dd(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var it=cd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,kr=Symbol.for("react.element"),Qt=Symbol.for("react.portal"),Yt=Symbol.for("react.fragment"),Ol=Symbol.for("react.strict_mode"),ki=Symbol.for("react.profiler"),us=Symbol.for("react.provider"),as=Symbol.for("react.context"),jl=Symbol.for("react.forward_ref"),Ei=Symbol.for("react.suspense"),_i=Symbol.for("react.suspense_list"),Ll=Symbol.for("react.memo"),at=Symbol.for("react.lazy"),ss=Symbol.for("react.offscreen"),ju=Symbol.iterator;function En(e){return e===null||typeof e!="object"?null:(e=ju&&e[ju]||e["@@iterator"],typeof e=="function"?e:null)}var X=Object.assign,Wo;function Rn(e){if(Wo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Wo=t&&t[1]||""}return`
`+Wo+e}var Ho=!1;function Ko(e,t){if(!e||Ho)return"";Ho=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(f){var r=f}Reflect.construct(e,[],t)}else{try{t.call()}catch(f){r=f}e.call(t.prototype)}else{try{throw Error()}catch(f){r=f}e()}}catch(f){if(f&&r&&typeof f.stack=="string"){for(var o=f.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,u=i.length-1;1<=l&&0<=u&&o[l]!==i[u];)u--;for(;1<=l&&0<=u;l--,u--)if(o[l]!==i[u]){if(l!==1||u!==1)do if(l--,u--,0>u||o[l]!==i[u]){var a=`
`+o[l].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=l&&0<=u);break}}}finally{Ho=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Rn(e):""}function md(e){switch(e.tag){case 5:return Rn(e.type);case 16:return Rn("Lazy");case 13:return Rn("Suspense");case 19:return Rn("SuspenseList");case 0:case 2:case 15:return e=Ko(e.type,!1),e;case 11:return e=Ko(e.type.render,!1),e;case 1:return e=Ko(e.type,!0),e;default:return""}}function xi(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Yt:return"Fragment";case Qt:return"Portal";case ki:return"Profiler";case Ol:return"StrictMode";case Ei:return"Suspense";case _i:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case as:return(e.displayName||"Context")+".Consumer";case us:return(e._context.displayName||"Context")+".Provider";case jl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ll:return t=e.displayName||null,t!==null?t:xi(e.type)||"Memo";case at:t=e._payload,e=e._init;try{return xi(e(t))}catch{}}return null}function vd(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return xi(t);case 8:return t===Ol?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Et(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function cs(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function yd(e){var t=cs(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Er(e){e._valueTracker||(e._valueTracker=yd(e))}function fs(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=cs(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function qr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ci(e,t){var n=t.checked;return X({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Lu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Et(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ds(e,t){t=t.checked,t!=null&&Rl(e,"checked",t,!1)}function Ni(e,t){ds(e,t);var n=Et(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ii(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ii(e,t.type,Et(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function zu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ii(e,t,n){(t!=="number"||qr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var On=Array.isArray;function on(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Et(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Pi(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(g(91));return X({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Du(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(g(92));if(On(n)){if(1<n.length)throw Error(g(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Et(n)}}function ps(e,t){var n=Et(t.value),r=Et(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Mu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function hs(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ti(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?hs(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var _r,ms=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(_r=_r||document.createElement("div"),_r.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=_r.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Hn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var zn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},gd=["Webkit","ms","Moz","O"];Object.keys(zn).forEach(function(e){gd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),zn[t]=zn[e]})});function vs(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||zn.hasOwnProperty(e)&&zn[e]?(""+t).trim():t+"px"}function ys(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=vs(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var wd=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ri(e,t){if(t){if(wd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(g(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(g(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(g(61))}if(t.style!=null&&typeof t.style!="object")throw Error(g(62))}}function Oi(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ji=null;function zl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Li=null,ln=null,un=null;function Au(e){if(e=hr(e)){if(typeof Li!="function")throw Error(g(280));var t=e.stateNode;t&&(t=To(t),Li(e.stateNode,e.type,t))}}function gs(e){ln?un?un.push(e):un=[e]:ln=e}function ws(){if(ln){var e=ln,t=un;if(un=ln=null,Au(e),t)for(e=0;e<t.length;e++)Au(t[e])}}function Ss(e,t){return e(t)}function ks(){}var Qo=!1;function Es(e,t,n){if(Qo)return e(t,n);Qo=!0;try{return Ss(e,t,n)}finally{Qo=!1,(ln!==null||un!==null)&&(ks(),ws())}}function Kn(e,t){var n=e.stateNode;if(n===null)return null;var r=To(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(g(231,t,typeof n));return n}var zi=!1;if(tt)try{var _n={};Object.defineProperty(_n,"passive",{get:function(){zi=!0}}),window.addEventListener("test",_n,_n),window.removeEventListener("test",_n,_n)}catch{zi=!1}function Sd(e,t,n,r,o,i,l,u,a){var f=Array.prototype.slice.call(arguments,3);try{t.apply(n,f)}catch(p){this.onError(p)}}var Dn=!1,Jr=null,Zr=!1,Di=null,kd={onError:function(e){Dn=!0,Jr=e}};function Ed(e,t,n,r,o,i,l,u,a){Dn=!1,Jr=null,Sd.apply(kd,arguments)}function _d(e,t,n,r,o,i,l,u,a){if(Ed.apply(this,arguments),Dn){if(Dn){var f=Jr;Dn=!1,Jr=null}else throw Error(g(198));Zr||(Zr=!0,Di=f)}}function Wt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function _s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Uu(e){if(Wt(e)!==e)throw Error(g(188))}function xd(e){var t=e.alternate;if(!t){if(t=Wt(e),t===null)throw Error(g(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Uu(o),e;if(i===r)return Uu(o),t;i=i.sibling}throw Error(g(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,u=o.child;u;){if(u===n){l=!0,n=o,r=i;break}if(u===r){l=!0,r=o,n=i;break}u=u.sibling}if(!l){for(u=i.child;u;){if(u===n){l=!0,n=i,r=o;break}if(u===r){l=!0,r=i,n=o;break}u=u.sibling}if(!l)throw Error(g(189))}}if(n.alternate!==r)throw Error(g(190))}if(n.tag!==3)throw Error(g(188));return n.stateNode.current===n?e:t}function xs(e){return e=xd(e),e!==null?Cs(e):null}function Cs(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Cs(e);if(t!==null)return t;e=e.sibling}return null}var Ns=Ie.unstable_scheduleCallback,Fu=Ie.unstable_cancelCallback,Cd=Ie.unstable_shouldYield,Nd=Ie.unstable_requestPaint,J=Ie.unstable_now,Id=Ie.unstable_getCurrentPriorityLevel,Dl=Ie.unstable_ImmediatePriority,Is=Ie.unstable_UserBlockingPriority,br=Ie.unstable_NormalPriority,Pd=Ie.unstable_LowPriority,Ps=Ie.unstable_IdlePriority,Co=null,Ye=null;function Td(e){if(Ye&&typeof Ye.onCommitFiberRoot=="function")try{Ye.onCommitFiberRoot(Co,e,void 0,(e.current.flags&128)===128)}catch{}}var Be=Math.clz32?Math.clz32:jd,Rd=Math.log,Od=Math.LN2;function jd(e){return e>>>=0,e===0?32:31-(Rd(e)/Od|0)|0}var xr=64,Cr=4194304;function jn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function eo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var u=l&~o;u!==0?r=jn(u):(i&=l,i!==0&&(r=jn(i)))}else l=n&~o,l!==0?r=jn(l):i!==0&&(r=jn(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Be(t),o=1<<n,r|=e[n],t&=~o;return r}function Ld(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-Be(i),u=1<<l,a=o[l];a===-1?(!(u&n)||u&r)&&(o[l]=Ld(u,t)):a<=t&&(e.expiredLanes|=u),i&=~u}}function Mi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ts(){var e=xr;return xr<<=1,!(xr&4194240)&&(xr=64),e}function Yo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function dr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Be(t),e[t]=n}function Dd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Be(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function Ml(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Be(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var U=0;function Rs(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Os,Al,js,Ls,zs,Ai=!1,Nr=[],ht=null,mt=null,vt=null,Qn=new Map,Yn=new Map,ct=[],Md="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function $u(e,t){switch(e){case"focusin":case"focusout":ht=null;break;case"dragenter":case"dragleave":mt=null;break;case"mouseover":case"mouseout":vt=null;break;case"pointerover":case"pointerout":Qn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Yn.delete(t.pointerId)}}function xn(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=hr(t),t!==null&&Al(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Ad(e,t,n,r,o){switch(t){case"focusin":return ht=xn(ht,e,t,n,r,o),!0;case"dragenter":return mt=xn(mt,e,t,n,r,o),!0;case"mouseover":return vt=xn(vt,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Qn.set(i,xn(Qn.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Yn.set(i,xn(Yn.get(i)||null,e,t,n,r,o)),!0}return!1}function Ds(e){var t=Ot(e.target);if(t!==null){var n=Wt(t);if(n!==null){if(t=n.tag,t===13){if(t=_s(n),t!==null){e.blockedOn=t,zs(e.priority,function(){js(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function $r(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ui(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ji=r,n.target.dispatchEvent(r),ji=null}else return t=hr(n),t!==null&&Al(t),e.blockedOn=n,!1;t.shift()}return!0}function Bu(e,t,n){$r(e)&&n.delete(t)}function Ud(){Ai=!1,ht!==null&&$r(ht)&&(ht=null),mt!==null&&$r(mt)&&(mt=null),vt!==null&&$r(vt)&&(vt=null),Qn.forEach(Bu),Yn.forEach(Bu)}function Cn(e,t){e.blockedOn===t&&(e.blockedOn=null,Ai||(Ai=!0,Ie.unstable_scheduleCallback(Ie.unstable_NormalPriority,Ud)))}function Xn(e){function t(o){return Cn(o,e)}if(0<Nr.length){Cn(Nr[0],e);for(var n=1;n<Nr.length;n++){var r=Nr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(ht!==null&&Cn(ht,e),mt!==null&&Cn(mt,e),vt!==null&&Cn(vt,e),Qn.forEach(t),Yn.forEach(t),n=0;n<ct.length;n++)r=ct[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<ct.length&&(n=ct[0],n.blockedOn===null);)Ds(n),n.blockedOn===null&&ct.shift()}var an=it.ReactCurrentBatchConfig,to=!0;function Fd(e,t,n,r){var o=U,i=an.transition;an.transition=null;try{U=1,Ul(e,t,n,r)}finally{U=o,an.transition=i}}function $d(e,t,n,r){var o=U,i=an.transition;an.transition=null;try{U=4,Ul(e,t,n,r)}finally{U=o,an.transition=i}}function Ul(e,t,n,r){if(to){var o=Ui(e,t,n,r);if(o===null)ri(e,t,r,no,n),$u(e,r);else if(Ad(o,e,t,n,r))r.stopPropagation();else if($u(e,r),t&4&&-1<Md.indexOf(e)){for(;o!==null;){var i=hr(o);if(i!==null&&Os(i),i=Ui(e,t,n,r),i===null&&ri(e,t,r,no,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else ri(e,t,r,null,n)}}var no=null;function Ui(e,t,n,r){if(no=null,e=zl(r),e=Ot(e),e!==null)if(t=Wt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=_s(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return no=e,null}function Ms(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Id()){case Dl:return 1;case Is:return 4;case br:case Pd:return 16;case Ps:return 536870912;default:return 16}default:return 16}}var dt=null,Fl=null,Br=null;function As(){if(Br)return Br;var e,t=Fl,n=t.length,r,o="value"in dt?dt.value:dt.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return Br=o.slice(e,1<r?1-r:void 0)}function Vr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ir(){return!0}function Vu(){return!1}function Te(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(n=e[u],this[u]=n?n(i):i[u]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Ir:Vu,this.isPropagationStopped=Vu,this}return X(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ir)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ir)},persist:function(){},isPersistent:Ir}),t}var wn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$l=Te(wn),pr=X({},wn,{view:0,detail:0}),Bd=Te(pr),Xo,Go,Nn,No=X({},pr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Nn&&(Nn&&e.type==="mousemove"?(Xo=e.screenX-Nn.screenX,Go=e.screenY-Nn.screenY):Go=Xo=0,Nn=e),Xo)},movementY:function(e){return"movementY"in e?e.movementY:Go}}),Wu=Te(No),Vd=X({},No,{dataTransfer:0}),Wd=Te(Vd),Hd=X({},pr,{relatedTarget:0}),qo=Te(Hd),Kd=X({},wn,{animationName:0,elapsedTime:0,pseudoElement:0}),Qd=Te(Kd),Yd=X({},wn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Xd=Te(Yd),Gd=X({},wn,{data:0}),Hu=Te(Gd),qd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Jd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Zd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Zd[e])?!!t[e]:!1}function Bl(){return bd}var ep=X({},pr,{key:function(e){if(e.key){var t=qd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Vr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Jd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bl,charCode:function(e){return e.type==="keypress"?Vr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Vr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),tp=Te(ep),np=X({},No,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ku=Te(np),rp=X({},pr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bl}),op=Te(rp),ip=X({},wn,{propertyName:0,elapsedTime:0,pseudoElement:0}),lp=Te(ip),up=X({},No,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ap=Te(up),sp=[9,13,27,32],Vl=tt&&"CompositionEvent"in window,Mn=null;tt&&"documentMode"in document&&(Mn=document.documentMode);var cp=tt&&"TextEvent"in window&&!Mn,Us=tt&&(!Vl||Mn&&8<Mn&&11>=Mn),Qu=" ",Yu=!1;function Fs(e,t){switch(e){case"keyup":return sp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $s(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Xt=!1;function fp(e,t){switch(e){case"compositionend":return $s(t);case"keypress":return t.which!==32?null:(Yu=!0,Qu);case"textInput":return e=t.data,e===Qu&&Yu?null:e;default:return null}}function dp(e,t){if(Xt)return e==="compositionend"||!Vl&&Fs(e,t)?(e=As(),Br=Fl=dt=null,Xt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Us&&t.locale!=="ko"?null:t.data;default:return null}}var pp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!pp[e.type]:t==="textarea"}function Bs(e,t,n,r){gs(r),t=ro(t,"onChange"),0<t.length&&(n=new $l("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var An=null,Gn=null;function hp(e){Zs(e,0)}function Io(e){var t=Jt(e);if(fs(t))return e}function mp(e,t){if(e==="change")return t}var Vs=!1;if(tt){var Jo;if(tt){var Zo="oninput"in document;if(!Zo){var Gu=document.createElement("div");Gu.setAttribute("oninput","return;"),Zo=typeof Gu.oninput=="function"}Jo=Zo}else Jo=!1;Vs=Jo&&(!document.documentMode||9<document.documentMode)}function qu(){An&&(An.detachEvent("onpropertychange",Ws),Gn=An=null)}function Ws(e){if(e.propertyName==="value"&&Io(Gn)){var t=[];Bs(t,Gn,e,zl(e)),Es(hp,t)}}function vp(e,t,n){e==="focusin"?(qu(),An=t,Gn=n,An.attachEvent("onpropertychange",Ws)):e==="focusout"&&qu()}function yp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Io(Gn)}function gp(e,t){if(e==="click")return Io(t)}function wp(e,t){if(e==="input"||e==="change")return Io(t)}function Sp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var We=typeof Object.is=="function"?Object.is:Sp;function qn(e,t){if(We(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Si.call(t,o)||!We(e[o],t[o]))return!1}return!0}function Ju(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Zu(e,t){var n=Ju(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ju(n)}}function Hs(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Hs(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ks(){for(var e=window,t=qr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=qr(e.document)}return t}function Wl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function kp(e){var t=Ks(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Hs(n.ownerDocument.documentElement,n)){if(r!==null&&Wl(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Zu(n,i);var l=Zu(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ep=tt&&"documentMode"in document&&11>=document.documentMode,Gt=null,Fi=null,Un=null,$i=!1;function bu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;$i||Gt==null||Gt!==qr(r)||(r=Gt,"selectionStart"in r&&Wl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Un&&qn(Un,r)||(Un=r,r=ro(Fi,"onSelect"),0<r.length&&(t=new $l("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Gt)))}function Pr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var qt={animationend:Pr("Animation","AnimationEnd"),animationiteration:Pr("Animation","AnimationIteration"),animationstart:Pr("Animation","AnimationStart"),transitionend:Pr("Transition","TransitionEnd")},bo={},Qs={};tt&&(Qs=document.createElement("div").style,"AnimationEvent"in window||(delete qt.animationend.animation,delete qt.animationiteration.animation,delete qt.animationstart.animation),"TransitionEvent"in window||delete qt.transitionend.transition);function Po(e){if(bo[e])return bo[e];if(!qt[e])return e;var t=qt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Qs)return bo[e]=t[n];return e}var Ys=Po("animationend"),Xs=Po("animationiteration"),Gs=Po("animationstart"),qs=Po("transitionend"),Js=new Map,ea="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function xt(e,t){Js.set(e,t),Vt(t,[e])}for(var ei=0;ei<ea.length;ei++){var ti=ea[ei],_p=ti.toLowerCase(),xp=ti[0].toUpperCase()+ti.slice(1);xt(_p,"on"+xp)}xt(Ys,"onAnimationEnd");xt(Xs,"onAnimationIteration");xt(Gs,"onAnimationStart");xt("dblclick","onDoubleClick");xt("focusin","onFocus");xt("focusout","onBlur");xt(qs,"onTransitionEnd");fn("onMouseEnter",["mouseout","mouseover"]);fn("onMouseLeave",["mouseout","mouseover"]);fn("onPointerEnter",["pointerout","pointerover"]);fn("onPointerLeave",["pointerout","pointerover"]);Vt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Vt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Vt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Vt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Vt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Vt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ln="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Cp=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ln));function ta(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,_d(r,t,void 0,e),e.currentTarget=null}function Zs(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var u=r[l],a=u.instance,f=u.currentTarget;if(u=u.listener,a!==i&&o.isPropagationStopped())break e;ta(o,u,f),i=a}else for(l=0;l<r.length;l++){if(u=r[l],a=u.instance,f=u.currentTarget,u=u.listener,a!==i&&o.isPropagationStopped())break e;ta(o,u,f),i=a}}}if(Zr)throw e=Di,Zr=!1,Di=null,e}function $(e,t){var n=t[Ki];n===void 0&&(n=t[Ki]=new Set);var r=e+"__bubble";n.has(r)||(bs(t,e,2,!1),n.add(r))}function ni(e,t,n){var r=0;t&&(r|=4),bs(n,e,r,t)}var Tr="_reactListening"+Math.random().toString(36).slice(2);function Jn(e){if(!e[Tr]){e[Tr]=!0,ls.forEach(function(n){n!=="selectionchange"&&(Cp.has(n)||ni(n,!1,e),ni(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Tr]||(t[Tr]=!0,ni("selectionchange",!1,t))}}function bs(e,t,n,r){switch(Ms(t)){case 1:var o=Fd;break;case 4:o=$d;break;default:o=Ul}n=o.bind(null,t,n,e),o=void 0,!zi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function ri(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var u=r.stateNode.containerInfo;if(u===o||u.nodeType===8&&u.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var a=l.tag;if((a===3||a===4)&&(a=l.stateNode.containerInfo,a===o||a.nodeType===8&&a.parentNode===o))return;l=l.return}for(;u!==null;){if(l=Ot(u),l===null)return;if(a=l.tag,a===5||a===6){r=i=l;continue e}u=u.parentNode}}r=r.return}Es(function(){var f=i,p=zl(n),m=[];e:{var h=Js.get(e);if(h!==void 0){var y=$l,w=e;switch(e){case"keypress":if(Vr(n)===0)break e;case"keydown":case"keyup":y=tp;break;case"focusin":w="focus",y=qo;break;case"focusout":w="blur",y=qo;break;case"beforeblur":case"afterblur":y=qo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Wu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Wd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=op;break;case Ys:case Xs:case Gs:y=Qd;break;case qs:y=lp;break;case"scroll":y=Bd;break;case"wheel":y=ap;break;case"copy":case"cut":case"paste":y=Xd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Ku}var S=(t&4)!==0,O=!S&&e==="scroll",c=S?h!==null?h+"Capture":null:h;S=[];for(var s=f,d;s!==null;){d=s;var v=d.stateNode;if(d.tag===5&&v!==null&&(d=v,c!==null&&(v=Kn(s,c),v!=null&&S.push(Zn(s,v,d)))),O)break;s=s.return}0<S.length&&(h=new y(h,w,null,n,p),m.push({event:h,listeners:S}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",h&&n!==ji&&(w=n.relatedTarget||n.fromElement)&&(Ot(w)||w[nt]))break e;if((y||h)&&(h=p.window===p?p:(h=p.ownerDocument)?h.defaultView||h.parentWindow:window,y?(w=n.relatedTarget||n.toElement,y=f,w=w?Ot(w):null,w!==null&&(O=Wt(w),w!==O||w.tag!==5&&w.tag!==6)&&(w=null)):(y=null,w=f),y!==w)){if(S=Wu,v="onMouseLeave",c="onMouseEnter",s="mouse",(e==="pointerout"||e==="pointerover")&&(S=Ku,v="onPointerLeave",c="onPointerEnter",s="pointer"),O=y==null?h:Jt(y),d=w==null?h:Jt(w),h=new S(v,s+"leave",y,n,p),h.target=O,h.relatedTarget=d,v=null,Ot(p)===f&&(S=new S(c,s+"enter",w,n,p),S.target=d,S.relatedTarget=O,v=S),O=v,y&&w)t:{for(S=y,c=w,s=0,d=S;d;d=Kt(d))s++;for(d=0,v=c;v;v=Kt(v))d++;for(;0<s-d;)S=Kt(S),s--;for(;0<d-s;)c=Kt(c),d--;for(;s--;){if(S===c||c!==null&&S===c.alternate)break t;S=Kt(S),c=Kt(c)}S=null}else S=null;y!==null&&na(m,h,y,S,!1),w!==null&&O!==null&&na(m,O,w,S,!0)}}e:{if(h=f?Jt(f):window,y=h.nodeName&&h.nodeName.toLowerCase(),y==="select"||y==="input"&&h.type==="file")var E=mp;else if(Xu(h))if(Vs)E=wp;else{E=yp;var I=vp}else(y=h.nodeName)&&y.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(E=gp);if(E&&(E=E(e,f))){Bs(m,E,n,p);break e}I&&I(e,h,f),e==="focusout"&&(I=h._wrapperState)&&I.controlled&&h.type==="number"&&Ii(h,"number",h.value)}switch(I=f?Jt(f):window,e){case"focusin":(Xu(I)||I.contentEditable==="true")&&(Gt=I,Fi=f,Un=null);break;case"focusout":Un=Fi=Gt=null;break;case"mousedown":$i=!0;break;case"contextmenu":case"mouseup":case"dragend":$i=!1,bu(m,n,p);break;case"selectionchange":if(Ep)break;case"keydown":case"keyup":bu(m,n,p)}var N;if(Vl)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Xt?Fs(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(Us&&n.locale!=="ko"&&(Xt||P!=="onCompositionStart"?P==="onCompositionEnd"&&Xt&&(N=As()):(dt=p,Fl="value"in dt?dt.value:dt.textContent,Xt=!0)),I=ro(f,P),0<I.length&&(P=new Hu(P,e,null,n,p),m.push({event:P,listeners:I}),N?P.data=N:(N=$s(n),N!==null&&(P.data=N)))),(N=cp?fp(e,n):dp(e,n))&&(f=ro(f,"onBeforeInput"),0<f.length&&(p=new Hu("onBeforeInput","beforeinput",null,n,p),m.push({event:p,listeners:f}),p.data=N))}Zs(m,t)})}function Zn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ro(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Kn(e,n),i!=null&&r.unshift(Zn(e,i,o)),i=Kn(e,t),i!=null&&r.push(Zn(e,i,o))),e=e.return}return r}function Kt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function na(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var u=n,a=u.alternate,f=u.stateNode;if(a!==null&&a===r)break;u.tag===5&&f!==null&&(u=f,o?(a=Kn(n,i),a!=null&&l.unshift(Zn(n,a,u))):o||(a=Kn(n,i),a!=null&&l.push(Zn(n,a,u)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Np=/\r\n?/g,Ip=/\u0000|\uFFFD/g;function ra(e){return(typeof e=="string"?e:""+e).replace(Np,`
`).replace(Ip,"")}function Rr(e,t,n){if(t=ra(t),ra(e)!==t&&n)throw Error(g(425))}function oo(){}var Bi=null,Vi=null;function Wi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Hi=typeof setTimeout=="function"?setTimeout:void 0,Pp=typeof clearTimeout=="function"?clearTimeout:void 0,oa=typeof Promise=="function"?Promise:void 0,Tp=typeof queueMicrotask=="function"?queueMicrotask:typeof oa<"u"?function(e){return oa.resolve(null).then(e).catch(Rp)}:Hi;function Rp(e){setTimeout(function(){throw e})}function oi(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Xn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Xn(t)}function yt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ia(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Sn=Math.random().toString(36).slice(2),Qe="__reactFiber$"+Sn,bn="__reactProps$"+Sn,nt="__reactContainer$"+Sn,Ki="__reactEvents$"+Sn,Op="__reactListeners$"+Sn,jp="__reactHandles$"+Sn;function Ot(e){var t=e[Qe];if(t)return t;for(var n=e.parentNode;n;){if(t=n[nt]||n[Qe]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ia(e);e!==null;){if(n=e[Qe])return n;e=ia(e)}return t}e=n,n=e.parentNode}return null}function hr(e){return e=e[Qe]||e[nt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Jt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(g(33))}function To(e){return e[bn]||null}var Qi=[],Zt=-1;function Ct(e){return{current:e}}function B(e){0>Zt||(e.current=Qi[Zt],Qi[Zt]=null,Zt--)}function F(e,t){Zt++,Qi[Zt]=e.current,e.current=t}var _t={},pe=Ct(_t),ke=Ct(!1),Mt=_t;function dn(e,t){var n=e.type.contextTypes;if(!n)return _t;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ee(e){return e=e.childContextTypes,e!=null}function io(){B(ke),B(pe)}function la(e,t,n){if(pe.current!==_t)throw Error(g(168));F(pe,t),F(ke,n)}function ec(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(g(108,vd(e)||"Unknown",o));return X({},n,r)}function lo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||_t,Mt=pe.current,F(pe,e),F(ke,ke.current),!0}function ua(e,t,n){var r=e.stateNode;if(!r)throw Error(g(169));n?(e=ec(e,t,Mt),r.__reactInternalMemoizedMergedChildContext=e,B(ke),B(pe),F(pe,e)):B(ke),F(ke,n)}var qe=null,Ro=!1,ii=!1;function tc(e){qe===null?qe=[e]:qe.push(e)}function Lp(e){Ro=!0,tc(e)}function Nt(){if(!ii&&qe!==null){ii=!0;var e=0,t=U;try{var n=qe;for(U=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}qe=null,Ro=!1}catch(o){throw qe!==null&&(qe=qe.slice(e+1)),Ns(Dl,Nt),o}finally{U=t,ii=!1}}return null}var bt=[],en=0,uo=null,ao=0,Re=[],Oe=0,At=null,Je=1,Ze="";function Tt(e,t){bt[en++]=ao,bt[en++]=uo,uo=e,ao=t}function nc(e,t,n){Re[Oe++]=Je,Re[Oe++]=Ze,Re[Oe++]=At,At=e;var r=Je;e=Ze;var o=32-Be(r)-1;r&=~(1<<o),n+=1;var i=32-Be(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,Je=1<<32-Be(t)+o|n<<o|r,Ze=i+e}else Je=1<<i|n<<o|r,Ze=e}function Hl(e){e.return!==null&&(Tt(e,1),nc(e,1,0))}function Kl(e){for(;e===uo;)uo=bt[--en],bt[en]=null,ao=bt[--en],bt[en]=null;for(;e===At;)At=Re[--Oe],Re[Oe]=null,Ze=Re[--Oe],Re[Oe]=null,Je=Re[--Oe],Re[Oe]=null}var Ne=null,Ce=null,W=!1,$e=null;function rc(e,t){var n=je(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function aa(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ne=e,Ce=yt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ne=e,Ce=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=At!==null?{id:Je,overflow:Ze}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=je(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ne=e,Ce=null,!0):!1;default:return!1}}function Yi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Xi(e){if(W){var t=Ce;if(t){var n=t;if(!aa(e,t)){if(Yi(e))throw Error(g(418));t=yt(n.nextSibling);var r=Ne;t&&aa(e,t)?rc(r,n):(e.flags=e.flags&-4097|2,W=!1,Ne=e)}}else{if(Yi(e))throw Error(g(418));e.flags=e.flags&-4097|2,W=!1,Ne=e}}}function sa(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ne=e}function Or(e){if(e!==Ne)return!1;if(!W)return sa(e),W=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Wi(e.type,e.memoizedProps)),t&&(t=Ce)){if(Yi(e))throw oc(),Error(g(418));for(;t;)rc(e,t),t=yt(t.nextSibling)}if(sa(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(g(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ce=yt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ce=null}}else Ce=Ne?yt(e.stateNode.nextSibling):null;return!0}function oc(){for(var e=Ce;e;)e=yt(e.nextSibling)}function pn(){Ce=Ne=null,W=!1}function Ql(e){$e===null?$e=[e]:$e.push(e)}var zp=it.ReactCurrentBatchConfig;function In(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(g(309));var r=n.stateNode}if(!r)throw Error(g(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var u=o.refs;l===null?delete u[i]:u[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(g(284));if(!n._owner)throw Error(g(290,e))}return e}function jr(e,t){throw e=Object.prototype.toString.call(t),Error(g(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ca(e){var t=e._init;return t(e._payload)}function ic(e){function t(c,s){if(e){var d=c.deletions;d===null?(c.deletions=[s],c.flags|=16):d.push(s)}}function n(c,s){if(!e)return null;for(;s!==null;)t(c,s),s=s.sibling;return null}function r(c,s){for(c=new Map;s!==null;)s.key!==null?c.set(s.key,s):c.set(s.index,s),s=s.sibling;return c}function o(c,s){return c=kt(c,s),c.index=0,c.sibling=null,c}function i(c,s,d){return c.index=d,e?(d=c.alternate,d!==null?(d=d.index,d<s?(c.flags|=2,s):d):(c.flags|=2,s)):(c.flags|=1048576,s)}function l(c){return e&&c.alternate===null&&(c.flags|=2),c}function u(c,s,d,v){return s===null||s.tag!==6?(s=di(d,c.mode,v),s.return=c,s):(s=o(s,d),s.return=c,s)}function a(c,s,d,v){var E=d.type;return E===Yt?p(c,s,d.props.children,v,d.key):s!==null&&(s.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===at&&ca(E)===s.type)?(v=o(s,d.props),v.ref=In(c,s,d),v.return=c,v):(v=Gr(d.type,d.key,d.props,null,c.mode,v),v.ref=In(c,s,d),v.return=c,v)}function f(c,s,d,v){return s===null||s.tag!==4||s.stateNode.containerInfo!==d.containerInfo||s.stateNode.implementation!==d.implementation?(s=pi(d,c.mode,v),s.return=c,s):(s=o(s,d.children||[]),s.return=c,s)}function p(c,s,d,v,E){return s===null||s.tag!==7?(s=Dt(d,c.mode,v,E),s.return=c,s):(s=o(s,d),s.return=c,s)}function m(c,s,d){if(typeof s=="string"&&s!==""||typeof s=="number")return s=di(""+s,c.mode,d),s.return=c,s;if(typeof s=="object"&&s!==null){switch(s.$$typeof){case kr:return d=Gr(s.type,s.key,s.props,null,c.mode,d),d.ref=In(c,null,s),d.return=c,d;case Qt:return s=pi(s,c.mode,d),s.return=c,s;case at:var v=s._init;return m(c,v(s._payload),d)}if(On(s)||En(s))return s=Dt(s,c.mode,d,null),s.return=c,s;jr(c,s)}return null}function h(c,s,d,v){var E=s!==null?s.key:null;if(typeof d=="string"&&d!==""||typeof d=="number")return E!==null?null:u(c,s,""+d,v);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case kr:return d.key===E?a(c,s,d,v):null;case Qt:return d.key===E?f(c,s,d,v):null;case at:return E=d._init,h(c,s,E(d._payload),v)}if(On(d)||En(d))return E!==null?null:p(c,s,d,v,null);jr(c,d)}return null}function y(c,s,d,v,E){if(typeof v=="string"&&v!==""||typeof v=="number")return c=c.get(d)||null,u(s,c,""+v,E);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case kr:return c=c.get(v.key===null?d:v.key)||null,a(s,c,v,E);case Qt:return c=c.get(v.key===null?d:v.key)||null,f(s,c,v,E);case at:var I=v._init;return y(c,s,d,I(v._payload),E)}if(On(v)||En(v))return c=c.get(d)||null,p(s,c,v,E,null);jr(s,v)}return null}function w(c,s,d,v){for(var E=null,I=null,N=s,P=s=0,V=null;N!==null&&P<d.length;P++){N.index>P?(V=N,N=null):V=N.sibling;var j=h(c,N,d[P],v);if(j===null){N===null&&(N=V);break}e&&N&&j.alternate===null&&t(c,N),s=i(j,s,P),I===null?E=j:I.sibling=j,I=j,N=V}if(P===d.length)return n(c,N),W&&Tt(c,P),E;if(N===null){for(;P<d.length;P++)N=m(c,d[P],v),N!==null&&(s=i(N,s,P),I===null?E=N:I.sibling=N,I=N);return W&&Tt(c,P),E}for(N=r(c,N);P<d.length;P++)V=y(N,c,P,d[P],v),V!==null&&(e&&V.alternate!==null&&N.delete(V.key===null?P:V.key),s=i(V,s,P),I===null?E=V:I.sibling=V,I=V);return e&&N.forEach(function(T){return t(c,T)}),W&&Tt(c,P),E}function S(c,s,d,v){var E=En(d);if(typeof E!="function")throw Error(g(150));if(d=E.call(d),d==null)throw Error(g(151));for(var I=E=null,N=s,P=s=0,V=null,j=d.next();N!==null&&!j.done;P++,j=d.next()){N.index>P?(V=N,N=null):V=N.sibling;var T=h(c,N,j.value,v);if(T===null){N===null&&(N=V);break}e&&N&&T.alternate===null&&t(c,N),s=i(T,s,P),I===null?E=T:I.sibling=T,I=T,N=V}if(j.done)return n(c,N),W&&Tt(c,P),E;if(N===null){for(;!j.done;P++,j=d.next())j=m(c,j.value,v),j!==null&&(s=i(j,s,P),I===null?E=j:I.sibling=j,I=j);return W&&Tt(c,P),E}for(N=r(c,N);!j.done;P++,j=d.next())j=y(N,c,P,j.value,v),j!==null&&(e&&j.alternate!==null&&N.delete(j.key===null?P:j.key),s=i(j,s,P),I===null?E=j:I.sibling=j,I=j);return e&&N.forEach(function(A){return t(c,A)}),W&&Tt(c,P),E}function O(c,s,d,v){if(typeof d=="object"&&d!==null&&d.type===Yt&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case kr:e:{for(var E=d.key,I=s;I!==null;){if(I.key===E){if(E=d.type,E===Yt){if(I.tag===7){n(c,I.sibling),s=o(I,d.props.children),s.return=c,c=s;break e}}else if(I.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===at&&ca(E)===I.type){n(c,I.sibling),s=o(I,d.props),s.ref=In(c,I,d),s.return=c,c=s;break e}n(c,I);break}else t(c,I);I=I.sibling}d.type===Yt?(s=Dt(d.props.children,c.mode,v,d.key),s.return=c,c=s):(v=Gr(d.type,d.key,d.props,null,c.mode,v),v.ref=In(c,s,d),v.return=c,c=v)}return l(c);case Qt:e:{for(I=d.key;s!==null;){if(s.key===I)if(s.tag===4&&s.stateNode.containerInfo===d.containerInfo&&s.stateNode.implementation===d.implementation){n(c,s.sibling),s=o(s,d.children||[]),s.return=c,c=s;break e}else{n(c,s);break}else t(c,s);s=s.sibling}s=pi(d,c.mode,v),s.return=c,c=s}return l(c);case at:return I=d._init,O(c,s,I(d._payload),v)}if(On(d))return w(c,s,d,v);if(En(d))return S(c,s,d,v);jr(c,d)}return typeof d=="string"&&d!==""||typeof d=="number"?(d=""+d,s!==null&&s.tag===6?(n(c,s.sibling),s=o(s,d),s.return=c,c=s):(n(c,s),s=di(d,c.mode,v),s.return=c,c=s),l(c)):n(c,s)}return O}var hn=ic(!0),lc=ic(!1),so=Ct(null),co=null,tn=null,Yl=null;function Xl(){Yl=tn=co=null}function Gl(e){var t=so.current;B(so),e._currentValue=t}function Gi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function sn(e,t){co=e,Yl=tn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Se=!0),e.firstContext=null)}function De(e){var t=e._currentValue;if(Yl!==e)if(e={context:e,memoizedValue:t,next:null},tn===null){if(co===null)throw Error(g(308));tn=e,co.dependencies={lanes:0,firstContext:e}}else tn=tn.next=e;return t}var jt=null;function ql(e){jt===null?jt=[e]:jt.push(e)}function uc(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,ql(t)):(n.next=o.next,o.next=n),t.interleaved=n,rt(e,r)}function rt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var st=!1;function Jl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ac(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function be(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function gt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,M&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,rt(e,n)}return o=r.interleaved,o===null?(t.next=t,ql(r)):(t.next=o.next,o.next=t),r.interleaved=t,rt(e,n)}function Wr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ml(e,n)}}function fa(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function fo(e,t,n,r){var o=e.updateQueue;st=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,u=o.shared.pending;if(u!==null){o.shared.pending=null;var a=u,f=a.next;a.next=null,l===null?i=f:l.next=f,l=a;var p=e.alternate;p!==null&&(p=p.updateQueue,u=p.lastBaseUpdate,u!==l&&(u===null?p.firstBaseUpdate=f:u.next=f,p.lastBaseUpdate=a))}if(i!==null){var m=o.baseState;l=0,p=f=a=null,u=i;do{var h=u.lane,y=u.eventTime;if((r&h)===h){p!==null&&(p=p.next={eventTime:y,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var w=e,S=u;switch(h=t,y=n,S.tag){case 1:if(w=S.payload,typeof w=="function"){m=w.call(y,m,h);break e}m=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=S.payload,h=typeof w=="function"?w.call(y,m,h):w,h==null)break e;m=X({},m,h);break e;case 2:st=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,h=o.effects,h===null?o.effects=[u]:h.push(u))}else y={eventTime:y,lane:h,tag:u.tag,payload:u.payload,callback:u.callback,next:null},p===null?(f=p=y,a=m):p=p.next=y,l|=h;if(u=u.next,u===null){if(u=o.shared.pending,u===null)break;h=u,u=h.next,h.next=null,o.lastBaseUpdate=h,o.shared.pending=null}}while(!0);if(p===null&&(a=m),o.baseState=a,o.firstBaseUpdate=f,o.lastBaseUpdate=p,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);Ft|=l,e.lanes=l,e.memoizedState=m}}function da(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(g(191,o));o.call(r)}}}var mr={},Xe=Ct(mr),er=Ct(mr),tr=Ct(mr);function Lt(e){if(e===mr)throw Error(g(174));return e}function Zl(e,t){switch(F(tr,t),F(er,e),F(Xe,mr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ti(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ti(t,e)}B(Xe),F(Xe,t)}function mn(){B(Xe),B(er),B(tr)}function sc(e){Lt(tr.current);var t=Lt(Xe.current),n=Ti(t,e.type);t!==n&&(F(er,e),F(Xe,n))}function bl(e){er.current===e&&(B(Xe),B(er))}var Q=Ct(0);function po(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var li=[];function eu(){for(var e=0;e<li.length;e++)li[e]._workInProgressVersionPrimary=null;li.length=0}var Hr=it.ReactCurrentDispatcher,ui=it.ReactCurrentBatchConfig,Ut=0,Y=null,ee=null,re=null,ho=!1,Fn=!1,nr=0,Dp=0;function se(){throw Error(g(321))}function tu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!We(e[n],t[n]))return!1;return!0}function nu(e,t,n,r,o,i){if(Ut=i,Y=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Hr.current=e===null||e.memoizedState===null?Fp:$p,e=n(r,o),Fn){i=0;do{if(Fn=!1,nr=0,25<=i)throw Error(g(301));i+=1,re=ee=null,t.updateQueue=null,Hr.current=Bp,e=n(r,o)}while(Fn)}if(Hr.current=mo,t=ee!==null&&ee.next!==null,Ut=0,re=ee=Y=null,ho=!1,t)throw Error(g(300));return e}function ru(){var e=nr!==0;return nr=0,e}function Ke(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return re===null?Y.memoizedState=re=e:re=re.next=e,re}function Me(){if(ee===null){var e=Y.alternate;e=e!==null?e.memoizedState:null}else e=ee.next;var t=re===null?Y.memoizedState:re.next;if(t!==null)re=t,ee=e;else{if(e===null)throw Error(g(310));ee=e,e={memoizedState:ee.memoizedState,baseState:ee.baseState,baseQueue:ee.baseQueue,queue:ee.queue,next:null},re===null?Y.memoizedState=re=e:re=re.next=e}return re}function rr(e,t){return typeof t=="function"?t(e):t}function ai(e){var t=Me(),n=t.queue;if(n===null)throw Error(g(311));n.lastRenderedReducer=e;var r=ee,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var u=l=null,a=null,f=i;do{var p=f.lane;if((Ut&p)===p)a!==null&&(a=a.next={lane:0,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null}),r=f.hasEagerState?f.eagerState:e(r,f.action);else{var m={lane:p,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null};a===null?(u=a=m,l=r):a=a.next=m,Y.lanes|=p,Ft|=p}f=f.next}while(f!==null&&f!==i);a===null?l=r:a.next=u,We(r,t.memoizedState)||(Se=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,Y.lanes|=i,Ft|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function si(e){var t=Me(),n=t.queue;if(n===null)throw Error(g(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);We(i,t.memoizedState)||(Se=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function cc(){}function fc(e,t){var n=Y,r=Me(),o=t(),i=!We(r.memoizedState,o);if(i&&(r.memoizedState=o,Se=!0),r=r.queue,ou(hc.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||re!==null&&re.memoizedState.tag&1){if(n.flags|=2048,or(9,pc.bind(null,n,r,o,t),void 0,null),oe===null)throw Error(g(349));Ut&30||dc(n,t,o)}return o}function dc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function pc(e,t,n,r){t.value=n,t.getSnapshot=r,mc(t)&&vc(e)}function hc(e,t,n){return n(function(){mc(t)&&vc(e)})}function mc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!We(e,n)}catch{return!0}}function vc(e){var t=rt(e,1);t!==null&&Ve(t,e,1,-1)}function pa(e){var t=Ke();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:rr,lastRenderedState:e},t.queue=e,e=e.dispatch=Up.bind(null,Y,e),[t.memoizedState,e]}function or(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function yc(){return Me().memoizedState}function Kr(e,t,n,r){var o=Ke();Y.flags|=e,o.memoizedState=or(1|t,n,void 0,r===void 0?null:r)}function Oo(e,t,n,r){var o=Me();r=r===void 0?null:r;var i=void 0;if(ee!==null){var l=ee.memoizedState;if(i=l.destroy,r!==null&&tu(r,l.deps)){o.memoizedState=or(t,n,i,r);return}}Y.flags|=e,o.memoizedState=or(1|t,n,i,r)}function ha(e,t){return Kr(8390656,8,e,t)}function ou(e,t){return Oo(2048,8,e,t)}function gc(e,t){return Oo(4,2,e,t)}function wc(e,t){return Oo(4,4,e,t)}function Sc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function kc(e,t,n){return n=n!=null?n.concat([e]):null,Oo(4,4,Sc.bind(null,t,e),n)}function iu(){}function Ec(e,t){var n=Me();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&tu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function _c(e,t){var n=Me();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&tu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function xc(e,t,n){return Ut&21?(We(n,t)||(n=Ts(),Y.lanes|=n,Ft|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Se=!0),e.memoizedState=n)}function Mp(e,t){var n=U;U=n!==0&&4>n?n:4,e(!0);var r=ui.transition;ui.transition={};try{e(!1),t()}finally{U=n,ui.transition=r}}function Cc(){return Me().memoizedState}function Ap(e,t,n){var r=St(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Nc(e))Ic(t,n);else if(n=uc(e,t,n,r),n!==null){var o=me();Ve(n,e,r,o),Pc(n,t,r)}}function Up(e,t,n){var r=St(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Nc(e))Ic(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,u=i(l,n);if(o.hasEagerState=!0,o.eagerState=u,We(u,l)){var a=t.interleaved;a===null?(o.next=o,ql(t)):(o.next=a.next,a.next=o),t.interleaved=o;return}}catch{}finally{}n=uc(e,t,o,r),n!==null&&(o=me(),Ve(n,e,r,o),Pc(n,t,r))}}function Nc(e){var t=e.alternate;return e===Y||t!==null&&t===Y}function Ic(e,t){Fn=ho=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Pc(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ml(e,n)}}var mo={readContext:De,useCallback:se,useContext:se,useEffect:se,useImperativeHandle:se,useInsertionEffect:se,useLayoutEffect:se,useMemo:se,useReducer:se,useRef:se,useState:se,useDebugValue:se,useDeferredValue:se,useTransition:se,useMutableSource:se,useSyncExternalStore:se,useId:se,unstable_isNewReconciler:!1},Fp={readContext:De,useCallback:function(e,t){return Ke().memoizedState=[e,t===void 0?null:t],e},useContext:De,useEffect:ha,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Kr(4194308,4,Sc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Kr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Kr(4,2,e,t)},useMemo:function(e,t){var n=Ke();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ke();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Ap.bind(null,Y,e),[r.memoizedState,e]},useRef:function(e){var t=Ke();return e={current:e},t.memoizedState=e},useState:pa,useDebugValue:iu,useDeferredValue:function(e){return Ke().memoizedState=e},useTransition:function(){var e=pa(!1),t=e[0];return e=Mp.bind(null,e[1]),Ke().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Y,o=Ke();if(W){if(n===void 0)throw Error(g(407));n=n()}else{if(n=t(),oe===null)throw Error(g(349));Ut&30||dc(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,ha(hc.bind(null,r,i,e),[e]),r.flags|=2048,or(9,pc.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Ke(),t=oe.identifierPrefix;if(W){var n=Ze,r=Je;n=(r&~(1<<32-Be(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=nr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Dp++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},$p={readContext:De,useCallback:Ec,useContext:De,useEffect:ou,useImperativeHandle:kc,useInsertionEffect:gc,useLayoutEffect:wc,useMemo:_c,useReducer:ai,useRef:yc,useState:function(){return ai(rr)},useDebugValue:iu,useDeferredValue:function(e){var t=Me();return xc(t,ee.memoizedState,e)},useTransition:function(){var e=ai(rr)[0],t=Me().memoizedState;return[e,t]},useMutableSource:cc,useSyncExternalStore:fc,useId:Cc,unstable_isNewReconciler:!1},Bp={readContext:De,useCallback:Ec,useContext:De,useEffect:ou,useImperativeHandle:kc,useInsertionEffect:gc,useLayoutEffect:wc,useMemo:_c,useReducer:si,useRef:yc,useState:function(){return si(rr)},useDebugValue:iu,useDeferredValue:function(e){var t=Me();return ee===null?t.memoizedState=e:xc(t,ee.memoizedState,e)},useTransition:function(){var e=si(rr)[0],t=Me().memoizedState;return[e,t]},useMutableSource:cc,useSyncExternalStore:fc,useId:Cc,unstable_isNewReconciler:!1};function Ue(e,t){if(e&&e.defaultProps){t=X({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function qi(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:X({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var jo={isMounted:function(e){return(e=e._reactInternals)?Wt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=me(),o=St(e),i=be(r,o);i.payload=t,n!=null&&(i.callback=n),t=gt(e,i,o),t!==null&&(Ve(t,e,o,r),Wr(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=me(),o=St(e),i=be(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=gt(e,i,o),t!==null&&(Ve(t,e,o,r),Wr(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=me(),r=St(e),o=be(n,r);o.tag=2,t!=null&&(o.callback=t),t=gt(e,o,r),t!==null&&(Ve(t,e,r,n),Wr(t,e,r))}};function ma(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!qn(n,r)||!qn(o,i):!0}function Tc(e,t,n){var r=!1,o=_t,i=t.contextType;return typeof i=="object"&&i!==null?i=De(i):(o=Ee(t)?Mt:pe.current,r=t.contextTypes,i=(r=r!=null)?dn(e,o):_t),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=jo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function va(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&jo.enqueueReplaceState(t,t.state,null)}function Ji(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Jl(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=De(i):(i=Ee(t)?Mt:pe.current,o.context=dn(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(qi(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&jo.enqueueReplaceState(o,o.state,null),fo(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function vn(e,t){try{var n="",r=t;do n+=md(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function ci(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Zi(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Vp=typeof WeakMap=="function"?WeakMap:Map;function Rc(e,t,n){n=be(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){yo||(yo=!0,al=r),Zi(e,t)},n}function Oc(e,t,n){n=be(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Zi(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Zi(e,t),typeof r!="function"&&(wt===null?wt=new Set([this]):wt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function ya(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Vp;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=nh.bind(null,e,t,n),t.then(e,e))}function ga(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function wa(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=be(-1,1),t.tag=2,gt(n,t,1))),n.lanes|=1),e)}var Wp=it.ReactCurrentOwner,Se=!1;function he(e,t,n,r){t.child=e===null?lc(t,null,n,r):hn(t,e.child,n,r)}function Sa(e,t,n,r,o){n=n.render;var i=t.ref;return sn(t,o),r=nu(e,t,n,r,i,o),n=ru(),e!==null&&!Se?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,ot(e,t,o)):(W&&n&&Hl(t),t.flags|=1,he(e,t,r,o),t.child)}function ka(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!pu(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,jc(e,t,i,r,o)):(e=Gr(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:qn,n(l,r)&&e.ref===t.ref)return ot(e,t,o)}return t.flags|=1,e=kt(i,r),e.ref=t.ref,e.return=t,t.child=e}function jc(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(qn(i,r)&&e.ref===t.ref)if(Se=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(Se=!0);else return t.lanes=e.lanes,ot(e,t,o)}return bi(e,t,n,r,o)}function Lc(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},F(rn,xe),xe|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,F(rn,xe),xe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,F(rn,xe),xe|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,F(rn,xe),xe|=r;return he(e,t,o,n),t.child}function zc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function bi(e,t,n,r,o){var i=Ee(n)?Mt:pe.current;return i=dn(t,i),sn(t,o),n=nu(e,t,n,r,i,o),r=ru(),e!==null&&!Se?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,ot(e,t,o)):(W&&r&&Hl(t),t.flags|=1,he(e,t,n,o),t.child)}function Ea(e,t,n,r,o){if(Ee(n)){var i=!0;lo(t)}else i=!1;if(sn(t,o),t.stateNode===null)Qr(e,t),Tc(t,n,r),Ji(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,u=t.memoizedProps;l.props=u;var a=l.context,f=n.contextType;typeof f=="object"&&f!==null?f=De(f):(f=Ee(n)?Mt:pe.current,f=dn(t,f));var p=n.getDerivedStateFromProps,m=typeof p=="function"||typeof l.getSnapshotBeforeUpdate=="function";m||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u!==r||a!==f)&&va(t,l,r,f),st=!1;var h=t.memoizedState;l.state=h,fo(t,r,l,o),a=t.memoizedState,u!==r||h!==a||ke.current||st?(typeof p=="function"&&(qi(t,n,p,r),a=t.memoizedState),(u=st||ma(t,n,u,r,h,a,f))?(m||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),l.props=r,l.state=a,l.context=f,r=u):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,ac(e,t),u=t.memoizedProps,f=t.type===t.elementType?u:Ue(t.type,u),l.props=f,m=t.pendingProps,h=l.context,a=n.contextType,typeof a=="object"&&a!==null?a=De(a):(a=Ee(n)?Mt:pe.current,a=dn(t,a));var y=n.getDerivedStateFromProps;(p=typeof y=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u!==m||h!==a)&&va(t,l,r,a),st=!1,h=t.memoizedState,l.state=h,fo(t,r,l,o);var w=t.memoizedState;u!==m||h!==w||ke.current||st?(typeof y=="function"&&(qi(t,n,y,r),w=t.memoizedState),(f=st||ma(t,n,f,r,h,w,a)||!1)?(p||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,w,a),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,w,a)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||u===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),l.props=r,l.state=w,l.context=a,r=f):(typeof l.componentDidUpdate!="function"||u===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return el(e,t,n,r,i,o)}function el(e,t,n,r,o,i){zc(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&ua(t,n,!1),ot(e,t,i);r=t.stateNode,Wp.current=t;var u=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=hn(t,e.child,null,i),t.child=hn(t,null,u,i)):he(e,t,u,i),t.memoizedState=r.state,o&&ua(t,n,!0),t.child}function Dc(e){var t=e.stateNode;t.pendingContext?la(e,t.pendingContext,t.pendingContext!==t.context):t.context&&la(e,t.context,!1),Zl(e,t.containerInfo)}function _a(e,t,n,r,o){return pn(),Ql(o),t.flags|=256,he(e,t,n,r),t.child}var tl={dehydrated:null,treeContext:null,retryLane:0};function nl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Mc(e,t,n){var r=t.pendingProps,o=Q.current,i=!1,l=(t.flags&128)!==0,u;if((u=l)||(u=e!==null&&e.memoizedState===null?!1:(o&2)!==0),u?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),F(Q,o&1),e===null)return Xi(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=Do(l,r,0,null),e=Dt(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=nl(n),t.memoizedState=tl,e):lu(t,l));if(o=e.memoizedState,o!==null&&(u=o.dehydrated,u!==null))return Hp(e,t,l,r,u,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,u=o.sibling;var a={mode:"hidden",children:r.children};return!(l&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=kt(o,a),r.subtreeFlags=o.subtreeFlags&14680064),u!==null?i=kt(u,i):(i=Dt(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?nl(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=tl,r}return i=e.child,e=i.sibling,r=kt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function lu(e,t){return t=Do({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Lr(e,t,n,r){return r!==null&&Ql(r),hn(t,e.child,null,n),e=lu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Hp(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=ci(Error(g(422))),Lr(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=Do({mode:"visible",children:r.children},o,0,null),i=Dt(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&hn(t,e.child,null,l),t.child.memoizedState=nl(l),t.memoizedState=tl,i);if(!(t.mode&1))return Lr(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var u=r.dgst;return r=u,i=Error(g(419)),r=ci(i,r,void 0),Lr(e,t,l,r)}if(u=(l&e.childLanes)!==0,Se||u){if(r=oe,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,rt(e,o),Ve(r,e,o,-1))}return du(),r=ci(Error(g(421))),Lr(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=rh.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Ce=yt(o.nextSibling),Ne=t,W=!0,$e=null,e!==null&&(Re[Oe++]=Je,Re[Oe++]=Ze,Re[Oe++]=At,Je=e.id,Ze=e.overflow,At=t),t=lu(t,r.children),t.flags|=4096,t)}function xa(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Gi(e.return,t,n)}function fi(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Ac(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(he(e,t,r.children,n),r=Q.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&xa(e,n,t);else if(e.tag===19)xa(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(F(Q,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&po(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),fi(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&po(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}fi(t,!0,n,null,i);break;case"together":fi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Qr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ot(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ft|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(g(153));if(t.child!==null){for(e=t.child,n=kt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=kt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Kp(e,t,n){switch(t.tag){case 3:Dc(t),pn();break;case 5:sc(t);break;case 1:Ee(t.type)&&lo(t);break;case 4:Zl(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;F(so,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(F(Q,Q.current&1),t.flags|=128,null):n&t.child.childLanes?Mc(e,t,n):(F(Q,Q.current&1),e=ot(e,t,n),e!==null?e.sibling:null);F(Q,Q.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Ac(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),F(Q,Q.current),r)break;return null;case 22:case 23:return t.lanes=0,Lc(e,t,n)}return ot(e,t,n)}var Uc,rl,Fc,$c;Uc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};rl=function(){};Fc=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Lt(Xe.current);var i=null;switch(n){case"input":o=Ci(e,o),r=Ci(e,r),i=[];break;case"select":o=X({},o,{value:void 0}),r=X({},r,{value:void 0}),i=[];break;case"textarea":o=Pi(e,o),r=Pi(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=oo)}Ri(n,r);var l;n=null;for(f in o)if(!r.hasOwnProperty(f)&&o.hasOwnProperty(f)&&o[f]!=null)if(f==="style"){var u=o[f];for(l in u)u.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else f!=="dangerouslySetInnerHTML"&&f!=="children"&&f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(Wn.hasOwnProperty(f)?i||(i=[]):(i=i||[]).push(f,null));for(f in r){var a=r[f];if(u=o?.[f],r.hasOwnProperty(f)&&a!==u&&(a!=null||u!=null))if(f==="style")if(u){for(l in u)!u.hasOwnProperty(l)||a&&a.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in a)a.hasOwnProperty(l)&&u[l]!==a[l]&&(n||(n={}),n[l]=a[l])}else n||(i||(i=[]),i.push(f,n)),n=a;else f==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,u=u?u.__html:void 0,a!=null&&u!==a&&(i=i||[]).push(f,a)):f==="children"?typeof a!="string"&&typeof a!="number"||(i=i||[]).push(f,""+a):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&(Wn.hasOwnProperty(f)?(a!=null&&f==="onScroll"&&$("scroll",e),i||u===a||(i=[])):(i=i||[]).push(f,a))}n&&(i=i||[]).push("style",n);var f=i;(t.updateQueue=f)&&(t.flags|=4)}};$c=function(e,t,n,r){n!==r&&(t.flags|=4)};function Pn(e,t){if(!W)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ce(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Qp(e,t,n){var r=t.pendingProps;switch(Kl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ce(t),null;case 1:return Ee(t.type)&&io(),ce(t),null;case 3:return r=t.stateNode,mn(),B(ke),B(pe),eu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Or(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,$e!==null&&(fl($e),$e=null))),rl(e,t),ce(t),null;case 5:bl(t);var o=Lt(tr.current);if(n=t.type,e!==null&&t.stateNode!=null)Fc(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(g(166));return ce(t),null}if(e=Lt(Xe.current),Or(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Qe]=t,r[bn]=i,e=(t.mode&1)!==0,n){case"dialog":$("cancel",r),$("close",r);break;case"iframe":case"object":case"embed":$("load",r);break;case"video":case"audio":for(o=0;o<Ln.length;o++)$(Ln[o],r);break;case"source":$("error",r);break;case"img":case"image":case"link":$("error",r),$("load",r);break;case"details":$("toggle",r);break;case"input":Lu(r,i),$("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},$("invalid",r);break;case"textarea":Du(r,i),$("invalid",r)}Ri(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var u=i[l];l==="children"?typeof u=="string"?r.textContent!==u&&(i.suppressHydrationWarning!==!0&&Rr(r.textContent,u,e),o=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(i.suppressHydrationWarning!==!0&&Rr(r.textContent,u,e),o=["children",""+u]):Wn.hasOwnProperty(l)&&u!=null&&l==="onScroll"&&$("scroll",r)}switch(n){case"input":Er(r),zu(r,i,!0);break;case"textarea":Er(r),Mu(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=oo)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=hs(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[Qe]=t,e[bn]=r,Uc(e,t,!1,!1),t.stateNode=e;e:{switch(l=Oi(n,r),n){case"dialog":$("cancel",e),$("close",e),o=r;break;case"iframe":case"object":case"embed":$("load",e),o=r;break;case"video":case"audio":for(o=0;o<Ln.length;o++)$(Ln[o],e);o=r;break;case"source":$("error",e),o=r;break;case"img":case"image":case"link":$("error",e),$("load",e),o=r;break;case"details":$("toggle",e),o=r;break;case"input":Lu(e,r),o=Ci(e,r),$("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=X({},r,{value:void 0}),$("invalid",e);break;case"textarea":Du(e,r),o=Pi(e,r),$("invalid",e);break;default:o=r}Ri(n,o),u=o;for(i in u)if(u.hasOwnProperty(i)){var a=u[i];i==="style"?ys(e,a):i==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&ms(e,a)):i==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Hn(e,a):typeof a=="number"&&Hn(e,""+a):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Wn.hasOwnProperty(i)?a!=null&&i==="onScroll"&&$("scroll",e):a!=null&&Rl(e,i,a,l))}switch(n){case"input":Er(e),zu(e,r,!1);break;case"textarea":Er(e),Mu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Et(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?on(e,!!r.multiple,i,!1):r.defaultValue!=null&&on(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=oo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ce(t),null;case 6:if(e&&t.stateNode!=null)$c(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(g(166));if(n=Lt(tr.current),Lt(Xe.current),Or(t)){if(r=t.stateNode,n=t.memoizedProps,r[Qe]=t,(i=r.nodeValue!==n)&&(e=Ne,e!==null))switch(e.tag){case 3:Rr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Rr(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Qe]=t,t.stateNode=r}return ce(t),null;case 13:if(B(Q),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(W&&Ce!==null&&t.mode&1&&!(t.flags&128))oc(),pn(),t.flags|=98560,i=!1;else if(i=Or(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(g(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(g(317));i[Qe]=t}else pn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ce(t),i=!1}else $e!==null&&(fl($e),$e=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Q.current&1?te===0&&(te=3):du())),t.updateQueue!==null&&(t.flags|=4),ce(t),null);case 4:return mn(),rl(e,t),e===null&&Jn(t.stateNode.containerInfo),ce(t),null;case 10:return Gl(t.type._context),ce(t),null;case 17:return Ee(t.type)&&io(),ce(t),null;case 19:if(B(Q),i=t.memoizedState,i===null)return ce(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)Pn(i,!1);else{if(te!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=po(e),l!==null){for(t.flags|=128,Pn(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return F(Q,Q.current&1|2),t.child}e=e.sibling}i.tail!==null&&J()>yn&&(t.flags|=128,r=!0,Pn(i,!1),t.lanes=4194304)}else{if(!r)if(e=po(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Pn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!W)return ce(t),null}else 2*J()-i.renderingStartTime>yn&&n!==1073741824&&(t.flags|=128,r=!0,Pn(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=J(),t.sibling=null,n=Q.current,F(Q,r?n&1|2:n&1),t):(ce(t),null);case 22:case 23:return fu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?xe&1073741824&&(ce(t),t.subtreeFlags&6&&(t.flags|=8192)):ce(t),null;case 24:return null;case 25:return null}throw Error(g(156,t.tag))}function Yp(e,t){switch(Kl(t),t.tag){case 1:return Ee(t.type)&&io(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return mn(),B(ke),B(pe),eu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return bl(t),null;case 13:if(B(Q),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(g(340));pn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return B(Q),null;case 4:return mn(),null;case 10:return Gl(t.type._context),null;case 22:case 23:return fu(),null;case 24:return null;default:return null}}var zr=!1,de=!1,Xp=typeof WeakSet=="function"?WeakSet:Set,_=null;function nn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){G(e,t,r)}else n.current=null}function ol(e,t,n){try{n()}catch(r){G(e,t,r)}}var Ca=!1;function Gp(e,t){if(Bi=to,e=Ks(),Wl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,u=-1,a=-1,f=0,p=0,m=e,h=null;t:for(;;){for(var y;m!==n||o!==0&&m.nodeType!==3||(u=l+o),m!==i||r!==0&&m.nodeType!==3||(a=l+r),m.nodeType===3&&(l+=m.nodeValue.length),(y=m.firstChild)!==null;)h=m,m=y;for(;;){if(m===e)break t;if(h===n&&++f===o&&(u=l),h===i&&++p===r&&(a=l),(y=m.nextSibling)!==null)break;m=h,h=m.parentNode}m=y}n=u===-1||a===-1?null:{start:u,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Vi={focusedElem:e,selectionRange:n},to=!1,_=t;_!==null;)if(t=_,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,_=e;else for(;_!==null;){t=_;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var S=w.memoizedProps,O=w.memoizedState,c=t.stateNode,s=c.getSnapshotBeforeUpdate(t.elementType===t.type?S:Ue(t.type,S),O);c.__reactInternalSnapshotBeforeUpdate=s}break;case 3:var d=t.stateNode.containerInfo;d.nodeType===1?d.textContent="":d.nodeType===9&&d.documentElement&&d.removeChild(d.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(g(163))}}catch(v){G(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,_=e;break}_=t.return}return w=Ca,Ca=!1,w}function $n(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&ol(t,n,i)}o=o.next}while(o!==r)}}function Lo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function il(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Bc(e){var t=e.alternate;t!==null&&(e.alternate=null,Bc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Qe],delete t[bn],delete t[Ki],delete t[Op],delete t[jp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Vc(e){return e.tag===5||e.tag===3||e.tag===4}function Na(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Vc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ll(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=oo));else if(r!==4&&(e=e.child,e!==null))for(ll(e,t,n),e=e.sibling;e!==null;)ll(e,t,n),e=e.sibling}function ul(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ul(e,t,n),e=e.sibling;e!==null;)ul(e,t,n),e=e.sibling}var ie=null,Fe=!1;function ut(e,t,n){for(n=n.child;n!==null;)Wc(e,t,n),n=n.sibling}function Wc(e,t,n){if(Ye&&typeof Ye.onCommitFiberUnmount=="function")try{Ye.onCommitFiberUnmount(Co,n)}catch{}switch(n.tag){case 5:de||nn(n,t);case 6:var r=ie,o=Fe;ie=null,ut(e,t,n),ie=r,Fe=o,ie!==null&&(Fe?(e=ie,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ie.removeChild(n.stateNode));break;case 18:ie!==null&&(Fe?(e=ie,n=n.stateNode,e.nodeType===8?oi(e.parentNode,n):e.nodeType===1&&oi(e,n),Xn(e)):oi(ie,n.stateNode));break;case 4:r=ie,o=Fe,ie=n.stateNode.containerInfo,Fe=!0,ut(e,t,n),ie=r,Fe=o;break;case 0:case 11:case 14:case 15:if(!de&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&ol(n,t,l),o=o.next}while(o!==r)}ut(e,t,n);break;case 1:if(!de&&(nn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(u){G(n,t,u)}ut(e,t,n);break;case 21:ut(e,t,n);break;case 22:n.mode&1?(de=(r=de)||n.memoizedState!==null,ut(e,t,n),de=r):ut(e,t,n);break;default:ut(e,t,n)}}function Ia(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Xp),t.forEach(function(r){var o=oh.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Ae(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,u=l;e:for(;u!==null;){switch(u.tag){case 5:ie=u.stateNode,Fe=!1;break e;case 3:ie=u.stateNode.containerInfo,Fe=!0;break e;case 4:ie=u.stateNode.containerInfo,Fe=!0;break e}u=u.return}if(ie===null)throw Error(g(160));Wc(i,l,o),ie=null,Fe=!1;var a=o.alternate;a!==null&&(a.return=null),o.return=null}catch(f){G(o,t,f)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Hc(t,e),t=t.sibling}function Hc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ae(t,e),He(e),r&4){try{$n(3,e,e.return),Lo(3,e)}catch(S){G(e,e.return,S)}try{$n(5,e,e.return)}catch(S){G(e,e.return,S)}}break;case 1:Ae(t,e),He(e),r&512&&n!==null&&nn(n,n.return);break;case 5:if(Ae(t,e),He(e),r&512&&n!==null&&nn(n,n.return),e.flags&32){var o=e.stateNode;try{Hn(o,"")}catch(S){G(e,e.return,S)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,u=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{u==="input"&&i.type==="radio"&&i.name!=null&&ds(o,i),Oi(u,l);var f=Oi(u,i);for(l=0;l<a.length;l+=2){var p=a[l],m=a[l+1];p==="style"?ys(o,m):p==="dangerouslySetInnerHTML"?ms(o,m):p==="children"?Hn(o,m):Rl(o,p,m,f)}switch(u){case"input":Ni(o,i);break;case"textarea":ps(o,i);break;case"select":var h=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var y=i.value;y!=null?on(o,!!i.multiple,y,!1):h!==!!i.multiple&&(i.defaultValue!=null?on(o,!!i.multiple,i.defaultValue,!0):on(o,!!i.multiple,i.multiple?[]:"",!1))}o[bn]=i}catch(S){G(e,e.return,S)}}break;case 6:if(Ae(t,e),He(e),r&4){if(e.stateNode===null)throw Error(g(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(S){G(e,e.return,S)}}break;case 3:if(Ae(t,e),He(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Xn(t.containerInfo)}catch(S){G(e,e.return,S)}break;case 4:Ae(t,e),He(e);break;case 13:Ae(t,e),He(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(su=J())),r&4&&Ia(e);break;case 22:if(p=n!==null&&n.memoizedState!==null,e.mode&1?(de=(f=de)||p,Ae(t,e),de=f):Ae(t,e),He(e),r&8192){if(f=e.memoizedState!==null,(e.stateNode.isHidden=f)&&!p&&e.mode&1)for(_=e,p=e.child;p!==null;){for(m=_=p;_!==null;){switch(h=_,y=h.child,h.tag){case 0:case 11:case 14:case 15:$n(4,h,h.return);break;case 1:nn(h,h.return);var w=h.stateNode;if(typeof w.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(S){G(r,n,S)}}break;case 5:nn(h,h.return);break;case 22:if(h.memoizedState!==null){Ta(m);continue}}y!==null?(y.return=h,_=y):Ta(m)}p=p.sibling}e:for(p=null,m=e;;){if(m.tag===5){if(p===null){p=m;try{o=m.stateNode,f?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(u=m.stateNode,a=m.memoizedProps.style,l=a!=null&&a.hasOwnProperty("display")?a.display:null,u.style.display=vs("display",l))}catch(S){G(e,e.return,S)}}}else if(m.tag===6){if(p===null)try{m.stateNode.nodeValue=f?"":m.memoizedProps}catch(S){G(e,e.return,S)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;p===m&&(p=null),m=m.return}p===m&&(p=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Ae(t,e),He(e),r&4&&Ia(e);break;case 21:break;default:Ae(t,e),He(e)}}function He(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Vc(n)){var r=n;break e}n=n.return}throw Error(g(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Hn(o,""),r.flags&=-33);var i=Na(e);ul(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,u=Na(e);ll(e,u,l);break;default:throw Error(g(161))}}catch(a){G(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function qp(e,t,n){_=e,Kc(e)}function Kc(e,t,n){for(var r=(e.mode&1)!==0;_!==null;){var o=_,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||zr;if(!l){var u=o.alternate,a=u!==null&&u.memoizedState!==null||de;u=zr;var f=de;if(zr=l,(de=a)&&!f)for(_=o;_!==null;)l=_,a=l.child,l.tag===22&&l.memoizedState!==null?Ra(o):a!==null?(a.return=l,_=a):Ra(o);for(;i!==null;)_=i,Kc(i),i=i.sibling;_=o,zr=u,de=f}Pa(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,_=i):Pa(e)}}function Pa(e){for(;_!==null;){var t=_;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:de||Lo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!de)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Ue(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&da(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}da(t,l,n)}break;case 5:var u=t.stateNode;if(n===null&&t.flags&4){n=u;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var f=t.alternate;if(f!==null){var p=f.memoizedState;if(p!==null){var m=p.dehydrated;m!==null&&Xn(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(g(163))}de||t.flags&512&&il(t)}catch(h){G(t,t.return,h)}}if(t===e){_=null;break}if(n=t.sibling,n!==null){n.return=t.return,_=n;break}_=t.return}}function Ta(e){for(;_!==null;){var t=_;if(t===e){_=null;break}var n=t.sibling;if(n!==null){n.return=t.return,_=n;break}_=t.return}}function Ra(e){for(;_!==null;){var t=_;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Lo(4,t)}catch(a){G(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(a){G(t,o,a)}}var i=t.return;try{il(t)}catch(a){G(t,i,a)}break;case 5:var l=t.return;try{il(t)}catch(a){G(t,l,a)}}}catch(a){G(t,t.return,a)}if(t===e){_=null;break}var u=t.sibling;if(u!==null){u.return=t.return,_=u;break}_=t.return}}var Jp=Math.ceil,vo=it.ReactCurrentDispatcher,uu=it.ReactCurrentOwner,ze=it.ReactCurrentBatchConfig,M=0,oe=null,Z=null,le=0,xe=0,rn=Ct(0),te=0,ir=null,Ft=0,zo=0,au=0,Bn=null,we=null,su=0,yn=1/0,Ge=null,yo=!1,al=null,wt=null,Dr=!1,pt=null,go=0,Vn=0,sl=null,Yr=-1,Xr=0;function me(){return M&6?J():Yr!==-1?Yr:Yr=J()}function St(e){return e.mode&1?M&2&&le!==0?le&-le:zp.transition!==null?(Xr===0&&(Xr=Ts()),Xr):(e=U,e!==0||(e=window.event,e=e===void 0?16:Ms(e.type)),e):1}function Ve(e,t,n,r){if(50<Vn)throw Vn=0,sl=null,Error(g(185));dr(e,n,r),(!(M&2)||e!==oe)&&(e===oe&&(!(M&2)&&(zo|=n),te===4&&ft(e,le)),_e(e,r),n===1&&M===0&&!(t.mode&1)&&(yn=J()+500,Ro&&Nt()))}function _e(e,t){var n=e.callbackNode;zd(e,t);var r=eo(e,e===oe?le:0);if(r===0)n!==null&&Fu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Fu(n),t===1)e.tag===0?Lp(Oa.bind(null,e)):tc(Oa.bind(null,e)),Tp(function(){!(M&6)&&Nt()}),n=null;else{switch(Rs(r)){case 1:n=Dl;break;case 4:n=Is;break;case 16:n=br;break;case 536870912:n=Ps;break;default:n=br}n=bc(n,Qc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Qc(e,t){if(Yr=-1,Xr=0,M&6)throw Error(g(327));var n=e.callbackNode;if(cn()&&e.callbackNode!==n)return null;var r=eo(e,e===oe?le:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=wo(e,r);else{t=r;var o=M;M|=2;var i=Xc();(oe!==e||le!==t)&&(Ge=null,yn=J()+500,zt(e,t));do try{eh();break}catch(u){Yc(e,u)}while(!0);Xl(),vo.current=i,M=o,Z!==null?t=0:(oe=null,le=0,t=te)}if(t!==0){if(t===2&&(o=Mi(e),o!==0&&(r=o,t=cl(e,o))),t===1)throw n=ir,zt(e,0),ft(e,r),_e(e,J()),n;if(t===6)ft(e,r);else{if(o=e.current.alternate,!(r&30)&&!Zp(o)&&(t=wo(e,r),t===2&&(i=Mi(e),i!==0&&(r=i,t=cl(e,i))),t===1))throw n=ir,zt(e,0),ft(e,r),_e(e,J()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(g(345));case 2:Rt(e,we,Ge);break;case 3:if(ft(e,r),(r&130023424)===r&&(t=su+500-J(),10<t)){if(eo(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){me(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Hi(Rt.bind(null,e,we,Ge),t);break}Rt(e,we,Ge);break;case 4:if(ft(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-Be(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=J()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Jp(r/1960))-r,10<r){e.timeoutHandle=Hi(Rt.bind(null,e,we,Ge),r);break}Rt(e,we,Ge);break;case 5:Rt(e,we,Ge);break;default:throw Error(g(329))}}}return _e(e,J()),e.callbackNode===n?Qc.bind(null,e):null}function cl(e,t){var n=Bn;return e.current.memoizedState.isDehydrated&&(zt(e,t).flags|=256),e=wo(e,t),e!==2&&(t=we,we=n,t!==null&&fl(t)),e}function fl(e){we===null?we=e:we.push.apply(we,e)}function Zp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!We(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ft(e,t){for(t&=~au,t&=~zo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Be(t),r=1<<n;e[n]=-1,t&=~r}}function Oa(e){if(M&6)throw Error(g(327));cn();var t=eo(e,0);if(!(t&1))return _e(e,J()),null;var n=wo(e,t);if(e.tag!==0&&n===2){var r=Mi(e);r!==0&&(t=r,n=cl(e,r))}if(n===1)throw n=ir,zt(e,0),ft(e,t),_e(e,J()),n;if(n===6)throw Error(g(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Rt(e,we,Ge),_e(e,J()),null}function cu(e,t){var n=M;M|=1;try{return e(t)}finally{M=n,M===0&&(yn=J()+500,Ro&&Nt())}}function $t(e){pt!==null&&pt.tag===0&&!(M&6)&&cn();var t=M;M|=1;var n=ze.transition,r=U;try{if(ze.transition=null,U=1,e)return e()}finally{U=r,ze.transition=n,M=t,!(M&6)&&Nt()}}function fu(){xe=rn.current,B(rn)}function zt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Pp(n)),Z!==null)for(n=Z.return;n!==null;){var r=n;switch(Kl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&io();break;case 3:mn(),B(ke),B(pe),eu();break;case 5:bl(r);break;case 4:mn();break;case 13:B(Q);break;case 19:B(Q);break;case 10:Gl(r.type._context);break;case 22:case 23:fu()}n=n.return}if(oe=e,Z=e=kt(e.current,null),le=xe=t,te=0,ir=null,au=zo=Ft=0,we=Bn=null,jt!==null){for(t=0;t<jt.length;t++)if(n=jt[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}jt=null}return e}function Yc(e,t){do{var n=Z;try{if(Xl(),Hr.current=mo,ho){for(var r=Y.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}ho=!1}if(Ut=0,re=ee=Y=null,Fn=!1,nr=0,uu.current=null,n===null||n.return===null){te=1,ir=t,Z=null;break}e:{var i=e,l=n.return,u=n,a=t;if(t=le,u.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var f=a,p=u,m=p.tag;if(!(p.mode&1)&&(m===0||m===11||m===15)){var h=p.alternate;h?(p.updateQueue=h.updateQueue,p.memoizedState=h.memoizedState,p.lanes=h.lanes):(p.updateQueue=null,p.memoizedState=null)}var y=ga(l);if(y!==null){y.flags&=-257,wa(y,l,u,i,t),y.mode&1&&ya(i,f,t),t=y,a=f;var w=t.updateQueue;if(w===null){var S=new Set;S.add(a),t.updateQueue=S}else w.add(a);break e}else{if(!(t&1)){ya(i,f,t),du();break e}a=Error(g(426))}}else if(W&&u.mode&1){var O=ga(l);if(O!==null){!(O.flags&65536)&&(O.flags|=256),wa(O,l,u,i,t),Ql(vn(a,u));break e}}i=a=vn(a,u),te!==4&&(te=2),Bn===null?Bn=[i]:Bn.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var c=Rc(i,a,t);fa(i,c);break e;case 1:u=a;var s=i.type,d=i.stateNode;if(!(i.flags&128)&&(typeof s.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(wt===null||!wt.has(d)))){i.flags|=65536,t&=-t,i.lanes|=t;var v=Oc(i,u,t);fa(i,v);break e}}i=i.return}while(i!==null)}qc(n)}catch(E){t=E,Z===n&&n!==null&&(Z=n=n.return);continue}break}while(!0)}function Xc(){var e=vo.current;return vo.current=mo,e===null?mo:e}function du(){(te===0||te===3||te===2)&&(te=4),oe===null||!(Ft&268435455)&&!(zo&268435455)||ft(oe,le)}function wo(e,t){var n=M;M|=2;var r=Xc();(oe!==e||le!==t)&&(Ge=null,zt(e,t));do try{bp();break}catch(o){Yc(e,o)}while(!0);if(Xl(),M=n,vo.current=r,Z!==null)throw Error(g(261));return oe=null,le=0,te}function bp(){for(;Z!==null;)Gc(Z)}function eh(){for(;Z!==null&&!Cd();)Gc(Z)}function Gc(e){var t=Zc(e.alternate,e,xe);e.memoizedProps=e.pendingProps,t===null?qc(e):Z=t,uu.current=null}function qc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Yp(n,t),n!==null){n.flags&=32767,Z=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{te=6,Z=null;return}}else if(n=Qp(n,t,xe),n!==null){Z=n;return}if(t=t.sibling,t!==null){Z=t;return}Z=t=e}while(t!==null);te===0&&(te=5)}function Rt(e,t,n){var r=U,o=ze.transition;try{ze.transition=null,U=1,th(e,t,n,r)}finally{ze.transition=o,U=r}return null}function th(e,t,n,r){do cn();while(pt!==null);if(M&6)throw Error(g(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(g(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Dd(e,i),e===oe&&(Z=oe=null,le=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Dr||(Dr=!0,bc(br,function(){return cn(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=ze.transition,ze.transition=null;var l=U;U=1;var u=M;M|=4,uu.current=null,Gp(e,n),Hc(n,e),kp(Vi),to=!!Bi,Vi=Bi=null,e.current=n,qp(n),Nd(),M=u,U=l,ze.transition=i}else e.current=n;if(Dr&&(Dr=!1,pt=e,go=o),i=e.pendingLanes,i===0&&(wt=null),Td(n.stateNode),_e(e,J()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(yo)throw yo=!1,e=al,al=null,e;return go&1&&e.tag!==0&&cn(),i=e.pendingLanes,i&1?e===sl?Vn++:(Vn=0,sl=e):Vn=0,Nt(),null}function cn(){if(pt!==null){var e=Rs(go),t=ze.transition,n=U;try{if(ze.transition=null,U=16>e?16:e,pt===null)var r=!1;else{if(e=pt,pt=null,go=0,M&6)throw Error(g(331));var o=M;for(M|=4,_=e.current;_!==null;){var i=_,l=i.child;if(_.flags&16){var u=i.deletions;if(u!==null){for(var a=0;a<u.length;a++){var f=u[a];for(_=f;_!==null;){var p=_;switch(p.tag){case 0:case 11:case 15:$n(8,p,i)}var m=p.child;if(m!==null)m.return=p,_=m;else for(;_!==null;){p=_;var h=p.sibling,y=p.return;if(Bc(p),p===f){_=null;break}if(h!==null){h.return=y,_=h;break}_=y}}}var w=i.alternate;if(w!==null){var S=w.child;if(S!==null){w.child=null;do{var O=S.sibling;S.sibling=null,S=O}while(S!==null)}}_=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,_=l;else e:for(;_!==null;){if(i=_,i.flags&2048)switch(i.tag){case 0:case 11:case 15:$n(9,i,i.return)}var c=i.sibling;if(c!==null){c.return=i.return,_=c;break e}_=i.return}}var s=e.current;for(_=s;_!==null;){l=_;var d=l.child;if(l.subtreeFlags&2064&&d!==null)d.return=l,_=d;else e:for(l=s;_!==null;){if(u=_,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:Lo(9,u)}}catch(E){G(u,u.return,E)}if(u===l){_=null;break e}var v=u.sibling;if(v!==null){v.return=u.return,_=v;break e}_=u.return}}if(M=o,Nt(),Ye&&typeof Ye.onPostCommitFiberRoot=="function")try{Ye.onPostCommitFiberRoot(Co,e)}catch{}r=!0}return r}finally{U=n,ze.transition=t}}return!1}function ja(e,t,n){t=vn(n,t),t=Rc(e,t,1),e=gt(e,t,1),t=me(),e!==null&&(dr(e,1,t),_e(e,t))}function G(e,t,n){if(e.tag===3)ja(e,e,n);else for(;t!==null;){if(t.tag===3){ja(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(wt===null||!wt.has(r))){e=vn(n,e),e=Oc(t,e,1),t=gt(t,e,1),e=me(),t!==null&&(dr(t,1,e),_e(t,e));break}}t=t.return}}function nh(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=me(),e.pingedLanes|=e.suspendedLanes&n,oe===e&&(le&n)===n&&(te===4||te===3&&(le&130023424)===le&&500>J()-su?zt(e,0):au|=n),_e(e,t)}function Jc(e,t){t===0&&(e.mode&1?(t=Cr,Cr<<=1,!(Cr&130023424)&&(Cr=4194304)):t=1);var n=me();e=rt(e,t),e!==null&&(dr(e,t,n),_e(e,n))}function rh(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Jc(e,n)}function oh(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(g(314))}r!==null&&r.delete(t),Jc(e,n)}var Zc;Zc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ke.current)Se=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Se=!1,Kp(e,t,n);Se=!!(e.flags&131072)}else Se=!1,W&&t.flags&1048576&&nc(t,ao,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Qr(e,t),e=t.pendingProps;var o=dn(t,pe.current);sn(t,n),o=nu(null,t,r,e,o,n);var i=ru();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ee(r)?(i=!0,lo(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Jl(t),o.updater=jo,t.stateNode=o,o._reactInternals=t,Ji(t,r,e,n),t=el(null,t,r,!0,i,n)):(t.tag=0,W&&i&&Hl(t),he(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Qr(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=lh(r),e=Ue(r,e),o){case 0:t=bi(null,t,r,e,n);break e;case 1:t=Ea(null,t,r,e,n);break e;case 11:t=Sa(null,t,r,e,n);break e;case 14:t=ka(null,t,r,Ue(r.type,e),n);break e}throw Error(g(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ue(r,o),bi(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ue(r,o),Ea(e,t,r,o,n);case 3:e:{if(Dc(t),e===null)throw Error(g(387));r=t.pendingProps,i=t.memoizedState,o=i.element,ac(e,t),fo(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=vn(Error(g(423)),t),t=_a(e,t,r,n,o);break e}else if(r!==o){o=vn(Error(g(424)),t),t=_a(e,t,r,n,o);break e}else for(Ce=yt(t.stateNode.containerInfo.firstChild),Ne=t,W=!0,$e=null,n=lc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(pn(),r===o){t=ot(e,t,n);break e}he(e,t,r,n)}t=t.child}return t;case 5:return sc(t),e===null&&Xi(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,Wi(r,o)?l=null:i!==null&&Wi(r,i)&&(t.flags|=32),zc(e,t),he(e,t,l,n),t.child;case 6:return e===null&&Xi(t),null;case 13:return Mc(e,t,n);case 4:return Zl(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=hn(t,null,r,n):he(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ue(r,o),Sa(e,t,r,o,n);case 7:return he(e,t,t.pendingProps,n),t.child;case 8:return he(e,t,t.pendingProps.children,n),t.child;case 12:return he(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,F(so,r._currentValue),r._currentValue=l,i!==null)if(We(i.value,l)){if(i.children===o.children&&!ke.current){t=ot(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var u=i.dependencies;if(u!==null){l=i.child;for(var a=u.firstContext;a!==null;){if(a.context===r){if(i.tag===1){a=be(-1,n&-n),a.tag=2;var f=i.updateQueue;if(f!==null){f=f.shared;var p=f.pending;p===null?a.next=a:(a.next=p.next,p.next=a),f.pending=a}}i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),Gi(i.return,n,t),u.lanes|=n;break}a=a.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(g(341));l.lanes|=n,u=l.alternate,u!==null&&(u.lanes|=n),Gi(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}he(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,sn(t,n),o=De(o),r=r(o),t.flags|=1,he(e,t,r,n),t.child;case 14:return r=t.type,o=Ue(r,t.pendingProps),o=Ue(r.type,o),ka(e,t,r,o,n);case 15:return jc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ue(r,o),Qr(e,t),t.tag=1,Ee(r)?(e=!0,lo(t)):e=!1,sn(t,n),Tc(t,r,o),Ji(t,r,o,n),el(null,t,r,!0,e,n);case 19:return Ac(e,t,n);case 22:return Lc(e,t,n)}throw Error(g(156,t.tag))};function bc(e,t){return Ns(e,t)}function ih(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function je(e,t,n,r){return new ih(e,t,n,r)}function pu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function lh(e){if(typeof e=="function")return pu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===jl)return 11;if(e===Ll)return 14}return 2}function kt(e,t){var n=e.alternate;return n===null?(n=je(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Gr(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")pu(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Yt:return Dt(n.children,o,i,t);case Ol:l=8,o|=8;break;case ki:return e=je(12,n,t,o|2),e.elementType=ki,e.lanes=i,e;case Ei:return e=je(13,n,t,o),e.elementType=Ei,e.lanes=i,e;case _i:return e=je(19,n,t,o),e.elementType=_i,e.lanes=i,e;case ss:return Do(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case us:l=10;break e;case as:l=9;break e;case jl:l=11;break e;case Ll:l=14;break e;case at:l=16,r=null;break e}throw Error(g(130,e==null?e:typeof e,""))}return t=je(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function Dt(e,t,n,r){return e=je(7,e,r,t),e.lanes=n,e}function Do(e,t,n,r){return e=je(22,e,r,t),e.elementType=ss,e.lanes=n,e.stateNode={isHidden:!1},e}function di(e,t,n){return e=je(6,e,null,t),e.lanes=n,e}function pi(e,t,n){return t=je(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function uh(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Yo(0),this.expirationTimes=Yo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Yo(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function hu(e,t,n,r,o,i,l,u,a){return e=new uh(e,t,n,u,a),t===1?(t=1,i===!0&&(t|=8)):t=0,i=je(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Jl(i),e}function ah(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Qt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function ef(e){if(!e)return _t;e=e._reactInternals;e:{if(Wt(e)!==e||e.tag!==1)throw Error(g(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ee(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(g(171))}if(e.tag===1){var n=e.type;if(Ee(n))return ec(e,n,t)}return t}function tf(e,t,n,r,o,i,l,u,a){return e=hu(n,r,!0,e,o,i,l,u,a),e.context=ef(null),n=e.current,r=me(),o=St(n),i=be(r,o),i.callback=t??null,gt(n,i,o),e.current.lanes=o,dr(e,o,r),_e(e,r),e}function Mo(e,t,n,r){var o=t.current,i=me(),l=St(o);return n=ef(n),t.context===null?t.context=n:t.pendingContext=n,t=be(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=gt(o,t,l),e!==null&&(Ve(e,o,l,i),Wr(e,o,l)),l}function So(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function La(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function mu(e,t){La(e,t),(e=e.alternate)&&La(e,t)}function sh(){return null}var nf=typeof reportError=="function"?reportError:function(e){console.error(e)};function vu(e){this._internalRoot=e}Ao.prototype.render=vu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(g(409));Mo(e,t,null,null)};Ao.prototype.unmount=vu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;$t(function(){Mo(null,e,null,null)}),t[nt]=null}};function Ao(e){this._internalRoot=e}Ao.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ls();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ct.length&&t!==0&&t<ct[n].priority;n++);ct.splice(n,0,e),n===0&&Ds(e)}};function yu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Uo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function za(){}function ch(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var f=So(l);i.call(f)}}var l=tf(t,r,e,0,null,!1,!1,"",za);return e._reactRootContainer=l,e[nt]=l.current,Jn(e.nodeType===8?e.parentNode:e),$t(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var u=r;r=function(){var f=So(a);u.call(f)}}var a=hu(e,0,!1,null,null,!1,!1,"",za);return e._reactRootContainer=a,e[nt]=a.current,Jn(e.nodeType===8?e.parentNode:e),$t(function(){Mo(t,a,n,r)}),a}function Fo(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var u=o;o=function(){var a=So(l);u.call(a)}}Mo(t,l,e,o)}else l=ch(n,t,e,o,r);return So(l)}Os=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=jn(t.pendingLanes);n!==0&&(Ml(t,n|1),_e(t,J()),!(M&6)&&(yn=J()+500,Nt()))}break;case 13:$t(function(){var r=rt(e,1);if(r!==null){var o=me();Ve(r,e,1,o)}}),mu(e,1)}};Al=function(e){if(e.tag===13){var t=rt(e,134217728);if(t!==null){var n=me();Ve(t,e,134217728,n)}mu(e,134217728)}};js=function(e){if(e.tag===13){var t=St(e),n=rt(e,t);if(n!==null){var r=me();Ve(n,e,t,r)}mu(e,t)}};Ls=function(){return U};zs=function(e,t){var n=U;try{return U=e,t()}finally{U=n}};Li=function(e,t,n){switch(t){case"input":if(Ni(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=To(r);if(!o)throw Error(g(90));fs(r),Ni(r,o)}}}break;case"textarea":ps(e,n);break;case"select":t=n.value,t!=null&&on(e,!!n.multiple,t,!1)}};Ss=cu;ks=$t;var fh={usingClientEntryPoint:!1,Events:[hr,Jt,To,gs,ws,cu]},Tn={findFiberByHostInstance:Ot,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},dh={bundleType:Tn.bundleType,version:Tn.version,rendererPackageName:Tn.rendererPackageName,rendererConfig:Tn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:it.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=xs(e),e===null?null:e.stateNode},findFiberByHostInstance:Tn.findFiberByHostInstance||sh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Mr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Mr.isDisabled&&Mr.supportsFiber)try{Co=Mr.inject(dh),Ye=Mr}catch{}}Pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fh;Pe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!yu(t))throw Error(g(200));return ah(e,t,null,n)};Pe.createRoot=function(e,t){if(!yu(e))throw Error(g(299));var n=!1,r="",o=nf;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=hu(e,1,!1,null,null,n,!1,r,o),e[nt]=t.current,Jn(e.nodeType===8?e.parentNode:e),new vu(t)};Pe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(g(188)):(e=Object.keys(e).join(","),Error(g(268,e)));return e=xs(t),e=e===null?null:e.stateNode,e};Pe.flushSync=function(e){return $t(e)};Pe.hydrate=function(e,t,n){if(!Uo(t))throw Error(g(200));return Fo(null,e,t,!0,n)};Pe.hydrateRoot=function(e,t,n){if(!yu(e))throw Error(g(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=nf;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=tf(t,null,e,1,n??null,o,!1,i,l),e[nt]=t.current,Jn(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Ao(t)};Pe.render=function(e,t,n){if(!Uo(t))throw Error(g(200));return Fo(null,e,t,!1,n)};Pe.unmountComponentAtNode=function(e){if(!Uo(e))throw Error(g(40));return e._reactRootContainer?($t(function(){Fo(null,null,e,!1,function(){e._reactRootContainer=null,e[nt]=null})}),!0):!1};Pe.unstable_batchedUpdates=cu;Pe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Uo(n))throw Error(g(200));if(e==null||e._reactInternals===void 0)throw Error(g(38));return Fo(e,t,n,!1,r)};Pe.version="18.3.1-next-f1338f8080-20240426";function rf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(rf)}catch(e){console.error(e)}}rf(),rs.exports=Pe;var ph=rs.exports,of,Da=ph;of=Da.createRoot,Da.hydrateRoot;function Ht(e,t){Error.captureStackTrace&&Error.captureStackTrace(e,t)}var lf={credentialsUpdated:"CredentialsUpdatedMessage"},ve=class dl extends Error{errorCode;name="TidalError";constructor(t,n){super(t,n),Object.setPrototypeOf(this,dl.prototype),Ht(this,dl),this.errorCode=t}},hh=class pl extends ve{name="IllegalArgumentError";constructor(t,n){super(t,n),Object.setPrototypeOf(this,pl.prototype),Ht(this,pl)}},uf=class hl extends ve{name="NetworkError";constructor(t,n){super(t,n),Object.setPrototypeOf(this,hl.prototype),Ht(this,hl)}},lr=class ml extends ve{name="RetryableError";constructor(t,n){super(t,n),Object.setPrototypeOf(this,ml.prototype),Ht(this,ml)}},mh=class{#e;#t=!1;#n;#r;constructor(e){this.#r=new URL(e),this.synchronize()}now(e=Date.now()){return!this.#n||!this.#e?(console.warn("TrueTime is not yet synchronized"),e):this.#n+(e-this.#e)}async synchronize(){if(!(this.#e&&Math.abs(Date.now()-this.#e)<36e5||this.#t)){this.#t=!0;try{let e=await fetch(this.#r);e.ok&&e.headers.has("date")&&(this.#n=new Date(e.headers.get("date")).getTime(),this.#e=Date.now())}catch(e){console.error(e)}this.#t=!1}}timestamp(e,t){let n;if(t){if(n=performance.getEntriesByName(e).find(r=>"detail"in r&&r.detail===t),!n)throw ReferenceError(`There is no performance entry named "${e}" with detail "${t}"`)}else n=performance.getEntriesByName(e).pop();return n?n.startTime:void 0}},gu=new mh("https://api.tidal.com/v1/ping"),vh=class vl extends ve{name="AuthenticationError";constructor(t,n){super(t,n),Object.setPrototypeOf(this,vl.prototype),Ht(this,vl)}},yh=class yl extends ve{name="TokenResponseError";constructor(t,n){super(t,n),Object.setPrototypeOf(this,yl.prototype),Ht(this,yl)}},wu=class gl extends ve{name="UnexpectedError";constructor(t,n){super(t,n),Object.setPrototypeOf(this,gl.prototype),Ht(this,gl)}},b={authenticationError:"A0000",illegalArgumentError:"A0007",initError:"A0001",networkError:"A0002",retryableError:"A0003",storageError:"A0004",tokenResponseError:"A0005",unexpectedError:"A0006"},hi="AuthDB";function gh(e){return String.fromCharCode(...new Uint8Array(e))}function wh(e){const t=new ArrayBuffer(e.length),n=new Uint8Array(t);for(let r=0,o=e.length;r<o;r++)n[r]=e.charCodeAt(r);return n}var Le={getItem:e=>{const t=globalThis.localStorage.getItem(`${hi}/${e}`);return t?wh(t):void 0},removeItem:e=>{globalThis.localStorage.removeItem(`${hi}/${e}`)},setItem:(e,t)=>{globalThis.localStorage.setItem(`${hi}/${e}`,gh(t))}},af=e=>{const t=new TextEncoder;return globalThis.crypto.subtle.importKey("raw",t.encode(e),{name:"PBKDF2"},!1,["deriveBits","deriveKey"])},sf=(e,t)=>globalThis.crypto.subtle.deriveKey({hash:"SHA-256",iterations:1e5,name:"PBKDF2",salt:t},e,{length:256,name:"AES-KW"},!0,["wrapKey","unwrapKey"]),Sh=async(e,t)=>sf(await af(t),e),kh=e=>new TextEncoder().encode(e),Eh=e=>new TextDecoder().decode(e),_h=async({keyToWrap:e,password:t,salt:n})=>{const r=await sf(await af(t),n);return globalThis.crypto.subtle.wrapKey("raw",e,r,"AES-KW")},cf=async({password:e,salt:t,wrappedKeyBuffer:n})=>{const r=await Sh(t,e);return globalThis.crypto.subtle.unwrapKey("raw",n,r,"AES-KW","AES-CTR",!0,["encrypt","decrypt"])},xh=({content:e,counter:t,key:n})=>globalThis.crypto.subtle.encrypt({counter:t,length:64,name:"AES-CTR"},n,e),Ch=({counter:e,encryptedCredentials:t,key:n})=>globalThis.crypto.subtle.decrypt({counter:e,length:64,name:"AES-CTR"},n,t),Nh=()=>globalThis.crypto.subtle.generateKey({length:256,name:"AES-CTR"},!0,["encrypt","decrypt"]),Bt,Ih=e=>{Bt=e},Ph=async({password:e,storageKey:t})=>{const n=await Nh(),r=globalThis.crypto.getRandomValues(new Uint8Array(16)),o=globalThis.crypto.getRandomValues(new Uint8Array(16)),i=await _h({keyToWrap:n,password:e,salt:o});try{Le.setItem(`${t}Counter`,r),Le.setItem(`${t}Salt`,o),Le.setItem(`${t}Key`,i)}catch(l){throw new ve(b.storageError,{cause:l})}},ff=e=>({counter:Le.getItem(`${e}Counter`),encryptedCredentials:Le.getItem(`${e}Data`),salt:Le.getItem(`${e}Salt`),wrappedKey:Le.getItem(`${e}Key`)}),df=async e=>{const{counter:t,encryptedCredentials:n,salt:r,wrappedKey:o}=ff(e);if(n&&t&&o&&r)try{const i=await Ch({counter:t,encryptedCredentials:n,key:await cf({password:e,salt:r,wrappedKeyBuffer:o})});return JSON.parse(Eh(i))}catch{throw new ve(b.storageError)}else return Ph({password:e,storageKey:e})},Th=async e=>{const t={...await df(e.credentialsStorageKey),...e},{counter:n,salt:r,wrappedKey:o}=ff(e.credentialsStorageKey);if(!o||!n||!r)throw new ve(b.storageError);try{const i=await cf({password:t.credentialsStorageKey,salt:r,wrappedKeyBuffer:o}),l=await xh({content:kh(JSON.stringify(t)),counter:n,key:i});Le.setItem(`${t.credentialsStorageKey}Data`,l)}catch(i){throw new ve(b.storageError,{cause:i})}},Rh=e=>{Le.removeItem(`${e}Data`),Le.removeItem(`${e}Counter`),Le.removeItem(`${e}Salt`),Le.removeItem(`${e}Key`)},pf=async e=>{if(Bt){const t=await Bt.load(e);return t?JSON.parse(t):void 0}return await df(e)??void 0},Oh=async e=>{if(Bt){const t={...await pf(e.credentialsStorageKey),...e};await Bt.save(e.credentialsStorageKey,JSON.stringify(t));return}return Th(e)},jh=e=>{if(Bt){Bt.remove(e);return}Rh(e)},Lh=async e=>{if(e.status===0)return new uf(b.networkError);if(e.status>=400&&e.status<500)return new wu(b.unexpectedError);if(e.status>=500&&e.status<600)return new lr(b.retryableError);const{error:t}=await e.json();return new yh(b.tokenResponseError,{cause:t})},Su=async({body:e,credentials:t})=>{const{options:n,url:r}=hf({body:e,credentials:t,path:"oauth2/token"}),o=await mf({request:()=>globalThis.fetch(r,n),retry:i=>i.status>=500&&i.status<600});return o.ok?o:await Lh(o)},hf=({body:e,credentials:t,path:n})=>{const r=`${t.tidalAuthServiceBaseUri}${n}`;return{options:{body:new URLSearchParams(e).toString(),headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"},method:"POST"},url:r}},mf=async({delayInMs:e=500,request:t,retry:n})=>{let r=1;const o=()=>r>32;for(;!o();){await new Promise(l=>setTimeout(l,r*e));const i=await t();if(r*=2,!n(i)||o())return i}throw new wu(b.unexpectedError)},ur,zh=e=>{ur=e},Dh=e=>ur?ur.getRandomValues(e):globalThis.crypto.getRandomValues(e),Mh=(e,t)=>ur?ur.digest(e,t):globalThis.crypto.subtle.digest(e,t),Ah=async e=>{const t=await Mh("SHA-256",new TextEncoder().encode(e)),n=new Uint8Array(t),r=n.byteLength;let o="";for(let i=0;i<r;i+=1)o+=String.fromCharCode(n[i]);return globalThis.btoa(o)},vf=e=>e.replace(/\+/g,"-").replace(/\//g,"_").replace(/=/g,""),Uh=()=>vf(btoa(Dh(new Uint8Array(100)).toString())).slice(0,128),C={pending:!1,pendingPromises:[]},Fh="https://login.tidal.com/",$h="https://auth.tidal.com/v1/",Bh=["11003","6001","11001","11002","11101"],yf=[],Vh=e=>{yf.push(e)},gf=e=>{const t={detail:e};for(const n of yf)n(t)},Wh=e=>{gf({payload:e,type:lf.credentialsUpdated})},Hh=async({clientId:e,clientSecret:t,clientUniqueKey:n,credentialsStorageKey:r,crypto:o,scopes:i,storage:l,tidalAuthServiceBaseUri:u,tidalLoginServiceBaseUri:a})=>{o&&zh(o),l&&Ih(l);const f=await pf(r);await Eu({...f,clientId:e,...t&&{clientSecret:t},clientUniqueKey:n,credentialsStorageKey:r,previousClientSecret:f?.clientSecret,scopes:i??[],tidalAuthServiceBaseUri:u??f?.tidalAuthServiceBaseUri??$h,tidalLoginServiceBaseUri:a??f?.tidalLoginServiceBaseUri??Fh}),await gu.synchronize()},Kh=async({loginConfig:e,redirectUri:t})=>{if(!C.credentials)throw new ve(b.initError);const n=Uh(),r=await Ah(n);await Eu({...C.credentials,codeChallenge:n,redirectUri:t});const o={...e,client_id:C.credentials.clientId,...C.credentials.clientUniqueKey&&{client_unique_key:C.credentials.clientUniqueKey},code_challenge:vf(r),code_challenge_method:"S256",redirect_uri:t,response_type:"code",scope:C.credentials.scopes.join(" ")},i=new URLSearchParams(o).toString();return`${C.credentials.tidalLoginServiceBaseUri}authorize?${i}`},Qh=async e=>{if(!C.credentials?.credentialsStorageKey||!C.credentials?.codeChallenge||!C.credentials?.redirectUri)throw new ve(b.initError);const{clientId:t,clientSecret:n,clientUniqueKey:r,codeChallenge:o,redirectUri:i,scopes:l}=C.credentials,u=Object.fromEntries(new URLSearchParams(e));if(!u.code)throw new vh(b.authenticationError);const a=await Su({body:{client_id:t,...r&&{client_unique_key:r},...n&&{client_secret:n},code:u.code,code_verifier:o,grant_type:"authorization_code",redirect_uri:i,scope:l.join(" ")},credentials:C.credentials});if(a instanceof Error)throw a;await $o(await a.json())},Ma=()=>{gf({type:lf.credentialsUpdated}),C.credentials?.credentialsStorageKey&&jh(C.credentials.credentialsStorageKey),delete C.credentials,delete C.limitedDeviceResponse},Yh=async()=>{if(C.credentials?.refreshToken){const e=await Su({body:{...C.credentials.clientSecret&&{client_secret:C.credentials.clientSecret},client_id:C.credentials.clientId,grant_type:"refresh_token",refresh_token:C.credentials.refreshToken,scope:C.credentials.scopes.join(" ")},credentials:C.credentials});return e instanceof Error?e:$o(await e.json())}else return ku()},Xh=async()=>{if(C.credentials?.refreshToken){const{options:e,url:t}=hf({body:{...C.credentials.clientSecret&&{client_secret:C.credentials.clientSecret},client_id:C.credentials.clientId,grant_type:"update_client",refresh_token:C.credentials.refreshToken,scope:C.credentials.scopes.join(" ")},credentials:C.credentials,path:"oauth2/token"}),n=await mf({request:()=>globalThis.fetch(t,e),retry:r=>r.status>=400&&r.status<600});if(!n.ok)throw n.status===0?new uf(b.networkError):new lr(b.retryableError);return $o(await n.json())}else{if(C.credentials){const e=await ku();if(e&&"token"in e)return C.credentials.previousClientSecret=C.credentials.clientSecret,e;throw new lr(b.retryableError)}throw new ve(b.unexpectedError)}},ku=async()=>{if(C.credentials?.clientSecret){const e=await Su({body:{client_id:C.credentials.clientId,client_secret:C.credentials.clientSecret,grant_type:"client_credentials"},credentials:C.credentials});return e instanceof Error?e:$o(await e.json())}},Gh=async e=>(C.pending&&await new Promise(t=>{C.pendingPromises.push(t)}),qh(e).finally(()=>{const t=C.pendingPromises.shift();t&&t(),C.pending=!1})),qh=async e=>{if(C.credentials){C.pending=!0;const{accessToken:t}=C.credentials,n=60*1e3;if(t){const r=C.credentials.scopes.every(i=>t.grantedScopes?.includes(i));if(C.credentials.clientUniqueKey!==t.clientUniqueKey||t.userId&&r===!1)throw Ma(),new hh(b.illegalArgumentError);if(C.credentials.clientId!==t?.clientId||C.credentials.previousClientSecret&&C.credentials.previousClientSecret!==C.credentials.clientSecret){const i=await Xh();if(i&&"token"in i)return i;throw new lr(b.retryableError)}if(!(e&&Bh.includes(e))&&t.expires&&t.expires>gu.now()+n)return t;const o=await Yh();if(o&&"token"in o)return o;if(o instanceof wu)throw Ma(),o;if(o instanceof lr)throw o}else if(C.credentials.clientSecret){const r=await ku();if(r&&"token"in r)return r;if(r instanceof Error)throw r}else return{clientId:C.credentials.clientId,requestedScopes:C.credentials.scopes}}throw new ve(b.initError)},Eu=e=>(C.credentials=e,Wh({...C.credentials.accessToken,clientId:C.credentials.clientId,requestedScopes:C.credentials.scopes}),Oh(C.credentials)),$o=async e=>{if(!C.credentials)throw new ve(b.initError);const{clientId:t,clientUniqueKey:n,scopes:r}=C.credentials,o=e.scope?.length?e.scope?.split(" "):[],i={clientId:t,clientUniqueKey:n,expires:gu.now()+e.expires_in*1e3,grantedScopes:o,requestedScopes:r,token:e.access_token,...e.user_id&&{userId:e.user_id.toString()}};return await Eu({...C.credentials,accessToken:i,...e.refresh_token&&{refreshToken:e.refresh_token}}),i},ko={bus:Vh,getCredentials:Gh},Aa=Object.defineProperty,Jh=(e,t)=>{let n={};for(var r in e)Aa(n,r,{get:e[r],enumerable:!0});return Aa(n,Symbol.toStringTag,{value:"Module"}),n};function _u(e,t){Error.captureStackTrace&&Error.captureStackTrace(e,t)}var wf=class wl extends Error{errorCode;name="TidalError";constructor(t,n){super(t,n),Object.setPrototypeOf(this,wl.prototype),_u(this,wl),this.errorCode=t}},Sf=class Sl extends wf{name="IllegalArgumentError";constructor(t,n){super(t,n),Object.setPrototypeOf(this,Sl.prototype),_u(this,Sl)}},kl=!1,Zh=class El extends wf{name="OutageStartError";constructor(t,n){super(t,n),Object.setPrototypeOf(this,El.prototype),_u(this,El)}},bh={name:"OutageEndMessage"},mi=e=>{kl!==e&&(kl=e,kf(e?new Zh("1"):bh))},em=()=>kl,tm=Jh({bus:()=>nm,postMessage:()=>kf}),nm=e=>globalThis.addEventListener("eventProducerEventBus",e),kf=e=>{const t=new CustomEvent("eventProducerEventBus",{detail:e});globalThis.dispatchEvent(t)},ar,rm=e=>{ar=e},om=e=>{ar.credentialsProvider=e},im=e=>{ar.blockedConsentCategories={...ar.blockedConsentCategories,...e}},vr=()=>ar,lm=class{#e;#t=!1;#n;#r;constructor(e){this.#r=new URL(e),this.synchronize()}now(e=Date.now()){return!this.#n||!this.#e?(console.warn("TrueTime is not yet synchronized"),e):this.#n+(e-this.#e)}async synchronize(){if(!(this.#e&&Math.abs(Date.now()-this.#e)<36e5||this.#t)){this.#t=!0;try{let e=await fetch(this.#r);e.ok&&e.headers.has("date")&&(this.#n=new Date(e.headers.get("date")).getTime(),this.#e=Date.now())}catch(e){console.error(e)}this.#t=!1}}timestamp(e,t){let n;if(t){if(n=performance.getEntriesByName(e).find(r=>"detail"in r&&r.detail===t),!n)throw ReferenceError(`There is no performance entry named "${e}" with detail "${t}"`)}else n=performance.getEntriesByName(e).pop();return n?n.startTime:void 0}},xu=new lm("https://api.tidal.com/v1/ping"),Ef=`var Fr = Object.create, Ue = Object.defineProperty, Mr = Object.getOwnPropertyDescriptor, Ur = Object.getOwnPropertyNames, Yr = Object.getPrototypeOf, $r = Object.prototype.hasOwnProperty, Wr = (w, R) => () => (R || (w((R = { exports: {} }).exports, R), w = null), R.exports), zr = (w, R, I, A) => {
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
`,Ua=typeof self<"u"&&self.Blob&&new Blob(["URL.revokeObjectURL(import.meta.url);",Ef],{type:"text/javascript;charset=utf-8"});function um(e){let t;try{if(t=Ua&&(self.URL||self.webkitURL).createObjectURL(Ua),!t)throw"";const n=new Worker(t,{type:"module",name:e?.name});return n.addEventListener("error",()=>{(self.URL||self.webkitURL).revokeObjectURL(t)}),n}catch{return new Worker("data:text/javascript;charset=utf-8,"+encodeURIComponent(Ef),{type:"module",name:e?.name})}}if(!window.Worker)throw new Error("Web Workers are not supported in this browser");var _l=new um,sr=[];function cr(){return sr}function am(){const e=cr();return e.length>=10?e.slice(0,10):e}function _f(e){sr=e}var sm=e=>new Promise((t,n)=>{_l.addEventListener("message",r=>{const{data:o}=r;switch(o.action){case"initSuccess":if(o.events){const i=e?.feralEventTypes??[],l=i.length>0?o.events.filter(u=>!i.includes(u.name)):o.events;_f(cr().concat(l))}t();break;default:console.error("Unknown action:",r),n(new Error("Unknown action"))}}),_l.postMessage({action:"init"})});function xf(){_l.postMessage({action:"persist",events:cr()})}function cm(e){sr=sr.filter(t=>!e.includes(t.id)),xf()}function fm(e){sr.push(e),xf()}var Cf=({appInfo:{appName:e,appVersion:t},authorize:n=!0,consentCategory:r,credentials:o,platformData:{browserName:i,browserVersion:l,osName:u},sentTimestamp:a,suppliedHeaders:f})=>{const p=o?.token,m={"app-name":e,"app-version":t,"browser-name":i,"browser-version":l,"client-id":o?.clientId??"clientIDMissing!","consent-category":r,"os-name":u,"requested-sent-timestamp":a};return n&&p&&(m.authorization=p),f&&Object.entries(f).forEach(([h,y])=>{m[h]=y}),m};function Nf(e){const t=new URLSearchParams;return e.forEach((n,r)=>{const o=`SendMessageBatchRequestEntry.${r+1}`,i=`${o}.MessageAttribute`;t.append(`${o}.Id`,n.id),t.append(`${o}.MessageBody`,typeof n.payload=="string"?n.payload:JSON.stringify(n.payload)),t.append(`${i}.1.Name`,"Name"),t.append(`${i}.1.Value.StringValue`,n.name),t.append(`${i}.1.Value.DataType`,"String"),n.headers&&(t.append(`${i}.2.Name`,"Headers"),t.append(`${i}.2.Value.DataType`,"String"),t.append(`${i}.2.Value.StringValue`,JSON.stringify(n.headers)))}),t}var Eo=typeof globalThis?.crypto?.randomUUID=="function",dm=()=>globalThis.crypto?.randomUUID(),If=Eo?dm:()=>{if(!Eo)throw new Error("Uuid not initialized; run await init(); before using uuid.");return"UUID_NOT_INITIALIZED"};async function pm(){if(!Eo){const{nanoid:e}=await Df(async()=>{const{nanoid:t}=await import("./index.browser-B3btpU3i-BjLWcOsa.js");return{nanoid:t}},[]);If=()=>e()}Eo=!0}var Pf=()=>If(),et={consentFilteredEvents:{},storingFailedEvents:{},validationFailedEvents:{}},hm=()=>{et.consentFilteredEvents={},et.storingFailedEvents={},et.validationFailedEvents={}},Tf=({eventName:e,reason:t})=>{const n=et[t][e]??0;et[t][e]=n+1},mm=()=>Object.keys(et.consentFilteredEvents).length+Object.keys(et.storingFailedEvents).length+Object.keys(et.validationFailedEvents).length>0,vm=async()=>{if(mm()){const e=vr();if(!e.credentialsProvider)throw new Error("CredentialsProvider not set");const t=new Headers({"Content-Type":"application/x-www-form-urlencoded"}),n={headers:Cf({appInfo:e.appInfo,authorize:!1,consentCategory:"NECESSARY",credentials:await e.credentialsProvider?.getCredentials(),platformData:e.platform,sentTimestamp:xu.now()}),id:Pf(),name:"tep-tl-monitoring",payload:JSON.stringify(et)};globalThis.__tepTlDebug?.debug&&console.log("monitoringEvent sent:",n);const r=Nf([n]);fetch(e.tlPublicConsumerUri,{body:r,headers:t,method:"post"}).catch(console.error),hm()}return Promise.resolve()},Rf=async({config:e})=>{const t=am();if(t.length===0)return Promise.resolve();const n=new Headers({"Content-Type":"application/x-www-form-urlencoded"});if(!e.credentialsProvider)return Promise.reject(new Sf("CredentialsProvider not set"));const r=(await e.credentialsProvider?.getCredentials()).token;r&&n.set("Authorization",`Bearer ${r}`);const o=r?e.tlConsumerUri:e.tlPublicConsumerUri,i=Nf(t),l=new AbortController,u=setTimeout(()=>l.abort(),1e4);let a;try{a=await fetch(o,{body:i,headers:n,method:"post",signal:l.signal})}catch{clearTimeout(u),mi(!0);return}if(clearTimeout(u),a.ok){em()&&mi(!1);const f=await a.text(),p=new window.DOMParser().parseFromString(f,"text/xml"),m=[];if(p.querySelectorAll("SendMessageBatchResponse SendMessageBatchResult SendMessageBatchResultEntry Id").forEach(h=>{h.textContent&&m.push(h.textContent)}),p.querySelectorAll("SendMessageBatchResponse SendMessageBatchResult BatchResultErrorEntry").forEach(h=>{const y=h.querySelector("Id")?.textContent,w=h.querySelector("SenderFault")?.textContent==="true";if(y&&w){m.push(y);const S=t.find(O=>O.id===y);S&&Tf({eventName:S.name,reason:"validationFailedEvents"})}}),cm(m),cr().length>0)return Rf({config:e})}else{const f=await a.text();console.error("Error sending event batch:",f),mi(!0);const p=new window.DOMParser().parseFromString(f,"text/xml");if(p.querySelector("ErrorResponse Error Type")?.textContent==="Sender"&&p.querySelector("ErrorResponse Error Code")?.textContent==="AWS.SimpleQueueService.BatchEntryIdsNotDistinct"){const m=cr(),h={},y=new Set(m.map(S=>(h[S.id]=S,S.id))),w=Array.from(y).map(S=>h[S]);_f(w)}}return Promise.resolve()},ym=30*1e3,gm=60*1e3,vi,yi,wm=e=>{vi&&clearInterval(vi);const t=e?.eventBatchInterval??ym;vi=setInterval(()=>{Rf({config:vr()}).catch(console.error)},t),yi&&clearInterval(yi);const n=e?.monitoringInterval??gm;yi=setInterval(()=>{vm().catch(console.error)},n)},Sm=async e=>{rm(e),await Promise.all([xu.synchronize(),pm(),sm({feralEventTypes:e.feralEventTypes})]),wm(vr())},km=new TextEncoder,Em=e=>e.isWellFormed?e.isWellFormed():!0,_m=e=>km.encode(e).length<20480,xm=({payload:e,...t})=>{const n=JSON.stringify(t)+e;return _m(n)&&Em(n)},Cm=({event:e,id:t,ts:n})=>{const{consentCategory:r,...o}=e;return JSON.stringify({...o,ts:n,uuid:t})},Nm=async({config:e,credentialsProvider:t,event:n})=>{const r=Pf(),o=xu.now();return{headers:Cf({appInfo:e.appInfo,consentCategory:n.consentCategory,credentials:await t?.getCredentials(),platformData:e.platform,sentTimestamp:o,suppliedHeaders:n.headers}),id:r,name:n.name,payload:Cm({event:n,id:r,ts:o})}},Im=e=>{if(!e.payload)throw new Error(`Event is missing payload!: ${JSON.stringify(e)}`);if(!e.name)throw new Error(`Event is missing name! ${JSON.stringify(e)}`);if(!e.consentCategory)throw new Error(`Event is missing consentCategory! ${JSON.stringify(e)}`)},Pm=async({config:e,credentialsProvider:t,event:n})=>{if(e.strictMode&&Im(n),e.blockedConsentCategories[n.consentCategory])return Tf({eventName:n.name,reason:"consentFilteredEvents"}),Promise.resolve();const r=await Nm({config:e,credentialsProvider:t,event:n});return xm(r)?fm(r):Promise.resolve()},Tm=e=>{const t=vr(),{credentialsProvider:n}=t;if(n)Pm({config:t,credentialsProvider:n,event:e}).catch(console.error);else throw new Sf("CredentialsProvider not set")},Of=e=>Sm(e);const Rm=Object.freeze(Object.defineProperty({__proto__:null,bus:tm,getConfig:vr,init:Of,sendEvent:Tm,setConsentCategory:im,setCredentialsProvider:om},Symbol.toStringTag,{value:"Module"})),Om="kme2TJ7OPFP0qDSQ",_o=()=>localStorage.getItem("crate_client_id")||Om,jm=e=>localStorage.setItem("crate_client_id",e.trim()),Lm=["user.read","playlists.read","playlists.write","playback"],zm="https://openapi.tidal.com/v2",Dm="DK",Fa="Crate Inbox",Mm=()=>window.location.origin+"/crate/";async function jf(){await Hh({clientId:_o(),credentialsStorageKey:"crate-tidal",scopes:Lm})}async function Am(){return window.location.search.includes("code=")?(await Qh(window.location.search),window.history.replaceState(null,"",window.location.pathname),!0):!1}async function Um(){const e=await Kh({redirectUri:Mm()});window.location.href=e}async function Fm(){try{const e=await ko.getCredentials();return e&&e.token&&e.userId?e:null}catch{return null}}async function yr(e,{method:t="GET",body:n,token:r}={}){const o=e.includes("?")?"&":"?",i=await fetch(`${zm}${e}${o}countryCode=${Dm}`,{method:t,headers:{Authorization:`Bearer ${r}`,"Content-Type":"application/vnd.api+json",Accept:"application/vnd.api+json"},body:n?JSON.stringify(n):void 0});if(!i.ok){const u=await i.text(),a=new Error(`${t} ${e}: ${i.status} ${u}`);throw a.status=i.status,a}if(i.status===204||i.status===202)return null;const l=await i.text();return l?JSON.parse(l):null}function $m(e){if(typeof e=="number")return e;const t=/PT(?:(\d+)H)?(?:(\d+)M)?(?:([\d.]+)S)?/.exec(e||"");return t?+(t[1]||0)*3600+ +(t[2]||0)*60+Math.round(+(t[3]||0)):0}async function Bm(e){const t=[];let n=`/playlists?filter[r.owners.id]=${e.userId}`;for(;n;){const r=await yr(n,{token:e.token});for(const o of r.data||[])t.push({id:o.id,name:o.attributes?.name||"(unnamed)",numberOfItems:o.attributes?.numberOfItems??null});n=r.links?.next||null}return t}async function Lf(e,t){const n=await yr("/playlists",{method:"POST",token:e.token,body:{data:{type:"playlists",attributes:{name:t,description:"Made with Crate",accessType:"UNLISTED"}}}});return{id:n.data.id,name:n.data.attributes?.name||t,numberOfItems:0}}async function Ar(e,t){const n=[],r=new Map;let o=`/playlists/${t}/relationships/items?include=items,items.artists,items.albums`;for(;o;){const i=await yr(o,{token:e.token});for(const l of i.included||[])r.set(`${l.type}/${l.id}`,l);for(const l of i.data||[]){if(l.type!=="tracks")continue;const u=r.get(`tracks/${l.id}`),a=u?.attributes||{},f=(u?.relationships?.artists?.data||[]).map(m=>r.get(`artists/${m.id}`)?.attributes?.name).filter(Boolean).join(", "),p=(u?.relationships?.albums?.data||[]).map(m=>r.get(`albums/${m.id}`)?.attributes?.title).filter(Boolean)[0];n.push({trackId:l.id,itemId:l.meta?.itemId,title:a.title||`Track ${l.id}`,artist:f||"",album:p||"",duration:$m(a.duration)})}o=i.links?.next||null}return n}async function $a(e,t,n){await yr(`/playlists/${t}/relationships/items`,{method:"POST",token:e.token,body:{data:[{id:n,type:"tracks"}]}})}async function Ba(e,t,n){await yr(`/playlists/${t}/relationships/items`,{method:"DELETE",token:e.token,body:{data:[{id:n.trackId,type:"tracks",meta:{itemId:n.itemId}}]}})}async function Vm(e){const t=localStorage.getItem("crate_inbox"),n=await Bm(e),o=t&&n.find(i=>i.id===t)||n.find(i=>i.name===Fa)||await Lf(e,Fa);return localStorage.setItem("crate_inbox",o.id),{inbox:o,playlists:n.filter(i=>i.id!==o.id)}}let gi=null;function Wm(){return gi||(gi=(async()=>{await Of({appInfo:{appName:"Crate",appVersion:"0.1.0"},blockedConsentCategories:{NECESSARY:!1,PERFORMANCE:!1,TARGETING:!0},credentialsProvider:ko,platform:{browserName:navigator.userAgent.includes("Firefox")?"Firefox":"Chromium",browserVersion:"unknown",osName:navigator.platform||"unknown"},tlConsumerUri:"https://ec.tidal.com/api/event-batch",tlPublicConsumerUri:"https://ec.tidal.com/api/public/event-batch"}),$f(ko),Bf(Rm)})()),gi}function Va(e){if(!e||e<90)return 0;const t=+(localStorage.getItem("crate_start_bias")||0);return Math.max(0,Math.min(Math.round(e*.25),45)+t)}let zf=!1;const Hm=()=>zf;let fe=null;function Cu(){fe&&(fe.pause(),fe.removeAttribute("src"),fe=null)}async function Km(e){const t=await ko.getCredentials(),n=await fetch(`https://api.tidal.com/v1/tracks/${e}/playbackinfo?audioquality=LOW&playbackmode=STREAM&assetpresentation=PREVIEW`,{headers:{Authorization:`Bearer ${t.token}`}});if(!n.ok)throw new Error(`preview playbackinfo: ${n.status}`);const r=await n.json(),i=JSON.parse(atob(r.manifest)).urls?.[0];if(!i)throw new Error(`no url in ${r.manifestMimeType} manifest`);Cu(),fe=new Audio(i),await fe.play()}async function Qm(e,t){await Wm();try{return await Mf({productId:String(e),productType:"track",sourceId:"crate",sourceType:"OTHER"},t),await Ka(),Cu(),"full"}catch(n){console.error("[crate] full-track load failed:",n);try{return await Km(e),"preview"}catch(r){throw console.error("[crate] preview fallback failed too:",r),zf=!0,n}}}const Ym={play:()=>fe?fe.play():Ka(),pause:()=>fe?fe.pause():Nu(),seek:e=>{fe?fe.currentTime=Math.max(0,e):Ff(Math.max(0,e))},position:()=>fe?fe.currentTime:Uf(),state:()=>fe?fe.paused?"NOT_PLAYING":"PLAYING":Af(),stop:()=>{Cu(),Nu()}};function Xm({mode:e,onDone:t,err:n}){const[r,o]=D.useState(_o()),[i,l]=D.useState(!1),u=async()=>{l(!0);try{await jf(),await Um()}catch(a){alert(a.message||a),l(!1)}};return k.jsxs("div",{className:"app center-col",children:[k.jsx("h1",{className:"logo",children:"Crate"}),k.jsx("p",{className:"muted",children:"Tinder for your DJ pool."}),e==="setup"||!_o()?k.jsxs(k.Fragment,{children:[k.jsxs("p",{className:"muted small",children:["One-time setup: create an app at"," ",k.jsx("a",{href:"https://developer.tidal.com",target:"_blank",rel:"noreferrer",children:"developer.tidal.com"})," ","and paste its Client ID. Register this page's URL as a redirect URI:",k.jsx("br",{}),k.jsx("code",{children:window.location.origin+"/crate/"})]}),k.jsx("input",{type:"text",placeholder:"Tidal Client ID",value:r,onChange:a=>o(a.target.value)}),k.jsx("button",{disabled:!r.trim(),onClick:()=>{jm(r),t()},children:"Save"})]}):k.jsxs(k.Fragment,{children:[k.jsx("button",{onClick:u,disabled:i,children:i?"Connecting…":"Connect Tidal"}),n&&k.jsx("div",{className:"error",children:n})]})]})}function Gm({playlists:e,targetId:t,onPick:n,onCreate:r,inboxCount:o}){const[i,l]=D.useState(!1),[u,a]=D.useState(""),f=async()=>{u.trim()&&(await r(u.trim()),a(""),l(!1))};return k.jsxs("div",{className:"picker",children:[k.jsxs("div",{className:"row",children:[k.jsxs("select",{value:t,onChange:p=>n(p.target.value),children:[k.jsx("option",{value:"",children:"→ target playlist…"}),e.map(p=>k.jsxs("option",{value:p.id,children:[p.name,p.numberOfItems!=null?` (${p.numberOfItems})`:""]},p.id))]}),k.jsx("button",{className:"secondary compact",onClick:()=>l(p=>!p),children:"＋"}),k.jsx("span",{className:"muted count",children:o})]}),i&&k.jsxs("div",{className:"row",children:[k.jsx("input",{type:"text",placeholder:"New playlist name (the occasion)",value:u,onChange:p=>a(p.target.value),onKeyDown:p=>p.key==="Enter"&&f(),autoFocus:!0}),k.jsx("button",{className:"compact",onClick:f,children:"Create"})]})]})}const Wa=90;function wi({track:e,canAdd:t}){return k.jsxs(k.Fragment,{children:[k.jsx("div",{className:"track-title",children:e.title}),k.jsx("div",{className:"track-artist",children:e.artist}),k.jsxs("div",{className:"muted",children:[e.album,e.duration?` · ${Math.floor(e.duration/60)}:${String(e.duration%60).padStart(2,"0")}`:""]}),k.jsxs("div",{className:"swipe-hints muted small",children:["← dismiss · add →",t?"":" (pick a playlist)"]})]})}function qm({queue:e,onSwipe:t,session:n,onRefresh:r,canAdd:o}){const[i,l]=D.useState(null),[u,a]=D.useState(null),f=D.useRef(null),p=e[0],m=e[1];D.useEffect(()=>l(null),[p?.itemId]);const h=d=>{!p||u||d==="right"&&!o||(a({item:p,dir:d}),l(null),t(d),setTimeout(()=>a(null),240))};if(D.useEffect(()=>{const d=v=>{v.target.tagName==="INPUT"||v.target.tagName==="SELECT"||(v.key==="ArrowLeft"?h("left"):v.key==="ArrowRight"&&h("right"))};return window.addEventListener("keydown",d),()=>window.removeEventListener("keydown",d)}),!p&&!u)return k.jsxs("div",{className:"card deck-empty",children:[k.jsx("p",{className:"big-emoji",children:"📭"}),k.jsx("p",{children:"Inbox empty."}),k.jsx("p",{className:"muted",children:"Add tracks to “Crate Inbox” from the Tidal app, or ask Claude to trawl some charts."}),k.jsxs("p",{className:"muted small",children:["This session: ",n.added," added · ",n.dismissed," dismissed"]}),k.jsx("button",{className:"secondary",onClick:r,children:"Refresh"})]});const y=d=>{u||(f.current={x:d.clientX,y:d.clientY},d.currentTarget.setPointerCapture(d.pointerId))},w=d=>{f.current&&l({dx:d.clientX-f.current.x,dy:d.clientY-f.current.y})},S=()=>{if(!f.current)return;const d=i?.dx||0;f.current=null,Math.abs(d)>Wa?h(d>0?"right":"left"):l(null)},O=i?.dx||0,c={transform:O?`translateX(${O}px) rotate(${O/20}deg)`:"",transition:i?"none":void 0},s=Math.abs(O)>Wa/2?O>0?"add":"dismiss":null;return k.jsxs("div",{className:"deck",children:[k.jsxs("div",{className:"deck-stack",children:[m&&k.jsx("div",{className:"card track-card behind",children:k.jsx(wi,{track:m,canAdd:o})},m.itemId),p&&k.jsxs("div",{className:`card track-card top ${s||""}`,style:c,onPointerDown:y,onPointerMove:w,onPointerUp:S,onPointerCancel:S,children:[s==="add"&&k.jsx("div",{className:"stamp stamp-add",children:"ADD"}),s==="dismiss"&&k.jsx("div",{className:"stamp stamp-dismiss",children:"NOPE"}),k.jsx(wi,{track:p,canAdd:o})]},p.itemId),u&&k.jsx("div",{className:`card track-card fling-${u.dir}`,children:k.jsx(wi,{track:u.item,canAdd:o})},`leaving-${u.item.itemId}`)]}),k.jsxs("div",{className:"deck-buttons row",children:[k.jsx("button",{className:"secondary half",disabled:!p,onClick:()=>h("left"),children:"✕ Dismiss"}),k.jsx("button",{className:"half",disabled:!p||!o,onClick:()=>h("right"),children:"♥ Add"})]})]})}const Ha=e=>`${Math.floor(e/60)}:${String(Math.floor(e%60)).padStart(2,"0")}`;function Jm({track:e,next:t,controls:n}){const[r,o]=D.useState(0),[i,l]=D.useState(!1),[u,a]=D.useState(!1),[f,p]=D.useState(""),m=D.useRef(null),h=u?30:e.duration||0;D.useEffect(()=>{if(Hm()){p("gated");return}let c=!1;return p(""),o(Va(h)),(async()=>{try{const s=await Qm(e.trackId,Va(h));if(c)return;a(s==="preview"),l(!0)}catch(s){if(c)return;l(!1),a(!1),p(String(s?.message||s))}})(),()=>{c=!0,n.stop()}},[e.trackId]),D.useEffect(()=>{const c=setInterval(()=>{o(n.position()||0),l(n.state()==="PLAYING")},400);return()=>clearInterval(c)},[n]);const y=c=>{n.seek(Math.min(Math.max(0,c),Math.max(0,h-1))),o(c)},w=c=>y(Math.round(h*c)),S=c=>{const s=m.current.getBoundingClientRect();w(Math.min(1,Math.max(0,(c.clientX-s.left)/s.width)))},O=()=>{n.state()==="PLAYING"?n.pause():Promise.resolve(n.play()).catch(c=>p(String(c?.message||c)))};if(D.useEffect(()=>{const c=s=>{s.target.tagName==="INPUT"||s.target.tagName==="SELECT"||(s.key===" "?(s.preventDefault(),O()):["1","2","3","4"].includes(s.key)?w({1:0,2:.25,3:.5,4:.75}[s.key]):s.key===","?y(r-10):s.key==="."&&y(r+10))};return window.addEventListener("keydown",c),()=>window.removeEventListener("keydown",c)}),f){const c=[e,t].filter(Boolean);return k.jsxs("div",{className:"player card",children:[c.map(s=>k.jsx("iframe",{className:"embed",style:s===e?void 0:{display:"none"},title:`Tidal player ${s.title}`,src:`https://embed.tidal.com/tracks/${s.trackId}`,allow:"encrypted-media; autoplay"},s.itemId)),k.jsxs("div",{className:"row",children:[k.jsx("a",{className:"small",href:`tidal://track/${e.trackId}`,children:"▶ Open in Tidal app"}),k.jsx("span",{className:"muted small right",children:"awaiting Tidal production access"})]})]})}return k.jsxs("div",{className:"player card",children:[u&&k.jsx("div",{className:"muted small",children:"30s preview mode"}),k.jsx("div",{className:"progress-bar tall",ref:m,onPointerDown:S,children:k.jsx("div",{className:"progress-bar-fill",style:{width:h?`${r/h*100}%`:0}})}),k.jsxs("div",{className:"row player-times",children:[k.jsx("span",{className:"stopwatch",children:Ha(r)}),k.jsx("span",{className:"stopwatch right",children:Ha(h)})]}),k.jsxs("div",{className:"row player-controls",children:[[0,.25,.5,.75].map(c=>k.jsxs("button",{className:"secondary compact",onClick:()=>w(c),children:[c*100,"%"]},c)),k.jsx("button",{className:"secondary compact",onClick:()=>y(r-10),children:"-10s"}),k.jsx("button",{className:"compact",onClick:O,children:i?"⏸":"▶"}),k.jsx("button",{className:"secondary compact",onClick:()=>y(r+10),children:"+10s"})]})]})}function Zm(){const[e,t]=D.useState("boot"),[n,r]=D.useState(null),[o,i]=D.useState(null),[l,u]=D.useState([]),[a,f]=D.useState(localStorage.getItem("crate_playlist")||""),[p,m]=D.useState([]),[h,y]=D.useState({added:0,dismissed:0}),[w,S]=D.useState([]),[O,c]=D.useState(!1),[s,d]=D.useState(""),v=D.useRef(null);v.current=n;const E=D.useCallback(async()=>{d(""),_o();try{await jf(),await Am();const T=await Fm();if(!T)return t("login");r(T),t("loading");const{inbox:A,playlists:ae}=await Vm(T);i(A),u(ae);const H=await Ar(T,A.id);m(H),t("ready")}catch(T){d(String(T.message||T)),t("login")}},[]);D.useEffect(()=>{E()},[E]);const I=D.useCallback(async()=>{if(!(!v.current||!o)){t("loading");try{m(await Ar(v.current,o.id))}catch(T){d(String(T.message||T))}t("ready")}},[o]),N=T=>{f(T),localStorage.setItem("crate_playlist",T)},P=async T=>{const A=await Lf(n,T);u(ae=>[...ae,A]),N(A.id)},V=D.useCallback(T=>{const A=p[0];if(!A)return;if(T==="right"&&!a){d("Pick a target playlist first");return}d(""),m(H=>H.slice(1)),y(H=>T==="right"?{...H,added:H.added+1}:{...H,dismissed:H.dismissed+1}),S(H=>[{item:A,dir:T,targetId:a},...H].slice(0,10));const ae=v.current;(async()=>{try{if(T==="right")try{await $a(ae,a,A.trackId)}catch(H){if(H.status!==409&&H.status!==400)throw H}await Ba(ae,o.id,A)}catch(H){d(`${A.title}: ${String(H.message||H)}`),m(K=>[A,...K]),y(K=>T==="right"?{...K,added:Math.max(0,K.added-1)}:{...K,dismissed:Math.max(0,K.dismissed-1)}),S(K=>K.filter(lt=>lt.item.itemId!==A.itemId))}})()},[p,a,o]),j=D.useCallback(async()=>{const T=w[0];if(!T||O)return;c(!0),d("");const A=v.current;try{if(await $a(A,o.id,T.item.trackId),T.dir==="right")try{const lt=(await Ar(A,T.targetId)).find(kn=>kn.trackId===T.item.trackId);lt&&await Ba(A,T.targetId,lt)}catch{}const H=(await Ar(A,o.id)).find(K=>K.trackId===T.item.trackId);m(K=>H?[H,...K]:K),y(K=>T.dir==="right"?{...K,added:Math.max(0,K.added-1)}:{...K,dismissed:Math.max(0,K.dismissed-1)}),S(K=>K.slice(1))}catch(ae){d(String(ae.message||ae))}c(!1)},[w,O,o]);return D.useEffect(()=>{const T=A=>{A.target.tagName==="INPUT"||A.target.tagName==="SELECT"||A.key==="z"&&(A.metaKey||A.ctrlKey)&&j()};return window.addEventListener("keydown",T),()=>window.removeEventListener("keydown",T)},[V,j]),e==="boot"?k.jsx("div",{className:"app center muted",children:"…"}):e==="setup"||e==="login"?k.jsx(Xm,{mode:e,onDone:E,err:s}):k.jsxs("div",{className:"app",children:[k.jsx(Gm,{playlists:l,targetId:a,onPick:N,onCreate:P,inboxCount:p.length}),s&&k.jsx("div",{className:"error",children:s}),e==="loading"?k.jsx("div",{className:"center muted",children:"Loading inbox…"}):k.jsxs(k.Fragment,{children:[k.jsx(qm,{queue:p,onSwipe:V,session:h,onRefresh:I,canAdd:!!a}),p[0]&&k.jsx(Jm,{track:p[0],next:p[1],controls:Ym}),w.length>0&&k.jsxs("button",{className:"secondary undo",onClick:j,disabled:O,children:["↩︎ Undo ",w[0].dir==="right"?"add":"dismiss"]})]})]})}of(document.getElementById("root")).render(k.jsx(Zm,{}));
