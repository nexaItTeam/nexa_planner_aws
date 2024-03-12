import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleMappingComponent } from './role-mapping.component';

describe('RoleMappingComponent', () => {
  let component: RoleMappingComponent;
  let fixture: ComponentFixture<RoleMappingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoleMappingComponent]
    });
    fixture = TestBed.createComponent(RoleMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
