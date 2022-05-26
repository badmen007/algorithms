
/**
 ## 5.将单链表按照值划分左边小 中间相等 右边大的形式
 */

const LinkedList = require('../data-structures/linked-list/LinkedList')

let ll = new LinkedList();
ll.fromArray([2,1,4,5,8,5,9,3])


function listPartition(list, pivot) {
  debugger
  let head = list.head;
  let sH = null;
  let sT = null;
  let eH = null;
  let eT = null;
  let mH = null;
  let mT = null;
  let next = null;

  while(head !== null) {
    next = head.next;
    head.next = null;

    if(head.value < pivot) {
      if(sH === null) {
        sH = head;
        sT = head;
      }else{
        sT.next = head;
        sT = head;
      }
    }else if(head.value == pivot) {
      if(eH === null) {
        eH = head;
        eT = head;
      }else{
        eT.next = head;
        eT = head;
      }
    }else{
      if(mH === null) {
        mH = head;
        mT = head;
      }else{
        mT.next = head;
        mT = head;
      }
    }
    head = next;
  }

  console.log(head);

  // 连接 小于区域的尾巴 连接 等于区域的头  等于区域的尾巴 连接大于区域的头

  if(sT !== null) { // 如果有小于区域
    sT.next = eH;
    eT = eT === null ? sT : eT;
  }

  if(eT !== null) {
    eT.next = mH;
  }
  return sH !== null ? sH : (eH !== null ? eH : mH)
}

console.dir(listPartition(ll,8), {depth: 1000});