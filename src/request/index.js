/* eslint-disable */
import Vue from "vue";
import qs from "qs";
import Fly from "flyio/dist/npm/fly.js";
const fly = new Fly();
import YxRequest from "yaoxfly-request";
Vue.use(YxRequest);
const $this = new Vue();
const ONLINE_DOMAN_NAME = window.location.origin; //协议，域名，端口
const localhost = "http://www.yaoxfly.com";
// let loading = ""; //动画
export default new YxRequest({
  //请求配置
  requestConfig: {
    request: fly, //请求名 flyio/axios
    type: "fly", //请求类型
    qs: qs,
    headers: {
      // token: 22221111,
      "Content-Type": "application/x-www-form-urlencoded" //php 的 post 传输请求头一定要这个 不然报错 接收不到值
    },
    timeout: 30000,
    // https://alexxj.mralex.cn/project/ericsson/  心健分平台
    // http://manage.mralex.cn/project/ericsson/  管理总平台
    baseURL:
      process.env.NODE_ENV === "development"
        ? localhost //测试
        : ONLINE_DOMAN_NAME, //线上
    withCredentials: true
  },
  loading: {
    isLoading: true, //是否开启动画
    limitTime: 200, // 接口请求在 xxxms 内完成则不展示 loading
    loadingShow: () => {
      // loading = $this.$loading({
      //   lock: false,
      //   background: "rgba(0, 0, 0, 0.1)"
      // });
      console.log("加载动画");
    },
    loadingHide: () => {
      // if (loading) {
      //   loading.close();
      // }
      console.log("动画隐藏");
    }
  },

  resError: {
    key: "code", // 与后台规定的状态码的值
    msg: "msg", //与后台规定的消息值 key 值必须是 msg 右边可改
    value: -1, // 与后台规定的表示登录失败的 code 值
    // 接口异常，服务器错误默认提示的方法
    tipShow: err => {
      // setTimeout(() => {
      //   $this.$message.error(err);
      // }, 200);
      console.log("接口异常，服务器错误时的提示");
    },

    //登录失败提示并跳转
    notLogin: err => {
      // console.log(err)
      // setTimeout(() => {
      //   $this.$message.error(err);
      // }, 200);
      console.log("登录失败");
    },

    //不成功的提示
    notSuccessful: (code, err) => {
      //0 是成功时的状态码，可进行调整
      code !== 0 && console.log("ajax接口的code返回的不是成功时提示", code);
    },

    //ajax没有登录时提示
    accessControl: {
      routeValidate: () => {
        return true;
      }
    }
  }
});
