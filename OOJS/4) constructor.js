/*
 * sebelum ES6, pembuatan class di javascript menggunakan 
 * constructor function
 */
 
 function Player(name) {
   
   // property
   this.name = name;
   this.hp = 100;
   
   // method
   
   // health point berkurang
   this.shot = damage => {
     this.hp -= damage;
     if(this.hp <= 0) {
       console.log("Game Over!");
       return this.hp = 0;
     }
     return this.hp;
  };
  
  // helath point bertambah
   this.eat = food => {
     if (this.hp >= 100) {
       console.log("Health point is full");
       return this.hp = 100;
     }
     this.hp += food;
     return this.hp;
   };
 }
 
 const p1 = new Player("Hilman");
 const p2 = new Player("Apriadi");
 
 console.log(p1); // {"Hilman", 100}
 console.log(p2); // {"Apriadi", 100}