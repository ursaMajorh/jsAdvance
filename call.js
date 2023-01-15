// method call memungkinkan kita untuk menggunakan method dari 
// objek lain

const person = {
  fullName : function() {
    return this.fisrtName + " " + this.lastName;
  }
};

const person1 = {
  fisrtName : "Hilman",
  lastName : "Apriadi"
};

console.log(person.fullName.call(person1));