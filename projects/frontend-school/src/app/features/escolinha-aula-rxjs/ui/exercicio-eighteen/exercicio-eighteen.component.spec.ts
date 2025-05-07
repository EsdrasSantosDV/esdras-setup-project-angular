import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercicioEighteenComponent } from './exercicio-eighteen.component';

describe('ExercicioEighteenComponent', () => {
  let component: ExercicioEighteenComponent;
  let fixture: ComponentFixture<ExercicioEighteenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExercicioEighteenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExercicioEighteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
