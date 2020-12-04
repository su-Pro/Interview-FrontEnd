Function.prototype._call = function (source, ...args) {
  // this => cb
  source.cb = this;
  const res = source.cb(...args);
  delete source.cb;
  return res;
};
