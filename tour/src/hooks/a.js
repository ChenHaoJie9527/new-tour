// let a = 10;

/**
 * Array.sort()升降序使用
 * 默认情况下，sort()会按照升序重新排列数组元素，即最小的值在前面，最大的值在后面。sort()会在每一项上调用 String()转型函数，
 * 然后比较字符串来决定顺序。即使数组的元素都是数值，也会先把数组转换为字符串再比较、排序。
 * 
 */
// 比如
// let values = [0, 2, 3, 5, 4, 10];
// values.sort();
// console.log(values); // [0,10,2,3,4,5]; 比较的是字符串排列的大小，而不是数值的大小
// 通过给sort传入一个比较函数，可以解决应该返回什么顺序，函数接受两个参数，如果第一个参数排在第二个参数前面，就应该返回负值；如果两个参数相等，就应该返回0；如果第一个参数排在第二个参数后面，返回正值
// const res = values.sort(func)
// 升序
// function func(item1, item2) {
//     if(item1 < item2){
//         return -1;
//     } else if(item1> item2){
//         return 1;
//     } else {
//         return 0;
//     }
// }

// 降序
// function func(item1, item2) {
//     if (item1 < item2) {
//         return 1;
//     } else if (item1 > item2) {
//         return -1;
//     } else {
//         return 0;
//     }
// }
// console.log(res);

// const arr1 = [1,2,3,4,5];
// console.log(arr1.reverse());
console.log("小明要上传代码了!!!!");
