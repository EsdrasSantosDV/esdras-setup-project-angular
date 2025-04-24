import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercicioEightComponent } from './exercicio-eight.component';

describe('ExercicioEightComponent', () => {
  let component: ExercicioEightComponent;
  let fixture: ComponentFixture<ExercicioEightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExercicioEightComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExercicioEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
