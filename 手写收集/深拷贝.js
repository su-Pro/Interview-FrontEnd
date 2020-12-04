const deepClone = (target,map = new WeakMap()) => {
    if(map.get(target)) return target;
    map.set(target,true);
    if(isObject(target)) {
        const targetObject = Array.isArray(target) ? [] : {};
        for (let key in target) {
            if(target.hasOwnProperty(key)) {
                targetObject[key] = deepClone(target[key],map);
            }
        }
        return targetObject;
    }else {
        return target
    }
}
