'use strict';

angular.
  module('marvelheroesApp').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/heroes', {
          template: '<hero-list></hero-list>'
        }).
        when('/heroes/:heroId', {
          template: '<hero-detail></hero-detail>'
        }).
        otherwise('/heroes');
    }
  ]);
