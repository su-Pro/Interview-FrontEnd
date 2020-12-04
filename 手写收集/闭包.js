var a  = [1, 2, 3, 4];
for (var i = 0; i< a.length; i ++ ) {
    (function (j) {
        setTimeout(() => {
            console.log(a[j])
        }, j * 1000)
    })(i);
}
