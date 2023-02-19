class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "Validation Error";
  }
}

let json = '{"age" : 17}';

try {
  let user = JSON.parse(json);
  if(!user.name) throw new ValidationError("'name' is required");
  if(!user.age) throw new ValidationError("'age' is required");

  console.log(user.name);
  console.log(user.age);

} catch(error) {
  if(error instanceof SyntaxError) {
    console.log(`Syntax Error : ${error.message}`)
  } else if(error instanceof ValidationError) {
    console.log(`Invalid Data ${error.message}`)
  } else {
    console.log(error.stack)
  }
}
