import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercisesRxjsComponent } from './exercises-rxjs.component';

describe('ExercisesRxjsComponent', () => {
  let component: ExercisesRxjsComponent;
  let fixture: ComponentFixture<ExercisesRxjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExercisesRxjsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ExercisesRxjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
