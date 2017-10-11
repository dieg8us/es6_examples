

let ajustes = {
  nombre    : "Diego Uribe",
  email     : "diego@gmail.com",
  facebook  : "diego.777",
  google    : "diego.uri.777",
  premium   : true
}

let { nombre, email, facebook, premium:dePago, twitter="dgtw" } = ajustes;

console.log( nombre, dePago, twitter );

// Destructuracion Objetos Anidados
let autoGuardado = {

  archivo: "app.js",
  cursor: {
    linea: 7,
    columna: 16
  },
  ultimoArchivo: {
    archivo: "index.html",
    cursor: {
      linea: 8,
      columna: 11
    }
  },
  otroNodo: {
    subNodo: {
      cursor: {
        linea: 11,
        columna: 11
      }
    }
  }
};

let { cursor:cursorActivo } = autoGuardado;
console.log( cursorActivo );

let { ultimoArchivo: {cursor:ultimoArchivo } } = autoGuardado;
console.log( ultimoArchivo );

let { otroNodo: { subNodo: { cursor: otroSuperNodo } } } = autoGuardado;
console.log( otroSuperNodo );

let otroSuperNodo2 = autoGuardado.otroNodo.subNodo.cursor;
console.log( otroSuperNodo2 );
