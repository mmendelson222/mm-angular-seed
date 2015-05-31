'use strict';

angular.module('testApp')

  .controller('TestFilterCtl', function ($scope) {
      var expr1 = { tester: true };
      var expr2 = '';
      $scope.items = [
        { name: "One", tester: true },
        { name: "Two", tester: false },
        { name: "Three", tester: true },
        { name: "Four", tester: false },
        { name: "Five", tester: true },
        { name: "Six", tester: false },
      ];

      $scope.options = [
        { caption: 'show all', value: '' },
        { caption: 'selected only', value: { tester: true } },
      ];
      $scope.selectedFilter = $scope.options[0];

      $scope.modifiedFilter = function (showAll) {
          if (showAll)
              $scope.filterExpr = expr2;
          else
              $scope.filterExpr = expr1;
      };

      //$scope.filterExpr = expr1;

      $scope.changeFilter = function () {
          $scope.filterExpr = $scope.filterExpr == expr1 ? expr2 : expr1;
      }
  })

;