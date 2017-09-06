import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaceeditComponent } from './raceedit.component';

describe('RaceeditComponent', () => {
  let component: RaceeditComponent;
  let fixture: ComponentFixture<RaceeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaceeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaceeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
