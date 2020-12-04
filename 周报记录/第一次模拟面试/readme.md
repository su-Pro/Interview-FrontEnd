# HTML 语义化

1.多人协作

H5 sidebar nav

2. 维护性强

# meta

> 不会

# defer async

DOM.load

2. 顺序

# 存储

1. 浏览器

cookie 
IndexDB
local/session（本地存储）

1. 作用
    HTTP 无状态 cookie 
    持久化，F5
2. 生命周期
    cookie 浏览器关闭自动清除
    local 手动清除
    session 
3. 存储大小
    4kb
    5mb
4. 应用场景
    cookie 登录 
        cookie + session
        JWT 
        统计
        第三站点追踪
    前端持久层
        购物车
        登录状态的保存 jwt -> token 
5. HTTP
    浏览器机制 -> domain path 


cookie设置
    XSS
    只读

cookie（前端） session（后端保存的）

用户信息 -> 公开性质 用户身份 jwt -> token 

# CSS

## 盒模型

普通盒模型

IE盒模型（怪异盒模型）

flex盒模型

> dispaly: 
>box-sizing:
>
>
## 选择器

优先级： import ~ 行间样式(1000) > id(100) > class/伪类(10) > 元素选择器/伪元素(1) > 0 属性选择器 | 通配符选择器

> 100 1000 字面意义 256 10个id ！== import
>
>

#ES

## 作用域链和原型链

没有关系

## this

1. this干啥用：context this 
2. 改变this指向的情况
    new > bind > Object.foo > call apply > arrow
    
## 原型链

    图   

#### 关系（链式关系，类比链表）

#### 设置原型链

1. new
2. __proto__
3. create(obj) (Es5)
4. setPrototypeOf

性能比较

### 作用域

1. 内 -> 外层  内层函数（闭包）
2. with 

## 闭包

1. 定义： 一个函数能够记住当前的作用域，
2. with 作用域
3. 应用
    - 模块化
    - 防抖节流
    - var （！块级） 
4. 问题
    - GC，不手动清除 （堆，内存上升，GC 下降 UI阻塞上升）
    - 不用的时候，null
    
5. V8实现闭包原理
    - 动态脚本语言 预编译的一个过程 AST，运行时环境（上下文环境，el，堆栈模型...）
        - 变量环境 -> 变量提升
        - 词法环境 -> let const 
        - this ->
        - callStack 调用栈 | go > foo > bar
            - 为啥用栈保存（函数）上下文（作用域）关系？
                栈： LIFO "吻合"
                  ： 历史信息（history） 回头看 "还原操作"
            - 栈和堆有什么区别啊？
                - 栈
                - 操作频繁
                - V8 GC
            
    - 延迟解析：（变量） 看成一个对象
    - 预解析器
        1. 扫描代码语法
        2. 是否存在不是当前作用域声明的变量  -> 堆内存中

    
## ES6 新特性

1. 模块化 前端工程
2. 变量声明 ！块级作用域的 let const {}, _不可变的变量（常量）
3. 异步编程 -> callback 发布订阅 更优雅的代码书写和维护
4. class 接口 抽象 原生继承（语法糖）
5. 函数式编程   " => "
6. 解构赋值
7. proxy reflect 不支持元编程短板 vue3 
8. api
9. 值类型 set map 哈希结构 weak （GC） symbol bigint

## 异步编程

cb：
    1. 回调地狱

    2. promise then
    
    3. async 异步代码同步编程
    
    4. 发布订阅


## 浏览器

同源策略

安全

限制
1. 页面层面
    用户劫持
    DOM CSSOM
    
2. 数据层面
    cookie 
    本地存储的读取
3. 网络 
    ajax
        
        xhr
        fetch
        
## 跨域

1. JsonP
2. CORS
    - 核心思想 ： 前后端"交流"的方式，
    - 简单： 
        1.get/post
        2. 没有自定义的头部字段 
    - 非简单
        预检请求（Option）
        缓存
    - 带凭证
        告诉浏览器，
        
    字段：
        origin： 当前的域名  origin 
        下次讨论...        
3. Nginx代理 （不会让你碰）



## WPA

应用： 不支持推送，离线
实现： https http明文协议
 serviceWorker
app

## 网络 -> http https 

### 缓存
!!!
no-store -> 二级缓存...

no-cache ->

### http版本

0.9 -> get 没有长连接，支持短连接，没有缓存
1.0 -> get/post/head/put/delete/options 支持了长连接，默认不开启。支持了缓存
1.1 -> 补充方法 默认长连接
2 -> 支持了二进制传输 实现了长肥网络模型，多路复用（请求应答模型，队头阻塞的问题），
3 -> QUIC （直接内置了https） TCP UDP （首次连接）

 

CRUD

V8 -> 插入排序，快速排序

# git

rebase -> 代码存在冲突

merge -> 新的代码分支合道master 

