import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockSelectNewComponent } from './stock-select-new.component';

describe('StockSelectNewComponent', () => {
  let component: StockSelectNewComponent;
  let fixture: ComponentFixture<StockSelectNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockSelectNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockSelectNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
