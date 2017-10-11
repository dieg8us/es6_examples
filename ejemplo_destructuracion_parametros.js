
function crearJugador( nickname,
   { hp, sp, clase } = { hp: 100, sp: 50, clase: "Mago" }
) {

  // opciones = opciones || {};
  //
  // let hp = opciones.hp,
  //     sp = opciones.sp,
  //     clase = opciones.clase;

  console.log( nickname, hp, sp, clase );

  // Codigo para crear al jugador...
}

crearJugador( "Strider", {
  hp: 500,
  sp: 100,
  clase: "Warrior"
});
