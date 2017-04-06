angular.module('booking.controller', [])

.controller('BookingCtrl', function($scope, $stateParams, $rootScope, $location, Flights, $mdDialog) {
  
  $scope.confirmTrip = function(ev, flightID){
    console.log(Flights.get(flightID));
    if(Flights.get(flightID).bookingID != null){
      $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title('Flight Confirmed')
        .textContent('Your flight is departing as scheduled')
        .ariaLabel('Alert Dialog Demo')
        .ok('Ok')
        .targetEvent(ev)
    );
    }
    else if(Flights.get(flightID).bookingID == null){
      $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title('Flight Does Not Exist')
        .textContent('Your Flight ID does not match our records')
        .ariaLabel('Alert Dialog Demo')
        .ok('Ok')
        .targetEvent(ev)
    );
    }
  }

  $scope.cancelATrip = function(ev, flightID){
    if(Flights.get(flightID) == null || Flights.get(flightID).bookingID == null){
      $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title('Flight Does Not Exist')
        .textContent('Your Flight ID does not match our records')
        .ariaLabel('Alert Dialog Demo')
        .ok('Ok')
        .targetEvent(ev)
    );
    }
    else if(Flights.get(flightID) != null){
      console.log(Flights.cancelFlight(flightID));
      console.log(Flights.get(flightID));
      $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title('Trip Cancelled')
        .textContent('Your trip has been cancelled')
        .ariaLabel('Alert Dialog Demo')
        .ok('Ok')
        .targetEvent(ev)
    );
    }
  }

  $scope.cancelAPlane = function(ev, flightID){
    if(Flights.get(flightID) == null){
      $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title('Flight Does Not Exist')
        .textContent('Your Flight ID does not match our records')
        .ariaLabel('Alert Dialog Demo')
        .ok('Ok')
        .targetEvent(ev)
    );
    }
    else if(Flights.get(flightID) != null){
      var flight = Flights.get(flightID);
      Flights.remove(flight);
      $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title('Plane Cancelled')
        .textContent('Your plane has been cancelled')
        .ariaLabel('Alert Dialog Demo')
        .ok('Ok')
        .targetEvent(ev)
    );
    }
  }

  $scope.cancelAFlightCrew = function(ev, flightID){
    if(Flights.get(flightID) != null){
      if(Flights.get(flightID).flightCrew == true){
      Flights.cancelFlightCrew(Flights.get(flightID));
      $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title('Flight Crew Cancelled')
        .textContent('Your flight crew booking has been cancelled')
        .ariaLabel('Alert Dialog Demo')
        .ok('Ok')
        .targetEvent(ev)
    );
    
    }
    else if(Flights.get(flightID) == null || Flights.get(flightID).flightCrew == null || Flights.get(flightID).flightCrew == false){
  
      $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title('Flight Does Not Exist')
        .textContent('Your Flight ID does not match our records')
        .ariaLabel('Alert Dialog Demo')
        .ok('Ok')
        .targetEvent(ev)
    );
  }
  }
  else if(Flights.get(flightID) == null){
    $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title('Flight Does Not Exist')
        .textContent('Your Flight ID does not match our records')
        .ariaLabel('Alert Dialog Demo')
        .ok('Ok')
        .targetEvent(ev)
    );
  }
  }

  $scope.confirm = false;

  $scope.toggleConfirm = function(){
    $scope.confirm = !$scope.confirm;    
  }

  $scope.cancelTrip = false;

  $scope.toggleCancelTrip = function(){
    $scope.cancelTrip = !$scope.cancelTrip;    
  }

  $scope.cancelPlane = false;

  $scope.toggleCancelPlane = function(){
    $scope.cancelPlane = !$scope.cancelPlane;    
  }

  $scope.cancelFlightCrew = false;

  $scope.toggleCancelFlightCrew = function(){
    $scope.cancelFlightCrew = !$scope.cancelFlightCrew;    
  }

});
