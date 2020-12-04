/**
 * 原地排序算法
 * 1. pivot
 * 2. 归类（大小）
 * 3. 重复1，2
 * 4. 返回结果
 * @param resource
 */
function quickSort(resource) {
    const swap = (arr, idx1, idx2) => ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]])

    /**
     *  双指针划分
     *  leftBaff: 所有小于re[pivot]
     *  rightBaff: 大于等于
     *
     *   >
     *
     * pivot ~> 末尾
     * @param resource
     * @param pivot
     * @param left
     * @param right
     */
    function partition(resource, pivot, left, right) {
        //   !!! pivot位置放置原因
        let leftBaff = left,
          rightBaff = right - 1;
        const pivotVal = resource[pivot];
        swap(resource, right, pivot)
        while (leftBaff <= rightBaff) {
            if (resource[leftBaff] < pivotVal) {
                leftBaff++
            } else if (resource[rightBaff] >= pivotVal) {
                rightBaff--
            } else {
                swap(resource, leftBaff++, rightBaff--)
            }
        }
        swap(resource, leftBaff, right)
        return leftBaff;
    }

    /**
     * 确定快速排序的范围
     * @param resource
     * @param left 排序的左边界
     * @param right 右边界
     * @private
     */
    function _quickSort(resource, left, right) {
        if (left > right) {
            return
        }
        let pivot = Math.floor((left + right) / 2)
        pivot = partition(resource, pivot, left, right); // 重复元素的时候
        _quickSort(resource, left, pivot - 1);
        _quickSort(resource, pivot + 1, right);
    }

    _quickSort(resource, 0, resource.length - 1);
    return resource;
}
