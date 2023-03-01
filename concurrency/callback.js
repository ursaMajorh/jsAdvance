const orderCoffee = callback => {
  let coffee = null;
  console.log("Sedang membuat kopi");
  setTimeout(() => {
    coffee = "Kopi sudah jadi";
    callback(coffee);
  }, 3000);
}

orderCoffee(coffee => {
  console.log(coffee);
});
