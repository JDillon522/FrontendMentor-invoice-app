import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceTileComponent } from './invoice-tile.component';

describe('InvoiceTileComponent', () => {
  let component: InvoiceTileComponent;
  let fixture: ComponentFixture<InvoiceTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoiceTileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
