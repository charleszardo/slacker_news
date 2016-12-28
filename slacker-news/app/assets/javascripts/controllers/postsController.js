app.controller('PostsController', [
  '$scope', 'posts', 'post', 'voting', function($scope, posts, post, voting) {
    $scope.post = post;
    $scope.vote = voting.vote;

    $scope.addComment = function () {
      if ($scope.body === '') { return; }
      posts.addComment(post.id, {
        body: $scope.body,
        author: 'user'
      }).then(function(success) {
        $scope.post.comments.push(success.data);
      })
      $scope.body = '';
    }
  }
]);
