import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextTittleComponent } from './text-tittle.component';

describe('TextTittleComponent', () => {
  let component: TextTittleComponent;
  let fixture: ComponentFixture<TextTittleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextTittleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextTittleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
