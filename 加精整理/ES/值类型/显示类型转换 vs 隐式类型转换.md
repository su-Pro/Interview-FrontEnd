# 类型转换、隐式类型转换


![类型转换](https://hzy-1301560453.cos.ap-shanghai.myqcloud.com/2020/pictures/20201013215811.png)


# 显示类型转换
## 转换成字符串
ECMAScript的Boolean值、数字和字符串的原始值都是伪对象，这意味着它们可以使用原型对象上面的属性和方法。
ECMAScript 定义所有对象都有 toString() 方法，无论它是伪对象，还是真对象。

| 参数 | 结果 |
| ---- | ---- |
| undefined | "undefined" |
| null | "null" | 
| boolean | "true" 或 "false" |
| number | 数字值直接转换成字符串 |
| string | 无需转换 |
| [] | "" |
| [1,2] | "5,2" |
| {} | "[object Object]"
| Symbol | "Symbol()" |

## 转换为数字

ECMAScript提供两个转换为数字的方法，parseInt() 和 parseFloat()。**这两个方法除了用string可以正常处理返回，其他的类型都返回NaN。**


## 转换为 Boolean

| 参数 | 结果 |
| ---- | ---- |
| undefined | false |
| null | false | 
| boolean | 无需转换 | 
| number | +0,-0转换成false，其他都为true |
| string | ""为false，其他都为true |
| [] | true |
| {} | true |
| Symbol | true |

## 强制类型转换
ECMAScript中有3中强制类型转换: 

- Boolean(value): 将给定的值转换成Boolean
- Number(value): 将给定的值转换成数字
- String（value): 将给定的值转换成字符串

## Boolean()函数
| 参数 | 结果 |
| ---- | ---- |
| 非空字符串、非0数字或对象 | true | 
| 空字符串、0、undefined、NaN | false |

## Number()函数
Number()函数的强制类型转换效仿parseInt（）和parseFloat。区别： Number函数转换的是它的整个值，而不是部分值。


# 隐式类型转换
## 自动转换成Boolean
``` JS
if(表达式){}
```

## 运算符
非Number类型进行数学运算符 - * / 时，会将非Number转换成Number类型。 

> 对于 `+` 数学运算符比较特殊，如果等式左右存在字符串，那么会按照字符串相加规则进行。如果等式左右无字符串，则将非Number类型的值转化成Number后进行相加运算。

## 对象！！！ 重点
- **object转换成string**
1. object所属类覆写了toString（），调用该方法。如果toString()调用返回结果是原始值(Primitive)[string、numbera'a'a'a'a、boolean、undefined、null],再将Primitive转换成string。
2. 如果object所属类没有覆写toString()方法 - toString()调用的返回结果是"[object Object]"，或者覆写了toString（）方法，但是该方法返回结果是对象，那么JS将调用**valueOf方法**。如果调用valueOf方法返回结果是原始值(Primitive)[string、number、boolean、undefined、null]，则将Primitive转换成string返回。
3. 如果上述两点都不满足： 那么无法通过调用object的toString（）方法或者valueOf（）方法来获取Primitive值，**JS将抛出TypeError错误**。
- **object转换成number**
1. 调用object的valueof（）方法，如果得到Primitive值，那么将Primitive值转换为number后返回。
2. 如果无法用valueof（）方法获取Primitive值，那么调用object的toString（）方法。如果toString（）方法返回Primitive，那么将Primitive值转换成number后返回。
3. 如果上述两点都不满足，那么JS将抛出TypeError错误。

- **我们可以举个例子**
``` JS
[] -> number  结果： 0
```
上述结果是0的原因。
第一步： 首先调用array的valueOf方法，valueOf返回数组对象本身。
第二步： 调用数组的toString（）方法，使用toString（）方法会返回一个空的字符串。
第三步： 将空的字符串转换成数字0返回。

**补充**： 对于只有一个数组成员的数组，转换成number，最后得到这个数字。对于有多个数字成员的数组，无法将字符串转换成number，最后得到NaN。

## 何时转换成string？何时转换成number？

1. +操作符两边出现对象的，将对象转换成string。
2. 所有对象(Date对象除外)，优先转换成number。
3. 对于Date对象，优先转换成string。

**思考题**
``` JS
console.log(3 * []); // 0
console.log(3 * [3]); // 9
console.log(3 * [1,2,3]); // NaN
console.log(3 + [3]); //33

let now = new Date();
console.log(now + 1); // Tue Oct 13 2020 23:29:50 GMT+0800 (中国标准时间)1
console.log(now * 3); // 4807808972544
console.log(now * 2); // 3205205981696

console.log(true + true); // 2
console.log(3 + null); // 3
console.log(2 + undefined); // NaN
console.log(1 + 2 + "hello"); // 3hello
console.log(1 + (2 + " hello")); // 12hello
```