import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RacesStartComponent } from './races-start.component';

describe('RacesStartComponent', () => {
  let component: RacesStartComponent;
  let fixture: ComponentFixture<RacesStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RacesStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RacesStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
