import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercicioOneComponent } from './exercicio-one.component';

describe('ExercicioOneComponent', () => {
  let component: ExercicioOneComponent;
  let fixture: ComponentFixture<ExercicioOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExercicioOneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExercicioOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
