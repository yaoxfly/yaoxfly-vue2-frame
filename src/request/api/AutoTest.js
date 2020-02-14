/*接口类，根据业务划分*/
import YxRequest from "../index";
/*接口*/
const test = "index/test"; //restful测试接口
/*接口请求方法*/
export default class Home {
  // //get请求测试
  // getTest = param => YxRequest.get(test, param);
  // //post请求测试
  // postTest = param => YxRequest.post(test, param);
  //put请求测试
  putTest = param => YxRequest.put(test, param);
  //delete请求测试
  deleteTest = param => YxRequest.delete(test.test, param);
}
