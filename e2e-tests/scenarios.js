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

    it('should be possible to control hero order via the drop-down menu', function() {
      var queryField = element(by.model('$ctrl.query'));
      var orderSelect = element(by.model('$ctrl.orderProp'));
      var nameOption = orderSelect.element(by.css('option[value="name"]'));
      var heroNameColumn = element.all(by.repeater('hero in $ctrl.heroes').column('hero.name'));

      function getNames() {
        return heroNameColumn.map(function(elem) {
          return elem.getText();
        });
      }

      queryField.sendKeys('você');   // Let's narrow the dataset to make the assertions shorter

      expect(getNames()).toEqual([
        'Homem de Ferro',
        'Hulk'
      ]);

      nameOption.click();

      expect(getNames()).toEqual([
        'Homem de Ferro',
        'Hulk'        
      ]);
    });

    it('should render hero specific links', function() {
      var query = element(by.model('$ctrl.query'));
      query.sendKeys('capt');

      element.all(by.css('.heroes li a')).first().click();
      expect(browser.getCurrentUrl()).toContain('index.html#!/heroes/1009220');
    });

  });

});
