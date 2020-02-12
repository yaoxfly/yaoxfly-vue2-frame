//mutations 同步修改 state的值，仅仅是提供一个方法，接收参数，修改state值的文件。就是一个存储修改state方法的仓库。
import * as types from "./mutation-types";
const mutations = {
  [types.TEST](state, payload) {
    state.test = payload;
  }
};
export default mutations;
