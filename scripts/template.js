//hellow-world 转为HelloWorld
function format(compoenntName) {
  let str = "";
  compoenntName.split("-").forEach(item => {
    str = str + `${item.substring(0, 1).toUpperCase()}${item.substring(1)}`;
  });
  return str;
}

module.exports = {
  vueTemplate: compoenntName => {
    return `<template>
 <div class="${compoenntName} ">
   ${format(compoenntName)}组件
  </div>
</template>
<script>
export default {
  name: '${format(compoenntName)} '
}
</script>
<style lang="scss" scoped>
.${compoenntName} {

}
</style>
`;
  },
  entryTemplate: `import Main from './Main.vue'
export default Main`
};
