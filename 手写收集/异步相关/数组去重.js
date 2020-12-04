// 1. 利用set特性
const _de = (arr) => [...new Set(arr)];

// 2. 双指针
const deDuplicate = (arr) => {
  arr.sort((a, b) => a - b);
  let resArr = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      resArr.push(arr[i]);
    }
  }
  // 1. 排序
  // 2. skip掉重复元素
  return resArr;
};

const source = [1, 1, 4, 2, 2, 1, 5, 4];
const res = deDuplicate(source);
console.log(res)
