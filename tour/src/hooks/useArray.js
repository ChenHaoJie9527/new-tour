/**
 * Array 构造函数还有两个 ES6 新增的用于创建数组的静态方法：from()和 of()。
 * from()用于将类数组结构转换为数组实例，
 * 而 of()用于将一组参数转换为数组实例。
 */

// Array.from()的第一个参数是一个类数组对象，即任何可迭代的结构，或者有一个 length 属性 和 可索引元素的结构。这种方式可用于很多场合：
// console.log(Array.from("hello")); // ['h','e','l','l','0']

// 可以使用from()将集合和映射转换为一个新数组
// const m = new Map().set(1,2,3);
// const s = new Set().add(1).add(2).add(3);
// console.log(Array.from(m));
// console.log(Array.from(s));

// Arrat.from()对现有数组执行浅拷贝
// const a1 = [1,2,3,4];
// const a2 = Array.from[a1];
// console.log(a1 === a2);

//可以使用任何迭代器对象
// const iter = {
//     *[Symbol.iterator](){
//         yield 1;
//         yield 2;
//         yield 3;
//         yield 4;
//     }
// }
// console.log(Array.from(iter));

// arguments对象也可以被轻松转化为数组
// function getArgsArray(){
//     console.log(arguments);
//     return Array.from(arguments);
// }
// console.log(getArgsArray(1,2,3,4));

// Array.from()还接受第二个可选的映射函数参数 这个函数可以直接增强数组的值，而无需调用Array.from()那样先创建一个中间数组，
// 还可以接受第三个可选参数，用于指定映射函数中的this,但是这个重写的this值在箭头函数中不适用
// const a1 = [1,2,3,4];
// const a2 = Array.from(a1, item => item ** 2);
// console.log(a2);

// ------------- Array.of()  ----------------------
// const a1 = {
//     id: 1,
//     name: "chen"
// };
// console.log(Array.prototype.slice.call(a1));
// console.log(Array.of(a1));
// const arr = [1,2,3];
// console.log(Object.prototype.toString.call(arr) === "[object Array]");
// console.log(Array.isArray(arr));
