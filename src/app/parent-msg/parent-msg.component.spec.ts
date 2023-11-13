import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentMsgComponent } from './parent-msg.component';

describe('ParentMsgComponent', () => {
  let component: ParentMsgComponent;
  let fixture: ComponentFixture<ParentMsgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParentMsgComponent]
    });
    fixture = TestBed.createComponent(ParentMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
