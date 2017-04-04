angular.module('user.services', [])

.service('userService', function($location, $mdDialog) {

  var userList = [];

  var owner = {id: '01', username: 'owner1', password: 'owner1', userType: 'owner'};
  //customer
  var customer = {id: '02', username: 'customer1', password: 'customer1', userType: 'customer'};
  //crew
  var crew = {id: '03', username: 'crew1', password: 'crew1', userType: 'crew'};

    userList.push(owner);
    userList.push(customer);
    userList.push(crew);

    this.login = function(username, password){
      for (var i in userList){
        try{
          if(userList[i].username == username && userList[i].password == password){
            console.log("Authenticated");
            //assign credentials to the logged in user
            //store on root scope for all controllers
            //check if rememberMe is selected
            //if ($scope.rememberMe == false) {
              //$scope.user.username = '';
              //$scope.user.password = '';
            //}
            //$location.path('/home');
            return true;
          }
        }
        catch(err) {
        }
    }
    }

    this.createAccount = function(user, ev){
        if(user.password == user.passwordVerified){
          userList.push(user);
          console.log(userList);
          $location.path('/home');
        }else{
            var alert = $mdDialog.show(
              $mdDialog.alert()
                .parent(angular.element(document.querySelector('#popupContainer')))
                .clickOutsideToClose(true)
                .title('Error')
                .textContent('Passwords do not match!')
                .ariaLabel('Alert Dialog Demo')
                .ok('Got it!')
                .targetEvent(ev)
      );
        }
        
    }

    this.users = function(){
      return userList;
    }

    this.signOut = function(){

    }

});
