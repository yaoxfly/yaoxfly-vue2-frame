/* eslint-disable */
const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}
//gzip
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const productionGzipExtensions = ["js", "css"];
const isProduction = process.env.NODE_ENV === "production";

module.exports = {
  pages: {
    index: {
      // page 的入口
      entry: "src/main.js",
      // 模板来源
      template: "public/index.html",
      // 输出文件名
      filename: "index.html",
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: "自定义通用框架",
      cdn: {
        css: [
          // element-ui css
          // "//unpkg.com/element-ui/lib/theme-chalk/index.css"
        ],
        js: [
          // vue
          "//unpkg.zhimg.com/vue@2.6.11/dist/vue.runtime.min.js",
          // vue-router
          "//unpkg.zhimg.com/vue-router@3.1.5/dist/vue-router.min.js",
          // vuex
          "//unpkg.zhimg.com/vuex@3.1.2/dist/vuex.min.js",
          //flyio
          "//unpkg.zhimg.com/flyio@0.6.14/dist/fly.min.js"
          //axios
          // "//unpkg.zhimg.com/axios@0.19.2/dist/axios.min.js"
          // element-ui js
          // "//unpkg.com/element-ui/lib/index.js"
        ]
      }
    }
  },

  publicPath:
    process.env.NODE_ENV === "production"
      ? "/" //线上目录地址
      : "/",
  productionSourceMap: false, // 生产环境是否生成 source map
  chainWebpack: config => {
    config
      .entry("index")
      .add("babel-polyfill")
      .end();
    //设置访问的别名
    config.resolve.alias.set("@", resolve("src"));
    config.resolve.alias.set("@mixins", resolve("src/mixins"));
    // .set("@css", resolve("src/assets/css"))
    // .set("@js", resolve("src/assets/public"));
    //删除懒加载模块的prefetch和preload降低带宽压力--首页不加载太多的js文件
    config.plugins.delete("preload-index");
    config.plugins.delete("prefetch-index");
    //修复HMR(热更新)失效
    config.resolve.symlinks(true);
  },

  css: {
    // 是否使用css分离插件 ExtractTextPlugin 采用独立样式文件载入，不采用<style>方式内联至html文件中
    extract: false,
    // 是否在构建css样式映射，false将提高构建速度
    sourceMap: false
    // loaderOptions: {
    // sass: {
    //   data: `
    //     @import "@/assets/css/style.scss";
    //   `
    // }
    // },
    // modules: false
  },

  configureWebpack: config => {
    //cdn 配置
    config.externals = {
      vue: "Vue",
      vuex: "Vuex",
      "vue-router": "VueRouter",
      flyio: "flyio"
      // axios: "axios"
    };
    if (isProduction) {
      //gzip配置
      config.plugins.push(
        new CompressionWebpackPlugin({
          algorithm: "gzip",
          test: new RegExp("\\.(" + productionGzipExtensions.join("|") + ")$"),
          threshold: 10240,
          minRatio: 0.8,
          cache: true
        })
      );
    }
  },

  devServer: {
    open: true, //浏览器中打开
    disableHostCheck: true, //防止 invalid host header
    compress: false, // 开启压缩
    overlay: {
      //出现编译器错误或警告时，在浏览器中显示全屏覆盖层
      warnings: true,
      errors: true
    }
  }
};
