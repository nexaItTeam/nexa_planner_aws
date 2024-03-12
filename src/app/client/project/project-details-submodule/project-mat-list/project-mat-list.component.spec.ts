import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectMatListComponent } from './project-mat-list.component';

describe('ProjectMatListComponent', () => {
  let component: ProjectMatListComponent;
  let fixture: ComponentFixture<ProjectMatListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectMatListComponent]
    });
    fixture = TestBed.createComponent(ProjectMatListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
