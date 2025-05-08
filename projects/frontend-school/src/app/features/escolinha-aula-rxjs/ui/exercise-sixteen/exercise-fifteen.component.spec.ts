import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseFifteenComponent } from './exercise-fifteen.component';

describe('ExerciseFifteenComponent', () => {
  let component: ExerciseFifteenComponent;
  let fixture: ComponentFixture<ExerciseFifteenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExerciseFifteenComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ExerciseFifteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
