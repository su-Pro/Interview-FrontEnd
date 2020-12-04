Array.prototype._filter = function (cb) {
    return this.reduce((prev, cur, idx, arr) => {
        return (
          cb(cur,idx,arr)
            ? prev.concat(cur)
            : prev
        )
    }, [])
}


console.log([1,2,3,4]._filter(item => item !== 1))
console.log([1,2,3,4].filter(item => item !== 1))
