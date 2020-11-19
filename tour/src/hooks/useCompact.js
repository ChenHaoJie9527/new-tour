import _ from "lodash";
const arr = [0, 1, false, "", 2, 3, null, undefined, NaN];
// _.compact 创建一个新数组，返回包含原数组中所有非假值元素；

const result = _.compact(arr);
console.log(result);

// 原生实现 _compact方法
// export const useCompact = (arr = []) => {
//     return arr.reduce((prev, current) => {
//         const res = !!current;
//         if (res) {
//             prev.push(current);
//         }
//         return prev;
//     }, []);
// };
// console.log(useCompact(arr))

// _concat 创建一个新数组，将array与任何数组 或 值连接在一起。
const arrtest = [1, 2, 3];
let other = _.concat(arrtest, [4], [5], [[6]]);
console.log(other);

// export const useArrConcat = (targetArr, ...oldArr) => {
//     if (oldArr.constructor == Array || Array.isArray(oldArr)) {
//         const res = oldArr.map(item => item[0]);
//         return targetArr = [...targetArr, ...res];
//     }
// };
// const concatValue = useArrConcat(arrtest, [4], [5], [[6]]);
// console.log(concatValue)     

// _difference(array, [values]) 创建一个新数组，这个数组的值为第一个数字排除了给定数组的值，结果值的顺序是有第一个数组中的顺序确定的
const arr1 = [1, 3, 5, 7, 9];
// const arr2 = _.difference([1,3,4,2,5,6], arr1);
// console.log(arr2); //2,4,6,相当于通过一个另一个数组对目标数组进行检查，检查是否具有相同的一项并排除掉，返回剩下的数组,并且返回的数字顺序是按原数组的顺序返回

export const useArrDifference = (arr = [], oldArr) => {
    if (arr.constructor == Array && oldArr.constructor == Array) {
        // arr.reduce((prev, current) => {
        //     prev = oldArr.filter(item => current == item);
        //     console.log(prev)
        // }, 0)
        oldArr.reduce((prev, current) => {
            const res = arr.filter(item => item == current);
            console.log(res)
        }, [])
    }
}
const res = useArrDifference([1, 3, 4, 2, 5, 6], arr1);
console.log(res)
let i = 11;
do {
    i += 1;
    console.log(i) //先执行
} while (i < 10);

let j = 11;
while (j < 10) {
    j++;
    console.log(j) // 不会执行
}
let s = "Nicholas";
let b = true;
let k = 22;
let u;
let n = null;
let o = new Object();
let regexp = /^\d{15,17}$/;
console.log(typeof s); // string 
console.log(typeof k); // number 
console.log(typeof b); // boolean 
console.log(typeof u); // undefined 
console.log(typeof n); // object 
console.log(typeof o); // object
console.log(typeof regexp); // object
// console.log(regexp instanceof Object);


