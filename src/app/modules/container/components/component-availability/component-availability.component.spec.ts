import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentAvailabilityComponent } from './component-availability.component';

describe('ComponentAvailabilityComponent', () => {
  let component: ComponentAvailabilityComponent;
  let fixture: ComponentFixture<ComponentAvailabilityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentAvailabilityComponent]
    });
    fixture = TestBed.createComponent(ComponentAvailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
