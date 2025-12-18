import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PocEventComponent } from './poc-event.component';

describe('PocEventComponent', () => {
  let component: PocEventComponent;
  let fixture: ComponentFixture<PocEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PocEventComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PocEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

