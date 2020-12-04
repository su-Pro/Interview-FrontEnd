const curry = fn =>
  judge = (...cumulativeArgs) =>
    cumulativeArgs.length === fn.length
      ? fn(...cumulativeArgs)
      : (...currentArgs) => judge(...cumulativeArgs, ...currentArgs)

