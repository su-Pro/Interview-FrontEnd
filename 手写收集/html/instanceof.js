function _instanceof(child,parent) {
    let prevPrototype = Object.getPrototypeOf(child);
    let originPrototype = parent.prototype;
    while (true) {
        if(prevPrototype === null) return false;
        if(prevPrototype === originPrototype) {
            return true
        }
        prevPrototype = Object.getPrototypeOf(prevPrototype);
    }
}
