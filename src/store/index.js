import Vue from "vue";
import Vuex from "vuex";
import state from "./state";
import mutations from "./mutations";
import modules from "./modules";
import getters from "./getters";
import actions from "./action";
Vue.use(Vuex);
const store = new Vuex.Store({
  state,
  mutations,
  //可以单独再放个模块,里面是全新的store
  modules: {
    modules
  },
  getters,
  actions
});
export default store;
