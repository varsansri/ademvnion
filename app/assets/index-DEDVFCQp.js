(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function nE(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var _d={exports:{}},dl={};var dv;function iE(){if(dv)return dl;dv=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:o,type:s,key:h,ref:l!==void 0?l:null,props:c}}return dl.Fragment=e,dl.jsx=i,dl.jsxs=i,dl}var pv;function aE(){return pv||(pv=1,_d.exports=iE()),_d.exports}var q=aE(),vd={exports:{}},le={};var mv;function sE(){if(mv)return le;mv=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),m=Symbol.for("react.activity"),v=Symbol.for("react.view_transition"),S=Symbol.iterator;function T(B){return B===null||typeof B!="object"?null:(B=S&&B[S]||B["@@iterator"],typeof B=="function"?B:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,y={};function N(B,ht,tt){this.props=B,this.context=ht,this.refs=y,this.updater=tt||A}N.prototype.isReactComponent={},N.prototype.setState=function(B,ht){if(typeof B!="object"&&typeof B!="function"&&B!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,B,ht,"setState")},N.prototype.forceUpdate=function(B){this.updater.enqueueForceUpdate(this,B,"forceUpdate")};function O(){}O.prototype=N.prototype;function D(B,ht,tt){this.props=B,this.context=ht,this.refs=y,this.updater=tt||A}var F=D.prototype=new O;F.constructor=D,M(F,N.prototype),F.isPureReactComponent=!0;var z=Array.isArray;function P(){}var G={H:null,A:null,T:null,S:null},w=Object.prototype.hasOwnProperty;function C(B,ht,tt){var st=tt.ref;return{$$typeof:o,type:B,key:ht,ref:st!==void 0?st:null,props:tt}}function V(B,ht){return C(B.type,ht,B.props)}function J(B){return typeof B=="object"&&B!==null&&B.$$typeof===o}function rt(B){var ht={"=":"=0",":":"=2"};return"$"+B.replace(/[=:]/g,function(tt){return ht[tt]})}var ct=/\/+/g;function ft(B,ht){return typeof B=="object"&&B!==null&&B.key!=null?rt(""+B.key):ht.toString(36)}function k(B){switch(B.status){case"fulfilled":return B.value;case"rejected":throw B.reason;default:switch(typeof B.status=="string"?B.then(P,P):(B.status="pending",B.then(function(ht){B.status==="pending"&&(B.status="fulfilled",B.value=ht)},function(ht){B.status==="pending"&&(B.status="rejected",B.reason=ht)})),B.status){case"fulfilled":return B.value;case"rejected":throw B.reason}}throw B}function ut(B,ht,tt,st,Mt){var Nt=typeof B;(Nt==="undefined"||Nt==="boolean")&&(B=null);var Rt=!1;if(B===null)Rt=!0;else switch(Nt){case"bigint":case"string":case"number":Rt=!0;break;case"object":switch(B.$$typeof){case o:case e:Rt=!0;break;case x:return Rt=B._init,ut(Rt(B._payload),ht,tt,st,Mt)}}if(Rt)return Mt=Mt(B),Rt=st===""?"."+ft(B,0):st,z(Mt)?(tt="",Rt!=null&&(tt=Rt.replace(ct,"$&/")+"/"),ut(Mt,ht,tt,"",function(I){return I})):Mt!=null&&(J(Mt)&&(Mt=V(Mt,tt+(Mt.key==null||B&&B.key===Mt.key?"":(""+Mt.key).replace(ct,"$&/")+"/")+Rt)),ht.push(Mt)),1;Rt=0;var Et=st===""?".":st+":";if(z(B))for(var qt=0;qt<B.length;qt++)st=B[qt],Nt=Et+ft(st,qt),Rt+=ut(st,ht,tt,Nt,Mt);else if(qt=T(B),typeof qt=="function")for(B=qt.call(B),qt=0;!(st=B.next()).done;)st=st.value,Nt=Et+ft(st,qt++),Rt+=ut(st,ht,tt,Nt,Mt);else if(Nt==="object"){if(typeof B.then=="function")return ut(k(B),ht,tt,st,Mt);throw ht=String(B),Error("Objects are not valid as a React child (found: "+(ht==="[object Object]"?"object with keys {"+Object.keys(B).join(", ")+"}":ht)+"). If you meant to render a collection of children, use an array instead.")}return Rt}function K(B,ht,tt){if(B==null)return B;var st=[],Mt=0;return ut(B,st,"","",function(Nt){return ht.call(tt,Nt,Mt++)}),st}function vt(B){if(B._status===-1){var ht=B._result,tt=ht();tt.then(function(st){(B._status===0||B._status===-1)&&(B._status=1,B._result=st,tt.status===void 0&&(tt.status="fulfilled",tt.value=st))},function(st){(B._status===0||B._status===-1)&&(B._status=2,B._result=st,tt.status===void 0&&(tt.status="rejected",tt.reason=st))}),B._status===-1&&(B._status=0,B._result=tt)}if(B._status===1)return B._result.default;throw B._result}var yt=typeof reportError=="function"?reportError:function(B){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ht=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof B=="object"&&B!==null&&typeof B.message=="string"?String(B.message):String(B),error:B});if(!window.dispatchEvent(ht))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",B);return}console.error(B)};function Gt(B){var ht=G.T,tt={};tt.types=ht!==null?ht.types:null,G.T=tt;try{var st=B(),Mt=G.S;Mt!==null&&Mt(tt,st),typeof st=="object"&&st!==null&&typeof st.then=="function"&&st.then(P,yt)}catch(Nt){yt(Nt)}finally{ht!==null&&tt.types!==null&&(ht.types=tt.types),G.T=ht}}function re(B){var ht=G.T;if(ht!==null){var tt=ht.types;tt===null?ht.types=[B]:tt.indexOf(B)===-1&&tt.push(B)}else Gt(re.bind(null,B))}var Ae={map:K,forEach:function(B,ht,tt){K(B,function(){ht.apply(this,arguments)},tt)},count:function(B){var ht=0;return K(B,function(){ht++}),ht},toArray:function(B){return K(B,function(ht){return ht})||[]},only:function(B){if(!J(B))throw Error("React.Children.only expected to receive a single React element child.");return B}};return le.Activity=m,le.Children=Ae,le.Component=N,le.Fragment=i,le.Profiler=l,le.PureComponent=D,le.StrictMode=s,le.Suspense=g,le.ViewTransition=v,le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=G,le.__COMPILER_RUNTIME={__proto__:null,c:function(B){return G.H.useMemoCache(B)}},le.addTransitionType=re,le.cache=function(B){return function(){return B.apply(null,arguments)}},le.cacheSignal=function(){return null},le.cloneElement=function(B,ht,tt){if(B==null)throw Error("The argument must be a React element, but you passed "+B+".");var st=M({},B.props),Mt=B.key;if(ht!=null)for(Nt in ht.key!==void 0&&(Mt=""+ht.key),ht)!w.call(ht,Nt)||Nt==="key"||Nt==="__self"||Nt==="__source"||Nt==="ref"&&ht.ref===void 0||(st[Nt]=ht[Nt]);var Nt=arguments.length-2;if(Nt===1)st.children=tt;else if(1<Nt){for(var Rt=Array(Nt),Et=0;Et<Nt;Et++)Rt[Et]=arguments[Et+2];st.children=Rt}return C(B.type,Mt,st)},le.createContext=function(B){return B={$$typeof:h,_currentValue:B,_currentValue2:B,_threadCount:0,Provider:null,Consumer:null},B.Provider=B,B.Consumer={$$typeof:c,_context:B},B},le.createElement=function(B,ht,tt){var st,Mt={},Nt=null;if(ht!=null)for(st in ht.key!==void 0&&(Nt=""+ht.key),ht)w.call(ht,st)&&st!=="key"&&st!=="__self"&&st!=="__source"&&(Mt[st]=ht[st]);var Rt=arguments.length-2;if(Rt===1)Mt.children=tt;else if(1<Rt){for(var Et=Array(Rt),qt=0;qt<Rt;qt++)Et[qt]=arguments[qt+2];Mt.children=Et}if(B&&B.defaultProps)for(st in Rt=B.defaultProps,Rt)Mt[st]===void 0&&(Mt[st]=Rt[st]);return C(B,Nt,Mt)},le.createRef=function(){return{current:null}},le.forwardRef=function(B){return{$$typeof:d,render:B}},le.isValidElement=J,le.lazy=function(B){return{$$typeof:x,_payload:{_status:-1,_result:B},_init:vt}},le.memo=function(B,ht){return{$$typeof:p,type:B,compare:ht===void 0?null:ht}},le.startTransition=Gt,le.unstable_useCacheRefresh=function(){return G.H.useCacheRefresh()},le.use=function(B){return G.H.use(B)},le.useActionState=function(B,ht,tt){return G.H.useActionState(B,ht,tt)},le.useCallback=function(B,ht){return G.H.useCallback(B,ht)},le.useContext=function(B){return G.H.useContext(B)},le.useDebugValue=function(){},le.useDeferredValue=function(B,ht){return G.H.useDeferredValue(B,ht)},le.useEffect=function(B,ht){return G.H.useEffect(B,ht)},le.useEffectEvent=function(B){return G.H.useEffectEvent(B)},le.useId=function(){return G.H.useId()},le.useImperativeHandle=function(B,ht,tt){return G.H.useImperativeHandle(B,ht,tt)},le.useInsertionEffect=function(B,ht){return G.H.useInsertionEffect(B,ht)},le.useLayoutEffect=function(B,ht){return G.H.useLayoutEffect(B,ht)},le.useMemo=function(B,ht){return G.H.useMemo(B,ht)},le.useOptimistic=function(B,ht){return G.H.useOptimistic(B,ht)},le.useReducer=function(B,ht,tt){return G.H.useReducer(B,ht,tt)},le.useRef=function(B){return G.H.useRef(B)},le.useState=function(B){return G.H.useState(B)},le.useSyncExternalStore=function(B,ht,tt){return G.H.useSyncExternalStore(B,ht,tt)},le.useTransition=function(){return G.H.useTransition()},le.version="19.3.0",le}var gv;function qp(){return gv||(gv=1,vd.exports=sE()),vd.exports}var ei=qp();const tc=nE(ei);var xd={exports:{}},pl={},yd={exports:{}},Sd={};var _v;function rE(){return _v||(_v=1,(function(o){function e(k,ut){var K=k.length;k.push(ut);t:for(;0<K;){var vt=K-1>>>1,yt=k[vt];if(0<l(yt,ut))k[vt]=ut,k[K]=yt,K=vt;else break t}}function i(k){return k.length===0?null:k[0]}function s(k){if(k.length===0)return null;var ut=k[0],K=k.pop();if(K!==ut){k[0]=K;t:for(var vt=0,yt=k.length,Gt=yt>>>1;vt<Gt;){var re=2*(vt+1)-1,Ae=k[re],B=re+1,ht=k[B];if(0>l(Ae,K))B<yt&&0>l(ht,Ae)?(k[vt]=ht,k[B]=K,vt=B):(k[vt]=Ae,k[re]=K,vt=re);else if(B<yt&&0>l(ht,K))k[vt]=ht,k[B]=K,vt=B;else break t}}return ut}function l(k,ut){var K=k.sortIndex-ut.sortIndex;return K!==0?K:k.id-ut.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var g=[],p=[],x=1,m=null,v=3,S=!1,T=!1,A=!1,M=!1,y=typeof setTimeout=="function"?setTimeout:null,N=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function D(k){for(var ut=i(p);ut!==null;){if(ut.callback===null)s(p);else if(ut.startTime<=k)s(p),ut.sortIndex=ut.expirationTime,e(g,ut);else break;ut=i(p)}}function F(k){if(A=!1,D(k),!T)if(i(g)!==null)T=!0,z||(z=!0,J());else{var ut=i(p);ut!==null&&ft(F,ut.startTime-k)}}var z=!1,P=-1,G=5,w=-1;function C(){return M?!0:!(o.unstable_now()-w<G)}function V(){if(M=!1,z){var k=o.unstable_now();w=k;var ut=!0;try{t:{T=!1,A&&(A=!1,N(P),P=-1),S=!0;var K=v;try{e:{for(D(k),m=i(g);m!==null&&!(m.expirationTime>k&&C());){var vt=m.callback;if(typeof vt=="function"){m.callback=null,v=m.priorityLevel;var yt=vt(m.expirationTime<=k);if(k=o.unstable_now(),typeof yt=="function"){m.callback=yt,D(k),ut=!0;break e}m===i(g)&&s(g),D(k)}else s(g);m=i(g)}if(m!==null)ut=!0;else{var Gt=i(p);Gt!==null&&ft(F,Gt.startTime-k),ut=!1}}break t}finally{m=null,v=K,S=!1}ut=void 0}}finally{ut?J():z=!1}}}var J;if(typeof O=="function")J=function(){O(V)};else if(typeof MessageChannel<"u"){var rt=new MessageChannel,ct=rt.port2;rt.port1.onmessage=V,J=function(){ct.postMessage(null)}}else J=function(){y(V,0)};function ft(k,ut){P=y(function(){k(o.unstable_now())},ut)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(k){k.callback=null},o.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<k?Math.floor(1e3/k):5},o.unstable_getCurrentPriorityLevel=function(){return v},o.unstable_next=function(k){switch(v){case 1:case 2:case 3:var ut=3;break;default:ut=v}var K=v;v=ut;try{return k()}finally{v=K}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(k,ut){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var K=v;v=k;try{return ut()}finally{v=K}},o.unstable_scheduleCallback=function(k,ut,K){var vt=o.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?vt+K:vt):K=vt,k){case 1:var yt=-1;break;case 2:yt=250;break;case 5:yt=1073741823;break;case 4:yt=1e4;break;default:yt=5e3}return yt=K+yt,k={id:x++,callback:ut,priorityLevel:k,startTime:K,expirationTime:yt,sortIndex:-1},K>vt?(k.sortIndex=K,e(p,k),i(g)===null&&k===i(p)&&(A?(N(P),P=-1):A=!0,ft(F,K-vt))):(k.sortIndex=yt,e(g,k),T||S||(T=!0,z||(z=!0,J()))),k},o.unstable_shouldYield=C,o.unstable_wrapCallback=function(k){var ut=v;return function(){var K=v;v=ut;try{return k.apply(this,arguments)}finally{v=K}}}})(Sd)),Sd}var vv;function oE(){return vv||(vv=1,yd.exports=rE()),yd.exports}var Md={exports:{}},Ln={};var xv;function lE(){if(xv)return Ln;xv=1;var o=qp();function e(x){var m="https://react.dev/errors/"+x;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)m+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+x+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal"),c=Symbol.for("react.recoverable"),h=Symbol.for("react.optimistic_key");function d(x,m,v){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:S==null?null:S===h?h:""+S,children:x,containerInfo:m,implementation:v}}var g=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(x,m){if(x==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Ln.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Ln.browser=function(x){return{$$typeof:c,_reason:x}},Ln.createPortal=function(x,m){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(e(299));return d(x,m,null,v)},Ln.flushSync=function(x){var m=g.T,v=s.p;try{if(g.T=null,s.p=2,x)return x()}finally{g.T=m,s.p=v,s.d.f()}},Ln.preconnect=function(x,m){typeof x=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,s.d.C(x,m))},Ln.prefetchDNS=function(x){typeof x=="string"&&s.d.D(x)},Ln.preinit=function(x,m){if(typeof x=="string"&&m&&typeof m.as=="string"){var v=m.as,S=p(v,m.crossOrigin),T=typeof m.integrity=="string"?m.integrity:void 0,A=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;v==="style"?s.d.S(x,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:S,integrity:T,fetchPriority:A}):v==="script"&&s.d.X(x,{crossOrigin:S,integrity:T,fetchPriority:A,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Ln.preinitModule=function(x,m){if(typeof x=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var v=p(m.as,m.crossOrigin);s.d.M(x,{crossOrigin:v,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0})}}else m==null&&s.d.M(x)},Ln.preload=function(x,m){if(typeof x=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var v=m.as,S=p(v,m.crossOrigin);s.d.L(x,v,{crossOrigin:S,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Ln.preloadModule=function(x,m){if(typeof x=="string")if(m){var v=p(m.as,m.crossOrigin);s.d.m(x,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:v,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0})}else s.d.m(x)},Ln.requestFormReset=function(x){s.d.r(x)},Ln.unstable_batchedUpdates=function(x,m){return x(m)},Ln.useFormState=function(x,m,v){return g.H.useFormState(x,m,v)},Ln.useFormStatus=function(){return g.H.useHostTransitionStatus()},Ln.version="19.3.0",Ln}var yv;function uE(){if(yv)return Md.exports;yv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Md.exports=lE(),Md.exports}var Sv;function cE(){if(Sv)return pl;Sv=1;var o=oE(),e=qp(),i=uE();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){for(var n=t,a=n;a&&!a.alternate;)n=a,(n.flags&4098)!==0&&(t=n.return),a=n.return;for(;n.return;)n=n.return;return n.tag===3?t:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function g(t){if(c(t)!==t)throw Error(s(188))}function p(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,r=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(r=u.return,r!==null){a=r;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return g(u),t;if(f===r)return g(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=u,r=f;else{for(var _=!1,E=u.child;E;){if(E===a){_=!0,a=u,r=f;break}if(E===r){_=!0,r=u,a=f;break}E=E.sibling}if(!_){for(E=f.child;E;){if(E===a){_=!0,a=f,r=u;break}if(E===r){_=!0,r=f,a=u;break}E=E.sibling}if(!_)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function x(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=x(t),n!==null)return n;t=t.sibling}return null}function m(t,n,a,r,u,f){for(;t!==null;){if((t.tag===5||t.tag===27||t.tag===6)&&a(t,r,u,f)||(t.tag!==22||t.memoizedState===null)&&(n||t.tag!==5&&t.tag!==27)&&m(t.child,n,a,r,u,f))return!0;t=t.sibling}return!1}function v(t){for(t=t.return;t!==null;){if(t.tag===3||t.tag===5||t.tag===27)return t;t=t.return}return null}function S(t){var n=!1;for(t=t.return;t!==null&&(t.tag===4&&(n=!0),!(t.tag===3||t.tag===5||t.tag===27));)t=t.return;return n}function T(t){var n=[null,null],a=v(t);return a===null||A(n,t,a.child,{foundSelf:!1}),n}function A(t,n,a,r){for(;a!==null;){if(a===n)r.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(r.foundSelf)return t[1]=a,!0;t[0]=a}else if((a.tag!==22||a.memoizedState===null)&&A(t,n,a.child,r))return!0;a=a.sibling}return!1}function M(t){switch(t.tag){case 5:case 27:case 6:return t.stateNode;case 3:return t.stateNode.containerInfo;default:throw Error(s(559))}}var y=null,N=null;function O(t,n,a){return t===a?!0:t===n?(y=t,!0):!1}function D(t,n,a){return t===a?(N=t,!1):t===n?(N!==null&&(y=t),!0):!1}function F(t){if(t===null)return null;do t=t===null?null:t.return;while(t&&t.tag!==5&&t.tag!==27&&t.tag!==3);return t||null}function z(t,n,a){for(var r=0,u=t;u;u=a(u))r++;u=0;for(var f=n;f;f=a(f))u++;for(;0<r-u;)t=a(t),r--;for(;0<u-r;)n=a(n),u--;for(;r--;){if(t===n||n!==null&&t===n.alternate)return t;t=a(t),n=a(n)}return null}var P=Object.assign,G=Symbol.for("react.element"),w=Symbol.for("react.transitional.element"),C=Symbol.for("react.portal"),V=Symbol.for("react.fragment"),J=Symbol.for("react.strict_mode"),rt=Symbol.for("react.profiler"),ct=Symbol.for("react.consumer"),ft=Symbol.for("react.context"),k=Symbol.for("react.forward_ref"),ut=Symbol.for("react.suspense"),K=Symbol.for("react.suspense_list"),vt=Symbol.for("react.memo"),yt=Symbol.for("react.lazy"),Gt=Symbol.for("react.activity"),re=Symbol.for("react.legacy_hidden"),Ae=Symbol.for("react.memo_cache_sentinel"),B=Symbol.for("react.view_transition"),ht=Symbol.for("react.recoverable"),tt=Symbol.iterator;function st(t){return t===null||typeof t!="object"?null:(t=tt&&t[tt]||t["@@iterator"],typeof t=="function"?t:null)}var Mt=Symbol.for("react.client.reference");function Nt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Mt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case V:return"Fragment";case rt:return"Profiler";case J:return"StrictMode";case ut:return"Suspense";case K:return"SuspenseList";case Gt:return"Activity";case B:return"ViewTransition"}if(typeof t=="object")switch(t.$$typeof){case C:return"Portal";case ft:return t.displayName||"Context";case ct:return(t._context.displayName||"Context")+".Consumer";case k:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case vt:return n=t.displayName||null,n!==null?n:Nt(t.type)||"Memo";case yt:n=t._payload,t=t._init;try{return Nt(t(n))}catch{}}return null}var Rt=Array.isArray,Et=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,qt=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I={pending:!1,data:null,method:null,action:null},Ge=[],se=-1;function Qt(t){return{current:t}}function Lt(t){0>se||(t.current=Ge[se],Ge[se]=null,se--)}function ie(t,n){se++,Ge[se]=t.current,t.current=n}var Ft=Qt(null),oe=Qt(null),qe=Qt(null),Ze=Qt(null);function U(t,n){switch(ie(qe,n),ie(oe,t),ie(Ft,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?M0(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=M0(n),t=E0(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Lt(Ft),ie(Ft,t)}function b(){Lt(Ft),Lt(oe),Lt(qe)}function it(t){var n=t.memoizedState;n!==null&&(jr._currentValue=n.memoizedState,ie(Ze,t)),n=Ft.current;var a=E0(n,t.type);n!==a&&(ie(oe,t),ie(Ft,a))}function mt(t){oe.current===t&&(Lt(Ft),Lt(oe)),Ze.current===t&&(Lt(Ze),jr._currentValue=I)}var xt,dt;function Xt(t){if(xt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);xt=n&&n[1]||"",dt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+xt+t+dt}var Ct=!1;function Wt(t,n){if(!t||Ct)return"";Ct=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var gt=function(){throw Error()};if(Object.defineProperty(gt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(gt,[])}catch(Ut){var j=Ut}Reflect.construct(t,[],gt)}else{try{gt.call()}catch(Ut){j=Ut}gt=!1;try{var nt=Object.getOwnPropertyDescriptor(t.prototype,"props");Object.defineProperty(t.prototype,"props",{configurable:!0,set:function(){throw Error()}}),gt=!0,new t}finally{gt&&(nt!==void 0?Object.defineProperty(t.prototype,"props",nt):delete t.prototype.props)}}}else{try{throw Error()}catch(Ut){j=Ut}(gt=t())&&typeof gt.catch=="function"&&gt.catch(function(){})}}catch(Ut){if(Ut&&j&&typeof Ut.stack=="string")return[Ut.stack,j.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),_=f[0],E=f[1];if(_&&E){var L=_.split(`
`),W=E.split(`
`);for(u=r=0;r<L.length&&!L[r].includes("DetermineComponentFrameRoot");)r++;for(;u<W.length&&!W[u].includes("DetermineComponentFrameRoot");)u++;if(r===L.length||u===W.length)for(r=L.length-1,u=W.length-1;1<=r&&0<=u&&L[r]!==W[u];)u--;for(;1<=r&&0<=u;r--,u--)if(L[r]!==W[u]){if(r!==1||u!==1)do if(r--,u--,0>u||L[r]!==W[u]){var at=`
`+L[r].replace(" at new "," at ");return t.displayName&&at.includes("<anonymous>")&&(at=at.replace("<anonymous>",t.displayName)),at}while(1<=r&&0<=u);break}}}finally{Ct=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Xt(a):""}function Kt(t,n){switch(t.tag){case 26:case 27:case 5:return Xt(t.type);case 16:return Xt("Lazy");case 13:return t.child!==n&&n!==null?Xt("Suspense Fallback"):Xt("Suspense");case 19:return Xt("SuspenseList");case 0:case 15:return Wt(t.type,!1);case 11:return Wt(t.type.render,!1);case 1:return Wt(t.type,!0);case 31:return Xt("Activity");case 30:return Xt("ViewTransition");default:return""}}function bt(t){try{var n="",a=null;do n+=Kt(t,a),a=t,t=t.return;while(t);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var Ot=Object.prototype.hasOwnProperty,ne=o.unstable_scheduleCallback,Zt=o.unstable_cancelCallback,Pt=o.unstable_shouldYield,ce=o.unstable_requestPaint,X=o.unstable_now,At=o.unstable_getCurrentPriorityLevel,Dt=o.unstable_ImmediatePriority,Vt=o.unstable_UserBlockingPriority,St=o.unstable_NormalPriority,_t=o.unstable_LowPriority,Yt=o.unstable_IdlePriority,ue=o.log,Ve=o.unstable_setDisableYieldValue,Ee=null,en=null;function _n(t){if(typeof ue=="function"&&Ve(t),en&&typeof en.setStrictMode=="function")try{en.setStrictMode(Ee,t)}catch{}}var On=Math.clz32?Math.clz32:Ul,oa=Math.log,Eo=Math.LN2;function Ul(t){return t>>>=0,t===0?32:31-(oa(t)/Eo|0)|0}var ys=256,la=262144,Ss=4194304;function mi(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&-t;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Ms(t,n,a){var r=t.pendingLanes;if(r===0)return 0;var u=0,f=t.suspendedLanes,_=t.pingedLanes;t=t.warmLanes;var E=r&134217727;return E!==0?(r=E&~f,r!==0?u=mi(r):(_&=E,_!==0?u=mi(_):a||(a=E&~t,a!==0&&(u=mi(a))))):(E=r&~f,E!==0?u=mi(E):_!==0?u=mi(_):a||(a=r&~t,a!==0&&(u=mi(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function La(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Nl(t,n){(n&8)!==0&&(n|=n&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=n;0<a;){var r=31-On(a),u=1<<r;n|=t[r],a&=~u}return n}function kc(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ll(){var t=Ss;return Ss<<=1,(Ss&62914560)===0&&(Ss=4194304),t}function To(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Es(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function jc(t,n,a,r,u,f){var _=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var E=t.entanglements,L=t.expirationTimes,W=t.hiddenUpdates;for(a=_&~a;0<a;){var at=31-On(a),gt=1<<at;E[at]=0,L[at]=-1;var j=W[at];if(j!==null)for(W[at]=null,at=0;at<j.length;at++){var nt=j[at];nt!==null&&(nt.lane&=-536870913)}a&=~gt}r!==0&&R(t,r,0),f!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=f&~(_&~n))}function R(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var r=31-On(n);t.entangledLanes|=n,t.entanglements[r]=t.entanglements[r]|1073741824|a&261930}function Z(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var r=31-On(a),u=1<<r;u&n|t[r]&n&&(t[r]|=n),a&=~u}}function ot(t,n){var a=n&-n;return a=(a&42)!==0?1:lt(a),(a&(t.suspendedLanes|n))!==0?0:a}function lt(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Q(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Tt(){var t=qt.p;return t!==0?t:(t=window.event,t===void 0?32:rv(t.type))}function zt(t,n){var a=qt.p;try{return qt.p=t,n()}finally{qt.p=a}}var Bt=Math.random().toString(36).slice(2),wt="__reactFiber$"+Bt,kt="__reactProps$"+Bt,ee="__reactContainer$"+Bt,$t="__reactEvents$"+Bt,ve="__reactListeners$"+Bt,ze="__reactHandles$"+Bt,$e="__reactResources$"+Bt,Le="__reactMarker$"+Bt,we="__reactLoad$"+Bt;function te(t){delete t[wt],delete t[kt],delete t[ve],delete t[ze]}function Oe(t){var n;if(n=t[wt])return n;for(var a=t.parentNode;a;){if(n=a[ee]||a[wt]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=H0(t);t!==null;){if(a=t[wt])return a;t=H0(t)}return n}t=a,a=t.parentNode}return null}function ge(t){if(t=t[wt]||t[ee]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function vn(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function ai(t){var n=t[$e];return n||(n=t[$e]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function De(t){t[Le]=!0}function Oa(t){t[we]=void 0}var Ke=new Set,Hn={};function cn(t,n){sn(t,n),sn(t+"Capture",n)}function sn(t,n){for(Hn[t]=n,t=0;t<n.length;t++)Ke.add(n[t])}var Pn=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),lr={},Vi={};function Sy(t){return Ot.call(Vi,t)?!0:Ot.call(lr,t)?!1:Pn.test(t)?Vi[t]=!0:(lr[t]=!0,!1)}var Ue=!1;function lm(){var t=Ue;return Ue=!1,t}function Ol(t,n,a){if(Sy(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,a)}}function Pl(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,a)}}function ua(t,n,a,r){if(r===null)t.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,r)}}function si(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function um(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function My(t,n,a){var r=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var u=r.get,f=r.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(_){a=""+_,f.call(this,_)}}),Object.defineProperty(t,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(_){a=""+_},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function qc(t){if(!t._valueTracker){var n=um(t)?"checked":"value";t._valueTracker=My(t,n,""+t[n])}}function cm(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return t&&(r=um(t)?t.checked?"true":"false":t.value),t=r,t!==a?(n.setValue(t),!0):!1}var Ey=/[\n"\\]/g;function gi(t){return t.replace(Ey,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Yc(t,n,a,r,u,f,_,E){t.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?t.type=_:t.removeAttribute("type"),n!=null?_==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+si(n)):t.value!==""+si(n)&&(t.value=""+si(n)):_!=="submit"&&_!=="reset"||t.removeAttribute("value"),n!=null?_==="number"&&t.value==n?Wc(t,si(t.value)):Wc(t,si(n)):a!=null?Wc(t,si(a)):r!=null&&t.removeAttribute("value"),u==null&&f!=null&&(t.defaultChecked=!!f),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.name=""+si(E):t.removeAttribute("name")}function fm(t,n,a,r,u,f,_,E){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){qc(t);return}a=a!=null?""+si(a):"",n=n!=null?""+si(n):a,E||n===t.value||(t.value=n),t.defaultValue=n}r=r??u,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=E?t.checked:!!r,t.defaultChecked=!!r,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(t.name=_),qc(t)}function Wc(t,n){t.defaultValue!==""+n&&(t.defaultValue=""+n)}function ur(t,n,a,r){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&r&&(t[a].defaultSelected=!0)}else{for(a=""+si(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,r&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function hm(t,n,a){if(n!=null&&(n=""+si(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+si(a):""}function dm(t,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(Rt(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=si(n),t.defaultValue=a,r=t.textContent,r===a&&r!==""&&r!==null&&(t.value=r),qc(t)}function cr(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Ty=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function pm(t,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":r?t.setProperty(n,a):typeof a!="number"||a===0||Ty.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function mm(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="",Ue=!0);for(var u in n)r=n[u],n.hasOwnProperty(u)&&a[u]!==r&&(pm(t,u,r),Ue=!0)}else for(var f in n)n.hasOwnProperty(f)&&pm(t,f,n[f])}function Zc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var by=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ay=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function zl(t){return Ay.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Xi(){}var Kc=null;function Qc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var fr=null,hr=null;function gm(t){var n=ge(t);if(n&&(t=n.stateNode)){var a=t[kt]||null;t:switch(t=n.stateNode,n.type){case"input":if(Yc(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+gi(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==t&&r.form===t.form){var u=r[kt]||null;if(!u)throw Error(s(90));Yc(r,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===t.form&&cm(r)}break t;case"textarea":hm(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&ur(t,!!a.multiple,n,!1)}}}var Jc=!1;function _m(t,n,a){if(Jc)return t(n,a);Jc=!0;try{var r=t(n);return r}finally{if(Jc=!1,(fr!==null||hr!==null)&&(zu(),fr&&(n=fr,t=hr,hr=fr=null,gm(n),t)))for(n=0;n<t.length;n++)gm(t[n])}}function bo(t,n){var a=t.stateNode;if(a===null)return null;var r=a[kt]||null;if(r===null)return null;a=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var ca=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),$c=!1;if(ca)try{var Ao={};Object.defineProperty(Ao,"passive",{get:function(){$c=!0}}),window.addEventListener("test",Ao,Ao),window.removeEventListener("test",Ao,Ao)}catch{$c=!1}var Pa=null,tf=null,Il=null;function vm(){if(Il)return Il;var t,n=tf,a=n.length,r,u="value"in Pa?Pa.value:Pa.textContent,f=u.length;for(t=0;t<a&&n[t]===u[t];t++);var _=a-t;for(r=1;r<=_&&n[a-r]===u[f-r];r++);return Il=u.slice(t,1<r?1-r:void 0)}function Bl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Fl(){return!0}function xm(){return!1}function Gn(t){function n(a,r,u,f,_){this._reactName=a,this._targetInst=u,this.type=r,this.nativeEvent=f,this.target=_,this.currentTarget=null;for(var E in t)t.hasOwnProperty(E)&&(a=t[E],this[E]=a?a(f):f[E]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Fl:xm,this.isPropagationStopped=xm,this}return P(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Fl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Fl)},persist:function(){},isPersistent:Fl}),n}var za={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hl=Gn(za),Ro=P({},za,{view:0,detail:0}),Ry=Gn(Ro),ef,nf,Co,Gl=P({},Ro,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:sf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Co&&(Co&&t.type==="mousemove"?(ef=t.screenX-Co.screenX,nf=t.screenY-Co.screenY):nf=ef=0,Co=t),ef)},movementY:function(t){return"movementY"in t?t.movementY:nf}}),ym=Gn(Gl),Cy=P({},Gl,{dataTransfer:0}),wy=Gn(Cy),Dy=P({},Ro,{relatedTarget:0}),af=Gn(Dy),Uy=P({},za,{animationName:0,elapsedTime:0,pseudoElement:0}),Ny=Gn(Uy),Ly=P({},za,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Oy=Gn(Ly),Py=P({},za,{data:0}),Sm=Gn(Py),zy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Iy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},By={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Fy(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=By[t])?!!n[t]:!1}function sf(){return Fy}var Hy=P({},Ro,{key:function(t){if(t.key){var n=zy[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Bl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Iy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:sf,charCode:function(t){return t.type==="keypress"?Bl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Bl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Gy=Gn(Hy),Vy=P({},Gl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Mm=Gn(Vy),Xy=P({},za,{submitter:0}),ky=Gn(Xy),jy=P({},Ro,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:sf}),qy=Gn(jy),Yy=P({},za,{propertyName:0,elapsedTime:0,pseudoElement:0}),Wy=Gn(Yy),Zy=P({},Gl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Ky=Gn(Zy),Qy=P({},za,{newState:0,oldState:0,source:0}),Jy=Gn(Qy),$y=[9,13,27,32],rf=ca&&"CompositionEvent"in window,wo=null;ca&&"documentMode"in document&&(wo=document.documentMode);var tS=ca&&"TextEvent"in window&&!wo,Em=ca&&(!rf||wo&&8<wo&&11>=wo),Tm=" ",bm=!1;function Am(t,n){switch(t){case"keyup":return $y.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Rm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var dr=!1;function eS(t,n){switch(t){case"compositionend":return Rm(n);case"keypress":return n.which!==32?null:(bm=!0,Tm);case"textInput":return t=n.data,t===Tm&&bm?null:t;default:return null}}function nS(t,n){if(dr)return t==="compositionend"||!rf&&Am(t,n)?(t=vm(),Il=tf=Pa=null,dr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Em&&n.locale!=="ko"?null:n.data;default:return null}}var iS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cm(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!iS[t.type]:n==="textarea"}function wm(t,n,a,r){fr?hr?hr.push(r):hr=[r]:fr=r,n=Vu(n,"onChange"),0<n.length&&(a=new Hl("onChange","change",null,a,r),t.push({event:a,listeners:n}))}var Do=null,Uo=null;function aS(t){g0(t,0)}function Vl(t){var n=vn(t);if(cm(n))return t}function Dm(t,n){if(t==="change")return n}var Um=!1;if(ca){var of;if(ca){var lf="oninput"in document;if(!lf){var Nm=document.createElement("div");Nm.setAttribute("oninput","return;"),lf=typeof Nm.oninput=="function"}of=lf}else of=!1;Um=of&&(!document.documentMode||9<document.documentMode)}function Lm(){Do&&(Do.detachEvent("onpropertychange",Om),Uo=Do=null)}function Om(t){if(t.propertyName==="value"&&Vl(Uo)){var n=[];wm(n,Uo,t,Qc(t)),_m(aS,n)}}function sS(t,n,a){t==="focusin"?(Lm(),Do=n,Uo=a,Do.attachEvent("onpropertychange",Om)):t==="focusout"&&Lm()}function rS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Vl(Uo)}function oS(t,n){if(t==="click")return Vl(n)}function lS(t,n){if(t==="input"||t==="change")return Vl(n)}function uS(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var ri=typeof Object.is=="function"?Object.is:uS;function No(t,n){if(ri(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var u=a[r];if(!Ot.call(n,u)||!ri(t[u],n[u]))return!1}return!0}function uf(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Pm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function zm(t,n){var a=Pm(t);t=0;for(var r;a;){if(a.nodeType===3){if(r=t+a.textContent.length,t<=n&&r>=n)return{node:a,offset:n-t};t=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Pm(a)}}function Im(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Im(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Bm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=uf(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=uf(t.document)}return n}function cf(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var cS=ca&&"documentMode"in document&&11>=document.documentMode,pr=null,ff=null,Lo=null,hf=!1;function Fm(t,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;hf||pr==null||pr!==uf(r)||(r=pr,"selectionStart"in r&&cf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Lo&&No(Lo,r)||(Lo=r,r=Vu(ff,"onSelect"),0<r.length&&(n=new Hl("onSelect","select",null,n,a),t.push({event:n,listeners:r}),n.target=pr)))}function Ts(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var mr={animationend:Ts("Animation","AnimationEnd"),animationiteration:Ts("Animation","AnimationIteration"),animationstart:Ts("Animation","AnimationStart"),transitionrun:Ts("Transition","TransitionRun"),transitionstart:Ts("Transition","TransitionStart"),transitioncancel:Ts("Transition","TransitionCancel"),transitionend:Ts("Transition","TransitionEnd")},df={},Hm={};ca&&(Hm=document.createElement("div").style,"AnimationEvent"in window||(delete mr.animationend.animation,delete mr.animationiteration.animation,delete mr.animationstart.animation),"TransitionEvent"in window||delete mr.transitionend.transition);function bs(t){if(df[t])return df[t];if(!mr[t])return t;var n=mr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Hm)return df[t]=n[a];return t}var Gm=bs("animationend"),Vm=bs("animationiteration"),Xm=bs("animationstart"),fS=bs("transitionrun"),hS=bs("transitionstart"),dS=bs("transitioncancel"),km=bs("transitionend"),jm=new Map,pf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");pf.push("scrollEnd");function wi(t,n){jm.set(t,n),cn(n,[t])}var pS=0;function fa(t,n){if(t.name!=null&&t.name!=="auto")return t.name;if(n.autoName!==null)return n.autoName;t=Li.identifierPrefix;var a=pS++;return t="_"+t+"t_"+a.toString(32)+"_",n.autoName=t}function qm(t){if(t==null||typeof t=="string")return t;var n=null,a=Pr;if(a!==null)for(var r=0;r<a.length;r++){var u=t[a[r]];if(u!=null){if(u==="none")return"none";n=n==null?u:n+(" "+u)}}return n??t.default}function ha(t,n){return t=qm(t),n=qm(n),n==null?t==="auto"?null:t:n==="auto"?null:n}var Xl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},_i=[],gr=0,mf=0;function kl(){for(var t=gr,n=mf=gr=0;n<t;){var a=_i[n];_i[n++]=null;var r=_i[n];_i[n++]=null;var u=_i[n];_i[n++]=null;var f=_i[n];if(_i[n++]=null,r!==null&&u!==null){var _=r.pending;_===null?u.next=u:(u.next=_.next,_.next=u),r.pending=u}f!==0&&Ym(a,u,f)}}function jl(t,n,a,r){_i[gr++]=t,_i[gr++]=n,_i[gr++]=a,_i[gr++]=r,mf|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function gf(t,n,a,r){return jl(t,n,a,r),ql(t)}function As(t,n){return jl(t,null,null,n),ql(t)}function Ym(t,n,a){t.lanes|=a;var r=t.alternate;r!==null&&(r.lanes|=a);for(var u=!1,f=t.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(u=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,u&&n!==null&&(u=31-On(a),t=f.hiddenUpdates,r=t[u],r===null?t[u]=[n]:r.push(n),n.lane=a|536870912),f):null}function ql(t){if(50<el)throw el=0,Pu=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var _r={};function mS(t,n,a,r){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yn(t,n,a,r){return new mS(t,n,a,r)}function _f(t){return t=t.prototype,!(!t||!t.isReactComponent)}function da(t,n){var a=t.alternate;return a===null?(a=Yn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&1206910976,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Wm(t,n){t.flags&=1206910978;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Yl(t,n,a,r,u,f){var _=0;if(r=t,typeof r=="function")_f(r)&&(_=1);else if(typeof r=="string")_=XM(t,a,Ft.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(r){case Gt:return t=Yn(31,a,n,u),t.elementType=Gt,t.lanes=f,t;case V:return Rs(a.children,u,f,n);case J:_=8,u|=24;break;case rt:return t=Yn(12,a,n,u|2),t.elementType=rt,t.lanes=f,t;case ut:return t=Yn(13,a,n,u),t.elementType=ut,t.lanes=f,t;case K:return t=Yn(19,a,n,u),t.elementType=K,t.lanes=f,t;case re:case B:return t=u|32,t=Yn(30,a,n,t),t.elementType=B,t.lanes=f,t.stateNode={autoName:null,paired:null,clones:null,ref:null},t;default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case ft:_=10;break t;case ct:_=9;break t;case k:_=11;break t;case vt:_=14;break t;case yt:_=16,r=null;break t}_=29,a=Error(s(130,t===null?"null":typeof t,"")),r=null}return n=Yn(_,a,n,u),n.elementType=t,n.type=r,n.lanes=f,n}function Rs(t,n,a,r){return t=Yn(7,t,r,n),t.lanes=a,t}function vf(t,n,a){return t=Yn(6,t,null,n),t.lanes=a,t}function Zm(t){var n=Yn(18,null,null,0);return n.stateNode=t,n}function xf(t,n,a){return n=Yn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Km=new WeakMap;function vi(t,n){if(typeof t=="object"&&t!==null){var a=Km.get(t);return a!==void 0?a:(n={value:t,source:n,stack:bt(n)},Km.set(t,n),n)}return{value:t,source:n,stack:bt(n)}}var vr=[],xr=0,Wl=null,Oo=0,xi=[],yi=0,Ia=null,ki=1,ji="";function pa(t,n){vr[xr++]=Oo,vr[xr++]=Wl,Wl=t,Oo=n}function Qm(t,n,a){xi[yi++]=ki,xi[yi++]=ji,xi[yi++]=Ia,Ia=t;var r=ki;t=ji;var u=32-On(r)-1;r&=~(1<<u),a+=1;var f=32-On(n)+u;if(30<f){var _=u-u%5;f=(r&(1<<_)-1).toString(32),r>>=_,u-=_,ki=1<<32-On(n)+u|a<<u|r,ji=f+t}else ki=1<<f|a<<u|r,ji=t}function Zl(t){t.return!==null&&(pa(t,1),Qm(t,1,0))}function yf(t){for(;t===Wl;)Wl=vr[--xr],vr[xr]=null,Oo=vr[--xr],vr[xr]=null;for(;t===Ia;)Ia=xi[--yi],xi[yi]=null,ji=xi[--yi],xi[yi]=null,ki=xi[--yi],xi[yi]=null}function Jm(t,n){xi[yi++]=ki,xi[yi++]=ji,xi[yi++]=Ia,ki=n.id,ji=n.overflow,Ia=t}var En=null,Qe=null,_e=!1,Ba=null,Si=!1,Sf=Error(s(519));function Fa(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Po(vi(n,t)),Sf}function $m(t){var n=t.stateNode,a=t.type,r=t.memoizedProps;switch(n[wt]=t,n[kt]=r,a){case"dialog":Se("cancel",n),Se("close",n);break;case"iframe":case"object":case"embed":Se("load",n);break;case"video":case"audio":for(a=0;a<il.length;a++)Se(il[a],n);break;case"source":Se("error",n);break;case"img":case"image":case"link":Se("error",n),Se("load",n);break;case"details":Se("toggle",n);break;case"input":Se("invalid",n),fm(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":Se("invalid",n);break;case"textarea":Se("invalid",n),dm(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||y0(n.textContent,a)?(r.popover!=null&&(Se("beforetoggle",n),Se("toggle",n)),r.onScroll!=null&&Se("scroll",n),r.onScrollEnd!=null&&Se("scrollend",n),r.onClick!=null&&(n.onclick=Xi),n=!0):n=!1,n||Fa(t,!0)}function Kl(t){for(En=t.return;En;)switch(En.tag){case 5:case 31:case 13:Si=!1;return;case 27:case 3:Si=!0;return;default:En=En.return}}function yr(t){if(t!==En)return!1;if(!_e)return Kl(t),_e=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Qh(t.type,t.memoizedProps)),a=!a),a&&Qe&&Fa(t),Kl(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Qe=F0(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Qe=F0(t)}else n===27?(n=Qe,es(t.type)?(t=rd,rd=null,Qe=t):Qe=n):Qe=En?Ei(t.stateNode.nextSibling):null;return!0}function Cs(){Qe=En=null,_e=!1}function Mf(){var t=Ba;return t!==null&&(Kn===null?Kn=t:Kn.push.apply(Kn,t),Ba=null),t}function Po(t){Ba===null?Ba=[t]:Ba.push(t)}var Ef=Qt(null),ws=null,ma=null;function Ha(t,n,a){ie(Ef,n._currentValue),n._currentValue=a}function ga(t){t._currentValue=Ef.current,Lt(Ef)}function Ql(t,n,a){for(;t!==null;){var r=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),t===a)break;t=t.return}}function Tf(t,n,a,r){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var f=u.dependencies;if(f!==null){var _=u.child;f=f.firstContext;t:for(;f!==null;){var E=f;f=u;for(var L=0;L<n.length;L++)if(E.context===n[L]){f.lanes|=a,E=f.alternate,E!==null&&(E.lanes|=a),Ql(f.return,a,t),r||(_=null);break t}f=E.next}}else if(u.tag===18){if(_=u.return,_===null)throw Error(s(341));_.lanes|=a,f=_.alternate,f!==null&&(f.lanes|=a),Ql(_,a,t),_=null}else u.tag===13&&u.memoizedState!==null&&u.memoizedState.dehydrated===null?(u.lanes|=a,_=u.alternate,_!==null&&(_.lanes|=a),Ql(u.return,a,t),_=u.child,_=_!==null?_.sibling:null):_=u.child;if(_!==null)_.return=u;else for(_=u;_!==null;){if(_===t){_=null;break}if(u=_.sibling,u!==null){u.return=_.return,_=u;break}_=_.return}u=_}}function Ds(t,n,a,r){t=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var _=u.alternate;if(_===null)throw Error(s(387));if(_=_.memoizedProps,_!==null){var E=u.type;ri(u.pendingProps.value,_.value)||(t!==null?t.push(E):t=[E])}}else if(u===Ze.current){if(_=u.alternate,_===null)throw Error(s(387));_.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(jr):t=[jr])}u=u.return}return t!==null&&Tf(n,t,a,r),n.flags|=262144,t!==null}function Jl(t){for(t=t.firstContext;t!==null;){if(!ri(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Us(t){ws=t,ma=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Cn(t){return tg(ws,t)}function $l(t,n){return ws===null&&Us(t),tg(t,n)}function tg(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ma===null){if(t===null)throw Error(s(308));ma=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else ma=ma.next=n;return a}var gS=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,r){t.push(r)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},_S=o.unstable_scheduleCallback,vS=o.unstable_NormalPriority,fn={$$typeof:ft,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function bf(){return{controller:new gS,data:new Map,refCount:0}}function zo(t){t.refCount--,t.refCount===0&&_S(vS,function(){t.controller.abort()})}function eg(t,n){if((t.pendingLanes&4194048)!==0){var a=t.transitionTypes;for(a===null&&(a=t.transitionTypes=[]),t=0;t<n.length;t++){var r=n[t];a.indexOf(r)===-1&&a.push(r)}}}var Io=null;function xS(t){var n=t.transitionTypes;return t.transitionTypes=null,n}var Bo=null,Af=0,Ns=0,Sr=null;function yS(t,n){if(Bo===null){var a=Bo=[];Af=0,Ns=Vh(),Sr={status:"pending",value:void 0,then:function(r){a.push(r)}}}return Af++,n.then(ng,ng),n}function ng(){if(--Af===0&&(Io=null,Bo!==null)){Sr!==null&&(Sr.status="fulfilled");var t=Bo;Bo=null,Ns=0,Sr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function SS(t,n){var a=[],r={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){r.status="fulfilled",r.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(r.status="rejected",r.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),r}var ig=Et.S;Et.S=function(t,n){if(Z_=X(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&yS(t,n),Io!==null)for(var a=Fr;a!==null;)eg(a,Io),a=a.next;if(a=t.types,a!==null){for(var r=Fr;r!==null;)eg(r,a),r=r.next;if(Ns!==0){r=Io,r===null&&(r=Io=[]);for(var u=0;u<a.length;u++){var f=a[u];r.indexOf(f)===-1&&r.push(f)}}}ig!==null&&ig(t,n)};var Ls=Qt(null);function Rf(){var t=Ls.current;return t!==null?t:Ye.pooledCache}function tu(t,n){n===null?ie(Ls,Ls.current):ie(Ls,n.pool)}function ag(){var t=Rf();return t===null?null:{parent:fn._currentValue,pool:t}}var Mr=Error(s(460)),Cf=Error(s(474)),eu=Error(s(542)),nu={then:function(){}};function sg(t){return t=t.status,t==="fulfilled"||t==="rejected"}function rg(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Xi,Xi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,lg(t),t===void 0&&!("reason"in n)?Error(s(600)):t;default:if(typeof n.status=="string")n.then(Xi,Xi);else{if(t=Ye,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(r){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=r}},function(r){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,lg(t),t}throw Ps=n,Mr}}function Os(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ps=a,Mr):a}}var Ps=null;function og(){if(Ps===null)throw Error(s(459));var t=Ps;return Ps=null,t}function lg(t){if(t===Mr||t===eu)throw Error(s(483))}var Er=null,Fo=0;function iu(t){var n=Fo;return Fo+=1,Er===null&&(Er=[]),rg(Er,t,n)}function Ga(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function au(t,n){throw n.$$typeof===G?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function ug(t){function n(Y,H){if(t){var $=Y.deletions;$===null?(Y.deletions=[H],Y.flags|=16):$.push(H)}}function a(Y,H){if(!t)return null;for(;H!==null;)n(Y,H),H=H.sibling;return null}function r(Y){for(var H=new Map;Y!==null;)Y.key===null?H.set(Y.index,Y):H.set(Y.key,Y),Y=Y.sibling;return H}function u(Y,H){return Y=da(Y,H),Y.index=0,Y.sibling=null,Y}function f(Y,H,$){return Y.index=$,t?($=Y.alternate,$!==null?($=$.index,$<H?(Y.flags|=2,H):$):(Y.flags|=134217730,H)):(Y.flags|=1048576,H)}function _(Y){return t&&Y.alternate===null&&(Y.flags|=134217730),Y}function E(Y,H,$,pt){return H===null||H.tag!==6?(H=vf($,Y.mode,pt),H.return=Y,H):(H=u(H,$),H.return=Y,H)}function L(Y,H,$,pt){var Ht=$.type;return Ht===V?(Y=at(Y,H,$.props.children,pt,$.key),Ga(Y,$),Y):H!==null&&(H.elementType===Ht||typeof Ht=="object"&&Ht!==null&&Ht.$$typeof===yt&&Os(Ht)===H.type)?(H=u(H,$.props),Ga(H,$),H.return=Y,H):(H=Yl($.type,$.key,$.props,null,Y.mode,pt),Ga(H,$),H.return=Y,H)}function W(Y,H,$,pt){return H===null||H.tag!==4||H.stateNode.containerInfo!==$.containerInfo||H.stateNode.implementation!==$.implementation?(H=xf($,Y.mode,pt),H.return=Y,H):(H=u(H,$.children||[]),H.return=Y,H)}function at(Y,H,$,pt,Ht){return H===null||H.tag!==7?(H=Rs($,Y.mode,pt,Ht),H.return=Y,H):(H=u(H,$),H.return=Y,H)}function gt(Y,H,$){if(typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint")return H=vf(""+H,Y.mode,$),H.return=Y,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case w:return $=Yl(H.type,H.key,H.props,null,Y.mode,$),Ga($,H),$.return=Y,$;case C:return H=xf(H,Y.mode,$),H.return=Y,H;case yt:return H=Os(H),gt(Y,H,$)}if(Rt(H)||st(H))return H=Rs(H,Y.mode,$,null),H.return=Y,H;if(typeof H.then=="function")return gt(Y,iu(H),$);if(H.$$typeof===ft)return gt(Y,$l(Y,H),$);au(Y,H)}return null}function j(Y,H,$,pt){var Ht=H!==null?H.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return Ht!==null?null:E(Y,H,""+$,pt);if(typeof $=="object"&&$!==null){switch($.$$typeof){case w:return $.key===Ht?L(Y,H,$,pt):null;case C:return $.key===Ht?W(Y,H,$,pt):null;case yt:return $=Os($),j(Y,H,$,pt)}if(Rt($)||st($))return Ht!==null?null:at(Y,H,$,pt,null);if(typeof $.then=="function")return j(Y,H,iu($),pt);if($.$$typeof===ft)return j(Y,H,$l(Y,$),pt);au(Y,$)}return null}function nt(Y,H,$,pt,Ht){if(typeof pt=="string"&&pt!==""||typeof pt=="number"||typeof pt=="bigint")return Y=Y.get($)||null,E(H,Y,""+pt,Ht);if(typeof pt=="object"&&pt!==null){switch(pt.$$typeof){case w:return Y=Y.get(pt.key===null?$:pt.key)||null,L(H,Y,pt,Ht);case C:return Y=Y.get(pt.key===null?$:pt.key)||null,W(H,Y,pt,Ht);case yt:return pt=Os(pt),nt(Y,H,$,pt,Ht)}if(Rt(pt)||st(pt))return Y=Y.get($)||null,at(H,Y,pt,Ht,null);if(typeof pt.then=="function")return nt(Y,H,$,iu(pt),Ht);if(pt.$$typeof===ft)return nt(Y,H,$,$l(H,pt),Ht);au(H,pt)}return null}function Ut(Y,H,$,pt){for(var Ht=null,be=null,Jt=H,ae=H=0,pn=null;Jt!==null&&ae<$.length;ae++){Jt.index>ae?(pn=Jt,Jt=null):pn=Jt.sibling;var Re=j(Y,Jt,$[ae],pt);if(Re===null){Jt===null&&(Jt=pn);break}t&&Jt&&Re.alternate===null&&n(Y,Jt),H=f(Re,H,ae),be===null?Ht=Re:be.sibling=Re,be=Re,Jt=pn}if(ae===$.length)return a(Y,Jt),_e&&pa(Y,ae),Ht;if(Jt===null){for(;ae<$.length;ae++)Jt=gt(Y,$[ae],pt),Jt!==null&&(H=f(Jt,H,ae),be===null?Ht=Jt:be.sibling=Jt,be=Jt);return _e&&pa(Y,ae),Ht}for(Jt=r(Jt);ae<$.length;ae++)pn=nt(Jt,Y,ae,$[ae],pt),pn!==null&&(t&&(Re=pn.alternate,Re!==null&&Jt.delete(Re.key===null?ae:Re.key)),H=f(pn,H,ae),be===null?Ht=pn:be.sibling=pn,be=pn);return t&&Jt.forEach(function(rs){return n(Y,rs)}),_e&&pa(Y,ae),Ht}function jt(Y,H,$,pt){if($==null)throw Error(s(151));for(var Ht=null,be=null,Jt=H,ae=H=0,pn=null,Re=$.next();Jt!==null&&!Re.done;ae++,Re=$.next()){Jt.index>ae?(pn=Jt,Jt=null):pn=Jt.sibling;var rs=j(Y,Jt,Re.value,pt);if(rs===null){Jt===null&&(Jt=pn);break}t&&Jt&&rs.alternate===null&&n(Y,Jt),H=f(rs,H,ae),be===null?Ht=rs:be.sibling=rs,be=rs,Jt=pn}if(Re.done)return a(Y,Jt),_e&&pa(Y,ae),Ht;if(Jt===null){for(;!Re.done;ae++,Re=$.next())Re=gt(Y,Re.value,pt),Re!==null&&(H=f(Re,H,ae),be===null?Ht=Re:be.sibling=Re,be=Re);return _e&&pa(Y,ae),Ht}for(Jt=r(Jt);!Re.done;ae++,Re=$.next())Re=nt(Jt,Y,ae,Re.value,pt),Re!==null&&(t&&(pn=Re.alternate,pn!==null&&Jt.delete(pn.key===null?ae:pn.key)),H=f(Re,H,ae),be===null?Ht=Re:be.sibling=Re,be=Re);return t&&Jt.forEach(function(eE){return n(Y,eE)}),_e&&pa(Y,ae),Ht}function de(Y,H,$,pt){if(typeof $=="object"&&$!==null&&$.type===V&&$.key===null&&$.props.ref===void 0&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case w:t:{for(var Ht=$.key;H!==null;){if(H.key===Ht){if(Ht=$.type,Ht===V){if(H.tag===7){a(Y,H.sibling),pt=u(H,$.props.children),Ga(pt,$),pt.return=Y,Y=pt;break t}}else if(H.elementType===Ht||typeof Ht=="object"&&Ht!==null&&Ht.$$typeof===yt&&Os(Ht)===H.type){a(Y,H.sibling),pt=u(H,$.props),Ga(pt,$),pt.return=Y,Y=pt;break t}a(Y,H);break}else n(Y,H);H=H.sibling}$.type===V?(pt=Rs($.props.children,Y.mode,pt,$.key),Ga(pt,$),pt.return=Y,Y=pt):(pt=Yl($.type,$.key,$.props,null,Y.mode,pt),Ga(pt,$),pt.return=Y,Y=pt)}return _(Y);case C:t:{for(Ht=$.key;H!==null;){if(H.key===Ht)if(H.tag===4&&H.stateNode.containerInfo===$.containerInfo&&H.stateNode.implementation===$.implementation){a(Y,H.sibling),pt=u(H,$.children||[]),pt.return=Y,Y=pt;break t}else{a(Y,H);break}else n(Y,H);H=H.sibling}pt=xf($,Y.mode,pt),pt.return=Y,Y=pt}return _(Y);case yt:return $=Os($),de(Y,H,$,pt)}if(Rt($))return Ut(Y,H,$,pt);if(st($)){if(Ht=st($),typeof Ht!="function")throw Error(s(150));return $=Ht.call($),jt(Y,H,$,pt)}if(typeof $.then=="function")return de(Y,H,iu($),pt);if($.$$typeof===ft)return de(Y,H,$l(Y,$),pt);au(Y,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,H!==null&&H.tag===6?(a(Y,H.sibling),pt=u(H,$),pt.return=Y,Y=pt):(a(Y,H),pt=vf($,Y.mode,pt),pt.return=Y,Y=pt),_(Y)):a(Y,H)}return function(Y,H,$,pt){try{Fo=0;var Ht=de(Y,H,$,pt);return Er=null,Ht}catch(Jt){if(Jt===Mr||Jt===eu)throw Jt;var be=Yn(29,Jt,null,Y.mode);return be.lanes=pt,be.return=Y,be}}}var zs=ug(!0),cg=ug(!1),Va=!1;function wf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Df(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Xa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ka(t,n,a){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(Pe&2)!==0){var u=r.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),r.pending=n,n=ql(t),Ym(t,null,a),n}return jl(t,r,n,a),ql(t)}function Ho(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,Z(t,a)}}function Uf(t,n){var a=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=_:f=f.next=_,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:r.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Nf=!1;function Go(){if(Nf){var t=Sr;if(t!==null)throw t}}function Vo(t,n,a,r){Nf=!1;var u=t.updateQueue;Va=!1;var f=u.firstBaseUpdate,_=u.lastBaseUpdate,E=u.shared.pending;if(E!==null){u.shared.pending=null;var L=E,W=L.next;L.next=null,_===null?f=W:_.next=W,_=L;var at=t.alternate;at!==null&&(at=at.updateQueue,E=at.lastBaseUpdate,E!==_&&(E===null?at.firstBaseUpdate=W:E.next=W,at.lastBaseUpdate=L))}if(f!==null){var gt=u.baseState;_=0,at=W=L=null,E=f;do{var j=E.lane&-536870913,nt=j!==E.lane;if(nt?(Te&j)===j:(r&j)===j){j!==0&&j===Ns&&(Nf=!0),at!==null&&(at=at.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});t:{var Ut=t,jt=E;j=n;var de=a;switch(jt.tag){case 1:if(Ut=jt.payload,typeof Ut=="function"){gt=Ut.call(de,gt,j);break t}gt=Ut;break t;case 3:Ut.flags=Ut.flags&-65537|128;case 0:if(Ut=jt.payload,j=typeof Ut=="function"?Ut.call(de,gt,j):Ut,j==null)break t;gt=P({},gt,j);break t;case 2:Va=!0}}j=E.callback,j!==null&&(t.flags|=64,nt&&(t.flags|=8192),nt=u.callbacks,nt===null?u.callbacks=[j]:nt.push(j))}else nt={lane:j,tag:E.tag,payload:E.payload,callback:E.callback,next:null},at===null?(W=at=nt,L=gt):at=at.next=nt,_|=j;if(E=E.next,E===null){if(E=u.shared.pending,E===null)break;nt=E,E=nt.next,nt.next=null,u.lastBaseUpdate=nt,u.shared.pending=null}}while(!0);at===null&&(L=gt),u.baseState=L,u.firstBaseUpdate=W,u.lastBaseUpdate=at,f===null&&(u.shared.lanes=0),Qa|=_,t.lanes=_,t.memoizedState=gt}}function fg(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function hg(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)fg(a[t],n)}var ja=Qt(null),su=Qt(0);function dg(t,n){t=Sa,ie(su,t),ie(ja,n),Sa=t|n.baseLanes}function Lf(){ie(su,Sa),ie(ja,ja.current)}function Of(){Sa=su.current,Lt(ja),Lt(su)}var wn=Qt(null),zn=null;function qa(t){var n=t.alternate;ie(Dn,Dn.current&1),ie(wn,t),zn===null&&(n===null||ja.current!==null||n.memoizedState!==null)&&(zn=t)}function Pf(t){ie(Dn,Dn.current),ie(wn,t),zn===null&&(zn=t)}function pg(t){t.tag===22?(ie(Dn,Dn.current),ie(wn,t),zn===null&&(zn=t)):Ya()}function Ya(){ie(Dn,Dn.current),ie(wn,wn.current)}function oi(t){Lt(wn),zn===t&&(zn=null),Lt(Dn)}var Dn=Qt(0);function Xo(t,n){ie(wn,wn.current),ie(Dn,n)}function zf(t){Lt(Dn),Lt(wn),zn===t&&(zn=null)}function ru(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||ad(a)||sd(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var _a=0,he=null,Xe=null,hn=null,ou=!1,Tr=!1,Is=!1,lu=0,ko=0,br=null,MS=0;function rn(){throw Error(s(321))}function If(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!ri(t[a],n[a]))return!1;return!0}function Bf(t,n,a,r,u,f){return _a=f,he=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Et.H=t===null||t.memoizedState===null?Qg:Jg,Is=!1,f=a(r,u),Is=!1,Tr&&(f=gg(n,a,r,u)),mg(t),f}function mg(t){Et.H=mu;var n=Xe!==null&&Xe.next!==null;if(_a=0,hn=Xe=he=null,ou=!1,ko=0,br=null,n)throw Error(s(300));t===null||dn||(t=t.dependencies,t!==null&&Jl(t)&&(dn=!0))}function gg(t,n,a,r){he=t;var u=0;do{if(Tr&&(br=null),ko=0,Tr=!1,25<=u)throw Error(s(301));if(u+=1,hn=Xe=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}Et.H=DS,f=n(a,r)}while(Tr);return f}function ES(){var t=Et.H,n=t.useState()[0];return n=typeof n.then=="function"?jo(n):n,t=t.useState()[0],(Xe!==null?Xe.memoizedState:null)!==t&&(he.flags|=1024),n}function Ff(){var t=lu!==0;return lu=0,t}function Hf(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Gf(t){if(ou){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}ou=!1}_a=0,hn=Xe=he=null,Tr=!1,ko=lu=0,br=null}function Vn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return hn===null?he.memoizedState=hn=t:hn=hn.next=t,hn}function un(){if(Xe===null){var t=he.alternate;t=t!==null?t.memoizedState:null}else t=Xe.next;var n=hn===null?he.memoizedState:hn.next;if(n!==null)hn=n,Xe=t;else{if(t===null)throw he.alternate===null?Error(s(467)):Error(s(310));Xe=t,t={memoizedState:Xe.memoizedState,baseState:Xe.baseState,baseQueue:Xe.baseQueue,queue:Xe.queue,next:null},hn===null?he.memoizedState=hn=t:hn=hn.next=t}return hn}function uu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function jo(t){var n=ko;return ko+=1,br===null&&(br=[]),t=rg(br,t,n),n=he,(hn===null?n.memoizedState:hn.next)===null&&(n=n.alternate,Et.H=n===null||n.memoizedState===null?Qg:Jg),t}function cu(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return jo(t);if(t.$$typeof===ht)return;if(t.$$typeof===ft)return Cn(t)}throw Error(s(438,String(t)))}function Vf(t){var n=null,a=he.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=he.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=uu(),he.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),r=0;r<t;r++)a[r]=Ae;return n.index++,a}function va(t,n){return typeof n=="function"?n(t):n}function fu(t){var n=un();return Xf(n,Xe,t)}function Xf(t,n,a){var r=t.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var u=t.baseQueue,f=r.pending;if(f!==null){if(u!==null){var _=u.next;u.next=f.next,f.next=_}n.baseQueue=u=f,r.pending=null}if(f=t.baseState,u===null)t.memoizedState=f;else{n=u.next;var E=_=null,L=null,W=n,at=!1;do{var gt=W.lane&-536870913;if(gt!==W.lane?(Te&gt)===gt:(_a&gt)===gt){var j=W.revertLane;if(j===0)L!==null&&(L=L.next={lane:0,revertLane:0,gesture:null,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null}),gt===Ns&&(at=!0);else if((_a&j)===j){W=W.next,j===Ns&&(at=!0);continue}else gt={lane:0,revertLane:W.revertLane,gesture:null,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null},L===null?(E=L=gt,_=f):L=L.next=gt,he.lanes|=j,Qa|=j;gt=W.action,Is&&a(f,gt),f=W.hasEagerState?W.eagerState:a(f,gt)}else j={lane:gt,revertLane:W.revertLane,gesture:W.gesture,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null},L===null?(E=L=j,_=f):L=L.next=j,he.lanes|=gt,Qa|=gt;W=W.next}while(W!==null&&W!==n);if(L===null?_=f:L.next=E,!ri(f,t.memoizedState)&&(dn=!0,at&&(a=Sr,a!==null)))throw a;t.memoizedState=f,t.baseState=_,t.baseQueue=L,r.lastRenderedState=f}return u===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function kf(t){var n=un(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var r=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var _=u=u.next;do f=t(f,_.action),_=_.next;while(_!==u);ri(f,n.memoizedState)||(dn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function _g(t,n,a){var r=he,u=un(),f=_e;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var _=!ri((Xe||u).memoizedState,a);if(_&&(u.memoizedState=a,dn=!0),u=u.queue,Yf(yg.bind(null,r,u,t),[t]),t=u.getSnapshot!==n||_||hn!==null&&(hn.memoizedState.tag&1)!==0,Ar(t?9:8,{destroy:void 0},xg.bind(null,r,u,a,n),null),t){if(r.flags|=2048,Ye===null)throw Error(s(349));f||(_a&127)!==0||vg(r,n,a)}return a}function vg(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=he.updateQueue,n===null?(n=uu(),he.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function xg(t,n,a,r){n.value=a,n.getSnapshot=r,Sg(n)&&Mg(t)}function yg(t,n,a){return a(function(){Sg(n)&&Mg(t)})}function Sg(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!ri(t,a)}catch{return!0}}function Mg(t){var n=As(t,2);n!==null&&Qn(n,t,2)}function jf(t){var n=Vn();if(typeof t=="function"){var a=t;if(t=a(),Is){_n(!0);try{a()}finally{_n(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:va,lastRenderedState:t},n}function Eg(t,n,a,r){return t.baseState=a,Xf(t,Xe,typeof r=="function"?r:va)}function TS(t,n,a,r,u){if(pu(t))throw Error(s(485));if(t=n.action,t!==null){var f={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){f.listeners.push(_)}};Et.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,Tg(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Tg(t,n){var a=n.action,r=n.payload,u=t.state;if(n.isTransition){var f=Et.T,_={};_.types=f!==null?f.types:null,Et.T=_;try{var E=a(u,r),L=Et.S;L!==null&&L(_,E),bg(t,n,E)}catch(W){qf(t,n,W)}finally{f!==null&&_.types!==null&&(f.types=_.types),Et.T=f}}else try{f=a(u,r),bg(t,n,f)}catch(W){qf(t,n,W)}}function bg(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){Ag(t,n,r)},function(r){return qf(t,n,r)}):Ag(t,n,a)}function Ag(t,n,a){n.status="fulfilled",n.value=a,Rg(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Tg(t,a)))}function qf(t,n,a){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,Rg(n),n=n.next;while(n!==r)}t.action=null}function Rg(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Cg(t,n){return n}function wg(t,n){if(_e){var a=Ye.formState;if(a!==null){t:{var r=he;if(_e){if(Qe){e:{for(var u=Qe,f=Si;u.nodeType!==8;){if(!f){u=null;break e}if(u=Ei(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Qe=Ei(u.nextSibling),r=u.data==="F!";break t}}Fa(r)}r=!1}r&&(n=a[0])}}return a=Vn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Cg,lastRenderedState:n},a.queue=r,a=Wg.bind(null,he,r),r.dispatch=a,r=jf(!1),f=Jf.bind(null,he,!1,r.queue),r=Vn(),u={state:n,dispatch:null,action:t,pending:null},r.queue=u,a=TS.bind(null,he,u,f,a),u.dispatch=a,r.memoizedState=t,[n,a,!1]}function Dg(t){var n=un();return Ug(n,Xe,t)}function Ug(t,n,a){if(n=Xf(t,n,Cg)[0],t=fu(va)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=jo(n)}catch(_){throw _===Mr?eu:_}else r=n;n=un();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(he.flags|=2048,Ar(9,{destroy:void 0},bS.bind(null,u,a),null)),[r,f,t]}function bS(t,n){t.action=n}function Ng(t){var n=un(),a=Xe;if(a!==null)return Ug(n,a,t);un(),n=n.memoizedState,a=un();var r=a.queue.dispatch;return a.memoizedState=t,[n,r,!1]}function Ar(t,n,a,r){return t={tag:t,create:a,deps:r,inst:n,next:null},n=he.updateQueue,n===null&&(n=uu(),he.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(r=a.next,a.next=t,t.next=r,n.lastEffect=t),t}function Lg(){return un().memoizedState}function hu(t,n,a,r){var u=Vn();he.flags|=t,u.memoizedState=Ar(1|n,{destroy:void 0},a,r===void 0?null:r)}function du(t,n,a,r){var u=un();r=r===void 0?null:r;var f=u.memoizedState.inst;Xe!==null&&r!==null&&If(r,Xe.memoizedState.deps)?u.memoizedState=Ar(n,f,a,r):(he.flags|=t,u.memoizedState=Ar(1|n,f,a,r))}function Og(t,n){hu(8390656,8,t,n)}function Yf(t,n){du(2048,8,t,n)}function AS(t){he.flags|=4;var n=he.updateQueue;if(n===null)n=uu(),he.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Pg(t){var n=un().memoizedState;return AS({ref:n,nextImpl:t}),function(){if((Pe&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function zg(t,n){return du(4,2,t,n)}function Ig(t,n){return du(4,4,t,n)}function Bg(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Fg(t,n,a){a=a!=null?a.concat([t]):null,du(4,4,Bg.bind(null,n,t),a)}function Wf(){}function Hg(t,n){var a=un();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&If(n,r[1])?r[0]:(a.memoizedState=[t,n],t)}function Gg(t,n){var a=un();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&If(n,r[1]))return r[0];if(r=t(),Is){_n(!0);try{t()}finally{_n(!1)}}return a.memoizedState=[r,n],r}function Zf(t,n,a){return a===void 0||(_a&1073741824)!==0&&(Te&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=Q_(),he.lanes|=t,Qa|=t,a)}function Vg(t,n,a,r){return ri(a,n)?a:ja.current!==null?(t=Zf(t,a,r),ri(t,n)||(dn=!0),t):(_a&106)===0||(_a&1073741824)!==0&&(Te&261930)===0?(dn=!0,t.memoizedState=a):(t=Q_(),he.lanes|=t,Qa|=t,n)}function Xg(t,n,a,r,u){var f=qt.p;qt.p=f!==0&&8>f?f:8;var _=Et.T,E={};E.types=_!==null?_.types:null,Et.T=E,Jf(t,!1,n,a);try{var L=u(),W=Et.S;if(W!==null&&W(E,L),L!==null&&typeof L=="object"&&typeof L.then=="function"){var at=SS(L,r);qo(t,n,at,fi(t))}else qo(t,n,r,fi(t))}catch(gt){qo(t,n,{then:function(){},status:"rejected",reason:gt},fi())}finally{qt.p=f,_!==null&&E.types!==null&&(_.types=E.types),Et.T=_}}function RS(){}function Kf(t,n,a,r){if(t.tag!==5)throw Error(s(476));var u=kg(t).queue;Xg(t,u,n,I,a===null?RS:function(){return jg(t),a(r)})}function kg(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:I,baseState:I,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:va,lastRenderedState:I},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:va,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function jg(t){var n=kg(t);n.next===null&&(n=t.alternate.memoizedState),qo(t,n.next.queue,{},fi())}function Qf(){return Cn(jr)}function qg(){return un().memoizedState}function Yg(){return un().memoizedState}function CS(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=fi();t=Xa(a);var r=ka(n,t,a);r!==null&&(Qn(r,n,a),Ho(r,n,a)),n={cache:bf()},t.payload=n;return}n=n.return}}function wS(t,n,a){var r=fi();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},pu(t)?Zg(n,a):(a=gf(t,n,a,r),a!==null&&(Qn(a,t,r),Kg(a,n,r)))}function Wg(t,n,a){var r=fi();qo(t,n,a,r)}function qo(t,n,a,r){var u={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(pu(t))Zg(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var _=n.lastRenderedState,E=f(_,a);if(u.hasEagerState=!0,u.eagerState=E,ri(E,_))return jl(t,n,u,0),Ye===null&&kl(),!1}catch{}if(a=gf(t,n,u,r),a!==null)return Qn(a,t,r),Kg(a,n,r),!0}return!1}function Jf(t,n,a,r){if(r={lane:2,revertLane:Vh(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},pu(t)){if(n)throw Error(s(479))}else n=gf(t,a,r,2),n!==null&&Qn(n,t,2)}function pu(t){var n=t.alternate;return t===he||n!==null&&n===he}function Zg(t,n){Tr=ou=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Kg(t,n,a){if((a&4194048)!==0){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,Z(t,a)}}var mu={readContext:Cn,use:cu,useCallback:rn,useContext:rn,useEffect:rn,useImperativeHandle:rn,useLayoutEffect:rn,useInsertionEffect:rn,useMemo:rn,useReducer:rn,useRef:rn,useState:rn,useDebugValue:rn,useDeferredValue:rn,useTransition:rn,useSyncExternalStore:rn,useId:rn,useHostTransitionStatus:rn,useFormState:rn,useActionState:rn,useOptimistic:rn,useMemoCache:rn,useCacheRefresh:rn,useEffectEvent:rn},Qg={readContext:Cn,use:cu,useCallback:function(t,n){return Vn().memoizedState=[t,n===void 0?null:n],t},useContext:Cn,useEffect:Og,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,hu(4194308,4,Bg.bind(null,n,t),a)},useLayoutEffect:function(t,n){return hu(4194308,4,t,n)},useInsertionEffect:function(t,n){hu(4,2,t,n)},useMemo:function(t,n){var a=Vn();n=n===void 0?null:n;var r=t();if(Is){_n(!0);try{t()}finally{_n(!1)}}return a.memoizedState=[r,n],r},useReducer:function(t,n,a){var r=Vn();if(a!==void 0){var u=a(n);if(Is){_n(!0);try{a(n)}finally{_n(!1)}}}else u=n;return r.memoizedState=r.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},r.queue=t,t=t.dispatch=wS.bind(null,he,t),[r.memoizedState,t]},useRef:function(t){var n=Vn();return t={current:t},n.memoizedState=t},useState:function(t){t=jf(t);var n=t.queue,a=Wg.bind(null,he,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Wf,useDeferredValue:function(t,n){var a=Vn();return Zf(a,t,n)},useTransition:function(){var t=jf(!1);return t=Xg.bind(null,he,t.queue,!0,!1),Vn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var r=he,u=Vn();if(_e){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Ye===null)throw Error(s(349));(Te&127)!==0||vg(r,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,Og(yg.bind(null,r,f,t),[t]),r.flags|=2048,Ar(9,{destroy:void 0},xg.bind(null,r,f,a,n),null),a},useId:function(){var t=Vn(),n=Ye.identifierPrefix;if(_e){var a=ji,r=ki;a=(r&~(1<<32-On(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=lu++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=MS++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Qf,useFormState:wg,useActionState:wg,useOptimistic:function(t){var n=Vn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Jf.bind(null,he,!0,a),a.dispatch=n,[t,n]},useMemoCache:Vf,useCacheRefresh:function(){return Vn().memoizedState=CS.bind(null,he)},useEffectEvent:function(t){var n=Vn(),a={impl:t};return n.memoizedState=a,function(){if((Pe&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Jg={readContext:Cn,use:cu,useCallback:Hg,useContext:Cn,useEffect:Yf,useImperativeHandle:Fg,useInsertionEffect:zg,useLayoutEffect:Ig,useMemo:Gg,useReducer:fu,useRef:Lg,useState:function(){return fu(va)},useDebugValue:Wf,useDeferredValue:function(t,n){var a=un();return Vg(a,Xe.memoizedState,t,n)},useTransition:function(){var t=fu(va)[0],n=un().memoizedState;return[typeof t=="boolean"?t:jo(t),n]},useSyncExternalStore:_g,useId:qg,useHostTransitionStatus:Qf,useFormState:Dg,useActionState:Dg,useOptimistic:function(t,n){var a=un();return Eg(a,Xe,t,n)},useMemoCache:Vf,useCacheRefresh:Yg,useEffectEvent:Pg},DS={readContext:Cn,use:cu,useCallback:Hg,useContext:Cn,useEffect:Yf,useImperativeHandle:Fg,useInsertionEffect:zg,useLayoutEffect:Ig,useMemo:Gg,useReducer:kf,useRef:Lg,useState:function(){return kf(va)},useDebugValue:Wf,useDeferredValue:function(t,n){var a=un();return Xe===null?Zf(a,t,n):Vg(a,Xe.memoizedState,t,n)},useTransition:function(){var t=kf(va)[0],n=un().memoizedState;return[typeof t=="boolean"?t:jo(t),n]},useSyncExternalStore:_g,useId:qg,useHostTransitionStatus:Qf,useFormState:Ng,useActionState:Ng,useOptimistic:function(t,n){var a=un();return Xe!==null?Eg(a,Xe,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Vf,useCacheRefresh:Yg,useEffectEvent:Pg};function $f(t,n,a,r){n=t.memoizedState,a=a(r,n),a=a==null?n:P({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var th={enqueueSetState:function(t,n,a){t=t._reactInternals;var r=fi(),u=Xa(r);u.payload=n,a!=null&&(u.callback=a),n=ka(t,u,r),n!==null&&(Qn(n,t,r),Ho(n,t,r))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var r=fi(),u=Xa(r);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=ka(t,u,r),n!==null&&(Qn(n,t,r),Ho(n,t,r))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=fi(),r=Xa(a);r.tag=2,n!=null&&(r.callback=n),n=ka(t,r,a),n!==null&&(Qn(n,t,a),Ho(n,t,a))}};function $g(t,n,a,r,u,f,_){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,f,_):n.prototype&&n.prototype.isPureReactComponent?!No(a,r)||!No(u,f):!0}function t_(t,n,a,r){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==t&&th.enqueueReplaceState(n,n.state,null)}function Bs(t,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(t=t.defaultProps){a===n&&(a=P({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function e_(t){Xl(t)}function n_(t){console.error(t)}function i_(t){Xl(t)}function gu(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function a_(t,n,a){try{var r=t.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function eh(t,n,a){return a=Xa(a),a.tag=3,a.payload={element:null},a.callback=function(){gu(t,n)},a}function s_(t){return t=Xa(t),t.tag=3,t}function r_(t,n,a,r){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=r.value;t.payload=function(){return u(f)},t.callback=function(){a_(n,a,r)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(t.callback=function(){a_(n,a,r),typeof u!="function"&&(Ja===null?Ja=new Set([this]):Ja.add(this));var E=r.stack;this.componentDidCatch(r.value,{componentStack:E!==null?E:""})})}function US(t,n,a,r,u){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&Ds(n,a,u,!0),a=wn.current,a!==null){switch(a.tag){case 31:case 13:case 19:return zn===null?Iu():a.alternate===null&&on===0&&(on=3),a.flags&=-257,a.flags|=65536,a.lanes=u,r===nu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),Fh(t,r,u)),!1;case 22:return a.flags|=65536,r===nu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),Fh(t,r,u)),!1}throw Error(s(435,a.tag))}return Fh(t,r,u),Iu(),!1}if(_e)return n=wn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,r!==Sf&&(t=Error(s(422),{cause:r}),Po(vi(t,a)))):(r!==Sf&&(n=Error(s(423),{cause:r}),Po(vi(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,r=vi(r,a),u=eh(t.stateNode,r,u),Uf(t,u),on!==4&&(on=2)),!1;var f=Error(s(520),{cause:r});if(f=vi(f,a),tl===null?tl=[f]:tl.push(f),on!==4&&(on=2),n===null)return!0;r=vi(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=eh(a.stateNode,r,t),Uf(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ja===null||!Ja.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=s_(u),r_(u,t,a,r),Uf(a,u),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var nh=Error(s(461)),dn=!1;function xn(t,n,a,r){n.child=t===null?cg(n,null,a,r):zs(n,t.child,a,r)}function o_(t,n,a,r,u){a=a.render;var f=n.ref;if("ref"in r){var _={};for(var E in r)E!=="ref"&&(_[E]=r[E])}else _=r;return Us(n),r=Bf(t,n,a,_,f,u),E=Ff(),t!==null&&!dn?(Hf(t,n,u),xa(t,n,u)):(_e&&E&&Zl(n),n.flags|=1,xn(t,n,r,u),n.child)}function l_(t,n,a,r,u){if(t===null){var f=a.type;return typeof f=="function"&&!_f(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,u_(t,n,f,r,u)):(t=Yl(a.type,null,r,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!ch(t,u)){var _=f.memoizedProps;if(a=a.compare,a=a!==null?a:No,a(_,r)&&t.ref===n.ref)return xa(t,n,u)}return n.flags|=1,t=da(f,r),t.ref=n.ref,t.return=n,n.child=t}function u_(t,n,a,r,u){if(t!==null){var f=t.memoizedProps;if(No(f,r)&&t.ref===n.ref)if(dn=!1,n.pendingProps=r=f,ch(t,u))(t.flags&131072)!==0&&(dn=!0);else return n.lanes=t.lanes,xa(t,n,u)}return ih(t,n,a,r,u)}function c_(t,n,a,r){var u=r.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(r=n.child=t.child,u=0;r!==null;)u=u|r.lanes|r.childLanes,r=r.sibling;r=u&~f}else r=0,n.child=null;return f_(t,n,f,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&tu(n,f!==null?f.cachePool:null),f!==null?dg(n,f):Lf(),pg(n);else return r=n.lanes=536870912,f_(t,n,f!==null?f.baseLanes|a:a,a,r)}else f!==null?(tu(n,f.cachePool),dg(n,f),Ya(),n.memoizedState=null):(t!==null&&tu(n,null),Lf(),Ya());return xn(t,n,u,a),n.child}function Yo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function f_(t,n,a,r,u){var f=Rf();return f=f===null?null:{parent:fn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&tu(n,null),Lf(),pg(n),t!==null&&Ds(t,n,r,!0),n.childLanes=u,null}function _u(t,n){return n=vu({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function h_(t,n,a){return zs(n,t.child,null,a),t=_u(n,n.pendingProps),t.flags|=2,oi(n),n.memoizedState=null,t}function NS(t,n,a){var r=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(_e){if(r.mode==="hidden")return t=_u(n,r),n.lanes=536870912,t.memoizedState={baseLanes:0,cachePool:null},Yo(null,t);if(Pf(n),(t=Qe)?(t=B0(t,Si),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ia!==null?{id:ki,overflow:ji}:null,retryLane:536870912,hydrationErrors:null},a=Zm(t),a.return=n,n.child=a,En=n,Qe=null)):t=null,t===null)throw Fa(n);return n.lanes=536870912,null}return _u(n,r)}var f=t.memoizedState;if(f!==null){var _=f.dehydrated;if(Pf(n),u)if(n.flags&256)n.flags&=-257,n=h_(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(dn||Ds(t,n,a,!1),u=(a&t.childLanes)!==0,dn||u){if(ja.current===null){if(r=Ye,r!==null&&(_=ot(r,a),_!==0&&_!==f.retryLane))throw f.retryLane=_,As(t,_),Qn(r,t,_),nh;Iu()}n=h_(t,n,a)}else t=f.treeContext,Qe=Ei(_.nextSibling),En=n,_e=!0,Ba=null,Si=!1,t!==null&&Jm(n,t),n=_u(n,r),n.flags|=134221824;return n}return t=da(t.child,{mode:r.mode,children:r.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Rr(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function ih(t,n,a,r,u){return Us(n),a=Bf(t,n,a,r,void 0,u),r=Ff(),t!==null&&!dn?(Hf(t,n,u),xa(t,n,u)):(_e&&r&&Zl(n),n.flags|=1,xn(t,n,a,u),n.child)}function d_(t,n,a,r,u,f){return Us(n),n.updateQueue=null,a=gg(n,r,a,u),mg(t),r=Ff(),t!==null&&!dn?(Hf(t,n,f),xa(t,n,f)):(_e&&r&&Zl(n),n.flags|=1,xn(t,n,a,f),n.child)}function p_(t,n,a,r,u){if(Us(n),n.stateNode===null){var f=_r,_=a.contextType;typeof _=="object"&&_!==null&&(f=Cn(_)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=th,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},wf(n),_=a.contextType,f.context=typeof _=="object"&&_!==null?Cn(_):_r,f.state=n.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&($f(n,a,_,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(_=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),_!==f.state&&th.enqueueReplaceState(f,f.state,null),Vo(n,r,f,u),Go(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(t===null){f=n.stateNode;var E=n.memoizedProps,L=Bs(a,E);f.props=L;var W=f.context,at=a.contextType;_=_r,typeof at=="object"&&at!==null&&(_=Cn(at));var gt=a.getDerivedStateFromProps;at=typeof gt=="function"||typeof f.getSnapshotBeforeUpdate=="function",E=n.pendingProps!==E,at||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(E||W!==_)&&t_(n,f,r,_),Va=!1;var j=n.memoizedState;f.state=j,Vo(n,r,f,u),Go(),W=n.memoizedState,E||j!==W||Va?(typeof gt=="function"&&($f(n,a,gt,r),W=n.memoizedState),(L=Va||$g(n,a,L,r,j,W,_))?(at||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=W),f.props=r,f.state=W,f.context=_,r=L):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,Df(t,n),_=n.memoizedProps,at=Bs(a,_),f.props=at,gt=n.pendingProps,j=f.context,W=a.contextType,L=_r,typeof W=="object"&&W!==null&&(L=Cn(W)),E=a.getDerivedStateFromProps,(W=typeof E=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(_!==gt||j!==L)&&t_(n,f,r,L),Va=!1,j=n.memoizedState,f.state=j,Vo(n,r,f,u),Go();var nt=n.memoizedState;_!==gt||j!==nt||Va||t!==null&&t.dependencies!==null&&Jl(t.dependencies)?(typeof E=="function"&&($f(n,a,E,r),nt=n.memoizedState),(at=Va||$g(n,a,at,r,j,nt,L)||t!==null&&t.dependencies!==null&&Jl(t.dependencies))?(W||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,nt,L),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,nt,L)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&j===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&j===t.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=nt),f.props=r,f.state=nt,f.context=L,r=at):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&j===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&j===t.memoizedState||(n.flags|=1024),r=!1)}return f=r,Rr(t,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&r?(n.child=zs(n,t.child,null,u),n.child=zs(n,null,a,u)):xn(t,n,a,u),n.memoizedState=f.state,t=n.child):t=xa(t,n,u),t}function m_(t,n,a,r){return Cs(),n.flags|=256,xn(t,n,a,r),n.child}var ah={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function sh(t){return{baseLanes:t,cachePool:ag()}}function rh(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ci),t}function g_(t,n,a){var r=n.pendingProps,u=!1,f=(n.flags&128)!==0,_;if((_=f)||(_=t!==null&&t.memoizedState===null?!1:(Dn.current&2)!==0),_&&(u=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,t===null){if(_e){if(u?qa(n):Ya(),(t=Qe)?(t=B0(t,Si),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ia!==null?{id:ki,overflow:ji}:null,retryLane:536870912,hydrationErrors:null},a=Zm(t),a.return=n,n.child=a,En=n,Qe=null)):t=null,t===null)throw Fa(n);return sd(t)?n.lanes=32:n.lanes=536870912,null}return f=r.children,r=r.fallback,u?(Ya(),u=n.mode,f=vu({mode:"hidden",children:f},u),r=Rs(r,u,a,null),f.return=n,r.return=n,f.sibling=r,n.child=f,r=n.child,r.memoizedState=sh(a),r.childLanes=rh(t,_,a),n.memoizedState=ah,Yo(null,r)):(qa(n),oh(n,f))}var E=t.memoizedState;if(E!==null){var L=E.dehydrated;if(L!==null)return LS(t,n,f,_,r,L,E,a)}return u?(Ya(),u=r.fallback,f=n.mode,E=t.child,L=E.sibling,r=da(E,{mode:"hidden",children:r.children}),r.subtreeFlags=E.subtreeFlags&1206910976,L!==null?u=da(L,u):(u=Rs(u,f,a,null),u.flags|=2),u.return=n,r.return=n,r.sibling=u,n.child=r,Yo(null,r),r=n.child,u=t.child.memoizedState,u===null?u=sh(a):(f=u.cachePool,f!==null?(E=fn._currentValue,f=f.parent!==E?{parent:E,pool:E}:f):f=ag(),u={baseLanes:u.baseLanes|a,cachePool:f}),r.memoizedState=u,r.childLanes=rh(t,_,a),n.memoizedState=ah,Yo(t.child,r)):(qa(n),a=t.child,t=a.sibling,a=da(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,t!==null&&(_=n.deletions,_===null?(n.deletions=[t],n.flags|=16):_.push(t)),n.child=a,n.memoizedState=null,a)}function oh(t,n){return n=vu({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function vu(t,n){return t=Yn(22,t,null,n),t.lanes=0,t}function xu(t,n,a){return zs(n,t.child,null,a),t=oh(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function LS(t,n,a,r,u,f,_,E){if(a)return n.flags&256?(qa(n),n.flags&=-257,xu(t,n,E)):n.memoizedState!==null?(Ya(),n.child=t.child,n.flags|=128,null):(Ya(),f=u.fallback,_=n.mode,u=vu({mode:"visible",children:u.children},_),f=Rs(f,_,E,null),f.flags|=2,u.return=n,f.return=n,u.sibling=f,n.child=u,zs(n,t.child,null,E),u=n.child,u.memoizedState=sh(E),u.childLanes=rh(t,r,E),n.memoizedState=ah,Yo(null,u));if(qa(n),sd(f)){if(r=f.nextSibling&&f.nextSibling.dataset,r)var L=r.dgst;return r=L,r!==""&&(u=Error(s(419)),u.stack="",u.digest=r,Po({value:u,source:null,stack:null})),xu(t,n,E)}if(dn||Ds(t,n,E,!1),r=(E&t.childLanes)!==0,dn||r){if(ja.current!==null)return xu(t,n,E);if(r=Ye,r!==null&&(u=ot(r,E),u!==0&&u!==_.retryLane))throw _.retryLane=u,As(t,u),Qn(r,t,u),nh;return ad(f)||Iu(),xu(t,n,E)}return ad(f)?(n.flags|=192,n.child=t.child,null):(t=_.treeContext,Qe=Ei(f.nextSibling),En=n,_e=!0,Ba=null,Si=!1,t!==null&&Jm(n,t),n=oh(n,u.children),n.flags|=134221824,n)}function __(t,n,a){t.lanes|=n;var r=t.alternate;r!==null&&(r.lanes|=n),Ql(t.return,n,a)}function v_(t){for(var n=null;t!==null;){var a=t.alternate;a!==null&&ru(a)===null&&(n=t),t=t.sibling}return n}function yu(t,n,a,r,u,f){var _=t.memoizedState;_===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:u,treeForkCount:f}:(_.isBackwards=n,_.rendering=null,_.renderingStartTime=0,_.last=r,_.tail=a,_.tailMode=u,_.treeForkCount=f)}function lh(t){var n=t.child;for(t.child=null;n!==null;){var a=n.sibling;n.sibling=t.child,t.child=n,n=a}}function uh(t,n,a){var r=n.pendingProps,u=r.revealOrder,f=r.tail;r=r.children;var _=Dn.current;if(n.flags&128)return Xo(n,_),null;var E=(_&2)!==0;if(E?(_=_&1|2,n.flags|=128):_&=1,Xo(n,_),u==="backwards"&&t!==null?(lh(t),xn(t,n,r,a),lh(t)):xn(t,n,r,a),r=_e?Oo:0,!E&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&__(t,a,n);else if(t.tag===19)__(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"backwards":a=v_(n.child),a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null,lh(n)),yu(n,!0,u,null,f,r);break;case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&ru(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}yu(n,!0,a,null,f,r);break;case"together":yu(n,!1,null,null,void 0,r);break;case"independent":n.memoizedState=null;break;default:a=v_(n.child),a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),yu(n,!1,u,a,f,r)}return n.child}function x_(t,n,a){var r=n.pendingProps;return Ha(n,n.type,r.value),xn(t,n,r.children,a),n.child}function xa(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Qa|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Ds(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=da(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=da(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function ch(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Jl(t)))}function OS(t,n,a){switch(n.tag){case 3:U(n,n.stateNode.containerInfo),Ha(n,fn,t.memoizedState.cache),Cs();break;case 27:case 5:it(n);break;case 4:U(n,n.stateNode.containerInfo);break;case 10:Ha(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Pf(n),null;break;case 13:var r=n.memoizedState;if(r!==null){if(r.dehydrated!==null)return qa(n),n.flags|=128,null;r=Ds(t,n,a,!1);var u=n.child.childLanes;return r||(a&u)!==0?g_(t,n,a):(qa(n),t=xa(t,n,a),t!==null?t.sibling:null)}qa(n);break;case 19:if(n.flags&128)return uh(t,n,a);if(u=(t.flags&128)!==0,r=(a&n.childLanes)!==0,r||(Ds(t,n,a,!1),r=(a&n.childLanes)!==0),u){if(r)return uh(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Xo(n,Dn.current),r)break;return null;case 22:return n.lanes=0,c_(t,n,a,n.pendingProps);case 24:Ha(n,fn,t.memoizedState.cache)}return xa(t,n,a)}function y_(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)dn=!0;else{if(!ch(t,a)&&(n.flags&128)===0)return dn=!1,OS(t,n,a);dn=(t.flags&131072)!==0}else dn=!1,_e&&(n.flags&1048576)!==0&&Qm(n,Oo,n.index);switch(n.lanes=0,n.tag){case 16:t:{var r=n.pendingProps;if(t=Os(n.elementType),n.type=t,typeof t=="function")_f(t)?(r=Bs(t,r),n.tag=1,n=p_(null,n,t,r,a)):(n.tag=0,n=ih(null,n,t,r,a));else{if(t!=null){var u=t.$$typeof;if(u===k){n.tag=11,n=o_(null,n,t,r,a);break t}else if(u===vt){n.tag=14,n=l_(null,n,t,r,a);break t}else if(u===ft){n.tag=10,n.type=t,n=x_(null,n,a);break t}}throw n=Nt(t)||t,Error(s(306,n,""))}}return n;case 0:return ih(t,n,n.type,n.pendingProps,a);case 1:return r=n.type,u=Bs(r,n.pendingProps),p_(t,n,r,u,a);case 3:t:{if(U(n,n.stateNode.containerInfo),t===null)throw Error(s(387));r=n.pendingProps;var f=n.memoizedState;u=f.element,Df(t,n),Vo(n,r,null,a);var _=n.memoizedState;if(r=_.cache,Ha(n,fn,r),r!==f.cache&&Tf(n,[fn],a,!0),Go(),r=_.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=m_(t,n,r,a);break t}else if(r!==u){u=vi(Error(s(424)),n),Po(u),n=m_(t,n,r,a);break t}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,Qe=Ei(t.firstChild),En=n,_e=!0,Ba=null,Si=!0,a=cg(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling;else{if(Cs(),r===u){n=xa(t,n,a);break t}xn(t,n,r,a)}n=n.child}return n;case 26:return Rr(t,n),t===null?(a=j0(n.type,null,n.pendingProps,null))?n.memoizedState=a:_e||(n.stateNode=T0(n.type,n.pendingProps,qe.current,n)):n.memoizedState=j0(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return it(n),t===null&&_e&&(r=n.stateNode=G0(n.type,n.pendingProps,qe.current),En=n,Si=!0,u=Qe,es(n.type)?(rd=u,Qe=Ei(r.firstChild)):Qe=u),xn(t,n,n.pendingProps.children,a),Rr(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&_e&&((u=r=Qe)&&(r=CM(r,n.type,n.pendingProps,Si),r!==null?(n.stateNode=r,En=n,Qe=Ei(r.firstChild),Si=!1,u=!0):u=!1),u||Fa(n)),it(n),u=n.type,f=n.pendingProps,_=t!==null?t.memoizedProps:null,r=f.children,Qh(u,f)?r=null:_!==null&&Qh(u,_)&&(n.flags|=32),n.memoizedState!==null&&(u=Bf(t,n,ES,null,null,a),jr._currentValue=u),Rr(t,n),xn(t,n,r,a),n.child;case 6:return t===null&&_e&&((t=a=Qe)&&(a=wM(a,n.pendingProps,Si),a!==null?(n.stateNode=a,En=n,Qe=null,t=!0):t=!1),t||Fa(n)),null;case 13:return g_(t,n,a);case 4:return U(n,n.stateNode.containerInfo),r=n.pendingProps,t===null?n.child=zs(n,null,r,a):xn(t,n,r,a),n.child;case 11:return o_(t,n,n.type,n.pendingProps,a);case 7:return r=n.pendingProps,Rr(t,n),xn(t,n,r,a),n.child;case 8:return xn(t,n,n.pendingProps.children,a),n.child;case 12:return xn(t,n,n.pendingProps.children,a),n.child;case 10:return x_(t,n,a);case 9:return u=n.type._context,r=n.pendingProps.children,Us(n),u=Cn(u),r=r(u),n.flags|=1,xn(t,n,r,a),n.child;case 14:return l_(t,n,n.type,n.pendingProps,a);case 15:return u_(t,n,n.type,n.pendingProps,a);case 19:return uh(t,n,a);case 31:return NS(t,n,a);case 22:return c_(t,n,a,n.pendingProps);case 24:return Us(n),r=Cn(fn),t===null?(u=Rf(),u===null&&(u=Ye,f=bf(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:r,cache:u},wf(n),Ha(n,fn,u)):((t.lanes&a)!==0&&(Df(t,n),Vo(n,null,null,a),Go()),u=t.memoizedState,f=n.memoizedState,u.parent!==r?(u={parent:r,cache:r},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Ha(n,fn,r)):(r=f.cache,Ha(n,fn,r),r!==u.cache&&Tf(n,[fn],a,!0))),xn(t,n,n.pendingProps.children,a),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=n.pendingProps,r.name!=null&&r.name!=="auto"?n.flags|=t===null?18882560:18874368:_e&&Zl(n),t!==null&&t.memoizedProps.name!==r.name?n.flags|=4194816:Rr(t,n),xn(t,n,r.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ya(t){t.flags|=4}function fh(t,n,a,r,u){var f;if((f=(t.mode&32)!==0)&&(f=a===null?Z0(n,r):Z0(n,r)&&(r.src!==a.src||r.srcSet!==a.srcSet)),f){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(e0())t.flags|=8192;else throw Ps=nu,Cf}else t.flags&=-16777217}function S_(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!K0(n))if(e0())t.flags|=8192;else throw Ps=nu,Cf}function Su(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Ll():536870912,t.lanes|=n,Nr|=n)}function Wo(t,n){if(!_e)switch(t.tailMode){case"visible":break;case"collapsed":for(var a=t.tail,r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null;break;default:for(n=t.tail,a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null}}function Je(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,r=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags&1206910976,r|=u.flags&1206910976,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags,r|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=r,t.childLanes=a,n}function PS(t,n,a){var r=n.pendingProps;switch(yf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Je(n),null;case 1:return Je(n),null;case 3:return a=n.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),ga(fn),b(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(yr(n)?ya(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Mf())),Je(n),null;case 26:var u=n.type,f=n.memoizedState;return t===null?(ya(n),f!==null?(Je(n),S_(n,f)):(Je(n),fh(n,u,null,r,a))):f?f!==t.memoizedState?(ya(n),Je(n),S_(n,f)):(Je(n),n.flags&=-16777217):(t=t.memoizedProps,t!==r&&ya(n),Je(n),fh(n,u,t,r,a)),null;case 27:if(mt(n),a=qe.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&ya(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Je(n),n.subtreeFlags&=-33554433,null}t=Ft.current,yr(n)?$m(n):(t=G0(u,r,a),n.stateNode=t,ya(n))}return Je(n),n.subtreeFlags&=-33554433,null;case 5:if(mt(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&ya(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Je(n),n.subtreeFlags&=-33554433,null}if(f=Ft.current,yr(n))$m(n);else{var _=sl(qe.current);switch(f){case 1:f=_.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=_.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=_.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof r.is=="string"?_.createElement("select",{is:r.is}):_.createElement("select"),r.multiple?f.multiple=!0:r.size&&(f.size=r.size);break;default:f=typeof r.is=="string"?_.createElement(u,{is:r.is}):_.createElement(u)}}f[wt]=n,f[kt]=r;t:for(_=n.child;_!==null;){if(_.tag===5||_.tag===6)f.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===n)break t;for(;_.sibling===null;){if(_.return===null||_.return===n)break t;_=_.return}_.sibling.return=_.return,_=_.sibling}n.stateNode=f;t:switch(Nn(f,u,r),u){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&ya(n)}}return Je(n),n.subtreeFlags&=-33554433,fh(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==r&&ya(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(t=qe.current,yr(n)){if(t=n.stateNode,a=n.memoizedProps,r=null,u=En,u!==null)switch(u.tag){case 27:case 5:r=u.memoizedProps}t[wt]=n,t=!!(t.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||y0(t.nodeValue,a)),t||Fa(n,!0)}else t=sl(t).createTextNode(r),t[wt]=n,n.stateNode=t}return Je(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(r=yr(n),a!==null){if(t===null){if(!r)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[wt]=n}else Cs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Je(n),t=!1}else a=Mf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(oi(n),n):(oi(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Je(n),null;case 13:if(r=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=yr(n),r!==null&&r.dehydrated!==null){if(t===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[wt]=n}else Cs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Je(n),u=!1}else u=Mf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(oi(n),n):(oi(n),null)}return oi(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,t=t!==null&&t.memoizedState!==null,a&&(r=n.child,u=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(u=r.alternate.memoizedState.cachePool.pool),f=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==u&&(r.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Su(n,n.updateQueue),Je(n),null);case 4:return b(),t===null&&qh(n.stateNode.containerInfo),n.flags|=67108864,Je(n),null;case 10:return ga(n.type),Je(n),null;case 19:if(zf(n),r=n.memoizedState,r===null)return Je(n),null;if(u=(n.flags&128)!==0,f=r.rendering,f===null)if(u)Wo(r,!1);else{if(on!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=ru(t),f!==null){for(n.flags|=128,Wo(r,!1),t=f.updateQueue,n.updateQueue=t,Su(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Wm(a,t),a=a.sibling;return Xo(n,Dn.current&1|2),_e&&pa(n,r.treeForkCount),n.child}t=t.sibling}r.tail!==null&&X()>Lu&&(n.flags|=128,u=!0,Wo(r,!1),n.lanes=4194304)}else{if(!u)if(t=ru(f),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,Su(n,t),Wo(r,!0),r.tail===null&&r.tailMode!=="collapsed"&&r.tailMode!=="visible"&&!f.alternate&&!_e)return Je(n),null}else 2*X()-r.renderingStartTime>Lu&&a!==536870912&&(n.flags|=128,u=!0,Wo(r,!1),n.lanes=4194304);r.isBackwards?(f.sibling=n.child,n.child=f):(t=r.last,t!==null?t.sibling=f:n.child=f,r.last=f)}if(r.tail!==null){t=r.tail;t:{for(a=t;a!==null;){if(a.alternate!==null){a=!1;break t}a=a.sibling}a=!0}return r.rendering=t,r.tail=t.sibling,r.renderingStartTime=X(),t.sibling=null,f=Dn.current,f=u?f&1|2:f&1,r.tailMode==="visible"||r.tailMode==="collapsed"||!a||_e?Xo(n,f):(a=f,ie(wn,n),ie(Dn,a),zn===null&&(zn=n)),_e&&pa(n,r.treeForkCount),t}return Je(n),null;case 22:case 23:return oi(n),Of(),r=n.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(Je(n),n.subtreeFlags&6&&(n.flags|=8192)):Je(n),a=n.updateQueue,a!==null&&Su(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),t!==null&&Lt(Ls),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ga(fn),Je(n),null;case 25:return null;case 30:return n.flags|=33554432,Je(n),null}throw Error(s(156,n.tag))}function zS(t,n){switch(yf(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return ga(fn),b(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return mt(n),null;case 31:if(n.memoizedState!==null){if(oi(n),n.alternate===null)throw Error(s(340));Cs()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(oi(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Cs()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return zf(n),t=n.flags,t&65536?(n.flags=t&-65537|128,t=n.memoizedState,t!==null&&(t.rendering=null,t.tail=null),n.flags|=4,n):null;case 4:return b(),null;case 10:return ga(n.type),null;case 22:case 23:return oi(n),Of(),t!==null&&Lt(Ls),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return ga(fn),null;case 25:return null;default:return null}}function M_(t,n){switch(yf(n),n.tag){case 3:ga(fn),b();break;case 26:case 27:case 5:mt(n);break;case 4:b();break;case 31:n.memoizedState!==null&&oi(n);break;case 13:oi(n);break;case 19:zf(n);break;case 10:ga(n.type);break;case 22:case 23:oi(n),Of(),t!==null&&Lt(Ls);break;case 24:ga(fn)}}function Zo(t,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var u=r.next;a=u;do{if((a.tag&t)===t){r=void 0;var f=a.create,_=a.inst;r=f(),_.destroy=r}a=a.next}while(a!==u)}}catch(E){Fe(n,n.return,E)}}function Wa(t,n,a){try{var r=n.updateQueue,u=r!==null?r.lastEffect:null;if(u!==null){var f=u.next;r=f;do{if((r.tag&t)===t){var _=r.inst,E=_.destroy;if(E!==void 0){_.destroy=void 0,u=n;var L=a,W=E;try{W()}catch(at){Fe(u,L,at)}}}r=r.next}while(r!==f)}}catch(at){Fe(n,n.return,at)}}function E_(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{hg(n,a)}catch(r){Fe(t,t.return,r)}}}function T_(t,n,a){a.props=Bs(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(r){Fe(t,n,r)}}function qi(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var r=t.stateNode;break;case 30:var u=t.stateNode,f=fa(t.memoizedProps,u);(u.ref===null||u.ref.name!==f)&&(u.ref=U0(f)),r=u.ref;break;case 7:if(t.stateNode===null){var _=new hi(t);m(t.child,!1,AM,_,void 0,void 0),t.stateNode=_}r=t.stateNode;break;default:r=t.stateNode}typeof a=="function"?t.refCleanup=a(r):a.current=r}}catch(E){Fe(t,n,E)}}function Un(t,n){var a=t.ref,r=t.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(u){Fe(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Fe(t,n,u)}else a.current=null}function Mu(t,n){if((t.tag===5||t.tag===27||t.tag===6)&&t.alternate===null&&n!==null)for(var a=0;a<n.length;a++)I0(t.stateNode,n[a])}function b_(t){for(var n=t.return;n!==null&&(dh(n)&&I0(t.stateNode,n.stateNode),!hh(n));)n=n.return}function Ko(t){for(var n=t.return;n!==null&&(dh(n)&&RM(t.stateNode,n.stateNode),!hh(n));)n=n.return}function hh(t){return t.tag===5||t.tag===3||t.tag===27}function dh(t){return t&&t.tag===7&&t.stateNode!==null}function ph(t){var n=t.type,a=t.memoizedProps,r=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(u){Fe(t,t.return,u)}}function mh(t,n,a){try{var r=t.stateNode;lM(r,t.type,a,n),r[kt]=n}catch(u){Fe(t,t.return,u)}}function A_(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&es(t.type)||t.tag===4}function gh(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||A_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&es(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function _h(t,n,a,r){var u=t.tag;if(u===5||u===6)u=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(u,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(u),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Xi)),Mu(t,r),Ue=!0;else if(u!==4&&(u===27&&(Mu(t,r),r=null,es(t.type)&&(a=t.stateNode,n=null)),t=t.child,t!==null))for(_h(t,n,a,r),t=t.sibling;t!==null;)_h(t,n,a,r),t=t.sibling}function Eu(t,n,a,r){var u=t.tag;if(u===5||u===6)u=t.stateNode,n?a.insertBefore(u,n):a.appendChild(u),Mu(t,r),Ue=!0;else if(u!==4&&(u===27&&(Mu(t,r),r=null,es(t.type)&&(a=t.stateNode)),t=t.child,t!==null))for(Eu(t,n,a,r),t=t.sibling;t!==null;)Eu(t,n,a,r),t=t.sibling}function R_(t){var n=t.stateNode,a=t.memoizedProps;try{for(var r=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Nn(n,r,a),n[wt]=t,n[kt]=a}catch(f){Fe(t,t.return,f)}}var Tu=!1,li=null;function C_(t){(t.tag===30||(t.subtreeFlags&33554432)!==0)&&(Tu=!0)}var Yi=null;function w_(){var t=Yi;return Yi=null,t}var Wn=0;function Cr(t,n,a,r,u){return Wn=0,D_(t.child,n,a,r,u)}function D_(t,n,a,r,u){for(var f=!1;t!==null;){if(t.tag===5){var _=t.stateNode;if(r!==null){var E=td(_);r.push(E),E.view&&(f=!0)}else f||td(_).view&&(f=!0);Tu=!0,w0(_,Wn===0?n:n+"_"+Wn,a),Wn++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&u||D_(t.child,n,a,r,u)&&(f=!0));t=t.sibling}return f}function Wi(t,n){for(;t!==null;)t.tag===5?D0(t.stateNode,t.memoizedProps):(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&n||Wi(t.child,n)),t=t.sibling}function bu(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if((t.tag!==22||t.memoizedState===null)&&(bu(t),t.tag===30&&(t.flags&18874368)!==0&&t.stateNode.paired)){var n=t.memoizedProps;if(n.name==null||n.name==="auto")throw Error(s(544));var a=n.name;n=ha(n.default,n.share),n!=="none"&&(Cr(t,a,n,null,!1)||Wi(t.child,!1))}t=t.sibling}}function vh(t,n){if(t.tag===30){var a=t.stateNode,r=t.memoizedProps,u=fa(r,a),f=ha(r.default,a.paired?r.share:r.enter);f!=="none"?Cr(t,u,f,null,!1)?(bu(t),a.paired||n||zr(t,r.onEnter)):Wi(t.child,!1):bu(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)vh(t,n),t=t.sibling;else bu(t)}function xh(t){if(li!==null&&li.size!==0){var n=li;if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var a=t.memoizedProps,r=a.name;if(r!=null&&r!=="auto"){var u=n.get(r);if(u!==void 0){var f=ha(a.default,a.share);if(f!=="none"&&(Cr(t,r,f,null,!1)?(f=t.stateNode,u.paired=f,f.paired=u,zr(t,a.onShare)):Wi(t.child,!1)),n.delete(r),n.size===0)break}}}xh(t)}t=t.sibling}}}function yh(t){if(t.tag===30){var n=t.memoizedProps,a=fa(n,t.stateNode),r=li!==null?li.get(a):void 0,u=ha(n.default,r!==void 0?n.share:n.exit);u!=="none"&&(Cr(t,a,u,null,!1)?r!==void 0?(u=t.stateNode,r.paired=u,u.paired=r,li.delete(a),zr(t,n.onShare)):zr(t,n.onExit):Wi(t.child,!1)),li!==null&&xh(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)yh(t),t=t.sibling;else li!==null&&xh(t)}function U_(t){for(t=t.child;t!==null;){if(t.tag===30){var n=t.memoizedProps,a=fa(n,t.stateNode);n=ha(n.default,n.update),t.flags&=-5,n!=="none"&&Cr(t,a,n,t.memoizedState=[],!1)}else(t.subtreeFlags&33554432)!==0&&U_(t);t=t.sibling}}function Sh(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var n=t.stateNode;n.paired!==null&&(n.paired=null,Wi(t.child,!1))}Sh(t)}t=t.sibling}}function Au(t){if(t.tag===30)t.stateNode.paired=null,Wi(t.child,!1),Sh(t);else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)Au(t),t=t.sibling;else Sh(t)}function N_(t){for(t=t.child;t!==null;)t.tag===30?Wi(t.child,!1):(t.subtreeFlags&33554432)!==0&&N_(t),t=t.sibling}function Mh(t,n,a,r,u,f,_){for(var E=!1;n!==null;){if(n.tag===5){var L=n.stateNode;if(f!==null&&Wn<f.length){var W=f[Wn],at=td(L);(W.view||at.view)&&(E=!0);var gt;if(gt=(t.flags&4)===0)if(at.clip)gt=!0;else{gt=W.rect;var j=at.rect;gt=gt.y!==j.y||gt.x!==j.x||gt.height!==j.height||gt.width!==j.width}gt&&(t.flags|=4),at.abs?at=!W.abs:(W=W.rect,at=at.rect,at=W.height!==at.height||W.width!==at.width),at&&(t.flags|=32)}else t.flags|=32;(t.flags&4)!==0&&w0(L,Wn===0?a:a+"_"+Wn,u),E&&(t.flags&4)!==0||(Yi===null&&(Yi=[]),Yi.push(L,Wn===0?r:r+"_"+Wn,n.memoizedProps)),Wn++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&_?t.flags|=n.flags&32:Mh(t,n.child,a,r,u,f,_)&&(E=!0));n=n.sibling}return E}function L_(t,n){for(t=t.child;t!==null;){if(t.tag===30){var a=t.memoizedProps,r=t.stateNode,u=fa(a,r),f=ha(a.default,a.update),_;_=t.memoizedState,t.memoizedState=null,r=t;var E=t.child;Wn=0,u=Mh(r,E,u,u,f,_,!1),(t.flags&4)!==0&&u&&zr(t,a.onUpdate)}else(t.subtreeFlags&33554432)!==0&&L_(t);t=t.sibling}}var Tn=!1,Ie=!1,Zi=!1,Eh=!1,O_=typeof WeakSet=="function"?WeakSet:Set,bn=null,Ki=!1,Qo=!1,Ru=!1,Th=!1;function IS(t,n,a){if(t=t.containerInfo,Zh=qr,t=Bm(t),cf(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else t:{r=(r=t.ownerDocument)&&r.defaultView||window;var u=r.getSelection&&r.getSelection();if(u&&u.rangeCount!==0){r=u.anchorNode;var f=u.anchorOffset,_=u.focusNode;u=u.focusOffset;try{r.nodeType,_.nodeType}catch{r=null;break t}var E=0,L=-1,W=-1,at=0,gt=0,j=t,nt=null;e:for(;;){for(var Ut;j!==r||f!==0&&j.nodeType!==3||(L=E+f),j!==_||u!==0&&j.nodeType!==3||(W=E+u),j.nodeType===3&&(E+=j.nodeValue.length),(Ut=j.firstChild)!==null;)nt=j,j=Ut;for(;;){if(j===t)break e;if(nt===r&&++at===f&&(L=E),nt===_&&++gt===u&&(W=E),(Ut=j.nextSibling)!==null)break;j=nt,nt=j.parentNode}j=Ut}r=L===-1||W===-1?null:{start:L,end:W}}else r=null}r=r||{start:0,end:0}}else r=null;for(Kh={focusedElem:t,selectionRange:r},qr=!1,a=(a&335544064)===a,bn=n,n=a?9270:1024;bn!==null;){if(t=bn,a&&(r=t.deletions,r!==null))for(f=0;f<r.length;f++)a&&yh(r[f]);if(t.alternate===null&&(t.flags&2)!==0)a&&C_(t),Cu(a);else{if(t.tag===22){if(r=t.alternate,t.memoizedState!==null){r!==null&&r.memoizedState===null&&a&&yh(r),Cu(a);continue}else if(r!==null&&r.memoizedState!==null){a&&C_(t),Cu(a);continue}}r=t.child,(t.subtreeFlags&n)!==0&&r!==null?(r.return=t,bn=r):(a&&U_(t),Cu(a))}}li=null}function Cu(t){for(;bn!==null;){var n=bn,a=t,r=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((u&1024)!==0&&r!==null){a=void 0,u=r.memoizedProps,r=r.memoizedState;var f=n.stateNode;try{var _=Bs(n.type,u);a=f.getSnapshotBeforeUpdate(_,r),f.__reactInternalSnapshotBeforeUpdate=a}catch(E){Fe(n,n.return,E)}}break;case 3:if((u&1024)!==0){if(r=n.stateNode.containerInfo,a=r.nodeType,a===9)id(r);else if(a===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":id(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&r!==null&&(a=fa(r.memoizedProps,r.stateNode),u=n.memoizedProps,u=ha(u.default,u.update),u!=="none"&&Cr(r,a,u,r.memoizedState=[],!0));break;default:if((u&1024)!==0)throw Error(s(163))}if(r=n.sibling,r!==null){r.return=n.return,bn=r;break}bn=n.return}}function P_(t,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:Qi(t,a),r&4&&Zo(5,a);break;case 1:if(Qi(t,a),r&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(_){Fe(a,a.return,_)}else{var u=Bs(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(_){Fe(a,a.return,_)}}r&64&&E_(a),r&512&&qi(a,a.return);break;case 3:if(Qi(t,a),r&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{hg(t,n)}catch(_){Fe(a,a.return,_)}}break;case 27:n===null&&r&4&&R_(a);case 26:case 5:Qi(t,a),n===null&&r&4&&ph(a),r&512&&qi(a,a.return);break;case 12:Qi(t,a);break;case 31:Qi(t,a),r&4&&F_(t,a);break;case 13:Qi(t,a),r&4&&H_(t,a),r&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=ZS.bind(null,a),DM(t,a))));break;case 22:if(r=a.memoizedState!==null||Tn,!r){var f=n!==null&&n.memoizedState!==null||Ie;n=Tn,u=Ie,Tn=r,(Ie=f)&&!u?(r=2,(a.subtreeFlags&8772)!==0&&(r|=1),Ni(t,a,r)):Qi(t,a),Tn=n,Ie=u}break;case 30:Qi(t,a),r&512&&qi(a,a.return);break;case 7:r&512&&qi(a,a.return);default:Qi(t,a)}}function bh(t,n){for(t=t.child;t!==null;)z_(t,n),t=t.sibling}function z_(t,n){switch(t.tag){case 5:case 26:try{var a=t.stateNode;if(n){var r=a.style;typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"}else{var u=t.stateNode,f=t.memoizedProps.style,_=f!=null&&f.hasOwnProperty("display")?f.display:null;u.style.display=_==null||typeof _=="boolean"?"":(""+_).trim()}}catch(L){Fe(t,t.return,L)}Ah(t,n);break;case 6:try{t.stateNode.nodeValue=n?"":t.memoizedProps,Ue=!0}catch(L){Fe(t,t.return,L)}break;case 18:try{var E=t.stateNode;n?C0(E,!0):C0(t.stateNode,!1)}catch(L){Fe(t,t.return,L)}break;case 22:case 23:t.memoizedState===null&&bh(t,n);break;default:bh(t,n)}}function Ah(t,n){if(t.subtreeFlags&67108864)for(t=t.child;t!==null;){t:{var a=t,r=n;switch(a.tag){case 4:z_(a,r);break t;case 22:a.memoizedState===null&&Ah(a,r);break t;default:Ah(a,r)}}t=t.sibling}}function I_(t){var n=t.alternate;n!==null&&(t.alternate=null,I_(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&te(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var tn=null,Zn=!1;function Di(t,n,a){for(a=a.child;a!==null;)B_(t,n,a),a=a.sibling}function B_(t,n,a){if(en&&typeof en.onCommitFiberUnmount=="function")try{en.onCommitFiberUnmount(Ee,a)}catch{}switch(a.tag){case 26:Ie||Un(a,n),Di(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!Ie&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ie||Un(a,n),Ko(a);var r=tn,u=Zn;es(a.type)&&(tn=a.stateNode,Zn=!1),Di(t,n,a),V0(a.stateNode,a.type,a.memoizedProps),tn=r,Zn=u;break;case 5:Ie||Un(a,n),Ko(a);case 6:if(a.tag===6&&Ko(a),r=tn,u=Zn,tn=null,Di(t,n,a),tn=r,Zn=u,tn!==null)if(Zn)try{(tn.nodeType===9?tn.body:tn.nodeName==="HTML"?tn.ownerDocument.body:tn).removeChild(a.stateNode),Ue=!0}catch(f){Fe(a,n,f)}else try{tn.removeChild(a.stateNode),Ue=!0}catch(f){Fe(a,n,f)}break;case 18:tn!==null&&(Zn?(t=tn,R0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Yr(t)):R0(tn,a.stateNode));break;case 4:r=tn,u=Zn,tn=a.stateNode.containerInfo,Zn=!0,Di(t,n,a),tn=r,Zn=u;break;case 0:case 11:case 14:case 15:Wa(2,a,n),Ie||Wa(4,a,n),Di(t,n,a);break;case 1:Ie||(Un(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&T_(a,n,r)),Di(t,n,a);break;case 21:Di(t,n,a);break;case 22:Ie=(r=Ie)||a.memoizedState!==null,Di(t,n,a),Ie=r;break;case 30:Un(a,n),Di(t,n,a);break;case 7:Ie||Un(a,n),Di(t,n,a);break;default:Di(t,n,a)}}function F_(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Yr(t)}catch(a){Fe(n,n.return,a)}}}function H_(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Yr(t)}catch(a){Fe(n,n.return,a)}}function BS(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new O_),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new O_),n;default:throw Error(s(435,t.tag))}}function wu(t,n){var a=BS(t);n.forEach(function(r){if(!a.has(r)){a.add(r);var u=KS.bind(null,t,r);r.then(u,u)}})}function Xn(t,n,a){var r=n.deletions;if(r!==null)for(var u=0;u<r.length;u++){var f=r[u],_=t,E=n,L=E;t:for(;L!==null;){switch(L.tag){case 27:if(es(L.type)){tn=L.stateNode,Zn=!1;break t}break;case 5:tn=L.stateNode,Zn=!1;break t;case 3:case 4:tn=L.stateNode.containerInfo,Zn=!0;break t}L=L.return}if(tn===null)throw Error(s(160));B_(_,E,f),tn=null,Zn=!1,_=f.alternate,_!==null&&(_.return=null),f.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)G_(n,t,a),n=n.sibling}var Ui=null;function G_(t,n,a){var r=t.alternate,u=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(u&4&&(r=t.updateQueue,r=r!==null?r.events:null,r!==null))for(var f=0;f<r.length;f++){var _=r[f];_.ref.impl=_.nextImpl}Xn(n,t,a),kn(t),u&4&&(Wa(3,t,t.return),Zo(3,t),Wa(5,t,t.return));break;case 1:Xn(n,t,a),kn(t),u&512&&(Ie||r===null||Un(r,r.return)),u&64&&Tn&&(t=t.updateQueue,t!==null&&(n=t.callbacks,n!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:if(f=Ui,Xn(n,t,a),kn(t),u&512&&(Ie||r===null||Un(r,r.return)),u&4)if(u=r!==null?r.memoizedState:null,a=t.memoizedState,r===null)if(a===null)if(t.stateNode===null)if(Tn)t.stateNode=T0(t.type,t.memoizedProps,n.containerInfo,t);else{t:{n=t.type,a=t.memoizedProps,u=f.ownerDocument||f;e:switch(n){case"title":r=u.getElementsByTagName("title")[0],(!r||r[Le]||r[wt]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=u.createElement(n),u.head.insertBefore(r,u.querySelector("head > title"))),Nn(r,n,a),r[wt]=t,De(r),n=r;break t;case"link":if(f=W0("link","href",u).get(n+(a.href||""))){for(_=0;_<f.length;_++)if(r=f[_],r.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&r.getAttribute("rel")===(a.rel==null?null:a.rel)&&r.getAttribute("title")===(a.title==null?null:a.title)&&r.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){f.splice(_,1);break e}}r=u.createElement(n),Nn(r,n,a),u.head.appendChild(r);break;case"meta":if(f=W0("meta","content",u).get(n+(a.content||""))){for(_=0;_<f.length;_++)if(r=f[_],r.getAttribute("content")===(a.content==null?null:""+a.content)&&r.getAttribute("name")===(a.name==null?null:a.name)&&r.getAttribute("property")===(a.property==null?null:a.property)&&r.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&r.getAttribute("charset")===(a.charSet==null?null:a.charSet)){f.splice(_,1);break e}}r=u.createElement(n),Nn(r,n,a),u.head.appendChild(r);break;default:throw Error(s(468,n))}r[wt]=t,De(r),n=r}t.stateNode=n}else Tn||cd(f,t.type,t.stateNode);else t.stateNode=Y0(f,a,t.memoizedProps);else u!==a?(u===null?(n=r.stateNode,n===null||Ie||n.parentNode.removeChild(n)):u.count--,a===null?Tn||cd(f,t.type,t.stateNode):Y0(f,a,t.memoizedProps)):a===null&&t.stateNode!==null&&mh(t,t.memoizedProps,r.memoizedProps);break;case 27:Xn(n,t,a),kn(t),u&512&&(Ie||r===null||Un(r,r.return)),r!==null&&u&4&&mh(t,t.memoizedProps,r.memoizedProps);break;case 5:if(f=Zi,Zi=!1,Xn(n,t,a),Zi=f,kn(t),u&512&&(Ie||r===null||Un(r,r.return)),t.flags&32){n=t.stateNode;try{cr(n,""),Ue=!0}catch(at){Fe(t,t.return,at)}}u&4&&t.stateNode!=null&&(n=t.memoizedProps,mh(t,n,r!==null?r.memoizedProps:n)),u&1024&&(Eh=!0);break;case 6:if(Xn(n,t,a),kn(t),u&4){if(t.stateNode===null)throw Error(s(162));n=t.memoizedProps,a=t.stateNode;try{a.nodeValue=n,Ue=!0}catch(at){Fe(t,t.return,at)}}break;case 3:if(Ue=!1,ku=null,f=Ui,Ui=rl(n.containerInfo),Xn(n,t,a),Ui=f,kn(t),u&4&&r!==null&&r.memoizedState.isDehydrated)try{Yr(n.containerInfo)}catch(at){Fe(t,t.return,at)}Eh&&(Eh=!1,V_(t)),Ue=!1;break;case 4:u=Zi,Zi=Tn,r=lm(),f=Ui,Ui=rl(t.stateNode.containerInfo),Xn(n,t,a),kn(t),Ui=f,Ue&&Qo&&(Ru=!0),Ue=r,Zi=u;break;case 12:Xn(n,t,a),kn(t);break;case 31:Xn(n,t,a),kn(t),u&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,wu(t,n)));break;case 13:Xn(n,t,a),kn(t),t.child.flags&8192&&t.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(Nu=X()),u&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,wu(t,n)));break;case 22:f=t.memoizedState!==null,_=r!==null&&r.memoizedState!==null;var E=Tn,L=Ie,W=Zi;Tn=E||f,Zi=W||f,Ie=L||_,Xn(n,t,a),Ie=L,Zi=W,Tn=E,kn(t),u&8192&&(n=t.stateNode,n._visibility=f?n._visibility&-2:n._visibility|1,!f||r===null||_||Tn||Ie||(n=_||Ie,a=Tn,r=Ie,Tn=f||Tn,Ie=n,Za(t,2),Tn=a,Ie=r),!f&&Zi||bh(t,f)),u&4&&(n=t.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,wu(t,a))));break;case 19:Xn(n,t,a),kn(t),u&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,wu(t,n)));break;case 30:u&512&&(Ie||r===null||Un(r,r.return)),u=lm(),f=Qo,_=(a&335544064)===a,E=t.memoizedProps,Qo=_&&ha(E.default,E.update)!=="none",Xn(n,t,a),kn(t),_&&r!==null&&Ue&&(t.flags|=4),Qo=f,Ue=u;break;case 21:break;case 7:u&512&&(Ie||r===null||Un(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=t);default:Xn(n,t,a),kn(t)}}function kn(t){var n=t.flags;if(n&2){try{for(var a,r=t.return;r!==null;){if(A_(r)){a=r;break}r=r.return}r=null;for(var u=t.return;u!==null;){if(dh(u)){var f=u.stateNode;r===null?r=[f]:r.push(f)}if(hh(u))break;u=u.return}var _=r;if(a==null)throw Error(s(160));switch(a.tag){case 27:var E=a.stateNode,L=gh(t);Eu(t,L,E,_);break;case 5:var W=a.stateNode;a.flags&32&&(cr(W,""),a.flags&=-33);var at=gh(t);Eu(t,at,W,_);break;case 3:case 4:var gt=a.stateNode.containerInfo,j=gh(t);_h(t,j,gt,_);break;default:throw Error(s(161))}}catch(nt){Fe(t,t.return,nt)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function V_(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;V_(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,qr=!0,n.reset(),qr=!1),t=t.sibling}}function wr(t,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)X_(n,t),n=n.sibling;else L_(n)}function X_(t,n){var a=t.alternate;if(a===null)vh(t,!1);else switch(t.tag){case 3:if(Th=Ki=!1,w_(),wr(n,t),!Ki&&!Ru){if(t=Yi,t!==null)for(var r=0;r<t.length;r+=3){a=t[r];var u=t[r+1];D0(a,t[r+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+u+")"})}t=n.containerInfo,t=t.nodeType===9?t.documentElement:t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName===""&&(t.style.viewTransitionName="none",t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),t.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),Th=!0}Yi=null;break;case 5:wr(n,t);break;case 4:r=Ki,Ki=!1,wr(n,t),Ki&&(Ru=!0),Ki=r;break;case 22:t.memoizedState===null&&(a.memoizedState!==null?vh(t,!1):wr(n,t));break;case 30:r=Ki,u=w_(),Ki=!1,wr(n,t),Ki&&(t.flags|=4);var f=t.memoizedProps,_=t.stateNode;n=fa(f,_),_=fa(a.memoizedProps,_);var E=ha(f.default,f.update);E==="none"?n=!1:(f=a.memoizedState,a.memoizedState=null,a=t.child,Wn=0,n=Mh(t,a,n,_,E,f,!0),Wn!==(f===null?0:f.length)&&(t.flags|=32)),(t.flags&4)!==0&&n?(zr(t,t.memoizedProps.onUpdate),Yi=u):u!==null&&(u.push.apply(u,Yi),Yi=u),Ki=(t.flags&32)!==0?!0:r;break;default:wr(n,t)}}function Qi(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)P_(t,n.alternate,n),n=n.sibling}function Za(t,n){for(t=t.child;t!==null;){var a=t,r=n;switch(a.tag){case 0:case 11:case 14:case 15:Wa(4,a,a.return),Za(a,r);break;case 1:Un(a,a.return);var u=a.stateNode;typeof u.componentWillUnmount=="function"&&T_(a,a.return,u),Za(a,r);break;case 27:(r&2)!==0&&V0(a.stateNode,a.type,a.memoizedProps);case 5:Un(a,a.return),a.tag!==5&&a.tag!==27||Ko(a),Za(a,r);break;case 6:Ko(a);break;case 26:Un(a,a.return),u=a.stateNode,a.memoizedState!==null||u===null||Ie||u.parentNode.removeChild(u),Za(a,r);break;case 22:a.memoizedState===null&&Za(a,r);break;case 30:Un(a,a.return),Za(a,r);break;case 7:Un(a,a.return);default:Za(a,r)}t=t.sibling}}function Ni(t,n,a){for(a=(n.subtreeFlags&8772)!==0?a:a&-2,n=n.child;n!==null;){var r=n.alternate,u=t,f=n,_=f.flags,E=(a&1)!==0;switch(f.tag){case 0:case 11:case 15:Ni(u,f,a),Zo(4,f);break;case 1:if(Ni(u,f,a),r=f,u=r.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(at){Fe(r,r.return,at)}if(r=f,u=r.updateQueue,u!==null){var L=r.stateNode;try{var W=u.shared.hiddenCallbacks;if(W!==null)for(u.shared.hiddenCallbacks=null,u=0;u<W.length;u++)fg(W[u],L)}catch(at){Fe(r,r.return,at)}}E&&_&64&&E_(f),qi(f,f.return);break;case 27:(a&2)!==0&&R_(f);case 5:f.tag!==5&&f.tag!==27||b_(f),Ni(u,f,a),E&&r===null&&_&4&&ph(f),qi(f,f.return);break;case 6:b_(f);break;case 26:L=f.stateNode,f.memoizedState!==null||L===null||Tn||cd(rl(L.ownerDocument),f.type,L),Ni(u,f,a),E&&r===null&&_&4&&ph(f),qi(f,f.return);break;case 12:Ni(u,f,a);break;case 31:Ni(u,f,a),E&&_&4&&F_(u,f);break;case 13:Ni(u,f,a),E&&_&4&&H_(u,f);break;case 22:f.memoizedState===null&&Ni(u,f,a),qi(f,f.return);break;case 30:Ni(u,f,a),qi(f,f.return);break;case 7:qi(f,f.return);default:Ni(u,f,a)}n=n.sibling}}function Rh(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&zo(a))}function Ch(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&zo(t))}function Mi(t,n,a,r){var u=(a&335544064)===a;if(n.subtreeFlags&(u?10262:10256))for(n=n.child;n!==null;)k_(t,n,a,r),n=n.sibling;else u&&N_(n)}function k_(t,n,a,r){var u=(a&335544064)===a;u&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&Au(n);var f=n.flags;switch(n.tag){case 0:case 11:case 15:Mi(t,n,a,r),f&2048&&Zo(9,n);break;case 1:Mi(t,n,a,r);break;case 3:Mi(t,n,a,r),u&&Th&&(t=t.containerInfo,t=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,t.style.viewTransitionName==="root"&&(t.style.viewTransitionName=""),t=t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName==="none"&&(t.style.viewTransitionName="")),f&2048&&(f=null,n.alternate!==null&&(f=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==f&&(n.refCount++,f!=null&&zo(f)));break;case 12:if(f&2048){Mi(t,n,a,r),f=n.stateNode;try{var _=n.memoizedProps,E=_.id,L=_.onPostCommit;typeof L=="function"&&L(E,n.alternate===null?"mount":"update",f.passiveEffectDuration,-0)}catch(W){Fe(n,n.return,W)}}else Mi(t,n,a,r);break;case 31:Mi(t,n,a,r);break;case 13:Mi(t,n,a,r);break;case 23:break;case 22:_=n.stateNode,E=n.alternate,n.memoizedState!==null?(u&&E!==null&&E.memoizedState===null&&Au(E),_._visibility&2?Mi(t,n,a,r):Jo(t,n)):(u&&E!==null&&E.memoizedState!==null&&Au(n),_._visibility&2?Mi(t,n,a,r):(_._visibility|=2,Dr(t,n,a,r,(n.subtreeFlags&10256)!==0||!1))),f&2048&&Rh(E,n);break;case 24:Mi(t,n,a,r),f&2048&&Ch(n.alternate,n);break;case 30:u&&(f=n.alternate,f!==null&&(Wi(f.child,!0),Wi(n.child,!0))),Mi(t,n,a,r);break;default:Mi(t,n,a,r)}}function Dr(t,n,a,r,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,_=n,E=a,L=r,W=_.flags;switch(_.tag){case 0:case 11:case 15:Dr(f,_,E,L,u),Zo(8,_);break;case 23:break;case 22:var at=_.stateNode;_.memoizedState!==null?at._visibility&2?Dr(f,_,E,L,u):Jo(f,_):(at._visibility|=2,Dr(f,_,E,L,u)),u&&W&2048&&Rh(_.alternate,_);break;case 24:Dr(f,_,E,L,u),u&&W&2048&&Ch(_.alternate,_);break;default:Dr(f,_,E,L,u)}n=n.sibling}}function Jo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,r=n,u=r.flags;switch(r.tag){case 22:Jo(a,r),u&2048&&Rh(r.alternate,r);break;case 24:Jo(a,r),u&2048&&Ch(r.alternate,r);break;default:Jo(a,r)}n=n.sibling}}var Fs=8192;function Hs(t,n,a){if(t.subtreeFlags&Fs)for(t=t.child;t!==null;)j_(t,n,a),t=t.sibling}function j_(t,n,a){switch(t.tag){case 26:Hs(t,n,a),t.flags&Fs&&(t.memoizedState!==null?kM(a,Ui,t.memoizedState,t.memoizedProps):(t=t.stateNode,(n&335544128)===n&&J0(a,t)));break;case 5:Hs(t,n,a),t.flags&Fs&&(t=t.stateNode,(n&335544128)===n&&J0(a,t));break;case 3:case 4:var r=Ui;Ui=rl(t.stateNode.containerInfo),Hs(t,n,a),Ui=r;break;case 22:t.memoizedState===null&&(r=t.alternate,r!==null&&r.memoizedState!==null?(r=Fs,Fs=16777216,Hs(t,n,a),Fs=r):Hs(t,n,a));break;case 30:if((t.flags&Fs)!==0&&(r=t.memoizedProps.name,r!=null&&r!=="auto")){var u=t.stateNode;u.paired=null,li===null&&(li=new Map),li.set(r,u)}Hs(t,n,a);break;default:Hs(t,n,a)}}function q_(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function $o(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];bn=r,W_(r,t)}q_(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Y_(t),t=t.sibling}function Y_(t){switch(t.tag){case 0:case 11:case 15:$o(t),t.flags&2048&&Wa(9,t,t.return);break;case 3:$o(t);break;case 12:$o(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Du(t)):$o(t);break;default:$o(t)}}function Du(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];bn=r,W_(r,t)}q_(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Wa(8,n,n.return),Du(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Du(n));break;default:Du(n)}t=t.sibling}}function W_(t,n){for(;bn!==null;){var a=bn;switch(a.tag){case 0:case 11:case 15:Wa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:zo(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,bn=r;else t:for(a=t;bn!==null;){r=bn;var u=r.sibling,f=r.return;if(I_(r),r===a){bn=null;break t}if(u!==null){u.return=f,bn=u;break t}bn=f}}}var FS={getCacheForType:function(t){var n=Cn(fn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Cn(fn).controller.signal}},HS=typeof WeakMap=="function"?WeakMap:Map,Pe=0,Ye=null,ye=null,Te=0,Be=0,ui=null,Ka=!1,Ur=!1,wh=!1,Sa=0,on=0,Qa=0,Gs=0,Uu=0,ci=0,Nr=0,tl=null,Kn=null,Dh=!1,Nu=0,Z_=0,Lu=1/0,Ou=null,Ja=null,nn=0,Li=null,Vs=null,Ji=0,Uh=0,Nh=null,K_=null,Lr=null,Or=null,Pr=null,el=0,Pu=null;function fi(){return(Pe&2)!==0&&Te!==0?Te&-Te:Et.T!==null?Vh():Tt()}function Q_(){if(ci===0)if((Te&536870912)===0||_e){var t=la;la<<=1,(la&3932160)===0&&(la=262144),ci=t}else ci=536870912;return t=wn.current,t!==null&&(t.flags|=32),ci}function zr(t,n){if(n!=null){var a=t.stateNode,r=a.ref;r===null&&(r=a.ref=U0(fa(t.memoizedProps,a))),Or===null&&(Or=[]),Or.push(n.bind(null,r))}}function Qn(t,n,a){(t===Ye&&(Be===2||Be===9)||t.cancelPendingCommit!==null)&&(Ir(t,0),$a(t,Te,ci,!1)),Es(t,a),((Pe&2)===0||t!==Ye)&&(t===Ye&&((Pe&2)===0&&(Gs|=a),on===4&&$a(t,Te,ci,!1)),$i(t))}function J_(t,n,a){if((Pe&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&t.expiredLanes)===0||La(t,n),u=r?XS(t,n):Oh(t,n,!0),f=r;do{if(u===0){Ur&&!r&&$a(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!GS(a)){u=Oh(t,n,!1),f=!1;continue}if(u===2){if(f=n,t.errorRecoveryDisabledLanes&f)var _=0;else _=t.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;t:{var E=t;u=tl;var L=E.current.memoizedState.isDehydrated;if(L&&(Ir(E,_).flags|=256),_=Oh(E,_,!1),_!==2&&_!==6){if(wh&&!L){E.errorRecoveryDisabledLanes|=f,Gs|=f,u=4;break t}f=Kn,Kn=u,f!==null&&(Kn===null?Kn=f:Kn.push.apply(Kn,f))}u=_}if(f=!1,u!==2)continue}}if(u===1){Ir(t,0),$a(t,n,0,!0);break}t:{switch(r=t,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:$a(r,n,ci,!Ka);break t;case 2:Kn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Nu+300-X(),10<u)){if($a(r,n,ci,!Ka),Ms(r,0,!0)!==0)break t;Ji=n,r.timeoutHandle=$h($_.bind(null,r,a,Kn,Ou,Dh,n,ci,Gs,Nr,Ka,f,"Throttled",-0,0),u);break t}$_(r,a,Kn,Ou,Dh,n,ci,Gs,Nr,Ka,f,null,-0,0)}}break}while(!0);$i(t)}function $_(t,n,a,r,u,f,_,E,L,W,at,gt,j,nt){t.timeoutHandle=-1;var Ut=n.subtreeFlags,jt=(f&335544064)===f;if(gt=null,(jt||Ut&8192||(Ut&16785408)===16785408)&&(gt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Xi},li=null,j_(n,f,gt),jt&&(Ut=gt,jt=t.containerInfo,jt=(jt.nodeType===9?jt:jt.ownerDocument).__reactViewTransition,jt!=null&&(Ut.count++,Ut.waitingForViewTransition=!0,Ut=ul.bind(Ut),jt.finished.then(Ut,Ut))),Ut=(f&62914560)===f?Nu-X():(f&4194048)===f?Z_-X():0,Ut=jM(gt,Ut),Ut!==null)){Ji=f,t.cancelPendingCommit=Ut(o0.bind(null,t,n,f,a,r,u,_,E,L,W,at,gt,null,j,nt)),$a(t,f,_,!W);return}o0(t,n,f,a,r,u,_,E,L,W,at,gt)}function GS(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var u=a[r],f=u.getSnapshot;u=u.value;try{if(!ri(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function $a(t,n,a,r){n=Nl(t,n),n&=~Uu,n&=~Gs,t.suspendedLanes|=n,t.pingedLanes&=~n,r&&(t.warmLanes|=n),r=t.expirationTimes;for(var u=n;0<u;){var f=31-On(u),_=1<<f;r[f]=-1,u&=~_}a!==0&&R(t,a,n)}function zu(){return(Pe&6)===0?(nl(0),!1):!0}function Lh(){if(ye!==null){if(Be===0)var t=ye.return;else t=ye,ma=ws=null,Gf(t),Er=null,Fo=0,t=ye;for(;t!==null;)M_(t.alternate,t),t=t.return;ye=null}}function Ir(t,n){var a=t.timeoutHandle;return a!==-1&&(t.timeoutHandle=-1,fM(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Ji=0,Lh(),Ye=t,ye=a=da(t.current,null),Te=n,Be=0,ui=null,Ka=!1,Ur=La(t,n),wh=!1,Nr=ci=Uu=Gs=Qa=on=0,Kn=tl=null,Dh=!1,Sa=Nl(t,n),kl(),a}function t0(t,n){he=null,Et.H=mu,n===Mr||n===eu?(n=og(),Be=3):n===Cf?(n=og(),Be=4):Be=n===nh?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ui=n,ye===null&&(on=1,gu(t,vi(n,t.current)))}function e0(){var t=wn.current;return t===null?!0:(Te&4194048)===Te?zn===null:(Te&62914560)===Te||(Te&536870912)!==0?t===zn:!1}function n0(){var t=Et.H;return Et.H=mu,t===null?mu:t}function i0(){var t=Et.A;return Et.A=FS,t}function Iu(){on=4,Ka||(Te&4194048)!==Te&&wn.current!==null||(Ur=!0),(Qa&134217727)===0&&(Gs&134217727)===0||Ye===null||$a(Ye,Te,ci,!1)}function Oh(t,n,a){var r=Pe;Pe|=2;var u=n0(),f=i0();(Ye!==t||Te!==n)&&(Ou=null,Ir(t,n)),n=!1;var _=on;t:do try{if(Be!==0&&ye!==null){var E=ye,L=ui;switch(Be){case 8:Lh(),_=6;break t;case 3:case 2:case 9:case 6:wn.current===null&&(n=!0);var W=Be;if(Be=0,ui=null,Br(t,E,L,W),a&&Ur){_=0;break t}break;default:W=Be,Be=0,ui=null,Br(t,E,L,W)}}VS(),_=on;break}catch(at){t0(t,at)}while(!0);return n&&t.shellSuspendCounter++,ma=ws=null,Pe=r,Et.H=u,Et.A=f,ye===null&&(Ye=null,Te=0,kl()),_}function VS(){for(;ye!==null;)a0(ye)}function XS(t,n){var a=Pe;Pe|=2;var r=n0(),u=i0();Ye!==t||Te!==n?(Ou=null,Lu=X()+500,Ir(t,n)):Ur=La(t,n);t:do try{if(Be!==0&&ye!==null){n=ye;var f=ui;e:switch(Be){case 1:Be=0,ui=null,Br(t,n,f,1);break;case 2:case 9:if(sg(f)){Be=0,ui=null,s0(n);break}n=function(){Be!==2&&Be!==9||Ye!==t||(Be=7),$i(t)},f.then(n,n);break t;case 3:Be=7;break t;case 4:Be=5;break t;case 7:sg(f)?(Be=0,ui=null,s0(n)):(Be=0,ui=null,Br(t,n,f,7));break;case 5:var _=null;switch(ye.tag){case 26:_=ye.memoizedState;case 5:case 27:var E=ye;if(_?K0(_):E.stateNode.complete){Be=0,ui=null;var L=E.sibling;if(L!==null)ye=L;else{var W=E.return;W!==null?(ye=W,Bu(W)):ye=null}break e}}Be=0,ui=null,Br(t,n,f,5);break;case 6:Be=0,ui=null,Br(t,n,f,6);break;case 8:Lh(),on=6;break t;default:throw Error(s(462))}}kS();break}catch(at){t0(t,at)}while(!0);return ma=ws=null,Et.H=r,Et.A=u,Pe=a,ye!==null?0:(Ye=null,Te=0,kl(),on)}function kS(){for(;ye!==null&&!Pt();)a0(ye)}function a0(t){var n=y_(t.alternate,t,Sa);t.memoizedProps=t.pendingProps,n===null?Bu(t):ye=n}function s0(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=d_(a,n,n.pendingProps,n.type,void 0,Te);break;case 11:n=d_(a,n,n.pendingProps,n.type.render,n.ref,Te);break;case 5:Gf(n);var r=n;r===En&&(_e?(Kl(r),r.tag===5&&r.stateNode!=null&&(Qe=r.stateNode)):(Kl(r),_e=!0));default:M_(a,n),n=ye=Wm(n,Sa),n=y_(a,n,Sa)}t.memoizedProps=t.pendingProps,n===null?Bu(t):ye=n}function Br(t,n,a,r){ma=ws=null,Gf(n),Er=null,Fo=0;var u=n.return;try{if(US(t,u,n,a,Te)){on=1,gu(t,vi(a,t.current)),ye=null;return}}catch(f){if(u!==null)throw ye=u,f;on=1,gu(t,vi(a,t.current)),ye=null;return}n.flags&32768?(_e||r===1?t=!0:Ur||(Te&536870912)!==0?t=!1:(Ka=t=!0,(r===2||r===9||r===3||r===6)&&(r=wn.current,r!==null&&r.tag===13&&(r.flags|=16384))),r0(n,t)):Bu(n)}function Bu(t){var n=t;do{if((n.flags&32768)!==0){r0(n,Ka);return}t=n.return;var a=PS(n.alternate,n,Sa);if(a!==null){ye=a;return}if(n=n.sibling,n!==null){ye=n;return}ye=n=t}while(n!==null);on===0&&(on=5)}function r0(t,n){do{var a=zS(t.alternate,t);if(a!==null){a.flags&=32767,ye=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){ye=t;return}ye=t=a}while(t!==null);on=6,ye=null}function o0(t,n,a,r,u,f,_,E,L,W,at,gt){t.cancelPendingCommit=null;do Fu();while(nn!==0);if((Pe&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));t===Ye&&(ye=Ye=null,Te=0),Vs=n,Li=t,Ji=a,Nh=u,K_=r,jS(t,n,a,_,E,L,gt)}}function jS(t,n,a,r,u,f,_){var E=n.lanes|n.childLanes;if(Uh=E,E|=mf,jc(t,a,E,r,u,f),Or=null,(a&335544064)===a?(Pr=xS(t),r=10262):(Pr=null,r=10256),(n.subtreeFlags&r)!==0||(n.flags&r)!==0?(t.callbackNode=null,t.callbackPriority=0,QS(St,function(){return Bh(),null})):(t.callbackNode=null,t.callbackPriority=0),Tu=!1,r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=Et.T,Et.T=null,u=qt.p,qt.p=2,f=Pe,Pe|=4;try{IS(t,n,a)}finally{Pe=f,qt.p=u,Et.T=r}}nn=1,Tu?Lr=_M(_,t.containerInfo,Pr,Ph,zh,YS,Ih,Bh,qS):(Ph(),zh(),Ih())}function qS(t){if(nn!==0){var n=Li.onRecoverableError;n(t,{componentStack:null})}}function YS(){nn===3&&(nn=0,X_(Vs,Li),nn=4)}function Ph(){if(nn===1){nn=0;var t=Li,n=Vs,a=Ji,r=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||r){r=Et.T,Et.T=null;var u=qt.p;qt.p=2;var f=Pe;Pe|=4;try{Qo=Ru=!1,G_(n,t,a),a=Kh;var _=Bm(t.containerInfo),E=a.focusedElem,L=a.selectionRange;if(_!==E&&E&&E.ownerDocument&&Im(E.ownerDocument.documentElement,E)){if(L!==null&&cf(E)){var W=L.start,at=L.end;if(at===void 0&&(at=W),"selectionStart"in E)E.selectionStart=W,E.selectionEnd=Math.min(at,E.value.length);else{var gt=E.ownerDocument||document,j=gt&&gt.defaultView||window;if(j.getSelection){var nt=j.getSelection(),Ut=E.textContent.length,jt=Math.min(L.start,Ut),de=L.end===void 0?jt:Math.min(L.end,Ut);!nt.extend&&jt>de&&(_=de,de=jt,jt=_);var Y=zm(E,jt),H=zm(E,de);if(Y&&H&&(nt.rangeCount!==1||nt.anchorNode!==Y.node||nt.anchorOffset!==Y.offset||nt.focusNode!==H.node||nt.focusOffset!==H.offset)){var $=gt.createRange();$.setStart(Y.node,Y.offset),nt.removeAllRanges(),jt>de?(nt.addRange($),nt.extend(H.node,H.offset)):($.setEnd(H.node,H.offset),nt.addRange($))}}}}for(gt=[],nt=E;nt=nt.parentNode;)nt.nodeType===1&&gt.push({element:nt,left:nt.scrollLeft,top:nt.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<gt.length;E++){var pt=gt[E];pt.element.scrollLeft=pt.left,pt.element.scrollTop=pt.top}}qr=!!Zh,Kh=Zh=null}finally{Pe=f,qt.p=u,Et.T=r}}t.current=n,nn=2}}function zh(){if(nn===2){nn=0;var t=Li,n=Vs,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=Et.T,Et.T=null;var r=qt.p;qt.p=2;var u=Pe;Pe|=4;try{P_(t,n.alternate,n)}finally{Pe=u,qt.p=r,Et.T=a}}nn=3}}function Ih(){if(nn===4||nn===3){nn=0;var t=Lr;Lr=null,ce();var n=Li,a=Vs,r=Ji,u=K_,f=(r&335544064)===r?10262:10256;if((a.subtreeFlags&f)!==0||(a.flags&f)!==0?nn=5:(nn=0,Vs=Li=null,l0(n,n.pendingLanes)),f=n.pendingLanes,f===0&&(Ja=null),Q(r),a=a.stateNode,en&&typeof en.onCommitFiberRoot=="function")try{en.onCommitFiberRoot(Ee,a,void 0,(a.current.flags&128)===128)}catch{}if(u!==null){a=Et.T,f=qt.p,qt.p=2,Et.T=null;try{for(var _=n.onRecoverableError,E=0;E<u.length;E++){var L=u[E];_(L.value,{componentStack:L.stack})}}finally{Et.T=a,qt.p=f}}if(u=Or,_=Pr,Pr=null,u!==null&&(Or=null,_===null&&(_=[]),t!==null))for(L=0;L<u.length;L++)a=(0,u[L])(_),a!==void 0&&t.finished.finally(a);(Ji&3)!==0&&Fu(),$i(n),f=n.pendingLanes,(r&261930)!==0&&(f&42)!==0?n===Pu?el++:(el=0,Pu=n):(el=0,Pu=null),nl(0)}}function l0(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,zo(n)))}function Fu(){return Lr!==null&&(Lr.skipTransition(),Lr=null),Ph(),zh(),Ih(),Bh()}function Bh(){if(nn!==5)return!1;var t=Li,n=Uh;Uh=0;var a=Q(Ji),r=Et.T,u=qt.p;try{qt.p=32>a?32:a,Et.T=null,a=Nh,Nh=null;var f=Li,_=Ji;if(nn=0,Vs=Li=null,Ji=0,(Pe&6)!==0)throw Error(s(331));var E=Pe;if(Pe|=4,Y_(f.current),k_(f,f.current,_,a),Pe=E,nl(0,!1),en&&typeof en.onPostCommitFiberRoot=="function")try{en.onPostCommitFiberRoot(Ee,f)}catch{}return!0}finally{qt.p=u,Et.T=r,l0(t,n)}}function u0(t,n,a){n=vi(a,n),n=eh(t.stateNode,n,2),t=ka(t,n,2),t!==null&&(Es(t,2),$i(t))}function Fe(t,n,a){if(t.tag===3)u0(t,t,a);else for(;n!==null;){if(n.tag===3){u0(n,t,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ja===null||!Ja.has(r))){t=vi(a,t),a=s_(2),r=ka(n,a,2),r!==null&&(r_(a,r,n,t),Es(r,2),$i(r));break}}n=n.return}}function Fh(t,n,a){var r=t.pingCache;if(r===null){r=t.pingCache=new HS;var u=new Set;r.set(n,u)}else u=r.get(n),u===void 0&&(u=new Set,r.set(n,u));u.has(a)||(wh=!0,u.add(a),t=WS.bind(null,t,n,a),n.then(t,t))}function WS(t,n,a){var r=t.pingCache;r!==null&&r.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Ye===t&&(Te&a)===a&&((on===4||on===3&&(Te&62914560)===Te&&300>X()-Nu)&&(Pe&2)===0?Ir(t,0):Uu|=a,Nr===Te&&(Nr=0)),$i(t)}function c0(t,n){n===0&&(n=Ll()),t=As(t,n),t!==null&&(Es(t,n),$i(t))}function ZS(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),c0(t,a)}function KS(t,n){var a=0;switch(t.tag){case 31:case 13:var r=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),c0(t,a)}function QS(t,n){return ne(t,n)}var Fr=null,Hr=null,Hh=!1,Hu=!1,Gh=!1,ts=0;function $i(t){t!==Hr&&t.next===null&&(Hr===null?Fr=Hr=t:Hr=Hr.next=t),Hu=!0,Hh||(Hh=!0,$S())}function nl(t,n){if(!Gh&&Hu){Gh=!0;do for(var a=!1,r=Fr;r!==null;){if(t!==0){var u=r.pendingLanes;if(u===0)var f=0;else{var _=r.suspendedLanes,E=r.pingedLanes;f=(1<<31-On(42|t)+1)-1,f&=u&~(_&~E),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,p0(r,f))}else f=Te,f=Ms(r,r===Ye?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||La(r,f)||(a=!0,p0(r,f));r=r.next}while(a);Gh=!1}}function JS(){f0()}function f0(){Hu=Hh=!1;var t=0;ts!==0&&cM()&&(t=ts);for(var n=X(),a=null,r=Fr;r!==null;){var u=r.next,f=h0(r,n);f===0?(r.next=null,a===null?Fr=u:a.next=u,u===null&&(Hr=a)):(a=r,(t!==0||(f&3)!==0)&&(Hu=!0)),r=u}nn!==0&&nn!==5||nl(t),ts!==0&&(ts=0)}function h0(t,n){for(var a=t.suspendedLanes,r=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var _=31-On(f),E=1<<_,L=u[_];L===-1?((E&a)===0||(E&r)!==0)&&(u[_]=kc(E,n)):L<=n&&(t.expiredLanes|=E),f&=~E}if(n=Ye,a=Te,a=Ms(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r=t.callbackNode,a===0||t===n&&(Be===2||Be===9)||t.cancelPendingCommit!==null)return r!==null&&r!==null&&Zt(r),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||La(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(r!==null&&Zt(r),Q(a)){case 2:case 8:a=Vt;break;case 32:a=St;break;case 268435456:a=Yt;break;default:a=St}return r=d0.bind(null,t),a=ne(a,r),t.callbackPriority=n,t.callbackNode=a,n}return r!==null&&r!==null&&Zt(r),t.callbackPriority=2,t.callbackNode=null,2}function d0(t,n){if(nn!==0&&nn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Fu()&&t.callbackNode!==a)return null;var r=Te;return r=Ms(t,t===Ye?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r===0?null:(J_(t,r,n),h0(t,X()),t.callbackNode!=null&&t.callbackNode===a?d0.bind(null,t):null)}function p0(t,n){if(Fu())return null;J_(t,n,!0)}function $S(){hM(function(){(Pe&6)!==0?ne(Dt,JS):f0()})}function Vh(){if(ts===0){var t=Ns;t===0&&(t=ys,ys<<=1,(ys&261888)===0&&(ys=256)),ts=t}return ts}function m0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:zl(t)}function tM(t,n,a,r,u){if(n==="submit"&&a&&a.stateNode===u){var f=m0((u[kt]||null).action),_=r.submitter;_&&(n=(n=_[kt]||null)?m0(n.formAction):_.getAttribute("formAction"),n!==null&&(f=n,_=null));var E=new Hl("action","action",null,r,u);t.push({event:E,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(ts!==0){var L=new FormData(u,_);Kf(a,{pending:!0,data:L,method:u.method,action:f},null,L)}}else typeof f=="function"&&(E.preventDefault(),L=new FormData(u,_),Kf(a,{pending:!0,data:L,method:u.method,action:f},f,L))},currentTarget:u}]})}}for(var Xh=0;Xh<pf.length;Xh++){var kh=pf[Xh],eM=kh.toLowerCase(),nM=kh[0].toUpperCase()+kh.slice(1);wi(eM,"on"+nM)}wi(Gm,"onAnimationEnd"),wi(Vm,"onAnimationIteration"),wi(Xm,"onAnimationStart"),wi("dblclick","onDoubleClick"),wi("focusin","onFocus"),wi("focusout","onBlur"),wi(fS,"onTransitionRun"),wi(hS,"onTransitionStart"),wi(dS,"onTransitionCancel"),wi(km,"onTransitionEnd"),sn("onMouseEnter",["mouseout","mouseover"]),sn("onMouseLeave",["mouseout","mouseover"]),sn("onPointerEnter",["pointerout","pointerover"]),sn("onPointerLeave",["pointerout","pointerover"]),cn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),cn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),cn("onBeforeInput",["compositionend","keypress","textInput","paste"]),cn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),cn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),cn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var il="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),iM=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(il));function g0(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var r=t[a],u=r.event;r=r.listeners;t:{var f=void 0;if(n)for(var _=r.length-1;0<=_;_--){var E=r[_],L=E.instance,W=E.currentTarget;if(E=E.listener,L!==f&&u.isPropagationStopped())break t;f=E,u.currentTarget=W;try{f(u)}catch(at){Xl(at)}u.currentTarget=null,f=L}else for(_=0;_<r.length;_++){if(E=r[_],L=E.instance,W=E.currentTarget,E=E.listener,L!==f&&u.isPropagationStopped())break t;f=E,u.currentTarget=W;try{f(u)}catch(at){Xl(at)}u.currentTarget=null,f=L}}}}function Se(t,n){var a=n[$t];a===void 0&&(a=n[$t]=new Set);var r=t+"__bubble";a.has(r)||(_0(n,t,2,!1),a.add(r))}function jh(t,n,a){var r=0;n&&(r|=4),_0(a,t,r,n)}var Gu="_reactListening"+Math.random().toString(36).slice(2);function qh(t){if(!t[Gu]){t[Gu]=!0,Ke.forEach(function(a){a!=="selectionchange"&&(iM.has(a)||jh(a,!1,t),jh(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Gu]||(n[Gu]=!0,jh("selectionchange",!1,n))}}function _0(t,n,a,r){switch(rv(n)){case 2:var u=ZM;break;case 8:u=KM;break;default:u=hd}a=u.bind(null,n,a,t),u=void 0,!$c||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),r?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function Yh(t,n,a,r,u){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var _=r.tag;if(_===3||_===4){var E=r.stateNode.containerInfo;if(E===u)break;if(_===4)for(_=r.return;_!==null;){var L=_.tag;if((L===3||L===4)&&_.stateNode.containerInfo===u)return;_=_.return}for(;E!==null;){if(_=Oe(E),_===null)return;if(L=_.tag,L===5||L===6||L===26||L===27){r=f=_;continue t}E=E.parentNode}}r=r.return}_m(function(){var W=f,at=Qc(a),gt=[];t:{var j=jm.get(t);if(j!==void 0){var nt=Hl,Ut=t;switch(t){case"keypress":if(Bl(a)===0)break t;case"keydown":case"keyup":nt=Gy;break;case"focusin":Ut="focus",nt=af;break;case"focusout":Ut="blur",nt=af;break;case"beforeblur":case"afterblur":nt=af;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":nt=ym;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":nt=wy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":nt=qy;break;case Gm:case Vm:case Xm:nt=Ny;break;case km:nt=Wy;break;case"scroll":case"scrollend":nt=Ry;break;case"wheel":nt=Ky;break;case"copy":case"cut":case"paste":nt=Oy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":nt=Mm;break;case"submit":nt=ky;break;case"toggle":case"beforetoggle":nt=Jy}var jt=(n&4)!==0,de=!jt&&(t==="scroll"||t==="scrollend"),Y=jt?j!==null?j+"Capture":null:j;jt=[];for(var H=W,$;H!==null;){var pt=H;if($=pt.stateNode,pt=pt.tag,pt!==5&&pt!==26&&pt!==27||$===null||Y===null||(pt=bo(H,Y),pt!=null&&jt.push(al(H,pt,$))),de)break;H=H.return}0<jt.length&&(j=new nt(j,Ut,null,a,at),gt.push({event:j,listeners:jt}))}}if((n&7)===0){t:{if(nt=t==="mouseover"||t==="pointerover",j=t==="mouseout"||t==="pointerout",nt&&a!==Kc&&(Ut=a.relatedTarget||a.fromElement)&&(Oe(Ut)||Ut[ee]))break t;(j||nt)&&(Ut=at.window===at?at:(nt=at.ownerDocument)?nt.defaultView||nt.parentWindow:window,j?(nt=a.relatedTarget||a.toElement,j=W,nt=nt?Oe(nt):null,nt!==null&&(de=c(nt),jt=nt.tag,nt!==de||jt!==5&&jt!==27&&jt!==6)&&(nt=null)):(j=null,nt=W),j!==nt&&(jt=ym,pt="onMouseLeave",Y="onMouseEnter",H="mouse",(t==="pointerout"||t==="pointerover")&&(jt=Mm,pt="onPointerLeave",Y="onPointerEnter",H="pointer"),de=j==null?Ut:vn(j),$=nt==null?Ut:vn(nt),Ut=new jt(pt,H+"leave",j,a,at),Ut.target=de,Ut.relatedTarget=$,pt=null,Oe(at)===W&&(jt=new jt(Y,H+"enter",nt,a,at),jt.target=$,jt.relatedTarget=de,pt=jt),de=pt,jt=j&&nt?z(j,nt,aM):null,j!==null&&v0(gt,Ut,j,jt,!1),nt!==null&&de!==null&&v0(gt,de,nt,jt,!0)))}t:{if(j=W?vn(W):window,nt=j.nodeName&&j.nodeName.toLowerCase(),nt==="select"||nt==="input"&&j.type==="file")var Ht=Dm;else if(Cm(j))if(Um)Ht=lS;else{Ht=rS;var be=sS}else nt=j.nodeName,!nt||nt.toLowerCase()!=="input"||j.type!=="checkbox"&&j.type!=="radio"?W&&Zc(W.elementType)&&(Ht=Dm):Ht=oS;if(Ht&&(Ht=Ht(t,W))){wm(gt,Ht,a,at);break t}be&&be(t,j,W)}switch(be=W?vn(W):window,t){case"focusin":(Cm(be)||be.contentEditable==="true")&&(pr=be,ff=W,Lo=null);break;case"focusout":Lo=ff=pr=null;break;case"mousedown":hf=!0;break;case"contextmenu":case"mouseup":case"dragend":hf=!1,Fm(gt,a,at);break;case"selectionchange":if(cS)break;case"keydown":case"keyup":Fm(gt,a,at)}var Jt;if(rf)t:{switch(t){case"compositionstart":var ae="onCompositionStart";break t;case"compositionend":ae="onCompositionEnd";break t;case"compositionupdate":ae="onCompositionUpdate";break t}ae=void 0}else dr?Am(t,a)&&(ae="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(ae="onCompositionStart");ae&&(Em&&a.locale!=="ko"&&(dr||ae!=="onCompositionStart"?ae==="onCompositionEnd"&&dr&&(Jt=vm()):(Pa=at,tf="value"in Pa?Pa.value:Pa.textContent,dr=!0)),be=Vu(W,ae),0<be.length&&(ae=new Sm(ae,t,null,a,at),gt.push({event:ae,listeners:be}),Jt?ae.data=Jt:(Jt=Rm(a),Jt!==null&&(ae.data=Jt)))),(Jt=tS?eS(t,a):nS(t,a))&&(ae=Vu(W,"onBeforeInput"),0<ae.length&&(be=new Sm("onBeforeInput","beforeinput",null,a,at),gt.push({event:be,listeners:ae}),be.data=Jt)),tM(gt,t,W,a,at)}g0(gt,n)})}function al(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Vu(t,n){for(var a=n+"Capture",r=[];t!==null;){var u=t,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=bo(t,a),u!=null&&r.unshift(al(t,u,f)),u=bo(t,n),u!=null&&r.push(al(t,u,f))),t.tag===3)return r;t=t.return}return[]}function aM(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function v0(t,n,a,r,u){for(var f=n._reactName,_=[];a!==null&&a!==r;){var E=a,L=E.alternate,W=E.stateNode;if(E=E.tag,L!==null&&L===r)break;E!==5&&E!==26&&E!==27||W===null||(L=W,u?(W=bo(a,f),W!=null&&_.unshift(al(a,W,L))):u||(W=bo(a,f),W!=null&&_.push(al(a,W,L)))),a=a.return}_.length!==0&&t.push({event:n,listeners:_})}var sM=/\r\n?/g,rM=/\u0000|\uFFFD/g;function x0(t){return(typeof t=="string"?t:""+t).replace(sM,`
`).replace(rM,"")}function y0(t,n){return n=x0(n),x0(t)===n}function He(t,n,a,r,u,f){switch(a){case"children":if(typeof r=="string")n==="body"||n==="textarea"&&r===""||cr(t,r);else if(typeof r=="number"||typeof r=="bigint")n!=="body"&&cr(t,""+r);else return;break;case"className":Pl(t,"class",r);break;case"tabIndex":Pl(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Pl(t,a,r);break;case"style":mm(t,r,f);return;case"data":if(n!=="object"){Pl(t,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=zl(r),t.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&He(t,n,"name",u.name,u,null),He(t,n,"formEncType",u.formEncType,u,null),He(t,n,"formMethod",u.formMethod,u,null),He(t,n,"formTarget",u.formTarget,u,null)):(He(t,n,"encType",u.encType,u,null),He(t,n,"method",u.method,u,null),He(t,n,"target",u.target,u,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=zl(r),t.setAttribute(a,r);break;case"onClick":r!=null&&(t.onclick=Xi);return;case"onScroll":r!=null&&Se("scroll",t);return;case"onScrollEnd":r!=null&&Se("scrollend",t);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));f?.__html!==a&&(t.innerHTML=a)}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}a=zl(r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,r):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":r===!0?t.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,r):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(a,r):t.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(a):t.setAttribute(a,r);break;case"popover":Se("beforetoggle",t),Se("toggle",t),Ol(t,"popover",r);break;case"xlinkActuate":ua(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":ua(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":ua(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":ua(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":ua(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":ua(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":ua(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":ua(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":ua(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":Ol(t,"is",r);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=by.get(a)||a,Ol(t,a,r);else return}Ue=!0}function Wh(t,n,a,r,u,f){switch(a){case"style":mm(t,r,f);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));f?.__html!==a&&(t.innerHTML=a)}}break;case"children":if(typeof r=="string")cr(t,r);else if(typeof r=="number"||typeof r=="bigint")cr(t,""+r);else return;break;case"onScroll":r!=null&&Se("scroll",t);return;case"onScrollEnd":r!=null&&Se("scrollend",t);return;case"onClick":r!=null&&(t.onclick=Xi);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!Hn.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),f=a.slice(2,u?a.length-7:void 0),n=t[kt]||null,n=n!=null?n[a]:null,typeof n=="function"&&t.removeEventListener(f,n,u),typeof r=="function")){typeof n!="function"&&n!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(f,r,u);break t}Ue=!0,a in t?t[a]=r:r===!0?t.setAttribute(a,""):Ol(t,a,r)}return}Ue=!0}function Nn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Se("error",t),Se("load",t);var r=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var _=a[f];if(_!=null)switch(f){case"src":r=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:He(t,n,f,_,a,null)}}u&&He(t,n,"srcSet",a.srcSet,a,null),r&&He(t,n,"src",a.src,a,null);return;case"input":Se("invalid",t);var E=f=_=u=null,L=null,W=null;for(r in a)if(a.hasOwnProperty(r)){var at=a[r];if(at!=null)switch(r){case"name":u=at;break;case"type":_=at;break;case"checked":L=at;break;case"defaultChecked":W=at;break;case"value":f=at;break;case"defaultValue":E=at;break;case"children":case"dangerouslySetInnerHTML":if(at!=null)throw Error(s(137,n));break;default:He(t,n,r,at,a,null)}}fm(t,f,E,L,W,_,u,!1);return;case"select":Se("invalid",t),r=_=f=null;for(u in a)if(a.hasOwnProperty(u)&&(E=a[u],E!=null))switch(u){case"value":f=E;break;case"defaultValue":_=E;break;case"multiple":r=E;default:He(t,n,u,E,a,null)}n=f,a=_,t.multiple=!!r,n!=null?ur(t,!!r,n,!1):a!=null&&ur(t,!!r,a,!0);return;case"textarea":Se("invalid",t),f=u=r=null;for(_ in a)if(a.hasOwnProperty(_)&&(E=a[_],E!=null))switch(_){case"value":r=E;break;case"defaultValue":u=E;break;case"children":f=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(s(91));break;default:He(t,n,_,E,a,null)}dm(t,r,u,f);return;case"option":for(L in a)a.hasOwnProperty(L)&&(r=a[L],r!=null)&&(L==="selected"?t.selected=r&&typeof r!="function"&&typeof r!="symbol":He(t,n,L,r,a,null));return;case"dialog":Se("beforetoggle",t),Se("toggle",t),Se("cancel",t),Se("close",t);break;case"iframe":case"object":Se("load",t);break;case"video":case"audio":for(r=0;r<il.length;r++)Se(il[r],t);break;case"image":Se("error",t),Se("load",t);break;case"details":Se("toggle",t);break;case"embed":case"source":case"link":Se("error",t),Se("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(W in a)if(a.hasOwnProperty(W)&&(r=a[W],r!=null))switch(W){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:He(t,n,W,r,a,null)}return;default:if(Zc(n)){for(at in a)a.hasOwnProperty(at)&&(r=a[at],r!==void 0&&Wh(t,n,at,r,a,void 0));return}}for(E in a)a.hasOwnProperty(E)&&(r=a[E],r!=null&&He(t,n,E,r,a,null))}var oM={};function lM(t,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,_=null,E=null,L=null,W=null,at=null;for(nt in a){var gt=a[nt];if(a.hasOwnProperty(nt)&&gt!=null)switch(nt){case"checked":break;case"value":break;case"defaultValue":L=gt;default:r.hasOwnProperty(nt)||He(t,n,nt,null,r,gt)}}for(var j in r){var nt=r[j];if(gt=a[j],r.hasOwnProperty(j)&&(nt!=null||gt!=null))switch(j){case"type":nt!==gt&&(Ue=!0),f=nt;break;case"name":nt!==gt&&(Ue=!0),u=nt;break;case"checked":nt!==gt&&(Ue=!0),W=nt;break;case"defaultChecked":nt!==gt&&(Ue=!0),at=nt;break;case"value":nt!==gt&&(Ue=!0),_=nt;break;case"defaultValue":nt!==gt&&(Ue=!0),E=nt;break;case"children":case"dangerouslySetInnerHTML":if(nt!=null)throw Error(s(137,n));break;default:nt!==gt&&He(t,n,j,nt,r,gt)}}Yc(t,_,E,L,W,at,f,u);return;case"select":nt=_=E=j=null;for(f in a)if(L=a[f],a.hasOwnProperty(f)&&L!=null)switch(f){case"value":break;case"multiple":nt=L;default:r.hasOwnProperty(f)||He(t,n,f,null,r,L)}for(u in r)if(f=r[u],L=a[u],r.hasOwnProperty(u)&&(f!=null||L!=null))switch(u){case"value":f!==L&&(Ue=!0),j=f;break;case"defaultValue":f!==L&&(Ue=!0),E=f;break;case"multiple":f!==L&&(Ue=!0),_=f;default:f!==L&&He(t,n,u,f,r,L)}n=E,a=_,r=nt,j!=null?ur(t,!!a,j,!1):!!r!=!!a&&(n!=null?ur(t,!!a,n,!0):ur(t,!!a,a?[]:"",!1));return;case"textarea":nt=j=null;for(E in a)if(u=a[E],a.hasOwnProperty(E)&&u!=null&&!r.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:He(t,n,E,null,r,u)}for(_ in r)if(u=r[_],f=a[_],r.hasOwnProperty(_)&&(u!=null||f!=null))switch(_){case"value":u!==f&&(Ue=!0),j=u;break;case"defaultValue":u!==f&&(Ue=!0),nt=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&He(t,n,_,u,r,f)}hm(t,j,nt);return;case"option":for(var Ut in a)j=a[Ut],a.hasOwnProperty(Ut)&&j!=null&&!r.hasOwnProperty(Ut)&&(Ut==="selected"?t.selected=!1:He(t,n,Ut,null,r,j));for(L in r)j=r[L],nt=a[L],r.hasOwnProperty(L)&&j!==nt&&(j!=null||nt!=null)&&(L==="selected"?(j!==nt&&(Ue=!0),t.selected=j&&typeof j!="function"&&typeof j!="symbol"):He(t,n,L,j,r,nt));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var jt in a)j=a[jt],a.hasOwnProperty(jt)&&j!=null&&!r.hasOwnProperty(jt)&&He(t,n,jt,null,r,j);for(W in r)if(j=r[W],nt=a[W],r.hasOwnProperty(W)&&j!==nt&&(j!=null||nt!=null))switch(W){case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(s(137,n));break;default:He(t,n,W,j,r,nt)}return;default:if(Zc(n)){for(var de in a)j=a[de],a.hasOwnProperty(de)&&j!==void 0&&!r.hasOwnProperty(de)&&Wh(t,n,de,void 0,r,j);for(at in r)j=r[at],nt=a[at],!r.hasOwnProperty(at)||j===nt||j===void 0&&nt===void 0||Wh(t,n,at,j,r,nt);return}}for(var Y in a)j=a[Y],a.hasOwnProperty(Y)&&j!=null&&!r.hasOwnProperty(Y)&&He(t,n,Y,null,r,j);for(gt in r)j=r[gt],nt=a[gt],!r.hasOwnProperty(gt)||j===nt||j==null&&nt==null||He(t,n,gt,j,r,nt)}function S0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function uM(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var u=a[r],f=u.transferSize,_=u.initiatorType,E=u.duration;if(f&&E&&S0(_)){for(_=0,E=u.responseEnd,r+=1;r<a.length;r++){var L=a[r],W=L.startTime;if(W>E)break;var at=L.transferSize,gt=L.initiatorType;at&&S0(gt)&&(L=L.responseEnd,_+=at*(L<E?1:(E-W)/(L-W)))}if(--r,n+=8*(f+_)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Zh=null,Kh=null;function sl(t){return t.nodeType===9?t:t.ownerDocument}function M0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function E0(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function T0(t,n,a,r){return a=sl(a).createElement(t),a[wt]=r,a[kt]=n,Nn(a,t,n),De(a),a}function Qh(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Jh=null;function cM(){var t=window.event;return t&&t.type==="popstate"?t===Jh?!1:(Jh=t,!0):(Jh=null,!1)}var $h=typeof setTimeout=="function"?setTimeout:void 0,fM=typeof clearTimeout=="function"?clearTimeout:void 0,b0=typeof Promise=="function"?Promise:void 0,A0=typeof requestAnimationFrame=="function"?requestAnimationFrame:$h,hM=typeof queueMicrotask=="function"?queueMicrotask:typeof b0<"u"?function(t){return b0.resolve(null).then(t).catch(dM)}:$h;function dM(t){setTimeout(function(){throw t})}function es(t){return t==="head"}function R0(t,n){var a=n,r=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(r===0){t.removeChild(u),Yr(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")od(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,od(a);for(var f=a.firstChild;f;){var _=f.nextSibling,E=f.nodeName;f[Le]||E==="SCRIPT"||E==="STYLE"||E==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=_}}else a==="body"&&od(t.ownerDocument.body);a=u}while(a);Yr(n)}function C0(t,n){var a=t;t=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=r}while(a)}function w0(t,n,a){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,t.style.viewTransitionName=n,a!=null&&(t.style.viewTransitionClass=a),a=getComputedStyle(t),a.display==="inline"){if(n=t.getClientRects(),n.length===1)var r=1;else for(var u=r=0;u<n.length;u++){var f=n[u];0<f.width&&0<f.height&&r++}r===1&&(t=t.style,t.display=n.length===1?"inline-block":"block",t.marginTop="-"+a.paddingTop,t.marginBottom="-"+a.paddingBottom)}}function D0(t,n){t=t.style,n=n.style;var a=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;t.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,t.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),t.display==="inline-block"&&(n==null?t.display=t.margin="":(a=n.display,t.display=a==null||typeof a=="boolean"?"":a,a=n.margin,a!=null?t.margin=a:(a=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],t.marginTop=a==null||typeof a=="boolean"?"":a,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],t.marginBottom=n==null||typeof n=="boolean"?"":n)))}function pM(t,n,a){return a=a.ownerDocument.defaultView,{rect:t,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=t.bottom&&0<=t.right&&t.top<=a.innerHeight&&t.left<=a.innerWidth}}function td(t){var n=t.getBoundingClientRect(),a=getComputedStyle(t);return pM(n,a,t)}function mM(t){return t.documentElement.clientHeight}function gM(t){this.addEventListener("load",t),this.addEventListener("error",t)}function _M(t,n,a,r,u,f,_,E,L){var W=n.nodeType===9?n:n.ownerDocument;try{var at=W.startViewTransition({update:function(){var j=W.defaultView,nt=j.navigation&&j.navigation.transition,Ut=W.fonts.status;r();var jt=[];if(Ut==="loaded"&&(mM(W),W.fonts.status==="loading"&&jt.push(W.fonts.ready)),Ut=jt.length,t!==null)for(var de=t.suspenseyImages,Y=0,H=0;H<de.length;H++){var $=de[H];if(!$.complete){var pt=$.getBoundingClientRect();if(0<pt.bottom&&0<pt.right&&pt.top<j.innerHeight&&pt.left<j.innerWidth){if(Y+=Q0($),Y>ju){jt.length=Ut;break}$=new Promise(gM.bind($)),jt.push($)}}}if(0<jt.length)return j=Promise.race([Promise.all(jt),new Promise(function(Ht){return setTimeout(Ht,500)})]).then(u,u),(nt?Promise.allSettled([nt.finished,j]):j).then(f,f);if(u(),nt)return nt.finished.then(f,f);f()},types:a});W.__reactViewTransition=at;var gt=[];return at.ready.then(function(){for(var j=W.documentElement.getAnimations({subtree:!0}),nt=0;nt<j.length;nt++){var Ut=j[nt],jt=Ut.effect,de=jt.pseudoElement;if(de!=null&&de.startsWith("::view-transition")){gt.push(Ut),Ut=jt.getKeyframes();for(var Y=de=void 0,H=!0,$=0;$<Ut.length;$++){var pt=Ut[$],Ht=pt.width;if(de===void 0)de=Ht;else if(de!==Ht){H=!1;break}if(Ht=pt.height,Y===void 0)Y=Ht;else if(Y!==Ht){H=!1;break}delete pt.width,delete pt.height,pt.transform==="none"&&delete pt.transform}H&&de!==void 0&&Y!==void 0&&(jt.setKeyframes(Ut),H=getComputedStyle(jt.target,jt.pseudoElement),H.width!==de||H.height!==Y)&&(H=Ut[0],H.width=de,H.height=Y,H=Ut[Ut.length-1],H.width=de,H.height=Y,jt.setKeyframes(Ut))}}_()},function(j){W.__reactViewTransition===at&&(W.__reactViewTransition=null);try{typeof j=="object"&&j!==null&&j.name==="InvalidStateError"&&(j.message==="View transition was skipped because document visibility state is hidden."||j.message==="Skipping view transition because document visibility state has become hidden."||j.message==="Skipping view transition because viewport size changed."||j.message==="Transition was aborted because of invalid state")&&(j=null),j!==null&&L(j)}finally{r(),u(),_()}}),at.finished.finally(function(){for(var j=0;j<gt.length;j++)gt[j].cancel();W.__reactViewTransition===at&&(W.__reactViewTransition=null),E()}),at}catch{return r(),u(),_(),null}}function Xs(t,n){this._scope=document.documentElement,this._selector="::view-transition-"+t+"("+n+")"}Xs.prototype.animate=function(t,n){return n=typeof n=="number"?{duration:n}:P({},n),n.pseudoElement=this._selector,this._scope.animate(t,n)},Xs.prototype.getAnimations=function(){for(var t=this._scope,n=this._selector,a=t.getAnimations({subtree:!0}),r=[],u=0;u<a.length;u++){var f=a[u].effect;f!==null&&f.target===t&&f.pseudoElement===n&&r.push(a[u])}return r},Xs.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function U0(t){return{name:t,group:new Xs("group",t),imagePair:new Xs("image-pair",t),old:new Xs("old",t),new:new Xs("new",t)}}function hi(t){this._fragmentFiber=t,this._observers=this._eventListeners=null}hi.prototype.addEventListener=function(t,n,a){var r=null,u=null;if(!(a!=null&&typeof a!="boolean"&&(r=a.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var f=this._eventListeners;if(L0(f,t,n,a)===-1){var _=this,E=n;a!=null&&typeof a!="boolean"&&a.once===!0&&(E=function(L){_.removeEventListener(t,n,a),typeof n=="function"?n.call(this,L):n.handleEvent(L)}),r!==null&&(u=_.removeEventListener.bind(_,t,n,a),r.addEventListener("abort",u,{once:!0}),u=r.removeEventListener.bind(r,"abort",u)),r=Gr(a),f.push({type:t,listener:n,optionsOrUseCapture:a,attachedListener:E,cleanup:u}),m(this._fragmentFiber.child,!1,vM,t,E,r)}this._eventListeners=f}};function vM(t,n,a,r){return M(t).addEventListener(n,a,r),!1}hi.prototype.removeEventListener=function(t,n,a){var r=this._eventListeners;if(r!==null&&(n=L0(r,t,n,a),n!==-1)){var u=r[n];a=u.attachedListener;var f=u.cleanup;u=Gr(u.optionsOrUseCapture),m(this._fragmentFiber.child,!1,xM,t,a,u),r.splice(n,1),f!==null&&f()}};function xM(t,n,a,r){return M(t).removeEventListener(n,a,r),!1}function Gr(t){return t!=null&&typeof t!="boolean"&&(t.once===!0||t.signal instanceof AbortSignal)?{capture:t.capture,passive:t.passive}:t}function N0(t){return t==null?"c=0":typeof t=="boolean"?"c="+(t?"1":"0"):"c="+(t.capture?"1":"0")}function L0(t,n,a,r){if(t.length===0)return-1;r=N0(r);for(var u=0;u<t.length;u++){var f=t[u];if(f.type===n&&f.listener===a&&N0(f.optionsOrUseCapture)===r)return u}return-1}hi.prototype.dispatchEvent=function(t){var n=v(this._fragmentFiber);if(n===null)return!0;n=M(n);var a=this._eventListeners;if(a!==null&&0<a.length||!t.bubbles){var r=n.nodeType===9?n.createComment(""):document.createTextNode("");if(a)for(var u=0;u<a.length;u++){var f=a[u];r.addEventListener(f.type,f.attachedListener,Gr(f.optionsOrUseCapture))}if(n.appendChild(r),t=r.dispatchEvent(t),a)for(u=0;u<a.length;u++)f=a[u],r.removeEventListener(f.type,f.attachedListener,Gr(f.optionsOrUseCapture));return n.removeChild(r),t}return n.dispatchEvent(t)},hi.prototype.focus=function(t){m(this._fragmentFiber.child,!0,O0,t,void 0,void 0)};function O0(t,n){return t.tag===6?!1:(t=M(t),UM(t,n))}hi.prototype.focusLast=function(t){var n=[];m(this._fragmentFiber.child,!0,ed,n,void 0,void 0);for(var a=n.length-1;0<=a&&!O0(n[a],t);a--);};function ed(t,n){return n.push(t),!1}hi.prototype.blur=function(){var t=v(this._fragmentFiber);t!==null&&(t=M(t),t=sl(t).activeElement,t!==null&&m(this._fragmentFiber.child,!1,yM,t,void 0,void 0))};function yM(t,n){return t.tag===6?!1:(t=M(t),t===n||t.contains(n)?(n.blur(),!0):!1)}hi.prototype.observeUsing=function(t){this._observers===null&&(this._observers=new Set),this._observers.add(t),m(this._fragmentFiber.child,!1,SM,t,void 0,void 0)};function SM(t,n){return t.tag===6||(t=M(t),n.observe(t)),!1}hi.prototype.unobserveUsing=function(t){var n=this._observers;if(n!==null&&n.has(t)){n.delete(t),m(this._fragmentFiber.child,!1,MM,t,void 0,void 0);for(var a=n=0;a<Oi.length;a++){var r=Oi[a];r.fragmentInstance===this&&r.observer===t?t.unobserve(r.instance):Oi[n++]=r}Oi.length=n}};function MM(t,n){return t.tag===6||(t=M(t),n.unobserve(t)),!1}var Oi=[],nd=!1;function EM(t,n,a){Oi.push({fragmentInstance:t,observer:n,instance:a}),nd||(nd=!0,NM(function(){nd=!1;var r=Oi;Oi=[];for(var u=0;u<r.length;u++){var f=r[u];f.observer.unobserve(f.instance)}}))}hi.prototype.getClientRects=function(){var t=[];return m(this._fragmentFiber.child,!1,TM,t,void 0,void 0),t};function TM(t,n){if(t.tag===6){t=t.stateNode;var a=t.ownerDocument.createRange();a.selectNodeContents(t),n.push.apply(n,a.getClientRects())}else t=M(t),n.push.apply(n,t.getClientRects());return!1}hi.prototype.getRootNode=function(t){var n=v(this._fragmentFiber);return n===null?this:M(n).getRootNode(t)},hi.prototype.compareDocumentPosition=function(t){var n=v(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];m(this._fragmentFiber.child,!1,ed,a,void 0,void 0);var r=M(n);if(a.length===0){if(a=r,S(this._fragmentFiber)){t:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break t}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(a=n)}n=this._fragmentFiber;var u=r=a.compareDocumentPosition(t);return a===t?u=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=T(n)[1],a===null?u=Node.DOCUMENT_POSITION_PRECEDING:(t=M(a).compareDocumentPosition(t),u=t===0||t&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),u|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=M(a[0]),u=M(a[a.length-1]);var f=S(this._fragmentFiber)?n.parentElement:r;if(f==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=f.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,f=f.compareDocumentPosition(u)&Node.DOCUMENT_POSITION_CONTAINED_BY;var _=n.compareDocumentPosition(t),E=u.compareDocumentPosition(t),L=_&Node.DOCUMENT_POSITION_CONTAINED_BY||E&Node.DOCUMENT_POSITION_CONTAINED_BY;return E=r&&f&&_&Node.DOCUMENT_POSITION_FOLLOWING&&E&Node.DOCUMENT_POSITION_PRECEDING,n=r&&n===t||f&&u===t||L||E?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&n===t||!f&&u===t?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:_,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||bM(n,this._fragmentFiber,a[0],a[a.length-1],t)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function bM(t,n,a,r,u){var f=Oe(u);if(t&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!f)t:{for(;f!==null;){if(f.tag===7&&(f===n||f.alternate===n)){a=!0;break t}f=f.return}a=!1}return a}if(t&Node.DOCUMENT_POSITION_CONTAINS){if(f===null)return f=u.ownerDocument,u===f||u===f.documentElement||u===f.body;t:{for(f=n,n=v(n);f!==null;){if(!(f.tag!==5&&f.tag!==3&&f.tag!==27||f!==n&&f.alternate!==n)){f=!0;break t}f=f.return}f=!1}return f}return t&Node.DOCUMENT_POSITION_PRECEDING?((n=!!f)&&!(n=f===a)&&(n=z(a,f,F),n===null?n=!1:(m(n,!0,O,f,a),f=y,y=null,n=f!==null)),n):t&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!f)&&!(n=f===r)&&(n=z(r,f,F),n===null?n=!1:(m(n,!0,D,f,r),f=y,N=y=null,n=f!==null)),n):!1}function P0(t,n){var a=t.ownerDocument.createRange();a.selectNodeContents(t),t=a.getBoundingClientRect(),window.scrollTo(window.scrollX+t.left,n?window.scrollY+t.top:window.scrollY+t.bottom-window.innerHeight)}hi.prototype.scrollIntoView=function(t){if(typeof t=="object")throw Error(s(566));var n=[];m(this._fragmentFiber.child,!1,ed,n,void 0,void 0);var a=t!==!1;if(n.length===0){var r=T(this._fragmentFiber);if(r=a?r[1]||r[0]||v(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){t=M(r),P0(t,a);return}if(r=M(r),r.nodeType!==9){if(r.nodeType===11){a="host"in r?r.host:null,a!==null&&a.scrollIntoView(t);return}r.scrollIntoView(t)}}for(r=a?n.length-1:0;r!==(a?-1:n.length);){var u=n[r];u.tag===6?(u=M(u),P0(u,a)):M(u).scrollIntoView(t),r+=a?-1:1}};function AM(t,n){return t=M(t),z0(t,n),!1}function z0(t,n){t.reactFragments==null&&(t.reactFragments=new Set),t.reactFragments.add(n)}function I0(t,n){var a=n._eventListeners;if(a!==null)for(var r=0;r<a.length;r++){var u=a[r];t.addEventListener(u.type,u.attachedListener,Gr(u.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(f){for(var _=0,E=0;E<Oi.length;E++){var L=Oi[E];(L.fragmentInstance!==n||L.observer!==f||L.instance!==t)&&(Oi[_++]=L)}Oi.length=_,f.observe(t)}),z0(t,n))}function RM(t,n){var a=n._eventListeners;if(a!==null)for(var r=0;r<a.length;r++){var u=a[r];t.removeEventListener(u.type,u.attachedListener,Gr(u.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(f){typeof f.rootMargin=="string"?EM(n,f,t):f.unobserve(t)}),t.reactFragments!=null&&t.reactFragments.delete(n))}function id(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":id(a),te(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function CM(t,n,a,r){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[Le])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=Ei(t.nextSibling),t===null)break}return null}function wM(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Ei(t.nextSibling),t===null))return null;return t}function B0(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Ei(t.nextSibling),t===null))return null;return t}function ad(t){return t.data==="$?"||t.data==="$~"}function sd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function DM(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),t._reactRetry=r}}function Ei(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var rd=null;function F0(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return Ei(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function H0(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function UM(t,n){function a(){r=!0}if(t.ownerDocument.activeElement===t)return!0;var r=!1;try{t.ownerDocument.addEventListener("focus",a,!0),(t.focus||HTMLElement.prototype.focus).call(t,n)}finally{t.ownerDocument.removeEventListener("focus",a,!0)}return r}function NM(t){A0(function(){A0(function(n){return t(n)})})}function G0(t,n,a){switch(n=sl(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function V0(t,n,a){for(var r in a){var u=a[r];a.hasOwnProperty(r)&&u!=null&&He(t,n,r,null,oM,u)}a.dangerouslySetInnerHTML!=null&&(t.textContent=""),t.onclick===Xi&&(t.onclick=null),te(t)}function od(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);te(t)}var Ti=new Map,X0=new Set;function rl(t){if(typeof t.getRootNode=="function"){var n=t.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return t.nodeType===9?t:t.ownerDocument}var Ma=qt.d;qt.d={f:LM,r:OM,D:PM,C:zM,L:IM,m:BM,X:HM,S:FM,M:GM};function LM(){var t=Ma.f(),n=zu();return t||n}function OM(t){var n=ge(t);n!==null&&n.tag===5&&n.type==="form"?jg(n):Ma.r(t)}var Vr=typeof document>"u"?null:document;function k0(t,n,a){var r=Vr;if(r&&typeof n=="string"&&n){var u=gi(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),X0.has(u)||(X0.add(u),t={rel:t,crossOrigin:a,href:n},r.querySelector(u)===null&&(n=r.createElement("link"),Nn(n,"link",t),De(n),r.head.appendChild(n)))}}function PM(t){Ma.D(t),k0("dns-prefetch",t,null)}function zM(t,n){Ma.C(t,n),k0("preconnect",t,n)}function IM(t,n,a){Ma.L(t,n,a);var r=Vr;if(r&&t&&n){var u='link[rel="preload"][as="'+gi(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+gi(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+gi(a.imageSizes)+'"]')):u+='[href="'+gi(t)+'"]';var f=u;switch(n){case"style":f=Xr(t);break;case"script":f=kr(t)}if(!(Ti.has(f)||(t=P({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),Ti.set(f,t),r.querySelector(u)!==null||n==="style"&&r.querySelector(ol(f))||n==="script"&&r.querySelector(ll(f))))){var _=r.createElement("link");Nn(_,"link",t),n==="style"&&(_[we]=!0,_.onload=_.onerror=function(){Oa(_)}),De(_),r.head.appendChild(_)}}}function BM(t,n){Ma.m(t,n);var a=Vr;if(a&&t){var r=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+gi(r)+'"][href="'+gi(t)+'"]',f=u;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=kr(t)}if(!Ti.has(f)&&(t=P({rel:"modulepreload",href:t},n),Ti.set(f,t),a.querySelector(u)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(ll(f)))return}r=a.createElement("link"),Nn(r,"link",t),De(r),a.head.appendChild(r)}}}function FM(t,n,a){Ma.S(t,n,a);var r=Vr;if(r&&t){var u=ai(r).hoistableStyles,f=Xr(t);n=n||"default";var _=u.get(f);if(!_){var E={loading:0,preload:null};if(_=r.querySelector(ol(f)))E.loading=5;else{t=P({rel:"stylesheet",href:t,"data-precedence":n},a),(a=Ti.get(f))&&ld(t,a);var L=_=r.createElement("link");De(L),Nn(L,"link",t),L._p=new Promise(function(W,at){L.onload=W,L.onerror=at}),L.addEventListener("load",function(){E.loading|=1}),L.addEventListener("error",function(){E.loading|=2}),E.loading|=4,Xu(_,n,r)}_={type:"stylesheet",instance:_,count:1,state:E},u.set(f,_)}}}function HM(t,n){Ma.X(t,n);var a=Vr;if(a&&t){var r=ai(a).hoistableScripts,u=kr(t),f=r.get(u);f||(f=a.querySelector(ll(u)),f||(t=P({src:t,async:!0},n),(n=Ti.get(u))&&ud(t,n),f=a.createElement("script"),De(f),Nn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(u,f))}}function GM(t,n){Ma.M(t,n);var a=Vr;if(a&&t){var r=ai(a).hoistableScripts,u=kr(t),f=r.get(u);f||(f=a.querySelector(ll(u)),f||(t=P({src:t,async:!0,type:"module"},n),(n=Ti.get(u))&&ud(t,n),f=a.createElement("script"),De(f),Nn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(u,f))}}function j0(t,n,a,r){var u=(u=qe.current)?rl(u):null;if(!u)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=Xr(a.href),n=ai(u).hoistableStyles,r=n.get(a),r||(r={type:"style",instance:null,count:0,state:null},n.set(a,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Xr(a.href);var f=ai(u).hoistableStyles,_=f.get(t);if(_||(u=u.ownerDocument||u,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,_),(f=u.querySelector(ol(t)))?f._p||(_.instance=f,_.state.loading=5):(f=Ti.get(t),f||(f={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ti.set(t,f)),VM(u,t,f,_.state))),n&&r===null)throw Error(s(528,""));return _}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(a=kr(a),n=ai(u).hoistableScripts,r=n.get(a),r||(r={type:"script",instance:null,count:0,state:null},n.set(a,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function Xr(t){return'href="'+gi(t)+'"'}function ol(t){return'link[rel="stylesheet"]['+t+"]"}function q0(t){return P({},t,{"data-precedence":t.precedence,precedence:null})}function VM(t,n,a,r){if(n=t.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[we]!==!0){r.loading=1;return}}else n=t.createElement("link"),n[we]=!0,n.onload=n.onerror=Oa.bind(null,n),Nn(n,"link",a),De(n),t.head.appendChild(n);r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2})}function kr(t){return'[src="'+gi(t)+'"]'}function ll(t){return"script[async]"+t}function Y0(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=t.querySelector('style[data-href~="'+gi(a.href)+'"]');if(r)return n.instance=r,De(r),r;var u=P({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),De(r),Nn(r,"style",u),Xu(r,a.precedence,t),n.instance=r;case"stylesheet":u=Xr(a.href);var f=t.querySelector(ol(u));if(f)return n.state.loading|=4,n.instance=f,De(f),f;r=q0(a),(u=Ti.get(u))&&ld(r,u),f=(t.ownerDocument||t).createElement("link"),De(f);var _=f;return _._p=new Promise(function(E,L){_.onload=E,_.onerror=L}),Nn(f,"link",r),n.state.loading|=4,Xu(f,a.precedence,t),n.instance=f;case"script":return f=kr(a.src),(u=t.querySelector(ll(f)))?(n.instance=u,De(u),u):(r=a,(u=Ti.get(f))&&(r=P({},a),ud(r,u)),t=t.ownerDocument||t,u=t.createElement("script"),De(u),Nn(u,"link",r),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,Xu(r,a.precedence,t));return n.instance}function Xu(t,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=r.length?r[r.length-1]:null,f=u,_=0;_<r.length;_++){var E=r[_];if(E.dataset.precedence===n)f=E;else if(f!==u)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function ld(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function ud(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var ku=null;function W0(t,n,a){if(ku===null){var r=new Map,u=ku=new Map;u.set(a,r)}else u=ku,r=u.get(a),r||(r=new Map,u.set(a,r));if(r.has(t))return r;for(r.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var f=a[u];if(!(f[Le]||f[wt]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var _=f.getAttribute(n)||"";_=t+_;var E=r.get(_);E?E.push(f):r.set(_,[f])}}return r}function cd(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function XM(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Z0(t,n){return t==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function K0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Q0(t){return(t.width||100)*(t.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function J0(t,n){typeof n.decode=="function"&&(t.imgCount++,n.complete||(t.imgBytes+=Q0(n),t.suspenseyImages.push(n)),t=qM.bind(t),n.decode().then(t,t))}function kM(t,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Xr(r.href),f=n.querySelector(ol(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=ul.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,De(f);return}f=n.ownerDocument||n,r=q0(r),(u=Ti.get(u))&&ld(r,u),f=f.createElement("link"),De(f);var _=f;_._p=new Promise(function(E,L){_.onload=E,_.onerror=L}),Nn(f,"link",r),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=ul.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var ju=0;function jM(t,n){return t.stylesheets&&t.count===0&&Yu(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var r=setTimeout(function(){if(t.stylesheets&&Yu(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&ju===0&&(ju=62500*uM());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Yu(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>ju?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(r),clearTimeout(u)}}:null}function $0(t){if(t.count===0&&(t.imgCount===0||!t.waitingForImages)){if(t.stylesheets)Yu(t,t.stylesheets);else if(t.unsuspend){var n=t.unsuspend;t.unsuspend=null,n()}}}function ul(){this.count--,$0(this)}function qM(){this.imgCount--,$0(this)}var qu=null;function Yu(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,qu=new Map,n.forEach(YM,t),qu=null,ul.call(t))}function YM(t,n){if(!(n.state.loading&4)){var a=qu.get(t);if(a)var r=a.get(null);else{a=new Map,qu.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var _=u[f];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),r=_)}r&&a.set(null,r)}u=n.instance,_=u.getAttribute("data-precedence"),f=a.get(_)||r,f===r&&a.set(null,u),a.set(_,u),this.count++,r=ul.bind(this),u.addEventListener("load",r),u.addEventListener("error",r),f?f.parentNode.insertBefore(u,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var jr={$$typeof:ft,Provider:null,Consumer:null,_currentValue:I,_currentValue2:I,_threadCount:0};function WM(t,n,a,r,u,f,_,E,L){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=To(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=To(0),this.hiddenUpdates=To(null),this.identifierPrefix=r,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=L,this.transitionTypes=null,this.incompleteTransitions=new Map}function tv(t,n,a,r,u,f,_,E,L,W,at,gt){return t=new WM(t,n,a,_,L,W,at,gt,E),n=1,f===!0&&(n|=24),f=Yn(3,null,null,n),t.current=f,f.stateNode=t,n=bf(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},wf(f),t}function ev(t){return t?(t=_r,t):_r}function nv(t,n,a,r,u,f){u=ev(u),r.context===null?r.context=u:r.pendingContext=u,r=Xa(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=ka(t,r,n),a!==null&&(Qn(a,t,n),Ho(a,t,n))}function iv(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function fd(t,n){iv(t,n),(t=t.alternate)&&iv(t,n)}function av(t){if(t.tag===13||t.tag===31){var n=As(t,67108864);n!==null&&Qn(n,t,67108864),fd(t,67108864)}}function sv(t){if(t.tag===13||t.tag===31){var n=fi();n=lt(n);var a=As(t,n);a!==null&&Qn(a,t,n),fd(t,n)}}var qr=!0;function ZM(t,n,a,r){var u=Et.T;Et.T=null;var f=qt.p;try{qt.p=2,hd(t,n,a,r)}finally{qt.p=f,Et.T=u}}function KM(t,n,a,r){var u=Et.T;Et.T=null;var f=qt.p;try{qt.p=8,hd(t,n,a,r)}finally{qt.p=f,Et.T=u}}function hd(t,n,a,r){if(qr){var u=dd(r);if(u===null)Yh(t,n,r,Wu,a),ov(t,r);else if(JM(u,t,n,a,r))r.stopPropagation();else if(ov(t,r),n&4&&-1<QM.indexOf(t)){for(;u!==null;){var f=ge(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var _=mi(f.pendingLanes);if(_!==0){var E=f;for(E.pendingLanes|=2,E.entangledLanes|=2;_;){var L=1<<31-On(_);E.entanglements[1]|=L,_&=~L}$i(f),(Pe&6)===0&&(Lu=X()+500,nl(0))}}break;case 31:case 13:E=As(f,2),E!==null&&Qn(E,f,2),zu(),fd(f,2)}if(f=dd(r),f===null&&Yh(t,n,r,Wu,a),f===u)break;u=f}u!==null&&r.stopPropagation()}else Yh(t,n,r,null,a)}}function dd(t){return t=Qc(t),pd(t)}var Wu=null;function pd(t){if(Wu=null,t=Oe(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===31){if(t=d(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Wu=t,null}function rv(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(At()){case Dt:return 2;case Vt:return 8;case St:case _t:return 32;case Yt:return 268435456;default:return 32}default:return 32}}var md=!1,ns=null,is=null,as=null,cl=new Map,fl=new Map,ss=[],QM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function ov(t,n){switch(t){case"focusin":case"focusout":ns=null;break;case"dragenter":case"dragleave":is=null;break;case"mouseover":case"mouseout":as=null;break;case"pointerover":case"pointerout":cl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":fl.delete(n.pointerId)}}function hl(t,n,a,r,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[u]},n!==null&&(n=ge(n),n!==null&&av(n)),t):(t.eventSystemFlags|=r,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function JM(t,n,a,r,u){switch(n){case"focusin":return ns=hl(ns,t,n,a,r,u),!0;case"dragenter":return is=hl(is,t,n,a,r,u),!0;case"mouseover":return as=hl(as,t,n,a,r,u),!0;case"pointerover":var f=u.pointerId;return cl.set(f,hl(cl.get(f)||null,t,n,a,r,u)),!0;case"gotpointercapture":return f=u.pointerId,fl.set(f,hl(fl.get(f)||null,t,n,a,r,u)),!0}return!1}function lv(t){var n=Oe(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,zt(t.priority,function(){sv(a)});return}}else if(n===31){if(n=d(a),n!==null){t.blockedOn=n,zt(t.priority,function(){sv(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Zu(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=dd(t.nativeEvent);if(a===null){a=t.nativeEvent;var r=new a.constructor(a.type,a);Kc=r,a.target.dispatchEvent(r),Kc=null}else return n=ge(a),n!==null&&av(n),t.blockedOn=a,!1;n.shift()}return!0}function uv(t,n,a){Zu(t)&&a.delete(n)}function $M(){md=!1,ns!==null&&Zu(ns)&&(ns=null),is!==null&&Zu(is)&&(is=null),as!==null&&Zu(as)&&(as=null),cl.forEach(uv),fl.forEach(uv)}function Ku(t,n){t.blockedOn===n&&(t.blockedOn=null,md||(md=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,$M)))}var Qu=null;function cv(t){Qu!==t&&(Qu=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Qu===t&&(Qu=null);for(var n=0;n<t.length;n+=3){var a=t[n],r=t[n+1],u=t[n+2];if(typeof r!="function"){if(pd(r||a)===null)continue;break}var f=ge(a);f!==null&&(t.splice(n,3),n-=3,Kf(f,{pending:!0,data:u,method:a.method,action:r},r,u))}}))}function Yr(t){function n(L){return Ku(L,t)}ns!==null&&Ku(ns,t),is!==null&&Ku(is,t),as!==null&&Ku(as,t),cl.forEach(n),fl.forEach(n);for(var a=0;a<ss.length;a++){var r=ss[a];r.blockedOn===t&&(r.blockedOn=null)}for(;0<ss.length&&(a=ss[0],a.blockedOn===null);)lv(a),a.blockedOn===null&&ss.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var u=a[r],f=a[r+1],_=u[kt]||null;if(typeof f=="function")_||cv(a);else if(_){var E=null;if(f&&f.hasAttribute("formAction")){if(u=f,_=f[kt]||null)E=_.formAction;else if(pd(u)!==null)continue}else E=_.action;typeof E=="function"?a[r+1]=E:(a.splice(r,3),r-=3),cv(a)}}}function fv(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(_){return u=_})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function gd(t){this._internalRoot=t}Ju.prototype.render=gd.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=fi();nv(a,r,t,n,null,null)},Ju.prototype.unmount=gd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;nv(t.current,2,null,t,null,null),zu(),n[ee]=null}};function Ju(t){this._internalRoot=t}Ju.prototype.unstable_scheduleHydration=function(t){if(t){var n=Tt();t={blockedOn:null,target:t,priority:n};for(var a=0;a<ss.length&&n!==0&&n<ss[a].priority;a++);ss.splice(a,0,t),a===0&&lv(t)}};var hv=e.version;if(hv!=="19.3.0")throw Error(s(527,hv,"19.3.0"));qt.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=p(n),t=t!==null?x(t):null,t=t===null?null:t.stateNode,t};var tE={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:Et,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $u=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$u.isDisabled&&$u.supportsFiber)try{Ee=$u.inject(tE),en=$u}catch{}}return pl.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,r="",u=e_,f=n_,_=i_;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError)),n=tv(t,1,!1,null,null,a,r,null,u,f,_,fv),t[ee]=n.current,qh(t),new gd(n)},pl.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var r=!1,u="",f=e_,_=n_,E=i_,L=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(E=a.onRecoverableError),a.formState!==void 0&&(L=a.formState)),n=tv(t,1,!0,n,a??null,r,u,L,f,_,E,fv),n.context=ev(null),a=n.current,r=fi(),r=lt(r),u=Xa(r),u.callback=null,ka(a,u,r),a=r,n.current.lanes=a,Es(n,a),$i(n),t[ee]=n.current,qh(t),new Ju(n)},pl.version="19.3.0",pl}var Mv;function fE(){if(Mv)return xd.exports;Mv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),xd.exports=cE(),xd.exports}var hE=fE();const Yp="180",fo={ROTATE:0,DOLLY:1,PAN:2},uo={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},dE=0,Ev=1,pE=2,Lx=1,Ox=2,Ca=3,vs=0,ni=1,wa=2,gs=0,ho=1,Tv=2,bv=3,Av=4,mE=5,Js=100,gE=101,_E=102,vE=103,xE=104,yE=200,SE=201,ME=202,EE=203,np=204,ip=205,TE=206,bE=207,AE=208,RE=209,CE=210,wE=211,DE=212,UE=213,NE=214,ap=0,sp=1,rp=2,mo=3,op=4,lp=5,up=6,cp=7,Px=0,LE=1,OE=2,_s=0,PE=1,zE=2,IE=3,BE=4,FE=5,HE=6,GE=7,zx=300,go=301,_o=302,fp=303,hp=304,Hc=306,dp=1e3,tr=1001,pp=1002,Gi=1003,VE=1004,ec=1005,na=1006,Ed=1007,er=1008,sa=1009,Ix=1010,Bx=1011,Ml=1012,Wp=1013,ir=1014,Da=1015,Rl=1016,Zp=1017,Kp=1018,El=1020,Fx=35902,Hx=35899,Gx=1021,Vx=1022,Fi=1023,Tl=1026,bl=1027,Xx=1028,Qp=1029,kx=1030,Jp=1031,$p=1033,Ac=33776,Rc=33777,Cc=33778,wc=33779,mp=35840,gp=35841,_p=35842,vp=35843,xp=36196,yp=37492,Sp=37496,Mp=37808,Ep=37809,Tp=37810,bp=37811,Ap=37812,Rp=37813,Cp=37814,wp=37815,Dp=37816,Up=37817,Np=37818,Lp=37819,Op=37820,Pp=37821,zp=36492,Ip=36494,Bp=36495,Fp=36283,Hp=36284,Gp=36285,Vp=36286,XE=3200,kE=3201,jx=0,jE=1,ms="",Ai="srgb",vo="srgb-linear",Lc="linear",ke="srgb",Wr=7680,Rv=519,qE=512,YE=513,WE=514,qx=515,ZE=516,KE=517,QE=518,JE=519,Cv=35044,wv="300 es",ia=2e3,Oc=2001;class rr{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,e);e.target=null}}}const In=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Dc=Math.PI/180,Xp=180/Math.PI;function Cl(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(In[o&255]+In[o>>8&255]+In[o>>16&255]+In[o>>24&255]+"-"+In[e&255]+In[e>>8&255]+"-"+In[e>>16&15|64]+In[e>>24&255]+"-"+In[i&63|128]+In[i>>8&255]+"-"+In[i>>16&255]+In[i>>24&255]+In[s&255]+In[s>>8&255]+In[s>>16&255]+In[s>>24&255]).toLowerCase()}function Me(o,e,i){return Math.max(e,Math.min(i,o))}function $E(o,e){return(o%e+e)%e}function Td(o,e,i){return(1-i)*o+i*e}function ml(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Jn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const tT={DEG2RAD:Dc};class fe{constructor(e=0,i=0){fe.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Me(this.x,e.x,i.x),this.y=Me(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Me(this.x,e,i),this.y=Me(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Me(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Me(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-e.x,h=this.y-e.y;return this.x=c*s-h*l+e.x,this.y=c*l+h*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ar{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,c,h,d){let g=s[l+0],p=s[l+1],x=s[l+2],m=s[l+3];const v=c[h+0],S=c[h+1],T=c[h+2],A=c[h+3];if(d===0){e[i+0]=g,e[i+1]=p,e[i+2]=x,e[i+3]=m;return}if(d===1){e[i+0]=v,e[i+1]=S,e[i+2]=T,e[i+3]=A;return}if(m!==A||g!==v||p!==S||x!==T){let M=1-d;const y=g*v+p*S+x*T+m*A,N=y>=0?1:-1,O=1-y*y;if(O>Number.EPSILON){const F=Math.sqrt(O),z=Math.atan2(F,y*N);M=Math.sin(M*z)/F,d=Math.sin(d*z)/F}const D=d*N;if(g=g*M+v*D,p=p*M+S*D,x=x*M+T*D,m=m*M+A*D,M===1-d){const F=1/Math.sqrt(g*g+p*p+x*x+m*m);g*=F,p*=F,x*=F,m*=F}}e[i]=g,e[i+1]=p,e[i+2]=x,e[i+3]=m}static multiplyQuaternionsFlat(e,i,s,l,c,h){const d=s[l],g=s[l+1],p=s[l+2],x=s[l+3],m=c[h],v=c[h+1],S=c[h+2],T=c[h+3];return e[i]=d*T+x*m+g*S-p*v,e[i+1]=g*T+x*v+p*m-d*S,e[i+2]=p*T+x*S+d*v-g*m,e[i+3]=x*T-d*m-g*v-p*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,c=e._z,h=e._order,d=Math.cos,g=Math.sin,p=d(s/2),x=d(l/2),m=d(c/2),v=g(s/2),S=g(l/2),T=g(c/2);switch(h){case"XYZ":this._x=v*x*m+p*S*T,this._y=p*S*m-v*x*T,this._z=p*x*T+v*S*m,this._w=p*x*m-v*S*T;break;case"YXZ":this._x=v*x*m+p*S*T,this._y=p*S*m-v*x*T,this._z=p*x*T-v*S*m,this._w=p*x*m+v*S*T;break;case"ZXY":this._x=v*x*m-p*S*T,this._y=p*S*m+v*x*T,this._z=p*x*T+v*S*m,this._w=p*x*m-v*S*T;break;case"ZYX":this._x=v*x*m-p*S*T,this._y=p*S*m+v*x*T,this._z=p*x*T-v*S*m,this._w=p*x*m+v*S*T;break;case"YZX":this._x=v*x*m+p*S*T,this._y=p*S*m+v*x*T,this._z=p*x*T-v*S*m,this._w=p*x*m-v*S*T;break;case"XZY":this._x=v*x*m-p*S*T,this._y=p*S*m-v*x*T,this._z=p*x*T+v*S*m,this._w=p*x*m+v*S*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],c=i[8],h=i[1],d=i[5],g=i[9],p=i[2],x=i[6],m=i[10],v=s+d+m;if(v>0){const S=.5/Math.sqrt(v+1);this._w=.25/S,this._x=(x-g)*S,this._y=(c-p)*S,this._z=(h-l)*S}else if(s>d&&s>m){const S=2*Math.sqrt(1+s-d-m);this._w=(x-g)/S,this._x=.25*S,this._y=(l+h)/S,this._z=(c+p)/S}else if(d>m){const S=2*Math.sqrt(1+d-s-m);this._w=(c-p)/S,this._x=(l+h)/S,this._y=.25*S,this._z=(g+x)/S}else{const S=2*Math.sqrt(1+m-s-d);this._w=(h-l)/S,this._x=(c+p)/S,this._y=(g+x)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Me(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,c=e._z,h=e._w,d=i._x,g=i._y,p=i._z,x=i._w;return this._x=s*x+h*d+l*p-c*g,this._y=l*x+h*g+c*d-s*p,this._z=c*x+h*p+s*g-l*d,this._w=h*x-s*d-l*g-c*p,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const s=this._x,l=this._y,c=this._z,h=this._w;let d=h*e._w+s*e._x+l*e._y+c*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=h,this._x=s,this._y=l,this._z=c,this;const g=1-d*d;if(g<=Number.EPSILON){const S=1-i;return this._w=S*h+i*this._w,this._x=S*s+i*this._x,this._y=S*l+i*this._y,this._z=S*c+i*this._z,this.normalize(),this}const p=Math.sqrt(g),x=Math.atan2(p,d),m=Math.sin((1-i)*x)/p,v=Math.sin(i*x)/p;return this._w=h*m+this._w*v,this._x=s*m+this._x*v,this._y=l*m+this._y*v,this._z=c*m+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class et{constructor(e=0,i=0,s=0){et.prototype.isVector3=!0,this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(Dv.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(Dv.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=e.elements,h=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*h,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,c=e.x,h=e.y,d=e.z,g=e.w,p=2*(h*l-d*s),x=2*(d*i-c*l),m=2*(c*s-h*i);return this.x=i+g*p+h*m-d*x,this.y=s+g*x+d*p-c*m,this.z=l+g*m+c*x-h*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Me(this.x,e.x,i.x),this.y=Me(this.y,e.y,i.y),this.z=Me(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Me(this.x,e,i),this.y=Me(this.y,e,i),this.z=Me(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Me(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,c=e.z,h=i.x,d=i.y,g=i.z;return this.x=l*g-c*d,this.y=c*h-s*g,this.z=s*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return bd.copy(this).projectOnVector(e),this.sub(bd)}reflect(e){return this.sub(bd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Me(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const bd=new et,Dv=new ar;class pe{constructor(e,i,s,l,c,h,d,g,p){pe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,h,d,g,p)}set(e,i,s,l,c,h,d,g,p){const x=this.elements;return x[0]=e,x[1]=l,x[2]=d,x[3]=i,x[4]=c,x[5]=g,x[6]=s,x[7]=h,x[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,h=s[0],d=s[3],g=s[6],p=s[1],x=s[4],m=s[7],v=s[2],S=s[5],T=s[8],A=l[0],M=l[3],y=l[6],N=l[1],O=l[4],D=l[7],F=l[2],z=l[5],P=l[8];return c[0]=h*A+d*N+g*F,c[3]=h*M+d*O+g*z,c[6]=h*y+d*D+g*P,c[1]=p*A+x*N+m*F,c[4]=p*M+x*O+m*z,c[7]=p*y+x*D+m*P,c[2]=v*A+S*N+T*F,c[5]=v*M+S*O+T*z,c[8]=v*y+S*D+T*P,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],h=e[4],d=e[5],g=e[6],p=e[7],x=e[8];return i*h*x-i*d*p-s*c*x+s*d*g+l*c*p-l*h*g}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],h=e[4],d=e[5],g=e[6],p=e[7],x=e[8],m=x*h-d*p,v=d*g-x*c,S=p*c-h*g,T=i*m+s*v+l*S;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/T;return e[0]=m*A,e[1]=(l*p-x*s)*A,e[2]=(d*s-l*h)*A,e[3]=v*A,e[4]=(x*i-l*g)*A,e[5]=(l*c-d*i)*A,e[6]=S*A,e[7]=(s*g-p*i)*A,e[8]=(h*i-s*c)*A,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,c,h,d){const g=Math.cos(c),p=Math.sin(c);return this.set(s*g,s*p,-s*(g*h+p*d)+h+e,-l*p,l*g,-l*(-p*h+g*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(Ad.makeScale(e,i)),this}rotate(e){return this.premultiply(Ad.makeRotation(-e)),this}translate(e,i){return this.premultiply(Ad.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ad=new pe;function Yx(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Pc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function eT(){const o=Pc("canvas");return o.style.display="block",o}const Uv={};function Al(o){o in Uv||(Uv[o]=!0,console.warn(o))}function nT(o,e,i){return new Promise(function(s,l){function c(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const Nv=new pe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Lv=new pe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function iT(){const o={enabled:!0,workingColorSpace:vo,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===ke&&(l.r=Na(l.r),l.g=Na(l.g),l.b=Na(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===ke&&(l.r=po(l.r),l.g=po(l.g),l.b=po(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ms?Lc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Al("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Al("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[vo]:{primaries:e,whitePoint:s,transfer:Lc,toXYZ:Nv,fromXYZ:Lv,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Ai},outputColorSpaceConfig:{drawingBufferColorSpace:Ai}},[Ai]:{primaries:e,whitePoint:s,transfer:ke,toXYZ:Nv,fromXYZ:Lv,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Ai}}}),o}const Ne=iT();function Na(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function po(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Zr;class aT{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{Zr===void 0&&(Zr=Pc("canvas")),Zr.width=e.width,Zr.height=e.height;const l=Zr.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=Zr}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Pc("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=Na(c[h]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Na(i[s]/255)*255):i[s]=Na(i[s]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let sT=0;class tm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:sT++}),this.uuid=Cl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(Rd(l[h].image)):c.push(Rd(l[h]))}else c=Rd(l);s.url=c}return i||(e.images[this.uuid]=s),s}}function Rd(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?aT.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let rT=0;const Cd=new et;class ii extends rr{constructor(e=ii.DEFAULT_IMAGE,i=ii.DEFAULT_MAPPING,s=tr,l=tr,c=na,h=er,d=Fi,g=sa,p=ii.DEFAULT_ANISOTROPY,x=ms){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rT++}),this.uuid=Cl(),this.name="",this.source=new tm(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=g,this.offset=new fe(0,0),this.repeat=new fe(1,1),this.center=new fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Cd).x}get height(){return this.source.getSize(Cd).y}get depth(){return this.source.getSize(Cd).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==zx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case dp:e.x=e.x-Math.floor(e.x);break;case tr:e.x=e.x<0?0:1;break;case pp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case dp:e.y=e.y-Math.floor(e.y);break;case tr:e.y=e.y<0?0:1;break;case pp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ii.DEFAULT_IMAGE=null;ii.DEFAULT_MAPPING=zx;ii.DEFAULT_ANISOTROPY=1;class ln{constructor(e=0,i=0,s=0,l=1){ln.prototype.isVector4=!0,this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=this.w,h=e.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,c;const g=e.elements,p=g[0],x=g[4],m=g[8],v=g[1],S=g[5],T=g[9],A=g[2],M=g[6],y=g[10];if(Math.abs(x-v)<.01&&Math.abs(m-A)<.01&&Math.abs(T-M)<.01){if(Math.abs(x+v)<.1&&Math.abs(m+A)<.1&&Math.abs(T+M)<.1&&Math.abs(p+S+y-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const O=(p+1)/2,D=(S+1)/2,F=(y+1)/2,z=(x+v)/4,P=(m+A)/4,G=(T+M)/4;return O>D&&O>F?O<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(O),l=z/s,c=P/s):D>F?D<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(D),s=z/l,c=G/l):F<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(F),s=P/c,l=G/c),this.set(s,l,c,i),this}let N=Math.sqrt((M-T)*(M-T)+(m-A)*(m-A)+(v-x)*(v-x));return Math.abs(N)<.001&&(N=1),this.x=(M-T)/N,this.y=(m-A)/N,this.z=(v-x)/N,this.w=Math.acos((p+S+y-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Me(this.x,e.x,i.x),this.y=Me(this.y,e.y,i.y),this.z=Me(this.z,e.z,i.z),this.w=Me(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Me(this.x,e,i),this.y=Me(this.y,e,i),this.z=Me(this.z,e,i),this.w=Me(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Me(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class oT extends rr{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:na,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new ln(0,0,e,i),this.scissorTest=!1,this.viewport=new ln(0,0,e,i);const l={width:e,height:i,depth:s.depth},c=new ii(l);this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const i={minFilter:na,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new tm(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class sr extends oT{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class Wx extends ii{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Gi,this.minFilter=Gi,this.wrapR=tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class lT extends ii{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Gi,this.minFilter=Gi,this.wrapR=tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wl{constructor(e=new et(1/0,1/0,1/0),i=new et(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(Pi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(Pi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=Pi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,Pi):Pi.fromBufferAttribute(c,h),Pi.applyMatrix4(e.matrixWorld),this.expandByPoint(Pi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),nc.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),nc.copy(s.boundingBox)),nc.applyMatrix4(e.matrixWorld),this.union(nc)}const l=e.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Pi),Pi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(gl),ic.subVectors(this.max,gl),Kr.subVectors(e.a,gl),Qr.subVectors(e.b,gl),Jr.subVectors(e.c,gl),os.subVectors(Qr,Kr),ls.subVectors(Jr,Qr),ks.subVectors(Kr,Jr);let i=[0,-os.z,os.y,0,-ls.z,ls.y,0,-ks.z,ks.y,os.z,0,-os.x,ls.z,0,-ls.x,ks.z,0,-ks.x,-os.y,os.x,0,-ls.y,ls.x,0,-ks.y,ks.x,0];return!wd(i,Kr,Qr,Jr,ic)||(i=[1,0,0,0,1,0,0,0,1],!wd(i,Kr,Qr,Jr,ic))?!1:(ac.crossVectors(os,ls),i=[ac.x,ac.y,ac.z],wd(i,Kr,Qr,Jr,ic))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Pi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Pi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ea[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ea[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ea[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ea[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ea[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ea[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ea[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ea[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ea),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ea=[new et,new et,new et,new et,new et,new et,new et,new et],Pi=new et,nc=new wl,Kr=new et,Qr=new et,Jr=new et,os=new et,ls=new et,ks=new et,gl=new et,ic=new et,ac=new et,js=new et;function wd(o,e,i,s,l){for(let c=0,h=o.length-3;c<=h;c+=3){js.fromArray(o,c);const d=l.x*Math.abs(js.x)+l.y*Math.abs(js.y)+l.z*Math.abs(js.z),g=e.dot(js),p=i.dot(js),x=s.dot(js);if(Math.max(-Math.max(g,p,x),Math.min(g,p,x))>d)return!1}return!0}const uT=new wl,_l=new et,Dd=new et;class Gc{constructor(e=new et,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):uT.setFromPoints(e).getCenter(s);let l=0;for(let c=0,h=e.length;c<h;c++)l=Math.max(l,s.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_l.subVectors(e,this.center);const i=_l.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(_l,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Dd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_l.copy(e.center).add(Dd)),this.expandByPoint(_l.copy(e.center).sub(Dd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Ta=new et,Ud=new et,sc=new et,us=new et,Nd=new et,rc=new et,Ld=new et;class em{constructor(e=new et,i=new et(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ta)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Ta.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Ta.copy(this.origin).addScaledVector(this.direction,i),Ta.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){Ud.copy(e).add(i).multiplyScalar(.5),sc.copy(i).sub(e).normalize(),us.copy(this.origin).sub(Ud);const c=e.distanceTo(i)*.5,h=-this.direction.dot(sc),d=us.dot(this.direction),g=-us.dot(sc),p=us.lengthSq(),x=Math.abs(1-h*h);let m,v,S,T;if(x>0)if(m=h*g-d,v=h*d-g,T=c*x,m>=0)if(v>=-T)if(v<=T){const A=1/x;m*=A,v*=A,S=m*(m+h*v+2*d)+v*(h*m+v+2*g)+p}else v=c,m=Math.max(0,-(h*v+d)),S=-m*m+v*(v+2*g)+p;else v=-c,m=Math.max(0,-(h*v+d)),S=-m*m+v*(v+2*g)+p;else v<=-T?(m=Math.max(0,-(-h*c+d)),v=m>0?-c:Math.min(Math.max(-c,-g),c),S=-m*m+v*(v+2*g)+p):v<=T?(m=0,v=Math.min(Math.max(-c,-g),c),S=v*(v+2*g)+p):(m=Math.max(0,-(h*c+d)),v=m>0?c:Math.min(Math.max(-c,-g),c),S=-m*m+v*(v+2*g)+p);else v=h>0?-c:c,m=Math.max(0,-(h*v+d)),S=-m*m+v*(v+2*g)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,m),l&&l.copy(Ud).addScaledVector(sc,v),S}intersectSphere(e,i){Ta.subVectors(e.center,this.origin);const s=Ta.dot(this.direction),l=Ta.dot(Ta)-s*s,c=e.radius*e.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=s-h,g=s+h;return g<0?null:d<0?this.at(g,i):this.at(d,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,c,h,d,g;const p=1/this.direction.x,x=1/this.direction.y,m=1/this.direction.z,v=this.origin;return p>=0?(s=(e.min.x-v.x)*p,l=(e.max.x-v.x)*p):(s=(e.max.x-v.x)*p,l=(e.min.x-v.x)*p),x>=0?(c=(e.min.y-v.y)*x,h=(e.max.y-v.y)*x):(c=(e.max.y-v.y)*x,h=(e.min.y-v.y)*x),s>h||c>l||((c>s||isNaN(s))&&(s=c),(h<l||isNaN(l))&&(l=h),m>=0?(d=(e.min.z-v.z)*m,g=(e.max.z-v.z)*m):(d=(e.max.z-v.z)*m,g=(e.min.z-v.z)*m),s>g||d>l)||((d>s||s!==s)&&(s=d),(g<l||l!==l)&&(l=g),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,Ta)!==null}intersectTriangle(e,i,s,l,c){Nd.subVectors(i,e),rc.subVectors(s,e),Ld.crossVectors(Nd,rc);let h=this.direction.dot(Ld),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;us.subVectors(this.origin,e);const g=d*this.direction.dot(rc.crossVectors(us,rc));if(g<0)return null;const p=d*this.direction.dot(Nd.cross(us));if(p<0||g+p>h)return null;const x=-d*us.dot(Ld);return x<0?null:this.at(x/h,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class an{constructor(e,i,s,l,c,h,d,g,p,x,m,v,S,T,A,M){an.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,h,d,g,p,x,m,v,S,T,A,M)}set(e,i,s,l,c,h,d,g,p,x,m,v,S,T,A,M){const y=this.elements;return y[0]=e,y[4]=i,y[8]=s,y[12]=l,y[1]=c,y[5]=h,y[9]=d,y[13]=g,y[2]=p,y[6]=x,y[10]=m,y[14]=v,y[3]=S,y[7]=T,y[11]=A,y[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new an().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,s=e.elements,l=1/$r.setFromMatrixColumn(e,0).length(),c=1/$r.setFromMatrixColumn(e,1).length(),h=1/$r.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,c=e.z,h=Math.cos(s),d=Math.sin(s),g=Math.cos(l),p=Math.sin(l),x=Math.cos(c),m=Math.sin(c);if(e.order==="XYZ"){const v=h*x,S=h*m,T=d*x,A=d*m;i[0]=g*x,i[4]=-g*m,i[8]=p,i[1]=S+T*p,i[5]=v-A*p,i[9]=-d*g,i[2]=A-v*p,i[6]=T+S*p,i[10]=h*g}else if(e.order==="YXZ"){const v=g*x,S=g*m,T=p*x,A=p*m;i[0]=v+A*d,i[4]=T*d-S,i[8]=h*p,i[1]=h*m,i[5]=h*x,i[9]=-d,i[2]=S*d-T,i[6]=A+v*d,i[10]=h*g}else if(e.order==="ZXY"){const v=g*x,S=g*m,T=p*x,A=p*m;i[0]=v-A*d,i[4]=-h*m,i[8]=T+S*d,i[1]=S+T*d,i[5]=h*x,i[9]=A-v*d,i[2]=-h*p,i[6]=d,i[10]=h*g}else if(e.order==="ZYX"){const v=h*x,S=h*m,T=d*x,A=d*m;i[0]=g*x,i[4]=T*p-S,i[8]=v*p+A,i[1]=g*m,i[5]=A*p+v,i[9]=S*p-T,i[2]=-p,i[6]=d*g,i[10]=h*g}else if(e.order==="YZX"){const v=h*g,S=h*p,T=d*g,A=d*p;i[0]=g*x,i[4]=A-v*m,i[8]=T*m+S,i[1]=m,i[5]=h*x,i[9]=-d*x,i[2]=-p*x,i[6]=S*m+T,i[10]=v-A*m}else if(e.order==="XZY"){const v=h*g,S=h*p,T=d*g,A=d*p;i[0]=g*x,i[4]=-m,i[8]=p*x,i[1]=v*m+A,i[5]=h*x,i[9]=S*m-T,i[2]=T*m-S,i[6]=d*x,i[10]=A*m+v}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(cT,e,fT)}lookAt(e,i,s){const l=this.elements;return di.subVectors(e,i),di.lengthSq()===0&&(di.z=1),di.normalize(),cs.crossVectors(s,di),cs.lengthSq()===0&&(Math.abs(s.z)===1?di.x+=1e-4:di.z+=1e-4,di.normalize(),cs.crossVectors(s,di)),cs.normalize(),oc.crossVectors(di,cs),l[0]=cs.x,l[4]=oc.x,l[8]=di.x,l[1]=cs.y,l[5]=oc.y,l[9]=di.y,l[2]=cs.z,l[6]=oc.z,l[10]=di.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,h=s[0],d=s[4],g=s[8],p=s[12],x=s[1],m=s[5],v=s[9],S=s[13],T=s[2],A=s[6],M=s[10],y=s[14],N=s[3],O=s[7],D=s[11],F=s[15],z=l[0],P=l[4],G=l[8],w=l[12],C=l[1],V=l[5],J=l[9],rt=l[13],ct=l[2],ft=l[6],k=l[10],ut=l[14],K=l[3],vt=l[7],yt=l[11],Gt=l[15];return c[0]=h*z+d*C+g*ct+p*K,c[4]=h*P+d*V+g*ft+p*vt,c[8]=h*G+d*J+g*k+p*yt,c[12]=h*w+d*rt+g*ut+p*Gt,c[1]=x*z+m*C+v*ct+S*K,c[5]=x*P+m*V+v*ft+S*vt,c[9]=x*G+m*J+v*k+S*yt,c[13]=x*w+m*rt+v*ut+S*Gt,c[2]=T*z+A*C+M*ct+y*K,c[6]=T*P+A*V+M*ft+y*vt,c[10]=T*G+A*J+M*k+y*yt,c[14]=T*w+A*rt+M*ut+y*Gt,c[3]=N*z+O*C+D*ct+F*K,c[7]=N*P+O*V+D*ft+F*vt,c[11]=N*G+O*J+D*k+F*yt,c[15]=N*w+O*rt+D*ut+F*Gt,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[12],h=e[1],d=e[5],g=e[9],p=e[13],x=e[2],m=e[6],v=e[10],S=e[14],T=e[3],A=e[7],M=e[11],y=e[15];return T*(+c*g*m-l*p*m-c*d*v+s*p*v+l*d*S-s*g*S)+A*(+i*g*S-i*p*v+c*h*v-l*h*S+l*p*x-c*g*x)+M*(+i*p*m-i*d*S-c*h*m+s*h*S+c*d*x-s*p*x)+y*(-l*d*x-i*g*m+i*d*v+l*h*m-s*h*v+s*g*x)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],h=e[4],d=e[5],g=e[6],p=e[7],x=e[8],m=e[9],v=e[10],S=e[11],T=e[12],A=e[13],M=e[14],y=e[15],N=m*M*p-A*v*p+A*g*S-d*M*S-m*g*y+d*v*y,O=T*v*p-x*M*p-T*g*S+h*M*S+x*g*y-h*v*y,D=x*A*p-T*m*p+T*d*S-h*A*S-x*d*y+h*m*y,F=T*m*g-x*A*g-T*d*v+h*A*v+x*d*M-h*m*M,z=i*N+s*O+l*D+c*F;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/z;return e[0]=N*P,e[1]=(A*v*c-m*M*c-A*l*S+s*M*S+m*l*y-s*v*y)*P,e[2]=(d*M*c-A*g*c+A*l*p-s*M*p-d*l*y+s*g*y)*P,e[3]=(m*g*c-d*v*c-m*l*p+s*v*p+d*l*S-s*g*S)*P,e[4]=O*P,e[5]=(x*M*c-T*v*c+T*l*S-i*M*S-x*l*y+i*v*y)*P,e[6]=(T*g*c-h*M*c-T*l*p+i*M*p+h*l*y-i*g*y)*P,e[7]=(h*v*c-x*g*c+x*l*p-i*v*p-h*l*S+i*g*S)*P,e[8]=D*P,e[9]=(T*m*c-x*A*c-T*s*S+i*A*S+x*s*y-i*m*y)*P,e[10]=(h*A*c-T*d*c+T*s*p-i*A*p-h*s*y+i*d*y)*P,e[11]=(x*d*c-h*m*c-x*s*p+i*m*p+h*s*S-i*d*S)*P,e[12]=F*P,e[13]=(x*A*l-T*m*l+T*s*v-i*A*v-x*s*M+i*m*M)*P,e[14]=(T*d*l-h*A*l-T*s*g+i*A*g+h*s*M-i*d*M)*P,e[15]=(h*m*l-x*d*l+x*s*g-i*m*g-h*s*v+i*d*v)*P,this}scale(e){const i=this.elements,s=e.x,l=e.y,c=e.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,h=e.x,d=e.y,g=e.z,p=c*h,x=c*d;return this.set(p*h+s,p*d-l*g,p*g+l*d,0,p*d+l*g,x*d+s,x*g-l*h,0,p*g-l*d,x*g+l*h,c*g*g+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,c,h){return this.set(1,s,c,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,c=i._x,h=i._y,d=i._z,g=i._w,p=c+c,x=h+h,m=d+d,v=c*p,S=c*x,T=c*m,A=h*x,M=h*m,y=d*m,N=g*p,O=g*x,D=g*m,F=s.x,z=s.y,P=s.z;return l[0]=(1-(A+y))*F,l[1]=(S+D)*F,l[2]=(T-O)*F,l[3]=0,l[4]=(S-D)*z,l[5]=(1-(v+y))*z,l[6]=(M+N)*z,l[7]=0,l[8]=(T+O)*P,l[9]=(M-N)*P,l[10]=(1-(v+A))*P,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;let c=$r.set(l[0],l[1],l[2]).length();const h=$r.set(l[4],l[5],l[6]).length(),d=$r.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),e.x=l[12],e.y=l[13],e.z=l[14],zi.copy(this);const p=1/c,x=1/h,m=1/d;return zi.elements[0]*=p,zi.elements[1]*=p,zi.elements[2]*=p,zi.elements[4]*=x,zi.elements[5]*=x,zi.elements[6]*=x,zi.elements[8]*=m,zi.elements[9]*=m,zi.elements[10]*=m,i.setFromRotationMatrix(zi),s.x=c,s.y=h,s.z=d,this}makePerspective(e,i,s,l,c,h,d=ia,g=!1){const p=this.elements,x=2*c/(i-e),m=2*c/(s-l),v=(i+e)/(i-e),S=(s+l)/(s-l);let T,A;if(g)T=c/(h-c),A=h*c/(h-c);else if(d===ia)T=-(h+c)/(h-c),A=-2*h*c/(h-c);else if(d===Oc)T=-h/(h-c),A=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=x,p[4]=0,p[8]=v,p[12]=0,p[1]=0,p[5]=m,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=T,p[14]=A,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,s,l,c,h,d=ia,g=!1){const p=this.elements,x=2/(i-e),m=2/(s-l),v=-(i+e)/(i-e),S=-(s+l)/(s-l);let T,A;if(g)T=1/(h-c),A=h/(h-c);else if(d===ia)T=-2/(h-c),A=-(h+c)/(h-c);else if(d===Oc)T=-1/(h-c),A=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=x,p[4]=0,p[8]=0,p[12]=v,p[1]=0,p[5]=m,p[9]=0,p[13]=S,p[2]=0,p[6]=0,p[10]=T,p[14]=A,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}}const $r=new et,zi=new an,cT=new et(0,0,0),fT=new et(1,1,1),cs=new et,oc=new et,di=new et,Ov=new an,Pv=new ar;class ra{constructor(e=0,i=0,s=0,l=ra.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,c=l[0],h=l[4],d=l[8],g=l[1],p=l[5],x=l[9],m=l[2],v=l[6],S=l[10];switch(i){case"XYZ":this._y=Math.asin(Me(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-x,S),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(v,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Me(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(g,p)):(this._y=Math.atan2(-m,c),this._z=0);break;case"ZXY":this._x=Math.asin(Me(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-m,S),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(g,c));break;case"ZYX":this._y=Math.asin(-Me(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(v,S),this._z=Math.atan2(g,c)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(Me(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(-x,p),this._y=Math.atan2(-m,c)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-Me(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(v,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-x,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return Ov.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ov,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Pv.setFromEuler(this),this.setFromQuaternion(Pv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ra.DEFAULT_ORDER="XYZ";class Zx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let hT=0;const zv=new et,to=new ar,ba=new an,lc=new et,vl=new et,dT=new et,pT=new ar,Iv=new et(1,0,0),Bv=new et(0,1,0),Fv=new et(0,0,1),Hv={type:"added"},mT={type:"removed"},eo={type:"childadded",child:null},Od={type:"childremoved",child:null};class Rn extends rr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hT++}),this.uuid=Cl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Rn.DEFAULT_UP.clone();const e=new et,i=new ra,s=new ar,l=new et(1,1,1);function c(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new an},normalMatrix:{value:new pe}}),this.matrix=new an,this.matrixWorld=new an,this.matrixAutoUpdate=Rn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return to.setFromAxisAngle(e,i),this.quaternion.multiply(to),this}rotateOnWorldAxis(e,i){return to.setFromAxisAngle(e,i),this.quaternion.premultiply(to),this}rotateX(e){return this.rotateOnAxis(Iv,e)}rotateY(e){return this.rotateOnAxis(Bv,e)}rotateZ(e){return this.rotateOnAxis(Fv,e)}translateOnAxis(e,i){return zv.copy(e).applyQuaternion(this.quaternion),this.position.add(zv.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(Iv,e)}translateY(e){return this.translateOnAxis(Bv,e)}translateZ(e){return this.translateOnAxis(Fv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ba.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?lc.copy(e):lc.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),vl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ba.lookAt(vl,lc,this.up):ba.lookAt(lc,vl,this.up),this.quaternion.setFromRotationMatrix(ba),l&&(ba.extractRotation(l.matrixWorld),to.setFromRotationMatrix(ba),this.quaternion.premultiply(to.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Hv),eo.child=e,this.dispatchEvent(eo),eo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(mT),Od.child=e,this.dispatchEvent(Od),Od.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ba.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ba.multiply(e.parent.matrixWorld)),e.applyMatrix4(ba),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Hv),eo.child=e,this.dispatchEvent(eo),eo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vl,e,dT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vl,pT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,g){return d[g.uuid]===void 0&&(d[g.uuid]=g.toJSON(e)),g.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const g=d.shapes;if(Array.isArray(g))for(let p=0,x=g.length;p<x;p++){const m=g[p];c(e.shapes,m)}else c(e.shapes,g)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let g=0,p=this.material.length;g<p;g++)d.push(c(e.materials,this.material[g]));l.material=d}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const g=this.animations[d];l.animations.push(c(e.animations,g))}}if(i){const d=h(e.geometries),g=h(e.materials),p=h(e.textures),x=h(e.images),m=h(e.shapes),v=h(e.skeletons),S=h(e.animations),T=h(e.nodes);d.length>0&&(s.geometries=d),g.length>0&&(s.materials=g),p.length>0&&(s.textures=p),x.length>0&&(s.images=x),m.length>0&&(s.shapes=m),v.length>0&&(s.skeletons=v),S.length>0&&(s.animations=S),T.length>0&&(s.nodes=T)}return s.object=l,s;function h(d){const g=[];for(const p in d){const x=d[p];delete x.metadata,g.push(x)}return g}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}Rn.DEFAULT_UP=new et(0,1,0);Rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ii=new et,Aa=new et,Pd=new et,Ra=new et,no=new et,io=new et,Gv=new et,zd=new et,Id=new et,Bd=new et,Fd=new ln,Hd=new ln,Gd=new ln;class Bi{constructor(e=new et,i=new et,s=new et){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),Ii.subVectors(e,i),l.cross(Ii);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,s,l,c){Ii.subVectors(l,i),Aa.subVectors(s,i),Pd.subVectors(e,i);const h=Ii.dot(Ii),d=Ii.dot(Aa),g=Ii.dot(Pd),p=Aa.dot(Aa),x=Aa.dot(Pd),m=h*p-d*d;if(m===0)return c.set(0,0,0),null;const v=1/m,S=(p*g-d*x)*v,T=(h*x-d*g)*v;return c.set(1-S-T,T,S)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,Ra)===null?!1:Ra.x>=0&&Ra.y>=0&&Ra.x+Ra.y<=1}static getInterpolation(e,i,s,l,c,h,d,g){return this.getBarycoord(e,i,s,l,Ra)===null?(g.x=0,g.y=0,"z"in g&&(g.z=0),"w"in g&&(g.w=0),null):(g.setScalar(0),g.addScaledVector(c,Ra.x),g.addScaledVector(h,Ra.y),g.addScaledVector(d,Ra.z),g)}static getInterpolatedAttribute(e,i,s,l,c,h){return Fd.setScalar(0),Hd.setScalar(0),Gd.setScalar(0),Fd.fromBufferAttribute(e,i),Hd.fromBufferAttribute(e,s),Gd.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(Fd,c.x),h.addScaledVector(Hd,c.y),h.addScaledVector(Gd,c.z),h}static isFrontFacing(e,i,s,l){return Ii.subVectors(s,i),Aa.subVectors(e,i),Ii.cross(Aa).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ii.subVectors(this.c,this.b),Aa.subVectors(this.a,this.b),Ii.cross(Aa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Bi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Bi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,c){return Bi.getInterpolation(e,this.a,this.b,this.c,i,s,l,c)}containsPoint(e){return Bi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Bi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,c=this.c;let h,d;no.subVectors(l,s),io.subVectors(c,s),zd.subVectors(e,s);const g=no.dot(zd),p=io.dot(zd);if(g<=0&&p<=0)return i.copy(s);Id.subVectors(e,l);const x=no.dot(Id),m=io.dot(Id);if(x>=0&&m<=x)return i.copy(l);const v=g*m-x*p;if(v<=0&&g>=0&&x<=0)return h=g/(g-x),i.copy(s).addScaledVector(no,h);Bd.subVectors(e,c);const S=no.dot(Bd),T=io.dot(Bd);if(T>=0&&S<=T)return i.copy(c);const A=S*p-g*T;if(A<=0&&p>=0&&T<=0)return d=p/(p-T),i.copy(s).addScaledVector(io,d);const M=x*T-S*m;if(M<=0&&m-x>=0&&S-T>=0)return Gv.subVectors(c,l),d=(m-x)/(m-x+(S-T)),i.copy(l).addScaledVector(Gv,d);const y=1/(M+A+v);return h=A*y,d=v*y,i.copy(s).addScaledVector(no,h).addScaledVector(io,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Kx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fs={h:0,s:0,l:0},uc={h:0,s:0,l:0};function Vd(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class xe{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Ai){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ne.colorSpaceToWorking(this,i),this}setRGB(e,i,s,l=Ne.workingColorSpace){return this.r=e,this.g=i,this.b=s,Ne.colorSpaceToWorking(this,l),this}setHSL(e,i,s,l=Ne.workingColorSpace){if(e=$E(e,1),i=Me(i,0,1),s=Me(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,h=2*s-c;this.r=Vd(h,c,e+1/3),this.g=Vd(h,c,e),this.b=Vd(h,c,e-1/3)}return Ne.colorSpaceToWorking(this,l),this}setStyle(e,i=Ai){function s(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Ai){const s=Kx[e.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Na(e.r),this.g=Na(e.g),this.b=Na(e.b),this}copyLinearToSRGB(e){return this.r=po(e.r),this.g=po(e.g),this.b=po(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ai){return Ne.workingToColorSpace(Bn.copy(this),e),Math.round(Me(Bn.r*255,0,255))*65536+Math.round(Me(Bn.g*255,0,255))*256+Math.round(Me(Bn.b*255,0,255))}getHexString(e=Ai){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Ne.workingColorSpace){Ne.workingToColorSpace(Bn.copy(this),i);const s=Bn.r,l=Bn.g,c=Bn.b,h=Math.max(s,l,c),d=Math.min(s,l,c);let g,p;const x=(d+h)/2;if(d===h)g=0,p=0;else{const m=h-d;switch(p=x<=.5?m/(h+d):m/(2-h-d),h){case s:g=(l-c)/m+(l<c?6:0);break;case l:g=(c-s)/m+2;break;case c:g=(s-l)/m+4;break}g/=6}return e.h=g,e.s=p,e.l=x,e}getRGB(e,i=Ne.workingColorSpace){return Ne.workingToColorSpace(Bn.copy(this),i),e.r=Bn.r,e.g=Bn.g,e.b=Bn.b,e}getStyle(e=Ai){Ne.workingToColorSpace(Bn.copy(this),e);const i=Bn.r,s=Bn.g,l=Bn.b;return e!==Ai?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(fs),this.setHSL(fs.h+e,fs.s+i,fs.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(fs),e.getHSL(uc);const s=Td(fs.h,uc.h,i),l=Td(fs.s,uc.s,i),c=Td(fs.l,uc.l,i);return this.setHSL(s,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Bn=new xe;xe.NAMES=Kx;let gT=0;class yo extends rr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gT++}),this.uuid=Cl(),this.name="",this.type="Material",this.blending=ho,this.side=vs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=np,this.blendDst=ip,this.blendEquation=Js,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xe(0,0,0),this.blendAlpha=0,this.depthFunc=mo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wr,this.stencilZFail=Wr,this.stencilZPass=Wr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==ho&&(s.blending=this.blending),this.side!==vs&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==np&&(s.blendSrc=this.blendSrc),this.blendDst!==ip&&(s.blendDst=this.blendDst),this.blendEquation!==Js&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==mo&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Rv&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Wr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Wr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Wr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const h=[];for(const d in c){const g=c[d];delete g.metadata,h.push(g)}return h}if(i){const c=l(e.textures),h=l(e.images);c.length>0&&(s.textures=c),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Qx extends yo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ra,this.combine=Px,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const mn=new et,cc=new fe;let _T=0;class aa{constructor(e,i,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:_T++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=Cv,this.updateRanges=[],this.gpuType=Da,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)cc.fromBufferAttribute(this,i),cc.applyMatrix3(e),this.setXY(i,cc.x,cc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)mn.fromBufferAttribute(this,i),mn.applyMatrix3(e),this.setXYZ(i,mn.x,mn.y,mn.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)mn.fromBufferAttribute(this,i),mn.applyMatrix4(e),this.setXYZ(i,mn.x,mn.y,mn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)mn.fromBufferAttribute(this,i),mn.applyNormalMatrix(e),this.setXYZ(i,mn.x,mn.y,mn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)mn.fromBufferAttribute(this,i),mn.transformDirection(e),this.setXYZ(i,mn.x,mn.y,mn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=ml(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=Jn(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=ml(i,this.array)),i}setX(e,i){return this.normalized&&(i=Jn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=ml(i,this.array)),i}setY(e,i){return this.normalized&&(i=Jn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=ml(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Jn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=ml(i,this.array)),i}setW(e,i){return this.normalized&&(i=Jn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=Jn(i,this.array),s=Jn(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=Jn(i,this.array),s=Jn(s,this.array),l=Jn(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,c){return e*=this.itemSize,this.normalized&&(i=Jn(i,this.array),s=Jn(s,this.array),l=Jn(l,this.array),c=Jn(c,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Cv&&(e.usage=this.usage),e}}class Jx extends aa{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class $x extends aa{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class gn extends aa{constructor(e,i,s){super(new Float32Array(e),i,s)}}let vT=0;const bi=new an,Xd=new Rn,ao=new et,pi=new wl,xl=new wl,An=new et;class Ci extends rr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vT++}),this.uuid=Cl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Yx(e)?$x:Jx)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new pe().getNormalMatrix(e);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return bi.makeRotationFromQuaternion(e),this.applyMatrix4(bi),this}rotateX(e){return bi.makeRotationX(e),this.applyMatrix4(bi),this}rotateY(e){return bi.makeRotationY(e),this.applyMatrix4(bi),this}rotateZ(e){return bi.makeRotationZ(e),this.applyMatrix4(bi),this}translate(e,i,s){return bi.makeTranslation(e,i,s),this.applyMatrix4(bi),this}scale(e,i,s){return bi.makeScale(e,i,s),this.applyMatrix4(bi),this}lookAt(e){return Xd.lookAt(e),Xd.updateMatrix(),this.applyMatrix4(Xd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ao).negate(),this.translate(ao.x,ao.y,ao.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=e.length;l<c;l++){const h=e[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new gn(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new et(-1/0,-1/0,-1/0),new et(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];pi.setFromBufferAttribute(c),this.morphTargetsRelative?(An.addVectors(this.boundingBox.min,pi.min),this.boundingBox.expandByPoint(An),An.addVectors(this.boundingBox.max,pi.max),this.boundingBox.expandByPoint(An)):(this.boundingBox.expandByPoint(pi.min),this.boundingBox.expandByPoint(pi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gc);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new et,1/0);return}if(e){const s=this.boundingSphere.center;if(pi.setFromBufferAttribute(e),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];xl.setFromBufferAttribute(d),this.morphTargetsRelative?(An.addVectors(pi.min,xl.min),pi.expandByPoint(An),An.addVectors(pi.max,xl.max),pi.expandByPoint(An)):(pi.expandByPoint(xl.min),pi.expandByPoint(xl.max))}pi.getCenter(s);let l=0;for(let c=0,h=e.count;c<h;c++)An.fromBufferAttribute(e,c),l=Math.max(l,s.distanceToSquared(An));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],g=this.morphTargetsRelative;for(let p=0,x=d.count;p<x;p++)An.fromBufferAttribute(d,p),g&&(ao.fromBufferAttribute(e,p),An.add(ao)),l=Math.max(l,s.distanceToSquared(An))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new aa(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],g=[];for(let G=0;G<s.count;G++)d[G]=new et,g[G]=new et;const p=new et,x=new et,m=new et,v=new fe,S=new fe,T=new fe,A=new et,M=new et;function y(G,w,C){p.fromBufferAttribute(s,G),x.fromBufferAttribute(s,w),m.fromBufferAttribute(s,C),v.fromBufferAttribute(c,G),S.fromBufferAttribute(c,w),T.fromBufferAttribute(c,C),x.sub(p),m.sub(p),S.sub(v),T.sub(v);const V=1/(S.x*T.y-T.x*S.y);isFinite(V)&&(A.copy(x).multiplyScalar(T.y).addScaledVector(m,-S.y).multiplyScalar(V),M.copy(m).multiplyScalar(S.x).addScaledVector(x,-T.x).multiplyScalar(V),d[G].add(A),d[w].add(A),d[C].add(A),g[G].add(M),g[w].add(M),g[C].add(M))}let N=this.groups;N.length===0&&(N=[{start:0,count:e.count}]);for(let G=0,w=N.length;G<w;++G){const C=N[G],V=C.start,J=C.count;for(let rt=V,ct=V+J;rt<ct;rt+=3)y(e.getX(rt+0),e.getX(rt+1),e.getX(rt+2))}const O=new et,D=new et,F=new et,z=new et;function P(G){F.fromBufferAttribute(l,G),z.copy(F);const w=d[G];O.copy(w),O.sub(F.multiplyScalar(F.dot(w))).normalize(),D.crossVectors(z,w);const V=D.dot(g[G])<0?-1:1;h.setXYZW(G,O.x,O.y,O.z,V)}for(let G=0,w=N.length;G<w;++G){const C=N[G],V=C.start,J=C.count;for(let rt=V,ct=V+J;rt<ct;rt+=3)P(e.getX(rt+0)),P(e.getX(rt+1)),P(e.getX(rt+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new aa(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let v=0,S=s.count;v<S;v++)s.setXYZ(v,0,0,0);const l=new et,c=new et,h=new et,d=new et,g=new et,p=new et,x=new et,m=new et;if(e)for(let v=0,S=e.count;v<S;v+=3){const T=e.getX(v+0),A=e.getX(v+1),M=e.getX(v+2);l.fromBufferAttribute(i,T),c.fromBufferAttribute(i,A),h.fromBufferAttribute(i,M),x.subVectors(h,c),m.subVectors(l,c),x.cross(m),d.fromBufferAttribute(s,T),g.fromBufferAttribute(s,A),p.fromBufferAttribute(s,M),d.add(x),g.add(x),p.add(x),s.setXYZ(T,d.x,d.y,d.z),s.setXYZ(A,g.x,g.y,g.z),s.setXYZ(M,p.x,p.y,p.z)}else for(let v=0,S=i.count;v<S;v+=3)l.fromBufferAttribute(i,v+0),c.fromBufferAttribute(i,v+1),h.fromBufferAttribute(i,v+2),x.subVectors(h,c),m.subVectors(l,c),x.cross(m),s.setXYZ(v+0,x.x,x.y,x.z),s.setXYZ(v+1,x.x,x.y,x.z),s.setXYZ(v+2,x.x,x.y,x.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)An.fromBufferAttribute(e,i),An.normalize(),e.setXYZ(i,An.x,An.y,An.z)}toNonIndexed(){function e(d,g){const p=d.array,x=d.itemSize,m=d.normalized,v=new p.constructor(g.length*x);let S=0,T=0;for(let A=0,M=g.length;A<M;A++){d.isInterleavedBufferAttribute?S=g[A]*d.data.stride+d.offset:S=g[A]*x;for(let y=0;y<x;y++)v[T++]=p[S++]}return new aa(v,x,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ci,s=this.index.array,l=this.attributes;for(const d in l){const g=l[d],p=e(g,s);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const g=[],p=c[d];for(let x=0,m=p.length;x<m;x++){const v=p[x],S=e(v,s);g.push(S)}i.morphAttributes[d]=g}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,g=h.length;d<g;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const g=this.parameters;for(const p in g)g[p]!==void 0&&(e[p]=g[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const g in s){const p=s[g];e.data.attributes[g]=p.toJSON(e.data)}const l={};let c=!1;for(const g in this.morphAttributes){const p=this.morphAttributes[g],x=[];for(let m=0,v=p.length;m<v;m++){const S=p[m];x.push(S.toJSON(e.data))}x.length>0&&(l[g]=x,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const p in l){const x=l[p];this.setAttribute(p,x.clone(i))}const c=e.morphAttributes;for(const p in c){const x=[],m=c[p];for(let v=0,S=m.length;v<S;v++)x.push(m[v].clone(i));this.morphAttributes[p]=x}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let p=0,x=h.length;p<x;p++){const m=h[p];this.addGroup(m.start,m.count,m.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const g=e.boundingSphere;return g!==null&&(this.boundingSphere=g.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Vv=new an,qs=new em,fc=new Gc,Xv=new et,hc=new et,dc=new et,pc=new et,kd=new et,mc=new et,kv=new et,gc=new et;class Hi extends Rn{constructor(e=new Ci,i=new Qx){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(c&&d){mc.set(0,0,0);for(let g=0,p=c.length;g<p;g++){const x=d[g],m=c[g];x!==0&&(kd.fromBufferAttribute(m,e),h?mc.addScaledVector(kd,x):mc.addScaledVector(kd.sub(i),x))}i.add(mc)}return i}raycast(e,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),fc.copy(s.boundingSphere),fc.applyMatrix4(c),qs.copy(e.ray).recast(e.near),!(fc.containsPoint(qs.origin)===!1&&(qs.intersectSphere(fc,Xv)===null||qs.origin.distanceToSquared(Xv)>(e.far-e.near)**2))&&(Vv.copy(c).invert(),qs.copy(e.ray).applyMatrix4(Vv),!(s.boundingBox!==null&&qs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,qs)))}_computeIntersections(e,i,s){let l;const c=this.geometry,h=this.material,d=c.index,g=c.attributes.position,p=c.attributes.uv,x=c.attributes.uv1,m=c.attributes.normal,v=c.groups,S=c.drawRange;if(d!==null)if(Array.isArray(h))for(let T=0,A=v.length;T<A;T++){const M=v[T],y=h[M.materialIndex],N=Math.max(M.start,S.start),O=Math.min(d.count,Math.min(M.start+M.count,S.start+S.count));for(let D=N,F=O;D<F;D+=3){const z=d.getX(D),P=d.getX(D+1),G=d.getX(D+2);l=_c(this,y,e,s,p,x,m,z,P,G),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const T=Math.max(0,S.start),A=Math.min(d.count,S.start+S.count);for(let M=T,y=A;M<y;M+=3){const N=d.getX(M),O=d.getX(M+1),D=d.getX(M+2);l=_c(this,h,e,s,p,x,m,N,O,D),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(g!==void 0)if(Array.isArray(h))for(let T=0,A=v.length;T<A;T++){const M=v[T],y=h[M.materialIndex],N=Math.max(M.start,S.start),O=Math.min(g.count,Math.min(M.start+M.count,S.start+S.count));for(let D=N,F=O;D<F;D+=3){const z=D,P=D+1,G=D+2;l=_c(this,y,e,s,p,x,m,z,P,G),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const T=Math.max(0,S.start),A=Math.min(g.count,S.start+S.count);for(let M=T,y=A;M<y;M+=3){const N=M,O=M+1,D=M+2;l=_c(this,h,e,s,p,x,m,N,O,D),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function xT(o,e,i,s,l,c,h,d){let g;if(e.side===ni?g=s.intersectTriangle(h,c,l,!0,d):g=s.intersectTriangle(l,c,h,e.side===vs,d),g===null)return null;gc.copy(d),gc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(gc);return p<i.near||p>i.far?null:{distance:p,point:gc.clone(),object:o}}function _c(o,e,i,s,l,c,h,d,g,p){o.getVertexPosition(d,hc),o.getVertexPosition(g,dc),o.getVertexPosition(p,pc);const x=xT(o,e,i,s,hc,dc,pc,kv);if(x){const m=new et;Bi.getBarycoord(kv,hc,dc,pc,m),l&&(x.uv=Bi.getInterpolatedAttribute(l,d,g,p,m,new fe)),c&&(x.uv1=Bi.getInterpolatedAttribute(c,d,g,p,m,new fe)),h&&(x.normal=Bi.getInterpolatedAttribute(h,d,g,p,m,new et),x.normal.dot(s.direction)>0&&x.normal.multiplyScalar(-1));const v={a:d,b:g,c:p,normal:new et,materialIndex:0};Bi.getNormal(hc,dc,pc,v.normal),x.face=v,x.barycoord=m}return x}class So extends Ci{constructor(e=1,i=1,s=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const g=[],p=[],x=[],m=[];let v=0,S=0;T("z","y","x",-1,-1,s,i,e,h,c,0),T("z","y","x",1,-1,s,i,-e,h,c,1),T("x","z","y",1,1,e,s,i,l,h,2),T("x","z","y",1,-1,e,s,-i,l,h,3),T("x","y","z",1,-1,e,i,s,l,c,4),T("x","y","z",-1,-1,e,i,-s,l,c,5),this.setIndex(g),this.setAttribute("position",new gn(p,3)),this.setAttribute("normal",new gn(x,3)),this.setAttribute("uv",new gn(m,2));function T(A,M,y,N,O,D,F,z,P,G,w){const C=D/P,V=F/G,J=D/2,rt=F/2,ct=z/2,ft=P+1,k=G+1;let ut=0,K=0;const vt=new et;for(let yt=0;yt<k;yt++){const Gt=yt*V-rt;for(let re=0;re<ft;re++){const Ae=re*C-J;vt[A]=Ae*N,vt[M]=Gt*O,vt[y]=ct,p.push(vt.x,vt.y,vt.z),vt[A]=0,vt[M]=0,vt[y]=z>0?1:-1,x.push(vt.x,vt.y,vt.z),m.push(re/P),m.push(1-yt/G),ut+=1}}for(let yt=0;yt<G;yt++)for(let Gt=0;Gt<P;Gt++){const re=v+Gt+ft*yt,Ae=v+Gt+ft*(yt+1),B=v+(Gt+1)+ft*(yt+1),ht=v+(Gt+1)+ft*yt;g.push(re,Ae,ht),g.push(Ae,B,ht),K+=6}d.addGroup(S,K,w),S+=K,v+=ut}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new So(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function xo(o){const e={};for(const i in o){e[i]={};for(const s in o[i]){const l=o[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone():Array.isArray(l)?e[i][s]=l.slice():e[i][s]=l}}return e}function jn(o){const e={};for(let i=0;i<o.length;i++){const s=xo(o[i]);for(const l in s)e[l]=s[l]}return e}function yT(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function ty(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ne.workingColorSpace}const ST={clone:xo,merge:jn};var MT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ET=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xs extends yo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=MT,this.fragmentShader=ET,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xo(e.uniforms),this.uniformsGroups=yT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class ey extends Rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new an,this.projectionMatrix=new an,this.projectionMatrixInverse=new an,this.coordinateSystem=ia,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const hs=new et,jv=new fe,qv=new fe;class Ri extends ey{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Xp*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Dc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xp*2*Math.atan(Math.tan(Dc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){hs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(hs.x,hs.y).multiplyScalar(-e/hs.z),hs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(hs.x,hs.y).multiplyScalar(-e/hs.z)}getViewSize(e,i){return this.getViewBounds(e,jv,qv),i.subVectors(qv,jv)}setViewOffset(e,i,s,l,c,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Dc*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const g=h.fullWidth,p=h.fullHeight;c+=h.offsetX*l/g,i-=h.offsetY*s/p,l*=h.width/g,s*=h.height/p}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const so=-90,ro=1;class TT extends Rn{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Ri(so,ro,e,i);l.layers=this.layers,this.add(l);const c=new Ri(so,ro,e,i);c.layers=this.layers,this.add(c);const h=new Ri(so,ro,e,i);h.layers=this.layers,this.add(h);const d=new Ri(so,ro,e,i);d.layers=this.layers,this.add(d);const g=new Ri(so,ro,e,i);g.layers=this.layers,this.add(g);const p=new Ri(so,ro,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,c,h,d,g]=i;for(const p of i)this.remove(p);if(e===ia)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),g.up.set(0,1,0),g.lookAt(0,0,-1);else if(e===Oc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),g.up.set(0,-1,0),g.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,g,p,x]=this.children,m=e.getRenderTarget(),v=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const A=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,l),e.render(i,c),e.setRenderTarget(s,1,l),e.render(i,h),e.setRenderTarget(s,2,l),e.render(i,d),e.setRenderTarget(s,3,l),e.render(i,g),e.setRenderTarget(s,4,l),e.render(i,p),s.texture.generateMipmaps=A,e.setRenderTarget(s,5,l),e.render(i,x),e.setRenderTarget(m,v,S),e.xr.enabled=T,s.texture.needsPMREMUpdate=!0}}class ny extends ii{constructor(e=[],i=go,s,l,c,h,d,g,p,x){super(e,i,s,l,c,h,d,g,p,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class bT extends sr{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new ny(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new So(5,5,5),c=new xs({name:"CubemapFromEquirect",uniforms:xo(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:ni,blending:gs});c.uniforms.tEquirect.value=i;const h=new Hi(l,c),d=i.minFilter;return i.minFilter===er&&(i.minFilter=na),new TT(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const c=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,s,l);e.setRenderTarget(c)}}class vc extends Rn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const AT={type:"move"};class jd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new et,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new et),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new et,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new et),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,c=null,h=null;const d=this._targetRay,g=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){h=!0;for(const A of e.hand.values()){const M=i.getJointPose(A,s),y=this._getHandJoint(p,A);M!==null&&(y.matrix.fromArray(M.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=M.radius),y.visible=M!==null}const x=p.joints["index-finger-tip"],m=p.joints["thumb-tip"],v=x.position.distanceTo(m.position),S=.02,T=.005;p.inputState.pinching&&v>S+T?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&v<=S-T&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else g!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,s),c!==null&&(g.matrix.fromArray(c.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,c.linearVelocity?(g.hasLinearVelocity=!0,g.linearVelocity.copy(c.linearVelocity)):g.hasLinearVelocity=!1,c.angularVelocity?(g.hasAngularVelocity=!0,g.angularVelocity.copy(c.angularVelocity)):g.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(AT)))}return d!==null&&(d.visible=l!==null),g!==null&&(g.visible=c!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new vc;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}class nm{constructor(e,i=1,s=1e3){this.isFog=!0,this.name="",this.color=new xe(e),this.near=i,this.far=s}clone(){return new nm(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class RT extends Rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ra,this.environmentIntensity=1,this.environmentRotation=new ra,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const qd=new et,CT=new et,wT=new pe;class ps{constructor(e=new et(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=qd.subVectors(s,i).cross(CT.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const s=e.delta(qd),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(s,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||wT.getNormalMatrix(e),l=this.coplanarPoint(qd).applyMatrix4(e),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ys=new Gc,DT=new fe(.5,.5),xc=new et;class im{constructor(e=new ps,i=new ps,s=new ps,l=new ps,c=new ps,h=new ps){this.planes=[e,i,s,l,c,h]}set(e,i,s,l,c,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=ia,s=!1){const l=this.planes,c=e.elements,h=c[0],d=c[1],g=c[2],p=c[3],x=c[4],m=c[5],v=c[6],S=c[7],T=c[8],A=c[9],M=c[10],y=c[11],N=c[12],O=c[13],D=c[14],F=c[15];if(l[0].setComponents(p-h,S-x,y-T,F-N).normalize(),l[1].setComponents(p+h,S+x,y+T,F+N).normalize(),l[2].setComponents(p+d,S+m,y+A,F+O).normalize(),l[3].setComponents(p-d,S-m,y-A,F-O).normalize(),s)l[4].setComponents(g,v,M,D).normalize(),l[5].setComponents(p-g,S-v,y-M,F-D).normalize();else if(l[4].setComponents(p-g,S-v,y-M,F-D).normalize(),i===ia)l[5].setComponents(p+g,S+v,y+M,F+D).normalize();else if(i===Oc)l[5].setComponents(g,v,M,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ys.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Ys.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ys)}intersectsSprite(e){Ys.center.set(0,0,0);const i=DT.distanceTo(e.center);return Ys.radius=.7071067811865476+i,Ys.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ys)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(xc.x=l.normal.x>0?e.max.x:e.min.x,xc.y=l.normal.y>0?e.max.y:e.min.y,xc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(xc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class iy extends yo{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const zc=new et,Ic=new et,Yv=new an,yl=new em,yc=new Gc,Yd=new et,Wv=new et;class UT extends Rn{constructor(e=new Ci,i=new iy){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)zc.fromBufferAttribute(i,l-1),Ic.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=zc.distanceTo(Ic);e.setAttribute("lineDistance",new gn(s,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,c=e.params.Line.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),yc.copy(s.boundingSphere),yc.applyMatrix4(l),yc.radius+=c,e.ray.intersectsSphere(yc)===!1)return;Yv.copy(l).invert(),yl.copy(e.ray).applyMatrix4(Yv);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),g=d*d,p=this.isLineSegments?2:1,x=s.index,v=s.attributes.position;if(x!==null){const S=Math.max(0,h.start),T=Math.min(x.count,h.start+h.count);for(let A=S,M=T-1;A<M;A+=p){const y=x.getX(A),N=x.getX(A+1),O=Sc(this,e,yl,g,y,N,A);O&&i.push(O)}if(this.isLineLoop){const A=x.getX(T-1),M=x.getX(S),y=Sc(this,e,yl,g,A,M,T-1);y&&i.push(y)}}else{const S=Math.max(0,h.start),T=Math.min(v.count,h.start+h.count);for(let A=S,M=T-1;A<M;A+=p){const y=Sc(this,e,yl,g,A,A+1,A);y&&i.push(y)}if(this.isLineLoop){const A=Sc(this,e,yl,g,T-1,S,T-1);A&&i.push(A)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function Sc(o,e,i,s,l,c,h){const d=o.geometry.attributes.position;if(zc.fromBufferAttribute(d,l),Ic.fromBufferAttribute(d,c),i.distanceSqToSegment(zc,Ic,Yd,Wv)>s)return;Yd.applyMatrix4(o.matrixWorld);const p=e.ray.origin.distanceTo(Yd);if(!(p<e.near||p>e.far))return{distance:p,point:Wv.clone().applyMatrix4(o.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:o}}const Zv=new et,Kv=new et;class NT extends UT{constructor(e,i){super(e,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)Zv.fromBufferAttribute(i,l),Kv.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+Zv.distanceTo(Kv);e.setAttribute("lineDistance",new gn(s,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ay extends ii{constructor(e,i,s=ir,l,c,h,d=Gi,g=Gi,p,x=Tl,m=1){if(x!==Tl&&x!==bl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:i,depth:m};super(v,l,c,h,d,g,x,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new tm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class sy extends ii{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class am extends Ci{constructor(e=1,i=1,s=4,l=8,c=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:i,capSegments:s,radialSegments:l,heightSegments:c},i=Math.max(0,i),s=Math.max(1,Math.floor(s)),l=Math.max(3,Math.floor(l)),c=Math.max(1,Math.floor(c));const h=[],d=[],g=[],p=[],x=i/2,m=Math.PI/2*e,v=i,S=2*m+v,T=s*2+c,A=l+1,M=new et,y=new et;for(let N=0;N<=T;N++){let O=0,D=0,F=0,z=0;if(N<=s){const w=N/s,C=w*Math.PI/2;D=-x-e*Math.cos(C),F=e*Math.sin(C),z=-e*Math.cos(C),O=w*m}else if(N<=s+c){const w=(N-s)/c;D=-x+w*i,F=e,z=0,O=m+w*v}else{const w=(N-s-c)/s,C=w*Math.PI/2;D=x+e*Math.sin(C),F=e*Math.cos(C),z=e*Math.sin(C),O=m+v+w*m}const P=Math.max(0,Math.min(1,O/S));let G=0;N===0?G=.5/l:N===T&&(G=-.5/l);for(let w=0;w<=l;w++){const C=w/l,V=C*Math.PI*2,J=Math.sin(V),rt=Math.cos(V);y.x=-F*rt,y.y=D,y.z=F*J,d.push(y.x,y.y,y.z),M.set(-F*rt,z,F*J),M.normalize(),g.push(M.x,M.y,M.z),p.push(C+G,P)}if(N>0){const w=(N-1)*A;for(let C=0;C<l;C++){const V=w+C,J=w+C+1,rt=N*A+C,ct=N*A+C+1;h.push(V,J,rt),h.push(J,ct,rt)}}}this.setIndex(h),this.setAttribute("position",new gn(d,3)),this.setAttribute("normal",new gn(g,3)),this.setAttribute("uv",new gn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new am(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class sm extends Ci{constructor(e=1,i=1,s=1,l=32,c=1,h=!1,d=0,g=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:i,height:s,radialSegments:l,heightSegments:c,openEnded:h,thetaStart:d,thetaLength:g};const p=this;l=Math.floor(l),c=Math.floor(c);const x=[],m=[],v=[],S=[];let T=0;const A=[],M=s/2;let y=0;N(),h===!1&&(e>0&&O(!0),i>0&&O(!1)),this.setIndex(x),this.setAttribute("position",new gn(m,3)),this.setAttribute("normal",new gn(v,3)),this.setAttribute("uv",new gn(S,2));function N(){const D=new et,F=new et;let z=0;const P=(i-e)/s;for(let G=0;G<=c;G++){const w=[],C=G/c,V=C*(i-e)+e;for(let J=0;J<=l;J++){const rt=J/l,ct=rt*g+d,ft=Math.sin(ct),k=Math.cos(ct);F.x=V*ft,F.y=-C*s+M,F.z=V*k,m.push(F.x,F.y,F.z),D.set(ft,P,k).normalize(),v.push(D.x,D.y,D.z),S.push(rt,1-C),w.push(T++)}A.push(w)}for(let G=0;G<l;G++)for(let w=0;w<c;w++){const C=A[w][G],V=A[w+1][G],J=A[w+1][G+1],rt=A[w][G+1];(e>0||w!==0)&&(x.push(C,V,rt),z+=3),(i>0||w!==c-1)&&(x.push(V,J,rt),z+=3)}p.addGroup(y,z,0),y+=z}function O(D){const F=T,z=new fe,P=new et;let G=0;const w=D===!0?e:i,C=D===!0?1:-1;for(let J=1;J<=l;J++)m.push(0,M*C,0),v.push(0,C,0),S.push(.5,.5),T++;const V=T;for(let J=0;J<=l;J++){const ct=J/l*g+d,ft=Math.cos(ct),k=Math.sin(ct);P.x=w*k,P.y=M*C,P.z=w*ft,m.push(P.x,P.y,P.z),v.push(0,C,0),z.x=ft*.5+.5,z.y=k*.5*C+.5,S.push(z.x,z.y),T++}for(let J=0;J<l;J++){const rt=F+J,ct=V+J;D===!0?x.push(ct,ct+1,rt):x.push(ct+1,ct,rt),G+=3}p.addGroup(y,G,D===!0?1:2),y+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sm(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Dl extends Ci{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const c=e/2,h=i/2,d=Math.floor(s),g=Math.floor(l),p=d+1,x=g+1,m=e/d,v=i/g,S=[],T=[],A=[],M=[];for(let y=0;y<x;y++){const N=y*v-h;for(let O=0;O<p;O++){const D=O*m-c;T.push(D,-N,0),A.push(0,0,1),M.push(O/d),M.push(1-y/g)}}for(let y=0;y<g;y++)for(let N=0;N<d;N++){const O=N+p*y,D=N+p*(y+1),F=N+1+p*(y+1),z=N+1+p*y;S.push(O,D,z),S.push(D,F,z)}this.setIndex(S),this.setAttribute("position",new gn(T,3)),this.setAttribute("normal",new gn(A,3)),this.setAttribute("uv",new gn(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dl(e.width,e.height,e.widthSegments,e.heightSegments)}}class Bc extends Ci{constructor(e=1,i=32,s=16,l=0,c=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:h,thetaLength:d},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const g=Math.min(h+d,Math.PI);let p=0;const x=[],m=new et,v=new et,S=[],T=[],A=[],M=[];for(let y=0;y<=s;y++){const N=[],O=y/s;let D=0;y===0&&h===0?D=.5/i:y===s&&g===Math.PI&&(D=-.5/i);for(let F=0;F<=i;F++){const z=F/i;m.x=-e*Math.cos(l+z*c)*Math.sin(h+O*d),m.y=e*Math.cos(h+O*d),m.z=e*Math.sin(l+z*c)*Math.sin(h+O*d),T.push(m.x,m.y,m.z),v.copy(m).normalize(),A.push(v.x,v.y,v.z),M.push(z+D,1-O),N.push(p++)}x.push(N)}for(let y=0;y<s;y++)for(let N=0;N<i;N++){const O=x[y][N+1],D=x[y][N],F=x[y+1][N],z=x[y+1][N+1];(y!==0||h>0)&&S.push(O,D,z),(y!==s-1||g<Math.PI)&&S.push(D,F,z)}this.setIndex(S),this.setAttribute("position",new gn(T,3)),this.setAttribute("normal",new gn(A,3)),this.setAttribute("uv",new gn(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Qv extends yo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jx,this.normalScale=new fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ra,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class LT extends yo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=XE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class OT extends yo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class ry extends Rn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new xe(e),this.intensity=i}dispose(){}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}class PT extends ry{constructor(e,i,s){super(e,s),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Rn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new xe(i)}copy(e,i){return super.copy(e,i),this.groundColor.copy(e.groundColor),this}}const Wd=new an,Jv=new et,$v=new et;class zT{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new fe(512,512),this.mapType=sa,this.map=null,this.mapPass=null,this.matrix=new an,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new im,this._frameExtents=new fe(1,1),this._viewportCount=1,this._viewports=[new ln(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,s=this.matrix;Jv.setFromMatrixPosition(e.matrixWorld),i.position.copy(Jv),$v.setFromMatrixPosition(e.target.matrixWorld),i.lookAt($v),i.updateMatrixWorld(),Wd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wd,i.coordinateSystem,i.reversedDepth),i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Wd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class oy extends ey{constructor(e=-1,i=1,s=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-e,h=s+e,d=l+i,g=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,h=c+p*this.view.width,d-=x*this.view.offsetY,g=d-x*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,g,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class IT extends zT{constructor(){super(new oy(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class BT extends ry{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Rn.DEFAULT_UP),this.updateMatrix(),this.target=new Rn,this.shadow=new IT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class FT extends Ri{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class tx{constructor(e=1,i=0,s=0){this.radius=e,this.phi=i,this.theta=s}set(e,i,s){return this.radius=e,this.phi=i,this.theta=s,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Me(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,i,s){return this.radius=Math.sqrt(e*e+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,s),this.phi=Math.acos(Me(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class HT extends NT{constructor(e=10,i=10,s=4473924,l=8947848){s=new xe(s),l=new xe(l);const c=i/2,h=e/i,d=e/2,g=[],p=[];for(let v=0,S=0,T=-d;v<=i;v++,T+=h){g.push(-d,0,T,d,0,T),g.push(T,0,-d,T,0,d);const A=v===c?s:l;A.toArray(p,S),S+=3,A.toArray(p,S),S+=3,A.toArray(p,S),S+=3,A.toArray(p,S),S+=3}const x=new Ci;x.setAttribute("position",new gn(g,3)),x.setAttribute("color",new gn(p,3));const m=new iy({vertexColors:!0,toneMapped:!1});super(x,m),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}let GT=class extends rr{constructor(e,i=null){super(),this.object=e,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function ex(o,e,i,s){const l=VT(s);switch(i){case Gx:return o*e;case Xx:return o*e/l.components*l.byteLength;case Qp:return o*e/l.components*l.byteLength;case kx:return o*e*2/l.components*l.byteLength;case Jp:return o*e*2/l.components*l.byteLength;case Vx:return o*e*3/l.components*l.byteLength;case Fi:return o*e*4/l.components*l.byteLength;case $p:return o*e*4/l.components*l.byteLength;case Ac:case Rc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Cc:case wc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case gp:case vp:return Math.max(o,16)*Math.max(e,8)/4;case mp:case _p:return Math.max(o,8)*Math.max(e,8)/2;case xp:case yp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Sp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Mp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Ep:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Tp:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case bp:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Ap:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Rp:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Cp:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case wp:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Dp:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Up:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Np:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Lp:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Op:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Pp:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case zp:case Ip:case Bp:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Fp:case Hp:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Gp:case Vp:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function VT(o){switch(o){case sa:case Ix:return{byteLength:1,components:1};case Ml:case Bx:case Rl:return{byteLength:2,components:1};case Zp:case Kp:return{byteLength:2,components:4};case ir:case Wp:case Da:return{byteLength:4,components:1};case Fx:case Hx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yp);function ly(){let o=null,e=!1,i=null,s=null;function l(c,h){i(c,h),s=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(s=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function XT(o){const e=new WeakMap;function i(d,g){const p=d.array,x=d.usage,m=p.byteLength,v=o.createBuffer();o.bindBuffer(g,v),o.bufferData(g,p,x),d.onUploadCallback();let S;if(p instanceof Float32Array)S=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)S=o.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?S=o.HALF_FLOAT:S=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=o.SHORT;else if(p instanceof Uint32Array)S=o.UNSIGNED_INT;else if(p instanceof Int32Array)S=o.INT;else if(p instanceof Int8Array)S=o.BYTE;else if(p instanceof Uint8Array)S=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:v,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:m}}function s(d,g,p){const x=g.array,m=g.updateRanges;if(o.bindBuffer(p,d),m.length===0)o.bufferSubData(p,0,x);else{m.sort((S,T)=>S.start-T.start);let v=0;for(let S=1;S<m.length;S++){const T=m[v],A=m[S];A.start<=T.start+T.count+1?T.count=Math.max(T.count,A.start+A.count-T.start):(++v,m[v]=A)}m.length=v+1;for(let S=0,T=m.length;S<T;S++){const A=m[S];o.bufferSubData(p,A.start*x.BYTES_PER_ELEMENT,x,A.start,A.count)}g.clearUpdateRanges()}g.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const g=e.get(d);g&&(o.deleteBuffer(g.buffer),e.delete(d))}function h(d,g){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const x=e.get(d);(!x||x.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,i(d,g));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,g),p.version=d.version}}return{get:l,remove:c,update:h}}var kT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jT=`#ifdef USE_ALPHAHASH
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
#endif`,qT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,YT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,WT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ZT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,KT=`#ifdef USE_AOMAP
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
#endif`,QT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,JT=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
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
#endif`,$T=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,eb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ib=`#ifdef USE_IRIDESCENCE
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
#endif`,ab=`#ifdef USE_BUMPMAP
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
#endif`,sb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,rb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ob=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ub=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,cb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,fb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,hb=`#if defined( USE_COLOR_ALPHA )
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
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,db=`#define PI 3.141592653589793
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
} // validated`,pb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,mb=`vec3 transformedNormal = objectNormal;
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
#endif`,gb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_b=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Sb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Mb=`#ifdef USE_ENVMAP
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
#endif`,Eb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Tb=`#ifdef USE_ENVMAP
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
#endif`,bb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ab=`#ifdef USE_ENVMAP
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
#endif`,Rb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Db=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ub=`#ifdef USE_GRADIENTMAP
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
}`,Nb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Lb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ob=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Pb=`uniform bool receiveShadow;
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
#endif`,zb=`#ifdef USE_ENVMAP
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
#endif`,Ib=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Fb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Gb=`PhysicalMaterial material;
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
#endif`,Vb=`struct PhysicalMaterial {
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
}`,Xb=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,kb=`#if defined( RE_IndirectDiffuse )
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
#endif`,jb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Yb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Kb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Jb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,$b=`#if defined( USE_POINTS_UV )
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
#endif`,t1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,e1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,n1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,i1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,a1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,s1=`#ifdef USE_MORPHTARGETS
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
#endif`,r1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,o1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,l1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,u1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,c1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,f1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,h1=`#ifdef USE_NORMALMAP
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
#endif`,d1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,p1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,m1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,g1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,v1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,x1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,y1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,S1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,M1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,E1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,T1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,b1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
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
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,A1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,R1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,C1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,w1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,D1=`#ifdef USE_SKINNING
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
#endif`,U1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,N1=`#ifdef USE_SKINNING
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
#endif`,L1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,O1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,P1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,z1=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,I1=`#ifdef USE_TRANSMISSION
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
#endif`,B1=`#ifdef USE_TRANSMISSION
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
#endif`,F1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,H1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,G1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,V1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const X1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,k1=`uniform sampler2D t2D;
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
}`,j1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,q1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Y1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,W1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Z1=`#include <common>
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
}`,K1=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Q1=`#define DISTANCE
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
}`,J1=`#define DISTANCE
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
}`,$1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eA=`uniform float scale;
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
}`,nA=`uniform vec3 diffuse;
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
}`,iA=`#include <common>
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
}`,aA=`uniform vec3 diffuse;
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
}`,sA=`#define LAMBERT
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
}`,rA=`#define LAMBERT
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
}`,oA=`#define MATCAP
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
}`,lA=`#define MATCAP
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
}`,uA=`#define NORMAL
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
}`,cA=`#define NORMAL
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
}`,fA=`#define PHONG
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
}`,hA=`#define PHONG
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
}`,dA=`#define STANDARD
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
}`,pA=`#define STANDARD
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
}`,mA=`#define TOON
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
}`,gA=`#define TOON
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
}`,_A=`uniform float size;
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
}`,vA=`uniform vec3 diffuse;
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
}`,xA=`#include <common>
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
}`,yA=`uniform vec3 color;
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
}`,SA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,MA=`uniform vec3 diffuse;
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
}`,me={alphahash_fragment:kT,alphahash_pars_fragment:jT,alphamap_fragment:qT,alphamap_pars_fragment:YT,alphatest_fragment:WT,alphatest_pars_fragment:ZT,aomap_fragment:KT,aomap_pars_fragment:QT,batching_pars_vertex:JT,batching_vertex:$T,begin_vertex:tb,beginnormal_vertex:eb,bsdfs:nb,iridescence_fragment:ib,bumpmap_pars_fragment:ab,clipping_planes_fragment:sb,clipping_planes_pars_fragment:rb,clipping_planes_pars_vertex:ob,clipping_planes_vertex:lb,color_fragment:ub,color_pars_fragment:cb,color_pars_vertex:fb,color_vertex:hb,common:db,cube_uv_reflection_fragment:pb,defaultnormal_vertex:mb,displacementmap_pars_vertex:gb,displacementmap_vertex:_b,emissivemap_fragment:vb,emissivemap_pars_fragment:xb,colorspace_fragment:yb,colorspace_pars_fragment:Sb,envmap_fragment:Mb,envmap_common_pars_fragment:Eb,envmap_pars_fragment:Tb,envmap_pars_vertex:bb,envmap_physical_pars_fragment:zb,envmap_vertex:Ab,fog_vertex:Rb,fog_pars_vertex:Cb,fog_fragment:wb,fog_pars_fragment:Db,gradientmap_pars_fragment:Ub,lightmap_pars_fragment:Nb,lights_lambert_fragment:Lb,lights_lambert_pars_fragment:Ob,lights_pars_begin:Pb,lights_toon_fragment:Ib,lights_toon_pars_fragment:Bb,lights_phong_fragment:Fb,lights_phong_pars_fragment:Hb,lights_physical_fragment:Gb,lights_physical_pars_fragment:Vb,lights_fragment_begin:Xb,lights_fragment_maps:kb,lights_fragment_end:jb,logdepthbuf_fragment:qb,logdepthbuf_pars_fragment:Yb,logdepthbuf_pars_vertex:Wb,logdepthbuf_vertex:Zb,map_fragment:Kb,map_pars_fragment:Qb,map_particle_fragment:Jb,map_particle_pars_fragment:$b,metalnessmap_fragment:t1,metalnessmap_pars_fragment:e1,morphinstance_vertex:n1,morphcolor_vertex:i1,morphnormal_vertex:a1,morphtarget_pars_vertex:s1,morphtarget_vertex:r1,normal_fragment_begin:o1,normal_fragment_maps:l1,normal_pars_fragment:u1,normal_pars_vertex:c1,normal_vertex:f1,normalmap_pars_fragment:h1,clearcoat_normal_fragment_begin:d1,clearcoat_normal_fragment_maps:p1,clearcoat_pars_fragment:m1,iridescence_pars_fragment:g1,opaque_fragment:_1,packing:v1,premultiplied_alpha_fragment:x1,project_vertex:y1,dithering_fragment:S1,dithering_pars_fragment:M1,roughnessmap_fragment:E1,roughnessmap_pars_fragment:T1,shadowmap_pars_fragment:b1,shadowmap_pars_vertex:A1,shadowmap_vertex:R1,shadowmask_pars_fragment:C1,skinbase_vertex:w1,skinning_pars_vertex:D1,skinning_vertex:U1,skinnormal_vertex:N1,specularmap_fragment:L1,specularmap_pars_fragment:O1,tonemapping_fragment:P1,tonemapping_pars_fragment:z1,transmission_fragment:I1,transmission_pars_fragment:B1,uv_pars_fragment:F1,uv_pars_vertex:H1,uv_vertex:G1,worldpos_vertex:V1,background_vert:X1,background_frag:k1,backgroundCube_vert:j1,backgroundCube_frag:q1,cube_vert:Y1,cube_frag:W1,depth_vert:Z1,depth_frag:K1,distanceRGBA_vert:Q1,distanceRGBA_frag:J1,equirect_vert:$1,equirect_frag:tA,linedashed_vert:eA,linedashed_frag:nA,meshbasic_vert:iA,meshbasic_frag:aA,meshlambert_vert:sA,meshlambert_frag:rA,meshmatcap_vert:oA,meshmatcap_frag:lA,meshnormal_vert:uA,meshnormal_frag:cA,meshphong_vert:fA,meshphong_frag:hA,meshphysical_vert:dA,meshphysical_frag:pA,meshtoon_vert:mA,meshtoon_frag:gA,points_vert:_A,points_frag:vA,shadow_vert:xA,shadow_frag:yA,sprite_vert:SA,sprite_frag:MA},It={common:{diffuse:{value:new xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pe}},envmap:{envMap:{value:null},envMapRotation:{value:new pe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pe},normalScale:{value:new fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0},uvTransform:{value:new pe}},sprite:{diffuse:{value:new xe(16777215)},opacity:{value:1},center:{value:new fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}}},ea={basic:{uniforms:jn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.fog]),vertexShader:me.meshbasic_vert,fragmentShader:me.meshbasic_frag},lambert:{uniforms:jn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new xe(0)}}]),vertexShader:me.meshlambert_vert,fragmentShader:me.meshlambert_frag},phong:{uniforms:jn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new xe(0)},specular:{value:new xe(1118481)},shininess:{value:30}}]),vertexShader:me.meshphong_vert,fragmentShader:me.meshphong_frag},standard:{uniforms:jn([It.common,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.roughnessmap,It.metalnessmap,It.fog,It.lights,{emissive:{value:new xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag},toon:{uniforms:jn([It.common,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.gradientmap,It.fog,It.lights,{emissive:{value:new xe(0)}}]),vertexShader:me.meshtoon_vert,fragmentShader:me.meshtoon_frag},matcap:{uniforms:jn([It.common,It.bumpmap,It.normalmap,It.displacementmap,It.fog,{matcap:{value:null}}]),vertexShader:me.meshmatcap_vert,fragmentShader:me.meshmatcap_frag},points:{uniforms:jn([It.points,It.fog]),vertexShader:me.points_vert,fragmentShader:me.points_frag},dashed:{uniforms:jn([It.common,It.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:me.linedashed_vert,fragmentShader:me.linedashed_frag},depth:{uniforms:jn([It.common,It.displacementmap]),vertexShader:me.depth_vert,fragmentShader:me.depth_frag},normal:{uniforms:jn([It.common,It.bumpmap,It.normalmap,It.displacementmap,{opacity:{value:1}}]),vertexShader:me.meshnormal_vert,fragmentShader:me.meshnormal_frag},sprite:{uniforms:jn([It.sprite,It.fog]),vertexShader:me.sprite_vert,fragmentShader:me.sprite_frag},background:{uniforms:{uvTransform:{value:new pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:me.background_vert,fragmentShader:me.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pe}},vertexShader:me.backgroundCube_vert,fragmentShader:me.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:me.cube_vert,fragmentShader:me.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:me.equirect_vert,fragmentShader:me.equirect_frag},distanceRGBA:{uniforms:jn([It.common,It.displacementmap,{referencePosition:{value:new et},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:me.distanceRGBA_vert,fragmentShader:me.distanceRGBA_frag},shadow:{uniforms:jn([It.lights,It.fog,{color:{value:new xe(0)},opacity:{value:1}}]),vertexShader:me.shadow_vert,fragmentShader:me.shadow_frag}};ea.physical={uniforms:jn([ea.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pe},clearcoatNormalScale:{value:new fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pe},sheen:{value:0},sheenColor:{value:new xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pe},transmissionSamplerSize:{value:new fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pe},attenuationDistance:{value:0},attenuationColor:{value:new xe(0)},specularColor:{value:new xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pe},anisotropyVector:{value:new fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pe}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag};const Mc={r:0,b:0,g:0},Ws=new ra,EA=new an;function TA(o,e,i,s,l,c,h){const d=new xe(0);let g=c===!0?0:1,p,x,m=null,v=0,S=null;function T(O){let D=O.isScene===!0?O.background:null;return D&&D.isTexture&&(D=(O.backgroundBlurriness>0?i:e).get(D)),D}function A(O){let D=!1;const F=T(O);F===null?y(d,g):F&&F.isColor&&(y(F,1),D=!0);const z=o.xr.getEnvironmentBlendMode();z==="additive"?s.buffers.color.setClear(0,0,0,1,h):z==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(o.autoClear||D)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function M(O,D){const F=T(D);F&&(F.isCubeTexture||F.mapping===Hc)?(x===void 0&&(x=new Hi(new So(1,1,1),new xs({name:"BackgroundCubeMaterial",uniforms:xo(ea.backgroundCube.uniforms),vertexShader:ea.backgroundCube.vertexShader,fragmentShader:ea.backgroundCube.fragmentShader,side:ni,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),x.geometry.deleteAttribute("normal"),x.geometry.deleteAttribute("uv"),x.onBeforeRender=function(z,P,G){this.matrixWorld.copyPosition(G.matrixWorld)},Object.defineProperty(x.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(x)),Ws.copy(D.backgroundRotation),Ws.x*=-1,Ws.y*=-1,Ws.z*=-1,F.isCubeTexture&&F.isRenderTargetTexture===!1&&(Ws.y*=-1,Ws.z*=-1),x.material.uniforms.envMap.value=F,x.material.uniforms.flipEnvMap.value=F.isCubeTexture&&F.isRenderTargetTexture===!1?-1:1,x.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,x.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,x.material.uniforms.backgroundRotation.value.setFromMatrix4(EA.makeRotationFromEuler(Ws)),x.material.toneMapped=Ne.getTransfer(F.colorSpace)!==ke,(m!==F||v!==F.version||S!==o.toneMapping)&&(x.material.needsUpdate=!0,m=F,v=F.version,S=o.toneMapping),x.layers.enableAll(),O.unshift(x,x.geometry,x.material,0,0,null)):F&&F.isTexture&&(p===void 0&&(p=new Hi(new Dl(2,2),new xs({name:"BackgroundMaterial",uniforms:xo(ea.background.uniforms),vertexShader:ea.background.vertexShader,fragmentShader:ea.background.fragmentShader,side:vs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=F,p.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,p.material.toneMapped=Ne.getTransfer(F.colorSpace)!==ke,F.matrixAutoUpdate===!0&&F.updateMatrix(),p.material.uniforms.uvTransform.value.copy(F.matrix),(m!==F||v!==F.version||S!==o.toneMapping)&&(p.material.needsUpdate=!0,m=F,v=F.version,S=o.toneMapping),p.layers.enableAll(),O.unshift(p,p.geometry,p.material,0,0,null))}function y(O,D){O.getRGB(Mc,ty(o)),s.buffers.color.setClear(Mc.r,Mc.g,Mc.b,D,h)}function N(){x!==void 0&&(x.geometry.dispose(),x.material.dispose(),x=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(O,D=1){d.set(O),g=D,y(d,g)},getClearAlpha:function(){return g},setClearAlpha:function(O){g=O,y(d,g)},render:A,addToRenderList:M,dispose:N}}function bA(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=v(null);let c=l,h=!1;function d(C,V,J,rt,ct){let ft=!1;const k=m(rt,J,V);c!==k&&(c=k,p(c.object)),ft=S(C,rt,J,ct),ft&&T(C,rt,J,ct),ct!==null&&e.update(ct,o.ELEMENT_ARRAY_BUFFER),(ft||h)&&(h=!1,D(C,V,J,rt),ct!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(ct).buffer))}function g(){return o.createVertexArray()}function p(C){return o.bindVertexArray(C)}function x(C){return o.deleteVertexArray(C)}function m(C,V,J){const rt=J.wireframe===!0;let ct=s[C.id];ct===void 0&&(ct={},s[C.id]=ct);let ft=ct[V.id];ft===void 0&&(ft={},ct[V.id]=ft);let k=ft[rt];return k===void 0&&(k=v(g()),ft[rt]=k),k}function v(C){const V=[],J=[],rt=[];for(let ct=0;ct<i;ct++)V[ct]=0,J[ct]=0,rt[ct]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:J,attributeDivisors:rt,object:C,attributes:{},index:null}}function S(C,V,J,rt){const ct=c.attributes,ft=V.attributes;let k=0;const ut=J.getAttributes();for(const K in ut)if(ut[K].location>=0){const yt=ct[K];let Gt=ft[K];if(Gt===void 0&&(K==="instanceMatrix"&&C.instanceMatrix&&(Gt=C.instanceMatrix),K==="instanceColor"&&C.instanceColor&&(Gt=C.instanceColor)),yt===void 0||yt.attribute!==Gt||Gt&&yt.data!==Gt.data)return!0;k++}return c.attributesNum!==k||c.index!==rt}function T(C,V,J,rt){const ct={},ft=V.attributes;let k=0;const ut=J.getAttributes();for(const K in ut)if(ut[K].location>=0){let yt=ft[K];yt===void 0&&(K==="instanceMatrix"&&C.instanceMatrix&&(yt=C.instanceMatrix),K==="instanceColor"&&C.instanceColor&&(yt=C.instanceColor));const Gt={};Gt.attribute=yt,yt&&yt.data&&(Gt.data=yt.data),ct[K]=Gt,k++}c.attributes=ct,c.attributesNum=k,c.index=rt}function A(){const C=c.newAttributes;for(let V=0,J=C.length;V<J;V++)C[V]=0}function M(C){y(C,0)}function y(C,V){const J=c.newAttributes,rt=c.enabledAttributes,ct=c.attributeDivisors;J[C]=1,rt[C]===0&&(o.enableVertexAttribArray(C),rt[C]=1),ct[C]!==V&&(o.vertexAttribDivisor(C,V),ct[C]=V)}function N(){const C=c.newAttributes,V=c.enabledAttributes;for(let J=0,rt=V.length;J<rt;J++)V[J]!==C[J]&&(o.disableVertexAttribArray(J),V[J]=0)}function O(C,V,J,rt,ct,ft,k){k===!0?o.vertexAttribIPointer(C,V,J,ct,ft):o.vertexAttribPointer(C,V,J,rt,ct,ft)}function D(C,V,J,rt){A();const ct=rt.attributes,ft=J.getAttributes(),k=V.defaultAttributeValues;for(const ut in ft){const K=ft[ut];if(K.location>=0){let vt=ct[ut];if(vt===void 0&&(ut==="instanceMatrix"&&C.instanceMatrix&&(vt=C.instanceMatrix),ut==="instanceColor"&&C.instanceColor&&(vt=C.instanceColor)),vt!==void 0){const yt=vt.normalized,Gt=vt.itemSize,re=e.get(vt);if(re===void 0)continue;const Ae=re.buffer,B=re.type,ht=re.bytesPerElement,tt=B===o.INT||B===o.UNSIGNED_INT||vt.gpuType===Wp;if(vt.isInterleavedBufferAttribute){const st=vt.data,Mt=st.stride,Nt=vt.offset;if(st.isInstancedInterleavedBuffer){for(let Rt=0;Rt<K.locationSize;Rt++)y(K.location+Rt,st.meshPerAttribute);C.isInstancedMesh!==!0&&rt._maxInstanceCount===void 0&&(rt._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let Rt=0;Rt<K.locationSize;Rt++)M(K.location+Rt);o.bindBuffer(o.ARRAY_BUFFER,Ae);for(let Rt=0;Rt<K.locationSize;Rt++)O(K.location+Rt,Gt/K.locationSize,B,yt,Mt*ht,(Nt+Gt/K.locationSize*Rt)*ht,tt)}else{if(vt.isInstancedBufferAttribute){for(let st=0;st<K.locationSize;st++)y(K.location+st,vt.meshPerAttribute);C.isInstancedMesh!==!0&&rt._maxInstanceCount===void 0&&(rt._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let st=0;st<K.locationSize;st++)M(K.location+st);o.bindBuffer(o.ARRAY_BUFFER,Ae);for(let st=0;st<K.locationSize;st++)O(K.location+st,Gt/K.locationSize,B,yt,Gt*ht,Gt/K.locationSize*st*ht,tt)}}else if(k!==void 0){const yt=k[ut];if(yt!==void 0)switch(yt.length){case 2:o.vertexAttrib2fv(K.location,yt);break;case 3:o.vertexAttrib3fv(K.location,yt);break;case 4:o.vertexAttrib4fv(K.location,yt);break;default:o.vertexAttrib1fv(K.location,yt)}}}}N()}function F(){G();for(const C in s){const V=s[C];for(const J in V){const rt=V[J];for(const ct in rt)x(rt[ct].object),delete rt[ct];delete V[J]}delete s[C]}}function z(C){if(s[C.id]===void 0)return;const V=s[C.id];for(const J in V){const rt=V[J];for(const ct in rt)x(rt[ct].object),delete rt[ct];delete V[J]}delete s[C.id]}function P(C){for(const V in s){const J=s[V];if(J[C.id]===void 0)continue;const rt=J[C.id];for(const ct in rt)x(rt[ct].object),delete rt[ct];delete J[C.id]}}function G(){w(),h=!0,c!==l&&(c=l,p(c.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:G,resetDefaultState:w,dispose:F,releaseStatesOfGeometry:z,releaseStatesOfProgram:P,initAttributes:A,enableAttribute:M,disableUnusedAttributes:N}}function AA(o,e,i){let s;function l(p){s=p}function c(p,x){o.drawArrays(s,p,x),i.update(x,s,1)}function h(p,x,m){m!==0&&(o.drawArraysInstanced(s,p,x,m),i.update(x,s,m))}function d(p,x,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,x,0,m);let S=0;for(let T=0;T<m;T++)S+=x[T];i.update(S,s,1)}function g(p,x,m,v){if(m===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let T=0;T<p.length;T++)h(p[T],x[T],v[T]);else{S.multiDrawArraysInstancedWEBGL(s,p,0,x,0,v,0,m);let T=0;for(let A=0;A<m;A++)T+=x[A]*v[A];i.update(T,s,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=g}function RA(o,e,i,s){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(P){return!(P!==Fi&&s.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(P){const G=P===Rl&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==sa&&s.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Da&&!G)}function g(P){if(P==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const x=g(p);x!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",x,"instead."),p=x);const m=i.logarithmicDepthBuffer===!0,v=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),S=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),T=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),y=o.getParameter(o.MAX_VERTEX_ATTRIBS),N=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),O=o.getParameter(o.MAX_VARYING_VECTORS),D=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),F=T>0,z=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:g,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:m,reversedDepthBuffer:v,maxTextures:S,maxVertexTextures:T,maxTextureSize:A,maxCubemapSize:M,maxAttributes:y,maxVertexUniforms:N,maxVaryings:O,maxFragmentUniforms:D,vertexTextures:F,maxSamples:z}}function CA(o){const e=this;let i=null,s=0,l=!1,c=!1;const h=new ps,d=new pe,g={value:null,needsUpdate:!1};this.uniform=g,this.numPlanes=0,this.numIntersection=0,this.init=function(m,v){const S=m.length!==0||v||s!==0||l;return l=v,s=m.length,S},this.beginShadows=function(){c=!0,x(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(m,v){i=x(m,v,0)},this.setState=function(m,v,S){const T=m.clippingPlanes,A=m.clipIntersection,M=m.clipShadows,y=o.get(m);if(!l||T===null||T.length===0||c&&!M)c?x(null):p();else{const N=c?0:s,O=N*4;let D=y.clippingState||null;g.value=D,D=x(T,v,O,S);for(let F=0;F!==O;++F)D[F]=i[F];y.clippingState=D,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=N}};function p(){g.value!==i&&(g.value=i,g.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function x(m,v,S,T){const A=m!==null?m.length:0;let M=null;if(A!==0){if(M=g.value,T!==!0||M===null){const y=S+A*4,N=v.matrixWorldInverse;d.getNormalMatrix(N),(M===null||M.length<y)&&(M=new Float32Array(y));for(let O=0,D=S;O!==A;++O,D+=4)h.copy(m[O]).applyMatrix4(N,d),h.normal.toArray(M,D),M[D+3]=h.constant}g.value=M,g.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,M}}function wA(o){let e=new WeakMap;function i(h,d){return d===fp?h.mapping=go:d===hp&&(h.mapping=_o),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===fp||d===hp)if(e.has(h)){const g=e.get(h).texture;return i(g,h.mapping)}else{const g=h.image;if(g&&g.height>0){const p=new bT(g.height);return p.fromEquirectangularTexture(o,h),e.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function c(){e=new WeakMap}return{get:s,dispose:c}}const co=4,nx=[.125,.215,.35,.446,.526,.582],$s=20,Zd=new oy,ix=new xe;let Kd=null,Qd=0,Jd=0,$d=!1;const Ks=(1+Math.sqrt(5))/2,oo=1/Ks,ax=[new et(-Ks,oo,0),new et(Ks,oo,0),new et(-oo,0,Ks),new et(oo,0,Ks),new et(0,Ks,-oo),new et(0,Ks,oo),new et(-1,1,-1),new et(1,1,-1),new et(-1,1,1),new et(1,1,1)],DA=new et;class sx{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,s=.1,l=100,c={}){const{size:h=256,position:d=DA}=c;Kd=this._renderer.getRenderTarget(),Qd=this._renderer.getActiveCubeFace(),Jd=this._renderer.getActiveMipmapLevel(),$d=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const g=this._allocateTargets();return g.depthBuffer=!0,this._sceneToCubeUV(e,s,l,g,d),i>0&&this._blur(g,0,0,i),this._applyPMREM(g),this._cleanup(g),g}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ox(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Kd,Qd,Jd),this._renderer.xr.enabled=$d,e.scissorTest=!1,Ec(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===go||e.mapping===_o?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Kd=this._renderer.getRenderTarget(),Qd=this._renderer.getActiveCubeFace(),Jd=this._renderer.getActiveMipmapLevel(),$d=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:na,minFilter:na,generateMipmaps:!1,type:Rl,format:Fi,colorSpace:vo,depthBuffer:!1},l=rx(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rx(e,i,s);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=UA(c)),this._blurMaterial=NA(c,e,i)}return l}_compileMaterial(e){const i=new Hi(this._lodPlanes[0],e);this._renderer.compile(i,Zd)}_sceneToCubeUV(e,i,s,l,c){const g=new Ri(90,1,i,s),p=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],m=this._renderer,v=m.autoClear,S=m.toneMapping;m.getClearColor(ix),m.toneMapping=_s,m.autoClear=!1,m.state.buffers.depth.getReversed()&&(m.setRenderTarget(l),m.clearDepth(),m.setRenderTarget(null));const A=new Qx({name:"PMREM.Background",side:ni,depthWrite:!1,depthTest:!1}),M=new Hi(new So,A);let y=!1;const N=e.background;N?N.isColor&&(A.color.copy(N),e.background=null,y=!0):(A.color.copy(ix),y=!0);for(let O=0;O<6;O++){const D=O%3;D===0?(g.up.set(0,p[O],0),g.position.set(c.x,c.y,c.z),g.lookAt(c.x+x[O],c.y,c.z)):D===1?(g.up.set(0,0,p[O]),g.position.set(c.x,c.y,c.z),g.lookAt(c.x,c.y+x[O],c.z)):(g.up.set(0,p[O],0),g.position.set(c.x,c.y,c.z),g.lookAt(c.x,c.y,c.z+x[O]));const F=this._cubeSize;Ec(l,D*F,O>2?F:0,F,F),m.setRenderTarget(l),y&&m.render(M,g),m.render(e,g)}M.geometry.dispose(),M.material.dispose(),m.toneMapping=S,m.autoClear=v,e.background=N}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===go||e.mapping===_o;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=lx()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ox());const c=l?this._cubemapMaterial:this._equirectMaterial,h=new Hi(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=e;const g=this._cubeSize;Ec(i,0,0,3*g,2*g),s.setRenderTarget(i),s.render(h,Zd)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const h=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=ax[(l-c-1)%ax.length];this._blur(e,c-1,c,h,d)}i.autoClear=s}_blur(e,i,s,l,c){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,s,l,"latitudinal",c),this._halfBlur(h,e,s,s,l,"longitudinal",c)}_halfBlur(e,i,s,l,c,h,d){const g=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const x=3,m=new Hi(this._lodPlanes[l],p),v=p.uniforms,S=this._sizeLods[s]-1,T=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*$s-1),A=c/T,M=isFinite(c)?1+Math.floor(x*A):$s;M>$s&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${$s}`);const y=[];let N=0;for(let P=0;P<$s;++P){const G=P/A,w=Math.exp(-G*G/2);y.push(w),P===0?N+=w:P<M&&(N+=2*w)}for(let P=0;P<y.length;P++)y[P]=y[P]/N;v.envMap.value=e.texture,v.samples.value=M,v.weights.value=y,v.latitudinal.value=h==="latitudinal",d&&(v.poleAxis.value=d);const{_lodMax:O}=this;v.dTheta.value=T,v.mipInt.value=O-s;const D=this._sizeLods[l],F=3*D*(l>O-co?l-O+co:0),z=4*(this._cubeSize-D);Ec(i,F,z,3*D,2*D),g.setRenderTarget(i),g.render(m,Zd)}}function UA(o){const e=[],i=[],s=[];let l=o;const c=o-co+1+nx.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);i.push(d);let g=1/d;h>o-co?g=nx[h-o+co-1]:h===0&&(g=0),s.push(g);const p=1/(d-2),x=-p,m=1+p,v=[x,x,m,x,m,m,x,x,m,m,x,m],S=6,T=6,A=3,M=2,y=1,N=new Float32Array(A*T*S),O=new Float32Array(M*T*S),D=new Float32Array(y*T*S);for(let z=0;z<S;z++){const P=z%3*2/3-1,G=z>2?0:-1,w=[P,G,0,P+2/3,G,0,P+2/3,G+1,0,P,G,0,P+2/3,G+1,0,P,G+1,0];N.set(w,A*T*z),O.set(v,M*T*z);const C=[z,z,z,z,z,z];D.set(C,y*T*z)}const F=new Ci;F.setAttribute("position",new aa(N,A)),F.setAttribute("uv",new aa(O,M)),F.setAttribute("faceIndex",new aa(D,y)),e.push(F),l>co&&l--}return{lodPlanes:e,sizeLods:i,sigmas:s}}function rx(o,e,i){const s=new sr(o,e,i);return s.texture.mapping=Hc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Ec(o,e,i,s,l){o.viewport.set(e,i,s,l),o.scissor.set(e,i,s,l)}function NA(o,e,i){const s=new Float32Array($s),l=new et(0,1,0);return new xs({name:"SphericalGaussianBlur",defines:{n:$s,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:rm(),fragmentShader:`

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
		`,blending:gs,depthTest:!1,depthWrite:!1})}function ox(){return new xs({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rm(),fragmentShader:`

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
		`,blending:gs,depthTest:!1,depthWrite:!1})}function lx(){return new xs({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gs,depthTest:!1,depthWrite:!1})}function rm(){return`

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
	`}function LA(o){let e=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const g=d.mapping,p=g===fp||g===hp,x=g===go||g===_o;if(p||x){let m=e.get(d);const v=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==v)return i===null&&(i=new sx(o)),m=p?i.fromEquirectangular(d,m):i.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),m.texture;if(m!==void 0)return m.texture;{const S=d.image;return p&&S&&S.height>0||x&&S&&l(S)?(i===null&&(i=new sx(o)),m=p?i.fromEquirectangular(d):i.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),d.addEventListener("dispose",c),m.texture):null}}}return d}function l(d){let g=0;const p=6;for(let x=0;x<p;x++)d[x]!==void 0&&g++;return g===p}function c(d){const g=d.target;g.removeEventListener("dispose",c);const p=e.get(g);p!==void 0&&(e.delete(g),p.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function OA(o){const e={};function i(s){if(e[s]!==void 0)return e[s];let l;switch(s){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(s)}return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Al("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function PA(o,e,i,s){const l={},c=new WeakMap;function h(m){const v=m.target;v.index!==null&&e.remove(v.index);for(const T in v.attributes)e.remove(v.attributes[T]);v.removeEventListener("dispose",h),delete l[v.id];const S=c.get(v);S&&(e.remove(S),c.delete(v)),s.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,i.memory.geometries--}function d(m,v){return l[v.id]===!0||(v.addEventListener("dispose",h),l[v.id]=!0,i.memory.geometries++),v}function g(m){const v=m.attributes;for(const S in v)e.update(v[S],o.ARRAY_BUFFER)}function p(m){const v=[],S=m.index,T=m.attributes.position;let A=0;if(S!==null){const N=S.array;A=S.version;for(let O=0,D=N.length;O<D;O+=3){const F=N[O+0],z=N[O+1],P=N[O+2];v.push(F,z,z,P,P,F)}}else if(T!==void 0){const N=T.array;A=T.version;for(let O=0,D=N.length/3-1;O<D;O+=3){const F=O+0,z=O+1,P=O+2;v.push(F,z,z,P,P,F)}}else return;const M=new(Yx(v)?$x:Jx)(v,1);M.version=A;const y=c.get(m);y&&e.remove(y),c.set(m,M)}function x(m){const v=c.get(m);if(v){const S=m.index;S!==null&&v.version<S.version&&p(m)}else p(m);return c.get(m)}return{get:d,update:g,getWireframeAttribute:x}}function zA(o,e,i){let s;function l(v){s=v}let c,h;function d(v){c=v.type,h=v.bytesPerElement}function g(v,S){o.drawElements(s,S,c,v*h),i.update(S,s,1)}function p(v,S,T){T!==0&&(o.drawElementsInstanced(s,S,c,v*h,T),i.update(S,s,T))}function x(v,S,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,S,0,c,v,0,T);let M=0;for(let y=0;y<T;y++)M+=S[y];i.update(M,s,1)}function m(v,S,T,A){if(T===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let y=0;y<v.length;y++)p(v[y]/h,S[y],A[y]);else{M.multiDrawElementsInstancedWEBGL(s,S,0,c,v,0,A,0,T);let y=0;for(let N=0;N<T;N++)y+=S[N]*A[N];i.update(y,s,1)}}this.setMode=l,this.setIndex=d,this.render=g,this.renderInstances=p,this.renderMultiDraw=x,this.renderMultiDrawInstances=m}function IA(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(c/3);break;case o.LINES:i.lines+=d*(c/2);break;case o.LINE_STRIP:i.lines+=d*(c-1);break;case o.LINE_LOOP:i.lines+=d*c;break;case o.POINTS:i.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function BA(o,e,i){const s=new WeakMap,l=new ln;function c(h,d,g){const p=h.morphTargetInfluences,x=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,m=x!==void 0?x.length:0;let v=s.get(d);if(v===void 0||v.count!==m){let w=function(){P.dispose(),s.delete(d),d.removeEventListener("dispose",w)};v!==void 0&&v.texture.dispose();const S=d.morphAttributes.position!==void 0,T=d.morphAttributes.normal!==void 0,A=d.morphAttributes.color!==void 0,M=d.morphAttributes.position||[],y=d.morphAttributes.normal||[],N=d.morphAttributes.color||[];let O=0;S===!0&&(O=1),T===!0&&(O=2),A===!0&&(O=3);let D=d.attributes.position.count*O,F=1;D>e.maxTextureSize&&(F=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const z=new Float32Array(D*F*4*m),P=new Wx(z,D,F,m);P.type=Da,P.needsUpdate=!0;const G=O*4;for(let C=0;C<m;C++){const V=M[C],J=y[C],rt=N[C],ct=D*F*4*C;for(let ft=0;ft<V.count;ft++){const k=ft*G;S===!0&&(l.fromBufferAttribute(V,ft),z[ct+k+0]=l.x,z[ct+k+1]=l.y,z[ct+k+2]=l.z,z[ct+k+3]=0),T===!0&&(l.fromBufferAttribute(J,ft),z[ct+k+4]=l.x,z[ct+k+5]=l.y,z[ct+k+6]=l.z,z[ct+k+7]=0),A===!0&&(l.fromBufferAttribute(rt,ft),z[ct+k+8]=l.x,z[ct+k+9]=l.y,z[ct+k+10]=l.z,z[ct+k+11]=rt.itemSize===4?l.w:1)}}v={count:m,texture:P,size:new fe(D,F)},s.set(d,v),d.addEventListener("dispose",w)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)g.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let S=0;for(let A=0;A<p.length;A++)S+=p[A];const T=d.morphTargetsRelative?1:1-S;g.getUniforms().setValue(o,"morphTargetBaseInfluence",T),g.getUniforms().setValue(o,"morphTargetInfluences",p)}g.getUniforms().setValue(o,"morphTargetsTexture",v.texture,i),g.getUniforms().setValue(o,"morphTargetsTextureSize",v.size)}return{update:c}}function FA(o,e,i,s){let l=new WeakMap;function c(g){const p=s.render.frame,x=g.geometry,m=e.get(g,x);if(l.get(m)!==p&&(e.update(m),l.set(m,p)),g.isInstancedMesh&&(g.hasEventListener("dispose",d)===!1&&g.addEventListener("dispose",d),l.get(g)!==p&&(i.update(g.instanceMatrix,o.ARRAY_BUFFER),g.instanceColor!==null&&i.update(g.instanceColor,o.ARRAY_BUFFER),l.set(g,p))),g.isSkinnedMesh){const v=g.skeleton;l.get(v)!==p&&(v.update(),l.set(v,p))}return m}function h(){l=new WeakMap}function d(g){const p=g.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:h}}const uy=new ii,ux=new ay(1,1),cy=new Wx,fy=new lT,hy=new ny,cx=[],fx=[],hx=new Float32Array(16),dx=new Float32Array(9),px=new Float32Array(4);function Mo(o,e,i){const s=o[0];if(s<=0||s>0)return o;const l=e*i;let c=cx[l];if(c===void 0&&(c=new Float32Array(l),cx[l]=c),e!==0){s.toArray(c,0);for(let h=1,d=0;h!==e;++h)d+=i,o[h].toArray(c,d)}return c}function Sn(o,e){if(o.length!==e.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==e[i])return!1;return!0}function Mn(o,e){for(let i=0,s=e.length;i<s;i++)o[i]=e[i]}function Vc(o,e){let i=fx[e];i===void 0&&(i=new Int32Array(e),fx[e]=i);for(let s=0;s!==e;++s)i[s]=o.allocateTextureUnit();return i}function HA(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function GA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Sn(i,e))return;o.uniform2fv(this.addr,e),Mn(i,e)}}function VA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(Sn(i,e))return;o.uniform3fv(this.addr,e),Mn(i,e)}}function XA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Sn(i,e))return;o.uniform4fv(this.addr,e),Mn(i,e)}}function kA(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(Sn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),Mn(i,e)}else{if(Sn(i,s))return;px.set(s),o.uniformMatrix2fv(this.addr,!1,px),Mn(i,s)}}function jA(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(Sn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),Mn(i,e)}else{if(Sn(i,s))return;dx.set(s),o.uniformMatrix3fv(this.addr,!1,dx),Mn(i,s)}}function qA(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(Sn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),Mn(i,e)}else{if(Sn(i,s))return;hx.set(s),o.uniformMatrix4fv(this.addr,!1,hx),Mn(i,s)}}function YA(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function WA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Sn(i,e))return;o.uniform2iv(this.addr,e),Mn(i,e)}}function ZA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Sn(i,e))return;o.uniform3iv(this.addr,e),Mn(i,e)}}function KA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Sn(i,e))return;o.uniform4iv(this.addr,e),Mn(i,e)}}function QA(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function JA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Sn(i,e))return;o.uniform2uiv(this.addr,e),Mn(i,e)}}function $A(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Sn(i,e))return;o.uniform3uiv(this.addr,e),Mn(i,e)}}function tR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Sn(i,e))return;o.uniform4uiv(this.addr,e),Mn(i,e)}}function eR(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let c;this.type===o.SAMPLER_2D_SHADOW?(ux.compareFunction=qx,c=ux):c=uy,i.setTexture2D(e||c,l)}function nR(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||fy,l)}function iR(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||hy,l)}function aR(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||cy,l)}function sR(o){switch(o){case 5126:return HA;case 35664:return GA;case 35665:return VA;case 35666:return XA;case 35674:return kA;case 35675:return jA;case 35676:return qA;case 5124:case 35670:return YA;case 35667:case 35671:return WA;case 35668:case 35672:return ZA;case 35669:case 35673:return KA;case 5125:return QA;case 36294:return JA;case 36295:return $A;case 36296:return tR;case 35678:case 36198:case 36298:case 36306:case 35682:return eR;case 35679:case 36299:case 36307:return nR;case 35680:case 36300:case 36308:case 36293:return iR;case 36289:case 36303:case 36311:case 36292:return aR}}function rR(o,e){o.uniform1fv(this.addr,e)}function oR(o,e){const i=Mo(e,this.size,2);o.uniform2fv(this.addr,i)}function lR(o,e){const i=Mo(e,this.size,3);o.uniform3fv(this.addr,i)}function uR(o,e){const i=Mo(e,this.size,4);o.uniform4fv(this.addr,i)}function cR(o,e){const i=Mo(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function fR(o,e){const i=Mo(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function hR(o,e){const i=Mo(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function dR(o,e){o.uniform1iv(this.addr,e)}function pR(o,e){o.uniform2iv(this.addr,e)}function mR(o,e){o.uniform3iv(this.addr,e)}function gR(o,e){o.uniform4iv(this.addr,e)}function _R(o,e){o.uniform1uiv(this.addr,e)}function vR(o,e){o.uniform2uiv(this.addr,e)}function xR(o,e){o.uniform3uiv(this.addr,e)}function yR(o,e){o.uniform4uiv(this.addr,e)}function SR(o,e,i){const s=this.cache,l=e.length,c=Vc(i,l);Sn(s,c)||(o.uniform1iv(this.addr,c),Mn(s,c));for(let h=0;h!==l;++h)i.setTexture2D(e[h]||uy,c[h])}function MR(o,e,i){const s=this.cache,l=e.length,c=Vc(i,l);Sn(s,c)||(o.uniform1iv(this.addr,c),Mn(s,c));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||fy,c[h])}function ER(o,e,i){const s=this.cache,l=e.length,c=Vc(i,l);Sn(s,c)||(o.uniform1iv(this.addr,c),Mn(s,c));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||hy,c[h])}function TR(o,e,i){const s=this.cache,l=e.length,c=Vc(i,l);Sn(s,c)||(o.uniform1iv(this.addr,c),Mn(s,c));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||cy,c[h])}function bR(o){switch(o){case 5126:return rR;case 35664:return oR;case 35665:return lR;case 35666:return uR;case 35674:return cR;case 35675:return fR;case 35676:return hR;case 5124:case 35670:return dR;case 35667:case 35671:return pR;case 35668:case 35672:return mR;case 35669:case 35673:return gR;case 5125:return _R;case 36294:return vR;case 36295:return xR;case 36296:return yR;case 35678:case 36198:case 36298:case 36306:case 35682:return SR;case 35679:case 36299:case 36307:return MR;case 35680:case 36300:case 36308:case 36293:return ER;case 36289:case 36303:case 36311:case 36292:return TR}}class AR{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=sR(i.type)}}class RR{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=bR(i.type)}}class CR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(e,i[d.id],s)}}}const tp=/(\w+)(\])?(\[|\.)?/g;function mx(o,e){o.seq.push(e),o.map[e.id]=e}function wR(o,e,i){const s=o.name,l=s.length;for(tp.lastIndex=0;;){const c=tp.exec(s),h=tp.lastIndex;let d=c[1];const g=c[2]==="]",p=c[3];if(g&&(d=d|0),p===void 0||p==="["&&h+2===l){mx(i,p===void 0?new AR(d,o,e):new RR(d,o,e));break}else{let m=i.map[d];m===void 0&&(m=new CR(d),mx(i,m)),i=m}}}class Uc{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const c=e.getActiveUniform(i,l),h=e.getUniformLocation(i,c.name);wR(c,h,this)}}setValue(e,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],g=s[d.id];g.needsUpdate!==!1&&d.setValue(e,g.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,c=e.length;l!==c;++l){const h=e[l];h.id in i&&s.push(h)}return s}}function gx(o,e,i){const s=o.createShader(e);return o.shaderSource(s,i),o.compileShader(s),s}const DR=37297;let UR=0;function NR(o,e){const i=o.split(`
`),s=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let h=l;h<c;h++){const d=h+1;s.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const _x=new pe;function LR(o){Ne._getMatrix(_x,Ne.workingColorSpace,o);const e=`mat3( ${_x.elements.map(i=>i.toFixed(4))} )`;switch(Ne.getTransfer(o)){case Lc:return[e,"LinearTransferOETF"];case ke:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function vx(o,e,i){const s=o.getShaderParameter(e,o.COMPILE_STATUS),c=(o.getShaderInfoLog(e)||"").trim();if(s&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+NR(o.getShaderSource(e),d)}else return c}function OR(o,e){const i=LR(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function PR(o,e){let i;switch(e){case PE:i="Linear";break;case zE:i="Reinhard";break;case IE:i="Cineon";break;case BE:i="ACESFilmic";break;case HE:i="AgX";break;case GE:i="Neutral";break;case FE:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Tc=new et;function zR(){Ne.getLuminanceCoefficients(Tc);const o=Tc.x.toFixed(4),e=Tc.y.toFixed(4),i=Tc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function IR(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Sl).join(`
`)}function BR(o){const e=[];for(const i in o){const s=o[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function FR(o,e){const i={},s=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=o.getActiveAttrib(e,l),h=c.name;let d=1;c.type===o.FLOAT_MAT2&&(d=2),c.type===o.FLOAT_MAT3&&(d=3),c.type===o.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:o.getAttribLocation(e,h),locationSize:d}}return i}function Sl(o){return o!==""}function xx(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function yx(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const HR=/^[ \t]*#include +<([\w\d./]+)>/gm;function kp(o){return o.replace(HR,VR)}const GR=new Map;function VR(o,e){let i=me[e];if(i===void 0){const s=GR.get(e);if(s!==void 0)i=me[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return kp(i)}const XR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sx(o){return o.replace(XR,kR)}function kR(o,e,i,s){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Mx(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function jR(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Lx?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===Ox?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Ca&&(e="SHADOWMAP_TYPE_VSM"),e}function qR(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case go:case _o:e="ENVMAP_TYPE_CUBE";break;case Hc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function YR(o){let e="ENVMAP_MODE_REFLECTION";return o.envMap&&o.envMapMode===_o&&(e="ENVMAP_MODE_REFRACTION"),e}function WR(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Px:e="ENVMAP_BLENDING_MULTIPLY";break;case LE:e="ENVMAP_BLENDING_MIX";break;case OE:e="ENVMAP_BLENDING_ADD";break}return e}function ZR(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function KR(o,e,i,s){const l=o.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const g=jR(i),p=qR(i),x=YR(i),m=WR(i),v=ZR(i),S=IR(i),T=BR(c),A=l.createProgram();let M,y,N=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Sl).join(`
`),M.length>0&&(M+=`
`),y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Sl).join(`
`),y.length>0&&(y+=`
`)):(M=[Mx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+x:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+g:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Sl).join(`
`),y=[Mx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+x:"",i.envMap?"#define "+m:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+g:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==_s?"#define TONE_MAPPING":"",i.toneMapping!==_s?me.tonemapping_pars_fragment:"",i.toneMapping!==_s?PR("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",me.colorspace_pars_fragment,OR("linearToOutputTexel",i.outputColorSpace),zR(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Sl).join(`
`)),h=kp(h),h=xx(h,i),h=yx(h,i),d=kp(d),d=xx(d,i),d=yx(d,i),h=Sx(h),d=Sx(d),i.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,M=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,y=["#define varying in",i.glslVersion===wv?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===wv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const O=N+M+h,D=N+y+d,F=gx(l,l.VERTEX_SHADER,O),z=gx(l,l.FRAGMENT_SHADER,D);l.attachShader(A,F),l.attachShader(A,z),i.index0AttributeName!==void 0?l.bindAttribLocation(A,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(A,0,"position"),l.linkProgram(A);function P(V){if(o.debug.checkShaderErrors){const J=l.getProgramInfoLog(A)||"",rt=l.getShaderInfoLog(F)||"",ct=l.getShaderInfoLog(z)||"",ft=J.trim(),k=rt.trim(),ut=ct.trim();let K=!0,vt=!0;if(l.getProgramParameter(A,l.LINK_STATUS)===!1)if(K=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,A,F,z);else{const yt=vx(l,F,"vertex"),Gt=vx(l,z,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(A,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+ft+`
`+yt+`
`+Gt)}else ft!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ft):(k===""||ut==="")&&(vt=!1);vt&&(V.diagnostics={runnable:K,programLog:ft,vertexShader:{log:k,prefix:M},fragmentShader:{log:ut,prefix:y}})}l.deleteShader(F),l.deleteShader(z),G=new Uc(l,A),w=FR(l,A)}let G;this.getUniforms=function(){return G===void 0&&P(this),G};let w;this.getAttributes=function(){return w===void 0&&P(this),w};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(A,DR)),C},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(A),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=UR++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=F,this.fragmentShader=z,this}let QR=0;class JR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new $R(e),i.set(e,s)),s}}class $R{constructor(e){this.id=QR++,this.code=e,this.usedTimes=0}}function tC(o,e,i,s,l,c,h){const d=new Zx,g=new JR,p=new Set,x=[],m=l.logarithmicDepthBuffer,v=l.vertexTextures;let S=l.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(w){return p.add(w),w===0?"uv":`uv${w}`}function M(w,C,V,J,rt){const ct=J.fog,ft=rt.geometry,k=w.isMeshStandardMaterial?J.environment:null,ut=(w.isMeshStandardMaterial?i:e).get(w.envMap||k),K=ut&&ut.mapping===Hc?ut.image.height:null,vt=T[w.type];w.precision!==null&&(S=l.getMaxPrecision(w.precision),S!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",S,"instead."));const yt=ft.morphAttributes.position||ft.morphAttributes.normal||ft.morphAttributes.color,Gt=yt!==void 0?yt.length:0;let re=0;ft.morphAttributes.position!==void 0&&(re=1),ft.morphAttributes.normal!==void 0&&(re=2),ft.morphAttributes.color!==void 0&&(re=3);let Ae,B,ht,tt;if(vt){const Ee=ea[vt];Ae=Ee.vertexShader,B=Ee.fragmentShader}else Ae=w.vertexShader,B=w.fragmentShader,g.update(w),ht=g.getVertexShaderID(w),tt=g.getFragmentShaderID(w);const st=o.getRenderTarget(),Mt=o.state.buffers.depth.getReversed(),Nt=rt.isInstancedMesh===!0,Rt=rt.isBatchedMesh===!0,Et=!!w.map,qt=!!w.matcap,I=!!ut,Ge=!!w.aoMap,se=!!w.lightMap,Qt=!!w.bumpMap,Lt=!!w.normalMap,ie=!!w.displacementMap,Ft=!!w.emissiveMap,oe=!!w.metalnessMap,qe=!!w.roughnessMap,Ze=w.anisotropy>0,U=w.clearcoat>0,b=w.dispersion>0,it=w.iridescence>0,mt=w.sheen>0,xt=w.transmission>0,dt=Ze&&!!w.anisotropyMap,Xt=U&&!!w.clearcoatMap,Ct=U&&!!w.clearcoatNormalMap,Wt=U&&!!w.clearcoatRoughnessMap,Kt=it&&!!w.iridescenceMap,bt=it&&!!w.iridescenceThicknessMap,Ot=mt&&!!w.sheenColorMap,ne=mt&&!!w.sheenRoughnessMap,Zt=!!w.specularMap,Pt=!!w.specularColorMap,ce=!!w.specularIntensityMap,X=xt&&!!w.transmissionMap,At=xt&&!!w.thicknessMap,Dt=!!w.gradientMap,Vt=!!w.alphaMap,St=w.alphaTest>0,_t=!!w.alphaHash,Yt=!!w.extensions;let ue=_s;w.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(ue=o.toneMapping);const Ve={shaderID:vt,shaderType:w.type,shaderName:w.name,vertexShader:Ae,fragmentShader:B,defines:w.defines,customVertexShaderID:ht,customFragmentShaderID:tt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:S,batching:Rt,batchingColor:Rt&&rt._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&rt.instanceColor!==null,instancingMorph:Nt&&rt.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:st===null?o.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:vo,alphaToCoverage:!!w.alphaToCoverage,map:Et,matcap:qt,envMap:I,envMapMode:I&&ut.mapping,envMapCubeUVHeight:K,aoMap:Ge,lightMap:se,bumpMap:Qt,normalMap:Lt,displacementMap:v&&ie,emissiveMap:Ft,normalMapObjectSpace:Lt&&w.normalMapType===jE,normalMapTangentSpace:Lt&&w.normalMapType===jx,metalnessMap:oe,roughnessMap:qe,anisotropy:Ze,anisotropyMap:dt,clearcoat:U,clearcoatMap:Xt,clearcoatNormalMap:Ct,clearcoatRoughnessMap:Wt,dispersion:b,iridescence:it,iridescenceMap:Kt,iridescenceThicknessMap:bt,sheen:mt,sheenColorMap:Ot,sheenRoughnessMap:ne,specularMap:Zt,specularColorMap:Pt,specularIntensityMap:ce,transmission:xt,transmissionMap:X,thicknessMap:At,gradientMap:Dt,opaque:w.transparent===!1&&w.blending===ho&&w.alphaToCoverage===!1,alphaMap:Vt,alphaTest:St,alphaHash:_t,combine:w.combine,mapUv:Et&&A(w.map.channel),aoMapUv:Ge&&A(w.aoMap.channel),lightMapUv:se&&A(w.lightMap.channel),bumpMapUv:Qt&&A(w.bumpMap.channel),normalMapUv:Lt&&A(w.normalMap.channel),displacementMapUv:ie&&A(w.displacementMap.channel),emissiveMapUv:Ft&&A(w.emissiveMap.channel),metalnessMapUv:oe&&A(w.metalnessMap.channel),roughnessMapUv:qe&&A(w.roughnessMap.channel),anisotropyMapUv:dt&&A(w.anisotropyMap.channel),clearcoatMapUv:Xt&&A(w.clearcoatMap.channel),clearcoatNormalMapUv:Ct&&A(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Wt&&A(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Kt&&A(w.iridescenceMap.channel),iridescenceThicknessMapUv:bt&&A(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ot&&A(w.sheenColorMap.channel),sheenRoughnessMapUv:ne&&A(w.sheenRoughnessMap.channel),specularMapUv:Zt&&A(w.specularMap.channel),specularColorMapUv:Pt&&A(w.specularColorMap.channel),specularIntensityMapUv:ce&&A(w.specularIntensityMap.channel),transmissionMapUv:X&&A(w.transmissionMap.channel),thicknessMapUv:At&&A(w.thicknessMap.channel),alphaMapUv:Vt&&A(w.alphaMap.channel),vertexTangents:!!ft.attributes.tangent&&(Lt||Ze),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!ft.attributes.color&&ft.attributes.color.itemSize===4,pointsUvs:rt.isPoints===!0&&!!ft.attributes.uv&&(Et||Vt),fog:!!ct,useFog:w.fog===!0,fogExp2:!!ct&&ct.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:Mt,skinning:rt.isSkinnedMesh===!0,morphTargets:ft.morphAttributes.position!==void 0,morphNormals:ft.morphAttributes.normal!==void 0,morphColors:ft.morphAttributes.color!==void 0,morphTargetsCount:Gt,morphTextureStride:re,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:w.dithering,shadowMapEnabled:o.shadowMap.enabled&&V.length>0,shadowMapType:o.shadowMap.type,toneMapping:ue,decodeVideoTexture:Et&&w.map.isVideoTexture===!0&&Ne.getTransfer(w.map.colorSpace)===ke,decodeVideoTextureEmissive:Ft&&w.emissiveMap.isVideoTexture===!0&&Ne.getTransfer(w.emissiveMap.colorSpace)===ke,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===wa,flipSided:w.side===ni,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Yt&&w.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Yt&&w.extensions.multiDraw===!0||Rt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Ve.vertexUv1s=p.has(1),Ve.vertexUv2s=p.has(2),Ve.vertexUv3s=p.has(3),p.clear(),Ve}function y(w){const C=[];if(w.shaderID?C.push(w.shaderID):(C.push(w.customVertexShaderID),C.push(w.customFragmentShaderID)),w.defines!==void 0)for(const V in w.defines)C.push(V),C.push(w.defines[V]);return w.isRawShaderMaterial===!1&&(N(C,w),O(C,w),C.push(o.outputColorSpace)),C.push(w.customProgramCacheKey),C.join()}function N(w,C){w.push(C.precision),w.push(C.outputColorSpace),w.push(C.envMapMode),w.push(C.envMapCubeUVHeight),w.push(C.mapUv),w.push(C.alphaMapUv),w.push(C.lightMapUv),w.push(C.aoMapUv),w.push(C.bumpMapUv),w.push(C.normalMapUv),w.push(C.displacementMapUv),w.push(C.emissiveMapUv),w.push(C.metalnessMapUv),w.push(C.roughnessMapUv),w.push(C.anisotropyMapUv),w.push(C.clearcoatMapUv),w.push(C.clearcoatNormalMapUv),w.push(C.clearcoatRoughnessMapUv),w.push(C.iridescenceMapUv),w.push(C.iridescenceThicknessMapUv),w.push(C.sheenColorMapUv),w.push(C.sheenRoughnessMapUv),w.push(C.specularMapUv),w.push(C.specularColorMapUv),w.push(C.specularIntensityMapUv),w.push(C.transmissionMapUv),w.push(C.thicknessMapUv),w.push(C.combine),w.push(C.fogExp2),w.push(C.sizeAttenuation),w.push(C.morphTargetsCount),w.push(C.morphAttributeCount),w.push(C.numDirLights),w.push(C.numPointLights),w.push(C.numSpotLights),w.push(C.numSpotLightMaps),w.push(C.numHemiLights),w.push(C.numRectAreaLights),w.push(C.numDirLightShadows),w.push(C.numPointLightShadows),w.push(C.numSpotLightShadows),w.push(C.numSpotLightShadowsWithMaps),w.push(C.numLightProbes),w.push(C.shadowMapType),w.push(C.toneMapping),w.push(C.numClippingPlanes),w.push(C.numClipIntersection),w.push(C.depthPacking)}function O(w,C){d.disableAll(),C.supportsVertexTextures&&d.enable(0),C.instancing&&d.enable(1),C.instancingColor&&d.enable(2),C.instancingMorph&&d.enable(3),C.matcap&&d.enable(4),C.envMap&&d.enable(5),C.normalMapObjectSpace&&d.enable(6),C.normalMapTangentSpace&&d.enable(7),C.clearcoat&&d.enable(8),C.iridescence&&d.enable(9),C.alphaTest&&d.enable(10),C.vertexColors&&d.enable(11),C.vertexAlphas&&d.enable(12),C.vertexUv1s&&d.enable(13),C.vertexUv2s&&d.enable(14),C.vertexUv3s&&d.enable(15),C.vertexTangents&&d.enable(16),C.anisotropy&&d.enable(17),C.alphaHash&&d.enable(18),C.batching&&d.enable(19),C.dispersion&&d.enable(20),C.batchingColor&&d.enable(21),C.gradientMap&&d.enable(22),w.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reversedDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),w.push(d.mask)}function D(w){const C=T[w.type];let V;if(C){const J=ea[C];V=ST.clone(J.uniforms)}else V=w.uniforms;return V}function F(w,C){let V;for(let J=0,rt=x.length;J<rt;J++){const ct=x[J];if(ct.cacheKey===C){V=ct,++V.usedTimes;break}}return V===void 0&&(V=new KR(o,C,w,c),x.push(V)),V}function z(w){if(--w.usedTimes===0){const C=x.indexOf(w);x[C]=x[x.length-1],x.pop(),w.destroy()}}function P(w){g.remove(w)}function G(){g.dispose()}return{getParameters:M,getProgramCacheKey:y,getUniforms:D,acquireProgram:F,releaseProgram:z,releaseShaderCache:P,programs:x,dispose:G}}function eC(){let o=new WeakMap;function e(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function s(h){o.delete(h)}function l(h,d,g){o.get(h)[d]=g}function c(){o=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:c}}function nC(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function Ex(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function Tx(){const o=[];let e=0;const i=[],s=[],l=[];function c(){e=0,i.length=0,s.length=0,l.length=0}function h(m,v,S,T,A,M){let y=o[e];return y===void 0?(y={id:m.id,object:m,geometry:v,material:S,groupOrder:T,renderOrder:m.renderOrder,z:A,group:M},o[e]=y):(y.id=m.id,y.object=m,y.geometry=v,y.material=S,y.groupOrder=T,y.renderOrder=m.renderOrder,y.z=A,y.group=M),e++,y}function d(m,v,S,T,A,M){const y=h(m,v,S,T,A,M);S.transmission>0?s.push(y):S.transparent===!0?l.push(y):i.push(y)}function g(m,v,S,T,A,M){const y=h(m,v,S,T,A,M);S.transmission>0?s.unshift(y):S.transparent===!0?l.unshift(y):i.unshift(y)}function p(m,v){i.length>1&&i.sort(m||nC),s.length>1&&s.sort(v||Ex),l.length>1&&l.sort(v||Ex)}function x(){for(let m=e,v=o.length;m<v;m++){const S=o[m];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:d,unshift:g,finish:x,sort:p}}function iC(){let o=new WeakMap;function e(s,l){const c=o.get(s);let h;return c===void 0?(h=new Tx,o.set(s,[h])):l>=c.length?(h=new Tx,c.push(h)):h=c[l],h}function i(){o=new WeakMap}return{get:e,dispose:i}}function aC(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new et,color:new xe};break;case"SpotLight":i={position:new et,direction:new et,color:new xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new et,color:new xe,distance:0,decay:0};break;case"HemisphereLight":i={direction:new et,skyColor:new xe,groundColor:new xe};break;case"RectAreaLight":i={color:new xe,position:new et,halfWidth:new et,halfHeight:new et};break}return o[e.id]=i,i}}}function sC(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let rC=0;function oC(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function lC(o){const e=new aC,i=sC(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new et);const l=new et,c=new an,h=new an;function d(p){let x=0,m=0,v=0;for(let w=0;w<9;w++)s.probe[w].set(0,0,0);let S=0,T=0,A=0,M=0,y=0,N=0,O=0,D=0,F=0,z=0,P=0;p.sort(oC);for(let w=0,C=p.length;w<C;w++){const V=p[w],J=V.color,rt=V.intensity,ct=V.distance,ft=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)x+=J.r*rt,m+=J.g*rt,v+=J.b*rt;else if(V.isLightProbe){for(let k=0;k<9;k++)s.probe[k].addScaledVector(V.sh.coefficients[k],rt);P++}else if(V.isDirectionalLight){const k=e.get(V);if(k.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const ut=V.shadow,K=i.get(V);K.shadowIntensity=ut.intensity,K.shadowBias=ut.bias,K.shadowNormalBias=ut.normalBias,K.shadowRadius=ut.radius,K.shadowMapSize=ut.mapSize,s.directionalShadow[S]=K,s.directionalShadowMap[S]=ft,s.directionalShadowMatrix[S]=V.shadow.matrix,N++}s.directional[S]=k,S++}else if(V.isSpotLight){const k=e.get(V);k.position.setFromMatrixPosition(V.matrixWorld),k.color.copy(J).multiplyScalar(rt),k.distance=ct,k.coneCos=Math.cos(V.angle),k.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),k.decay=V.decay,s.spot[A]=k;const ut=V.shadow;if(V.map&&(s.spotLightMap[F]=V.map,F++,ut.updateMatrices(V),V.castShadow&&z++),s.spotLightMatrix[A]=ut.matrix,V.castShadow){const K=i.get(V);K.shadowIntensity=ut.intensity,K.shadowBias=ut.bias,K.shadowNormalBias=ut.normalBias,K.shadowRadius=ut.radius,K.shadowMapSize=ut.mapSize,s.spotShadow[A]=K,s.spotShadowMap[A]=ft,D++}A++}else if(V.isRectAreaLight){const k=e.get(V);k.color.copy(J).multiplyScalar(rt),k.halfWidth.set(V.width*.5,0,0),k.halfHeight.set(0,V.height*.5,0),s.rectArea[M]=k,M++}else if(V.isPointLight){const k=e.get(V);if(k.color.copy(V.color).multiplyScalar(V.intensity),k.distance=V.distance,k.decay=V.decay,V.castShadow){const ut=V.shadow,K=i.get(V);K.shadowIntensity=ut.intensity,K.shadowBias=ut.bias,K.shadowNormalBias=ut.normalBias,K.shadowRadius=ut.radius,K.shadowMapSize=ut.mapSize,K.shadowCameraNear=ut.camera.near,K.shadowCameraFar=ut.camera.far,s.pointShadow[T]=K,s.pointShadowMap[T]=ft,s.pointShadowMatrix[T]=V.shadow.matrix,O++}s.point[T]=k,T++}else if(V.isHemisphereLight){const k=e.get(V);k.skyColor.copy(V.color).multiplyScalar(rt),k.groundColor.copy(V.groundColor).multiplyScalar(rt),s.hemi[y]=k,y++}}M>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=It.LTC_FLOAT_1,s.rectAreaLTC2=It.LTC_FLOAT_2):(s.rectAreaLTC1=It.LTC_HALF_1,s.rectAreaLTC2=It.LTC_HALF_2)),s.ambient[0]=x,s.ambient[1]=m,s.ambient[2]=v;const G=s.hash;(G.directionalLength!==S||G.pointLength!==T||G.spotLength!==A||G.rectAreaLength!==M||G.hemiLength!==y||G.numDirectionalShadows!==N||G.numPointShadows!==O||G.numSpotShadows!==D||G.numSpotMaps!==F||G.numLightProbes!==P)&&(s.directional.length=S,s.spot.length=A,s.rectArea.length=M,s.point.length=T,s.hemi.length=y,s.directionalShadow.length=N,s.directionalShadowMap.length=N,s.pointShadow.length=O,s.pointShadowMap.length=O,s.spotShadow.length=D,s.spotShadowMap.length=D,s.directionalShadowMatrix.length=N,s.pointShadowMatrix.length=O,s.spotLightMatrix.length=D+F-z,s.spotLightMap.length=F,s.numSpotLightShadowsWithMaps=z,s.numLightProbes=P,G.directionalLength=S,G.pointLength=T,G.spotLength=A,G.rectAreaLength=M,G.hemiLength=y,G.numDirectionalShadows=N,G.numPointShadows=O,G.numSpotShadows=D,G.numSpotMaps=F,G.numLightProbes=P,s.version=rC++)}function g(p,x){let m=0,v=0,S=0,T=0,A=0;const M=x.matrixWorldInverse;for(let y=0,N=p.length;y<N;y++){const O=p[y];if(O.isDirectionalLight){const D=s.directional[m];D.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(M),m++}else if(O.isSpotLight){const D=s.spot[S];D.position.setFromMatrixPosition(O.matrixWorld),D.position.applyMatrix4(M),D.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(M),S++}else if(O.isRectAreaLight){const D=s.rectArea[T];D.position.setFromMatrixPosition(O.matrixWorld),D.position.applyMatrix4(M),h.identity(),c.copy(O.matrixWorld),c.premultiply(M),h.extractRotation(c),D.halfWidth.set(O.width*.5,0,0),D.halfHeight.set(0,O.height*.5,0),D.halfWidth.applyMatrix4(h),D.halfHeight.applyMatrix4(h),T++}else if(O.isPointLight){const D=s.point[v];D.position.setFromMatrixPosition(O.matrixWorld),D.position.applyMatrix4(M),v++}else if(O.isHemisphereLight){const D=s.hemi[A];D.direction.setFromMatrixPosition(O.matrixWorld),D.direction.transformDirection(M),A++}}}return{setup:d,setupView:g,state:s}}function bx(o){const e=new lC(o),i=[],s=[];function l(x){p.camera=x,i.length=0,s.length=0}function c(x){i.push(x)}function h(x){s.push(x)}function d(){e.setup(i)}function g(x){e.setupView(i,x)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:g,pushLight:c,pushShadow:h}}function uC(o){let e=new WeakMap;function i(l,c=0){const h=e.get(l);let d;return h===void 0?(d=new bx(o),e.set(l,[d])):c>=h.length?(d=new bx(o),h.push(d)):d=h[c],d}function s(){e=new WeakMap}return{get:i,dispose:s}}const cC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fC=`uniform sampler2D shadow_pass;
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
}`;function hC(o,e,i){let s=new im;const l=new fe,c=new fe,h=new ln,d=new LT({depthPacking:kE}),g=new OT,p={},x=i.maxTextureSize,m={[vs]:ni,[ni]:vs,[wa]:wa},v=new xs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new fe},radius:{value:4}},vertexShader:cC,fragmentShader:fC}),S=v.clone();S.defines.HORIZONTAL_PASS=1;const T=new Ci;T.setAttribute("position",new aa(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Hi(T,v),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Lx;let y=this.type;this.render=function(z,P,G){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||z.length===0)return;const w=o.getRenderTarget(),C=o.getActiveCubeFace(),V=o.getActiveMipmapLevel(),J=o.state;J.setBlending(gs),J.buffers.depth.getReversed()===!0?J.buffers.color.setClear(0,0,0,0):J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const rt=y!==Ca&&this.type===Ca,ct=y===Ca&&this.type!==Ca;for(let ft=0,k=z.length;ft<k;ft++){const ut=z[ft],K=ut.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",ut,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;l.copy(K.mapSize);const vt=K.getFrameExtents();if(l.multiply(vt),c.copy(K.mapSize),(l.x>x||l.y>x)&&(l.x>x&&(c.x=Math.floor(x/vt.x),l.x=c.x*vt.x,K.mapSize.x=c.x),l.y>x&&(c.y=Math.floor(x/vt.y),l.y=c.y*vt.y,K.mapSize.y=c.y)),K.map===null||rt===!0||ct===!0){const Gt=this.type!==Ca?{minFilter:Gi,magFilter:Gi}:{};K.map!==null&&K.map.dispose(),K.map=new sr(l.x,l.y,Gt),K.map.texture.name=ut.name+".shadowMap",K.camera.updateProjectionMatrix()}o.setRenderTarget(K.map),o.clear();const yt=K.getViewportCount();for(let Gt=0;Gt<yt;Gt++){const re=K.getViewport(Gt);h.set(c.x*re.x,c.y*re.y,c.x*re.z,c.y*re.w),J.viewport(h),K.updateMatrices(ut,Gt),s=K.getFrustum(),D(P,G,K.camera,ut,this.type)}K.isPointLightShadow!==!0&&this.type===Ca&&N(K,G),K.needsUpdate=!1}y=this.type,M.needsUpdate=!1,o.setRenderTarget(w,C,V)};function N(z,P){const G=e.update(A);v.defines.VSM_SAMPLES!==z.blurSamples&&(v.defines.VSM_SAMPLES=z.blurSamples,S.defines.VSM_SAMPLES=z.blurSamples,v.needsUpdate=!0,S.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new sr(l.x,l.y)),v.uniforms.shadow_pass.value=z.map.texture,v.uniforms.resolution.value=z.mapSize,v.uniforms.radius.value=z.radius,o.setRenderTarget(z.mapPass),o.clear(),o.renderBufferDirect(P,null,G,v,A,null),S.uniforms.shadow_pass.value=z.mapPass.texture,S.uniforms.resolution.value=z.mapSize,S.uniforms.radius.value=z.radius,o.setRenderTarget(z.map),o.clear(),o.renderBufferDirect(P,null,G,S,A,null)}function O(z,P,G,w){let C=null;const V=G.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(V!==void 0)C=V;else if(C=G.isPointLight===!0?g:d,o.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const J=C.uuid,rt=P.uuid;let ct=p[J];ct===void 0&&(ct={},p[J]=ct);let ft=ct[rt];ft===void 0&&(ft=C.clone(),ct[rt]=ft,P.addEventListener("dispose",F)),C=ft}if(C.visible=P.visible,C.wireframe=P.wireframe,w===Ca?C.side=P.shadowSide!==null?P.shadowSide:P.side:C.side=P.shadowSide!==null?P.shadowSide:m[P.side],C.alphaMap=P.alphaMap,C.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,C.map=P.map,C.clipShadows=P.clipShadows,C.clippingPlanes=P.clippingPlanes,C.clipIntersection=P.clipIntersection,C.displacementMap=P.displacementMap,C.displacementScale=P.displacementScale,C.displacementBias=P.displacementBias,C.wireframeLinewidth=P.wireframeLinewidth,C.linewidth=P.linewidth,G.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const J=o.properties.get(C);J.light=G}return C}function D(z,P,G,w,C){if(z.visible===!1)return;if(z.layers.test(P.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&C===Ca)&&(!z.frustumCulled||s.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,z.matrixWorld);const rt=e.update(z),ct=z.material;if(Array.isArray(ct)){const ft=rt.groups;for(let k=0,ut=ft.length;k<ut;k++){const K=ft[k],vt=ct[K.materialIndex];if(vt&&vt.visible){const yt=O(z,vt,w,C);z.onBeforeShadow(o,z,P,G,rt,yt,K),o.renderBufferDirect(G,null,rt,yt,z,K),z.onAfterShadow(o,z,P,G,rt,yt,K)}}}else if(ct.visible){const ft=O(z,ct,w,C);z.onBeforeShadow(o,z,P,G,rt,ft,null),o.renderBufferDirect(G,null,rt,ft,z,null),z.onAfterShadow(o,z,P,G,rt,ft,null)}}const J=z.children;for(let rt=0,ct=J.length;rt<ct;rt++)D(J[rt],P,G,w,C)}function F(z){z.target.removeEventListener("dispose",F);for(const G in p){const w=p[G],C=z.target.uuid;C in w&&(w[C].dispose(),delete w[C])}}}const dC={[ap]:sp,[rp]:up,[op]:cp,[mo]:lp,[sp]:ap,[up]:rp,[cp]:op,[lp]:mo};function pC(o,e){function i(){let X=!1;const At=new ln;let Dt=null;const Vt=new ln(0,0,0,0);return{setMask:function(St){Dt!==St&&!X&&(o.colorMask(St,St,St,St),Dt=St)},setLocked:function(St){X=St},setClear:function(St,_t,Yt,ue,Ve){Ve===!0&&(St*=ue,_t*=ue,Yt*=ue),At.set(St,_t,Yt,ue),Vt.equals(At)===!1&&(o.clearColor(St,_t,Yt,ue),Vt.copy(At))},reset:function(){X=!1,Dt=null,Vt.set(-1,0,0,0)}}}function s(){let X=!1,At=!1,Dt=null,Vt=null,St=null;return{setReversed:function(_t){if(At!==_t){const Yt=e.get("EXT_clip_control");_t?Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.ZERO_TO_ONE_EXT):Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.NEGATIVE_ONE_TO_ONE_EXT),At=_t;const ue=St;St=null,this.setClear(ue)}},getReversed:function(){return At},setTest:function(_t){_t?st(o.DEPTH_TEST):Mt(o.DEPTH_TEST)},setMask:function(_t){Dt!==_t&&!X&&(o.depthMask(_t),Dt=_t)},setFunc:function(_t){if(At&&(_t=dC[_t]),Vt!==_t){switch(_t){case ap:o.depthFunc(o.NEVER);break;case sp:o.depthFunc(o.ALWAYS);break;case rp:o.depthFunc(o.LESS);break;case mo:o.depthFunc(o.LEQUAL);break;case op:o.depthFunc(o.EQUAL);break;case lp:o.depthFunc(o.GEQUAL);break;case up:o.depthFunc(o.GREATER);break;case cp:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Vt=_t}},setLocked:function(_t){X=_t},setClear:function(_t){St!==_t&&(At&&(_t=1-_t),o.clearDepth(_t),St=_t)},reset:function(){X=!1,Dt=null,Vt=null,St=null,At=!1}}}function l(){let X=!1,At=null,Dt=null,Vt=null,St=null,_t=null,Yt=null,ue=null,Ve=null;return{setTest:function(Ee){X||(Ee?st(o.STENCIL_TEST):Mt(o.STENCIL_TEST))},setMask:function(Ee){At!==Ee&&!X&&(o.stencilMask(Ee),At=Ee)},setFunc:function(Ee,en,_n){(Dt!==Ee||Vt!==en||St!==_n)&&(o.stencilFunc(Ee,en,_n),Dt=Ee,Vt=en,St=_n)},setOp:function(Ee,en,_n){(_t!==Ee||Yt!==en||ue!==_n)&&(o.stencilOp(Ee,en,_n),_t=Ee,Yt=en,ue=_n)},setLocked:function(Ee){X=Ee},setClear:function(Ee){Ve!==Ee&&(o.clearStencil(Ee),Ve=Ee)},reset:function(){X=!1,At=null,Dt=null,Vt=null,St=null,_t=null,Yt=null,ue=null,Ve=null}}}const c=new i,h=new s,d=new l,g=new WeakMap,p=new WeakMap;let x={},m={},v=new WeakMap,S=[],T=null,A=!1,M=null,y=null,N=null,O=null,D=null,F=null,z=null,P=new xe(0,0,0),G=0,w=!1,C=null,V=null,J=null,rt=null,ct=null;const ft=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,ut=0;const K=o.getParameter(o.VERSION);K.indexOf("WebGL")!==-1?(ut=parseFloat(/^WebGL (\d)/.exec(K)[1]),k=ut>=1):K.indexOf("OpenGL ES")!==-1&&(ut=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),k=ut>=2);let vt=null,yt={};const Gt=o.getParameter(o.SCISSOR_BOX),re=o.getParameter(o.VIEWPORT),Ae=new ln().fromArray(Gt),B=new ln().fromArray(re);function ht(X,At,Dt,Vt){const St=new Uint8Array(4),_t=o.createTexture();o.bindTexture(X,_t),o.texParameteri(X,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(X,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Yt=0;Yt<Dt;Yt++)X===o.TEXTURE_3D||X===o.TEXTURE_2D_ARRAY?o.texImage3D(At,0,o.RGBA,1,1,Vt,0,o.RGBA,o.UNSIGNED_BYTE,St):o.texImage2D(At+Yt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,St);return _t}const tt={};tt[o.TEXTURE_2D]=ht(o.TEXTURE_2D,o.TEXTURE_2D,1),tt[o.TEXTURE_CUBE_MAP]=ht(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),tt[o.TEXTURE_2D_ARRAY]=ht(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),tt[o.TEXTURE_3D]=ht(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),st(o.DEPTH_TEST),h.setFunc(mo),Qt(!1),Lt(Ev),st(o.CULL_FACE),Ge(gs);function st(X){x[X]!==!0&&(o.enable(X),x[X]=!0)}function Mt(X){x[X]!==!1&&(o.disable(X),x[X]=!1)}function Nt(X,At){return m[X]!==At?(o.bindFramebuffer(X,At),m[X]=At,X===o.DRAW_FRAMEBUFFER&&(m[o.FRAMEBUFFER]=At),X===o.FRAMEBUFFER&&(m[o.DRAW_FRAMEBUFFER]=At),!0):!1}function Rt(X,At){let Dt=S,Vt=!1;if(X){Dt=v.get(At),Dt===void 0&&(Dt=[],v.set(At,Dt));const St=X.textures;if(Dt.length!==St.length||Dt[0]!==o.COLOR_ATTACHMENT0){for(let _t=0,Yt=St.length;_t<Yt;_t++)Dt[_t]=o.COLOR_ATTACHMENT0+_t;Dt.length=St.length,Vt=!0}}else Dt[0]!==o.BACK&&(Dt[0]=o.BACK,Vt=!0);Vt&&o.drawBuffers(Dt)}function Et(X){return T!==X?(o.useProgram(X),T=X,!0):!1}const qt={[Js]:o.FUNC_ADD,[gE]:o.FUNC_SUBTRACT,[_E]:o.FUNC_REVERSE_SUBTRACT};qt[vE]=o.MIN,qt[xE]=o.MAX;const I={[yE]:o.ZERO,[SE]:o.ONE,[ME]:o.SRC_COLOR,[np]:o.SRC_ALPHA,[CE]:o.SRC_ALPHA_SATURATE,[AE]:o.DST_COLOR,[TE]:o.DST_ALPHA,[EE]:o.ONE_MINUS_SRC_COLOR,[ip]:o.ONE_MINUS_SRC_ALPHA,[RE]:o.ONE_MINUS_DST_COLOR,[bE]:o.ONE_MINUS_DST_ALPHA,[wE]:o.CONSTANT_COLOR,[DE]:o.ONE_MINUS_CONSTANT_COLOR,[UE]:o.CONSTANT_ALPHA,[NE]:o.ONE_MINUS_CONSTANT_ALPHA};function Ge(X,At,Dt,Vt,St,_t,Yt,ue,Ve,Ee){if(X===gs){A===!0&&(Mt(o.BLEND),A=!1);return}if(A===!1&&(st(o.BLEND),A=!0),X!==mE){if(X!==M||Ee!==w){if((y!==Js||D!==Js)&&(o.blendEquation(o.FUNC_ADD),y=Js,D=Js),Ee)switch(X){case ho:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Tv:o.blendFunc(o.ONE,o.ONE);break;case bv:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Av:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case ho:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Tv:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case bv:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Av:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}N=null,O=null,F=null,z=null,P.set(0,0,0),G=0,M=X,w=Ee}return}St=St||At,_t=_t||Dt,Yt=Yt||Vt,(At!==y||St!==D)&&(o.blendEquationSeparate(qt[At],qt[St]),y=At,D=St),(Dt!==N||Vt!==O||_t!==F||Yt!==z)&&(o.blendFuncSeparate(I[Dt],I[Vt],I[_t],I[Yt]),N=Dt,O=Vt,F=_t,z=Yt),(ue.equals(P)===!1||Ve!==G)&&(o.blendColor(ue.r,ue.g,ue.b,Ve),P.copy(ue),G=Ve),M=X,w=!1}function se(X,At){X.side===wa?Mt(o.CULL_FACE):st(o.CULL_FACE);let Dt=X.side===ni;At&&(Dt=!Dt),Qt(Dt),X.blending===ho&&X.transparent===!1?Ge(gs):Ge(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),h.setFunc(X.depthFunc),h.setTest(X.depthTest),h.setMask(X.depthWrite),c.setMask(X.colorWrite);const Vt=X.stencilWrite;d.setTest(Vt),Vt&&(d.setMask(X.stencilWriteMask),d.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),d.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Ft(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?st(o.SAMPLE_ALPHA_TO_COVERAGE):Mt(o.SAMPLE_ALPHA_TO_COVERAGE)}function Qt(X){C!==X&&(X?o.frontFace(o.CW):o.frontFace(o.CCW),C=X)}function Lt(X){X!==dE?(st(o.CULL_FACE),X!==V&&(X===Ev?o.cullFace(o.BACK):X===pE?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Mt(o.CULL_FACE),V=X}function ie(X){X!==J&&(k&&o.lineWidth(X),J=X)}function Ft(X,At,Dt){X?(st(o.POLYGON_OFFSET_FILL),(rt!==At||ct!==Dt)&&(o.polygonOffset(At,Dt),rt=At,ct=Dt)):Mt(o.POLYGON_OFFSET_FILL)}function oe(X){X?st(o.SCISSOR_TEST):Mt(o.SCISSOR_TEST)}function qe(X){X===void 0&&(X=o.TEXTURE0+ft-1),vt!==X&&(o.activeTexture(X),vt=X)}function Ze(X,At,Dt){Dt===void 0&&(vt===null?Dt=o.TEXTURE0+ft-1:Dt=vt);let Vt=yt[Dt];Vt===void 0&&(Vt={type:void 0,texture:void 0},yt[Dt]=Vt),(Vt.type!==X||Vt.texture!==At)&&(vt!==Dt&&(o.activeTexture(Dt),vt=Dt),o.bindTexture(X,At||tt[X]),Vt.type=X,Vt.texture=At)}function U(){const X=yt[vt];X!==void 0&&X.type!==void 0&&(o.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function b(){try{o.compressedTexImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function it(){try{o.compressedTexImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function mt(){try{o.texSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function xt(){try{o.texSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function dt(){try{o.compressedTexSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Xt(){try{o.compressedTexSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ct(){try{o.texStorage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Wt(){try{o.texStorage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Kt(){try{o.texImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function bt(){try{o.texImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ot(X){Ae.equals(X)===!1&&(o.scissor(X.x,X.y,X.z,X.w),Ae.copy(X))}function ne(X){B.equals(X)===!1&&(o.viewport(X.x,X.y,X.z,X.w),B.copy(X))}function Zt(X,At){let Dt=p.get(At);Dt===void 0&&(Dt=new WeakMap,p.set(At,Dt));let Vt=Dt.get(X);Vt===void 0&&(Vt=o.getUniformBlockIndex(At,X.name),Dt.set(X,Vt))}function Pt(X,At){const Vt=p.get(At).get(X);g.get(At)!==Vt&&(o.uniformBlockBinding(At,Vt,X.__bindingPointIndex),g.set(At,Vt))}function ce(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),x={},vt=null,yt={},m={},v=new WeakMap,S=[],T=null,A=!1,M=null,y=null,N=null,O=null,D=null,F=null,z=null,P=new xe(0,0,0),G=0,w=!1,C=null,V=null,J=null,rt=null,ct=null,Ae.set(0,0,o.canvas.width,o.canvas.height),B.set(0,0,o.canvas.width,o.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:st,disable:Mt,bindFramebuffer:Nt,drawBuffers:Rt,useProgram:Et,setBlending:Ge,setMaterial:se,setFlipSided:Qt,setCullFace:Lt,setLineWidth:ie,setPolygonOffset:Ft,setScissorTest:oe,activeTexture:qe,bindTexture:Ze,unbindTexture:U,compressedTexImage2D:b,compressedTexImage3D:it,texImage2D:Kt,texImage3D:bt,updateUBOMapping:Zt,uniformBlockBinding:Pt,texStorage2D:Ct,texStorage3D:Wt,texSubImage2D:mt,texSubImage3D:xt,compressedTexSubImage2D:dt,compressedTexSubImage3D:Xt,scissor:Ot,viewport:ne,reset:ce}}function mC(o,e,i,s,l,c,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,g=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new fe,x=new WeakMap;let m;const v=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(U,b){return S?new OffscreenCanvas(U,b):Pc("canvas")}function A(U,b,it){let mt=1;const xt=Ze(U);if((xt.width>it||xt.height>it)&&(mt=it/Math.max(xt.width,xt.height)),mt<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const dt=Math.floor(mt*xt.width),Xt=Math.floor(mt*xt.height);m===void 0&&(m=T(dt,Xt));const Ct=b?T(dt,Xt):m;return Ct.width=dt,Ct.height=Xt,Ct.getContext("2d").drawImage(U,0,0,dt,Xt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+xt.width+"x"+xt.height+") to ("+dt+"x"+Xt+")."),Ct}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+xt.width+"x"+xt.height+")."),U;return U}function M(U){return U.generateMipmaps}function y(U){o.generateMipmap(U)}function N(U){return U.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?o.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function O(U,b,it,mt,xt=!1){if(U!==null){if(o[U]!==void 0)return o[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let dt=b;if(b===o.RED&&(it===o.FLOAT&&(dt=o.R32F),it===o.HALF_FLOAT&&(dt=o.R16F),it===o.UNSIGNED_BYTE&&(dt=o.R8)),b===o.RED_INTEGER&&(it===o.UNSIGNED_BYTE&&(dt=o.R8UI),it===o.UNSIGNED_SHORT&&(dt=o.R16UI),it===o.UNSIGNED_INT&&(dt=o.R32UI),it===o.BYTE&&(dt=o.R8I),it===o.SHORT&&(dt=o.R16I),it===o.INT&&(dt=o.R32I)),b===o.RG&&(it===o.FLOAT&&(dt=o.RG32F),it===o.HALF_FLOAT&&(dt=o.RG16F),it===o.UNSIGNED_BYTE&&(dt=o.RG8)),b===o.RG_INTEGER&&(it===o.UNSIGNED_BYTE&&(dt=o.RG8UI),it===o.UNSIGNED_SHORT&&(dt=o.RG16UI),it===o.UNSIGNED_INT&&(dt=o.RG32UI),it===o.BYTE&&(dt=o.RG8I),it===o.SHORT&&(dt=o.RG16I),it===o.INT&&(dt=o.RG32I)),b===o.RGB_INTEGER&&(it===o.UNSIGNED_BYTE&&(dt=o.RGB8UI),it===o.UNSIGNED_SHORT&&(dt=o.RGB16UI),it===o.UNSIGNED_INT&&(dt=o.RGB32UI),it===o.BYTE&&(dt=o.RGB8I),it===o.SHORT&&(dt=o.RGB16I),it===o.INT&&(dt=o.RGB32I)),b===o.RGBA_INTEGER&&(it===o.UNSIGNED_BYTE&&(dt=o.RGBA8UI),it===o.UNSIGNED_SHORT&&(dt=o.RGBA16UI),it===o.UNSIGNED_INT&&(dt=o.RGBA32UI),it===o.BYTE&&(dt=o.RGBA8I),it===o.SHORT&&(dt=o.RGBA16I),it===o.INT&&(dt=o.RGBA32I)),b===o.RGB&&(it===o.UNSIGNED_INT_5_9_9_9_REV&&(dt=o.RGB9_E5),it===o.UNSIGNED_INT_10F_11F_11F_REV&&(dt=o.R11F_G11F_B10F)),b===o.RGBA){const Xt=xt?Lc:Ne.getTransfer(mt);it===o.FLOAT&&(dt=o.RGBA32F),it===o.HALF_FLOAT&&(dt=o.RGBA16F),it===o.UNSIGNED_BYTE&&(dt=Xt===ke?o.SRGB8_ALPHA8:o.RGBA8),it===o.UNSIGNED_SHORT_4_4_4_4&&(dt=o.RGBA4),it===o.UNSIGNED_SHORT_5_5_5_1&&(dt=o.RGB5_A1)}return(dt===o.R16F||dt===o.R32F||dt===o.RG16F||dt===o.RG32F||dt===o.RGBA16F||dt===o.RGBA32F)&&e.get("EXT_color_buffer_float"),dt}function D(U,b){let it;return U?b===null||b===ir||b===El?it=o.DEPTH24_STENCIL8:b===Da?it=o.DEPTH32F_STENCIL8:b===Ml&&(it=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===ir||b===El?it=o.DEPTH_COMPONENT24:b===Da?it=o.DEPTH_COMPONENT32F:b===Ml&&(it=o.DEPTH_COMPONENT16),it}function F(U,b){return M(U)===!0||U.isFramebufferTexture&&U.minFilter!==Gi&&U.minFilter!==na?Math.log2(Math.max(b.width,b.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?b.mipmaps.length:1}function z(U){const b=U.target;b.removeEventListener("dispose",z),G(b),b.isVideoTexture&&x.delete(b)}function P(U){const b=U.target;b.removeEventListener("dispose",P),C(b)}function G(U){const b=s.get(U);if(b.__webglInit===void 0)return;const it=U.source,mt=v.get(it);if(mt){const xt=mt[b.__cacheKey];xt.usedTimes--,xt.usedTimes===0&&w(U),Object.keys(mt).length===0&&v.delete(it)}s.remove(U)}function w(U){const b=s.get(U);o.deleteTexture(b.__webglTexture);const it=U.source,mt=v.get(it);delete mt[b.__cacheKey],h.memory.textures--}function C(U){const b=s.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),s.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let mt=0;mt<6;mt++){if(Array.isArray(b.__webglFramebuffer[mt]))for(let xt=0;xt<b.__webglFramebuffer[mt].length;xt++)o.deleteFramebuffer(b.__webglFramebuffer[mt][xt]);else o.deleteFramebuffer(b.__webglFramebuffer[mt]);b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer[mt])}else{if(Array.isArray(b.__webglFramebuffer))for(let mt=0;mt<b.__webglFramebuffer.length;mt++)o.deleteFramebuffer(b.__webglFramebuffer[mt]);else o.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&o.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let mt=0;mt<b.__webglColorRenderbuffer.length;mt++)b.__webglColorRenderbuffer[mt]&&o.deleteRenderbuffer(b.__webglColorRenderbuffer[mt]);b.__webglDepthRenderbuffer&&o.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const it=U.textures;for(let mt=0,xt=it.length;mt<xt;mt++){const dt=s.get(it[mt]);dt.__webglTexture&&(o.deleteTexture(dt.__webglTexture),h.memory.textures--),s.remove(it[mt])}s.remove(U)}let V=0;function J(){V=0}function rt(){const U=V;return U>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+l.maxTextures),V+=1,U}function ct(U){const b=[];return b.push(U.wrapS),b.push(U.wrapT),b.push(U.wrapR||0),b.push(U.magFilter),b.push(U.minFilter),b.push(U.anisotropy),b.push(U.internalFormat),b.push(U.format),b.push(U.type),b.push(U.generateMipmaps),b.push(U.premultiplyAlpha),b.push(U.flipY),b.push(U.unpackAlignment),b.push(U.colorSpace),b.join()}function ft(U,b){const it=s.get(U);if(U.isVideoTexture&&oe(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&it.__version!==U.version){const mt=U.image;if(mt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(mt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{tt(it,U,b);return}}else U.isExternalTexture&&(it.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,it.__webglTexture,o.TEXTURE0+b)}function k(U,b){const it=s.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&it.__version!==U.version){tt(it,U,b);return}i.bindTexture(o.TEXTURE_2D_ARRAY,it.__webglTexture,o.TEXTURE0+b)}function ut(U,b){const it=s.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&it.__version!==U.version){tt(it,U,b);return}i.bindTexture(o.TEXTURE_3D,it.__webglTexture,o.TEXTURE0+b)}function K(U,b){const it=s.get(U);if(U.version>0&&it.__version!==U.version){st(it,U,b);return}i.bindTexture(o.TEXTURE_CUBE_MAP,it.__webglTexture,o.TEXTURE0+b)}const vt={[dp]:o.REPEAT,[tr]:o.CLAMP_TO_EDGE,[pp]:o.MIRRORED_REPEAT},yt={[Gi]:o.NEAREST,[VE]:o.NEAREST_MIPMAP_NEAREST,[ec]:o.NEAREST_MIPMAP_LINEAR,[na]:o.LINEAR,[Ed]:o.LINEAR_MIPMAP_NEAREST,[er]:o.LINEAR_MIPMAP_LINEAR},Gt={[qE]:o.NEVER,[JE]:o.ALWAYS,[YE]:o.LESS,[qx]:o.LEQUAL,[WE]:o.EQUAL,[QE]:o.GEQUAL,[ZE]:o.GREATER,[KE]:o.NOTEQUAL};function re(U,b){if(b.type===Da&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===na||b.magFilter===Ed||b.magFilter===ec||b.magFilter===er||b.minFilter===na||b.minFilter===Ed||b.minFilter===ec||b.minFilter===er)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(U,o.TEXTURE_WRAP_S,vt[b.wrapS]),o.texParameteri(U,o.TEXTURE_WRAP_T,vt[b.wrapT]),(U===o.TEXTURE_3D||U===o.TEXTURE_2D_ARRAY)&&o.texParameteri(U,o.TEXTURE_WRAP_R,vt[b.wrapR]),o.texParameteri(U,o.TEXTURE_MAG_FILTER,yt[b.magFilter]),o.texParameteri(U,o.TEXTURE_MIN_FILTER,yt[b.minFilter]),b.compareFunction&&(o.texParameteri(U,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(U,o.TEXTURE_COMPARE_FUNC,Gt[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Gi||b.minFilter!==ec&&b.minFilter!==er||b.type===Da&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||s.get(b).__currentAnisotropy){const it=e.get("EXT_texture_filter_anisotropic");o.texParameterf(U,it.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),s.get(b).__currentAnisotropy=b.anisotropy}}}function Ae(U,b){let it=!1;U.__webglInit===void 0&&(U.__webglInit=!0,b.addEventListener("dispose",z));const mt=b.source;let xt=v.get(mt);xt===void 0&&(xt={},v.set(mt,xt));const dt=ct(b);if(dt!==U.__cacheKey){xt[dt]===void 0&&(xt[dt]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,it=!0),xt[dt].usedTimes++;const Xt=xt[U.__cacheKey];Xt!==void 0&&(xt[U.__cacheKey].usedTimes--,Xt.usedTimes===0&&w(b)),U.__cacheKey=dt,U.__webglTexture=xt[dt].texture}return it}function B(U,b,it){return Math.floor(Math.floor(U/it)/b)}function ht(U,b,it,mt){const dt=U.updateRanges;if(dt.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,b.width,b.height,it,mt,b.data);else{dt.sort((bt,Ot)=>bt.start-Ot.start);let Xt=0;for(let bt=1;bt<dt.length;bt++){const Ot=dt[Xt],ne=dt[bt],Zt=Ot.start+Ot.count,Pt=B(ne.start,b.width,4),ce=B(Ot.start,b.width,4);ne.start<=Zt+1&&Pt===ce&&B(ne.start+ne.count-1,b.width,4)===Pt?Ot.count=Math.max(Ot.count,ne.start+ne.count-Ot.start):(++Xt,dt[Xt]=ne)}dt.length=Xt+1;const Ct=o.getParameter(o.UNPACK_ROW_LENGTH),Wt=o.getParameter(o.UNPACK_SKIP_PIXELS),Kt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,b.width);for(let bt=0,Ot=dt.length;bt<Ot;bt++){const ne=dt[bt],Zt=Math.floor(ne.start/4),Pt=Math.ceil(ne.count/4),ce=Zt%b.width,X=Math.floor(Zt/b.width),At=Pt,Dt=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,ce),o.pixelStorei(o.UNPACK_SKIP_ROWS,X),i.texSubImage2D(o.TEXTURE_2D,0,ce,X,At,Dt,it,mt,b.data)}U.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Ct),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Wt),o.pixelStorei(o.UNPACK_SKIP_ROWS,Kt)}}function tt(U,b,it){let mt=o.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(mt=o.TEXTURE_2D_ARRAY),b.isData3DTexture&&(mt=o.TEXTURE_3D);const xt=Ae(U,b),dt=b.source;i.bindTexture(mt,U.__webglTexture,o.TEXTURE0+it);const Xt=s.get(dt);if(dt.version!==Xt.__version||xt===!0){i.activeTexture(o.TEXTURE0+it);const Ct=Ne.getPrimaries(Ne.workingColorSpace),Wt=b.colorSpace===ms?null:Ne.getPrimaries(b.colorSpace),Kt=b.colorSpace===ms||Ct===Wt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Kt);let bt=A(b.image,!1,l.maxTextureSize);bt=qe(b,bt);const Ot=c.convert(b.format,b.colorSpace),ne=c.convert(b.type);let Zt=O(b.internalFormat,Ot,ne,b.colorSpace,b.isVideoTexture);re(mt,b);let Pt;const ce=b.mipmaps,X=b.isVideoTexture!==!0,At=Xt.__version===void 0||xt===!0,Dt=dt.dataReady,Vt=F(b,bt);if(b.isDepthTexture)Zt=D(b.format===bl,b.type),At&&(X?i.texStorage2D(o.TEXTURE_2D,1,Zt,bt.width,bt.height):i.texImage2D(o.TEXTURE_2D,0,Zt,bt.width,bt.height,0,Ot,ne,null));else if(b.isDataTexture)if(ce.length>0){X&&At&&i.texStorage2D(o.TEXTURE_2D,Vt,Zt,ce[0].width,ce[0].height);for(let St=0,_t=ce.length;St<_t;St++)Pt=ce[St],X?Dt&&i.texSubImage2D(o.TEXTURE_2D,St,0,0,Pt.width,Pt.height,Ot,ne,Pt.data):i.texImage2D(o.TEXTURE_2D,St,Zt,Pt.width,Pt.height,0,Ot,ne,Pt.data);b.generateMipmaps=!1}else X?(At&&i.texStorage2D(o.TEXTURE_2D,Vt,Zt,bt.width,bt.height),Dt&&ht(b,bt,Ot,ne)):i.texImage2D(o.TEXTURE_2D,0,Zt,bt.width,bt.height,0,Ot,ne,bt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){X&&At&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Vt,Zt,ce[0].width,ce[0].height,bt.depth);for(let St=0,_t=ce.length;St<_t;St++)if(Pt=ce[St],b.format!==Fi)if(Ot!==null)if(X){if(Dt)if(b.layerUpdates.size>0){const Yt=ex(Pt.width,Pt.height,b.format,b.type);for(const ue of b.layerUpdates){const Ve=Pt.data.subarray(ue*Yt/Pt.data.BYTES_PER_ELEMENT,(ue+1)*Yt/Pt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,St,0,0,ue,Pt.width,Pt.height,1,Ot,Ve)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,St,0,0,0,Pt.width,Pt.height,bt.depth,Ot,Pt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,St,Zt,Pt.width,Pt.height,bt.depth,0,Pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?Dt&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,St,0,0,0,Pt.width,Pt.height,bt.depth,Ot,ne,Pt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,St,Zt,Pt.width,Pt.height,bt.depth,0,Ot,ne,Pt.data)}else{X&&At&&i.texStorage2D(o.TEXTURE_2D,Vt,Zt,ce[0].width,ce[0].height);for(let St=0,_t=ce.length;St<_t;St++)Pt=ce[St],b.format!==Fi?Ot!==null?X?Dt&&i.compressedTexSubImage2D(o.TEXTURE_2D,St,0,0,Pt.width,Pt.height,Ot,Pt.data):i.compressedTexImage2D(o.TEXTURE_2D,St,Zt,Pt.width,Pt.height,0,Pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?Dt&&i.texSubImage2D(o.TEXTURE_2D,St,0,0,Pt.width,Pt.height,Ot,ne,Pt.data):i.texImage2D(o.TEXTURE_2D,St,Zt,Pt.width,Pt.height,0,Ot,ne,Pt.data)}else if(b.isDataArrayTexture)if(X){if(At&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Vt,Zt,bt.width,bt.height,bt.depth),Dt)if(b.layerUpdates.size>0){const St=ex(bt.width,bt.height,b.format,b.type);for(const _t of b.layerUpdates){const Yt=bt.data.subarray(_t*St/bt.data.BYTES_PER_ELEMENT,(_t+1)*St/bt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,_t,bt.width,bt.height,1,Ot,ne,Yt)}b.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,bt.width,bt.height,bt.depth,Ot,ne,bt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Zt,bt.width,bt.height,bt.depth,0,Ot,ne,bt.data);else if(b.isData3DTexture)X?(At&&i.texStorage3D(o.TEXTURE_3D,Vt,Zt,bt.width,bt.height,bt.depth),Dt&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,bt.width,bt.height,bt.depth,Ot,ne,bt.data)):i.texImage3D(o.TEXTURE_3D,0,Zt,bt.width,bt.height,bt.depth,0,Ot,ne,bt.data);else if(b.isFramebufferTexture){if(At)if(X)i.texStorage2D(o.TEXTURE_2D,Vt,Zt,bt.width,bt.height);else{let St=bt.width,_t=bt.height;for(let Yt=0;Yt<Vt;Yt++)i.texImage2D(o.TEXTURE_2D,Yt,Zt,St,_t,0,Ot,ne,null),St>>=1,_t>>=1}}else if(ce.length>0){if(X&&At){const St=Ze(ce[0]);i.texStorage2D(o.TEXTURE_2D,Vt,Zt,St.width,St.height)}for(let St=0,_t=ce.length;St<_t;St++)Pt=ce[St],X?Dt&&i.texSubImage2D(o.TEXTURE_2D,St,0,0,Ot,ne,Pt):i.texImage2D(o.TEXTURE_2D,St,Zt,Ot,ne,Pt);b.generateMipmaps=!1}else if(X){if(At){const St=Ze(bt);i.texStorage2D(o.TEXTURE_2D,Vt,Zt,St.width,St.height)}Dt&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Ot,ne,bt)}else i.texImage2D(o.TEXTURE_2D,0,Zt,Ot,ne,bt);M(b)&&y(mt),Xt.__version=dt.version,b.onUpdate&&b.onUpdate(b)}U.__version=b.version}function st(U,b,it){if(b.image.length!==6)return;const mt=Ae(U,b),xt=b.source;i.bindTexture(o.TEXTURE_CUBE_MAP,U.__webglTexture,o.TEXTURE0+it);const dt=s.get(xt);if(xt.version!==dt.__version||mt===!0){i.activeTexture(o.TEXTURE0+it);const Xt=Ne.getPrimaries(Ne.workingColorSpace),Ct=b.colorSpace===ms?null:Ne.getPrimaries(b.colorSpace),Wt=b.colorSpace===ms||Xt===Ct?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);const Kt=b.isCompressedTexture||b.image[0].isCompressedTexture,bt=b.image[0]&&b.image[0].isDataTexture,Ot=[];for(let _t=0;_t<6;_t++)!Kt&&!bt?Ot[_t]=A(b.image[_t],!0,l.maxCubemapSize):Ot[_t]=bt?b.image[_t].image:b.image[_t],Ot[_t]=qe(b,Ot[_t]);const ne=Ot[0],Zt=c.convert(b.format,b.colorSpace),Pt=c.convert(b.type),ce=O(b.internalFormat,Zt,Pt,b.colorSpace),X=b.isVideoTexture!==!0,At=dt.__version===void 0||mt===!0,Dt=xt.dataReady;let Vt=F(b,ne);re(o.TEXTURE_CUBE_MAP,b);let St;if(Kt){X&&At&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Vt,ce,ne.width,ne.height);for(let _t=0;_t<6;_t++){St=Ot[_t].mipmaps;for(let Yt=0;Yt<St.length;Yt++){const ue=St[Yt];b.format!==Fi?Zt!==null?X?Dt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Yt,0,0,ue.width,ue.height,Zt,ue.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Yt,ce,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?Dt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Yt,0,0,ue.width,ue.height,Zt,Pt,ue.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Yt,ce,ue.width,ue.height,0,Zt,Pt,ue.data)}}}else{if(St=b.mipmaps,X&&At){St.length>0&&Vt++;const _t=Ze(Ot[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Vt,ce,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(bt){X?Dt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Ot[_t].width,Ot[_t].height,Zt,Pt,Ot[_t].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,ce,Ot[_t].width,Ot[_t].height,0,Zt,Pt,Ot[_t].data);for(let Yt=0;Yt<St.length;Yt++){const Ve=St[Yt].image[_t].image;X?Dt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Yt+1,0,0,Ve.width,Ve.height,Zt,Pt,Ve.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Yt+1,ce,Ve.width,Ve.height,0,Zt,Pt,Ve.data)}}else{X?Dt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Zt,Pt,Ot[_t]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,ce,Zt,Pt,Ot[_t]);for(let Yt=0;Yt<St.length;Yt++){const ue=St[Yt];X?Dt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Yt+1,0,0,Zt,Pt,ue.image[_t]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Yt+1,ce,Zt,Pt,ue.image[_t])}}}M(b)&&y(o.TEXTURE_CUBE_MAP),dt.__version=xt.version,b.onUpdate&&b.onUpdate(b)}U.__version=b.version}function Mt(U,b,it,mt,xt,dt){const Xt=c.convert(it.format,it.colorSpace),Ct=c.convert(it.type),Wt=O(it.internalFormat,Xt,Ct,it.colorSpace),Kt=s.get(b),bt=s.get(it);if(bt.__renderTarget=b,!Kt.__hasExternalTextures){const Ot=Math.max(1,b.width>>dt),ne=Math.max(1,b.height>>dt);xt===o.TEXTURE_3D||xt===o.TEXTURE_2D_ARRAY?i.texImage3D(xt,dt,Wt,Ot,ne,b.depth,0,Xt,Ct,null):i.texImage2D(xt,dt,Wt,Ot,ne,0,Xt,Ct,null)}i.bindFramebuffer(o.FRAMEBUFFER,U),Ft(b)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,mt,xt,bt.__webglTexture,0,ie(b)):(xt===o.TEXTURE_2D||xt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&xt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,mt,xt,bt.__webglTexture,dt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Nt(U,b,it){if(o.bindRenderbuffer(o.RENDERBUFFER,U),b.depthBuffer){const mt=b.depthTexture,xt=mt&&mt.isDepthTexture?mt.type:null,dt=D(b.stencilBuffer,xt),Xt=b.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ct=ie(b);Ft(b)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ct,dt,b.width,b.height):it?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ct,dt,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,dt,b.width,b.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Xt,o.RENDERBUFFER,U)}else{const mt=b.textures;for(let xt=0;xt<mt.length;xt++){const dt=mt[xt],Xt=c.convert(dt.format,dt.colorSpace),Ct=c.convert(dt.type),Wt=O(dt.internalFormat,Xt,Ct,dt.colorSpace),Kt=ie(b);it&&Ft(b)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Kt,Wt,b.width,b.height):Ft(b)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Kt,Wt,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,Wt,b.width,b.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Rt(U,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,U),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const mt=s.get(b.depthTexture);mt.__renderTarget=b,(!mt.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),ft(b.depthTexture,0);const xt=mt.__webglTexture,dt=ie(b);if(b.depthTexture.format===Tl)Ft(b)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,xt,0,dt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,xt,0);else if(b.depthTexture.format===bl)Ft(b)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,xt,0,dt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,xt,0);else throw new Error("Unknown depthTexture format")}function Et(U){const b=s.get(U),it=U.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==U.depthTexture){const mt=U.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),mt){const xt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,mt.removeEventListener("dispose",xt)};mt.addEventListener("dispose",xt),b.__depthDisposeCallback=xt}b.__boundDepthTexture=mt}if(U.depthTexture&&!b.__autoAllocateDepthBuffer){if(it)throw new Error("target.depthTexture not supported in Cube render targets");const mt=U.texture.mipmaps;mt&&mt.length>0?Rt(b.__webglFramebuffer[0],U):Rt(b.__webglFramebuffer,U)}else if(it){b.__webglDepthbuffer=[];for(let mt=0;mt<6;mt++)if(i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer[mt]),b.__webglDepthbuffer[mt]===void 0)b.__webglDepthbuffer[mt]=o.createRenderbuffer(),Nt(b.__webglDepthbuffer[mt],U,!1);else{const xt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,dt=b.__webglDepthbuffer[mt];o.bindRenderbuffer(o.RENDERBUFFER,dt),o.framebufferRenderbuffer(o.FRAMEBUFFER,xt,o.RENDERBUFFER,dt)}}else{const mt=U.texture.mipmaps;if(mt&&mt.length>0?i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=o.createRenderbuffer(),Nt(b.__webglDepthbuffer,U,!1);else{const xt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,dt=b.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,dt),o.framebufferRenderbuffer(o.FRAMEBUFFER,xt,o.RENDERBUFFER,dt)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function qt(U,b,it){const mt=s.get(U);b!==void 0&&Mt(mt.__webglFramebuffer,U,U.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),it!==void 0&&Et(U)}function I(U){const b=U.texture,it=s.get(U),mt=s.get(b);U.addEventListener("dispose",P);const xt=U.textures,dt=U.isWebGLCubeRenderTarget===!0,Xt=xt.length>1;if(Xt||(mt.__webglTexture===void 0&&(mt.__webglTexture=o.createTexture()),mt.__version=b.version,h.memory.textures++),dt){it.__webglFramebuffer=[];for(let Ct=0;Ct<6;Ct++)if(b.mipmaps&&b.mipmaps.length>0){it.__webglFramebuffer[Ct]=[];for(let Wt=0;Wt<b.mipmaps.length;Wt++)it.__webglFramebuffer[Ct][Wt]=o.createFramebuffer()}else it.__webglFramebuffer[Ct]=o.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){it.__webglFramebuffer=[];for(let Ct=0;Ct<b.mipmaps.length;Ct++)it.__webglFramebuffer[Ct]=o.createFramebuffer()}else it.__webglFramebuffer=o.createFramebuffer();if(Xt)for(let Ct=0,Wt=xt.length;Ct<Wt;Ct++){const Kt=s.get(xt[Ct]);Kt.__webglTexture===void 0&&(Kt.__webglTexture=o.createTexture(),h.memory.textures++)}if(U.samples>0&&Ft(U)===!1){it.__webglMultisampledFramebuffer=o.createFramebuffer(),it.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,it.__webglMultisampledFramebuffer);for(let Ct=0;Ct<xt.length;Ct++){const Wt=xt[Ct];it.__webglColorRenderbuffer[Ct]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,it.__webglColorRenderbuffer[Ct]);const Kt=c.convert(Wt.format,Wt.colorSpace),bt=c.convert(Wt.type),Ot=O(Wt.internalFormat,Kt,bt,Wt.colorSpace,U.isXRRenderTarget===!0),ne=ie(U);o.renderbufferStorageMultisample(o.RENDERBUFFER,ne,Ot,U.width,U.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ct,o.RENDERBUFFER,it.__webglColorRenderbuffer[Ct])}o.bindRenderbuffer(o.RENDERBUFFER,null),U.depthBuffer&&(it.__webglDepthRenderbuffer=o.createRenderbuffer(),Nt(it.__webglDepthRenderbuffer,U,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(dt){i.bindTexture(o.TEXTURE_CUBE_MAP,mt.__webglTexture),re(o.TEXTURE_CUBE_MAP,b);for(let Ct=0;Ct<6;Ct++)if(b.mipmaps&&b.mipmaps.length>0)for(let Wt=0;Wt<b.mipmaps.length;Wt++)Mt(it.__webglFramebuffer[Ct][Wt],U,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,Wt);else Mt(it.__webglFramebuffer[Ct],U,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0);M(b)&&y(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Xt){for(let Ct=0,Wt=xt.length;Ct<Wt;Ct++){const Kt=xt[Ct],bt=s.get(Kt);let Ot=o.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Ot=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ot,bt.__webglTexture),re(Ot,Kt),Mt(it.__webglFramebuffer,U,Kt,o.COLOR_ATTACHMENT0+Ct,Ot,0),M(Kt)&&y(Ot)}i.unbindTexture()}else{let Ct=o.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Ct=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ct,mt.__webglTexture),re(Ct,b),b.mipmaps&&b.mipmaps.length>0)for(let Wt=0;Wt<b.mipmaps.length;Wt++)Mt(it.__webglFramebuffer[Wt],U,b,o.COLOR_ATTACHMENT0,Ct,Wt);else Mt(it.__webglFramebuffer,U,b,o.COLOR_ATTACHMENT0,Ct,0);M(b)&&y(Ct),i.unbindTexture()}U.depthBuffer&&Et(U)}function Ge(U){const b=U.textures;for(let it=0,mt=b.length;it<mt;it++){const xt=b[it];if(M(xt)){const dt=N(U),Xt=s.get(xt).__webglTexture;i.bindTexture(dt,Xt),y(dt),i.unbindTexture()}}}const se=[],Qt=[];function Lt(U){if(U.samples>0){if(Ft(U)===!1){const b=U.textures,it=U.width,mt=U.height;let xt=o.COLOR_BUFFER_BIT;const dt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Xt=s.get(U),Ct=b.length>1;if(Ct)for(let Kt=0;Kt<b.length;Kt++)i.bindFramebuffer(o.FRAMEBUFFER,Xt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Kt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Xt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Kt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Xt.__webglMultisampledFramebuffer);const Wt=U.texture.mipmaps;Wt&&Wt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Xt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Xt.__webglFramebuffer);for(let Kt=0;Kt<b.length;Kt++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(xt|=o.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(xt|=o.STENCIL_BUFFER_BIT)),Ct){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Xt.__webglColorRenderbuffer[Kt]);const bt=s.get(b[Kt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,bt,0)}o.blitFramebuffer(0,0,it,mt,0,0,it,mt,xt,o.NEAREST),g===!0&&(se.length=0,Qt.length=0,se.push(o.COLOR_ATTACHMENT0+Kt),U.depthBuffer&&U.resolveDepthBuffer===!1&&(se.push(dt),Qt.push(dt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,Qt)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,se))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ct)for(let Kt=0;Kt<b.length;Kt++){i.bindFramebuffer(o.FRAMEBUFFER,Xt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Kt,o.RENDERBUFFER,Xt.__webglColorRenderbuffer[Kt]);const bt=s.get(b[Kt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Xt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Kt,o.TEXTURE_2D,bt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Xt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&g){const b=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[b])}}}function ie(U){return Math.min(l.maxSamples,U.samples)}function Ft(U){const b=s.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function oe(U){const b=h.render.frame;x.get(U)!==b&&(x.set(U,b),U.update())}function qe(U,b){const it=U.colorSpace,mt=U.format,xt=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||it!==vo&&it!==ms&&(Ne.getTransfer(it)===ke?(mt!==Fi||xt!==sa)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",it)),b}function Ze(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(p.width=U.naturalWidth||U.width,p.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(p.width=U.displayWidth,p.height=U.displayHeight):(p.width=U.width,p.height=U.height),p}this.allocateTextureUnit=rt,this.resetTextureUnits=J,this.setTexture2D=ft,this.setTexture2DArray=k,this.setTexture3D=ut,this.setTextureCube=K,this.rebindTextures=qt,this.setupRenderTarget=I,this.updateRenderTargetMipmap=Ge,this.updateMultisampleRenderTarget=Lt,this.setupDepthRenderbuffer=Et,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=Ft}function gC(o,e){function i(s,l=ms){let c;const h=Ne.getTransfer(l);if(s===sa)return o.UNSIGNED_BYTE;if(s===Zp)return o.UNSIGNED_SHORT_4_4_4_4;if(s===Kp)return o.UNSIGNED_SHORT_5_5_5_1;if(s===Fx)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===Hx)return o.UNSIGNED_INT_10F_11F_11F_REV;if(s===Ix)return o.BYTE;if(s===Bx)return o.SHORT;if(s===Ml)return o.UNSIGNED_SHORT;if(s===Wp)return o.INT;if(s===ir)return o.UNSIGNED_INT;if(s===Da)return o.FLOAT;if(s===Rl)return o.HALF_FLOAT;if(s===Gx)return o.ALPHA;if(s===Vx)return o.RGB;if(s===Fi)return o.RGBA;if(s===Tl)return o.DEPTH_COMPONENT;if(s===bl)return o.DEPTH_STENCIL;if(s===Xx)return o.RED;if(s===Qp)return o.RED_INTEGER;if(s===kx)return o.RG;if(s===Jp)return o.RG_INTEGER;if(s===$p)return o.RGBA_INTEGER;if(s===Ac||s===Rc||s===Cc||s===wc)if(h===ke)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Ac)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Rc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Cc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===wc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Ac)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Rc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Cc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===wc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===mp||s===gp||s===_p||s===vp)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===mp)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===gp)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===_p)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===vp)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===xp||s===yp||s===Sp)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(s===xp||s===yp)return h===ke?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Sp)return h===ke?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Mp||s===Ep||s===Tp||s===bp||s===Ap||s===Rp||s===Cp||s===wp||s===Dp||s===Up||s===Np||s===Lp||s===Op||s===Pp)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Mp)return h===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Ep)return h===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Tp)return h===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===bp)return h===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Ap)return h===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Rp)return h===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Cp)return h===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===wp)return h===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Dp)return h===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Up)return h===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Np)return h===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Lp)return h===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Op)return h===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Pp)return h===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===zp||s===Ip||s===Bp)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(s===zp)return h===ke?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Ip)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Bp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Fp||s===Hp||s===Gp||s===Vp)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(s===Fp)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Hp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Gp)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Vp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===El?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const _C=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,vC=`
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

}`;class xC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new sy(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new xs({vertexShader:_C,fragmentShader:vC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Hi(new Dl(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class yC extends rr{constructor(e,i){super();const s=this;let l=null,c=1,h=null,d="local-floor",g=1,p=null,x=null,m=null,v=null,S=null,T=null;const A=typeof XRWebGLBinding<"u",M=new xC,y={},N=i.getContextAttributes();let O=null,D=null;const F=[],z=[],P=new fe;let G=null;const w=new Ri;w.viewport=new ln;const C=new Ri;C.viewport=new ln;const V=[w,C],J=new FT;let rt=null,ct=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(tt){let st=F[tt];return st===void 0&&(st=new jd,F[tt]=st),st.getTargetRaySpace()},this.getControllerGrip=function(tt){let st=F[tt];return st===void 0&&(st=new jd,F[tt]=st),st.getGripSpace()},this.getHand=function(tt){let st=F[tt];return st===void 0&&(st=new jd,F[tt]=st),st.getHandSpace()};function ft(tt){const st=z.indexOf(tt.inputSource);if(st===-1)return;const Mt=F[st];Mt!==void 0&&(Mt.update(tt.inputSource,tt.frame,p||h),Mt.dispatchEvent({type:tt.type,data:tt.inputSource}))}function k(){l.removeEventListener("select",ft),l.removeEventListener("selectstart",ft),l.removeEventListener("selectend",ft),l.removeEventListener("squeeze",ft),l.removeEventListener("squeezestart",ft),l.removeEventListener("squeezeend",ft),l.removeEventListener("end",k),l.removeEventListener("inputsourceschange",ut);for(let tt=0;tt<F.length;tt++){const st=z[tt];st!==null&&(z[tt]=null,F[tt].disconnect(st))}rt=null,ct=null,M.reset();for(const tt in y)delete y[tt];e.setRenderTarget(O),S=null,v=null,m=null,l=null,D=null,ht.stop(),s.isPresenting=!1,e.setPixelRatio(G),e.setSize(P.width,P.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(tt){c=tt,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(tt){d=tt,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(tt){p=tt},this.getBaseLayer=function(){return v!==null?v:S},this.getBinding=function(){return m===null&&A&&(m=new XRWebGLBinding(l,i)),m},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(tt){if(l=tt,l!==null){if(O=e.getRenderTarget(),l.addEventListener("select",ft),l.addEventListener("selectstart",ft),l.addEventListener("selectend",ft),l.addEventListener("squeeze",ft),l.addEventListener("squeezestart",ft),l.addEventListener("squeezeend",ft),l.addEventListener("end",k),l.addEventListener("inputsourceschange",ut),N.xrCompatible!==!0&&await i.makeXRCompatible(),G=e.getPixelRatio(),e.getSize(P),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let Mt=null,Nt=null,Rt=null;N.depth&&(Rt=N.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Mt=N.stencil?bl:Tl,Nt=N.stencil?El:ir);const Et={colorFormat:i.RGBA8,depthFormat:Rt,scaleFactor:c};m=this.getBinding(),v=m.createProjectionLayer(Et),l.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),D=new sr(v.textureWidth,v.textureHeight,{format:Fi,type:sa,depthTexture:new ay(v.textureWidth,v.textureHeight,Nt,void 0,void 0,void 0,void 0,void 0,void 0,Mt),stencilBuffer:N.stencil,colorSpace:e.outputColorSpace,samples:N.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const Mt={antialias:N.antialias,alpha:!0,depth:N.depth,stencil:N.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(l,i,Mt),l.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),D=new sr(S.framebufferWidth,S.framebufferHeight,{format:Fi,type:sa,colorSpace:e.outputColorSpace,stencilBuffer:N.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(g),p=null,h=await l.requestReferenceSpace(d),ht.setContext(l),ht.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function ut(tt){for(let st=0;st<tt.removed.length;st++){const Mt=tt.removed[st],Nt=z.indexOf(Mt);Nt>=0&&(z[Nt]=null,F[Nt].disconnect(Mt))}for(let st=0;st<tt.added.length;st++){const Mt=tt.added[st];let Nt=z.indexOf(Mt);if(Nt===-1){for(let Et=0;Et<F.length;Et++)if(Et>=z.length){z.push(Mt),Nt=Et;break}else if(z[Et]===null){z[Et]=Mt,Nt=Et;break}if(Nt===-1)break}const Rt=F[Nt];Rt&&Rt.connect(Mt)}}const K=new et,vt=new et;function yt(tt,st,Mt){K.setFromMatrixPosition(st.matrixWorld),vt.setFromMatrixPosition(Mt.matrixWorld);const Nt=K.distanceTo(vt),Rt=st.projectionMatrix.elements,Et=Mt.projectionMatrix.elements,qt=Rt[14]/(Rt[10]-1),I=Rt[14]/(Rt[10]+1),Ge=(Rt[9]+1)/Rt[5],se=(Rt[9]-1)/Rt[5],Qt=(Rt[8]-1)/Rt[0],Lt=(Et[8]+1)/Et[0],ie=qt*Qt,Ft=qt*Lt,oe=Nt/(-Qt+Lt),qe=oe*-Qt;if(st.matrixWorld.decompose(tt.position,tt.quaternion,tt.scale),tt.translateX(qe),tt.translateZ(oe),tt.matrixWorld.compose(tt.position,tt.quaternion,tt.scale),tt.matrixWorldInverse.copy(tt.matrixWorld).invert(),Rt[10]===-1)tt.projectionMatrix.copy(st.projectionMatrix),tt.projectionMatrixInverse.copy(st.projectionMatrixInverse);else{const Ze=qt+oe,U=I+oe,b=ie-qe,it=Ft+(Nt-qe),mt=Ge*I/U*Ze,xt=se*I/U*Ze;tt.projectionMatrix.makePerspective(b,it,mt,xt,Ze,U),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert()}}function Gt(tt,st){st===null?tt.matrixWorld.copy(tt.matrix):tt.matrixWorld.multiplyMatrices(st.matrixWorld,tt.matrix),tt.matrixWorldInverse.copy(tt.matrixWorld).invert()}this.updateCamera=function(tt){if(l===null)return;let st=tt.near,Mt=tt.far;M.texture!==null&&(M.depthNear>0&&(st=M.depthNear),M.depthFar>0&&(Mt=M.depthFar)),J.near=C.near=w.near=st,J.far=C.far=w.far=Mt,(rt!==J.near||ct!==J.far)&&(l.updateRenderState({depthNear:J.near,depthFar:J.far}),rt=J.near,ct=J.far),J.layers.mask=tt.layers.mask|6,w.layers.mask=J.layers.mask&3,C.layers.mask=J.layers.mask&5;const Nt=tt.parent,Rt=J.cameras;Gt(J,Nt);for(let Et=0;Et<Rt.length;Et++)Gt(Rt[Et],Nt);Rt.length===2?yt(J,w,C):J.projectionMatrix.copy(w.projectionMatrix),re(tt,J,Nt)};function re(tt,st,Mt){Mt===null?tt.matrix.copy(st.matrixWorld):(tt.matrix.copy(Mt.matrixWorld),tt.matrix.invert(),tt.matrix.multiply(st.matrixWorld)),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.updateMatrixWorld(!0),tt.projectionMatrix.copy(st.projectionMatrix),tt.projectionMatrixInverse.copy(st.projectionMatrixInverse),tt.isPerspectiveCamera&&(tt.fov=Xp*2*Math.atan(1/tt.projectionMatrix.elements[5]),tt.zoom=1)}this.getCamera=function(){return J},this.getFoveation=function(){if(!(v===null&&S===null))return g},this.setFoveation=function(tt){g=tt,v!==null&&(v.fixedFoveation=tt),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=tt)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(J)},this.getCameraTexture=function(tt){return y[tt]};let Ae=null;function B(tt,st){if(x=st.getViewerPose(p||h),T=st,x!==null){const Mt=x.views;S!==null&&(e.setRenderTargetFramebuffer(D,S.framebuffer),e.setRenderTarget(D));let Nt=!1;Mt.length!==J.cameras.length&&(J.cameras.length=0,Nt=!0);for(let I=0;I<Mt.length;I++){const Ge=Mt[I];let se=null;if(S!==null)se=S.getViewport(Ge);else{const Lt=m.getViewSubImage(v,Ge);se=Lt.viewport,I===0&&(e.setRenderTargetTextures(D,Lt.colorTexture,Lt.depthStencilTexture),e.setRenderTarget(D))}let Qt=V[I];Qt===void 0&&(Qt=new Ri,Qt.layers.enable(I),Qt.viewport=new ln,V[I]=Qt),Qt.matrix.fromArray(Ge.transform.matrix),Qt.matrix.decompose(Qt.position,Qt.quaternion,Qt.scale),Qt.projectionMatrix.fromArray(Ge.projectionMatrix),Qt.projectionMatrixInverse.copy(Qt.projectionMatrix).invert(),Qt.viewport.set(se.x,se.y,se.width,se.height),I===0&&(J.matrix.copy(Qt.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale)),Nt===!0&&J.cameras.push(Qt)}const Rt=l.enabledFeatures;if(Rt&&Rt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&A){m=s.getBinding();const I=m.getDepthInformation(Mt[0]);I&&I.isValid&&I.texture&&M.init(I,l.renderState)}if(Rt&&Rt.includes("camera-access")&&A){e.state.unbindTexture(),m=s.getBinding();for(let I=0;I<Mt.length;I++){const Ge=Mt[I].camera;if(Ge){let se=y[Ge];se||(se=new sy,y[Ge]=se);const Qt=m.getCameraImage(Ge);se.sourceTexture=Qt}}}}for(let Mt=0;Mt<F.length;Mt++){const Nt=z[Mt],Rt=F[Mt];Nt!==null&&Rt!==void 0&&Rt.update(Nt,st,p||h)}Ae&&Ae(tt,st),st.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:st}),T=null}const ht=new ly;ht.setAnimationLoop(B),this.setAnimationLoop=function(tt){Ae=tt},this.dispose=function(){}}}const Zs=new ra,SC=new an;function MC(o,e){function i(M,y){M.matrixAutoUpdate===!0&&M.updateMatrix(),y.value.copy(M.matrix)}function s(M,y){y.color.getRGB(M.fogColor.value,ty(o)),y.isFog?(M.fogNear.value=y.near,M.fogFar.value=y.far):y.isFogExp2&&(M.fogDensity.value=y.density)}function l(M,y,N,O,D){y.isMeshBasicMaterial||y.isMeshLambertMaterial?c(M,y):y.isMeshToonMaterial?(c(M,y),m(M,y)):y.isMeshPhongMaterial?(c(M,y),x(M,y)):y.isMeshStandardMaterial?(c(M,y),v(M,y),y.isMeshPhysicalMaterial&&S(M,y,D)):y.isMeshMatcapMaterial?(c(M,y),T(M,y)):y.isMeshDepthMaterial?c(M,y):y.isMeshDistanceMaterial?(c(M,y),A(M,y)):y.isMeshNormalMaterial?c(M,y):y.isLineBasicMaterial?(h(M,y),y.isLineDashedMaterial&&d(M,y)):y.isPointsMaterial?g(M,y,N,O):y.isSpriteMaterial?p(M,y):y.isShadowMaterial?(M.color.value.copy(y.color),M.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function c(M,y){M.opacity.value=y.opacity,y.color&&M.diffuse.value.copy(y.color),y.emissive&&M.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(M.map.value=y.map,i(y.map,M.mapTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,i(y.alphaMap,M.alphaMapTransform)),y.bumpMap&&(M.bumpMap.value=y.bumpMap,i(y.bumpMap,M.bumpMapTransform),M.bumpScale.value=y.bumpScale,y.side===ni&&(M.bumpScale.value*=-1)),y.normalMap&&(M.normalMap.value=y.normalMap,i(y.normalMap,M.normalMapTransform),M.normalScale.value.copy(y.normalScale),y.side===ni&&M.normalScale.value.negate()),y.displacementMap&&(M.displacementMap.value=y.displacementMap,i(y.displacementMap,M.displacementMapTransform),M.displacementScale.value=y.displacementScale,M.displacementBias.value=y.displacementBias),y.emissiveMap&&(M.emissiveMap.value=y.emissiveMap,i(y.emissiveMap,M.emissiveMapTransform)),y.specularMap&&(M.specularMap.value=y.specularMap,i(y.specularMap,M.specularMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest);const N=e.get(y),O=N.envMap,D=N.envMapRotation;O&&(M.envMap.value=O,Zs.copy(D),Zs.x*=-1,Zs.y*=-1,Zs.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(Zs.y*=-1,Zs.z*=-1),M.envMapRotation.value.setFromMatrix4(SC.makeRotationFromEuler(Zs)),M.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=y.reflectivity,M.ior.value=y.ior,M.refractionRatio.value=y.refractionRatio),y.lightMap&&(M.lightMap.value=y.lightMap,M.lightMapIntensity.value=y.lightMapIntensity,i(y.lightMap,M.lightMapTransform)),y.aoMap&&(M.aoMap.value=y.aoMap,M.aoMapIntensity.value=y.aoMapIntensity,i(y.aoMap,M.aoMapTransform))}function h(M,y){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,y.map&&(M.map.value=y.map,i(y.map,M.mapTransform))}function d(M,y){M.dashSize.value=y.dashSize,M.totalSize.value=y.dashSize+y.gapSize,M.scale.value=y.scale}function g(M,y,N,O){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,M.size.value=y.size*N,M.scale.value=O*.5,y.map&&(M.map.value=y.map,i(y.map,M.uvTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,i(y.alphaMap,M.alphaMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest)}function p(M,y){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,M.rotation.value=y.rotation,y.map&&(M.map.value=y.map,i(y.map,M.mapTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,i(y.alphaMap,M.alphaMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest)}function x(M,y){M.specular.value.copy(y.specular),M.shininess.value=Math.max(y.shininess,1e-4)}function m(M,y){y.gradientMap&&(M.gradientMap.value=y.gradientMap)}function v(M,y){M.metalness.value=y.metalness,y.metalnessMap&&(M.metalnessMap.value=y.metalnessMap,i(y.metalnessMap,M.metalnessMapTransform)),M.roughness.value=y.roughness,y.roughnessMap&&(M.roughnessMap.value=y.roughnessMap,i(y.roughnessMap,M.roughnessMapTransform)),y.envMap&&(M.envMapIntensity.value=y.envMapIntensity)}function S(M,y,N){M.ior.value=y.ior,y.sheen>0&&(M.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),M.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(M.sheenColorMap.value=y.sheenColorMap,i(y.sheenColorMap,M.sheenColorMapTransform)),y.sheenRoughnessMap&&(M.sheenRoughnessMap.value=y.sheenRoughnessMap,i(y.sheenRoughnessMap,M.sheenRoughnessMapTransform))),y.clearcoat>0&&(M.clearcoat.value=y.clearcoat,M.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(M.clearcoatMap.value=y.clearcoatMap,i(y.clearcoatMap,M.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,i(y.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(M.clearcoatNormalMap.value=y.clearcoatNormalMap,i(y.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===ni&&M.clearcoatNormalScale.value.negate())),y.dispersion>0&&(M.dispersion.value=y.dispersion),y.iridescence>0&&(M.iridescence.value=y.iridescence,M.iridescenceIOR.value=y.iridescenceIOR,M.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(M.iridescenceMap.value=y.iridescenceMap,i(y.iridescenceMap,M.iridescenceMapTransform)),y.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=y.iridescenceThicknessMap,i(y.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),y.transmission>0&&(M.transmission.value=y.transmission,M.transmissionSamplerMap.value=N.texture,M.transmissionSamplerSize.value.set(N.width,N.height),y.transmissionMap&&(M.transmissionMap.value=y.transmissionMap,i(y.transmissionMap,M.transmissionMapTransform)),M.thickness.value=y.thickness,y.thicknessMap&&(M.thicknessMap.value=y.thicknessMap,i(y.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=y.attenuationDistance,M.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(M.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(M.anisotropyMap.value=y.anisotropyMap,i(y.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=y.specularIntensity,M.specularColor.value.copy(y.specularColor),y.specularColorMap&&(M.specularColorMap.value=y.specularColorMap,i(y.specularColorMap,M.specularColorMapTransform)),y.specularIntensityMap&&(M.specularIntensityMap.value=y.specularIntensityMap,i(y.specularIntensityMap,M.specularIntensityMapTransform))}function T(M,y){y.matcap&&(M.matcap.value=y.matcap)}function A(M,y){const N=e.get(y).light;M.referencePosition.value.setFromMatrixPosition(N.matrixWorld),M.nearDistance.value=N.shadow.camera.near,M.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function EC(o,e,i,s){let l={},c={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function g(N,O){const D=O.program;s.uniformBlockBinding(N,D)}function p(N,O){let D=l[N.id];D===void 0&&(T(N),D=x(N),l[N.id]=D,N.addEventListener("dispose",M));const F=O.program;s.updateUBOMapping(N,F);const z=e.render.frame;c[N.id]!==z&&(v(N),c[N.id]=z)}function x(N){const O=m();N.__bindingPointIndex=O;const D=o.createBuffer(),F=N.__size,z=N.usage;return o.bindBuffer(o.UNIFORM_BUFFER,D),o.bufferData(o.UNIFORM_BUFFER,F,z),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,O,D),D}function m(){for(let N=0;N<d;N++)if(h.indexOf(N)===-1)return h.push(N),N;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(N){const O=l[N.id],D=N.uniforms,F=N.__cache;o.bindBuffer(o.UNIFORM_BUFFER,O);for(let z=0,P=D.length;z<P;z++){const G=Array.isArray(D[z])?D[z]:[D[z]];for(let w=0,C=G.length;w<C;w++){const V=G[w];if(S(V,z,w,F)===!0){const J=V.__offset,rt=Array.isArray(V.value)?V.value:[V.value];let ct=0;for(let ft=0;ft<rt.length;ft++){const k=rt[ft],ut=A(k);typeof k=="number"||typeof k=="boolean"?(V.__data[0]=k,o.bufferSubData(o.UNIFORM_BUFFER,J+ct,V.__data)):k.isMatrix3?(V.__data[0]=k.elements[0],V.__data[1]=k.elements[1],V.__data[2]=k.elements[2],V.__data[3]=0,V.__data[4]=k.elements[3],V.__data[5]=k.elements[4],V.__data[6]=k.elements[5],V.__data[7]=0,V.__data[8]=k.elements[6],V.__data[9]=k.elements[7],V.__data[10]=k.elements[8],V.__data[11]=0):(k.toArray(V.__data,ct),ct+=ut.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,J,V.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function S(N,O,D,F){const z=N.value,P=O+"_"+D;if(F[P]===void 0)return typeof z=="number"||typeof z=="boolean"?F[P]=z:F[P]=z.clone(),!0;{const G=F[P];if(typeof z=="number"||typeof z=="boolean"){if(G!==z)return F[P]=z,!0}else if(G.equals(z)===!1)return G.copy(z),!0}return!1}function T(N){const O=N.uniforms;let D=0;const F=16;for(let P=0,G=O.length;P<G;P++){const w=Array.isArray(O[P])?O[P]:[O[P]];for(let C=0,V=w.length;C<V;C++){const J=w[C],rt=Array.isArray(J.value)?J.value:[J.value];for(let ct=0,ft=rt.length;ct<ft;ct++){const k=rt[ct],ut=A(k),K=D%F,vt=K%ut.boundary,yt=K+vt;D+=vt,yt!==0&&F-yt<ut.storage&&(D+=F-yt),J.__data=new Float32Array(ut.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=D,D+=ut.storage}}}const z=D%F;return z>0&&(D+=F-z),N.__size=D,N.__cache={},this}function A(N){const O={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(O.boundary=4,O.storage=4):N.isVector2?(O.boundary=8,O.storage=8):N.isVector3||N.isColor?(O.boundary=16,O.storage=12):N.isVector4?(O.boundary=16,O.storage=16):N.isMatrix3?(O.boundary=48,O.storage=48):N.isMatrix4?(O.boundary=64,O.storage=64):N.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",N),O}function M(N){const O=N.target;O.removeEventListener("dispose",M);const D=h.indexOf(O.__bindingPointIndex);h.splice(D,1),o.deleteBuffer(l[O.id]),delete l[O.id],delete c[O.id]}function y(){for(const N in l)o.deleteBuffer(l[N]);h=[],l={},c={}}return{bind:g,update:p,dispose:y}}class TC{constructor(e={}){const{canvas:i=eT(),context:s=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:g=!0,preserveDrawingBuffer:p=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:v=!1}=e;this.isWebGLRenderer=!0;let S;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=s.getContextAttributes().alpha}else S=h;const T=new Uint32Array(4),A=new Int32Array(4);let M=null,y=null;const N=[],O=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=_s,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let F=!1;this._outputColorSpace=Ai;let z=0,P=0,G=null,w=-1,C=null;const V=new ln,J=new ln;let rt=null;const ct=new xe(0);let ft=0,k=i.width,ut=i.height,K=1,vt=null,yt=null;const Gt=new ln(0,0,k,ut),re=new ln(0,0,k,ut);let Ae=!1;const B=new im;let ht=!1,tt=!1;const st=new an,Mt=new et,Nt=new ln,Rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Et=!1;function qt(){return G===null?K:1}let I=s;function Ge(R,Z){return i.getContext(R,Z)}try{const R={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:g,preserveDrawingBuffer:p,powerPreference:x,failIfMajorPerformanceCaveat:m};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Yp}`),i.addEventListener("webglcontextlost",Dt,!1),i.addEventListener("webglcontextrestored",Vt,!1),i.addEventListener("webglcontextcreationerror",St,!1),I===null){const Z="webgl2";if(I=Ge(Z,R),I===null)throw Ge(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let se,Qt,Lt,ie,Ft,oe,qe,Ze,U,b,it,mt,xt,dt,Xt,Ct,Wt,Kt,bt,Ot,ne,Zt,Pt,ce;function X(){se=new OA(I),se.init(),Zt=new gC(I,se),Qt=new RA(I,se,e,Zt),Lt=new pC(I,se),Qt.reversedDepthBuffer&&v&&Lt.buffers.depth.setReversed(!0),ie=new IA(I),Ft=new eC,oe=new mC(I,se,Lt,Ft,Qt,Zt,ie),qe=new wA(D),Ze=new LA(D),U=new XT(I),Pt=new bA(I,U),b=new PA(I,U,ie,Pt),it=new FA(I,b,U,ie),bt=new BA(I,Qt,oe),Ct=new CA(Ft),mt=new tC(D,qe,Ze,se,Qt,Pt,Ct),xt=new MC(D,Ft),dt=new iC,Xt=new uC(se),Kt=new TA(D,qe,Ze,Lt,it,S,g),Wt=new hC(D,it,Qt),ce=new EC(I,ie,Qt,Lt),Ot=new AA(I,se,ie),ne=new zA(I,se,ie),ie.programs=mt.programs,D.capabilities=Qt,D.extensions=se,D.properties=Ft,D.renderLists=dt,D.shadowMap=Wt,D.state=Lt,D.info=ie}X();const At=new yC(D,I);this.xr=At,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const R=se.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=se.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(R){R!==void 0&&(K=R,this.setSize(k,ut,!1))},this.getSize=function(R){return R.set(k,ut)},this.setSize=function(R,Z,ot=!0){if(At.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=R,ut=Z,i.width=Math.floor(R*K),i.height=Math.floor(Z*K),ot===!0&&(i.style.width=R+"px",i.style.height=Z+"px"),this.setViewport(0,0,R,Z)},this.getDrawingBufferSize=function(R){return R.set(k*K,ut*K).floor()},this.setDrawingBufferSize=function(R,Z,ot){k=R,ut=Z,K=ot,i.width=Math.floor(R*ot),i.height=Math.floor(Z*ot),this.setViewport(0,0,R,Z)},this.getCurrentViewport=function(R){return R.copy(V)},this.getViewport=function(R){return R.copy(Gt)},this.setViewport=function(R,Z,ot,lt){R.isVector4?Gt.set(R.x,R.y,R.z,R.w):Gt.set(R,Z,ot,lt),Lt.viewport(V.copy(Gt).multiplyScalar(K).round())},this.getScissor=function(R){return R.copy(re)},this.setScissor=function(R,Z,ot,lt){R.isVector4?re.set(R.x,R.y,R.z,R.w):re.set(R,Z,ot,lt),Lt.scissor(J.copy(re).multiplyScalar(K).round())},this.getScissorTest=function(){return Ae},this.setScissorTest=function(R){Lt.setScissorTest(Ae=R)},this.setOpaqueSort=function(R){vt=R},this.setTransparentSort=function(R){yt=R},this.getClearColor=function(R){return R.copy(Kt.getClearColor())},this.setClearColor=function(){Kt.setClearColor(...arguments)},this.getClearAlpha=function(){return Kt.getClearAlpha()},this.setClearAlpha=function(){Kt.setClearAlpha(...arguments)},this.clear=function(R=!0,Z=!0,ot=!0){let lt=0;if(R){let Q=!1;if(G!==null){const Tt=G.texture.format;Q=Tt===$p||Tt===Jp||Tt===Qp}if(Q){const Tt=G.texture.type,zt=Tt===sa||Tt===ir||Tt===Ml||Tt===El||Tt===Zp||Tt===Kp,Bt=Kt.getClearColor(),wt=Kt.getClearAlpha(),kt=Bt.r,ee=Bt.g,$t=Bt.b;zt?(T[0]=kt,T[1]=ee,T[2]=$t,T[3]=wt,I.clearBufferuiv(I.COLOR,0,T)):(A[0]=kt,A[1]=ee,A[2]=$t,A[3]=wt,I.clearBufferiv(I.COLOR,0,A))}else lt|=I.COLOR_BUFFER_BIT}Z&&(lt|=I.DEPTH_BUFFER_BIT),ot&&(lt|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(lt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Dt,!1),i.removeEventListener("webglcontextrestored",Vt,!1),i.removeEventListener("webglcontextcreationerror",St,!1),Kt.dispose(),dt.dispose(),Xt.dispose(),Ft.dispose(),qe.dispose(),Ze.dispose(),it.dispose(),Pt.dispose(),ce.dispose(),mt.dispose(),At.dispose(),At.removeEventListener("sessionstart",_n),At.removeEventListener("sessionend",On),oa.stop()};function Dt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),F=!0}function Vt(){console.log("THREE.WebGLRenderer: Context Restored."),F=!1;const R=ie.autoReset,Z=Wt.enabled,ot=Wt.autoUpdate,lt=Wt.needsUpdate,Q=Wt.type;X(),ie.autoReset=R,Wt.enabled=Z,Wt.autoUpdate=ot,Wt.needsUpdate=lt,Wt.type=Q}function St(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function _t(R){const Z=R.target;Z.removeEventListener("dispose",_t),Yt(Z)}function Yt(R){ue(R),Ft.remove(R)}function ue(R){const Z=Ft.get(R).programs;Z!==void 0&&(Z.forEach(function(ot){mt.releaseProgram(ot)}),R.isShaderMaterial&&mt.releaseShaderCache(R))}this.renderBufferDirect=function(R,Z,ot,lt,Q,Tt){Z===null&&(Z=Rt);const zt=Q.isMesh&&Q.matrixWorld.determinant()<0,Bt=Nl(R,Z,ot,lt,Q);Lt.setMaterial(lt,zt);let wt=ot.index,kt=1;if(lt.wireframe===!0){if(wt=b.getWireframeAttribute(ot),wt===void 0)return;kt=2}const ee=ot.drawRange,$t=ot.attributes.position;let ve=ee.start*kt,ze=(ee.start+ee.count)*kt;Tt!==null&&(ve=Math.max(ve,Tt.start*kt),ze=Math.min(ze,(Tt.start+Tt.count)*kt)),wt!==null?(ve=Math.max(ve,0),ze=Math.min(ze,wt.count)):$t!=null&&(ve=Math.max(ve,0),ze=Math.min(ze,$t.count));const $e=ze-ve;if($e<0||$e===1/0)return;Pt.setup(Q,lt,Bt,ot,wt);let Le,we=Ot;if(wt!==null&&(Le=U.get(wt),we=ne,we.setIndex(Le)),Q.isMesh)lt.wireframe===!0?(Lt.setLineWidth(lt.wireframeLinewidth*qt()),we.setMode(I.LINES)):we.setMode(I.TRIANGLES);else if(Q.isLine){let te=lt.linewidth;te===void 0&&(te=1),Lt.setLineWidth(te*qt()),Q.isLineSegments?we.setMode(I.LINES):Q.isLineLoop?we.setMode(I.LINE_LOOP):we.setMode(I.LINE_STRIP)}else Q.isPoints?we.setMode(I.POINTS):Q.isSprite&&we.setMode(I.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)Al("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),we.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(se.get("WEBGL_multi_draw"))we.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const te=Q._multiDrawStarts,Oe=Q._multiDrawCounts,ge=Q._multiDrawCount,vn=wt?U.get(wt).bytesPerElement:1,ai=Ft.get(lt).currentProgram.getUniforms();for(let De=0;De<ge;De++)ai.setValue(I,"_gl_DrawID",De),we.render(te[De]/vn,Oe[De])}else if(Q.isInstancedMesh)we.renderInstances(ve,$e,Q.count);else if(ot.isInstancedBufferGeometry){const te=ot._maxInstanceCount!==void 0?ot._maxInstanceCount:1/0,Oe=Math.min(ot.instanceCount,te);we.renderInstances(ve,$e,Oe)}else we.render(ve,$e)};function Ve(R,Z,ot){R.transparent===!0&&R.side===wa&&R.forceSinglePass===!1?(R.side=ni,R.needsUpdate=!0,mi(R,Z,ot),R.side=vs,R.needsUpdate=!0,mi(R,Z,ot),R.side=wa):mi(R,Z,ot)}this.compile=function(R,Z,ot=null){ot===null&&(ot=R),y=Xt.get(ot),y.init(Z),O.push(y),ot.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Z.layers)&&(y.pushLight(Q),Q.castShadow&&y.pushShadow(Q))}),R!==ot&&R.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Z.layers)&&(y.pushLight(Q),Q.castShadow&&y.pushShadow(Q))}),y.setupLights();const lt=new Set;return R.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const Tt=Q.material;if(Tt)if(Array.isArray(Tt))for(let zt=0;zt<Tt.length;zt++){const Bt=Tt[zt];Ve(Bt,ot,Q),lt.add(Bt)}else Ve(Tt,ot,Q),lt.add(Tt)}),y=O.pop(),lt},this.compileAsync=function(R,Z,ot=null){const lt=this.compile(R,Z,ot);return new Promise(Q=>{function Tt(){if(lt.forEach(function(zt){Ft.get(zt).currentProgram.isReady()&&lt.delete(zt)}),lt.size===0){Q(R);return}setTimeout(Tt,10)}se.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let Ee=null;function en(R){Ee&&Ee(R)}function _n(){oa.stop()}function On(){oa.start()}const oa=new ly;oa.setAnimationLoop(en),typeof self<"u"&&oa.setContext(self),this.setAnimationLoop=function(R){Ee=R,At.setAnimationLoop(R),R===null?oa.stop():oa.start()},At.addEventListener("sessionstart",_n),At.addEventListener("sessionend",On),this.render=function(R,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),At.enabled===!0&&At.isPresenting===!0&&(At.cameraAutoUpdate===!0&&At.updateCamera(Z),Z=At.getCamera()),R.isScene===!0&&R.onBeforeRender(D,R,Z,G),y=Xt.get(R,O.length),y.init(Z),O.push(y),st.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),B.setFromProjectionMatrix(st,ia,Z.reversedDepth),tt=this.localClippingEnabled,ht=Ct.init(this.clippingPlanes,tt),M=dt.get(R,N.length),M.init(),N.push(M),At.enabled===!0&&At.isPresenting===!0){const Tt=D.xr.getDepthSensingMesh();Tt!==null&&Eo(Tt,Z,-1/0,D.sortObjects)}Eo(R,Z,0,D.sortObjects),M.finish(),D.sortObjects===!0&&M.sort(vt,yt),Et=At.enabled===!1||At.isPresenting===!1||At.hasDepthSensing()===!1,Et&&Kt.addToRenderList(M,R),this.info.render.frame++,ht===!0&&Ct.beginShadows();const ot=y.state.shadowsArray;Wt.render(ot,R,Z),ht===!0&&Ct.endShadows(),this.info.autoReset===!0&&this.info.reset();const lt=M.opaque,Q=M.transmissive;if(y.setupLights(),Z.isArrayCamera){const Tt=Z.cameras;if(Q.length>0)for(let zt=0,Bt=Tt.length;zt<Bt;zt++){const wt=Tt[zt];ys(lt,Q,R,wt)}Et&&Kt.render(R);for(let zt=0,Bt=Tt.length;zt<Bt;zt++){const wt=Tt[zt];Ul(M,R,wt,wt.viewport)}}else Q.length>0&&ys(lt,Q,R,Z),Et&&Kt.render(R),Ul(M,R,Z);G!==null&&P===0&&(oe.updateMultisampleRenderTarget(G),oe.updateRenderTargetMipmap(G)),R.isScene===!0&&R.onAfterRender(D,R,Z),Pt.resetDefaultState(),w=-1,C=null,O.pop(),O.length>0?(y=O[O.length-1],ht===!0&&Ct.setGlobalState(D.clippingPlanes,y.state.camera)):y=null,N.pop(),N.length>0?M=N[N.length-1]:M=null};function Eo(R,Z,ot,lt){if(R.visible===!1)return;if(R.layers.test(Z.layers)){if(R.isGroup)ot=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Z);else if(R.isLight)y.pushLight(R),R.castShadow&&y.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||B.intersectsSprite(R)){lt&&Nt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(st);const zt=it.update(R),Bt=R.material;Bt.visible&&M.push(R,zt,Bt,ot,Nt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||B.intersectsObject(R))){const zt=it.update(R),Bt=R.material;if(lt&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Nt.copy(R.boundingSphere.center)):(zt.boundingSphere===null&&zt.computeBoundingSphere(),Nt.copy(zt.boundingSphere.center)),Nt.applyMatrix4(R.matrixWorld).applyMatrix4(st)),Array.isArray(Bt)){const wt=zt.groups;for(let kt=0,ee=wt.length;kt<ee;kt++){const $t=wt[kt],ve=Bt[$t.materialIndex];ve&&ve.visible&&M.push(R,zt,ve,ot,Nt.z,$t)}}else Bt.visible&&M.push(R,zt,Bt,ot,Nt.z,null)}}const Tt=R.children;for(let zt=0,Bt=Tt.length;zt<Bt;zt++)Eo(Tt[zt],Z,ot,lt)}function Ul(R,Z,ot,lt){const Q=R.opaque,Tt=R.transmissive,zt=R.transparent;y.setupLightsView(ot),ht===!0&&Ct.setGlobalState(D.clippingPlanes,ot),lt&&Lt.viewport(V.copy(lt)),Q.length>0&&la(Q,Z,ot),Tt.length>0&&la(Tt,Z,ot),zt.length>0&&la(zt,Z,ot),Lt.buffers.depth.setTest(!0),Lt.buffers.depth.setMask(!0),Lt.buffers.color.setMask(!0),Lt.setPolygonOffset(!1)}function ys(R,Z,ot,lt){if((ot.isScene===!0?ot.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[lt.id]===void 0&&(y.state.transmissionRenderTarget[lt.id]=new sr(1,1,{generateMipmaps:!0,type:se.has("EXT_color_buffer_half_float")||se.has("EXT_color_buffer_float")?Rl:sa,minFilter:er,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ne.workingColorSpace}));const Tt=y.state.transmissionRenderTarget[lt.id],zt=lt.viewport||V;Tt.setSize(zt.z*D.transmissionResolutionScale,zt.w*D.transmissionResolutionScale);const Bt=D.getRenderTarget(),wt=D.getActiveCubeFace(),kt=D.getActiveMipmapLevel();D.setRenderTarget(Tt),D.getClearColor(ct),ft=D.getClearAlpha(),ft<1&&D.setClearColor(16777215,.5),D.clear(),Et&&Kt.render(ot);const ee=D.toneMapping;D.toneMapping=_s;const $t=lt.viewport;if(lt.viewport!==void 0&&(lt.viewport=void 0),y.setupLightsView(lt),ht===!0&&Ct.setGlobalState(D.clippingPlanes,lt),la(R,ot,lt),oe.updateMultisampleRenderTarget(Tt),oe.updateRenderTargetMipmap(Tt),se.has("WEBGL_multisampled_render_to_texture")===!1){let ve=!1;for(let ze=0,$e=Z.length;ze<$e;ze++){const Le=Z[ze],we=Le.object,te=Le.geometry,Oe=Le.material,ge=Le.group;if(Oe.side===wa&&we.layers.test(lt.layers)){const vn=Oe.side;Oe.side=ni,Oe.needsUpdate=!0,Ss(we,ot,lt,te,Oe,ge),Oe.side=vn,Oe.needsUpdate=!0,ve=!0}}ve===!0&&(oe.updateMultisampleRenderTarget(Tt),oe.updateRenderTargetMipmap(Tt))}D.setRenderTarget(Bt,wt,kt),D.setClearColor(ct,ft),$t!==void 0&&(lt.viewport=$t),D.toneMapping=ee}function la(R,Z,ot){const lt=Z.isScene===!0?Z.overrideMaterial:null;for(let Q=0,Tt=R.length;Q<Tt;Q++){const zt=R[Q],Bt=zt.object,wt=zt.geometry,kt=zt.group;let ee=zt.material;ee.allowOverride===!0&&lt!==null&&(ee=lt),Bt.layers.test(ot.layers)&&Ss(Bt,Z,ot,wt,ee,kt)}}function Ss(R,Z,ot,lt,Q,Tt){R.onBeforeRender(D,Z,ot,lt,Q,Tt),R.modelViewMatrix.multiplyMatrices(ot.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Q.onBeforeRender(D,Z,ot,lt,R,Tt),Q.transparent===!0&&Q.side===wa&&Q.forceSinglePass===!1?(Q.side=ni,Q.needsUpdate=!0,D.renderBufferDirect(ot,Z,lt,Q,R,Tt),Q.side=vs,Q.needsUpdate=!0,D.renderBufferDirect(ot,Z,lt,Q,R,Tt),Q.side=wa):D.renderBufferDirect(ot,Z,lt,Q,R,Tt),R.onAfterRender(D,Z,ot,lt,Q,Tt)}function mi(R,Z,ot){Z.isScene!==!0&&(Z=Rt);const lt=Ft.get(R),Q=y.state.lights,Tt=y.state.shadowsArray,zt=Q.state.version,Bt=mt.getParameters(R,Q.state,Tt,Z,ot),wt=mt.getProgramCacheKey(Bt);let kt=lt.programs;lt.environment=R.isMeshStandardMaterial?Z.environment:null,lt.fog=Z.fog,lt.envMap=(R.isMeshStandardMaterial?Ze:qe).get(R.envMap||lt.environment),lt.envMapRotation=lt.environment!==null&&R.envMap===null?Z.environmentRotation:R.envMapRotation,kt===void 0&&(R.addEventListener("dispose",_t),kt=new Map,lt.programs=kt);let ee=kt.get(wt);if(ee!==void 0){if(lt.currentProgram===ee&&lt.lightsStateVersion===zt)return La(R,Bt),ee}else Bt.uniforms=mt.getUniforms(R),R.onBeforeCompile(Bt,D),ee=mt.acquireProgram(Bt,wt),kt.set(wt,ee),lt.uniforms=Bt.uniforms;const $t=lt.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&($t.clippingPlanes=Ct.uniform),La(R,Bt),lt.needsLights=Ll(R),lt.lightsStateVersion=zt,lt.needsLights&&($t.ambientLightColor.value=Q.state.ambient,$t.lightProbe.value=Q.state.probe,$t.directionalLights.value=Q.state.directional,$t.directionalLightShadows.value=Q.state.directionalShadow,$t.spotLights.value=Q.state.spot,$t.spotLightShadows.value=Q.state.spotShadow,$t.rectAreaLights.value=Q.state.rectArea,$t.ltc_1.value=Q.state.rectAreaLTC1,$t.ltc_2.value=Q.state.rectAreaLTC2,$t.pointLights.value=Q.state.point,$t.pointLightShadows.value=Q.state.pointShadow,$t.hemisphereLights.value=Q.state.hemi,$t.directionalShadowMap.value=Q.state.directionalShadowMap,$t.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,$t.spotShadowMap.value=Q.state.spotShadowMap,$t.spotLightMatrix.value=Q.state.spotLightMatrix,$t.spotLightMap.value=Q.state.spotLightMap,$t.pointShadowMap.value=Q.state.pointShadowMap,$t.pointShadowMatrix.value=Q.state.pointShadowMatrix),lt.currentProgram=ee,lt.uniformsList=null,ee}function Ms(R){if(R.uniformsList===null){const Z=R.currentProgram.getUniforms();R.uniformsList=Uc.seqWithValue(Z.seq,R.uniforms)}return R.uniformsList}function La(R,Z){const ot=Ft.get(R);ot.outputColorSpace=Z.outputColorSpace,ot.batching=Z.batching,ot.batchingColor=Z.batchingColor,ot.instancing=Z.instancing,ot.instancingColor=Z.instancingColor,ot.instancingMorph=Z.instancingMorph,ot.skinning=Z.skinning,ot.morphTargets=Z.morphTargets,ot.morphNormals=Z.morphNormals,ot.morphColors=Z.morphColors,ot.morphTargetsCount=Z.morphTargetsCount,ot.numClippingPlanes=Z.numClippingPlanes,ot.numIntersection=Z.numClipIntersection,ot.vertexAlphas=Z.vertexAlphas,ot.vertexTangents=Z.vertexTangents,ot.toneMapping=Z.toneMapping}function Nl(R,Z,ot,lt,Q){Z.isScene!==!0&&(Z=Rt),oe.resetTextureUnits();const Tt=Z.fog,zt=lt.isMeshStandardMaterial?Z.environment:null,Bt=G===null?D.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:vo,wt=(lt.isMeshStandardMaterial?Ze:qe).get(lt.envMap||zt),kt=lt.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,ee=!!ot.attributes.tangent&&(!!lt.normalMap||lt.anisotropy>0),$t=!!ot.morphAttributes.position,ve=!!ot.morphAttributes.normal,ze=!!ot.morphAttributes.color;let $e=_s;lt.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&($e=D.toneMapping);const Le=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,we=Le!==void 0?Le.length:0,te=Ft.get(lt),Oe=y.state.lights;if(ht===!0&&(tt===!0||R!==C)){const sn=R===C&&lt.id===w;Ct.setState(lt,R,sn)}let ge=!1;lt.version===te.__version?(te.needsLights&&te.lightsStateVersion!==Oe.state.version||te.outputColorSpace!==Bt||Q.isBatchedMesh&&te.batching===!1||!Q.isBatchedMesh&&te.batching===!0||Q.isBatchedMesh&&te.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&te.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&te.instancing===!1||!Q.isInstancedMesh&&te.instancing===!0||Q.isSkinnedMesh&&te.skinning===!1||!Q.isSkinnedMesh&&te.skinning===!0||Q.isInstancedMesh&&te.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&te.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&te.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&te.instancingMorph===!1&&Q.morphTexture!==null||te.envMap!==wt||lt.fog===!0&&te.fog!==Tt||te.numClippingPlanes!==void 0&&(te.numClippingPlanes!==Ct.numPlanes||te.numIntersection!==Ct.numIntersection)||te.vertexAlphas!==kt||te.vertexTangents!==ee||te.morphTargets!==$t||te.morphNormals!==ve||te.morphColors!==ze||te.toneMapping!==$e||te.morphTargetsCount!==we)&&(ge=!0):(ge=!0,te.__version=lt.version);let vn=te.currentProgram;ge===!0&&(vn=mi(lt,Z,Q));let ai=!1,De=!1,Oa=!1;const Ke=vn.getUniforms(),Hn=te.uniforms;if(Lt.useProgram(vn.program)&&(ai=!0,De=!0,Oa=!0),lt.id!==w&&(w=lt.id,De=!0),ai||C!==R){Lt.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Ke.setValue(I,"projectionMatrix",R.projectionMatrix),Ke.setValue(I,"viewMatrix",R.matrixWorldInverse);const Pn=Ke.map.cameraPosition;Pn!==void 0&&Pn.setValue(I,Mt.setFromMatrixPosition(R.matrixWorld)),Qt.logarithmicDepthBuffer&&Ke.setValue(I,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(lt.isMeshPhongMaterial||lt.isMeshToonMaterial||lt.isMeshLambertMaterial||lt.isMeshBasicMaterial||lt.isMeshStandardMaterial||lt.isShaderMaterial)&&Ke.setValue(I,"isOrthographic",R.isOrthographicCamera===!0),C!==R&&(C=R,De=!0,Oa=!0)}if(Q.isSkinnedMesh){Ke.setOptional(I,Q,"bindMatrix"),Ke.setOptional(I,Q,"bindMatrixInverse");const sn=Q.skeleton;sn&&(sn.boneTexture===null&&sn.computeBoneTexture(),Ke.setValue(I,"boneTexture",sn.boneTexture,oe))}Q.isBatchedMesh&&(Ke.setOptional(I,Q,"batchingTexture"),Ke.setValue(I,"batchingTexture",Q._matricesTexture,oe),Ke.setOptional(I,Q,"batchingIdTexture"),Ke.setValue(I,"batchingIdTexture",Q._indirectTexture,oe),Ke.setOptional(I,Q,"batchingColorTexture"),Q._colorsTexture!==null&&Ke.setValue(I,"batchingColorTexture",Q._colorsTexture,oe));const cn=ot.morphAttributes;if((cn.position!==void 0||cn.normal!==void 0||cn.color!==void 0)&&bt.update(Q,ot,vn),(De||te.receiveShadow!==Q.receiveShadow)&&(te.receiveShadow=Q.receiveShadow,Ke.setValue(I,"receiveShadow",Q.receiveShadow)),lt.isMeshGouraudMaterial&&lt.envMap!==null&&(Hn.envMap.value=wt,Hn.flipEnvMap.value=wt.isCubeTexture&&wt.isRenderTargetTexture===!1?-1:1),lt.isMeshStandardMaterial&&lt.envMap===null&&Z.environment!==null&&(Hn.envMapIntensity.value=Z.environmentIntensity),De&&(Ke.setValue(I,"toneMappingExposure",D.toneMappingExposure),te.needsLights&&kc(Hn,Oa),Tt&&lt.fog===!0&&xt.refreshFogUniforms(Hn,Tt),xt.refreshMaterialUniforms(Hn,lt,K,ut,y.state.transmissionRenderTarget[R.id]),Uc.upload(I,Ms(te),Hn,oe)),lt.isShaderMaterial&&lt.uniformsNeedUpdate===!0&&(Uc.upload(I,Ms(te),Hn,oe),lt.uniformsNeedUpdate=!1),lt.isSpriteMaterial&&Ke.setValue(I,"center",Q.center),Ke.setValue(I,"modelViewMatrix",Q.modelViewMatrix),Ke.setValue(I,"normalMatrix",Q.normalMatrix),Ke.setValue(I,"modelMatrix",Q.matrixWorld),lt.isShaderMaterial||lt.isRawShaderMaterial){const sn=lt.uniformsGroups;for(let Pn=0,lr=sn.length;Pn<lr;Pn++){const Vi=sn[Pn];ce.update(Vi,vn),ce.bind(Vi,vn)}}return vn}function kc(R,Z){R.ambientLightColor.needsUpdate=Z,R.lightProbe.needsUpdate=Z,R.directionalLights.needsUpdate=Z,R.directionalLightShadows.needsUpdate=Z,R.pointLights.needsUpdate=Z,R.pointLightShadows.needsUpdate=Z,R.spotLights.needsUpdate=Z,R.spotLightShadows.needsUpdate=Z,R.rectAreaLights.needsUpdate=Z,R.hemisphereLights.needsUpdate=Z}function Ll(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(R,Z,ot){const lt=Ft.get(R);lt.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,lt.__autoAllocateDepthBuffer===!1&&(lt.__useRenderToTexture=!1),Ft.get(R.texture).__webglTexture=Z,Ft.get(R.depthTexture).__webglTexture=lt.__autoAllocateDepthBuffer?void 0:ot,lt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,Z){const ot=Ft.get(R);ot.__webglFramebuffer=Z,ot.__useDefaultFramebuffer=Z===void 0};const To=I.createFramebuffer();this.setRenderTarget=function(R,Z=0,ot=0){G=R,z=Z,P=ot;let lt=!0,Q=null,Tt=!1,zt=!1;if(R){const wt=Ft.get(R);if(wt.__useDefaultFramebuffer!==void 0)Lt.bindFramebuffer(I.FRAMEBUFFER,null),lt=!1;else if(wt.__webglFramebuffer===void 0)oe.setupRenderTarget(R);else if(wt.__hasExternalTextures)oe.rebindTextures(R,Ft.get(R.texture).__webglTexture,Ft.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const $t=R.depthTexture;if(wt.__boundDepthTexture!==$t){if($t!==null&&Ft.has($t)&&(R.width!==$t.image.width||R.height!==$t.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");oe.setupDepthRenderbuffer(R)}}const kt=R.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(zt=!0);const ee=Ft.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ee[Z])?Q=ee[Z][ot]:Q=ee[Z],Tt=!0):R.samples>0&&oe.useMultisampledRTT(R)===!1?Q=Ft.get(R).__webglMultisampledFramebuffer:Array.isArray(ee)?Q=ee[ot]:Q=ee,V.copy(R.viewport),J.copy(R.scissor),rt=R.scissorTest}else V.copy(Gt).multiplyScalar(K).floor(),J.copy(re).multiplyScalar(K).floor(),rt=Ae;if(ot!==0&&(Q=To),Lt.bindFramebuffer(I.FRAMEBUFFER,Q)&&lt&&Lt.drawBuffers(R,Q),Lt.viewport(V),Lt.scissor(J),Lt.setScissorTest(rt),Tt){const wt=Ft.get(R.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+Z,wt.__webglTexture,ot)}else if(zt){const wt=Z;for(let kt=0;kt<R.textures.length;kt++){const ee=Ft.get(R.textures[kt]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+kt,ee.__webglTexture,ot,wt)}}else if(R!==null&&ot!==0){const wt=Ft.get(R.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,wt.__webglTexture,ot)}w=-1},this.readRenderTargetPixels=function(R,Z,ot,lt,Q,Tt,zt,Bt=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=Ft.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&zt!==void 0&&(wt=wt[zt]),wt){Lt.bindFramebuffer(I.FRAMEBUFFER,wt);try{const kt=R.textures[Bt],ee=kt.format,$t=kt.type;if(!Qt.textureFormatReadable(ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Qt.textureTypeReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=R.width-lt&&ot>=0&&ot<=R.height-Q&&(R.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Bt),I.readPixels(Z,ot,lt,Q,Zt.convert(ee),Zt.convert($t),Tt))}finally{const kt=G!==null?Ft.get(G).__webglFramebuffer:null;Lt.bindFramebuffer(I.FRAMEBUFFER,kt)}}},this.readRenderTargetPixelsAsync=async function(R,Z,ot,lt,Q,Tt,zt,Bt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=Ft.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&zt!==void 0&&(wt=wt[zt]),wt)if(Z>=0&&Z<=R.width-lt&&ot>=0&&ot<=R.height-Q){Lt.bindFramebuffer(I.FRAMEBUFFER,wt);const kt=R.textures[Bt],ee=kt.format,$t=kt.type;if(!Qt.textureFormatReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Qt.textureTypeReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ve=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,ve),I.bufferData(I.PIXEL_PACK_BUFFER,Tt.byteLength,I.STREAM_READ),R.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Bt),I.readPixels(Z,ot,lt,Q,Zt.convert(ee),Zt.convert($t),0);const ze=G!==null?Ft.get(G).__webglFramebuffer:null;Lt.bindFramebuffer(I.FRAMEBUFFER,ze);const $e=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await nT(I,$e,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,ve),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,Tt),I.deleteBuffer(ve),I.deleteSync($e),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,Z=null,ot=0){const lt=Math.pow(2,-ot),Q=Math.floor(R.image.width*lt),Tt=Math.floor(R.image.height*lt),zt=Z!==null?Z.x:0,Bt=Z!==null?Z.y:0;oe.setTexture2D(R,0),I.copyTexSubImage2D(I.TEXTURE_2D,ot,0,0,zt,Bt,Q,Tt),Lt.unbindTexture()};const Es=I.createFramebuffer(),jc=I.createFramebuffer();this.copyTextureToTexture=function(R,Z,ot=null,lt=null,Q=0,Tt=null){Tt===null&&(Q!==0?(Al("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Tt=Q,Q=0):Tt=0);let zt,Bt,wt,kt,ee,$t,ve,ze,$e;const Le=R.isCompressedTexture?R.mipmaps[Tt]:R.image;if(ot!==null)zt=ot.max.x-ot.min.x,Bt=ot.max.y-ot.min.y,wt=ot.isBox3?ot.max.z-ot.min.z:1,kt=ot.min.x,ee=ot.min.y,$t=ot.isBox3?ot.min.z:0;else{const cn=Math.pow(2,-Q);zt=Math.floor(Le.width*cn),Bt=Math.floor(Le.height*cn),R.isDataArrayTexture?wt=Le.depth:R.isData3DTexture?wt=Math.floor(Le.depth*cn):wt=1,kt=0,ee=0,$t=0}lt!==null?(ve=lt.x,ze=lt.y,$e=lt.z):(ve=0,ze=0,$e=0);const we=Zt.convert(Z.format),te=Zt.convert(Z.type);let Oe;Z.isData3DTexture?(oe.setTexture3D(Z,0),Oe=I.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(oe.setTexture2DArray(Z,0),Oe=I.TEXTURE_2D_ARRAY):(oe.setTexture2D(Z,0),Oe=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,Z.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,Z.unpackAlignment);const ge=I.getParameter(I.UNPACK_ROW_LENGTH),vn=I.getParameter(I.UNPACK_IMAGE_HEIGHT),ai=I.getParameter(I.UNPACK_SKIP_PIXELS),De=I.getParameter(I.UNPACK_SKIP_ROWS),Oa=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Le.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Le.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,kt),I.pixelStorei(I.UNPACK_SKIP_ROWS,ee),I.pixelStorei(I.UNPACK_SKIP_IMAGES,$t);const Ke=R.isDataArrayTexture||R.isData3DTexture,Hn=Z.isDataArrayTexture||Z.isData3DTexture;if(R.isDepthTexture){const cn=Ft.get(R),sn=Ft.get(Z),Pn=Ft.get(cn.__renderTarget),lr=Ft.get(sn.__renderTarget);Lt.bindFramebuffer(I.READ_FRAMEBUFFER,Pn.__webglFramebuffer),Lt.bindFramebuffer(I.DRAW_FRAMEBUFFER,lr.__webglFramebuffer);for(let Vi=0;Vi<wt;Vi++)Ke&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ft.get(R).__webglTexture,Q,$t+Vi),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ft.get(Z).__webglTexture,Tt,$e+Vi)),I.blitFramebuffer(kt,ee,zt,Bt,ve,ze,zt,Bt,I.DEPTH_BUFFER_BIT,I.NEAREST);Lt.bindFramebuffer(I.READ_FRAMEBUFFER,null),Lt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(Q!==0||R.isRenderTargetTexture||Ft.has(R)){const cn=Ft.get(R),sn=Ft.get(Z);Lt.bindFramebuffer(I.READ_FRAMEBUFFER,Es),Lt.bindFramebuffer(I.DRAW_FRAMEBUFFER,jc);for(let Pn=0;Pn<wt;Pn++)Ke?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,cn.__webglTexture,Q,$t+Pn):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,cn.__webglTexture,Q),Hn?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,sn.__webglTexture,Tt,$e+Pn):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,sn.__webglTexture,Tt),Q!==0?I.blitFramebuffer(kt,ee,zt,Bt,ve,ze,zt,Bt,I.COLOR_BUFFER_BIT,I.NEAREST):Hn?I.copyTexSubImage3D(Oe,Tt,ve,ze,$e+Pn,kt,ee,zt,Bt):I.copyTexSubImage2D(Oe,Tt,ve,ze,kt,ee,zt,Bt);Lt.bindFramebuffer(I.READ_FRAMEBUFFER,null),Lt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Hn?R.isDataTexture||R.isData3DTexture?I.texSubImage3D(Oe,Tt,ve,ze,$e,zt,Bt,wt,we,te,Le.data):Z.isCompressedArrayTexture?I.compressedTexSubImage3D(Oe,Tt,ve,ze,$e,zt,Bt,wt,we,Le.data):I.texSubImage3D(Oe,Tt,ve,ze,$e,zt,Bt,wt,we,te,Le):R.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,Tt,ve,ze,zt,Bt,we,te,Le.data):R.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,Tt,ve,ze,Le.width,Le.height,we,Le.data):I.texSubImage2D(I.TEXTURE_2D,Tt,ve,ze,zt,Bt,we,te,Le);I.pixelStorei(I.UNPACK_ROW_LENGTH,ge),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,vn),I.pixelStorei(I.UNPACK_SKIP_PIXELS,ai),I.pixelStorei(I.UNPACK_SKIP_ROWS,De),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Oa),Tt===0&&Z.generateMipmaps&&I.generateMipmap(Oe),Lt.unbindTexture()},this.initRenderTarget=function(R){Ft.get(R).__webglFramebuffer===void 0&&oe.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?oe.setTextureCube(R,0):R.isData3DTexture?oe.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?oe.setTexture2DArray(R,0):oe.setTexture2D(R,0),Lt.unbindTexture()},this.resetState=function(){z=0,P=0,G=null,Lt.reset(),Pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ia}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Ne._getDrawingBufferColorSpace(e),i.unpackColorSpace=Ne._getUnpackColorSpace()}}const Ax={type:"change"},om={type:"start"},dy={type:"end"},bc=new em,Rx=new ps,bC=Math.cos(70*tT.DEG2RAD),yn=new et,$n=2*Math.PI,je={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ep=1e-6;class AC extends GT{constructor(e,i=null){super(e,i),this.state=je.NONE,this.target=new et,this.cursor=new et,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:fo.ROTATE,MIDDLE:fo.DOLLY,RIGHT:fo.PAN},this.touches={ONE:uo.ROTATE,TWO:uo.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new et,this._lastQuaternion=new ar,this._lastTargetPosition=new et,this._quat=new ar().setFromUnitVectors(e.up,new et(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new tx,this._sphericalDelta=new tx,this._scale=1,this._panOffset=new et,this._rotateStart=new fe,this._rotateEnd=new fe,this._rotateDelta=new fe,this._panStart=new fe,this._panEnd=new fe,this._panDelta=new fe,this._dollyStart=new fe,this._dollyEnd=new fe,this._dollyDelta=new fe,this._dollyDirection=new et,this._mouse=new fe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=CC.bind(this),this._onPointerDown=RC.bind(this),this._onPointerUp=wC.bind(this),this._onContextMenu=zC.bind(this),this._onMouseWheel=NC.bind(this),this._onKeyDown=LC.bind(this),this._onTouchStart=OC.bind(this),this._onTouchMove=PC.bind(this),this._onMouseDown=DC.bind(this),this._onMouseMove=UC.bind(this),this._interceptControlDown=IC.bind(this),this._interceptControlUp=BC.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Ax),this.update(),this.state=je.NONE}update(e=null){const i=this.object.position;yn.copy(i).sub(this.target),yn.applyQuaternion(this._quat),this._spherical.setFromVector3(yn),this.autoRotate&&this.state===je.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=$n:s>Math.PI&&(s-=$n),l<-Math.PI?l+=$n:l>Math.PI&&(l-=$n),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const h=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=h!=this._spherical.radius}if(yn.setFromSpherical(this._spherical),yn.applyQuaternion(this._quatInverse),i.copy(this.target).add(yn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let h=null;if(this.object.isPerspectiveCamera){const d=yn.length();h=this._clampDistance(d*this._scale);const g=d-h;this.object.position.addScaledVector(this._dollyDirection,g),this.object.updateMatrixWorld(),c=!!g}else if(this.object.isOrthographicCamera){const d=new et(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const g=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=g!==this.object.zoom;const p=new et(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(d),this.object.updateMatrixWorld(),h=yn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;h!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(h).add(this.object.position):(bc.origin.copy(this.object.position),bc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(bc.direction))<bC?this.object.lookAt(this.target):(Rx.setFromNormalAndCoplanarPoint(this.object.up,this.target),bc.intersectPlane(Rx,this.target))))}else if(this.object.isOrthographicCamera){const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),h!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>ep||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ep||this._lastTargetPosition.distanceToSquared(this.target)>ep?(this.dispatchEvent(Ax),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?$n/60*this.autoRotateSpeed*e:$n/60/60*this.autoRotateSpeed}_getZoomScale(e){const i=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,i){yn.setFromMatrixColumn(i,0),yn.multiplyScalar(-e),this._panOffset.add(yn)}_panUp(e,i){this.screenSpacePanning===!0?yn.setFromMatrixColumn(i,1):(yn.setFromMatrixColumn(i,0),yn.crossVectors(this.object.up,yn)),yn.multiplyScalar(e),this._panOffset.add(yn)}_pan(e,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;yn.copy(l).sub(this.target);let c=yn.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*c/s.clientHeight,this.object.matrix),this._panUp(2*i*c/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=e-s.left,c=i-s.top,h=s.width,d=s.height;this._mouse.x=l/h*2-1,this._mouse.y=-(c/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft($n*this._rotateDelta.x/i.clientHeight),this._rotateUp($n*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let i=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp($n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-$n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft($n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-$n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(e){const i=this._getSecondPointerPosition(e),s=e.pageX-i.x,l=e.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const s=this._getSecondPointerPosition(e),l=.5*(e.pageX+s.x),c=.5*(e.pageY+s.y);this._rotateEnd.set(l,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft($n*this._rotateDelta.x/i.clientHeight),this._rotateUp($n*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const i=this._getSecondPointerPosition(e),s=e.pageX-i.x,l=e.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const h=(e.pageX+i.x)*.5,d=(e.pageY+i.y)*.5;this._updateZoomParameters(h,d)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==e.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(e){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==e.pointerId)return!0;return!1}_trackPointer(e){let i=this._pointerPositions[e.pointerId];i===void 0&&(i=new fe,this._pointerPositions[e.pointerId]=i),i.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const i=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(e){const i=e.deltaMode,s={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function RC(o){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(o.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(o)&&(this._addPointer(o),o.pointerType==="touch"?this._onTouchStart(o):this._onMouseDown(o)))}function CC(o){this.enabled!==!1&&(o.pointerType==="touch"?this._onTouchMove(o):this._onMouseMove(o))}function wC(o){switch(this._removePointer(o),this._pointers.length){case 0:this.domElement.releasePointerCapture(o.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(dy),this.state=je.NONE;break;case 1:const e=this._pointers[0],i=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:i.x,pageY:i.y});break}}function DC(o){let e;switch(o.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case fo.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(o),this.state=je.DOLLY;break;case fo.ROTATE:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=je.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=je.ROTATE}break;case fo.PAN:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=je.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=je.PAN}break;default:this.state=je.NONE}this.state!==je.NONE&&this.dispatchEvent(om)}function UC(o){switch(this.state){case je.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(o);break;case je.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(o);break;case je.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(o);break}}function NC(o){this.enabled===!1||this.enableZoom===!1||this.state!==je.NONE||(o.preventDefault(),this.dispatchEvent(om),this._handleMouseWheel(this._customWheelEvent(o)),this.dispatchEvent(dy))}function LC(o){this.enabled!==!1&&this._handleKeyDown(o)}function OC(o){switch(this._trackPointer(o),this._pointers.length){case 1:switch(this.touches.ONE){case uo.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(o),this.state=je.TOUCH_ROTATE;break;case uo.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(o),this.state=je.TOUCH_PAN;break;default:this.state=je.NONE}break;case 2:switch(this.touches.TWO){case uo.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(o),this.state=je.TOUCH_DOLLY_PAN;break;case uo.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(o),this.state=je.TOUCH_DOLLY_ROTATE;break;default:this.state=je.NONE}break;default:this.state=je.NONE}this.state!==je.NONE&&this.dispatchEvent(om)}function PC(o){switch(this._trackPointer(o),this.state){case je.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(o),this.update();break;case je.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(o),this.update();break;case je.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(o),this.update();break;case je.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(o),this.update();break;default:this.state=je.NONE}}function zC(o){this.enabled!==!1&&o.preventDefault()}function IC(o){o.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function BC(o){o.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Cx=o=>{let e;const i=new Set,s=(p,x)=>{const m=typeof p=="function"?p(e):p;if(!Object.is(m,e)){const v=e;e=x??(typeof m!="object"||m===null)?m:Object.assign({},e,m),i.forEach(S=>S(e,v))}},l=()=>e,d={setState:s,getState:l,getInitialState:()=>g,subscribe:p=>(i.add(p),()=>i.delete(p))},g=e=o(s,l,d);return d},FC=(o=>o?Cx(o):Cx),HC=o=>o;function GC(o,e=HC){const i=tc.useSyncExternalStore(o.subscribe,tc.useCallback(()=>e(o.getState()),[o,e]),tc.useCallback(()=>e(o.getInitialState()),[o,e]));return tc.useDebugValue(i),i}const wx=o=>{const e=FC(o),i=s=>GC(e,s);return Object.assign(i,e),i},VC=(o=>o?wx(o):wx);let XC=0;const Xc=(o="n")=>`${o}${(++XC).toString(36)}${Date.now().toString(36).slice(-3)}`,kC=()=>({type:"hinge",axis:[0,1,0],range:[-90,90],limited:!0,damping:.1,actuator:"torque",maxForce:5,gain:10}),py=(o="box")=>({id:Xc("s"),type:o,size:o==="box"?[.2,.1,.05]:o==="sphere"?[.05,0,0]:[.03,.2,0],pos:[0,0,0],euler:[0,0,0],mass:.2,color:"#9aa3b2"}),jC=(o,e=[0,0,0],i=!0)=>({id:Xc("b"),name:o,pos:e,shapes:[py()],joint:i?kC():void 0,children:[]});function or(o,e,i=null,s=0){e(o,i,s),o.children.forEach(l=>or(l,e,o,s+1))}function Qs(o,e){let i;return or(o,s=>{s.id===e&&(i=s)}),i}function qC(o,e){let i=null;return or(o,(s,l)=>{s.id===e&&(i=l)}),i}function my(o){let e=0;return or(o,i=>i.shapes.forEach(s=>{e+=s.mass})),e}const We=o=>Math.abs(o)<1e-9?"0":+o.toFixed(5)+"",Fc=o=>o.map(We).join(" "),ta=o=>o.replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]);function YC(o){const e=/^#?([0-9a-f]{6})$/i.exec(o.trim());if(!e)return"0.6 0.64 0.7 1";const i=parseInt(e[1],16);return[i>>16&255,i>>8&255,i&255].map(s=>We(s/255)).join(" ")+" 1"}function WC(o,e,i){const s=`${e}/${i}`,l=`name="${ta(s)}" pos="${Fc(o.pos)}" euler="${Fc(o.euler)}" mass="${We(Math.max(o.mass,.001))}" rgba="${YC(o.color)}"`;switch(o.type){case"box":return`<geom type="box" ${l} size="${We(o.size[0]/2)} ${We(o.size[1]/2)} ${We(o.size[2]/2)}"/>`;case"sphere":return`<geom type="sphere" ${l} size="${We(o.size[0])}"/>`;case"cylinder":return`<geom type="cylinder" ${l} size="${We(o.size[0])} ${We(o.size[1]/2)}"/>`;case"capsule":return`<geom type="capsule" ${l} size="${We(o.size[0])} ${We(o.size[1]/2)}"/>`}}function ZC(o,e){const i=o.type==="hinge"?`${We(o.range[0])} ${We(o.range[1])}`:`${We(o.range[0])} ${We(o.range[1])}`,s=o.limited?`limited="true" range="${i}"`:'limited="false"';return`<joint name="${ta(e)}" type="${o.type}" axis="${Fc(o.axis)}" ${s} damping="${We(o.damping)}"/>`}function gy(o){const e=[],i=[],s=new Set,l=v=>{let S=(v.name||"body").replace(/[^\w\- ]/g,"").trim()||"body",T=S,A=2;for(;s.has(T);)T=`${S}_${A++}`;return s.add(T),T},c=new Map;or(o.root,v=>c.set(v.id,l(v)));const h=(v,S,T)=>{const A=c.get(v.id);i.push(A);const M=[`${T}<body name="${ta(A)}" pos="${Fc(v.pos)}">`];if(S)o.mount==="free"&&M.push(`${T}  <freejoint name="root"/>`);else if(v.joint){const y=`${A}_joint`;M.push(`${T}  ${ZC(v.joint,y)}`),v.joint.actuator!=="none"&&e.push({name:`${A}_motor`,joint:y,kind:v.joint.actuator,maxForce:v.joint.maxForce,drive:v.joint.drive})}return v.shapes.forEach((y,N)=>M.push(`${T}  ${WC(y,A,N)}`)),v.children.forEach(y=>M.push(h(y,!1,T+"  "))),M.push(`${T}</body>`),M.join(`
`)},d=[...o.root.pos],g={...o.root,pos:d},p=h(g,!0,"    "),x=e.map(v=>{const S=`ctrllimited="true" forcelimited="true" forcerange="${We(-v.maxForce)} ${We(v.maxForce)}"`,T=KC(o.root,v.joint.replace(/_joint$/,""),c);switch(v.kind){case"torque":return`    <motor name="${ta(v.name)}" joint="${ta(v.joint)}" gear="${We(v.maxForce)}" ctrlrange="-1 1" ${S}/>`;case"velocity":return`    <velocity name="${ta(v.name)}" joint="${ta(v.joint)}" kv="${We(T?.gain??1)}" ctrlrange="-50 50" ${S}/>`;case"position":{const A=T?.range??[-90,90],M=T?.type==="hinge"?A[0]*Math.PI/180:A[0],y=T?.type==="hinge"?A[1]*Math.PI/180:A[1];return`    <position name="${ta(v.name)}" joint="${ta(v.joint)}" kp="${We(T?.gain??10)}" kv="${We((T?.gain??10)/10)}" ctrlrange="${We(M)} ${We(y)}" ${S}/>`}default:return""}}).filter(Boolean).join(`
`);return{xml:`<mujoco model="${ta(o.name||"forge")}">
  <compiler angle="degree" autolimits="true"/>
  <option timestep="${We(o.timestep)}" gravity="0 0 ${We(-o.gravity)}" integrator="implicitfast"/>
  <default>
    <geom condim="3" friction="${We(o.floorFriction)} 0.005 0.0001" solref="0.01 1" solimp="0.9 0.95 0.001"/>
    <joint armature="0.001"/>
  </default>
  <worldbody>
    <light pos="0 0 3" dir="0 0 -1" diffuse="0.9 0.9 0.9"/>
    <geom name="floor" type="plane" size="20 20 0.1" rgba="0.16 0.18 0.22 1"/>
${p}
  </worldbody>
  <actuator>
${x}
  </actuator>
</mujoco>`,actuators:e,bodyNames:i}}function KC(o,e,i){let s;return or(o,l=>{i.get(l.id)===e&&(s=l.joint)}),s}const Fn=(o,e,i,s,l=[0,0,0],c=[0,0,0])=>({id:Xc("s"),type:o,size:e,pos:l,euler:c,mass:i,color:s}),qn=(o,e,i,s,l=[])=>({id:Xc("b"),name:o,pos:e,shapes:i,joint:s,children:l}),Ua=(o,e,i,s,l=10,c)=>({type:"hinge",axis:o,range:e,limited:!0,damping:.05,actuator:i,maxForce:s,gain:l,drive:c}),QC=(o,e,i)=>({type:"hinge",axis:o,range:[0,0],limited:!1,damping:.01,actuator:"velocity",maxForce:3,gain:e,drive:i});function JC(){const o=qn("base",[0,0,.05],[Fn("cylinder",[.12,.1,0],2,"#3b4252")]),e=qn("shoulder",[0,0,.1],[Fn("box",[.08,.08,.12],.6,"#7dd3fc",[0,0,.06])],Ua([0,0,1],[-180,180],"position",8,6,{amp:1.2,freq:.15,phase:0})),i=qn("upper_arm",[0,0,.12],[Fn("capsule",[.03,.3,0],.5,"#c084fc",[.15,0,0],[0,90,0])],Ua([0,1,0],[-100,100],"position",6,5,{amp:.8,freq:.25,phase:1})),s=qn("forearm",[.3,0,0],[Fn("capsule",[.025,.25,0],.3,"#c084fc",[.125,0,0],[0,90,0])],Ua([0,1,0],[-120,120],"position",3,2.5,{amp:1,freq:.3,phase:2})),l=qn("hand",[.25,0,0],[Fn("box",[.06,.08,.03],.15,"#f4f5f7",[.03,0,0])],Ua([1,0,0],[-90,90],"position",1,.6,{amp:1.5,freq:.5,phase:0}));return s.children=[l],i.children=[s],e.children=[i],o.children=[e],{name:"Robot arm",root:o,mount:"fixed",gravity:9.81,timestep:.002,floorFriction:1}}function $C(){const o=qn("chassis",[0,0,.12],[Fn("box",[.4,.25,.06],2.5,"#3b4252"),Fn("box",[.15,.15,.08],.5,"#7dd3fc",[.05,0,.07])]),e=(i,s,l)=>qn(i,s,[Fn("cylinder",[.07,.04,0],.3,"#f4f5f7",[0,0,0],[90,0,0])],QC([0,1,0],2,{amp:12,freq:.08,phase:l}));return o.children=[e("wheel_fl",[.14,.15,-.02],0),e("wheel_fr",[.14,-.15,-.02],0),e("wheel_rl",[-.14,.15,-.02],0),e("wheel_rr",[-.14,-.15,-.02],0)],{name:"Rover",root:o,mount:"free",gravity:9.81,timestep:.002,floorFriction:1}}function t2(){const o=qn("post",[0,0,.5],[Fn("box",[.05,.05,1],5,"#3b4252")]),e=qn("arm",[0,.05,.45],[Fn("capsule",[.02,.4,0],.4,"#c084fc",[0,0,-.2])],Ua([0,1,0],[-180,180],"torque",2,1,{amp:1,freq:.6,phase:0})),i=qn("bob",[0,0,-.4],[Fn("sphere",[.06,0,0],1,"#7dd3fc")],Ua([0,1,0],[-180,180],"none",0,0));return e.children=[i],o.children=[e],{name:"Pendulum",root:o,mount:"fixed",gravity:9.81,timestep:.002,floorFriction:1}}function e2(){const o=qn("torso",[0,0,.55],[Fn("box",[.2,.3,.25],4,"#3b4252")]),e=(i,s,l)=>{const c=qn(`${i}_hip`,[0,s,-.125],[Fn("capsule",[.035,.25,0],.8,"#c084fc",[0,0,-.125])],Ua([0,1,0],[-60,60],"position",30,80,{amp:.6,freq:.7,phase:l})),h=qn(`${i}_knee`,[0,0,-.25],[Fn("capsule",[.03,.25,0],.6,"#7dd3fc",[0,0,-.125])],Ua([0,1,0],[-120,5],"position",25,60,{amp:.7,freq:.7,phase:l+1.2})),d=qn(`${i}_foot`,[0,0,-.25],[Fn("box",[.16,.08,.03],.3,"#f4f5f7",[.03,0,-.015])],Ua([0,1,0],[-40,40],"position",10,30));return h.children=[d],c.children=[h],c};return o.children=[e("left",.1,0),e("right",-.1,Math.PI)],{name:"Walker (falls — fix it)",root:o,mount:"free",gravity:9.81,timestep:.002,floorFriction:1}}const jp=[{id:"arm",label:"Robot arm",make:JC},{id:"rover",label:"Rover",make:$C},{id:"walker",label:"Walker",make:e2},{id:"pendulum",label:"Pendulum",make:t2}];function n2(){return{name:"New robot",root:qn("base",[0,0,.1],[Fn("box",[.3,.2,.1],1,"#3b4252")]),mount:"free",gravity:9.81,timestep:.002,floorFriction:1}}const _y=new Worker(new URL("/app/assets/physics.worker-BWOTgIO3.js",import.meta.url),{type:"module"}),ds=o=>_y.postMessage(o),i2=o=>JSON.parse(JSON.stringify(o)),Ce=VC((o,e)=>{_y.onmessage=s=>{const l=s.data;l.type==="ready"?(o({engineReady:!0}),e().compile()):l.type==="loaded"?o({geoms:l.geoms,loadError:null,dirty:!1}):l.type==="error"?o({loadError:l.message}):l.type==="frame"&&o({frame:l})};const i=s=>{const l=i2(e().build);s(l),o({build:l,dirty:!0}),e().mode==="edit"&&e().compile()};return{build:jp[0].make(),selectedId:null,mode:"edit",engineReady:!1,loadError:null,geoms:null,actuators:[],frame:null,driveOn:!0,speed:1,dirty:!1,setBuild:s=>{o({build:s,selectedId:null,mode:"edit"}),e().compile()},loadSample:s=>{const l=jp.find(c=>c.id===s);l&&e().setBuild(l.make())},select:s=>o({selectedId:s}),updateBody:(s,l)=>i(c=>{const h=Qs(c.root,s);h&&Object.assign(h,l)}),updateJoint:(s,l)=>i(c=>{const h=Qs(c.root,s);h?.joint&&Object.assign(h.joint,l)}),updateShape:(s,l,c)=>i(h=>{const g=Qs(h.root,s)?.shapes.find(p=>p.id===l);g&&Object.assign(g,c)}),addShape:(s,l)=>i(c=>{Qs(c.root,s)?.shapes.push(py(l))}),removeShape:(s,l)=>i(c=>{const h=Qs(c.root,s);h&&h.shapes.length>1&&(h.shapes=h.shapes.filter(d=>d.id!==l))}),addChild:s=>{let l="";i(c=>{const h=Qs(c.root,s);if(!h)return;let d=0;or(c.root,()=>d++);const g=jC(`part_${d}`,[.2,0,0],!0);l=g.id,h.children.push(g)}),l&&o({selectedId:l})},removeBody:s=>i(l=>{const c=qC(l.root,s);c&&(c.children=c.children.filter(h=>h.id!==s),e().selectedId===s&&o({selectedId:c.id}))}),updateBuild:s=>i(l=>Object.assign(l,s)),compile:()=>{const{build:s,engineReady:l}=e();if(!l)return;const{xml:c,actuators:h}=gy(s),d=h.map(g=>({name:g.name,joint:g.joint,kind:g.kind,maxForce:g.maxForce,drive:g.drive,ctrlMin:g.kind==="torque"?-1:g.kind==="velocity"?-50:-Math.PI,ctrlMax:g.kind==="torque"?1:g.kind==="velocity"?50:Math.PI}));o({actuators:d}),ds({type:"load",xml:c,actuators:d})},run:()=>{e().dirty&&e().compile(),o({mode:"run"}),ds({type:"run"})},pause:()=>ds({type:"pause"}),step:()=>{o({mode:"run"}),ds({type:"step"})},reset:()=>{o({mode:"edit"}),ds({type:"reset"}),e().compile()},setCtrl:(s,l)=>ds({type:"ctrl",index:s,value:l}),setDrive:s=>{o({driveOn:s}),ds({type:"drive",on:s})},setSpeed:s=>{o({speed:s}),ds({type:"speed",value:s})}}});function Dx(){return gy(Ce.getState().build).xml}const a2=0,s2=2,r2=3,o2=5,l2=6;function u2(o,e){const i=o.type[e],s=o.size[e*3],l=o.size[e*3+1],c=o.size[e*3+2];switch(i){case a2:return null;case s2:return new Bc(s,24,16);case l2:return new So(s*2,l*2,c*2);case o2:{const h=new sm(s,s,l*2,32);return h.rotateX(Math.PI/2),h}case r2:{const h=new am(s,l*2,8,24);return h.rotateX(Math.PI/2),h}default:return new Bc(Math.max(s,.02),12,8)}}function c2(){const o=ei.useRef(null),e=ei.useRef([]),i=ei.useRef(null),s=Ce(l=>l.geoms);return ei.useEffect(()=>{const l=o.current,c=new TC({antialias:!0,alpha:!1,powerPreference:"high-performance"});c.setPixelRatio(Math.min(window.devicePixelRatio,2)),c.shadowMap.enabled=!0,c.shadowMap.type=Ox,l.appendChild(c.domElement);const h=new RT;h.background=new xe("#0b0d12"),h.fog=new nm("#0b0d12",8,30),i.current=h;const d=new Ri(45,1,.01,100);d.up.set(0,0,1),d.position.set(1.6,-1.6,1.1);const g=new AC(d,c.domElement);g.target.set(0,0,.3),g.enableDamping=!0,g.dampingFactor=.08,g.maxPolarAngle=Math.PI/2-.02,g.minDistance=.3,g.maxDistance=20,h.add(new PT("#c9d6ff","#1a1d26",.9));const p=new BT("#ffffff",2.2);p.position.set(2,-3,4),p.castShadow=!0,p.shadow.mapSize.set(2048,2048),p.shadow.camera.near=.5,p.shadow.camera.far=15;const x=p.shadow.camera;x.left=-4,x.right=4,x.top=4,x.bottom=-4,p.shadow.bias=-5e-4,h.add(p);const m=new Hi(new Dl(60,60),new Qv({color:"#141720",roughness:.95,metalness:0}));m.receiveShadow=!0,h.add(m);const v=new HT(40,80,"#2a3040","#1b1f28");v.rotation.x=Math.PI/2,v.position.z=.001,h.add(v);const S=()=>{const N=l.clientWidth,O=l.clientHeight;c.setSize(N,O,!1),d.aspect=N/Math.max(O,1),d.updateProjectionMatrix()};S();const T=new ResizeObserver(S);T.observe(l);const A=new an;let M=0;const y=()=>{M=requestAnimationFrame(y);const N=Ce.getState().frame;if(N){const O=e.current;for(let D=0;D<O.length;D++){const F=O[D];if(!F)continue;const z=D*3,P=D*9,G=N.xmat;A.set(G[P],G[P+1],G[P+2],N.xpos[z],G[P+3],G[P+4],G[P+5],N.xpos[z+1],G[P+6],G[P+7],G[P+8],N.xpos[z+2],0,0,0,1),F.matrix.copy(A)}}g.update(),c.render(h,d)};return y(),()=>{cancelAnimationFrame(M),T.disconnect(),g.dispose(),c.dispose(),l.removeChild(c.domElement)}},[]),ei.useEffect(()=>{const l=i.current;if(!l||(e.current.forEach(h=>{h&&(l.remove(h),h.geometry.dispose(),h.material.dispose())}),e.current=[],!s))return;const c=[];for(let h=0;h<s.n;h++){const d=u2(s,h);if(!d){c.push(null);continue}const g=new xe(s.rgba[h*4],s.rgba[h*4+1],s.rgba[h*4+2]),p=new Qv({color:g,roughness:.55,metalness:.15}),x=new Hi(d,p);x.castShadow=!0,x.receiveShadow=!0,x.matrixAutoUpdate=!1,l.add(x),c.push(x)}e.current=c},[s]),q.jsx("div",{ref:o,className:"viewport"})}function vy({b:o,depth:e,isRoot:i}){const s=Ce(x=>x.selectedId),l=Ce(x=>x.select),c=Ce(x=>x.addChild),h=Ce(x=>x.removeBody),d=s===o.id,g=o.joint,p=i?"root":g?g.actuator==="none"?g.type:`${g.type} · ${g.actuator}`:"";return q.jsxs("div",{children:[q.jsxs("div",{className:"node"+(d?" active":""),style:{paddingLeft:10+e*14},onClick:()=>l(o.id),children:[q.jsx("span",{className:"dot",style:{background:o.shapes[0]?.color??"#888"}}),q.jsx("span",{className:"name",children:o.name}),q.jsx("span",{className:"tag",children:p}),q.jsxs("span",{className:"actions",children:[q.jsx("button",{title:"Add a part attached to this one",onClick:x=>{x.stopPropagation(),c(o.id)},children:"+"}),!i&&q.jsx("button",{title:"Remove this part and everything attached to it",onClick:x=>{x.stopPropagation(),h(o.id)},children:"×"})]})]}),o.children.map(x=>q.jsx(vy,{b:x,depth:e+1,isRoot:!1},x.id))]})}function f2(){const o=Ce(c=>c.build),e=Ce(c=>c.select),i=Ce(c=>c.setBuild),s=Ce(c=>c.loadSample),l=Ce(c=>c.selectedId);return q.jsxs("div",{className:"tree",children:[q.jsxs("div",{className:"panel-head",children:[q.jsx("span",{children:"Parts"}),q.jsxs("select",{value:"",onChange:c=>{c.target.value==="__new"?i(n2()):c.target.value&&s(c.target.value)},children:[q.jsx("option",{value:"",children:"Load…"}),jp.map(c=>q.jsx("option",{value:c.id,children:c.label},c.id)),q.jsx("option",{value:"__new",children:"Empty robot"})]})]}),q.jsxs("div",{className:"node build"+(l===null?" active":""),onClick:()=>e(null),children:[q.jsx("span",{className:"name",children:o.name}),q.jsx("span",{className:"tag",children:o.mount==="free"?"free":"bolted down"})]}),q.jsx(vy,{b:o.root,depth:0,isRoot:!0}),q.jsxs("p",{className:"hint",children:["Click a part to edit it. ",q.jsx("b",{children:"+"})," attaches a new part with a joint. Every joint can have a motor."]})]})}function xy({value:o,onChange:e,step:i,min:s,max:l,label:c}){const h=m=>Number.isFinite(m)?String(+m.toFixed(4)):"0",[d,g]=ei.useState(h(o)),[p,x]=ei.useState(!1);return ei.useEffect(()=>{p||g(h(o))},[o,p]),q.jsx("input",{type:"number","aria-label":c,value:d,step:i,min:s,max:l,onFocus:()=>x(!0),onBlur:()=>{x(!1),g(h(o))},onChange:m=>{g(m.target.value);const v=parseFloat(m.target.value);Number.isFinite(v)&&e(v)}})}function ti({label:o,value:e,onChange:i,step:s=.01,min:l,max:c,unit:h}){return q.jsxs("label",{className:"field",children:[q.jsx("span",{children:o}),q.jsxs("span",{className:"input",children:[q.jsx(xy,{value:e,onChange:i,step:s,min:l,max:c,label:o}),h&&q.jsx("em",{children:h})]})]})}function Nc({label:o,value:e,onChange:i,step:s=.01,unit:l}){const c=(h,d)=>{const g=[...e];g[h]=d,i(g)};return q.jsxs("div",{className:"field vec",children:[q.jsxs("span",{children:[o,l&&q.jsxs("em",{children:[" ",l]})]}),q.jsx("span",{className:"inputs",children:["x","y","z"].map((h,d)=>q.jsx(xy,{label:`${o} ${h}`,value:e[d],step:s,onChange:g=>c(d,g)},h))})]})}function nr({label:o,value:e,options:i,onChange:s}){return q.jsxs("label",{className:"field",children:[q.jsx("span",{children:o}),q.jsx("select",{value:e,onChange:l=>s(l.target.value),children:i.map(l=>q.jsx("option",{value:l.v,children:l.l},l.v))})]})}function yy({label:o,value:e,onChange:i}){return q.jsxs("label",{className:"field",children:[q.jsx("span",{children:o}),q.jsx("input",{type:"text",value:e,onChange:s=>i(s.target.value)})]})}function Ux({label:o,value:e,onChange:i}){return q.jsxs("label",{className:"field toggle",children:[q.jsx("span",{children:o}),q.jsx("input",{type:"checkbox",checked:e,onChange:s=>i(s.target.checked)})]})}const Nx=[{l:"Micro servo (0.2 N·m)",maxForce:.2,gain:5},{l:"Hobby servo (1.5 N·m)",maxForce:1.5,gain:10},{l:"Stepper NEMA17 (0.5 N·m)",maxForce:.5,gain:8},{l:"Robot joint motor (8 N·m)",maxForce:8,gain:20},{l:"Leg actuator (30 N·m)",maxForce:30,gain:80},{l:"Industrial (150 N·m)",maxForce:150,gain:200}];function h2({bodyId:o,s:e,canRemove:i}){const s=Ce(h=>h.updateShape),l=Ce(h=>h.removeShape),c=h=>s(o,e.id,h);return q.jsxs("div",{className:"shape",children:[q.jsxs("div",{className:"row",children:[q.jsx(nr,{label:"Shape",value:e.type,onChange:h=>c({type:h}),options:[{v:"box",l:"Box"},{v:"cylinder",l:"Cylinder"},{v:"capsule",l:"Capsule"},{v:"sphere",l:"Sphere"}]}),q.jsxs("label",{className:"field color",children:[q.jsx("span",{children:"Colour"}),q.jsx("input",{type:"color",value:e.color,onChange:h=>c({color:h.target.value})})]}),i&&q.jsx("button",{className:"mini",onClick:()=>l(o,e.id),children:"remove"})]}),e.type==="box"&&q.jsx(Nc,{label:"Size",unit:"m",value:e.size,onChange:h=>c({size:h})}),(e.type==="cylinder"||e.type==="capsule")&&q.jsxs("div",{className:"row",children:[q.jsx(ti,{label:"Radius",unit:"m",value:e.size[0],onChange:h=>c({size:[h,e.size[1],0]}),step:.005,min:.005}),q.jsx(ti,{label:"Length",unit:"m",value:e.size[1],onChange:h=>c({size:[e.size[0],h,0]}),step:.01,min:.01})]}),e.type==="sphere"&&q.jsx(ti,{label:"Radius",unit:"m",value:e.size[0],onChange:h=>c({size:[h,0,0]}),step:.005,min:.005}),q.jsx(Nc,{label:"Offset",unit:"m",value:e.pos,onChange:h=>c({pos:h})}),q.jsx(Nc,{label:"Rotation",unit:"°",value:e.euler,onChange:h=>c({euler:h}),step:5}),q.jsx(ti,{label:"Mass",unit:"kg",value:e.mass,onChange:h=>c({mass:h}),step:.05,min:.001})]})}function d2({b:o,isRoot:e}){const i=Ce(h=>h.updateBody),s=Ce(h=>h.updateJoint),l=Ce(h=>h.addShape),c=o.joint;return q.jsxs(q.Fragment,{children:[q.jsx(yy,{label:"Name",value:o.name,onChange:h=>i(o.id,{name:h})}),q.jsx(Nc,{label:e?"Position":"Attach at",unit:"m",value:o.pos,onChange:h=>i(o.id,{pos:h})}),q.jsx("p",{className:"hint",children:e?"Where the robot starts.":"Where this part connects to its parent, measured from the parent's centre."}),!e&&c&&q.jsxs("section",{children:[q.jsx("h4",{children:"Joint"}),q.jsxs("div",{className:"row",children:[q.jsx(nr,{label:"Type",value:c.type,onChange:h=>s(o.id,{type:h,range:h==="hinge"?[-90,90]:[-.2,.2]}),options:[{v:"hinge",l:"Hinge (rotates)"},{v:"slide",l:"Slider (extends)"}]}),q.jsx(nr,{label:"Axis",value:p2(c.axis),onChange:h=>s(o.id,{axis:m2(h)}),options:[{v:"x",l:"X"},{v:"y",l:"Y"},{v:"z",l:"Z"}]})]}),q.jsx(Ux,{label:"Limit movement",value:c.limited,onChange:h=>s(o.id,{limited:h})}),c.limited&&q.jsxs("div",{className:"row",children:[q.jsx(ti,{label:"Min",unit:c.type==="hinge"?"°":"m",value:c.range[0],onChange:h=>s(o.id,{range:[h,c.range[1]]}),step:c.type==="hinge"?5:.01}),q.jsx(ti,{label:"Max",unit:c.type==="hinge"?"°":"m",value:c.range[1],onChange:h=>s(o.id,{range:[c.range[0],h]}),step:c.type==="hinge"?5:.01})]}),q.jsx(ti,{label:"Damping",value:c.damping,onChange:h=>s(o.id,{damping:h}),step:.01,min:0}),q.jsx("h4",{children:"Motor"}),q.jsx(nr,{label:"Control",value:c.actuator,onChange:h=>s(o.id,{actuator:h}),options:[{v:"none",l:"No motor (free joint)"},{v:"torque",l:"Torque — push with a force"},{v:"velocity",l:"Speed — spin at a rate"},{v:"position",l:"Position — go to an angle"}]}),c.actuator!=="none"&&q.jsxs(q.Fragment,{children:[q.jsx(nr,{label:"Preset",value:"",onChange:h=>{const d=Nx[+h];d&&s(o.id,{maxForce:d.maxForce,gain:d.gain})},options:[{v:"",l:"Pick a motor…"},...Nx.map((h,d)=>({v:String(d),l:h.l}))]}),q.jsxs("div",{className:"row",children:[q.jsx(ti,{label:c.type==="hinge"?"Max torque":"Max force",unit:c.type==="hinge"?"N·m":"N",value:c.maxForce,onChange:h=>s(o.id,{maxForce:h}),step:.1,min:.01}),c.actuator!=="torque"&&q.jsx(ti,{label:c.actuator==="velocity"?"Stiffness (kv)":"Stiffness (kp)",value:c.gain,onChange:h=>s(o.id,{gain:h}),step:1,min:.1})]}),q.jsx(Ux,{label:"Auto-drive (moves by itself)",value:!!c.drive,onChange:h=>s(o.id,{drive:h?{amp:c.actuator==="torque"?1:c.actuator==="velocity"?5:.8,freq:.5,phase:0}:void 0})}),c.drive&&q.jsxs("div",{className:"row",children:[q.jsx(ti,{label:"Amplitude",value:c.drive.amp,onChange:h=>s(o.id,{drive:{...c.drive,amp:h}}),step:.1}),q.jsx(ti,{label:"Frequency",unit:"Hz",value:c.drive.freq,onChange:h=>s(o.id,{drive:{...c.drive,freq:h}}),step:.05,min:0}),q.jsx(ti,{label:"Phase",unit:"rad",value:c.drive.phase,onChange:h=>s(o.id,{drive:{...c.drive,phase:h}}),step:.1})]})]})]}),q.jsxs("section",{children:[q.jsxs("h4",{children:["Shapes ",q.jsxs("span",{className:"muted",children:["(",o.shapes.length,")"]})]}),o.shapes.map(h=>q.jsx(h2,{bodyId:o.id,s:h,canRemove:o.shapes.length>1},h.id)),q.jsxs("div",{className:"row",children:[q.jsx("button",{className:"mini",onClick:()=>l(o.id,"box"),children:"+ box"}),q.jsx("button",{className:"mini",onClick:()=>l(o.id,"cylinder"),children:"+ cylinder"}),q.jsx("button",{className:"mini",onClick:()=>l(o.id,"capsule"),children:"+ capsule"}),q.jsx("button",{className:"mini",onClick:()=>l(o.id,"sphere"),children:"+ sphere"})]})]})]})}const p2=o=>Math.abs(o[0])>.5?"x":Math.abs(o[1])>.5?"y":"z",m2=o=>o==="x"?[1,0,0]:o==="y"?[0,1,0]:[0,0,1];function g2(){const o=Ce(l=>l.build),e=Ce(l=>l.selectedId),i=Ce(l=>l.updateBuild),s=e?Qs(o.root,e):null;return q.jsx("div",{className:"inspector",children:s?q.jsxs(q.Fragment,{children:[q.jsx("div",{className:"panel-head",children:q.jsx("span",{children:s.id===o.root.id?"Base part":"Part"})}),q.jsx(d2,{b:s,isRoot:s.id===o.root.id})]}):q.jsxs(q.Fragment,{children:[q.jsx("div",{className:"panel-head",children:q.jsx("span",{children:"Robot"})}),q.jsx(yy,{label:"Name",value:o.name,onChange:l=>i({name:l})}),q.jsx(nr,{label:"Base",value:o.mount,onChange:l=>i({mount:l}),options:[{v:"free",l:"Free — can move and fall"},{v:"fixed",l:"Bolted to the ground"}]}),q.jsx(ti,{label:"Gravity",unit:"m/s²",value:o.gravity,onChange:l=>i({gravity:l}),step:.1,min:0}),q.jsx(ti,{label:"Floor grip",value:o.floorFriction,onChange:l=>i({floorFriction:l}),step:.1,min:0}),q.jsx(nr,{label:"Accuracy",value:String(o.timestep),onChange:l=>i({timestep:parseFloat(l)}),options:[{v:"0.004",l:"Fast (4 ms step)"},{v:"0.002",l:"Normal (2 ms step)"},{v:"0.001",l:"Precise (1 ms step)"}]}),q.jsxs("p",{className:"hint",children:["Total mass: ",q.jsxs("b",{children:[my(o.root).toFixed(2)," kg"]}),". Earth gravity is 9.81, Mars is 3.71, the Moon is 1.62."]})]})})}function _2(){const o=Ce(v=>v.mode),e=Ce(v=>v.frame),i=Ce(v=>v.engineReady),{run:s,pause:l,step:c,reset:h,setSpeed:d,setDrive:g}=Ce.getState(),p=Ce(v=>v.speed),x=Ce(v=>v.driveOn),m=!!e?.running;return q.jsx("div",{className:"controls",children:i?q.jsxs(q.Fragment,{children:[m?q.jsx("button",{className:"primary",onClick:l,children:"❚❚ Pause"}):q.jsx("button",{className:"primary",onClick:s,children:"▶ Run"}),q.jsx("button",{onClick:c,title:"Advance one frame",children:"⏭ Step"}),q.jsx("button",{onClick:h,title:"Back to the starting pose (also returns to editing)",children:"↺ Reset"}),q.jsx("span",{className:"sep"}),q.jsxs("label",{className:"inline",children:["Speed",q.jsxs("select",{value:p,onChange:v=>d(parseFloat(v.target.value)),children:[q.jsx("option",{value:.1,children:"0.1×"}),q.jsx("option",{value:.25,children:"0.25×"}),q.jsx("option",{value:.5,children:"0.5×"}),q.jsx("option",{value:1,children:"1×"}),q.jsx("option",{value:2,children:"2×"})]})]}),q.jsxs("label",{className:"inline",children:[q.jsx("input",{type:"checkbox",checked:x,onChange:v=>g(v.target.checked)})," Auto-drive"]}),q.jsx("span",{className:"sep"}),q.jsx("span",{className:"status",children:o==="run"?`t = ${(e?.time??0).toFixed(2)} s`:"Editing — changes apply instantly"})]}):q.jsx("span",{className:"status",children:"Loading physics engine…"})})}function v2(){const o=Ce(v=>v.frame),e=Ce(v=>v.actuators),i=Ce(v=>v.build),s=Ce(v=>v.loadError),l=Ce(v=>v.setCtrl),c=Ce(v=>v.driveOn),h=ei.useRef([]),[,d]=ei.useState(0);if(ei.useEffect(()=>{if(!o)return;const v=h.current;if(v.length!==o.force.length){v.length=0;for(let S=0;S<o.force.length;S++)v.push(0)}if(o.time===0&&v.fill(0),o.time>.3)for(let S=0;S<o.force.length;S++)v[S]=Math.max(v[S],Math.abs(o.force[S]));d(S=>S+1)},[o]),s)return q.jsxs("div",{className:"verdict error",children:[q.jsx("h4",{children:"This robot can't be built"}),q.jsx("p",{children:s}),q.jsx("p",{className:"hint",children:"Usually a size of 0, a mass of 0, or two parts named the same."})]});if(!o)return q.jsx("div",{className:"verdict",children:q.jsx("p",{className:"hint",children:"Press Run to see how it performs."})});const g=my(i.root),p=i.mount==="free"&&o.rootUp<.3&&o.time>.2,x=e.filter((v,S)=>h.current[S]>=v.maxForce*.98).length,m=o.rootPos[2];return q.jsxs("div",{className:"verdict",children:[q.jsxs("div",{className:"stats",children:[q.jsx(lo,{label:"Time",value:o.time.toFixed(2),unit:"s"}),q.jsx(lo,{label:"Mass",value:g.toFixed(2),unit:"kg"}),q.jsx(lo,{label:"Power",value:o.power.toFixed(1),unit:"W"}),q.jsx(lo,{label:"Energy",value:o.energy.toFixed(1),unit:"J"}),q.jsx(lo,{label:"Height",value:m.toFixed(2),unit:"m"}),q.jsx(lo,{label:"Contacts",value:String(o.contacts)})]}),q.jsx("div",{className:"flag "+(p?"bad":x?"warn":"ok"),children:p?"Fell over — lower the mass, widen the stance, or add stiffness.":x?`${x} motor${x>1?"s":""} at the limit — it wants more torque than you gave it.`:o.time>0?"Standing and within limits.":"Ready."}),e.length>0&&q.jsxs("div",{className:"motors",children:[q.jsxs("h4",{children:["Motors ",q.jsx("span",{className:"muted",children:"— load vs. limit (peak marked)"})]}),e.map((v,S)=>{const T=Math.abs(o.force[S]??0),A=h.current[S]??0,M=Math.min(100,T/v.maxForce*100),y=Math.min(100,A/v.maxForce*100),N=o.ctrl[S]??0,[O,D]=v.kind==="torque"?[-1,1]:v.kind==="velocity"?[-20,20]:[-Math.PI,Math.PI];return q.jsxs("div",{className:"motor",children:[q.jsxs("div",{className:"mrow",children:[q.jsx("span",{className:"mname",children:v.joint.replace(/_joint$/,"")}),q.jsxs("span",{className:"mval",children:[T.toFixed(2)," / ",v.maxForce," ",(v.kind==="torque"||v.kind==="position","N·m")]})]}),q.jsxs("div",{className:"bar",children:[q.jsx("div",{className:"fill"+(M>95?" hot":""),style:{width:M+"%"}}),q.jsx("div",{className:"peak",style:{left:y+"%"}})]}),q.jsx("input",{type:"range",min:O,max:D,step:(D-O)/200,value:N,disabled:c&&!!v.drive,title:c&&v.drive?"Auto-drive is controlling this motor. Turn it off to drive by hand.":"Drive this motor",onChange:F=>l(S,parseFloat(F.target.value))})]},v.name)})]})]})}function lo({label:o,value:e,unit:i}){return q.jsxs("div",{className:"stat",children:[q.jsx("span",{className:"l",children:o}),q.jsxs("span",{className:"v",children:[e,i&&q.jsxs("em",{children:[" ",i]})]})]})}function x2(){const[o,e]=ei.useState(!1),i=Ce(l=>l.build),s=()=>{const l=new Blob([Dx()],{type:"application/xml"}),c=document.createElement("a");c.href=URL.createObjectURL(l),c.download=`${i.name.replace(/[^\w]+/g,"_")||"robot"}.xml`,c.click(),setTimeout(()=>URL.revokeObjectURL(c.href),1e3)};return q.jsxs("div",{className:"app",children:[q.jsxs("header",{className:"top",children:[q.jsxs("a",{className:"brand",href:"/",children:[q.jsx("span",{className:"mark",children:"A"})," Adem ",q.jsx("em",{children:"Forge"})]}),q.jsx("span",{className:"tagline",children:"Robot design software in your browser — build, set the numbers, run."}),q.jsx("span",{className:"grow"}),q.jsx("button",{className:"mini",onClick:()=>e(!0),children:"View MJCF"}),q.jsx("button",{className:"mini",onClick:s,children:"Download .xml"})]}),q.jsx("aside",{className:"left",children:q.jsx(f2,{})}),q.jsxs("main",{className:"center",children:[q.jsx(c2,{}),q.jsx(_2,{})]}),q.jsxs("aside",{className:"right",children:[q.jsx(g2,{}),q.jsx(v2,{})]}),o&&q.jsx("div",{className:"modal",onClick:()=>e(!1),children:q.jsxs("div",{className:"sheet",onClick:l=>l.stopPropagation(),children:[q.jsxs("div",{className:"panel-head",children:[q.jsx("span",{children:"MJCF — opens in MuJoCo, Isaac Lab, and any MuJoCo-compatible simulator"}),q.jsx("button",{className:"mini",onClick:()=>e(!1),children:"close"})]}),q.jsx("pre",{children:Dx()})]})})]})}hE.createRoot(document.getElementById("root")).render(q.jsx(ei.StrictMode,{children:q.jsx(x2,{})}));
