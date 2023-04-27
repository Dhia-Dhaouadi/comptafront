import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BilonSocialeComponent } from './bilon-sociale.component';

describe('BilonSocialeComponent', () => {
  let component: BilonSocialeComponent;
  let fixture: ComponentFixture<BilonSocialeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BilonSocialeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BilonSocialeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
