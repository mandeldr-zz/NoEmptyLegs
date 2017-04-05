angular.module('user.controller', [])

.controller('UserCtrl', function($scope, $stateParams, $rootScope, $location, userService) {
  //user schema
  var user = {id: '', username: '', password: '', userType: '', number: '2894005444'};
  //owner
  var owner = {id: '01', username: 'owner1', password: 'owner1', userType: 'owner', number: '2894005444'};
  //customer
  var customer = {id: '02', username: 'customer1', password: 'customer1', userType: 'customer', number: '2894005444'};
  //crew
  var crew = {id: '03', username: 'crew1', password: 'crew1', userType: 'crew', number: '2894005444'};
  //user list
  var users = {owner, customer, crew};

  //scope user
  $scope.user = {username: '', password: ''};
  //remember me
  $scope.rememberMe = false;

  $scope.login = function (username, password) {
    //iterate through users and find user
            if ($scope.rememberMe == false) {
              $scope.user.username = '';
              $scope.user.password = '';
            }
            if(userService.login(username, password) == true){
              console.log("Hello")
              $location.path('/home');
            }
  
  }

  $scope.logout = function (){
    //assign credentials to the logged in user
    user.id = ''
    user.username = ''
    user.password = ''
    user.userType = ''
    //store on root scope for all controllers
    $rootScope.user = user;
    console.log($rootScope.user);
  }

  $scope.remember = function(){
    $scope.rememberMe = !$scope.rememberMe;
  }

});