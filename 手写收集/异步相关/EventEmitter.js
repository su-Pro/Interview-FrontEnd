//0. 模块结构定义（可以等同于设计一个类的抽象接口）
class EventEmitter {
    /**
     * 结构如下：
     * event1: [cb1,cb2,cb3]
     * @type {{}}
     */
    eventsStore = {};
    removeListener(eventName,cb) {
        let curCbs = this.eventsStore[eventName];
        if(Array.isArray(curCbs) && curCbs.length > 0) {
            curCbs = curCbs.filter(originCb => originCb !== cb); // 等于的就会被过滤掉
        }else {
        //    异常处理
        }
    }
    /**
     * 该cb 只会执行一次
     * @param eventName
     * @param cb
     */
    once(eventName,cb) {
    //    AOP 在函数执行后进行切面编程 -> 手动销毁
    //    但我不知道什么时候cb会执行，该once执行时就必须收集到store中，所以需要外层包一个函数。
        const wrapper = (...res) => {
            cb.apply(this,res);
            //    手动清除
            this.removeListener(eventName,wrapper);
        }
        this.addListener(eventName,wrapper)
    }
    /**
     *
     * 为了能够在发射时候找到指定存储的 event <-> cbs
     *
     * 因此需要在每个实例身上进行存储
     *
     * @param eventName
     * @param cb
     */
    addListener(eventName,cb) {
        // 初始化event对于的cb队列
        if(!this.eventsStore[eventName]) {
            this.eventsStore[eventName] = [];
        }
        this.eventsStore[eventName].push(cb) // 需要维护先后顺序
    }

    /**
     * 在store中找到对应的cbs队列，依次执行
     * @param eventName
     */
    emit(eventName) {
        const cbs = this.eventsStore[eventName];
        if(Array.isArray(cbs) && cbs.length > 0) {
            cbs.forEach(cb => cb())
        }else {
        //    边界情况通知
        }
    }
}
const eventEmitter = new EventEmitter();

//1. 编写测试用例，快速计划如何设计该模块
eventEmitter.addListener('eventType',() => {
//    do somethings
})
// 每次emit时，都会将 addListener 注册的cbs依次执行
eventEmitter.emit('eventType');
eventEmitter.emit('eventType');
// 如果只想执行某个cb一次，可以使用once进行注册
eventEmitter.once('eventType',() => {})
