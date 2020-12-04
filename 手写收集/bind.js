// case

Function.prototype._bind = function (sourceTarget, ...firstArgs) {
  return (...secondArgs) => {
    this.apply(sourceTarget, firstArgs.concat(secondArgs));
  };
};

const bindFunc = foo.bind(source, "hello");
