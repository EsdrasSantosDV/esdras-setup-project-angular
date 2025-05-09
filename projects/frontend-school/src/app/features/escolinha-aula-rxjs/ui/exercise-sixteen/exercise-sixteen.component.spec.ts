import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseSixteenComponent } from './exercise-sixteen.component';

describe('ExerciseSixteenComponent', () => {
  let component: ExerciseSixteenComponent;
  let fixture: ComponentFixture<ExerciseSixteenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExerciseSixteenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExerciseSixteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
