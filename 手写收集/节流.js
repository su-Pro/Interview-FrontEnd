/**
 * 思路1：
 * 时间戳版本
 * 当回调函数执行时，会记录当前时间戳为prevTime
 * 当回调函数再次执行时，会判断prevTime和当前时间戳相减是否大于wait 如果大于，则可以执行
 * @param fn
 * @param wait
 * @return {function()}
 */
const throttle = (fn,wait) => {
    // 第一次执行创建节流函数时，会生成一个时间戳
    let prevTime = new Date();
    return (...args) => {
        let curTime = new Date();
        if(curTime - prevTime > wait) {
            fn(...args);
        }
        prevTime = curTime;
    }
}


const throttle = (fn,wait) => {
    let timer = null;
    return (...args) => {
        if(!timer) {
            timer = setTimeout(() => {
                fn(...args)
            },wait)
        }
    }
}
