import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercicioFourComponent } from './exercicio-four.component';

describe('ExercicioFourComponent', () => {
  let component: ExercicioFourComponent;
  let fixture: ComponentFixture<ExercicioFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExercicioFourComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ExercicioFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
