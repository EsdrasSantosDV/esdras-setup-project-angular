import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercicioFourteenComponent } from './exercise-fourteen.component';

describe('ExercicioFourteenComponent', () => {
  let component: ExercicioFourteenComponent;
  let fixture: ComponentFixture<ExercicioFourteenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExercicioFourteenComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ExercicioFourteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
