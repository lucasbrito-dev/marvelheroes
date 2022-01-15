'use strict';

// Define the `phonecatApp` module
var marvelheroesApp = angular.module('marvelheroesApp', []);

// Define the `HeroListController` controller on the `marvelheroesApp` module
marvelheroesApp.controller('HeroListController', function HeroListController($scope) {
  $scope.heroes = [
    {
      name: 'Capitão América',
      snippet: 'Sempre que alguém tenta vencer uma guerra, antes que ela comece, pessoas inocentes morrem. É sempre assim.'
    }, {
      name: 'Homem de Ferro',
      snippet: 'Você pode tirar meus trajes, você pode tirar a minha casa, mas há uma coisa que você nunca pode tirar de mim: eu sou o Homem de Ferro!'
    }, {
      name: 'Hulk',
      snippet: 'Não me deixe com raiva! Você não gostaria de mim quando estou com raiva.'
    }
  ];
});