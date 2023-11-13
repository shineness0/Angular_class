import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildMsgComponent } from './child-msg.component';

describe('ChildMsgComponent', () => {
  let component: ChildMsgComponent;
  let fixture: ComponentFixture<ChildMsgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildMsgComponent]
    });
    fixture = TestBed.createComponent(ChildMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
