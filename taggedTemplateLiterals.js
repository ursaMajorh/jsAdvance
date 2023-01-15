const nama = "Hilman Apriadi",
      umur = 17;

function hallo(strings, ...expression) {
   // let result = "";
   // strings.forEach((str, i) => {
   //    result += `${str} ${expression[i] || ""}`;
   // }); 
   return strings.reduce((result, str, i) => `${result}${str}${expression[i] || ''}`, '');
}

const io = hallo`Hallo, nama saya ${nama}, saya ${umur} tahun`;
console.log(io);


// kegunaan lain tagges template Literals
   // Escaping HTML Tags
   // Translation & Internationalization
   // Styled Components