import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseSeventeenComponent } from './exercise-seventeen.component';

describe('ExerciseSeventeenComponent', () => {
  let component: ExerciseSeventeenComponent;
  let fixture: ComponentFixture<ExerciseSeventeenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExerciseSeventeenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExerciseSeventeenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
