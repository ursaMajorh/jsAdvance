//prototipepe
const obj = {
   properti: 1
};
//menetapkan object obj ke dalam newObj melalui properti __proto__
//newObj adalah object baru
const newObj = {
   propertiB:2,
   __proto__: obj
   //secara otomatis object newObj mewarisi seluruh property dari object obj, tetapi cara ini sudah usang
};


//prototipe
const bird = {
   fly: true,
   color: "brown"
};
//hasilnya sama seperti contoh pertama, tetapi ini adalah cara yang benar dengan menggunakan Object.create()

//object baru
const eagle = Object.create(bird);
eagle.speed = 90;
eagle.height = 1.2;

const falcon = Object.create(bird);
falcon.speed = 120;
falcon.height = 1;

// perubahan state yang terjadi di parent menyebabkan state yang ada di child berubah, sementara perubahan state di child tidak berpengaruh pada parent.

//prototipepe
const parent = {
   hair: "curly",
   eyes: "blue"
};
//object baru
const children = Object.create(parent);

console.log(`Parent hair : ${parent.hair} — Parent eyes : ${parent.eyes}`);
console.log(`Children hair : ${children.hair} — Children eyes : ${children.eyes}`);
//mengubah properti hair dari object parent menjadi straight
console.log("Set parent hair to straight");
parent.hair = "straight";
console.log(`Parent hair : ${parent.hair}`);
//mengubah properti eyes dari object children menjadi green
console.log("Set children eyes to green");
children.eyes= "green";
console.log(`Children eyes : ${children.eyes}`);

console.log(`Parent hair : ${parent.hair} — Parent eyes : ${parent.eyes}`);
console.log(`Children hair : ${children.hair} — Children eyes : ${children.eyes}`);