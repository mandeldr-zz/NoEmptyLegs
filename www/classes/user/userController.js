angular.module('user.controller', [])

.controller('UserCtrl', function($scope, $stateParams, $rootScope, $location, userService) {
  //remember me
  $scope.rememberMe = false;
  $scope.user = {username: '', password: ''};
  $scope.login = function (username, password) {
            $scope.user.username = username;
            $scope.user.password = password;
    //iterate through users and find user
            if ($scope.rememberMe == false) {
              $scope.user.username = '';
              $scope.user.password = '';
            }
            else if($scope.rememberMe == true) {
              //assign credentials to the logged in user
              $scope.user.username = username;
              $scope.user.password = password;
            }
            if(userService.login(username, password) == true){
              console.log("Hello")
              $location.path('/home');
            }
  
  }



  $scope.remember = function(){
    $scope.rememberMe = !$scope.rememberMe;
  }

});