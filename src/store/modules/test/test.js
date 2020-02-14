/*
 一、基本介绍
   module：可以让每一个模块拥有自己的state、mutation、action、getters,使得结构非常清晰，方便管理。
 二、使用
   this.$store.state.test.modules //test模块名，按我的规则写文件名 
 */
const state = {
  modules: "this is a test modules"
};
const mutations = {};
const actions = {};
const getters = {};

// 不要忘记把state, mutations等暴露出去。
export default {
  state,
  mutations,
  actions,
  getters
};
