import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewPlayerComponent } from './preview-player.component';

describe('PreviewPlayerComponent', () => {
  let component: PreviewPlayerComponent;
  let fixture: ComponentFixture<PreviewPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
