'use strict';

angular.module('mmSeed')
    .controller('FormsCtl', function ($scope, $location, $http, globalData) {
        $scope.globals = globalData;
        $scope.state = '';
        $http.get(globalData.serviceSource('forms')).
            success(function (response, httpstatus, headers) {
                $scope.forms = response;
            });
    })
;