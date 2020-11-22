/**
 * 关于使用if else 判断条件执行逻辑的优化方案
 */
// let myMap = new Map([[1, "one"], [2, "two"], [3, "three"], [4, null], [5, true]]);
// console.log(myMap)

//此方法是通过是通过对象属性查找的方法进行逻辑判断17288374206
// const actions = {
//     "1": ["processing", "IndexPage"],
//     "2": ["fail", "FailPage"],
//     "3": ["success", "SuccessPage"],
//     "4": ["cancel", "CancelPage"],
//     default: ["other", "Index"]
// };
// const actions = new Map([
//     [1, ["processing", "IndexPage"]],
//     [2, ["fail", "FailPage"]],
//     [3, ["success", "SuccessPage"]],
//     [4, ["cancel", "CancelPage"]],
//     ["default", ["other", "Index"]]
// ])

/**
 * 使用Map代替Object有很多优点， Map对象和普通对象有的区别是：
 * 一个对象具有自己的原型，总是会有prototype属性
 * 对象的属性只能是字符串或者符号，但是Map可以是任意值
 * 通过size可以得到Map中键值对的数量，而对象中的键值对数量不能直接获取，需要通过变量遍历递增间接实现
 * 
 */
// const actions = new Map([
//     [1, ['processing', 'IndexPage']],
//     [2, ['fail', 'FailPage']],
//     [3, ['fail', 'FailPage']],
//     [4, ['success', 'SuccessPage']],
//     [5, ['cancel', 'CancelPage']],
//     ['default', ['other', 'Index']],
// ])

// function onButtonClick(status) {
//     //访问Map对象通过get方法 设置Map属性使用set方法
//     let action = actions.get(status) || actions.get("default")
//     const logName = action[0],
//         pageName = action[1];
//     return {
//         logName,
//         pageName
//     }

// }
// const res = onButtonClick(1);
// console.log(res)

/**
 * 当要进行双重条件的判断时，那么就意味着代码逻辑要增加，判断条件也要增加，带来的维护成本也会提高，因此需要找到一种可行的方案
 * Map提供了一种方案:
 *  1. 将判断的条件和状态相关联起来，通过查找属性返回相对应的函数进行调用
 *  2. 将Map对象作为key
 */
// const actions = new Map([
//     ['guest_1', () => {
//         console.log("guest_1")
//     }],
//     ['guest_2', () => {
//         console.log("guest_2")
//     }],
//     ['guest_3', () => {
//         console.log("guest_3")
//     }],
//     ['guest_4', () => {
//         console.log("guest_4")
//     }],
//     ['guest_5', () => {
//         console.log("guest_5")
//     }],
//     ['master_1', () => {
//         console.log("master_1")
//     }],
//     ['master_2', () => {
//         console.log("master_2")
//     }],
//     ['master_3', () => {
//         console.log("master_3")
//     }],
//     ['master_4', () => {
//         console.log("master_4")
//     }],
//     ['master_5', () => {
//         console.log("master_5")
//     }],
//     ['default', () => {
//         console.log("default")
//     }],
// ])

// function onButtonClick(identity, status) {
//     let action = actions.get(`${identity}_${status}`) || actions.get('default')
//     action.call(this)
// }
// onButtonClick("guest", 1)

// 将map对象最为key键
// const actions = new Map([
//     [{ identity: 'guest', status: 1 }, () => { }],
//     [{ identity: 'guest', status: 2 }, () => { }],
// ]);

// function onButtonClick(identity, status) {
//     // [key,value]在循环体中，相当于再一次循环解构
//     let action = [...actions].filter(([key]) => {
//         // console.log(key,value) //key: Map的键 value: key的值
//         return key.identity == identity && key.status == status;
//     });
//     console.log("action", action) //action 返回符合调条件的那一项数组，会按照插值的顺序进行排列，key是0项 value是1项
//     // action.forEach(([key, value]) => value.call(this))
// }
// onButtonClick("guest", 2)

// let patten = new RegExp("\\[bc\\]at","gi");
// console.log(patten.toString()) //返回正则表达式的字面量表示
// console.log(patten.toLocaleString());//返回正则表达式的字面量表示
// console.log(patten.valueOf()) //返回正则表达式本身

// let num = 99;
// // console.log(num.toFixed(2))
// console.log(num.toPrecision(4)) // toPrecision 会根据情况返回最合理的输出结果 根据数值和精度来决定调用 toFixed()还是 toExponential()。
