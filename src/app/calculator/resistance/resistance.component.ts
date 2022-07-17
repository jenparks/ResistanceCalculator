import { Component, OnInit } from '@angular/core';

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
  public digits1 : number;
  public digits2 : number;
  public digits3 : number;
  public multiplyResult : number;
  public toleranceResult : number;

  constructor() { 
    this.results = 0;
    this.figures = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];
    this.multiplier = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white", "gold", "silver"];
    this.tolerance = ["brown", "red", "green", "blue", "violet", "grey", "gold", "silver", "none"];
  }

  ngOnInit(): void {
  }

  runCalculations() {
    
    this.results = this.digits1 + this.digits2 + this.digits3;
  }

}
