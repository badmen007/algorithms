
const Sort = require('../Sort');
const MinHeap = require('../../heap/MinHeap')


class HeapSort extends Sort {
  sort(originalArray) {
    const sortedArray = [];

    const minHeap = new MinHeap(this.callbacks.compareCallback);

    originalArray.forEach(element => {
      this.callbacks.visitingCallback(element);

      minHeap.add(element);  // 这里实现是将这个数组变成小根堆
    })


    while(!minHeap.isEmpty()) {
      const nextMinElement = minHeap.poll();

      this.callbacks.visitingCallback(nextMinElement);

      sortedArray.push(nextMinElement);
    }

    return sortedArray;
  }
}

module.exports = HeapSort;

const ll = new HeapSort();

console.log(ll.sort([3,1,5,7,0,9]))
