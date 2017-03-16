var app = angular.module('D3Angular', 
	['ui.router', 'ngMaterial', 'ngAnimate', 'ngAria', 'ngMessages',
    'ngSanitize' ])

.config(function ($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('amber')
            .accentPalette('brown');
    })
    .config(['$stateProvider', '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/');
            $stateProvider
                .state('default', {
                    url: "/",
                    templateUrl: "/partials/sampledisplay.html",
                    controller: function ($scope, $http, D3charts) {
;
	$scope.sampleSize = 10;

        $scope.drawsamples = function () {
	    $http.get('http://localhost:5000/getd3samples/20/'
		+ $scope.sampleSize)
                            .then( function (samples) {
                        D3charts.drawbarchart("#bar", samples.data);
                        D3charts.drawlinegraph("#line", samples.data);
                 },
		 function(e) {
			alert(e);
		});
        };

                 }
            });
        }
    ]).directive('drawGraph', function () {
        return function (scope, element, attrs) {
                scope.drawsamples();
        };
    })  

