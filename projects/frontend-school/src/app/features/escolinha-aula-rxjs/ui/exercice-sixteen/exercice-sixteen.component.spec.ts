import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciceSixteenComponent } from './exercice-sixteen.component';

describe('ExerciceSixteenComponent', () => {
  let component: ExerciceSixteenComponent;
  let fixture: ComponentFixture<ExerciceSixteenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExerciceSixteenComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ExerciceSixteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
