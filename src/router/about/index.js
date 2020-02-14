export default [
  {
    path: "/About",
    name: "About",
    component: () => import(/* webpackChunkName: "login" */ "@/views/About.vue")
  }
];
