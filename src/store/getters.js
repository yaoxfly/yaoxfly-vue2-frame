/*
一、基本介绍 
  1.Vuex 允许我们在store中定义“getter”（可以认为是store的计算属性）。
  就像计算属性一样，getter的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算。
  2.获取getters的值，可以 使用 this.$store.getters.getTest 也可以使用mapGetters组手函数
二、使用
  import { mapGetters } from 'vuex'
  computed: {
    ...mapGetters([
       'fullName'
    ])
  }
*/
const getters = {
  getTest: state => state.test
};
export default getters;
