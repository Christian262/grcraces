import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RacesDetailsComponent } from './races-details.component';

describe('RacesDetailsComponent', () => {
  let component: RacesDetailsComponent;
  let fixture: ComponentFixture<RacesDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RacesDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RacesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
