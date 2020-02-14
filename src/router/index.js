import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
Vue.use(VueRouter);
let routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    children: []
  },
  //路径重定向到首页
  {
    path: "*",
    redirect: "/"
  }
];

const routerContext = require.context("./", true, /index\.js$/);
routerContext.keys().forEach(route => {
  // 如果是根目录的 index.js 、不处理
  if (route.startsWith("./index")) {
    return;
  }
  const routerModule = routerContext(route);
  //自动新增的路由
  const addRoute = routerModule.default || routerModule;
  //选择不是子路由的
  const noChildrenRouter = addRoute.filter(item => {
    return item.path.substring(0, 1) === "/";
  });
  routes = [...routes, ...noChildrenRouter];
  //选择子路由的
  const childrenRouter = addRoute.filter(item => {
    return item.path.substring(0, 1) !== "/";
  });
  routes.forEach(fItem => {
    childrenRouter.forEach(cItem => {
      fItem.name === cItem.father && (fItem.children = [cItem]);
    });
  });
});

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
