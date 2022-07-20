import { TestBed } from '@angular/core/testing';

import { CalculateServiceService } from './calculate-service.service';

describe('CalculateServiceService', () => {
  let service: CalculateServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculateServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return empty initial results', () => {
    const testService = new CalculateServiceService();
    expect(testService.getResults()).toEqual("");
  });

  it('should return multiplied results as a string', () => {
    const testService = new CalculateServiceService();
    testService.compileResults("green", "green", "green", "red", "brown");
    expect(testService.getResults()).toEqual("55500 +/- 1%");
  });

});
