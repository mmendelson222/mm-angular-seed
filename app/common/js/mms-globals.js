/* 
 Angular library containing global variables and utilities.
 */
angular.module('mms-globals', [])
    //global data storage, and some utilities we're going to need everywhere.
    .factory('globalData', function () {

        //this would be one way to select globally between web service sources.
        var webServices = {
            'training': ['/test/data/trainings.json', 'http://somewhere.training.com/trainings.json'],
            'forms': ['/test/data/trainings.json', 'http://somewhere.training.com/trainings.json']      //I don't see a sample feed for forms
        }

        var data = {
            debug: false,
            errorLevel: 'Dev',
            selectedServiceSource: 0,

            serviceSource: function (svcName){
                if (!webServices[svcName])
                    alert("Please set properties for web service "+svcName);
                return webServices[svcName][this.selectedServiceSource];
            }
        }
        return data;
    })
;
