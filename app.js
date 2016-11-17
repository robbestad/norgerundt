!function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return t[o].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){t.exports=n(6)},function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var l=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),s=n(2),u=n(3),a=n(9),c=function(t){function e(){return o(this,e),r(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return i(e,t),l(e,[{key:"render",value:function(){return u("div",{"class":"svenapp"},a)}}]),e}(s);t.exports=u(c)},function(t,e,n){var o,r,i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};/*!
	 * svenjs-component v0.7.27
	 * (c) 2016 Dominic Gannaway
	 * Released under the MIT License.
	 */
!function(l,s){"object"===i(e)&&"undefined"!=typeof t?t.exports=s():(o=s,r="function"==typeof o?o.call(e,n,e,t):o,!(void 0!==r&&(t.exports=r)))}(void 0,function(){"use strict";function t(t){return n(t)||e(t)}function e(t){return null===t}function n(t){return void 0===t}function o(t){this.bp=t,this.dom=null,this.instance=null,this.tag=null,this.children=null,this.style=null,this.className=null,this.attrs=null,this.events=null,this.hooks=null,this.key=null,this.clipData=null}function r(){this.placeholder=!0,this.dom=null}function i(){return new r}function l(t,e,n){t.split(",").forEach(function(t){return e[t]=n})}function s(){this._listeners=[],this.scrollX=null,this.scrollY=null,this.screenHeight=k,this.screenWidth=w}function u(){return document.activeElement}function a(t){t!==document.body&&document.activeElement!==t&&t.focus()}function c(t,e,n){for(var o in e)t._pendingState[o]=e[o];t._pendingSetState?(t.state=Object.assign({},t.state,t._pendingState),t._pendingState={}):(t._pendingSetState=!0,f(t,!1,n))}function f(e,n,o){if((!e._deferSetState||n)&&!e._blockRender){e._pendingSetState=!1;var r=e._pendingState,l=e.state,c=Object.assign({},l,r),f=e.props;e._pendingState={};var p=e._updateComponent(l,c,f,f,n);p===d?p=e._lastNode:t(p)&&(p=i());var h=e._lastNode,m=h.dom.parentNode,v=u(),y=new s;e._patch(h,p,m,y,e.context,e,null),e._lastNode=p,e._componentToDOMNodeMap.set(e,p.dom),e._parentNode.dom=p.dom,e.componentDidUpdate(f,l),y.trigger(),t(o)||o(),a(v)}}var d="NO_RENDER",p="undefined"!=typeof window&&window.document;o.prototype={setAttrs:function(t){return this.attrs=t,this},setTag:function(t){return this.tag=t,this},setStyle:function(t){return this.style=t,this},setClassName:function(t){return this.className=t,this},setChildren:function(t){return this.children=t,this},setHooks:function(t){return this.hooks=t,this},setEvents:function(t){return this.events=t,this},setKey:function(t){return this.key=t,this}};var h=(p?document.body:null,new Map,new Map,"http://www.w3.org/1999/xlink"),m="http://www.w3.org/XML/1998/namespace",v={},y={},g={},b={};l("xlink:href,xlink:arcrole,xlink:actuate,xlink:role,xlink:titlef,xlink:type",g,h),l("xml:base,xml:lang,xml:space",g,m),l("volume,value",v,!0),l("muted,scoped,loop,open,checked,default,capture,disabled,selected,readonly,multiple,required,autoplay,controls,seamless,reversed,allowfullscreen,novalidate",y,!0),l("animationIterationCount,borderImageOutset,borderImageSlice,borderImageWidth,boxFlex,boxFlexGroup,boxOrdinalGroup,columnCount,flex,flexGrow,flexPositive,flexShrink,flexNegative,flexOrder,gridRow,gridColumn,fontWeight,lineClamp,lineHeight,opacity,order,orphans,tabSize,widows,zIndex,zoom,fillOpacity,floodOpacity,stopOpacity,strokeDasharray,strokeDashoffset,strokeMiterlimit,strokeOpacity,strokeWidth,",b,!0);var w=p&&window.screen.width,k=p&&window.screen.height,_=0,S=0,x=0;p&&(window.onscroll=function(){_=window.scrollX,S=window.scrollY,x=performance.now()},window.resize=function(){_=window.scrollX,S=window.scrollY,w=window.screen.width,k=window.screen.height,x=performance.now()}),s.prototype={refresh:function(){this.scrollX=p&&window.scrollX,this.scrollY=p&&window.scrollY},addListener:function(t){this._listeners.push(t)},trigger:function(){for(var t=this,e=0;e<this._listeners.length;e++)t._listeners[e]()}};var C=(new Map,"Svenjs Error: Can only update a mounted or mounting component. This usually means you called setState() or forceUpdate() on an unmounted component. This is a no-op."),N=function(t,e){void 0===e&&(e={}),this.props=t||{},this.state={},this.refs={},this._blockRender=!1,this._blockSetState=!1,this._deferSetState=!1,this._pendingSetState=!1,this._pendingState={},this._parentNode=null,this._lastNode=null,this._unmounted=!0,this.context=e,this._patch=null,this._parentComponent=null,this._componentToDOMNodeMap=null};return N.prototype.render=function(){},N.prototype.forceUpdate=function(t){if(this._unmounted)throw Error(C);f(this,!0,t)},N.prototype.setState=function(t,e){if(this._unmounted)throw Error(C);if(this._blockSetState!==!1)throw Error("Svenjs Warning: Cannot update state via setState() in componentWillUpdate()");c(this,t,e)},N.prototype.componentDidMount=function(){},N.prototype.componentWillMount=function(){},N.prototype.componentWillUnmount=function(){},N.prototype.componentDidUpdate=function(){},N.prototype.shouldComponentUpdate=function(){return!0},N.prototype.componentWillReceiveProps=function(){},N.prototype.componentWillUpdate=function(){},N.prototype.getChildContext=function(){},N.prototype._updateComponent=function(e,n,o,r,i){if(this._unmounted===!0)return this._unmounted=!1,!1;if(!t(r)&&t(r.children)&&(r.children=o.children),o!==r||e!==n||i){o!==r&&(this._blockRender=!0,this.componentWillReceiveProps(r),this._blockRender=!1,this._pendingSetState&&(n=Object.assign({},n,this._pendingState),this._pendingSetState=!1,this._pendingState={}));var l=this.shouldComponentUpdate(r,n);if(l!==!1||i)return this._blockSetState=!0,this.componentWillUpdate(r,n),this._blockSetState=!1,this.props=r,this.state=n,this.render()}return d},N})},function(t,e,n){var o,r,i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};/*!
	 * svenjs-create-element v0.7.27
	 * (c) 2016 Dominic Gannaway
	 * Released under the MIT License.
	 */
