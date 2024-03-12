import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectAssigneComponent } from './project-assigne.component';

describe('ProjectAssigneComponent', () => {
  let component: ProjectAssigneComponent;
  let fixture: ComponentFixture<ProjectAssigneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectAssigneComponent]
    });
    fixture = TestBed.createComponent(ProjectAssigneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
