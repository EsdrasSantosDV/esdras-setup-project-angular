import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercicioThirteenComponent } from './exercise-thirteen.component';

describe('ExercicioThirteenComponent', () => {
  let component: ExercicioThirteenComponent;
  let fixture: ComponentFixture<ExercicioThirteenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExercicioThirteenComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ExercicioThirteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
