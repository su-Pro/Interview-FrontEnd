/**
 * 1.新建XHR对象
 * 2.注册相关事件处理回调函数
 * 3.预准备请求 -> open
 * 4.配置信息
 * 5.发送请求 -> send
 */
const ajaxPromisify = (
  method,
  url,
  data,
  responseType = "json",
  header = {}
) => {
  function XHR() {
    let xobj = null;
    if (window.XMLHttpRequest) {
      xobj = new XMLHttpRequest();
    } else {
      //  IE ActiveXObject
      xobj = new ActiveXObject();
    }
    return xobj;
  }
  function formateURL(url, data) {}
  function formatePostData(url, data) {}
  return new Promise((resolve, reject) => {
    let postData = null;
    let xhr = XHR(); // 兼容性处理
    xhr.onreadystatechange = handler;
    // 配置信息（1） 根据当前的method 去 处理data或者URL
    if (method.toUpperCase() === "GET") {
      url = formateURL(url, data);
    } else if (method.toUpperCase() === "POST") {
      postData = formatePostData(postData);
      xhr.setRequestHeader("Content-Type", "application/json");
    }
    xhr.open(method, url, true);
    // 配置信息（2） Header头部 -> xhr.setRequestHeader
    xhr.send(postData);
    /**
         * 可以使用this 代表xhr对象
         1. readyState 不是4  就返回
         2. 判断状态码 status
         */
    function handler() {
      if (this.readyState !== 4) return;
      if (this.status === 200) {
        resolve(this.responseText);
      } else if (this.status === 404) {
        reject("404 错误");
      }
    }
  });
};
