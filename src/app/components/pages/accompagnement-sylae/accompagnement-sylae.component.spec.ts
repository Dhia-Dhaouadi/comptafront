import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccompagnementSylaeComponent } from './accompagnement-sylae.component';

describe('AccompagnementSylaeComponent', () => {
  let component: AccompagnementSylaeComponent;
  let fixture: ComponentFixture<AccompagnementSylaeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccompagnementSylaeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccompagnementSylaeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
