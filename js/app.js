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
      })
      .state('posts', {
        url: '/posts/{id}',
        templateUrl: '/posts.html',
        controller: 'PostsCtrl'
      })

    $urlRouterProvider.otherwise('home');
  }])
  .factory('posts', [function () {
    var o = {};
    o.posts = [];
    return o;
  }])
  .factory('voting', [function () {
    var o = {};
    o.vote = function(obj, val) {
      if (val === 1) {
        obj.upvotes += 1
      } else {
        obj.upvotes -= 1
      }
    }
    return o;
  }])
  .controller('MainCtrl', [
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
  ])
  .controller('PostsCtrl', [
    '$scope', '$stateParams', 'posts', 'voting', function($scope, $stateParams, posts, voting) {
      $scope.post = posts.posts[$stateParams.id];
      $scope.vote = voting.vote;
    }
  ])
