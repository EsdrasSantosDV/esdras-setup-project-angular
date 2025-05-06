import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciceSeventeenComponent } from './exercice-seventeen.component';

describe('ExerciceSeventeenComponent', () => {
  let component: ExerciceSeventeenComponent;
  let fixture: ComponentFixture<ExerciceSeventeenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExerciceSeventeenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExerciceSeventeenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
