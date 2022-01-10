// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst = (data) => {
    this.head = new Node(data, this.head);
  }

  size = () => {
    let counter = 0;
    let node = this.head;

    while (node) {
      counter++;
      node = node.next;
    }

    return counter;
  }

  getFirst = () => {
    return this.head;
  }

  getLast = () => {
    if (!this.head) {
      return null;
    }

    let node = this.head;

    while (node) {
      if (!node.next) {
        return node;
      }
      node = node.next;
    }
  }

  clear = () => {
    this.head = null;
  }

  removeFirst = () => {
    if (!this.head) {
      return;
    }

    this.head = this.head.next;

  }

  removeLast = () => {
    if (!this.head) {
      return;
    }
    
    if (!this.head.next) {
      this.head = null;
      return;
    }

    let previous = this.head;
    let node = this.head.next;
    while(node.next) {
      previous = node;
      node = previous.next;
    }

    previous.next = null;
  }

  insertLast = (data) => {
    
    let lastNode = this.getLast();
    if (lastNode) {
      // There are some existing nodes in the chain
      lastNode.next = new Node(data);
    } else {
      // There are no nodes in the chain
      this.head = new Node(data);
    }
  }

  getAt = (index) => {
    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }
      counter++;
      node = node.next;
    }
    return null;
  }

  removeAt = (index) => {
    if (!this.head) {
      return;
    }

    if (index === 0) {
      this.head = this.head.next;
    }

    const previous = this.getAt(index - 1);
    if (!previous || !previous.next) {
      return;
    }
    previous.next = previous.next.next;
  }
}

module.exports = { Node, LinkedList };
