'use strict';

var dcm = angular.module('dcm', [
    'ngRoute'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    //$routeProvider.otherwise({redirectTo: '/view1'});
}]);

//the array is dependencies - other modules
// ADDING THE ARRAY STOPS THE MINIFICATION FROM CHANGING THE MODULES OF SCOPE AND HTTP
dcm.controller('fwCtrl', ['$scope', '$http', function(scope, http){

    scope.srcIP = "1.1.1.1";

    scope.checkFirewallRule = function(){



        var formData = {};

        // fetch data using http
        //http.get({
        //    method: 'POST',
        //    url: 'http://dcm.jpmchase.net/checkFirewall',
        //    data: formdata
        //}).success(data, function (){
        //    scope.rules = data;
        //});

        scope.rules = [
            {
                srcIP : "10.1.1.1",
                destIP : "10.1.1.2",
                port : "8080",
                protocol : "TCP",
                env : "QA",
                zone : "ESF",
                dc  : "CDC1",
                srcSealID: "12345",
                destSealID: "34567",
                jiraTicket: "DCM1234",
                validated : "label label-success"
            },

            {
                srcIP : "18.1.1.1",
                destIP : "17.1.1.2",
                port : "9090",
                protocol : "TCP",
                env : "PROD",
                zone : "SESF",
                dc  : "CDC2",
                srcSealID: "2345",
                destSealID: "34567",
                jiraTicket: "DCM1244",
                validated : "label label-warning"
            }
        ]

        scope.sortedField = 'srcIP';
        scope.sortedField = 'destIP';

    };

    scope.validateFirewallRule = function(){
        console.log("validating firewall rule ...");

    };

    scope.displayRuleDetails = function(){
        console.log(" Displaying details ...");
    }


}]);

