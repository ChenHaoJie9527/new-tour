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

const departments = [
    {
        id: 1,
        name: '流程与信息管理中心',
        level: '0.1',
        parent_id: 0,
        seq: 1,
        mtime: '2019-03-02 16:20:10',
        ctime: '2019-03-02 16:20:10',
        muser_id: 12,
        cuser_id: 10
    },
    {
        id: 2,
        name: '架构与流程管理部',
        level: '0.1',
        parent_id: 1,
        seq: 1,
        mtime: '2019-03-02 16:20:10',
        ctime: '2019-03-02 16:20:10',
        muser_id: 12,
        cuser_id: 10
    },
    {
        id: 3,
        name: '流程管理支持组',
        level: '0.1.2',
        parent_id: 2,
        seq: 1,
        mtime: '2019-03-02 16:20:10',
        ctime: '2019-03-02 16:20:10',
        muser_id: 12,
        cuser_id: 10
    },
    {
        id: 4,
        name: '流程管理组',
        level: '0.1.2',
        parent_id: 2,
        seq: 2,
        mtime: '2019-03-02 16:20:10',
        ctime: '2019-03-02 16:20:10',
        muser_id: 12,
        cuser_id: 10
    },
    {
        id: 5,
        name: '数据与技术平台部',
        level: '0.1',
        parent_id: 1,
        seq: 3,
        mtime: '2019-03-02 16:20:10',
        ctime: '2019-03-02 16:20:10',
        muser_id: 12,
        cuser_id: 10
    },
    {
        id: 6,
        name: '软件开发组',
        level: '0.1.5',
        parent_id: 5,
        seq: 1,
        mtime: '2019-03-02 16:20:10',
        ctime: '2019-03-02 16:20:10',
        muser_id: 12,
        cuser_id: 10
    },
    {
        id: 7,
        name: '应用集成组',
        level: '0.1.5',
        parent_id: 5,
        seq: 2,
        mtime: '2019-03-02 16:20:10',
        ctime: '2019-03-02 16:20:10',
        muser_id: 12,
        cuser_id: 10
    },
    {
        id: 8,
        name: '数据管理组',
        level: '0.1.5',
        parent_id: 5,
        seq: 3,
        mtime: '2019-03-02 16:20:10',
        ctime: '2019-03-02 16:20:10',
        muser_id: 12,
        cuser_id: 10,
        children: [
            {
                id: 10,
                name:"chen"
            }
        ]
    },

]

const constructTree = (arr) => {
    let result = []
    if (!Array.isArray(arr)) {
        return result
    }
    // 删除children
    arr.forEach(item => {
        delete item.children;
    });
    // let map = {};
    // arr.forEach(item => {
    //     map[item.id] = item; 
    // });
    const map = arr.reduce((prev,current)=>{
        if(current.id){
            prev[current.id] = current;
            return prev;
        }
    },{});
    arr.forEach(item => {
        let parent = map[item.parent_id];

        if (parent) {
            (parent.children || (parent.children = [])).push(item);
        } else {
            result.push(item);
        }
    });
    let theArr = []; //将对象转为数组，方便后续的操作
    for (let key in map) {
        if (map[key].children == undefined || map[key].parent_id != 0) {
            delete map[key];
        } else {
            theArr.push(map[key]);
        }
    }
    return theArr;
}

const res = constructTree(departments);
console.log(res)

