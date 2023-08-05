function F(e){return e&&typeof e.then=="function"}Promise.resolve(!1);Promise.resolve(!0);var d=Promise.resolve();function B(e,t){return e||(e=0),new Promise(function(r){return setTimeout(function(){return r(t)},e)})}function J(e,t){return Math.floor(Math.random()*(t-e+1)+e)}function w(){return Math.random().toString(36).substring(2)}var M=0,h=0;function v(){var e=new Date().getTime();return e===M?(h++,e*1e3+h):(M=e,h=0,e*1e3)}var V=v,W="native";function H(e){var t={messagesCallback:null,bc:new BroadcastChannel(e),subFns:[]};return t.bc.onmessage=function(r){t.messagesCallback&&t.messagesCallback(r.data)},t}function K(e){e.bc.close(),e.subFns=[]}function j(e,t){try{return e.bc.postMessage(t,!1),d}catch(r){return Promise.reject(r)}}function q(e,t){e.messagesCallback=t}function z(){if((typeof window<"u"||typeof self<"u")&&typeof BroadcastChannel=="function"){if(BroadcastChannel._pubkey)throw new Error("BroadcastChannel: Do not overwrite window.BroadcastChannel with this module, this is not a polyfill");return!0}else return!1}function X(){return 150}var G={create:H,close:K,onMessage:q,postMessage:j,canBeUsed:z,type:W,averageResponseTime:X,microSeconds:V},L=function(){function e(t){this.ttl=t,this.map=new Map,this._to=!1}return e.prototype.has=function(t){return this.map.has(t)},e.prototype.add=function(t){var r=this;this.map.set(t,S()),this._to||(this._to=!0,setTimeout(function(){r._to=!1,Q(r)},0))},e.prototype.clear=function(){this.map.clear()},e}();function Q(e){for(var t=S()-e.ttl,r=e.map[Symbol.iterator]();;){var n=r.next().value;if(!n)return;var o=n[0],i=n[1];if(i<t)e.map.delete(o);else return}}function S(){return new Date().getTime()}function b(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=JSON.parse(JSON.stringify(e));return typeof t.webWorkerSupport>"u"&&(t.webWorkerSupport=!0),t.idb||(t.idb={}),t.idb.ttl||(t.idb.ttl=1e3*45),t.idb.fallbackInterval||(t.idb.fallbackInterval=150),e.idb&&typeof e.idb.onclose=="function"&&(t.idb.onclose=e.idb.onclose),t.localstorage||(t.localstorage={}),t.localstorage.removeTimeout||(t.localstorage.removeTimeout=1e3*60),e.methods&&(t.methods=e.methods),t.node||(t.node={}),t.node.ttl||(t.node.ttl=1e3*60*2),t.node.maxParallelWrites||(t.node.maxParallelWrites=2048),typeof t.node.useFastPath>"u"&&(t.node.useFastPath=!0),t}var Y=v,Z="pubkey.broadcast-channel-0-",u="messages",p={durability:"relaxed"},ee="idb";function T(){if(typeof indexedDB<"u")return indexedDB;if(typeof window<"u"){if(typeof window.mozIndexedDB<"u")return window.mozIndexedDB;if(typeof window.webkitIndexedDB<"u")return window.webkitIndexedDB;if(typeof window.msIndexedDB<"u")return window.msIndexedDB}return!1}function _(e){e.commit&&e.commit()}function te(e){var t=T(),r=Z+e,n=t.open(r);return n.onupgradeneeded=function(o){var i=o.target.result;i.createObjectStore(u,{keyPath:"id",autoIncrement:!0})},new Promise(function(o,i){n.onerror=function(s){return i(s)},n.onsuccess=function(){o(n.result)}})}function re(e,t,r){var n=new Date().getTime(),o={uuid:t,time:n,data:r},i=e.transaction([u],"readwrite",p);return new Promise(function(s,f){i.oncomplete=function(){return s()},i.onerror=function(c){return f(c)};var a=i.objectStore(u);a.add(o),_(i)})}function ne(e,t){var r=e.transaction(u,"readonly",p),n=r.objectStore(u),o=[],i=IDBKeyRange.bound(t+1,1/0);if(n.getAll){var s=n.getAll(i);return new Promise(function(a,c){s.onerror=function(l){return c(l)},s.onsuccess=function(l){a(l.target.result)}})}function f(){try{return i=IDBKeyRange.bound(t+1,1/0),n.openCursor(i)}catch{return n.openCursor()}}return new Promise(function(a,c){var l=f();l.onerror=function(g){return c(g)},l.onsuccess=function(g){var m=g.target.result;m?m.value.id<t+1?m.continue(t+1):(o.push(m.value),m.continue()):(_(r),a(o))}})}function oe(e,t){if(e.closed)return Promise.resolve([]);var r=e.db.transaction(u,"readwrite",p),n=r.objectStore(u);return Promise.all(t.map(function(o){var i=n.delete(o);return new Promise(function(s){i.onsuccess=function(){return s()}})}))}function ie(e,t){var r=new Date().getTime()-t,n=e.transaction(u,"readonly",p),o=n.objectStore(u),i=[];return new Promise(function(s){o.openCursor().onsuccess=function(f){var a=f.target.result;if(a){var c=a.value;c.time<r?(i.push(c),a.continue()):(_(n),s(i))}else s(i)}})}function se(e){return ie(e.db,e.options.idb.ttl).then(function(t){return oe(e,t.map(function(r){return r.id}))})}function ae(e,t){return t=b(t),te(e).then(function(r){var n={closed:!1,lastCursorId:0,channelName:e,options:t,uuid:w(),eMIs:new L(t.idb.ttl*2),writeBlockPromise:d,messagesCallback:null,readQueuePromises:[],db:r};return r.onclose=function(){n.closed=!0,t.idb.onclose&&t.idb.onclose()},D(n),n})}function D(e){e.closed||$(e).then(function(){return B(e.options.idb.fallbackInterval)}).then(function(){return D(e)})}function ue(e,t){return!(e.uuid===t.uuid||t.eMIs.has(e.id)||e.data.time<t.messagesCallbackTime)}function $(e){return e.closed||!e.messagesCallback?d:ne(e.db,e.lastCursorId).then(function(t){var r=t.filter(function(n){return!!n}).map(function(n){return n.id>e.lastCursorId&&(e.lastCursorId=n.id),n}).filter(function(n){return ue(n,e)}).sort(function(n,o){return n.time-o.time});return r.forEach(function(n){e.messagesCallback&&(e.eMIs.add(n.id),e.messagesCallback(n.data))}),d})}function ce(e){e.closed=!0,e.db.close()}function fe(e,t){return e.writeBlockPromise=e.writeBlockPromise.then(function(){return re(e.db,e.uuid,t)}).then(function(){J(0,10)===0&&se(e)}),e.writeBlockPromise}function de(e,t,r){e.messagesCallbackTime=r,e.messagesCallback=t,$(e)}function le(){return!!T()}function me(e){return e.idb.fallbackInterval*2}var ve={create:ae,close:ce,onMessage:de,postMessage:fe,canBeUsed:le,type:ee,averageResponseTime:me,microSeconds:Y},pe=v,ge="pubkey.broadcastChannel-",he="localstorage";function N(){var e;if(typeof window>"u")return null;try{e=window.localStorage,e=window["ie8-eventlistener/storage"]||window.localStorage}catch{}return e}function R(e){return ge+e}function we(e,t){return new Promise(function(r){B().then(function(){var n=R(e.channelName),o={token:w(),time:new Date().getTime(),data:t,uuid:e.uuid},i=JSON.stringify(o);N().setItem(n,i);var s=document.createEvent("Event");s.initEvent("storage",!0,!0),s.key=n,s.newValue=i,window.dispatchEvent(s),r()})})}function be(e,t){var r=R(e),n=function(i){i.key===r&&t(JSON.parse(i.newValue))};return window.addEventListener("storage",n),n}function _e(e){window.removeEventListener("storage",e)}function ye(e,t){if(t=b(t),!O())throw new Error("BroadcastChannel: localstorage cannot be used");var r=w(),n=new L(t.localstorage.removeTimeout),o={channelName:e,uuid:r,eMIs:n};return o.listener=be(e,function(i){o.messagesCallback&&i.uuid!==r&&(!i.token||n.has(i.token)||i.data.time&&i.data.time<o.messagesCallbackTime||(n.add(i.token),o.messagesCallback(i.data)))}),o}function Me(e){_e(e.listener)}function Pe(e,t,r){e.messagesCallbackTime=r,e.messagesCallback=t}function O(){var e=N();if(!e)return!1;try{var t="__broadcastchannel_check";e.setItem(t,"works"),e.removeItem(t)}catch{return!1}return!0}function ke(){var e=120,t=navigator.userAgent.toLowerCase();return t.includes("safari")&&!t.includes("chrome")?e*2:e}var Ee={create:ye,close:Me,onMessage:Pe,postMessage:we,canBeUsed:O,type:he,averageResponseTime:ke,microSeconds:pe},Ie=v,Ce="simulate",y=new Set;function Be(e){var t={name:e,messagesCallback:null};return y.add(t),t}function Le(e){y.delete(e)}function Se(e,t){return new Promise(function(r){return setTimeout(function(){var n=Array.from(y);n.filter(function(o){return o.name===e.name}).filter(function(o){return o!==e}).filter(function(o){return!!o.messagesCallback}).forEach(function(o){return o.messagesCallback(t)}),r()},5)})}function Te(e,t){e.messagesCallback=t}function De(){return!0}function $e(){return 5}var Ne={create:Be,close:Le,onMessage:Te,postMessage:Se,canBeUsed:De,type:Ce,averageResponseTime:$e,microSeconds:Ie},P=[G,ve,Ee];function Re(e){var t=[].concat(e.methods,P).filter(Boolean);if(e.type){if(e.type==="simulate")return Ne;var r=t.find(function(o){return o.type===e.type});if(r)return r;throw new Error("method-type "+e.type+" not found")}e.webWorkerSupport||(t=t.filter(function(o){return o.type!=="idb"}));var n=t.find(function(o){return o.canBeUsed()});if(n)return n;throw new Error("No usable method found in "+JSON.stringify(P.map(function(o){return o.type})))}var x=new Set,Oe=0,A=function(t,r){this.id=Oe++,x.add(this),this.name=t,k&&(r=k),this.options=b(r),this.method=Re(this.options),this._iL=!1,this._onML=null,this._addEL={message:[],internal:[]},this._uMP=new Set,this._befC=[],this._prepP=null,xe(this)};A._pubkey=!0;var k;A.prototype={postMessage:function(t){if(this.closed)throw new Error("BroadcastChannel.postMessage(): Cannot post message after channel has closed "+JSON.stringify(t));return E(this,"message",t)},postInternal:function(t){return E(this,"internal",t)},set onmessage(e){var t=this.method.microSeconds(),r={time:t,fn:e};C(this,"message",this._onML),e&&typeof e=="function"?(this._onML=r,I(this,"message",r)):this._onML=null},addEventListener:function(t,r){var n=this.method.microSeconds(),o={time:n,fn:r};I(this,t,o)},removeEventListener:function(t,r){var n=this._addEL[t].find(function(o){return o.fn===r});C(this,t,n)},close:function(){var t=this;if(!this.closed){x.delete(this),this.closed=!0;var r=this._prepP?this._prepP:d;return this._onML=null,this._addEL.message=[],r.then(function(){return Promise.all(Array.from(t._uMP))}).then(function(){return Promise.all(t._befC.map(function(n){return n()}))}).then(function(){return t.method.close(t._state)})}},get type(){return this.method.type},get isClosed(){return this.closed}};function E(e,t,r){var n=e.method.microSeconds(),o={time:n,type:t,data:r},i=e._prepP?e._prepP:d;return i.then(function(){var s=e.method.postMessage(e._state,o);return e._uMP.add(s),s.catch().then(function(){return e._uMP.delete(s)}),s})}function xe(e){var t=e.method.create(e.name,e.options);F(t)?(e._prepP=t,t.then(function(r){e._state=r})):e._state=t}function U(e){return e._addEL.message.length>0||e._addEL.internal.length>0}function I(e,t,r){e._addEL[t].push(r),Ae(e)}function C(e,t,r){e._addEL[t]=e._addEL[t].filter(function(n){return n!==r}),Ue(e)}function Ae(e){if(!e._iL&&U(e)){var t=function(o){e._addEL[o.type].forEach(function(i){var s=1e5,f=i.time-s;o.time>=f&&i.fn(o.data)})},r=e.method.microSeconds();e._prepP?e._prepP.then(function(){e._iL=!0,e.method.onMessage(e._state,t,r)}):(e._iL=!0,e.method.onMessage(e._state,t,r))}}function Ue(e){if(e._iL&&!U(e)){e._iL=!1;var t=e.method.microSeconds();e.method.onMessage(e._state,null,t)}}export{A as B};