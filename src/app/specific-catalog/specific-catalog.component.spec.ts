import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificCatalogComponent } from './specific-catalog.component';

describe('SpecificCatalogComponent', () => {
  let component: SpecificCatalogComponent;
  let fixture: ComponentFixture<SpecificCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecificCatalogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpecificCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
