angular.module('findatrip.controller', [])

.controller('FindCtrl', function($scope, $stateParams, $rootScope, $location, $http, $timeout, $q, $log, flightFilter) {


  //date selector scope variables
  $scope.searchByDate = false;
  $scope.departureDate = new Date();

  //search by price scope variables
  $scope.searchByPrice = false;
  $scope.minPrice = 0;
  $scope.maxPrice = 0;

  //search by departure scope variables  
  $scope.searchByDeparture = false;
  $scope.simulateQuery = false;
  $scope.isDisabled    = false;
  $scope.querySearch   = querySearch;
  $scope.selectedItemChange = selectedItemChange;
  $scope.searchTextChange   = searchTextChange;
  $scope.newState = newState;
  $scope.departureAirport = '';

  //search by capacity scope variables
  $scope.capacity = 0;
  $scope.searchByCapacity = false;
  $scope.sizes = [
          "Light Jet (6-Seats)",
          "Mid Size Jet (8-Seats)",
          "Heavy Jet (12-Seats)",
          "Ultra Long Range (14-Seats)",
          "Insane (18-Seats)"
      ];

  //flight crew selection scope variables
  $scope.flightCrew = false;

  $scope.setDepartureDate = function(date){
    $scope.departureDate = date;
  }

  $scope.changeMinPrice = function(minPrice){
    $scope.minPrice = minPrice;
  }

  $scope.changeMaxPrice = function(maxPrice){
    $scope.maxPrice = maxPrice;
  }

  $scope.search = function(){
    var searchQuery = {
      departureDateActive: $scope.searchByDate,
      departureDate: $scope.departureDate,
      priceFilterActive: $scope.searchByPrice,
      minPrice: $scope.minPrice,
      maxPrice: $scope.maxPrice,
      departureAirport: $scope.departureAirport,
      capacity: $scope.capacity,
      flightCrew: $scope.flightCrew
    }
    flightFilter.queryFlightList(searchQuery);
    $location.path('/availableflights');
    console.log(searchQuery);
  }

  $scope.setCapacity = function(capacity){
    if(capacity == "Light Jet (6-Seats)"){
      $scope.capacity = 6;
    }
    if(capacity == "Mid Size Jet (8-Seats)"){
      $scope.capacity = 8;
    }
    if(capacity == "Heavy Jet (12-Seats)"){
      $scope.capacity = 12;
    }
    if(capacity == "Ultra Long Range (14-Seats)"){
      $scope.capacity = 14;
    }
    if(capacity == "Insane (18-Seats)"){
      $scope.capacity = 18;
    }
    
    
  }

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
    if(item === undefined){
      $scope.departureAirport = '';
    }
    else{
      $scope.departureAirport = item.display;
      console.log($scope.departureAirport);
    }
    
  }
  
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
      $scope.states = loadAll();
    };
  
  $scope.toggleDateSelector = function (){
    $scope.searchByDate = !$scope.searchByDate;
  }

  $scope.togglePriceSelector = function (){
    $scope.searchByPrice = !$scope.searchByPrice;
  }

  $scope.toggleDeparture = function (){
    $scope.searchByDeparture = !$scope.searchByDeparture;
    $scope.readCSV(); 
  }

  $scope.toggleCapcity = function (){
    $scope.searchByCapacity = !$scope.searchByCapacity;
  }

  $scope.toggleFlightCrew = function (){
    $scope.flightCrew = !$scope.flightCrew;
  }

});