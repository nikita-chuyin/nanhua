(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"5ada":function(n,t,e){"use strict";(function(n){e("f6bc"),e("921b");var t=r(e("66fd")),o=r(e("bffe"));function r(n){return n&&n.__esModule?n:{default:n}}function u(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{},o=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(e).filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.forEach(function(t){a(n,t,e[t])})}return n}function a(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}t.default.config.productionTip=!1,o.default.mpType="app";var i=new t.default(u({},o.default));n(i).$mount()}).call(this,e("a821")["createApp"])},"6f1d":function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=u(e("a34a"));e("f2d9");var r=u(e("6620"));function u(n){return n&&n.__esModule?n:{default:n}}function a(n,t,e,o,r,u,a){try{var i=n[u](a),c=i.value}catch(f){return void e(f)}i.done?t(c):Promise.resolve(c).then(o,r)}function i(n){return function(){var t=this,e=arguments;return new Promise(function(o,r){var u=n.apply(t,e);function i(n){a(u,o,r,i,c,"next",n)}function c(n){a(u,o,r,i,c,"throw",n)}i(void 0)})}}var c={globalData:{userInfo:null,host:"https://qq.gaoblog.cn/",apiVersion:"v1.0/"},onLaunch:function(){n.setStorageSync("SundayDate","2019-11-17"),n.setStorageSync("nthWeek","13"),console.log("App Launch");var t=this;t.$options.getUserInfoByAuthorize()},getUserInfoByAuthorize:function(){var n=this;n.globalData.userInfo||n.isAuth()},isAuth:function(){var n=i(o.default.mark(function n(){return o.default.wrap(function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,r.default.isAuthorize();case 2:if(!n.sent){n.next=5;break}console.log("运行"),this.getUserInfoAndstorage();case 5:case"end":return n.stop()}},n,this)}));function t(){return n.apply(this,arguments)}return t}(),getUserInfoAndstorage:function(){var t=i(o.default.mark(function t(){var e;return o.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,r.default.getUserInfoFromServer(this);case 2:e=t.sent,this.globalData.userInfo=e,n.setStorageSync("openid",e.openid);case 5:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")}};t.default=c}).call(this,e("a821")["default"])},a10e:function(n,t,e){"use strict";var o=e("c1f5"),r=e.n(o);r.a},b8b2:function(n,t,e){"use strict";e.r(t);var o=e("6f1d"),r=e.n(o);for(var u in o)"default"!==u&&function(n){e.d(t,n,function(){return o[n]})}(u);t["default"]=r.a},bffe:function(n,t,e){"use strict";e.r(t);var o=e("b8b2");for(var r in o)"default"!==r&&function(n){e.d(t,n,function(){return o[n]})}(r);e("a10e");var u,a,i=e("2877"),c=Object(i["a"])(o["default"],u,a,!1,null,null,null);t["default"]=c.exports},c1f5:function(n,t,e){}},[["5ada","common/runtime","common/vendor"]]]);