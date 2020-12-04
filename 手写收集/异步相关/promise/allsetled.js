const transformToRes = (value, state = false) =>
  state ? { status: "resolved", value } : { status: "fulfilled", reason: value };

const allSettled = (thenable) => {
  const promises = Array.from(thenable);
  const promisesLen = promises.length;
  let curIdx = 0;
  const promiseRes = new Array(promisesLen);
  return new Promise((resolve) => {
    promises.forEach((promise) => {
      Promise.promise(promise)
        .then((val) => {
          promiseRes[curIdx++] = transformToRes(val, true);
          if (curIdx === promisesLen) {
            resolve(promiseRes);
          }
        })
        .catch((reason) => {
          promiseRes[curIdx++] = transformToRes(reason);
          if (curIdx === promisesLen) {
            resolve(promiseRes);
          }
        });
    });
  });
};

/**
 * 细节：
 * 1. 返回值
 * 2. 入参： 可迭代对象或者可迭代对象的集合
 */
