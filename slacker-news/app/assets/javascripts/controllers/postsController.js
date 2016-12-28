app.controller('PostsController', [
  '$scope', 'posts', 'post', 'voting', function($scope, posts, post, voting) {
    $scope.post = post;
    $scope.vote = voting.vote;

    $scope.addComment = function () {
      if ($scope.body === '') { return; }
      $scope.post.comments.push({
        body: $scope.body,
        author: 'user',
        upvotes: 0
      });
      $scope.body = '';
    }
  }
]);
