import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalisationpaieComponent } from './internalisationpaie.component';

describe('InternalisationpaieComponent', () => {
  let component: InternalisationpaieComponent;
  let fixture: ComponentFixture<InternalisationpaieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternalisationpaieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalisationpaieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
