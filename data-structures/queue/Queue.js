
const LinkedList = require('../linked-list/LinkedList');

class Queue {
  constructor() {
    this.linkedList = new LinkedList()
  }

  isEmpty() {
    return !this.linkedList.head;
  }

  peek() {
    if(this.isEmpty()) {
      return null
    }
    return this.linkedList.head.value;
  }

  enqueue(value) {
    this.linkedList.append(value);
  }

  dequeue() {
    const removeHead = this.linkedList.deleteTail();
    return removeHead ? removeHead.value : null;
  }

  toString(callback) {
    return this.linkedList.toString(callback);
  }

}

module.exports = Queue;