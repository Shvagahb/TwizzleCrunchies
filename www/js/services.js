angular.module('starter.services', [])
//, $q, $http)
// a factory returns an object of functions "Places" function runs when factory is called
.factory('Places', function($resource) {
  return {
    all: function(typeVar) {
      var data = $resource('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=30.4383,-84.2807&radius=21400&type=:type&key=AIzaSyBnQ0oNfa60yjAriKis0VFV8V7qxlfoV60', {type: typeVar});
      return data;
    },

    //runs when you click on the locations
    get: function(placeId) {
      var details = $resource('https://maps.googleapis.com/maps/api/place/details/json?placeid=:id&key=AIzaSyBnQ0oNfa60yjAriKis0VFV8V7qxlfoV60', {id: placeId});
      return(details);
    }
  };
});
