'use strict';

// Registra o component `heroList`, junto com seus controller e template associados
angular.
  module('marvelheroesApp').
  component('heroList', {
    template:
        '<ul>' +
          '<li ng-repeat="hero in $ctrl.heroes">' +
            '<span>{{hero.name}}</span>' +
            '<p>{{hero.snippet}}</p>' +
          '</li>' +
        '</ul>',
    controller: function HeroListController() {
      this.heroes = [
        {
          name: 'Capitão América',
          snippet: '"Sempre que alguém tenta vencer uma guerra, antes que ela comece, pessoas inocentes morrem. É sempre assim."'
        }, {
          name: 'Homem de Ferro',
          snippet: '"Você pode tirar meus trajes, você pode tirar a minha casa, mas há uma coisa que você nunca pode tirar de mim: eu sou o Homem de Ferro!"'
        }, {
          name: 'Hulk',
          snippet: '"Não me deixe com raiva! Você não gostaria de mim quando estou com raiva."'
        }
      ];
    }
  });
