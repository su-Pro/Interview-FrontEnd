/**
 * 问题： 使用这种迭代器方式，是不是有一个比较关键的：串行？？？
 *
 * handle(iterator.next(res)) 这一行代码只是说：res这个值给当前这个yield左侧的变量了！！！
 *
 * 如果不是promise 会直接同步求值，当然无所谓。如果是异步操作，那么就需要进行promise封装。
 * @param generator
 */
function co(generator) {
    const iterator = generator(); // 获取迭代器对象
    // iterator.next(); // 这样才会真正启动，执行到第一个yield 进行求职
    function handle (iteratorRes) {
        if(iteratorRes.done) { return }
        const iteratorValue = iteratorRes.value;
        if(iteratorValue instanceof Promise) {
            iteratorValue.then(res => handle(iterator.next(res)))  // 赋值给等号左侧的变量
            iteratorValue.catch(error => iterator.catch(error))
        }
    }
    try {
        handle(iterator.next())
    }catch (e) {
        iterator.throw(e);
    }
}
