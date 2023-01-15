function foo() {
   let nama = "Hilman";
   return function() {
      return nama;
   };
}

foo()();