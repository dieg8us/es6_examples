

let gato = {
  sonido() {
    console.log( "Miau" );
  },
  chillido() {
    console.log( "MIAU" );
  }
}

let perro = {
  sonido() {
    console.log( "guau" );
  }
}

let angora = Object.create( gato );
console.log( Object.getPrototypeOf( angora ) === gato );

angora.sonido();
angora.chillido();

Object.setPrototypeOf( angora, perro );

console.log( Object.getPrototypeOf( angora ) === gato );

angora.sonido();
// angora.chillido();

// SUPER

let persona = {
  saludar() {
    return "Hola";
  }
}

let amigo = {
  saludar() {
    // es5
    // return Object.getPrototypeOf(this).saludar.call(this) + ", saludos!!!";
    // es6
    return super.saludar() + ", saludos!!!";
  }
}

// Herencia
Object.setPrototypeOf( amigo, persona );

console.log( amigo.saludar() );
