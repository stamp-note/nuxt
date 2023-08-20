import{_ as J,m as W,c as H,d as k,b as K,w as j,o as q}from"./entry.94f8a2e2.js";function z(e){return e&&typeof e.then=="function"}Promise.resolve(!1);Promise.resolve(!0);var f=Promise.resolve();function S(e,t){return e||(e=0),new Promise(function(r){return setTimeout(function(){return r(t)},e)})}function X(e,t){return Math.floor(Math.random()*(t-e+1)+e)}function w(){return Math.random().toString(36).substring(2)}var P=0,h=0;function v(){var e=new Date().getTime();return e===P?(h++,e*1e3+h):(P=e,h=0,e*1e3)}var G=v,Q="native";function Y(e){var t={messagesCallback:null,bc:new BroadcastChannel(e),subFns:[]};return t.bc.onmessage=function(r){t.messagesCallback&&t.messagesCallback(r.data)},t}function Z(e){e.bc.close(),e.subFns=[]}function ee(e,t){try{return e.bc.postMessage(t,!1),f}catch(r){return Promise.reject(r)}}function te(e,t){e.messagesCallback=t}function re(){if((typeof window<"u"||typeof self<"u")&&typeof BroadcastChannel=="function"){if(BroadcastChannel._pubkey)throw new Error("BroadcastChannel: Do not overwrite window.BroadcastChannel with this module, this is not a polyfill");return!0}else return!1}function ne(){return 150}var oe={create:Y,close:Z,onMessage:te,postMessage:ee,canBeUsed:re,type:Q,averageResponseTime:ne,microSeconds:G},$=function(){function e(t){this.ttl=t,this.map=new Map,this._to=!1}return e.prototype.has=function(t){return this.map.has(t)},e.prototype.add=function(t){var r=this;this.map.set(t,D()),this._to||(this._to=!0,setTimeout(function(){r._to=!1,ie(r)},0))},e.prototype.clear=function(){this.map.clear()},e}();function ie(e){for(var t=D()-e.ttl,r=e.map[Symbol.iterator]();;){var n=r.next().value;if(!n)return;var o=n[0],i=n[1];if(i<t)e.map.delete(o);else return}}function D(){return new Date().getTime()}function _(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=JSON.parse(JSON.stringify(e));return typeof t.webWorkerSupport>"u"&&(t.webWorkerSupport=!0),t.idb||(t.idb={}),t.idb.ttl||(t.idb.ttl=1e3*45),t.idb.fallbackInterval||(t.idb.fallbackInterval=150),e.idb&&typeof e.idb.onclose=="function"&&(t.idb.onclose=e.idb.onclose),t.localstorage||(t.localstorage={}),t.localstorage.removeTimeout||(t.localstorage.removeTimeout=1e3*60),e.methods&&(t.methods=e.methods),t.node||(t.node={}),t.node.ttl||(t.node.ttl=1e3*60*2),t.node.maxParallelWrites||(t.node.maxParallelWrites=2048),typeof t.node.useFastPath>"u"&&(t.node.useFastPath=!0),t}var se=v,ae="pubkey.broadcast-channel-0-",u="messages",p={durability:"relaxed"},ue="idb";function N(){if(typeof indexedDB<"u")return indexedDB;if(typeof window<"u"){if(typeof window.mozIndexedDB<"u")return window.mozIndexedDB;if(typeof window.webkitIndexedDB<"u")return window.webkitIndexedDB;if(typeof window.msIndexedDB<"u")return window.msIndexedDB}return!1}function b(e){e.commit&&e.commit()}function ce(e){var t=N(),r=ae+e,n=t.open(r);return n.onupgradeneeded=function(o){var i=o.target.result;i.createObjectStore(u,{keyPath:"id",autoIncrement:!0})},new Promise(function(o,i){n.onerror=function(s){return i(s)},n.onsuccess=function(){o(n.result)}})}function de(e,t,r){var n=new Date().getTime(),o={uuid:t,time:n,data:r},i=e.transaction([u],"readwrite",p);return new Promise(function(s,d){i.oncomplete=function(){return s()},i.onerror=function(c){return d(c)};var a=i.objectStore(u);a.add(o),b(i)})}function fe(e,t){var r=e.transaction(u,"readonly",p),n=r.objectStore(u),o=[],i=IDBKeyRange.bound(t+1,1/0);if(n.getAll){var s=n.getAll(i);return new Promise(function(a,c){s.onerror=function(l){return c(l)},s.onsuccess=function(l){a(l.target.result)}})}function d(){try{return i=IDBKeyRange.bound(t+1,1/0),n.openCursor(i)}catch{return n.openCursor()}}return new Promise(function(a,c){var l=d();l.onerror=function(g){return c(g)},l.onsuccess=function(g){var m=g.target.result;m?m.value.id<t+1?m.continue(t+1):(o.push(m.value),m.continue()):(b(r),a(o))}})}function le(e,t){if(e.closed)return Promise.resolve([]);var r=e.db.transaction(u,"readwrite",p),n=r.objectStore(u);return Promise.all(t.map(function(o){var i=n.delete(o);return new Promise(function(s){i.onsuccess=function(){return s()}})}))}function me(e,t){var r=new Date().getTime()-t,n=e.transaction(u,"readonly",p),o=n.objectStore(u),i=[];return new Promise(function(s){o.openCursor().onsuccess=function(d){var a=d.target.result;if(a){var c=a.value;c.time<r?(i.push(c),a.continue()):(b(n),s(i))}else s(i)}})}function ve(e){return me(e.db,e.options.idb.ttl).then(function(t){return le(e,t.map(function(r){return r.id}))})}function pe(e,t){return t=_(t),ce(e).then(function(r){var n={closed:!1,lastCursorId:0,channelName:e,options:t,uuid:w(),eMIs:new $(t.idb.ttl*2),writeBlockPromise:f,messagesCallback:null,readQueuePromises:[],db:r};return r.onclose=function(){n.closed=!0,t.idb.onclose&&t.idb.onclose()},x(n),n})}function x(e){e.closed||R(e).then(function(){return S(e.options.idb.fallbackInterval)}).then(function(){return x(e)})}function ge(e,t){return!(e.uuid===t.uuid||t.eMIs.has(e.id)||e.data.time<t.messagesCallbackTime)}function R(e){return e.closed||!e.messagesCallback?f:fe(e.db,e.lastCursorId).then(function(t){var r=t.filter(function(n){return!!n}).map(function(n){return n.id>e.lastCursorId&&(e.lastCursorId=n.id),n}).filter(function(n){return ge(n,e)}).sort(function(n,o){return n.time-o.time});return r.forEach(function(n){e.messagesCallback&&(e.eMIs.add(n.id),e.messagesCallback(n.data))}),f})}function he(e){e.closed=!0,e.db.close()}function we(e,t){return e.writeBlockPromise=e.writeBlockPromise.then(function(){return de(e.db,e.uuid,t)}).then(function(){X(0,10)===0&&ve(e)}),e.writeBlockPromise}function _e(e,t,r){e.messagesCallbackTime=r,e.messagesCallback=t,R(e)}function be(){return!!N()}function ye(e){return e.idb.fallbackInterval*2}var Me={create:pe,close:he,onMessage:_e,postMessage:we,canBeUsed:be,type:ue,averageResponseTime:ye,microSeconds:se},ke=v,Pe="pubkey.broadcastChannel-",Ce="localstorage";function O(){var e;if(typeof window>"u")return null;try{e=window.localStorage,e=window["ie8-eventlistener/storage"]||window.localStorage}catch{}return e}function A(e){return Pe+e}function Ee(e,t){return new Promise(function(r){S().then(function(){var n=A(e.channelName),o={token:w(),time:new Date().getTime(),data:t,uuid:e.uuid},i=JSON.stringify(o);O().setItem(n,i);var s=document.createEvent("Event");s.initEvent("storage",!0,!0),s.key=n,s.newValue=i,window.dispatchEvent(s),r()})})}function Ie(e,t){var r=A(e),n=function(i){i.key===r&&t(JSON.parse(i.newValue))};return window.addEventListener("storage",n),n}function Be(e){window.removeEventListener("storage",e)}function Te(e,t){if(t=_(t),!U())throw new Error("BroadcastChannel: localstorage cannot be used");var r=w(),n=new $(t.localstorage.removeTimeout),o={channelName:e,uuid:r,eMIs:n};return o.listener=Ie(e,function(i){o.messagesCallback&&i.uuid!==r&&(!i.token||n.has(i.token)||i.data.time&&i.data.time<o.messagesCallbackTime||(n.add(i.token),o.messagesCallback(i.data)))}),o}function Le(e){Be(e.listener)}function Se(e,t,r){e.messagesCallbackTime=r,e.messagesCallback=t}function U(){var e=O();if(!e)return!1;try{var t="__broadcastchannel_check";e.setItem(t,"works"),e.removeItem(t)}catch{return!1}return!0}function $e(){var e=120,t=navigator.userAgent.toLowerCase();return t.includes("safari")&&!t.includes("chrome")?e*2:e}var De={create:Te,close:Le,onMessage:Se,postMessage:Ee,canBeUsed:U,type:Ce,averageResponseTime:$e,microSeconds:ke},Ne=v,xe="simulate",y=new Set;function Re(e){var t={name:e,messagesCallback:null};return y.add(t),t}function Oe(e){y.delete(e)}function Ae(e,t){return new Promise(function(r){return setTimeout(function(){var n=Array.from(y);n.filter(function(o){return o.name===e.name}).filter(function(o){return o!==e}).filter(function(o){return!!o.messagesCallback}).forEach(function(o){return o.messagesCallback(t)}),r()},5)})}function Ue(e,t){e.messagesCallback=t}function Ve(){return!0}function Fe(){return 5}var Je={create:Re,close:Oe,onMessage:Ue,postMessage:Ae,canBeUsed:Ve,type:xe,averageResponseTime:Fe,microSeconds:Ne},C=[oe,Me,De];function We(e){var t=[].concat(e.methods,C).filter(Boolean);if(e.type){if(e.type==="simulate")return Je;var r=t.find(function(o){return o.type===e.type});if(r)return r;throw new Error("method-type "+e.type+" not found")}e.webWorkerSupport||(t=t.filter(function(o){return o.type!=="idb"}));var n=t.find(function(o){return o.canBeUsed()});if(n)return n;throw new Error("No usable method found in "+JSON.stringify(C.map(function(o){return o.type})))}var V=new Set,He=0,M=function(t,r){this.id=He++,V.add(this),this.name=t,E&&(r=E),this.options=_(r),this.method=We(this.options),this._iL=!1,this._onML=null,this._addEL={message:[],internal:[]},this._uMP=new Set,this._befC=[],this._prepP=null,Ke(this)};M._pubkey=!0;var E;M.prototype={postMessage:function(t){if(this.closed)throw new Error("BroadcastChannel.postMessage(): Cannot post message after channel has closed "+JSON.stringify(t));return I(this,"message",t)},postInternal:function(t){return I(this,"internal",t)},set onmessage(e){var t=this.method.microSeconds(),r={time:t,fn:e};T(this,"message",this._onML),e&&typeof e=="function"?(this._onML=r,B(this,"message",r)):this._onML=null},addEventListener:function(t,r){var n=this.method.microSeconds(),o={time:n,fn:r};B(this,t,o)},removeEventListener:function(t,r){var n=this._addEL[t].find(function(o){return o.fn===r});T(this,t,n)},close:function(){var t=this;if(!this.closed){V.delete(this),this.closed=!0;var r=this._prepP?this._prepP:f;return this._onML=null,this._addEL.message=[],r.then(function(){return Promise.all(Array.from(t._uMP))}).then(function(){return Promise.all(t._befC.map(function(n){return n()}))}).then(function(){return t.method.close(t._state)})}},get type(){return this.method.type},get isClosed(){return this.closed}};function I(e,t,r){var n=e.method.microSeconds(),o={time:n,type:t,data:r},i=e._prepP?e._prepP:f;return i.then(function(){var s=e.method.postMessage(e._state,o);return e._uMP.add(s),s.catch().then(function(){return e._uMP.delete(s)}),s})}function Ke(e){var t=e.method.create(e.name,e.options);z(t)?(e._prepP=t,t.then(function(r){e._state=r})):e._state=t}function F(e){return e._addEL.message.length>0||e._addEL.internal.length>0}function B(e,t,r){e._addEL[t].push(r),je(e)}function T(e,t,r){e._addEL[t]=e._addEL[t].filter(function(n){return n!==r}),qe(e)}function je(e){if(!e._iL&&F(e)){var t=function(o){e._addEL[o.type].forEach(function(i){var s=1e5,d=i.time-s;o.time>=d&&i.fn(o.data)})},r=e.method.microSeconds();e._prepP?e._prepP.then(function(){e._iL=!0,e.method.onMessage(e._state,t,r)}):(e._iL=!0,e.method.onMessage(e._state,t,r))}}function qe(e){if(e._iL&&!F(e)){e._iL=!1;var t=e.method.microSeconds();e.method.onMessage(e._state,null,t)}}const L=new M("foobar"),ze={name:"customer",setup(){},methods:{onClick(){L.postMessage({foo:"bar"})}},mounted(){L.onmessage=e=>{console.log(e)}}};function Xe(e,t,r,n,o,i){const s=W("v-btn");return q(),H("div",null,[k(" broadcast channel 로 데이터 전달하기 "),K(s,{onClick:i.onClick,color:"primary"},{default:j(()=>[k(" + ")]),_:1},8,["onClick"])])}const Qe=J(ze,[["render",Xe]]);export{Qe as default};
