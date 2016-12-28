angular.module('slackerNews', ['ui.router'])
.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: '/home.html',
        controller: 'MainCtrl'
      });

    $urlRouterProvider.otherwise('home');
  }])
  .factory('posts', [function () {
    var o = {
      posts: []
    };
    return o;
  }])
  .controller('MainCtrl', [
    '$scope', 'posts', function($scope, posts) {
      $scope.posts = posts.posts;

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
