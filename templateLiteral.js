//multi-line string
console.log(`hello
world`);

//expression interpolatipn
let a = 2;
console.log(`${a + 3}`);

//embeded expression
//alert
console.log(`${alert("test")}`);
//ternarty operator
let x = 10;
console.log(`${x % 2 == 0 ? 'genap' : 'ganjil'}`);

//HTML Fragment
const person = {
   nama : "Hilman Apriadi",
   email : "hilmanok09@gmail.com"
};
const el = 
`<div class="cont">
   <h2>${person.nama}</h2>
   <p>${person.email}</p>
</div>`;
console.log(el);