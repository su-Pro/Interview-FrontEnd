function * incrementUID() {
    let uid = 0;
    while (true) {
        yield uid++
    }
}
const iterator = incrementUID();
let { value:uid1 } = iterator.next();
console.log(uid1);
let { value : uid2} = iterator.next();
console.log(uid2)
