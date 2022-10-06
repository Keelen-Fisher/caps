'use strict';

class Queue {
  constructor() {
    this.data = {};
  }

  // will be within an array
  store(key, value) {
    this.data[key] = value;
    return key;
  }

  read(key) {
    return this.data[key];
  }

  remove(key) {
    console.log('confirming that something has been removed');
    let value = this.data[key];
    delete this.data[key];
    return value;
  }
}

module.exports = Queue;
