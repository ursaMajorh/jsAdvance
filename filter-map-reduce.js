const angka = [10,5,3,2,6,5,7,9,8,1];

//memfilter menggunakan for loop
const angkaBaru1 = [];
console.log("for loop");
for(let i = 0; i < angka.length; i++) {
   if (angka[i] >= 3) {
      angkaBaru1.push(angka[i]);
   }
}
console.log(angkaBaru1);

//memfilter menggunakan keyword filter 
//arrow function adalah callback
console.log("filter");
const angkaBaru2 = angka.filter(item =>  item >= 3);
console.log(angkaBaru2);


//map
//menambahkan item pada array dengan 2
console.log("map");
const angkaBaru3 = angka.map(item => item + 2);
console.log(angkaBaru3);

//reduce
//menjunlahkan sekuruh item pada array
//[10+5+3+2+6+5+7+9+8+1]
console.log("reduce");
const angkaBaru4  = angka.reduce((accumulator, currentValue) => accumulator + currentValue, 0); 
   //0 adalah nilai default dari penjumlahan awal
console.log(angkaBaru4);


//method chaining
// filter > 5
// kali 2
// tambah 2
// jumlahkan
console.log("Method chaining");
const hasil = angka.filter(item => item > 5) //6,7,8,9,10
   .map(item => item * 2) //12, 14, 16, 18, 20
   .map(item => item + 2) //14, 16, 18, 20, 22
   .reduce((acc, cur) => acc + cur); //90
console.log(hasil);