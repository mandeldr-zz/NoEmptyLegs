angular.module('flight.service', [])

.service('flightFilter', function(Flights) {
    this.availableFlights = [];

    this.setAvailableFlights = function(flights){
      this.availableFlights = flights;
    }

    this.queryFlightList = function (query) {
        console.log(query);

        //filter by capacity
        var flights = Flights.all();
        var flightsByCapacity = [];
        for(var i = 0; i < flights.length; i++){
          if(flights[i].capacity >= query.capacity){
            flightsByCapacity.push(flights[i]);
          }
        }
        if(flightsByCapacity.length > 0){
          this.setAvailableFlights(flightsByCapacity);
        }
        console.log(flightsByCapacity);

        //filter by flight crew
        var flights = this.getAvailableFlights();
        var flightsByFlightCrew = [];
        if(query.flightCrew == true){
          for(var i = 0; i < flights.length; i++){
            if(flights[i].flightCrew == true){
              flightsByFlightCrew.push(flights[i]);
            }
          }
        }
        if(flightsByFlightCrew.length > 0 && query.flightCrew == true){
          this.setAvailableFlights(flightsByFlightCrew);
        }
        console.log(flightsByFlightCrew);

        //filter by airport name
        var flights = this.getAvailableFlights();
        var flightsByAirport = [];
        if(query.departureAirport != ""){
          for(var i = 0; i < flights.length; i++){
            if(flights[i].departureAirport == query.departureAirport){
              flightsByAirport.push(flights[i]);
            }
          }
        }
        if(flightsByAirport.length > 0 && query.departureAirport != ""){
          this.setAvailableFlights(flightsByAirport);
        }
        console.log(flightsByAirport);

        //filter by min and max price
        var flights = this.getAvailableFlights();
        var flightsByPrice = [];
        if(query.priceFilterActive == true){
          for(var i = 0; i < flights.length; i++){
            if(flights[i].cost >= query.minPrice && flights[i].cost <= query.maxPrice){
              flightsByPrice.push(flights[i]);
            }
          }
        }
        if(flightsByPrice.length > 0 && query.priceFilterActive == true){
          this.setAvailableFlights(flightsByPrice);
        }
        console.log(flightsByPrice);

        //filter by date of departure
        var flights = this.getAvailableFlights();
        var flightsByDate = [];
        if(query.departureDateActive == true){
          for(var i = 0; i < flights.length; i++){
            if(flights[i].departureDate.getDate() == query.departureDate.getDate() && flights[i].departureDate.getFullYear() == query.departureDate.getFullYear() && 
              flights[i].departureDate.getMonth() == query.departureDate.getMonth()){
              flightsByDate.push(flights[i]);
            }
          }
        }
        if(flightsByDate.length > 0 && query.departureDateActive == true){
          this.setAvailableFlights(flightsByDate);
        }
        console.log(flightsByDate);

        //now set available flights based off sorted arrays
        

    }

    this.getAvailableFlights = function(){
      console.log(this.availableFlights);
      return (this.availableFlights);
    }
})

.service('Flights', function() {
  // Some flight data
  this.flights = [{
    id: 0,
    planeType: 'Bombardier Challenger 604',
    capacity: 10,
    cost: 13100,
    img: 'img/bombardierChallenger.jpeg',
    departureAirport: 'Muskoka Airport',
    departureDate: new Date(),
    destinationAirport: 'Saskatoon John G. Diefenbaker International Airport',
    flightCrew: false,
    bookingID: null
  }, {
    id: 1,
    planeType: 'Dassault Falcon 900EX',
    capacity: 14,
    cost: 15600,
    img: 'img/dassault.jpg',
    departureAirport: 'Toronto Aerodrome',
    departureDate: new Date(),
    destinationAirport: 'Cuba Municipal Airport',
    flightCrew: true,
    bookingID: null
  }, {
    id: 2,
    planeType: 'Cessna Citation Ultra',
    capacity: 7,
    cost: 6700,
    img: 'img/cessna.jpg',
    departureAirport: 'Calgary International Airport',
    departureDate: new Date(),
    destinationAirport: 'Quebec Jean Lesage International Airport',
    flightCrew: false,
    bookingID: null
  }, {
    id: 3,
    planeType: 'Bombardier Challenger 650',
    capacity: 12,
    cost: 5000,
    img: 'img/challenger.JPG',
    departureAirport: 'New York Mills Municipal Airport',
    departureDate: new Date(),
    destinationAirport: 'Los Angeles International Airport',
    flightCrew: true,
    bookingID: null
  }, {
    id: 4,
    planeType: 'Bombardier Challenger 601-1A',
    capacity: 16,
    cost: 18050,
    img: 'img/challenger601.JPG',
    departureAirport: 'Florida Airport',
    departureDate: new Date(),
    destinationAirport: 'Nevada Municipal Airport',
    flightCrew: true,
    bookingID: null
  }];

  
  this.createFlight = function(flight){
      flight.id = this.flights.length;
      flight.img = 'img/bombardierChallenger.jpeg';
      flight.bookingID = null;
      this.flights.push(flight);
      console.log(this.flights);
  }
  this.all = function() {
    return (this.flights);
  }
  this.set = function(flights) {
    this.flights = flights;
  }
  this.remove = function(flight) {
    this.flights.splice(flights.indexOf(flight), 1);
  }
  this.get = function(flightId) {
    for (var i = 0; i < flights.length; i++) {
      if (this.flights[i].id === parseInt(flightId)) {
        return this.flights[i];
      }
    }
    return null;
  }
  this.addFlightCrew = function(flight){
    for(var i = 0; i < this.flights.length; i++){
      if(this.flights[i].id == flight.id){
        this.flights[i].flightCrew = true;
      }
    }
  }
  this.bookFlight = function(flight){
    for(var i = 0; i < this.flights.length; i++){
      if(this.flights[i].id == flight.id){
        this.flights[i].bookingID = flight.id;
      }
    }
  }
  
});
