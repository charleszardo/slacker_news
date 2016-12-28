app.factory('voting', ['$http', function ($http) {
  var o = {};
  o.vote = function(obj, val, type) {
    var resource = (type === 'comment' ? '/comments/' : '/posts/'),
        action = (val > 0 ? '/upvote.json' : '/downvote.json'),
        full_path = resource + obj.id + action;

    return $http.put(full_path)
      .then(function(success) {
        obj.upvotes += val
      })
  }
  return o;
}]);
