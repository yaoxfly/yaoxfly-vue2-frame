# yaoxfly-vue2-frame

#### 介绍

&nbsp;&nbsp;&nbsp;&nbsp;基于 vue-cli4 创建的自定义优化改造的框架，集成了 vue2.6.11 、axios/flyio、vuex，router、eslint 等框架自带的和自己封装的一些类库和插件，包括二次封装的 axios/flyio、开发常用的公共 css、公用方法，rem 配置，以及一些常用的配置 gzip、cdn 、keep-alive 等优化。用命令创建新的组件，自动导入公共组件，打包自动提交静态文件到七牛云 cdn 等功能，本框架未添加任何 ui 框架，可自行添加改造 ,pc 端、移动端都可。

#### 使用说明

- 安装依赖

```js
 npm i
```

- 开发模式启动

```js
 npm run serve
```

- 打包模式构建--测试线

```js
 npm run build:test
```

- 打包模式构建--正式线

```js
 npm run build
```

- 组件生成--需要被引入的组件

```js
 npm run create:comp
```

- 页面组件生成

```js
 npm run create:view
```

- 新增的环境变量

```js
VUE_APP_CURRENT_MODE = "development"; //开发
VUE_APP_CURRENT_MODE = "test"; //测试
VUE_APP_CURRENT_MODE = "production"; //正式
```

#### 功能

- [x] 通过命令生成组件
- [x] 路由分模块并自动扫描
- [x] 增加测试打包环境
- [x] 自动注册全局组件
- [x] axios/flyio 封装成插件并引入
- [x] scss 常用类，函数，初始化
- [x] gzip 压缩
- [x] 第三方类库 cdn
- [x] 支持全站 js,css 上传到七牛 cdn
- [x] 正式环境打包清除 console.log
- [x] store 结构分离，模块化，并自动引入 modules。
- [x] px 自动转 rem 配置。
- [x] ...

#### 后期规划

- [x] 图片压缩
- [x] mock 数据
- [x] svg 图片支持
- [x] 基于此框架，再次改造单独一个 pc 和移动的框架，pc 引入 elemenUi，移动端待定，把封装的全局组件，封装成插件，并集成在各自版本的框架中。

#### 插件

- [yaoxfly-request](https://www.npmjs.com/package/yaoxfly-request)(自写插件)

&nbsp;&nbsp;&nbsp;&nbsp;基于 axios/flyio 封装的一个请求库,支持 web、app、小程序(使用 fiyio 做请求)等 http 请求; 支持 RESTful API 可发送,get post patch put delete 等请求; 支持 axios 和 fly.js 库的切换可进行拦截处理,自动弹出, http 请求错误、请求异常信息,未登录拦截等,具体实现通过配置参数、方法等实现。

- [yaoxfly-flexible](https://www.npmjs.com/package/yaoxfly-flexible)(自写插件)

&nbsp;&nbsp;&nbsp;&nbsp;本项目基于手淘的 flexible 库,本人对其源码进行了修改,可支持在 pc 端使用 rem

- [yaoxfly-utils](https://www.npmjs.com/package/yaoxfly-utils)(自写插件)

&nbsp;&nbsp;&nbsp;&nbsp;本项目的工具类(公用 js 方法)可以用于 h5 端（小程序不能用）不依赖任何框架，在 vue、react、angular 等下都可通用 ，目前封装的方法有限,有待完善

- [yaoxfly-auto-components](https://www.npmjs.com/package/yaoxfly-auto-components)(自写插件)

通过命令自动生成组件，包括页面组件和外部引用的组件。

- [postcss-plugin-px2rem](https://www.npmjs.com/package/postcss-plugin-px2rem)(第三方法插件)

&nbsp;&nbsp;&nbsp;&nbsp;把 px 单位自动转换成 rem 单位。

- [babel-plugin-transform-remove-console](https://www.npmjs.com/package/babel-plugin-transform-remove-console)(第三方法插件)

&nbsp;&nbsp;&nbsp;&nbsp;去掉 console.log()

- [babel-plugin-component](https://www.npmjs.com/package/babel-plugin-component)(第三方法插件)

&nbsp;&nbsp;&nbsp;&nbsp;按需加载
