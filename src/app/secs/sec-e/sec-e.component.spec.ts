import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecEComponent } from './sec-e.component';

describe('SecEComponent', () => {
  let component: SecEComponent;
  let fixture: ComponentFixture<SecEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SecEComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
