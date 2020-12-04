/**
 * 利用特性：
 * 可迭代对象
 * @param likeArr
 * @return {unknown[]}
 */
const helperTurnIntoArr2 = likeArr => Array.from(likeArr);
/**
 * 利用特性：
 * 可迭代对象 （arguments 是一个可迭代的对象）
 * @param likeArr
 * @return {unknown[]}
 */
const helperTurnIntoArr3 = likeArr => [...likeArr];

/**
 * 利用特性：
 *  1.sliceAPI只要能够通过索引取到值，就可以执行。
 *  2.借用函数执行 -> call
 * @param likeArr
 * @return {unknown[]}
 */
function helperTurnIntoArr1(likeArr) {
    let realArr = null;
    return Array.prototype.slice.call(likeArr);
}

function foo(name,age) {
    console.log(arguments);
    const realArray = helperTurnIntoArr3(arguments);
    console.log(realArray);
}
foo('spy',24)
