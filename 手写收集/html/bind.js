function foo(age) {
    console.log(this.name,age)
}
const bar = {
    name : "spy"
}

Function.prototype.myBind = function (source,...firstArgs) {
    const fn = this;
    return function (...secondArgs) {
        fn.apply(source,secondArgs.concat(firstArgs));
    }
}

/**
 * 1. 加到 Function 原型上的
 * 2. 返回一个函数，并且该函数this已经绑定成功
 */

const bindFunc = foo.myBind(bar)
bindFunc(24);


