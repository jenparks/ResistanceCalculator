import { AppPage } from './app.po';
import { browser, logging, by, element } from 'protractor';

describe('Resistance Calculator', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should have starter messages', () => {
    var result = element(by.id('resistanceResult'));
    var info = element(by.id('infoMessage'));
    expect(result.getText()).toEqual('Resistance:');
    expect(info.getText()).toEqual('Select colors below');
  });


  it('should log 5 colors and get results', () => {
    browser.get('/');
    var digit1 = element(by.id('digits1'));
    var digit2 = element(by.id('digits2'));
    var digit3 = element(by.id('digits3'));
    var multiply = element(by.id('multiply'));
    var tolerance = element(by.id('tolerance'));
    digit1.$('[value=yellow]').click();
    digit2.$('[value=yellow]').click();
    digit3.$('[value=blue]').click();
    multiply.$('[value=black]').click();
    tolerance.$('[value=red]').click();

    element(by.id('calculate')).click();

    var result = element(by.id('resistanceResult'));
    var info = element(by.id('infoMessage'));
    expect(result.getText()).toEqual('Resistance: 446 +/- 2%');
    expect(info.getText()).toEqual('');
  });

  it('should log 5 colors and get more results', () => {
    browser.get('/');
    var digit1 = element(by.id('digits1'));
    var digit2 = element(by.id('digits2'));
    var digit3 = element(by.id('digits3'));
    var multiply = element(by.id('multiply'));
    var tolerance = element(by.id('tolerance'));
    digit1.$('[value=green]').click();
    digit2.$('[value=yellow]').click();
    digit3.$('[value=blue]').click();
    multiply.$('[value=violet]').click();
    tolerance.$('[value=blue]').click();

    element(by.id('calculate')).click();

    var result = element(by.id('resistanceResult'));
    var info = element(by.id('infoMessage'));
    expect(result.getText()).toEqual('Resistance: 5460000000 +/- 0.25%');
    expect(info.getText()).toEqual('');
  });

  it('should log 4 colors and get an error message', () => {
    browser.get('/');
    var digit1 = element(by.id('digits1'));
    var digit2 = element(by.id('digits2'));
    var digit3 = element(by.id('digits3'));
    var multiply = element(by.id('multiply'));
    var tolerance = element(by.id('tolerance'));
    digit1.sendKeys('yellow');
    digit2.sendKeys('yellow');
    multiply.sendKeys('black');
    tolerance.sendKeys('red');
    element(by.id('calculate')).click();

    var result = element(by.id('resistanceResult'));
    var info = element(by.id('infoMessage'));
    expect(result.getText()).toEqual('Resistance:');
    expect(info.getText()).toEqual('Fill out all the band colors please');
  });

});
