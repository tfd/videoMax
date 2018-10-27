import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeSearchViewComponent } from './youtube-search-view.component';

describe('YoutubeSearchViewComponent', () => {
  let component: YoutubeSearchViewComponent;
  let fixture: ComponentFixture<YoutubeSearchViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YoutubeSearchViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutubeSearchViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
