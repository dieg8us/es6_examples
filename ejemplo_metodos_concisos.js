

// es5
// var persona = {
//   nombre: "Diego",
//
//   getNombre: function() {
//     console.log( this.nombre );
//   }
// }

// es6
let persona = {
  nombre: "Diego",

  getNombre() {
    console.log( this.nombre );
  }
}

persona.getNombre();
