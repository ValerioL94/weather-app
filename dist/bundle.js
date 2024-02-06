(()=>{var n={28:(n,e,t)=>{"use strict";t.d(e,{Z:()=>f});var r=t(537),o=t.n(r),a=t(645),i=t.n(a),c=t(667),s=t.n(c),A=new URL(t(370),t.b),d=new URL(t(308),t.b),p=new URL(t(325),t.b),u=new URL(t(680),t.b),m=new URL(t(548),t.b),l=i()(o()),g=s()(A),C=s()(d),E=s()(p),B=s()(u),x=s()(m);l.push([n.id,`html,\nbody {\n  border: 0;\n  margin: 0;\n  padding: 0;\n  height: 100%;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  background-image: url(${g}), url(${C}),\n    url(${E}), url(${B}), url(${x});\n}\n\n#content {\n  display: grid;\n  grid-template-rows: 50px 1fr 50px;\n  min-height: 100%;\n  transition: ease-in-out 1s;\n}\n\n#content.sunny {\n  background-image: url(${g});\n  background-attachment: fixed;\n  background-position: 50%;\n  background-size: cover;\n}\n#content.cloudy {\n  background-image: url(${C});\n  background-attachment: fixed;\n  background-position: 50%;\n  background-size: cover;\n}\n#content.rainy {\n  background-image: url(${E});\n  background-attachment: fixed;\n  background-position: 50%;\n  background-size: cover;\n}\n#content.snowy {\n  background-image: url(${B});\n  background-attachment: fixed;\n  background-position: 50%;\n  background-size: cover;\n}\n\n#content.foggy {\n  background-image: url(${x});\n  background-attachment: fixed;\n  background-position: 50%;\n  background-size: cover;\n}\n\nheader {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  background-color: rgba(0, 0, 0, 0.7);\n}\n\nmain {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n  min-height: 100%;\n}\n#formWrapper {\n  width: fit-content;\n  margin: 10px auto;\n  padding: 10px;\n  border-radius: 10px;\n  color: white;\n  font-weight: 600;\n  background-color: rgba(0, 0, 0, 0.7);\n  box-sizing: border-box;\n}\n\nform {\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n}\n#location {\n  border-radius: 10px;\n  padding: 0 10px;\n  font-size: 15px;\n  width: clamp(150px, 50%, 200px);\n  box-sizing: border-box;\n}\n#search {\n  border-radius: 10px;\n  font-weight: 600;\n  border: 1px solid;\n  box-sizing: border-box;\n}\n#search:hover,\n#systemUM:hover {\n  transform: scale(1.1);\n  cursor: pointer;\n}\n#systemUM {\n  width: 45px;\n  border-radius: 10px;\n  border: 1px solid black;\n  font-weight: 600;\n  color: white;\n}\n#systemUM.SI {\n  background-color: blue;\n  transition: 0.5s;\n}\n#systemUM.USC {\n  background-color: red;\n  transition: 0.5s;\n}\n#currentWeather {\n  width: clamp(300px, 65%, 950px);\n  border: 2px solid black;\n  border-radius: 10px;\n  color: white;\n  font-weight: 600;\n  background-color: rgba(0, 0, 0, 0.7);\n  padding: 10px;\n}\n.hidden {\n  display: none;\n}\n\n#currentLocation {\n  text-align: center;\n  margin: 0;\n}\n#condWrapper,\n.condWrapper {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n}\n#condWrapper > div,\n.condWrapper > div {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n#condWrapper > div > img,\n.condWrapper > div > img {\n  height: 55px;\n}\n.cardsWrapper {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  justify-content: space-evenly;\n}\n.card {\n  display: flex;\n  align-items: baseline;\n  justify-content: space-between;\n  border: 1px solid white;\n  border-radius: 10px;\n  width: 250px;\n  padding: 0px 20px;\n  box-sizing: border-box;\n}\n\n#forecast {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  font-size: 12px;\n  width: clamp(300px, 80%, 950px);\n  color: white;\n  font-weight: 600;\n  padding-bottom: 10px;\n  justify-content: center;\n}\n.day {\n  width: 300px;\n  border: 2px solid black;\n  border-radius: 10px;\n  background-color: rgba(0, 0, 0, 0.7);\n  padding: 10px 0;\n}\n\n.card.temp {\n  align-items: center;\n}\n.tempWrapper {\n  text-align: end;\n}\nfooter {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  color: white;\n  font-weight: 600;\n  background-color: rgba(0, 0, 0, 0.7);\n}\n\n.github {\n  height: 20px;\n  transition: 0.5s;\n}\n\n.github:hover {\n  transform: scale(1.2);\n}\n`,"",{version:3,sources:["webpack://./src/styles.css"],names:[],mappings:"AAAA;;EAEE,SAAS;EACT,SAAS;EACT,UAAU;EACV,YAAY;EACZ,gDAAgD;EAChD;6HACqE;AACvE;;AAEA;EACE,aAAa;EACb,iCAAiC;EACjC,gBAAgB;EAChB,0BAA0B;AAC5B;;AAEA;EACE,yDAAuC;EACvC,4BAA4B;EAC5B,wBAAwB;EACxB,sBAAsB;AACxB;AACA;EACE,yDAAwC;EACxC,4BAA4B;EAC5B,wBAAwB;EACxB,sBAAsB;AACxB;AACA;EACE,yDAAuC;EACvC,4BAA4B;EAC5B,wBAAwB;EACxB,sBAAsB;AACxB;AACA;EACE,yDAAuC;EACvC,4BAA4B;EAC5B,wBAAwB;EACxB,sBAAsB;AACxB;;AAEA;EACE,yDAAuC;EACvC,4BAA4B;EAC5B,wBAAwB;EACxB,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,YAAY;EACZ,oCAAoC;AACtC;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;EACT,gBAAgB;AAClB;AACA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,aAAa;EACb,mBAAmB;EACnB,YAAY;EACZ,gBAAgB;EAChB,oCAAoC;EACpC,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,6BAA6B;AAC/B;AACA;EACE,mBAAmB;EACnB,eAAe;EACf,eAAe;EACf,+BAA+B;EAC/B,sBAAsB;AACxB;AACA;EACE,mBAAmB;EACnB,gBAAgB;EAChB,iBAAiB;EACjB,sBAAsB;AACxB;AACA;;EAEE,qBAAqB;EACrB,eAAe;AACjB;AACA;EACE,WAAW;EACX,mBAAmB;EACnB,uBAAuB;EACvB,gBAAgB;EAChB,YAAY;AACd;AACA;EACE,sBAAsB;EACtB,gBAAgB;AAClB;AACA;EACE,qBAAqB;EACrB,gBAAgB;AAClB;AACA;EACE,+BAA+B;EAC/B,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;EACZ,gBAAgB;EAChB,oCAAoC;EACpC,aAAa;AACf;AACA;EACE,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,SAAS;AACX;AACA;;EAEE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,SAAS;AACX;AACA;;EAEE,aAAa;EACb,mBAAmB;EACnB,SAAS;AACX;AACA;;EAEE,YAAY;AACd;AACA;EACE,aAAa;EACb,eAAe;EACf,SAAS;EACT,6BAA6B;AAC/B;AACA;EACE,aAAa;EACb,qBAAqB;EACrB,8BAA8B;EAC9B,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;EACZ,iBAAiB;EACjB,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,eAAe;EACf,SAAS;EACT,eAAe;EACf,+BAA+B;EAC/B,YAAY;EACZ,gBAAgB;EAChB,oBAAoB;EACpB,uBAAuB;AACzB;AACA;EACE,YAAY;EACZ,uBAAuB;EACvB,mBAAmB;EACnB,oCAAoC;EACpC,eAAe;AACjB;;AAEA;EACE,mBAAmB;AACrB;AACA;EACE,eAAe;AACjB;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,SAAS;EACT,YAAY;EACZ,gBAAgB;EAChB,oCAAoC;AACtC;;AAEA;EACE,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,qBAAqB;AACvB",sourcesContent:["html,\r\nbody {\r\n  border: 0;\r\n  margin: 0;\r\n  padding: 0;\r\n  height: 100%;\r\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n  background-image: url(images/sunny.jpg), url(images/cloudy.jpg),\r\n    url(images/rainy.jpg), url(images/snowy.jpg), url(images/foggy.jpg);\r\n}\r\n\r\n#content {\r\n  display: grid;\r\n  grid-template-rows: 50px 1fr 50px;\r\n  min-height: 100%;\r\n  transition: ease-in-out 1s;\r\n}\r\n\r\n#content.sunny {\r\n  background-image: url(images/sunny.jpg);\r\n  background-attachment: fixed;\r\n  background-position: 50%;\r\n  background-size: cover;\r\n}\r\n#content.cloudy {\r\n  background-image: url(images/cloudy.jpg);\r\n  background-attachment: fixed;\r\n  background-position: 50%;\r\n  background-size: cover;\r\n}\r\n#content.rainy {\r\n  background-image: url(images/rainy.jpg);\r\n  background-attachment: fixed;\r\n  background-position: 50%;\r\n  background-size: cover;\r\n}\r\n#content.snowy {\r\n  background-image: url(images/snowy.jpg);\r\n  background-attachment: fixed;\r\n  background-position: 50%;\r\n  background-size: cover;\r\n}\r\n\r\n#content.foggy {\r\n  background-image: url(images/foggy.jpg);\r\n  background-attachment: fixed;\r\n  background-position: 50%;\r\n  background-size: cover;\r\n}\r\n\r\nheader {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  color: white;\r\n  background-color: rgba(0, 0, 0, 0.7);\r\n}\r\n\r\nmain {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 10px;\r\n  min-height: 100%;\r\n}\r\n#formWrapper {\r\n  width: fit-content;\r\n  margin: 10px auto;\r\n  padding: 10px;\r\n  border-radius: 10px;\r\n  color: white;\r\n  font-weight: 600;\r\n  background-color: rgba(0, 0, 0, 0.7);\r\n  box-sizing: border-box;\r\n}\r\n\r\nform {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-evenly;\r\n}\r\n#location {\r\n  border-radius: 10px;\r\n  padding: 0 10px;\r\n  font-size: 15px;\r\n  width: clamp(150px, 50%, 200px);\r\n  box-sizing: border-box;\r\n}\r\n#search {\r\n  border-radius: 10px;\r\n  font-weight: 600;\r\n  border: 1px solid;\r\n  box-sizing: border-box;\r\n}\r\n#search:hover,\r\n#systemUM:hover {\r\n  transform: scale(1.1);\r\n  cursor: pointer;\r\n}\r\n#systemUM {\r\n  width: 45px;\r\n  border-radius: 10px;\r\n  border: 1px solid black;\r\n  font-weight: 600;\r\n  color: white;\r\n}\r\n#systemUM.SI {\r\n  background-color: blue;\r\n  transition: 0.5s;\r\n}\r\n#systemUM.USC {\r\n  background-color: red;\r\n  transition: 0.5s;\r\n}\r\n#currentWeather {\r\n  width: clamp(300px, 65%, 950px);\r\n  border: 2px solid black;\r\n  border-radius: 10px;\r\n  color: white;\r\n  font-weight: 600;\r\n  background-color: rgba(0, 0, 0, 0.7);\r\n  padding: 10px;\r\n}\r\n.hidden {\r\n  display: none;\r\n}\r\n\r\n#currentLocation {\r\n  text-align: center;\r\n  margin: 0;\r\n}\r\n#condWrapper,\r\n.condWrapper {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 10px;\r\n}\r\n#condWrapper > div,\r\n.condWrapper > div {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n}\r\n#condWrapper > div > img,\r\n.condWrapper > div > img {\r\n  height: 55px;\r\n}\r\n.cardsWrapper {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  gap: 10px;\r\n  justify-content: space-evenly;\r\n}\r\n.card {\r\n  display: flex;\r\n  align-items: baseline;\r\n  justify-content: space-between;\r\n  border: 1px solid white;\r\n  border-radius: 10px;\r\n  width: 250px;\r\n  padding: 0px 20px;\r\n  box-sizing: border-box;\r\n}\r\n\r\n#forecast {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  gap: 10px;\r\n  font-size: 12px;\r\n  width: clamp(300px, 80%, 950px);\r\n  color: white;\r\n  font-weight: 600;\r\n  padding-bottom: 10px;\r\n  justify-content: center;\r\n}\r\n.day {\r\n  width: 300px;\r\n  border: 2px solid black;\r\n  border-radius: 10px;\r\n  background-color: rgba(0, 0, 0, 0.7);\r\n  padding: 10px 0;\r\n}\r\n\r\n.card.temp {\r\n  align-items: center;\r\n}\r\n.tempWrapper {\r\n  text-align: end;\r\n}\r\nfooter {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 10px;\r\n  color: white;\r\n  font-weight: 600;\r\n  background-color: rgba(0, 0, 0, 0.7);\r\n}\r\n\r\n.github {\r\n  height: 20px;\r\n  transition: 0.5s;\r\n}\r\n\r\n.github:hover {\r\n  transform: scale(1.2);\r\n}\r\n"],sourceRoot:""}]);const f=l},645:n=>{"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var A=0;A<n.length;A++){var d=[].concat(n[A]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},667:n=>{"use strict";n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},537:n=>{"use strict";n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),a="/*# ".concat(o," */");return[e].concat([a]).join("\n")}return[e].join("\n")}},379:n=>{"use strict";var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],A=r.base?s[0]+r.base:s[0],d=a[A]||0,p="".concat(A," ").concat(d);a[A]=d+1;var u=t(p),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var l=o(m,r);r.byIndex=c,e.splice(c,0,{identifier:p,updater:l,references:1})}i.push(p)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var s=r(n,o),A=0;A<a.length;A++){var d=t(a[A]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=s}}},569:n=>{"use strict";var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{"use strict";n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{"use strict";n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{"use strict";n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{"use strict";n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},112:(n,e,t)=>{var r={"./cloudy.jpg":308,"./foggy.jpg":548,"./github-mark-white.svg":525,"./rainy.jpg":325,"./snowy.jpg":680,"./sunny.jpg":370};function o(n){var e=a(n);return t(e)}function a(n){if(!t.o(r,n)){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}return r[n]}o.keys=function(){return Object.keys(r)},o.resolve=a,n.exports=o,o.id=112},308:(n,e,t)=>{"use strict";n.exports=t.p+"images/cloudy.jpg"},548:(n,e,t)=>{"use strict";n.exports=t.p+"images/foggy.jpg"},525:(n,e,t)=>{"use strict";n.exports=t.p+"images/github-mark-white.svg"},325:(n,e,t)=>{"use strict";n.exports=t.p+"images/rainy.jpg"},680:(n,e,t)=>{"use strict";n.exports=t.p+"images/snowy.jpg"},370:(n,e,t)=>{"use strict";n.exports=t.p+"images/sunny.jpg"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!n;)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{"use strict";var n=t(379),e=t.n(n),r=t(795),o=t.n(r),a=t(569),i=t.n(a),c=t(565),s=t.n(c),A=t(216),d=t.n(A),p=t(589),u=t.n(p),m=t(28),l={};l.styleTagTransform=u(),l.setAttributes=s(),l.insert=i().bind(null,"head"),l.domAPI=o(),l.insertStyleElement=d(),e()(m.Z,l),m.Z&&m.Z.locals&&m.Z.locals;const g=(()=>{class n{constructor(n,e,t,r,o,a,i,c,s){this.place=n,this.time=e,this.condition=t,this.temp=r,this.humidity=o,this.cloud=a,this.precip=i,this.wind=c,this.vis=s}}return{createWeather:function(e){const t=document.getElementById("systemUM"),r=new n({name:e.location.name,region:e.location.region,country:e.location.country},e.current.last_updated,{icon:e.current.condition.icon,text:e.current.condition.text},{SI:`${e.current.temp_c}°C`,USC:`${e.current.temp_f}°F`},`${e.current.humidity}%`,`${e.current.cloud}%`,{SI:`${e.current.precip_mm}mm`,USC:`${e.current.precip_in}in`},{SI:`${e.current.wind_kph}kph`,USC:`${e.current.wind_mph}mph`},{SI:`${e.current.vis_km}km`,USC:`${e.current.vis_miles}miles`});"SI"===t.className?E.displayWeather(r,"SI"):E.displayWeather(r,"USC"),E.checkWeather(e.current.condition.text)}}})(),C=(()=>{class n{constructor(n,e,t,r,o,a,i,c){this.date=n,this.condition=e,this.temp=t,this.humidity=r,this.precip=o,this.snow=a,this.wind=i,this.vis=c}}return{createForecast:function(e){const t=document.getElementById("systemUM"),r=[];e.forecast.forecastday.forEach((e=>{const t=new n(e.date,{icon:e.day.condition.icon,text:e.day.condition.text},{avgSI:`${e.day.avgtemp_c}°C`,avgUSC:`${e.day.avgtemp_f}°F`,minSI:`${e.day.mintemp_c}°C`,minUSC:`${e.day.mintemp_f}°F`,maxSI:`${e.day.maxtemp_c}°C`,maxUSC:`${e.day.maxtemp_f}°F`},`${e.day.avghumidity}%`,{SI:`${e.day.totalprecip_mm}mm`,USC:`${e.day.totalprecip_in}in`},`${e.day.totalsnow_cm}cm`,{SI:`${e.day.maxwind_kph}kph`,USC:`${e.day.maxwind_mph}mph`},{SI:`${e.day.avgvis_km}km`,USC:`${e.day.avgvis_miles}miles`});r.push(t)})),"SI"===t.className?E.displayForecast(r,"SI"):E.displayForecast(r,"USC")}}})(),E=(()=>{const n=document.getElementById("forecast"),e=document.getElementById("content");function t(n){switch(n){case"sunny":default:e.className="sunny";break;case"cloudy":e.className="cloudy";break;case"rainy":e.className="rainy";break;case"snowy":e.className="snowy";break;case"foggy":e.className="foggy"}}let r,o;function a(n,e){const t=document.getElementById("currentWeather"),o=document.getElementById("currentLocation"),a=document.getElementById("time"),i=document.getElementById("weatherIcon"),c=document.getElementById("currentCondition"),s=document.getElementById("cloud"),A=document.getElementById("currentTemp"),d=document.getElementById("currentHumidity"),p=document.getElementById("currentPrecip"),u=document.getElementById("currentWind"),m=document.getElementById("currentVis");t.className="",o.textContent=`${n.place.name}, ${n.place.region}, ${n.place.country}`,a.textContent=n.time,i.src=n.condition.icon,i.alt=n.condition.text,c.textContent=n.condition.text,s.textContent=n.cloud,d.textContent=n.humidity,"SI"===e&&(A.textContent=n.temp.SI,p.textContent=n.precip.SI,u.textContent=n.wind.SI,m.textContent=n.vis.SI),"USC"===e&&(A.textContent=n.temp.USC,p.textContent=n.precip.USC,u.textContent=n.wind.USC,m.textContent=n.vis.USC),r=n}function i(e,t){e.forEach((e=>{const r=document.createElement("div");r.className="day faded-out";const o=document.createElement("div");o.className="condWrapper";const a=document.createElement("p");a.className="time",a.textContent=e.date;const i=document.createElement("div"),c=document.createElement("img");c.src=e.condition.icon,c.alt=e.condition.text;const s=document.createElement("p");s.className="condition",s.textContent=e.condition.text;const A=document.createElement("div");A.className="cardsWrapper";const d=document.createElement("div");d.className="card temp";const p=document.createElement("h3");p.textContent="Temperature";const u=document.createElement("div");u.className="tempWrapper";const m=document.createElement("p");m.className="avgTemp";const l=document.createElement("p");l.className="minTemp";const g=document.createElement("p");g.className="maxTemp";const C=document.createElement("div");C.className="card";const E=document.createElement("h3");E.textContent="Humidity";const B=document.createElement("p");B.className="humidity",B.textContent=e.humidity;const x=document.createElement("div");x.className="card";const f=document.createElement("h3");f.textContent="Precipitations";const h=document.createElement("p");h.className="precip";const y=document.createElement("div");y.className="card";const b=document.createElement("h3");b.textContent="Snow";const v=document.createElement("p");v.className="snow",v.textContent=e.snow;const w=document.createElement("div");w.className="card";const S=document.createElement("h3");S.textContent="Wind speed";const k=document.createElement("p");k.className="wind";const I=document.createElement("div");I.className="card";const U=document.createElement("h3");U.textContent="Visibility";const j=document.createElement("p");j.className="vis","SI"===t&&(m.textContent=e.temp.avgSI,l.textContent=e.temp.minSI,g.textContent=e.temp.maxSI,h.textContent=e.precip.SI,k.textContent=e.wind.SI,j.textContent=e.wind.SI),"USC"===t&&(m.textContent=e.temp.avgUSC,l.textContent=e.temp.minUSC,g.textContent=e.temp.maxUSC,h.textContent=e.precip.USC,k.textContent=e.wind.USC,j.textContent=e.wind.USC),n.appendChild(r),r.append(o,A),o.append(a,i),i.append(c,s),A.append(d,C,x,y,w,I),d.append(p,u),u.append(m,l,g),C.append(E,B),x.append(f,h),y.append(b,v),w.append(S,k),I.append(U,j)})),o=e}return{setBg:t,initPage:function(){const e=document.getElementById("systemUM"),t=document.getElementById("location"),c=document.getElementById("search");t.addEventListener("keydown",(n=>{"Enter"===n.key&&(n.preventDefault(),c.click())})),c.addEventListener("click",(()=>{const e=t.value;""!==e&&(n.innerHTML="",async function(n){try{const e=await fetch(`http://api.weatherapi.com/v1/forecast.json?key=d0477b1da8904502b5293956240302&q=${n}&days=3`,{mode:"cors"}),t=await e.json();if(!e.ok)throw new Error(t.error.message);g.createWeather(t),C.createForecast(t)}catch(n){alert(n)}}(e),t.value="")})),e.addEventListener("click",(()=>{if("SI"===e.className){if(e.className="USC",e.title="United States Customary System",e.textContent="USC",void 0===r)return;a(r,"USC"),n.innerHTML="",i(o,"USC")}else{if(e.className="SI",e.title="International System of Units",e.textContent="SI",void 0===r)return;a(r,"SI"),n.innerHTML="",i(o,"SI")}}))},displayWeather:a,checkWeather:function(n){const e=n.toLowerCase();let r;(e.includes("sunny")||e.includes("clear"))&&(r="sunny"),(e.includes("cloudy")||e.includes("overcast"))&&(r="cloudy"),e.includes("rain")&&(r="rainy"),e.includes("snow")&&(r="snowy"),(e.includes("fog")||e.includes("mist"))&&(r="foggy"),t(r)},displayForecast:i}})();var B;(B=t(112)).keys().forEach(B),E.initPage(),E.setBg()})()})();
//# sourceMappingURL=bundle.js.map