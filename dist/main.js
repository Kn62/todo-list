(()=>{"use strict";var n={365:(n,e,t)=>{t.d(e,{A:()=>c});var o=t(601),r=t.n(o),a=t(314),i=t.n(a)()(r());i.push([n.id,":root {\n\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    font-family: sans-serif;\n    box-sizing: border-box;\n}\n\nbody {\n    background: rgb(2,0,36);\n    background: linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(5,255,0,1) 50%, rgba(30,37,38,1) 100%);\n    height: 100vh;\n    width: 100vw;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.content-container {\n    width: 60%;\n    height: 60%;\n    display: flex;\n    flex-direction: column;\n    background-color: #2ECC71;\n}\n\nheader {\n    min-height: 15%;\n    width: 100%;\n    background-color: rgba(86, 101, 115, 0.4);\n    color: blanchedalmond;\n    font-size: 1.8rem;\n    display: flex;\n    align-items: center;\n    padding-left: 30px;\n    gap: 10px;\n    letter-spacing: 2px;\n}\n\n.material-symbols-outlined {\n    font-size: 2.5rem;\n}\n\nmain {\n    flex-grow: 1;\n    display: flex;\n}\n\n.sidebar {\n    min-width: 20%;\n    background-color: rgba(86, 101, 115, 0.1);\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n}\n\nul {\n    list-style-type: none;\n    display: flex;\n    flex-direction: column;\n    gap: 6px;\n    padding: 20px;\n    font-size: 1.3rem;\n    color: blanchedalmond;\n}\n\nli {\n    display: flex;\n    justify-content: space-between;\n}\n\n.new-todo {\n    font-size: 3rem;\n    color: blanchedalmond;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 15px;\n    background-color: rgba(86, 101, 115, 0.3);\n    cursor: pointer;\n}\n\n.todos {\n    flex-grow: 1;\n}\n\n\n.pop-up-new {\n    position: fixed;\n    top: 0;\n    left: 0;\n    height: 100vh;\n    width: 100vw;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.new-form {\n    font-size: 1rem;\n    width: 50%;\n    height: 50%;\n    outline: 1px solid white;\n    display: flex;\n    flex-direction: column;\n    background-color: #2ECC71;\n}\n\n.new-form-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    height: 15%;\n    width: 100%;\n    padding: 25px;\n    background-color: rgba(86, 101, 115, 0.4);\n    color: blanchedalmond;\n}\n\n.remove-todo {\n    cursor: pointer;\n    font-size: 2rem;\n}\n\n.new-form-main {\n    flex-grow: 1;\n    display: flex;\n}\n\n.new-form-sidebar {\n    background-color: rgba(86, 101, 115, 0.1);\n}\n\n.new-form-sidebar ul {\n    font-size: 1rem;\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n}\n\n.new-form-todo,\n.new-form-project,\n.new-form-note {\n    flex-grow: 1;\n    padding: 25px;\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n    justify-content: space-between;\n}\n\n\n#new-todo-submit,\n#new-project-submit,\n#new-note-submit {\n    border: none;\n    outline: none;\n    background-color: rgba(86, 101, 115, 0.6);\n    color: blanchedalmond;\n    padding: 15px;\n    width: 40%;\n    align-self: flex-end;\n}\n\n.new-todo-sidebar-form,\n.new-project-sidebar-form,\n.new-note-sidebar-form {\n    padding: 5px;\n}\n\ntextarea {\n    resize: none;\n    width: 100%;\n    background-color: transparent;\n    color: blanchedalmond;\n    font-size: 1.1rem;\n    \n    border: none;\n    background: transparent;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    -ms-appearance: none;\n    -o-appearance: none;\n    appearance: none;\n    outline: none;\n    padding: 0px;\n    resize: none;\n    width: 100%;\n    overflow: hidden;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n    -ms-box-shadow: none;\n    -o-box-shadow: none;\n    box-shadow: none;\n}\n\ntextarea:focus,\ninput:focus {\n    outline: none;\n}\n\n.new-todo-date-container {\n    color: blanchedalmond;\n    display: flex;\n    gap: 30px;\n    align-items: center;\n}\n\n#new-todo-object,\n#new-note-object {\n    flex-grow: 1;\n}\n\n#new-todo-input {\n    border: none;\n    padding: 4px;\n    color: blanchedalmond;\n    background-color: rgba(86, 101, 115, 0.5);\n}\n\n::placeholder {\n    color: blanchedalmond;\n}\n\n.closed {\n    display: none;\n}\n\n.open {\n    display: flex;\n}\n\n.active {\n    background-color: rgba(0, 0, 0, 0.4);\n}\n",""]);const c=i},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);o&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),e.push(d))}},e}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],l=o.base?s[0]+o.base:s[0],d=a[l]||0,p="".concat(l," ").concat(d);a[l]=d+1;var u=t(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var g=r(f,o);o.byIndex=c,e.splice(c,0,{identifier:p,updater:g,references:1})}i.push(p)}return i}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var a=o(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var s=o(n,r),l=0;l<a.length;l++){var d=t(a[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=s}}},659:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={id:o,exports:{}};return n[o](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{var n=t(72),e=t.n(n),o=t(825),r=t.n(o),a=t(659),i=t.n(a),c=t(56),s=t.n(c),l=t(540),d=t.n(l),p=t(113),u=t.n(p),f=t(365),g={};g.styleTagTransform=u(),g.setAttributes=s(),g.insert=i().bind(null,"head"),g.domAPI=r(),g.insertStyleElement=d(),e()(f.A,g),f.A&&f.A.locals&&f.A.locals;const m=n=>{n.classList.toggle("open"),n.classList.toggle("closed")},b=document.querySelector(".pop-up-new"),v=document.querySelector(".new-todo"),h=document.querySelector(".remove-todo"),x=document.querySelector(".new-form-todo"),y=document.querySelector(".new-todo-sidebar-form"),w=document.querySelector(".new-form-project"),L=document.querySelector(".new-project-sidebar-form"),k=document.querySelector(".new-form-note"),j=document.querySelector(".new-note-sidebar-form");v.addEventListener("click",(()=>{m(b),m(x),y.classList.contains("active")||y.classList.toggle("active")})),h.addEventListener("click",(()=>{m(b),w.classList.contains("open")&&(m(w),L.classList.toggle("active")),k.classList.contains("open")&&(m(k),j.classList.toggle("active")),x.classList.contains("open")&&m(x)})),y.addEventListener("click",(()=>{w.classList.contains("open")&&(m(w),L.classList.toggle("active")),k.classList.contains("open")&&(m(k),j.classList.toggle("active")),x.classList.contains("open")||(m(x),y.classList.toggle("active"))})),L.addEventListener("click",(()=>{x.classList.contains("open")&&(m(x),y.classList.toggle("active")),k.classList.contains("open")&&(m(k),j.classList.toggle("active")),w.classList.contains("open")||(m(w),L.classList.toggle("active"))})),j.addEventListener("click",(()=>{x.classList.contains("open")&&(m(x),y.classList.toggle("active")),w.classList.contains("open")&&(m(w),L.classList.toggle("active")),k.classList.contains("open")||(m(k),j.classList.toggle("active"))}))})()})();