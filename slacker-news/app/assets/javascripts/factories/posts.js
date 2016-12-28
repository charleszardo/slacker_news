app.factory('posts', ['$http', function ($http) {
  var o = {};
  o.posts = [];

  o.getAll = function() {
    return $http.get('/posts.json').then(function(success) {
      angular.copy(success.data, o.posts);
    });
  };

  o.create = function(post) {
    return $http.post('/posts.json', post).then(function(success) {
      o.posts.push(success.data);
    });
  };

  o.get = function(id) {
    return $http.get('/posts/' + id + '.json').then(function(success){
      return success.data;
    });
  };

  return o;
}]);
