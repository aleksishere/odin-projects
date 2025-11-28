class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newNode = new Node(value);

    if (this.head == null) {
      this.head = newNode;
      return;
    }
    let curr = this.head;
    while (curr.nextNode) {
      curr = curr.nextNode;
    }
    curr.nextNode = newNode;
  }

  prepend(value) {
    const newNode = new Node(value)

    newNode.nextNode = this.head
    this.head = newNode;
  }

  size() {
    let current = this.head;
    let count = 0;
    while (current) {
      count += 1;
      current = current.nextNode;
    }
    return(count);
  }

  tail() {
    let current = this.head;
    let temp;
    while (current) {
      temp = current
      current = current.nextNode;
    }
    return temp;
  }

  at(index) {
    let count = 0;
    let current = this.head;
    while (count !== index) {
      current = current.nextNode;
      count++;
    }
    return(current)
  }

  pop() {
    let lastNode = this.tail();
    let current = this.head;
    while (current) {
      if (current.nextNode == lastNode) {
        current.nextNode = null;
      }
      current = current.nextNode;
    }
  }

  contains(value) {
    let current = this.head;
    while (current) {
      console.log(current.value + " " + value)
      if (current.value == value) {
        return true
      }
      current = current.nextNode;
    }
    return false;
  }

  find(value) {
    let current = this.head;
    let count = 0;
    while (current) {
      if (current.value == value) {
        return "Value: " + value + " at index: " + count;
      }
      current = current.nextNode;
      count++;
    }
    return null
  }

  toString() {
    let current = this.head;
    let list = [];
    while (current) {
      list.push(current.value)
      current = current.nextNode;
    }
    return list.join(' -> ')
   }

  insertAt(value, index) {
    let newNode = new Node(value);
    let count = 0;
    let current = this.head;
    let previous = null;

    //Change head when index == 0
    if (index === 0) {
      newNode.nextNode = this.head;
      this.head = newNode;
      return;
    }

    while (count !== index) {
      previous = current;
      console.log(current + " " + count + " " + index);
      current = current.nextNode;
      count++;
    }

    // Check if numbers are incorrect
    if (!current && count < index) {
      console.error("Index not present.")
    }

    newNode.nextNode = current;
    previous.nextNode = newNode;
  }
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}


const list = new LinkedList();