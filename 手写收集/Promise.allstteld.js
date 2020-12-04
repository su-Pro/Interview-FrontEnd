/**
 *
 * @param value
 * @param flag 标识当前是成功还是失败状态，true 标识成功
 * @return {undefined}
 */
function formatting(value,flag) {
    return (
      flag
        ? { value: value,status: "resolved" }
        : { error: value, status: "fulfilled" }
    )
}

Promise.prototype._allSettled = iterator => {
    let promises = Array.from(iterator);
    let promiseRes = new Array(promises.length);
    let idx = 0;

    return new Promise((resolve, reject) => {
        promises.forEach(promise => {
            Promise.resolve(promise)
              .then(res => {
                  promiseRes[idx++] = formatting(res,true);
                  if (idx === promises.length) {
                      resolve(promiseRes);
                  }
              })
              .catch(error => {
                  promiseRes[idx++] = formatting(res,false);
                  if (idx === promises.length) {
                      resolve(promiseRes);
                  }
              })
        })
    })
}
