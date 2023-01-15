/*
 * Setiap objek dalam JavaScript memiliki properti yang 
 * disebut prototype . Prototipe itu sendiri adalah objek
 */

// menetapkan prototype

// -- menggunakan Object.create() --
const personPrototype = {
  greet(name) {
    console.log(`Hello, ${name}`);
  }
};

const me = Object.create(personPrototype);
me.greet("Apriadi");

/*
 * kita membuat objek personPrototype, yang memiliki
 * method greet(). kemudian Object.create() digunakan 
 * untuk membuat objek baru atau mewarisi personPrototype 
 * sebagai prototipe. Sekarang kita dapat memanggil 
 * method greet() dari objek personPrototype, dan prototipe 
 * menyediakan implementasinya
 */
 
 
 
 // -- menggunakan constructor function --
 
/*
 * dalam JavaScript, semua fungsi memiliki properti 
 * bernama prototype. saat kita memanggil function sebagai
 * konstruktor, properti ini disetel sebagai prototipe 
 * objek yang baru dibuat
 */
 
 const personPrototype2 = {
  greet() {
    console.log(`hello, my name is ${this.name}!`);
  },
};

function Person(name) {
  this.name = name;
}

Person.prototype.greet = personPrototype2.greet;
// atau
// Object.assign(Person.prototype, personPrototype);

const me2 = new Person("Hilman");
me2.greet();

/*
 * constructor function Person mewarisi method greet() dari
 * object personPrototype2 yang disimpan dalam property
 * prototype, sehingga kita bisa menggunakan method greet()
 * yang sudah disimpan dalam property prototype
 */
 
 
 
 
 // -- analogi -- 
 
 /*
  * Misalnya, jika kita memodelkan sebuah sekolah, 
  * kita mungkin memiliki profesor dan mahasiswa,
  * mereka berdua adalah manusia , sehingga memiliki 
  * beberapa fitur yang sama (misalnya, keduanya 
  * memiliki nama), tetapi masing-masing dapat 
  * menambahkan fitur tambahan (misalnya, profesor 
  * memiliki mata pelajaran yang mereka ajarkan), 
  * atau mungkin menerapkan fitur yang sama dengan cara 
  * yang berbeda. Dalam sistem OOP kita dapat mengatakan 
  * bahwa profesor dan mahasiswa sama-sama mewarisi fitur
  * dari manusia
  */