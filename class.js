class Player {
   constructor(name, energy) {
      this.name = name;
      this.energy = energy;
   }
   shot(damage) {
      this.energy -= damage;
      if(this.energy == 0 ) alert("game over");
      return "energi berkurang";
   }
   eat(health) {
      this.energy += health;
      return "energi bertambah";
   }
   changeName(newName) {
      this.name = newName;
      return "nama berhasil diubah";
   }
}

const player1 = new Player("Hilman", 10);