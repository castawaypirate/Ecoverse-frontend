import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderpanelComponent } from './headerpanel.component';

describe('HeaderpanelComponent', () => {
  let component: HeaderpanelComponent;
  let fixture: ComponentFixture<HeaderpanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderpanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
