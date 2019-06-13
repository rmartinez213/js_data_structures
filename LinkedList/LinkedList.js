class LinkedList {
    constructor() {
        this.head = null;
    }

    size() {
        var current = this.head;
        var count = 0;

        while (current !== null) {
            count++;
            current = current.next;
        }
        return count;
    }

    isEmpty() {
        return this.head === null;
    }

    prepend(val) {
        var newNode = {
            data: val,
            next: this.head
        }

        this.head = newNode;
    }

    append(val) {
        var newNode = {
            data: val,
            next: null
        }

        if (this.head === null) {
            this.head = newNode
            return;
        }

        var current = this.head;

        while (current.next !== null) {
            current = current.next;
        }

        current.next = newNode;
    }

    contains(val) {
        if (this.isEmpty()) {
            return false;
        }

        if (this.head.data == val) {
            return true;
        }

        var current = this.head;

        while (current !== null) {
            if (current.data == val) {
                return true;
            }
            current = current.next;
        }

        return false;
    }

    removeNodeVal(val) {
        if (!this.contains(val)) {
            console.log('The value ' + val + ' is not in the linked list.');
            return;
        }

        if (this.head.data === val) {
            console.log('Node deleted.');
            this.head = this.head.next;
            return;
        }

        var current = this.head;
        var prev = null;

        while (current.data !== val) {
            prev = current;
            current = current.next;
        }
        console.log('Node deleted.');
        prev.next = current.next;
    }

    removeNodeValIndex(index) {
        if (this.isEmpty()) {
            console.log('There are no nodes in the linked list.');
            return;
        }

        if (this.size() <= index || index < 0) {
            console.log('Index input is greater or equal to the size.');
            return;
        }

        var prev = null;
        var current = this.head;
        var i = 0;

        if (index == 0) {
            this.head = this.head.next;
            return;
        }

        while (i < index) {
            prev = current;
            current = current.next;
            i++;
        }
        prev.next = current.next;
    }

    printLinkedList() {
        var current = this.head;
        var str = '[';

        if (this.isEmpty()) {
            str += ']'
            return str;
        }

        while (current !== null) {

            if (current.next === null) {
                str += current.data + ']';
            }
            else {
                str += current.data + ', '
            }

            current = current.next;
        }
        return str;
    }
}

module.exports = LinkedList;