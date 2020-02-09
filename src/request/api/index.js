import Home from "./Home";
const fun = [Home]; //需要继承的方法
/**
 * @description 多继承
 * @author  yx
 * @param  {object} mixins  要继承的类名
 */
function mix(...mixins) {
  class Mix {
    //可不进行拷贝
    constructor() {
      for (let mixin of mixins) {
        copyProperties(this, new mixin()); // 拷贝实例属性
      }
    }
  }
  for (let mixin of mixins) {
    copyProperties(Mix, mixin); // 拷贝静态属性
    copyProperties(Mix.prototype, mixin.prototype); // 拷贝原型属性
  }
  return Mix;
}

//深拷贝
function copyProperties(target, source) {
  //Reflect.ownKeys 获取 constructor", "hasSpace", "clearSpace" 等
  for (let key of Reflect.ownKeys(source)) {
    //排除掉constructor和prototype对其他的方法和属性进行添加
    if (key !== "constructor" && key !== "prototype" && key !== "name") {
      //返回指定对象上一个自有属性对应的属性描述
      let desc = Object.getOwnPropertyDescriptor(source, key);
      // target需要定义属性的当前对象  key当前需要定义的属性名  desc属性描述符
      Object.defineProperty(target, key, desc); //直接在一个对象上定义一个新属性，或者修改一个已经存在的属性
    }
  }
}
//不能export default new对象，可用export
export default class Request extends mix(...fun) {}
