import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercicioTwelveComponent } from './exercise-twelve.component';

describe('ExercicioTwelveComponent', () => {
  let component: ExercicioTwelveComponent;
  let fixture: ComponentFixture<ExercicioTwelveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExercicioTwelveComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ExercicioTwelveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
