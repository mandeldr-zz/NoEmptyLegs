angular.module('registration.controller', [])

.controller('registrationCtrl', function($scope, $stateParams, $rootScope, $location) {

  $scope.user = {
  	planeType: '',
  	capacity: '',
  	cost: '',
  	departureAirport: '',
    departureDate: '',
    destinationAirport: '',
    flightCrew: ''};

  $scope.flightVar = [];

  $scope.registration = function (flight){

	  	console.log($scope.flight);
	  	$scope.userList.push(flight);
	  	console.log($scope.userList);




  }

});
