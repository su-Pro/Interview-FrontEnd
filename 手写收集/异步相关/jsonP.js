/**
 * - 请求前准备
 *      1. 参数处理
 *      2. 挂载回调处理函数
 *      3. 创建脚本，设置src
 * - 请求
 *      设置异常处理，并添加到页面中
 * - 请求结束（成功或者失败都需要删除处理函数以及脚本）
 *      1. 卸载处理函数
 *      2. 删除脚本
 *      3. 修改promise状态
 */
/**
 * @return Promise
 * @param url 请求地址
 * @param data json 数据
 */
function jsonP(url, data) {
    return new Promise((resolve, reject) => {
        window[cb] = res => {
            delete window[cb];
            document.head.removeChild(jsNode)
            if (res) {
                resolve(res)
            } else {
                reject(`error`)
            }
        }
        const searchURL = format(url, data);
        const jsNode = prepareScript(searchURL);
        startLoading(jsNode)
        function prepareScript(searchURL) {
            let jsNode = document.createElement("script");
            jsNode.src = searchURL;
            return jsNode;
        }
        function startLoading(jsNode) {
            document.head.appendChild(jsNode);
            document.addEventListener('error',function (error) {
                delete window[cb];
                document.head.removeChild(jsNode)
                reject(`error:${error}`)
            },false)
        }
        function format(url, data) {
            url += url.indexOf("?") === -1 ? "?" : "&";
            url += `callback=cb`;
            if (data) {
                for (let dataKey in data) {
                    if(data.hasOwnProperty(dataKey)) {
                        url += `&${dataKey}=${data[dataKey]}`
                    }
                }
            }
            return url;
        }
    })
}
