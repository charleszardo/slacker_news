app.factory('posts', ['$http', function ($http) {
  var o = {};
  o.posts = [];
  o.getAll = function() {
    return $http.get('/posts.json').then(function(success) {
      angular.copy(success.data, o.posts);
    });
  };
  return o;
}]);
