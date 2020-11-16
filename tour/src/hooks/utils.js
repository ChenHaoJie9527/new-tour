// ?. 可选链用于判断当前对象的引用是否是null或者undefined 如果不是，则会短路运算直接返回undefened
    // const admin = {
    //   name: {
    //     age: 18
    //   }
    // };
    // console.log(admin.name?.age);
    // console.log(admin?.name);
    // const func = ()=>{
    //   console.log("func");
    // }
    // func?.()
    // const relsut = {
    //   customMethod: null
    // }
    // relsut?.customMethod?.();
    // const arr = [1,2,3,4,5,6];
    // console.log(arr?.[5]);
    // const obj = {
    //   name: "chen",
    //   age: 19
    // };
    // console.log(obj?.["name"]);
    // 和空值合并操作符一起使用
    // const custom = {
    //   name: "chen",
    //   age: 20,
    //   adders: null,
    // };
    // let customet = custom?.city ?? "暗影之城";
    // console.log(customet);
    // const newObj = {
    //   name: "chen"
    // }
    // console.log(newObj?.age??18);
    // const func1 = undefined;
    // const func2 = ()=>{
    //   console.log("func2");
    // }
    // func1??func2();

    // function A() {
    //   console.log("函数 A 被调用了");
    //   return undefined;
    // }
    // function B() {
    //   console.log("函数 B 被调用了");
    //   return false;
    // }
    // function C() {
    //   console.log("函数 C 被调用了");
    //   return "foo";
    // }
    // console.log(A() ?? C());
    // // 依次打印 "函数 A 被调用了"、"函数 C 被调用了"、"foo"
    // A() 返回了 undefined，所以操作符两边的表达式都被执行了
    // console.log(B() ?? C());
    // 依次打印 "函数 B 被调用了"、"false"
    // B() 返回了 false（既不是 null 也不是 undefined）
    // 所以右侧表达式没有被执行