class Counter {
  
  // property yang diberi tanda "#" adalah private
  // hanya bisa diakses dalam kelas itu sendiri
  #counter = 0;
  
  increment() {
    this.#counter++;
  }
  
  decrement() {
    this.#counter--;
  }
  
  // untuk mengakses property yang private, bisa menggunakan 
  // getter
  get() {
    return this.#counter;
  }
}

const counter = new Counter();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
console.log(counter.get());