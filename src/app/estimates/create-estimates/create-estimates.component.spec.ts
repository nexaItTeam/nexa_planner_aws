import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEstimatesComponent } from './create-estimates.component';

describe('CreateEstimatesComponent', () => {
  let component: CreateEstimatesComponent;
  let fixture: ComponentFixture<CreateEstimatesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateEstimatesComponent]
    });
    fixture = TestBed.createComponent(CreateEstimatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
