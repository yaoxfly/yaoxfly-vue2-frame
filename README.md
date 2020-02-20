# yaoxfly-vue2-frame

#### 介绍

基于 vue-cli4 创建的自定义框架，集成了 vue2.6.x 、axios/flyio、vuex，router、eslint 等框架自带和自己封装的一些基础库和插件，包括二次封装的 axios/flyio、开发常用的公共 css、公用方法（插件），rem 配置（插件），以及一些常用的配置 gzip、cdn 、keep-alive 等优化，用命令创建新的组件，自动导入公共组件，打包自动提交静态文件到七牛云 cdn。

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
- [x] axios/flyio 封装,插件的形式引入，[npm]

[1]: (https://gitee.com/yaoxfly/yaoxfly-request)
