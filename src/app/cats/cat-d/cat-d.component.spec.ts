import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatDComponent } from './cat-d.component';

describe('CatDComponent', () => {
  let component: CatDComponent;
  let fixture: ComponentFixture<CatDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CatDComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
