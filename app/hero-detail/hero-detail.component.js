'use strict';

// Register `heroDetail` component, along with its associated controller and template
angular.
  module('heroDetail').
  component('heroDetail', {
    templateUrl: 'hero-detail/hero-detail.template.html',
    controller: ['$http', '$routeParams',
      function HeroDetailController($http, $routeParams) {
        var self = this;

        $http.get('https://gateway.marvel.com/v1/public/characters/' + $routeParams.heroId + '?ts=1&apikey=5a237863b3cc2061003cbbc4fe20dc06&hash=bd4b447a65ef5d6b174f87cf9db6d2db').then(function(response) {
          self.hero = response.data.data.results[0];
        });
      }
    ]
  });
