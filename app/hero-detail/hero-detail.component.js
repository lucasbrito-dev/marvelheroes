'use strict';

// Register `heroDetail` component, along with its associated controller and template
angular.
  module('heroDetail').
  component('heroDetail', {
    template: 'TBD: Detail view for <span>{{$ctrl.heroId}}</span>',
    controller: ['$routeParams',
      function HeroDetailController($routeParams) {
        this.heroId = $routeParams.heroId;
      }
    ]
  });
