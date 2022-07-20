import { Colors } from './colors';

describe('Colors', () => {
  it('should create an instance', () => {
    expect(new Colors()).toBeTruthy();
  });

  it('should return digit colors with correct value', () => {
    const testDigits = new Colors();
    expect(testDigits.getDigitValue("black")).toEqual(0);
    expect(testDigits.getDigitValue("brown")).toEqual(1);
    expect(testDigits.getDigitValue("red")).toEqual(2);
    expect(testDigits.getDigitValue("orange")).toEqual(3);
    expect(testDigits.getDigitValue("yellow")).toEqual(4);
    expect(testDigits.getDigitValue("green")).toEqual(5);
    expect(testDigits.getDigitValue("blue")).toEqual(6);
    expect(testDigits.getDigitValue("violet")).toEqual(7);
    expect(testDigits.getDigitValue("grey")).toEqual(8);
    expect(testDigits.getDigitValue("white")).toEqual(9);
    expect(() => {testDigits.getDigitValue("")}).toThrowError();
  });

  it('should return multiplier colors with correct value', () => {
    const testDigits = new Colors();
    expect(testDigits.getMultiplierValue("black")).toEqual(1);
    expect(testDigits.getMultiplierValue("brown")).toEqual(10);
    expect(testDigits.getMultiplierValue("red")).toEqual(100);
    expect(testDigits.getMultiplierValue("orange")).toEqual(1000);
    expect(testDigits.getMultiplierValue("yellow")).toEqual(10000);
    expect(testDigits.getMultiplierValue("green")).toEqual(100000);
    expect(testDigits.getMultiplierValue("blue")).toEqual(1000000);
    expect(testDigits.getMultiplierValue("violet")).toEqual(10000000);
    expect(testDigits.getMultiplierValue("grey")).toEqual(100000000);
    expect(testDigits.getMultiplierValue("white")).toEqual(1000000000);
    expect(testDigits.getMultiplierValue("gold")).toEqual(0.1);
    expect(testDigits.getMultiplierValue("silver")).toEqual(0.01);
    expect(() => {testDigits.getMultiplierValue("")}).toThrowError();
  });

  it('should return tolerance colors with correct value', () => {
    const testDigits = new Colors();
    expect(testDigits.getToleranceValue("brown")).toEqual("1%");
    expect(testDigits.getToleranceValue("red")).toEqual("2%");
    expect(testDigits.getToleranceValue("green")).toEqual("0.5%");
    expect(testDigits.getToleranceValue("blue")).toEqual("0.25%");
    expect(testDigits.getToleranceValue("violet")).toEqual("0.1%");
    expect(testDigits.getToleranceValue("grey")).toEqual("0.05%");
    expect(testDigits.getToleranceValue("gold")).toEqual("5%");
    expect(testDigits.getToleranceValue("silver")).toEqual("10%");
    expect(testDigits.getToleranceValue("none")).toEqual("20%");
    expect(() => {testDigits.getToleranceValue("")}).toThrowError();
  });

});

