!function t(e,n,r){function i(s,a){if(!n[s]){if(!e[s]){var c="function"==typeof require&&require;if(!a&&c)return c(s,!0);if(o)return o(s,!0);throw new Error("Cannot find module '"+s+"'")}var u=n[s]={exports:{}};e[s][0].call(u.exports,function(t){var n=e[s][1][t];return i(n?n:t)},u,u.exports,t,e,n,r)}return n[s].exports}for(var o="function"==typeof require&&require,s=0;s<r.length;s++)i(r[s]);return i}({1:[function(t){$(function(){var e=t("mustache");$.getJSON("js/data.json",function(t){var n=$("#awards").html(),r=e.to_html(n,t);$("#adSection").html(r)})})},{mustache:2}],2:[function(t,e,n){!function(t,e){if("object"==typeof n&&n)e(n);else{var r={};e(r),"function"==typeof define&&define.amd?define(r):t.Mustache=r}}(this,function(t){function e(t,e){return p.call(t,e)}function n(t){return!e(g,t)}function r(t){return"function"==typeof t}function i(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function o(t){return String(t).replace(/[&<>"'\/]/g,function(t){return w[t]})}function s(t){if(!v(t)||2!==t.length)throw new Error("Invalid tags: "+t);return[new RegExp(i(t[0])+"\\s*"),new RegExp("\\s*"+i(t[1]))]}function a(e,r){function o(){if(T&&!C)for(;j.length;)delete U[j.pop()];else j=[];T=!1,C=!1}r=r||t.tags,e=e||"","string"==typeof r&&(r=r.split(y));for(var a,l,f,p,g,d,v=s(r),w=new h(e),E=[],U=[],j=[],T=!1,C=!1;!w.eos();){if(a=w.pos,f=w.scanUntil(v[0]))for(var S=0,$=f.length;$>S;++S)p=f.charAt(S),n(p)?j.push(U.length):C=!0,U.push(["text",p,a,a+1]),a+=1,"\n"===p&&o();if(!w.scan(v[0]))break;if(T=!0,l=w.scan(x)||"name",w.scan(k),"="===l?(f=w.scanUntil(b),w.scan(b),w.scanUntil(v[1])):"{"===l?(f=w.scanUntil(new RegExp("\\s*"+i("}"+r[1]))),w.scan(m),w.scanUntil(v[1]),l="&"):f=w.scanUntil(v[1]),!w.scan(v[1]))throw new Error("Unclosed tag at "+w.pos);if(g=[l,f,a,w.pos],U.push(g),"#"===l||"^"===l)E.push(g);else if("/"===l){if(d=E.pop(),!d)throw new Error('Unopened section "'+f+'" at '+a);if(d[1]!==f)throw new Error('Unclosed section "'+d[1]+'" at '+a)}else"name"===l||"{"===l||"&"===l?C=!0:"="===l&&(v=s(r=f.split(y)))}if(d=E.pop())throw new Error('Unclosed section "'+d[1]+'" at '+w.pos);return u(c(U))}function c(t){for(var e,n,r=[],i=0,o=t.length;o>i;++i)e=t[i],e&&("text"===e[0]&&n&&"text"===n[0]?(n[1]+=e[1],n[3]=e[3]):(r.push(e),n=e));return r}function u(t){for(var e,n,r=[],i=r,o=[],s=0,a=t.length;a>s;++s)switch(e=t[s],e[0]){case"#":case"^":i.push(e),o.push(e),i=e[4]=[];break;case"/":n=o.pop(),n[5]=e[2],i=o.length>0?o[o.length-1][4]:r;break;default:i.push(e)}return r}function h(t){this.string=t,this.tail=t,this.pos=0}function l(t,e){this.view=null==t?{}:t,this.cache={".":this.view},this.parent=e}function f(){this.cache={}}var p=RegExp.prototype.test,g=/\S/,d=Object.prototype.toString,v=Array.isArray||function(t){return"[object Array]"===d.call(t)},w={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"},k=/\s*/,y=/\s+/,b=/\s*=/,m=/\s*\}/,x=/#|\^|\/|>|\{|&|=|!/;h.prototype.eos=function(){return""===this.tail},h.prototype.scan=function(t){var e=this.tail.match(t);if(e&&0===e.index){var n=e[0];return this.tail=this.tail.substring(n.length),this.pos+=n.length,n}return""},h.prototype.scanUntil=function(t){var e,n=this.tail.search(t);switch(n){case-1:e=this.tail,this.tail="";break;case 0:e="";break;default:e=this.tail.substring(0,n),this.tail=this.tail.substring(n)}return this.pos+=e.length,e},l.prototype.push=function(t){return new l(t,this)},l.prototype.lookup=function(t){var e;if(t in this.cache)e=this.cache[t];else{for(var n=this;n;){if(t.indexOf(".")>0){e=n.view;for(var i=t.split("."),o=0;null!=e&&o<i.length;)e=e[i[o++]]}else e=n.view[t];if(null!=e)break;n=n.parent}this.cache[t]=e}return r(e)&&(e=e.call(this.view)),e},f.prototype.clearCache=function(){this.cache={}},f.prototype.parse=function(t,e){var n=this.cache,r=n[t];return null==r&&(r=n[t]=a(t,e)),r},f.prototype.render=function(t,e,n){var r=this.parse(t),i=e instanceof l?e:new l(e);return this.renderTokens(r,i,n,t)},f.prototype.renderTokens=function(e,n,i,o){function s(t){return h.render(t,n,i)}for(var a,c,u="",h=this,l=0,f=e.length;f>l;++l)switch(a=e[l],a[0]){case"#":if(c=n.lookup(a[1]),!c)continue;if(v(c))for(var p=0,g=c.length;g>p;++p)u+=this.renderTokens(a[4],n.push(c[p]),i,o);else if("object"==typeof c||"string"==typeof c)u+=this.renderTokens(a[4],n.push(c),i,o);else if(r(c)){if("string"!=typeof o)throw new Error("Cannot use higher-order sections without the original template");c=c.call(n.view,o.slice(a[3],a[5]),s),null!=c&&(u+=c)}else u+=this.renderTokens(a[4],n,i,o);break;case"^":c=n.lookup(a[1]),(!c||v(c)&&0===c.length)&&(u+=this.renderTokens(a[4],n,i,o));break;case">":if(!i)continue;c=r(i)?i(a[1]):i[a[1]],null!=c&&(u+=this.renderTokens(this.parse(c),n,i,c));break;case"&":c=n.lookup(a[1]),null!=c&&(u+=c);break;case"name":c=n.lookup(a[1]),null!=c&&(u+=t.escape(c));break;case"text":u+=a[1]}return u},t.name="mustache.js",t.version="0.8.1",t.tags=["{{","}}"];var E=new f;t.clearCache=function(){return E.clearCache()},t.parse=function(t,e){return E.parse(t,e)},t.render=function(t,e,n){return E.render(t,e,n)},t.to_html=function(e,n,i,o){var s=t.render(e,n,i);return r(o)?void o(s):s},t.escape=o,t.Scanner=h,t.Context=l,t.Writer=f})},{}]},{},[1]);