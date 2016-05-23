angular.module('starter.controllers', [])

// //controller for PAGE place-list
// .controller('DashCtrl', function($scope) {})



//controller that takes the list of places
.controller('PlacesCtrl', function($scope, Places) {
  // $scope.type = 'cafe';

types = [{ "type": "accounting", "pretty": "Accounting"  }, { "type": "airport", "pretty": "Airport"  }, { "type": "amusement_park", "pretty": "Amusement Park"  }, { "type": "aquarium", "pretty": "Aquarium" }, { "type": "art_gallery", "pretty": "Art Gallery" }, { "type": "atm", "pretty": "ATM" }, { "type": "bakery", "pretty": "Bakery" }, { "type": "bank", "pretty": "Bank" }, { "type": "bar", "pretty": "Bar" }, { "type": "beauty_salon", "pretty": "Beauty Salon" }, { "type": "bicycle_store", "pretty": "Bicycle Store" }, { "type": "book_store", "pretty": "Book Store" }, { "type": "bowling_alley", "pretty": "Bowling Alley" }, { "type": "bus_station", "pretty": "Bus Station" }, { "type": "cafe", "pretty": "Cafe" }, { "type": "campground", "pretty": "Campground" }, { "type": "car_dealer", "pretty": "Car Dealer" }, { "type": "car_rental", "pretty": "Car Rental" }, { "type": "car_repair", "pretty": "Car Repair" }, { "type": "car_wash", "pretty": "Car Wash" }, { "type": "casino", "pretty": "Casino" }, { "type": "cemetery", "pretty": "Cemetery" }, { "type": "church", "pretty": "Church" }, { "type": "city_hall", "pretty": "City Hall" }, { "type": "clothing_store", "pretty": "Clothing Store" }, { "type": "convenience_store", "pretty": "Convenience Store" }, { "type": "courthouse", "pretty": "Court House" }, { "type": "dentist", "pretty": "Dentist" }, { "type": "department_store", "pretty": "Department Store" }, { "type": "doctor", "pretty": "Doctor" }, { "type": "electrician", "pretty": "Electrician" }, { "type": "electronics_store", "pretty": "Electronic Store" }, { "type": "embassy", "pretty": "Embassy" }, { "type": "establishment", "pretty": "Establishment" }, { "type": "finance", "pretty": "Finance" }, { "type": "fire_station", "pretty": "Fire Station" }, { "type": "florist", "pretty": "Florist" }, { "type": "food", "pretty": "Food" }, { "type": "funeral_home", "pretty": "Funeral Home" }, { "type": "furniture_store", "pretty": "Furniture" }, { "type": "gas_station", "pretty": "Gas Station" }, { "type": "general_contractor", "pretty": "General Contractor" }, { "type": "grocery_or_supermarket", "pretty": "Grocery" }, { "type": "gym", "pretty": "Gym" }, { "type": "hair_care", "pretty": "Hair Care" }, { "type": "hardware_store", "pretty": "Hardware Store" }, { "type": "health", "pretty": "Health" }, { "type": "hindu_temple", "pretty": "Hindu Temple" }, { "type": "home_goods_store", "pretty": "Home Goods Store" }, { "type": "hospital", "pretty": "Hospital" },{ "type": "insurance_agency", "pretty": "Insurance Agency" }, { "type": "jewelry_store", "pretty": "Jewelry Store" }, { "type": "laundry", "pretty": "Laundry" }, { "type": "lawyer", "pretty": "Lawyer" }, { "type": "library", "pretty": "Library" }, { "type": "liquor_store", "pretty": "Liquor Store" }, { "type": "local_government_office", "pretty": "Local Government Office" }, { "type": "locksmith", "pretty": "Locksmith" }, { "type": "lodging", "pretty": "Lodging" }, { "type": "meal_delivery", "pretty": "Meal Delivery" }, { "type": "meal_takeaway", "pretty": "Meal Takeaway" }, { "type": "mosque", "pretty": "Mosque" }, { "type": "movie_rental", "pretty": "Movie Rental" }, { "type": "movie_theater", "pretty": "Movie Theater" }, { "type": "moving_company", "pretty": "Moving Company" }, { "type": "museum", "pretty": "Museum" }, { "type": "night_club", "pretty": "Night Club" }, { "type": "painter", "pretty": "Painter" }, { "type": "park", "pretty": "Park" }, { "type": "parking", "pretty": "Parking" }, { "type": "pet_store", "pretty": "Pet Store" }, { "type": "pharmacy", "pretty": "Pharmacy" }, { "type": "physiotherapist", "pretty": "Physiotherapist" }, { "type": "place_of_worship", "pretty": "Place of Worship" }, { "type": "plumber", "pretty": "Plumber" }, { "type": "police", "pretty": "Police" }, { "type": "post_office", "pretty": "Post Office" }, { "type": "real_estate_agency", "pretty": "Real Estate Agency" }, { "type": "restaurant", "pretty": "Restaurant" }, { "type": "roofing_contractor", "pretty": "Roofing Contractor" }, { "type": "rv_park", "pretty": "RV Park" }, { "type": "school", "pretty": "School" }, { "type": "shoe_store", "pretty": "Shoe Store" }, { "type": "shopping_mall", "pretty": "Shopping Mall" }, { "type": "spa", "pretty": "Spa" }, { "type": "stadium", "pretty": "Stadium" }, { "type": "storage", "pretty": "Storage" }, { "type": "store", "pretty": "Store" }, { "type": "subway_station", "pretty": "Subway Station" }, { "type": "synagogue", "pretty": "Synagogue" }, { "type": "taxi_stand", "pretty": "Taxi Stand" }, { "type": "train_station", "pretty": "Train Station" }, { "type": "transit_station", "pretty": "Transit Station" }, { "type": "travel_agency", "pretty": "Travel Agency" }, { "type": "university", "pretty": "University" }, { "type": "veterinary_care", "pretty": "Veterinary Care" }, { "type": "zoo", "pretty": "Zoo" }];
$scope.types =  types;

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
