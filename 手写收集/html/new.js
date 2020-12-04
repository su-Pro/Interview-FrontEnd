function _new(constructor,...args) {
    const obj = Object.create(constructor.prototype);
    const res = constructor.call(obj)
    return (typeof res === "object" ? res : obj);
}
