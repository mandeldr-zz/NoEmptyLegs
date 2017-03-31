angular.module('findatrip.controller', [])

.controller('FindCtrl', function($scope, $stateParams, $rootScope, $location, $http, $timeout, $q, $log) {



  $scope.searchByDate = false;
  $scope.departureDate = new Date();
  $scope.returnDate = new Date();

  $scope.searchByPrice = false;
  $scope.minPrice = 0;
  $scope.maxPrice = 0;

  $scope.searchByDestination = false;
 

 

  $scope.simulateQuery = false;
  $scope.isDisabled    = false;

  // list of `state` value/display objects
  
  $scope.querySearch   = querySearch;
  $scope.selectedItemChange = selectedItemChange;
  $scope.searchTextChange   = searchTextChange;

  $scope.newState = newState;

  function newState(state) {
    alert("Sorry! You'll need to create an airport for " + state + " first!");
  }

  function querySearch (query) {
    var results = query ? $scope.states.filter( createFilterFor(query) ) : $scope.states,
        deferred;
    if ($scope.simulateQuery) {
      deferred = $q.defer();
      $timeout(function () { deferred.resolve( results ); }, Math.random() * 1000, false);
      return deferred.promise;
    } else {
      return results;
    }
  }

  function searchTextChange(text) {
    $log.info('Text changed to ' + text);
  }

  function selectedItemChange(item) {
    $log.info('Item changed to ' + JSON.stringify(item));
  }

  /**
   * Build `states` list of key/value pairs
   */
  function loadAll() {
    var allAirports = ''
    for (var i = 1; i < $scope.data.length; i++){
      allAirports = allAirports + $scope.data[i][3].substring(1, $scope.data[i][3].length - 1) + ',';
    }
    return allAirports.split(',').map( function (state) {
      return {
        value: state.toLowerCase(),
        display: state
      };
    });
    
  }

  /**
   * Create filter function for a query string
   */
  function createFilterFor(query) {
    var lowercaseQuery = angular.lowercase(query);

    return function filterFn(state) {
      return (state.value.indexOf(lowercaseQuery) === 0);
    };

  }

  $scope.parseCSV = function() {
    
    $scope.states = loadAll();
  }

  $scope.readCSV = function() {
    // http get request to read CSV file content
    $http.get('data/airports.csv').success($scope.processData);

  };

  $scope.processData = function(allText) {
    // split content based on new line
    var allTextLines = allText.split(/\r\n|\n/);
    var headers = allTextLines[0].split(',');
    var lines = [];

      for ( var i = 0; i < allTextLines.length; i++) {
        // split content based on comma
        var data = allTextLines[i].split(',');
        if (data.length == headers.length) {
          var tarr = [];
          for ( var j = 0; j < headers.length; j++) {
            tarr.push(data[j]);
          }
          lines.push(tarr);
        }
      }
      $scope.data = lines;
      console.log($scope.data);
      $scope.states = loadAll();
    };
  

  $scope.toggleDateSelector = function (){
    $scope.searchByDate = !$scope.searchByDate;
  }

  $scope.togglePriceSelector = function (){
    $scope.searchByPrice = !$scope.searchByPrice;
  }

  $scope.toggleDestination = function (){
    $scope.searchByDestination = !$scope.searchByDestination;
    $scope.readCSV();
    
  }


});