<template>
  <div class="auto-test">
    <h1 class="ml-50 auto-test-mixin">This is an AutoTest page</h1>
  </div>
</template>

<script>
export default {
  name: "AutoTest"
};
</script>

<style lang="scss" scoped>
.auto-test-mixin {
  width: 150px;
  height: 80px;
  margin: 0 auto;
  @include ell(2);
}
</style>
