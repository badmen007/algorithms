
//在有序数组中找某个数是否存在
function exist(sortedArr, num) {
    if(sortedArr == null || sortedArr.length == 0) {
        return false;
    }

    let L = 0;
    let R = sortedArr.length - 1;
    let mid = 0;

    while(L < R) {
        mid = L + ((R - L) >> 1);
        if(sortedArr[mid] == num){
            return true;
        }else if(sortedArr[mid] < num) {
            L = mid + 1;
        }else {
            R = mid - 1;
        }
    }
    return sortedArr[L] === num;
}