angular.module('availableflights.controller', [])

.controller('AvailCtrl', function($scope, $stateParams, $rootScope, $location, $http, $timeout, $q, $log, flightFilter) {

  $scope.flights = flightFilter.getAvilableFlights();

});