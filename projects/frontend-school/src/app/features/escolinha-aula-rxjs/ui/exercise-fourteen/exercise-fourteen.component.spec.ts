import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseFourteenComponent } from './exercise-fourteen.component';

describe('ExerciseFourteenComponent', () => {
  let component: ExerciseFourteenComponent;
  let fixture: ComponentFixture<ExerciseFourteenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExerciseFourteenComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ExerciseFourteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
