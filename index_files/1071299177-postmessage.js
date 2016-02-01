var g,k=this,l=function(a,b){var c=a.split("."),d=k;c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d=d[e]?d[e]:d[e]={}:d[e]=b},aa=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&
!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b},p=function(a,b){function c(){}c.prototype=b.prototype;a.H=b.prototype;a.prototype=new c;a.G=function(a,c,f){for(var h=Array(arguments.length-2),m=2;m<arguments.length;m++)h[m-2]=arguments[m];return b.prototype[c].apply(a,
h)}};var t=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,t);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))};p(t,Error);var ba=function(a,b){for(var c=a.split("%s"),d="",e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join("%s")},u=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},v=function(a,b){return a<b?-1:a>b?1:0};var w=function(a,b){b.unshift(a);t.call(this,ba.apply(null,b));b.shift()};p(w,t);var x=function(a,b,c,d){var e="Assertion failed";if(c)var e=e+(": "+c),f=d;else a&&(e+=": "+a,f=b);throw new w(""+e,f||[]);},y=function(a,b,c){a||x("",null,b,Array.prototype.slice.call(arguments,2))},z=function(a,b,c){"number"==typeof a||x("Expected number but got %s: %s.",[aa(a),a],b,Array.prototype.slice.call(arguments,2));return a};var A=function(a){return Array.prototype.concat.apply(Array.prototype,arguments)},ca=function(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};var B;a:{var D=k.navigator;if(D){var E=D.userAgent;if(E){B=E;break a}}B=""}var F=function(a){return-1!=B.indexOf(a)};var G=function(){return F("Opera")||F("OPR")};var da=G(),H=F("Trident")||F("MSIE"),ea=F("Edge"),I=F("Gecko")&&!(-1!=B.toLowerCase().indexOf("webkit")&&!F("Edge"))&&!(F("Trident")||F("MSIE"))&&!F("Edge"),J=-1!=B.toLowerCase().indexOf("webkit")&&!F("Edge"),fa=J&&F("Mobile"),ga=function(){var a=B;if(I)return/rv\:([^\);]+)(\)|;)/.exec(a);if(ea)return/Edge\/([\d\.]+)/.exec(a);if(H)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(J)return/WebKit\/(\S+)/.exec(a)},K=function(){var a=k.document;return a?a.documentMode:void 0},L=function(){if(da&&k.opera){var a;
var b=k.opera.version;try{a=b()}catch(c){a=b}return a}a="";(b=ga())&&(a=b?b[1]:"");return H&&(b=K(),b>parseFloat(a))?String(b):a}(),M={},ha=function(a){if(!M[a]){for(var b=0,c=u(String(L)).split("."),d=u(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var h=c[f]||"",m=d[f]||"",q=RegExp("(\\d*)(\\D*)","g"),C=RegExp("(\\d*)(\\D*)","g");do{var r=q.exec(h)||["","",""],n=C.exec(m)||["","",""];if(0==r[0].length&&0==n[0].length)break;b=v(0==r[1].length?0:parseInt(r[1],10),0==n[1].length?
0:parseInt(n[1],10))||v(0==r[2].length,0==n[2].length)||v(r[2],n[2])}while(0==b)}M[a]=0<=b}},ia=k.document,ja=ia&&H?K()||("CSS1Compat"==ia.compatMode?parseInt(L,10):5):void 0;var N;if(!(N=!I&&!H)){var O;if(O=H)O=9<=+ja;N=O}N||I&&ha("1.9.1");H&&ha("9");var ka=F("Safari")&&!((F("Chrome")||F("CriOS"))&&!G()&&!F("Edge")||F("Coast")||G()||F("Edge")||F("Silk")||F("Android"))&&!(F("iPhone")&&!F("iPod")&&!F("iPad")||F("iPad")||F("iPod"));var ma=function(a){var b=window;if(fa&&ka&&a){a.focus();var c=0,d=null,d=a.setInterval(function(){b.closed||5==c?(a.clearInterval(d),la(b)):(b.close(),c++)},150)}else b.close(),la(b)},la=function(a){if(!a.closed&&a.document&&a.document.body)if(a=a.document.body,y(null!=a,"goog.dom.setTextContent expects a non-null value for node"),"textContent"in a)a.textContent="Please close this window.";else if(3==a.nodeType)a.data="Please close this window.";else if(a.firstChild&&3==a.firstChild.nodeType){for(;a.lastChild!=
a.firstChild;)a.removeChild(a.lastChild);a.firstChild.data="Please close this window."}else{for(var b;b=a.firstChild;)a.removeChild(b);y(a,"Node cannot be null or undefined.");a.appendChild((9==a.nodeType?a:a.ownerDocument||a.document).createTextNode("Please close this window."))}};var na="StopIteration"in k?k.StopIteration:{message:"StopIteration",stack:""},P=function(){};P.prototype.next=function(){throw na;};P.prototype.D=function(){return this};var Q=function(a,b){this.i={};this.c=[];this.B=this.b=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else a&&this.addAll(a)};Q.prototype.j=function(){R(this);for(var a=[],b=0;b<this.c.length;b++)a.push(this.i[this.c[b]]);return a};Q.prototype.s=function(){R(this);return this.c.concat()};Q.prototype.m=function(a){return S(this.i,a)};
Q.prototype.remove=function(a){return S(this.i,a)?(delete this.i[a],this.b--,this.B++,this.c.length>2*this.b&&R(this),!0):!1};var R=function(a){if(a.b!=a.c.length){for(var b=0,c=0;b<a.c.length;){var d=a.c[b];S(a.i,d)&&(a.c[c++]=d);b++}a.c.length=c}if(a.b!=a.c.length){for(var e={},c=b=0;b<a.c.length;)d=a.c[b],S(e,d)||(a.c[c++]=d,e[d]=1),b++;a.c.length=c}};g=Q.prototype;g.get=function(a,b){return S(this.i,a)?this.i[a]:b};
g.set=function(a,b){S(this.i,a)||(this.b++,this.c.push(a),this.B++);this.i[a]=b};g.addAll=function(a){var b;if(a instanceof Q)b=a.s(),a=a.j();else{b=[];var c=0,d;for(d in a)b[c++]=d;c=[];d=0;for(var e in a)c[d++]=a[e];a=c}for(e=0;e<b.length;e++)this.set(b[e],a[e])};g.forEach=function(a,b){for(var c=this.s(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};g.clone=function(){return new Q(this)};
g.D=function(a){R(this);var b=0,c=this.B,d=this,e=new P;e.next=function(){if(c!=d.B)throw Error("The map has changed since the iterator was created");if(b>=d.c.length)throw na;var e=d.c[b++];return a?e:d.i[e]};return e};var S=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};var oa=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/,pa=function(a,b){if(a)for(var c=a.split("&"),d=0;d<c.length;d++){var e=c[d].indexOf("="),f=null,h=null;0<=e?(f=c[d].substring(0,e),h=c[d].substring(e+1)):f=c[d];b(f,h?decodeURIComponent(h.replace(/\+/g," ")):"")}};var T=function(a,b){this.o=this.A=this.l="";this.w=null;this.u=this.v="";this.g=this.F=!1;var c;if(a instanceof T)this.g=void 0!==b?b:a.g,qa(this,a.l),c=a.A,U(this),this.A=c,c=a.o,U(this),this.o=c,ra(this,a.w),c=a.v,U(this),this.v=c,sa(this,a.h.clone()),c=a.u,U(this),this.u=c;else if(a&&(c=String(a).match(oa))){this.g=!!b;qa(this,c[1]||"",!0);var d=c[2]||"";U(this);this.A=V(d);d=c[3]||"";U(this);this.o=V(d,!0);ra(this,c[4]);d=c[5]||"";U(this);this.v=V(d,!0);sa(this,c[6]||"",!0);c=c[7]||"";U(this);
this.u=V(c)}else this.g=!!b,this.h=new W(null,0,this.g)};T.prototype.toString=function(){var a=[],b=this.l;b&&a.push(X(b,ta,!0),":");var c=this.o;if(c||"file"==b)a.push("//"),(b=this.A)&&a.push(X(b,ta,!0),"@"),a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.w,null!=c&&a.push(":",String(c));if(c=this.v)this.o&&"/"!=c.charAt(0)&&a.push("/"),a.push(X(c,"/"==c.charAt(0)?ua:va,!0));(c=this.h.toString())&&a.push("?",c);(c=this.u)&&a.push("#",X(c,wa));return a.join("")};
T.prototype.clone=function(){return new T(this)};var qa=function(a,b,c){U(a);a.l=c?V(b,!0):b;a.l&&(a.l=a.l.replace(/:$/,""))},ra=function(a,b){U(a);if(b){b=+b;if(isNaN(b)||0>b)throw Error("Bad port number "+b);a.w=b}else a.w=null},sa=function(a,b,c){U(a);b instanceof W?(a.h=b,a.h.C(a.g)):(c||(b=X(b,xa)),a.h=new W(b,0,a.g))},U=function(a){if(a.F)throw Error("Tried to modify a read-only Uri");};T.prototype.C=function(a){this.g=a;this.h&&this.h.C(a);return this};
var V=function(a,b){return a?b?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""},X=function(a,b,c){return"string"==typeof a?(a=encodeURI(a).replace(b,ya),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null},ya=function(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)},ta=/[#\/\?@]/g,va=/[\#\?:]/g,ua=/[\#\?]/g,xa=/[\#\?@]/g,wa=/#/g,W=function(a,b,c){this.b=this.a=null;this.f=a||null;this.g=!!c},Y=function(a){a.a||(a.a=new Q,a.b=0,a.f&&pa(a.f,function(b,c){a.add(decodeURIComponent(b.replace(/\+/g,
" ")),c)}))};g=W.prototype;g.add=function(a,b){Y(this);this.f=null;a=Z(this,a);var c=this.a.get(a);c||this.a.set(a,c=[]);c.push(b);this.b=z(this.b)+1;return this};g.remove=function(a){Y(this);a=Z(this,a);return this.a.m(a)?(this.f=null,this.b=z(this.b)-this.a.get(a).length,this.a.remove(a)):!1};g.m=function(a){Y(this);a=Z(this,a);return this.a.m(a)};g.s=function(){Y(this);for(var a=this.a.j(),b=this.a.s(),c=[],d=0;d<b.length;d++)for(var e=a[d],f=0;f<e.length;f++)c.push(b[d]);return c};
g.j=function(a){Y(this);var b=[];if("string"==typeof a)this.m(a)&&(b=A(b,this.a.get(Z(this,a))));else{a=this.a.j();for(var c=0;c<a.length;c++)b=A(b,a[c])}return b};g.set=function(a,b){Y(this);this.f=null;a=Z(this,a);this.m(a)&&(this.b=z(this.b)-this.a.get(a).length);this.a.set(a,[b]);this.b=z(this.b)+1;return this};g.get=function(a,b){var c=a?this.j(a):[];return 0<c.length?String(c[0]):b};
g.toString=function(){if(this.f)return this.f;if(!this.a)return"";for(var a=[],b=this.a.s(),c=0;c<b.length;c++)for(var d=b[c],e=encodeURIComponent(String(d)),d=this.j(d),f=0;f<d.length;f++){var h=e;""!==d[f]&&(h+="="+encodeURIComponent(String(d[f])));a.push(h)}return this.f=a.join("&")};g.clone=function(){var a=new W;a.f=this.f;this.a&&(a.a=this.a.clone(),a.b=this.b);return a};var Z=function(a,b){var c=String(b);a.g&&(c=c.toLowerCase());return c};
W.prototype.C=function(a){a&&!this.g&&(Y(this),this.f=null,this.a.forEach(function(a,c){var d=c.toLowerCase();c!=d&&(this.remove(c),this.remove(d),0<a.length&&(this.f=null,this.a.set(Z(this,d),ca(a)),this.b=z(this.b)+a.length))},this));this.g=a};var za=function(a){a=new T(a);var b="&"+window.name;U(a);a.h.set(b,!0);b=a.h.j("parent");U(a);a.h.remove("parent");1==b.length&&(b=gadgets.rpc.getOrigin(String(b[0])),U(a),a.h.set("parent",b));b="&"+window.name;U(a);a.h.remove(b);return a.toString()},Aa=function(a,b,c,d,e,f,h){if(!d||!d.document.domain)return!1;var m=za(String(d.document.location.href));if(m.substr(0,c.length)!=c)return!1;c=gadgets.util.getUrlParameters(m);if(!b||!c.parent||b!=gadgets.rpc.getOrigin(String(c.parent)))return!1;if(!e)return l("oauth2callbackUrl",
a),d.oauth2verify.call(d,String(window.name),h)?!0:!1;d.oauth2callback.call(d,a);try{f()}catch(q){}return!0},Ba=function(){try{return window.parent!=window}catch(a){}return!0},Ca=function(){try{return!!window.opener}catch(a){}return!0},Ea=function(a,b,c,d,e){try{var f=Ba(),h=!f&&Ca(),m=!0,q=null,C=function(){m&&ma(q)};if(!f&&!h)return;var m=(h||!f)&&"keep_open"!==e,q=h?window.opener:window.parent,r=za(b);try{var n;if(d&&(n=q.frames[d],Aa(a,c,r,n,!h,C,e)))return;for(b=0;b<q.frames.length;++b)if(n=
q.frames[b],Aa(a,c,r,n,!h,C,e)){m=!1;break}}catch(Da){}}catch(Da){}C()};
l("postmessage.onLoad",function(){window.name="pmh"+String(2147483647*shindig.random()|0);var a=document.createElement("div"),b="true"==document.getElementById("error").value,c=gadgets.rpc.getOrigin(document.getElementById("origin").value),b=c+(b?"?":"#")+document.getElementById("response-form-encoded").value,d=document.getElementById("relay-endpoint").value,e=null,f=document.getElementById("proxy");f&&f.value&&(e=f.value);var f=document.getElementById("after-redirect"),h=null;f&&f.value&&(h=f.value);
a.appendChild(document.createTextNode(b));a.setAttribute("id","postmessage-hello");Ea(b,d,c,e,h)});l("postmessage.closePopup",function(){var a=null;try{var b=Ba(),c=!b&&Ca();if(!b&&!c)return;a=c?window.opener:window.parent}catch(d){}ma(a)});
