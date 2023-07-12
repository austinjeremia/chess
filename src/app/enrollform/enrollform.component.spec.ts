import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollformComponent } from './enrollform.component';

describe('EnrollformComponent', () => {
  let component: EnrollformComponent;
  let fixture: ComponentFixture<EnrollformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnrollformComponent]
    });
    fixture = TestBed.createComponent(EnrollformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
