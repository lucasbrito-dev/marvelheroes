'use strict';

// AngularJS E2E Testing Guide:
// https://docs.angularjs.org/guide/e2e-testing

describe('MarvelHeroes Application', function() {

  describe('heroList', function() {

    beforeEach(function() {
      browser.get('index.html');
    });

    it('should filter the hero list as a user types into the search box', function() {
      var heroList = element.all(by.repeater('hero in $ctrl.heroes'));
      var query = element(by.model('$ctrl.query'));

      expect(heroList.count()).toBe(3);

      query.sendKeys('capitão');
      expect(heroList.count()).toBe(1);

      query.clear();
      query.sendKeys('você');
      expect(heroList.count()).toBe(2);
    });

  });

});
