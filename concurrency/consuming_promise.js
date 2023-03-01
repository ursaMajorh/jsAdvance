const stock = {
  coffeBeans : 250,
  water : 1000
}


/*
 * checkStock() merupakan fungsi yang mengembalikan promise
 * dan akan menghasilkan resolve() dengan membawa nilai 
 * “Stok cukup. Bisa membuat kopi”.
 */
const checkStock = () => 
  new Promise((resolve, reject) => {
    stock.coffeBeans >= 16 && stock.water >= 250 ?
      resolve("Stok cukup, bisa membuat kopi") :
      reject("Stok tidak cukup")
  })


const handleSuccess = resolvedValue => 
  console.log(resolvedValue)

const handleFailure = rejectionReason => 
  console.log(rejectionReason)

checkStock()
  .then(handleSuccess, handleFailure);
/*
 * Parameter pertama berisi fungsi handleSuccess untuk
 * menangani kondisi ketika promise berstatus resolve. 
 * Parameter kedua berisi fungsi handleFailure yang menangani 
 * ketika promise berstatus reject.
 */



/*
 * Dengan menggunakan method catch(), kita dapat menerapkan 
 * prinsip separation of concerns sekaligus membuat kodenya 
 * menjadi lebih rapi.
 */

checkStock()
  .then(handleSuccess)
  .catch(handleFailure)
