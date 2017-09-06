import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RunnersEditComponent } from './runners-edit.component';

describe('RunnersEditComponent', () => {
  let component: RunnersEditComponent;
  let fixture: ComponentFixture<RunnersEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RunnersEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunnersEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
