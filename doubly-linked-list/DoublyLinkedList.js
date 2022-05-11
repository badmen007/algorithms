
const Comparator = require('../utils/Comparator');
const DoublyLinkedListNode = require('./DoublyLinkedListNode');

class DoublyLinkedList {
  constructor(compareFunction) {
    this.head = null;
    this.tail = null;
    this.compare = new Comparator(compareFunction)
  }

  prepend(value) {
    const newNode = new DoublyLinkedListNode(value, this.head);

    if(this.head) {
      this.head.previous = newNode;
    }

    this.head = newNode;

    if(!this.tail) {
      this.tail = newNode;
    } 

    return this;
  }

  append(value) {
    const newNode = new DoublyLinkedListNode(value);

    if(!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return this;
    }

    this.tail.next = newNode;
    newNode.previous = this.tail;

    this.tail = newNode;
    return this;
  }

  delete(value) {
    if(!this.head) {
      return;
    }

    let deletedNode = null;
    let currentNode = this.head;

    while(currentNode) {
      if(this.compare.equal(currentNode.value, value)) {
        deletedNode = currentNode;

        if(deletedNode === this.head) {

          this.head = this.head.next;

          if(this.head) {
            this.head.previous = null;
          }

          if(deletedNode === this.tail) {
            this.tail = null;
          }
        }else if(deletedNode === this.tail) {
          this.tail = deletedNode.previous;
          this.tail.next = null;
        }else{
          //  先记住一下
          const previousNode = deletedNode.previous;
          const nextNode = deletedNode.next;

          previousNode.next = nextNode;
          nextNode.previous = previousNode;
        }
      }
      currentNode = currentNode.next;
    }
    return deletedNode;
  }

  find({value = undefined, callback = undefined}) {
    if(!this.head) {
      return;
    }

    let currentNode = this.head;
    
    while(currentNode) {

      if(callback && callback(this.value)) {
        return currentNode;
      }

      if(value !== undefined && this.compare.equal(currentNode.value, value)) {
        return currentNode;
      }

    }
    return null;
  }

  deleteTail() {
    const deletedTail = this.tail;

    if(!this.head) {
      return;
    }

    if(this.head === this.tail) {
      this.head = null;
      this.tail = null;
      return deletedTail;
    }

    this.tail = this.tail.previous;
    this.tail.next = null;

    return deletedTail
  }

  deleteHead() {
    if(!this.head) {
      return;
    }

    const deletedHead = this.head;

    if(this.head.next) {
      this.head = this.head.next;
      this.head.previous = null;
    }else{
      this.head = null;
      this.tail = null;
    }
    return deletedHead
  }

  toArray() {
    const nodes = [];

    let currentNode = this.head;

    while(currentNode) {
      nodes.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return nodes;
  }

  fromArray(values) {
    values.forEach(value => this.append(value))
    return this;
  }

  toString(callback) {
    return this.toArray().map(node => node.toString(callback)).toString();
  }

  reverse() {
    let currNode = this.head;
    let prevNode = null;
    let nextNode = null;

    while(currNode) {
      nextNode = currNode.next;
      prevNode = currNode.previous;

      currNode.previous = nextNode;
      currNode.next = prevNode;

      prevNode = currNode;
      currNode = nextNode;
    }

    this.tail = this.head;
    this.head = prevNode;

    return this;
  }
}

module.exports = DoublyLinkedList;

const ll = new DoublyLinkedList();
ll.append(1)
ll.append(2)
ll.append(3)
console.dir(ll.head, {depth: 1000000})