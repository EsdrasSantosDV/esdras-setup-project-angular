import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercicioNineComponent } from './exercicio-nine.component';

describe('ExercicioNineComponent', () => {
  let component: ExercicioNineComponent;
  let fixture: ComponentFixture<ExercicioNineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExercicioNineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExercicioNineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
