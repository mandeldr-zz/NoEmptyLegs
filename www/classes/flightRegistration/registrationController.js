angular.module('registration.controller', [])

.controller('flightRegistrationCtrl', function($scope, $stateParams, $rootScope, $location, Flights) {
  $scope.flight = {
    planeType: '',
    capacity: '',
    cost: '',
    departureAirport: '',
    departureDate: '',
    destinationAirport: '',
    flightCrew: false,
    bookingID: null
  }

  $scope.flights = [];

  $scope.registerFlight = function (flight){
      Flights.createFlight(flight);
      console.log(flight);
	  	$location.path('/home');
  }

  $scope.checkFlightCrew = function(flight){
      if(flight.flightCrew == undefined){
        flight.flightCrew = false;
      }else if(flight.flightCrew == false) {
        flight.flightCrew = true;
      }else{
        flight.flightCrew = false;
      }
  }

  ;

});
