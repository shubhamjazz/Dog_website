import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HappydogComponent } from './happydog.component';

describe('HappydogComponent', () => {
  let component: HappydogComponent;
  let fixture: ComponentFixture<HappydogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HappydogComponent]
    });
    fixture = TestBed.createComponent(HappydogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
