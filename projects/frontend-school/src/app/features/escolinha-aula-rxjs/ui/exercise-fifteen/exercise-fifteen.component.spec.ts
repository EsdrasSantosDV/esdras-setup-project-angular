import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercicioFifteenComponent } from './exercise-fifteen.component';

describe('ExercicioFifteenComponent', () => {
  let component: ExercicioFifteenComponent;
  let fixture: ComponentFixture<ExercicioFifteenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExercicioFifteenComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ExercicioFifteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
