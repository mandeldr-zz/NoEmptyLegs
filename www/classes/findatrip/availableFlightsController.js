angular.module('availableflights.controller', [])

.controller('AvailCtrl', function($scope, $stateParams, $rootScope, $location, $http, $timeout, $q, $log, $mdDialog, flightFilter) {

  $scope.flights = flightFilter.getAvailableFlights();
  console.log($scope.flights);

  if($scope.flights.length == 0){
    $scope.showFlights = true;
  }
  else{
    $scope.showFlights = false 
  } 

  $scope.book = function(ev){
    console.log(ev);
    var selectedFlight = $scope.flights[ev];
    var confirm = $mdDialog.confirm()
          .title('Please confirm your booking')
          .htmlContent('')
          .ariaLabel('')
          .targetEvent(ev)
          .ok('Confirm')
          .cancel('Cancel');
          $mdDialog.show(confirm).then(function() {
    $scope.status = 'You decided to get rid of your debt.';
  }, function() {
    $scope.status = 'You decided to keep your debt.';
  });

  }

});