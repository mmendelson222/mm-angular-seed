/**
 * Created by mmendelson on 10/17/2014.
 * Directive used to send a resize command to SharePoint container.
 * Invoke as follows:  $scope.$parent.$broadcast('resizeframe'); or  $scope.$parent.$broadcast('hideframe');
 */
"use strict";

//define this javascript variable for a minimum height
//var minimumFrameHeight = 750;

function adjustFrameSize(contentHeight) {
    var senderId,
        resizeMessage = '<message senderId={Sender_ID}>resize({Width}, {Height}px)</message>';

    var args = document.URL.split("?");
    if (args.length < 2) return;
    var params = args[1].split("&");
    for (var i = 0; i < params.length; i = i + 1) {
        var param = params[i].split("=");
        if (param[0].toLowerCase() == "senderid") {
            senderId = decodeURIComponent(param[1]);
            senderId = senderId.split("#")[0]; //for chrome - strip out #/page if present
        }
    }

    var step = 30, finalHeight;
    if (contentHeight == 0) {
        finalHeight = 0;
    } else {
        finalHeight = (step - (contentHeight % step)) + contentHeight + 20;
        if (typeof minimumFrameHeight != 'undefined')
            if (finalHeight < minimumFrameHeight)
                finalHeight = minimumFrameHeight;
    }

    resizeMessage = resizeMessage.replace("{Sender_ID}", senderId);
    resizeMessage = resizeMessage.replace("{Height}", finalHeight);
    resizeMessage = resizeMessage.replace("{Width}", "100%");
    //console.log(resizeMessage);
    window.parent.postMessage(resizeMessage, "*");
}

var moduleLI = angular.module("mms-iframe-resizer", []);

moduleLI.directive('mainWrapper', function ($timeout) {
    return {
        restrict: 'A',
        link: function (s, e, attrs) {
            s.$on('resizeframe', function () {
                $timeout(function () {
                    adjustFrameSize(e[0].offsetHeight);
                }, 0, false);
            });
            s.$on('hideframe', function () {
                $timeout(function () {
                    adjustFrameSize(0);
                }, 0, false);
            });
        }
    };
});