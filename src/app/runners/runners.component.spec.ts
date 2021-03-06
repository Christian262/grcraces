import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RunnersComponent } from './runners.component';

describe('RunnersComponent', () => {
  let component: RunnersComponent;
  let fixture: ComponentFixture<RunnersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RunnersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
