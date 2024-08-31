import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartWorkComponent } from './smart-work.component';

describe('SmartWorkComponent', () => {
  let component: SmartWorkComponent;
  let fixture: ComponentFixture<SmartWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SmartWorkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmartWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
