!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){t.exports=n(8)},function(t,e,n){var r;(function(t){"use strict";var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i="function"==typeof Symbol&&"symbol"===o(Symbol.iterator)?function(t){return"undefined"==typeof t?"undefined":o(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":"undefined"==typeof t?"undefined":o(t)},c=n(3),u=n(12),s=n(2),a=n(5),l=n(4),f=n(16),d={version:c.version,create:u.create,setState:a.setState,createStore:f.createStore,render:s.render,renderToString:s.renderToString,lifeCycle:l.lifeCycle};"object"===i(t)&&null!=t&&t.exports?t.exports=d:(r=function(){return d}.call(e,n,e,t),!(void 0!==r&&(t.exports=r)))}).call(e,n(11)(t))},function(t,e,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o="function"==typeof Symbol&&"symbol"===r(Symbol.iterator)?function(t){return"undefined"==typeof t?"undefined":r(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":"undefined"==typeof t?"undefined":r(t)},i=n(15),c=i.isFunction,u=i.isObject,s=(i.isString,i.isArray),a=function(t,e){return e.appendChild(t)},l=Object.prototype.hasOwnProperty,f=function(t,e){if(l.call(t,"children")&&s(t.children)&&t.children.forEach(function(t){"string"!=typeof t&&"number"!=typeof t||e.appendChild(document.createTextNode(t))}),l.call(t,"attrs")){var n=t.attrs;for(var r in n)if("config"!==r&&"key"!==r&&("disabled"!==r||n[r]!==!1))if("class"==r||"className"==r)e.className=n[r].toString();else if(c(n[r])&&"on"==r.slice(0,2))e[r.toLowerCase()]=n[r];else{if("checked"===r&&(n[r]===!1||""===n[r]))continue;try{e.setAttribute(""+r,n[r].toString())}catch(o){}}}return e},d=function(t){"undefined"==typeof t.tag&&(t.tag="span",t.attrs={sjxid:Math.floor(Math.random()*(new Date).getTime())});var e=document.createElement(t.tag);return f(t,e),e},p=function m(t,e){var n=void 0;return l.call(t,"children")?s(t.children)&&t.children.forEach(function(t,r){null!==t&&"object"===("undefined"==typeof t?"undefined":o(t))&&(n=d(t),m(t,n),a(n,e)),s(t)&&(t.tag,t.forEach(function(t,r){l.call(t,"render")||(n=d(t),m(t,n),a(n,e))}))}):"object"===("undefined"==typeof t?"undefined":o(t))&&l.call(t,"render")&&m(t.render(),e),e};e.renderToString=function(t,e){return y(t,e).innerHTML};var y=function(t,e){var n=document.createDocumentFragment(),r=document.createElement(t.tag);f(t,e.rootNode);var o=p(t,r);return n.appendChild(o),n},h=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(!e)return"Error: No node to attach";u(t)&&(l.call(t,"_svenjs")||(t._svenjs={rootNode:!1}),t._svenjs.rootNode=e),e.innerHTML="";var r=void 0;r=u(n)?n:t.render(),e.appendChild(y(r,t._svenjs))};e.render=h},function(t,e,n){(function(t){"use strict";e.version=function(){return t.env.npm_package_version}}).call(e,n(10))},function(t,e,n){"use strict";var r=n(2);e.lifeCycle=function(t){var e=void 0;t._svenjs.rootNode&&(e=t._svenjs.rootNode),e||(e=document.querySelector("[sjxid='"+t.attrs.sjxid+"']")),t.isMounted&&((0,r.render)(t,e),t.hasOwnProperty("_didUpdate")&&t._didUpdate.apply(t))}},function(t,e,n){"use strict";var r=n(17),o=n(4);e.setState=function(t,e){e.state=(0,r.saveState)(e,t),(0,o.lifeCycle)(e)}},function(t,e,n){"use strict";var r=n(1),o=n(9),i=r.create({displayName:"Norge Rundt",initialState:{},_didUpdate:function(){},_didMount:function(){},render:function(){return{tag:"section",attrs:{sjxid:"1489.2008392846697","class":"svenapp"},children:[o]}}});t.exports=i},function(t,e){"use strict";t.exports=function(t){var e=new Request("/search",{method:"POST",body:JSON.stringify({input:t}),headers:new Headers({Accept:"application/json, text/plain, */*","Content-Type":"application/json"})});return fetch(e).then(function(t){return t.json()})}},function(t,e,n){"use strict";var r=n(1),o=n(6),i=document.getElementById("myapp");r.render(o,i)},function(t,e,n){"use strict";var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o=n(1),i=n(7);t.exports=o.create({initialState:{searchVal:"",hits:[]},render:function(){var t=this,e=function(e){t.state.clicks,t.setState({searchVal:e[0].value}),i(e[0].value).then(function(e){t.setState(r({},t.state,{hits:e.hits.hits}))})},n=this.state,o=n.hits,c=n.searchVal;return{tag:"div",attrs:{sjxid:"1609.4056476357266",id:"row"},children:[{tag:"div",attrs:{sjxid:"1927.9312075680552",id:"app"},children:[{tag:"h3",attrs:{sjxid:"1126.6680765564256"},children:["Søk i Norge Rundt"]},{tag:"form",attrs:{sjxid:"522.7206605662586",onSubmit:function(n){n.preventDefault(),e.call(t,n.target)}},children:[{tag:"input",attrs:{sjxid:"659.6363515882895",type:"text",placeHolder:"Søk etter noe",value:c?c:""}},{tag:"input",attrs:{sjxid:"1950.6623726255482",type:"submit","class":"button",value:"Søk"}}]}]},{tag:"ul",attrs:{sjxid:"1487.8942904001358",id:"hits"},children:[o&&o.map(function(t){return{tag:"li",attrs:{sjxid:"1963.8760728525106","class":"infoblock"},children:[{tag:"span",attrs:{sjxid:"1789.6121383576826","class":"infohead"},children:[t._source.tittel," (",t._source.year,")"]},t._source.alder?{tag:"span",attrs:{sjxid:"1570.8244749152004","class":"infoline"},children:["Alder: ",t._source.alder]}:"",t._source.antall_kvinner?{tag:"span",attrs:{sjxid:"194.997363747043","class":"infoline"},children:["Antall kvinner: ",t._source.antall_kvinner]}:"",t._source.antall_menn?{tag:"span",attrs:{sjxid:"530.2409728307827","class":"infoline"},children:["Antall menn: ",t._source.antall_menn]}:"",t._source.antrekk?{tag:"span",attrs:{sjxid:"793.2685096985476","class":"infoline"},children:["Antrekk: ",t._source.antrekk]}:"",{tag:"a",attrs:{sjxid:"1476.4067665819568",target:"_blank","class":"subdued",href:t._source.url},children:["Se video"]}]}})]}]}}})},function(t,e){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(t){if(l===setTimeout)return setTimeout(t,0);if((l===n||!l)&&setTimeout)return l=setTimeout,setTimeout(t,0);try{return l(t,0)}catch(e){try{return l.call(null,t,0)}catch(e){return l.call(this,t,0)}}}function i(t){if(f===clearTimeout)return clearTimeout(t);if((f===r||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(t);try{return f(t)}catch(e){try{return f.call(null,t)}catch(e){return f.call(this,t)}}}function c(){h&&p&&(h=!1,p.length?y=p.concat(y):m=-1,y.length&&u())}function u(){if(!h){var t=o(c);h=!0;for(var e=y.length;e;){for(p=y,y=[];++m<e;)p&&p[m].run();m=-1,e=y.length}p=null,h=!1,i(t)}}function s(t,e){this.fun=t,this.array=e}function a(){}var l,f,d=t.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:n}catch(t){l=n}try{f="function"==typeof clearTimeout?clearTimeout:r}catch(t){f=r}}();var p,y=[],h=!1,m=-1;d.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];y.push(new s(t,e)),1!==y.length||h||o(u)},s.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=a,d.addListener=a,d.once=a,d.off=a,d.removeListener=a,d.removeAllListeners=a,d.emit=a,d.binding=function(t){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(t){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children=[],t.webpackPolyfill=1),t}},function(t,e,n){"use strict";var r=n(3),o=n(5);e.create=function(t,e){return t._svenjs={rootNode:!1},t.props={},e&&(t._jsxid=t.props.sjxid,t.props=e,delete t.props.sjxid),t.isBound||(t.version=r.version,t.isBound=!0,t.setState=function(t){return(0,o.setState)(t,this)},"function"==typeof t._beforeMount&&t._beforeMount.apply(t)),t.isMounted||(t.time={history:[],pos:-1},t.isMounted=!0,void 0!==t.initialState&&(t.state=t.initialState),"function"==typeof t._didMount&&t._didMount.apply(t)),t}},function(t,e){"use strict";e.deepCopy=function(t){return JSON.parse(JSON.stringify(t))}},function(t,e){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r="function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?function(t){return"undefined"==typeof t?"undefined":n(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":"undefined"==typeof t?"undefined":n(t)},o=e.deepFreeze=function(t){return Object.freeze(t),Object.getOwnPropertyNames(t).forEach(function(e){!t.hasOwnProperty(e)||null===t[e]||"object"!==r(t[e])&&"function"!=typeof t[e]||Object.isFrozen(t[e])||o(t[e])}),t}},function(t,e){"use strict";var n={}.toString;e.isFunction=function(t){return"function"==typeof t},e.isObject=function(t){return"[object Object]"===n.call(t)},e.isString=function(t){return"[object String]"===n.call(t)},e.isArray=function(t){return"[object Array]"===n.call(t)},e.isDefined=function(t){return"undefined"!==n.call(t)}},function(t,e){"use strict";var n=[];e.createStore=function(t){return t.isMounted||(t.listenTo=function(t){n.push(t)},t.emit=function(t){n.forEach(function(e){e(t)})},"function"==typeof t.init&&t.init.apply(t)),t}},function(t,e,n){"use strict";var r=n(13),o=n(14);e.saveState=function(t,e){var n=(0,r.deepCopy)(e);return(0,o.deepFreeze)(n),n}}]);