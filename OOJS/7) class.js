/* 
 * membuat class dengan menggunakan constructor function 
 * adalah cara lama javascript, pada javascript versi modern
 * atau lebih tepatnya ES6, ada penambahan keyword class
 * untuk mempermudah OOP
 */
 
 // membuat class
 class Player {
   constructor(name){
     this.name = name;
     this.hp = 100;
   }
   
   shot(damage) {
     this.hp -= damage;
     if(this.hp <= 0) {
       console.log("Game Over!");
       return this.hp = 0;
     }
     return this.hp;
   }
   
   eat(food) {
     if(this.hp >= 100) {
       console.log("Health Point is full!");
       return this.hp = 10;
     }
     this.hp += food;
     return this.hp;
   }
   
 }
 

// instansiasi objek dari class Player
 const p1 = new Player("Hilman");
 const p2 = new Player("Apriadi");
 
 console.log(p1);
 console.log(p2);