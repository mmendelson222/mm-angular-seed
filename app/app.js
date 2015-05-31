'use strict';

angular.module('mmSeed', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.bootstrap',
  'ui.bootstrap.modal',
  'mms-loading-indicator',
  'mms-globals',
  'mms-iframe-resizer',
  'mms-filter',
  'mms-service'
])
  .config(function ($routeProvider, $httpProvider) {
      $routeProvider
      .when('/training', { templateUrl: 'training/views/training.html', controller: 'TrainingCtl' })
      .when('/forms', { templateUrl: 'forms/views/forms.html', controller: 'FormsCtl' })
      .otherwise({ redirectTo: '/training' });

      $httpProvider.interceptors.push('serviceLogger');
  })
;
