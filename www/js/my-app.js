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

$$('#servido').on('click',function(){popSeleccion("s"); console.log(popSeleccion); app.popover.close();});
$$('#noServido').on('click',function(){popSeleccion("ns"); app.popover.close();});
$$('#juegoCancela').on('click',function(){popSeleccion("-"); app.popover.close();});
$$('#juegoAnula').on('click',function(){popSeleccion("X"); app.popover.close();});


   var p1, p2;


$$('.valor').on('click',function(){
var seleccionado = $$(this).attr('id');
console.log(seleccionado);
    var partes = seleccionado.split("_");

    // sabiendo la forma: d_1_1 puedo tener:
   var p0 = partes[0];
    p1 = partes[1];
    p2 = partes[2];
console.log("celda"+" - "+p1+" jugador "+p2);

});

function popSeleccion(selecPop){
// calcular el valor que se pone segun la celda seleccionada
var valorCelda;
var res;
console.log(p1);
console.log(p2);
console.log(selecPop);

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
}else {};
console.log('#d_'+p1+"_"+p2);
console.log(res);
$$('#d_'+p1+'_'+p2).html(res);

};
//asignarlo a la celda del id asignado a "seleccionado"

//llamar a funcion calcularTotal(jugador) pasandole la columna de jugador con p2
// aca iria el for que pasa por los p1 hasta las 11 celdas


/*
function cambiarValor(idTomado,valor) {
      // funcion global para cambiar el valor clickeado
$$('#'+idTomado).text(valor);



    };

*/
})

