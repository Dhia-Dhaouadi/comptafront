import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoustraitanceexpertcomptableComponent } from './soustraitanceexpertcomptable.component';

describe('SoustraitanceexpertcomptableComponent', () => {
  let component: SoustraitanceexpertcomptableComponent;
  let fixture: ComponentFixture<SoustraitanceexpertcomptableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoustraitanceexpertcomptableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoustraitanceexpertcomptableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
