export const arrToObj = (arr = []) => {
    return arr.reduce((prev, current) => {
        if (current.id) {
            prev[current.id] = current;
        }
        return prev;
    }, {})
}

export const objToArr = (obj = {}) => {
    return Object.keys(obj).map(key => obj[key])
}
