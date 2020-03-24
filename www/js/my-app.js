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
    // Do something here when page loaded and initialized
    console.log(e);
})

$$(document).on('page:init', '.page[data-name="anotador"]', function (e) {
// asigne clase valor a todas las celdas que pueden tener valor asignable, asigno a var local el id del tag capturado
  console.log(e);
  
 /* alert(dadosDoblegenerala[1]);*/
    if($$("#J1").val() == "") {$$('#Jugador1').text("Jugador 1")} else {$$('#Jugador1').text($$("#J1").val());}
    if($$("#J2").val() == "") {$$('#Jugador2').text("Jugador 2")} else {$$('#Jugador2').text($$("#J2").val());}
    // Vertical Buttons

    // capturar el boton seleccionado del popover
$$('#popover1').on('click',function(){popSeleccion(1); app.popover.close();});
$$('#popover2').on('click',function(){popSeleccion(2); app.popover.close();});
$$('#popover3').on('click',function(){popSeleccion(3); app.popover.close();});
$$('#popover4').on('click',function(){popSeleccion(4); app.popover.close();});
$$('#popover5').on('click',function(){popSeleccion(5); app.popover.close();});
$$('#popover6').on('click',function(){popSeleccion("-"); app.popover.close();});
$$('#popover7').on('click',function(){popSeleccion("X"); app.popover.close();});

$$('#servido').on('click',function(){popSeleccion("s"); app.popover.close();});
$$('#noServido').on('click',function(){popSeleccion("ns"); app.popover.close();});
$$('#juegoCancela').on('click',function(){popSeleccion("-"); app.popover.close();});
$$('#juegoAnula').on('click',function(){popSeleccion("X"); app.popover.close();});


   var p1, p2;


$$('.valor').on('click',function(){
var seleccionado = $$(this).attr('id');
    var partes = seleccionado.split("_");

    // sabiendo la forma: d_1_1 puedo tener:
   var p0 = partes[0];
    p1 = partes[1];
    p2 = partes[2];
});

function popSeleccion(selecPop){
// calcular el valor que se pone segun la celda seleccionada
var valorCelda;
var res;

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

if (selecPop == "X"){
res = "X";
}else if (selecPop == "-") {
  res = "-";
}

$$('#d_'+p1+'_'+p2).html('<a class="link popover-open" href="#" data-popover=".popover-links">'+res+'</a>');
}else{

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

if (selecPop == "X"){
res = "X";
}else if (selecPop == "-") {
  res = "-";
}else if (selecPop == "ns") {
  res += 0;
}else if (selecPop == "s") {
  res += 5;
}

$$('#d_'+p1+'_'+p2).html('<a class="link popover-open" href="#" data-popover=".popover-juegos">'+res+'</a>');
}


//llamar a funcion calcularTotal()
calcularTotal();
};
// aca va el for que pasa por los p1 hasta las 11 celdas
function calcularTotal(){
var totalJugador1 = 0;
var totalJugador2 = 0;

for (var i = 1; i <= 11; i++) {
var valor1 = $$('#d_'+i+'_1>a').text();
var valor2 = $$('#d_'+i+'_2>a').text();
if(valor1 == "X" || valor1 == "-"){  
}else{
totalJugador1 += parseInt(valor1);
}

if(valor2 == "X" || valor2 == "-"){  
}else{
totalJugador2 += parseInt(valor2);
}

}

$$('#total1').text(totalJugador1);
$$('#total2').text(totalJugador2);

};

})