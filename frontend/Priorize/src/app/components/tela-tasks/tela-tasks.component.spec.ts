import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaTasksComponent } from './tela-tasks.component';

describe('TelaTasksComponent', () => {
  let component: TelaTasksComponent;
  let fixture: ComponentFixture<TelaTasksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TelaTasksComponent]
    });
    fixture = TestBed.createComponent(TelaTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
