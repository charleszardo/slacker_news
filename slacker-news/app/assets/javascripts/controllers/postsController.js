app.controller('PostsController', [
  '$scope', '$stateParams', 'posts', 'voting', function($scope, $stateParams, posts, voting) {
    $scope.post = posts.posts[$stateParams.id];
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
