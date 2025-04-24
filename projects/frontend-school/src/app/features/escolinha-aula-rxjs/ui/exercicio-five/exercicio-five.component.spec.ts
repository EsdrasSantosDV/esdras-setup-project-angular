import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercicioFiveComponent } from './exercicio-five.component';

describe('ExercicioFiveComponent', () => {
  let component: ExercicioFiveComponent;
  let fixture: ComponentFixture<ExercicioFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExercicioFiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExercicioFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
