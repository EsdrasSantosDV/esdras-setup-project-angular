import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciceNineteenComponent } from './exercice-nineteen.component';

describe('ExerciceNineteenComponent', () => {
  let component: ExerciceNineteenComponent;
  let fixture: ComponentFixture<ExerciceNineteenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExerciceNineteenComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ExerciceNineteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
