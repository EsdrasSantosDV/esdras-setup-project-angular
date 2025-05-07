import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercicioElevenComponent } from './exercise-eleven.component';

describe('ExercicioElevenComponent', () => {
  let component: ExercicioElevenComponent;
  let fixture: ComponentFixture<ExercicioElevenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExercicioElevenComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ExercicioElevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
