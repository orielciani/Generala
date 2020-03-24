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
    var dadosEscalera = [20, 25, "-", "X"];
    var dadosFull = [30, 35, "-", "X"];
    var dadosPoker = [40, 45, "-", "X"];
    var dadosGenerala = [50, 55, "-", "X"];
    var dadosDoblegenerala = [100, 105, "-", "X"];

// DOM events for About popover
$$('.popover-popover2').on('popover:open', function (e) {  });
$$('.popover-popover2').on('popover:opened', function (e) {  });

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");

});

// Option 1. Using one 'page:init' handler for all pages
$$(document).on('page:init', function (e) {
    // Do something here when page loaded and initialized
    console.log(e);
})
// aca termina el Dialog
$$("#popover1").on("click", function() {popover(0)});
$$("#popover2").on("click", function() {popover(1)});
$$("#popover3").on("click", function() {popover(2)});
$$("#popover4").on("click", function() {popover(3)});
$$("#popover5").on("click", function() {popover(4)});
$$("#popover6").on("click", function() {popover(5)});
$$("#popover7").on("click", function() {popover(6)});
function popover(n) {
  $$("#d2_1").text(dados2[n])
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
  $$("#d3_1").text(dados3[n]);
  
}


// Option 2. Using live 'page:init' event handlers for each page
$$(document).on('page:init', '.page[data-name="about"]', function (e) {
    // Do something here when page with data-name="about" attribute loaded and initialized
    console.log(e);
    alert(dadosDoblegenerala[1]);
    if($$("#J1").val() == "") {$$('#Jugador1').text("Jugador 1")} else {$$('#Jugador1').text($$("#J1").val());}
    if($$("#J2").val() == "") {$$('#Jugador2').text("Jugador 2")} else {$$('#Jugador2').text($$("#J2").val());}
    // Vertical Buttons
var ac6 = app.actions.create({
  grid: true,
  buttons: [
    [
      {
        text: 'Button 1',
        onClick: function () {
        $$("#d1_1").text(dados1[0])
              }
      },
      {
        text: 'Button 2',
        onClick: function () {
        $$("#d1_1").text(dados1[1])
              }
      },
      {
        text: 'Button 3',
        onClick: function () {
        $$("#d1_1").text(dados1[2])
              }
      },
    ],
    [
      {
        text: 'Button 4',
      },
      {
        text: 'Button 5',
      },
      {
        text: 'Button 6',
      },
    ]
  ],
});
$$('.ac-6').on('click', function () {
    ac6.open();
});


















})