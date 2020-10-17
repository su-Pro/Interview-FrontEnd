## 核心要点
**原型链向上查找**

## instanceof表象
instanceof表象常用来判断对象的具体类型，instanceof主要来判断一个实例是否属于某个类型。
``` JS
// 创建一个Person构造函数
let Person = function(){};
// 创建一个Person一个实例
let xiaoming = new Person();

xiaoming instanceof Person // true
```
instanceof还可以判断一个实例是否是某个父类型或者祖先类型的实例。
``` JS
let Person = function(){};
let Student = function(){};
Student.prototype = new Person();
// 创建一个Student实例
let xiaohua = new Student();

xiaohua instanceof Person; // true
xiaohua instanceof Student; // true
```

## 原理

![instanceof](https://hzy-1301560453.cos.ap-shanghai.myqcloud.com/2020/pictures/20201014160748.png)
**简单根据图说明下instaceof原理:** 
**（文中_proto_，实际为__proto__，书写方便）**
- 我们使用new Person()操作符创建一个person实例。person实例的_proto_(隐式原型)为Person.prototype。
- Person（）构造函数的prototype(显示原型)是Person.prototype。而同时Person.prototype.constructor指向Person。
- 当我们使用instanceof判断person是否是某个类型的时候，instanceof找person._proto_,找到则返回true
- 如果上述找不到,instanceof会沿着Person.prototype._proto_继续找，从而找到Object.prototype，从而返回。
- 如果你判断的值，不符合上述两种情况，那么Obejct.prototype._proto_= null，返回null也就是我们看到的false。

**简述**
``` JS
        __proto__                       __proto__                     __proto__ 
person ------------> Person.prototype ------------> Object.prototype ------------> null
```


## 手写
``` JS
function new_instance_of (leftVaule, rightVaule) {
  let rightProto = rightVaule.prototype; // 取右表达式的 prototype 值
  leftVaule = leftVaule.__proto__; // 取左表达式的__proto__值
  while (true) {
    // 找到原型链尽头
    if (leftVaule === null) {
      return false;
    }
    if (leftVaule === rightProto) {
      return true;
    }
    leftVaule = leftVaule.__proto__
  }
}
```
**instanceof实现原理就是判断右边的变量的prototype是否在左边的变量的原型链上。**


## 补充
**相关知识**：
- [🚀🚀🚀原型链]()
- [🚀🚀🚀typeof判断]()