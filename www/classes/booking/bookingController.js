angular.module('booking.controller', [])

.controller('BookingCtrl', function($scope, $stateParams, $rootScope, $location, Flights) {
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

  $scope.registerFlight = function (flight){
      Flights.createFlight(flight);
      console.log(flight);
	  	$location.path('/home');
  }

});
