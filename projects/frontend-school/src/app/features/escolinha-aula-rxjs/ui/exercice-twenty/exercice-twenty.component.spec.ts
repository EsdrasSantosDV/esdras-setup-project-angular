import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciceTwentyComponent } from './exercice-twenty.component';

describe('ExerciceTwentyComponent', () => {
  let component: ExerciceTwentyComponent;
  let fixture: ComponentFixture<ExerciceTwentyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExerciceTwentyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExerciceTwentyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
