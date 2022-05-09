
const LinkedListNode = require('./LinkedListNode');
const Comparator = require('../utils/Comparator');

// 单向链表
class LinkedList {
  /**
   * 比较函数
   * @param {*} comparatorFunction 
   */
  constructor(comparatorFunction) {
    this.head = null;
    this.tail = null;
    this.compare = new Comparator(comparatorFunction);
  }

  prepend(value) {
    const newNode = new LinkedListNode(value, this.head);
    this.head = newNode;
    if(!this.tail) {
      this.tail = newNode;
    }
    return this;
  }

  append(value) {
    const newNode = new LinkedListNode(value);
    if(!this.head) {
      this.head = newNode;
      this.tail = newNode;

      return this;
    }

    this.tail.next = newNode;
    this.tail = newNode;
  }

  inert(value, rawIndex) {
    const index = rawIndex < 0 ? 0 : rawIndex;
    if(index === 0) {
      this.prepend(value);
    }else {
      let currentNode = this.head;
      let count = 1;
      const newNode = new LinkedListNode(value);
      while(currentNode) {
        if(count === rawIndex) break;
        currentNode = currentNode.next;
        count += 1;
      }
      if(currentNode) {
        newNode.next = currentNode.next;
        currentNode.next = newNode;
      }else{
        if(this.tail) {
          this.tail.next = newNode;
          this.tail = newNode;
        }else{
          this.head = newNode;
          this.tail = newNode;
        }
      }
    }
    return this;
  }

  delete(value) {
    if(this.head === null) {
      return null;
    }

    let deletedNode = null;

    // 从头头开始找
    while(this.head && this.compare.equal(this.head.value, value)) {
      deletedNode = this.head;
      this.head = this.head.next;
    }

    let currentNode = this.head;

    // 中间
    if(currentNode !== null ){

      while(currentNode.next) {
        if(this.compare.equal(currentNode.next.value, value)) {
          deletedNode = currentNode.next;
          currentNode.next = currentNode.next.next;
        }else{
          currentNode = currentNode.next;
        }
      }
    }

    // 尾部
    if(this.compare.equal(this.tail.value, value)) {
      this.tail = currentNode;
    }

    return deletedNode;
  }

  find({value = undefined, callback=undefined}) {
    if(!this.head) {
      return null;
    }

    let currentNode = this.head;

    while(currentNode) {
      
      // 就是可能是个函数吧
      if (callback && callback(currentNode.value)) {
        return currentNode;
      }

      if(value !== undefined && this.compare.equal(currentNode.value, value)){
        return currentNode;
      }
      currentNode = currentNode.next;
    }
    return null;
  }

  deleteTail() {
    const deletedTail = this.tail;
    
    if(this.head === this.tail) {
      this.head = null;
      this.tail = null;
      return deletedTail;
    }  

    // 就是找到尾部的上一个 将它的next指针置为null;
    let currentNode = this.head;
    while(currentNode.next) {
      if(!currentNode.next.next) {
        currentNode.next = null;
      }else{
        currentNode = currentNode.next;
      }
    }
    this.tail = currentNode;
    return deletedTail;
  }

  deleteHead() {
    if(!this.head) {
      return null;
    }
    const deletedNode = this.head;
    if(this.head.next) {
      this.head = this.head.next;
    }else{
      this.head = null;
      this.tail = null;
    }
    return deletedNode;
  }

  fromArray(values) {
    values.forEach(value => this.append(value));
    return this;
  }

  toArray() {
    const nodes = [];

    let currentNode = this.head;
    while(currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }
    return nodes;
  }

  toString(callback) {
    return this.toArray().map(node => node.toString(callback).toString());
  }

  reverse() {
    let currNode = this.head;
    let prevNode = null;
    let nextNode = null;

    while(currNode) {
      nextNode = currNode.next;
      currNode.next = prevNode;

      prevNode = currNode;
      currNode = nextNode;
    }

    this.tail = this.head;
    this.head = prevNode;

    return this;
  }
}

const arr = [1, 2, 4, 5]
const list = new LinkedList();
list.fromArray(arr);
list.reverse()
list.append(6)
list.deleteHead()
list.inert(8, 2)
const result = list.deleteTail();
console.log(result);
console.dir(list, {depth: 10000});