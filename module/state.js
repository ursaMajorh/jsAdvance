/* 
 * Setiap berkas JavaScript yang berjalan pada Node, memiliki
 * objek module lokal yang memiliki properti exports. Properti
 * tersebut digunakan untuk mendefinisikan nilai apa yang akan
 * diekspor dari berkas tersebut.
 */

const coffeeStock = {
  arabica : 100,
  robusta : 150,
  liberica : 200
};

const isCoffeeMachineReady = true;


module.exports = {coffeeStock, isCoffeeMachineReady};
