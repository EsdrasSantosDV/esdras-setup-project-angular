import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercicioSixComponent } from './exercicio-six.component';

describe('ExercicioSixComponent', () => {
  let component: ExercicioSixComponent;
  let fixture: ComponentFixture<ExercicioSixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExercicioSixComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ExercicioSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
