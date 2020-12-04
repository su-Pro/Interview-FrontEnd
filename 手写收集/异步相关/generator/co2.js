const fs = require('fs')
function *foo() {
    const file1 = yield fs.readFilePromise('/foo.js');
    const file2 = yield fs.readFilePromise('/bar.js')
    console.log(file1)
    console.log(file2)
}

/**
 *
 * 基于Promise的自执行器
 *
 * 1. 先让生成器函数执行生成可迭代对象
 * 2. 自执行，注意捕获异步代码的异常
 *      自执行函数：
 *          - 需要将promise异步的结果作为本次yield的返回值
 * @param generator
 */

co(foo);
const co = generator => {
    const iterator = generator();
    function handle(iteratorRes) {
        if(iteratorRes.done) {
           return
        }
        const iteratorVal = iteratorRes.value;
        if(iteratorVal instanceof Promise) {
            iteratorVal
              .then(res => handle(iterator.next(res)))
              .catch(e => iterator.throw(e))
        }
    }
    try {
        handle(iterator.next())
    }catch (e) {
        iterator.throw(e);
    }
}
