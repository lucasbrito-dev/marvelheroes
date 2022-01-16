'use strict';

describe('heroList', function() {

  // Carrega o módulo que contém o componente `heroList` antes de cada teste
  beforeEach(module('marvelheroesApp'));

  // Testa o controller
  describe('heroListController', function() {

    it('deve criar um model `heroes` com 3 heróis', inject(function($componentController) {
      var ctrl = $componentController('heroList');

      expect(ctrl.heroes.length).toBe(3);
    }));

  });

});
