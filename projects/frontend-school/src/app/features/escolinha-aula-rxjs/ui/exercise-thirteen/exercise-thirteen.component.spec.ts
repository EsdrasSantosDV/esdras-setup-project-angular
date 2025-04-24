import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseThirteenComponent } from './exercise-thirteen.component';

describe('ExerciseThirteenComponent', () => {
  let component: ExerciseThirteenComponent;
  let fixture: ComponentFixture<ExerciseThirteenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExerciseThirteenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExerciseThirteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
