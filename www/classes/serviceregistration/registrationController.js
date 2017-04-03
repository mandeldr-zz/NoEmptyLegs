angular.module('registration.controller', [])

.controller('registrationCtrl', function($scope, $stateParams, $rootScope, $location, services) {

  $scope.user = {
  	planeType: '',
  	capacity: '',
  	cost: '',
  	departureAirport: '',
    departureDate: '',
    destinationAirport: '',
    flightCrew: false};

  $scope.flights = [];

  $scope.registration = function (flight){
      service.createFlight(flight);
      console.log(flight);
	  	$location.path('/home');




  }

});
