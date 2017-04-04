// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('noemptylegs', ['ionic', 'ngMaterial', 'starter.services', 'user.controller', 'home.controller', 'findatrip.controller', 'signUp.controller', 'availableflights.controller', 'user.services', 'registration.controller', 'flightCrew.controller', 'offerServices.controller'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})


.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    .state('login', {
    url: '/login',
    templateUrl: 'classes/user/login.html',
    controller: 'UserCtrl'

  })
    .state('findatrip', {
    url: '/findatrip',
    templateUrl: 'classes/findatrip/findatrip.html',
    controller: 'FindCtrl'
  })
    .state('availableflights', {
    url: '/availableflights',
    templateUrl: 'classes/findatrip/availableFlights.html',
    controller: 'AvailCtrl'
  })
    .state('home', {
    url: '/home',
    templateUrl: 'classes/home/home.html',
    controller: 'HomeCtrl'
  })
    .state('signUp', {
      url:'/signUp',
      templateUrl: 'classes/signUp/signUp.html',
      controller: 'signUpCtrl'
  })
    .state('registerFlight', {
      url:'/registerFlight',
      templateUrl: 'classes/flightRegistration/registerFlight.html',
      controller: 'flightRegistrationCtrl'
  })
    .state('offerFlightCrew', {
      url:'/offerFlightCrew',
      templateUrl: 'classes/offerFlightCrew/offerFlightCrew.html',
      controller: 'offerFlightCrewCtrl'
  })
    .state('offerServices', {
      url:'/offerServices',
      templateUrl: 'classes/offerServices/offerServices.html',
      controller: 'offerServicesCtrl'
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');

});
