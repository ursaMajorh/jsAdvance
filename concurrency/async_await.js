const boilWater = () => 
  new Promise(resolve => {
    console.log("Memanaskan air...")
    setTimeout(() => {
      resolve("Air panas sudah siap!")
    }, 2000)
  })


const grindCoffeeBeans = () =>
  new Promise(resolve => {
    console.log("Menggiling biji kopi...")
    setTimeout(() => {
      resolve("Bubuk kopi sudah siap!")
    }, 1500);
  })


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

async function makeEspresso() {
  try {
    await checkAvailability()
    await checkStock()
    await Promise.all([boilWater(), grindCoffeeBeans()])
    const coffee = await brewCoffee()
    console.log(coffee)
  } catch(rejectedReason) {
    console.log(rejectedReason)
  }
}

makeEspresso()
