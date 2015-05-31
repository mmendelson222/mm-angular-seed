'use strict';

angular.module('mmSeed')
    .controller('TrainingCtl', function ($scope, $location, $http, globalData) {
        $scope.globals = globalData;
        $scope.state = 'all';
        $http.get(globalData.serviceSource('training')).
            success(function (response, httpstatus, headers) {
                $scope.trainings = response;
            });
    })
;