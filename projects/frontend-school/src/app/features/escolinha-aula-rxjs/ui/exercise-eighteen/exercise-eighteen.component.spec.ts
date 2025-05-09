import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseEighteenComponent } from './exercise-eighteen.component';

describe('ExerciseEighteenComponent', () => {
  let component: ExerciseEighteenComponent;
  let fixture: ComponentFixture<ExerciseEighteenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExerciseEighteenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExerciseEighteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
