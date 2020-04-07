import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageAuxComponent } from './image-aux.component';

describe('ImageAuxComponent', () => {
  let component: ImageAuxComponent;
  let fixture: ComponentFixture<ImageAuxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageAuxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageAuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
