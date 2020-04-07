import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescribeCardsComponent } from './describe-cards.component';

describe('DescribeCardsComponent', () => {
  let component: DescribeCardsComponent;
  let fixture: ComponentFixture<DescribeCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescribeCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescribeCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
