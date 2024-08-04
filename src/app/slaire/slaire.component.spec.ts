import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlaireComponent } from './slaire.component';

describe('SlaireComponent', () => {
  let component: SlaireComponent;
  let fixture: ComponentFixture<SlaireComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SlaireComponent]
    });
    fixture = TestBed.createComponent(SlaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
