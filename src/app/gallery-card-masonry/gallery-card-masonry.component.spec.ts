import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryCardMasonryComponent } from './gallery-card-masonry.component';

describe('GalleryCardMasonryComponent', () => {
  let component: GalleryCardMasonryComponent;
  let fixture: ComponentFixture<GalleryCardMasonryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryCardMasonryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryCardMasonryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
