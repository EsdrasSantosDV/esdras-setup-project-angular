import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercicioSixteenComponent } from './exercise-sixteen.component';

describe('ExerciseSixteenComponent', () => {
  let component: ExercicioSixteenComponent;
  let fixture: ComponentFixture<ExercicioSixteenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExercicioSixteenComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ExercicioSixteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
