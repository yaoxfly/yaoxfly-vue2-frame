/*
  一、基本介绍 
    异步修改state的值
  二、使用 
    import { mapActions } from'vuex'
    methods: {
    //将this.setTest映射成 this.$store.dispatch('TEST')
      ...mapActions({'setTest':TEST})
    }
*/
import * as types from "./mutation-types";
const action = {
  [types.TEST]({ commit }, payload) {
    commit(types.TEST, payload);
  }
};
export default action;
