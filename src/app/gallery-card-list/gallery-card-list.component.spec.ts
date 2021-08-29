import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryCardListComponent } from './gallery-card-list.component';

describe('GalleryCardListComponent', () => {
  let component: GalleryCardListComponent;
  let fixture: ComponentFixture<GalleryCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryCardListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
