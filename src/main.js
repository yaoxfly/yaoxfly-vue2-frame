import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
//引入rem类，配合postcss-plugin-px2rem插件效果更佳
import "yaoxfly-flexible";
import "yaoxfly-utils";
import YxRequest from "./request";
import Request from "./request/api";
import "./components";
//需要添加到vue原型链的方法
const prototype = {
  $Request: new Request()
};
Object.keys(prototype).forEach(key => {
  Vue.prototype[key] = prototype[key];
});

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  YxRequest,
  render: h => h(App)
}).$mount("#app");
