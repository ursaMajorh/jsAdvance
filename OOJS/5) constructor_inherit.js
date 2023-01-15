// pewarisan pada constructor function

function Employee(firstName, age) {
  this.firstName = firstName;
  this.age = age;
  this.sayHello = name => `Hello, ${name}. My name is ${this.firstName}, i'm ${age}`;
}

function Manager(firstName, lastName, age) {
  this.lastName = lastName;
  Employee.call(this, firstName, age);
}

  // memanggil constructor function Employee dengan method 
  // call() supaya semua properti atau method yang ada di
  // constructor function Employee bisa digunakan ddigunakan

  // constructor manager mewarisi  semua property dan method 
  // dari Employee

const person = new Manager("Hilman", "Apriadi", 17);

console.log(person); 
console.log(person.sayHello("John"));


// contoh lain penggunaan call() 
const obj1 = {
  m : () => alert()
};

function func() {
  this.m();
}

func.call(obj1);