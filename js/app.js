angular.module('slackerNews', [])
  .controller('MainCtrl', [
    '$scope', function($scope) {
      $scope.posts = []

      $scope.addPost = function () {
        if (!$scope.title || $scope.title === '') { return; }
        $scope.posts.push({ title: $scope.title, upvotes: 0 , link: $scope.link });
        $scope.title = '';
        $scope.link = '';
      }

      $scope.vote = function(post, val) {
        console.log(val)
        if (val === 1) {
          post.upvotes++
        } else {
          post.upvotes -= 1
        }
      }
    }
  ])
