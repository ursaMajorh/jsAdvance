// di javascript kita bisa menangkap error dengan try catch. 
// pada block try kita akan mencoba mengakses code yg error
// dan ketika terjadi error, code dalam block try akan berhenti
// dan otomatis masuk ke block catch 

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
try {
  // code ini akan error, maka block code dalam try akan
  // dihentikan dan yg akan dijalankan selanjutnya adalah 
  // code block catch
  console.log(MathUtil.sum());
} 
catch(error){
  console.log(`Error : ${error.message}`);
} 
// block code finally akan selalu dieksekusi 
// mau itu saat error atau tidak
finally {
  console.log("Selesai")
}
