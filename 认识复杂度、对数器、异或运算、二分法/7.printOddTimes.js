

//一个数组中有一种数出现了奇数次，其它的都出现了偶数次，怎么找到并打印这个数?

//所有的数异或就行了   无进位相加
function printOddTimesNum1(arr){
    let eor = 0;
    for(let i = 0; i < arr.length; i++){
        eor ^= arr[i]
    }
    return eor;
}


//提取最右侧的1
//  N & ((~N)+1)


//数出二进制的1有多少个

function bit1count(N){
    let count = 0;
    
    while(N != 0) {
        let rightOne = N & (~N + 1);
        count++;
        N ^= rightOne;
    }
    return count;
}




// 在arr中有两种数出现了奇数次 剩下的数都出现了偶数次  怎么找这两种数？

function printOddTimesNum2(arr){
    let eor = 0;
    for(let i = 0; i < arr.length; i++){
        eor ^= arr[i]
    }
    let rightOne = eor & (~eor + 1); //提取出最右边的1

    let onlyOne = 0; //eor'
    for(let i = 0; i < arr.length; i++){
        if(arr[i] & rightOne !== 0) {  //就相当于现在把这两个数分开了  找出那一位为1的
            onlyOne ^= arr[i]
        }
    }
    console.log(onlyOne + '' + (eor ^ onlyOne))
}