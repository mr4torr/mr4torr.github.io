!function(e){function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}var t={};n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(n){return e[n]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="",n(n.s=0)}([function(e,n,t){"use strict";var r=function(e){return e&&e.__esModule?e:{"default":e}}(t(1));t(2);var i=i||{};i.init={spf:function(){r["default"].init({"animation-class":"spf-animate","animation-duration":425,"cache-lifetime":6e5,"cache-max":50,"cache-unified":!0,"link-class":"spf-link","nolink-class":"spf-nolink","navigate-limit":100,"navigate-lifetime":864e5,"reload-identifier":null,"request-timeout":0,"url-identifier":"?spf=__type__"})}},i.init.spf(),window.counter=function(){var e=0;setInterval(function(){e++,document.getElementById("counter").innerHTML=e},1e3)}},function(e,n,t){var r,i;!function(){function o(e,n){var t=Array.prototype.slice.call(arguments,2);return function(){var r=t.slice();return r.push.apply(r,arguments),e.apply(n,r)}}function a(e,n){if(document.createEvent){var t=document.createEvent("CustomEvent");return t.initCustomEvent(e,!0,!0,n),document.dispatchEvent(t)}return!0}function s(){}function c(e,n){return Hn[e]=n}function u(e,n){var t=n||document;return t.querySelectorAll?t.querySelectorAll(e):[]}function l(e,n,t){for(;e;){if(n(e))return e;if(t&&e==t)break;e=e.parentNode}return null}function f(e,n,t){var r=(n=n||document).createElement("iframe");return r.id=e||"",r.src='javascript:""',r.style.display="none",t&&(r.onload=o(t,null,r)),n.body.appendChild(r),r}function d(e,n,t){var r=null,i=window.history.state;if(i){var o;r={};for(o in i)r[o]=i[o]}if(n)for(o in r=r||{},n)r[o]=n[o];p(!0,e,r,t)}function p(e,n,t,r){if(n||t){n=n||window.location.href,t=t||{};var i=Rn();if(c("history-timestamp",i),t["spf-timestamp"]=i,e)h(t,n);else{if("function"!=typeof(e=v().contentWindow.history.pushState))throw Error("history.pushState is not a function.");e.call(window.history,t,"",n)}c("history-url",n),r&&(r=Hn["history-callback"])&&r(n,t)}}function m(e){var n=window.location.href;if(Hn["history-ignore-pop"])c("history-ignore-pop",!1);else if(e.state){var t=(e=e.state)["spf-timestamp"];n==Hn["history-url"]?(c("history-timestamp",t),h(e,n)):(e["spf-back"]=t<parseInt(Hn["history-timestamp"],10),e["spf-current"]=Hn["history-url"],c("history-timestamp",t),c("history-url",n),(t=Hn["history-callback"])&&t(n,e))}}function h(e,n){var t=v().contentWindow.history.replaceState;if("function"!=typeof t)throw Error("history.replaceState is not a function");t.call(window.history,e,"",n)}function v(){var e=document.getElementById("history-iframe");return e||(e=f("history-iframe")),e}function y(e,n){if(e.forEach)e.forEach(n,void 0);else for(var t=0,r=e.length;t<r;t++)t in e&&n.call(void 0,e[t],t,e)}function g(e,n){if(e.every)return e.every(n,void 0);for(var t=0,r=e.length;t<r;t++)if(t in e&&!n.call(void 0,e[t],t,e))return!1;return!0}function w(e,n){if(e.some)return e.some(n,void 0);for(var t=0,r=e.length;t<r;t++)if(t in e&&n.call(void 0,e[t],t,e))return!0;return!1}function b(e,n){if(e.filter)return e.filter(n,void 0);var t=[];return y(e,function(e,r,i){n.call(void 0,e,r,i)&&t.push(e)}),t}function x(e,n){if(e.map)return e.map(n,void 0);var t=[];return t.length=e.length,y(e,function(e,r,i){t[r]=n.call(void 0,e,r,i)}),t}function T(e){return"[object Array]"==Object.prototype.toString.call(e)?e:[e]}function E(e){var n=C();e in n&&delete n[e]}function k(){var e,n=C();for(e in n)S(n[e])||delete n[e];if(n=C(),e=parseInt(Fn["cache-max"],10),e=isNaN(e)?1/0:e,!(0>=(e=Object.keys(n).length-e)))for(var t=0;t<e;t++){var r,i,o=1/0;for(i in n)n[i].count<o&&(r=i,o=n[i].count);delete n[r]}}function S(e){if(!(e&&"data"in e))return!1;var n=e.life;return n=isNaN(n)?1/0:n,e=e.time,Rn()-e<n}function O(e){var n=parseInt(Hn["cache-counter"],10)||0;c("cache-counter",++n),e.count=n}function C(e){return!e&&"cache-storage"in Hn?Hn["cache-storage"]:c("cache-storage",e||{})}function j(e){return e.classList?e.classList:e.className&&e.className.match(/\S+/g)||[]}function L(e,n){return!!n&&(e.classList?e.classList.contains(n):w(j(e),function(e){return e==n}))}function N(e,n){n&&(e.classList?e.classList.add(n):L(e,n)||(e.className+=" "+n))}function I(e,n){if(n)if(e.classList)e.classList.remove(n);else{var t=b(t=j(e),function(e){return e!=n});e.className=t.join(" ")}}function P(e,n){var t=e.length-n.length;return 0<=t&&e.indexOf(n,t)==t}function _(e){return"[object String]"==Object.prototype.toString.call(e)}function q(e,n){var t=e.split(n),r=1==t.length;return[t[0],r?"":n,r?"":t.slice(1).join(n)]}function A(e){e.data&&_(e.data)&&0==e.data.lastIndexOf(Jn,0)&&B(e.data.substring(Jn.length))}function B(e){var n=Gn[e];n&&(delete Gn[e],n())}function M(e){window.addEventListener?window.addEventListener("message",e,!1):window.attachEvent&&window.attachEvent("onmessage",e)}function R(e){window.removeEventListener?window.removeEventListener("message",e,!1):window.detachEvent&&window.detachEvent("onmessage",e)}function H(e,n){e&&n&&(e in Wn||(Wn[e]=[]),Wn[e].push(n))}function D(e){e in Wn&&y(Wn[e],function(e,n,t){t[n]=null,e&&e()})}function F(e,n,t){var r=$n[e];return e&&n?(r||(r=$n[e]={items:[],j:0,i:0,o:1}),r.items.push({t:n,p:t||0})):r&&r.items.length||0}function K(e,n){var t=$n[e];if(t){var r=!!t.j||!!t.i;0<t.o&&(n||!r)&&W(e,n)}}function X(e){(e=$n[e])&&e.o--}function J(e,n){var t=$n[e];t&&(t.o++,K(e,n))}function G(e){var n=$n[e];n&&($(n),delete $n[e])}function W(e,n){var t=$n[e];if(t&&($(t),0<t.o&&t.items.length)){var r=t.items[0];if(r){var i=o(function(e,n){n(),e()},null,o(W,null,e,n));n?(t.items.shift(),i(r.t)):function(e,n,t){n.p?(t=o(t,null,s),e.i=setTimeout(t,n.p),n.p=0):(e.items.shift(),t=o(t,null,n.t),(n=(n=Fn["advanced-task-scheduler"])&&n.addTask)?e.j=n(t):e.i=setTimeout(t,0))}(t,r,i)}}}function $(e){if(e.j){var n=Fn["advanced-task-scheduler"];(n=n&&n.cancelTask)&&n(e.j),e.j=0}e.i&&(clearTimeout(e.i),e.i=0)}function U(e){var n=document.createElement("a");return n.href=e,n.href=n.href,(e={href:n.href,protocol:n.protocol,host:n.host,hostname:n.hostname,port:n.port,pathname:n.pathname,search:n.search,hash:n.hash,L:n.L,K:n.K}).origin=e.protocol+"//"+e.host,e.pathname&&"/"==e.pathname[0]||(e.pathname="/"+e.pathname),e}function z(e,n){var t=U(e);return n?t.href:q(t.href,"#")[0]}function V(e){var n=Fn["advanced-persistent-parameters"]||"",t=q(e,"#"),r=-1!=(e=t[0]).indexOf("?")?"&":"?";return e+(n?r+n:"")+t[1]+t[2]}function Y(e,n,t,r){var i=e==tt;n=le(e,n);var s,c=t||"^"+n,u=fe(e,c);if(t&&(s=ye(e,t))&&n!=s&&(a(i?"spfjsbeforeunload":"spfcssbeforeunload",{name:t,url:s}),Q(e,t,s),H(u,o(ee,null,e,t,s))),i=fe(e,n),(i=zn[i])&&c!=i){var l=fe(e,i);delete Vn[l],l=fe(e,n),delete zn[l],(l=fe(e,i))&&u&&l in Wn&&(Wn[u]=(Wn[u]||[]).concat(Wn[l]),delete Wn[l])}l=fe(e,n),zn[l]=c,ve(e,c,n),H(u,r),r=o(ne,null,e),me(e,n)?(i&&c!=i&&(e=ie(e,n))&&e.setAttribute("name",t||""),r()):(e=te(e,n,r,void 0,void 0,s))&&t&&e.setAttribute("name",t)}function Z(e,n){var t=ye(e,n);Q(e,n,t),ee(e,n,t)}function Q(e,n,t){var r=fe(e,n);delete Vn[r],t&&(t=fe(e,t),delete zn[t]),e=fe(e,n),delete Wn[e]}function ee(e,n,t){t&&(a(e==tt?"spfjsunload":"spfcssunload",{name:n,url:t}),re(e,t))}function ne(e){var n,t=fe(e,"");for(n in Wn)0==n.indexOf(t)&&g(n.substring(t.length).split("|"),o(ge,null,e))&&D(n)}function te(e,n,t,r,i,o){function a(){return me(e,n,i)&&pe(Qn,e,n,i),s&&u&&u.parentNode&&c==document&&u.parentNode.removeChild(u),t&&setTimeout(t,0),null}var s=e==tt;n=le(e,n),pe(Zn,e,n,i);var c=r||document,u=c.createElement(s?"script":"link");return n?(r=de(n),u.className=fe(e,r),"onload"in u?u.onerror=u.onload=a:u.onreadystatechange=function(){/^c|loade/.test(u.readyState)&&a()},r=c.getElementsByTagName("head")[0]||c.body,s?(u.async=!0,u.src=n,r.insertBefore(u,r.firstChild)):(u.rel="stylesheet",u.href=n,(o=o?ie(e,o,r):null)?r.insertBefore(u,o):r.appendChild(u)),u):a()}function re(e,n){var t=ie(e,n=le(e,n),void 0);t&&t.parentNode&&t.parentNode.removeChild(t),t=fe(e,n),delete Un[t]}function ie(e,n,t){return u(e="."+fe(e,n=de(n)),t)[0]}function oe(e){var n=e==tt,t=[];y(u(n?"script[src]":'link[rel~="stylesheet"]'),function(r){var i=n?r.src:r.href;if(i=le(e,i),!me(e,i)){pe(Qn,e,i);var o=de(i);if(N(r,o=fe(e,o)),o=r.getAttribute("name")){var a=fe(e,i);zn[a]=o,ve(e,o,i)}t.push(r)}})}function ae(e,n,t){if(n&&(n=le(e,n),t||!me(e,n)))if(t&&e==nt)!function(e){var n=new Image;Yn&&(e=e+"#"+Rn()),n.src=e}(n);else{var r,i=fe(e,r=de(n)),a=fe(e,"prefetch");if(r=document.getElementById(a)){if(!t&&r.contentWindow.document.getElementById(i))return}else r=f(a,null,function(e){e.title=a,K(a,!0)});e=o(se,null,r,e,n,i,a),r.title?e():F(a,e)}}function se(e,n,t,r,i){var o=n==tt,a=n==et,s=(e=e.contentWindow.document).getElementById(r);s&&s.parentNode.removeChild(s),o?(s=e.createElement("object"),Yn?e.createElement("script").src=t:s.data=t,s.id=r,e.body.appendChild(s)):a?(s=te(n,t,null,e,i)).id=r:(s=e.createElement("img"),Yn&&(t=t+"#"+Rn()),s.src=t,s.id=r,e.body.appendChild(s))}function ce(e,n,t){for(var r,i=e==tt,o=ye(e,t),a=0,s=0,c=(r=(r=n.replace(/\s/g,""))||"").length;s<c;++s)a=31*a+r.charCodeAt(s),a%=4294967296;ve(e,t,r="hash-"+a),!he(e,r)&&(n=ue(e,n))&&(pe(Qn,e,r),n&&!i&&(i=fe(e,i=de(r)),n.className=i,n.setAttribute("name",t)),(o=o&&o[0])&&re(e,o))}function ue(e,n){if(!(n=Kn(n)))return null;var t,r=document.getElementsByTagName("head")[0]||document.body;return e==tt?((t=document.createElement("script")).text=n,r.appendChild(t),r.removeChild(t)):(t=document.createElement("style"),r.appendChild(t),"styleSheet"in t?t.styleSheet.cssText=n:t.appendChild(document.createTextNode(n))),t}function le(e,n){var t="rsrc-p-"+e;if(n){var r=n.indexOf("//");if(0>r){if(0==n.lastIndexOf("hash-",0))return n;if(_(t=Hn[t]||""))n=t+n;else for(var i in t)n=n.replace(i,t[i]);e!=nt&&(n=0>n.indexOf("."+e)?n+"."+e:n),n=z(n)}else 0==r&&(n=z(n))}return n}function fe(e,n,t){return e+"-"+n+(t?"-"+t:"")}function de(e){return e?String(e).replace(/[^\w]/g,""):""}function pe(e,n,t,r){n=fe(n,t,r),Un[n]=e}function me(e,n,t){return e=fe(e,n,t),Un[e]}function he(e,n){var t=me(e,n);return""==n||t==Qn}function ve(e,n,t){e=fe(e,n),Vn[e]=t}function ye(e,n){var t=fe(e,n);return Vn[t]}function ge(e,n){var t=ye(e,n);return void 0!=t&&he(e,t)}function we(e,n,t){Y(tt,e,n,t)}function be(e){Z(tt,e)}function xe(e,n){te(tt,e,n)}function Te(e){y(e=T(e),function(e){ae(tt,e)})}function Ee(e,n,t){var r=[];y(e=b(e=T(e),function(e){return!!e}),function(e){void 0==ye(tt,e)&&r.push(e)});var i=!r.length;if(n){var a=g(e,o(ge,null,tt));i&&a?n():H(e=fe(tt,e.sort().join("|")),n)}t&&!i&&t(r)}function ke(e,n){y(e=T(e),function(e){if(e){var n=it[e]||e,t=(n=le(tt,n),ye(tt,e));t&&n!=t&&Oe(e)}}),Ee(e,n,Se)}function Se(e){y(e,function(e){function n(){we(r,e)}var t=rt[e],r=it[e]||e;t?ke(t,n):n()})}function Oe(e){y(e=T(e),function(e){var n,t=[];for(n in rt)y(T(rt[n]),function(r){r==e&&t.push(n)});y(t,function(e){Oe(e)}),be(e)})}function Ce(e,n){ce(tt,e,n)}function je(e){ue(tt,e)}function Le(e,n,t){Y(et,e,n,t)}function Ne(e,n){te(et,e,n)}function Ie(e){y(e=T(e),function(e){ae(et,e)})}function Pe(e,n,t){if(n){n=[];var r,i=0;t&&(e+="\r\n");var o=e.indexOf(ht,i);for(-1<o&&(i=o+ht.length);-1<(o=e.indexOf(vt,i));)r=Kn(e.substring(i,o)),i=o+vt.length,r&&n.push(JSON.parse(r));return-1<(o=e.indexOf(yt,i))&&(r=Kn(e.substring(i,o)),i=o+yt.length,r&&n.push(JSON.parse(r))),r="",e.length>i&&(r=e.substring(i),t&&P(r,"\r\n")&&(r=r.substring(0,r.length-2))),{n:n=Re(n),c:r}}return{n:n=Re(T(e=JSON.parse(e))),c:""}}function _e(e,n,t,r){var i,a=t&&0==t.type.lastIndexOf("navigate",0),s=t&&t.reverse,u=t&&!!t.position,l=t&&t.f,f=n.name||"",p="process "+z(e),m=!Fn["experimental-process-async"];i=0,n.timing||(n.timing={}),n.title&&(document.title=n.title),a&&n.url&&z(n.url)!=z(window.location.href)&&d(n.url+window.location.hash),n.head&&(i=o(function(e,n){var t=He(e);Je(t),Ke(t),X(p),De(t,function(){n.spfProcessHead=Rn(),J(p,m)})},null,n.head,n.timing),i=F(p,i)),n.attr&&(i=o(function(e,n){for(var t in e){var r=document.getElementById(t);if(r){var i=e[t],o=void 0;for(o in i){var a=i[o];"class"==o?r.className=a:"style"==o?r.style.cssText=a:(r.setAttribute(o,a),"value"==o&&(r[o]=a))}}}n.spfProcessAttr=Rn()},null,n.attr,n.timing),i=F(p,i));var h,v=n.body||{},y=i;for(h in v)i=o(function(e,n){var r=document.getElementById(e);if(r){!a||u||l||(c("nav-scroll-position",null),c("nav-scroll-url",null),window.scroll(0,0),l=!0,t&&(t.f=!0));var i=He(n);Ke(i);var d=function(){X(p),De(i,function(){J(p,m)})},h=Fn["animation-class"];at&&L(r,h)?(r=new Ge(r,i.html,h,f,!!s),X(p),K(r.key,!0),F(r.key,o(Ae,null,r),0),F(r.key,o(Be,null,r),17),F(r.key,o(Me,null,r),r.duration),F(r.key,o(function(){d(),J(p,m)},null),0),K(r.key)):(h=Fn["experimental-html-handler"])?(X(p),h(i.html,r,function(){d(),J(p,m)})):(r.innerHTML=i.html,d())}},null,h,v[h],n.timing),i=F(p,i);v=i-y,n.foot?(i=o(function(e,n,t){t&&(n.spfProcessBody=Rn()),Ke(e=He(e)),X(p),De(e,function(){n.spfProcessFoot=Rn(),J(p,m)})},null,n.foot,n.timing,v),i=F(p,i)):v&&(i=o(function(e){e.spfProcessBody=Rn()},null,n.timing),i=F(p,i)),r&&(i=F(p,o(r,null,e,n))),K(p,m)}function qe(e,n,t,r){t="preprocess "+z(e),n.head&&F(t,o(function(e){Je(e=He(e)),Xe(e),Fe(e)},null,n.head));var i,a=n.body||{};for(i in a)a[i]&&F(t,o(function(e,n){var t=He(n);Xe(t),Fe(t)},null,i,a[i]));n.foot&&F(t,o(function(e){Xe(e=He(e)),Fe(e)},null,n.foot)),r&&F(t,o(r,null,e,n)),K(t)}function Ae(e){N(e.element,e.k),N(e.element,e.u),N(e.element,e.G),N(e.element,e.C),N(e.element,e.D),e.h=document.createElement("div"),e.h.className=e.J;var n=e.element,t=e.h;if(t){for(var r;r=n.firstChild;)t.appendChild(r);n.appendChild(t)}e.g=document.createElement("div"),e.g.className=e.I,e.g.innerHTML=e.H,e.reverse?(n=e.h).parentNode.insertBefore(e.g,n):(n=e.h).parentNode.insertBefore(e.g,n.nextSibling)}function Be(e){I(e.element,e.C),I(e.element,e.D),N(e.element,e.r),N(e.element,e.s)}function Me(e){e.element.removeChild(e.h);var n,t=e.g,r=t.parentNode;if(r&&11!=r.nodeType)if(t.removeNode)t.removeNode(!1);else{for(;n=t.firstChild;)r.insertBefore(n,t);r.removeChild(t)}I(e.element,e.r),I(e.element,e.s),I(e.element,e.u),I(e.element,e.G),I(e.element,e.k)}function Re(e){return y(T(e),function(e){if(e){if(e.head&&(e.head=He(e.head)),e.body)for(var n in e.body)e.body[n]=He(e.body[n]);e.foot&&(e.foot=He(e.foot))}}),e}function He(e){var n=new function(){this.html="",this.scripts=[],this.styles=[],this.links=[]};return e?_(e)?(e=(e=e.replace(ct,function(e,t,r,i){if("script"==t){t=(t=r.match(ft))?t[1]:"";var o=(o=r.match(pt))?o[1]:"",a=ut.test(r);return(r=!(r=mt.exec(r))||-1!=r[1].indexOf("/javascript")||-1!=r[1].indexOf("/x-javascript")||-1!=r[1].indexOf("/ecmascript"))?(n.scripts.push({url:o,text:i,name:t,async:a}),""):e}return"style"==t&&(t=(t=r.match(ft))?t[1]:"",r=!(r=mt.exec(r))||-1!=r[1].indexOf("text/css"))?(n.styles.push({url:"",text:i,name:t}),""):e})).replace(st,function(e,t){if("stylesheet"==(r=(r=t.match(dt))?r[1]:"")){var r=(r=t.match(ft))?r[1]:"",i=(i=t.match(lt))?i[1]:"";return n.styles.push({url:i,text:"",name:r}),""}return"spf-preconnect"==r?(i=(i=t.match(lt))?i[1]:"",n.links.push({url:i,rel:r}),""):e}),n.html=e,n):(e.scripts&&y(e.scripts,function(e){n.scripts.push({url:e.url||"",text:e.text||"",name:e.name||"",async:e.async||!1})}),e.styles&&y(e.styles,function(e){n.styles.push({url:e.url||"",text:e.text||"",name:e.name||""})}),e.links&&y(e.links,function(e){"spf-preconnect"==e.rel&&n.links.push({url:e.url||"",rel:e.rel||""})}),n.html=e.html||"",n):n}function De(e,n){if(0>=e.scripts.length)n&&n();else{var t=-1,r=function(){if(++t<e.scripts.length){var i=e.scripts[t],a=function(){};i.url?a=i.name?o(we,null,i.url,i.name):o(xe,null,i.url):i.text&&(a=i.name?o(Ce,null,i.text,i.name):o(je,null,i.text)),i.url&&!i.async?a(r):(a(),r())}else n&&n()};r()}}function Fe(e){0>=e.scripts.length||Te(e=x(e.scripts,function(e){return e.url}))}function Ke(e){0>=e.styles.length||y(e.styles,function(e){e.url?e.name?Le(e.url,e.name):Ne(e.url):e.text&&(e.name?ce(et,e.text,e.name):ue(et,e.text))})}function Xe(e){0>=e.styles.length||Ie(e=x(e.styles,function(e){return e.url}))}function Je(e){0>=e.links.length||function(e){y(e=T(e),function(e){ae(nt,e,!0)})}(e=x(e.links,function(e){return"spf-preconnect"==e.rel?e.url:""}))}function Ge(e,n,t,r,i){var o=parseInt(Fn["animation-duration"],10);this.element=e,this.H=n,this.duration=o,this.reverse=i,n=((n=document.body).dataset?n.dataset.spfName:n.getAttribute("data-"+"spfName".replace(/([A-Z])/g,"-$1").toLowerCase()))||"",o=parseInt(Hn.uid,10)||0,o++,this.key=e["spf-key"]||(e["spf-key"]=""+c("uid",o)),this.u=n&&t+"-from-"+n,this.G=r&&t+"-to-"+r,this.h=null,this.J=t+"-old",this.g=null,this.I=t+"-new",this.k=t+(i?"-reverse":"-forward"),this.C=t+"-start",this.D=this.k+"-start",this.r=t+"-end",this.s=this.k+"-end"}function We(e,n,t,r){var i,o=r||{},a=!1,s=0,c=new XMLHttpRequest;c.open(e,n,!0),c.timing={};var u=c.abort;if(c.abort=function(){clearTimeout(i),c.onreadystatechange=null,u.call(c)},c.onreadystatechange=function(){var e=c.timing;if(c.readyState==gt){if(e.responseStart=e.responseStart||Rn(),"json"==c.responseType)a=!1;else if(-1<(c.getResponseHeader("Transfer-Encoding")||"").toLowerCase().indexOf("chunked"))a=!0;else{e=c.getResponseHeader("X-Firefox-Spdy");var t=(t=window.chrome&&chrome.loadTimes&&chrome.loadTimes())&&t.wasFetchedViaSpdy;a=!(!e&&!t)}o.A&&o.A(c)}else c.readyState==wt?a&&o.l&&(e=c.responseText.substring(s),s=c.responseText.length,o.l(c,e)):c.readyState==bt&&(e.responseEnd=e.responseEnd||Rn(),window.performance&&window.performance.getEntriesByName&&(c.resourceTiming=window.performance.getEntriesByName(n).pop()),a&&o.l&&c.responseText.length>s&&(e=c.responseText.substring(s),s=c.responseText.length,o.l(c,e)),clearTimeout(i),o.w&&o.w(c))},"responseType"in c&&"json"==o.responseType&&(c.responseType="json"),e="POST"==e,o.headers)for(var l in o.headers)c.setRequestHeader(l,o.headers[l]),"content-type"==l.toLowerCase()&&(e=!1);return e&&c.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),0<o.F&&(i=setTimeout(function(){c.abort(),o.B&&o.B(c)},o.F)),c.timing.fetchStart=Rn(),c.send(t),c}function $e(e,n){(f=n||{}).method=((f.method||"GET")+"").toUpperCase(),f.type=f.type||"request";var t=e;if(r=Fn["url-identifier"]||""){var r=r.replace("__type__",f.type||""),i=(t=(a=q((c=q(t,"#"))[0],"?"))[0],a[1]),a=a[2],s=c[1],c=c[2];if(0==r.lastIndexOf("?",0))i&&(r=r.replace("?","&")),a+=r;else{if(0==r.lastIndexOf(".",0))if(P(t,"/"))r="index"+r;else{var u=t.lastIndexOf(".");-1<u&&(t=t.substring(0,u))}else P(t,"/")&&0==r.lastIndexOf("/",0)&&(r=r.substring(1));t+=r}t=t+i+a+s+c}if(r=z(t),(t={}).spfUrl=r,t.startTime=Rn(),t.fetchStart=t.startTime,i=function(e,n){var t=[];n&&(t.push(e+" previous "+n),t.push(e+" previous "+U(n).pathname)),t.push(e);var r=null;return w(t,function(e){var n;e:{if(e in(n=C())){if(S(n=n[e])){O(n),n=n.data;break e}E(e)}n=void 0}return n&&(r={key:e,response:n.response,type:n.type}),!!n}),r}(i=Qe(e,f.current,null,f.type,!1),f.current),t.spfPrefetched=!!i&&"prefetch"==i.type,t.spfCached=!!i,i){var l,f=o(Ue,null,e,f,t,i.key,i.response);return l=window._spf_state=window._spf_state||{},r=parseInt(l.uid,10)||0,r++,l=l.uid=r,Gn[l]=f,Xn?window.postMessage(Jn+l,"*"):window.setTimeout(o(B,null,l),0),null}if(i={},a=Fn["request-headers"])for(l in a)s=a[l],i[l]=null==s?"":s;if(f.headers)for(l in f.headers)s=f.headers[l],i[l]=null==s?"":s;return null!=f.b&&(i["X-SPF-Referer"]=f.b),null!=f.current&&(i["X-SPF-Previous"]=f.current),(l=Fn["advanced-header-identifier"])&&(i["X-SPF-Request"]=l.replace("__type__",f.type),i.Accept="application/json"),a=o(Ye,null,e,f,t,l=new function(){this.v=!1,this.c="",this.complete=[]}),l={headers:i,F:Fn["request-timeout"],A:o(ze,null,e,l),l:o(Ve,null,e,f,t,l),w:a,B:a},Fn["advanced-response-type-json"]&&(l.responseType="json"),"POST"==f.method?We("POST",r,f.q,l):We("GET",r,null,l)}function Ue(e,n,t,r,i){var o=!1;t.responseStart=t.responseEnd=Rn(),n.type&&0==n.type.lastIndexOf("navigate",0)&&(t.navigationStart=t.startTime,Fn["cache-unified"]||(E(r),o=!0)),n.e&&"multipart"==i.type&&y(i.parts,function(r){r.timing||(r.timing={}),r.timing.spfCached=!!t.spfCached,r.timing.spfPrefetched=!!t.spfPrefetched,n.e(e,r)}),Ze(e,n,t,i,o)}function ze(e,n,t){e=-1!=(t.getResponseHeader("X-SPF-Response-Type")||"").toLowerCase().indexOf("multipart"),n.v=e}function Ve(e,n,t,r,i,o,a){if(r.v){var s;o=r.c+o;try{s=Pe(o,!0,a)}catch(t){return i.abort(),void(n.d&&n.d(e,t,i))}n.e&&y(s.n,function(r){r.timing||(r.timing={}),r.timing.spfCached=!!t.spfCached,r.timing.spfPrefetched=!!t.spfPrefetched,n.e(e,r)}),r.complete=r.complete.concat(s.n),r.c=s.c}}function Ye(e,n,t,r,i){if(i.timing)for(var o in i.timing)t[o]=i.timing[o];if(i.resourceTiming)if("load"==n.type)for(var a in i.resourceTiming)t[a]=i.resourceTiming[a];else if(window.performance&&window.performance.timing&&(o=window.performance.timing.navigationStart)+i.resourceTiming.startTime>=t.startTime)for(var s in i.resourceTiming)void 0!==(a=i.resourceTiming[s])&&(P(s,"Start")||P(s,"End")||"startTime"==s)&&(t[s]=o+Math.round(a));var c,u;if("load"!=n.type&&(t.navigationStart=t.startTime),r.complete.length&&(r.c=Kn(r.c),r.c&&Ve(e,n,t,r,i,"",!0)),"json"==i.responseType){if(!i.response)return void(n.d&&n.d(e,Error("JSON response parsing failed"),i));c=Re(T(i.response))}else try{c=Pe(i.responseText).n}catch(t){return void(n.d&&n.d(e,t,i))}if(n.e&&1<c.length)for(r=r.complete.length;r<c.length;r++)(i=c[r]).timing||(i.timing={}),i.timing.spfCached=!!t.spfCached,i.timing.spfPrefetched=!!t.spfPrefetched,n.e(e,i);1<c.length?(y(c,function(e){e.cacheType&&(u=e.cacheType)}),c={parts:c,type:"multipart"},u&&(c.cacheType=u)):c=1==c.length?c[0]:{},Ze(e,n,t,c,!0)}function Ze(e,n,t,r,i){if(i&&"POST"!=n.method&&(i=Qe(e,n.current,r.cacheType,n.type,!0))){r.cacheKey=i;var o={response:r,type:n.type||""},a=parseInt(Fn["cache-lifetime"],10),s=parseInt(Fn["cache-max"],10);0>=a||0>=s||(s=C(),O(o={data:o,life:a,time:Rn(),count:0}),s[i]=o,setTimeout(k,1e3))}r.timing=t,n.m&&n.m(e,r)}function Qe(e,n,t,r,i){var o;return e=z(e),Fn["cache-unified"]?o=e:"navigate-back"==r||"navigate-forward"==r?o="history "+e:"navigate"==r?o=(i?"history ":"prefetch ")+e:"prefetch"==r&&(o=i?"prefetch "+e:""),n&&"url"==t?o+=" previous "+n:n&&"path"==t&&(o+=" previous "+U(n).pathname),o||""}function en(e){if(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||0<e.button)return null;var n=function(e){return l(e,function(e){return L(e,Fn["link-class"])})}(e.target);return!n||Fn["nolink-class"]&&function(e){return l(e,function(e){return L(e,Fn["nolink-class"])})}(e.target)?null:(e=function(e,n){return l(e,function(e){return e.href&&"img"!=e.tagName.toLowerCase()},n)}(e.target,n))?e.href:null}function nn(e){return U(e).origin==U(window.location.href).origin}function tn(){if(!Hn["nav-init"])return!1;var e=parseInt(Hn["nav-counter"],10)||0;e++;var n=parseInt(Fn["navigate-limit"],10);return!(e>(n=isNaN(n)?1/0:n)||(e=parseInt(Hn["nav-init-time"],10),e--,e=Rn()-e,n=parseInt(Fn["navigate-lifetime"],10),e>(n=isNaN(n)?1/0:n)))}function rn(e,n){var t=n||window.location.href;return-1==e.indexOf("#")||z(e)!=(t=z(t))}function on(e){if(!e.defaultPrevented){var n=en(e);n&&nn(n=V(n))&&tn()&&a("spfclick",{url:n,target:e.target})&&(un(n,{},new Bn),e.preventDefault())}}function an(e){var n=en(e);n&&setTimeout(function(){bn(n)},0)}function sn(){var e;e=Hn["nav-scroll-position"]||null;var n=Hn["nav-scroll-url"]||"";e=e&&n==window.location.href?e:null,An(),e&&window.scroll.apply(null,e)}function cn(e,n){var t=new Bn({current:n&&n["spf-current"],history:!0,position:n&&n["spf-position"],b:n&&n["spf-referer"],reverse:!(!n||!n["spf-back"])}),r=Fn["reload-identifier"];r&&(e=function(e,n){var t=q(e,"#");return e=t[0],y(n,function(n){e=e.replace(new RegExp("([?&])"+n+"(?:=[^&]*)?(?:(?=[&])|$)","g"),function(e,n){return"?"==n?n:""})}),P(e,"?")&&(e=e.slice(0,-1)),e+t[1]+t[2]}(e,[r])),nn(e)?tn()?a("spfhistory",{url:e,referer:t.b,previous:t.current})&&(t.position&&(c("nav-scroll-position",[window.pageXOffset,window.pageYOffset]),c("nav-scroll-url",window.location.href)),un(e,{},t)):gn(e,jt):gn(e,_t)}function un(e,n,t){if(vn(),rn(e,t.current))if(Cn(e,t.b,t.current,n)){c("nav-counter",(parseInt(Hn["nav-counter"],10)||0)+1),_n(e);var r,i=z(e),a="preprocess "+z(i);for(r in $n)a!=r&&0==r.lastIndexOf("preprocess",0)&&G(r);c("nav-request",i=qn()[i]),c("nav-promote",null),c("nav-promote-time",null),i&&4!=i.readyState?(i="preprocess "+z(e),a="promote "+z(e),c("nav-promote",e),c("nav-promote-time",Rn()),G(i),K(a,!0),t.history||fn(e,t.b,o(dn,null,n))):(i=o(dn,null,n),a=o(pn,null,n,t),r=o(mn,null,n,t),Fn["advanced-navigate-persist-timing"]||ot(),t.type="navigate",t.history&&(t.type+=t.reverse?"-back":"-forward"),c("nav-request",n=$e(e,{method:n.method,headers:n.headers,e:a,d:i,m:r,q:n.postData,type:t.type,current:t.current,b:t.b})),t.history||fn(e,t.b,i))}else gn(e,Lt);else t.history||fn(e,t.b,o(dn,null,n)),ln(e,t)}function ln(e,n){if(n.position)An(),window.scroll.apply(null,n.position),n.f=!0;else{var t=q(e,"#");t[2]?(t=document.getElementById(t[2]))&&(An(),t.scrollIntoView(),n.f=!0):n.f||(An(),window.scroll(0,0),n.f=!0)}}function fn(e,n,t){try{d(null,{"spf-position":[window.pageXOffset,window.pageYOffset]}),z(e,!0)!=window.location.href&&p(!1,e,{"spf-referer":n},void 0)}catch(n){vn(),t(e,n)}}function dn(e,n,t,r){c("nav-request",null),On(n,t,e,void 0,r)&&gn(n,qt,t)}function pn(e,n,t,r){if(jn(t,r,e))if(r.reload)gn(t,Pt);else if(r.redirect)hn(e,r.redirect);else try{_e(t,r,n,function(){Ln(t,r,e)})}catch(n){dn(e,t,n)}else gn(t,Nt)}function mn(e,n,t,r){if(c("nav-request",null),Hn["nav-promote"]==n.a){var i=r.timing||{};i.navigationStart=Hn["nav-promote-time"],i.spfPrefetched=!0}var o="multipart"==r.type;if(!o){if(!Nn(t,r,e))return void gn(t,It);if(r.reload)return void gn(t,Pt);if(r.redirect)return void hn(e,r.redirect)}try{_e(t,o?{}:r,n,function(){var i=r.name||"";o&&y(r.parts,function(e){i=e.name||i}),function(e){var n=document.body;n.dataset?n.dataset.spfName=e:n.setAttribute("data-"+"spfName".replace(/([A-Z])/g,"-$1").toLowerCase(),e)}(i),ln(t,n),In(t,r,e)})}catch(n){dn(e,t,n)}}function hn(e,n){try{d(n+=window.location.hash,null,!0)}catch(t){vn(),dn(e,n,t)}}function vn(){var e=Hn["nav-request"];e&&(e.abort(),c("nav-request",null))}function yn(e){var n;return e&&((n=Array.prototype.slice.call(arguments))[0]=e,n=function(e){if(e){var n=Array.prototype.slice.call(arguments,1);try{return e.apply(null,n)}catch(e){return e}}}.apply(null,n)),!1!==n}function gn(e,n,t){t=t?t.message:"",vn(),_n();var r=n;t&&(r+=" Message: "+t),a("spfreload",{url:e,reason:r});var i=window.location.href;Fn["experimental-remove-history"]&&i==e&&(c("history-ignore-pop",!0),window.history.back()),setTimeout(function(){if(r=Fn["reload-identifier"]){var t={};t[r]=encodeURIComponent(n);var r,o,a=q(r=e,"#"),s=-1!=(r=a[0]).indexOf("?")?"&":"?";for(o in t)r+=s+o,t[o]&&(r+="="+t[o]),s="&";e=r+a[1]+a[2]}window.location.href=e,rn(e,i)||window.location.reload()},0)}function wn(e,n,t){if(t.a=t.a||e,Cn(e,void 0,void 0,n,!0)){var r=o(Tn,null,!1,n,t),i=o(En,null,!1,n,t),a=o(kn,null,!1,n,t);t.type="load",$e(e,{method:n.method,headers:n.headers,e:i,d:r,m:a,q:n.postData,type:t.type})}}function bn(e,n){xn(e=V(e),n||{},new Bn)}function xn(e,n,t){if(t.a=t.a||e,Cn(e,void 0,void 0,n,!0)){var r=o(Tn,null,!0,n,t),i=o(En,null,!0,n,t),a=o(kn,null,!0,n,t);t.type="prefetch",n=$e(e,{method:n.method,headers:n.headers,e:i,d:r,m:a,q:n.postData,type:t.type,current:t.current}),e=z(e),qn()[e]=n}}function Tn(e,n,t,r,i){e&&Pn(r),e&&Hn["nav-promote"]==t.a?dn(n,r,i):On(r,i,n,!0)}function En(e,n,t,r,i){if(jn(r,i,n,!0)){if(i.reload){if(!e)return;if(Hn["nav-promote"]==t.a)return void gn(r,Pt)}if(i.redirect)Sn(e,n,t,i.redirect);else{if(e){var a=o(pn,null,n,t,r,i),s="promote "+z(t.a);if(F(s,a),Hn["nav-promote"]==t.a)return void K(s,!0)}(e?qe:_e)(r,i,t,function(){Ln(r,i,n,!0)})}}}function kn(e,n,t,r,i){var a="multipart"==i.type;if(!a){if(!Nn(r,i,n,!0))return void gn(r,It);if(i.reload){if(!e)return;if(Hn["nav-promote"]==t.a)return void gn(r,Pt)}if(i.redirect)return void Sn(e,n,t,i.redirect)}var s="promote "+z(t.a);if(e){if(Pn(r),Hn["nav-promote"]==t.a)return F(s,o(mn,null,n,t,r,i)),void K(s,!0);G(s)}s=e?qe:_e;try{s(r,a?{}:i,t,function(){In(r,i,n,!0)})}catch(i){Tn(e,n,t,r,i)}}function Sn(e,n,t,r){e=e?xn:wn;var i={};y([Tt,Et,kt,St,Ot,Ct],function(e){i[e]=n[e]}),e(r,i,t)}function On(e,n,t,r,i){return e={url:e,err:n,xhr:i},(t=yn((t||{})[Tt],e))&&!r&&(t=a("spferror",e)),t}function Cn(e,n,t,r,i){return e={url:e,referer:n,previous:t},(r=yn((r||{})[Et],e))&&!i&&(r=a("spfrequest",e)),r}function jn(e,n,t,r){return e={url:e,part:n},(t=yn((t||{})[kt],e))&&!r&&(t=a("spfpartprocess",e)),t}function Ln(e,n,t,r){e={url:e,part:n},yn((t||{})[St],e)&&!r&&a("spfpartdone",e)}function Nn(e,n,t,r){return e={url:e,response:n},(t=yn((t||{})[Ot],e))&&!r&&(t=a("spfprocess",e)),t}function In(e,n,t,r){e={url:e,response:n},yn((t||{})[Ct],e)&&!r&&a("spfdone",e)}function Pn(e){e=z(e);var n=qn(),t=n[e];t&&t.abort(),delete n[e]}function _n(e){var n=qn();for(var t in e=e&&z(e),n)e!=t&&Pn(t)}function qn(){return"nav-prefetches"in Hn?Hn["nav-prefetches"]:c("nav-prefetches",{})}function An(){c("nav-scroll-position",null),c("nav-scroll-url",null)}function Bn(e){e=e||{},this.current=e.history&&e.current?e.current:window.location.href,this.history=!!e.history,this.a=e.a||"",this.position=e.position||null,this.b=void 0!=e.b?e.b:window.location.href,this.reverse=!!e.reverse,this.f=!!e.f,this.type=e.type||""}function Mn(){oe(tt),oe(et),"complete"==document.readyState&&(document.removeEventListener?document.removeEventListener("DOMContentLoaded",Mn,!1):document.detachEvent&&document.detachEvent("onreadystatechange",Mn))}var Rn=window.performance&&window.performance.timing&&window.performance.now?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()},Hn=window._spf_state||{};window._spf_state=Hn;var Dn={"animation-class":"spf-animate","animation-duration":425,"cache-lifetime":6e5,"cache-max":50,"cache-unified":!1,"link-class":"spf-link","nolink-class":"spf-nolink","navigate-limit":20,"navigate-lifetime":864e5,"reload-identifier":null,"request-timeout":0,"url-identifier":"?spf=__type__"},Fn={};"config"in Hn||c("config",Fn),Fn=Hn.config,Rn();var Kn=String.prototype.trim?function(e){return e.trim()}:function(e){return e.replace(/^\s+|\s+$/g,"")},Xn=function(){function e(){n=!1}if(!window.postMessage)return!1;var n=!0;return M(e),window.postMessage("","*"),R(e),n}(),Jn="spf:",Gn={};"async-defers"in Hn||c("async-defers",Gn),Gn=Hn["async-defers"],Xn&&("async-listener"in Hn&&R(Hn["async-listener"]),M(A),c("async-listener",A));var Wn={};"ps-s"in Hn||c("ps-s",Wn),Wn=Hn["ps-s"];var $n={},Un={},zn={},Vn={},Yn=-1!=navigator.userAgent.indexOf(" Trident/"),Zn=1,Qn=2,et="css",nt="img",tt="js";"rsrc-s"in Hn||c("rsrc-s",Un),Un=Hn["rsrc-s"],"rsrc-n"in Hn||c("rsrc-n",zn),zn=Hn["rsrc-n"],"rsrc-u"in Hn||c("rsrc-u",Vn),Vn=Hn["rsrc-u"];var rt={};"js-d"in Hn||c("js-d",rt),rt=Hn["js-d"];var it={};"js-u"in Hn||c("js-u",it),it=Hn["js-u"];var ot,at=function(){var e=document.createElement("div");return"transition"in e.style||w(["webkit","Moz","Ms","O","Khtml"],function(n){return n+"Transition"in e.style})}(),st=/\x3clink([\s\S]*?)\x3e/gi,ct=/\x3c(script|style)([\s\S]*?)\x3e([\s\S]*?)\x3c\/\1\x3e/gi,ut=/(?:\s|^)async(?:\s|=|$)/i,lt=/(?:\s|^)href\s*=\s*["']?([^\s"']+)/i,ft=/(?:\s|^)name\s*=\s*["']?([^\s"']+)/i,dt=/(?:\s|^)rel\s*=\s*["']?([^\s"']+)/i,pt=/(?:\s|^)src\s*=\s*["']?([^\s"']+)/i,mt=/(?:\s|^)type\s*=\s*["']([^"']+)["']/i,ht="[\r\n",vt=",\r\n",yt="]\r\n",gt=2,wt=3,bt=4,xt=window.performance&&(window.performance.clearResourceTimings||window.performance.webkitClearResourceTimings||window.performance.mozClearResourceTimings||window.performance.msClearResourceTimings||window.performance.oClearResourceTimings);ot=xt?o(xt,window.performance):s;var Tt="onError",Et="onRequest",kt="onPartProcess",St="onPartDone",Ot="onProcess",Ct="onDone",jt="1",Lt="2",Nt="3",It="4",Pt="5",_t="9",qt="10"
;document.addEventListener?document.addEventListener("DOMContentLoaded",Mn,!1):document.attachEvent&&document.attachEvent("onreadystatechange",Mn),Mn();var At,Bt={init:function(e){var n=!("function"!=typeof window.history.pushState&&!v().contentWindow.history.pushState);for(var t in e=e||{},Dn)Fn[t]=t in e?e[t]:Dn[t];for(t in e)t in Dn||(Fn[t]=e[t]);if(n){if(t=On,!Hn["history-init"]&&window.addEventListener){e=window.location.href,window.addEventListener("popstate",m,!1),c("history-init",!0),c("history-callback",cn),c("history-error-callback",t),c("history-listener",m),c("history-url",e),c("history-timestamp",Rn());var r={"spf-referer":document.referrer};try{d(e,r)}catch(n){t&&t(e,n)}}!Hn["nav-init"]&&document.addEventListener&&(c("nav-init",!0),c("nav-init-time",Rn()),c("nav-counter",0),document.addEventListener("click",on,!1),c("nav-listener",on),!Fn["experimental-prefetch-mousedown"]||"ontouchstart"in window||0<window.navigator.maxTouchPoints||0<window.navigator.msMaxTouchPoints||(document.addEventListener("mousedown",an,!1),c("nav-mousedown-listener",an)),document.addEventListener("scroll",sn,!1),c("nav-scroll-listener",sn))}return n},dispose:function(){for(var e in"undefined"!=typeof History&&History.prototype.pushState&&(vn(),Hn["nav-init"]&&(document.removeEventListener&&(document.removeEventListener("click",Hn["nav-listener"],!1),document.removeEventListener("mousedown",Hn["nav-mousedown-listener"],!1),document.removeEventListener("scroll",Hn["nav-scroll-listener"],!1)),c("nav-listener",null),c("nav-mousedown-listener",null),c("nav-scroll-listener",null),c("nav-scroll-position",null),c("nav-scroll-url",null),c("nav-init",!1),c("nav-init-time",null),c("nav-counter",null)),Hn["history-init"]&&(window.removeEventListener&&window.removeEventListener("popstate",Hn["history-listener"],!1),c("history-init",!1),c("history-callback",null),c("history-error-callback",null),c("history-listener",null),c("history-url",null),c("history-timestamp",0))),Fn)delete Fn[e]},navigate:function(e,n){e&&(nn(e=V(e))?tn()?un(e,n||{},new Bn):gn(e,jt):gn(e,_t))},load:function(e,n){wn(e=V(e),n||{},new Bn)},prefetch:bn,process:function(e,n){function t(e,t,r,i){e==t&&n&&n(i)}var r=window.location.href;if("multipart"==e.type){var i=e.parts,a=i.length-1;y(i,function(e,n){_e(r,e,null,o(t,null,n,a))})}else _e(r,e,null,o(t,null,0,0))}},Mt={cache:{remove:E,clear:function(){C({})}},script:{load:we,get:xe,ready:Ee,done:function(e){ve(tt,e,""),ne(tt)},require:ke,declare:function(e,n){if(e){for(var t in e)rt[t]=e[t];if(n)for(t in n)it[t]=n[t]}},path:function(e){c("rsrc-p-"+tt,e)},unload:be,ignore:function(e,n){e=T(e),function(e,n){e in Wn&&n&&g(Wn[e],function(e,t,r){return e!=n||(r[t]=null,!1)})}(fe(tt,e.sort().join("|")),n)},unrequire:Oe,prefetch:Te},style:{load:Le,get:Ne,unload:function(e){Z(et,e)},path:function(e){c("rsrc-p-"+et,e)},prefetch:Ie}},Rt=this.spf=this.spf||{};for(At in Bt)Rt[At]=Bt[At];for(var Ht in Mt)for(var Dt in Mt[Ht])Rt[Ht]=Rt[Ht]||{},Rt[Ht][Dt]=Mt[Ht][Dt];a("spfready"),r=spf,void 0===(i="function"==typeof r?r.call(n,t,n,e):r)||(e.exports=i)}()},function(){}]);