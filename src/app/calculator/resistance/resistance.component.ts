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
  public infoMessage : string;
  public results : string;
  public digits1 : string;
  public digits2 : string;
  public digits3 : string;
  public multiplyResult : string;
  public toleranceResult : string;

  constructor(private calculateService : CalculateServiceService) { 
    this.results = "";
    this.infoMessage = "Select colors below";
    this.figures = ["black", "brown", "red", "orange", "yellow", "green", 
      "blue", "violet", "grey", "white"];
    this.multiplier = ["black", "brown", "red", "orange", "yellow", "green", 
      "blue", "violet", "grey", "white", "gold", "silver"];
    this.tolerance = ["brown", "red", "green", "blue", "violet", "grey", 
      "gold", "silver", "none"];
  }

  ngOnInit(): void {
  }

  runCalculations() {
    try {
      this.calculateService.compileResults(this.digits1, this.digits2, this.digits3,
        this.multiplyResult, this.toleranceResult);
      this.results = this.calculateService.getResults();
      this.infoMessage = "";
    } catch (e) {
      this.infoMessage = "Fill out all the band colors please";
    }
  }

}
