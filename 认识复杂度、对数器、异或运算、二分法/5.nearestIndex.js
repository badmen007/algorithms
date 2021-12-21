
//找出满足>=value的最左边的位置
function nearestIndex(sortedArr, value){
    let L = 0;
    let R = sortedArr.length - 1;
    let index = -1;
    while(L <= R) {
        let mid = L + ((R - L) >> 1);
        if(arr[mid] >= value) {
            R = mid - 1;
            index = mid;
        }else{
            L = mid + 1
        }
    }
    return index;
}