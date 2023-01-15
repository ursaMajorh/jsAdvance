class Person {
  firstName;
  lastName;
  
  constructor (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const person1 = new Person("Hilman", "Apriadi");
console.log(person1);