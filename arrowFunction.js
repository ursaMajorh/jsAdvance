//function biasa menggunakan function expression
const a = function f1() {
   return console.log("Hallo");
};
a();

//arrow function 
const b = () => {
   return console.log("Dunia");
};
b();

//jika arrow function hanya menyimpan satu nilai argument,
//maka tidak harus menggunakan tanda kurung () dan jika
//hanya menjalankan satu statement tidak perlu menggunakan
//kuring kurawal dan keyword return

// function ini desebut juga  sebagai implicit return

const c = nama => console.log(`Hallo ${nama}`);
c("Hilman");

//jika nilai argumen lebih dari satu, tanda kurung diperlukan
const d = (nama, waktu) => console.log(`Hallo, ${nama}, selamat ${waktu}`);
d("Apriadi", "malam");

//contoh implementasi arrow function lainnya

//menghitung jumlah huruf pada setiap item dalam array
const arr = ["Hilman Apriadi", "Apriadi"];
let jumlah = arr.map(nama => nama.length);
console.log(jumlah);

//mengembalikan object
const arr2 = ["satu", "dua", "tiga"];
//jika akan mengembalikan object, maka diperlukan tanda
//kurung(), dan setelahnya diisi dengan kurung kurawal{}
//({object})

//jika nama property dan valuenya sama, cukup tulis salah satunya saja
let e = arr2.map(item => ({item, jumlahKarakter : item.length}));
console.log(e);