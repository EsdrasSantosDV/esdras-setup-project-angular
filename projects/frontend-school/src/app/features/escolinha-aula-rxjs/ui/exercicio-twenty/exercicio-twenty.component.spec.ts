import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercicioTwentyComponent } from './exercicio-twenty.component';

describe('ExercicioTwentyComponent', () => {
  let component: ExercicioTwentyComponent;
  let fixture: ComponentFixture<ExercicioTwentyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExercicioTwentyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ExercicioTwentyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
