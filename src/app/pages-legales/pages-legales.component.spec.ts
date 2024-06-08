import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesLegalesComponent } from './pages-legales.component';

describe('PagesLegalesComponent', () => {
  let component: PagesLegalesComponent;
  let fixture: ComponentFixture<PagesLegalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PagesLegalesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PagesLegalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
