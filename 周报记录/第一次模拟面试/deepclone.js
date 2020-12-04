/**
 * 1. 遍历
 * 2. 类型判断
 * 3. 循环引用
 */

/**
 *
 * @param obj 接收判断的变量
 * @return {boolean}
 */
const isObject = obj => typeof obj === "object" && obj !== null;

const deepClone = (source,map = new Map()) => {
    const target = {};
    if(map.get(source)) { return }
    map.set(source,true)
    if(isObject(source)) {
        for(let key in source) {
            target[key] = Array.isArray(key) ? [] : {};
            if(source.hasOwnProperty(key)) {
                target[key] = deepClone(key,map);
            }
        }
    }else {
     return source;
    }
    return target;
}

/**
 * 1. 无法解决函数copy
 * 2. 无法处理循环引用
 * @param source
 * @return {any}
 */
const jsonHack = (source) => JSON.parse(JSON.stringify(source))


const obj1 = {
    a : "a",
    b : {

    }
}

const obj2 = deepClone(obj1)
