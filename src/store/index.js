import Vue from "vue";
import Vuex from "vuex";
import state from "./state";
import mutations from "./mutations";
import getters from "./getters";
import actions from "./action";
const modules = {};
const modulesContext = require.context("./modules", true, /\.js$/);
modulesContext.keys().forEach(item => {
  const modulesItem = modulesContext(item);
  let modulesName = item
    .split("/")
    .reverse()
    .join("")
    .split(".")[0];
  Object.assign(modules, { [modulesName]: modulesItem.default || modulesItem });
});

Vue.use(Vuex);
const store = new Vuex.Store({
  state,
  mutations,
  //当某个业务繁杂的时候，可以单独放个独立模块
  modules: modules,
  getters,
  actions
});
export default store;
