// pewarisan pada class

class Employee {
  constructor(firstName, age) {
    this.firstName = firstName;
    this.age = age;
  }
  sayHello(name) {
    console.log(`Hello, ${name}. My name is employee ${this.firstName}`);
  }
}

class Manager extends Employee {
  // Manager mewarisi class Employee
  constructor(firstName, lastName, age) {
    // gunakan keyword untuk menggunakan constructor
    // pada child class / class turunan
    super(firstName, age);
    this.lastName = lastName;
  }
  
  sayHello(name) {
    console.log(`Hello, ${name}. My name is manager ${this.firstName + " " + this.lastName}`);
  }
  
}

const employee = new Employee("John", 40);
console.log(Employee);
console.log(employee.age);
employee.sayHello("Doe");

const manager = new Manager("Hilman", "Apriadi", 17);
console.log(Manager);
console.log(manager.age);
manager.sayHello("John");
