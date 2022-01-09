class ListNode {
    constructor(data) {
        this.data = data
        this.node = null                
    }
}

class LinkedList {
    constructor(node = null) {
        this.node = node
    }
}

let node1 = new ListNode(2)
let node2 = new ListNode(5)
let node3 = new ListNode(10)
node1.node = node2
node2.node = node3

let list1 = new LinkedList(node1)
// let list2 = new LinkedList(node2)
// let list3 = new LinkedList(node3)

console.log(list1)

let print = (list) => {
    while(list.node.ListNode !== null){
        
        console.log(list.data)
        
    }
}

print(list1)