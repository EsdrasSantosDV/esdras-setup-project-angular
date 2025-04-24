import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercicioTwoComponent } from './exercicio-two.component';

describe('ExercicioTwoComponent', () => {
  let component: ExercicioTwoComponent;
  let fixture: ComponentFixture<ExercicioTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExercicioTwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExercicioTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
