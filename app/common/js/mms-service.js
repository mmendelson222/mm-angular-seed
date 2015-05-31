/* 
Angular library containing service-related code. 
*/
angular.module('mms-service', [])
   //generic way to handle service errors, and pass them on to the UI.
  .factory('serviceErrorHandler', function ($rootScope, globalData) {
      return {
          errorShown: false,
          HandleError: function (error, status) {
              //expect a JSON string based on c# AuthResult object.
              var theError = {
                  message: "",
                  stack: ""
              };

              if (status == 0) {
                  theError.message = "No response from the server.";
              } else {
                  theError.message = "Error: (" + status + ")";
              }

              //javascript console logging
              console.warn('Web service error: ' + theError.message);

              //determine what should be shown to the user. 
              switch (globalData.errorLevel) {
                  case 'Dev':
                  case 'Test':
                      $rootScope.error = theError.message;
                      break;

                      //Production is the only other option at the moment.
                  default:
                      if (status == 500) {
                          $rootScope.error = 'A system error has occurred. Please call the Help Desk if this error persists.';
                      } else {
                          $rootScope.error = theError.message;
                      }
                      break;
              }
          }
      }
  })
.factory('simplePromise', function ($q) {
    return {
        instance: function () {
            //promise resolves immediately
            var promise = $q.defer();
            setTimeout(function () {
                promise.resolve('success');
            }, 0);
            return promise.promise;
        }
    }
})
.factory('serviceLogger', function ($q, $rootScope, serviceErrorHandler, globalData, $cookies, $cookieStore) {
    return {
        'request': function (config) {
            $rootScope.error = '';
            $rootScope.errorStack = '';

            //log info for our web services.
            var apiPos = config.url.indexOf('/api/');
            console.log("HTTP " + config.method + " request: " + config.url);
            return config;
        },

        'response': function (response) {
            return response || $q.when(response);
        },

        //app-wide error handling.
        'responseError': function (rejection) {
            serviceErrorHandler.HandleError(rejection.data, rejection.status);
            return $q.reject(rejection);
        }
    };
})
;


