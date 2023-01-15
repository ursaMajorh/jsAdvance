/*
 * selain digunakan untuk memanggil constructor milik
 * parent class, keyword super juga dapat digunakan
 * untuk mengakses method milik parent.
 * dengan kata lain, super sebenarnya merujuk pada parent
 * prototype, mirip seperti __proto__
 */
 
 class Shape {
   paint() {
     console.log("Shape Paint");
   }
 }
 
 class Circle extends Shape {
   paint() {
     super.paint(); // mengakses method dari class Shape
     console.log("Circle Paint");
   }
 }
 
const circle = new Circle();
circle.paint();