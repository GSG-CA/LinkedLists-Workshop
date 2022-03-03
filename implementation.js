class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}
const node1 = new Node(100);

console.log(node1);

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
        this.size++;
    }

    insertLast(data) {
        let node = new Node(data);

        if(!this.head) {
            this.head = node;
            this.size++;
            return;
        }

        let current = this.head;

        while(current.next) {
            current = current.next;
        }
        current.next = node;
        this.size++;
    }

    insertAtIndex(data, index) {
        // if index is out of range, do nothing
        if(index > 0 && index > this.size) return;
        // if inserting at head, call your insertFirst function
        if(index === 0) return this.insertFirst(data);

        const node = new Node(data);

        let count = 0;
        let current = this.head;
        let previous;

        while(count < index) {
            previous = current; // node before index
            current = current.next; // node after index
            count++;
        }

        previous.next = node;
        node.next = current;
        this.size++;
    }

    removeAtIndex(index) {
        // if index is out of range, do nothing        
        if(index > 0 && index > this.size) return;

        let current = this.head;
        let previous;
        let count = 0;
        // removing first element, we just set the head to the head.next's node
        if(index === 0) {
            this.head = current.next;
            this.size--;
            return;
        }

        while(count < index) {
            previous = current;
            current = current.next;
            count++;
        }

        previous.next = current.next;
        this.size--;
    }

    printListData() {
        let current = this.head;

        while(current) {
            console.log(current.data);
            current = current.next;
        }
    }

}

const list = new LinkedList;

list.insertFirst(10);
list.insertFirst(20);
list.insertAtIndex(1000, 1);
list.insertAtIndex(40, 2);
list.removeAtIndex(3);
list.insertLast('hey');

list.printListData();