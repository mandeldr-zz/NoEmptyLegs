angular.module('home.controller', [])

.controller('HomeCtrl', function($scope, $stateParams, $rootScope, $location) {

  $scope.user = $rootScope.user;

  $scope.logout = function (){
    //user schema
    var user = {id: '', username: '', password: '', userType: ''};
    //store on root scope for all controllers
    $rootScope.user = user;
    console.log($rootScope.user);
    $location.path('side-menu/login'); 
  }

});