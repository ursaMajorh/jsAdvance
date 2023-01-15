//higher order function merupakan sebuah function yang 
//beroperasi pada function yang lain, baik itu sebagai
//argument ataupun return value

//function yang disimpan sebagai argument disebut
//dengan callback
//function yang memiliki callback sebagai argument-nya
//disebut higher order function

//kerjakanTugas disebut higher order function
function kerjakanTugas(mapel){ 
   console.log(`Mulai mengerjakan mapel ${mapel}...`);
   selesai();
}

//function selesai disebut callback
kerjakanTugas("Pemdas", function selesai() { 
   alert("Selamat mengerjakan tugas");
});

//contoh lain
function repeat(n, action) {
   for(let i = 0; i <= n; i++) {
      action(i);
   }
}
repeat(10, console.log);
repeat(5, alert);


//contoh lain
//function disini dijadikan sebagai parameter
setTimeout(function() {
   console.log("Helo World");
}, 5000);