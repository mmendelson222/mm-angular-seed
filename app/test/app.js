'use strict';

var minimumFrameHeight = 600;

angular.module('testApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.bootstrap',
  'ui.bootstrap.modal',
  'mms-service',
  'mms-loading-indicator',
  'mms-globals',
  'mms-filter',
  'mms-iframe-resizer'
 ])
  .config(function ($routeProvider, $httpProvider) {
      $routeProvider
      .when('/wait', { templateUrl: 'test/views/wait.html', controller: 'TestWaitCtl' })
      .when('/filter', { templateUrl: 'test/views/filter.html', controller: 'TestFilterCtl' })
      .otherwise({ redirectTo: '/wait' });

      $httpProvider.interceptors.push('serviceLogger');
  })
;
