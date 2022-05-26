const Sort = require('../Sort');
class QuickSort extends Sort{

  sort(originalArray) {

    const array = [...originalArray];

    if(array.length <= 1) {
      return array;
    }

    const leftArray = [];
    const rightArray = [];


    const pivotElement = array.shift();
    const centerArray = [pivotElement];

    while(array.length) {

      const currentElement = array.shift();

      if(this.comparator.equal(currentElement, pivotElement)) {
        centerArray.push(currentElement);
      }else if(this.comparator.lessThen(currentElement, pivotElement)) {
        leftArray.push(currentElement);
      }else{
        rightArray.push(currentElement);
      }
    }

    const leftArraySorted = this.sort(leftArray);
    const rightArraySorted = this.sort(rightArray);

    return leftArraySorted.concat(centerArray, rightArraySorted);
  }
}

module.exports = QuickSort;

const sort1 = new QuickSort();

// sort1.sort([3,12,3,5,67,7,21,1.5,5])
console.log(sort1.sort([3,12,3,5,67,7,21,1.5,5]))