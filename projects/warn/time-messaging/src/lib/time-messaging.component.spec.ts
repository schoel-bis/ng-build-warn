import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeMessagingComponent } from './time-messaging.component';

describe('TimeMessagingComponent', () => {
  let component: TimeMessagingComponent;
  let fixture: ComponentFixture<TimeMessagingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimeMessagingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeMessagingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
