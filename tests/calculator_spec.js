const { browser, element } = require("protractor");
let homepage = require('../pages/homepage');

describe('demo calculator tests', function(){
    
    
    it('addition test', function () {
        browser.get('https://juliemr.github.io/protractor-demo/');
        element(by.model('first')).sendKeys(2);
        element(by.model('second')).sendKeys(2);
        //element(by.id('gobutton')).click();
        element(by.css('[ng-click="doAddition()"]')).click();
        let result = element(by.cssContainingText('.ng-binding','4'))
        
        expect(result.getText()).toEqual('4');
        
    });


    it('POM addition test', function () {
        homepage.get('https://juliemr.github.io/protractor-demo/');
        
        homepage.enterFirstNumber(2);
        homepage.enterSecondNumber(2);
        homepage.clickGo();
        
        homepage.verifyResults('4');
        
    });



    /*
    it('substraction test', function () {
        browser.get('https://juliemr.github.io/protractor-demo/');
        element(by.model('first')).sendKeys(10);
        element(by.model('second')).sendKeys(7);
        //element(by.id('gobutton')).click();
        element(by.cssContainingText('option', '-')).click();

        element(by.css('[ng-click="doAddition()"]')).click();
        let result = element(by.cssContainingText('.ng-binding','3'))
        
        expect(result.getText()).toEqual('3');
    });
    */

    it('POM substraction test', function () {
        homepage.get('https://juliemr.github.io/protractor-demo/');
        
        homepage.enterFirstNumber(10);
        homepage.enterSecondNumber(7);

        homepage.selectOption('-');

        homepage.clickGo();

        homepage.verifyResults('3');
        
    });

});