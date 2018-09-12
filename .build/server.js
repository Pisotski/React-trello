!function(e){function n(e){var n=require("./"+e+"."+t+".hot-update.js");!function(e,n){if(!b[e]||!m[e])return;for(var r in m[e]=!1,n)Object.prototype.hasOwnProperty.call(n,r)&&(f[r]=n[r]);0==--v&&0===g&&_()}(n.id,n.modules)}var r,o=!0,t="8483cb8120c377acfedd",i={},c=[],d=[];function a(e){var n=P[e];if(!n)return H;var o=function(o){return n.hot.active?(P[o]?-1===P[o].parents.indexOf(e)&&P[o].parents.push(e):(c=[e],r=o),-1===n.children.indexOf(o)&&n.children.push(o)):(console.warn("[HMR] unexpected require("+o+") from disposed module "+e),c=[]),H(o)},t=function(e){return{configurable:!0,enumerable:!0,get:function(){return H[e]},set:function(n){H[e]=n}}};for(var i in H)Object.prototype.hasOwnProperty.call(H,i)&&"e"!==i&&"t"!==i&&Object.defineProperty(o,i,t(i));return o.e=function(e){return"ready"===s&&u("prepare"),g++,H.e(e).then(n,function(e){throw n(),e});function n(){g--,"prepare"===s&&(y[e]||j(e),0===g&&0===v&&_())}},o.t=function(e,n){return 1&n&&(e=o(e)),H.t(e,-2&n)},o}var l=[],s="idle";function u(e){s=e;for(var n=0;n<l.length;n++)l[n].call(null,e)}var p,f,h,v=0,g=0,y={},m={},b={};function w(e){return+e+""===e?+e:e}function O(e){if("idle"!==s)throw new Error("check() is only allowed in idle status");return o=e,u("check"),function(){try{var e=require("./"+t+".hot-update.json")}catch(e){return Promise.resolve()}return Promise.resolve(e)}().then(function(e){if(!e)return u("idle"),null;m={},y={},b=e.c,h=e.h,u("prepare");var n=new Promise(function(e,n){p={resolve:e,reject:n}});f={};return j(0),"prepare"===s&&0===g&&0===v&&_(),n})}function j(e){b[e]?(m[e]=!0,v++,n(e)):y[e]=!0}function _(){u("ready");var e=p;if(p=null,e)if(o)Promise.resolve().then(function(){return x(o)}).then(function(n){e.resolve(n)},function(n){e.reject(n)});else{var n=[];for(var r in f)Object.prototype.hasOwnProperty.call(f,r)&&n.push(w(r));e.resolve(n)}}function x(n){if("ready"!==s)throw new Error("apply() is only allowed in ready status");var r,o,d,a,l;function p(e){for(var n=[e],r={},o=n.slice().map(function(e){return{chain:[e],id:e}});o.length>0;){var t=o.pop(),i=t.id,c=t.chain;if((a=P[i])&&!a.hot._selfAccepted){if(a.hot._selfDeclined)return{type:"self-declined",chain:c,moduleId:i};if(a.hot._main)return{type:"unaccepted",chain:c,moduleId:i};for(var d=0;d<a.parents.length;d++){var l=a.parents[d],s=P[l];if(s){if(s.hot._declinedDependencies[i])return{type:"declined",chain:c.concat([l]),moduleId:i,parentId:l};-1===n.indexOf(l)&&(s.hot._acceptedDependencies[i]?(r[l]||(r[l]=[]),v(r[l],[i])):(delete r[l],n.push(l),o.push({chain:c.concat([l]),id:l})))}}}}return{type:"accepted",moduleId:e,outdatedModules:n,outdatedDependencies:r}}function v(e,n){for(var r=0;r<n.length;r++){var o=n[r];-1===e.indexOf(o)&&e.push(o)}}n=n||{};var g={},y=[],m={},O=function(){console.warn("[HMR] unexpected require("+_.moduleId+") to disposed module")};for(var j in f)if(Object.prototype.hasOwnProperty.call(f,j)){var _;l=w(j);var x=!1,D=!1,E=!1,k="";switch((_=f[j]?p(l):{type:"disposed",moduleId:j}).chain&&(k="\nUpdate propagation: "+_.chain.join(" -> ")),_.type){case"self-declined":n.onDeclined&&n.onDeclined(_),n.ignoreDeclined||(x=new Error("Aborted because of self decline: "+_.moduleId+k));break;case"declined":n.onDeclined&&n.onDeclined(_),n.ignoreDeclined||(x=new Error("Aborted because of declined dependency: "+_.moduleId+" in "+_.parentId+k));break;case"unaccepted":n.onUnaccepted&&n.onUnaccepted(_),n.ignoreUnaccepted||(x=new Error("Aborted because "+l+" is not accepted"+k));break;case"accepted":n.onAccepted&&n.onAccepted(_),D=!0;break;case"disposed":n.onDisposed&&n.onDisposed(_),E=!0;break;default:throw new Error("Unexception type "+_.type)}if(x)return u("abort"),Promise.reject(x);if(D)for(l in m[l]=f[l],v(y,_.outdatedModules),_.outdatedDependencies)Object.prototype.hasOwnProperty.call(_.outdatedDependencies,l)&&(g[l]||(g[l]=[]),v(g[l],_.outdatedDependencies[l]));E&&(v(y,[_.moduleId]),m[l]=O)}var M,A=[];for(o=0;o<y.length;o++)l=y[o],P[l]&&P[l].hot._selfAccepted&&A.push({module:l,errorHandler:P[l].hot._selfAccepted});u("dispose"),Object.keys(b).forEach(function(e){!1===b[e]&&function(e){delete installedChunks[e]}(e)});for(var I,R,T=y.slice();T.length>0;)if(l=T.pop(),a=P[l]){var C={},U=a.hot._disposeHandlers;for(d=0;d<U.length;d++)(r=U[d])(C);for(i[l]=C,a.hot.active=!1,delete P[l],delete g[l],d=0;d<a.children.length;d++){var S=P[a.children[d]];S&&((M=S.parents.indexOf(l))>=0&&S.parents.splice(M,1))}}for(l in g)if(Object.prototype.hasOwnProperty.call(g,l)&&(a=P[l]))for(R=g[l],d=0;d<R.length;d++)I=R[d],(M=a.children.indexOf(I))>=0&&a.children.splice(M,1);for(l in u("apply"),t=h,m)Object.prototype.hasOwnProperty.call(m,l)&&(e[l]=m[l]);var q=null;for(l in g)if(Object.prototype.hasOwnProperty.call(g,l)&&(a=P[l])){R=g[l];var L=[];for(o=0;o<R.length;o++)if(I=R[o],r=a.hot._acceptedDependencies[I]){if(-1!==L.indexOf(r))continue;L.push(r)}for(o=0;o<L.length;o++){r=L[o];try{r(R)}catch(e){n.onErrored&&n.onErrored({type:"accept-errored",moduleId:l,dependencyId:R[o],error:e}),n.ignoreErrored||q||(q=e)}}}for(o=0;o<A.length;o++){var N=A[o];l=N.module,c=[l];try{H(l)}catch(e){if("function"==typeof N.errorHandler)try{N.errorHandler(e)}catch(r){n.onErrored&&n.onErrored({type:"self-accept-error-handler-errored",moduleId:l,error:r,originalError:e}),n.ignoreErrored||q||(q=r),q||(q=e)}else n.onErrored&&n.onErrored({type:"self-accept-errored",moduleId:l,error:e}),n.ignoreErrored||q||(q=e)}}return q?(u("fail"),Promise.reject(q)):(u("idle"),new Promise(function(e){e(y)}))}var P={};function H(n){if(P[n])return P[n].exports;var o=P[n]={i:n,l:!1,exports:{},hot:function(e){var n={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:r!==e,active:!0,accept:function(e,r){if(void 0===e)n._selfAccepted=!0;else if("function"==typeof e)n._selfAccepted=e;else if("object"==typeof e)for(var o=0;o<e.length;o++)n._acceptedDependencies[e[o]]=r||function(){};else n._acceptedDependencies[e]=r||function(){}},decline:function(e){if(void 0===e)n._selfDeclined=!0;else if("object"==typeof e)for(var r=0;r<e.length;r++)n._declinedDependencies[e[r]]=!0;else n._declinedDependencies[e]=!0},dispose:function(e){n._disposeHandlers.push(e)},addDisposeHandler:function(e){n._disposeHandlers.push(e)},removeDisposeHandler:function(e){var r=n._disposeHandlers.indexOf(e);r>=0&&n._disposeHandlers.splice(r,1)},check:O,apply:x,status:function(e){if(!e)return s;l.push(e)},addStatusHandler:function(e){l.push(e)},removeStatusHandler:function(e){var n=l.indexOf(e);n>=0&&l.splice(n,1)},data:i[e]};return r=void 0,n}(n),parents:(d=c,c=[],d),children:[]};return e[n].call(o.exports,o,o.exports,a(n)),o.l=!0,o.exports}H.m=e,H.c=P,H.d=function(e,n,r){H.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},H.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},H.t=function(e,n){if(1&n&&(e=H(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(H.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)H.d(r,o,function(n){return e[n]}.bind(null,o));return r},H.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return H.d(n,"a",n),n},H.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},H.p="",H.h=function(){return t},a(0)(H.s=0)}({"./node_modules/webpack/buildin/module.js":function(e,n){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},"./node_modules/webpack/hot/log-apply-result.js":function(e,n,r){e.exports=function(e,n){var o=e.filter(function(e){return n&&n.indexOf(e)<0}),t=r("./node_modules/webpack/hot/log.js");(o.length>0&&(t("warning","[HMR] The following modules couldn't be hot updated: (They would need a full reload!)"),o.forEach(function(e){t("warning","[HMR]  - "+e)})),n&&0!==n.length)?(t("info","[HMR] Updated modules:"),n.forEach(function(e){if("string"==typeof e&&-1!==e.indexOf("!")){var n=e.split("!");t.groupCollapsed("info","[HMR]  - "+n.pop()),t("info","[HMR]  - "+e),t.groupEnd("info")}else t("info","[HMR]  - "+e)}),n.every(function(e){return"number"==typeof e})&&t("info","[HMR] Consider using the NamedModulesPlugin for module names.")):t("info","[HMR] Nothing hot updated.")}},"./node_modules/webpack/hot/log.js":function(e,n){var r="info";function o(){}function t(e){return"info"===r&&"info"===e||["info","warning"].indexOf(r)>=0&&"warning"===e||["info","warning","error"].indexOf(r)>=0&&"error"===e}function i(e){return function(n,r){t(n)&&e(r)}}e.exports=function(e,n){t(e)&&("info"===e?console.log(n):"warning"===e?console.warn(n):"error"===e&&console.error(n))};var c=console.group||o,d=console.groupCollapsed||o,a=console.groupEnd||o;e.exports.group=i(c),e.exports.groupCollapsed=i(d),e.exports.groupEnd=i(a),e.exports.setLogLevel=function(e){r=e}},"./node_modules/webpack/hot/poll.js?1000":function(e,n,r){(function(n){var o=+n.substr(1)||6e5,t=r("./node_modules/webpack/hot/log.js");setInterval(function n(o){"idle"===e.hot.status()&&e.hot.check(!0).then(function(e){e?(r("./node_modules/webpack/hot/log-apply-result.js")(e,e),n(!0)):o&&t("info","[HMR] Update applied.")}).catch(function(n){var r=e.hot.status();["abort","fail"].indexOf(r)>=0?(t("warning","[HMR] Cannot apply update."),t("warning","[HMR] "+(n.stack||n.message)),t("warning","[HMR] You need to restart the application!")):t("warning","[HMR] Update failed: "+(n.stack||n.message))})},o)}).call(this,"?1000")},"./server/index.js":function(e,n,r){"use strict";(function(e,n){var o=r("express"),t=r("morgan"),i=r("path"),c=o();c.use(t("dev")),c.use(o.json()),c.use(function(e,n,r){if(n.header("Access-Control-Allow-Origin","*"),n.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept, Authorization"),"OPTIONS"===e.method)return n.header("Access-Control-Allow-Mehods","GET, POST, PUT, PATCH, DELETE"),n.status(200).json({});r()}),c.use(o.static(i.join(e,"../public"))),c.get("/favicon.ico",function(e,n){return n.status(204)}),c.use(function(e,n,r){var o=new Error("Not found");o.status=404,r(o)}),c.use(function(e,n,r,o){r.status(e.status||500),r.json({error:{message:e.message}})});var d=Object({BUILD_TARGET:"server"}).PORT||3e3;n.exports=c,n.parent||(c.listen(d),console.log("server listening on "+d))}).call(this,"/",r("./node_modules/webpack/buildin/module.js")(e))},0:function(e,n,r){r("./node_modules/webpack/hot/poll.js?1000"),e.exports=r("./server/index.js")},express:function(e,n){e.exports=require("express")},morgan:function(e,n){e.exports=require("morgan")},path:function(e,n){e.exports=require("path")}});