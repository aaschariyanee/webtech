import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccDeactComponent } from './acc-deact.component';

describe('AccDeactComponent', () => {
  let component: AccDeactComponent;
  let fixture: ComponentFixture<AccDeactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccDeactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccDeactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
