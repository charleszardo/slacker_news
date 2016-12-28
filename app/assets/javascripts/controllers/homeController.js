app.controller('HomeController', [
  '$scope', 'posts', 'voting', function($scope, posts, voting) {
    $scope.posts = posts.posts;
    $scope.vote = voting.vote;
    $scope.postVote = voting.postVote;

    $scope.addPost = function () {
      if (!$scope.title || $scope.title === '') { return; }

      posts.create({
          title: $scope.title,
          link: $scope.link
      })

      $scope.title = '';
      $scope.link = '';
    }
  }
]);
