/* eslint-disable */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
//引入rem类，配合postcss-plugin-px2rem插件效果更佳
import "yaoxfly-flexible";
import YxTools from "yaoxfly-tools";
import "yaoxfly-utils";
import YxRequest from "./request";
import Request from "./request/api";

//需要添加到vue原型链的方法
const prototype = {
  $Request: new Request()
};

Object.keys(prototype).forEach(key => {
  Vue.prototype[key] = prototype[key];
});

YxTools.ForbidScaling()
  .setForbidScaling({ preventDefault: true, message: true })
  .then(res => {
    // console.log(res);
    if (res) {
      console.log(
        "不建议缩放网页,如果已经缩放了,为了您更好的用户体验,请按Ctrl+0恢复缩放"
      );
    }
  });
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  YxRequest,
  render: h => h(App)
}).$mount("#app");
