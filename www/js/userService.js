angular.module('user.services', [])

.service('userService', function($location, $mdDialog, Users) {

    this.userList = [];
    this.user = {};

    this.login = function(username, password){

      var users = Users.all();
      for (var i = 0; i < users.length; i++){
          if(users[i].username == username && users[i].password == password){
            console.log("Authenticated");
            this.setUser(users[i]);
            return true;
          }
      }
    }

    this.setUser = function(user){
      this.user = user;
    }

    this.createAccount = function(user, ev){
        if(user.password == user.passwordVerified){
          Users.createAccount(user);
          this.login(user.username, user.password);
          console.log(this.userList);
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
})

.service('Users', function() {
  // Some user data
  this.users = [{id: '01', username: 'owner1', password: 'owner1', userType: 'owner'},
   {id: '02', username: 'customer1', password: 'customer1', userType: 'customer'},
   {id: '03', username: 'crew1', password: 'crew1', userType: 'crew'}];

  
  this.createAccount = function(user){
      this.users.push(user);
      console.log(user);
  }
  this.all = function() {
    return (this.users);
  }
});
