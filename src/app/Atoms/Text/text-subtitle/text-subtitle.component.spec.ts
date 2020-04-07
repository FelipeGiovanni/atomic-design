import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextSubtitleComponent } from './text-subtitle.component';

describe('TextSubtitleComponent', () => {
  let component: TextSubtitleComponent;
  let fixture: ComponentFixture<TextSubtitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextSubtitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextSubtitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
