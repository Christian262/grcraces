import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RunnersRunnersComponent } from './runners-runners.component';

describe('RunnersRunnersComponent', () => {
  let component: RunnersRunnersComponent;
  let fixture: ComponentFixture<RunnersRunnersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RunnersRunnersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunnersRunnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
