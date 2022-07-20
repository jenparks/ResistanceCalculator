import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { ResistanceComponent } from './resistance.component';
import { CalculateServiceService } from '../../services/calculate-service.service';

describe('ResistanceComponent', () => {
  let component: ResistanceComponent;
  let fixture: ComponentFixture<ResistanceComponent>;
  let service: CalculateServiceService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ ResistanceComponent ],
      providers: [ CalculateServiceService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResistanceComponent);
    component = fixture.componentInstance;
    service = fixture.debugElement.injector.get(CalculateServiceService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add colors and produce results', () => {
    component.digits1="brown";
    component.digits2="brown";
    component.digits3="brown";
    component.multiplyResult="blue";
    component.toleranceResult="red";
    component.runCalculations();
    expect(service.getResults()).toEqual("111000000 +/- 2%");
    expect(component.results).toEqual("111000000 +/- 2%");
  });

  it('should return an error with an updated infoMessage', () => {
    expect(component.infoMessage).toEqual("Select colors below");
    component.digits1="brown";
    component.digits3="brown";
    component.multiplyResult="blue";
    component.toleranceResult="red";
    component.runCalculations();
    expect(component.infoMessage).toEqual("Fill out all the band colors please");
  });




});
