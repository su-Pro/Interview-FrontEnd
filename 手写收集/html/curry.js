const curry = fn =>
  judge = (...totalArgs) =>
    totalArgs.length > fn.length
      ? fn(totalArgs)
      : (...curArgs) => judge(...curArgs, ...totalArgs)


const curAdd = curry(add);
curAdd(1)()
