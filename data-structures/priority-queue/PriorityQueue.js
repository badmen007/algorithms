
const MinHeap = require('../heap/MinHeap');
const Comparator = require('../utils/Comparator');

// 优先级队列 
class PriorityQueue extends MinHeap {

  constructor() {
    super();

    this.priorities = new Map();

    this.compare = new Comparator(this.comparePriority.bind(this));
  }

  add(item, priority = 0) {
    this.priorities.set(item, priority);
    super.add(item);
    return this;
  }

  remove(item, customFindingComparator) {
    super.remove(item, customFindingComparator);
    this.priorities.delete(item);
    return this;
  }

  // 删除原来的 在重新添加就行了  
  changePriority(item, priority) {
    this.remove(item, new Comparator(this.compareValue))
    this.add(item, priority);
    return this;
  }

  findByValue(item) {
    return this.find(item, new Comparator(this.compareValue));
  }

  hasValue(item) {
    return this.findByValue(item).length > 0
  }

  comparePriority(a, b) {
    if(this.priorities.get(a) === this.priorities.get(b)) {
      return 0;
    }

    return this.priorities.get(a) < this.priorities.get(b) ? -1 : 1;
  }

  // 返回负数  就代表的是我希望这个数字排在前面  反之就是在后面的 
  compareValue(a, b) {
    if(a === b) {
      return 0;
    }
    return a < b ? -1 : 1;
  }
}

module.exports = PriorityQueue;