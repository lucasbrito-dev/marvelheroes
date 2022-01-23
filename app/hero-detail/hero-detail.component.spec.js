'use strict';

describe('heroDetail', function() {

  // Load the module that contains the `heroDetail` component before each test
  beforeEach(module('heroDetail'));

  // Test the controller
  describe('HeroDetailController', function() {
    var $httpBackend, ctrl;

    beforeEach(inject(function($componentController, _$httpBackend_, $routeParams) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('heroes/xyz.json').respond({name: 'hero xyz'});

      $routeParams.heroId = 'xyz';

      ctrl = $componentController('heroDetail');
    }));

    it('should fetch the hero details', function() {
      expect(ctrl.hero).toBeUndefined();

      $httpBackend.flush();
      expect(ctrl.hero).toEqual({name: 'hero xyz'});
    });

  });

});
