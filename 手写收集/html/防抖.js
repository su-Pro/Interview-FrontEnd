/**
 *
 * @param fn 被防抖的函数
 * @param delay 毫秒级
 * @return {function(...[*]): void}
 */
const debounce = (fn,delay) => {
    let timer = null;
    return (...args) => {
        if(timer) clearTimeout(timer);
        timer = setTimeout(() => {
            fn(...args)
        },Number.parseInt(delay));
    }
}
