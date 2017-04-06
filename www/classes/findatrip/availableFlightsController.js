angular.module('availableflights.controller', [])

.controller('AvailCtrl', function($scope, Twilio, $stateParams, $rootScope, $location, $http, $timeout, $q, $log, $mdDialog, flightFilter, Flights, userService) {

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
    $scope.submit($scope.flightList[flightID]);
  }, function() {
    $scope.status = 'You decided to keep your debt.';
  });

  }

  $scope.submit = function (msg) {

    if(userService.getUser().receiveNotifications == true){

    var body = 'You have successfully booked a flight!' + "\n"
      + 'Plane Type: ' + msg.planeType + "\n"
      + 'Capacity: ' + msg.capacity + "\n"
      + 'Cost: ' + msg.cost + "\n"
      + 'Departure Airport: ' + msg.departureAirport + "\n"
      + 'Departure Date: ' + msg.departureDate + "\n"
      + 'Destination Airport: ' + msg.destinationAirport + "\n"
      + 'In Flight Service: ' + msg.flightCrew + "\n"
      + 'BookingID: ' + msg.bookingID;


    Twilio.create('Messages', {
      From: '+12898135967',
      To: '+1' + userService.getUser().phoneNumber,
      Body: body
    })
    .success(function (data, status, headers, config) {
      // Success - do something
    })
    .error(function (data, status, headers, config) {
      console.log(data);
    });
  }
};

});