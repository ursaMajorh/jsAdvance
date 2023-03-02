/*
 * Dengan promise kita dapat melakukan proses asynchronous secara
 * berantai. Contohnya, ketika kita ingin membuat satu gelas kopi,
 * akan ada beberapa tahapan yang dikerjakan oleh mesin pembuat
 * kopi, seperti memastikan mesin sudah siap, memastikan stok
 * biji kopi dan air cukup, membuat kopi, lalu menuangkannya 
 * ke dalam gelas. Tahapan tersebut harus dilakukan secara berurutan.
 */



const state = {
  stock : {
    coffeeBeans : 250,
    water : 1000
  },
  isCoffeeMachineBusy : false
}


const checkAvailability = () => 
  new Promise((resolve, reject) => 
    setTimeout(() => 
      !state.isCoffeeMachineBusy && 
      state.stock.coffeeBeans >= 16 && 
      state.stock.water >= 250 ? 
        resolve("Stok cukup. Bisa membuat kopi") :
        reject("Stok tidak cukup!")
    )
  )


const checkStock = () => 
  new Promise((resolve, reject) => {
    state.isCoffeeMachineBusy = true
    setTimeout(() => {
      state.stock.coffeeBeans >= 16 &&
      state.stock.water >= 250 ?
        resolve("Stok cukup. Bisa membuat kopi") :
        reject("Stok tidak cukup!");
    }, 2000)
  })



const brewCoffee = () => 
  new Promise((resolve, reject) => 
    setTimeout(() => {
      resolve("Kopi selesai dibuat");
    }, 2000))

function makeEspresso() {
  checkAvailability()
    .then(value => {
      console.log(value)
      return checkStock()
    })
    .then(value => {
      console.log(value)
      return brewCoffee()
    })
    .then(value => 
      console.log(value))
    .catch(rejectedReason => 
      console.log(rejectedReason))
}

makeEspresso()