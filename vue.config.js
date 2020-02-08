/* eslint-disable */
const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}
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
      title: "自定义通用框架"
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
    // config.resolve.alias
    //   .set("@", resolve("src"))
    //   .set("@css", resolve("src/assets/css"))
    //   .set("@js", resolve("src/assets/public"));
    config.plugins.delete("preload");
    config.plugins.delete("prefetch");
    // config.resolve.symlinks(true)
  },

  // css: {
  //   // 是否使用css分离插件 ExtractTextPlugin
  //   extract: false,
  //   sourceMap: false,
  //   loaderOptions: {
  //     // sass: {
  //     //   data: `
  //     //     @import "@/assets/css/style.scss";
  //     //   `
  //     // }
  //   },
  //   modules: false
  // },

  configureWebpack: config => {
    //cdn 配置
    Object.assign(config, {
      externals: {
        vue: "Vue",
        vuex: "Vuex",
        "vue-router": "VueRouter",
        flyio: "flyio"
      }
    });

    if (isProduction) {
      //gzip配置
      config.plugins.push(
        new CompressionWebpackPlugin({
          algorithm: "gzip",
          test: new RegExp("\\.(" + productionGzipExtensions.join("|") + ")$"),
          threshold: 10240,
          minRatio: 0.8
        })
      );
    }
  },

  devServer: {
    open: true,
    disableHostCheck: true,
    compress: false, // 开启压缩
    hot: true, //热更新
    overlay: {
      warnings: true,
      errors: true
    }
  }
};
