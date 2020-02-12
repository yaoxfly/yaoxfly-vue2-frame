import * as types from "./mutation-types";
const action = {
  [types.TEST]({ commit }, payload) {
    commit(types.TEST, payload);
  }
};
export default action;
