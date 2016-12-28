app.factory('voting', [function () {
  var o = {};
  o.vote = function(obj, val) {
    obj.upvotes += val
  }
  return o;
}]);
