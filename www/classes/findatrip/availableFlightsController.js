angular.module('availableflights.controller', [])

.controller('AvailCtrl', function($scope, $stateParams, $rootScope, $location, $http, $timeout, $q, $log, $mdDialog, flightFilter, $cordovaSms, $ionicPlatform, Flights, userService) {

  $scope.flights = flightFilter.getAvailableFlights();
  $scope.flightList = Flights.all();
  console.log($scope.flights);

  if($scope.flights.length == 0){
    $scope.showFlights = true;
  }
  else{
    $scope.showFlights = false 
  } 

  $scope.book = function(ev, flightID){
    console.log(flightID);
    var selectedFlight = $scope.flightList[flightID];

    console.log(selectedFlight);
    var confirm = $mdDialog.confirm()
          .title('Please confirm your booking')
          .htmlContent('')
          .ariaLabel('')
          .targetEvent(ev)
          .ok('Confirm')
          .cancel('Cancel');
          $mdDialog.show(confirm).then(function() {
    Flights.bookFlight(selectedFlight);
    $scope.sendSMS($scope.flightList[flightID].bookingID);
  }, function() {
    $scope.status = 'You decided to keep your debt.';
  });

  }
 
  $ionicPlatform.ready(function () {
 
    var options = {
      replaceLineBreaks: false, // true to replace \n by a new line, false by default
      android: {
        intent: '' // send SMS with the native android SMS messaging
          //intent: '' // send SMS without open any other app
          //intent: 'INTENT' // send SMS inside a default SMS app
      }
    };
 
    $scope.sendSMS = function(msg) {
 
      $cordovaSms
        .send(userService.getUser().phoneNumber, 'This is your flight ID ' + msg, options)
        .then(function() {
          alert('Success');
          // Success! SMS was sent
        }, function(error) {
          alert('Error');
          // An error occurred
        });
    }
  });


});