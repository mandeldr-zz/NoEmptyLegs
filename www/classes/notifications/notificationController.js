angular.module('notifications.controller', [])

.controller('NotificationCtrl', function($scope, Twilio, $stateParams, $rootScope, $location, $http, $timeout, $q, $log, $mdDialog, flightFilter, Flights, userService) {

  $scope.receiveNotifications = false;

  $scope.toggleNotifications = function(){
    $scope.receiveNotifications = !$scope.receiveNotifications;
    console.log($scope.receiveNotifications);
    userService.receiveNotifications($scope.receiveNotifications);
  }
  

});