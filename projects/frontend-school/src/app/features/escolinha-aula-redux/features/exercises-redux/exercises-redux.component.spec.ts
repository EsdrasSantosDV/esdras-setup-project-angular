import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercisesReduxComponent } from './exercises-redux.component';

describe('ExercisesReduxComponent', () => {
  let component: ExercisesReduxComponent;
  let fixture: ComponentFixture<ExercisesReduxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExercisesReduxComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ExercisesReduxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
