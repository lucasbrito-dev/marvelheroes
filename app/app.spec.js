'use strict';

describe('HeroListController', function() {

  beforeEach(module('marvelheroesApp'));

  it('should create a `heroes` model with 3 heroes', inject(function($controller) {
    var scope = {};
    var ctrl = $controller('HeroListController', {$scope: scope});

    expect(scope.heroes.length).toBe(3);
  }));

});