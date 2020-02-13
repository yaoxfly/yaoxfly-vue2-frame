/*
 一、基本介绍 
   1.mutations 同步修改 state的值，仅仅是提供一个方法，接收参数，修改state值的文件。就是一个存储修改state方法的仓库。
   2.使用mapMutations辅助函数将组件中的methods映射为store.commit调用。
 二、使用
  import { mapMutations } from'vuex'
   methods: {
      // 将this.tips映射成 this.$store.commit('tips')
       ...mapMutations({
         'tips': 'tips'
       })
    }
 */
import * as types from "./mutation-types";
const mutations = {
  [types.TEST](state, payload) {
    state.test = payload;
  }
};
export default mutations;
