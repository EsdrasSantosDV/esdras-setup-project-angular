import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercicioTenComponent } from './exercicio-ten.component';

describe('ExercicioTenComponent', () => {
  let component: ExercicioTenComponent;
  let fixture: ComponentFixture<ExercicioTenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExercicioTenComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ExercicioTenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
