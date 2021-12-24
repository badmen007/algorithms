
// 双向链表 

class Node{
    constructor(element, pre, next) {
        this.element = element;
        this.pre = pre;
        this.next = next;
    }
}


class LinkedList{
    constructor() {
        this.head = null;
        this.size = 0;
        this.tail = null;
    }

    add(index, element) {
        if(arguments.length == 1) {
            element = index;
            index = this.size;
        }
        if(index < 0 || index > this.size) throw new Error('越界了');
        if(index === this.size){  // 说明是向后添加
            let oldLast = this.tail;
            this.tail = new Node(element, oldLast, null);
            if(oldLast === null) {
                this.head = this.tail;
            } else{
                oldLast.next = this.tail;
            }
        }else{
            let nextNode = this._node(index);
            let preNode = nextNode.pre;
            let node = new Node(element, preNode, nextNode);
            if(preNode === null) {
                this.head = node;
            }else{
                preNode.next = node;
            }

        }
        this.size ++;
    }

    remove(index){
        if(index < 0 || index > this.size) throw new Error('越界了');
        let node = this._node(index);
        let preNode = node.pre;
        let nextNode = node.next;
        if(preNode === null) {
            this.head = nextNode;
        }else{
            preNode.next = nextNode;  // 上一个记住下一个 
        }

        if(nextNode === null){
            this.tail = pre;
        }else{
            nextNode.pre = preNode;   // 下一个记住上一个
        }
        this.size--
    }

    // 移除某个值   这个有问题  
    removeValue(num){
        let head = this.head;
        while(head !== null){   
            if(head.element !== num){
                break;
            }
            head = head.next;
        }
        let pre = head; 
        let cur = head;

        while(cur !== null){
            if(cur.element == num) {
                pre.next = cur.next;

            }else{
                pre = cur;
                cur.pre = pre
            }
            cur = cur.next
        }
        return head;
    }


    reverse(){  // 双向链表的反转  上一个记住下一个  下一个记住上一个
        let head = this.head
        let pre = null;
        let next = null;
        while(head !== null) {
            next = head.next;

            head.next = pre;  
            head.pre = next;

            pre = head;

            head = next;
        }
        return pre;
    }
    clear(){
        this.head = null;
        this.size = 0;
        this.tail = null;
    }
}

let ll = new LinkedList;
ll.add(1);
ll.add(2);
ll.add(2);
ll.add(2);
ll.add(3);
ll.add(4);
// let result = ll.reverse();
let result = ll.removeValue(2);
console.dir(result, {depth: 1000})