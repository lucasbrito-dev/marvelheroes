'use strict';

describe('heroList', function() {

  // Load the module that contains the `heroList` component before each test
  beforeEach(module('heroList'));

  // Test the controller
  describe('HeroListController', function() {
    var $httpBackend, ctrl;

    // The injector ignores leading and trailing underscores here (i.e. _$httpBackend_).
    // This allows us to inject a service and assign it to a variable with the same name
    // as the service while avoiding a name conflict.
    beforeEach(inject(function($componentController, _$httpBackend_) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('heroes/heroes.json')
                  .respond([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);

      ctrl = $componentController('heroList');
    }));

    it('should create a `heroes` property with 2 heroes fetched with `$http`', function() {
      expect(ctrl.heroes).toBeUndefined();

      $httpBackend.flush();
      expect(ctrl.heroes).toEqual([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);
    });

    it('should set a default value for the `orderProp` property', function() {
      expect(ctrl.orderProp).toBe('modified');
    });

  });

});
