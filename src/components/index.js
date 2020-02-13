import Vue from "vue";
/*
 require.context的3个参数：
 1. directory{String}-读取文件的路径
 2. useSubdirectories{Boolean}-是否遍历文件的子目录
 3. regExp{RegExp}-匹配文件的正则
*/
//自动加载global全局目录下以.js结尾的文件
const componentsContext = require.context("./global", true, /\.js$/);
componentsContext.keys().forEach(component => {
  const componentConfig = componentsContext(component);
  //兼容import export 和 require module.export 两种规范
  const file = componentConfig.default || componentConfig;
  //注册组件
  Vue.component(file.name, file);
});
