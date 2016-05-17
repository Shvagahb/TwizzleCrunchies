//controllers are used to set up initial state of $scope object and then add behavior
//$scope is the application object "owner" of applications and variables
//ng-model is what binds the controllers to the input fields
//always creates 2 properties in the scope VV  in these cases: a variable & a function

angular.module('starter.controllers', [])

// //controller for PAGE place-list
// .controller('DashCtrl', function($scope) {})



//controller that takes the list of places
.controller('PlacesCtrl', function($scope, Places) {
  // $scope.type = 'cafe';
  $scope.dropdown = {};

  Places.all($scope.type).get(function(data) {
    $scope.places = data.results;
    console.log($scope.places);
  });
  $scope.change = function() {
    $scope.type = $scope.dropdown.selected;
    console.log($scope.dropdown.selected);
    Places.all($scope.type).get(function(data) {
      // $scope.$apply(function() {
        $scope.places = data.results;
      // });
      console.log($scope.places);
    });
  }
})
// // controller for the PAGE place-detail
// .controller('PlaceDetailCtrl', function($scope, $stateParams, Places) {
//   // also need .then
//   $scope.place = Places.get($stateParams.place_id);
// })

.controller('PlaceDetailCtrl', function($scope, $stateParams, Places) {
  //$stateParams grabs the cafe that is clicked, then runs it through the get function
  Places.get($stateParams.id).get(function(detailsOfPlaces) {
    //detailsOfPlaces is returned and then sent to the html page
    $scope.place = detailsOfPlaces.result;
  });
})

//account controller for account PAGE
.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
