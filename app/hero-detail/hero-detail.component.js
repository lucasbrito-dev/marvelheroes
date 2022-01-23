'use strict';

// Register `heroDetail` component, along with its associated controller and template
angular.
  module('heroDetail').
  component('heroDetail', {
    templateUrl: 'hero-detail/hero-detail.template.html',
    controller: ['$http', '$routeParams',
      function HeroDetailController($http, $routeParams) {
        var self = this;

        $http.get('heroes/' + $routeParams.heroId + '.json').then(function(response) {
          self.hero = response.data;
        });
      }
    ]
  });
