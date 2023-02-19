// banyak sekali jenis class Error di JavaScript, namun 
// semuanya selalu berujung di class Error, artinya class
// Error adalah superclass untuk semua jenis error 

// contoh class error di JavaScript, diantaranya :
// - SyntaxError
// - TypeError
// - EvalError
// dll

class MathUtil {
  static sum(...num) {
    if(num.length == 0) {
      throw new Error("Parameter Harus Diisi!!");
    }
    
    let result = 0;
    for(const n of num) {
      result += n;
    }
    
    return result;
  }
}

console.log(MathUtil.sum(1,2,3,4,5));
console.log(MathUtil.sum());