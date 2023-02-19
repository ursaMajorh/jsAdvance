class Counter {
  
  #counter = 0;
  next() {
    try {
      return this.#counter;
    } finally {
      this.#counter++;
    }
  }
  
}

const counter = new Counter();
console.log(counter.next());
console.log(counter.next());
console.log(counter.next());
console.log(counter.next());
console.log(counter.next());
console.log(counter.next());