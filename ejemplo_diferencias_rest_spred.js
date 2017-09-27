
function saludaRest( saludo, ...nombres ) {

  for( i in nombres ) {
    console.log( `${saludo} ${nombres[i]}` );
  }
}

function saludaSpred( saludo, ...nombres ) {

  console.log( `${saludo} ${nombres}.` );
}

saludaRest("Hola", "Diego", "Mauro", "Susana", "Patricio");

let personas = ["melissa", "hernando", "juan"];
saludaSpred( "Que tal!", personas );
