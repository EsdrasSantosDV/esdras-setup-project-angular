import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercicioSevenComponent } from './exercicio-seven.component';

describe('ExercicioSevenComponent', () => {
  let component: ExercicioSevenComponent;
  let fixture: ComponentFixture<ExercicioSevenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExercicioSevenComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ExercicioSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
