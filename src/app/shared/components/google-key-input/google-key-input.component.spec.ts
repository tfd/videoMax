import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleKeyInputComponent } from './google-key-input.component';

describe('GoogleKeyInputComponent', () => {
  let component: GoogleKeyInputComponent;
  let fixture: ComponentFixture<GoogleKeyInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleKeyInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleKeyInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
