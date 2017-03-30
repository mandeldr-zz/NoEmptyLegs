angular.module('findatrip.controller', [])

.controller('FindCtrl', function($scope, $stateParams, $rootScope, $location) {



  $scope.searchByDate = false;
  $scope.departureDate = new Date();
  $scope.returnDate = new Date();

  $scope.searchByPrice = false;
  $scope.minPrice = 0;
  $scope.maxPrice = 0;

  $scope.toggleDateSelector = function (){
    $scope.searchByDate = !$scope.searchByDate;
  }

  $scope.togglePriceSelector = function (){
    $scope.searchByPrice = !$scope.searchByPrice;
  }


});