import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercicioThreeComponent } from './exercicio-three.component';

describe('ExercicioThreeComponent', () => {
  let component: ExercicioThreeComponent;
  let fixture: ComponentFixture<ExercicioThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExercicioThreeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExercicioThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
