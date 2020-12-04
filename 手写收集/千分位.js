const test0 = "1123456" // ~~> 1，123,456
const test1 = "123456" // ~~> 123,456
const test2 = "1234" // ~~> 1,234
const test3 = "12" // ~~> 12

/**
 * @return final 转化完成后的字符串
 * @param source 被转化的数字
 */
const conversionThousand = source => {
    if (source == null || typeof source !== "string") {
        return Error("");
    }
    if (source.length < 2) {
        return source;
    }
    let final = "",
      curToConcat = null;
    let curSource = source;
    while (curSource.length > 0) {
        if (curSource.length > 3) {
            //    千位拼接
            curToConcat = curSource.slice(-3);
            final =  ',' + curToConcat +  + final;
            curSource = curSource.slice(0,curSource.length - 2);
        } else {
            //    普通拼接
        }
    }
    return final;
}
console.log(conversionThousand(test0));
