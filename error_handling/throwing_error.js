const json = '{"age" : 17}';

try {
  let user = JSON.parse(json);
  if(!user.name) {
    throw new SyntaxError("'name' is required");
  }
  console.log(user.age);
} catch (error) {
  console.log(error.name, error.message);
}
