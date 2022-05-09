
// List 单向链表

class Node{
    constructor(element,next){
        this.element = element;
        this.next = next;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }
    _node(index) {
        if(index< 0 || index > this.size) throw new Error('越界了');
        let current = this.head;
        for(let i = 0; i < index; i++) {   // 这里不能等于 
            current = current.next;
        }
        return current;
    }
    add(index,element) { //
        if(arguments.length == 1) {
            element = index;
            index = this.size;
        }
        if(index < 0 || index > this.size) throw new Error('越界了');
        if(index === 0){
            let head = this.head;
            this.head = new Node(element,head)
        } else{
            let prevNode = this._node(index - 1);    // 找到前一个
            prevNode.next = new Node(element, prevNode.next);
        }
        this.size++
    }
    get(index){
        return this._node(index);
    }
    set(index,element){
        let node = this._node(index);
        node.element = element;
        return node;
    }
    reverse(){  // 反转链表 **
       let head = this.head;
       let next = null;
       let pre = null;
       while(head !== null) {
            next = head.next;
            head.next = pre;
            pre = head;
            head = next;
       }
       return pre
    }
    removeValue(num){
        let head = this.head;
        while(head !== null){   // 找到头部节点要删除多少
            if(head.element !== num){
                break;
            }
            head = head.next;
        }
        //head来到第一个不需要删除的位置
        let pre = head;
        let cur = head;
        
        while(cur !== null){ //循环节点
            if(cur.element == num) {
                pre.next = cur.next;
            }else{
                pre = cur;
            }
            cur = cur.next
        }
        return head;
    }
    remove(index){
        if(index < 0 || index > this.size) throw new Error('越界了');
        if(index == 0){
            this.head = this.head.next;
        }else{
            let prevNode = this._node(index - 1);
            prevNode.next = prevNode.next.next;
        }
        this.size--;
    }
    clear(){
        this.size = 0;
        this.head = null;
    }
}

let ll = new LinkedList;
ll.add(1);
ll.add(2);
ll.add(2);
ll.add(2);
ll.add(3);
let result = ll.removeValue(2);
console.dir(result,{depth:1000})

