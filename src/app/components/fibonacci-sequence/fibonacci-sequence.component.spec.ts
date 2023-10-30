import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import { FibonacciSequenceComponent } from './fibonacci-sequence.component';
import { FormsModule } from '@angular/forms';

import { By } from '@angular/platform-browser';

describe('FibonacciSequenceComponent', () => {
  let component: FibonacciSequenceComponent;
  let fixture: ComponentFixture<FibonacciSequenceComponent>;

  beforeEach(async () => {
    const mockFiboService = {
      fibonacciGen: jasmine.createSpy(),
    };

    mockFiboService.fibonacciGen.withArgs(5).and.returnValue([0, 1, 1, 2, 3]);
    mockFiboService.fibonacciGen.withArgs(-1).and.returnValue([]);

    await TestBed.configureTestingModule({
      declarations: [FibonacciSequenceComponent],
      imports: [FormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FibonacciSequenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Tests go here
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should generate correct Fibonacci sequence', fakeAsync(() => {
    component.inputNum = 5;
    component.generateSequence();
    tick(1000);
    fixture.detectChanges();

    expect(component.fibonacciSequence.length).toEqual(5);
    expect(component.fibonacciSequence).toEqual([0, 1, 1, 2, 3]);
  }));

  it('should display error for invalid input', () => {
    component.inputNum = -1;
    component.generateSequence();
    expect(component.hasError).toBeTruthy();
  });

  it('should display error message in the DOM for invalid input', fakeAsync(() => {
    component.inputNum = -1;
    component.generateSequence();
    tick(1000);
    fixture.detectChanges();
    const errorMessageElement = fixture.debugElement.query(By.css('.error'));
    console.log('DanielDanielErrorMessage', errorMessageElement);
    expect(errorMessageElement.nativeElement.textContent).toContain(
      'Please enter a positive number'
    );
  }));

  it('should display loading spinner while generating sequence', fakeAsync(() => {
    component.inputNum = 5;
    component.generateSequence();
    expect(component.isLoading).toBeTrue();
    tick(1000);
    fixture.detectChanges();
    expect(component.isLoading).toBeFalse();
  }));
});
