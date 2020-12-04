/**
 *
 * @param {Array} sourceArr 需要被平拍处理的数组
 */
const flatten = (sourceRes) => {
  const res = [];
  sourceRes.foreach((item) => {
    if (Array.isArray(item)) {
      res.concat(flatten(item));
    } else {
      res.push(item);
    }
  });
  return res;
};



// 带参数的

const flatten = (sourceArr, layer) =>
  layer > 0
    ? sourceArr.reduce(
        (prev, cur) =>
          prev.concat(Array.isArray(cur) ? flatten(cur, layer - 1) : cur),
        []
      )
    : sourceArr.slice();

// case
const source = [[1], [1, [2]], [1, [2, [3]]]];
flatten();

// expect source => [1,1,2,1,2,3];

const flatten = (sourceRes) =>
  sourceRes.reduce((prev, cur) => {
    return prev.concat(Array.isArray(item) ? flatten(item) : cur);
  }, []);

const deepFlatten = (layer,source) =>
  layer > 0
  ? source.reduce(
    (prev,cur) =>
      Array.isArray(cur)
      ? deepFlatten(layer - 1,cur)
      : cur
    ,[])
  : source.slice()
