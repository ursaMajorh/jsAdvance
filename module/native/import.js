import {coffeeStock as stock, isCoffeeMachineReady} from './export.js';

console.log(stock, isCoffeeMachineReady);

const displayStock = stocks => {
  for(const type in stocks) {
    console.log(type);
  }
}

displayStock(stock);
