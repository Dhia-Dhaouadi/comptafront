import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccompagnementSIRHComponent } from './accompagnement-sirh.component';

describe('AccompagnementSIRHComponent', () => {
  let component: AccompagnementSIRHComponent;
  let fixture: ComponentFixture<AccompagnementSIRHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccompagnementSIRHComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccompagnementSIRHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
