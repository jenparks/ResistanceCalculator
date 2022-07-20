export class Colors {
  private valueMap : Map<string, number>;
  private multiplierMap : Map<string, number>;
  private toleranceMap : Map<string, string>;

  constructor() {
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
    this.multiplierMap = new Map([
      ["black",1],
      ["brown",10],
      ["red",100],
      ["orange",1000],
      ["yellow",10000],
      ["green",100000],
      ["blue",1000000],
      ["violet",10000000],
      ["grey",100000000],
      ["white",1000000000],
      ["gold",0.1],
      ["silver",0.01]
    ]);
    this.toleranceMap = new Map([
      ["brown","1%"],
      ["red","2%"],
      ["green","0.5%"],
      ["blue","0.25%"],
      ["violet","0.1%"],
      ["grey","0.05%"],
      ["gold","5%"],
      ["silver","10%"],
      ["none","20%"],
    ]);
  }

  getDigitValue(digit : string) : number{
    if(digit == "" || digit == null) {
      throw new Error("Color cannot be null or empty");
    }
    return this.valueMap.get(digit);
  }
  getMultiplierValue(multiply : string) : number {
    if(multiply == "" || multiply == null) {
      throw new Error("Color cannot be null or empty");
    }
    return this.multiplierMap.get(multiply);
  }
  getToleranceValue(tolerance : string) : string{
    if(tolerance == "" || tolerance == null) {
      throw new Error("Color cannot be null or empty");
    }
    return this.toleranceMap.get(tolerance);
  }
}
