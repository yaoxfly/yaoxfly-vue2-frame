<template>
  <div class="auto-test">
    <h1 class="ml-50 auto-test-mixin">This is an AutoTest page</h1>
    <div class="auto-test-mixin ">
      <div class="column">111111111</div>
      <div class="column">111111111</div>
      <div class="column">111111111</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AutoTest"
};
</script>

<style lang="scss" scoped>
.auto-test {
  width: 100%;
}

.auto-test-mixin {
  background: yellow;
  @include flex_column(center);
}
</style>
