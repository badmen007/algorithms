
const Comparator = require('../utils/Comparator');


class Heap {
  constructor(comparatorFunction) {

    this.heapContainer = [];
    this.compare = new Comparator(comparatorFunction);
  }

  getLeftChildIndex(parentIndex) {
    return (2 * parentIndex) + 1;
  }

  getRightChildIndex(parentIndex) {
    return (2 * parentIndex) + 2; 
  }

  getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2);
  }

  hasParent(childIndex) {
    return this.getParentIndex(childIndex) >= 0;
  }

  hasLeftChild(parentIndex) {
    return this.getLeftChildIndex(parentIndex) < this.heapContainer.length;
  }

  hasRightChild(parentIndex) {
    return this.getRightChildIndex(parentIndex) < this.heapContainer.length;
  }

  leftChild(parentIndex) {
    return this.heapContainer[this.getLeftChildIndex(parentIndex)]
  }

  rightChild(parentIndex) {
    return this.heapContainer[this.getRightChildIndex(parentIndex)]
  }

  parent(childIndex) {
    return this.heapContainer[this.getParentIndex(childIndex)]
  }

  swap(indexOne, indexTwo) {
    const tmp = this.heapContainer[indexTwo];
    this.heapContainer[indexTwo] = this.heapContainer[indexOne];
    this.heapContainer[indexOne] = tmp;
  }

  peek() {
    if(this.heapContainer.length === 0) {
      return null;
    }

    return this.heapContainer[0];
  }

  // 轮询  返回第一个
  poll() {
    if(this.heapContainer.length === 0) {
      return null;
    }

    if(this.heapContainer.length === 1) {
      return this.heapContainer.pop();
    }

    const item = this.heapContainer[0];

    this.heapContainer[0] = this.heapContainer.pop();
    this.heapifyDown();

    return item;
  }

  add(item) {
    this.heapContainer.push(item);
    this.heapifyUp();
    return this;
  }

  remove(item, comparator = this.compare) {

    // 个数
    const numberOfItemsToRemove = tis.find(item, comparator).length;

    for(let iteration = 0; iteration < numberOfItemsToRemove.length; iteration +=1){

      const indexToRemove = this.find(item, comparator).pop();

      if(indexToRemove === (this.heapContainer.length - 1)) {
        this.heapContainer.pop();
      }else{
        // 代表的不是最后一个
        this.heapContainer[indexToRemove] = this.heapContainer.pop();

        const parentItem = this.parent(indexToRemove);

        if(
          this.hasLeftChild(indexToRemove)
          && (
            !parentItem
            || this.pairIsInCorrectOrder(parentItem, this.heapContainer[indexToRemove])
          )  
        ) {
          this.heapifyDown(indexToRemove)
        }else{
          this.heapifyUp(indexToRemove);
        }
      }
    }
  }
  
  find(item, comparator = this.compare) {
    const foundItemIndices = [];

    for(let itemIndex = 0; itemIndex < this.heapContainer.length; itemIndex += 1) {
      if(comparator.equal(item, this.heapContainer[itemIndex])){
        foundItemIndices.push(itemIndex)
      }
    }
    return foundItemIndices;
  }

  isEmpty() {
    return !this.heapContainer.length;
  }

  toString() {
    return this.heapContainer.toString();
  }

  heapifyUp(customStartIndex){

    let currentIndex = customStartIndex || this.heapContainer.length - 1;

    while(
      this.hasParent(currentIndex) 
      && !this.pairIsInCorrectOrder(this.parent(currentIndex), this.heapContainer[currentIndex])
    ){
      this.swap(currentIndex, this.getParentIndex(currentIndex));
      currentIndex = this.getParentIndex(currentIndex);
    }

  }

  heapifyDown(customStartIndex = 0) {

    let currentIndex = customStartIndex;
    let nextIndex = null;

    while(this.hasLeftChild(currentIndex)) { // 就是有孩子的情况下 

      // 就是在比较两个孩子的大小  这个是根据传递进来的方法来判断的
      if(
        this.hasRightChild(currentIndex)
        && this.pairIsInCorrectOrder(this.rightChild(currentIndex), this.leftChild(currentIndex))
      ){
        nextIndex = this.getRightChildIndex(currentIndex);
      }else{
        nextIndex = this.getLeftChildIndex(currentIndex);
      }

      // 选出来的数  
      if(this.pairIsInCorrectOrder(
        this.heapContainer[currentIndex],
        this.heapContainer[nextIndex]
      )){
        break;
      }

      this.swap(currentIndex, nextIndex);
      currentIndex = nextIndex;
    }
  }
  // 这个方法是外面传递进来的
  pairIsInCorrectOrder(firstElement, secondElement) {
    throw new Error(`
      You have to implement heap pair comparision method
      for ${firstElement} and ${secondElement} values.
    `);
  }
}

module.exports = Heap;