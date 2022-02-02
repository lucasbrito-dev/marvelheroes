'use strict';

// Registra o component `heroList`, junto com seus controller e template associados
angular.
  module('heroList').
  component('heroList', {
    templateUrl: 'hero-list/hero-list.template.html',
    controller: ['$http', function HeroListController($http) {
      var self = this;
      self.orderProp = 'modified';

      $http.get('https://gateway.marvel.com/v1/public/characters?limit=50&ts=1&apikey=5a237863b3cc2061003cbbc4fe20dc06&hash=bd4b447a65ef5d6b174f87cf9db6d2db').then(function(response) {
        self.heroes = response.data.data.results;
      });
    }]
  });
