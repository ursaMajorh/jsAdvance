// pewarisan pada prototype


// menggunakan property prototype untuk pewarisan 
// adalah cara yg salah

function Employee(name) {
  this.name = name;
}

function Manager(name) {
  this.name = name;
}

// contoh saat prototype Employee mewarisi dari Manager.
// alih-alih prototype Manager akan mewarisi pada Employee
// ini akan men-assign prototype Employee menjadi Manager

// method sayHello() pada prototype Employee akan 
// men-overwrite method sayHello() pada proto manager 
// yg sudah di set sebelumnya
// prototype yang di-set terakhir yang akan digunakan

// Manager.prototype = Employee.prototype; 

// cara yang benar 
Manager.prototype = Object.create(Employee.prototype);


Manager.prototype.sayHello = function(name) {
  console.log(`Hello, ${name}. My name is Manager ${this.name}`);
};

Employee.prototype.sayHello = function(name) {
  console.log(`Hello, ${name}. My name is Employee ${this.name}`);
};

const employee = new Employee("Hilman");
employee.sayHello("John");

const manager = new Manager("Apriadi");
manager.sayHello("Doe");

console.log(Employee);
console.log(Manager);