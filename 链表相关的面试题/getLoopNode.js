const LinkedList = require('../data-structures/linked-list/LinkedList')

let ll = new LinkedList();
ll.fromArray([2, 1, 4, 5, 8, 5, 9, 3])

// 判断两个链表相交


function getLoopNode(list) {
  const head = list.head;
  if (head === null || head.next === null || head.next.next === null) {
    return null;
  }

  let n1 = head.next;
  let n2 = head.next.next;

  while (n1 !== n2) {
    if (n2.next === null || n2.next.next === null) {
      return null;
    }
    n2 = n2.next.next;
    n1 = n1.next;
  }

  n2 = head;
  while (n1 !== n2) {
    n1 = n1.next;
    n2 = n2.next;
  }
  return n1;
}

getLoopNode(ll);


// 两个无环链表相交必有公共部分 

// 两个链表都无环，返回第一个相交的节点，如果不想交就返回Null

//  1.先找出两个链表的差值
// 2.让长链表的长度减去差值
// 3.找出那个相等的节点
function noLoop(head1, head2) {
  if (head1 === null || head2 === null) {
    return null;
  }

  let cur1 = head1;
  let cur2 = head2;

  let n = 0;
  while (cur1.next !== null) {
    n++;
    cur1 = cur1.next;
  }

  while (cur2.next !== null) {
    n--;
    cur2 = cur2.next;
  }

  cur1 = n > 0 ? head1 : head2; //比较谁长
  cur2 = cur1 === head1 ? head2 : head1; //比较谁短

  n = Math.abs(n);

  while(n !== 0) {
    n--;
    cur1 = cur1.next;
  }

  while(cur1 !== cur2) {
    cur1 = cur1.next;
    cur2 = cur2.next;
  }

  return cur1;
}


function bothLoop(head1, loop1, head2, loop2) {
  let cur1 = null;
  let cur2 = null;

  if(loop1 === loop2) {
    cur1 = head1;
    cur2 = head2;

    let n = 0;

    while(cur1 !== loop1) {
      n++;
      cur1 = cur1.next;
    }

    while(cur2 !== loop2) {
      n--;
      cur2 = cur2.next;
    }

    cur1 = n > 0 ? head1 : head2;
    cur2 = cur1 === head1 ? head2 : head1;

    n = Math.abs(n);

    while(n !== 0) {
      n--;
      cur1 = cur1.next;
    }

    while(cur1 !== cur2) {
      cur1 = cur1.next;
      cur2 = cur2.next;
    }
    return cur1;
  }else{ // 环上转一圈 看看能否遇到loop2 遇到了  就是进圈的点不是同一个  遇不到是null
    cur1 = loop1.next;
    while(cur1 !== loop1) {
      if(cur1 === loop2) {
        return loop1;
      }
      cur1 = cur1.next;
    }
    return null;
  }
}



// 第二种情况 一个链表有环  另一个链表无环   一定不可能相交

// 第三种情况 两个有环链表相交  那么一定是共用环的

function getIntersect(head1, head2) {
  if(head1 === null || head2 === null) {
    return null;
  }

  loop1 = getLoopNode(head1); // 找到第一个入环的节点
  loop2 = getLoopNode(head2);

  if(loop1 === null && loop2 === null) { // 无环链表相交返回第一个相交的节点
    return noLoop(head1, head2);
  }

  if(loop1 !== null && loop !== null) { // 两个有环链表相交的返回第一个相交的点  
    return bothLoop(head1, loop1, head2, loop2);
  }

}