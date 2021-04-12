
export function deepClone(obj) {
    let cloned;
    if (typeof obj !== 'object' || !obj) {
        cloned = obj;
        return cloned;
    }


    if (obj instanceof Array) {
        cloned = [];
        for (let i of obj) {
            cloned.push(deepClone(i))
        }
    } else {
        cloned = {};

        const keys = Object.keys(obj);

        for (let key of keys) {
            cloned[key] = deepClone(obj[key])
        }
    }

    return cloned;

}