'use strict';

// Registra o component `heroList`, junto com seus controller e template associados
angular.
  module('heroList').
  component('heroList', {
    templateUrl: 'hero-list/hero-list.template.html',
    controller: ['$http', function HeroListController($http) {
      var self = this;
      self.orderProp = 'age';

      $http.get('heroes/heroes.json').then(function(response) {
        self.heroes = response.data;
      });
    }]
  });
