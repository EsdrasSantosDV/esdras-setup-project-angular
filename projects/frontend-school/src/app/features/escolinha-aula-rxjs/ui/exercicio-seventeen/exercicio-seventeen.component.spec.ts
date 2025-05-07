import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercicioSeventeenComponent } from './exercicio-seventeen.component';

describe('ExercicioSeventeenComponent', () => {
  let component: ExercicioSeventeenComponent;
  let fixture: ComponentFixture<ExercicioSeventeenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExercicioSeventeenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExercicioSeventeenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
