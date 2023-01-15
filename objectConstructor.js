function Player(name, energy) {
   this.name = name;
   this.energy = energy;
}
Player.prototype.shot = function(damage) {
   this.energy -= damage;
   return 'energi berkurang';
};
Player.prototype.eat = function(health) {
   this.energy += health;
   return 'energi bertambah';
};
Player.prototype.changeName = function(newName) {
   this.name  = newName;
   return "nama berhasil diubah";
};

const player1 = new Player("Hilman", 10);

