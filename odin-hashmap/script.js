class HashMap {

  constructor() {
    this.data = [];
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i)
    }
    return hashCode;
  }

  set(key, value) {
    let index = this.hash(key)
    if (!this.data[index]) {
      this.data[index] = [];
    }

    for (let i = 0; i < this.data[index].length; i++) {
      if (this.data[index][i][0] === key) {
        this.data[index][i][1] = value;
        return;
      }
    }
    this.data[index].push([key,value])
  }

  get(key) {
    let index = this.hash(key)
    if (!this.data[index]) {
      return false;
    }
    for (let i = 0; i < this.data[index].length; i++) {
      if (this.data[index][i][0] === key) {
        return this.data[index][i][1];
      }
    }
    return null;
  }

  has(key) {
    let index = this.hash(key)
    if (!this.data[index]) {
      return false;
    }
    for (let i = 0; i < this.data[index].length; i++) {
      if (this.data[index][i][0] === key) {
        return true;
      }
    }
  }

  remove(key) {
    let index = this.hash(key)
    if (!this.data[index]) {
      return false;
    }
    for (let i = 0; i < this.data[index].length; i++) {
      if (this.data[index][i][0] === key) {
        this.data[index].splice(i, 1);
        return true;
      }
    }
    return false;
  }

  length() {
    let count = 0;
    for (let item in this.data) {
      count++;
    }
    return count;
  }

  clear() {
    this.data = [];
  }

  keys() {
    let keysArr = [];
    for (let keys in this.data) {
      keysArr.push(this.data[keys][0][0])
    }
    return keysArr;
  }

  values() {
    let valuesArr = [];
    for (let values in this.data) {
      valuesArr.push(this.data[values][0][1])
    }
    return valuesArr;
  }

  entries() {
    let entriesArr = [];
    for (let values in this.data) {
      entriesArr.push([this.data[values][0][0],this.data[values][0][1]])
    }
    return entriesArr;
  }

}

let hashMap = new HashMap();
hashMap.set('klucz1', 'wartosc2');
hashMap.set('klucz1', 'wartosc3');
hashMap.set('klucz2', 'wartosc2');
hashMap.set('klucz4', 'wartosc2');;
console.log(hashMap.data);