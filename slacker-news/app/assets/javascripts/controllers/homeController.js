app.controller('HomeController', [
  '$scope', 'posts', 'voting', function($scope, posts, voting) {
    $scope.posts = posts.posts;
    $scope.vote = voting.vote;

    $scope.addPost = function () {
      if (!$scope.title || $scope.title === '') { return; }
      $scope.posts.push({
        title: $scope.title,
        upvotes: 0 ,
        link: $scope.link,
        comments: [
          {author: 'Joe', body: 'Cool post!', upvotes: 0},
          {author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0}
        ]
      });
      $scope.title = '';
      $scope.link = '';
    }
  }
]);
