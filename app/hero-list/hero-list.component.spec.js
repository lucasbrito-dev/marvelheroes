'use strict';

describe('heroList', function() {

  // Carrega o módulo que contém o componente `heroList` antes de cada teste
  beforeEach(module('heroList'));

  // Testa o controller
  describe('heroListController', function() {
    var ctrl;

    beforeEach(inject(function($componentController) {
      ctrl = $componentController('heroList');
    }));

    it('deve criar um model `heroes` com 3 heróis', function() {
      expect(ctrl.heroes.length).toBe(3);
    });

    it('deve setar um valor default para o model `orderProp`', function() {
      expect(ctrl.orderProp).toBe('age');
    });

  });

});
