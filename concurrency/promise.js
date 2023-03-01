/*
 * Promise memiliki 3 kondisi :
 *  - Pending (dalam oroses)
 *  - Fulfilled (janji terpenuhi)
 *  - Rejacted (janji gagal terpenuhi)
 

 // CONSTRUCTING PROMISE OBJECT
/*
 * Promise merupakan sebuah objek yang digunakan untuk 
 * membuat sebuah komputasi (kode) ditangguhkan dan berjalan 
 * secara asynchronous
 *
 * Untuk membuat objek promise, kita gunakan keyword new 
 * diikuti dengan constructor dari Promise
 *
 * Di dalam constructor Promise, kita perlu menetapkan 
 * resolver function atau bisa disebut executor function
 */

const executorFunc = (resolve, reject) => {
  const isCoffeeMakerReady = true;
  isCoffeeMakerReady ? 
    resolve("Kopi berhasil dibuat"):
    reject("Mesin kopi tidak bisa digunakan");
}

const makeCoffee = () => new Promise(executorFunc);

const coffeePromise = makeCoffee();

console.log(coffeePromise);
