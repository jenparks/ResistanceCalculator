import { Component, OnInit } from '@angular/core';
import { CalculateServiceService } from '../../services/calculate-service.service';

@Component({
  selector: 'app-resistance',
  templateUrl: './resistance.component.html',
  styleUrls: ['./resistance.component.css']
})
export class ResistanceComponent implements OnInit {
  public figures : string[];
  public multiplier : string[];
  public tolerance : string[];
  public results : number;
  public digits1 : string;
  public digits2 : string;
  public digits3 : string;
  public multiplyResult : string;
  public toleranceResult : string;

  constructor(private calculateService : CalculateServiceService) { 
    this.results = 0;
    this.figures = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];
    this.multiplier = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white", "gold", "silver"];
    this.tolerance = ["brown", "red", "green", "blue", "violet", "grey", "gold", "silver", "none"];
  }

  ngOnInit(): void {
  }

  runCalculations() {
    this.calculateService.doMath(this.digits1, this.digits2, this.digits3, this.multiplyResult, this.toleranceResult);
    this.results = this.calculateService.getResults();
  }

}
