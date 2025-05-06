import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciceEighteenComponent } from './exercice-eighteen.component';

describe('ExerciceEighteenComponent', () => {
  let component: ExerciceEighteenComponent;
  let fixture: ComponentFixture<ExerciceEighteenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExerciceEighteenComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ExerciceEighteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
