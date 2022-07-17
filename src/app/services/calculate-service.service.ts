import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculateServiceService {
  private results : number;
  private valueMap : Map<string, number>;

  constructor() {
    this.results = 12;
    this.valueMap = new Map([
      ["black",0],
      ["brown",1],
      ["red",2],
      ["orange",3],
      ["yellow",4],
      ["green",5],
      ["blue",6],
      ["violet",7],
      ["grey",8],
      ["white",9]
    ]);
  }

  getResults() : number {
    return this.results;
  }

  doMath(digits1 : string, digits2 : string, digits3 : string, multiplyResult : string, toleranceResult : string) {
    this.results = 100*this.translateDigitColors(digits1)+10*this.translateDigitColors(digits2)+this.translateDigitColors(digits3);
  }

  translateDigitColors(digit) : number {
    return this.valueMap.get(digit);
  }

}
