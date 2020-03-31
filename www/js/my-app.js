var $$ = Dom7;
var app = new Framework7({
  root: '#app', // App root element
  id: 'io.framework7.myapp', // App bundle ID
  name: 'My App', // App name
  theme: 'auto', // Automatic theme detection
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },
  },
  // App routes
  routes: routes,
  // Cordova Statusbar settings
  statusbar: {
    iosOverlaysWebView: true,
    androidOverlaysWebView: false,
  },
});

var mainView = app.views.create('.view-main');

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");
});

// Option 1. Using one 'page:init' handler for all pages
$$(document).on('page:init', function (e) {
    console.log(e);
})

$$(document).on('page:init', '.page[data-name="anotador"]', function (e) {
  console.log(e);
// cambio de nombres de pantalla 1 a pantalla 2
    if($$("#J1").val() == "") {$$('#Jugador1').text("Jugador 1")} else {$$('#Jugador1').text($$("#J1").val());}
    if($$("#J2").val() == "") {$$('#Jugador2').text("Jugador 2")} else {$$('#Jugador2').text($$("#J2").val());}

// capturar el boton seleccionado del popover y pasarlo como parametro a popSeleccion()
$$('#popover1').on('click',function(){popSeleccion(1); app.popover.close();});
$$('#popover2').on('click',function(){popSeleccion(2); app.popover.close();});
$$('#popover3').on('click',function(){popSeleccion(3); app.popover.close();});
$$('#popover4').on('click',function(){popSeleccion(4); app.popover.close();});
$$('#popover5').on('click',function(){popSeleccion(5); app.popover.close();});
$$('#popover6').on('click',function(){popSeleccion("-"); app.popover.close();});
$$('#popover7').on('click',function(){popSeleccion("X"); app.popover.close();});
//para los juegos tambien
$$('#servido').on('click',function(){popSeleccion("s"); app.popover.close();});
$$('#noServido').on('click',function(){popSeleccion("ns"); app.popover.close();});
$$('#juegoCancela').on('click',function(){popSeleccion("-"); app.popover.close();});
$$('#juegoAnula').on('click',function(){popSeleccion("X"); app.popover.close();});
// parte 1 y 2 del id seleccionado afuera del evento click para usarlo en popSeleccion tambien
var p1, p2;
// toma el id del selector clickeado y lo corta por cada "_"
$$('.valor').on('click',function(){
var seleccionado = $$(this).attr('id');
    var partes = seleccionado.split("_");
    // sabiendo la forma: d_1_1 puedo tener:
   var p0 = partes[0];
    p1 = partes[1];
    p2 = partes[2];
});
/**********popSeleccion() toma el valor del popover por parametro como selecPop***********************/
function popSeleccion(selecPop){
// variable para el resultado de manera local <solo para la seleccion de esta celda>
var res;
// calcular el valor que se pone segun la celda seleccionada
//si la fila es del 1 al 6 son los numeros
if(p1<=6){
if(p1 == "1"){
res = selecPop;
}else if(p1 == "2"){
  res = selecPop*2;
}else if(p1 == "3"){
  res = selecPop*3;
}else if(p1 == "4"){
  res = selecPop*4;
}else if(p1 == "5"){
  res = selecPop*5;
}else if(p1 == "6"){
  res = selecPop*6;
}
// y si se apreta X o - sobreescribo el res 
if (selecPop == "X"){
res = "X";
}else if (selecPop == "-") {
  res = "-";
}
// concateno las partes p1 y p2 para armar el selector y le sobreescribo el html dentro del <td> agregando el resultado
$$('#d_'+p1+'_'+p2).html('<a class="link popover-open" href="#" data-popover=".popover-links">'+res+'</a>');
//si la fila es del 7 al 11 son los juegos (escalera, poker, etc)
}else{
// le pongo los valores directamente al resultado
if(p1 == "7"){
  res =20;
}else if(p1 == "8"){
  res =30;
}else if(p1 == "9"){
  res =40;
}else if(p1 == "10"){
  res =60;
}else if(p1 == "11"){
  res =100;
}
// y si se apreta X o - sobreescribo el res // y si es juego no servido "sumo" 0 y si es servido sumo "5"
if (selecPop == "X"){
res = "X";
}else if (selecPop == "-") {
  res = "-";
}else if (selecPop == "ns") {
  res += 0;
}else if (selecPop == "s") {
  res += 5;
}
// concateno las partes p1 y p2 para armar el selector y le sobreescribo el html dentro del <td> agregando el resultado
$$('#d_'+p1+'_'+p2).html('<a class="link popover-open" href="#" data-popover=".popover-juegos">'+res+'</a>');
}
//llamar a funcion calcularTotal()
calcularTotal();
};
/***********************************CIERRA popSeleccion()************************************************/

/********************abre funcion que calcula los totales de los dos jugadores**************************/
function calcularTotal(){
// inicializo en 0 los totales
var totalJugador1 = 0;
var totalJugador2 = 0;
// aca va el for que pasa por los p1 hasta las 11 filas
for (var i = 1; i <= 11; i++) {
// tomo el texto que está adentro del selector del jugador 1 y 2 y le concateno el i para recorrer todas las filas
// lo paso a las variables locales valor1 y valor2 para hacerlo mas legible
var valor1 = $$('#d_'+i+'_1>a').text();
var valor2 = $$('#d_'+i+'_2>a').text();
// si el valor de valor1 o valor 2 es "X" o "-" no hago nada en esta vuelta, lo salteo. 
if(valor1 == "X" || valor1 == "-"){  
}else{
// sino sumo el valor al total del jugador, acumulando el total en totalJugador que esta fuera del for
totalJugador1 += parseInt(valor1);
}
// hago lo mismo que antes para el jugador 2
if(valor2 == "X" || valor2 == "-"){  
}else{
totalJugador2 += parseInt(valor2);
}
// salgo del for
}
// Imprimo los totales de jugadores dentro del selector con el id que guarda el total
$$('#total1').text(totalJugador1);
$$('#total2').text(totalJugador2);
};
/***************************************CIERRA calcularTotal()********************************************/
})