import{_ as Lf,d as zf,V as Ha,e as xu,F as Df,E as Mf,z as Af,H as Uf,Q as Ff}from"./index-AioNJujd-BVVAomYy.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();var Ka={exports:{}},Co={},Qa={exports:{}},z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fr=Symbol.for("react.element"),$f=Symbol.for("react.portal"),Bf=Symbol.for("react.fragment"),Vf=Symbol.for("react.strict_mode"),Wf=Symbol.for("react.profiler"),Hf=Symbol.for("react.provider"),Kf=Symbol.for("react.context"),Qf=Symbol.for("react.forward_ref"),Yf=Symbol.for("react.suspense"),Xf=Symbol.for("react.memo"),Gf=Symbol.for("react.lazy"),Nu=Symbol.iterator;function qf(e){return e===null||typeof e!="object"?null:(e=Nu&&e[Nu]||e["@@iterator"],typeof e=="function"?e:null)}var Ya={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Xa=Object.assign,Ga={};function gn(e,t,n){this.props=e,this.context=t,this.refs=Ga,this.updater=n||Ya}gn.prototype.isReactComponent={};gn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};gn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function qa(){}qa.prototype=gn.prototype;function _l(e,t,n){this.props=e,this.context=t,this.refs=Ga,this.updater=n||Ya}var Cl=_l.prototype=new qa;Cl.constructor=_l;Xa(Cl,gn.prototype);Cl.isPureReactComponent=!0;var Iu=Array.isArray,Ja=Object.prototype.hasOwnProperty,xl={current:null},Za={key:!0,ref:!0,__self:!0,__source:!0};function ba(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)Ja.call(t,r)&&!Za.hasOwnProperty(r)&&(o[r]=t[r]);var u=arguments.length-2;if(u===1)o.children=n;else if(1<u){for(var a=Array(u),c=0;c<u;c++)a[c]=arguments[c+2];o.children=a}if(e&&e.defaultProps)for(r in u=e.defaultProps,u)o[r]===void 0&&(o[r]=u[r]);return{$$typeof:fr,type:e,key:i,ref:l,props:o,_owner:xl.current}}function Jf(e,t){return{$$typeof:fr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Nl(e){return typeof e=="object"&&e!==null&&e.$$typeof===fr}function Zf(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Pu=/\/+/g;function Vo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Zf(""+e.key):t.toString(36)}function Ur(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case fr:case $f:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+Vo(l,0):r,Iu(o)?(n="",e!=null&&(n=e.replace(Pu,"$&/")+"/"),Ur(o,t,n,"",function(c){return c})):o!=null&&(Nl(o)&&(o=Jf(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(Pu,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",Iu(e))for(var u=0;u<e.length;u++){i=e[u];var a=r+Vo(i,u);l+=Ur(i,t,n,a,o)}else if(a=qf(e),typeof a=="function")for(e=a.call(e),u=0;!(i=e.next()).done;)i=i.value,a=r+Vo(i,u++),l+=Ur(i,t,n,a,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Sr(e,t,n){if(e==null)return e;var r=[],o=0;return Ur(e,r,"","",function(i){return t.call(n,i,o++)}),r}function bf(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ve={current:null},Fr={transition:null},ed={ReactCurrentDispatcher:ve,ReactCurrentBatchConfig:Fr,ReactCurrentOwner:xl};function es(){throw Error("act(...) is not supported in production builds of React.")}z.Children={map:Sr,forEach:function(e,t,n){Sr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Sr(e,function(){t++}),t},toArray:function(e){return Sr(e,function(t){return t})||[]},only:function(e){if(!Nl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};z.Component=gn;z.Fragment=Bf;z.Profiler=Wf;z.PureComponent=_l;z.StrictMode=Vf;z.Suspense=Yf;z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ed;z.act=es;z.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Xa({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=xl.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(a in t)Ja.call(t,a)&&!Za.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&u!==void 0?u[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){u=Array(a);for(var c=0;c<a;c++)u[c]=arguments[c+2];r.children=u}return{$$typeof:fr,type:e.type,key:o,ref:i,props:r,_owner:l}};z.createContext=function(e){return e={$$typeof:Kf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Hf,_context:e},e.Consumer=e};z.createElement=ba;z.createFactory=function(e){var t=ba.bind(null,e);return t.type=e,t};z.createRef=function(){return{current:null}};z.forwardRef=function(e){return{$$typeof:Qf,render:e}};z.isValidElement=Nl;z.lazy=function(e){return{$$typeof:Gf,_payload:{_status:-1,_result:e},_init:bf}};z.memo=function(e,t){return{$$typeof:Xf,type:e,compare:t===void 0?null:t}};z.startTransition=function(e){var t=Fr.transition;Fr.transition={};try{e()}finally{Fr.transition=t}};z.unstable_act=es;z.useCallback=function(e,t){return ve.current.useCallback(e,t)};z.useContext=function(e){return ve.current.useContext(e)};z.useDebugValue=function(){};z.useDeferredValue=function(e){return ve.current.useDeferredValue(e)};z.useEffect=function(e,t){return ve.current.useEffect(e,t)};z.useId=function(){return ve.current.useId()};z.useImperativeHandle=function(e,t,n){return ve.current.useImperativeHandle(e,t,n)};z.useInsertionEffect=function(e,t){return ve.current.useInsertionEffect(e,t)};z.useLayoutEffect=function(e,t){return ve.current.useLayoutEffect(e,t)};z.useMemo=function(e,t){return ve.current.useMemo(e,t)};z.useReducer=function(e,t,n){return ve.current.useReducer(e,t,n)};z.useRef=function(e){return ve.current.useRef(e)};z.useState=function(e){return ve.current.useState(e)};z.useSyncExternalStore=function(e,t,n){return ve.current.useSyncExternalStore(e,t,n)};z.useTransition=function(){return ve.current.useTransition()};z.version="18.3.1";Qa.exports=z;var D=Qa.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var td=D,nd=Symbol.for("react.element"),rd=Symbol.for("react.fragment"),od=Object.prototype.hasOwnProperty,id=td.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ld={key:!0,ref:!0,__self:!0,__source:!0};function ts(e,t,n){var r,o={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)od.call(t,r)&&!ld.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:nd,type:e,key:i,ref:l,props:o,_owner:id.current}}Co.Fragment=rd;Co.jsx=ts;Co.jsxs=ts;Ka.exports=Co;var k=Ka.exports,ns={exports:{}},Pe={},rs={exports:{}},os={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(C,O){var L=C.length;C.push(O);e:for(;0<L;){var G=L-1>>>1,te=C[G];if(0<o(te,O))C[G]=O,C[L]=te,L=G;else break e}}function n(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var O=C[0],L=C.pop();if(L!==O){C[0]=L;e:for(var G=0,te=C.length,gr=te>>>1;G<gr;){var Nt=2*(G+1)-1,Bo=C[Nt],It=Nt+1,wr=C[It];if(0>o(Bo,L))It<te&&0>o(wr,Bo)?(C[G]=wr,C[It]=L,G=It):(C[G]=Bo,C[Nt]=L,G=Nt);else if(It<te&&0>o(wr,L))C[G]=wr,C[It]=L,G=It;else break e}}return O}function o(C,O){var L=C.sortIndex-O.sortIndex;return L!==0?L:C.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,u=l.now();e.unstable_now=function(){return l.now()-u}}var a=[],c=[],p=1,h=null,m=3,g=!1,S=!1,w=!1,x=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,s=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function d(C){for(var O=n(c);O!==null;){if(O.callback===null)r(c);else if(O.startTime<=C)r(c),O.sortIndex=O.expirationTime,t(a,O);else break;O=n(c)}}function v(C){if(w=!1,d(C),!S)if(n(a)!==null)S=!0,Ht(E);else{var O=n(c);O!==null&&kn(v,O.startTime-C)}}function E(C,O){S=!1,w&&(w=!1,f(T),T=-1),g=!0;var L=m;try{for(d(O),h=n(a);h!==null&&(!(h.expirationTime>O)||C&&!R());){var G=h.callback;if(typeof G=="function"){h.callback=null,m=h.priorityLevel;var te=G(h.expirationTime<=O);O=e.unstable_now(),typeof te=="function"?h.callback=te:h===n(a)&&r(a),d(O)}else r(a);h=n(a)}if(h!==null)var gr=!0;else{var Nt=n(c);Nt!==null&&kn(v,Nt.startTime-O),gr=!1}return gr}finally{h=null,m=L,g=!1}}var P=!1,I=null,T=-1,F=5,j=-1;function R(){return!(e.unstable_now()-j<F)}function A(){if(I!==null){var C=e.unstable_now();j=C;var O=!0;try{O=I(!0,C)}finally{O?ue():(P=!1,I=null)}}else P=!1}var ue;if(typeof s=="function")ue=function(){s(A)};else if(typeof MessageChannel<"u"){var H=new MessageChannel,ge=H.port2;H.port1.onmessage=A,ue=function(){ge.postMessage(null)}}else ue=function(){x(A,0)};function Ht(C){I=C,P||(P=!0,ue())}function kn(C,O){T=x(function(){C(e.unstable_now())},O)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(C){C.callback=null},e.unstable_continueExecution=function(){S||g||(S=!0,Ht(E))},e.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<C?Math.floor(1e3/C):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(C){switch(m){case 1:case 2:case 3:var O=3;break;default:O=m}var L=m;m=O;try{return C()}finally{m=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(C,O){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var L=m;m=C;try{return O()}finally{m=L}},e.unstable_scheduleCallback=function(C,O,L){var G=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?G+L:G):L=G,C){case 1:var te=-1;break;case 2:te=250;break;case 5:te=1073741823;break;case 4:te=1e4;break;default:te=5e3}return te=L+te,C={id:p++,callback:O,priorityLevel:C,startTime:L,expirationTime:te,sortIndex:-1},L>G?(C.sortIndex=L,t(c,C),n(a)===null&&C===n(c)&&(w?(f(T),T=-1):w=!0,kn(v,L-G))):(C.sortIndex=te,t(a,C),S||g||(S=!0,Ht(E))),C},e.unstable_shouldYield=R,e.unstable_wrapCallback=function(C){var O=m;return function(){var L=m;m=O;try{return C.apply(this,arguments)}finally{m=L}}}})(os);rs.exports=os;var ud=rs.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ad=D,Ie=ud;function y(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var is=new Set,Wn={};function Bt(e,t){fn(e,t),fn(e+"Capture",t)}function fn(e,t){for(Wn[e]=t,e=0;e<t.length;e++)is.add(t[e])}var tt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),wi=Object.prototype.hasOwnProperty,sd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Tu={},Ru={};function cd(e){return wi.call(Ru,e)?!0:wi.call(Tu,e)?!1:sd.test(e)?Ru[e]=!0:(Tu[e]=!0,!1)}function fd(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function dd(e,t,n,r){if(t===null||typeof t>"u"||fd(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ye(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var le={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){le[e]=new ye(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];le[t]=new ye(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){le[e]=new ye(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){le[e]=new ye(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){le[e]=new ye(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){le[e]=new ye(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){le[e]=new ye(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){le[e]=new ye(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){le[e]=new ye(e,5,!1,e.toLowerCase(),null,!1,!1)});var Il=/[\-:]([a-z])/g;function Pl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Il,Pl);le[t]=new ye(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Il,Pl);le[t]=new ye(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Il,Pl);le[t]=new ye(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){le[e]=new ye(e,1,!1,e.toLowerCase(),null,!1,!1)});le.xlinkHref=new ye("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){le[e]=new ye(e,1,!1,e.toLowerCase(),null,!0,!0)});function Tl(e,t,n,r){var o=le.hasOwnProperty(t)?le[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(dd(t,n,o,r)&&(n=null),r||o===null?cd(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var it=ad.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,kr=Symbol.for("react.element"),Qt=Symbol.for("react.portal"),Yt=Symbol.for("react.fragment"),Rl=Symbol.for("react.strict_mode"),Si=Symbol.for("react.profiler"),ls=Symbol.for("react.provider"),us=Symbol.for("react.context"),Ol=Symbol.for("react.forward_ref"),ki=Symbol.for("react.suspense"),Ei=Symbol.for("react.suspense_list"),jl=Symbol.for("react.memo"),ut=Symbol.for("react.lazy"),as=Symbol.for("react.offscreen"),Ou=Symbol.iterator;function En(e){return e===null||typeof e!="object"?null:(e=Ou&&e[Ou]||e["@@iterator"],typeof e=="function"?e:null)}var Y=Object.assign,Wo;function Rn(e){if(Wo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Wo=t&&t[1]||""}return`
`+Wo+e}var Ho=!1;function Ko(e,t){if(!e||Ho)return"";Ho=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,u=i.length-1;1<=l&&0<=u&&o[l]!==i[u];)u--;for(;1<=l&&0<=u;l--,u--)if(o[l]!==i[u]){if(l!==1||u!==1)do if(l--,u--,0>u||o[l]!==i[u]){var a=`
`+o[l].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=l&&0<=u);break}}}finally{Ho=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Rn(e):""}function pd(e){switch(e.tag){case 5:return Rn(e.type);case 16:return Rn("Lazy");case 13:return Rn("Suspense");case 19:return Rn("SuspenseList");case 0:case 2:case 15:return e=Ko(e.type,!1),e;case 11:return e=Ko(e.type.render,!1),e;case 1:return e=Ko(e.type,!0),e;default:return""}}function _i(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Yt:return"Fragment";case Qt:return"Portal";case Si:return"Profiler";case Rl:return"StrictMode";case ki:return"Suspense";case Ei:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case us:return(e.displayName||"Context")+".Consumer";case ls:return(e._context.displayName||"Context")+".Provider";case Ol:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case jl:return t=e.displayName||null,t!==null?t:_i(e.type)||"Memo";case ut:t=e._payload,e=e._init;try{return _i(e(t))}catch{}}return null}function hd(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return _i(t);case 8:return t===Rl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function kt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ss(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function md(e){var t=ss(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Er(e){e._valueTracker||(e._valueTracker=md(e))}function cs(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ss(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function qr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ci(e,t){var n=t.checked;return Y({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ju(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=kt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function fs(e,t){t=t.checked,t!=null&&Tl(e,"checked",t,!1)}function xi(e,t){fs(e,t);var n=kt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ni(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ni(e,t.type,kt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Lu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ni(e,t,n){(t!=="number"||qr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var On=Array.isArray;function on(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+kt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Ii(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(y(91));return Y({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function zu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(y(92));if(On(n)){if(1<n.length)throw Error(y(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:kt(n)}}function ds(e,t){var n=kt(t.value),r=kt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Du(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ps(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Pi(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ps(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var _r,hs=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(_r=_r||document.createElement("div"),_r.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=_r.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Hn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var zn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},vd=["Webkit","ms","Moz","O"];Object.keys(zn).forEach(function(e){vd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),zn[t]=zn[e]})});function ms(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||zn.hasOwnProperty(e)&&zn[e]?(""+t).trim():t+"px"}function vs(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=ms(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var yd=Y({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ti(e,t){if(t){if(yd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(y(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(y(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(y(61))}if(t.style!=null&&typeof t.style!="object")throw Error(y(62))}}function Ri(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Oi=null;function Ll(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ji=null,ln=null,un=null;function Mu(e){if(e=hr(e)){if(typeof ji!="function")throw Error(y(280));var t=e.stateNode;t&&(t=To(t),ji(e.stateNode,e.type,t))}}function ys(e){ln?un?un.push(e):un=[e]:ln=e}function gs(){if(ln){var e=ln,t=un;if(un=ln=null,Mu(e),t)for(e=0;e<t.length;e++)Mu(t[e])}}function ws(e,t){return e(t)}function Ss(){}var Qo=!1;function ks(e,t,n){if(Qo)return e(t,n);Qo=!0;try{return ws(e,t,n)}finally{Qo=!1,(ln!==null||un!==null)&&(Ss(),gs())}}function Kn(e,t){var n=e.stateNode;if(n===null)return null;var r=To(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(y(231,t,typeof n));return n}var Li=!1;if(tt)try{var _n={};Object.defineProperty(_n,"passive",{get:function(){Li=!0}}),window.addEventListener("test",_n,_n),window.removeEventListener("test",_n,_n)}catch{Li=!1}function gd(e,t,n,r,o,i,l,u,a){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(p){this.onError(p)}}var Dn=!1,Jr=null,Zr=!1,zi=null,wd={onError:function(e){Dn=!0,Jr=e}};function Sd(e,t,n,r,o,i,l,u,a){Dn=!1,Jr=null,gd.apply(wd,arguments)}function kd(e,t,n,r,o,i,l,u,a){if(Sd.apply(this,arguments),Dn){if(Dn){var c=Jr;Dn=!1,Jr=null}else throw Error(y(198));Zr||(Zr=!0,zi=c)}}function Vt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Es(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Au(e){if(Vt(e)!==e)throw Error(y(188))}function Ed(e){var t=e.alternate;if(!t){if(t=Vt(e),t===null)throw Error(y(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Au(o),e;if(i===r)return Au(o),t;i=i.sibling}throw Error(y(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,u=o.child;u;){if(u===n){l=!0,n=o,r=i;break}if(u===r){l=!0,r=o,n=i;break}u=u.sibling}if(!l){for(u=i.child;u;){if(u===n){l=!0,n=i,r=o;break}if(u===r){l=!0,r=i,n=o;break}u=u.sibling}if(!l)throw Error(y(189))}}if(n.alternate!==r)throw Error(y(190))}if(n.tag!==3)throw Error(y(188));return n.stateNode.current===n?e:t}function _s(e){return e=Ed(e),e!==null?Cs(e):null}function Cs(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Cs(e);if(t!==null)return t;e=e.sibling}return null}var xs=Ie.unstable_scheduleCallback,Uu=Ie.unstable_cancelCallback,_d=Ie.unstable_shouldYield,Cd=Ie.unstable_requestPaint,q=Ie.unstable_now,xd=Ie.unstable_getCurrentPriorityLevel,zl=Ie.unstable_ImmediatePriority,Ns=Ie.unstable_UserBlockingPriority,br=Ie.unstable_NormalPriority,Nd=Ie.unstable_LowPriority,Is=Ie.unstable_IdlePriority,xo=null,Ye=null;function Id(e){if(Ye&&typeof Ye.onCommitFiberRoot=="function")try{Ye.onCommitFiberRoot(xo,e,void 0,(e.current.flags&128)===128)}catch{}}var Be=Math.clz32?Math.clz32:Rd,Pd=Math.log,Td=Math.LN2;function Rd(e){return e>>>=0,e===0?32:31-(Pd(e)/Td|0)|0}var Cr=64,xr=4194304;function jn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function eo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var u=l&~o;u!==0?r=jn(u):(i&=l,i!==0&&(r=jn(i)))}else l=n&~o,l!==0?r=jn(l):i!==0&&(r=jn(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Be(t),o=1<<n,r|=e[n],t&=~o;return r}function Od(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function jd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-Be(i),u=1<<l,a=o[l];a===-1?(!(u&n)||u&r)&&(o[l]=Od(u,t)):a<=t&&(e.expiredLanes|=u),i&=~u}}function Di(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ps(){var e=Cr;return Cr<<=1,!(Cr&4194240)&&(Cr=64),e}function Yo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function dr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Be(t),e[t]=n}function Ld(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Be(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function Dl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Be(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var U=0;function Ts(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Rs,Ml,Os,js,Ls,Mi=!1,Nr=[],pt=null,ht=null,mt=null,Qn=new Map,Yn=new Map,st=[],zd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Fu(e,t){switch(e){case"focusin":case"focusout":pt=null;break;case"dragenter":case"dragleave":ht=null;break;case"mouseover":case"mouseout":mt=null;break;case"pointerover":case"pointerout":Qn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Yn.delete(t.pointerId)}}function Cn(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=hr(t),t!==null&&Ml(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Dd(e,t,n,r,o){switch(t){case"focusin":return pt=Cn(pt,e,t,n,r,o),!0;case"dragenter":return ht=Cn(ht,e,t,n,r,o),!0;case"mouseover":return mt=Cn(mt,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Qn.set(i,Cn(Qn.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Yn.set(i,Cn(Yn.get(i)||null,e,t,n,r,o)),!0}return!1}function zs(e){var t=Rt(e.target);if(t!==null){var n=Vt(t);if(n!==null){if(t=n.tag,t===13){if(t=Es(n),t!==null){e.blockedOn=t,Ls(e.priority,function(){Os(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function $r(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ai(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Oi=r,n.target.dispatchEvent(r),Oi=null}else return t=hr(n),t!==null&&Ml(t),e.blockedOn=n,!1;t.shift()}return!0}function $u(e,t,n){$r(e)&&n.delete(t)}function Md(){Mi=!1,pt!==null&&$r(pt)&&(pt=null),ht!==null&&$r(ht)&&(ht=null),mt!==null&&$r(mt)&&(mt=null),Qn.forEach($u),Yn.forEach($u)}function xn(e,t){e.blockedOn===t&&(e.blockedOn=null,Mi||(Mi=!0,Ie.unstable_scheduleCallback(Ie.unstable_NormalPriority,Md)))}function Xn(e){function t(o){return xn(o,e)}if(0<Nr.length){xn(Nr[0],e);for(var n=1;n<Nr.length;n++){var r=Nr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(pt!==null&&xn(pt,e),ht!==null&&xn(ht,e),mt!==null&&xn(mt,e),Qn.forEach(t),Yn.forEach(t),n=0;n<st.length;n++)r=st[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<st.length&&(n=st[0],n.blockedOn===null);)zs(n),n.blockedOn===null&&st.shift()}var an=it.ReactCurrentBatchConfig,to=!0;function Ad(e,t,n,r){var o=U,i=an.transition;an.transition=null;try{U=1,Al(e,t,n,r)}finally{U=o,an.transition=i}}function Ud(e,t,n,r){var o=U,i=an.transition;an.transition=null;try{U=4,Al(e,t,n,r)}finally{U=o,an.transition=i}}function Al(e,t,n,r){if(to){var o=Ai(e,t,n,r);if(o===null)ri(e,t,r,no,n),Fu(e,r);else if(Dd(o,e,t,n,r))r.stopPropagation();else if(Fu(e,r),t&4&&-1<zd.indexOf(e)){for(;o!==null;){var i=hr(o);if(i!==null&&Rs(i),i=Ai(e,t,n,r),i===null&&ri(e,t,r,no,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else ri(e,t,r,null,n)}}var no=null;function Ai(e,t,n,r){if(no=null,e=Ll(r),e=Rt(e),e!==null)if(t=Vt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Es(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return no=e,null}function Ds(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(xd()){case zl:return 1;case Ns:return 4;case br:case Nd:return 16;case Is:return 536870912;default:return 16}default:return 16}}var ft=null,Ul=null,Br=null;function Ms(){if(Br)return Br;var e,t=Ul,n=t.length,r,o="value"in ft?ft.value:ft.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return Br=o.slice(e,1<r?1-r:void 0)}function Vr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ir(){return!0}function Bu(){return!1}function Te(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(n=e[u],this[u]=n?n(i):i[u]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Ir:Bu,this.isPropagationStopped=Bu,this}return Y(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ir)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ir)},persist:function(){},isPersistent:Ir}),t}var wn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fl=Te(wn),pr=Y({},wn,{view:0,detail:0}),Fd=Te(pr),Xo,Go,Nn,No=Y({},pr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$l,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Nn&&(Nn&&e.type==="mousemove"?(Xo=e.screenX-Nn.screenX,Go=e.screenY-Nn.screenY):Go=Xo=0,Nn=e),Xo)},movementY:function(e){return"movementY"in e?e.movementY:Go}}),Vu=Te(No),$d=Y({},No,{dataTransfer:0}),Bd=Te($d),Vd=Y({},pr,{relatedTarget:0}),qo=Te(Vd),Wd=Y({},wn,{animationName:0,elapsedTime:0,pseudoElement:0}),Hd=Te(Wd),Kd=Y({},wn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Qd=Te(Kd),Yd=Y({},wn,{data:0}),Wu=Te(Yd),Xd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Gd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},qd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Jd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=qd[e])?!!t[e]:!1}function $l(){return Jd}var Zd=Y({},pr,{key:function(e){if(e.key){var t=Xd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Vr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Gd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$l,charCode:function(e){return e.type==="keypress"?Vr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Vr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),bd=Te(Zd),ep=Y({},No,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Hu=Te(ep),tp=Y({},pr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$l}),np=Te(tp),rp=Y({},wn,{propertyName:0,elapsedTime:0,pseudoElement:0}),op=Te(rp),ip=Y({},No,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),lp=Te(ip),up=[9,13,27,32],Bl=tt&&"CompositionEvent"in window,Mn=null;tt&&"documentMode"in document&&(Mn=document.documentMode);var ap=tt&&"TextEvent"in window&&!Mn,As=tt&&(!Bl||Mn&&8<Mn&&11>=Mn),Ku=" ",Qu=!1;function Us(e,t){switch(e){case"keyup":return up.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fs(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Xt=!1;function sp(e,t){switch(e){case"compositionend":return Fs(t);case"keypress":return t.which!==32?null:(Qu=!0,Ku);case"textInput":return e=t.data,e===Ku&&Qu?null:e;default:return null}}function cp(e,t){if(Xt)return e==="compositionend"||!Bl&&Us(e,t)?(e=Ms(),Br=Ul=ft=null,Xt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return As&&t.locale!=="ko"?null:t.data;default:return null}}var fp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!fp[e.type]:t==="textarea"}function $s(e,t,n,r){ys(r),t=ro(t,"onChange"),0<t.length&&(n=new Fl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var An=null,Gn=null;function dp(e){Js(e,0)}function Io(e){var t=Jt(e);if(cs(t))return e}function pp(e,t){if(e==="change")return t}var Bs=!1;if(tt){var Jo;if(tt){var Zo="oninput"in document;if(!Zo){var Xu=document.createElement("div");Xu.setAttribute("oninput","return;"),Zo=typeof Xu.oninput=="function"}Jo=Zo}else Jo=!1;Bs=Jo&&(!document.documentMode||9<document.documentMode)}function Gu(){An&&(An.detachEvent("onpropertychange",Vs),Gn=An=null)}function Vs(e){if(e.propertyName==="value"&&Io(Gn)){var t=[];$s(t,Gn,e,Ll(e)),ks(dp,t)}}function hp(e,t,n){e==="focusin"?(Gu(),An=t,Gn=n,An.attachEvent("onpropertychange",Vs)):e==="focusout"&&Gu()}function mp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Io(Gn)}function vp(e,t){if(e==="click")return Io(t)}function yp(e,t){if(e==="input"||e==="change")return Io(t)}function gp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var We=typeof Object.is=="function"?Object.is:gp;function qn(e,t){if(We(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!wi.call(t,o)||!We(e[o],t[o]))return!1}return!0}function qu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ju(e,t){var n=qu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=qu(n)}}function Ws(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ws(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Hs(){for(var e=window,t=qr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=qr(e.document)}return t}function Vl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function wp(e){var t=Hs(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ws(n.ownerDocument.documentElement,n)){if(r!==null&&Vl(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Ju(n,i);var l=Ju(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Sp=tt&&"documentMode"in document&&11>=document.documentMode,Gt=null,Ui=null,Un=null,Fi=!1;function Zu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Fi||Gt==null||Gt!==qr(r)||(r=Gt,"selectionStart"in r&&Vl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Un&&qn(Un,r)||(Un=r,r=ro(Ui,"onSelect"),0<r.length&&(t=new Fl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Gt)))}function Pr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var qt={animationend:Pr("Animation","AnimationEnd"),animationiteration:Pr("Animation","AnimationIteration"),animationstart:Pr("Animation","AnimationStart"),transitionend:Pr("Transition","TransitionEnd")},bo={},Ks={};tt&&(Ks=document.createElement("div").style,"AnimationEvent"in window||(delete qt.animationend.animation,delete qt.animationiteration.animation,delete qt.animationstart.animation),"TransitionEvent"in window||delete qt.transitionend.transition);function Po(e){if(bo[e])return bo[e];if(!qt[e])return e;var t=qt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ks)return bo[e]=t[n];return e}var Qs=Po("animationend"),Ys=Po("animationiteration"),Xs=Po("animationstart"),Gs=Po("transitionend"),qs=new Map,bu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function _t(e,t){qs.set(e,t),Bt(t,[e])}for(var ei=0;ei<bu.length;ei++){var ti=bu[ei],kp=ti.toLowerCase(),Ep=ti[0].toUpperCase()+ti.slice(1);_t(kp,"on"+Ep)}_t(Qs,"onAnimationEnd");_t(Ys,"onAnimationIteration");_t(Xs,"onAnimationStart");_t("dblclick","onDoubleClick");_t("focusin","onFocus");_t("focusout","onBlur");_t(Gs,"onTransitionEnd");fn("onMouseEnter",["mouseout","mouseover"]);fn("onMouseLeave",["mouseout","mouseover"]);fn("onPointerEnter",["pointerout","pointerover"]);fn("onPointerLeave",["pointerout","pointerover"]);Bt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Bt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Bt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Bt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Bt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Bt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ln="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_p=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ln));function ea(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,kd(r,t,void 0,e),e.currentTarget=null}function Js(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var u=r[l],a=u.instance,c=u.currentTarget;if(u=u.listener,a!==i&&o.isPropagationStopped())break e;ea(o,u,c),i=a}else for(l=0;l<r.length;l++){if(u=r[l],a=u.instance,c=u.currentTarget,u=u.listener,a!==i&&o.isPropagationStopped())break e;ea(o,u,c),i=a}}}if(Zr)throw e=zi,Zr=!1,zi=null,e}function B(e,t){var n=t[Hi];n===void 0&&(n=t[Hi]=new Set);var r=e+"__bubble";n.has(r)||(Zs(t,e,2,!1),n.add(r))}function ni(e,t,n){var r=0;t&&(r|=4),Zs(n,e,r,t)}var Tr="_reactListening"+Math.random().toString(36).slice(2);function Jn(e){if(!e[Tr]){e[Tr]=!0,is.forEach(function(n){n!=="selectionchange"&&(_p.has(n)||ni(n,!1,e),ni(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Tr]||(t[Tr]=!0,ni("selectionchange",!1,t))}}function Zs(e,t,n,r){switch(Ds(t)){case 1:var o=Ad;break;case 4:o=Ud;break;default:o=Al}n=o.bind(null,t,n,e),o=void 0,!Li||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function ri(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var u=r.stateNode.containerInfo;if(u===o||u.nodeType===8&&u.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var a=l.tag;if((a===3||a===4)&&(a=l.stateNode.containerInfo,a===o||a.nodeType===8&&a.parentNode===o))return;l=l.return}for(;u!==null;){if(l=Rt(u),l===null)return;if(a=l.tag,a===5||a===6){r=i=l;continue e}u=u.parentNode}}r=r.return}ks(function(){var c=i,p=Ll(n),h=[];e:{var m=qs.get(e);if(m!==void 0){var g=Fl,S=e;switch(e){case"keypress":if(Vr(n)===0)break e;case"keydown":case"keyup":g=bd;break;case"focusin":S="focus",g=qo;break;case"focusout":S="blur",g=qo;break;case"beforeblur":case"afterblur":g=qo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Vu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Bd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=np;break;case Qs:case Ys:case Xs:g=Hd;break;case Gs:g=op;break;case"scroll":g=Fd;break;case"wheel":g=lp;break;case"copy":case"cut":case"paste":g=Qd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Hu}var w=(t&4)!==0,x=!w&&e==="scroll",f=w?m!==null?m+"Capture":null:m;w=[];for(var s=c,d;s!==null;){d=s;var v=d.stateNode;if(d.tag===5&&v!==null&&(d=v,f!==null&&(v=Kn(s,f),v!=null&&w.push(Zn(s,v,d)))),x)break;s=s.return}0<w.length&&(m=new g(m,S,null,n,p),h.push({event:m,listeners:w}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",m&&n!==Oi&&(S=n.relatedTarget||n.fromElement)&&(Rt(S)||S[nt]))break e;if((g||m)&&(m=p.window===p?p:(m=p.ownerDocument)?m.defaultView||m.parentWindow:window,g?(S=n.relatedTarget||n.toElement,g=c,S=S?Rt(S):null,S!==null&&(x=Vt(S),S!==x||S.tag!==5&&S.tag!==6)&&(S=null)):(g=null,S=c),g!==S)){if(w=Vu,v="onMouseLeave",f="onMouseEnter",s="mouse",(e==="pointerout"||e==="pointerover")&&(w=Hu,v="onPointerLeave",f="onPointerEnter",s="pointer"),x=g==null?m:Jt(g),d=S==null?m:Jt(S),m=new w(v,s+"leave",g,n,p),m.target=x,m.relatedTarget=d,v=null,Rt(p)===c&&(w=new w(f,s+"enter",S,n,p),w.target=d,w.relatedTarget=x,v=w),x=v,g&&S)t:{for(w=g,f=S,s=0,d=w;d;d=Kt(d))s++;for(d=0,v=f;v;v=Kt(v))d++;for(;0<s-d;)w=Kt(w),s--;for(;0<d-s;)f=Kt(f),d--;for(;s--;){if(w===f||f!==null&&w===f.alternate)break t;w=Kt(w),f=Kt(f)}w=null}else w=null;g!==null&&ta(h,m,g,w,!1),S!==null&&x!==null&&ta(h,x,S,w,!0)}}e:{if(m=c?Jt(c):window,g=m.nodeName&&m.nodeName.toLowerCase(),g==="select"||g==="input"&&m.type==="file")var E=pp;else if(Yu(m))if(Bs)E=yp;else{E=mp;var P=hp}else(g=m.nodeName)&&g.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(E=vp);if(E&&(E=E(e,c))){$s(h,E,n,p);break e}P&&P(e,m,c),e==="focusout"&&(P=m._wrapperState)&&P.controlled&&m.type==="number"&&Ni(m,"number",m.value)}switch(P=c?Jt(c):window,e){case"focusin":(Yu(P)||P.contentEditable==="true")&&(Gt=P,Ui=c,Un=null);break;case"focusout":Un=Ui=Gt=null;break;case"mousedown":Fi=!0;break;case"contextmenu":case"mouseup":case"dragend":Fi=!1,Zu(h,n,p);break;case"selectionchange":if(Sp)break;case"keydown":case"keyup":Zu(h,n,p)}var I;if(Bl)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else Xt?Us(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(As&&n.locale!=="ko"&&(Xt||T!=="onCompositionStart"?T==="onCompositionEnd"&&Xt&&(I=Ms()):(ft=p,Ul="value"in ft?ft.value:ft.textContent,Xt=!0)),P=ro(c,T),0<P.length&&(T=new Wu(T,e,null,n,p),h.push({event:T,listeners:P}),I?T.data=I:(I=Fs(n),I!==null&&(T.data=I)))),(I=ap?sp(e,n):cp(e,n))&&(c=ro(c,"onBeforeInput"),0<c.length&&(p=new Wu("onBeforeInput","beforeinput",null,n,p),h.push({event:p,listeners:c}),p.data=I))}Js(h,t)})}function Zn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ro(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Kn(e,n),i!=null&&r.unshift(Zn(e,i,o)),i=Kn(e,t),i!=null&&r.push(Zn(e,i,o))),e=e.return}return r}function Kt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ta(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var u=n,a=u.alternate,c=u.stateNode;if(a!==null&&a===r)break;u.tag===5&&c!==null&&(u=c,o?(a=Kn(n,i),a!=null&&l.unshift(Zn(n,a,u))):o||(a=Kn(n,i),a!=null&&l.push(Zn(n,a,u)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Cp=/\r\n?/g,xp=/\u0000|\uFFFD/g;function na(e){return(typeof e=="string"?e:""+e).replace(Cp,`
`).replace(xp,"")}function Rr(e,t,n){if(t=na(t),na(e)!==t&&n)throw Error(y(425))}function oo(){}var $i=null,Bi=null;function Vi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wi=typeof setTimeout=="function"?setTimeout:void 0,Np=typeof clearTimeout=="function"?clearTimeout:void 0,ra=typeof Promise=="function"?Promise:void 0,Ip=typeof queueMicrotask=="function"?queueMicrotask:typeof ra<"u"?function(e){return ra.resolve(null).then(e).catch(Pp)}:Wi;function Pp(e){setTimeout(function(){throw e})}function oi(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Xn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Xn(t)}function vt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function oa(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Sn=Math.random().toString(36).slice(2),Qe="__reactFiber$"+Sn,bn="__reactProps$"+Sn,nt="__reactContainer$"+Sn,Hi="__reactEvents$"+Sn,Tp="__reactListeners$"+Sn,Rp="__reactHandles$"+Sn;function Rt(e){var t=e[Qe];if(t)return t;for(var n=e.parentNode;n;){if(t=n[nt]||n[Qe]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=oa(e);e!==null;){if(n=e[Qe])return n;e=oa(e)}return t}e=n,n=e.parentNode}return null}function hr(e){return e=e[Qe]||e[nt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Jt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(y(33))}function To(e){return e[bn]||null}var Ki=[],Zt=-1;function Ct(e){return{current:e}}function V(e){0>Zt||(e.current=Ki[Zt],Ki[Zt]=null,Zt--)}function $(e,t){Zt++,Ki[Zt]=e.current,e.current=t}var Et={},de=Ct(Et),ke=Ct(!1),Dt=Et;function dn(e,t){var n=e.type.contextTypes;if(!n)return Et;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ee(e){return e=e.childContextTypes,e!=null}function io(){V(ke),V(de)}function ia(e,t,n){if(de.current!==Et)throw Error(y(168));$(de,t),$(ke,n)}function bs(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(y(108,hd(e)||"Unknown",o));return Y({},n,r)}function lo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Et,Dt=de.current,$(de,e),$(ke,ke.current),!0}function la(e,t,n){var r=e.stateNode;if(!r)throw Error(y(169));n?(e=bs(e,t,Dt),r.__reactInternalMemoizedMergedChildContext=e,V(ke),V(de),$(de,e)):V(ke),$(ke,n)}var qe=null,Ro=!1,ii=!1;function ec(e){qe===null?qe=[e]:qe.push(e)}function Op(e){Ro=!0,ec(e)}function xt(){if(!ii&&qe!==null){ii=!0;var e=0,t=U;try{var n=qe;for(U=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}qe=null,Ro=!1}catch(o){throw qe!==null&&(qe=qe.slice(e+1)),xs(zl,xt),o}finally{U=t,ii=!1}}return null}var bt=[],en=0,uo=null,ao=0,Re=[],Oe=0,Mt=null,Je=1,Ze="";function Pt(e,t){bt[en++]=ao,bt[en++]=uo,uo=e,ao=t}function tc(e,t,n){Re[Oe++]=Je,Re[Oe++]=Ze,Re[Oe++]=Mt,Mt=e;var r=Je;e=Ze;var o=32-Be(r)-1;r&=~(1<<o),n+=1;var i=32-Be(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,Je=1<<32-Be(t)+o|n<<o|r,Ze=i+e}else Je=1<<i|n<<o|r,Ze=e}function Wl(e){e.return!==null&&(Pt(e,1),tc(e,1,0))}function Hl(e){for(;e===uo;)uo=bt[--en],bt[en]=null,ao=bt[--en],bt[en]=null;for(;e===Mt;)Mt=Re[--Oe],Re[Oe]=null,Ze=Re[--Oe],Re[Oe]=null,Je=Re[--Oe],Re[Oe]=null}var Ne=null,xe=null,W=!1,$e=null;function nc(e,t){var n=je(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ua(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ne=e,xe=vt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ne=e,xe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Mt!==null?{id:Je,overflow:Ze}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=je(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ne=e,xe=null,!0):!1;default:return!1}}function Qi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Yi(e){if(W){var t=xe;if(t){var n=t;if(!ua(e,t)){if(Qi(e))throw Error(y(418));t=vt(n.nextSibling);var r=Ne;t&&ua(e,t)?nc(r,n):(e.flags=e.flags&-4097|2,W=!1,Ne=e)}}else{if(Qi(e))throw Error(y(418));e.flags=e.flags&-4097|2,W=!1,Ne=e}}}function aa(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ne=e}function Or(e){if(e!==Ne)return!1;if(!W)return aa(e),W=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Vi(e.type,e.memoizedProps)),t&&(t=xe)){if(Qi(e))throw rc(),Error(y(418));for(;t;)nc(e,t),t=vt(t.nextSibling)}if(aa(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(y(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){xe=vt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}xe=null}}else xe=Ne?vt(e.stateNode.nextSibling):null;return!0}function rc(){for(var e=xe;e;)e=vt(e.nextSibling)}function pn(){xe=Ne=null,W=!1}function Kl(e){$e===null?$e=[e]:$e.push(e)}var jp=it.ReactCurrentBatchConfig;function In(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(y(309));var r=n.stateNode}if(!r)throw Error(y(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var u=o.refs;l===null?delete u[i]:u[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(y(284));if(!n._owner)throw Error(y(290,e))}return e}function jr(e,t){throw e=Object.prototype.toString.call(t),Error(y(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function sa(e){var t=e._init;return t(e._payload)}function oc(e){function t(f,s){if(e){var d=f.deletions;d===null?(f.deletions=[s],f.flags|=16):d.push(s)}}function n(f,s){if(!e)return null;for(;s!==null;)t(f,s),s=s.sibling;return null}function r(f,s){for(f=new Map;s!==null;)s.key!==null?f.set(s.key,s):f.set(s.index,s),s=s.sibling;return f}function o(f,s){return f=St(f,s),f.index=0,f.sibling=null,f}function i(f,s,d){return f.index=d,e?(d=f.alternate,d!==null?(d=d.index,d<s?(f.flags|=2,s):d):(f.flags|=2,s)):(f.flags|=1048576,s)}function l(f){return e&&f.alternate===null&&(f.flags|=2),f}function u(f,s,d,v){return s===null||s.tag!==6?(s=di(d,f.mode,v),s.return=f,s):(s=o(s,d),s.return=f,s)}function a(f,s,d,v){var E=d.type;return E===Yt?p(f,s,d.props.children,v,d.key):s!==null&&(s.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===ut&&sa(E)===s.type)?(v=o(s,d.props),v.ref=In(f,s,d),v.return=f,v):(v=Gr(d.type,d.key,d.props,null,f.mode,v),v.ref=In(f,s,d),v.return=f,v)}function c(f,s,d,v){return s===null||s.tag!==4||s.stateNode.containerInfo!==d.containerInfo||s.stateNode.implementation!==d.implementation?(s=pi(d,f.mode,v),s.return=f,s):(s=o(s,d.children||[]),s.return=f,s)}function p(f,s,d,v,E){return s===null||s.tag!==7?(s=zt(d,f.mode,v,E),s.return=f,s):(s=o(s,d),s.return=f,s)}function h(f,s,d){if(typeof s=="string"&&s!==""||typeof s=="number")return s=di(""+s,f.mode,d),s.return=f,s;if(typeof s=="object"&&s!==null){switch(s.$$typeof){case kr:return d=Gr(s.type,s.key,s.props,null,f.mode,d),d.ref=In(f,null,s),d.return=f,d;case Qt:return s=pi(s,f.mode,d),s.return=f,s;case ut:var v=s._init;return h(f,v(s._payload),d)}if(On(s)||En(s))return s=zt(s,f.mode,d,null),s.return=f,s;jr(f,s)}return null}function m(f,s,d,v){var E=s!==null?s.key:null;if(typeof d=="string"&&d!==""||typeof d=="number")return E!==null?null:u(f,s,""+d,v);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case kr:return d.key===E?a(f,s,d,v):null;case Qt:return d.key===E?c(f,s,d,v):null;case ut:return E=d._init,m(f,s,E(d._payload),v)}if(On(d)||En(d))return E!==null?null:p(f,s,d,v,null);jr(f,d)}return null}function g(f,s,d,v,E){if(typeof v=="string"&&v!==""||typeof v=="number")return f=f.get(d)||null,u(s,f,""+v,E);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case kr:return f=f.get(v.key===null?d:v.key)||null,a(s,f,v,E);case Qt:return f=f.get(v.key===null?d:v.key)||null,c(s,f,v,E);case ut:var P=v._init;return g(f,s,d,P(v._payload),E)}if(On(v)||En(v))return f=f.get(d)||null,p(s,f,v,E,null);jr(s,v)}return null}function S(f,s,d,v){for(var E=null,P=null,I=s,T=s=0,F=null;I!==null&&T<d.length;T++){I.index>T?(F=I,I=null):F=I.sibling;var j=m(f,I,d[T],v);if(j===null){I===null&&(I=F);break}e&&I&&j.alternate===null&&t(f,I),s=i(j,s,T),P===null?E=j:P.sibling=j,P=j,I=F}if(T===d.length)return n(f,I),W&&Pt(f,T),E;if(I===null){for(;T<d.length;T++)I=h(f,d[T],v),I!==null&&(s=i(I,s,T),P===null?E=I:P.sibling=I,P=I);return W&&Pt(f,T),E}for(I=r(f,I);T<d.length;T++)F=g(I,f,T,d[T],v),F!==null&&(e&&F.alternate!==null&&I.delete(F.key===null?T:F.key),s=i(F,s,T),P===null?E=F:P.sibling=F,P=F);return e&&I.forEach(function(R){return t(f,R)}),W&&Pt(f,T),E}function w(f,s,d,v){var E=En(d);if(typeof E!="function")throw Error(y(150));if(d=E.call(d),d==null)throw Error(y(151));for(var P=E=null,I=s,T=s=0,F=null,j=d.next();I!==null&&!j.done;T++,j=d.next()){I.index>T?(F=I,I=null):F=I.sibling;var R=m(f,I,j.value,v);if(R===null){I===null&&(I=F);break}e&&I&&R.alternate===null&&t(f,I),s=i(R,s,T),P===null?E=R:P.sibling=R,P=R,I=F}if(j.done)return n(f,I),W&&Pt(f,T),E;if(I===null){for(;!j.done;T++,j=d.next())j=h(f,j.value,v),j!==null&&(s=i(j,s,T),P===null?E=j:P.sibling=j,P=j);return W&&Pt(f,T),E}for(I=r(f,I);!j.done;T++,j=d.next())j=g(I,f,T,j.value,v),j!==null&&(e&&j.alternate!==null&&I.delete(j.key===null?T:j.key),s=i(j,s,T),P===null?E=j:P.sibling=j,P=j);return e&&I.forEach(function(A){return t(f,A)}),W&&Pt(f,T),E}function x(f,s,d,v){if(typeof d=="object"&&d!==null&&d.type===Yt&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case kr:e:{for(var E=d.key,P=s;P!==null;){if(P.key===E){if(E=d.type,E===Yt){if(P.tag===7){n(f,P.sibling),s=o(P,d.props.children),s.return=f,f=s;break e}}else if(P.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===ut&&sa(E)===P.type){n(f,P.sibling),s=o(P,d.props),s.ref=In(f,P,d),s.return=f,f=s;break e}n(f,P);break}else t(f,P);P=P.sibling}d.type===Yt?(s=zt(d.props.children,f.mode,v,d.key),s.return=f,f=s):(v=Gr(d.type,d.key,d.props,null,f.mode,v),v.ref=In(f,s,d),v.return=f,f=v)}return l(f);case Qt:e:{for(P=d.key;s!==null;){if(s.key===P)if(s.tag===4&&s.stateNode.containerInfo===d.containerInfo&&s.stateNode.implementation===d.implementation){n(f,s.sibling),s=o(s,d.children||[]),s.return=f,f=s;break e}else{n(f,s);break}else t(f,s);s=s.sibling}s=pi(d,f.mode,v),s.return=f,f=s}return l(f);case ut:return P=d._init,x(f,s,P(d._payload),v)}if(On(d))return S(f,s,d,v);if(En(d))return w(f,s,d,v);jr(f,d)}return typeof d=="string"&&d!==""||typeof d=="number"?(d=""+d,s!==null&&s.tag===6?(n(f,s.sibling),s=o(s,d),s.return=f,f=s):(n(f,s),s=di(d,f.mode,v),s.return=f,f=s),l(f)):n(f,s)}return x}var hn=oc(!0),ic=oc(!1),so=Ct(null),co=null,tn=null,Ql=null;function Yl(){Ql=tn=co=null}function Xl(e){var t=so.current;V(so),e._currentValue=t}function Xi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function sn(e,t){co=e,Ql=tn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Se=!0),e.firstContext=null)}function De(e){var t=e._currentValue;if(Ql!==e)if(e={context:e,memoizedValue:t,next:null},tn===null){if(co===null)throw Error(y(308));tn=e,co.dependencies={lanes:0,firstContext:e}}else tn=tn.next=e;return t}var Ot=null;function Gl(e){Ot===null?Ot=[e]:Ot.push(e)}function lc(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Gl(t)):(n.next=o.next,o.next=n),t.interleaved=n,rt(e,r)}function rt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var at=!1;function ql(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function uc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function be(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function yt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,M&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,rt(e,n)}return o=r.interleaved,o===null?(t.next=t,Gl(r)):(t.next=o.next,o.next=t),r.interleaved=t,rt(e,n)}function Wr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Dl(e,n)}}function ca(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function fo(e,t,n,r){var o=e.updateQueue;at=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,u=o.shared.pending;if(u!==null){o.shared.pending=null;var a=u,c=a.next;a.next=null,l===null?i=c:l.next=c,l=a;var p=e.alternate;p!==null&&(p=p.updateQueue,u=p.lastBaseUpdate,u!==l&&(u===null?p.firstBaseUpdate=c:u.next=c,p.lastBaseUpdate=a))}if(i!==null){var h=o.baseState;l=0,p=c=a=null,u=i;do{var m=u.lane,g=u.eventTime;if((r&m)===m){p!==null&&(p=p.next={eventTime:g,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var S=e,w=u;switch(m=t,g=n,w.tag){case 1:if(S=w.payload,typeof S=="function"){h=S.call(g,h,m);break e}h=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=w.payload,m=typeof S=="function"?S.call(g,h,m):S,m==null)break e;h=Y({},h,m);break e;case 2:at=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,m=o.effects,m===null?o.effects=[u]:m.push(u))}else g={eventTime:g,lane:m,tag:u.tag,payload:u.payload,callback:u.callback,next:null},p===null?(c=p=g,a=h):p=p.next=g,l|=m;if(u=u.next,u===null){if(u=o.shared.pending,u===null)break;m=u,u=m.next,m.next=null,o.lastBaseUpdate=m,o.shared.pending=null}}while(!0);if(p===null&&(a=h),o.baseState=a,o.firstBaseUpdate=c,o.lastBaseUpdate=p,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);Ut|=l,e.lanes=l,e.memoizedState=h}}function fa(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(y(191,o));o.call(r)}}}var mr={},Xe=Ct(mr),er=Ct(mr),tr=Ct(mr);function jt(e){if(e===mr)throw Error(y(174));return e}function Jl(e,t){switch($(tr,t),$(er,e),$(Xe,mr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Pi(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Pi(t,e)}V(Xe),$(Xe,t)}function mn(){V(Xe),V(er),V(tr)}function ac(e){jt(tr.current);var t=jt(Xe.current),n=Pi(t,e.type);t!==n&&($(er,e),$(Xe,n))}function Zl(e){er.current===e&&(V(Xe),V(er))}var K=Ct(0);function po(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var li=[];function bl(){for(var e=0;e<li.length;e++)li[e]._workInProgressVersionPrimary=null;li.length=0}var Hr=it.ReactCurrentDispatcher,ui=it.ReactCurrentBatchConfig,At=0,Q=null,b=null,ne=null,ho=!1,Fn=!1,nr=0,Lp=0;function ae(){throw Error(y(321))}function eu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!We(e[n],t[n]))return!1;return!0}function tu(e,t,n,r,o,i){if(At=i,Q=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Hr.current=e===null||e.memoizedState===null?Ap:Up,e=n(r,o),Fn){i=0;do{if(Fn=!1,nr=0,25<=i)throw Error(y(301));i+=1,ne=b=null,t.updateQueue=null,Hr.current=Fp,e=n(r,o)}while(Fn)}if(Hr.current=mo,t=b!==null&&b.next!==null,At=0,ne=b=Q=null,ho=!1,t)throw Error(y(300));return e}function nu(){var e=nr!==0;return nr=0,e}function Ke(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ne===null?Q.memoizedState=ne=e:ne=ne.next=e,ne}function Me(){if(b===null){var e=Q.alternate;e=e!==null?e.memoizedState:null}else e=b.next;var t=ne===null?Q.memoizedState:ne.next;if(t!==null)ne=t,b=e;else{if(e===null)throw Error(y(310));b=e,e={memoizedState:b.memoizedState,baseState:b.baseState,baseQueue:b.baseQueue,queue:b.queue,next:null},ne===null?Q.memoizedState=ne=e:ne=ne.next=e}return ne}function rr(e,t){return typeof t=="function"?t(e):t}function ai(e){var t=Me(),n=t.queue;if(n===null)throw Error(y(311));n.lastRenderedReducer=e;var r=b,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var u=l=null,a=null,c=i;do{var p=c.lane;if((At&p)===p)a!==null&&(a=a.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var h={lane:p,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};a===null?(u=a=h,l=r):a=a.next=h,Q.lanes|=p,Ut|=p}c=c.next}while(c!==null&&c!==i);a===null?l=r:a.next=u,We(r,t.memoizedState)||(Se=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,Q.lanes|=i,Ut|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function si(e){var t=Me(),n=t.queue;if(n===null)throw Error(y(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);We(i,t.memoizedState)||(Se=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function sc(){}function cc(e,t){var n=Q,r=Me(),o=t(),i=!We(r.memoizedState,o);if(i&&(r.memoizedState=o,Se=!0),r=r.queue,ru(pc.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||ne!==null&&ne.memoizedState.tag&1){if(n.flags|=2048,or(9,dc.bind(null,n,r,o,t),void 0,null),re===null)throw Error(y(349));At&30||fc(n,t,o)}return o}function fc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Q.updateQueue,t===null?(t={lastEffect:null,stores:null},Q.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function dc(e,t,n,r){t.value=n,t.getSnapshot=r,hc(t)&&mc(e)}function pc(e,t,n){return n(function(){hc(t)&&mc(e)})}function hc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!We(e,n)}catch{return!0}}function mc(e){var t=rt(e,1);t!==null&&Ve(t,e,1,-1)}function da(e){var t=Ke();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:rr,lastRenderedState:e},t.queue=e,e=e.dispatch=Mp.bind(null,Q,e),[t.memoizedState,e]}function or(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Q.updateQueue,t===null?(t={lastEffect:null,stores:null},Q.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function vc(){return Me().memoizedState}function Kr(e,t,n,r){var o=Ke();Q.flags|=e,o.memoizedState=or(1|t,n,void 0,r===void 0?null:r)}function Oo(e,t,n,r){var o=Me();r=r===void 0?null:r;var i=void 0;if(b!==null){var l=b.memoizedState;if(i=l.destroy,r!==null&&eu(r,l.deps)){o.memoizedState=or(t,n,i,r);return}}Q.flags|=e,o.memoizedState=or(1|t,n,i,r)}function pa(e,t){return Kr(8390656,8,e,t)}function ru(e,t){return Oo(2048,8,e,t)}function yc(e,t){return Oo(4,2,e,t)}function gc(e,t){return Oo(4,4,e,t)}function wc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Sc(e,t,n){return n=n!=null?n.concat([e]):null,Oo(4,4,wc.bind(null,t,e),n)}function ou(){}function kc(e,t){var n=Me();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&eu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ec(e,t){var n=Me();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&eu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function _c(e,t,n){return At&21?(We(n,t)||(n=Ps(),Q.lanes|=n,Ut|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Se=!0),e.memoizedState=n)}function zp(e,t){var n=U;U=n!==0&&4>n?n:4,e(!0);var r=ui.transition;ui.transition={};try{e(!1),t()}finally{U=n,ui.transition=r}}function Cc(){return Me().memoizedState}function Dp(e,t,n){var r=wt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},xc(e))Nc(t,n);else if(n=lc(e,t,n,r),n!==null){var o=he();Ve(n,e,r,o),Ic(n,t,r)}}function Mp(e,t,n){var r=wt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(xc(e))Nc(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,u=i(l,n);if(o.hasEagerState=!0,o.eagerState=u,We(u,l)){var a=t.interleaved;a===null?(o.next=o,Gl(t)):(o.next=a.next,a.next=o),t.interleaved=o;return}}catch{}finally{}n=lc(e,t,o,r),n!==null&&(o=he(),Ve(n,e,r,o),Ic(n,t,r))}}function xc(e){var t=e.alternate;return e===Q||t!==null&&t===Q}function Nc(e,t){Fn=ho=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ic(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Dl(e,n)}}var mo={readContext:De,useCallback:ae,useContext:ae,useEffect:ae,useImperativeHandle:ae,useInsertionEffect:ae,useLayoutEffect:ae,useMemo:ae,useReducer:ae,useRef:ae,useState:ae,useDebugValue:ae,useDeferredValue:ae,useTransition:ae,useMutableSource:ae,useSyncExternalStore:ae,useId:ae,unstable_isNewReconciler:!1},Ap={readContext:De,useCallback:function(e,t){return Ke().memoizedState=[e,t===void 0?null:t],e},useContext:De,useEffect:pa,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Kr(4194308,4,wc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Kr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Kr(4,2,e,t)},useMemo:function(e,t){var n=Ke();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ke();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Dp.bind(null,Q,e),[r.memoizedState,e]},useRef:function(e){var t=Ke();return e={current:e},t.memoizedState=e},useState:da,useDebugValue:ou,useDeferredValue:function(e){return Ke().memoizedState=e},useTransition:function(){var e=da(!1),t=e[0];return e=zp.bind(null,e[1]),Ke().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Q,o=Ke();if(W){if(n===void 0)throw Error(y(407));n=n()}else{if(n=t(),re===null)throw Error(y(349));At&30||fc(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,pa(pc.bind(null,r,i,e),[e]),r.flags|=2048,or(9,dc.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Ke(),t=re.identifierPrefix;if(W){var n=Ze,r=Je;n=(r&~(1<<32-Be(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=nr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Lp++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Up={readContext:De,useCallback:kc,useContext:De,useEffect:ru,useImperativeHandle:Sc,useInsertionEffect:yc,useLayoutEffect:gc,useMemo:Ec,useReducer:ai,useRef:vc,useState:function(){return ai(rr)},useDebugValue:ou,useDeferredValue:function(e){var t=Me();return _c(t,b.memoizedState,e)},useTransition:function(){var e=ai(rr)[0],t=Me().memoizedState;return[e,t]},useMutableSource:sc,useSyncExternalStore:cc,useId:Cc,unstable_isNewReconciler:!1},Fp={readContext:De,useCallback:kc,useContext:De,useEffect:ru,useImperativeHandle:Sc,useInsertionEffect:yc,useLayoutEffect:gc,useMemo:Ec,useReducer:si,useRef:vc,useState:function(){return si(rr)},useDebugValue:ou,useDeferredValue:function(e){var t=Me();return b===null?t.memoizedState=e:_c(t,b.memoizedState,e)},useTransition:function(){var e=si(rr)[0],t=Me().memoizedState;return[e,t]},useMutableSource:sc,useSyncExternalStore:cc,useId:Cc,unstable_isNewReconciler:!1};function Ue(e,t){if(e&&e.defaultProps){t=Y({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Gi(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Y({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var jo={isMounted:function(e){return(e=e._reactInternals)?Vt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=he(),o=wt(e),i=be(r,o);i.payload=t,n!=null&&(i.callback=n),t=yt(e,i,o),t!==null&&(Ve(t,e,o,r),Wr(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=he(),o=wt(e),i=be(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=yt(e,i,o),t!==null&&(Ve(t,e,o,r),Wr(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=he(),r=wt(e),o=be(n,r);o.tag=2,t!=null&&(o.callback=t),t=yt(e,o,r),t!==null&&(Ve(t,e,r,n),Wr(t,e,r))}};function ha(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!qn(n,r)||!qn(o,i):!0}function Pc(e,t,n){var r=!1,o=Et,i=t.contextType;return typeof i=="object"&&i!==null?i=De(i):(o=Ee(t)?Dt:de.current,r=t.contextTypes,i=(r=r!=null)?dn(e,o):Et),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=jo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function ma(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&jo.enqueueReplaceState(t,t.state,null)}function qi(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},ql(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=De(i):(i=Ee(t)?Dt:de.current,o.context=dn(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Gi(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&jo.enqueueReplaceState(o,o.state,null),fo(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function vn(e,t){try{var n="",r=t;do n+=pd(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function ci(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ji(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var $p=typeof WeakMap=="function"?WeakMap:Map;function Tc(e,t,n){n=be(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){yo||(yo=!0,ul=r),Ji(e,t)},n}function Rc(e,t,n){n=be(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Ji(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Ji(e,t),typeof r!="function"&&(gt===null?gt=new Set([this]):gt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function va(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new $p;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=eh.bind(null,e,t,n),t.then(e,e))}function ya(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ga(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=be(-1,1),t.tag=2,yt(n,t,1))),n.lanes|=1),e)}var Bp=it.ReactCurrentOwner,Se=!1;function pe(e,t,n,r){t.child=e===null?ic(t,null,n,r):hn(t,e.child,n,r)}function wa(e,t,n,r,o){n=n.render;var i=t.ref;return sn(t,o),r=tu(e,t,n,r,i,o),n=nu(),e!==null&&!Se?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,ot(e,t,o)):(W&&n&&Wl(t),t.flags|=1,pe(e,t,r,o),t.child)}function Sa(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!du(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Oc(e,t,i,r,o)):(e=Gr(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:qn,n(l,r)&&e.ref===t.ref)return ot(e,t,o)}return t.flags|=1,e=St(i,r),e.ref=t.ref,e.return=t,t.child=e}function Oc(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(qn(i,r)&&e.ref===t.ref)if(Se=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(Se=!0);else return t.lanes=e.lanes,ot(e,t,o)}return Zi(e,t,n,r,o)}function jc(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},$(rn,Ce),Ce|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,$(rn,Ce),Ce|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,$(rn,Ce),Ce|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,$(rn,Ce),Ce|=r;return pe(e,t,o,n),t.child}function Lc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Zi(e,t,n,r,o){var i=Ee(n)?Dt:de.current;return i=dn(t,i),sn(t,o),n=tu(e,t,n,r,i,o),r=nu(),e!==null&&!Se?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,ot(e,t,o)):(W&&r&&Wl(t),t.flags|=1,pe(e,t,n,o),t.child)}function ka(e,t,n,r,o){if(Ee(n)){var i=!0;lo(t)}else i=!1;if(sn(t,o),t.stateNode===null)Qr(e,t),Pc(t,n,r),qi(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,u=t.memoizedProps;l.props=u;var a=l.context,c=n.contextType;typeof c=="object"&&c!==null?c=De(c):(c=Ee(n)?Dt:de.current,c=dn(t,c));var p=n.getDerivedStateFromProps,h=typeof p=="function"||typeof l.getSnapshotBeforeUpdate=="function";h||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u!==r||a!==c)&&ma(t,l,r,c),at=!1;var m=t.memoizedState;l.state=m,fo(t,r,l,o),a=t.memoizedState,u!==r||m!==a||ke.current||at?(typeof p=="function"&&(Gi(t,n,p,r),a=t.memoizedState),(u=at||ha(t,n,u,r,m,a,c))?(h||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),l.props=r,l.state=a,l.context=c,r=u):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,uc(e,t),u=t.memoizedProps,c=t.type===t.elementType?u:Ue(t.type,u),l.props=c,h=t.pendingProps,m=l.context,a=n.contextType,typeof a=="object"&&a!==null?a=De(a):(a=Ee(n)?Dt:de.current,a=dn(t,a));var g=n.getDerivedStateFromProps;(p=typeof g=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u!==h||m!==a)&&ma(t,l,r,a),at=!1,m=t.memoizedState,l.state=m,fo(t,r,l,o);var S=t.memoizedState;u!==h||m!==S||ke.current||at?(typeof g=="function"&&(Gi(t,n,g,r),S=t.memoizedState),(c=at||ha(t,n,c,r,m,S,a)||!1)?(p||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,S,a),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,S,a)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||u===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=S),l.props=r,l.state=S,l.context=a,r=c):(typeof l.componentDidUpdate!="function"||u===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return bi(e,t,n,r,i,o)}function bi(e,t,n,r,o,i){Lc(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&la(t,n,!1),ot(e,t,i);r=t.stateNode,Bp.current=t;var u=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=hn(t,e.child,null,i),t.child=hn(t,null,u,i)):pe(e,t,u,i),t.memoizedState=r.state,o&&la(t,n,!0),t.child}function zc(e){var t=e.stateNode;t.pendingContext?ia(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ia(e,t.context,!1),Jl(e,t.containerInfo)}function Ea(e,t,n,r,o){return pn(),Kl(o),t.flags|=256,pe(e,t,n,r),t.child}var el={dehydrated:null,treeContext:null,retryLane:0};function tl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Dc(e,t,n){var r=t.pendingProps,o=K.current,i=!1,l=(t.flags&128)!==0,u;if((u=l)||(u=e!==null&&e.memoizedState===null?!1:(o&2)!==0),u?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),$(K,o&1),e===null)return Yi(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=Do(l,r,0,null),e=zt(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=tl(n),t.memoizedState=el,e):iu(t,l));if(o=e.memoizedState,o!==null&&(u=o.dehydrated,u!==null))return Vp(e,t,l,r,u,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,u=o.sibling;var a={mode:"hidden",children:r.children};return!(l&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=St(o,a),r.subtreeFlags=o.subtreeFlags&14680064),u!==null?i=St(u,i):(i=zt(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?tl(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=el,r}return i=e.child,e=i.sibling,r=St(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function iu(e,t){return t=Do({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Lr(e,t,n,r){return r!==null&&Kl(r),hn(t,e.child,null,n),e=iu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Vp(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=ci(Error(y(422))),Lr(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=Do({mode:"visible",children:r.children},o,0,null),i=zt(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&hn(t,e.child,null,l),t.child.memoizedState=tl(l),t.memoizedState=el,i);if(!(t.mode&1))return Lr(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var u=r.dgst;return r=u,i=Error(y(419)),r=ci(i,r,void 0),Lr(e,t,l,r)}if(u=(l&e.childLanes)!==0,Se||u){if(r=re,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,rt(e,o),Ve(r,e,o,-1))}return fu(),r=ci(Error(y(421))),Lr(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=th.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,xe=vt(o.nextSibling),Ne=t,W=!0,$e=null,e!==null&&(Re[Oe++]=Je,Re[Oe++]=Ze,Re[Oe++]=Mt,Je=e.id,Ze=e.overflow,Mt=t),t=iu(t,r.children),t.flags|=4096,t)}function _a(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Xi(e.return,t,n)}function fi(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Mc(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(pe(e,t,r.children,n),r=K.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&_a(e,n,t);else if(e.tag===19)_a(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if($(K,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&po(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),fi(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&po(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}fi(t,!0,n,null,i);break;case"together":fi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Qr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ot(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ut|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(y(153));if(t.child!==null){for(e=t.child,n=St(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=St(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Wp(e,t,n){switch(t.tag){case 3:zc(t),pn();break;case 5:ac(t);break;case 1:Ee(t.type)&&lo(t);break;case 4:Jl(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;$(so,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?($(K,K.current&1),t.flags|=128,null):n&t.child.childLanes?Dc(e,t,n):($(K,K.current&1),e=ot(e,t,n),e!==null?e.sibling:null);$(K,K.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Mc(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),$(K,K.current),r)break;return null;case 22:case 23:return t.lanes=0,jc(e,t,n)}return ot(e,t,n)}var Ac,nl,Uc,Fc;Ac=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};nl=function(){};Uc=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,jt(Xe.current);var i=null;switch(n){case"input":o=Ci(e,o),r=Ci(e,r),i=[];break;case"select":o=Y({},o,{value:void 0}),r=Y({},r,{value:void 0}),i=[];break;case"textarea":o=Ii(e,o),r=Ii(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=oo)}Ti(n,r);var l;n=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var u=o[c];for(l in u)u.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Wn.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var a=r[c];if(u=o?.[c],r.hasOwnProperty(c)&&a!==u&&(a!=null||u!=null))if(c==="style")if(u){for(l in u)!u.hasOwnProperty(l)||a&&a.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in a)a.hasOwnProperty(l)&&u[l]!==a[l]&&(n||(n={}),n[l]=a[l])}else n||(i||(i=[]),i.push(c,n)),n=a;else c==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,u=u?u.__html:void 0,a!=null&&u!==a&&(i=i||[]).push(c,a)):c==="children"?typeof a!="string"&&typeof a!="number"||(i=i||[]).push(c,""+a):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Wn.hasOwnProperty(c)?(a!=null&&c==="onScroll"&&B("scroll",e),i||u===a||(i=[])):(i=i||[]).push(c,a))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};Fc=function(e,t,n,r){n!==r&&(t.flags|=4)};function Pn(e,t){if(!W)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function se(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Hp(e,t,n){var r=t.pendingProps;switch(Hl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return se(t),null;case 1:return Ee(t.type)&&io(),se(t),null;case 3:return r=t.stateNode,mn(),V(ke),V(de),bl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Or(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,$e!==null&&(cl($e),$e=null))),nl(e,t),se(t),null;case 5:Zl(t);var o=jt(tr.current);if(n=t.type,e!==null&&t.stateNode!=null)Uc(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(y(166));return se(t),null}if(e=jt(Xe.current),Or(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Qe]=t,r[bn]=i,e=(t.mode&1)!==0,n){case"dialog":B("cancel",r),B("close",r);break;case"iframe":case"object":case"embed":B("load",r);break;case"video":case"audio":for(o=0;o<Ln.length;o++)B(Ln[o],r);break;case"source":B("error",r);break;case"img":case"image":case"link":B("error",r),B("load",r);break;case"details":B("toggle",r);break;case"input":ju(r,i),B("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},B("invalid",r);break;case"textarea":zu(r,i),B("invalid",r)}Ti(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var u=i[l];l==="children"?typeof u=="string"?r.textContent!==u&&(i.suppressHydrationWarning!==!0&&Rr(r.textContent,u,e),o=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(i.suppressHydrationWarning!==!0&&Rr(r.textContent,u,e),o=["children",""+u]):Wn.hasOwnProperty(l)&&u!=null&&l==="onScroll"&&B("scroll",r)}switch(n){case"input":Er(r),Lu(r,i,!0);break;case"textarea":Er(r),Du(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=oo)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ps(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[Qe]=t,e[bn]=r,Ac(e,t,!1,!1),t.stateNode=e;e:{switch(l=Ri(n,r),n){case"dialog":B("cancel",e),B("close",e),o=r;break;case"iframe":case"object":case"embed":B("load",e),o=r;break;case"video":case"audio":for(o=0;o<Ln.length;o++)B(Ln[o],e);o=r;break;case"source":B("error",e),o=r;break;case"img":case"image":case"link":B("error",e),B("load",e),o=r;break;case"details":B("toggle",e),o=r;break;case"input":ju(e,r),o=Ci(e,r),B("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=Y({},r,{value:void 0}),B("invalid",e);break;case"textarea":zu(e,r),o=Ii(e,r),B("invalid",e);break;default:o=r}Ti(n,o),u=o;for(i in u)if(u.hasOwnProperty(i)){var a=u[i];i==="style"?vs(e,a):i==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&hs(e,a)):i==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Hn(e,a):typeof a=="number"&&Hn(e,""+a):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Wn.hasOwnProperty(i)?a!=null&&i==="onScroll"&&B("scroll",e):a!=null&&Tl(e,i,a,l))}switch(n){case"input":Er(e),Lu(e,r,!1);break;case"textarea":Er(e),Du(e);break;case"option":r.value!=null&&e.setAttribute("value",""+kt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?on(e,!!r.multiple,i,!1):r.defaultValue!=null&&on(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=oo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return se(t),null;case 6:if(e&&t.stateNode!=null)Fc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(y(166));if(n=jt(tr.current),jt(Xe.current),Or(t)){if(r=t.stateNode,n=t.memoizedProps,r[Qe]=t,(i=r.nodeValue!==n)&&(e=Ne,e!==null))switch(e.tag){case 3:Rr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Rr(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Qe]=t,t.stateNode=r}return se(t),null;case 13:if(V(K),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(W&&xe!==null&&t.mode&1&&!(t.flags&128))rc(),pn(),t.flags|=98560,i=!1;else if(i=Or(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(y(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(y(317));i[Qe]=t}else pn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;se(t),i=!1}else $e!==null&&(cl($e),$e=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||K.current&1?ee===0&&(ee=3):fu())),t.updateQueue!==null&&(t.flags|=4),se(t),null);case 4:return mn(),nl(e,t),e===null&&Jn(t.stateNode.containerInfo),se(t),null;case 10:return Xl(t.type._context),se(t),null;case 17:return Ee(t.type)&&io(),se(t),null;case 19:if(V(K),i=t.memoizedState,i===null)return se(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)Pn(i,!1);else{if(ee!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=po(e),l!==null){for(t.flags|=128,Pn(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return $(K,K.current&1|2),t.child}e=e.sibling}i.tail!==null&&q()>yn&&(t.flags|=128,r=!0,Pn(i,!1),t.lanes=4194304)}else{if(!r)if(e=po(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Pn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!W)return se(t),null}else 2*q()-i.renderingStartTime>yn&&n!==1073741824&&(t.flags|=128,r=!0,Pn(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=q(),t.sibling=null,n=K.current,$(K,r?n&1|2:n&1),t):(se(t),null);case 22:case 23:return cu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ce&1073741824&&(se(t),t.subtreeFlags&6&&(t.flags|=8192)):se(t),null;case 24:return null;case 25:return null}throw Error(y(156,t.tag))}function Kp(e,t){switch(Hl(t),t.tag){case 1:return Ee(t.type)&&io(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return mn(),V(ke),V(de),bl(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Zl(t),null;case 13:if(V(K),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(y(340));pn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return V(K),null;case 4:return mn(),null;case 10:return Xl(t.type._context),null;case 22:case 23:return cu(),null;case 24:return null;default:return null}}var zr=!1,fe=!1,Qp=typeof WeakSet=="function"?WeakSet:Set,_=null;function nn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){X(e,t,r)}else n.current=null}function rl(e,t,n){try{n()}catch(r){X(e,t,r)}}var Ca=!1;function Yp(e,t){if($i=to,e=Hs(),Vl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,u=-1,a=-1,c=0,p=0,h=e,m=null;t:for(;;){for(var g;h!==n||o!==0&&h.nodeType!==3||(u=l+o),h!==i||r!==0&&h.nodeType!==3||(a=l+r),h.nodeType===3&&(l+=h.nodeValue.length),(g=h.firstChild)!==null;)m=h,h=g;for(;;){if(h===e)break t;if(m===n&&++c===o&&(u=l),m===i&&++p===r&&(a=l),(g=h.nextSibling)!==null)break;h=m,m=h.parentNode}h=g}n=u===-1||a===-1?null:{start:u,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Bi={focusedElem:e,selectionRange:n},to=!1,_=t;_!==null;)if(t=_,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,_=e;else for(;_!==null;){t=_;try{var S=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var w=S.memoizedProps,x=S.memoizedState,f=t.stateNode,s=f.getSnapshotBeforeUpdate(t.elementType===t.type?w:Ue(t.type,w),x);f.__reactInternalSnapshotBeforeUpdate=s}break;case 3:var d=t.stateNode.containerInfo;d.nodeType===1?d.textContent="":d.nodeType===9&&d.documentElement&&d.removeChild(d.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(y(163))}}catch(v){X(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,_=e;break}_=t.return}return S=Ca,Ca=!1,S}function $n(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&rl(t,n,i)}o=o.next}while(o!==r)}}function Lo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ol(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function $c(e){var t=e.alternate;t!==null&&(e.alternate=null,$c(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Qe],delete t[bn],delete t[Hi],delete t[Tp],delete t[Rp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Bc(e){return e.tag===5||e.tag===3||e.tag===4}function xa(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Bc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function il(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=oo));else if(r!==4&&(e=e.child,e!==null))for(il(e,t,n),e=e.sibling;e!==null;)il(e,t,n),e=e.sibling}function ll(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ll(e,t,n),e=e.sibling;e!==null;)ll(e,t,n),e=e.sibling}var oe=null,Fe=!1;function lt(e,t,n){for(n=n.child;n!==null;)Vc(e,t,n),n=n.sibling}function Vc(e,t,n){if(Ye&&typeof Ye.onCommitFiberUnmount=="function")try{Ye.onCommitFiberUnmount(xo,n)}catch{}switch(n.tag){case 5:fe||nn(n,t);case 6:var r=oe,o=Fe;oe=null,lt(e,t,n),oe=r,Fe=o,oe!==null&&(Fe?(e=oe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):oe.removeChild(n.stateNode));break;case 18:oe!==null&&(Fe?(e=oe,n=n.stateNode,e.nodeType===8?oi(e.parentNode,n):e.nodeType===1&&oi(e,n),Xn(e)):oi(oe,n.stateNode));break;case 4:r=oe,o=Fe,oe=n.stateNode.containerInfo,Fe=!0,lt(e,t,n),oe=r,Fe=o;break;case 0:case 11:case 14:case 15:if(!fe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&rl(n,t,l),o=o.next}while(o!==r)}lt(e,t,n);break;case 1:if(!fe&&(nn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(u){X(n,t,u)}lt(e,t,n);break;case 21:lt(e,t,n);break;case 22:n.mode&1?(fe=(r=fe)||n.memoizedState!==null,lt(e,t,n),fe=r):lt(e,t,n);break;default:lt(e,t,n)}}function Na(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Qp),t.forEach(function(r){var o=nh.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Ae(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,u=l;e:for(;u!==null;){switch(u.tag){case 5:oe=u.stateNode,Fe=!1;break e;case 3:oe=u.stateNode.containerInfo,Fe=!0;break e;case 4:oe=u.stateNode.containerInfo,Fe=!0;break e}u=u.return}if(oe===null)throw Error(y(160));Vc(i,l,o),oe=null,Fe=!1;var a=o.alternate;a!==null&&(a.return=null),o.return=null}catch(c){X(o,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Wc(t,e),t=t.sibling}function Wc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ae(t,e),He(e),r&4){try{$n(3,e,e.return),Lo(3,e)}catch(w){X(e,e.return,w)}try{$n(5,e,e.return)}catch(w){X(e,e.return,w)}}break;case 1:Ae(t,e),He(e),r&512&&n!==null&&nn(n,n.return);break;case 5:if(Ae(t,e),He(e),r&512&&n!==null&&nn(n,n.return),e.flags&32){var o=e.stateNode;try{Hn(o,"")}catch(w){X(e,e.return,w)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,u=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{u==="input"&&i.type==="radio"&&i.name!=null&&fs(o,i),Ri(u,l);var c=Ri(u,i);for(l=0;l<a.length;l+=2){var p=a[l],h=a[l+1];p==="style"?vs(o,h):p==="dangerouslySetInnerHTML"?hs(o,h):p==="children"?Hn(o,h):Tl(o,p,h,c)}switch(u){case"input":xi(o,i);break;case"textarea":ds(o,i);break;case"select":var m=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var g=i.value;g!=null?on(o,!!i.multiple,g,!1):m!==!!i.multiple&&(i.defaultValue!=null?on(o,!!i.multiple,i.defaultValue,!0):on(o,!!i.multiple,i.multiple?[]:"",!1))}o[bn]=i}catch(w){X(e,e.return,w)}}break;case 6:if(Ae(t,e),He(e),r&4){if(e.stateNode===null)throw Error(y(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(w){X(e,e.return,w)}}break;case 3:if(Ae(t,e),He(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Xn(t.containerInfo)}catch(w){X(e,e.return,w)}break;case 4:Ae(t,e),He(e);break;case 13:Ae(t,e),He(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(au=q())),r&4&&Na(e);break;case 22:if(p=n!==null&&n.memoizedState!==null,e.mode&1?(fe=(c=fe)||p,Ae(t,e),fe=c):Ae(t,e),He(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!p&&e.mode&1)for(_=e,p=e.child;p!==null;){for(h=_=p;_!==null;){switch(m=_,g=m.child,m.tag){case 0:case 11:case 14:case 15:$n(4,m,m.return);break;case 1:nn(m,m.return);var S=m.stateNode;if(typeof S.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,S.props=t.memoizedProps,S.state=t.memoizedState,S.componentWillUnmount()}catch(w){X(r,n,w)}}break;case 5:nn(m,m.return);break;case 22:if(m.memoizedState!==null){Pa(h);continue}}g!==null?(g.return=m,_=g):Pa(h)}p=p.sibling}e:for(p=null,h=e;;){if(h.tag===5){if(p===null){p=h;try{o=h.stateNode,c?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(u=h.stateNode,a=h.memoizedProps.style,l=a!=null&&a.hasOwnProperty("display")?a.display:null,u.style.display=ms("display",l))}catch(w){X(e,e.return,w)}}}else if(h.tag===6){if(p===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(w){X(e,e.return,w)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;p===h&&(p=null),h=h.return}p===h&&(p=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Ae(t,e),He(e),r&4&&Na(e);break;case 21:break;default:Ae(t,e),He(e)}}function He(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Bc(n)){var r=n;break e}n=n.return}throw Error(y(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Hn(o,""),r.flags&=-33);var i=xa(e);ll(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,u=xa(e);il(e,u,l);break;default:throw Error(y(161))}}catch(a){X(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Xp(e,t,n){_=e,Hc(e)}function Hc(e,t,n){for(var r=(e.mode&1)!==0;_!==null;){var o=_,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||zr;if(!l){var u=o.alternate,a=u!==null&&u.memoizedState!==null||fe;u=zr;var c=fe;if(zr=l,(fe=a)&&!c)for(_=o;_!==null;)l=_,a=l.child,l.tag===22&&l.memoizedState!==null?Ta(o):a!==null?(a.return=l,_=a):Ta(o);for(;i!==null;)_=i,Hc(i),i=i.sibling;_=o,zr=u,fe=c}Ia(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,_=i):Ia(e)}}function Ia(e){for(;_!==null;){var t=_;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:fe||Lo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!fe)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Ue(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&fa(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}fa(t,l,n)}break;case 5:var u=t.stateNode;if(n===null&&t.flags&4){n=u;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var p=c.memoizedState;if(p!==null){var h=p.dehydrated;h!==null&&Xn(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(y(163))}fe||t.flags&512&&ol(t)}catch(m){X(t,t.return,m)}}if(t===e){_=null;break}if(n=t.sibling,n!==null){n.return=t.return,_=n;break}_=t.return}}function Pa(e){for(;_!==null;){var t=_;if(t===e){_=null;break}var n=t.sibling;if(n!==null){n.return=t.return,_=n;break}_=t.return}}function Ta(e){for(;_!==null;){var t=_;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Lo(4,t)}catch(a){X(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(a){X(t,o,a)}}var i=t.return;try{ol(t)}catch(a){X(t,i,a)}break;case 5:var l=t.return;try{ol(t)}catch(a){X(t,l,a)}}}catch(a){X(t,t.return,a)}if(t===e){_=null;break}var u=t.sibling;if(u!==null){u.return=t.return,_=u;break}_=t.return}}var Gp=Math.ceil,vo=it.ReactCurrentDispatcher,lu=it.ReactCurrentOwner,ze=it.ReactCurrentBatchConfig,M=0,re=null,J=null,ie=0,Ce=0,rn=Ct(0),ee=0,ir=null,Ut=0,zo=0,uu=0,Bn=null,we=null,au=0,yn=1/0,Ge=null,yo=!1,ul=null,gt=null,Dr=!1,dt=null,go=0,Vn=0,al=null,Yr=-1,Xr=0;function he(){return M&6?q():Yr!==-1?Yr:Yr=q()}function wt(e){return e.mode&1?M&2&&ie!==0?ie&-ie:jp.transition!==null?(Xr===0&&(Xr=Ps()),Xr):(e=U,e!==0||(e=window.event,e=e===void 0?16:Ds(e.type)),e):1}function Ve(e,t,n,r){if(50<Vn)throw Vn=0,al=null,Error(y(185));dr(e,n,r),(!(M&2)||e!==re)&&(e===re&&(!(M&2)&&(zo|=n),ee===4&&ct(e,ie)),_e(e,r),n===1&&M===0&&!(t.mode&1)&&(yn=q()+500,Ro&&xt()))}function _e(e,t){var n=e.callbackNode;jd(e,t);var r=eo(e,e===re?ie:0);if(r===0)n!==null&&Uu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Uu(n),t===1)e.tag===0?Op(Ra.bind(null,e)):ec(Ra.bind(null,e)),Ip(function(){!(M&6)&&xt()}),n=null;else{switch(Ts(r)){case 1:n=zl;break;case 4:n=Ns;break;case 16:n=br;break;case 536870912:n=Is;break;default:n=br}n=Zc(n,Kc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Kc(e,t){if(Yr=-1,Xr=0,M&6)throw Error(y(327));var n=e.callbackNode;if(cn()&&e.callbackNode!==n)return null;var r=eo(e,e===re?ie:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=wo(e,r);else{t=r;var o=M;M|=2;var i=Yc();(re!==e||ie!==t)&&(Ge=null,yn=q()+500,Lt(e,t));do try{Zp();break}catch(u){Qc(e,u)}while(!0);Yl(),vo.current=i,M=o,J!==null?t=0:(re=null,ie=0,t=ee)}if(t!==0){if(t===2&&(o=Di(e),o!==0&&(r=o,t=sl(e,o))),t===1)throw n=ir,Lt(e,0),ct(e,r),_e(e,q()),n;if(t===6)ct(e,r);else{if(o=e.current.alternate,!(r&30)&&!qp(o)&&(t=wo(e,r),t===2&&(i=Di(e),i!==0&&(r=i,t=sl(e,i))),t===1))throw n=ir,Lt(e,0),ct(e,r),_e(e,q()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(y(345));case 2:Tt(e,we,Ge);break;case 3:if(ct(e,r),(r&130023424)===r&&(t=au+500-q(),10<t)){if(eo(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){he(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Wi(Tt.bind(null,e,we,Ge),t);break}Tt(e,we,Ge);break;case 4:if(ct(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-Be(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Gp(r/1960))-r,10<r){e.timeoutHandle=Wi(Tt.bind(null,e,we,Ge),r);break}Tt(e,we,Ge);break;case 5:Tt(e,we,Ge);break;default:throw Error(y(329))}}}return _e(e,q()),e.callbackNode===n?Kc.bind(null,e):null}function sl(e,t){var n=Bn;return e.current.memoizedState.isDehydrated&&(Lt(e,t).flags|=256),e=wo(e,t),e!==2&&(t=we,we=n,t!==null&&cl(t)),e}function cl(e){we===null?we=e:we.push.apply(we,e)}function qp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!We(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ct(e,t){for(t&=~uu,t&=~zo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Be(t),r=1<<n;e[n]=-1,t&=~r}}function Ra(e){if(M&6)throw Error(y(327));cn();var t=eo(e,0);if(!(t&1))return _e(e,q()),null;var n=wo(e,t);if(e.tag!==0&&n===2){var r=Di(e);r!==0&&(t=r,n=sl(e,r))}if(n===1)throw n=ir,Lt(e,0),ct(e,t),_e(e,q()),n;if(n===6)throw Error(y(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Tt(e,we,Ge),_e(e,q()),null}function su(e,t){var n=M;M|=1;try{return e(t)}finally{M=n,M===0&&(yn=q()+500,Ro&&xt())}}function Ft(e){dt!==null&&dt.tag===0&&!(M&6)&&cn();var t=M;M|=1;var n=ze.transition,r=U;try{if(ze.transition=null,U=1,e)return e()}finally{U=r,ze.transition=n,M=t,!(M&6)&&xt()}}function cu(){Ce=rn.current,V(rn)}function Lt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Np(n)),J!==null)for(n=J.return;n!==null;){var r=n;switch(Hl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&io();break;case 3:mn(),V(ke),V(de),bl();break;case 5:Zl(r);break;case 4:mn();break;case 13:V(K);break;case 19:V(K);break;case 10:Xl(r.type._context);break;case 22:case 23:cu()}n=n.return}if(re=e,J=e=St(e.current,null),ie=Ce=t,ee=0,ir=null,uu=zo=Ut=0,we=Bn=null,Ot!==null){for(t=0;t<Ot.length;t++)if(n=Ot[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}Ot=null}return e}function Qc(e,t){do{var n=J;try{if(Yl(),Hr.current=mo,ho){for(var r=Q.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}ho=!1}if(At=0,ne=b=Q=null,Fn=!1,nr=0,lu.current=null,n===null||n.return===null){ee=1,ir=t,J=null;break}e:{var i=e,l=n.return,u=n,a=t;if(t=ie,u.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var c=a,p=u,h=p.tag;if(!(p.mode&1)&&(h===0||h===11||h===15)){var m=p.alternate;m?(p.updateQueue=m.updateQueue,p.memoizedState=m.memoizedState,p.lanes=m.lanes):(p.updateQueue=null,p.memoizedState=null)}var g=ya(l);if(g!==null){g.flags&=-257,ga(g,l,u,i,t),g.mode&1&&va(i,c,t),t=g,a=c;var S=t.updateQueue;if(S===null){var w=new Set;w.add(a),t.updateQueue=w}else S.add(a);break e}else{if(!(t&1)){va(i,c,t),fu();break e}a=Error(y(426))}}else if(W&&u.mode&1){var x=ya(l);if(x!==null){!(x.flags&65536)&&(x.flags|=256),ga(x,l,u,i,t),Kl(vn(a,u));break e}}i=a=vn(a,u),ee!==4&&(ee=2),Bn===null?Bn=[i]:Bn.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var f=Tc(i,a,t);ca(i,f);break e;case 1:u=a;var s=i.type,d=i.stateNode;if(!(i.flags&128)&&(typeof s.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(gt===null||!gt.has(d)))){i.flags|=65536,t&=-t,i.lanes|=t;var v=Rc(i,u,t);ca(i,v);break e}}i=i.return}while(i!==null)}Gc(n)}catch(E){t=E,J===n&&n!==null&&(J=n=n.return);continue}break}while(!0)}function Yc(){var e=vo.current;return vo.current=mo,e===null?mo:e}function fu(){(ee===0||ee===3||ee===2)&&(ee=4),re===null||!(Ut&268435455)&&!(zo&268435455)||ct(re,ie)}function wo(e,t){var n=M;M|=2;var r=Yc();(re!==e||ie!==t)&&(Ge=null,Lt(e,t));do try{Jp();break}catch(o){Qc(e,o)}while(!0);if(Yl(),M=n,vo.current=r,J!==null)throw Error(y(261));return re=null,ie=0,ee}function Jp(){for(;J!==null;)Xc(J)}function Zp(){for(;J!==null&&!_d();)Xc(J)}function Xc(e){var t=Jc(e.alternate,e,Ce);e.memoizedProps=e.pendingProps,t===null?Gc(e):J=t,lu.current=null}function Gc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Kp(n,t),n!==null){n.flags&=32767,J=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ee=6,J=null;return}}else if(n=Hp(n,t,Ce),n!==null){J=n;return}if(t=t.sibling,t!==null){J=t;return}J=t=e}while(t!==null);ee===0&&(ee=5)}function Tt(e,t,n){var r=U,o=ze.transition;try{ze.transition=null,U=1,bp(e,t,n,r)}finally{ze.transition=o,U=r}return null}function bp(e,t,n,r){do cn();while(dt!==null);if(M&6)throw Error(y(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(y(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Ld(e,i),e===re&&(J=re=null,ie=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Dr||(Dr=!0,Zc(br,function(){return cn(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=ze.transition,ze.transition=null;var l=U;U=1;var u=M;M|=4,lu.current=null,Yp(e,n),Wc(n,e),wp(Bi),to=!!$i,Bi=$i=null,e.current=n,Xp(n),Cd(),M=u,U=l,ze.transition=i}else e.current=n;if(Dr&&(Dr=!1,dt=e,go=o),i=e.pendingLanes,i===0&&(gt=null),Id(n.stateNode),_e(e,q()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(yo)throw yo=!1,e=ul,ul=null,e;return go&1&&e.tag!==0&&cn(),i=e.pendingLanes,i&1?e===al?Vn++:(Vn=0,al=e):Vn=0,xt(),null}function cn(){if(dt!==null){var e=Ts(go),t=ze.transition,n=U;try{if(ze.transition=null,U=16>e?16:e,dt===null)var r=!1;else{if(e=dt,dt=null,go=0,M&6)throw Error(y(331));var o=M;for(M|=4,_=e.current;_!==null;){var i=_,l=i.child;if(_.flags&16){var u=i.deletions;if(u!==null){for(var a=0;a<u.length;a++){var c=u[a];for(_=c;_!==null;){var p=_;switch(p.tag){case 0:case 11:case 15:$n(8,p,i)}var h=p.child;if(h!==null)h.return=p,_=h;else for(;_!==null;){p=_;var m=p.sibling,g=p.return;if($c(p),p===c){_=null;break}if(m!==null){m.return=g,_=m;break}_=g}}}var S=i.alternate;if(S!==null){var w=S.child;if(w!==null){S.child=null;do{var x=w.sibling;w.sibling=null,w=x}while(w!==null)}}_=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,_=l;else e:for(;_!==null;){if(i=_,i.flags&2048)switch(i.tag){case 0:case 11:case 15:$n(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,_=f;break e}_=i.return}}var s=e.current;for(_=s;_!==null;){l=_;var d=l.child;if(l.subtreeFlags&2064&&d!==null)d.return=l,_=d;else e:for(l=s;_!==null;){if(u=_,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:Lo(9,u)}}catch(E){X(u,u.return,E)}if(u===l){_=null;break e}var v=u.sibling;if(v!==null){v.return=u.return,_=v;break e}_=u.return}}if(M=o,xt(),Ye&&typeof Ye.onPostCommitFiberRoot=="function")try{Ye.onPostCommitFiberRoot(xo,e)}catch{}r=!0}return r}finally{U=n,ze.transition=t}}return!1}function Oa(e,t,n){t=vn(n,t),t=Tc(e,t,1),e=yt(e,t,1),t=he(),e!==null&&(dr(e,1,t),_e(e,t))}function X(e,t,n){if(e.tag===3)Oa(e,e,n);else for(;t!==null;){if(t.tag===3){Oa(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(gt===null||!gt.has(r))){e=vn(n,e),e=Rc(t,e,1),t=yt(t,e,1),e=he(),t!==null&&(dr(t,1,e),_e(t,e));break}}t=t.return}}function eh(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=he(),e.pingedLanes|=e.suspendedLanes&n,re===e&&(ie&n)===n&&(ee===4||ee===3&&(ie&130023424)===ie&&500>q()-au?Lt(e,0):uu|=n),_e(e,t)}function qc(e,t){t===0&&(e.mode&1?(t=xr,xr<<=1,!(xr&130023424)&&(xr=4194304)):t=1);var n=he();e=rt(e,t),e!==null&&(dr(e,t,n),_e(e,n))}function th(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qc(e,n)}function nh(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(y(314))}r!==null&&r.delete(t),qc(e,n)}var Jc;Jc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ke.current)Se=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Se=!1,Wp(e,t,n);Se=!!(e.flags&131072)}else Se=!1,W&&t.flags&1048576&&tc(t,ao,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Qr(e,t),e=t.pendingProps;var o=dn(t,de.current);sn(t,n),o=tu(null,t,r,e,o,n);var i=nu();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ee(r)?(i=!0,lo(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,ql(t),o.updater=jo,t.stateNode=o,o._reactInternals=t,qi(t,r,e,n),t=bi(null,t,r,!0,i,n)):(t.tag=0,W&&i&&Wl(t),pe(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Qr(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=oh(r),e=Ue(r,e),o){case 0:t=Zi(null,t,r,e,n);break e;case 1:t=ka(null,t,r,e,n);break e;case 11:t=wa(null,t,r,e,n);break e;case 14:t=Sa(null,t,r,Ue(r.type,e),n);break e}throw Error(y(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ue(r,o),Zi(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ue(r,o),ka(e,t,r,o,n);case 3:e:{if(zc(t),e===null)throw Error(y(387));r=t.pendingProps,i=t.memoizedState,o=i.element,uc(e,t),fo(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=vn(Error(y(423)),t),t=Ea(e,t,r,n,o);break e}else if(r!==o){o=vn(Error(y(424)),t),t=Ea(e,t,r,n,o);break e}else for(xe=vt(t.stateNode.containerInfo.firstChild),Ne=t,W=!0,$e=null,n=ic(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(pn(),r===o){t=ot(e,t,n);break e}pe(e,t,r,n)}t=t.child}return t;case 5:return ac(t),e===null&&Yi(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,Vi(r,o)?l=null:i!==null&&Vi(r,i)&&(t.flags|=32),Lc(e,t),pe(e,t,l,n),t.child;case 6:return e===null&&Yi(t),null;case 13:return Dc(e,t,n);case 4:return Jl(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=hn(t,null,r,n):pe(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ue(r,o),wa(e,t,r,o,n);case 7:return pe(e,t,t.pendingProps,n),t.child;case 8:return pe(e,t,t.pendingProps.children,n),t.child;case 12:return pe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,$(so,r._currentValue),r._currentValue=l,i!==null)if(We(i.value,l)){if(i.children===o.children&&!ke.current){t=ot(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var u=i.dependencies;if(u!==null){l=i.child;for(var a=u.firstContext;a!==null;){if(a.context===r){if(i.tag===1){a=be(-1,n&-n),a.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var p=c.pending;p===null?a.next=a:(a.next=p.next,p.next=a),c.pending=a}}i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),Xi(i.return,n,t),u.lanes|=n;break}a=a.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(y(341));l.lanes|=n,u=l.alternate,u!==null&&(u.lanes|=n),Xi(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}pe(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,sn(t,n),o=De(o),r=r(o),t.flags|=1,pe(e,t,r,n),t.child;case 14:return r=t.type,o=Ue(r,t.pendingProps),o=Ue(r.type,o),Sa(e,t,r,o,n);case 15:return Oc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ue(r,o),Qr(e,t),t.tag=1,Ee(r)?(e=!0,lo(t)):e=!1,sn(t,n),Pc(t,r,o),qi(t,r,o,n),bi(null,t,r,!0,e,n);case 19:return Mc(e,t,n);case 22:return jc(e,t,n)}throw Error(y(156,t.tag))};function Zc(e,t){return xs(e,t)}function rh(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function je(e,t,n,r){return new rh(e,t,n,r)}function du(e){return e=e.prototype,!(!e||!e.isReactComponent)}function oh(e){if(typeof e=="function")return du(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ol)return 11;if(e===jl)return 14}return 2}function St(e,t){var n=e.alternate;return n===null?(n=je(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Gr(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")du(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Yt:return zt(n.children,o,i,t);case Rl:l=8,o|=8;break;case Si:return e=je(12,n,t,o|2),e.elementType=Si,e.lanes=i,e;case ki:return e=je(13,n,t,o),e.elementType=ki,e.lanes=i,e;case Ei:return e=je(19,n,t,o),e.elementType=Ei,e.lanes=i,e;case as:return Do(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ls:l=10;break e;case us:l=9;break e;case Ol:l=11;break e;case jl:l=14;break e;case ut:l=16,r=null;break e}throw Error(y(130,e==null?e:typeof e,""))}return t=je(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function zt(e,t,n,r){return e=je(7,e,r,t),e.lanes=n,e}function Do(e,t,n,r){return e=je(22,e,r,t),e.elementType=as,e.lanes=n,e.stateNode={isHidden:!1},e}function di(e,t,n){return e=je(6,e,null,t),e.lanes=n,e}function pi(e,t,n){return t=je(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function ih(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Yo(0),this.expirationTimes=Yo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Yo(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function pu(e,t,n,r,o,i,l,u,a){return e=new ih(e,t,n,u,a),t===1?(t=1,i===!0&&(t|=8)):t=0,i=je(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ql(i),e}function lh(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Qt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function bc(e){if(!e)return Et;e=e._reactInternals;e:{if(Vt(e)!==e||e.tag!==1)throw Error(y(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ee(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(y(171))}if(e.tag===1){var n=e.type;if(Ee(n))return bs(e,n,t)}return t}function ef(e,t,n,r,o,i,l,u,a){return e=pu(n,r,!0,e,o,i,l,u,a),e.context=bc(null),n=e.current,r=he(),o=wt(n),i=be(r,o),i.callback=t??null,yt(n,i,o),e.current.lanes=o,dr(e,o,r),_e(e,r),e}function Mo(e,t,n,r){var o=t.current,i=he(),l=wt(o);return n=bc(n),t.context===null?t.context=n:t.pendingContext=n,t=be(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=yt(o,t,l),e!==null&&(Ve(e,o,l,i),Wr(e,o,l)),l}function So(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ja(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function hu(e,t){ja(e,t),(e=e.alternate)&&ja(e,t)}function uh(){return null}var tf=typeof reportError=="function"?reportError:function(e){console.error(e)};function mu(e){this._internalRoot=e}Ao.prototype.render=mu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(y(409));Mo(e,t,null,null)};Ao.prototype.unmount=mu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ft(function(){Mo(null,e,null,null)}),t[nt]=null}};function Ao(e){this._internalRoot=e}Ao.prototype.unstable_scheduleHydration=function(e){if(e){var t=js();e={blockedOn:null,target:e,priority:t};for(var n=0;n<st.length&&t!==0&&t<st[n].priority;n++);st.splice(n,0,e),n===0&&zs(e)}};function vu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Uo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function La(){}function ah(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var c=So(l);i.call(c)}}var l=ef(t,r,e,0,null,!1,!1,"",La);return e._reactRootContainer=l,e[nt]=l.current,Jn(e.nodeType===8?e.parentNode:e),Ft(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var u=r;r=function(){var c=So(a);u.call(c)}}var a=pu(e,0,!1,null,null,!1,!1,"",La);return e._reactRootContainer=a,e[nt]=a.current,Jn(e.nodeType===8?e.parentNode:e),Ft(function(){Mo(t,a,n,r)}),a}function Fo(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var u=o;o=function(){var a=So(l);u.call(a)}}Mo(t,l,e,o)}else l=ah(n,t,e,o,r);return So(l)}Rs=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=jn(t.pendingLanes);n!==0&&(Dl(t,n|1),_e(t,q()),!(M&6)&&(yn=q()+500,xt()))}break;case 13:Ft(function(){var r=rt(e,1);if(r!==null){var o=he();Ve(r,e,1,o)}}),hu(e,1)}};Ml=function(e){if(e.tag===13){var t=rt(e,134217728);if(t!==null){var n=he();Ve(t,e,134217728,n)}hu(e,134217728)}};Os=function(e){if(e.tag===13){var t=wt(e),n=rt(e,t);if(n!==null){var r=he();Ve(n,e,t,r)}hu(e,t)}};js=function(){return U};Ls=function(e,t){var n=U;try{return U=e,t()}finally{U=n}};ji=function(e,t,n){switch(t){case"input":if(xi(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=To(r);if(!o)throw Error(y(90));cs(r),xi(r,o)}}}break;case"textarea":ds(e,n);break;case"select":t=n.value,t!=null&&on(e,!!n.multiple,t,!1)}};ws=su;Ss=Ft;var sh={usingClientEntryPoint:!1,Events:[hr,Jt,To,ys,gs,su]},Tn={findFiberByHostInstance:Rt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ch={bundleType:Tn.bundleType,version:Tn.version,rendererPackageName:Tn.rendererPackageName,rendererConfig:Tn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:it.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=_s(e),e===null?null:e.stateNode},findFiberByHostInstance:Tn.findFiberByHostInstance||uh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Mr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Mr.isDisabled&&Mr.supportsFiber)try{xo=Mr.inject(ch),Ye=Mr}catch{}}Pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sh;Pe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!vu(t))throw Error(y(200));return lh(e,t,null,n)};Pe.createRoot=function(e,t){if(!vu(e))throw Error(y(299));var n=!1,r="",o=tf;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=pu(e,1,!1,null,null,n,!1,r,o),e[nt]=t.current,Jn(e.nodeType===8?e.parentNode:e),new mu(t)};Pe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(y(188)):(e=Object.keys(e).join(","),Error(y(268,e)));return e=_s(t),e=e===null?null:e.stateNode,e};Pe.flushSync=function(e){return Ft(e)};Pe.hydrate=function(e,t,n){if(!Uo(t))throw Error(y(200));return Fo(null,e,t,!0,n)};Pe.hydrateRoot=function(e,t,n){if(!vu(e))throw Error(y(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=tf;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=ef(t,null,e,1,n??null,o,!1,i,l),e[nt]=t.current,Jn(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Ao(t)};Pe.render=function(e,t,n){if(!Uo(t))throw Error(y(200));return Fo(null,e,t,!1,n)};Pe.unmountComponentAtNode=function(e){if(!Uo(e))throw Error(y(40));return e._reactRootContainer?(Ft(function(){Fo(null,null,e,!1,function(){e._reactRootContainer=null,e[nt]=null})}),!0):!1};Pe.unstable_batchedUpdates=su;Pe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Uo(n))throw Error(y(200));if(e==null||e._reactInternals===void 0)throw Error(y(38));return Fo(e,t,n,!1,r)};Pe.version="18.3.1-next-f1338f8080-20240426";function nf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(nf)}catch(e){console.error(e)}}nf(),ns.exports=Pe;var fh=ns.exports,rf,za=fh;rf=za.createRoot,za.hydrateRoot;function Wt(e,t){Error.captureStackTrace&&Error.captureStackTrace(e,t)}var of={credentialsUpdated:"CredentialsUpdatedMessage"},me=class fl extends Error{errorCode;name="TidalError";constructor(t,n){super(t,n),Object.setPrototypeOf(this,fl.prototype),Wt(this,fl),this.errorCode=t}},dh=class dl extends me{name="IllegalArgumentError";constructor(t,n){super(t,n),Object.setPrototypeOf(this,dl.prototype),Wt(this,dl)}},lf=class pl extends me{name="NetworkError";constructor(t,n){super(t,n),Object.setPrototypeOf(this,pl.prototype),Wt(this,pl)}},lr=class hl extends me{name="RetryableError";constructor(t,n){super(t,n),Object.setPrototypeOf(this,hl.prototype),Wt(this,hl)}},ph=class{#e;#t=!1;#n;#r;constructor(e){this.#r=new URL(e),this.synchronize()}now(e=Date.now()){return!this.#n||!this.#e?(console.warn("TrueTime is not yet synchronized"),e):this.#n+(e-this.#e)}async synchronize(){if(!(this.#e&&Math.abs(Date.now()-this.#e)<36e5||this.#t)){this.#t=!0;try{let e=await fetch(this.#r);e.ok&&e.headers.has("date")&&(this.#n=new Date(e.headers.get("date")).getTime(),this.#e=Date.now())}catch(e){console.error(e)}this.#t=!1}}timestamp(e,t){let n;if(t){if(n=performance.getEntriesByName(e).find(r=>"detail"in r&&r.detail===t),!n)throw ReferenceError(`There is no performance entry named "${e}" with detail "${t}"`)}else n=performance.getEntriesByName(e).pop();return n?n.startTime:void 0}},yu=new ph("https://api.tidal.com/v1/ping"),hh=class ml extends me{name="AuthenticationError";constructor(t,n){super(t,n),Object.setPrototypeOf(this,ml.prototype),Wt(this,ml)}},mh=class vl extends me{name="TokenResponseError";constructor(t,n){super(t,n),Object.setPrototypeOf(this,vl.prototype),Wt(this,vl)}},gu=class yl extends me{name="UnexpectedError";constructor(t,n){super(t,n),Object.setPrototypeOf(this,yl.prototype),Wt(this,yl)}},Z={authenticationError:"A0000",illegalArgumentError:"A0007",initError:"A0001",networkError:"A0002",retryableError:"A0003",storageError:"A0004",tokenResponseError:"A0005",unexpectedError:"A0006"},hi="AuthDB";function vh(e){return String.fromCharCode(...new Uint8Array(e))}function yh(e){const t=new ArrayBuffer(e.length),n=new Uint8Array(t);for(let r=0,o=e.length;r<o;r++)n[r]=e.charCodeAt(r);return n}var Le={getItem:e=>{const t=globalThis.localStorage.getItem(`${hi}/${e}`);return t?yh(t):void 0},removeItem:e=>{globalThis.localStorage.removeItem(`${hi}/${e}`)},setItem:(e,t)=>{globalThis.localStorage.setItem(`${hi}/${e}`,vh(t))}},uf=e=>{const t=new TextEncoder;return globalThis.crypto.subtle.importKey("raw",t.encode(e),{name:"PBKDF2"},!1,["deriveBits","deriveKey"])},af=(e,t)=>globalThis.crypto.subtle.deriveKey({hash:"SHA-256",iterations:1e5,name:"PBKDF2",salt:t},e,{length:256,name:"AES-KW"},!0,["wrapKey","unwrapKey"]),gh=async(e,t)=>af(await uf(t),e),wh=e=>new TextEncoder().encode(e),Sh=e=>new TextDecoder().decode(e),kh=async({keyToWrap:e,password:t,salt:n})=>{const r=await af(await uf(t),n);return globalThis.crypto.subtle.wrapKey("raw",e,r,"AES-KW")},sf=async({password:e,salt:t,wrappedKeyBuffer:n})=>{const r=await gh(t,e);return globalThis.crypto.subtle.unwrapKey("raw",n,r,"AES-KW","AES-CTR",!0,["encrypt","decrypt"])},Eh=({content:e,counter:t,key:n})=>globalThis.crypto.subtle.encrypt({counter:t,length:64,name:"AES-CTR"},n,e),_h=({counter:e,encryptedCredentials:t,key:n})=>globalThis.crypto.subtle.decrypt({counter:e,length:64,name:"AES-CTR"},n,t),Ch=()=>globalThis.crypto.subtle.generateKey({length:256,name:"AES-CTR"},!0,["encrypt","decrypt"]),$t,xh=e=>{$t=e},Nh=async({password:e,storageKey:t})=>{const n=await Ch(),r=globalThis.crypto.getRandomValues(new Uint8Array(16)),o=globalThis.crypto.getRandomValues(new Uint8Array(16)),i=await kh({keyToWrap:n,password:e,salt:o});try{Le.setItem(`${t}Counter`,r),Le.setItem(`${t}Salt`,o),Le.setItem(`${t}Key`,i)}catch(l){throw new me(Z.storageError,{cause:l})}},cf=e=>({counter:Le.getItem(`${e}Counter`),encryptedCredentials:Le.getItem(`${e}Data`),salt:Le.getItem(`${e}Salt`),wrappedKey:Le.getItem(`${e}Key`)}),ff=async e=>{const{counter:t,encryptedCredentials:n,salt:r,wrappedKey:o}=cf(e);if(n&&t&&o&&r)try{const i=await _h({counter:t,encryptedCredentials:n,key:await sf({password:e,salt:r,wrappedKeyBuffer:o})});return JSON.parse(Sh(i))}catch{throw new me(Z.storageError)}else return Nh({password:e,storageKey:e})},Ih=async e=>{const t={...await ff(e.credentialsStorageKey),...e},{counter:n,salt:r,wrappedKey:o}=cf(e.credentialsStorageKey);if(!o||!n||!r)throw new me(Z.storageError);try{const i=await sf({password:t.credentialsStorageKey,salt:r,wrappedKeyBuffer:o}),l=await Eh({content:wh(JSON.stringify(t)),counter:n,key:i});Le.setItem(`${t.credentialsStorageKey}Data`,l)}catch(i){throw new me(Z.storageError,{cause:i})}},Ph=e=>{Le.removeItem(`${e}Data`),Le.removeItem(`${e}Counter`),Le.removeItem(`${e}Salt`),Le.removeItem(`${e}Key`)},df=async e=>{if($t){const t=await $t.load(e);return t?JSON.parse(t):void 0}return await ff(e)??void 0},Th=async e=>{if($t){const t={...await df(e.credentialsStorageKey),...e};await $t.save(e.credentialsStorageKey,JSON.stringify(t));return}return Ih(e)},Rh=e=>{if($t){$t.remove(e);return}Ph(e)},Oh=async e=>{if(e.status===0)return new lf(Z.networkError);if(e.status>=400&&e.status<500)return new gu(Z.unexpectedError);if(e.status>=500&&e.status<600)return new lr(Z.retryableError);const{error:t}=await e.json();return new mh(Z.tokenResponseError,{cause:t})},wu=async({body:e,credentials:t})=>{const{options:n,url:r}=pf({body:e,credentials:t,path:"oauth2/token"}),o=await hf({request:()=>globalThis.fetch(r,n),retry:i=>i.status>=500&&i.status<600});return o.ok?o:await Oh(o)},pf=({body:e,credentials:t,path:n})=>{const r=`${t.tidalAuthServiceBaseUri}${n}`;return{options:{body:new URLSearchParams(e).toString(),headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"},method:"POST"},url:r}},hf=async({delayInMs:e=500,request:t,retry:n})=>{let r=1;const o=()=>r>32;for(;!o();){await new Promise(l=>setTimeout(l,r*e));const i=await t();if(r*=2,!n(i)||o())return i}throw new gu(Z.unexpectedError)},ur,jh=e=>{ur=e},Lh=e=>ur?ur.getRandomValues(e):globalThis.crypto.getRandomValues(e),zh=(e,t)=>ur?ur.digest(e,t):globalThis.crypto.subtle.digest(e,t),Dh=async e=>{const t=await zh("SHA-256",new TextEncoder().encode(e)),n=new Uint8Array(t),r=n.byteLength;let o="";for(let i=0;i<r;i+=1)o+=String.fromCharCode(n[i]);return globalThis.btoa(o)},mf=e=>e.replace(/\+/g,"-").replace(/\//g,"_").replace(/=/g,""),Mh=()=>mf(btoa(Lh(new Uint8Array(100)).toString())).slice(0,128),N={pending:!1,pendingPromises:[]},Ah="https://login.tidal.com/",Uh="https://auth.tidal.com/v1/",Fh=["11003","6001","11001","11002","11101"],vf=[],$h=e=>{vf.push(e)},yf=e=>{const t={detail:e};for(const n of vf)n(t)},Bh=e=>{yf({payload:e,type:of.credentialsUpdated})},Vh=async({clientId:e,clientSecret:t,clientUniqueKey:n,credentialsStorageKey:r,crypto:o,scopes:i,storage:l,tidalAuthServiceBaseUri:u,tidalLoginServiceBaseUri:a})=>{o&&jh(o),l&&xh(l);const c=await df(r);await ku({...c,clientId:e,...t&&{clientSecret:t},clientUniqueKey:n,credentialsStorageKey:r,previousClientSecret:c?.clientSecret,scopes:i??[],tidalAuthServiceBaseUri:u??c?.tidalAuthServiceBaseUri??Uh,tidalLoginServiceBaseUri:a??c?.tidalLoginServiceBaseUri??Ah}),await yu.synchronize()},Wh=async({loginConfig:e,redirectUri:t})=>{if(!N.credentials)throw new me(Z.initError);const n=Mh(),r=await Dh(n);await ku({...N.credentials,codeChallenge:n,redirectUri:t});const o={...e,client_id:N.credentials.clientId,...N.credentials.clientUniqueKey&&{client_unique_key:N.credentials.clientUniqueKey},code_challenge:mf(r),code_challenge_method:"S256",redirect_uri:t,response_type:"code",scope:N.credentials.scopes.join(" ")},i=new URLSearchParams(o).toString();return`${N.credentials.tidalLoginServiceBaseUri}authorize?${i}`},Hh=async e=>{if(!N.credentials?.credentialsStorageKey||!N.credentials?.codeChallenge||!N.credentials?.redirectUri)throw new me(Z.initError);const{clientId:t,clientSecret:n,clientUniqueKey:r,codeChallenge:o,redirectUri:i,scopes:l}=N.credentials,u=Object.fromEntries(new URLSearchParams(e));if(!u.code)throw new hh(Z.authenticationError);const a=await wu({body:{client_id:t,...r&&{client_unique_key:r},...n&&{client_secret:n},code:u.code,code_verifier:o,grant_type:"authorization_code",redirect_uri:i,scope:l.join(" ")},credentials:N.credentials});if(a instanceof Error)throw a;await $o(await a.json())},Da=()=>{yf({type:of.credentialsUpdated}),N.credentials?.credentialsStorageKey&&Rh(N.credentials.credentialsStorageKey),delete N.credentials,delete N.limitedDeviceResponse},Kh=async()=>{if(N.credentials?.refreshToken){const e=await wu({body:{...N.credentials.clientSecret&&{client_secret:N.credentials.clientSecret},client_id:N.credentials.clientId,grant_type:"refresh_token",refresh_token:N.credentials.refreshToken,scope:N.credentials.scopes.join(" ")},credentials:N.credentials});return e instanceof Error?e:$o(await e.json())}else return Su()},Qh=async()=>{if(N.credentials?.refreshToken){const{options:e,url:t}=pf({body:{...N.credentials.clientSecret&&{client_secret:N.credentials.clientSecret},client_id:N.credentials.clientId,grant_type:"update_client",refresh_token:N.credentials.refreshToken,scope:N.credentials.scopes.join(" ")},credentials:N.credentials,path:"oauth2/token"}),n=await hf({request:()=>globalThis.fetch(t,e),retry:r=>r.status>=400&&r.status<600});if(!n.ok)throw n.status===0?new lf(Z.networkError):new lr(Z.retryableError);return $o(await n.json())}else{if(N.credentials){const e=await Su();if(e&&"token"in e)return N.credentials.previousClientSecret=N.credentials.clientSecret,e;throw new lr(Z.retryableError)}throw new me(Z.unexpectedError)}},Su=async()=>{if(N.credentials?.clientSecret){const e=await wu({body:{client_id:N.credentials.clientId,client_secret:N.credentials.clientSecret,grant_type:"client_credentials"},credentials:N.credentials});return e instanceof Error?e:$o(await e.json())}},Yh=async e=>(N.pending&&await new Promise(t=>{N.pendingPromises.push(t)}),Xh(e).finally(()=>{const t=N.pendingPromises.shift();t&&t(),N.pending=!1})),Xh=async e=>{if(N.credentials){N.pending=!0;const{accessToken:t}=N.credentials,n=60*1e3;if(t){const r=N.credentials.scopes.every(i=>t.grantedScopes?.includes(i));if(N.credentials.clientUniqueKey!==t.clientUniqueKey||t.userId&&r===!1)throw Da(),new dh(Z.illegalArgumentError);if(N.credentials.clientId!==t?.clientId||N.credentials.previousClientSecret&&N.credentials.previousClientSecret!==N.credentials.clientSecret){const i=await Qh();if(i&&"token"in i)return i;throw new lr(Z.retryableError)}if(!(e&&Fh.includes(e))&&t.expires&&t.expires>yu.now()+n)return t;const o=await Kh();if(o&&"token"in o)return o;if(o instanceof gu)throw Da(),o;if(o instanceof lr)throw o}else if(N.credentials.clientSecret){const r=await Su();if(r&&"token"in r)return r;if(r instanceof Error)throw r}else return{clientId:N.credentials.clientId,requestedScopes:N.credentials.scopes}}throw new me(Z.initError)},ku=e=>(N.credentials=e,Bh({...N.credentials.accessToken,clientId:N.credentials.clientId,requestedScopes:N.credentials.scopes}),Th(N.credentials)),$o=async e=>{if(!N.credentials)throw new me(Z.initError);const{clientId:t,clientUniqueKey:n,scopes:r}=N.credentials,o=e.scope?.length?e.scope?.split(" "):[],i={clientId:t,clientUniqueKey:n,expires:yu.now()+e.expires_in*1e3,grantedScopes:o,requestedScopes:r,token:e.access_token,...e.user_id&&{userId:e.user_id.toString()}};return await ku({...N.credentials,accessToken:i,...e.refresh_token&&{refreshToken:e.refresh_token}}),i},ko={bus:$h,getCredentials:Yh},Ma=Object.defineProperty,Gh=(e,t)=>{let n={};for(var r in e)Ma(n,r,{get:e[r],enumerable:!0});return Ma(n,Symbol.toStringTag,{value:"Module"}),n};function Eu(e,t){Error.captureStackTrace&&Error.captureStackTrace(e,t)}var gf=class gl extends Error{errorCode;name="TidalError";constructor(t,n){super(t,n),Object.setPrototypeOf(this,gl.prototype),Eu(this,gl),this.errorCode=t}},wf=class wl extends gf{name="IllegalArgumentError";constructor(t,n){super(t,n),Object.setPrototypeOf(this,wl.prototype),Eu(this,wl)}},Sl=!1,qh=class kl extends gf{name="OutageStartError";constructor(t,n){super(t,n),Object.setPrototypeOf(this,kl.prototype),Eu(this,kl)}},Jh={name:"OutageEndMessage"},mi=e=>{Sl!==e&&(Sl=e,Sf(e?new qh("1"):Jh))},Zh=()=>Sl,bh=Gh({bus:()=>em,postMessage:()=>Sf}),em=e=>globalThis.addEventListener("eventProducerEventBus",e),Sf=e=>{const t=new CustomEvent("eventProducerEventBus",{detail:e});globalThis.dispatchEvent(t)},ar,tm=e=>{ar=e},nm=e=>{ar.credentialsProvider=e},rm=e=>{ar.blockedConsentCategories={...ar.blockedConsentCategories,...e}},vr=()=>ar,om=class{#e;#t=!1;#n;#r;constructor(e){this.#r=new URL(e),this.synchronize()}now(e=Date.now()){return!this.#n||!this.#e?(console.warn("TrueTime is not yet synchronized"),e):this.#n+(e-this.#e)}async synchronize(){if(!(this.#e&&Math.abs(Date.now()-this.#e)<36e5||this.#t)){this.#t=!0;try{let e=await fetch(this.#r);e.ok&&e.headers.has("date")&&(this.#n=new Date(e.headers.get("date")).getTime(),this.#e=Date.now())}catch(e){console.error(e)}this.#t=!1}}timestamp(e,t){let n;if(t){if(n=performance.getEntriesByName(e).find(r=>"detail"in r&&r.detail===t),!n)throw ReferenceError(`There is no performance entry named "${e}" with detail "${t}"`)}else n=performance.getEntriesByName(e).pop();return n?n.startTime:void 0}},_u=new om("https://api.tidal.com/v1/ping"),kf=`var Fr = Object.create, Ue = Object.defineProperty, Mr = Object.getOwnPropertyDescriptor, Ur = Object.getOwnPropertyNames, Yr = Object.getPrototypeOf, $r = Object.prototype.hasOwnProperty, Wr = (w, R) => () => (R || (w((R = { exports: {} }).exports, R), w = null), R.exports), zr = (w, R, I, A) => {
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
`,Aa=typeof self<"u"&&self.Blob&&new Blob(["URL.revokeObjectURL(import.meta.url);",kf],{type:"text/javascript;charset=utf-8"});function im(e){let t;try{if(t=Aa&&(self.URL||self.webkitURL).createObjectURL(Aa),!t)throw"";const n=new Worker(t,{type:"module",name:e?.name});return n.addEventListener("error",()=>{(self.URL||self.webkitURL).revokeObjectURL(t)}),n}catch{return new Worker("data:text/javascript;charset=utf-8,"+encodeURIComponent(kf),{type:"module",name:e?.name})}}if(!window.Worker)throw new Error("Web Workers are not supported in this browser");var El=new im,sr=[];function cr(){return sr}function lm(){const e=cr();return e.length>=10?e.slice(0,10):e}function Ef(e){sr=e}var um=e=>new Promise((t,n)=>{El.addEventListener("message",r=>{const{data:o}=r;switch(o.action){case"initSuccess":if(o.events){const i=e?.feralEventTypes??[],l=i.length>0?o.events.filter(u=>!i.includes(u.name)):o.events;Ef(cr().concat(l))}t();break;default:console.error("Unknown action:",r),n(new Error("Unknown action"))}}),El.postMessage({action:"init"})});function _f(){El.postMessage({action:"persist",events:cr()})}function am(e){sr=sr.filter(t=>!e.includes(t.id)),_f()}function sm(e){sr.push(e),_f()}var Cf=({appInfo:{appName:e,appVersion:t},authorize:n=!0,consentCategory:r,credentials:o,platformData:{browserName:i,browserVersion:l,osName:u},sentTimestamp:a,suppliedHeaders:c})=>{const p=o?.token,h={"app-name":e,"app-version":t,"browser-name":i,"browser-version":l,"client-id":o?.clientId??"clientIDMissing!","consent-category":r,"os-name":u,"requested-sent-timestamp":a};return n&&p&&(h.authorization=p),c&&Object.entries(c).forEach(([m,g])=>{h[m]=g}),h};function xf(e){const t=new URLSearchParams;return e.forEach((n,r)=>{const o=`SendMessageBatchRequestEntry.${r+1}`,i=`${o}.MessageAttribute`;t.append(`${o}.Id`,n.id),t.append(`${o}.MessageBody`,typeof n.payload=="string"?n.payload:JSON.stringify(n.payload)),t.append(`${i}.1.Name`,"Name"),t.append(`${i}.1.Value.StringValue`,n.name),t.append(`${i}.1.Value.DataType`,"String"),n.headers&&(t.append(`${i}.2.Name`,"Headers"),t.append(`${i}.2.Value.DataType`,"String"),t.append(`${i}.2.Value.StringValue`,JSON.stringify(n.headers)))}),t}var Eo=typeof globalThis?.crypto?.randomUUID=="function",cm=()=>globalThis.crypto?.randomUUID(),Nf=Eo?cm:()=>{if(!Eo)throw new Error("Uuid not initialized; run await init(); before using uuid.");return"UUID_NOT_INITIALIZED"};async function fm(){if(!Eo){const{nanoid:e}=await Lf(async()=>{const{nanoid:t}=await import("./index.browser-B3btpU3i-BjLWcOsa.js");return{nanoid:t}},[]);Nf=()=>e()}Eo=!0}var If=()=>Nf(),et={consentFilteredEvents:{},storingFailedEvents:{},validationFailedEvents:{}},dm=()=>{et.consentFilteredEvents={},et.storingFailedEvents={},et.validationFailedEvents={}},Pf=({eventName:e,reason:t})=>{const n=et[t][e]??0;et[t][e]=n+1},pm=()=>Object.keys(et.consentFilteredEvents).length+Object.keys(et.storingFailedEvents).length+Object.keys(et.validationFailedEvents).length>0,hm=async()=>{if(pm()){const e=vr();if(!e.credentialsProvider)throw new Error("CredentialsProvider not set");const t=new Headers({"Content-Type":"application/x-www-form-urlencoded"}),n={headers:Cf({appInfo:e.appInfo,authorize:!1,consentCategory:"NECESSARY",credentials:await e.credentialsProvider?.getCredentials(),platformData:e.platform,sentTimestamp:_u.now()}),id:If(),name:"tep-tl-monitoring",payload:JSON.stringify(et)};globalThis.__tepTlDebug?.debug&&console.log("monitoringEvent sent:",n);const r=xf([n]);fetch(e.tlPublicConsumerUri,{body:r,headers:t,method:"post"}).catch(console.error),dm()}return Promise.resolve()},Tf=async({config:e})=>{const t=lm();if(t.length===0)return Promise.resolve();const n=new Headers({"Content-Type":"application/x-www-form-urlencoded"});if(!e.credentialsProvider)return Promise.reject(new wf("CredentialsProvider not set"));const r=(await e.credentialsProvider?.getCredentials()).token;r&&n.set("Authorization",`Bearer ${r}`);const o=r?e.tlConsumerUri:e.tlPublicConsumerUri,i=xf(t),l=new AbortController,u=setTimeout(()=>l.abort(),1e4);let a;try{a=await fetch(o,{body:i,headers:n,method:"post",signal:l.signal})}catch{clearTimeout(u),mi(!0);return}if(clearTimeout(u),a.ok){Zh()&&mi(!1);const c=await a.text(),p=new window.DOMParser().parseFromString(c,"text/xml"),h=[];if(p.querySelectorAll("SendMessageBatchResponse SendMessageBatchResult SendMessageBatchResultEntry Id").forEach(m=>{m.textContent&&h.push(m.textContent)}),p.querySelectorAll("SendMessageBatchResponse SendMessageBatchResult BatchResultErrorEntry").forEach(m=>{const g=m.querySelector("Id")?.textContent,S=m.querySelector("SenderFault")?.textContent==="true";if(g&&S){h.push(g);const w=t.find(x=>x.id===g);w&&Pf({eventName:w.name,reason:"validationFailedEvents"})}}),am(h),cr().length>0)return Tf({config:e})}else{const c=await a.text();console.error("Error sending event batch:",c),mi(!0);const p=new window.DOMParser().parseFromString(c,"text/xml");if(p.querySelector("ErrorResponse Error Type")?.textContent==="Sender"&&p.querySelector("ErrorResponse Error Code")?.textContent==="AWS.SimpleQueueService.BatchEntryIdsNotDistinct"){const h=cr(),m={},g=new Set(h.map(w=>(m[w.id]=w,w.id))),S=Array.from(g).map(w=>m[w]);Ef(S)}}return Promise.resolve()},mm=30*1e3,vm=60*1e3,vi,yi,ym=e=>{vi&&clearInterval(vi);const t=e?.eventBatchInterval??mm;vi=setInterval(()=>{Tf({config:vr()}).catch(console.error)},t),yi&&clearInterval(yi);const n=e?.monitoringInterval??vm;yi=setInterval(()=>{hm().catch(console.error)},n)},gm=async e=>{tm(e),await Promise.all([_u.synchronize(),fm(),um({feralEventTypes:e.feralEventTypes})]),ym(vr())},wm=new TextEncoder,Sm=e=>e.isWellFormed?e.isWellFormed():!0,km=e=>wm.encode(e).length<20480,Em=({payload:e,...t})=>{const n=JSON.stringify(t)+e;return km(n)&&Sm(n)},_m=({event:e,id:t,ts:n})=>{const{consentCategory:r,...o}=e;return JSON.stringify({...o,ts:n,uuid:t})},Cm=async({config:e,credentialsProvider:t,event:n})=>{const r=If(),o=_u.now();return{headers:Cf({appInfo:e.appInfo,consentCategory:n.consentCategory,credentials:await t?.getCredentials(),platformData:e.platform,sentTimestamp:o,suppliedHeaders:n.headers}),id:r,name:n.name,payload:_m({event:n,id:r,ts:o})}},xm=e=>{if(!e.payload)throw new Error(`Event is missing payload!: ${JSON.stringify(e)}`);if(!e.name)throw new Error(`Event is missing name! ${JSON.stringify(e)}`);if(!e.consentCategory)throw new Error(`Event is missing consentCategory! ${JSON.stringify(e)}`)},Nm=async({config:e,credentialsProvider:t,event:n})=>{if(e.strictMode&&xm(n),e.blockedConsentCategories[n.consentCategory])return Pf({eventName:n.name,reason:"consentFilteredEvents"}),Promise.resolve();const r=await Cm({config:e,credentialsProvider:t,event:n});return Em(r)?sm(r):Promise.resolve()},Im=e=>{const t=vr(),{credentialsProvider:n}=t;if(n)Nm({config:t,credentialsProvider:n,event:e}).catch(console.error);else throw new wf("CredentialsProvider not set")},Rf=e=>gm(e);const Pm=Object.freeze(Object.defineProperty({__proto__:null,bus:bh,getConfig:vr,init:Rf,sendEvent:Im,setConsentCategory:rm,setCredentialsProvider:nm},Symbol.toStringTag,{value:"Module"})),Tm="kme2TJ7OPFP0qDSQ",_o=()=>localStorage.getItem("crate_client_id")||Tm,Rm=e=>localStorage.setItem("crate_client_id",e.trim()),Om=["user.read","playlists.read","playlists.write","playback"],jm="https://openapi.tidal.com/v2",Lm="DK",Ua="Crate Inbox",zm=()=>window.location.origin+"/crate/";async function Of(){await Vh({clientId:_o(),credentialsStorageKey:"crate-tidal",scopes:Om})}async function Dm(){return window.location.search.includes("code=")?(await Hh(window.location.search),window.history.replaceState(null,"",window.location.pathname),!0):!1}async function Mm(){const e=await Wh({redirectUri:zm()});window.location.href=e}async function Am(){try{const e=await ko.getCredentials();return e&&e.token&&e.userId?e:null}catch{return null}}async function yr(e,{method:t="GET",body:n,token:r}={}){const o=e.includes("?")?"&":"?",i=await fetch(`${jm}${e}${o}countryCode=${Lm}`,{method:t,headers:{Authorization:`Bearer ${r}`,"Content-Type":"application/vnd.api+json",Accept:"application/vnd.api+json"},body:n?JSON.stringify(n):void 0});if(!i.ok){const u=await i.text(),a=new Error(`${t} ${e}: ${i.status} ${u}`);throw a.status=i.status,a}if(i.status===204||i.status===202)return null;const l=await i.text();return l?JSON.parse(l):null}function Um(e){if(typeof e=="number")return e;const t=/PT(?:(\d+)H)?(?:(\d+)M)?(?:([\d.]+)S)?/.exec(e||"");return t?+(t[1]||0)*3600+ +(t[2]||0)*60+Math.round(+(t[3]||0)):0}async function Fm(e){const t=[];let n=`/playlists?filter[r.owners.id]=${e.userId}`;for(;n;){const r=await yr(n,{token:e.token});for(const o of r.data||[])t.push({id:o.id,name:o.attributes?.name||"(unnamed)",numberOfItems:o.attributes?.numberOfItems??null});n=r.links?.next||null}return t}async function jf(e,t){const n=await yr("/playlists",{method:"POST",token:e.token,body:{data:{type:"playlists",attributes:{name:t,description:"Made with Crate",accessType:"UNLISTED"}}}});return{id:n.data.id,name:n.data.attributes?.name||t,numberOfItems:0}}async function Ar(e,t){const n=[],r=new Map;let o=`/playlists/${t}/relationships/items?include=items,items.artists,items.albums`;for(;o;){const i=await yr(o,{token:e.token});for(const l of i.included||[])r.set(`${l.type}/${l.id}`,l);for(const l of i.data||[]){if(l.type!=="tracks")continue;const u=r.get(`tracks/${l.id}`),a=u?.attributes||{},c=(u?.relationships?.artists?.data||[]).map(h=>r.get(`artists/${h.id}`)?.attributes?.name).filter(Boolean).join(", "),p=(u?.relationships?.albums?.data||[]).map(h=>r.get(`albums/${h.id}`)?.attributes?.title).filter(Boolean)[0];n.push({trackId:l.id,itemId:l.meta?.itemId,title:a.title||`Track ${l.id}`,artist:c||"",album:p||"",duration:Um(a.duration)})}o=i.links?.next||null}return n}async function Fa(e,t,n){await yr(`/playlists/${t}/relationships/items`,{method:"POST",token:e.token,body:{data:[{id:n,type:"tracks"}]}})}async function $a(e,t,n){await yr(`/playlists/${t}/relationships/items`,{method:"DELETE",token:e.token,body:{data:[{id:n.trackId,type:"tracks",meta:{itemId:n.itemId}}]}})}async function $m(e){const t=localStorage.getItem("crate_inbox"),n=await Fm(e),o=t&&n.find(i=>i.id===t)||n.find(i=>i.name===Ua)||await jf(e,Ua);return localStorage.setItem("crate_inbox",o.id),{inbox:o,playlists:n.filter(i=>i.id!==o.id)}}let gi=null;function Bm(){return gi||(gi=(async()=>{await Rf({appInfo:{appName:"Crate",appVersion:"0.1.0"},blockedConsentCategories:{NECESSARY:!1,PERFORMANCE:!1,TARGETING:!0},credentialsProvider:ko,platform:{browserName:navigator.userAgent.includes("Firefox")?"Firefox":"Chromium",browserVersion:"unknown",osName:navigator.platform||"unknown"},tlConsumerUri:"https://ec.tidal.com/api/event-batch",tlPublicConsumerUri:"https://ec.tidal.com/api/public/event-batch"}),Uf(ko),Ff(Pm)})()),gi}function Ba(e){if(!e||e<90)return 0;const t=+(localStorage.getItem("crate_start_bias")||0);return Math.max(0,Math.min(Math.round(e*.25),45)+t)}let ce=null;function Cu(){ce&&(ce.pause(),ce.removeAttribute("src"),ce=null)}async function Vm(e){const t=await ko.getCredentials(),n=await fetch(`https://api.tidal.com/v1/tracks/${e}/playbackinfo?audioquality=LOW&playbackmode=STREAM&assetpresentation=PREVIEW`,{headers:{Authorization:`Bearer ${t.token}`}});if(!n.ok)throw new Error(`preview playbackinfo: ${n.status}`);const r=await n.json(),i=JSON.parse(atob(r.manifest)).urls?.[0];if(!i)throw new Error(`no url in ${r.manifestMimeType} manifest`);Cu(),ce=new Audio(i),await ce.play()}async function Wm(e,t){await Bm();try{return await zf({productId:String(e),productType:"track",sourceId:"crate",sourceType:"OTHER"},t),await Ha(),Cu(),"full"}catch(n){console.error("[crate] full-track load failed:",n);try{return await Vm(e),"preview"}catch(r){throw console.error("[crate] preview fallback failed too:",r),n}}}const Hm={play:()=>ce?ce.play():Ha(),pause:()=>ce?ce.pause():xu(),seek:e=>{ce?ce.currentTime=Math.max(0,e):Af(Math.max(0,e))},position:()=>ce?ce.currentTime:Mf(),state:()=>ce?ce.paused?"NOT_PLAYING":"PLAYING":Df(),stop:()=>{Cu(),xu()}};function Km({mode:e,onDone:t,err:n}){const[r,o]=D.useState(_o()),[i,l]=D.useState(!1),u=async()=>{l(!0);try{await Of(),await Mm()}catch(a){alert(a.message||a),l(!1)}};return k.jsxs("div",{className:"app center-col",children:[k.jsx("h1",{className:"logo",children:"Crate"}),k.jsx("p",{className:"muted",children:"Tinder for your DJ pool."}),e==="setup"||!_o()?k.jsxs(k.Fragment,{children:[k.jsxs("p",{className:"muted small",children:["One-time setup: create an app at"," ",k.jsx("a",{href:"https://developer.tidal.com",target:"_blank",rel:"noreferrer",children:"developer.tidal.com"})," ","and paste its Client ID. Register this page's URL as a redirect URI:",k.jsx("br",{}),k.jsx("code",{children:window.location.origin+"/crate/"})]}),k.jsx("input",{type:"text",placeholder:"Tidal Client ID",value:r,onChange:a=>o(a.target.value)}),k.jsx("button",{disabled:!r.trim(),onClick:()=>{Rm(r),t()},children:"Save"})]}):k.jsxs(k.Fragment,{children:[k.jsx("button",{onClick:u,disabled:i,children:i?"Connecting…":"Connect Tidal"}),n&&k.jsx("div",{className:"error",children:n})]})]})}function Qm({playlists:e,targetId:t,onPick:n,onCreate:r,inboxCount:o}){const[i,l]=D.useState(!1),[u,a]=D.useState(""),c=async()=>{u.trim()&&(await r(u.trim()),a(""),l(!1))};return k.jsxs("div",{className:"picker",children:[k.jsxs("div",{className:"row",children:[k.jsxs("select",{value:t,onChange:p=>n(p.target.value),children:[k.jsx("option",{value:"",children:"→ target playlist…"}),e.map(p=>k.jsxs("option",{value:p.id,children:[p.name,p.numberOfItems!=null?` (${p.numberOfItems})`:""]},p.id))]}),k.jsx("button",{className:"secondary compact",onClick:()=>l(p=>!p),children:"＋"}),k.jsx("span",{className:"muted count",children:o})]}),i&&k.jsxs("div",{className:"row",children:[k.jsx("input",{type:"text",placeholder:"New playlist name (the occasion)",value:u,onChange:p=>a(p.target.value),onKeyDown:p=>p.key==="Enter"&&c(),autoFocus:!0}),k.jsx("button",{className:"compact",onClick:c,children:"Create"})]})]})}const Va=90;function Ym({queue:e,busy:t,onSwipe:n,session:r,onRefresh:o,canAdd:i}){const[l,u]=D.useState(null),[a,c]=D.useState(null),p=D.useRef(null),h=e[0],m=e[1];if(D.useEffect(()=>{c(null),u(null)},[h?.itemId]),!h)return k.jsxs("div",{className:"card deck-empty",children:[k.jsx("p",{className:"big-emoji",children:"📭"}),k.jsx("p",{children:"Inbox empty."}),k.jsx("p",{className:"muted",children:"Add tracks to “Crate Inbox” from the Tidal app, or ask Claude to trawl some charts."}),k.jsxs("p",{className:"muted small",children:["This session: ",r.added," added · ",r.dismissed," dismissed"]}),k.jsx("button",{className:"secondary",onClick:o,children:"Refresh"})]});const g=d=>{t||a||(p.current={x:d.clientX,y:d.clientY},d.currentTarget.setPointerCapture(d.pointerId))},S=d=>{p.current&&u({dx:d.clientX-p.current.x,dy:d.clientY-p.current.y})},w=()=>{if(!p.current)return;const d=l?.dx||0;if(p.current=null,Math.abs(d)>Va){const v=d>0?"right":"left";if(v==="right"&&!i){u(null);return}c(v),setTimeout(()=>n(v),180)}else u(null)},x=a?a==="right"?600:-600:l?.dx||0,f={transform:`translateX(${x}px) rotate(${x/20}deg)`,transition:l?"none":"transform 0.18s ease-out",opacity:a?0:1},s=Math.abs(x)>Va/2?x>0?"add":"dismiss":null;return k.jsxs("div",{className:"deck",children:[m&&k.jsxs("div",{className:"card track-card behind",children:[k.jsx("div",{className:"track-title",children:m.title}),k.jsx("div",{className:"muted",children:m.artist})]}),k.jsxs("div",{className:`card track-card top ${s||""}`,style:f,onPointerDown:g,onPointerMove:S,onPointerUp:w,onPointerCancel:w,children:[s==="add"&&k.jsx("div",{className:"stamp stamp-add",children:"ADD"}),s==="dismiss"&&k.jsx("div",{className:"stamp stamp-dismiss",children:"NOPE"}),k.jsx("div",{className:"track-title",children:h.title}),k.jsx("div",{className:"track-artist",children:h.artist}),k.jsxs("div",{className:"muted",children:[h.album,h.duration?` · ${Math.floor(h.duration/60)}:${String(h.duration%60).padStart(2,"0")}`:""]}),k.jsxs("div",{className:"swipe-hints muted small",children:["← dismiss · add →",i?"":" (pick a playlist)"]})]}),k.jsxs("div",{className:"deck-buttons row",children:[k.jsx("button",{className:"secondary half",disabled:t,onClick:()=>n("left"),children:"✕ Dismiss"}),k.jsx("button",{className:"half",disabled:t||!i,onClick:()=>n("right"),children:"♥ Add"})]})]})}const Wa=e=>`${Math.floor(e/60)}:${String(Math.floor(e%60)).padStart(2,"0")}`;function Xm({track:e,controls:t}){const[n,r]=D.useState(0),[o,i]=D.useState(!1),[l,u]=D.useState(!1),[a,c]=D.useState(""),p=D.useRef(null),h=l?30:e.duration||0;D.useEffect(()=>{let x=!1;return c(""),r(Ba(h)),(async()=>{try{const f=await Wm(e.trackId,Ba(h));if(x)return;u(f==="preview"),i(!0)}catch(f){if(x)return;i(!1),u(!1),c(String(f?.message||f))}})(),()=>{x=!0,t.stop()}},[e.trackId]),D.useEffect(()=>{const x=setInterval(()=>{r(t.position()||0),i(t.state()==="PLAYING")},400);return()=>clearInterval(x)},[t]);const m=x=>{t.seek(Math.min(Math.max(0,x),Math.max(0,h-1))),r(x)},g=x=>m(Math.round(h*x)),S=x=>{const f=p.current.getBoundingClientRect();g(Math.min(1,Math.max(0,(x.clientX-f.left)/f.width)))},w=()=>{t.state()==="PLAYING"?t.pause():Promise.resolve(t.play()).catch(x=>c(String(x?.message||x)))};return D.useEffect(()=>{const x=f=>{f.target.tagName==="INPUT"||f.target.tagName==="SELECT"||(f.key===" "?(f.preventDefault(),w()):["1","2","3","4"].includes(f.key)?g({1:0,2:.25,3:.5,4:.75}[f.key]):f.key===","?m(n-10):f.key==="."&&m(n+10))};return window.addEventListener("keydown",x),()=>window.removeEventListener("keydown",x)}),k.jsxs("div",{className:"player card",children:[l&&k.jsx("div",{className:"muted small",children:"30s preview mode"}),a&&k.jsxs("div",{className:"error small",children:["No playback: ",a.slice(0,80)]}),(l||a)&&k.jsx("a",{className:"small",href:`tidal://track/${e.trackId}`,children:"▶ Open in Tidal app"}),k.jsx("div",{className:"progress-bar tall",ref:p,onPointerDown:S,children:k.jsx("div",{className:"progress-bar-fill",style:{width:h?`${n/h*100}%`:0}})}),k.jsxs("div",{className:"row player-times",children:[k.jsx("span",{className:"stopwatch",children:Wa(n)}),k.jsx("span",{className:"stopwatch right",children:Wa(h)})]}),k.jsxs("div",{className:"row player-controls",children:[[0,.25,.5,.75].map(x=>k.jsxs("button",{className:"secondary compact",onClick:()=>g(x),children:[x*100,"%"]},x)),k.jsx("button",{className:"secondary compact",onClick:()=>m(n-10),children:"-10s"}),k.jsx("button",{className:"compact",onClick:w,children:o?"⏸":"▶"}),k.jsx("button",{className:"secondary compact",onClick:()=>m(n+10),children:"+10s"})]})]})}function Gm(){const[e,t]=D.useState("boot"),[n,r]=D.useState(null),[o,i]=D.useState(null),[l,u]=D.useState([]),[a,c]=D.useState(localStorage.getItem("crate_playlist")||""),[p,h]=D.useState([]),[m,g]=D.useState({added:0,dismissed:0}),[S,w]=D.useState([]),[x,f]=D.useState(!1),[s,d]=D.useState(""),v=D.useRef(null);v.current=n;const E=D.useCallback(async()=>{d(""),_o();try{await Of(),await Dm();const R=await Am();if(!R)return t("login");r(R),t("loading");const{inbox:A,playlists:ue}=await $m(R);i(A),u(ue);const H=await Ar(R,A.id);h(H),t("ready")}catch(R){d(String(R.message||R)),t("login")}},[]);D.useEffect(()=>{E()},[E]);const P=D.useCallback(async()=>{if(!(!v.current||!o)){t("loading");try{h(await Ar(v.current,o.id))}catch(R){d(String(R.message||R))}t("ready")}},[o]),I=R=>{c(R),localStorage.setItem("crate_playlist",R)},T=async R=>{const A=await jf(n,R);u(ue=>[...ue,A]),I(A.id)},F=D.useCallback(async R=>{const A=p[0];if(!A||x)return;if(R==="right"&&!a){d("Pick a target playlist first");return}f(!0),d("");const ue=v.current;try{if(R==="right")try{await Fa(ue,a,A.trackId)}catch(H){if(H.status!==409&&H.status!==400)throw H}await $a(ue,o.id,A),h(H=>H.slice(1)),g(H=>R==="right"?{...H,added:H.added+1}:{...H,dismissed:H.dismissed+1}),w(H=>[{item:A,dir:R,targetId:a},...H].slice(0,10))}catch(H){d(String(H.message||H))}f(!1)},[p,x,a,o]),j=D.useCallback(async()=>{const R=S[0];if(!R||x)return;f(!0),d("");const A=v.current;try{if(await Fa(A,o.id,R.item.trackId),R.dir==="right")try{const Ht=(await Ar(A,R.targetId)).find(kn=>kn.trackId===R.item.trackId);Ht&&await $a(A,R.targetId,Ht)}catch{}const H=(await Ar(A,o.id)).find(ge=>ge.trackId===R.item.trackId);h(ge=>H?[H,...ge]:ge),g(ge=>R.dir==="right"?{...ge,added:Math.max(0,ge.added-1)}:{...ge,dismissed:Math.max(0,ge.dismissed-1)}),w(ge=>ge.slice(1))}catch(ue){d(String(ue.message||ue))}f(!1)},[S,x,o]);return D.useEffect(()=>{const R=A=>{A.target.tagName==="INPUT"||A.target.tagName==="SELECT"||(A.key==="ArrowLeft"?F("left"):A.key==="ArrowRight"?F("right"):A.key==="z"&&(A.metaKey||A.ctrlKey)&&j())};return window.addEventListener("keydown",R),()=>window.removeEventListener("keydown",R)},[F,j]),e==="boot"?k.jsx("div",{className:"app center muted",children:"…"}):e==="setup"||e==="login"?k.jsx(Km,{mode:e,onDone:E,err:s}):k.jsxs("div",{className:"app",children:[k.jsx(Qm,{playlists:l,targetId:a,onPick:I,onCreate:T,inboxCount:p.length}),s&&k.jsx("div",{className:"error",children:s}),e==="loading"?k.jsx("div",{className:"center muted",children:"Loading inbox…"}):k.jsxs(k.Fragment,{children:[k.jsx(Ym,{queue:p,busy:x,onSwipe:F,session:m,onRefresh:P,canAdd:!!a}),p[0]&&k.jsx(Xm,{track:p[0],controls:Hm}),S.length>0&&k.jsxs("button",{className:"secondary undo",onClick:j,disabled:x,children:["↩︎ Undo ",S[0].dir==="right"?"add":"dismiss"]})]})]})}rf(document.getElementById("root")).render(k.jsx(Gm,{}));
