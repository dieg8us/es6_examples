

class Persona {

  constructor(nombre) {
    this.nombre = nombre;
  }

  decirNombre() {
    console.log( this.nombre );
  }
}

let diego = new Persona("diego");
diego.decirNombre();

console.log( diego instanceof Persona );
console.log( diego instanceof Object );

console.log( typeof Persona );
