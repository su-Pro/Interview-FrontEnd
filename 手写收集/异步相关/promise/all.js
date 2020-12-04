/**
 * 1.
 * @return {Promise<unknown>}
 * @private
 */
Promise._all = iterator => {
    const promises = Array.from(iterator);
    const promisesLen = promises.length;
    const res = [];
    let idx = 0;
    return new Promise(((resolve, reject) => {
        promises.forEach(promise => {
            Promise.resolve(promise)
              .then(data => {
                  res[idx++] = data;
                  if(idx === promisesLen) {
                      resolve(res);
                  }
              })
              .catch(reject)
        })
    }))
}
