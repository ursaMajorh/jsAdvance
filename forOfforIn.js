
// for...of

// looping array
const person = ["Hilman", "Apriadi", "Jhon", "Doe"];
// i adalah index, 
for(const [i, item] of person.entries()) {
   console.log(i, item);
}

// looping string
const nama = "Hilman";
for(const n of nama) {
   console.log(n);
}

// looping nodelist
const list = document.querySelectorAll('ul li');
for(const n of list) {
   console.log(n.innerHTML);
}

// looping arguments
function menjumlahkan() {
   //secara default argument pada function tersimpan
   //di dalam keyword "arguments"
   let jumlah = 0;
   for(let x of arguments) {
      jumlah += x;
   }
   return jumlah;
}
console.log(menjumlahkan(1,2,3,4,5)); // 15

// for...in 

// looping Object
const siswa = {
   nama : "Hilman",
   umur : 17,
   email : "hilman@gmail.com"
};

for(const n in siswa) {
   console.log(`${n} : ${siswa[n]}`);
}