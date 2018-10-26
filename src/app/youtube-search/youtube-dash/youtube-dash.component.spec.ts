import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeDashComponent } from './youtube-dash.component';

describe('YoutubeDashComponent', () => {
  let component: YoutubeDashComponent;
  let fixture: ComponentFixture<YoutubeDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YoutubeDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutubeDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
