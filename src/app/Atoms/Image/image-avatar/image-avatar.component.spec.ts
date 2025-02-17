import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageAvatarComponent } from './image-avatar.component';

describe('ImageAvatarComponent', () => {
  let component: ImageAvatarComponent;
  let fixture: ComponentFixture<ImageAvatarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageAvatarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
