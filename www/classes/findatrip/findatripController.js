angular.module('findatrip.controller', [])

.controller('FindCtrl', function($scope, $stateParams, $rootScope, $location) {



  $scope.searchByDate = false;
  $scope.departureDate = new Date();
  $scope.returnDate = new Date();

  $scope.toggleDateSelector = function (){
    $scope.searchByDate = !$scope.searchByDate;
  }


});