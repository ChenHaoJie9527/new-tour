/**
 * 对引用类型进行深拷贝
 * 核心：深拷贝的核心就是对引用类型的数据进行拷贝处理
 */
const isData = [{
        a: {
            name: "chenhaojie"
        },
        age: 18,
        arr: [1, 2, 3, 4, 5],
    },
    123,
    "chen"
];
// const isDate = new Date();
// const isString = new String();
// const isNull = null;
// const isUndefined = undefined;
// const isArrays = new Array();
// const isMath = new Math(10);
/**
 * 
 * @param target //用于数据引用深拷贝
 * Object.prototype.toString.call(target) 可以通过Object.toString检测引用数值的具体类型
 */

function deepClone(target) {
    const {
        isData
    } = target;
    if (isData != null && typeof isData === "object") {
        let result = Object.prototype.toString.call(isData) === "[object Array]" ? [] : {};
        for (const key in isData) {
            result[key] = deepClone(isData[key]);
        }
        return result;
    } else {
        return target;
    }
}
const res = deepClone({
    isData,
});
console.log(res);

// let text = "cat, bat, sat, fat";
// let pattern = /.at/;
// // 等价于 pattern.exec(text) 
// let matches = text.match(pattern);
// console.log(matches); // 0 
// // console.log(matches[0]); // "cat" 
// // console.log(pattern.lastIndex); // 0