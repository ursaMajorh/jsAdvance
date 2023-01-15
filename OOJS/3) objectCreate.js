// Javascript telah menyediakan alternatif yang 
// dapat kita gunakan yaitu Object.create()
// karena mewarisi menggunakan __proto__ telah ditinggalkan
// sejak EcmaScript 3.1

// contoh : me-refactor pewarisan obj __proto__ sebelumnya

const bird = {
  fly : true
};

const eagle = Object.create(bird);
eagle.speed = 150;
console.log(eagle);

// perubahan state yang terjadi di parent menyebabkan
// state yang ada di child berubah, sementara perubahan
// state di child tidak berpengaruh pada parent.

const prent = {
  hair : "curly",
  eyes : "black"
};

const child = Object.create(prent);

// set child hair to straight
child.hair = "straight";
// set prent eyes to brown
prent.eyes = "brown";

console.log(prent.hair); // curly
console.log(child.hair); // straight

// set child hair to straight

child.eyes = "brown";