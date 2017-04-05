angular.module('home.controller', [])

.controller('HomeCtrl', function($scope, $stateParams, $rootScope, $location) {

  $scope.logout = function (){
    //store on root scope for all controllers
    $location.path('/login'); 
  }

});