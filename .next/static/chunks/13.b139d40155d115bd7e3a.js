(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"89Zu":function(e,r,t){e.exports=t("ShjV")},ShjV:function(e,r,t){"use strict";t.r(r),t.d(r,"getMarkupFromTree",(function(){return f})),t.d(r,"getDataFromTree",(function(){return c})),t.d(r,"renderToStringWithData",(function(){return p}));var n=t("mrSG"),o=t("q1tI"),i=t.n(o),u="function"===typeof Symbol&&Symbol.for?Symbol.for("__APOLLO_CONTEXT__"):"__APOLLO_CONTEXT__";function s(){return i.a[u]||Object.defineProperty(i.a,u,{value:i.a.createContext({}),enumerable:!1,configurable:!0,writable:!1}),i.a[u]}var a=function(){function e(){this.queryPromises=new Map,this.queryInfoTrie=new Map}return e.prototype.registerSSRObservable=function(e,r){this.lookupQueryInfo(r).observable=e},e.prototype.getSSRObservable=function(e){return this.lookupQueryInfo(e).observable},e.prototype.addQueryPromise=function(e,r){return this.lookupQueryInfo(e.getOptions()).seen?r():(this.queryPromises.set(e.getOptions(),new Promise((function(r){r(e.fetchData())}))),null)},e.prototype.hasPromises=function(){return this.queryPromises.size>0},e.prototype.consumeAndAwaitPromises=function(){var e=this,r=[];return this.queryPromises.forEach((function(t,n){e.lookupQueryInfo(n).seen=!0,r.push(t)})),this.queryPromises.clear(),Promise.all(r)},e.prototype.lookupQueryInfo=function(e){var r=this.queryInfoTrie,t=e.query,n=e.variables,o=r.get(t)||new Map;r.has(t)||r.set(t,o);var i=JSON.stringify(n),u=o.get(i)||{seen:!1,observable:null};return o.has(i)||o.set(i,u),u},e}();function c(e,r){return void 0===r&&(r={}),f({tree:e,context:r,renderFunction:t("KAy6").renderToStaticMarkup})}function f(e){var r=e.tree,o=e.context,u=void 0===o?{}:o,c=e.renderFunction,f=void 0===c?t("KAy6").renderToStaticMarkup:c,p=new a;return Promise.resolve().then((function e(){var t=s(),o=f(i.a.createElement(t.Provider,{value:Object(n.a)(Object(n.a)({},u),{renderPromises:p})},r));return p.hasPromises()?p.consumeAndAwaitPromises().then(e):o}))}function p(e){return f({tree:e,renderFunction:t("KAy6").renderToString})}}}]);