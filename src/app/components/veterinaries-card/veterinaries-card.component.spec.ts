import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeterinariesCardComponent } from './veterinaries-card.component';

describe('VeterinariesCardComponent', () => {
  let component: VeterinariesCardComponent;
  let fixture: ComponentFixture<VeterinariesCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VeterinariesCardComponent]
    });
    fixture = TestBed.createComponent(VeterinariesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
