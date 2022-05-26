const Sort = require('../Sort');

class InsertionSort extends Sort{
  sort(originalArray) {
    const array = [...originalArray];

    for(let i = 1; i < array.length; i++) {
      let currentIndex = i;

      while(
        array[currentIndex - 1] !== undefined
        && this.comparator.lessThen(array[currentIndex], array[currentIndex - 1])
      ){

        [
          array[currentIndex - 1],
          array[currentIndex]
        ] = [
          array[currentIndex],
          array[currentIndex - 1]
        ]
        currentIndex -= 1;
      }
    }
    return array;
  }
}

module.exports = InsertionSort;


const ms = new InsertionSort();
let arr = [3,2,54,5,3,5,56,6,76];
debugger
let res = ms.sort(arr)
console.log(res)