function hx(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const a=Object.getOwnPropertyDescriptor(r,i);a&&Object.defineProperty(e,i,a.get?a:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();function x0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var w0={exports:{}},zl={},b0={exports:{}},X={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var No=Symbol.for("react.element"),gx=Symbol.for("react.portal"),vx=Symbol.for("react.fragment"),yx=Symbol.for("react.strict_mode"),xx=Symbol.for("react.profiler"),wx=Symbol.for("react.provider"),bx=Symbol.for("react.context"),Sx=Symbol.for("react.forward_ref"),kx=Symbol.for("react.suspense"),Ex=Symbol.for("react.memo"),Cx=Symbol.for("react.lazy"),bm=Symbol.iterator;function jx(e){return e===null||typeof e!="object"?null:(e=bm&&e[bm]||e["@@iterator"],typeof e=="function"?e:null)}var S0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},k0=Object.assign,E0={};function ta(e,t,n){this.props=e,this.context=t,this.refs=E0,this.updater=n||S0}ta.prototype.isReactComponent={};ta.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ta.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function C0(){}C0.prototype=ta.prototype;function Nd(e,t,n){this.props=e,this.context=t,this.refs=E0,this.updater=n||S0}var Ad=Nd.prototype=new C0;Ad.constructor=Nd;k0(Ad,ta.prototype);Ad.isPureReactComponent=!0;var Sm=Array.isArray,j0=Object.prototype.hasOwnProperty,Od={current:null},P0={key:!0,ref:!0,__self:!0,__source:!0};function N0(e,t,n){var r,i={},a=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(a=""+t.key),t)j0.call(t,r)&&!P0.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var l=Array(s),c=0;c<s;c++)l[c]=arguments[c+2];i.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:No,type:e,key:a,ref:o,props:i,_owner:Od.current}}function Px(e,t){return{$$typeof:No,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Rd(e){return typeof e=="object"&&e!==null&&e.$$typeof===No}function Nx(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var km=/\/+/g;function Qc(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Nx(""+e.key):t.toString(36)}function bs(e,t,n,r,i){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case No:case gx:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+Qc(o,0):r,Sm(i)?(n="",e!=null&&(n=e.replace(km,"$&/")+"/"),bs(i,t,n,"",function(c){return c})):i!=null&&(Rd(i)&&(i=Px(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(km,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",Sm(e))for(var s=0;s<e.length;s++){a=e[s];var l=r+Qc(a,s);o+=bs(a,t,n,l,i)}else if(l=jx(e),typeof l=="function")for(e=l.call(e),s=0;!(a=e.next()).done;)a=a.value,l=r+Qc(a,s++),o+=bs(a,t,n,l,i);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Go(e,t,n){if(e==null)return e;var r=[],i=0;return bs(e,r,"","",function(a){return t.call(n,a,i++)}),r}function Ax(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ht={current:null},Ss={transition:null},Ox={ReactCurrentDispatcher:ht,ReactCurrentBatchConfig:Ss,ReactCurrentOwner:Od};X.Children={map:Go,forEach:function(e,t,n){Go(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Go(e,function(){t++}),t},toArray:function(e){return Go(e,function(t){return t})||[]},only:function(e){if(!Rd(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};X.Component=ta;X.Fragment=vx;X.Profiler=xx;X.PureComponent=Nd;X.StrictMode=yx;X.Suspense=kx;X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ox;X.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=k0({},e.props),i=e.key,a=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,o=Od.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)j0.call(t,l)&&!P0.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){s=Array(l);for(var c=0;c<l;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:No,type:e.type,key:i,ref:a,props:r,_owner:o}};X.createContext=function(e){return e={$$typeof:bx,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:wx,_context:e},e.Consumer=e};X.createElement=N0;X.createFactory=function(e){var t=N0.bind(null,e);return t.type=e,t};X.createRef=function(){return{current:null}};X.forwardRef=function(e){return{$$typeof:Sx,render:e}};X.isValidElement=Rd;X.lazy=function(e){return{$$typeof:Cx,_payload:{_status:-1,_result:e},_init:Ax}};X.memo=function(e,t){return{$$typeof:Ex,type:e,compare:t===void 0?null:t}};X.startTransition=function(e){var t=Ss.transition;Ss.transition={};try{e()}finally{Ss.transition=t}};X.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};X.useCallback=function(e,t){return ht.current.useCallback(e,t)};X.useContext=function(e){return ht.current.useContext(e)};X.useDebugValue=function(){};X.useDeferredValue=function(e){return ht.current.useDeferredValue(e)};X.useEffect=function(e,t){return ht.current.useEffect(e,t)};X.useId=function(){return ht.current.useId()};X.useImperativeHandle=function(e,t,n){return ht.current.useImperativeHandle(e,t,n)};X.useInsertionEffect=function(e,t){return ht.current.useInsertionEffect(e,t)};X.useLayoutEffect=function(e,t){return ht.current.useLayoutEffect(e,t)};X.useMemo=function(e,t){return ht.current.useMemo(e,t)};X.useReducer=function(e,t,n){return ht.current.useReducer(e,t,n)};X.useRef=function(e){return ht.current.useRef(e)};X.useState=function(e){return ht.current.useState(e)};X.useSyncExternalStore=function(e,t,n){return ht.current.useSyncExternalStore(e,t,n)};X.useTransition=function(){return ht.current.useTransition()};X.version="18.2.0";b0.exports=X;var k=b0.exports;const q=x0(k),Rx=hx({__proto__:null,default:q},[k]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tx=k,Lx=Symbol.for("react.element"),_x=Symbol.for("react.fragment"),Ix=Object.prototype.hasOwnProperty,Mx=Tx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,zx={key:!0,ref:!0,__self:!0,__source:!0};function A0(e,t,n){var r,i={},a=null,o=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)Ix.call(t,r)&&!zx.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Lx,type:e,key:a,ref:o,props:i,_owner:Mx.current}}zl.Fragment=_x;zl.jsx=A0;zl.jsxs=A0;w0.exports=zl;var f=w0.exports,Ju={},O0={exports:{}},Tt={},R0={exports:{}},T0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,D){var U=T.length;T.push(D);e:for(;0<U;){var pe=U-1>>>1,Se=T[pe];if(0<i(Se,D))T[pe]=D,T[U]=Se,U=pe;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var D=T[0],U=T.pop();if(U!==D){T[0]=U;e:for(var pe=0,Se=T.length,Yt=Se>>>1;pe<Yt;){var ne=2*(pe+1)-1,vt=T[ne],at=ne+1,yt=T[at];if(0>i(vt,U))at<Se&&0>i(yt,vt)?(T[pe]=yt,T[at]=U,pe=at):(T[pe]=vt,T[ne]=U,pe=ne);else if(at<Se&&0>i(yt,U))T[pe]=yt,T[at]=U,pe=at;else break e}}return D}function i(T,D){var U=T.sortIndex-D.sortIndex;return U!==0?U:T.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var l=[],c=[],u=1,d=null,p=3,v=!1,h=!1,y=!1,b=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function w(T){for(var D=n(c);D!==null;){if(D.callback===null)r(c);else if(D.startTime<=T)r(c),D.sortIndex=D.expirationTime,t(l,D);else break;D=n(c)}}function x(T){if(y=!1,w(T),!h)if(n(l)!==null)h=!0,ie(S);else{var D=n(c);D!==null&&oe(x,D.startTime-T)}}function S(T,D){h=!1,y&&(y=!1,g(O),O=-1),v=!0;var U=p;try{for(w(D),d=n(l);d!==null&&(!(d.expirationTime>D)||T&&!Z());){var pe=d.callback;if(typeof pe=="function"){d.callback=null,p=d.priorityLevel;var Se=pe(d.expirationTime<=D);D=e.unstable_now(),typeof Se=="function"?d.callback=Se:d===n(l)&&r(l),w(D)}else r(l);d=n(l)}if(d!==null)var Yt=!0;else{var ne=n(c);ne!==null&&oe(x,ne.startTime-D),Yt=!1}return Yt}finally{d=null,p=U,v=!1}}var P=!1,C=null,O=-1,z=5,L=-1;function Z(){return!(e.unstable_now()-L<z)}function G(){if(C!==null){var T=e.unstable_now();L=T;var D=!0;try{D=C(!0,T)}finally{D?Te():(P=!1,C=null)}}else P=!1}var Te;if(typeof m=="function")Te=function(){m(G)};else if(typeof MessageChannel<"u"){var be=new MessageChannel,Qe=be.port2;be.port1.onmessage=G,Te=function(){Qe.postMessage(null)}}else Te=function(){b(G,0)};function ie(T){C=T,P||(P=!0,Te())}function oe(T,D){O=b(function(){T(e.unstable_now())},D)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){h||v||(h=!0,ie(S))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(T){switch(p){case 1:case 2:case 3:var D=3;break;default:D=p}var U=p;p=D;try{return T()}finally{p=U}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,D){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var U=p;p=T;try{return D()}finally{p=U}},e.unstable_scheduleCallback=function(T,D,U){var pe=e.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?pe+U:pe):U=pe,T){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=U+Se,T={id:u++,callback:D,priorityLevel:T,startTime:U,expirationTime:Se,sortIndex:-1},U>pe?(T.sortIndex=U,t(c,T),n(l)===null&&T===n(c)&&(y?(g(O),O=-1):y=!0,oe(x,U-pe))):(T.sortIndex=Se,t(l,T),h||v||(h=!0,ie(S))),T},e.unstable_shouldYield=Z,e.unstable_wrapCallback=function(T){var D=p;return function(){var U=p;p=D;try{return T.apply(this,arguments)}finally{p=U}}}})(T0);R0.exports=T0;var Dx=R0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var L0=k,Ot=Dx;function R(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var _0=new Set,Xa={};function ti(e,t){zi(e,t),zi(e+"Capture",t)}function zi(e,t){for(Xa[e]=t,e=0;e<t.length;e++)_0.add(t[e])}var An=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xu=Object.prototype.hasOwnProperty,$x=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Em={},Cm={};function Fx(e){return Xu.call(Cm,e)?!0:Xu.call(Em,e)?!1:$x.test(e)?Cm[e]=!0:(Em[e]=!0,!1)}function Ux(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Bx(e,t,n,r){if(t===null||typeof t>"u"||Ux(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function gt(e,t,n,r,i,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var it={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){it[e]=new gt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];it[t]=new gt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){it[e]=new gt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){it[e]=new gt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){it[e]=new gt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){it[e]=new gt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){it[e]=new gt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){it[e]=new gt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){it[e]=new gt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Td=/[\-:]([a-z])/g;function Ld(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Td,Ld);it[t]=new gt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Td,Ld);it[t]=new gt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Td,Ld);it[t]=new gt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){it[e]=new gt(e,1,!1,e.toLowerCase(),null,!1,!1)});it.xlinkHref=new gt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){it[e]=new gt(e,1,!1,e.toLowerCase(),null,!0,!0)});function _d(e,t,n,r){var i=it.hasOwnProperty(t)?it[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Bx(t,n,i,r)&&(n=null),r||i===null?Fx(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var zn=L0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Yo=Symbol.for("react.element"),ci=Symbol.for("react.portal"),ui=Symbol.for("react.fragment"),Id=Symbol.for("react.strict_mode"),Zu=Symbol.for("react.profiler"),I0=Symbol.for("react.provider"),M0=Symbol.for("react.context"),Md=Symbol.for("react.forward_ref"),ef=Symbol.for("react.suspense"),tf=Symbol.for("react.suspense_list"),zd=Symbol.for("react.memo"),Qn=Symbol.for("react.lazy"),z0=Symbol.for("react.offscreen"),jm=Symbol.iterator;function pa(e){return e===null||typeof e!="object"?null:(e=jm&&e[jm]||e["@@iterator"],typeof e=="function"?e:null)}var Re=Object.assign,Kc;function ja(e){if(Kc===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Kc=t&&t[1]||""}return`
`+Kc+e}var Jc=!1;function Xc(e,t){if(!e||Jc)return"";Jc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),a=r.stack.split(`
`),o=i.length-1,s=a.length-1;1<=o&&0<=s&&i[o]!==a[s];)s--;for(;1<=o&&0<=s;o--,s--)if(i[o]!==a[s]){if(o!==1||s!==1)do if(o--,s--,0>s||i[o]!==a[s]){var l=`
`+i[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=s);break}}}finally{Jc=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ja(e):""}function Hx(e){switch(e.tag){case 5:return ja(e.type);case 16:return ja("Lazy");case 13:return ja("Suspense");case 19:return ja("SuspenseList");case 0:case 2:case 15:return e=Xc(e.type,!1),e;case 11:return e=Xc(e.type.render,!1),e;case 1:return e=Xc(e.type,!0),e;default:return""}}function nf(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ui:return"Fragment";case ci:return"Portal";case Zu:return"Profiler";case Id:return"StrictMode";case ef:return"Suspense";case tf:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case M0:return(e.displayName||"Context")+".Consumer";case I0:return(e._context.displayName||"Context")+".Provider";case Md:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case zd:return t=e.displayName||null,t!==null?t:nf(e.type)||"Memo";case Qn:t=e._payload,e=e._init;try{return nf(e(t))}catch{}}return null}function Vx(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return nf(t);case 8:return t===Id?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function hr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function D0(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Wx(e){var t=D0(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,a.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function qo(e){e._valueTracker||(e._valueTracker=Wx(e))}function $0(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=D0(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Xs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function rf(e,t){var n=t.checked;return Re({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Pm(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=hr(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function F0(e,t){t=t.checked,t!=null&&_d(e,"checked",t,!1)}function af(e,t){F0(e,t);var n=hr(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?of(e,t.type,n):t.hasOwnProperty("defaultValue")&&of(e,t.type,hr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Nm(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function of(e,t,n){(t!=="number"||Xs(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Pa=Array.isArray;function Pi(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+hr(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function sf(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(R(91));return Re({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Am(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(R(92));if(Pa(n)){if(1<n.length)throw Error(R(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:hr(n)}}function U0(e,t){var n=hr(t.value),r=hr(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Om(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function B0(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function lf(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?B0(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Qo,H0=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Qo=Qo||document.createElement("div"),Qo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Qo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Za(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ia={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Gx=["Webkit","ms","Moz","O"];Object.keys(Ia).forEach(function(e){Gx.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ia[t]=Ia[e]})});function V0(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ia.hasOwnProperty(e)&&Ia[e]?(""+t).trim():t+"px"}function W0(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=V0(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Yx=Re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function cf(e,t){if(t){if(Yx[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(R(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(R(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(R(61))}if(t.style!=null&&typeof t.style!="object")throw Error(R(62))}}function uf(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ff=null;function Dd(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var df=null,Ni=null,Ai=null;function Rm(e){if(e=Ro(e)){if(typeof df!="function")throw Error(R(280));var t=e.stateNode;t&&(t=Bl(t),df(e.stateNode,e.type,t))}}function G0(e){Ni?Ai?Ai.push(e):Ai=[e]:Ni=e}function Y0(){if(Ni){var e=Ni,t=Ai;if(Ai=Ni=null,Rm(e),t)for(e=0;e<t.length;e++)Rm(t[e])}}function q0(e,t){return e(t)}function Q0(){}var Zc=!1;function K0(e,t,n){if(Zc)return e(t,n);Zc=!0;try{return q0(e,t,n)}finally{Zc=!1,(Ni!==null||Ai!==null)&&(Q0(),Y0())}}function eo(e,t){var n=e.stateNode;if(n===null)return null;var r=Bl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(R(231,t,typeof n));return n}var pf=!1;if(An)try{var ma={};Object.defineProperty(ma,"passive",{get:function(){pf=!0}}),window.addEventListener("test",ma,ma),window.removeEventListener("test",ma,ma)}catch{pf=!1}function qx(e,t,n,r,i,a,o,s,l){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(u){this.onError(u)}}var Ma=!1,Zs=null,el=!1,mf=null,Qx={onError:function(e){Ma=!0,Zs=e}};function Kx(e,t,n,r,i,a,o,s,l){Ma=!1,Zs=null,qx.apply(Qx,arguments)}function Jx(e,t,n,r,i,a,o,s,l){if(Kx.apply(this,arguments),Ma){if(Ma){var c=Zs;Ma=!1,Zs=null}else throw Error(R(198));el||(el=!0,mf=c)}}function ni(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function J0(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Tm(e){if(ni(e)!==e)throw Error(R(188))}function Xx(e){var t=e.alternate;if(!t){if(t=ni(e),t===null)throw Error(R(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return Tm(i),e;if(a===r)return Tm(i),t;a=a.sibling}throw Error(R(188))}if(n.return!==r.return)n=i,r=a;else{for(var o=!1,s=i.child;s;){if(s===n){o=!0,n=i,r=a;break}if(s===r){o=!0,r=i,n=a;break}s=s.sibling}if(!o){for(s=a.child;s;){if(s===n){o=!0,n=a,r=i;break}if(s===r){o=!0,r=a,n=i;break}s=s.sibling}if(!o)throw Error(R(189))}}if(n.alternate!==r)throw Error(R(190))}if(n.tag!==3)throw Error(R(188));return n.stateNode.current===n?e:t}function X0(e){return e=Xx(e),e!==null?Z0(e):null}function Z0(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Z0(e);if(t!==null)return t;e=e.sibling}return null}var e1=Ot.unstable_scheduleCallback,Lm=Ot.unstable_cancelCallback,Zx=Ot.unstable_shouldYield,ew=Ot.unstable_requestPaint,De=Ot.unstable_now,tw=Ot.unstable_getCurrentPriorityLevel,$d=Ot.unstable_ImmediatePriority,t1=Ot.unstable_UserBlockingPriority,tl=Ot.unstable_NormalPriority,nw=Ot.unstable_LowPriority,n1=Ot.unstable_IdlePriority,Dl=null,hn=null;function rw(e){if(hn&&typeof hn.onCommitFiberRoot=="function")try{hn.onCommitFiberRoot(Dl,e,void 0,(e.current.flags&128)===128)}catch{}}var rn=Math.clz32?Math.clz32:ow,iw=Math.log,aw=Math.LN2;function ow(e){return e>>>=0,e===0?32:31-(iw(e)/aw|0)|0}var Ko=64,Jo=4194304;function Na(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function nl(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,o=n&268435455;if(o!==0){var s=o&~i;s!==0?r=Na(s):(a&=o,a!==0&&(r=Na(a)))}else o=n&~i,o!==0?r=Na(o):a!==0&&(r=Na(a));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,a=t&-t,i>=a||i===16&&(a&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-rn(t),i=1<<n,r|=e[n],t&=~i;return r}function sw(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function lw(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-rn(a),s=1<<o,l=i[o];l===-1?(!(s&n)||s&r)&&(i[o]=sw(s,t)):l<=t&&(e.expiredLanes|=s),a&=~s}}function hf(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function r1(){var e=Ko;return Ko<<=1,!(Ko&4194240)&&(Ko=64),e}function eu(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ao(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-rn(t),e[t]=n}function cw(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-rn(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}function Fd(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-rn(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var se=0;function i1(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var a1,Ud,o1,s1,l1,gf=!1,Xo=[],ir=null,ar=null,or=null,to=new Map,no=new Map,Jn=[],uw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function _m(e,t){switch(e){case"focusin":case"focusout":ir=null;break;case"dragenter":case"dragleave":ar=null;break;case"mouseover":case"mouseout":or=null;break;case"pointerover":case"pointerout":to.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":no.delete(t.pointerId)}}function ha(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Ro(t),t!==null&&Ud(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function fw(e,t,n,r,i){switch(t){case"focusin":return ir=ha(ir,e,t,n,r,i),!0;case"dragenter":return ar=ha(ar,e,t,n,r,i),!0;case"mouseover":return or=ha(or,e,t,n,r,i),!0;case"pointerover":var a=i.pointerId;return to.set(a,ha(to.get(a)||null,e,t,n,r,i)),!0;case"gotpointercapture":return a=i.pointerId,no.set(a,ha(no.get(a)||null,e,t,n,r,i)),!0}return!1}function c1(e){var t=Tr(e.target);if(t!==null){var n=ni(t);if(n!==null){if(t=n.tag,t===13){if(t=J0(n),t!==null){e.blockedOn=t,l1(e.priority,function(){o1(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ks(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=vf(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ff=r,n.target.dispatchEvent(r),ff=null}else return t=Ro(n),t!==null&&Ud(t),e.blockedOn=n,!1;t.shift()}return!0}function Im(e,t,n){ks(e)&&n.delete(t)}function dw(){gf=!1,ir!==null&&ks(ir)&&(ir=null),ar!==null&&ks(ar)&&(ar=null),or!==null&&ks(or)&&(or=null),to.forEach(Im),no.forEach(Im)}function ga(e,t){e.blockedOn===t&&(e.blockedOn=null,gf||(gf=!0,Ot.unstable_scheduleCallback(Ot.unstable_NormalPriority,dw)))}function ro(e){function t(i){return ga(i,e)}if(0<Xo.length){ga(Xo[0],e);for(var n=1;n<Xo.length;n++){var r=Xo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(ir!==null&&ga(ir,e),ar!==null&&ga(ar,e),or!==null&&ga(or,e),to.forEach(t),no.forEach(t),n=0;n<Jn.length;n++)r=Jn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Jn.length&&(n=Jn[0],n.blockedOn===null);)c1(n),n.blockedOn===null&&Jn.shift()}var Oi=zn.ReactCurrentBatchConfig,rl=!0;function pw(e,t,n,r){var i=se,a=Oi.transition;Oi.transition=null;try{se=1,Bd(e,t,n,r)}finally{se=i,Oi.transition=a}}function mw(e,t,n,r){var i=se,a=Oi.transition;Oi.transition=null;try{se=4,Bd(e,t,n,r)}finally{se=i,Oi.transition=a}}function Bd(e,t,n,r){if(rl){var i=vf(e,t,n,r);if(i===null)uu(e,t,r,il,n),_m(e,r);else if(fw(i,e,t,n,r))r.stopPropagation();else if(_m(e,r),t&4&&-1<uw.indexOf(e)){for(;i!==null;){var a=Ro(i);if(a!==null&&a1(a),a=vf(e,t,n,r),a===null&&uu(e,t,r,il,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else uu(e,t,r,null,n)}}var il=null;function vf(e,t,n,r){if(il=null,e=Dd(r),e=Tr(e),e!==null)if(t=ni(e),t===null)e=null;else if(n=t.tag,n===13){if(e=J0(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return il=e,null}function u1(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(tw()){case $d:return 1;case t1:return 4;case tl:case nw:return 16;case n1:return 536870912;default:return 16}default:return 16}}var er=null,Hd=null,Es=null;function f1(){if(Es)return Es;var e,t=Hd,n=t.length,r,i="value"in er?er.value:er.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Es=i.slice(e,1<r?1-r:void 0)}function Cs(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Zo(){return!0}function Mm(){return!1}function Lt(e){function t(n,r,i,a,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(a):a[s]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Zo:Mm,this.isPropagationStopped=Mm,this}return Re(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Zo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Zo)},persist:function(){},isPersistent:Zo}),t}var na={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vd=Lt(na),Oo=Re({},na,{view:0,detail:0}),hw=Lt(Oo),tu,nu,va,$l=Re({},Oo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wd,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==va&&(va&&e.type==="mousemove"?(tu=e.screenX-va.screenX,nu=e.screenY-va.screenY):nu=tu=0,va=e),tu)},movementY:function(e){return"movementY"in e?e.movementY:nu}}),zm=Lt($l),gw=Re({},$l,{dataTransfer:0}),vw=Lt(gw),yw=Re({},Oo,{relatedTarget:0}),ru=Lt(yw),xw=Re({},na,{animationName:0,elapsedTime:0,pseudoElement:0}),ww=Lt(xw),bw=Re({},na,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Sw=Lt(bw),kw=Re({},na,{data:0}),Dm=Lt(kw),Ew={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Cw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pw(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=jw[e])?!!t[e]:!1}function Wd(){return Pw}var Nw=Re({},Oo,{key:function(e){if(e.key){var t=Ew[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Cs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Cw[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wd,charCode:function(e){return e.type==="keypress"?Cs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Cs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Aw=Lt(Nw),Ow=Re({},$l,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$m=Lt(Ow),Rw=Re({},Oo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wd}),Tw=Lt(Rw),Lw=Re({},na,{propertyName:0,elapsedTime:0,pseudoElement:0}),_w=Lt(Lw),Iw=Re({},$l,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Mw=Lt(Iw),zw=[9,13,27,32],Gd=An&&"CompositionEvent"in window,za=null;An&&"documentMode"in document&&(za=document.documentMode);var Dw=An&&"TextEvent"in window&&!za,d1=An&&(!Gd||za&&8<za&&11>=za),Fm=String.fromCharCode(32),Um=!1;function p1(e,t){switch(e){case"keyup":return zw.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function m1(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var fi=!1;function $w(e,t){switch(e){case"compositionend":return m1(t);case"keypress":return t.which!==32?null:(Um=!0,Fm);case"textInput":return e=t.data,e===Fm&&Um?null:e;default:return null}}function Fw(e,t){if(fi)return e==="compositionend"||!Gd&&p1(e,t)?(e=f1(),Es=Hd=er=null,fi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return d1&&t.locale!=="ko"?null:t.data;default:return null}}var Uw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bm(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Uw[e.type]:t==="textarea"}function h1(e,t,n,r){G0(r),t=al(t,"onChange"),0<t.length&&(n=new Vd("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Da=null,io=null;function Bw(e){j1(e,0)}function Fl(e){var t=mi(e);if($0(t))return e}function Hw(e,t){if(e==="change")return t}var g1=!1;if(An){var iu;if(An){var au="oninput"in document;if(!au){var Hm=document.createElement("div");Hm.setAttribute("oninput","return;"),au=typeof Hm.oninput=="function"}iu=au}else iu=!1;g1=iu&&(!document.documentMode||9<document.documentMode)}function Vm(){Da&&(Da.detachEvent("onpropertychange",v1),io=Da=null)}function v1(e){if(e.propertyName==="value"&&Fl(io)){var t=[];h1(t,io,e,Dd(e)),K0(Bw,t)}}function Vw(e,t,n){e==="focusin"?(Vm(),Da=t,io=n,Da.attachEvent("onpropertychange",v1)):e==="focusout"&&Vm()}function Ww(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Fl(io)}function Gw(e,t){if(e==="click")return Fl(t)}function Yw(e,t){if(e==="input"||e==="change")return Fl(t)}function qw(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var sn=typeof Object.is=="function"?Object.is:qw;function ao(e,t){if(sn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Xu.call(t,i)||!sn(e[i],t[i]))return!1}return!0}function Wm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Gm(e,t){var n=Wm(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Wm(n)}}function y1(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?y1(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function x1(){for(var e=window,t=Xs();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Xs(e.document)}return t}function Yd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Qw(e){var t=x1(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&y1(n.ownerDocument.documentElement,n)){if(r!==null&&Yd(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=Gm(n,a);var o=Gm(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Kw=An&&"documentMode"in document&&11>=document.documentMode,di=null,yf=null,$a=null,xf=!1;function Ym(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;xf||di==null||di!==Xs(r)||(r=di,"selectionStart"in r&&Yd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),$a&&ao($a,r)||($a=r,r=al(yf,"onSelect"),0<r.length&&(t=new Vd("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=di)))}function es(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var pi={animationend:es("Animation","AnimationEnd"),animationiteration:es("Animation","AnimationIteration"),animationstart:es("Animation","AnimationStart"),transitionend:es("Transition","TransitionEnd")},ou={},w1={};An&&(w1=document.createElement("div").style,"AnimationEvent"in window||(delete pi.animationend.animation,delete pi.animationiteration.animation,delete pi.animationstart.animation),"TransitionEvent"in window||delete pi.transitionend.transition);function Ul(e){if(ou[e])return ou[e];if(!pi[e])return e;var t=pi[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in w1)return ou[e]=t[n];return e}var b1=Ul("animationend"),S1=Ul("animationiteration"),k1=Ul("animationstart"),E1=Ul("transitionend"),C1=new Map,qm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function kr(e,t){C1.set(e,t),ti(t,[e])}for(var su=0;su<qm.length;su++){var lu=qm[su],Jw=lu.toLowerCase(),Xw=lu[0].toUpperCase()+lu.slice(1);kr(Jw,"on"+Xw)}kr(b1,"onAnimationEnd");kr(S1,"onAnimationIteration");kr(k1,"onAnimationStart");kr("dblclick","onDoubleClick");kr("focusin","onFocus");kr("focusout","onBlur");kr(E1,"onTransitionEnd");zi("onMouseEnter",["mouseout","mouseover"]);zi("onMouseLeave",["mouseout","mouseover"]);zi("onPointerEnter",["pointerout","pointerover"]);zi("onPointerLeave",["pointerout","pointerover"]);ti("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ti("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ti("onBeforeInput",["compositionend","keypress","textInput","paste"]);ti("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ti("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ti("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Aa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Zw=new Set("cancel close invalid load scroll toggle".split(" ").concat(Aa));function Qm(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Jx(r,t,void 0,e),e.currentTarget=null}function j1(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],l=s.instance,c=s.currentTarget;if(s=s.listener,l!==a&&i.isPropagationStopped())break e;Qm(i,s,c),a=l}else for(o=0;o<r.length;o++){if(s=r[o],l=s.instance,c=s.currentTarget,s=s.listener,l!==a&&i.isPropagationStopped())break e;Qm(i,s,c),a=l}}}if(el)throw e=mf,el=!1,mf=null,e}function he(e,t){var n=t[Ef];n===void 0&&(n=t[Ef]=new Set);var r=e+"__bubble";n.has(r)||(P1(t,e,2,!1),n.add(r))}function cu(e,t,n){var r=0;t&&(r|=4),P1(n,e,r,t)}var ts="_reactListening"+Math.random().toString(36).slice(2);function oo(e){if(!e[ts]){e[ts]=!0,_0.forEach(function(n){n!=="selectionchange"&&(Zw.has(n)||cu(n,!1,e),cu(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ts]||(t[ts]=!0,cu("selectionchange",!1,t))}}function P1(e,t,n,r){switch(u1(t)){case 1:var i=pw;break;case 4:i=mw;break;default:i=Bd}n=i.bind(null,t,n,e),i=void 0,!pf||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function uu(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;s!==null;){if(o=Tr(s),o===null)return;if(l=o.tag,l===5||l===6){r=a=o;continue e}s=s.parentNode}}r=r.return}K0(function(){var c=a,u=Dd(n),d=[];e:{var p=C1.get(e);if(p!==void 0){var v=Vd,h=e;switch(e){case"keypress":if(Cs(n)===0)break e;case"keydown":case"keyup":v=Aw;break;case"focusin":h="focus",v=ru;break;case"focusout":h="blur",v=ru;break;case"beforeblur":case"afterblur":v=ru;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=zm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=vw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Tw;break;case b1:case S1:case k1:v=ww;break;case E1:v=_w;break;case"scroll":v=hw;break;case"wheel":v=Mw;break;case"copy":case"cut":case"paste":v=Sw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=$m}var y=(t&4)!==0,b=!y&&e==="scroll",g=y?p!==null?p+"Capture":null:p;y=[];for(var m=c,w;m!==null;){w=m;var x=w.stateNode;if(w.tag===5&&x!==null&&(w=x,g!==null&&(x=eo(m,g),x!=null&&y.push(so(m,x,w)))),b)break;m=m.return}0<y.length&&(p=new v(p,h,null,n,u),d.push({event:p,listeners:y}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",p&&n!==ff&&(h=n.relatedTarget||n.fromElement)&&(Tr(h)||h[On]))break e;if((v||p)&&(p=u.window===u?u:(p=u.ownerDocument)?p.defaultView||p.parentWindow:window,v?(h=n.relatedTarget||n.toElement,v=c,h=h?Tr(h):null,h!==null&&(b=ni(h),h!==b||h.tag!==5&&h.tag!==6)&&(h=null)):(v=null,h=c),v!==h)){if(y=zm,x="onMouseLeave",g="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(y=$m,x="onPointerLeave",g="onPointerEnter",m="pointer"),b=v==null?p:mi(v),w=h==null?p:mi(h),p=new y(x,m+"leave",v,n,u),p.target=b,p.relatedTarget=w,x=null,Tr(u)===c&&(y=new y(g,m+"enter",h,n,u),y.target=w,y.relatedTarget=b,x=y),b=x,v&&h)t:{for(y=v,g=h,m=0,w=y;w;w=oi(w))m++;for(w=0,x=g;x;x=oi(x))w++;for(;0<m-w;)y=oi(y),m--;for(;0<w-m;)g=oi(g),w--;for(;m--;){if(y===g||g!==null&&y===g.alternate)break t;y=oi(y),g=oi(g)}y=null}else y=null;v!==null&&Km(d,p,v,y,!1),h!==null&&b!==null&&Km(d,b,h,y,!0)}}e:{if(p=c?mi(c):window,v=p.nodeName&&p.nodeName.toLowerCase(),v==="select"||v==="input"&&p.type==="file")var S=Hw;else if(Bm(p))if(g1)S=Yw;else{S=Ww;var P=Vw}else(v=p.nodeName)&&v.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(S=Gw);if(S&&(S=S(e,c))){h1(d,S,n,u);break e}P&&P(e,p,c),e==="focusout"&&(P=p._wrapperState)&&P.controlled&&p.type==="number"&&of(p,"number",p.value)}switch(P=c?mi(c):window,e){case"focusin":(Bm(P)||P.contentEditable==="true")&&(di=P,yf=c,$a=null);break;case"focusout":$a=yf=di=null;break;case"mousedown":xf=!0;break;case"contextmenu":case"mouseup":case"dragend":xf=!1,Ym(d,n,u);break;case"selectionchange":if(Kw)break;case"keydown":case"keyup":Ym(d,n,u)}var C;if(Gd)e:{switch(e){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else fi?p1(e,n)&&(O="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(d1&&n.locale!=="ko"&&(fi||O!=="onCompositionStart"?O==="onCompositionEnd"&&fi&&(C=f1()):(er=u,Hd="value"in er?er.value:er.textContent,fi=!0)),P=al(c,O),0<P.length&&(O=new Dm(O,e,null,n,u),d.push({event:O,listeners:P}),C?O.data=C:(C=m1(n),C!==null&&(O.data=C)))),(C=Dw?$w(e,n):Fw(e,n))&&(c=al(c,"onBeforeInput"),0<c.length&&(u=new Dm("onBeforeInput","beforeinput",null,n,u),d.push({event:u,listeners:c}),u.data=C))}j1(d,t)})}function so(e,t,n){return{instance:e,listener:t,currentTarget:n}}function al(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=eo(e,n),a!=null&&r.unshift(so(e,a,i)),a=eo(e,t),a!=null&&r.push(so(e,a,i))),e=e.return}return r}function oi(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Km(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,l=s.alternate,c=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&c!==null&&(s=c,i?(l=eo(n,a),l!=null&&o.unshift(so(n,l,s))):i||(l=eo(n,a),l!=null&&o.push(so(n,l,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var eb=/\r\n?/g,tb=/\u0000|\uFFFD/g;function Jm(e){return(typeof e=="string"?e:""+e).replace(eb,`
`).replace(tb,"")}function ns(e,t,n){if(t=Jm(t),Jm(e)!==t&&n)throw Error(R(425))}function ol(){}var wf=null,bf=null;function Sf(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var kf=typeof setTimeout=="function"?setTimeout:void 0,nb=typeof clearTimeout=="function"?clearTimeout:void 0,Xm=typeof Promise=="function"?Promise:void 0,rb=typeof queueMicrotask=="function"?queueMicrotask:typeof Xm<"u"?function(e){return Xm.resolve(null).then(e).catch(ib)}:kf;function ib(e){setTimeout(function(){throw e})}function fu(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),ro(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ro(t)}function sr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Zm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var ra=Math.random().toString(36).slice(2),dn="__reactFiber$"+ra,lo="__reactProps$"+ra,On="__reactContainer$"+ra,Ef="__reactEvents$"+ra,ab="__reactListeners$"+ra,ob="__reactHandles$"+ra;function Tr(e){var t=e[dn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[On]||n[dn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Zm(e);e!==null;){if(n=e[dn])return n;e=Zm(e)}return t}e=n,n=e.parentNode}return null}function Ro(e){return e=e[dn]||e[On],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function mi(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(R(33))}function Bl(e){return e[lo]||null}var Cf=[],hi=-1;function Er(e){return{current:e}}function xe(e){0>hi||(e.current=Cf[hi],Cf[hi]=null,hi--)}function me(e,t){hi++,Cf[hi]=e.current,e.current=t}var gr={},ft=Er(gr),kt=Er(!1),Wr=gr;function Di(e,t){var n=e.type.contextTypes;if(!n)return gr;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Et(e){return e=e.childContextTypes,e!=null}function sl(){xe(kt),xe(ft)}function eh(e,t,n){if(ft.current!==gr)throw Error(R(168));me(ft,t),me(kt,n)}function N1(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(R(108,Vx(e)||"Unknown",i));return Re({},n,r)}function ll(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||gr,Wr=ft.current,me(ft,e),me(kt,kt.current),!0}function th(e,t,n){var r=e.stateNode;if(!r)throw Error(R(169));n?(e=N1(e,t,Wr),r.__reactInternalMemoizedMergedChildContext=e,xe(kt),xe(ft),me(ft,e)):xe(kt),me(kt,n)}var kn=null,Hl=!1,du=!1;function A1(e){kn===null?kn=[e]:kn.push(e)}function sb(e){Hl=!0,A1(e)}function Cr(){if(!du&&kn!==null){du=!0;var e=0,t=se;try{var n=kn;for(se=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}kn=null,Hl=!1}catch(i){throw kn!==null&&(kn=kn.slice(e+1)),e1($d,Cr),i}finally{se=t,du=!1}}return null}var gi=[],vi=0,cl=null,ul=0,Dt=[],$t=0,Gr=null,En=1,Cn="";function Nr(e,t){gi[vi++]=ul,gi[vi++]=cl,cl=e,ul=t}function O1(e,t,n){Dt[$t++]=En,Dt[$t++]=Cn,Dt[$t++]=Gr,Gr=e;var r=En;e=Cn;var i=32-rn(r)-1;r&=~(1<<i),n+=1;var a=32-rn(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,En=1<<32-rn(t)+i|n<<i|r,Cn=a+e}else En=1<<a|n<<i|r,Cn=e}function qd(e){e.return!==null&&(Nr(e,1),O1(e,1,0))}function Qd(e){for(;e===cl;)cl=gi[--vi],gi[vi]=null,ul=gi[--vi],gi[vi]=null;for(;e===Gr;)Gr=Dt[--$t],Dt[$t]=null,Cn=Dt[--$t],Dt[$t]=null,En=Dt[--$t],Dt[$t]=null}var At=null,Nt=null,Ee=!1,en=null;function R1(e,t){var n=Ft(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function nh(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,At=e,Nt=sr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,At=e,Nt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Gr!==null?{id:En,overflow:Cn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ft(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,At=e,Nt=null,!0):!1;default:return!1}}function jf(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Pf(e){if(Ee){var t=Nt;if(t){var n=t;if(!nh(e,t)){if(jf(e))throw Error(R(418));t=sr(n.nextSibling);var r=At;t&&nh(e,t)?R1(r,n):(e.flags=e.flags&-4097|2,Ee=!1,At=e)}}else{if(jf(e))throw Error(R(418));e.flags=e.flags&-4097|2,Ee=!1,At=e}}}function rh(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;At=e}function rs(e){if(e!==At)return!1;if(!Ee)return rh(e),Ee=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Sf(e.type,e.memoizedProps)),t&&(t=Nt)){if(jf(e))throw T1(),Error(R(418));for(;t;)R1(e,t),t=sr(t.nextSibling)}if(rh(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(R(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Nt=sr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Nt=null}}else Nt=At?sr(e.stateNode.nextSibling):null;return!0}function T1(){for(var e=Nt;e;)e=sr(e.nextSibling)}function $i(){Nt=At=null,Ee=!1}function Kd(e){en===null?en=[e]:en.push(e)}var lb=zn.ReactCurrentBatchConfig;function Jt(e,t){if(e&&e.defaultProps){t=Re({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var fl=Er(null),dl=null,yi=null,Jd=null;function Xd(){Jd=yi=dl=null}function Zd(e){var t=fl.current;xe(fl),e._currentValue=t}function Nf(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Ri(e,t){dl=e,Jd=yi=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(wt=!0),e.firstContext=null)}function Ht(e){var t=e._currentValue;if(Jd!==e)if(e={context:e,memoizedValue:t,next:null},yi===null){if(dl===null)throw Error(R(308));yi=e,dl.dependencies={lanes:0,firstContext:e}}else yi=yi.next=e;return t}var Lr=null;function ep(e){Lr===null?Lr=[e]:Lr.push(e)}function L1(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,ep(t)):(n.next=i.next,i.next=n),t.interleaved=n,Rn(e,r)}function Rn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Kn=!1;function tp(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function _1(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function jn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function lr(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,te&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Rn(e,n)}return i=r.interleaved,i===null?(t.next=t,ep(r)):(t.next=i.next,i.next=t),r.interleaved=t,Rn(e,n)}function js(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Fd(e,n)}}function ih(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function pl(e,t,n,r){var i=e.updateQueue;Kn=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var l=s,c=l.next;l.next=null,o===null?a=c:o.next=c,o=l;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=c:s.next=c,u.lastBaseUpdate=l))}if(a!==null){var d=i.baseState;o=0,u=c=l=null,s=a;do{var p=s.lane,v=s.eventTime;if((r&p)===p){u!==null&&(u=u.next={eventTime:v,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var h=e,y=s;switch(p=t,v=n,y.tag){case 1:if(h=y.payload,typeof h=="function"){d=h.call(v,d,p);break e}d=h;break e;case 3:h.flags=h.flags&-65537|128;case 0:if(h=y.payload,p=typeof h=="function"?h.call(v,d,p):h,p==null)break e;d=Re({},d,p);break e;case 2:Kn=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[s]:p.push(s))}else v={eventTime:v,lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(c=u=v,l=d):u=u.next=v,o|=p;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);if(u===null&&(l=d),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=u,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);qr|=o,e.lanes=o,e.memoizedState=d}}function ah(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(R(191,i));i.call(r)}}}var I1=new L0.Component().refs;function Af(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Re({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Vl={isMounted:function(e){return(e=e._reactInternals)?ni(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=mt(),i=ur(e),a=jn(r,i);a.payload=t,n!=null&&(a.callback=n),t=lr(e,a,i),t!==null&&(an(t,e,i,r),js(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=mt(),i=ur(e),a=jn(r,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=lr(e,a,i),t!==null&&(an(t,e,i,r),js(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=mt(),r=ur(e),i=jn(n,r);i.tag=2,t!=null&&(i.callback=t),t=lr(e,i,r),t!==null&&(an(t,e,r,n),js(t,e,r))}};function oh(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!ao(n,r)||!ao(i,a):!0}function M1(e,t,n){var r=!1,i=gr,a=t.contextType;return typeof a=="object"&&a!==null?a=Ht(a):(i=Et(t)?Wr:ft.current,r=t.contextTypes,a=(r=r!=null)?Di(e,i):gr),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Vl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function sh(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Vl.enqueueReplaceState(t,t.state,null)}function Of(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=I1,tp(e);var a=t.contextType;typeof a=="object"&&a!==null?i.context=Ht(a):(a=Et(t)?Wr:ft.current,i.context=Di(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(Af(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Vl.enqueueReplaceState(i,i.state,null),pl(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function ya(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(R(309));var r=n.stateNode}if(!r)throw Error(R(147,e));var i=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(o){var s=i.refs;s===I1&&(s=i.refs={}),o===null?delete s[a]:s[a]=o},t._stringRef=a,t)}if(typeof e!="string")throw Error(R(284));if(!n._owner)throw Error(R(290,e))}return e}function is(e,t){throw e=Object.prototype.toString.call(t),Error(R(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function lh(e){var t=e._init;return t(e._payload)}function z1(e){function t(g,m){if(e){var w=g.deletions;w===null?(g.deletions=[m],g.flags|=16):w.push(m)}}function n(g,m){if(!e)return null;for(;m!==null;)t(g,m),m=m.sibling;return null}function r(g,m){for(g=new Map;m!==null;)m.key!==null?g.set(m.key,m):g.set(m.index,m),m=m.sibling;return g}function i(g,m){return g=fr(g,m),g.index=0,g.sibling=null,g}function a(g,m,w){return g.index=w,e?(w=g.alternate,w!==null?(w=w.index,w<m?(g.flags|=2,m):w):(g.flags|=2,m)):(g.flags|=1048576,m)}function o(g){return e&&g.alternate===null&&(g.flags|=2),g}function s(g,m,w,x){return m===null||m.tag!==6?(m=xu(w,g.mode,x),m.return=g,m):(m=i(m,w),m.return=g,m)}function l(g,m,w,x){var S=w.type;return S===ui?u(g,m,w.props.children,x,w.key):m!==null&&(m.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Qn&&lh(S)===m.type)?(x=i(m,w.props),x.ref=ya(g,m,w),x.return=g,x):(x=Ts(w.type,w.key,w.props,null,g.mode,x),x.ref=ya(g,m,w),x.return=g,x)}function c(g,m,w,x){return m===null||m.tag!==4||m.stateNode.containerInfo!==w.containerInfo||m.stateNode.implementation!==w.implementation?(m=wu(w,g.mode,x),m.return=g,m):(m=i(m,w.children||[]),m.return=g,m)}function u(g,m,w,x,S){return m===null||m.tag!==7?(m=Ur(w,g.mode,x,S),m.return=g,m):(m=i(m,w),m.return=g,m)}function d(g,m,w){if(typeof m=="string"&&m!==""||typeof m=="number")return m=xu(""+m,g.mode,w),m.return=g,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Yo:return w=Ts(m.type,m.key,m.props,null,g.mode,w),w.ref=ya(g,null,m),w.return=g,w;case ci:return m=wu(m,g.mode,w),m.return=g,m;case Qn:var x=m._init;return d(g,x(m._payload),w)}if(Pa(m)||pa(m))return m=Ur(m,g.mode,w,null),m.return=g,m;is(g,m)}return null}function p(g,m,w,x){var S=m!==null?m.key:null;if(typeof w=="string"&&w!==""||typeof w=="number")return S!==null?null:s(g,m,""+w,x);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Yo:return w.key===S?l(g,m,w,x):null;case ci:return w.key===S?c(g,m,w,x):null;case Qn:return S=w._init,p(g,m,S(w._payload),x)}if(Pa(w)||pa(w))return S!==null?null:u(g,m,w,x,null);is(g,w)}return null}function v(g,m,w,x,S){if(typeof x=="string"&&x!==""||typeof x=="number")return g=g.get(w)||null,s(m,g,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Yo:return g=g.get(x.key===null?w:x.key)||null,l(m,g,x,S);case ci:return g=g.get(x.key===null?w:x.key)||null,c(m,g,x,S);case Qn:var P=x._init;return v(g,m,w,P(x._payload),S)}if(Pa(x)||pa(x))return g=g.get(w)||null,u(m,g,x,S,null);is(m,x)}return null}function h(g,m,w,x){for(var S=null,P=null,C=m,O=m=0,z=null;C!==null&&O<w.length;O++){C.index>O?(z=C,C=null):z=C.sibling;var L=p(g,C,w[O],x);if(L===null){C===null&&(C=z);break}e&&C&&L.alternate===null&&t(g,C),m=a(L,m,O),P===null?S=L:P.sibling=L,P=L,C=z}if(O===w.length)return n(g,C),Ee&&Nr(g,O),S;if(C===null){for(;O<w.length;O++)C=d(g,w[O],x),C!==null&&(m=a(C,m,O),P===null?S=C:P.sibling=C,P=C);return Ee&&Nr(g,O),S}for(C=r(g,C);O<w.length;O++)z=v(C,g,O,w[O],x),z!==null&&(e&&z.alternate!==null&&C.delete(z.key===null?O:z.key),m=a(z,m,O),P===null?S=z:P.sibling=z,P=z);return e&&C.forEach(function(Z){return t(g,Z)}),Ee&&Nr(g,O),S}function y(g,m,w,x){var S=pa(w);if(typeof S!="function")throw Error(R(150));if(w=S.call(w),w==null)throw Error(R(151));for(var P=S=null,C=m,O=m=0,z=null,L=w.next();C!==null&&!L.done;O++,L=w.next()){C.index>O?(z=C,C=null):z=C.sibling;var Z=p(g,C,L.value,x);if(Z===null){C===null&&(C=z);break}e&&C&&Z.alternate===null&&t(g,C),m=a(Z,m,O),P===null?S=Z:P.sibling=Z,P=Z,C=z}if(L.done)return n(g,C),Ee&&Nr(g,O),S;if(C===null){for(;!L.done;O++,L=w.next())L=d(g,L.value,x),L!==null&&(m=a(L,m,O),P===null?S=L:P.sibling=L,P=L);return Ee&&Nr(g,O),S}for(C=r(g,C);!L.done;O++,L=w.next())L=v(C,g,O,L.value,x),L!==null&&(e&&L.alternate!==null&&C.delete(L.key===null?O:L.key),m=a(L,m,O),P===null?S=L:P.sibling=L,P=L);return e&&C.forEach(function(G){return t(g,G)}),Ee&&Nr(g,O),S}function b(g,m,w,x){if(typeof w=="object"&&w!==null&&w.type===ui&&w.key===null&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case Yo:e:{for(var S=w.key,P=m;P!==null;){if(P.key===S){if(S=w.type,S===ui){if(P.tag===7){n(g,P.sibling),m=i(P,w.props.children),m.return=g,g=m;break e}}else if(P.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Qn&&lh(S)===P.type){n(g,P.sibling),m=i(P,w.props),m.ref=ya(g,P,w),m.return=g,g=m;break e}n(g,P);break}else t(g,P);P=P.sibling}w.type===ui?(m=Ur(w.props.children,g.mode,x,w.key),m.return=g,g=m):(x=Ts(w.type,w.key,w.props,null,g.mode,x),x.ref=ya(g,m,w),x.return=g,g=x)}return o(g);case ci:e:{for(P=w.key;m!==null;){if(m.key===P)if(m.tag===4&&m.stateNode.containerInfo===w.containerInfo&&m.stateNode.implementation===w.implementation){n(g,m.sibling),m=i(m,w.children||[]),m.return=g,g=m;break e}else{n(g,m);break}else t(g,m);m=m.sibling}m=wu(w,g.mode,x),m.return=g,g=m}return o(g);case Qn:return P=w._init,b(g,m,P(w._payload),x)}if(Pa(w))return h(g,m,w,x);if(pa(w))return y(g,m,w,x);is(g,w)}return typeof w=="string"&&w!==""||typeof w=="number"?(w=""+w,m!==null&&m.tag===6?(n(g,m.sibling),m=i(m,w),m.return=g,g=m):(n(g,m),m=xu(w,g.mode,x),m.return=g,g=m),o(g)):n(g,m)}return b}var Fi=z1(!0),D1=z1(!1),To={},gn=Er(To),co=Er(To),uo=Er(To);function _r(e){if(e===To)throw Error(R(174));return e}function np(e,t){switch(me(uo,t),me(co,e),me(gn,To),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:lf(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=lf(t,e)}xe(gn),me(gn,t)}function Ui(){xe(gn),xe(co),xe(uo)}function $1(e){_r(uo.current);var t=_r(gn.current),n=lf(t,e.type);t!==n&&(me(co,e),me(gn,n))}function rp(e){co.current===e&&(xe(gn),xe(co))}var Ne=Er(0);function ml(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var pu=[];function ip(){for(var e=0;e<pu.length;e++)pu[e]._workInProgressVersionPrimary=null;pu.length=0}var Ps=zn.ReactCurrentDispatcher,mu=zn.ReactCurrentBatchConfig,Yr=0,Oe=null,We=null,Ke=null,hl=!1,Fa=!1,fo=0,cb=0;function st(){throw Error(R(321))}function ap(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!sn(e[n],t[n]))return!1;return!0}function op(e,t,n,r,i,a){if(Yr=a,Oe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ps.current=e===null||e.memoizedState===null?pb:mb,e=n(r,i),Fa){a=0;do{if(Fa=!1,fo=0,25<=a)throw Error(R(301));a+=1,Ke=We=null,t.updateQueue=null,Ps.current=hb,e=n(r,i)}while(Fa)}if(Ps.current=gl,t=We!==null&&We.next!==null,Yr=0,Ke=We=Oe=null,hl=!1,t)throw Error(R(300));return e}function sp(){var e=fo!==0;return fo=0,e}function un(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ke===null?Oe.memoizedState=Ke=e:Ke=Ke.next=e,Ke}function Vt(){if(We===null){var e=Oe.alternate;e=e!==null?e.memoizedState:null}else e=We.next;var t=Ke===null?Oe.memoizedState:Ke.next;if(t!==null)Ke=t,We=e;else{if(e===null)throw Error(R(310));We=e,e={memoizedState:We.memoizedState,baseState:We.baseState,baseQueue:We.baseQueue,queue:We.queue,next:null},Ke===null?Oe.memoizedState=Ke=e:Ke=Ke.next=e}return Ke}function po(e,t){return typeof t=="function"?t(e):t}function hu(e){var t=Vt(),n=t.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=e;var r=We,i=r.baseQueue,a=n.pending;if(a!==null){if(i!==null){var o=i.next;i.next=a.next,a.next=o}r.baseQueue=i=a,n.pending=null}if(i!==null){a=i.next,r=r.baseState;var s=o=null,l=null,c=a;do{var u=c.lane;if((Yr&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(s=l=d,o=r):l=l.next=d,Oe.lanes|=u,qr|=u}c=c.next}while(c!==null&&c!==a);l===null?o=r:l.next=s,sn(r,t.memoizedState)||(wt=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do a=i.lane,Oe.lanes|=a,qr|=a,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function gu(e){var t=Vt(),n=t.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do a=e(a,o.action),o=o.next;while(o!==i);sn(a,t.memoizedState)||(wt=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function F1(){}function U1(e,t){var n=Oe,r=Vt(),i=t(),a=!sn(r.memoizedState,i);if(a&&(r.memoizedState=i,wt=!0),r=r.queue,lp(V1.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||Ke!==null&&Ke.memoizedState.tag&1){if(n.flags|=2048,mo(9,H1.bind(null,n,r,i,t),void 0,null),Ze===null)throw Error(R(349));Yr&30||B1(n,t,i)}return i}function B1(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Oe.updateQueue,t===null?(t={lastEffect:null,stores:null},Oe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function H1(e,t,n,r){t.value=n,t.getSnapshot=r,W1(t)&&G1(e)}function V1(e,t,n){return n(function(){W1(t)&&G1(e)})}function W1(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!sn(e,n)}catch{return!0}}function G1(e){var t=Rn(e,1);t!==null&&an(t,e,1,-1)}function ch(e){var t=un();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:po,lastRenderedState:e},t.queue=e,e=e.dispatch=db.bind(null,Oe,e),[t.memoizedState,e]}function mo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Oe.updateQueue,t===null?(t={lastEffect:null,stores:null},Oe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Y1(){return Vt().memoizedState}function Ns(e,t,n,r){var i=un();Oe.flags|=e,i.memoizedState=mo(1|t,n,void 0,r===void 0?null:r)}function Wl(e,t,n,r){var i=Vt();r=r===void 0?null:r;var a=void 0;if(We!==null){var o=We.memoizedState;if(a=o.destroy,r!==null&&ap(r,o.deps)){i.memoizedState=mo(t,n,a,r);return}}Oe.flags|=e,i.memoizedState=mo(1|t,n,a,r)}function uh(e,t){return Ns(8390656,8,e,t)}function lp(e,t){return Wl(2048,8,e,t)}function q1(e,t){return Wl(4,2,e,t)}function Q1(e,t){return Wl(4,4,e,t)}function K1(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function J1(e,t,n){return n=n!=null?n.concat([e]):null,Wl(4,4,K1.bind(null,t,e),n)}function cp(){}function X1(e,t){var n=Vt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ap(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Z1(e,t){var n=Vt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ap(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function ev(e,t,n){return Yr&21?(sn(n,t)||(n=r1(),Oe.lanes|=n,qr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,wt=!0),e.memoizedState=n)}function ub(e,t){var n=se;se=n!==0&&4>n?n:4,e(!0);var r=mu.transition;mu.transition={};try{e(!1),t()}finally{se=n,mu.transition=r}}function tv(){return Vt().memoizedState}function fb(e,t,n){var r=ur(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},nv(e))rv(t,n);else if(n=L1(e,t,n,r),n!==null){var i=mt();an(n,e,r,i),iv(n,t,r)}}function db(e,t,n){var r=ur(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(nv(e))rv(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,sn(s,o)){var l=t.interleaved;l===null?(i.next=i,ep(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=L1(e,t,i,r),n!==null&&(i=mt(),an(n,e,r,i),iv(n,t,r))}}function nv(e){var t=e.alternate;return e===Oe||t!==null&&t===Oe}function rv(e,t){Fa=hl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function iv(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Fd(e,n)}}var gl={readContext:Ht,useCallback:st,useContext:st,useEffect:st,useImperativeHandle:st,useInsertionEffect:st,useLayoutEffect:st,useMemo:st,useReducer:st,useRef:st,useState:st,useDebugValue:st,useDeferredValue:st,useTransition:st,useMutableSource:st,useSyncExternalStore:st,useId:st,unstable_isNewReconciler:!1},pb={readContext:Ht,useCallback:function(e,t){return un().memoizedState=[e,t===void 0?null:t],e},useContext:Ht,useEffect:uh,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ns(4194308,4,K1.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ns(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ns(4,2,e,t)},useMemo:function(e,t){var n=un();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=un();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=fb.bind(null,Oe,e),[r.memoizedState,e]},useRef:function(e){var t=un();return e={current:e},t.memoizedState=e},useState:ch,useDebugValue:cp,useDeferredValue:function(e){return un().memoizedState=e},useTransition:function(){var e=ch(!1),t=e[0];return e=ub.bind(null,e[1]),un().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Oe,i=un();if(Ee){if(n===void 0)throw Error(R(407));n=n()}else{if(n=t(),Ze===null)throw Error(R(349));Yr&30||B1(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,uh(V1.bind(null,r,a,e),[e]),r.flags|=2048,mo(9,H1.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=un(),t=Ze.identifierPrefix;if(Ee){var n=Cn,r=En;n=(r&~(1<<32-rn(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=fo++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=cb++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},mb={readContext:Ht,useCallback:X1,useContext:Ht,useEffect:lp,useImperativeHandle:J1,useInsertionEffect:q1,useLayoutEffect:Q1,useMemo:Z1,useReducer:hu,useRef:Y1,useState:function(){return hu(po)},useDebugValue:cp,useDeferredValue:function(e){var t=Vt();return ev(t,We.memoizedState,e)},useTransition:function(){var e=hu(po)[0],t=Vt().memoizedState;return[e,t]},useMutableSource:F1,useSyncExternalStore:U1,useId:tv,unstable_isNewReconciler:!1},hb={readContext:Ht,useCallback:X1,useContext:Ht,useEffect:lp,useImperativeHandle:J1,useInsertionEffect:q1,useLayoutEffect:Q1,useMemo:Z1,useReducer:gu,useRef:Y1,useState:function(){return gu(po)},useDebugValue:cp,useDeferredValue:function(e){var t=Vt();return We===null?t.memoizedState=e:ev(t,We.memoizedState,e)},useTransition:function(){var e=gu(po)[0],t=Vt().memoizedState;return[e,t]},useMutableSource:F1,useSyncExternalStore:U1,useId:tv,unstable_isNewReconciler:!1};function Bi(e,t){try{var n="",r=t;do n+=Hx(r),r=r.return;while(r);var i=n}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:i,digest:null}}function vu(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Rf(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var gb=typeof WeakMap=="function"?WeakMap:Map;function av(e,t,n){n=jn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){yl||(yl=!0,Uf=r),Rf(e,t)},n}function ov(e,t,n){n=jn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Rf(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){Rf(e,t),typeof r!="function"&&(cr===null?cr=new Set([this]):cr.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function fh(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new gb;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Ob.bind(null,e,t,n),t.then(e,e))}function dh(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ph(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=jn(-1,1),t.tag=2,lr(n,t,1))),n.lanes|=1),e)}var vb=zn.ReactCurrentOwner,wt=!1;function dt(e,t,n,r){t.child=e===null?D1(t,null,n,r):Fi(t,e.child,n,r)}function mh(e,t,n,r,i){n=n.render;var a=t.ref;return Ri(t,i),r=op(e,t,n,r,a,i),n=sp(),e!==null&&!wt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Tn(e,t,i)):(Ee&&n&&qd(t),t.flags|=1,dt(e,t,r,i),t.child)}function hh(e,t,n,r,i){if(e===null){var a=n.type;return typeof a=="function"&&!vp(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,sv(e,t,a,r,i)):(e=Ts(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&i)){var o=a.memoizedProps;if(n=n.compare,n=n!==null?n:ao,n(o,r)&&e.ref===t.ref)return Tn(e,t,i)}return t.flags|=1,e=fr(a,r),e.ref=t.ref,e.return=t,t.child=e}function sv(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(ao(a,r)&&e.ref===t.ref)if(wt=!1,t.pendingProps=r=a,(e.lanes&i)!==0)e.flags&131072&&(wt=!0);else return t.lanes=e.lanes,Tn(e,t,i)}return Tf(e,t,n,r,i)}function lv(e,t,n){var r=t.pendingProps,i=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},me(wi,Pt),Pt|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,me(wi,Pt),Pt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,me(wi,Pt),Pt|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,me(wi,Pt),Pt|=r;return dt(e,t,i,n),t.child}function cv(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Tf(e,t,n,r,i){var a=Et(n)?Wr:ft.current;return a=Di(t,a),Ri(t,i),n=op(e,t,n,r,a,i),r=sp(),e!==null&&!wt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Tn(e,t,i)):(Ee&&r&&qd(t),t.flags|=1,dt(e,t,n,i),t.child)}function gh(e,t,n,r,i){if(Et(n)){var a=!0;ll(t)}else a=!1;if(Ri(t,i),t.stateNode===null)As(e,t),M1(t,n,r),Of(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ht(c):(c=Et(n)?Wr:ft.current,c=Di(t,c));var u=n.getDerivedStateFromProps,d=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==r||l!==c)&&sh(t,o,r,c),Kn=!1;var p=t.memoizedState;o.state=p,pl(t,r,o,i),l=t.memoizedState,s!==r||p!==l||kt.current||Kn?(typeof u=="function"&&(Af(t,n,u,r),l=t.memoizedState),(s=Kn||oh(t,n,s,r,p,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=c,r=s):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,_1(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:Jt(t.type,s),o.props=c,d=t.pendingProps,p=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ht(l):(l=Et(n)?Wr:ft.current,l=Di(t,l));var v=n.getDerivedStateFromProps;(u=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==d||p!==l)&&sh(t,o,r,l),Kn=!1,p=t.memoizedState,o.state=p,pl(t,r,o,i);var h=t.memoizedState;s!==d||p!==h||kt.current||Kn?(typeof v=="function"&&(Af(t,n,v,r),h=t.memoizedState),(c=Kn||oh(t,n,c,r,p,h,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,h,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,h,l)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=h),o.props=r,o.state=h,o.context=l,r=c):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return Lf(e,t,n,r,a,i)}function Lf(e,t,n,r,i,a){cv(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&th(t,n,!1),Tn(e,t,a);r=t.stateNode,vb.current=t;var s=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Fi(t,e.child,null,a),t.child=Fi(t,null,s,a)):dt(e,t,s,a),t.memoizedState=r.state,i&&th(t,n,!0),t.child}function uv(e){var t=e.stateNode;t.pendingContext?eh(e,t.pendingContext,t.pendingContext!==t.context):t.context&&eh(e,t.context,!1),np(e,t.containerInfo)}function vh(e,t,n,r,i){return $i(),Kd(i),t.flags|=256,dt(e,t,n,r),t.child}var _f={dehydrated:null,treeContext:null,retryLane:0};function If(e){return{baseLanes:e,cachePool:null,transitions:null}}function fv(e,t,n){var r=t.pendingProps,i=Ne.current,a=!1,o=(t.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),me(Ne,i&1),e===null)return Pf(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,a?(r=t.mode,a=t.child,o={mode:"hidden",children:o},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=ql(o,r,0,null),e=Ur(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=If(n),t.memoizedState=_f,e):up(t,o));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return yb(e,t,o,r,s,i,n);if(a){a=r.fallback,o=t.mode,i=e.child,s=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=fr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?a=fr(s,a):(a=Ur(a,o,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,o=e.child.memoizedState,o=o===null?If(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~n,t.memoizedState=_f,r}return a=e.child,e=a.sibling,r=fr(a,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function up(e,t){return t=ql({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function as(e,t,n,r){return r!==null&&Kd(r),Fi(t,e.child,null,n),e=up(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function yb(e,t,n,r,i,a,o){if(n)return t.flags&256?(t.flags&=-257,r=vu(Error(R(422))),as(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,i=t.mode,r=ql({mode:"visible",children:r.children},i,0,null),a=Ur(a,i,o,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,t.mode&1&&Fi(t,e.child,null,o),t.child.memoizedState=If(o),t.memoizedState=_f,a);if(!(t.mode&1))return as(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,a=Error(R(419)),r=vu(a,r,void 0),as(e,t,o,r)}if(s=(o&e.childLanes)!==0,wt||s){if(r=Ze,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,Rn(e,i),an(r,e,i,-1))}return gp(),r=vu(Error(R(421))),as(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Rb.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,Nt=sr(i.nextSibling),At=t,Ee=!0,en=null,e!==null&&(Dt[$t++]=En,Dt[$t++]=Cn,Dt[$t++]=Gr,En=e.id,Cn=e.overflow,Gr=t),t=up(t,r.children),t.flags|=4096,t)}function yh(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Nf(e.return,t,n)}function yu(e,t,n,r,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function dv(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(dt(e,t,r.children,n),r=Ne.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&yh(e,n,t);else if(e.tag===19)yh(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(me(Ne,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ml(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),yu(t,!1,i,n,a);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ml(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}yu(t,!0,n,null,a);break;case"together":yu(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function As(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Tn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),qr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(R(153));if(t.child!==null){for(e=t.child,n=fr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=fr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function xb(e,t,n){switch(t.tag){case 3:uv(t),$i();break;case 5:$1(t);break;case 1:Et(t.type)&&ll(t);break;case 4:np(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;me(fl,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(me(Ne,Ne.current&1),t.flags|=128,null):n&t.child.childLanes?fv(e,t,n):(me(Ne,Ne.current&1),e=Tn(e,t,n),e!==null?e.sibling:null);me(Ne,Ne.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return dv(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),me(Ne,Ne.current),r)break;return null;case 22:case 23:return t.lanes=0,lv(e,t,n)}return Tn(e,t,n)}var pv,Mf,mv,hv;pv=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Mf=function(){};mv=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,_r(gn.current);var a=null;switch(n){case"input":i=rf(e,i),r=rf(e,r),a=[];break;case"select":i=Re({},i,{value:void 0}),r=Re({},r,{value:void 0}),a=[];break;case"textarea":i=sf(e,i),r=sf(e,r),a=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ol)}cf(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var s=i[c];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Xa.hasOwnProperty(c)?a||(a=[]):(a=a||[]).push(c,null));for(c in r){var l=r[c];if(s=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==s&&(l!=null||s!=null))if(c==="style")if(s){for(o in s)!s.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&s[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(a||(a=[]),a.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(a=a||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(a=a||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Xa.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&he("scroll",e),a||s===l||(a=[])):(a=a||[]).push(c,l))}n&&(a=a||[]).push("style",n);var c=a;(t.updateQueue=c)&&(t.flags|=4)}};hv=function(e,t,n,r){n!==r&&(t.flags|=4)};function xa(e,t){if(!Ee)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function lt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function wb(e,t,n){var r=t.pendingProps;switch(Qd(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return lt(t),null;case 1:return Et(t.type)&&sl(),lt(t),null;case 3:return r=t.stateNode,Ui(),xe(kt),xe(ft),ip(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(rs(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,en!==null&&(Vf(en),en=null))),Mf(e,t),lt(t),null;case 5:rp(t);var i=_r(uo.current);if(n=t.type,e!==null&&t.stateNode!=null)mv(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(R(166));return lt(t),null}if(e=_r(gn.current),rs(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[dn]=t,r[lo]=a,e=(t.mode&1)!==0,n){case"dialog":he("cancel",r),he("close",r);break;case"iframe":case"object":case"embed":he("load",r);break;case"video":case"audio":for(i=0;i<Aa.length;i++)he(Aa[i],r);break;case"source":he("error",r);break;case"img":case"image":case"link":he("error",r),he("load",r);break;case"details":he("toggle",r);break;case"input":Pm(r,a),he("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},he("invalid",r);break;case"textarea":Am(r,a),he("invalid",r)}cf(n,a),i=null;for(var o in a)if(a.hasOwnProperty(o)){var s=a[o];o==="children"?typeof s=="string"?r.textContent!==s&&(a.suppressHydrationWarning!==!0&&ns(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(a.suppressHydrationWarning!==!0&&ns(r.textContent,s,e),i=["children",""+s]):Xa.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&he("scroll",r)}switch(n){case"input":qo(r),Nm(r,a,!0);break;case"textarea":qo(r),Om(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=ol)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=B0(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[dn]=t,e[lo]=r,pv(e,t,!1,!1),t.stateNode=e;e:{switch(o=uf(n,r),n){case"dialog":he("cancel",e),he("close",e),i=r;break;case"iframe":case"object":case"embed":he("load",e),i=r;break;case"video":case"audio":for(i=0;i<Aa.length;i++)he(Aa[i],e);i=r;break;case"source":he("error",e),i=r;break;case"img":case"image":case"link":he("error",e),he("load",e),i=r;break;case"details":he("toggle",e),i=r;break;case"input":Pm(e,r),i=rf(e,r),he("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Re({},r,{value:void 0}),he("invalid",e);break;case"textarea":Am(e,r),i=sf(e,r),he("invalid",e);break;default:i=r}cf(n,i),s=i;for(a in s)if(s.hasOwnProperty(a)){var l=s[a];a==="style"?W0(e,l):a==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&H0(e,l)):a==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Za(e,l):typeof l=="number"&&Za(e,""+l):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Xa.hasOwnProperty(a)?l!=null&&a==="onScroll"&&he("scroll",e):l!=null&&_d(e,a,l,o))}switch(n){case"input":qo(e),Nm(e,r,!1);break;case"textarea":qo(e),Om(e);break;case"option":r.value!=null&&e.setAttribute("value",""+hr(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?Pi(e,!!r.multiple,a,!1):r.defaultValue!=null&&Pi(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ol)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return lt(t),null;case 6:if(e&&t.stateNode!=null)hv(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(R(166));if(n=_r(uo.current),_r(gn.current),rs(t)){if(r=t.stateNode,n=t.memoizedProps,r[dn]=t,(a=r.nodeValue!==n)&&(e=At,e!==null))switch(e.tag){case 3:ns(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ns(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[dn]=t,t.stateNode=r}return lt(t),null;case 13:if(xe(Ne),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ee&&Nt!==null&&t.mode&1&&!(t.flags&128))T1(),$i(),t.flags|=98560,a=!1;else if(a=rs(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(R(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(R(317));a[dn]=t}else $i(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;lt(t),a=!1}else en!==null&&(Vf(en),en=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Ne.current&1?Ge===0&&(Ge=3):gp())),t.updateQueue!==null&&(t.flags|=4),lt(t),null);case 4:return Ui(),Mf(e,t),e===null&&oo(t.stateNode.containerInfo),lt(t),null;case 10:return Zd(t.type._context),lt(t),null;case 17:return Et(t.type)&&sl(),lt(t),null;case 19:if(xe(Ne),a=t.memoizedState,a===null)return lt(t),null;if(r=(t.flags&128)!==0,o=a.rendering,o===null)if(r)xa(a,!1);else{if(Ge!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=ml(e),o!==null){for(t.flags|=128,xa(a,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,e=o.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return me(Ne,Ne.current&1|2),t.child}e=e.sibling}a.tail!==null&&De()>Hi&&(t.flags|=128,r=!0,xa(a,!1),t.lanes=4194304)}else{if(!r)if(e=ml(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),xa(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!Ee)return lt(t),null}else 2*De()-a.renderingStartTime>Hi&&n!==1073741824&&(t.flags|=128,r=!0,xa(a,!1),t.lanes=4194304);a.isBackwards?(o.sibling=t.child,t.child=o):(n=a.last,n!==null?n.sibling=o:t.child=o,a.last=o)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=De(),t.sibling=null,n=Ne.current,me(Ne,r?n&1|2:n&1),t):(lt(t),null);case 22:case 23:return hp(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Pt&1073741824&&(lt(t),t.subtreeFlags&6&&(t.flags|=8192)):lt(t),null;case 24:return null;case 25:return null}throw Error(R(156,t.tag))}function bb(e,t){switch(Qd(t),t.tag){case 1:return Et(t.type)&&sl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ui(),xe(kt),xe(ft),ip(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return rp(t),null;case 13:if(xe(Ne),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(R(340));$i()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return xe(Ne),null;case 4:return Ui(),null;case 10:return Zd(t.type._context),null;case 22:case 23:return hp(),null;case 24:return null;default:return null}}var os=!1,ut=!1,Sb=typeof WeakSet=="function"?WeakSet:Set,M=null;function xi(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Le(e,t,r)}else n.current=null}function zf(e,t,n){try{n()}catch(r){Le(e,t,r)}}var xh=!1;function kb(e,t){if(wf=rl,e=x1(),Yd(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var o=0,s=-1,l=-1,c=0,u=0,d=e,p=null;t:for(;;){for(var v;d!==n||i!==0&&d.nodeType!==3||(s=o+i),d!==a||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(v=d.firstChild)!==null;)p=d,d=v;for(;;){if(d===e)break t;if(p===n&&++c===i&&(s=o),p===a&&++u===r&&(l=o),(v=d.nextSibling)!==null)break;d=p,p=d.parentNode}d=v}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(bf={focusedElem:e,selectionRange:n},rl=!1,M=t;M!==null;)if(t=M,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,M=e;else for(;M!==null;){t=M;try{var h=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(h!==null){var y=h.memoizedProps,b=h.memoizedState,g=t.stateNode,m=g.getSnapshotBeforeUpdate(t.elementType===t.type?y:Jt(t.type,y),b);g.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var w=t.stateNode.containerInfo;w.nodeType===1?w.textContent="":w.nodeType===9&&w.documentElement&&w.removeChild(w.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(R(163))}}catch(x){Le(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,M=e;break}M=t.return}return h=xh,xh=!1,h}function Ua(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&zf(t,n,a)}i=i.next}while(i!==r)}}function Gl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Df(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function gv(e){var t=e.alternate;t!==null&&(e.alternate=null,gv(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[dn],delete t[lo],delete t[Ef],delete t[ab],delete t[ob])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function vv(e){return e.tag===5||e.tag===3||e.tag===4}function wh(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||vv(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function $f(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ol));else if(r!==4&&(e=e.child,e!==null))for($f(e,t,n),e=e.sibling;e!==null;)$f(e,t,n),e=e.sibling}function Ff(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ff(e,t,n),e=e.sibling;e!==null;)Ff(e,t,n),e=e.sibling}var nt=null,Xt=!1;function Wn(e,t,n){for(n=n.child;n!==null;)yv(e,t,n),n=n.sibling}function yv(e,t,n){if(hn&&typeof hn.onCommitFiberUnmount=="function")try{hn.onCommitFiberUnmount(Dl,n)}catch{}switch(n.tag){case 5:ut||xi(n,t);case 6:var r=nt,i=Xt;nt=null,Wn(e,t,n),nt=r,Xt=i,nt!==null&&(Xt?(e=nt,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):nt.removeChild(n.stateNode));break;case 18:nt!==null&&(Xt?(e=nt,n=n.stateNode,e.nodeType===8?fu(e.parentNode,n):e.nodeType===1&&fu(e,n),ro(e)):fu(nt,n.stateNode));break;case 4:r=nt,i=Xt,nt=n.stateNode.containerInfo,Xt=!0,Wn(e,t,n),nt=r,Xt=i;break;case 0:case 11:case 14:case 15:if(!ut&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var a=i,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&zf(n,t,o),i=i.next}while(i!==r)}Wn(e,t,n);break;case 1:if(!ut&&(xi(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){Le(n,t,s)}Wn(e,t,n);break;case 21:Wn(e,t,n);break;case 22:n.mode&1?(ut=(r=ut)||n.memoizedState!==null,Wn(e,t,n),ut=r):Wn(e,t,n);break;default:Wn(e,t,n)}}function bh(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Sb),t.forEach(function(r){var i=Tb.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Kt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var a=e,o=t,s=o;e:for(;s!==null;){switch(s.tag){case 5:nt=s.stateNode,Xt=!1;break e;case 3:nt=s.stateNode.containerInfo,Xt=!0;break e;case 4:nt=s.stateNode.containerInfo,Xt=!0;break e}s=s.return}if(nt===null)throw Error(R(160));yv(a,o,i),nt=null,Xt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){Le(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)xv(t,e),t=t.sibling}function xv(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Kt(t,e),cn(e),r&4){try{Ua(3,e,e.return),Gl(3,e)}catch(y){Le(e,e.return,y)}try{Ua(5,e,e.return)}catch(y){Le(e,e.return,y)}}break;case 1:Kt(t,e),cn(e),r&512&&n!==null&&xi(n,n.return);break;case 5:if(Kt(t,e),cn(e),r&512&&n!==null&&xi(n,n.return),e.flags&32){var i=e.stateNode;try{Za(i,"")}catch(y){Le(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,o=n!==null?n.memoizedProps:a,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&a.type==="radio"&&a.name!=null&&F0(i,a),uf(s,o);var c=uf(s,a);for(o=0;o<l.length;o+=2){var u=l[o],d=l[o+1];u==="style"?W0(i,d):u==="dangerouslySetInnerHTML"?H0(i,d):u==="children"?Za(i,d):_d(i,u,d,c)}switch(s){case"input":af(i,a);break;case"textarea":U0(i,a);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var v=a.value;v!=null?Pi(i,!!a.multiple,v,!1):p!==!!a.multiple&&(a.defaultValue!=null?Pi(i,!!a.multiple,a.defaultValue,!0):Pi(i,!!a.multiple,a.multiple?[]:"",!1))}i[lo]=a}catch(y){Le(e,e.return,y)}}break;case 6:if(Kt(t,e),cn(e),r&4){if(e.stateNode===null)throw Error(R(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(y){Le(e,e.return,y)}}break;case 3:if(Kt(t,e),cn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ro(t.containerInfo)}catch(y){Le(e,e.return,y)}break;case 4:Kt(t,e),cn(e);break;case 13:Kt(t,e),cn(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(pp=De())),r&4&&bh(e);break;case 22:if(u=n!==null&&n.memoizedState!==null,e.mode&1?(ut=(c=ut)||u,Kt(t,e),ut=c):Kt(t,e),cn(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!u&&e.mode&1)for(M=e,u=e.child;u!==null;){for(d=M=u;M!==null;){switch(p=M,v=p.child,p.tag){case 0:case 11:case 14:case 15:Ua(4,p,p.return);break;case 1:xi(p,p.return);var h=p.stateNode;if(typeof h.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,h.props=t.memoizedProps,h.state=t.memoizedState,h.componentWillUnmount()}catch(y){Le(r,n,y)}}break;case 5:xi(p,p.return);break;case 22:if(p.memoizedState!==null){kh(d);continue}}v!==null?(v.return=p,M=v):kh(d)}u=u.sibling}e:for(u=null,d=e;;){if(d.tag===5){if(u===null){u=d;try{i=d.stateNode,c?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(s=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=V0("display",o))}catch(y){Le(e,e.return,y)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(y){Le(e,e.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Kt(t,e),cn(e),r&4&&bh(e);break;case 21:break;default:Kt(t,e),cn(e)}}function cn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(vv(n)){var r=n;break e}n=n.return}throw Error(R(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Za(i,""),r.flags&=-33);var a=wh(e);Ff(e,a,i);break;case 3:case 4:var o=r.stateNode.containerInfo,s=wh(e);$f(e,s,o);break;default:throw Error(R(161))}}catch(l){Le(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Eb(e,t,n){M=e,wv(e)}function wv(e,t,n){for(var r=(e.mode&1)!==0;M!==null;){var i=M,a=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||os;if(!o){var s=i.alternate,l=s!==null&&s.memoizedState!==null||ut;s=os;var c=ut;if(os=o,(ut=l)&&!c)for(M=i;M!==null;)o=M,l=o.child,o.tag===22&&o.memoizedState!==null?Eh(i):l!==null?(l.return=o,M=l):Eh(i);for(;a!==null;)M=a,wv(a),a=a.sibling;M=i,os=s,ut=c}Sh(e)}else i.subtreeFlags&8772&&a!==null?(a.return=i,M=a):Sh(e)}}function Sh(e){for(;M!==null;){var t=M;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ut||Gl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ut)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Jt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&ah(t,a,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}ah(t,o,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&ro(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(R(163))}ut||t.flags&512&&Df(t)}catch(p){Le(t,t.return,p)}}if(t===e){M=null;break}if(n=t.sibling,n!==null){n.return=t.return,M=n;break}M=t.return}}function kh(e){for(;M!==null;){var t=M;if(t===e){M=null;break}var n=t.sibling;if(n!==null){n.return=t.return,M=n;break}M=t.return}}function Eh(e){for(;M!==null;){var t=M;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Gl(4,t)}catch(l){Le(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){Le(t,i,l)}}var a=t.return;try{Df(t)}catch(l){Le(t,a,l)}break;case 5:var o=t.return;try{Df(t)}catch(l){Le(t,o,l)}}}catch(l){Le(t,t.return,l)}if(t===e){M=null;break}var s=t.sibling;if(s!==null){s.return=t.return,M=s;break}M=t.return}}var Cb=Math.ceil,vl=zn.ReactCurrentDispatcher,fp=zn.ReactCurrentOwner,Ut=zn.ReactCurrentBatchConfig,te=0,Ze=null,Ue=null,rt=0,Pt=0,wi=Er(0),Ge=0,ho=null,qr=0,Yl=0,dp=0,Ba=null,xt=null,pp=0,Hi=1/0,bn=null,yl=!1,Uf=null,cr=null,ss=!1,tr=null,xl=0,Ha=0,Bf=null,Os=-1,Rs=0;function mt(){return te&6?De():Os!==-1?Os:Os=De()}function ur(e){return e.mode&1?te&2&&rt!==0?rt&-rt:lb.transition!==null?(Rs===0&&(Rs=r1()),Rs):(e=se,e!==0||(e=window.event,e=e===void 0?16:u1(e.type)),e):1}function an(e,t,n,r){if(50<Ha)throw Ha=0,Bf=null,Error(R(185));Ao(e,n,r),(!(te&2)||e!==Ze)&&(e===Ze&&(!(te&2)&&(Yl|=n),Ge===4&&Xn(e,rt)),Ct(e,r),n===1&&te===0&&!(t.mode&1)&&(Hi=De()+500,Hl&&Cr()))}function Ct(e,t){var n=e.callbackNode;lw(e,t);var r=nl(e,e===Ze?rt:0);if(r===0)n!==null&&Lm(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Lm(n),t===1)e.tag===0?sb(Ch.bind(null,e)):A1(Ch.bind(null,e)),rb(function(){!(te&6)&&Cr()}),n=null;else{switch(i1(r)){case 1:n=$d;break;case 4:n=t1;break;case 16:n=tl;break;case 536870912:n=n1;break;default:n=tl}n=Nv(n,bv.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function bv(e,t){if(Os=-1,Rs=0,te&6)throw Error(R(327));var n=e.callbackNode;if(Ti()&&e.callbackNode!==n)return null;var r=nl(e,e===Ze?rt:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=wl(e,r);else{t=r;var i=te;te|=2;var a=kv();(Ze!==e||rt!==t)&&(bn=null,Hi=De()+500,Fr(e,t));do try{Nb();break}catch(s){Sv(e,s)}while(1);Xd(),vl.current=a,te=i,Ue!==null?t=0:(Ze=null,rt=0,t=Ge)}if(t!==0){if(t===2&&(i=hf(e),i!==0&&(r=i,t=Hf(e,i))),t===1)throw n=ho,Fr(e,0),Xn(e,r),Ct(e,De()),n;if(t===6)Xn(e,r);else{if(i=e.current.alternate,!(r&30)&&!jb(i)&&(t=wl(e,r),t===2&&(a=hf(e),a!==0&&(r=a,t=Hf(e,a))),t===1))throw n=ho,Fr(e,0),Xn(e,r),Ct(e,De()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(R(345));case 2:Ar(e,xt,bn);break;case 3:if(Xn(e,r),(r&130023424)===r&&(t=pp+500-De(),10<t)){if(nl(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){mt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=kf(Ar.bind(null,e,xt,bn),t);break}Ar(e,xt,bn);break;case 4:if(Xn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-rn(r);a=1<<o,o=t[o],o>i&&(i=o),r&=~a}if(r=i,r=De()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Cb(r/1960))-r,10<r){e.timeoutHandle=kf(Ar.bind(null,e,xt,bn),r);break}Ar(e,xt,bn);break;case 5:Ar(e,xt,bn);break;default:throw Error(R(329))}}}return Ct(e,De()),e.callbackNode===n?bv.bind(null,e):null}function Hf(e,t){var n=Ba;return e.current.memoizedState.isDehydrated&&(Fr(e,t).flags|=256),e=wl(e,t),e!==2&&(t=xt,xt=n,t!==null&&Vf(t)),e}function Vf(e){xt===null?xt=e:xt.push.apply(xt,e)}function jb(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!sn(a(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Xn(e,t){for(t&=~dp,t&=~Yl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-rn(t),r=1<<n;e[n]=-1,t&=~r}}function Ch(e){if(te&6)throw Error(R(327));Ti();var t=nl(e,0);if(!(t&1))return Ct(e,De()),null;var n=wl(e,t);if(e.tag!==0&&n===2){var r=hf(e);r!==0&&(t=r,n=Hf(e,r))}if(n===1)throw n=ho,Fr(e,0),Xn(e,t),Ct(e,De()),n;if(n===6)throw Error(R(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ar(e,xt,bn),Ct(e,De()),null}function mp(e,t){var n=te;te|=1;try{return e(t)}finally{te=n,te===0&&(Hi=De()+500,Hl&&Cr())}}function Qr(e){tr!==null&&tr.tag===0&&!(te&6)&&Ti();var t=te;te|=1;var n=Ut.transition,r=se;try{if(Ut.transition=null,se=1,e)return e()}finally{se=r,Ut.transition=n,te=t,!(te&6)&&Cr()}}function hp(){Pt=wi.current,xe(wi)}function Fr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,nb(n)),Ue!==null)for(n=Ue.return;n!==null;){var r=n;switch(Qd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&sl();break;case 3:Ui(),xe(kt),xe(ft),ip();break;case 5:rp(r);break;case 4:Ui();break;case 13:xe(Ne);break;case 19:xe(Ne);break;case 10:Zd(r.type._context);break;case 22:case 23:hp()}n=n.return}if(Ze=e,Ue=e=fr(e.current,null),rt=Pt=t,Ge=0,ho=null,dp=Yl=qr=0,xt=Ba=null,Lr!==null){for(t=0;t<Lr.length;t++)if(n=Lr[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,a=n.pending;if(a!==null){var o=a.next;a.next=i,r.next=o}n.pending=r}Lr=null}return e}function Sv(e,t){do{var n=Ue;try{if(Xd(),Ps.current=gl,hl){for(var r=Oe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}hl=!1}if(Yr=0,Ke=We=Oe=null,Fa=!1,fo=0,fp.current=null,n===null||n.return===null){Ge=1,ho=t,Ue=null;break}e:{var a=e,o=n.return,s=n,l=t;if(t=rt,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=s,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var p=u.alternate;p?(u.updateQueue=p.updateQueue,u.memoizedState=p.memoizedState,u.lanes=p.lanes):(u.updateQueue=null,u.memoizedState=null)}var v=dh(o);if(v!==null){v.flags&=-257,ph(v,o,s,a,t),v.mode&1&&fh(a,c,t),t=v,l=c;var h=t.updateQueue;if(h===null){var y=new Set;y.add(l),t.updateQueue=y}else h.add(l);break e}else{if(!(t&1)){fh(a,c,t),gp();break e}l=Error(R(426))}}else if(Ee&&s.mode&1){var b=dh(o);if(b!==null){!(b.flags&65536)&&(b.flags|=256),ph(b,o,s,a,t),Kd(Bi(l,s));break e}}a=l=Bi(l,s),Ge!==4&&(Ge=2),Ba===null?Ba=[a]:Ba.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var g=av(a,l,t);ih(a,g);break e;case 1:s=l;var m=a.type,w=a.stateNode;if(!(a.flags&128)&&(typeof m.getDerivedStateFromError=="function"||w!==null&&typeof w.componentDidCatch=="function"&&(cr===null||!cr.has(w)))){a.flags|=65536,t&=-t,a.lanes|=t;var x=ov(a,s,t);ih(a,x);break e}}a=a.return}while(a!==null)}Cv(n)}catch(S){t=S,Ue===n&&n!==null&&(Ue=n=n.return);continue}break}while(1)}function kv(){var e=vl.current;return vl.current=gl,e===null?gl:e}function gp(){(Ge===0||Ge===3||Ge===2)&&(Ge=4),Ze===null||!(qr&268435455)&&!(Yl&268435455)||Xn(Ze,rt)}function wl(e,t){var n=te;te|=2;var r=kv();(Ze!==e||rt!==t)&&(bn=null,Fr(e,t));do try{Pb();break}catch(i){Sv(e,i)}while(1);if(Xd(),te=n,vl.current=r,Ue!==null)throw Error(R(261));return Ze=null,rt=0,Ge}function Pb(){for(;Ue!==null;)Ev(Ue)}function Nb(){for(;Ue!==null&&!Zx();)Ev(Ue)}function Ev(e){var t=Pv(e.alternate,e,Pt);e.memoizedProps=e.pendingProps,t===null?Cv(e):Ue=t,fp.current=null}function Cv(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=bb(n,t),n!==null){n.flags&=32767,Ue=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ge=6,Ue=null;return}}else if(n=wb(n,t,Pt),n!==null){Ue=n;return}if(t=t.sibling,t!==null){Ue=t;return}Ue=t=e}while(t!==null);Ge===0&&(Ge=5)}function Ar(e,t,n){var r=se,i=Ut.transition;try{Ut.transition=null,se=1,Ab(e,t,n,r)}finally{Ut.transition=i,se=r}return null}function Ab(e,t,n,r){do Ti();while(tr!==null);if(te&6)throw Error(R(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(R(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(cw(e,a),e===Ze&&(Ue=Ze=null,rt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ss||(ss=!0,Nv(tl,function(){return Ti(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=Ut.transition,Ut.transition=null;var o=se;se=1;var s=te;te|=4,fp.current=null,kb(e,n),xv(n,e),Qw(bf),rl=!!wf,bf=wf=null,e.current=n,Eb(n),ew(),te=s,se=o,Ut.transition=a}else e.current=n;if(ss&&(ss=!1,tr=e,xl=i),a=e.pendingLanes,a===0&&(cr=null),rw(n.stateNode),Ct(e,De()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(yl)throw yl=!1,e=Uf,Uf=null,e;return xl&1&&e.tag!==0&&Ti(),a=e.pendingLanes,a&1?e===Bf?Ha++:(Ha=0,Bf=e):Ha=0,Cr(),null}function Ti(){if(tr!==null){var e=i1(xl),t=Ut.transition,n=se;try{if(Ut.transition=null,se=16>e?16:e,tr===null)var r=!1;else{if(e=tr,tr=null,xl=0,te&6)throw Error(R(331));var i=te;for(te|=4,M=e.current;M!==null;){var a=M,o=a.child;if(M.flags&16){var s=a.deletions;if(s!==null){for(var l=0;l<s.length;l++){var c=s[l];for(M=c;M!==null;){var u=M;switch(u.tag){case 0:case 11:case 15:Ua(8,u,a)}var d=u.child;if(d!==null)d.return=u,M=d;else for(;M!==null;){u=M;var p=u.sibling,v=u.return;if(gv(u),u===c){M=null;break}if(p!==null){p.return=v,M=p;break}M=v}}}var h=a.alternate;if(h!==null){var y=h.child;if(y!==null){h.child=null;do{var b=y.sibling;y.sibling=null,y=b}while(y!==null)}}M=a}}if(a.subtreeFlags&2064&&o!==null)o.return=a,M=o;else e:for(;M!==null;){if(a=M,a.flags&2048)switch(a.tag){case 0:case 11:case 15:Ua(9,a,a.return)}var g=a.sibling;if(g!==null){g.return=a.return,M=g;break e}M=a.return}}var m=e.current;for(M=m;M!==null;){o=M;var w=o.child;if(o.subtreeFlags&2064&&w!==null)w.return=o,M=w;else e:for(o=m;M!==null;){if(s=M,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Gl(9,s)}}catch(S){Le(s,s.return,S)}if(s===o){M=null;break e}var x=s.sibling;if(x!==null){x.return=s.return,M=x;break e}M=s.return}}if(te=i,Cr(),hn&&typeof hn.onPostCommitFiberRoot=="function")try{hn.onPostCommitFiberRoot(Dl,e)}catch{}r=!0}return r}finally{se=n,Ut.transition=t}}return!1}function jh(e,t,n){t=Bi(n,t),t=av(e,t,1),e=lr(e,t,1),t=mt(),e!==null&&(Ao(e,1,t),Ct(e,t))}function Le(e,t,n){if(e.tag===3)jh(e,e,n);else for(;t!==null;){if(t.tag===3){jh(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(cr===null||!cr.has(r))){e=Bi(n,e),e=ov(t,e,1),t=lr(t,e,1),e=mt(),t!==null&&(Ao(t,1,e),Ct(t,e));break}}t=t.return}}function Ob(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=mt(),e.pingedLanes|=e.suspendedLanes&n,Ze===e&&(rt&n)===n&&(Ge===4||Ge===3&&(rt&130023424)===rt&&500>De()-pp?Fr(e,0):dp|=n),Ct(e,t)}function jv(e,t){t===0&&(e.mode&1?(t=Jo,Jo<<=1,!(Jo&130023424)&&(Jo=4194304)):t=1);var n=mt();e=Rn(e,t),e!==null&&(Ao(e,t,n),Ct(e,n))}function Rb(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),jv(e,n)}function Tb(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(R(314))}r!==null&&r.delete(t),jv(e,n)}var Pv;Pv=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||kt.current)wt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return wt=!1,xb(e,t,n);wt=!!(e.flags&131072)}else wt=!1,Ee&&t.flags&1048576&&O1(t,ul,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;As(e,t),e=t.pendingProps;var i=Di(t,ft.current);Ri(t,n),i=op(null,t,r,e,i,n);var a=sp();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Et(r)?(a=!0,ll(t)):a=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,tp(t),i.updater=Vl,t.stateNode=i,i._reactInternals=t,Of(t,r,e,n),t=Lf(null,t,r,!0,a,n)):(t.tag=0,Ee&&a&&qd(t),dt(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(As(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=_b(r),e=Jt(r,e),i){case 0:t=Tf(null,t,r,e,n);break e;case 1:t=gh(null,t,r,e,n);break e;case 11:t=mh(null,t,r,e,n);break e;case 14:t=hh(null,t,r,Jt(r.type,e),n);break e}throw Error(R(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Jt(r,i),Tf(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Jt(r,i),gh(e,t,r,i,n);case 3:e:{if(uv(t),e===null)throw Error(R(387));r=t.pendingProps,a=t.memoizedState,i=a.element,_1(e,t),pl(t,r,null,n);var o=t.memoizedState;if(r=o.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){i=Bi(Error(R(423)),t),t=vh(e,t,r,n,i);break e}else if(r!==i){i=Bi(Error(R(424)),t),t=vh(e,t,r,n,i);break e}else for(Nt=sr(t.stateNode.containerInfo.firstChild),At=t,Ee=!0,en=null,n=D1(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if($i(),r===i){t=Tn(e,t,n);break e}dt(e,t,r,n)}t=t.child}return t;case 5:return $1(t),e===null&&Pf(t),r=t.type,i=t.pendingProps,a=e!==null?e.memoizedProps:null,o=i.children,Sf(r,i)?o=null:a!==null&&Sf(r,a)&&(t.flags|=32),cv(e,t),dt(e,t,o,n),t.child;case 6:return e===null&&Pf(t),null;case 13:return fv(e,t,n);case 4:return np(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Fi(t,null,r,n):dt(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Jt(r,i),mh(e,t,r,i,n);case 7:return dt(e,t,t.pendingProps,n),t.child;case 8:return dt(e,t,t.pendingProps.children,n),t.child;case 12:return dt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,a=t.memoizedProps,o=i.value,me(fl,r._currentValue),r._currentValue=o,a!==null)if(sn(a.value,o)){if(a.children===i.children&&!kt.current){t=Tn(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var s=a.dependencies;if(s!==null){o=a.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(a.tag===1){l=jn(-1,n&-n),l.tag=2;var c=a.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),Nf(a.return,n,t),s.lanes|=n;break}l=l.next}}else if(a.tag===10)o=a.type===t.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(R(341));o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),Nf(o,n,t),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===t){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}dt(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Ri(t,n),i=Ht(i),r=r(i),t.flags|=1,dt(e,t,r,n),t.child;case 14:return r=t.type,i=Jt(r,t.pendingProps),i=Jt(r.type,i),hh(e,t,r,i,n);case 15:return sv(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Jt(r,i),As(e,t),t.tag=1,Et(r)?(e=!0,ll(t)):e=!1,Ri(t,n),M1(t,r,i),Of(t,r,i,n),Lf(null,t,r,!0,e,n);case 19:return dv(e,t,n);case 22:return lv(e,t,n)}throw Error(R(156,t.tag))};function Nv(e,t){return e1(e,t)}function Lb(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ft(e,t,n,r){return new Lb(e,t,n,r)}function vp(e){return e=e.prototype,!(!e||!e.isReactComponent)}function _b(e){if(typeof e=="function")return vp(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Md)return 11;if(e===zd)return 14}return 2}function fr(e,t){var n=e.alternate;return n===null?(n=Ft(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ts(e,t,n,r,i,a){var o=2;if(r=e,typeof e=="function")vp(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case ui:return Ur(n.children,i,a,t);case Id:o=8,i|=8;break;case Zu:return e=Ft(12,n,t,i|2),e.elementType=Zu,e.lanes=a,e;case ef:return e=Ft(13,n,t,i),e.elementType=ef,e.lanes=a,e;case tf:return e=Ft(19,n,t,i),e.elementType=tf,e.lanes=a,e;case z0:return ql(n,i,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case I0:o=10;break e;case M0:o=9;break e;case Md:o=11;break e;case zd:o=14;break e;case Qn:o=16,r=null;break e}throw Error(R(130,e==null?e:typeof e,""))}return t=Ft(o,n,t,i),t.elementType=e,t.type=r,t.lanes=a,t}function Ur(e,t,n,r){return e=Ft(7,e,r,t),e.lanes=n,e}function ql(e,t,n,r){return e=Ft(22,e,r,t),e.elementType=z0,e.lanes=n,e.stateNode={isHidden:!1},e}function xu(e,t,n){return e=Ft(6,e,null,t),e.lanes=n,e}function wu(e,t,n){return t=Ft(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Ib(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=eu(0),this.expirationTimes=eu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=eu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function yp(e,t,n,r,i,a,o,s,l){return e=new Ib(e,t,n,s,l),t===1?(t=1,a===!0&&(t|=8)):t=0,a=Ft(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},tp(a),e}function Mb(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ci,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Av(e){if(!e)return gr;e=e._reactInternals;e:{if(ni(e)!==e||e.tag!==1)throw Error(R(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Et(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(R(171))}if(e.tag===1){var n=e.type;if(Et(n))return N1(e,n,t)}return t}function Ov(e,t,n,r,i,a,o,s,l){return e=yp(n,r,!0,e,i,a,o,s,l),e.context=Av(null),n=e.current,r=mt(),i=ur(n),a=jn(r,i),a.callback=t??null,lr(n,a,i),e.current.lanes=i,Ao(e,i,r),Ct(e,r),e}function Ql(e,t,n,r){var i=t.current,a=mt(),o=ur(i);return n=Av(n),t.context===null?t.context=n:t.pendingContext=n,t=jn(a,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=lr(i,t,o),e!==null&&(an(e,i,o,a),js(e,i,o)),o}function bl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ph(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function xp(e,t){Ph(e,t),(e=e.alternate)&&Ph(e,t)}function zb(){return null}var Rv=typeof reportError=="function"?reportError:function(e){console.error(e)};function wp(e){this._internalRoot=e}Kl.prototype.render=wp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(R(409));Ql(e,t,null,null)};Kl.prototype.unmount=wp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Qr(function(){Ql(null,e,null,null)}),t[On]=null}};function Kl(e){this._internalRoot=e}Kl.prototype.unstable_scheduleHydration=function(e){if(e){var t=s1();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Jn.length&&t!==0&&t<Jn[n].priority;n++);Jn.splice(n,0,e),n===0&&c1(e)}};function bp(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Jl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Nh(){}function Db(e,t,n,r,i){if(i){if(typeof r=="function"){var a=r;r=function(){var c=bl(o);a.call(c)}}var o=Ov(t,r,e,0,null,!1,!1,"",Nh);return e._reactRootContainer=o,e[On]=o.current,oo(e.nodeType===8?e.parentNode:e),Qr(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var c=bl(l);s.call(c)}}var l=yp(e,0,!1,null,null,!1,!1,"",Nh);return e._reactRootContainer=l,e[On]=l.current,oo(e.nodeType===8?e.parentNode:e),Qr(function(){Ql(t,l,n,r)}),l}function Xl(e,t,n,r,i){var a=n._reactRootContainer;if(a){var o=a;if(typeof i=="function"){var s=i;i=function(){var l=bl(o);s.call(l)}}Ql(t,o,e,i)}else o=Db(n,t,e,i,r);return bl(o)}a1=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Na(t.pendingLanes);n!==0&&(Fd(t,n|1),Ct(t,De()),!(te&6)&&(Hi=De()+500,Cr()))}break;case 13:Qr(function(){var r=Rn(e,1);if(r!==null){var i=mt();an(r,e,1,i)}}),xp(e,1)}};Ud=function(e){if(e.tag===13){var t=Rn(e,134217728);if(t!==null){var n=mt();an(t,e,134217728,n)}xp(e,134217728)}};o1=function(e){if(e.tag===13){var t=ur(e),n=Rn(e,t);if(n!==null){var r=mt();an(n,e,t,r)}xp(e,t)}};s1=function(){return se};l1=function(e,t){var n=se;try{return se=e,t()}finally{se=n}};df=function(e,t,n){switch(t){case"input":if(af(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Bl(r);if(!i)throw Error(R(90));$0(r),af(r,i)}}}break;case"textarea":U0(e,n);break;case"select":t=n.value,t!=null&&Pi(e,!!n.multiple,t,!1)}};q0=mp;Q0=Qr;var $b={usingClientEntryPoint:!1,Events:[Ro,mi,Bl,G0,Y0,mp]},wa={findFiberByHostInstance:Tr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Fb={bundleType:wa.bundleType,version:wa.version,rendererPackageName:wa.rendererPackageName,rendererConfig:wa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:zn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=X0(e),e===null?null:e.stateNode},findFiberByHostInstance:wa.findFiberByHostInstance||zb,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ls=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ls.isDisabled&&ls.supportsFiber)try{Dl=ls.inject(Fb),hn=ls}catch{}}Tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$b;Tt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!bp(t))throw Error(R(200));return Mb(e,t,null,n)};Tt.createRoot=function(e,t){if(!bp(e))throw Error(R(299));var n=!1,r="",i=Rv;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=yp(e,1,!1,null,null,n,!1,r,i),e[On]=t.current,oo(e.nodeType===8?e.parentNode:e),new wp(t)};Tt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(R(188)):(e=Object.keys(e).join(","),Error(R(268,e)));return e=X0(t),e=e===null?null:e.stateNode,e};Tt.flushSync=function(e){return Qr(e)};Tt.hydrate=function(e,t,n){if(!Jl(t))throw Error(R(200));return Xl(null,e,t,!0,n)};Tt.hydrateRoot=function(e,t,n){if(!bp(e))throw Error(R(405));var r=n!=null&&n.hydratedSources||null,i=!1,a="",o=Rv;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Ov(t,null,e,1,n??null,i,!1,a,o),e[On]=t.current,oo(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Kl(t)};Tt.render=function(e,t,n){if(!Jl(t))throw Error(R(200));return Xl(null,e,t,!1,n)};Tt.unmountComponentAtNode=function(e){if(!Jl(e))throw Error(R(40));return e._reactRootContainer?(Qr(function(){Xl(null,null,e,!1,function(){e._reactRootContainer=null,e[On]=null})}),!0):!1};Tt.unstable_batchedUpdates=mp;Tt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Jl(n))throw Error(R(200));if(e==null||e._reactInternals===void 0)throw Error(R(38));return Xl(e,t,n,!1,r)};Tt.version="18.2.0-next-9e3b772b8-20220608";function Tv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Tv)}catch(e){console.error(e)}}Tv(),O0.exports=Tt;var Lv=O0.exports,Ah=Lv;Ju.createRoot=Ah.createRoot,Ju.hydrateRoot=Ah.hydrateRoot;/**
 * @remix-run/router v1.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Pe(){return Pe=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Pe.apply(this,arguments)}var $e;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})($e||($e={}));const Oh="popstate";function Ub(e){e===void 0&&(e={});function t(r,i){let{pathname:a,search:o,hash:s}=r.location;return go("",{pathname:a,search:o,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Kr(i)}return Hb(t,n,null,e)}function K(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Vi(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Bb(){return Math.random().toString(36).substr(2,8)}function Rh(e,t){return{usr:e.state,key:e.key,idx:t}}function go(e,t,n,r){return n===void 0&&(n=null),Pe({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Dn(t):t,{state:n,key:t&&t.key||r||Bb()})}function Kr(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Dn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Hb(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s=$e.Pop,l=null,c=u();c==null&&(c=0,o.replaceState(Pe({},o.state,{idx:c}),""));function u(){return(o.state||{idx:null}).idx}function d(){s=$e.Pop;let b=u(),g=b==null?null:b-c;c=b,l&&l({action:s,location:y.location,delta:g})}function p(b,g){s=$e.Push;let m=go(y.location,b,g);n&&n(m,b),c=u()+1;let w=Rh(m,c),x=y.createHref(m);try{o.pushState(w,"",x)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;i.location.assign(x)}a&&l&&l({action:s,location:y.location,delta:1})}function v(b,g){s=$e.Replace;let m=go(y.location,b,g);n&&n(m,b),c=u();let w=Rh(m,c),x=y.createHref(m);o.replaceState(w,"",x),a&&l&&l({action:s,location:y.location,delta:0})}function h(b){let g=i.location.origin!=="null"?i.location.origin:i.location.href,m=typeof b=="string"?b:Kr(b);return K(g,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,g)}let y={get action(){return s},get location(){return e(i,o)},listen(b){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Oh,d),l=b,()=>{i.removeEventListener(Oh,d),l=null}},createHref(b){return t(i,b)},createURL:h,encodeLocation(b){let g=h(b);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:p,replace:v,go(b){return o.go(b)}};return y}var ze;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(ze||(ze={}));const Vb=new Set(["lazy","caseSensitive","path","id","index","children"]);function Wb(e){return e.index===!0}function Wf(e,t,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),e.map((i,a)=>{let o=[...n,a],s=typeof i.id=="string"?i.id:o.join("-");if(K(i.index!==!0||!i.children,"Cannot specify children on an index route"),K(!r[s],'Found a route id collision on id "'+s+`".  Route id's must be globally unique within Data Router usages`),Wb(i)){let l=Pe({},i,t(i),{id:s});return r[s]=l,l}else{let l=Pe({},i,t(i),{id:s,children:void 0});return r[s]=l,i.children&&(l.children=Wf(i.children,t,o,r)),l}})}function bi(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Dn(t):t,i=ia(r.pathname||"/",n);if(i==null)return null;let a=_v(e);Yb(a);let o=null;for(let s=0;o==null&&s<a.length;++s)o=n4(a[s],a4(i));return o}function Gb(e,t){let{route:n,pathname:r,params:i}=e;return{id:n.id,pathname:r,params:i,data:t[n.id],handle:n.handle}}function _v(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(a,o,s)=>{let l={relativePath:s===void 0?a.path||"":s,caseSensitive:a.caseSensitive===!0,childrenIndex:o,route:a};l.relativePath.startsWith("/")&&(K(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let c=Pn([r,l.relativePath]),u=n.concat(l);a.children&&a.children.length>0&&(K(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),_v(a.children,t,u,c)),!(a.path==null&&!a.index)&&t.push({path:c,score:e4(c,a.index),routesMeta:u})};return e.forEach((a,o)=>{var s;if(a.path===""||!((s=a.path)!=null&&s.includes("?")))i(a,o);else for(let l of Iv(a.path))i(a,o,l)}),t}function Iv(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),a=n.replace(/\?$/,"");if(r.length===0)return i?[a,""]:[a];let o=Iv(r.join("/")),s=[];return s.push(...o.map(l=>l===""?a:[a,l].join("/"))),i&&s.push(...o),s.map(l=>e.startsWith("/")&&l===""?"/":l)}function Yb(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:t4(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const qb=/^:\w+$/,Qb=3,Kb=2,Jb=1,Xb=10,Zb=-2,Th=e=>e==="*";function e4(e,t){let n=e.split("/"),r=n.length;return n.some(Th)&&(r+=Zb),t&&(r+=Kb),n.filter(i=>!Th(i)).reduce((i,a)=>i+(qb.test(a)?Qb:a===""?Jb:Xb),r)}function t4(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function n4(e,t){let{routesMeta:n}=e,r={},i="/",a=[];for(let o=0;o<n.length;++o){let s=n[o],l=o===n.length-1,c=i==="/"?t:t.slice(i.length)||"/",u=r4({path:s.relativePath,caseSensitive:s.caseSensitive,end:l},c);if(!u)return null;Object.assign(r,u.params);let d=s.route;a.push({params:r,pathname:Pn([i,u.pathname]),pathnameBase:c4(Pn([i,u.pathnameBase])),route:d}),u.pathnameBase!=="/"&&(i=Pn([i,u.pathnameBase]))}return a}function r4(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=i4(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((c,u,d)=>{if(u==="*"){let p=s[d]||"";o=a.slice(0,a.length-p.length).replace(/(.)\/+$/,"$1")}return c[u]=o4(s[d]||"",u),c},{}),pathname:a,pathnameBase:o,pattern:e}}function i4(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Vi(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,s)=>(r.push(s),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function a4(e){try{return decodeURI(e)}catch(t){return Vi(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function o4(e,t){try{return decodeURIComponent(e)}catch(n){return Vi(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function ia(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function s4(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Dn(e):e;return{pathname:n?n.startsWith("/")?n:l4(n,t):t,search:u4(r),hash:f4(i)}}function l4(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function bu(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Lo(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Zl(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Dn(e):(i=Pe({},e),K(!i.pathname||!i.pathname.includes("?"),bu("?","pathname","search",i)),K(!i.pathname||!i.pathname.includes("#"),bu("#","pathname","hash",i)),K(!i.search||!i.search.includes("#"),bu("#","search","hash",i)));let a=e===""||i.pathname==="",o=a?"/":i.pathname,s;if(r||o==null)s=n;else{let d=t.length-1;if(o.startsWith("..")){let p=o.split("/");for(;p[0]==="..";)p.shift(),d-=1;i.pathname=p.join("/")}s=d>=0?t[d]:"/"}let l=s4(i,s),c=o&&o!=="/"&&o.endsWith("/"),u=(a||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||u)&&(l.pathname+="/"),l}const Pn=e=>e.join("/").replace(/\/\/+/g,"/"),c4=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),u4=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,f4=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class Sp{constructor(t,n,r,i){i===void 0&&(i=!1),this.status=t,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function Mv(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const zv=["post","put","patch","delete"],d4=new Set(zv),p4=["get",...zv],m4=new Set(p4),h4=new Set([301,302,303,307,308]),g4=new Set([307,308]),Su={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},v4={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},ba={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},Dv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,y4=e=>({hasErrorBoundary:!!e.hasErrorBoundary});function x4(e){const t=e.window?e.window:typeof window<"u"?window:void 0,n=typeof t<"u"&&typeof t.document<"u"&&typeof t.document.createElement<"u",r=!n;K(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let i;if(e.mapRouteProperties)i=e.mapRouteProperties;else if(e.detectErrorBoundary){let E=e.detectErrorBoundary;i=j=>({hasErrorBoundary:E(j)})}else i=y4;let a={},o=Wf(e.routes,i,void 0,a),s,l=e.basename||"/",c=Pe({v7_normalizeFormMethod:!1,v7_prependBasename:!1},e.future),u=null,d=new Set,p=null,v=null,h=null,y=e.hydrationData!=null,b=bi(o,e.history.location,l),g=null;if(b==null){let E=Mt(404,{pathname:e.history.location.pathname}),{matches:j,route:A}=Fh(o);b=j,g={[A.id]:E}}let m=!b.some(E=>E.route.lazy)&&(!b.some(E=>E.route.loader)||e.hydrationData!=null),w,x={historyAction:e.history.action,location:e.history.location,matches:b,initialized:m,navigation:Su,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||g,fetchers:new Map,blockers:new Map},S=$e.Pop,P=!1,C,O=!1,z=!1,L=[],Z=[],G=new Map,Te=0,be=-1,Qe=new Map,ie=new Set,oe=new Map,T=new Map,D=new Map,U=!1;function pe(){return u=e.history.listen(E=>{let{action:j,location:A,delta:I}=E;if(U){U=!1;return}Vi(D.size===0||I!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let V=vm({currentLocation:x.location,nextLocation:A,historyAction:j});if(V&&I!=null){U=!0,e.history.go(I*-1),Vo(V,{state:"blocked",location:A,proceed(){Vo(V,{state:"proceeding",proceed:void 0,reset:void 0,location:A}),e.history.go(I)},reset(){let H=new Map(x.blockers);H.set(V,ba),ne({blockers:H})}});return}return qt(j,A)}),x.initialized||qt($e.Pop,x.location),w}function Se(){u&&u(),d.clear(),C&&C.abort(),x.fetchers.forEach((E,j)=>Bc(j)),x.blockers.forEach((E,j)=>gm(j))}function Yt(E){return d.add(E),()=>d.delete(E)}function ne(E){x=Pe({},x,E),d.forEach(j=>j(x))}function vt(E,j){var A,I;let V=x.actionData!=null&&x.navigation.formMethod!=null&&Zt(x.navigation.formMethod)&&x.navigation.state==="loading"&&((A=E.state)==null?void 0:A._isRedirect)!==!0,H;j.actionData?Object.keys(j.actionData).length>0?H=j.actionData:H=null:V?H=x.actionData:H=null;let W=j.loaderData?$h(x.loaderData,j.loaderData,j.matches||[],j.errors):x.loaderData,B=x.blockers;B.size>0&&(B=new Map(B),B.forEach((je,ot)=>B.set(ot,ba)));let F=P===!0||x.navigation.formMethod!=null&&Zt(x.navigation.formMethod)&&((I=E.state)==null?void 0:I._isRedirect)!==!0;s&&(o=s,s=void 0),O||S===$e.Pop||(S===$e.Push?e.history.push(E,E.state):S===$e.Replace&&e.history.replace(E,E.state)),ne(Pe({},j,{actionData:H,loaderData:W,historyAction:S,location:E,initialized:!0,navigation:Su,revalidation:"idle",restoreScrollPosition:xm(E,j.matches||x.matches),preventScrollReset:F,blockers:B})),S=$e.Pop,P=!1,O=!1,z=!1,L=[],Z=[]}async function at(E,j){if(typeof E=="number"){e.history.go(E);return}let A=Gf(x.location,x.matches,l,c.v7_prependBasename,E,j==null?void 0:j.fromRouteId,j==null?void 0:j.relative),{path:I,submission:V,error:H}=Lh(c.v7_normalizeFormMethod,!1,A,j),W=x.location,B=go(x.location,I,j&&j.state);B=Pe({},B,e.history.encodeLocation(B));let F=j&&j.replace!=null?j.replace:void 0,je=$e.Push;F===!0?je=$e.Replace:F===!1||V!=null&&Zt(V.formMethod)&&V.formAction===x.location.pathname+x.location.search&&(je=$e.Replace);let ot=j&&"preventScrollReset"in j?j.preventScrollReset===!0:void 0,re=vm({currentLocation:W,nextLocation:B,historyAction:je});if(re){Vo(re,{state:"blocked",location:B,proceed(){Vo(re,{state:"proceeding",proceed:void 0,reset:void 0,location:B}),at(E,j)},reset(){let de=new Map(x.blockers);de.set(re,ba),ne({blockers:de})}});return}return await qt(je,B,{submission:V,pendingError:H,preventScrollReset:ot,replace:j&&j.replace})}function yt(){if(Uc(),ne({revalidation:"loading"}),x.navigation.state!=="submitting"){if(x.navigation.state==="idle"){qt(x.historyAction,x.location,{startUninterruptedRevalidation:!0});return}qt(S||x.historyAction,x.navigation.location,{overrideNavigation:x.navigation})}}async function qt(E,j,A){C&&C.abort(),C=null,S=E,O=(A&&A.startUninterruptedRevalidation)===!0,dx(x.location,x.matches),P=(A&&A.preventScrollReset)===!0;let I=s||o,V=A&&A.overrideNavigation,H=bi(I,j,l);if(!H){let de=Mt(404,{pathname:j.pathname}),{matches:Me,route:jr}=Fh(I);Hc(),vt(j,{matches:Me,loaderData:{},errors:{[jr.id]:de}});return}if(x.initialized&&!z&&E4(x.location,j)&&!(A&&A.submission&&Zt(A.submission.formMethod))){vt(j,{matches:H});return}C=new AbortController;let W=ka(e.history,j,C.signal,A&&A.submission),B,F;if(A&&A.pendingError)F={[Si(H).route.id]:A.pendingError};else if(A&&A.submission&&Zt(A.submission.formMethod)){let de=await ai(W,j,A.submission,H,{replace:A.replace});if(de.shortCircuited)return;B=de.pendingActionData,F=de.pendingActionError,V=ku(j,A.submission),W=new Request(W.url,{signal:W.signal})}let{shortCircuited:je,loaderData:ot,errors:re}=await ln(W,j,H,V,A&&A.submission,A&&A.fetcherSubmission,A&&A.replace,B,F);je||(C=null,vt(j,Pe({matches:H},B?{actionData:B}:{},{loaderData:ot,errors:re})))}async function ai(E,j,A,I,V){V===void 0&&(V={}),Uc();let H=N4(j,A);ne({navigation:H});let W,B=qf(I,j);if(!B.route.action&&!B.route.lazy)W={type:ze.error,error:Mt(405,{method:E.method,pathname:j.pathname,routeId:B.route.id})};else if(W=await Sa("action",E,B,I,a,i,l),E.signal.aborted)return{shortCircuited:!0};if(Li(W)){let F;return V&&V.replace!=null?F=V.replace:F=W.location===x.location.pathname+x.location.search,await ua(x,W,{submission:A,replace:F}),{shortCircuited:!0}}if(Va(W)){let F=Si(I,B.route.id);return(V&&V.replace)!==!0&&(S=$e.Push),{pendingActionData:{},pendingActionError:{[F.route.id]:W.error}}}if(Ir(W))throw Mt(400,{type:"defer-action"});return{pendingActionData:{[B.route.id]:W.data}}}async function ln(E,j,A,I,V,H,W,B,F){let je=I||ku(j,V),ot=V||H||Hh(je),re=s||o,[de,Me]=_h(e.history,x,A,ot,j,z,L,Z,oe,ie,re,l,B,F);if(Hc(ue=>!(A&&A.some(Qt=>Qt.route.id===ue))||de&&de.some(Qt=>Qt.route.id===ue)),be=++Te,de.length===0&&Me.length===0){let ue=mm();return vt(j,Pe({matches:A,loaderData:{},errors:F||null},B?{actionData:B}:{},ue?{fetchers:new Map(x.fetchers)}:{})),{shortCircuited:!0}}if(!O){Me.forEach(Qt=>{let Vn=x.fetchers.get(Qt.key),qc=Ea(void 0,Vn?Vn.data:void 0);x.fetchers.set(Qt.key,qc)});let ue=B||x.actionData;ne(Pe({navigation:je},ue?Object.keys(ue).length===0?{actionData:null}:{actionData:ue}:{},Me.length>0?{fetchers:new Map(x.fetchers)}:{}))}Me.forEach(ue=>{G.has(ue.key)&&Hn(ue.key),ue.controller&&G.set(ue.key,ue.controller)});let jr=()=>Me.forEach(ue=>Hn(ue.key));C&&C.signal.addEventListener("abort",jr);let{results:Pr,loaderResults:fa,fetcherResults:Vc}=await dm(x.matches,A,de,Me,E);if(E.signal.aborted)return{shortCircuited:!0};C&&C.signal.removeEventListener("abort",jr),Me.forEach(ue=>G.delete(ue.key));let xn=Uh(Pr);if(xn){if(xn.idx>=de.length){let ue=Me[xn.idx-de.length].key;ie.add(ue)}return await ua(x,xn.result,{replace:W}),{shortCircuited:!0}}let{loaderData:wn,errors:Wo}=Dh(x,A,de,fa,F,Me,Vc,T);T.forEach((ue,Qt)=>{ue.subscribe(Vn=>{(Vn||ue.done)&&T.delete(Qt)})});let Wc=mm(),Gc=hm(be),Yc=Wc||Gc||Me.length>0;return Pe({loaderData:wn,errors:Wo},Yc?{fetchers:new Map(x.fetchers)}:{})}function fm(E){return x.fetchers.get(E)||v4}function sx(E,j,A,I){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");G.has(E)&&Hn(E);let V=s||o,H=Gf(x.location,x.matches,l,c.v7_prependBasename,A,j,I==null?void 0:I.relative),W=bi(V,H,l);if(!W){Ho(E,j,Mt(404,{pathname:H}));return}let{path:B,submission:F,error:je}=Lh(c.v7_normalizeFormMethod,!0,H,I);if(je){Ho(E,j,je);return}let ot=qf(W,B);if(P=(I&&I.preventScrollReset)===!0,F&&Zt(F.formMethod)){lx(E,j,B,ot,W,F);return}oe.set(E,{routeId:j,path:B}),cx(E,j,B,ot,W,F)}async function lx(E,j,A,I,V,H){if(Uc(),oe.delete(E),!I.route.action&&!I.route.lazy){let Ve=Mt(405,{method:H.formMethod,pathname:A,routeId:j});Ho(E,j,Ve);return}let W=x.fetchers.get(E),B=A4(H,W);x.fetchers.set(E,B),ne({fetchers:new Map(x.fetchers)});let F=new AbortController,je=ka(e.history,A,F.signal,H);G.set(E,F);let ot=Te,re=await Sa("action",je,I,V,a,i,l);if(je.signal.aborted){G.get(E)===F&&G.delete(E);return}if(Li(re))if(G.delete(E),be>ot){let Ve=li(void 0);x.fetchers.set(E,Ve),ne({fetchers:new Map(x.fetchers)});return}else{ie.add(E);let Ve=Ea(H);return x.fetchers.set(E,Ve),ne({fetchers:new Map(x.fetchers)}),ua(x,re,{fetcherSubmission:H})}if(Va(re)){Ho(E,j,re.error);return}if(Ir(re))throw Mt(400,{type:"defer-action"});let de=x.navigation.location||x.location,Me=ka(e.history,de,F.signal),jr=s||o,Pr=x.navigation.state!=="idle"?bi(jr,x.navigation.location,l):x.matches;K(Pr,"Didn't find any matches after fetcher action");let fa=++Te;Qe.set(E,fa);let Vc=Ea(H,re.data);x.fetchers.set(E,Vc);let[xn,wn]=_h(e.history,x,Pr,H,de,z,L,Z,oe,ie,jr,l,{[I.route.id]:re.data},void 0);wn.filter(Ve=>Ve.key!==E).forEach(Ve=>{let da=Ve.key,wm=x.fetchers.get(da),mx=Ea(void 0,wm?wm.data:void 0);x.fetchers.set(da,mx),G.has(da)&&Hn(da),Ve.controller&&G.set(da,Ve.controller)}),ne({fetchers:new Map(x.fetchers)});let Wo=()=>wn.forEach(Ve=>Hn(Ve.key));F.signal.addEventListener("abort",Wo);let{results:Wc,loaderResults:Gc,fetcherResults:Yc}=await dm(x.matches,Pr,xn,wn,Me);if(F.signal.aborted)return;F.signal.removeEventListener("abort",Wo),Qe.delete(E),G.delete(E),wn.forEach(Ve=>G.delete(Ve.key));let ue=Uh(Wc);if(ue){if(ue.idx>=xn.length){let Ve=wn[ue.idx-xn.length].key;ie.add(Ve)}return ua(x,ue.result)}let{loaderData:Qt,errors:Vn}=Dh(x,x.matches,xn,Gc,void 0,wn,Yc,T);if(x.fetchers.has(E)){let Ve=li(re.data);x.fetchers.set(E,Ve)}let qc=hm(fa);x.navigation.state==="loading"&&fa>be?(K(S,"Expected pending action"),C&&C.abort(),vt(x.navigation.location,{matches:Pr,loaderData:Qt,errors:Vn,fetchers:new Map(x.fetchers)})):(ne(Pe({errors:Vn,loaderData:$h(x.loaderData,Qt,Pr,Vn)},qc||wn.length>0?{fetchers:new Map(x.fetchers)}:{})),z=!1)}async function cx(E,j,A,I,V,H){let W=x.fetchers.get(E),B=Ea(H,W?W.data:void 0);x.fetchers.set(E,B),ne({fetchers:new Map(x.fetchers)});let F=new AbortController,je=ka(e.history,A,F.signal);G.set(E,F);let ot=Te,re=await Sa("loader",je,I,V,a,i,l);if(Ir(re)&&(re=await Uv(re,je.signal,!0)||re),G.get(E)===F&&G.delete(E),je.signal.aborted)return;if(Li(re))if(be>ot){let Me=li(void 0);x.fetchers.set(E,Me),ne({fetchers:new Map(x.fetchers)});return}else{ie.add(E),await ua(x,re);return}if(Va(re)){let Me=Si(x.matches,j);x.fetchers.delete(E),ne({fetchers:new Map(x.fetchers),errors:{[Me.route.id]:re.error}});return}K(!Ir(re),"Unhandled fetcher deferred data");let de=li(re.data);x.fetchers.set(E,de),ne({fetchers:new Map(x.fetchers)})}async function ua(E,j,A){let{submission:I,fetcherSubmission:V,replace:H}=A===void 0?{}:A;j.revalidate&&(z=!0);let W=go(E.location,j.location,{_isRedirect:!0});if(K(W,"Expected a location on the redirect navigation"),n){let de=!1;if(j.reloadDocument)de=!0;else if(Dv.test(j.location)){const Me=e.history.createURL(j.location);de=Me.origin!==t.location.origin||ia(Me.pathname,l)==null}if(de){H?t.location.replace(j.location):t.location.assign(j.location);return}}C=null;let B=H===!0?$e.Replace:$e.Push,{formMethod:F,formAction:je,formEncType:ot}=E.navigation;!I&&!V&&F&&je&&ot&&(I=Hh(E.navigation));let re=I||V;if(g4.has(j.status)&&re&&Zt(re.formMethod))await qt(B,W,{submission:Pe({},re,{formAction:j.location}),preventScrollReset:P});else{let de=ku(W,I);await qt(B,W,{overrideNavigation:de,fetcherSubmission:V,preventScrollReset:P})}}async function dm(E,j,A,I,V){let H=await Promise.all([...A.map(F=>Sa("loader",V,F,j,a,i,l)),...I.map(F=>F.matches&&F.match&&F.controller?Sa("loader",ka(e.history,F.path,F.controller.signal),F.match,F.matches,a,i,l):{type:ze.error,error:Mt(404,{pathname:F.path})})]),W=H.slice(0,A.length),B=H.slice(A.length);return await Promise.all([Bh(E,A,W,W.map(()=>V.signal),!1,x.loaderData),Bh(E,I.map(F=>F.match),B,I.map(F=>F.controller?F.controller.signal:null),!0)]),{results:H,loaderResults:W,fetcherResults:B}}function Uc(){z=!0,L.push(...Hc()),oe.forEach((E,j)=>{G.has(j)&&(Z.push(j),Hn(j))})}function Ho(E,j,A){let I=Si(x.matches,j);Bc(E),ne({errors:{[I.route.id]:A},fetchers:new Map(x.fetchers)})}function Bc(E){let j=x.fetchers.get(E);G.has(E)&&!(j&&j.state==="loading"&&Qe.has(E))&&Hn(E),oe.delete(E),Qe.delete(E),ie.delete(E),x.fetchers.delete(E)}function Hn(E){let j=G.get(E);K(j,"Expected fetch controller: "+E),j.abort(),G.delete(E)}function pm(E){for(let j of E){let A=fm(j),I=li(A.data);x.fetchers.set(j,I)}}function mm(){let E=[],j=!1;for(let A of ie){let I=x.fetchers.get(A);K(I,"Expected fetcher: "+A),I.state==="loading"&&(ie.delete(A),E.push(A),j=!0)}return pm(E),j}function hm(E){let j=[];for(let[A,I]of Qe)if(I<E){let V=x.fetchers.get(A);K(V,"Expected fetcher: "+A),V.state==="loading"&&(Hn(A),Qe.delete(A),j.push(A))}return pm(j),j.length>0}function ux(E,j){let A=x.blockers.get(E)||ba;return D.get(E)!==j&&D.set(E,j),A}function gm(E){x.blockers.delete(E),D.delete(E)}function Vo(E,j){let A=x.blockers.get(E)||ba;K(A.state==="unblocked"&&j.state==="blocked"||A.state==="blocked"&&j.state==="blocked"||A.state==="blocked"&&j.state==="proceeding"||A.state==="blocked"&&j.state==="unblocked"||A.state==="proceeding"&&j.state==="unblocked","Invalid blocker state transition: "+A.state+" -> "+j.state);let I=new Map(x.blockers);I.set(E,j),ne({blockers:I})}function vm(E){let{currentLocation:j,nextLocation:A,historyAction:I}=E;if(D.size===0)return;D.size>1&&Vi(!1,"A router only supports one blocker at a time");let V=Array.from(D.entries()),[H,W]=V[V.length-1],B=x.blockers.get(H);if(!(B&&B.state==="proceeding")&&W({currentLocation:j,nextLocation:A,historyAction:I}))return H}function Hc(E){let j=[];return T.forEach((A,I)=>{(!E||E(I))&&(A.cancel(),j.push(I),T.delete(I))}),j}function fx(E,j,A){if(p=E,h=j,v=A||null,!y&&x.navigation===Su){y=!0;let I=xm(x.location,x.matches);I!=null&&ne({restoreScrollPosition:I})}return()=>{p=null,h=null,v=null}}function ym(E,j){return v&&v(E,j.map(I=>Gb(I,x.loaderData)))||E.key}function dx(E,j){if(p&&h){let A=ym(E,j);p[A]=h()}}function xm(E,j){if(p){let A=ym(E,j),I=p[A];if(typeof I=="number")return I}return null}function px(E){a={},s=Wf(E,i,void 0,a)}return w={get basename(){return l},get state(){return x},get routes(){return o},initialize:pe,subscribe:Yt,enableScrollRestoration:fx,navigate:at,fetch:sx,revalidate:yt,createHref:E=>e.history.createHref(E),encodeLocation:E=>e.history.encodeLocation(E),getFetcher:fm,deleteFetcher:Bc,dispose:Se,getBlocker:ux,deleteBlocker:gm,_internalFetchControllers:G,_internalActiveDeferreds:T,_internalSetRoutes:px},w}function w4(e){return e!=null&&("formData"in e&&e.formData!=null||"body"in e&&e.body!==void 0)}function Gf(e,t,n,r,i,a,o){let s,l;if(a!=null&&o!=="path"){s=[];for(let u of t)if(s.push(u),u.route.id===a){l=u;break}}else s=t,l=t[t.length-1];let c=Zl(i||".",Lo(s).map(u=>u.pathnameBase),ia(e.pathname,n)||e.pathname,o==="path");return i==null&&(c.search=e.search,c.hash=e.hash),(i==null||i===""||i===".")&&l&&l.route.index&&!kp(c.search)&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(c.pathname=c.pathname==="/"?n:Pn([n,c.pathname])),Kr(c)}function Lh(e,t,n,r){if(!r||!w4(r))return{path:n};if(r.formMethod&&!P4(r.formMethod))return{path:n,error:Mt(405,{method:r.formMethod})};let i=()=>({path:n,error:Mt(400,{type:"invalid-body"})}),a=r.formMethod||"get",o=e?a.toUpperCase():a.toLowerCase(),s=Fv(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!Zt(o))return i();let p=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((v,h)=>{let[y,b]=h;return""+v+y+"="+b+`
`},""):String(r.body);return{path:n,submission:{formMethod:o,formAction:s,formEncType:r.formEncType,formData:void 0,json:void 0,text:p}}}else if(r.formEncType==="application/json"){if(!Zt(o))return i();try{let p=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:o,formAction:s,formEncType:r.formEncType,formData:void 0,json:p,text:void 0}}}catch{return i()}}}K(typeof FormData=="function","FormData is not available in this environment");let l,c;if(r.formData)l=Yf(r.formData),c=r.formData;else if(r.body instanceof FormData)l=Yf(r.body),c=r.body;else if(r.body instanceof URLSearchParams)l=r.body,c=zh(l);else if(r.body==null)l=new URLSearchParams,c=new FormData;else try{l=new URLSearchParams(r.body),c=zh(l)}catch{return i()}let u={formMethod:o,formAction:s,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:c,json:void 0,text:void 0};if(Zt(u.formMethod))return{path:n,submission:u};let d=Dn(n);return t&&d.search&&kp(d.search)&&l.append("index",""),d.search="?"+l,{path:Kr(d),submission:u}}function b4(e,t){let n=e;if(t){let r=e.findIndex(i=>i.route.id===t);r>=0&&(n=e.slice(0,r))}return n}function _h(e,t,n,r,i,a,o,s,l,c,u,d,p,v){let h=v?Object.values(v)[0]:p?Object.values(p)[0]:void 0,y=e.createURL(t.location),b=e.createURL(i),g=v?Object.keys(v)[0]:void 0,w=b4(n,g).filter((S,P)=>{if(S.route.lazy)return!0;if(S.route.loader==null)return!1;if(S4(t.loaderData,t.matches[P],S)||o.some(z=>z===S.route.id))return!0;let C=t.matches[P],O=S;return Ih(S,Pe({currentUrl:y,currentParams:C.params,nextUrl:b,nextParams:O.params},r,{actionResult:h,defaultShouldRevalidate:a||y.pathname+y.search===b.pathname+b.search||y.search!==b.search||$v(C,O)}))}),x=[];return l.forEach((S,P)=>{if(!n.some(Z=>Z.route.id===S.routeId))return;let C=bi(u,S.path,d);if(!C){x.push({key:P,routeId:S.routeId,path:S.path,matches:null,match:null,controller:null});return}let O=t.fetchers.get(P),z=qf(C,S.path),L=!1;c.has(P)?L=!1:s.includes(P)?L=!0:O&&O.state!=="idle"&&O.data===void 0?L=a:L=Ih(z,Pe({currentUrl:y,currentParams:t.matches[t.matches.length-1].params,nextUrl:b,nextParams:n[n.length-1].params},r,{actionResult:h,defaultShouldRevalidate:a})),L&&x.push({key:P,routeId:S.routeId,path:S.path,matches:C,match:z,controller:new AbortController})}),[w,x]}function S4(e,t,n){let r=!t||n.route.id!==t.route.id,i=e[n.route.id]===void 0;return r||i}function $v(e,t){let n=e.route.path;return e.pathname!==t.pathname||n!=null&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function Ih(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if(typeof n=="boolean")return n}return t.defaultShouldRevalidate}async function Mh(e,t,n){if(!e.lazy)return;let r=await e.lazy();if(!e.lazy)return;let i=n[e.id];K(i,"No route found in manifest");let a={};for(let o in r){let l=i[o]!==void 0&&o!=="hasErrorBoundary";Vi(!l,'Route "'+i.id+'" has a static property "'+o+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+o+'" will be ignored.')),!l&&!Vb.has(o)&&(a[o]=r[o])}Object.assign(i,a),Object.assign(i,Pe({},t(i),{lazy:void 0}))}async function Sa(e,t,n,r,i,a,o,s){s===void 0&&(s={});let l,c,u,d=h=>{let y,b=new Promise((g,m)=>y=m);return u=()=>y(),t.signal.addEventListener("abort",u),Promise.race([h({request:t,params:n.params,context:s.requestContext}),b])};try{let h=n.route[e];if(n.route.lazy)if(h){let y,b=await Promise.all([d(h).catch(g=>{y=g}),Mh(n.route,a,i)]);if(y)throw y;c=b[0]}else if(await Mh(n.route,a,i),h=n.route[e],h)c=await d(h);else if(e==="action"){let y=new URL(t.url),b=y.pathname+y.search;throw Mt(405,{method:t.method,pathname:b,routeId:n.route.id})}else return{type:ze.data,data:void 0};else if(h)c=await d(h);else{let y=new URL(t.url),b=y.pathname+y.search;throw Mt(404,{pathname:b})}K(c!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(h){l=ze.error,c=h}finally{u&&t.signal.removeEventListener("abort",u)}if(j4(c)){let h=c.status;if(h4.has(h)){let g=c.headers.get("Location");if(K(g,"Redirects returned/thrown from loaders/actions must have a Location header"),!Dv.test(g))g=Gf(new URL(t.url),r.slice(0,r.indexOf(n)+1),o,!0,g);else if(!s.isStaticRequest){let m=new URL(t.url),w=g.startsWith("//")?new URL(m.protocol+g):new URL(g),x=ia(w.pathname,o)!=null;w.origin===m.origin&&x&&(g=w.pathname+w.search+w.hash)}if(s.isStaticRequest)throw c.headers.set("Location",g),c;return{type:ze.redirect,status:h,location:g,revalidate:c.headers.get("X-Remix-Revalidate")!==null,reloadDocument:c.headers.get("X-Remix-Reload-Document")!==null}}if(s.isRouteRequest)throw{type:l===ze.error?ze.error:ze.data,response:c};let y,b=c.headers.get("Content-Type");return b&&/\bapplication\/json\b/.test(b)?y=await c.json():y=await c.text(),l===ze.error?{type:l,error:new Sp(h,c.statusText,y),headers:c.headers}:{type:ze.data,data:y,statusCode:c.status,headers:c.headers}}if(l===ze.error)return{type:l,error:c};if(C4(c)){var p,v;return{type:ze.deferred,deferredData:c,statusCode:(p=c.init)==null?void 0:p.status,headers:((v=c.init)==null?void 0:v.headers)&&new Headers(c.init.headers)}}return{type:ze.data,data:c}}function ka(e,t,n,r){let i=e.createURL(Fv(t)).toString(),a={signal:n};if(r&&Zt(r.formMethod)){let{formMethod:o,formEncType:s}=r;a.method=o.toUpperCase(),s==="application/json"?(a.headers=new Headers({"Content-Type":s}),a.body=JSON.stringify(r.json)):s==="text/plain"?a.body=r.text:s==="application/x-www-form-urlencoded"&&r.formData?a.body=Yf(r.formData):a.body=r.formData}return new Request(i,a)}function Yf(e){let t=new URLSearchParams;for(let[n,r]of e.entries())t.append(n,typeof r=="string"?r:r.name);return t}function zh(e){let t=new FormData;for(let[n,r]of e.entries())t.append(n,r);return t}function k4(e,t,n,r,i){let a={},o=null,s,l=!1,c={};return n.forEach((u,d)=>{let p=t[d].route.id;if(K(!Li(u),"Cannot handle redirect results in processLoaderData"),Va(u)){let v=Si(e,p),h=u.error;r&&(h=Object.values(r)[0],r=void 0),o=o||{},o[v.route.id]==null&&(o[v.route.id]=h),a[p]=void 0,l||(l=!0,s=Mv(u.error)?u.error.status:500),u.headers&&(c[p]=u.headers)}else Ir(u)?(i.set(p,u.deferredData),a[p]=u.deferredData.data):a[p]=u.data,u.statusCode!=null&&u.statusCode!==200&&!l&&(s=u.statusCode),u.headers&&(c[p]=u.headers)}),r&&(o=r,a[Object.keys(r)[0]]=void 0),{loaderData:a,errors:o,statusCode:s||200,loaderHeaders:c}}function Dh(e,t,n,r,i,a,o,s){let{loaderData:l,errors:c}=k4(t,n,r,i,s);for(let u=0;u<a.length;u++){let{key:d,match:p,controller:v}=a[u];K(o!==void 0&&o[u]!==void 0,"Did not find corresponding fetcher result");let h=o[u];if(!(v&&v.signal.aborted))if(Va(h)){let y=Si(e.matches,p==null?void 0:p.route.id);c&&c[y.route.id]||(c=Pe({},c,{[y.route.id]:h.error})),e.fetchers.delete(d)}else if(Li(h))K(!1,"Unhandled fetcher revalidation redirect");else if(Ir(h))K(!1,"Unhandled fetcher deferred data");else{let y=li(h.data);e.fetchers.set(d,y)}}return{loaderData:l,errors:c}}function $h(e,t,n,r){let i=Pe({},t);for(let a of n){let o=a.route.id;if(t.hasOwnProperty(o)?t[o]!==void 0&&(i[o]=t[o]):e[o]!==void 0&&a.route.loader&&(i[o]=e[o]),r&&r.hasOwnProperty(o))break}return i}function Si(e,t){return(t?e.slice(0,e.findIndex(r=>r.route.id===t)+1):[...e]).reverse().find(r=>r.route.hasErrorBoundary===!0)||e[0]}function Fh(e){let t=e.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function Mt(e,t){let{pathname:n,routeId:r,method:i,type:a}=t===void 0?{}:t,o="Unknown Server Error",s="Unknown @remix-run/router error";return e===400?(o="Bad Request",i&&n&&r?s="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":a==="defer-action"?s="defer() is not supported in actions":a==="invalid-body"&&(s="Unable to encode submission body")):e===403?(o="Forbidden",s='Route "'+r+'" does not match URL "'+n+'"'):e===404?(o="Not Found",s='No route matches URL "'+n+'"'):e===405&&(o="Method Not Allowed",i&&n&&r?s="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(s='Invalid request method "'+i.toUpperCase()+'"')),new Sp(e||500,o,new Error(s),!0)}function Uh(e){for(let t=e.length-1;t>=0;t--){let n=e[t];if(Li(n))return{result:n,idx:t}}}function Fv(e){let t=typeof e=="string"?Dn(e):e;return Kr(Pe({},t,{hash:""}))}function E4(e,t){return e.pathname!==t.pathname||e.search!==t.search?!1:e.hash===""?t.hash!=="":e.hash===t.hash?!0:t.hash!==""}function Ir(e){return e.type===ze.deferred}function Va(e){return e.type===ze.error}function Li(e){return(e&&e.type)===ze.redirect}function C4(e){let t=e;return t&&typeof t=="object"&&typeof t.data=="object"&&typeof t.subscribe=="function"&&typeof t.cancel=="function"&&typeof t.resolveData=="function"}function j4(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function P4(e){return m4.has(e.toLowerCase())}function Zt(e){return d4.has(e.toLowerCase())}async function Bh(e,t,n,r,i,a){for(let o=0;o<n.length;o++){let s=n[o],l=t[o];if(!l)continue;let c=e.find(d=>d.route.id===l.route.id),u=c!=null&&!$v(c,l)&&(a&&a[l.route.id])!==void 0;if(Ir(s)&&(i||u)){let d=r[o];K(d,"Expected an AbortSignal for revalidating fetcher deferred result"),await Uv(s,d,i).then(p=>{p&&(n[o]=p||n[o])})}}}async function Uv(e,t,n){if(n===void 0&&(n=!1),!await e.deferredData.resolveData(t)){if(n)try{return{type:ze.data,data:e.deferredData.unwrappedData}}catch(i){return{type:ze.error,error:i}}return{type:ze.data,data:e.deferredData.data}}}function kp(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function qf(e,t){let n=typeof t=="string"?Dn(t).search:t.search;if(e[e.length-1].route.index&&kp(n||""))return e[e.length-1];let r=Lo(e);return r[r.length-1]}function Hh(e){let{formMethod:t,formAction:n,formEncType:r,text:i,formData:a,json:o}=e;if(!(!t||!n||!r)){if(i!=null)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:void 0,text:i};if(a!=null)return{formMethod:t,formAction:n,formEncType:r,formData:a,json:void 0,text:void 0};if(o!==void 0)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:o,text:void 0}}}function ku(e,t){return t?{state:"loading",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}:{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function N4(e,t){return{state:"submitting",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}}function Ea(e,t){return e?{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function A4(e,t){return{state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t?t.data:void 0}}function li(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}/**
 * React Router v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Sl(){return Sl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Sl.apply(this,arguments)}const ec=k.createContext(null),Ep=k.createContext(null),ri=k.createContext(null),tc=k.createContext(null),$n=k.createContext({outlet:null,matches:[],isDataRoute:!1}),Bv=k.createContext(null);function O4(e,t){let{relative:n}=t===void 0?{}:t;aa()||K(!1);let{basename:r,navigator:i}=k.useContext(ri),{hash:a,pathname:o,search:s}=Cp(e,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Pn([r,o])),i.createHref({pathname:l,search:s,hash:a})}function aa(){return k.useContext(tc)!=null}function ii(){return aa()||K(!1),k.useContext(tc).location}function Hv(e){k.useContext(ri).static||k.useLayoutEffect(e)}function _o(){let{isDataRoute:e}=k.useContext($n);return e?H4():R4()}function R4(){aa()||K(!1);let e=k.useContext(ec),{basename:t,navigator:n}=k.useContext(ri),{matches:r}=k.useContext($n),{pathname:i}=ii(),a=JSON.stringify(Lo(r).map(l=>l.pathnameBase)),o=k.useRef(!1);return Hv(()=>{o.current=!0}),k.useCallback(function(l,c){if(c===void 0&&(c={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let u=Zl(l,JSON.parse(a),i,c.relative==="path");e==null&&t!=="/"&&(u.pathname=u.pathname==="/"?t:Pn([t,u.pathname])),(c.replace?n.replace:n.push)(u,c.state,c)},[t,n,a,i,e])}const T4=k.createContext(null);function L4(e){let t=k.useContext($n).outlet;return t&&k.createElement(T4.Provider,{value:e},t)}function Cp(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=k.useContext($n),{pathname:i}=ii(),a=JSON.stringify(Lo(r).map(o=>o.pathnameBase));return k.useMemo(()=>Zl(e,JSON.parse(a),i,n==="path"),[e,a,i,n])}function _4(e,t,n){aa()||K(!1);let{navigator:r}=k.useContext(ri),{matches:i}=k.useContext($n),a=i[i.length-1],o=a?a.params:{};a&&a.pathname;let s=a?a.pathnameBase:"/";a&&a.route;let l=ii(),c;if(t){var u;let y=typeof t=="string"?Dn(t):t;s==="/"||(u=y.pathname)!=null&&u.startsWith(s)||K(!1),c=y}else c=l;let d=c.pathname||"/",p=s==="/"?d:d.slice(s.length)||"/",v=bi(e,{pathname:p}),h=$4(v&&v.map(y=>Object.assign({},y,{params:Object.assign({},o,y.params),pathname:Pn([s,r.encodeLocation?r.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?s:Pn([s,r.encodeLocation?r.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),i,n);return t&&h?k.createElement(tc.Provider,{value:{location:Sl({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:$e.Pop}},h):h}function I4(){let e=Gv(),t=Mv(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},a=null;return k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},t),n?k.createElement("pre",{style:i},n):null,a)}const M4=k.createElement(I4,null);class z4 extends k.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?k.createElement($n.Provider,{value:this.props.routeContext},k.createElement(Bv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function D4(e){let{routeContext:t,match:n,children:r}=e,i=k.useContext(ec);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),k.createElement($n.Provider,{value:t},r)}function $4(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let a=e,o=(r=n)==null?void 0:r.errors;if(o!=null){let s=a.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));s>=0||K(!1),a=a.slice(0,Math.min(a.length,s+1))}return a.reduceRight((s,l,c)=>{let u=l.route.id?o==null?void 0:o[l.route.id]:null,d=null;n&&(d=l.route.errorElement||M4);let p=t.concat(a.slice(0,c+1)),v=()=>{let h;return u?h=d:l.route.Component?h=k.createElement(l.route.Component,null):l.route.element?h=l.route.element:h=s,k.createElement(D4,{match:l,routeContext:{outlet:s,matches:p,isDataRoute:n!=null},children:h})};return n&&(l.route.ErrorBoundary||l.route.errorElement||c===0)?k.createElement(z4,{location:n.location,revalidation:n.revalidation,component:d,error:u,children:v(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):v()},null)}var Vv=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Vv||{}),kl=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(kl||{});function F4(e){let t=k.useContext(ec);return t||K(!1),t}function U4(e){let t=k.useContext(Ep);return t||K(!1),t}function B4(e){let t=k.useContext($n);return t||K(!1),t}function Wv(e){let t=B4(),n=t.matches[t.matches.length-1];return n.route.id||K(!1),n.route.id}function Gv(){var e;let t=k.useContext(Bv),n=U4(kl.UseRouteError),r=Wv(kl.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function H4(){let{router:e}=F4(Vv.UseNavigateStable),t=Wv(kl.UseNavigateStable),n=k.useRef(!1);return Hv(()=>{n.current=!0}),k.useCallback(function(i,a){a===void 0&&(a={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Sl({fromRouteId:t},a)))},[e,t])}const V4="startTransition",Vh=Rx[V4];function W4(e){let{fallbackElement:t,router:n,future:r}=e,[i,a]=k.useState(n.state),{v7_startTransition:o}=r||{},s=k.useCallback(d=>{o&&Vh?Vh(()=>a(d)):a(d)},[a,o]);k.useLayoutEffect(()=>n.subscribe(s),[n,s]);let l=k.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:d=>n.navigate(d),push:(d,p,v)=>n.navigate(d,{state:p,preventScrollReset:v==null?void 0:v.preventScrollReset}),replace:(d,p,v)=>n.navigate(d,{replace:!0,state:p,preventScrollReset:v==null?void 0:v.preventScrollReset})}),[n]),c=n.basename||"/",u=k.useMemo(()=>({router:n,navigator:l,static:!1,basename:c}),[n,l,c]);return k.createElement(k.Fragment,null,k.createElement(ec.Provider,{value:u},k.createElement(Ep.Provider,{value:i},k.createElement(Q4,{basename:c,location:i.location,navigationType:i.historyAction,navigator:l},i.initialized?k.createElement(G4,{routes:n.routes,state:i}):t))),null)}function G4(e){let{routes:t,state:n}=e;return _4(t,void 0,n)}function Y4(e){let{to:t,replace:n,state:r,relative:i}=e;aa()||K(!1);let{matches:a}=k.useContext($n),{pathname:o}=ii(),s=_o(),l=Zl(t,Lo(a).map(u=>u.pathnameBase),o,i==="path"),c=JSON.stringify(l);return k.useEffect(()=>s(JSON.parse(c),{replace:n,state:r,relative:i}),[s,c,i,n,r]),null}function q4(e){return L4(e.context)}function Q4(e){let{basename:t="/",children:n=null,location:r,navigationType:i=$e.Pop,navigator:a,static:o=!1}=e;aa()&&K(!1);let s=t.replace(/^\/*/,"/"),l=k.useMemo(()=>({basename:s,navigator:a,static:o}),[s,a,o]);typeof r=="string"&&(r=Dn(r));let{pathname:c="/",search:u="",hash:d="",state:p=null,key:v="default"}=r,h=k.useMemo(()=>{let y=ia(c,s);return y==null?null:{location:{pathname:y,search:u,hash:d,state:p,key:v},navigationType:i}},[s,c,u,d,p,v,i]);return h==null?null:k.createElement(ri.Provider,{value:l},k.createElement(tc.Provider,{children:n,value:h}))}new Promise(()=>{});function K4(e){let t={hasErrorBoundary:e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&Object.assign(t,{element:k.createElement(e.Component),Component:void 0}),e.ErrorBoundary&&Object.assign(t,{errorElement:k.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),t}/**
 * React Router DOM v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Wi(){return Wi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Wi.apply(this,arguments)}function Yv(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function J4(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function X4(e,t){return e.button===0&&(!t||t==="_self")&&!J4(e)}const Z4=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],e3=["aria-current","caseSensitive","className","end","style","to","children"];function t3(e,t){return x4({basename:t==null?void 0:t.basename,future:Wi({},t==null?void 0:t.future,{v7_prependBasename:!0}),history:Ub({window:t==null?void 0:t.window}),hydrationData:(t==null?void 0:t.hydrationData)||n3(),routes:e,mapRouteProperties:K4}).initialize()}function n3(){var e;let t=(e=window)==null?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=Wi({},t,{errors:r3(t.errors)})),t}function r3(e){if(!e)return null;let t=Object.entries(e),n={};for(let[r,i]of t)if(i&&i.__type==="RouteErrorResponse")n[r]=new Sp(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){if(i.__subType){let a=window[i.__subType];if(typeof a=="function")try{let o=new a(i.message);o.stack="",n[r]=o}catch{}}if(n[r]==null){let a=new Error(i.message);a.stack="",n[r]=a}}else n[r]=i;return n}const i3=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",a3=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,_e=k.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:a,replace:o,state:s,target:l,to:c,preventScrollReset:u}=t,d=Yv(t,Z4),{basename:p}=k.useContext(ri),v,h=!1;if(typeof c=="string"&&a3.test(c)&&(v=c,i3))try{let m=new URL(window.location.href),w=c.startsWith("//")?new URL(m.protocol+c):new URL(c),x=ia(w.pathname,p);w.origin===m.origin&&x!=null?c=x+w.search+w.hash:h=!0}catch{}let y=O4(c,{relative:i}),b=o3(c,{replace:o,state:s,target:l,preventScrollReset:u,relative:i});function g(m){r&&r(m),m.defaultPrevented||b(m)}return k.createElement("a",Wi({},d,{href:v||y,onClick:h||a?r:g,ref:n,target:l}))}),pt=k.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:a="",end:o=!1,style:s,to:l,children:c}=t,u=Yv(t,e3),d=Cp(l,{relative:u.relative}),p=ii(),v=k.useContext(Ep),{navigator:h}=k.useContext(ri),y=h.encodeLocation?h.encodeLocation(d).pathname:d.pathname,b=p.pathname,g=v&&v.navigation&&v.navigation.location?v.navigation.location.pathname:null;i||(b=b.toLowerCase(),g=g?g.toLowerCase():null,y=y.toLowerCase());let m=b===y||!o&&b.startsWith(y)&&b.charAt(y.length)==="/",w=g!=null&&(g===y||!o&&g.startsWith(y)&&g.charAt(y.length)==="/"),x=m?r:void 0,S;typeof a=="function"?S=a({isActive:m,isPending:w}):S=[a,m?"active":null,w?"pending":null].filter(Boolean).join(" ");let P=typeof s=="function"?s({isActive:m,isPending:w}):s;return k.createElement(_e,Wi({},u,{"aria-current":x,className:S,ref:n,style:P,to:l}),typeof c=="function"?c({isActive:m,isPending:w}):c)});var Wh;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"})(Wh||(Wh={}));var Gh;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Gh||(Gh={}));function o3(e,t){let{target:n,replace:r,state:i,preventScrollReset:a,relative:o}=t===void 0?{}:t,s=_o(),l=ii(),c=Cp(e,{relative:o});return k.useCallback(u=>{if(X4(u,n)){u.preventDefault();let d=r!==void 0?r:Kr(l)===Kr(c);s(e,{replace:d,state:i,preventScrollReset:a,relative:o})}},[l,s,c,r,i,n,e,a,o])}var bt=function(){return bt=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},bt.apply(this,arguments)};function vo(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,a;r<i;r++)(a||!(r in t))&&(a||(a=Array.prototype.slice.call(t,0,r)),a[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))}var ge="-ms-",Wa="-moz-",ae="-webkit-",qv="comm",nc="rule",jp="decl",s3="@import",Qv="@keyframes",l3="@layer",c3=Math.abs,Pp=String.fromCharCode,Qf=Object.assign;function u3(e,t){return Je(e,0)^45?(((t<<2^Je(e,0))<<2^Je(e,1))<<2^Je(e,2))<<2^Je(e,3):0}function Kv(e){return e.trim()}function Sn(e,t){return(e=t.exec(e))?e[0]:e}function Y(e,t,n){return e.replace(t,n)}function Ls(e,t){return e.indexOf(t)}function Je(e,t){return e.charCodeAt(t)|0}function Gi(e,t,n){return e.slice(t,n)}function fn(e){return e.length}function Jv(e){return e.length}function Oa(e,t){return t.push(e),e}function f3(e,t){return e.map(t).join("")}function Yh(e,t){return e.filter(function(n){return!Sn(n,t)})}var rc=1,Yi=1,Xv=0,Wt=0,Fe=0,oa="";function ic(e,t,n,r,i,a,o,s){return{value:e,root:t,parent:n,type:r,props:i,children:a,line:rc,column:Yi,length:o,return:"",siblings:s}}function qn(e,t){return Qf(ic("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function si(e){for(;e.root;)e=qn(e.root,{children:[e]});Oa(e,e.siblings)}function d3(){return Fe}function p3(){return Fe=Wt>0?Je(oa,--Wt):0,Yi--,Fe===10&&(Yi=1,rc--),Fe}function on(){return Fe=Wt<Xv?Je(oa,Wt++):0,Yi++,Fe===10&&(Yi=1,rc++),Fe}function Br(){return Je(oa,Wt)}function _s(){return Wt}function ac(e,t){return Gi(oa,e,t)}function Kf(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function m3(e){return rc=Yi=1,Xv=fn(oa=e),Wt=0,[]}function h3(e){return oa="",e}function Eu(e){return Kv(ac(Wt-1,Jf(e===91?e+2:e===40?e+1:e)))}function g3(e){for(;(Fe=Br())&&Fe<33;)on();return Kf(e)>2||Kf(Fe)>3?"":" "}function v3(e,t){for(;--t&&on()&&!(Fe<48||Fe>102||Fe>57&&Fe<65||Fe>70&&Fe<97););return ac(e,_s()+(t<6&&Br()==32&&on()==32))}function Jf(e){for(;on();)switch(Fe){case e:return Wt;case 34:case 39:e!==34&&e!==39&&Jf(Fe);break;case 40:e===41&&Jf(e);break;case 92:on();break}return Wt}function y3(e,t){for(;on()&&e+Fe!==47+10;)if(e+Fe===42+42&&Br()===47)break;return"/*"+ac(t,Wt-1)+"*"+Pp(e===47?e:on())}function x3(e){for(;!Kf(Br());)on();return ac(e,Wt)}function w3(e){return h3(Is("",null,null,null,[""],e=m3(e),0,[0],e))}function Is(e,t,n,r,i,a,o,s,l){for(var c=0,u=0,d=o,p=0,v=0,h=0,y=1,b=1,g=1,m=0,w="",x=i,S=a,P=r,C=w;b;)switch(h=m,m=on()){case 40:if(h!=108&&Je(C,d-1)==58){Ls(C+=Y(Eu(m),"&","&\f"),"&\f")!=-1&&(g=-1);break}case 34:case 39:case 91:C+=Eu(m);break;case 9:case 10:case 13:case 32:C+=g3(h);break;case 92:C+=v3(_s()-1,7);continue;case 47:switch(Br()){case 42:case 47:Oa(b3(y3(on(),_s()),t,n,l),l);break;default:C+="/"}break;case 123*y:s[c++]=fn(C)*g;case 125*y:case 59:case 0:switch(m){case 0:case 125:b=0;case 59+u:g==-1&&(C=Y(C,/\f/g,"")),v>0&&fn(C)-d&&Oa(v>32?Qh(C+";",r,n,d-1,l):Qh(Y(C," ","")+";",r,n,d-2,l),l);break;case 59:C+=";";default:if(Oa(P=qh(C,t,n,c,u,i,s,w,x=[],S=[],d,a),a),m===123)if(u===0)Is(C,t,P,P,x,a,d,s,S);else switch(p===99&&Je(C,3)===110?100:p){case 100:case 108:case 109:case 115:Is(e,P,P,r&&Oa(qh(e,P,P,0,0,i,s,w,i,x=[],d,S),S),i,S,d,s,r?x:S);break;default:Is(C,P,P,P,[""],S,0,s,S)}}c=u=v=0,y=g=1,w=C="",d=o;break;case 58:d=1+fn(C),v=h;default:if(y<1){if(m==123)--y;else if(m==125&&y++==0&&p3()==125)continue}switch(C+=Pp(m),m*y){case 38:g=u>0?1:(C+="\f",-1);break;case 44:s[c++]=(fn(C)-1)*g,g=1;break;case 64:Br()===45&&(C+=Eu(on())),p=Br(),u=d=fn(w=C+=x3(_s())),m++;break;case 45:h===45&&fn(C)==2&&(y=0)}}return a}function qh(e,t,n,r,i,a,o,s,l,c,u,d){for(var p=i-1,v=i===0?a:[""],h=Jv(v),y=0,b=0,g=0;y<r;++y)for(var m=0,w=Gi(e,p+1,p=c3(b=o[y])),x=e;m<h;++m)(x=Kv(b>0?v[m]+" "+w:Y(w,/&\f/g,v[m])))&&(l[g++]=x);return ic(e,t,n,i===0?nc:s,l,c,u,d)}function b3(e,t,n,r){return ic(e,t,n,qv,Pp(d3()),Gi(e,2,-2),0,r)}function Qh(e,t,n,r,i){return ic(e,t,n,jp,Gi(e,0,r),Gi(e,r+1,-1),r,i)}function Zv(e,t,n){switch(u3(e,t)){case 5103:return ae+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ae+e+e;case 4789:return Wa+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ae+e+Wa+e+ge+e+e;case 5936:switch(Je(e,t+11)){case 114:return ae+e+ge+Y(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ae+e+ge+Y(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ae+e+ge+Y(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return ae+e+ge+e+e;case 6165:return ae+e+ge+"flex-"+e+e;case 5187:return ae+e+Y(e,/(\w+).+(:[^]+)/,ae+"box-$1$2"+ge+"flex-$1$2")+e;case 5443:return ae+e+ge+"flex-item-"+Y(e,/flex-|-self/g,"")+(Sn(e,/flex-|baseline/)?"":ge+"grid-row-"+Y(e,/flex-|-self/g,""))+e;case 4675:return ae+e+ge+"flex-line-pack"+Y(e,/align-content|flex-|-self/g,"")+e;case 5548:return ae+e+ge+Y(e,"shrink","negative")+e;case 5292:return ae+e+ge+Y(e,"basis","preferred-size")+e;case 6060:return ae+"box-"+Y(e,"-grow","")+ae+e+ge+Y(e,"grow","positive")+e;case 4554:return ae+Y(e,/([^-])(transform)/g,"$1"+ae+"$2")+e;case 6187:return Y(Y(Y(e,/(zoom-|grab)/,ae+"$1"),/(image-set)/,ae+"$1"),e,"")+e;case 5495:case 3959:return Y(e,/(image-set\([^]*)/,ae+"$1$`$1");case 4968:return Y(Y(e,/(.+:)(flex-)?(.*)/,ae+"box-pack:$3"+ge+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ae+e+e;case 4200:if(!Sn(e,/flex-|baseline/))return ge+"grid-column-align"+Gi(e,t)+e;break;case 2592:case 3360:return ge+Y(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,Sn(r.props,/grid-\w+-end/)})?~Ls(e+(n=n[t].value),"span")?e:ge+Y(e,"-start","")+e+ge+"grid-row-span:"+(~Ls(n,"span")?Sn(n,/\d+/):+Sn(n,/\d+/)-+Sn(e,/\d+/))+";":ge+Y(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Sn(r.props,/grid-\w+-start/)})?e:ge+Y(Y(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return Y(e,/(.+)-inline(.+)/,ae+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(fn(e)-1-t>6)switch(Je(e,t+1)){case 109:if(Je(e,t+4)!==45)break;case 102:return Y(e,/(.+:)(.+)-([^]+)/,"$1"+ae+"$2-$3$1"+Wa+(Je(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Ls(e,"stretch")?Zv(Y(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return Y(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,a,o,s,l,c){return ge+i+":"+a+c+(o?ge+i+"-span:"+(s?l:+l-+a)+c:"")+e});case 4949:if(Je(e,t+6)===121)return Y(e,":",":"+ae)+e;break;case 6444:switch(Je(e,Je(e,14)===45?18:11)){case 120:return Y(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ae+(Je(e,14)===45?"inline-":"")+"box$3$1"+ae+"$2$3$1"+ge+"$2box$3")+e;case 100:return Y(e,":",":"+ge)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Y(e,"scroll-","scroll-snap-")+e}return e}function El(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function S3(e,t,n,r){switch(e.type){case l3:if(e.children.length)break;case s3:case jp:return e.return=e.return||e.value;case qv:return"";case Qv:return e.return=e.value+"{"+El(e.children,r)+"}";case nc:if(!fn(e.value=e.props.join(",")))return""}return fn(n=El(e.children,r))?e.return=e.value+"{"+n+"}":""}function k3(e){var t=Jv(e);return function(n,r,i,a){for(var o="",s=0;s<t;s++)o+=e[s](n,r,i,a)||"";return o}}function E3(e){return function(t){t.root||(t=t.return)&&e(t)}}function C3(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case jp:e.return=Zv(e.value,e.length,n);return;case Qv:return El([qn(e,{value:Y(e.value,"@","@"+ae)})],r);case nc:if(e.length)return f3(n=e.props,function(i){switch(Sn(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":si(qn(e,{props:[Y(i,/:(read-\w+)/,":"+Wa+"$1")]})),si(qn(e,{props:[i]})),Qf(e,{props:Yh(n,r)});break;case"::placeholder":si(qn(e,{props:[Y(i,/:(plac\w+)/,":"+ae+"input-$1")]})),si(qn(e,{props:[Y(i,/:(plac\w+)/,":"+Wa+"$1")]})),si(qn(e,{props:[Y(i,/:(plac\w+)/,ge+"input-$1")]})),si(qn(e,{props:[i]})),Qf(e,{props:Yh(n,r)});break}return""})}}var j3={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},qi=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Np=typeof window<"u"&&"HTMLElement"in window,P3=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),oc=Object.freeze([]),Qi=Object.freeze({});function N3(e,t,n){return n===void 0&&(n=Qi),e.theme!==n.theme&&e.theme||t||n.theme}var ey=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),A3=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,O3=/(^-|-$)/g;function Kh(e){return e.replace(A3,"-").replace(O3,"")}var R3=/(a)(d)/gi,Jh=function(e){return String.fromCharCode(e+(e>25?39:97))};function Xf(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Jh(t%52)+n;return(Jh(t%52)+n).replace(R3,"$1-$2")}var Cu,ki=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},ty=function(e){return ki(5381,e)};function ny(e){return Xf(ty(e)>>>0)}function T3(e){return e.displayName||e.name||"Component"}function ju(e){return typeof e=="string"&&!0}var ry=typeof Symbol=="function"&&Symbol.for,iy=ry?Symbol.for("react.memo"):60115,L3=ry?Symbol.for("react.forward_ref"):60112,_3={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},I3={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},ay={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},M3=((Cu={})[L3]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Cu[iy]=ay,Cu);function Xh(e){return("type"in(t=e)&&t.type.$$typeof)===iy?ay:"$$typeof"in e?M3[e.$$typeof]:_3;var t}var z3=Object.defineProperty,D3=Object.getOwnPropertyNames,Zh=Object.getOwnPropertySymbols,$3=Object.getOwnPropertyDescriptor,F3=Object.getPrototypeOf,eg=Object.prototype;function oy(e,t,n){if(typeof t!="string"){if(eg){var r=F3(t);r&&r!==eg&&oy(e,r,n)}var i=D3(t);Zh&&(i=i.concat(Zh(t)));for(var a=Xh(e),o=Xh(t),s=0;s<i.length;++s){var l=i[s];if(!(l in I3||n&&n[l]||o&&l in o||a&&l in a)){var c=$3(t,l);try{z3(e,l,c)}catch{}}}}return e}function Ki(e){return typeof e=="function"}function Ap(e){return typeof e=="object"&&"styledComponentId"in e}function Mr(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Zf(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function yo(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function ed(e,t,n){if(n===void 0&&(n=!1),!n&&!yo(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=ed(e[r],t[r]);else if(yo(t))for(var r in t)e[r]=ed(e[r],t[r]);return e}function Op(e,t){Object.defineProperty(e,"toString",{value:t})}function Io(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var U3=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,a=i;t>=a;)if((a<<=1)<0)throw Io(16,"".concat(t));this.groupSizes=new Uint32Array(a),this.groupSizes.set(r),this.length=a;for(var o=i;o<a;o++)this.groupSizes[o]=0}for(var s=this.indexOfGroup(t+1),l=(o=0,n.length);o<l;o++)this.tag.insertRule(s,n[o])&&(this.groupSizes[t]++,s++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var a=r;a<i;a++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),a=i+r,o=i;o<a;o++)n+="".concat(this.tag.getRule(o)).concat(`/*!sc*/
`);return n},e}(),Ms=new Map,Cl=new Map,Pu=1,cs=function(e){if(Ms.has(e))return Ms.get(e);for(;Cl.has(Pu);)Pu++;var t=Pu++;return Ms.set(e,t),Cl.set(t,e),t},B3=function(e,t){Ms.set(e,t),Cl.set(t,e)},H3="style[".concat(qi,"][").concat("data-styled-version",'="').concat("6.0.8",'"]'),V3=new RegExp("^".concat(qi,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),W3=function(e,t,n){for(var r,i=n.split(","),a=0,o=i.length;a<o;a++)(r=i[a])&&e.registerName(t,r)},G3=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),i=[],a=0,o=r.length;a<o;a++){var s=r[a].trim();if(s){var l=s.match(V3);if(l){var c=0|parseInt(l[1],10),u=l[2];c!==0&&(B3(u,c),W3(e,u,l[3]),e.getTag().insertRules(c,i)),i.length=0}else i.push(s)}}};function Y3(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var sy=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(s){var l=Array.from(s.querySelectorAll("style[".concat(qi,"]")));return l[l.length-1]}(n),a=i!==void 0?i.nextSibling:null;r.setAttribute(qi,"active"),r.setAttribute("data-styled-version","6.0.8");var o=Y3();return o&&r.setAttribute("nonce",o),n.insertBefore(r,a),r},q3=function(){function e(t){this.element=sy(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,a=r.length;i<a;i++){var o=r[i];if(o.ownerNode===n)return o}throw Io(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),Q3=function(){function e(t){this.element=sy(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),K3=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),tg=Np,J3={isServer:!Np,useCSSOMInjection:!P3},ly=function(){function e(t,n,r){t===void 0&&(t=Qi),n===void 0&&(n={});var i=this;this.options=bt(bt({},J3),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Np&&tg&&(tg=!1,function(a){for(var o=document.querySelectorAll(H3),s=0,l=o.length;s<l;s++){var c=o[s];c&&c.getAttribute(qi)!=="active"&&(G3(a,c),c.parentNode&&c.parentNode.removeChild(c))}}(this)),Op(this,function(){return function(a){for(var o=a.getTag(),s=o.length,l="",c=function(d){var p=function(g){return Cl.get(g)}(d);if(p===void 0)return"continue";var v=a.names.get(p),h=o.getGroup(d);if(v===void 0||h.length===0)return"continue";var y="".concat(qi,".g").concat(d,'[id="').concat(p,'"]'),b="";v!==void 0&&v.forEach(function(g){g.length>0&&(b+="".concat(g,","))}),l+="".concat(h).concat(y,'{content:"').concat(b,'"}').concat(`/*!sc*/
`)},u=0;u<s;u++)c(u);return l}(i)})}return e.registerId=function(t){return cs(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(bt(bt({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new K3(i):r?new q3(i):new Q3(i)}(this.options),new U3(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(cs(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(cs(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(cs(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),X3=/&/g,Z3=/^\s*\/\/.*$/gm;function cy(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=cy(n.children,t)),n})}function eS(e){var t,n,r,i=e===void 0?Qi:e,a=i.options,o=a===void 0?Qi:a,s=i.plugins,l=s===void 0?oc:s,c=function(p,v,h){return h===n||h.startsWith(n)&&h.endsWith(n)&&h.replaceAll(n,"").length>0?".".concat(t):p},u=l.slice();u.push(function(p){p.type===nc&&p.value.includes("&")&&(p.props[0]=p.props[0].replace(X3,n).replace(r,c))}),o.prefix&&u.push(C3),u.push(S3);var d=function(p,v,h,y){v===void 0&&(v=""),h===void 0&&(h=""),y===void 0&&(y="&"),t=y,n=v,r=new RegExp("\\".concat(n,"\\b"),"g");var b=p.replace(Z3,""),g=w3(h||v?"".concat(h," ").concat(v," { ").concat(b," }"):b);o.namespace&&(g=cy(g,o.namespace));var m=[];return El(g,k3(u.concat(E3(function(w){return m.push(w)})))),m};return d.hash=l.length?l.reduce(function(p,v){return v.name||Io(15),ki(p,v.name)},5381).toString():"",d}var tS=new ly,td=eS(),uy=q.createContext({shouldForwardProp:void 0,styleSheet:tS,stylis:td});uy.Consumer;q.createContext(void 0);function ng(){return k.useContext(uy)}var fy=function(){function e(t,n){var r=this;this.inject=function(i,a){a===void 0&&(a=td);var o=r.name+a.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,a(r.rules,o,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Op(this,function(){throw Io(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=td),this.name+t.hash},e}(),nS=function(e){return e>="A"&&e<="Z"};function rg(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;nS(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var dy=function(e){return e==null||e===!1||e===""},py=function(e){var t,n,r=[];for(var i in e){var a=e[i];e.hasOwnProperty(i)&&!dy(a)&&(Array.isArray(a)&&a.isCss||Ki(a)?r.push("".concat(rg(i),":"),a,";"):yo(a)?r.push.apply(r,vo(vo(["".concat(i," {")],py(a),!1),["}"],!1)):r.push("".concat(rg(i),": ").concat((t=i,(n=a)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in j3||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Hr(e,t,n,r){if(dy(e))return[];if(Ap(e))return[".".concat(e.styledComponentId)];if(Ki(e)){if(!Ki(a=e)||a.prototype&&a.prototype.isReactComponent||!t)return[e];var i=e(t);return Hr(i,t,n,r)}var a;return e instanceof fy?n?(e.inject(n,r),[e.getName(r)]):[e]:yo(e)?py(e):Array.isArray(e)?Array.prototype.concat.apply(oc,e.map(function(o){return Hr(o,t,n,r)})):[e.toString()]}function rS(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Ki(n)&&!Ap(n))return!1}return!0}var iS=ty("6.0.8"),aS=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&rS(t),this.componentId=n,this.baseHash=ki(iS,n),this.baseStyle=r,ly.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Mr(i,this.staticRulesId);else{var a=Zf(Hr(this.rules,t,n,r)),o=Xf(ki(this.baseHash,a)>>>0);if(!n.hasNameForId(this.componentId,o)){var s=r(a,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,s)}i=Mr(i,o),this.staticRulesId=o}else{for(var l=ki(this.baseHash,r.hash),c="",u=0;u<this.rules.length;u++){var d=this.rules[u];if(typeof d=="string")c+=d;else if(d){var p=Zf(Hr(d,t,n,r));l=ki(l,p+u),c+=p}}if(c){var v=Xf(l>>>0);n.hasNameForId(this.componentId,v)||n.insertRules(this.componentId,v,r(c,".".concat(v),void 0,this.componentId)),i=Mr(i,v)}}return i},e}(),my=q.createContext(void 0);my.Consumer;var Nu={};function oS(e,t,n){var r=Ap(e),i=e,a=!ju(e),o=t.attrs,s=o===void 0?oc:o,l=t.componentId,c=l===void 0?function(w,x){var S=typeof w!="string"?"sc":Kh(w);Nu[S]=(Nu[S]||0)+1;var P="".concat(S,"-").concat(ny("6.0.8"+S+Nu[S]));return x?"".concat(x,"-").concat(P):P}(t.displayName,t.parentComponentId):l,u=t.displayName;u===void 0&&function(w){return ju(w)?"styled.".concat(w):"Styled(".concat(T3(w),")")}(e);var d=t.displayName&&t.componentId?"".concat(Kh(t.displayName),"-").concat(t.componentId):t.componentId||c,p=r&&i.attrs?i.attrs.concat(s).filter(Boolean):s,v=t.shouldForwardProp;if(r&&i.shouldForwardProp){var h=i.shouldForwardProp;if(t.shouldForwardProp){var y=t.shouldForwardProp;v=function(w,x){return h(w,x)&&y(w,x)}}else v=h}var b=new aS(n,d,r?i.componentStyle:void 0);function g(w,x){return function(S,P,C){var O=S.attrs,z=S.componentStyle,L=S.defaultProps,Z=S.foldedComponentIds,G=S.styledComponentId,Te=S.target,be=q.useContext(my),Qe=ng(),ie=S.shouldForwardProp||Qe.shouldForwardProp,oe=function(Yt,ne,vt){for(var at,yt=bt(bt({},ne),{className:void 0,theme:vt}),qt=0;qt<Yt.length;qt+=1){var ai=Ki(at=Yt[qt])?at(yt):at;for(var ln in ai)yt[ln]=ln==="className"?Mr(yt[ln],ai[ln]):ln==="style"?bt(bt({},yt[ln]),ai[ln]):ai[ln]}return ne.className&&(yt.className=Mr(yt.className,ne.className)),yt}(O,P,N3(P,be,L)||Qi),T=oe.as||Te,D={};for(var U in oe)oe[U]===void 0||U[0]==="$"||U==="as"||U==="theme"||(U==="forwardedAs"?D.as=oe.forwardedAs:ie&&!ie(U,T)||(D[U]=oe[U]));var pe=function(Yt,ne){var vt=ng(),at=Yt.generateAndInjectStyles(ne,vt.styleSheet,vt.stylis);return at}(z,oe),Se=Mr(Z,G);return pe&&(Se+=" "+pe),oe.className&&(Se+=" "+oe.className),D[ju(T)&&!ey.has(T)?"class":"className"]=Se,D.ref=C,k.createElement(T,D)}(m,w,x)}var m=q.forwardRef(g);return m.attrs=p,m.componentStyle=b,m.shouldForwardProp=v,m.foldedComponentIds=r?Mr(i.foldedComponentIds,i.styledComponentId):"",m.styledComponentId=d,m.target=r?i.target:e,Object.defineProperty(m,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(w){this._foldedDefaultProps=r?function(x){for(var S=[],P=1;P<arguments.length;P++)S[P-1]=arguments[P];for(var C=0,O=S;C<O.length;C++)ed(x,O[C],!0);return x}({},i.defaultProps,w):w}}),Op(m,function(){return".".concat(m.styledComponentId)}),a&&oy(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),m}function ig(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var ag=function(e){return Object.assign(e,{isCss:!0})};function hy(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Ki(e)||yo(e)){var r=e;return ag(Hr(ig(oc,vo([r],t,!0))))}var i=e;return t.length===0&&i.length===1&&typeof i[0]=="string"?Hr(i):ag(Hr(ig(i,t)))}function nd(e,t,n){if(n===void 0&&(n=Qi),!t)throw Io(1,t);var r=function(i){for(var a=[],o=1;o<arguments.length;o++)a[o-1]=arguments[o];return e(t,n,hy.apply(void 0,vo([i],a,!1)))};return r.attrs=function(i){return nd(e,t,bt(bt({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return nd(e,t,bt(bt({},n),i))},r}var gy=function(e){return nd(oS,e)},qe=gy;ey.forEach(function(e){qe[e]=gy(e)});function Mo(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Zf(hy.apply(void 0,vo([e],t,!1))),i=ny(r);return new fy(i,r)}const sS=Mo`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,lS=qe.div`
  .loading-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
  }

  .loading-spinner {
    border: 8px solid var(--primary-white);
    border-top: 8px solid var(--primary-Company-red);
    border-radius: 50%;
    width: 100px;
    height: 100px;
    animation: ${sS} 0.5s linear infinite;
  }
`,Fn=()=>f.jsx(lS,{children:f.jsx("div",{className:"loading-container",children:f.jsx("div",{className:"loading-spinner"})})}),cS=qe.section`
  .introduction-img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  .dots-container {
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    gap: 1rem;
  }
  .dot {
    border: 1px solid black;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: var(--primary-white);
    cursor: pointer;
  }
  .active {
    background: var(--primary-black);
  }
  p {
    padding: 1rem;
    margin-top: 1rem;
  }
  .introduction-text p {
    font-weight: 300;
  }
  .introduction-products {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 2rem;
    margin-bottom: 1rem;
    margin-top: 1rem;
    border: 2px solid red;
  }
  .products-btn {
    background: var(--primary-Company-red);
    font-size: 1rem;
    padding: 1rem 1.5rem;
    border-radius: 0;
    width: 100vw;
    color: var(--primary-black);
  }
  /* black company images */
  .company-images {
    margin: 0.5rem auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.3rem;
    margin-bottom: 2rem;
  }
  .company-images img {
    opacity: 0.6;
    height: 3rem;
    width: 6.4rem;
    border: 2px solid transparent;
    object-fit: contain;
    padding-left: 0.5rem;
  }
  .align-image {
    margin-right: 0.4rem;
  }
  /* end */
  @media screen and (min-width: 980px) {
    min-height: 105vh;
    .introduction-products {
      display: none;
    }
    .introduction-text {
      display: none;
    }
    .introduction-products h2 {
      text-align: center;
      font-size: 1.8rem;
      border: 2px solid red;
    }
    .introduction-img {
      object-fit: cover;
    }
    .img-container {
      min-height: 550px;
      height: calc(100vh - 148px);
    }
    .company-images{
      display: none;
    }
  }
`,uS=Mo`
  0%{
    opacity: 0;
  }
  50%{
    opacity: 0.5;
  }
  100%{
    opacity: 1;
  }
`,fS=qe.img`
  animation:${uS} linear 1.2s;
`;var vy={exports:{}},yy={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ji=k;function dS(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var pS=typeof Object.is=="function"?Object.is:dS,mS=Ji.useState,hS=Ji.useEffect,gS=Ji.useLayoutEffect,vS=Ji.useDebugValue;function yS(e,t){var n=t(),r=mS({inst:{value:n,getSnapshot:t}}),i=r[0].inst,a=r[1];return gS(function(){i.value=n,i.getSnapshot=t,Au(i)&&a({inst:i})},[e,n,t]),hS(function(){return Au(i)&&a({inst:i}),e(function(){Au(i)&&a({inst:i})})},[e]),vS(n),n}function Au(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!pS(e,n)}catch{return!0}}function xS(e,t){return t()}var wS=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?xS:yS;yy.useSyncExternalStore=Ji.useSyncExternalStore!==void 0?Ji.useSyncExternalStore:wS;vy.exports=yy;var bS=vy.exports,xy={exports:{}},wy={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sc=k,SS=bS;function kS(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ES=typeof Object.is=="function"?Object.is:kS,CS=SS.useSyncExternalStore,jS=sc.useRef,PS=sc.useEffect,NS=sc.useMemo,AS=sc.useDebugValue;wy.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var a=jS(null);if(a.current===null){var o={hasValue:!1,value:null};a.current=o}else o=a.current;a=NS(function(){function l(v){if(!c){if(c=!0,u=v,v=r(v),i!==void 0&&o.hasValue){var h=o.value;if(i(h,v))return d=h}return d=v}if(h=d,ES(u,v))return h;var y=r(v);return i!==void 0&&i(h,y)?h:(u=v,d=y)}var c=!1,u,d,p=n===void 0?null:n;return[function(){return l(t())},p===null?void 0:function(){return l(p())}]},[t,n,r,i]);var s=CS(e,a[0],a[1]);return PS(function(){o.hasValue=!0,o.value=s},[s]),AS(s),s};xy.exports=wy;var OS=xy.exports;function RS(e){e()}let by=RS;const TS=e=>by=e,LS=()=>by,og=Symbol.for("react-redux-context"),sg=typeof globalThis<"u"?globalThis:{};function _S(){var e;if(!k.createContext)return{};const t=(e=sg[og])!=null?e:sg[og]=new Map;let n=t.get(k.createContext);return n||(n=k.createContext(null),t.set(k.createContext,n)),n}const vr=_S();function Rp(e=vr){return function(){return k.useContext(e)}}const Sy=Rp(),IS=()=>{throw new Error("uSES not initialized!")};let ky=IS;const MS=e=>{ky=e},zS=(e,t)=>e===t;function DS(e=vr){const t=e===vr?Sy:Rp(e);return function(r,i={}){const{equalityFn:a=zS,stabilityCheck:o=void 0,noopCheck:s=void 0}=typeof i=="function"?{equalityFn:i}:i,{store:l,subscription:c,getServerState:u,stabilityCheck:d,noopCheck:p}=t();k.useRef(!0);const v=k.useCallback({[r.name](y){return r(y)}}[r.name],[r,d,o]),h=ky(c.addNestedSub,l.getState,u||l.getState,v,a);return k.useDebugValue(h),h}}const Q=DS();var Ey={exports:{}},le={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var et=typeof Symbol=="function"&&Symbol.for,Tp=et?Symbol.for("react.element"):60103,Lp=et?Symbol.for("react.portal"):60106,lc=et?Symbol.for("react.fragment"):60107,cc=et?Symbol.for("react.strict_mode"):60108,uc=et?Symbol.for("react.profiler"):60114,fc=et?Symbol.for("react.provider"):60109,dc=et?Symbol.for("react.context"):60110,_p=et?Symbol.for("react.async_mode"):60111,pc=et?Symbol.for("react.concurrent_mode"):60111,mc=et?Symbol.for("react.forward_ref"):60112,hc=et?Symbol.for("react.suspense"):60113,$S=et?Symbol.for("react.suspense_list"):60120,gc=et?Symbol.for("react.memo"):60115,vc=et?Symbol.for("react.lazy"):60116,FS=et?Symbol.for("react.block"):60121,US=et?Symbol.for("react.fundamental"):60117,BS=et?Symbol.for("react.responder"):60118,HS=et?Symbol.for("react.scope"):60119;function _t(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Tp:switch(e=e.type,e){case _p:case pc:case lc:case uc:case cc:case hc:return e;default:switch(e=e&&e.$$typeof,e){case dc:case mc:case vc:case gc:case fc:return e;default:return t}}case Lp:return t}}}function Cy(e){return _t(e)===pc}le.AsyncMode=_p;le.ConcurrentMode=pc;le.ContextConsumer=dc;le.ContextProvider=fc;le.Element=Tp;le.ForwardRef=mc;le.Fragment=lc;le.Lazy=vc;le.Memo=gc;le.Portal=Lp;le.Profiler=uc;le.StrictMode=cc;le.Suspense=hc;le.isAsyncMode=function(e){return Cy(e)||_t(e)===_p};le.isConcurrentMode=Cy;le.isContextConsumer=function(e){return _t(e)===dc};le.isContextProvider=function(e){return _t(e)===fc};le.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Tp};le.isForwardRef=function(e){return _t(e)===mc};le.isFragment=function(e){return _t(e)===lc};le.isLazy=function(e){return _t(e)===vc};le.isMemo=function(e){return _t(e)===gc};le.isPortal=function(e){return _t(e)===Lp};le.isProfiler=function(e){return _t(e)===uc};le.isStrictMode=function(e){return _t(e)===cc};le.isSuspense=function(e){return _t(e)===hc};le.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===lc||e===pc||e===uc||e===cc||e===hc||e===$S||typeof e=="object"&&e!==null&&(e.$$typeof===vc||e.$$typeof===gc||e.$$typeof===fc||e.$$typeof===dc||e.$$typeof===mc||e.$$typeof===US||e.$$typeof===BS||e.$$typeof===HS||e.$$typeof===FS)};le.typeOf=_t;Ey.exports=le;var VS=Ey.exports,jy=VS,WS={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},GS={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Py={};Py[jy.ForwardRef]=WS;Py[jy.Memo]=GS;var fe={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ip=Symbol.for("react.element"),Mp=Symbol.for("react.portal"),yc=Symbol.for("react.fragment"),xc=Symbol.for("react.strict_mode"),wc=Symbol.for("react.profiler"),bc=Symbol.for("react.provider"),Sc=Symbol.for("react.context"),YS=Symbol.for("react.server_context"),kc=Symbol.for("react.forward_ref"),Ec=Symbol.for("react.suspense"),Cc=Symbol.for("react.suspense_list"),jc=Symbol.for("react.memo"),Pc=Symbol.for("react.lazy"),qS=Symbol.for("react.offscreen"),Ny;Ny=Symbol.for("react.module.reference");function Gt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Ip:switch(e=e.type,e){case yc:case wc:case xc:case Ec:case Cc:return e;default:switch(e=e&&e.$$typeof,e){case YS:case Sc:case kc:case Pc:case jc:case bc:return e;default:return t}}case Mp:return t}}}fe.ContextConsumer=Sc;fe.ContextProvider=bc;fe.Element=Ip;fe.ForwardRef=kc;fe.Fragment=yc;fe.Lazy=Pc;fe.Memo=jc;fe.Portal=Mp;fe.Profiler=wc;fe.StrictMode=xc;fe.Suspense=Ec;fe.SuspenseList=Cc;fe.isAsyncMode=function(){return!1};fe.isConcurrentMode=function(){return!1};fe.isContextConsumer=function(e){return Gt(e)===Sc};fe.isContextProvider=function(e){return Gt(e)===bc};fe.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ip};fe.isForwardRef=function(e){return Gt(e)===kc};fe.isFragment=function(e){return Gt(e)===yc};fe.isLazy=function(e){return Gt(e)===Pc};fe.isMemo=function(e){return Gt(e)===jc};fe.isPortal=function(e){return Gt(e)===Mp};fe.isProfiler=function(e){return Gt(e)===wc};fe.isStrictMode=function(e){return Gt(e)===xc};fe.isSuspense=function(e){return Gt(e)===Ec};fe.isSuspenseList=function(e){return Gt(e)===Cc};fe.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===yc||e===wc||e===xc||e===Ec||e===Cc||e===qS||typeof e=="object"&&e!==null&&(e.$$typeof===Pc||e.$$typeof===jc||e.$$typeof===bc||e.$$typeof===Sc||e.$$typeof===kc||e.$$typeof===Ny||e.getModuleId!==void 0)};fe.typeOf=Gt;function QS(){const e=LS();let t=null,n=null;return{clear(){t=null,n=null},notify(){e(()=>{let r=t;for(;r;)r.callback(),r=r.next})},get(){let r=[],i=t;for(;i;)r.push(i),i=i.next;return r},subscribe(r){let i=!0,a=n={callback:r,next:null,prev:n};return a.prev?a.prev.next=a:t=a,function(){!i||t===null||(i=!1,a.next?a.next.prev=a.prev:n=a.prev,a.prev?a.prev.next=a.next:t=a.next)}}}}const lg={notify(){},get:()=>[]};function KS(e,t){let n,r=lg,i=0,a=!1;function o(y){u();const b=r.subscribe(y);let g=!1;return()=>{g||(g=!0,b(),d())}}function s(){r.notify()}function l(){h.onStateChange&&h.onStateChange()}function c(){return a}function u(){i++,n||(n=t?t.addNestedSub(l):e.subscribe(l),r=QS())}function d(){i--,n&&i===0&&(n(),n=void 0,r.clear(),r=lg)}function p(){a||(a=!0,u())}function v(){a&&(a=!1,d())}const h={addNestedSub:o,notifyNestedSubs:s,handleChangeWrapper:l,isSubscribed:c,trySubscribe:p,tryUnsubscribe:v,getListeners:()=>r};return h}const JS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",XS=JS?k.useLayoutEffect:k.useEffect;function ZS({store:e,context:t,children:n,serverState:r,stabilityCheck:i="once",noopCheck:a="once"}){const o=k.useMemo(()=>{const c=KS(e);return{store:e,subscription:c,getServerState:r?()=>r:void 0,stabilityCheck:i,noopCheck:a}},[e,r,i,a]),s=k.useMemo(()=>e.getState(),[e]);XS(()=>{const{subscription:c}=o;return c.onStateChange=c.notifyNestedSubs,c.trySubscribe(),s!==e.getState()&&c.notifyNestedSubs(),()=>{c.tryUnsubscribe(),c.onStateChange=void 0}},[o,s]);const l=t||vr;return k.createElement(l.Provider,{value:o},n)}function Ay(e=vr){const t=e===vr?Sy:Rp(e);return function(){const{store:r}=t();return r}}const ek=Ay();function tk(e=vr){const t=e===vr?ek:Ay(e);return function(){return t().dispatch}}const ce=tk();MS(OS.useSyncExternalStoreWithSelector);TS(Lv.unstable_batchedUpdates);function tn(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+e+(n.length?" "+n.map(function(i){return"'"+i+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function yr(e){return!!e&&!!e[ke]}function Ln(e){var t;return!!e&&(function(n){if(!n||typeof n!="object")return!1;var r=Object.getPrototypeOf(n);if(r===null)return!0;var i=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return i===Object||typeof i=="function"&&Function.toString.call(i)===uk}(e)||Array.isArray(e)||!!e[hg]||!!(!((t=e.constructor)===null||t===void 0)&&t[hg])||zp(e)||Dp(e))}function Jr(e,t,n){n===void 0&&(n=!1),sa(e)===0?(n?Object.keys:Ii)(e).forEach(function(r){n&&typeof r=="symbol"||t(r,e[r],e)}):e.forEach(function(r,i){return t(i,r,e)})}function sa(e){var t=e[ke];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:zp(e)?2:Dp(e)?3:0}function _i(e,t){return sa(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function nk(e,t){return sa(e)===2?e.get(t):e[t]}function Oy(e,t,n){var r=sa(e);r===2?e.set(t,n):r===3?e.add(n):e[t]=n}function Ry(e,t){return e===t?e!==0||1/e==1/t:e!=e&&t!=t}function zp(e){return lk&&e instanceof Map}function Dp(e){return ck&&e instanceof Set}function Or(e){return e.o||e.t}function $p(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=Ly(e);delete t[ke];for(var n=Ii(t),r=0;r<n.length;r++){var i=n[r],a=t[i];a.writable===!1&&(a.writable=!0,a.configurable=!0),(a.get||a.set)&&(t[i]={configurable:!0,writable:!0,enumerable:a.enumerable,value:e[i]})}return Object.create(Object.getPrototypeOf(e),t)}function Fp(e,t){return t===void 0&&(t=!1),Up(e)||yr(e)||!Ln(e)||(sa(e)>1&&(e.set=e.add=e.clear=e.delete=rk),Object.freeze(e),t&&Jr(e,function(n,r){return Fp(r,!0)},!0)),e}function rk(){tn(2)}function Up(e){return e==null||typeof e!="object"||Object.isFrozen(e)}function vn(e){var t=od[e];return t||tn(18,e),t}function ik(e,t){od[e]||(od[e]=t)}function rd(){return xo}function Ou(e,t){t&&(vn("Patches"),e.u=[],e.s=[],e.v=t)}function jl(e){id(e),e.p.forEach(ak),e.p=null}function id(e){e===xo&&(xo=e.l)}function cg(e){return xo={p:[],l:xo,h:e,m:!0,_:0}}function ak(e){var t=e[ke];t.i===0||t.i===1?t.j():t.g=!0}function Ru(e,t){t._=t.p.length;var n=t.p[0],r=e!==void 0&&e!==n;return t.h.O||vn("ES5").S(t,e,r),r?(n[ke].P&&(jl(t),tn(4)),Ln(e)&&(e=Pl(t,e),t.l||Nl(t,e)),t.u&&vn("Patches").M(n[ke].t,e,t.u,t.s)):e=Pl(t,n,[]),jl(t),t.u&&t.v(t.u,t.s),e!==Ty?e:void 0}function Pl(e,t,n){if(Up(t))return t;var r=t[ke];if(!r)return Jr(t,function(s,l){return ug(e,r,t,s,l,n)},!0),t;if(r.A!==e)return t;if(!r.P)return Nl(e,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var i=r.i===4||r.i===5?r.o=$p(r.k):r.o,a=i,o=!1;r.i===3&&(a=new Set(i),i.clear(),o=!0),Jr(a,function(s,l){return ug(e,r,i,s,l,n,o)}),Nl(e,i,!1),n&&e.u&&vn("Patches").N(r,n,e.u,e.s)}return r.o}function ug(e,t,n,r,i,a,o){if(yr(i)){var s=Pl(e,i,a&&t&&t.i!==3&&!_i(t.R,r)?a.concat(r):void 0);if(Oy(n,r,s),!yr(s))return;e.m=!1}else o&&n.add(i);if(Ln(i)&&!Up(i)){if(!e.h.D&&e._<1)return;Pl(e,i),t&&t.A.l||Nl(e,i)}}function Nl(e,t,n){n===void 0&&(n=!1),!e.l&&e.h.D&&e.m&&Fp(t,n)}function Tu(e,t){var n=e[ke];return(n?Or(n):e)[t]}function fg(e,t){if(t in e)for(var n=Object.getPrototypeOf(e);n;){var r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=Object.getPrototypeOf(n)}}function Zn(e){e.P||(e.P=!0,e.l&&Zn(e.l))}function Lu(e){e.o||(e.o=$p(e.t))}function ad(e,t,n){var r=zp(t)?vn("MapSet").F(t,n):Dp(t)?vn("MapSet").T(t,n):e.O?function(i,a){var o=Array.isArray(i),s={i:o?1:0,A:a?a.A:rd(),P:!1,I:!1,R:{},l:a,t:i,k:null,o:null,j:null,C:!1},l=s,c=wo;o&&(l=[s],c=Ra);var u=Proxy.revocable(l,c),d=u.revoke,p=u.proxy;return s.k=p,s.j=d,p}(t,n):vn("ES5").J(t,n);return(n?n.A:rd()).p.push(r),r}function ok(e){return yr(e)||tn(22,e),function t(n){if(!Ln(n))return n;var r,i=n[ke],a=sa(n);if(i){if(!i.P&&(i.i<4||!vn("ES5").K(i)))return i.t;i.I=!0,r=dg(n,a),i.I=!1}else r=dg(n,a);return Jr(r,function(o,s){i&&nk(i.t,o)===s||Oy(r,o,t(s))}),a===3?new Set(r):r}(e)}function dg(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return $p(e)}function sk(){function e(a,o){var s=i[a];return s?s.enumerable=o:i[a]=s={configurable:!0,enumerable:o,get:function(){var l=this[ke];return wo.get(l,a)},set:function(l){var c=this[ke];wo.set(c,a,l)}},s}function t(a){for(var o=a.length-1;o>=0;o--){var s=a[o][ke];if(!s.P)switch(s.i){case 5:r(s)&&Zn(s);break;case 4:n(s)&&Zn(s)}}}function n(a){for(var o=a.t,s=a.k,l=Ii(s),c=l.length-1;c>=0;c--){var u=l[c];if(u!==ke){var d=o[u];if(d===void 0&&!_i(o,u))return!0;var p=s[u],v=p&&p[ke];if(v?v.t!==d:!Ry(p,d))return!0}}var h=!!o[ke];return l.length!==Ii(o).length+(h?0:1)}function r(a){var o=a.k;if(o.length!==a.t.length)return!0;var s=Object.getOwnPropertyDescriptor(o,o.length-1);if(s&&!s.get)return!0;for(var l=0;l<o.length;l++)if(!o.hasOwnProperty(l))return!0;return!1}var i={};ik("ES5",{J:function(a,o){var s=Array.isArray(a),l=function(u,d){if(u){for(var p=Array(d.length),v=0;v<d.length;v++)Object.defineProperty(p,""+v,e(v,!0));return p}var h=Ly(d);delete h[ke];for(var y=Ii(h),b=0;b<y.length;b++){var g=y[b];h[g]=e(g,u||!!h[g].enumerable)}return Object.create(Object.getPrototypeOf(d),h)}(s,a),c={i:s?5:4,A:o?o.A:rd(),P:!1,I:!1,R:{},l:o,t:a,k:l,o:null,g:!1,C:!1};return Object.defineProperty(l,ke,{value:c,writable:!0}),l},S:function(a,o,s){s?yr(o)&&o[ke].A===a&&t(a.p):(a.u&&function l(c){if(c&&typeof c=="object"){var u=c[ke];if(u){var d=u.t,p=u.k,v=u.R,h=u.i;if(h===4)Jr(p,function(w){w!==ke&&(d[w]!==void 0||_i(d,w)?v[w]||l(p[w]):(v[w]=!0,Zn(u)))}),Jr(d,function(w){p[w]!==void 0||_i(p,w)||(v[w]=!1,Zn(u))});else if(h===5){if(r(u)&&(Zn(u),v.length=!0),p.length<d.length)for(var y=p.length;y<d.length;y++)v[y]=!1;else for(var b=d.length;b<p.length;b++)v[b]=!0;for(var g=Math.min(p.length,d.length),m=0;m<g;m++)p.hasOwnProperty(m)||(v[m]=!0),v[m]===void 0&&l(p[m])}}}}(a.p[0]),t(a.p))},K:function(a){return a.i===4?n(a):r(a)}})}var pg,xo,Bp=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",lk=typeof Map<"u",ck=typeof Set<"u",mg=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",Ty=Bp?Symbol.for("immer-nothing"):((pg={})["immer-nothing"]=!0,pg),hg=Bp?Symbol.for("immer-draftable"):"__$immer_draftable",ke=Bp?Symbol.for("immer-state"):"__$immer_state",uk=""+Object.prototype.constructor,Ii=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,Ly=Object.getOwnPropertyDescriptors||function(e){var t={};return Ii(e).forEach(function(n){t[n]=Object.getOwnPropertyDescriptor(e,n)}),t},od={},wo={get:function(e,t){if(t===ke)return e;var n=Or(e);if(!_i(n,t))return function(i,a,o){var s,l=fg(a,o);return l?"value"in l?l.value:(s=l.get)===null||s===void 0?void 0:s.call(i.k):void 0}(e,n,t);var r=n[t];return e.I||!Ln(r)?r:r===Tu(e.t,t)?(Lu(e),e.o[t]=ad(e.A.h,r,e)):r},has:function(e,t){return t in Or(e)},ownKeys:function(e){return Reflect.ownKeys(Or(e))},set:function(e,t,n){var r=fg(Or(e),t);if(r!=null&&r.set)return r.set.call(e.k,n),!0;if(!e.P){var i=Tu(Or(e),t),a=i==null?void 0:i[ke];if(a&&a.t===n)return e.o[t]=n,e.R[t]=!1,!0;if(Ry(n,i)&&(n!==void 0||_i(e.t,t)))return!0;Lu(e),Zn(e)}return e.o[t]===n&&(n!==void 0||t in e.o)||Number.isNaN(n)&&Number.isNaN(e.o[t])||(e.o[t]=n,e.R[t]=!0),!0},deleteProperty:function(e,t){return Tu(e.t,t)!==void 0||t in e.t?(e.R[t]=!1,Lu(e),Zn(e)):delete e.R[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var n=Or(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{writable:!0,configurable:e.i!==1||t!=="length",enumerable:r.enumerable,value:n[t]}},defineProperty:function(){tn(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){tn(12)}},Ra={};Jr(wo,function(e,t){Ra[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}}),Ra.deleteProperty=function(e,t){return Ra.set.call(this,e,t,void 0)},Ra.set=function(e,t,n){return wo.set.call(this,e[0],t,n,e[0])};var fk=function(){function e(n){var r=this;this.O=mg,this.D=!0,this.produce=function(i,a,o){if(typeof i=="function"&&typeof a!="function"){var s=a;a=i;var l=r;return function(y){var b=this;y===void 0&&(y=s);for(var g=arguments.length,m=Array(g>1?g-1:0),w=1;w<g;w++)m[w-1]=arguments[w];return l.produce(y,function(x){var S;return(S=a).call.apply(S,[b,x].concat(m))})}}var c;if(typeof a!="function"&&tn(6),o!==void 0&&typeof o!="function"&&tn(7),Ln(i)){var u=cg(r),d=ad(r,i,void 0),p=!0;try{c=a(d),p=!1}finally{p?jl(u):id(u)}return typeof Promise<"u"&&c instanceof Promise?c.then(function(y){return Ou(u,o),Ru(y,u)},function(y){throw jl(u),y}):(Ou(u,o),Ru(c,u))}if(!i||typeof i!="object"){if((c=a(i))===void 0&&(c=i),c===Ty&&(c=void 0),r.D&&Fp(c,!0),o){var v=[],h=[];vn("Patches").M(i,c,v,h),o(v,h)}return c}tn(21,i)},this.produceWithPatches=function(i,a){if(typeof i=="function")return function(c){for(var u=arguments.length,d=Array(u>1?u-1:0),p=1;p<u;p++)d[p-1]=arguments[p];return r.produceWithPatches(c,function(v){return i.apply(void 0,[v].concat(d))})};var o,s,l=r.produce(i,a,function(c,u){o=c,s=u});return typeof Promise<"u"&&l instanceof Promise?l.then(function(c){return[c,o,s]}):[l,o,s]},typeof(n==null?void 0:n.useProxies)=="boolean"&&this.setUseProxies(n.useProxies),typeof(n==null?void 0:n.autoFreeze)=="boolean"&&this.setAutoFreeze(n.autoFreeze)}var t=e.prototype;return t.createDraft=function(n){Ln(n)||tn(8),yr(n)&&(n=ok(n));var r=cg(this),i=ad(this,n,void 0);return i[ke].C=!0,id(r),i},t.finishDraft=function(n,r){var i=n&&n[ke],a=i.A;return Ou(a,r),Ru(void 0,a)},t.setAutoFreeze=function(n){this.D=n},t.setUseProxies=function(n){n&&!mg&&tn(20),this.O=n},t.applyPatches=function(n,r){var i;for(i=r.length-1;i>=0;i--){var a=r[i];if(a.path.length===0&&a.op==="replace"){n=a.value;break}}i>-1&&(r=r.slice(i+1));var o=vn("Patches").$;return yr(n)?o(n,r):this.produce(n,function(s){return o(s,r)})},e}(),Rt=new fk,_y=Rt.produce;Rt.produceWithPatches.bind(Rt);Rt.setAutoFreeze.bind(Rt);Rt.setUseProxies.bind(Rt);Rt.applyPatches.bind(Rt);Rt.createDraft.bind(Rt);Rt.finishDraft.bind(Rt);function bo(e){"@babel/helpers - typeof";return bo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},bo(e)}function dk(e,t){if(bo(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(bo(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function pk(e){var t=dk(e,"string");return bo(t)==="symbol"?t:String(t)}function mk(e,t,n){return t=pk(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function gg(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function vg(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?gg(Object(n),!0).forEach(function(r){mk(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):gg(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ct(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var yg=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),_u=function(){return Math.random().toString(36).substring(7).split("").join(".")},Al={INIT:"@@redux/INIT"+_u(),REPLACE:"@@redux/REPLACE"+_u(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+_u()}};function hk(e){if(typeof e!="object"||e===null)return!1;for(var t=e;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function Iy(e,t,n){var r;if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(ct(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(ct(1));return n(Iy)(e,t)}if(typeof e!="function")throw new Error(ct(2));var i=e,a=t,o=[],s=o,l=!1;function c(){s===o&&(s=o.slice())}function u(){if(l)throw new Error(ct(3));return a}function d(y){if(typeof y!="function")throw new Error(ct(4));if(l)throw new Error(ct(5));var b=!0;return c(),s.push(y),function(){if(b){if(l)throw new Error(ct(6));b=!1,c();var m=s.indexOf(y);s.splice(m,1),o=null}}}function p(y){if(!hk(y))throw new Error(ct(7));if(typeof y.type>"u")throw new Error(ct(8));if(l)throw new Error(ct(9));try{l=!0,a=i(a,y)}finally{l=!1}for(var b=o=s,g=0;g<b.length;g++){var m=b[g];m()}return y}function v(y){if(typeof y!="function")throw new Error(ct(10));i=y,p({type:Al.REPLACE})}function h(){var y,b=d;return y={subscribe:function(m){if(typeof m!="object"||m===null)throw new Error(ct(11));function w(){m.next&&m.next(u())}w();var x=b(w);return{unsubscribe:x}}},y[yg]=function(){return this},y}return p({type:Al.INIT}),r={dispatch:p,subscribe:d,getState:u,replaceReducer:v},r[yg]=h,r}function gk(e){Object.keys(e).forEach(function(t){var n=e[t],r=n(void 0,{type:Al.INIT});if(typeof r>"u")throw new Error(ct(12));if(typeof n(void 0,{type:Al.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(ct(13))})}function vk(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var i=t[r];typeof e[i]=="function"&&(n[i]=e[i])}var a=Object.keys(n),o;try{gk(n)}catch(s){o=s}return function(l,c){if(l===void 0&&(l={}),o)throw o;for(var u=!1,d={},p=0;p<a.length;p++){var v=a[p],h=n[v],y=l[v],b=h(y,c);if(typeof b>"u")throw c&&c.type,new Error(ct(14));d[v]=b,u=u||b!==y}return u=u||a.length!==Object.keys(l).length,u?d:l}}function Ol(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.length===0?function(r){return r}:t.length===1?t[0]:t.reduce(function(r,i){return function(){return r(i.apply(void 0,arguments))}})}function yk(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return function(){var i=r.apply(void 0,arguments),a=function(){throw new Error(ct(15))},o={getState:i.getState,dispatch:function(){return a.apply(void 0,arguments)}},s=t.map(function(l){return l(o)});return a=Ol.apply(void 0,s)(i.dispatch),vg(vg({},i),{},{dispatch:a})}}}function My(e){var t=function(r){var i=r.dispatch,a=r.getState;return function(o){return function(s){return typeof s=="function"?s(i,a,e):o(s)}}};return t}var zy=My();zy.withExtraArgument=My;const xg=zy;var Dy=globalThis&&globalThis.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(r[a]=i[a])},e(t,n)};return function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),xk=globalThis&&globalThis.__generator||function(e,t){var n={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},r,i,a,o;return o={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function s(c){return function(u){return l([c,u])}}function l(c){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(a=c[0]&2?i.return:c[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,c[1])).done)return a;switch(i=0,a&&(c=[c[0]&2,a.value]),c[0]){case 0:case 1:a=c;break;case 4:return n.label++,{value:c[1],done:!1};case 5:n.label++,i=c[1],c=[0];continue;case 7:c=n.ops.pop(),n.trys.pop();continue;default:if(a=n.trys,!(a=a.length>0&&a[a.length-1])&&(c[0]===6||c[0]===2)){n=0;continue}if(c[0]===3&&(!a||c[1]>a[0]&&c[1]<a[3])){n.label=c[1];break}if(c[0]===6&&n.label<a[1]){n.label=a[1],a=c;break}if(a&&n.label<a[2]){n.label=a[2],n.ops.push(c);break}a[2]&&n.ops.pop(),n.trys.pop();continue}c=t.call(e,n)}catch(u){c=[6,u],i=0}finally{r=a=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}},Xi=globalThis&&globalThis.__spreadArray||function(e,t){for(var n=0,r=t.length,i=e.length;n<r;n++,i++)e[i]=t[n];return e},wk=Object.defineProperty,bk=Object.defineProperties,Sk=Object.getOwnPropertyDescriptors,wg=Object.getOwnPropertySymbols,kk=Object.prototype.hasOwnProperty,Ek=Object.prototype.propertyIsEnumerable,bg=function(e,t,n){return t in e?wk(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},dr=function(e,t){for(var n in t||(t={}))kk.call(t,n)&&bg(e,n,t[n]);if(wg)for(var r=0,i=wg(t);r<i.length;r++){var n=i[r];Ek.call(t,n)&&bg(e,n,t[n])}return e},Iu=function(e,t){return bk(e,Sk(t))},Ck=function(e,t,n){return new Promise(function(r,i){var a=function(l){try{s(n.next(l))}catch(c){i(c)}},o=function(l){try{s(n.throw(l))}catch(c){i(c)}},s=function(l){return l.done?r(l.value):Promise.resolve(l.value).then(a,o)};s((n=n.apply(e,t)).next())})},jk=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Ol:Ol.apply(null,arguments)};function Pk(e){if(typeof e!="object"||e===null)return!1;var t=Object.getPrototypeOf(e);if(t===null)return!0;for(var n=t;Object.getPrototypeOf(n)!==null;)n=Object.getPrototypeOf(n);return t===n}function pr(e,t){function n(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];if(t){var a=t.apply(void 0,r);if(!a)throw new Error("prepareAction did not return an object");return dr(dr({type:e,payload:a.payload},"meta"in a&&{meta:a.meta}),"error"in a&&{error:a.error})}return{type:e,payload:r[0]}}return n.toString=function(){return""+e},n.type=e,n.match=function(r){return r.type===e},n}var Nk=function(e){Dy(t,e);function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=e.apply(this,n)||this;return Object.setPrototypeOf(i,t.prototype),i}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return e.prototype.concat.apply(this,n)},t.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(t.bind.apply(t,Xi([void 0],n[0].concat(this)))):new(t.bind.apply(t,Xi([void 0],n.concat(this))))},t}(Array),Ak=function(e){Dy(t,e);function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=e.apply(this,n)||this;return Object.setPrototypeOf(i,t.prototype),i}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return e.prototype.concat.apply(this,n)},t.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(t.bind.apply(t,Xi([void 0],n[0].concat(this)))):new(t.bind.apply(t,Xi([void 0],n.concat(this))))},t}(Array);function sd(e){return Ln(e)?_y(e,function(){}):e}function Ok(e){return typeof e=="boolean"}function Rk(){return function(t){return Tk(t)}}function Tk(e){e===void 0&&(e={});var t=e.thunk,n=t===void 0?!0:t;e.immutableCheck,e.serializableCheck,e.actionCreatorCheck;var r=new Nk;return n&&(Ok(n)?r.push(xg):r.push(xg.withExtraArgument(n.extraArgument))),r}var Lk=!0;function _k(e){var t=Rk(),n=e||{},r=n.reducer,i=r===void 0?void 0:r,a=n.middleware,o=a===void 0?t():a,s=n.devTools,l=s===void 0?!0:s,c=n.preloadedState,u=c===void 0?void 0:c,d=n.enhancers,p=d===void 0?void 0:d,v;if(typeof i=="function")v=i;else if(Pk(i))v=vk(i);else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var h=o;typeof h=="function"&&(h=h(t));var y=yk.apply(void 0,h),b=Ol;l&&(b=jk(dr({trace:!Lk},typeof l=="object"&&l)));var g=new Ak(y),m=g;Array.isArray(p)?m=Xi([y],p):typeof p=="function"&&(m=p(g));var w=b.apply(void 0,m);return Iy(v,u,w)}function $y(e){var t={},n=[],r,i={addCase:function(a,o){var s=typeof a=="string"?a:a.type;if(!s)throw new Error("`builder.addCase` cannot be called with an empty action type");if(s in t)throw new Error("`builder.addCase` cannot be called with two reducers for the same action type");return t[s]=o,i},addMatcher:function(a,o){return n.push({matcher:a,reducer:o}),i},addDefaultCase:function(a){return r=a,i}};return e(i),[t,n,r]}function Ik(e){return typeof e=="function"}function Mk(e,t,n,r){n===void 0&&(n=[]);var i=typeof t=="function"?$y(t):[t,n,r],a=i[0],o=i[1],s=i[2],l;if(Ik(e))l=function(){return sd(e())};else{var c=sd(e);l=function(){return c}}function u(d,p){d===void 0&&(d=l());var v=Xi([a[p.type]],o.filter(function(h){var y=h.matcher;return y(p)}).map(function(h){var y=h.reducer;return y}));return v.filter(function(h){return!!h}).length===0&&(v=[s]),v.reduce(function(h,y){if(y)if(yr(h)){var b=h,g=y(b,p);return g===void 0?h:g}else{if(Ln(h))return _y(h,function(m){return y(m,p)});var g=y(h,p);if(g===void 0){if(h===null)return h;throw Error("A case reducer on a non-draftable value must not return undefined")}return g}return h},d)}return u.getInitialState=l,u}function zk(e,t){return e+"/"+t}function Nc(e){var t=e.name;if(!t)throw new Error("`name` is a required option for createSlice");typeof process<"u";var n=typeof e.initialState=="function"?e.initialState:sd(e.initialState),r=e.reducers||{},i=Object.keys(r),a={},o={},s={};i.forEach(function(u){var d=r[u],p=zk(t,u),v,h;"reducer"in d?(v=d.reducer,h=d.prepare):v=d,a[u]=v,o[p]=v,s[u]=h?pr(p,h):pr(p)});function l(){var u=typeof e.extraReducers=="function"?$y(e.extraReducers):[e.extraReducers],d=u[0],p=d===void 0?{}:d,v=u[1],h=v===void 0?[]:v,y=u[2],b=y===void 0?void 0:y,g=dr(dr({},p),o);return Mk(n,function(m){for(var w in g)m.addCase(w,g[w]);for(var x=0,S=h;x<S.length;x++){var P=S[x];m.addMatcher(P.matcher,P.reducer)}b&&m.addDefaultCase(b)})}var c;return{name:t,reducer:function(u,d){return c||(c=l()),c(u,d)},actions:s,caseReducers:a,getInitialState:function(){return c||(c=l()),c.getInitialState()}}}var Dk="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",$k=function(e){e===void 0&&(e=21);for(var t="",n=e;n--;)t+=Dk[Math.random()*64|0];return t},Fk=["name","message","stack","code"],Mu=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),Sg=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),Uk=function(e){if(typeof e=="object"&&e!==null){for(var t={},n=0,r=Fk;n<r.length;n++){var i=r[n];typeof e[i]=="string"&&(t[i]=e[i])}return t}return{message:String(e)}},tt=function(){function e(t,n,r){var i=pr(t+"/fulfilled",function(c,u,d,p){return{payload:c,meta:Iu(dr({},p||{}),{arg:d,requestId:u,requestStatus:"fulfilled"})}}),a=pr(t+"/pending",function(c,u,d){return{payload:void 0,meta:Iu(dr({},d||{}),{arg:u,requestId:c,requestStatus:"pending"})}}),o=pr(t+"/rejected",function(c,u,d,p,v){return{payload:p,error:(r&&r.serializeError||Uk)(c||"Rejected"),meta:Iu(dr({},v||{}),{arg:d,requestId:u,rejectedWithValue:!!p,requestStatus:"rejected",aborted:(c==null?void 0:c.name)==="AbortError",condition:(c==null?void 0:c.name)==="ConditionError"})}}),s=typeof AbortController<"u"?AbortController:function(){function c(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return c.prototype.abort=function(){},c}();function l(c){return function(u,d,p){var v=r!=null&&r.idGenerator?r.idGenerator(c):$k(),h=new s,y;function b(m){y=m,h.abort()}var g=function(){return Ck(this,null,function(){var m,w,x,S,P,C,O;return xk(this,function(z){switch(z.label){case 0:return z.trys.push([0,4,,5]),S=(m=r==null?void 0:r.condition)==null?void 0:m.call(r,c,{getState:d,extra:p}),Hk(S)?[4,S]:[3,2];case 1:S=z.sent(),z.label=2;case 2:if(S===!1||h.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return P=new Promise(function(L,Z){return h.signal.addEventListener("abort",function(){return Z({name:"AbortError",message:y||"Aborted"})})}),u(a(v,c,(w=r==null?void 0:r.getPendingMeta)==null?void 0:w.call(r,{requestId:v,arg:c},{getState:d,extra:p}))),[4,Promise.race([P,Promise.resolve(n(c,{dispatch:u,getState:d,extra:p,requestId:v,signal:h.signal,abort:b,rejectWithValue:function(L,Z){return new Mu(L,Z)},fulfillWithValue:function(L,Z){return new Sg(L,Z)}})).then(function(L){if(L instanceof Mu)throw L;return L instanceof Sg?i(L.payload,v,c,L.meta):i(L,v,c)})])];case 3:return x=z.sent(),[3,5];case 4:return C=z.sent(),x=C instanceof Mu?o(null,v,c,C.payload,C.meta):o(C,v,c),[3,5];case 5:return O=r&&!r.dispatchConditionRejection&&o.match(x)&&x.meta.condition,O||u(x),[2,x]}})})}();return Object.assign(g,{abort:b,requestId:v,arg:c,unwrap:function(){return g.then(Bk)}})}}return Object.assign(l,{pending:a,rejected:o,fulfilled:i,typePrefix:t})}return e.withTypes=function(){return e},e}();function Bk(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function Hk(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var Hp="listenerMiddleware";pr(Hp+"/add");pr(Hp+"/removeAll");pr(Hp+"/remove");var kg;typeof queueMicrotask=="function"&&queueMicrotask.bind(typeof window<"u"?window:typeof global<"u"?global:globalThis);sk();const Vk="/assets/vending-machine-1-137865f7.png",Wk="/assets/vending-machine-2-67f0267a.png",Gk="/assets/vending-machine-4-ee4b0cd5.png",Fy=[{id:1,url:"/",text:"home",textGe:"მთავარი"},{id:2,url:"products",text:"products",textGe:"პროდუქტები",hoverTrigger:!0},{id:3,url:"service",text:"service",textGe:"სერვისი"},{id:4,url:"about",text:"about us",textGe:"ჩვენ შესახებ"},{id:5,url:"contacts",text:"contact us",textGe:"კონტაქტი"}],Yk=[{text:"FAQ",textGe:"კითხვები",to:"faq"},{text:"vending machines",textGe:"ვენდინგ აპარატები",to:"products/vending"},{text:"coffee machines",textGe:"ყავის აპარატები",to:"products/coffee"},{text:"snacks and ingredients",textGe:"სნექები და ინგრედიენტები",to:"products/snacks-and-ingredients"}],qk="/assets/company2-26c0cabe.jpg",Qk="/assets/company4-dee4c137.jpg",Kk="/assets/company8-1331edcd.jpg",Jk="/assets/company9-182f8689.jpg",Xk="/assets/company10-95c7c218.jpg",Uy=[qk,Kk,Qk,Jk,Xk];function By(e,t){return function(){return e.apply(t,arguments)}}const{toString:Zk}=Object.prototype,{getPrototypeOf:Vp}=Object,Ac=(e=>t=>{const n=Zk.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),yn=e=>(e=e.toLowerCase(),t=>Ac(t)===e),Oc=e=>t=>typeof t===e,{isArray:la}=Array,So=Oc("undefined");function eE(e){return e!==null&&!So(e)&&e.constructor!==null&&!So(e.constructor)&&Bt(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Hy=yn("ArrayBuffer");function tE(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Hy(e.buffer),t}const nE=Oc("string"),Bt=Oc("function"),Vy=Oc("number"),Rc=e=>e!==null&&typeof e=="object",rE=e=>e===!0||e===!1,zs=e=>{if(Ac(e)!=="object")return!1;const t=Vp(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},iE=yn("Date"),aE=yn("File"),oE=yn("Blob"),sE=yn("FileList"),lE=e=>Rc(e)&&Bt(e.pipe),cE=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||Bt(e.append)&&((t=Ac(e))==="formdata"||t==="object"&&Bt(e.toString)&&e.toString()==="[object FormData]"))},uE=yn("URLSearchParams"),fE=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function zo(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,i;if(typeof e!="object"&&(e=[e]),la(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{const a=n?Object.getOwnPropertyNames(e):Object.keys(e),o=a.length;let s;for(r=0;r<o;r++)s=a[r],t.call(null,e[s],s,e)}}function Wy(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,i;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}const Gy=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Yy=e=>!So(e)&&e!==Gy;function ld(){const{caseless:e}=Yy(this)&&this||{},t={},n=(r,i)=>{const a=e&&Wy(t,i)||i;zs(t[a])&&zs(r)?t[a]=ld(t[a],r):zs(r)?t[a]=ld({},r):la(r)?t[a]=r.slice():t[a]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&zo(arguments[r],n);return t}const dE=(e,t,n,{allOwnKeys:r}={})=>(zo(t,(i,a)=>{n&&Bt(i)?e[a]=By(i,n):e[a]=i},{allOwnKeys:r}),e),pE=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),mE=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},hE=(e,t,n,r)=>{let i,a,o;const s={};if(t=t||{},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),a=i.length;a-- >0;)o=i[a],(!r||r(o,e,t))&&!s[o]&&(t[o]=e[o],s[o]=!0);e=n!==!1&&Vp(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},gE=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},vE=e=>{if(!e)return null;if(la(e))return e;let t=e.length;if(!Vy(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},yE=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Vp(Uint8Array)),xE=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let i;for(;(i=r.next())&&!i.done;){const a=i.value;t.call(e,a[0],a[1])}},wE=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},bE=yn("HTMLFormElement"),SE=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),Eg=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),kE=yn("RegExp"),qy=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};zo(n,(i,a)=>{let o;(o=t(i,a,e))!==!1&&(r[a]=o||i)}),Object.defineProperties(e,r)},EE=e=>{qy(e,(t,n)=>{if(Bt(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(Bt(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},CE=(e,t)=>{const n={},r=i=>{i.forEach(a=>{n[a]=!0})};return la(e)?r(e):r(String(e).split(t)),n},jE=()=>{},PE=(e,t)=>(e=+e,Number.isFinite(e)?e:t),zu="abcdefghijklmnopqrstuvwxyz",Cg="0123456789",Qy={DIGIT:Cg,ALPHA:zu,ALPHA_DIGIT:zu+zu.toUpperCase()+Cg},NE=(e=16,t=Qy.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function AE(e){return!!(e&&Bt(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const OE=e=>{const t=new Array(10),n=(r,i)=>{if(Rc(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[i]=r;const a=la(r)?[]:{};return zo(r,(o,s)=>{const l=n(o,i+1);!So(l)&&(a[s]=l)}),t[i]=void 0,a}}return r};return n(e,0)},RE=yn("AsyncFunction"),TE=e=>e&&(Rc(e)||Bt(e))&&Bt(e.then)&&Bt(e.catch),N={isArray:la,isArrayBuffer:Hy,isBuffer:eE,isFormData:cE,isArrayBufferView:tE,isString:nE,isNumber:Vy,isBoolean:rE,isObject:Rc,isPlainObject:zs,isUndefined:So,isDate:iE,isFile:aE,isBlob:oE,isRegExp:kE,isFunction:Bt,isStream:lE,isURLSearchParams:uE,isTypedArray:yE,isFileList:sE,forEach:zo,merge:ld,extend:dE,trim:fE,stripBOM:pE,inherits:mE,toFlatObject:hE,kindOf:Ac,kindOfTest:yn,endsWith:gE,toArray:vE,forEachEntry:xE,matchAll:wE,isHTMLForm:bE,hasOwnProperty:Eg,hasOwnProp:Eg,reduceDescriptors:qy,freezeMethods:EE,toObjectSet:CE,toCamelCase:SE,noop:jE,toFiniteNumber:PE,findKey:Wy,global:Gy,isContextDefined:Yy,ALPHABET:Qy,generateString:NE,isSpecCompliantForm:AE,toJSONObject:OE,isAsyncFn:RE,isThenable:TE};function ee(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}N.inherits(ee,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:N.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Ky=ee.prototype,Jy={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Jy[e]={value:e}});Object.defineProperties(ee,Jy);Object.defineProperty(Ky,"isAxiosError",{value:!0});ee.from=(e,t,n,r,i,a)=>{const o=Object.create(Ky);return N.toFlatObject(e,o,function(l){return l!==Error.prototype},s=>s!=="isAxiosError"),ee.call(o,e.message,t,n,r,i),o.cause=e,o.name=e.name,a&&Object.assign(o,a),o};const LE=null;function cd(e){return N.isPlainObject(e)||N.isArray(e)}function Xy(e){return N.endsWith(e,"[]")?e.slice(0,-2):e}function jg(e,t,n){return e?e.concat(t).map(function(i,a){return i=Xy(i),!n&&a?"["+i+"]":i}).join(n?".":""):t}function _E(e){return N.isArray(e)&&!e.some(cd)}const IE=N.toFlatObject(N,{},null,function(t){return/^is[A-Z]/.test(t)});function Tc(e,t,n){if(!N.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=N.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(y,b){return!N.isUndefined(b[y])});const r=n.metaTokens,i=n.visitor||u,a=n.dots,o=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&N.isSpecCompliantForm(t);if(!N.isFunction(i))throw new TypeError("visitor must be a function");function c(h){if(h===null)return"";if(N.isDate(h))return h.toISOString();if(!l&&N.isBlob(h))throw new ee("Blob is not supported. Use a Buffer instead.");return N.isArrayBuffer(h)||N.isTypedArray(h)?l&&typeof Blob=="function"?new Blob([h]):Buffer.from(h):h}function u(h,y,b){let g=h;if(h&&!b&&typeof h=="object"){if(N.endsWith(y,"{}"))y=r?y:y.slice(0,-2),h=JSON.stringify(h);else if(N.isArray(h)&&_E(h)||(N.isFileList(h)||N.endsWith(y,"[]"))&&(g=N.toArray(h)))return y=Xy(y),g.forEach(function(w,x){!(N.isUndefined(w)||w===null)&&t.append(o===!0?jg([y],x,a):o===null?y:y+"[]",c(w))}),!1}return cd(h)?!0:(t.append(jg(b,y,a),c(h)),!1)}const d=[],p=Object.assign(IE,{defaultVisitor:u,convertValue:c,isVisitable:cd});function v(h,y){if(!N.isUndefined(h)){if(d.indexOf(h)!==-1)throw Error("Circular reference detected in "+y.join("."));d.push(h),N.forEach(h,function(g,m){(!(N.isUndefined(g)||g===null)&&i.call(t,g,N.isString(m)?m.trim():m,y,p))===!0&&v(g,y?y.concat(m):[m])}),d.pop()}}if(!N.isObject(e))throw new TypeError("data must be an object");return v(e),t}function Pg(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function Wp(e,t){this._pairs=[],e&&Tc(e,this,t)}const Zy=Wp.prototype;Zy.append=function(t,n){this._pairs.push([t,n])};Zy.toString=function(t){const n=t?function(r){return t.call(this,r,Pg)}:Pg;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function ME(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function e2(e,t,n){if(!t)return e;const r=n&&n.encode||ME,i=n&&n.serialize;let a;if(i?a=i(t,n):a=N.isURLSearchParams(t)?t.toString():new Wp(t,n).toString(r),a){const o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+a}return e}class zE{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){N.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Ng=zE,t2={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},DE=typeof URLSearchParams<"u"?URLSearchParams:Wp,$E=typeof FormData<"u"?FormData:null,FE=typeof Blob<"u"?Blob:null,UE=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),BE=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),pn={isBrowser:!0,classes:{URLSearchParams:DE,FormData:$E,Blob:FE},isStandardBrowserEnv:UE,isStandardBrowserWebWorkerEnv:BE,protocols:["http","https","file","blob","url","data"]};function HE(e,t){return Tc(e,new pn.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,a){return pn.isNode&&N.isBuffer(n)?(this.append(r,n.toString("base64")),!1):a.defaultVisitor.apply(this,arguments)}},t))}function VE(e){return N.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function WE(e){const t={},n=Object.keys(e);let r;const i=n.length;let a;for(r=0;r<i;r++)a=n[r],t[a]=e[a];return t}function n2(e){function t(n,r,i,a){let o=n[a++];const s=Number.isFinite(+o),l=a>=n.length;return o=!o&&N.isArray(i)?i.length:o,l?(N.hasOwnProp(i,o)?i[o]=[i[o],r]:i[o]=r,!s):((!i[o]||!N.isObject(i[o]))&&(i[o]=[]),t(n,r,i[o],a)&&N.isArray(i[o])&&(i[o]=WE(i[o])),!s)}if(N.isFormData(e)&&N.isFunction(e.entries)){const n={};return N.forEachEntry(e,(r,i)=>{t(VE(r),i,n,0)}),n}return null}function GE(e,t,n){if(N.isString(e))try{return(t||JSON.parse)(e),N.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const Gp={transitional:t2,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,a=N.isObject(t);if(a&&N.isHTMLForm(t)&&(t=new FormData(t)),N.isFormData(t))return i&&i?JSON.stringify(n2(t)):t;if(N.isArrayBuffer(t)||N.isBuffer(t)||N.isStream(t)||N.isFile(t)||N.isBlob(t))return t;if(N.isArrayBufferView(t))return t.buffer;if(N.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let s;if(a){if(r.indexOf("application/x-www-form-urlencoded")>-1)return HE(t,this.formSerializer).toString();if((s=N.isFileList(t))||r.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return Tc(s?{"files[]":t}:t,l&&new l,this.formSerializer)}}return a||i?(n.setContentType("application/json",!1),GE(t)):t}],transformResponse:[function(t){const n=this.transitional||Gp.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(t&&N.isString(t)&&(r&&!this.responseType||i)){const o=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(t)}catch(s){if(o)throw s.name==="SyntaxError"?ee.from(s,ee.ERR_BAD_RESPONSE,this,null,this.response):s}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:pn.classes.FormData,Blob:pn.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};N.forEach(["delete","get","head","post","put","patch"],e=>{Gp.headers[e]={}});const Yp=Gp,YE=N.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),qE=e=>{const t={};let n,r,i;return e&&e.split(`
`).forEach(function(o){i=o.indexOf(":"),n=o.substring(0,i).trim().toLowerCase(),r=o.substring(i+1).trim(),!(!n||t[n]&&YE[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Ag=Symbol("internals");function Ca(e){return e&&String(e).trim().toLowerCase()}function Ds(e){return e===!1||e==null?e:N.isArray(e)?e.map(Ds):String(e)}function QE(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const KE=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Du(e,t,n,r,i){if(N.isFunction(r))return r.call(this,t,n);if(i&&(t=n),!!N.isString(t)){if(N.isString(r))return t.indexOf(r)!==-1;if(N.isRegExp(r))return r.test(t)}}function JE(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function XE(e,t){const n=N.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(i,a,o){return this[r].call(this,t,i,a,o)},configurable:!0})})}class Lc{constructor(t){t&&this.set(t)}set(t,n,r){const i=this;function a(s,l,c){const u=Ca(l);if(!u)throw new Error("header name must be a non-empty string");const d=N.findKey(i,u);(!d||i[d]===void 0||c===!0||c===void 0&&i[d]!==!1)&&(i[d||l]=Ds(s))}const o=(s,l)=>N.forEach(s,(c,u)=>a(c,u,l));return N.isPlainObject(t)||t instanceof this.constructor?o(t,n):N.isString(t)&&(t=t.trim())&&!KE(t)?o(qE(t),n):t!=null&&a(n,t,r),this}get(t,n){if(t=Ca(t),t){const r=N.findKey(this,t);if(r){const i=this[r];if(!n)return i;if(n===!0)return QE(i);if(N.isFunction(n))return n.call(this,i,r);if(N.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=Ca(t),t){const r=N.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Du(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let i=!1;function a(o){if(o=Ca(o),o){const s=N.findKey(r,o);s&&(!n||Du(r,r[s],s,n))&&(delete r[s],i=!0)}}return N.isArray(t)?t.forEach(a):a(t),i}clear(t){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const a=n[r];(!t||Du(this,this[a],a,t,!0))&&(delete this[a],i=!0)}return i}normalize(t){const n=this,r={};return N.forEach(this,(i,a)=>{const o=N.findKey(r,a);if(o){n[o]=Ds(i),delete n[a];return}const s=t?JE(a):String(a).trim();s!==a&&delete n[a],n[s]=Ds(i),r[s]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return N.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=t&&N.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(i=>r.set(i)),r}static accessor(t){const r=(this[Ag]=this[Ag]={accessors:{}}).accessors,i=this.prototype;function a(o){const s=Ca(o);r[s]||(XE(i,o),r[s]=!0)}return N.isArray(t)?t.forEach(a):a(t),this}}Lc.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);N.reduceDescriptors(Lc.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});N.freezeMethods(Lc);const Nn=Lc;function $u(e,t){const n=this||Yp,r=t||n,i=Nn.from(r.headers);let a=r.data;return N.forEach(e,function(s){a=s.call(n,a,i.normalize(),t?t.status:void 0)}),i.normalize(),a}function r2(e){return!!(e&&e.__CANCEL__)}function Do(e,t,n){ee.call(this,e??"canceled",ee.ERR_CANCELED,t,n),this.name="CanceledError"}N.inherits(Do,ee,{__CANCEL__:!0});function ZE(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new ee("Request failed with status code "+n.status,[ee.ERR_BAD_REQUEST,ee.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const e5=pn.isStandardBrowserEnv?function(){return{write:function(n,r,i,a,o,s){const l=[];l.push(n+"="+encodeURIComponent(r)),N.isNumber(i)&&l.push("expires="+new Date(i).toGMTString()),N.isString(a)&&l.push("path="+a),N.isString(o)&&l.push("domain="+o),s===!0&&l.push("secure"),document.cookie=l.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function t5(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function n5(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function i2(e,t){return e&&!t5(t)?n5(e,t):t}const r5=pn.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function i(a){let o=a;return t&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(o){const s=N.isString(o)?i(o):o;return s.protocol===r.protocol&&s.host===r.host}}():function(){return function(){return!0}}();function i5(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function a5(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i=0,a=0,o;return t=t!==void 0?t:1e3,function(l){const c=Date.now(),u=r[a];o||(o=c),n[i]=l,r[i]=c;let d=a,p=0;for(;d!==i;)p+=n[d++],d=d%e;if(i=(i+1)%e,i===a&&(a=(a+1)%e),c-o<t)return;const v=u&&c-u;return v?Math.round(p*1e3/v):void 0}}function Og(e,t){let n=0;const r=a5(50,250);return i=>{const a=i.loaded,o=i.lengthComputable?i.total:void 0,s=a-n,l=r(s),c=a<=o;n=a;const u={loaded:a,total:o,progress:o?a/o:void 0,bytes:s,rate:l||void 0,estimated:l&&o&&c?(o-a)/l:void 0,event:i};u[t?"download":"upload"]=!0,e(u)}}const o5=typeof XMLHttpRequest<"u",s5=o5&&function(e){return new Promise(function(n,r){let i=e.data;const a=Nn.from(e.headers).normalize(),o=e.responseType;let s;function l(){e.cancelToken&&e.cancelToken.unsubscribe(s),e.signal&&e.signal.removeEventListener("abort",s)}let c;N.isFormData(i)&&(pn.isStandardBrowserEnv||pn.isStandardBrowserWebWorkerEnv?a.setContentType(!1):a.getContentType(/^\s*multipart\/form-data/)?N.isString(c=a.getContentType())&&a.setContentType(c.replace(/^\s*(multipart\/form-data);+/,"$1")):a.setContentType("multipart/form-data"));let u=new XMLHttpRequest;if(e.auth){const h=e.auth.username||"",y=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";a.set("Authorization","Basic "+btoa(h+":"+y))}const d=i2(e.baseURL,e.url);u.open(e.method.toUpperCase(),e2(d,e.params,e.paramsSerializer),!0),u.timeout=e.timeout;function p(){if(!u)return;const h=Nn.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),b={data:!o||o==="text"||o==="json"?u.responseText:u.response,status:u.status,statusText:u.statusText,headers:h,config:e,request:u};ZE(function(m){n(m),l()},function(m){r(m),l()},b),u=null}if("onloadend"in u?u.onloadend=p:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(p)},u.onabort=function(){u&&(r(new ee("Request aborted",ee.ECONNABORTED,e,u)),u=null)},u.onerror=function(){r(new ee("Network Error",ee.ERR_NETWORK,e,u)),u=null},u.ontimeout=function(){let y=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const b=e.transitional||t2;e.timeoutErrorMessage&&(y=e.timeoutErrorMessage),r(new ee(y,b.clarifyTimeoutError?ee.ETIMEDOUT:ee.ECONNABORTED,e,u)),u=null},pn.isStandardBrowserEnv){const h=(e.withCredentials||r5(d))&&e.xsrfCookieName&&e5.read(e.xsrfCookieName);h&&a.set(e.xsrfHeaderName,h)}i===void 0&&a.setContentType(null),"setRequestHeader"in u&&N.forEach(a.toJSON(),function(y,b){u.setRequestHeader(b,y)}),N.isUndefined(e.withCredentials)||(u.withCredentials=!!e.withCredentials),o&&o!=="json"&&(u.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&u.addEventListener("progress",Og(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",Og(e.onUploadProgress)),(e.cancelToken||e.signal)&&(s=h=>{u&&(r(!h||h.type?new Do(null,e,u):h),u.abort(),u=null)},e.cancelToken&&e.cancelToken.subscribe(s),e.signal&&(e.signal.aborted?s():e.signal.addEventListener("abort",s)));const v=i5(d);if(v&&pn.protocols.indexOf(v)===-1){r(new ee("Unsupported protocol "+v+":",ee.ERR_BAD_REQUEST,e));return}u.send(i||null)})},ud={http:LE,xhr:s5};N.forEach(ud,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Rg=e=>`- ${e}`,l5=e=>N.isFunction(e)||e===null||e===!1,a2={getAdapter:e=>{e=N.isArray(e)?e:[e];const{length:t}=e;let n,r;const i={};for(let a=0;a<t;a++){n=e[a];let o;if(r=n,!l5(n)&&(r=ud[(o=String(n)).toLowerCase()],r===void 0))throw new ee(`Unknown adapter '${o}'`);if(r)break;i[o||"#"+a]=r}if(!r){const a=Object.entries(i).map(([s,l])=>`adapter ${s} `+(l===!1?"is not supported by the environment":"is not available in the build"));let o=t?a.length>1?`since :
`+a.map(Rg).join(`
`):" "+Rg(a[0]):"as no adapter specified";throw new ee("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return r},adapters:ud};function Fu(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Do(null,e)}function Tg(e){return Fu(e),e.headers=Nn.from(e.headers),e.data=$u.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),a2.getAdapter(e.adapter||Yp.adapter)(e).then(function(r){return Fu(e),r.data=$u.call(e,e.transformResponse,r),r.headers=Nn.from(r.headers),r},function(r){return r2(r)||(Fu(e),r&&r.response&&(r.response.data=$u.call(e,e.transformResponse,r.response),r.response.headers=Nn.from(r.response.headers))),Promise.reject(r)})}const Lg=e=>e instanceof Nn?e.toJSON():e;function Zi(e,t){t=t||{};const n={};function r(c,u,d){return N.isPlainObject(c)&&N.isPlainObject(u)?N.merge.call({caseless:d},c,u):N.isPlainObject(u)?N.merge({},u):N.isArray(u)?u.slice():u}function i(c,u,d){if(N.isUndefined(u)){if(!N.isUndefined(c))return r(void 0,c,d)}else return r(c,u,d)}function a(c,u){if(!N.isUndefined(u))return r(void 0,u)}function o(c,u){if(N.isUndefined(u)){if(!N.isUndefined(c))return r(void 0,c)}else return r(void 0,u)}function s(c,u,d){if(d in t)return r(c,u);if(d in e)return r(void 0,c)}const l={url:a,method:a,data:a,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:s,headers:(c,u)=>i(Lg(c),Lg(u),!0)};return N.forEach(Object.keys(Object.assign({},e,t)),function(u){const d=l[u]||i,p=d(e[u],t[u],u);N.isUndefined(p)&&d!==s||(n[u]=p)}),n}const o2="1.5.1",qp={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{qp[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const _g={};qp.transitional=function(t,n,r){function i(a,o){return"[Axios v"+o2+"] Transitional option '"+a+"'"+o+(r?". "+r:"")}return(a,o,s)=>{if(t===!1)throw new ee(i(o," has been removed"+(n?" in "+n:"")),ee.ERR_DEPRECATED);return n&&!_g[o]&&(_g[o]=!0,console.warn(i(o," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(a,o,s):!0}};function c5(e,t,n){if(typeof e!="object")throw new ee("options must be an object",ee.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;for(;i-- >0;){const a=r[i],o=t[a];if(o){const s=e[a],l=s===void 0||o(s,a,e);if(l!==!0)throw new ee("option "+a+" must be "+l,ee.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new ee("Unknown option "+a,ee.ERR_BAD_OPTION)}}const fd={assertOptions:c5,validators:qp},Gn=fd.validators;class Rl{constructor(t){this.defaults=t,this.interceptors={request:new Ng,response:new Ng}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=Zi(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:a}=n;r!==void 0&&fd.assertOptions(r,{silentJSONParsing:Gn.transitional(Gn.boolean),forcedJSONParsing:Gn.transitional(Gn.boolean),clarifyTimeoutError:Gn.transitional(Gn.boolean)},!1),i!=null&&(N.isFunction(i)?n.paramsSerializer={serialize:i}:fd.assertOptions(i,{encode:Gn.function,serialize:Gn.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=a&&N.merge(a.common,a[n.method]);a&&N.forEach(["delete","get","head","post","put","patch","common"],h=>{delete a[h]}),n.headers=Nn.concat(o,a);const s=[];let l=!0;this.interceptors.request.forEach(function(y){typeof y.runWhen=="function"&&y.runWhen(n)===!1||(l=l&&y.synchronous,s.unshift(y.fulfilled,y.rejected))});const c=[];this.interceptors.response.forEach(function(y){c.push(y.fulfilled,y.rejected)});let u,d=0,p;if(!l){const h=[Tg.bind(this),void 0];for(h.unshift.apply(h,s),h.push.apply(h,c),p=h.length,u=Promise.resolve(n);d<p;)u=u.then(h[d++],h[d++]);return u}p=s.length;let v=n;for(d=0;d<p;){const h=s[d++],y=s[d++];try{v=h(v)}catch(b){y.call(this,b);break}}try{u=Tg.call(this,v)}catch(h){return Promise.reject(h)}for(d=0,p=c.length;d<p;)u=u.then(c[d++],c[d++]);return u}getUri(t){t=Zi(this.defaults,t);const n=i2(t.baseURL,t.url);return e2(n,t.params,t.paramsSerializer)}}N.forEach(["delete","get","head","options"],function(t){Rl.prototype[t]=function(n,r){return this.request(Zi(r||{},{method:t,url:n,data:(r||{}).data}))}});N.forEach(["post","put","patch"],function(t){function n(r){return function(a,o,s){return this.request(Zi(s||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:a,data:o}))}}Rl.prototype[t]=n(),Rl.prototype[t+"Form"]=n(!0)});const $s=Rl;class Qp{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(a){n=a});const r=this;this.promise.then(i=>{if(!r._listeners)return;let a=r._listeners.length;for(;a-- >0;)r._listeners[a](i);r._listeners=null}),this.promise.then=i=>{let a;const o=new Promise(s=>{r.subscribe(s),a=s}).then(i);return o.cancel=function(){r.unsubscribe(a)},o},t(function(a,o,s){r.reason||(r.reason=new Do(a,o,s),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new Qp(function(i){t=i}),cancel:t}}}const u5=Qp;function f5(e){return function(n){return e.apply(null,n)}}function d5(e){return N.isObject(e)&&e.isAxiosError===!0}const dd={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(dd).forEach(([e,t])=>{dd[t]=e});const p5=dd;function s2(e){const t=new $s(e),n=By($s.prototype.request,t);return N.extend(n,$s.prototype,t,{allOwnKeys:!0}),N.extend(n,t,null,{allOwnKeys:!0}),n.create=function(i){return s2(Zi(e,i))},n}const Be=s2(Yp);Be.Axios=$s;Be.CanceledError=Do;Be.CancelToken=u5;Be.isCancel=r2;Be.VERSION=o2;Be.toFormData=Tc;Be.AxiosError=ee;Be.Cancel=Be.CanceledError;Be.all=function(t){return Promise.all(t)};Be.spread=f5;Be.isAxiosError=d5;Be.mergeConfig=Zi;Be.AxiosHeaders=Nn;Be.formToJSON=e=>n2(N.isHTMLForm(e)?new FormData(e):e);Be.getAdapter=a2.getAdapter;Be.HttpStatusCode=p5;Be.default=Be;const m5=Be;function l2(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=l2(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function nr(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=l2(e))&&(r&&(r+=" "),r+=t);return r}const Ga=e=>typeof e=="number"&&!isNaN(e),Xr=e=>typeof e=="string",St=e=>typeof e=="function",Fs=e=>Xr(e)||St(e)?e:null,Uu=e=>k.isValidElement(e)||Xr(e)||St(e)||Ga(e);function h5(e,t,n){n===void 0&&(n=300);const{scrollHeight:r,style:i}=e;requestAnimationFrame(()=>{i.minHeight="initial",i.height=r+"px",i.transition=`all ${n}ms`,requestAnimationFrame(()=>{i.height="0",i.padding="0",i.margin="0",setTimeout(t,n)})})}function _c(e){let{enter:t,exit:n,appendPosition:r=!1,collapse:i=!0,collapseDuration:a=300}=e;return function(o){let{children:s,position:l,preventExitTransition:c,done:u,nodeRef:d,isIn:p}=o;const v=r?`${t}--${l}`:t,h=r?`${n}--${l}`:n,y=k.useRef(0);return k.useLayoutEffect(()=>{const b=d.current,g=v.split(" "),m=w=>{w.target===d.current&&(b.dispatchEvent(new Event("d")),b.removeEventListener("animationend",m),b.removeEventListener("animationcancel",m),y.current===0&&w.type!=="animationcancel"&&b.classList.remove(...g))};b.classList.add(...g),b.addEventListener("animationend",m),b.addEventListener("animationcancel",m)},[]),k.useEffect(()=>{const b=d.current,g=()=>{b.removeEventListener("animationend",g),i?h5(b,u,a):u()};p||(c?g():(y.current=1,b.className+=` ${h}`,b.addEventListener("animationend",g)))},[p]),q.createElement(q.Fragment,null,s)}}function Ig(e,t){return e!=null?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}const zt={list:new Map,emitQueue:new Map,on(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off(e,t){if(t){const n=this.list.get(e).filter(r=>r!==t);return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit(e){const t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit(e){this.list.has(e)&&this.list.get(e).forEach(t=>{const n=setTimeout(()=>{t(...[].slice.call(arguments,1))},0);this.emitQueue.has(e)||this.emitQueue.set(e,[]),this.emitQueue.get(e).push(n)})}},us=e=>{let{theme:t,type:n,...r}=e;return q.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:t==="colored"?"currentColor":`var(--toastify-icon-color-${n})`,...r})},Bu={info:function(e){return q.createElement(us,{...e},q.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return q.createElement(us,{...e},q.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return q.createElement(us,{...e},q.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return q.createElement(us,{...e},q.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return q.createElement("div",{className:"Toastify__spinner"})}};function g5(e){const[,t]=k.useReducer(v=>v+1,0),[n,r]=k.useState([]),i=k.useRef(null),a=k.useRef(new Map).current,o=v=>n.indexOf(v)!==-1,s=k.useRef({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:o,getToast:v=>a.get(v)}).current;function l(v){let{containerId:h}=v;const{limit:y}=s.props;!y||h&&s.containerId!==h||(s.count-=s.queue.length,s.queue=[])}function c(v){r(h=>v==null?[]:h.filter(y=>y!==v))}function u(){const{toastContent:v,toastProps:h,staleId:y}=s.queue.shift();p(v,h,y)}function d(v,h){let{delay:y,staleId:b,...g}=h;if(!Uu(v)||function(G){return!i.current||s.props.enableMultiContainer&&G.containerId!==s.props.containerId||a.has(G.toastId)&&G.updateId==null}(g))return;const{toastId:m,updateId:w,data:x}=g,{props:S}=s,P=()=>c(m),C=w==null;C&&s.count++;const O={...S,style:S.toastStyle,key:s.toastKey++,...Object.fromEntries(Object.entries(g).filter(G=>{let[Te,be]=G;return be!=null})),toastId:m,updateId:w,data:x,closeToast:P,isIn:!1,className:Fs(g.className||S.toastClassName),bodyClassName:Fs(g.bodyClassName||S.bodyClassName),progressClassName:Fs(g.progressClassName||S.progressClassName),autoClose:!g.isLoading&&(z=g.autoClose,L=S.autoClose,z===!1||Ga(z)&&z>0?z:L),deleteToast(){const G=Ig(a.get(m),"removed");a.delete(m),zt.emit(4,G);const Te=s.queue.length;if(s.count=m==null?s.count-s.displayedToast:s.count-1,s.count<0&&(s.count=0),Te>0){const be=m==null?s.props.limit:1;if(Te===1||be===1)s.displayedToast++,u();else{const Qe=be>Te?Te:be;s.displayedToast=Qe;for(let ie=0;ie<Qe;ie++)u()}}else t()}};var z,L;O.iconOut=function(G){let{theme:Te,type:be,isLoading:Qe,icon:ie}=G,oe=null;const T={theme:Te,type:be};return ie===!1||(St(ie)?oe=ie(T):k.isValidElement(ie)?oe=k.cloneElement(ie,T):Xr(ie)||Ga(ie)?oe=ie:Qe?oe=Bu.spinner():(D=>D in Bu)(be)&&(oe=Bu[be](T))),oe}(O),St(g.onOpen)&&(O.onOpen=g.onOpen),St(g.onClose)&&(O.onClose=g.onClose),O.closeButton=S.closeButton,g.closeButton===!1||Uu(g.closeButton)?O.closeButton=g.closeButton:g.closeButton===!0&&(O.closeButton=!Uu(S.closeButton)||S.closeButton);let Z=v;k.isValidElement(v)&&!Xr(v.type)?Z=k.cloneElement(v,{closeToast:P,toastProps:O,data:x}):St(v)&&(Z=v({closeToast:P,toastProps:O,data:x})),S.limit&&S.limit>0&&s.count>S.limit&&C?s.queue.push({toastContent:Z,toastProps:O,staleId:b}):Ga(y)?setTimeout(()=>{p(Z,O,b)},y):p(Z,O,b)}function p(v,h,y){const{toastId:b}=h;y&&a.delete(y);const g={content:v,props:h};a.set(b,g),r(m=>[...m,b].filter(w=>w!==y)),zt.emit(4,Ig(g,g.props.updateId==null?"added":"updated"))}return k.useEffect(()=>(s.containerId=e.containerId,zt.cancelEmit(3).on(0,d).on(1,v=>i.current&&c(v)).on(5,l).emit(2,s),()=>{a.clear(),zt.emit(3,s)}),[]),k.useEffect(()=>{s.props=e,s.isToastActive=o,s.displayedToast=n.length}),{getToastToRender:function(v){const h=new Map,y=Array.from(a.values());return e.newestOnTop&&y.reverse(),y.forEach(b=>{const{position:g}=b.props;h.has(g)||h.set(g,[]),h.get(g).push(b)}),Array.from(h,b=>v(b[0],b[1]))},containerRef:i,isToastActive:o}}function Mg(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function zg(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function v5(e){const[t,n]=k.useState(!1),[r,i]=k.useState(!1),a=k.useRef(null),o=k.useRef({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,s=k.useRef(e),{autoClose:l,pauseOnHover:c,closeToast:u,onClick:d,closeOnClick:p}=e;function v(x){if(e.draggable){x.nativeEvent.type==="touchstart"&&x.nativeEvent.preventDefault(),o.didMove=!1,document.addEventListener("mousemove",g),document.addEventListener("mouseup",m),document.addEventListener("touchmove",g),document.addEventListener("touchend",m);const S=a.current;o.canCloseOnClick=!0,o.canDrag=!0,o.boundingRect=S.getBoundingClientRect(),S.style.transition="",o.x=Mg(x.nativeEvent),o.y=zg(x.nativeEvent),e.draggableDirection==="x"?(o.start=o.x,o.removalDistance=S.offsetWidth*(e.draggablePercent/100)):(o.start=o.y,o.removalDistance=S.offsetHeight*(e.draggablePercent===80?1.5*e.draggablePercent:e.draggablePercent/100))}}function h(x){if(o.boundingRect){const{top:S,bottom:P,left:C,right:O}=o.boundingRect;x.nativeEvent.type!=="touchend"&&e.pauseOnHover&&o.x>=C&&o.x<=O&&o.y>=S&&o.y<=P?b():y()}}function y(){n(!0)}function b(){n(!1)}function g(x){const S=a.current;o.canDrag&&S&&(o.didMove=!0,t&&b(),o.x=Mg(x),o.y=zg(x),o.delta=e.draggableDirection==="x"?o.x-o.start:o.y-o.start,o.start!==o.x&&(o.canCloseOnClick=!1),S.style.transform=`translate${e.draggableDirection}(${o.delta}px)`,S.style.opacity=""+(1-Math.abs(o.delta/o.removalDistance)))}function m(){document.removeEventListener("mousemove",g),document.removeEventListener("mouseup",m),document.removeEventListener("touchmove",g),document.removeEventListener("touchend",m);const x=a.current;if(o.canDrag&&o.didMove&&x){if(o.canDrag=!1,Math.abs(o.delta)>o.removalDistance)return i(!0),void e.closeToast();x.style.transition="transform 0.2s, opacity 0.2s",x.style.transform=`translate${e.draggableDirection}(0)`,x.style.opacity="1"}}k.useEffect(()=>{s.current=e}),k.useEffect(()=>(a.current&&a.current.addEventListener("d",y,{once:!0}),St(e.onOpen)&&e.onOpen(k.isValidElement(e.children)&&e.children.props),()=>{const x=s.current;St(x.onClose)&&x.onClose(k.isValidElement(x.children)&&x.children.props)}),[]),k.useEffect(()=>(e.pauseOnFocusLoss&&(document.hasFocus()||b(),window.addEventListener("focus",y),window.addEventListener("blur",b)),()=>{e.pauseOnFocusLoss&&(window.removeEventListener("focus",y),window.removeEventListener("blur",b))}),[e.pauseOnFocusLoss]);const w={onMouseDown:v,onTouchStart:v,onMouseUp:h,onTouchEnd:h};return l&&c&&(w.onMouseEnter=b,w.onMouseLeave=y),p&&(w.onClick=x=>{d&&d(x),o.canCloseOnClick&&u()}),{playToast:y,pauseToast:b,isRunning:t,preventExitTransition:r,toastRef:a,eventHandlers:w}}function c2(e){let{closeToast:t,theme:n,ariaLabel:r="close"}=e;return q.createElement("button",{className:`Toastify__close-button Toastify__close-button--${n}`,type:"button",onClick:i=>{i.stopPropagation(),t(i)},"aria-label":r},q.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},q.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function y5(e){let{delay:t,isRunning:n,closeToast:r,type:i="default",hide:a,className:o,style:s,controlledProgress:l,progress:c,rtl:u,isIn:d,theme:p}=e;const v=a||l&&c===0,h={...s,animationDuration:`${t}ms`,animationPlayState:n?"running":"paused",opacity:v?0:1};l&&(h.transform=`scaleX(${c})`);const y=nr("Toastify__progress-bar",l?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${p}`,`Toastify__progress-bar--${i}`,{"Toastify__progress-bar--rtl":u}),b=St(o)?o({rtl:u,type:i,defaultClassName:y}):nr(y,o);return q.createElement("div",{role:"progressbar","aria-hidden":v?"true":"false","aria-label":"notification timer",className:b,style:h,[l&&c>=1?"onTransitionEnd":"onAnimationEnd"]:l&&c<1?null:()=>{d&&r()}})}const x5=e=>{const{isRunning:t,preventExitTransition:n,toastRef:r,eventHandlers:i}=v5(e),{closeButton:a,children:o,autoClose:s,onClick:l,type:c,hideProgressBar:u,closeToast:d,transition:p,position:v,className:h,style:y,bodyClassName:b,bodyStyle:g,progressClassName:m,progressStyle:w,updateId:x,role:S,progress:P,rtl:C,toastId:O,deleteToast:z,isIn:L,isLoading:Z,iconOut:G,closeOnClick:Te,theme:be}=e,Qe=nr("Toastify__toast",`Toastify__toast-theme--${be}`,`Toastify__toast--${c}`,{"Toastify__toast--rtl":C},{"Toastify__toast--close-on-click":Te}),ie=St(h)?h({rtl:C,position:v,type:c,defaultClassName:Qe}):nr(Qe,h),oe=!!P||!s,T={closeToast:d,type:c,theme:be};let D=null;return a===!1||(D=St(a)?a(T):k.isValidElement(a)?k.cloneElement(a,T):c2(T)),q.createElement(p,{isIn:L,done:z,position:v,preventExitTransition:n,nodeRef:r},q.createElement("div",{id:O,onClick:l,className:ie,...i,style:y,ref:r},q.createElement("div",{...L&&{role:S},className:St(b)?b({type:c}):nr("Toastify__toast-body",b),style:g},G!=null&&q.createElement("div",{className:nr("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!Z})},G),q.createElement("div",null,o)),D,q.createElement(y5,{...x&&!oe?{key:`pb-${x}`}:{},rtl:C,theme:be,delay:s,isRunning:t,isIn:L,closeToast:d,hide:u,type:c,style:w,className:m,controlledProgress:oe,progress:P||0})))},Ic=function(e,t){return t===void 0&&(t=!1),{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}},w5=_c(Ic("bounce",!0));_c(Ic("slide",!0));_c(Ic("zoom"));_c(Ic("flip"));const pd=k.forwardRef((e,t)=>{const{getToastToRender:n,containerRef:r,isToastActive:i}=g5(e),{className:a,style:o,rtl:s,containerId:l}=e;function c(u){const d=nr("Toastify__toast-container",`Toastify__toast-container--${u}`,{"Toastify__toast-container--rtl":s});return St(a)?a({position:u,rtl:s,defaultClassName:d}):nr(d,Fs(a))}return k.useEffect(()=>{t&&(t.current=r.current)},[]),q.createElement("div",{ref:r,className:"Toastify",id:l},n((u,d)=>{const p=d.length?{...o}:{...o,pointerEvents:"none"};return q.createElement("div",{className:c(u),style:p,key:`container-${u}`},d.map((v,h)=>{let{content:y,props:b}=v;return q.createElement(x5,{...b,isIn:i(b.toastId),style:{...b.style,"--nth":h+1,"--len":d.length},key:`toast-${b.key}`},y)}))}))});pd.displayName="ToastContainer",pd.defaultProps={position:"top-right",transition:w5,autoClose:5e3,closeButton:c2,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let Hu,Rr=new Map,Ta=[],b5=1;function u2(){return""+b5++}function S5(e){return e&&(Xr(e.toastId)||Ga(e.toastId))?e.toastId:u2()}function Ya(e,t){return Rr.size>0?zt.emit(0,e,t):Ta.push({content:e,options:t}),t.toastId}function Tl(e,t){return{...t,type:t&&t.type||e,toastId:S5(t)}}function fs(e){return(t,n)=>Ya(t,Tl(e,n))}function ve(e,t){return Ya(e,Tl("default",t))}ve.loading=(e,t)=>Ya(e,Tl("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),ve.promise=function(e,t,n){let r,{pending:i,error:a,success:o}=t;i&&(r=Xr(i)?ve.loading(i,n):ve.loading(i.render,{...n,...i}));const s={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},l=(u,d,p)=>{if(d==null)return void ve.dismiss(r);const v={type:u,...s,...n,data:p},h=Xr(d)?{render:d}:d;return r?ve.update(r,{...v,...h}):ve(h.render,{...v,...h}),p},c=St(e)?e():e;return c.then(u=>l("success",o,u)).catch(u=>l("error",a,u)),c},ve.success=fs("success"),ve.info=fs("info"),ve.error=fs("error"),ve.warning=fs("warning"),ve.warn=ve.warning,ve.dark=(e,t)=>Ya(e,Tl("default",{theme:"dark",...t})),ve.dismiss=e=>{Rr.size>0?zt.emit(1,e):Ta=Ta.filter(t=>e!=null&&t.options.toastId!==e)},ve.clearWaitingQueue=function(e){return e===void 0&&(e={}),zt.emit(5,e)},ve.isActive=e=>{let t=!1;return Rr.forEach(n=>{n.isToastActive&&n.isToastActive(e)&&(t=!0)}),t},ve.update=function(e,t){t===void 0&&(t={}),setTimeout(()=>{const n=function(r,i){let{containerId:a}=i;const o=Rr.get(a||Hu);return o&&o.getToast(r)}(e,t);if(n){const{props:r,content:i}=n,a={delay:100,...r,...t,toastId:t.toastId||e,updateId:u2()};a.toastId!==e&&(a.staleId=e);const o=a.render||i;delete a.render,Ya(o,a)}},0)},ve.done=e=>{ve.update(e,{progress:1})},ve.onChange=e=>(zt.on(4,e),()=>{zt.off(4,e)}),ve.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},ve.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},zt.on(2,e=>{Hu=e.containerId||e,Rr.set(Hu,e),Ta.forEach(t=>{zt.emit(0,t.content,t.options)}),Ta=[]}).on(3,e=>{Rr.delete(e.containerId||e),Rr.size===0&&zt.off(0).off(1).off(5)});const k5="/api/v1",He=m5.create({baseURL:k5}),E5=e=>new Intl.NumberFormat("en-US",{style:"currency",currency:"gel"}).format((e/100).toFixed(2)),Xe=({setProductValues:e,e:t})=>{const{name:n,value:r}=t.target;e(i=>({...i,[n]:r}))},Ce=(e,t)=>e?ve.success(t,{style:{borderRadius:"20px",boxShadow:"0 4px 5px rgba(0, 0, 0, 0.6)",fontWeight:"300",fontFamily:"inherit"}}):ve.error(t,{style:{borderRadius:"20px",boxShadow:"0 4px 5px rgba(86, 44, 44, 0.6)",fontWeight:"300",fontFamily:"inherit"}}),C5=[{id:1,title:"რა ტიპის პროდუქტი შეიძლება მოთავსდეს ვენდინგ აპარატში?",info:"მზა საჭმელი, სნექი, დესერტი და საკონდიტრო ნაწარმი, მკვებავი წვენები, ენერგეტიკული სასმელები, გაზიანი სასმელები, რძეზე დაფუძნებული სასმელები, სასმელი წყალი (რეგულარული, არომატული, მატონიზირებული), სახის ნიღბები, ხელთათმანები, სადეზინფექციო საშუალებები, სანიტარული ჯანდაცვა, კონტრაცეპტული ჯანდაცვა და სხვა ნებისმიერი, რაც არ არის მსხვრევადი შეფუთვით."},{id:2,title:"შესაძლებელია თუ არა პროდუქციის მორგება ჩვენი კომპანიის მოთხოვნების შესაბამისად?",info:"ჯორჯიან ვენდინგ გრუფი თანამშრომლობს 150+ ბრენდთან, შეგიძლიათ აირჩიოთ ჩვენი პარტნიორებიდან, ან მოითხოვოთ კონკრეტული ბრენდი და ჩვენი გუნდი განიხილავს შესაძლებლობას. "},{id:3,title:"რა გადახდებია ხელმისაწვდომი ვენდინგ აპარატებში?",info:"ნაღდი ფული (კუპიურები და მონეტები) სმარტ ბარათები (RFID), როგორიცაა Apple Pay, Google Pay და ა.შ... საკრედიტო / სადებეტო ბარათები. "},{id:4,title:"რა უპირატესობა აქვს ვენდინგ აპარატს?",info:"პროდუქციის შერჩეული ასორტიმენტი. არ არის ადამიანთან კონტაქტი. 24 X 7 ხელმისაწვდომობა. თანამშრომლის, მომხმარებლის გაზრდილი პროდუქტიულობა. თანხის დაზოგვა. თანამშრომლების ჩართულობა და შენარჩუნება."},{id:5,title:"რა იქნება ჩვენი მოვალეობა აპარატის დადგმის შემდეგ?",info:"ხელშეკრულების პირობების შესრულება."},{id:6,title:"რა სივრცეა საჭირო ვენდინგ აპარატისთვის ?",info:"ეს დამოკიდებულია აპარატის ტიპზე, რომლის დაყენებასაც აირჩევთ. ზომები, როგორც წესი, მერყეობს 1-1.5 კვ. მეტრს შორის."},{id:7,title:"რამდენ ენერგიას მოიხმარს ვენდინგ აპარატი?",info:"დაახლოებით ნახევარი კილოვატი დღეში საშუალო ზომის აპარატისთვის და დაახლოებით 1, 5 კილოვატი დღეში ყავის აპარატისთვის."},{id:8,title:"რა მოთხოვნებია საჭირო ჩემს დაწესებულებაში ვენდინგ აპარატის დასაყენებლად?",info:"ვითანამშრომლებთ დიდ ორგანიზაციებთან, სადაც თანამშრომელთა რაოდენობა აღემატება 70-ს. თუმცა, შედარებით მცირე ორგანიზაციებთანაც გვაქვს დადებითი გამოცდილება და შესაბამისად, განვიხილავთ წინადადებას."},{id:9,title:"სად უნდა დავაყენო ან განვათავსო ვენდინგ აპარატი?",info:"ვინაიდან ვენდინგ აპარატი არის მომხმარებლისთვის დამატებითი კომფორტის მიწოდების კონცეფცია, სასურველია დამონტაჟდეს ხალხმრავალ ადგილებში, სადაც მომხმარებლები მუშაობენ ან ისვენებენ. ჩვეულებრივ, დამონტაჟებულია ტიპურ ადგილებში: საკუჭნაო სართულები, სადაც ჩაის / ყავის აპარატებია დამონტაჟებული, კაფეტერია / სასადილო, შენობის მთავარი შემოსასვლელი / მოსაცდელი, საერთო კომუნალური ადგილები და ა.შ…"},{id:10,title:"შემიძლია ვიქირავო ან ვიყიდო ვენდინგ აპარატი?",info:"ჩვენ არ ვყიდით ვენდინგ აპარატს, მაგრამ შეგიძლიათ იქირავოთ, ან დადგათ იჯარით."}],j5=[{id:1,title:"Which types of products can be accommodated in vending apparatus?",info:"Snacks, beverages, desserts and confectionery items, fresh fruits, energy drinks, carbonated beverages, bottled water (regular, flavored, mineral), snack nuts, personal care items, disinfectant supplies, sanitary facilities, contraceptive care, and any other non-flammable products."},{id:2,title:"Is it possible to accommodate products according to our company's needs?",info:"Georgian Vending Group collaborates with 150+ brands. You can choose from our partners or request a specific brand, and our team will evaluate the possibility."},{id:3,title:"Which payment options are available in the machines?",info:"Cash (coins and bills), smart cards (RFID), including Apple Pay, Google Pay, credit/debit cards."},{id:4,title:"What advantage does a vending machines have?",info:"Selected assortment of products. No human contact. 24/7 accessibility. Increased productivity of employees and users. Cash handling. Operator and user safety and security."},{id:5,title:"What will be our duties after the installation of the vending machine?",info:"Fulfillment of contractual obligations."},{id:6,title:"How much space is required for a vending machine?",info:"It depends on the type of machine you choose. As a rule of thumb goes, it occupies 1-1.5 square meter."},{id:7,title:"How much energy does the vending machine consume?",info:"Approximately several kilowatts per day for an average-sized machine and around 1.5 kilowatts per day for a coffee machine."},{id:8,title:"What are the requirements to install a vending machine at my facility?",info:"We collaborate with large organizations where the number of employees exceeds 70. However, we also have experience with smaller organizations and discuss requirements based on individual circumstances."},{id:9,title:"Where should the vending machines be installed or placed?",info:"Since the vending machine provides additional comfort for users, it is preferable to be installed in places where people work or spend time. Typically, it is installed in various locations such as break rooms, cafeterias, main entrances/exits, and communal areas."},{id:10,title:"Can I rent or purchase a vending machine?",info:"We do not sell vending machines, but you can either rent it or negotiate a deal with us."}],P5=e=>{localStorage.setItem("user",JSON.stringify(e))},f2=()=>localStorage.removeItem("user"),d2=()=>{const e=localStorage.getItem("user");return e?JSON.parse(e):""},N5="/assets/1-5a90cda7.png",A5="/assets/2-b2649a3d.png",O5="/assets/3-62335eb2.png",R5="/assets/4-dd03e2a0.png",T5="/assets/5-1df7eb3e.png",L5="/assets/6-0183a3bb.png",_5="/assets/7-20cb7241.png",I5="/assets/8-06caace8.png",M5="/assets/9-23bd6e53.png",z5="/assets/10-3b4c2f69.png",D5="/assets/12-d072272e.png",$5="/assets/13-1fa01e4f.png",F5="/assets/14-230a73d2.png",U5="/assets/15-ba449c3c.png",B5="/assets/17-f4211205.png",H5="/assets/18-c2274c5c.png",V5="/assets/19-1096f47b.png",W5="/assets/20-43b35a1e.png",G5="data:image/png;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCA8PDw8PDw8PDw8QDw8PDw8PDxEPDw8PGBQZGRgUGBgdIS4lHB8rHxgWJjgnKy8xNTU1GiQ7QDszPzw0NTYBDAwMEA8QHhISHjEhJCE2NDE0MTQ0MTQxMTExNDQ0NDQ0NDQ0NDQxNjQ0NDE0NDQ0NDQ0NDQ0MTE0NDQ0NDQ0NP/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAADAQADAQEAAAAAAAAAAAAAAQIDBAYHBQj/xAA/EAACAQMBBQMIBwcEAwAAAAAAAQIDBBESBQYhMUETUWEHMnGBkaGxwSIkQlJydKIUY4Kys8LRIzOS8TRDYv/EABsBAQEAAwEBAQAAAAAAAAAAAAABBAUGAwIH/8QAMxEBAAIBAgMFBAkFAAAAAAAAAAECAwQRBSExEkFRYbFxkcHhFBUiMkKBodHwEyMzU2L/2gAMAwEAAhEDEQA/APQQACoASGkVGIBGJaiNRLUQEolKI1E0SCs1EpRNEhpAZ6StJaQ8EEaQ0l4DAEaRYNMBgCNInE0wLSBk4kuJu0S0UYOJLibOJLiEYOJEonIcSHEDBoRpKJDQCAAAAAAAaQkXFAOMTSMQijSKASiWkCRokFJItIEhpEAkCRSRSQEYHgvAYAnAYLwGAIwGC8BgCMCwaYFgDNoTRo0S0Bm0S0aNCaAxaJaN2jNoowaM5RORJGckEYNCNJIhoBAAAXFGkUKKNIoBxRcUEUaJBQkWkCQ0iASKSGkUkAkhpDSKwBOB4HJpJttJLm28JHy77b1vRi5OWVHnLlHPdl8/USZiOr7pjtedqxu+pgMHQNob+z4q2pQS6TqJyl6lw9/sOu3W8V/Wb13VVJ/ZjLs4r0KGPfk8baikdObaYuC6i/O21fb1/T4vYdIYPD3d1nzq1H6ZzfzNKO0rim8wrVk//mrUXzPn6THgyPqG/wDsj3fN7XgWDymy3u2hSf8AvdqvuVoqosenhL3natk78UKrUbmPYSfDWm50m/HhmPr4eJ91z0nyYefhOpxRvEdqPL9uUu1tCwVCSklKLUotJqUWmmu9MMHs1jNolo1aJaAzaJaNGiWgMWiJI3aMpIoxkjKSORJGUkEZYArSMDWKLihRRrFBRFGiQRQ0iBpFpCSLSAEikgSKSAWDibR2hTt4apvMn5kF50n/AI8StpXsbalKpPpwjHrKfRI892ptOUnOrVeqT5R+EV3I8smTs8u9naLRzqJ3n7sfrPhDl7Y3gk1qqPnns6MHhPx9Hi/UdRu7udaWZyzjzUuEYLuS6fExrVpTk5SeW+fcl0S7kZ5MO15l1mn0tMMco5+n8756qAnIZPhkqAnIZAoCchkD7+7u8laymovNSg39OlJ+bl8ZR7n4cn7z1Gxu6dxThWpSUoSWU/imujXceIZOx7nbedpWVOpJ9hVkozXSE3hRqfBPw49D3w5ZrPZnp6NNxTh0Zazlxx9qOv8A18+/zeptEtFiaM1yrNoho1aJaAyaIkjVoloDCSM5I3kjOSKMcAXgAi4o2ijOKNYhVJFJEotEFIpCRSAaKQkcDb9/+yWdevwzCk9GetR/Riva0SZ2fVaza0VjrLo29e8EalzKlGWYUNUI4fCUvty9vD1HVr66dSS+7HkvHqz4sJuc+LbzJttvLfXLOdk102m07y7rDpseCtaU7oVkMk5HFZwlxb4JLm33Eez6WxNkVr6sqVJJYWqc5eZCH3n8l19p6Zs7c+xo09M6MLiTWJTrxUm34R5R9RvurseNlawg0u1klOs+rm15voS4eo+4ZuPDFY59XJa/iWTNea452rHh3+c/zZ0fbnk5srhSlbfVa3NOLlKk33OL5L8ODyvaVldbPrSo1VKE4dH9KEo9JRfVM/Rh07yjbEhdWU66iu2tk6ilji6P/sj7OPpiTLiiY3g0GvvTJFMk71nl5x+bym2ulUXdJc14d6N8nx6eYSyuaf8A2j62e7k0mvQ+KMN1kb96sjTJyLJH09f3M2i7mypuT1VKT7CbfN6UtMn4uLiz7zR575Mbhqd1R6OEKi/EnpfucfYehM2GK29IcRxDDGLU3rHTfePz5pZDRoyWejDZNEtGjIYGckZSRvJGUkUZgUARUTVGcTWJFNGiIiWgKRSEhoBo6V5VrvRYU6Wf964Sf4YJy+Ok7sjrW+O6z2pGjFXDodjreNGuM3LTxfFNYx7z4yRM1mIZGkvWmet79Ind4tYvMm+6PxOdk7JLyb39DU6Ureun+8lSlw7k017z5t1u7tGim6lncYSy3Tiqy/Q2zCnHeO51uLX6e8crx6euz5uT725dkrjaFCLWYQbrTT5aYcV+pwPgTTjJxlGUZLnGUJwkvVJHfPJbb/6l1Va82nTguGPOk2/5UMdd7xBrs0U0t7Vnu29/J6SAwNg4ojjX1NTo1YSScZUqkWu9OLTOUfP2zcdja3FTm40p6VyzJrEV7WiTOy1ibTER1l+eZR4v0/M+hHzIfgXubXyOU9meGTGvFQloX2FGH8SXH35NZEP0O9qzPJGQyTkMlfLufkxl9drLo7Wpn1TpY+LPT2eb+S6g+3uauOEaMYZ8ZSTx+g9IZm4I2o5Di9t9XMeER6JYmNiZ7NYhkM0ZDAzZnI1kZyAzAYFRpEuJES0RVxLRES0BaGhIaAaKQkMBjEMAABgAAAAdO3v2kpYtoPKi1Oq1y1fZj8/YfT27tpUU6VJqVZrDa4qmu9+PgdHuasYRlUqSxFPMpPjKUn0Xe2eGa/4Ybbh2lntRmv0jp5+f7OJe11Rpym8Z5QX3p9PV1Z1dyfNvLfFt82+85F/eyrzy1pSyoQznTH5vvZxcmI6bHXsxvPVWQJyfV3b2TO9uqdGKehPVVljhCimtXrfJeLG287Q+r5K0rN7cojm9J8nmz+xsVOS+lcT7b+DCjH4Z9Z2kVKnGEYwilGMYqMYrkopYSGzY1r2Y2cNmyzmyWyT3zuliY2JleSGQzRkMDNkSLZEgIAoAhxLRES4hVxLRES0BaGhIaApDEhoBjEMAGIYAdd25tlxzSov6fKU19nwXj49Dnbbu3TgoweJzys/dj1Z0++qRoUp1Z+bFZfe30S8WzyyX25Q2Gj08Wnt35+EeLgX91ChFzqN8W9MVxnUl3L5vodOv7+deWqTwlnRFeZTXcv8AL4si/vp3E3Um+L4RivNjH7qONkw5nd1OLF2eduvovIZIyfU2FsS4v6vZ0YvCxqnLPZ0498n39y5skRM8oel71pWbWnaIYbNsK13VjRoxc5z5LpFdZSfRLvPZd2N36Wz6OiOJVpYdarjGp/dXdFdF6zTd/YNDZ9LRSjmbS7SrJLXUa+Xcj7BmYsXY5z1crxDiM6mexTlSPfPnPwj3kJjEezWJYmNiYEshlMhgQyJFsiQCAkAHE1iYxNUBaLRCLQFoaJRSApFIhFAUAhgMAADq+8l4oVlB9KcX7W/8HSN8r5SoU4R5SqZl4qMW172vYfR8oV66d8lng7el/NM6XtK77WMOPmyfvRg5Mn2pq6rQab+1jyfm4GQyTka5r0nm2rse6W7FTaNSTy6dCDSqzxnL4PRHo3j2HsWzdnUbSkqNvBQhHoucn1lJ9W+84W6NpGhs60gkk3RhUnjrOa1SftZ9ozcVIrG/e4/X6y+oyTH4YnlHx9oEwEerADJY2JgJksbEwJZDKZDAmRnItmcgJAQFQ4s1izCLNosKtGiM0ykyDRFozRSAtDRKGgKQxABQCGB5t5Q9hXlxdRrUKE6tNUqcW6eJNNOTf0c56roef3NlXptRnSqQl92cZQl7Gj3XaG3rO1n2dxXjTnpUtLUm9Lzh8F4M+fU342Sud0n6KdWX9pi3w0m2/a9G90vEtRjw1x/0u1ERymN/m8WhZ1pebSqS/DCT+CNY7LunjTbXD4rlRqP+09bl5RNkJ47eq/Rb1sfA+vY7yWFxhUbuhKT5RdRQn/xlhkjDWelnrfiuenOcMxHnv+zmbMTjb0ItNNUaSafBpqC4HKEmBludmdwIYgExMGJgDJY2QwEyGUyGwJbM5MuTMpMAyBOQKgizWLMIsuLCuRFjTM4stMg0TLTMky0wNExohMpMCslEJjyBQxCyB5X5Tn9ej+Xp/GZ0y4prsXPqpqOcccOE38juflP/APNj+Xp/GZ0y5l/oNfvE/wBEzX3/AMku30e/0HH7I9XB4eA4t5Sy+a68CMhF8V6UR7Q/RG7z+o2X5S3/AKaPoHzt339Rsvylv/TifQybCOkOFyffn2yZOQyLJXwBNg2S2ANktg2S2AmyWxtmcmApMzkxyZnJlBkCcgEKLNYs48WaRYG8WapmEWXFhWyZSZkmWmQaJlJmSkUpAapgmZ6h6gNMjyZ6g1AdC3/2Dd3FeNehSlVgqMItQac01KTf0eb5rlk832jCdOOiUXGWtNwnFxa4NcU+KP0L2hlVoUpvVOnTm1wTnCMml6WjwvgiZ3iW503GL4cUYrUiYjp3T8X5yjBy5JP0LJrC1rPGKc3x+zGUvgfomFKlHzacI+iEUaqaPn6P5vT67nux/r8nB3eyrGzTTTVrQTTWGnoXBo+jkz1hqMmGjtO8zPirIZI1CcgimyWxORLYDbJbBslsAbMpMbZEmUKTM5McmZSYQ8jM8gAJlxZmNMDeLLUjBSLiwN1IpSMUxpgbah6zHIZIrXWHaGLJYGzqi7Y47yZyTA5Trj/aPE4MlIzcJAfR/aPEfb+J81Qn3lxjIDnqsUqpwoplrIHL7Qes4yKQG+sNRjkeQNXIhyIyJsobkS2JszbCCTIbHJkgAAAAAAA0y4yMxpgbJlJmMZFqQGqKwZqRaYU8BpBMeSBaBdmWMDLsg7JGwAY9kHZGwAZdmGg0EBOkNI2xNgLAmNslyKBkNg5GcpBDkyWxNiAAAAAAAAAAAAAAGiojAC0UgACkUgABoEAAUgAAoAAAlgwAITJYAAmQwACGQwABAAAAAAAAAB//2Q==",Y5="/assets/coin-1-8221627a.png",q5="/assets/coin-2-e84523a4.png",Q5="/assets/coin-3-8ad8e391.png",K5="/assets/coin-4-7bc6d14c.png",J5="/assets/coin-5-0819dcc6.png",X5="/assets/coin-6-7f4357a6.png",Z5="/assets/5-lari-cf94bc56.png",e6="/assets/10-lari-ae59ec40.png",t6="/assets/card-reader-c512a5f6.png",n6=[N5,A5,O5,R5,T5,L5,_5,I5,M5,z5,D5,$5,F5,U5,B5,H5,V5,W5,G5],r6=[Y5,q5,Q5,K5,J5,X5,Z5,e6,t6],i6=[Vk,Wk,Gk],a6=[...n6],o6=[...r6],s6={isLoading:!1,isNavbarOpen:!1,isSearchBarOpen:!1,aboutStats:{machines:"",partners:"",cities:"",id:""},aboutStatsIsLoading:!1,isSubmenuOpen:!1,activeImageIndex:0,images:i6,carouselImages:a6,moneyImages:o6,submenuCenter:0,english:!1,submenuPages:[{name:"vending",nameGe:"ვენდინგი",to:"products/vending"},{name:"coffee",nameGe:"ყავა",to:"products/coffee"},{name:"snack",nameGe:"სნექი",to:"products/snacks-and-ingredients"}],editingInfo:{}},qa=tt("menuSlice/fetchAboutStats",async()=>{try{return{data:(await He.get("/about")).data}}catch(e){throw e}}),p2=Nc({name:"firstSlice",initialState:s6,reducers:{toggleNavbar:e=>({...e,isNavbarOpen:!e.isNavbarOpen}),toggleSearchbar:e=>({...e,isSearchBarOpen:!e.isSearchBarOpen}),setSubmenuOpen:(e,t)=>({...e,isSubmenuOpen:!0,submenuCenter:t.payload}),hideSubmenu:e=>({...e,isSubmenuOpen:!1}),setActiveImageIndex:(e,t)=>({...e,activeImageIndex:t.payload}),changeLanguage:e=>({...e,english:!e.english})},extraReducers:e=>{e.addCase(qa.pending,t=>{t.aboutStatsIsLoading=!0}),e.addCase(qa.fulfilled,(t,n)=>{const{data:{aboutStats:r}}=n.payload,{machines:i,partners:a,cities:o,_id:s}=r[0];return{...t,aboutStatsIsLoading:!1,aboutStats:{...t.aboutStats,machines:i,partners:a,cities:o,id:s}}}),e.addCase(qa.rejected,t=>{t.aboutStatsIsLoading=!1})}}),{toggleNavbar:l6,toggleSearchbar:CP,setSubmenuOpen:m2,hideSubmenu:h2,setActiveImageIndex:g2,changeLanguage:c6}=p2.actions,u6=p2.reducer,f6=()=>{const{images:e,activeImageIndex:t}=Q(r=>r.menu),n=ce();return f.jsx("div",{className:"dots-container",children:e.map((r,i)=>f.jsx("button",{className:i===t?"dot active":"dot",onClick:()=>n(g2(i))},i))})},d6=()=>{const{images:e,activeImageIndex:t}=Q(r=>r.menu),n=ce();return k.useEffect(()=>{const r=setInterval(()=>{n(g2((t+1)%e.length))},6e3);return()=>clearInterval(r)},[t]),f.jsxs("div",{children:[f.jsx("div",{className:"img-container",children:f.jsx(fS,{srcSet:e[t],alt:"Main Image",className:"introduction-img"},e[t])}),f.jsx(f6,{})]})},p6=qe.section`
  .slide {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;
    width: 60px;
    height: 70px;
    scale: 0.2;
    opacity: 0;
    z-index: 0.8;
    object-fit: contain;
  }
  .download-slide {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;
    width: 60px;
    height: 60px;
    scale: 0.2;
    opacity: 0;
    z-index: 1;
  }
  .slide-img {
    width: 100%;
    height: 100%;
  }
  .activeSlide {
    opacity: 1;
    scale: 0.9;
    z-index: 90;
    transform: scale(1);
    transition: 1500ms linear;
  }
  .nextSlide {
    transform: translateX(120%);
    scale: 0.9;
    transition: 1500ms linear;
    opacity: 1;
  }
  .nextNextSlide {
    transform: translateX(240%);
    scale: 0.9;
    z-index: 0;
    transition: 1500ms linear;
    opacity: 1;
  }
  .threeNextSlide {
    transform: translateX(360%);
    scale: 0.9;
    z-index: 0;
    transition: 1500ms linear;
    opacity: 0.9;
  }
  .fourNextSlide {
    transform: translateX(480%);
    scale: 0.9;
    z-index: 0;
    /* transition: 1000ms; */
    opacity: 0.9;
  }
  .lastSlide {
    transform: translateX(-120%);
    scale: 0.9;
    transition: 1500ms linear;
    opacity: 1;
  }
  .lastLastSlide {
    transform: translateX(-240%);
    scale: 0.9;
    transition: 1500ms linear;
    opacity: 1;
  }
  .threeLastSlide {
    transform: translateX(-360%);
    scale: 0.9;
    transition: 1500ms linear;
    opacity: 0.9;
  }
  .fourLastSlide {
    transform: translateX(-480%);
    scale: 0.9;
    transition: 1500ms linear;
    opacity: 0.9;
  }
  .carousel-container {
    width: 90%;
    margin: 0 auto;
    min-height: 110px;
    height: 25vh;
    position: relative;
    overflow: hidden;
  }
  .carousel-container-download {
    overflow: hidden;
    width: 100%;
    height: 150px;
    position: relative;
    border-radius: 3rem;
  }
  .carousel-container {
    height: 100px;
  }
  @media screen and (min-width: 450px) {
    .slide {
      height: 90px;
      width: 113px;
    }
    .download-slide {
      height: 112px;
      width: 125px;
    }
  }
  @media screen and (min-width: 890px) {
    .carousel-container {
      padding-top: 0.5rem;
      width: 90%;
      min-height: 190px;
      height: 25vh;
      position: relative;
      overflow: hidden;
      margin: 0 auto;
    }
    .slide{
      height: 112px;
      width: 141px;
    }
  }
  @media screen and (min-width: 1200px) {
    .slide {
      height: 80%;
      width: 14%;
    }
  }
`,v2=({images:e,atHome:t})=>{const[n,r]=k.useState(0),i=e.length-1;return k.useEffect(()=>{let a=setInterval(()=>{r(o=>o===i?0:o+1)},1450);return()=>{clearInterval(a)}},[e]),f.jsx(p6,{children:f.jsx("div",{className:t?"carousel-container":"carousel-container-download",children:e.map((a,o)=>{let s=t?"slide":"download-slide";return o===n?s=t?"activeSlide slide":"download-slide activeSlide":o===(n+1)%e.length?s=t?"nextSlide slide":"download-slide nextSlide":o===(n+2)%e.length?s=t?"nextNextSlide slide":"download-slide nextNextSlide":o===(n+3)%e.length?s=t?"threeNextSlide slide":"download-slide threeNextSlide":o===(n+4)%e.length?s=t?"fourNextSlide slide":"download-slide fourNextSlide":o===(n-1+e.length)%e.length?s=t?"lastSlide slide":"download-slide lastSlide":o===(n-2+e.length)%e.length?s=t?"lastLastSlide slide":"download-slide lastLastSlide":o===(n-3+e.length)%e.length?s=t?"threeLastSlide slide":"download-slide threeLastSlide":o===(n-4+e.length)%e.length&&(s=t?"fourLastSlide slide":"download-slide fourLastSlide"),f.jsx("img",{className:s,srcSet:a,alt:"carousel-image"},o)})})})},y2=({images:e})=>f.jsx("div",{className:"company-images",children:e.map((t,n)=>f.jsx("img",{className:`${n===1?"align-image":""}`,srcSet:t,alt:"company image"},n))}),m6=!0,h6=()=>{const{carouselImages:e,english:t}=Q(n=>n.menu);return f.jsx(cS,{children:f.jsxs("div",{className:"introduction",children:[f.jsx(d6,{}),f.jsx("div",{className:"introduction-text",children:t?f.jsx("p",{children:"Georgian Vending Group is the official representative of the Spanish company Azykoen in Georgia. (Azykoen is a leading manufacturer of vending machines worldwide) Our mission is to provide daily comfort and accessibility to local businesses, large and public offices, by delivering high-quality, multifunctional vending machines for their business and operations. We assist partners in establishing vibrant communities that create positive relationships, build, and enhance comfort, increase product diversity, and contribute to the efficiency of their business and production. We value creating partnerships with dynamic organizations that focus on establishing positive connections, generating growth, and promoting comfort. We believe that we can quickly and easily deliver food, beverages, and other related product categories to any sector, meaning that we can serve both large and small organizations"}):f.jsxs("p",{children:["Georgian Vending Group ესპანური კომპანია Azykoen-ის ოფიციალური წარმომადგენელია საქართველოში. (Azykoen - სავაჭრო აპარატების ერთ-ერთი უძლიერესი მწარმოებელი მსოფლიოში) ",f.jsx("br",{})," ჩვენი მისიაა ყოველდღიური კომფორტის ხელმისაწვდომობის მიზნით ადგილობრივ ბიზნესებს, კერძო და სახელმწიფო ოფისებს, მივაწოდოთ საუკეთესო ხარისხის, მრავალფუნქციური, მათ ბიზნესზე და საქმისწარმოებაზე მორგებული სავაჭრო აპარატები. ჩვენ ვეხმარებით პარტნიორებს ისეთი ცოცხალი კუთხეების მოწყობაში, რომლებიც ქმნის პოზიტიურ კავშირებს, ამყარებს და აძლიერებს კომფორტს, ზრდის პროდუქტიულობას და იწვევს კმაყოფილებას ",f.jsx("br",{})," ჩვენ ვამაყობთ რომ შეგვიძლია სწრაფად და მარტივად მივაწოდოთ საკვები, სასმელი და სხვა დაკავშირებული კატეგორიების პროდუქტი ნებისმიერ სექტორს, რაც ნიშნავს რომ შეგვიძლია მოვუაროთ როგორც მსხვილ, ისე მცირე ორგანიზაციებს."]})}),f.jsx(v2,{images:e,atHome:m6}),f.jsx(y2,{images:Uy}),f.jsx("div",{className:"introduction-products",children:f.jsx(pt,{to:"/products",children:f.jsx("button",{className:"btn products-btn",children:t?"Products":"პროდუქტები"})})})]})})},g6=qe.footer`
  background: var(--primary-black);
  margin-top: 3.5rem;
  .footer-container {
    width: 100%;
    background: var(--primary-black);
    margin-top: 4rem;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: flex-start;
    padding: 1rem;
    padding-bottom: 0;
    padding-top: 1rem;
    max-width: 1260px;
    margin: 0 auto;
    gap: 1rem;
  }
  h4{
    color: var(--primary-white);
    font-weight: 300;
  }
  .subscribe-btn {
    background: var(--primary-Company-red);
    padding: 1rem 2rem;
    border-radius: 0;
    &:hover {
      background: var(--primary-white);
    }
  }
  .subscribe-underline {
    width: 100%;
    background: var(--primary-white);
    height: 1px;
    opacity: 0.5;
    margin: 1rem 0;
  }
  .subscribe-input {
    height: 1.5rem;
    border: none;
    width: 80%;
    border-radius: 5px;
    font-size: 1rem;
    padding-left: 0.1rem;
    outline: none;
    font-family: var(font-family);
    background: none;
    color: var(--primary-white);
  }
  .logos-container{ 
    display: none;
  }
  .subscribe-text {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .letterbox {
    transition: var(--transition);
    color: var(--primary-white);
    opacity: 0.6;
    font-size: 1.5rem;
    &:hover {
      opacity: 1;
    }
  }
  .contacts-container {
    display: flex;
    flex-direction: column;
    width: 90%;
    max-width: 250px;
  }
  .contact-info {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: 0.2rem;
    width: 100%;
    opacity: 0.9;
  }
  .animated-contact-text {
    position: relative;
    font-weight: 300;
    color: var(--primary-white);
    @media screen and (min-width:890px){
      &::after {
        content: "";
        position: absolute;
        width: 0;
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: var(--primary-Company-red);
        transition: var(--transition);
        visibility: hidden;
        transform-origin: bottom left;
      }
      &:hover::after {
        visibility: visible;
        width: 80%;
      }
    }
  }
  .animated-contact-text h4{
    font-weight: 300;
  }
  .under-text {
    text-decoration: underline;
    transition: var(--transition);
    cursor: pointer;
    &:hover {
      text-decoration: none;
    }
  }
  .icon-link {
    font-size: 2rem;
    display: none;
  }
  .subscribe {
    margin-top: 1rem;
    width: 100%;
  }
  .subscribe-btn {
    width: 100%;
    padding: 1.15rem;
    color: var(--primary-black);
  }
  .pages-container {
    color: var(--primary-white);
    width: 100%;
    max-width: 350px;
  }
  .pages-container ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.4rem;
    max-height: 180px;
  }
  .pages-container a {
    width: 100px;
    max-width: 180px;
    opacity: 0.9;
    transition: all 0.1s linear;
    &:hover {
      opacity: 1;
    }
    position: relative;
    @media screen and (min-width: 980px) {
      &::after {
        content: "";
        position: absolute;
        width: 0;
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: var(--primary-Company-red);
        visibility: hidden;
        transition: var(--transition);
        transform-origin: bottom left;
      }
      &:hover::after {
        visibility: visible;
        width: 70%;
      }
    }
  }
  .logo-icon {
    transition: var(--transition);
    &:hover {
      color: yellow;
    }
  }
  .authorization{
    display: none;
  }
  .footer-img {
    height: 60px;
    width: 120px;
  }
  .copy-text-logo {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    gap: 1rem;
    width: 100%;
    opacity: 0.9;
  }
  @media screen and (min-width: 880px) {
    padding: 0rem 5rem;
    padding-top: 1rem;
    margin-top: 1rem;
    .logos-container {
      opacity: 0.9;
      width: 70%;
      margin-top: 1rem;
      color: white;
      font-size: 1.5rem;
      display: flex;
      justify-content: flex-start;
      gap: 1.5rem;
    }
    .pages-container ul {
      max-height: 140px;
    }
  }
  @media screen and (min-width: 1180px) {
    .subscribe {
      margin-top: 0;
      flex-direction: column;
      width: 255px;
      align-items: flex-end;
    }
    .authorization{
      display: inline;
    }
  }
`,v6="/assets/gvg-footer-logo-44e21729.png";function Dg(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Dg(Object(n),!0).forEach(function(r){Ye(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Dg(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Ll(e){"@babel/helpers - typeof";return Ll=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ll(e)}function y6(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function $g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function x6(e,t,n){return t&&$g(e.prototype,t),n&&$g(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Ye(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Kp(e,t){return b6(e)||k6(e,t)||x2(e,t)||C6()}function $o(e){return w6(e)||S6(e)||x2(e)||E6()}function w6(e){if(Array.isArray(e))return md(e)}function b6(e){if(Array.isArray(e))return e}function S6(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function k6(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,a=!1,o,s;try{for(n=n.call(e);!(i=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));i=!0);}catch(l){a=!0,s=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(a)throw s}}return r}}function x2(e,t){if(e){if(typeof e=="string")return md(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return md(e,t)}}function md(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function E6(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function C6(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Fg=function(){},Jp={},w2={},b2=null,S2={mark:Fg,measure:Fg};try{typeof window<"u"&&(Jp=window),typeof document<"u"&&(w2=document),typeof MutationObserver<"u"&&(b2=MutationObserver),typeof performance<"u"&&(S2=performance)}catch{}var j6=Jp.navigator||{},Ug=j6.userAgent,Bg=Ug===void 0?"":Ug,xr=Jp,we=w2,Hg=b2,ds=S2;xr.document;var Un=!!we.documentElement&&!!we.head&&typeof we.addEventListener=="function"&&typeof we.createElement=="function",k2=~Bg.indexOf("MSIE")||~Bg.indexOf("Trident/"),ps,ms,hs,gs,vs,_n="___FONT_AWESOME___",hd=16,E2="fa",C2="svg-inline--fa",Zr="data-fa-i2svg",gd="data-fa-pseudo-element",P6="data-fa-pseudo-element-pending",Xp="data-prefix",Zp="data-icon",Vg="fontawesome-i2svg",N6="async",A6=["HTML","HEAD","STYLE","SCRIPT"],j2=function(){try{return!0}catch{return!1}}(),ye="classic",Ie="sharp",em=[ye,Ie];function Fo(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[ye]}})}var ko=Fo((ps={},Ye(ps,ye,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),Ye(ps,Ie,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),ps)),Eo=Fo((ms={},Ye(ms,ye,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Ye(ms,Ie,{solid:"fass",regular:"fasr",light:"fasl"}),ms)),Co=Fo((hs={},Ye(hs,ye,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Ye(hs,Ie,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),hs)),O6=Fo((gs={},Ye(gs,ye,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Ye(gs,Ie,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),gs)),R6=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,P2="fa-layers-text",T6=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,L6=Fo((vs={},Ye(vs,ye,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Ye(vs,Ie,{900:"fass",400:"fasr",300:"fasl"}),vs)),N2=[1,2,3,4,5,6,7,8,9,10],_6=N2.concat([11,12,13,14,15,16,17,18,19,20]),I6=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],zr={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},jo=new Set;Object.keys(Eo[ye]).map(jo.add.bind(jo));Object.keys(Eo[Ie]).map(jo.add.bind(jo));var M6=[].concat(em,$o(jo),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",zr.GROUP,zr.SWAP_OPACITY,zr.PRIMARY,zr.SECONDARY]).concat(N2.map(function(e){return"".concat(e,"x")})).concat(_6.map(function(e){return"w-".concat(e)})),Qa=xr.FontAwesomeConfig||{};function z6(e){var t=we.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function D6(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(we&&typeof we.querySelector=="function"){var $6=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];$6.forEach(function(e){var t=Kp(e,2),n=t[0],r=t[1],i=D6(z6(n));i!=null&&(Qa[r]=i)})}var A2={styleDefault:"solid",familyDefault:"classic",cssPrefix:E2,replacementClass:C2,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Qa.familyPrefix&&(Qa.cssPrefix=Qa.familyPrefix);var ea=_(_({},A2),Qa);ea.autoReplaceSvg||(ea.observeMutations=!1);var $={};Object.keys(A2).forEach(function(e){Object.defineProperty($,e,{enumerable:!0,set:function(n){ea[e]=n,Ka.forEach(function(r){return r($)})},get:function(){return ea[e]}})});Object.defineProperty($,"familyPrefix",{enumerable:!0,set:function(t){ea.cssPrefix=t,Ka.forEach(function(n){return n($)})},get:function(){return ea.cssPrefix}});xr.FontAwesomeConfig=$;var Ka=[];function F6(e){return Ka.push(e),function(){Ka.splice(Ka.indexOf(e),1)}}var Yn=hd,mn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function U6(e){if(!(!e||!Un)){var t=we.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=we.head.childNodes,r=null,i=n.length-1;i>-1;i--){var a=n[i],o=(a.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=a)}return we.head.insertBefore(t,r),e}}var B6="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Po(){for(var e=12,t="";e-- >0;)t+=B6[Math.random()*62|0];return t}function ca(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function tm(e){return e.classList?ca(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function O2(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function H6(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(O2(e[n]),'" ')},"").trim()}function Mc(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function nm(e){return e.size!==mn.size||e.x!==mn.x||e.y!==mn.y||e.rotate!==mn.rotate||e.flipX||e.flipY}function V6(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},a="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(a," ").concat(o," ").concat(s)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:c}}function W6(e){var t=e.transform,n=e.width,r=n===void 0?hd:n,i=e.height,a=i===void 0?hd:i,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&k2?l+="translate(".concat(t.x/Yn-r/2,"em, ").concat(t.y/Yn-a/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/Yn,"em), calc(-50% + ").concat(t.y/Yn,"em)) "):l+="translate(".concat(t.x/Yn,"em, ").concat(t.y/Yn,"em) "),l+="scale(".concat(t.size/Yn*(t.flipX?-1:1),", ").concat(t.size/Yn*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var G6=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function R2(){var e=E2,t=C2,n=$.cssPrefix,r=$.replacementClass,i=G6;if(n!==e||r!==t){var a=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");i=i.replace(a,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return i}var Wg=!1;function Vu(){$.autoAddCss&&!Wg&&(U6(R2()),Wg=!0)}var Y6={mixout:function(){return{dom:{css:R2,insertCss:Vu}}},hooks:function(){return{beforeDOMElementCreation:function(){Vu()},beforeI2svg:function(){Vu()}}}},In=xr||{};In[_n]||(In[_n]={});In[_n].styles||(In[_n].styles={});In[_n].hooks||(In[_n].hooks={});In[_n].shims||(In[_n].shims=[]);var nn=In[_n],T2=[],q6=function e(){we.removeEventListener("DOMContentLoaded",e),_l=1,T2.map(function(t){return t()})},_l=!1;Un&&(_l=(we.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(we.readyState),_l||we.addEventListener("DOMContentLoaded",q6));function Q6(e){Un&&(_l?setTimeout(e,0):T2.push(e))}function Uo(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,a=i===void 0?[]:i;return typeof e=="string"?O2(e):"<".concat(t," ").concat(H6(r),">").concat(a.map(Uo).join(""),"</").concat(t,">")}function Gg(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var K6=function(t,n){return function(r,i,a,o){return t.call(n,r,i,a,o)}},Wu=function(t,n,r,i){var a=Object.keys(t),o=a.length,s=i!==void 0?K6(n,i):n,l,c,u;for(r===void 0?(l=1,u=t[a[0]]):(l=0,u=r);l<o;l++)c=a[l],u=s(u,t[c],c,t);return u};function J6(e){for(var t=[],n=0,r=e.length;n<r;){var i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var a=e.charCodeAt(n++);(a&64512)==56320?t.push(((i&1023)<<10)+(a&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function vd(e){var t=J6(e);return t.length===1?t[0].toString(16):null}function X6(e,t){var n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function Yg(e){return Object.keys(e).reduce(function(t,n){var r=e[n],i=!!r.icon;return i?t[r.iconName]=r.icon:t[n]=r,t},{})}function yd(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,a=Yg(t);typeof nn.hooks.addPack=="function"&&!i?nn.hooks.addPack(e,Yg(t)):nn.styles[e]=_(_({},nn.styles[e]||{}),a),e==="fas"&&yd("fa",t)}var ys,xs,ws,Ei=nn.styles,Z6=nn.shims,eC=(ys={},Ye(ys,ye,Object.values(Co[ye])),Ye(ys,Ie,Object.values(Co[Ie])),ys),rm=null,L2={},_2={},I2={},M2={},z2={},tC=(xs={},Ye(xs,ye,Object.keys(ko[ye])),Ye(xs,Ie,Object.keys(ko[Ie])),xs);function nC(e){return~M6.indexOf(e)}function rC(e,t){var n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!nC(i)?i:null}var D2=function(){var t=function(a){return Wu(Ei,function(o,s,l){return o[l]=Wu(s,a,{}),o},{})};L2=t(function(i,a,o){if(a[3]&&(i[a[3]]=o),a[2]){var s=a[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){i[l.toString(16)]=o})}return i}),_2=t(function(i,a,o){if(i[o]=o,a[2]){var s=a[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){i[l]=o})}return i}),z2=t(function(i,a,o){var s=a[2];return i[o]=o,s.forEach(function(l){i[l]=o}),i});var n="far"in Ei||$.autoFetchSvg,r=Wu(Z6,function(i,a){var o=a[0],s=a[1],l=a[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(i.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:s,iconName:l}),i},{names:{},unicodes:{}});I2=r.names,M2=r.unicodes,rm=zc($.styleDefault,{family:$.familyDefault})};F6(function(e){rm=zc(e.styleDefault,{family:$.familyDefault})});D2();function im(e,t){return(L2[e]||{})[t]}function iC(e,t){return(_2[e]||{})[t]}function Dr(e,t){return(z2[e]||{})[t]}function $2(e){return I2[e]||{prefix:null,iconName:null}}function aC(e){var t=M2[e],n=im("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function wr(){return rm}var am=function(){return{prefix:null,iconName:null,rest:[]}};function zc(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?ye:n,i=ko[r][e],a=Eo[r][e]||Eo[r][i],o=e in nn.styles?e:null;return a||o||null}var qg=(ws={},Ye(ws,ye,Object.keys(Co[ye])),Ye(ws,Ie,Object.keys(Co[Ie])),ws);function Dc(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,a=(t={},Ye(t,ye,"".concat($.cssPrefix,"-").concat(ye)),Ye(t,Ie,"".concat($.cssPrefix,"-").concat(Ie)),t),o=null,s=ye;(e.includes(a[ye])||e.some(function(c){return qg[ye].includes(c)}))&&(s=ye),(e.includes(a[Ie])||e.some(function(c){return qg[Ie].includes(c)}))&&(s=Ie);var l=e.reduce(function(c,u){var d=rC($.cssPrefix,u);if(Ei[u]?(u=eC[s].includes(u)?O6[s][u]:u,o=u,c.prefix=u):tC[s].indexOf(u)>-1?(o=u,c.prefix=zc(u,{family:s})):d?c.iconName=d:u!==$.replacementClass&&u!==a[ye]&&u!==a[Ie]&&c.rest.push(u),!i&&c.prefix&&c.iconName){var p=o==="fa"?$2(c.iconName):{},v=Dr(c.prefix,c.iconName);p.prefix&&(o=null),c.iconName=p.iconName||v||c.iconName,c.prefix=p.prefix||c.prefix,c.prefix==="far"&&!Ei.far&&Ei.fas&&!$.autoFetchSvg&&(c.prefix="fas")}return c},am());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===Ie&&(Ei.fass||$.autoFetchSvg)&&(l.prefix="fass",l.iconName=Dr(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=wr()||"fas"),l}var oC=function(){function e(){y6(this,e),this.definitions={}}return x6(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=_(_({},n.definitions[s]||{}),o[s]),yd(s,o[s]);var l=Co[ye][s];l&&yd(l,o[s]),D2()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(a){var o=i[a],s=o.prefix,l=o.iconName,c=o.icon,u=c[2];n[s]||(n[s]={}),u.length>0&&u.forEach(function(d){typeof d=="string"&&(n[s][d]=c)}),n[s][l]=c}),n}}]),e}(),Qg=[],Ci={},Mi={},sC=Object.keys(Mi);function lC(e,t){var n=t.mixoutsTo;return Qg=e,Ci={},Object.keys(Mi).forEach(function(r){sC.indexOf(r)===-1&&delete Mi[r]}),Qg.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),Ll(i[o])==="object"&&Object.keys(i[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=i[o][s]})}),r.hooks){var a=r.hooks();Object.keys(a).forEach(function(o){Ci[o]||(Ci[o]=[]),Ci[o].push(a[o])})}r.provides&&r.provides(Mi)}),n}function xd(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var a=Ci[e]||[];return a.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function ei(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=Ci[e]||[];i.forEach(function(a){a.apply(null,n)})}function Mn(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Mi[e]?Mi[e].apply(null,t):void 0}function wd(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||wr();if(t)return t=Dr(n,t)||t,Gg(F2.definitions,n,t)||Gg(nn.styles,n,t)}var F2=new oC,cC=function(){$.autoReplaceSvg=!1,$.observeMutations=!1,ei("noAuto")},uC={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Un?(ei("beforeI2svg",t),Mn("pseudoElements2svg",t),Mn("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;$.autoReplaceSvg===!1&&($.autoReplaceSvg=!0),$.observeMutations=!0,Q6(function(){dC({autoReplaceSvgRoot:n}),ei("watch",t)})}},fC={icon:function(t){if(t===null)return null;if(Ll(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Dr(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=zc(t[0]);return{prefix:r,iconName:Dr(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat($.cssPrefix,"-"))>-1||t.match(R6))){var i=Dc(t.split(" "),{skipLookups:!0});return{prefix:i.prefix||wr(),iconName:Dr(i.prefix,i.iconName)||i.iconName}}if(typeof t=="string"){var a=wr();return{prefix:a,iconName:Dr(a,t)||t}}}},It={noAuto:cC,config:$,dom:uC,parse:fC,library:F2,findIconDefinition:wd,toHtml:Uo},dC=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?we:n;(Object.keys(nn.styles).length>0||$.autoFetchSvg)&&Un&&$.autoReplaceSvg&&It.dom.i2svg({node:r})};function $c(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Uo(r)})}}),Object.defineProperty(e,"node",{get:function(){if(Un){var r=we.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function pC(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,a=e.styles,o=e.transform;if(nm(o)&&n.found&&!r.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};i.style=Mc(_(_({},a),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function mC(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,a=e.symbol,o=a===!0?"".concat(t,"-").concat($.cssPrefix,"-").concat(n):a;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:_(_({},i),{},{id:o}),children:r}]}]}function om(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,a=e.iconName,o=e.transform,s=e.symbol,l=e.title,c=e.maskId,u=e.titleId,d=e.extra,p=e.watchable,v=p===void 0?!1:p,h=r.found?r:n,y=h.width,b=h.height,g=i==="fak",m=[$.replacementClass,a?"".concat($.cssPrefix,"-").concat(a):""].filter(function(z){return d.classes.indexOf(z)===-1}).filter(function(z){return z!==""||!!z}).concat(d.classes).join(" "),w={children:[],attributes:_(_({},d.attributes),{},{"data-prefix":i,"data-icon":a,class:m,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(y," ").concat(b)})},x=g&&!~d.classes.indexOf("fa-fw")?{width:"".concat(y/b*16*.0625,"em")}:{};v&&(w.attributes[Zr]=""),l&&(w.children.push({tag:"title",attributes:{id:w.attributes["aria-labelledby"]||"title-".concat(u||Po())},children:[l]}),delete w.attributes.title);var S=_(_({},w),{},{prefix:i,iconName:a,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:_(_({},x),d.styles)}),P=r.found&&n.found?Mn("generateAbstractMask",S)||{children:[],attributes:{}}:Mn("generateAbstractIcon",S)||{children:[],attributes:{}},C=P.children,O=P.attributes;return S.children=C,S.attributes=O,s?mC(S):pC(S)}function Kg(e){var t=e.content,n=e.width,r=e.height,i=e.transform,a=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,c=_(_(_({},o.attributes),a?{title:a}:{}),{},{class:o.classes.join(" ")});l&&(c[Zr]="");var u=_({},o.styles);nm(i)&&(u.transform=W6({transform:i,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);var d=Mc(u);d.length>0&&(c.style=d);var p=[];return p.push({tag:"span",attributes:c,children:[t]}),a&&p.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),p}function hC(e){var t=e.content,n=e.title,r=e.extra,i=_(_(_({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),a=Mc(r.styles);a.length>0&&(i.style=a);var o=[];return o.push({tag:"span",attributes:i,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Gu=nn.styles;function bd(e){var t=e[0],n=e[1],r=e.slice(4),i=Kp(r,1),a=i[0],o=null;return Array.isArray(a)?o={tag:"g",attributes:{class:"".concat($.cssPrefix,"-").concat(zr.GROUP)},children:[{tag:"path",attributes:{class:"".concat($.cssPrefix,"-").concat(zr.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat($.cssPrefix,"-").concat(zr.PRIMARY),fill:"currentColor",d:a[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:t,height:n,icon:o}}var gC={found:!1,width:512,height:512};function vC(e,t){!j2&&!$.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Sd(e,t){var n=t;return t==="fa"&&$.styleDefault!==null&&(t=wr()),new Promise(function(r,i){if(Mn("missingIconAbstract"),n==="fa"){var a=$2(e)||{};e=a.iconName||e,t=a.prefix||t}if(e&&t&&Gu[t]&&Gu[t][e]){var o=Gu[t][e];return r(bd(o))}vC(e,t),r(_(_({},gC),{},{icon:$.showMissingIcons&&e?Mn("missingIconAbstract")||{}:{}}))})}var Jg=function(){},kd=$.measurePerformance&&ds&&ds.mark&&ds.measure?ds:{mark:Jg,measure:Jg},La='FA "6.4.2"',yC=function(t){return kd.mark("".concat(La," ").concat(t," begins")),function(){return U2(t)}},U2=function(t){kd.mark("".concat(La," ").concat(t," ends")),kd.measure("".concat(La," ").concat(t),"".concat(La," ").concat(t," begins"),"".concat(La," ").concat(t," ends"))},sm={begin:yC,end:U2},Us=function(){};function Xg(e){var t=e.getAttribute?e.getAttribute(Zr):null;return typeof t=="string"}function xC(e){var t=e.getAttribute?e.getAttribute(Xp):null,n=e.getAttribute?e.getAttribute(Zp):null;return t&&n}function wC(e){return e&&e.classList&&e.classList.contains&&e.classList.contains($.replacementClass)}function bC(){if($.autoReplaceSvg===!0)return Bs.replace;var e=Bs[$.autoReplaceSvg];return e||Bs.replace}function SC(e){return we.createElementNS("http://www.w3.org/2000/svg",e)}function kC(e){return we.createElement(e)}function B2(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?SC:kC:n;if(typeof e=="string")return we.createTextNode(e);var i=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){i.setAttribute(o,e.attributes[o])});var a=e.children||[];return a.forEach(function(o){i.appendChild(B2(o,{ceFn:r}))}),i}function EC(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Bs={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(i){n.parentNode.insertBefore(B2(i),n)}),n.getAttribute(Zr)===null&&$.keepOriginalSource){var r=we.createComment(EC(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~tm(n).indexOf($.replacementClass))return Bs.replace(t);var i=new RegExp("".concat($.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var a=r[0].attributes.class.split(" ").reduce(function(s,l){return l===$.replacementClass||l.match(i)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=a.toSvg.join(" "),a.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",a.toNode.join(" "))}var o=r.map(function(s){return Uo(s)}).join(`
`);n.setAttribute(Zr,""),n.innerHTML=o}};function Zg(e){e()}function H2(e,t){var n=typeof t=="function"?t:Us;if(e.length===0)n();else{var r=Zg;$.mutateApproach===N6&&(r=xr.requestAnimationFrame||Zg),r(function(){var i=bC(),a=sm.begin("mutate");e.map(i),a(),n()})}}var lm=!1;function V2(){lm=!0}function Ed(){lm=!1}var Il=null;function e0(e){if(Hg&&$.observeMutations){var t=e.treeCallback,n=t===void 0?Us:t,r=e.nodeCallback,i=r===void 0?Us:r,a=e.pseudoElementsCallback,o=a===void 0?Us:a,s=e.observeMutationsRoot,l=s===void 0?we:s;Il=new Hg(function(c){if(!lm){var u=wr();ca(c).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!Xg(d.addedNodes[0])&&($.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&$.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&Xg(d.target)&&~I6.indexOf(d.attributeName))if(d.attributeName==="class"&&xC(d.target)){var p=Dc(tm(d.target)),v=p.prefix,h=p.iconName;d.target.setAttribute(Xp,v||u),h&&d.target.setAttribute(Zp,h)}else wC(d.target)&&i(d.target)})}}),Un&&Il.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function CC(){Il&&Il.disconnect()}function jC(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,i){var a=i.split(":"),o=a[0],s=a.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function PC(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",i=Dc(tm(e));return i.prefix||(i.prefix=wr()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=iC(i.prefix,e.innerText)||im(i.prefix,vd(e.innerText))),!i.iconName&&$.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function NC(e){var t=ca(e.attributes).reduce(function(i,a){return i.name!=="class"&&i.name!=="style"&&(i[a.name]=a.value),i},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return $.autoA11y&&(n?t["aria-labelledby"]="".concat($.replacementClass,"-title-").concat(r||Po()):(t["aria-hidden"]="true",t.focusable="false")),t}function AC(){return{iconName:null,title:null,titleId:null,prefix:null,transform:mn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function t0(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=PC(e),r=n.iconName,i=n.prefix,a=n.rest,o=NC(e),s=xd("parseNodeAttributes",{},e),l=t.styleParser?jC(e):[];return _({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:mn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:l,attributes:o}},s)}var OC=nn.styles;function W2(e){var t=$.autoReplaceSvg==="nest"?t0(e,{styleParser:!1}):t0(e);return~t.extra.classes.indexOf(P2)?Mn("generateLayersText",e,t):Mn("generateSvgReplacementMutation",e,t)}var br=new Set;em.map(function(e){br.add("fa-".concat(e))});Object.keys(ko[ye]).map(br.add.bind(br));Object.keys(ko[Ie]).map(br.add.bind(br));br=$o(br);function n0(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Un)return Promise.resolve();var n=we.documentElement.classList,r=function(d){return n.add("".concat(Vg,"-").concat(d))},i=function(d){return n.remove("".concat(Vg,"-").concat(d))},a=$.autoFetchSvg?br:em.map(function(u){return"fa-".concat(u)}).concat(Object.keys(OC));a.includes("fa")||a.push("fa");var o=[".".concat(P2,":not([").concat(Zr,"])")].concat(a.map(function(u){return".".concat(u,":not([").concat(Zr,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=ca(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),i("complete");else return Promise.resolve();var l=sm.begin("onTree"),c=s.reduce(function(u,d){try{var p=W2(d);p&&u.push(p)}catch(v){j2||v.name==="MissingIcon"&&console.error(v)}return u},[]);return new Promise(function(u,d){Promise.all(c).then(function(p){H2(p,function(){r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),l(),u()})}).catch(function(p){l(),d(p)})})}function RC(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;W2(e).then(function(n){n&&H2([n],t)})}function TC(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:wd(t||{}),i=n.mask;return i&&(i=(i||{}).icon?i:wd(i||{})),e(r,_(_({},n),{},{mask:i}))}}var LC=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?mn:r,a=n.symbol,o=a===void 0?!1:a,s=n.mask,l=s===void 0?null:s,c=n.maskId,u=c===void 0?null:c,d=n.title,p=d===void 0?null:d,v=n.titleId,h=v===void 0?null:v,y=n.classes,b=y===void 0?[]:y,g=n.attributes,m=g===void 0?{}:g,w=n.styles,x=w===void 0?{}:w;if(t){var S=t.prefix,P=t.iconName,C=t.icon;return $c(_({type:"icon"},t),function(){return ei("beforeDOMElementCreation",{iconDefinition:t,params:n}),$.autoA11y&&(p?m["aria-labelledby"]="".concat($.replacementClass,"-title-").concat(h||Po()):(m["aria-hidden"]="true",m.focusable="false")),om({icons:{main:bd(C),mask:l?bd(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:S,iconName:P,transform:_(_({},mn),i),symbol:o,title:p,maskId:u,titleId:h,extra:{attributes:m,styles:x,classes:b}})})}},_C={mixout:function(){return{icon:TC(LC)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=n0,n.nodeCallback=RC,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,i=r===void 0?we:r,a=n.callback,o=a===void 0?function(){}:a;return n0(i,o)},t.generateSvgReplacementMutation=function(n,r){var i=r.iconName,a=r.title,o=r.titleId,s=r.prefix,l=r.transform,c=r.symbol,u=r.mask,d=r.maskId,p=r.extra;return new Promise(function(v,h){Promise.all([Sd(i,s),u.iconName?Sd(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(y){var b=Kp(y,2),g=b[0],m=b[1];v([n,om({icons:{main:g,mask:m},prefix:s,iconName:i,transform:l,symbol:c,maskId:d,title:a,titleId:o,extra:p,watchable:!0})])}).catch(h)})},t.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,a=n.main,o=n.transform,s=n.styles,l=Mc(s);l.length>0&&(i.style=l);var c;return nm(o)&&(c=Mn("generateAbstractTransformGrouping",{main:a,transform:o,containerWidth:a.width,iconWidth:a.width})),r.push(c||a.icon),{children:r,attributes:i}}}},IC={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,a=i===void 0?[]:i;return $c({type:"layer"},function(){ei("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat($.cssPrefix,"-layers")].concat($o(a)).join(" ")},children:o}]})}}}},MC={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,a=i===void 0?null:i,o=r.classes,s=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,u=r.styles,d=u===void 0?{}:u;return $c({type:"counter",content:n},function(){return ei("beforeDOMElementCreation",{content:n,params:r}),hC({content:n.toString(),title:a,extra:{attributes:c,styles:d,classes:["".concat($.cssPrefix,"-layers-counter")].concat($o(s))}})})}}}},zC={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,a=i===void 0?mn:i,o=r.title,s=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,u=r.attributes,d=u===void 0?{}:u,p=r.styles,v=p===void 0?{}:p;return $c({type:"text",content:n},function(){return ei("beforeDOMElementCreation",{content:n,params:r}),Kg({content:n,transform:_(_({},mn),a),title:s,extra:{attributes:d,styles:v,classes:["".concat($.cssPrefix,"-layers-text")].concat($o(c))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var i=r.title,a=r.transform,o=r.extra,s=null,l=null;if(k2){var c=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();s=u.width/c,l=u.height/c}return $.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Kg({content:n.innerHTML,width:s,height:l,transform:a,title:i,extra:o,watchable:!0})])}}},DC=new RegExp('"',"ug"),r0=[1105920,1112319];function $C(e){var t=e.replace(DC,""),n=X6(t,0),r=n>=r0[0]&&n<=r0[1],i=t.length===2?t[0]===t[1]:!1;return{value:vd(i?t[0]:t),isSecondary:r||i}}function i0(e,t){var n="".concat(P6).concat(t.replace(":","-"));return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var a=ca(e.children),o=a.filter(function(C){return C.getAttribute(gd)===t})[0],s=xr.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(T6),c=s.getPropertyValue("font-weight"),u=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&u!=="none"&&u!==""){var d=s.getPropertyValue("content"),p=~["Sharp"].indexOf(l[2])?Ie:ye,v=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Eo[p][l[2].toLowerCase()]:L6[p][c],h=$C(d),y=h.value,b=h.isSecondary,g=l[0].startsWith("FontAwesome"),m=im(v,y),w=m;if(g){var x=aC(y);x.iconName&&x.prefix&&(m=x.iconName,v=x.prefix)}if(m&&!b&&(!o||o.getAttribute(Xp)!==v||o.getAttribute(Zp)!==w)){e.setAttribute(n,w),o&&e.removeChild(o);var S=AC(),P=S.extra;P.attributes[gd]=t,Sd(m,v).then(function(C){var O=om(_(_({},S),{},{icons:{main:C,mask:am()},prefix:v,iconName:w,extra:P,watchable:!0})),z=we.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(z,e.firstChild):e.appendChild(z),z.outerHTML=O.map(function(L){return Uo(L)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function FC(e){return Promise.all([i0(e,"::before"),i0(e,"::after")])}function UC(e){return e.parentNode!==document.head&&!~A6.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(gd)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function a0(e){if(Un)return new Promise(function(t,n){var r=ca(e.querySelectorAll("*")).filter(UC).map(FC),i=sm.begin("searchPseudoElements");V2(),Promise.all(r).then(function(){i(),Ed(),t()}).catch(function(){i(),Ed(),n()})})}var BC={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=a0,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?we:r;$.searchPseudoElements&&a0(i)}}},o0=!1,HC={mixout:function(){return{dom:{unwatch:function(){V2(),o0=!0}}}},hooks:function(){return{bootstrap:function(){e0(xd("mutationObserverCallbacks",{}))},noAuto:function(){CC()},watch:function(n){var r=n.observeMutationsRoot;o0?Ed():e0(xd("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},s0=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,i){var a=i.toLowerCase().split("-"),o=a[0],s=a.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},VC={mixout:function(){return{parse:{transform:function(n){return s0(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=s0(i)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,a=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(a/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),c="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),u="rotate(".concat(i.rotate," 0 0)"),d={transform:"".concat(l," ").concat(c," ").concat(u)},p={transform:"translate(".concat(o/2*-1," -256)")},v={outer:s,inner:d,path:p};return{tag:"g",attributes:_({},v.outer),children:[{tag:"g",attributes:_({},v.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:_(_({},r.icon.attributes),v.path)}]}]}}}},Yu={x:0,y:0,width:"100%",height:"100%"};function l0(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function WC(e){return e.tag==="g"?e.children:[e]}var GC={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),a=i?Dc(i.split(" ").map(function(o){return o.trim()})):am();return a.prefix||(a.prefix=wr()),n.mask=a,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,i=n.attributes,a=n.main,o=n.mask,s=n.maskId,l=n.transform,c=a.width,u=a.icon,d=o.width,p=o.icon,v=V6({transform:l,containerWidth:d,iconWidth:c}),h={tag:"rect",attributes:_(_({},Yu),{},{fill:"white"})},y=u.children?{children:u.children.map(l0)}:{},b={tag:"g",attributes:_({},v.inner),children:[l0(_({tag:u.tag,attributes:_(_({},u.attributes),v.path)},y))]},g={tag:"g",attributes:_({},v.outer),children:[b]},m="mask-".concat(s||Po()),w="clip-".concat(s||Po()),x={tag:"mask",attributes:_(_({},Yu),{},{id:m,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[h,g]},S={tag:"defs",children:[{tag:"clipPath",attributes:{id:w},children:WC(p)},x]};return r.push(S,{tag:"rect",attributes:_({fill:"currentColor","clip-path":"url(#".concat(w,")"),mask:"url(#".concat(m,")")},Yu)}),{children:r,attributes:i}}}},YC={provides:function(t){var n=!1;xr.matchMedia&&(n=xr.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:_(_({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=_(_({},a),{},{attributeName:"opacity"}),s={tag:"circle",attributes:_(_({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:_(_({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:_(_({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:_(_({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:_(_({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:_(_({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:_(_({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},qC={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),a=i===null?!1:i===""?!0:i;return n.symbol=a,n}}}},QC=[Y6,_C,IC,MC,zC,BC,HC,VC,GC,YC,qC];lC(QC,{mixoutsTo:It});It.noAuto;It.config;It.library;It.dom;var Cd=It.parse;It.findIconDefinition;It.toHtml;var KC=It.icon;It.layer;It.text;It.counter;var G2={exports:{}},JC="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",XC=JC,ZC=XC;function Y2(){}function q2(){}q2.resetWarningCache=Y2;var ej=function(){function e(r,i,a,o,s,l){if(l!==ZC){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:q2,resetWarningCache:Y2};return n.PropTypes=n,n};G2.exports=ej();var tj=G2.exports;const J=x0(tj);function c0(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function rr(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?c0(Object(n),!0).forEach(function(r){ji(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c0(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Ml(e){"@babel/helpers - typeof";return Ml=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ml(e)}function ji(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function nj(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function rj(e,t){if(e==null)return{};var n=nj(e,t),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function jd(e){return ij(e)||aj(e)||oj(e)||sj()}function ij(e){if(Array.isArray(e))return Pd(e)}function aj(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function oj(e,t){if(e){if(typeof e=="string")return Pd(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Pd(e,t)}}function Pd(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function sj(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function lj(e){var t,n=e.beat,r=e.fade,i=e.beatFade,a=e.bounce,o=e.shake,s=e.flash,l=e.spin,c=e.spinPulse,u=e.spinReverse,d=e.pulse,p=e.fixedWidth,v=e.inverse,h=e.border,y=e.listItem,b=e.flip,g=e.size,m=e.rotation,w=e.pull,x=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":a,"fa-shake":o,"fa-flash":s,"fa-spin":l,"fa-spin-reverse":u,"fa-spin-pulse":c,"fa-pulse":d,"fa-fw":p,"fa-inverse":v,"fa-border":h,"fa-li":y,"fa-flip":b===!0,"fa-flip-horizontal":b==="horizontal"||b==="both","fa-flip-vertical":b==="vertical"||b==="both"},ji(t,"fa-".concat(g),typeof g<"u"&&g!==null),ji(t,"fa-rotate-".concat(m),typeof m<"u"&&m!==null&&m!==0),ji(t,"fa-pull-".concat(w),typeof w<"u"&&w!==null),ji(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(x).map(function(S){return x[S]?S:null}).filter(function(S){return S})}function cj(e){return e=e-0,e===e}function Q2(e){return cj(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var uj=["style"];function fj(e){return e.charAt(0).toUpperCase()+e.slice(1)}function dj(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=Q2(n.slice(0,r)),a=n.slice(r+1).trim();return i.startsWith("webkit")?t[fj(i)]=a:t[i]=a,t},{})}function K2(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return K2(e,l)}),i=Object.keys(t.attributes||{}).reduce(function(l,c){var u=t.attributes[c];switch(c){case"class":l.attrs.className=u,delete t.attributes.class;break;case"style":l.attrs.style=dj(u);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?l.attrs[c.toLowerCase()]=u:l.attrs[Q2(c)]=u}return l},{attrs:{}}),a=n.style,o=a===void 0?{}:a,s=rj(n,uj);return i.attrs.style=rr(rr({},i.attrs.style),o),e.apply(void 0,[t.tag,rr(rr({},i.attrs),s)].concat(jd(r)))}var J2=!1;try{J2=!0}catch{}function pj(){if(!J2&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function u0(e){if(e&&Ml(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Cd.icon)return Cd.icon(e);if(e===null)return null;if(e&&Ml(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function qu(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?ji({},e,t):{}}var Ae=q.forwardRef(function(e,t){var n=e.icon,r=e.mask,i=e.symbol,a=e.className,o=e.title,s=e.titleId,l=e.maskId,c=u0(n),u=qu("classes",[].concat(jd(lj(e)),jd(a.split(" ")))),d=qu("transform",typeof e.transform=="string"?Cd.transform(e.transform):e.transform),p=qu("mask",u0(r)),v=KC(c,rr(rr(rr(rr({},u),d),p),{},{symbol:i,title:o,titleId:s,maskId:l}));if(!v)return pj("Could not find icon",c),null;var h=v.abstract,y={ref:t};return Object.keys(e).forEach(function(b){Ae.defaultProps.hasOwnProperty(b)||(y[b]=e[b])}),mj(h[0],y)});Ae.displayName="FontAwesomeIcon";Ae.propTypes={beat:J.bool,border:J.bool,beatFade:J.bool,bounce:J.bool,className:J.string,fade:J.bool,flash:J.bool,mask:J.oneOfType([J.object,J.array,J.string]),maskId:J.string,fixedWidth:J.bool,inverse:J.bool,flip:J.oneOf([!0,!1,"horizontal","vertical","both"]),icon:J.oneOfType([J.object,J.array,J.string]),listItem:J.bool,pull:J.oneOf(["right","left"]),pulse:J.bool,rotation:J.oneOf([0,90,180,270]),shake:J.bool,size:J.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:J.bool,spinPulse:J.bool,spinReverse:J.bool,symbol:J.oneOfType([J.bool,J.string]),title:J.string,titleId:J.string,transform:J.oneOfType([J.string,J.object]),swapOpacity:J.bool};Ae.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var mj=K2.bind(null,q.createElement),hj={prefix:"fas",iconName:"right-from-bracket",icon:[512,512,["sign-out-alt"],"f2f5","M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"]},gj={prefix:"fas",iconName:"lock",icon:[448,512,[128274],"f023","M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"]},vj={prefix:"fas",iconName:"pen-to-square",icon:[512,512,["edit"],"f044","M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"]},yj={prefix:"fas",iconName:"user",icon:[448,512,[128100,62144],"f007","M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"]},xj={prefix:"fas",iconName:"right-to-bracket",icon:[512,512,["sign-in-alt"],"f2f6","M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"]},wj={prefix:"fas",iconName:"phone",icon:[512,512,[128222,128379],"f095","M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"]},cm={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"]},bj={prefix:"fas",iconName:"clock",icon:[512,512,[128339,"clock-four"],"f017","M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"]},Sj={prefix:"fas",iconName:"download",icon:[512,512,[],"f019","M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"]},kj={prefix:"fas",iconName:"location-dot",icon:[384,512,["map-marker-alt"],"f3c5","M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"]},X2={prefix:"fas",iconName:"paper-plane",icon:[512,512,[61913],"f1d8","M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"]};const Z2=({forContacts:e})=>{const{english:t}=Q(n=>n.menu);return f.jsxs(f.Fragment,{children:[f.jsxs("div",{className:"contact",children:[f.jsx("div",{className:"icon-link",children:f.jsx(_e,{to:"https://www.google.com/maps/dir//Georgian+Vending+Group+%E2%80%A2+GVG,+Levan+Aleksidze+%236,+Tbilisi/@41.7204619,44.7232129,16.14z/data=!4m9!4m8!1m0!1m5!1m1!1s0x40440d4d840d72a7:0xbdb32e6078a6957d!2m2!1d44.7238335!2d41.7194497!3e0?entry=ttu",target:"_blank",children:f.jsx(Ae,{icon:kj,className:"icon"})})}),f.jsx("div",{className:"contact-info",children:e?f.jsx("h4",{children:t?"0186 Levan Aleksidze #6":"0186 ლევან ალექსიძის #6"}):f.jsx(_e,{className:"animated-contact-text",target:"_blank",to:"https://www.google.com/maps/dir//Georgian+Vending+Group+%E2%80%A2+GVG,+Levan+Aleksidze+%236,+Tbilisi/@41.7204619,44.7232129,16.14z/data=!4m9!4m8!1m0!1m5!1m1!1s0x40440d4d840d72a7:0xbdb32e6078a6957d!2m2!1d44.7238335!2d41.7194497!3e0?entry=ttu",children:t?"0186 Levan Aleksidze #6":"0186 ლევან ალექსიძის #6"})})]}),f.jsxs("div",{className:"contact",children:[f.jsx("div",{className:"icon-link",children:f.jsx(_e,{to:"https://wa.me/995599000041",target:"_blank",children:f.jsx(Ae,{icon:wj,className:"icon"})})}),f.jsx("div",{className:"contact-info",children:e?f.jsxs("h4",{children:["+995 599 00 00 41 ",f.jsx("br",{})," ",t?"Hotline":"ცხელი ხაზი"," ","+995 591 52 55 25"]}):f.jsx(_e,{className:"animated-contact-text",target:"_blank",to:"https://wa.me/995599000041",children:"+995 599 00 00 41"})})]}),!e&&f.jsx("div",{className:"contact-info",children:f.jsxs(_e,{className:"animated-contact-text",children:[t?"Hotline +995 591 52 55 25":"ცხელი ხაზი +995 591 52 55 25"," "]})}),f.jsxs("div",{className:"contact",children:[f.jsx("div",{className:"icon-link",children:f.jsx(_e,{to:"/service",children:f.jsx(Ae,{icon:bj,className:"icon"})})}),f.jsx("div",{className:"contact-info",children:e?f.jsxs("h4",{children:["10:00 - 18:00 ",t?"Daily":"ყოველდღე"]}):f.jsxs(_e,{to:"service",className:!e&&"animated-contact-text",children:["10:00 - 18:00 ",t?"Daily":"ყოველდღე "]})})]}),f.jsxs("div",{className:"contact",children:[f.jsx("div",{className:"icon-link",children:f.jsx(pt,{to:"/contacts",children:f.jsx(Ae,{icon:cm,className:"icon"})})}),f.jsx("div",{className:"contact-info",children:e?f.jsx("h4",{className:"under-text",children:"office@geovending.ge"}):f.jsx(pt,{className:"animated-contact-text under-text",target:"_blank",to:"/contacts",children:"office@geovending.ge"})})]})]})};var Ej={prefix:"far",iconName:"file-pdf",icon:[512,512,[],"f1c1","M64 464H96v48H64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0H229.5c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3V288H336V160H256c-17.7 0-32-14.3-32-32V48H64c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16zM176 352h32c30.9 0 56 25.1 56 56s-25.1 56-56 56H192v32c0 8.8-7.2 16-16 16s-16-7.2-16-16V448 368c0-8.8 7.2-16 16-16zm32 80c13.3 0 24-10.7 24-24s-10.7-24-24-24H192v48h16zm96-80h32c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H304c-8.8 0-16-7.2-16-16V368c0-8.8 7.2-16 16-16zm32 128c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H320v96h16zm80-112c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16s-7.2 16-16 16H448v32h32c8.8 0 16 7.2 16 16s-7.2 16-16 16H448v48c0 8.8-7.2 16-16 16s-16-7.2-16-16V432 368z"]},Cj={prefix:"far",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"]};const Hs=tt("userSlice/subscribeEmail",async({email:e})=>{try{const t=await He.post("/user/subscribe-email",{email:e});Ce(!0,t.data.msg);return}catch(t){throw Ce(!1,"Subscription failed, try again later..."),t}}),Vs=tt("userSlice/sendMessage",async({fullName:e,email:t,message:n})=>{try{const r=await He.post("/user/user-message",{name:e,email:t,message:n});Ce(!0,r.data.msg)}catch{Ce(!1,"There was an error try again later...")}}),Ws=tt("userSlice/loginUser",async({email:e,password:t})=>{try{const n=await He.post("/auth/login",{email:e,password:t});return Ce(!0,`Welcome ${n.data.user.name}`),P5(n.data.user),{data:n.data.user}}catch(n){throw Ce(!1,n.response.data.msg),n}}),Ja=tt("userSlice/logoutUser",async()=>{try{const e=await He.delete("/auth/logout");Ce(!0,"Logged out"),f2()}catch(e){throw e}}),ex=tt("userSlice/showMeUser",async()=>{try{await He.get("/auth/showMe");return}catch(e){const t=d2(),n=t.userId;throw t&&(f2(),await He.delete("/auth/autologout",{userId:n})),e}}),jj={user:d2().role,name:"",userId:"",isLoading:!1},Pj=Nc({name:"userSlice",initialState:jj,reducers:{},extraReducers:e=>{e.addCase(Hs.pending,t=>{t.isLoading=!0}),e.addCase(Hs.fulfilled,(t,n)=>{t.isLoading=!1}),e.addCase(Hs.rejected,t=>{t.isLoading=!1}),e.addCase(Vs.pending,t=>{t.isLoading=!0}),e.addCase(Vs.fulfilled,(t,n)=>{t.isLoading=!1}),e.addCase(Vs.rejected,t=>{t.isLoading=!1}),e.addCase(Ws.pending,t=>{t.isLoading=!0}),e.addCase(Ws.fulfilled,(t,n)=>{const{name:r,role:i,userId:a}=n.payload.data;t.user=i,t.name=r,t.userId=a,t.isLoading=!1}),e.addCase(Ws.rejected,t=>{t.isLoading=!1}),e.addCase(Ja.pending,t=>{t.isLoading=!0}),e.addCase(Ja.fulfilled,t=>{t.user="",t.isLoading=!1}),e.addCase(Ja.rejected,t=>{t.isLoading=!1}),e.addCase(ex.rejected,t=>{t.isLoading=!1,t.user=""})}}),Nj=Pj.reducer,Aj=()=>{fbq("trackCustom","PageViewHome")},Oj=()=>{fbq("trackCustom","PageViewVending")},Rj=()=>{fbq("trackCustom","PageViewCoffee")},Tj=()=>{fbq("trackCustom","PageViewSnacks")},Lj=()=>{fbq("trackCustom","PageViewService")},_j=(e,t)=>{fbq("trackCustom","interested",{content_type:e,content_name:t})},Ij=e=>{const n=[...e].filter(r=>r!=="@").join("");fbq("trackCustom","subscribed",{content_type:"Subscribe-event",content_name:n})},Mj=()=>{const{isLoading:e}=Q(o=>o.user),{english:t}=Q(o=>o.menu),[n,r]=k.useState({email:""}),i=ce(),a=o=>{o.preventDefault(),Ij(n.email),i(Hs({email:n.email}))};return f.jsx("div",{className:"subscribe",children:f.jsx("div",{className:"subscribe-container",children:f.jsxs("form",{children:[f.jsxs("div",{className:"subscribe-text",children:[f.jsx("input",{placeholder:t?"Email...":"მეილი",className:"subscribe-input",type:"email",required:!0,name:"email",id:"email",onChange:o=>Xe({setProductValues:r,e:o})}),f.jsx("label",{htmlFor:"email",children:f.jsx(Ae,{className:"letterbox",icon:Cj})})]}),f.jsx("div",{className:"underline subscribe-underline"}),f.jsx("button",{onClick:a,type:"submit",className:"btn subscribe-btn",disabled:e,children:t?"Subscribe":"გამოწერა"})]})})})};var zj={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]},Dj={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]},$j={prefix:"fab",iconName:"facebook",icon:[512,512,[62e3],"f09a","M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"]};const Fj=()=>{const e=ce(),t=_o(),{user:n}=Q(s=>s.user),{english:r}=Q(s=>s.menu),i=new Date().getFullYear(),a=!1,o=()=>{e(Ja()),t("/")};return f.jsx(g6,{children:f.jsxs("div",{className:"footer-container",children:[f.jsxs("div",{className:"contacts-container",children:[f.jsx(Z2,{forContacts:a}),f.jsxs("div",{className:"logos-container",children:[f.jsx("div",{className:"logo",children:f.jsx(_e,{to:"https://www.facebook.com/geovending",className:"logo-icon",target:"_blank",children:f.jsx(Ae,{icon:$j})})}),f.jsx("div",{className:"logo",children:f.jsx(_e,{to:"https://www.instagram.com/georgianvendinggroup/",className:"logo-icon",target:"_blank",children:f.jsx(Ae,{icon:Dj})})}),f.jsx("div",{className:"logo",children:f.jsx(_e,{to:"https://ge.linkedin.com/in/georgian-vending-group-9a3126291",className:"logo-icon",target:"_blank",children:f.jsx(Ae,{icon:zj})})}),f.jsx("div",{className:"logo authorization",children:n?f.jsx(pt,{className:"logo-icon",onClick:o,children:f.jsx(Ae,{icon:hj})}):f.jsx(pt,{to:"/login",className:"logo-icon",children:f.jsx(Ae,{icon:xj})})})]})]}),f.jsx("div",{className:"pages-container",children:f.jsxs("ul",{children:[Fy.map(s=>f.jsx(pt,{to:s.url,children:r?s.text:s.textGe},s.id)),Yk.map((s,l)=>f.jsx(pt,{to:s.to,children:r?s.text:s.textGe},l))]})}),f.jsx(Mj,{}),f.jsx("div",{className:"big-underline"}),f.jsxs("div",{className:"copy-text-logo",children:[f.jsx("div",{className:"footer-img",children:f.jsx("img",{srcSet:v6,alt:""})}),f.jsx("div",{className:"footer-copy-text",children:f.jsxs("h4",{children:["© ",i," Georgian Vending Group"]})})]})]})})},Uj=({url:e,text:t})=>{const n=ce(),r=a=>{const o=a.target.getBoundingClientRect(),s=(o.left+o.right)/2;n(m2(s))},i=()=>{n(h2())};return f.jsx(pt,{onMouseOver:r,onMouseLeave:i,to:e,children:t})},Bj=()=>{const{submenuPages:e,isSubmenuOpen:t,submenuCenter:n,english:r}=Q(l=>l.menu),i=n-50,a=ce(),o=l=>{a(m2())},s=()=>{a(h2())};return f.jsx("ul",{className:t?"submenu open-submenu":"submenu",style:{left:i},onMouseOver:o,onMouseLeave:s,children:e.map((l,c)=>{const{name:u,to:d,nameGe:p}=l;return f.jsx(pt,{to:d,children:r?u:p},c)})})};var tx={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},f0=q.createContext&&q.createContext(tx),mr=globalThis&&globalThis.__assign||function(){return mr=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},mr.apply(this,arguments)},Hj=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function nx(e){return e&&e.map(function(t,n){return q.createElement(t.tag,mr({key:n},t.attr),nx(t.child))})}function Bn(e){return function(t){return q.createElement(Vj,mr({attr:mr({},e.attr)},t),nx(e.child))}}function Vj(e){var t=function(n){var r=e.attr,i=e.size,a=e.title,o=Hj(e,["attr","size","title"]),s=i||n.size||"1em",l;return n.className&&(l=n.className),e.className&&(l=(l?l+" ":"")+e.className),q.createElement("svg",mr({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:l,style:mr(mr({color:e.color||n.color},n.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),a&&q.createElement("title",null,a),e.children)};return f0!==void 0?q.createElement(f0.Consumer,null,function(n){return t(n)}):t(tx)}function Wj(e){return Bn({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"}}]})(e)}function _a(e){return Bn({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"}}]})(e)}function Gj(e){return Bn({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"}}]})(e)}function Yj(e){return Bn({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"}}]})(e)}function qj(e){return Bn({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"}}]})(e)}function Qj(e){return Bn({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"}}]})(e)}function Kj(e){return Bn({tag:"svg",attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"}}]})(e)}const Jj=4,Vr=tt("firstSlice/fetchProducts",async({productsType:e},t)=>{try{const{page:n,search:r,sort:i}=t.getState().products;return{data:(await He.get(`/products?productsType=${e}&limit=${Jj}&page=${n}&sort=${i}&search=${r}`)).data,productsType:e}}catch(n){throw n}}),Gs=tt("firstSlice/fetchInstagram",async()=>{try{return{data:(await He.get("/products/instagram")).data}}catch(e){throw e}}),Xj=tt("firstSlice/submitLike",async e=>{try{await He.post(`/products/${e}`),Ce(!0,"Submitted");return}catch(t){throw t}}),Zj={backgroundIsActive:!1,activeProduct:{},productsType:"vending",search:"",sort:"newest",numOfPages:0,numOfHits:0,page:1,isLoading:!1,editing:!1,products:[],error:!1,instagramProducts:[],instagramLoading:!1,instagramError:!1},rx=Nc({name:"firstSlice",initialState:Zj,reducers:{setBackgroundIsActive:(e,t)=>({...e,backgroundIsActive:!0}),closeBackgroundIsActive:e=>({...e,backgroundIsActive:!1}),setActiveProduct:(e,t)=>({...e,activeProduct:t.payload}),changePage:(e,t)=>({...e,page:t.payload}),changeSort:(e,t)=>({...e,sort:t.payload,page:1}),searchProduct:(e,t)=>({...e,search:t.payload,page:1})},extraReducers:e=>{e.addCase(Vr.pending,t=>{t.isLoading=!0}),e.addCase(Vr.fulfilled,(t,n)=>{const{data:r,productsType:i}=n.payload,{products:a,numOfHits:o,numOfPages:s}=r;return{...t,error:!1,isLoading:!1,products:a,numOfPages:s,numOfHits:o,productsType:i}}),e.addCase(Vr.rejected,t=>{t.isLoading=!1,t.error=!0}),e.addCase(Gs.pending,t=>{t.instagramLoading=!0}),e.addCase(Gs.fulfilled,(t,n)=>{const{instagramData:r}=n.payload.data;t.instagramProducts=r,t.instagramLoading=!1}),e.addCase(Gs.rejected,t=>{t.instagramLoading=!1,t.instagramError=!0})}}),{setBackgroundIsActive:e8,closeBackgroundIsActive:t8,setActiveProduct:n8,changePage:Bo,changeSort:r8,searchProduct:d0}=rx.actions,i8=rx.reducer,a8=()=>{const[e,t]=k.useState({text:""}),{productsType:n}=Q(c=>c.products),r=ce(),i=_o();let a;const o=(c,u)=>{clearTimeout(a),a=setTimeout(c,u)},s=()=>{clearTimeout(a),r(d0(e.text)),i(n!=="service"?`/products/${n}`:"/service")},l=c=>{t({text:c.target.value}),o(()=>{r(d0(c.target.value))},1e3)};return f.jsxs("div",{className:"search-bar",children:[f.jsx("input",{type:"text",onChange:l,name:"text",placeholder:`${n}...`,value:e.text}),f.jsx("button",{onClick:s,type:"button",children:f.jsx(Qj,{})})]})},ix=()=>{const{english:e}=Q(n=>n.menu),t=ce();return f.jsxs("span",{className:"language",onClick:()=>t(c6()),children:[f.jsx("h5",{className:`${!e&&"active-language"} language-text`,children:"ქარ"}),"|",f.jsx("h5",{className:`${e&&"active-language"} language-text`,children:"Eng"})]})},o8=qe.nav`
  background: var(--primary-white);
  /* Toggler */
  .nav-toggle {
    font-size: 1.7rem;
    color: var(--primary-black);
    background: transparent;
    border-color: transparent;
    transition: var(--transition);
    cursor: pointer;
  }
  .nav-toggle:hover {
    color: var(--clr-primary-1);
    transform: rotate(90deg);
  }
  /* end */
  /* Logo and Header */
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
  }
  .logo {
    height: 50px;
    width: 100px;
  }
  .logo img {
    height: 100%;
    width: 100%;
  }
  /* end */
  /* Links small */
  .links a {
    color: var(--primary-black);
    font-size: 1.15rem;
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    display: block;
    padding: 0.5rem 1rem;
    transition: var(--transition);
    text-transform: uppercase;
    font-weight: 300;
  }
  .links a:hover {
    background: var(--primary-Company-blue);
    color: var(--primary-white);
    padding-left: 1.5rem;
    cursor: pointer;
  }
  .links-container {
    height: 0;
    overflow: hidden;
    transition: var(--transition);
  }
  /* end */
  .nav-contacts {
    display: none;
  }
  @media screen and (min-width: 990px) {
    .nav-contacts {
      display: flex;
      align-items: center;
      justify-content: space-around;
      width: 100%;
      background: var(--primary-black);
      padding: 0.5rem;
      color: var(--primary-white);
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;
    }
    /* Adress and info */
    .nav-adress {
      display: flex;
      justify-content: space-around;
      width: 700px;
    }
    .nav-adress a{
      font-weight: 300;
    }
    .nav-adress a:hover {
      color: yellow;
    }
    /* end */
    /* Social icons and faq*/
    .nav-icons {
      width: 160px;
      height: 1.5rem;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
    }
    .faq{
      display: flex;
      align-items: flex-start;
      height: 1.5rem;
      width: 50px;
    }
    .faq p {
      font-size: 0.9rem;
      font-weight: 300;
      &:hover{
        color: yellow;
        transition: var(--transition);
      }
    }
    .social-icon {
      font-size: 1.25rem;
      &:hover {
        cursor: pointer;
        color: yellow;
        transition: var(--transition);
      }
    }

    /* end */
    /* Language */
    .language{ 
      display: flex;
      cursor: pointer;
    }
    .language-text{
      color: var(--primary-white);
      font-weight: 300;
    }
    .active-language{
      color: var(--primary-Company-red);
    }
    /* Language end */
    /* Search bar */
    .search-bar {
      overflow: visible;
      height: 3rem;
      display: flex;
      padding-left: 2rem;
      justify-content: center;
      height: 2rem;
      max-width: 25%;
      /* border: 2px solid red; */
    }
    .search-bar button {
      margin-left: 1rem;
      font-size: 1rem;
      cursor: pointer;
      background: none;
      border: none;
      color: var(--primary-white);
      transition: var(--transition);
    }
    .search-bar button:hover {
      color: var(--clr-primary-9);
      scale: 1.2;
      font-family: inherit;
    }
    .search-bar input {
      border: none;
      border-radius: 9px;
      height: 90%;
      width: 70%;
      font-size: 1.2rem;
      font-weight: 300;
      padding-left: 0.5rem;
    }
    /* end */
    /* logo and header */
    .logo {
      height: 100px;
      width: 240px;
    }
    .nav-center {
      max-width: 1700px;
      width: 95%;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      padding-left: 1rem;
      padding-right: 1rem;
    }
    .nav-header {
      width: 30%;
      padding: 0;
    }
    .nav-toggle {
      display: none;
    }
    /* end */
    /* Links */
    .links-container {
      height: auto !important;
      overflow: visible;
      width: 70%;
    }
    .links {
      display: flex;
      justify-content: space-evenly;
    }
    .links li {
      font-size: 0.9rem;
      color: var(--primary-Company-red);
    }
    .links a {
      font-size: 1.05rem;
      font-weight: 300;
      padding: 0;
    }
    .links a:hover {
      padding: 0;
      background: transparent;
      color: var(--primary-Company-red);
    }
    /* end */
    /* Submenu */
    .submenu {
      height: 0px;
      width: 100px;
      overflow: hidden;
      position: absolute;
      left: 1024px;
      background: var(--primary-black);
      color: var(--primary-white);
      text-transform: capitalize;
      list-style-type: none;
      display: flex;
      flex-direction: column;
      z-index: -1;
      font-size: 1.1rem;
    }
    .submenu a {
      cursor: pointer;
      padding-left: 0.2rem;
    }
    .submenu a:hover {
      background: var(--primary-white);
      color: var(--primary-black);
    }
    .open-submenu {
      height: auto;
      padding: 0.5rem;
      z-index: 10;
    }
    /* end */
  }
  @media screen and (min-width: 1230px) {
    .links a {
      font-size: 1.22rem;
    }
    .links-container {
      width: 60%;
    }
    .links{
      justify-content: space-around;
    }
  }
`,s8="/assets/gvglogo-174f35d2.jpg",l8=()=>{const{isNavbarOpen:e,english:t}=Q(s=>s.menu),{user:n}=Q(s=>s.user),r=ce(),i=k.useRef(null),a=k.useRef(null),o=()=>{r(l6())};return k.useEffect(()=>{const s=a.current.getBoundingClientRect().height;e?i.current.style.height=`${s}px`:i.current.style.height="0px"},[e]),f.jsxs(o8,{children:[f.jsxs("div",{className:"nav-center",children:[f.jsxs("div",{className:"nav-header",children:[f.jsx("button",{className:"nav-toggle",onClick:o,children:f.jsx(Yj,{})}),f.jsx("div",{className:"logo",children:f.jsx("img",{srcSet:s8,alt:""})})]}),f.jsxs("div",{ref:i,className:e?"links-container show-container":"links-container",children:[f.jsxs("ul",{className:"links",ref:a,children:[Fy.map(s=>{const{id:l,url:c,text:u,textGe:d,hoverTrigger:p}=s;return p?f.jsx("li",{children:f.jsx(Uj,{url:c,text:t?u:d},l)}):f.jsx("li",{children:f.jsx(pt,{to:c,children:t?u:d},l)})}),n&&f.jsx("li",{children:f.jsx(pt,{to:"admin",children:"Admin"})})]}),f.jsx(Bj,{})]})]}),f.jsxs("div",{className:"nav-contacts",children:[f.jsxs("div",{className:"nav-adress",children:[f.jsx("span",{children:f.jsx(_e,{to:"https://www.google.com/maps/dir//Georgian+Vending+Group+%E2%80%A2+GVG,+Levan+Aleksidze+%236,+Tbilisi/@41.7204619,44.7232129,16.14z/data=!4m9!4m8!1m0!1m5!1m1!1s0x40440d4d840d72a7:0xbdb32e6078a6957d!2m2!1d44.7238335!2d41.7194497!3e0?entry=ttu",target:"_blank",children:t?"0186 Levan Aleksidze #6":"0186 ლევან ალექსიძის #6"})}),f.jsx("span",{className:"number",children:f.jsx(_e,{target:"_blank",to:"https://wa.me/995599000041",children:"+ 995 599 00 00 41"})}),f.jsx("span",{children:f.jsx(pt,{to:"contacts",children:"Office@geovending.ge"})})]}),f.jsx(a8,{}),f.jsx("div",{className:"faq",children:f.jsx("span",{children:f.jsx(pt,{to:"/faq",children:f.jsx("p",{children:"FAQ"})})})}),f.jsxs("div",{className:"nav-icons",children:[f.jsx(ix,{}),f.jsx("span",{children:f.jsx(_e,{target:"_blank",to:"https://www.facebook.com/geovending",children:f.jsx(Wj,{className:"social-icon"})})}),f.jsx("span",{children:f.jsx(_e,{target:"_blank",to:"https://www.instagram.com/georgianvendinggroup/",children:f.jsx(_a,{className:"social-icon"})})}),f.jsx("span",{children:f.jsx(_e,{target:"_blank",to:"https://ge.linkedin.com/in/georgian-vending-group-9a3126291",children:f.jsx(Gj,{className:"social-icon"})})})]})]})]})},c8="/assets/snacks-9b41e9ec.jpg",u8="/assets/vending-7bd5e5c5.jpg",f8="/assets/coffee-31fa2dd3.jpg",d8=[{name:"Vending Machines",nameGe:"ხემსის აპარატები",url:u8,to:"vending"},{name:"Coffee Machines",nameGe:"ყავის აპარატები",url:f8,to:"coffee"},{name:"Snacks and ingredients",nameGe:"სნექის აპარატები",url:c8,to:"snacks-and-ingredients"}],p8=()=>{const{english:e}=Q(t=>t.menu);return f.jsx(f.Fragment,{children:f.jsx("div",{className:"categories",children:d8.map((t,n)=>{const{name:r,url:i,to:a,nameGe:o}=t;return f.jsxs("article",{className:"category",children:[f.jsx(pt,{to:a,children:f.jsx("img",{srcSet:i,alt:r})}),f.jsx("h2",{children:e?r:o})]},n)})})})},um=({tagsList:e})=>{const t=ce();let{sort:n}=Q(i=>i.products),{english:r}=Q(i=>i.menu);if(e)return f.jsx("div",{className:"tags",children:e.map(i=>{const{id:a,tag:o,tagGe:s}=i;return f.jsx("button",{className:o===n?"tags-btn btn selected":"tags-btn btn",onClick:()=>{t(r8(o))},children:f.jsx("h5",{children:r?o:s})},a)})})},Fc=()=>{const{products:e,error:t,numOfPages:n,page:r,productsType:i}=Q(s=>s.products),{english:a}=Q(s=>s.menu),o=ce();return t?f.jsx(f.Fragment,{children:f.jsx("h2",{className:"product-error",children:"There has been an error, please try again later"})}):f.jsxs(f.Fragment,{children:[f.jsxs("div",{className:"products-container",children:[e.map(s=>{const{name:l,image:c,_id:u,category:d}=s;return f.jsxs("article",{className:d==="service"?"product service-product":"product",children:[f.jsxs("div",{className:"box",children:[f.jsxs("div",{className:"image-container",children:[f.jsx("img",{srcSet:c,alt:l}),f.jsx("button",{className:"details-button",onClick:()=>{o(e8()),o(n8(s)),_j(d,l)},children:a?"Details...":"დეტალები..."})]}),f.jsx("div",{className:"buttons-container",children:i!=="service"&&f.jsx("button",{onClick:()=>{o(Xj(u))},children:f.jsx(qj,{})})})]}),f.jsx("h3",{children:i!=="service"&&l})]},u)}),f.jsx(h8,{})]}),f.jsx(ax,{numOfPages:n,changePage:Bo,page:r})]})},m8=qe.section`
  top: 0;
  width: 100%;
  min-height: 100vh;
  position: fixed;
  visibility: hidden;
  color: var(--primary-white);
  z-index: 100;
  .background {
    position: absolute;
    background: var(--primary-black);
    height: 100%;
    width: 100%;
    opacity: 0;
    visibility: hidden;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    padding: 2rem;
  }
  .background h2,h3 {
    color:var(--primary-white)
  }
  .img-container {
    margin-top: 2rem;
    margin-bottom: 2rem;
    object-fit: fill;
    max-height: 600px;
  }
  .close-button{
    cursor: pointer;
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    font-size: 2rem;
    transition: var(--transition);
    color: var(--primary-Company-red);
    &:hover{
        scale: 1.1;
    }
  }
  .text-container {
    padding: 1rem;
  }
  .img-container img {
    object-fit: contain;
  }
  p{
    margin-top: 2rem;
    text-align: left;
    line-height: 28px
  }
  .active {
    visibility: visible;
    opacity: 0.9;
  }
  @media screen and (min-width: 1180px) {
    .background {
      flex-direction: row;
    }
    .img-container {
      width: 50%;
      min-height: 500px;
    }
    .text-container {
      padding: 2rem;
      width: 45%;
      overflow-y: auto;
      text-align: center;
      display: flex;
      flex-direction: column;
    }
  }
`,h8=()=>{const{backgroundIsActive:e,activeProduct:t}=Q(i=>i.products),{english:n}=Q(i=>i.menu),r=ce();return f.jsx(m8,{children:f.jsxs("div",{className:e?"background active":"background",children:[f.jsx(Kj,{className:"close-button",onClick:()=>{r(t8())}}),f.jsx("div",{className:"img-container",children:f.jsx("img",{srcSet:t.image,alt:""})}),f.jsxs("div",{className:"text-container",children:[f.jsx("h2",{children:t.category!=="service"&&t.name}),t.price?f.jsxs("h3",{children:[n?"Price :":"ფასი :"," ",E5(t.price)]}):"",t.stock?f.jsxs("h3",{children:[n?"Stock : ":"მარაგშია : ",t.stock]}):"",n?f.jsx("p",{className:"ge",children:t.description}):f.jsx("p",{className:"ge",children:t.descriptionGe}),f.jsx("p",{children:t.additionalInfo})]})]})})},p0=qe.section`
  margin-top: 3rem;
  .pages-container {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    width: 90%;
    max-width: 450px;
    flex-wrap: wrap;
    gap: 0.6rem;
  }
  .page-btn {
    font-size: 1rem;
    background: var(--primary-white);
    width: 1.7rem;
    box-shadow: none;
    transition: var(--transition);
    border: none;
    color: var(--primary-black);
    &:hover {
      background: var(--primary-Company-red);
    }
  }
  .active {
    background: var(--primary-Company-red);
  }
  @media screen and (min-width: 980px) {
    display: flex;
    justify-content: right;
    .pages-container {
      margin: 0;
      margin-bottom: 2rem;
      justify-content: left;
      padding-right: 4.5rem;
    }
  }
`,ax=({numOfPages:e,page:t,changePage:n})=>{const r=ce(),i=Array.from({length:e},(a,o)=>o+1);return e===1?f.jsx(p0,{children:f.jsx("div",{className:"pages-containter"})}):f.jsx(p0,{children:f.jsx("div",{className:"pages-container",children:i.map((a,o)=>f.jsx("button",{className:a===t?"btn page-btn active":"btn page-btn",onClick:()=>{r(n(a))},children:a},o))})})},$r=({labelName:e,name:t,value:n,type:r,onChange:i,className:a})=>f.jsxs(f.Fragment,{children:[f.jsxs("label",{htmlFor:t,children:[e,":"]}),f.jsx("input",{className:a,type:r,id:t,name:t,value:n,onChange:i})]}),m0={name:"",email:"",message:""},g8=()=>{const{english:e}=Q(a=>a.menu),t=ce(),[n,r]=k.useState(m0),i=a=>{a.preventDefault(),t(Vs({fullName:n.name,email:n.email,message:n.message})),r(m0)};return f.jsx("div",{className:"contact-form-container",children:f.jsx("div",{children:f.jsxs("form",{className:"contact-form",onSubmit:i,children:[f.jsx("h3",{children:e?"Send us a message":"მოგვწერეთ"}),f.jsxs("div",{className:"input-container",children:[f.jsx("label",{htmlFor:"fullname",children:f.jsx(Ae,{icon:yj})}),f.jsx("input",{className:"contact-input",type:"text",placeholder:e?"Full name":"სახელი",id:"fullname",name:"name",required:!0,onChange:a=>Xe({setProductValues:r,e:a}),value:n.name})]}),f.jsxs("div",{className:"input-container",children:[f.jsx("label",{htmlFor:"contact-email",children:f.jsx(Ae,{icon:cm})}),f.jsx("input",{className:"contact-input",type:"email",name:"email",placeholder:e?"Email":"მეილი",id:"contact-email",required:!0,onChange:a=>Xe({setProductValues:r,e:a}),value:n.email})]}),f.jsxs("div",{className:"textarea-container",children:[f.jsx("label",{htmlFor:"textarea",children:f.jsx(Ae,{icon:vj})}),f.jsx("textarea",{id:"textarea",cols:"25",rows:"10",placeholder:e?"Message...":"მესიჯი...",name:"message",required:!0,onChange:a=>Xe({setProductValues:r,e:a}),value:n.message})]}),f.jsx("button",{type:"submit",className:"btn submit-btn",children:f.jsx(Ae,{icon:X2})})]})})})},v8=!1,y8=()=>{const{moneyImages:e,english:t}=Q(r=>r.menu),n="/src/assets/files/readme.md";return f.jsxs("div",{className:"download",children:[f.jsxs("div",{className:"money-slides-container",children:[t?f.jsx("h4",{className:"ge",children:" You can use these in our Machines"}):f.jsx("h4",{className:"ge",children:"აპარატში შეგიძლიათ გამოიყენოთ"}),f.jsx(v2,{images:e,atHome:v8})]}),f.jsxs("div",{className:"download-container",children:[f.jsxs("div",{className:"download-text ge",children:[t?f.jsx("h4",{children:"Catalog"}):f.jsx("h4",{children:"კატალოგი"}),f.jsx(Ae,{className:"pdf-icon",icon:Ej})]}),f.jsx("div",{className:"underline text-underline"}),f.jsx("button",{className:"btn download-btn",children:f.jsxs("a",{className:"download-link",href:n,download:"readme.md",children:[f.jsx(Ae,{icon:Sj}),t?"Download":"გადმოწერა"]})})]})]})},x8=Mo`
  0%{
    scale: 1;
  }
  50%{
    scale: 0.9;
  }
  100%{
    scale: 1;
  }
`,Qu=qe.article`
  margin-top: 4rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .instagram-button {
    font-size: 3rem;
    color: var(--primary-black);
    animation: ${x8} linear 2.5s infinite;
  }
  .error-instagram-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .instagram-images-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .instagram-images {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    height: 309px;
    overflow: hidden;
    justify-content: center;
  }
  .instagram-images div {
    width: 100%;
    max-width: 309px;
    height: 309px;
    position: relative;
  }
  .instagram-images video{
    width: 309px;
  }
  .instagram-img {
    height: 309px;
    object-fit: cover;
    max-width: 309px;
    cursor: pointer;
  }
  .instagram-icon-small {
    position: absolute;
    bottom: 1rem;
    left: 1rem;
    font-size: 1.5rem;
    color: var(--primary-white);
    z-index: 2;
    opacity: 0.9;
  }
  .instagram-header {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .instagram-header h2 {
    color: var(--primary-Company-red);
    font-weight: 900;
    font-size: 1.7rem;
  }
  @media screen and (min-width: 980px) {
    margin-top: 0rem;
    .instagram-header {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 80%;
    }
    .instagram-header h2{
      font-size: 2.35rem;
    }
    .instagram-images-container {
      gap: 1rem;
    }
    .instagram-images {
      justify-content: flex-start;
      gap: 0;
    }
    .instagram-img {
      border-radius: 0;
      object-fit: cover;
      width: 100%;
    }
    .instagram-images div:hover .instagram-icon-small {
      color: var(--primary-Company-red);
      transition: var(--transition);
    }
  }
`,w8=()=>{const{instagramProducts:e,instagramLoading:t,instagramError:n}=Q(r=>r.products);return t?f.jsx(Qu,{children:f.jsx(Fn,{})}):n?f.jsx(Qu,{children:f.jsxs("div",{className:"error-instagram-container",children:[f.jsx("h3",{children:"#georgianvendinggroup"}),f.jsx(_e,{target:"_blank",to:"https://www.instagram.com/georgianvendinggroup/",className:"instagram-button",children:f.jsx(_a,{})})]})}):f.jsx(Qu,{children:f.jsxs("div",{className:"instagram-images-container",children:[f.jsxs("div",{className:"instagram-header",children:[f.jsx("h2",{children:"#georgianvendinggroup"}),f.jsx(_e,{target:"_blank",to:"https://www.instagram.com/georgianvendinggroup/",className:"instagram-button",children:f.jsx(_a,{})})]}),f.jsx("div",{className:"instagram-images",children:e.map((r,i)=>{const{id:a,media_url:o,media_type:s}=r;return s==="IMAGE"?f.jsxs("div",{children:[f.jsx(_e,{target:"_blank",to:"https://www.instagram.com/georgianvendinggroup/",children:f.jsx("img",{className:"instagram-img",srcSet:o},a)}),f.jsx("i",{className:"instagram-icon-small",children:f.jsx(_a,{})})]}):f.jsxs("div",{children:[f.jsx(_e,{target:"_blank",to:"https://www.instagram.com/georgianvendinggroup/",children:f.jsx("video",{className:"instagram-img",autoPlay:i===0,src:o},a)}),f.jsx("i",{className:"instagram-icon-small",children:f.jsx(_a,{})})]})})})]})})},b8=()=>{const e=ce(),t={email:"",password:""},[n,r]=k.useState(t),i=a=>{a.preventDefault(),e(Ws({email:n.email,password:n.password})),r(t)};return f.jsx("div",{className:"login-form-container",children:f.jsxs("form",{className:"login-form",onSubmit:i,children:[f.jsx("h3",{children:"User Login"}),f.jsxs("div",{className:"input-container",children:[f.jsx("label",{htmlFor:"login-email",children:f.jsx(Ae,{icon:cm})}),f.jsx("input",{className:"login-input",type:"email",placeholder:"email",id:"login-email",name:"email",value:n.email,required:!0,onChange:a=>Xe({setProductValues:r,e:a})})]}),f.jsxs("div",{className:"input-container",children:[f.jsx("label",{htmlFor:"login-password",children:f.jsx(Ae,{icon:gj})}),f.jsx("input",{className:"login-input",type:"password",name:"password",id:"login-password",placeholder:"password",value:n.password,onChange:a=>Xe({setProductValues:r,e:a}),required:!0})]}),f.jsx("div",{className:"forgot-container",children:f.jsx("span",{children:"Georgian Vending Group"})}),f.jsx("button",{type:"submit",className:"btn submit-btn",children:f.jsx(Ae,{icon:X2})})]})})},S8=3,Ys=tt("adminSlice/fetchProductsAdmin",async(e,t)=>{try{const{page:n,search:r,productsType:i}=t.getState().admin;return{data:(await He.get(`/products/adminProducts?productsType=${i}&limit=${S8}&page=${n}&search=${r}`)).data}}catch(n){throw n}}),qs=tt("adminSlice/uploadImage",async(e,t)=>{try{const n=new FormData;n.append("image",e);const r=await He.post("/products/uploadImage",n,{headers:{"Content-Type":"multipart/form-data"}});return Ce(!0,"Image uploaded"),{data:r.data}}catch(n){throw n}}),Qs=tt("adminSlice/uploadProduct",async({name:e,category:t,price:n,stock:r,description:i,descriptionGe:a,additionalInfo:o,company:s},l)=>{const{uploadImageURL:c}=l.getState().admin;try{const u=await He.post("/products",{name:e,category:t,price:n,stock:r,description:i,descriptionGe:a,additionalInfo:o,company:s,image:c});Ce(!0,"Product Uploaded, refresh the page to see the change")}catch(u){throw Ce(!1,"There has been an error with uploading a product"),u}}),Ks=tt("adminSlice/editProduct",async({name:e,price:t,stock:n,description:r,descriptionGe:i,additionalInfo:a,category:o},s)=>{const{editingInfo:l}=s.getState().admin,{id:c}=l;try{await He.patch(`/products/${c}`,{name:e,category:o,price:t,stock:n,description:r,descriptionGe:i,additionalInfo:a}),Ce(!0,`${e} has been edited, refresh to see the change`)}catch(u){throw Ce(!1,"there has been an error with editing"),u}}),k8=tt("adminSlice/deleteProduct",async({id:e})=>{try{await He.delete(`/products/${e}`),Ce(!0,"the product has been deleted, refresh to see the change")}catch(t){throw Ce(!1,"there has been an error with deleting"),t}}),Js=tt("adminSlice/getEmails",async()=>{try{const e=await He.get("/user/subscribed-emails");return Ce(!0,"Emails delieverd"),{data:e.data}}catch(e){throw Ce(!1,"Error with getting emails"),e}}),E8=tt("adminSlice/deleteEmail",async({email:e})=>{try{const t=await He.delete(`/user/subscribed-emails/${e}`);return Ce(!0,"Email Deleted"),{data:t.data}}catch(t){throw Ce(!1,"Error with Deleting emails"),t}}),C8=tt("adminSlice/editAboutStats",async({machines:e,partners:t,cities:n,id:r})=>{try{const i=await He.patch(`/about/${r}`,{machines:e,partners:t,cities:n});Ce(!0,"About Stats edited")}catch(i){throw Ce(!1,"Error with editing About Stats"),i}}),j8=tt("adminSlice/setAboutStats",async({machines:e,partners:t,cities:n})=>{try{const r=await He.post("/about",{machines:e,partners:t,cities:n});Ce(!0,"About Stats added")}catch(r){throw Ce(!1,"Error with adding stats"),r}}),P8={name:"",category:"",price:"",stock:"",description:"",descriptionGe:"",additionalInfo:""},N8={activeProduct:{},productsType:"",search:"",uploadImageURL:"",numOfPages:0,numOfHits:0,subscribedEmails:{emails:[],subscriptionCount:0},page:1,isLoading:!1,editing:!1,editingInfo:P8,products:[],error:!1},ox=Nc({name:"adminSlice",initialState:N8,reducers:{changePage:(e,t)=>({...e,page:t.payload}),updateSearch:(e,t)=>({...e,search:t.payload,page:1}),updateSelection:(e,t)=>({...e,productsType:t.payload,page:1}),startEditing:(e,t)=>{const{name:n,price:r,stock:i,description:a,descriptionGe:o,additionalInfo:s,category:l,id:c}=t.payload;return{...e,editing:!0,editingInfo:{name:n,price:r,stock:i,description:a,descriptionGe:o,additionalInfo:s,category:l,id:c}}},cancelEditing:e=>({...e,editing:!1})},extraReducers:e=>{e.addCase(Ys.pending,t=>{t.isLoading=!0}),e.addCase(Ys.fulfilled,(t,n)=>{const{data:r}=n.payload,{products:i,numOfHits:a,numOfPages:o}=r;return{...t,error:!1,isLoading:!1,products:i,numOfPages:o,numOfHits:a}}),e.addCase(Ys.rejected,t=>{t.isLoading=!1,t.error=!0}),e.addCase(qs.pending,t=>{t.isLoading=!0}),e.addCase(qs.fulfilled,(t,n)=>{const{src:r}=n.payload.data;t.uploadImageURL=r,t.isLoading=!1}),e.addCase(qs.rejected,t=>{t.isLoading=!1,t.error=!0}),e.addCase(Qs.pending,t=>{t.isLoading=!0}),e.addCase(Qs.fulfilled,t=>{t.isLoading=!1,t.uploadImageURL=""}),e.addCase(Qs.rejected,t=>{t.isLoading=!1,t.error=!0}),e.addCase(Ks.pending,t=>{t.isLoading=!0}),e.addCase(Ks.fulfilled,t=>({...t,isLoading:!1,editing:!1,editingInfo:{}})),e.addCase(Ks.rejected,t=>{t.isLoading=!1,t.error=!0}),e.addCase(Js.pending,t=>{t.isLoading=!0}),e.addCase(Js.fulfilled,(t,n)=>{const{emails:r,subscriptionCount:i}=n.payload.data;t.subscribedEmails={emails:r,subscriptionCount:i},t.isLoading=!1}),e.addCase(Js.rejected,t=>{t.isLoading=!1,t.error=!0})}}),{changePage:A8,updateSearch:O8,updateSelection:R8,startEditing:T8,cancelEditing:L8}=ox.actions,_8=ox.reducer,I8=()=>{const{products:e,loading:t,editing:n}=Q(i=>i.admin),r=ce();return t?f.jsx("div",{className:"all-products",children:f.jsx(Fn,{})}):e?f.jsx("div",{className:"all-products",children:e.map(i=>{const{image:a,category:o,name:s,price:l,likes:c,stock:u,description:d,descriptionGe:p,additionalInfo:v,_id:h}=i;return f.jsxs("article",{className:"product",children:[f.jsx("div",{className:"product-img-container",children:f.jsx("img",{className:"product-img",srcSet:a,alt:""})}),f.jsxs("div",{className:"product-info",children:[f.jsxs("h4",{children:["Name/Service : ",s]}),f.jsxs("h4",{children:["Category: ",o]}),f.jsxs("h4",{children:["Price: ",l]}),c?f.jsxs("h4",{children:["Likes : ",c]}):"",u&&f.jsxs("h4",{children:["Stock : ",u]}),f.jsxs("p",{className:"shortened",children:["Description: ",d]}),f.jsxs("p",{className:"shortened",children:["DescriptionGe: ",p]}),f.jsxs("p",{className:"shortened",children:["Addition Info: ",v]})]}),n?f.jsx("button",{className:"btn",onClick:()=>r(L8()),children:"Cancel Editing"}):f.jsx("button",{onClick:()=>r(T8({name:s,category:o,price:l,stock:u,description:d,id:h,descriptionGe:p,additionalInfo:v})),className:"btn",children:"Edit"}),f.jsx("button",{onClick:()=>r(k8({id:h})),className:"btn delete-btn",children:"Delete"})]},h)})}):f.jsx("div",{className:"all-products",children:f.jsx("h2",{children:"No Products available"})})},M8=()=>{const{numOfPages:e,page:t}=Q(l=>l.admin),n=ce(),r={search:"",selection:""},[i,a]=k.useState(r),o=l=>{const{name:c,value:u}=l.target;a(d=>({...d,[c]:u}))},s=l=>{l.preventDefault(),n(O8(i.search)),n(R8(i.selection))};return f.jsxs("section",{className:"admin-filters",children:[f.jsx("div",{className:"pagination",children:f.jsx(ax,{numOfPages:e,page:t,changePage:A8})}),f.jsx("div",{className:"search-and-type",children:f.jsxs("form",{onSubmit:s,children:[f.jsx("input",{type:"text",placeholder:"Search...",name:"search",value:i.search,onChange:o}),f.jsxs("select",{name:"selection",value:i.selection,onChange:o,children:[f.jsx("option",{value:"",children:"All"}),f.jsx("option",{value:"vending",children:"Vending"}),f.jsx("option",{value:"coffee",children:"Coffee"}),f.jsx("option",{value:"snacks-and-ingredients",children:"Snacks and Ingredients"}),f.jsx("option",{value:"service",children:"Service"})]}),f.jsx("button",{className:"btn",type:"submit",children:"Submit"})]})})]})},z8=()=>{const{editing:e,editingInfo:t}=Q(c=>c.admin),n=ce(),r={name:"",company:"",category:"vending",price:"",stock:"",description:"",descriptionGe:"",additionalInfo:"",image:{}},[i,a]=k.useState(r);k.useEffect(()=>{if(!e)return a(r);a(c=>({...c,...t}))},[e]);const o=c=>{a(u=>({...u,image:c.target.files[0]}))},s=c=>{c.preventDefault();const{name:u,category:d,description:p,descriptionGe:v,additionalInfo:h,price:y,stock:b}=i;n(Ks({name:u,category:d,description:p,price:y,stock:b,descriptionGe:v,additionalInfo:h}))},l=c=>{c.preventDefault();const{name:u,category:d,description:p,descriptionGe:v,additionalInfo:h,price:y,company:b}=i;n(Qs({name:u,category:d,description:p,descriptionGe:v,additionalInfo:h,price:y,company:b})),a(r)};return f.jsxs("div",{className:"edit-products",children:[f.jsx("h2",{children:e?"Edit Product":"Upload product"}),f.jsxs("form",{children:[f.jsx("div",{children:f.jsx($r,{labelName:"name",name:"name",type:"text",value:i.name,onChange:c=>Xe({setProductValues:a,e:c})})}),!e&&f.jsx("div",{children:f.jsx($r,{labelName:"Company",name:"company",type:"text",value:i.company,onChange:c=>Xe({setProductValues:a,e:c})})}),f.jsxs("div",{children:[f.jsx("label",{htmlFor:"category",children:"Category:"}),f.jsxs("select",{type:"text",id:"category",name:"category",value:i.category,onChange:c=>Xe({setProductValues:a,e:c}),children:[f.jsx("option",{value:"vending",children:"Vending machines"}),f.jsx("option",{value:"coffee",children:"Coffee machines"}),f.jsx("option",{value:"snacks-and-ingredients",children:"Snacks and ingredients"}),f.jsx("option",{value:"service",children:"Service"})]})]}),!e&&f.jsxs("div",{children:[f.jsx("input",{type:"file",name:"image",onChange:o}),f.jsx("button",{onClick:()=>n(qs(i.image)),className:"btn",type:"button",children:"Upload Image"})]}),f.jsx("div",{children:f.jsx($r,{labelName:"Price(თეთრებში)",name:"price",type:"number",value:i.price?i.price:"",onChange:c=>Xe({setProductValues:a,e:c})})}),f.jsx("div",{children:f.jsx($r,{labelName:"Stock",name:"stock",type:"number",value:i.stock?i.stock:"",onChange:c=>Xe({setProductValues:a,e:c})})}),f.jsxs("div",{children:[f.jsx("label",{htmlFor:"description",children:"Description:"}),f.jsx("textarea",{className:"edit-description",id:"description",name:"description",value:i.description,onChange:c=>Xe({setProductValues:a,e:c})})]}),f.jsxs("div",{children:[f.jsx("label",{htmlFor:"descriptionGe",children:"DescriptionGe:"}),f.jsx("textarea",{className:"edit-description",id:"descriptionGe",name:"descriptionGe",value:i.descriptionGe,onChange:c=>Xe({setProductValues:a,e:c})})]}),f.jsxs("div",{children:[f.jsx("label",{htmlFor:"additionalInfo",children:"Additional Information:"}),f.jsx("textarea",{className:"edit-description",id:"additionalInfo",name:"additionalInfo",value:i.additionalInfo,onChange:c=>Xe({setProductValues:a,e:c})})]}),e?f.jsx("button",{className:"btn",type:"submit",onClick:s,children:"Save Changes"}):f.jsx("button",{className:"btn",type:"submit",onClick:l,children:"Upload product"})]})]})},D8=()=>{const e=ce(),{subscribedEmails:t,isLoading:n}=Q(o=>o.admin);if(n)return f.jsx("section",{className:"all-emails",children:f.jsx(Fn,{})});const{emails:r,subscriptionCount:i}=t,a=()=>{const o=r.map(s=>s).join(", ");navigator.clipboard.writeText(o).then(()=>{Ce(!0,"Emails copied")}).catch(s=>{console.error("Error copying to clipboard:",s)})};return f.jsx("section",{className:"all-emails",children:f.jsxs("div",{className:"emails-container",children:[f.jsx("button",{className:"btn",onClick:()=>{e(Js())},children:"Generate Emails"}),f.jsx("p",{className:"emails-info",onClick:a,children:r.map(o=>o).join(", ")}),f.jsxs("h4",{children:["Total Subscriptions : ",i]})]})})};function $8(e){return Bn({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]})(e)}function F8(e){return Bn({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8Z"}},{tag:"path",attr:{d:"M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8Z"}}]})(e)}const h0=({title:e,info:t})=>{const[n,r]=k.useState(!1);return f.jsxs("article",{className:"question",children:[f.jsxs("header",{children:[f.jsx("h4",{children:e}),f.jsx("button",{className:"question-btn",onClick:()=>r(!n),children:n?f.jsx($8,{}):f.jsx(F8,{})})]}),n&&f.jsx("p",{className:"active",children:t})]})},U8=()=>{const e=ce(),{subscribedEmails:t}=Q(a=>a.admin),{emails:n}=t,[r,i]=k.useState({email:""});return k.useEffect(()=>{n.length>0&&i({email:n[0]})},[n]),n.length<1?f.jsx("section",{className:"delete-email",children:f.jsx("h3",{children:"Generate The emails first"})}):f.jsxs("section",{className:"delete-email",children:[f.jsx("h2",{children:"Delete Email"}),f.jsx("select",{type:"text",name:"email",value:r.email,onChange:a=>Xe({setProductValues:i,e:a}),id:"email",children:n.map((a,o)=>f.jsx("option",{value:a,children:a},o))}),f.jsx("button",{className:"btn",type:"submit",onClick:()=>e(E8({email:r.email})),children:"Delete"})]})},B8=()=>{const{english:e,aboutStats:t,aboutStatsIsLoading:n}=Q(s=>s.menu);if(n)return f.jsx(Fn,{});const{id:r,machines:i,partners:a,cities:o}=t;return f.jsxs("div",{className:"about-stats",children:[f.jsxs("div",{className:"info",children:[f.jsx("h1",{className:"big",children:i}),e?f.jsx("h2",{children:"Machines"}):f.jsxs("span",{children:[f.jsx("h4",{children:"- მდე "})," ",f.jsx("h2",{children:"აპარატი"})]}),f.jsx("div",{className:"underline"})]}),f.jsxs("div",{className:"info",children:[f.jsx("h1",{className:"big",children:a}),e?f.jsx("h2",{children:"Partners"}):f.jsxs("span",{children:[f.jsx("h4",{children:"- მდე "})," ",f.jsx("h2",{children:"პარტნიორი"})]}),f.jsx("div",{className:"underline"})]}),f.jsxs("div",{className:"info",children:[f.jsx("h1",{className:"big",children:o}),e?f.jsx("h2",{children:"Cities"}):f.jsx("span",{children:f.jsx("h2",{children:"ქალაქი"})}),f.jsx("div",{className:"underline"})]})]})},H8={machines:"",partners:"",cities:""},V8=()=>{const{aboutStats:e,aboutStatsIsLoading:t}=Q(p=>p.menu),[n,r]=k.useState(H8),i=ce(),a=e.machines!=="",{id:o,machines:s,partners:l,cities:c}=e,u=()=>{i(C8({machines:n.machines,partners:n.partners,cities:n.cities,id:o}))},d=()=>{i(j8({machines:n.machines,partners:n.partners,cities:n.cities}))};return f.jsxs("section",{className:"about-admin",children:[f.jsxs("div",{className:"about-stats",children:[f.jsx("span",{className:"stat",children:f.jsxs("h2",{children:["Machines:",s]})}),f.jsx("span",{className:"stat",children:f.jsxs("h2",{children:["Partners:",l]})}),f.jsx("span",{className:"stat",children:f.jsxs("h2",{children:["Cities:",c]})})]}),f.jsx("div",{className:"about-inputs",children:f.jsxs("form",{className:"edit-products",children:[f.jsx($r,{labelName:"Machines/მანქანები",name:"machines",type:"number",onChange:p=>Xe({setProductValues:r,e:p})}),f.jsx($r,{labelName:"Partners/პარტნიორები",name:"partners",type:"number",onChange:p=>Xe({setProductValues:r,e:p})}),f.jsx($r,{labelName:"Cities/ქალაქები",name:"cities",type:"number",onChange:p=>Xe({setProductValues:r,e:p})}),f.jsx("button",{className:"btn about-btn",type:"button",onClick:u,children:"Submit Changes"}),f.jsx("button",{className:"btn about-btn",type:"button",disabled:a,onClick:d,children:"Submit Stats"})]})})]})},W8=()=>{Q(t=>t.user);const e=ce();return k.useEffect(()=>{e(ex())},[]),f.jsxs(f.Fragment,{children:[f.jsx(l8,{}),f.jsxs("section",{className:"section-center",children:[f.jsx(ix,{}),f.jsx(q4,{})]}),f.jsx(Fj,{})]})},G8=qe.section`
margin: 0 auto;
width: 90%;
.error-container{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100%;
    height: 80vh;
    min-height: 700px;
    }
    .img-container{
        margin-top: 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .img-container img{
        margin-top: 2rem;
        cursor: pointer;
        height: 300px;
        width: 140px;
        transition: var(--transition);
        &:hover{
            scale: 1.1;
        }
    }
`,Y8="/assets/Error-vending-9a6c8656.png",jt=()=>(Gv(),f.jsx(G8,{children:f.jsxs("div",{className:"error-container",children:[f.jsx("h2",{children:"There has been an error in locating the page :("}),f.jsxs("div",{className:"img-container",children:[f.jsx("h5",{children:"click on the vending machine to navigate to the home page"}),f.jsx(pt,{to:"/",children:f.jsx("img",{srcSet:Y8,alt:""})})]})]})})),g0=qe.section`
  min-height: 700px;
  height: 105vh;
  padding: 1rem;
  .login-form-container {
    width: 40%;
    min-width: 300px;
    border-radius: 2rem;
    position: relative;
    height: 35%;
    min-height: 300px;
    margin: 4rem auto;
    box-shadow: 0px 0px 0px 5px rgba(0, 0, 0, 0.05);
    transition:var(--transition);
    &:hover {
      box-shadow: 0 2px 10px var(--primary-black);
    }
  }
  .login-form h3 {
    margin-bottom: 1rem;
    margin-top: 1rem;
  }
  .login-form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    height: 100%;
    max-width: 350px;
    margin: 0 auto;
    align-items: center;
    color: var(--primary-black);
  }
  .input-container {
    display: flex;
    justify-content: space-between;
    gap: 0.3rem;
    border: 0.3px solid rgba(0, 0, 0, 0.25);
    padding: 0.5rem;
    border-radius: 10px;
    width: 90%;
  }
  .submit-btn {
    font-size: 1.6rem;
    width: 70px;
    padding: 1rem 0;
    color: var(--primary-white);
    background: var(--primary-Company-red);
    transition: var(--transition);
    position: absolute;
    &:hover {
      opacity: 0.9;
      transform: translateY(45%);
    }
    bottom: 0;
    transform: translateY(50%);
    z-index: 2;
  }
  .login-input {
    font-weight: 600;
    height: 1.5rem;
    color: var(--primary-black);
    font-size: 1rem;
    padding-left: 0.5rem;
    border-radius: 2px;
    border: none;
    outline: none;
    width: 90%;
    background: transparent;
  }
  .logged-in-container{
    text-align: center;
    margin-top: 7rem;
  }
  .logout-btn{
    background: var(--primary-Company-red);
    margin-top: 2rem;
    transition: var(--transition);
    &:hover{
      background: var(--primary-white);
    }
  }
`,q8=()=>{const{user:e}=Q(i=>i.user),t=ce(),n=_o();k.useEffect(()=>{window.innerWidth<1180&&n("/")},[n]);const r=()=>{t(Ja()),n("/")};return e?f.jsx(g0,{children:f.jsxs("div",{className:"logged-in-container",children:[f.jsxs("h2",{children:[e," is logged in"]}),f.jsx("button",{onClick:r,className:"btn logout-btn",children:"Log Out"})]})}):f.jsx(g0,{children:f.jsx(b8,{})})},Q8=()=>(k.useEffect(()=>{Aj()},[]),f.jsx(f.Fragment,{children:f.jsx(h6,{})})),K8=qe.section`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  /* numeric stats */
  .about-stats {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  .big {
    font-family: var(--number-font);
  }
  .info {
    text-align: center;
  }
  .underline {
    margin-top: 1rem;
  }
  /* end */
  /* paragraph and image */
  .about-paragraph {
    margin-top: 1rem;
    /* padding: 1rem; */
    padding-bottom: 1rem;
  }
  .about-paragraph p{
    font-weight: 300;
  }
  .about-box {
    display: flex;
    flex-direction: column;
  }
  .about-img {
    padding: 1rem;
    width: 100%;
  }
  .about-img img {
    border-radius: 1rem;
  }
  /* end */
  /* instagram */
  /* end */
  @media screen and (min-width: 980px) {
    min-height: 105vh;
    padding-top: 1rem;
    /* numeric stats */
    .about-stats {
      height: calc(100vh - 660px);
      padding: 4rem;
      flex-direction: row;
      justify-content: center;
    }
    .info {
      display: flex;
      align-items: center;
      margin-top: 1rem;
    }
    h1 {
      margin-right: 1rem;
    }
    .underline {
      width: 2px;
      height: 100%;
      margin: 1rem;
    }
    .big {
      font-family: var(--number-font);
      font-size: 4.5rem;
    }
    /* end */
    /* paragraph and image */
    .about-paragraph {
      width: 50%;
    }
    .about-img {
      width: 50%;
    }
    .about-img img {
      border-radius: 5rem;
    }
    .about-box {
      flex-direction: row;
      align-items: center;
    }
    /* end */
  }
`,J8="/assets/aboutpic-d6bd4bcd.png",X8=()=>{const{english:e}=Q(n=>n.menu),t=ce();return k.useEffect(()=>{t(Gs()),t(qa())},[]),f.jsxs(K8,{children:[f.jsxs("div",{className:"about-box",children:[f.jsx("div",{className:"about-paragraph",children:e?f.jsx("p",{children:"Georgian Vending Group is the official representative of the Spanish company Azykoen in Georgia. (Azykoen is a leading manufacturer of vending machines worldwide) Our mission is to provide daily comfort and accessibility to local businesses, large and public offices, by delivering high-quality, multifunctional vending machines for their business and operations. We assist partners in establishing vibrant communities that create positive relationships, build, and enhance comfort, increase product diversity, and contribute to the efficiency of their business and production. We value creating partnerships with dynamic organizations that focus on establishing positive connections, generating growth, and promoting comfort. We believe that we can quickly and easily deliver food, beverages, and other related product categories to any sector, meaning that we can serve both large and small organizations"}):f.jsx("p",{children:"Georgian Vending Group ესპანური კომპანია Azykoen-ის ოფიციალური წარმომადგენელია საქართველოში. (Azykoen - სავაჭრო აპარატების ერთ-ერთი უძლიერესი მწარმოებელი მსოფლიოში) ჩვენი მისიაა ყოველდღიური კომფორტის ხელმისაწვდომობის მიზნით ადგილობრივ ბიზნესებს, კერძო და სახელმწიფო ოფისებს, მივაწოდოთ საუკეთესო ხარისხის, მრავალფუნქციური, მათ ბიზნესზე და საქმისწარმოებაზე მორგებული სავაჭრო აპარატები. ჩვენ ვეხმარებით პარტნიორებს ისეთი ცოცხალი კუთხეების მოწყობაში, რომლებიც ქმნის პოზიტიურ კავშირებს, ამყარებს და აძლიერებს კომფორტს, ზრდის პროდუქტიულობას და იწვევს კმაყოფილებას ჩვენ ვამაყობთ რომ შეგვიძლია სწრაფად და მარტივად მივაწოდოთ საკვები, სასმელი და სხვა დაკავშირებული კატეგორიების პროდუქტი ნებისმიერ სექტორს, რაც ნიშნავს რომ შეგვიძლია მოვუაროთ როგორც მსხვილ, ისე მცირე ორგანიზაციებს."})}),f.jsx("div",{className:"about-img",children:f.jsx("img",{srcSet:J8,alt:""})})]}),f.jsx(B8,{}),f.jsx(w8,{})]})},Z8=qe.section`
  margin-top: 2rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  .contact-form-container {
    margin-top: 3rem;
    width: 100%;
    max-width: 450px;
    padding: 0.5rem;
    padding-bottom: 3rem;
    border-radius: 20px;
    box-shadow: 0px 0px 0px 5px rgba(0, 0, 0, 0.05);
    transition: var(--transition);
    position: relative;
    &:hover {
      box-shadow: 0 2px 10px var(--primary-black);
    }
  }
  .map-aligner-container {
    width: 90%;
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
  }
  .contact-form h3 {
    margin-bottom: 1rem;
  }
  .contact-form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    height: 100%;
    max-width: 350px;
    margin: 0 auto;
    align-items: center;
    color: var(--primary-black);
  }
  .input-container,
  .textarea-container {
    display: flex;
    justify-content: space-between;
    gap: 0.3rem;
    border: 0.3px solid rgba(0, 0, 0, 0.25);
    padding: 0.5rem;
    border-radius: 10px;
    max-height: 225px;
    width: 90%;
  }
  .contact-form textarea {
    padding-left: 0.5rem;
    border: none;
    font-size: 1rem;
    border-radius: 8px;
    font-weight: 300;
    max-height: ;
    outline: none;
    width: 90%;
    padding-top: 0.2rem;
    font-family: inherit;
    background: transparent;
    color: var(--primary-black);
  }
  .submit-btn {
    font-size: 1.6rem;
    width: 70px;
    padding: 1rem 0;
    color: var(--primary-white);
    background: var(--primary-Company-red);
    transition: var(--transition);
    position: absolute;
    &:hover {
      opacity: 0.9;
      transform: translateY(45%);
    }
    bottom: 0;
    transform: translateY(50%);
    z-index: 2;
  }
  .contact-input {
    font-weight: 300;
    height: 1.5rem;
    color: var(--primary-black);
    font-size: 1rem;
    padding-left: 0.5rem;
    border-radius: 2px;
    border: none;
    outline: none;
    width: 90%;
    background: transparent;
  }
  .contacts-information {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: flex-end;
    padding-bottom: 0.5rem;
  }
  .contact-info-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
  .contact {
    width: 100%;
    min-height: 70px;
    display: flex;
    max-width: 360px;
    justify-content: space-between;
    align-items: center;
    border-radius: 12px;
    overflow: hidden;
    border-top-left-radius: 1.2rem;
    border-bottom-left-radius: 1.2rem;
  }
  .contacts-img {
    margin-top: 3rem;
    border-radius: 2rem;
    overflow: hidden;
  }
  .contact-info {
    text-align: right;
  }
  .icon-link {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 80px;
    min-height: 60px;
    color: var(--primary-white);
    text-align: center;
    background: var(--primary-black);
    font-size: 1.5rem;
  }
  @media screen and (min-width: 980px) {
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
    padding: 2rem;
    margin-top: 2rem;
    min-height: 105vh;
    .contacts-information {
      width: 60%;
      flex-direction: row;
      justify-content: center;
      gap: 2rem;
      padding-bottom: 2rem;
    }
    .contact-info-container {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      gap: 3rem;
    }
    .contact-form-container {
      min-height: 480px;
      margin-top: 1rem;
    }
    .map-aligner-container {
      width: 40%;
      min-height: 550px;
      height: calc(100vh - 210px);
      padding-bottom: calc(33.7px + 1rem);
    }
    .contacts-img img {
      border-radius: 5rem;
      object-fit: cover;
    }
  }
  @media screen and (min-width: 1300px) {
    .contacts-img{
      cursor: pointer;
      display: inline-block;
      max-width: 80%;
      transition: var(--transition);
      &:hover {
        scale: 1.06;
      }
    }
    .contacts-information {
      padding-bottom: 1rem;
      min-height: 500px;
      height: calc(100vh - 210px);
    }
    .map-aligner-container {
      width: 45%;
      align-items: flex-end;
      padding-bottom: 3.5rem;
    }
    .contact-form-container {
      max-height: 500px;
      max-width: 450px;
    }
  }
`,eP="/assets/map-6d9fe64d.png",tP=()=>f.jsxs(Z8,{children:[f.jsxs("div",{className:"contacts-information",children:[f.jsx("div",{className:"contact-info-container",children:f.jsx(Z2,{forContacts:!0})}),f.jsx("div",{className:"contacts-img",children:f.jsx(_e,{target:"_blank",to:"https://www.google.com/maps/dir//Georgian+Vending+Group+%E2%80%A2+GVG,+Levan+Aleksidze+%236,+Tbilisi/@41.7204619,44.7232129,16.14z/data=!4m9!4m8!1m0!1m5!1m1!1s0x40440d4d840d72a7:0xbdb32e6078a6957d!2m2!1d44.7238335!2d41.7194497!3e0?entry=ttu",children:f.jsx("img",{srcSet:eP,alt:""})})})]}),f.jsx("div",{className:"map-aligner-container",children:f.jsx(g8,{})})]}),nP=Mo`
  0%{
    opacity: 0;
  }
  50%{
    opacity: 0.5;
  }
  100%{
    opacity: 1;
  }
`,Sr=qe.section`
  /* tags */
  .tags-btn{
    background: var(--clr-grey-100);
    transition: var(--transition);
    color: var(--primary-black);
    font-size: 0.9rem;
    border-radius: 15px;
    cursor: pointer;
    margin-left: 0.3rem;
  }
  .tags button:hover {
    background: var(--primary-Company-red);
  }
  .tags {
    text-align: center;
    margin: 2rem;
    padding: 1rem;
  }
  .tags h2 {
    margin-top: 3rem;
    text-align: center;
  }
  .selected {
    background: var(--primary-Company-red);
  }
  /* end */
  /* products Error */
  .product-error{
    color: var(--primary-black);
    text-align: center;
    margin-top: 4rem;
    padding: 1rem;
  }
  /* products Error end */
  /* products */
  .products-container {
    margin: 2rem auto;
    width: 95%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
  .product {
    width: 90%;
    max-width: 300px;
    height: 550px;
    border-radius: 1rem;
    background: var(--vending-catalog-blue);
    animation: ${nP} linear 1.2s;
    color: var(--primary-black);
  }
  .service-product{
    height: 450px;
  }
  .box {
    padding-top: 1rem;
    display: flex;
    justify-content: center;
  }
  .image-container {
    position: relative;
    margin-left: 2.5rem;
    width: 100%;
    height: 400px;
    transition: var(--transition);
    &:hover .details-button {
      opacity: 0.75;
    }
  }
  .box img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  .buttons-container {
    width: 20%;
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    background: var(--primary-white);
    height: fit-content;
    border-radius: 9px;
    color: var(--primary-black);
  }
  .buttons-container button {
    transition: var(--transition);
    min-width: 60px;
    border-radius: 9px;
    background: var(--primary-white);
    color: var(--primary-black);
    cursor: pointer;
    &:hover {
      background: var(--primary-Company-red);
    }
    border: none;
    width: 100%;
    padding: 1rem;
    text-decoration: none;
    font-size: 1rem;
  }
  .details-button {
    opacity: 0;
    border: none;
    transition: var(--transition);
    background: var(--primary-white);
    top: 50%;
    left: 50%;
    padding: 1rem;
    transform: translate(-50%, -50%);
    text-decoration: none;
    font-size: 1rem;
    transition: var(--transition);
    color: var(--primary-black);
    border-radius: 9px;
    cursor: pointer;
    &:hover {
      background: var(--primary-Company-red);
    }
    position: absolute;
  }
  .product h3 {
    margin-top: 2rem;
    margin-left: 2.5rem;
    margin-bottom: 2rem;
    margin-right: 1rem;
  }
  /* end */
  @media screen and (min-width: 980px) {
    /* tags */
    .tags button {
      font-size: 1rem;
    }
    .products-container {
      margin-top: 4rem;
      flex-direction: row;
      justify-content: center;
      flex-wrap: wrap;
    }
    /* end */
  }
  @media screen and (min-width: 1400px) {
    min-height: 105vh;
  }
`,rP="service",iP=()=>{const{isLoading:e,sort:t,search:n,page:r}=Q(a=>a.products),i=ce();return k.useEffect(()=>{Lj(),i(Bo(1))},[]),k.useEffect(()=>{i(Vr({productsType:rP}))},[t,n,r]),e?f.jsx(Sr,{children:f.jsx(Fn,{})}):f.jsx(Sr,{children:f.jsx(Fc,{})})},aP=Mo`
  0%{
    opacity: 0;
  }
  50%{
    opacity: 0.5;
  }
  100%{
    opacity: 1;
  }
`,oP=qe.section`
  /* Category  */
  .categories {
    display: flex;
    flex-direction: column;
    margin-top: 3rem;
  }
  .category {
    height: 55vh;
    text-align: center;
    position: relative;
    font-size: 0.9rem;
    animation: ${aP} linear 1.2s;
  }
  .category img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
  .category h2 {
    box-shadow: 0 5px 5px 1;
    position: absolute;
    bottom: 1rem;
    left: 1rem;
    color: var(--primary-white);
  }
  /* end */
  /* company images */
  .company-images {
    display: none;
  }
  /* end */
  /* Download */
  .download {
    padding: 1rem 1rem;
    padding-top: 4rem;
    max-width: 1260px;
    margin: 0 auto;
  }
  .download-link {
    display: flex;
    justify-content: center;
    gap: 0.2rem;
  }
  .download-container {
    text-align: center;
    display: flex;
    flex-direction: column;
    width: 255px;
  }
  .download-btn {
    font-size: 1rem;
    border-radius: 0;
    width: 255px;
    padding: 1.3rem;
    transition: var(--transition);
    background: var(--primary-Company-red);
    &:hover {
      background: var(--primary-white);
    }
    border: none;
  }
  .download-btn a {
    color: var(--primary-black);
  }
  .download-text {
    display: flex;
    justify-content: space-between;
  }
  .text-underline {
    width: 100%;
    max-width: 255px;
    margin: 1rem 0;
  }
  /* End */
  @media screen and (min-width: 990px) {
    /* company images */
    .company-images {
      display: flex;
      flex-wrap: wrap;
      overflow: hidden;
      gap: 1rem;
      width: 100%;
      height: 180px;
      padding: 20px 0;
      padding-top: 70px;
      justify-content: space-evenly;
      align-items: center;
    }
    .company-images img {
      opacity: 0.5;
      object-fit: contain;
      height: 6rem;
      width: 12rem;
      /* border: 2px solid red; */
    }
    .align-image{
      /* margin-right: 1rem; */
      margin-left: 1.2rem;
    }
    /* end */
    /* Category */
    .categories {
      flex-direction: row;
    }
    .category {
      margin-top: 0;
      min-height: 300px;
      height: calc(100vh - 376px);
      width: 100%;
    }
    .category:hover {
      transition: var(--transition);
      transform: translateY(1%);
    }
    /* end */
    /* Money Slides Container */
    .money-slides-container {
      width: 80%;
      padding: 0 1rem;
      display: flex;
      flex-direction: column;
    }
    .money-slides-container h4{
      font-weight: 600;
    }
    /* end  */
    /* Downloads */
    .download {
      display: flex;
      justify-content: space-between;
      padding: 0 1rem;
      padding-top: 3rem;
    }
    .download-text {
      display: flex;
      justify-content: space-between;
    }
    .pdf-icon {
      font-size: 1.5rem;
    }
    /* end */
  }
`,sP=()=>f.jsx(f.Fragment,{children:f.jsxs(oP,{children:[f.jsx(y2,{images:Uy}),f.jsx(p8,{}),f.jsx(y8,{})]})}),lP="coffee",cP=[{id:1,tag:"newest",tagGe:"უახლესი"},{id:2,tag:"oldest",tagGe:"უძველესი"}],uP=()=>{const{isLoading:e,sort:t,search:n,page:r}=Q(a=>a.products),i=ce();return k.useEffect(()=>{Rj(),i(Bo(1))},[]),k.useEffect(()=>{i(Vr({productsType:lP}))},[t,n,r]),e?f.jsx(Sr,{children:f.jsx(Fn,{})}):f.jsxs(Sr,{children:[f.jsx(um,{tagsList:cP}),f.jsx(Fc,{})]})},v0="vending",fP=[{id:1,tag:"newest",tagGe:"უახლესი"},{id:2,tag:"oldest",tagGe:"უძველესი"}],dP=()=>{const{isLoading:e,sort:t,page:n,search:r}=Q(a=>a.products),i=ce();return k.useEffect(()=>{i(Bo(1)),Oj()},[]),k.useEffect(()=>{i(Vr({productsType:v0,sort:t,page:n,search:r}))},[n,r,t]),e?f.jsx(Sr,{children:f.jsx(Fn,{})}):f.jsxs(Sr,{children:[f.jsx(um,{tagsList:fP}),f.jsx(Fc,{productsType:v0})]})},y0="snacks-and-ingredients",pP=[{id:1,tag:"newest",tagGe:"უახლესი"},{id:2,tag:"oldest",tagGe:"უძველესი"}],mP=()=>{const{isLoading:e,sort:t,page:n,search:r}=Q(a=>a.products),i=ce();return k.useEffect(()=>{Tj(),i(Bo(1))},[]),k.useEffect(()=>{i(Vr({productsType:y0}))},[n,t,r]),e?f.jsx(Sr,{children:f.jsx(Fn,{})}):f.jsxs(Sr,{children:[f.jsx(um,{tagsList:pP}),f.jsx(Fc,{productsType:y0})]})},hP=qe.main`
  margin-top: 3rem;
  min-height: 105vh;
  .all-products {
    width: 80%;
    min-height: 500px;
    border-radius: 2rem;
    padding: 1rem;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }
  .product {
    width: 20%;
    min-width: 300px;
    min-height: 800px;
    display: flex;
    flex-direction: column;
  }
  .product-img-container {
    height: 500px;
    width: 100%;
  }
  .product-info {
    height: 40%;
    width: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 0.5rem;
  }
  .shortened {
    max-height: 70px;
    overflow: hidden;
  }
  .delete-btn {
    background: #d54d4d;
    width: 20%;
    margin: 0.5rem auto;
  }
  .pagination {
    height: 100px;
  }
  .search-and-type {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .search-and-type input,
  select {
    height: 2rem;
    font-size: 1.3rem;
  }
  .edit-products {
    margin-top: 2rem;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    background: var(--clr-grey-200);
    align-items: center;
    font-size: 1.2rem;
  }
  .edit-products form {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 1.5rem;
  }
  .edit-products input {
    height: 2rem;
    font-size: 1.2rem;
  }
  .edit-description {
    height: 130px;
    width: 300px;
    overflow: scroll;
    font-size: 1rem;
  }
  .all-emails {
    min-height: 330px;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .emails-container {
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.8rem;
  }
  .emails-container button {
    width: 100px;
    min-width: 20%;
  }
  .emails-container p {
    border: 2px solid var(--clr-grey-200);
    padding: 1rem;
    border-radius: 1rem;
    cursor: pointer;
  }
  .delete-email {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    text-align: center;
    margin: 0 auto;
    width: 300px;
    height: 300px;
  }
  .delete-email button {
    background: #d54d4d;
  }
  .about-admin {
    padding: 1rem;
    height: 570px;
    background: var(--clr-grey-200);
  }
  .about-stats{
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
  }
  .about-btn{
    margin-top: 1rem;
  }
`,gP=()=>{const{search:e,productsType:t,page:n}=Q(i=>i.admin),r=ce();return k.useEffect(()=>{r(Ys()),r(qa())},[e,t,n]),f.jsx(hP,{children:f.jsxs("section",{className:"all-products-section",children:[f.jsx(I8,{}),f.jsx(M8,{}),f.jsx(z8,{}),f.jsx(D8,{}),f.jsx(U8,{}),f.jsx(V8,{})]})})},vP=qe.main`
  min-height: 800px;
  padding: 1rem;
  padding-bottom: 3rem;
  margin-bottom: -3rem;
  background: var(--clr-grey-200);
  .questions-section{
    padding: 2rem 0;
    margin: 0 auto;
    border-radius: 1.5rem;
  }
  .questions-header{
    text-align: center;
    margin-bottom: 1.5rem;
  }
  .question {
    padding: 1rem 1.5rem;
    margin-bottom: 1rem;
    border-radius: var(--borderRadius);
    box-shadow: var(--shadow-3);
    margin-bottom: 2rem;
  }
  .question p {
    line-height: 2;
    margin-top: 1rem;
    font-weight: 300;
    background: var(--primary-white);
    padding: 1rem;
    border-radius: 1rem;
  }
  .question header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
  }
  .question h4 {
    font-weight: 300;
    line-height: 1.5;
  }
  .question-btn {
    background: transparent;
    border-color: transparent;
    font-size: 1.5rem;
    color: var(--primary-Company-red);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    cursor: pointer;
    align-self: flex-start;
    min-width: 2rem;
  }
`,yP=()=>{const{english:e}=Q(t=>t.menu);return f.jsx(vP,{children:f.jsxs("section",{className:"questions-section",children:[f.jsx("div",{className:"questions-header",children:f.jsx("h2",{children:e?"Frequently asked questions":"ხშირად დასმული კითხვები"})}),f.jsx("div",{className:"questions",children:e?j5.map(t=>f.jsx(h0,{...t},t.id)):C5.map(t=>f.jsx(h0,{...t},t.id))})]})})},xP=({children:e})=>{const{user:t}=Q(n=>n.user);return t?e:f.jsx(Y4,{to:"/"})},Ku=qe.section`
  height: 700px;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  a {
    background: var(--primary-lighter-blackish-grey);
    transition: var(--transition);
    &:hover{
        scale: 1.07;
    }
  }
`;function wP(){return new URLSearchParams(ii().search)}const bP=()=>{const[e,t]=k.useState(!1),[n,r]=k.useState(!1),i=wP(),a=async()=>{r(!0);try{const{data:o}=await He.post("/auth/verify-email",{verificationToken:i.get("token"),email:i.get("email")})}catch{t(!0)}r(!1)};return k.useEffect(()=>{a()},[]),n?f.jsx(Ku,{children:f.jsx(Fn,{})}):e?f.jsx(Ku,{children:f.jsx("h2",{children:"There has been an error with verifying"})}):f.jsxs(Ku,{children:[f.jsx("h2",{children:"Account Confirmed"}),f.jsx(_e,{to:"/login",className:"btn",children:"Please login"})]})},SP=t3([{path:"/",element:f.jsx(W8,{}),errorElement:f.jsx(jt,{}),children:[{index:!0,element:f.jsx(Q8,{}),errorElement:f.jsx(jt,{})},{path:"about",element:f.jsx(X8,{}),errorElement:f.jsx(jt,{})},{path:"contacts",element:f.jsx(tP,{}),errorElement:f.jsx(jt,{})},{path:"service",element:f.jsx(iP,{}),errorElement:f.jsx(jt,{})},{path:"products",children:[{index:!0,element:f.jsx(sP,{}),errorElement:f.jsx(jt,{})},{path:"vending",element:f.jsx(dP,{}),errorElement:f.jsx(jt,{})},{path:"coffee",element:f.jsx(uP,{}),errorElement:f.jsx(jt,{})},{path:"snacks-and-ingredients",element:f.jsx(mP,{}),errorElement:f.jsx(jt,{})}]},{path:"login",element:f.jsx(q8,{}),errorElement:f.jsx(jt,{})},{path:"faq",element:f.jsx(yP,{}),errorElement:f.jsx(jt,{})},{path:"admin",element:f.jsx(xP,{children:f.jsx(gP,{})}),errorElement:f.jsx(jt,{})},{path:"verify-email",element:f.jsx(bP,{}),errorElement:f.jsx(jt,{})}]}]),kP=()=>f.jsx(W4,{router:SP});const EP=_k({reducer:{products:i8,menu:u6,user:Nj,admin:_8}});Ju.createRoot(document.getElementById("root")).render(f.jsxs(ZS,{store:EP,children:[f.jsx(pd,{position:"top-center",autoClose:2e3}),f.jsx(kP,{})]}));
