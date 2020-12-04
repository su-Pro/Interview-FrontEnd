Array.prototype._map = function (cb, context) {
    return this.reduce((prev, val, idx, arr) => prev.concat(cb.call(context, val, idx, arr)), [])
}

const testArr = [1, 2, 3];
const foo = {name: "spy"}
const afterArr = testArr._map(function (value, index, array) {
    value += 1
    console.log(this.name);
    return value;
}, foo)
console.log(afterArr);

/**
 * 1. 原型上的方法
 * 2. 遍历每一项元素，执行cb,并将函数的返回值添加到新的数组中，不改变原数组
 * 3. 能够修改this指向
 */


