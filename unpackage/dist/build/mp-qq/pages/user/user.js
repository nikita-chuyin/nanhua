(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/user"],{"0305":function(t,n,o){},1146:function(t,n,o){"use strict";var e=function(){var t=this,n=t.$createElement;t._self._c},a=[];o.d(n,"a",function(){return e}),o.d(n,"b",function(){return a})},2054:function(t,n,o){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e=i(o("a34a")),a=(i(o("f2d9")),i(o("6620")));i(o("bdd8"));function i(t){return t&&t.__esModule?t:{default:t}}function r(t,n,o,e,a,i,r){try{var s=t[i](r),u=s.value}catch(c){return void o(c)}s.done?n(u):Promise.resolve(u).then(e,a)}function s(t){return function(){var n=this,o=arguments;return new Promise(function(e,a){var i=t.apply(n,o);function s(t){r(i,e,a,s,u,"next",t)}function u(t){r(i,e,a,s,u,"throw",t)}s(void 0)})}}var u=getApp(),c={data:function(){return{gridList:[{text:"我的收藏",src:"../../static/collection.png",status:!1},{text:"我的工单",src:"../../static/workorder.png",status:!1},{text:"我的约伴",src:"../../static/friends.png",status:!1}],pageList:[{text:"身份认证",src:"/static/auth.png",openType:""},{text:"关于我们",src:"/static/about.png",openType:""},{text:"推荐给好友",src:"/static/share.png",openType:"share"}],userInfo:null,tip:"点击授权"}},onShow:function(){console.log("onshow"),console.log(u.globalData.userInfo),u.globalData.userInfo&&(console.log(u.globalData.userInfo),this.userInfo=u.globalData.userInfo)},onLoad:function(){console.log("onload"),t.showShareMenu()},methods:{listClick:function(t,n){this.navigato(n)},navigato:function(n){0==n&&(this.userInfo.is_auth?t.showModal({title:"您已经验证过",content:"不要重复验证哟",confirmText:"知道了",showCancel:!1}):this.loadingAndNavigato("../authentication/authentication")),1==n&&this.loadingAndNavigato("../about/about")},loadingAndNavigato:function(n){t.showLoading({title:"跳转中",success:function(){t.navigateTo({url:n})},complete:function(){t.hideLoading()}})},changeColor:function(t,n,o){var e=this,a=e.gridList;a[o].status=t,e.gridList=a},waitDev:function(){t.showModal({title:"功能尚待开发",showCancel:!1,confirmText:"知道了"})},gridEndClick:function(t,n){this.changeColor(!1,t,n),this.waitDev()},gridClick:function(t,n){this.changeColor(!0,t,n)},onGotUserInfo:function(n){var o=this;t.showLoading({title:"登录中"});var e=n.detail.userInfo;o.setCookie(u,e)},setCookie:function(){var n=s(e.default.mark(function n(o,i){var r;return e.default.wrap(function(n){while(1)switch(n.prev=n.next){case 0:return i.city&&i.country&&i.province||(console.log("运行"),i.city="未知",i.country="未知",i.province="未知"),n.next=3,a.default.login(o,i);case 3:r=n.sent,console.log(r),r?(console.log(r.data.data.openid),t.setStorageSync("openid",r.data.data.openid),o.globalData.userInfo=r.data.data,this.userInfo=o.globalData.userInfo,t.hideLoading(),t.showToast({title:"登陆成功"})):(this.userInfo=null,t.hideLoading(),t.showModal({title:"登录错误",content:"登录失败，请重新点击登陆",showCancel:!1,confirmText:"确定"}));case 6:case"end":return n.stop()}},n,this)}));function o(t,o){return n.apply(this,arguments)}return o}()}};n.default=c}).call(this,o("a821")["default"])},"5a7e":function(t,n,o){"use strict";o.r(n);var e=o("1146"),a=o("9f2b");for(var i in a)"default"!==i&&function(t){o.d(n,t,function(){return a[t]})}(i);o("79d8");var r=o("2877"),s=Object(r["a"])(a["default"],e["a"],e["b"],!1,null,null,null);n["default"]=s.exports},"79d8":function(t,n,o){"use strict";var e=o("0305"),a=o.n(e);a.a},"7b46":function(t,n,o){"use strict";(function(t){o("f6bc"),o("921b");e(o("66fd"));var n=e(o("5a7e"));function e(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,o("a821")["createPage"])},"9f2b":function(t,n,o){"use strict";o.r(n);var e=o("2054"),a=o.n(e);for(var i in e)"default"!==i&&function(t){o.d(n,t,function(){return e[t]})}(i);n["default"]=a.a}},[["7b46","common/runtime","common/vendor"]]]);