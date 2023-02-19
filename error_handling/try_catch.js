try {
  console.log("Awal blok try");
  errorCode;
  console.log("Akhir blok try");
} catch (error) {
  console.log(error.message);
} finally {
  console.log("Akan tetap dieksekusi")
}

/*
 * Object error memiliki beberapa properti utama 
 * di dalamnya, yaitu:
 * name : Nama error yang terjadi.
 * message : Pesan tentang detail error.
 * stack : Informasi urutan kejadian yang menyebabkan error.
 */
