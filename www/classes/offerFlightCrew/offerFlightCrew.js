angular.module('flightCrew.controller', [])

.controller('offerFlightCrewCtrl', function($scope, $stateParams, $rootScope, $location, $mdDialog, Flights) {

  $scope.flights = Flights.all();
  $scope.newFlights = [];

  for (var i = 0; i < $scope.flights.length; i++){
    if ($scope.flights[i].flightCrew == false){
        $scope.newFlights.push($scope.flights[i]);
        console.log($scope.flights[i]);
    }
  }

  $scope.book = function (ev, flightID){
    console.log(flightID);
    var selectedFlight = $scope.flights[flightID];

    console.log(selectedFlight);
    var confirm = $mdDialog.confirm()
          .title('Please confirm your booking')
          .htmlContent('')
          .ariaLabel('')
          .targetEvent(ev)
          .ok('Confirm')
          .cancel('Cancel');
          $mdDialog.show(confirm).then(function() {
    $scope.flights[flightID].flightCrew = true;
  }, function() {
    $scope.status = 'You decided to keep your debt.';
  })

};

});
