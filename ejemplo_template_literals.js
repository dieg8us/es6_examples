
function obtenerNombre() {
  return "Maria Perez";
}

let nombre = "Maria";
let apellido = "Perez";

let nombreCompleto = nombre + " " + apellido;

console.log( nombreCompleto );

// uso de template literals

let nombreCompleto2 = `El nombre completo es: ${nombre} ${apellido}`;

console.log( nombreCompleto2 );

let nombreCompleto3 = `El nombre completo es: ${obtenerNombre()} ${ 1 + 2 }`;

console.log( nombreCompleto3 );

let multiLinea = `<h1 class="algo">${nombre}</h1>
<p>Hola Mundo ${apellido}</p>
<p>I'm Diego</p>`;

console.log( multiLinea );