!function(l,s){"object"===i(e)&&"undefined"!=typeof t?t.exports=s():(o=s,r="function"==typeof o?o.call(e,n,e,t):o,!(void 0!==r&&(t.exports=r)))}(void 0,function(){"use strict";function t(t){return t instanceof Array}function e(t){return s(t)||l(t)}function n(t){return l(t)||t===!1||t===!0||s(t)}function o(t){return"function"==typeof t}function r(t){return"o"===t[0]&&"n"===t[1]&&t.length>3}function l(t){return null===t}function s(t){return void 0===t}function u(t){return"onCreated"===t||"onAttached"===t||"onWillDetach"===t||"onWillUpdate"===t||"onDidUpdate"===t}function a(t){return"onComponentWillMount"===t||"onComponentDidMount"===t||"onComponentWillUnmount"===t||"onComponentShouldUpdate"===t||"onComponentWillUpdate"===t||"onComponentDidUpdate"===t}function c(t){this.bp=t,this.dom=null,this.instance=null,this.tag=null,this.children=null,this.style=null,this.className=null,this.attrs=null,this.events=null,this.hooks=null,this.key=null,this.clipData=null}function f(t){return new c(t)}function d(n,i){var l=null,s=null,c=null,f=null,d=null;if(!e(n)){if(t(n))return n;for(var p in n)"className"===p?f=n[p]:"style"===p?d=n[p]:u(p)&&!o(i)?(e(s)&&(s={}),s[p.substring(2).toLowerCase()]=n[p],delete n[p]):r(p)&&!o(i)?(e(l)&&(l={}),l[p.toLowerCase()]=n[p],delete n[p]):a(p)&&o(i)?(e(s)&&(s={}),s["c"+p.substring(3)]=n[p],delete n[p]):o(i)?c=n:(e(c)&&(c={}),c[p]=n[p])}return{attrs:c,events:l,className:f,style:d,hooks:s}}function p(o){var r=o.tag,i=o.attrs,l=o.children,s=o.className,u=o.style,a=o.events,c=o.hooks;if(void 0===r&&!e(i)&&!i.tpl&&!e(l)&&0===l.length)return null;var p=e(i)||e(i.key)?void 0:i.key;e(l)||0!==l.length?n(l)||(l=h(t(l)&&1===l.length?l[0]:l)):l=null,void 0!==p&&delete i.key;var m=d(i,r),v=f();return s=s||m.className,u=u||m.style,v.tag=r||null,v.attrs=m.attrs||null,v.events=m.events||a,v.hooks=m.hooks||c,v.children=void 0===l?null:l,v.key=void 0===p?null:p,v.className=void 0===s?null:s,v.style=void 0===u?null:u,v}function h(n){var o=!e(n);if(o&&t(n)){for(var r=[],l=0;l<n.length;l++){var s=n[l];e(s)||"object"!==("undefined"==typeof s?"undefined":i(s))?r.push(s):t(s)?s.length>0?r.push(h(s)):r.push(null):r.push(p(s))}return r}return o&&"object"===("undefined"==typeof n?"undefined":i(n))&&void 0===n.dom?p(n):n}function m(t,e){for(var n=[],o=arguments.length-2;o-- >0;)n[o]=arguments[o+2];return p({tag:t,attrs:e,children:n})}return c.prototype={setAttrs:function(t){return this.attrs=t,this},setTag:function(t){return this.tag=t,this},setStyle:function(t){return this.style=t,this},setClassName:function(t){return this.className=t,this},setChildren:function(t){return this.children=t,this},setHooks:function(t){return this.hooks=t,this},setEvents:function(t){return this.events=t,this},setKey:function(t){return this.key=t,this}},m})},function(t,e,n){var o,r,i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};/*!
	 * svenjs-dom v0.7.27
	 * (c) 2016 Dominic Gannaway
	 * Released under the MIT License.
	 */
