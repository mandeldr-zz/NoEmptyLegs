angular.module('starter.services', [])

.service('flightFilter', function(Flights) {
    this.availableFlights = Flights.all();

    this.queryFlightList = function (query) {
        console.log(query);
        var flights = Flights.all();

        //filter by capacity
        var flightsByCapacity = [];
        for(var i = 0; i < flights.length; i++){
          if(flights[i].capacity == 0){
            this.availableFlights = flights
            break;
          }
          else if(flights[i].capacity >= query.capacity){
            flightsByCapacity.push(flights[i]);
          }
        }
        if(flightsByCapacity != null){
          this.availableFlights = flightsByCapacity;
        }
        console.log(Flights.all());
    }

    this.getAvilableFlights = function(){
      console.log(this.availableFlights);
      return this.availableFlights;
    }
})

.service('Flights', function() {
  // Some flight data
  var flights = [{
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
    img: 'img/challenger.jpg',
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
    img: 'img/challenger601.jpg',
    departureAirport: 'Florida Airport',
    departureDate: new Date(),
    destinationAirport: 'Nevada Municipal Airport',
    flightCrew: true,
    bookingID: null
  }];

  return {
    createFlight: function(flight){
        flight.id = flights.length;
        flight.img = 'img/bombardierChallenger.jpeg';
        flight.bookingID = null;
        flights.push(flight);
        console.log(flights);
    },
    all: function() {
      return flights;
    },
    remove: function(flight) {
      flights.splice(flights.indexOf(flight), 1);
    },
    get: function(flightId) {
      for (var i = 0; i < flights.length; i++) {
        if (flights[i].id === parseInt(flightId)) {
          return flights[i];
        }
      }
      return null;
    },
    addFlightCrew: function(flight){
      for(var i = 0; i < flights.length; i++){
        if(flights[i].id == flight.id){
          flights[i] = flight;
        }
      }
    }
  };
});
