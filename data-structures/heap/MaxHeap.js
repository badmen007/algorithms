const Heap = require('./Heap');

class MaxHeap extends Heap {

  pairIsInCorrectOrder(firstElement, secondElement) {
    return this.compare.greaterThanOrEqual(firstElement, secondElement);
  }
}

module.exports = MaxHeap;