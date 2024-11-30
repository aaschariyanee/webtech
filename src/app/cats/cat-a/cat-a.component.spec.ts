import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatAComponent } from './cat-a.component';

describe('CatAComponent', () => {
  let component: CatAComponent;
  let fixture: ComponentFixture<CatAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CatAComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
