import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconAComponent } from './icon-a.component';

describe('IconAComponent', () => {
  let component: IconAComponent;
  let fixture: ComponentFixture<IconAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IconAComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
