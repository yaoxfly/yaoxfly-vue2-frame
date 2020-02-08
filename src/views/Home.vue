<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />

    <span class="a">111</span>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
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
