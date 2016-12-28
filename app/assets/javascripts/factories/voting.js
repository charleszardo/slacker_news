app.factory('voting', ['$http', function ($http) {
  var o = {};
  o.vote = function(obj, path, val) {
    var action = (val > 0 ? '/upvote.json' : '/downvote.json'),
        full_path = path + action;

    return $http.put(full_path).then(function(success) {
        obj.upvotes += val
      });
  };

  o.postVote = function(post, val) {
    var path = '/posts/' + post.id
    
    o.vote(post, path, val)
  };

  o.commentVote = function(post, comment, val) {
    var path = '/posts/' + post.id + '/comments/' + comment.id;

    o.vote(comment, path, val)
  };

  return o;
}]);
