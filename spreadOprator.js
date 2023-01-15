// memecahkan iterable menjadi single element
const nama = ["Hilman", "Apriadi", "Jhon", "Doe"];
console.log(...nama);
// memecah string
console.log(...nama[0]);

// menggabungkan 2 array
const satu = ["Hilman", "Apriadi"];
const dua = ["Jhon", "Doe"];
const gabung = [...satu, ...dua];
console.log(gabung); // array
//m menggunakan concat
const a = satu.concat(dua);
console.log(a); // array

// meng-copy array tanpa merubah array rujukannya
const angka = [1,2,3,4,5];
const newAngka = [...angka];
newAngka[2] = 69;

// looping nodelist
const list = document.querySelectorAll('li');
// mengubah nodelist menjadi array dengan spread operator
const names =  [...list].map(n => n.textContent);
console.log(names);

// css hover
const h1 = document.querySelector('.huruf');
const huruf = [...h1.textContent].map(h => {
   return `<input type="radio" id="${h}" name="x"></input> <label for="${h}">${h}</label>`;
}).join('');
console.log(huruf);
h1.innerHTML = huruf;