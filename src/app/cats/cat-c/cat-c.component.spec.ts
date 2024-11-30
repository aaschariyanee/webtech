import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatCComponent } from './cat-c.component';

describe('CatCComponent', () => {
  let component: CatCComponent;
  let fixture: ComponentFixture<CatCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CatCComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
