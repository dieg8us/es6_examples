

function Persona(nombre) {
  // es5
  // if( this instanceof Persona ) {
  //   this.nombre = nombre;
  // } else {
  //   throw new Error('Esta funcion debe ser utilizada con el new');
  // }

  // es6
  if( typeof new.target !== "undefined" ) {
    this.nombre = nombre;
  } else {
    throw new Error('Esta funcion debe ser utilizada con el new');
  }

  this.nombre = nombre;
}

var persona = new Persona( "Diego" );
var noEsPersona = Persona.call( persona, "Diego" );
