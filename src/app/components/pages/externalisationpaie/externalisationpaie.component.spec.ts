import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalisationpaieComponent } from './externalisationpaie.component';

describe('ExternalisationpaieComponent', () => {
  let component: ExternalisationpaieComponent;
  let fixture: ComponentFixture<ExternalisationpaieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExternalisationpaieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExternalisationpaieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
