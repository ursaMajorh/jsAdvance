

// menambah static dalam class field secara otomatis
// field tersebut bukan lagi milik dari instance object

// biasanya  static digunakan ketika kita ingin
// membuat utility field atau function 

// untuk mengakses static filed tidak lagi lewat instance obj
// tetapi langsung lewat class-nya

// static field sifatnya global, bisa diakses di mana saja

// static pada field
class  Configuration {
  static name = "Belajar JavaScript OOP";
  static version = "1.0";
  static author = "Hilman Apriadi";
}

console.log(Configuration.name)
console.log(Configuration.version)
console.log(Configuration.author)

// static pada method
class MathUtil {
  
  static sum(...num) {
    let result = 0;
    for(const n of num) {
      result += n;
    }
    return result;
  }
  
}

console.log(MathUtil.sum(1,2,3,4,5));