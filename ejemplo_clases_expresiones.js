

let miFuncion = function() {
  console.log( "Hola Mundo");
}

let otraFuncion = miFuncion;

console.log( typeof otraFuncion );

otraFuncion();

console.log( "=============================" );

let Persona = class {
  constructor() {
    this.nombre = "";
    this.edad = 31;
    this.direccion = "lorem ipsum";
  }

  decirNombre() {
    console.log( "Hola Mundo");
  }
}

let diego = new Persona();

console.log( typeof diego );
console.log( diego instanceof Persona );
