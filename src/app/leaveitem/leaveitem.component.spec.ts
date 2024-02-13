import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveitemComponent } from './leaveitem.component';

describe('LeaveitemComponent', () => {
  let component: LeaveitemComponent;
  let fixture: ComponentFixture<LeaveitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeaveitemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LeaveitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
