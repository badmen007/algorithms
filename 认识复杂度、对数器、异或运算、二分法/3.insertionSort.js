
//插入排序
function insertionSort(arr){
    if(arr == null || arr.length < 2) {
        return;
    }

    for(let i = 1; i < arr.length; i++) {
        for(let j = i - 1; j >=0  && arr[j]>arr[j+1]; j--){
            sweap(arr, j, j+1)
        }
    }
}

//交换两个数的位置
function sweap(arr, i, j){
    arr[i] = arr[i] ^ arr[j];
    arr[j] = arr[i] ^ arr[j];
    arr[i] = arr[i] ^ arr[j];
}


// for test
function copyArray(arr1) {
    let arr = [];
    for(let i = 0; i < arr1.length; i++) {
        arr.push(arr1[i])
    }
    return arr;
}

function generateRandomArray(maxSize, maxValue) {
    let arr = new Array(parseInt(Math.random() * (maxSize + 1)));
    for(let i = 0; i < arr.length; i++) {
        arr[i] = parseInt(Math.random() * (maxValue + 1)) - parseInt(maxValue * Math.random())
    }
    return arr;
}

function comparator(arr) {
    arr.sort((a, b) => a - b);
}


function isEqual(arr1, arr2) {
    if((arr1 == null && arr2 !==null) || (arr1 !== null && arr2 === null)){
        return false;
    }
    if(arr1 == null && arr2 == null) {
        return true;
    }
    if(arr1.length !== arr2.length) {
        return false;
    }
    for(let i = 0; i < arr1.length; i++){
        if(arr1[i] !== arr2[i]){
            return false;
        }
    }
    return true;
}

function main(){
    let testTime = 500000;
    let maxSize = 100;
    let maxValue = 100;
    let succeed = true;
    for(let i = 0; i <testTime; i++){
        arr1 = generateRandomArray(maxSize, maxValue);
        arr2 = copyArray(arr1);
        insertionSort(arr1);
        comparator(arr2);
        if(!isEqual(arr1, arr2)){
            succeed = false;
            console.log(arr1);
            console.log(arr2);
            break;
        }
    }
    console.log(succeed ? 'Nice' : 'Fuck')
}
main();