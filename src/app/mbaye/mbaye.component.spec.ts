import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MbayeComponent } from './mbaye.component';

describe('MbayeComponent', () => {
  let component: MbayeComponent;
  let fixture: ComponentFixture<MbayeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MbayeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MbayeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
