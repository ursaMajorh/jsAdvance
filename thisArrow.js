//arrow function tidak bisa membuat constructor function
//tetapi kalau method bisa


//function expression 
const Person = function(nama, umur) {
   this.nama = nama; //lexical scope yang dipanggil
   this.umur = 17;
   this.sayHi = () => {
      console.log(`Hallo ${this.nama}`);
      //karena function expression memiliki konspe "this",
      //maka "this" pada arrow function akan mencari ke
      //lexical scope
   };
};
const Hilman = new Person("Hilman", 17);


//object literal
const human  = {
   nama : "Hilman", // this.nama
   umur : 17,
   /* sayHi : function() {
      //saat menggunakan function declaration, "this" akan
      //mencari ke lexcial scope
      return this.nama;  //output "Hilman"
   } */
   
   sayHi : () => this.name //output undefined
   
   //output undefined karena arrow function tidak memiliki
   //konsep this, "this" pada arrow function di atas akan
   //mengacu pada object global, yaitu object windows,
   //this pada arrow function akan mencari lexcial scope
   //pada object human, jika tidak ada maka akan mengacu
   //pada object global
};


//contoh lain 

//JavaScript tidak meng-hoisting function expression
const Add = function(num) {
   this.number = num; 
   
   /*
   setInterval(function() {
     console.log(this.number++);
   }, 500); //output NaN
   */
   
    //this disini hasilnya object windows
   
   //output NaN karena setInterval menggunakan parameter 
   //function declaration didalamnya, JavaScript akan
   //meng-hoisting function() menjadi berada diluar
   //dan akan mencari this ke luar, tetapi tidak ada,
   //maka hasilnya undefined, undefined ditambah ++
   //hasilnya menjadi NaN
   
   //solusinya adalah dengan menggunakan arrow function
   setInterval(() => console.log(this.number++), 500);
   //"this" akan mengacu pada this yang diatasnya
};

let satu = new Add(0); 