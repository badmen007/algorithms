
// 实现一个固定大小的栈  可以用数组和链表实现一个栈和队列
class Stack{
    constructor(){
        this.stack = new Array(7);
    }
    in(num){
        if(num > this.stack.length){
            throw new Error('沾满了不能再加了')
        }
        this.stack.push();
    }
    out(){
        this.stack.pop();
    }
    size(){
        return this.stack.size;
    }
}


