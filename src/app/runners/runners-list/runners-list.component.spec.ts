import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RunnersListComponent } from './runners-list.component';

describe('RunnersListComponent', () => {
  let component: RunnersListComponent;
  let fixture: ComponentFixture<RunnersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RunnersListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunnersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
