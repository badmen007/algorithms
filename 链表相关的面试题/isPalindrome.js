
const LinkedList = require('../data-structures/linked-list/LinkedList')

let ll = new LinkedList();
ll.fromArray([1,2,3,2,1])


//  就是准备一个栈 
function isPalindrome1(list) {
  const arr = list.toArray();

  let currentNode = list.head;
  while(currentNode !== null) {
    if(currentNode.value !== arr.pop()) {
      return false;
    }
    currentNode = currentNode.next;
  }
  return true
}

// 这个方法相当于栈的长度除了2  节省了一半的空间
function isPalindrome2(list) {
  let head = list.head;
  const arr = list.toArray();
  let mid = Math.ceil(arr.length / 2);
  const newArr = arr.slice(mid);
  
  while(newArr.length){
    if(head.value !== newArr.pop()){
      return false;
    }
    head = head.next;
  }
  return true;
}

function isPalindrome3(list) {
  let head = list.head;
  // 链表是null的时候必然是空
  if(head === null || head.next === null) {
    return true;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
  }
  let n1 = head;
  let n2 = head;
  while(n2.next !== null && n2.next.next !== null) {
    n1 = n1.next;
    n2 = n2.next.next;
  }
  
  //此时n1来到了中点位置  如果是偶数的话 那就是上中点的位置
  //------------- 逆序的过程
  n2 = n1.next;
  n1.next = null;

  let n3 = null;
  while(n2 !== null) {
    n3 = n2.next;
    n2.next = n1;
    n1 = n2;
    n2 = n3;
  }
  n3 = n1;
  n2 = head;
  // ----------------- n1就是最后一个节点
  let res = true;
   
  while(n1 !== null && n2 !== null) {
    if(n1.value !== n2.value) {
      res = false;
      break;
    }
    n1 = n1.next;
    n2 = n2.next;
  }

  n1 = n3.next; // n3是最后一个节点 因为上面赋值了
  n3.next = null;

  while(n1 !== null) {
    n2 = n1.next;
    n1.next = n3;
    n3 = n1;
    n1 = n2;
  }
  return res;
}

console.log(isPalindrome3(ll));