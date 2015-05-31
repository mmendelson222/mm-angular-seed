'use strict';

angular.module('testApp')

//for testing the spinner
.controller('TestWaitCtl', function ($scope, $location, $http, globalData, $timeout) {
    $scope.seconds = 5;
    //this web service simply waits for the specified time (in milliseconds).
    $http.get('http://intown.biz/demo/wait/timerservice.php?sec='+$scope.seconds).
       success(function (response, httpstatus, headers) {
           $scope.data = response;
           $scope.$parent.$broadcast('resizeframe');
       }).
       error(function (data, httpstatus) {
           $scope.data = data;
       });
})
;