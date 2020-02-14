export default [
  {
    path: "AutoTest",
    name: "AutoTest",
    father: "Home",
    component: () =>
      import(/* webpackChunkName: "AutoTest" */ "@/views/AutoTest.vue")
  }
];
