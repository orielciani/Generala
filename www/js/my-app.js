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
    var dados1 = [1, 2, 3, 4, 5, "-", "X"];
    var dados2 = [2, 4, 6, 8, 10, "-", "X"];
    var dados3 = [3, 6, 9, 12, 15, "-", "X"];
    var dados4 = [4, 8, 12, 16, 20, "-", "X"];
    var dados5 = [5, 10, 15, 20, 25, "-", "X"];
    var dados6 = [6, 12, 18, 24, 30, "-", "X"];
    var dados7 = [20, 25, "-", "X"];
    var dados8 = [30, 35, "-", "X"];
    var dados9 = [40, 45, "-", "X"];
    var dados10 = [50, 55, "-", "X"];
    var dados11 = [100, 105, "-", "X"];


// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");

});

// Option 1. Using one 'page:init' handler for all pages
$$(document).on('page:init', function (e) {
    // Do something here when page loaded and initialized
    console.log(e);
});
// Option 2. Using live 'page:init' event handlers for each page
$$(document).on('page:init', '.page[data-name="about"]', function (e) {
    // Do something here when page with data-name="about" attribute loaded and initialized
    console.log(e);
    alert(dados11[1]);
    if($$("#J1").val() == "") {$$('#Jugador1').text("Jugador 1")} else {$$('#Jugador1').text($$("#J1").val());}
    if($$("#J2").val() == "") {$$('#Jugador2').text("Jugador 2")} else {$$('#Jugador2').text($$("#J2").val());}
// aca termina el popover1
// Create dynamic Popover
$$(".dynamic-popover").on("click", function () {
    idDelBoton = this.id;
    var partes = idDelBoton.split("_");
    p0 = partes[0];
    p1 = partes[1];
    p2 = partes[2];
var dynamicPopover = app.popover.create({
  targetEl: 'a.dynamic-popover',
  
  // Events
  on: {
    open: function (popover) {
      console.log('Popover open');

    },
    opened: function (popover) {
      console.log('Popover opened');
    },
  },
  content: '<div class="popover">'+
              '<div class="popover-inner">'+
                '<div class="block">'+
                  '<p>Puntaje:' + partes[1] + '</p>'+
              '<div class="row">'+
                '<div class="col-25"><button class="col button button-fill button-round" id="1popover">1</button></div>'+
                '<div class="col-25"><button class="col button button-fill button-round" id="2popover">2</button></div>'+
                '<div class="col-25"><button class="col button button-fill button-round" id="3popover">3</button></div>'+
                '<div class="col-25"><button class="col button button-fill button-round" id="4popover">4</button></div>'+
              '</div>'+
              '<div class="row">'+
                '<div class="col-25"><button class="col button button-fill button-round" id="5popover">5</button></div>'+
                '<div class="col-25"><button class="col button button-fill button-round" id="6popover">-</button></div>'+
                '<div class="col-50"><button class="col button button-fill button-round" id="7popover">Tachar</button></div>'+
              '</div>'+
            '</div></div>'+
                  '<p><a href="#" class="link popover-close">Close me</a></p>'+
                '</div>'+
              '</div>'+
            '</div>',
});
// Events also can be assigned on instance later
dynamicPopover.on('close', function (popover) {
  console.log('Popover close');
});
dynamicPopover.on('closed', function (popover) {
  console.log('Popover closed');
});

// Open dynamic popover
$$('.dynamic-popover').on('click', function () {
  dynamicPopover.open();
});})



















})