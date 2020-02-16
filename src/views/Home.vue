<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <span class="a">111</span>
    <Test></Test>
    <transition name="fade-move">
      <router-view />
    </transition>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/hello-world/";
import mixinsText from "@/mixins/mixinsText";

export default {
  name: "Home",
  mixins: [mixinsText],
  components: {
    HelloWorld
  },

  mounted() {
    // 测试
    // this.getTest();
    // this.postTest();
    // this.putTest();
    // this.deleteTest();
    // this.$store.commit("TEST", 22);
    // this.$store.dispatch("TEST", 33);
    // console.log(this.$store.getters.getTest);
    // console.log(this.$store.state.test);
    // console.log(this.$store.state.test.modules);
    // this.showMixins();
  },

  methods: {
    // async getTest() {
    //   const res = await this.$Request.getTest();
    //   console.log(res);
    // },
    // async postTest() {
    //   const res = await this.$Request.postTest();
    //   console.log(res);
    // },
    // async putTest() {
    //   const res = await this.$Request.putTest();
    //   console.log(res);
    // },
    // async deleteTest() {
    //   const res = await this.$Request.deleteTest();
    //   console.log(res);
    // }
  }
};
</script>

<style lang="scss" scoped>
$a: red;
.a {
  display: flex;
  color: $a;
  justify-content: center;
  font-size: 40px;
}
</style>
