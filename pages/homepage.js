const { browser } = require("protractor");

let homepage = function(){


    let firstNumberInput = element(by.model('first'));
    let secondNumberInput = element(by.model('second'));
    let optionSelector=null;
    let goButton = element(by.css('[ng-click="doAddition()"]'));
    
    
    this.get = (url)=>{
        browser.get(url);
    }

    this.enterFirstNumber = (number)=>{
        firstNumberInput.sendKeys(number);
    }
    this.enterSecondNumber = (number)=>{
        secondNumberInput.sendKeys(number);
    }

    this.clickGo = ()=>{
        goButton.click();
    }

    this.selectOption = (symbol)=>{
        optionSelector = element(by.cssContainingText('option', symbol));
        optionSelector.click();
    }

    this.verifyResults = (result)=>{
        let output = element(by.cssContainingText('.ng-binding', result));
        expect(output.getText()).toEqual(String(result))
    }
};

module.exports = new homepage();