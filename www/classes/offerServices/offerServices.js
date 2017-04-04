angular.module('offerServices.controller', [])

.controller('offerServicesCtrl', function($scope, $stateParams, $rootScope, $location, $mdDialog, Flights) {

  $scope.flights = Flights.all();
  $scope.newFlights = [];

  for (var i = 0; i < $scope.flights.length; i++){
    if ($scope.flights[i].flightCrew == false){
        $scope.newFlights.push($scope.flights[i]);
    }
  }

  $scope.flights = $scope.newFlights;

  $scope.book = function (ev){
    console.log(ev);
    var selectedFlight = $scope.flights[ev];

    console.log(selectedFlight);
    var confirm = $mdDialog.confirm()
          .title('Please confirm your booking')
          .htmlContent('')
          .ariaLabel('')
          .targetEvent(ev)
          .ok('Confirm')
          .cancel('Cancel');
          $mdDialog.show(confirm).then(function() {
    $scope.flights[ev].flightCrew = true;
  }, function() {
    $scope.status = 'You decided to keep your debt.';
  })

};

});
