//outer function
function ucapkanSalam(waktu) {
   //inner function atau disebut dengan closure
   //inner function memiliki akses ke dalam parent function
   return function(nama) {
      //waktu merupakan sebuah lexical scope
      /*
      Lexical scope adalah scope yang dibaca saat kode JavaScript melalui proses compile, atau sering disebut compile-time. Lexical scope ini yang mengatur di scope mana kita harus mencari sebuah variable
      */
      console.log(`Hallo, ${nama}, selamat ${waktu}`);
   };
}

//closure dapat digunakan untuk membuat function factories
let pagi = ucapkanSalam("pagi");
pagi("Hilman");
ucapkanSalam("malam")("Hilman");



//closure juga dapat digunakan sebagai private method
//membuat function expression dengan Anymous IIFE ( Immediately Invoke Function Expression
let add = (function(){
   //local variable
   let counter = 0;
   return function() {
      return console.log(++counter);
   };
})();

//walupun variable counter value-nya diganti, ini tidak akan mengganggu function add
counter = 100;
add();
add();
add();
add();
add();