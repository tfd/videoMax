import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorVideoImportComponent } from './editor-video-import.component';

describe('EditorVideoImportComponent', () => {
  let component: EditorVideoImportComponent;
  let fixture: ComponentFixture<EditorVideoImportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorVideoImportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorVideoImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
