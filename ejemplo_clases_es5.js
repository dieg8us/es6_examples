

// es5
function Persona( nombre ) {

  this.nombre = nombre;

  this.gritarNombre = function() {
    console.log( this.nombre.toUpperCase() );
  }

}

Persona.prototype.decirNombre = function() {
  console.log( this.nombre );
}

let diego = new Persona("diego");

diego.gritarNombre();
diego.decirNombre();

console.log( diego instanceof Persona );
console.log( diego instanceof Object );
