const LinkedList = require("../linked-list/LinkedList");


const defaultHashTableSize = 32;

class HashTable {

  constructor(hashTableSize = defaultHashTableSize) {
    this.buckets = Array(hashTableSize).fill(null).map(() => new LinkedList());
    console.log(this.buckets)

    this.keys = {};
  }

  hash(key) {
    // 空数组的话就是原来的那个值
    const hash = Array.from(key).reduce(
      (hashAccumulator, keySymbol) => (hashAccumulator + keySymbol.charCodeAt(0)),
      0
    )
    return hash % this.buckets.length;
  }

  set(key, value) {
    const keyHash = this.hash(key);
    this.keys[key] = keyHash;
    const bucketLinkedList = this.buckets[keyHash];
    const node = bucketLinkedList.find({
      callback: (nodeValue) => nodeValue.key === key
    });

    if (!node) {
      bucketLinkedList.append({
        key,
        value
      })
    } else {
      node.value.value = value;
    }
  }

  delete(key) {
    const keyHash = this.hash(key);
    delete this.keys[key];
    const bucketLinkedList = this.buckets[keyHash];
    const node = bucketLinkedList.find({
      callback: (nodeValue) => nodeValue.key === key
    });

    if (node) {
      return bucketLinkedList.delete(node.value);
    }
    return null;
  }

  get(key) {
    const bucketLinkedList = this.buckets[this.hash(key)];
    const node = bucketLinkedList.find({
      callback: (nodeValue) => nodeValue.key === key
    });

    return node ? node.value.value : undefined;
  }

  has(key) {
    return Object.hasOwnProperty.call(this.keys, key);
  }

  getKeys() {
    return Object.keys(this.keys);
  }

  getValues() {
    return this.buckets.reduce((values, bucket) => {
      const bucketValues = bucket.toArray()
        .map((linkedListNode) => linkedListNode.value.value);
      return values.concat(bucketValues);
    }, []);
  }
}

module.exports = HashTable;

const hh = new HashTable();
hh.set(1, 2);
// console.dir(hh, {depth: 1200});
// console.log(hh.getValues(), 'hh value')
let s = hh.hash(1)
console.log(s);
