/**
 * {
    code: 0,
    msg: "",
    data: [
     // ... 具体数据
    ],
};
 */
const data = {
    y: {
        z: 100
    }
};

function getDataValueBykeyStr(obj, key, defaultVal = undefined) {
    if (!key) return defaultVal;
    let space = key.toString().split(".");
    if ((obj instanceof Object) == false) return defaultVal;
    let val,
        i = 0,
        len = space.length;
    for (; i < len; i++) {
        val = obj[space[i]];
        if (val === undefined || val === null) return defaultVal;
        obj = val;
    }
    return val;
}
const res = getDataValueBykeyStr(data, "y");
console.log(res);


// function UserException(message) {
//     this.message = message;
//     this.name = "UserException";
// }
// UserException.prototype.toString = () => {
//     return this.name + ":" + this.message + "''";
// }
// function func(){
//     try {
//         throw new UserException("Value too high");
//     } catch (error) {
//         // console.log(error); //UserException实例
//         if(error instanceof UserException){
//             throw error;
//         }else {
//             throw error;
//         }
//     }
// }
// func();
