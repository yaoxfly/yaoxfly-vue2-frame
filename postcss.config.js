module.exports = {
  plugins: [
    require("autoprefixer")(),
    require("postcss-plugin-px2rem")({
      rootValue: 192, //设计图的宽度/10  pc:192  mobile:75
      unitPrecision: 10, //换算的rem保留几位小数点
      mediaQuery: false, //
      minPixelValue: 3
      // exclude: /node_modules|folder_name/i,//排除第三方法
    })
  ]
};
