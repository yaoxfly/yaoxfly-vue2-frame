/*vue  mixins就是混入,一个混入对象可以包含任意组件选项,同一个生命周期，混入对象会比组件的先执行,后面的覆盖前面的*/
export default {
  data() {
    return {
      mixins: "this is a mixins"
    };
  },
  methods: {
    //测试输出mixins
    showMixins() {
      console.log(this.mixins);
    }
  }
};
