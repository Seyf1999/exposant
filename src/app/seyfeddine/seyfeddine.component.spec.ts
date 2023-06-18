import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeyfeddineComponent } from './seyfeddine.component';

describe('SeyfeddineComponent', () => {
  let component: SeyfeddineComponent;
  let fixture: ComponentFixture<SeyfeddineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeyfeddineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeyfeddineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
