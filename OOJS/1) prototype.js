/*
 * karena Javascript tidak mengenal konsep class, maka 
 * inheritance atau pewarisan dari satu object ke object
 * lain menggunakan sebuah property khusus yang dimiliki
 * oleh semua object yaitu prototype
 */

/* 
 * pada ES6 memang dikenalkan sintaks class, namun sintaks
 * itu hanyalah syntatic sugar dari prototype itu sendiri
 */

/*
 * object mewarisi property obj lainnya melalui prototype chain.
 */

// contoh 1
const bird = {
  fly : true
};

const eagle = {
  speed : 150
};
// object eagle akan mewarisi object bird
eagle.__proto__ = bird;
console.log(eagle.fly); // true


// contoh 2
const x = {
  a : 2,
  m : function(p) {
    return this.a + this.b + p;
  }
};

const y = {
  b : 1,
  __proto__ : x
};

const z = {
  __proto__ : y
};

console.log(x); // obj
console.log(y.m(10)); // 13
console.log(z.m(2)); // 5
