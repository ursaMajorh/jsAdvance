// merepresentasikan argument pada function dengan jumlah
// yang tidak terbatas menjadi sebuah array

// reest parameter harus berada di akhir
function func(a, ...args) {
   // args diubah menjadi array
   // return Array.form(arguments);
   // return [...arguments]
   return args; // 2, 3,4,5
}
console.log(func(1,2,3,4,5));


// menjumlahkan
function sum(...args) {
   // let jumlah = args.reduce((x,y) => x +y);
   let jumlah = 0;
   for(let i of args) {
      jumlah += i;
   }
   return jumlah;
}
console.log(sum(1,2,3,4,5));

// array destructuring 
const number = [1,2,3,4,5,6,7,8,9];
const [one, two, ...etc] = number;
console.log(one, two); // 1 2
console.log(etc); // array 3 - 9

// object destructuring
const car = {
   brand : "Tesla",
   model : "Tesla-X",
   color : "Red"
};

const {brand, ...other} = car;
console.log(brand);
console.log(other);


// filtering
function dataType(type, ...values) {
   /*return values.filter(v => {
      typeof v == type ? console.log(v) : '';
   });*/
   return values.filter(v => typeof v === type);
}
console.log(dataType("boolean", 1, 2, false, "string1", true, "string2"));