var $$ = Dom7;

var app = new Framework7({
  root: '#app', // App root element

  id: 'io.framework7.myapp', // App bundle ID
  name: 'My App', // App name
  theme: 'auto', // Automatic theme detection
  // App root data
  // App root methods
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },
    cambiarValor: function () {
      // funcion global para cambiar el valor clickeado
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
   /* var dados1 = [1, 2, 3, 4, 5, "-", "X"];
    var dados2 = [2, 4, 6, 8, 10, "-", "X"];
    var dados3 = [3, 6, 9, 12, 15, "-", "X"];
    var dados4 = [4, 8, 12, 16, 20, "-", "X"];
    var dados5 = [5, 10, 15, 20, 25, "-", "X"];
    var dados6 = [6, 12, 18, 24, 30, "-", "X"];*/
   // var dadosN = [1, 2, 3, 4, 5, "-", "X"];
/*    var dadosEscalera = [20, 25, "-", "X"];
    var dadosFull = [30, 35, "-", "X"];
    var dadosPoker = [40, 45, "-", "X"];
    var dadosGenerala = [50, 55, "-", "X"];
    var dadosDoblegenerala = [100, 105, "-", "X"];*/
 //   var dadosJuego = ["Servido", "No servido", "-", "X"];

var i = 0;
// DOM events for About popover
//$$('.popover-popover2').on('popover:open', function (e) {  });
//$$('.popover-popover2').on('popover:opened', function (e) {  });

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");
});


// Option 1. Using one 'page:init' handler for all pages
$$(document).on('page:init', function (e) {
    // Do something here when page loaded and initialized
    console.log(e);
   /* $$('.open-vertical').on('click', function () {
  app.dialog.create({
    title: 'Puntajes: ',
    buttons: [
      {
        text: '1',
      },
      {
        text: '2',
      },
      {
        text: '3',
      },
      {
        text: '4',
      },
      {
        text: '5',
      },
      {
        text: '-',
      },
      {
        text: 'X',
      },
    ],
    onClick: function (dialog, index) {
            if(index === 0){
              $$("#d_1_1").text(dados1[0]);
            }
            else if(index === 1){
                //Button 2 clicked
                $$("#d_1_1").text(dados1[1]);
            }
            else if(index === 2){
                //Button 3 clicked
                $$("#d_1_1").text(dados1[2]);
            }
            else if(index === 3){
                //Button 3 clicked
                $$("#d_1_1").text(dados1[3]);
            }
            else if(index === 4){
                //Button 3 clicked
                $$("#d_1_1").text(dados1[4]);
            }
            else if(index === 5){
                //Button 3 clicked
                $$("#d_1_1").text(dados1[5]);
            }
             else if(index === 6){
                //Button 3 clicked
                $$("#d_1_1").text(dados1[6]);
            }
        },
    verticalButtons: true,
  }).open();
});*/
})
// aca termina el Dialog

/*

$$("#popover1").on("click", function() {popover(0)});
$$("#popover2").on("click", function() {popover(1)});
$$("#popover3").on("click", function() {popover(2)});
$$("#popover4").on("click", function() {popover(3)});
$$("#popover5").on("click", function() {popover(4)});
$$("#popover6").on("click", function() {popover(5)});
$$("#popover7").on("click", function() {popover(6)});
function popover(n) {
  $$("#d_2_1").text(dados2[n])
}
// aca termina el popover1
$$("#1popover").on("click", function() {popover2(0)});
$$("#2popover").on("click", function() {popover2(1)});
$$("#3popover").on("click", function() {popover2(2)});
$$("#4popover").on("click", function() {popover2(3)});
$$("#5popover").on("click", function() {popover2(4)});
$$("#6popover").on("click", function() {popover2(5)});
$$("#7popover").on("click", function() {popover2(6)});
function popover2(n) {
  $$("#d_3_1").text(dados3[n])
}
*/

$$(document).on('page:init', '.page[data-name="anotador"]', function (e) {
// asigne clase valor a todas las celdas que pueden tener valor asignable, asigno a var local el id del tag capturado
  console.log(e);
  
 /* alert(dadosDoblegenerala[1]);*/
    if($$("#J1").val() == "") {$$('#Jugador1').text("Jugador 1")} else {$$('#Jugador1').text($$("#J1").val());}
    if($$("#J2").val() == "") {$$('#Jugador2').text("Jugador 2")} else {$$('#Jugador2').text($$("#J2").val());}
    // Vertical Buttons

    // capturar el boton seleccionado del popover
    var popSeleccion = "";
$$('popover1').on('click',function(){popSeleccion = "1";});
$$('popover2').on('click',function(){popSeleccion = "2";});
$$('popover3').on('click',function(){popSeleccion = "3";});
$$('popover4').on('click',function(){popSeleccion = "4";});
$$('popover5').on('click',function(){popSeleccion = "5";});
$$('popover6').on('click',function(){popSeleccion = "-";});
$$('popover7').on('click',function(){popSeleccion = "X";});



$$('.valor').on('click',function(){
var seleccionado = $$(this).attr('id');
console.log(seleccionado);
    var partes = seleccionado.split("_");

    // sabiendo la forma: d_1_1 puedo tener:
   var p0 = partes[0];
   var p1 = partes[1];
   var p2 = partes[2];
console.log("celda"+" - "+p1+" jugador "+p2);

// calcular el valor que se pone segun la celda seleccionada


//asignarlo a la celda del id asignado a "seleccionado"


//llamar a funcion calcularTotal(jugador) pasandole la columna de jugador con p2
// aca iria el for que pasa por los p1 hasta las 11 celdas

});
})

