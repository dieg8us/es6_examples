
var manejador = {
  id: "123",
  init: function() {

    // es5
    // document.addEventListener("click", (function( event ) {
    //   this.clickEnPagina( event.type );
    // }).bind(this), false);

    // es6
    document.addEventListener("click", event => this.clickEnPagina( event.type ));

  },
  clickEnPagina: function( type ) {
    console.log( "Manejando " + type + " para el id: " + this.id );
  }
};

manejador.init();
