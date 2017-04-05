
angular.module('myApp', [])
  .controller('MovieController', function($scope, $http){
    $scope.$watch('search', function() {
      fetch();
    });

    $scope.search = "Sherlock Holmes";

    function fetch(){
      var x = $scope.search.split(' ').join('+');
      $http.get("http://www.omdbapi.com/?t=" + x+ "&y=&plot=short&r=json")
      .then(function(response){ console.log(response.data)
        $scope.details = response.data; });

      // $http.get("http://www.omdbapi.com/?s=" + $scope.search)
      // .then(function(response){ $scope.related = response.data; });
    }

    $scope.update = function(movie){
      $scope.search = movie.Title;
    };

    $scope.select = function(){
      this.setSelectionRange(0, this.value.length);
    }
  });
