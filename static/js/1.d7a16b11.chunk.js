(this["webpackJsonplanding-page"]=this["webpackJsonplanding-page"]||[]).push([[1],{115:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(119);function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}},116:function(t,e,n){"use strict";function r(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}function o(t,e){var n=e.left,r=e.right,o=e.up,i=e.down,a=e.top,s=e.bottom,u=e.big,c=e.mirror,l=e.opposite,h=(n?1:0)|(r?2:0)|(a||i?4:0)|(s||o?8:0)|(c?16:0)|(l?32:0)|(t?64:0)|(u?128:0);if(d.hasOwnProperty(h))return d[h];var p=n||r||o||i||a||s,y=void 0,m=void 0;if(p){if(!c!=!(t&&l)){var b=[r,n,s,a,i,o];n=b[0],r=b[1],a=b[2],s=b[3],o=b[4],i=b[5]}var v=u?"2000px":"100%";y=n?"-"+v:r?v:"0",m=i||a?"-"+v:o||s?v:"0"}return d[h]=(0,f.animation)((t?"to":"from")+" {"+(p?" transform: translate3d("+y+", "+m+", 0);":"")+"}\n     "+(t?"from":"to")+" {transform: none;} "),d[h]}function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f.defaults,e=t.children,n=(t.out,t.forever),i=t.timeout,a=t.duration,s=void 0===a?f.defaults.duration:a,u=t.delay,l=void 0===u?f.defaults.delay:u,d=t.count,h=void 0===d?f.defaults.count:d,p=r(t,["children","out","forever","timeout","duration","delay","count"]),y={make:o,duration:void 0===i?s:i,delay:l,forever:n,count:h,style:{animationFillMode:"both"},reverse:p.left};return(0,c.default)(p,y,y,e)}Object.defineProperty(e,"__esModule",{value:!0});var a,s=n(19),u=n(80),c=(a=u)&&a.__esModule?a:{default:a},f=n(54),l={out:s.bool,left:s.bool,right:s.bool,top:s.bool,bottom:s.bool,big:s.bool,mirror:s.bool,opposite:s.bool,duration:s.number,timeout:s.number,delay:s.number,count:s.number,forever:s.bool},d={};i.propTypes=l,e.default=i,t.exports=e.default},119:function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return r}))},140:function(t,e,n){"use strict";(function(t){var r=n(143),o=n(144),i=setTimeout;function a(t){return Boolean(t&&"undefined"!==typeof t.length)}function s(){}function u(t){if(!(this instanceof u))throw new TypeError("Promises must be constructed via new");if("function"!==typeof t)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],p(t,this)}function c(t,e){for(;3===t._state;)t=t._value;0!==t._state?(t._handled=!0,u._immediateFn((function(){var n=1===t._state?e.onFulfilled:e.onRejected;if(null!==n){var r;try{r=n(t._value)}catch(o){return void l(e.promise,o)}f(e.promise,r)}else(1===t._state?f:l)(e.promise,t._value)}))):t._deferreds.push(e)}function f(t,e){try{if(e===t)throw new TypeError("A promise cannot be resolved with itself.");if(e&&("object"===typeof e||"function"===typeof e)){var n=e.then;if(e instanceof u)return t._state=3,t._value=e,void d(t);if("function"===typeof n)return void p((r=n,o=e,function(){r.apply(o,arguments)}),t)}t._state=1,t._value=e,d(t)}catch(i){l(t,i)}var r,o}function l(t,e){t._state=2,t._value=e,d(t)}function d(t){2===t._state&&0===t._deferreds.length&&u._immediateFn((function(){t._handled||u._unhandledRejectionFn(t._value)}));for(var e=0,n=t._deferreds.length;e<n;e++)c(t,t._deferreds[e]);t._deferreds=null}function h(t,e,n){this.onFulfilled="function"===typeof t?t:null,this.onRejected="function"===typeof e?e:null,this.promise=n}function p(t,e){var n=!1;try{t((function(t){n||(n=!0,f(e,t))}),(function(t){n||(n=!0,l(e,t))}))}catch(r){if(n)return;n=!0,l(e,r)}}u.prototype.catch=function(t){return this.then(null,t)},u.prototype.then=function(t,e){var n=new this.constructor(s);return c(this,new h(t,e,n)),n},u.prototype.finally=r.a,u.all=function(t){return new u((function(e,n){if(!a(t))return n(new TypeError("Promise.all accepts an array"));var r=Array.prototype.slice.call(t);if(0===r.length)return e([]);var o=r.length;function i(t,a){try{if(a&&("object"===typeof a||"function"===typeof a)){var s=a.then;if("function"===typeof s)return void s.call(a,(function(e){i(t,e)}),n)}r[t]=a,0===--o&&e(r)}catch(u){n(u)}}for(var s=0;s<r.length;s++)i(s,r[s])}))},u.allSettled=o.a,u.resolve=function(t){return t&&"object"===typeof t&&t.constructor===u?t:new u((function(e){e(t)}))},u.reject=function(t){return new u((function(e,n){n(t)}))},u.race=function(t){return new u((function(e,n){if(!a(t))return n(new TypeError("Promise.race accepts an array"));for(var r=0,o=t.length;r<o;r++)u.resolve(t[r]).then(e,n)}))},u._immediateFn="function"===typeof t&&function(e){t(e)}||function(t){i(t,0)},u._unhandledRejectionFn=function(t){"undefined"!==typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",t)},e.a=u}).call(this,n(141).setImmediate)},141:function(t,e,n){(function(t){var r="undefined"!==typeof t&&t||"undefined"!==typeof self&&self||window,o=Function.prototype.apply;function i(t,e){this._id=t,this._clearFn=e}e.setTimeout=function(){return new i(o.call(setTimeout,r,arguments),clearTimeout)},e.setInterval=function(){return new i(o.call(setInterval,r,arguments),clearInterval)},e.clearTimeout=e.clearInterval=function(t){t&&t.close()},i.prototype.unref=i.prototype.ref=function(){},i.prototype.close=function(){this._clearFn.call(r,this._id)},e.enroll=function(t,e){clearTimeout(t._idleTimeoutId),t._idleTimeout=e},e.unenroll=function(t){clearTimeout(t._idleTimeoutId),t._idleTimeout=-1},e._unrefActive=e.active=function(t){clearTimeout(t._idleTimeoutId);var e=t._idleTimeout;e>=0&&(t._idleTimeoutId=setTimeout((function(){t._onTimeout&&t._onTimeout()}),e))},n(142),e.setImmediate="undefined"!==typeof self&&self.setImmediate||"undefined"!==typeof t&&t.setImmediate||this&&this.setImmediate,e.clearImmediate="undefined"!==typeof self&&self.clearImmediate||"undefined"!==typeof t&&t.clearImmediate||this&&this.clearImmediate}).call(this,n(79))},142:function(t,e,n){(function(t,e){!function(t,n){"use strict";if(!t.setImmediate){var r,o=1,i={},a=!1,s=t.document,u=Object.getPrototypeOf&&Object.getPrototypeOf(t);u=u&&u.setTimeout?u:t,"[object process]"==={}.toString.call(t.process)?r=function(t){e.nextTick((function(){f(t)}))}:function(){if(t.postMessage&&!t.importScripts){var e=!0,n=t.onmessage;return t.onmessage=function(){e=!1},t.postMessage("","*"),t.onmessage=n,e}}()?function(){var e="setImmediate$"+Math.random()+"$",n=function(n){n.source===t&&"string"===typeof n.data&&0===n.data.indexOf(e)&&f(+n.data.slice(e.length))};t.addEventListener?t.addEventListener("message",n,!1):t.attachEvent("onmessage",n),r=function(n){t.postMessage(e+n,"*")}}():t.MessageChannel?function(){var t=new MessageChannel;t.port1.onmessage=function(t){f(t.data)},r=function(e){t.port2.postMessage(e)}}():s&&"onreadystatechange"in s.createElement("script")?function(){var t=s.documentElement;r=function(e){var n=s.createElement("script");n.onreadystatechange=function(){f(e),n.onreadystatechange=null,t.removeChild(n),n=null},t.appendChild(n)}}():r=function(t){setTimeout(f,0,t)},u.setImmediate=function(t){"function"!==typeof t&&(t=new Function(""+t));for(var e=new Array(arguments.length-1),n=0;n<e.length;n++)e[n]=arguments[n+1];var a={callback:t,args:e};return i[o]=a,r(o),o++},u.clearImmediate=c}function c(t){delete i[t]}function f(t){if(a)setTimeout(f,0,t);else{var e=i[t];if(e){a=!0;try{!function(t){var e=t.callback,n=t.args;switch(n.length){case 0:e();break;case 1:e(n[0]);break;case 2:e(n[0],n[1]);break;case 3:e(n[0],n[1],n[2]);break;default:e.apply(void 0,n)}}(e)}finally{c(t),a=!1}}}}}("undefined"===typeof self?"undefined"===typeof t?this:t:self)}).call(this,n(79),n(78))},143:function(t,e,n){"use strict";e.a=function(t){var e=this.constructor;return this.then((function(n){return e.resolve(t()).then((function(){return n}))}),(function(n){return e.resolve(t()).then((function(){return e.reject(n)}))}))}},144:function(t,e,n){"use strict";e.a=function(t){return new this((function(e,n){if(!t||"undefined"===typeof t.length)return n(new TypeError(typeof t+" "+t+" is not iterable(cannot read property Symbol(Symbol.iterator))"));var r=Array.prototype.slice.call(t);if(0===r.length)return e([]);var o=r.length;function i(t,n){if(n&&("object"===typeof n||"function"===typeof n)){var a=n.then;if("function"===typeof a)return void a.call(n,(function(e){i(t,e)}),(function(n){r[t]={status:"rejected",reason:n},0===--o&&e(r)}))}r[t]={status:"fulfilled",value:n},0===--o&&e(r)}for(var a=0;a<r.length;a++)i(a,r[a])}))}},145:function(t,e,n){(function(r){var o;!function(r){"use strict";function i(t){var e=t&&t.Promise||r.Promise,n=t&&t.XMLHttpRequest||r.XMLHttpRequest,o=r;return function(){var t=Object.create(o,{fetch:{value:void 0,writable:!0}});return function(t){if(!t.fetch){var r="URLSearchParams"in t,o="Symbol"in t&&"iterator"in Symbol,i="FileReader"in t&&"Blob"in t&&function(){try{return new Blob,!0}catch(t){return!1}}(),a="FormData"in t,s="ArrayBuffer"in t;if(s)var u=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],c=function(t){return t&&DataView.prototype.isPrototypeOf(t)},f=ArrayBuffer.isView||function(t){return t&&u.indexOf(Object.prototype.toString.call(t))>-1};m.prototype.append=function(t,e){t=h(t),e=p(e);var n=this.map[t];this.map[t]=n?n+","+e:e},m.prototype.delete=function(t){delete this.map[h(t)]},m.prototype.get=function(t){return t=h(t),this.has(t)?this.map[t]:null},m.prototype.has=function(t){return this.map.hasOwnProperty(h(t))},m.prototype.set=function(t,e){this.map[h(t)]=p(e)},m.prototype.forEach=function(t,e){for(var n in this.map)this.map.hasOwnProperty(n)&&t.call(e,this.map[n],n,this)},m.prototype.keys=function(){var t=[];return this.forEach((function(e,n){t.push(n)})),y(t)},m.prototype.values=function(){var t=[];return this.forEach((function(e){t.push(e)})),y(t)},m.prototype.entries=function(){var t=[];return this.forEach((function(e,n){t.push([n,e])})),y(t)},o&&(m.prototype[Symbol.iterator]=m.prototype.entries);var l=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];T.prototype.clone=function(){return new T(this,{body:this._bodyInit})},_.call(T.prototype),_.call(A.prototype),A.prototype.clone=function(){return new A(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new m(this.headers),url:this.url})},A.error=function(){var t=new A(null,{status:0,statusText:""});return t.type="error",t};var d=[301,302,303,307,308];A.redirect=function(t,e){if(-1===d.indexOf(e))throw new RangeError("Invalid status code");return new A(null,{status:e,headers:{location:t}})},t.Headers=m,t.Request=T,t.Response=A,t.fetch=function(t,r){return new e((function(e,o){var a=new T(t,r),s=new n;s.onload=function(){var t={status:s.status,statusText:s.statusText,headers:j(s.getAllResponseHeaders()||"")};t.url="responseURL"in s?s.responseURL:t.headers.get("X-Request-URL");var n="response"in s?s.response:s.responseText;e(new A(n,t))},s.onerror=function(){o(new TypeError("Network request failed"))},s.ontimeout=function(){o(new TypeError("Network request failed"))},s.open(a.method,a.url,!0),"include"===a.credentials?s.withCredentials=!0:"omit"===a.credentials&&(s.withCredentials=!1),"responseType"in s&&i&&(s.responseType="blob"),a.headers.forEach((function(t,e){s.setRequestHeader(e,t)})),s.send("undefined"===typeof a._bodyInit?null:a._bodyInit)}))},t.fetch.polyfill=!0}function h(t){if("string"!==typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function p(t){return"string"!==typeof t&&(t=String(t)),t}function y(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return o&&(e[Symbol.iterator]=function(){return e}),e}function m(t){this.map={},t instanceof m?t.forEach((function(t,e){this.append(e,t)}),this):Array.isArray(t)?t.forEach((function(t){this.append(t[0],t[1])}),this):t&&Object.getOwnPropertyNames(t).forEach((function(e){this.append(e,t[e])}),this)}function b(t){if(t.bodyUsed)return e.reject(new TypeError("Already read"));t.bodyUsed=!0}function v(t){return new e((function(e,n){t.onload=function(){e(t.result)},t.onerror=function(){n(t.error)}}))}function w(t){var e=new FileReader,n=v(e);return e.readAsArrayBuffer(t),n}function g(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function _(){return this.bodyUsed=!1,this._initBody=function(t){if(this._bodyInit=t,t)if("string"===typeof t)this._bodyText=t;else if(i&&Blob.prototype.isPrototypeOf(t))this._bodyBlob=t;else if(a&&FormData.prototype.isPrototypeOf(t))this._bodyFormData=t;else if(r&&URLSearchParams.prototype.isPrototypeOf(t))this._bodyText=t.toString();else if(s&&i&&c(t))this._bodyArrayBuffer=g(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer]);else{if(!s||!ArrayBuffer.prototype.isPrototypeOf(t)&&!f(t))throw new Error("unsupported BodyInit type");this._bodyArrayBuffer=g(t)}else this._bodyText="";this.headers.get("content-type")||("string"===typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):r&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},i&&(this.blob=function(){var t=b(this);if(t)return t;if(this._bodyBlob)return e.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return e.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return e.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?b(this)||e.resolve(this._bodyArrayBuffer):this.blob().then(w)}),this.text=function(){var t=b(this);if(t)return t;if(this._bodyBlob)return function(t){var e=new FileReader,n=v(e);return e.readAsText(t),n}(this._bodyBlob);if(this._bodyArrayBuffer)return e.resolve(function(t){for(var e=new Uint8Array(t),n=new Array(e.length),r=0;r<e.length;r++)n[r]=String.fromCharCode(e[r]);return n.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return e.resolve(this._bodyText)},a&&(this.formData=function(){return this.text().then(O)}),this.json=function(){return this.text().then(JSON.parse)},this}function T(t,e){var n=(e=e||{}).body;if(t instanceof T){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new m(t.headers)),this.method=t.method,this.mode=t.mode,n||null==t._bodyInit||(n=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"omit",!e.headers&&this.headers||(this.headers=new m(e.headers)),this.method=function(t){var e=t.toUpperCase();return l.indexOf(e)>-1?e:t}(e.method||this.method||"GET"),this.mode=e.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&n)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(n)}function O(t){var e=new FormData;return t.trim().split("&").forEach((function(t){if(t){var n=t.split("="),r=n.shift().replace(/\+/g," "),o=n.join("=").replace(/\+/g," ");e.append(decodeURIComponent(r),decodeURIComponent(o))}})),e}function j(t){var e=new m;return t.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach((function(t){var n=t.split(":"),r=n.shift().trim();if(r){var o=n.join(":").trim();e.append(r,o)}})),e}function A(t,e){e||(e={}),this.type="default",this.status=void 0===e.status?200:e.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new m(e.headers),this.url=e.url||"",this._initBody(t)}}("undefined"!==typeof t?t:this),{fetch:t.fetch,Headers:t.Headers,Request:t.Request,Response:t.Response}}()}void 0===(o=function(){return i}.call(e,n,e,t))||(t.exports=o)}("undefined"!==typeof self?self:"undefined"!==typeof r?r:this)}).call(this,n(79))},181:function(t,e,n){"use strict";n.d(e,"a",(function(){return F}));var r=n(0),o=n.n(r),i=n(140),a=n(145),s=n.n(a);function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function f(t,e,n){return e&&c(t.prototype,e),n&&c(t,n),t}var l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",d=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/;var h,p=function(t){return function(t){for(var e,n,r,o,i="",a=0,s=(t=String(t)).length%3;a<t.length;){if((n=t.charCodeAt(a++))>255||(r=t.charCodeAt(a++))>255||(o=t.charCodeAt(a++))>255)throw new TypeError("Failed to execute 'btoa' on 'Window': The string to be encoded contains characters outside of the Latin1 range.");i+=l.charAt((e=n<<16|r<<8|o)>>18&63)+l.charAt(e>>12&63)+l.charAt(e>>6&63)+l.charAt(63&e)}return s?i.slice(0,s-3)+"===".substring(s):i}(JSON.stringify(t))},y=function(t){var e="@formspree/core@".concat("2.6.2");return t?"".concat(t," ").concat(e):e},m=function(){return navigator.webdriver||!!document.documentElement.getAttribute(function(t){if(t=String(t).replace(/[\t\n\f\r ]+/g,""),!d.test(t))throw new TypeError("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");t+="==".slice(2-(3&t.length));for(var e,n,r,o="",i=0;i<t.length;)e=l.indexOf(t.charAt(i++))<<18|l.indexOf(t.charAt(i++))<<12|(n=l.indexOf(t.charAt(i++)))<<6|(r=l.indexOf(t.charAt(i++))),o+=64===n?String.fromCharCode(e>>16&255):64===r?String.fromCharCode(e>>16&255,e>>8&255):String.fromCharCode(e>>16&255,e>>8&255,255&e);return o}("d2ViZHJpdmVy"))||!!window.callPhantom||!!window._phantom},b=function(){function t(){u(this,t),this.loadedAt=1*new Date,this.webdriver=m()}return f(t,[{key:"teardown",value:function(){}},{key:"data",value:function(){return{loadedAt:this.loadedAt,webdriver:this.webdriver}}}]),t}(),v=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};u(this,t),this.project=e.project,"undefined"!==typeof window&&this.startBrowserSession()}return f(t,[{key:"startBrowserSession",value:function(){this.session||(this.session=new b)}},{key:"teardown",value:function(){this.session&&this.session.teardown()}},{key:"submitForm",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.endpoint||"https://formspree.io",o=n.fetchImpl||s()({Promise:i.a}).fetch,a=this.project?"".concat(r,"/p/").concat(this.project,"/f/").concat(t):"".concat(r,"/f/").concat(t),u=function(t){return t instanceof FormData?t:JSON.stringify(t)},c={Accept:"application/json","Formspree-Client":y(n.clientName)};this.session&&(c["Formspree-Session-Data"]=p(this.session.data())),e instanceof FormData||(c["Content-Type"]="application/json");var f={method:"POST",mode:"cors",body:u(e),headers:c};return o(a,f).then((function(t){return t.json().then((function(e){return{body:e,response:t}}))}))}}]),t}(),w=function(t){return new v(t)};function g(t){return(g="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function T(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(u){o=!0,i=u}finally{try{r||null==s.return||s.return()}finally{if(o)throw i}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var O=o.a.createContext({client:void 0});O.displayName="Formspree";function j(){return Object(r.useContext)(O).client||(h||(h=w()),h)}var A="2.2.3";function E(t){return void 0!==t.preventDefault}function F(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object(r.useState)(!1),o=T(n,2),i=o[0],a=o[1],s=Object(r.useState)(!1),u=T(s,2),c=u[0],f=u[1],l=Object(r.useState)([]),d=T(l,2),h=d[0],p=d[1],y=j(),m=e.client||y;if(!m)throw new Error("You must provide a Formspree client");if(!t)throw new Error('You must provide a form key or hashid (e.g. useForm("myForm") or useForm("123xyz")');var b=!!e.debug,v=e.data,w=function(n){var r=E(n)?function(t){t.preventDefault();var e=t.target;if("FORM"!=e.tagName)throw new Error("submit was triggered for a non-form element");return new FormData(e)}(n):n,o=function(t,e){r instanceof FormData?r.append(t,e):r=Object.assign(r,_({},t,e))};if("object"===g(v))for(var i in v)"function"===typeof v[i]?o(i,v[i].call(null)):o(i,v[i]);return a(!0),m.submitForm(t,r,{endpoint:e.endpoint,clientName:"@formspree/react@".concat(A)}).then((function(t){var e,n=t.response.status;return 200===n?(b&&console.log("Form submitted",t),f(!0),p([])):n>=400&&n<500?((e=t.body).errors&&p(e.errors),b&&console.log("Validation error",t),f(!1)):(b&&console.log("Unexpected error",t),f(!1)),t})).catch((function(t){throw b&&console.log("Unexpected error",t),f(!1),t})).finally((function(){a(!1)}))};return[{submitting:i,succeeded:c,errors:h},w]}}}]);
//# sourceMappingURL=1.d7a16b11.chunk.js.map