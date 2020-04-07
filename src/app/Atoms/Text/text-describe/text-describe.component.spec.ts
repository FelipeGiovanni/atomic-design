import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextDescribeComponent } from './text-describe.component';

describe('TextDescribeComponent', () => {
  let component: TextDescribeComponent;
  let fixture: ComponentFixture<TextDescribeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextDescribeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextDescribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
