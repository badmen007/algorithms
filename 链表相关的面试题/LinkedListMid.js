const LinkedList = require('../data-structures/linked-list/LinkedList')

let ll = new LinkedList();
ll.fromArray([2,1,4,5,8,5,9,3])

// 快慢指针 

function midOrUpMid(head) {
  if(head === null || head.next === null || head.next.next === null) {
    return head;
  }

  // 到这里表示链表就有两个以上了
  let slow = head.next;
  let fast = head.next.next;

  while(fast.next !== null && fast.next.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}

// 返回下中点
function midOrDownMid(head) {
  if(head === null || head.next === null) {
    return head;
  }

  let fast = head.next;
  let slow = head.next;

  while(fast.next !== null && fast.next.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}

// 返回中点前一个
function midOrUpMidPre(head) {
  if(head === null || head.next === null || head.next.next === null) {
    return head;
  }

  let slow = head;
  let fast = head.next.next;

  while(fast.next !== null && fast.next.next !== null){
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}

// 下中点前一个
function midOrDownPre(head) {
  if(head === null || head.next === null) {
    return null;
  }

  //两个节点的情况
  if(head.next.next === null) {
    return head;
  }

  let slow = head;
  let fast = head.next;

  while(fast.next !== null && fast.next.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}


const res = midOrDownPre(ll.head);
console.dir(res, {depth: 1000})


//  就是用这种简单的方法去验证自己写的对不对  就是把这些值放到数组中

function rightOne(head) {
  if(head === null) {
    return null;
  }
  const arr = head.toArray();
  let rightOne = Math.ceil((arr.length - 1) / 2);
  return arr[rightOne];
}

function leftOne(head) {
  if(head === null) {
    return null;
  }
  const arr = head.toArray();
  let rightOne = Math.floor((arr.length - 1) / 2);
  return arr[rightOne];
}
console.log(leftOne(ll))