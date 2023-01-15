// destructuring variable / assignment


// destructuring array 
const perkenalkan = ['Hallo,','nama','saya','Hilman Apriadi'];
//spasi kosong digunakan untuk men-skip elemen array
const [hallo, , ,nama] = perkenalkan; 
console.log(nama); // Hilman Apriadi


// swap item 
let a = 1,
    b = 2;
console.log(`${a}${b}`); // 1 2
[a,b] = [b,a];
console.log(`${a}${b}`); // 2 1


// return value pada function
function foo() {
   return [1,2];
}
const x = foo();
console.log(x); // array
console.log(x[1]); // 2


// rest parameter
// nilaiAwal dan ...values adalah destructuring variable
// 1,2,3,4,5 adalah nilai array
const [nilaiAwal, ...values] = [1,2,3,4,5];
console.log(nilaiAwal); // 1
console.log(values); // array 2,3,4,5
console.log(values[3]); // 5

// destructuring object
const obj = {
   nama2 : "Hilman Apriadi",
   umur : 17
   //email tidak ada
};
// nama variable harus sama dengan nama property object
const {nama2, umur, email} = obj;
console.log(nama2);

// assignment ke variable baru
// variable email ditambahkan secara default, 
// jika tidak ada property email apda object
const {nama2 : n, umur : u, email : e = "defaul@default.com"} = obj;
console.log(n,u,e);

// assignment object tanpa deklarasi
({username, tl} ={
   username : "@anonim123",
   tl : "18-04-2005"
});
console.log({username, tl});
console.log(username, tl); 

// rest property
const obj2 = {
   satu : 1,
   dua : 2,
   tiga : 3,
   empat : 4
};
const {satu, ...properties} = obj2;
console.log(properties); // object dua, tiga ,empat
console.log(properties.tiga); // tiga (3)


// mengambil field pada object, setelah dikirim
// sebagai parameter untuk function
const user = {
   id : 420,
   nama : "Jhon Doe",
   age : 69
};
function getUserId({ id, ...properies}) {
   return id, properies;
}
console.log(getUserId(user));