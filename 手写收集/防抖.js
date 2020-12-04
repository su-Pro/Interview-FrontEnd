/**
 * 防抖函数
 * @param fn
 * @param await
 */
const debounce = (fn, await) => {
    let timer = null;
    return (...args) => {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            fn(...args)
        }, await)
    }
}

const ajax = () => {
}

const debounceAJAX = debounce(ajax, 300)
// debounceAJAX(...)
