import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RunnersInfoComponent } from './runners-info.component';

describe('RunnersInfoComponent', () => {
  let component: RunnersInfoComponent;
  let fixture: ComponentFixture<RunnersInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RunnersInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunnersInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