!function(l,s){"object"===i(e)&&"undefined"!=typeof t?t.exports=s():(o=s,r="function"==typeof o?o.call(e,n,e,t):o,!(void 0!==r&&(t.exports=r)))}(void 0,function(){"use strict";function t(t,n){if(!r(t)){var o=e(t);(o&&t.length>0||!o)&&(n=n?Object.assign({},n,{children:t}):{children:t})}return n}function e(t){return t instanceof Array}function n(t){return t.prototype&&void 0!==t.prototype.render}function o(t){return u(t)||a(t)}function r(t){return d(t)||c(t)}function l(t){return c(t)||t===!1||t===!0||d(t)}function s(t){return"function"==typeof t}function u(t){return"string"==typeof t}function a(t){return"number"==typeof t}function c(t){return null===t}function f(t){return t===!0}function d(t){return void 0===t}function p(t,n){if(!l(t))if(e(t))for(var o=0;o<t.length;o++){var r=t[o];if(!l(r)){if(r===n)return!0;if(r.children)return p(r.children,n)}}else{if(t===n)return!0;if(t.children)return p(t.children,n)}return!1}function h(t,e){if(e){var n=e.props.children;if(p(n,t))return h(t,e._parentComponent)}return e}function m(t,e,n,o,i){if(void 0!==e){var l=e.pool,s=l.pop();if(!r(s))return ht(s,t,null,n,o,i,e.isSVG),t.dom}return null}function v(t){var e=t.bp;return!r(e)&&(e.pool.push(t),!0)}function y(t,e){D(t)?g(t,e,!0):E(t)&&b(t,e,!1)}function g(t,e,n){var o=t.items,r=o.length,i=t.pointer;if(r>0)for(var l=0;l<r;l++){var s=o[l];D(s)?g(s,e,!0):(e&&K(e,s.dom),y(s,null))}e&&n&&K(e,i)}function b(t,n,o){var i=t.instance,l=null,s=null;r(i)||(l=i.hooks,s=i.children,void 0!==i.render&&(i.componentWillUnmount(),i._unmounted=!0,oe["delete"](i),!o&&y(i._lastNode,null)));var u=t.hooks||l;r(u)||(r(u.willDetach)||u.willDetach(t.dom),r(u.componentWillUnmount)||u.componentWillUnmount(t.dom,u));var a=(r(i)?t.children:null)||s;if(!r(a))if(e(a))for(var c=0;c<a.length;c++)y(a[c],null);else y(a,null)}function w(t){this.bp=t,this.dom=null,this.instance=null,this.tag=null,this.children=null,this.style=null,this.className=null,this.attrs=null,this.events=null,this.hooks=null,this.key=null,this.clipData=null}function k(t){this.text=t,this.dom=null}function _(){this.placeholder=!0,this.dom=null}function S(t){this.dom=null,this.pointer=null,this.items=t}function x(t){return new k(t)}function C(){return new _}function N(t){return new S(t)}function O(t,e,n){t.split(",").forEach(function(t){return e[t]=n})}function j(t){return void 0!==t.text}function M(t){return t.placeholder===!0}function D(t){return void 0!==t.items}function E(t){return void 0!==t.tag||void 0!==t.bp}function T(t,e,n){r(n)?t.appendChild(e):t.insertBefore(e,n)}function U(t,e,n){var o=e.pointer;g(e,t,!1),H(t,n,o)}function W(t,e){var n;return n=e===!0?document.createElementNS("http://www.w3.org/2000/svg",t):document.createElement(t)}function A(t,e,n){if(null===e)return document.createTextNode(t);if(n){if(""!==t)return e.textContent=t,e.firstChild;var o=document.createTextNode("");return e.appendChild(o),o}var r=document.createTextNode(t);return e.appendChild(r),r}function G(t,e,n,o,i,l,s){var u=null,a=t._lastNode;r(a)||(u=t,t=a),y(t,!1);var c=Z(e,null,o,i,l,s);e.dom=c,H(n,c,t.dom),null!==u&&(u._lastNode=e)}function H(t,e,n){t.replaceChild(e,n)}function V(t){return o(t)?x(t):l(t)?C():e(t)?N(t):t}function P(t,e){var n=t[e];return t[e]=V(n)}function R(t,e){if(D(t))return y(t,e);var n=t.dom;n===e?n.innerHTML="":(K(e,n),Yt&&v(t)),y(t,!1)}function K(t,e){t.removeChild(e)}function L(t,e,n){for(var o=e||Object.keys(t),r=0;r<o.length;r++){var i=o[r];n[i]=null}}function Y(){return document.activeElement}function I(t,e){if(Yt){var n=e.length;if(n>5)for(var o=0;o<n;o++){var r=e[o];l(r)||v(r)}}t.textContent=""}function X(t){null!==t&&t!==document.body&&document.activeElement!==t&&t.focus()}function z(t,e){return!t.complex&&e.length&&!r(e[0])&&!r(e[0].key)&&t.length&&!r(t[0])&&!r(t[0].key)}function F(t,e){if("option"===t.tag){var n=t.attrs&&t.attrs.value;e[n]?(t.attrs=t.attrs||{},t.attrs.selected="selected",t.dom.selected=!0):t.dom.selected=!1}else for(var o=0,r=t.children.length;o<r;o++)F(t.children[o],e)}function q(t){var n=t.attrs&&t.attrs.value,o={};if(e(n))for(var r=0,i=n.length;r<i;r++)o[n[r]]=n[r];else o[n]=n;for(var l=0,s=t.children.length;l<s;l++)F(t.children[l],o);t.attrs&&t.attrs[n]&&delete t.attrs.value}function B(t,e,n){r(t.created)||t.created(n),r(t.attached)||e.addListener(function(){t.attached(n)})}function J(t){var e=t.attrs.value;r(e)||(t.dom.value=e)}function Q(t,e){if("input"===t&&e.attrs){var n=e.attrs.type;if("text"===n)J(e);else if("checkbox"===n||"radio"===n){var o=e.attrs.checked;e.dom.checked=!!o}}else"textarea"===t&&J(e)}function Z(t,e,n,o,r,l){if(M(t))return nt(t,e);if(j(t))return et(t,e);if(D(t))return tt(t,e,n,o,r,l);if(E(t))return $(t,e,n,o,r,l);var s=V(t);if(t!==s)return Z(s,e,n,o,r,l);throw new Error('Svenjs Error: invalid object "'+("undefined"==typeof t?"undefined":i(t))+'" passed to mount()')}function $(t,e,n,o,r,i){var l=t.bp;if(d(l))return st(t,e,n,o,r,i);if(Yt){var s=m(t,l,n,o,r);if(!c(s))return c(e)||e.appendChild(s),s}return lt(t,l,e,n,o,r)}function tt(t,e,n,o,r,i){var l=t.items,s=document.createTextNode(""),u=document.createDocumentFragment();return ut(l,u,n,o,r,i),t.pointer=s,t.dom=u,u.appendChild(s),e&&T(e,u),u}function et(t,e){var n=document.createTextNode(t.text);return t.dom=n,e&&T(e,n),n}function nt(t,e){var n=document.createTextNode("");return t.dom=n,e&&T(e,n),n}function ot(t){"select"===t.tag&&q(t)}function rt(t,e,n,o){ot(t);var r=t.attrs;if(c(e.attrKeys)){var i=Object.keys(r);e.attrKeys=e.attrKeys?e.attrKeys.concat(i):i}var l=e.attrKeys;pt(t,r,l,n,o)}function it(t,e,n){var o=t.events;c(e.eventKeys)&&(e.eventKeys=Object.keys(o));var r=e.eventKeys;ft(o,r,n)}function lt(t,e,n,o,r,i){var l=t.tag;if(f(e.isComponent))return dt(t,l,t.attrs||{},t.hooks,t.children,i,n,o,r);var s=W(e.tag,e.isSVG);t.dom=s,f(e.hasHooks)&&B(t.hooks,o,s),f(e.lazy)&&Ut(t,o,s);var u=t.children;switch(e.childrenType){case 1:A(u,s,!0);break;case 2:Z(t.children,s,o,r,i,e.isSVG);break;case 3:ut(u,s,o,r,i,e.isSVG);break;case 4:for(var a=0;a<u.length;a++)Z(u[a],s,o,r,i,e.isSVG);break;case 5:at(t,u,s,o,r,i,e.isSVG)}return f(e.hasAttrs)&&rt(t,e,s,i),f(e.hasClassName)&&(s.className=t.className),f(e.hasStyle)&&_t(null,t.style,s),f(e.hasEvents)&&it(t,e,s),c(n)||n.appendChild(s),s}function st(t,e,n,o,i,a){var f=t.tag;if(s(f))return dt(t,f,t.attrs||{},t.hooks,t.children,i,e,n,o);if(!u(f)||""===f)throw Error("Svenjs Error: Expected function or string for element tag type");"svg"===f&&(a=!0);var d=W(f,a),p=t.children,h=t.attrs,m=t.events,v=t.hooks,y=t.className,g=t.style;return t.dom=d,r(v)||B(v,n,d),l(p)||at(t,p,d,n,o,i,a),r(h)||(ot(t),pt(t,h,Object.keys(h),d,i)),r(y)||(d.className=y),r(g)||_t(null,g,d),r(m)||ft(m,Object.keys(m),d),c(e)||e.appendChild(d),d}function ut(t,e,n,o,r,i){t.complex=!1;for(var l=0;l<t.length;l++){var s=P(t,l);j(s)?(et(s,e),t.complex=!0):M(s)?(nt(s,e),t.complex=!0):D(s)?(tt(s,e,n,o,r,i),t.complex=!0):Z(s,e,n,o,r,i)}}function at(t,n,r,i,s,u,a){e(n)?ut(n,r,i,s,u,a):o(n)?A(n,r,!0):l(n)||Z(n,r,i,s,u,a)}function ct(t,e,n){!l(t)&&u(e)?t.refs[e]=n:s(e)&&e(n)}function ft(t,e,n){for(var o=0;o<e.length;o++){var r=e[o];n[r]=t[r]}}function dt(e,o,i,s,u,a,c,f,d){i=t(u,i);var p;if(n(o)){var h=new o(i,d);h._patch=ht,h._componentToDOMNodeMap=oe,!r(a)&&i.ref&&ct(a,i.ref,h);var m=h.getChildContext();r(m)||(d=Object.assign({},d,m)),h.context=d,h._unmounted=!1,h._parentNode=e,a&&(h._parentComponent=a),h._pendingSetState=!0,h.componentWillMount();var v=h.render();l(v)&&(v=C()),h._pendingSetState=!1,p=Z(v,null,f,d,h,!1),h._lastNode=v,h.componentDidMount(),null===c||l(p)||c.appendChild(p),oe.set(h,p),e.dom=p,e.instance=h}else{r(s)||(r(s.componentWillMount)||s.componentWillMount(null,i),r(s.componentDidMount)||f.addListener(function(){s.componentDidMount(p,i)}));var y=o(i,d);l(y)&&(y=C()),p=Z(y,null,f,d,null,!1),e.instance=y,null===c||l(p)||c.appendChild(p),e.dom=p}return p}function pt(t,e,n,o,r){for(var i=0;i<n.length;i++){var l=n[i];"ref"===l?ct(h(t,r),e[l],o):xt(l,null,e[l],o)}}function ht(t,e,n,r,i,s,u){if(t!==e)if(l(t))Z(e,n,r,i,s,u);else if(l(e))R(t,n);else if(o(t))if(o(e))n.firstChild.nodeValue=e;else{var a=Z(e,null,r,i,s,u);e.dom=a,H(n,a,n.firstChild)}else if(o(e))H(n,document.createTextNode(e),t.dom);else if(D(e))D(t)?Nt(t,e,n,r,i,s,u):(H(n,tt(e,null,r,i,s,u),t.dom),y(t,null));else if(D(t))U(n,t,Z(e,null,r,i,s,u));else if(M(e))M(t)?jt(t,e):(H(n,nt(e,null),t.dom),y(t,null));else if(M(t))H(n,Z(e,null,r,i,s,u),t.dom);else if(j(e))j(t)?Mt(t,e):(H(n,et(e,null),t.dom),y(t,null));else if(j(t))H(n,Z(e,null,r,i,s,u),t.dom);else if(E(e))E(t)?gt(t,e,n,r,i,s,u,!1):(H(n,mountVNode(e,null,r,i,s,u),t.dom),y(t,null));else{if(!E(t))return ht(t,V(e),n,r,i,s,u);H(n,Z(e,null,r,i,s,u),t.dom),y(t,null)}return e}function mt(t,e,n){o(e)&&""!==e?t.firstChild.nodeValue=n:t.textContent=n}function vt(t,e,n,o){t&&(u(e)&&delete t.refs[e],u(n)&&(t.refs[n]=o))}function yt(t,n,r,i,s,u,a){var c=n.children,f=t.children;if(f!==c)if(l(f))o(c)?mt(r,f,c):l(c)||(e(c)?ut(c,r,i,s,u,a):Z(c,r,i,s,u,a));else if(l(c))I(r,f);else if(e(f))e(c)?(c.complex=f.complex,z(f,c)?Dt(f,c,r,i,s,u,a,null):Ot(f,c,r,i,s,u,a,null)):Ot(f,[c],r,i,s,u,a,null);else if(e(c)){var d=f;o(f)&&(d=x(d),d.dom=r.firstChild),Ot([d],c,r,i,s,u,a,null)}else o(c)?mt(r,f,c):o(f)?ht(f,c,r,i,s,u,a):gt(f,c,r,i,s,u,a,!1)}function gt(t,e,n,o,r,i,l,s){var u=t.bp,a=e.bp;void 0===u||void 0===a?wt(t,e,n,o,r,i,l):bt(t,e,u,a,n,o,r,i,s)}function bt(t,e,o,i,s,u,a,c,f){var d;i.hasHooks===!0&&(d=e.hooks,d&&!r(d.willUpdate)&&d.willUpdate(t.dom));var p=e.tag||i.tag,h=t.tag||o.tag;if(h!==p)if(o&&o.isComponent===!0){var m=t.instance;if(i.isComponent===!0)G(t,e,s,u,a,c,!1);else if(n(h)){b(t,null,!0);var v=m._lastNode;bt(v,e,v.bp,i,s,u,a,c,i.isSVG)}else b(t,null,!0),bt(m,e,m.bp,i,s,u,a,c,i.isSVG)}else G(t,e,s,u,a,c,i.isSVG);else if(r(h))e.dom=t.dom;else if(o&&o.isComponent===!0){if(i.isComponent===!0){var y=t.instance;if(!r(y)&&y._unmounted){var g=dt(e,h,e.attrs||{},e.hooks,e.children,y,s,u,a);null!==s&&H(s,g,t.dom)}else e.instance=y,e.dom=t.dom,Ct(!0,e,e.tag,o,i,y,t.attrs||{},e.attrs||{},e.hooks,t.children,e.children,s,u,a)}}else{var w=t.dom,k=o.childrenType,_=i.childrenType;if(e.dom=w,i.lazy===!0&&f===!1){var S=t.clipData;if(null===u.scrollY&&u.refresh(),e.clipData=S,(S.pending===!0||S.top-u.scrollY>u.screenHeight)&&setClipNode(S,w,t,e,s,u,a,c,o.isSVG))return;if(S.bottom<u.scrollY&&setClipNode(S,w,t,e,s,u,a,c,o.isSVG))return}if(k>0||_>0)if(5===_||5===k)yt(t,e,w,u,a,c);else{var x=t.children,C=e.children;0===k||l(x)?_>2?ut(C,w,u,a,c):Z(C,w,u,a,c):0===_||l(C)?k>2?I(w,x):R(x,w):x!==C&&(4===k&&4===_?Dt(x,C,w,u,a,c,i.isSVG,null):2===k&&2===_?ht(x,C,w,u,a,c,!0,i.isSVG):1===k&&1===_?mt(w,x,C):yt(t,e,w,u,a,c,i.isSVG))}if(o.hasAttrs!==!0&&i.hasAttrs!==!0||kt(t,e,o.attrKeys,i.attrKeys,w,c),o.hasEvents!==!0&&i.hasEvents!==!0||St(t.events,e.events,o.eventKeys,i.eventKeys,w),o.hasClassName===!0||i.hasClassName===!0){var N=e.className;t.className!==N&&(r(N)?w.removeAttribute("class"):w.className=N)}if(o.hasStyle===!0||i.hasStyle===!0){var O=e.style,j=t.style;j!==O&&_t(j,O,w)}i.hasHooks!==!0||r(d.didUpdate)||d.didUpdate(w),Q(p,e)}}function wt(t,e,o,i,l,u,a){var c=e.hooks,f=!r(c);f&&!r(c.willUpdate)&&c.willUpdate(t.dom);var d=e.tag||(r(e.bp)?null:e.bp.tag),p=t.tag||(r(t.bp)?null:t.bp.tag);if("svg"===d&&(a=!0),p!==d){var h=t.instance;s(p)?s(d)?G(t,e,o,i,l,u,a):n(p)?(b(t,null,!0),wt(h._lastNode,e,o,i,l,u,a)):(b(t,null,!0),wt(h,e,o,i,l,u,a)):G(h||t,e,o,i,l,u,a)}else if(r(p))e.dom=t.dom;else if(s(p)){if(s(d)){var m=t._instance;if(!r(m)&&m._unmounted){var v=dt(e,p,e.attrs||{},e.hooks,e.children,m,o,i,l);null!==o&&H(o,v,t.dom)}else e.instance=t.instance,e.dom=t.dom,Ct(!1,e,e.tag,null,null,e.instance,t.attrs||{},e.attrs||{},e.hooks,t.children,e.children,o,i,l)}}else{var y=t.dom,g=e.className,w=e.style;e.dom=y,yt(t,e,y,i,l,u,a),kt(t,e,null,null,y,u),St(t.events,e.events,null,null,y),t.className!==g&&(r(g)?y.removeAttribute("class"):y.className=g),t.style!==w&&_t(t.style,w,y),f&&!r(c.didUpdate)&&c.didUpdate(y),Q(d,e)}}function kt(t,e,n,o,i,l){"select"===t.tag&&q(e);var s=e.attrs,u=t.attrs,a=r(s),c=!r(u);if(!a)for(var f=o||Object.keys(s),d=f.length,p=0;p<d;p++){var h=f[p],m=c&&u[h],v=s[h];m!==v&&("ref"===h?vt(l,m,v,i):xt(h,m,v,i))}if(c)for(var y=n||Object.keys(u),g=y.length,b=0;b<g;b++){var w=y[b];(a||r(s[w]))&&("ref"===w?vt(getRefInstance(node,l),u[w],null,i):i.removeAttribute(w))}}function _t(t,e,n){if(u(e))n.style.cssText=e;else if(r(t)){if(!r(e))for(var o=Object.keys(e),i=0;i<o.length;i++){var l=o[i],s=e[l];a(s)&&!Bt[l]?n.style[l]=s+"px":n.style[l]=s}}else if(r(e))n.removeAttribute("style");else{for(var c=Object.keys(e),f=0;f<c.length;f++){var d=c[f],p=e[d];a(p)&&!Bt[d]?n.style[d]=p+"px":n.style[d]=p}for(var h=Object.keys(t),m=0;m<h.length;m++){var v=h[m];r(e[v])&&(n.style[v]="")}}}function St(t,e,n,o,i){var l,s=!r(e),u=!r(t);if(u&&(l=n||Object.keys(t)),s){var a=o||Object.keys(e);if(u){for(var c=0;c<a.length;c++){var f=a[c],d=t[f],p=e[f];d!==p&&(i[f]=p)}for(var h=0;h<l.length;h++){var m=l[h];r(e[m])&&(i[m]=null)}}else ft(e,a,i)}else u&&L(t,l,i)}function xt(t,e,n,o){if("dangerouslySetInnerHTML"===t){var i=e&&e.__html,l=n&&n.__html;if(r(l))throw new Error("Svenjs Error: dangerouslySetInnerHTML requires an object with a __html propety containing the innerHTML content");i!==l&&(o.innerHTML=l)}else if("eventData"===t)o.eventData=n;else if(zt[t])o[t]=null===n?"":n;else if(Ft[t])o[t]=!!n;else{var s=qt[t];n===!1||r(n)?void 0!==s?o.removeAttributeNS(s,t):o.removeAttribute(t):void 0!==s?o.setAttributeNS(s,t,n===!0?t:n):o.setAttribute(t,n===!0?t:n)}}function Ct(e,o,i,s,u,a,c,f,d,p,h,m,v,y){if(f=t(h,f),n(i)){var g=a.props,b=a.state,w=a.state,k=a.getChildContext();r(k)||(y=Object.assign({},y,k)),a.context=y;var _=a._updateComponent(b,w,g,f);_===Kt?_=a._lastNode:r(_)&&(_=C()),ht(a._lastNode,_,m,v,y,a,null,!1),o.dom=_.dom,a._lastNode=_,a.componentDidUpdate(g,b),oe.set(a,_.dom)}else{var S=!0,x=e&&u.hasHooks===!0||!r(d);if(c=t(p,c),x&&!r(d.componentShouldUpdate)&&(S=d.componentShouldUpdate(o.dom,c,f)),S!==!1){x&&!r(d.componentWillUpdate)&&d.componentWillUpdate(o.dom,c,f);var N=i(f,y);l(N)&&(N=C()),N.dom=o.dom,ht(a,N,m,v,y,null,null,!1),o.instance=N,x&&!r(d.componentDidUpdate)&&d.componentDidUpdate(o.dom,c,f)}}}function Nt(t,e,n,o,r,i,l){var s=t.items,u=e.items,a=t.pointer;e.dom=t.dom,e.pointer=a,!s!==u&&(z(s,u)?Dt(s,u,n,o,r,i,l,e):Ot(s,u,n,o,r,i,l,e))}function Ot(t,e,n,o,r,i,l,s){for(var u=t.length,a=e.length,c=u>a?a:u,f=0;f<c;f++){var d=t[f],p=P(e,f);ht(d,p,n,o,r,i,l)}if(u<a)for(f=c;f<a;f++){var h=P(e,f);T(n,Z(h,null,o,r,i,l),s&&s.pointer)}else if(u>a)for(f=c;f<u;f++)R(t[f],n)}function jt(t,e){e.dom=t.dom}function Mt(t,e){var n=e.text,o=t.dom;e.dom=o,t.text!==n&&(o.nodeValue=n)}function Dt(t,e,n,o,r,i,l,s){for(var u,a=t.length,c=e.length,f=a-1,d=c-1,p=0,h=0,m=null,v=null,y=null,g=null;p<=f&&h<=d&&(v=e[h],m=t[p],v.key===m.key);)gt(m,v,n,o,r,i,l,!1),h++,p++;for(;p<=f&&h<=d&&(y=e[d],g=t[f],y.key===g.key);)gt(g,y,n,o,r,i,l,!1),d--,f--;for(;p<=f&&h<=d&&(y=e[d],m=t[p],y.key===m.key);)u=d+1<c?e[d+1].dom:null,gt(m,y,n,o,r,i,l,!1),T(n,y.dom,u),d--,p++;for(;p<=f&&h<=d&&(v=e[h],g=t[f],v.key===g.key);)u=t[p].dom,gt(g,v,n,o,r,i,l,!1),T(n,v.dom,u),h++,f--;if(p>f){if(h<=d)for(u=d+1<c?e[d+1].dom:s&&s.pointer;h<=d;h++)T(n,Z(e[h],null,o,r,i,l),u)}else if(h>d)for(;p<=f;)R(t[p++],n);else{var b,w=f-p+1,k=d-h+1,_=new Array(k);for(b=0;b<k;b++)_[b]=-1;var S,x=!1,C=0,N=0,O=!0,j=0;if(k<=4||w*k<=16)for(b=p;b<=f;b++){if(O=!0,g=t[b],j<k)for(S=h;S<=d;S++)if(y=e[S],g.key===y.key){_[S-h]=b,N>S?x=!0:N=S,gt(g,y,n,o,r,i,l,!1),j++,O=!1;break}O&&(R(g,n),C++)}else{var M=new Map;for(b=h;b<=d;b++)M.set(e[b].key,b);for(b=p;b<=f;b++)O=!0,g=t[b],j<c&&(S=M.get(g.key),void 0!==S&&(y=e[S],_[S-h]=b,N>S?x=!0:N=S,gt(g,y,n,o,r,i,l,!1),j++,O=!1)),O&&(R(g,n),C++)}var D;if(x){var E=Et(_);for(S=E.length-1,b=k-1;b>=0;b--)_[b]===-1?(D=b+h,u=D+1<c?e[D+1].dom:s&&s.pointer,T(n,Z(e[D],null,o,r,i,l),u)):S<0||b!==E[S]?(D=b+h,u=D+1<c?e[D+1].dom:s&&s.pointer,T(n,e[D].dom,u)):S--}else if(w-C!==k)for(b=k-1;b>=0;b--)_[b]===-1&&(D=b+h,u=D+1<c?e[D+1].dom:s&&s.pointer,T(n,Z(e[D],null,o,r,i,l),u))}}function Et(t){var e=t.slice(0),n=[];n.push(0);var o,r,i,l,s;for(o=0;o<t.length;o++)if(t[o]!==-1)if(r=n[n.length-1],t[r]<t[o])e[o]=r,n.push(o);else{for(i=0,l=n.length-1;i<l;)s=(i+l)/2|0,t[n[s]]<t[o]?i=s+1:l=s;t[o]<t[n[i]]&&(i>0&&(e[o]=n[i-1]),n[i]=o)}for(i=n.length,l=n[i-1];i-- >0;)n[i]=l,l=e[l];return n}function Tt(){this._listeners=[],this.scrollX=null,this.scrollY=null,this.screenHeight=Qt,this.screenWidth=Jt}function Ut(t,e,n){e.addListener(function(){var o=n.getBoundingClientRect();null===e.scrollY&&e.refresh(),t.clipData={top:o.top+e.scrollY,left:o.left+e.scrollX,bottom:o.bottom+e.scrollY,right:o.right+e.scrollX,pending:!1}})}function Wt(t,e,n,o,r,i,l){var s=e[n.i];if(j(t)){var u=t.text;if(t.dom=s,3===s.nodeType&&""!==u)s.nodeValue=u;else{var a=et(u);H(o,a,s),e.splice(e.indexOf(s),1,a),t.dom=a}}else if(M(t))t.dom=s;else if(D(t)){var c=t.items;t.dom=document.createDocumentFragment();for(var f=0;f<c.length;f++){var d=Wt(P(c,f),e,n,o,r,i,l);if(d)return!0}var p=e[n.i++];if(!p||3!==p.nodeType)return!0;t.pointer=p}else{var h=Ht(t,s,o,r,i,l,!1);if(h)return!0}n.i++}function At(t){for(var e=[],n=t.childNodes,o=n.length,r=0;r<o;){var i=n[r];if(8===i.nodeType)if("!"===i.data){var l=document.createTextNode("");t.replaceChild(l,i),e.push(l),r++}else t.removeChild(i),o--;else e.push(i),r++}return e}function Gt(e,o,i,s,u,a,c,f,d,p,h){if(i=t(u,i),!n(o)){var m=e.instance=o(i);return r(s)||(r(s.componentWillMount)||s.componentWillMount(null,i),r(s.componentDidMount)||f.addListener(function(){s.componentDidMount(a,i)})),Ht(m,a,c,f,d,m,h)}var v=e.instance=new o(i);v._patch=ht,!r(p)&&i.ref&&ct(p,i.ref,v);var y=v.getChildContext();r(y)||(d=Object.assign({},d,y)),v.context=d,v._unmounted=!1,v._parentNode=e,p&&(v._parentComponent=p),v._pendingSetState=!0,v.componentWillMount();var g=v.render();v._pendingSetState=!1,l(g)&&(g=C()),Ht(g,a,c,f,d,v,h),v._lastNode=g,v.componentDidMount()}function Ht(t,n,i,l,u,a,c){var f=t.bp,d=t.tag||f.tag;if(s(d))t.dom=n,Gt(t,d,t.attrs||{},t.hooks,t.children,n,i,l,u,a,c);else if(1!==n.nodeType||d!==n.tagName.toLowerCase());else{t.dom=n;var p=t.hooks;(f&&f.hasHooks===!0||!r(p))&&B(p,l,n);var h=t.children;if(!r(h))if(o(h))n.textContent!==h&&(n.textContent=h);else{var m=At(n),v={i:0},y=!1;if(e(h))for(var g=0;g<h.length&&!(y=Wt(P(h,g),m,v,n,l,u,a));g++);else y=1!==m.length||Wt(h,m,v,n,l,u,a)}var b=t.className,w=t.style;if(r(b)||(n.className=b),r(w)||_t(null,w,n),f&&f.hasAttrs===!0)rt(t,f,n,a);else{var k=t.attrs;r(k)||(ot(t),pt(t,k,Object.keys(k),n,a))}if(f&&f.hasEvents===!0)it(t,f,n);else{var _=t.events;r(_)||ft(_,Object.keys(_),n)}}}function Vt(t,e,n){if(e&&1===e.nodeType){var o=e.querySelector("[data-sjsroot]");if(o&&o.parentNode===e)return Ht(t,o,e,n,{},!0),!0}return e!==ee&&(e.textContent=""),!1}function Pt(t){return oe.get(t)||null}function Rt(t,e){var n=ne.get(e),o=new Tt;if(d(n))l(t)||(Vt(t,e,o)||Z(t,e,o,{},null,!1),o.trigger(),ne.set(e,{input:t}));else{var r=Y(),i=ht(n.input,t,e,o,{},null,!1);o.trigger(),c(t)&&ne["delete"](e),n.input=i,X(r)}}var Kt="NO_RENDER",Lt="undefined"!=typeof window&&window.document,Yt=!0;w.prototype={setAttrs:function(t){return this.attrs=t,this},setTag:function(t){return this.tag=t,this},setStyle:function(t){return this.style=t,this},setClassName:function(t){return this.className=t,this},setChildren:function(t){return this.children=t,this},setHooks:function(t){return this.hooks=t,this},setEvents:function(t){return this.events=t,this},setKey:function(t){return this.key=t,this}};var It="http://www.w3.org/1999/xlink",Xt="http://www.w3.org/XML/1998/namespace",zt={},Ft={},qt={},Bt={};O("xlink:href,xlink:arcrole,xlink:actuate,xlink:role,xlink:titlef,xlink:type",qt,It),O("xml:base,xml:lang,xml:space",qt,Xt),O("volume,value",zt,!0),O("muted,scoped,loop,open,checked,default,capture,disabled,selected,readonly,multiple,required,autoplay,controls,seamless,reversed,allowfullscreen,novalidate",Ft,!0),O("animationIterationCount,borderImageOutset,borderImageSlice,borderImageWidth,boxFlex,boxFlexGroup,boxOrdinalGroup,columnCount,flex,flexGrow,flexPositive,flexShrink,flexNegative,flexOrder,gridRow,gridColumn,fontWeight,lineClamp,lineHeight,opacity,order,orphans,tabSize,widows,zIndex,zoom,fillOpacity,floodOpacity,stopOpacity,strokeDasharray,strokeDashoffset,strokeMiterlimit,strokeOpacity,strokeWidth,",Bt,!0);var Jt=Lt&&window.screen.width,Qt=Lt&&window.screen.height,Zt=0,$t=0,te=0;Lt&&(window.onscroll=function(){Zt=window.scrollX,$t=window.scrollY,te=performance.now()},window.resize=function(){Zt=window.scrollX,$t=window.scrollY,Jt=window.screen.width,Qt=window.screen.height,te=performance.now()}),Tt.prototype={refresh:function(){this.scrollX=Lt&&window.scrollX,this.scrollY=Lt&&window.scrollY},addListener:function(t){this._listeners.push(t)},trigger:function(){for(var t=this,e=0;e<this._listeners.length;e++)t._listeners[e]()}};var ee=(new Map,Lt?document.body:null),ne=new Map,oe=new Map,re={render:Rt,findDOMNode:Pt,mount:Z,patch:ht,unmount:y};return re})},function(t,e){"use strict";t.exports=function(t){if(t.length<2)return Promise.resolve({hits:[]});var e=new Request("/search",{method:"POST",body:JSON.stringify({input:t}),headers:new Headers({Accept:"application/json, text/plain, */*","Content-Type":"application/json"})});return fetch(e).then(function(t){return t.json()})}},function(t,e,n){"use strict";var o=(n(4),document.getElementById("myapp"),n(1),n(8)),r=o.mount;o.dispose,r()},function(t,e){"use strict";function n(t){var e=3*t;return e-2>=0?e-2:e-1>=0?e-1:0}t.exports=function(t){var e=n(t)-1,o=e+2;return{startCount:e,endCount:o}}},function(t,e,n){"use strict";var o=n(4),r=document.getElementById("myapp"),i=n(1);e.mount=function(){return o.render(i,r)},e.dispose=function(){return o.unmount(i,r)}},function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var l=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),s=n(2),u=n(3),a=n(5),c=n(7),f=function(){var t=0;return function(e,n){clearTimeout(t),t=setTimeout(e,n)}}(),d=function(t){function e(){o(this,e);var t=r(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return t.state={hits:[],currentPage:1},t.updateStart=t.updateStart.bind(t),t}return i(e,t),l(e,[{key:"updateStart",value:function(t){this.setState({currentPage:t})}},{key:"componentDidMount",value:function(){var t=1;if(location.href.indexOf("#")!=-1){var e=location.href.substr(location.href.indexOf("#")),n=e.split("page");n[1]&&(t=n[1])}this.updateStart(t),this.refs.inputfield.focus()}},{key:"render",value:function(){var t=this,e=this.state,n=e.hits,o=(e.searchVal,e.currentPage),r=function(e,n){for(var o=Math.ceil(e.length/3),r=[],i=function(e){r.push(u("li",null,e+1!==Number(n)&&u("a",{href:"#page"+(e+1),onClick:function(){return t.updateStart(e+1)}},e+1),e+1===Number(n)&&u("a",{onClick:function(){return t.updateStart(e+1)}},e+1)))},l=0;l<o;l++)i(l);return r},i=c(o),l=i.startCount,s=i.endCount;return u("div",{"class":"row"},u("div",{"class":"app"},u("h3",null,"Søk i Norge Rundt"),u("form",{"class":"search-form"},u("input",{"class":"inputfield",ref:"inputfield",placeHolder:"Søk...",type:"text",onKeyUp:function(e){return f(function(){a(e.target.value).then(function(e){try{t.setState({hits:e.hits.hits})}catch(n){}})},600)}})),u("ul",{id:"hits"},n&&n.map(function(t,e){return e>=l&&e<=s&&u("li",{"class":"infoblock"},u("div",{"class":"infohead"},t._source.tittel+" ("+t._source.year+")"),t._source.alder&&u("div",null,"Personalder: "+t._source.alder),t._source.antall_kvinner&&u("div",null,"Kvinner: "+t._source.antall_kvinner),t._source.antall_menn&&u("div",null,"Menn: "+t._source.antall_menn),t._source.antrekk&&u("div",null,"Antrekk: "+t._source.antrekk),u("div",null,u("a",{target:"_blank","class":"subdued",href:t._source.url},"Se video")))}),n.length>0&&u("ul",{"class":"pages"},r(n,o)))))}}]),e}(s);t.exports=u(d)}]);