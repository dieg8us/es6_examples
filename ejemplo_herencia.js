

class Rectangulo {
  constructor( alto, largo ) {
    this.alto = alto;
    this.largo = largo;
  }

  getArea() {
    return "Rectangulo: " + (this.alto * this.largo);
  }
}

let rectangulo = new Rectangulo( 3, 2 );

class Cuadrado extends Rectangulo {
  constructor(alto) {
    super( alto, alto );
  }

  getArea() {
    // return "Cuadrado: " +  this.alto * this.alto;
    return super.getArea();
  }
}

let cuadrado = new Cuadrado( 3 );

console.log( cuadrado.getArea() );

console.log( cuadrado instanceof Cuadrado );
console.log( cuadrado instanceof Rectangulo );
