// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('cardsAgainst', ['ionic', 'ngRiffle'])//'vxWamp'])

app.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/')

  $stateProvider 
  .state('home', {
    url: '/',
    templateUrl: 'templates/splash.html'
  })
  .state('room', {
    url: '/room',
    templateUrl: 'templates/room.html'
  })
})
.config(['$riffleProvider', function($riffleProvider){
  $riffleProvider.init('xs.demo.exis.cardsagainst', {}); 
}])
.config(function ($httpProvider) {
  //disregard browser pre-flight checks
  var contentType = { 'Content-Type' : 'application/x-www-form-urlencoded' };
  for (var verb in $httpProvider.defaults.headers)
  {
    $httpProvider.defaults.headers[verb] = contentType;
  }
})
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
