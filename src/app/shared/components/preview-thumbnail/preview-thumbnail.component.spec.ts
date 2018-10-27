import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewThumbnailComponent } from './preview-thumbnail.component';

describe('PreviewThumbnailComponent', () => {
  let component: PreviewThumbnailComponent;
  let fixture: ComponentFixture<PreviewThumbnailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewThumbnailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
