 // menampilkan pesan error sesuai error yg muncul

const json = '{"name" : "Hilman", "age" : 17}';

try {
  let user = JSON.parse(json);
  if(!user.name) {
    throw new SyntaxError("'name' is required");
  }
  errorCode;
  console.log(user.age);
} catch(error) {
  if(error instanceof SyntaxError) {
    console.log(`JSON error : ${error.message}`)
  } else if(error instanceof ReferenceError) {
    console.log(error.message);
  } else {
    console.log(error.stack);
  }
}
