import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseTwelveComponent } from './exercise-twelve.component';

describe('ExerciseTwelveComponent', () => {
  let component: ExerciseTwelveComponent;
  let fixture: ComponentFixture<ExerciseTwelveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExerciseTwelveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExerciseTwelveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
