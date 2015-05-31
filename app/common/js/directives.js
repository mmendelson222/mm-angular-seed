

angular.module('mmSeed')
.directive('trainingItem', function () {
    return {
        restrict: 'EA',
        scope: {
            item: '='
        },
        //template: '<span>{{item.Title}}  <a href="{{item.Link}}">{{item.Link}}</a></span>'
        templateUrl: 'common/templates/trainingItem.html',
        controller: function ($scope, $element) {
            $scope.setFavorite = function (item, addFave){
                item.Favorite = addFave ? "Yes" : "No";

                //if you like, put the "save favorite" mechanism here.
                /*if (addFave)
                 alert('adding favorite');
                 else
                 alert('removing favorite');*/
            }
        }
    };
})