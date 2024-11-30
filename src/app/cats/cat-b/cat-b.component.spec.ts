import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatBComponent } from './cat-b.component';

describe('CatBComponent', () => {
  let component: CatBComponent;
  let fixture: ComponentFixture<CatBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CatBComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
