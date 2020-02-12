import Vue from "vue";
import Vuex from "vuex";
import state from "./state";
import mutations from "./mutations";
import modules from "./modules";
import getter from "./getters";
import actions from "./action";
Vue.use(Vuex);
const store = new Vuex.Store({
  state,
  mutations,
  //可以单独再放个模块
  modules: {
    modules
  },
  getter,
  actions
});
export default store;
