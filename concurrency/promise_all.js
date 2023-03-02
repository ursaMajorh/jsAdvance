/*
 * Method Promise.all() dapat menerima banyak promise 
 * dalam bentuk array pada parameternya. Kemudian method 
 * tersebut akan mengembalikan nilai seluruh hasil dari 
 * promise dalam bentuk array.
 */

const firstPromise = () => 
  new Promise((resolve) => resolve("First Promise"))

const secondPromise = () =>
  new Promise((resolve) => resolve("Second Promise"))

const thirdPromise = () =>
  new Promise((resolve) => resolve("Third Promise"))


const promises = [firstPromise(), secondPromise(), thirdPromise()]


Promise.all(promises)
  .then(resolvedValue => console.log(resolvedValue))
