function DoublyLinkedList() {
    let Node = function (element) {
        this.element = element;
        this.next = null;
        this.prev = null;
    };
    let length = 0;
    let head = null;
    let tail = null;

    this.append = function (element) {
        const node = new Node(element);
        if (head === null) {
            head = node;
            tail = node; 
        } else {
            node.prev = tail; 
            tail.next = node; 
            tail = node; 
        }
        length++;
    };

    this.insert = function (position, element) {
        if (position >= 0 && position <= length) {
            let node = new Node(element),
                current = head,
                previous,
                index = 0;
            if (position === 0) {
                if (!head) {
                    head = node;
                    tail = node;
                } else {
                    node.next = current;
                    current.prev = node;
                    head = node;
                }
            } else if (position === length) {
                current = tail;
                current.next = node;
                node.prev = current;
                tail = node;
            } else {
                previous = this.getElementAt(position - 1);
                current = previous.next;
                node.next = current;
                previous.next = node;
                current.prev = node;
                node.prev = previous;
            }
            length++;
            return true;
        } else {
            return false;
        }
    };

    this.getElementAt = function (position) {
        if (position >= 0 && position < length) {
            let node = head;
            for (let i = 0; i < position && node != null; i++) {
                node = node.next;
            }
            return node;
        }
        return undefined;
    };

    this.remove = function (element) {
        let index = this.indexOf(element);
        this.removeAt(index);
    };

    this.removeAt = function (position) {
        if (position > -1 && position < length) {
            let current = head,
                previous,
                index = 0;
            if (position === 0) {
                head = current.next;
                if (length === 1) {
                    tail = null;
                } else {
                    head.prev = null;
                }
            } else if (position === length - 1) {
                current = tail;
                tail = current.prev;
                tail.next = null;
            } else {
                current = this.getElementAt(position);
                previous = current.prev;
                previous.next = current.next;
                current.next.prev = previous;
            }
            length--;
            return current.element;
        } else {
            return null;
        }
    };

    this.indexOf = function (element) {
        let current = head;
        let index = 0;
        while (current) {
            if (element === current.element) {
                return index;
            }
            index++;
            current = current.next;
        }
        return -1;
    };

    this.isEmpty = function () {
        return length === 0;
    };

    this.size = function () {
        return length;
    };

    this.getHead = function () {
        return head;
    };

    this.toString = function () {
        let current = head;
        let string = '';
        while (current) {
            string += current.element + (current.next ? ' <-> ' : '');
            current = current.next;
        }
        return string;
    };

    this.print = function () {
        console.log(this.toString());
    }
}


const doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.append('Pedro: 8.9 - A');
doublyLinkedList.append('Ana: 8.7 - A');
doublyLinkedList.append('Maria: 9.3');
doublyLinkedList.removeAt(0)
doublyLinkedList.print(); 
doublyLinkedList.insert(0, 'Paula: 9.1 - A')
doublyLinkedList.print()
doublyLinkedList.insert(1, 'Pedro: 8.9 - A')
doublyLinkedList.insert(4, 'Joao: 5.1 - A')
doublyLinkedList.print()
