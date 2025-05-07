import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercicioNineteenComponent } from './exercicio-nineteen.component';

describe('ExercicioNineteenComponent', () => {
  let component: ExercicioNineteenComponent;
  let fixture: ComponentFixture<ExercicioNineteenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExercicioNineteenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExercicioNineteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
