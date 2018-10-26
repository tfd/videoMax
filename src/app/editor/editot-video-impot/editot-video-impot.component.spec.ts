import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditotVideoImpotComponent } from './editot-video-impot.component';

describe('EditotVideoImpotComponent', () => {
  let component: EditotVideoImpotComponent;
  let fixture: ComponentFixture<EditotVideoImpotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditotVideoImpotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditotVideoImpotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
