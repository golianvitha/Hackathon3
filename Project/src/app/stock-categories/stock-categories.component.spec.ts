import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockCategoriesComponent } from './stock-categories.component';

describe('StockCategoriesComponent', () => {
  let component: StockCategoriesComponent;
  let fixture: ComponentFixture<StockCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockCategoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
