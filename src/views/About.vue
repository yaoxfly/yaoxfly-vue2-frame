<template>
  <div class="about">
    <h1>This is an about page</h1>
    <transition name="fade-move">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: "About"
};
</script>

<style scoped></style>
