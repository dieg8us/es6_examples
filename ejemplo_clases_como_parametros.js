

function creadorClases( definicionClase ) {
  return new definicionClase();
}

let objeto = creadorClases( class {

  constructor() {
    this.nombre = undefined;
    this.edad = 31;
  }

  saludar() {
    console.log( "Hola" );
  }
});

objeto.saludar();


class Cuadrado {
  constructor(lado) {
    this.lado = lado;
  }

  getArea(){
    return this.lado * this.lado;
  }
};

function imprimirCuadrado( cuadrado ) {
  if( !(cuadrado instanceof Cuadrado) ) {
    console.error("El parametro enviado no es un cuadrado");
    return;
  }

  console.log( cuadrado.getArea() );
}

let mesa = new Cuadrado(10);

imprimirCuadrado( mesa );

let mesa2 = "123";

imprimirCuadrado( mesa2 );
