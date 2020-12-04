function object(target) {
    function F() {}
    F.prototype = target
    return new F();
}
function _prototype (child,parent) {
    const prototype = object(parent.prototype)
    prototype.constructor = child;
    child.prototype = prototype;
}
