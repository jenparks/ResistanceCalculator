import { Injectable } from '@angular/core';
import { Colors } from '../model/colors';

@Injectable({
  providedIn: 'root'
})
export class CalculateServiceService {
  private results : string;
  private userColors : Colors;

  constructor() {
    this.results = "";
    this.userColors = new Colors();
  }

  getResults() : string {
    return this.results;
  }

  compileResults(digits1 : string, digits2 : string, digits3 : string, 
  multiply : string, tolerance : string) {
    let figures = 100 * this.userColors.getDigitValue(digits1) + 10 *
      this.userColors.getDigitValue(digits2) + this.userColors.getDigitValue(digits3);
    let multipliedFigures = this.userColors.getMultiplierValue(multiply) * figures;
    this.results = multipliedFigures + " +/- " + this.userColors.getToleranceValue(tolerance);
  }

}
