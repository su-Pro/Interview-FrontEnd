// 1.闭包?递归？

// 2.await
const sleep = (delayedTime) =>
  new Promise((resolve) =>
    setTimeout(resolve, Number.parseInt(delayedTime) * 1000)
  );

async function print(cb,count,delayedTime) {
  for (let i = 0; i < count; i++) {
    await sleep(delayedTime);
    cb();
  }
}
