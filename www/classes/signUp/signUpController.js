angular.module('signUp.controller', [])

.controller('signUpCtrl', function($scope, $stateParams, $rootScope, $location, userService) {

  $scope.user = {
  	title: '', 
  	firstName: '', 
  	lastName: '', 
  	email: '', 
  	username: '', 
  	password: '',
  	passwordVerified: ''};

  $scope.userList = [];

  $scope.signUp = function (user, ev){
      userService.createAccount(user);
	  	console.log(user);
  }


});