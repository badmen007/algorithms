
const Sort = require('../Sort');


class BubbleSort extends Sort {
  sort(originalArray) {

    let swapped = false;

    const array = [...originalArray];

    for(let i = 1; i < array.length; i += 1) {
      swapped = false;

      for(let j = 0; j < array.length - i; j += 1) {

        if(this.comparator.lessThen(array[j+1], array[j])) {
          swapped = true;
          [array[j], array[j+1]] = [array[j+1], array[j]]
        }
      }
      if(!swapped) {
        return array;
      }
    }
    return array;

  }

}

module.exports = BubbleSort;

const sort = new BubbleSort();
console.log(sort.sort([2,1,4,23,6,5,8,9,1]))