'use strict';

// Registra o component `heroList`, junto com seus controller e template associados
angular.
  module('heroList').
  component('heroList', {
    templateUrl: 'hero-list/hero-list.template.html',
    controller: function HeroListController() {
      this.heroes = [
        {
          name: 'Capitão América',
          snippet: '"Sempre que alguém tenta vencer uma guerra, antes que ela comece, pessoas inocentes morrem. É sempre assim."',
          age: 1
        }, {
          name: 'Homem de Ferro',
          snippet: '"Você pode tirar meus trajes, você pode tirar a minha casa, mas há uma coisa que você nunca pode tirar de mim: eu sou o Homem de Ferro!"',
          age: 2
        }, {
          name: 'Hulk',
          snippet: '"Não me deixe com raiva! Você não gostaria de mim quando estou com raiva."',
          age: 3
        }
      ];

      this.orderProp = 'age';
    }
  });
