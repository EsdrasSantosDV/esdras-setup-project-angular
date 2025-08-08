import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SsePocComponent } from './sse-poc.component';

describe('SsePocComponent', () => {
  let component: SsePocComponent;
  let fixture: ComponentFixture<SsePocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SsePocComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SsePocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
