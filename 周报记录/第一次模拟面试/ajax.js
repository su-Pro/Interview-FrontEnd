
const curry = fn =>
  judge => (...totalArgs) =>
    totalArgs.length === fn.length
    ? fn(...totalArgs)
    : (...secondArgs) => judge(...totalArgs,...secondArgs)


fn(arg1,arg2)
const curryFunc = curry(fn);

curryFunc(1)(2)
